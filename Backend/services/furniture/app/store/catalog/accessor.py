from typing import TYPE_CHECKING
from sqlalchemy import select, insert

from app.catalog.models import CatalogModel
from app.base.base_accessor import BaseAccessor
from app.catalog.schemes import CatalogSchema
from app.web.utils import image_to_binary

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

    async def create_new_catalog(self, title: str, path: str) -> CatalogModel | None:
        request = insert(CatalogModel).values(title=title, image=image_to_binary(path))
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

        request = select(CatalogModel).where(title == title)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            return res.scalars().one()
