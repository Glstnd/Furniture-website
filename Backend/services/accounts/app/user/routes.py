import typing

if typing.TYPE_CHECKING:
    from app.web.app import Application


def setup_routes(app: "Application"):
    from app.user.views import UserLoginView, UserCurrentView, UserRegisterView

    app.router.add_view("/api/accounts/user.login", UserLoginView)
    app.router.add_view("/api/accounts/user.current", UserCurrentView)
    app.router.add_view("/api/accounts/user.register", UserRegisterView)
