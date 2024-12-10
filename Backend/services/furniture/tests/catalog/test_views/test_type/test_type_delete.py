from aiohttp.test_utils import TestClient


class TestTypeDeleteView:
    async def test_delete_type_normal_catalog(self, cli: TestClient, catalog, type_product):
        response = await cli.delete(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "Resource deleted successfully"
        assert data.get("data") == "Type of product deleted"

    async def test_delete_type_bad_catalog(self, cli: TestClient, type_product):
        response = await cli.delete(f"/api/catalogs/test_catalog_2/types/{type_product.tag}")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"
        assert data.get("data") == {}

    async def test_delete_type_bad_type(self, cli: TestClient, catalog):
        response = await cli.delete(f"/api/catalogs/{catalog.tag}/types/test_type")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Type of product not found"
        assert data.get("data") == {}

    async def test_delete_type_bad_type_bad_catalog(self, cli: TestClient):
        response = await cli.delete("/api/catalogs/test_catalog/types/test_type")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"
        assert data.get("data") == {}