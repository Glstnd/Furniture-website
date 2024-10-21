from unittest.mock import AsyncMock

from app.store import Store
from app.store.vk_api.dataclasses import (
    Message,
    Update,
    UpdateMessage,
    UpdateObject,
)


class TestHandleUpdates:
    async def test_vk_api_not_called_when_no_updates(
        self, store: Store, vk_api_send_message_mock: AsyncMock
    ) -> None:
        await store.bots_manager.handle_updates(updates=[])
        vk_api_send_message_mock.assert_not_called()

    async def test_vk_api_called_once_with_any_message_when_there_is_update(
        self, store: Store, vk_api_send_message_mock: AsyncMock
    ) -> None:
        some_update = Update(
            type="message_new",
            object=UpdateObject(
                message=UpdateMessage(
                    id=1,
                    from_id=2,
                    text="kek",
                ),
            ),
        )

        await store.bots_manager.handle_updates(updates=[some_update])

        vk_api_send_message_mock.assert_called_once()
        try:
            message: Message = store.vk_api.send_message.mock_calls[0].args[0]
        except IndexError:
            message: Message = store.vk_api.send_message.mock_calls[0].kwargs[
                "message"
            ]
        assert message.user_id == 2
        assert message.text
