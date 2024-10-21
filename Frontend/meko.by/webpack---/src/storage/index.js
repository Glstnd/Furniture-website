import keys from './keys'

const NAMESPACE_LS = 'RCC__'

const localStorage = (function() {
    let set = function(key, value) {
        window.localStorage.setItem(NAMESPACE_LS + key, JSON.stringify(value))
    }

    let get = function(key, defaultValue) {
        defaultValue = defaultValue !== undefined ? defaultValue : null
        let value = JSON.parse(window.localStorage.getItem(NAMESPACE_LS + key))

        return value !== null ? value : defaultValue
    }

    let remove = function(key) {
        window.localStorage.removeItem(NAMESPACE_LS + key)
    }

    try {
        set('test', true)
        get('test')
        remove('test')
    } catch (e) {
        console.error('Local storage is not supported')

        return {
            get: (key, defaultValue) => {
                return defaultValue
            },
            set: () => {},
            remove: () => {},
            keys
        }
    }

    return {
        get,
        set,
        remove,
        keys
    }
})()

export default localStorage



// WEBPACK FOOTER //
// ./src/storage/index.js