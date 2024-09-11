from typing import TYPE_CHECKING

from sqlalchemy import select, insert

from app.user.models import UserModel
from aiohttp.web_exceptions import HTTPConflict
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
                    return UserModel(id=1, email=admin.email, password=admin.password)

        if self.app.config.admin.email == email_str:
            return UserModel(id=1, email=self.app.config.admin.email,
                              password=hash_password(self.app.config.admin.password))

        return None

    async def create_user(self, email_str: str, password_str: str) -> UserModel:
        user = await self.get_by_email(email_str)
        if user:
            raise HTTPConflict

        request = insert(UserModel).values(email=email_str, password=hash_password(password_str))
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

        return UserModel(email=email_str, password=hash_password(password_str))
