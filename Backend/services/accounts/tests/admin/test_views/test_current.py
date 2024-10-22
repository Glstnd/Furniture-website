from aiohttp.test_utils import TestClient

from app.web.config import Config


class TestCurrentView:
    async def test_unauthorized(self, cli: TestClient) -> None:
        response = await cli.get("/admin.current")
        assert response.status == 401

        data = await response.json()
        assert data["status"] == "unauthorized"

    async def test_success_after_register(self, reg_admin_cli, config: Config) -> None:
        response = await reg_admin_cli.get("/admin.current")
        assert response.status == 200

        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("email") == config.admin.email
        assert data.get("data").get("password", None) is None
