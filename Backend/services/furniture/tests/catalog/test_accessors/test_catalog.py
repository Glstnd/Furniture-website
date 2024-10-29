from app.store import Store
from app.web.config import Config


class TestCatalogAccessor:
    async def test_catalog_not_created(
            self, store: Store, config: Config
    ) -> None:
        catalog = await store.catalogs.create_new_catalog(title="sofa", tag="sofa")

        assert catalog is not None
        assert catalog.title == "sofa"
        assert catalog.tag == "sofa"
