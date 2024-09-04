from app.store import Store
from app.web.config import Config


class TestAdminAccessor:
    async def test_admin_created_on_startup(
        self, store: Store, config: Config
    ) -> None:
        admin = await store.admins.get_by_email(config.admin.email)

        assert admin is not None
        assert admin.email == config.admin.email
        assert (
            admin.password != config.admin.password
        )  # Password must be hashed
        assert admin.id == 1
