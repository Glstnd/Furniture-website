from datetime import datetime, timedelta

from aiohttp.web_exceptions import HTTPForbidden
from aiohttp_apispec import request_schema, response_schema, docs

from app.admin.schemes import AdminSchema
from app.web.app import View
from app.web.mixins import AuthRequiredMixin
from app.web.utils import json_response, generate_jwt_token

JWT_EXP_DELTA_SECONDS = 20


class AdminLoginView(View):
    @docs(tags=["admin"], summary="Login admin", description="Login admin")
    @request_schema(AdminSchema)
    @response_schema(AdminSchema, 200)
    async def post(self):
        data = self.data
        admin = await self.store.admins.get_by_email(data.get("email"))

        if not admin:
            raise HTTPForbidden

        datetime_jwt = datetime.now() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)
        jwt_token = generate_jwt_token(admin.email, datetime_jwt)

        admin_data = await AuthRequiredMixin.auth_admin(self.request, admin, data, jwt_token)

        await self.store.admin_tokens.create_admin_token(admin_id=admin.id, jwt_datetime=datetime_jwt)

        return json_response(data=AdminSchema().dump(admin_data))


class AdminRegisterView(View):
    @docs(tags=["admin"], summary="Register admin", description="register admin")
    @request_schema(AdminSchema)
    @response_schema(AdminSchema, 200)
    async def post(self):
        data = self.data
        admin = await self.store.admins.create_admin(data.get("email"), data.get("password"))

        datetime_jwt = datetime.now() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)
        jwt_token = generate_jwt_token(admin.email, datetime_jwt)
        admin_data = await AuthRequiredMixin.auth_admin(self.request, admin, data, jwt_token)

        await self.store.admin_tokens.create_admin_token(admin_id=admin.id, jwt_datetime=datetime_jwt)

        return json_response(data=AdminSchema().dump(admin_data))


class AdminCurrentView(View):
    @docs(tags=["admin"], summary="Admin current", description="Get admin current data")
    @response_schema(AdminSchema, 200)
    async def get(self):
        admin = await AuthRequiredMixin.check_auth_admin(self.request)

        return json_response(data=AdminSchema().dump(admin))
