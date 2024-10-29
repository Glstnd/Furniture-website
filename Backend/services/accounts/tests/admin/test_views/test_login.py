from aiohttp.test_utils import TestClient

from app.web.config import Config


class TestAdminLoginView:
    async def test_bad_request_when_missed_email(self, cli: TestClient) -> None:
        response = await cli.post(
            "/admin.login",
            json={
                "password": "qwerty",
            },
        )
        assert response.status == 400

        data = await response.json()
        assert data == {
            "status": "bad_request",
            "message": "Unprocessable Entity",
            "data": {"json": {"email": ["Missing data for required field."]}},
        }

    async def test_forbidden_when_not_valid_credentials(
        self, cli: TestClient
    ) -> None:
        response = await cli.post(
            "/admin.login",
            json={
                "email": "qwerty",
                "password": "qwerty",
            },
        )
        assert response.status == 403

        data = await response.json()
        assert data["status"] == "forbidden"

    async def test_success_when_good_credentials(
            self, reg_admin_cli, config: Config
    ) -> None:
        response = await reg_admin_cli.post(
            "/admin.login",
            json={
                "email": config.admin.email,
                "password": config.admin.password,
            },
        )
        assert response.status == 200

        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("email") == config.admin.email
        assert data.get("data").get("password", None) is None