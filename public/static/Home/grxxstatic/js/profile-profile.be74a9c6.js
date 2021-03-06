webpackJsonp([20], {
    0 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function a() {
            $("#img-cropper").toggle(),
            $(".body-mask").toggle(),
            c && (c.destroy(), c = null)
        }
        function o() {
            $("#job").change(function() {
                var e = $("#subjob");
                e.empty(),
                occupation[this.value] ? occupation[this.value].forEach(function(e) {
                    $("#subjob").append($("<option>", {
                        value: e,
                        text: e
                    }))
                }) : e.append($("<option>", {
                    value: "",
                    text: "--"
                }))
            }),
            $("#fileUpload").fileupload({
                url: "/ajax/proxy/admin/mmdb/photos/upload.json",
                cache: !1,
                dataType: "json",
                processData: !1,
                contentType: !1,
                acceptFileTypes: /(\.|\/)(jpe?g|png)$/i,
                maxFileSize: 1024e3,
                messages: {
                    acceptFileTypes: "文件类型不匹配",
                    maxFileSize: "文件不能大于1M"
                },
                done: function(e, t) {
                    t = t.result.data[0],
                    $("#img-cropper").toggle(),
                    $(".body-mask").toggle();
                    var i = $(".img-main-wrapper img")[0];
                    $(i).attr("src", t.olink),
                    l.setDefaults({
                        preview: $(".img-preview .img-preview-block")[0]
                    }),
                    d.image = t.olink,
                    c = new l(i, {
                        aspectRatio: 1,
                        crop: function(e) {
                            d.x = parseInt(e.detail.x),
                            d.y = parseInt(e.detail.y),
                            d.width = parseInt(e.detail.width),
                            d.height = parseInt(e.detail.height),
                            d.x < 0 && (d.x = 0),
                            d.y < 0 && (d.y = 0)
                        }
                    })
                }
            }).on("fileuploadprocessalways",
            function(e, t) {
                var i = t.index,
                n = t.files[i];
                n.error && alert("上传头像失败，仅支持JPG,JPEG,PNG格式且文件小于1M"),
                $("#fileUpload").val("")
            }),
            $(".close-icon").click(function() {
                a()
            }),
            $(".img-btn-cancel").click(function() {
                a()
            }),
            $(".img-btn-confirm").click(function() {
                $.ajax({
                    method: "GET",
                    url: "ajax/img/upload",
                    data: d,
                    success: function(e) {
                        if (e.error) return void alert("上传头像失败，请稍后再试");
                        var t = $(".J-setted-avatar");
                        $(t).attr("src", e.image),
                        alert("头像修改成功");
                        var i = $(".has-login img")[0];
                        $(i).attr("src", e.image),
                        a()
                    },
                    error: function(e, t, i) {
                        alert("上传头像失败，请稍后再试"),
                        console.log(i)
                    }
                })
            }),
            $("#J-userexinfo-form").on("submit",
            function(e) {
                e.preventDefault();
                var t = $("#userexinfo-form-nickname").val();
                if (0 == t.length) return void alert("昵称不能为空");
                if (!/^[\u4e00-\u9fa5A-Za-z0-9-_·]+$/.test(t)) return void alert("昵称仅可填写中英文、数字、下划线或减号");
                if (t.length > 15 || t.length < 2) return void alert("昵称最少2个字，最多15个字");
                var i = $("#userexinfo-form-bio").val();
                return i.length > 20 ? void alert("个性签名最多20个字") : void $.ajax({
                    method: "POST",
                    url: "/userinfo",
                    data: $("#J-userexinfo-form").serialize(),
                    success: function(e) {
                        if (e.error) return void alert("个人资料保存失败，请重新提交");
                        var t = $(".login-name a")[0];
                        $(t).text(e.data.user.nickName),
                        alert("保存成功")
                    },
                    error: function(e, t, i) {
                        alert("个人资料保存失败，请重新提交"),
                        console.log(i)
                    }
                })
            })
        }
        function r() {
            var e = $("#subjob"),
            t = $("#job");
            if (window.system && window.system.user && window.system.user.profile) {
                var i = window.system.user.profile;
                i.subjob && i.job ? (t.val(i.job), e.empty(), occupation[i.job] ? occupation[i.job].forEach(function(e) {
                    $("#subjob").append($("<option>", {
                        value: e,
                        text: e
                    }))
                }) : e.append($("<option>", {
                    value: "",
                    text: "--"
                })), e.val(i.subjob)) : (t.empty(), t.append($("<option>", {
                    value: "",
                    text: "--"
                })), e.empty(), e.append($("<option>", {
                    value: "",
                    text: "--"
                })), Object.keys(occupation).forEach(function(e) {
                    $("#job").append($("<option>", {
                        value: e,
                        text: e
                    }))
                }))
            }
        }
        var s = i(1465);
        n(s);
        i(1466);
        var l = i(1468);
        i(1469),
        i(1470),
        i(1471),
        i(1472),
        i(1473);
        var p = void 0,
        c = ($(".date-picker").datepicker(), null),
        d = {};
        $("#cancell-btn").click(function() {
            $(".mask1 .modal-container").show()
        }),
        $(".mask1 .modal-container .ok-btn").click(function() {
            $(".mask1 .modal-container").hide(),
            $(".mask2 .modal-container").show()
        }),
        $(".mask2 .modal-container .ok-btn").click(function() {
            $(".mask2 .modal-container").hide()
        }),
        $(".mask1 .modal-container .cancel-btn").click(function() {
            $(".mask1 .modal-container").hide()
        }),
        $(function() {
            $(".profile").hasClass("active") && (o(), r())
        }),
        $(".orders-container").on("click", ".del-order",
        function() {
            p = $(this).data("orderid"),
            $(".mask3 .modal-container").show()
        }),
        $(".mask3 .modal-container .ok-btn").click(function() {
            $.post("/ajax/deleteOrder/" + p,
            function(e) {
                $(".mask3 .modal-container").hide(),
                e.id && $('.order-box[data-orderid="' + p + '"]').remove()
            })
        }),
        $(".mask3 .modal-container .cancel-btn").click(function() {
            $(".mask3 .modal-container").hide()
        }),
        i(1474)
    },
    1465 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function a(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var o = i(1177),
        r = n(o),
        s = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        l = function() {
            function e(t, i) {
                a(this, e),
                this.$elem = t,
                this.$year = this.$elem.find("select[name='year']"),
                this.$month = this.$elem.find("select[name='month']"),
                this.$day = this.$elem.find("select[name='day']"),
                this.bindEvents()
            }
            return e.prototype.bindEvents = function() {
                var e = this;
                this.$year.change(function(t) {
                    e.updateDay()
                }),
                this.$month.change(function(t) {
                    e.updateDay()
                })
            },
            e.prototype.updateDay = function() {
                if ("--" == this.$year.val()) return this.$day.empty(),
                this.$day.append((0, r.
            default)("<option>", {
                    value: "--",
                    text: "--"
                })),
                this.$month.empty(),
                void this.$month.append((0, r.
            default)("<option>", {
                    value: "--",
                    text: "--"
                }));
                var e = this.$month.val();
                this.$month.empty();
                var t = void 0;
                for (t = 1; t < 13; t++) this.$month.append((0, r.
            default)("<option>", {
                    value: t,
                    text: t
                }));
                "--" !== e ? this.$month.val(e) : this.$month.val(1);
                var i = s[this.$month.val()];
                this.isLeapYear(this.$year.val()) && 2 == this.$month.val() && i++;
                var n = this.$day.val(),
                a = 0;
                if (i != this.$day.children().length) {
                    for (this.$day.empty(), a = 1; a <= i; a++) this.$day.append((0, r.
                default)("<option>", {
                        value: a,
                        text: a
                    }));
                    "--" != n ? this.$day.val(n > i ? i: n) : this.$day.val(1)
                }
            },
            e.prototype.isLeapYear = function(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            },
            e
        } ();
        r.
    default.fn.datepicker = function() { (0, r.
        default)(this).data("datepicker", new l((0, r.
        default)(this)))
        }
    },
    1466 : 1283,
    1468 : function(e, t, i) {
        /*!
	 * Cropper.js v1.0.0-rc
	 * https://github.com/fengyuanchen/cropperjs
	 *
	 * Copyright (c) 2017 Fengyuan Chen
	 * Released under the MIT license
	 *
	 * Date: 2017-03-25T12:02:21.062Z
	 */
        !
        function(t, i) {
            e.exports = i()
        } (this,
        function() {
            "use strict";
            function e(e) {
                return re.call(e).slice(8, -1).toLowerCase()
            }
            function t(e) {
                return "number" == typeof e && !isNaN(e)
            }
            function i(e) {
                return "undefined" == typeof e
            }
            function n(e) {
                return "object" === ("undefined" == typeof e ? "undefined": Y(e)) && null !== e
            }
            function a(e) {
                if (!n(e)) return ! 1;
                try {
                    var t = e.constructor,
                    i = t.prototype;
                    return t && i && se.call(i, "isPrototypeOf")
                } catch(e) {
                    return ! 1
                }
            }
            function o(t) {
                return "function" === e(t)
            }
            function r(t) {
                return Array.isArray ? Array.isArray(t) : "array" === e(t)
            }
            function s(e) {
                return "string" == typeof e && (e = e.trim ? e.trim() : e.replace(te, "$1")),
                e
            }
            function l(e, i) {
                if (e && o(i)) {
                    var a = void 0;
                    if (r(e) || t(e.length)) {
                        var s = e.length;
                        for (a = 0; a < s && i.call(e, e[a], a, e) !== !1; a++);
                    } else n(e) && Object.keys(e).forEach(function(t) {
                        i.call(e, e[t], t, e)
                    })
                }
                return e
            }
            function p(e) {
                for (var t = arguments.length,
                i = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) i[a - 1] = arguments[a];
                if (n(e) && i.length > 0) {
                    if (Object.assign) return Object.assign.apply(Object, [e].concat(i));
                    i.forEach(function(t) {
                        n(t) && Object.keys(t).forEach(function(i) {
                            e[i] = t[i]
                        })
                    })
                }
                return e
            }
            function c(e, t) {
                for (var i = arguments.length,
                n = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) n[a - 2] = arguments[a];
                return function() {
                    for (var i = arguments.length,
                    a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                    return e.apply(t, n.concat(a))
                }
            }
            function d(e, i) {
                var n = e.style;
                l(i,
                function(e, i) {
                    ee.test(i) && t(e) && (e += "px"),
                    n[i] = e
                })
            }
            function h(e, t) {
                return e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1
            }
            function u(e, i) {
                if (i) {
                    if (t(e.length)) return void l(e,
                    function(e) {
                        u(e, i)
                    });
                    if (e.classList) return void e.classList.add(i);
                    var n = s(e.className);
                    n ? n.indexOf(i) < 0 && (e.className = n + " " + i) : e.className = i
                }
            }
            function f(e, i) {
                if (i) return t(e.length) ? void l(e,
                function(e) {
                    f(e, i)
                }) : e.classList ? void e.classList.remove(i) : void(e.className.indexOf(i) >= 0 && (e.className = e.className.replace(i, "")))
            }
            function m(e, i, n) {
                if (i) return t(e.length) ? void l(e,
                function(e) {
                    m(e, i, n)
                }) : void(n ? u(e, i) : f(e, i))
            }
            function g(e) {
                return e.replace(G, "$1-$2").toLowerCase()
            }
            function v(e, t) {
                return n(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-" + g(t))
            }
            function b(e, t, i) {
                n(i) ? e[t] = i: e.dataset ? e.dataset[t] = i: e.setAttribute("data-" + g(t), i)
            }
            function y(e, t) {
                if (n(e[t])) delete e[t];
                else if (e.dataset) try {
                    delete e.dataset[t]
                } catch(i) {
                    e.dataset[t] = null
                } else e.removeAttribute("data-" + g(t))
            }
            function w(e, t, i) {
                var n = s(t).split(V);
                return n.length > 1 ? void l(n,
                function(t) {
                    w(e, t, i)
                }) : void(e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent && e.detachEvent("on" + t, i))
            }
            function _(e, t, i, n) {
                var a = s(t).split(V),
                o = i;
                return a.length > 1 ? void l(a,
                function(t) {
                    _(e, t, i)
                }) : (n && (i = function() {
                    for (var n = arguments.length,
                    a = Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return w(e, t, i),
                    o.apply(e, a)
                }), void(e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i)))
            }
            function x(e, t, n) {
                if (e.dispatchEvent) {
                    var a = void 0;
                    return o(Event) && o(CustomEvent) ? a = i(n) ? new Event(t, {
                        bubbles: !0,
                        cancelable: !0
                    }) : new CustomEvent(t, {
                        detail: n,
                        bubbles: !0,
                        cancelable: !0
                    }) : i(n) ? (a = document.createEvent("Event"), a.initEvent(t, !0, !0)) : (a = document.createEvent("CustomEvent"), a.initCustomEvent(t, !0, !0, n)),
                    e.dispatchEvent(a)
                }
                return ! e.fireEvent || e.fireEvent("on" + t)
            }
            function D(e) {
                var i = e || window.event;
                if (i.target || (i.target = i.srcElement || document), !t(i.pageX) && t(i.clientX)) {
                    var n = e.target.ownerDocument || document,
                    a = n.documentElement,
                    o = n.body;
                    i.pageX = i.clientX + ((a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0)),
                    i.pageY = i.clientY + ((a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0))
                }
                return i
            }
            function C(e) {
                var t = document.documentElement,
                i = e.getBoundingClientRect();
                return {
                    left: i.left + ((window.scrollX || t && t.scrollLeft || 0) - (t && t.clientLeft || 0)),
                    top: i.top + ((window.scrollY || t && t.scrollTop || 0) - (t && t.clientTop || 0))
                }
            }
            function M(e, t) {
                return e.getElementsByTagName(t)
            }
            function T(e, t) {
                return e.getElementsByClassName ? e.getElementsByClassName(t) : e.querySelectorAll("." + t)
            }
            function E(e) {
                return document.createElement(e)
            }
            function k(e, t) {
                e.appendChild(t)
            }
            function S(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }
            function F(e) {
                for (; e.firstChild;) e.removeChild(e.firstChild)
            }
            function O(e) {
                var t = e.match(K);
                return t && (t[1] !== location.protocol || t[2] !== location.hostname || t[3] !== location.port)
            }
            function B(e) {
                var t = "timestamp=" + (new Date).getTime();
                return e + (e.indexOf("?") === -1 ? "?": "&") + t
            }
            function N(e, t) {
                if (e.naturalWidth && !ae) return void t(e.naturalWidth, e.naturalHeight);
                var i = E("img");
                i.onload = function() {
                    t(this.width, this.height)
                },
                i.src = e.src
            }
            function $(e) {
                var i = [],
                n = e.translateX,
                a = e.translateY,
                o = e.rotate,
                r = e.scaleX,
                s = e.scaleY;
                t(n) && 0 !== n && i.push("translateX(" + n + "px)"),
                t(a) && 0 !== a && i.push("translateY(" + a + "px)"),
                t(o) && 0 !== o && i.push("rotate(" + o + "deg)"),
                t(r) && 1 !== r && i.push("scaleX(" + r + ")"),
                t(s) && 1 !== s && i.push("scaleY(" + s + ")");
                var l = i.length ? i.join(" ") : "none";
                return {
                    WebkitTransform: l,
                    msTransform: l,
                    transform: l
                }
            }
            function I(e, t) {
                var i = Math.abs(e.degree) % 180,
                n = (i > 90 ? 180 - i: i) * Math.PI / 180,
                a = Math.sin(n),
                o = Math.cos(n),
                r = e.width,
                s = e.height,
                l = e.aspectRatio,
                p = void 0,
                c = void 0;
                return t ? (p = r / (o + a / l), c = p / l) : (p = r * o + s * a, c = r * a + s * o),
                {
                    width: p,
                    height: c
                }
            }
            function j(e, i) {
                var n = E("canvas"),
                a = n.getContext("2d"),
                o = 0,
                r = 0,
                s = i.naturalWidth,
                l = i.naturalHeight,
                p = i.rotate,
                c = i.scaleX,
                d = i.scaleY,
                h = t(c) && t(d) && (1 !== c || 1 !== d),
                u = t(p) && 0 !== p,
                f = u || h,
                m = s * Math.abs(c || 1),
                g = l * Math.abs(d || 1),
                v = void 0,
                b = void 0,
                y = void 0;
                return h && (v = m / 2, b = g / 2),
                u && (y = I({
                    width: m,
                    height: g,
                    degree: p
                }), m = y.width, g = y.height, v = m / 2, b = g / 2),
                n.width = m,
                n.height = g,
                f && (o = -s / 2, r = -l / 2, a.save(), a.translate(v, b)),
                u && a.rotate(p * Math.PI / 180),
                h && a.scale(c, d),
                a.drawImage(e, Math.floor(o), Math.floor(r), Math.floor(s), Math.floor(l)),
                f && a.restore(),
                n
            }
            function A(e, t, i) {
                var n = "",
                a = t;
                for (i += t; a < i; a++) n += le(e.getUint8(a));
                return n
            }
            function H(e) {
                var t = new DataView(e),
                i = t.byteLength,
                n = void 0,
                a = void 0,
                o = void 0,
                r = void 0,
                s = void 0,
                l = void 0,
                p = void 0,
                c = void 0,
                d = void 0,
                h = void 0;
                if (255 === t.getUint8(0) && 216 === t.getUint8(1)) for (d = 2; d < i;) {
                    if (255 === t.getUint8(d) && 225 === t.getUint8(d + 1)) {
                        p = d;
                        break
                    }
                    d++
                }
                if (p && (a = p + 4, o = p + 10, "Exif" === A(t, a, 4) && (l = t.getUint16(o), s = 18761 === l, (s || 19789 === l) && 42 === t.getUint16(o + 2, s) && (r = t.getUint32(o + 4, s), r >= 8 && (c = o + r)))), c) for (i = t.getUint16(c, s), h = 0; h < i; h++) if (d = c + 12 * h + 2, 274 === t.getUint16(d, s)) {
                    d += 8,
                    n = t.getUint16(d, s),
                    ae && t.setUint16(d, 1, s);
                    break
                }
                return n
            }
            function X(e) {
                var t = e.replace(J, ""),
                i = atob(t),
                n = i.length,
                a = new ArrayBuffer(n),
                o = new Uint8Array(a),
                r = void 0;
                for (r = 0; r < n; r++) o[r] = i.charCodeAt(r);
                return a
            }
            function P(e) {
                var t = new Uint8Array(e),
                i = t.length,
                n = "",
                a = void 0;
                for (a = 0; a < i; a++) n += le(t[a]);
                return "data:image/jpeg;base64," + btoa(n)
            }
            function R(e, t) {
                var i = e.pageX,
                n = e.pageY,
                a = {
                    endX: i,
                    endY: n
                };
                return t ? a: p({
                    startX: i,
                    startY: n
                },
                a)
            }
            function W(e) {
                var t = p({},
                e),
                i = [];
                return l(e,
                function(e, n) {
                    delete t[n],
                    l(t,
                    function(t) {
                        var n = Math.abs(e.startX - t.startX),
                        a = Math.abs(e.startY - t.startY),
                        o = Math.abs(e.endX - t.endX),
                        r = Math.abs(e.endY - t.endY),
                        s = Math.sqrt(n * n + a * a),
                        l = Math.sqrt(o * o + r * r),
                        p = (l - s) / s;
                        i.push(p)
                    })
                }),
                i.sort(function(e, t) {
                    return Math.abs(e) < Math.abs(t)
                }),
                i[0]
            }
            function z(e) {
                var t = 0,
                i = 0,
                n = 0;
                return l(e,
                function(e) {
                    var a = e.startX,
                    o = e.startY;
                    t += a,
                    i += o,
                    n += 1
                }),
                t /= n,
                i /= n,
                {
                    pageX: t,
                    pageY: i
                }
            }
            var L = {
                viewMode: 0,
                dragMode: "crop",
                aspectRatio: NaN,
                data: null,
                preview: "",
                responsive: !0,
                restore: !0,
                checkCrossOrigin: !0,
                checkOrientation: !0,
                modal: !0,
                guides: !0,
                center: !0,
                highlight: !0,
                background: !0,
                autoCrop: !0,
                autoCropArea: .8,
                movable: !0,
                rotatable: !0,
                scalable: !0,
                zoomable: !0,
                zoomOnTouch: !0,
                zoomOnWheel: !0,
                wheelZoomRatio: .1,
                cropBoxMovable: !0,
                cropBoxResizable: !0,
                toggleDragModeOnDblclick: !0,
                minCanvasWidth: 0,
                minCanvasHeight: 0,
                minCropBoxWidth: 0,
                minCropBoxHeight: 0,
                minContainerWidth: 200,
                minContainerHeight: 100,
                ready: null,
                cropstart: null,
                cropmove: null,
                cropend: null,
                crop: null,
                zoom: null
            },
            U = '<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>',
            Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(e) {
                return typeof e
            }: function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
            },
            q = function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            Q = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            } (),
            Z = function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0,
                    i = Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i
                }
                return Array.from(e)
            },
            J = /^data:.*,/,
            G = /([a-z\d])([A-Z])/g,
            K = /^(https?:)\/\/([^:\/?#]+):?(\d*)/i,
            V = /\s+/,
            ee = /^(width|height|left|top|marginLeft|marginTop)$/,
            te = /^\s+(.*)\s+$/,
            ie = /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i,
            ne = "undefined" != typeof window ? window.navigator: null,
            ae = ne && ie.test(ne.userAgent),
            oe = Object.prototype,
            re = oe.toString,
            se = oe.hasOwnProperty,
            le = (Array.prototype.slice, String.fromCharCode),
            pe = {
                render: function() {
                    var e = this;
                    e.initContainer(),
                    e.initCanvas(),
                    e.initCropBox(),
                    e.renderCanvas(),
                    e.cropped && e.renderCropBox()
                },
                initContainer: function() {
                    var e = this,
                    t = e.options,
                    i = e.element,
                    n = e.container,
                    a = e.cropper,
                    o = "cropper-hidden",
                    r = void 0;
                    u(a, o),
                    f(i, o),
                    e.containerData = r = {
                        width: Math.max(n.offsetWidth, Number(t.minContainerWidth) || 200),
                        height: Math.max(n.offsetHeight, Number(t.minContainerHeight) || 100)
                    },
                    d(a, {
                        width: r.width,
                        height: r.height
                    }),
                    u(i, o),
                    f(a, o)
                },
                initCanvas: function() {
                    var e = this,
                    t = e.options.viewMode,
                    i = e.containerData,
                    n = e.imageData,
                    a = 90 === Math.abs(n.rotate),
                    o = a ? n.naturalHeight: n.naturalWidth,
                    r = a ? n.naturalWidth: n.naturalHeight,
                    s = o / r,
                    l = i.width,
                    c = i.height;
                    i.height * s > i.width ? 3 === t ? l = i.height * s: c = i.width / s: 3 === t ? c = i.width / s: l = i.height * s;
                    var d = {
                        naturalWidth: o,
                        naturalHeight: r,
                        aspectRatio: s,
                        width: l,
                        height: c
                    };
                    d.oldLeft = d.left = (i.width - l) / 2,
                    d.oldTop = d.top = (i.height - c) / 2,
                    e.canvasData = d,
                    e.limited = 1 === t || 2 === t,
                    e.limitCanvas(!0, !0),
                    e.initialImageData = p({},
                    n),
                    e.initialCanvasData = p({},
                    d)
                },
                limitCanvas: function(e, t) {
                    var i = this,
                    n = i.options,
                    a = n.viewMode,
                    o = i.containerData,
                    r = i.canvasData,
                    s = r.aspectRatio,
                    l = i.cropBoxData,
                    p = i.cropped && l;
                    if (e) {
                        var c = Number(n.minCanvasWidth) || 0,
                        d = Number(n.minCanvasHeight) || 0;
                        a > 1 ? (c = Math.max(c, o.width), d = Math.max(d, o.height), 3 === a && (d * s > c ? c = d * s: d = c / s)) : a > 0 && (c ? c = Math.max(c, p ? l.width: 0) : d ? d = Math.max(d, p ? l.height: 0) : p && (c = l.width, d = l.height, d * s > c ? c = d * s: d = c / s)),
                        c && d ? d * s > c ? d = c / s: c = d * s: c ? d = c / s: d && (c = d * s),
                        r.minWidth = c,
                        r.minHeight = d,
                        r.maxWidth = 1 / 0,
                        r.maxHeight = 1 / 0
                    }
                    if (t) if (a) {
                        var h = o.width - r.width,
                        u = o.height - r.height;
                        r.minLeft = Math.min(0, h),
                        r.minTop = Math.min(0, u),
                        r.maxLeft = Math.max(0, h),
                        r.maxTop = Math.max(0, u),
                        p && i.limited && (r.minLeft = Math.min(l.left, l.left + (l.width - r.width)), r.minTop = Math.min(l.top, l.top + (l.height - r.height)), r.maxLeft = l.left, r.maxTop = l.top, 2 === a && (r.width >= o.width && (r.minLeft = Math.min(0, h), r.maxLeft = Math.max(0, h)), r.height >= o.height && (r.minTop = Math.min(0, u), r.maxTop = Math.max(0, u))))
                    } else r.minLeft = -r.width,
                    r.minTop = -r.height,
                    r.maxLeft = o.width,
                    r.maxTop = o.height
                },
                renderCanvas: function(e) {
                    var t = this,
                    i = t.canvasData,
                    n = t.imageData,
                    a = n.rotate;
                    if (t.rotated) {
                        t.rotated = !1;
                        var o = I({
                            width: n.width,
                            height: n.height,
                            degree: a
                        }),
                        r = o.width / o.height,
                        s = 1 === n.aspectRatio;
                        if (s || r !== i.aspectRatio) {
                            if (i.left -= (o.width - i.width) / 2, i.top -= (o.height - i.height) / 2, i.width = o.width, i.height = o.height, i.aspectRatio = r, i.naturalWidth = n.naturalWidth, i.naturalHeight = n.naturalHeight, s && a % 90 || a % 180) {
                                var l = I({
                                    width: n.naturalWidth,
                                    height: n.naturalHeight,
                                    degree: a
                                });
                                i.naturalWidth = l.width,
                                i.naturalHeight = l.height
                            }
                            t.limitCanvas(!0, !1)
                        }
                    } (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft),
                    (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop),
                    i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth),
                    i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight),
                    t.limitCanvas(!1, !0),
                    i.oldLeft = i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft),
                    i.oldTop = i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop),
                    d(t.canvas, p({
                        width: i.width,
                        height: i.height
                    },
                    $({
                        translateX: i.left,
                        translateY: i.top
                    }))),
                    t.renderImage(),
                    t.cropped && t.limited && t.limitCropBox(!0, !0),
                    e && t.output()
                },
                renderImage: function(e) {
                    var t = this,
                    i = t.canvasData,
                    n = t.imageData,
                    a = void 0,
                    o = void 0,
                    r = void 0,
                    s = void 0;
                    n.rotate && (o = I({
                        width: i.width,
                        height: i.height,
                        degree: n.rotate,
                        aspectRatio: n.aspectRatio
                    },
                    !0), r = o.width, s = o.height, a = {
                        width: r,
                        height: s,
                        left: (i.width - r) / 2,
                        top: (i.height - s) / 2
                    }),
                    p(n, a || {
                        width: i.width,
                        height: i.height,
                        left: 0,
                        top: 0
                    }),
                    d(t.image, p({
                        width: n.width,
                        height: n.height
                    },
                    $(p({
                        translateX: n.left,
                        translateY: n.top
                    },
                    n)))),
                    e && t.output()
                },
                initCropBox: function() {
                    var e = this,
                    t = e.options,
                    i = t.aspectRatio,
                    n = Number(t.autoCropArea) || .8,
                    a = e.canvasData,
                    o = {
                        width: a.width,
                        height: a.height
                    };
                    i && (a.height * i > a.width ? o.height = o.width / i: o.width = o.height * i),
                    e.cropBoxData = o,
                    e.limitCropBox(!0, !0),
                    o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth),
                    o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight),
                    o.width = Math.max(o.minWidth, o.width * n),
                    o.height = Math.max(o.minHeight, o.height * n),
                    o.oldLeft = o.left = a.left + (a.width - o.width) / 2,
                    o.oldTop = o.top = a.top + (a.height - o.height) / 2,
                    e.initialCropBoxData = p({},
                    o)
                },
                limitCropBox: function(e, t) {
                    var i = this,
                    n = i.options,
                    a = n.aspectRatio,
                    o = i.containerData,
                    r = i.canvasData,
                    s = i.cropBoxData,
                    l = i.limited;
                    if (e) {
                        var p = Number(n.minCropBoxWidth) || 0,
                        c = Number(n.minCropBoxHeight) || 0,
                        d = Math.min(o.width, l ? r.width: o.width),
                        h = Math.min(o.height, l ? r.height: o.height);
                        p = Math.min(p, o.width),
                        c = Math.min(c, o.height),
                        a && (p && c ? c * a > p ? c = p / a: p = c * a: p ? c = p / a: c && (p = c * a), h * a > d ? h = d / a: d = h * a),
                        s.minWidth = Math.min(p, d),
                        s.minHeight = Math.min(c, h),
                        s.maxWidth = d,
                        s.maxHeight = h
                    }
                    t && (l ? (s.minLeft = Math.max(0, r.left), s.minTop = Math.max(0, r.top), s.maxLeft = Math.min(o.width, r.left + r.width) - s.width, s.maxTop = Math.min(o.height, r.top + r.height) - s.height) : (s.minLeft = 0, s.minTop = 0, s.maxLeft = o.width - s.width, s.maxTop = o.height - s.height))
                },
                renderCropBox: function() {
                    var e = this,
                    t = e.options,
                    i = e.containerData,
                    n = e.cropBoxData; (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft),
                    (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop),
                    n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth),
                    n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight),
                    e.limitCropBox(!1, !0),
                    n.oldLeft = n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft),
                    n.oldTop = n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop),
                    t.movable && t.cropBoxMovable && b(e.face, "action", n.width === i.width && n.height === i.height ? "move": "all"),
                    d(e.cropBox, p({
                        width: n.width,
                        height: n.height
                    },
                    $({
                        translateX: n.left,
                        translateY: n.top
                    }))),
                    e.cropped && e.limited && e.limitCanvas(!0, !0),
                    e.disabled || e.output()
                },
                output: function() {
                    var e = this;
                    e.preview(),
                    e.complete && x(e.element, "crop", e.getData())
                }
            },
            ce = "preview",
            de = {
                initPreview: function() {
                    var e = this,
                    t = e.options.preview,
                    i = E("img"),
                    n = e.crossOrigin,
                    a = n ? e.crossOriginUrl: e.url;
                    if (n && (i.crossOrigin = n), i.src = a, k(e.viewBox, i), e.image2 = i, t) {
                        var o = t.querySelector ? [t] : document.querySelectorAll(t);
                        e.previews = o,
                        l(o,
                        function(e) {
                            var t = E("img");
                            b(e, ce, {
                                width: e.offsetWidth,
                                height: e.offsetHeight,
                                html: e.innerHTML
                            }),
                            n && (t.crossOrigin = n),
                            t.src = a,
                            t.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',
                            F(e),
                            k(e, t)
                        })
                    }
                },
                resetPreview: function() {
                    l(this.previews,
                    function(e) {
                        var t = v(e, ce);
                        d(e, {
                            width: t.width,
                            height: t.height
                        }),
                        e.innerHTML = t.html,
                        y(e, ce)
                    })
                },
                preview: function() {
                    var e = this,
                    t = e.imageData,
                    i = e.canvasData,
                    n = e.cropBoxData,
                    a = n.width,
                    o = n.height,
                    r = t.width,
                    s = t.height,
                    c = n.left - i.left - t.left,
                    h = n.top - i.top - t.top;
                    e.cropped && !e.disabled && (d(e.image2, p({
                        width: r,
                        height: s
                    },
                    $(p({
                        translateX: -c,
                        translateY: -h
                    },
                    t)))), l(e.previews,
                    function(e) {
                        var i = v(e, ce),
                        n = i.width,
                        l = i.height,
                        u = n,
                        f = l,
                        m = 1;
                        a && (m = n / a, f = o * m),
                        o && f > l && (m = l / o, u = a * m, f = l),
                        d(e, {
                            width: u,
                            height: f
                        }),
                        d(M(e, "img")[0], p({
                            width: r * m,
                            height: s * m
                        },
                        $(p({
                            translateX: -c * m,
                            translateY: -h * m
                        },
                        t))))
                    }))
                }
            },
            he = "undefined" != typeof window ? window.PointerEvent: null,
            ue = he ? "pointerdown": "touchstart mousedown",
            fe = he ? "pointermove": "touchmove mousemove",
            me = he ? " pointerup pointercancel": "touchend touchcancel mouseup",
            ge = "wheel mousewheel DOMMouseScroll",
            ve = "dblclick",
            be = "resize",
            ye = "cropstart",
            we = "cropmove",
            _e = "cropend",
            xe = "crop",
            De = "zoom",
            Ce = {
                bind: function() {
                    var e = this,
                    t = e.options,
                    i = e.element,
                    n = e.cropper;
                    o(t.cropstart) && _(i, ye, t.cropstart),
                    o(t.cropmove) && _(i, we, t.cropmove),
                    o(t.cropend) && _(i, _e, t.cropend),
                    o(t.crop) && _(i, xe, t.crop),
                    o(t.zoom) && _(i, De, t.zoom),
                    _(n, ue, e.onCropStart = c(e.cropStart, e)),
                    t.zoomable && t.zoomOnWheel && _(n, ge, e.onWheel = c(e.wheel, e)),
                    t.toggleDragModeOnDblclick && _(n, ve, e.onDblclick = c(e.dblclick, e)),
                    _(document, fe, e.onCropMove = c(e.cropMove, e)),
                    _(document, me, e.onCropEnd = c(e.cropEnd, e)),
                    t.responsive && _(window, be, e.onResize = c(e.resize, e))
                },
                unbind: function() {
                    var e = this,
                    t = e.options,
                    i = e.element,
                    n = e.cropper;
                    o(t.cropstart) && w(i, ye, t.cropstart),
                    o(t.cropmove) && w(i, we, t.cropmove),
                    o(t.cropend) && w(i, _e, t.cropend),
                    o(t.crop) && w(i, xe, t.crop),
                    o(t.zoom) && w(i, De, t.zoom),
                    w(n, ue, e.onCropStart),
                    t.zoomable && t.zoomOnWheel && w(n, ge, e.onWheel),
                    t.toggleDragModeOnDblclick && w(n, ve, e.onDblclick),
                    w(document, fe, e.onCropMove),
                    w(document, me, e.onCropEnd),
                    t.responsive && w(window, be, e.onResize)
                }
            },
            Me = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,
            Te = {
                resize: function() {
                    var e = this,
                    t = e.options,
                    i = e.container,
                    n = e.containerData,
                    a = Number(t.minContainerWidth) || 200,
                    o = Number(t.minContainerHeight) || 100;
                    if (!e.disabled && n.width !== a && n.height !== o) {
                        var r = i.offsetWidth / n.width;
                        1 === r && i.offsetHeight === n.height || !
                        function() {
                            var i = void 0,
                            n = void 0;
                            t.restore && (i = e.getCanvasData(), n = e.getCropBoxData()),
                            e.render(),
                            t.restore && (e.setCanvasData(l(i,
                            function(e, t) {
                                i[t] = e * r
                            })), e.setCropBoxData(l(n,
                            function(e, t) {
                                n[t] = e * r
                            })))
                        } ()
                    }
                },
                dblclick: function() {
                    var e = this;
                    e.disabled || "none" === e.options.dragMode || e.setDragMode(h(e.dragBox, "cropper-crop") ? "move": "crop")
                },
                wheel: function(e) {
                    var t = this,
                    i = D(e),
                    n = Number(t.options.wheelZoomRatio) || .1,
                    a = 1;
                    t.disabled || (i.preventDefault(), t.wheeling || (t.wheeling = !0, setTimeout(function() {
                        t.wheeling = !1
                    },
                    50), i.deltaY ? a = i.deltaY > 0 ? 1 : -1 : i.wheelDelta ? a = -i.wheelDelta / 120 : i.detail && (a = i.detail > 0 ? 1 : -1), t.zoom( - a * n, i)))
                },
                cropStart: function(e) {
                    var t = this;
                    if (!t.disabled) {
                        var i = t.options,
                        n = t.pointers,
                        a = D(e),
                        o = void 0;
                        a.changedTouches ? l(a.changedTouches,
                        function(e) {
                            n[e.identifier] = R(e)
                        }) : n[a.pointerId || 0] = R(a),
                        o = Object.keys(n).length > 1 && i.zoomable && i.zoomOnTouch ? "zoom": v(a.target, "action"),
                        Me.test(o) && x(t.element, "cropstart", {
                            originalEvent: a,
                            action: o
                        }) !== !1 && (a.preventDefault(), t.action = o, t.cropping = !1, "crop" === o && (t.cropping = !0, u(t.dragBox, "cropper-modal")))
                    }
                },
                cropMove: function(e) {
                    var t = this,
                    i = t.action;
                    if (!t.disabled && i) {
                        var n = t.pointers,
                        a = D(e);
                        a.preventDefault(),
                        x(t.element, "cropmove", {
                            originalEvent: a,
                            action: i
                        }) !== !1 && (a.changedTouches ? l(a.changedTouches,
                        function(e) {
                            p(n[e.identifier], R(e, !0))
                        }) : p(n[a.pointerId || 0], R(a, !0)), t.change(a))
                    }
                },
                cropEnd: function(e) {
                    var t = this;
                    if (!t.disabled) {
                        var i = t.action,
                        n = t.pointers,
                        a = D(e);
                        a.changedTouches ? l(a.changedTouches,
                        function(e) {
                            delete n[e.identifier]
                        }) : delete n[a.pointerId || 0],
                        i && (a.preventDefault(), Object.keys(n).length || (t.action = ""), t.cropping && (t.cropping = !1, m(t.dragBox, "cropper-modal", t.cropped && this.options.modal)), x(t.element, "cropend", {
                            originalEvent: a,
                            action: i
                        }))
                    }
                }
            },
            Ee = "e",
            ke = "w",
            Se = "s",
            Fe = "n",
            Oe = "se",
            Be = "sw",
            Ne = "ne",
            $e = "nw",
            Ie = {
                change: function(e) {
                    var t = this,
                    i = t.options,
                    n = t.containerData,
                    a = t.canvasData,
                    o = t.cropBoxData,
                    r = i.aspectRatio,
                    s = t.action,
                    p = o.width,
                    c = o.height,
                    d = o.left,
                    h = o.top,
                    u = d + p,
                    m = h + c,
                    g = 0,
                    v = 0,
                    b = n.width,
                    y = n.height,
                    w = !0,
                    _ = void 0; ! r && e.shiftKey && (r = p && c ? p / c: 1),
                    t.limited && (g = o.minLeft, v = o.minTop, b = g + Math.min(n.width, a.width, a.left + a.width), y = v + Math.min(n.height, a.height, a.top + a.height));
                    var x = t.pointers,
                    D = x[Object.keys(x)[0]],
                    M = {
                        x: D.endX - D.startX,
                        y: D.endY - D.startY
                    };
                    switch (r && (M.X = M.y * r, M.Y = M.x / r), s) {
                    case "all":
                        d += M.x,
                        h += M.y;
                        break;
                    case Ee:
                        if (M.x >= 0 && (u >= b || r && (h <= v || m >= y))) {
                            w = !1;
                            break
                        }
                        p += M.x,
                        r && (c = p / r, h -= M.Y / 2),
                        p < 0 && (s = ke, p = 0);
                        break;
                    case Fe:
                        if (M.y <= 0 && (h <= v || r && (d <= g || u >= b))) {
                            w = !1;
                            break
                        }
                        c -= M.y,
                        h += M.y,
                        r && (p = c * r, d += M.X / 2),
                        c < 0 && (s = Se, c = 0);
                        break;
                    case ke:
                        if (M.x <= 0 && (d <= g || r && (h <= v || m >= y))) {
                            w = !1;
                            break
                        }
                        p -= M.x,
                        d += M.x,
                        r && (c = p / r, h += M.Y / 2),
                        p < 0 && (s = Ee, p = 0);
                        break;
                    case Se:
                        if (M.y >= 0 && (m >= y || r && (d <= g || u >= b))) {
                            w = !1;
                            break
                        }
                        c += M.y,
                        r && (p = c * r, d -= M.X / 2),
                        c < 0 && (s = Fe, c = 0);
                        break;
                    case Ne:
                        if (r) {
                            if (M.y <= 0 && (h <= v || u >= b)) {
                                w = !1;
                                break
                            }
                            c -= M.y,
                            h += M.y,
                            p = c * r
                        } else M.x >= 0 ? u < b ? p += M.x: M.y <= 0 && h <= v && (w = !1) : p += M.x,
                        M.y <= 0 ? h > v && (c -= M.y, h += M.y) : (c -= M.y, h += M.y);
                        p < 0 && c < 0 ? (s = Be, c = 0, p = 0) : p < 0 ? (s = $e, p = 0) : c < 0 && (s = Oe, c = 0);
                        break;
                    case $e:
                        if (r) {
                            if (M.y <= 0 && (h <= v || d <= g)) {
                                w = !1;
                                break
                            }
                            c -= M.y,
                            h += M.y,
                            p = c * r,
                            d += M.X
                        } else M.x <= 0 ? d > g ? (p -= M.x, d += M.x) : M.y <= 0 && h <= v && (w = !1) : (p -= M.x, d += M.x),
                        M.y <= 0 ? h > v && (c -= M.y, h += M.y) : (c -= M.y, h += M.y);
                        p < 0 && c < 0 ? (s = Oe, c = 0, p = 0) : p < 0 ? (s = Ne, p = 0) : c < 0 && (s = Be, c = 0);
                        break;
                    case Be:
                        if (r) {
                            if (M.x <= 0 && (d <= g || m >= y)) {
                                w = !1;
                                break
                            }
                            p -= M.x,
                            d += M.x,
                            c = p / r
                        } else M.x <= 0 ? d > g ? (p -= M.x, d += M.x) : M.y >= 0 && m >= y && (w = !1) : (p -= M.x, d += M.x),
                        M.y >= 0 ? m < y && (c += M.y) : c += M.y;
                        p < 0 && c < 0 ? (s = Ne, c = 0, p = 0) : p < 0 ? (s = Oe, p = 0) : c < 0 && (s = $e, c = 0);
                        break;
                    case Oe:
                        if (r) {
                            if (M.x >= 0 && (u >= b || m >= y)) {
                                w = !1;
                                break
                            }
                            p += M.x,
                            c = p / r
                        } else M.x >= 0 ? u < b ? p += M.x: M.y >= 0 && m >= y && (w = !1) : p += M.x,
                        M.y >= 0 ? m < y && (c += M.y) : c += M.y;
                        p < 0 && c < 0 ? (s = $e, c = 0, p = 0) : p < 0 ? (s = Be, p = 0) : c < 0 && (s = Ne, c = 0);
                        break;
                    case "move":
                        t.move(M.x, M.y),
                        w = !1;
                        break;
                    case "zoom":
                        t.zoom(W(x), e),
                        w = !1;
                        break;
                    case "crop":
                        if (!M.x || !M.y) {
                            w = !1;
                            break
                        }
                        _ = C(t.cropper),
                        d = D.startX - _.left,
                        h = D.startY - _.top,
                        p = o.minWidth,
                        c = o.minHeight,
                        M.x > 0 ? s = M.y > 0 ? Oe: Ne: M.x < 0 && (d -= p, s = M.y > 0 ? Be: $e),
                        M.y < 0 && (h -= c),
                        t.cropped || (f(t.cropBox, "cropper-hidden"), t.cropped = !0, t.limited && t.limitCropBox(!0, !0))
                    }
                    w && (o.width = p, o.height = c, o.left = d, o.top = h, t.action = s, t.renderCropBox()),
                    l(x,
                    function(e) {
                        e.startX = e.endX,
                        e.startY = e.endY
                    })
                }
            },
            je = {
                crop: function() {
                    var e = this;
                    return e.ready && !e.disabled && (e.cropped || (e.cropped = !0, e.limitCropBox(!0, !0), e.options.modal && u(e.dragBox, "cropper-modal"), f(e.cropBox, "cropper-hidden")), e.setCropBoxData(e.initialCropBoxData)),
                    e
                },
                reset: function() {
                    var e = this;
                    return e.ready && !e.disabled && (e.imageData = p({},
                    e.initialImageData), e.canvasData = p({},
                    e.initialCanvasData), e.cropBoxData = p({},
                    e.initialCropBoxData), e.renderCanvas(), e.cropped && e.renderCropBox()),
                    e
                },
                clear: function() {
                    var e = this;
                    return e.cropped && !e.disabled && (p(e.cropBoxData, {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    }), e.cropped = !1, e.renderCropBox(), e.limitCanvas(), e.renderCanvas(), f(e.dragBox, "cropper-modal"), u(e.cropBox, "cropper-hidden")),
                    e
                },
                replace: function(e, t) {
                    var i = this;
                    return ! i.disabled && e && (i.isImg && (i.element.src = e), t ? (i.url = e, i.image.src = e, i.ready && (i.image2.src = e, l(i.previews,
                    function(t) {
                        M(t, "img")[0].src = e
                    }))) : (i.isImg && (i.replaced = !0), i.options.data = null, i.load(e))),
                    i
                },
                enable: function() {
                    var e = this;
                    return e.ready && (e.disabled = !1, f(e.cropper, "cropper-disabled")),
                    e
                },
                disable: function() {
                    var e = this;
                    return e.ready && (e.disabled = !0, u(e.cropper, "cropper-disabled")),
                    e
                },
                destroy: function() {
                    var e = this,
                    t = e.element,
                    i = e.image;
                    return e.loaded ? (e.isImg && e.replaced && (t.src = e.originalUrl), e.unbuild(), f(t, "cropper-hidden")) : e.isImg ? w(t, "load", e.onStart) : i && S(i),
                    y(t, "cropper"),
                    e
                },
                move: function(e, t) {
                    var n = this,
                    a = n.canvasData;
                    return n.moveTo(i(e) ? e: a.left + Number(e), i(t) ? t: a.top + Number(t))
                },
                moveTo: function(e, n) {
                    var a = this,
                    o = a.canvasData,
                    r = !1;
                    return i(n) && (n = e),
                    e = Number(e),
                    n = Number(n),
                    a.ready && !a.disabled && a.options.movable && (t(e) && (o.left = e, r = !0), t(n) && (o.top = n, r = !0), r && a.renderCanvas(!0)),
                    a
                },
                zoom: function(e, t) {
                    var i = this,
                    n = i.canvasData;
                    return e = Number(e),
                    e = e < 0 ? 1 / (1 - e) : 1 + e,
                    i.zoomTo(n.width * e / n.naturalWidth, t)
                },
                zoomTo: function(e, t) {
                    var i = this,
                    n = i.options,
                    a = i.canvasData,
                    o = a.width,
                    r = a.height,
                    s = a.naturalWidth,
                    l = a.naturalHeight;
                    if (e = Number(e), e >= 0 && i.ready && !i.disabled && n.zoomable) {
                        var p = s * e,
                        c = l * e;
                        if (x(i.element, "zoom", {
                            originalEvent: t,
                            oldRatio: o / s,
                            ratio: p / s
                        }) === !1) return i;
                        if (t) {
                            var d = i.pointers,
                            h = C(i.cropper),
                            u = d && Object.keys(d).length ? z(d) : {
                                pageX: t.pageX,
                                pageY: t.pageY
                            };
                            a.left -= (p - o) * ((u.pageX - h.left - a.left) / o),
                            a.top -= (c - r) * ((u.pageY - h.top - a.top) / r)
                        } else a.left -= (p - o) / 2,
                        a.top -= (c - r) / 2;
                        a.width = p,
                        a.height = c,
                        i.renderCanvas(!0)
                    }
                    return i
                },
                rotate: function(e) {
                    var t = this;
                    return t.rotateTo((t.imageData.rotate || 0) + Number(e))
                },
                rotateTo: function(e) {
                    var i = this;
                    return e = Number(e),
                    t(e) && i.ready && !i.disabled && i.options.rotatable && (i.imageData.rotate = e % 360, i.rotated = !0, i.renderCanvas(!0)),
                    i
                },
                scale: function(e, n) {
                    var a = this,
                    o = a.imageData,
                    r = !1;
                    return i(n) && (n = e),
                    e = Number(e),
                    n = Number(n),
                    a.ready && !a.disabled && a.options.scalable && (t(e) && (o.scaleX = e, r = !0), t(n) && (o.scaleY = n, r = !0), r && a.renderImage(!0)),
                    a
                },
                scaleX: function(e) {
                    var i = this,
                    n = i.imageData.scaleY;
                    return i.scale(e, t(n) ? n: 1)
                },
                scaleY: function(e) {
                    var i = this,
                    n = i.imageData.scaleX;
                    return i.scale(t(n) ? n: 1, e)
                },
                getData: function(e) {
                    var t = this,
                    i = t.options,
                    n = t.imageData,
                    a = t.canvasData,
                    o = t.cropBoxData,
                    r = void 0,
                    s = void 0;
                    return t.ready && t.cropped ? (s = {
                        x: o.left - a.left,
                        y: o.top - a.top,
                        width: o.width,
                        height: o.height
                    },
                    r = n.width / n.naturalWidth, l(s,
                    function(t, i) {
                        t /= r,
                        s[i] = e ? Math.round(t) : t
                    })) : s = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    i.rotatable && (s.rotate = n.rotate || 0),
                    i.scalable && (s.scaleX = n.scaleX || 1, s.scaleY = n.scaleY || 1),
                    s
                },
                setData: function(e) {
                    var i = this,
                    n = i.options,
                    r = i.imageData,
                    s = i.canvasData,
                    l = {},
                    p = void 0,
                    c = void 0,
                    d = void 0;
                    return o(e) && (e = e.call(i.element)),
                    i.ready && !i.disabled && a(e) && (n.rotatable && t(e.rotate) && e.rotate !== r.rotate && (r.rotate = e.rotate, i.rotated = p = !0), n.scalable && (t(e.scaleX) && e.scaleX !== r.scaleX && (r.scaleX = e.scaleX, c = !0), t(e.scaleY) && e.scaleY !== r.scaleY && (r.scaleY = e.scaleY, c = !0)), p ? i.renderCanvas() : c && i.renderImage(), d = r.width / r.naturalWidth, t(e.x) && (l.left = e.x * d + s.left), t(e.y) && (l.top = e.y * d + s.top), t(e.width) && (l.width = e.width * d), t(e.height) && (l.height = e.height * d), i.setCropBoxData(l)),
                    i
                },
                getContainerData: function() {
                    var e = this;
                    return e.ready ? e.containerData: {}
                },
                getImageData: function() {
                    var e = this;
                    return e.loaded ? e.imageData: {}
                },
                getCanvasData: function() {
                    var e = this,
                    t = e.canvasData,
                    i = {};
                    return e.ready && l(["left", "top", "width", "height", "naturalWidth", "naturalHeight"],
                    function(e) {
                        i[e] = t[e]
                    }),
                    i
                },
                setCanvasData: function(e) {
                    var i = this,
                    n = i.canvasData,
                    r = n.aspectRatio;
                    return o(e) && (e = e.call(i.element)),
                    i.ready && !i.disabled && a(e) && (t(e.left) && (n.left = e.left), t(e.top) && (n.top = e.top), t(e.width) ? (n.width = e.width, n.height = e.width / r) : t(e.height) && (n.height = e.height, n.width = e.height * r), i.renderCanvas(!0)),
                    i
                },
                getCropBoxData: function() {
                    var e = this,
                    t = e.cropBoxData,
                    i = void 0;
                    return e.ready && e.cropped && (i = {
                        left: t.left,
                        top: t.top,
                        width: t.width,
                        height: t.height
                    }),
                    i || {}
                },
                setCropBoxData: function(e) {
                    var i = this,
                    n = i.cropBoxData,
                    r = i.options.aspectRatio,
                    s = void 0,
                    l = void 0;
                    return o(e) && (e = e.call(i.element)),
                    i.ready && i.cropped && !i.disabled && a(e) && (t(e.left) && (n.left = e.left), t(e.top) && (n.top = e.top), t(e.width) && e.width !== n.width && (s = !0, n.width = e.width), t(e.height) && e.height !== n.height && (l = !0, n.height = e.height), r && (s ? n.height = n.width / r: l && (n.width = n.height * r)), i.renderCropBox()),
                    i
                },
                getCroppedCanvas: function(e) {
                    var t = this;
                    if (!t.ready || !window.HTMLCanvasElement) return null;
                    if (!t.cropped) return j(t.image, t.imageData);
                    a(e) || (e = {});
                    var i = t.getData(),
                    n = i.width,
                    o = i.height,
                    r = n / o,
                    s = void 0,
                    l = void 0,
                    p = void 0;
                    a(e) && (s = e.width, l = e.height, s ? (l = s / r, p = s / n) : l && (s = l * r, p = l / o));
                    var c = Math.floor(s || n),
                    d = Math.floor(l || o),
                    h = E("canvas"),
                    u = h.getContext("2d");
                    h.width = c,
                    h.height = d,
                    e.fillColor && (u.fillStyle = e.fillColor, u.fillRect(0, 0, c, d));
                    var f = function() {
                        var e = j(t.image, t.imageData),
                        a = e.width,
                        r = e.height,
                        s = t.canvasData,
                        l = [e],
                        c = i.x + s.naturalWidth * (Math.abs(i.scaleX || 1) - 1) / 2,
                        d = i.y + s.naturalHeight * (Math.abs(i.scaleY || 1) - 1) / 2,
                        h = void 0,
                        u = void 0,
                        f = void 0,
                        m = void 0,
                        g = void 0,
                        v = void 0;
                        return c <= -n || c > a ? c = h = f = g = 0 : c <= 0 ? (f = -c, c = 0, h = g = Math.min(a, n + c)) : c <= a && (f = 0, h = g = Math.min(n, a - c)),
                        h <= 0 || d <= -o || d > r ? d = u = m = v = 0 : d <= 0 ? (m = -d, d = 0, u = v = Math.min(r, o + d)) : d <= r && (m = 0, u = v = Math.min(o, r - d)),
                        l.push(Math.floor(c), Math.floor(d), Math.floor(h), Math.floor(u)),
                        p && (f *= p, m *= p, g *= p, v *= p),
                        g > 0 && v > 0 && l.push(Math.floor(f), Math.floor(m), Math.floor(g), Math.floor(v)),
                        l
                    } ();
                    return u.drawImage.apply(u, Z(f)),
                    h
                },
                setAspectRatio: function(e) {
                    var t = this,
                    n = t.options;
                    return t.disabled || i(e) || (n.aspectRatio = Math.max(0, e) || NaN, t.ready && (t.initCropBox(), t.cropped && t.renderCropBox())),
                    t
                },
                setDragMode: function(e) {
                    var t = this,
                    i = t.options,
                    n = t.dragBox,
                    a = t.face,
                    o = void 0,
                    r = void 0;
                    return t.loaded && !t.disabled && (o = "crop" === e, r = i.movable && "move" === e, e = o || r ? e: "none", b(n, "action", e), m(n, "cropper-crop", o), m(n, "cropper-move", r), i.cropBoxMovable || (b(a, "action", e), m(a, "cropper-crop", o), m(a, "cropper-move", r))),
                    t
                }
            },
            Ae = "cropper",
            He = Ae + "-hidden",
            Xe = "error",
            Pe = "load",
            Re = "ready",
            We = "crop",
            ze = /^data:/,
            Le = /^data:image\/jpeg;base64,/,
            Ue = void 0,
            Ye = function() {
                function e(t, i) {
                    q(this, e);
                    var n = this;
                    n.element = t,
                    n.options = p({},
                    L, a(i) && i),
                    n.loaded = !1,
                    n.ready = !1,
                    n.complete = !1,
                    n.rotated = !1,
                    n.cropped = !1,
                    n.disabled = !1,
                    n.replaced = !1,
                    n.limited = !1,
                    n.wheeling = !1,
                    n.isImg = !1,
                    n.originalUrl = "",
                    n.canvasData = null,
                    n.cropBoxData = null,
                    n.previews = null,
                    n.pointers = {},
                    n.init()
                }
                return Q(e, [{
                    key: "init",
                    value: function() {
                        var e = this,
                        t = e.element,
                        i = t.tagName.toLowerCase(),
                        n = void 0;
                        if (!v(t, Ae)) {
                            if (b(t, Ae, e), "img" === i) {
                                if (e.isImg = !0, e.originalUrl = n = t.getAttribute("src"), !n) return;
                                n = t.src
                            } else "canvas" === i && window.HTMLCanvasElement && (n = t.toDataURL());
                            e.load(n)
                        }
                    }
                },
                {
                    key: "load",
                    value: function(e) {
                        var t = this,
                        i = t.options,
                        n = t.element;
                        if (e) {
                            if (t.url = e, t.imageData = {},
                            !i.checkOrientation || !window.ArrayBuffer) return void t.clone();
                            if (ze.test(e)) return void(Le ? t.read(X(e)) : t.clone());
                            var a = new XMLHttpRequest;
                            a.onerror = a.onabort = function() {
                                t.clone()
                            },
                            a.onload = function() {
                                t.read(a.response)
                            },
                            i.checkCrossOrigin && O(e) && n.crossOrigin && (e = B(e)),
                            a.open("get", e),
                            a.responseType = "arraybuffer",
                            a.withCredentials = "use-credentials" === n.crossOrigin,
                            a.send()
                        }
                    }
                },
                {
                    key: "read",
                    value: function(e) {
                        var t = this,
                        i = t.options,
                        n = H(e),
                        a = t.imageData,
                        o = 0,
                        r = 1,
                        s = 1;
                        if (n > 1) switch (t.url = P(e), n) {
                        case 2:
                            r = -1;
                            break;
                        case 3:
                            o = -180;
                            break;
                        case 4:
                            s = -1;
                            break;
                        case 5:
                            o = 90,
                            s = -1;
                            break;
                        case 6:
                            o = 90;
                            break;
                        case 7:
                            o = 90,
                            r = -1;
                            break;
                        case 8:
                            o = -90
                        }
                        i.rotatable && (a.rotate = o),
                        i.scalable && (a.scaleX = r, a.scaleY = s),
                        t.clone()
                    }
                },
                {
                    key: "clone",
                    value: function() {
                        var e = this,
                        t = e.element,
                        i = e.url,
                        n = void 0,
                        a = void 0,
                        o = void 0,
                        r = void 0;
                        e.options.checkCrossOrigin && O(i) && (n = t.crossOrigin, n ? a = i: (n = "anonymous", a = B(i))),
                        e.crossOrigin = n,
                        e.crossOriginUrl = a;
                        var s = E("img");
                        n && (s.crossOrigin = n),
                        s.src = a || i,
                        e.image = s,
                        e.onStart = o = c(e.start, e),
                        e.onStop = r = c(e.stop, e),
                        e.isImg ? t.complete ? e.start() : _(t, Pe, o) : (_(s, Pe, o), _(s, Xe, r), u(s, "cropper-hide"), t.parentNode.insertBefore(s, t.nextSibling))
                    }
                },
                {
                    key: "start",
                    value: function(e) {
                        var t = this,
                        i = t.isImg ? t.element: t.image;
                        e && (w(i, Pe, t.onStart), w(i, Xe, t.onStop)),
                        N(i,
                        function(e, i) {
                            p(t.imageData, {
                                naturalWidth: e,
                                naturalHeight: i,
                                aspectRatio: e / i
                            }),
                            t.loaded = !0,
                            t.build()
                        })
                    }
                },
                {
                    key: "stop",
                    value: function() {
                        var e = this,
                        t = e.image;
                        w(t, Pe, e.onStart),
                        w(t, Xe, e.onStop),
                        S(t),
                        e.image = null
                    }
                },
                {
                    key: "build",
                    value: function() {
                        var e = this,
                        t = e.options,
                        i = e.element,
                        n = e.image,
                        a = void 0,
                        r = void 0,
                        s = void 0,
                        l = void 0,
                        p = void 0,
                        c = void 0;
                        if (e.loaded) {
                            e.ready && e.unbuild();
                            var d = E("div");
                            d.innerHTML = U,
                            e.container = a = i.parentNode,
                            e.cropper = r = T(d, "cropper-container")[0],
                            e.canvas = s = T(r, "cropper-canvas")[0],
                            e.dragBox = l = T(r, "cropper-drag-box")[0],
                            e.cropBox = p = T(r, "cropper-crop-box")[0],
                            e.viewBox = T(r, "cropper-view-box")[0],
                            e.face = c = T(p, "cropper-face")[0],
                            k(s, n),
                            u(i, He),
                            a.insertBefore(r, i.nextSibling),
                            e.isImg || f(n, "cropper-hide"),
                            e.initPreview(),
                            e.bind(),
                            t.aspectRatio = Math.max(0, t.aspectRatio) || NaN,
                            t.viewMode = Math.max(0, Math.min(3, Math.round(t.viewMode))) || 0,
                            e.cropped = t.autoCrop,
                            t.autoCrop ? t.modal && u(l, "cropper-modal") : u(p, He),
                            t.guides || u(T(p, "cropper-dashed"), He),
                            t.center || u(T(p, "cropper-center"), He),
                            t.background && u(r, "cropper-bg"),
                            t.highlight || u(c, "cropper-invisible"),
                            t.cropBoxMovable && (u(c, "cropper-move"), b(c, "action", "all")),
                            t.cropBoxResizable || (u(T(p, "cropper-line"), He), u(T(p, "cropper-point"), He)),
                            e.setDragMode(t.dragMode),
                            e.render(),
                            e.ready = !0,
                            e.setData(t.data),
                            e.completing = setTimeout(function() {
                                o(t.ready) && _(i, Re, t.ready, !0),
                                x(i, Re),
                                x(i, We, e.getData()),
                                e.complete = !0
                            },
                            0)
                        }
                    }
                },
                {
                    key: "unbuild",
                    value: function() {
                        var e = this;
                        e.ready && (e.complete || clearTimeout(e.completing), e.ready = !1, e.complete = !1, e.initialImageData = null, e.initialCanvasData = null, e.initialCropBoxData = null, e.containerData = null, e.canvasData = null, e.cropBoxData = null, e.unbind(), e.resetPreview(), e.previews = null, e.viewBox = null, e.cropBox = null, e.dragBox = null, e.canvas = null, e.container = null, S(e.cropper), e.cropper = null)
                    }
                }], [{
                    key: "noConflict",
                    value: function() {
                        return window.Cropper = Ue,
                        e
                    }
                },
                {
                    key: "setDefaults",
                    value: function(e) {
                        p(L, a(e) && e)
                    }
                }]),
                e
            } ();
            return p(Ye.prototype, pe),
            p(Ye.prototype, de),
            p(Ye.prototype, Ce),
            p(Ye.prototype, Te),
            p(Ye.prototype, Ie),
            p(Ye.prototype, je),
            "undefined" != typeof window && (Ue = window.Cropper, window.Cropper = Ye),
            Ye
        })
    },
    1469 : function(e, t, i) {
        var n, a, o;
        /*! jQuery UI - v1.11.4+CommonJS - 2015-08-28
	* http://jqueryui.com
	* Includes: widget.js
	* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
        !
        function(r) {
            a = [i(1177)],
            n = r,
            o = "function" == typeof n ? n.apply(t, a) : n,
            !(void 0 !== o && (e.exports = o))
        } (function(e) {
            /*!
	 * jQuery UI Widget 1.11.4
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/jQuery.widget/
	 */
            var t = 0,
            i = Array.prototype.slice;
            e.cleanData = function(t) {
                return function(i) {
                    var n, a, o;
                    for (o = 0; null != (a = i[o]); o++) try {
                        n = e._data(a, "events"),
                        n && n.remove && e(a).triggerHandler("remove")
                    } catch(e) {}
                    t(i)
                }
            } (e.cleanData),
            e.widget = function(t, i, n) {
                var a, o, r, s, l = {},
                p = t.split(".")[0];
                return t = t.split(".")[1],
                a = p + "-" + t,
                n || (n = i, i = e.Widget),
                e.expr[":"][a.toLowerCase()] = function(t) {
                    return !! e.data(t, a)
                },
                e[p] = e[p] || {},
                o = e[p][t],
                r = e[p][t] = function(e, t) {
                    return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
                },
                e.extend(r, o, {
                    version: n.version,
                    _proto: e.extend({},
                    n),
                    _childConstructors: []
                }),
                s = new i,
                s.options = e.widget.extend({},
                s.options),
                e.each(n,
                function(t, n) {
                    return e.isFunction(n) ? void(l[t] = function() {
                        var e = function() {
                            return i.prototype[t].apply(this, arguments)
                        },
                        a = function(e) {
                            return i.prototype[t].apply(this, e)
                        };
                        return function() {
                            var t, i = this._super,
                            o = this._superApply;
                            return this._super = e,
                            this._superApply = a,
                            t = n.apply(this, arguments),
                            this._super = i,
                            this._superApply = o,
                            t
                        }
                    } ()) : void(l[t] = n)
                }),
                r.prototype = e.widget.extend(s, {
                    widgetEventPrefix: o ? s.widgetEventPrefix || t: t
                },
                l, {
                    constructor: r,
                    namespace: p,
                    widgetName: t,
                    widgetFullName: a
                }),
                o ? (e.each(o._childConstructors,
                function(t, i) {
                    var n = i.prototype;
                    e.widget(n.namespace + "." + n.widgetName, r, i._proto)
                }), delete o._childConstructors) : i._childConstructors.push(r),
                e.widget.bridge(t, r),
                r
            },
            e.widget.extend = function(t) {
                for (var n, a, o = i.call(arguments, 1), r = 0, s = o.length; r < s; r++) for (n in o[r]) a = o[r][n],
                o[r].hasOwnProperty(n) && void 0 !== a && (e.isPlainObject(a) ? t[n] = e.isPlainObject(t[n]) ? e.widget.extend({},
                t[n], a) : e.widget.extend({},
                a) : t[n] = a);
                return t
            },
            e.widget.bridge = function(t, n) {
                var a = n.prototype.widgetFullName || t;
                e.fn[t] = function(o) {
                    var r = "string" == typeof o,
                    s = i.call(arguments, 1),
                    l = this;
                    return r ? this.each(function() {
                        var i, n = e.data(this, a);
                        return "instance" === o ? (l = n, !1) : n ? e.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, s), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
                    }) : (s.length && (o = e.widget.extend.apply(null, [o].concat(s))), this.each(function() {
                        var t = e.data(this, a);
                        t ? (t.option(o || {}), t._init && t._init()) : e.data(this, a, new n(o, this))
                    })),
                    l
                }
            },
            e.Widget = function() {},
            e.Widget._childConstructors = [],
            e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(i, n) {
                    n = e(n || this.defaultElement || this)[0],
                    this.element = e(n),
                    this.uuid = t++,
                    this.eventNamespace = "." + this.widgetName + this.uuid,
                    this.bindings = e(),
                    this.hoverable = e(),
                    this.focusable = e(),
                    n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(e) {
                            e.target === n && this.destroy()
                        }
                    }), this.document = e(n.style ? n.ownerDocument: n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
                    this.options = e.widget.extend({},
                    this.options, this._getCreateOptions(), i),
                    this._create(),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init()
                },
                _getCreateOptions: e.noop,
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                    this._destroy(),
                    this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                    this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                    this.bindings.unbind(this.eventNamespace),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus")
                },
                _destroy: e.noop,
                widget: function() {
                    return this.element
                },
                option: function(t, i) {
                    var n, a, o, r = t;
                    if (0 === arguments.length) return e.widget.extend({},
                    this.options);
                    if ("string" == typeof t) if (r = {},
                    n = t.split("."), t = n.shift(), n.length) {
                        for (a = r[t] = e.widget.extend({},
                        this.options[t]), o = 0; o < n.length - 1; o++) a[n[o]] = a[n[o]] || {},
                        a = a[n[o]];
                        if (t = n.pop(), 1 === arguments.length) return void 0 === a[t] ? null: a[t];
                        a[t] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null: this.options[t];
                        r[t] = i
                    }
                    return this._setOptions(r),
                    this
                },
                _setOptions: function(e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this
                },
                _setOption: function(e, t) {
                    return this.options[e] = t,
                    "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))),
                    this
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _on: function(t, i, n) {
                    var a, o = this;
                    "boolean" != typeof t && (n = i, i = t, t = !1),
                    n ? (i = a = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, a = this.widget()),
                    e.each(n,
                    function(n, r) {
                        function s() {
                            if (t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? o[r] : r).apply(o, arguments)
                        }
                        "string" != typeof r && (s.guid = r.guid = r.guid || s.guid || e.guid++);
                        var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        p = l[1] + o.eventNamespace,
                        c = l[2];
                        c ? a.delegate(c, p, s) : i.bind(p, s)
                    })
                },
                _off: function(t, i) {
                    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                    t.unbind(i).undelegate(i),
                    this.bindings = e(this.bindings.not(t).get()),
                    this.focusable = e(this.focusable.not(t).get()),
                    this.hoverable = e(this.hoverable.not(t).get())
                },
                _delay: function(e, t) {
                    function i() {
                        return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                    }
                    var n = this;
                    return setTimeout(i, t || 0)
                },
                _hoverable: function(t) {
                    this.hoverable = this.hoverable.add(t),
                    this._on(t, {
                        mouseenter: function(t) {
                            e(t.currentTarget).addClass("ui-state-hover")
                        },
                        mouseleave: function(t) {
                            e(t.currentTarget).removeClass("ui-state-hover")
                        }
                    })
                },
                _focusable: function(t) {
                    this.focusable = this.focusable.add(t),
                    this._on(t, {
                        focusin: function(t) {
                            e(t.currentTarget).addClass("ui-state-focus")
                        },
                        focusout: function(t) {
                            e(t.currentTarget).removeClass("ui-state-focus")
                        }
                    })
                },
                _trigger: function(t, i, n) {
                    var a, o, r = this.options[t];
                    if (n = n || {},
                    i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t: this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (a in o) a in i || (i[a] = o[a]);
                    return this.element.trigger(i, n),
                    !(e.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
                }
            },
            e.each({
                show: "fadeIn",
                hide: "fadeOut"
            },
            function(t, i) {
                e.Widget.prototype["_" + t] = function(n, a, o) {
                    "string" == typeof a && (a = {
                        effect: a
                    });
                    var r, s = a ? a === !0 || "number" == typeof a ? i: a.effect || i: t;
                    a = a || {},
                    "number" == typeof a && (a = {
                        duration: a
                    }),
                    r = !e.isEmptyObject(a),
                    a.complete = o,
                    a.delay && n.delay(a.delay),
                    r && e.effects && e.effects.effect[s] ? n[t](a) : s !== t && n[s] ? n[s](a.duration, a.easing, o) : n.queue(function(i) {
                        e(this)[t](),
                        o && o.call(n[0]),
                        i()
                    })
                }
            });
            e.widget
        })
    },
    1470 : function(e, t, i) {
        var n, a, o; !
        function(r) {
            "use strict";
            a = [i(1177)],
            n = r,
            o = "function" == typeof n ? n.apply(t, a) : n,
            !(void 0 !== o && (e.exports = o))
        } (function(e) {
            "use strict";
            var t = 0,
            i = e,
            n = "parseJSON";
            "JSON" in window && "parse" in JSON && (i = JSON, n = "parse"),
            e.ajaxTransport("iframe",
            function(i) {
                if (i.async) {
                    var n, a, o, r = i.initialIframeSrc || "javascript:false;";
                    return {
                        send: function(s, l) {
                            n = e('<form style="display:none;"></form>'),
                            n.attr("accept-charset", i.formAcceptCharset),
                            o = /\?/.test(i.url) ? "&": "?",
                            "DELETE" === i.type ? (i.url = i.url + o + "_method=DELETE", i.type = "POST") : "PUT" === i.type ? (i.url = i.url + o + "_method=PUT", i.type = "POST") : "PATCH" === i.type && (i.url = i.url + o + "_method=PATCH", i.type = "POST"),
                            t += 1,
                            a = e('<iframe src="' + r + '" name="iframe-transport-' + t + '"></iframe>').bind("load",
                            function() {
                                var t, o = e.isArray(i.paramName) ? i.paramName: [i.paramName];
                                a.unbind("load").bind("load",
                                function() {
                                    var t;
                                    try {
                                        if (t = a.contents(), !t.length || !t[0].firstChild) throw new Error
                                    } catch(e) {
                                        t = void 0
                                    }
                                    l(200, "success", {
                                        iframe: t
                                    }),
                                    e('<iframe src="' + r + '"></iframe>').appendTo(n),
                                    window.setTimeout(function() {
                                        n.remove()
                                    },
                                    0)
                                }),
                                n.prop("target", a.prop("name")).prop("action", i.url).prop("method", i.type),
                                i.formData && e.each(i.formData,
                                function(t, i) {
                                    e('<input type="hidden"/>').prop("name", i.name).val(i.value).appendTo(n)
                                }),
                                i.fileInput && i.fileInput.length && "POST" === i.type && (t = i.fileInput.clone(), i.fileInput.after(function(e) {
                                    return t[e]
                                }), i.paramName && i.fileInput.each(function(t) {
                                    e(this).prop("name", o[t] || i.paramName)
                                }), n.append(i.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"), i.fileInput.removeAttr("form")),
                                n.submit(),
                                t && t.length && i.fileInput.each(function(i, n) {
                                    var a = e(t[i]);
                                    e(n).prop("name", a.prop("name")).attr("form", a.attr("form")),
                                    a.replaceWith(n)
                                })
                            }),
                            n.append(a).appendTo(document.body)
                        },
                        abort: function() {
                            a && a.unbind("load").prop("src", r),
                            n && n.remove()
                        }
                    }
                }
            }),
            e.ajaxSetup({
                converters: {
                    "iframe text": function(t) {
                        return t && e(t[0].body).text()
                    },
                    "iframe json": function(t) {
                        return t && i[n](e(t[0].body).text())
                    },
                    "iframe html": function(t) {
                        return t && e(t[0].body).html()
                    },
                    "iframe xml": function(t) {
                        var i = t && t[0];
                        return i && e.isXMLDoc(i) ? i: e.parseXML(i.XMLDocument && i.XMLDocument.xml || e(i.body).html())
                    },
                    "iframe script": function(t) {
                        return t && e.globalEval(e(t[0].body).text())
                    }
                }
            })
        })
    },
    1471 : function(e, t, i) {
        var n, a, o; !
        function(r) {
            "use strict";
            a = [i(1177), i(1469)],
            n = r,
            o = "function" == typeof n ? n.apply(t, a) : n,
            !(void 0 !== o && (e.exports = o))
        } (function(e) {
            "use strict";
            function t(t) {
                var i = "dragover" === t;
                return function(n) {
                    n.dataTransfer = n.originalEvent && n.originalEvent.dataTransfer;
                    var a = n.dataTransfer;
                    a && e.inArray("Files", a.types) !== -1 && this._trigger(t, e.Event(t, {
                        delegatedEvent: n
                    })) !== !1 && (n.preventDefault(), i && (a.dropEffect = "copy"))
                }
            }
            e.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || e('<input type="file">').prop("disabled")),
            e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader),
            e.support.xhrFormDataFileUpload = !!window.FormData,
            e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice),
            e.widget("blueimp.fileupload", {
                options: {
                    dropZone: e(document),
                    pasteZone: void 0,
                    fileInput: void 0,
                    replaceFileInput: !0,
                    paramName: void 0,
                    singleFileUploads: !0,
                    limitMultiFileUploads: void 0,
                    limitMultiFileUploadSize: void 0,
                    limitMultiFileUploadSizeOverhead: 512,
                    sequentialUploads: !1,
                    limitConcurrentUploads: void 0,
                    forceIframeTransport: !1,
                    redirect: void 0,
                    redirectParamName: void 0,
                    postMessage: void 0,
                    multipart: !0,
                    maxChunkSize: void 0,
                    uploadedBytes: void 0,
                    recalculateProgress: !0,
                    progressInterval: 100,
                    bitrateInterval: 500,
                    autoUpload: !0,
                    messages: {
                        uploadedBytes: "Uploaded bytes exceed file size"
                    },
                    i18n: function(t, i) {
                        return t = this.messages[t] || t.toString(),
                        i && e.each(i,
                        function(e, i) {
                            t = t.replace("{" + e + "}", i)
                        }),
                        t
                    },
                    formData: function(e) {
                        return e.serializeArray()
                    },
                    add: function(t, i) {
                        return ! t.isDefaultPrevented() && void((i.autoUpload || i.autoUpload !== !1 && e(this).fileupload("option", "autoUpload")) && i.process().done(function() {
                            i.submit()
                        }))
                    },
                    processData: !1,
                    contentType: !1,
                    cache: !1,
                    timeout: 0
                },
                _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
                _blobSlice: e.support.blobSlice &&
                function() {
                    var e = this.slice || this.webkitSlice || this.mozSlice;
                    return e.apply(this, arguments)
                },
                _BitrateTimer: function() {
                    this.timestamp = Date.now ? Date.now() : (new Date).getTime(),
                    this.loaded = 0,
                    this.bitrate = 0,
                    this.getBitrate = function(e, t, i) {
                        var n = e - this.timestamp;
                        return (!this.bitrate || !i || n > i) && (this.bitrate = (t - this.loaded) * (1e3 / n) * 8, this.loaded = t, this.timestamp = e),
                        this.bitrate
                    }
                },
                _isXHRUpload: function(t) {
                    return ! t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
                },
                _getFormData: function(t) {
                    var i;
                    return "function" === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData: "object" === e.type(t.formData) ? (i = [], e.each(t.formData,
                    function(e, t) {
                        i.push({
                            name: e,
                            value: t
                        })
                    }), i) : []
                },
                _getTotal: function(t) {
                    var i = 0;
                    return e.each(t,
                    function(e, t) {
                        i += t.size || 1
                    }),
                    i
                },
                _initProgressObject: function(t) {
                    var i = {
                        loaded: 0,
                        total: 0,
                        bitrate: 0
                    };
                    t._progress ? e.extend(t._progress, i) : t._progress = i
                },
                _initResponseObject: function(e) {
                    var t;
                    if (e._response) for (t in e._response) e._response.hasOwnProperty(t) && delete e._response[t];
                    else e._response = {}
                },
                _onProgress: function(t, i) {
                    if (t.lengthComputable) {
                        var n, a = Date.now ? Date.now() : (new Date).getTime();
                        if (i._time && i.progressInterval && a - i._time < i.progressInterval && t.loaded !== t.total) return;
                        i._time = a,
                        n = Math.floor(t.loaded / t.total * (i.chunkSize || i._progress.total)) + (i.uploadedBytes || 0),
                        this._progress.loaded += n - i._progress.loaded,
                        this._progress.bitrate = this._bitrateTimer.getBitrate(a, this._progress.loaded, i.bitrateInterval),
                        i._progress.loaded = i.loaded = n,
                        i._progress.bitrate = i.bitrate = i._bitrateTimer.getBitrate(a, n, i.bitrateInterval),
                        this._trigger("progress", e.Event("progress", {
                            delegatedEvent: t
                        }), i),
                        this._trigger("progressall", e.Event("progressall", {
                            delegatedEvent: t
                        }), this._progress)
                    }
                },
                _initProgressListener: function(t) {
                    var i = this,
                    n = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
                    n.upload && (e(n.upload).bind("progress",
                    function(e) {
                        var n = e.originalEvent;
                        e.lengthComputable = n.lengthComputable,
                        e.loaded = n.loaded,
                        e.total = n.total,
                        i._onProgress(e, t)
                    }), t.xhr = function() {
                        return n
                    })
                },
                _isInstanceOf: function(e, t) {
                    return Object.prototype.toString.call(t) === "[object " + e + "]"
                },
                _initXHRData: function(t) {
                    var i, n = this,
                    a = t.files[0],
                    o = t.multipart || !e.support.xhrFileUpload,
                    r = "array" === e.type(t.paramName) ? t.paramName[0] : t.paramName;
                    t.headers = e.extend({},
                    t.headers),
                    t.contentRange && (t.headers["Content-Range"] = t.contentRange),
                    o && !t.blob && this._isInstanceOf("File", a) || (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(a.name) + '"'),
                    o ? e.support.xhrFormDataFileUpload && (t.postMessage ? (i = this._getFormData(t), t.blob ? i.push({
                        name: r,
                        value: t.blob
                    }) : e.each(t.files,
                    function(n, a) {
                        i.push({
                            name: "array" === e.type(t.paramName) && t.paramName[n] || r,
                            value: a
                        })
                    })) : (n._isInstanceOf("FormData", t.formData) ? i = t.formData: (i = new FormData, e.each(this._getFormData(t),
                    function(e, t) {
                        i.append(t.name, t.value)
                    })), t.blob ? i.append(r, t.blob, a.name) : e.each(t.files,
                    function(a, o) { (n._isInstanceOf("File", o) || n._isInstanceOf("Blob", o)) && i.append("array" === e.type(t.paramName) && t.paramName[a] || r, o, o.uploadName || o.name)
                    })), t.data = i) : (t.contentType = a.type || "application/octet-stream", t.data = t.blob || a),
                    t.blob = null
                },
                _initIframeSettings: function(t) {
                    var i = e("<a></a>").prop("href", t.url).prop("host");
                    t.dataType = "iframe " + (t.dataType || ""),
                    t.formData = this._getFormData(t),
                    t.redirect && i && i !== location.host && t.formData.push({
                        name: t.redirectParamName || "redirect",
                        value: t.redirect
                    })
                },
                _initDataSettings: function(e) {
                    this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
                },
                _getParamName: function(t) {
                    var i = e(t.fileInput),
                    n = t.paramName;
                    return n ? e.isArray(n) || (n = [n]) : (n = [], i.each(function() {
                        for (var t = e(this), i = t.prop("name") || "files[]", a = (t.prop("files") || [1]).length; a;) n.push(i),
                        a -= 1
                    }), n.length || (n = [i.prop("name") || "files[]"])),
                    n
                },
                _initFormSettings: function(t) {
                    t.form && t.form.length || (t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")))),
                    t.paramName = this._getParamName(t),
                    t.url || (t.url = t.form.prop("action") || location.href),
                    t.type = (t.type || "string" === e.type(t.form.prop("method")) && t.form.prop("method") || "").toUpperCase(),
                    "POST" !== t.type && "PUT" !== t.type && "PATCH" !== t.type && (t.type = "POST"),
                    t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
                },
                _getAJAXSettings: function(t) {
                    var i = e.extend({},
                    this.options, t);
                    return this._initFormSettings(i),
                    this._initDataSettings(i),
                    i
                },
                _getDeferredState: function(e) {
                    return e.state ? e.state() : e.isResolved() ? "resolved": e.isRejected() ? "rejected": "pending"
                },
                _enhancePromise: function(e) {
                    return e.success = e.done,
                    e.error = e.fail,
                    e.complete = e.always,
                    e
                },
                _getXHRPromise: function(t, i, n) {
                    var a = e.Deferred(),
                    o = a.promise();
                    return i = i || this.options.context || o,
                    t === !0 ? a.resolveWith(i, n) : t === !1 && a.rejectWith(i, n),
                    o.abort = a.promise,
                    this._enhancePromise(o)
                },
                _addConvenienceMethods: function(t, i) {
                    var n = this,
                    a = function(t) {
                        return e.Deferred().resolveWith(n, t).promise()
                    };
                    i.process = function(t, o) {
                        return (t || o) && (i._processQueue = this._processQueue = (this._processQueue || a([this])).then(function() {
                            return i.errorThrown ? e.Deferred().rejectWith(n, [i]).promise() : a(arguments)
                        }).then(t, o)),
                        this._processQueue || a([this])
                    },
                    i.submit = function() {
                        return "pending" !== this.state() && (i.jqXHR = this.jqXHR = n._trigger("submit", e.Event("submit", {
                            delegatedEvent: t
                        }), this) !== !1 && n._onSend(t, this)),
                        this.jqXHR || n._getXHRPromise()
                    },
                    i.abort = function() {
                        return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", n._trigger("fail", null, this), n._getXHRPromise(!1))
                    },
                    i.state = function() {
                        return this.jqXHR ? n._getDeferredState(this.jqXHR) : this._processQueue ? n._getDeferredState(this._processQueue) : void 0
                    },
                    i.processing = function() {
                        return ! this.jqXHR && this._processQueue && "pending" === n._getDeferredState(this._processQueue)
                    },
                    i.progress = function() {
                        return this._progress
                    },
                    i.response = function() {
                        return this._response
                    }
                },
                _getUploadedBytes: function(e) {
                    var t = e.getResponseHeader("Range"),
                    i = t && t.split("-"),
                    n = i && i.length > 1 && parseInt(i[1], 10);
                    return n && n + 1
                },
                _chunkedUpload: function(t, i) {
                    t.uploadedBytes = t.uploadedBytes || 0;
                    var n, a, o = this,
                    r = t.files[0],
                    s = r.size,
                    l = t.uploadedBytes,
                    p = t.maxChunkSize || s,
                    c = this._blobSlice,
                    d = e.Deferred(),
                    h = d.promise();
                    return ! (! (this._isXHRUpload(t) && c && (l || p < s)) || t.data) && ( !! i || (l >= s ? (r.error = t.i18n("uploadedBytes"), this._getXHRPromise(!1, t.context, [null, "error", r.error])) : (a = function() {
                        var i = e.extend({},
                        t),
                        h = i._progress.loaded;
                        i.blob = c.call(r, l, l + p, r.type),
                        i.chunkSize = i.blob.size,
                        i.contentRange = "bytes " + l + "-" + (l + i.chunkSize - 1) + "/" + s,
                        o._initXHRData(i),
                        o._initProgressListener(i),
                        n = (o._trigger("chunksend", null, i) !== !1 && e.ajax(i) || o._getXHRPromise(!1, i.context)).done(function(n, r, p) {
                            l = o._getUploadedBytes(p) || l + i.chunkSize,
                            h + i.chunkSize - i._progress.loaded && o._onProgress(e.Event("progress", {
                                lengthComputable: !0,
                                loaded: l - i.uploadedBytes,
                                total: l - i.uploadedBytes
                            }), i),
                            t.uploadedBytes = i.uploadedBytes = l,
                            i.result = n,
                            i.textStatus = r,
                            i.jqXHR = p,
                            o._trigger("chunkdone", null, i),
                            o._trigger("chunkalways", null, i),
                            l < s ? a() : d.resolveWith(i.context, [n, r, p])
                        }).fail(function(e, t, n) {
                            i.jqXHR = e,
                            i.textStatus = t,
                            i.errorThrown = n,
                            o._trigger("chunkfail", null, i),
                            o._trigger("chunkalways", null, i),
                            d.rejectWith(i.context, [e, t, n])
                        })
                    },
                    this._enhancePromise(h), h.abort = function() {
                        return n.abort()
                    },
                    a(), h)))
                },
                _beforeSend: function(e, t) {
                    0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0),
                    this._initResponseObject(t),
                    this._initProgressObject(t),
                    t._progress.loaded = t.loaded = t.uploadedBytes || 0,
                    t._progress.total = t.total = this._getTotal(t.files) || 1,
                    t._progress.bitrate = t.bitrate = 0,
                    this._active += 1,
                    this._progress.loaded += t.loaded,
                    this._progress.total += t.total
                },
                _onDone: function(t, i, n, a) {
                    var o = a._progress.total,
                    r = a._response;
                    a._progress.loaded < o && this._onProgress(e.Event("progress", {
                        lengthComputable: !0,
                        loaded: o,
                        total: o
                    }), a),
                    r.result = a.result = t,
                    r.textStatus = a.textStatus = i,
                    r.jqXHR = a.jqXHR = n,
                    this._trigger("done", null, a)
                },
                _onFail: function(e, t, i, n) {
                    var a = n._response;
                    n.recalculateProgress && (this._progress.loaded -= n._progress.loaded, this._progress.total -= n._progress.total),
                    a.jqXHR = n.jqXHR = e,
                    a.textStatus = n.textStatus = t,
                    a.errorThrown = n.errorThrown = i,
                    this._trigger("fail", null, n)
                },
                _onAlways: function(e, t, i, n) {
                    this._trigger("always", null, n)
                },
                _onSend: function(t, i) {
                    i.submit || this._addConvenienceMethods(t, i);
                    var n, a, o, r, s = this,
                    l = s._getAJAXSettings(i),
                    p = function() {
                        return s._sending += 1,
                        l._bitrateTimer = new s._BitrateTimer,
                        n = n || ((a || s._trigger("send", e.Event("send", {
                            delegatedEvent: t
                        }), l) === !1) && s._getXHRPromise(!1, l.context, a) || s._chunkedUpload(l) || e.ajax(l)).done(function(e, t, i) {
                            s._onDone(e, t, i, l)
                        }).fail(function(e, t, i) {
                            s._onFail(e, t, i, l)
                        }).always(function(e, t, i) {
                            if (s._onAlways(e, t, i, l), s._sending -= 1, s._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > s._sending) for (var n = s._slots.shift(); n;) {
                                if ("pending" === s._getDeferredState(n)) {
                                    n.resolve();
                                    break
                                }
                                n = s._slots.shift()
                            }
                            0 === s._active && s._trigger("stop")
                        })
                    };
                    return this._beforeSend(t, l),
                    this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (o = e.Deferred(), this._slots.push(o), r = o.then(p)) : (this._sequence = this._sequence.then(p, p), r = this._sequence), r.abort = function() {
                        return a = [void 0, "abort", "abort"],
                        n ? n.abort() : (o && o.rejectWith(l.context, a), p())
                    },
                    this._enhancePromise(r)) : p()
                },
                _onAdd: function(t, i) {
                    var n, a, o, r, s = this,
                    l = !0,
                    p = e.extend({},
                    this.options, i),
                    c = i.files,
                    d = c.length,
                    h = p.limitMultiFileUploads,
                    u = p.limitMultiFileUploadSize,
                    f = p.limitMultiFileUploadSizeOverhead,
                    m = 0,
                    g = this._getParamName(p),
                    v = 0;
                    if (!d) return ! 1;
                    if (u && void 0 === c[0].size && (u = void 0), (p.singleFileUploads || h || u) && this._isXHRUpload(p)) if (p.singleFileUploads || u || !h) if (!p.singleFileUploads && u) for (o = [], n = [], r = 0; r < d; r += 1) m += c[r].size + f,
                    (r + 1 === d || m + c[r + 1].size + f > u || h && r + 1 - v >= h) && (o.push(c.slice(v, r + 1)), a = g.slice(v, r + 1), a.length || (a = g), n.push(a), v = r + 1, m = 0);
                    else n = g;
                    else for (o = [], n = [], r = 0; r < d; r += h) o.push(c.slice(r, r + h)),
                    a = g.slice(r, r + h),
                    a.length || (a = g),
                    n.push(a);
                    else o = [c],
                    n = [g];
                    return i.originalFiles = c,
                    e.each(o || c,
                    function(a, r) {
                        var p = e.extend({},
                        i);
                        return p.files = o ? r: [r],
                        p.paramName = n[a],
                        s._initResponseObject(p),
                        s._initProgressObject(p),
                        s._addConvenienceMethods(t, p),
                        l = s._trigger("add", e.Event("add", {
                            delegatedEvent: t
                        }), p)
                    }),
                    l
                },
                _replaceFileInput: function(t) {
                    var i = t.fileInput,
                    n = i.clone(!0),
                    a = i.is(document.activeElement);
                    t.fileInputClone = n,
                    e("<form></form>").append(n)[0].reset(),
                    i.after(n).detach(),
                    a && n.focus(),
                    e.cleanData(i.unbind("remove")),
                    this.options.fileInput = this.options.fileInput.map(function(e, t) {
                        return t === i[0] ? n[0] : t
                    }),
                    i[0] === this.element[0] && (this.element = n)
                },
                _handleFileTreeEntry: function(t, i) {
                    var n, a = this,
                    o = e.Deferred(),
                    r = [],
                    s = function(e) {
                        e && !e.entry && (e.entry = t),
                        o.resolve([e])
                    },
                    l = function(e) {
                        a._handleFileTreeEntries(e, i + t.name + "/").done(function(e) {
                            o.resolve(e)
                        }).fail(s)
                    },
                    p = function() {
                        n.readEntries(function(e) {
                            e.length ? (r = r.concat(e), p()) : l(r)
                        },
                        s)
                    };
                    return i = i || "",
                    t.isFile ? t._file ? (t._file.relativePath = i, o.resolve(t._file)) : t.file(function(e) {
                        e.relativePath = i,
                        o.resolve(e)
                    },
                    s) : t.isDirectory ? (n = t.createReader(), p()) : o.resolve([]),
                    o.promise()
                },
                _handleFileTreeEntries: function(t, i) {
                    var n = this;
                    return e.when.apply(e, e.map(t,
                    function(e) {
                        return n._handleFileTreeEntry(e, i)
                    })).then(function() {
                        return Array.prototype.concat.apply([], arguments)
                    })
                },
                _getDroppedFiles: function(t) {
                    t = t || {};
                    var i = t.items;
                    return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(e.map(i,
                    function(e) {
                        var t;
                        return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(), t && (t._file = e.getAsFile()), t) : e.getAsEntry()
                    })) : e.Deferred().resolve(e.makeArray(t.files)).promise()
                },
                _getSingleFileInputFiles: function(t) {
                    t = e(t);
                    var i, n, a = t.prop("webkitEntries") || t.prop("entries");
                    if (a && a.length) return this._handleFileTreeEntries(a);
                    if (i = e.makeArray(t.prop("files")), i.length) void 0 === i[0].name && i[0].fileName && e.each(i,
                    function(e, t) {
                        t.name = t.fileName,
                        t.size = t.fileSize
                    });
                    else {
                        if (n = t.prop("value"), !n) return e.Deferred().resolve([]).promise();
                        i = [{
                            name: n.replace(/^.*\\/, "")
                        }]
                    }
                    return e.Deferred().resolve(i).promise()
                },
                _getFileInputFiles: function(t) {
                    return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).then(function() {
                        return Array.prototype.concat.apply([], arguments)
                    }) : this._getSingleFileInputFiles(t)
                },
                _onChange: function(t) {
                    var i = this,
                    n = {
                        fileInput: e(t.target),
                        form: e(t.target.form)
                    };
                    this._getFileInputFiles(n.fileInput).always(function(a) {
                        n.files = a,
                        i.options.replaceFileInput && i._replaceFileInput(n),
                        i._trigger("change", e.Event("change", {
                            delegatedEvent: t
                        }), n) !== !1 && i._onAdd(t, n)
                    })
                },
                _onPaste: function(t) {
                    var i = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items,
                    n = {
                        files: []
                    };
                    i && i.length && (e.each(i,
                    function(e, t) {
                        var i = t.getAsFile && t.getAsFile();
                        i && n.files.push(i)
                    }), this._trigger("paste", e.Event("paste", {
                        delegatedEvent: t
                    }), n) !== !1 && this._onAdd(t, n))
                },
                _onDrop: function(t) {
                    t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
                    var i = this,
                    n = t.dataTransfer,
                    a = {};
                    n && n.files && n.files.length && (t.preventDefault(), this._getDroppedFiles(n).always(function(n) {
                        a.files = n,
                        i._trigger("drop", e.Event("drop", {
                            delegatedEvent: t
                        }), a) !== !1 && i._onAdd(t, a)
                    }))
                },
                _onDragOver: t("dragover"),
                _onDragEnter: t("dragenter"),
                _onDragLeave: t("dragleave"),
                _initEventHandlers: function() {
                    this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                        dragover: this._onDragOver,
                        drop: this._onDrop,
                        dragenter: this._onDragEnter,
                        dragleave: this._onDragLeave
                    }), this._on(this.options.pasteZone, {
                        paste: this._onPaste
                    })),
                    e.support.fileInput && this._on(this.options.fileInput, {
                        change: this._onChange
                    })
                },
                _destroyEventHandlers: function() {
                    this._off(this.options.dropZone, "dragenter dragleave dragover drop"),
                    this._off(this.options.pasteZone, "paste"),
                    this._off(this.options.fileInput, "change")
                },
                _destroy: function() {
                    this._destroyEventHandlers()
                },
                _setOption: function(t, i) {
                    var n = e.inArray(t, this._specialOptions) !== -1;
                    n && this._destroyEventHandlers(),
                    this._super(t, i),
                    n && (this._initSpecialOptions(), this._initEventHandlers())
                },
                _initSpecialOptions: function() {
                    var t = this.options;
                    void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element: this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)),
                    t.dropZone instanceof e || (t.dropZone = e(t.dropZone)),
                    t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
                },
                _getRegExp: function(e) {
                    var t = e.split("/"),
                    i = t.pop();
                    return t.shift(),
                    new RegExp(t.join("/"), i)
                },
                _isRegExpOption: function(t, i) {
                    return "url" !== t && "string" === e.type(i) && /^\/.*\/[igm]{0,3}$/.test(i)
                },
                _initDataAttributes: function() {
                    var t = this,
                    i = this.options,
                    n = this.element.data();
                    e.each(this.element[0].attributes,
                    function(e, a) {
                        var o, r = a.name.toLowerCase();
                        /^data-/.test(r) && (r = r.slice(5).replace(/-[a-z]/g,
                        function(e) {
                            return e.charAt(1).toUpperCase()
                        }), o = n[r], t._isRegExpOption(r, o) && (o = t._getRegExp(o)), i[r] = o)
                    })
                },
                _create: function() {
                    this._initDataAttributes(),
                    this._initSpecialOptions(),
                    this._slots = [],
                    this._sequence = this._getXHRPromise(!0),
                    this._sending = this._active = 0,
                    this._initProgressObject(this),
                    this._initEventHandlers()
                },
                active: function() {
                    return this._active
                },
                progress: function() {
                    return this._progress
                },
                add: function(t) {
                    var i = this;
                    t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(e) {
                        t.files = e,
                        i._onAdd(null, t)
                    }) : (t.files = e.makeArray(t.files), this._onAdd(null, t)))
                },
                send: function(t) {
                    if (t && !this.options.disabled) {
                        if (t.fileInput && !t.files) {
                            var i, n, a = this,
                            o = e.Deferred(),
                            r = o.promise();
                            return r.abort = function() {
                                return n = !0,
                                i ? i.abort() : (o.reject(null, "abort", "abort"), r)
                            },
                            this._getFileInputFiles(t.fileInput).always(function(e) {
                                if (!n) {
                                    if (!e.length) return void o.reject();
                                    t.files = e,
                                    i = a._onSend(null, t),
                                    i.then(function(e, t, i) {
                                        o.resolve(e, t, i)
                                    },
                                    function(e, t, i) {
                                        o.reject(e, t, i)
                                    })
                                }
                            }),
                            this._enhancePromise(r)
                        }
                        if (t.files = e.makeArray(t.files), t.files.length) return this._onSend(null, t)
                    }
                    return this._getXHRPromise(!1, t && t.context)
                }
            })
        })
    },
    1472 : function(e, t, i) {
        var n, a, o; !
        function(r) {
            "use strict";
            a = [i(1177), i(1471)],
            n = r,
            o = "function" == typeof n ? n.apply(t, a) : n,
            !(void 0 !== o && (e.exports = o))
        } (function(e) {
            "use strict";
            var t = e.blueimp.fileupload.prototype.options.add;
            e.widget("blueimp.fileupload", e.blueimp.fileupload, {
                options: {
                    processQueue: [],
                    add: function(i, n) {
                        var a = e(this);
                        n.process(function() {
                            return a.fileupload("process", n)
                        }),
                        t.call(this, i, n)
                    }
                },
                processActions: {},
                _processFile: function(t, i) {
                    var n = this,
                    a = e.Deferred().resolveWith(n, [t]),
                    o = a.promise();
                    return this._trigger("process", null, t),
                    e.each(t.processQueue,
                    function(t, a) {
                        var r = function(t) {
                            return i.errorThrown ? e.Deferred().rejectWith(n, [i]).promise() : n.processActions[a.action].call(n, t, a)
                        };
                        o = o.then(r, a.always && r)
                    }),
                    o.done(function() {
                        n._trigger("processdone", null, t),
                        n._trigger("processalways", null, t)
                    }).fail(function() {
                        n._trigger("processfail", null, t),
                        n._trigger("processalways", null, t)
                    }),
                    o
                },
                _transformProcessQueue: function(t) {
                    var i = [];
                    e.each(t.processQueue,
                    function() {
                        var n = {},
                        a = this.action,
                        o = this.prefix === !0 ? a: this.prefix;
                        e.each(this,
                        function(i, a) {
                            "string" === e.type(a) && "@" === a.charAt(0) ? n[i] = t[a.slice(1) || (o ? o + i.charAt(0).toUpperCase() + i.slice(1) : i)] : n[i] = a
                        }),
                        i.push(n)
                    }),
                    t.processQueue = i
                },
                processing: function() {
                    return this._processing
                },
                process: function(t) {
                    var i = this,
                    n = e.extend({},
                    this.options, t);
                    return n.processQueue && n.processQueue.length && (this._transformProcessQueue(n), 0 === this._processing && this._trigger("processstart"), e.each(t.files,
                    function(a) {
                        var o = a ? e.extend({},
                        n) : n,
                        r = function() {
                            return t.errorThrown ? e.Deferred().rejectWith(i, [t]).promise() : i._processFile(o, t)
                        };
                        o.index = a,
                        i._processing += 1,
                        i._processingQueue = i._processingQueue.then(r, r).always(function() {
                            i._processing -= 1,
                            0 === i._processing && i._trigger("processstop")
                        })
                    })),
                    this._processingQueue
                },
                _create: function() {
                    this._super(),
                    this._processing = 0,
                    this._processingQueue = e.Deferred().resolveWith(this).promise()
                }
            })
        })
    },
    1473 : function(e, t, i) {
        var n, a, o; !
        function(r) {
            "use strict";
            a = [i(1177), i(1472)],
            n = r,
            o = "function" == typeof n ? n.apply(t, a) : n,
            !(void 0 !== o && (e.exports = o))
        } (function(e) {
            "use strict";
            e.blueimp.fileupload.prototype.options.processQueue.push({
                action: "validate",
                always: !0,
                acceptFileTypes: "@",
                maxFileSize: "@",
                minFileSize: "@",
                maxNumberOfFiles: "@",
                disabled: "@disableValidation"
            }),
            e.widget("blueimp.fileupload", e.blueimp.fileupload, {
                options: {
                    getNumberOfFiles: e.noop,
                    messages: {
                        maxNumberOfFiles: "Maximum number of files exceeded",
                        acceptFileTypes: "File type not allowed",
                        maxFileSize: "File is too large",
                        minFileSize: "File is too small"
                    }
                },
                processActions: {
                    validate: function(t, i) {
                        if (i.disabled) return t;
                        var n, a = e.Deferred(),
                        o = this.options,
                        r = t.files[t.index];
                        return (i.minFileSize || i.maxFileSize) && (n = r.size),
                        "number" === e.type(i.maxNumberOfFiles) && (o.getNumberOfFiles() || 0) + t.files.length > i.maxNumberOfFiles ? r.error = o.i18n("maxNumberOfFiles") : !i.acceptFileTypes || i.acceptFileTypes.test(r.type) || i.acceptFileTypes.test(r.name) ? n > i.maxFileSize ? r.error = o.i18n("maxFileSize") : "number" === e.type(n) && n < i.minFileSize ? r.error = o.i18n("minFileSize") : delete r.error: r.error = o.i18n("acceptFileTypes"),
                        r.error || t.files.error ? (t.files.error = !0, a.rejectWith(this, [t])) : a.resolveWith(this, [t]),
                        a.promise()
                    }
                }
            })
        })
    },
    1474 : 1283
});