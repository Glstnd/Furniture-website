import pytest
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

from app.quiz.models import (
    AnswerModel,
    QuestionModel,
    ThemeModel,
)


@pytest.fixture
async def theme_1(
    db_sessionmaker: async_sessionmaker[AsyncSession],
) -> ThemeModel:
    new_theme = ThemeModel(title="web-development")

    async with db_sessionmaker() as session:
        session.add(new_theme)
        await session.commit()

    return new_theme


@pytest.fixture
async def theme_2(
    db_sessionmaker: async_sessionmaker[AsyncSession],
) -> ThemeModel:
    new_theme = ThemeModel(title="backend")

    async with db_sessionmaker() as session:
        session.add(new_theme)
        await session.commit()

    return new_theme


@pytest.fixture
async def question_1(
    db_sessionmaker: async_sessionmaker[AsyncSession], theme_1: ThemeModel
) -> QuestionModel:
    question = QuestionModel(
        title="how are you?",
        theme_id=theme_1.id,
        answers=[
            AnswerModel(
                title="well",
                is_correct=True,
            ),
            AnswerModel(
                title="bad",
                is_correct=False,
            ),
        ],
    )

    async with db_sessionmaker() as session:
        session.add(question)
        await session.commit()

    return question


@pytest.fixture
async def question_2(db_sessionmaker, theme_1: ThemeModel) -> QuestionModel:
    question = QuestionModel(
        title="are you doing fine?",
        theme_id=theme_1.id,
        answers=[
            AnswerModel(
                title="yep",
                is_correct=True,
            ),
            AnswerModel(
                title="nop",
                is_correct=False,
            ),
        ],
    )

    async with db_sessionmaker() as session:
        session.add(question)
        await session.commit()

    return question
