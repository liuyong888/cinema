webpackJsonp([19], {
    0 : function(e, n, t) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function o() { (0, u.checkLogin)(function() {
                $.ajax({
                    method: "GET",
                    url: "/ajax/orderDetail/" + k,
                    cache: !1,
                    success: function(e) {
                        e.order.fixStatus && (clearInterval(v), location.reload(!0))
                    }
                })
            })()
        }
        function i(e) {
            m.find(".tip").text(e),
            m.show()
        }
        function c() {
            if (p > 0) {
                var e = Math.floor(p / 60),
                n = p % 60;
                d.text(e),
                l.text(n),
                p--
            } else clearInterval(v),
            i("支付超时，该订单已失效，请重新购买")
        }
        var r = t(1452),
        s = a(r),
        u = t(1176),
        d = $(".desc .minute"),
        l = $(".desc .second"),
        f = $(".order-container"),
        m = $(".modal-container"),
        p = +$(".desc").data("leftPaySecond"),
        v = void 0,
        y = +f.data("uniqueStatus"),
        k = f.data("orderId");
        m.on("click", ".ok-btn",
        function() {
            var e = window.system.cinema.id,
            n = window.system.cinema.poiId;
            location.href = "/cinema/" + e + "?poi=" + n
        }),
        p >= 0 && (c(), v = setInterval(c, 1e3)),
        6 !== y && 0 !== y || (v = setInterval(o, 2e3)),
        $(".pay-btn").on("click",
        function() { (0, s.
        default)(k, i)
        }),
        t(1457)
    },
    1452 : function(e, n) {
        "use strict";
        function t(e, n) {
            var t = location.origin + "/order/result/" + e;
            $.post({
                url: "/ajax/submitpay",
                data: {
                    orderId: e,
                    channelId: 2,
                    clientType: "ios",
                    priceType: 0,
                    mobile: system.mobilePhone,
                    couponList: [],
                    callbackUrl: t
                },
                success: function(e) {
                    if (e) {
                        if (e.message) return n(e.message);
                        var a = $(document.forms.cashierForm);
                        a.find("input[name=token]").val(system.user.token),
                        a.find("input[name=tradeno]").val(e.tradeNo),
                        a.find("input[name=pay_token]").val(e.payToken),
                        a.find("input[name=pay_success_url]").val(t),
                        a.submit()
                    }
                }
            })
        }
        n.__esModule = !0,
        n.
    default = t
    },
    1457 : 1283
});