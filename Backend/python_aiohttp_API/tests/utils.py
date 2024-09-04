from collections.abc import Iterable

from app.quiz.models import AnswerModel, QuestionModel, ThemeModel


def theme_to_dict(theme: ThemeModel) -> dict:
    return {
        "id": theme.id,
        "title": theme.title,
    }


def themes_to_dict(themes: Iterable[ThemeModel]) -> list[dict]:
    return [theme_to_dict(theme) for theme in themes]


def question_to_dict(question: QuestionModel) -> dict:
    return {
        "id": question.id,
        "title": question.title,
        "theme_id": question.theme_id,
    }


def questions_to_dict(questions: Iterable[QuestionModel]) -> list[dict]:
    return [question_to_dict(question) for question in questions]


def answer_to_dict(answer: AnswerModel) -> dict:
    return {
        "id": answer.id,
        "title": answer.title,
        "question_id": answer.question_id,
        "is_correct": answer.is_correct,
    }


def answers_to_dict(answers: Iterable[AnswerModel]) -> list[dict]:
    return [answer_to_dict(answer) for answer in answers]
