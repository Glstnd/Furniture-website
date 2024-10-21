import typing

if typing.TYPE_CHECKING:
    from app.web.app import Application


def setup_routes(app: "Application"):
    from app.user.views import UserLoginView, UserCurrentView, UserRegisterView

    app.router.add_view("/user.login", UserLoginView)
    app.router.add_view("/user.current", UserCurrentView)
    app.router.add_view("/user.register", UserRegisterView)
