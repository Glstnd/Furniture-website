from app.store import Store

class TestCatalogAccessor:
    async def test_list_of_empty_list_catalogs(
            self, store: Store
    ) -> None:
        catalogs = await store.catalogs.get_list_of_catalogs()
        assert len(catalogs) == 0
        assert type(catalogs) == list

    async def test_list_of_1_obj_catalogs(
            self, catalog, store: Store
    ) -> None:
        catalogs = await store.catalogs.get_list_of_catalogs()
        assert len(catalogs) == 1
        assert type(catalogs) == list
        assert catalogs[0].title == catalog.title
        assert catalogs[0].tag == catalog.tag
        assert catalogs[0].image == catalog.image
        assert catalogs[0].file_extension == catalog.file_extension

    async def test_find_catalog_by_tag(self, catalog, store: Store) -> None:
        new_catalog = await store.catalogs.get_catalog_by_tag(catalog.tag)
        assert new_catalog.title == catalog.title
        assert new_catalog.tag == catalog.tag
        assert new_catalog.image == catalog.image
        assert new_catalog.file_extension == catalog.file_extension

    async def test_change_catalog_title(self, catalog, store: Store) -> None:
        new_catalog = await store.catalogs.update_catalog({"title": "new_title"}, catalog.tag)
        assert new_catalog.title == "new_title"
        assert new_catalog.tag == catalog.tag
        assert new_catalog.image == catalog.image
        assert new_catalog.file_extension == catalog.file_extension

    async def test_change_catalog_tag(self, catalog, store: Store) -> None:
        new_catalog = await store.catalogs.update_catalog({"tag": "new_tag"}, catalog.tag)
        assert new_catalog.title == catalog.title
        assert new_catalog.tag == "new_tag"
        assert new_catalog.image == catalog.image
        assert new_catalog.file_extension == catalog.file_extension

    async def test_change_catalog_title_and_tag(self, catalog, store: Store) -> None:
        new_catalog = await store.catalogs.update_catalog({"title": "new_title", "tag": "new_tag"}, catalog.tag)
        assert new_catalog.title == "new_title"
        assert new_catalog.tag == "new_tag"
        assert new_catalog.image == catalog.image
        assert new_catalog.file_extension == catalog.file_extension

    async def test_delete_catalog(self, catalog, store: Store) -> None:
        await store.catalogs.delete_catalog(catalog.tag)
        new_catalog = await store.catalogs.get_catalog_by_tag(catalog.tag)
        assert new_catalog is None

    async def test_create_new_catalog(self, store: Store) -> None:
        catalog_data = {"title": "test_catalog", "tag": "test_catalog"}
        new_catalog = await store.catalogs.create_new_catalog(catalog_data)
        assert new_catalog.title == catalog_data.get("title")
        assert new_catalog.tag == catalog_data.get("tag")
        assert new_catalog.image is None
        assert new_catalog.file_extension is None
