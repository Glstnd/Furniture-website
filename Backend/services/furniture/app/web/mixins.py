from http.cookies import SimpleCookie

import aiohttp

from aiohttp_session import get_session
from aiohttp.web_exceptions import HTTPUnauthorized
from app.web.app import Request


class AuthRequiredMixin:
    @staticmethod
    async def check_auth_admin(request: Request) -> None:
        cookies = SimpleCookie(request.cookies)

        async with aiohttp.ClientSession(cookies=cookies) as session:
            response = await session.get(url="http://localhost:7000/admin.current")
            if response.status != 200:
                raise HTTPUnauthorized

    @staticmethod
    async def check_auth_user(request: Request) -> bool:
        return False
