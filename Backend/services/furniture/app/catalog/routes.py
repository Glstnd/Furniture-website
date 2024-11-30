import typing

if typing.TYPE_CHECKING:
    from app.web.app import Application


def setup_routes(app: "Application"):
    from app.catalog.views import CatalogListView
    from app.catalog.views import CatalogCreateView
    from app.catalog.views import TypesListView

    from app.catalog.views import TypeView
    from app.catalog.views import CatalogView
    from app.catalog.views import TypeCreateView

    app.router.add_view("/api/catalogs/list", CatalogListView)
    app.router.add_view("/api/catalogs/create_catalog", CatalogCreateView)
    app.router.add_view("/api/catalogs/{catalog_tag}/list", TypesListView)

    # не сделаны
    app.router.add_view("/api/catalogs/{catalog_tag}", CatalogView)
    app.router.add_view("/api/catalogs/{catalog_tag}/{type_tag}", TypeView)
    app.router.add_view("/api/catalogs/{catalog_tag}/create_type", TypeCreateView)
    # app.router.add_view("/api/catalogs/{catalog_tag}/{type_tag}/list", TypeListView)
    # app.router.add_view("/api/catalogs/{catalog_tag}/{type_tag}/{product_tag}", ProductView)
