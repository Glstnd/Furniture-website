from typing import TYPE_CHECKING, Any

from sqlalchemy import URL
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker, create_async_engine,
)
from sqlalchemy.orm import DeclarativeBase

from app.store.database import BaseModel

if TYPE_CHECKING:
    from app.web.app import Application


class Database:
    def __init__(self, app: "Application") -> None:
        self.app = app

        self.engine: AsyncEngine | None = None
        self._db: type[DeclarativeBase] = BaseModel
        self.session: async_sessionmaker[AsyncSession] | None = None

    async def connect(self, *args: Any, **kwargs: Any) -> None:
        self.engine = create_async_engine(
            URL.create(
                drivername="postgresql+asyncpg",
                username="kts_user",
                password="kts_pass",
                host="localhost",
                database="kts"
            ),
        )
        self.session = async_sessionmaker(
            self.engine, expire_on_commit=False
        )

    async def disconnect(self, *args: Any, **kwargs: Any) -> None:
        await self.engine.dispose()
