export class Client {
    constructor(handler, onError, baseURL, token, session, updatedAtFunc) {
        if (window.EventSource === undefined) {
            throw new Error('EventSource not supported')
        }

        this.onError = onError
        this.handler = handler
        this.heartbeatTimeout = null

        this.client = new EventSource(Client.url(baseURL, token, session, updatedAtFunc()))

        this.client.onopen = () => {
            console.debug('es: opened')
            this.resetHeartbeat()
        }

        this.client.onmessage = e => {
            this.resetHeartbeat()

            const event = JSON.parse(e.data)
            console.debug('es: message', event)
            this.handler(event)
        }

        this.client.addEventListener('heartbeat', e => {
            console.debug('es: heartbeat message')
            this.resetHeartbeat()
        })

        this.client.onerror = err => {
            console.debug('es: error', err)

            this.close()
            this.onError(err)
        }
    }

    close() {
        if (this.client) {
            this.client.close()
            this.client = null
        }

        clearTimeout(this.heartbeatTimeout)
        this.heartbeatTimeout = null
    }

    resetHeartbeat() {
        clearTimeout(this.heartbeatTimeout)
        this.heartbeatTimeout = null

        if (!this.client) {
            console.debug('es: heartbeat stop')
            return
        }

        this.heartbeatTimeout = setTimeout(() => {
            console.debug('es: reconnect required')

            this.close()
            this.onError(new Error('es: heartbeat timeout, reconnect required'))
        }, 60000)
    }

    static url(baseURL, token, session, updatedAt) {
        return `${baseURL}es?token=${token}&session=${session}&updated_at=${updatedAt}`
    }
}



// WEBPACK FOOTER //
// ./src/api/es.js