from app.store import Store

class TestProductAccessor:
    async def test_list_of_empty_list_products(self, type_product, store: Store) -> None:
        products = await store.products.get_list_of_products(type_product.id)
        assert len(products) == 0
        assert type(products) == list

    async def test_list_of_1_obj_products(self, product, store: Store) -> None:
        products = await store.products.get_list_of_products(product.type_id)
        assert len(products) == 1
        assert type(products) == list
        assert products[0].id == product.id
        assert products[0].title == product.title
        assert products[0].tag == product.tag
        assert products[0].type_id == product.type_id
        assert products[0].image == product.image
        assert products[0].file_extension == product.file_extension

    async def test_create_new_product(self, type_product, store: Store) -> None:
        new_product_data = {
                        "title": "test_product",
                        "tag": "test_product"
                       }
        new_product = await store.products.create_new_product(new_product_data, type_product.id)
        assert new_product.title == new_product_data["title"]
        assert new_product.tag == new_product_data["tag"]
        assert new_product.type_id == type_product.id
        assert new_product.image is None
        assert new_product.file_extension is None

    async def test_update_product_title(self, product, store: Store) -> None:
        new_product = await store.products.update_product({"title": "new_title"}, product.tag, product.type_id)
        assert new_product.title == "new_title"
        assert new_product.tag == product.tag
        assert new_product.type_id == product.type_id
        assert new_product.image == product.image
        assert new_product.file_extension == product.file_extension

    async def test_update_product_tag(self, product, store: Store) -> None:
        new_product = await store.products.update_product({"tag": "new_tag"}, product.tag, product.type_id)
        assert new_product.title == product.title
        assert new_product.tag == "new_tag"
        assert new_product.type_id == product.type_id
        assert new_product.image == product.image
        assert new_product.file_extension == product.file_extension

        new_product = await store.products.get_product_by_tag("new_tag", product.type_id)
        assert new_product.title == product.title
        assert new_product.tag == "new_tag"
        assert new_product.type_id == product.type_id
        assert new_product.image == product.image
        assert new_product.file_extension == product.file_extension

    async def test_update_product_title_and_tag(self, product, store: Store) -> None:
        new_product = await store.products.update_product({"title": "new_title", "tag": "new_tag"}, product.tag, product.type_id)
        assert new_product.title == "new_title"
        assert new_product.tag == "new_tag"
        assert new_product.type_id == product.type_id
        assert new_product.image == product.image
        assert new_product.file_extension == product.file_extension

        new_product = await store.products.get_product_by_tag("new_tag", product.type_id)
        assert new_product.title == "new_title"
        assert new_product.tag == "new_tag"
        assert new_product.type_id == product.type_id
        assert new_product.image == product.image
        assert new_product.file_extension == product.file_extension

    async def test_delete_product(self, product, store: Store) -> None:
        await store.products.delete_product(product.tag, product.type_id)
        products = await store.products.get_list_of_products(product.type_id)
        assert len(products) == 0
        assert type(products) == list

        new_product = await store.products.get_product_by_tag(product.tag, product.type_id)
        assert new_product is None

    async def test_get_product_by_tag(self, product, store: Store) -> None:
        new_product = await store.products.get_product_by_tag(product.tag, product.type_id)
        assert new_product.title == product.title
        assert new_product.tag == product.tag
        assert new_product.type_id == product.type_id
        assert new_product.image == product.image
        assert new_product.file_extension == product.file_extension