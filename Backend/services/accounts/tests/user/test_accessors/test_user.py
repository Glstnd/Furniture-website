from app.store import Store
from app.web.config import Config


class TestUserAccessor:
    async def test_user_if_not_created(
            self, store: Store, config: Config
    ) -> None:
        user = await store.users.get_by_email(config.user.email)

        assert user is None

    async def test_admin_creating(
            self, store: Store, config: Config
    ) -> None:
        user = await store.users.create_user(config.user.email, config.user.password)

        assert user is not None
        assert user.email == config.user.email
        assert isinstance(user.id, int)
        assert user.password != config.user.password
