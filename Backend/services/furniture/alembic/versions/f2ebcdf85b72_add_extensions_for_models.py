"""add extensions for models

Revision ID: f2ebcdf85b72
Revises: b8c882832f06
Create Date: 2024-12-02 12:24:55.298982

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'f2ebcdf85b72'
down_revision: Union[str, None] = 'b8c882832f06'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('catalogs', sa.Column('file_extension', sa.String(), nullable=True))
    op.add_column('products', sa.Column('file_extension', sa.String(), nullable=True))
    op.add_column('types', sa.Column('file_extension', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('types', 'file_extension')
    op.drop_column('products', 'file_extension')
    op.drop_column('catalogs', 'file_extension')
    # ### end Alembic commands ###
