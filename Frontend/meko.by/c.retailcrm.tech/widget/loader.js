! function() {
    var e;
    if (!(e = function() {
            var n = window.navigator.userAgent,
                e = function(e, t) {
                    return parseInt(n.substring(e + t, n.indexOf(".", e)), 10)
                },
                t = n.indexOf("MSIE ");
            if (0 < t) return e(t, 5);
            if (0 < n.indexOf("Trident/")) return e(n.indexOf("rv:"), 3);
            var r = n.indexOf("Edge/");
            return 0 < r && e(r, 5)
        }()) || 9 < e) {
        var t, r = (t = function(e) {
            for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; ++n)
                if (-1 !== t[n].src.indexOf(e)) try {
                    return new URL(t[n].src)
                } catch (e) {
                    return new URL(location.protocol + t[n].src)
                }
            return null
        }("/widget/loader.js")) ? t.protocol + "//" + t.host + "/widget/" : null;
        if (r) {
            var a = document.body || document.head;
            window.____consultantBasePath = r;
            var n = function(e, t) {
                var n = document.createElement(e ? "script" : "link");
                t = r + t, e ? (n.type = "text/javascript", n.charset = "utf-8", n.defer = !0, n.async = !0, n.src = t) : (n.rel = "stylesheet", n.type = "text/css", n.href = t), a.appendChild(n)
            };
            n(0, "/static/css/app.24625cc5ed7fed5959aa3d6fad542459.css"), n(1, "/static/js/app.c19e11d9fe641e2a5416.js")
        }
    }
}();