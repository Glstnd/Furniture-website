from sqlalchemy import Column, BigInteger, CHAR

from app.store.database.sqlalchemy_base import BaseModel


class AdminModel(BaseModel):
    __tablename__ = "admins"
    id = Column(BigInteger, primary_key=True)
    email = Column(CHAR(20), unique=True, nullable=False)
    password = Column(CHAR(20), nullable=False)
