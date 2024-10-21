from datetime import datetime, timedelta
from typing import TYPE_CHECKING

from sqlalchemy import select, insert, update

from app.user.models import UserModel, UserTokenModel
from aiohttp.web_exceptions import HTTPConflict, HTTPNotFound
from app.base.base_accessor import BaseAccessor
from app.web.utils import hash_password

if TYPE_CHECKING:
    from app.web.app import Application


class UserAccessor(BaseAccessor):
    async def connect(self, app: "Application") -> None:
        self.app = app

    async def get_by_email(self, email_str: str) -> UserModel | None:
        request = select(UserModel)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            for admin in res.scalars().all():
                if str(admin.email).strip() == email_str:
                    return admin

        return None

    async def create_user(self, email_str: str, password_str: str) -> UserModel:
        user = await self.get_by_email(email_str)
        if user:
            raise HTTPConflict

        request = insert(UserModel).values(email=email_str, password=hash_password(password_str))
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

        user = await self.get_by_email(email_str)
        return user


class UserTokenAccessor(BaseAccessor):
    async def connect(self, app: "Application") -> None:
        self.app = app

    async def get_by_user_id(self, user_id: int) -> UserTokenModel | None:
        request = select(UserTokenModel).where(UserTokenModel.user_id == user_id)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            try:
                user_token: UserTokenModel = res.scalars().one()
            except Exception:
                return None
            return user_token

    async def create_user_token(self, user_id, jwt_datetime: datetime):
        user_token = await self.get_by_user_id(user_id)
        if user_token:
            request = update(UserTokenModel).where(UserTokenModel.user_id == user_id).values(user_id=user_id,
                                                                                             jwt_datetime=jwt_datetime,
                                                                                             expiry_datetime=
                                                                                             (jwt_datetime +
                                                                                              timedelta(days=50)))
        else:
            request = insert(UserTokenModel).values(user_id=user_id,
                                                    jwt_datetime=jwt_datetime,
                                                    expiry_datetime=(jwt_datetime +
                                                                     timedelta(days=50)))
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

