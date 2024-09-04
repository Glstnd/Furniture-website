from aiohttp_apispec import request_schema, response_schema, docs

from app.user.schemes import UserSchema
from app.web.app import View
from app.web.mixins import AuthRequiredMixin
from app.web.utils import json_response


class UserLoginView(View):
    @docs(tags=["user"], summary="Login user", description="Login user")
    @request_schema(UserSchema)
    @response_schema(UserSchema, 200)
    async def post(self):
        data = self.data
        user = await self.store.users.get_by_email(data.get("email"))
        user_data = await AuthRequiredMixin.auth_admin(self.request, user, data)

        return json_response(data=UserSchema().dump(user_data))


class UserCurrentView(View):
    @docs(tags=["user"], summary="User current", description="Get user current data")
    @response_schema(UserSchema, 200)
    async def get(self):
        user = await AuthRequiredMixin.check_auth_user(self.request)

        return json_response(data=UserSchema().dump(user))
