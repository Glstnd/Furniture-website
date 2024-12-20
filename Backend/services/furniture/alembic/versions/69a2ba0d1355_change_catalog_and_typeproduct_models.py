"""change catalog and typeproduct models

Revision ID: 69a2ba0d1355
Revises: 75f95e815340
Create Date: 2024-10-23 14:50:41.952038

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '69a2ba0d1355'
down_revision: Union[str, None] = '75f95e815340'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('catalogs', 'image')
    op.add_column('types', sa.Column('catalog_id', sa.BigInteger(), nullable=False))
    op.create_foreign_key(None, 'types', 'catalogs', ['catalog_id'], ['id'], onupdate='CASCADE', ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'types', type_='foreignkey')
    op.drop_column('types', 'catalog_id')
    op.add_column('catalogs', sa.Column('image', postgresql.BYTEA(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
