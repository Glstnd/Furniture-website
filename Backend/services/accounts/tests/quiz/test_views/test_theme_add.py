from aiohttp.test_utils import TestClient
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

from app.quiz.models import ThemeModel


class TestThemeAddView:
    async def test_unauthorized(self, cli: TestClient) -> None:
        response = await cli.post(
            "/quiz.add_theme", json={"title": "web-development"}
        )
        assert response.status == 401

        data = await response.json()
        assert data["status"] == "unauthorized"

    async def test_success(
        self,
        auth_cli: TestClient,
        db_sessionmaker: async_sessionmaker[AsyncSession],
    ) -> None:
        response = await auth_cli.post(
            "/quiz.add_theme", json={"title": "web-development"}
        )
        assert response.status == 200
        data = await response.json()

        assert data == {
            "status": "ok",
            "data": {
                "id": data["data"]["id"],
                "title": "web-development",
            },
        }

        async with db_sessionmaker() as session:
            themes = list(await session.scalars(select(ThemeModel)))

        assert len(themes) == 1
        assert themes[0].title == "web-development"

    async def test_bad_request_when_missed_title(
        self, auth_cli: TestClient
    ) -> None:
        response = await auth_cli.post("/quiz.add_theme", json={})
        assert response.status == 400

        data = await response.json()
        assert data == {
            "status": "bad_request",
            "message": "Unprocessable Entity",
            "data": {"json": {"title": ["Missing data for required field."]}},
        }

    async def test_conflict_when_theme_with_title_already_exists(
        self, auth_cli: TestClient, theme_1: ThemeModel
    ) -> None:
        response = await auth_cli.post(
            "/quiz.add_theme", json={"title": theme_1.title}
        )
        assert response.status == 409

        data = await response.json()
        assert data["status"] == "conflict"
