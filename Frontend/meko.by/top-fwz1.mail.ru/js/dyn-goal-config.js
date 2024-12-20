(function() {
    function E(a, c, b, e) {
        c || (c = 1E3);
        var f;
        return function() {
            var g = e || this,
                d = arguments;
            b && !f && a.apply(g, d);
            k.clearTimeout(f);
            f = k.setTimeout(function() {
                !b && a.apply(g, d);
                f = null
            }, c)
        }
    }

    function t(a, c) {
        var b = c ? p.NODE_LIST : p.NODE_ITEM;
        try {
            var e = document.evaluate(a, document, null, b, null);
            switch (e.resultType) {
                case p.NODE_ITEM:
                    return e.singleNodeValue;
                case p.NODE_LIST:
                    for (var b = [], f = 0, g = e.snapshotLength; f < g; f++) b.push(e.snapshotItem(f));
                    return b;
                default:
                    u && console.warn("[tmr-dyn-goals] Error#1", "Unsupported XPathResultType",
                        e.resultType)
            }
        } catch (d) {
            u && console.warn("[tmr-dyn-goals] Error#2", d)
        }
        return null
    }

    function w(a) {
        a = a.textContent.replace(/\s+/g, "").match("(^(?:\\d+(?:\\,|\\.)?\\d*)|(?:\\d*(?:\\,|\\.)?\\d+))(?:[^0-9]*$)|(?:^[^0-9]*)((?:\\d+(?:\\,|\\.)?\\d*)|(?:\\d*(?:\\,|\\.)?\\d+))(?:[^0-9]*$)");
        if (!a || void 0 === a[1] && void 0 === a[2]) return null;
        a = (a[1] || a[2]).split(/\,|\./);
        a = parseFloat((a[0] || 0) + "." + (a[1] || 0));
        return isNaN(a) ? null : a
    }

    function x() {
        for (var a = 0, c = q.length; a < c; a++) y(q[a])
    }

    function y(a, c) {
        var b;
        if (void 0 ===
            c) {
            if (Array.isArray(a.conditions)) {
                b = 0;
                for (var e = a.conditions.length; b < e; b++) y(a, b);
                return
            }
            c = 0;
            b = t(a.conditions.target, !0)
        } else b = t(a.conditions[c].target, !0);
        if (b) {
            a._node = a._node || [];
            a._node[c] = a._node[c] || {};
            a._node[c].target = a._node[c].target || [];
            for (var e = 0, f = b.length; e < f; e++) {
                var g = b[e],
                    d;
                a: {
                    d = a._node[c].target;
                    for (var h = 0, k = d.length; h < k; h++)
                        if (d[h] === g) {
                            d = !0;
                            break a
                        }
                    d = !1
                }
                d || (a._node[c].target.push(g), F(a, c, g))
            }
        }
    }

    function F(a, c, b) {
        b.addEventListener("click", G.bind(this, a, c))
    }

    function G(a, c) {
        if (!v) {
            for (var b = {
                    id: a.id,
                    type: "reachGoal",
                    goal: a.goal
                }, e = 0, f = r.length; e < f; e++) {
                var g = b,
                    d = a,
                    h = c,
                    m = r[e],
                    n = d._node[h][m.key],
                    l = void 0;
                Array.isArray(d.conditions) ? l = d.conditions[h][m.key] : 0 === h && (l = d.conditions[m.key]);
                !n && l && (n = t(l), !z && n && (d._node[h][m.key] = n));
                n && (d._data = d._data || [], d._data[h] = d._data[h] || {}, l = d._data[h][m.key], l || (l = m.parseFn(n), !z && l && (d._data[h][m.key] = l)), l && m.pushFn(g, l))
            }
            u && console.info("[tmr-dyn-goals]: Reach goal", b);
            (k._tmr || (k._tmr = [])).push(b)
        }
    }

    function H(a) {
        if (!v) {
            a: {
                for (var c = {}, b = 0,
                        e = a.length; b < e; b++) {
                    var f = a[b];
                    f.addedNodes && f.addedNodes.length && (c.added = !0);
                    !s && (f.removedNodes && f.removedNodes.length) && (c.removed = !0);
                    if (c.added && (s || c.removed)) {
                        a = c;
                        break a
                    }
                }
                a = c
            }
            a.added && x();
            if (!s && a.removed) {
                a = 0;
                for (c = q.length; a < c; a++) A(q[a])
            }
        }
    }
    var k = window,
        B = document,
        C = location,
        u = "string" === typeof C.search && -1 != C.search.search(/[?&]tmr_debug=1(?:&|$)/),
        z = !0,
        s = !1,
        q = [],
        v = !1,
        p = {
            NODE_ITEM: XPathResult.FIRST_ORDERED_NODE_TYPE,
            NODE_LIST: XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
        },
        r = [{
            key: "value",
            parseFn: w,
            pushFn: function(a, c) {
                a.value = c
            }
        }, {
            key: "productid",
            parseFn: w,
            pushFn: function(a, c) {
                a.params = {
                    product_id: c
                }
            }
        }];
    if (!s) var A = function(a, c) {
            if (void 0 === c) {
                if (a._node && a._node.length)
                    for (var b = 0, e = a._node.length; b < e; b++) A(a, b)
            } else if (a._node[c]) {
                var f, g = a._node[c].target;
                if (g && g.length) {
                    b = 0;
                    for (e = g.length; b < e; b++) f = g[b], D(f) || (g.splice(b, 1), b--, e--)
                }
                b = 0;
                for (e = r.length; b < e; b++) {
                    f = a;
                    var g = c,
                        d = r[b],
                        h = f._node[g][d.key];
                    h && !D(h) && (delete f._node[g][d.key], f._data[g][d.key] && delete f._data[g][d.key])
                }
            }
        },
        D = function(a) {
            try {
                return B.body.contains(a)
            } catch (c) {}
            return !0
        };
    x();
    (function() {
        try {
            if (k.MutationObserver) {
                var a = E(H, 200, !1);
                (new MutationObserver(a)).observe(B.body, {
                    childList: !0,
                    subtree: !0
                })
            }
        } catch (c) {}
    })();
    (function() {
        var a = k.JSON && k.JSON.parse ? k.JSON.parse.bind(k.JSON) : function(a) {
            return {}
        };
        k.addEventListener("message", function(c) {
            var b = null;
            try {
                b = c.data;
                c = typeof b;
                if ("number" === c || "boolean" === c || "string" === c || b.nodeType || b === b.window) b = a(b);
                "LOAD_BUTTONS_SCRIPT" === b.type && (v = !0)
            } catch (e) {}
        })
    })()
})();