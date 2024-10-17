const basePathPropertyName = '____consultantBasePath'

if (basePathPropertyName in window) {
    const basePath = window[basePathPropertyName]
    delete window[basePathPropertyName]

    if (basePath) {
        // eslint-disable-next-line camelcase,no-undef
        __webpack_public_path__ = basePath
    }
}

function init() {
    /**
     * Фикс для autoinstall плагина vue-observe-visibility
     */
    if (window.Vue && window.Vue.use === undefined) {
        window.Vue.use = () => {}
    }

    require('./app')
}

/*
 например если body ещё нет в DOM то будет ошибка,
 подождем пока загрузится весь дом и тогда проинициализируемся
 */
if (document.readyState === 'loading' && document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}



// WEBPACK FOOTER //
// ./src/main.js