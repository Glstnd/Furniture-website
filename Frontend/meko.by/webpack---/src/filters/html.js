import strings from './strings'

export default {
    purify(dirty) {
        if (!dirty) {
            return ''
        }

        let tmp = document.createElement('DIV')
        tmp.innerHTML = dirty
        return strings.trim(tmp.textContent || tmp.innerText || '')
    }
}



// WEBPACK FOOTER //
// ./src/filters/html.js