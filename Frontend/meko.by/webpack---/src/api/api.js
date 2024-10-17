import axios from 'axios'

export class Client {
    constructor(baseUrl, token) {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Site-Token': token
            }
        })
    }

    connect(request) {
        return this.doPost('connect', request)
    }

    setMeta({
        userToken,
        sessionId,
        siteCustomerId,
        siteUserId
    }) {
        if (userToken) {
            this.client.defaults.headers.common['X-User-Token'] = userToken
        }

        if (sessionId) {
            this.client.defaults.headers.common['X-Session-Id'] = sessionId
        }

        if (siteCustomerId) {
            this.client.defaults.headers.common['X-Site-Customer-Id'] = siteCustomerId
        }

        if (siteUserId) {
            this.client.defaults.headers.common['X-Site-User-Id'] = siteUserId
        }
    }

    sendMessage(request) {
        return this.doPost('messages', request)
    }

    sendOfflineForm(request) {
        return this.doPost('offline/form', request)
    }

    sendFile(file, progressCallback) {
        return new Promise((resolve, reject) => {
            const config = {
                headers: {
                    'Content-Type': file.type || 'application/octet-stream'
                }
            }

            if (progressCallback) {
                config.onUploadProgress = progressCallback
            }

            this.client.post('files', file, config)
                .then(function(response) {
                    resolve(response.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    sendContactForm(request, actionId) {
        let url = 'contact/form'
        if (actionId) {
            url += '?action_id=' + actionId
        }

        return this.doPost(url, request)
    }

    readMessage(messageId) {
        return this.doPost(`messages/${messageId}/read`)
    }

    executeAction(actionId) {
        return this.doPost(`actions/${actionId}/execute`)
    }

    executionResultClose(executionId) {
        return this.doPut(`actions/executions/${executionId}/result/close`)
    }

    doGet(url, request) {
        return new Promise((resolve, reject) => {
            this.client.get(url, request)
                .then(function(response) {
                    resolve(response.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    doPost(url, request) {
        return new Promise((resolve, reject) => {
            this.client.post(url, request)
                .then(function(response) {
                    resolve(response.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    doPut(url, request) {
        return new Promise((resolve, reject) => {
            this.client.put(url, request)
                .then(function(response) {
                    resolve(response.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}



// WEBPACK FOOTER //
// ./src/api/api.js