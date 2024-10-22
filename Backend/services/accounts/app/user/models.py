from sqlalchemy import Column, BigInteger, ForeignKey, DateTime, String

from app.store.database.sqlalchemy_base import BaseModel


class UserModel(BaseModel):
    __tablename__ = "users"
    id = Column(BigInteger, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)


class UserTokenModel(BaseModel):
    __tablename__ = "user_tokens"
    id = Column(BigInteger, primary_key=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"),
                     nullable=False)
    jwt_datetime = Column(DateTime, nullable=False)
    expiry_datetime = Column(DateTime, nullable=False)
