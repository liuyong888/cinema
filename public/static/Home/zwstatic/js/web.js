!
function() {
    "use strict";
    var u = !0,
    t = "_MeiTuanALogObject",
    f = 1,
    w = "_lxsdk_",
    a = "dianping_nova",
    x = "waimai",
    S = "group",
    c = "demo",
    g = "4.9.6",
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
    R = "web_env",
    d = "wxid",
    l = "pd_data",
    T = /^(([^? \r\n]*)\?)?([^?# \r\n]+)(#\S+)?$/,
    F = setTimeout,
    v = clearTimeout,
    p = 1,
    o = 2,
    h = 3,
    m = 4,
    r = 5,
    i = 6,
    e = 20,
    M = 7;
    function N(n) {
        var t = n;
        return n && n.code && (t = n.code),
        t === p ? "E_TIME_OUT": t === o ? "E_NO_JSBRIDGE": t === h ? "E_KNB_FAIL": t === m ? "E_KNB_CB_FAIL": t === r ? "E_KNB_NOT_EXIST": t === e ? "ERR_PARAMS": t === i ? "E_KNB_METHOD_NOT_SUPPORT": "unknown error: " + t
    }
    var _ = 200,
    y = 100,
    b = 500,
    L = 600,
    V = -1,
    P = "PV",
    B = "PD",
    Q = "MC",
    U = "SC",
    J = "MV",
    $ = "MVL",
    K = "ME",
    W = "BO",
    X = "BP",
    z = "event_type",
    H = "val_act",
    Z = "val_cid",
    G = "index",
    Y = "element_id",
    nn = "pageView",
    tn = "systemCheck",
    en = "moduleClick",
    rn = "order",
    an = "order_id",
    on = 1e3,
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
    bn = "latlng",
    wn = "msid",
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
    Rn = "val_lab",
    Tn = "val_bid",
    Fn = "val_val",
    Mn = "sf",
    Nn = "__$lx_beacon_",
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
    Qn = ".sankuai.com",
    Un = "report.meituan.com",
    Jn = "hreport.meituan.com",
    $n = function() {};
    function n() {
        return window
    }
    function Kn() {
        return n().XMLHttpRequest
    }
    var Wn, Xn, zn = (Wn = Kn(), Xn = Wn && "withCredentials" in new Wn,
    function() {
        return Xn
    }),
    Hn = /__lxvalidation=([\w.]+)/i,
    Zn = 10,
    Gn = !1,
    Yn = void 0,
    nt = void 0,
    tt = {};
    function et(n) {
        var t, e = "v2/api/" + Pn + "/validate",
        r = "validate-ocean" + Qn,
        i = 0 === ge().indexOf("http:") ? "http:": "https:",
        a = i + "//" + n + "/",
        o = Et.search.match(Hn) || [],
        u = function() {
            var n = ie.get(Bn);
            if (n) {
                var t = n.split("|");
                return {
                    mis: t[0],
                    env: t[1] || ""
                }
            }
            return n || {}
        } (); (t = o && o[1] || u.mis || "") && (ie.set(Bn, t + "|", Zn), a = i + "//" + r + "/" + e + "?mis=" + t);
        return a
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
    var at = {
        MVL: !(rt.emit = function(r, i, a, o, u) {
            ne.each(it,
            function(n) {
                var t = n.name,
                e = n.fn;
                t === r && e(i, a, o, u)
            })
        }),
        QR: !1,
        getReqId: !1
    };
    function ot(n) {
        return !! at[n]
    }
    function ut(n, t) {
        Ht.isStr(n) && (tt[n] = t)
    }
    function ct(n) {
        Gn = n
    }
    function st() {
        return Gn === f
    }
    function ft(n) {
        return Yn && !n || (Yn = et(Un)),
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
    var ht = cn;
    function mt() {
        return ht
    }
    function gt(n) { (function() {
            if (Mt !== pt) return pt;
            var n = Ct.getElementsByTagName("meta");
            return pt = "off" === fe(n, "lx:native-report")
        })() || (ht = n)
    }
    var _t = !1;
    function yt(n) {
        _t = !!n
    }
    var bt = 5e3,
    wt = 50,
    xt = {
        MVL: {}
    },
    St = void 0,
    kt = void 0;
    function Ot(n, t, e, r) {
        r = r || {};
        var i = t.category,
        a = e.req_id,
        o = e.val_cid,
        u = e.val_bid,
        c = r.tag;
        if (xt[n] && Ht.isStr(n) && Ht.isStr(i) && Ht.isStr(a) && Ht.isStr(o) && Ht.isStr(u)) {
            var s = i + "_" + a + "_" + o + "_" + u,
            f = xt[n];
            Ht.isObj(f[s]) || (f[s] = {
                env: Ht.extend(!0, {},
                t),
                evs: e,
                lab: []
            }),
            Ht.isObj(c) && (f[s].evs.tag = c);
            var d = Ht.extend(!0, e.val_lab, {
                _seq: e.seq,
                _tm: e.tm
            });
            f[s].lab.push(d),
            function() {
                var n = 0;
                for (var t in xt) {
                    var e = xt[t];
                    for (var r in e) {
                        var i = e[r].lab;
                        n += i.length || 0
                    }
                }
                wt < n && At()
            } ()
        }
    }
    function qt(n, t) {
        var e = (t || {}).withUnload,
        r = xt[n];
        if (Ht.isObj(r)) {
            var i = [];
            for (var a in r) {
                var o = r[a],
                u = !1;
                if (o.lab && o.lab.length) {
                    var c = o.env,
                    s = o.evs,
                    f = {
                        mv_list: o.lab,
                        custom: {
                            _withUnload: !!e
                        }
                    };
                    s.val_lab = f;
                    for (var d = 0,
                    l = i.length; d < l; d++) {
                        var v = i[d];
                        if (!It(v, c)) {
                            v.evs.push(s),
                            u = !0;
                            break
                        }
                    }
                    u || (c.evs = [s], i.push(c))
                }
            }
            i.length && kt.send(i),
            xt[n] = {}
        }
    }
    function It(n, t) {
        var e = 0,
        r = 0;
        for (var i in n) n.hasOwnProperty(i) && e++;
        for (var a in t) t.hasOwnProperty(a) && r++;
        var o = r < e ? n: t,
        u = e <= r ? n: t;
        for (var c in o) {
            if (! ( - 1 < "evs|".indexOf(c + "|"))) if (Ht.isObj(o[c]) && Ht.isObj(u[c])) {
                if (It(o[c], u[c])) return ! 0
            } else if (o[c] !== u[c]) return ! 0
        }
        return ! 1
    }
    function At(n) {
        var t = (n || {}).withUnload;
        for (var e in xt) qt(e, {
            withUnload: t
        })
    }
    F(function n() {
        clearTimeout(St);
        try {
            At()
        } catch(n) {} finally {
            mt() === cn ? St = F(n, bt) : clearTimeout(St)
        }
    },
    100);
    var jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(n) {
        return typeof n
    }: function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol": typeof n
    },
    Dt = n(),
    Et = location,
    Ct = document,
    Rt = Ct.domain,
    Tt = navigator,
    Ft = Tt.userAgent.toString(),
    Mt = void 0,
    Nt = Array.prototype,
    Lt = Object.prototype,
    Vt = decodeURIComponent,
    Pt = encodeURIComponent,
    Bt = Wt(),
    Qt = Lt.toString,
    Ut = Lt.hasOwnProperty;
    function Jt() {}
    function $t(n) {
        return void 0 === n ? "undefined": jt(n)
    }
    function Kt(n, t) {
        return $t(n) === t
    }
    function Wt() {
        return + new Date
    }
    function Xt() {
        return Math.random()
    }
    function zt(n) {
        return Kt(n, "number")
    }
    var Ht = {};
    function Zt(n, e, r) {
        var i = void 0,
        a = !0 === n;
        return a || (r = e, e = n),
        e && Ht.isObj(e) || (e = {}),
        r && Ht.isObj(r) || (r = {}),
        ne.each(r,
        function(n, t) {
            a && Ht.isObj(r[t]) ? (i = e[t], e[t] = Ht.isObj(i) ? i: {},
            Zt(a, e[t], r[t])) : e[t] = r[t]
        }),
        e
    }
    Ht.trim = function(n) {
        return n.replace(/^[\s\uFEFF\xA0\u3000]+|[\s\uFEFF\xA0\u3000]+$/g, "")
    },
    Ht.now = Wt,
    Ht.rnd = Xt,
    Ht.hasOwn = function(n, t) {
        return Ut.call(n, t)
    },
    Ht.extend = Zt;
    var Gt = function(n) {
        return n && "[object Object]" === Qt.call(n)
    };
    Ht.isObj = Gt;
    var Yt = function(n) {
        return Kt(n, "string")
    };
    Ht.isStr = Yt,
    Ht.isFunc = function(n) {
        return Kt(n, "function")
    },
    Ht.attr = function(n, t) {
        return n.getAttribute(t)
    },
    Ht.parseQuery = function(n) {
        var i = {};
        if (n) {
            var t = n.replace(T,
            function(n, t, e, r) {
                return r || ""
            }).split("&");
            return ne.each(t,
            function(n) {
                var t = n.split("="),
                e = t[0],
                r = t[1] || "";
                e && !Ut.call(i, e) && (i[e] = Vt(r))
            }),
            i
        }
    },
    Ht.stringifyQuery = function(n) {
        var r = [];
        return Ht.isObj(n) && ne.each(n,
        function(n, t) {
            var e;
            Ht.isFunc(n) || (Mt !== n && ((e = n) || !Kt(e, "object")) || (n = n || ""), r.push(Pt(t) + "=" + Pt(n)))
        }),
        r.join("&")
    },
    Ht.genReqId = function() {
        return "" + 1e3 * Wt() + parseInt(1e3 * Xt())
    },
    Ht.run = function(n, t) {
        te(n) ? ne.each(n, t) : t(n)
    },
    Ht.on = function(n, t, e) {
        n.addEventListener ? n.addEventListener(t, e, !1) : n.attachEvent && n.attachEvent("on" + t, e)
    },
    Ht.off = function(n, t, e) {
        n.removeEventListener ? n.removeEventListener(t, e, !1) : n.detachEvent && n.detachEvent("on" + t, e)
    };
    var ne = {
        isArray: function(n) {
            return "[object Array]" === Qt.call(n)
        }
    },
    te = function(n) {
        if (!n) return ! 1;
        var t = n.length;
        return !! ne.isArray(n) || !!(n && zt(t) && 0 <= t) && (!Ht.isObj(n) || (!(1 < t) || t - 1 in n))
    };
    ne.isArrayLike = te,
    ne.find = function(e, r, i) {
        var a = void 0;
        return te(e) && ne.each(e,
        function(n, t) {
            if (!0 === r.call(i, n, t, e)) return a = n,
            !1
        }),
        a
    },
    ne.filter = function(e, r, i) {
        var a = [];
        return te(e) && ne.each(e,
        function(n, t) {
            r.call(i, n, t, e) && a.push(n)
        }),
        a
    },
    ne.toArray = function(n, t, e) {
        var r = [];
        return te(n) && ne.each(n,
        function(n) {
            r.push(t ? t.call(e, n) : n)
        },
        e),
        r
    };
    var ee = function(n, t, e) {
        if (n) {
            var r = void 0,
            i = void 0,
            a = void 0;
            if (te(n)) for (i = 0, a = n.length; i < a && !1 !== t.call(e, n[i], i, n); i++);
            else for (r in n) if (Ht.hasOwn(n, r) && !1 === t.call(e, n[r], r, n)) break
        }
    };
    ne.each = ee;
    var re = function(n, t, e) {
        if (n) {
            for (var r = [], i = 0, a = n.length; i < a; i++) {
                var o = t.call(e, n[i], i, n);
                r.push(o)
            }
            return r
        }
    };
    ne.slice = function(n, t, e) {
        return Nt.slice.call(ne.toArray(n), t, e)
    },
    ne.reduce = function(n, t) {
        if (te(n) && Ht.isFunc(t)) {
            var e = n,
            r = e.length >>> 0,
            i = 0,
            a = void 0,
            o = arguments;
            if (3 === o.length) a = o[2];
            else {
                for (; i < r && !(i in e);) i++;
                if (r <= i) return;
                a = e[i++]
            }
            for (; i < r;) i in e && (a = t(a, e[i], i, e)),
            i++;
            return a
        }
    };
    var ie = {};
    function ae(n) {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        e = void 0,
        r = void 0,
        i = void 0,
        a = void 0,
        o = void 0,
        u = 0,
        c = 0,
        s = "",
        f = [];
        if (!n) return n;
        for (n = oe(n); e = (o = n.charCodeAt(u++) << 16 | n.charCodeAt(u++) << 8 | n.charCodeAt(u++)) >> 18 & 63, r = o >> 12 & 63, i = o >> 6 & 63, a = 63 & o, f[c++] = t.charAt(e) + t.charAt(r) + t.charAt(i) + t.charAt(a), u < n.length;);
        switch (s = f.join(""), n.length % 3) {
        case 1:
            s = s.slice(0, -2) + "==";
            break;
        case 2:
            s = s.slice(0, -1) + "="
        }
        return s
    }
    function oe(n) {
        var t, e = "",
        r = void 0,
        i = void 0,
        a = void 0;
        for (r = i = 0, t = (n = (n + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, a = 0; a < t; a++) {
            var o = n.charCodeAt(a),
            u = null;
            o < 128 ? i++:u = 127 < o && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128),
            null !== u && (r < i && (e += n.substring(r, i)), e += u, r = i = a + 1)
        }
        return r < i && (e += n.substring(r, n.length)),
        e
    }
    ie.del = function(n, t) {
        var e = n + "=;path=/;domain=" + t,
        r = new Date;
        return r.setFullYear(1970),
        e += ";expires=" + r.toUTCString(),
        Ct.cookie = e,
        !0
    },
    ie.get = function(n) {
        var t = Ct.cookie.match(new RegExp("(?:^|;)\\s*" + n + "=([^;]+)"));
        return Vt(t ? t[1] : "")
    },
    ie.set = function(n, t, e, r) {
        r = r || Ct.domain;
        var i = void 0,
        a = void 0,
        o = void 0,
        u = n + "=" + Pt(t) + ";path=/;domain=" + r;
        Mt === e || isNaN(e) || (i = new Date, a = 60 * parseInt(e, 10) * 1e3, o = i.getTime() + a, i.setTime(o), u += ";expires=" + i.toUTCString());
        try {
            return Ct.cookie = u,
            !0
        } catch(n) {
            return ! 1
        }
    },
    ie.top = function(n, t, e) {
        var r = Ct.domain,
        i = r.split("."),
        a = i.length,
        o = a - 1,
        u = void 0,
        c = !1;
        for (t = "" + t; ! c && 0 <= o && (r = i.slice(o, a).join("."), ie.set(n, t, e, r), u = ie.get(n), Mt !== u && (c = u === t), o--, !c););
    },
    ie.del = function(n) {
        return ie.top(n, "", -100)
    };
    var ue = window.btoa,
    ce = ae;
    try {
        Ht.isFunc(ue) && ue(oe(Ft)) === ae(Ft) && (ce = function(n) {
            return ue(oe(n))
        })
    } catch(n) {}
    var se = ce;
    function fe(n, t) {
        var e = void 0,
        r = ne.find(n,
        function(n) {
            return Ht.attr(n, "name") === t
        });
        return r && (e = Ht.attr(r, "content")),
        e
    }
    function de() {
        var n = Dt[t];
        return Dt[n]
    }
    var le, ve = (le = void 0, {
        update: function(n) {
            le = n
        },
        get: function() {
            return le
        }
    });
    function pe(n) {
        var t = {
            duration: function(n) {
                var t = void 0,
                e = ve.get(),
                r = Wt();
                if (n && e) t = e,
                ve.update(r);
                else {
                    var i = de(),
                    a = Dt.performance && Dt.performance.timing; (t = a && a.requestStart) || (t = i ? i.l: Bt),
                    ve.update(r)
                }
                return r - t
            } (!0 === n)
        },
        e = void 0,
        r = rt.quit;
        return Ht.isFunc(r) && (e = r() || {}),
        t = Ht.extend(t, e || {})
    }
    function he(n, t) {
        t[an]
    }
    var me = 2032;
    function ge() {
        return Et.protocol
    }
    /trident/i.test(Ft) || /msie/i.test(Ft) || !/mozilla.+webkit.+chrome.+/i.test(Ft) || (me = 6e3);
    var _e = 0;
    function ye(n, t) {
        var e = /^((\d+\.)+\d+).*$/;
        if ("string" !== $t(n) || "string" !== $t(t)) return NaN;
        if (!e.test(n) || !e.test(t)) return NaN;
        for (var r = n.replace(e, "$1").split("."), i = t.replace(e, "$1").split("."), a = 0, o = Math.max(r.length, i.length); a < o; a++) {
            if (!r[a] || !i[a])(!r[a] && r || !i[a] && i).push("0");
            var u = r[a].toString().length,
            c = i[a].toString().length;
            if (u !== c) {
                var s = c < u ? i: r;
                s[a] = Array(Math.abs(u - c) + 1).join("0") + s[a].toString()
            }
        }
        var f = parseInt(r.join("")),
        d = parseInt(i.join(""));
        return f == d ? 0 : d < f ? 1 : -1
    }
    function be(e, r, i, a, o, u, c) {
        return function(n) {
            if (!e) {
                e = !0;
                try {
                    if (r && new Date - i < 50) return;
                    if (a) return;
                    if (a = !1, !c()) {
                        var t = pe();
                        o("pageDisappear", t, {
                            shouldStore: !0
                        })
                    }
                    At({
                        withUnload: !0
                    })
                } catch(n) {}
                u && u(n)
            }
        }
    }
    var we = 4,
    xe = "",
    Se = function(n) {
        we = n
    },
    ke = function() {
        return xe && 3 === we
    },
    Oe = function(n) {
        xe = n
    },
    qe = function() {
        return xe
    },
    Ie = Dt.sessionStorage,
    Ae = Ft,
    je = [{
        n: c,
        r: /lingxi\/demo\/\d+/i,
        v: Ae
    },
    {
        n: a,
        r: /dp\/com\.dianping\.[\w.]+\/([\d.]+)/i,
        v: Ae
    },
    {
        n: x,
        r: /\bmeituanwaimai-c\/\d+\./i,
        v: Ae
    },
    {
        n: "moviepro",
        r: /\bmoviepro/i,
        v: Ae
    },
    {
        n: "movie",
        r: /\bmaoyan\b/i,
        v: Ae
    },
    {
        n: S,
        r: /\bmeituan \d+|meituangroup\/\d+\./i,
        v: Ae
    }],
    De = /android/i.test(Ae),
    Ee = "",
    Ce = De,
    Re = !1,
    Te = !1,
    Fe = "www",
    Me = !1;
    if (/\bandroid|mobile\b|\bhtc\b/i.test(Ae)) {
        Fe = "i",
        Ce = !0,
        ne.each(je,
        function(n) {
            if (n.r.test(n.v)) return Ee = n.n,
            !1
        }),
        /\btitans(no){0,1}x\b/i.test(Ae) && (Re = !0);
        var Ne = /iphone/i.test(Ae),
        Le = /ipad/i.test(Ae); (Ne || Le) && (Te = !0),
        Ee && (Ne ? Fe = "iphone": /android/i.test(Ae) ? Fe = "android": Le && (Fe = "ipad"))
    } else {
        var Ve = Ae.match(/(msie) (\d+)|Trident\/(d+)/i);
        Ve && (Me = !0, Ve && parseInt(Ve[2], 10))
    }
    var Pe = Dt.screen.width + "*" + Dt.screen.height,
    Be = Re || / knb\/\d+/i.test(Ft),
    Qe = function() {
        var n = Dt.KNB;
        return Ce && Be && n && n.isApiSupported
    },
    Ue = Ft.replace(/^.*TitansX\/([\d.]+)\s.*$/i, "$1"),
    Je = Ce && /\sMicroMessenger/.test(Ae),
    $e = A + "_source",
    Ke = A + "_medium",
    We = A + "_term",
    Xe = A + "_campaign",
    ze = A + "_content",
    He = void 0,
    Ze = !1;
    function Ge(n) {
        if (!n) return Mt;
        var e = Mt,
        r = /^utm_(source|medium|term|content|campaign)$/;
        return ne.each(n,
        function(n, t) {
            r.test(t) && (!e && (e = {}), e[t] = n)
        }),
        e
    }
    function Ye(n) {
        if (n) {
            He = n;
            var t = Ht.stringifyQuery(n);
            return ie.del(hn, Rt),
            ie.top(hn, t, ln, Rt),
            !0
        }
        return ! 1
    }
    function nr(n, t) {
        var a, e, r, i, o;
        return (!He && !Ze || n) && (n = n || Et.href, t = t || Ct.referrer, o = n, (He = Ge(Ht.parseQuery(o)) ||
        function(n) {
            var t = Mt,
            e = n.match(/^[\w-]+:\/\/([^/] + )( ? :\ / ([ ^ ?] + ) ? ) ? /),o=e&&e[1];if(o){var u=Ht.parseQuery(n),r="daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q m.baidu:word wap.baidu:word baidu:word Baidu:bs www.soso:w wap.soso:key www.sogou:query wap.sogou:keyword m.so:q m.sogou:keyword so.com:pq youdao:q sm.cn:q sm.cn:keyword haosou:q".split(" "),c="",s="";ne.each(r,function(n){var t=n.split(":"),e=t[0],r=t[1],i=u[r],a=-1<e.indexOf(".")?e:"."+e+".";if(-1<o.indexOf(a.toLowerCase())&&(s=e,c=i))return!1}),s&&((t={})[$e]=s,t[Ke]="organic",c&&(t[We]=c))}return t}(t))?Ye(He):(i=ie.get(hn),He=T.test(i)?Ge(Ht.isStr(i)?Ht.parseQuery(i):null):He),He||(a=void 0,e=ie.get("__utmz"),(r=e&&e.match(/ (utmc(tr | sr | cn | md | ct)) = ([ ^ |()] + ) / g)) && ne.each(r,
            function(n) {
                var t = n.split("="),
                e = t[0],
                r = void 0,
                i = t[1] || "";
                "utmcsr" === e ? r = $e: "utmccn" === e ? r = Xe: "utmcmd" === e ? r = Ke: "utmcct" === e ? r = ze: "utmctr" === e && (r = We),
                r && ((a = a || {})[r] = i)
            }),
            Ye(He = a)),
            Ze = u),
            He
        }
        var tr, er, rr, ir, ar = Dt.JSON;
        ar || (ar = {
            parse: function(n) {
                return new Function("return (" + n + ")")()
            },
            stringify: (tr = ne.isArray, er = {
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t"
            },
            rr = function(n) {
                return er[n] || "\\u" + (n.charCodeAt(0) + 65536).toString(16).substr(1)
            },
            ir = /[\\"\u0000-\u001F\u2028\u2029]/g,
            function n(t) {
                if (null == t) return "null";
                if (Kt(t, "number")) return isFinite(t) ? t.toString() : "null";
                if (Kt(t, "boolean")) return t.toString();
                if (Kt(t, "object")) {
                    if ("function" === $t(t.toJSON)) return n(t.toJSON());
                    if (tr(t)) {
                        for (var e = "[",
                        r = 0; r < t.length; r++) e += (r ? ", ": "") + n(t[r]);
                        return e + "]"
                    }
                    if (Ht.isObj(t)) {
                        var i = [];
                        for (var a in t) t.hasOwnProperty(a) && i.push(n(a) + ": " + n(t[a]));
                        return "{" + i.join(", ") + "}"
                    }
                }
                return '"' + t.toString().replace(ir, rr) + '"'
            })
        });
        var or = ar,
        ur = "__lxsdk_",
        cr = Dt.localStorage;
        function sr(n) {
            return ur + n
        }
        function fr() {
            return {
                length: 0,
                _data: {},
                setItem: function(n, t) {
                    return this.length++,
                    this._data[n] = String(t)
                },
                getItem: function(n) {
                    return this._data.hasOwnProperty(n) ? this._data[n] : Mt
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
                    return ne.each(e,
                    function(n) {
                        Ht.hasOwn(e, n) && t.push(n)
                    }),
                    t[n]
                }
            }
        }
        var dr = {
            get: function(n) {
                n = sr(n);
                var t = cr.getItem(n);
                return t = Mt !== t ? or.parse(t) : t
            },
            set: function(n, t) {
                return dr.del(n),
                cr.setItem(sr(n), or.stringify(t))
            },
            keys: function() {
                for (var n = [], t = void 0, e = 0; e < cr.length; e++) 0 === (t = cr.key(e)).indexOf(ur) && n.push(t.replace(ur, ""));
                return n
            },
            del: function(n) {
                try {
                    return cr.removeItem(sr(n))
                } catch(n) {}
            },
            clear: function() {
                for (var n = this.keys(), t = 0; t < n.length; t++) this.del(n[t])
            }
        };
        if (cr) {
            if (cr) {
                var lr = "___lxtest";
                dr.nt = !0;
                try {
                    dr.set(lr, 1),
                    1 !== dr.get(lr) ? dr.clear() : dr.del(lr)
                } catch(n) {
                    try {
                        dr.clear(),
                        cr.setItem(lr, 1),
                        cr.removeItem(lr)
                    } catch(n) {
                        cr = fr(),
                        dr.nt = !1
                    }
                }
            }
        } else cr = fr(),
        dr.nt = !1;
        var vr = "tag",
        pr = 18e5;
        function hr(n, t, e, r, i, a) {
            var o = {};
            o.c = n,
            o.k = t,
            o.v = e,
            o.t = r || +new Date,
            o.u = i || "",
            o.r = a || "",
            this.toJSON = function() {
                return Ht.extend(!0, {},
                o)
            }
        }
        var mr = {
            set: function(n, t, e) {
                var r = void 0,
                i = [],
                a = dr.get(vr) || [];
                if (!Ht.isStr(t) || "" === t) return ! 1;
                for (var o = 0,
                u = a.length; o < u; o++) gr(r = a[o]) || (n === r.c ? t !== r.k && i.push(r) : i.push(r));
                return r = new hr(n, t, e, +new Date),
                i.push(r.toJSON()),
                dr.set(vr, i),
                !0
            },
            get: function(n, t) {
                var e = void 0,
                r = dr.get(vr);
                if (r && r.length) return e = {},
                ne.each(r,
                function(n) {
                    var t = {};
                    t[n.k] = n.v,
                    gr(n) || (e[n.c] = Ht.extend(!0, e[n.c] || {},
                    t))
                }),
                n && t ? e[n] && e[n][t] : n ? e[n] : e
            },
            getAll: function() {
                var n = dr.get(vr),
                e = {},
                r = void 0;
                return ne.each(n,
                function(n) {
                    var t = void 0; ! gr(n) && n.v && (r = !0, (t = {})[n.k] = n.v, e[n.c] = Ht.extend(!0, e[n.c], t))
                }),
                r && e
            },
            clear: function(t, e) {
                if (!arguments.length) return dr.set(vr, []);
                if (Ht.isStr(t)) {
                    var n = dr.get(vr),
                    r = [];
                    ne.each(n,
                    function(n) { (e !== Mt && n.k !== e || t !== n.c) && r.push(n)
                    }),
                    dr.set(vr, r)
                }
            }
        };
        function gr(n) {
            var t = Ht.now();
            return pr < t - n.t
        }
        function _r(n) {
            return n
        }
        function yr(n) {
            try {
                n(Or(this, wr), Or(this, br))
            } catch(n) {
                if (this._state === xr) return Ir(new yr(_r), br, n)
            }
        }
        yr.prototype.then = function(n, t) {
            return function(n, t, e, r) {
                $t(e) === Sr && (t._onFulfilled = e);
                $t(r) === Sr && (t._onRejected = r);
                n._state === xr ? n[n._pCount++] = t: qr(n, t);
                return t
            } (this, new yr(_r), n, t)
        },
        yr.all = function(l) {
            return new yr(function(r, e) {
                for (var n, t, i, a = 0,
                o = l.length,
                u = [], c = 0, s = void 0, f = function(e) {
                    return function(n) {
                        if (e.value = n, e.state = wr, ++c === e.len && !s) {
                            var t = function(n) {
                                var t = [];
                                for (a = 0; a < o; a++) t.push(n[a] ? n[a].value: void 0);
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
                }; a < o; a++) t = n = void 0,
                t = l[a],
                i = {
                    value: null,
                    index: a,
                    state: null,
                    len: o
                },
                u.push(i),
                n = i,
                t.then ? t.then(f(n), d(n)) : yr.resolve(t).then(f(n), d(n))
            })
        },
        yr.resolve = function(t) {
            if (t instanceof yr) return t;
            if (Ht.isFunc(t.then)) {
                var e = t.then.bind(t);
                return new yr(function(n, t) {
                    e(n, t)
                })
            }
            return new yr(function(n) {
                n(t)
            })
        },
        yr.reject = function(e) {
            return new yr(function(n, t) {
                t(e)
            })
        };
        var br = 0,
        wr = 1,
        xr = 2,
        Sr = "function",
        kr = "object";
        function Or(t, e) {
            return function(n) {
                return Ir(t, e, n)
            }
        }
        function qr(e, r) {
            return setTimeout(function() {
                var n = void 0,
                t = e._state ? r._onFulfilled: r._onRejected;
                if (void 0 !== t) {
                    try {
                        n = t(e._value)
                    } catch(n) {
                        return void Ir(r, br, n)
                    }
                    Ar(r, n)
                } else Ir(r, e._state, e._value)
            })
        }
        function Ir(n, t, e) {
            if (n._state === xr) {
                n._state = t,
                n._value = e;
                for (var r = 0,
                i = n._pCount; r < i;) qr(n, n[r++]);
                return n
            }
        }
        function Ar(t, n) {
            if (n !== t || !n) {
                var e = void 0,
                r = $t(n);
                if (null === n || r !== Sr && r !== kr) Ir(t, wr, n);
                else {
                    try {
                        e = n.then
                    } catch(n) {
                        return void Ir(t, br, n)
                    }
                    $t(e) === Sr ?
                    function(t, e, n) {
                        try {
                            n.call(e,
                            function(n) {
                                e && (e = null, Ar(t, n))
                            },
                            function(n) {
                                e && (e = null, Ir(t, br, n))
                            })
                        } catch(n) {
                            e && (Ir(t, br, n), e = null)
                        }
                    } (t, n, e) : Ir(t, wr, n)
                }
                return t
            }
            Ir(t, br, new Error("promise_circular_chain"))
        }
        yr.prototype._state = xr;
        var jr = !1,
        Dr = 2e3,
        Er = [],
        Cr = !1,
        Rr = void(yr.prototype._pCount = 0);
        function Tr(t, e) {
            ne.each(Er,
            function(n) {
                n(t, e)
            }),
            Er = []
        }
        function Fr(n) {
            var t = Dt.KNB;
            if (Qe()) {
                if (c === Ee) n(Mt, t);
                else if (jr || Rr) n(Rr, t);
                else if (Er.push(n), !Cr) {
                    Cr = !0;
                    var e = F(function() {
                        Tr(Rr = p, t)
                    },
                    Dr);
                    Wt();
                    /meituan \d+/i.test(Ft) || /meituangroup\/7\.([0-7])\./i.test(Ft) ? Tr(Rr = i, t) : (t.ready(function() {}), t.ready(function() {
                        t.isApiSupported({
                            apiName: "lxlog",
                            success: function(n) { ! 0 === n ? (jr = !0, Wt(), v(e), Tr(Mt, t)) : Tr(Rr = i, t)
                            },
                            fail: function() {
                                v(e),
                                Tr(Rr = m)
                            }
                        })
                    }))
                }
            } else n(r, t)
        }
        var Mr = 500,
        Nr = "getUserInfo";
        function Lr() {
            return new yr(function(a, r) {
                Fr(function(n, t) {
                    var e = Dt.DPApp,
                    i = F(function() {
                        a({})
                    },
                    Mr);
                    t ? t.ready(function() {
                        t.use(Nr, {
                            success: function(n) {
                                var t, e, r;
                                v(i),
                                a((e = {},
                                (r = (t = n)[E]) && "0" !== r || "dp" !== t.type ? t[E] && (e[E] = t[E]) : e[E] = t[O], "dp" !== t.type && t[O] && (e[O] = t[O]), t.unionId && (e.unionId = t.unionId), t.userId && (e.userId = t.userId), e))
                            },
                            fail: function(n) {
                                v(i),
                                r({
                                    code: h
                                })
                            }
                        })
                    }) : e && e[Nr] ? e.ready(function() {
                        e[Nr]({
                            success: function(n) {
                                v(i);
                                var t = {}; (n.dpid || n.userId) && (t.dpid = n.dpid, t.userId = n.userId, t.unionId = n.unionId),
                                a(t)
                            },
                            fail: function(n) {
                                v(i),
                                r({
                                    code: o,
                                    res: n
                                })
                            }
                        })
                    }) : r({
                        code: o
                    })
                })
            })
        }
        var Vr, Pr = (Vr = function() {
            for (var n = 1 * new Date,
            t = 0; n === 1 * new Date && t < 200;) t++;
            return n.toString(16) + t.toString(16)
        },
        function() {
            var n = (screen.height * screen.width).toString(16);
            return Vr() + "-" + Math.random().toString(16).replace(".", "") + "-" +
            function() {
                var n = Ae,
                t = void 0,
                e = void 0,
                i = [],
                r = 0;
                function a(n, t) {
                    var e = void 0,
                    r = 0;
                    for (e = 0; e < t.length; e++) r |= i[e] << 8 * e;
                    return n ^ r
                }
                for (t = 0; t < n.length; t++) e = n.charCodeAt(t),
                i.unshift(255 & e),
                4 <= i.length && (r = a(r, i), i = []);
                return 0 < i.length && (r = a(r, i)),
                r.toString(16)
            } () + "-" + n + "-" + Vr()
        });
        function Br() {
            var n, t = ie.get(gn) || Pr();
            return (n = t) && ie.top(gn, n, vn),
            t
        }
        function Qr() {
            return Math.floor(1 + 65535 * Ht.rnd()).toString(16).substring(1)
        }
        function Ur(n) {
            var t = n.match(/(\d+)(?:\.(\d+)(?:\.(\d+))?)?/),
            e = [];
            if (t) for (var r = 1; r < t.length; r++) e.push(parseInt(t[r] || 0));
            return e
        }
        function Jr(n, t) {
            var e = Ur(n),
            r = Ur(t);
            return ! (e[0] < r[0]) && (!(e[0] === r[0] && e[1] < r[1]) && !(e[0] === r[0] && e[1] === r[1] && e[2] < r[2]))
        }
        var $r = "getEnv",
        Kr = y,
        Wr = !1,
        Xr = !1,
        zr = !1,
        Hr = !1,
        Zr = [],
        Gr = 0,
        Yr = void 0,
        ni = Ht.now();
        function ti(n) {
            var t = (n._opts || {}).nativeOptions || {};
            return {
                cb: "_lx" + (100 * Ht.now() + Gr++),
                mn: n._mn,
                cn: n._cn,
                data: n._d || {},
                options: t,
                ver: 4
            }
        }
        function ei(n, t, e, r, i) {
            i = i || {};
            var a = this;
            a._cn = n,
            a._mn = t,
            a._d = e,
            a._cb = r,
            a._opts = i
        }
        function ri(n, t, e, r, i) {
            if (b === Kr || L === Kr) return r(Kr);
            var a = new ei(n, t, e, $n, i);
            if (_ === Kr) a.send(function(n, t) {
                r(n, t)
            });
            else if (y === Kr) {
                if (Zr.push([a, r]), !Wr) {
                    Wr = !0;
                    new Date;
                    new ei(n, $r, {}).send(function(r, n) {
                        if (new Date, r && N(r), r) Kr = b;
                        else {
                            if (Kr = _, gt(un), Ht.isStr(n)) try {
                                n = or.parse(n)
                            } catch(n) {}
                            var t = (Yr = n).sdk_ver || "";
                            Xr = Jr(t, "4.0.0"),
                            zr = Jr(t, "4.3.0"),
                            Hr = !Jr(t, "4.8.0")
                        }
                        ne.each(Zr,
                        function(n) {
                            var t = n[0],
                            e = n[1];
                            r ? (N(r), e(r)) : t.send(function(n, t) {
                                e(n, t)
                            })
                        })
                    })
                }
            } else r(V)
        }
        function ii() {
            return Xr
        }
        var ai = 3,
        oi = 150,
        ui = 5e3,
        ci = 3500,
        si = !(ei.prototype.send = function(e) {
            var r = this,
            i = ti(r),
            n = "statistics://_lx/?data=" + Pt(or.stringify(i)),
            t = Ht.now();
            Yr && 5e3 < t - ni && r._mn === $r && Kr === _ ? (r._mn, e(0, Yr)) : (r._mn, i.cb,
            function(i, a, o) {
                if (Ee !== c || !window.JavaScriptBridge) return Fr(function(n, t) {
                    if (n) return o(n);
                    var e = !1,
                    r = F(function() {
                        e = !0,
                        o(p)
                    },
                    5e3);
                    t.use(i, {
                        data: a,
                        success: function(n) {
                            if (v(r), !e) if ("success" === n.status) {
                                var t = n.data || {};
                                try {
                                    Ht.isStr(t) && (t = or.parse(t)),
                                    o(Mt, t.data ? t.data: n)
                                } catch(n) {
                                    o(n)
                                }
                            } else o(m)
                        },
                        fail: function() {
                            v(r),
                            e || o(m)
                        }
                    })
                });
                window.JavaScriptBridge.log(a,
                function(n) {
                    var t = n.data;
                    try {
                        Ht.isStr(t) && (t = or.parse(t)),
                        o(Mt, t.data ? t.data: t)
                    } catch(n) {
                        o(n)
                    }
                })
            } ("lxlog", n,
            function(n, t) {
                n ? (r._mn, i.cb, new Date, N(n)) : (r._mn, i.cb, new Date),
                e(n, t)
            }))
        }),
        fi = [],
        di = [],
        li = 0,
        vi = 0;
        function pi(n, t, e, r, i) {
            var a = [{
                project: "web-lx-sdk",
                pageUrl: Et.href,
                resourceUrl: n,
                category: i ? "jsError": "ajaxError",
                sec_category: t,
                level: "error",
                unionId: e,
                timestamp: Ht.now(),
                content: "" + r || ""
            }],
            o = yi("//catfront.dianping.com/api/log?v=1", Vn, "application/x-www-form-urlencoded");
            o && (o.onerror = o.onreadystatechange = function() {},
            o.send("c=" + encodeURIComponent(or.stringify(a))))
        }
        function hi(n, t) {
            if (ai <= vi) return ! 1;
            t = Ht.extend({
                cb: Jt
            },
            t || {});
            var e, r, i, a = ft(),
            o = !rt.use_post;
            try {
                o ? (!
                function n(t, e) {
                    var r = Wt().toString(16) + li++;
                    var i = void 0,
                    a = e || 0,
                    o = (u = t, c = [], s = [{
                        l: jn,
                        s: Dn
                    },
                    {
                        l: wn,
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
                    }], ne.each(u,
                    function(n) {
                        var t = Ht.extend(!0, {},
                        n);
                        ne.each(s,
                        function(n) {
                            bi(t, n.l, n.s)
                        });
                        var e = [];
                        ne.each(n.evs,
                        function(r) {
                            r = Ht.extend(!0, {},
                            r),
                            ne.each(r,
                            function(n, t) {
                                if ( - 1 < t.indexOf("val_") && (r[t.replace("val_", "")] = r[t], delete r[t]), bi(r, "refer_url", "urlr"), r[t] && "url" === t) {
                                    var e = Et.hash;
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
                    ne.each(o,
                    function(n) {
                        delete n.ua
                    });
                    i = or.stringify(o);
                    if (!
                    function(n) {
                        for (var t = n.length,
                        e = t,
                        r = 0; r < t; r++) 127 < n.charCodeAt(r) && e++;
                        return 1.5 * e < me
                    } (i)) {
                        var f = t.length;
                        if (1 < f) {
                            var d = parseInt((f + 1) / 2),
                            l = t.slice(0, d),
                            v = t.slice(d);
                            l.length && n(l, a),
                            v.length && n(v, a)
                        } else {
                            var p = t[0],
                            h = p.evs,
                            m = h.length;
                            if (1 < m) {
                                var g = parseInt((m + 1) / 2),
                                _ = h.slice(0, g),
                                y = h.slice(g);
                                _.length && n([Ht.extend(Ht.extend({},
                                p), {
                                    evs: _
                                })], a),
                                y.length && n([Ht.extend(Ht.extend({},
                                p), {
                                    evs: y
                                })], a)
                            } else {
                                var b = p.evs[0].val_lab;
                                p.evs[0].val_lab = Ht.extend(!0, {
                                    custom: {
                                        _s: 1
                                    }
                                },
                                b || {}),
                                gi(ft(), [p], {})
                            }
                        }
                        return ! 1
                    }
                    var w = se(i);
                    var x = Pt(w);
                    var S = vt(!0);
                    S += -1 < S.indexOf("?") ? "&d=" + x: "?d=" + x;
                    x.length;
                    S = S + "&t=1&r=" + r; !
                    function n(t, e, r, i) {
                        var a = void 0,
                        o = Nn + _e++;
                        if (e = e || {},
                        !(2 < (r = r || 0))) return Dt[o] = a = new Image,
                        a.onload = function() {
                            Dt[o] = null
                        },
                        a.onabort = a.onerror = function() {
                            Dt[o] = null,
                            n(t, e, ++r, i)
                        },
                        a.src = t,
                        a;
                        i ? Ht.isFunc(e.cb) && e.cb(!1) : F(function() {
                            n(t, e, null, !0)
                        },
                        1e3)
                    } (S, {
                        cb: function(n) {
                            n || pi(location.host + location.pathname, "web-report-fail-image-overtime", t[0].union_id, "0")
                        }
                    });
                    return ! 0
                } (n), t.cb(_)) : gi(a, n, t) || Me && mi(a, n, t) || (e = a, r = n, (i = Tt.sendBeacon) && (e = _i(e), i && i.call(Tt, e, or.stringify(r))) && t.cb(_))
            } catch(n) {
                return pi(Et.path, "report-ajax", 0, n.message, !0),
                !1
            }
            return ! 0
        }
        function mi(n, t, e, r) {
            if (!Dt.XDomainRequest) return ! 1;
            try {
                var i = new XDomainRequest;
                return i.open(Vn, _i(n), !0),
                i.onload = function() {
                    vi = 0,
                    e && e.cb(_),
                    fi = []
                },
                i.onerror = function() {
                    vi++
                },
                i.ontimeout = function() {
                    vi++,
                    r || (!
                    function(n, t, e, r) {
                        fi = fi.concat(t);
                        var i = void 0,
                        a = ne.reduce(fi,
                        function(n, t) {
                            return t.evs = n.evs.concat(t.evs),
                            i = t.evs.length,
                            oi < i && ne.slice(t.evs, i - oi, i),
                            t
                        });
                        if (fi = [a], di.push(r), !si) var o = setInterval(function() {
                            if (ai <= vi) return clearInterval(o),
                            !1;
                            e(n, fi,
                            function(t) {
                                clearInterval(o),
                                si = !1,
                                ne.each(di,
                                function(n) {
                                    n && n(t)
                                })
                            },
                            !0)
                        },
                        ci)
                    } (n, t, mi, e), si = !0)
                },
                i.timeout = ui,
                i.send(or.stringify(t)),
                !0
            } catch(n) {
                return ! 1
            }
        }
        function gi(t, e, r, i) {
            if (!zn()) return ! 1;
            try {
                var n = r && r.method || Vn,
                a = yi(t, n, "text/plain");
                return i = i || 0,
                a.onreadystatechange = function() {
                    if (4 === a.readyState) {
                        var n = a.status;
                        200 <= n ? (vi = 0, r && r.cb && r.cb(_, a.responseText), fi = []) : (!i || i < ai) && gi(t, e, r, ++i),
                        r.nm === P && (400 <= n || 0 === n) && pi(t, "web-report-fail", e[0].union_id, n),
                        a.onreadystatechange = null
                    }
                },
                a.onerror = function() {
                    a.abort(),
                    (!i || i < ai) && gi(t, e, r, ++i)
                },
                a.send(n === Vn && or.stringify(e) || null),
                !0
            } catch(n) {
                return ! 1
            }
        }
        function _i(n) {
            var t = "_lxsdk_rnd=" + (Wt().toString(16) + li);
            return - 1 === n.indexOf("?") ? n + "?" + t: n + "&" + t
        }
        function yi(n, t, e) {
            var r = new(Kn());
            return r.open(t || Vn, _i(n), !0),
            r.timeout = ui,
            t === Vn && r.setRequestHeader("Content-Type", e),
            r
        }
        function bi(n, t, e) {
            return Ut.call(n, t) && n[t] && (n[e] = n[t], delete n[t]),
            n
        }
        var wi = {},
        xi = sn,
        Si = [],
        ki = null,
        Oi = {
            s: q,
            l: k,
            a: C,
            w: d
        };
        function qi(n) {
            var t = /(^\w+-\w+-\w+-\w+-\w+)/;
            if (t.test(n)) {
                var e = n.match(t);
                ie.top(mn, e[1], vn)
            } else n && !/(^\w+\.\d+\.\d+\.\d+\.\d+)/.test(n) && n.length < 100 ? ie.top(mn, n, vn) : ie.top(mn, "", -1)
        }
        var Ii = 0,
        Ai = 1,
        ji = 2,
        Di = "|";
        function Ei(n) {
            var t = ie.get(yn);
            return t ? t.split(Di)[n] : ""
        }
        function Ci(n, t, e) {
            var r, i, a;
            ie.top(yn, (r = t, i = e, (a = []).push(n || Ri()), a.push(r || Ti()), a.push(i || Fi()), a.join(Di)), pn)
        }
        function Ri() {
            return Ei(Ii)
        }
        function Ti() {
            return Ei(Ai)
        }
        function Fi() {
            var n = 0,
            t = Ei(ji);
            return isNaN(t) || (n = parseInt(t)),
            n < 0 ? 0 : n
        }
        var Mi = void 0;
        function Ni(n) {
            var t = zt(Mi) && Mi || Fi(),
            e = !1;
            return ! 0 === n && (t++, e = !0),
            (!t || t < -1) && (e = !(t = 0)),
            Mi = t,
            e && (Ci(Mt, Mt, t), Mi = null),
            t
        }
        function Li(n, c) {
            return new yr(function(o, u) {
                F(function() {
                    u({
                        code: p
                    })
                },
                3e3),
                ri(n, "getEnv", {},
                function(n, t) {
                    if (n) u(n);
                    else {
                        ki = rt.nativeSDKVer = t.sdk_ver,
                        a = rt.nativeSDKVer,
                        Ht.isStr(a) && (at.MVL = -1 < ye(a, "4.14.0"), at.QR = -1 < ye(a, "4.14.0"), at.getReqId = -1 < ye(a, "4.12.0"));
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
                        o(c)
                    }
                    var a
                })
            })
        }
        function Vi() {
            var n = ie.get(bn);
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
        function Pi(n) {
            return Ht.extend(!0, {},
            n)
        }
        function Bi(n) {
            var t = Ct.getElementsByTagName("meta"),
            e = fe(t, "lx:appnm"),
            r = fe(t, "lx:defaultAppnm"),
            i = Ee,
            a = Ct.domain,
            o = mt();
            return ut("appnm", e),
            ut("defaultAppnm", r),
            Ce && Oe(Ee || e || r || a),
            Re ? e || (2 === o ? n: i || (r || a)) : e || (i || (r || a))
        }
        function Qi() {
            var n, t, e, r, i, a, o = Ee === S || Ee === x || Je,
            u = (n = ie.get(mn), t = ie.get("iuuid") || ie.get("uuid") || n, e = Ri(), r = Ti(), i = ie.get(_n) || ie.get(E), a = {},
            t && (a[O] = t), e && (a[q] = e), n && (a[k] = n), r && (a[j] = r), i && (a[E] = i), a),
            c = void 0,
            s = {};
            o && (s = function(n) {
                var i = {};
                if (T.test(n)) {
                    var t = Ht.parseQuery(n);
                    if (t[O] && (i[O] = t[O]), t[I] && (i[I] = t[I]), t[D] && (i[j] = t[D]), t.__lxsdk_params) {
                        var e = decodeURIComponent(decodeURIComponent(t.__lxsdk_params)).split(";");
                        ne.each(e,
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
            } (Et.href)),
            (c = Ht.extend(u, s)).ct = Fe;
            var f = nr();
            f && (c[A] = f);
            var d, l, v = Br();
            c[k] = v,
            c[O] || (c[O] = v),
            c[q] || (c[q] = (d = [], l = +new Date, d.push(l.toString(16)), d.push(Qr()), d.push(Qr()), d.push(Qr()), d.join("-")), Ci(c[q], c.uid || "")),
            c[O] && qi(c[O]);
            var p = Bi();
            Ht.isStr(p) && (c[C] = p);
            var h, m = (h = Ft.replace(/^.*([A-Za-z-]+)\/com\.(sankuai(?!\.meituan\.)|meituan(?!\.sankuai\.)|dianping|sankuai\.meituan|meituan\.sankuai)\.([.A-Za-z0-9-]+)\/(\d+[.\d]+).*$/, "$4"), /^\d+(\.\d+)+$/.test(h) ? h: null);
            if (m && (c.app = m), Je) for (var g in Oi) {
                var _ = Oi[g],
                y = c[g],
                b = Ie && Ht.isFunc(Ie.getItem) && Ie.getItem(w + _) || null; (y = y || b) && (c[R] = c[R] || {},
                c[R][_] = c[_], c[_] = y, delete c[g])
            }
            return c
        }
        function Ui(t) {
            return function(n) {
                var e = n;
                return t !== n && (e = Ht.extend(t, n)),
                e.dpid && e.uid ? e: Lr().then(function(n) {
                    var t = {};
                    return n.dpid && (t.dpid = n.dpid, n.userId && (t.uid = "" + n.userId), n.unionId && (t.union_id = n.unionId)),
                    e = Ht.extend(e, t)
                },
                function(n) {
                    return N(n),
                    e
                })
            }
        }
        var Ji = function(n) {
            var o = Qi();
            if (n && Ee || Qe()) {
                var t = Li(n, o);
                return a === Ee && (t = t.then(Ui(o),
                function(n) {
                    return N(n),
                    Ui(o)()
                })),
                t.then(function(n) {
                    var t = Bi(n[C]),
                    e = n[E],
                    r = n[O],
                    i = n[s],
                    a = n;
                    return n !== o && (a = Ht.extend(o, n)),
                    Ht.isStr(t) && (a[C] = t),
                    r && qi(r),
                    e && ie.top(_n, e, vn),
                    i && ie.top("_lxsdk_unoinid", i, vn),
                    a
                },
                function(n) {
                    return n && N(n),
                    o
                })
            }
            var e, r = Pi(o),
            i = r[R];
            return (e = Ht.now(), new yr(function(n) {
                if (Je) if (Dt.WeixinJSBridge && Dt.WeixinJSBridge.invoke) n("miniprogram" === Dt.__wxjs_environment);
                else {
                    var t = setTimeout(function() {
                        rt.wx_t = Ht.now() - e,
                        n(!1)
                    },
                    5e3);
                    Ct.addEventListener("WeixinJSBridgeReady",
                    function() {
                        clearTimeout(t),
                        rt.wx_t = Ht.now() - e,
                        n("miniprogram" === Dt.__wxjs_environment)
                    })
                } else n(!1)
            })).then(function(n) {
                if (rt.inWXMP = n, Ht.isObj(i)) if (n && Ie && Ht.isFunc(Ie.setItem)) try {
                    Ie.setItem(w + C, r[C] || ""),
                    Ie.setItem(w + d, r[d] || ""),
                    Ie.setItem(w + k, r[k] || ""),
                    Ie.setItem(w + q, r[q] || "")
                } catch(n) {} else {
                    for (var t in i) r[t] = i[t];
                    delete r[R]
                }
                return yr.resolve(r)
            })
        };
        function $i(n) {
            return dn === xi ? yr.resolve(Pi(wi)) : fn === xi ? new yr(function(t) {
                var n;
                n = function(n) {
                    t(n)
                },
                Si.push(n)
            }) : (xi = fn, Ji(n).then(function(e) {
                return wi = Ht.extend(!0, {},
                e || {}),
                xi = dn,
                ne.each(Si,
                function(n, t) {
                    Ht.isFunc(n) && Si[t](e)
                }),
                e
            }))
        }
        var Ki = /([a-fA-F0-9-]+)(\.\d+)/,
        Wi = "_hc.v",
        Xi = 525600,
        zi = "",
        Hi = /(dper|dianping|51ping)\.com/.test(Rt);
        function Zi() {
            return function() {
                function n() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
            } () + "." + Math.round( + new Date / 1e3)
        }
        function Gi() {
            return ! zi && Hi && (zi = function() {
                var n = ie.get(Wi);
                if (n || (n = Zi(), ie.top(Wi, n, Xi)), n) {
                    var t = n.match(Ki);
                    return t ? t[1] : ""
                }
                return ""
            } ()),
            zi
        }
        var Yi = function() {
            var n = void 0;
            try {
                var t = document;
                if (t.querySelectorAll) {
                    var e = t.querySelectorAll("head script"),
                    r = t.querySelectorAll("body script"),
                    i = [];
                    ne.each(e,
                    function(n) {
                        i.push(n)
                    }),
                    ne.each(r,
                    function(n) {
                        i.push(n)
                    });
                    for (var a = 0; a < i.length; a++) {
                        var o = i[a].innerHTML.match(/\[['"]\s*_setPageId\s*['"]\s*,\s*(\d+)\s*\]/);
                        if (o) {
                            n = o[1];
                            break
                        }
                    }
                }
            } catch(n) {}
            return function() {
                return n
            }
        } ();
        function na(n) {
            var t = this;
            t.s = n;
            var e = void 0,
            r = dr.get(Mn) || {
                s: n,
                d: t.d
            };
            r.s !== n ? (dr.del(Mn), e = t.d = []) : e = t.d = r.d || [],
            t.l = e && e.length || 0
        }
        var ta = null;
        function ea() {
            return ta
        }
        var ra = "QR",
        ia = 20480 / 30,
        aa = 2592e5,
        oa = {},
        ua = void 0,
        ca = !(na.prototype = {
            constructor: na,
            set: function(n, t, e) {
                var r = this,
                i = r.l,
                a = r.d,
                o = r.indexOf(n),
                u = {
                    scid: 0 < i ? a[i - 1].scid + 1 : 0,
                    cid: n,
                    bid: t,
                    sf: e
                }; - 1 < o ? a.splice(o, i - o, u) : a.push(u),
                r.l = a.length,
                dr.set(Mn, {
                    s: r.s,
                    d: a
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
        sa = [],
        fa = !1,
        da = ["ua"].join("|") + "|",
        la = ["lxcuid", "category", "sdk_ver", "utm", "uuid", "msid", "ct", "appnm"],
        va = ["utm", "seq", "tm", "nm", "val_ref", "lng", "val_lab", "req_id", "lat", "s_from", "val_cid", "val_bid"];
        function pa() {
            if (!ca) {
                var n = Wt(),
                t = [ua.opts.cid],
                e = 0,
                r = function(n, t) {
                    if (!n) try {
                        var e = t;
                        if (Ht.isObj(t) || (e = JSON.parse(t)), 0 === e.code)(function n(t) {
                            var e = 0,
                            r = 0;
                            var i = [];
                            var a = Wt() - aa;
                            for (var o in t) e += t[o].bids.length,
                            r += t[o].bids.length;
                            if (!r) return;
                            for (var u in oa) e += oa[u].bids.length,
                            oa[u].tm < a && i.push(u);
                            ia < e && (i.length ? (ne.each(i,
                            function(n) {
                                delete oa[n]
                            }), n(t)) : oa = {});
                            oa = Ht.extend(oa, t);
                            setTimeout(function() {
                                dr.set(ra, oa)
                            },
                            10)
                        })(function(n) {
                            if (!Ht.isObj(n)) return;
                            var i = {},
                            a = Wt();
                            return ne.each(n,
                            function(t, r) {
                                i[r] = i[r] || {
                                    cid: r,
                                    tm: a,
                                    bids: [],
                                    envInfo: (t.envInfo || {}).quickReport || [],
                                    evsInfo: (t.evsInfo || {}).quickReport || []
                                },
                                delete t.envInfo,
                                delete t.evsInfo;
                                var n = function(e) {
                                    var n = t[e].quickReport || [];
                                    ne.each(n,
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
                        ca = !0;
                        else {
                            if (304 !== e.code) return void e.message;
                            ca = !0
                        }
                    } catch(n) {}
                };
                for (var i in oa) e++,
                n = Math.min(oa[i].tm, n);
                0 === e && (n = 0);
                var a = ("https://ocean.sankuai.com/delivery/api/web-configFile?\n                timestamp=" + n + "\n                &cidList=" + t.join(",") + "\n                &rnd=" + Math.random()).replace(/\s/g, "");
                "https" === ge() && gi(a, {},
                {
                    cb: r
                }) ||
                function(n, t, e, r) {
                    var i = void 0,
                    a = (r = r || {}).outTime || 5e3,
                    o = "__lxsdk_jsonp_callback_" + Math.random().toString(16).slice(2, 10);
                    /^([^?]+)\?/.test(n) ? n = n.replace(/^([^?]+)\?/, "$1?" + t + "=" + o + "&") : /^([^#]+)#/.test(n) ? n = n.replace(/^([^#]+)#/, "$1?" + t + "=" + o + "#") : n += "?" + t + "=" + o;
                    var u = Ct.createElement("script");
                    u.src = n,
                    Dt[o] = function(n) {
                        clearTimeout(i);
                        try {
                            e(Mt, n)
                        } catch(n) {}
                        delete window[o]
                    },
                    u.type = "application/javascript",
                    u.charset = "utf-8",
                    u.setAttribute("async", "true"),
                    Ct.body.appendChild(u),
                    i = F(function() {
                        try {
                            e("timeout")
                        } catch(n) {}
                        delete window[o]
                    },
                    a),
                    F(function() {
                        Ct.body.removeChild(u)
                    },
                    0)
                } (a, "callback", r)
            }
        }
        function ha(n, t, e) {
            if (!rt.useQR) return ! 1;
            if (!oa[t]) return ! 1;
            for (var r = oa[t].bids, i = 0, a = r.length; i < a; i++) {
                var o = r[i];
                if (o.tp == n) {
                    if (n === P && o.id == t) return ! 0;
                    if (o.id == e) return ! 0
                }
            }
            return ! 1
        }
        function ma(n, t, e) {
            var r = {},
            i = {};
            if (n && oa[n]) {
                var a = la.concat(oa[n].envInfo || []),
                o = va.concat(oa[n].evsInfo || []);
                ne.each(a,
                function(n) {
                    t.hasOwnProperty(n) && t[n] && (i[n] = t[n])
                }),
                ne.each(o,
                function(n) {
                    e.hasOwnProperty(n) && da.indexOf(n + "|") < 0 && (r["evs." + n] = e[n])
                });
                var u = Ht.extend(!0, i, r);
                sa.push(u),
                v(fa),
                fa = setTimeout(function() {
                    gi("https://" + Jn + "/?rnd=" + Math.random(), sa, {
                        nm: e.nm,
                        cb: $n
                    }),
                    sa = []
                },
                0)
            }
        } !
        function() {
            var n = dr.get(ra);
            if (n) try {
                var t = void 0;
                t = Ht.isObj(n) ? n: JSON.parse(n),
                oa = Ht.extend(!0, oa, t)
            } catch(n) {}
        } (),
        function t() {
            var e = _o();
            return new yr(function(n) {
                e ? n(e) : setTimeout(function() {
                    t().then(n)
                },
                100)
            })
        } ().then(function(n) {
            ua = n,
            rt.useQR && (ge(), pa())
        });
        var ga = "category",
        _a = "setEvs",
        ya = "val_bid",
        ba = "page",
        wa = "s_from",
        xa = "lat",
        Sa = "lng",
        ka = [],
        Oa = Ct.referrer,
        qa = [],
        Ia = void 0,
        Aa = void 0,
        ja = {},
        Da = 0,
        Ea = function(n, t, e) {
            if (e) {
                var r = {},
                i = {
                    custom: r
                };
                r[t] = e,
                n = Ht.extend(!0, n || {},
                i)
            }
            return n
        };
        function Ca(n, t) {
            this.env = t || {},
            this.opts = Ht.extend(!0, {},
            n),
            ka.push(this),
            kt = this
        }
        var Ra = Ca.prototype;
        function Ta(n) {
            return 6 === n._ptpvs
        }
        function Fa() {
            return ! Da
        }
        function Ma(n) {
            return (n = n || {}) && !Ht.isObj(n) && (n = {
                cid: "" + n
            }),
            n
        }
        function Na(e, r, i, a, o) {
            var u = this,
            n = o = o || {},
            t = n.isLeave,
            c = n.currentPageInfo,
            s = n.mvDelay,
            f = n.sf,
            d = ha(e, r, i);
            if (mt() === cn) {
                var l = Qa(u),
                v = Xa(mr.getAll()),
                p = $a(e, r, i, a),
                h = p.body,
                m = p.ev,
                g = za(l, h, v);
                if (d && ma(r, l, m), e === J) {
                    if (s) return Ht.run(h,
                    function(n) {
                        qa.push(n)
                    }),
                    void F(function() {
                        if (qa.length) {
                            var n = za(l, qa, v);
                            u.send(n),
                            qa = []
                        }
                    },
                    s * on)
                } else {
                    if (e === $) return void Ot.call(u, $, l, h[0], {
                        tag: v
                    });
                    if (e === Q) {
                        if (c &&
                        function(n, t) {
                            Ht.isObj(n[Rn]) || (n[Rn] = {});
                            n[Rn][ba] = t
                        } (m, u._cpi), g = za(l, h, v), t) {
                            var _ = pe(),
                            y = Ja(B, r, Mt, _);
                            g.evs.push(y)
                        }
                        Ce && f && ea().set(r, i, f)
                    }
                }
                u.send(g, {
                    nm: e
                })
            } else {
                var b = u.env,
                w = void 0,
                x = Ua({
                    isQuickReport: d
                }),
                S = [Wa.call(u, e, r, i, a)];
                if (e === Q && (w = {
                    sf: f
                },
                u._cpi && (w.cpi = u._cpi), S = [Wa.call(u, e, r, i, a, null, w)], t)) {
                    var k = pe(),
                    O = Wa.call(u, B, r, null, k);
                    S.push(O)
                }
                b[A] && (S = function(n, t) {
                    if (!ne.isArray(n) || !n.length) return n;
                    if (!Ht.isObj(n[0][Rn])) return n[0][Rn] = {
                        page: {
                            utm: t[A]
                        }
                    },
                    n;
                    if (!Ht.isObj(n[0][Rn][ba])) return n[0][Rn][ba] = {
                        utm: t[A]
                    },
                    n;
                    return n[0][Rn][ba] = Ht.extend(!0, n[0][Rn][ba], {
                        utm: t[A]
                    }),
                    n
                } (S, b));
                var q = Ba(b[ga]);
                new Date;
                ri(q, _a, S,
                function(n, t) {
                    n ? (gt(cn), N(n), new Date, Na.call(u, e, r, i, a, o)) : new Date
                },
                {
                    nativeOptions: x
                })
            }
        }
        function La() {
            return Ia || (Ia = Va()),
            Ia
        }
        function Va() {
            return Ht.now().toString(16) + "-" + Math.floor(65535 * Ht.rnd()) + "-" + Math.floor(65535 * Ht.rnd())
        }
        function Pa(n) {
            var t, e, r = n.nm;
            P === r ? (n.nm = "mpt", n.val_act = "pageview") : B === r ? (n.nm = "report", n.val_act = "quit") : (n.nm = "mge", n.event_type = (t = r, (e = {})[W] = "order", e[X] = "pay", e[Q] = "click", e[K] = "return", e[J] = "view", e[U] = "click", e[t] || r)),
            n.nt = 0,
            n.isauto = 8
        }
        function Ba(n) {
            return 0 === n.indexOf("data_sdk_") && (n = n.replace(ga, "")),
            n
        }
        function Qa(n) {
            var t, e, r = Ht.extend(!0, {},
            n.env);
            r[ga] = (t = r[ga], e = "data_sdk_", 0 !== t.indexOf(e) && (t = e + t), t);
            var i = r.utm,
            a = {
                ua: Ae,
                sdk_ver: g,
                ch: i && i.utm_source ? i.utm_source: "web",
                sc: Pe
            };
            return a[jn] = g,
            Ht.extend(!0, a, r)
        }
        function Ua(n) {
            return n = n || {},
            {
                isQuickReport: ot("QR") && !!n.isQuickReport
            }
        }
        function Ja(n, t, e, r, i) {
            i = i || M;
            var a, o, u, c = Ni(!0),
            s = Vi(),
            f = void 0,
            d = P === n,
            l = W === n,
            v = X === n,
            p = {
                nm: n,
                tm: Ht.now(),
                nt: cn,
                isauto: i,
                val_cid: t,
                req_id: La(),
                seq: c
            };
            if (d) {
                var h = Et.href;
                p.url = h,
                (f = Oa) && (p.refer_url = f),
                i === M && (Oa = h)
            }
            return (l || d || v) && Ce && (a = p, (o = ea().toJSON()) && (a[wa] = o), p = a),
            r = Ea(r, "_hguid", Gi()),
            (u = r) && u.custom && "v3" === u.custom._api && !t && (p.val_cid = Ct.title || Et.pathname, r = Ea(r, "_cid", 1)),
            d && (r = Ea(r, "_hpid", Yi()), rt.wx_t && (r = Ea(r, "_wx_t", rt.wx_t))),
            e && (p[ya] = e),
            r && (p[Rn] = r),
            s && (p[xa] = s.lat, p[Sa] = s.lng),
            p
        }
        function $a(n, t, e, r, i) {
            var a = Ja(n, t, e, r, i);
            return {
                body: function(n) {
                    {
                        if (qa && 0 < qa.length) {
                            var t = qa;
                            return qa = [],
                            t.push(n),
                            t
                        }
                        return [n]
                    }
                } (a),
                ev: a
            }
        }
        function Ka(n) {
            return Te ? n: De && !Hr ? n: Pt(n)
        }
        function Wa(n, t, e, r, i, a) {
            a = a || {},
            i = i || M;
            var o = this.env.appnm,
            u = Vi(),
            c = !_t,
            s = void 0,
            f = {
                nm: n,
                tm: Ht.now(),
                nt: un,
                isauto: i,
                val_cid: t,
                shouldCover: c
            };
            f = Ht.extend(!0, f, ja),
            Aa && (f.req_id = Aa),
            a.sf && (f._sf = a.sf);
            var d = void 0,
            l = Ht.extend(!0, {},
            r || {}),
            v = P === n;
            if (v) {
                var p = Ka(Et.href);
                d = {
                    ua: Ae,
                    url: p
                };
                var h = nr();
                h && h.utm_source && (d.utm = h),
                (s = Oa) && (d.refer_url = Ka(s)),
                i === M && (Oa = p)
            } else d = {};
            if (ne.each({
                web_req_id: La(),
                web_sdk_ver: g,
                lxcuid: Br(),
                web_appnm: o,
                covered_by_native: c
            },
            function(n, t) {
                Ht.isStr(n) && (d[t] = n)
            }), Ht.isObj(l.custom) && "v3" === l.custom._api && (d.web_appnm = function(n) {
                if (Ht.isStr(n)) return n && tt[n] || tt
            } ("appnm")), a.cpi && !l.page && (l.page = a.cpi), l.custom = Ht.extend(!0, l.custom, d), l = Ea(l, "_hguid", Gi()), v) {
                l = Ea(l, "_hpid", Yi());
                try {
                    var m = void 0;
                    ee(document.scripts,
                    function(n) {
                        var t = n.src;
                        /\/\/analytics\.meituan\.net\//.test(t) && (m = t)
                    }),
                    l = Ea(l, "_lxsdk_url", m)
                } catch(n) {}
            }
            return n !== U || zr ? ii() || Pa(f) : ii() ? f.nm = Q: Pa(f),
            f[Rn] = l,
            u && (f[xa] = u.lat, f[Sa] = u.lng),
            e && (f[ya] = e),
            v && !ii() && (f.val_val = l, delete f[Rn]),
            f
        }
        function Xa(n) {
            return n
        }
        function za(n, t, e) {
            return ne.isArrayLike(t) || (t = [t]),
            Ht.run(t,
            function(n) {
                n && e && (n.tag = e)
            }),
            n.evs = t,
            n
        }
        function Ha(n, t) {
            var e = {};
            return e[an] = t,
            Ht.extend(e, n)
        }
        function Za(e, n, t, r) {
            var i, a, o, u, c = (i = n, a = t, o = r, u = null, !Ht.isStr(i) || a || o ? Ht.isObj(i) && Ht.isStr(a) && !o && (u = a, a = null) : (u = i, i = null), u && (o = Ht.extend({
                cid: u
            },
            o || {})), {
                lab: i,
                env: a,
                opts: o
            }),
            s = c.lab,
            f = c.env;
            r = Ma(c.opts);
            var d = e.opts.cid = r.cid || e.opts.cid;
            r = Ht.extend({
                cid: d
            },
            r),
            f && Ht.isObj(f) && ne.each(f,
            function(n, t) {
                e._dt.set(t, n, Mt, !0)
            }),
            e._dt.pageView(s, r)
        }
        function Ga(n, t) {
            this.env = n || {},
            this.opts = t || {},
            this._t = []
        }
        Ra.set = function(n, t, e, r) {
            var i = this,
            a = i.env;
            if (Ht.isObj(n)) ee(n,
            function(n, t) {
                i.set(t, n)
            });
            else if (!r && rt.inWXMP && Ht.isObj(a[R]) && a[R][n] ? a[R][n] = t: a[n] = t, ut(n, t), "utm" === n && Ht.isObj(t) && Ye(t), un !== mt() || Ln[n]) Ht.isFunc(e) && e(a, i);
            else {
                var o = {},
                u = Ba(a[ga]);
                o[n] = t,
                ri(u, "setEnv", o,
                function() {
                    Ht.isFunc(e) && e(a, i)
                })
            }
        },
        Ra.get = function(n, t) {
            Ht.isFunc(t) && t(this.env[n], this)
        },
        Ra.pageView = function(e, r) {
            r = Ma(r) || {};
            var n = void 0,
            i = this,
            t = i.opts.cid,
            a = r.cid || t,
            o = r.isauto || M,
            u = r.isAutoInit,
            c = r.reportStatus,
            s = t && !(Ta(i) || u) && !Fa(),
            f = c === cn || cn === mt(),
            d = i.env;
            if (this._cpi = e, s && !st()) {
                var l = pe(!0);
                n = f ? Ja(B, t, null, l) : Wa.call(i, B, t, null, l),
                ct(0)
            }
            t && (Ta(i) || Fa()) || (Ia = Va()),
            i.opts.cid = a;
            var v = ha(P, a);
            if (f) {
                var p = Qa(i),
                h = Xa(mr.getAll()),
                m = $a(P, a, null, e, o),
                g = m.body;
                s && n && g.unshift(n);
                var _ = za(p, g, h);
                v && ma(a, p, m.ev),
                this.send(_, {
                    nm: P
                }),
                u || Da++
            } else {
                var y = Ua({
                    isQuickReport: v
                }),
                b = [Wa.call(i, P, a, null, e)];
                s && n && b.push(n),
                ne.each(b,
                function(n) {
                    n.appnm = d.appnm
                }),
                ri(Ba(d[ga]), _a, b,
                function(n, t) {
                    n ? (gt(cn), i.pageView(e, r), pi(Et.href, "native-report-error", i.env.union_id, N(n))) : u || Da++
                },
                {
                    nativeOptions: y
                })
            }
            i._ptpvs = u ? 6 : M
        },
        Ra.pageDisappear = function(e, r) {
            r = Ht.extend({},
            r);
            var i = this,
            n = r.cid || i.opts.cid,
            t = r.getDurationFromLastPV || !1,
            a = r.shouldStore;
            ct(f);
            var o = pe(t);
            if (e = Ht.extend(o, e), cn === mt() || a) {
                var u = za(Qa(i), Ja(B, n, null, e), Xa(mr.getAll()));
                a && dr.nt ? (ke() && (rt.inWXMP && Ht.isObj(u[R]) && u[R][C] ? u[R][C] = qe() : u[C] = qe()), dr.set(l, u)) : i.send(u)
            } else {
                var c = this.env,
                s = [Wa.call(i, B, n, null, e)];
                ri(Ba(c[ga]), _a, s,
                function(n, t) {
                    n && (gt(cn), i.pageDisappear(e, r))
                })
            }
            At()
        },
        Ra.systemCheck = function(e, r, i) {
            i = Ht.extend({},
            i);
            var a = this,
            n = i.cid || a.opts.cid,
            t = !!i.isLXLog;
            if (cn === mt()) {
                var o = Qa(a),
                u = za(o, $a(U, n, e, r).body, Xa(mr.getAll()));
                t && (o.category = "others"),
                this.send(u)
            } else {
                var c = a.env,
                s = [Wa.call(a, U, n, e, r)],
                f = Ba(c[ga]);
                t && (f = "others"),
                ri(f, _a, s,
                function(n, t) {
                    n && (gt(cn), a.systemCheck(e, r, i))
                })
            }
        },
        Ra.moduleView = function(n, t, e) {
            e = Ht.extend({},
            e);
            var r = this.opts.mvDelay || e.delay,
            i = e.cid || this.opts.cid;
            Na.call(this, J, i, n, t, {
                mvDelay: r
            })
        },
        Ra.moduleViewList = function(n, t, e) {
            e = Ht.extend({},
            e);
            var r = this.opts.mvDelay || e.delay,
            i = e.cid || this.opts.cid,
            a = ot("MVL");
            mt() !== un || a ? Na.call(this, $, i, n, t) : Na.call(this, J, i, n, t, {
                mvDelay: r
            })
        },
        Ra.moduleClick = function(n, t, e) {
            var r = (e = Ht.extend({},
            e)).cid || this.opts.cid,
            i = e.sf;
            e && e.isLeave && ct(f);
            var a = e.withPageInfo && Ht.isObj(this._cpi) ? this._cpi: Mt;
            Na.call(this, Q, r, n, t, {
                currentPageInfo: a,
                isLeave: e.isLeave,
                sf: i
            })
        },
        Ra.moduleEdit = function(n, t, e) {
            var r = (e = Ht.extend({},
            e)).cid || this.opts.cid;
            Na.call(this, K, r, n, t, e)
        },
        Ra.order = function(e, r, i) {
            i = Ht.extend({},
            i);
            var a = this,
            n = i.cid || a.opts.cid;
            he(0, r);
            var t = ha(W, n, e);
            if (cn === mt()) {
                var o = Qa(this),
                u = $a(W, n, e, r),
                c = u.body,
                s = Xa(mr.getAll()),
                f = za(o, c, s);
                t && ma(n, o, u.ev),
                this.send(f)
            } else {
                var d = this.env,
                l = Ua({
                    isQuickReport: t
                }),
                v = [Wa.call(a, W, n, e, r)];
                ri(Ba(d[ga]), _a, v,
                function(n, t) {
                    n && (gt(cn), a.order(e, r, i))
                },
                {
                    nativeOptions: l
                })
            }
        },
        Ra.pay = function(e, r, i) {
            i = Ht.extend({},
            i);
            var a = this,
            n = i.cid || a.opts.cid;
            he(0, r);
            var t = ha(X, n, e);
            if (cn === mt()) {
                var o = Qa(a),
                u = $a(X, n, e, r),
                c = u.body,
                s = Xa(mr.getAll()),
                f = za(o, c, s);
                t && ma(n, o, u.ev),
                this.send(f, {
                    cb: function() {
                        mr.clear()
                    }
                }),
                a.clearTag()
            } else {
                var d = this.env,
                l = Ua({
                    isQuickReport: t
                }),
                v = [Wa.call(a, X, n, e, r)];
                ri(Ba(d[ga]), _a, v,
                function(n, t) {
                    n && (gt(cn), a.pay(e, r, i))
                },
                {
                    nativeOptions: l
                })
            }
        },
        Ra.tag = function(e, n, t, i) {
            var r = void 0,
            a = this.env,
            o = arguments,
            u = [],
            c = function(n) {
                if (!Ht.isObj(n)) return n;
                for (var t = n,
                e = 0,
                r = u.length; e < r; e++) {
                    if (!t) return t;
                    t = t[u[e]]
                }
                return t
            },
            s = function() {
                ne.each(o,
                function(n) {
                    if (!Ht.isStr(n)) return ! 1;
                    u.push(n)
                })
            },
            f = function(n, t, e) {
                var r = {};
                r[n] = t,
                ri(Ba(a[ga]), "setTag", r,
                function(n, t) {
                    i && (e && s(), i(n, c(t), !0))
                })
            },
            d = function(n) {
                var t = mr.getAll();
                n || s(),
                i && i(0, c(t), !1)
            };
            if (ne.each(o,
            function(n) {
                Ht.isFunc(n) && (i = n)
            }), Ht.isObj(e)) {
                var l = this;
                ne.each(e,
                function(n, t) {
                    l.tag(t, n)
                })
            } else Ht.isStr(e) && Ht.isObj(n) ? cn !== mt() ? f(e, r = n, !0) : (ee(n,
            function(n, t) {
                mr.set(e, t, n)
            }), d(!0)) : (Ht.isObj(t) || Ht.isStr(t)) &&
            function(n) {
                if (!Ht.isStr(n) && !n.length) return ! 1;
                return ! 0
            } (e) && Ht.isStr(n) ? cn !== mt() ? ((r = {})[n] = t, f(e, r, !0)) : (mr.set(e, n, t), d(!0)) : Ht.isFunc(e) || Ht.isFunc(n) || Ht.isStr(e) && Ht.isStr(n) && Ht.isFunc(t) ? cn !== mt() ? (s(), ri(Ba(a[ga]), "getTag", {},
            function(n, t) {
                i && i(n, c(t), !0)
            })) : d() : i && i( - 1)
        },
        Ra.clearTag = function(n, t, e) {
            var r = 0;
            cn === mt() ? (Ht.isFunc(n) && (e = n, n = Mt), mr.clear(n, t), e && e(0)) : r = -1,
            e && e(r)
        },
        Ra.sfrom = function(r) {
            var i = void 0,
            n = this.env;
            cn !== mt() ? ri(Ba(n[ga]), "getSFrom", {},
            function(n, t) {
                if (t) {
                    var e = t.data ? t.data: t;
                    i = Ht.isStr(e) ? JSON.parse(e) : e,
                    r(n, i)
                }
            }) : r(1, [])
        },
        Ra.send = function(n, t) {
            var e = [];
            t = Ht.extend({
                cb: function() {}
            },
            t),
            Ht.run(n,
            function(n) {
                ke() && (rt.inWXMP && Ht.isObj(n[R]) && n[R][C] ? n[R][C] = qe() : n[C] = qe()),
                e.push(n)
            });
            var r = function() {
                var n = dr.get(l);
                n && dr.del(l);
                return n
            } ();
            r && e.unshift(r),
            hi(e, t)
        },
        Ra.getAll = function() {
            return ka
        };
        var Ya = Ga.prototype;
        Ya.create = function(n, t) {
            var e = Ht.extend({},
            this.env);
            e = Ht.extend(e, {
                category: n
            });
            var r = Ht.extend({
                isDefault: !1
            },
            this.opts),
            i = new Ca(r = Ht.extend(r, t || {}), e);
            return this._t.push(i),
            t.isDefault && (this._dt = i),
            i
        },
        Ya.config = function(n, t) {
            return Mt !== n && (rt[n] = t),
            "cid" === n && Yt(t) && (this.opts.cid = t),
            rt[n]
        },
        Ya._initPV = function(n, t) {
            Za(this, this.config("pageValLab"), n = Ht.extend(n, this.config("pageEnv")), {
                isauto: 6,
                reportStatus: cn,
                cid: t,
                isAutoInit: !0
            })
        },
        Ya.pageView = function(n, t, e) {
            Za(this, n, t, e)
        },
        Ya.moduleView = function(n, t, e) {
            this._dt.moduleView(n, t, e)
        },
        Ya.moduleViewList = function(n, t, e) {
            this._dt.moduleViewList(n, t, e)
        },
        Ya.systemCheck = function(n, t, e) {
            this._dt.systemCheck(n, t, e)
        },
        Ya.moduleClick = function(n, t, e) {
            this._dt.moduleClick(n, t, e)
        },
        Ya.moduleEdit = function(n, t, e) {
            this._dt.moduleEdit(n, t, e)
        },
        Ya.order = function(n, t, e, r) {
            this._dt.order(n, Ha(e, t), r)
        },
        Ya.pay = function(n, t, e, r) {
            this._dt.pay(n, Ha(e, t), r)
        },
        Ya.pageDisappear = function(n, t) {
            this._dt.pageDisappear(n, t)
        },
        Ya.tag = function(n, t, e, r) {
            this._dt.tag(n, t, e, r)
        },
        Ya.sfrom = function(n) {
            this._dt.sfrom(n)
        },
        Ya.clearTag = function(n, t, e) {
            this._dt.clearTag(n, t, e)
        },
        Ya.getAll = function(n) {
            n && n(this._t)
        },
        Ya.getTracker = function(t, n) {
            var e = ne.find(this._t,
            function(n) {
                return n.env.category === t
            });
            n && n(e)
        },
        Ya.get = function(n, t) {
            this._dt.get(n, t)
        },
        Ya.set = function(n, t, e) {
            this._dt.set(n, t, e)
        },
        Ya._setRequestID = function(n) {
            Aa = n
        },
        Ya._setNativeEvsData = function(n, t) {
            var e;
            e = t,
            ja[n] = e
        };
        var no = void 0,
        to = !0,
        eo = function() {
            var n, t, e; ! rt.onWebviewAppearAutoPV || (t = n || Wt(), e = de(), ve.update(t), Bt = t, e && (e.l = t), yo(), no.pageView(), ct(0))
        },
        ro = function() { !! rt.onWebviewAppearAutoPV && (st() || (ct(f), no.pageDisappear({},
            {
                getDurationFromLastPV: !0
            })))
        },
        io = function() {
            to = !0,
            eo()
        },
        ao = function() {
            to = !1,
            ro(),
            At()
        },
        oo = function() {
            to && eo()
        },
        uo = function() {
            to && (ro(), At())
        },
        co = void 0,
        so = !!/\d\.\d\.\d/.test(Ue) && 0 <= ye(Ue, "11.3.0");
        function fo(n, t) {
            Ht.isStr(n) && (t = Ht.isFunc(t) && t ||
            function() {},
            "on" + n in Dt || "KNB:" + n in Dt ? Ht.on(window, n,
            function(n) {
                t(n)
            }) : (co = window.KNB) && Ht.isFunc(co.subscribe) && co.subscribe({
                action: n,
                handle: function() {
                    t()
                },
                success: function() {},
                fail: function(n) {}
            }))
        }
        var lo = {
            hook: function() {
                try {
                    fo("appear", io),
                    fo("disappear", ao),
                    so && (fo("foreground", oo), fo("background", uo))
                } catch(n) {
                    pi("sdk", "api-error", "", n.stack, !0)
                }
                no = _o()
            }
        },
        vo = [],
        po = sn,
        ho = void 0,
        mo = void 0;
        function go(n, t) {
            return {
                cb: n,
                cmd: t
            }
        }
        function _o() {
            return ho
        }
        function yo() {
            var t, r;
            yt(!1),
            (t = mo, r = {
                none: !0
            },
            new yr(function(e) {
                try {
                    var n = ye(ki, "4.12.0"); ! ki || !zt(n) || n < 0 ? e(r) : t && Ee || Qe() ? ri(t, "getReqId", {},
                    function(n, t) {
                        e(n ? r: t)
                    }) : e(r)
                } catch(n) {
                    e(r),
                    pi("sdk", "api-error", "", n.stack, !0)
                }
            })).then(function(n) {
                var t = n || {},
                e = t.val_ref,
                r = t.req_id,
                i = t.refer_req_id,
                a = !!(r || e || i);
                r && ho._setRequestID(r),
                e && ho._setNativeEvsData("val_ref", e),
                i && ho._setNativeEvsData("refer_req_id", i),
                yt(a)
            })
        }
        function bo(n, t) {
            if (dn === po) n && n(ho);
            else if (fn === po) n && vo.push(go(n, t));
            else {
                Ht.now();
                vo = vo.concat(go(n, t));
                var e = Ct.getElementsByTagName("meta"),
                a = fe(e, "lx:cid") || rt.cid;
                if (! (mo = fe(e, "lx:category"))) return void(po = sn);
                po = fn;
                var o = fe(e, "lx:mvDelay");
                o = isNaN(o) ? 0 : parseInt(o, 10);
                var u = "off" !== fe(e, "lx:autopv");
                rt.autoPV = u,
                F(yo, 1e3),
                yr.all([$i(mo)]).then(function(n) {
                    var t, r = n[0],
                    e = r.appnm; ! Ht.isStr(e) || Ct.domain,
                    ho = new Ga(r, {
                        cid: a,
                        isDefault: !0,
                        mvDelay: o
                    }),
                    mo && ho.create(mo, {
                        isDefault: !0
                    }),
                    r = Ht.extend(!0, ho._dt.env, r),
                    ho._dt.env = r,
                    Ht.now();
                    try {
                        var i = [];
                        ne.each(vo,
                        function(n) {
                            var t = n.cb,
                            e = n.cmd;
                            "config" === e || "set" === e ? t(ho, r) : i.push(n)
                        }),
                        Ce && (t = r.msid, ta || (ta = new na(t))),
                        u && mo && a && a && ho._initPV(r, a),
                        lo.hook(function() {}),
                        ne.each(i,
                        function(n) {
                            n && n.cb && n.cb(ho, r)
                        })
                    } catch(n) {}
                }).then(function() {
                    po = dn
                },
                function(n) {
                    throw po = dn,
                    n
                })
            }
        }
        var wo = [["click", en], ["tap", en], ["view", "moduleView"], ["return", "moduleEdit"], ["order", rn], ["pay", "pay"]],
        xo = ne.reduce(wo,
        function(n, t) {
            return n[t[0]] = t[1],
            n
        },
        {}),
        So = [["mpt", nn], ["report", "pageDisappear"]],
        ko = ne.reduce(So,
        function(n, t) {
            return n[t[0]] = t[1],
            n
        },
        {}),
        Oo = ne.reduce(["config", "event", "send", "use"],
        function(n, t) {
            return n[t] = !0,
            n
        },
        {}),
        qo = function(n, t) {
            var e = Ct.getElementsByTagName("head")[0],
            r = Ct.createElement("meta");
            r.setAttribute("name", n),
            r.setAttribute("content", t),
            e.appendChild(r)
        },
        Io = function(e, n) {
            return e = e || {},
            ee(n,
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
        Ao = function(n, t, e) { (n && !Gt(n) && (n = {
                custom: {
                    _lab: n
                }
            }), !n && e && (n = {}), e) && ((n.custom = n.custom || {})[t] = e);
            return n
        },
        jo = function(n, t, e) {
            return n && !Gt(n) && (n = {
                custom: {
                    _lab: n
                }
            }),
            n && (n[t] = e),
            n
        },
        Do = function(n, t) {
            var e = n[Rn],
            r = n[Fn];
            if (e && e === r && (r = Zt(!0, {},
            r)), t && (r || e)) {
                var i = e;
                e = r || {},
                i && (e = Ao(e || {},
                "_lab", i))
            } else if (!t && (r || e)) {
                if (Yt(r) && (r = {
                    analyse_val: r
                }), Yt(e)) e = {
                    val_lab: e
                };
                r && (e = jo(e || {},
                "page", r))
            }
            return Mt !== n[H] && (e = Ao(e || {},
            "_act", n[H])),
            Mt !== n[z] && (e = Ao(e || {},
            "_et", n[z])),
            Mt !== n[G] && (e = jo(e || {},
            G, n[G])),
            Mt !== n[Y] && (e = Ao(e || {},
            "_el_id", n[Y])),
            e
        };
        function Eo(n) {
            var t, e, r, i = (e = (t = n).split("."), r = void 0, 2 === e.length && (t = e[1], r = e[0]), [t, r]),
            a = void 0;
            return i[1] && (a = i[1]),
            [n = i[0], a]
        }
        var Co = function t(e, n) {
            var r = Eo(e);
            e = r[0];
            var i = r[1],
            a = n[0],
            o = n[1];
            if (ne.isArray(a)) return re(a,
            function(n) {
                return t(i ? i + "." + e: e, [n, o])
            });
            var u, c, s = (a.nm || "mge").toLowerCase();
            a.nm = s,
            (c = (u = a).val) && (Io(u, c), delete u.val),
            a = u;
            var f = "mge" === s;
            if ("mpt" === s) return function(n) {
                n = Io(n, n.val);
                var t = Do(n, !0);
                return [nn, t, null, n[Z]]
            }.apply(null, n);
            var d, l, v = rn === s,
            p = "pay" === s,
            h = a[z],
            m = a[H],
            g = Do(a, !1);
            v || p || h || !f || !m ? p || v ? e = s: (l = h, e = "mge" === (d = s) ? l ? xo[l] || tn: en: "mpt" === d || "report" === d ? ko[d] : tn, f || (g = Ao(g || {},
            "_nm", s))) : e = en;
            var _ = a[Z];
            return _ && ((o = o || {}).cid = _),
            i && Ao(g, "_logchannel", i),
            Ao(g = g || {},
            "_api", "v3"),
            e === rn || "pay" === e ? [e, a[Tn], g.order_id, g, o] : [e, a[Tn], g, o]
        },
        Ro = function n() {
            if (!n.f) {
                qo("lx:autopv", "off"),
                n.f = !0
            }
        },
        To = function(n) {
            if (!n || !n.length) return n;
            try {
                var t = n[0];
                0 < (o = (a = t).indexOf(".")) && (a = a.substr(o + 1)),
                Oo[a] && (n = ne.slice(n, 1), Fo(t) ? (Se(3), Ro(), n = Co(t, n)) : Mo(t) ? (Se(3), Ro(), n = function(n, t) {
                    var e = Eo(n)[1];
                    n = nn;
                    var r = t[1],
                    i = t[2],
                    a = e ? {
                        custom: {
                            _logchannel: e
                        }
                    }: Mt,
                    o = {};
                    if (Yt(r)) Gt(i) ? a = i: Yt(i) && (a = Ao({},
                    "analyse_val", i));
                    else if (Gt(r)) {
                        i = (o = Io(o, r))[Fn],
                        Yt(i) && (i = Ao({},
                        "analyse_val", i)),
                        a = i;
                        var u = o[Rn];
                        u && Ao(a, "_lab", u),
                        r = o[Z]
                    }
                    var c = void 0;
                    return r && ((c = {}).cid = r),
                    [n, a = Ao(a, "_api", "v3"), Mt, c]
                } (t, n)) : No(t) ? (Se(3), Ro(), n = function(n, t) {
                    var e = t[0],
                    r = t[1];
                    if (e && (e = e.replace(/^data_sdk_/i, ""), qo("lx:category", e)), Gt(r)) return ["set", r]
                } (0, n)) : Lo(t, n[0], n[1]) ? (Ro(), e = t, r = n[0], i = n[1], n = "appnm" === r && Yt(i) ? void qo("lx:appnm", i) : ("cid" === r && Yt(i) && qo("lx:cid", i), [e, r, i])) : n.unshift(t))
            } catch(n) {}
            var e, r, i, a, o;
            return n
        },
        Fo = function(n) {
            var t = n.indexOf(".");
            return 0 < t && (n = n.substr(t + 1)),
            "event" === n
        },
        Mo = function(n) {
            var t = n.indexOf(".");
            return 0 < t && (n = n.substr(t + 1)),
            "send" === n
        },
        No = function(n) {
            return "use" === n
        },
        Lo = function(n, t) {
            var e = !1;
            return "cid" !== t && "appnm" !== t || (Se(3), e = !0),
            "config" === n && e
        },
        Vo = void 0,
        Po = void 0;
        function Bo(n, t, e, r, i) {
            if (Ht.isFunc(t)) t.call(n, n, r, i);
            else if (!i && Ht.isStr(t) && Ht.isFunc(n[t])) return n[t].apply(n, e)
        }
        function Qo() {
            if (!Po) {
                Po = !0;
                var r = void 0;
                Me && Ht.on(Ct, "mouseup",
                function(n) {
                    var t = n.target || n.srcElement,
                    e = t.tagName + t.href;
                    e = e.toLocaleLowerCase(),
                    1 === t.nodeType && /^ajavascript:/i.test(e) && (r = new Date)
                });
                var n = Dt.onbeforeunload;
                Ce && Te ? Dt.addEventListener("pagehide", be(!1, Me, r, void 0, Ko, Mt, st)) : Dt.onbeforeunload = be(!1, Me, r, void 0, Ko, n, st)
            }
        }
        var Uo = 1,
        Jo = 100,
        $o = 0;
        function Ko(r) {
            var n = arguments;
            if (n.length) {
                var i = ne.slice(n, 1, n.length);
                try {
                    Vo ? Bo(Vo, r, i, Vo._dt ? Vo._dt.env: null) : bo(function(n, t, e) {
                        Bo(Vo = n, r, i, t, e),
                        Qo()
                    },
                    r)
                } catch(n) {
                    try {
                        pi("sdk", "api-error", "", n.message + "\n" + n.stack, !0)
                    } catch(n) {}
                }
            }
        }
        window._lxsdk_isDOMReady = !1;
        Wt();
        var Wo = 0;
        function Xo(n) {
            Wo && v(Wo),
            window._lxsdk_isDOMReady || (window._lxsdk_isDOMReady = !0, Wt(), n && n.type,
            function n() {
                if (Be && !Dt.KNB && Uo) return $o && v($o),
                void($o = F(function() {
                    Uo--,
                    n()
                },
                Jo));
                var s = !0,
                f = !1,
                d = function() {
                    var n = de();
                    n && (n.q.push = function t(n) {
                        try {
                            var e, r = (e = To(n)) ? e[0] : "";
                            if (ne.isArray(r)) return void ee(e,
                            function(n) {
                                t(n)
                            });
                            "start" === r ? (s = !0, f || l(d)) : !1 === s ? e && d.push(e) : Ko.apply(Mt, e)
                        } catch(n) {
                            try {
                                pi("sdk", "api-error", "", n.stack, !0)
                            } catch(n) {}
                        }
                    });
                    for (var t = void 0,
                    e = void 0,
                    r = [], i = [], a = [], o = n && ne.isArray(n.q) ? n.q: [], u = 0, c = o.length; u < c; u++)"config" === (e = o[u][0]) ? i.push(o[u]) : t || "use" !== e ? a.push(o[u]) : (r.push(o[u]), t = !0);
                    return o = i.concat(r.concat(a))
                } ();
                function l(n) {
                    f || (n && ne.each(n,
                    function(n) {
                        var t, e = (t = To(n)) ? t[0] : "";
                        ne.isArray(e) ? ee(t,
                        function(n) {
                            Ko.apply(Mt, n)
                        }) : e ? Ko.apply(Mt, t) : n && n && n[0]
                    }), Ko(function() {
                        Qo()
                    }), f = !0)
                }
                if (0 === d.length) bo(function(n) {
                    Vo = n,
                    Qo()
                });
                else try {
                    d = re(d,
                    function(n) {
                        var t;
                        if ("config" === ((t = To(n)) ? t[0] : "")) {
                            var e = t[1],
                            r = t[2];
                            "autoStart" === e && !1 === r && (s = !1)
                        }
                        return t
                    }),
                    s && l(d)
                } catch(n) {}
            } ())
        }
        Wo = F(function() {
            Xo()
        },
        3e3),
        "complete" !== Ct.readyState ? (Ht.on(Ct, "DOMContentLoaded", Xo), Ht.on(Dt, "load", Xo)) : Xo()
    } ();