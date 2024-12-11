from aiohttp.web import (
    Application as AiohttpApplication,
    Request as AiohttpRequest,
    View as AiohttpView,
)
from aiohttp_apispec import setup_aiohttp_apispec
from aiohttp_cors import CorsViewMixin
from aiohttp_session import setup as session_setup
from aiohttp_session.cookie_storage import EncryptedCookieStorage

from app.admin.models import AdminModel
from app.store import Store, setup_store
from app.store.database.database import Database
from app.web.config import Config, setup_config
from app.web.cors import setup_cors
from app.web.logger import setup_logging
from app.web.middlewares import setup_middlewares
from app.web.routes import setup_routes


class Application(AiohttpApplication):
    config: Config | None = None
    store: Store | None = None
    database: Database | None = None


class Request(AiohttpRequest):
    admin: AdminModel | None = None

    @property
    def app(self) -> Application:
        return super().app()


class View(AiohttpView, CorsViewMixin):
    @property
    def request(self) -> Request:
        return super().request

    @property
    def database(self) -> Database:
        return self.request.app.database

    @property
    def store(self) -> Store:
        return self.request.app.store

    @property
    def data(self) -> dict:
        return self.request.get("data", {})


app = Application()

def setup_app(config_path: str) -> Application:
    setup_logging(app)
    setup_config(app, config_path)
    session_setup(app, EncryptedCookieStorage(secret_key=app.config.session.key, cookie_name="token", path='/'))
    setup_routes(app)
    setup_aiohttp_apispec(
        app, title="Account microservice",
        url="/api/accounts/docs/json",
        swagger_path="/api/accounts/docs"
    )
    setup_middlewares(app)
    setup_store(app)
    setup_cors(app)
    return app
