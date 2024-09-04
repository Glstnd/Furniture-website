from aiohttp.web_exceptions import HTTPUnauthorized, HTTPForbidden
from aiohttp_session import new_session, get_session

from app.admin.models import AdminModel
from app.web.app import Request, Application
from app.web.utils import hash_password


class AuthRequiredMixin:
    @staticmethod
    async def auth_admin(request: Request, admin: AdminModel, data: dict) -> AdminModel | None:
        if not data.get("email") or not data.get("password") or not admin:
            raise HTTPForbidden

        if data.get("email") == admin.email and hash_password(data.get("password")) == admin.password:
            session = await new_session(request)
            session["email"] = admin.email
            session["password"] = admin.password

            return AdminModel(id=admin.id, email=admin.email)

        raise HTTPForbidden

    @staticmethod
    async def check_auth_admin(request: Request) -> AdminModel | None:
        session = await get_session(request)
        email = session.get("email")
        password = session.get("password")

        if not email or not password:
            raise HTTPUnauthorized

        admin = await request.app.store.admins.get_by_email(email)
        if admin.password == password:
            return AdminModel(id=admin.id, email=admin.email)

        raise HTTPUnauthorized
