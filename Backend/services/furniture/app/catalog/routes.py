import typing

if typing.TYPE_CHECKING:
    from app.web.app import Application


def setup_routes(app: "Application"):
    from app.catalog.views import CatalogListView
    from app.catalog.views import CatalogCreateView
    from app.catalog.views import CatalogView

    from app.catalog.views import TypesListView
    from app.catalog.views import TypeView
    from app.catalog.views import TypeCreateView

    from app.catalog.views import ProductsListView
    from app.catalog.views import ProductView
    from app.catalog.views import ProductCreateView

    app.router.add_view("/api/catalogs/list", CatalogListView)
    app.router.add_view("/api/catalogs/create_catalog", CatalogCreateView)
    app.router.add_view("/api/catalogs/{catalog_tag}", CatalogView)

    app.router.add_view("/api/catalogs/{catalog_tag}/list", TypesListView)
    app.router.add_view("/api/catalogs/{catalog_tag}/create_type", TypeCreateView)
    app.router.add_view("/api/catalogs/{catalog_tag}/types/{type_tag}", TypeView)

    app.router.add_view("/api/catalogs/{catalog_tag}/types/{type_tag}/list", ProductsListView)
    app.router.add_view("/api/catalogs/{catalog_tag}/types/{type_tag}/create_product", ProductCreateView)
    app.router.add_view("/api/catalogs/{catalog_tag}/types/{type_tag}/products/{product_tag}", ProductView)
