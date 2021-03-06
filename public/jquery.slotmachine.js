/*
 * jQuery Slot Machine v4.0.0
 * https://github.com/josex2r/jQuery-SlotMachineundefined
 *
 * Copyright 2014 Jose Luis Represa
 * Released under the MIT license
 */
! function i(u, a, f) {
    function c(r, t) {
        if (!a[r]) {
            if (!u[r]) {
                var e = "function" == typeof require && require;
                if (!t && e) return e(r, !0);
                if (l) return l(r, !0);
                var n = new Error("Cannot find module '" + r + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            var o = a[r] = {
                exports: {}
            };
            u[r][0].call(o.exports, function (t) {
                var e = u[r][1][t];
                return c(e || t)
            }, o, o.exports, i, u, a, f)
        }
        return a[r].exports
    }
    for (var l = "function" == typeof require && require, t = 0; t < f.length; t++) c(f[t]);
    return c
}({
    1: [function (t, e, r) {
        "use strict";
        var n = function () {
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t
            }
        }();
        var o = "slotMachine",
            i = function (t) {
                function e() {
                    return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        function (t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, SlotMachine), n(e, [{
                    key: "destroy",
                    value: function () {
                        (function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var u = o.get;
                            return void 0 !== u ? u.call(n) : void 0
                        })(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this), $.data(this.element[0], "plugin_" + o, null)
                    }
                }]), e
            }();

        function u(t, e) {
            var r = void 0;
            return $.data(t[0], "plugin_" + o) ? r = $.data(t[0], "plugin_" + o) : (r = new i(t[0], e), $.data(t[0], "plugin_" + o, r)), r
        }
        $.fn[o] = function (r) {
            var t = void 0;
            if (1 === this.length) t = u(this, r);
            else {
                var n = this;
                t = $.map(n, function (t, e) {
                    return u(n.eq(e)[0], r)
                })
            }
            return t
        }
    }, {}]
}, {}, [1]);