(function() {
    this.CTS = function() {
        function e() {}
        return e
    }(), window.CTS.Containers = function() {
        function e() {}
        return e.NO_REPLACEMENTS_CONTAINER_SELECTOR = ".ct-pandora-container", e.isDescendant = function(e, n) {
            var o;
            for (o = n.parentNode; null != o;) {
                if (o === e) return !0;
                o = o.parentNode
            }
            return !1
        }, e.getContainers = function(e) {
            var r, t, i, n, s, a, c, u, o, C, l, S, T, _, f, E, d, h, g, m, O, I, R, P, p, N;
            for (c = document.getElementsByTagName("DIV"), N = new RegExp(CTS.Common.mainPart(e).split("").join("\\D*")), i = function() {
                    var e, n, o;
                    for (o = [], e = 0, n = c.length; e < n; e++) a = c[e], N.test(a.textContent || a.innerText) && o.push(a);
                    return o
                }(), s = [], C = 0, S = i.length; C < S; C++) u = i[C], s.push(0);
            for (u = l = 0, T = i.length; l < T; u = ++l)
                for (R = i[u], o = g = 0, _ = i.length; g < _; o = ++g) n = i[o], CTS.Containers.isDescendant(R, n) && s[u]++;
            for (P = function() {
                    var e, n, o;
                    for (o = [], u = n = 0, e = i.length; n < e; u = ++n) t = i[u], 0 === s[u] && o.push(t);
                    return o
                }(), m = 0, f = (r = P).length; m < f; m++) t = P[m], r = r.concat(jQuery(t).find("*").filter(function() {
                return N.test(this.textContent || this.innerText)
            }).get());
            for (s = [], O = 0, E = r.length; O < E; O++) u = r[O], s.push(0);
            for (u = I = 0, d = r.length; I < d; u = ++I)
                for (R = r[u], o = p = 0, h = r.length; p < h; o = ++p) n = r[o], CTS.Containers.isDescendant(R, n) && s[u]++;
            return function() {
                var e, n, o;
                for (o = [], u = n = 0, e = r.length; n < e; u = ++n) t = r[u], 0 !== s[u] || "SCRIPT" === t.tagName || jQuery(t).closest(CTS.Containers.NO_REPLACEMENTS_CONTAINER_SELECTOR).is("*") || o.push(t);
                return o
            }()
        }, e
    }(), window.CTS.Common = function() {
        function r() {}
        return r.JQUERY_VERSION = "3.5.1", r.SCRIPT_DISABLED = !1, r.WITH_PAGE_REGEXP = !1, r.DISABLE_SCRIPT_COOKIE_NAME = "ct_disabled", r.WITH_DEBUG_PRINT = !1, r.scriptEnabled = function() {
            return !r.scriptDisabled() && r.enabledForCurrentVisitor()
        }, r.enabledForCurrentVisitor = function() {
            return null == window.CTS.Cookie.getCookie(r.DISABLE_SCRIPT_COOKIE_NAME, !1) || (console.log("\u0441\u0435\u0440\u0432\u0438\u0441 Call-Tracking.BY \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"), !1)
        }, r.disableScriptForCurrentVisitor = function() {
            var e;
            return e = window.CTS.Cookie.SET_FOR_WILDCARD_DOMAIN, window.CTS.Cookie.SET_FOR_WILDCARD_DOMAIN = !0, window.CTS.Cookie.setCookie(r.DISABLE_SCRIPT_COOKIE_NAME, !0, 5256e3), window.CTS.Cookie.SET_FOR_WILDCARD_DOMAIN = e
        }, r.enableScriptForCurrentVisitor = function() {
            var e;
            return e = window.CTS.Cookie.SET_FOR_WILDCARD_DOMAIN, window.CTS.Cookie.SET_FOR_WILDCARD_DOMAIN = !0, window.CTS.Cookie.delCookie(r.DISABLE_SCRIPT_COOKIE_NAME), window.CTS.Cookie.SET_FOR_WILDCARD_DOMAIN = e
        }, r.scriptDisabled = function() {
            return r.SCRIPT_DISABLED
        }, r.withCampaignsForSpecificPages = function() {
            return r.WITH_PAGE_REGEXP
        }, r.mainPart = function(e) {
            return 13 === e.length ? e.slice(4) : e.slice(2)
        }, r.mobilecheck = function() {
            return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent)
        }, r.requestFromOutSide = function() {
            return !r.requestBetweenPages()
        }, r.requestBetweenSubDomains = function() {
            return r.referrerDomainStr() !== document.domain.replace(/^www\./, "") && r.fetchMainDomain(r.referrerDomainStr()) === r.fetchMainDomain(document.domain.replace(/^www\./, ""))
        }, r.fetchMainDomain = function(e) {
            return e.split(".")[e.split(".").length - 2] + "." + e.split(".")[e.split(".").length - 1]
        }, r.requestBetweenPages = function() {
            return r.referrerDomainStr().match(new RegExp("^" + document.domain.replace(/^www\./, "")))
        }, r.pageWasReloaded = function() {
            return window.performance.navigation && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD || window.performance.getEntriesByType("navigation").map(function(e) {
                return e.type
            }).includes("reload")
        }, r.backNavigationWas = function() {
            return window.performance.navigation && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD || window.performance.getEntriesByType("navigation").map(function(e) {
                return e.type
            }).includes("back_forward")
        }, r.referrerDomainStr = function() {
            return document.referrer.replace(/^(https?):\/\//, "").replace(/^www\./, "").split("/")[0]
        }, r.withjQueryCheck = function(e) {
            var n, o;
            return null == window.jQuery ? (o = "undefined" != typeof $ && null !== $ ? $ : void 0, (n = document.createElement("script")).src = "//ajax.googleapis.com/ajax/libs/jquery/" + r.JQUERY_VERSION + "/jquery.min.js", n.async = !0, n.onload = n.onreadystatechange = function() {
                return e(), o
            }, document.getElementsByTagName("head")[0].appendChild(n)) : e()
        }, r.isEmpty = function(e) {
            var n;
            if (null === e) return !0;
            if (0 < e.length) return !1;
            if (0 === e.length) return !0;
            for (n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) return !1;
            return !0
        }, r.encodeString = function(e) {
            return null != window.btoa ? window.btoa(e) : e
        }, r.decodeString = function(e) {
            return null != window.atob ? window.atob(e) : e
        }, r.phoneNumberToFormattedStr = function(e, n, o) {
            var r;
            return null == n && (n = "-"), null == o && (o = !0), r = e.slice(6, 9) + n + e.slice(9, 11) + n + e.slice(11, 13), o ? "+375 (" + e.slice(4, 6) + ") " + r : "8 (0" + e.slice(4, 6) + ") " + r
        }, r.logDebugInfo = function(e) {
            if (window.CTS.Common.WITH_DEBUG_PRINT) return console.log(e)
        }, r
    }(), window.CTS.Cookie = function() {
        function s() {}
        return s.SET_FOR_WILDCARD_DOMAIN = !1, s.setCookie = function(e, n, o, r) {
            var t, i;
            return null == r && (r = !s.SET_FOR_WILDCARD_DOMAIN), i = (t = s.cookieExpirationTime(o)) ? "expires=" + t.toGMTString() + ";" : "", document.cookie = s.cookieName(e, r) + "=" + n + ";" + i + "path=/;domain=" + s.cookieDomain(r) + ";"
        }, s.getCookie = function(e, n) {
            var o, r, t, i, s;
            for (null == n && (n = !this.SET_FOR_WILDCARD_DOMAIN), s = this.cookieName(e, n) + "=", t = 0, i = (r = document.cookie.split(";")).length; t < i; t++)
                if (0 === (o = (o = r[t]).replace(/^\s+|\s+$/g, "")).indexOf(s)) return o.substring(s.length, o.length);
            return null
        }, s.delCookie = function(e, n) {
            return null == n && (n = !this.SET_FOR_WILDCARD_DOMAIN), document.cookie = this.cookieName(e, n) + "=;path=/;domain=" + this.cookieDomain(n) + ";expires=Thu, 01 Jan 1990 00:00:01 GMT;"
        }, s.cookieDomain = function(e) {
            return e ? document.domain.replace(/^www\./, "") : "." + document.domain.replace(/^www\./, "").split(".").slice(-2).join(".")
        }, s.cookieName = function(e, n) {
            return n ? document.domain.replace(/^www\./, "").split(".")[0] + "_" + e : e
        }, s.setCokieDomainPolicy = function(e) {
            return s.SET_FOR_WILDCARD_DOMAIN = "wildcard" === e
        }, s.cookieExpirationTime = function(e) {
            var n;
            if (n = new Date, e) switch (e) {
                case "quoter_of_hour":
                    n.setTime(n.getTime() + 9e5);
                    break;
                case "half_of_hour":
                    n.setTime(n.getTime() + 18e5);
                    break;
                case "hour":
                    n.setTime(n.getTime() + 36e5);
                    break;
                case "day":
                    n.setDate(n.getDate() + 1);
                    break;
                case "week":
                    n.setDate(n.getDate() + 7);
                    break;
                case "month":
                    n.setMonth(n.getMonth() + 1);
                    break;
                case "year":
                    n.setFullYear(n.getFullYear() + 1);
                    break;
                case "session":
                    n = null;
                    break;
                default:
                    isNaN(e) ? n.setDate(n.getDate() + 1) : n.setTime(n.getTime() + 6e4 * parseInt(e))
            } else n.setDate(n.getDate() + 1);
            return n
        }, s
    }(), window.CTS.ExternalIds = function() {
        function r() {}
        return r.MAX_RETRY_ITERATIONS = 30, r.DELAY_BETWEEN_RETRY = 100, r.DELAY_FOR_EXTRA_SEND = 300, r.COOKIE_GA_SENT = "ct_ga", r.COOKIE_YA_SENT = "ct_ya", r.COOKIE_ROISTAT_SENT = "ct_roi", r.COOKIE_FACEBOOK_SENT = "ct_fb", r.COOKIE_CALLTOUCH_SENT = "ct_calltouch", r.COOKIE_GA4_SESSION_SENT = "ct_ga4_session", r.startSendAnalyticIdsProcess = function() {
            return r.sendAnalyticIds(), r.scheduleAnalyticIdsAfterJqueryReady(), r.scheduleeAnalyticIdsAfterDelay()
        }, r.sendAnalyticIds = function() {
            if (CTS.Cookie.getCookie(r.COOKIE_GA_SENT) || r.sendGaId(), CTS.Cookie.getCookie(r.COOKIE_YA_SENT) || r.sendYaId(), CTS.Cookie.getCookie(r.COOKIE_ROISTAT_SENT) || r.sendRoistatId(), CTS.Cookie.getCookie(r.COOKIE_FACEBOOK_SENT) || r.sendFacebookId(), CTS.Cookie.getCookie(r.COOKIE_CALLTOUCH_SENT) || r.sendCalltouchId(), !CTS.Cookie.getCookie(r.COOKIE_GA4_SESSION_SENT)) return r.sendGa4SessionId()
        }, r.scheduleAnalyticIdsAfterJqueryReady = function() {
            return jQuery(document).ready(r.sendAnalyticIds)
        }, r.scheduleeAnalyticIdsAfterDelay = function() {
            return setTimeout(r.sendAnalyticIds, r.DELAY_FOR_EXTRA_SEND)
        }, r.sendGaId = function(e) {
            var n, o;
            return null == e && (e = 1), null != window.ga && null != window.ga.getAll && null != window.ga.getAll()[0] ? (CTS.Request.trackExternalId("ga", window.ga.getAll()[0].get("clientId")), CTS.Cookie.setCookie(r.COOKIE_GA_SENT, "1", "session")) : null != (o = CTS.Cookie.getCookie("_ga", !1)) ? (n = o.replace(/GA1.\d./, ""), CTS.Request.trackExternalId("ga", n), CTS.Cookie.setCookie(r.COOKIE_GA_SENT, "1", "session")) : r.handleRetry(e, r.sendGaId, r.COOKIE_GA_SENT)
        }, r.sendGa4SessionId = function(e) {
            var t, i, n;
            return null == e && (e = 1), 0 !== (n = document.cookie.split(";").map(function(e) {
                return (e.match(/_ga_.{10}(?==\s*GS.*)/) || [])[0]
            }).filter(function(e) {
                return e
            })).length ? (t = null, i = 0, n.forEach(function(e) {
                var n, o, r;
                if (n = (o = CTS.Cookie.getCookie(e, !1).match(/GS\d\.\d.(\d+)\.\d+\.\d+\.(\d+)(?=\.)/))[1], r = parseInt(o[2]), i <= r) return t = n, i = r
            }), CTS.Request.trackExternalId("ga4_session", t), CTS.Cookie.setCookie(r.COOKIE_GA4_SESSION_SENT, "1", "session")) : r.handleRetry(e, r.sendGa4SessionId, r.COOKIE_GA4_SESSION_SENT)
        }, r.sendYaId = function(e) {
            var n;
            return null == e && (e = 1), null != (n = CTS.Cookie.getCookie("_ym_uid", !1)) ? (CTS.Request.trackExternalId("ya", n), CTS.Cookie.setCookie(r.COOKIE_YA_SENT, "1", "session")) : r.handleRetry(e, r.sendYaId, r.COOKIE_YA_SENT)
        }, r.sendRoistatId = function(e) {
            return null == e && (e = 1), null != window.roistat && null != window.roistat.visit ? (CTS.Request.trackExternalId("roistat", window.roistat.visit), CTS.Cookie.setCookie(r.COOKIE_ROISTAT_SENT, "1", "session")) : r.handleRetry(e, r.sendRoistatId, r.COOKIE_ROISTAT_SENT)
        }, r.sendFacebookId = function(e) {
            var n;
            return null == e && (e = 1), null != (n = CTS.Cookie.getCookie("_fbp", !1)) ? (CTS.Request.trackExternalId("fb", n), CTS.Cookie.setCookie(r.COOKIE_FACEBOOK_SENT, "1", "session")) : r.handleRetry(e, r.sendFacebookId, r.COOKIE_FACEBOOK_SENT)
        }, r.sendCalltouchId = function(e) {
            var n;
            return null == e && (e = 1), null != (n = CTS.Cookie.getCookie("_ct_session_id", !1)) ? (CTS.Request.trackExternalId("calltouch_id", n), CTS.Cookie.setCookie(r.COOKIE_CALLTOUCH_SENT, "1", "session")) : r.handleRetry(e, r.sendCalltouchId, r.COOKIE_CALLTOUCH_SENT)
        }, r.handleRetry = function(e, n) {
            if (e < r.MAX_RETRY_ITERATIONS) return setTimeout(n, r.DELAY_BETWEEN_RETRY, e + 1)
        }, r.clearCokies = function() {
            return CTS.Cookie.delCookie(r.COOKIE_GA_SENT), CTS.Cookie.delCookie(r.COOKIE_YA_SENT), CTS.Cookie.delCookie(r.COOKIE_ROISTAT_SENT), CTS.Cookie.delCookie(r.COOKIE_FACEBOOK_SENT), CTS.Cookie.delCookie(r.COOKIE_CALLTOUCH_SENT), CTS.Cookie.delCookie(r.COOKIE_GA4_SESSION_SENT)
        }, r
    }(), window.CTS.PhonesProcessor = function() {
        function i() {}
        return i.DEFAULT_DELAY_FOR_EXTRA_PROCESS = 300, i.CURRENT_PHONES_ON_PAGE = {}, i.processPhones = function(e) {
            var n, o;
            for (n in "string" == typeof e && (e = JSON.parse(e)), i.onBeforeProcess(), i.CURRENT_PHONES_ON_PAGE = e) o = e[n], !1 !== i.onBeforeProcessPhone(n, o) && (CTS.Replacer.handlePhone(n, o), i.onAfterProcessPhone(n, o));
            return i.onAfterProcess()
        }, i.processNewPhones = function(e) {
            var n, o, r, t;
            if (CTS.Common.logDebugInfo(new Date + " processNewPhones:"), CTS.Common.logDebugInfo(e), CTS.Common.logDebugInfo(i.CURRENT_PHONES_ON_PAGE), JSON.stringify(i.CURRENT_PHONES_ON_PAGE) !== JSON.stringify(e)) {
                for (n in r = {}, t = i.CURRENT_PHONES_ON_PAGE) r[t[n]] = e[n];
                for (n in e) o = e[n], r[n] = o;
                return CTS.Common.logDebugInfo(new Date + " processNewPhones replace: "), CTS.Common.logDebugInfo(r), i.processPhones(r), i.CURRENT_PHONES_ON_PAGE = e
            }
        }, i.returnOriginalPhones = function() {
            var e, n, o;
            if (CTS.Common.logDebugInfo(new Date + " returnOriginalPhones:"), CTS.Common.logDebugInfo(i.CURRENT_PHONES_ON_PAGE), i.CURRENT_PHONES_ON_PAGE) {
                for (e in n = {}, o = i.CURRENT_PHONES_ON_PAGE) n[o[e]] = e;
                return CTS.Common.logDebugInfo(new Date + " returnOriginalPhones replace: "), CTS.Common.logDebugInfo(n), i.processPhones(n), i.CURRENT_PHONES_ON_PAGE = void 0
            }
        }, i.scheduleProcessAfterJqueryReady = function() {
            return jQuery(document).ready(function() {
                return CTS.PhonesProcessor.fetchFromSessionAndProcess()
            })
        }, i.scheduleProcessAfterDelay = function() {
            return setTimeout(i.fetchFromSessionAndProcess, i.delayForAfterProcess())
        }, i.delayForAfterProcess = function() {
            return i.DEFAULT_DELAY_FOR_EXTRA_PROCESS
        }, i.onBeforeProcess = function() {}, i.onAfterProcess = function() {}, i.onBeforeProcessPhone = function(e, n) {
            return $('[href="tel:+375 (33) 335 57 00"]').attr("href", "tel:+375333355700"), $('[href="tel:+375 (44) 717 27 33"]').attr("href", "tel:" + n)
        }, i.onAfterProcessPhone = function() {}, i.fetchFromSessionAndProcess = function() {
            var e;
            if (e = CTS.PhonesSession.getSession()) return CTS.PhonesProcessor.processPhones(e.phones)
        }, i
    }(), window.CTS.Replacer = function() {
        function g() {}
        return g.REMOVE_IDENTIFIER = "r", g.handlePhone = function(e, n) {
            var o;
            if (n) return o = CTS.Containers.getContainers(e), n === g.REMOVE_IDENTIFIER ? g.doRemovePhone(e, o) : g.doReplacePhone(e, n, o)
        }, g.doReplacePhone = function(e, r, n) {
            var o, t, i, s, a, c, u, C, l, S, T, _, f, E;
            for (f = [], t = 0, i = n.length; t < i; t++) C = (o = n[t]).innerHTML.match(/\d/g).join(""), c = CTS.Common.mainPart(e), _ = CTS.Common.mainPart(r), -1 !== (E = C.indexOf(c)) ? (u = l = -1, o.innerHTML = o.innerHTML.replace(/\d/g, function(e) {
                return E <= ++u && u <= E + c.length - 1 ? _[++l] : e
            })) : g.doCharByCharPhoneReplacementFallback(c, _, o), T = g.possiblePhoneWaysOfWriting(c), f.push(function() {
                var e, n, o;
                for (o = [], e = 0, n = T.length; e < n; e++) S = T[e], a = document.querySelectorAll("a[href$='" + S + "']"), o.push(function() {
                    var e, n, o;
                    for (o = [], n = 0, e = a.length; n < e; n++) s = a[n], this.reallyWrongLink(s) ? o.push(s.href = "tel:" + r) : o.push(void 0);
                    return o
                }.call(this));
                return o
            }.call(g));
            return f
        }, g.doCharByCharPhoneReplacementFallback = function(e, n, o) {
            var r, t, i, s, a, c, u, C, l, S, T;
            for (C = e.substring(0, 2), s = T = !1, t = void 0, c = "", l = -1, r = a = 0, S = (u = o.innerHTML).length - 1; 0 <= S ? a <= S : S <= a; r = 0 <= S ? ++a : --a) "'" === (i = u[r]) && (T = !T), '"' === i && (s = !s), i.match(/\d/) ? T || s ? c += i : (null == t && i + u[r + 1] === C && (t = r), null != t && l < e.length - 1 && t <= r ? c += n[++l] : c += i) : c += i;
            if (0 < c.length) return o.innerHTML = c
        }, g.doRemovePhone = function(e, n) {
            var o, r, t, i, s, a, c, u, C, l, S, T, _, f, E, d, h;
            for ((T = CTS.Common.mainPart(e).split("")).unshift("(\u0413\u041e\u0420\u041e\u0414:|\u0442\u0435\u043b\\.\\:|\u043c\u043e\u0431\\.\\:)?\\s*(\\+?\\s*375|8\\s*|0|8(\\s|\\(|\\-)*?0|\\+\\s*7)?"), E = new RegExp("(?:-|s*|(<[^>]+?>)|(|))*" + T.join("(?:-|s*|(?:<[^>]+?>)|(|))*") + "(?:-|s*|(?:</s+?>)|&nbsp;|/64|[^d<]|)*"), r = 0, i = n.length; r < i; r++) o = n[r], CTS.Replacer.clearContainer(o), S = o.innerHTML.match(/\d/g).join(""), l = CTS.Common.mainPart(e), -1 !== S.indexOf(l) && (o.innerHTML = o.innerHTML.replace(E, ""));
            if (0 < (d = CTS.Containers.getContainers(e)).length)
                for (t = 0, s = d.length; t < s; t++) o = d[t], CTS.Replacer.doCharByCharPhoneReplacementFallback(CTS.Common.mainPart(e), "         ", o);
            for (h = [], C = 0, a = (f = g.possiblePhoneWaysOfWriting(CTS.Common.mainPart(e))).length; C < a; C++) _ = f[C], u = document.querySelectorAll("a[href$='" + _ + "']"), h.push(function() {
                var e, n, o;
                for (o = [], n = 0, e = u.length; n < e; n++) c = u[n], this.reallyWrongLink(c) ? o.push(c.remove()) : o.push(void 0);
                return o
            }.call(g));
            return h
        }, g.clearContainer = function(e) {
            if ("undefined" != typeof jQuery && null !== jQuery) return jQuery(e).contents().each(function() {
                if (this.nodeType === Node.COMMENT_NODE) return jQuery(this).remove()
            })
        }, g.possiblePhoneWaysOfWriting = function(e) {
            var n, o, r, t;
            return o = e.substring(0, 2), n = e.substring(2, 5), r = e.substring(5, 7), t = e.substring(7, 9), [e, o + "-" + n + "-" + r + "-" + t, "(" + o + ")" + n + "-" + r + "-" + t, "(" + o + ") " + n + "-" + r + "-" + t, "(" + o + ") " + n + r + t, "(0" + o + ") " + n + "-" + r + "-" + t, "0" + o + n + r + t, o + " " + n + " " + r + " " + t]
        }, g.reallyWrongLink = function(e) {
            return !e.closest(".ct-pandora-container") && !e.href.toString().match(/whatsapp|viber|\.me|instagram|skype|facebook|viber|phone|http/)
        }, g
    }(), window.CTS.UserSession = function() {
        function n() {}
        return n.CURRENT_SESSION_ID_KEY = "ct_id", n.sessionUUID = function() {
            return CTS.Cookie.getCookie(n.CURRENT_SESSION_ID_KEY)
        }, n.newUUID = function() {
            return Math.floor(1e8 * Math.random())
        }, n.storeSessionUUID = function(e) {
            return CTS.Cookie.setCookie(n.CURRENT_SESSION_ID_KEY, e, "session")
        }, n.clearCokies = function() {
            return CTS.Cookie.delCookie(n.CURRENT_SESSION_ID_KEY)
        }, n
    }(), window.CTS.Request = function() {
        function t() {}
        return t.HOST = "//app.call-tracking.by", t.FETCH_PHONES_PATH = "/phones.json", t.PROLONG_PATH = "/prolong_phones.json", t.EXTERNAL_IDS_PATH = "/external_ids.json", t.fetchPhones = function() {
            return t.requestToCallTracking(t.FETCH_PHONES_PATH, t.commonParams())
        }, t.prolongPhones = function() {
            return t.requestToCallTracking(t.PROLONG_PATH, t.commonParams())
        }, t.trackExternalId = function(e, n) {
            var o;
            return o = ["analytic_name=" + e, "analytic_id=" + encodeURIComponent(n), "s_id=" + CTS.UserSession.sessionUUID()], t.requestToCallTracking(t.EXTERNAL_IDS_PATH, o)
        }, t.commonParams = function() {
            var e, n;
            return e = null != (n = CTS.Referrer.lastValuableRef()) ? n : "", ["s_id=" + (CTS.UserSession.sessionUUID() || CTS.UserSession.newUUID()), "ref=" + encodeURIComponent(CTS.Referrer.savedReferrer() || CTS.Referrer.referrer()), "origin_ref=" + encodeURIComponent(e.toString()), "c_href=" + encodeURIComponent(location.href.toString())]
        }, t.requestToCallTracking = function(e, n) {
            var o, r;
            return r = "" + t.HOST + e, 0 < n.length && (r += "?" + n.join("&")), (o = document.createElement("SCRIPT")).src = r, o.async = !0, document.getElementsByTagName("HEAD")[0].appendChild(o)
        }, t
    }(), window.CTS.PhonesSession = function() {
        function t() {}
        return t.SESSION_COOKIE_NAME = "ct_s", t.getSession = function() {
            var e;
            return e = CTS.Cookie.getCookie(t.SESSION_COOKIE_NAME), t.parseSessionString(e)
        }, t.getGlobalSession = function() {
            var e;
            return e = CTS.Cookie.getCookie(t.SESSION_COOKIE_NAME, !1), t.parseSessionString(e)
        }, t.parseSessionString = function(e) {
            var n;
            return e ? (n = JSON.parse(CTS.Common.decodeString(e)), location.pathname.match(n.regexp) ? n : null) : null
        }, t.storeSession = function(e, n, o) {
            var r;
            return r = {
                phones: e,
                regexp: n,
                exp: CTS.Cookie.cookieExpirationTime(o)
            }, CTS.Cookie.setCookie(t.SESSION_COOKIE_NAME, CTS.Common.encodeString(JSON.stringify(r)), o)
        }, t.delSession = function() {
            return CTS.Cookie.delCookie(t.SESSION_COOKIE_NAME), CTS.UserSession.clearCokies(), CTS.ExternalIds.clearCokies()
        }, t
    }(), window.CTS.Referrer = function() {
        function t() {}
        return t.CURRENT_REF_COOKIE_NAME = "ct_ref_c", t.LAST_VALUABLE_REF_COOKIE_NAME = "ct_ref_l", t.currentRef = function() {
            var e, n;
            return null != (n = t.savedReferrer()) ? n : (e = t.referrer(), t.saveRefInTmp(e), e)
        }, t.savedReferrer = function() {
            return CTS.Cookie.getCookie(t.CURRENT_REF_COOKIE_NAME)
        }, t.saveSessionRef = function() {
            var e;
            return e = t.referrer(), CTS.Common.requestBetweenSubDomains() && (e = t.currentRef()), t.saveRefInTmp(e)
        }, t.saveRefInTmp = function(e) {
            return CTS.Cookie.setCookie(t.CURRENT_REF_COOKIE_NAME, e, "session")
        }, t.setLastValuableRef = function(e, n) {
            var o, r;
            if (o = null != e && 0 < e.length ? e : null) return r = n ? t.lastValuableRef() : t.currentRef(), CTS.Cookie.setCookie(t.LAST_VALUABLE_REF_COOKIE_NAME, r, o)
        }, t.lastValuableRef = function() {
            return CTS.Cookie.getCookie(t.LAST_VALUABLE_REF_COOKIE_NAME)
        }, t.documentReferrer = function() {
            return document.referrer ? document.referrer.split(/\?|\#/)[0] : ""
        }, t.referrer = function() {
            return "", (location.href.match(/utm_|gclid|yclid|kwid|openstat|ymclid|rs=/) ? location.href : t.documentReferrer() || location.href).split("#")[0]
        }, t
    }(), window.CTS.ProlongationLogic = function() {
        function t() {}
        return t.MIN_PROLONG_INTERVAL_MS = 15e3, t.MAX_RANDOM_PROLONG_INTERVAL_MS_PART = 15e3, t.SESSION_EXPIRE_THREASHOLD = t.MIN_PROLONG_INTERVAL_MS + t.MAX_RANDOM_PROLONG_INTERVAL_MS_PART + 1e3, t.SESSION_ACTIVE_IF_LAST_EVENT_LESS_THAN_MS_FROM_NOW = 45e3, t.EVENTS_LAST_TIME = new Date, t.PROLONG_CHECK_SET = !1, t.PERIODIC_PROLONG_FAILED = !1, t.run = function() {
            return t.addActivityHandler(), t.scheduleProlongCheck()
        }, t.setLastActiveTime = function() {
            if (t.EVENTS_LAST_TIME = new Date, t.PERIODIC_PROLONG_FAILED) return t.PERIODIC_PROLONG_FAILED = !1, CTS.Common.logDebugInfo(new Date + " prolong on activity time." + t.PERIODIC_PROLONG_FAILED), t.prolongCheck()
        }, t.addActivityHandler = function() {
            return window.jQuery(document).off("mousemove", "body", t.setLastActiveTime).on("mousemove", "body", t.setLastActiveTime), window.jQuery(document).off("touchmove", "body", t.setLastActiveTime).on("touchmove", "body", t.setLastActiveTime), window.jQuery(document).off("visibilitychange", t.handleDocumentVisibilityChange).on("visibilitychange", t.handleDocumentVisibilityChange)
        }, t.scheduleProlongCheck = function() {
            var e;
            if (!t.PROLONG_CHECK_SET) return t.PROLONG_CHECK_SET = !0, e = t.nextCheckMS(), CTS.Common.logDebugInfo(new Date + " schedule next check in: " + e / 1e3 / 60 + " min"), setTimeout(t.recursionProlongCheck, e)
        }, t.recursionProlongCheck = function() {
            return t.PROLONG_CHECK_SET = !1, t.prolongCheck() ? (t.PERIODIC_PROLONG_FAILED = !1, CTS.Common.logDebugInfo(new Date + " recursionProlongCheck resulted in phones change. " + t.PERIODIC_PROLONG_FAILED)) : (t.PERIODIC_PROLONG_FAILED = !0, CTS.Common.logDebugInfo(new Date + " recursionProlongCheck resulted in nothing " + t.PERIODIC_PROLONG_FAILED), t.scheduleProlongCheck())
        }, t.prolongCheck = function() {
            var e;
            return e = CTS.PhonesSession.getSession(), CTS.Common.logDebugInfo(new Date + " prolongCheck"), e && JSON.stringify(e.phones) !== JSON.stringify(CTS.PhonesProcessor.CURRENT_PHONES_ON_PAGE) ? (CTS.Common.logDebugInfo(new Date + " Different phones page | session "), CTS.Common.logDebugInfo(e.phones), CTS.Common.logDebugInfo(CTS.PhonesProcessor.CURRENT_PHONES_ON_PAGE), CTS.PhonesProcessor.processNewPhones(e.phones), t.scheduleProlongCheck(), !0) : !!t.needToProlongPhones() && (CTS.Common.logDebugInfo(new Date + " There is activity and session is about to expire. Send prolong request"), CTS.Request.prolongPhones(), !0)
        }, t.nextCheckMS = function() {
            var e, n, o, r;
            return (r = CTS.PhonesSession.getSession()) ? (e = new Date, n = Date.parse(r.exp) - e, (o = t.defaultPageProlongInterval()) < n ? n - o : o) : t.defaultPageProlongInterval()
        }, t.defaultPageProlongInterval = function() {
            return t.MIN_PROLONG_INTERVAL_MS + Math.floor(Math.random() * t.MAX_RANDOM_PROLONG_INTERVAL_MS_PART)
        }, t.needToProlongPhones = function() {
            var e;
            return e = new Date, CTS.Common.logDebugInfo(new Date + " last activity time: " + CTS.ProlongationLogic.EVENTS_LAST_TIME), e - CTS.ProlongationLogic.EVENTS_LAST_TIME < t.SESSION_ACTIVE_IF_LAST_EVENT_LESS_THAN_MS_FROM_NOW && CTS.PhonesProcessor.CURRENT_PHONES_ON_PAGE && t.phonesWouldExpireSoon() ? (CTS.Common.logDebugInfo(new Date + " needToProlongPhones: true. " + (e - CTS.ProlongationLogic.EVENTS_LAST_TIME)), !0) : (CTS.Common.logDebugInfo(new Date + " needToProlongPhones: false. " + (e - CTS.ProlongationLogic.EVENTS_LAST_TIME)), !1)
        }, t.phonesWouldExpireSoon = function() {
            var e;
            return null != (e = CTS.PhonesSession.getSession()) ? Date.parse(e.exp) - new Date < t.SESSION_EXPIRE_THREASHOLD ? (CTS.Common.logDebugInfo(new Date + " phonesWouldExpireSoon: true; time diff: " + (Date.parse(e.exp) - new Date)), !0) : (CTS.Common.logDebugInfo(new Date + " phonesWouldExpireSoon: false; time diff: " + (Date.parse(e.exp) - new Date)), !1) : (CTS.Common.logDebugInfo(new Date + " phonesWouldExpireSoon: session blank"), !0)
        }, t.handleDocumentVisibilityChange = function() {
            return "hidden" === document.visibilityState ? CTS.Common.logDebugInfo(new Date + " visibility changed to hidden") : (CTS.Common.logDebugInfo(new Date + " prolong check on VisibilityChange."), t.prolongCheck())
        }, t
    }(), window.CTS.Main = function() {
        function n() {}
        return n.PHONES_WERE_REPLACED = !1, n.run = function() {
            return n.analyseDisableCondition(), CTS.Common.scriptEnabled() ? CTS.Common.withjQueryCheck(function() {
                var e;
                return CTS.Main.PHONES_WERE_REPLACED ? CTS.Request.prolongPhones() : ((e = CTS.PhonesSession.getSession()) || (e = CTS.PhonesSession.getGlobalSession()) && CTS.Cookie.setCokieDomainPolicy("wildcard"), !CTS.Common.pageWasReloaded() && !CTS.Common.backNavigationWas() && CTS.Common.requestFromOutSide() || !CTS.Common.backNavigationWas() && document.referrer.match("cf_chl_tk") ? CTS.Common.requestBetweenSubDomains() && e ? n.handleSessionRelacement(e) : (CTS.PhonesSession.delSession(), CTS.Referrer.saveSessionRef(), CTS.Request.fetchPhones(CTS.UserSession.newUUID())) : e ? n.handleSessionRelacement(e) : CTS.Common.withCampaignsForSpecificPages() ? CTS.Request.fetchPhones(CTS.UserSession.sessionUUID()) : void 0)
            }) : console.log("\u0441\u0435\u0440\u0432\u0438\u0441 Call-Tracking.BY \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u0441\u043a\u0440\u0438\u043f\u0442 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430.")
        }, n.handleSessionRelacement = function(e) {
            return CTS.Main.onBeforePhonesScriptRun(), CTS.PhonesProcessor.processPhones(e.phones), CTS.PhonesProcessor.scheduleProcessAfterJqueryReady(), CTS.PhonesProcessor.scheduleProcessAfterDelay(), CTS.ProlongationLogic.run(), CTS.ExternalIds.startSendAnalyticIdsProcess(), CTS.Main.onAfterPhonesScriptRun(), CTS.Main.PHONES_WERE_REPLACED = !0
        }, n.analyseDisableCondition = function() {
            return location.href.match("disable_ct_script=1") ? window.CTS.Common.disableScriptForCurrentVisitor() : location.href.match("enable_ct_script=1") ? window.CTS.Common.enableScriptForCurrentVisitor() : void 0
        }, n.process = function(e, n, o, r, t, i, s) {
            return CTS.Cookie.setCokieDomainPolicy(r), CTS.UserSession.storeSessionUUID(e), CTS.Referrer.currentRef(), n ? (CTS.Main.onBeforePhonesScriptRun(), CTS.PhonesProcessor.processPhones(n), CTS.Referrer.setLastValuableRef(i, s), CTS.PhonesSession.storeSession(n, o, t), CTS.ExternalIds.startSendAnalyticIdsProcess(), CTS.PhonesProcessor.scheduleProcessAfterJqueryReady(), CTS.PhonesProcessor.scheduleProcessAfterDelay(), CTS.ProlongationLogic.run(), CTS.Main.onAfterPhonesScriptRun()) : console.log("\u0441\u0435\u0440\u0432\u0438\u0441 Call-Tracking.BY \u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430.")
        }, n.prolong = function(e, n, o, r, t, i) {
            if (CTS.Cookie.setCokieDomainPolicy(i), CTS.UserSession.storeSessionUUID(e), CTS.Referrer.currentRef(), r) return CTS.ProlongationLogic.PERIODIC_PROLONG_FAILED = !1, CTS.PhonesSession.storeSession(n, o, r), CTS.PhonesProcessor.processNewPhones(n), CTS.ProlongationLogic.scheduleProlongCheck()
        }, n.returnOriginalPhones = function() {
            return CTS.PhonesSession.delSession(), CTS.PhonesProcessor.returnOriginalPhones()
        }, n.onBeforePhonesScriptRun = function() {
            return window.location.pathname.match("spalnya") && window.jQuery('p:contains("\u0414\u043b\u044f \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u0435\u0431\u0435\u043b\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f")').replaceWith("<p>\u0414\u043b\u044f \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u0435\u0431\u0435\u043b\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0435, \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b: \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430, \u041c\u0414\u0424, \u0414\u0421\u041f, \u0448\u043f\u043e\u043d. \u041c\u0435\u0431\u0435\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044e \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440\u0430 \u2013 \u043e\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c. \u0414\u043b\u044f \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438 \u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043f\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 +375 (44) 71-72-733.</p>"), window.location.pathname.match("vopros-otvet") && window.jQuery('p:contains("\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0437\u0430\u043a\u0430\u0437?")').replaceWith('<p><strong>\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0437\u0430\u043a\u0430\u0437?</strong>&nbsp;<br>\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0437\u0430\u043a\u0430\u0437, \u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043f\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443:<br>+375 (44) 71-72-733<br>\u0438\u043b\u0438 e-mail&nbsp;<a href="mailto:info@meko.by" target="_blank">info@meko.by</a>.&nbsp;<br>\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0412\u0430\u0441 \u043f\u0440\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0442.</p>'), window.jQuery("body > div.container > div > article > div.std.shop-item-page.col-md-12 > div.content-shop > h3:nth-child(3)").replaceWith("<h3><strong>\u0422\u0435\u043b\u0435\u0444\u043e\u043d:</strong></h3>")
        }, n.onAfterPhonesScriptRun = function() {
            return $('[href="tel:+375 (25) 948 61 13"]').remove(), $('[href="tel:+375 (44) 707 41 76"]').remove(), window.jQuery('p:contains("+375 (  )          ")').remove()
        }, n.getSession = function() {
            return CTS.PhonesSession.getSession()
        }, n.getContainers = function(e) {
            return CTS.Containers.getContainers(e)
        }, n
    }(), CTS.Main.run()
}).call(this);