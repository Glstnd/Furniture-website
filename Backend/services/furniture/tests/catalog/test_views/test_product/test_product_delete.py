from aiohttp.test_utils import TestClient


class TestProductDeleteView:
    async def test_delete_product(self, cli: TestClient, catalog, type_product, product) -> None:
        response = await cli.delete(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/products/{product.tag}")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "Resource deleted successfully"
        assert data.get("data") == "Product deleted"

    async def test_delete_product_normal_catalog_bad_type(self, cli: TestClient, catalog, product) -> None:
        response = await cli.delete(f"/api/catalogs/{catalog.tag}/types/test_type_2/products/{product.tag}")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Type of product not found"

    async def test_delete_product_bad_catalog_normal_type(self, cli: TestClient, type_product, product) -> None:
        response = await cli.delete(f"/api/catalogs/test_catalog_2/types/{type_product.tag}/products/{product.tag}")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_delete_product_bad_catalog_bad_type(self, cli: TestClient, product) -> None:
        response = await cli.delete(f"/api/catalogs/test_catalog_2/types/test_type_2/products/{product.tag}")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_delete_product_bad_product(self, cli: TestClient, catalog, type_product) -> None:
        response = await cli.delete(f"/api/catalogs/{catalog.tag}/types/{type_product.tag}/products/test_product")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Product not found"

    async def test_delete_bad_product_bad_catalog_bad_type(self, cli: TestClient, catalog, type_product, product) -> None:
        response = await cli.delete(f"/api/catalogs/test_catalog_2/types/test_type_2/products/{product.tag}")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"