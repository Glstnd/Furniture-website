from collections.abc import Iterable

import pytest
from sqlalchemy import delete, select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

from app.quiz.models import QuestionModel, ThemeModel
from app.store import Store
from tests.utils import theme_to_dict, themes_to_dict


class TestThemeAccessor:
    async def test_table_exists(self, inspect_list_tables: list[str]):
        assert "themes" in inspect_list_tables

    async def test_success_get_theme_by_id(
        self, store: Store, theme_1: ThemeModel
    ) -> None:
        theme = await store.quizzes.get_theme_by_id(theme_1.id)
        assert isinstance(theme, ThemeModel)
        assert theme_to_dict(theme) == theme_to_dict(theme_1)

    async def test_success_get_theme_by_title(
        self, store: Store, theme_1: ThemeModel
    ) -> None:
        theme = await store.quizzes.get_theme_by_title(theme_1.title)
        assert isinstance(theme, ThemeModel)
        assert theme_to_dict(theme) == theme_to_dict(theme_1)

    async def test_success_get_list(
        self, store: Store, theme_1: ThemeModel
    ) -> None:
        themes_list = await store.quizzes.list_themes()
        assert isinstance(themes_list, Iterable)
        assert themes_to_dict(themes_list) == [theme_to_dict(theme_1)]

    async def test_create_theme(
        self, db_sessionmaker: async_sessionmaker[AsyncSession], store: Store
    ) -> None:
        theme = await store.quizzes.create_theme("title")
        assert isinstance(theme, ThemeModel)

        async with db_sessionmaker() as session:
            themes = list(await session.scalars(select(ThemeModel)))

        assert len(themes) == 1
        assert themes[0].id == theme.id
        assert themes[0].title == theme.title

    async def test_create_theme_unique_title_constraint(
        self, store: Store, theme_1: ThemeModel
    ):
        with pytest.raises(IntegrityError) as exc_info:
            await store.quizzes.create_theme(theme_1.title)

        assert exc_info.value.orig.pgcode == "23505"

    async def test_check_cascade_delete(
        self,
        db_sessionmaker: async_sessionmaker[AsyncSession],
        theme_1: ThemeModel,
    ):
        async with db_sessionmaker() as session:
            await session.execute(
                delete(ThemeModel).where(ThemeModel.id == theme_1.id)
            )
            await session.commit()

            db_questions = await session.scalars(
                select(QuestionModel).where(
                    QuestionModel.theme_id == theme_1.id
                )
            )

        assert len(db_questions.all()) == 0
