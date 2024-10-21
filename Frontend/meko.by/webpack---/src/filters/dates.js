export default {
    calendarDay: function(i18n) {
        return function(value) {
            let t = new Date(value)
            let dayTime = new Date()

            dayTime.setHours(0)
            dayTime.setMinutes(0)
            dayTime.setSeconds(0)

            if (t.getTime() > dayTime.getTime()) {
                return i18n.translate('time.today')
            }

            dayTime.setTime(dayTime.getTime() - 24 * 60 * 60 * 1000)

            if (t.getTime() > dayTime.getTime()) {
                return i18n.translate('time.yesterday')
            }

            const d = t.getDate()
            const m = t.getMonth() + 1
            const y = t.getFullYear()

            return i18n.translate('time.numberDateFormat', {
                d: (d < 10 ? '0' : '') + d,
                m: (m < 10 ? '0' : '') + m,
                y: y
            })
        }
    },
    time: function(value) {
        const t = new Date(value)
        const h = t.getHours()
        const m = t.getMinutes()

        return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m
    },
    dateTime: function(i18n) {
        return function(value) {
            const t = new Date(value)
            const d = t.getDate()
            const m = t.getMonth() + 1
            const y = t.getFullYear()
            const hh = t.getHours()
            const mm = t.getMinutes()

            return i18n.translate('time.dateTimeFormat', {
                d: (d < 10 ? '0' : '') + d,
                m: (m < 10 ? '0' : '') + m,
                y: y,
                hh: (hh < 10 ? '0' : '') + hh,
                mm: (mm < 10 ? '0' : '') + mm
            })
        }
    }
}



// WEBPACK FOOTER //
// ./src/filters/dates.js