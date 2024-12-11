from aiohttp.test_utils import TestClient

from app.web.config import Config


class TestUserRegisterView:
    async def test_success_when_good_credentials(
        self, cli: TestClient, config: Config
    ) -> None:
        response = await cli.post(
            "/api/accounts/user.register",
            json={
                "email": config.user.email,
                "password": config.user.password,
            },
        )

        assert response.status == 200

        data = await response.json()
        assert data.get("status") == "ok"
        assert data.get("data").get("email") == config.user.email
        assert data.get("data").get("password", None) is None

    async def test_bad_request_when_missed_email(self, cli: TestClient) -> None:
        response = await cli.post(
            "/api/accounts/user.register",
            json={
                "password": "qwerty",
            },
        )

        assert response.status == 400

        data = await response.json()
        assert data.get("status") == "bad_request"
        assert data.get("message") == "Unprocessable Entity"
        assert data.get("data").get("json").get("email")[0] == "Missing data for required field."

    async def test_forbidden_when_not_unique_email(self, reg_user_cli, config: Config) -> None:
        response = await reg_user_cli.post(
            "/api/accounts/user.register",
            json={
                "email": config.user.email,
                "password": config.user.password,
            },
        )

        assert response.status == 409

        data = await response.json()
        assert data.get("status") == "conflict"
        assert data.get("message") == "Conflict"
