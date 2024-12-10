from app.store import Store

class TestTypeAccessor:
    async def test_list_of_empty_list_types(self, catalog, store: Store) -> None:
        types = await store.types.get_list_of_types(catalog.id)
        assert len(types) == 0
        assert type(types) == list

    async def test_list_of_1_obj_types(self, type_product, store: Store) -> None:
        types = await store.types.get_list_of_types(type_product.catalog_id)
        assert len(types) == 1
        assert type(types) == list
        assert types[0].catalog_id == type_product.catalog_id
        assert types[0].title == type_product.title
        assert types[0].tag == type_product.tag
        assert types[0].image == type_product.image
        assert types[0].file_extension == type_product.file_extension

    async def test_get_type_by_tag(self, type_product, store: Store) -> None:
        type_product = await store.types.get_type_by_tag(type_product.tag, type_product.catalog_id)
        assert type_product.catalog_id == type_product.catalog_id
        assert type_product.title == type_product.title
        assert type_product.tag == type_product.tag
        assert type_product.image == type_product.image
        assert type_product.file_extension == type_product.file_extension

    async def test_create_new_type(self, catalog, store: Store) -> None:
        new_type_data = {
            "title": "test_type",
            "tag": "test_type"
        }

        new_type_product = await store.types.create_new_type(new_type_data, catalog.id)
        assert new_type_product.catalog_id == catalog.id
        assert new_type_product.title == new_type_data.get("title")
        assert new_type_product.tag == new_type_data.get("tag")
        assert new_type_product.image is None
        assert new_type_product.file_extension is None

    async def test_delete_type(self, type_product, store: Store) -> None:
        await store.types.delete_type(type_product.tag, type_product.catalog_id)
        types = await store.types.get_list_of_types(type_product.catalog_id)
        assert len(types) == 0
        assert type(types) == list
        type_product = await store.types.get_type_by_tag(type_product.tag, type_product.catalog_id)
        assert type_product is None

    async def test_update_type_title(self, type_product, store: Store) -> None:
        new_title = "new_title"
        new_type_product = await store.types.update_type({"title": new_title}, type_product.tag, type_product.catalog_id)
        assert new_type_product.catalog_id == type_product.catalog_id
        assert new_type_product.title == new_title
        assert new_type_product.tag == type_product.tag
        assert new_type_product.image == type_product.image
        assert new_type_product.file_extension == type_product.file_extension

    async def test_update_type_tag(self, type_product, store: Store) -> None:
        new_tag = "new_tag"
        new_type_product = await store.types.update_type({"tag": new_tag}, type_product.tag, type_product.catalog_id)
        assert new_type_product.catalog_id == type_product.catalog_id
        assert new_type_product.title == type_product.title
        assert new_type_product.tag == new_tag
        assert new_type_product.image == type_product.image
        assert new_type_product.file_extension == type_product.file_extension

        new_type_product = await store.types.get_type_by_tag(new_tag, type_product.catalog_id)
        assert new_type_product.catalog_id == type_product.catalog_id
        assert new_type_product.title == type_product.title
        assert new_type_product.tag == new_tag
        assert new_type_product.image == type_product.image
        assert new_type_product.file_extension == type_product.file_extension

    async def test_update_type_title_and_tag(self, type_product, store: Store) -> None:
        new_title = "new_title"
        new_tag = "new_tag"
        new_type_product = await store.types.update_type({"title": new_title, "tag": new_tag}, type_product.tag, type_product.catalog_id)
        assert new_type_product.catalog_id == type_product.catalog_id
        assert new_type_product.title == new_title
        assert new_type_product.tag == new_tag
        assert new_type_product.image == type_product.image
        assert new_type_product.file_extension == type_product.file_extension