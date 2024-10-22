from sqlalchemy import Column, BigInteger, ForeignKey, DateTime, String

from app.store.database.sqlalchemy_base import BaseModel


class AdminModel(BaseModel):
    __tablename__ = "admins"
    id = Column(BigInteger, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)


class AdminTokenModel(BaseModel):
    __tablename__ = "admin_tokens"
    id = Column(BigInteger, primary_key=True)
    admin_id = Column(BigInteger, ForeignKey("admins.id", ondelete="CASCADE", onupdate="CASCADE"),
                      nullable=False)
    jwt_datetime = Column(DateTime, nullable=False)
    expiry_datetime = Column(DateTime, nullable=False)
