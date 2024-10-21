export default {
    isAndroid: function() {
        return (/Android/i).test(navigator.userAgent)
    },
    isIos: function() {
        return ((/iPhone|iPad|iPod/i).test(navigator.userAgent) || this.isIpad())
    },
    isWindowsMobile: function() {
        return (/IEMobile/i).test(navigator.userAgent)
    },
    isOperaMini: function() {
        return (/Opera Mini/i).test(navigator.userAgent)
    },
    isBlackBerry: function() {
        return (/BlackBerry/i).test(navigator.userAgent)
    },
    isIpad: function() {
        return (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1)
    },
    isMobile: function() {
        return (this.isAndroid() || this.isIos() || this.isWindowsMobile() || this.isOperaMini() || this.isBlackBerry())
    },
    isIE: function() {
        const ua = window.navigator.userAgent
        const msie = ua.indexOf('MSIE ')

        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
        }

        const trident = ua.indexOf('Trident/')
        if (trident > 0) {
            // IE 11 => return version number
            const rv = ua.indexOf('rv:')
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
        }

        const edge = ua.indexOf('Edge/')
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
        }

        // other browser
        return false
    },
    isMac: function() {
        return (/Mac/i).test(navigator.userAgent)
    },
    isWin: function() {
        const ua = window.navigator.userAgent

        if (!/Win/.test(window.navigator.platform)) {
            return false
        }

        if (ua.indexOf('Windows NT 10.0') !== -1) {
            return 10
        }

        return true
    },
    isExtraSmall: function() {
        return (window.innerWidth < 320 || window.innerHeight < 320)
    }
}



// WEBPACK FOOTER //
// ./src/helpers/device.js