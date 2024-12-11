import typing

from app.store.database.database import Database

if typing.TYPE_CHECKING:
    from app.web.app import Application


class Store:
    def __init__(self, app: "Application"):
        self.app = app

        from app.store.catalog.accessor import CatalogAccessor
        from app.store.catalog.accessor import TypeAccessor
        from app.store.catalog.accessor import ProductAccessor

        self.catalogs: CatalogAccessor = CatalogAccessor(app)
        self.types: TypeAccessor = TypeAccessor(app)
        self.products: ProductAccessor = ProductAccessor(app)


def setup_store(app: "Application"):
    app.database = Database(app)
    app.on_startup.append(app.database.connect)
    app.on_cleanup.append(app.database.disconnect)
    app.store = Store(app)
