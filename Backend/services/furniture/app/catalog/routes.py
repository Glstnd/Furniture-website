import typing

if typing.TYPE_CHECKING:
    from app.web.app import Application


def setup_routes(app: "Application"):
    from app.catalog.views import CatalogView
    from app.catalog.views import CatalogCreateView

    app.router.add_view("/list", CatalogView)
    app.router.add_view("/create_catalog", CatalogCreateView)
