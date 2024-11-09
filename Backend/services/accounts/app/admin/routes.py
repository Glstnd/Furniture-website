import typing

from app.admin.views import AdminCurrentView, AdminRegisterView

if typing.TYPE_CHECKING:
    from app.web.app import Application


def setup_routes(app: "Application"):
    from app.admin.views import AdminLoginView

    app.router.add_view("/api/accounts/admin.login", AdminLoginView)
    app.router.add_view("/api/accounts/admin.current", AdminCurrentView)
    app.router.add_view("/api/accounts/admin.register", AdminRegisterView)
