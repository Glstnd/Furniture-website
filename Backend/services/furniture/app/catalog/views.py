from aiohttp.web_exceptions import HTTPForbidden
from aiohttp_apispec import response_schema, docs, request_schema

from app.catalog.schemes import CatalogSchema, ListOfCatalogsSchema
from app.web.app import View
from app.web.utils import json_response

import matplotlib.pyplot as plt
import io


class CatalogView(View):
    @docs(tags=["catalog"], summary="List of catalog", description="Get list of catalog")
    @response_schema(CatalogSchema, 200)
    async def get(self):
        catalogs = await self.store.catalogs.get_list_of_catalogs()
        print(catalogs)
        for catalog in catalogs:
            # Преобразуем бинарные данные в изображение
            image = io.BytesIO(catalog.image)

            # Отображаем изображение с помощью matplotlib
            img = plt.imread(image, format='JPEG')
            plt.imshow(img)
            plt.axis('off')
            plt.show()

        return json_response(data=ListOfCatalogsSchema().dump(catalogs))


class CatalogCreateView(View):
    @docs(tags=["catalog"], summary="List of catalog", description="Get list of catalog")
    @response_schema(CatalogSchema, 200)
    async def post(self):
        data = await self.request.json()
        title = data.get("title")
        path = data.get("path")
        if not title or not path:
            raise HTTPForbidden

        catalog = await self.store.catalogs.create_new_catalog(title, path)

        return json_response(data=CatalogSchema().dump(catalog))
