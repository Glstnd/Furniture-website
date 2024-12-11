from aiohttp.test_utils import TestClient


class TestTypeListView:
    async def test_list_zero_type_normal_catalog(self, cli: TestClient, catalog) -> None:
        response = await cli.get(f"/api/catalogs/{catalog.tag}/list")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("types") == []

    async def test_list_zero_type_bad_catalog(self, cli: TestClient) -> None:
        response = await cli.get(f"/api/catalogs/test_catalog/list")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"

    async def test_list_type_normal_catalog(self, cli: TestClient, catalog, type_product) -> None:
        response = await cli.get(f"/api/catalogs/{catalog.tag}/list")

        assert response.status == 200
        data = await response.json()
        assert data.get("status") == "ok"
        test_type_product = data.get("data").get("types")[0]
        assert test_type_product.get("id") == type_product.id
        assert test_type_product.get("title") == type_product.title
        assert test_type_product.get("tag") == type_product.tag
        assert test_type_product.get("image") == type_product.image
        assert test_type_product.get("file_extension") == type_product.file_extension

    async def test_list_type_bad_catalog(self, cli: TestClient, catalog, type_product) -> None:
        response = await cli.get(f"/api/catalogs/test_catalog_2/list")

        assert response.status == 404
        data = await response.json()
        assert data.get("status") == "not_found"
        assert data.get("message") == "Catalog not found"