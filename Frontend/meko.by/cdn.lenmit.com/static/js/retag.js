if (window.admitad = function() {
        var config = {
                urls: {
                    webmasterTags: "//z.lenmit.com/retag/tags/?code=##code##",
                    requiredFields: "//z.lenmit.com/retag/fields/?code=##code##"
                },
                levelsDefault: [0, 1, 2, 3, 4]
            },
            bucket = {},
            core = {
                loadWebmasterTags: function(e, t, r) {
                    e = utils.buildUrl(config.urls.webmasterTags, {
                        code: e.code
                    });
                    !0 === window._retag_debug && (e += "&debug=1"), utils.loadScript(e, r)
                },
                loadRequiredFields: function(e, t) {
                    e = utils.buildUrl(config.urls.requiredFields, {
                        code: e.code
                    });
                    utils.loadScript(e, t)
                },
                evalTags: function(t, e) {
                    utils.isArray(e) && utils.each(e, function(e) {
                        e = core.buildScriptsSequence(e);
                        core.evalScripts(t, e)
                    })
                },
                buildScriptsSequence: function(e) {
                    var t = [];
                    return utils.arrayUpdate(t, utils.match(re.internalScripts, e, "internal")), utils.arrayUpdate(t, utils.match(re.externalScripts, e, "external")), utils.arrayUpdate(t, utils.match(re.img, e, "img")), utils.arrayUpdate(t, utils.match(re.iframe, e, "iframe")), t = t.sort(function(e, t) {
                        return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                    })
                },
                evalScripts: function(e, t) {
                    var r;
                    if (!utils.isEmpty(t)) return r = t.shift(), "external" !== r.type ? "internal" === r.type ? (utils.isLevelDefault(e.level) ? utils.eval(r.value) : utils.isUndef(window._retag_data) ? console.log("window._retag_data is empty") : utils.fakeContextEval(window._retag_data, r.value), core.evalScripts(e, t)) : "img" === r.type ? (utils.appendImg(r.value), core.evalScripts(e, t)) : "iframe" === r.type ? (utils.appendIframe(r.value), core.evalScripts(e, t)) : void 0 : void utils.loadScript(r.value, function() {
                        core.evalScripts(e, t)
                    })
                },
                run: function(t) {
                    (utils.isLevelDefault(t.level) ? check.checkDefault : check.checkCustom)(t, function(e) {
                        core.loadWebmasterTags(t, e, function() {
                            core.evalTags(t, bucket.retargetingTags), core.evalTags(t, bucket.analyticalTags)
                        })
                    })
                }
            },
            errCodes = {
                undefValue: 0,
                emptyValue: 1
            },
            check = {
                checkers: {
                    0: function() {
                        return {}
                    },
                    1: function() {
                        return check.checkRequiredFields(["ad_category"], window)
                    },
                    2: function() {
                        var e = {};
                        return utils.isUndef(window.ad_product) ? e.ad_product = errCodes.undefValue : utils.isEmpty(window.ad_product) ? e.ad_product = errCodes.emptyValue : utils.isUndef(window.ad_product.id) ? e.ad_product_id = errCodes.undefValue : utils.isEmpty(window.ad_product.id) && (e.ad_product_id = errCodes.emptyValue), e
                    },
                    3: function() {
                        var e = {};
                        if (utils.isUndef(window.ad_products)) e.ad_products = errCodes.undefValue;
                        else if (utils.isEmpty(window.ad_products)) e.ad_products = errCodes.emptyValue;
                        else
                            for (var t = 0; t < window.ad_products.length; t++) {
                                var r = window.ad_products[t];
                                utils.isUndef(r.id) ? e.ad_products_id = errCodes.undefValue : utils.isEmpty(r.id) && (e.ad_products_id = errCodes.emptyValue)
                            }
                        return e
                    },
                    4: function() {
                        return check.checkRequiredFields(["ad_order"], window)
                    }
                },
                checkRequiredFields: function(e, t) {
                    for (var e = utils.isUndef(e) ? bucket.requiredFields : e, t = utils.isUndef(t) ? window._retag_data : t, r = {}, i = 0; i < e.length; i++) {
                        var n = e[i];
                        utils.isUndef(t[n]) ? r[n] = errCodes.undefValue : utils.isEmpty(t[n]) && (r[n] = errCodes.emptyValue)
                    }
                    return r
                },
                checkDefault: function(e, t) {
                    e = e.level;
                    if (utils.isUndef(e) || !check.checkers.hasOwnProperty(e)) return {};
                    t(check.checkers[e]())
                },
                checkCustom: function(e, t) {
                    t({})
                }
            },
            re = {
                externalScripts: /<\s*script[^>]*?src[\s]*=[\s]*['"]([^"']*?)['"]/gim,
                internalScripts: /<\s*script[^>]*>([\S\s]*?)<\s*\/script\s*>/gim,
                img: /<img.+?src=[\"'](.+?)[\"'].+?>/gim,
                iframe: /<\s*iframe[^>]*?src[\s]*=[\s]*['"]([^"']*?)['"]/gim
            },
            utils = {
                trim: function(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                },
                isLevelDefault: function(e) {
                    return 0 <= utils.indexOf(config.levelsDefault, e)
                },
                arrayUpdate: function(e, t) {
                    for (var r = 0; r < t.length; r++) e.push(t[r]);
                    return e
                },
                buildUrl: function(e, t) {
                    for (var r in t) e = e.replace("##" + r + "##", t[r]);
                    return ("https:" == document.location.protocol ? "https:" : "http:") + e
                },
                loadScript: function(e, t) {
                    var r = document.getElementsByTagName("head")[0],
                        i = document.createElement("script"),
                        n = (i.async = !0, i.src = e, !1);
                    i.onload = i.onreadystatechange = function() {
                        n || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (n = !0, t(), i.onload = i.onreadystatechange = null, r && i.parentNode && r.removeChild(i))
                    }, r.insertBefore(i, r.firstChild)
                },
                loadScripts: function(t, r) {
                    var i;
                    utils.isArray(t) ? (i = 0, utils.each(t, function(e) {
                        utils.loadScript(e, function() {
                            ++i >= t.length && r()
                        })
                    })) : r()
                },
                createIframe: function(e) {
                    var t = document.createElement("iframe");
                    return t.src = e, t.height = "1", t.width = "1", t.frameBorder = "0", t
                },
                each: function(e, t, r) {
                    for (var r = r || window, i = 0; i < e.length; i++) t.call(r, e[i], i)
                },
                match: function(e, t, r) {
                    var i, n, a = [];
                    do {} while ((n = e.exec(t)) && 1 < n.length && n[1] && ((i = utils.trim(n[1])) && a.push({
                            value: i,
                            type: r,
                            index: n.index
                        })), null != n);
                    return a
                },
                eval: function(script) {
                    var isIndirectEvalGlobal = function(e) {
                        try {
                            return (0, eval)("Object") === e
                        } catch (e) {
                            return !1
                        }
                    }(Object);
                    try {
                        if (isIndirectEvalGlobal) return (0, eval)(script);
                        void 0 !== window.execScript ? window.execScript(script) : eval(script)
                    } catch (e) {}
                },
                appendImg: function(e) {
                    var t = document.createElement("img");
                    t.height = 1, t.width = 1, t.alt = "", t.src = e
                },
                appendIframe: function(e) {
                    e = utils.createIframe(e);
                    document.body.appendChild(e)
                },
                isArray: function(e) {
                    return e && 0 < e.length
                },
                isObject: function(e) {
                    return e && "object" == typeof e
                },
                isUndef: function(e) {
                    return void 0 === e
                },
                isEmpty: function(e) {
                    if ("number" == typeof e) return !1;
                    var t, r = Object.prototype.hasOwnProperty;
                    if (null == e) return !0;
                    if (e.length && 0 < e.length) return !1;
                    if (0 === e.length) return !0;
                    for (t in e)
                        if (r.call(e, t)) return !1;
                    return !0
                },
                indexOf: function(e, t, r) {
                    for (var i = r || 0, n = e.length; i < n; i++)
                        if (e[i] === t) return i;
                    return -1
                },
                copy: function(e) {
                    if (null == e || "object" != typeof e) return e;
                    var t, r = e.constructor();
                    for (t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
                    return r
                },
                fakeContextEval: function(context, source) {
                    for (var variable in context) eval("var " + variable + "='" + context[variable] + "';");
                    try {
                        eval(source)
                    } catch (e) {}
                }
            },
            api = {
                putInBucket: function(e, t) {
                    bucket[e] = t
                },
                createApp: function(e) {
                    core.run(e)
                }
            };
        return api
    }(), window._retag) {
    for (var i = 0; i < window._retag.length; i++) admitad.createApp(window._retag[i]);
    window._retag.push = admitad.createApp
}