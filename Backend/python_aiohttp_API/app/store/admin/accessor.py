from typing import TYPE_CHECKING

from sqlalchemy import select, insert

from app.admin.models import AdminModel
from app.base.base_accessor import BaseAccessor
from app.web.utils import hash_password

if TYPE_CHECKING:
    from app.web.app import Application


class AdminAccessor(BaseAccessor):
    async def connect(self, app: "Application") -> None:
        self.app = app

    async def get_by_email(self, email: str) -> AdminModel | None:
        request = select(AdminModel)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            for admin in res:
                if admin.email == email:
                    return AdminModel(id=1, email=admin.email, password=hash_password(admin.password))

        if self.app.config.admin.email == email:
            return AdminModel(id=1, email=self.app.config.admin.email,
                              password=hash_password(self.app.config.admin.password))

        return None

    async def create_admin(self, email: str, password: str) -> AdminModel:
        request = insert(AdminModel).values(email=email, password=hash_password(password))
        async with self.app.database.session as session:
            res = await session.execute(request)
            res.all()

        return AdminModel(email=email, password=password)
