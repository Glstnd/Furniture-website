from aiohttp.test_utils import TestClient


class TestThemeIntegration:
    async def test_success(self, auth_cli: TestClient):
        add_theme_response = await auth_cli.post(
            "/quiz.add_theme",
            json={"title": "integration"},
        )
        assert add_theme_response.status == 200

        add_theme_response_data = await add_theme_response.json()

        list_themes_response = await auth_cli.get("/quiz.list_themes")
        assert list_themes_response.status == 200

        list_themes_response_data = await list_themes_response.json()
        assert list_themes_response_data == {
            "status": "ok",
            "data": {
                "themes": [
                    {
                        "id": add_theme_response_data["data"]["id"],
                        "title": "integration",
                    },
                ],
            },
        }
