import 'es6-promise/auto'
import 'object-assign-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import LocalStorage from '../storage'
import EventBus from '../event/bus'
import * as M from './mutations'
import {
    ApiClient,
    EventClient
} from '../api'
import * as events from '../api/events'
import {
    MESSAGES_BACKEND_STATUS,
    MESSAGE_TYPES,
    BACKEND_API_BASE_URL,
    SHAPE,
    LOGO_TYPE,
    THEME,
    DISPLAY_MANAGER_TYPE,
    DISPLAY_TYPE,
    LINKS_MODE,
    CONTACT_FORM_DISPLAY
} from '../consts'
import ru from '../translations/ru'
import en from '../translations/en'
import es from '../translations/es'
import device from '../helpers/device'
import unionBy from 'lodash/unionBy'
import max from 'lodash/max'
import map from 'lodash/map'
import {
    initActionsModule,
    destroyActionsModule,
    actionsIsActive,
    getPageTitle,
    getReferUrl
} from './actions'
import {
    enableSoundAlerts,
    playSoundAlert
} from '../utils/sound_alerts'
import {
    initTabWatcher,
    onMessageRead
} from '../utils/tab_watcher'
import {
    getHSLColor,
    getChildColor
} from '../utils/color-converter'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const siteToken = debug ? process.env.SITE_TOKEN : window._rcct
let siteCustomer

if (window._rcco && window._rcco.customer) {
    siteCustomer = window._rcco.customer
}

if (debug && process.env.SITE_CUSTOMER_ID) {
    siteCustomer = siteCustomer || {}
    siteCustomer.customer_id = process.env.SITE_CUSTOMER_ID
}

if (debug && process.env.SITE_USER_ID) {
    siteCustomer = siteCustomer || {}
    siteCustomer.user_id = process.env.SITE_USER_ID
}

function bodyOverflow(set) {
    const disabledClassName = 'retailcrm-consultant-scroll-disabled'

    const cl = document.documentElement.classList
    if (set) {
        cl.add(disabledClassName)
    } else {
        cl.remove(disabledClassName)
    }
}

const linkTypePrefixes = {
    fbmessenger: {
        common: '//m.me/'
    },
    telegram: {
        common: '//t.me/'
    },
    whatsapp: {
        mobile: 'whatsapp://send?phone=',
        common: '//wa.me/'
    },
    viber: {
        common: 'viber://pa?chatURI=',
        mobile: 'viber://pa?chatURI='
    },
    fb: {
        common: '//fb.me/'
    },
    instagram: {
        common: '//instagram.com/'
    },
    vk: {
        common: '//vk.me/'
    }
}

// сколько времени с последнего сообщения менеджера показываем его в хедере
const managerShowTimeDiff = 60 * 30 * 1000 // 30 min

// структура для хранения данных об отложенной отправке о прочтении сообщения, чтобы не спамить сервер
const messageSeenSchedule = {
    timeout: null,
    messageID: null
}

const store = new Vuex.Store({
    state: {
        behaviour: {
            loading: true,
            opened: false,
            opensCount: 0,
            showMessengers: false,
            showEmoji: false,
            isOffline: false,
            formState: 'start',
            uploadDialog: {
                files: []
            },
            imagesPopup: {
                message: null,
                item: null
            }
        },
        config: {
            name: 'Online chat',
            position: 'right-bottom',
            hexMainColor: '005EEB',
            offset: {
                bottom: 20,
                side: 20
            },
            tooltipText: null,
            hideOnMobile: false,
            isMobile: false,
            isIE: false,
            isMac: false,
            displayingDelay: 0,
            introText: null,
            always_show_links_on_desktops: false,
            links: [],
            useOfflineMode: false,
            offlineText: null,
            offlineForm: {},
            offlineFormResultText: null,
            useContactForm: false,
            contactFormDisplay: CONTACT_FORM_DISPLAY.AFTER_FIRST_MESSAGE,
            contactFormText: null,
            contactForm: {},
            useUnreadCounter: true,
            inversionColor: false,
            rounded: true,
            logoType: LOGO_TYPE.STANDART,
            linksMode: LINKS_MODE.STANDARD,
            logoUrl: null,
            personalDataConsent: false,
            personalDataLink: null,
            displayType: DISPLAY_TYPE.CLOSE,
            displayManagerType: DISPLAY_MANAGER_TYPE.STANDART,
            managerName: null,
            managerLogo: null,
            theme: THEME.LIGHT,
            chatAutoOpenDelay: null,
            domainConfig: {
                logo: null,
                URL: null,
                free: false,
                imageWorkers: []
            },
            user: {
                token: null,
                siteCustomerId: siteCustomer && siteCustomer.customer_id ? siteCustomer.customer_id : null,
                siteUserId: siteCustomer && siteCustomer.user_id ? siteCustomer.user_id : null,
                name: siteCustomer && siteCustomer.name ? siteCustomer.name : null,
                email: siteCustomer && siteCustomer.email ? siteCustomer.email : null,
                phone: siteCustomer && siteCustomer.phone ? siteCustomer.phone : null,
                personalData: true
            },
            session: {
                id: null
            }
        },
        data: {
            messages: [],
            manager: null
        }
    },
    getters: {
        userColors: state => {
            const mainColor = getHSLColor(state.config.hexMainColor)
            const mainColorDark = getChildColor(mainColor, 5)
            const mainColorDarkest = getChildColor(mainColor, 10)
            const mainColorAlpha = getChildColor(mainColor, null, 0.12)

            return {
                mainColor,
                mainColorDark,
                mainColorDarkest,
                mainColorAlpha
            }
        },
        introMessage: state => {
            return {
                id: '_intro',
                content: state.config.introText,
                status: MESSAGES_BACKEND_STATUS.SEEN,
                fromMe: false,
                type: MESSAGE_TYPES.TEXT,
                time: null
            }
        },
        offlineMessage: state => {
            return {
                id: '_offline',
                content: state.config.offlineText ?
                    state.config.offlineText :
                    Vue.i18n.translate('offline.defaultText'),
                status: MESSAGES_BACKEND_STATUS.SEEN,
                fromMe: false,
                type: MESSAGE_TYPES.TEXT,
                time: null
            }
        },
        contactFormMessage: state => {
            let content = Vue.i18n.translate('contactForm.defaultText')

            if (actionsIsActive() && state.actions.contactForm && state.actions.contactForm.text) {
                content = state.actions.contactForm.text
            } else if (state.config.contactFormText) {
                content = state.config.contactFormText
            }

            return {
                id: '_contact_form',
                content: content,
                status: MESSAGES_BACKEND_STATUS.SEEN,
                fromMe: false,
                type: MESSAGE_TYPES.TEXT,
                time: null
            }
        },
        linkUrl: (state) => (link) => {
            if (linkTypePrefixes[link.type] === undefined) {
                console.error(`Undefined link type ${link.type}`)
                return {
                    mobile: false,
                    url: '#'
                }
            }

            if (state.config.isMobile && linkTypePrefixes[link.type].mobile !== undefined) {
                return {
                    mobile: true,
                    url: linkTypePrefixes[link.type].mobile + link.url
                }
            }

            let prefix
            if (link.prefix && link.prefix !== '') {
                prefix = '//' + link.prefix
            }

            return {
                mobile: false,
                url: (prefix || linkTypePrefixes[link.type].common) + link.url
            }
        },
        contactFormConfig: (state) => {
            if (actionsIsActive() && state.actions.contactForm) {
                return state.actions.contactForm.config
            }

            if (state.config.useContactForm) {
                return state.config.contactForm
            }

            return null
        },
        needContactForm: (state, getters) => {
            const formOptions = getters.contactFormConfig
            if (!formOptions) {
                return false
            }

            return !fullRequiredFilled(state.config.user, formOptions)
        },
        offlineModeResultText: state => {
            return state.config.offlineFormResultText || Vue.i18n.translate('offline.defaultFormResultText')
        },
        isShowMobileChat(state) {
            if (!state.config.isMobile || device.isExtraSmall()) {
                return false
            }

            return true
        },
        maxUpdatedAt: state => {
            let maxUpdatedAt = null

            let i = 0
            for (let msg of state.data.messages) {
                if (!maxUpdatedAt || new Date(msg.updatedAt) > new Date(state.data.messages[maxUpdatedAt].updatedAt)) {
                    maxUpdatedAt = i
                }
                i++
            }

            return state.data.messages[maxUpdatedAt] && state.data.messages[maxUpdatedAt].updatedAt
        },
        tooltipText: state => {
            if (actionsIsActive() && state.actions.tooltipText) {
                return state.actions.tooltipText
            }

            return state.config.tooltipText
        },
        countUnreadMessages: state => {
            return state.data.messages.filter((m) => !m.fromMe && m.status !== 'seen').length
        },
        useUnreadCounter: state => {
            return state.config.useUnreadCounter
        },
        imageWorkers: state => {
            return state.config.domainConfig.imageWorkers
        },
        manager: state => {
            if (state.config.displayManagerType === DISPLAY_MANAGER_TYPE.CUSTOM) {
                return {
                    avatar: state.config.managerLogo || ((state.data || {}).manager || {}).avatar || '',
                    first_name: state.config.managerName
                }
            }

            if (!state.data.manager) {
                return null
            }

            return { ...state.data.manager
            }
        }
    },
    mutations: {
        [M.CHANGE_VISIBILITY](state) {
            const opened = !state.behaviour.opened
            state.behaviour.opened = opened
            if (opened) {
                ++state.behaviour.opensCount
            }

            state.behaviour.showMessengers = false
            state.behaviour.showEmoji = false
            if (state.config.isMobile) {
                bodyOverflow(opened)
            }
        },
        [M.TOGGLE_MESSENGERS](state) {
            state.behaviour.showMessengers = !state.behaviour.showMessengers
        },
        [M.TOGGLE_EMOJI](state) {
            state.behaviour.showEmoji = !state.behaviour.showEmoji
        },
        [M.INIT_DEVICE](state) {
            state.config.isMobile = device.isMobile()
            state.config.isIE = device.isIE()
            state.config.isMac = device.isMac()
            state.config.isWin = device.isWin()
        },
        [M.INIT_SESSION](state, data) {
            state.config.name = data.config.name

            if (data.config.position === 'right-bottom' || data.config.position === 'left-bottom') {
                state.config.position = data.config.position
            }
            if (Object.values(THEME).includes(data.config.bg_color)) {
                state.config.theme = data.config.bg_color
            }

            if (data.config.elements_color) {
                state.config.hexMainColor = data.config.elements_color
            }

            if (data.config.offset) {
                state.config.offset = data.config.offset
            }
            if (data.config.tooltip_text) {
                state.config.tooltipText = data.config.tooltip_text
            }
            state.config.hideOnMobile = data.config.hide_on_mobile
            if (data.config.displaying_delay) {
                state.config.displayingDelay = data.config.displaying_delay
            }
            if (data.config.intro_text) {
                state.config.introText = data.config.intro_text
            }
            state.config.always_show_links_on_desktops = data.config.always_show_links_on_desktops
            if (data.config.links.length) {
                state.config.links = data.config.links
            }

            state.config.useOfflineMode = data.config.use_offline_mode
            if (data.config.offline_text) {
                state.config.offlineText = data.config.offline_text
            }
            if (data.config.offline_form) {
                state.config.offlineForm = data.config.offline_form
            }
            if (data.config.offline_form_result_text) {
                state.config.offlineFormResultText = data.config.offline_form_result_text
            }
            state.behaviour.isOffline = data.behaviour.is_offline
            state.config.session.id = data.session.id

            state.config.useContactForm = data.config.use_contact_form
            if (data.config.contact_form_text) {
                state.config.contactFormText = data.config.contact_form_text
            }
            if (data.config.contact_form_display) {
                state.config.contactFormDisplay = data.config.contact_form_display
            }
            if (data.config.contact_form) {
                state.config.contactForm = data.config.contact_form
            }
            if (data.config.use_unread_counter === false) {
                state.config.useUnreadCounter = false
            }

            if (data.config.inverse !== undefined) {
                state.config.inversionColor = data.config.inverse
            }

            if (data.config.element_shape !== undefined) {
                state.config.rounded = data.config.element_shape === SHAPE.ROUNDED
            }

            if (data.config.logo_type !== undefined) {
                state.config.logoType = data.config.logo_type
            }

            if (data.config.logo_type !== undefined) {
                state.config.logoType = data.config.logo_type
            }

            if (data.config.logo_url) {
                state.config.logoUrl = data.config.logo_url
            }

            if (data.config.links_mode !== undefined) {
                state.config.linksMode = data.config.links_mode
            }

            if (data.config.manager_display_type !== undefined) {
                state.config.displayManagerType = data.config.manager_display_type
            }

            if (data.config.manager_logo) {
                state.config.managerLogo = data.config.manager_logo
            }

            if (data.config.manager_name) {
                state.config.managerName = data.config.manager_name
            }

            if (Object.values(DISPLAY_TYPE).includes(data.config.display_type)) {
                state.behaviour.opened = data.config.display_type === DISPLAY_TYPE.OPEN
                state.config.displayType = data.config.display_type
            }

            if (data.config.chat_auto_open_delay) {
                state.config.chatAutoOpenDelay = data.config.chat_auto_open_delay
            }

            state.config.personalDataConsent = data.config.personal_data_consent

            if (data.config.personal_data_consent) {
                state.config.personalDataLink = data.config.personal_data_link || null
            }
        },
        [M.SHOW_CHAT](state) {
            state.behaviour.loading = false
        },
        [M.CHANGE_CONTACT_FORM_STATE](state, formState) {
            state.behaviour.formState = formState
        },
        [M.LOAD_MESSAGES](state, rawMessages) {
            rawMessages = rawMessages || []

            let localMessages = LocalStorage.get(LocalStorage.keys.MESSAGES, [])
            let apiMessages = []

            for (let msg of localMessages) {
                if (!msg.updatedAt) {
                    msg.updatedAt = msg.time
                }
            }

            for (let msg of rawMessages) {
                apiMessages.push({
                    id: msg.id,
                    content: msg.content,
                    product: msg.product,
                    order: msg.order,
                    fileItems: msg.items,
                    type: msg.type,
                    fromMe: msg.from_me,
                    quote_content: msg.quote_content,
                    status: msg.status,
                    time: msg.time,
                    updatedAt: msg.updated_at,
                    user: msg.user,
                    attachments: msg.attachments || null
                })
            }

            state.data.messages = unionBy(apiMessages, localMessages, 'id')
                .sort((a, b) => {
                    return new Date(a.time) - new Date(b.time)
                })

            LocalStorage.set(LocalStorage.keys.MESSAGES, convertMessagesForSave(state.data.messages))

            // устанавливаем менеджера в заголовке, если он недавно отвечал

            const now = new Date()

            for (let i = state.data.messages.length - 1; i >= 0; i--) {
                const m = state.data.messages[i]
                if (m.fromMe || m.user === undefined) {
                    continue
                }

                const time = new Date(m.time)
                if (now.getTime() - time.getTime() <= managerShowTimeDiff) {
                    state.data.manager = m.user
                    break
                }
            }

            if (!state.config.isMobile) {
                const localIds = map(localMessages, (x) => parseInt(x.id))
                const apiIds = map(apiMessages, (x) => parseInt(x.id))

                if (max(apiIds) > max(localIds)) {
                    Vue.nextTick(function() {
                        EventClient.connect()

                        state.behaviour.opened = true
                        state.behaviour.showMessengers = false
                        state.behaviour.showEmoji = false

                        Vue.nextTick(function() {
                            EventBus.$emit('list-scroll')
                        })
                    })
                }
            }
        },
        [M.SET_MESSAGE](state, message) {
            let index = null
            for (let idx in state.data.messages) {
                if (state.data.messages[idx].id === message.id) {
                    index = idx
                    break
                }
            }
            if (index) {
                Vue.set(state.data.messages, index, message)
            } else {
                state.data.messages.push(message)
                if (!message.fromMe && message.fromWS) {
                    playSoundAlert()
                }
            }

            Vue.nextTick(function() {
                EventBus.$emit('list-scroll')
            })

            if (message.virtual) {
                return
            }

            LocalStorage.set(LocalStorage.keys.MESSAGES, convertMessagesForSave(state.data.messages))
        },
        [M.DELETE_MESSAGE](state, id) {
            let index = null
            for (let idx in state.data.messages) {
                if (state.data.messages[idx].id === id) {
                    index = idx
                    break
                }
            }

            if (!index) {
                console.warn(`Not found message with id=${id}`)
                return
            }

            state.data.messages.splice(index, 1)
            LocalStorage.set(LocalStorage.keys.MESSAGES, convertMessagesForSave(state.data.messages))
        },
        [M.UPDATE_MESSAGE](state, payload) {
            let index = null
            for (let idx in state.data.messages) {
                if (state.data.messages[idx].id === payload.id) {
                    index = idx
                    break
                }
            }

            if (!index) {
                console.warn(`Not found message with id=${payload.id}`)
                return
            }

            if (payload.data.id) {
                Vue.set(state.data.messages[index], 'id', payload.data.id)
            }
            if (payload.data.status) {
                // помечаем прочитанными сообщения выше
                if (payload.data.status === MESSAGES_BACKEND_STATUS.SEEN && !state.data.messages[index].fromMe) {
                    for (let i in state.data.messages) {
                        const msg = state.data.messages[i]
                        if (!msg.fromMe && msg.status !== MESSAGES_BACKEND_STATUS.SEEN && msg.id < payload.id) {
                            Vue.set(state.data.messages[i], 'status', MESSAGES_BACKEND_STATUS.SEEN)
                        }
                    }

                    if (!payload.doNotRunOnMessageRead) {
                        onMessageRead(payload.id)
                    }
                }

                Vue.set(state.data.messages[index], 'status', payload.data.status)
            }
            if (payload.data.time) {
                Vue.set(state.data.messages[index], 'time', payload.data.time)
            }
            if (payload.data.content) {
                Vue.set(state.data.messages[index], 'content', payload.data.content)
            }

            LocalStorage.set(LocalStorage.keys.MESSAGES, convertMessagesForSave(state.data.messages))
        },

        [M.SET_MESSAGE_READ](state, messageID) {
            for (let index in state.data.messages) {
                const message = state.data.messages[index]
                if (parseInt(message.id) <= parseInt(messageID) && message.status === MESSAGES_BACKEND_STATUS.SENT) {
                    Vue.set(state.data.messages[index], 'status', MESSAGES_BACKEND_STATUS.SEEN)
                }
            }

            LocalStorage.set(LocalStorage.keys.MESSAGES, convertMessagesForSave(state.data.messages))
        },

        [M.UPDATE_FILE](state, payload) {
            let messageIndex = null
            let fileIndex = null

            for (let mI in state.data.messages) {
                const message = state.data.messages[mI]
                if (!message.fileItems || message.fileItems.length === 0) {
                    continue
                }

                for (let fI in message.fileItems) {
                    if (message.fileItems[fI].id === payload.fileId) {
                        messageIndex = mI
                        fileIndex = fI

                        if (payload.data.id !== undefined) {
                            Vue.set(state.data.messages[messageIndex].fileItems[fileIndex], 'id', payload.data.id)
                        }
                        if (payload.data.url !== undefined) {
                            Vue.set(state.data.messages[messageIndex].fileItems[fileIndex], 'url', payload.data.url)
                        }
                        if (payload.data.uploading !== undefined) {
                            Vue.set(state.data.messages[messageIndex].fileItems[fileIndex], 'uploading', payload.data.uploading)
                        }
                    }
                }
            }

            if (!fileIndex) {
                console.warn(`Not found file with id=${payload.fileId}`)
                return
            }

            LocalStorage.set(LocalStorage.keys.MESSAGES, convertMessagesForSave(state.data.messages))
        },
        [M.SET_MANAGER](state, payload) {
            state.data.manager = payload
        },
        [M.SET_USER](state, data) {
            if (data.token) {
                state.config.user.token = data.token
                LocalStorage.set(LocalStorage.keys.USER_TOKEN, data.token)
            }

            if (data.name) {
                state.config.user.name = data.name
            }

            if (data.email) {
                state.config.user.email = data.email
            }

            if (data.phone) {
                state.config.user.phone = data.phone
            }
        },
        [M.VIEW_IMAGE](state, {
            message,
            item
        }) {
            const ip = state.behaviour.imagesPopup
            ip.message = message
            ip.item = item
        },
        [M.CLOSE_IMAGE_VIEW](state) {
            const ip = state.behaviour.imagesPopup
            ip.message = null
            ip.item = null
        },
        [M.ADD_FILES](state, files) {
            const uploadDialog = state.behaviour.uploadDialog

            for (const file of files) {
                if (uploadDialog.files.length >= 10) {
                    console.error('It is allowed to upload no more than 10 files at a time')
                    return
                }

                let type = MESSAGE_TYPES.FILE
                if (file && file.type && file.type.indexOf('image/') === 0) {
                    type = MESSAGE_TYPES.IMAGE
                }

                if (type === MESSAGE_TYPES.IMAGE && file.size > 3 * 1024 * 1024) {
                    console.error('Image "' + file.name + '" should not exceed 3 mb')
                    continue
                }

                if (type === MESSAGE_TYPES.FILE && file.size > 5 * 1024 * 1024) {
                    console.error('File "' + file.name + '" should not exceed 5 mb')
                    continue
                }

                uploadDialog.files.push({
                    type: type,
                    url: URL.createObjectURL(file),
                    file: file
                })
            }
        },
        [M.REMOVE_FILE](state, file) {
            const uploadDialog = state.behaviour.uploadDialog

            const index = uploadDialog.files.indexOf(file)
            if (index === -1) {
                return
            }

            uploadDialog.files.splice(index, 1)
            file.file = null
            URL.revokeObjectURL(file.url)
        },
        [M.CLEAR_FILES](state) {
            const uploadDialog = state.behaviour.uploadDialog

            for (const f of uploadDialog.files) {
                URL.revokeObjectURL(f.url)
            }
            uploadDialog.files = []
        },
        [M.DISABLE_CONTACT_FORM](state) {
            state.config.useContactForm = false
        },
        [M.SET_DOMAIN_CONFIG](state, domainConfig) {
            state.config.domainConfig.logo = domainConfig.logo
            state.config.domainConfig.URL = domainConfig.URL
            state.config.domainConfig.free = domainConfig.free
            state.config.domainConfig.imageWorkers = domainConfig.image_workers
        },
        [M.SET_OFFLINE_STATUS](state, isOffline) {
            state.behaviour.isOffline = isOffline
        }
    },
    actions: {
        init(context) {
            if (!BACKEND_API_BASE_URL || !siteToken) {
                return
            }

            const config = context.state.config

            context.commit(M.INIT_DEVICE)

            ApiClient.init(BACKEND_API_BASE_URL, siteToken)
            if (config.user.siteCustomerId) {
                ApiClient.api().setMeta({
                    siteCustomerId: config.user.siteCustomerId,
                    siteUserId: config.user.siteUserId
                })
            }

            const request = {
                refer_url: getReferUrl(),
                page_title: getPageTitle(),
                user: {
                    token: LocalStorage.get(LocalStorage.keys.USER_TOKEN),
                    language: Vue.i18n.locale()
                }
            }

            ApiClient.api().connect(request)
                .then(resp => {
                    if (config.isMobile) {
                        if (
                            resp.config.hide_on_mobile ||
                            (!resp.config.links.length && !context.getters.isShowMobileChat)
                        ) {
                            return
                        }
                    }

                    context.commit(M.SET_DOMAIN_CONFIG, resp.config.domain_config)

                    context.commit(M.INIT_SESSION, resp)
                    context.commit(M.SET_USER, resp.user)
                    context.commit(M.LOAD_MESSAGES, resp.messages)

                    initTabWatcher(siteToken)

                    if (resp.config.use_sound_alerts) {
                        enableSoundAlerts()
                    }

                    ApiClient.api().setMeta({
                        userToken: resp.user.token,
                        sessionId: resp.session.id
                    })

                    const runBeforeShowChat = []
                    if (resp.actions) {
                        runBeforeShowChat.push(() => {
                            initActionsModule(this, {
                                actions: resp.actions,
                                secOnSite: resp.sec_on_site
                            })
                        })
                    }

                    EventClient.setConnectionParams(BACKEND_API_BASE_URL, resp.user.token, resp.session.id)

                    if (!config.isMobile && resp.messages && resp.messages.length > 0) {
                        EventClient.connect()
                    }

                    if (config.displayType === DISPLAY_TYPE.DISPLAYING_DELAY && config.chatAutoOpenDelay) {
                        runBeforeShowChat.push(() => {
                            setTimeout(() => {
                                if (!context.state.behaviour.opened) {
                                    context.commit(M.CHANGE_VISIBILITY)
                                }
                            }, config.chatAutoOpenDelay * 1000)
                        })
                    }

                    const showChat = () => {
                        context.commit(M.SHOW_CHAT)
                        runBeforeShowChat.forEach((f) => f())
                    }

                    if (config.displayingDelay && !context.state.data.messages.length) {
                        setTimeout(() => {
                            showChat()
                        }, config.displayingDelay * 1000)
                    } else {
                        showChat()
                    }
                })
                .catch(err => {
                    console.error(err)
                })
        },
        showChat(context) {
            if (context.state.behaviour.opened) {
                return
            }

            this.dispatch('changeVisibility')
        },
        changeVisibility({
            state,
            commit
        }) {
            commit(M.CHANGE_VISIBILITY)
            if (state.behaviour.opened) {
                if (actionsIsActive() && !state.actions.lastExecution) {
                    destroyActionsModule()
                }

                if (state.behaviour.opensCount <= 1) {
                    Vue.nextTick(function() {
                        EventBus.$emit('list-scroll')
                    })
                }
                if (!state.behaviour.isOffline) {
                    EventClient.connect()
                }
            } else {
                if (actionsIsActive()) {
                    this.dispatch('actions/onChatClose')
                }
            }
        },
        sendOfflineForm({
            commit
        }, data) {
            commit(M.CHANGE_CONTACT_FORM_STATE, 'sending')
            ApiClient.api().sendOfflineForm(data)
                .then(resp => {
                    commit(M.CHANGE_CONTACT_FORM_STATE, 'sent')
                    commit(M.SET_USER, data)
                })
                .catch(err => {
                    commit(M.CHANGE_CONTACT_FORM_STATE, 'sent-error')
                    console.error(err)
                })
        },
        sendContactForm({
            state,
            commit
        }, data) {
            commit(M.CHANGE_CONTACT_FORM_STATE, 'sending')

            let actionID = null
            if (actionsIsActive() && state.actions.contactForm && state.actions.lastExecution) {
                actionID = state.actions.lastExecution.id
                destroyActionsModule()
            }

            ApiClient.api().sendContactForm(data, actionID)
                .then(resp => {
                    commit(M.CHANGE_CONTACT_FORM_STATE, 'sent')
                    commit(M.SET_USER, data)
                })
                .catch(err => {
                    commit(M.CHANGE_CONTACT_FORM_STATE, 'sent-error')
                    console.error(err)
                })
        },
        async sendMessage({
            commit,
            state
        }, data) {
            await this.dispatch('sendVirtualMessages')
            destroyActionsModule()

            const msg = {
                id: 'uid' + (+new Date()),
                content: data.content,
                fromMe: true,
                status: MESSAGES_BACKEND_STATUS.SENDING,
                type: MESSAGE_TYPES.TEXT,
                time: (new Date()).toISOString()
            }
            commit(M.SET_MESSAGE, msg)

            sendMessageToBack({
                    message: {
                        type: msg.type,
                        text: msg.content
                    }
                })
                .then(resp => {
                    commit(M.UPDATE_MESSAGE, {
                        id: msg.id,
                        data: {
                            id: resp.message.id,
                            time: resp.message.time,
                            updatedAt: resp.message.time,
                            status: resp.message.status
                        }
                    })
                })
                .catch(err => {
                    commit(M.UPDATE_MESSAGE, {
                        id: msg.id,
                        data: {
                            status: MESSAGES_BACKEND_STATUS.FAILED
                        }
                    })
                    console.error(err)
                })
        },
        async sendFiles({
            commit,
            state
        }) {
            await this.dispatch('sendVirtualMessages')
            destroyActionsModule()

            if (!state.behaviour.uploadDialog.files) {
                return
            }

            const uploadDialog = state.behaviour.uploadDialog
            const filesToUpload = uploadDialog.files
            commit(M.CLEAR_FILES)

            const now = new Date()
            const messages = {}
            for (const type of [MESSAGE_TYPES.IMAGE, MESSAGE_TYPES.FILE]) {
                messages[type] = {
                    id: 'uid-' + type + '-' + (+now),
                    fromMe: true,
                    status: MESSAGES_BACKEND_STATUS.SENDING,
                    type: type,
                    time: now.toISOString(),
                    fileItems: []
                }
            }

            filesToUpload.forEach(function(fileItem) {
                const message = messages[fileItem.type]
                const messageFile = {
                    id: 'uid-file-' + fileItem.file.name + '-' + (+now),
                    caption: fileItem.file.name,
                    size: fileItem.file.size,
                    url: URL.createObjectURL(fileItem.file),
                    uploading: true
                }
                message.fileItems.push(messageFile)

                const progress = function(e) {
                    messageFile.progress = e.position / e.totalSize
                }

                ApiClient.api().sendFile(fileItem.file, progress)
                    .then(resp => {
                        URL.revokeObjectURL(messageFile.url)
                        commit(M.UPDATE_FILE, {
                            fileId: messageFile.id,
                            data: {
                                id: resp.id,
                                url: null,
                                uploading: false
                            }
                        })

                        if (message.fileItems.filter(f => f.uploading === true).length === 0) {
                            sendMessageToBack({
                                    message: {
                                        type: message.type,
                                        items: message.fileItems.map(function(f) {
                                            return {
                                                id: f.id,
                                                caption: f.caption
                                            }
                                        })
                                    }
                                })
                                .then(resp => {
                                    commit(M.UPDATE_MESSAGE, {
                                        id: message.id,
                                        data: {
                                            id: resp.message.id,
                                            time: resp.message.time,
                                            status: MESSAGES_BACKEND_STATUS.DELIVERED
                                        }
                                    })
                                })
                                .catch(err => {
                                    commit(M.UPDATE_MESSAGE, {
                                        id: message.id,
                                        data: {
                                            status: MESSAGES_BACKEND_STATUS.FAILED
                                        }
                                    })
                                    console.error(err)
                                })
                        }
                    })
                    .catch(err => {
                        console.error(err)
                        commit(M.UPDATE_FILE, {
                            fileId: messageFile.id,
                            data: {
                                uploading: false
                            }
                        })

                        if (message.fileItems.length === 1) {
                            commit(M.UPDATE_MESSAGE, {
                                id: message.id,
                                data: {
                                    status: MESSAGES_BACKEND_STATUS.FAILED
                                }
                            })
                            return
                        }

                        message.fileItems.splice(messageFile.index)
                        commit(M.SET_MESSAGE, {
                            id: 'uid-' + message.type + '-' + messageFile.caption + '-' + (+now),
                            fromMe: true,
                            status: MESSAGES_BACKEND_STATUS.FAILED,
                            type: message.type,
                            time: now.toISOString(),
                            fileItems: [messageFile]
                        })
                    })
            })

            for (const type in messages) {
                if (messages[type].fileItems.length > 0) {
                    commit(M.SET_MESSAGE, messages[type])
                }
            }
        },
        sendVirtualMessages({
            state,
            commit
        }) {
            const send = (messagesList, resolve) => {
                const msg = messagesList.shift()

                const data = {
                    message: {
                        type: msg.type,
                        text: msg.content,
                        not_from_me: true
                    }
                }
                if (actionsIsActive()) {
                    const le = state.actions.lastExecution && state.actions.lastExecution.lastExecution || null
                    if (le && le.id && le.result !== 'answer') {
                        commit('actions/SET_LAST_EXECUTION', {
                            result: 'answer'
                        })
                        data.last_action_execution_id = le.id
                    }
                }

                sendMessageToBack(data)
                    .then(resp => {
                        commit(M.UPDATE_MESSAGE, {
                            id: msg.id,
                            data: {
                                id: resp.message.id,
                                time: resp.message.time,
                                updatedAt: resp.message.time,
                                status: resp.message.status,
                                virtual: !msg.virtual
                            }
                        })
                    })
                    .catch(err => {
                        commit(M.UPDATE_MESSAGE, {
                            id: msg.id,
                            data: {
                                status: MESSAGES_BACKEND_STATUS.FAILED,
                                virtual: !msg.virtual
                            }
                        })
                        console.error(err)
                    })
                    .finally(() => {
                        if (messagesList.length > 0) {
                            send(messagesList, resolve)
                        } else {
                            resolve()
                        }
                    })
            }

            const messages = []
            for (let i = state.data.messages.length - 1; i >= 0; i--) {
                const msg = state.data.messages[i]
                if (!msg.virtual) {
                    break
                }

                messages.push(msg)
            }

            if (messages.length === 0) {
                return Promise.resolve()
            }

            messages.reverse()
            return new Promise(resolve => {
                send(messages, resolve)
            })
        },
        scheduleSetMessageSeen({
            commit
        }, messageID) {
            if (isNaN(messageID) || messageID <= messageSeenSchedule.messageID) {
                return
            }

            commit(M.UPDATE_MESSAGE, {
                id: messageID,
                data: {
                    status: MESSAGES_BACKEND_STATUS.SEEN
                }
            })

            clearTimeout(messageSeenSchedule.timeout)
            messageSeenSchedule.messageID = messageID
            messageSeenSchedule.timeout = setTimeout(function() {
                const messageID = messageSeenSchedule.messageID
                messageSeenSchedule.messageID = null
                messageSeenSchedule.timeout = null

                ApiClient.api().readMessage(messageID)
                    .catch(err => {
                        console.error(err)
                    })
            }, 500)
        },
        [`ws_${events.MESSAGE}`](context, data) {
            if (data.status === 'deleted') {
                context.commit(M.DELETE_MESSAGE, data.id)
                return
            }

            let message = {
                id: data.id,
                fromMe: data.from_me || false,
                type: data.type || MESSAGE_TYPES.TEXT,
                time: data.time,
                product: data.product || null,
                order: data.order || null,
                status: data.status,
                updatedAt: data.updated_at,
                attachments: data.attachments || null
            }

            if (message.product) {
                message.type = MESSAGE_TYPES.PRODUCT
            } else if (message.order) {
                message.type = MESSAGE_TYPES.ORDER
            }

            if (data.content) {
                message.content = data.content
            }

            if (data.quote_content) {
                message.quote = {
                    content: data.quote_content
                }
            }

            if (data.items) {
                message.fileItems = data.items.map(function(item) {
                    return {
                        id: item.id,
                        caption: item.caption,
                        size: item.size,
                        height: item.height || null,
                        width: item.width || null,
                        url: null
                    }
                })
            }

            // если чатик был закрыт и пришло сообщение от менеджера,
            // открываем чатик
            if (!context.state.behaviour.opened) {
                context.commit(M.CHANGE_VISIBILITY)
            }

            if (data.user) {
                message.user = {
                    first_name: data.user.first_name,
                    last_name: data.user.last_name,
                    avatar: data.user.avatar
                }

                context.commit(M.SET_MANAGER, message.user)
            }

            context.commit(M.SET_MESSAGE, { ...message,
                fromWS: true
            })
        },
        [`ws_${events.OFFLINE_STATUS}`](context, data) {
            context.commit(M.SET_OFFLINE_STATUS, data.is_offline)
        }
    },
    strict: debug
})

function convertMessagesForSave(messages) {
    const messagesToSave = []
    for (const message of messages) {
        if (message.status === MESSAGES_BACKEND_STATUS.FAILED) {
            continue
        }

        const m = {
            id: message.id,
            type: message.type,
            time: message.time,
            updatedAt: message.updatedAt,
            fromMe: message.fromMe,
            status: message.status,
            product: message.product || null,
            order: message.order || null,
            attachments: message.attachments || null
        }

        if (message.content) {
            m.content = message.content
        }

        if (message.quote) {
            m.quote = message.quote
        }

        if (message.user) {
            m.user = message.user
        }

        if (message.fileItems && message.fileItems.length > 0) {
            m.fileItems = []
            for (const fileItem of message.fileItems) {
                const f = {
                    id: fileItem.id,
                    caption: fileItem.caption,
                    size: fileItem.size,
                    height: fileItem.height || null,
                    width: fileItem.width || null
                }

                if (fileItem.url && fileItem.url.indexOf('blob:') === -1) {
                    f.url = fileItem.url
                }
                m.fileItems.push(f)
            }
        }

        messagesToSave.push(m)
    }

    return messagesToSave.slice(-10)
}

let lang = 'en'
if (navigator.language) {
    lang = navigator.language.substring(0, 2)
} else if (navigator.userLanguage) {
    lang = navigator.userLanguage.substring(0, 2)
}

Vue.use(vuexI18n.plugin, store, {
    moduleName: 'i18n',
    onTranslationNotFound(locale, key) {
        if (debug) {
            console.warn(`i18n :: Key '${key}' not found for locale '${locale}'`)
        }
    }
})
Vue.i18n.add('en', en)
Vue.i18n.add('ru', ru)
Vue.i18n.add('es', es)
Vue.i18n.set(lang)
Vue.i18n.fallback('en')

function sendMessageToBack(data) {
    const storeUser = store.state.config.user
    for (const prop of ['name', 'email', 'phone']) {
        if (!storeUser[prop]) {
            continue
        }

        if (!data.user) {
            data.user = {}
        }

        data.user[prop] = storeUser[prop]
    }

    return ApiClient.api().sendMessage(data)
}

export default store

export function fullRequiredFilled(user, formOptions) {
    for (let field in formOptions) {
        if (!formOptions[field].required) {
            continue
        }

        if (!user[field]) {
            return false
        }
    }

    return true
}



// WEBPACK FOOTER //
// ./src/store/index.js