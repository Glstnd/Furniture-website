import base64
from datetime import datetime

import jwt
from aiohttp.web import json_response as aiohttp_json_response
from aiohttp.web_response import Response


JWT_SECRET = 'secret'
JWT_ALGORITHM = 'HS256'


def json_response(data: dict | None = None, status: str = "ok") -> Response:
    return aiohttp_json_response(
        data={
            "status": status,
            "data": data or {},
        }
    )


def error_json_response(
    http_status: int,
    status: str = "error",
    message: str | None = None,
    data: dict | None = None,
):
    return aiohttp_json_response(
        status=http_status,
        data={
            "status": status,
            "message": str(message),
            "data": data or {},
        },
    )


def hash_password(password: str) -> str:
    return base64.b64encode(password.encode()).decode()


def rehash_password(password: str) -> str:
    return base64.b64decode(password).decode()


def generate_jwt_token(user_login: str, datetime_jwt: datetime):
    payload = {
        'user_login': user_login,
        'year': datetime_jwt.year,
        'month': datetime_jwt.month,
        'day': datetime_jwt.day,
        'hour': datetime_jwt.hour,
        'minute': datetime_jwt.minute,
        'second': datetime_jwt.second
    }

    jwt_token: str = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)

    return jwt_token
