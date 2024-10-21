class TestAdminAccessor:
    async def test_admin_created_on_startup(self) -> None:\
        assert "admin" is not None
