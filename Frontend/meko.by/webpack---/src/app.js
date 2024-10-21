import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import App from './components/App'
import store from './store'
import urls from '@message-gateway/consultant-ui-kit/src/filters/urls'
import strings from './filters/strings'
import dates from './filters/dates'
import {
    makePreviewUrl
} from './utils/image_previews'
import html from './filters/html'
import ConsultantUiKit from '@message-gateway/consultant-ui-kit'
import '@message-gateway/consultant-ui-kit/dist/consultant-ui-kit.esm.css'

Vue.config.productionTip = false

Vue.use(ConsultantUiKit, {
    i18n: {
        locale: navigator.language || 'en_GB'
    },
    previewUrl: makePreviewUrl
})
Vue.use(VueObserveVisibility)

Vue.filter('trim', strings.trim)
Vue.filter('parseLink', urls.replace)
Vue.filter('time', dates.time)
Vue.filter('calendarDay', dates.calendarDay(Vue.i18n))
Vue.filter('dateTime', dates.dateTime(Vue.i18n))
Vue.filter('purify', html.purify)

Vue.mixin({
    methods: {
        $formatFileSize(size) {
            const sizes = ['B', 'KB', 'MB', 'GB']
            if (size === 0) {
                return '0 B'
            }
            const i = Math.floor(Math.log(size) / Math.log(1024))
            return Math.round(size / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
        }
    }
})

let d = document.createElement('div')
d.setAttribute('id', 'retailcrm-consultant-app')
document.body.appendChild(d)

/* eslint-disable no-new */
new Vue({
    el: d,
    store,
    components: {
        App
    },
    template: '<App/>',
    created() {
        this.$store.dispatch('init')
    }
})

export function debug(msg) {
    if (process.env.NODE_ENV === 'production') {
        return
    }

    const now = new Date()
    const z = (v) => (v < 10 ? '0' + v : v)
    const time = `${z(now.getHours())}:${z(now.getMinutes())}:${z(now.getSeconds())}`

    console.log(`${time} - ${msg}`)
}



// WEBPACK FOOTER //
// ./src/app.js