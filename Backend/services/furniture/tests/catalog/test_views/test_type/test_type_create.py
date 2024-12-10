from aiohttp.test_utils import TestClient


class TestTypeCreateView:
    async def test_create_type_normal_catalog_normal_data(self, cli: TestClient, catalog):
        response = await cli.post(f"/api/catalogs/{catalog.tag}/create_type",
                                  json={
                                      "title": "test_type",
                                      "tag": "test_tag"
                                  })

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("title") == "test_type"
        assert data.get("data").get("tag") == "test_tag"
        assert data.get("data").get("image") is None
        assert data.get("data").get("file_extension") is None

    async def test_create_type_normal_catalog_bad_data(self, cli: TestClient, catalog):
        response = await cli.post(f"/api/catalogs/{catalog.tag}/create_type", json={"title": None, "tag": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("title") == ["Field may not be null."]
        assert data.get("data").get("json").get("tag") == ["Field may not be null."]

    async def test_create_type_bad_catalog_bad_data(self, cli: TestClient):
        response = await cli.post(f"/api/catalogs/test_catalog_2/create_type", json={"title": None, "tag": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("title") == ["Field may not be null."]
        assert data.get("data").get("json").get("tag") == ["Field may not be null."]

    async def test_create_type_bad_catalog(self, cli: TestClient):
        response = await cli.post(f"/api/catalogs/test_catalog_2/create_type", json={"title": "test_type", "tag": "test_tag"})

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_create_type_bad_title(self, cli: TestClient, catalog):
        response = await cli.post(f"/api/catalogs/{catalog.tag}/create_type", json={"title": None, "tag": "test_tag"})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("title") == ["Field may not be null."]

    async def test_create_type_bad_tag(self, cli: TestClient, catalog):
        response = await cli.post(f"/api/catalogs/{catalog.tag}/create_type", json={"title": "test_type", "tag": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Field may not be null."]

    async def test_create_type_without_title_bad_tag(self, cli: TestClient, catalog):
        response = await cli.post(f"/api/catalogs/{catalog.tag}/create_type", json={"tag": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Field may not be null."]
        assert data.get("data").get("json").get("title") == ["Missing data for required field."]

    async def test_create_type_without_tag_bad_title(self, cli: TestClient, catalog):
        response = await cli.post(f"/api/catalogs/{catalog.tag}/create_type", json={"title": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Missing data for required field."]
        assert data.get("data").get("json").get("title") == ["Field may not be null."]