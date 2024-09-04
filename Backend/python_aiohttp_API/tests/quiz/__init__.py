from app.quiz.models import AnswerModel, QuestionModel, ThemeModel


def theme2dict(theme: ThemeModel):
    return {
        "id": int(theme.id),
        "title": str(theme.title),
    }


def question2dict(question: QuestionModel):
    return {
        "id": int(question.id),
        "title": str(question.title),
        "theme_id": int(question.theme_id),
        "answers": [answer2dict(answer) for answer in question.answers],
    }


def answer2dict(answer: AnswerModel):
    return {
        "title": answer.title,
        "is_correct": answer.is_correct,
    }
