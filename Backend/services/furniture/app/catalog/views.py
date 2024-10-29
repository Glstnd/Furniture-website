from aiohttp.web_exceptions import HTTPForbidden
from aiohttp_apispec import response_schema, docs, request_schema

from app.catalog.schemes import CatalogSchema
from app.web.app import View
from app.web.mixins import AuthRequiredMixin
from app.web.utils import json_response


class CatalogView(View):
    @docs(tags=["catalog"], summary="List of catalog", description="Get list of catalog")
    @response_schema(CatalogSchema, 200)
    async def get(self):
        catalogs = await self.store.catalogs.get_list_of_catalogs()

        return json_response(data={"catalogs": [CatalogSchema().dump(catalog) for catalog in catalogs]})


class CatalogCreateView(View):
    @docs(tags=["catalog"], summary="Create new catalog", description="Create new catalog")
    @request_schema(CatalogSchema)
    @response_schema(CatalogSchema, 200)
    async def post(self):
        await AuthRequiredMixin.check_auth_admin(self.request)

        data = self.data
        title = data.get("title")
        tag = data.get("tag")
        if not title or not tag:
            raise HTTPForbidden

        catalog = await self.store.catalogs.create_new_catalog(title, tag)

        return json_response(data=CatalogSchema().dump(catalog))


class TypesProductsListView(View):
    async def get(self):
        data = self.request.match_info["catalog_tag"]
        print(data)
        catalogs = await self.store.catalogs.get_list_of_catalogs()

        return json_response(data={"catalogs": [CatalogSchema().dump(catalog) for catalog in catalogs]})
