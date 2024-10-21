import typing

from app.store.database.database import Database

if typing.TYPE_CHECKING:
    from app.web.app import Application


class Store:
    def __init__(self, app: "Application"):
        self.app = app

        from app.store.admin.accessor import AdminAccessor
        from app.store.admin.accessor import AdminTokenAccessor

        from app.store.user.accessor import UserAccessor
        from app.store.user.accessor import UserTokenAccessor

        self.admins = AdminAccessor(app)
        self.admin_tokens = AdminTokenAccessor(app)

        self.users = UserAccessor(app)
        self.user_tokens = UserTokenAccessor(app)


def setup_store(app: "Application"):
    app.database = Database(app)
    app.on_startup.append(app.database.connect)
    app.on_cleanup.append(app.database.disconnect)
    app.store = Store(app)
