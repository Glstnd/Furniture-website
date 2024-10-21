FROM python:3.11-slim

WORKDIR /app
COPY . /app/

RUN pip install -r requirements.txt

CMD alembic upgrade head && python main.py run