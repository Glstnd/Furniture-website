import mp3 from './../assets/sounds/alert.mp3'
import wav from './../assets/sounds/alert.wav'
import {
    tabIsLastActive
} from './tab_watcher'
import {
    debug
} from '../app'

let enable = false
let soundAlert = null
let thLastAlert = null

function d(msg) {
    debug(`sound alerts - ${msg}`)
}

export function enableSoundAlerts() {
    enable = true
    d('enabled')
}

export function playSoundAlert() {
    const th = +new Date()
    const msSinceLastAlert = thLastAlert ? th - thLastAlert : null

    d('play - ' + JSON.stringify({
        enabled: enable,
        init: !!soundAlert,
        msSinceLastAlert,
        tabIsLastActive: tabIsLastActive()
    }))

    if (!enable || !soundAlert || (msSinceLastAlert && msSinceLastAlert < 5000) || tabIsLastActive() === false) {
        return
    }

    const playPromise = soundAlert.play()
    if (playPromise === undefined) {
        d('play - sound play return undefined ')
        return
    }

    playPromise.then(() => {
        thLastAlert = th
    }).catch((e) => {
        d('play - ' + e)
    })
}

function soundActivator() {
    window.removeEventListener('touchstart', soundActivator)
    window.removeEventListener('click', soundActivator)

    try {
        const s = new Audio((new Audio()).canPlayType('audio/mpeg') ? mp3 : wav)
        soundAlert = s
        d('init successful')
    } catch (e) {
        enable = false
        soundAlert = null
        d('init err ' + e)
    }
}

if (window.addEventListener) {
    // Политики авто проигрывания запрещают автоматическое проигрывание
    // медиа-контента до начала взаимодействия пользователя со страницей
    // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    window.addEventListener('touchstart', soundActivator)
    window.addEventListener('click', soundActivator)
}



// WEBPACK FOOTER //
// ./src/utils/sound_alerts.js