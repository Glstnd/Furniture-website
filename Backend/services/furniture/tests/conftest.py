import logging
import os
from asyncio import AbstractEventLoop
from collections.abc import Iterator
from hashlib import sha256

import pytest
from aiohttp.pytest_plugin import AiohttpClient
from aiohttp.test_utils import TestClient, loop_context
from sqlalchemy import inspect, select, text
from sqlalchemy.ext.asyncio import (
    AsyncConnection,
    AsyncEngine,
    async_sessionmaker, AsyncSession,
)

from app.store import Database, Store
from app.web.app import Application, setup_app
from app.web.config import Config


@pytest.fixture(scope="session")
def event_loop() -> Iterator[None]:
    with loop_context() as _loop:
        yield _loop


@pytest.fixture(scope="session")
def application() -> Application:
    app = setup_app(
        config_path=os.path.join(
            os.path.abspath(os.path.dirname(__file__)), "config.yml"
        )
    )
    app.on_startup.clear()
    app.on_shutdown.clear()
    app.on_cleanup.clear()

    app.database = Database(app)
    app.on_startup.append(app.database.connect)
    app.on_startup.append(app.store.catalogs.connect)

    app.on_shutdown.append(app.database.disconnect)
    app.on_shutdown.append(app.store.catalogs.disconnect)
    return app


@pytest.fixture
def store(application: Application) -> Store:
    return application.store


@pytest.fixture
def db_sessionmaker(
    application: Application,
) -> async_sessionmaker[AsyncSession]:
    return application.database.session


@pytest.fixture
def db_engine(application: Application) -> AsyncEngine:
    return application.database.engine


@pytest.fixture
async def inspect_list_tables(db_engine: AsyncEngine) -> list[str]:
    def use_inspector(connection: AsyncConnection) -> list[str]:
        inspector = inspect(connection)
        return inspector.get_table_names()

    async with db_engine.begin() as conn:
        return await conn.run_sync(use_inspector)


@pytest.fixture(autouse=True)
async def clear_db(application: Application) -> Iterator[None]:
    try:
        yield
    except Exception as err:
        logging.warning(err)
    finally:
        session = AsyncSession(application.database.engine)
        connection = session.connection()
        for table in application.database._db.metadata.tables:
            await session.execute(text(f"TRUNCATE {table} CASCADE"))
            await session.execute(
                text(f"ALTER SEQUENCE {table}_id_seq RESTART WITH 1")
            )

        await session.commit()
        connection.close()


@pytest.fixture
def config(application: Application) -> Config:
    return application.config


@pytest.fixture(autouse=True)
def cli(
    aiohttp_client: AiohttpClient,
    event_loop: AbstractEventLoop,
    application: Application,
) -> TestClient:
    return event_loop.run_until_complete(aiohttp_client(application))
