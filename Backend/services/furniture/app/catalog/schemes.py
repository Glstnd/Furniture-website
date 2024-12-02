from marshmallow import Schema, fields


class CatalogSchema(Schema):
    id = fields.Int(required=False)
    title = fields.Str(required=True)
    tag = fields.Str(required=True)
    image = fields.Str(required=False)
    file_extension = fields.Str(required=False)


class ListOfCatalogsSchema(Schema):
    catalogs = fields.Nested(CatalogSchema, many=True)


class TypeSchema(Schema):
    id = fields.Int(required=False)
    title = fields.Str(required=True)
    tag = fields.Str(required=True)
    image = fields.Str(required=False)
    file_extension = fields.Str(required=False)


class ListOfTypesSchema(Schema):
    types = fields.Nested(TypeSchema, many=True)