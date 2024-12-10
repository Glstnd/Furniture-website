from aiohttp.test_utils import TestClient


class TestProductListView:
    async def test_list_product_normal_catalog_normal_type(self, cli: TestClient, catalog, type_product, product) -> None:
        response = await cli.get(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/list")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        test_product = data.get("data").get("products")[0]
        assert test_product.get("id") == product.id
        assert test_product.get("title") == product.title
        assert test_product.get("tag") == product.tag
        assert test_product.get("image") == product.image
        assert test_product.get("file_extension") == product.file_extension

    async def test_list_product_empty_normal_catalog_normal_type(self, cli: TestClient, catalog, type_product) -> None:
        response = await cli.get(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/list")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("products") == []

    async def test_list_product_normal_catalog_bad_type(self, cli: TestClient, catalog) -> None:
        response = await cli.get(f"/api/catalogs/{catalog.tag}/types/test_type/list")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Type of product not found"

    async def test_list_product_bad_catalog_bad_type(self, cli: TestClient) -> None:
        response = await cli.get("/api/catalogs/test_catalog/types/test_type/list")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_list_product_bad_catalog_normal_type(self, cli: TestClient, type_product) -> None:
        response = await cli.get(f"/api/catalogs/test_catalog_2/types/{type_product.tag}/list")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"