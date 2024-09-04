from aiohttp_apispec import request_schema, response_schema, docs

from app.admin.schemes import AdminSchema
from app.web.app import View
from app.web.mixins import AuthRequiredMixin
from app.web.utils import json_response


class AdminLoginView(View):
    @docs(tags=["admin"], summary="Login admin", description="Login admin")
    @request_schema(AdminSchema)
    @response_schema(AdminSchema, 200)
    async def post(self):
        data = self.data
        admin = await self.store.admins.get_by_email(data.get("email"))
        admin_data = await AuthRequiredMixin.auth_admin(self.request, admin, data)

        return json_response(data=AdminSchema().dump(admin_data))


class AdminCurrentView(View):
    @docs(tags=["admin"], summary="Admin current", description="Get admin current data")
    @response_schema(AdminSchema, 200)
    async def get(self):
        admin = await AuthRequiredMixin.check_auth_admin(self.request)

        return json_response(data=AdminSchema().dump(admin))
