from sqlalchemy import Column, BigInteger, CHAR, ForeignKey, DateTime

from app.store.database.sqlalchemy_base import BaseModel


class UserModel(BaseModel):
    __tablename__ = "users"
    id = Column(BigInteger, primary_key=True)
    email = Column(CHAR(20), unique=True, nullable=False)
    password = Column(CHAR(20), nullable=False)


class UserTokenModel(BaseModel):
    __tablename__ = "user_tokens"
    id = Column(BigInteger, primary_key=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"),
                     nullable=False)
    jwt_datetime = Column(DateTime, nullable=False)
    expiry_datetime = Column(DateTime, nullable=False)
