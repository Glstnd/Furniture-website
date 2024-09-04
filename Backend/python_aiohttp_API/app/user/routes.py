import typing

from app.user.views import UserCurrentView

if typing.TYPE_CHECKING:
    from app.web.app import Application


def setup_routes(app: "Application"):
    from app.user.views import UserLoginView

    app.router.add_view("/user.login", UserLoginView)
    app.router.add_view("/user.current", UserCurrentView)
