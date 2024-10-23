from sqlalchemy import Column, BigInteger, String, LargeBinary

from app.store.database.sqlalchemy_base import BaseModel


class CatalogModel(BaseModel):
    __tablename__ = "catalogs"
    id = Column(BigInteger, primary_key=True)
    title = Column(String, unique=True, nullable=False)
    image = Column(LargeBinary)


class TypeProductModel(BaseModel):
    __tablename__ = "types"
    id = Column(BigInteger, primary_key=True)
    title = Column(String, nullable=False)
