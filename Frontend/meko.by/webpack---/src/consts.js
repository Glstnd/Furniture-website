let backEndHost = process.env.BACKEND
if (!backEndHost || backEndHost.length === 0) {
    backEndHost = (function() {
        const findScriptTagByFilename = function(name) {
            const scripts = document.getElementsByTagName('script')

            for (let i = 0; i < scripts.length; ++i) {
                if (scripts[i].src.indexOf(name) !== -1) {
                    try {
                        return new URL(scripts[i].src)
                    } catch (err) {
                        return new URL(location.protocol + scripts[i].src)
                    }
                }
            }

            return null
        }

        const src = findScriptTagByFilename('/widget/loader.js')

        if (!src) {
            return null
        }

        return src.protocol + '//' + src.host
    })()
}

export const DOWNLOAD_URL = backEndHost + '/download'
export const BACKEND_API_BASE_URL = backEndHost + '/api/client/v1/'

export const MESSAGE_STATUSES = {
    SENDING: 'sending',
    DELIVERED: 'delivered',
    READ: 'seen',
    ERROR: 'failed'
}

export const MESSAGES_BACKEND_STATUS = {
    NEW: 'undefined',
    SENDING: 'sending',
    SENT: 'sent',
    DELIVERED: 'delivered',
    RECEIVED: 'received',
    SEEN: 'seen',
    FAILED: 'failed'
}

export const MESSAGE_STATUS_MAP = {
    'undefined': MESSAGE_STATUSES.SENDING,
    'sending': MESSAGE_STATUSES.SENDING,
    'sent': MESSAGE_STATUSES.DELIVERED,
    'delivered': MESSAGE_STATUSES.DELIVERED,
    'received': MESSAGE_STATUSES.DELIVERED,
    'seen': MESSAGE_STATUSES.READ,
    'failed': MESSAGE_STATUSES.ERROR
}

export const MESSAGE_TYPES = {
    TEXT: 'text',
    FILE: 'file',
    IMAGE: 'image',
    PRODUCT: 'product',
    ORDER: 'order'
}

// Внешний вид
export const SHAPE = {
    ROUNDED: 'rounded',
    RECTANGULAR: 'rectangular form'
}

export const LOGO_TYPE = {
    STANDART: 'standard',
    CUSTOM: 'custom'
}

export const DISPLAY_MANAGER_TYPE = {
    STANDART: 'standard',
    CUSTOM: 'custom'
}

export const DISPLAY_TYPE = {
    CLOSE: 'close',
    OPEN: 'open',
    DISPLAYING_DELAY: 'displaying_delay'
}

export const THEME = {
    LIGHT: 'light',
    DARK: 'dark'
}

export const LINKS_MODE = {
    STANDARD: 'standard'
}

export const CONTACT_FORM_DISPLAY = {
    AT_BEGINNING_DIALOGUE: 'at_beginning_dialogue',
    AFTER_FIRST_MESSAGE: 'after_first_message'
}



// WEBPACK FOOTER //
// ./src/consts.js