from marshmallow import Schema, fields


class CatalogSchema(Schema):
    id = fields.Int(required=False)
    title = fields.Str(required=True)
    tag = fields.Str(required=True)


class ListOfCatalogsSchema(Schema):
    catalogs = fields.Nested(CatalogSchema, many=True)


class TypeSchema(Schema):
    id = fields.Int(required=False)
    title = fields.Str(required=True)
    tag = fields.Str(required=True)


class ListOfTypesSchema(Schema):
    types = fields.Nested(TypeSchema, many=True)