import pytest
from sqlalchemy import delete
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker
from sqlalchemy.future import select

from app.quiz.models import AnswerModel, QuestionModel, ThemeModel
from app.store import Store
from tests.utils import answers_to_dict, question_to_dict, questions_to_dict


class TestQuestionsAccessor:
    QUESTION_TITLE_EXAMPLE = "title"

    async def test_table_exists(self, inspect_list_tables: list[str]):
        assert "questions" in inspect_list_tables
        assert "answers" in inspect_list_tables

    async def test_get_question_by_title(
        self, store: Store, question_1: QuestionModel
    ):
        question = await store.quizzes.get_question_by_title(question_1.title)
        assert question_to_dict(question) == {
            "id": question.id,
            "title": question.title,
            "theme_id": question.theme_id,
        }

    async def test_get_list_questions(
        self, store: Store, question_1: QuestionModel, question_2: QuestionModel
    ):
        questions = await store.quizzes.list_questions()
        assert questions_to_dict(questions) == [
            {
                "id": question_1.id,
                "title": question_1.title,
                "theme_id": question_1.theme_id,
            },
            {
                "id": question_2.id,
                "title": question_2.title,
                "theme_id": question_2.theme_id,
            },
        ]

    async def test_create_question(
        self,
        db_sessionmaker: async_sessionmaker[AsyncSession],
        store: Store,
        theme_1: ThemeModel,
    ):
        question = await store.quizzes.create_question(
            self.QUESTION_TITLE_EXAMPLE,
            theme_1.id,
            answers=[
                AnswerModel(title="1", is_correct=True),
                AnswerModel(title="2", is_correct=False),
                AnswerModel(title="3", is_correct=False),
                AnswerModel(title="4", is_correct=False),
            ],
        )
        assert isinstance(question, QuestionModel)

        async with db_sessionmaker() as session:
            db_questions = await session.scalars(select(QuestionModel))
            db_answers = await session.scalars(select(AnswerModel))

        db_questions = list(db_questions.all())
        db_answers = list(db_answers.all())

        assert questions_to_dict(db_questions) == [
            {
                "id": question.id,
                "title": question.title,
                "theme_id": question.theme_id,
            }
        ]
        assert answers_to_dict(db_answers) == [
            {
                "id": db_answers[0].id,
                "title": "1",
                "is_correct": True,
                "question_id": question.id,
            },
            {
                "id": db_answers[1].id,
                "title": "2",
                "is_correct": False,
                "question_id": question.id,
            },
            {
                "id": db_answers[2].id,
                "title": "3",
                "is_correct": False,
                "question_id": question.id,
            },
            {
                "id": db_answers[3].id,
                "title": "4",
                "is_correct": False,
                "question_id": question.id,
            },
        ]

    async def test_23503_error_when_create_question_without_theme(
        self, store: Store
    ) -> None:
        with pytest.raises(IntegrityError) as exc_info:
            await store.quizzes.create_question(
                self.QUESTION_TITLE_EXAMPLE,
                1,
                [
                    AnswerModel(title="1", is_correct=True),
                    AnswerModel(title="2", is_correct=False),
                ],
            )

        assert exc_info.value.orig.pgcode == "23503"

    async def test_23502_error_when_create_question_with_bad_theme_id(
        self, store: Store
    ):
        with pytest.raises(IntegrityError) as exc_info:
            await store.quizzes.create_question(
                self.QUESTION_TITLE_EXAMPLE,
                None,
                [
                    AnswerModel(title="1", is_correct=True),
                    AnswerModel(title="2", is_correct=False),
                ],
            )

        assert exc_info.value.orig.pgcode == "23502"

    async def test_23503_error_when_create_question_with_duplicated_title(
        self,
        store: Store,
        question_1: QuestionModel,
    ):
        with pytest.raises(IntegrityError) as exc_info:
            await store.quizzes.create_question(
                question_1.title,
                question_1.theme_id,
                [
                    AnswerModel(title="1", is_correct=True),
                    AnswerModel(title="2", is_correct=False),
                ],
            )

        assert exc_info.value.orig.pgcode == "23505"

    async def test_success_question_cascade_delete(
        self,
        db_sessionmaker: async_sessionmaker[AsyncSession],
        question_1: QuestionModel,
    ):
        async with db_sessionmaker() as session:
            await session.execute(
                delete(QuestionModel).where(QuestionModel.id == question_1.id)
            )
            await session.commit()

            db_answers = await session.execute(
                select(AnswerModel).where(
                    AnswerModel.question_id == question_1.id
                )
            )

        assert len(db_answers.all()) == 0
