from aiohttp.test_utils import TestClient


class TestProductCreateView:
    async def test_create_normal_product_normal_catalog_normal_type(self, cli: TestClient, catalog, type_product) -> None:
        response = await cli.post(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/create_product",
                                  json={
                                      "title": "test_product",
                                      "tag": "test_tag"
                                  })

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("title") == "test_product"
        assert data.get("data").get("tag") == "test_tag"
        assert data.get("data").get("image") is None
        assert data.get("data").get("file_extension") is None

    async def test_create_normal_product_normal_catalog_bad_type(self, cli: TestClient, catalog) -> None:
        response = await cli.post(f"/api/catalogs/{catalog.tag}/types/test_type/create_product",
                                  json={
                                      "title": "test_product",
                                      "tag": "test_tag"
                                  })

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Type of product not found"

    async def test_create_normal_product_bad_catalog_normal_type(self, cli: TestClient, type_product) -> None:
        response = await cli.post(f"/api/catalogs/test_catalog_2/types/{type_product.tag}/create_product",
                                  json={
                                      "title": "test_product",
                                      "tag": "test_tag"
                                  })

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_create_normal_product_bad_catalog_bad_type(self, cli: TestClient) -> None:
        response = await cli.post("/api/catalogs/test_catalog/types/test_type/create_product",
                                  json={
                                      "title": "test_product",
                                      "tag": "test_tag"
                                  })

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_create_conflict_product_normal_catalog_normal_type(self, cli: TestClient, catalog, type_product, product) -> None:
        response = await cli.post(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/create_product",
                                  json={
                                      "title": product.title,
                                      "tag": product.tag
                                  })

        assert response.status == 409
        data = await response.json()
        assert data.get("status") == "conflict"
        assert data.get("message") == "Product already exists"

    async def test_create_conflict_product_normal_catalog_bad_type(self, cli: TestClient, catalog, product) -> None:
        response = await cli.post(f"/api/catalogs/{catalog.tag}/types/test_type_2/create_product",
                                  json={
                                      "title": product.title,
                                      "tag": product.tag
                                  })

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Type of product not found"

    async def test_create_conflict_product_bad_catalog_normal_type(self, cli: TestClient, type_product, product) -> None:
        response = await cli.post(f"/api/catalogs/test_catalog_2/types/{type_product.tag}/create_product",
                                  json={
                                      "title": product.title,
                                      "tag": product.tag
                                  })

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_create_conflict_product_bad_catalog_bad_type(self, cli: TestClient, product) -> None:
        response = await cli.post("/api/catalogs/test_catalog_2/types/test_type_2/create_product",
                                  json={
                                      "title": product.title,
                                      "tag": product.tag
                                  })

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"