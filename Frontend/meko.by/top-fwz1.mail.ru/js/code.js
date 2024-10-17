var _tmr = _tmr || [];
(function() {
    function Jb(a) {
        !va && "number" === typeof a && (va = a);
        return N && Kb && gb ? (hb = [Kb - N, gb - N, Sa ? Sa - N : null, Ta ? Ta - N : null, va ? va - N : null].join("/"), Sa && (Ta && va) && (Jb = function() {
            return hb
        }), hb) : null
    }

    function r(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function L(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }

    function Lb(a, b) {
        try {
            if (a.nodeName.toLowerCase() === b.toLowerCase()) return a;
            if (a.parentNode) return Lb(a.parentNode, b)
        } catch (c) {
            s &&
                console.warn("[TopMailRu] Error#1.25", c)
        }
        return null
    }

    function Mb(a, b) {
        if (null === a.offsetParent || (0 == a.offsetHeight || 0 == a.offsetWidth || 0 == a.clientHeight || 0 == a.clientWidth) || b && (0 == a.offsetLeft || 0 == a.offsetTop)) return !1;
        if (void 0 !== f.getComputedStyle) {
            var c = f.getComputedStyle(a, null);
            return "none" !== c.display && "hidden" !== c.visibility
        }
        return !0
    }

    function Nb(a, b) {
        for (var c = 0, d = b.length; c < d; c++)
            if (b[c] === a) return !0;
        return !1
    }

    function da(a, b) {
        for (var c = 0, d = b.length; c < d; c++)
            if (b[c] == a) return !0;
        return !1
    }

    function X(a) {
        var b =
            typeof a;
        return !("number" === b || "boolean" === b || "string" === b || a.nodeType || a === a.window)
    }

    function ea(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function R() {
        var a = arguments,
            b = a[0] || {},
            c = !1,
            d = 1,
            e = a.length,
            k, g, m, l, n;
        "boolean" === typeof b && (c = b, b = a[d++] || {});
        for (X(b) || (b = {}); d < e; d++)
            if (null != (k = a[d]))
                for (g in k) m = b[g], l = k[g], b !== l && (c && l && (X(l) || (n = ea(l))) ? (n ? (n = !1, m = m && ea(m) ? m : []) : m = m && X(m) ? m : {}, b[g] = R(c, m, l)) : void 0 !== l && (b[g] = l));
        return b
    }

    function Ob(a, b, c) {
        if (!a) return null;
        var d =
            a.match(b),
            e = 2 < arguments.length ? c : 0;
        return d && d.length > e ? d[e] : null
    }

    function Pb(a) {
        return ("" + a).replace(/[\/\^\$\*\+\?\.\|\(\)\[\]\{\}\\]/g, "\\$&")
    }

    function ib(a) {
        return Ob(a.host, /^(?:w{3}.)?(.*)$/, 1) || ""
    }

    function Cc(a, b, c) {
        a = ib(a);
        b = (b && 0 < b ? b : URL_HELPER__MASK_LEVEL) - 1;
        var d = 1;
        a = a.replace(RegExp("^.*(?:\\.((?:[^\\.]+\\.){" + b + "}[^\\.]+$))"), "$1");
        if (d = a.match(/\./g)) d = d.length;
        a = "(?:^|\\.{" + (b - d + 1) + "})" + Pb(a) + "$";
        return RegExp(c ? "^((?!" + a + ").)*$" : a)
    }

    function jb(a) {
        var b;
        if (ea(a)) {
            b = [];
            for (var c = 0,
                    d = a.length; c < d; c++) b.push(jb(a[c]));
            return b
        }
        b = a instanceof RegExp ? a : RegExp("^" + Pb(a) + "$");
        return b.test(ib(v)) ? null : b
    }

    function Qb(a) {
        var b = "";
        try {
            var c = new Uint8Array(a);
            f.crypto.getRandomValues(c);
            for (var d = 0; d < a; d++) b += (c[d] % 16).toString(16)
        } catch (e) {
            b = "";
            for (d = 0; d < a; d++) c = Math.floor(16 * Math.random()), b += c.toString(16)
        }
        return b
    }

    function q() {
        return (new Date).getTime()
    }

    function H(a, b) {
        var c = {
                data: b,
                raw: a,
                url: kb(a)
            },
            d;
        if (!Dc || "function" !== typeof navigator.sendBeacon) d = !1;
        else {
            c.dataSplitter = ";";
            var e =
                lb(c.data, c.dataSplitter);
            try {
                d = !0 === navigator.sendBeacon(c.url, e)
            } catch (k) {
                d = !1
            }
        }
        d || (void 0 === b ? (c.dataSplitter = ";", c.open = Ec, c.connect = Fc, c.startListen = Gc, c.stopListen = Hc, c.open(c), c.connect(c)) : ("function" === typeof f.XMLHttpRequest ? (c.dataSplitter = ";", c.open = Ic, c.connect = Jc, c.startListen = Kc, c.stopListen = Lc, c.open(c), c.connect(c), d = !0) : d = !1, d || Mc(c)))
    }

    function Mc(a) {
        var b = h.createElement("iframe"),
            c = h.createElement("div");
        c.setAttribute("style", "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
        c.appendChild(b);
        try {
            h.body.appendChild(c)
        } catch (d) {}
        try {
            var e = b.contentWindow.document,
                k = e.createElement("div"),
                g;
            for (g in a.data)
                if (a.data.hasOwnProperty(g)) {
                    var m = a.data[g],
                        l = typeof m;
                    if ("string" === l || "number" === l) {
                        var n = e.createElement("input");
                        n.setAttribute("type", "hidden");
                        n.setAttribute("name", g);
                        n.value = m;
                        k.appendChild(n)
                    }
                }
            var f = e.createElement("form");
            f.setAttribute("action", a.url);
            f.setAttribute("method", Rb);
            f.setAttribute("enctype", Sb);
            f.appendChild(k);
            var u = e.createElement("div");
            u.appendChild(f);
            e.body.appendChild(u);
            var O = function() {
                try {
                    L(b, "load", O), h.body.removeChild(c)
                } catch (a) {
                    s && console.warn("[TopMailRu] Error#1.2", a)
                }
            };
            r(b, "load", O);
            f.submit()
        } catch (t) {
            s && console.warn("[TopMailRu] Error#1.3", t)
        }
    }

    function Ic(a) {
        a._connection = new f.XMLHttpRequest
    }

    function Jc(a) {
        a._connection.open(Rb, a.url);
        a._connection.setRequestHeader("Content-Type", Sb);
        a._connection.send(lb(a.data, a.dataSplitter))
    }

    function Kc(a) {
        r(a._connection, "load", a._onload);
        r(a._connection, "error", a._onerror)
    }

    function Lc(a) {
        L(a._connection,
            "load", a._onload);
        L(a._connection, "error", a._onerror)
    }

    function Ec(a) {
        a._connection = new Image
    }

    function Fc(a) {
        a._connection.src = a.url + lb(a.data, a.dataSplitter)
    }

    function Gc(a) {
        a._connection.onload = a._onload;
        a._connection.onerror = a._onerror
    }

    function Hc(a) {
        a._connection.onload = null;
        a._connection.onerror = null
    }

    function lb(a, b) {
        var c = b || ";",
            d = "",
            e;
        for (e in a)
            if (a.hasOwnProperty(e)) {
                var k = a[e],
                    g = typeof k;
                if ("string" === g || "number" === g) d += c + escape(e) + "=" + escape(k)
            }
        return d
    }

    function kb(a) {
        a = "string" === typeof a ?
            a : "/";
        return "https://top-fwz1.mail.ru" + ("/" === a.substring(0, 1) ? "" : "/") + a
    }

    function Y(a) {
        return (a = h.cookie.match(RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(a[1]) : null
    }

    function Ca(a, b, c) {
        c = c || {};
        var d = c.expires;
        "number" === typeof c.expires && (d = new Date, d.setTime(d.getTime() + c.expires));
        d && d.toUTCString && (d = d.toUTCString());
        c.expires = d;
        a = a + "=" + encodeURIComponent(b);
        for (var e in c)
            if ((b = c[e]) || 0 === b) a += "; " + e, !0 !== b && (a += "=" + b);
        h.cookie = a
    }

    function mb(a,
        b) {
        var c = b || {};
        c.expires = -1;
        Ca(a, "", c)
    }

    function Nc() {
        var a = "tmr" + ("" + Math.random()).slice(2);
        try {
            return ga = f.localStorage || null, ga.setItem(a, a), ga.removeItem(a), !0
        } catch (b) {
            return ga = null, s && console.warn("[TopMailRu] Error#1.4", b), !1
        }
    }

    function xa(a) {
        try {
            return ga.getItem(a)
        } catch (b) {
            s && console.warn("[TopMailRu] Error#1.5", b)
        }
        return null
    }

    function Da(a, b) {
        try {
            ga.setItem(a, b)
        } catch (c) {
            s && console.warn("[TopMailRu] Error#1.6", c)
        }
    }

    function Oc() {
        if (!Z) return null;
        for (var a = v.hostname.split(".").reverse(),
                b, c = 1, d = a.length; c < d; c++) {
            b = a[0];
            for (var e = 1; e <= c; e++) b = a[e] + "." + b;
            var e = "" + q(),
                k = {
                    domain: b,
                    path: "/",
                    expires: 3E5
                };
            try {
                Ca("tmr_tcdhn", e, k);
                var g = Y("tmr_tcdhn");
                mb("tmr_tcdhn", k);
                if (g === e) return b
            } catch (m) {
                s && console.warn("[TopMailRu] Error#1.8", m)
            }
        }
        return null
    }

    function Tb(a, b) {
        Z && Ca(a, b, nb);
        na && Da(a, b)
    }

    function ob(a, b, c) {
        var d = h.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        b && (d.onload = b);
        c && (d.onerror = c);
        d.src = a;
        try {
            document.body.appendChild(d)
        } catch (e) {
            try {
                c && c()
            } catch (k) {}
        }
    }

    function Ub(a) {
        var b =
            ";e=" + escape("detect");
        H(J(a, $, !1, !1) + b)
    }

    function Vb(a, b) {
        if (a.length && null !== b.ecom_data) {
            var c = ya(b.ecom_data),
                c = c ? ("" + c).substring(1, c.length - 1) : "";
            if (!(4096 < c.length || -1 === c.search(/\S/))) {
                var d = pb("_m", b.ecom_method),
                    e = pb("_t", b.ecom_type),
                    k = pb("_jst", Wb()),
                    c = "{" + c + d + e + k + "}";
                H(J({
                    id: a[0]
                }, Pc, !1, !0) + (";ids=" + escape(a.join())) + (";e=" + escape(c)))
            }
        }
    }

    function pb(a, b) {
        var c = ',"' + a + '":';
        if (!b || !b.length) return c + "[]";
        try {
            return c + '["' + b.join('","') + '"]'
        } catch (d) {}
        return c + "false"
    }

    function Qc() {
        var a =
            Y(Xb);
        if (null === a) return null;
        a = a.split("|");
        if (3 !== a.length) return null;
        var b = a[2],
            b = q() - b;
        return 0 > b || b > Yb ? null : {
            id: a[0],
            version: a[1]
        }
    }

    function Zb(a) {
        qb = !0;
        a.length && ob(kb("/js/dyn-goal-config.js?ids=" + a.join(",")))
    }

    function p() {}

    function Ea(a) {
        a && "object" === typeof a && (!S && "id" in a) && (S = a.id)
    }

    function Fa(a) {
        return !Ua ? void 0 : Ua[a]
    }

    function Rc(a) {
        return (a = Fa(a)) && Va ? a - Va : void 0
    }

    function $b() {
        if (Ua) {
            for (var a = 0, b = "domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),
                    c = 0; c < b.length; c++) {
                var d = Fa(b[c]);
                if (0 < d && (d < a || 0 == a)) a = d
            }
            return a ? a : void 0
        }
    }

    function aa(a, b) {
        var c = 1 < arguments.length ? b : S;
        return a && "object" === typeof a && ("id" in a && a.id || c)
    }

    function ac(a, b, c, d) {
        var e = parseInt(a, 10);
        return isNaN(e) || "" + e !== "" + a || e < b || e > c ? d || 0 === d ? d : null : e
    }

    function bc(a, b) {
        if ("URL" in window) {
            var c = b;
            try {
                c = new URL(a)
            } catch (d) {
                return b
            }
            return c ? a : b
        }
        return a || b
    }

    function cc(a, b) {
        if ("URL" in window) {
            var c = b;
            try {
                c = new URL(a)
            } catch (d) {
                return "d:"
            }
            return c ? "e:" : "d:"
        }
        return a ? "e:" : "d:"
    }

    function dc(a,
        b, c) {
        if (!a) return b;
        if ("URL" in window) {
            try {
                var d = new URL(a);
                if (d) return a
            } catch (e) {}
            try {
                if (d = new URL(a, c)) return d.href ? d.href : d.toString()
            } catch (k) {}
            return b
        }
        return a
    }

    function ec(a, b, c) {
        if (!a) return "d:";
        if ("URL" in window) {
            try {
                var d = new URL(a);
                if (d) return "e:"
            } catch (e) {}
            try {
                if (d = new URL(a, c)) return "h:"
            } catch (k) {}
            return "d:"
        }
        return "e:"
    }

    function J(a, b, c, d) {
        na && Da(Ga, ++F);
        var e = "id" in a ? a.id : S,
            k = bc(a.url, v.href),
            g = bc(a.referrer, h.referrer),
            m = dc(a.url, v.href, v.href),
            l = dc(a.referrer, h.referrer),
            n = "title" in
            a ? a.title : h.title,
            fa;
        fa = rb;
        null === fa && (fa = Sc());
        fa = null !== fa ? fa ? 1 : 0 : null;
        var u = "userid" in a ? a.userid : T || 0 === T ? T : void 0,
            O = U ? U : void 0,
            t;
        t = oa && a.bfCache;
        var p = "pageView" === a.type && a.timespent,
            x = [];
        S && e !== S && x.push("sec");
        "dataLayer" in f && x.push("dl");
        M && x.push(["ecom"].concat(M).join("-"));
        var Ba = Tc();
        Ba && Ba.length && x.push(["jst"].concat(Ba).join("-"));
        t && x.push("bfc");
        P && p && x.push("ts");
        f.top !== f && x.push("frame");
        (!0 === B.webdriver || h.$cdc_asdjflasutopfhvcZLmcfl_) && x.push("wda");
        Ha && x.push.apply(x, Ha);
        t = x.join(",");
        var fc, p = (new Date).getTimezoneOffset(),
            x = "";
        if (f.Intl) try {
            x = f.Intl.DateTimeFormat().resolvedOptions().timeZone || ""
        } catch (Uc) {
            s && console.warn("[TopMailRu] Error#1.1", Uc)
        }
        fc = p + "/" + x;
        var p = gc,
            p = null !== p ? p : Qc(),
            za = Jb(a.start),
            x = hc(),
            Ba = ic();
        b = b + "?_=" + Math.random() + (e ? ";id=" + escape(e) : "") + (m ? ";u=" + escape(m) : "") + (l ? ";r=" + escape(l) : "") + (k !== m ? ";u2=" + cc(a.url, v.href) + ec(a.url, v.href, v.href) : "") + (g !== l ? ";r2=" + cc(a.referrer, h.referrer) + ec(a.referrer, h.referrer) : "");
        e = ac(a.gender, 1, 2);
        b += null !==
            e ? ";gender=" + e : "";
        e = ac(a.age, 1, 127);
        d = b + (null !== e ? ";age=" + e : "") + ("pid" in a ? ";pid=" + escape(a.pid) : "") + (void 0 !== u ? ";userid=" + escape(u) : "") + (void 0 !== O ? ";uparams=" + escape(ya(O)) : "") + (d && n ? ";title=" + encodeURIComponent(n) : "");
        n = ";s=" + Vc + ";vp=";
        O = u = 0;
        h.documentElement && (h.documentElement.clientWidth || h.documentElement.clientHeight) ? (u = h.documentElement.clientWidth, O = h.documentElement.clientHeight) : "number" == typeof f.innerWidth && (u = f.innerWidth, O = f.innerHeight);
        d = d + (n + ("" + u + "*" + O) + ";touch=" + Wc + ";hds=" +
            Xc) + ";sid=" + sb + ";ver=" + Yc + ";tz=" + encodeURIComponent(fc) + ";st=" + $b();
        if (c) {
            if (!Ua || !tb) c = "";
            else {
                c = [];
                c.push(tb.type);
                c.push(tb.redirectCount);
                c.push(Va);
                for (n = 0; n < jc.length; n++) c.push(Rc(jc[n]));
                c = c.join("/")
            }
            c = ";nt=" + c
        } else c = "";
        c = d + c + (za ? ";ct=" + za : "") + (Wa ? ";rt=" + Wa : "") + (Xa ? ";gl=" + Xa : "") + ("device" in a ? ";device=" + escape(a.device) : "") + ";ni=";
        if (!B || !B.connection) za = "";
        else {
            za = B.connection;
            d = [];
            for (u = 0; u < kc.length; u++) {
                n = za[kc[u]];
                if (void 0 !== n) switch (n) {
                    case !0:
                        n = 1;
                        break;
                    case !1:
                        n = 0;
                        break;
                    default:
                        n =
                            ("" + n).replace(/\//g, "_")
                }
                d.push(n)
            }
            za = d.join("/")
        }
        return c + za + ("params" in a ? ";params=" + escape(ya(a.params)) : "") + (null !== fa ? ";detect=" + fa : "") + (Z || na ? ";lvid=" + escape([ha, q(), F, ia].join(":")) : "") + (t ? ";opts=" + escape(t) : "") + (p ? ";flocid=" + escape(p.id) + ";flocv=" + escape(p.version) : "") + (x ? ";fpid=" + escape(x) : "") + (Ba ? ";vkidExtId=" + escape(Ba) : "") + ("version" in a ? ";appver=" + escape(a.version) : "") + (ja.support ? ";visible=" + ja.getValue() : "") + ";js=13"
    }

    function ub(a) {
        a = ";e=" + escape(a);
        for (var b = 0; b < C.length; b++) H(J(C[b],
            $, !1, !0) + a)
    }

    function Zc() {
        rb = !0;
        lc(1);
        if (!vb && !Ia) {
            Ia = !0;
            for (var a = 0; a < C.length; a++) Ub(C[a])
        }
    }

    function $c() {
        lc(0);
        rb = !1
    }

    function Sc() {
        var a = Y(mc);
        if (null === a) return null;
        a = a.split("|");
        if (2 !== a.length) return null;
        var b = a[1],
            b = q() - b;
        if (0 > b || b > nc) return null;
        a = parseInt(a[0], 10);
        return isNaN(a) ? null : a
    }

    function lc(a) {
        var b = q();
        a = [a, b].join("|");
        Ca(mc, a, {
            path: "/",
            expires: nc
        })
    }

    function ad() {
        var a = 0;
        Ya && (a = q() - Ya);
        bd || (y.dcl3 = setTimeout(function() {
            ub("DCL/3")
        }, Math.max(3E3 - a, 0)))
    }

    function cd() {
        var a = 0;
        Za &&
            (a = q() - Za);
        dd || (y.pvt2 = setTimeout(function() {
            ub("PVT/2")
        }, Math.max(2E3 - a, 0)));
        ed || (y.pvt15 = setTimeout(function() {
            ub("PVT/15")
        }, Math.max(15E3 - a, 0)))
    }

    function oc() {
        wb || setInterval(function() {
            _tmr.beat()
        }, 6E4)
    }

    function fd(a, b, c, d) {
        if (!b || !d || d === xb && b === xb && c === xb) return null;
        b = {
            goal: gd + b,
            value: c || 0,
            params: {
                product_id: d
            }
        };
        a && (b.id = a);
        return b
    }

    function $a() {
        Ya = q();
        h.addEventListener ? (L(h, "DOMContentLoaded", $a), _tmr.onready()) : h.attachEvent && "complete" === h.readyState && (L(h, "readystatechange", $a), _tmr.onready());
        pc()
    }

    function yb(a) {
        Za = q();
        if (oa) {
            if (a.persisted) {
                Ja = Ka = ab = 0;
                zb = Ab = !1;
                P && z.launch();
                a = Bb;
                Bb = [];
                for (var b = 0, c = a.length; b < c; b++) _tmr.callbackOnReady(a[b]);
                a = bb;
                bb = {};
                for (b in a) _tmr.pageView(a[b]);
                oc()
            }
        } else L(f, "load", yb);
        _tmr.onready();
        _tmr.onload()
    }

    function La() {
        oa || (L(f, "unload", La), L(f, "beforeunload", La));
        _tmr.unload()
    }

    function pc() {
        P && z.launch();
        if (hd && qc) {
            window.addEventListener("message", function(a) {
                var c = null;
                try {
                    if (c = a.data, X(c) || (c = Ma(c)), "LOAD_BUTTONS_SCRIPT" === c.type) {
                        var d;
                        var e = document.referrer;
                        a = null;
                        var k = ("" + c.lang).toLowerCase();
                        Nb(k, rc) || (k = rc[0]);
                        try {
                            a = (new URL(e)).host
                        } catch (g) {}
                        d = a && id.test(a) ? "https://" + a + "/top_constructor/buttons_" + k + ".js" : kb("/js/dyn-goal-wizard-" + k + ".js");
                        ob(d)
                    }
                } catch (m) {}
            });
            if (window.opener) try {
                window.opener.postMessage({
                    type: "READY"
                }, document.referrer)
            } catch (a) {}
            qb || (cb.push.apply(cb, Na), Zb(Na))
        }
    }
    if ("[object Array]" === Object.prototype.toString.call(_tmr)) {
        var Kb = (new Date).getTime(),
            gb = null,
            Sa = null,
            Ta = null,
            va = null,
            N = null,
            hb = null,
            $ = "/tracker",
            Pc = "/datalayer",
            f = window,
            B = navigator,
            h = document,
            v = location,
            pa = "string" === typeof v.hostname ? v.hostname : "",
            Oa = -1 != pa.search(/(^|\.)odnoklassniki\.ru$/) || -1 != pa.search(/(^|\.)ok\.ru$/),
            sc = -1 != pa.search(/(^|\.)vk\.com$/);
        pa.search(/(^|\.)mail\.ru$/);
        var jd = -1 != pa.search(/(^|\.)lamoda\.ru$/),
            kd = -1 != pa.search(/(^|\.)kommersant\.ru$/);
        pa.search(/(^|\.)top\.mail\.ru$/);
        pa.search(/(^|\.)dzen\.ru$/);
        var tc = "string" === typeof v.search && -1 != v.search.search(/[?&]rb_clickid=/),
            s = "string" === typeof v.search && -1 != v.search.search(/[?&]tmr_debug=1(?:&|$)/),
            Dc = !1,
            wb = Oa || sc || jd || kd,
            dd = !tc,
            ed = Oa,
            bd = !tc,
            vb = !1,
            P = f.performance && "visibilityState" in h,
            ld = [36383],
            md = !(Oa || sc),
            hd = !0,
            uc = f.JSON && f.JSON.stringify && f.JSON.parse,
            oa = "onpageshow" in f && "onpagehide" in f,
            qc = "URL" in f,
            ya = uc ? f.JSON.stringify.bind(f.JSON) : function(a) {
                return ""
            },
            Ma = uc ? f.JSON.parse.bind(f.JSON) : function(a) {
                return {}
            },
            rc = ["ru", "en"],
            id = /^(ads\d+\.target\.vk\.ru)$/,
            Rb = "POST",
            Sb = "application/x-www-form-urlencoded",
            Z = !(0 === v.hostname.search(/^(\d+.)+\d+$/g) || -1 !== v.hostname.search(/:/g)),
            ga = null,
            na = Nc(),
            nb = {
                domain: Oc(),
                path: "/",
                expires: 287712E5
            };
        (function() {
            var a;
            if (a = h.cookie.match(RegExp("(?:^|; )(tmr_tcdhn\\d+)=([^;]*)", "g"))) {
                for (var b = [], c, d = 0, e = a.length; d < e; d++) c = a[d], (c = c.match(/(?:^|; )(tmr_tcdhn\d+)=([^;]*)/)) && b.push(c.slice(1));
                a = b
            } else a = null;
            if (a) {
                d = 0;
                for (e = a.length; d < e; d++) b = a[d][0], mb(b, nb)
            }
        })();
        var Ia = !1,
            rb = null,
            nc = 864E5,
            mc = "tmr_detect",
            nd = function() {
                function a(a, b) {
                    for (var c = a.length, g, m, l = 0; l < b; l++) m = Math.floor(Math.random() * c), g = a[l], a[l] = a[m], a[m] = g;
                    return a.slice(0, b)
                }

                function b(b, e) {
                    var k = h.createElement("div"),
                        g = String.fromCharCode(97, 100, 118, 98, 108, 111, 99, 107, 32, 97, 100, 118, 101, 114, 116, 98, 108, 111, 99, 107, 32, 97, 100, 118, 101, 114, 116, 66, 108, 111, 99, 107, 32, 98, 45, 114, 98, 32, 98, 97, 110, 110, 101, 114, 95, 50, 52, 48, 32, 112, 45, 116, 97, 114, 103, 101, 116, 32, 112, 117, 98, 95, 51, 48, 48, 120, 50, 53, 48, 32, 112, 117, 98, 95, 51, 48, 48, 120, 50, 53, 48, 109, 32, 112, 117, 98, 95, 55, 50, 56, 120, 57, 48, 32, 114, 98, 95, 98, 111, 100, 121, 32, 114, 98, 45, 102, 108, 111, 97, 116, 105, 110, 103, 32, 114, 98, 45, 115, 108, 111, 116, 32, 114, 98, 45,
                            118, 105, 100, 101, 111, 45, 119, 105, 100, 103, 101, 116, 32, 116, 101, 120, 116, 45, 97, 100, 32, 116, 101, 120, 116, 45, 97, 100, 45, 108, 105, 110, 107, 115, 32, 116, 101, 120, 116, 45, 97, 100, 115, 32, 116, 101, 120, 116, 45, 98, 97, 110, 110, 101, 114, 32, 116, 101, 120, 116, 95, 97, 100, 32, 116, 101, 120, 116, 95, 97, 100, 115, 32, 116, 101, 120, 116, 65, 100, 32, 116, 101, 120, 116, 97, 100, 32, 116, 101, 120, 116, 65, 100, 115, 32, 116, 101, 120, 116, 97, 100, 115, 32, 116, 103, 98, 45, 98, 97, 110, 110, 101, 114, 32, 116, 114, 103, 45, 98, 45, 98, 97, 110, 110, 101, 114, 45, 98, 108, 111, 99, 107).split(" "),
                        g = a(g,
                            c);
                    k.setAttribute("class", g.join(" "));
                    k.setAttribute("style", "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
                    k.setAttribute("id", "trg-b-banners-1");
                    k.setAttribute("data-view", "SlotView.mimic");
                    try {
                        this.bait = h.body.appendChild(k)
                    } catch (m) {}
                    this.bait.offsetParent;
                    this.bait.offsetHeight;
                    this.bait.offsetLeft;
                    this.bait.offsetTop;
                    this.bait.offsetWidth;
                    this.bait.clientHeight;
                    this.bait.clientWidth;
                    this.loopNumber = 0;
                    this.fnPositive =
                        b || null;
                    this.fnNegative = e || null;
                    var l = this;
                    setTimeout(function() {
                        l._checkBait.call(l)
                    }, 1)
                }
                var c = 7;
                b.prototype._checkBait = function() {
                    if (Ia) this._stop();
                    else {
                        var a = !1;
                        try {
                            a = null !== h.body.getAttribute("abp")
                        } catch (b) {}
                        a || (a = !Mb(this.bait, !0));
                        (!0 === a || 10 <= ++this.loopNumber) && this._stop();
                        var c;
                        if (a && this.fnPositive) try {
                            c = this.fnPositive, c()
                        } catch (g) {
                            s && console.warn("[TopMailRu] Error#1.9", g)
                        } else if (!a && 10 > this.loopNumber) {
                            var m = this;
                            setTimeout(function() {
                                m._checkBait.call(m)
                            }, 50 * this.loopNumber)
                        } else try {
                            c =
                                this.fnNegative, c()
                        } catch (l) {
                            s && console.warn("[TopMailRu] Error#1.10", l)
                        }
                    }
                };
                b.prototype._stop = function() {
                    try {
                        h.body.removeChild(this.bait)
                    } catch (a) {
                        s && console.warn("[TopMailRu] Error#1.11", a)
                    }
                };
                return function(a, c) {
                    new b(a, c)
                }
            }(),
            M = null,
            vc = "ecommerce",
            V = "dataLayer",
            sa = null,
            Cb = !1,
            db = [],
            od = [36383, 2540645, 3171181, 3074137, 2057653],
            pd = [],
            Db;
        (function() {
            function a(a, b) {
                for (var c = 0, d = b.length; c < d; c++) - 1 === a.indexOf(b[c]) && a.push(b[c])
            }

            function b(b, c, d) {
                for (var e = {
                            ecom_method: [],
                            ecom_type: [],
                            ecom_data: {
                                events: []
                            }
                        },
                        k = 0, l = b.length; k < l; k++) {
                    var g = q[b[k]];
                    if (g) {
                        a(e.ecom_method, [b[k]]);
                        for (var m = 0, f = g.length; m < f; m++)
                            for (var n = 0, h = d.length; n < h; n++) {
                                var u = g[m][d[n]];
                                if (u)
                                    for (var w = 0, p = c.length; w < p; w++)
                                        if (-1 !== g[m].type.indexOf(c[w])) {
                                            a(e.ecom_type, [c[w]]);
                                            a(e.ecom_data.events, u);
                                            break
                                        }
                            }
                    }
                }
                return e
            }

            function c(a, b, c) {
                if (!a || !c || !(b in q)) return null;
                for (var d, e = 0, k = q[b].length; e < k; e++)
                    if (d = q[b][e], c in d && -1 !== d[c].indexOf(a)) return {
                        ecom_method: [b],
                        ecom_type: d.type.slice(),
                        ecom_data: {}
                    };
                return null
            }

            function d(a) {
                for (var d = [], g, f, h = 0, u = a.length; h < u; h++)
                    if (f = a[h]) {
                        g = null;
                        try {
                            if (f.ecommerce) g = e(f) || k(f);
                            else if (null === f.ecommerce) g = null;
                            else if (f.event) {
                                var fa = {
                                    event: f.event,
                                    ecommerce: {}
                                };
                                g = e(fa) || k(fa)
                            } else if ("event" === f[0]) {
                                var wc = f[1],
                                    q = f[2],
                                    A = c(wc, l, p);
                                A && (A.ecom_data[wc] = q);
                                g = A
                            } else if (f.event === vc) a: {
                                for (var Pa = b([m], [n], [t]), E = 0, w = Pa.ecom_data.events.length; E < w; E++)
                                    if (!f.hasOwnProperty(Pa.ecom_data.events[E])) {
                                        g = null;
                                        break a
                                    }
                                delete Pa.ecom_data.events;Pa.ecom_data[vc] = f;g = Pa
                            }
                        } catch (r) {
                            s && console.warn("[TopMailRu] Error#1.23",
                                r), g = null
                        }
                        g && (d.push(g), db.push(g))
                    }
                if (d.length) {
                    a = 0;
                    for (g = d.length; a < g; a++) Vb(eb, d[a]);
                    M || (M = [0, 0, V]);
                    M[0] += d.length;
                    g = a = 0;
                    for (h = d.length; g < h; g++) a += ya(d[g].ecom_data).length;
                    M[1] += a
                }
            }

            function e(a) {
                var b, d;
                for (d in a.ecommerce)
                    if (a.ecommerce.hasOwnProperty(d) && (b = c(d, m, h))) {
                        if (a.event && (d = c(a.event, m, u)))
                            for (var e = 0, g = b.ecom_type.length; e < g; e++) - 1 === d.ecom_type.indexOf(b.ecom_type[e]) && (b.ecom_type.splice(e, 1), g--, e--);
                        b.ecom_data = a.ecommerce;
                        return b
                    }
                return null
            }

            function k(a) {
                var b = a.event,
                    d = c(b,
                        m, u);
                d && (d.ecom_data[b] = a.ecommerce);
                return d
            }

            function g(a) {
                if ((a = f[a]) && "function" === typeof a.push) d(a), sa = a.push, a.push = function() {
                    var a = sa.apply(this, arguments);
                    d([].slice.call(arguments, 0));
                    return a
                }
            }
            var m = "push",
                l = "gtag",
                n = "gse",
                h = "inner",
                u = "outer",
                p = "external",
                t = "required",
                q = {};
            q[l] = [{
                    type: ["gee"],
                    external: "add checkout checkout_option checkout_progress click detail promo_click remove select_content set_checkout_option view_refund".split(" ")
                }, {
                    type: ["ga4"],
                    external: "earn_virtual_currency join_group level_end level_start level_up post_score select_content spend_virtual_currency tutorial_begin tutorial_complete unlock_achievement ad_impression login search share sign_up add_payment_info add_shipping_info add_to_wishlist generate_lead select_item select_promotion view_cart view_item_list".split(" ")
                },
                {
                    type: ["gee", "ga4"],
                    external: "add_to_cart begin_checkout purchase refund remove_from_cart view_item view_promotion".split(" ")
                }
            ];
            q[m] = [{
                    type: [n],
                    required: ["transactionId", "transactionTotal"]
                }, {
                    type: ["ga4"],
                    outer: b([l], ["ga4"], [p]).ecom_data.events
                }, {
                    type: ["gee"],
                    inner: "click checkout checkout_option impressions promoClick promoView refund".split(" "),
                    outer: "addToCart checkout checkoutOption productClick productDetail ProductImpressions promotionClick promotionView removeFromCart transactionPush".split(" ")
                },
                {
                    type: ["ym", "gee"],
                    inner: ["add", "detail", "purchase", "remove"]
                }, {
                    type: ["mt"],
                    outer: "mt_order mt_refund mt_view_item_list mt_select_item mt_view_item mt_add_to_wishlist mt_add_to_cart mt_view_cart mt_remove_from_cart mt_begin_checkout mt_add_shipping_info mt_add_payment_info mt_view_promotion mt_select_promotion".split(" ")
                }
            ];
            Db = function(a) {
                if (!(a === V && sa)) {
                    a !== V && (db = []);
                    var b = f[V];
                    b && "function" === typeof b.push && sa && (b.push = sa, sa = null);
                    g(a);
                    Cb = !0
                }
            }
        })();
        var Wb = function() {
                var a = [{
                            id: "gtag",
                            globalVars: ["google_tag_manager"]
                        },
                        {
                            id: "ga",
                            globalVars: ["GoogleAnalyticsObject"]
                        }, {
                            id: "ym",
                            globalVars: ["Ya", {
                                re: "yaCounter\\d+"
                            }]
                        }, {
                            id: "vk",
                            globalVars: ["VK"]
                        }, {
                            id: "vk",
                            globalVars: ["vkAsyncInit"]
                        }
                    ],
                    b = {};
                return function() {
                    var c;
                    try {
                        c = Object.keys(f).join(",")
                    } catch (d) {
                        c = null
                    }
                    for (var e = [], k, g = 0, m = a.length; g < m; g++) {
                        k = b[a[g].id];
                        if (void 0 === k) a: {
                            k = a[g].globalVars;
                            for (var l = c, n = 0, h = k.length; n < h; n++) {
                                var u = k[n];
                                if ("string" === typeof u && !(u in f) || "string" === typeof u.re && (l && -1 === l.search(RegExp("($|,)" + u.re + "(,|^)", "m")) || 1 === h)) {
                                    k = !1;
                                    break a
                                }
                            }
                            k = !0
                        }
                        k && (b[a[g].id] = !0, da(a[g].id, e) || e.push(a[g].id))
                    }
                    return e
                }
            }(),
            Tc = Wb,
            Yb = 864E5,
            Xb = "tmr_floc",
            gc = null;
        (function(a) {
            try {
                h.interestCohort && "function" === typeof h.interestCohort && h.interestCohort().then(function(a) {
                    gc = {
                        id: a.id,
                        version: a.version
                    };
                    a = [a.id, a.version];
                    var b = q();
                    a = a.concat(b).join("|");
                    Ca(Xb, a, {
                        path: "/",
                        expires: Yb
                    })
                }, function() {})
            } catch (b) {}
        })();
        var Eb = !1,
            Xa = null,
            Qa = null,
            Fb = !1,
            xc;
        (function() {
            function a() {
                B.permissions.query({
                    name: e
                }).then(function(a) {
                    b(a)
                })
            }

            function b(b) {
                n && f.clearTimeout(n);
                try {
                    var d = b.state;
                    Qa = d in m ? m[d] : g;
                    Fb = d === k;
                    Eb && (c(Fb), n = f.setTimeout(a, l))
                } catch (e) {}
            }

            function c(a) {
                try {
                    a ? B[e].getCurrentPosition(d) : d(null)
                } catch (b) {}
            }

            function d(a) {
                if (a) try {
                    var b = a.coords,
                        b = [b.latitude, b.longitude, b.accuracy, b.altitude, b.altitudeAccuracy, b.heading, b.speed];
                    a = 0;
                    for (var c = b.length; a < c; a++) "number" !== typeof b[a] && (b[a] = "");
                    b.splice(0, 0, Qa);
                    Xa = b.join("/")
                } catch (d) {} else Xa = Qa
            }
            var e = "geolocation",
                k = "granted",
                g = "u",
                m = {
                    denied: "d"
                };
            m[k] = "g";
            m.prompt = "p";
            var l = 6E4,
                n = null;
            (function() {
                Qa =
                    g;
                d(null);
                try {
                    e in B ? B.permissions && B.permissions.query({
                        name: e
                    }).then(function(a) {
                        b(a);
                        a.onchange = function() {
                            b(a)
                        }
                    }) : Qa = "n"
                } catch (a) {}
            })();
            xc = c
        })();
        var ja = {
                support: !1
            },
            ja = function() {
                function a() {
                    e(g)
                }

                function b() {
                    e(g, s)
                }

                function c(a) {
                    a.persisted && (t[g] = null, t[m] = null, e(g, p))
                }

                function d() {
                    return l ? !h[l] : null
                }

                function e(a, b) {
                    var c = q(),
                        e = "undefined" === typeof b ? d() : b;
                    if (null === t[a]) t[a] = {
                        ts: c,
                        state: e,
                        total: 0
                    };
                    else {
                        var g = t[a];
                        if (g.state !== e && !(g.state === s && e !== p)) {
                            var f = c - g.ts,
                                l = g.state;
                            g.ts = c;
                            g.state =
                                e;
                            f < k || (l === p ? (g.total += f, v && v(c, f)) : l === u && x && x(c, f))
                        }
                    }
                }
                var k = 5,
                    g = "auto",
                    m = "user",
                    l = null,
                    n = null,
                    p = !0,
                    u = !1,
                    s = null;
                "hidden" in h ? (l = "hidden", n = "visibilitychange") : "mozHidden" in h ? (l = "mozHidden", n = "mozvisibilitychange") : "webkitHidden" in h ? (l = "webkitHidden", n = "webkitvisibilitychange") : "msHidden" in h && (l = "msHidden", n = "msvisibilitychange");
                var t = {};
                t[g] = null;
                var v = t[m] = null,
                    x = null;
                return {
                    support: !!l,
                    auto: function(d, e) {
                        v = d || null;
                        x = e || null;
                        l && (a(), r(h, n, a));
                        oa ? (r(f, "pageshow", c), r(f, "pagehide", b)) : (r(f, "beforeunload",
                            b), r(f, "unload", b))
                    },
                    set: function(a) {
                        e(m, !!a)
                    },
                    getLog: function() {
                        var a = q(),
                            b = {},
                            c, d;
                        for (d in t) c = t[d], b[d] = c ? c.total : 0, c && c.state && (b[d] += a - c.ts);
                        return b
                    },
                    getValue: d
                }
            }();
        ja.auto();
        var yc = {
            enabled: !1
        };
        if (qc) {
            var zc = function() {
                    var a = "checkbox color date datetime-local email file month number password radio range search tel text time url week".split(" ");
                    return {
                        analyze: function(b) {
                            if (!b) return null;
                            for (var c = [].slice.apply(b.elements), d = [], e = [], f = 0, g = c.length; f < g; f++) {
                                var m;
                                a: switch (m = c[f], m.tagName.toLowerCase()) {
                                    case "button":
                                        m = !1;
                                        break a;
                                    case "input":
                                        var l = m.type.toLowerCase();
                                        if (l && -1 === a.indexOf(l)) {
                                            m = !1;
                                            break a
                                        }
                                    default:
                                        m = Mb(m, !1) && m.name && !1 === m.disabled
                                }
                                m && (d.push(c[f].name), e.push(c[f].type))
                            }
                            return {
                                node: b,
                                inputsName: d.length ? d : null,
                                inputsType: e.length ? e : null
                            }
                        },
                        getFormByInput: function(a) {
                            if (!a) return null;
                            a = a.form || a.getAttribute("form");
                            return "string" === typeof a ? document.getElementById(a) || null : a instanceof HTMLElement ? a : null
                        }
                    }
                }(),
                yc = function() {
                    function a(a) {
                        a = a || f.event;
                        var c = (a.which || a.keyCode) === J;
                        if ("which" in
                            a && a.which === H || "button" in a && a.button & H || c) {
                            a: {
                                a = a.target || a.srcElement;
                                for (var c = 0, d = g.length; c < d; c++) {
                                    var h;
                                    b: {
                                        h = a;
                                        for (var A = g[c], q = 0, E = A.types.length; q < E; q++) {
                                            var w;
                                            c: {
                                                var t = h;w = A.types[q];
                                                var r = null;
                                                if (w.filter.tagName)
                                                    for (var K = 0, v = w.filter.tagName.length; K < v && !(r = Lb(t, w.filter.tagName[K])); K++);
                                                else r = t;
                                                if (r) {
                                                    if (w.filter.attr)
                                                        for (t in t = void 0, w.filter.attr)
                                                            if (w.filter.attr.hasOwnProperty(t) && (K = w.filter.attr[t], v = r[t], !0 === K && !v || !1 === K && v || ea(K) && -1 === K.indexOf(v))) {
                                                                w = null;
                                                                break c
                                                            }
                                                    w = {
                                                        source: r,
                                                        type: w.type,
                                                        detail: r.tagName
                                                    }
                                                } else w = null
                                            }
                                            if (w) {
                                                w.category = A.category;
                                                h = w;
                                                break b
                                            }
                                        }
                                        h = null
                                    }
                                    if (h) {
                                        a = h;
                                        break a
                                    }
                                }
                                a = null
                            }
                            if (a) {
                                if (a.category === e) {
                                    try {
                                        a.data = new URL(a.source.href)
                                    } catch (z) {}
                                    if (!a.data) return
                                } else if (a.category === k) {
                                    if (a.data = zc.analyze(zc.getFormByInput(a.source)), !a.data) return
                                } else return;
                                c = D;
                                if (c.enabled && c.modes) {
                                    d = 0;
                                    for (h = c.modes.length; d < h; d++)
                                        if (A = a, q = c.modes[d], A.category === q.mode)
                                            if (A.category === e || A.category === k) {
                                                if (q = q.categories, A.data) {
                                                    E = void 0;
                                                    c: {
                                                        E = 0;
                                                        for (w = q.length; E < w; E++) {
                                                            for (var r =
                                                                    A, t = q[E], K = {
                                                                        category: A.category
                                                                    }, v = [], W = 0, y = t.types.length; W < y; W++) {
                                                                var ta = t.types[W],
                                                                    C = R({
                                                                        type: t.category
                                                                    }, K),
                                                                    L = u in ta,
                                                                    O;
                                                                p in ta ? O = b(r, ta, C, p) : L && (O = R({
                                                                    source: r.source,
                                                                    data: r.data,
                                                                    detail: ta.type
                                                                }, C));
                                                                if (O && (!L || !b(r, ta, C, u)))
                                                                    if (v.push(O), (ta.rule & x) !== x) break
                                                            }
                                                            if (r = v.length ? v : null) {
                                                                E = r;
                                                                break c
                                                            }
                                                        }
                                                        E = null
                                                    }
                                                    if (E) {
                                                        A = 0;
                                                        for (q = E.length; A < q; A++) c: {
                                                            w = E[A];r = {
                                                                type: "sendEvent",
                                                                category: "_" + w.category,
                                                                action: w.detail
                                                            };
                                                            if (w.category === e && (w.type === m || w.type === l)) {
                                                                if (r.label = w.data.href, !r.label) break c
                                                            } else if (w.category ===
                                                                n && (r.label = w.data.node.action, !r.label)) break c;_tmr.push(r)
                                                        }
                                                    }
                                                }
                                            } else s && console.warn("[TopMailRu] Error#1.24", "Not found tracking for type", A.type)
                                }
                            }
                        }
                    }

                    function b(a, b, d, e) {
                        var g = !1,
                            f = b[e];
                        if (ea(f)) {
                            var l = b[e + "Rule"] || z;
                            e = (l & q) === q;
                            for (var l = (l & t) === t, k = 0, m = f.length; k < m && !(g = c(a, f[k]), e && g); k++)
                                if (l && !g) return null
                        } else g = c(a, f);
                        return !g ? null : R({
                            source: a.source,
                            data: a.data,
                            detail: b.type
                        }, d)
                    }

                    function c(a, b) {
                        var c = b.rule || z,
                            e = (c & q) === q,
                            c = (c & t) === t,
                            g = !1,
                            f;
                        for (f in b)
                            if (b.hasOwnProperty(f) && "rule" !== f) {
                                var g =
                                    b[f],
                                    l;
                                switch (f) {
                                    case "domain":
                                        l = ib(a.data);
                                        break;
                                    case "fileExtension":
                                        l = Ob(a.data.pathname, /.\.([^\.]+)$/, 1) || "";
                                        break;
                                    default:
                                        l = a.data[f]
                                }
                                g = !0 === g ? !!(ea(l) ? l.length : l) : !1 === g ? !(ea(l) ? l.length : l) : d(l, g);
                                if (e && g) break;
                                else if (c && !g) return !1
                            }
                        return g
                    }

                    function d(a, b) {
                        var c = a;
                        if (c)
                            if (ea(c)) {
                                if (!c.length) return !1
                            } else c = [c];
                        else return !1;
                        var d = b,
                            e = z;
                        if (X(d) && !ea(d)) {
                            if (!ea(d.value)) return !1;
                            e = d.rule || e;
                            d = d.value
                        }
                        a: {
                            for (var g = (e & y) === y, f = (e & q) === q, e = (e & t) === t, l = !1, k = 0, m = d.length; k < m; k++) {
                                var h = d[k];
                                if (h) {
                                    var n =
                                        "string" === typeof h;
                                    n && !g && (h = h.toLowerCase());
                                    var p = h instanceof RegExp;
                                    if (n || p) {
                                        var l = !0,
                                            r;
                                        b: {
                                            r = c;
                                            for (var s = g, u = 0, v = r.length; u < v; u++) {
                                                var x = s ? r[u] : r[u].toLowerCase();
                                                if (p && h.test(x) || n && h === x) {
                                                    r = !0;
                                                    break b
                                                }
                                            }
                                            r = !1
                                        }
                                        if (f && r) {
                                            c = !0;
                                            break a
                                        } else if (e && !r) {
                                            c = !1;
                                            break a
                                        }
                                    }
                                }
                            }
                            c = f ? !1 : e ? l ? !0 : !1 : void 0
                        }
                        return c
                    }
                    var e = "click",
                        k = "submit",
                        g = [{
                            category: k,
                            types: [{
                                type: "button",
                                filter: {
                                    tagName: ["input", "button"],
                                    attr: {
                                        type: ["submit", "image"]
                                    }
                                }
                            }]
                        }, {
                            category: e,
                            types: [{
                                type: "a",
                                filter: {
                                    tagName: ["a"],
                                    attr: {
                                        href: !0
                                    }
                                }
                            }]
                        }],
                        m = "file",
                        l = "resource",
                        n = "submit",
                        p = "filter",
                        u = "stop",
                        q = 1,
                        t = 2,
                        y = 4,
                        x = 8,
                        z = q,
                        D = {
                            enabled: !0,
                            modes: [{
                                mode: k,
                                categories: [{
                                    category: n,
                                    types: [{
                                        type: "lead",
                                        filter: [{
                                            inputsName: ["phone"],
                                            inputsType: ["tel"],
                                            rule: q
                                        }, {
                                            inputsName: ["email"],
                                            inputsType: ["email"],
                                            rule: q
                                        }],
                                        filterRule: t,
                                        stop: {
                                            inputsName: {
                                                value: ["password"]
                                            }
                                        }
                                    }, {
                                        type: "form",
                                        filter: {
                                            inputsName: !0
                                        }
                                    }]
                                }]
                            }, {
                                mode: e,
                                categories: [{
                                    category: "contact",
                                    types: [{
                                        type: "email",
                                        filter: {
                                            protocol: ["mailto:"]
                                        }
                                    }, {
                                        type: "phone",
                                        filter: {
                                            protocol: ["tel:"]
                                        }
                                    }]
                                }, {
                                    category: m,
                                    types: [{
                                        type: "file",
                                        filter: {
                                            fileExtension: "7z bz2 gz apk iso cab dmg msi rar tar zip exe txt doc docx ppt pptx xls xlsx csv pdf psd rtf ods djvu eps 3gp aac ac3 avi flac flv divx midi mka mkv mp3 mp4 mpeg mpg mov ogg vob wav webm wma wmf wmv torrent".split(" ")
                                        }
                                    }]
                                }, {
                                    category: l,
                                    types: [{
                                        type: "outgoing",
                                        rule: x,
                                        stop: {
                                            domain: [Cc(v.host, 3, !1)],
                                            href: [/password/]
                                        }
                                    }, {
                                        type: "messenger",
                                        filter: {
                                            domain: jb("vk.me t.me telegram.me telegram.im web.telegram.org m.me web.whatsapp.com api.whatsapp.com chat.whatsapp.com wa.me".split(" "))
                                        },
                                        stop: {
                                            href: [/password/]
                                        }
                                    }, {
                                        type: "social",
                                        filter: {
                                            domain: jb("vk.com vkontakte.ru m.vk.com vk.ru ok.ru m.ok.ru odnoklassniki.ru facebook.com m.facebook.com fb.com twitter.com linkedin.com instagram.com tiktok.com youtube.com youtu.be m.youtube.com".split(" "))
                                        },
                                        stop: {
                                            href: [/password/]
                                        }
                                    }]
                                }]
                            }]
                        },
                        H = 1,
                        J = 13;
                    return {
                        enabled: !0,
                        start: function() {
                            r(h, "click", a);
                            r(h, "keypress", a)
                        }
                    }
                }();
            md && yc.start()
        }
        var z = function() {
                function a() {
                    b(null)
                }

                function b(a) {
                    e();
                    a ? (U = a === W, qa = a) : qa = S && null !== U ? U ? W : Z : h.visibilityState;
                    a = B();
                    for (var b in ka) v(b, a)
                }

                function c() {
                    if (!1 !== N) {
                        L(f, aa, ja);
                        ja = null;
                        f.clearInterval(ia);
                        ma = ia = null;
                        L(h, K, ca);
                        ca = null;
                        S && (L(f, T, ga), L(f, Y, ha), ha = ga = null);
                        k(!0);
                        for (var a in ba) {
                            var b = a,
                                c = ba[b];
                            c && (c = c.key, P(b), F(), delete ba[b], A(null, c))
                        }
                        G = null;
                        la = [];
                        wa = [];
                        I = {};
                        ba = {};
                        ka = {};
                        N = !1
                    }
                }

                function d(a, b, c) {
                    var d = a + "_" + b;
                    if (d in I) return !1;
                    var e = q(),
                        g = B(),
                        f = C(d, e, sb);
                    b = I[d] = {
                        id: a || null,
                        name: b,
                        key: f,
                        canUseInBackground: !!c,
                        startTS: e,
                        updateTS: g,
                        timespent: {}
                    };
                    if (a)
                        if (wa.push(d), d = b.canUseInBackground, b = ka[a]) {
                            if (c =
                                b.isActive, !c && (e = G && da(a, G)))
                                if (c = qa === W || d) b.updateTS = g, b.isActive = !0
                        } else e = G && da(a, G), c = qa === W || d, ka[a] = {
                            isActive: e && c,
                            updateTS: g,
                            timespent: {}
                        };
                    else la.push(d);
                    return !0
                }

                function e(a, b) {
                    var c, d;
                    2 > arguments.length ? (c = wa.concat(la), d = E) : (c = [a + "_" + b], d = V);
                    g(c, d)
                }

                function k(a, b, c) {
                    var d = !1,
                        e = [],
                        f = [];
                    2 > arguments.length ? (e = wa.slice(), (d = !!arguments[0]) && (e = e.concat(la))) : (d = a + "_" + b, -1 !== wa.indexOf(d) ? e = [d] : -1 !== la.indexOf(d) && (c ? e = [d] : f = [d]));
                    g(e, X);
                    g(f, V)
                }

                function g(a, b) {
                    var c = B(),
                        d = [],
                        e, g, f;
                    e = 0;
                    for (g =
                        a.length; e < g; e++) f = a[e], -1 !== wa.indexOf(f) ? m(f, b, c) : -1 !== la.indexOf(f) && d.push(f);
                    e = 0;
                    for (g = d.length; e < g; e++) f = d[e], m(f, b, c);
                    if (b === E && (R = c, R - N >= ra)) {
                        for (var l in I) n(l);
                        for (l in ba)
                            if (c = l, d = ba[c]) P(c), A(c, d.key);
                        N = R
                    }
                }

                function m(a, b, c) {
                    var d = I[a];
                    if (d && !1 !== d.updateTS)
                        if (d.timespent[qa] = (d.timespent[qa] || 0) + (c - (d.updateTS || R)), -1 !== la.indexOf(a) && x(null, c), b === X) d.updateTS = !1, n(a);
                        else if (b === w) {
                        d.updateTS = c;
                        var e;
                        a: {
                            if (b = I[a])
                                for (e in b.timespent)
                                    if (b.timespent[e] > pa) {
                                        e = !1;
                                        break a
                                    }
                            e = !0
                        }
                        e ? (l(a), F()) :
                            n(a)
                    } else d.updateTS = b === E ? null : c, l(a), F()
                }

                function l(a, b, c) {
                    var d = I[a];
                    if (!d) return null;
                    var e = b || d.key;
                    b = Q[e];
                    Q[e] = {
                        uid: a,
                        name: d.name,
                        counterID: c || d.id || G,
                        canUseInBackground: d.canUseInBackground,
                        isActive: !1 !== d.updateTS,
                        startTime: d.startTS,
                        timespent: {}
                    };
                    a = Q[e].timespent;
                    var d = d.timespent,
                        g;
                    for (g in d) a[g] = d[g];
                    if (c && (c = ka[c]))
                        if (e = Q[e]) {
                            e.common = {};
                            e = e.common;
                            c = c.timespent;
                            for (var f in c) e[f] = c[f]
                        }
                    return b || null
                }

                function n(a) {
                    var b = I[a];
                    b && (l(a), p(a, b.key))
                }

                function p(a, b) {
                    var c = Q[b];
                    if (c)
                        if (ea(c.counterID)) {
                            var d =
                                Q[b];
                            if (d) {
                                var c = d.counterID,
                                    e = [],
                                    g, f, k, h;
                                if (c) {
                                    k = 0;
                                    for (h = c.length; k < h; k++) {
                                        f = c[k];
                                        g = C(b, f);
                                        e.push(g);
                                        f = l(a || d.uid, g, f);
                                        var m = void 0;
                                        f && (m = Q[g], D(m.timespent, f.timespent), f.common && (m.common = m.common || {}, D(m.common, f.common)))
                                    }
                                }
                                delete Q[b];
                                F();
                                if (a && a in I)
                                    if (d.isActive) {
                                        s(a);
                                        k = 0;
                                        for (h = c.length; k < h; k++)
                                            if (d = ka[c[k]])
                                                for (var n in d.timespent) d.timespent[n] = 0
                                    } else t(a);
                                k = 0;
                                for (h = e.length; k < h; k++) u(e[k])
                            }
                        } else if (n = Q[b])(c = a && a in I) && !n.isActive && t(a), e = u(b), c && (e && n.isActive) && s(a)
                }

                function u(a) {
                    var b;
                    if (b = Q[a]) {
                        var c = M(b.timespent);
                        if (!1 === b.canUseInBackground && b.isActive && 0 === c.fg) b = null;
                        else {
                            c = [b.name, b.startTime, b.canUseInBackground ? 1 : 0, c.fg, c.bg];
                            if (b.common) {
                                var d = M(b.common);
                                (d.fg || d.bg) && c.push(d.fg, d.bg)
                            }
                            b = {
                                id: b.counterID,
                                msg: c.join("/")
                            }
                        }
                    } else b = !1;
                    if (!b) return !1;
                    c = ";e=" + escape("TS:" + b.msg);
                    H(J({
                        id: b.id
                    }, $, !1, !1) + c);
                    delete Q[a];
                    F();
                    return !0
                }

                function s(a) {
                    if (a = I[a])
                        for (var b in a.timespent) a.timespent[b] = 0
                }

                function t(a) {
                    if (a in I) {
                        var b; - 1 !== (b = la.indexOf(a)) && la.splice(b, 1);
                        if (-1 !== (b =
                                wa.indexOf(a)))
                            if (wa.splice(b, 1), b = I[a].id) {
                                var c = ka[b];
                                if (c) {
                                    var d = c.isActive;
                                    d && z(c, B());
                                    d = y(b, a);
                                    d || (c.isActive = !1)
                                }
                            }
                        delete I[a]
                    }
                }

                function v(a, b) {
                    var c = ka[a];
                    if (c) {
                        var d = G && da(a, G),
                            e = y(a);
                        c.isActive = d && e;
                        c.updateTS = b
                    }
                }

                function x(a, b) {
                    if (a) {
                        var c = ka[a];
                        c && (c.isActive ? z(c, B()) : c.updateTS = b)
                    } else
                        for (c in ka) x(c, b)
                }

                function y(a, b) {
                    for (var c in I)
                        if (c !== b && I[c].id === a && (qa === W || I[c].canUseInBackground)) return !0;
                    return !1
                }

                function z(a, b) {
                    a && (a.timespent[qa] = (a.timespent[qa] || 0) + (b - a.updateTS), a.updateTS =
                        b)
                }

                function C(a) {
                    return [].join.call(arguments, "_")
                }

                function D(a, b) {
                    for (var c in b) a[c] = (a[c] || 0) + (b[c] || 0)
                }

                function M(a) {
                    var b = a[W] || 0,
                        c = 0,
                        d;
                    for (d in a) d !== W && (c += a[d]);
                    return {
                        fg: b,
                        bg: c
                    }
                }

                function B() {
                    return Math.floor(f.performance.now())
                }

                function F() {
                    if (na) {
                        var a = {};
                        a[ua] = Q;
                        a[va] = Aa;
                        Da(sa, ya(a) || "")
                    }
                }

                function P(a) {
                    var b = ba[a];
                    b && (Aa[b.key] = {
                        uid: a,
                        name: b.name,
                        counterID: b.id,
                        value: b.value
                    })
                }

                function A(a, b) {
                    if (Aa[b]) {
                        var c;
                        if (c = Aa[b])
                            if (0 === c.value) c = null;
                            else {
                                var d = [c.name, c.value].join("/");
                                c = {
                                    id: c.counterID,
                                    msg: d
                                }
                            }
                        else c = !1;
                        c && (d = ";e=" + escape("TS:" + c.msg), H(J({
                            id: c.id
                        }, $, !1, !1) + d));
                        !1 !== c && (delete Aa[b], F());
                        if (c && a && (c = ba[a])) c.value = 0
                    }
                }
                var V = 1,
                    E = 2,
                    w = 4,
                    X = 8,
                    aa = oa ? "pagehide" : "unload",
                    K = "visibilitychange";
                "mozHidden" in h ? K = "mozvisibilitychange" : "webkitHidden" in h ? K = "webkitvisibilitychange" : "msHidden" in h && (K = "msvisibilitychange");
                var T = "focus",
                    Y = "blur";
                "onfocusin" in h && (T = "focusin", Y = "focusout");
                var W = "visible",
                    Z = "hidden",
                    ta = ["0"],
                    S = !1,
                    pa = 100,
                    ra = 12E4,
                    N = !1,
                    R = !1,
                    G = null,
                    la = [],
                    wa = [],
                    I = {},
                    qa, U = null,
                    ia, ma, ca,
                    ga, ha, ja, sa = "tmr_tslog",
                    ua = "activity",
                    va = "count",
                    Q = {},
                    ba = {},
                    Aa = {},
                    ka = {};
                return {
                    init: function() {
                        if (na) {
                            var a = Ma(xa(sa) || "{}");
                            Q = a[ua] || {};
                            Aa = a[va] || {}
                        }
                        for (var b in Q) p(null, b);
                        for (b in Aa) A(null, b)
                    },
                    launch: function() {
                        !1 === N && (N = B(), R = B(), qa = S && null !== U ? U ? W : Z : h.visibilityState, ja = c.bind(f), r(f, aa, ja), ma = a.bind(f), ia = f.setInterval(ma, 1E4), ca = b.bind(f, null), r(h, K, ca), S && (ga = b.bind(f, W), ha = b.bind(f, Z), r(f, T, ga), r(f, Y, ha)))
                    },
                    enable: function(a) {
                        if (G) {
                            if (da(a, G)) return;
                            g(la, w)
                        } else {
                            for (var b = 0, c = ta.length; b <
                                c; b++) d(null, ta[b], !1);
                            G = []
                        }
                        G.push(a);
                        v(a, B())
                    },
                    disable: function(a) {
                        if (G) {
                            var b;
                            a: {
                                b = 0;
                                for (var c = G.length; b < c; b++)
                                    if (G[b] == a) break a;b = -1
                            }
                            if (-1 !== b && (g(la, w), G.splice(b, 1), b = B(), a = ka[a])) a.isActive = !1, a.updateTS = b
                        }
                    },
                    startActivity: d,
                    updateActivity: e,
                    stopActivity: k,
                    incCount: function(a, b) {
                        var c = a + "_" + b,
                            d;
                        if (!(d = ba[c]))
                            if (c in ba) d = ba[c];
                            else {
                                d = q();
                                var e = C(b, d, sb);
                                d = ba[c] = {
                                    id: a,
                                    name: b,
                                    key: e,
                                    startTS: d,
                                    value: 0
                                }
                            }
                        d && d.id === a && (d.value++, P(c), F())
                    },
                    defaultID: function() {
                        return G ? G[0] : void 0
                    }
                }
            }(),
            qb = !1,
            ra = null,
            hc = function() {
                return ra
            };
        (function() {
            function a() {
                var a = Z ? Y(g) : null;
                if (a) try {
                    var a = decodeURIComponent(a).split(":"),
                        b = a[0],
                        c = parseInt(a[1] || "");
                    if (b && c && !isNaN(c)) return {
                        fpid: b,
                        ts: c
                    }
                } catch (d) {}
                return null
            }

            function b() {
                var a = xa(f);
                if (a) try {
                    if ((a = Ma(a)) && a.fpid && a.time) return {
                        fpid: a.fpid,
                        ts: a.time
                    }
                } catch (b) {}
                return null
            }

            function c() {
                var a = xa(f);
                if (a) try {
                    (a = Ma(a)) && (ra = a.fpid || null)
                } catch (b) {}
                e()
            }

            function d() {
                e()
            }

            function e() {
                Da(h, ya({
                    fpid: ra,
                    ts: q()
                }))
            }
            var f = "rb_sync_id",
                g = "domain_sid",
                h = "tmr_trgfpid";
            hc = function() {
                if ("rb_sync" in window) try {
                    ra = window.rb_sync.id
                } catch (c) {}
                if (!ra) {
                    var d = b() || a();
                    d && (ra = d.fpid)
                }
                return ra
            };
            (function() {
                var e;
                if (!(e = b()))
                    if (!(e = a())) a: {
                        var g = na ? xa(h) : null;
                        if (g) try {
                            if ((g = Ma(g)) && g.fpid && g.ts) {
                                e = {
                                    fpid: g.fpid,
                                    ts: g.ts
                                };
                                break a
                            }
                        } catch (f) {}
                        e = null
                    }
                if (e && (ra = e.fpid, 864E5 > q() - e.ts)) return;
                ob("https://privacy-cs.mail.ru/static/sync-loader.js", c, d)
            })()
        })();
        var ic;
        (function() {
            var a = null,
                b = 0;
            ic = function() {
                var c = q();
                if (b && 5E3 > c - b) return a;
                b = c;
                return a = Z ? Y("vkidExtId") : null
            }
        })();
        var Yc =
            "60.6.0",
            ab = 0,
            Ka = 0,
            sb = Qb(16),
            T = null,
            U = null,
            Ja = 0,
            Ga = "tmr_reqNum",
            F = null;
        Z && (F = Y(Ga) || null, null !== F && mb(Ga, nb));
        na && null === F && (F = xa(Ga) || null);
        F = null === F ? 0 : parseInt(F, 10);
        na && Da(Ga, F);
        var qd = ["c8fdd627023b870e211a908648e1a5e1"],
            ia = (Z ? Y("tmr_lvid") : null) || (na ? xa("tmr_lvid") : null),
            ha = (Z ? Y("tmr_lvidTS") : null) || (na ? xa("tmr_lvidTS") : null);
        if (null === ia || -1 === ia.search(/^[0-9a-fA-F]+$/) || Nb(ia, qd)) ia = Qb(32), ha = null;
        Tb("tmr_lvid", ia);
        if (null === ha || -1 === ha.search(/^\d+$/)) ha = "" + q();
        Tb("tmr_lvidTS", ha);
        var S =
            0,
            C = [],
            Na = [],
            fb = [],
            eb = [],
            cb = [],
            bb = {},
            Wc = "ontouchstart" in f || 1 < (B.maxTouchPoints || B.msMaxTouchPoints) ? "1" : "0",
            Xc = f.devicePixelRatio || 0,
            Vc = function() {
                var a = f.screen;
                return a ? a.width + "*" + a.height : ""
            }(),
            Gb = f.performance || f.mozPerformance || f.msPerformance || f.webkitPerformance || {},
            Ua = Gb.timing || {},
            tb = Gb.navigation || {},
            jc = "unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),
            rd = "startTime duration firstInterimResponseStart redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd".split(" "),
            Va = Fa("navigationStart"),
            sd = Fa("domContentLoadedEventStart"),
            td = Fa("loadEventStart"),
            N = Va,
            Wa = null,
            Ha = [];
        (function() {
            if (!Wa) try {
                for (var a = Gb.getEntriesByType("resource"), b, c = 0, d = a.length; c < d; c++)
                    if (b = a[c], b.name === document.currentScript.src) {
                        for (var e = b, f = rd, g = [], h = 0, l = f.length; h < l; h++) g.push(Math.round(e[f[h]] ||
                            0));
                        Wa = g.join("/");
                        b.deliveryType && Ha.push("cdt=" + b.deliveryType);
                        b.nextHopProtocol && Ha.push("cnhp=" + b.nextHopProtocol);
                        if (b.encodedBodySize || b.decodedBodySize || b.transferSize) Ha.push("cs=" + [b.encodedBodySize || 0, b.decodedBodySize || 0, b.transferSize || 0].join("-"))
                    }
            } catch (n) {
                s && console.warn("[TopMailRu] Error#1.32", "Resource timing error", n)
            }
        })();
        var kc = "downlink downlinkMax effectiveType rtt saveData type".split(" "),
            ma, Hb;
        ma = function(a, b, c) {
            if (b && "object" === typeof b) {
                var d = "id" in b && b.id || S,
                    e = c.title ||
                    null,
                    f, g = Hb(b, {
                        params: c.required,
                        fn: c.fn
                    });
                if (g.missed.length) console.warn("[TopMailRu]" + (d ? "[" + d + "]" : "") + " Error#1.14", "Unspecified " + (1 < g.missed.length && g.missed.slice(0, -1).join(", ") + " and " || "") + g.missed.slice(-1) + " in " + a);
                else {
                    var h = Hb(b, {
                        params: c.optional,
                        fn: c.fn
                    });
                    f = [].concat(g.values).concat(h.values);
                    g = [].concat(g.missed).concat(h.missed);
                    c.value && (b = "value" in b && b.value, !0 !== c.value && (b = b || c.value), b ? f.push("value: " + b) : g.push("value"));
                    c = f.length ? "{ " + f.join(", ") + " }" : "";
                    f = g.length ?
                        "(" + (1 < g.length ? g.slice(0, -1).join(", ") + " and " + g.slice(-1) + " are" : g.slice(-1) + " is") + " empty)" : "";
                    d ? console.info("[TopMailRu][" + d + "]: " + (e || a) + " " + c + " " + f) : console.warn("[TopMailRu] Error#1.15", "Undefined counter ID of " + a + " " + c)
                }
            } else console.warn("[TopMailRu][][" + a + "] Error#1.13")
        };
        Hb = function(a, b) {
            var c = [],
                d = [],
                e, f, g;
            if (b.params)
                for (e in b.params)
                    if (b.params.hasOwnProperty(e) && !1 !== b.params[e])
                        if (f = e in a && a[e], !0 !== b.params[e] && (f = f || b.params[e]), f) try {
                            g = b.fn ? b.fn : null, c.push(e + ': "' + (g ? g(e,
                                f) : f) + '"')
                        } catch (h) {
                            console.warn("[TopMailRu] Error#1.16", h)
                        } else d && d.push(e);
            return {
                values: c,
                missed: d
            }
        };
        var y = {},
            Za = null,
            Ya = null,
            Bb = [];
        p.prototype.callbackOnReady = function(a) {
            s && ma("onReady", a, {
                title: "OnReady callback"
            });
            a && "object" === typeof a && "function" === typeof a.callback && (a.callback.call(a.context || null), oa && Bb.push(a))
        };
        p.prototype.pageView = function(a) {
            Ea(a);
            a: if (a && "object" === typeof a && a.id) {
                5 > Na.length && !da(a.id, Na) && (Na.push(a.id), !1 !== a.beat && fb.push(a.id), C.push(a), Ia && Ub(a));
                oa && (bb[a.id] =
                    R(!0, {}, a), bb[a.id].bfCache = !0);
                "detectBlocker" in a && !a.detectBlocker && (vb = !0);
                var b = "string" === typeof a.ecommerce,
                    c = b && -1 !== a.ecommerce.search(/\S/);
                if (5 > eb.length && !da(a.id, eb) && (!0 === a.ecommerce || b && !c || b && c || !1 !== a.ecommerce && !b && (da(a.id, od) || !da(a.id, pd)))) {
                    eb.push(a.id);
                    if (b && c) {
                        if (Cb && (Db(a.ecommerce), V !== a.ecommerce)) {
                            V = a.ecommerce;
                            M && (M = [0, 0, V]);
                            break a
                        }
                        V = a.ecommerce;
                        M && (M = [0, 0, V])
                    }
                    b = [a.id];
                    if (Cb)
                        for (var c = 0, d = db.length; c < d; c++) Vb(b, db[c])
                }
                a.timespent = P && (a.timespent || da(a.id, ld) && !1 !==
                    a.timespent);
                P && (a.timespent ? z.enable(a.id) : z.disable(a.id));
                Eb || (Eb = !0 === a.geolocation || a.timespent && !1 !== a.geolocation) && xc(Fb);
                qb && !da(a.id, cb) && (cb.push(a.id), Zb([a.id]))
            }
            s && ma("pageView", a, {
                title: "Page view",
                optional: {
                    url: v.href
                }
            });
            aa(a) && (H(J(a, "/counter", !1, !0)), Ka = q())
        };
        p.prototype.reachGoal = function(a) {
            Ea(a);
            s && ma("reachGoal", a, {
                title: "Reach goal",
                value: !0,
                required: {
                    goal: !0
                }
            });
            if (aa(a) && "goal" in a && a.goal) {
                var b = "value" in a && a.value ? parseInt(a.value) || "" : "";
                H(J(a, $, !1, !0) + (";e=" + escape("RG:" +
                    b + "/" + a.goal)))
            }
        };
        var xb = "VALUE";
        p.prototype.itemView = function(a) {
            s && ma("itemView", a, {
                title: "Item view",
                optional: {
                    list: !0,
                    pagetype: !0,
                    productid: !0,
                    totalvalue: !0
                },
                fn: function(a, b) {
                    return ("" + b).replace(/;/g, " ")
                }
            });
            if (aa(a)) {
                var b = a.list || "",
                    c = a.productid || "",
                    d = a.pagetype || "",
                    e = a.totalvalue || 0,
                    f = fd(a.id, d, e, c);
                f && this.reachGoal(f);
                (new Image).src = "https://ad.mail.ru/retarget/?counter=" + (a.id || S) + "&list=" + b + "&productid=" + c + "&pagetype=" + d + "&totalvalue=" + e + "&_=" + Math.random();
                b = "IV:" + e + "/" + ("" + b).replace(/;/g,
                    " ") + ";" + ("" + c).replace(/;/g, " ") + ";" + ("" + d).replace(/;/g, " ");
                H(J(a, $, !1, !0) + (";e=" + escape(b)))
            }
        };
        var gd = "vk_ecom_";
        p.prototype.sendEvent = function(a) {
            Ea(a);
            s && ma("sendEvent", a, {
                title: "Send event",
                value: !0,
                required: {
                    category: !0,
                    action: !0
                },
                optional: {
                    label: !0
                },
                fn: function(a, b) {
                    return ("" + b).substring(0, 300).replace(/;/g, " ")
                }
            });
            if (aa(a) && "category" in a && a.category && "action" in a && a.action) {
                var b = ("" + a.category).substring(0, 300),
                    c = ("" + a.action).substring(0, 300),
                    d = "label" in a && a.label ? ("" + a.label).substring(0,
                        300) : "",
                    b = "CE:" + ("value" in a && a.value ? parseInt(a.value) || "" : "") + "/" + ("" + b).replace(/;/g, " ") + ";" + ("" + c).replace(/;/g, " ") + ";" + ("" + d).replace(/;/g, " ");
                H(J(a, $, !1, !0) + (";e=" + escape(b)))
            }
        };
        p.prototype.setUserID = function(a) {
            if (null === a || !1 === a || void 0 === a) this.deleteUserID();
            else {
                var b = typeof a;
                "number" !== b && "string" !== b ? s && console.warn("[TopMailRu] Error#1.17", "Invalid user ID in setUserID") : (T = a, s && console.info("[TopMailRu]: Global user ID = " + T))
            }
        };
        p.prototype.getUserID = function() {
            return T || 0 === T ?
                T : void 0
        };
        p.prototype.deleteUserID = function() {
            T = null;
            s && console.info("[TopMailRu]: Reset global user ID to null")
        };
        p.prototype.setUserParams = function(a) {
            if (null === a || !1 === a || void 0 === a) this.deleteUserParams();
            else if (X(a)) {
                try {
                    U = R(!0, {}, a)
                } catch (b) {
                    s && console.warn("[TopMailRu] Error#1.22", "Invalid user params in setUserParams");
                    return
                }
                s && console.info("[TopMailRu]: Global user params = " + ya(U))
            } else s && console.warn("[TopMailRu] Error#1.21", "Invalid user params in setUserParams")
        };
        p.prototype.getUserParams =
            function() {
                var a = U ? U : void 0;
                return a ? R(!0, {}, a) : void 0
            };
        p.prototype.deleteUserParams = function() {
            U = null;
            s && console.info("[TopMailRu]: Reset global user params to null")
        };
        p.prototype.getClientID = function() {
            var a = ia;
            return a || 0 === a ? a : void 0
        };
        p.prototype._MT_event = function(a, b, c) {
            Ea(a);
            s && ma(b, a, {
                title: c
            });
            aa(a) && H(J(a, $, !1, !0) + (";e=" + escape("MT:/" + b)))
        };
        p.prototype.miniAppEvent = function(a) {
            this._MT_event(a, "miniAppEvent", "VK Mini App Event")
        };
        var Ib = function(a, b) {
            if (P) {
                var c = z.defaultID();
                aa(a, c) && (!X(a) ||
                    !("activity" in a && a.activity) ? s && console.warn("[TopMailRu] Error#1.27", "Invalid startActivity command: ID of activity is required") : z.startActivity(a.id || c, "" + a.activity, null === b ? !!a.canUseInBackground : b))
            }
        };
        p.prototype.startTimespent = function(a) {
            Ib(a, null)
        };
        p.prototype.startForegroundTimespent = function(a) {
            Ib(a, !1)
        };
        p.prototype.startAnytimeTimespent = function(a) {
            Ib(a, !0)
        };
        p.prototype.updateTimespent = function(a) {
            if (P) {
                var b = z.defaultID();
                aa(a, b) && (!X(a) || !("activity" in a && a.activity) ? z.updateActivity() :
                    "number" === typeof a.activity || "string" === typeof a.activity ? z.updateActivity(a.id || b, "" + a.activity) : s && console.warn("[TopMailRu] Error#1.28", "Invalid updateActivity command: ID of activity should be number or string"))
            }
        };
        p.prototype.stopTimespent = function(a) {
            if (P) {
                var b = z.defaultID();
                aa(a, b) && (!X(a) || !("activity" in a && a.activity) ? z.stopActivity(!1) : "number" === typeof a.activity || "string" === typeof a.activity ? z.stopActivity(a.id || b, "" + a.activity, !1) : s && console.warn("[TopMailRu] Error#1.29", "Invalid stopActivity command: ID of activity should be number or string"))
            }
        };
        p.prototype.incrementEventTimespent = function(a) {
            if (P) {
                var b = z.defaultID();
                aa(a, b) && (!a || !("activity" in a && a.activity) ? s && console.warn("[TopMailRu] Error#1.31", "Invalid incrementEventTimespent command: ID of countable activity is required") : z.incCount(a.id || b, "" + a.activity))
            }
        };
        p.prototype.processEvent = function(a, b) {
            if (a && "object" === typeof a)
                if ("type" in a) {
                    if ("onready" === a.type) {
                        if (b && 0 > b) return;
                        this.callbackOnReady(a)
                    } else if (b && 0 < b) return;
                    switch (a.type) {
                        case "pageView":
                            this.pageView(a);
                            break;
                        case "reachGoal":
                            this.reachGoal(a);
                            break;
                        case "itemView":
                            this.itemView(a);
                            break;
                        case "sendEvent":
                            this.sendEvent(a);
                            break;
                        case "setUserID":
                            "userid" in a && this.setUserID(a.userid);
                            break;
                        case "deleteUserID":
                            this.deleteUserID();
                            break;
                        case "setUserParams":
                            "params" in a && this.setUserParams(a.params);
                            break;
                        case "deleteUserParams":
                            this.deleteUserParams();
                            break;
                        case "miniAppEvent":
                            this.miniAppEvent(a);
                            break;
                        case "startTimespent":
                            this.startTimespent(a);
                            break;
                        case "startForegroundTimespent":
                            this.startForegroundTimespent(a);
                            break;
                        case "startAnytimeTimespent":
                            this.startAnytimeTimespent(a);
                            break;
                        case "updateTimespent":
                            this.updateTimespent(a);
                            break;
                        case "stopTimespent":
                            this.stopTimespent(a);
                            break;
                        case "incrementEventTimespent":
                            this.incrementEventTimespent(a)
                    }
                } else s && console.warn("[TopMailRu] Error#1.19", "Unspecified type of push event");
            else s && console.warn("[TopMailRu] Error#1.18", "Invalid push event")
        };
        p.prototype.push = function(a) {
            for (var b = 0, c = arguments.length; b < c; b++) this.processEvent(arguments[b])
        };
        var Ac = !1;
        p.prototype.onready = function() {
            Ac || (Ac = !0, !vb && !Ia && nd(Zc, $c), Db(V), ad())
        };
        var Ab = !1;
        p.prototype.onload = function() {
            if (!Ab) {
                Ab = !0;
                Ja = q();
                if (!Oa && 0 < C.length) {
                    for (var a = ";e=" + escape("RT/load") + ";et=" + Ja, b = 0; b < C.length; b++) H(J(C[b], $, !0, !0) + a);
                    Ka = Ja
                }
                cd()
            }
        };
        p.prototype.beat = function() {
            var a;
            if (!wb && ab) {
                var b = q();
                if (!(12E4 < b - ab)) {
                    if (12E4 < b - Ka) {
                        a = ";e=" + escape("RT/resend") + ";et=" + Ja;
                        for (var c = 0; c < C.length; c++) !1 !== C[c].beat && H(J(C[c], $, !1, !0) + a)
                    } else 0 < fb.length && (a = ";e=" + escape("RT/beat") + ";ids=" + escape(fb.join()), H(J({
                        id: fb[0]
                    }, $, !1, !0) + a));
                    Ka = b
                }
            }
        };
        var zb = !1;
        p.prototype.unload =
            function() {
                if (!zb) {
                    zb = !0;
                    if (!Oa) {
                        var a;
                        a = (a = $b()) ? q() - a : void 0;
                        a = ";e=" + escape("RT/unload") + ";et=" + q() + (a ? ";pvt=" + escape(a) : "");
                        if (ja.support) {
                            var b = ja.getLog();
                            a += ";vtauto=" + b.auto
                        }
                        for (b = 0; b < C.length; b++) H(J(C[b], $, !0, !0) + a)
                    }
                    oa && (y.dcl3 && (clearTimeout(y.dcl3), delete y.dcl3), y.pvt2 && (clearTimeout(y.pvt2), delete y.pvt2), y.pvt15 && (clearTimeout(y.pvt15), delete y.pvt15), y.beat && (clearInterval(y.beat), delete y.beat))
                }
            };
        p.prototype.activity = function(a) {
            ab = q()
        };
        var ua = _tmr;
        _tmr = new p;
        P && z.init();
        for (var D =
                0, Ra = ua.length, ca; D < Ra; D++)(ca = ua[D]) && "object" === typeof ca && Ea(ca);
        gb = (new Date).getTime();
        D = 0;
        for (Ra = ua.length; D < Ra; D++) ca = ua[D], _tmr.processEvent(ca, 1);
        Sa = (new Date).getTime();
        D = 0;
        for (Ra = ua.length; D < Ra; D++) ca = ua[D], _tmr.processEvent(ca, -1);
        "complete" === h.readyState || "loading" !== h.readyState && !h.documentElement.doScroll ? (Ya = sd, _tmr.onready(), pc()) : h.addEventListener ? r(h, "DOMContentLoaded", $a) : h.attachEvent && r(h, "readystatechange", $a);
        "complete" === h.readyState ? (Za = td, _tmr.onload()) : oa ? r(f, "pageshow",
            yb) : r(f, "load", yb);
        oa ? r(f, "pagehide", La) : (r(f, "unload", La), r(f, "beforeunload", La));
        oc();
        if (!wb) try {
            for (var Bc = "scroll gesturechange touchmove mousedown mousemove mouseup touch".split(" "), ud = function(a) {
                    r(h, a, function() {
                        _tmr.activity(a)
                    })
                }, D = 0; D < Bc.length; D++) ud(Bc[D]);
            r(f, "scroll", function() {
                _tmr.activity("scallback")
            })
        } catch (vd) {
            s && console.warn("[TopMailRu] Error#1.20", vd)
        }
        Ta = (new Date).getTime()
    }
})();