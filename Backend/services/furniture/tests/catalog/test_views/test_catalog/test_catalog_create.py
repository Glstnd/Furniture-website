from aiohttp.test_utils import TestClient


class TestCatalogCreateView:
    async def test_create_new_catalog(self, cli: TestClient) -> None:
        response = await cli.post("/api/catalogs/create_catalog",
                                  json={
                                      "title": "test_catalog",
                                      "tag": "test_catalog"
                                  })

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert isinstance(data.get("data").get("id"), int)
        assert data.get("data").get("title") == "test_catalog"
        assert data.get("data").get("tag") == "test_catalog"
        assert data.get("data").get("image") is None
        assert data.get("data").get("file_extension") is None

    async def test_create_old_catalog_exception_conflict(self, cli: TestClient, catalog) -> None:
        response = await cli.post("/api/catalogs/create_catalog",
                                  json={
                                      "title": catalog.title,
                                      "tag": catalog.tag
                                  })

        assert response.status == 409
        data = await response.json()
        assert data.get("status") == "conflict"
        assert data.get("message") == "Catalog already exists"

    async def test_create_new_catalog_exception_tag(self, cli: TestClient) -> None:
        response = await cli.post("/api/catalogs/create_catalog",
                                  json={
                                      "title": "test_catalog"
                                  })

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag")[0] == "Missing data for required field."

    async def test_create_new_catalog_exception_title(self, cli: TestClient) -> None:
        response = await cli.post("/api/catalogs/create_catalog",
                                  json={
                                      "tag": "test_catalog"
                                  })

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("title")[0] == "Missing data for required field."