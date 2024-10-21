from aiohttp.test_utils import TestClient

from app.quiz.models import ThemeModel


class TestThemeList:
    async def test_unauthorized(self, cli: TestClient) -> None:
        response = await cli.get("/quiz.list_themes")
        assert response.status == 401

        data = await response.json()
        assert data["status"] == "unauthorized"

    async def test_success_empty_list(self, auth_cli: TestClient) -> None:
        response = await auth_cli.get("/quiz.list_themes")
        assert response.status == 200

        data = await response.json()
        assert data == {
            "status": "ok",
            "data": {
                "themes": [],
            },
        }

    async def test_success_one_theme_in_list(
        self, auth_cli: TestClient, theme_1: ThemeModel
    ) -> None:
        response = await auth_cli.get("/quiz.list_themes")
        assert response.status == 200

        data = await response.json()
        assert data == {
            "status": "ok",
            "data": {
                "themes": [
                    {
                        "id": theme_1.id,
                        "title": theme_1.title,
                    }
                ],
            },
        }

    async def test_success_several_themes_in_list(
        self, auth_cli: TestClient, theme_1: ThemeModel, theme_2: ThemeModel
    ) -> None:
        response = await auth_cli.get("/quiz.list_themes")
        assert response.status == 200

        data = await response.json()
        assert data == {
            "status": "ok",
            "data": {
                "themes": [
                    {
                        "id": theme_1.id,
                        "title": theme_1.title,
                    },
                    {
                        "id": theme_2.id,
                        "title": theme_2.title,
                    },
                ],
            },
        }
