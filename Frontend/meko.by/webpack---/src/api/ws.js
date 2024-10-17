export class Client {
    constructor(handler, onError, baseURL, token, session, updatedAtFunc) {
        if (window.WebSocket === undefined) {
            throw new Error('WebSocket not supported')
        }

        this.onError = onError
        this.handler = handler
        this.client = new WebSocket(Client.url(baseURL, token, session, updatedAtFunc()))

        this.client.onopen = e => {
            console.debug('ws: opened')
        }

        this.client.onmessage = e => {
            const event = JSON.parse(e.data)

            console.debug('ws: message', event)
            this.handler(event)
        }

        this.client.onclose = e => {
            console.debug('ws: close', e.reason, e.wasClean)

            this.close()
            this.onError(e)
        }

        this.client.onerror = e => {
            console.debug('ws: error')

            this.close()
            this.onError(e)
        }
    }

    close() {
        if (this.client) {
            const client = this.client
            client.onerror = client.onclose = client.onopen = client.onmessage = null
            client.close()
        }

        this.client = null
    }

    static url(baseURL, token, session, updatedAt) {
        let url = `${baseURL}ws?token=${token}&session=${session}&updated_at=${updatedAt}`

        return url.replace(/^http(s?:\/\/)/, 'ws$1')
    }
}



// WEBPACK FOOTER //
// ./src/api/ws.js