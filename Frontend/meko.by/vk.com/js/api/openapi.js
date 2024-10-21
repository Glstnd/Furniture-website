var IS_CLIENT_SIDE = "undefined" != typeof window,
    IS_ANDROID_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.AndroidBridge),
    IS_IOS_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.VKWebAppClose),
    IS_WEB = IS_CLIENT_SIDE && !IS_ANDROID_WEBVIEW && !IS_IOS_WEBVIEW,
    androidBridge = IS_CLIENT_SIDE ? window.AndroidBridge : void 0,
    iosBridge = IS_IOS_WEBVIEW ? window.webkit.messageHandlers : void 0;

function _bridgeSend(e, t) {
    androidBridge && androidBridge[e] ? androidBridge[e](JSON.stringify(t)) : iosBridge && iosBridge[e] && "function" == typeof iosBridge[e].postMessage && iosBridge[e].postMessage(t)
}

function _bridgeSupports(e) {
    return IS_ANDROID_WEBVIEW ? androidBridge && "function" == typeof androidBridge[e] : !!IS_IOS_WEBVIEW && (iosBridge && iosBridge[e] && "function" == typeof iosBridge[e].postMessage)
}
var IS_BRIDGE_AVAILABLE = !IS_WEB && _bridgeSupports("VKWebAppConversionHit");
if (function(e) {
        if (!e.fastXDM) {
            var t = {},
                o = {},
                i = [],
                n = {};
            e.fastXDM = {
                _id: 0,
                helperUrl: "https://vk.com/js/api/xdmHelper.js",
                Server: function(o, i, n) {
                    this.methods = o || {}, this.filter = i, this.options = n || {}, this.id = e.fastXDM._id++, this.key = function() {
                        for (var e = "", t = 0; t < 5; t++) e += Math.ceil(15 * Math.random()).toString(16);
                        return e
                    }(), this.frameName = "fXD" + this.key, this.server = !0, this.methods["%init%"] = this.methods.__fxdm_i = function() {
                        d((function(t) {
                            for (var o in this.methods)
                                if (this.methods[o] instanceof e.fastXDM.Server) {
                                    var i = this.methods[o];
                                    "p" === t.protocol && t.send(this, t.json.stringify(["%proxy%", [o, i.key]])), this.methods[o] = function() {
                                        this.callMethod.apply(this, arguments)
                                    }.bind(i)
                                }
                        }), this), e.fastXDM.run(this.id), this.methods.onInit && this.methods.onInit()
                    }, t[this.key] = [p, this]
                },
                Client: function(i, n) {
                    if (this.methods = i || {}, this.options = n || {}, this.id = e.fastXDM._id++, this.client = !0, e.fastXDM.run(this.id), 0 !== window.name.indexOf("fXD")) throw Error("Wrong window.name property.");
                    this.key = window.name.substring(3, 8), this.caller = window.parent, o[this.key] || (o[this.key] = {}), this.methods["%proxy%"] = function(e, t) {
                        e && t && this.caller.frames["fXD" + t] && (o[this.key][e] = {
                            key: t,
                            frame: {
                                contentWindow: this.caller.frames["fXD" + t]
                            }
                        })
                    }.bind(this), t[this.key] = [p, this], e.fastXDM.on("helper", (function() {
                        e.fastXDM.onClientStart(this)
                    }), this), d((function(e) {
                        e.send(this, e.json.stringify(["%init%"]));
                        var t = this.methods;
                        setTimeout((function() {
                            t.onInit && t.onInit()
                        }), 0)
                    }), this)
                },
                onMessage: function(e) {
                    var o = e.data;
                    if (!o) return !1;
                    if ("string" != typeof o && !(o instanceof String)) return !1;
                    var i = o.substr(0, 5);
                    if (t[i]) {
                        var n = t[i][1];
                        !n || n.filter && !n.filter(e.origin) || t[i][0](o.substr(6), n, e.origin)
                    }
                },
                setJSON: function(e) {
                    n.json = e
                },
                getJSON: function(e) {
                    if (!e) return n.json;
                    d((function(t) {
                        e(t.json)
                    }))
                },
                getProxyToServer: function(e, t) {
                    return o[e] && o[e][t]
                },
                setEnv: function(e) {
                    for (var t in e) n[t] = e[t];
                    l()
                },
                _q: {},
                on: function(e, t, o) {
                    this._q[e] || (this._q[e] = []), -1 == this._q[e] ? t.apply(o) : this._q[e].push([t, o])
                },
                run: function(e) {
                    for (var t = (this._q[e] || []).length, o = 0; o < t; o++) this._q[e][o][0].apply(this._q[e][o][1]);
                    this._q[e] = -1
                },
                waitFor: r
            }, e.fastXDM.Server.prototype.start = function(t, o) {
                if (t.contentWindow) this.caller = t.contentWindow, this.frame = t, e.fastXDM.on("helper", (function() {
                    e.fastXDM.onServerStart(this)
                }), this);
                else {
                    var i = this;
                    (o = o || 0) < 50 && setTimeout((function() {
                        i.start.apply(i, [t, o + 1])
                    }), 100)
                }
            }, e.fastXDM.Server.prototype.destroy = function() {
                delete t[this.key]
            }, e.fastXDM.Server.prototype.append = function(e, t, o) {
                var i = document.createElement("DIV");
                i.innerHTML = '<iframe name="' + this.frameName + '" ' + (o || "") + "></iframe>";
                var n = i.firstChild,
                    r = this;
                return setTimeout((function() {
                    n.frameBorder = "0", t && u(n, t), e.insertBefore(n, e.firstChild), r.start(n)
                }), 0), n
            }, e.fastXDM.Client.prototype.callMethod = e.fastXDM.Server.prototype.callMethod = function() {
                for (var t = Array.prototype.slice.call(arguments), o = t.shift(), i = 0, n = t.length; i < n; i++)
                    if ("function" == typeof t[i]) {
                        this.funcsCount = (this.funcsCount || 0) + 1;
                        var s = t[i],
                            l = "_func" + this.funcsCount;
                        this.methods[l] = function() {
                            s.apply(this, arguments), delete this.methods[l]
                        }, t[i] = {
                            _func: this.funcsCount
                        }
                    } else this.options.safe && (t[i] = a(t[i], !1));
                r(this, "caller", (function() {
                    e.fastXDM.on(this.id, (function() {
                        d((function(i) {
                            var n = this,
                                r = e.fastXDM.getProxyToServer(this.key, o);
                            r && (n = r, o = t.shift()), i.send(n, i.json.stringify([o, t]))
                        }), this)
                    }), this)
                }), this)
            }, e.fastXDM.Client.prototype.isUnsafeMethod = e.fastXDM.Server.prototype.isUnsafeMethod = function(e) {
                return ~["%proxy%", "%init%"].indexOf(e) || this.options.unsafeMethods && ~this.options.unsafeMethods.indexOf(e)
            }, e.JSON && "object" == typeof e.JSON && e.JSON.parse && e.JSON.stringify && '{"a":[1,2,3]}' === e.JSON.stringify({
                a: [1, 2, 3]
            }).replace(/ /g, "") ? n.json = {
                parse: e.JSON.parse,
                stringify: e.JSON.stringify
            } : e.fastXDM._needJSON = !0, e.postMessage ? (n.protocol = "p", n.send = function(e, t) {
                var o = e.frame ? e.frame.contentWindow : e.caller;
                if (o) try {
                    o.postMessage(e.key + ":" + t, "*")
                } catch (i) {
                    window.postMessage.call(o, e.key + ":" + t, "*")
                }
            }, e.addEventListener ? e.addEventListener("message", e.fastXDM.onMessage, !1) : e.attachEvent("onmessage", e.fastXDM.onMessage), e.fastXDM._needJSON ? (e.fastXDM._onlyJSON = !0, s()) : l()) : s()
        }

        function r(e, t, o, i, n) {
            e[t] ? o.apply(i) : (n = n || 0) < 1e3 && setTimeout((function() {
                r(e, t, o, i, n + 1)
            }), 0)
        }

        function s(t) {
            setTimeout((function() {
                var o = document.createElement("script");
                o.type = "text/javascript", o.src = t || e.fastXDM.helperUrl, r(document, "body", (function() {
                    document.getElementsByTagName("HEAD")[0].appendChild(o)
                }))
            }), 0)
        }

        function a(e, t) {
            var o;
            switch (typeof e) {
                case "string":
                    o = t ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : e.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&");
                    break;
                case "object":
                    if ("[object Array]" === Object.prototype.toString.apply(e)) {
                        o = [];
                        for (var i = 0, n = e.length; i < n; i++) o[i] = a(e[i], t)
                    } else
                        for (var r in o = {}, e) Object.hasOwnProperty.call(e, r) && (o[r] = a(e[r], t));
                    break;
                default:
                    o = e
            }
            return o
        }

        function d(e, t) {
            n.loaded ? e.apply(t, [n]) : i.push([t, e])
        }

        function l() {
            n.loaded = !0;
            for (var e = 0, t = i.length; e < t; e++) i[e][1].apply(i[e][0], [n])
        }

        function p(t, o, i) {
            d((function(n) {
                var r = n.json.parse(t),
                    s = r[0];
                if (s) {
                    if ("p" === n.protocol && o.options.sameOrigin && i !== e.origin && !o.isUnsafeMethod(s)) throw Error("Insecure method call.");
                    r[1] || (r[1] = []);
                    for (var d = 0, l = r[1].length; d < l; d++)
                        if (r[1][d] && r[1][d]._func) {
                            var p = r[1][d]._func;
                            r[1][d] = function() {
                                var e = Array.prototype.slice.call(arguments);
                                e.unshift("_func" + p), o.callMethod.apply(o, e)
                            }
                        } else o.options.safe && (r[1][d] = a(r[1][d], !0));
                    setTimeout((function() {
                        if (!o.methods[s]) throw Error("fastXDM: Method " + s + " is undefined");
                        o.methods[s].apply(o, r[1])
                    }), 0)
                }
            }))
        }

        function u(e, t) {
            for (var o in t) e[o] && "object" == typeof e[o] ? u(e[o], t[o]) : e[o] = t[o]
        }
    }(window), window.VK || (window.VK = {}), VK.MD5 || (VK.MD5 = function(e) {
        var t, o = function(e, t) {
                var o = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (o >> 16) << 16 | 65535 & o
            },
            i = function(e, t, i, n, r, s) {
                return o(function(e, t) {
                    return e << t | e >>> 32 - t
                }(o(o(t, e), o(n, s)), r), i)
            },
            n = function(e, t, o, n, r, s, a) {
                return i(t & o | ~t & n, e, t, r, s, a)
            },
            r = function(e, t, o, n, r, s, a) {
                return i(t & n | o & ~n, e, t, r, s, a)
            },
            s = function(e, t, o, n, r, s, a) {
                return i(t ^ o ^ n, e, t, r, s, a)
            },
            a = function(e, t, o, n, r, s, a) {
                return i(o ^ (t | ~n), e, t, r, s, a)
            };
        return function(e) {
            for (var t, o = "0123456789abcdef", i = "", n = 0, r = e.length; n < r; n++) t = e.charCodeAt(n), i += o.charAt(t >>> 4 & 15) + o.charAt(15 & t);
            return i
        }(function(e) {
            for (var t = "", o = 0, i = 32 * e.length; o < i; o += 8) t += String.fromCharCode(e[o >> 5] >>> o % 32 & 255);
            return t
        }(function(e, t) {
            var i, d, l, p, u = 1732584193,
                c = -271733879,
                h = -1732584194,
                f = 271733878;
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var g = 0, m = e.length; g < m; g += 16) i = u, d = c, l = h, p = f, u = n(u, c, h, f, e[g + 0], 7, -680876936), f = n(f, u, c, h, e[g + 1], 12, -389564586), h = n(h, f, u, c, e[g + 2], 17, 606105819), c = n(c, h, f, u, e[g + 3], 22, -1044525330), u = n(u, c, h, f, e[g + 4], 7, -176418897), f = n(f, u, c, h, e[g + 5], 12, 1200080426), h = n(h, f, u, c, e[g + 6], 17, -1473231341), c = n(c, h, f, u, e[g + 7], 22, -45705983), u = n(u, c, h, f, e[g + 8], 7, 1770035416), f = n(f, u, c, h, e[g + 9], 12, -1958414417), h = n(h, f, u, c, e[g + 10], 17, -42063), c = n(c, h, f, u, e[g + 11], 22, -1990404162), u = n(u, c, h, f, e[g + 12], 7, 1804603682), f = n(f, u, c, h, e[g + 13], 12, -40341101), h = n(h, f, u, c, e[g + 14], 17, -1502002290), c = n(c, h, f, u, e[g + 15], 22, 1236535329), u = r(u, c, h, f, e[g + 1], 5, -165796510), f = r(f, u, c, h, e[g + 6], 9, -1069501632), h = r(h, f, u, c, e[g + 11], 14, 643717713), c = r(c, h, f, u, e[g + 0], 20, -373897302), u = r(u, c, h, f, e[g + 5], 5, -701558691), f = r(f, u, c, h, e[g + 10], 9, 38016083), h = r(h, f, u, c, e[g + 15], 14, -660478335), c = r(c, h, f, u, e[g + 4], 20, -405537848), u = r(u, c, h, f, e[g + 9], 5, 568446438), f = r(f, u, c, h, e[g + 14], 9, -1019803690), h = r(h, f, u, c, e[g + 3], 14, -187363961), c = r(c, h, f, u, e[g + 8], 20, 1163531501), u = r(u, c, h, f, e[g + 13], 5, -1444681467), f = r(f, u, c, h, e[g + 2], 9, -51403784), h = r(h, f, u, c, e[g + 7], 14, 1735328473), c = r(c, h, f, u, e[g + 12], 20, -1926607734), u = s(u, c, h, f, e[g + 5], 4, -378558), f = s(f, u, c, h, e[g + 8], 11, -2022574463), h = s(h, f, u, c, e[g + 11], 16, 1839030562), c = s(c, h, f, u, e[g + 14], 23, -35309556), u = s(u, c, h, f, e[g + 1], 4, -1530992060), f = s(f, u, c, h, e[g + 4], 11, 1272893353), h = s(h, f, u, c, e[g + 7], 16, -155497632), c = s(c, h, f, u, e[g + 10], 23, -1094730640), u = s(u, c, h, f, e[g + 13], 4, 681279174), f = s(f, u, c, h, e[g + 0], 11, -358537222), h = s(h, f, u, c, e[g + 3], 16, -722521979), c = s(c, h, f, u, e[g + 6], 23, 76029189), u = s(u, c, h, f, e[g + 9], 4, -640364487), f = s(f, u, c, h, e[g + 12], 11, -421815835), h = s(h, f, u, c, e[g + 15], 16, 530742520), c = s(c, h, f, u, e[g + 2], 23, -995338651), u = a(u, c, h, f, e[g + 0], 6, -198630844), f = a(f, u, c, h, e[g + 7], 10, 1126891415), h = a(h, f, u, c, e[g + 14], 15, -1416354905), c = a(c, h, f, u, e[g + 5], 21, -57434055), u = a(u, c, h, f, e[g + 12], 6, 1700485571), f = a(f, u, c, h, e[g + 3], 10, -1894986606), h = a(h, f, u, c, e[g + 10], 15, -1051523), c = a(c, h, f, u, e[g + 1], 21, -2054922799), u = a(u, c, h, f, e[g + 8], 6, 1873313359), f = a(f, u, c, h, e[g + 15], 10, -30611744), h = a(h, f, u, c, e[g + 6], 15, -1560198380), c = a(c, h, f, u, e[g + 13], 21, 1309151649), u = a(u, c, h, f, e[g + 4], 6, -145523070), f = a(f, u, c, h, e[g + 11], 10, -1120210379), h = a(h, f, u, c, e[g + 2], 15, 718787259), c = a(c, h, f, u, e[g + 9], 21, -343485551), u = o(u, i), c = o(c, d), h = o(h, l), f = o(f, p);
            return [u, c, h, f]
        }(function(e) {
            var t, o, i = Array(e.length >> 2);
            for (t = 0, o = i.length; t < o; t++) i[t] = 0;
            for (t = 0, o = 8 * e.length; t < o; t += 8) i[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return i
        }(t = function(e) {
            for (var t, o, i = "", n = -1, r = e.length; ++n < r;) t = e.charCodeAt(n), o = n + 1 < r ? e.charCodeAt(n + 1) : 0, 55296 <= t && t <= 56319 && 56320 <= o && o <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & o), n++), t <= 127 ? i += String.fromCharCode(t) : t <= 2047 ? i += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? i += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (i += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
            return i
        }(e)), 8 * t.length)))
    }), VK.extend = function(e, t, o) {
        for (var i in t)(o || void 0 === e[i]) && (e[i] = t[i]);
        return e
    }, VK.extend(VK, {
        _domain: {
            base: "https://vk.com",
            login: "https://login.vk.com",
            main: "https://oauth.vk.com",
            api: "https://api.vk.com"
        }
    }, !0), VK.xdConnectionCallbacks) setTimeout((function() {
    for (var e; e = VK.xdConnectionCallbacks.pop();) e()
}), 0), VK.Widgets && !VK.Widgets._constructor && (VK.Widgets = !1);
else {
    function obj2qs(e) {
        if (!e) return "";
        var t = [];
        for (var o in e) e.hasOwnProperty(o) && t.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o].toString() || ""));
        return t.length ? "?" + t.join("&") : ""
    }
    VK.extend(VK, {
        version: 1,
        _apiId: null,
        _session: null,
        _userStatus: "unknown",
        _path: {
            login: "authorize",
            proxy: "fxdm_oauth_proxy.html"
        },
        _rootId: "vk_api_transport",
        _nameTransportPath: "",
        xdReady: !1,
        access: {
            FRIENDS: 2,
            PHOTOS: 4,
            AUDIO: 8,
            VIDEO: 16,
            MATCHES: 32,
            QUESTIONS: 64,
            WIKI: 128
        }
    }), VK.init = function(e) {
        var t, o;
        if (VK._apiId = null, !e.apiId) throw Error("VK.init() called without an apiId");
        if (VK._apiId = e.apiId, e.onlyWidgets) return !0;
        e.nameTransportPath && "" !== e.nameTransportPath && (VK._nameTransportPath = e.nameTransportPath), (o = document.getElementById(VK._rootId)) || ((o = document.createElement("div")).id = VK._rootId, (t = document.body).insertBefore(o, t.childNodes[0])), o.style.position = "absolute", o.style.top = "-10000px";
        var i = VK.Cookie.load();
        i && (VK.Auth._loadState = "loaded", VK.Auth.setSession(i, i ? "connected" : "unknown"))
    }, VK.Cookie || (VK.Cookie = {
        _domain: null,
        load: function() {
            var e, t = document.cookie.match("\\bvk_app_" + VK._apiId + "=([^;]*)\\b");
            if (t) {
                if ("oauth" != (e = this.decode(t[1])).secret) return !1;
                e.expire = parseInt(e.expire, 10), VK.Cookie._domain = "." + window.location.hostname
            }
            return e
        },
        setRaw: function(e, t, o, i) {
            var n;
            n = "vk_app_" + VK._apiId + "=" + e;
            var r = i ? (new Date).getTime() + 1e3 * i : 1e3 * t;
            n += e && 0 === t ? "" : "; expires=" + new Date(r).toGMTString(), n += "; path=/", n += o ? "; domain=." + o : "", document.cookie = n, this._domain = o
        },
        set: function(e, t) {
            e ? this.setRaw(this.encode(e), e.expire, window.location.hostname, (t || {}).time) : this.clear()
        },
        clear: function() {
            this.setRaw("", 0, this._domain, 0)
        },
        encode: function(e) {
            var t, o = [];
            for (t in e) "user" != t && o.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return o.sort(), o.join("&")
        },
        decode: function(e) {
            var t, o, i = {},
                n = e.split("&");
            for (t = 0; t < n.length; t++)(o = n[t].split("=", 2)) && o[0] && (i[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
            return i
        }
    }), VK.Api || (VK.Api = {
        _headId: null,
        _callbacks: {},
        ie6_7: function() {
            return VK.Api.ieTested || (VK.Api.isIE6_7 = navigator.userAgent.match(/MSIE [6|7]/i), VK.Api.ieTested = !0), VK.Api.isIE6_7
        },
        supportCORS: function() {
            return "withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest
        },
        makeRequest: function(e, t) {
            var o = VK.Api.createRequest("GET", e);
            return !!o && (o.onload = function() {
                var e = o.responseText;
                if (200 === o.status) t(e);
                else try {
                    console.error("Open api access error", o.response)
                } catch (e) {}
            }, o.onerror = function() {
                try {
                    console.error("Open api access error")
                } catch (e) {}
            }, o.send(), !0)
        },
        createRequest: function(e, t) {
            var o = new XMLHttpRequest;
            return "withCredentials" in o ? (o.open(e, t, !0), o.withCredentials = !0) : "undefined" != typeof XDomainRequest ? ((o = new XDomainRequest).open(e, t), o.withCredentials = !0) : o = null, o
        },
        attachScript: function(e) {
            VK.Api._headId || (VK.Api._headId = document.getElementsByTagName("head")[0]);
            var t = document.createElement("script");
            t.type = "text/javascript", t.setAttribute("encoding", "UTF-8"), t.src = e, VK.Api._headId.appendChild(t)
        },
        checkMethod: function(e, t, o, i) {
            var n = e.toLowerCase();
            if ("wall.post" === n) {
                var r, s, a, d, l = /(^https?:\/\/)|(^(poll|album|photo|video|doc|audio|page|note)-?\d+_-?\d+)$/,
                    p = [];
                t.v || (t.v = "5.95"), t.attachments = t.attachments || t.attachment || [], "string" == typeof t.attachments && (t.attachments = t.attachments.split(","));
                for (var u = 0; u < t.attachments.length; u++) {
                    var c = t.attachments[u].trim();
                    l.test(c) && p.push(c)
                }
                return t.attachments = p.length ? p : "", r = "_" + Math.random().toString(16).substr(2), s = {
                    act: "wall_post_box",
                    method: n,
                    widget: 4,
                    aid: parseInt(VK._apiId, 10),
                    text: t.message || "",
                    method_access: r
                }, (s = VK.extend(s, t)).owner_id = parseInt(t.owner_id || 0, 10), s.publish_date = t.publish_date || "", a = VK._domain.base + "/al_apps.php", a += obj2qs(s), VK.UI.popup({
                    url: a,
                    width: 560,
                    height: 304
                }), d = setInterval((function() {
                    VK.UI.active.closed && (clearInterval(d), t.method_access = r, VK.Api.call(e, t, o, i))
                }), 500), !1
            }
            return "messages.allowmessagesfromgroup" != n || (r = "_" + Math.random().toString(16).substr(2), a = VK._domain.base + "/widget_allow_messages_from_community.php?act=allow_box&group_id=" + parseInt(t.group_id, 10) + "&app_id=" + parseInt(VK._apiId, 10) + "&method_access=" + r, VK.UI.popup({
                url: a,
                width: 560,
                height: 304
            }), d = setInterval((function() {
                VK.UI.active.closed && (clearInterval(d), t.method_access = r, VK.Api.call(e, t, o, i))
            }), 500), !1)
        },
        call: function(e, t, o, i) {
            var n, r, s = t || {};
            if ("object" != typeof s || "function" != typeof o) return !1;
            if (t.method_access || t.method_force || VK.Api.checkMethod(e, t, o, i)) {
                if (i || (i = 0), "loaded" != VK.Auth._loadState) {
                    var a = function(i) {
                        i && i.session && (VK.Observer.unsubscribe("auth.loginStatus", a), VK.Api.call(e, t, o))
                    };
                    return VK.Observer.subscribe("auth.loginStatus", a), void VK.Auth.getLoginStatus()
                }
                if (VK.Api.queryLength(s) < 1500 && !VK.Api.ie6_7()) {
                    for (var d = !1, l = parseInt(1e7 * Math.random(), 10); VK.Api._callbacks[l];) l = parseInt(1e7 * Math.random(), 10);
                    s.callback = "VK.Api._callbacks[" + l + "]"
                } else d = !0;
                VK._session && VK._session.sid && (s.access_token = VK._session.sid), n = VK.Cookie.encode(s), r = function(n) {
                    if (!n.error || 3 != n.error.error_code && 4 != n.error.error_code && 5 != n.error.error_code) o(n);
                    else {
                        if (i > 3) return !1;
                        var r = function(n) {
                            VK.Observer.unsubscribe("auth.sessionChange", r), delete t.access_token, n.session && VK.Api.call(e, t, o, i + 1)
                        };
                        VK.Observer.subscribe("auth.sessionChange", r), VK.Auth.getLoginStatus()
                    }
                    d || delete VK.Api._callbacks[l]
                }, d ? VK.xdReady ? VK.XDM.remote.callMethod("apiCall", e, n, r) : (VK.Observer.subscribe("xdm.init", (function() {
                    VK.XDM.remote.callMethod("apiCall", e, n, r)
                })), VK.XDM.init()) : (VK.Api._callbacks[l] = r, VK.Api.attachScript(VK._domain.api + "/method/" + e + "?" + n))
            }
        },
        queryLength: function(e) {
            var t, o = 100;
            for (t in e) o += t.length + encodeURIComponent(e[t]).length + 1;
            return o
        }
    }, VK.api = function(e, t, o) {
        VK.Api.call(e, t, o)
    }), VK.Auth || (VK.Auth = {
        popup: null,
        lsCb: {},
        setSession: function(e, t, o, i) {
            var n = !VK._session && e,
                r = VK._session && !e,
                s = VK._session && e && VK._session.mid != e.mid,
                a = n || r || VK._session && e && VK._session.sid != e.sid,
                d = t != VK._userStatus,
                l = {
                    session: e,
                    status: t,
                    settings: o
                };
            return VK._session = e, VK._userStatus = t, VK.Cookie.set(e, i), (a || d || s) && setTimeout((function() {
                d && VK.Observer.publish("auth.statusChange", l), (r || s) && VK.Observer.publish("auth.logout", l), (n || s) && VK.Observer.publish("auth.login", l), a && VK.Observer.publish("auth.sessionChange", l)
            }), 0), l
        },
        login: function(e, t) {
            if (!VK._apiId) return !1;
            var o = VK._domain.main + "/" + VK._path.login + "?client_id=" + VK._apiId + "&display=popup&redirect_uri=close.html&response_type=token&openapi=1";
            t && parseInt(t, 10) > 0 && (o += "&scope=" + t), VK.Observer.unsubscribe("auth.onLogin"), VK.Observer.subscribe("auth.onLogin", e), VK.UI.popup({
                width: 665,
                height: 370,
                url: o
            });
            var i = function() {
                VK.Auth.getLoginStatus((function(e) {
                    VK.Observer.publish("auth.onLogin", e), VK.Observer.unsubscribe("auth.onLogin")
                }), !0)
            };
            VK.UI.popupOpened = !0;
            var n = function() {
                if (!VK.UI.popupOpened) return !1;
                try {
                    if (!VK.UI.active.top || VK.UI.active.closed) return VK.UI.popupOpened = !1, i(), !0
                } catch (e) {
                    return VK.UI.popupOpened = !1, i(), !0
                }
                setTimeout(n, 100)
            };
            setTimeout(n, 100)
        },
        logout: function(e) {
            VK.Auth.revokeGrants(e)
        },
        revokeGrants: function(e) {
            var t = function(o) {
                VK.Observer.unsubscribe("auth.statusChange", t), e && e(o)
            };
            if (VK.Observer.subscribe("auth.statusChange", t), VK._session && VK._session.sid) {
                var o = VK._domain.login + "?act=openapi&oauth=1&aid=" + parseInt(VK._apiId, 10) + "&location=" + encodeURIComponent(window.location.hostname) + "&do_logout=1&token=" + VK._session.sid;
                if (VK.Api.supportCORS()) {
                    VK.Api.makeRequest(o + "&new=1", (function() {
                        VK.Auth.setSession(null, "unknown")
                    }))
                } else VK.Api.attachScript(o)
            }
            VK.Cookie.clear()
        },
        getSession: function() {
            return VK._session
        },
        getLoginStatus: function(cb, force) {
            if (VK._apiId) {
                if (cb) {
                    if (!force && "loaded" == VK.Auth._loadState) return void cb({
                        status: VK._userStatus,
                        session: VK._session
                    });
                    VK.Observer.subscribe("auth.loginStatus", cb)
                }
                if (force || "loading" != VK.Auth._loadState) {
                    VK.Auth._loadState = "loading";
                    var url = VK._domain.login + "?act=openapi&oauth=1&aid=" + parseInt(VK._apiId, 10) + "&location=" + encodeURIComponent(window.location.hostname);
                    if (VK.Api.supportCORS()) {
                        var loginCallback = function(response) {
                            if (this.JSON || (this.JSON = {}), response = "function" != typeof JSON.parse ? eval(response) : JSON.parse(response), VK.Auth._loadState = "loaded", response && response.auth) {
                                var session = {
                                    mid: response.user.id,
                                    sid: response.access_token,
                                    sig: response.sig,
                                    secret: response.secret,
                                    expire: response.expire
                                };
                                force && (session.user = response.user);
                                var status = "connected"
                            } else {
                                var session = null,
                                    status = response.user ? "not_authorized" : "unknown";
                                VK.Cookie.clear()
                            }
                            VK.Auth.setSession(session, status, !1, response), VK.Observer.publish("auth.loginStatus", {
                                session: session,
                                status: status
                            }), VK.Observer.unsubscribe("auth.loginStatus")
                        };
                        VK.Api.makeRequest(url + "&new=1", loginCallback)
                    } else {
                        for (var rnd = parseInt(1e7 * Math.random(), 10); VK.Auth.lsCb[rnd];) rnd = parseInt(1e7 * Math.random(), 10);
                        VK.Auth.lsCb[rnd] = function(e) {
                            if (delete VK.Auth.lsCb[rnd], VK.Auth._loadState = "loaded", e && e.auth) {
                                var t = {
                                    mid: e.user.id,
                                    sid: e.access_token,
                                    sig: e.sig,
                                    secret: e.secret,
                                    expire: e.expire
                                };
                                force && (t.user = e.user);
                                var o = "connected"
                            } else {
                                t = null, o = e.user ? "not_authorized" : "unknown";
                                VK.Cookie.clear()
                            }
                            VK.Auth.setSession(t, o, !1, e), VK.Observer.publish("auth.loginStatus", {
                                session: t,
                                status: o
                            }), VK.Observer.unsubscribe("auth.loginStatus")
                        }, VK.Api.attachScript(url + "&rnd=" + rnd)
                    }
                }
            }
        }
    }), VK.App || (VK.App = {
        _appOpened: !1,
        _addToGroupPopup: null,
        open: function(e, t) {
            !VK.App._appOpened && VK._apiId && (VK._session ? VK.App._openApp(e, t) : VK.Auth.login((function(o) {
                o && o.session && VK.App._openApp(e, t)
            })))
        },
        _openApp: function(e, t) {
            var o, i, n = [];
            if (t = t || {}, e && VK._apiId && !VK.App._appOpened) {
                if ("[object Object]" === Object.prototype.toString.call(t.data)) try {
                    t.data = JSON.stringify(t.data)
                } catch (e) {
                    t.data = ""
                }
                for (var r in o = VK._domain.base + "/apps?act=open_external_app_openapi&aid=" + VK._apiId, t.aid = VK._apiId, t) {
                    var s = "";
                    t.hasOwnProperty(r) && (void 0 !== t[r] && (s = encodeURIComponent(t[r])), n.push(encodeURIComponent(r) + "=" + s))
                }
                o += "&url=" + e, o += "&q=" + encodeURIComponent(n.join("&")), i = VK.Util.Box(o, {}, {
                    closeExternalApp: function() {
                        VK.App._result ? (VK.Observer.publish("app.done", VK.App._result), VK.App._result = null) : VK.Observer.publish("app.closed"), i.hide(), VK.App._appOpened = !1
                    },
                    externalAppDone: function(e, t) {
                        t ? VK.App._result = e : (VK.Observer.publish("app.done", e), i.hide(), VK.App._appOpened = !1, VK.App._result = null)
                    }
                }), i.show(), VK.App._appOpened = !0, VK.App._result = null
            }
        },
        addToGroup: function(e) {
            this._addToGroupPopup && !this._addToGroupPopup.closed || (this._onAddToGroupDone && VK.Util.removeEvent("message", this._onAddToGroupDone, window), this._onAddToGroupDone = function(e) {
                e.origin === VK._domain.base && "app.addToGroup" === e.data.method && (VK.Observer.publish("app.addToGroupDone", {
                    app_id: e.data.app_id,
                    group_ids: e.data.group_ids
                }), VK.Util.removeEvent("message", this._onAddToGroupDone, window), this._onAddToGroupDone = null)
            }.bind(this), window.postMessage && VK.Util.addEvent("message", this._onAddToGroupDone, window), this._addToGroupPopup = VK.UI.popup({
                url: VK._domain.base + "/add_community_app.php?aid=" + e,
                width: 560,
                height: 650
            }))
        }
    })
}
VK.UI || (VK.UI = {
    active: null,
    _buttons: [],
    popup: function(e) {
        var t, o = void 0 !== window.screenX ? window.screenX : window.screenLeft,
            i = void 0 !== window.screenY ? window.screenY : window.screenTop,
            n = void 0 !== window.outerWidth ? window.outerWidth : document.body.clientWidth,
            r = void 0 !== window.outerHeight ? window.outerHeight : document.body.clientHeight - 22,
            s = e.width,
            a = e.height,
            d = parseInt(o + (n - s) / 2, 10),
            l = parseInt(i + (r - a) / 2.5, 10);
        return t = "width=" + s + ",height=" + a + ",left=" + (d = window.screen && window.screenX && screen.left && screen.left > 1e3 ? 0 : d) + ",top=" + l, this.active = window.open(e.url, "vk_openapi", t), this.active
    },
    button: function(e, t) {
        var o;
        "string" == typeof e && (e = document.getElementById(e)), this._buttons.push(e), index = this._buttons.length - 1, o = '<table cellspacing="0" cellpadding="0" id="openapi_UI_' + index + '" onmouseover="VK.UI._change(1, ' + index + ');" onmouseout="VK.UI._change(0, ' + index + ');" onmousedown="VK.UI._change(2, ' + index + ');" onmouseup="VK.UI._change(1, ' + index + ');" style="cursor: pointer; border: 0px; font-family: tahoma, arial, verdana, sans-serif, Lucida Sans; font-size: 10px;"><tr style="vertical-align: middle"><td><div style="border: 1px solid #3b6798;border-radius: 2px 0px 0px 2px;-moz-border-radius: 2px 0px 0px 2px;-webkit-border-radius: 2px 0px 0px 2px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 4px 0px 6px;line-height: 13px;">&#1042;&#1086;&#1081;&#1090;&#1080;</div></div></td><td><div style="background: url(' + VK._domain.base + '/images/btns.png) 0px -42px no-repeat; width: 21px; height: 21px"></div></td><td><div style="border: 1px solid #3b6798;border-radius: 0px 2px 2px 0px;-moz-border-radius: 0px 2px 2px 0px;-webkit-border-radius: 0px 2px 2px 0px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 6px 0px 4px;line-height: 13px;">&#1050;&#1086;&#1085;&#1090;&#1072;&#1082;&#1090;&#1077;</div></div></td></tr></table>', e.innerHTML = o, e.style.width = e.childNodes[0].offsetWidth + "px"
    },
    _change: function(e, t) {
        for (var o = document.getElementById("openapi_UI_" + t).rows[0], i = [o.cells[0].firstChild.firstChild, o.cells[2].firstChild.firstChild], n = 0; n < 2; ++n) {
            var r = i[n];
            0 === e ? (r.style.backgroundColor = "#6D8DB1", r.style.borderTopColor = "#7E9CBC", r.style.borderLeftColor = r.style.borderRightColor = r.style.borderBottomColor = "#5C82AB") : 1 == e ? (r.style.backgroundColor = "#7693B6", r.style.borderTopColor = "#88A4C4", r.style.borderLeftColor = r.style.borderRightColor = r.style.borderBottomColor = "#6088B4") : 2 == e && (r.style.backgroundColor = "#6688AD", r.style.borderBottomColor = "#7495B8", r.style.borderLeftColor = r.style.borderRightColor = r.style.borderTopColor = "#51779F")
        }
        0 === e || 2 == e ? o.cells[2].firstChild.style.backgroundPosition = "0px -42px" : 1 == e && (o.cells[2].firstChild.style.backgroundPosition = "0px -63px")
    }
}), VK.XDM || (VK.XDM = {
    remote: null,
    init: function() {
        if (this.remote) return !1;
        var e = VK._domain.api + "/" + VK._path.proxy;
        this.remote = new fastXDM.Server({
            onInit: function() {
                VK.xdReady = !0, VK.Observer.publish("xdm.init")
            }
        }), this.remote.append(document.getElementById(VK._rootId), {
            src: e
        })
    },
    xdHandler: function(code) {
        try {
            eval("VK." + code)
        } catch (e) {}
    }
}), VK.Observer || (VK.Observer = {
    _subscribers: function() {
        return this._subscribersMap || (this._subscribersMap = {}), this._subscribersMap
    },
    publish: function(e) {
        var t, o, i = Array.prototype.slice.call(arguments),
            n = (e = i.shift(), this._subscribers()[e]);
        if (n)
            for (t = 0, o = n.length; t < o; t++) null != n[t] && n[t].apply(this, i)
    },
    subscribe: function(e, t) {
        var o = this._subscribers();
        if ("function" != typeof t) return !1;
        o[e] ? o[e].push(t) : o[e] = [t]
    },
    unsubscribe: function(e, t) {
        var o, i, n = this._subscribers()[e];
        if (!n) return !1;
        if ("function" == typeof t)
            for (o = 0, i = n.length; o < i; o++) n[o] == t && (n[o] = null);
        else delete this._subscribers()[e]
    }
}), VK.Widgets || (VK.Widgets = {}, VK.Widgets.count = 0, VK.Widgets.RPC = {}, VK.Widgets.loading = function(e, t) {
    e.style.background = t ? 'url("' + VK._domain.base + '/images/upload.gif") center center no-repeat transparent' : "none"
}, VK.Widgets.Comments = function(e, t, o) {
    var i = VK.Util.getPageData();
    if (!VK._apiId) throw Error("VK not initialized. Please use VK.init");
    t = VK.Util.parseOptions(t);
    document.getElementById(e);
    var n, r = {
            limit: t.limit || 10,
            height: t.height || 0,
            mini: void 0 === t.mini ? "auto" : t.mini,
            norealtime: t.norealtime ? 1 : 0
        },
        s = function() {
            return n.callMethod("mouseUp"), !1
        },
        a = function(e) {
            n.callMethod("mouseMove", {
                screenY: e.screenY
            })
        };
    if (t.browse) r.browse = 1, r.replies = t.replies || 0;
    else {
        var d = t.pageUrl || i.url;
        "/" == d.substr(0, 1) && (d = location.protocol + "//" + location.host + d), VK.extend(r, {
            page: o || 0,
            status_publish: void 0 === t.autoPublish ? 0 : t.autoPublish,
            attach: void 0 === t.attach ? "*" : t.attach ? t.attach : "",
            url: d,
            title: t.pageTitle || i.title,
            description: t.pageDescription || i.description,
            image: t.pageImage || i.image
        })
    }
    return t.onChange && (VK.Observer.subscribe("widgets.comments.new_comment", t.onChange), VK.Observer.subscribe("widgets.comments.delete_comment", t.onChange)), VK.Widgets._constructor("widget_comments.php", e, t, r, {
        showBox: function(e, t) {
            VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                proxy: n
            }).show()
        },
        startDrag: function() {
            cursorBack = window.document.body.style.cursor, window.document.body.style.cursor = "pointer", VK.Util.addEvent("mousemove", a), VK.Util.addEvent("mouseup", s)
        },
        stopDrag: function() {
            window.document.body.style.cursor = cursorBack, VK.Util.removeEvent("mousemove", a), VK.Util.removeEvent("mouseup", s)
        }
    }, {
        startHeight: 133,
        minWidth: 300
    }, (function(e, t, o) {
        t,
        n = o
    }))
}, VK.Widgets.CommentsBrowse = function(e, t) {
    return (t = VK.Util.parseOptions(t)).browse = 1, VK.Widgets.Comments(e, t)
}, VK.Widgets.Recommended = function(e, t) {
    VK.Util.getPageData();
    if (!VK._apiId) throw Error("VK not initialized. Please use VK.init");
    var o = {
        limit: (t = VK.Util.parseOptions(t)).limit || 5,
        max: t.max || 0,
        sort: t.sort || "friend_likes",
        verb: t.verb || 0,
        period: t.period || "week",
        target: t.target || "parent"
    };
    return VK.Widgets._constructor("widget_recommended.php", e, t, o, {}, {
        startHeight: 116 + 47 * o.limit - 15,
        minWidth: 150
    })
}, VK.Widgets.Post = function(e, t, o, i, n) {
    n = VK.Util.parseOptions(n);
    document.getElementById(e);
    var r, s, a = {
        owner_id: t,
        post_id: o,
        hash: i || "",
        from: n ? n.from : "",
        mode: n && n.mode ? n.mode : ""
    };
    return VK.Widgets._constructor("widget_post.php", e, n, a, {
        showBox: function(e, t) {
            VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                proxy: r
            }).show()
        },
        startDrag: function() {
            s = window.document.body.style.cursor, window.document.body.style.cursor = "pointer"
        },
        stopDrag: function() {
            window.document.body.style.cursor = s
        }
    }, {
        startHeight: 90,
        minWidth: 250
    }, (function(e, t, o) {
        t,
        r = o
    }))
}, VK.Widgets.TextLive = function(e, t, o, i, n) {
    return n = VK.Util.parseOptions(n), VK.Widgets._constructor("widget_textlive.php", e, n, {
        textlive_id: t,
        textpost_id: o,
        hash: i || ""
    }, null, {
        startHeight: o ? 176 : 167,
        minWidth: 320
    })
}, VK.Widgets.Like = function(e) {
    if (e) return e;
    var t = [];
    return e = function(e, o, i) {
        var n = VK.Util.getPageData();
        if (!VK._apiId) throw Error("VK not initialized. Please use VK.init");
        var r, s, a, d, l, p, u = {
                18: 43,
                20: 47,
                22: 51,
                24: 55,
                30: 67
            },
            c = "full" == (o = VK.extend(VK.Util.parseOptions(o), {
                allowTransparency: !0
            })).type || "button" == o.type || "vertical" == o.type || "mini" == o.type ? o.type : "full",
            h = "auto" === o.width && ("button" == c || "mini" == c),
            f = parseInt(o.height, 10) || 22,
            g = f && u[f] ? f : 22,
            m = h ? 153 : "full" == c ? Math.max(200, o.width || 350) : "button" == c ? 180 : "mini" == c ? 115 : u[g],
            _ = "vertical" == c ? 2 * f + 7 : f,
            y = {
                page: i || 0,
                url: o.pageUrl || n.url,
                type: c,
                verb: 1 == o.verb ? 1 : 0,
                color: o.color || "",
                title: o.pageTitle || n.title,
                description: o.pageDescription || n.description,
                image: o.pageImage || n.image,
                text: (o.text || "").substr(0, 140),
                h: f
            },
            v = o.ttHere || !1,
            b = !1,
            w = null;

        function V(e) {
            if ((b || e) && l && d && l && ("none" == d.style.display || "yes" == d.getAttribute("vkhidden"))) {
                w && clearTimeout(w), p && clearTimeout(p);
                var t = o.getScrollTop ? o.getScrollTop() : document.body.scrollTop || document.documentElement.scrollTop || 0,
                    i = VK.Util.getXY(r, o.fixed),
                    n = v ? 0 : i[1];
                t > i[1] - 120 && "top" != o.tooltipPos || "vertical" == c || "bottom" == o.tooltipPos ? (d.style.top = n + _ + 2 + "px", l.callMethod("show", !1, c + "_" + g)) : (d.style.top = n - 128 + "px", l.callMethod("show", !0, c + "_" + g)), VK.Util.ss(d, {
                    left: (v ? 0 : i[0]) - ("full" == c || "button" == c ? 32 : 2) + "px",
                    display: "block",
                    opacity: 1,
                    filter: "none"
                }), d.setAttribute("vkhidden", "no"), b = !0
            }
        }

        function K(e) {
            b && !e || !l || (l.callMethod("hide"), a.callMethod("hide"), w = setTimeout((function() {
                d.style.display = "none"
            }), 400))
        }
        "vertical" != c && "button" != c && "mini" != c || delete o.width, h && (y.auto_width = 1);
        var x = VK.Widgets._constructor("widget_like.php", e, o, y, {
            initTooltip: function(e) {
                l = new fastXDM.Server({
                    onInit: e ? function() {
                        V()
                    } : function() {},
                    proxy: a,
                    showBox: function(e, t) {
                        VK.Util.Box(VK.Util.getAbsUrl(e), [t.width, t.height], {
                            proxy: l
                        }).show()
                    }
                }, !1, {
                    safe: !0
                }), (d = l.append(v ? r : document.body, {
                    src: s.src + "&act=a_like_tooltip",
                    scrolling: "no",
                    allowTransparency: !0,
                    id: s.id + "_tt",
                    style: {
                        position: "absolute",
                        padding: 0,
                        display: "none",
                        opacity: .01,
                        filter: "alpha(opacity=1)",
                        border: "0",
                        width: "274px",
                        height: "130px",
                        zIndex: 5e3,
                        overflow: "hidden"
                    }
                })).setAttribute("vkhidden", "yes"), d.onmouseover = function() {
                    clearTimeout(p), b = !0
                }, d.onmouseout = function() {
                    clearTimeout(p), b = !1, p = setTimeout((function() {
                        K()
                    }), 200)
                }
            },
            showTooltip: V,
            hideTooltip: K,
            destroy: function() {
                a.destroy();
                try {
                    s.src = "about: blank;"
                } catch (e) {}
                if (s.parentNode.removeChild(s), d) {
                    try {
                        d.src = "about: blank;"
                    } catch (e) {}
                    d.parentNode.removeChild(d)
                }
                l && l.destroy()
            },
            showBox: function(e, t) {
                VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                    proxy: a
                }).show()
            },
            proxy: function() {
                l && l.callMethod.apply(l, arguments)
            }
        }, {
            startHeight: _,
            minWidth: m
        }, (function(e, t, o) {
            a = o, VK.Util.ss(r = e, {
                height: _ + "px",
                width: m + "px",
                position: "relative",
                clear: "both"
            }), VK.Util.ss(s = t, {
                height: _ + "px",
                width: m + "px",
                overflow: "hidden",
                zIndex: 150
            }), r.onmouseover = function() {
                clearTimeout(p), b = !0
            }, r.onmouseout = function() {
                clearTimeout(p), b = !1, p = setTimeout((function() {
                    K()
                }), 200)
            }
        }));
        return t.push(x), x
    }, e.destroyAll = function() {
        for (var e = null; t[0];)(e = VK.Widgets.RPC[t.pop()]) && e.methods.destroy()
    }, e
}(VK.Widgets.Like), VK.Widgets.Poll = function(e, t, o) {
    var i = VK.Util.getPageData();
    if (!o) throw Error("No poll id passed");
    var n, r = {
        poll_id: o,
        url: (t = VK.Util.parseOptions(t)).pageUrl || i.url || location.href,
        title: t.pageTitle || i.title,
        description: t.pageDescription || i.description
    };
    return t.preview && (r.is_preview = 1, delete t.preview), void 0 !== t.share && (r.share = t.share ? 1 : 0), VK.Widgets._constructor("al_widget_poll.php", e, t, r, {
        showBox: function(e, t) {
            VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                proxy: n
            }).show()
        }
    }, {
        startHeight: 144,
        minWidth: 300
    }, (function(e, t, o) {
        n = o
    }))
}, VK.Widgets.App = function(e, t, o) {
    if (!t) throw Error("No app id passed");
    o = VK.Util.parseOptions(o);
    var i, n = void 0,
        r = void 0,
        s = {
            aid: t,
            mode: parseInt(o.mode, 10) || 1
        };
    switch (s.mode) {
        case 1:
            o.width = 150, n = 251;
            break;
        case 2:
            o.width = o.width ? Math.max(200, Math.min(1e4, parseInt(o.width, 10))) : 200, r = n = 193;
            break;
        case 3:
            o.width = o.width ? Math.max(50, Math.min(1e4, parseInt(o.width, 10))) : void 0, r = n = o.height = {
                18: 18,
                20: 20,
                22: 22,
                24: 24,
                30: 30
            }[parseInt(o.height, 10) || 30]
    }
    return i = o.width, VK.Widgets._constructor("widget_app.php", e, o, s, {}, {
        startHeight: n,
        height: r,
        minWidth: i
    })
}, VK.Widgets.Community = VK.Widgets.Group = function(e, t, o) {
    if (t = VK.Util.parseOptions(t), !(o = parseInt(o, 10))) throw Error("No group_id passed");
    t.mode = parseInt(t.mode, 10).toString();
    var i, n, r = {
            gid: o,
            mode: t.mode ? t.mode : "0"
        },
        s = 3 == t.mode ? 185 : 1 == t.mode ? 141 : 0 | t.height || 290;

    function a() {
        return i.callMethod("mouseUp"), !1
    }

    function d(e) {
        return i.callMethod("mouseMove", {
            screenY: e.screenY
        }), !1
    }
    return t.wall && (r.wall = t.wall), r.color1 = t.color1 || "", r.color2 = t.color2 || "", r.color3 = t.color3 || "", r.class_name = t.class_name || "", t.no_head && (r.no_head = 1), t.no_cover && (r.no_cover = 1), t.wide && (r.wide = 1, (!t.width || t.width < 300) && (t.width = 300)), 0 | !t.width && (t.width = 200), VK.Widgets._constructor("widget_community.php", e, t, r, {
        showBox: function(e, t) {
            VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                proxy: i
            }).show()
        },
        startDrag: function() {
            n = window.document.body.style.cursor, window.document.body.style.cursor = "pointer", VK.Util.addEvent("mousemove", d), VK.Util.addEvent("mouseup", a)
        },
        stopDrag: function() {
            window.document.body.style.cursor = n, VK.Util.removeEvent("mousemove", d), VK.Util.removeEvent("mouseup", a)
        },
        auth: function() {
            VK.Auth.login(null, 1)
        }
    }, {
        minWidth: 120,
        startHeight: s
    }, (function(e, t, o) {
        i = o
    }))
}, VK.Widgets.Auth = function(e, t) {
    VK.Util.getPageData();
    if (!VK._apiId) throw Error("VK not initialized. Please use VK.init");
    return (t = VK.Util.parseOptions(t)).width || (t.width = 200), t.type ? type = 1 : type = 0, VK.Widgets._constructor("widget_auth.php", e, t, {}, {
        makeAuth: function(e) {
            if (e.session && (VK.Auth._loadState = "loaded", VK.Auth.setSession(e.session, "connected"), VK.Observer.publish("auth.loginStatus", {
                    session: e.session,
                    status: "connected"
                }), VK.Observer.unsubscribe("auth.loginStatus")), t.onAuth) t.onAuth(e);
            else {
                if (t.authUrl) var o = t.authUrl;
                else o = window.location.href; - 1 == o.indexOf("?") ? o += "?" : o += "&";
                var i = [];
                for (var n in e) "session" != n && i.push(n + "=" + decodeURIComponent(e[n]).replace(/&/g, "%26").replace(/\#/g, "%23").replace(/\?/, "%3F"));
                window.location.href = o + i.join("&")
            }
        }
    }, {
        startHeight: 134
    })
}, VK.Widgets.Subscribe = function(e, t, o) {
    if (!(o = parseInt(o, 10))) throw Error("No owner_id passed");
    var i, n = {
        oid: o
    };
    return (t = VK.Util.parseOptions(t)).mode && (n.mode = t.mode), t.soft && (n.soft = t.soft), VK.Widgets._constructor("widget_subscribe.php", e, t, n, {
        showBox: function(e, t) {
            VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                proxy: i
            }).show()
        },
        auth: function() {
            VK.Auth.login(null, 1)
        }
    }, {
        minWidth: 220,
        startHeight: 22
    }, (function(e, t, o) {
        i = o
    }))
}, VK.Widgets.ContactUs = function(e, t, o) {
    if (!(o = parseInt(o, 10))) throw Error("No group or user id passed");
    t = VK.Util.parseOptions(t);
    var i = {
        oid: o,
        height: {
            18: 18,
            20: 20,
            22: 22,
            24: 24,
            30: 30
        }[parseInt(t.height, 10) || 24],
        text: (t.text || "").substr(0, 140)
    };
    return VK.Widgets._constructor("widget_contactus.php", e, t, i, {}, {
        startHeight: i.height,
        height: i.height
    }, (function(e, t, o) {
        o
    }))
}, VK.Widgets.Bookmarks = function(e, t) {
    t = VK.Util.parseOptions(t);
    var o = {
        height: {
            18: 18,
            20: 20,
            22: 22,
            24: 24,
            30: 30
        }[parseInt(t.height, 10) || 30],
        url: t.url || window.location.href
    };
    return VK.Widgets._constructor("widget_bookmarks.php", e, t, o, {}, {
        startHeight: o.height,
        height: o.height
    }, (function(e, t, o) {
        o
    }))
}, VK.Widgets.Playlist = function(e, t, o, i, n) {
    var r, s = {
        oid: parseInt(t, 10),
        pid: parseInt(o, 10),
        hash: i || ""
    };
    if (!s.oid) throw Error("No owner id passed");
    if (!s.pid) throw Error("No playlist id passed");
    return n = VK.Util.parseOptions(n), VK.Widgets._constructor("widget_playlist.php", e, n, s, {
        showBox: function(e, t) {
            VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                proxy: r
            }).show()
        }
    }, {
        minWidth: 200
    }, (function(e, t, o) {
        r = o
    }))
}, VK.Widgets.Ads = function(e, t, o) {
    t = VK.Util.parseOptions(t), o = o || {};
    var i, n = {},
        r = {},
        s = {},
        a = document.getElementById(e),
        d = {},
        l = {},
        p = {};
    for (var u in o) {
        var c = -1 != function(e, t, o) {
            for (var i = o || 0, n = (e || []).length; i < n; i++)
                if (e[i] == t) return i;
            return -1
        }(["hash"], u) ? u : "ads_" + u;
        d[c] = o[u]
    }
    if (a && a.getBoundingClientRect) {
        a.style.width = "100%", a.style.height = "100%";
        var h = a.getBoundingClientRect();
        a.style.width = "", a.style.height = "", d.ads_ad_unit_width_auto = Math.floor(h.right - h.left), d.ads_ad_unit_height_auto = Math.floor(h.bottom - h.top)
    }
    return p.ads_ad_unit_width = 100, p.ads_ad_unit_height = 100, l.ads_ad_unit_width = parseInt(d.ads_ad_unit_width) || "auto" === d.ads_ad_unit_width && d.ads_ad_unit_width_auto || p.ads_ad_unit_width, l.ads_ad_unit_height = parseInt(d.ads_ad_unit_height) || "auto" === d.ads_ad_unit_height && d.ads_ad_unit_height_auto || p.ads_ad_unit_height, d.ads_handler && (l.ads_handler = d.ads_handler), d.ads_handler_empty_html && (l.ads_handler_empty_html = d.ads_handler_empty_html), delete d.ads_handler, delete d.ads_handler_empty_html, n.act = "ads_web", n.url = location.href, VK.extend(n, d), t.noDefaultParams = !0, t.width = l.ads_ad_unit_width, t.allowTransparency = !0, r.startHeight = l.ads_ad_unit_height, r.minWidth = l.ads_ad_unit_width, s.adsOnInit = function(e, o) {
        VK.Widgets.loading(a, !1),
            function(e) {
                if (!e) return;
                for (var t in e) {
                    var o = e[t];
                    "ads_ad_unit_width" === t || "ads_ad_unit_height" === t ? t in d || (l[t] = parseInt(o) || "auto" === o && d[t + "_auto"] || p[t]) : t in l || (l[t] = o)
                }
            }(o), t.onAdsReady && t.onAdsReady.apply(t.onAdsReady, Array.prototype.slice.call(arguments));
        ! function(e) {
            var t = function(e) {
                var t = !1;
                try {
                    if (!e) return !1;
                    var o = !1;
                    if (d(e)) o = e;
                    else if (l(e)) {
                        var i = e.split(".");
                        o = window;
                        for (var n = 0, r = i.length; n < r && (o = o[i[n]]); n++);
                        if (!o) {
                            "function" === e.substr(0, 8) && (e = "return " + e + ";");
                            var s = new Function(e)();
                            d(s) ? o = s : t = s
                        }
                    }
                    if (o) {
                        var a = Array.prototype.slice.call(arguments, 1);
                        t = o.apply(o, a)
                    }
                } catch (e) {
                    try {
                        console.error(e)
                    } catch (e) {}
                }
                return t;

                function d(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }

                function l(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                }
            }(l.ads_handler, e);
            if (e <= 0 && !0 !== t) {
                try {
                    console.log("VK: ad_unit_id = " + d.ads_ad_unit_id, ", errorCode = ", e)
                } catch (e) {}! function(e, t, o) {
                    if (!e) return;
                    if (!a) return;
                    t = t ? t + "px" : "", o = o ? o + "px" : "";
                    var n = '<html><head></head><body style="padding: 0; margin: 0;"><div>' + e + "</div></body></html>",
                        r = document.createElement("iframe");

                    function s() {
                        if (!o) try {
                            var e = r.contentWindow.document.body.firstChild.getBoundingClientRect(),
                                t = Math.ceil(e.bottom - e.top);
                            t && (r.style.height = t, a.style.height = t)
                        } catch (e) {}
                    }
                    r.onload = s, r.id = (i ? i.id : "vkwidget-" + Math.round(1e6 * Math.random())) + "_ads_html_handler", r.src = "about:blank", r.width = "100%", r.height = "100%", r.scrolling = "no", r.frameBorder = "0", r.allowTransparency = !0, r.style.overflow = "hidden", r.style.width = t, r.style.height = o, a.style.width = t, a.style.height = o, a.appendChild(r), r.contentWindow.vk_ads_html_handler = n, r.src = 'javascript:window["vk_ads_html_handler"]'
                }(l.ads_handler_empty_html, l.ads_ad_unit_width, l.ads_ad_unit_height)
            }
        }(e)
    }, s.newAdsOnInitLoader = function(e) {
        ! function(e) {
            if ("vk__adsLight" in window) window.vk__adsLight && vk__adsLight.userHandlers && vk__adsLight.userHandlers.onInit && vk__adsLight.userHandlers.onInit(!1);
            else {
                window.vk__adsLight = !1;
                var t = VK.Api && VK.Api.attachScript || VK.addScript;
                if (Array.isArray(e)) e.forEach((function(e) {
                    t(VK._domain.base + e)
                }));
                else {
                    var o = parseInt(e);
                    t(VK._domain.base + jsc("/web/ads_light.js?") + o)
                }
            }
        }(JSON.parse(e.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&")))
    }, VK.Widgets._constructor("ads_rotate.php", e, t, n, s, r, (function(e, t, o) {
        a = e, i = t, o
    }))
}, VK.Widgets.AllowMessagesFromCommunity = function(e, t, o) {
    if (!(o = parseInt(o, 10)) || o < 0) throw Error("No group id passed");
    t = VK.Util.parseOptions(t);
    var i = {
        height: {
            22: 22,
            24: 24,
            30: 30
        }[parseInt(t.height, 10) || 24],
        key: t.key ? t.key.substr(0, 256) : "",
        group_id: o
    };
    return VK.Widgets._constructor("widget_allow_messages_from_community.php", e, t, i, {}, {
        startHeight: i.height,
        height: i.height
    }, (function(e, t, o) {
        o
    }))
}, VK.Widgets.Article = function(e, t, o) {
    var i, n = {
        url: t
    };
    return o = VK.Util.parseOptions(o), VK.Widgets._constructor("widget_article.php", e, o, n, {
        showBox: function(e) {
            VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                proxy: i
            }).show()
        }
    }, {}, (function(e, t, o) {
        i = o
    }))
}, VK.Widgets.Podcast = function(e, t, o) {
    var i = {
        episode: t
    };
    return o = VK.Util.parseOptions(o), VK.Widgets._constructor("widget_podcast.php", e, o, i, {
        showBox: function(e) {
            VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                proxy: rpc
            }).show()
        }
    }, {
        minWidth: 300,
        startHeight: 150
    })
}, VK.Widgets.CommunityMessages = function(e) {
    if (e) return e;
    var t = {},
        o = {},
        i = {
            no_button: {
                width: 0,
                height: 0
            },
            blue_circle: {
                width: 50,
                height: 50,
                margin: {
                    bottom: 20
                }
            }
        },
        n = {
            left: {
                bottom: 0,
                left: 20
            },
            right: {
                bottom: 0,
                right: 20
            }
        };
    return e = function(r, s, a) {
        (a = VK.Util.parseOptions(a)).width = 300, a.height = 399, a.expandTimeout = parseInt(a.expandTimeout) || 0;
        var d = {
            gid: s
        };
        a.expanded = parseInt(a.expanded) || 0, (!a.from_dev && null != function(e) {
            if (!window.localStorage) return null;
            return localStorage.getItem("vk_community_widget_" + e)
        }("expanded") || a.expanded) && (a.shown = 1), a.shown && (d.shown = 1), a.welcomeScreen || (d.disable_welcome_screen = 1), d.ref_source_info = a.ref_source_info, d.ref_source_link = location.href;
        var l = a.buttonType; - 1 == Object.keys(i).indexOf(l) && (l = "blue_circle"), "no_button" == l && (a.disableButtonTooltip = 1), a.disableButtonTooltip && (d.disable_tooltip = 1), a.tooltipButtonText && (d.tooltip_text = a.tooltipButtonText), a.disableNewMessagesSound && (d.disable_new_messages_sound = 1), t[r] && e.destroy(r), d.domain = document.domain, a.no_loading = 1, a.disableNewMessagesSound && a.disableExpandChatSound || (a.enable_autoplay = 1), a.disableExpandChatSound && (d.disable_expand_chat_sound = 1), a.expandTimeout && (d.expand_timeout = a.expandTimeout), a.__alpha_new_widget && (d.__alpha_new_widget = 1);
        var p, u, c, h = !1,
            f = 0,
            g = [0, 0];
        V(a.widgetPosition), d.button_position = a.widgetPosition, window.addEventListener("message", (function(e) {
            var t = document.getElementById(r),
                o = t.getElementsByTagName("iframe")[0];
            if (e.data && "VKReforgedWidgetResize" === e.data.action) {
                var i = e.data.params.width,
                    n = e.data.params.height;
                o.width = i, o.height = n, t.style.width = i + "px", t.style.height = n + "px", t.style.margin = n > 50 ? "0" : "0 0 20px"
            }
            e.data && "VKReforgedWidgetLogout" === e.data.action && (o.parentNode.removeChild(o), t.style = {})
        }), !1);
        var m = 0,
            _ = {};

        function y(e) {
            clearTimeout(o.titleTimer), o.titleTimer = setTimeout((function() {
                1 == o.changeTitleMode ? document.title = o.oldTitle || "" : document.title = o.title, o.changeTitleMode = 1 == o.changeTitleMode ? 0 : 1, y()
            }), e ? 0 : 1500)
        }

        function v() {
            a.disableTitleChange || (clearTimeout(o.titleTimer), o.oldTitle ? document.title = o.oldTitle : null === o.oldTitle && (document.title = ""), o.title = "")
        }

        function b() {
            var e = document.getElementById(r),
                t = e.getElementsByTagName("iframe")[0];
            e.style.width = t.width = "372px", e.style.height = t.height = "399px", e.style.margin = "0px 0px 0px 0px"
        }

        function w() {
            var e = document.getElementById(r),
                t = e.getElementsByTagName("iframe")[0],
                o = i[l],
                n = o.width + g[0],
                s = Math.max(o.height, g[1]);
            e.style.width = n + "px", e.style.height = s + "px";
            var a = o.margin ? o.margin : {};
            e.style.margin = "0px " + (a.right || 0) + "px " + (a.bottom || 0) + "px 0px", t && (t.style.boxShadow = "none", t.width = n, t.height = s)
        }

        function V(e) {
            p = e, -1 == Object.keys(n).indexOf(p) && (p = "right"), K(), x("changeButtonPosition", p)
        }

        function K() {
            var e = document.getElementById(r);
            if (e) {
                var t = ["left", "right", "top", "bottom"];
                for (var o in t) e.style[t[o]] = "";
                var i = n[p];
                for (var o in i) e.style[o] = i[o] + "px";
                m && (f ? b() : w())
            }
        }

        function x() {
            u && u.callMethod.apply(u, arguments)
        }

        function I(e) {
            e && "[object Object]" === Object.prototype.toString.call(e) || (e = {}), null == e.welcomeScreen && (e.welcomeScreen = a.welcomeScreen);
            var t = document.getElementById(r).getElementsByTagName("iframe")[0];
            t && t.contentWindow.postMessage({
                handler: "VKReforgedWidgetExpand"
            }, VK._domain.base), clearTimeout(_.showTimer), x("expand", e)
        }

        function C(e) {
            x("setSourceData", VK.extend({
                link: location.href
            }, e))
        }
        return t[r] = VK.Widgets._constructor("reforged_widget.php", r, a, d, {
            onStartLoading: function() {
                var e = document.getElementById(r);
                e.style.position = "fixed", e.style["z-index"] = 1e4, K()
            },
            onReady: function() {
                m = 1, a.expandTimeout > 0 && !a.shown && (_.showTimer = setTimeout((function() {
                    I({
                        playSong: !a.disableExpandChatSound,
                        noSaveState: 1
                    })
                }), a.expandTimeout))
            },
            showBox: function(e) {
                if (h) try {
                    h.hide();
                    try {
                        h.iframe.src = "about: blank;"
                    } catch (e) {}
                    h.iframe.parentNode.removeChild(h.iframe)
                } catch (e) {}(h = VK.Util.Box(VK.Util.getAbsUrl(e), [], {
                    proxy: u
                }, {
                    zIndex: 10002
                })).show()
            },
            setTooltipSize: function(e) {
                g = e, f || w()
            },
            expand: function(e) {
                var t, o;
                e = e || {}, f = 1, b(), e.noSaveState || (t = "expanded", o = 1, window.localStorage && localStorage.setItem("vk_community_widget_" + t, o))
            },
            minimize: function() {
                setTimeout((function() {
                    var e;
                    f = 0, w(), e = "expanded", window.localStorage && localStorage.removeItem("vk_community_widget_" + e)
                }), 120)
            },
            canNotWrite: function(e) {
                a.onCanNotWrite && a.onCanNotWrite(e)
            },
            destroy: function() {
                u.destroy();
                try {
                    c.src = "about: blank;"
                } catch (e) {}
                try {
                    c.parentNode.removeChild(c)
                } catch (e) {}
            },
            fatalError: function(t, o) {
                var i = {
                    code: t,
                    widget: 2,
                    public_id: o
                };
                1903 == t && (i.referrer_domain = document.domain);
                var n = [];
                for (var s in i) n.push(s + "=" + i[s]);
                e.destroy(r), VK.Util.Box(VK.Util.getAbsUrl("blank.php?" + n.join("&"))).show()
            },
            setPageTitle: function(e) {
                a.disableTitleChange || (v(), o.oldTitle = document.title || null, o.title = e, o.changeTitleMode = 0, y(1))
            },
            resetPageTitle: function() {
                v()
            },
            newMessage: function() {
                !document.hasFocus || document.hasFocus() || a.disableNewMessagesSound || x("playNewMsgSong")
            }
        }, {}, (function(e, t, o) {
            u = o, c = t, a.shown ? b() : w()
        })), VK.Util.addEvent("popstate", C.bind(this, {}), window), VK.Util.addEvent("hashchange", C.bind(this, {}), window), {
            expand: I,
            minimize: function() {
                x("minimize");
                var e = document.getElementById(r).getElementsByTagName("iframe")[0];
                e && e.contentWindow.postMessage({
                    handler: "VKReforgedWidgetMinimize"
                }, VK._domain.base)
            },
            destroy: function() {
                v();
                var t = document.getElementById(r).getElementsByTagName("iframe")[0];
                t && t.contentWindow.postMessage({
                    handler: "VKReforgedWidgetDestroy"
                }, VK._domain.base), e.destroy(r)
            },
            setSourceData: C,
            changeButtonPosition: V,
            stopTitleAnimation: v
        }
    }, e.destroy = function(e) {
        if (t[e]) {
            var o = VK.Widgets.RPC[t[e]];
            o && o.methods.destroy(), delete t[e]
        }
    }, e.expand = function(e) {
        console.log(t[e])
    }, e
}(VK.Widgets.CommunityMessages), VK.Widgets._constructor = function(e, t, o, i, n, r, s, a, d) {
    var l = document.getElementById(t);
    if (a = a || ++VK.Widgets.count, !l) {
        if ((d = d || 0) > 10) throw Error("VK.Widgets: object #" + t + " not found.");
        return setTimeout((function() {
            VK.Widgets._constructor(e, t, o, i, n, r, s, a, d + 1)
        }), 500), a
    }
    r = r || {}, n = n || {}, (o = o || {}).preview && (i.preview = 1, delete o.preview);
    var p, u, c, h, f, g, m = "auto" === o.width ? 0 | (l.clientWidth || l.offsetWidth || r.minWidth) : parseInt(o.width || 0, 10);
    "silent_code" === i.act ? (m = "1px", l.style.opacity = 0, l.style.display = "none", l.style.position = "absolute") : m = m ? Math.max(r.minWidth || 200, Math.min(r.maxWidth || 1e4, m)) + "px" : "100%", l.style.width = m, o.height ? (i.height = o.height, l.style.height = o.height + "px") : l.style.height = (r.startHeight || 200) + "px", "100%" === m && (i.startWidth = 0 | (l.clientWidth || l.offsetWidth)), i.url || (i.url = o.pageUrl || location.href.replace(/#.*$/, "")), p = VK._domain.base + "/" + e, u = "", o.noDefaultParams || (u += "&app=" + (VK._apiId || "0") + "&width=" + encodeURIComponent(m)), u += "&_ver=" + VK.version, VK._iframeAppWidget && (i.iframe_app = 1);
    var _ = VK.Util.getPageData();
    for (g in i.url = i.url || _.url || "", i.referrer = i.referrer || document.referrer || "", i.title = i.title || _.title || document.title || "", i) {
        if ("title" == g && i[g].length > 80 && (i[g] = i[g].substr(0, 80) + "..."), "description" == g && i[g].length > 160 && (i[g] = i[g].substr(0, 160) + "..."), "number" == typeof i[g]) c = i[g];
        else try {
            c = encodeURIComponent(i[g])
        } catch (e) {
            c = ""
        }
        u += "&" + g + "=" + c
    }
    p += "?" + (u += "&" + (+new Date).toString(16)).substr(1), n.onStartLoading && n.onStartLoading(), o.no_loading || VK.Widgets.loading(l, !0), n.showLoader = function(e) {
        VK.Util.Loader(e)
    }, n.publish = function() {
        var e = Array.prototype.slice.call(arguments);
        e.push(a), VK.Observer.publish.apply(VK.Observer, e)
    }, n.onInit = function() {
        VK.Widgets.loading(l, !1), n.onReady && n.onReady(), o.onReady && o.onReady()
    }, n.resize = function(e, t) {
        l.style.height = e + "px";
        var o = document.getElementById("vkwidget" + a);
        o && (o.style.height = e + "px")
    }, n.resizeWidget = function(e, t) {
        e = parseInt(e), t = parseInt(t);
        var i = document.getElementById("vkwidget" + a);
        isFinite(e) && (l.style.width = e + "px", i && (i.style.width = e + "px")), isFinite(t) && (l.style.height = t + "px", i && (i.style.height = t + "px")), o.onResizeWidget && o.onResizeWidget()
    }, n.updateVersion = function(e) {
        e > 1 && VK.Api.attachScript("//vk.com/js/api/openapi_update.js?" + parseInt(e))
    }, h = VK.Widgets.RPC[a] = new fastXDM.Server(n, (function(e) {
        return !e || (e = e.toLowerCase()).match(/(\.|\/)vk\.com($|\/|\?)/)
    }), {
        safe: !0
    });
    var y = {
        overflow: "hidden"
    };
    o.custom_style && "object" == typeof o.custom_style && (y = VK.extend(y, o.custom_style));
    var v = "";
    return o.enable_autoplay && (v = 'allow="autoplay"'), f = VK.Widgets.RPC[a].append(l, {
        src: p,
        width: -1 != m.indexOf("%") ? m : parseInt(m) || m,
        height: r.startHeight || "100%",
        scrolling: "no",
        id: "vkwidget" + a,
        allowTransparency: o.allowTransparency || !1,
        style: y
    }, v), s && setTimeout((function() {
        s(l, f || l.firstChild, h)
    }), 10), a
}), VK.Util || (VK.Util = {
    getPageData: function() {
        if (!VK._pData) {
            var e, t = document.getElementsByTagName("meta"),
                o = {},
                i = ["description", "title", "url", "image", "app_id"];
            for (var n in t)
                if (t[n].getAttribute && t[n].getAttribute && ((e = t[n].getAttribute("name")) || (e = t[n].getAttribute("property"))))
                    for (var r in i) e != i[r] && e != "og:" + i[r] && e != "vk:" + i[r] || (o[i[r]] = t[n].content);
            o.app_id && !VK._apiId && (VK._apiId = o.app_id), o.title = o.title || document.title || "", o.description = o.description || "", o.image = o.image || "", !o.url && VK._iframeAppWidget && VK._apiId && (o.url = "/app" + VK._apiId, VK._browserHash && (o.url += VK._browserHash));
            var s = location.href.replace(/#.*$/, "");
            o.url && o.url.indexOf(s) || (o.url = s), VK._pData = o
        }
        return VK._pData
    },
    getStyle: function(e, t) {
        var o, i = document.defaultView || window;
        if (i.getComputedStyle) {
            t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
            var n = i.getComputedStyle(e, null);
            n && (o = n.getPropertyValue(t))
        } else if (e.currentStyle) {
            var r = t.replace(/\-(\w)/g, (function(e, t) {
                return t.toUpperCase()
            }));
            o = e.currentStyle[t] || e.currentStyle[r]
        }
        return o
    },
    getAbsUrl: function(e) {
        return VK._domain.base + "/" + e.replace(/^\s*\/?/, "")
    },
    parseOptions: function(e) {
        return "[object Object]" !== Object.prototype.toString.call(e) && (e = {}), e.base_domain && (VK._domain.base = e.base_domain), e.login_domain && (VK._domain.login = e.login_domain), e
    },
    getXY: function(e, t) {
        if (e && void 0 !== e) {
            var o = 0,
                i = 0;
            if (void 0 !== e.getBoundingClientRect) {
                var n = e.getBoundingClientRect();
                o = n.left, i = n.top, t = !0
            } else if (e.offsetParent)
                do {
                    o += e.offsetLeft, i += e.offsetTop, t && (o -= e.scrollLeft, i -= e.scrollTop)
                } while (e = e.offsetParent);
            return t && (i += window.pageYOffset || window.scrollNode && scrollNode.scrollTop || document.documentElement.scrollTop, o += window.pageXOffset || window.scrollNode && scrollNode.scrollLeft || document.documentElement.scrollLeft), [o, i]
        }
    },
    Loader: function e(t) {
        e.loader || ((e.loader = document.createElement("DIV")).innerHTML = '<style type="text/css">        @-webkit-keyframes VKWidgetsLoaderKeyframes {0%{opacity: 0.2;}30%{opacity: 1;}100%{opacity: 0.2;}}        @keyframes VKWidgetsLoaderKeyframes {0%{opacity: 0.2;}30%{opacity: 1;}100%{opacity: 0.2;}}        .VKWidgetsLoader div {width: 7px;height: 7px;-webkit-border-radius: 50%;-khtml-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;background: #fff;top: 21px;position: absolute;z-index: 2;-o-transition: opacity 350ms linear; transition: opacity 350ms linear;opacity: 0.2;-webkit-animation-duration: 750ms;-o-animation-duration: 750ms;animation-duration: 750ms;-webkit-animation-name: VKWidgetsLoaderKeyframes;-o-animation-name: VKWidgetsLoaderKeyframes;animation-name: VKWidgetsLoaderKeyframes;-webkit-animation-iteration-count: infinite;-o-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-transform: translateZ(0);transform: translateZ(0);}</style><div class="VKWidgetsLoader" style="position: fixed;left: 50%;top: 50%;margin: -25px -50px;z-index: 1002;height: 50px;width: 100px;"><div style="left: 36px;-webkit-animation-delay: 0ms;-o-animation-delay: 0ms;animation-delay: 0ms;"></div><div style="left: 47px;-webkit-animation-delay: 180ms;-o-animation-delay: 180ms;animation-delay: 180ms;"></div><div style="left: 58px;-webkit-animation-delay: 360ms;-o-animation-delay: 360ms;animation-delay: 360ms;"></div><span style="display: block;background-color: #000;-webkit-border-radius: 4px;-khtml-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;-webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);-moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);position: absolute;left: 0;top: 0;bottom: 0; right: 0;z-index: 1;opacity: 0.7;"></span></div>', document.body.insertBefore(e.loader, document.body.firstChild)), e.loader.style.display = t ? "block" : "none"
    },
    Box: function(e, t, o, i) {
        o = o || {};
        var n = document.body.style.overflow;
        VK.Util.Loader(!0);
        var r = /(^|\.)(vk\.com|vkontakte\.ru)$/.test(location.hostname),
            s = new fastXDM.Server(VK.extend(o, {
                onInit: function() {
                    a.style.background = "transparent", a.style.visibility = "visible", document.body.style.overflow = "hidden", a.setAttribute("allowfullscreen", 1), r && (document.body.className += " layers_shown"), VK.Util.Loader()
                },
                hide: function() {
                    a.style.display = "none"
                },
                tempHide: function() {
                    a.style.left = "-10000px", a.style.top = "-10000px", a.style.width = "10px", a.style.height = "10px", r && (document.body.className = document.body.className.replace(/\b\s*?layers_shown\s*\b/, " ")), document.body.style.overflow = n
                },
                destroy: function() {
                    try {
                        a.src = "about: blank;"
                    } catch (e) {}
                    a.parentNode.removeChild(a), r && (document.body.className = document.body.className.replace(/\b\s*?layers_shown\s*\b/, " ")), document.body.style.overflow = n
                },
                resize: function(e, t) {}
            }, !0), !1, {
                safe: !0
            }),
            a = s.append(document.body, {
                src: e.replace(/&amp;/g, "&"),
                scrolling: "no",
                allowTransparency: !0,
                style: {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    zIndex: i && i.zIndex || 1002,
                    background: VK._domain.base + "/images/upload.gif center center no-repeat transparent",
                    padding: "0",
                    border: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    visibility: "hidden"
                }
            });
        return {
            show: function(e, t) {
                a.style.display = "block", document.body.style.overflow = "hidden"
            },
            hide: function() {
                a.style.display = "none", document.body.style.overflow = n
            },
            iframe: a,
            rpc: s
        }
    },
    addEvent: function(e, t, o) {
        (o = o || window.document).addEventListener ? o.addEventListener(e, t, !1) : o.attachEvent && o.attachEvent("on" + e, t)
    },
    removeEvent: function(e, t, o) {
        (o = o || window.document).removeEventListener ? o.removeEventListener(e, t, !1) : o.detachEvent && o.detachEvent("on" + e, t)
    },
    ss: function(e, t) {
        VK.extend(e.style, t, !0)
    }
}), VK.Retargeting || (VK.Retargeting = {
    pixelCode: null,
    Init: function(e) {
        return this.pixelCode = e, this
    },
    Event: function(e) {
        if (this.pixelCode)
            if (IS_BRIDGE_AVAILABLE) _bridgeSend("VKWebAppRetargetingPixel", {
                pixel_code: this.pixelCode,
                event: e
            });
            else {
                var t = VK.Util.getPageData(),
                    o = t.url.substr(0, 500),
                    i = t.title && t.title.substr(0, 500) || "";
                (window.Image ? new Image : document.createElement("img")).src = VK._domain.base + "/rtrg?p=" + this.pixelCode + (e ? "&event=" + encodeURIComponent(e) : "") + (o ? "&metatag_url=" + encodeURIComponent(o) : "") + (i ? "&metatag_title=" + encodeURIComponent(i) : "")
            }
    },
    Hit: function() {
        this.Event()
    },
    Add: function(e) {
        this.pixelCode && e && (IS_BRIDGE_AVAILABLE ? _bridgeSend("VKWebAppRetargetingPixel", {
            pixel_code: this.pixelCode,
            target_group_id: e
        }) : (window.Image ? new Image : document.createElement("img")).src = VK._domain.base + "/rtrg?p=" + this.pixelCode + "&audience=" + encodeURIComponent(e))
    },
    ProductEvent: function(e, t, o, i) {
        if (this.pixelCode && t && e) {
            var n = !0;
            void 0 !== (i = i || {}).show_errors && (n = !!i.show_errors);
            var r = "0";
            void 0 !== i.errors_ignore && (r = i.errors_ignore ? "1" : "0");
            var s = VK.Util.getPageData(),
                a = s.url.substr(0, 500),
                d = s.title && s.title.substr(0, 500) || "",
                l = VK._domain.base + "/rtrg",
                p = o ? JSON.stringify(o) : "",
                u = {
                    p: this.pixelCode,
                    products_event: t,
                    price_list_id: e,
                    e: "1",
                    i: r,
                    metatag_url: a,
                    metatag_title: d
                };
            if (p && (u.products_params = p), IS_BRIDGE_AVAILABLE) _bridgeSend("VKWebAppRetargetingPixel", {
                pixel_code: this.pixelCode,
                price_list_id: e,
                products_event: t,
                products_params: p
            });
            else {
                var c = l + "?" + Object.keys(u).map((function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(u[e])
                })).join("&");
                VK.Api.makeRequest(c, this.onDone.bind(this, n))
            }
        }
    },
    onDone: function(e, t) {
        if (t && e) {
            var o;
            try {
                o = JSON.parse(t)
            } catch (e) {
                return
            }
            o && o.errors && this.showErrors(o.errors)
        }
    },
    showErrors: function(e) {
        if (e || e.length) {
            var t = "VK Pixel Error (" + this.pixelCode + "): ";
            if ("string" != typeof e) {
                var o = e.length;
                if (o)
                    for (var i = 0; i < o; i++) console.error(t + e[i])
            } else console.error(t + e)
        }
    }
}), VK.Pixel || (VK.Pixel = function(e) {
    if (this.constructor != VK.Pixel) throw Error("VK.Pixel was called without 'new' operator");
    return VK.extend(this, VK.Retargeting), this.pixelCode = e, this.Goal = function(t, o) {
        return VK.Goal(t, o, e)
    }, this
}), VK.Goal || (VK.Goal = function(e, t, o) {
    var i = o || VK.Retargeting.pixelCode;
    if (i && "string" == typeof i) {
        var n = e || "conversion";
        if ("string" == typeof n) {
            var r = (t || {}).value || 0;
            if ("string" == typeof r) {
                if (parseFloat(r).toString() !== r) return void console.error("Error argument: parameters.value not a number or valid number string")
            } else if ("number" != typeof r) return void console.error("Error argument: parameters.value not a number or valid number string");
            if (IS_BRIDGE_AVAILABLE) _bridgeSend("VKWebAppConversionHit", {
                pixel_code: i,
                conversion_event: n,
                conversion_value: r
            });
            else {
                var s = VK._domain.base + "/rtrg",
                    a = {
                        p: i,
                        e: "1",
                        c: n,
                        v: r
                    },
                    d = s + "?" + Object.keys(a).map((function(e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(a[e])
                    })).join("&");
                VK.Api.makeRequest(d, VK.Retargeting.onDone.bind(VK.Retargeting, !0))
            }
        } else console.error("Error argument: conversionName not a string")
    } else console.error("Error argument: pixelCode not a string. Use VK.Retargeting.Init or VK.Pixel to initialize pixel")
}), window.vkAsyncInit && setTimeout(vkAsyncInit, 0), window.vkAsyncInitCallbacks && vkAsyncInitCallbacks.length && setTimeout((function() {
    for (var e; e = vkAsyncInitCallbacks.pop();) try {
        e()
    } catch (e) {
        try {
            console.error(e)
        } catch (e) {}
    }
}), 0);
try {
    stManager.done("api/openapi.js")
} catch (e) {}