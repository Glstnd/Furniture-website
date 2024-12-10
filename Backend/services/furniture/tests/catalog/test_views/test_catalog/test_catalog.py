from aiohttp.test_utils import TestClient


class TestCatalogView:
    async def test_bad_catalog_by_tag(self, cli: TestClient) -> None:
        response = await cli.get("/api/catalogs/test_catalog")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"
        assert data.get("data") == {}

    async def test_catalog_by_tag(self, cli: TestClient, catalog) -> None:
        response = await cli.get(f"/api/catalogs/{catalog.tag}")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("id") == catalog.id
        assert data.get("data").get("title") == catalog.title
        assert data.get("data").get("tag") == catalog.tag
        assert data.get("data").get("image") == catalog.image
        assert data.get("data").get("file_extension") == catalog.file_extension

    async def test_update_catalog(self, cli: TestClient, catalog) -> None:
        response = await cli.put(f"/api/catalogs/{catalog.tag}", json={"title": "test_catalog_update"})

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("id") == catalog.id
        assert data.get("data").get("title") == "test_catalog_update"
        assert data.get("data").get("tag") == catalog.tag
        assert data.get("data").get("image") == catalog.image
        assert data.get("data").get("file_extension") == catalog.file_extension

    async def test_bad_update_catalog(self, cli: TestClient) -> None:
        response = await cli.put("/api/catalogs/test_catalog", json={"title": "test_catalog_update"})

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_delete_catalog(self, cli: TestClient, catalog) -> None:
        response = await cli.delete(f"/api/catalogs/{catalog.tag}")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "Resource deleted successfully"
        assert data.get("data") == "Catalog deleted"

    async def test_bad_delete_catalog(self, cli: TestClient) -> None:
        response = await cli.delete("/api/catalogs/test_catalog")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"
        assert data.get("data") == {}
