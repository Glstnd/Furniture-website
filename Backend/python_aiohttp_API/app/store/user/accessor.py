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

    async def get_by_email(self, email: str) -> UserModel | None:
        request = select(UserModel).where(UserModel.email == email)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            for admin in res:
                if admin.email == email:
                    return UserModel(id=1, email=admin.email, password=hash_password(admin.password))

        if self.app.config.admin.email == email:
            return UserModel(id=1, email=self.app.config.admin.email,
                              password=hash_password(self.app.config.admin.password))

        return None

    async def create_user(self, email: str, password: str) -> UserModel:
        user = await self.get_by_email(email)
        if user:
            raise HTTPConflict

        request = insert(UserModel).values(email=email, password=hash_password(password))
        async with self.app.database.session() as session:
            res = await session.execute(request)
            res.all()
            await session.commit()

        return UserModel(email=email, password=password)
