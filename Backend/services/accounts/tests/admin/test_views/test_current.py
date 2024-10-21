from aiohttp.test_utils import TestClient

from app.web.config import Config


class TestCurrentView:
    async def test_unauthorized(self, cli: TestClient) -> None:
        response = await cli.get("/admin.current")
        assert response.status == 401

        data = await response.json()
        assert data["status"] == "unauthorized"

    async def test_success(self, auth_cli: TestClient, config: Config) -> None:
        response = await auth_cli.get("/admin.current")
        assert response.status == 200

        data = await response.json()
        assert data == {
            "status": "ok",
            "data": {
                "id": 1,
                "email": config.admin.email,
            },
        }
