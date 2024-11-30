from aiohttp.web_exceptions import HTTPForbidden
from aiohttp_apispec import response_schema, docs, request_schema

from app.catalog.schemes import CatalogSchema, TypeSchema, ListOfCatalogsSchema, ListOfTypesSchema
from app.web.app import View
from app.web.mixins import AuthRequiredMixin
from app.web.utils import json_response


class CatalogListView(View):
    @docs(tags=["catalog"], summary="List of catalog", description="Get list of catalog")
    @response_schema(ListOfCatalogsSchema, 200)
    async def get(self):
        catalogs = await self.store.catalogs.get_list_of_catalogs()

        return json_response(data={"catalogs": [CatalogSchema().dump(catalog) for catalog in catalogs]})


class CatalogCreateView(View):
    @docs(tags=["catalog"], summary="Create new catalog", description="Create new catalog")
    @request_schema(CatalogSchema)
    @response_schema(CatalogSchema, 200)
    async def post(self):
        # await AuthRequiredMixin.check_auth_admin(self.request)

        data = self.data
        title = data.get("title")
        tag = data.get("tag")
        if not title or not tag:
            raise HTTPForbidden

        catalog = await self.store.catalogs.create_new_catalog(title, tag)

        return json_response(data=CatalogSchema().dump(catalog))


class CatalogView(View):
    @docs(tags=["catalog"], summary="Change catalog", description="Change catalog")
    @request_schema(CatalogSchema)
    @response_schema(CatalogSchema, 200)
    async def put(self):

        return json_response(data={"data": "normal"})

    @docs(tags=["catalog"], summary="Delete catalog", description="Delete catalog")
    @response_schema(CatalogSchema, 200)
    async def delete(self):

        return json_response(data={"data": "normal"})

    @docs(tags=["catalog"], summary="Get info catalog", description="Get info catalog")
    @response_schema(CatalogSchema, 200)
    async def get(self):

        return json_response(data={"data": "normal"})


class TypesListView(View):
    @docs(tags=["type"], summary="Get list types", description="Get list types")
    @response_schema(ListOfTypesSchema, 200)
    async def get(self):
        data = self.request.match_info["catalog_tag"]
        catalogs = await self.store.catalogs.get_list_of_catalogs()

        return json_response(data={"catalogs": [ListOfTypesSchema().dump(catalog) for catalog in catalogs]})


class TypeView(View):
    @docs(tags=["type"], summary="Change type", description="Change type")
    @request_schema(TypeSchema)
    @response_schema(TypeSchema, 200)
    async def put(self):

        return json_response(data={"data": "normal"})

    @docs(tags=["type"], summary="Delete type", description="Delete type")
    @response_schema(TypeSchema, 200)
    async def delete(self):

        return json_response(data={"data": "normal"})

    @docs(tags=["type"], summary="Get info type", description="Get info type")
    @response_schema(TypeSchema, 200)
    async def get(self):

        return json_response(data={"data": "normal"})


class TypeCreateView(View):
    @docs(tags=["type"], summary="Create new type", description="Create new type")
    @request_schema(TypeSchema)
    @response_schema(TypeSchema, 200)
    async def post(self):
        # await AuthRequiredMixin.check_auth_admin(self.request)

        data = self.data
        title = data.get("title")
        tag = data.get("tag")
        if not title or not tag:
            raise HTTPForbidden

        catalog = await self.store.catalogs.create_new_catalog(title, tag)

        return json_response(data=TypeSchema().dump(catalog))


class ProductsListView(View):
    @docs(tags=["product"], summary="Get list types", description="Get list types")
    @response_schema(ListOfTypesSchema, 200)
    async def get(self):
        data = self.request.match_info["catalog_tag"]
        catalogs = await self.store.catalogs.get_list_of_catalogs()

        return json_response(data={"catalogs": [ListOfTypesSchema().dump(catalog) for catalog in catalogs]})