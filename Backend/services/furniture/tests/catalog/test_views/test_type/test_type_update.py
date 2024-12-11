from aiohttp.test_utils import TestClient


class TestTypeUpdateView:
    async def test_update_type_title_not_tag(self, cli: TestClient, catalog, type_product):
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}",
                                 json={"title": "test_type_update"})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Missing data for required field."]

    async def test_update_type_bad_catalog(self, cli: TestClient, type_product):
        response = await cli.put(f"/api/catalogs/test_catalog_2/types/{type_product.tag}",
                                 json={"title": "test_type_update"})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Missing data for required field."]

    async def test_update_type_bad_type(self, cli: TestClient, catalog):
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/test_type",
                                 json={"title": "test_type_update"})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Missing data for required field."]

    async def test_update_type_bad_title(self, cli: TestClient, catalog, type_product):
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}",
                                 json={"title": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Missing data for required field."]
        assert data.get("data").get("json").get("title") == ["Field may not be null."]

    async def test_update_type_bad_tag(self, cli: TestClient, catalog, type_product):
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}",
                                 json={"tag": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Field may not be null."]
        assert data.get("data").get("json").get("title") == ["Missing data for required field."]

    async def test_update_type_bad_tag_bad_title(self, cli: TestClient, catalog, type_product):
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}",
                                 json={"tag": None, "title": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Field may not be null."]
        assert data.get("data").get("json").get("title") == ["Field may not be null."]

    async def test_update_type_bad_tag_bad_title_bad_catalog(self, cli: TestClient, type_product):
        response = await cli.put(f"/api/catalogs/test_catalog_2/types/{type_product.tag}",
                                 json={"tag": None, "title": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Field may not be null."]
        assert data.get("data").get("json").get("title") == ["Field may not be null."]

    async def test_update_type_bad_tag_bad_title_bad_type(self, cli: TestClient, catalog):
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/test_type",
                                 json={"tag": None, "title": None})

        assert response.status == 400
        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("tag") == ["Field may not be null."]
        assert data.get("data").get("json").get("title") == ["Field may not be null."]

    async def test_update_type_tag_title(self, cli: TestClient, catalog, type_product):
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}",
                                 json={"tag": "test_type_update", "title": "test_type_update"})

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("title") == "test_type_update"
        assert data.get("data").get("tag") == "test_type_update"
        assert data.get("data").get("image") == type_product.image
        assert data.get("data").get("file_extension") == type_product.file_extension