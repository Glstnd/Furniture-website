from aiohttp.web_exceptions import HTTPUnauthorized, HTTPForbidden, HTTPConflict
from aiohttp_session import new_session, get_session

from app.admin.models import AdminModel, AdminTokenModel
from app.user.models import UserModel, UserTokenModel
from app.web.app import Request, Application
from app.web.utils import hash_password, generate_jwt_token


class AuthRequiredMixin:
    @staticmethod
    async def auth_admin(request: Request, admin: AdminModel, data: dict, jwt_token) -> AdminModel | None:
        if not data.get("email") or not data.get("password") or not admin:
            raise HTTPForbidden

        print(data.get("password"), hash_password(data.get("password")), str(admin.password).strip())
        if data.get("email") == str(admin.email).strip():
            if not hash_password(data.get("password")) == str(admin.password).strip():
                raise HTTPConflict

            session = await new_session(request)
            session["email"] = data.get("email")
            session["token"] = jwt_token

            return AdminModel(id=admin.id, email=admin.email)

        raise HTTPForbidden

    @staticmethod
    async def check_auth_admin(request: Request) -> AdminModel | None:
        session = await get_session(request)
        jwt_token = session.get("token")
        email = session.get("email")

        if not email or not jwt_token:
            raise HTTPUnauthorized

        admin = await request.app.store.admins.get_by_email(email)
        admin_token: AdminTokenModel = await request.app.store.admin_tokens.get_by_admin_id(admin.id)
        if jwt_token == generate_jwt_token(user_login=admin.email, datetime_jwt=admin_token.jwt_datetime):
            return AdminModel(id=admin.id, email=admin.email)

        raise HTTPUnauthorized

    @staticmethod
    async def auth_user(request: Request, user: UserModel, data: dict, jwt_token) -> UserModel | None:
        if not data.get("email") or not data.get("password") or not user:
            raise HTTPForbidden

        print(data.get("password"), hash_password(data.get("password")), str(user.password).strip())
        if data.get("email") == str(user.email).strip():
            if not hash_password(data.get("password")) == str(user.password).strip():
                raise HTTPConflict

            session = await new_session(request)
            session["email"] = data.get("email")
            session["token"] = jwt_token

            return UserModel(id=user.id, email=user.email)

        raise HTTPForbidden

    @staticmethod
    async def check_auth_user(request: Request) -> UserModel | None:
        session = await get_session(request)
        jwt_token = session.get("token")
        email = session.get("email")

        if not email or not jwt_token:
            raise HTTPUnauthorized

        user = await request.app.store.users.get_by_email(email)
        user_token: UserTokenModel = await request.app.store.user_tokens.get_by_user_id(user.id)
        if jwt_token == generate_jwt_token(user_login=user.email, datetime_jwt=user_token.jwt_datetime):
            return UserModel(id=user.id, email=user.email)

        raise HTTPUnauthorized
