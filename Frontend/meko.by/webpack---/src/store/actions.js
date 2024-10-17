/**
 * @typedef {{required: boolean}} ContactFormField
 *
 * @typedef {{
 *  name: ContactFormField,
 *  email: ContactFormField,
 *  phone: ContactFormField,
 * }} ContactFormConfig
 *
 * @typedef {{
 *   text: string,
 *   config: ContactFormConfig,
 * }} ContactForm
 *
 * @typedef {{
 *  id: number,
 *  thStart: number,
 *  thDeactivate: number,
 *  priority: number,
 *  type: string,
 *  messages: string[],
 *  userLeavesPage: boolean,
 *  allowRetry: boolean,
 *  secAfterClose: number,
 *  lastExecution: {
 *    id: number,
 *    result: string
 *  },
 *  contactForm: ContactForm
 * }} Action
 */

import {
    ApiClient
} from '../api'
import {
    MESSAGE_TYPES,
    MESSAGES_BACKEND_STATUS
} from '../consts'
import * as M from './mutations'
import {
    fullRequiredFilled
} from './index'
import {
    debug
} from './../app'
import {
    playSoundAlert
} from '../utils/sound_alerts'

function d(msg) {
    debug(`actions - ${msg}`)
}

let timerId = null
let vuex = null

const TYPE_CONTACT_FORM = 'contact_form'
const TYPE_POPUP_MESSAGE = 'popup_message'
const TYPE_CHAT_MESSAGE = 'chat_message'

const RESULT_CLOSE = 'close_consultant'
const RESULT_GO_TO_PAGE = 'go_to_page'

const getDefaultState = () => {
    return {
        /**
         * @property Action[]
         */
        actions: [],

        /**
         * @property Action|null
         */
        lastExecution: null,

        /**
         * @property ContactForm|null
         */
        contactForm: null,

        /**
         * @property string|null
         */
        tooltipText: null,

        /**
         * @property number
         */
        retries: 0
    }
}

let mouseOut = null

const actionsModule = {
    namespaced: true,
    root: false,
    state: getDefaultState(),

    actions: {
        init({
            commit,
            state
        }, {
            actions,
            secOnSite
        }) {
            d(`init (number = ${actions.length} / sec on site = ${secOnSite})`)
            commit('INIT', {
                actions,
                secOnSite
            })

            if (state.actions.length === 0) {
                return
            }

            this.dispatch('actions/setTimer')

            mouseOut = (event) => {
                if (event.relatedTarget !== null) {
                    return
                }

                this.dispatch('actions/onMouseOut')
            }
            document.addEventListener('mouseout', mouseOut)
        },

        setTimer({
            state
        }) {
            if (timerId) {
                return
            }

            let actions = []
            if (state.lastExecution && state.lastExecution.allowRetry) {
                actions.push(state.lastExecution)
            } else if (state.actions) {
                actions = state.actions
            } else {
                return
            }

            const now = thNow()
            for (let i = 0; i <= actions.length - 1; i++) {
                const action = actions[i]

                if (!action.thStart || action.userLeavesPage || (action.thDeactivate && action.thDeactivate < now)) {
                    continue
                }

                timerId = setTimeout(() => {
                    this.dispatch('actions/execute', action)
                }, (action.thStart - now) * 1000)

                d('run #' + action.id + ' after ' + (action.thStart - now) + ' sec')
                return
            }
        },

        execute({
            commit
        }, action) {
            if (timerId) {
                clearTimeout(timerId)
                timerId = null
            }

            commit('EXECUTE', action)

            ApiClient.api().executeAction(action.id)
                .then((resp) => {
                    commit('SET_LAST_EXECUTION', {
                        id: resp.execution_id
                    })
                })

            switch (action.type) {
                case TYPE_CHAT_MESSAGE:
                    this.dispatch('actions/chatMessage', action)
                    break
                case TYPE_POPUP_MESSAGE:
                    this.dispatch('actions/popupMessage', action.messages ? action.messages[0] : null)
                    break
                case TYPE_CONTACT_FORM:
                    this.dispatch('actions/contactForm', action.contactForm ? action.contactForm : {})
                    break
                default:
                    throw new Error(`unknown action type ${action.type} (${JSON.stringify(action)})`)
            }
        },

        contactForm({
            rootState,
            commit
        }, contactForm) {
            if (fullRequiredFilled(rootState.config.user, contactForm.config)) {
                return
            }

            commit('SET_CONTACT_FORM', contactForm)
            commit(M.DISABLE_CONTACT_FORM, null, {
                root: true
            })
            this.dispatch('showChat')
            playSoundAlert()
        },

        popupMessage({
            commit,
            state
        }, message) {
            d('popup message (' + JSON.stringify(message) + ')')
            commit('SET_TOOLTIP_TEXT', message)
            playSoundAlert()

            if (state.retries === 0) {
                const msg = createMessage({
                    content: message,
                    virtual: true
                })
                commit(M.SET_MESSAGE, msg, {
                    root: true
                })
            }

            commit(M.DISABLE_CONTACT_FORM, null, {
                root: true
            })
        },

        chatMessage({
            commit,
            state
        }, action) {
            d('chat_messages (' + JSON.stringify(action.messages) + ')')
            if (action.messages.length === 0) {
                return
            }

            // повторно не добавляем сообщения
            if (state.retries === 0) {
                action.messages.forEach((text) => {
                    const msg = createMessage({
                        content: text,
                        virtual: true
                    })
                    commit(M.SET_MESSAGE, msg, {
                        root: true
                    })
                })
            }

            commit(M.DISABLE_CONTACT_FORM, null, {
                root: true
            })
            this.dispatch('showChat')
            playSoundAlert()
        },

        onMouseOut({
            state
        }) {
            d('on mouse out')

            let actions = state.actions
            const le = state.lastExecution
            if (le && le.userLeavesPage && le.allowRetry) {
                actions = [le]
            }

            const now = thNow()
            for (let i = 0; i <= actions.length - 1; i++) {
                const action = actions[i]

                if (!action.thStart || !action.userLeavesPage || (action.thDeactivate && action.thDeactivate < now)) {
                    continue
                }

                d(`thStart(${action.thStart}) - now(${now}) = ${action.thStart - now}`)
                if (now >= action.thStart) {
                    this.dispatch('actions/execute', action)

                    return
                }
            }
        },

        onChatClose({
            state,
            commit
        }) {
            if (state.tooltipText) {
                commit('SET_TOOLTIP_TEXT', null)
            }

            const le = state.lastExecution
            if (!le || !le.lastExecution || le.lastExecution.result) {
                return
            }

            commit('SET_LAST_EXECUTION', {
                result: 'close_consultant'
            })

            if (le.allowRetry) {
                commit('SET_LAST_EXECUTION', {
                    thStart: thNow() + le.secAfterClose
                })
                this.dispatch('actions/setTimer')
            }

            ApiClient.api().executionResultClose(state.lastExecution.lastExecution.id)
        }
    },

    mutations: {
        EXECUTE(state, action) {
            if (state.lastExecution && state.lastExecution.id === action.id) {
                state.retries++
                    return
            }

            state.retries = 0
            state.lastExecution = action
            state.actions = []
        },

        DESTROY(state) {
            d(`destroy`)
            if (timerId) {
                clearTimeout(timerId)
                timerId = null
            }

            Object.assign('state', getDefaultState())

            document.removeEventListener('mouseout', mouseOut)
        },

        SET_LAST_EXECUTION(state, {
            id,
            result,
            thStart
        }) {
            const le = state.lastExecution
            if (!le) {
                return
            }

            if (!le.lastExecution || id) {
                d('create last execution')
                state.lastExecution.lastExecution = {}
            }

            if (id) {
                d('set last execution id = ' + id)
                state.lastExecution.lastExecution.id = id
            }

            if (result) {
                d('set last execution result = ' + result)
                state.lastExecution.lastExecution.result = result
            }

            if (thStart) {
                le.thStart = thStart
            }
        },

        SET_CONTACT_FORM(state, contactForm) {
            state.contactForm = contactForm
        },

        SET_TOOLTIP_TEXT(state, tooltipText) {
            state.tooltipText = tooltipText
        },

        INIT(state, {
            actions,
            secOnSite
        }) {
            if (!actions) {
                return
            }

            const now = thNow()
            const thOnSiteBack = secOnSite > 0 ? now - secOnSite : now

            state.actions = []

            actions.forEach((action) => {
                const newAction = {
                    id: action.id,
                    priority: action.priority ? action.priority : 0,
                    type: action.type,
                    userLeavesPage: !!action.user_leaves_page,
                    allowRetry: !!action.allow_retry
                }

                if (action.type === TYPE_CONTACT_FORM) {
                    newAction.contactForm = {
                        text: action.messages[0],
                        config: action.contact_form
                    }
                } else {
                    newAction.messages = action.messages
                }

                const ths = []

                if (!newAction.userLeavesPage && action.sec_on_page > 0) {
                    ths.push(now + action.sec_on_page)
                }

                if (action.sec_on_site > 0) {
                    ths.push(thOnSiteBack + action.sec_on_site)
                }

                if (newAction.allowRetry) {
                    newAction.secAfterClose = action.sec_after_close ? action.sec_after_close : 10 * 60

                    if (action.last_execution) {
                        const le = action.last_execution
                        newAction.lastExecution = {
                            id: le.id,
                            result: le.result
                        }

                        let thResult = now
                        if (le.sec_since_result > 0) {
                            thResult -= le.sec_since_result
                        }

                        switch (le.result) {
                            case RESULT_CLOSE:
                                ths.push(thResult + newAction.secAfterClose)
                                break
                            case RESULT_GO_TO_PAGE:
                                ths.push(thResult + (action.sec_after_go_to_page ? action.sec_after_go_to_page : 5 * 60))
                                break
                            default:
                                return
                        }
                    }
                }

                newAction.thStart = ths.length > 0 ? Math.max.apply(Math, ths) : now

                if (action.sec_to_deactivate > 0) {
                    newAction.thDeactivate = now + action.sec_to_deactivate

                    // время активности истечёт до выполнения всех условий
                    if (newAction.thDeactivate < newAction.thStart && !newAction.allowRetry) {
                        return
                    }
                }

                state.actions.push(newAction)
            })

            state.actions.sort((a1, a2) => {
                if (a1.priority > a2.priority) {
                    return -1
                } else if (a1.priority === a2.priority) {
                    if (a2.thStart > a1.thStart) {
                        return -1
                    }
                }

                return 0
            })
        }
    }
}

function thNow() {
    return Math.floor(+new Date() / 1000)
}

function createMessage({
    fromMe,
    content,
    status,
    type,
    virtual
}) {
    const uid = 'uid' + (+new Date()) + (Math.floor(Math.random() * (999 - 100) + 100))

    const msg = {
        id: uid,
        content: content,
        fromMe: fromMe || false,
        status: status || MESSAGES_BACKEND_STATUS.DELIVERED,
        type: type || MESSAGE_TYPES.TEXT,
        time: (new Date()).toISOString(),
        user: {}
    }

    if (virtual) {
        msg.virtual = true
    }

    return msg
}

export function initActionsModule(store, params) {
    vuex = store
    vuex.registerModule('actions', actionsModule)
    vuex.dispatch('actions/init', params)
}

export function destroyActionsModule() {
    if (!vuex) {
        return
    }

    vuex.commit('actions/DESTROY')
    vuex.unregisterModule('actions')
    vuex = null
}

/**
 * @return boolean
 */
export function actionsIsActive() {
    return !!vuex
}

export function getPageTitle() {
    const titles = document && document.getElementsByTagName('title')
    if (titles.length === 0) {
        return ''
    }

    return titles[0].innerText
}

export function getReferUrl() {
    return window && window.location && window.location.href || ''
}



// WEBPACK FOOTER //
// ./src/store/actions.js