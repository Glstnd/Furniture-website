from aiohttp.test_utils import TestClient


class TestCatalogListView:
    async def test_list_zero_catalog(self, cli: TestClient) -> None:
        response = await cli.get("/api/catalogs/list")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("catalogs") == []

    async def test_list_catalog(self, cli: TestClient, catalog) -> None:
        response = await cli.get("/api/catalogs/list")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert len(data.get("data").get("catalogs")) == 1
        test_catalog = data.get("data").get("catalogs")[0]
        assert test_catalog.get("id") == catalog.id
        assert test_catalog.get("title") == catalog.title
        assert test_catalog.get("tag") == catalog.tag
        assert test_catalog.get("image") == catalog.image
        assert test_catalog.get("file_extension") == catalog.file_extension
