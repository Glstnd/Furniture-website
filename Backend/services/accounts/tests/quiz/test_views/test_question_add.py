import pytest
from aiohttp.test_utils import TestClient

from app.quiz.models import ThemeModel


class TestQuestionAddView:
    async def test_success(
        self, auth_cli: TestClient, theme_1: ThemeModel
    ) -> None:
        response = await auth_cli.post(
            "/quiz.add_question",
            json={
                "title": "How many legs does an octopus have?",
                "theme_id": theme_1.id,
                "answers": [
                    {
                        "title": "2",
                        "is_correct": False,
                    },
                    {
                        "title": "8",
                        "is_correct": True,
                    },
                ],
            },
        )
        assert response.status == 200

        data = await response.json()
        assert data == {
            "status": "ok",
            "data": {
                "id": data["data"]["id"],
                "title": "How many legs does an octopus have?",
                "theme_id": theme_1.id,
                "answers": [
                    {"title": "2", "is_correct": False},
                    {"title": "8", "is_correct": True},
                ],
            },
        }

    async def test_unauthorized(self, cli: TestClient) -> None:
        response = await cli.post(
            "/quiz.add_question",
            json={
                "title": "How many legs does an octopus have?",
                "theme_id": 1,
                "answers": [
                    {
                        "title": "2",
                        "is_correct": False,
                    },
                    {
                        "title": "8",
                        "is_correct": True,
                    },
                ],
            },
        )
        assert response.status == 401

        data = await response.json()
        assert data["status"] == "unauthorized"

    async def test_theme_not_found(self, auth_cli: TestClient) -> None:
        response = await auth_cli.post(
            "/quiz.add_question",
            json={
                "title": "How many legs does an octopus have?",
                "theme_id": 1,
                "answers": [
                    {
                        "title": "2",
                        "is_correct": False,
                    },
                    {
                        "title": "8",
                        "is_correct": True,
                    },
                ],
            },
        )
        assert response.status == 404

        data = await response.json()
        assert data["status"] == "not_found"

    @pytest.mark.parametrize(
        "answers",
        (
            # все корректные
            [
                {
                    "title": "2",
                    "is_correct": True,
                },
                {
                    "title": "8",
                    "is_correct": True,
                },
            ],
            # все некорректные
            [
                {
                    "title": "2",
                    "is_correct": False,
                },
                {
                    "title": "8",
                    "is_correct": False,
                },
            ],
            # всего один
            [
                {
                    "title": "2",
                    "is_correct": True,
                },
            ],
        ),
    )
    async def test_bad_request_when_bad_answers(
        self, auth_cli: TestClient, theme_1: ThemeModel, answers: list[dict]
    ) -> None:
        response = await auth_cli.post(
            "/quiz.add_question",
            json={
                "title": "How many legs does an octopus have?",
                "theme_id": theme_1.id,
                "answers": answers,
            },
        )
        assert response.status == 400

        data = await response.json()
        assert data["status"] == "bad_request"
