import store from '../store'

export const makePreviewUrl = (url, resize, crop) => {
    let envWorkers = process.env.hasOwnProperty('IMAGE_WORKERS') ? Object.values(process.env.IMAGE_WORKERS) : null
    let workers = envWorkers || store.getters.imageWorkers || []
    if (workers.length === 0) {
        return url
    }
    let baseUrl = '//' + workers[Math.floor(Math.random() * workers.length)]
    resize = resize || '90x90'
    let result = baseUrl + '/r/' + resize
    if (crop) {
        result += '/c/' + crop
    }

    return result + '/' + url
}



// WEBPACK FOOTER //
// ./src/utils/image_previews.js