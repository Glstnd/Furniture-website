from aiohttp.test_utils import TestClient


class TestProductUpdateView:
    async def test_update_product_bad_product(self, cli: TestClient, catalog, type_product) -> None:
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/products/test_product",
                                 json={"title": "New title"})

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Product not found"

    async def test_update_product_bad_catalog_normal_type(self, cli: TestClient, type_product, product) -> None:
        response = await cli.put(f"/api/catalogs/test_catalog_2/types/{type_product.tag}/products/{product.tag}",
                                 json={"title": "New title"})

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_update_product_bad_catalog_bad_type(self, cli: TestClient, product) -> None:
        response = await cli.put(f"/api/catalogs/test_catalog_2/types/test_type_2/products/{product.tag}",
                                 json={"title": "New title"})

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_update_product_normal_catalog_bad_type(self, cli: TestClient, catalog, product) -> None:
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/test_type_2/products/{product.tag}",
                                 json={"title": "New title"})

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Type of product not found"

    async def test_update_product(self, cli: TestClient, catalog, type_product, product) -> None:
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/products/{product.tag}",
                                 json={"title": "New title"})

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("id") == product.id
        assert data.get("data").get("title") == "New title"
        assert data.get("data").get("tag") == product.tag
        assert data.get("data").get("image") == product.image
        assert data.get("data").get("file_extension") == product.file_extension

    async def test_update_product_tag_normal_catalog_normal_type(self, cli: TestClient, catalog, type_product, product) -> None:
        response = await cli.put(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/products/{product.tag}",
                                 json={"tag": "new_tag"})

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("id") == product.id
        assert data.get("data").get("title") == product.title
        assert data.get("data").get("tag") == "new_tag"
        assert data.get("data").get("image") == product.image
        assert data.get("data").get("file_extension") == product.file_extension

        response = await cli.get(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/products/new_tag")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("id") == product.id
        assert data.get("data").get("title") == product.title
        assert data.get("data").get("tag") == "new_tag"
        assert data.get("data").get("image") == product.image
        assert data.get("data").get("file_extension") == product.file_extension
