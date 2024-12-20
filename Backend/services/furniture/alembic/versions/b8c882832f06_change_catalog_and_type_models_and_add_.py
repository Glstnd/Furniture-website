"""change catalog and type models and add product model

Revision ID: b8c882832f06
Revises: 37ca965edbfe
Create Date: 2024-12-02 12:16:59.623030

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b8c882832f06'
down_revision: Union[str, None] = '37ca965edbfe'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('products',
    sa.Column('id', sa.BigInteger(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('type_id', sa.BigInteger(), nullable=False),
    sa.Column('image', sa.LargeBinary(), nullable=True),
    sa.ForeignKeyConstraint(['type_id'], ['types.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('catalogs', sa.Column('image', sa.LargeBinary(), nullable=True))
    op.add_column('types', sa.Column('image', sa.LargeBinary(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('types', 'image')
    op.drop_column('catalogs', 'image')
    op.drop_table('products')
    # ### end Alembic commands ###
