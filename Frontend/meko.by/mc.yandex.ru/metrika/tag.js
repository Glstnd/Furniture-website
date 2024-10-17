(function() {
    try {
        (function() {
            function ef(a, c, b, d) {
                var e = this;
                return C(window, "c.i", function() {
                    function f(E) {
                        (E = ff(l, m, "", E)(l, m)) && (O(E.then) ? E.then(g) : g(E));
                        return E
                    }

                    function g(E) {
                        E && (O(E) ? p.push(E) : ia(E) && x(function(Q) {
                            var P = Q[0];
                            Q = Q[1];
                            O(Q) && ("u" === P ? p.push(Q) : h(Q, P))
                        }, ua(E)))
                    }

                    function h(E, Q, P) {
                        e[Q] = Xl(l, m, P || q, Q, E)
                    }
                    var k, l = window;
                    (!l || isNaN(a) && !a) && Yd();
                    var m = Yl(a, Zd, c, b, d),
                        p = [],
                        q = [kh, ff, lh];
                    q.unshift(Zl);
                    var r = z(R, Ua),
                        t = K(m);
                    m.id || Sa(Na("Invalid Metrika id: " + m.id, !0));
                    var y = ed.C("counters", {});
                    if (y[t]) return Jb(l,
                        t, "dc", (k = {}, k.key = t, k)), y[t];
                    $l(l, t, mh(a, c, b, d));
                    y[t] = e;
                    ed.D("counters", y);
                    ed.Ga("counter", e);
                    x(function(E) {
                        E(l, m)
                    }, gf);
                    x(f, fd);
                    f(am);
                    h(bm(l, m, p), "destruct", [kh, lh]);
                    Qb(l, D([l, r, f, 1, "a.i"], nh));
                    x(f, X)
                })()
            }

            function kh(a, c, b, d) {
                return C(a, "cm." + b, d)
            }

            function lh(a, c, b, d) {
                return function() {
                    var e = Oa(arguments);
                    e = d.apply(void 0, e);
                    return Y(e) ? Ja(a, c) : e
                }
            }

            function cm(a, c) {
                delete J(a).C("cok", {})[c]
            }

            function $l(a, c, b) {
                a = J(a);
                var d = a.C("cok", {});
                d[c] = b;
                a.D("cok", d)
            }

            function dm(a, c) {
                var b = "" + c,
                    d = {
                        id: 1,
                        ba: "0"
                    },
                    e = em(b);
                e ? d.id = e : -1 === nb(b, ":") ? (b = Da(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Da(b[0]), d.ba = $d(e) ? "1" : "0");
                return [Ja(a, d), d]
            }

            function oh(a, c, b, d) {
                var e;
                c = (e = {}, e.code = [
                    [1, "ym_debug", [18, ["a", [37, [40, "require"], "loadScript"]],
                            ["b", [37, [40, "require"], "callInWindow"]]
                        ],
                        [2, [37, [40, "a"], ph + "/" + c + ".js?ver=" + va.fb, [24, null, [],
                            [3, [2, [37, [40, "b"], "Ya._metrika.ytmm." + c + ".init", b, hf(d), va.fb]]]
                        ]]]
                    ]
                ], e);
                fm(a)(c)
            }

            function gm() {
                return {
                    data: {},
                    Na: {
                        checkPermission: F,
                        Ej: function() {
                            return !0
                        }
                    }
                }
            }

            function hm(a) {
                return ia(a) &&
                    M(a.code)
            }

            function hf(a) {
                if (M(a)) return a = z(hf, a), Lc([22], a);
                if (ia(a)) return a = z(function(c) {
                    return [c[0], hf(c[1])]
                }, ua(a)), Lc([23], a);
                if (qh(a)) return a;
                Sa(Pa("npv"))
            }

            function im(a, c, b) {
                var d;
                c = c.slice(2);
                a = {
                    Na: b.Na,
                    l: a,
                    event: b.event
                };
                b = [(d = {}, d.require = {
                    kind: 0,
                    value: w(jm, gd([a]))
                }, d.data = {
                    kind: 0,
                    value: b.data
                }, d)];
                jf(b, Lc([3], c))
            }

            function jf(a, c, b) {
                c = c.slice(1);
                a.push(b || {});
                x(function(d) {
                    M(d) && 3 === d[0] ? jf(a, d) : !M(d) || 18 !== d[0] && 19 !== d[0] ? M(d) && 2 === d[0] && Rb(a, d[1]) : km(a, d)
                }, c);
                a.pop()
            }

            function km(a,
                c) {
                var b = 18 === c[0];
                x(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (b && 1 === d.length) throw Na("mca");
                    d = a[a.length - 1];
                    if (ob(d, e)) throw Na("vr");
                    f = Rb(a, f);
                    d[e] = {
                        kind: b ? 0 : 1,
                        value: f
                    }
                }, c.slice(1))
            }

            function Rb(a, c) {
                if (qh(c)) return c;
                if (M(c) && 40 === c[0]) {
                    a: {
                        var b = c[1];
                        for (var d = a.length; 0 < d;) {
                            var e = a[--d];
                            if (ob(e, b)) {
                                b = e[b];
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) throw Na("vnd");
                    return b.value
                }
                if (M(c) && 37 === c[0]) {
                    d = c.slice(2);
                    b = Rb(a, c[1]);
                    if (!O(b)) throw Na("tenf");
                    d = z(u(a, Rb), d);
                    return b.apply(null, d)
                }
                if (M(c) && 24 === c[0]) return lm(a, c);
                if (M(c) && 35 === c[0]) {
                    d = c[2];
                    b = Rb(a, c[1]);
                    d = Rb(a, d);
                    if (!b) throw Na("noma");
                    return b["" + d]
                }
                if (M(c) && 23 === c[0]) return mm(a, c);
                if (M(c) && 22 === c[0]) return nm(a, c)
            }

            function nm(a, c) {
                return z(function(b) {
                    return Rb(a, b)
                }, c.slice(1))
            }

            function mm(a, c) {
                return N(function(b, d) {
                    var e = d[1],
                        f = Rb(a, d[0]);
                    e = Rb(a, e);
                    b["" + f] = e;
                    return b
                }, {}, c.slice(1))
            }

            function qh(a) {
                return aa(a) || "[object Number]" === Object.prototype.toString.call(a) || !!a === a || ba(a)
            }

            function lm(a, c) {
                var b = c[1],
                    d = c[2],
                    e = c[3],
                    f = z(R, a);
                return function() {
                    var g =
                        arguments,
                        h = N(function(k, l, m) {
                            if (k[l]) throw Na("da");
                            k[l] = {
                                kind: 1,
                                value: g[m]
                            };
                            return k
                        }, {}, d);
                    b && !I(b, d) && (h[b] = {
                        kind: 0,
                        value: b
                    });
                    jf(f, e, h)
                }
            }

            function jm(a) {
                return ob(rh, a) ? rh[a] : void 0
            }

            function om(a, c, b, d) {
                function e() {
                    g.state = 1;
                    b()
                }

                function f() {
                    g.state = 2;
                    d && d()
                }
                var g = pm(a, c);
                c = g.Ki;
                var h = g.state;
                c && 2 !== h ? 1 === h ? e() : (a = la(a), a.F(c, ["load"], e), a.F(c, ["error"], f)) : f()
            }

            function pm(a, c) {
                kf[c] || (kf[c] = {
                    Ki: hd(a, {
                        src: c
                    }),
                    state: 0
                });
                return kf[c]
            }

            function sh(a, c) {
                if (ba(a)) throw Na("noma");
                if (1 === c.length) return a;
                var b = n(a, G(".", c.slice(0, -1)));
                if (!b) throw Na("noma");
                return b
            }

            function ae(a, c) {
                if (ba(c) || !!c === c || Sb(a, c) || aa(c)) return c;
                if (ia(c)) return N(function(b, d) {
                    b[d[0]] = ae(a, d[1]);
                    return b
                }, {}, ua(c));
                if (M(c)) return z(u(a, ae), c)
            }

            function id(a) {
                if (!aa(a)) throw Na("Global property path is not a string");
                if (I(a.split(".")[0], qm)) throw Na("rwp");
            }

            function rm(a) {
                sm(a, function(c, b) {
                    Mc(a, "ytm." + c, b)
                })
            }

            function lf(a, c, b) {
                return function() {
                    try {
                        return c.apply(null, arguments)
                    } catch (d) {
                        th(a, d)
                    }
                    return b
                }
            }

            function uh(a) {
                return {
                    Fi: Kb(a.element),
                    xd: a.xd
                }
            }

            function tm(a) {
                if (!a) return "";
                a = a.match(um);
                if (!a || 0 === a.length) return "";
                var c = vm();
                return "//HTML/BODY/" + N(function(b, d) {
                    var e = d[0],
                        f = Da(d.slice(1));
                    return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b
                }, "", a)
            }

            function wm(a) {
                return vh(a) || xm(a)
            }

            function zm(a, c) {
                var b = c.patterns;
                return 0 === b.length ? !1 : Va(u(a, wh), b)
            }

            function Am(a, c) {
                var b = c.patterns;
                if (0 === b.length) return !1;
                if (1 === b.length) return wh(a, b[0]);
                b = N(function(f, g) {
                    var h = g[0],
                        k = g[1],
                        l = a[h];
                    l === k && (f.wd += 1, "i" === h || "c" === h ? f.uf = !0 : "p" === h && xh(l) ===
                        xh(k) && (f.wf = !0));
                    return f
                }, {
                    wd: 0,
                    uf: !1,
                    wf: !1
                }, b);
                var d = b.uf,
                    e = b.wf;
                return 2 <= b.wd || d && e
            }

            function wh(a, c) {
                var b = a[c[0]];
                return !(!b || b !== c[1])
            }

            function Bm(a) {
                x(function(c) {
                    var b = c.event;
                    c = c.data;
                    var d = u(b, Cm);
                    "bidTimeout" === b ? x(d, c) : d(c)
                }, a)
            }

            function Cm(a, c) {
                if (I(a, Dm)) {
                    var b = n(c, "auctionId") || n(c, "bid.auctionId") || void 0;
                    if (b) {
                        dc[b] || (dc[b] = {
                            Nc: {}
                        });
                        b = dc[b];
                        var d = "auctionInit" === a,
                            e = "auctionEnd" === a,
                            f = "adRenderFailed" === a || "adRenderSucceeded" === a;
                        f || b.Xc && !d || (b.Xc = n(c, "auctionStart") || void 0, !b.Xc &&
                            d && (b.Xc = c.timestamp));
                        var g = D([a, b], Em);
                        "bidRequested" === a ? x(g, c.bids) : f ? Fm(a, b, c) : e ? (b.Ve = c.auctionEnd || c.timestamp, b.Ii = ha(function(h, k, l) {
                            return mf(h, l) === k
                        }, z(V("bidderCode"), c.bidderRequests))) : d || g(c);
                        b.Ve && (b.da = !0)
                    }
                }
            }

            function Fm(a, c, b) {
                var d, e = b.bid,
                    f = e.bidderCode || e.bidder;
                e = e.adUnitCode;
                f && e && (c = yh(c, e), c.Rb || (c.Rb = {}), a = "adRenderSucceeded" === a, c.Rb[f] = (d = {}, d.success = a, d), a || (c.Rb[f].reason = b.reason, c.Rb[f].message = b.message))
            }

            function Em(a, c, b) {
                var d = b.adUnitCode,
                    e = b.bidderCode || b.bidder;
                if (e && d) {
                    var f = yh(c, d);
                    !f.$d && b.mediaTypes && (f.$d = {}, x(function(g) {
                        var h = g[0];
                        g = g[1];
                        var k;
                        M(g) ? k = g : g.sizes ? k = g.sizes : g.playerSize && (k = g.playerSize);
                        k && (f.$d[h] = k)
                    }, ua(b.mediaTypes)));
                    "bidTimeout" === a ? (f.timeout || (f.timeout = {}), f.timeout[e] = !0) : (f.pc[a] || (f.pc[a] = {}), f.pc[a][e] = N(function(g, h) {
                        ba(b[h]) || (g[h] = zh[h] ? zh[h](b[h]) : b[h]);
                        return g
                    }, {}, Gm))
                }
            }

            function yh(a, c) {
                a.Nc[c] || (a.Nc[c] = {
                    pc: {}
                });
                return a.Nc[c]
            }

            function Hm(a, c) {
                x(function(b) {
                    dc[b].da && Im(a, c, b)
                }, fa(dc))
            }

            function Im(a, c, b) {
                var d = dc[b];
                d.da = !1;
                d.Qa && ka(a, d.Qa);
                d.Qa = T(a, function() {
                    var e, f, g = Jm(b);
                    c((e = {}, e.__ym = (f = {}, f.pbjs = g, f), e));
                    delete dc[b]
                }, 2E3)
            }

            function Jm(a) {
                var c = dc[a],
                    b = c.Xc,
                    d = c.Ve,
                    e = c.Ii;
                return z(function(f) {
                    var g, h = f[0],
                        k = f[1];
                    f = k.Rb;
                    var l = k.$d,
                        m = k.timeout;
                    k = k.pc;
                    return A((g = {}, g.renderState = f, g.mediaTypes = l, g.auctionId = a, g.adUnitCode = h, g.startStamp = b, g.endStamp = d, g.requestedBidders = e, g.bidTimeout = m, g), k)
                }, ua(c.Nc))
            }

            function Km(a) {
                var c = n(a, "featurePolicy");
                return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") :
                    !1
            }

            function Lm(a, c, b, d) {
                var e = n(d, "data");
                if (aa(e)) {
                    var f = e.split("*");
                    e = f[0];
                    var g = f[1];
                    f = f[2];
                    "sc.topics-response" === e ? (g && ("1" === g && f ? (a = Tb(a, f), M(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*")
                }
            }

            function Mm(a, c) {
                var b;
                if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                    var d = c.source,
                        e = (b = {}, b._ym_uid = a, b);
                    d.postMessage(e, "https://oauth.yandex.ru")
                }
            }

            function Ah(a, c) {
                void 0 === c && (c = !0);
                var b =
                    ec("canvas", a.document);
                if (b && (b = Nc(b))) {
                    var d = be(a) || Oc(a),
                        e = d[0];
                    d = d[1];
                    if (.3 <= Bh(a, b, {
                            h: d,
                            w: e
                        }) / (d * e)) {
                        J(a).D("hc", 1);
                        return
                    }
                }
                c && T(a, D([a, !1], Ah), 3E3)
            }

            function Ch(a) {
                return {
                    O: function(c, b) {
                        Nm(a).then(function(d) {
                            c.J || (c.J = {});
                            c.J.uah = d;
                            b()
                        }, b)
                    }
                }
            }

            function Om(a) {
                var c = N(function(b, d) {
                    var e = d[1],
                        f = Pm(a[d[0]]);
                    f && b.push("" + e + "\n" + f);
                    return b
                }, [], ua(Qm));
                return G("\n", c)
            }

            function Rm(a) {
                return "che\n" + a
            }

            function Pm(a) {
                return aa(a) ? a : M(a) ? G(",", z(function(c) {
                        return '"' + c.brand + '";v="' + c.version + '"'
                    }, a)) :
                    ba(a) ? "" : a ? "?1" : "?0"
            }

            function Sm(a, c) {
                var b = Tm(a),
                    d = [Um(a) || Vm(a)];
                Dh(a) && d.push(b);
                var e = ja(a);
                b = Ta(a);
                var f = b.C("synced", {});
                d = ha(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(pb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.D("synced", f);
                return z(function(g) {
                    return {
                        Ui: c[g],
                        ji: g
                    }
                }, d)
            }

            function Vm(a) {
                a = Wm(a);
                return Xm[a] || a
            }

            function Tm(a) {
                a = Eh(a);
                return Ym[a] || "ru"
            }

            function Zm(a, c, b, d) {
                if (!b.K || $d(c.ba)) d();
                else {
                    var e = ce(a),
                        f = u(e, $m),
                        g = jd(a, ""),
                        h = function() {
                            var q = G(",", z(an(nf), de(e)));
                            q = "" + q + bn(q, g);
                            ee(b, "gdpr",
                                q);
                            d()
                        };
                    if (c.lj) f("31"), h();
                    else if (3 === c.id) h();
                    else {
                        var k = J(a),
                            l = k.C("f1");
                        if (l) l(h);
                        else if (l = de(e), Va(tc(nf), l)) h();
                        else if (g.C("yandex_login")) f("13"), g.D("gdpr", Pc, 525600), h();
                        else {
                            l = fe(a);
                            var m = U(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                version: 2,
                                zf: cn,
                                Gf: "_inversed_buttons"
                            } : void 0;
                            l || p ? (l = g.C("gdpr"), I(l, uc) ? (f(l === of ? "12" : "3"), h()) : pf(a) || dn(a) ? (f("17"), h()) : en(a).then(R, F).then(function(q) {
                                q ? (f("28"), h()) : (Fh(h),
                                    k.D("f1", Fh), (0, qf[0])(a).then(V("params.eu")).then(function(r) {
                                        if (r || gb(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                                            g.D("gdpr_popup", of );
                                            fn(a, c);
                                            if (qb(a)) return gn(a, f, c);
                                            var t = Gh(a, e);
                                            if (t) return r = hn(a, f, t, c, p), r.then(D([a, c], jn)), r
                                        }
                                        r || f("8");
                                        return L.resolve({
                                            value: Pc,
                                            Sd: !0
                                        })
                                    }).then(function(r) {
                                        g.lc("gdpr_popup");
                                        if (r) {
                                            var t = r.value;
                                            r = r.Sd;
                                            I(t, uc) && g.D("gdpr", t, r ? void 0 : 525600)
                                        }
                                        t = fc(Hh, ya);
                                        kd(a, t, 20)(Za(C(a, "gdr"), F));
                                        k.D("f1", ya)
                                    })["catch"](C(a, "gdp.a")))
                            })) : (f("14"), h())
                        }
                    }
                }
            }

            function jn(a, c) {
                if (fe(a)) {
                    var b =
                        ce(a),
                        d = Ja(a, c);
                    d = d && d.params;
                    b = z(u(kn, n), de(b));
                    d && b.length && d("gdpr", Ea(b))
                }
            }

            function gn(a, c, b) {
                var d = ge(a, b);
                return new L(function(e) {
                    var f;
                    if (d) {
                        var g = d.$,
                            h = w(u("4", c), u(null, e)),
                            k = T(a, h, 2E3, "gdp.f.t");
                        d.$f((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.F(Ih, function(m) {
                                e({
                                    value: Jh(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(D([a, k], ka))
                    } else e({
                        value: of ,
                        Sd: !0
                    })
                })
            }

            function fn(a, c) {
                var b = ge(a, c);
                b && b.$.F(["isYandex"], function() {
                    var d;
                    return d = {
                            type: "isYandex"
                        }, d.isYandex =
                        fe(a), d
                });
                return b
            }

            function ln(a, c, b) {
                a = b || Eh(a);
                return I(a, c) ? a : "en"
            }

            function Jh(a) {
                if (I(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Pc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return I(a, uc) ? a : Pc
            }

            function Kh(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    H(e, d)(Lb(a, c))
                } catch (f) {} else Lh = T(a, D([a, c, 2 * b], Kh), b, "ai.d");
                return function() {
                    return ka(a, Lh)
                }
            }

            function Mh(a, c, b, d) {
                var e, f, g, h = b.$h,
                    k = b.Vh,
                    l = b.isTrusted;
                b = b.Td;
                a = rf(a, k);
                k = k.readOnly;
                d = (e = {}, e.fi = sf((f = {}, f.a =
                    h ? 1 : 0, f.b = a, f.c = d || 0, f.d = k ? 1 : null, f.e = b ? 1 : null, f)).Fa(), e);
                ba(l) || (d.ite = rb(l));
                c.params((g = {}, g.__ym = d, g))
            }

            function Nh(a, c) {
                var b = n(c, "target");
                if (b) {
                    var d = n(b, "value");
                    if ((d = $a(d)) && !(100 <= Qa(d))) {
                        var e = "tel" === n(b, "type"),
                            f = 0 < nb(d, "@") && !e,
                            g = he(d);
                        g = Qa(g);
                        if (f || !f && (e || g))
                            if (d = f ? Oh(d) : Ph(a, d)) return e = n(c, "isTrusted"), {
                                Vh: b,
                                $h: f,
                                Wh: d,
                                isTrusted: e,
                                Td: c.Td
                            }
                    }
                }
            }

            function Qh(a, c, b, d, e) {
                if (!ld(a)) return F;
                var f = [],
                    g = la(a);
                vc(a)(Za(F, function() {
                    var h = hb(c, a.document.body);
                    e && (h = ha(e, h));
                    x(function(l) {
                        f.push(g.F(l,
                            b, d))
                    }, h);
                    if (Fa("MutationObserver", a.MutationObserver)) {
                        var k = c.toUpperCase();
                        h = new a.MutationObserver(C(a, "de.m", function(l) {
                            x(function(m) {
                                var p = m.addedNodes;
                                m = m.removedNodes;
                                p && p.length && x(function(q) {
                                    ie(a, q, function(r) {
                                        r.nodeName !== k || e && !e(r) || f.push(g.F(r, b, d))
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, p);
                                m && m.length && x(function(q) {
                                    ie(a, q, function(r) {
                                        r.nodeName !== k || e && !e(r) || g.zb(r, b, d)
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, m)
                            }, l)
                        }));
                        h.observe(a.document.body, {
                            childList: !0,
                            subtree: !0
                        });
                        f.push(H(h.disconnect,
                            h))
                    }
                }));
                return D([ya, f], x)
            }

            function mn(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (c) return a = H(c, a.speechSynthesis), wc(function(b) {
                    return z(u(b, n), nn)
                }, a())
            }

            function on(a, c, b) {
                return G("x", z(w(R, Ka("concat", "" + a), u(b, n)), c))
            }

            function pn(a, c) {
                var b = c.Lg;
                if (!qn(a, b)) return "";
                var d = [];
                a: {
                    var e = rn(a, b);
                    try {
                        var f = D(e, w)()();
                        break a
                    } catch (E) {
                        if ("ccf" === E.message) {
                            f = null;
                            break a
                        }
                        Sa(E)
                    }
                    f = void 0
                }
                if (Wa(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (E) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k =
                        ma(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (E) {
                    k = []
                }
                k = G(";", k);
                f = tf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = tf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2)
                }
                r = {
                    xj: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ? r : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": tf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                uf(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var y = {
                                "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (E) {}
                    y = {}
                }
                uf(d, y);
                if (!b.getShaderPrecisionFormat) return G("~", d);
                uf(d, sn(b));
                return G("~", d)
            }

            function uf(a, c, b) {
                void 0 === b && (b = ":");
                x(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, ua(c))
            }

            function tn(a, c, b, d) {
                c = d.C("cc");
                d = D(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    (e = (e = e[1]) && Da(e)) && 1440 < ja(a)(pb) - e ? d() : b.D("cc", c)
                } else Aa(0)(c) || d()
            }

            function un(a, c, b, d) {
                return na(c, function(e) {
                    if (!md(e) && !je(a))
                        if (e = d.C("zzlc"),
                            Y(e) || Wa(e) || "na" === e) {
                            var f = yb(a);
                            if (f && (e = xc(a))) {
                                var g = f("iframe");
                                A(g.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                f = vf(a, 68);
                                var h = wf(a, 79);
                                g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Rh("L21ldHJpa2EvenpsYy5odG1s");
                                e.appendChild(g);
                                var k = 0,
                                    l = la(a).F(a, ["message"], C(a, "zz.m", function(m) {
                                        (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (yc(g), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(), ka(a, k))
                                    }));
                                k = T(a, w(l, u(g, yc)), 3E3)
                            }
                        } else b.D("zzlc", e)
                })
            }

            function vn(a, c, b) {
                var d,
                    e;
                c = ib(u(a, n), wn);
                c = Y(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    O(a) && (H(a, f, "y.metrika")(), a = n(f, "createOffer"), O(a) && !a.length && (a = H(a, f)(), d = n(a, "then"), O(d) && H(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        O(h) && H(h, f, g, F, F)()
                    })(), A(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (O(h)) {
                            h = H(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate =
                                    F;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = gc(k[1]), b.D("pp", g));
                            f.onicecandidate = F;
                            h()
                        }
                    }, e))))
                }
            }

            function xn(a, c, b) {
                var d, e = nd(a, c);
                if (e) {
                    e.$.F(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.C("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = T(a, D([a, c, b], Sh), 200, "pu.m");
                        e.ue(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (ka(a, g), b.D("pu", l))
                        })
                    } else Sh(a, c, b)
                }
            }

            function Sh(a, c, b) {
                var d = n(a, "location.host");
                a = od(a, c);
                b.D("pu", "" + gc(d) + a)
            }

            function yn(a) {
                a =
                    yb(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = Ka("canPlayType", a),
                        b = wc(function(d) {
                            return z(w(R, Ka("concat", d + "; codecs=")), zn)
                        }, Th);
                    return z(c, Th.concat(b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function An(a) {
                var c = n(a, "matchMedia");
                if (c && Fa("matchMedia", c)) {
                    var b = Ka("matchMedia", a);
                    return N(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, Bn)
                }
            }

            function sn(a) {
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] =
                        n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
                        a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function rn(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && Fa("getParameter", c.getParameter) || xf();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(Cn);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.bi = 3;
                    b.ni = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || xf();
                    return {
                        pe: d,
                        kj: e,
                        jj: b
                    }
                }, function(b) {
                    var d = b.pe,
                        e = b.kj;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || xf();
                    return A(b, {
                        rh: d
                    })
                }, function(b) {
                    var d = b.pe,
                        e = b.rh;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.pe;
                    b = b.jj;
                    d.ij = c.getAttribLocation(d, "attrVertex");
                    d.ri = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Uj);
                    c.vertexAttribPointer(d.ij,
                        b.bi, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.ri, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.ni);
                    return c.canvas
                }]
            }

            function qn(a, c) {
                if (!O(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Fa("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function tf(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function Dn(a, c) {
                if (n(c, "settings.ins")) {
                    var b = J(a);
                    if (!b.C("scip")) {
                        var d =
                            Ta(a),
                            e = ja(a)(pb),
                            f = ke(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f = oa(a, "ci");
                            var g = ["sync.cook.int"],
                                h = function(l) {
                                    l = b.C("scip", "") + l;
                                    b.D("scip", l)
                                },
                                k = u("a", h);
                            b.D("scip", "0");
                            return f({
                                Y: {
                                    ha: g,
                                    Pa: 3E3,
                                    Cb: !0
                                }
                            }, ["https://an.yandex.ru/sync_cookie"]).then(function(l) {
                                l = n(l.ub, "CookieMatchUrls");
                                if (M(l) && Qa(l)) {
                                    h("1");
                                    var m = oa(a, "c");
                                    l = z(function(p, q) {
                                        return m({
                                            Y: {
                                                ha: g,
                                                Pa: 3E3
                                            }
                                        }, ["https://" + p])["catch"](w(u("b", h), u("" + q, h)))
                                    }, ha(aa, l));
                                    return L.all(l)
                                }
                                k()
                            }, k).then(function() {
                                var l = b.C("scip");
                                !l || gb(l, "a") || gb(l,
                                    "b") || (d.D("sci", e), h("2"))
                            }, F)
                        }
                    }
                }
            }

            function Uh(a) {
                return {
                    O: function(c, b) {
                        if (!c.K) return b();
                        var d = J(a).C("fid");
                        !Vh && d && (ee(c, "fid", d), Vh = !0);
                        return b()
                    }
                }
            }

            function En(a, c) {
                var b = a.document;
                if (I(b.readyState, ["interactive", "complete"])) Qb(a, c);
                else {
                    var d = la(a),
                        e = d.F,
                        f = d.zb,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function yf(a) {
                return {
                    O: function(c, b) {
                        var d = c.K;
                        if (d) {
                            var e = J(a).C("adBlockEnabled");
                            e && d.D("adb", e)
                        }
                        b()
                    }
                }
            }

            function Fn(a) {
                var c =
                    C(a, "i.clch", Gn);
                la(a).F(a.document, ["click"], u(a, c), {
                    passive: !1
                });
                return function(b) {
                    var d = va.Sa,
                        e = a.Ya[va.fc],
                        f = !!e._informer;
                    e._informer = A({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || hd(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function Hn(a, c) {
                var b = Ta(a),
                    d = b.C,
                    e = b.D;
                if ("" === d("cc")) {
                    e("cc", 0);
                    var f = ja(a),
                        g = J(a);
                    oa(a, "6", c)({
                        Y: {
                            Cb: !0,
                            bd: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(function(h) {
                        h = n(h.ub, "c");
                        e("cc", h + "&" + f(pb));
                        g.D("cc", h)
                    })["catch"](function(h) {
                        var k = f(pb);
                        e("cc", "&" + k);
                        Mc(a, "cc",
                            h)
                    })
                }
            }

            function le(a, c) {
                if (!c) return !1;
                var b = U(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function In(a, c) {
                return na(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        $g: Jn(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function Kn(a, c, b, d, e) {
                b = zf(a.document.body, b);
                d = zf(a.document.body, d);
                I(e.target, [b, d]) && Af(a, c)
            }

            function Wh(a, c, b, d) {
                (b = Ln(a, d, b)) && Af(a, c, b)
            }

            function Xh(a, c) {
                var b = Yh(a, c);
                return Mn(a, b)
            }

            function Yh(a, c) {
                var b = zf(a.document.body, c);
                return b ? Nn(a, b) : ""
            }

            function Af(a, c,
                b) {
                if (c = Ja(a, c)) a = me(["dr", b || "" + Xa(a, 10, 99)]), c.params(me(["__ym", a]))
            }

            function zf(a, c) {
                var b = null;
                try {
                    b = c ? ec(c, a) : b
                } catch (d) {}
                return b
            }

            function Zh(a) {
                a = Ga(Rh(a));
                return z(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return $h("0", 8, c)
                }, a)
            }

            function Nn(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                ie(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && $a(f)) && b.push(f)
                });
                return 0 === b.length ? "" :
                    G(" ", b)
            }

            function On(a, c, b) {
                a = Oa(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    oc: b
                })
            }

            function Pn(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Qn, d + "." + b.oc)) && (c && I(b, Rn) || a("ym-" + b + "-" + d))
                }
            }

            function Sn(a, c, b) {
                if ("rt" === b) return "https://" + ai(a, c) + ".mc.yandex.ru/watch/3/1";
                if ("mf" === b) {
                    b = U(a);
                    b = ne(b.protocol + "//" + b.hostname + b.pathname);
                    c = od(a, c);
                    var d = "";
                    do d += Xa(a); while (d.length < c.length);
                    d = d.slice(0, c.length);
                    a = "";
                    for (var e = 0; e < c.length; e += 1) a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                    a = [d, a];
                    return "https://adstat.yandex.ru/track?service=metrika&id=" +
                        a[1] + "&mask=" + a[0] + "&ref=" + b
                }
            }

            function Tn(a, c, b) {
                var d, e = Bf(c).Qb;
                return oa(a, "pi", c)({
                    K: Ha((d = {}, d[e] = 1, d))
                }, [b])
            }

            function Un(a, c, b) {
                return new L(function(d, e) {
                    if (bi(a, oe, "isp")) {
                        var f = F,
                            g = function(h) {
                                ("1" === h ? d : e)();
                                f();
                                ci(oe, "isp")
                            };
                        f = la(a).F(a, ["message"], D([b, g], C(a, "isp.stat.m", Vn)));
                        T(a, g, 1500)
                    } else e()
                })
            }

            function Vn(a, c, b) {
                var d = n(b, "data");
                if (aa(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                }
            }

            function Wn(a,
                c) {
                var b = Ta(a),
                    d = "wv2rf:" + K(c),
                    e = c.dc,
                    f = Cf(a),
                    g = b.C(d),
                    h = c.bj;
                return Y(f) || Wa(g) ? Ba(function(k, l) {
                    na(c, function(m) {
                        var p = !!n(m, "settings.webvisor.forms");
                        p = !n(m, "settings.x3") && p;
                        f = Cf(a) || n(m, "settings.eu");
                        b.D(d, rb(p));
                        l({
                            dc: e,
                            Rd: !!f,
                            Jf: p,
                            lg: h
                        })
                    })
                }) : Df({
                    dc: e,
                    Rd: f,
                    Jf: !!Da(g),
                    lg: h
                })
            }

            function Xn() {
                var a = N(function(c, b) {
                    c[b[0]] = {
                        hd: 0,
                        Jg: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    Fg: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: N(function(b, d) {
                                var e = a[d];
                                return Math.round(b + e.hd * e.Jg)
                            }, 0, fa(a))
                        }
                    },
                    ti: function(c) {
                        c && (c = a[c.data.type || c.event]) && (c.hd += 1)
                    }
                }
            }

            function Yn(a) {
                return {
                    th: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    vh: function() {
                        if (a.document.doctype) {
                            var c = A({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + G("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    }
                }
            }

            function Zn(a, c, b) {
                var d = pd(a),
                    e = la(a),
                    f = qb(a),
                    g = c.Dd(),
                    h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
                    k = u(d, R);
                if (h) {
                    if (!g) return T(a, H(d.aa, d, "i", {
                        ta: !1
                    }), 10), {
                        Cd: k,
                        Wf: F,
                        stop: F
                    };
                    Sa(Pa())
                }
                d.F(["sr"], function(r) {
                    var t, y = di(a, r.source);
                    y && Ef(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.ra().Z(y), t))
                });
                d.F(["sd"], function(r) {
                    var t =
                        r.data;
                    r = r.source;
                    (a === r || di(a, r)) && d.aa("sdr", {
                        data: t.data,
                        frameId: t.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function() {
                            var r;
                            Ef(a, a.parent, (r = {}, r.type = "sr", r));
                            m = T(a, p, 100, "if.i")
                        };
                    p();
                    var q = function(r) {
                        d.ga(["\u043d"], q);
                        ka(a, m);
                        var t = zc(a, r.origin).host;
                        l || r.source !== a.parent || !r.data.frameId || "about:blank" !== U(a).host && !I(t, b) || (l = !0, d.aa("i", {
                            frameId: r.data.frameId,
                            ta: !0
                        }))
                    };
                    d.F(["\u043d"], q);
                    T(a, function() {
                        d.ga(["\u043d"], q);
                        ka(a, m);
                        l || (l = !0, d.aa("i", {
                            ta: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.F(a, ["message"],
                    function(r) {
                        var t = Tb(a, r.data);
                        t && t.type && I(t.type, $n) && d.aa(t.type, {
                            data: t,
                            source: r.source,
                            origin: r.origin
                        })
                    });
                return {
                    Cd: k,
                    Wf: function(r) {
                        var t;
                        return Ef(a, a.parent, (t = {}, t.frameId = c.Dd(), t.data = r, t.type = "sd", t))
                    },
                    stop: e
                }
            }

            function di(a, c) {
                try {
                    return ib(w(V("contentWindow"), Aa(c)), Ga(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function Ef(a, c, b) {
                c || Sa(Pa());
                a = Lb(a, b);
                c.postMessage(a, "*")
            }

            function ei() {
                return hc() + hc() + "-" + hc() + "-" + hc() + "-" + hc() + "-" + hc() + hc() + hc()
            }

            function hc() {
                return Math.floor(65536 *
                    (1 + Math.random())).toString(16).substring(1)
            }

            function ao(a, c) {
                if (aa(c)) return c;
                var b = a.textContent;
                if (aa(b)) return b;
                b = a.data;
                if (aa(b)) return b;
                b = a.nodeValue;
                return aa(b) ? b : ""
            }

            function bo(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = La(c));
                var f = A(N(function(h, k) {
                    h[k.name] = k.value;
                    return h
                }, {}, Ga(c.attributes)), d);
                A(f, co(c, e, f));
                var g = (d = zb(function(h, k) {
                    var l = k[0],
                        m = pe(a, c, l, k[1], b, e),
                        p = m.value;
                    ba(p) ? delete f[l] : f[l] = p;
                    return h || m.qb
                }, !1, ua(f))) && Nc(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    qb: d,
                    Gg: f
                }
            }

            function co(a, c, b) {
                var d = {};
                Ff(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function pe(a, c, b, d, e, f) {
                void 0 === f && (f = La(c));
                var g = {
                    qb: !1,
                    value: d
                };
                if (Ff(c)) "value" === b ? !ba(d) && "" !== d && (b = e.Rd, f = e.Jf, e = qd(a, c), f ? (b = Qc(a, c, b), a = b.rb, c = b.ib, b = b.Xa, g.qb = !c && (e || a)) : (g.qb = e, b = !(c && ic("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? fi("\u2022", d.length) : "") : "checked" === b && I((c.getAttribute("type") || "").toLowerCase(), eo) ? g.value = c.checked ? "checked" : null : fo.test(b) && Gf(a,
                    c) && (g.value = null);
                else if ("IMG" === f && "src" === b)(e = qd(a, c)) ? (g.qb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (I(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === nb(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && I(b, ["src", "type"])) g.value = null;
                return g
            }

            function Hf(a, c, b, d) {
                void 0 === d &&
                    (d = "wv2");
                return {
                    H: function(e, f) {
                        return C(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function go(a, c, b, d, e) {
                function f() {
                    l && l.stop()
                }
                if (!c.Bb) return L.resolve(F);
                var g = oa(a, "4", c),
                    h = {
                        K: Ha()
                    },
                    k = new ho(a, b, function(m, p, q) {
                        if (!g) return L.resolve();
                        var r = "wv-data=" + rd(m, !0),
                            t = C(a, "m.n.m.s");
                        p = {};
                        p["wv-part"] = "" + q;
                        q = m.length;
                        for (var y = 0, E = 255, Q = 255, P, za, Ca; q;) {
                            P = 21 < q ? 21 : q;
                            q -= P;
                            do za = "string" === typeof m ? m.charCodeAt(y) : m[y], y += 1, 255 < za && (Ca = za >> 8, za &= 255, za ^= Ca), E += za, Q += E; while (--P);
                            E = (E & 255) + (E >> 8);
                            Q = (Q & 255) + (Q >>
                                8)
                        }
                        m = (E & 255) + (E >> 8) << 8 | (Q & 255) + (Q >> 8);
                        return g(A({}, h, {
                            Y: {
                                ca: r
                            },
                            J: (p["wv-check"] = "" + (65535 === m ? 0 : m), p["wv-type"] = b.type, p)
                        }), c)["catch"](t)
                    }),
                    l = io(a, k, d, e);
                return na(c, function(m) {
                    m && J(a).D("isEU", n(m, "settings.eu"));
                    J(a).C("oo") || l && gi(a, m) && l.start();
                    return f
                })
            }

            function io(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = la(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = H(c.flush, c),
                    m = pa(function(r, t) {
                        C(a, "hfv." + r, function() {
                            try {
                                var y = t.type
                            } catch (E) {
                                return
                            }
                            y = I(y, d);
                            c.push(t, {
                                type: r
                            });
                            y && l()
                        })()
                    }),
                    p = C(a, "sfv", function() {
                        var r =
                            b(a),
                            t = jo(a);
                        x(function(y) {
                            f.push(g.F(y.target, [y.event], m(y.type)))
                        }, r);
                        x(function(y) {
                            f.push(g.F(y.target, [y.event], C(a, "hff." + y.type + "." + y.event, function(E) {
                                x(Ba({
                                    l: a,
                                    na: E,
                                    flush: l
                                }), y.R)
                            })))
                        }, t);
                        k = hi(a, "form", e);
                        e.attachEvent && (r = hi(a, "form *", e), x(function(y) {
                            f.push(g.F(y, ["submit"], m("form")))
                        }, k), x(function(y) {
                            If(y) && f.push(g.F(y, ["change"], m("formInput")))
                        }, r));
                        x(function(y) {
                            var E = y.submit;
                            if (O(E) || "object" === typeof E && ko.test("" + E)) y[h] = E, y.submit = C(a, "fv", function() {
                                var Q = {
                                    target: y,
                                    type: "submit"
                                };
                                m("document")(Q);
                                return y[h]()
                            })
                        }, k)
                    }),
                    q = C(a, "ufv", function() {
                        x(ya, f);
                        x(function(r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: q
                }
            }

            function lo(a, c) {
                var b = ha(function(e) {
                        return 0 < e.R.length
                    }, c),
                    d = ii({
                        target: a.document,
                        type: "document"
                    });
                return z(w(R, d, mo(a)), b)
            }

            function ji(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Ya] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        qe(h) && !h[Ya] && wa(d, Ac(b, h))
                    }
                } else wa(d, Ac(b, c));
                return d
            }

            function Jf(a) {
                if (sd) {
                    sd = !1;
                    var c = Ab(a.l),
                        b = [];
                    jb(a.l, b,
                        15) ? a = [] : (S(b, c), a = b);
                    return a
                }
            }

            function ki(a) {
                if (!sd) {
                    sd = !0;
                    a = Ab(a.l);
                    var c = [];
                    Ub(c, 14);
                    S(c, a);
                    return c
                }
            }

            function no(a, c, b) {
                var d = c[Ya];
                if (d) {
                    a: {
                        var e = Ab(a),
                            f = c[Ya];
                        if (0 < f) {
                            var g = [];
                            c = Kf(a, c);
                            var h = Bc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.Ff) {
                                h.Ff = k;
                                if (jb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                S(g, e);
                                S(g, f);
                                S(g, c[0]);
                                S(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (jb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                S(g, e);
                                S(g, f);
                                S(g, c[2]);
                                S(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    wa(b, a)
                }
                return d
            }

            function Qc(a, c, b) {
                void 0 === b && (b = !1);
                if (!c) return {
                    Xa: !1,
                    ib: !1,
                    rb: !1
                };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d) return {
                    Xa: !1,
                    ib: !1,
                    rb: !1
                };
                var e = ha(li, [c.className, c.id, c.name]),
                    f = c && ic("ym-record-keys", c);
                d = d && I(d, mi) || Va(db(oo), e);
                var g;
                (g = d) || (g = c.placeholder, g = Va(db(po), e) || li(g) && qo.test(g || ""));
                e = g;
                return {
                    Xa: !f && (Lf(a, c) || e && b || e && !d && !b),
                    ib: f,
                    rb: e
                }
            }

            function Lf(a, c) {
                return Gf(a, c) || td(a, c) ? !0 : qd(a, c)
            }

            function li(a) {
                return !!(a && 2 < a.length)
            }

            function Ff(a) {
                try {
                    var c = La(a);
                    if (I(c, Mf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || I(b.toLocaleLowerCase(),
                                ro)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function ni(a, c) {
                return c && ic("(ym-disable-submit|-metrika-noform)", c)
            }

            function so(a, c) {
                return G("", z(function(b) {
                    return a.isNaN(b) ? to.test(b) ? (b = b.toUpperCase() === b ? uo : vo, String.fromCharCode(Xa(a, b[0], b[1]))) : b : "" + Xa(a, 0, 9)
                }, c.split("")))
            }

            function qd(a, c) {
                if (ba(c)) return !1;
                if (Nf(c)) {
                    var b = c.parentNode;
                    return (ba(b) ? 0 : 11 === b.nodeType) ? !1 : qd(a, c.parentNode)
                }
                b = oi(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ?
                    !1 : d
            }

            function gi(a, c) {
                var b = Rc(a),
                    d = b.C("visorc");
                I(d, ["w", "b"]) || (d = "");
                pi(a) && qi(a, ud, "visorc") && !wo.test(sb(a) || "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = J(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.D("visorc", d, 30);
                return "w" === d
            }

            function ri(a, c, b) {
                if (si.isEnabled(a)) return new si(a, c);
                if (ti.isEnabled(a)) return new ti(a, b)
            }

            function ui(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return fc([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function vi(a, c, b) {
                a = c(b);
                c = [F, 0, 0];
                var d = [0, c, c, void 0];
                return fc(a, function(e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) Cc(d, W(l)), h = k(h), l & 2 && Cc(d, W(h[1])), Cc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, Of]);
                            m.push([0, W(l), Cc]);
                            m.unshift([0, 0, Pf]);
                            wa(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                q = e[4],
                                r = e[5],
                                t = fa(h);
                            for (g = t.length - 1; 0 <= g;) m = t[g], m = [
                                    [0, 0, Pf],
                                    [q, h[m], r],
                                    [k, m, p],
                                    [0, 0, Of],
                                    [0, W(l), Cc]
                                ], wa(f, m),
                                --g
                        } else m = k(h), m.push([0, 0, Of]), m.push([0, W(l), Cc]), m.unshift([0, 0, Pf]), wa(f, m);
                    return d
                })
            }

            function Pf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [F, 0, 0], a[2] = a[1]);
                Cc(a, W(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function Of(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [F, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function Cc(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c
            }

            function wi(a) {
                return [
                    [1857, a.partsTotal, W],
                    [1793, a.activity, W],
                    [1744, a.textChangeMutation, xo],
                    [1680, a.removedNodesMutation,
                        yo
                    ],
                    [1616, a.addedNodesMutation, zo],
                    [1552, a.attributesChangeMutation, Ao],
                    [1488, a.publishersHeader, Bo],
                    [1424, a.articleInfo, Co],
                    [1360, a.focusEvent, Do],
                    [1296, a.fatalErrorEvent, Eo],
                    [1232, a.deviceRotationEvent, Fo],
                    [1168, a.keystrokesEvent, Go],
                    [1104, a.resizeEvent, Ho],
                    [1040, a.zoomEvent, Io],
                    [976, a.touchEvent, Jo],
                    [912, a.changeEvent, Ko],
                    [848, a.selectionEvent, Lo],
                    [784, a.scrollEvent, Mo],
                    [720, a.mouseEvent, No],
                    [656, a.Rj, Oo],
                    [592, a.page, Po],
                    [513, a.end, Dc],
                    [449, a.partNum, W],
                    [401, a.chunk, Qo],
                    [257, a.frameId, ra],
                    [193,
                        a.event, W
                    ],
                    [129, a.type, W],
                    [65, a.stamp, W]
                ]
            }

            function Ro(a) {
                return [
                    [84, a.Gi, wi]
                ]
            }

            function So(a) {
                return [
                    [129, a.position, ra],
                    [81, a.name, da]
                ]
            }

            function To(a) {
                return [
                    [81, a.name, da]
                ]
            }

            function Uo(a) {
                return [
                    [81, a.name, da]
                ]
            }

            function Co(a) {
                return [
                    [593, a.updateDate, da],
                    [532, a.rubric, So],
                    [449, a.chars, ra],
                    [401, a.publicationDate, da],
                    [340, a.topics, To],
                    [276, a.authors, Uo],
                    [209, a.pageTitle, da],
                    [145, a.pageUrlCanonical, da],
                    [65, a.id, W]
                ]
            }

            function Vo(a) {
                return [
                    [513, a.chars, ra],
                    [489, a.maxScrolled, vd],
                    [385, a.involvedTime, ra],
                    [321, a.height, ra],
                    [257, a.width, ra],
                    [193, a.y, ra],
                    [129, a.x, ra],
                    [65, a.id, W]
                ]
            }

            function Bo(a) {
                return [
                    [129, a.involvedTime, ra],
                    [84, a.articleMeta, Vo]
                ]
            }

            function Do(a) {
                return [
                    [65, a.target, ra]
                ]
            }

            function Eo(a) {
                return [
                    [209, a.stack, da],
                    [145, a.fh, da],
                    [81, a.code, da]
                ]
            }

            function Fo(a) {
                return [
                    [193, a.orientation, ra],
                    [129, a.height, W],
                    [65, a.width, W]
                ]
            }

            function Go(a) {
                return [
                    [84, a.keystrokes, Wo]
                ]
            }

            function Wo(a) {
                return [
                    [273, a.modifier, da],
                    [193, a.isMeta, Dc],
                    [145, a.key, da],
                    [65, a.id, W]
                ]
            }

            function Ho(a) {
                return [
                    [257, a.pageHeight,
                        W
                    ],
                    [193, a.pageWidth, W],
                    [129, a.height, W],
                    [65, a.width, W]
                ]
            }

            function Io(a) {
                return [
                    [193, a.y, ra],
                    [129, a.x, ra],
                    [105, a.level, vd]
                ]
            }

            function Jo(a) {
                return [
                    [129, a.target, ra],
                    [84, a.touches, Xo]
                ]
            }

            function Xo(a) {
                return [
                    [297, a.force, vd],
                    [233, a.y, vd],
                    [169, a.x, vd],
                    [81, a.id, da]
                ]
            }

            function Ko(a) {
                return [
                    [257, a.target, ra],
                    [193, a.hidden, Dc],
                    [129, a.checked, Dc],
                    [81, a.value, da]
                ]
            }

            function Lo(a) {
                return [
                    [257, a.endNode, W],
                    [193, a.startNode, W],
                    [129, a.end, ra],
                    [65, a.start, ra]
                ]
            }

            function Mo(a) {
                return [
                    [257, a.target, ra],
                    [193, a.page, Dc],
                    [129, a.y, ra],
                    [65, a.x, ra]
                ]
            }

            function No(a) {
                return [
                    [193, a.target, ra],
                    [129, a.y, W],
                    [65, a.x, W]
                ]
            }

            function Oo(a) {
                return [
                    [148, a.changes, Yo],
                    [65, a.target, ra]
                ]
            }

            function Yo(a) {
                return [
                    [193, a.index, W],
                    [145, a.op, da],
                    [81, a.style, da]
                ]
            }

            function xo(a) {
                return [
                    [209, a.value, da],
                    [129, a.index, W],
                    [65, a.target, W]
                ]
            }

            function yo(a) {
                return [
                    [129, a.index, W],
                    [69, a.nodes, ra]
                ]
            }

            function zo(a) {
                return [
                    [129, a.index, W],
                    [84, a.nodes, xi]
                ]
            }

            function Ao(a) {
                return [
                    [210, a.attributes, 81, da, 145, da],
                    [129, a.index, W],
                    [65, a.target, W]
                ]
            }

            function Po(a) {
                return [
                    [852,
                        a.content, xi
                    ],
                    [785, a.tabId, da],
                    [705, a.recordStamp, Zo],
                    [656, a.location, $o],
                    [592, a.viewport, yi],
                    [528, a.screen, yi],
                    [449, a.hasBase, Dc],
                    [401, a.base, da],
                    [337, a.referrer, da],
                    [273, a.ua, da],
                    [209, a.address, da],
                    [145, a.title, da],
                    [81, a.doctype, da]
                ]
            }

            function $o(a) {
                return [
                    [209, a.path, da],
                    [145, a.protocol, da],
                    [81, a.host, da]
                ]
            }

            function yi(a) {
                return [
                    [129, a.height, ra],
                    [65, a.width, ra]
                ]
            }

            function xi(a) {
                return [
                    [513, a.hidden, Dc],
                    [449, a.prev, W],
                    [385, a.next, W],
                    [337, a.content, da],
                    [257, a.parent, W],
                    [210, a.attributes, 81, da, 145,
                        da
                    ],
                    [145, a.name, da],
                    [65, a.id, W]
                ]
            }

            function da(a) {
                var c = ap({}, a, [], 0);
                return c ? [bp, c, a] : [zi, 0, 0]
            }

            function Qo(a) {
                return [cp, a.length, a]
            }

            function Dc(a) {
                return [zi, 1, a ? 1 : 0]
            }

            function Zo(a) {
                a = Ai(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [Bi, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
            }

            function vd(a) {
                return [dp, 4, a]
            }

            function ra(a) {
                return 0 > a ? [Bi, 10, Ai(a)] : W(a)
            }

            function W(a) {
                return [ep, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            }

            function ep(a, c, b,
                d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function zi(a, c, b, d) {
                b[d] = c
            }

            function cp(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function Ci(a) {
                return function(c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] =
                                    c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function dp(a, c, b, d) {
                return fp(a)(a, c, b, d)
            }

            function gp(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) wd(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) wd(2143289344, b, d);
                else if (3.4028234663852886E38 < c) wd((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) wd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    wd((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function wd(a, c, b) {
                c[b] =
                    a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function Bi(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function Ai(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function Di(a, c, b, d) {
                var e, f = b.J;
                f.wmode = "0";
                f["wv-hit"] = f["wv-hit"] || "" + Ec(a);
                f["page-url"] = f["page-url"] || U(a).href;
                d && (f[d] = f[d] || "" + Xa(a));
                a = {
                    ma: {
                        za: "webvisor/" +
                            c.id
                    },
                    Y: A(b.Y || {}, {
                        bb: (e = {}, e["Content-Type"] = "text/plain", e),
                        $c: "POST"
                    }),
                    J: f
                };
                A(b, a)
            }

            function hp(a, c) {
                return na(c, function(b) {
                    var d = J(a),
                        e = d.C,
                        f = u("dSync", d.D);
                    K(c);
                    if (e("dSync", !1)) f(1);
                    else return f(!0), Ei(a, b, {
                        gb: c,
                        Qb: "s",
                        Xd: "ds",
                        Wc: f,
                        Si: function(g, h, k) {
                            var l = g.ub;
                            g = g.host;
                            if (n(l, "settings")) return Sa(Pa("ds.e"));
                            h = h(ea) - k;
                            k = g[1];
                            var m, p;
                            l = Ha((m = {}, m.di = l, m.dit = h, m.dip = k, m));
                            m = (p = {}, p["page-url"] = U(a).href, p);
                            return oa(a, "S", Fi)({
                                K: l,
                                J: m
                            }, Fi).then(u(10, f), C(a, "ds.rs"))
                        }
                    })
                })
            }

            function Ei(a, c, b) {
                var d,
                    e = b.gb,
                    f = b.Wc;
                f = void 0 === f ? F : f;
                var g = ja(a),
                    h = ip(a, c.userData, e),
                    k = jp(a),
                    l = w(Gi, D([kp, lp], re))(a),
                    m = n(c, "settings.sbp");
                b.Wc = f;
                m && (b.data = A({}, m, (d = {}, d.c = e.id, d)));
                return k.length ? mp(a, g, h, c, l, b).then(function() {
                    return np(a, k, h, g, l, b)
                }, F) : (f(2), L.resolve())
            }

            function jp(a) {
                var c = se(a);
                a = w(Qf, tc(["iPhone", "iPad"]))(a);
                return c ? op : a ? pp : []
            }

            function np(a, c, b, d, e, f) {
                e = f.Si;
                var g = void 0 === e ? F : e,
                    h = f.Xd;
                e = f.Wc;
                var k = void 0 === e ? F : e,
                    l = d(ea);
                return qp(a, c, f)(Za(function(m) {
                    k(6);
                    x(function(p) {
                            p && Mc(a, h + ".s", p)
                        },
                        m);
                    m = d(pb);
                    b.D(h, m).then(u(7, k))
                }, function(m) {
                    k(8);
                    b.D(h, d(pb)).then(u(9, k));
                    g(m, d, l)
                }))
            }

            function mp(a, c, b, d, e, f) {
                var g = f.Xd,
                    h = f.gb,
                    k = f.Wc;
                return new L(function(l, m) {
                    var p = b.C(g, 0);
                    p = parseInt("" + p, 10);
                    return c(pb) - p <= e.gg ? (k(3), m()) : rp(a) ? l(void 0) : md(d) ? (k(4), m()) : l(sp(a, h)["catch"](w(Sc(u(5, k)), Sa)))
                })
            }

            function qp(a, c, b) {
                var d = b.Qb,
                    e = b.data,
                    f = oa(a, d, b.gb);
                a = A({}, Hi);
                e && A(a.J, e);
                return tp(z(function(g) {
                    return up(f(A({
                        Y: {
                            bd: !1,
                            Rc: !0
                        }
                    }, Hi), z(function(h) {
                        var k = h[1],
                            l = h[2];
                        h = G("", z(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) +
                                10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + vp[d]
                    }, g)).then(function(h) {
                        return A({}, h, {
                            host: g[h.og]
                        })
                    }))
                }, c))
            }

            function ip(a, c, b) {
                var d = c || {},
                    e = oa(a, "u", b),
                    f = Ta(a);
                return {
                    C: function(g, h) {
                        return Y(d[g]) ? f.C(g, h) : d[g]
                    },
                    D: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e({
                            J: (k = {}, k.key = g, k.value = l, k)
                        }, [va.Sa + "//" + jc + "/user_storage_set"], {})["catch"](C(a, "u.d.s.s"))
                    }
                }
            }

            function wp(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return L.resolve()
                    }
                }
                return function(e) {
                    var f,
                        g = (f = {}, f["browser-info"] = xp, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = Lb(a, e)) ? d(yp, {
                        cb: g,
                        ha: [],
                        ca: "site-info=" + ne(e)
                    })["catch"](F) : L.resolve()
                }
            }

            function zp(a, c) {
                var b = te(function(d, e) {
                    return d[1].ea > e[1].ea ? 1 : -1
                }, ua(Zd));
                b = z(function(d) {
                    var e = d[0],
                        f = d[1].Ma;
                    d = ob(c, e) && !ba(c[e]);
                    e = c[e] !== (f || R)(void 0);
                    return rb(d && e)
                }, b);
                return ue(G("", b))
            }

            function Ap(a) {
                if (xd(a)) return null;
                var c = Bp(a),
                    b = c.If;
                Y(b) && (c.If = null, Cp(a).then(function(d) {
                    c.If = d
                }));
                return b ? 1 : null
            }

            function Dp(a, c, b) {
                b =
                    b.J;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = yd(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Ep);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Fp, d = e)
                }
                if (!b) return null;
                a = Gp(a, d, b);
                c = K(c);
                c = Hp(c);
                return (c = Ip(c, a)) && G(",", c)
            }

            function Ip(a, c) {
                var b = a.length ? z(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                x(w(R, Ka("push", a)), c);
                return ha(Aa(null), b).length === a.length ? null : b
            }

            function Gp(a, c, b) {
                return z(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (O(e)) return e(a,
                        c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Ii[d[0]] || Ii[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function ve(a, c) {
                try {
                    var b = c.localStorage.getItem(a);
                    return b && rd(we(b))
                } catch (d) {}
                return null
            }

            function we(a) {
                for (var c = [], b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b);
                    128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                }
                return c
            }

            function rd(a,
                c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >>
                            6 & 63
                        ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = G("", e);
                return c ? Ji(e, !0) : e
            }

            function Rh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = Ji(b)); b.length % 4;) b += "=";
                do {
                    var f = kc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        g = kc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        h = kc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        k = kc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f,
                        g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function Ji(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return Jp[b] || b
                }) : ""
            }

            function Kp(a) {
                try {
                    var c = Qa(a) ? a : [];
                    return G(",", [a.name, a.description, w(Ga, Ea, Vb(Lp), xe(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function Lp(a) {
                return G(",", [a.description, a.suffixes, a.type])
            }

            function Mp(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function Np(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                ba(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g));
                Y(h) || h.Vb(f,
                    "" + k);
                return k
            }

            function Op(a, c) {
                if (zd(a)) {
                    var b = sb(a).match(Pp);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function ye(a, c, b) {
                return function(d) {
                    var e, f, g = Ja(c, b);
                    g && Qp(a, d, c) && (g = H(g.params, g), (d = Rf({
                        event: a,
                        Ia: "products",
                        wa: lc,
                        Jh: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function Qp(a, c, b) {
                var d = !1,
                    e = "";
                if (!ia(c)) return Jb(b, "", "ecomeo"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        M(f) && f.length ? (d = Ki(function(g) {
                                return ia(g) && (aa(g.id) || Sb(b, g.id) || aa(g.name))
                            },
                            f)) || (e = "ecomgi") : e = "ecomgei";
                        break;
                    case "purchase":
                        Sb(b, c.id) || aa(c.id) ? d = !0 : e = "ecompi"
                }
                Jb(b, "", e);
                return d
            }

            function Ad(a, c) {
                return {
                    O: function(b, d) {
                        Sf(b) ? d() : na(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.J = A(b.J || {}, e);
                            d()
                        })
                    }
                }
            }

            function Rp(a, c, b) {
                var d, e, f;
                void 0 === b && (b = "");
                var g = J(a),
                    h = {};
                h.getCachedTags = Tf;
                h.form = (d = {}, d.closest = u(a, Li), d.select = Sp, d.getData = u(a, Mi), d);
                h.button = (e = {}, e.closest = u(a, Ni), e.select = Oi, e.getData = u(a, Pi), e);
                h.status = (f = {}, f.checkStatus =
                    D([a, Da(b)], Tp), f);
                g.D("_u", h);
                c && hd(a, {
                    src: c
                })
            }

            function Tp(a) {
                var c, b = Qi(a);
                a = J(a).C("getCounters", Bd)();
                a = z(V("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && I(b, a), c
            }

            function Ri(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? ie(a, c, Ka("push", e), d) : wa(e, Si(a, c, d)));
                    x(b, e)
                }
            }

            function ie(a, c, b, d, e, f) {
                function g(k) {
                    return O(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                void 0 === f && (f = !1);
                var h = g(c);
                if (O(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) &&
                    (h && b(c), !Nf(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: g
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Si(a, c, b) {
                var d = [],
                    e = w(R, Ka("push", d));
                O(b) ? (b = b(c), (ba(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Si(a, c[b]);
                        x(e, g)
                    }
                }
                return d
            }

            function Ti(a, c, b) {
                var d;
                a = [Ui(a, c, function(e) {
                    d = e;
                    e.ya.F(b)
                }), function() {
                    d && d.unsubscribe()
                }];
                return D([ze, a], x)
            }

            function Up(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h =
                        n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = ia(h) && aa(k) ? Rf(k, h) : void 0;
                    if (!h) a: {
                        var l = d;!M(d) && Sb(a, Qa(d)) && (l = Oa(l));
                        if (M(l) && (h = l[0], k = l[1], l = l[2], aa(k) && ia(l) && "event" === h)) {
                            h = Rf(k, l);
                            break a
                        }
                        h = void 0
                    }
                    if (d = h || Vp(d)) tb(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
                }
            }

            function Vp(a) {
                var c = n(a, "ecommerce");
                if (ia(c)) return a = ha(tc(Wp), fa(c)), a = N(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a), 0 === fa(a).length ? void 0 : a
            }

            function Rf(a, c) {
                var b, d, e = aa(a) ? Xp[a] :
                    a;
                if (e) {
                    var f = e.event,
                        g = e.Ia,
                        h = e.Jh,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = z(u(e.wa, Yp), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = fa(l);
                        g && 1 < b.length && (m[f].actionField = zb(function(p, q) {
                            if (q === k) return p;
                            if ("currency" === q) return m.currencyCode = l.currency, p;
                            p[Zp[q] || Uf[q] || q] = l[q];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function Yp(a, c) {
                var b = {};
                x(function(d) {
                    var e = a[d] || Uf[d] || d; - 1 !== nb(d, "item_category") ? (e = Uf.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, fa(c));
                return b
            }

            function $p(a,
                c, b) {
                var d, e, f, g = n(b, "target");
                if (g && (g = Ni(a, g), g = Pi(a, g))) {
                    g = "?" + Fc(g);
                    var h = mc(a, c, "gbn", (d = {}, d.id = c.id, d.query = g, d));
                    b = n(b, "isTrusted");
                    b = ba(b) ? void 0 : (e = {}, e.__ym = (f = {}, f.ite = rb(b), f), e);
                    Ae(a, c, "btn", h).reachGoal(g, b)
                }
            }

            function ff(a, c, b, d) {
                return function() {
                    if (Ja(a, c)) {
                        var e = Oa(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function aq(a, c, b, d) {
                var e = n(d, "target");
                e && (d = n(d, "isTrusted"), (e = Wb("button,input", a, e)) && "submit" === e.type && (e = Li(a, e))) && (b.push(e), T(a, D([!1, a, c, b, e, d], Vi), 300))
            }

            function Vi(a,
                c, b, d, e, f) {
                var g, h, k, l = Mb(c)(e, d),
                    m = -1 !== l;
                if (a || m) m && d.splice(l, 1), a = Mi(c, e), a = "?" + Fc(a), d = D([c, b, "fg", (g = {}, g.id = b.id, g.query = a, g)], Wi), f = ba(f) ? void 0 : (h = {}, h.__ym = (k = {}, k.ite = rb(f), k), h), Ae(c, b, "form", d).reachGoal(a, f)
            }

            function Wi(a, c, b, d) {
                return bq(a, c).then(w(D([mc(a, c, b, d), F], re), ya))
            }

            function Mi(a, c, b) {
                return Xi(a, c, ["i", "n", "p"], void 0, b)
            }

            function cq(a, c) {
                var b;
                a((b = {}, b.clickmap = Y(c) ? !0 : c, b))
            }

            function dq(a, c, b, d, e) {
                var f, g = "clmap/" + e.id;
                c = (f = {}, f["page-url"] = c, f["pointer-click"] = b, f);
                f = {
                    K: Ha(),
                    J: c,
                    ma: {
                        za: g
                    }
                };
                d(f, e)["catch"](C(a, "c.s.c"))
            }

            function eq(a, c, b, d, e) {
                if (ob(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = La(c.element);
                if (e && !e(c.element, a) || I(c.button, [2, 3]) && "A" !== a || Va(Aa(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (fq(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function gq(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument &&
                        b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function hq(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function Yi(a, c) {
                var b = xc(a),
                    d = Vf(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function Be(a, c) {
                return {
                    O: function(b, d) {
                        var e, f = b.K,
                            g = b.Ha,
                            h = b.J,
                            k = b.Y;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ja(a);
                            f.Vb("rqnl", 1);
                            for (var m = Cd(a), p = 1; m[p];) p += 1;
                            b.N || (b.N = {});
                            b.N.Sb =
                                p;
                            m[p] = (e = {}, e.protocol = va.Sa, e.host = jc, e.resource = b.ma.za, e.postParams = k.ca, e.time = l(ea), e.counterType = c.ba, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Ec(a), e);
                            g && (m[p].telemetry = g.l());
                            Wf(a)
                        }
                        d()
                    },
                    Ba: function(b, d) {
                        Zi(a, b);
                        d()
                    }
                }
            }

            function Zi(a, c) {
                var b = Cd(a);
                c.K && !Wa(b) && c.N && (delete b[c.N.Sb], Wf(a))
            }

            function Wf(a) {
                var c = Cd(a);
                Ta(a).D("retryReqs", c)
            }

            function iq(a, c) {
                if (a.$i()) {
                    var b = $i(c);
                    if (b && !ic("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Ug,
                            f = a.gb,
                            g = a.sender,
                            h = a.ih,
                            k = f.uc,
                            l = b.href;
                        var m =
                            $a(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? $a(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        var p = n(c, "isTrusted");
                        if (ic("ym-external-link", b)) Ce(d, f, {
                            url: l,
                            pb: !0,
                            title: m,
                            Dc: p,
                            sender: g
                        });
                        else {
                            k = k ? zc(d, k).hostname : U(d).hostname;
                            h = RegExp("\\.(" + G("|", z(jq, h)) + ")$", "i");
                            var q = b.protocol + "//" + b.hostname + b.pathname;
                            h = aj.test(q) || aj.test(l) || h.test(l) || h.test(q);
                            b = b.hostname;
                            De(k) === De(b) ? h ? Ce(d, f, {
                                url: l,
                                Bc: !0,
                                Dc: p,
                                title: m,
                                sender: g
                            }) : m && e.D("il",
                                $a(m).slice(0, 100)) : l && kq.test(l) || Ce(d, f, {
                                url: l,
                                Fc: !0,
                                pb: !0,
                                Bc: h,
                                Dc: p,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function Ce(a, c, b) {
                var d, e, f, g, h = Ha();
                void 0 !== b.Dc && h.D("ite", rb(b.Dc));
                b.Bc && h.D("dl", 1);
                b.pb && h.D("ln", 1);
                var k = b.qg || {};
                h = {
                    K: h,
                    N: {
                        title: k.title || b.title,
                        Fc: !!b.Fc,
                        M: k.params
                    },
                    J: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.uc || U(a).href, d)
                };
                d = "Link";
                b.Bc ? d = b.pb ? "Ext link - File" : "File" : b.pb && (d = "Ext link");
                tb(a, (e = {}, e.counterKey = K(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.pb ? "external" :
                    "internal") + " url: " + b.url, f), e));
                c = b.sender(h, c).then(mc(a, c, "lcl", (g = {}, g.prefix = d, g.id = c.id, g.url = b.url, g), b.qg));
                return Tc(a, "cl.p.s", c, k.callback || F, k.ctx)
            }

            function lq(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function mq(a, c, b, d) {
                var e = U(a),
                    f = e.hostname;
                e = e.href;
                if (c = Dd(c).url) a = zc(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function bj(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function nq(a, c, b, d) {
                var e;
                if (a = Ja(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    I(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.$f((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function Gh(a, c, b) {
                void 0 === b && (b = R);
                var d = pd(a);
                b(d);
                var e = u(d, oq);
                Ee(a, c, function(f) {
                    f.ya.F(e)
                });
                return d
            }

            function oq(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.aa(n(b, "type"), b)
            }

            function Ee(a, c, b, d) {
                void 0 === b && (b = F);
                void 0 === d && (d = !1);
                var e = cj(a);
                if (c && O(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = Oa(arguments),
                            h = g[0];
                        d && e.aa(h);
                        g = f.apply(c, g);
                        d || e.aa(h);
                        return g
                    };
                    a = {
                        ya: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    x(e.aa, c);
                    return a
                }
            }

            function ce(a) {
                a = J(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c
            }

            function $m(a, c) {
                var b, d;
                I(c, z(V("ymetrikaEvent.type"), a)) || a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function dj(a, c) {
                var b = nd(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = D([a, b.ue], pq),
                    g = u(f, qq);
                b.$.F(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).F(["parentConnect"],
                    function(h) {
                        g(e, b.Ea[h[1].counterId])
                    });
                return {
                    $: b.$,
                    Qj: function(h, k) {
                        return new L(function(l, m) {
                            b.ue(h, k, function(p, q) {
                                l([p, q])
                            });
                            T(a, u(Pa(), m), 5100, "is.o")
                        })
                    },
                    Zf: function(h) {
                        var k = {
                            bg: [],
                            Ge: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    $f: function(h) {
                        var k = {
                            bg: [],
                            Ge: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Ea, k, h)
                    }
                }
            }

            function qq(a, c, b) {
                c = ha(function(d) {
                    return !I(b.info.counterId, d.Ge)
                }, c);
                x(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function pq(a, c, b, d, e) {
                return (new L(function(f,
                    g) {
                    var h = fa(b),
                        k = w(d.resolve || R, Sc(f)),
                        l = w(d.reject || R, Sc(g));
                    d.resolve = k;
                    d.reject = l;
                    x(function(m) {
                        var p;
                        d.Ge.push(+m);
                        var q = b[m],
                            r = T(a, u(Pa(), l), 5100, "is.m");
                        c(q.window, A(e, (p = {}, p.toCounter = Da(m), p)), function(t, y) {
                            ka(a, r);
                            d.bg.push(m);
                            d.resolve && d.resolve(y)
                        })
                    }, h)
                }))["catch"](C(a, "if.b"))
            }

            function rq(a) {
                var c = F,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    O(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    O(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Wg: b,
                        $b: c,
                        M: 1 === d.length ?
                            a[0] : me(d)
                    }
                }
            }

            function Tc(a, c, b, d, e) {
                var f = D([a, d, e], Xf);
                return b.then(f, function(g) {
                    f();
                    Mc(a, c, g)
                })
            }

            function Yf(a, c) {
                return {
                    O: function(b, d) {
                        var e, f, g = (b.N || {}).M,
                            h = b.Y;
                        h = void 0 === h ? {} : h;
                        if (g && (ej(c, g), !h.ca && b.K && b.J)) {
                            var k = Lb(a, g),
                                l = fj(a),
                                m = b.K.C("pv");
                            k && !b.J.nohit && (tb(a, (e = {}, e.counterKey = K(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > va.xg ? l.push([b.K, g]) : b.J["site-info"] = k : (h.ca = k, b.Y = h, b.Oc || (b.Oc = {}), b.Oc.mi = !0))
                        }
                        d()
                    },
                    Ba: function(b, d) {
                        var e = fj(a),
                            f = Ja(a, c),
                            g = f && f.params;
                        g && (f = ha(w(Ed, Aa(b.K)), e), x(function(h) {
                            g(h[1]);
                            h = Fe(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function Ge(a, c) {
                return function(b) {
                    Zf(a, c, b)
                }
            }

            function sq(a, c) {
                $f(a)(function(b) {
                    delete b[c]
                })
            }

            function Zf(a, c, b) {
                $f(a)(function(d) {
                    d[c] = A(d[c] || {}, b)
                })
            }

            function $f(a) {
                a = J(a);
                var c = a.C("dsjf") || Ba({});
                a.Ga("dsjf", c);
                return c
            }

            function tq(a, c) {
                return function(b) {
                    var d, e, f = Ja(a, c);
                    if (f) {
                        var g = nc(a, K(c));
                        ia(b) ? Qa(fa(b)) ? (b = gj(a, b)) && Qa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : g.log("fpeo") : g.log("fpno")
                    }
                }
            }

            function gj(a, c) {
                return N(function(b, d) {
                    var e = d[0],
                        f = d[1],
                        g = f;
                    f = ia(f);
                    if (!f && (Sb(a, g) && (g = "" + g), !aa(g))) return b;
                    g = f ? gj(a, g) : g;
                    Qa(g) && b.push([e, g]);
                    return b
                }, [], ua(c))
            }

            function hj(a, c, b) {
                void 0 === b && (b = 0);
                c = ua(c);
                c = N(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = ia(g);
                    if (!h && (Sb(a, g) && (g = "" + g), !aa(g))) return d;
                    if (h) g = hj(a, g, b + 1);
                    else if (!b && I(f, uq)) g = L.resolve(g);
                    else {
                        "phone_number" === f ? g = Ph(a, g) : "email" === f && (g = Oh(g));
                        if (!g) return d;
                        g = ij(a, g)
                    }
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return L.all(c)
            }

            function Oh(a) {
                var c = $a(a).replace(/^\++/gm, "").toLowerCase(),
                    b = c.lastIndexOf("@");
                if (-1 === b) return ag(c);
                a = c.substr(0, b);
                b = c.substr(b + 1);
                if (!b || !vq(a)) return ag(c);
                b = b.replace("googlemail.com", "gmail.com");
                jj(b) && (b = "yandex.ru");
                "yandex.ru" === b ? a = a.replace(bg, "-") : "gmail.com" === b && (a = a.replace(bg, ""));
                c = nb(a, "+"); - 1 !== c && (a = a.slice(0, c));
                return ag(a + "@" + b)
            }

            function ag(a) {
                var c = Qa(a);
                return 5 > c || 100 < c ? void 0 : a
            }

            function vq(a) {
                return 1 > a.length || 64 < a.length ? !1 : Ki(function(c) {
                    if (1 > c.length) c = !1;
                    else if ('"' ===
                        c[0] && '"' === c[c.length - 1] && 2 < c.length) a: {
                        for (var b = 1; b + 2 < c.length; b += 1) {
                            var d = c.charCodeAt(b);
                            if (32 > d || 34 === d || 126 < d) {
                                c = !1;
                                break a
                            }
                            if (92 === d) {
                                if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) {
                                    c = !1;
                                    break a
                                }
                                b += 1
                            }
                        }
                        c = !0
                    }
                    else c = wq.test(c) ? !0 : !1;
                    return c
                }, a.split("."))
            }

            function Ph(a, c) {
                var b = he(c),
                    d = Qa(b);
                if (!(xq(c) || Qa(c) - d > d || 10 > Qa(b) || 16 < Qa(b))) {
                    d = b[0];
                    var e = c[1];
                    if ("+" !== c[0] || e === d) return d = yq(c), 10 > b.length || 13 < b.length || d.startsWith("+8") ? $a(c) : "8" === d[0] ? "7" + b.slice(1) : "+" === d[0] || Sb(a, +d[0]) ? b : "7" + b
                }
            }

            function ij(a,
                c) {
                return new L(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result") || "";
                            var k = nb(h, ","); - 1 !== k ? b(h.substring(k + 1)) : d(Na("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function Zl(a, c, b, d) {
                var e = kj[b];
                return e ? function() {
                    var f = Oa(arguments);
                    f = d.apply(void 0, f);
                    var g = J(a);
                    g.Ga("mt", {});
                    g = g.C("mt");
                    var h = g[e];
                    g[e] = h ? h + 1 : 1;
                    return f
                } : d
            }

            function Ja(a,
                c) {
                var b = J(a).C("counters", {}),
                    d = K(c);
                return b[d]
            }

            function mc(a, c, b, d, e) {
                return D([a, K(c), e ? [b + ".p", e] : b, d], Jb)
            }

            function Jb(a, c, b, d) {
                nc(a, c).log(b, d)
            }

            function zq(a, c) {
                function b(d, e, f) {
                    var g, h;
                    tb(a, (g = {}, g.name = "log", g.counterKey = c, g.data = (h = {}, h.args = M(e) ? e : [e], h.type = d, h.variables = f, h), g))
                }
                return {
                    log: u("log", b),
                    error: u("error", b),
                    warn: u("warn", b)
                }
            }

            function na(a, c) {
                var b = K(a);
                return lj()(Aq(b)).then(c)
            }

            function Bq(a, c, b) {
                var d, e;
                c = K(c);
                var f = cg(a);
                b = A({
                    kh: f(ea)
                }, b);
                tb(a, (d = {}, d.counterKey = c, d.name =
                    "counterSettings", d.data = (e = {}, e.settings = b, e), d));
                return lj()(Cq(c, b))
            }

            function Cq(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.Nf = !0, d.Mf(c)) : b[a] = {
                        promise: L.resolve(c),
                        Nf: !0,
                        Mf: F
                    }
                }
            }

            function dg(a) {
                return !xd(a) && eg(a)
            }

            function Fd(a) {
                return yb(a) ? u(a, Dq) : !1
            }

            function Bb(a) {
                if (a.fetch) {
                    var c = n(a, "AbortController");
                    return D([a, c ? new c : void 0], Eq)
                }
                return !1
            }

            function eg(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Fa("sendBeacon", c) ? D([a, H(c, n(a, "navigator"))], Fq) : !1
            }

            function Fq(a, c, b, d) {
                return new L(function(e,
                    f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = A(d.cb, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + Fc(h) + (d.ca ? "&" + d.ca : "");
                    return 2E3 < g.length ? f(Pa("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function Dq(a, c, b) {
                return new L(function(d, e) {
                    var f, g, h = "_ymjsp" + Xa(a),
                        k = A((f = {}, f.callback = h, f), b.cb),
                        l = D([a, h], Gq);
                    a[h] = function(p) {
                        try {
                            l(), yc(m), d(p)
                        } catch (q) {
                            e(q)
                        }
                    };
                    k.wmode = "5";
                    var m = hd(a, (g = {}, g.src = mj(c, b, k), g));
                    if (!m) return l(), e(Na("jp.s"));
                    f = u(m, yc);
                    f = w(f, u(Pa(b.ha), e));
                    g = Gd(a, f, b.Pa || 1E4);
                    g = D([a, g], ka);
                    m.onload =
                        g;
                    m.onerror = w(l, g, f)
                })
            }

            function Gq(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Uc(a) {
                var c = yb(a);
                return c ? D([a, c], Hq) : !1
            }

            function Hq(a, c, b, d) {
                return new L(function(e, f) {
                    var g = xc(a),
                        h = c("img"),
                        k = w(u(h, yc), u(Pa(d.ha), f)),
                        l = Gd(a, k, d.Pa || 3E3);
                    h.onerror = k;
                    h.onload = w(u(h, yc), u(null, e), D([a, l], ka));
                    k = A({}, d.cb);
                    delete k.wmode;
                    h.src = mj(b, d, k);
                    zd(a) && (A(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function Eq(a, c, b, d) {
                var e, f = A(d.Cb ? (e = {}, e.wmode =
                        "7", e) : {}, d.cb),
                    g = c || {
                        signal: void 0,
                        abort: F
                    },
                    h = a.fetch(b + "?" + Fc(f), {
                        method: d.$c,
                        body: d.ca,
                        credentials: !1 === d.bd ? "omit" : "include",
                        headers: d.bb,
                        signal: g.signal
                    }),
                    k = u(d.ha, Pa);
                return new L(function(l, m) {
                    d.Pa && Gd(a, function() {
                        try {
                            g.abort()
                        } catch (p) {}
                        m(k())
                    }, d.Pa);
                    return h.then(function(p) {
                        if (!p.ok) {
                            if (d.Rc) return Sa(nj(p));
                            Yd(d.ha)
                        }
                        return d.Rc ? p.text() : d.Cb ? p.json() : null
                    }).then(l)["catch"](u(k(), m))
                })
            }

            function Cb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (Iq.test(a.location.host) &&
                                a.opera && O(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? u(a, Jq) : !1
            }

            function Jq(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.ca,
                    g = A(b.Cb ? (d = {}, d.wmode = "7", d) : {}, b.cb);
                return new L(function(h, k) {
                    e.open(b.$c || "GET", c + "?" + Fc(g), !0);
                    e.withCredentials = !1 !== b.bd;
                    b.Pa && (e.timeout = b.Pa);
                    Kq(ua, Vb(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.bb);
                    var l = D([a, e, Pa(b.ha), b.Cb, b.Rc, h, k], Lq);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function Lq(a,
                c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(nj(c));
                    else {
                        e = null;
                        if (d) try {
                            (e = Tb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function mj(a, c, b) {
                (b = Fc(b)) && (a += "?" + b);
                c.ca && (a += (b ? "&" : "?") + c.ca);
                return a
            }

            function Mq(a, c, b) {
                var d = z(Ed, Xb[c] || Yb);
                x(function(e) {
                    return d.unshift(e)
                }, He);
                return z(w(gd([a, b]), ya), d)
            }

            function oj(a) {
                return {
                    O: function(c, b) {
                        var d = c.J;
                        if (!c.K || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] =
                            pj(a, e) : delete d["page-ref"];
                        d["page-url"] = pj(a, f).slice(0, va.zg);
                        return b()
                    }
                }
            }

            function pj(a, c) {
                var b = U(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!aa(c) || Y(c)) return d;
                b = c.replace(qj, "");
                if (-1 !== b.search(Nq)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = nb(d, e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, G("/", d);
                return ""
            }

            function Ie(a, c) {
                return {
                    O: function(b,
                        d) {
                        var e = rj(c);
                        e = D([b, e, d], Oq);
                        Pq(a, c, e)
                    },
                    Ba: function(b, d) {
                        var e = b.K,
                            f = rj(c);
                        if (e) {
                            var g = f.sa;
                            f.bf === e && g && (x(ya, g), f.sa = null)
                        }
                        d()
                    }
                }
            }

            function Oq(a, c, b) {
                var d = a.K;
                d ? Sf(a) ? (c.bf = d, b()) : c.sa ? c.sa.push(b) : b() : b()
            }

            function Sf(a) {
                return (a = a.K) && a.C("pv") && !a.C("ar")
            }

            function Pq(a, c, b) {
                if (Je(a) && qb(a)) {
                    var d = Qq(c);
                    if (!d.Yh) {
                        d.Yh = !0;
                        c = nd(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.sa = [];
                        var e = function() {
                            d.sa && (x(ya, d.sa), d.sa = null)
                        };
                        T(a, e, 3E3);
                        c.$.F(["initToChild"], e)
                    }
                    d.sa ? d.sa.push(b) : b()
                } else b()
            }

            function sj(a, c) {
                return {
                    O: function(b,
                        d) {
                        var e = b.K;
                        if (e && (!c || c.Yf)) {
                            var f = a.document.title;
                            b.N && b.N.title && (f = b.N.title);
                            var g = Gc("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, va.yg);
                            e.D("t", f)
                        }
                        d()
                    }
                }
            }

            function Nb(a) {
                return function(c, b) {
                    return {
                        O: function(d, e) {
                            var f = d.K,
                                g = d.J;
                            f && g && x(function(h) {
                                var k = Hd[h],
                                    l = "bi",
                                    m = f;
                                k || (k = fg[h], l = "tel", m = ee(d));
                                k && (k = B(l + ":" + h, k, null)(c, b, d), m.Vb(h, k))
                            }, a || Rq());
                            e()
                        }
                    }
                }
            }

            function Sq(a, c) {
                var b = Id(a);
                c.F(["initToParent"], function(d) {
                    var e =
                        d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).F(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.aa("parentConnect", [e, d])
                }).F(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.Ea[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function Tq(a) {
                if (Fa("MutationObserver", a.MutationObserver)) {
                    var c = Id(a).children,
                        b = new a.MutationObserver(function() {
                            x(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, fa(c))
                        });
                    vc(a)(Za(F, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function Uq(a, c) {
                return function(b, d) {
                    var e, f = {
                        kc: ja(a)(ea),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.kc = Da(b[0]), f.key = parseFloat(b[1]), f.dir = Da(b[2]));
                    A(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = G(":", ["__yminfo", f.kc, f.key, f.dir]), e);
                    return {
                        meta: f,
                        eg: Lb(a, g) || ""
                    }
                }
            }

            function vc(a, c) {
                function b(e) {
                    n(c, d) ? e() : T(a, u(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Ba(function(e, f) {
                    b(f)
                })
            }

            function Jd(a, c) {
                var b = c.Yd,
                    d = b || "uid";
                b = b ? a.location.hostname :
                    void 0;
                var e = Rc(a),
                    f = Ta(a),
                    g = ja(a)(gg),
                    h = tj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.C("d");
                uj(a, c);
                var m = !1;
                !h && k && (h = k, m = !0);
                if (!h) h = G("", [g, Xa(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 < g - Da(l)) m = !0;
                m && !c.Wa && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h
            }

            function Vq(a, c) {
                return !c.Wa && uj(a, c)
            }

            function tj(a, c) {
                var b = Ta(a),
                    d = Rc(a),
                    e = c.Yd || "uid";
                return [b.C(e), d.C(e)]
            }

            function Ec(a) {
                var c = J(a),
                    b = c.C("hitId");
                b || (b = Xa(a), c.D("hitId", b));
                return b
            }

            function Pi(a, c, b) {
                var d = La(c);
                return d && Xi(a, c, Ea(["p",
                    Wq[d], "c"
                ]), Oi, b)
            }

            function Ni(a, c) {
                var b = Wb(hg, a, c);
                if (!b) {
                    var d = Wb("div", a, c);
                    d && (hb(hg + ",div", d).length || (b = d))
                }
                return b
            }

            function Xi(a, c, b, d, e) {
                return N(function(f, g) {
                    var h = null;
                    g in vj ? h = c.getAttribute && c.getAttribute(vj[g]) : g in Ke && (h = "p" === g ? Ke[g](a, c, e) : "c" === g ? Ke[g](a, c, d) : Ke[g](a, c));
                    h && (h = h.slice(0, wj[g] || 100), f[g] = ig[g] ? "" + gc(h) : h);
                    return f
                }, {}, b)
            }

            function hi(a, c, b) {
                if (ld(a)) return Ga(b.querySelectorAll(c));
                var d = xj(c.split(" "), b);
                return ha(function(e, f) {
                    return Mb(a)(e, d) === f
                }, d)
            }

            function xj(a,
                c) {
                var b = wa([], a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? wc(u(b, xj), Ga(d)) : Ga(d)
            }

            function ec(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = hb(a, c);
                return b && b.length ? b[0] : null
            }

            function hb(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? Ga(b) : []
            }

            function $i(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !==
                            a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function hd(a, c) {
                var b = yb(a);
                if (b) {
                    var d = a.document,
                        e = b("script");
                    e.src = c.src;
                    e.type = c.type || "text/javascript";
                    e.charset = c.charset || "utf-8";
                    e.async = c.async || !0;
                    try {
                        var f = d.getElementsByTagName("head")[0];
                        if (!f) {
                            var g = d.getElementsByTagName("html")[0];
                            f = b("head");
                            g && g.appendChild(f)
                        }
                        f.insertBefore(e, f.firstChild);
                        return e
                    } catch (h) {}
                }
            }

            function ci(a, c) {
                var b =
                    yj(a);
                I(c, b.tb) && (b.tb = ha(w(Aa(c), Hc), b.tb), b.tb.length || (yc(b.jb), b.jb = null))
            }

            function bi(a, c, b) {
                var d = yj(c);
                I(b, d.tb) || d.tb.push(b);
                if (Wa(d.jb)) {
                    b = yb(a);
                    if (!b) return null;
                    b = b("iframe");
                    A(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = xc(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.jb = b
                } else(a = n(d.jb, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.jb
            }

            function Xq(a, c) {
                var b = M(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = G(", ", z(function(e) {
                        return "." +
                            e
                    }, b));
                    return Ga(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return wc(w(Ka("getElementsByClassName", c), Ga), b);
                d = c.getElementsByTagName("*");
                b = "(" + G("|", b) + ")";
                return ha(u(b, ic), Ga(d))
            }

            function rf(a, c, b) {
                for (var d = "", e = Tf(), f = La(c) || "*"; c && c.parentNode && !I(f, ["BODY", "HTML"]);) d += e[f] || "*", d += zj(a, c, b) || "", c = c.parentElement, f = La(c) || "*";
                return $a(d, 128)
            }

            function zj(a, c, b) {
                if (a = Le(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function Le(a, c) {
                var b = n(a, "document");
                return c && c !== b.documentElement ? c === Ic(a) ? b.documentElement : n(c, "parentNode") : null
            }

            function Kf(a, c) {
                var b = jg(a, c),
                    d = b.left;
                b = b.top;
                var e = Me(a, c);
                return [d, b, e[0], e[1]]
            }

            function Me(a, c) {
                var b = n(a, "document");
                if (c === Ic(a) || c === b.documentElement) {
                    b = xc(a);
                    var d = Oc(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = Nc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function jg(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = La(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === Ic(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = Nc(b)) return b = Vf(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function Aj(a, c) {
                return ob(c, "isConnected") ? !c.isConnected : Wb("html", a, c) !== a.document.documentElement
            }

            function Wb(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && Fa("closest", c.Element.prototype.closest) &&
                    b.closest) return b.closest(a);
                var d = oi(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (ld(c)) {
                    for (a = Ga((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Mb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function ld(a) {
                return !(!Fa("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function Bh(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.w;
                b = b.h;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            }

            function Bj(a) {
                return Ne(a) && !Va(Aa(a.type), Yq) ? Oe(a) ? !a.checked : !a.value : Zq(a) ? !a.value : $q(a) ? 0 > a.selectedIndex : !0
            }

            function La(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (aa(c)) return c;
                    c = a.tagName;
                    if (aa(c)) return c
                } catch (b) {}
            }

            function Cj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Mb(a)(c, Ga(b))
            }

            function ar(a, c, b) {
                b = Gc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Fa("(Event|Object|constructor)", e) || kg(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = Gc("createEvent", n(a, "document"))) && O(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function Nc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Df && c.Df & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Vf(a) {
                var c = Ic(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement &&
                        b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function Oc(a) {
                var c = be(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = xc(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function be(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return ba(c) || ba(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function xc(a) {
                var c = n(a,
                        "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Ic(a) || b
            }

            function Ic(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function ic(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function Jc(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function yc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Kb(a) {
                return a ? a.innerText || "" : ""
            }

            function Nf(a) {
                if (ba(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function Dj(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c;
                d && (d += "_");
                return {
                    Qd: br(a),
                    C: function(e, f) {
                        var g = Ej(a, "" + d + e);
                        return Wa(g) && !Y(f) ? f : g
                    },
                    D: function(e, f) {
                        Fj(a, "" + d + e, f);
                        return this
                    },
                    lc: function(e) {
                        Gj(a, "" + d + e);
                        return this
                    }
                }
            }

            function Fj(a, c, b) {
                var d = lg(a);
                a = Lb(a, b);
                if (!Wa(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function Ej(a, c) {
                var b = lg(a);
                try {
                    return Tb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function Gj(a, c) {
                var b = lg(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function lg(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function Lb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function ee(a, c, b) {
                void 0 === b && (b = null);
                a.Ha || (a.Ha = sf());
                c && a.Ha.Vb(c, b);
                return a.Ha
            }

            function Pe(a) {
                return {
                    O: function(c, b) {
                        var d = a.document,
                            e = c.K;
                        if (e && mg(a)) {
                            var f = la(a),
                                g = function(h) {
                                    mg(a) || (f.zb(d, Hj, g), b());
                                    return h
                                };
                            f.F(d, Hj, g);
                            e.D("pr", "1")
                        } else b()
                    }
                }
            }

            function Kd(a) {
                return function(c, b, d) {
                    return function(e,
                        f) {
                        var g = z(w(Ed, gd([c, f]), ya), Ij[a] || []);
                        g = wa(g, d);
                        return Jj(c, b, g)(e)
                    }
                }
            }

            function Jj(a, c, b) {
                var d = Db(a, c);
                return function(e) {
                    return Kj(b, e, !0).then(function() {
                        var f = e.ma || {},
                            g = f.Qh,
                            h = void 0 === g ? "" : g;
                        g = f.za;
                        var k = void 0 === g ? "" : g;
                        f = f.Rh;
                        f = z(function(l) {
                            return va.Sa + "//" + ("" + h + l || jc) + "/" + k
                        }, void 0 === f ? [jc] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.ub;
                        f = f.og;
                        e.Ji = g;
                        e.Pj = f;
                        return Kj(b, e).then(u(g, R))
                    })
                }
            }

            function Db(a, c) {
                return function(b, d) {
                    return Lj(a, c, d, b)
                }
            }

            function Lj(a, c, b, d, e, f) {
                var g;
                void 0 ===
                    e && (e = 0);
                void 0 === f && (f = 0);
                var h = A({
                        ha: []
                    }, d.Y),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.bb && h.bb["Content-Type"] || !h.ca || (h.bb = A({}, h.bb, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.ca = "site-info=" + ne(h.ca));
                h.$c = h.ca ? "POST" : "GET";
                h.cb = cr(a, d, l);
                h.za = (d.ma || {}).za;
                h.ha.push(l);
                A(d.Y, h);
                g = "" + m + (d.Oc && d.Oc.mi ? "/1" : "");
                var p = 0;
                p = dr(a, g, h);
                return k(g, h).then(function(q) {
                    var r = p,
                        t, y;
                    tb(a, (t = {}, t.name = "requestSuccess", t.data = (y = {}, y.body = q, y.requestId = r, y), t));
                    return {
                        ub: q,
                        og: e
                    }
                })["catch"](function(q) {
                    var r =
                        p,
                        t, y;
                    tb(a, (t = {}, t.name = "requestFail", t.data = (y = {}, y.error = q, y.requestId = r, y), t));
                    r = f + 1 >= c.length;
                    t = e + 1 >= b.length;
                    r && t && Sa(q);
                    return Lj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
                })
            }

            function cr(a, c, b) {
                var d = A({}, c.J);
                a = ja(a);
                c.K && (d["browser-info"] = Ha(c.K.l()).D("st", a(gg)).Fa());
                !d.t && (c = c.Ha) && (c.D("ti", b), d.t = c.Fa());
                return d
            }

            function dr(a, c, b) {
                var d, e, f, g = Xa(a),
                    h = b.ha,
                    k = b.ca,
                    l = b.bb,
                    m = b.cb;
                b = b.$c;
                tb(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders =
                    l, f.rQuery = m, f.verb = b, f), e), d));
                return g
            }

            function Mj(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !ba(d) && Nj(a[c], b, d)
            }

            function Nj(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function Kj(a, c, b) {
                void 0 === b && (b = !1);
                return new L(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        O: f,
                        Ba: f
                    });
                    var h = fc(g, function(k, l) {
                        var m = b ? k.O : k.Ba;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(er), e(p)
                        } else l()
                    });
                    h(Oj)
                })
            }

            function Qb(a, c,
                b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = la(a);
                    var e = "__ym__promise_" + Xa(a) + "_" + Xa(a),
                        f = F;
                    d = C(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*")
                } else T(a, c, 0, d)
            }

            function nh(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = fc(c, b);
                kd(a, c, d)(Za(C(a, e), F))
            }

            function kd(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Pj);
                ng = Infinity === b;
                return Ba(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(fr);
                        if (c(Ld)) return f(h), Qj(a);
                        ng ? (c(d(a, 1E4)), f(h), Qj(a)) : T(a, g, 100)
                    }
                    var h = [];
                    gr(g)
                })
            }

            function Qj(a) {
                if (og.length) {
                    var c = og.shift();
                    ng ? c() : T(a, c, 100)
                } else pg = !1
            }

            function gr(a) {
                pg ? og.push(a) : (pg = !0, a())
            }

            function Df(a) {
                return Ba(function(c, b) {
                    b(a)
                })
            }

            function up(a) {
                return Ba(function(c, b) {
                    a.then(b, c)
                })
            }

            function hr(a) {
                var c = [],
                    b = 0;
                return Ba(function(d, e) {
                    x(function(f, g) {
                        f(Za(d, function(h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function tp(a) {
                var c = [],
                    b = !1;
                return Ba(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    x(function(g) {
                        g(Za(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Za(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }

            function fc(a, c) {
                return Ba({
                    Va: a,
                    Ud: c || R,
                    Ae: !1,
                    va: 0
                })
            }

            function Oj(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.va += 1
                    }
                    b = !1;
                    a.Ud(a.Va[a.va], function() {
                        d()
                    });
                    b || (a.va += 1, d = u(a, Oj))
                }
                for (var b = !0; !Ld(a) && b;) c()
            }

            function Pj(a, c) {
                return function(b) {
                    var d = ja(a),
                        e = d(ea);
                    return Rj(function(f, g) {
                        d(ea) - e >= c && g(Sj)
                    })(b)
                }
            }

            function qg(a, c) {
                return function(b) {
                    var d = ja(a),
                        e = d(ea);
                    return rg(function(f) {
                        d(ea) - e >= c && Sj(f)
                    })(b)
                }
            }

            function rg(a) {
                return function(c) {
                    for (var b; c.Va.length && !Ld(c);) b = c.Va.pop(), b = c.Ud(b, c.Va), a(c);
                    return b
                }
            }

            function ir(a) {
                Ld(a) && Sa(Na("i"));
                var c = a.Ud(a.Va[a.va]);
                a.va += 1;
                return c
            }

            function fr(a) {
                a.Ae = !1
            }

            function Sj(a) {
                a.Ae = !0
            }

            function er(a) {
                a.va = a.Va.length
            }

            function Ld(a) {
                return a.Ae || a.Va.length <= a.va
            }

            function Ab(a) {
                a = ja(a);
                return Math.round(a(Tj) / 50)
            }

            function Tj(a) {
                var c = a.Mc,
                    b = c[1];
                a = c[0] && b ?
                    b() : ea(a) - a.Sh;
                return Math.round(a)
            }

            function gg(a) {
                return Math.round(ea(a) / 1E3)
            }

            function pb(a) {
                return Math.floor(ea(a) / 1E3 / 60)
            }

            function ea(a) {
                var c = a.Ie;
                return 0 !== c ? c : sg(a.l, a.Mc)
            }

            function cg(a) {
                var c = la(a),
                    b = Uj(a),
                    d = {
                        l: a,
                        Ie: 0,
                        Mc: b,
                        Sh: sg(a, b)
                    },
                    e = b[1];
                b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                    0 === d.Ie && (d.Ie = sg(a, d.Mc))
                });
                return Ba(d)
            }

            function jr(a) {
                return (10 > a ? "0" : "") + a
            }

            function kr(a, c) {
                return a.clearInterval(c)
            }

            function lr(a, c, b, d) {
                return a.setInterval(C(a, "i.err." + (d || "def"), c), b)
            }

            function T(a,
                c, b, d) {
                return Gd(a, C(a, "d.err." + (d || "def"), c), b)
            }

            function pd(a) {
                var c = {};
                return {
                    F: function(b, d) {
                        x(function(e) {
                            n(c, e) || (c[e] = cj(a));
                            c[e].F(d)
                        }, b);
                        return this
                    },
                    ga: function(b, d) {
                        x(function(e) {
                            n(c, e) && c[e].ga(d)
                        }, b);
                        return this
                    },
                    aa: function(b, d) {
                        return n(c, b) ? C(a, "e." + d, c[b].aa)(d) : []
                    }
                }
            }

            function cj(a) {
                var c = [],
                    b = {};
                b.Ij = c;
                b.F = w(Ka("push", c), u(b, R));
                b.ga = w(ab(Mb(a))(c), ab(Ka("splice", c))(1), u(b, R));
                b.aa = w(R, ab(ya), mr(c));
                return b
            }

            function Vj(a, c, b, d, e, f) {
                a = nr(a);
                var g = a.F,
                    h = a.ga;
                f = f ? h : g;
                if (c[f])
                    if (a.Ti)
                        if (e) c[f](b,
                            d, e);
                        else c[f](b, d);
                else c[f]("on" + b, d)
            }

            function B(a, c, b) {
                return function() {
                    return C(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function C(a, c, b, d, e) {
                var f = b || Sa;
                return function() {
                    var g = d;
                    try {
                        g = f.apply(e || null, arguments)
                    } catch (h) {
                        Mc(a, c, h)
                    }
                    return g
                }
            }

            function sg(a, c) {
                var b = c || Uj(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && O(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function Uj(a) {
                a = yd(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = H(b, a));
                return [c, b]
            }

            function yd(a) {
                return n(a,
                    "performance") || n(a, "webkitPerformance")
            }

            function Mc(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Sa(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                or(d) || Va(u(d, gb), pr) || qr(d) && .1 <= a.Math.random() || x(w(R, gd(["jserrs", d, c, e]), ya), Wj)
            }

            function Yd() {
                var a = Oa(arguments);
                return Sa(Pa(a))
            }

            function Pa(a) {
                var c = "";
                M(a) ? c = G(".", a) : aa(a) && (c = a);
                return Na("err.kn(" + va.fb + ")" + c)
            }

            function nj(a) {
                return Na("http." + a.status + ".st." + a.statusText + ".rt." + ("" +
                    a.responseText).substring(0, 50))
            }

            function rr(a) {
                this.message = a
            }

            function tb(a, c) {
                if (Qe(a)) {
                    var b = c.counterKey;
                    if (b) {
                        var d = b.split(":");
                        b = d[1];
                        d = tg(ke(d[0]));
                        if ("1" === b || d) return
                    }
                    b = sr(a);
                    1E3 === b.length && b.shift();
                    b.push(c)
                }
            }

            function pi(a, c, b) {
                Re(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = Xj(a);
                (d = d && d.metrika_enabled) && Yj(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function Re(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (qi(a, ud, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + tr(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() +
                            6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(ur, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (Zj(a)[c] = b)
                    } catch (l) {}
                }
            }

            function ud(a, c) {
                var b = Zj(a);
                return b ? b[c] || null : null
            }

            function Xj(a) {
                try {
                    var c = a.document.cookie;
                    if (!ba(c)) {
                        var b = {};
                        x(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[$a(d[0])] = $a(ak(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function qi(a, c, b) {
                return !ug.length || I(b, Se) ? !0 : N(function(d, e) {
                    return d && e(a, c, b)
                }, !0, ug)
            }

            function Fc(a) {
                return a ?
                    w(ua, bk(function(c, b) {
                        var d = b[0],
                            e = b[1];
                        Y(e) || ba(e) || c.push(d + "=" + ne(e));
                        return c
                    }, []), xe("&"))(a) : ""
            }

            function ck(a) {
                return a ? w(Vb(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], ba(b) ? void 0 : ak(b)]
                }), bk(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function ak(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function ne(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = G("", ha(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function $a(a,
                c) {
                if (a) {
                    var b = dk ? dk.call(a) : ("" + a).replace(qj, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function jj(a) {
                var c = a.match(ek);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return I(c, vg) ? c : !1;
                    if (a) return vg[0]
                }
                return !1
            }

            function U(a) {
                return N(function(c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, vr)
            }

            function fk(a) {
                return N(function(c, b) {
                    c[Zd[b[0]].ea] = b[1];
                    return c
                }, {}, ua(a))
            }

            function oc(a) {
                x(function(c) {
                    var b = c[1];
                    Zd[c[0]] = {
                        ea: b.ea,
                        Ma: b.Ma
                    }
                }, ua(a))
            }

            function Yl(a, c, b, d, e) {
                var f = mh(a, b, d, e);
                a = N(function(g,
                    h) {
                    var k = h[1],
                        l = k.Ma;
                    k = f[k.ea];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, ua(c));
                ej(a, a.M || {});
                return a
            }

            function mh(a, c, b, d) {
                var e;
                return ia(a) ? a : (e = {}, e.id = a, e.type = b, e.defer = d, e.params = c, e)
            }

            function wr(a) {
                a = K(a);
                return pc[a] && pc[a].Zi || null
            }

            function gk(a) {
                a = K(a);
                return pc[a] && pc[a].Yi
            }

            function ej(a, c) {
                var b = K(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                pc[b] || (pc[b] = {});
                if (d || e) pc[b].Yi = d, pc[b].Zi = e
            }

            function vf(a, c) {
                if (Md(a) && c) {
                    var b = sb(a).match(wg);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function wf(a,
                c) {
                var b = sb(a);
                return b && (b = b.match(xr)) && 1 < b.length ? Da(b[1]) >= c : !1
            }

            function mg(a) {
                return I("prerender", z(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Xa(a, c, b) {
                var d = Y(b);
                Y(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function yr() {
                var a = Oa(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) ob(b, d) && (c[d] = b[d]);
                    ob(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function zr(a) {
                return function(c) {
                    return c ?
                        a(c) : []
                }
            }

            function hk(a) {
                return Y(a) ? [] : xg(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], ik(a))
            }

            function ik(a) {
                var c = [],
                    b;
                for (b in a) ob(a, b) && c.push(b);
                return c
            }

            function ke(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function Sb(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
            }

            function Ar(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function wa(a, c) {
                x(w(R, Ka("push", a)), c);
                return a
            }

            function te(a, c) {
                return Array.prototype.sort.call(c,
                    a)
            }

            function Te(a) {
                return a.splice(0, a.length)
            }

            function Ga(a) {
                return a ? M(a) ? a : Ue ? Ue(a) : "number" === typeof a.length && 0 <= a.length ? jk(a) : [] : []
            }

            function Br(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (b in c && a.call(c, c[b], b)) return !0;
                return !1
            }

            function Cr(a, c) {
                return N(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(M(d) ? d : [d])
                }, [], c)
            }

            function kk(a, c) {
                return N(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function Dr(a, c) {
                if (!Md(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function Er(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function Fr(a, c) {
                return 1 <= lk(Aa(a), c).length
            }

            function Gr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b]
            }

            function lk(a, c) {
                return xg(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function re(a, c, b) {
                return b ? a : c
            }

            function Hr(a, c) {
                return N(function(b, d, e) {
                    return b ? !!a(d, e) : !1
                }, !0, c)
            }

            function Xf(a, c, b) {
                try {
                    if (O(c)) {
                        var d = Oa(arguments).slice(3);
                        c.apply(ba(b) ? null : b, d)
                    }
                } catch (e) {
                    Gd(a, u(e, Sa), 0)
                }
            }

            function Sa(a) {
                throw a;
            }

            function Gd(a, c, b) {
                return Gc("setTimeout", a)(c, b)
            }

            function ka(a, c) {
                return Gc("clearTimeout", a)(c)
            }

            function Bd() {
                return []
            }

            function qc() {
                return {}
            }

            function Gc(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function ub(a, c, b) {
                return function() {
                    var d = J(arguments[0]),
                        e = b ? "global" : "m1450",
                        f = d.C(e, {}),
                        g = n(f, a);
                    g || (g = v(c), f[a] = g, d.D(e, f));
                    return g.apply(null, arguments)
                }
            }

            function me(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                zb(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : ob(b, d) || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function Vc(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Ga: function(b, d) {
                        yg.call(c, b) || (c[b] = d);
                        return this
                    },
                    D: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    C: function(b, d) {
                        var e = c[b];
                        return yg.call(c, b) || Y(d) ? e : d
                    }
                }
            }

            function ob(a, c) {
                return ba(a) ? !1 : yg.call(a, c)
            }

            function v(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : R;
                return function() {
                    var f = Oa(arguments),
                        g = e.apply(void 0,
                            f),
                        h = mf(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Mb(a) {
                if (zg) return zg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && ma(a.Array.prototype.indexOf, "indexOf");
                a = void 0;
                return zg = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : Ir
            }

            function Ir(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function ya(a, c) {
                return c ? a(c) : a()
            }

            function w() {
                var a = Oa(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0,
                        arguments);
                    return N(mk, b, a)
                }
            }

            function bk(a, c) {
                return D([a, c], N)
            }

            function xg(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function db(a) {
                return Ka("test", a)
            }

            function Ka(a, c) {
                return H(c[a], c)
            }

            function u(a, c) {
                return H(c, null, a)
            }

            function D(a, c) {
                return H.apply(void 0, Lc([c, null], a))
            }

            function Jr(a) {
                return function() {
                    var c = Oa(arguments);
                    return a.apply(c[0], [c[1]].concat(c.slice(2)))
                }
            }

            function Kr() {
                var a = Oa(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = Lc(d, Oa(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, Lc([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && nk(f, e, b);
                        delete b[f];
                        return e
                    }
                    return nk(c, e)
                }
            }

            function nk(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                O(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function Oa(a) {
                if (Ue) try {
                    return Ue(a)
                } catch (c) {}
                return jk(a)
            }

            function jk(a) {
                for (var c = a.length, b = [],
                        d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function ia(a) {
                return !Wa(a) && !Y(a) && "[object Object]" === Object.prototype.toString.call(a)
            }

            function ba(a) {
                return Y(a) || Wa(a)
            }

            function O(a) {
                return "function" === typeof a
            }

            function ab(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function pa(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function mk(a, c) {
                return c(a)
            }

            function jq(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(bg, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g,
                    "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function Lr(a) {
                return "" + a
            }

            function gb(a, c) {
                return !(!a || -1 === nb(a, c))
            }

            function kc(a, c) {
                return nb(a, c)
            }

            function Mr(a, c) {
                for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                    b = a[e] === c[b] ? b + 1 : 0;
                    if (b === c.length) return e - c.length + 1;
                    if (!b && e > d) break
                }
                return -1
            }

            function aa(a) {
                return "string" === typeof a
            }

            function ma(a, c) {
                return Fa(c, a) && a
            }

            function Fa(a, c) {
                var b =
                    Ve(a, c);
                c && !b && Ag.push([a, c]);
                return b
            }

            function Ve(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function F() {}

            function Bg(a, c) {
                Bg = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return Bg(a, c)
            }

            function Hc(a) {
                return !a
            }

            function eb(a, c) {
                return c
            }

            function R(a) {
                return a
            }

            function Ma(a, c) {
                function b() {
                    this.constructor = a
                }
                Bg(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function Lc() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function n(a, c) {
                return a ? N(function(b, d) {
                    if (ba(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function Nr(a) {
                return "[object Array]" ===
                    Object.prototype.toString.call(a)
            }

            function Or() {}

            function Pr(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function Ia(a) {
                if (!(this instanceof Ia)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.Ja = 0;
                this.Ne = !1;
                this.Ra = void 0;
                this.Db = [];
                ok(a, this)
            }

            function pk(a, c) {
                for (; 3 === a.Ja;) a = a.Ra;
                0 === a.Ja ? a.Db.push(c) : (a.Ne = !0, Ia.Oe(function() {
                    var b = 1 === a.Ja ? c.ui : c.yi;
                    if (null === b)(1 === a.Ja ? Cg : Nd)(c.promise, a.Ra);
                    else {
                        try {
                            var d = b(a.Ra)
                        } catch (e) {
                            Nd(c.promise,
                                e);
                            return
                        }
                        Cg(c.promise, d)
                    }
                }))
            }

            function Cg(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof Ia) {
                            a.Ja = 3;
                            a.Ra = c;
                            Dg(a);
                            return
                        }
                        if ("function" === typeof b) {
                            ok(Pr(b, c), a);
                            return
                        }
                    }
                    a.Ja = 1;
                    a.Ra = c;
                    Dg(a)
                } catch (d) {
                    Nd(a, d)
                }
            }

            function Nd(a, c) {
                a.Ja = 2;
                a.Ra = c;
                Dg(a)
            }

            function Dg(a) {
                2 === a.Ja && 0 === a.Db.length && Ia.Oe(function() {
                    a.Ne || Ia.Eg(a.Ra)
                });
                for (var c = 0, b = a.Db.length; c < b; c++) pk(a, a.Db[c]);
                a.Db = null
            }

            function Qr(a,
                c, b) {
                this.ui = "function" === typeof a ? a : null;
                this.yi = "function" === typeof c ? c : null;
                this.promise = b
            }

            function ok(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Cg(c, d))
                    }, function(d) {
                        b || (b = !0, Nd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Nd(c, d))
                }
            }

            function Yj(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return Re(a, c, "", -100, b, d, e)
            }

            function jd(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = Rr(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    lc: function(g, h, k) {
                        Yj(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    C: function(g) {
                        return ud(a,
                            "" + c + g + f)
                    },
                    D: function(g, h, k, l, m) {
                        Re(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function Tb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function gc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function zc(a, c) {
                var b = Sr(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname ||
                        "/") + b.search,
                    href: b.href
                }) : {}
            }

            function qk(a) {
                return (a = U(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function Tr(a, c) {
                var b = qk(a);
                rk = lr(a, function() {
                    var d = qk(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return H(kr, null, a, rk)
            }

            function Ur(a, c, b, d) {
                var e, f, g = c.ba,
                    h = c.Le,
                    k = c.uc,
                    l = J(a),
                    m = Ha((e = {}, e.wh = 1, e.pv = 1, e));
                e = n(d, "isTrusted");
                d && !ba(e) && m.D("ite", rb(e));
                $d(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                h && m.D("ut", "1");
                g = l.C("lastReferrer");
                d = U(a).href;
                k = {
                    J: (f = {}, f["page-url"] = k || d, f["page-ref"] = g, f),
                    K: m
                };
                b(k, c)["catch"](C(a,
                    "g.s"));
                l.D("lastReferrer", d)
            }

            function Vr(a, c, b) {
                function d() {
                    r || (q = !0, t = !1, r = !0, f())
                }

                function e() {
                    m = !0;
                    k(!1);
                    c()
                }

                function f() {
                    ka(a, l);
                    if (m) k(!1);
                    else {
                        var P = Math.max(0, b - (t ? y : y + p(ea) - E));
                        P ? l = T(a, e, P, "u.t.d.c") : e()
                    }
                }

                function g() {
                    t = q = r = !0;
                    y += p(ea) - E;
                    E = p(ea);
                    f()
                }

                function h() {
                    q || r || (y = 0);
                    E = p(ea);
                    q = r = !0;
                    t = !1;
                    f()
                }

                function k(P) {
                    P = P ? Q.F : Q.zb;
                    P(a, ["blur"], g);
                    P(a, ["focus"], h);
                    P(a.document, ["click", "mousemove", "keydown", "scroll"], d)
                }
                var l = 0,
                    m = !1;
                if (kg(a)) return l = T(a, c, b, "u.t.d"), D([a, l], ka);
                var p = ja(a),
                    q = !1,
                    r = !1,
                    t = !0,
                    y = 0,
                    E = p(ea),
                    Q = la(a);
                k(!0);
                f();
                return function() {
                    ka(a, l);
                    k(!1)
                }
            }

            function vb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] *
                    c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function rc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Wc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c |
                    a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c
                ]
            }

            function kb(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function xa(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function sk(a) {
                a = xa(a, [0, a[0] >>> 1]);
                a = vb(a, [4283543511, 3981806797]);
                a = xa(a, [0, a[0] >>> 1]);
                a = vb(a, [3301882366, 444984403]);
                return a = xa(a, [0, a[0] >>> 1])
            }

            function Wr(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    V: [0, d],
                    X: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f +
                            6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = vb(h, We);
                    h = Wc(h, 31);
                    h = vb(h, Xe);
                    g.V = xa(g.V, h);
                    g.V = Wc(g.V, 27);
                    g.V = rc(g.V, g.X);
                    g.V = rc(vb(g.V, [0, 5]), [0, 1390208809]);
                    k = vb(k, Xe);
                    k = Wc(k, 33);
                    k = vb(k, We);
                    g.X = xa(g.X, k);
                    g.X = Wc(g.X, 31);
                    g.X = rc(g.X, g.V);
                    g.X = rc(vb(g.X, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = xa(h, kb([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = xa(h, kb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = xa(h, kb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = xa(h, kb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = xa(h, kb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = xa(h, kb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = xa(h, [0, b.charCodeAt(f + 8)]), h = vb(h, Xe), h = Wc(h, 33), h = vb(h, We), d.X = xa(d.X, h);
                    case 8:
                        g = xa(g, kb([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = xa(g, kb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = xa(g, kb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = xa(g, kb([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = xa(g, kb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = xa(g, kb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = xa(g, kb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = xa(g, [0, b.charCodeAt(f)]), g = vb(g, We), g = Wc(g, 31), g = vb(g, Xe), d.V = xa(d.V, g)
                }
                d.V = xa(d.V, [0, b.length]);
                d.X = xa(d.X, [0, b.length]);
                d.V = rc(d.V, d.X);
                d.X = rc(d.X, d.V);
                d.V = sk(d.V);
                d.X = sk(d.X);
                d.V = rc(d.V,
                    d.X);
                d.X = rc(d.X, d.V);
                return ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[1] >>> 0).toString(16)).slice(-8)
            }

            function Od(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = hb('[itemprop~="' + b + '"]', c);
                return d ? ha(function(e) {
                    return e.parentNode && Wb("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function fb(a, c, b) {
                return (a = Od(a, c, b)) && a.length ? a[0] : null
            }

            function bb(a) {
                if (!a) return "";
                a = M(a) ? a : [a];
                return a.length ?
                    a[0].getAttribute("content") || Kb(a[0]) : ""
            }

            function tk(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : bb(a) : ""
            }

            function td(a, c, b) {
                a = c && (gb(c.className, "ym-disable-keys") || gb(c.className, "-metrika-nokeys"));
                return b && c ? a || !!Xq(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function Gf(a, c) {
                return Ne(c) ? "password" === c.type || c.name && I(c.name.toLowerCase(), uk) || c.id && I(c.id.toLowerCase(), uk) : !1
            }

            function vk(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                wa(a, [b >> 8, b & 255])
            }

            function Ub(a, c) {
                wa(a, [c & 255])
            }

            function jb(a, c, b) {
                return -1 !== Mb(a)(b, Xr) ? (Ub(c, b), !1) : !0
            }

            function S(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) wa(a, [b & 127 | 128]), b >>= 7;
                wa(a, [b])
            }

            function Eg(a, c) {
                S(a, c.length);
                for (var b = 0; b < c.length; b += 1) S(a, c.charCodeAt(b))
            }

            function Fg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) vk(a, b.charCodeAt(d))
            }

            function Yr(a, c) {
                var b = [];
                if (jb(a, b, 27)) return [];
                S(b, c);
                return b
            }

            function Zr(a, c) {
                var b = La(c);
                if (!b) return c[Ya] = -1, null;
                var d = +c[Ya];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.sj) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = Le(a, c),
                    g = f && f[Ya] ? f[Ya] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = $r()[b];
                h || (e |= 2);
                var k = zj(a, c);
                k || (e |= 4);
                var l = Kf(a, c);
                (f = f ? Kf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                Bc[d].Ff = l[0] + "x" + l[1];
                Bc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (jb(a, f, 1)) return null;
                S(f, d);
                Ub(f, e);
                S(f, g);
                h ? Ub(f, h) : Fg(f, b);
                k && S(f, k);
                e & 8 || (S(f, l[0]), S(f, l[1]), S(f, l[2]), S(f, l[3]));
                e & 32 && Fg(f, c.id);
                Ub(f, 0);
                return f
            }

            function as(a, c) {
                var b = c[Ya];
                if (!b || 0 > b || !If(c) || !c.form || ni(a, c.form)) return [];
                var d = Cj(a, c.form);
                if (0 > d) return [];
                if (Ne(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        kc: 0,
                        wj: 0,
                        "datetime-local": 0,
                        email: 0,
                        Df: 0,
                        Oj: 0,
                        search: 0,
                        Tj: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Vj: 0,
                        password: 2,
                        Nj: 3,
                        uj: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        pj: 1,
                        qj: 5
                    };
                    var f = La(c);
                    e = Y(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name ===
                        c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (jb(a, g, 7)) return [];
                S(g, b);
                S(g, d);
                S(g, e);
                Eg(g, c.name || "");
                S(g, f);
                return g
            }

            function Ac(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !no(a, c, b); c = Le(a, c)) d.push(c);
                x(function(e) {
                    Bc.counter += 1;
                    var f = Bc.counter;
                    e[Ya] = f;
                    Bc[f] = {};
                    f = Zr(a, e);
                    e = as(a, e);
                    f && e && (wa(b, f), wa(b, e))
                }, bs(d));
                return b
            }

            function cs(a) {
                var c = a.na;
                if (!sd || c && !c.fromElement) return ki(a)
            }

            function ds(a) {
                var c = a.na;
                if (c && !c.toElement) return Jf(a)
            }

            function wk(a) {
                var c = Jc(a.na);
                if (c && qe(c)) {
                    var b =
                        ji(a, c),
                        d = b.concat;
                    var e = Ab(a.l),
                        f = [];
                    jb(a.l, f, 17) ? a = [] : (S(f, e), S(f, c[Ya]), a = f);
                    return d.call(b, a)
                }
            }

            function xk(a) {
                var c = a.l,
                    b = a.na.target;
                if (b && qe(b)) {
                    c = Ac(c, b);
                    var d = c.concat;
                    var e = Ab(a.l),
                        f = [];
                    jb(a.l, f, 18) ? a = [] : (S(f, e), S(f, b[Ya]), a = f);
                    return d.call(c, a)
                }
            }

            function yk(a) {
                var c = a.l,
                    b = Jc(a.na);
                if (!b || Gf(c, b) || td(c, b)) return [];
                if (If(b)) {
                    var d = J(c).C("isEU"),
                        e = Qc(c, b, d),
                        f = e.Xa;
                    d = e.rb;
                    e = e.ib;
                    if (Oe(b)) var g = b.checked;
                    else g = b.value, g = f ? G("", zk(g.split(""))) : g;
                    c = Ac(c, b);
                    f = c.concat;
                    var h = Ab(a.l);
                    d = d && !e;
                    e = [];
                    jb(a.l, e, 39) ? a = [] : (S(e, h), S(e, b[Ya]), Fg(e, String(g)), Ub(e, d ? 1 : 0), a = e);
                    return f.call(c, a)
                }
            }

            function Ye(a) {
                var c = a.l,
                    b = a.na,
                    d = Jc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = u(e, wa);
                d && qe(d) ? f(ji(a, d)) : f(Ac(c, d));
                var g = Yi(c, b);
                f = e.concat;
                a = Ab(a.l);
                var h = b.type,
                    k = [g.x, g.y];
                g = b.which;
                b = b.button;
                var l;
                var m = Me(c, d);
                var p = m[0];
                for (m = m[1]; d && (!p || !m);)
                    if (d = Le(c, d)) m = Me(c, d), p = m[0], m = m[1];
                d ? (p = d[Ya], !p || 0 > p ? c = [] : (m = (l = {}, l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch =
                    12, l)[h]) ? (l = [], d = jg(c, d), jb(c, l, m) ? c = [] : (S(l, a), S(l, p), S(l, Math.max(0, k[0] - d.left)), S(l, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Ub(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = l)) : c = []) : c = [];
                return f.call(e, c)
            }

            function es(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Wa(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Qc(b, c).Xa || td(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = Qc(b, d).Xa || td(b, d, !0), f += 1;
                if (e !== Gg) return Gg = e, d = d ? G("", zk(e.split(""))) : e, e = Ab(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], jb(a.l, c, 29) ? a = [] : (S(c, e), Eg(c, b), Eg(c, d), a = c), a
            }

            function fs(a) {
                return Ye(a).concat(es(a) || [])
            }

            function Ak(a) {
                return (a.shiftKey ?
                    2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function Bk(a) {
                var c = [];
                Hg || (Hg = !0, Gg && wa(c, Yr(a.l, Ab(a.l))), Qb(a.l, function() {
                    Hg = !1
                }, "fv.c"));
                return c
            }

            function Ck(a, c, b, d) {
                c = Jc(c);
                if (!c || Lf(a, c)) return [];
                var e = Qc(a, c),
                    f = e.rb,
                    g = e.ib;
                e = e.Xa;
                var h = J(a);
                if (!g && (f && h.C("isEU") || td(a, c))) a = [];
                else {
                    f = Ac(a, c);
                    g = f.concat;
                    var k = Ab(a);
                    h = [];
                    if (jb(a, h, 38)) a = [];
                    else {
                        S(h, k);
                        vk(h, b);
                        Ub(h, d);
                        a = c[Ya];
                        if (!a || 0 > a) a = 0;
                        S(h, a);
                        Ub(h, e ? 1 : 0);
                        a = h
                    }
                    a = g.call(f, a)
                }
                return a
            }

            function gs(a) {
                var c = a.l,
                    b = a.na,
                    d = b.keyCode,
                    e = Ak(b),
                    f = [],
                    g = u(f, wa);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Ck(c, b, d, e | 16)), Ig = !1, Qb(c, function() {
                    Ig = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Bk(a));
                return f
            }

            function hs(a) {
                var c = a.l;
                a = a.na;
                var b = [];
                Ig && !Jg && 0 !== a.which && (wa(b, Ck(c, a, a.charCode || a.keyCode, Ak(a))), Jg = !0, Qb(c, function() {
                    Jg = !1
                }, "fv.kp"));
                return b
            }

            function Dk(a) {
                var c = a.l,
                    b = Jc(a.na);
                if (!b || ni(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) Bj(e[f]) || wa(d, Ac(c, e[f]));
                    a = Ab(a.l);
                    e = Cj(c, b);
                    if (0 > e) c = [];
                    else {
                        f = b.elements;
                        var g = f.length;
                        b = [];
                        for (var h = 0; h < g; h += 1)
                            if (!Bj(f[h])) {
                                var k = f[h][Ya];
                                k && 0 < k && b.push(k)
                            }
                        f = [];
                        if (jb(c, f, 11)) c = [];
                        else {
                            S(f, a);
                            S(f, e);
                            S(f, b.length);
                            for (c = 0; c < b.length; c += 1) S(f, b[c]);
                            c = f
                        }
                    }
                    wa(d, c)
                }
                return d
            }

            function is(a) {
                var c = a.flush;
                a = Jc(a.na);
                "BODY" === La(a) && c()
            }

            function Gn(a, c) {
                var b,
                    d = Jc(c),
                    e = va.fc,
                    f = Vc(a);
                if (d && ic("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Da(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function Xl(a, c, b, d, e) {
                if (!b.length) return e;
                b = z(function(f) {
                    return D([a, c, d], f)
                }, b);
                return w.apply(void 0, b)(e)
            }
            var Xc = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "c4o2nplw0qd8wcw40uon4r1yvz",
                    host: "mc.yandex.ru"
                },
                Ag = [],
                bg = /\./g,
                Ek = ma(String.prototype.indexOf, "indexOf"),
                nb = Ek ? function(a, c) {
                    return Ek.call(a, c)
                } : Mr,
                Aa = pa(function(a, c) {
                    return a === c
                }),
                Sc = pa(function(a, c) {
                    a(c);
                    return c
                }),
                Ba = pa(mk),
                Wa = Aa(null),
                Y = Aa(void 0),
                Ue = ma(Array.from, "from"),
                Fk = ma(Function.prototype.bind, "bind"),
                H = Fk ? Jr(Fk) : Kr,
                Gk = ma(Array.prototype.reduce, "reduce"),
                zb = Gk ? function(a, c, b) {
                    return Gk.call(b, a, c)
                } : xg,
                N = zb,
                Kq = w,
                ze = w(R, ya),
                zg, mf = Mb(window),
                an = ab(mf),
                yg = Object.prototype.hasOwnProperty,
                J = v(Vc),
                V = ab(n),
                Qa = V("length"),
                gd = pa(D),
                js = pa(Ka),
                Hk = ma(Array.prototype.every, "every"),
                Ki = Hk ? function(a, c) {
                    return Hk.call(c, a)
                } : Hr,
                Ob = D([1, null], re),
                rb = D([1, 0], re),
                Eb = Boolean,
                Ik = ma(Array.prototype.filter, "filter"),
                ha = Ik ? function(a, c) {
                    return Ik.call(c, a)
                } : lk,
                Ea = u(Eb, ha),
                ks = pa(ha),
                Jk = ma(Array.prototype.find, "find"),
                ib = Jk ? function(a, c) {
                    return Jk.call(c, a)
                } : Gr,
                Kk = ma(Array.prototype.includes, "includes"),
                I = Kk ? function(a, c, b) {
                    return Kk.call(c, a, b)
                } : Fr,
                tc = ab(I),
                Lk = ma(Array.prototype.join, "join"),
                G = Lk ? function(a, c) {
                    return Lk.call(c, a)
                } :
                Er,
                xe = pa(G),
                Mk = v(function(a) {
                    var c = n(a, "navigator") || {};
                    a = n(c, "userAgent") || "";
                    c = n(c, "vendor") || "";
                    return {
                        tf: -1 < nb(c, "Apple"),
                        pg: a
                    }
                }),
                sb = v(V("navigator.userAgent")),
                wg = /Firefox\/([0-9]+)/i,
                Md = v(function(a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(wg);
                    wg.lastIndex = 0;
                    return !(!(c && "MozAppearance" in c) || ba(b)) || a
                }),
                Nk = ma(Array.isArray, "isArray"),
                M = Nk ? function(a) {
                    return Nk(a)
                } : Nr,
                Ok = ma(Array.prototype.map, "map"),
                Pk =
                Ok && Dr(window, Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? Ok.call(c, a) : []
                } : kk,
                z = Pk,
                x = Pk,
                Qk = ma(Array.prototype.flatMap, "flatMap"),
                wc = Qk ? function(a, c) {
                    return Qk.call(c, a)
                } : Cr,
                Vb = pa(z),
                mr = ab(z),
                Rk = ma(Array.prototype.some, "some"),
                Va = Rk ? function(a, c) {
                    return Rk.call(c, a)
                } : Br,
                Fe = v(Mb),
                Ed = V("0"),
                ls = pa(te),
                Sk = ma(Array.prototype.reverse, "reverse"),
                bs = Sk ? function(a) {
                    return Sk.call(a)
                } : Ar,
                Tk = ab(parseInt),
                Da = Tk(10),
                ue = Tk(2),
                Uk = ma(Object.keys, "keys"),
                Vk = ma(Object.entries, "entries"),
                ua = Vk ? zr(Vk) : hk,
                fa = Uk ? function(a) {
                    return Uk(a)
                } : ik,
                Wk = ma(Object.values, "values"),
                ms = w(hk, u(V("1"), kk)),
                ns = Wk ? function(a) {
                    return Wk(a)
                } : ms,
                A = Object.assign || yr,
                ii = pa(function(a, c) {
                    return A({}, a, c)
                }),
                je = v(w(V("String.fromCharCode"), u("fromCharCode", Fa), Hc)),
                Kg = v(w(sb, db(/ipad|iphone|ipod/i))),
                Qf = v(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                zd = v(function(a) {
                    a = Mk(a);
                    var c = a.pg;
                    return a.tf && !c.match("CriOS")
                }),
                os = db(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                ps = db(/; wv\)/),
                xd = v(function(a) {
                    a = sb(a);
                    return ps(a) || os(a)
                }),
                qs = /Chrome\/(\d+)\./,
                rs = v(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(qs)) && a.length ? 76 <= Da(a[1]) : !1
                }),
                se = v(function(a) {
                    var c = (sb(a) || "").toLowerCase();
                    a = Qf(a);
                    return gb(c, "android") && gb(c, "mobile") && /^android|linux armv/i.test(a)
                }),
                ss = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                ts = v(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (Y(c)) return null;
                    a = Fe(a)(c, ss);
                    return -1 === a ? c : "" + a
                }),
                kg = v(w(V("document.addEventListener"), Hc)),
                Xk = v(function(a) {
                    var c = n(a, "navigator") || {};
                    return N(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                Eh = v(function(a) {
                    var c = n(a, "navigator") || {};
                    a = Xk(a);
                    aa(a) || (a = "", c = n(c, "languages.0"), aa(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                qb = v(function(a) {
                    return (n(a, "top") || a) !== a
                }),
                us = v(V("top.contentWindow")),
                vs = v(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                ws = v(function(a) {
                    var c =
                        "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = n(b, "toString") ? "" + b.toString() : "";
                    b = -1 !== nb(b, "Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Va(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Va(u(n(a, "document"), n),
                        c) || b || d && Va(H(d.getAttribute, d), e))
                }),
                xs = v(function(a) {
                    return !!(Va(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(sb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                ys = v(function(a) {
                    return !(!n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer"))
                }),
                Pd = v(function(a) {
                    var c = sb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (Kg(a) || 10 < b[0] || 10 === b[0] &&
                        13 <= b[1]) && zd(a)
                }),
                xr = /Edg\/(\d+)\./,
                Je = v(function(a) {
                    return Pd(a) || vf(a, 68) || wf(a, 79)
                }),
                zs = Xc.construct,
                jc = Xc.host,
                Lg = kg(window),
                va = {
                    Ag: 24226447,
                    ug: 26302566,
                    Dg: 51533966,
                    nj: 65446441,
                    Sa: "https:",
                    fb: "1450",
                    fc: zs,
                    zg: Lg ? 512 : 2048,
                    xg: Lg ? 512 : 2048,
                    yg: Lg ? 100 : 400,
                    oj: 100,
                    Bg: "noindex"
                },
                Qd = [],
                K = v(function(a) {
                    return a.id + ":" + a.ba
                }),
                pc = {},
                $d = Aa("1"),
                As = setTimeout;
            Ia.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            Ia.prototype.then = function(a, c) {
                var b = new this.constructor(Or);
                pk(this, new Qr(a, c, b));
                return b
            };
            Ia.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            Ia.all = function(a) {
                return new Ia(function(c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            Ia.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === Ia ? a : new Ia(function(c) {
                    c(a)
                })
            };
            Ia.reject = function(a) {
                return new Ia(function(c, b) {
                    b(a)
                })
            };
            Ia.race = function(a) {
                return new Ia(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) Ia.resolve(a[d]).then(c, b)
                })
            };
            Ia.Oe = "function" === typeof setImmediate &&
                function(a) {
                    setImmediate(a)
                } || function(a) {
                    As(a, 0)
                };
            Ia.Eg = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var L = window.Promise,
                Bs = ma(L, "Promise"),
                Yk = ma(n(L, "resolve"), "resolve"),
                Zk = ma(n(L, "reject"), "reject"),
                $k = ma(n(L, "all"), "all");
            if (Bs && Yk && Zk && $k) {
                var Ze = function(a) {
                    return new Promise(a)
                };
                Ze.resolve = H(Yk, L);
                Ze.reject = H(Zk, L);
                Ze.all = H($k, L);
                L = Ze
            } else L = Ia;
            var gf = [],
                fd = [],
                X = [],
                Ua = [],
                Mg = [],
                Rd = [],
                tg = tc([26812653]),
                Cs = v(w(V("id"), tg), K),
                Zb = {
                    id: "id",
                    Le: "ut",
                    ba: "type",
                    Yd: "ldc",
                    Wa: "nck",
                    uc: "url",
                    qh: "referrer"
                },
                Ds = /^\d+$/,
                Yc = {
                    id: function(a) {
                        a = "" + (a || "0");
                        Ds.test(a) || (a = "0");
                        try {
                            var c = Da(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    ba: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    Wa: Eb,
                    Le: Eb
                };
            Zb.nd = "defer";
            Yc.nd = Eb;
            Zb.M = "params";
            Yc.M = function(a) {
                return ia(a) || M(a) ? a : null
            };
            Zb.Ke = "userParams";
            Zb.kg = "triggerEvent";
            Yc.kg = Eb;
            Zb.Yf = "sendTitle";
            Yc.Yf = function(a) {
                return !!a || Y(a)
            };
            Zb.Fe = "trackHash";
            Yc.Fe = Eb;
            Zb.jg = "trackLinks";
            Zb.ah = "enableAll";
            var Zd = N(function(a, c) {
                    var b =
                        c[0];
                    a[b] = {
                        ea: c[1],
                        Ma: Yc[b]
                    };
                    return a
                }, {}, ua(Zb)),
                vr = "hash host hostname href pathname port protocol search".split(" "),
                vg = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "),
                ek = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                De = v(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                Gi = v(function(a) {
                    a = U(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(ek));
                    return c
                }),
                al = w(U, V("protocol"), Aa("https:")),
                tr = v(function(a) {
                    return rs(a) && al(a) ? "SameSite=None;Secure;" :
                        ""
                }),
                qj = /^\s+|\s+$/g,
                dk = ma(String.prototype.trim, "trim"),
                $e = pa(function(a, c) {
                    return c.replace(a, "")
                }),
                Es = $e(/\s/g),
                he = $e(/\D/g),
                xh = $e(/\d/g),
                Se = ["metrika_enabled"],
                ug = [],
                Zj = ub("gsc", Xj),
                ur = /:\d+$/,
                Rr = v(function(a) {
                    var c = (U(a).host || "").split(".");
                    return 1 === c.length ? c[0] : N(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = G(".", c.slice(-e)), pi(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                Rc = v(jd),
                Qe = v(function(a) {
                    var c = Rc(a),
                        b = "1" === c.C("debug"),
                        d = -1 < kc(U(a).href, "_ym_debug=1") || -1 < kc(U(a).href, "_ym_debug=2"),
                        e = a._ym_debug;
                    !e &&
                        !d || b || (a = U(a), c.D("debug", "1", void 0, a.host));
                    return !!(b || e || d)
                }),
                sr = ub("debuggerEvents", Bd, !0),
                pr = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Sd, Na = function(a) {
                    return function(c, b) {
                        void 0 === b && (b = !1);
                        if (Sd) var d = new Sd(c);
                        else Fa("Error", a.Error) ? (Sd = a.Error, d = new a.Error(c)) : (Sd = rr, d = new Sd(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                qr = db(/^http./),
                or = db(/^err.kn/),
                Wj = [],
                nr = v(function(a) {
                    a = !(!a.addEventListener || !a.removeEventListener);
                    return {
                        Ti: a,
                        F: a ? "addEventListener" : "attachEvent",
                        ga: a ? "removeEventListener" : "detachEvent"
                    }
                }),
                Fs = v(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", F, b)
                    } catch (d) {}
                    return c
                }),
                Gs = pa(function(a, c) {
                    if (null !== c) return a ? A({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                la = v(function(a) {
                    var c = Fs(a),
                        b = Gs(c),
                        d = {};
                    return A(d, {
                        F: function(e, f, g, h) {
                            x(function(k) {
                                var l = b(h);
                                Vj(a, e, k, g, l, !1)
                            }, f);
                            return H(d.zb, d, e, f, g, h)
                        },
                        zb: function(e,
                            f, g, h) {
                            x(function(k) {
                                var l = b(h);
                                Vj(a, e, k, g, l, !0)
                            }, f)
                        }
                    })
                }),
                ja = v(cg),
                Rj = pa(function(a, c) {
                    for (var b = []; !Ld(c);) {
                        var d = ir(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                bl = pa(function(a, c) {
                    return Ba(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Ng = pa(function(a, c) {
                    return Ba(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Za(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                og = [],
                pg = !1,
                ng = !1,
                cl = pa(function(a, c) {
                    var b = c || {};
                    return {
                        l: u(b, R),
                        C: function(d, e) {
                            var f = b[d];
                            return Y(f) && !Y(e) ? e : f
                        },
                        D: function(d,
                            e) {
                            b[d] = e;
                            return this
                        },
                        Vb: function(d, e) {
                            return "" === e || ba(e) ? this : this.D(d, e)
                        },
                        Fa: u(b, a)
                    }
                }),
                Ha = cl(function(a) {
                    var c = "";
                    a = zb(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], ua(a));
                    c && a.push(c);
                    return G(":", a)
                }),
                Og, Ij = (Og = {}, Og.w = [
                    [function(a, c) {
                        return {
                            O: function(b, d) {
                                var e, f = b.J;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                "0" !== c.ba && (f["cnt-class"] = c.ba);
                                b.K || (b.K = Ha());
                                e = b.K;
                                var g = b.Y;
                                f = {
                                    ma: {
                                        za: "watch/" + c.id
                                    },
                                    Y: A(void 0 === g ? {} : g, {
                                        Cb: !!e.C("pv") && !e.C("ar") &&
                                            !e.C("wh")
                                    }),
                                    J: A(b.J || {}, f)
                                };
                                A(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], Og),
                Pg = u(Ij, Mj),
                lb = Kd("w"),
                Hj = ["webkitvisibilitychange", "visibilitychange"],
                sf = cl(function(a) {
                    a = ua(a);
                    return G("", z(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Wa(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                dl = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                kq = /^\s*(data|javascript):/i,
                aj = new RegExp(G("", ["\\.(" + G("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Ra, kj = (Ra = {}, Ra.hit = "h", Ra.params = "p", Ra.reachGoal = "g", Ra.userParams = "up",
                    Ra.trackHash = "th", Ra.accurateTrackBounce = "atb", Ra.notBounce = "nb", Ra.addFileExtension = "fe", Ra.extLink = "el", Ra.file = "fc", Ra.trackLinks = "tl", Ra.destruct = "d", Ra.setUserID = "ui", Ra.getClientID = "ci", Ra.clickmap = "cm", Ra.enableAll = "ea", Ra),
                Hs = v(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                Is = w(K, Hs, ya),
                fg = {
                    mc: function(a) {
                        a = Vc(a).C("mt", {});
                        a = ua(a);
                        return a.length ? N(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = J(a).C("cls", {
                                ec: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.ec,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.J;
                        return !a || a.nohit ? null : Is(c)
                    }
                },
                br = v(function(a) {
                    Fj(a, "_ymBRC", "1");
                    var c = "1" !== Ej(a, "_ymBRC");
                    c || Gj(a, "_ymBRC");
                    return c
                }),
                Ta = v(Dj),
                Zc = v(Dj, function(a, c, b) {
                    return "" + c + b
                }),
                Js = v(V("document.documentElement")),
                Ks = v(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                yb = v(w(V("document"), u("createElement", Gc))),
                oi = v(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ?
                        (a = ib(function(b) {
                            var d = c[b];
                            return !!d && Fa(b, d)
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                Ls = Aa("INPUT"),
                Ne = w(La, Ls),
                Ms = Aa("TEXTAREA"),
                Zq = w(La, Ms),
                Ns = Aa("SELECT"),
                $q = w(La, Ns),
                Oe = w(V("type"), db(/^(checkbox|radio)$/)),
                If = w(La, db(/^INPUT|SELECT|TEXTAREA$/)),
                qe = w(La, db(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Mf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                Yq = ["submit", "image", "hidden"],
                Tf = v(function() {
                    for (var a = 59, c = {},
                            b = 0; b < dl.length; b += 1) c[dl[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                yj = v(function(a) {
                    return {
                        zj: a,
                        jb: null,
                        tb: []
                    }
                }),
                wj = {},
                ig = {};
            wj.p = 500;
            var vj = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            ig.h = !0;
            ig.c = !0;
            var Ke = {
                    p: function(a, c, b) {
                        if (c && Aj(a, c) && c._ymp) return c._ymp;
                        a = rf(a, c, b);
                        c && (c._ymp = a);
                        return a
                    },
                    c: function(a, c, b) {
                        (a = $a(n(c, "textContent"))) && b && (b = b(c), b.length && Va(w(V("textContent"), $a, Aa(a)), b) && (a = ""));
                        Ne(c) && (a = $a(c.getAttribute && c.getAttribute("value") || a));
                        return a
                    }
                },
                $c, hg = "button," + G(",", z(function(a) {
                    return 'input[type="' +
                        a + '"]'
                }, ["button", "submit", "reset", "file"])) + ",a",
                Oi = u(hg, hb),
                Wq = ($c = {}, $c.A = "h", $c.BUTTON = "i", $c.DIV = "i", $c.INPUT = "ty", $c),
                el = /\/$/,
                uj = ub("r", function(a, c) {
                    var b = tj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Id = v(function() {
                    return {
                        Ea: {},
                        pending: {},
                        children: {}
                    }
                }),
                Qg = V("postMessage"),
                Os = B("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Id(a),
                        g = G(":", [c.meta.kc, c.meta.key]);
                    if (Qg(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.eg, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        T(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                Ps = B("s.fh",
                    function(a, c, b, d, e, f) {
                        var g = null,
                            h = null,
                            k = Id(a),
                            l = null;
                        try {
                            g = Tb(a, f.data), h = g.__yminfo, l = g.data
                        } catch (m) {
                            return
                        }
                        if (!ba(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ba(l) && (g = h.split(":"), 4 === g.length))
                            if (h = c.id, c = g[1], a = g[2], g = g[3], !M(l) && l.type && "0" === g && l.counterId) {
                                if (!l.toCounter || l.toCounter == h) {
                                    k = null;
                                    try {
                                        k = f.source
                                    } catch (m) {}!Wa(k) && Qg(k) && (f = d.aa(l.type, [f, l]), e = z(w(R, ii(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.eg, "*"))
                                }
                            } else g === "" + h && M(l) && ha(function(m) {
                                return !(!m.hid ||
                                    !m.counterId)
                            }, l).length === l.length && (b = k.pending[G(":", [c, a])]) && b.apply(null, [f].concat(l))
                    }),
                nd = v(function(a, c) {
                    var b, d = Gc("getElementsByTagName", n(a, "document")),
                        e = Id(a),
                        f = Qg(a),
                        g = pd(a),
                        h = la(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + Ec(a), b);
                    Je(a) && (f.duid = Jd(a, c));
                    Sq(a, g);
                    Tq(a);
                    b = Uq(a, f);
                    var k = D([a, u([], b)], Os);
                    x(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(p, q) {
                            g.aa("initToParent", [p, q])
                        })
                    }, d);
                    qb(a) &&
                        k(a.parent, {
                            type: "initToParent"
                        }, function(l, m) {
                            g.aa("parentConnect", [l, m])
                        });
                    h.F(a, ["message"], D([a, c, b, g, f], Ps));
                    return {
                        $: g,
                        Ea: e.Ea,
                        children: e.children,
                        ue: k
                    }
                }, w(eb, K)),
                od = v(function(a, c) {
                    if (!Je(a) || !qb(a)) return Jd(a, c);
                    var b = nd(a, c);
                    return b && b.Ea[c.id] ? b.Ea[c.id].info.duid || Jd(a, c) : Jd(a, c)
                }, function(a, c) {
                    return "{" + c.Yd + c.Wa
                }),
                Qs = v(w(ja, Ba(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                Rs = w(ja, Ba(function(a) {
                    a = new a.l.Date;
                    return G("", z(jr, [a.getFullYear(), a.getMonth() + 1, a.getDate(),
                        a.getHours(), a.getMinutes(), a.getSeconds()
                    ]))
                })),
                Ss = w(ja, Ba(gg)),
                fl = v(w(ja, Ba(function(a) {
                    return a.Mc[0]
                }))),
                Ts = v(function(a) {
                    a = J(a);
                    var c = a.C("counterNum", 0) + 1;
                    a.D("counterNum", c);
                    return c
                }, w(eb, K)),
                qa, Hd = (qa = {}, qa.vf = u(Xc.version, R), qa.nt = ts, qa.fu = function(a, c, b) {
                    var d = b.J;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(el, "");
                    b = (d["page-ref"] || "").replace(el, "");
                    d = d["page-url"];
                    a = U(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, qa.en = Ks, qa.la = Xk, qa.ut = function(a, c, b) {
                    var d =
                        b.N;
                    b = b.J;
                    d = d && d.Fc;
                    b && (Gi(a) || c.Le || d) && (b.ut = va.Bg);
                    return null
                }, qa.v = u(va.fb, R), qa.cn = Ts, qa.dp = function(a) {
                    var c = J(a),
                        b = c.C("bt", {});
                    if (Y(c.C("bt"))) {
                        var d = n(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) {}
                        c.D("bt", b);
                        b.p && b.p.then && b.p.then(C(a, "bi:dp.p", function(e) {
                            b.gj = n(e, "charging") && 0 === n(e, "chargingTime")
                        }))
                    }
                    return rb(b.gj)
                }, qa.ls = v(function(a, c) {
                    var b = Zc(a, c.id),
                        d = ja(a),
                        e = b.C("lsid");
                    return +e ? e : (d = Xa(a, 0, d(ea)), b.D("lsid", d), d)
                }, eb), qa.hid = Ec, qa.phid = function(a, c) {
                    if (!qb(a)) return null;
                    var b = nd(a, c);
                    if (!b) return null;
                    var d = fa(b.Ea);
                    return d.length ? b.Ea[d[0]].info.hid : null
                }, qa.z = Qs, qa.i = Rs, qa.et = Ss, qa.c = w(V("navigator.cookieEnabled"), Ob), qa.rn = w(R, Xa), qa.rqn = function(a, c, b) {
                    b = b.J;
                    if (!b || b.nohit) return null;
                    c = K(c);
                    a = Zc(a, c);
                    c = (a.C("reqNum", 0) || 0) + 1;
                    a.D("reqNum", c);
                    if (a.C("reqNum") === c) return c;
                    a.lc("reqNum");
                    return null
                }, qa.u = od, qa.w = function(a) {
                    a = Oc(a);
                    return a[0] + "x" + a[1]
                }, qa.s = function(a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return G("x", [a, b, c])
                    }
                    return null
                }, qa.sk = V("devicePixelRatio"), qa.ifr = w(qb, Ob), qa.j = w(vs, Ob), qa.sti = function(a) {
                    return qb(a) && us(a) ? "1" : null
                }, qa),
                Rq = v(function() {
                    return wa(fa(Hd), fa(fg))
                }),
                Qq = v(qc, K),
                rj = v(function() {
                    return {
                        bf: null,
                        sa: []
                    }
                }, K),
                Nq = /^[a-z][\w.+-]+:/i,
                Rg, Yb = [
                    [Pe, 1],
                    [Ie, 2],
                    [Nb(), 3],
                    [sj, 4]
                ],
                He = [],
                wb = u(Yb, Nj),
                Xb = (Rg = {}, Rg.h = Yb, Rg),
                Z = u(Xb, Mj);
            wb(oj, -100);
            var Iq = /[^a-z0-9.:-]/,
                Sg, Tg = {},
                gl = Ea([dg && [dg, 0], Bb && [Bb, 1],
                    [Cb, 2], Fd && [Fd, 3],
                    [Uc, 4]
                ]),
                $b = Ea([dg, Bb, Cb, Fd, Uc]),
                Ug = [Cb];
            Ug.unshift(Bb);
            Ug.push(Fd);
            var hl = Ea(Ug),
                ad = Ea([Uc]),
                Us = Ea([Bb, Cb]),
                il = Ea([Bb, Uc]),
                Vs = Ea([Bb, Cb, Fd, Uc]),
                sa = (Sg = {}, Sg.h = hl, Sg),
                Vg = v(function(a, c) {
                    var b = Tg["*"] ? Tg["*"] : c && Tg[c];
                    b || (b = c ? sa[c] || [] : $b);
                    b = N(function(d, e) {
                        var f = e(a);
                        if (f) {
                            var g = ib(w(Ed, Aa(e)), gl);
                            g && d.push([g[1], f])
                        }
                        return d
                    }, [], b);
                    b.length || Yd();
                    return b
                }, eb),
                Wg, Ws = H(L.reject, L, Pa()),
                ta = (Wg = {}, Wg.h = lb, Wg),
                oa = B("g.sen", function(a, c, b) {
                    var d = Vg(a, c);
                    b = b ? Mq(a, c, b) : [];
                    var e = ta[c],
                        f = e ? e(a, d, b) : lb(a, d, b);
                    return function() {
                        var g = Oa(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k =
                            h.Y;
                        h = A(h, {
                            Y: A(void 0 === k ? {} : k, {
                                ha: [c]
                            })
                        });
                        return f.apply(null, [h].concat(g))
                    }
                }, Ws),
                Aq = pa(function(a, c) {
                    if (!c[a]) {
                        var b, d = new L(function(e) {
                            b = e
                        });
                        c[a] = {
                            Mf: b,
                            promise: d,
                            Nf: !1
                        }
                    }
                    return c[a].promise
                }),
                lj = v(w(qc, Ba)),
                Xs = B("dc.init", function(a, c) {
                    return c && tg(ke(c.split(":")[0])) ? {
                        log: F,
                        warn: F,
                        error: F
                    } : zq(a, c)
                }),
                nc = v(Xs, eb),
                am = B("h.p", function(a, c) {
                    var b, d, e = oa(a, "h", c),
                        f = c.uc || "" + U(a).href,
                        g = c.qh || a.document.referrer,
                        h = {
                            K: Ha((b = {}, b.pv = 1, b)),
                            J: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            N: {}
                        };
                    h.N.M = c.M;
                    h.N.Ke =
                        c.Ke;
                    c.nd && h.J && (h.J.nohit = "1");
                    return e(h, c).then(function(k) {
                        var l;
                        k && (c.nd || mc(a, c, "h", (l = {}, l.id = c.id, l.url = f, l.ref = g, l), c.M)(), Qb(a, D([a, c, k], Bq)))
                    })["catch"](C(a, "h.g.s"))
                }),
                Xg = ["yandex_metrika_callback" + Xc.callbackPostfix, "yandex_metrika_callbacks" + Xc.callbackPostfix],
                Ys = B("cb.i", function(a) {
                    var c = Xg[0],
                        b = Xg[1];
                    if (O(a[c])) a[c]();
                    "object" === typeof a[b] && x(function(d, e) {
                        a[b][e] = null;
                        Xf(a, d)
                    }, a[b]);
                    x(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, Xg)
                }),
                wq = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
                jl = v(function(a) {
                    return !!n(a, "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob")
                }),
                yq = $e(/[^\d+()]/g),
                xq = db(/[a-z\u0430-\u044f\u0451,.]/gi),
                uq = ["yandex_cid", "yandex_public_id"],
                Zs = B("fpm", function(a, c) {
                    if (!al(a)) return F;
                    var b = K(c);
                    if (!jl(a)) return Jb(a, b, "ns"), F;
                    var d = Ja(a, c);
                    return d ? function(e) {
                        return (new L(function(f, g) {
                            return ia(e) ? fa(e).length ? f(hj(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, F)) : g(Pa("fpm.l")) : g(Pa("fpm.o"))
                        }))["catch"](C(a,
                            "fpm.en"))
                    } : F
                }),
                af = pa(function(a, c) {
                    var b = {};
                    $f(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                $s = B("c.c.cc", function(a) {
                    var c = J(a),
                        b = w(af(a), function(d) {
                            var e, f = (e = {}, e.clickmap = !!d.clickmap, e);
                            return A({}, d, f)
                        });
                    return C(a, "g.c.cc", w(H(c.C, c, "counters", {}), fa, Vb(b)))
                }),
                at = B("gt.c.rs", function(a, c) {
                    var b, d = K(c),
                        e = c.id,
                        f = c.ba,
                        g = c.Qg,
                        h = c.Fe,
                        k = D([a, d], sq);
                    Zf(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                fj = v(Bd),
                Dd = v(qc, K),
                bt = B("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d,
                            e, f, g = Oa(arguments),
                            h = rq(g);
                        if (!h) return null;
                        g = h.Wg;
                        var k = h.M;
                        h = h.$b;
                        if (!ia(k) && !M(k)) return null;
                        var l = oa(a, "1", c),
                            m = Dd(c).url,
                            p = !Cs(c),
                            q = "pa",
                            r = (d = {}, d.id = c.id, d);
                        d = k;
                        var t = "";
                        if (t = n(k, "__ym.user_id")) q = "pau", r.uid = t;
                        I("__ymu", fa(k)) && (q = "paup");
                        d.__ym && (d = A({}, k), d.__ym = N(function(y, E) {
                            var Q = n(k, "__ym." + E);
                            Q && (y[E] = Q);
                            return y
                        }, {}, Qd), fa(d.__ym).length || delete d.__ym, p = !!fa(d).length);
                        d = t ? void 0 : JSON.stringify(d);
                        d = mc(a, c, q, r, d);
                        l = l({
                            N: {
                                M: k
                            },
                            K: Ha((e = {}, e.pa = 1, e.ar = 1, e)),
                            J: (f = {}, f["page-url"] =
                                m || U(a).href, f)
                        }, c).then(p ? d : F);
                        return Tc(a, "p.s", l, h, g)
                    }, b
                }),
                ge = v(dj, w(eb, K)),
                ct = B("y.p", function(a, c) {
                    var b = dj(a, c);
                    if (b) {
                        var d = ce(a),
                            e = D([a, b, c], nq);
                        Gh(a, d, function(f) {
                            f.F(["params"], e)
                        });
                        b.$.F(["params"], w(V("1"), e))
                    }
                }),
                Sr = v(function(a) {
                    if (a = yb(a)) return a("a")
                }),
                kl = {
                    Dj: db(/[/&=?#]/)
                },
                Ae = B("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function(f, g, h, k) {
                        var l, m, p;
                        if (!f || kl[b] && kl[b](f)) return null;
                        var q = g,
                            r = h || F;
                        O(g) && (r = g, q = void 0, k = h);
                        var t = mc(a, c, "gr", (l = {},
                                l.id = c.id, l.goal = f, l), q),
                            y = "goal" === b;
                        g = oa(a, "g", c);
                        l = mq(a, c, f, b);
                        h = l[0];
                        l = l[1];
                        q = g({
                            N: {
                                M: q
                            },
                            K: Ha((m = {}, m.ar = 1, m)),
                            J: (p = {}, p["page-url"] = h, p["page-ref"] = l, p)
                        }, c).then(function() {
                            var E, Q;
                            y && t();
                            tb(a, (E = {}, E.counterKey = K(c), E.name = "event", E.data = (Q = {}, Q.schema = b, Q.name = f, Q), E));
                            d && d()
                        });
                        return Tc(a, "g.s", q, r, k)
                    }, e
                }),
                dt = B("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = Jd(a, c);
                        d && Xf(a, d, null, e);
                        return e
                    }, b
                }),
                rk, et = B("th.e", function(a, c) {
                    function b() {
                        g || (k = ob(a, "onhashchange") ?
                            la(a).F(a, ["hashchange"], h) : Tr(a, h))
                    }
                    var d, e = oa(a, "t", c),
                        f = Ge(a, K(c)),
                        g = !1,
                        h = C(a, "h.h.ch", H(Ur, null, a, c, e)),
                        k = F;
                    c.Fe && (b(), g = !0);
                    e = C(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                ft = pa(function(a, c) {
                    aa(c) ? a.push(c) : x(w(R, Ka("push", a)), c)
                }),
                Cd = ub("retryReqs", function(a) {
                    var c = Ta(a),
                        b = c.C("retryReqs", {}),
                        d = ja(a)(ea);
                    x(function(e) {
                        var f = e[0];
                        e = e[1];
                        (!e || !e.time || e.time + 864E5 < d) && delete b[f]
                    }, ua(b));
                    c.D("retryReqs", b);
                    return b
                }, !0),
                Td = w(kc,
                    Aa(0)),
                ll = ab(Td),
                gt = [ll("watch"), ll("clmap")],
                ht = B("g.r", function(a) {
                    var c = ja(a),
                        b = Cd(a),
                        d = c(ea),
                        e = Ec(a);
                    return zb(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && Va(Ba(k.resource), gt) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                            protocol: k.protocol,
                            host: k.host,
                            za: k.resource,
                            Di: k.postParams,
                            M: k.params,
                            Ig: k.browserInfo,
                            Bj: k.ghid,
                            time: k.time,
                            Sb: Da(h),
                            Tg: k.counterId,
                            ba: k.counterType
                        }, k.telemetry && (h.Ha = k.telemetry), f.push(h));
                        return f
                    }, [], ua(b))
                }),
                it = B("nb.p",
                    function(a, c) {
                        function b(E) {
                            l() || (E = "number" === typeof E ? E : 15E3, y = Vr(a, d(!1), E), m())
                        }

                        function d(E) {
                            return function(Q) {
                                var P, za, Ca;
                                void 0 === Q && (Q = (P = {}, P.ctx = {}, P.callback = F, P));
                                if (E || !r && !k.Qd) {
                                    r = !0;
                                    m();
                                    y && y();
                                    var ac = p(ea);
                                    P = (Da(k.C("lastHit")) || 0) < ac - 18E5;
                                    var Yg = .1 > Math.random();
                                    k.D("lastHit", ac);
                                    ac = Ha((za = {}, za.nb = 1, za.cl = t, za.ar = 1, za));
                                    za = Dd(c);
                                    za = {
                                        J: (Ca = {}, Ca["page-url"] = za.url || U(a).href, Ca),
                                        K: ac,
                                        N: {
                                            force: E
                                        }
                                    };
                                    Ca = nc(a, K(c)).warn;
                                    !Q.callback && Q.ctx && Ca("nbnc");
                                    (Ca = E || P || Yg) || (Ca = a.location.href,
                                        P = a.document.referrer, Ca = !(Ca && P ? bj(Ca) === bj(P) : !Ca && !P));
                                    if (Ca) return Ca = g(za, c), Tc(a, "l.o.l", Ca, Q.callback, Q.ctx)
                                }
                                return null
                            }
                        }
                        var e, f, g = oa(a, "n", c),
                            h = K(c),
                            k = Zc(a, c.id),
                            l = u(u(h, af(a)), w(ya, V("accurateTrackBounce"))),
                            m = u((e = {}, e.accurateTrackBounce = !0, e), Ge(a, h)),
                            p = ja(a),
                            q = p(ea),
                            r = !1,
                            t = 0,
                            y;
                        na(c, function(E) {
                            t = E.kh - q
                        });
                        c.Pe && b(c.Pe);
                        e = (f = {}, f.notBounce = d(!0), f.u = y, f);
                        e.accurateTrackBounce = b;
                        return e
                    }),
                fq = pa(ic)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                jt = B("clm.p", function(a, c) {
                    if (je(a)) return F;
                    var b = oa(a, "m", c),
                        d = K(c),
                        e = ja(a),
                        f = e(ea),
                        g = u(u(d, af(a)), w(ya, V("clickmap"))),
                        h, k = null;
                    d = C(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = J(a),
                                q = p.C("cls", {
                                    ec: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.D("cls", {
                                ec: q.ec + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = z(function(y) {
                                return ("" + y).toUpperCase()
                            }, p.ignoreTags || []);
                            Y(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: gq(a, l),
                                position: Yi(a, l),
                                button: hq(l),
                                time: e(ea)
                            };
                            p = U(a).href;
                            if (eq(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h
                                }
                                r =
                                    Me(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = jg(a, l.element);
                                q = ["rn", Xa(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", rf(a, l.element), "X", l.position.x, "Y", l.position.y];
                                q = G(":", q);
                                m && (q += ":wh:1");
                                dq(a, p, q, b, c);
                                k = l
                            }
                        }
                    });
                    return la(a).F(n(a, "document"), ["click"], d)
                }),
                kt = B("trigger.in", function(a, c) {
                    c.kg && Qb(a, D([a, "yacounter" + c.id + "inited"], ar), "t.i")
                }),
                lt = B("c.m.p", function(a, c) {
                    var b, d = K(c);
                    return b = {}, b.clickmap = u(Ge(a,
                        d), cq), b
                }),
                Li = u("form", Wb),
                Sp = u("form", hb),
                bq = v(w(eb, ab(na)(V("settings.form_goals"))), eb),
                mt = B("s.f.i", function(a, c) {
                    var b, d = [],
                        e = [],
                        f = la(a);
                    d.push(f.F(a, ["click"], C(a, "s.f.c", D([a, c, e], aq))));
                    d.push(f.F(a, ["submit"], C(a, "s.f.e", function(g) {
                        var h = n(g, "target");
                        g = n(g, "isTrusted");
                        Vi(!0, a, c, e, h, g)
                    })));
                    Wi(a, c, "fgi", (b = {}, b.id = c.id, b));
                    return D([ze, d], x)
                }),
                nt = B("s.f.i", function(a, c) {
                    return na(c, function(b) {
                        var d;
                        if (n(b, "settings.button_goals")) return b = la(a).F(a, ["click"], C(a, "c.t.c", w(D([a, c], ff(a,
                            c, "", $p))))), mc(a, c, "gbi", (d = {}, d.id = c.id, d))(), b
                    })
                }),
                bc, Ud, Zg, bd, Fb, Uf = (bc = {}, bc.transaction_id = "id", bc.item_brand = "brand", bc.index = "position", bc.item_variant = "variant", bc.value = "revenue", bc.item_category = "category", bc.item_list_name = "list", bc),
                lc = (Ud = {}, Ud.item_id = "id", Ud.item_name = "name", Ud.promotion_name = "coupon", Ud),
                Zp = (Zg = {}, Zg.promotion_name = "name", Zg),
                ml = (bd = {}, bd.promotion_name = "name", bd.promotion_id = "id", bd.item_id = "product_id", bd.item_name = "product_name", bd),
                Wp = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
                Xp = (Fb = {}, Fb.view_item = {
                    event: "detail",
                    wa: lc,
                    Ia: "products"
                }, Fb.add_to_cart = {
                    event: "add",
                    wa: lc,
                    Ia: "products"
                }, Fb.remove_from_cart = {
                    event: "remove",
                    wa: lc,
                    Ia: "products"
                }, Fb.begin_checkout = {
                    event: "checkout",
                    wa: lc,
                    Ia: "products"
                }, Fb.purchase = {
                    event: "purchase",
                    wa: lc,
                    Ia: "products"
                }, Fb.view_item_list = {
                    event: "impressions",
                    wa: lc
                }, Fb.select_item = {
                    event: "click",
                    Ia: "products",
                    wa: lc
                }, Fb.view_promotion = {
                    event: "promoView",
                    Ia: "promotions",
                    wa: ml
                }, Fb.select_promotion = {
                    event: "promoClick",
                    Ia: "promotions",
                    wa: ml
                }, Fb),
                Ui =
                B("dl.w", function(a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = M(g) && Ee(a, g, b)) || (f = T(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return ka(a, f)
                    }
                }),
                ot = B("p.e", function(a, c) {
                    var b = Ja(a, c);
                    if (b) {
                        var d = J(a);
                        b = b.params;
                        var e = C(a, "h.ee", D([a, K(c), b], Up));
                        return c.ud ? (d.D("ecs", 0), Ti(a, c.ud, e)) : na(c, function(f) {
                            if ((f = n(f, "settings.ecommerce")) && aa(f)) return d.D("ecs", 1), Ti(a, f, e)
                        })
                    }
                }),
                nl = v(function(a) {
                    a = U(a);
                    a = ck(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang ||
                        "ru";
                    return a
                }),
                Qi = w(nl, V("_ym_status-check"), Da),
                pt = w(nl, V("_ym_lang")),
                qt = db(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                rt = ["form", "button", "status"],
                st = B("cs.init", function(a, c) {
                    var b, d = Qi(a);
                    if (d && c.id === d && "0" === c.ba) {
                        var e = (b = {}, b.lang = pt(a), b.fileId = "status", b);
                        b = e.lang;
                        b = void 0 === b ? "" : b;
                        var f = e.appVersion;
                        f = void 0 === f ? "" : f;
                        var g = e.fileId;
                        g = void 0 === g ? "" : g;
                        e =
                            e.beta;
                        e = void 0 === e ? !1 : e;
                        f = G(".", ha(pa(Sb)(a), z(w(R, Da), f.split("."))));
                        I(g, rt) && I(b, ["ru", "en", "tr"]) ? (b = (e ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (f ? "/" + f : "") + "/form-selector/" + (g + "_" + b + ".js"), b = qt(b) ? b : "") : b = "";
                        T(a, D([a, b, "" + d], Rp), 0, "cs")
                    }
                }),
                tt = B("suid.int", function(a, c) {
                    var b;
                    return b = {}, b.setUserID = function(d, e, f) {
                        if (aa(d) || Sb(a, d)) {
                            var g = Ja(a, c);
                            d = me(["__ym", "user_id", d]);
                            g.params(d, e || F, f)
                        } else nc(a, K(c)).error("wuid")
                    }, b
                }),
                ut = B("up.int", function(a,
                    c) {
                    var b;
                    return b = {}, b.userParams = C(a, "up.c", function(d, e, f) {
                        var g, h = Ja(a, c),
                            k = nc(a, K(c)).warn;
                        h ? ia(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || F, f)) : k("wup") : k("nci")
                    }), b
                }),
                vt = /[\*\.\?\(\)]/g,
                wt = v(function(a, c, b) {
                    var d;
                    try {
                        var e = b.replace("\\s", " ").replace(vt, "");
                        nc(a, "").warn("nnw", (d = {}, d.name = e, d))
                    } catch (f) {}
                }, eb),
                xt = B("r.nn", function(a) {
                    Qe(a) && Ee(a, Ag, function(c) {
                        c.ya.F(function(b) {
                            wt(a, b[1], b[0]);
                            Ag.splice(100)
                        })
                    })
                }),
                yt = B("e.a.p", function(a, c) {
                    var b, d = Ja(a, c);
                    d = D([w(R, Ba(!0)), Ea(z(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], z);
                    c.ah && d();
                    return b = {}, b.enableAll = d, b
                }),
                zt = v(qc, K),
                At = B("fpi", function(a) {
                    var c = yd(a);
                    if (c && !a.document.hidden) {
                        var b = J(a).Ga;
                        b("fpe", 1);
                        var d = la(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function() {
                            a.document.hidden && (b("fht", c.now()), d())
                        })
                    }
                }),
                Bt = v(function(a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = Ve("log", c) ? H(c, a) : F;
                    var b = n(a, "warn");
                    b = Ve("warn", b) ? H(b, a) : c;
                    var d = n(a, "error");
                    a = Ve("error", d) ? H(d, a) : c;
                    return {
                        log: c,
                        error: a,
                        warn: b
                    }
                }),
                Ct = u("add", ye),
                Dt = u("remove", ye),
                Et = u("detail", ye),
                Ft = u("purchase", ye),
                Gt = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                pf = v(function(a) {
                    var c = Mk(a);
                    a = c.pg;
                    if (!c.tf) return !1;
                    c = Ka("indexOf", a);
                    c = Va(w(c, Aa(-1), Hc), Gt);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                dn = v(function(a) {
                    var c = sb(a);
                    return c ? gb(c, "YangoEats") || xd(a) : !1
                }),
                Pp =
                /([0-9\\.]+) Safari/,
                Ht = /\sYptp\/\d\.(\d+)\s/,
                ol = v(function(a) {
                    var c;
                    a: {
                        if ((c = sb(a)) && (c = Ht.exec(c)) && 1 < c.length) {
                            c = Da(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || wf(a, 79) ? !1 : !Pd(a) || pf(a)
                }),
                pl = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                It = v(function(a) {
                    a = yb(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = H(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                ql = ma(String.prototype.repeat, "repeat"),
                fi = ql ? function(a, c) {
                    return ql.call(a, c)
                } : Mp,
                $h = u(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = fi(c, b);
                    return a ? c + d : d + c
                }),
                We = [2277735313, 289559509],
                Xe = [1291169091,
                    658871167
                ],
                Jt = B("p.cd", function(a) {
                    if (se(a) || Kg(a)) {
                        var c = Ta(a);
                        if (ba(c.C("jn"))) {
                            c.D("jn", !1);
                            var b = a.chrome || zd(a) ? function() {} : /./;
                            a = Bt(a);
                            b.toString = function() {
                                c.D("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            a.log("%c%s", "color: inherit", b)
                        }
                    }
                }),
                Kt = v(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Qa(a) && Va(w(V("name"), db(/Chrome PDF Viewer/)), a))
                }),
                Gb = pa(function(a, c) {
                    return J(c).C(a, null)
                }),
                Jp = {
                    "*": "+",
                    "-": "/",
                    rj: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                Lt = v(function(a) {
                    return O(n(a, "yandex.getSiteUid")) ?
                        a.yandex.getSiteUid() : null
                }),
                Mt = v(u("panoramaId", ve)),
                Nt = v(function(a) {
                    return ve("pubcid.org", a) || ve("_pubCommonId", a)
                }),
                Ot = v(u("_sharedid", ve)),
                Pt = v(function(a, c) {
                    if (c.Wa) return null;
                    var b = jd(a, "").C("_ga");
                    return b && rd(we(b))
                }, w(eb, K)),
                Fp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                xb, Ep = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd",
                        "domContentLoadedEventStart"
                    ],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                Ii = (xb = {}, xb.responseEnd = 1, xb.domInteractive = 1, xb.domContentLoadedEventStart = 1, xb.domContentLoadedEventEnd = 1, xb.domComplete = 1, xb.loadEventStart = 1, xb.loadEventEnd = 1, xb.unloadEventStart = 1, xb.unloadEventEnd = 1, xb.secureConnectionStart = 1, xb),
                Hp = v(Bd),
                Bp = v(qc),
                Cp = v(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (O(c) && !se(a)) return (new L(H(c, a, 0, 0))).then(function() {
                        var d =
                            n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](u(!0, R));
                    if (Md(a)) return c = n(a, "navigator.serviceWorker"), L.resolve(Y(c));
                    c = n(a, "openDatabase");
                    if (zd(a) && O(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return L.resolve(b)
                    }
                    return L.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                Qt = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                Rt = v(function(a, c) {
                    var b = Rc(a),
                        d = U(a).search.match(Qt);
                    return d && 2 <= d.length ?
                        (d = d[2], c.Wa || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                }),
                op = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                pp = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Hi = {
                    J: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                lp = {
                    gg: 60,
                    error: 15
                },
                kp = {
                    gg: 5,
                    error: 1
                },
                Fi = {
                    id: 42822899,
                    ba: "0"
                },
                St = B("pa.plgn", function(a, c) {
                    var b = ge(a, c);
                    b && b.$.F(["pluginInfo"], C(a, "c.plgn", function() {
                        var d = J(a);
                        d.D("cmc", d.C("cmc", 0) + 1);
                        return fk(c)
                    }))
                }),
                Pb, mb, Xm = (Pb = {}, Pb.am = "com.am", Pb.tr = "com.tr", Pb.ge = "com.ge", Pb.il = "co.il", Pb["\u0440\u0444"] = "ru", Pb["xn--p1ai"] = "ru", Pb["\u0431\u0435\u043b"] = "by", Pb["xn--90ais"] = "by", Pb),
                rl = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                Ym = (mb = {}, mb.ka = "ge", mb.ro = "md", mb.tg = "tj", mb.tk = "tm", mb.et = "ee", mb.hy = "com.am", mb.he = "co.li", mb.ky = "kg", mb.be = "by", mb.tr = "com.tr", mb.kk = "kz", mb),
                sl = /^https?:\/\//,
                Tt = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    849340123: 1,
                    3735661796: 1,
                    3082499531: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                    3015043526: 1
                },
                tl = v(function() {
                    return N(function(a, c) {
                        var b = gc(c + "/tag.js");
                        a[b] = 1;
                        return a
                    }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                Ut = v(function(a) {
                    a = yd(a);
                    if (!a || !O(a.getEntriesByType)) return null;
                    a = a.getEntriesByType("resource");
                    var c = tl();
                    return (a = ib(function(b) {
                        b = b.name.replace(sl, "").split("?")[0];
                        b = gc(b);
                        return c[b]
                    }, a)) ? rb(a.transferSize) : null
                }),
                xp = "ar:1:pv:1:v:" + va.fb + ":vf:" + Xc.version,
                yp = va.Sa + "//" + jc + "/watch/" + va.ug,
                ul = {},
                Vt = B("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                        var g, h;
                        if (aa(d) && !(0 >= d.length)) {
                            var k = oa(a, "e", c),
                                l = Dd(c).url;
                            d = k({
                                K: Ha((g = {}, g.ex = 1, g.ar = 1, g)),
                                J: (h = {}, h["page-url"] = l || U(a).href, h.exp = d, h)
                            }, c);
                            return Tc(a, "exps.s", d, e || F, f)
                        }
                    }, b
                }),
                qf = [],
                Wt = B("p.fh", function(a, c) {
                    var b,
                        d;
                    void 0 === c && (c = !0);
                    var e = Ta(a),
                        f = ja(a),
                        g = e.C("wasSynced"),
                        h = {
                            id: 3,
                            ba: "0"
                        };
                    return c && g && g.time + 864E5 > f(ea) ? L.resolve(g) : oa(a, "f", h)({
                        K: Ha((b = {}, b.pv = 1, b)),
                        J: (d = {}, d["page-url"] = U(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(ea), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.D("wasSynced", k);
                        return k
                    })["catch"](C(a, "f.h"))
                }),
                Xt = pa(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Zd.D("ymoo" + a.qa, a.ig(pb)), a.od && a.od.destruct && a.od.destruct())
                }),
                md = w(V("settings.pcs"), Aa("1")),
                vl = jc.split("."),
                Yt = vl.pop(),
                wl = G(".", vl),
                Wm = v(function(a) {
                    a = U(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                Dh = v(function(a) {
                    return -1 !== U(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                Zt = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech|white-label\.yango-tech\.com|al-sadhan\.com|spar\.sa)$/,
                fe = v(function(a) {
                    a = U(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Zt));
                    return c
                }),
                $t = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                rp = v(function(a) {
                    a = U(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search($t));
                    return c
                }),
                ph = va.Sa + "//" + jc + "/metrika",
                oe = ph + "/metrika_match.html",
                bf, vp = (bf = {}, bf.s = "p", bf["8"] = "i", bf),
                sp = ub("csp", function(a, c) {
                    return oa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                $g = "et w v z i u vf".split(" "),
                xl = Kd("wv"),
                au = Kd("pub"),
                ti = function() {
                    function a(c, b) {
                        this.l = c;
                        this.type = b
                    }
                    a.isEnabled = function(c) {
                        return !!c.JSON
                    };
                    a.prototype.Fa = function(c) {
                        return Df(Lb(this.l, c))
                    };
                    a.prototype.wb = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = Lb(this.l, c.data));
                        return b
                    };
                    a.prototype.mb = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.xe = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    return a
                }(),
                fp = v(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] =
                            e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return gp;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                bp = Ci(!1),
                ap = Ci(!0),
                ca, Kc, yl = (ca = {}, ca.mousemove = 0, ca.mouseup = 1, ca.mousedown = 2, ca.click = 3, ca.scroll = 4, ca.windowblur = 5, ca.windowfocus = 6, ca.focus = 7, ca.blur = 8, ca.eof = 9, ca.selection = 10, ca.change = 11, ca.input = 12, ca.touchmove = 13, ca.touchstart =
                    14, ca.touchend = 15, ca.touchcancel = 16, ca.touchforcechange = 17, ca.zoom = 18, ca.resize = 19, ca.keystroke = 20, ca.deviceRotation = 21, ca.fatalError = 22, ca.hashchange = 23, ca.stylechange = 24, ca.articleInfo = 25, ca.publishersHeader = 26, ca.pageData = 27, ca.mutationAdd = 28, ca.mutationRemove = 29, ca.mutationTextChange = 30, ca.mutationAttributesChange = 31, ca),
                zl = (Kc = {}, Kc.page = 0, Kc.event = 1, Kc.mutation = 2, Kc.publishers = 3, Kc.activity = 4, Kc),
                si = function() {
                    function a(c, b) {
                        var d, e, f = this;
                        this.isSync = !1;
                        this.Hb = [];
                        this.dh = (d = {}, d.ad = "mutationAdd",
                            d.re = "mutationRemove", d.tc = "mutationTextChange", d.ac = "mutationAttributesChange", d.page = "pageData", d);
                        this.Yg = (e = {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange = "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent",
                            e.click = "mouseEvent", e.focus = "focusEvent", e.blur = "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "styleChangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e);
                        this.yh = function(g) {
                            var h = g.type;
                            return g.event || "publishersHeader" !== h && "articleInfo" !== h ? {
                                type: zl[h],
                                event: yl[f.dh[g.event] || g.event]
                            } : {
                                type: zl.publishers,
                                event: yl[h]
                            }
                        };
                        this.Cf = function(g) {
                            var h = !Y(g.partNum),
                                k = f.yh(g);
                            k = {
                                stamp: g.stamp,
                                type: k.type,
                                event: k.event,
                                frameId: g.frameId,
                                chunk: h ? g.data : void 0,
                                partNum: g.partNum,
                                end: g.end
                            };
                            !h && g.data && (h = f.Yg[g.event] || g.event || g.type) && (k[h] = g.data);
                            return k
                        };
                        this.l = c;
                        this.type = b
                    }
                    a.prototype.Fa = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = fc(c, this.Cf),
                            f = this.isSync || b ? Infinity : 10;
                        e = kd(this.l, e, f);
                        var g = [e];
                        this.Hb.push(e);
                        return e(Ng(function(h) {
                            h = vi(d.l, Ro, {
                                Gi: h
                            });
                            h = kd(d.l, h, f, qg);
                            g.push(h);
                            d.Hb.push(h);
                            return h
                        }))(Ng(function(h) {
                            h = ui(d.l, h.slice(-4));
                            h = kd(d.l, h, f, qg);
                            g.push(h);
                            d.Hb.push(h);
                            return h
                        }))(bl(function(h) {
                            h = h[h.length - 1];
                            x(function(k) {
                                k = Fe(d.l)(k, d.Hb);
                                d.Hb.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.wb = function(c) {
                        return vi(this.l, wi, this.Cf(c))(rg(F))
                    };
                    a.prototype.mb = function(c) {
                        return c[0]
                    };
                    a.prototype.xe = function(c, b) {
                        for (var d = ui(this.l, c)(rg(F)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    a.isEnabled = function(c) {
                        var b = Qe(c),
                            d = !1;
                        try {
                            d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size
                        } catch (e) {}
                        return !b &&
                            d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice"))
                    };
                    return a
                }(),
                Al = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                bu = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                cu = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.Cc = !1;
                        this.meta = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.involvedTime = this.Af = 0;
                        this.ae = this.Hf = "";
                        this.fa = [];
                        this.ve = this.Qa = 0;
                        this.Ab = {
                            h: 0,
                            w: 0
                        };
                        this.buffer = [];
                        this.vg = bu;
                        this.flush = function() {
                            g.ve = T(g.l, g.flush, 2500);
                            var h = g.Fd();
                            if (g.buffer.length || h) {
                                var k = Te(g.buffer);
                                h && k.push(h);
                                g.Hf = g.ae;
                                g.ja.Fa(k)(Za(C(g.l, "p.b.st"), function(l) {
                                    l && g.Ub(l)
                                }))
                            }
                        };
                        this.Ub = e;
                        this.ja = d;
                        this.Zb = H(this.Zb, this);
                        this.Fd = H(this.Fd, this);
                        this.flush = H(this.flush, this);
                        this.l = c;
                        this.qa = f;
                        this.Sc = b;
                        this.Vd = "pai" + b.id;
                        this.Lb();
                        this.Xe = la(this.l);
                        this.time = ja(this.l);
                        this.ng();
                        this.Id = J(this.l);
                        this.Je = null
                    }
                    a.prototype.start = function() {
                        this.ve = T(this.l, this.flush, 2500);
                        if (!this.Cc) {
                            this.Ri();
                            var c = this.Id.C(this.Vd, []),
                                b = !c.length;
                            c.push(H(this.ei, this));
                            this.Id.Ga(this.Vd, c);
                            b && this.Qf();
                            this.Je = la(this.l).F(this.l, ["click"], H(this.Pi, this));
                            this.Zb({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.dj();
                        this.Cc = !0;
                        this.flush();
                        ka(this.l, this.ve)
                    };
                    a.prototype.xf = function(c) {
                        return Wb("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.Qf = function() {
                        var c = this;
                        C(this.l, "p.ic" + this.Sc.id, function() {
                            if (!c.Cc) {
                                var b = c.Id.C(c.Vd),
                                    d = c.Sc.jh();
                                x(function(e) {
                                    var f = z(function(g) {
                                        return A({},
                                            g)
                                    }, d);
                                    O(e) && e(f)
                                }, b);
                                c.Qa = T(c.l, H(c.Qf, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.ei = function(c) {
                        this.Cc || (this.ej(c), this.fj(), this.Mg())
                    };
                    a.prototype.Rg = function(c, b) {
                        return (c.se || 0) <= (b.se || 0) ? b : c
                    };
                    a.prototype.Pi = function(c) {
                        if (this.fa.length) {
                            c = $i(c);
                            var b = U(this.l).hostname,
                                d;
                            if (d = c) d = De(c.hostname) === De(b);
                            d && (c = N(this.Rg, this.fa[0], this.fa).id, b = Ec(this.l), Zc(this.l, this.qa.split(":")[0]).D("pai", c + "-" + b))
                        }
                    };
                    a.prototype.Zb = function(c) {
                        var b = this;
                        C(this.l, "p.ec." + this.Sc.id, function() {
                            var d, e;
                            try {
                                var f =
                                    c.type;
                                var g = c.target
                            } catch (p) {
                                return
                            }
                            var h = "page" === f;
                            if ("scroll" === f || h) {
                                var k = [b.l, b.l.document, b.l.document.documentElement, Ic(b.l)];
                                I(g, k) && b.Lb()
                            }("resize" === f || h) && b.ng();
                            f = b.time(ea);
                            var l = Math.min(f - b.Af, 5E3);
                            b.involvedTime += Math.round(l);
                            b.Af = f;
                            if (b.meta && b.scroll && b.Ab) {
                                var m = b.Ab.h * b.Ab.w;
                                b.fa = z(function(p) {
                                    var q = A({}, p),
                                        r = b.meta[q.id],
                                        t = Nc(p.Gb);
                                    if (!r || b.xf(q.element) || !t) return q;
                                    p = b.l.Math;
                                    r = p.max((b.scroll.y + b.Ab.h - r.y) / r.height, 0);
                                    var y = t.height * t.width;
                                    t = Bh(b.l, t, b.Ab);
                                    q.se = t / m;
                                    q.visibility = t / y;
                                    if (.9 <= q.visibility || .1 <= q.se) q.involvedTime += l;
                                    q.maxScrolled = p.round(1E4 * r) / 1E4;
                                    return q
                                }, b.fa);
                                tb(b.l, (d = {}, d.name = "publishers", d.counterKey = b.qa, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = z(function(p) {
                                    var q;
                                    return A((q = {}, q.contentElement = p.Gb, q), p)
                                }, b.fa), e), d))
                            }
                        })()
                    };
                    a.prototype.ej = function(c) {
                        var b = z(function(d) {
                            return d.id
                        }, this.fa);
                        this.fa = this.fa.concat(ha(function(d) {
                            return !I(d.id, b)
                        }, c))
                    };
                    a.prototype.ng = function() {
                        var c = be(this.l) || Oc(this.l);
                        this.Ab = {
                            w: c[0],
                            h: c[1]
                        }
                    };
                    a.prototype.fj = function() {
                        var c = this;
                        C(this.l, "p.um." + this.Sc.id, function() {
                            var b = [];
                            c.Lb();
                            c.meta = zb(function(d, e) {
                                var f;
                                if (c.xf(e.element)) b.push(e), delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.Gb && (f = Nc(e.Gb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.fa);
                            x(function(d) {
                                d = Fe(c.l)(d, c.fa);
                                c.fa.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.Fd = function() {
                        var c, b, d = z(u(this.meta, n), fa(this.meta));
                        return d.length && (this.ae = Lb(this.l, d), this.Hf !== this.ae) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
                    };
                    a.prototype.Mg = function() {
                        var c = this;
                        if (this.fa.length) {
                            var b = z(function(d) {
                                var e, f = N(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.vg);
                                d.ag = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data =
                                    f, e
                            }, ha(function(d) {
                                return !d.ag
                            }, this.fa));
                            b.length && (this.buffer = this.buffer.concat(b), Jb(this.l, this.qa, ["pdf", b]))
                        }
                    };
                    a.prototype.Ri = function() {
                        this.Xe.F(this.l, Al, this.Zb)
                    };
                    a.prototype.dj = function() {
                        this.Je && this.Je();
                        this.Xe.zb(this.l, Al, this.Zb)
                    };
                    a.prototype.Lb = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                Vd, ah = (Vd = {}, Vd[1] = 500, Vd[2] = 500, Vd[3] = 0, Vd),
                du = ["topics",
                    "rubric", "authors"
                ],
                bh = function() {
                    function a(c, b) {
                        var d, e = this;
                        this.id = "a";
                        this.Pd = !1;
                        this.Ib = {};
                        this.vb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Ef: ["article"]
                        };
                        this.He = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.$e = v(function(f, g, h) {
                            var k;
                            Jb(e.l, e.qa, "pfi", (k = {}, k.field = f, k.itemField = g, k.value = h, k))
                        }, function(f, g, h) {
                            return "" + f + g + h
                        });
                        this.hj = function(f) {
                            du.forEach(function(g) {
                                f[g] && (f[g] = f[g].reduce(function(h, k) {
                                    var l = k.name,
                                        m = k.position;
                                    if (!l) return e.$e(g,
                                        "name", l), h;
                                    if ("string" === typeof m) {
                                        l = ke(m);
                                        if (null === l || e.l.isNaN(l)) return e.$e(g, "position", m), h;
                                        k.position = l
                                    }
                                    h.push(k);
                                    return h
                                }, []))
                            });
                            return f
                        };
                        this.Sg = v(function(f, g) {
                            var h;
                            Jb(e.l, e.qa, ["pcs", g], (h = {}, h.chars = g.chars, h.limit = ah[g.type], h))
                        });
                        this.l = c;
                        this.root = xc(c);
                        this.qa = b
                    }
                    a.prototype.Ka = function(c) {
                        return c.element
                    };
                    a.prototype.hf = function(c, b) {
                        var d = this,
                            e;
                        C(this.l, "P.s." + b, function() {
                            e = d.Ib[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.Ei = function(c) {
                        var b = A({}, c);
                        this.Pd && !b.id && I(c.type, [3,
                            2
                        ]) && (c = G(", ", z(V("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.Hh(b.Gb));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Fh());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.Ca = function(c) {
                        var b = this,
                            d = {},
                            e = this.Ka(c);
                        if (!e) return null;
                        d.type = c.type;
                        x(function(g) {
                            d[g] = b.hf(c, g)
                        }, fa(this.Ib));
                        var f = ja(this.l);
                        d.stamp = f(Tj);
                        d.element = c.element;
                        d.Gb = e;
                        d = this.hj(this.Ei(d));
                        d.id = d.id ?
                            gc(d.id) : 1;
                        d.update = function(g) {
                            return b.Ka(c) ? b.hf(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.Hh = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = bb(ec("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.Fh = function() {
                        var c = ec('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.nf = function() {
                        return 1
                    };
                    a.prototype.sc = function() {
                        return []
                    };
                    a.prototype.jh = function() {
                        var c = this,
                            b = this.sc(),
                            d = 1;
                        return zb(function(e, f) {
                            var g = c.Ca({
                                element: f,
                                type: c.nf(f)
                            }) || [];
                            M(g) || (g = [g]);
                            g = zb(function(h, k) {
                                var l = h.values,
                                    m = h.qf;
                                k && k.chars >
                                    ah[k.type] && !I(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= ah[k.type] && c.Sg(k.id, k);
                                return {
                                    values: l,
                                    qf: m
                                }
                            }, {
                                values: [],
                                qf: z(V("id"), e)
                            }, g).values;
                            return e.concat(z(function(h) {
                                var k;
                                h = A((k = {
                                    index: d,
                                    ag: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                Bl = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Pd = !0;
                        d.Te = G(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Ib =
                            (b = {}, b.id = function(e) {
                                var f = e.data["@id"];
                                e = e.data.mainEntity || e.data.mainEntityOfPage;
                                !f && ia(e) && (f = e["@id"]);
                                return f
                            }, b.chars = function(e) {
                                var f = e.data;
                                return aa(f.text) ? f.text.length : Kb(this.Ka(e)).length
                            }, b.authors = function(e) {
                                e = e.data;
                                var f = [];
                                f = f.concat(this.rc(e, "author"));
                                f = f.concat(this.rc(e.mainEntity, "author"));
                                return f.concat(this.rc(e.mainEntityOfPage, "author"))
                            }, b.pageTitle = function(e) {
                                var f = e.data,
                                    g = f.headline || "";
                                f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                                "" === g && (f.name ?
                                    g = f.name : f.itemReviewed && (g = f.itemReviewed));
                                3 === e.type && ia(f.parentItem) && (g = f.parentItem.text);
                                return g
                            }, b.updateDate = function(e) {
                                return e.data.dateModified || ""
                            }, b.publicationDate = function(e) {
                                return e.data.datePublished || ""
                            }, b.pageUrlCanonical = function(e) {
                                return e.data.url
                            }, b.topics = function(e) {
                                return this.rc(e.data, "about", ["name", "alternateName"])
                            }, b.rubric = function(e) {
                                var f = this,
                                    g = this.Ka(e);
                                e = Ea(z(function(h) {
                                    h = Tb(f.l, Kb(h));
                                    if (ia(h) || M(h)) {
                                        var k = f.jf(h);
                                        if (k) return N(function(l, m) {
                                            return l ?
                                                l : ia(m) && "BreadcrumbList" === m["@type"] ? m : l
                                        }, null, k);
                                        if ("BreadcrumbList" === h["@type"]) return h
                                    }
                                    return null
                                }, [e.element].concat(hb(this.Te, document.body === g ? document.documentElement : g))));
                                return e.length && (e = e[0].itemListElement, M(e)) ? Ea(z(function(h) {
                                    return ia(h) && h.item && ia(h.item) && !f.l.isNaN(h.position) ? {
                                        name: h.item.name || h.name,
                                        position: h.position
                                    } : null
                                }, e)) : []
                            }, b);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.rc = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = M(b[d]) ? b[d] : [b[d]];
                        b = Ea(z(function(f) {
                            return f ?
                                "string" === typeof f ? f : N(function(g, h) {
                                    return g || "" + f[h]
                                }, "", e) : null
                        }, b));
                        return z(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.Ka = function(b) {
                        var d = b.element,
                            e = b.data || {};
                        b = e["@id"];
                        var f = e.url;
                        e = null;
                        f && aa(f) && (e = this.Ze(f));
                        !e && b && aa(b) && (e = this.Ze(b));
                        e || (e = b = d.parentNode, !Wb("head", this.l, d) && b && 0 !== Kb(b).length) || (e = this.l.document.body);
                        return e
                    };
                    c.prototype.Ze = function(b) {
                        try {
                            var d = zc(this.l, b).hash;
                            if (d) {
                                var e = ec(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.je =
                        function(b) {
                            return this.He[b["@type"]] || 1
                        };
                    c.prototype.Ca = function(b) {
                        var d = this,
                            e = b.element,
                            f = b.data;
                        if (!f && (f = Tb(this.l, Kb(e)), !f || !/schema\.org/.test(f["@context"]) && !M(f))) return null;
                        var g = this.jf(f);
                        if (g) return z(function(k) {
                            return ia(k) && I(k["@type"], d.vb["schema.org"]) ? a.prototype.Ca.call(d, {
                                element: e,
                                data: k,
                                type: d.je(k)
                            }) : null
                        }, g);
                        b.data = f;
                        if ("QAPage" === b.data["@type"]) {
                            var h = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!h) return null
                        }
                        "Question" === b.data["@type"] && (h = b.data);
                        return h ? (b =
                            wc(u(h, n), ["acceptedAnswer", "suggestedAnswer"]), z(function(k) {
                                var l;
                                if (!ia(k) || !I(k["@type"], d.vb["schema.org"])) return null;
                                k = {
                                    element: e,
                                    type: d.je(k),
                                    data: A((l = {}, l.parentItem = h, l), k)
                                };
                                return a.prototype.Ca.call(d, k)
                            }, b)) : I(b.data["@type"], this.vb["schema.org"]) ? a.prototype.Ca.call(this, A(b, {
                            type: this.je(b.data)
                        })) : null
                    };
                    c.prototype.sc = function() {
                        return hb(this.Te, this.root)
                    };
                    c.prototype.jf = function(b) {
                        if (M(b)) return b;
                        if (b && M(b["@graph"])) return b["@graph"]
                    };
                    return c
                }(bh),
                ch = function(a) {
                    function c() {
                        var b,
                            d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Pd = !0;
                        d.cj = Ka("exec", new RegExp("schema.org\\/(" + G("|", fa(d.He)) + ")$"));
                        d.Ib = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = fb(this.l, e, "identifier");
                            return f ? bb(f) : (f = fb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                var k = fb(this.l, e, g[h]);
                                if (k) {
                                    f = bb(k).length;
                                    break
                                }
                            }
                            e =
                                Kb(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = Od(this.l, e.element, "about");
                            return z(function(h) {
                                var k = {
                                    name: bb(h)
                                };
                                if (g = fb(f.l, h, "name")) k.name = bb(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = ec('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = ec('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? z(function(g) {
                                return {
                                    name: bb(fb(f.l, g, "name")),
                                    position: bb(fb(f.l, g, "position"))
                                }
                            }, Od(this.l, e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e =
                                fb(this.l, e.element, "dateModified")) ? tk(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = fb(this.l, e.element, "datePublished")) ? tk(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = Od(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : bb(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = fb(this.l, g, "headline");
                            h && (f += bb(h));
                            (h = fb(this.l, g, "alternativeHeadline")) && (f += " " + bb(h));
                            "" === f && ((h = fb(this.l, g, "name")) || (h = fb(this.l, g, "itemReviewed")), h && (f += bb(h)));
                            3 === e.type && (e = Wb('[itemtype$="schema.org/Question"]',
                                this.l, g)) && (e = fb(this.l, e, "text")) && (f += bb(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = Od(this.l, e.element, "author");
                            return z(function(g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = fb(f.l, g, "name")) && (k.name = bb(h));
                                k.name || (k.name = g.getAttribute("content") || Kb(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.nf = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.cj(b)) ? this.He[b[1]] : 1
                    };
                    c.prototype.Ca =
                        function(b) {
                            return b.element && Kb(b.element).length ? a.prototype.Ca.call(this, b) : null
                        };
                    c.prototype.sc = function() {
                        var b = G(",", z(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.vb["schema.org"]));
                        return hb(b, this.root)
                    };
                    return c
                }(bh),
                Cl = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Ib = (e = {}, e.chars = function(g) {
                                g = this.Ka(g);
                                return Kb(g).length
                            }, e.authors = function(g) {
                                return this.Bd(g.data.author)
                            }, e.pageTitle = function(g) {
                                return this.xc(g.data.title) || ""
                            }, e.updateDate = function(g) {
                                return this.xc(g.data.modified_time)
                            },
                            e.publicationDate = function(g) {
                                return this.xc(g.data.published_time)
                            }, e.pageUrlCanonical = function(g) {
                                return this.xc(g.data.url)
                            }, e.rubric = function(g) {
                                return this.Bd(g.data.section)
                            }, e.topics = function(g) {
                                return this.Bd(g.data.tag)
                            }, e);
                        f.bh = new RegExp("^(og:)?((" + G("|", f.vb.Ef) + "):)?");
                        return f
                    }
                    Ma(c, a);
                    c.prototype.Bd = function(b) {
                        var d;
                        return b ? M(b) ? z(function(e) {
                            var f;
                            return f = {}, f.name = e ? "" + e : null, f
                        }, b) : [(d = {}, d.name = b ? "" + b : null, d)] : []
                    };
                    c.prototype.xc = function(b) {
                        return M(b) ? b.length ? "" + b[0] : null : b ?
                            "" + b : null
                    };
                    c.prototype.sc = function() {
                        var b = hb('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.xh = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.Ka(b);
                        e = hb("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) x(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.bh, ""),
                                        l = bb(h);
                                    f[k] ? M(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                Mc(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return I(f.type,
                            this.vb.Ef) ? A(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.Ka = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Ca = function(b) {
                        return (b = this.xh(b)) ? a.prototype.Ca.call(this, b) : null
                    };
                    return c
                }(bh),
                Wd = {};
            Bl && (Wd.json_ld = Bl);
            ch && (Wd.schema = ch, Wd.microdata = ch);
            Cl && (Wd.opengraph = Cl);
            var eu = B("p.p", function(a, c) {
                    function b(m) {
                        var p = A({}, l);
                        p.Y.ca = m;
                        return f(p, c)["catch"](C(a, "s.ww.p"))
                    }
                    var d, e = ri(a, "9", "8");
                    if (!Fa("querySelectorAll", a.document.querySelectorAll) || !e) return L.resolve();
                    var f = oa(a, "p", c),
                        g = Ha(),
                        h = Zc(a, c.id),
                        k = h.C("pai");
                    k && (h.lc("pai"), g.D("pai", k));
                    var l = {
                        J: (d = {}, d["wv-type"] = e.type, d),
                        K: g,
                        Y: {}
                    };
                    return na(c, C(a, "ps.s", function(m) {
                        var p;
                        if (m = n(m, "settings.publisher.schema")) {
                            gk(c) && (m = "microdata");
                            var q = Wd[m];
                            if (q && e) {
                                var r = K(c);
                                q = new q(a, r);
                                q = new cu(a, q, e, b, r);
                                q.start();
                                Jb(a, r, "ps", (p = {}, p.schema = m, p));
                                return H(q.stop, q)
                            }
                        }
                    }))
                }),
                fu = function() {
                    function a(c, b) {
                        this.type = "0";
                        this.l = c;
                        this.uh = b
                    }
                    a.prototype.Fa = function(c) {
                        return Df(wc(H(this.wb, this), c))
                    };
                    a.prototype.wb =
                        function(c, b) {
                            var d = this,
                                e = [],
                                f = this.uh(this.l, b && b.type, c.type);
                            f && (e = wc(function(g) {
                                return g({
                                    l: d.l,
                                    na: c
                                }) || []
                            }, f));
                            return e
                        };
                    a.prototype.mb = function(c) {
                        return c.length
                    };
                    a.prototype.xe = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                Dl = function() {
                    function a(c, b, d) {
                        this.Ue = 0;
                        this.ke = 1;
                        this.cd = 5E3;
                        this.l = c;
                        this.ja = b;
                        this.Ub = d
                    }
                    a.prototype.Vc = function() {
                        this.Ue = T(this.l, w(H(this.flush, this), H(this.Vc, this)), this.cd, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.Ub(c,
                            b || [], this.ke);
                        this.ke += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                ho = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.wg = 7500;
                        b.cd = 3E4;
                        b.Vc();
                        return b
                    }
                    Ma(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.ja.wb(b, d);
                        wa(this.buffer, e);
                        this.ja.mb(this.buffer) > this.wg && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(Dl),
                wo = /opera mini/i,
                mi = ["phone", "email"],
                El = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                to = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                uo = [65, 90],
                vo = [97, 122],
                ro = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                po = new RegExp("(" + G("|", El) + ")", "i"),
                oo = new RegExp("(" + G("|", mi) + ")", "i"),
                uk = ["password", "passwd", "pswd"],
                qo = new RegExp("(" + G("|", El.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Ya = "metrikaId_" + Math.random(),
                Bc = {
                    counter: 0
                },
                $r = v(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                Xr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                gu = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        Aj: new RegExp("(" + G("|", a) + ")", "i"),
                        Mj: new RegExp("(" + G("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        yj: /ym-record-keys/i,
                        oi: "\u2022",
                        Jj: 88
                    }
                }(),
                zk = Vb(u(gu.oi, R)),
                sd = !0,
                Gg = "",
                Hg = !1,
                Ig = !0,
                Jg = !1,
                mo = pa(function(a, c) {
                    var b = D([a, "efv." + c.event], C);
                    c.R = z(w(R, b), c.R);
                    return c
                }),
                Fl = v(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(Jf), b.push(cs), b.push(ds));
                    a.document.addEventListener ? c.push(xk) : (b.push(wk), d.push(xk));
                    return lo(a, ("onpagehide" in a ? [] : [{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        R: [F]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        R: [F]
                    }]).concat([{
                        event: "click",
                        R: [Ye]
                    }, {
                        event: "dblclick",
                        R: [Ye]
                    }, {
                        event: "mousedown",
                        R: [Ye]
                    }, {
                        event: "mouseup",
                        R: [fs]
                    }, {
                        event: "keydown",
                        R: [gs]
                    }, {
                        event: "keypress",
                        R: [hs]
                    }, {
                        event: "copy",
                        R: [Bk]
                    }, {
                        event: "blur",
                        R: c
                    }, {
                        event: "focusin",
                        R: b
                    }, {
                        event: "focusout",
                        R: d
                    }]).concat(!a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        R: [ki]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        R: [Jf]
                    }] : []).concat(a.document.addEventListener ? [{
                        event: "focus",
                        R: [wk]
                    }, {
                        event: "change",
                        R: [yk]
                    }, {
                        event: "submit",
                        R: [Dk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        R: [yk]
                    }, {
                        type: "form",
                        event: "submit",
                        R: [Dk]
                    }]))
                }),
                jo = v(function(a) {
                    var c = [];
                    Ic(a) && c.push({
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        R: [is]
                    });
                    "onpagehide" in a && c.push({
                        target: a,
                        type: "window",
                        event: "pagehide",
                        R: [function(b) {
                            b = b.flush;
                            b()
                        }]
                    });
                    return c
                }),
                hu = ["submit", "beforeunload", "unload"],
                iu = v(function(a, c) {
                    var b = c(a);
                    return N(function(d, e) {
                        d[e.type + ":" + e.event] = e.R;
                        return d
                    }, {}, b)
                }),
                ju = u(Fl, function(a, c, b, d) {
                    return iu(c, a)[b + ":" + d] || []
                }),
                ko = /^\s*function submit\(\)/,
                ku = B("fw.p", function(a, c) {
                    var b;
                    if (!(b = c.Zg || !c.Bb)) {
                        var d = J(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = K(c);
                        b[f] && (d = d.C("counters", {}), e = $d(c.ba) && !d[f]);
                        b[f] = 1;
                        b = e
                    }
                    if (b) return L.resolve(F);
                    b = new fu(a, ju);
                    return go(a, c, b, Fl, hu)
                }),
                dh, Gl = (dh = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.Ee = 0;
                        d.Eb = 0;
                        d.De = 0;
                        d.buffer = [];
                        d.cd = 2E3;
                        d.$ = pd(b);
                        d.Vc();
                        d.De = f;
                        return d
                    }
                    Ma(c, a);
                    c.prototype.ff = function(b) {
                        return Ea(this.$.aa("ag", b))
                    };
                    c.prototype.ef = function(b, d) {
                        var e = this;
                        b(Za(C(this.l, "wv2.b.st"), function(f) {
                            e.send(f,
                                d)
                        }))
                    };
                    c.prototype.Qi = function(b, d) {
                        var e = this;
                        ka(this.l, this.Ue);
                        var f = Math.ceil(this.ja.mb(d) / 63E4),
                            g = this.ja.xe(d, f);
                        x(function(h, k) {
                            var l, m = A({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l));
                            l = e.ja.Fa([m], !1);
                            e.ef(l, [m])
                        }, g);
                        this.Vc()
                    };
                    c.prototype.send = function(b, d) {
                        var e = this;
                        this.$.aa("se", d);
                        return a.prototype.send.call(this, b, d).then(R, function() {
                            e.$.aa("see", d)
                        })
                    };
                    c.gf = function(b, d, e, f, g) {
                        c.fd["" + b + d] || (this.fd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.fd[d]
                    };
                    c.prototype.ai = function() {
                        return this.De && this.Ee >= this.De
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.ai()) {
                            this.$.aa("p", b);
                            var e = this.ja.wb(b),
                                f = this.ja.mb(e);
                            7E5 < f ? this.Qi(b, e) : (e = this.ff(this.buffer.concat([b])), e = zb(function(g, h) {
                                return g + d.ja.mb(d.ja.wb(h))
                            }, 0, e), this.Eb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Eb += f)
                        }
                    };
                    c.prototype.F = function(b, d) {
                        this.$.F([b], d)
                    };
                    c.prototype.ga = function(b, d) {
                        this.$.ga([b], d)
                    };
                    c.prototype.flush = function(b) {
                        var d = this.buffer.concat(this.ff(this.buffer));
                        d.length && (this.buffer = [], this.Ee += this.Eb, this.Eb = 0, b = this.ja.Fa(d, b), this.ef(b, d))
                    };
                    return c
                }(Dl), dh.fd = {}, dh),
                cb = function() {
                    function a(c, b, d) {
                        this.ii = "wv2.c";
                        this.sb = [];
                        this.ia = [];
                        this.l = c;
                        this.L = Hf(c, this, d, this.ii);
                        this.G = b;
                        this.Ta = this.G.Ah();
                        this.start = this.L.H(this.start, "st");
                        this.stop = this.L.H(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.sb = z(function(b) {
                            var d = b[0],
                                e = b[2];
                            b = H(c.L.H(b[1], d[0]), c);
                            return c.Ta.F(e || c.l, d, b)
                        }, this.ia)
                    };
                    a.prototype.stop = function() {
                        x(ya, this.sb)
                    };
                    a.prototype.Z = function(c) {
                        return this.G.ra().Z(c)
                    };
                    return a
                }(),
                eo = ["checkbox", "radio"],
                fo = /pwd|value|password/i,
                eh = V("location.href"),
                lu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.oa = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.de = d.L.H(d.de, "o");
                        d.pd = d.L.H(d.pd, "io");
                        d.dd = d.L.H(d.dd, "ao");
                        d.ne = d.L.H(d.ne, "a");
                        d.le = d.L.H(d.le, "at");
                        d.oe = d.L.H(d.oe, "r");
                        d.me = d.L.H(d.me, "c");
                        d.ya = new b.MutationObserver(d.de);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        this.ya.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.ya.disconnect()
                    };
                    c.prototype.dd = function(b) {
                        var d = b.target,
                            e = b.attributeName,
                            f = b.oldValue;
                        b = d.getAttribute(e);
                        if (b === f) return !1;
                        f = Mb(this.l)(d, this.oa.elements); - 1 === f && (f = this.oa.elements.push(d) - 1, this.oa.attributes[f] = {});
                        this.oa.attributes[f] || (this.oa.attributes[f] = {});
                        this.oa.attributes[f][e] = pe(this.l, d, e, b, this.G.Kb()).value;
                        return !0
                    };
                    c.prototype.pd = function(b) {
                        function d(k) {
                            var l =
                                Mb(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                zd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        x(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    if (e.dd(k)) {
                                        var y = d(q);
                                        y.zd[l] || (y.zd[l] = pe(e.l, q, l, p, e.G.Kb()).value)
                                    }
                                    break;
                                case "childList":
                                    m && x(function(E) {
                                        y = d(E);
                                        y.cf || A(y, {
                                            cf: q,
                                            oh: r ? r : void 0,
                                            ph: t ? t : void 0
                                        })
                                    }, Ga(m));
                                    break;
                                case "characterData":
                                    y = d(q), y.df || (y.df = p)
                            }
                        }, b);
                        var h = this.G.ra();
                        x(function(k, l) {
                                h.we(k, g[l])
                            },
                            f)
                    };
                    c.prototype.de = function(b) {
                        var d = this;
                        if (eh(this.l)) {
                            var e = this.G.stamp();
                            this.pd(b);
                            x(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h && h.length && d.oe(Ga(h), e);
                                        g && g.length && d.ne(Ga(g), e);
                                        break;
                                    case "characterData":
                                        d.me(k, e)
                                }
                            }, b);
                            this.le(e)
                        } else this.stop()
                    };
                    c.prototype.le = function(b) {
                        var d = this;
                        x(function(e, f) {
                            var g = d.vc();
                            d.G.T("mutation", {
                                index: g,
                                attributes: d.oa.attributes[f],
                                target: d.Z(e)
                            }, "ac", b)
                        }, this.oa.elements);
                        this.oa.elements = [];
                        this.oa.attributes = []
                    };
                    c.prototype.ne = function(b, d) {
                        var e = this,
                            f = this.vc();
                        this.G.ra().zc({
                            nodes: b,
                            Uc: function(g) {
                                g = z(function(h) {
                                    h.node = void 0;
                                    return h
                                }, g);
                                e.G.T("mutation", {
                                    index: f,
                                    nodes: g
                                }, "ad", d)
                            }
                        })
                    };
                    c.prototype.oe = function(b, d) {
                        var e = this,
                            f = this.vc(),
                            g = this.G.ra(),
                            h = z(function(k) {
                                var l = g.removeNode(k);
                                Ri(e.l, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.G.T("mutation", {
                            index: f,
                            nodes: h
                        }, "re", d)
                    };
                    c.prototype.me = function(b, d) {
                        var e = this.vc();
                        this.G.T("mutation", {
                                value: b.textContent,
                                target: this.Z(b),
                                index: e
                            }, "tc",
                            d)
                    };
                    c.prototype.vc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(cb),
                mu = function() {
                    function a(c, b) {
                        var d = this;
                        this.qc = [];
                        this.hb = [];
                        this.ce = 1;
                        this.Re = this.Xf = 0;
                        this.xa = {};
                        this.Ua = {};
                        this.Jb = [];
                        this.Md = function(f) {
                            return d.hb.length ? I(f, d.hb) : !1
                        };
                        this.removeNode = function(f) {
                            var g = d.Z(f),
                                h = La(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Md(h) && d.$.aa(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.lb = function(f) {
                            var g = La(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                return h ? h : (h = d.ce, f.__ym_indexer = h, d.ce += 1, g = "NA:" +
                                    g.toLowerCase(), d.Md(g) && d.$.aa(g, {
                                        data: {
                                            node: f,
                                            id: h
                                        }
                                    }), h)
                            }
                            return null
                        };
                        this.Rf = function() {
                            d.Xf = T(d.l, w(H(d.da, d, !1), d.Rf), 50, "i.s")
                        };
                        this.Pf = function() {
                            d.Re = T(d.l, w(H(d.jd, d, !1), d.Pf), 50, "i.g")
                        };
                        this.Hi = function(f) {
                            null === d.xa[f] && delete d.xa[f];
                            null === d.Ua[f] && delete d.Ua[f]
                        };
                        this.l = c;
                        var e = Hf(c, this, "i");
                        this.$ = pd(c);
                        this.options = b;
                        this.start = e.H(this.start, "st");
                        this.stop = e.H(this.stop, "sp");
                        this.Z = e.H(this.Z, "i");
                        this.we = e.H(this.we, "o");
                        this.zc = e.H(this.zc, "a");
                        this.removeNode = e.H(this.removeNode,
                            "r");
                        this.da = e.H(this.da, "s");
                        this.jd = e.H(this.jd, "g")
                    }
                    a.prototype.we = function(c, b) {
                        var d = this.lb(c);
                        Wa(d) || (this.Ua[d] && this.Z(c), this.Ua[d] = b)
                    };
                    a.prototype.F = function(c, b, d) {
                        c = "" + b + c;
                        this.hb.push(c);
                        this.Md(c) || this.hb.push(c);
                        this.$.F([c], d)
                    };
                    a.prototype.ga = function(c, b, d) {
                        var e = "" + b + c;
                        this.hb = ha(function(f) {
                            return f !== e
                        }, this.hb);
                        this.$.ga([e], d)
                    };
                    a.prototype.start = function() {
                        this.Rf();
                        this.Pf()
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        ka(this.l, this.Re);
                        ka(this.l, this.Xf);
                        this.qc = [];
                        this.Jb = [];
                        this.xa = {};
                        this.Ua = {}
                    };
                    a.prototype.zc = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                Uc: c.Uc,
                                result: [],
                                Ac: 0,
                                nodes: d
                            };
                        this.qc.push(f);
                        x(function(g) {
                            Ri(b.l, g, function(h) {
                                var k = b.lb(h);
                                Wa(k) || (d.push(h), b.xa[k] && b.Z(h), b.xa[k] = {
                                    node: h,
                                    event: f,
                                    aj: e
                                }, e += 1)
                            })
                        }, c.nodes)
                    };
                    a.prototype.Z = function(c) {
                        if (c === this.l) return 0;
                        var b = this.lb(c),
                            d = this.xa[b],
                            e = this.sh(b),
                            f = e.cf,
                            g = e.zd,
                            h = e.df,
                            k = e.oh,
                            l = e.ph;
                        if (d) {
                            e = d.event;
                            d = d.aj;
                            var m = Js(this.l) === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.lb(k) : null;
                            p = !m &&
                                p ? this.lb(p) : null;
                            m = this.l;
                            k = this.options;
                            f = this.lb(f || c.parentNode || c.parentElement) || 0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 === r && (r = La(c));
                            if (Y(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    prev: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c
                                };
                                if (Nf(c)) {
                                    if (h = ao(c, h), g.attributes = {}, g.content = h)
                                        if (c = qd(m, c)) g.content = "" !== $a(h) ? so(m, h) : h, g.hidden = c
                                } else h = bo(m, c, k, q, r), m = h.qb, g.attributes = h.Gg, m && (g.hidden = m), c.namespaceURI && gb(c.namespaceURI, "svg") &&
                                    (g.namespace = c.namespaceURI);
                                c = g
                            }
                            if (Y(c)) return;
                            this.xa[b] = null;
                            this.Jb.push(b);
                            e.result[d] = c;
                            e.Ac += 1;
                            e.nodes.length === e.Ac && e.Uc(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.da(!0)
                    };
                    a.prototype.jd = function() {
                        if (this.Jb.length) {
                            var c = fc(this.Jb, this.Hi),
                                b = qg(this.l, 30);
                            c(b)
                        }
                    };
                    a.prototype.da = function(c) {
                        var b = this;
                        if (eh(this.l)) {
                            var d = fa(this.xa);
                            d = N(function(e, f) {
                                b.xa[f] && e.push(b.xa[f].node);
                                return e
                            }, [], d);
                            d = fc(d, this.Z);
                            c = c ? Rj(F) : Pj(this.l, 20);
                            d(c);
                            this.qc = ha(function(e) {
                                return e.Ac !==
                                    e.result.length
                            }, this.qc)
                        }
                    };
                    a.prototype.sh = function(c) {
                        if (Wa(c)) return {};
                        var b = this.Ua[c];
                        return b ? (this.Ua[c] = null, this.Jb.push(c), b) : {}
                    };
                    return a
                }(),
                nu = ["input", "change", "keyup", "paste", "cut"],
                ou = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.sd = !1;
                        b.Hc = b.L.H(b.Hc, "ii");
                        b.Ic = b.L.H(b.Ic, "ir");
                        b.Pc = b.L.H(b.Pc, "ri");
                        b.Zc = b.L.H(b.Zc, "ur");
                        b.Kd = b.L.H(b.Kd, "ce");
                        b.yc = b.L.H(b.yc, "vc");
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.G.ra();
                        this.sd = this.Ng();
                        x(function(e) {
                            e =
                                e.toLowerCase();
                            d.F(e, "NA:", H(b.Hc, b));
                            d.F(e, "NR:", H(b.Ic, b))
                        }, Mf);
                        this.sb = [this.Ta.F(this.l.document, nu, H(this.Kd, this)), function() {
                            x(function(e) {
                                e = e.toLowerCase();
                                d.ga(e, "NA:", b.Hc);
                                d.ga(e, "NR:", b.Ic)
                            }, Mf);
                            x(b.Zc, fa(b.inputs))
                        }]
                    };
                    c.prototype.Zc = function(b) {
                        var d = this.inputs[b];
                        if (d) {
                            if (this.sd) {
                                var e = d.Bi;
                                d = d.element;
                                e && this.l.Object.defineProperty(d, this.wc(d), e)
                            }
                            delete this.inputs[b]
                        }
                    };
                    c.prototype.Ic = function(b) {
                        b && this.Zc(b.data.id)
                    };
                    c.prototype.Hc = function(b) {
                        b && (b = b.data, this.Pc(b.node, b.id))
                    };
                    c.prototype.wc = function(b) {
                        return Oe(b) ? "checked" : "value"
                    };
                    c.prototype.Kd = function(b) {
                        if (b = b.target) {
                            var d = this.wc(b);
                            this.yc(b[d], b)
                        }
                    };
                    c.prototype.yc = function(b, d) {
                        var e = this.Z(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Pc(f, e), !f)) return;
                        e = f.Pg;
                        var g = f.value,
                            h = this.wc(d),
                            k = !b || I(typeof b, ["string", "boolean", "number"]),
                            l = this.G.Kb().Rd;
                        k && b !== g && (g = pe(this.l, d, h, b, this.G.Kb()).value, e ? this.G.T("event", {
                            target: this.Z(d),
                            checked: !!b
                        }, "change") : (e = Qc(this.l, d, l), l = e.ib, this.G.T("event", {
                            value: g,
                            hidden: e.rb &&
                                !l,
                            target: this.Z(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.Pc = function(b, d) {
                        var e = this;
                        if (!Ff(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f = Oe(b),
                            g = this.wc(b),
                            h = {
                                element: b,
                                Pg: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.sd && Qb(this.l, function() {
                            var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                m = A({}, k, l);
                            if (Fa("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.l.Object.defineProperty(b, g, A({}, m, {
                                        configurable: !0,
                                        set: function(p) {
                                            e.yc(p, this);
                                            return m.set.call(this, p)
                                        }
                                    }))
                                } catch (p) {}
                                h.Bi = m
                            }
                        });
                        return h
                    };
                    c.prototype.Ng = function() {
                        var b = !0,
                            d = yb(this.l)("input");
                        try {
                            d = yb(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = A({}, e, f);
                            this.l.Object.defineProperty(d,
                                "value", A({}, g, {
                                    configurable: !0,
                                    set: function(h) {
                                        return g.set.call(d, h)
                                    }
                                }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(cb),
                pu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ab = {
                            width: 0,
                            height: 0,
                            pageHeight: 0,
                            pageWidth: 0,
                            orientation: 0
                        };
                        b.ia.push([
                            ["resize"], b.zi
                        ]);
                        b.ia.push([
                            ["orientationchange"], b.xi
                        ]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.Uf()
                    };
                    c.prototype.zi = function() {
                        var b =
                            this.Hd();
                        this.Ph(b) && (this.ab = b, this.Vf(b))
                    };
                    c.prototype.xi = function() {
                        var b = this.Hd();
                        this.ab.orientation !== b.orientation && (this.ab = b, this.Mi(b))
                    };
                    c.prototype.yf = function(b) {
                        return !b.height || !b.width || !b.pageWidth || !b.pageHeight
                    };
                    c.prototype.Ph = function(b) {
                        return b.height !== this.ab.height || b.width !== this.ab.width
                    };
                    c.prototype.Hd = function() {
                        var b = this.G.kb(),
                            d = Oc(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.Gd();
                        return {
                            width: e,
                            height: d,
                            pageWidth: b ? b.scrollWidth : 0,
                            pageHeight: b ? b.scrollHeight : 0,
                            orientation: this.G.kb().Ch()
                        }
                    };
                    c.prototype.Mi = function(b) {
                        var d;
                        void 0 === d && (d = this.G.stamp());
                        this.G.T("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.Vf = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        this.G.T("event", {
                            width: b.width,
                            height: b.height,
                            pageWidth: b.pageWidth,
                            pageHeight: b.pageHeight
                        }, "resize", d)
                    };
                    c.prototype.Uf = function() {
                        var b = this.Hd();
                        this.yf(b) ? T(this.l, H(this.Uf, this), 300) : (this.yf(this.ab) && (this.ab = b), this.Vf(b, 0))
                    };
                    return c
                }(cb),
                cf = function() {
                    function a(c) {
                        this.index =
                            0;
                        this.yb = {};
                        this.l = c
                    }
                    a.prototype.jc = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = ja(this.l),
                            f = this.index;
                        this.index += 1;
                        this.yb[f] = {
                            Qa: 0,
                            Tb: !1,
                            fn: c,
                            ed: [],
                            Wd: e(ea)
                        };
                        var g = this;
                        return function() {
                            var h = Oa(arguments),
                                k = d.af && !g.yb[f].Tb,
                                l = g.yb[f];
                            ka(g.l, l.Qa);
                            l.ed = h;
                            l.Tb = !0;
                            var m = e(ea);
                            if (k || m - l.Wd >= b) c.apply(void 0, h), l.Wd = m;
                            l.Qa = T(g.l, function() {
                                k || (c.apply(void 0, h), l.Wd = e(ea));
                                l.Tb = !1;
                                l.ed = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        x(function(b) {
                            var d = c.yb[b],
                                e = d.Qa,
                                f = d.fn,
                                g = d.ed;
                            d.Tb && (c.yb[b].Tb = !1, f.apply(void 0, g), ka(c.l, e))
                        }, fa(this.yb))
                    };
                    return a
                }(),
                qu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.hg = [];
                        d.Me = {
                            x: 0,
                            y: 0
                        };
                        d.Aa = new cf(b);
                        d.Lc = d.L.H(d.Lc, "o");
                        d.ia.push([
                            ["scroll"], d.Ai
                        ]);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.T("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Aa.flush()
                    };
                    c.prototype.Ai = function(b) {
                        if (this.G.kb().sf()) this.Lc(b);
                        else {
                            var d = b.target,
                                e = ha(function(f) {
                                    return f[0] === d
                                }, this.hg).pop();
                            e ? e = e[1] : (e = this.Aa.jc(H(this.Lc, this), 100, {
                                af: !0
                            }), this.hg.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Lc = function(b) {
                        var d = this.G.kb().Gd();
                        b = b.target;
                        var e = this.Lb(b);
                        d = d === b || this.l === b || this.l.document === b;
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Me.x === f && this.Me.y === e) return;
                            this.Me = {
                                x: f,
                                y: e
                            }
                        }
                        this.G.T("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.Z(b)
                        }, "scroll")
                    };
                    c.prototype.Lb = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.G.kb().Gd(), b) ? I(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop || 0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(cb),
                ru = ["mousemove", "mousedown", "mouseup", "click"],
                su = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ia.push([ru, d.wi]);
                        d.Aa = new cf(b);
                        d.Gc = d.L.H(d.Gc, "n");
                        d.Vi = d.L.H(d.Aa.jc(H(d.Gc, d),
                            100), "t");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Aa.flush()
                    };
                    c.prototype.wi = function(b) {
                        var d = null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" === d ? this.Vi(b) : this.Gc(b)
                    };
                    c.prototype.Gc = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.G.T("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.Z(b)
                        }, d)
                    };
                    return c
                }(cb),
                tu = ["focus", "blur"],
                uu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b,
                            d, e) || this;
                        b.ia.push([tu, b.nh]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.nh = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.G.T("event", {
                            target: this.Z(d === this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(cb),
                vu = v(function(a) {
                    var c = ma(a.getSelection, "getSelection");
                    return c ? H(c, a) : F
                }),
                wu = w(vu, ya),
                xu = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                yu = /text|search|password|tel|url/,
                zu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Nd = !1;
                        b.ia.push([xu, b.Nh]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.Nh =
                        function(b) {
                            var d = this.G,
                                e = b.type,
                                f = b.which;
                            b = b.target;
                            if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.Gh(b) : this.Eh()) && e.start !== e.end ? (this.Nd = !0, d.T("event", e, "selection")) : this.Nd && (this.Nd = !1, d.T("event", {
                                start: 0,
                                end: 0
                            }, "selection"))
                        };
                    c.prototype.Eh = function() {
                        var b = wu(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.Z(b.startContainer),
                                e = this.Z(b.endContainer);
                            if (!Y(d) && !Y(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                startNode: d,
                                endNode: e
                            }
                        }
                    };
                    c.prototype.Gh =
                        function(b) {
                            if (yu.test(b.type || "")) {
                                var d = this.Z(b);
                                if (!Y(d)) return {
                                    start: b.selectionStart,
                                    end: b.selectionEnd,
                                    target: d
                                }
                            }
                        };
                    return c
                }(cb),
                Hl = {
                    focus: "windowfocus",
                    blur: "windowblur",
                    Lj: "windowfocus",
                    Kj: "windowblur"
                },
                Au = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        Y(b.l.document.hidden) ? Y(b.l.document.msHidden) ? Y(b.l.document.webkitHidden) || (b.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : b.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : b.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        };
                        b.Jd = b.L.H(b.Jd, "fbe");
                        b.Ld = b.L.H(b.Ld, "she");
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        this.sb = [this.Ta.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], H(this.Jd, this))];
                        "onpagehide" in this.l && this.sb.push(this.Ta.F(this.l, ["pageshow", "pagehide"], H(this.Ld, this), null))
                    };
                    c.prototype.Ld = function(b) {
                        this.G.T("event", {}, Hl[b.type])
                    };
                    c.prototype.Jd = function(b) {
                        this.G.T("event", {}, Hl[this.visibility ? this.l.document[this.visibility.hidden] ?
                            "blur" : "focus" : b.type])
                    };
                    return c
                }(cb),
                Bu = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Cu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Yc = {};
                        d.scrolling = !1;
                        d.Sf = 0;
                        d.ia.push([
                            ["scroll"], d.Li, d.l.document
                        ]);
                        d.ia.push([Bu, d.Xi, d.l.document]);
                        d.Aa = new cf(b);
                        d.Ob = d.L.H(d.Ob, "nh");
                        d.Wi = d.L.H(d.Aa.jc(d.Ob, d.G.kb().sf() ? 0 : 50, {
                            af: !0
                        }), "th");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.Li = function() {
                        var b = this;
                        this.scrolling = !0;
                        ka(this.l, this.Sf);
                        this.Sf = T(this.l, function() {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Xi = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && x(function(f) {
                            var g = d.Ih(f);
                            f.__ym_touch_id = g;
                            e && delete d.Yc[f.identifier]
                        }, Ga(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Ob(b) : this.Wi(b, this.G.stamp()) : this.Ob(b)
                    };
                    c.prototype.Ih = function(b) {
                        this.Yc[b.identifier] || (this.Yc[b.identifier] = ei());
                        return this.Yc[b.identifier]
                    };
                    c.prototype.Ob = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        var e = b.type,
                            f = z(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, Ga(b.changedTouches));
                        0 < f.length && this.G.T("event", {
                            touches: f,
                            target: this.Z(b.target)
                        }, e, d)
                    };
                    return c
                }(cb),
                Du = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([
                            ["load"], b.vi, b.l.document
                        ]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.vi = function(b) {
                        b = b.target;
                        "IMG" === La(b) && b.getAttribute("srcset") && this.G.T("mutation", {
                            target: this.Z(b),
                            attributes: {
                                src: b.currentSrc
                            }
                        }, "ac")
                    };
                    return c
                }(cb),
                Eu =
                function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.sg = 1;
                        d.Aa = new cf(b);
                        d.cc = d.L.H(d.cc, "z");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        if (this.pf()) {
                            a.prototype.start.call(this);
                            this.cc();
                            var b = this.Ta.F(n(this.l, "visualViewport"), ["resize"], this.Aa.jc(this.cc, 10));
                            this.sb.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Aa.flush()
                    };
                    c.prototype.cc = function() {
                        var b = this.pf();
                        b && b !== this.sg && (this.sg = b, this.Ni(b))
                    };
                    c.prototype.pf = function() {
                        var b = be(this.l);
                        return b ?
                            b[2] : null
                    };
                    c.prototype.Ni = function(b) {
                        var d = Vf(this.l);
                        this.G.T("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(cb),
                Xd, df = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                Il = {
                    "super": 1,
                    vj: 2,
                    alt: 3,
                    shift: 4,
                    Sj: 5,
                    "delete": 6,
                    tj: 6
                },
                Fu = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Jl = (Xd = {}, Xd["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Xd["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Xd.ki = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, Xd),
                Gu = /flash/,
                Hu = /ym-disable-keys/,
                Iu = /^&#/,
                Ju = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ob = {};
                        d.La = 0;
                        d.Da = [];
                        d.fg = [];
                        d.nc = 0;
                        d.Lf = 0;
                        d.ia.push([
                            ["keydown"], d.Kh
                        ]);
                        d.ia.push([
                            ["keyup"], d.Lh
                        ]);
                        d.Cg = -1 !== kc(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
                        d.Ec = d.L.H(d.Ec, "v");
                        d.vd = d.L.H(d.vd, "ec");
                        d.Tc = d.L.H(d.Tc, "sk");
                        d.Ed = d.L.H(d.Ed, "gk");
                        d.ye = d.L.H(d.ye, "sc");
                        d.bc = d.L.H(d.bc, "cc");
                        d.reset = d.L.H(d.reset, "r");
                        d.Qc = d.L.H(d.Qc, "rs");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.Kh = function(b) {
                        if (this.Ec(b) && !this.Zh(b)) {
                            var d = b.keyCode;
                            b.repeat || this.ob[d] || (this.ob[b.keyCode] = !0, df[b.keyCode] && !this.La ? (this.La += 1, this.ye(b), this.reset(300)) : this.La ? (this.Kg(), this.qe(b), this.vd()) : (this.reset(), this.qe(b)))
                        }
                    };
                    c.prototype.Lh = function(b) {
                        if (this.Ec(b)) {
                            var d = b.keyCode,
                                e = df[b.keyCode];
                            this.ob[b.keyCode] && (this.ob[d] = !1);
                            e && this.La && (this.La = 0, this.ob = {});
                            1 === this.Da.length &&
                                (b = this.Da[0], I(b.keyCode, Fu) && (this.Tc([b], !0), this.reset()));
                            this.Da = ha(w(V("keyCode"), Aa(d), Hc), this.Da);
                            ka(this.l, this.nc)
                        }
                    };
                    c.prototype.Ec = function(b) {
                        var d = this.l.document.activeElement;
                        d = d && "OBJECT" === d.nodeName && Gu.test(d.getAttribute("type") || "");
                        b = b.target;
                        if (!b) return !d;
                        b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Hu.test(b.className);
                        return !d && !b
                    };
                    c.prototype.vd = function() {
                        this.fg = this.Da.slice(0);
                        ka(this.l, this.nc);
                        this.nc = T(this.l, u(this.fg, H(this.Tc, this)), 0, "e.c")
                    };
                    c.prototype.Tc = function(b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.Ed(b);
                            this.G.T("event", {
                                keystrokes: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.Ed = function(b) {
                        var d = this;
                        b = z(function(e) {
                            e = e.keyCode;
                            var f = df[e],
                                g = d.Bh(e);
                            return {
                                id: e,
                                key: g,
                                isMeta: !!f && Iu.test(g),
                                modifier: f
                            }
                        }, b);
                        return te(function(e, f) {
                            return (Il[e.modifier] || 100) - (Il[f.modifier] || 100)
                        }, b)
                    };
                    c.prototype.Bh = function(b) {
                        return Jl[this.Cg][b] || Jl.ki[b] || String.fromCharCode(b)
                    };
                    c.prototype.qe = function(b) {
                        I(b, this.Da) || this.Da.push(b)
                    };
                    c.prototype.ye =
                        function(b) {
                            this.qe(b);
                            this.bc()
                        };
                    c.prototype.bc = function() {
                        this.La ? T(this.l, this.bc, 100) : this.Da = []
                    };
                    c.prototype.Kg = function() {
                        ka(this.l, this.Lf)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.Lf = T(this.l, H(this.Qc, this), b) : this.Qc()
                    };
                    c.prototype.Qc = function() {
                        this.La = 0;
                        this.Da = [];
                        this.ob = {};
                        ka(this.l, this.nc)
                    };
                    c.prototype.Zh = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === df[b.keyCode] : !1
                    };
                    return c
                }(cb),
                $n = ["sr", "sd", "\u043d"],
                Ku = /allow-same-origin/,
                Lu = function(a) {
                    function c(b,
                        d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Wb = [];
                        d.Ad = {};
                        d.ee = d.L.H(d.ee, "fi");
                        d.fe = d.L.H(d.fe, "sd");
                        d.ie = d.L.H(d.ie, "src");
                        d.ya = new b.MutationObserver(d.ie);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.Kb().dc && this.G.ra().F("iframe", "NA:", H(this.ee, this));
                        this.G.kf().Cd().F(["sdr"], H(this.fe, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        x(function(b) {
                            b.G.stop()
                        }, this.Wb)
                    };
                    c.prototype.ie = function(b) {
                        var d = b.pop().target;
                        if (b = ib(function(f) {
                                return f.rf ===
                                    d
                            }, this.Wb)) {
                            this.Wb = ha(function(f) {
                                return f.rf !== d
                            }, this.Wb);
                            var e = b.G.Dd();
                            try {
                                b.G.stop()
                            } catch (f) {}
                            this.ic(d, e)
                        }
                    };
                    c.prototype.ee = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.ya.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.ic(d, b.data.id)
                        }
                    };
                    c.prototype.ic = function(b, d) {
                        var e = this;
                        this.Xh(b) && vc(this.l, b)(Za(F, function() {
                            var f = e.G.ic(b.contentWindow, d);
                            e.Wb.push({
                                G: f,
                                rf: b
                            })
                        }))
                    };
                    c.prototype.fe = function(b) {
                        var d = this,
                            e = b.frameId;
                        b = b.data;
                        this.Ad[e] || (this.Ad[e] = {
                            data: []
                        });
                        var f = this.Ad[e];
                        f.data =
                            f.data.concat(b);
                        this.l.isNaN(f.rd) && x(function(g) {
                            "page" === g.type && (f.rd = g.data.recordStamp - d.G.lf())
                        }, f.data);
                        this.l.isNaN(f.rd) || (this.G.da(z(function(g) {
                            g.stamp += f.rd;
                            g.stamp = d.l.Math.max(0, g.stamp);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Xh = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(Ku) || d && "about:blank" !== d && (d = zc(this.l, d).host) && U(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }(cb),
                Mu = v(function(a) {
                    var c =
                        n(a, "sessionStorage");
                    if (!c) return null;
                    try {
                        var b = c.getItem("__ym_tab_guid");
                        c = !1;
                        var d = n(a, "opener.sessionStorage");
                        try {
                            c = !!d && b === d.getItem("__ym_tab_guid")
                        } catch (e) {
                            c = !0
                        }
                        if (!b || c) b = ei(), a.sessionStorage.setItem("__ym_tab_guid", b);
                        return b
                    } catch (e) {
                        return null
                    }
                }),
                Nu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.te = b.L.H(b.te, "ps");
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        this.G.ra().zc({
                            nodes: [this.l.document.documentElement],
                            Uc: this.te
                        })
                    };
                    c.prototype.te = function(b) {
                        var d = this.G.Dh(),
                            e = d.th(),
                            f = U(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Oc(this.l),
                            l = k[0];
                        k = k[1];
                        this.G.T("page", {
                            content: z(function(m) {
                                m.node = void 0;
                                return m
                            }, b),
                            base: e || "",
                            hasBase: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.vh() || "",
                            address: this.l.location.href,
                            ua: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            recordStamp: this.G.lf(),
                            tabId: Mu(this.l)
                        }, "page", 0)
                    };
                    return c
                }(cb),
                Ou = ["addRule", "removeRule", "insertRule", "deleteRule"],
                fh = [
                    [function(a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.eb = {};
                            b.Xb = {};
                            b.Qe = 0;
                            b.Jc = b.L.H(b.Jc, "a");
                            b.xb = b.L.H(b.xb, "sr");
                            b.Kc = b.L.H(b.Kc, "r");
                            b.da = b.L.H(b.da, "d");
                            return b
                        }
                        Ma(c, a);
                        c.prototype.start = function() {
                            var b = this.G.ra();
                            b.F("style", "NA:", this.Jc);
                            b.F("style", "NR:", this.Kc);
                            this.da()
                        };
                        c.prototype.stop = function() {
                            var b = this;
                            a.prototype.stop.call(this);
                            var d = this.G.ra();
                            d.ga("style", "NA:", this.Jc);
                            d.ga("style", "NR:", this.Kc);
                            this.da();
                            ka(this.l, this.Qe);
                            x(function(e) {
                                b.eb[e].sheet && b.Of(b.eb[e].sheet)
                            }, fa(this.eb));
                            this.eb = {}
                        };
                        c.prototype.da = function() {
                            var b = this;
                            x(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.stamp;
                                        delete l.stamp;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && x(function(p) {
                                        b.G.T("event", {
                                            target: Da(e),
                                            changes: p
                                        }, "stylechange", g)
                                    }, h);
                                    delete b.Xb[e]
                                }
                            }, ua(this.Xb));
                            this.Qe = T(this.l, this.da, 100)
                        };
                        c.prototype.xb = function(b, d, e, f,
                            g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.Xb[b] || (this.Xb[b] = []);
                            this.Xb[b].push({
                                op: d,
                                style: f,
                                index: g,
                                stamp: e
                            })
                        };
                        c.prototype.Ci = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            O(f) && (b.addRule = function(l, m, p) {
                                e.xb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            O(g) && (b.removeRule = function(l) {
                                e.xb(d, "r", e.G.stamp(), "", l);
                                return g.call(b, l)
                            });
                            O(h) && (b.insertRule = function(l, m) {
                                e.xb(d, "a", e.G.stamp(), l, m);
                                return h.call(b, l, m)
                            });
                            O(k) && (b.deleteRule = function(l) {
                                e.xb(d,
                                    "r", e.G.stamp(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.Of = function(b) {
                            var d = this;
                            x(function(e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                O(f) && (b[e] = H(f, b))
                            }, Ou)
                        };
                        c.prototype.gh = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Jc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.gh(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h < f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        op: "a"
                                    });
                                    this.G.T("event", {
                                            changes: g,
                                            target: b
                                        },
                                        "stylechange")
                                }
                                this.Ci(e, b);
                                this.eb[b] = d
                            }
                        };
                        c.prototype.Kc = function(b) {
                            b = b.data.id;
                            var d = this.eb[b];
                            d && (delete this.eb[b], d.sheet && this.Of(d.sheet))
                        };
                        return c
                    }(cb), "ss"],
                    [ou, "in"],
                    [lu, "mu"],
                    [pu, "r"],
                    [qu, "sc"],
                    [su, "mo"],
                    [uu, "f"],
                    [zu, "se"],
                    [Au, "wf"],
                    [Cu, "t"],
                    [Du, "src"],
                    [Eu, "z"],
                    [Ju, "ks"]
                ];
            fh.push([Lu, "if"]);
            fh.push([Nu, "pa"]);
            var Pu = v(function(a) {
                    var c = a.document;
                    return {
                        Gd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === nb(c.compatMode, "CSS1") ? c.documentElement : c.body;
                            return n(c,
                                "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        Ch: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = ib(u(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        Hj: u(a, qb),
                        sf: u(a, se),
                        Gj: u(a, Kg)
                    }
                }),
                Qu = function() {
                    function a(c, b) {
                        var d = this;
                        this.Nb = 0;
                        this.qd = [];
                        this.Mb = null;
                        this.ta = this.Yb = this.dg = !1;
                        this.recordStamp = 0;
                        this.stopped = !1;
                        this.Dh = function() {
                            return d.page
                        };
                        this.Dd = function() {
                            return d.Nb
                        };
                        this.lf = function() {
                            return d.recordStamp
                        };
                        this.Ah = function() {
                            return d.Ta
                        };
                        this.kf = function() {
                            return d.Mb
                        };
                        this.ra = function() {
                            return d.Od
                        };
                        this.stamp = function() {
                            return d.Ce ? d.l.Math.max(d.Ce(ea) - d.recordStamp, 0) : 0
                        };
                        this.Kb = function() {
                            return d.options
                        };
                        this.kb = function() {
                            return d.Hg
                        };
                        this.T = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            f = d.zh(f, g, h, k);
                            d.da(f)
                        };
                        this.zh = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            return {
                                type: f,
                                data: g,
                                stamp: k,
                                frameId: d.Nb,
                                event: h
                            }
                        };
                        this.da = function(f) {
                            f = M(f) ? f : [f];
                            d.dg && !d.Yb ? d.ta ? (f = z(function(g) {
                                    return g.frameId ? g : A(g, {
                                        frameId: d.Nb
                                    })
                                }, f), d.kf().Wf(f)) :
                                d.Ub(f) : d.qd = d.qd.concat(f)
                        };
                        this.l = c;
                        var e = Hf(c, this, "R");
                        this.ze = e.H(this.ze, "s");
                        this.da = e.H(this.da, "sd");
                        e = J(c);
                        e.C("wv2e") && Yd();
                        e.D("wv2e", !0);
                        this.options = b;
                        this.Ta = la(c);
                        this.Od = new mu(this.l, b);
                        this.Hg = Pu(c);
                        this.Se = z(function(f) {
                            return new f[0](c, d, f[1])
                        }, fh);
                        this.Uh();
                        this.page = Yn(this.l);
                        this.ze()
                    }
                    a.prototype.start = function(c) {
                        this.dg = !0;
                        this.Ub = c;
                        this.Tf()
                    };
                    a.prototype.stop = function() {
                        this.stopped || (this.stopped = !0, eh(this.l) && (x(function(c) {
                                return c.stop()
                            }, this.Se), this.Od.stop(),
                            this.Mb && this.Mb.stop(), this.ta || this.T("event", {}, "eof")))
                    };
                    a.prototype.ic = function(c, b) {
                        var d = new a(c, A({}, this.options, {
                            frameId: b
                        }));
                        d.start(F);
                        return d
                    };
                    a.prototype.Uh = function() {
                        var c = this;
                        this.ta = !!this.options.frameId;
                        this.Nb = this.options.frameId || 0;
                        this.Yb = !this.ta;
                        var b = this.options.lg || [];
                        b.push(U(this.l).host);
                        this.Mb = Zn(this.l, this, b);
                        b = this.Mb.Cd();
                        qb(this.l) ? this.Yb && b.F(["i"], function(d) {
                            c.ta = d.ta;
                            c.Yb = !1;
                            d.frameId && (c.Nb = d.frameId);
                            c.Tf()
                        }) : this.Yb = this.ta = !1
                    };
                    a.prototype.Tf = function() {
                        var c =
                            Te(this.qd);
                        this.da(c)
                    };
                    a.prototype.ze = function() {
                        this.Ce = cg(this.l);
                        this.recordStamp = this.Ce(ea);
                        x(function(c) {
                            c.start()
                        }, this.Se);
                        this.Od.start()
                    };
                    return a
                }(),
                Ru = function() {
                    return function(a, c, b) {
                        var d = this;
                        this.gd = this.Pb = !1;
                        this.$a = [];
                        this.Bf = [];
                        this.We = [];
                        this.send = function(e, f, g) {
                            e = d.sender(e, d.Vg);
                            f && g && e.then(f, g);
                            return e
                        };
                        this.Be = function(e, f, g) {
                            return new L(function(h, k) {
                                e.push([f, h, k, g])
                            })
                        };
                        this.Oh = function() {
                            d.$a = te(function(g, h) {
                                return g[3].partNum - h[3].partNum
                            }, d.$a);
                            var e = N(function(g,
                                    h, k) {
                                    h = h[3];
                                    return g && k + 1 === h.partNum
                                }, !0, d.$a),
                                f = !!d.$a[d.$a.length - 1][3].end;
                            return e && f
                        };
                        this.yd = function(e) {
                            nh(d.l, e.slice(), function(f) {
                                d.send(f[0], f[1], f[2])
                            }, 20, "s.w2.sf.fes");
                            Te(e)
                        };
                        this.mh = function() {
                            d.gd || (d.gd = !0, d.yd(d.Bf), d.yd(d.We))
                        };
                        this.Og = function(e) {
                            return N(function(f, g) {
                                var h = "page" === g.type && !g.frameId,
                                    k = "eof" === g.data.type || "eof" === g.event,
                                    l = h && !!g.partNum;
                                return {
                                    md: f.md || l,
                                    ld: f.ld || h,
                                    kd: f.kd || k
                                }
                            }, {
                                ld: !1,
                                kd: !1,
                                md: !1
                            }, e)
                        };
                        this.Mh = function(e, f, g) {
                            g ? (e = d.Be(d.$a, e, f[0]), d.Oh() &&
                                (d.yd(d.$a), d.Pb = !0)) : (d.Pb = !0, e = d.send(e));
                            return e
                        };
                        this.mf = function(e, f, g) {
                            var h;
                            f = {
                                J: (h = {}, h["wv-part"] = "" + g, h["wv-type"] = d.Oi, h),
                                K: Ha(),
                                Y: {
                                    ca: f
                                }
                            };
                            e && f.K.D("bt", 1);
                            return f
                        };
                        this.eh = function(e, f, g) {
                            e = d.mf(!1, e, g);
                            return d.Pb ? d.send(e) : d.Be(d.We, e, f)
                        };
                        this.li = function(e, f, g) {
                            e = d.mf(!0, e, g);
                            if (d.Pb) return d.send(e);
                            var h = d.Og(f);
                            g = h.ld;
                            var k = h.kd;
                            h = h.md;
                            var l;
                            g && (l = d.Mh(e, f, h));
                            d.gd ? g || (l = d.send(e)) : (g || (l = d.Be(d.Bf, e, f)), (d.Pb || k) && d.mh());
                            return l
                        };
                        this.l = a;
                        this.Oi = b;
                        this.sender = oa(a, "W", c);
                        this.Vg =
                            c
                    }
                }(),
                Kl = v(function(a) {
                    var c = J(a),
                        b = c.C("isEU");
                    if (Y(b)) {
                        var d = Da(ud(a, "is_gdpr") || "");
                        if (I(d, [0, 1])) c.D("isEU", d), b = !!d;
                        else if (a = Ta(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return J(a).C("isEU")
                }),
                Cf = B("i.e", Kl),
                Su = B("i.ep", function(a) {
                    Kl(a)
                }),
                Tu = B("w2", function(a, c) {
                    function b() {
                        h = !0
                    }
                    var d = J(a),
                        e = K(c);
                    if (!c.Bb || je(a) || !a.MutationObserver || !Fa("Element", a.Element)) return F;
                    Fa("MutationObserver", a.MutationObserver) || nc(a, e).warn("w2mo");
                    var f = Ba(function(k, l) {
                            na(c,
                                l)["catch"](k)
                        }),
                        g = vc(a)(Ng(D([a, c], Wn)))(bl(function(k) {
                            return new Qu(a, k)
                        })),
                        h = !1;
                    hr([g, f])(Za(C(a, "wv2.R.c"), function(k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = H(l.stop, l);
                            var m = d.C("wv2Counter");
                            if (!gi(a, k) || m) b();
                            else if (d.D("wv2Counter", e), d.D("stopRecorder", b), k = ri(a, "7", "6")) {
                                m = new Ru(a, c, k.type);
                                var p = Gl.gf(e, "m", H(m.li, m), k, a),
                                    q = Gl.gf(e, "e", H(m.eh, m), k, a);
                                "onpagehide" in a ? la(a).F(a, ["pagehide"], function(t) {
                                    t.persisted ? (p.flush(!0), q.flush(!0)) : b()
                                }, null) : la(a).F(a, ["beforeunload", "unload"], b);
                                k = Xn();
                                m = k.ti;
                                q.F("ag", k.Fg);
                                q.F("p", m);
                                p.F("see", function(t) {
                                    var y = !1;
                                    x(function(E) {
                                        "page" === E.type && (y = !0)
                                    }, t);
                                    y && (h || q.push({
                                        type: "event",
                                        event: "fatalError",
                                        data: {
                                            code: "invalid-snapshot",
                                            fh: "p.s.f",
                                            stack: ""
                                        }
                                    }), b())
                                });
                                var r = Vb(function(t) {
                                    "eof" === n(t, "data.type") || "eof" === t.event ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0)) : ("event" === t.type ? q : p).push(t)
                                });
                                T(a, b, 864E5);
                                Qb(a, function() {
                                    var t, y;
                                    tb(a, (t = {}, t.counterKey = e, t.name = "webvisor", t.data = (y = {}, y.version = 2, y), t));
                                    l.start(r)
                                })
                            }
                        }
                    }));
                    return function() {
                        return b()
                    }
                }),
                Uu = B("w2.cs", function(a, c) {
                    var b, d = K(c);
                    Zf(a, d, (b = {}, b.webvisor = !!c.Bb, b))
                }),
                Vu = ["rt", "mf"],
                Bf = v(qc, K),
                ai = w(od, gc),
                Wu = ub("isp", function(a, c) {
                    na(c, function(b) {
                        var d = ib(function(h) {
                            return n(b, "settings." + h)
                        }, Vu);
                        if (d && Pd(a)) {
                            var e = md(b) && !fe(a),
                                f = Bf(c);
                            A(f, {
                                Qb: d,
                                status: e ? 3 : 4
                            });
                            if (!e) {
                                e = Sn(a, c, d);
                                var g = function(h) {
                                    f.status = h
                                };
                                return ("mf" === d ? Un : Tn)(a, c, e).then(u(1, g))["catch"](u(2, g))
                            }
                        }
                    })["catch"](C(a, "l.isp"))
                }),
                Ll = B("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g =
                                Oa(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        A(e, d);
                        b && x(c, b);
                        a.fbq = e
                    } else var f = T(a, D([a, c].concat(Ga(d && d.queue)), Ll), 1E3, "fbq.d");
                    return H(ka, null, a, f)
                }),
                cd, Hb, dd, gh = (cd = {}, cd.add_to_wishlist = "add-to-wishlist", cd.begin_checkout = "begin-checkout", cd.generate_lead = "submit-lead", cd.add_payment_info = "add-payment-info", cd),
                hh = (Hb = {}, Hb.AddToCart = "add-to-cart", Hb.Lead = "submit-lead", Hb.InitiateCheckout = "begin-checkout", Hb.Purchase = "purchase", Hb.CompleteRegistration = "register", Hb.Contact = "submit-contact",
                    Hb.AddPaymentInfo = "add-payment-info", Hb.AddToWishlist = "add-to-wishlist", Hb.Subscribe = "subscribe", Hb),
                Qn = (dd = {}, dd["1"] = gh, dd["2"] = gh, dd["3"] = gh, dd["0"] = hh, dd),
                Rn = [hh.AddToCart, hh.Purchase],
                Xu = pa(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                            version: "3",
                            oc: d
                        })) a: {
                        if (M(c) || Qa(c))
                            if (b = Oa(c), d = b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    oc: d
                                };
                                break a
                            }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        oc: G(",", fa(b))
                    });
                    b && a(b)
                }),
                Yu = B("ag.e", function(a, c) {
                    if ("0" === c.ba) {
                        var b = [],
                            d = C(a,
                                "ag.s", D([ya, b], x));
                        na(c, function(e) {
                            if (n(e, "settings.auto_goals") && Ja(a, c) && (e = Ae(a, c, "autogoal").reachGoal)) {
                                e = D([e, c.ud], Pn);
                                var f = Xu(e);
                                e = D([a, e], On);
                                b.push(Ll(a, e));
                                b.push(Ui(a, "dataLayer", function(g) {
                                    g.ya.F(f)
                                }))
                            }
                        });
                        return d
                    }
                }),
                Zu = /[^\d.,]/g,
                $u = /[.,]$/,
                Mn = B("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(Zu, "").replace($u, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (I(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(he(b[0]) + "." + he(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                av = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "),
                        "643"
                    ]
                ],
                bv = v(function(a) {
                    return new RegExp(G("|", a), "i")
                }),
                cv = B("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = Es(a);
                    return (a = ib(function(b) {
                        return bv(b[0]).test(c)
                    }, av)) ? a[1] : "643"
                }),
                dv = v(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h + "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = G("", Zh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                Jn = B("ep.dec", function(a, c) {
                    if (!c || je(a)) return [];
                    var b = Zh(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== ue(b[0])) return [];
                    b = dv();
                    f = G("", f);
                    e = ue(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(ue(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = Tb(a, b);
                    return M(d) ? z(Lr, d) : []
                }),
                Ln = B("ep.ent", function(a, c, b) {
                    a = "" + Xa(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Qa(b)) return "";
                    b = $h("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                Ml = w(Yh, cv),
                Nl = B("ep.ctp", function(a, c, b, d) {
                    var e = Ml(a, b),
                        f = Xh(a, d);
                    Wh(a, c, e, f);
                    Fa("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = Ml(a, b),
                            h = Xh(a, d);
                        if (e !== g || f !== h) e = g, f = h, Wh(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                ev = B("ep.chp", function(a, c, b, d, e) {
                    b && Af(a, c);
                    return d || e ? la(a).F(a.document, ["click"], C(a, "ep.chp.cl", D([a, c, d, e], Kn))) : F
                }),
                jv = B("ep.i", function(a, c) {
                    if (ld(a)) return In(a, c).then(function(b) {
                        var d = b.$g,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            q = d[8],
                            r = d[9],
                            t = d[10],
                            y = d[11],
                            E = d[12],
                            Q = d[13],
                            P = d[14],
                            za = d[15];
                        if (!b.isEnabled) return L.resolve(F);
                        var Ca = le(a, e),
                            ac = le(a, h),
                            Yg = le(a, m),
                            fv = le(a, q),
                            gv = "" + e + f + g === "" + h + k + l;
                        return new L(function(hv,
                            iv) {
                            vc(a)(Za(iv, function() {
                                Ca && Nl(a, c, f, g, t, y, E);
                                ac && !gv && Nl(a, c, k, l, Q, P, za);
                                hv(ev(a, c, Yg || fv, p, r))
                            }))
                        })
                    })
                }),
                wn = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                kv = B("cc.i", function(a, c) {
                    var b = D([a, c], Hn);
                    b = D([a, b, 300, void 0], T);
                    na(c, b)
                }),
                lv = u("9-d5ve+.r%7", R),
                mv = B("ad", function(a, c) {
                    if (!c.Wa) {
                        var b = J(a);
                        if (!b.C("adBlockEnabled")) {
                            var d = function(m) {
                                    I(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                                },
                                e = Rc(a),
                                f = e.C("isad");
                            if (f) d(f);
                            else {
                                var g = u("adStatus", b.D),
                                    h = function(m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.D("isad", m, 1200);
                                        return m
                                    },
                                    k = oa(a, "adb", c);
                                if (!b.C("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + lv().replace(/[^a-v]+/g, "") + "t.gif";
                                    En(a, function() {
                                        return k({
                                            ma: {
                                                za: l
                                            }
                                        }).then(u(!1, h))["catch"](u(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                nv = B("pr.p", function(a, c) {
                    var b, d;
                    if (mg(a)) {
                        var e = oa(a, "5", c),
                            f = Ha((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            K: f,
                            J: (d = {}, d["page-url"] = U(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](C(a, "pr.p.s"))
                    }
                }),
                Vh = !1,
                ov = B("fid", function(a) {
                    var c, b = F;
                    if (!O(a.PerformanceObserver)) return b;
                    var d = J(a);
                    if (d.C("fido")) return b;
                    d.D("fido", !0);
                    var e = new a.PerformanceObserver(C(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                pv = B("lt.p", ub("lt.p", function(a) {
                    var c;
                    if (Fa("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(C(a, "lt.o", function(e) {
                                e && e.getEntries && (e = e.getEntries(), b = N(function(f,
                                    g) {
                                    return f + g.duration
                                }, b, e), Vc(a).D("lt", b))
                            }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                })),
                qv = v(w(V("performance.memory.jsHeapSizeLimit"), Ka("concat", ""))),
                rv = ["availWidth", "availHeight", "availTop"],
                sv = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                tv = ["webgl", "experimental-webgl"],
                Cn = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                xf = u(Pa("ccf"), Sa),
                Bn = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Th = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                zn = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                ih = v(function(a, c) {
                    var b = J(a),
                        d = Ta(a),
                        e = [],
                        f = D([a, c, b, d], Np);
                    xd(a) || Op(a, "14.1") || e.push(D([vn, "pp", ""], f));
                    var g = !ol(a) || vf(a, 68);
                    g && e.push(D([xn, "pu", ""], f));
                    !g || d.Qd || Pd(a) || (e.push(D([un, "zzlc", "na"], f)), e.push(D([tn, "cc", ""], f)));
                    return e.length ? {
                        Ba: function(h, k) {
                            if (0 === b.C("isEU")) try {
                                x(ze, e)
                            } catch (l) {}
                            k()
                        },
                        O: function(h, k) {
                            var l = h.K;
                            if (l && 0 === b.C("isEU")) try {
                                x(Ba(l), e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, w(eb, K)),
                uv = w(function(a) {
                    return (a = n(a, "navigator.plugins")) && Qa(a) ? w(Ga, Ea, ls(function(c, b) {
                        return c.name > b.name ? 1 : 2
                    }), Vb(Kp))(a) : ""
                }, xe(",")),
                vv = function(a) {
                    return function(c) {
                        var b = yb(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.hh;
                        e = e.Xg;
                        try {
                            var g = Ka("getContext", b);
                            d = z(w(R, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = ib(R, d)) ? f(c, {
                            canvas: b,
                            Lg: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Xg: tv,
                        hh: pn
                    }
                }),
                nn = ["name", "lang", "localService",
                    "voiceURI", "default"
                ],
                wv = B("ice", function(a, c, b) {
                    if (c = Ja(a, c))
                        if (b = Nh(a, b)) return Mh(a, c, b), !0
                }),
                xv = B("ice", function(a, c, b) {
                    if (c = Ja(a, c))
                        if (b = Nh(a, b)) return ij(a, b.Wh).then(D([a, c, b], Mh), C(a, "ice.s")), !0
                }),
                yv = ["text", "email", "tel"],
                zv = ["cc-", "name", "shipping"],
                Av = B("icei", function(a, c) {
                    if (jl(a)) {
                        var b = !1,
                            d = F,
                            e = F;
                        na(c, function(f) {
                            if (!(Cf(a) || n(f, "settings.eu") || b)) {
                                f = n(f, "settings.cf") ? xv : wv;
                                var g = D([a, c], f),
                                    h = function(k) {
                                        return Lf(a, k) || !I(k.type, yv) || Va(Eb, z(u(k.autocomplete, gb), zv)) ? !1 : !0
                                    };
                                d = Qh(a,
                                    "input", ["blur"], g, h);
                                e = Qh(a, "form", ["submit"], function(k) {
                                    var l = k.target;
                                    if (l) {
                                        l = hb("input", l);
                                        var m = 0;
                                        x(function(p) {
                                            20 <= m || !h(p) || g({
                                                target: p,
                                                isTrusted: k.isTrusted,
                                                Td: !0
                                            }) && (m += 1)
                                        }, l)
                                    }
                                })
                            }
                        });
                        return function() {
                            b = !0;
                            d();
                            e()
                        }
                    }
                }),
                Lh, Bv = B("p.ai", function(a, c) {
                    if (xd(a) || pf(a)) return na(c, function(b) {
                        var d;
                        if (b = n(b, "settings.sbp")) return Kh(a, A({}, b, (d = {}, d.c = c.id, d)), 10)
                    })
                }),
                Cv = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
                Ol = ub("uah", function(a) {
                    if (!Fa("getHighEntropyValues",
                            n(a, "navigator.userAgentData.getHighEntropyValues"))) return L.reject("0");
                    try {
                        return a.navigator.userAgentData.getHighEntropyValues(Cv).then(function(c) {
                            if (!ia(c)) throw "2";
                            return c
                        }, function() {
                            throw "1";
                        })
                    } catch (c) {
                        return L.reject("3")
                    }
                }),
                Pl = new RegExp(G("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                    "\\$&")),
                en = v(function(a) {
                    var c = sb(a);
                    return (c = Pl.test(c)) ? L.resolve(c) : Ol(a).then(function(b) {
                        try {
                            return N(function(d, e) {
                                return d || Pl.test(e.brand)
                            }, !1, b.brands)
                        } catch (d) {
                            return !1
                        }
                    }, u(!1, R))
                }),
                uc = ["0", "1", "2", "3"],
                Pc = uc[0],
                of = uc[1],
                Dv = uc[2],
                Ql = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"],
                Ih = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(Ql),
                nf = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(Ql).concat(["28",
                    "29", "30", "31"
                ]),
                Ev = "3 13 14 31 15 16 17 28".split(" "),
                de = w(Vb(V("ymetrikaEvent.type")), ks(tc(nf))),
                Fv = {
                    hi: !0,
                    url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                    Gf: "",
                    zf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
                },
                hn = ub("gdpr", function(a, c, b, d, e) {
                    function f(p) {
                        c("10");
                        b.F(Ih, function(q) {
                            var r;
                            q = q.type;
                            l.Zf((r = {}, r.type = q, r));
                            p({
                                value: Jh(q)
                            })
                        })
                    }
                    var g = void 0 === e ? Fv : e;
                    e = g.url;
                    var h = g.Gf,
                        k = g.hi;
                    g = ln(a, g.zf, d.mj);
                    var l = ge(a, d);
                    if (!l) return L.resolve({
                        value: Pc,
                        Sd: !0
                    });
                    if (a._yaGdprLoaded) return new L(function(p) {
                        c("7");
                        f(p)
                    });
                    var m = hd(a, {
                        src: "" + e + (k ? "" : g) + h + ".js"
                    });
                    return new L(function(p, q) {
                        m ? (c("7"), m.onerror = function() {
                            var r;
                            c("9");
                            l.Zf((r = {}, r.type = "GDPR-ok-view-default", r));
                            p(null)
                        }, m.onload = u(p, f)) : (c("9"), q(Pa("gdp.e")))
                    })
                }),
                cc, kn = (cc = {}, cc["GDPR-ok"] = "ok", cc["GDPR-ok-view-default"] = "ok-default", cc["GDPR-ok-view-detailed"] = "ok-detailed", cc["GDPR-ok-view-detailed-0"] = "ok-detailed-all", cc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", cc["GDPR-ok-view-detailed-2"] =
                    "ok-detailed-tech-analytics", cc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", cc),
                cn = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
                Hh = [],
                Fh = Ka("push", Hh),
                bn = v(function(a, c) {
                    var b = c.C("gdpr");
                    return I(b, uc) ? "-" + b : ""
                }),
                Rl = v(Bd),
                Gv = v(function() {
                    var a = N(function(c, b) {
                        "ru" !== b && (c[b] = wl + "." + b);
                        return c
                    }, {}, vg);
                    x(function(c) {
                        a[c] = c
                    }, fa(rl));
                    return a
                }),
                Um = v(function(a) {
                    a = U(a).hostname;
                    return (a = ib(w(V("1"), js("test"), ab(ya)(a)), ua(rl))) && a[0]
                }),
                Sl = function(a,
                    c) {
                    return function(b, d) {
                        var e = K(d);
                        e = Gv(e);
                        var f = Sm(b, e),
                            g = J(b),
                            h = qb(b);
                        return Pd(b) || Md(b) ? {} : {
                            O: function(k, l) {
                                var m = k.K,
                                    p = Dh(b);
                                m = !(m && m.C("pv"));
                                if (!p || h || m || !f.length) return l();
                                if (g.C("startSync")) Rl(b).push(l);
                                else {
                                    g.D("startSync", !0);
                                    p = D([b, f, F, !1], a);
                                    m = qf[0];
                                    if (!m) return l();
                                    m(b).then(p).then(l, w(Sc(l), C(b, c)))["catch"](F)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = ja(a),
                        f = J(a),
                        g = Ta(a);
                    b = Vg(a, "c");
                    var h = Db(a, b);
                    return zb(function(k, l) {
                        function m() {
                            var r = g.C("synced");
                            f.D("startSync", !1);
                            r && (r[l.ji] = p, g.D("synced",
                                r));
                            r = Rl(a);
                            x(ya, r);
                            Te(r)
                        }
                        var p, q = h({
                            Y: {
                                ha: ["sync.cook"],
                                Pa: 1500
                            }
                        }, [va.Sa + "//" + l.Ui + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                            p = e(pb);
                            m()
                        })["catch"](function() {
                            p = e(pb) - 1435;
                            m()
                        });
                        q = u(q, R);
                        return k.then(q)
                    }, L.resolve(), c)["catch"](C(a, "ctl"))
                }, "sy.c"),
                Ib, Qm = (Ib = {}, Ib.brands = "chu", Ib.architecture = "cha", Ib.bitness = "chb", Ib.uaFullVersion = "chf", Ib.fullVersionList = "chl", Ib.mobile = "chm", Ib.model = "cho", Ib.platform = "chp", Ib.platformVersion = "chv", Ib),
                Nm = v(function(a) {
                    return Ol(a).then(Om,
                        Rm)
                }),
                Hv = ub("ot", function(a, c) {
                    if (Je(a)) {
                        var b = la(a);
                        return na(c, C(a, "ot.s", function(d) {
                            if (n(d, "settings.oauth")) {
                                var e = [],
                                    f = od(a, c);
                                e.push(b.F(a, ["message"], C(a, "ot.m", u(f, Mm))));
                                vc(a)(Za(F, C(a, "ot.b", function() {
                                    function g(q) {
                                        var r, t = q.href;
                                        t && Td(t, "https://oauth.yandex.ru/") && !gb(t, "_ym_uid=") && (t = gb(t, "?") ? "&" : "?", q.href += "" + t + Fc((r = {}, r._ym_uid = f, r.mc = "v", r)), b.F(q, ["click"], C(a, "ot.click", function() {
                                            var y = "et=" + l(ea);
                                            q.href += "&" + y
                                        })))
                                    }
                                    var h, k = a.document.body,
                                        l = ja(a),
                                        m = hb("a", k);
                                    x(g, m);
                                    if (Fa("MutationObserver",
                                            a.MutationObserver)) {
                                        m = new a.MutationObserver(C(a, "ot.m", u(function(q) {
                                            q = q.addedNodes;
                                            for (var r = 0; r < q.length; r += 1) {
                                                var t = q[r];
                                                "A" === t.nodeName && g(t)
                                            }
                                        }, x)));
                                        var p = (h = {}, h.childList = !0, h.subtree = !0, h);
                                        m.observe(k, p);
                                        e.push(H(m.disconnect, m))
                                    }
                                })));
                                return D([ze, e], x)
                            }
                        }))
                    }
                }),
                Iv = B("p.cta", function(a) {
                    vc(a)(Za(F, function() {
                        var c = J(a);
                        if (Km(a.document)) {
                            var b = 0;
                            if (bi(a, oe, "cta")) {
                                var d = F,
                                    e = function() {
                                        ci(oe, "cta");
                                        d();
                                        ka(a, b)
                                    };
                                d = la(a).F(a, ["message"], B("p.cta.o", D([a, c, e], Lm)));
                                b = T(a, e, 1500)
                            } else c.D("cta.e",
                                "if")
                        } else c.D("cta.e", "ns")
                    }))
                }),
                jh, Dm = "bidRequested bidAdjustment bidWon bidResponse bidTimeout auctionInit auctionEnd adRenderSucceeded adRenderFailed".split(" "),
                Gm = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"],
                zh = (jh = {}, jh.netRevenue = function(a) {
                    return aa(a) ? "net" === a : !!a
                }, jh),
                dc = {},
                Jv = B("pj", function(a, c) {
                    var b, d = Ja(a, c),
                        e = d && d.params;
                    return e ? (b = {}, b.pbjs = function(f) {
                        M(f) && (f = ha(Eb, z(function(g) {
                            if (ia(g) && g.data && g.event && (ia(g.data) || M(g.data))) {
                                var h = n(g, "data.args");
                                return h ? {
                                    event: g.event,
                                    data: h
                                } : g
                            }
                        }, f)), Bm(f), Hm(a, e))
                    }, b) : F
                }),
                vh = ab(Td)("btn:"),
                xm = ab(Td)("form:"),
                vm = v(function() {
                    var a = Tf();
                    return N(function(c, b) {
                        c[a[b]] = b;
                        return c
                    }, {}, fa(a))
                }),
                um = /(\D\d*)/g,
                Kv = v(qc),
                th = F,
                sm = v(function(a, c) {
                    th = c
                }),
                qm = "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(" "),
                kf = {},
                sc, rh = (sc = {}, sc.copyFromWindow = function(a, c) {
                    var b = a.l,
                        d = a.Na;
                    id(c);
                    if (Td(c, "on")) throw Na("rwp");
                    d.checkPermission({
                        Oa: "globals",
                        M: {
                            Za: 2,
                            key: c
                        }
                    });
                    d = n(b, c);
                    return ae(b, d)
                }, sc.loadScript = function(a, c, b, d) {
                    var e = a.l;
                    a.Na.checkPermission({
                        Oa: "loadScript",
                        M: {
                            url: c
                        }
                    });
                    a = O(b) ? lf("ls.ol", function() {
                        return b.apply(null)
                    }) : F;
                    var f = O(d) ? lf("ls.ol", function() {
                        return d.apply(null)
                    }) : void 0;
                    om(e, c, a, f)
                }, sc.callInWindow = function(a, c) {
                    for (var b = a.l, d = a.Na, e = [], f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
                    id(c);
                    d.checkPermission({
                        Oa: "globals",
                        M: {
                            key: c,
                            Za: 4
                        }
                    });
                    b = n(b, c);
                    if (!O(b)) throw Na("wenf");
                    return b.apply(void 0, e)
                }, sc.createArgumentsQueue = function(a, c, b) {
                    function d() {
                        for (var h = 0; h < arguments.length; h++);
                        g.push(arguments)
                    }
                    var e = a.l;
                    a = a.Na;
                    a.checkPermission({
                        Oa: "globals",
                        M: {
                            key: c,
                            Za: 2
                        }
                    });
                    a.checkPermission({
                        Oa: "globals",
                        M: {
                            key: c,
                            Za: 1
                        }
                    });
                    a.checkPermission({
                        Oa: "globals",
                        M: {
                            key: b,
                            Za: 2
                        }
                    });
                    a.checkPermission({
                        Oa: "globals",
                        M: {
                            key: b,
                            Za: 1
                        }
                    });
                    id(c);
                    id(b);
                    a = c.split(".");
                    var f = b.split(".");
                    if (0 !== c.length && 0 !==
                        b.length && !n(e, c) && !n(e, b)) {
                        var g = [];
                        sh(e, a)[a[a.length - 1]] = d;
                        sh(e, f)[f[f.length - 1]] = g;
                        return d
                    }
                }, sc.copyFromDataLayer = function(a, c) {
                    var b = a.l,
                        d = a.Na,
                        e = a.event;
                    if (!e) throw Na("No dataLayer data");
                    d.checkPermission({
                        Oa: "dataLayer",
                        M: {
                            key: c,
                            Za: 2
                        }
                    });
                    return ae(b, n(e, c))
                }, sc.setInWindow = function(a, c, b, d) {
                    var e = a.l;
                    a = a.Na;
                    void 0 === d && (d = !1);
                    a.checkPermission({
                        Oa: "globals",
                        M: {
                            key: c,
                            Za: 1
                        }
                    });
                    id(c);
                    a = c.split(".");
                    1 !== a.length && (c = a.pop(), e = n(e, G(".", a)));
                    if (!e || !d && ob(e, c)) return !1;
                    e[c] = b;
                    return !0
                }, sc),
                Lv = ["ymab", "rcmx", "yaSurvey", "ym_debug"],
                fm = v(function(a, c) {
                    void 0 === c && (c = gm());
                    rm(a);
                    return function(b) {
                        hm(b) && x(function(d) {
                            if (M(d) && 1 === d[0]) {
                                var e = d[1];
                                I(e, Lv) && lf("p." + e, im)(a, d, c)
                            }
                        }, b.code)
                    }
                }),
                Mv = B("p.ips", function(a, c) {
                    na(c, function(b) {
                        (n(b, "settings.phchange") || n(b, "settings.phhide")) && oh(a, "tag_phone", K(c), b)
                    })
                }),
                Nv = B("p.suic", function(a, c) {
                    na(c, function(b) {
                        var d = Vc(a);
                        if (!d.C("pic") && !md(b) && (b = n(b, "settings.pic"))) {
                            var e = oa(a, "pic");
                            d.D("pic", 1);
                            e({
                                Y: {
                                    bd: !1,
                                    Rc: !0
                                }
                            }, [b]).then(function(f) {
                                aa(f.ub) &&
                                    (f = Tb(a, f.ub)) && (f = n(f, "ymaf")) && Re(a, "_ym_fa", f, 43200)
                            })
                        }
                    })
                }),
                Tl = {},
                Ul = v(qc),
                em = w(Ka("exec", /counterID=(\d+)/), V("1")),
                Vl = pa(function(a, c) {
                    var b, d = Ul(a),
                        e = Ga(c),
                        f = e[0],
                        g = e[1],
                        h = e.slice(2);
                    if (g) {
                        e = dm(a, f);
                        var k = e[0],
                            l = e[1];
                        e = K(l);
                        d[e] || (d[e] = {});
                        d = d[e];
                        c.Ye || Tl[g] && N(function(m, p) {
                            return m || !!p(a, l, h, k)
                        }, !1, Tl[g]) || ("init" === g ? (c.Ye = !0, k ? Jb(a, "" + f, "dc", (b = {}, b.key = f, b)) : a["yaCounter" + l.id] = new a.Ya[va.fc](A({}, h[0], l))) : k && k[g] && d.Th ? (k[g].apply(k, h), c.Ye = !0) : (b = d.cg, b || (b = [], d.cg = b), b.push(wa([f,
                            g
                        ], h))))
                    }
                }),
                bm = B("destruct.e", function(a, c, b) {
                    return function() {
                        var d = J(a),
                            e = c.id;
                        x(function(f, g) {
                            return O(f) && C(a, "dest.fr." + g, f)()
                        }, b);
                        cm(a, K(c));
                        delete d.C("counters")[K(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                ed = J(window);
            ed.Ga("hitParam", {});
            ed.Ga("lastReferrer", window.location.href);
            (function() {
                X.push(function(a, c) {
                    var b;
                    return b = {}, b.firstPartyParams = Zs(a, c), b.firstPartyParamsHashed = tq(a, c), b
                });
                Qd.push("fpp");
                Qd.push("fpmh")
            })();
            (function() {
                var a = J(window);
                a.Ga("getCounters", $s(window));
                fd.push(at);
                Mg.push(function(c, b) {
                    b.counters = a.C("getCounters")
                })
            })();
            (function() {
                X.push(function(a, c) {
                    var b;
                    tb(a, (b = {}, b.counterKey = K(c), b.name = "counter", b.data = fk(c), b))
                })
            })();
            ta["1"] = lb;
            X.push(bt);
            sa["1"] = $b;
            wb(Yf, -1);
            Xb["1"] = [
                [Yf, -1],
                [Pe, 1],
                [Ie, 2],
                [Nb(), 3],
                [oj, 4]
            ];
            X.push(ct);
            X.push(B("p.ar", function(a, c) {
                var b, d = oa(a, "a", c);
                return b = {}, b.hit = function(e, f, g, h, k, l) {
                    var m, p, q, r = {
                        J: {},
                        K: Ha((m = {}, m.pv = 1, m.ar = 1, m))
                    };
                    f = ia(f) ? {
                        title: f.title,
                        Kf: f.referer,
                        M: f.params,
                        $b: f.callback,
                        l: f.ctx
                    } : {
                        title: f,
                        Kf: g,
                        M: h,
                        $b: k,
                        l: l
                    };
                    h = Dd(c);
                    g = e || U(a).href;
                    h.url !== g && (h.ref = h.url, h.url = e);
                    e = f.Kf || h.ref || a.document.referrer;
                    h = mc(a, c, "pv", (p = {}, p.id = c.id, p.url = g, p.ref = e, p), f.M);
                    p = A(r.N || {}, {
                        M: f.M,
                        title: f.title
                    });
                    r = d(A(r, {
                        N: p,
                        J: A(r.J || {}, (q = {}, q["page-url"] = g, q["page-ref"] = e, q))
                    }), c).then(h);
                    return Tc(a, "p.ar.s", r, f.$b || F, f.l)
                }, b
            }));
            ta.a = lb;
            Xb.a = Yb;
            sa.a = $b;
            X.push(Ae);
            ta.g = lb;
            sa.g = $b;
            Xb.g = Yb;
            X.push(dt);
            X.push(et);
            Xb.t = Yb;
            ta.t = lb;
            sa.t = $b;
            X.push(B("cl.p", function(a, c) {
                function b(p, q, r, t) {
                    void 0 === t && (t = {});
                    r ? Ce(a, c, {
                        url: r,
                        pb: !0,
                        Bc: p,
                        Fc: q,
                        sender: e,
                        qg: t
                    }) : h.warn("clel")
                }
                var d, e = oa(a, "2", c),
                    f = [],
                    g = K(c),
                    h = nc(a, g),
                    k = C(a, "s.s.tr", u(Ge(a, g), lq));
                g = {
                    l: a,
                    gb: c,
                    ih: f,
                    sender: e,
                    Cj: J(a),
                    Ug: Zc(a, c.id),
                    Fj: Ec(a),
                    $i: u(u(g, af(a)), w(ya, V("trackLinks")))
                };
                g = C(a, "cl.p.c", u(g, iq));
                g = la(a).F(a, ["click"], g);
                c.jg && k(c.jg);
                var l = C(a, "file.clc", D([!0, !1], b)),
                    m = C(a, "e.l.l.clc", D([!1, !0], b));
                f = C(a, "add.f.e.clc", ft(f));
                return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = g, d
            }));
            Xb["2"] = Yb;
            ta["2"] = lb;
            sa["2"] = $b;
            ta.r = Kd("r");
            sa.r = Vs;
            Ua.push(B("p.r",
                function(a, c) {
                    var b = ht(a),
                        d = oa(a, "r", c),
                        e = C(a, "rts.p");
                    return na(c, D([function(f, g) {
                        var h = {
                                id: g.Tg,
                                ba: g.ba
                            },
                            k = {
                                Y: {
                                    ca: g.Di
                                },
                                K: Ha(g.Ig),
                                J: g.M,
                                N: {
                                    Sb: g.Sb
                                },
                                ma: {
                                    za: g.za
                                }
                            };
                        g.Ha && (k.Ha = sf(g.Ha));
                        h = d(k, h)["catch"](e);
                        return f.then(u(h, R))
                    }, L.resolve(), b], N))["catch"](e)
                }));
            Z("r", function(a) {
                return {
                    O: function(c, b) {
                        var d = c.K,
                            e = void 0 === d ? Ha() : d,
                            f = c.N.Sb,
                            g = Cd(a);
                        d = e.C("rqnl", 0) + 1;
                        e.D("rqnl", d);
                        if (e = n(g, G(".", [f, "browserInfo"]))) e.rqnl = d, Wf(a);
                        b()
                    },
                    Ba: function(c, b) {
                        Zi(a, c);
                        b()
                    }
                }
            }, 1);
            wb(Be, 100);
            Z("1", Be, 100);
            X.push(it);
            Z("n", Pe, 1);
            Z("n", Ie, 2);
            Z("n", Nb(), 3);
            Z("n", Be, 100);
            ta.n = lb;
            sa.n = $b;
            oc({
                Pe: {
                    ea: "accurateTrackBounce"
                }
            });
            X.push(jt);
            ta.m = Kd("cm");
            sa.m = il;
            Z("m", Nb(["u", "v", "vf"]), 1);
            Z("m", Be, 2);
            oc({
                Qg: {
                    ea: "clickmap"
                }
            });
            X.push(kt);
            X.push(lt);
            X.push(mt);
            X.push(nt);
            (function() {
                X.push(ot);
                Qd.push("ecommerce");
                oc({
                    ud: {
                        ea: "ecommerce",
                        Ma: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            Ua.push(st);
            X.push(tt);
            Qd.push("user_id");
            X.push(ut);
            wb(function(a, c) {
                return {
                    Ba: function(b, d) {
                        var e = Ja(a, c);
                        e = e && e.userParams;
                        var f = (b.N || {}).Ke;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            Se.push("_ym_debug");
            Rd.unshift(xt);
            X.push(yt);
            (function() {
                var a, c = (a = {}, a.tp = w(eb, gk, Ob), a.tpid = w(eb, wr), a);
                A(Hd, c)
            })();
            wb(Ad, 20);
            Z("n", Ad, 20);
            Z("1", Ad, 20);
            Rd.unshift(At);
            Hd.fp = function(a, c, b) {
                if (b.J && b.J.nohit) return null;
                b = J(a).C;
                if (!b("fpe")) return null;
                c = zt(c);
                if (c.lh) return null;
                b = b("fht", Infinity);
                a: {
                    var d = n(a, "performance.getEntriesByType");
                    if (O(d)) {
                        if (a = ha(w(R, V("name"), Aa("first-contentful-paint")), d.call(a.performance, "paint")), a.length) {
                            a = a[0].startTime;
                            break a
                        }
                    } else {
                        var e = n(a, "chrome.loadTimes");
                        d = fl(a);
                        if (O(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                            a = 1E3 * e - d;
                            break a
                        }
                        if (a = n(a, "performance.timing.msFirstPaint")) {
                            a -= d;
                            break a
                        }
                    }
                    a = void 0
                }
                return a && b > a ? (c.lh = a, Math.round(a)) : null
            };
            X.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd = B("ecm.a", Ct(a, c)), b.ecommerceRemove = B("ecm.r", Dt(a, c)), b.ecommerceDetail = B("ecm.d", Et(a, c)), b.ecommercePurchase = B("ecm.p", Ft(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = Lt;
                c.pri = Ap;
                c.wv = u(2, R);
                c.ds = Dp;
                c.co = function(b) {
                    return rb(J(b).C("jn"))
                };
                c.td = Rt;
                A(c, (a = {}, a.iss = w(ws, Ob), a.hdl = w(xs, Ob), a.iia = w(ys, Ob), a.cpf = w(Kt, Ob), a.ntf = v(function(b) {
                    b = n(b, "Notification.permission");
                    b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                    return Wa(b) ? null : b ? 2 : 1
                }), a.eu = Gb("isEU"), a.ns = fl, a.np = function(b) {
                    return Xa(b, 0, 100) ? null : rd(we($a(Qf(b), 100)))
                }, a));
                c.pani = Mt;
                c.pci = Nt;
                c.si = Ot;
                c.gi = Pt;
                c.pic = ab(ud)("_ym_fa");
                A(Hd, c)
            })();
            (function() {
                var a = {};
                a.hc = Gb("hc");
                a.oo = Gb("oo");
                a.pmc = Gb("cmc");
                a.lt = function(c) {
                    var b = Vc(c).C("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.re =
                    w(Vq, Ob);
                a.aw = function(c) {
                    c = ib(w(ba, Hc), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return ba(c) ? null : rb(!c)
                };
                a.rcm = Ut;
                a.yu = function(c) {
                    return (c = jd(c, "").C("yandexuid")) && c.substring(0, 25)
                };
                a.ifc = Gb("ifc");
                a.ifb = Gb("ifb");
                a.ecs = Gb("ecs");
                a.csi = Gb("scip");
                a.cdl = Gb("cdl");
                a.eco = v(zp, w(eb, K));
                a.dss = Gb("dSync");
                a.pis = Gb("pis");
                a.ucs = function(c) {
                    return (c = jd(c).C("ucs")) && c.substring(0, 25)
                };
                A(fg, a)
            })();
            sa.er = ad;
            (function(a) {
                try {
                    var c = Vg(a, "er"),
                        b = wp(a, c);
                    Wj.push(function(d, e, f, g) {
                        var h,
                            k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[va.fb] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            gf.push(function(a, c) {
                if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                    var b = K(c);
                    delete J(a).C("counters", {})[b];
                    Sa(Pa("oo.e"))
                }
            });
            He.unshift(function(a) {
                return {
                    O: function(c, b) {
                        J(a).C("oo") || b()
                    }
                }
            });
            wb(function(a, c) {
                return {
                    O: function(b, d) {
                        var e = b.J,
                            f = b.K;
                        !ul[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, ul[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            X.push(Vt);
            Xb.e = Yb;
            ta.e = lb;
            sa.e = $b;
            oc({
                exp: {
                    ea: "experiments"
                }
            });
            kj.experiments = "ex";
            (function() {
                var a;
                qf.push(Wt);
                ta.f = lb;
                A(sa, (a = {}, a.f = hl, a));
                Z("f", Nb(), 1);
                Z("f", sj, 2);
                Z("f", Ad, 20)
            })();
            gf.push(function(a, c) {
                var b = {
                        qa: K(c),
                        od: Ja(a, c),
                        ig: ja(a),
                        Zd: Ta(a)
                    },
                    d = b.ig(pb);
                if (!b.Zd.Qd) {
                    var e = b.Zd.C("ymoo" + b.qa);
                    if (e && 30 > d - e) b = b.qa, delete J(a).C("counters", {})[b], Sa(Pa("uws"));
                    else na(c, Xt(b))["catch"](C(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = [Cb];
                A(sa, (a = {}, a.s = b, a.S = b, a.u = ad, a));
                A(ta, (c = {}, c.s = Db, c.S = lb,
                    c.u = Db, c));
                Z("s");
                Z("u");
                Z("S", Nb(["v", "hid", "u", "vf", "rn"]), 1);
                X.push(B("s", hp))
            })();
            ta["8"] = Db;
            sa["8"] = [eg];
            gl.push([eg, 0]);
            X.push(B("p.us", function(a, c) {
                return na(c, function(b) {
                    if (n(b, "settings.sbp")) return Ei(a, b, {
                        gb: c,
                        Qb: "8",
                        Xd: "cs"
                    })
                })
            }));
            Z("p", Nb($g), 1);
            Pg("pub", function(a, c) {
                return {
                    O: function(b, d) {
                        Di(a, c, b);
                        d()
                    }
                }
            }, 1);
            ta.p = au;
            sa.p = Ea([Bb, Cb]);
            Ua.push(eu);
            oc({
                Bb: {
                    ea: "webvisor",
                    Ma: Eb
                },
                Zg: {
                    ea: "disableFormAnalytics",
                    Ma: Eb
                }
            });
            Z("4", Nb($g), 1);
            ta["4"] = xl;
            sa["4"] = Ea([Bb, Cb, Uc]);
            Ua.push(ku);
            Z("W", Nb($g),
                1);
            Pg("wv", function(a, c) {
                return {
                    O: function(b, d) {
                        b.K.Vb("we", Ob(c.Bb));
                        Di(a, c, b, "rn");
                        d()
                    }
                }
            }, 1);
            sa.W = Ea([Bb, Cb]);
            ta.W = xl;
            Ua.push(Tu);
            X.push(Uu);
            oc({
                Bb: {
                    ea: "webvisor"
                }
            });
            oc({
                bj: {
                    ea: "trustedDomains"
                },
                dc: {
                    ea: "childIframe",
                    Ma: Eb
                }
            });
            X.push(Wu);
            Z("pi");
            ta.pi = Db;
            sa.pi = ad;
            Pg("w", function(a, c) {
                return {
                    O: function(b, d) {
                        if (b.K) {
                            var e = Bf(c),
                                f = e.status;
                            "rt" === e.Qb && f && (b.K.D("rt", f), b.ma || (b.ma = {}), b.ma.Qh = 1 === f ? ai(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            X.push(Yu);
            X.push(jv);
            sa["6"] = Ea([Bb, Cb]);
            ta["6"] = Db;
            X.push(kv);
            X.push(St);
            (function() {
                Mg.push(function(a, c) {
                    c.informer = Fn(a)
                })
            })();
            wb(yf, 6);
            Z("1", yf, 6);
            Z("adb");
            Z("n", yf, 4);
            sa.adb = ad;
            ta.adb = Jj;
            fd.push(mv);
            sa["5"] = $b;
            ta["5"] = lb;
            Xb["5"] = ha(w(Ed, tc([Pe, Ie]), Hc), Yb);
            X.push(nv);
            Z("5", Ad, 20);
            wb(Uh, 7);
            Z("n", Uh, 6);
            Ua.push(ov);
            ta.d = lb;
            Z("d", Nb(["hid", "u", "v", "vf"]), 1);
            sa.d = ad;
            Z("n", function(a, c) {
                return {
                    Ba: function(b, d) {
                        if (!b.N || !b.N.force) {
                            var e = .002,
                                f = c.id === va.Ag ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = yd(a);
                            if (p && O(p.getEntriesByType) && (e = Math.random() > e, f =
                                    Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var q = {}, r = {}, t = {}, y = tl(), E = U(a).href, Q = 0; Q < p.length; Q += 1) {
                                    var P = p[Q],
                                        za = P.name.replace(sl, "").split("?")[0],
                                        Ca = gc(za),
                                        ac = (g = {}, g.dns = Math.round(P.domainLookupEnd - P.domainLookupStart), g.tcp = Math.round(P.connectEnd - P.connectStart), g.duration = Math.round(P.duration), g.response = Math.round(P.responseEnd - P.requestStart), g);
                                    "script" !== P.initiatorType || e || (r[za] = A(ac, (h = {}, h.name = P.name, h.decodedBodySize = P.decodedBodySize, h.transferSize = Math.round(P.transferSize),
                                        h)));
                                    !Tt[Ca] && !y[Ca] || q[za] || f || (q[za] = A(ac, (k = {}, k.pages = E, k)))
                                }
                                fa(q).length && (t.timings8 = q);
                                fa(r).length && (t.scripts = r);
                                if (fa(t).length) oa(a, "d", c)({
                                    K: Ha((l = {}, l.ar = 1, l.pv = 1, l)),
                                    Y: {
                                        ca: Lb(a, t) || void 0
                                    },
                                    J: (m = {}, m["page-url"] = E, m)
                                }, {
                                    id: va.Dg,
                                    ba: "0"
                                })["catch"](C(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            sa.ci = [Cb];
            ta.ci = Db;
            Ua.push(B("p.sci", function(a, c) {
                return na(c, u(a, Dn))["catch"](C(a, "ins.cs"))
            }));
            X.push(pv);
            Ua.push(Jt);
            wb(ih, 8);
            Z("f", ih, 3);
            Z("n", ih, 5);
            fd.push(function(a) {
                return B("fip", function(c) {
                    if (!ol(c) ||
                        Md(c)) {
                        var b = Ta(c);
                        if (!b.C("fip")) {
                            var d = w(Vb(w(function(e, f) {
                                return B("fip." + f, e)(c)
                            }, H(Wr, null))), xe("-"))(a);
                            b.D("fip", d)
                        }
                    }
                })
            }([vv, uv, function(a) {
                var c = n(a, "ApplePaySession"),
                    b = U(a).protocol;
                a = c && "https:" === b && !qb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (O(d))
                        for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function(a) {
                if (a = It(a)) try {
                    for (var c = [], b = 0; b < pl.length; b += 1) {
                        var d = a(pl[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? G("x", e) : ""
            }, function(a) {
                var c = void 0;
                void 0 === c && (c = sv);
                var b = n(a, "navigator") || {};
                c = z(u(b, n), c);
                c = G("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = ma(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Qa(e)
            }, qv, function(a) {
                a = n(a, "screen") || {};
                return G("x", z(u(a, n), rv))
            }, function(a) {
                return G("x", mn(a) || [])
            }, function(a) {
                a = yn(a);
                return M(a) ? G("x", a) : a
            }, function(a) {
                return (a = An(a)) ?
                    G("x", z(D(["", ["matches", "media"]], on), Ea(ns(a)))) : ""
            }]));
            wb(function(a) {
                return {
                    O: function(c, b) {
                        var d = c.K,
                            e = Ta(a).C("fip");
                        e && d && (d.D("fip", e), ee(c, "fip", rb(e)));
                        b()
                    }
                }
            }, 9);
            Z("h", function(a) {
                return {
                    Ba: function(c, b) {
                        var d = c.Ji;
                        Sf(c) && d && J(a).D("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            fd.push(Su);
            Ua.push(Av);
            X.push(Bv);
            oc({
                lj: {
                    ea: "yaDisableGDPR"
                },
                mj: {
                    ea: "yaGDPRLang"
                }
            });
            He.push(function(a, c) {
                return {
                    O: D([a, c], Zm)
                }
            });
            Se.push("gdpr");
            Se.push("gdpr_popup");
            ug.push(function(a, c) {
                var b = ce(a);
                b = de(b);
                if (ha(tc(Ev),
                        b).length) return !0;
                b = c(a, "gdpr");
                return I(b, [Pc, Dv])
            });
            He.push(function(a) {
                return {
                    O: function(c, b) {
                        var d = c.ma || {},
                            e;
                        (e = n(a, "document.referrer")) ? (e = zc(a, e).host, e = jj(e), e = wl + "." + (e || Yt)) : e = jc;
                        c.ma = A(d, {
                            Rh: [e]
                        });
                        b()
                    }
                }
            });
            wb(Sl, 5);
            Z("1", Sl, 6);
            sa.c = ad;
            ta.c = Db;
            Z("1", Ch, 7);
            wb(Ch, 7);
            Rd.push(B("hcp", Ah));
            Ua.push(B("p.ot", Hv));
            Ua.push(ub("cta", Iv, !0));
            Z("n", function(a) {
                var c = J(a);
                return {
                    O: function(b, d) {
                        var e = b.N || {},
                            f = c.C("cta"),
                            g = c.C("cta.e");
                        if (f || g) {
                            e.M || (e.M = {});
                            e.M.__ym || (e.M.__ym = {});
                            var h = {};
                            f ? (f = z(function(k) {
                                var l,
                                    m = n(k, "topic");
                                k = n(k, "version");
                                return l = {}, l.topic = m, l.version = k, l
                            }, f), h.ct = f) : g && (h["ct.e"] = g);
                            A(e.M.__ym, h);
                            b.N = A(b.N || {}, e)
                        }
                        d()
                    }
                }
            }, 7);
            Z("n", Yf, 8);
            X.push(Jv);
            Z("g", function(a, c) {
                return {
                    O: function(b, d) {
                        var e = b.J;
                        if (e && e["page-url"]) {
                            var f = e["page-url"];
                            if (wm(f)) na(c, function(g) {
                                var h, k, l = n(g, "settings.goal_values");
                                if (l) {
                                    var m = (g = zc(a, f).query) ? ck(g) : void 0;
                                    if (m) {
                                        g = b.N || {};
                                        g.M || (g.M = {});
                                        g.M.__ym || (g.M.__ym = {});
                                        var p = vh(f) ? Am : zm;
                                        if (m = ib(u(m, p), l)) {
                                            l = (h = {}, h.cgd = (k = {}, k.rg = m.id, k), h);
                                            a: {
                                                if (h = a.document.body) {
                                                    k =
                                                        m.price_patterns;
                                                    m = Kv(m.id);
                                                    if (m.Fb) {
                                                        if (!Aj(a, m.Fb.element)) {
                                                            h = uh(m.Fb);
                                                            break a
                                                        }
                                                        m.Fb = void 0
                                                    }
                                                    var q = null,
                                                        r = null;
                                                    for (p = 0; p < k.length; p += 1) {
                                                        var t = k[p],
                                                            y = t[1];
                                                        "p" === t[0] ? (q = a, q = (y = tm(y)) ? n(q, "document.evaluate") ? q.document.evaluate(y, q.document, null, q.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null, r = "x") : ld(a) && (q = ec(y, h), r = "c");
                                                        if (q && r) {
                                                            m.Fb = {
                                                                element: q,
                                                                xd: r
                                                            };
                                                            h = uh(m.Fb);
                                                            break a
                                                        }
                                                    }
                                                }
                                                h = void 0
                                            }
                                            h && (l.cgd.gp = rd(we(h.Fi)), l.cgd.mg = h.xd);
                                            A(g.M.__ym, l);
                                            b.N = A(b.N || {}, g)
                                        }
                                    }
                                }
                                d()
                            })["catch"](w(Sc(d),
                                C(a, "a.g.v")));
                            else d()
                        } else d()
                    }
                }
            }, -2);
            Rd.push(B("cdl", function(a) {
                var c = J(a).Ga;
                if (a = n(a, "navigator.cookieDeprecationLabel")) try {
                    a.getValue().then(u("cdl", c), D(["cdl", "e"], c))
                } catch (b) {
                    c("cdl", "d")
                } else c("cdl", "na")
            }));
            Ua.push(Mv);
            sa.pis = il;
            ta.pis = Db;
            Ua.push(B("p.sci", function(a, c) {
                return na(c, function(b) {
                    var d = n(b, "settings.pis");
                    if (d && !md(b)) {
                        b = J(a);
                        var e = b.C;
                        b = b.D;
                        e = e("pis");
                        if (ba(e)) return e = oa(a, "pis"), b("pis", "0"), e({
                            Y: {
                                ha: ["pis"]
                            }
                        }, [d]).then(D(["pis", "1"], b), Sc(D(["pis", "a"], b)))
                    }
                })["catch"](C(a,
                    "pis"))
            }));
            sa.pic = Us;
            ta.pic = Db;
            Ua.push(Nv);
            X.push(function(a, c) {
                var b = Ul(a),
                    d = K(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Th = !0;
                if (b = e.cg) d = Vl(a), x(d, b)
            });
            Ua.unshift(ub("is", function(a, c) {
                na(c, function(b) {
                    (Qe(a) || n(b, "settings.sm")) && oh(a, "tag_debug", K(c), b)
                })
            }));
            x(ab(ya)(window), Rd);
            if (window.Ya && ef) {
                var Wl = va.fc;
                window.Ya[Wl] = ef;
                Ys(window);
                x(w(gd([window, window.Ya[Wl]]), ya), Mg)
            }(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = Vl(a);
                    Ee(a, b, function(e) {
                        e.ya.F(d)
                    }, !0)
                }
            })(window)
        })()
    } catch (ef) {};
}).call(this)