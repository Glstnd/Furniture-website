import {
    Client as Api
} from './api'
import {
    Client as Ws
} from './ws'
import {
    Client as Es
} from './es'
import {
    Client as Lp
} from './lp'
import store from './../store'
import {
    EVENTS
} from './events'

export const ApiClient = {
    client: false,
    init: function(baseUrl, token) {
        this.client = new Api(baseUrl, token)
    },
    api: function() {
        if (!this.client) {
            console.error('Client Api does not init')
            return
        }
        return this.client
    }
}

const protocols = ['ws', 'es', 'lp']
const defaultProtocol = protocols[0]

function nextProto(current) {
    const index = protocols.indexOf(current) + 1

    return protocols[index] || protocols[0]
}

const protoClients = {
    ws: Ws,
    es: Es,
    lp: Lp
}

export const EventClient = {
    backendUrl: null,
    token: null,
    session: null,
    protocol: null,

    setConnectionParams(backendUrl, token, session) {
        this.backendUrl = backendUrl
        this.token = token
        this.session = session

        if (this.client) {
            this.client.close()
            this.client = null

            this.connect()
        }
    },

    connect() {
        if (this.client) {
            return
        }

        if (!this.protocol) {
            this.protocol = defaultProtocol
        }
        const proto = this.protocol

        const onError = (err) => {
            console.debug('could not connect ' + proto, err)

            this.protocol = nextProto(proto)
            if (this.client) {
                this.client.close()
            }
            this.client = null

            setTimeout(() => {
                this.connect()
            }, this.protocol === defaultProtocol ? 3000 : 0)
        }

        try {
            this.client = new protoClients[proto](handleEvent, onError, this.backendUrl,
                this.token, this.session, () => store.getters.maxUpdatedAt)
        } catch (e) {
            onError(e)
        }
    }
}

function handleEvent(m) {
    if (EVENTS.indexOf(m.type) === -1) {
        console.warn('Unknown message: ', m.type, m.data)
        return
    }

    store.dispatch(`ws_${m.type}`, m.data)
}



// WEBPACK FOOTER //
// ./src/api/index.js