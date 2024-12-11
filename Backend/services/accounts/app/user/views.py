from datetime import datetime, timedelta

from aiohttp.web_exceptions import HTTPForbidden
from aiohttp_apispec import request_schema, response_schema, docs

from app.user.schemes import UserSchema
from app.web.app import View
from app.web.mixins import AuthRequiredMixin
from app.web.utils import json_response, generate_jwt_token, send_kafka

JWT_EXP_DELTA_SECONDS = 20


class UserLoginView(View):
    @docs(tags=["user"], summary="Login user", description="Login user")
    @request_schema(UserSchema)
    @response_schema(UserSchema, 200)
    async def post(self):
        data = self.data
        user = await self.store.users.get_by_email(data.get("email"))

        if not user:
            raise HTTPForbidden

        datetime_jwt = datetime.now() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)
        jwt_token = generate_jwt_token(user.email, datetime_jwt)

        user_data = await AuthRequiredMixin.auth_user(self.request, user, data, jwt_token)

        await self.store.user_tokens.create_user_token(user_id=user.id, jwt_datetime=datetime_jwt)

        return json_response(data=UserSchema().dump(user_data))


class UserRegisterView(View):
    @docs(tags=["user"], summary="Register user", description="register user")
    @request_schema(UserSchema)
    @response_schema(UserSchema, 200)
    async def post(self):
        data = self.data
        user = await self.store.users.create_user(data.get("email"), data.get("password"))

        datetime_jwt = datetime.now() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)
        jwt_token = generate_jwt_token(user.email, datetime_jwt)
        user_data = await AuthRequiredMixin.auth_user(self.request, user, data, jwt_token)

        await self.store.user_tokens.create_user_token(user_id=user.id, jwt_datetime=datetime_jwt)

        return json_response(data=UserSchema().dump(user_data))


class UserCurrentView(View):
    @docs(tags=["user"], summary="User current", description="Get user current data")
    @response_schema(UserSchema, 200)
    async def get(self):
        user = await AuthRequiredMixin.check_auth_user(self.request)

        await send_kafka(self.request.app, "user.current", {"data": UserSchema().dump(user)})

        return json_response(data=UserSchema().dump(user))
