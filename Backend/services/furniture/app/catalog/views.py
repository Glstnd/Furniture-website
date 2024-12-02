from aiohttp.web_exceptions import HTTPForbidden, HTTPNotFound
from aiohttp_apispec import response_schema, docs, request_schema

from app.catalog.models import CatalogModel, TypeProductModel, ProductModel
from app.catalog.schemes import CatalogSchema, TypeSchema, ListOfCatalogsSchema, ListOfTypesSchema, \
    ListOfProductsSchema, ProductSchema
from app.web.app import View
from app.web.mixins import AuthRequiredMixin
from app.web.utils import json_response


class CatalogListView(View):
    @docs(tags=["catalog"], summary="List of catalog", description="Get list of catalog")
    @response_schema(ListOfCatalogsSchema, 200)
    async def get(self):
        catalogs = await self.store.catalogs.get_list_of_catalogs()

        return json_response(data=ListOfCatalogsSchema().dump({"catalogs": catalogs}))


class CatalogCreateView(View):
    @docs(tags=["catalog"], summary="Create new catalog", description="Create new catalog")
    @request_schema(CatalogSchema)
    @response_schema(CatalogSchema, 200)
    async def post(self):
        # await AuthRequiredMixin.check_auth_admin(self.request)

        data = self.data

        catalog = await self.store.catalogs.create_new_catalog(data)

        return json_response(data=CatalogSchema().dump(catalog))


class CatalogView(View):
    @docs(tags=["catalog"], summary="Change catalog", description="Change catalog")
    @request_schema(CatalogSchema)
    @response_schema(CatalogSchema, 200)
    async def put(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        data = self.data

        catalog = await self.store.catalogs.update_catalog(data, catalog_tag)

        return json_response(data=CatalogSchema().dump(catalog))

    @docs(tags=["catalog"], summary="Delete catalog", description="Delete catalog")
    @response_schema(CatalogSchema, 200)
    async def delete(self):
        catalog_tag = self.request.match_info["catalog_tag"]

        await self.store.catalogs.delete_catalog(catalog_tag)

        return json_response(data={"data": "Catalog deleted"})

    @docs(tags=["catalog"], summary="Get info catalog", description="Get info catalog")
    @response_schema(CatalogSchema, 200)
    async def get(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        catalog = self.store.catalogs.get_catalog_by_tag(catalog_tag)

        return json_response(data=CatalogSchema().dump(catalog))


class TypesListView(View):
    @docs(tags=["type"], summary="Get list types", description="Get list types")
    @response_schema(ListOfTypesSchema, 200)
    async def get(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        types = await self.store.types.get_list_of_types(catalog.id)

        return json_response(data=ListOfTypesSchema().dump({"types": types}))


class TypeView(View):
    @docs(tags=["type"], summary="Change type", description="Change type")
    @request_schema(TypeSchema)
    @response_schema(TypeSchema, 200)
    async def put(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        type_tag = self.request.match_info["type_tag"]
        type_product: TypeProductModel | None = self.store.types.get_type_by_tag(type_tag, catalog.id)
        if not type_product:
            raise HTTPNotFound(text="Type of product not found")

        data = self.data

        type_product = await self.store.types.update_type(data, type_tag, catalog.id)

        return json_response(data=TypeSchema().dump(type_product))

    @docs(tags=["type"], summary="Delete type", description="Delete type")
    @response_schema(TypeSchema, 200)
    async def delete(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        type_tag = self.request.match_info["type_tag"]
        type_product: TypeProductModel | None = self.store.types.get_type_by_tag(type_tag, catalog.id)
        if not type_product:
            raise HTTPNotFound(text="Type of product not found")

        await self.store.types.delete_type(type_tag, catalog.id)

        return json_response(data={"data": "Type of product deleted"})

    @docs(tags=["type"], summary="Get info type", description="Get info type")
    @response_schema(TypeSchema, 200)
    async def get(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        type_tag = self.request.match_info["type_tag"]
        type_product: TypeProductModel | None = self.store.types.get_type_by_tag(type_tag, catalog.id)
        if not type_product:
            raise HTTPNotFound(text="Type of product not found")

        return json_response(data=TypeSchema().dump(type_product))


class TypeCreateView(View):
    @docs(tags=["type"], summary="Create new type", description="Create new type")
    @request_schema(TypeSchema)
    @response_schema(TypeSchema, 200)
    async def post(self):
        # await AuthRequiredMixin.check_auth_admin(self.request)

        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        type_tag = self.request.match_info["type_tag"]
        type_product: TypeProductModel | None = self.store.types.get_type_by_tag(type_tag, catalog.id)
        if not type_product:
            raise HTTPNotFound(text="Type of product not found")

        data = self.data

        type_product = await self.store.types.create_new_type(data, catalog.id)

        return json_response(data=TypeSchema().dump(type_product))


class ProductsListView(View):
    @docs(tags=["product"], summary="Get list products", description="Get list products")
    @response_schema(ListOfProductsSchema, 200)
    async def get(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        type_tag = self.request.match_info["type_tag"]
        type_product: TypeProductModel | None = self.store.types.get_type_by_tag(type_tag, catalog.id)
        if not type_product:
            raise HTTPNotFound(text="Type of product not found")

        products = await self.store.products.get_list_of_products(type_product.id)

        return json_response(data=ListOfProductsSchema().dump({"products": products}))


class ProductCreateView(View):
    @docs(tags=["product"], summary="Create new type", description="Create new type")
    @request_schema(ProductSchema)
    @response_schema(ProductSchema, 200)
    async def post(self):
        # await AuthRequiredMixin.check_auth_admin(self.request)

        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        type_tag = self.request.match_info["type_tag"]
        type_product: TypeProductModel | None = self.store.types.get_type_by_tag(type_tag, catalog.id)
        if not type_product:
            raise HTTPNotFound(text="Type of product not found")

        data = self.data

        product = await self.store.products.create_new_product(data, type_product.id)

        return json_response(data=ProductSchema().dump(product))


class ProductView(View):
    @docs(tags=["product"], summary="Change product", description="Change product")
    @request_schema(ProductSchema)
    @response_schema(ProductSchema, 200)
    async def put(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        type_tag = self.request.match_info["type_tag"]
        type_product: TypeProductModel | None = self.store.types.get_type_by_tag(type_tag, catalog.id)
        if not type_product:
            raise HTTPNotFound(text="Type of product not found")

        product_tag = self.request.match_info["product_tag"]
        product: ProductModel | None = self.store.products.get_product_by_tag(product_tag, type_product.id)
        if not product:
            raise HTTPNotFound(text="Type of product not found")

        data = self.data

        product = await self.store.products.update_product(data, product_tag, catalog.id)

        return json_response(data=ProductSchema().dump(product))

    @docs(tags=["product"], summary="Delete product", description="Delete product")
    @response_schema(ProductSchema, 200)
    async def delete(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        type_tag = self.request.match_info["type_tag"]
        type_product: TypeProductModel | None = self.store.types.get_type_by_tag(type_tag, catalog.id)
        if not type_product:
            raise HTTPNotFound(text="Type of product not found")

        product_tag = self.request.match_info["product_tag"]
        product: ProductModel | None = self.store.products.get_product_by_tag(product_tag, type_product.id)
        if not product:
            raise HTTPNotFound(text="Type of product not found")

        await self.store.products.delete_product(product_tag, type_product.id)

        return json_response(data={"data": "Product deleted"})

    @docs(tags=["product"], summary="Get info product", description="Get info product")
    @response_schema(ProductSchema, 200)
    async def get(self):
        catalog_tag = self.request.match_info["catalog_tag"]
        catalog: CatalogModel | None = self.store.catalogs.get_catalog_by_tag(catalog_tag)
        if not catalog:
            raise HTTPNotFound(text="Catalog not found")

        type_tag = self.request.match_info["type_tag"]
        type_product: TypeProductModel | None = self.store.types.get_type_by_tag(type_tag, catalog.id)
        if not type_product:
            raise HTTPNotFound(text="Type of product not found")

        product_tag = self.request.match_info["product_tag"]
        product: ProductModel | None = self.store.products.get_product_by_tag(product_tag, type_product.id)
        if not product:
            raise HTTPNotFound(text="Type of product not found")

        return json_response(data=ProductSchema().dump(product))
