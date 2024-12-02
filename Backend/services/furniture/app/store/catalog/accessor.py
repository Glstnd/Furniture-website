import base64
from typing import TYPE_CHECKING

from sqlalchemy import select, insert, update, delete, and_

from aiohttp.web_exceptions import HTTPConflict, HTTPForbidden
from app.catalog.models import CatalogModel, TypeProductModel, ProductModel
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


class TypeAccessor(BaseAccessor):
    async def connect(self, app: "Application") -> None:
        self.app = app

    async def get_list_of_types(self, catalog_id: int) -> list[TypeProductModel]:
        types: list[TypeProductModel] = []

        request = select(TypeProductModel).where(TypeProductModel.catalog_id == catalog_id)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            for type_product in res.scalars().all():
                type_product.image = base64.b64encode(type_product.image).decode("utf-8")
                types.append(type_product)

        return types

    async def get_type_by_tag(self, tag_str: str, catalog_id: int ) -> TypeProductModel | None:
        request = select(TypeProductModel).where(and_(
            TypeProductModel.tag == tag_str,
            TypeProductModel.catalog_id == catalog_id)
        )
        async with self.app.database.session() as session:
            res = await session.execute(request)

            try:
                type_product = res.scalars().one()
                type_product.image = base64.b64encode(type_product.image).decode("utf-8")
                return type_product
            except Exception:
                return None

    async def update_type(self, data: dict, type_tag: str, catalog_id: int ) -> TypeProductModel | None:
        if "image" in data:
            image = base64.b64decode(data.get("image"))
            data.pop("image")

            request = update(TypeProductModel).where(and_(
            TypeProductModel.tag == type_tag,
            TypeProductModel.catalog_id == catalog_id)
            ).values(**data, image=image)
            async with self.app.database.session() as session:
                await session.execute(request)
                await session.commit()
        else:
            request = update(TypeProductModel).where(and_(
            TypeProductModel.tag == type_tag,
            TypeProductModel.catalog_id == catalog_id)
            ).values(**data)
            async with self.app.database.session() as session:
                await session.execute(request)
                await session.commit()

        return await self.get_type_by_tag(type_tag)

    async def delete_type(self, type_tag: str, catalog_id: int) -> None:
        request = delete(TypeProductModel).where(and_(
            TypeProductModel.tag == type_tag,
            TypeProductModel.catalog_id == catalog_id)
            )
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

    async def create_new_type(self, data: dict, catalog_id: int) -> TypeProductModel | None:
        title = data.get("title")
        tag = data.get("tag")

        if not title or not tag:
            raise HTTPForbidden

        type_product = await self.get_type_by_tag(tag, catalog_id)
        if type_product:
            raise HTTPConflict

        image = base64.b64decode(data.get("image"))
        data.pop("image")

        request = insert(TypeProductModel).values(**data, image=image, catalog_id=catalog_id)
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

        return await self.get_type_by_tag(tag, catalog_id)


class ProductAccessor(BaseAccessor):
    async def connect(self, app: "Application") -> None:
        self.app = app

    async def get_list_of_products(self, type_id: int) -> list[TypeProductModel]:
        products: list[TypeProductModel] = []

        request = select(TypeProductModel).where(TypeProductModel.type_id == type_id)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            for product in res.scalars().all():
                product.image = base64.b64encode(product.image).decode("utf-8")
                products.append(product)

        return products

    async def get_product_by_tag(self, tag_str: str, type_id: int) -> ProductModel | None:
        request = select(ProductModel).where(and_(
            ProductModel.tag == tag_str,
            ProductModel.type_id == type_id)
        )
        async with self.app.database.session() as session:
            res = await session.execute(request)

            try:
                product = res.scalars().one()
                product.image = base64.b64encode(product.image).decode("utf-8")
                return product
            except Exception:
                return None

    async def create_new_product(self, data: dict, type_id: int) -> ProductModel | None:
        title = data.get("title")
        tag = data.get("tag")

        if not title or not tag:
            raise HTTPForbidden(text="Title or tag not found")

        product = await self.get_product_by_tag(tag, type_id)
        if product:
            raise HTTPConflict(text="Product already exists")

        image = base64.b64decode(data.get("image"))
        data.pop("image")

        request = insert(ProductModel).values(**data, image=image, type_id=type_id)
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

        return await self.get_product_by_tag(tag, type_id)

    async def update_product(self, data: dict, product_tag: str, type_id: int) -> ProductModel | None:
        if "image" in data:
            image = base64.b64decode(data.get("image"))
            data.pop("image")

            request = update(ProductModel).where(and_(
            ProductModel.tag == product_tag,
            ProductModel.type_id == type_id)
            ).values(**data, image=image)
            async with self.app.database.session() as session:
                await session.execute(request)
                await session.commit()
        else:
            request = update(ProductModel).where(and_(
            ProductModel.tag == product_tag,
            ProductModel.type_id == type_id)
            ).values(**data)
            async with self.app.database.session() as session:
                await session.execute(request)
                await session.commit()

        return await self.get_product_by_tag(product_tag, type_id)

    async def delete_product(self, product_tag: str, type_id: int) -> None:
        request = delete(ProductModel).where(and_(
            ProductModel.tag == product_tag,
            ProductModel.type_id == type_id)
            )
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()