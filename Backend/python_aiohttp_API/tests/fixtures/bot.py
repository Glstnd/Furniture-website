from unittest.mock import AsyncMock

import pytest

from app.store import Store


@pytest.fixture
def vk_api_send_message_mock(store: Store) -> AsyncMock:
    mock = AsyncMock()
    store.vk_api.send_message = mock
    return mock
