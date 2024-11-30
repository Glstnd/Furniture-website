import os
import typing
from dataclasses import dataclass

import yaml

if typing.TYPE_CHECKING:
    from app.web.app import Application

from dotenv import load_dotenv
dotenv_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), '.env')
load_dotenv(dotenv_path)


@dataclass
class SessionConfig:
    key: str


@dataclass
class AdminConfig:
    email: str
    password: str


@dataclass
class UserConfig:
    email: str
    password: str


@dataclass
class DatabaseConfig:
    host: str
    port: int
    user: str
    password: str
    database: str


@dataclass
class KafkaConfig:
    bootstrap_servers: str


@dataclass
class Config:
    admin: AdminConfig
    user: UserConfig
    session: SessionConfig | None = None
    database: DatabaseConfig | None = None
    kafka: KafkaConfig | None = None


def setup_config(app: "Application", config_path: str):
    with open(config_path, "r") as f:
        raw_config = yaml.safe_load(f)

    app.config = Config(
        session=SessionConfig(
            key=raw_config["session"]["key"],
        ),
        admin=AdminConfig(
            email=raw_config["admin"]["email"],
            password=raw_config["admin"]["password"],
        ),
        user=UserConfig(
            email=raw_config["user"]["email"],
            password=raw_config["user"]["password"],
        ),
        database=DatabaseConfig(
            host=os.environ.get("DB_HOST"),
            port=int(os.environ.get("DB_PORT")),
            user=os.environ.get("DB_USER"),
            password=os.environ.get("DB_PASSWORD"),
            database=os.environ.get("DB_NAME"),
        ),
        kafka=KafkaConfig(
            bootstrap_servers=os.environ.get("KAFKA_BOOTSTRAP_SERVERS")
        ),
    )
