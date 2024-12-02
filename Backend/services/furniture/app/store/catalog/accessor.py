import base64
from typing import TYPE_CHECKING

from sqlalchemy import select, insert, update, delete

from aiohttp.web_exceptions import HTTPConflict, HTTPForbidden
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
                catalog.image = base64.b64encode(catalog.image).decode("utf-8")
                catalogs.append(catalog)

        return catalogs

    async def get_catalog_by_tag(self, tag_str: str) -> CatalogModel | None:
        request = select(CatalogModel).where(CatalogModel.tag == tag_str)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            try:
                catalog = res.scalars().one()
                catalog.image = base64.b64encode(catalog.image).decode("utf-8")
                return catalog
            except Exception:
                return None

    async def create_new_catalog(self, data: dict) -> CatalogModel | None:
        title = data.get("title")
        tag = data.get("tag")

        if not title or not tag:
            raise HTTPForbidden

        catalog = await self.get_catalog_by_tag(tag)
        if catalog:
            raise HTTPConflict

        image = base64.b64decode(data.get("image"))
        data.pop("image")

        request = insert(CatalogModel).values(**data, image=image)
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

        request = select(CatalogModel).where(CatalogModel.title == title)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            catalog = res.scalars().one()
            catalog.image = base64.b64encode(catalog.image).decode("utf-8")
            return catalog

    async def update_catalog(self, data: dict, catalog_tag: str) -> CatalogModel | None:
        if "image" in data:
            image = base64.b64decode(data.get("image"))
            data.pop("image")

            request = update(CatalogModel).where(CatalogModel.tag == catalog_tag).values(**data, image=image)
            async with self.app.database.session() as session:
                await session.execute(request)
                await session.commit()
        else:
            request = update(CatalogModel).where(CatalogModel.tag == catalog_tag).values(**data)
            async with self.app.database.session() as session:
                await session.execute(request)
                await session.commit()

        return await self.get_catalog_by_tag(catalog_tag)

    async def delete_catalog(self, catalog_tag: str) -> None:
        request = delete(CatalogModel).where(CatalogModel.tag == catalog_tag)
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()
