from sqlalchemy import Column, BigInteger, String, LargeBinary, ForeignKey

from app.store.database.sqlalchemy_base import BaseModel


class CatalogModel(BaseModel):
    __tablename__ = "catalogs"
    id = Column(BigInteger, primary_key=True)
    title = Column(String, unique=True, nullable=False)
    tag = Column(String, unique=True, nullable=False)
    image = Column(LargeBinary, nullable=True)
    file_extension = Column(String, nullable=True)


class TypeProductModel(BaseModel):
    __tablename__ = "types"
    id = Column(BigInteger, primary_key=True)
    title = Column(String, nullable=False)
    tag = Column(String, unique=True, nullable=False)
    catalog_id = Column(BigInteger, ForeignKey("catalogs.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    image = Column(LargeBinary, nullable=True)
    file_extension = Column(String, nullable=True)


class ProductModel(BaseModel):
    __tablename__ = "products"
    id = Column(BigInteger, primary_key=True)
    title = Column(String, nullable=False)
    tag = Column(String, unique=True, nullable=False)
    type_id = Column(BigInteger, ForeignKey("types.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    image = Column(LargeBinary, nullable=True)
    file_extension = Column(String, nullable=True)