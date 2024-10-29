"""add user_token and admin_token models

Revision ID: e953fd7eb7a8
Revises: a63181e7f8ff
Create Date: 2024-10-22 18:48:21.402898

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e953fd7eb7a8'
down_revision: Union[str, None] = 'a63181e7f8ff'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admin_tokens',
    sa.Column('id', sa.BigInteger(), nullable=False),
    sa.Column('admin_id', sa.BigInteger(), nullable=False),
    sa.Column('jwt_datetime', sa.DateTime(), nullable=False),
    sa.Column('expiry_datetime', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['admin_id'], ['admins.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_tokens',
    sa.Column('id', sa.BigInteger(), nullable=False),
    sa.Column('user_id', sa.BigInteger(), nullable=False),
    sa.Column('jwt_datetime', sa.DateTime(), nullable=False),
    sa.Column('expiry_datetime', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_tokens')
    op.drop_table('admin_tokens')
    # ### end Alembic commands ###