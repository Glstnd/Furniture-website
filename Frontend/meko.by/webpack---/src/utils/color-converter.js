export const rgbFrom = (hexValue) => {
    let red = 0
    let green = 0
    let blue = 0
    let hexColor = hexValue.match(/[0-9a-fA-F]/g).join('').toString()

    if (hexColor.length === 3) {
        red = parseInt(hexColor[0] + hexColor[0], 16)
        green = parseInt(hexColor[1] + hexColor[1], 16)
        blue = parseInt(hexColor[2] + hexColor[2], 16)
    } else if (hexColor.length === 6) {
        red = parseInt(hexColor.slice(0, 2), 16)
        green = parseInt(hexColor.slice(2, 4), 16)
        blue = parseInt(hexColor.slice(4), 16)
    }

    return {
        red,
        green,
        blue
    }
}

export const getHSLColor = (hexValue) => {
    let {
        red,
        green,
        blue
    } = rgbFrom(hexValue)
    const a = 1
    red /= 255
    green /= 255
    blue /= 255

    let min = Math.min(red, green, blue)
    let max = Math.max(red, green, blue)
    let delta = max - min
    let h = 0
    let s = 0
    let l = 0

    if (delta === 0) {
        h = 0
    } else if (max === red) {
        h = ((green - blue) / delta) % 6
    } else if (max === green) {
        h = (blue - red) / delta + 2
    } else {
        h = (red - green) / delta + 4
    }
    h = Math.round(h * 60)

    if (h < 0) {
        h += 360
    }
    l = (max + min) / 2
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
    s = +(s * 100).toFixed()
    l = +(l * 100).toFixed()

    return {
        h,
        s,
        l,
        a
    }
}

export const getChildColor = (mainColor, reduceLightness, alpha = 1) => {
    let color = { ...mainColor
    }

    if (reduceLightness) {
        color.l -= reduceLightness
    }

    color.a = alpha

    return color
}

export const getColorString = (colorObject) => {
    return `hsla(${colorObject.h}, ${colorObject.s}%, ${colorObject.l}%, ${colorObject.a})`
}



// WEBPACK FOOTER //
// ./src/utils/color-converter.js