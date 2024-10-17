export default {
    trim: function(value) {
        if (value) {
            return value.replace(/^\s+|^\n+|\s+$|\n+$/g, '')
        }

        return null
    }
}



// WEBPACK FOOTER //
// ./src/filters/strings.js