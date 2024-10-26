from typing import TYPE_CHECKING
from sqlalchemy import select, insert

from aiohttp.web_exceptions import HTTPConflict
from app.catalog.models import CatalogModel
from app.base.base_accessor import BaseAccessor

if TYPE_CHECKING:
    from app.web.app import Application


class CatalogAccessor(BaseAccessor):
    async def connect(self, app: "Application") -> None:
        self.app = app

    async def get_list_of_catalogs(self) -> list[CatalogModel]:
        catalogs: list[CatalogModel] = []

        request = select(CatalogModel)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            for catalog in res.scalars().all():
                catalogs.append(catalog)

        return catalogs

    async def get_catalog_by_tag(self, tag: str) -> CatalogModel | None:
        request = select(CatalogModel).where(CatalogModel.tag == tag)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            try:
                return res.scalars().one()
            except Exception:
                return None

    async def create_new_catalog(self, title: str, tag: str) -> CatalogModel | None:
        catalog = await self.get_catalog_by_tag(tag)
        if catalog:
            raise HTTPConflict

        request = insert(CatalogModel).values(title=title, tag=tag)
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

        request = select(CatalogModel).where(CatalogModel.title == title)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            return res.scalars().one()
