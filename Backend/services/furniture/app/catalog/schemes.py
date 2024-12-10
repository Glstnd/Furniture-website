from marshmallow import Schema, fields


class CatalogSchema(Schema):
    id = fields.Int(required=False)
    title = fields.Str(required=True)
    tag = fields.Str(required=True)
    image = fields.Str(required=False)
    file_extension = fields.Str(required=False)


class CatalogPutSchema(Schema):
    title = fields.Str(required=False)
    tag = fields.Str(required=False)
    image = fields.Str(required=False)
    file_extension = fields.Str(required=False)


class ListOfCatalogsSchema(Schema):
    catalogs = fields.Nested(CatalogSchema, many=True)


class TypeSchema(Schema):
    id = fields.Int(required=False)
    title = fields.Str(required=True)
    tag = fields.Str(required=True)
    catalog_id = fields.Int(required=False)
    image = fields.Str(required=False)
    file_extension = fields.Str(required=False)


class ListOfTypesSchema(Schema):
    types = fields.Nested(TypeSchema, many=True)

class ProductSchema(Schema):
    id = fields.Int(required=False)
    title = fields.Str(required=True)
    tag = fields.Str(required=True)
    type_id = fields.Int(required=False)
    image = fields.Str(required=False)
    file_extension = fields.Str(required=False)


class ProductPutSchema(Schema):
    title = fields.Str(required=False)
    tag = fields.Str(required=False)
    type_id = fields.Int(required=False)
    image = fields.Str(required=False)
    file_extension = fields.Str(required=False)


class ListOfProductsSchema(Schema):
    products = fields.Nested(ProductSchema, many=True)