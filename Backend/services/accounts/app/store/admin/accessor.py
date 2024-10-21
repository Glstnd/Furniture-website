from datetime import datetime, timedelta
from typing import TYPE_CHECKING

from aiohttp.web_exceptions import HTTPConflict
from sqlalchemy import select, insert, update

from app.admin.models import AdminModel
from app.base.base_accessor import BaseAccessor
from app.admin.models import AdminTokenModel
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

            for admin in res.scalars().all():
                if str(admin.email).strip() == email:
                    return admin

        return None

    async def create_admin(self, email: str, password: str) -> AdminModel:
        admin = await self.get_by_email(email)
        if admin:
            raise HTTPConflict

        request = insert(AdminModel).values(email=email, password=hash_password(password))
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()

        admin = await self.get_by_email(email)
        return admin


class AdminTokenAccessor(BaseAccessor):
    async def connect(self, app: "Application") -> None:
        self.app = app

    async def get_by_admin_id(self, admin_id: int) -> AdminTokenModel | None:
        request = select(AdminTokenModel).where(AdminTokenModel.admin_id == admin_id)
        async with self.app.database.session() as session:
            res = await session.execute(request)

            try:
                admin_token: AdminTokenModel = res.scalars().one()
            except Exception:
                return None
            return admin_token

    async def create_admin_token(self, admin_id, jwt_datetime: datetime):
        admin_token = await self.get_by_admin_id(admin_id)
        if admin_token:
            request = update(AdminTokenModel).where(AdminTokenModel.admin_id == admin_id).values(admin_id=admin_id,
                                                                                                 jwt_datetime=jwt_datetime,
                                                                                                 expiry_datetime=
                                                                                                 (jwt_datetime +
                                                                                                  timedelta(days=50)))
        else:
            request = insert(AdminTokenModel).values(admin_id=admin_id,
                                                     jwt_datetime=jwt_datetime,
                                                     expiry_datetime=(jwt_datetime +
                                                                      timedelta(days=50)))
        async with self.app.database.session() as session:
            await session.execute(request)
            await session.commit()
