import axios from 'axios'

export class Client {
    constructor(handler, onError, baseURL, token, session, updatedAtFunc) {
        this.onError = onError
        this.handler = handler
        this.cancel = null
        this.baseURL = baseURL
        this.token = token
        this.session = session
        this.updatedAtFunc = updatedAtFunc

        this._doRequest()
    }

    _doRequest() {
        const source = axios.CancelToken.source()
        const client = axios.create({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        this.cancel = source.cancel

        client
            .get(this.url(), {
                cancelToken: source.token
            })
            .then(
                (res) => {
                    console.debug('lp: message', res.data)

                    for (const event of res.data) {
                        this.handler(event)
                    }

                    this._doRequest()
                },
                (err) => {
                    if (axios.isCancel(err)) {
                        console.debug('lp: close', err)
                        this.close()
                        return
                    }

                    console.debug('lp: error', err)

                    this.close()
                    this.onError(err)
                }
            )
    }

    close() {
        if (this.cancel) {
            this.cancel()
        }
        this.cancel = null
    }

    url() {
        return `${this.baseURL}lp?token=${this.token}&session=${this.session}&updated_at=${this.updatedAtFunc()}`
    }
}



// WEBPACK FOOTER //
// ./src/api/lp.js