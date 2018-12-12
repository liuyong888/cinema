!
function() {
    "use strict";
    var u = !0,
    t = "_MeiTuanALogObject",
    f = 1,
    b = "_lxsdk_",
    o = "dianping_nova",
    x = "waimai",
    S = "group",
    c = "demo",
    g = "4.10.1",
    k = "lxcuid",
    O = "uuid",
    q = "msid",
    I = "cityid",
    A = "utm",
    j = "uid",
    D = "userid",
    E = "dpid",
    C = "appnm",
    s = "union_id",
    N = "web_env",
    d = "wxid",
    l = "pd_data",
    T = /^(([^? \r\n]*)\?)?([^?# \r\n]+)(#\S+)?$/,
    M = setTimeout,
    v = clearTimeout,
    p = 1,
    a = 2,
    h = 3,
    m = 4,
    e = 5,
    r = 6,
    i = 20,
    F = 7;
    function R(n) {
        var t = n;
        return n && n.code && (t = n.code),
        t === p ? "E_TIME_OUT": t === a ? "E_NO_JSBRIDGE": t === h ? "E_KNB_FAIL": t === m ? "E_KNB_CB_FAIL": t === e ? "E_KNB_NOT_EXIST": t === i ? "ERR_PARAMS": t === r ? "E_KNB_METHOD_NOT_SUPPORT": "unknown error: " + t
    }
    var _ = 200,
    y = 100,
    w = 500,
    L = 600,
    V = -1,
    P = "PV",
    B = "PD",
    U = "MC",
    Q = "SC",
    K = "MV",
    J = "MVL",
    X = "ME",
    $ = "BO",
    W = "BP",
    z = "event_type",
    H = "val_act",
    Z = "val_cid",
    G = "index",
    Y = "element_id",
    nn = "pageView",
    tn = "systemCheck",
    en = "moduleClick",
    rn = "order",
    on = "order_id",
    an = 1e3,
    un = 2,
    cn = 0,
    sn = -1,
    fn = 0,
    dn = 1,
    ln = 10080,
    vn = 1576800,
    pn = 30,
    hn = "_lx_utm",
    mn = "_lxsdk",
    gn = "_lxsdk_cuid",
    _n = "_lxsdk_dpid",
    yn = "_lxsdk_s",
    wn = "latlng",
    bn = "msid",
    xn = "ms",
    Sn = "category",
    kn = "c",
    On = "login_type",
    qn = "lt",
    In = "locate_city_id",
    An = "lci",
    jn = "sdk_ver",
    Dn = "sv",
    En = "lxcuid",
    Cn = "lxid",
    Nn = "val_lab",
    Tn = "val_bid",
    Mn = "val_val",
    Fn = "sf",
    Rn = "__$lx_beacon_",
    Ln = {
        category: u,
        union_id: u,
        lxcuid: u,
        app: u,
        sdk_ver: u,
        appnm: u,
        ch: u,
        lch: u,
        ct: u,
        did: u,
        dm: u,
        ua: u,
        msid: u,
        uuid: u,
        lat: u,
        log: u,
        net: u,
        os: u,
        idfa: u,
        pushid: u,
        subcid: u,
        mac: u,
        imsi: u,
        uid: u,
        logintype: u,
        cityid: u,
        apn: u,
        mno: u,
        pushSetting: u,
        wifi: u,
        bht: u,
        ip: u,
        vendorid: u,
        geohash: u,
        dtk: u,
        sns: u,
        android_id: u,
        version_code: u,
        brand: u,
        utm: u
    },
    Vn = "post",
    Pn = "validation",
    Bn = "__lx" + Pn,
    Un = ".sankuai.com",
    Qn = "report.meituan.com",
    Kn = "hreport.meituan.com",
    Jn = function() {};
    function n() {
        return window
    }
    function Xn() {
        return n().XMLHttpRequest
    }
    var $n, Wn, zn = ($n = Xn(), Wn = $n && "withCredentials" in new $n,
    function() {
        return Wn
    }),
    Hn = /__lxvalidation=([\w.]+)/i,
    Zn = 10,
    Gn = !1,
    Yn = void 0,
    nt = void 0,
    tt = {};
    function et(n) {
        var t, e = "v2/api/" + Pn + "/validate",
        r = "validate-ocean" + Un,
        i = 0 === _e().indexOf("http:") ? "http:": "https:",
        o = i + "//" + n + "/",
        a = Ct.search.match(Hn) || [],
        u = function() {
            var n = oe.get(Bn);
            if (n) {
                var t = n.split("|");
                return {
                    mis: t[0],
                    env: t[1] || ""
                }
            }
            return n || {}
        } (); (t = a && a[1] || u.mis || "") && (oe.set(Bn, t + "|", Zn), o = i + "//" + r + "/" + e + "?mis=" + t);
        return o
    }
    var rt = {
        inWXMP: !1,
        pageValLab: null,
        pageEnv: null,
        use_post: !1,
        cid: null,
        appnm: null,
        quit: null,
        useQR: !1,
        onWebviewAppearAutoPV: !0,
        nativeSDKVer: null
    },
    it = [];
    rt.on = function(n, t) {
        it.push({
            name: n,
            fn: t
        })
    };
    var ot = {
        MVL: !(rt.emit = function(r, i, o, a, u) {
            te.each(it,
            function(n) {
                var t = n.name,
                e = n.fn;
                t === r && e(i, o, a, u)
            })
        }),
        QR: !1,
        getReqId: !1
    };
    function at(n) {
        return !! ot[n]
    }
    function ut(n, t) {
        Zt.isStr(n) && (tt[n] = t)
    }
    function ct(n) {
        Gn = n
    }
    function st() {
        return Gn === f
    }
    function ft(n) {
        return Yn && !n || (Yn = et(Qn)),
        Yn
    }
    var dt = ["wreport.meituan.net", "wreport1.meituan.net", "wreport2.meituan.net"],
    lt = 0;
    function vt(n) {
        if (!nt || n) {
            var t = dt[parseInt(lt++%18 / 6)];
            nt = et(t)
        }
        return nt
    }
    var pt = void 0;
    function ht() {
        if (Rt !== pt) return pt;
        var n = Nt.getElementsByTagName("meta");
        return pt = "off" === de(n, "lx:native-report")
    }
    var mt = cn;
    function gt() {
        return mt
    }
    function _t(n) {
        ht() || (mt = n)
    }
    var yt = !1;
    function wt(n) {
        yt = !!n
    }
    var bt = 5e3,
    xt = 50,
    St = {
        MVL: {}
    },
    kt = void 0,
    Ot = void 0;
    function qt(n, t, e, r) {
        r = r || {};
        var i = t.category,
        o = e.req_id,
        a = e.val_cid,
        u = e.val_bid,
        c = r.tag;
        if (St[n] && Zt.isStr(n) && Zt.isStr(i) && Zt.isStr(o) && Zt.isStr(a) && Zt.isStr(u)) {
            var s = i + "_" + o + "_" + a + "_" + u,
            f = St[n];
            Zt.isObj(f[s]) || (f[s] = {
                env: Zt.extend(!0, {},
                t),
                evs: e,
                lab: []
            }),
            Zt.isObj(c) && (f[s].evs.tag = c);
            var d = Zt.extend(!0, e.val_lab, {
                _seq: e.seq,
                _tm: e.tm
            });
            f[s].lab.push(d),
            function() {
                var n = 0;
                for (var t in St) {
                    var e = St[t];
                    for (var r in e) {
                        var i = e[r].lab;
                        n += i.length || 0
                    }
                }
                xt < n && jt()
            } ()
        }
    }
    function It(n, t) {
        var e = (t || {}).withUnload,
        r = St[n];
        if (Zt.isObj(r)) {
            var i = [];
            for (var o in r) {
                var a = r[o],
                u = !1;
                if (a.lab && a.lab.length) {
                    var c = a.env,
                    s = a.evs,
                    f = {
                        mv_list: a.lab,
                        custom: {
                            _withUnload: !!e
                        }
                    };
                    s.val_lab = f;
                    for (var d = 0,
                    l = i.length; d < l; d++) {
                        var v = i[d];
                        if (!At(v, c)) {
                            v.evs.push(s),
                            u = !0;
                            break
                        }
                    }
                    u || (c.evs = [s], i.push(c))
                }
            }
            i.length && Ot.send(i),
            St[n] = {}
        }
    }
    function At(n, t) {
        var e = 0,
        r = 0;
        for (var i in n) n.hasOwnProperty(i) && e++;
        for (var o in t) t.hasOwnProperty(o) && r++;
        var a = r < e ? n: t,
        u = e <= r ? n: t;
        for (var c in a) {
            if (! ( - 1 < "evs|".indexOf(c + "|"))) if (Zt.isObj(a[c]) && Zt.isObj(u[c])) {
                if (At(a[c], u[c])) return ! 0
            } else if (a[c] !== u[c]) return ! 0
        }
        return ! 1
    }
    function jt(n) {
        var t = (n || {}).withUnload;
        for (var e in St) It(e, {
            withUnload: t
        })
    }
    M(function n() {
        clearTimeout(kt);
        try {
            jt()
        } catch(n) {} finally {
            gt() === cn ? kt = M(n, bt) : clearTimeout(kt)
        }
    },
    100);
    var Dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(n) {
        return typeof n
    }: function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol": typeof n
    },
    Et = n(),
    Ct = location,
    Nt = document,
    Tt = Nt.domain,
    Mt = navigator,
    Ft = Mt.userAgent.toString(),
    Rt = void 0,
    Lt = Array.prototype,
    Vt = Object.prototype,
    Pt = decodeURIComponent,
    Bt = encodeURIComponent,
    Ut = Wt(),
    Qt = Vt.toString,
    Kt = Vt.hasOwnProperty;
    function Jt() {}
    function Xt(n) {
        return void 0 === n ? "undefined": Dt(n)
    }
    function $t(n, t) {
        return Xt(n) === t
    }
    function Wt() {
        return + new Date
    }
    function zt() {
        return Math.random()
    }
    function Ht(n) {
        return $t(n, "number")
    }
    var Zt = {};
    function Gt(n, e, r) {
        var i = void 0,
        o = !0 === n;
        return o || (r = e, e = n),
        e && Zt.isObj(e) || (e = {}),
        r && Zt.isObj(r) || (r = {}),
        te.each(r,
        function(n, t) {
            o && Zt.isObj(r[t]) ? (i = e[t], e[t] = Zt.isObj(i) ? i: {},
            Gt(o, e[t], r[t])) : e[t] = r[t]
        }),
        e
    }
    Zt.trim = function(n) {
        return n.replace(/^[\s\uFEFF\xA0\u3000]+|[\s\uFEFF\xA0\u3000]+$/g, "")
    },
    Zt.now = Wt,
    Zt.rnd = zt,
    Zt.hasOwn = function(n, t) {
        return Kt.call(n, t)
    },
    Zt.extend = Gt;
    var Yt = function(n) {
        return n && "[object Object]" === Qt.call(n)
    };
    Zt.isObj = Yt;
    var ne = function(n) {
        return $t(n, "string")
    };
    Zt.isStr = ne,
    Zt.isFunc = function(n) {
        return $t(n, "function")
    },
    Zt.attr = function(n, t) {
        return n.getAttribute(t)
    },
    Zt.parseQuery = function(n) {
        var i = {};
        if (n) {
            var t = n.replace(T,
            function(n, t, e, r) {
                return r || ""
            }).split("&");
            return te.each(t,
            function(n) {
                var t = n.split("="),
                e = t[0],
                r = t[1] || "";
                e && !Kt.call(i, e) && (i[e] = Pt(r))
            }),
            i
        }
    },
    Zt.stringifyQuery = function(n) {
        var r = [];
        return Zt.isObj(n) && te.each(n,
        function(n, t) {
            var e;
            Zt.isFunc(n) || (Rt !== n && ((e = n) || !$t(e, "object")) || (n = n || ""), r.push(Bt(t) + "=" + Bt(n)))
        }),
        r.join("&")
    },
    Zt.genReqId = function() {
        return "" + 1e3 * Wt() + parseInt(1e3 * zt())
    },
    Zt.run = function(n, t) {
        ee(n) ? te.each(n, t) : t(n)
    },
    Zt.on = function(n, t, e) {
        n.addEventListener ? n.addEventListener(t, e, !1) : n.attachEvent && n.attachEvent("on" + t, e)
    },
    Zt.off = function(n, t, e) {
        n.removeEventListener ? n.removeEventListener(t, e, !1) : n.detachEvent && n.detachEvent("on" + t, e)
    };
    var te = {
        isArray: function(n) {
            return "[object Array]" === Qt.call(n)
        }
    },
    ee = function(n) {
        if (!n) return ! 1;
        var t = n.length;
        return !! te.isArray(n) || !!(n && Ht(t) && 0 <= t) && (!Zt.isObj(n) || (!(1 < t) || t - 1 in n))
    };
    te.isArrayLike = ee,
    te.find = function(e, r, i) {
        var o = void 0;
        return ee(e) && te.each(e,
        function(n, t) {
            if (!0 === r.call(i, n, t, e)) return o = n,
            !1
        }),
        o
    },
    te.filter = function(e, r, i) {
        var o = [];
        return ee(e) && te.each(e,
        function(n, t) {
            r.call(i, n, t, e) && o.push(n)
        }),
        o
    },
    te.toArray = function(n, t, e) {
        var r = [];
        return ee(n) && te.each(n,
        function(n) {
            r.push(t ? t.call(e, n) : n)
        },
        e),
        r
    };
    var re = function(n, t, e) {
        if (n) {
            var r = void 0,
            i = void 0,
            o = void 0;
            if (ee(n)) for (i = 0, o = n.length; i < o && !1 !== t.call(e, n[i], i, n); i++);
            else for (r in n) if (Zt.hasOwn(n, r) && !1 === t.call(e, n[r], r, n)) break
        }
    };
    te.each = re;
    var ie = function(n, t, e) {
        if (n) {
            for (var r = [], i = 0, o = n.length; i < o; i++) {
                var a = t.call(e, n[i], i, n);
                r.push(a)
            }
            return r
        }
    };
    te.slice = function(n, t, e) {
        return Lt.slice.call(te.toArray(n), t, e)
    },
    te.reduce = function(n, t) {
        if (ee(n) && Zt.isFunc(t)) {
            var e = n,
            r = e.length >>> 0,
            i = 0,
            o = void 0,
            a = arguments;
            if (3 === a.length) o = a[2];
            else {
                for (; i < r && !(i in e);) i++;
                if (r <= i) return;
                o = e[i++]
            }
            for (; i < r;) i in e && (o = t(o, e[i], i, e)),
            i++;
            return o
        }
    };
    var oe = {};
    function ae(n) {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        e = void 0,
        r = void 0,
        i = void 0,
        o = void 0,
        a = void 0,
        u = 0,
        c = 0,
        s = "",
        f = [];
        if (!n) return n;
        for (n = ue(n); e = (a = n.charCodeAt(u++) << 16 | n.charCodeAt(u++) << 8 | n.charCodeAt(u++)) >> 18 & 63, r = a >> 12 & 63, i = a >> 6 & 63, o = 63 & a, f[c++] = t.charAt(e) + t.charAt(r) + t.charAt(i) + t.charAt(o), u < n.length;);
        switch (s = f.join(""), n.length % 3) {
        case 1:
            s = s.slice(0, -2) + "==";
            break;
        case 2:
            s = s.slice(0, -1) + "="
        }
        return s
    }
    function ue(n) {
        var t, e = "",
        r = void 0,
        i = void 0,
        o = void 0;
        for (r = i = 0, t = (n = (n + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, o = 0; o < t; o++) {
            var a = n.charCodeAt(o),
            u = null;
            a < 128 ? i++:u = 127 < a && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128),
            null !== u && (r < i && (e += n.substring(r, i)), e += u, r = i = o + 1)
        }
        return r < i && (e += n.substring(r, n.length)),
        e
    }
    oe.del = function(n, t) {
        var e = n + "=;path=/;domain=" + t,
        r = new Date;
        return r.setFullYear(1970),
        e += ";expires=" + r.toUTCString(),
        Nt.cookie = e,
        !0
    },
    oe.get = function(n) {
        var t = Nt.cookie.match(new RegExp("(?:^|;)\\s*" + n + "=([^;]+)"));
        return Pt(t ? t[1] : "")
    },
    oe.set = function(n, t, e, r) {
        r = r || Nt.domain;
        var i = void 0,
        o = void 0,
        a = void 0,
        u = n + "=" + Bt(t) + ";path=/;domain=" + r;
        Rt === e || isNaN(e) || (i = new Date, o = 60 * parseInt(e, 10) * 1e3, a = i.getTime() + o, i.setTime(a), u += ";expires=" + i.toUTCString());
        try {
            return Nt.cookie = u,
            !0
        } catch(n) {
            return ! 1
        }
    },
    oe.top = function(n, t, e) {
        var r = Nt.domain,
        i = r.split("."),
        o = i.length,
        a = o - 1,
        u = void 0,
        c = !1;
        for (t = "" + t; ! c && 0 <= a && (r = i.slice(a, o).join("."), oe.set(n, t, e, r), u = oe.get(n), Rt !== u && (c = u === t), a--, !c););
    },
    oe.del = function(n) {
        return oe.top(n, "", -100)
    };
    var ce = window.btoa,
    se = ae;
    try {
        Zt.isFunc(ce) && ce(ue(Ft)) === ae(Ft) && (se = function(n) {
            return ce(ue(n))
        })
    } catch(n) {}
    var fe = se;
    function de(n, t) {
        var e = void 0,
        r = te.find(n,
        function(n) {
            return Zt.attr(n, "name") === t
        });
        return r && (e = Zt.attr(r, "content")),
        e
    }
    function le() {
        var n = Et[t];
        return Et[n]
    }
    var ve, pe = (ve = void 0, {
        update: function(n) {
            ve = n
        },
        get: function() {
            return ve
        }
    });
    function he(n) {
        var t = {
            duration: function(n) {
                var t = void 0,
                e = pe.get(),
                r = Wt();
                if (n && e) t = e,
                pe.update(r);
                else {
                    var i = le(),
                    o = Et.performance && Et.performance.timing; (t = o && o.requestStart) || (t = i ? i.l: Ut),
                    pe.update(r)
                }
                return r - t
            } (!0 === n)
        },
        e = void 0,
        r = rt.quit;
        return Zt.isFunc(r) && (e = r() || {}),
        t = Zt.extend(t, e || {})
    }
    function me(n, t) {
        t[on]
    }
    var ge = 2032;
    function _e() {
        return Ct.protocol
    }
    /trident/i.test(Ft) || /msie/i.test(Ft) || !/mozilla.+webkit.+chrome.+/i.test(Ft) || (ge = 6e3);
    var ye = 0;
    function we(n, t) {
        var e = /^((\d+\.)+\d+).*$/;
        if ("string" !== Xt(n) || "string" !== Xt(t)) return NaN;
        if (!e.test(n) || !e.test(t)) return NaN;
        for (var r = n.replace(e, "$1").split("."), i = t.replace(e, "$1").split("."), o = 0, a = Math.max(r.length, i.length); o < a; o++) {
            if (!r[o] || !i[o])(!r[o] && r || !i[o] && i).push("0");
            var u = r[o].toString().length,
            c = i[o].toString().length;
            if (u !== c) {
                var s = c < u ? i: r;
                s[o] = Array(Math.abs(u - c) + 1).join("0") + s[o].toString()
            }
        }
        var f = parseInt(r.join("")),
        d = parseInt(i.join(""));
        return f == d ? 0 : d < f ? 1 : -1
    }
    function be(e, r, i, o, a, u, c) {
        return function(n) {
            if (!e) {
                e = !0;
                try {
                    if (r && new Date - i < 50) return;
                    if (o) return;
                    if (o = !1, !c()) {
                        var t = he();
                        a("pageDisappear", t, {
                            shouldStore: !0
                        })
                    }
                    jt({
                        withUnload: !0
                    })
                } catch(n) {}
                u && u(n)
            }
        }
    }
    var xe = 4,
    Se = "",
    ke = function(n) {
        xe = n
    },
    Oe = function() {
        return Se && 3 === xe
    },
    qe = function(n) {
        Se = n
    },
    Ie = function() {
        return Se
    },
    Ae = Et.sessionStorage,
    je = Ft,
    De = [{
        n: c,
        r: /lingxi\/demo\/\d+/i,
        v: je
    },
    {
        n: o,
        r: /dp\/com\.dianping\.[\w.]+\/([\d.]+)/i,
        v: je
    },
    {
        n: x,
        r: /\bmeituanwaimai-c\/\d+\./i,
        v: je
    },
    {
        n: "moviepro",
        r: /\bmoviepro/i,
        v: je
    },
    {
        n: "movie",
        r: /\bmaoyan\b/i,
        v: je
    },
    {
        n: S,
        r: /\bmeituan \d+|meituangroup\/\d+\./i,
        v: je
    }],
    Ee = /android/i.test(je),
    Ce = "",
    Ne = Ee,
    Te = !1,
    Me = !1,
    Fe = "www",
    Re = !1;
    if (/\bandroid|mobile\b|\bhtc\b/i.test(je)) {
        Fe = "i",
        Ne = !0,
        te.each(De,
        function(n) {
            if (n.r.test(n.v)) return Ce = n.n,
            !1
        }),
        /\btitans(no){0,1}x\b/i.test(je) && (Te = !0);
        var Le = /iphone/i.test(je),
        Ve = /ipad/i.test(je); (Le || Ve) && (Me = !0),
        Ce && (Le ? Fe = "iphone": /android/i.test(je) ? Fe = "android": Ve && (Fe = "ipad"))
    } else {
        var Pe = je.match(/(msie) (\d+)|Trident\/(d+)/i);
        Pe && (Re = !0, Pe && parseInt(Pe[2], 10))
    }
    var Be = Et.screen.width + "*" + Et.screen.height,
    Ue = Te || / knb\/\d+/i.test(Ft),
    Qe = function() {
        return Ne && Ue
    },
    Ke = Ft.replace(/^.*TitansX\/([\d.]+)\s.*$/i, "$1"),
    Je = !(!Ne || !/\sMicroMessenger/.test(je)),
    Xe = A + "_source",
    $e = A + "_medium",
    We = A + "_term",
    ze = A + "_campaign",
    He = A + "_content",
    Ze = void 0,
    Ge = !1;
    function Ye(n) {
        if (!n) return Rt;
        var e = Rt,
        r = /^utm_(source|medium|term|content|campaign)$/;
        return te.each(n,
        function(n, t) {
            r.test(t) && (!e && (e = {}), e[t] = n)
        }),
        e
    }
    function nr(n) {
        if (n) {
            Ze = n;
            var t = Zt.stringifyQuery(n);
            return oe.del(hn, Tt),
            oe.top(hn, t, ln, Tt),
            !0
        }
        return ! 1
    }
    function tr(n, t) {
        var o, e, r, i, a;
        return (!Ze && !Ge || n) && (n = n || Ct.href, t = t || Nt.referrer, a = n, (Ze = Ye(Zt.parseQuery(a)) ||
        function(n) {
            var t = Rt,
            e = n.match(/^[\w-]+:\/\/([^/] + )( ? :\ / ([ ^ ?] + ) ? ) ? /),a=e&&e[1];if(a){var u=Zt.parseQuery(n),r="daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q m.baidu:word wap.baidu:word baidu:word Baidu:bs www.soso:w wap.soso:key www.sogou:query wap.sogou:keyword m.so:q m.sogou:keyword so.com:pq youdao:q sm.cn:q sm.cn:keyword haosou:q".split(" "),c="",s="";te.each(r,function(n){var t=n.split(":"),e=t[0],r=t[1],i=u[r],o=-1<e.indexOf(".")?e:"."+e+".";if(-1<a.indexOf(o.toLowerCase())&&(s=e,c=i))return!1}),s&&((t={})[Xe]=s,t[$e]="organic",c&&(t[We]=c))}return t}(t))?nr(Ze):(i=oe.get(hn),Ze=T.test(i)?Ye(Zt.isStr(i)?Zt.parseQuery(i):null):Ze),Ze||(o=void 0,e=oe.get("__utmz"),(r=e&&e.match(/ (utmc(tr | sr | cn | md | ct)) = ([ ^ |()] + ) / g)) && te.each(r,
            function(n) {
                var t = n.split("="),
                e = t[0],
                r = void 0,
                i = t[1] || "";
                "utmcsr" === e ? r = Xe: "utmccn" === e ? r = ze: "utmcmd" === e ? r = $e: "utmcct" === e ? r = He: "utmctr" === e && (r = We),
                r && ((o = o || {})[r] = i)
            }),
            nr(Ze = o)),
            Ge = u),
            Ze
        }
        var er, rr, ir, or, ar = Et.JSON;
        ar || (ar = {
            parse: function(n) {
                return new Function("return (" + n + ")")()
            },
            stringify: (er = te.isArray, rr = {
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t"
            },
            ir = function(n) {
                return rr[n] || "\\u" + (n.charCodeAt(0) + 65536).toString(16).substr(1)
            },
            or = /[\\"\u0000-\u001F\u2028\u2029]/g,
            function n(t) {
                if (null == t) return "null";
                if ($t(t, "number")) return isFinite(t) ? t.toString() : "null";
                if ($t(t, "boolean")) return t.toString();
                if ($t(t, "object")) {
                    if ("function" === Xt(t.toJSON)) return n(t.toJSON());
                    if (er(t)) {
                        for (var e = "[",
                        r = 0; r < t.length; r++) e += (r ? ", ": "") + n(t[r]);
                        return e + "]"
                    }
                    if (Zt.isObj(t)) {
                        var i = [];
                        for (var o in t) t.hasOwnProperty(o) && i.push(n(o) + ": " + n(t[o]));
                        return "{" + i.join(", ") + "}"
                    }
                }
                return '"' + t.toString().replace(or, ir) + '"'
            })
        });
        var ur = ar,
        cr = "__lxsdk_",
        sr = Et.localStorage;
        function fr(n) {
            return cr + n
        }
        function dr() {
            return {
                length: 0,
                _data: {},
                setItem: function(n, t) {
                    return this.length++,
                    this._data[n] = String(t)
                },
                getItem: function(n) {
                    return this._data.hasOwnProperty(n) ? this._data[n] : Rt
                },
                removeItem: function(n) {
                    return this.length--,
                    delete this._data[n]
                },
                clear: function() {
                    return this.length = 0,
                    this._data = {}
                },
                key: function(n) {
                    var t = [],
                    e = this._data;
                    return te.each(e,
                    function(n) {
                        Zt.hasOwn(e, n) && t.push(n)
                    }),
                    t[n]
                }
            }
        }
        var lr = {
            get: function(n) {
                n = fr(n);
                var t = sr.getItem(n);
                return t = Rt !== t ? ur.parse(t) : t
            },
            set: function(n, t) {
                return lr.del(n),
                sr.setItem(fr(n), ur.stringify(t))
            },
            keys: function() {
                for (var n = [], t = void 0, e = 0; e < sr.length; e++) 0 === (t = sr.key(e)).indexOf(cr) && n.push(t.replace(cr, ""));
                return n
            },
            del: function(n) {
                try {
                    return sr.removeItem(fr(n))
                } catch(n) {}
            },
            clear: function() {
                for (var n = this.keys(), t = 0; t < n.length; t++) this.del(n[t])
            }
        };
        if (sr) {
            if (sr) {
                var vr = "___lxtest";
                lr.nt = !0;
                try {
                    lr.set(vr, 1),
                    1 !== lr.get(vr) ? lr.clear() : lr.del(vr)
                } catch(n) {
                    try {
                        lr.clear(),
                        sr.setItem(vr, 1),
                        sr.removeItem(vr)
                    } catch(n) {
                        sr = dr(),
                        lr.nt = !1
                    }
                }
            }
        } else sr = dr(),
        lr.nt = !1;
        var pr = "tag",
        hr = 18e5;
        function mr(n, t, e, r, i, o) {
            var a = {};
            a.c = n,
            a.k = t,
            a.v = e,
            a.t = r || +new Date,
            a.u = i || "",
            a.r = o || "",
            this.toJSON = function() {
                return Zt.extend(!0, {},
                a)
            }
        }
        var gr = {
            set: function(n, t, e) {
                var r = void 0,
                i = [],
                o = lr.get(pr) || [];
                if (!Zt.isStr(t) || "" === t) return ! 1;
                for (var a = 0,
                u = o.length; a < u; a++) _r(r = o[a]) || (n === r.c ? t !== r.k && i.push(r) : i.push(r));
                return r = new mr(n, t, e, +new Date),
                i.push(r.toJSON()),
                lr.set(pr, i),
                !0
            },
            get: function(n, t) {
                var e = void 0,
                r = lr.get(pr);
                if (r && r.length) return e = {},
                te.each(r,
                function(n) {
                    var t = {};
                    t[n.k] = n.v,
                    _r(n) || (e[n.c] = Zt.extend(!0, e[n.c] || {},
                    t))
                }),
                n && t ? e[n] && e[n][t] : n ? e[n] : e
            },
            getAll: function() {
                var n = lr.get(pr),
                e = {},
                r = void 0;
                return te.each(n,
                function(n) {
                    var t = void 0; ! _r(n) && n.v && (r = !0, (t = {})[n.k] = n.v, e[n.c] = Zt.extend(!0, e[n.c], t))
                }),
                r && e
            },
            clear: function(t, e) {
                if (!arguments.length) return lr.set(pr, []);
                if (Zt.isStr(t)) {
                    var n = lr.get(pr),
                    r = [];
                    te.each(n,
                    function(n) { (e !== Rt && n.k !== e || t !== n.c) && r.push(n)
                    }),
                    lr.set(pr, r)
                }
            }
        };
        function _r(n) {
            var t = Zt.now();
            return hr < t - n.t
        }
        function yr(n) {
            return n
        }
        function wr(n) {
            try {
                n(qr(this, xr), qr(this, br))
            } catch(n) {
                if (this._state === Sr) return Ar(new wr(yr), br, n)
            }
        }
        wr.prototype.then = function(n, t) {
            return function(n, t, e, r) {
                Xt(e) === kr && (t._onFulfilled = e);
                Xt(r) === kr && (t._onRejected = r);
                n._state === Sr ? n[n._pCount++] = t: Ir(n, t);
                return t
            } (this, new wr(yr), n, t)
        },
        wr.all = function(l) {
            return new wr(function(r, e) {
                for (var n, t, i, o = 0,
                a = l.length,
                u = [], c = 0, s = void 0, f = function(e) {
                    return function(n) {
                        if (e.value = n, e.state = xr, ++c === e.len && !s) {
                            var t = function(n) {
                                var t = [];
                                for (o = 0; o < a; o++) t.push(n[o] ? n[o].value: void 0);
                                return t
                            } (u);
                            r(t)
                        }
                    }
                },
                d = function(t) {
                    return function(n) {
                        t.value = n,
                        t.state = br,
                        c++,
                        s || (s = !0, e(n))
                    }
                }; o < a; o++) t = n = void 0,
                t = l[o],
                i = {
                    value: null,
                    index: o,
                    state: null,
                    len: a
                },
                u.push(i),
                n = i,
                t.then ? t.then(f(n), d(n)) : wr.resolve(t).then(f(n), d(n))
            })
        },
        wr.resolve = function(t) {
            if (t instanceof wr) return t;
            if (Zt.isFunc(t.then)) {
                var e = t.then.bind(t);
                return new wr(function(n, t) {
                    e(n, t)
                })
            }
            return new wr(function(n) {
                n(t)
            })
        },
        wr.reject = function(e) {
            return new wr(function(n, t) {
                t(e)
            })
        };
        var br = 0,
        xr = 1,
        Sr = 2,
        kr = "function",
        Or = "object";
        function qr(t, e) {
            return function(n) {
                return Ar(t, e, n)
            }
        }
        function Ir(e, r) {
            return setTimeout(function() {
                var n = void 0,
                t = e._state ? r._onFulfilled: r._onRejected;
                if (void 0 !== t) {
                    try {
                        n = t(e._value)
                    } catch(n) {
                        return void Ar(r, br, n)
                    }
                    jr(r, n)
                } else Ar(r, e._state, e._value)
            })
        }
        function Ar(n, t, e) {
            if (n._state === Sr) {
                n._state = t,
                n._value = e;
                for (var r = 0,
                i = n._pCount; r < i;) Ir(n, n[r++]);
                return n
            }
        }
        function jr(t, n) {
            if (n !== t || !n) {
                var e = void 0,
                r = Xt(n);
                if (null === n || r !== kr && r !== Or) Ar(t, xr, n);
                else {
                    try {
                        e = n.then
                    } catch(n) {
                        return void Ar(t, br, n)
                    }
                    Xt(e) === kr ?
                    function(t, e, n) {
                        try {
                            n.call(e,
                            function(n) {
                                e && (e = null, jr(t, n))
                            },
                            function(n) {
                                e && (e = null, Ar(t, br, n))
                            })
                        } catch(n) {
                            e && (Ar(t, br, n), e = null)
                        }
                    } (t, n, e) : Ar(t, xr, n)
                }
                return t
            }
            Ar(t, br, new Error("promise_circular_chain"))
        }
        wr.prototype._state = Sr,
        wr.prototype._pCount = 0;
        var Dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(n) {
            return typeof n
        }: function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol": typeof n
        },
        Er = function() {
            var n = !("undefined" == typeof window || !window.navigator || !window.navigator.userAgent);
            function e() {
                return n ? navigator.userAgent.toLowerCase() : ""
            }
            function r(n) {
                for (var t = {},
                e = n.replace(/\([^)]+\)/g, "").split(/\s+/), r = "", i = 0; i < e.length; i += 1) {
                    var o = e[i],
                    a = o.lastIndexOf("/");
                    if (a < 0) r = o;
                    else {
                        var u = o.slice(0, a);
                        r && (u = r + " " + u, r = ""),
                        t[u] = o.slice(a - o.length + 1)
                    }
                }
                return t
            }
            function c(n) {
                var t = n || "0",
                e = t.match(/^(\d*)/);
                return e ? Number(e[1]) : 0
            }
            function o(n, t) {
                for (var e = "string" == typeof n ? n.split(".") : ["0"], r = "string" == typeof t ? t.split(".") : ["0"], i = Math.max(e.length, r.length), o = 0; o < i; o += 1) {
                    var a = c(e[o]),
                    u = c(r[o]);
                    if (u < a) return 1;
                    if (a < u) return - 1
                }
                return 0
            }
            function a(n) {
                var t = -1,
                e = document.createElement("iframe");
                function r() {
                    clearTimeout(t);
                    var n = e.parentNode;
                    n && n.removeChild(e),
                    e.onload = null,
                    e.onerror = null,
                    e = null
                }
                e.style.display = "none",
                e.onload = r,
                e.onerror = r,
                e.src = n,
                document.documentElement.appendChild(e),
                t = setTimeout(r, 3e3)
            }
            function u(n) {
                window.KNBTitansX && window.KNBTitansX.sendMessage ? window.KNBTitansX.sendMessage(n) : window.prompt(n)
            }
            function s(n) {
                window.prompt(n)
            }
            var t, i = {
                getDefaultSender: function() {
                    var i = Function.prototype,
                    n = e();
                    if (/ios|iphone|ipod|ipad/.test(n)) i = a;
                    else if (/android/.test(n)) {
                        var t = r(n);
                        i = 0 < o(t.android, "4.2.0") ? u: s
                    }
                    return function(n, t, e) {
                        var r = "js://_?method=" + n + "&callbackId=" + e + "&args=" + encodeURIComponent(t);
                        i(r)
                    }
                },
                compareVersion: o,
                parseUserAgent: r,
                canUseSlot: (t = r(e()), 0 <= o(t.titansx || t.titansnox, "11.13"))
            },
            f = i.getDefaultSender,
            d = i.compareVersion,
            l = i.parseUserAgent,
            v = i.canUseSlot,
            p = "function" == typeof Symbol && "symbol" === Dr(Symbol.iterator) ?
            function(n) {
                return void 0 === n ? "undefined": Dr(n)
            }: function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol": void 0 === n ? "undefined": Dr(n)
            },
            h = {
                sender: null
            };
            function m(n) {
                return "DPApp_callback_" + n
            }
            function g(n, t) {
                var e = m(n),
                r = window[e];
                r && (r(t), r.isSafeDelete && (window[e] = void 0))
            }
            function _(n) {
                var t = n || "DPApp";
                if (!window[t] || !window[t].KNBCore) {
                    var e = {
                        dequeue: window[t] && window[t].dequeue || Function.prototype,
                        KNBCore: !0
                    };
                    Object.defineProperty(e, "callback", {
                        configurable: !1,
                        enumerable: !0,
                        writable: !1,
                        value: g
                    }),
                    window[t] = function(n, t) {
                        if (n && "object" === (void 0 === n ? "undefined": p(n))) {
                            var e = n;
                            return Object.keys(t).forEach(function(n) {
                                e[n] = t[n]
                            }),
                            e
                        }
                        return t
                    } (window[t], e)
                }
            }
            var y, w = {
                bindSender: function(n) {
                    "function" == typeof n && (h.sender = n)
                },
                sendMessage: function(n, t, e, r) {
                    var i = v && r ? "KNBSlot" + r: void 0;
                    _(i);
                    var o = function(n) {
                        if (!/^[a-zA-Z0-9]*$/.test(n)) throw new Error("illegal slot name");
                        var t = Math.floor(1e3 * Math.random());
                        return + (Date.now().toString().slice( - 5) + "" + t) + (n ? "_" + n: "")
                    } (i),
                    a = m(o),
                    u = e || {};
                    window[a] = function() {
                        var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.status,
                        e = "action" === t ? "handle": t;
                        "0" === String(e) && (e = "success");
                        var r = u[e] || u.fail;
                        if ("function" == typeof r) return r(n)
                    },
                    u.handle || (window[a].isSafeDelete = !0),
                    h.sender && h.sender(n || "", JSON.stringify(t || {}), o)
                },
                fireCallback: g,
                compareVersion: d,
                parseUserAgent: l
            };
            return y = w,
            "undefined" != typeof window && (h.sender = f(), window.KNBCore || (window.KNBCore = y)),
            w
        } (),
        Cr = !1,
        Nr = [],
        Tr = void 0,
        Mr = void 0;
        function Fr(n) {
            ht() || !Qe() ? n(e, Mr) : c === Ce ? n(Rt, Mr) : Cr ? n(Tr, Mr) : (Nr.push(n), Cr ? n(Rt, Mr) : new Promise(function(n) {
                n({
                    ready: function(n) {
                        return n()
                    },
                    use: function(n, t) {
                        t = t || {},
                        Er.sendMessage(n, {
                            data: t.data || {}
                        },
                        t, "LXAnalyticsSDK")
                    }
                }),
                Cr = !0
            }).then(function(n) {
                var t, e, r = Mr = n;
                t = Tr,
                e = r,
                te.each(Nr,
                function(n) {
                    n(t, e)
                }),
                Nr = []
            }))
        }
        var Rr = 500,
        Lr = "getUserInfo";
        function Vr() {
            return new wr(function(o, r) {
                Fr(function(n, t) {
                    var e = Et.DPApp,
                    i = M(function() {
                        o({})
                    },
                    Rr);
                    t ? t.ready(function() {
                        t.use(Lr, {
                            success: function(n) {
                                var t, e, r;
                                v(i),
                                o((e = {},
                                (r = (t = n)[E]) && "0" !== r || "dp" !== t.type ? t[E] && (e[E] = t[E]) : e[E] = t[O], "dp" !== t.type && t[O] && (e[O] = t[O]), t.unionId && (e.unionId = t.unionId), t.userId && (e.userId = t.userId), e))
                            },
                            fail: function(n) {
                                v(i),
                                r({
                                    code: h
                                })
                            }
                        })
                    }) : e && e[Lr] ? e.ready(function() {
                        e[Lr]({
                            success: function(n) {
                                v(i);
                                var t = {}; (n.dpid || n.userId) && (t.dpid = n.dpid, t.userId = n.userId, t.unionId = n.unionId),
                                o(t)
                            },
                            fail: function(n) {
                                v(i),
                                r({
                                    code: a,
                                    res: n
                                })
                            }
                        })
                    }) : r({
                        code: a
                    })
                })
            })
        }
        var Pr, Br = (Pr = function() {
            for (var n = 1 * new Date,
            t = 0; n === 1 * new Date && t < 200;) t++;
            return n.toString(16) + t.toString(16)
        },
        function() {
            var n = (screen.height * screen.width).toString(16);
            return Pr() + "-" + Math.random().toString(16).replace(".", "") + "-" +
            function() {
                var n = je,
                t = void 0,
                e = void 0,
                i = [],
                r = 0;
                function o(n, t) {
                    var e = void 0,
                    r = 0;
                    for (e = 0; e < t.length; e++) r |= i[e] << 8 * e;
                    return n ^ r
                }
                for (t = 0; t < n.length; t++) e = n.charCodeAt(t),
                i.unshift(255 & e),
                4 <= i.length && (r = o(r, i), i = []);
                return 0 < i.length && (r = o(r, i)),
                r.toString(16)
            } () + "-" + n + "-" + Pr()
        });
        function Ur() {
            var n, t = oe.get(gn) || Br();
            return (n = t) && oe.top(gn, n, vn),
            t
        }
        function Qr() {
            return Math.floor(1 + 65535 * Zt.rnd()).toString(16).substring(1)
        }
        function Kr(n) {
            var t = n.match(/(\d+)(?:\.(\d+)(?:\.(\d+))?)?/),
            e = [];
            if (t) for (var r = 1; r < t.length; r++) e.push(parseInt(t[r] || 0));
            return e
        }
        function Jr(n, t) {
            var e = Kr(n),
            r = Kr(t);
            return ! (e[0] < r[0]) && (!(e[0] === r[0] && e[1] < r[1]) && !(e[0] === r[0] && e[1] === r[1] && e[2] < r[2]))
        }
        var Xr = "getEnv",
        $r = y,
        Wr = !1,
        zr = !1,
        Hr = !1,
        Zr = !1,
        Gr = [],
        Yr = 0,
        ni = void 0,
        ti = Zt.now();
        function ei(n) {
            var t = (n._opts || {}).nativeOptions || {};
            return {
                cb: "_lx" + (100 * Zt.now() + Yr++),
                mn: n._mn,
                cn: n._cn,
                data: n._d || {},
                options: t,
                ver: 4
            }
        }
        function ri(n, t, e, r, i) {
            i = i || {};
            var o = this;
            o._cn = n,
            o._mn = t,
            o._d = e,
            o._cb = r,
            o._opts = i
        }
        function ii(n, t, e, r, i) {
            if (w === $r || L === $r) return r($r);
            var o = new ri(n, t, e, Jn, i);
            if (_ === $r) o.send(function(n, t) {
                r(n, t)
            });
            else if (y === $r) {
                if (Gr.push([o, r]), !Wr) {
                    Wr = !0;
                    new Date;
                    new ri(n, Xr, {}).send(function(r, n) {
                        if (new Date, r && R(r), r) $r = w;
                        else {
                            if ($r = _, _t(un), Zt.isStr(n)) try {
                                n = ur.parse(n)
                            } catch(n) {}
                            var t = (ni = n).sdk_ver || "";
                            zr = Jr(t, "4.0.0"),
                            Hr = Jr(t, "4.3.0"),
                            Zr = !Jr(t, "4.8.0")
                        }
                        te.each(Gr,
                        function(n) {
                            var t = n[0],
                            e = n[1];
                            r ? (R(r), e(r)) : t.send(function(n, t) {
                                e(n, t)
                            })
                        })
                    })
                }
            } else r(V)
        }
        function oi() {
            return zr
        }
        var ai = 3,
        ui = 150,
        ci = 5e3,
        si = 3500,
        fi = !(ri.prototype.send = function(e) {
            var r = this,
            i = ei(r),
            n = "statistics://_lx/?data=" + Bt(ur.stringify(i)),
            t = Zt.now();
            ni && 5e3 < t - ti && r._mn === Xr && $r === _ ? (r._mn, e(0, ni)) : (r._mn, i.cb,
            function(i, o, a) {
                if (Ce !== c || !window.JavaScriptBridge) return Fr(function(n, t) {
                    if (n) return a(n);
                    var e = !1,
                    r = M(function() {
                        e = !0,
                        a(p)
                    },
                    5e3);
                    t.use(i, {
                        data: o,
                        success: function(n) {
                            if (v(r), !e) if ("success" === n.status) {
                                var t = n.data || {};
                                try {
                                    Zt.isStr(t) && (t = ur.parse(t)),
                                    a(Rt, t.data ? t.data: n)
                                } catch(n) {
                                    a(n)
                                }
                            } else a(m)
                        },
                        fail: function() {
                            v(r),
                            e || a(m)
                        }
                    })
                });
                window.JavaScriptBridge.log(o,
                function(n) {
                    var t = n.data;
                    try {
                        Zt.isStr(t) && (t = ur.parse(t)),
                        a(Rt, t.data ? t.data: t)
                    } catch(n) {
                        a(n)
                    }
                })
            } ("lxlog", n,
            function(n, t) {
                n ? (r._mn, i.cb, new Date, R(n)) : (r._mn, i.cb, new Date),
                e(n, t)
            }))
        }),
        di = [],
        li = [],
        vi = 0,
        pi = 0;
        function hi(n, t, e, r, i) {
            var o = [{
                project: "web-lx-sdk",
                pageUrl: Ct.href,
                resourceUrl: n,
                category: i ? "jsError": "ajaxError",
                sec_category: t,
                level: "error",
                unionId: e,
                timestamp: Zt.now(),
                content: "" + r || ""
            }],
            a = wi("//catfront.dianping.com/api/log?v=1", Vn, "application/x-www-form-urlencoded");
            a && (a.onerror = a.onreadystatechange = function() {},
            a.send("c=" + encodeURIComponent(ur.stringify(o))))
        }
        function mi(n, t) {
            if (ai <= pi) return ! 1;
            t = Zt.extend({
                cb: Jt
            },
            t || {});
            var e, r, i, o = ft(),
            a = !rt.use_post;
            try {
                a ? (!
                function n(t, e) {
                    var r = Wt().toString(16) + vi++;
                    var i = void 0,
                    o = e || 0,
                    a = (u = t, c = [], s = [{
                        l: jn,
                        s: Dn
                    },
                    {
                        l: bn,
                        s: xn
                    },
                    {
                        l: Sn,
                        s: kn
                    },
                    {
                        l: On,
                        s: qn
                    },
                    {
                        l: En,
                        s: Cn
                    },
                    {
                        l: In,
                        s: An
                    }], te.each(u,
                    function(n) {
                        var t = Zt.extend(!0, {},
                        n);
                        te.each(s,
                        function(n) {
                            bi(t, n.l, n.s)
                        });
                        var e = [];
                        te.each(n.evs,
                        function(r) {
                            r = Zt.extend(!0, {},
                            r),
                            te.each(r,
                            function(n, t) {
                                if ( - 1 < t.indexOf("val_") && (r[t.replace("val_", "")] = r[t], delete r[t]), bi(r, "refer_url", "urlr"), r[t] && "url" === t) {
                                    var e = Ct.hash;
                                    e && (r.urlh = e),
                                    delete r[t]
                                }
                            }),
                            e.push(r)
                        }),
                        t.evs = e,
                        t[Cn] === t.uuid && delete t.uuid;
                        var r = t[kn];
                        r && (t[kn] = r.replace("data_sdk_", "")),
                        delete t.ua,
                        c.push(t)
                    }), c);
                    var u, c, s;
                    te.each(a,
                    function(n) {
                        delete n.ua
                    });
                    i = ur.stringify(a);
                    if (!
                    function(n) {
                        for (var t = n.length,
                        e = t,
                        r = 0; r < t; r++) 127 < n.charCodeAt(r) && e++;
                        return 1.5 * e < ge
                    } (i)) {
                        var f = t.length;
                        if (1 < f) {
                            var d = parseInt((f + 1) / 2),
                            l = t.slice(0, d),
                            v = t.slice(d);
                            l.length && n(l, o),
                            v.length && n(v, o)
                        } else {
                            var p = t[0],
                            h = p.evs,
                            m = h.length;
                            if (1 < m) {
                                var g = parseInt((m + 1) / 2),
                                _ = h.slice(0, g),
                                y = h.slice(g);
                                _.length && n([Zt.extend(Zt.extend({},
                                p), {
                                    evs: _
                                })], o),
                                y.length && n([Zt.extend(Zt.extend({},
                                p), {
                                    evs: y
                                })], o)
                            } else {
                                var w = p.evs[0].val_lab;
                                p.evs[0].val_lab = Zt.extend(!0, {
                                    custom: {
                                        _s: 1
                                    }
                                },
                                w || {}),
                                _i(ft(), [p], {})
                            }
                        }
                        return ! 1
                    }
                    var b = fe(i);
                    var x = Bt(b);
                    var S = vt(!0);
                    S += -1 < S.indexOf("?") ? "&d=" + x: "?d=" + x;
                    x.length;
                    S = S + "&t=1&r=" + r; !
                    function n(t, e, r, i) {
                        var o = void 0,
                        a = Rn + ye++;
                        if (e = e || {},
                        !(2 < (r = r || 0))) return Et[a] = o = new Image,
                        o.onload = function() {
                            Et[a] = null
                        },
                        o.onabort = o.onerror = function() {
                            Et[a] = null,
                            n(t, e, ++r, i)
                        },
                        o.src = t,
                        o;
                        i ? Zt.isFunc(e.cb) && e.cb(!1) : M(function() {
                            n(t, e, null, !0)
                        },
                        1e3)
                    } (S, {
                        cb: function(n) {
                            n || hi(location.host + location.pathname, "web-report-fail-image-overtime", t[0].union_id, "0")
                        }
                    });
                    return ! 0
                } (n), t.cb(_)) : _i(o, n, t) || Re && gi(o, n, t) || (e = o, r = n, (i = Mt.sendBeacon) && (e = yi(e), i && i.call(Mt, e, ur.stringify(r))) && t.cb(_))
            } catch(n) {
                return hi(Ct.path, "report-ajax", 0, n.message, !0),
                !1
            }
            return ! 0
        }
        function gi(n, t, e, r) {
            if (!Et.XDomainRequest) return ! 1;
            try {
                var i = new XDomainRequest;
                return i.open(Vn, yi(n), !0),
                i.onload = function() {
                    pi = 0,
                    e && e.cb(_),
                    di = []
                },
                i.onerror = function() {
                    pi++
                },
                i.ontimeout = function() {
                    pi++,
                    r || (!
                    function(n, t, e, r) {
                        di = di.concat(t);
                        var i = void 0,
                        o = te.reduce(di,
                        function(n, t) {
                            return t.evs = n.evs.concat(t.evs),
                            i = t.evs.length,
                            ui < i && te.slice(t.evs, i - ui, i),
                            t
                        });
                        if (di = [o], li.push(r), !fi) var a = setInterval(function() {
                            if (ai <= pi) return clearInterval(a),
                            !1;
                            e(n, di,
                            function(t) {
                                clearInterval(a),
                                fi = !1,
                                te.each(li,
                                function(n) {
                                    n && n(t)
                                })
                            },
                            !0)
                        },
                        si)
                    } (n, t, gi, e), fi = !0)
                },
                i.timeout = ci,
                i.send(ur.stringify(t)),
                !0
            } catch(n) {
                return ! 1
            }
        }
        function _i(t, e, r, i) {
            if (!zn()) return ! 1;
            try {
                var n = r && r.method || Vn,
                o = wi(t, n, "text/plain");
                return i = i || 0,
                o.onreadystatechange = function() {
                    if (4 === o.readyState) {
                        var n = o.status;
                        200 <= n ? (pi = 0, r && r.cb && r.cb(_, o.responseText), di = []) : (!i || i < ai) && _i(t, e, r, ++i),
                        r.nm === P && (400 <= n || 0 === n) && hi(t, "web-report-fail", e[0].union_id, n),
                        o.onreadystatechange = null
                    }
                },
                o.onerror = function() {
                    o.abort(),
                    (!i || i < ai) && _i(t, e, r, ++i)
                },
                o.send(n === Vn && ur.stringify(e) || null),
                !0
            } catch(n) {
                return ! 1
            }
        }
        function yi(n) {
            var t = "_lxsdk_rnd=" + (Wt().toString(16) + vi);
            return - 1 === n.indexOf("?") ? n + "?" + t: n + "&" + t
        }
        function wi(n, t, e) {
            var r = new(Xn());
            return r.open(t || Vn, yi(n), !0),
            r.timeout = ci,
            t === Vn && r.setRequestHeader("Content-Type", e),
            r
        }
        function bi(n, t, e) {
            return Kt.call(n, t) && n[t] && (n[e] = n[t], delete n[t]),
            n
        }
        var xi = {},
        Si = sn,
        ki = [],
        Oi = null,
        qi = {
            s: q,
            l: k,
            a: C,
            w: d
        };
        function Ii(n) {
            var t = /(^\w+-\w+-\w+-\w+-\w+)/;
            if (t.test(n)) {
                var e = n.match(t);
                oe.top(mn, e[1], vn)
            } else n && !/(^\w+\.\d+\.\d+\.\d+\.\d+)/.test(n) && n.length < 100 ? oe.top(mn, n, vn) : oe.top(mn, "", -1)
        }
        var Ai = 0,
        ji = 1,
        Di = 2,
        Ei = "|";
        function Ci(n) {
            var t = oe.get(yn);
            return t ? t.split(Ei)[n] : ""
        }
        function Ni(n, t, e) {
            var r, i, o;
            oe.top(yn, (r = t, i = e, (o = []).push(n || Ti()), o.push(r || Mi()), o.push(i || Fi()), o.join(Ei)), pn)
        }
        function Ti() {
            return Ci(Ai)
        }
        function Mi() {
            return Ci(ji)
        }
        function Fi() {
            var n = 0,
            t = Ci(Di);
            return isNaN(t) || (n = parseInt(t)),
            n < 0 ? 0 : n
        }
        var Ri = void 0;
        function Li(n) {
            var t = Ht(Ri) && Ri || Fi(),
            e = !1;
            return ! 0 === n && (t++, e = !0),
            (!t || t < -1) && (e = !(t = 0)),
            Ri = t,
            e && (Ni(Rt, Rt, t), Ri = null),
            t
        }
        function Vi(n, c) {
            return new wr(function(a, u) {
                M(function() {
                    u({
                        code: p
                    })
                },
                3e3),
                ii(n, "getEnv", {},
                function(n, t) {
                    if (n) u(n);
                    else {
                        Oi = rt.nativeSDKVer = t.sdk_ver,
                        o = rt.nativeSDKVer,
                        Zt.isStr(o) && (ot.MVL = -1 < we(o, "4.14.0"), ot.QR = -1 < we(o, "4.14.0"), ot.getReqId = -1 < we(o, "4.12.0"));
                        var e = {
                            uuid: O,
                            msid: q,
                            uid: j,
                            dpid: E,
                            appnm: C,
                            union_id: s
                        };
                        for (var r in c = c || {},
                        e) {
                            var i = e[r];
                            t[r] && (c[i] = t[r])
                        }
                        a(c)
                    }
                    var o
                })
            })
        }
        function Pi() {
            var n = oe.get(wn);
            if (n) {
                var t = n.split(","),
                e = /^\d+\.\d{5,}$/;
                return 3 !== t.length ? null: e.test(t[0]) && e.test(t[1]) ? {
                    lat: t[0],
                    lng: t[1],
                    tm: t[2]
                }: null
            }
            return null
        }
        function Bi(n) {
            return Zt.extend(!0, {},
            n)
        }
        function Ui(n) {
            var t = Nt.getElementsByTagName("meta"),
            e = de(t, "lx:appnm"),
            r = de(t, "lx:defaultAppnm"),
            i = Ce,
            o = Nt.domain,
            a = gt();
            return ut("appnm", e),
            ut("defaultAppnm", r),
            Ne && qe(Ce || e || r || o),
            Te ? e || (2 === a ? n: i || (r || o)) : e || (i || (r || o))
        }
        function Qi() {
            var n, t, e, r, i, o, a = Ce === S || Ce === x || Je,
            u = (n = oe.get(mn), t = oe.get("iuuid") || oe.get("uuid") || n, e = Ti(), r = Mi(), i = oe.get(_n) || oe.get(E), o = {},
            t && (o[O] = t), e && (o[q] = e), n && (o[k] = n), r && (o[j] = r), i && (o[E] = i), o),
            c = void 0,
            s = {};
            a && (s = function(n) {
                var i = {};
                if (T.test(n)) {
                    var t = Zt.parseQuery(n);
                    if (t[O] && (i[O] = t[O]), t[I] && (i[I] = t[I]), t[D] && (i[j] = t[D]), t.__lxsdk_params) {
                        var e = decodeURIComponent(decodeURIComponent(t.__lxsdk_params)).split(";");
                        te.each(e,
                        function(n) {
                            var t = n.split(":"),
                            e = t[0],
                            r = t[1];
                            r && (i[e] = r)
                        })
                    }
                    return i
                }
                return i
            } (Ct.href)),
            (c = Zt.extend(u, s)).ct = Fe;
            var f = tr();
            f && (c[A] = f);
            var d, l, v = Ur();
            c[k] = v,
            c[O] || (c[O] = v),
            c[q] || (c[q] = (d = [], l = +new Date, d.push(l.toString(16)), d.push(Qr()), d.push(Qr()), d.push(Qr()), d.join("-")), Ni(c[q], c.uid || "")),
            c[O] && Ii(c[O]);
            var p = Ui();
            Zt.isStr(p) && (c[C] = p);
            var h, m = (h = Ft.replace(/^.*([A-Za-z-]+)\/com\.(sankuai(?!\.meituan\.)|meituan(?!\.sankuai\.)|dianping|sankuai\.meituan|meituan\.sankuai)\.([.A-Za-z0-9-]+)\/(\d+[.\d]+).*$/, "$4"), /^\d+(\.\d+)+$/.test(h) ? h: null);
            if (m && (c.app = m), Je) for (var g in qi) {
                var _ = qi[g],
                y = c[g],
                w = Ae && Zt.isFunc(Ae.getItem) && Ae.getItem(b + _) || null; (y = y || w) && (c[N] = c[N] || {},
                c[N][_] = c[_], c[_] = y, delete c[g])
            }
            return c
        }
        function Ki(t) {
            return function(n) {
                var e = n;
                return t !== n && (e = Zt.extend(t, n)),
                e.dpid && e.uid ? e: Vr().then(function(n) {
                    var t = {};
                    return n.dpid && (t.dpid = n.dpid, n.userId && (t.uid = "" + n.userId), n.unionId && (t.union_id = n.unionId)),
                    e = Zt.extend(e, t)
                },
                function(n) {
                    return R(n),
                    e
                })
            }
        }
        var Ji = function(n) {
            var a = Qi();
            if (n && Ce || Qe()) {
                var t = Vi(n, a);
                return o === Ce && (t = t.then(Ki(a),
                function(n) {
                    return R(n),
                    Ki(a)()
                })),
                t.then(function(n) {
                    var t = Ui(n[C]),
                    e = n[E],
                    r = n[O],
                    i = n[s],
                    o = n;
                    return n !== a && (o = Zt.extend(a, n)),
                    Zt.isStr(t) && (o[C] = t),
                    r && Ii(r),
                    e && oe.top(_n, e, vn),
                    i && oe.top("_lxsdk_unoinid", i, vn),
                    o
                },
                function(n) {
                    return n && R(n),
                    a
                })
            }
            var e, r = Bi(a),
            i = r[N];
            return (e = Zt.now(), new wr(function(n) {
                if (Je) if (Et.WeixinJSBridge && Et.WeixinJSBridge.invoke) n("miniprogram" === Et.__wxjs_environment);
                else {
                    var t = setTimeout(function() {
                        rt.wx_t = Zt.now() - e,
                        n(!1)
                    },
                    5e3);
                    Nt.addEventListener("WeixinJSBridgeReady",
                    function() {
                        clearTimeout(t),
                        rt.wx_t = Zt.now() - e,
                        n("miniprogram" === Et.__wxjs_environment)
                    })
                } else n(!1)
            })).then(function(n) {
                if (rt.inWXMP = n, Zt.isObj(i)) if (n && Ae && Zt.isFunc(Ae.setItem)) try {
                    Ae.setItem(b + C, r[C] || ""),
                    Ae.setItem(b + d, r[d] || ""),
                    Ae.setItem(b + k, r[k] || ""),
                    Ae.setItem(b + q, r[q] || "")
                } catch(n) {} else {
                    for (var t in i) r[t] = i[t];
                    delete r[N]
                }
                return wr.resolve(r)
            })
        };
        function Xi(n) {
            return dn === Si ? wr.resolve(Bi(xi)) : fn === Si ? new wr(function(t) {
                var n;
                n = function(n) {
                    t(n)
                },
                ki.push(n)
            }) : (Si = fn, Ji(n).then(function(e) {
                return xi = Zt.extend(!0, {},
                e || {}),
                Si = dn,
                te.each(ki,
                function(n, t) {
                    Zt.isFunc(n) && ki[t](e)
                }),
                e
            }))
        }
        var $i = /([a-fA-F0-9-]+)(\.\d+)/,
        Wi = "_hc.v",
        zi = 525600,
        Hi = "",
        Zi = /(dper|dianping|51ping)\.com/.test(Tt);
        function Gi() {
            return function() {
                function n() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
            } () + "." + Math.round( + new Date / 1e3)
        }
        function Yi() {
            return ! Hi && Zi && (Hi = function() {
                var n = oe.get(Wi);
                if (n || (n = Gi(), oe.top(Wi, n, zi)), n) {
                    var t = n.match($i);
                    return t ? t[1] : ""
                }
                return ""
            } ()),
            Hi
        }
        var no = function() {
            var n = void 0;
            try {
                var t = document;
                if (t.querySelectorAll) {
                    var e = t.querySelectorAll("head script"),
                    r = t.querySelectorAll("body script"),
                    i = [];
                    te.each(e,
                    function(n) {
                        i.push(n)
                    }),
                    te.each(r,
                    function(n) {
                        i.push(n)
                    });
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o].innerHTML.match(/\[['"]\s*_setPageId\s*['"]\s*,\s*(\d+)\s*\]/);
                        if (a) {
                            n = a[1];
                            break
                        }
                    }
                }
            } catch(n) {}
            return function() {
                return n
            }
        } ();
        function to(n) {
            var t = this;
            t.s = n;
            var e = void 0,
            r = lr.get(Fn) || {
                s: n,
                d: t.d
            };
            r.s !== n ? (lr.del(Fn), e = t.d = []) : e = t.d = r.d || [],
            t.l = e && e.length || 0
        }
        var eo = null;
        function ro() {
            return eo
        }
        var io = "QR",
        oo = 20480 / 30,
        ao = 2592e5,
        uo = {},
        co = void 0,
        so = !(to.prototype = {
            constructor: to,
            set: function(n, t, e) {
                var r = this,
                i = r.l,
                o = r.d,
                a = r.indexOf(n),
                u = {
                    scid: 0 < i ? o[i - 1].scid + 1 : 0,
                    cid: n,
                    bid: t,
                    sf: e
                }; - 1 < a ? o.splice(a, i - a, u) : o.push(u),
                r.l = o.length,
                lr.set(Fn, {
                    s: r.s,
                    d: o
                })
            },
            indexOf: function(n) {
                for (var t = this.d || [], e = 0, r = t.length; e < r; e++) {
                    if (t[e].cid === n) return e
                }
                return - 1
            },
            toJSON: function() {
                var n = this.d;
                return n && n.length ? n: null
            }
        }),
        fo = [],
        lo = !1,
        vo = ["ua"].join("|") + "|",
        po = ["lxcuid", "category", "sdk_ver", "utm", "uuid", "msid", "ct", "appnm"],
        ho = ["utm", "seq", "tm", "nm", "val_ref", "lng", "val_lab", "req_id", "lat", "s_from", "val_cid", "val_bid"];
        function mo() {
            if (!so) {
                var n = Wt(),
                t = [co.opts.cid],
                e = 0,
                r = function(n, t) {
                    if (!n) try {
                        var e = t;
                        if (Zt.isObj(t) || (e = JSON.parse(t)), 0 === e.code)(function n(t) {
                            var e = 0,
                            r = 0;
                            var i = [];
                            var o = Wt() - ao;
                            for (var a in t) e += t[a].bids.length,
                            r += t[a].bids.length;
                            if (!r) return;
                            for (var u in uo) e += uo[u].bids.length,
                            uo[u].tm < o && i.push(u);
                            oo < e && (i.length ? (te.each(i,
                            function(n) {
                                delete uo[n]
                            }), n(t)) : uo = {});
                            uo = Zt.extend(uo, t);
                            setTimeout(function() {
                                lr.set(io, uo)
                            },
                            10)
                        })(function(n) {
                            if (!Zt.isObj(n)) return;
                            var i = {},
                            o = Wt();
                            return te.each(n,
                            function(t, r) {
                                i[r] = i[r] || {
                                    cid: r,
                                    tm: o,
                                    bids: [],
                                    envInfo: (t.envInfo || {}).quickReport || [],
                                    evsInfo: (t.evsInfo || {}).quickReport || []
                                },
                                delete t.envInfo,
                                delete t.evsInfo;
                                var n = function(e) {
                                    var n = t[e].quickReport || [];
                                    te.each(n,
                                    function(n) {
                                        var t = {
                                            tp: e,
                                            id: n
                                        };
                                        i[r].bids.push(t)
                                    })
                                };
                                for (var e in t) n(e)
                            }),
                            i
                        } (e.data)),
                        so = !0;
                        else {
                            if (304 !== e.code) return void e.message;
                            so = !0
                        }
                    } catch(n) {}
                };
                for (var i in uo) e++,
                n = Math.min(uo[i].tm, n);
                0 === e && (n = 0);
                var o = ("https://ocean.sankuai.com/delivery/api/web-configFile?\n                timestamp=" + n + "\n                &cidList=" + t.join(",") + "\n                &rnd=" + Math.random()).replace(/\s/g, "");
                "https" === _e() && _i(o, {},
                {
                    cb: r
                }) ||
                function(n, t, e, r) {
                    var i = void 0,
                    o = (r = r || {}).outTime || 5e3,
                    a = "__lxsdk_jsonp_callback_" + Math.random().toString(16).slice(2, 10);
                    /^([^?]+)\?/.test(n) ? n = n.replace(/^([^?]+)\?/, "$1?" + t + "=" + a + "&") : /^([^#]+)#/.test(n) ? n = n.replace(/^([^#]+)#/, "$1?" + t + "=" + a + "#") : n += "?" + t + "=" + a;
                    var u = Nt.createElement("script");
                    u.src = n,
                    Et[a] = function(n) {
                        clearTimeout(i);
                        try {
                            e(Rt, n)
                        } catch(n) {}
                        delete window[a]
                    },
                    u.type = "application/javascript",
                    u.charset = "utf-8",
                    u.setAttribute("async", "true"),
                    Nt.body.appendChild(u),
                    i = M(function() {
                        try {
                            e("timeout")
                        } catch(n) {}
                        delete window[a]
                    },
                    o),
                    M(function() {
                        Nt.body.removeChild(u)
                    },
                    0)
                } (o, "callback", r)
            }
        }
        function go(n, t, e) {
            if (!rt.useQR) return ! 1;
            if (!uo[t]) return ! 1;
            for (var r = uo[t].bids, i = 0, o = r.length; i < o; i++) {
                var a = r[i];
                if (a.tp == n) {
                    if (n === P && a.id == t) return ! 0;
                    if (a.id == e) return ! 0
                }
            }
            return ! 1
        }
        function _o(n, t, e) {
            var r = {},
            i = {};
            if (n && uo[n]) {
                var o = po.concat(uo[n].envInfo || []),
                a = ho.concat(uo[n].evsInfo || []);
                te.each(o,
                function(n) {
                    t.hasOwnProperty(n) && t[n] && (i[n] = t[n])
                }),
                te.each(a,
                function(n) {
                    e.hasOwnProperty(n) && vo.indexOf(n + "|") < 0 && (r["evs." + n] = e[n])
                });
                var u = Zt.extend(!0, i, r);
                fo.push(u),
                v(lo),
                lo = setTimeout(function() {
                    _i("https://" + Kn + "/?rnd=" + Math.random(), fo, {
                        nm: e.nm,
                        cb: Jn
                    }),
                    fo = []
                },
                0)
            }
        } !
        function() {
            var n = lr.get(io);
            if (n) try {
                var t = void 0;
                t = Zt.isObj(n) ? n: JSON.parse(n),
                uo = Zt.extend(!0, uo, t)
            } catch(n) {}
        } (),
        function t() {
            var e = ya();
            return new wr(function(n) {
                e ? n(e) : setTimeout(function() {
                    t().then(n)
                },
                100)
            })
        } ().then(function(n) {
            co = n,
            rt.useQR && (_e(), mo())
        });
        var yo = "category",
        wo = "setEvs",
        bo = "val_bid",
        xo = "page",
        So = "s_from",
        ko = "lat",
        Oo = "lng",
        qo = [],
        Io = Nt.referrer,
        Ao = [],
        jo = void 0,
        Do = void 0,
        Eo = {},
        Co = 0,
        No = function(n, t, e) {
            if (e) {
                var r = {},
                i = {
                    custom: r
                };
                r[t] = e,
                n = Zt.extend(!0, n || {},
                i)
            }
            return n
        };
        function To(n, t) {
            this.env = t || {},
            this.opts = Zt.extend(!0, {},
            n),
            qo.push(this),
            Ot = this
        }
        var Mo = To.prototype;
        function Fo(n) {
            return 6 === n._ptpvs
        }
        function Ro() {
            return ! Co
        }
        function Lo(n) {
            return (n = n || {}) && !Zt.isObj(n) && (n = {
                cid: "" + n
            }),
            n
        }
        function Vo(e, r, i, o, a) {
            var u = this,
            n = a = a || {},
            t = n.isLeave,
            c = n.currentPageInfo,
            s = n.mvDelay,
            f = n.sf,
            d = go(e, r, i);
            if (gt() === cn) {
                var l = Ko(u),
                v = Ho(gr.getAll()),
                p = $o(e, r, i, o),
                h = p.body,
                m = p.ev,
                g = Zo(l, h, v);
                if (d && _o(r, l, m), e === K) {
                    if (s) return Zt.run(h,
                    function(n) {
                        Ao.push(n)
                    }),
                    void M(function() {
                        if (Ao.length) {
                            var n = Zo(l, Ao, v);
                            u.send(n),
                            Ao = []
                        }
                    },
                    s * an)
                } else {
                    if (e === J) return void qt.call(u, J, l, h[0], {
                        tag: v
                    });
                    if (e === U) {
                        if (c &&
                        function(n, t) {
                            Zt.isObj(n[Nn]) || (n[Nn] = {});
                            n[Nn][xo] = t
                        } (m, u._cpi), g = Zo(l, h, v), t) {
                            var _ = he(),
                            y = Xo(B, r, Rt, _);
                            g.evs.push(y)
                        }
                        Ne && f && ro().set(r, i, f)
                    }
                }
                u.send(g, {
                    nm: e
                })
            } else {
                var w = u.env,
                b = void 0,
                x = Jo({
                    isQuickReport: d
                }),
                S = [zo.call(u, e, r, i, o)];
                if (e === U && (b = {
                    sf: f
                },
                u._cpi && (b.cpi = u._cpi), S = [zo.call(u, e, r, i, o, null, b)], t)) {
                    var k = he(),
                    O = zo.call(u, B, r, null, k);
                    S.push(O)
                }
                w[A] && (S = function(n, t) {
                    if (!te.isArray(n) || !n.length) return n;
                    if (!Zt.isObj(n[0][Nn])) return n[0][Nn] = {
                        page: {
                            utm: t[A]
                        }
                    },
                    n;
                    if (!Zt.isObj(n[0][Nn][xo])) return n[0][Nn][xo] = {
                        utm: t[A]
                    },
                    n;
                    return n[0][Nn][xo] = Zt.extend(!0, n[0][Nn][xo], {
                        utm: t[A]
                    }),
                    n
                } (S, w));
                var q = Qo(w[yo]);
                new Date;
                ii(q, wo, S,
                function(n, t) {
                    n ? (_t(cn), R(n), new Date, Vo.call(u, e, r, i, o, a)) : new Date
                },
                {
                    nativeOptions: x
                })
            }
        }
        function Po() {
            return jo || (jo = Bo()),
            jo
        }
        function Bo() {
            return Zt.now().toString(16) + "-" + Math.floor(65535 * Zt.rnd()) + "-" + Math.floor(65535 * Zt.rnd())
        }
        function Uo(n) {
            var t, e, r = n.nm;
            P === r ? (n.nm = "mpt", n.val_act = "pageview") : B === r ? (n.nm = "report", n.val_act = "quit") : (n.nm = "mge", n.event_type = (t = r, (e = {})[$] = "order", e[W] = "pay", e[U] = "click", e[X] = "return", e[K] = "view", e[Q] = "click", e[t] || r)),
            n.nt = 0,
            n.isauto = 8
        }
        function Qo(n) {
            return 0 === n.indexOf("data_sdk_") && (n = n.replace(yo, "")),
            n
        }
        function Ko(n) {
            var t, e, r = Zt.extend(!0, {},
            n.env);
            r[yo] = (t = r[yo], e = "data_sdk_", 0 !== t.indexOf(e) && (t = e + t), t);
            var i = r.utm,
            o = {
                ua: je,
                sdk_ver: g,
                ch: i && i.utm_source ? i.utm_source: "web",
                sc: Be
            };
            return o[jn] = g,
            Zt.extend(!0, o, r)
        }
        function Jo(n) {
            return n = n || {},
            {
                isQuickReport: at("QR") && !!n.isQuickReport
            }
        }
        function Xo(n, t, e, r, i) {
            i = i || F;
            var o, a, u, c = Li(!0),
            s = Pi(),
            f = void 0,
            d = P === n,
            l = $ === n,
            v = W === n,
            p = {
                nm: n,
                tm: Zt.now(),
                nt: cn,
                isauto: i,
                val_cid: t,
                req_id: Po(),
                seq: c
            };
            if (d) {
                var h = Ct.href;
                p.url = h,
                (f = Io) && (p.refer_url = f),
                i === F && (Io = h)
            }
            return (l || d || v) && Ne && (o = p, (a = ro().toJSON()) && (o[So] = a), p = o),
            r = No(r, "_hguid", Yi()),
            (u = r) && u.custom && "v3" === u.custom._api && !t && (p.val_cid = Nt.title || Ct.pathname, r = No(r, "_cid", 1)),
            d && (r = No(r, "_hpid", no()), rt.wx_t && (r = No(r, "_wx_t", rt.wx_t))),
            e && (p[bo] = e),
            r && (p[Nn] = r),
            s && (p[ko] = s.lat, p[Oo] = s.lng),
            p
        }
        function $o(n, t, e, r, i) {
            var o = Xo(n, t, e, r, i);
            return {
                body: function(n) {
                    {
                        if (Ao && 0 < Ao.length) {
                            var t = Ao;
                            return Ao = [],
                            t.push(n),
                            t
                        }
                        return [n]
                    }
                } (o),
                ev: o
            }
        }
        function Wo(n) {
            return Me ? n: Ee && !Zr ? n: Bt(n)
        }
        function zo(n, t, e, r, i, o) {
            o = o || {},
            i = i || F;
            var a = this.env.appnm,
            u = Pi(),
            c = !yt,
            s = void 0,
            f = {
                nm: n,
                tm: Zt.now(),
                nt: un,
                isauto: i,
                val_cid: t,
                shouldCover: c
            };
            f = Zt.extend(!0, f, Eo),
            Do && (f.req_id = Do),
            o.sf && (f._sf = o.sf);
            var d = void 0,
            l = Zt.extend(!0, {},
            r || {}),
            v = P === n;
            if (v) {
                var p = Wo(Ct.href);
                d = {
                    ua: je,
                    url: p
                };
                var h = tr();
                h && h.utm_source && (d.utm = h),
                (s = Io) && (d.refer_url = Wo(s)),
                i === F && (Io = p)
            } else d = {};
            if (te.each({
                web_req_id: Po(),
                web_sdk_ver: g,
                lxcuid: Ur(),
                web_appnm: a,
                covered_by_native: c
            },
            function(n, t) {
                Zt.isStr(n) && (d[t] = n)
            }), Zt.isObj(l.custom) && "v3" === l.custom._api && (d.web_appnm = function(n) {
                if (Zt.isStr(n)) return n && tt[n] || tt
            } ("appnm")), o.cpi && !l.page && (l.page = o.cpi), l.custom = Zt.extend(!0, l.custom, d), l = No(l, "_hguid", Yi()), v) {
                l = No(l, "_hpid", no());
                try {
                    var m = void 0;
                    re(document.scripts,
                    function(n) {
                        var t = n.src;
                        /\/\/analytics\.meituan\.(net|com)\//.test(t) && (m = t)
                    }),
                    l = No(l, "_lxsdk_url", m)
                } catch(n) {}
            }
            return n !== Q || Hr ? oi() || Uo(f) : oi() ? f.nm = U: Uo(f),
            f[Nn] = l,
            u && (f[ko] = u.lat, f[Oo] = u.lng),
            e && (f[bo] = e),
            v && !oi() && (f.val_val = l, delete f[Nn]),
            f
        }
        function Ho(n) {
            return n
        }
        function Zo(n, t, e) {
            return te.isArrayLike(t) || (t = [t]),
            Zt.run(t,
            function(n) {
                n && e && (n.tag = e)
            }),
            n.evs = t,
            n
        }
        function Go(n, t) {
            var e = {};
            return e[on] = t,
            Zt.extend(e, n)
        }
        function Yo(e, n, t, r) {
            var i, o, a, u, c = (i = n, o = t, a = r, u = null, !Zt.isStr(i) || o || a ? Zt.isObj(i) && Zt.isStr(o) && !a && (u = o, o = null) : (u = i, i = null), u && (a = Zt.extend({
                cid: u
            },
            a || {})), {
                lab: i,
                env: o,
                opts: a
            }),
            s = c.lab,
            f = c.env;
            r = Lo(c.opts);
            var d = e.opts.cid = r.cid || e.opts.cid;
            r = Zt.extend({
                cid: d
            },
            r),
            f && Zt.isObj(f) && te.each(f,
            function(n, t) {
                e._dt.set(t, n, Rt, !0)
            }),
            e._dt.pageView(s, r)
        }
        function na(n, t) {
            this.env = n || {},
            this.opts = t || {},
            this._t = []
        }
        Mo.set = function(n, t, e, r) {
            var i = this,
            o = i.env;
            if (Zt.isObj(n)) re(n,
            function(n, t) {
                i.set(t, n)
            });
            else if (!r && rt.inWXMP && Zt.isObj(o[N]) && o[N][n] ? o[N][n] = t: o[n] = t, ut(n, t), "utm" === n && Zt.isObj(t) && nr(t), un !== gt() || Ln[n]) Zt.isFunc(e) && e(o, i);
            else {
                var a = {},
                u = Qo(o[yo]);
                a[n] = t,
                ii(u, "setEnv", a,
                function() {
                    Zt.isFunc(e) && e(o, i)
                })
            }
        },
        Mo.get = function(n, t) {
            Zt.isFunc(t) && t(this.env[n], this)
        },
        Mo.pageView = function(e, r) {
            r = Lo(r) || {};
            var n = void 0,
            i = this,
            t = i.opts.cid,
            o = r.cid || t,
            a = r.isauto || F,
            u = r.isAutoInit,
            c = r.reportStatus,
            s = t && !(Fo(i) || u) && !Ro(),
            f = c === cn || cn === gt(),
            d = i.env;
            if (this._cpi = e, s && !st()) {
                var l = he(!0);
                n = f ? Xo(B, t, null, l) : zo.call(i, B, t, null, l),
                ct(0)
            }
            t && (Fo(i) || Ro()) || (jo = Bo()),
            i.opts.cid = o;
            var v = go(P, o);
            if (f) {
                var p = Ko(i),
                h = Ho(gr.getAll()),
                m = $o(P, o, null, e, a),
                g = m.body;
                s && n && g.unshift(n);
                var _ = Zo(p, g, h);
                v && _o(o, p, m.ev),
                this.send(_, {
                    nm: P
                }),
                u || Co++
            } else {
                var y = Jo({
                    isQuickReport: v
                }),
                w = [zo.call(i, P, o, null, e)];
                s && n && w.push(n),
                te.each(w,
                function(n) {
                    n.appnm = d.appnm
                }),
                ii(Qo(d[yo]), wo, w,
                function(n, t) {
                    n ? (_t(cn), i.pageView(e, r), hi(Ct.href, "native-report-error", i.env.union_id, R(n))) : u || Co++
                },
                {
                    nativeOptions: y
                })
            }
            i._ptpvs = u ? 6 : F
        },
        Mo.pageDisappear = function(e, r) {
            r = Zt.extend({},
            r);
            var i = this,
            n = r.cid || i.opts.cid,
            t = r.getDurationFromLastPV || !1,
            o = r.shouldStore;
            ct(f);
            var a = he(t);
            if (e = Zt.extend(a, e), cn === gt() || o) {
                var u = Zo(Ko(i), Xo(B, n, null, e), Ho(gr.getAll()));
                o && lr.nt ? (Oe() && (rt.inWXMP && Zt.isObj(u[N]) && u[N][C] ? u[N][C] = Ie() : u[C] = Ie()), lr.set(l, u)) : i.send(u)
            } else {
                var c = this.env,
                s = [zo.call(i, B, n, null, e)];
                ii(Qo(c[yo]), wo, s,
                function(n, t) {
                    n && (_t(cn), i.pageDisappear(e, r))
                })
            }
            jt()
        },
        Mo.systemCheck = function(e, r, i) {
            i = Zt.extend({},
            i);
            var o = this,
            n = i.cid || o.opts.cid,
            t = !!i.isLXLog;
            if (cn === gt()) {
                var a = Ko(o),
                u = Zo(a, $o(Q, n, e, r).body, Ho(gr.getAll()));
                t && (a.category = "others"),
                this.send(u)
            } else {
                var c = o.env,
                s = [zo.call(o, Q, n, e, r)],
                f = Qo(c[yo]);
                t && (f = "others"),
                ii(f, wo, s,
                function(n, t) {
                    n && (_t(cn), o.systemCheck(e, r, i))
                })
            }
        },
        Mo.moduleView = function(n, t, e) {
            e = Zt.extend({},
            e);
            var r = this.opts.mvDelay || e.delay,
            i = e.cid || this.opts.cid;
            Vo.call(this, K, i, n, t, {
                mvDelay: r
            })
        },
        Mo.moduleViewList = function(n, t, e) {
            e = Zt.extend({},
            e);
            var r = this.opts.mvDelay || e.delay,
            i = e.cid || this.opts.cid,
            o = at("MVL");
            gt() !== un || o ? Vo.call(this, J, i, n, t) : Vo.call(this, K, i, n, t, {
                mvDelay: r
            })
        },
        Mo.moduleClick = function(n, t, e) {
            var r = (e = Zt.extend({},
            e)).cid || this.opts.cid,
            i = e.sf;
            e && e.isLeave && ct(f);
            var o = e.withPageInfo && Zt.isObj(this._cpi) ? this._cpi: Rt;
            Vo.call(this, U, r, n, t, {
                currentPageInfo: o,
                isLeave: e.isLeave,
                sf: i
            })
        },
        Mo.moduleEdit = function(n, t, e) {
            var r = (e = Zt.extend({},
            e)).cid || this.opts.cid;
            Vo.call(this, X, r, n, t, e)
        },
        Mo.order = function(e, r, i) {
            i = Zt.extend({},
            i);
            var o = this,
            n = i.cid || o.opts.cid;
            me(0, r);
            var t = go($, n, e);
            if (cn === gt()) {
                var a = Ko(this),
                u = $o($, n, e, r),
                c = u.body,
                s = Ho(gr.getAll()),
                f = Zo(a, c, s);
                t && _o(n, a, u.ev),
                this.send(f)
            } else {
                var d = this.env,
                l = Jo({
                    isQuickReport: t
                }),
                v = [zo.call(o, $, n, e, r)];
                ii(Qo(d[yo]), wo, v,
                function(n, t) {
                    n && (_t(cn), o.order(e, r, i))
                },
                {
                    nativeOptions: l
                })
            }
        },
        Mo.pay = function(e, r, i) {
            i = Zt.extend({},
            i);
            var o = this,
            n = i.cid || o.opts.cid;
            me(0, r);
            var t = go(W, n, e);
            if (cn === gt()) {
                var a = Ko(o),
                u = $o(W, n, e, r),
                c = u.body,
                s = Ho(gr.getAll()),
                f = Zo(a, c, s);
                t && _o(n, a, u.ev),
                this.send(f, {
                    cb: function() {
                        gr.clear()
                    }
                }),
                o.clearTag()
            } else {
                var d = this.env,
                l = Jo({
                    isQuickReport: t
                }),
                v = [zo.call(o, W, n, e, r)];
                ii(Qo(d[yo]), wo, v,
                function(n, t) {
                    n && (_t(cn), o.pay(e, r, i))
                },
                {
                    nativeOptions: l
                })
            }
        },
        Mo.tag = function(e, n, t, i) {
            var r = void 0,
            o = this.env,
            a = arguments,
            u = [],
            c = function(n) {
                if (!Zt.isObj(n)) return n;
                for (var t = n,
                e = 0,
                r = u.length; e < r; e++) {
                    if (!t) return t;
                    t = t[u[e]]
                }
                return t
            },
            s = function() {
                te.each(a,
                function(n) {
                    if (!Zt.isStr(n)) return ! 1;
                    u.push(n)
                })
            },
            f = function(n, t, e) {
                var r = {};
                r[n] = t,
                ii(Qo(o[yo]), "setTag", r,
                function(n, t) {
                    i && (e && s(), i(n, c(t), !0))
                })
            },
            d = function(n) {
                var t = gr.getAll();
                n || s(),
                i && i(0, c(t), !1)
            };
            if (te.each(a,
            function(n) {
                Zt.isFunc(n) && (i = n)
            }), Zt.isObj(e)) {
                var l = this;
                te.each(e,
                function(n, t) {
                    l.tag(t, n)
                })
            } else Zt.isStr(e) && Zt.isObj(n) ? cn !== gt() ? f(e, r = n, !0) : (re(n,
            function(n, t) {
                gr.set(e, t, n)
            }), d(!0)) : (Zt.isObj(t) || Zt.isStr(t)) &&
            function(n) {
                if (!Zt.isStr(n) && !n.length) return ! 1;
                return ! 0
            } (e) && Zt.isStr(n) ? cn !== gt() ? ((r = {})[n] = t, f(e, r, !0)) : (gr.set(e, n, t), d(!0)) : Zt.isFunc(e) || Zt.isFunc(n) || Zt.isStr(e) && Zt.isStr(n) && Zt.isFunc(t) ? cn !== gt() ? (s(), ii(Qo(o[yo]), "getTag", {},
            function(n, t) {
                i && i(n, c(t), !0)
            })) : d() : i && i( - 1)
        },
        Mo.clearTag = function(n, t, e) {
            var r = 0;
            cn === gt() ? (Zt.isFunc(n) && (e = n, n = Rt), gr.clear(n, t), e && e(0)) : r = -1,
            e && e(r)
        },
        Mo.sfrom = function(r) {
            var i = void 0,
            n = this.env;
            cn !== gt() ? ii(Qo(n[yo]), "getSFrom", {},
            function(n, t) {
                if (t) {
                    var e = t.data ? t.data: t;
                    i = Zt.isStr(e) ? JSON.parse(e) : e,
                    r(n, i)
                }
            }) : r(1, [])
        },
        Mo.send = function(n, t) {
            var e = [];
            t = Zt.extend({
                cb: function() {}
            },
            t),
            Zt.run(n,
            function(n) {
                Oe() && (rt.inWXMP && Zt.isObj(n[N]) && n[N][C] ? n[N][C] = Ie() : n[C] = Ie()),
                e.push(n)
            });
            var r = function() {
                var n = lr.get(l);
                n && lr.del(l);
                return n
            } ();
            r && e.unshift(r),
            mi(e, t)
        },
        Mo.getAll = function() {
            return qo
        };
        var ta = na.prototype;
        ta.create = function(n, t) {
            var e = Zt.extend({},
            this.env);
            e = Zt.extend(e, {
                category: n
            });
            var r = Zt.extend({
                isDefault: !1
            },
            this.opts),
            i = new To(r = Zt.extend(r, t || {}), e);
            return this._t.push(i),
            t.isDefault && (this._dt = i),
            i
        },
        ta.config = function(n, t) {
            return Rt !== n && (rt[n] = t),
            "cid" === n && ne(t) && (this.opts.cid = t),
            rt[n]
        },
        ta._initPV = function(n, t) {
            Yo(this, this.config("pageValLab"), n = Zt.extend(n, this.config("pageEnv")), {
                isauto: 6,
                reportStatus: cn,
                cid: t,
                isAutoInit: !0
            })
        },
        ta.pageView = function(n, t, e) {
            Yo(this, n, t, e)
        },
        ta.moduleView = function(n, t, e) {
            this._dt.moduleView(n, t, e)
        },
        ta.moduleViewList = function(n, t, e) {
            this._dt.moduleViewList(n, t, e)
        },
        ta.systemCheck = function(n, t, e) {
            this._dt.systemCheck(n, t, e)
        },
        ta.moduleClick = function(n, t, e) {
            this._dt.moduleClick(n, t, e)
        },
        ta.moduleEdit = function(n, t, e) {
            this._dt.moduleEdit(n, t, e)
        },
        ta.order = function(n, t, e, r) {
            this._dt.order(n, Go(e, t), r)
        },
        ta.pay = function(n, t, e, r) {
            this._dt.pay(n, Go(e, t), r)
        },
        ta.pageDisappear = function(n, t) {
            this._dt.pageDisappear(n, t)
        },
        ta.tag = function(n, t, e, r) {
            this._dt.tag(n, t, e, r)
        },
        ta.sfrom = function(n) {
            this._dt.sfrom(n)
        },
        ta.clearTag = function(n, t, e) {
            this._dt.clearTag(n, t, e)
        },
        ta.getAll = function(n) {
            n && n(this._t)
        },
        ta.getTracker = function(t, n) {
            var e = te.find(this._t,
            function(n) {
                return n.env.category === t
            });
            n && n(e)
        },
        ta.get = function(n, t) {
            this._dt.get(n, t)
        },
        ta.set = function(n, t, e) {
            this._dt.set(n, t, e)
        },
        ta._setRequestID = function(n) {
            Do = n
        },
        ta._setNativeEvsData = function(n, t) {
            var e;
            e = t,
            Eo[n] = e
        };
        var ea = void 0,
        ra = !0,
        ia = function() {
            var n, t, e; ! rt.onWebviewAppearAutoPV || (t = n || Wt(), e = le(), pe.update(t), Ut = t, e && (e.l = t), wa(), ea.pageView(), ct(0))
        },
        oa = function() { !! rt.onWebviewAppearAutoPV && (st() || (ct(f), ea.pageDisappear({},
            {
                getDurationFromLastPV: !0
            })))
        },
        aa = function() {
            ra = !0,
            ia()
        },
        ua = function() {
            ra = !1,
            oa(),
            jt()
        },
        ca = function() {
            ra && ia()
        },
        sa = function() {
            ra && (oa(), jt())
        },
        fa = void 0,
        da = !!/\d\.\d\.\d/.test(Ke) && 0 <= we(Ke, "11.3.0");
        function la(n, t) {
            Zt.isStr(n) && (t = Zt.isFunc(t) && t ||
            function() {},
            "on" + n in Et || "KNB:" + n in Et ? Zt.on(window, n,
            function(n) {
                t(n)
            }) : (fa = window.KNB) && Zt.isFunc(fa.subscribe) && fa.subscribe({
                action: n,
                handle: function() {
                    t()
                },
                success: function() {},
                fail: function(n) {}
            }))
        }
        var va = {
            hook: function() {
                try {
                    la("appear", aa),
                    la("disappear", ua),
                    da && (la("foreground", ca), la("background", sa))
                } catch(n) {
                    hi("sdk", "api-error", "", n.stack, !0)
                }
                ea = ya()
            }
        },
        pa = [],
        ha = sn,
        ma = void 0,
        ga = void 0;
        function _a(n, t) {
            return {
                cb: n,
                cmd: t
            }
        }
        function ya() {
            return ma
        }
        function wa() {
            var t, r;
            wt(!1),
            (t = ga, r = {
                none: !0
            },
            new wr(function(e) {
                try {
                    var n = we(Oi, "4.12.0"); ! Oi || !Ht(n) || n < 0 ? e(r) : t && Ce || Qe() ? ii(t, "getReqId", {},
                    function(n, t) {
                        e(n ? r: t)
                    }) : e(r)
                } catch(n) {
                    e(r),
                    hi("sdk", "api-error", "", n.stack, !0)
                }
            })).then(function(n) {
                var t = n || {},
                e = t.val_ref,
                r = t.req_id,
                i = t.refer_req_id,
                o = !!(r || e || i);
                r && ma._setRequestID(r),
                e && ma._setNativeEvsData("val_ref", e),
                i && ma._setNativeEvsData("refer_req_id", i),
                wt(o)
            })
        }
        function ba(n, t) {
            if (dn === ha) n && n(ma);
            else if (fn === ha) n && pa.push(_a(n, t));
            else {
                Zt.now();
                pa = pa.concat(_a(n, t));
                var e = Nt.getElementsByTagName("meta"),
                o = de(e, "lx:cid") || rt.cid;
                if (! (ga = de(e, "lx:category"))) return void(ha = sn);
                ha = fn;
                var a = de(e, "lx:mvDelay");
                a = isNaN(a) ? 0 : parseInt(a, 10);
                var u = "off" !== de(e, "lx:autopv");
                rt.autoPV = u,
                M(wa, 1e3),
                wr.all([Xi(ga)]).then(function(n) {
                    var t, r = n[0],
                    e = r.appnm; ! Zt.isStr(e) || Nt.domain,
                    ma = new na(r, {
                        cid: o,
                        isDefault: !0,
                        mvDelay: a
                    }),
                    ga && ma.create(ga, {
                        isDefault: !0
                    }),
                    r = Zt.extend(!0, ma._dt.env, r),
                    ma._dt.env = r,
                    Zt.now();
                    try {
                        var i = [];
                        te.each(pa,
                        function(n) {
                            var t = n.cb,
                            e = n.cmd;
                            "config" === e || "set" === e ? t(ma, r) : i.push(n)
                        }),
                        Ne && (t = r.msid, eo || (eo = new to(t))),
                        u && ga && o && o && ma._initPV(r, o),
                        va.hook(function() {}),
                        te.each(i,
                        function(n) {
                            n && n.cb && n.cb(ma, r)
                        })
                    } catch(n) {}
                }).then(function() {
                    ha = dn
                },
                function(n) {
                    throw ha = dn,
                    n
                })
            }
        }
        var xa = [["click", en], ["tap", en], ["view", "moduleView"], ["return", "moduleEdit"], ["order", rn], ["pay", "pay"]],
        Sa = te.reduce(xa,
        function(n, t) {
            return n[t[0]] = t[1],
            n
        },
        {}),
        ka = [["mpt", nn], ["report", "pageDisappear"]],
        Oa = te.reduce(ka,
        function(n, t) {
            return n[t[0]] = t[1],
            n
        },
        {}),
        qa = te.reduce(["config", "event", "send", "use"],
        function(n, t) {
            return n[t] = !0,
            n
        },
        {}),
        Ia = function(n, t) {
            var e = Nt.getElementsByTagName("head")[0],
            r = Nt.createElement("meta");
            r.setAttribute("name", n),
            r.setAttribute("content", t),
            e.appendChild(r)
        },
        Aa = function(e, n) {
            return e = e || {},
            re(n,
            function(n, t) {
                1 === {
                    act: 1,
                    cid: 1,
                    val: 1,
                    lab: 1,
                    bid: 1
                } [t] ? e["val_" + t] = n: e[t] = n
            }),
            e
        },
        ja = function(n, t, e) { (n && !Yt(n) && (n = {
                custom: {
                    _lab: n
                }
            }), !n && e && (n = {}), e) && ((n.custom = n.custom || {})[t] = e);
            return n
        },
        Da = function(n, t, e) {
            return n && !Yt(n) && (n = {
                custom: {
                    _lab: n
                }
            }),
            n && (n[t] = e),
            n
        },
        Ea = function(n, t) {
            var e = n[Nn],
            r = n[Mn];
            if (e && e === r && (r = Gt(!0, {},
            r)), t && (r || e)) {
                var i = e;
                e = r || {},
                i && (e = ja(e || {},
                "_lab", i))
            } else if (!t && (r || e)) {
                if (ne(r) && (r = {
                    analyse_val: r
                }), ne(e)) e = {
                    val_lab: e
                };
                r && (e = Da(e || {},
                "page", r))
            }
            return Rt !== n[H] && (e = ja(e || {},
            "_act", n[H])),
            Rt !== n[z] && (e = ja(e || {},
            "_et", n[z])),
            Rt !== n[G] && (e = Da(e || {},
            G, n[G])),
            Rt !== n[Y] && (e = ja(e || {},
            "_el_id", n[Y])),
            e
        };
        function Ca(n) {
            var t, e, r, i = (e = (t = n).split("."), r = void 0, 2 === e.length && (t = e[1], r = e[0]), [t, r]),
            o = void 0;
            return i[1] && (o = i[1]),
            [n = i[0], o]
        }
        var Na = function t(e, n) {
            var r = Ca(e);
            e = r[0];
            var i = r[1],
            o = n[0],
            a = n[1];
            if (te.isArray(o)) return ie(o,
            function(n) {
                return t(i ? i + "." + e: e, [n, a])
            });
            var u, c, s = (o.nm || "mge").toLowerCase();
            o.nm = s,
            (c = (u = o).val) && (Aa(u, c), delete u.val),
            o = u;
            var f = "mge" === s;
            if ("mpt" === s) return function(n) {
                n = Aa(n, n.val);
                var t = Ea(n, !0);
                return [nn, t, null, n[Z]]
            }.apply(null, n);
            var d, l, v = rn === s,
            p = "pay" === s,
            h = o[z],
            m = o[H],
            g = Ea(o, !1);
            v || p || h || !f || !m ? p || v ? e = s: (l = h, e = "mge" === (d = s) ? l ? Sa[l] || tn: en: "mpt" === d || "report" === d ? Oa[d] : tn, f || (g = ja(g || {},
            "_nm", s))) : e = en;
            var _ = o[Z];
            return _ && ((a = a || {}).cid = _),
            i && ja(g, "_logchannel", i),
            ja(g = g || {},
            "_api", "v3"),
            e === rn || "pay" === e ? [e, o[Tn], g.order_id, g, a] : [e, o[Tn], g, a]
        },
        Ta = function n() {
            if (!n.f) {
                Ia("lx:autopv", "off"),
                n.f = !0
            }
        },
        Ma = function(n) {
            if (!n || !n.length) return n;
            try {
                var t = n[0];
                0 < (a = (o = t).indexOf(".")) && (o = o.substr(a + 1)),
                qa[o] && (n = te.slice(n, 1), Fa(t) ? (ke(3), Ta(), n = Na(t, n)) : Ra(t) ? (ke(3), Ta(), n = function(n, t) {
                    var e = Ca(n)[1];
                    n = nn;
                    var r = t[1],
                    i = t[2],
                    o = e ? {
                        custom: {
                            _logchannel: e
                        }
                    }: Rt,
                    a = {};
                    if (ne(r)) Yt(i) ? o = i: ne(i) && (o = ja({},
                    "analyse_val", i));
                    else if (Yt(r)) {
                        i = (a = Aa(a, r))[Mn],
                        ne(i) && (i = ja({},
                        "analyse_val", i)),
                        o = i;
                        var u = a[Nn];
                        u && ja(o, "_lab", u),
                        r = a[Z]
                    }
                    var c = void 0;
                    return r && ((c = {}).cid = r),
                    [n, o = ja(o, "_api", "v3"), Rt, c]
                } (t, n)) : La(t) ? (ke(3), Ta(), n = function(n, t) {
                    var e = t[0],
                    r = t[1];
                    if (e && (e = e.replace(/^data_sdk_/i, ""), Ia("lx:category", e)), Yt(r)) return ["set", r]
                } (0, n)) : Va(t, n[0], n[1]) ? (Ta(), e = t, r = n[0], i = n[1], n = "appnm" === r && ne(i) ? void Ia("lx:appnm", i) : ("cid" === r && ne(i) && Ia("lx:cid", i), [e, r, i])) : n.unshift(t))
            } catch(n) {}
            var e, r, i, o, a;
            return n
        },
        Fa = function(n) {
            var t = n.indexOf(".");
            return 0 < t && (n = n.substr(t + 1)),
            "event" === n
        },
        Ra = function(n) {
            var t = n.indexOf(".");
            return 0 < t && (n = n.substr(t + 1)),
            "send" === n
        },
        La = function(n) {
            return "use" === n
        },
        Va = function(n, t) {
            var e = !1;
            return "cid" !== t && "appnm" !== t || (ke(3), e = !0),
            "config" === n && e
        },
        Pa = void 0,
        Ba = void 0;
        function Ua(n, t, e, r, i) {
            if (Zt.isFunc(t)) t.call(n, n, r, i);
            else if (!i && Zt.isStr(t) && Zt.isFunc(n[t])) return n[t].apply(n, e)
        }
        function Qa() {
            if (!Ba) {
                Ba = !0;
                var r = void 0;
                Re && Zt.on(Nt, "mouseup",
                function(n) {
                    var t = n.target || n.srcElement,
                    e = t.tagName + t.href;
                    e = e.toLocaleLowerCase(),
                    1 === t.nodeType && /^ajavascript:/i.test(e) && (r = new Date)
                });
                var n = Et.onbeforeunload;
                Ne && Me ? Et.addEventListener("pagehide", be(!1, Re, r, void 0, Ka, Rt, st)) : Et.onbeforeunload = be(!1, Re, r, void 0, Ka, n, st)
            }
        }
        function Ka(r) {
            var n = arguments;
            if (n.length) {
                var i = te.slice(n, 1, n.length);
                try {
                    Pa ? Ua(Pa, r, i, Pa._dt ? Pa._dt.env: null) : ba(function(n, t, e) {
                        Ua(Pa = n, r, i, t, e),
                        Qa()
                    },
                    r)
                } catch(n) {
                    try {
                        hi("sdk", "api-error", "", n.message + "\n" + n.stack, !0)
                    } catch(n) {}
                }
            }
        }
        window._lxsdk_isDOMReady || (window._lxsdk_isDOMReady = !0,
        function() {
            var s = !0,
            f = !1,
            d = function() {
                var n = le();
                n && (n.q.push = function t(n) {
                    try {
                        var e, r = (e = Ma(n)) ? e[0] : "";
                        if (te.isArray(r)) return void re(e,
                        function(n) {
                            t(n)
                        });
                        "start" === r ? (s = !0, f || l(d)) : !1 === s ? e && d.push(e) : Ka.apply(Rt, e)
                    } catch(n) {
                        try {
                            hi("sdk", "api-error", "", n.stack, !0)
                        } catch(n) {}
                    }
                });
                for (var t = void 0,
                e = void 0,
                r = [], i = [], o = [], a = n && te.isArray(n.q) ? n.q: [], u = 0, c = a.length; u < c; u++)"config" === (e = a[u][0]) ? i.push(a[u]) : t || "use" !== e ? o.push(a[u]) : (r.push(a[u]), t = !0);
                return a = i.concat(r.concat(o))
            } ();
            function l(n) {
                f || (n && te.each(n,
                function(n) {
                    var t, e = (t = Ma(n)) ? t[0] : "";
                    te.isArray(e) ? re(t,
                    function(n) {
                        Ka.apply(Rt, n)
                    }) : e ? Ka.apply(Rt, t) : n && n && n[0]
                }), Ka(function() {
                    Qa()
                }), f = !0)
            }
            if (0 === d.length) ba(function(n) {
                Pa = n,
                Qa()
            });
            else try {
                d = ie(d,
                function(n) {
                    var t;
                    if ("config" === ((t = Ma(n)) ? t[0] : "")) {
                        var e = t[1],
                        r = t[2];
                        "autoStart" === e && !1 === r && (s = !1)
                    }
                    return t
                }),
                s && l(d)
            } catch(n) {}
        } ())
    } ();