from aiohttp.web_app import Application


def setup_routes(app: Application):
    from app.catalog.routes import setup_routes as catalog_setup_routes

    catalog_setup_routes(app)
