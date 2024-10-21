import {
    BroadcastChannel
} from 'broadcast-channel'
import {
    debug
} from '../app'
import * as M from '../store/mutations'
import {
    MESSAGES_BACKEND_STATUS
} from '../consts'
import store from '../store'

let tabActiveFlag = null
let channel = null
let myTabID = null

function d(msg) {
    debug(`tab watcher - ${msg}`)
}

// разрешение конфликтов активации
// разрешающие эвенты, активирующие вкладку
const tabActivityEvents = [
    'mousemove',
    'mousedown',
    'keydown'
]

const tabStack = {
    stack: [],

    push(tabId) {
        if (this.stack.indexOf(tabId) === -1) {
            this.stack.push(tabId)
        }
    },

    forget(tabId) {
        const ind = this.stack.indexOf(tabId)
        if (ind !== -1) {
            this.stack.splice(ind, 1)
        }
    },

    isLast(tabId) {
        return this.stack.length && this.stack[this.stack.length - 1] === tabId
    }
}

function broadcast(event, data) {
    if (!channel) {
        return
    }

    channel.postMessage({
        type: event,
        data: data
    })
}

/**
 * Ушли с вкладки
 */
function tabSleep() {
    if (!tabActiveFlag) {
        return
    }

    tabActiveFlag = false
    d('tab sleep')
}

/**
 * Вернулись на вкладку
 */
function tabWakeUp() {
    if (tabActiveFlag) {
        return
    }

    tabActiveFlag = true

    // не нужно оповещать т.к. мы не оповещаем при потере фокуса
    if (tabIsLastActive()) {
        return
    }

    broadcast('tabWakeUp', {
        tabId: myTabID
    })
    tabWakeUpHandler(myTabID)

    d('tab wake up')
}

/**
 * Обрабатываем активацию
 */
function tabWakeUpHandler(tabId) {
    // делаем текущий id таба последним в списке
    if (tabId !== myTabID) {
        tabActiveFlag = false
    }

    tabStack.forget(tabId)
    tabStack.push(tabId)
}

/**
 * Сбрасываем отслеживание разрешения конфликтов
 */
function skipResolve() {
    for (let i = 0; i < tabActivityEvents.length; ++i) {
        window.removeEventListener(tabActivityEvents[i], resolveHandler)
    }
}

/**
 * Обработчик при разрешении конфликта
 */
function resolveHandler() {
    skipResolve()
    // пробуждаем текущую вкладку если нужно
    tabWakeUp()
}

/**
 * запускаем отслеживание эвентов для разрешения конфликтов
 */
function resolveConflict() {
    for (let i = 0; i < tabActivityEvents.length; ++i) {
        window.addEventListener(tabActivityEvents[i], resolveHandler)
    }
}

/**
 * Обрабатываем рождение новой вкладки
 */
function tabBirthHandler(tabId) {
    tabStack.push(tabId)

    // Конфликт! Мы получили информацию об активации другой вкладки без
    // blur текущей
    if (myTabID !== tabId && tabActiveFlag) {
        tabSleep() // усыпляем текущую владку, считая активной последнюю сигнализирующую
        resolveConflict()
    }
}

export function initTabWatcher(id) {
    if (tabActiveFlag !== null) {
        return
    }

    myTabID = 'tab' + guid()

    try {
        channel = new BroadcastChannel('consultantTabWatcher' + id, {
            webWorkerSupport: false
        })
    } catch (e) {
        return
    }

    if (!channel) {
        return
    }

    const subscribe = (function() {
        const listeners = {}

        channel.onmessage = function(msg) {
            const listener = listeners[msg.type]
            if (listener) {
                listener(msg)
            }
        }

        return function(event, listener) {
            listeners[event] = listener
        }
    })()

    // ловим рождение вкладки
    subscribe('tabBirth', function(message) {
        tabBirthHandler(message.data.tabId)
    })

    // ловим смерть вкладки
    subscribe('tabDeath', function(message) {
        tabStack.forget(message.data.tabId)
    })

    // ловим активацию
    subscribe('tabWakeUp', function(message) {
        tabWakeUpHandler(message.data.tabId)
    })

    // обрабатываем просмотр сообщения в других вкладках
    subscribe('onMessageRead', function(message) {
        if (message.data.tabId === myTabID) {
            return
        }

        store.commit(M.UPDATE_MESSAGE, {
            id: message.data.messageId,
            data: {
                status: MESSAGES_BACKEND_STATUS.SEEN
            },
            doNotRunOnMessageRead: true
        })
    })

    tabActiveFlag = true
    d('init new tab - ' + myTabID)

    // Оповещаем о рождении текущей вкладки
    // вкладка кладет сама себя в стек так же через broadcast
    broadcast('tabBirth', {
        tabId: myTabID
    })
    tabBirthHandler(myTabID)

    // отлавливаем переход по вкладкам
    window.addEventListener('blur', tabSleep)
    window.addEventListener('focus', tabWakeUp)

    // оповещаем о смерти
    window.addEventListener('beforeunload', function() {
        broadcast('tabDeath', {
            tabId: myTabID
        })
    })
}

export function tabIsLastActive() {
    if (tabActiveFlag === null) {
        return null
    }

    return tabStack.isLast(myTabID)
}

export function onMessageRead(messageId) {
    broadcast('onMessageRead', {
        tabId: myTabID,
        messageId
    })
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}



// WEBPACK FOOTER //
// ./src/utils/tab_watcher.js