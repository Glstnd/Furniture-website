from aiohttp.test_utils import TestClient


class TestTypeGetTypeByTagView:
    async def test_bad_type_by_tag_normal_catalog(self, cli: TestClient, catalog):
        response = await cli.get(f"/api/catalogs/{catalog.tag}/types/test_type")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Type of product not found"
        assert data.get("data") == {}

    async def test_bad_type_by_tag_bad_catalog(self, cli: TestClient):
        response = await cli.get("/api/catalogs/test_catalog/types/test_type")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"
        assert data.get("data") == {}


    async def test_type_by_tag_normal_catalog(self, cli: TestClient, catalog, type_product):
        response = await cli.get(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("id") == type_product.id
        assert data.get("data").get("title") == type_product.title
        assert data.get("data").get("tag") == type_product.tag
        assert data.get("data").get("image") == type_product.image
        assert data.get("data").get("file_extension") == type_product.file_extension

    async def test_type_by_tag_bad_catalog(self, cli: TestClient, type_product):
        response = await cli.get(f"/api/catalogs/test_catalog_2/types/{type_product.tag}")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"
        assert data.get("data") == {}