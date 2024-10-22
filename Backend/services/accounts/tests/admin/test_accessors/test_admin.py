from app.store import Store
from app.web.config import Config


class TestAdminAccessor:
    async def test_admin_if_not_created(
            self, store: Store, config: Config
    ) -> None:
        admin = await store.admins.get_by_email(config.admin.email)

        assert admin is None

    async def test_admin_creating(
            self, store: Store, config: Config
    ) -> None:
        admin = await store.admins.create_admin(config.admin.email, config.admin.password)

        assert admin is not None
        assert admin.email == config.admin.email
        assert isinstance(admin.id, int)
        assert admin.password != config.admin.password
