"use strict";

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * easymde v2.9.0
 * Copyright Jeroen Akkerman
 * @link https://github.com/ionaru/easy-markdown-editor
 * @license MIT
 */
!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EasyMDE = e();
  }
}(function () {
  return function e(t, n, r) {
    function i(a, s) {
      if (!n[a]) {
        if (!t[a]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(a, !0);
          if (o) return o(a, !0);
          var u = new Error("Cannot find module '" + a + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var c = n[a] = {
          exports: {}
        };
        t[a][0].call(c.exports, function (e) {
          return i(t[a][1][e] || e);
        }, c, c.exports, e, t, n, r);
      }

      return n[a].exports;
    }

    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) {
      i(r[a]);
    }

    return i;
  }({
    1: [function (e, t, n) {
      "use strict";

      n.byteLength = function (e) {
        var t = u(e),
            n = t[0],
            r = t[1];
        return 3 * (n + r) / 4 - r;
      }, n.toByteArray = function (e) {
        var t,
            n,
            r = u(e),
            a = r[0],
            s = r[1],
            l = new o(function (e, t, n) {
          return 3 * (t + n) / 4 - n;
        }(0, a, s)),
            c = 0,
            h = s > 0 ? a - 4 : a;

        for (n = 0; n < h; n += 4) {
          t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
        }

        2 === s && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, l[c++] = 255 & t);
        1 === s && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t);
        return l;
      }, n.fromByteArray = function (e) {
        for (var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i; a < s; a += 16383) {
          o.push(c(e, a, a + 16383 > s ? s : a + 16383));
        }

        1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
        return o.join("");
      };

      for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s) {
        r[s] = a[s], i[a.charCodeAt(s)] = s;
      }

      function u(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
      }

      function c(e, t, n) {
        for (var i, o, a = [], s = t; s < n; s += 3) {
          i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
        }

        return a.join("");
      }

      i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
    }, {}],
    2: [function (e, t, n) {}, {}],
    3: [function (e, t, n) {
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        "use strict";

        var r = e("base64-js"),
            i = e("ieee754"),
            o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        n.Buffer = t, n.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return t.alloc(+e);
        }, n.INSPECT_MAX_BYTES = 50;
        var a = 2147483647;

        function s(e) {
          if (e > a) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          var n = new Uint8Array(e);
          return Object.setPrototypeOf(n, t.prototype), n;
        }

        function t(e, t, n) {
          if ("number" == typeof e) {
            if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
            return c(e);
          }

          return l(e, t, n);
        }

        function l(e, n, r) {
          if ("string" == typeof e) return function (e, n) {
            "string" == typeof n && "" !== n || (n = "utf8");
            if (!t.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
            var r = 0 | d(e, n),
                i = s(r),
                o = i.write(e, n);
            o !== r && (i = i.slice(0, o));
            return i;
          }(e, n);
          if (ArrayBuffer.isView(e)) return h(e);
          if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
          if (j(e, ArrayBuffer) || e && j(e.buffer, ArrayBuffer)) return function (e, n, r) {
            if (n < 0 || e.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < n + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
            var i;
            i = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
            return Object.setPrototypeOf(i, t.prototype), i;
          }(e, n, r);
          if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
          var i = e.valueOf && e.valueOf();
          if (null != i && i !== e) return t.from(i, n, r);

          var o = function (e) {
            if (t.isBuffer(e)) {
              var n = 0 | f(e.length),
                  r = s(n);
              return 0 === r.length ? r : (e.copy(r, 0, 0, n), r);
            }

            if (void 0 !== e.length) return "number" != typeof e.length || _(e.length) ? s(0) : h(e);
            if ("Buffer" === e.type && Array.isArray(e.data)) return h(e.data);
          }(e);

          if (o) return o;
          if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return t.from(e[Symbol.toPrimitive]("string"), n, r);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
        }

        function u(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
          if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        }

        function c(e) {
          return u(e), s(e < 0 ? 0 : 0 | f(e));
        }

        function h(e) {
          for (var t = e.length < 0 ? 0 : 0 | f(e.length), n = s(t), r = 0; r < t; r += 1) {
            n[r] = 255 & e[r];
          }

          return n;
        }

        function f(e) {
          if (e >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
          return 0 | e;
        }

        function d(e, n) {
          if (t.isBuffer(e)) return e.length;
          if (ArrayBuffer.isView(e) || j(e, ArrayBuffer)) return e.byteLength;
          if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + _typeof(e));
          var r = e.length,
              i = arguments.length > 2 && !0 === arguments[2];
          if (!i && 0 === r) return 0;

          for (var o = !1;;) {
            switch (n) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;

              case "utf8":
              case "utf-8":
                return z(e).length;

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;

              case "hex":
                return r >>> 1;

              case "base64":
                return P(e).length;

              default:
                if (o) return i ? -1 : z(e).length;
                n = ("" + n).toLowerCase(), o = !0;
            }
          }
        }

        function p(e, t, n) {
          var r = !1;
          if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
          if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
          if ((n >>>= 0) <= (t >>>= 0)) return "";

          for (e || (e = "utf8");;) {
            switch (e) {
              case "hex":
                return E(this, t, n);

              case "utf8":
              case "utf-8":
                return L(this, t, n);

              case "ascii":
                return M(this, t, n);

              case "latin1":
              case "binary":
                return A(this, t, n);

              case "base64":
                return S(this, t, n);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return N(this, t, n);

              default:
                if (r) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), r = !0;
            }
          }
        }

        function m(e, t, n) {
          var r = e[t];
          e[t] = e[n], e[n] = r;
        }

        function g(e, n, r, i, o) {
          if (0 === e.length) return -1;

          if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), _(r = +r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
            if (o) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!o) return -1;
            r = 0;
          }

          if ("string" == typeof n && (n = t.from(n, i)), t.isBuffer(n)) return 0 === n.length ? -1 : v(e, n, r, i, o);
          if ("number" == typeof n) return n &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, n, r) : Uint8Array.prototype.lastIndexOf.call(e, n, r) : v(e, [n], r, i, o);
          throw new TypeError("val must be string, number or Buffer");
        }

        function v(e, t, n, r, i) {
          var o,
              a = 1,
              s = e.length,
              l = t.length;

          if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (e.length < 2 || t.length < 2) return -1;
            a = 2, s /= 2, l /= 2, n /= 2;
          }

          function u(e, t) {
            return 1 === a ? e[t] : e.readUInt16BE(t * a);
          }

          if (i) {
            var c = -1;

            for (o = n; o < s; o++) {
              if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
                if (-1 === c && (c = o), o - c + 1 === l) return c * a;
              } else -1 !== c && (o -= o - c), c = -1;
            }
          } else for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
            for (var h = !0, f = 0; f < l; f++) {
              if (u(e, o + f) !== u(t, f)) {
                h = !1;
                break;
              }
            }

            if (h) return o;
          }

          return -1;
        }

        function y(e, t, n, r) {
          n = Number(n) || 0;
          var i = e.length - n;
          r ? (r = Number(r)) > i && (r = i) : r = i;
          var o = t.length;
          r > o / 2 && (r = o / 2);

          for (var a = 0; a < r; ++a) {
            var s = parseInt(t.substr(2 * a, 2), 16);
            if (_(s)) return a;
            e[n + a] = s;
          }

          return a;
        }

        function x(e, t, n, r) {
          return H(z(t, e.length - n), e, n, r);
        }

        function b(e, t, n, r) {
          return H(function (e) {
            for (var t = [], n = 0; n < e.length; ++n) {
              t.push(255 & e.charCodeAt(n));
            }

            return t;
          }(t), e, n, r);
        }

        function w(e, t, n, r) {
          return b(e, t, n, r);
        }

        function k(e, t, n, r) {
          return H(P(t), e, n, r);
        }

        function C(e, t, n, r) {
          return H(function (e, t) {
            for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
              n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
            }

            return o;
          }(t, e.length - n), e, n, r);
        }

        function S(e, t, n) {
          return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
        }

        function L(e, t, n) {
          n = Math.min(e.length, n);

          for (var r = [], i = t; i < n;) {
            var o,
                a,
                s,
                l,
                u = e[i],
                c = null,
                h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
            if (i + h <= n) switch (h) {
              case 1:
                u < 128 && (c = u);
                break;

              case 2:
                128 == (192 & (o = e[i + 1])) && (l = (31 & u) << 6 | 63 & o) > 127 && (c = l);
                break;

              case 3:
                o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (c = l);
                break;

              case 4:
                o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (c = l);
            }
            null === c ? (c = 65533, h = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), i += h;
          }

          return function (e) {
            var t = e.length;
            if (t <= T) return String.fromCharCode.apply(String, e);
            var n = "",
                r = 0;

            for (; r < t;) {
              n += String.fromCharCode.apply(String, e.slice(r, r += T));
            }

            return n;
          }(r);
        }

        n.kMaxLength = a, t.TYPED_ARRAY_SUPPORT = function () {
          try {
            var e = new Uint8Array(1),
                t = {
              foo: function foo() {
                return 42;
              }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
          } catch (e) {
            return !1;
          }
        }(), t.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(t.prototype, "parent", {
          enumerable: !0,
          get: function get() {
            if (t.isBuffer(this)) return this.buffer;
          }
        }), Object.defineProperty(t.prototype, "offset", {
          enumerable: !0,
          get: function get() {
            if (t.isBuffer(this)) return this.byteOffset;
          }
        }), "undefined" != typeof Symbol && null != Symbol.species && t[Symbol.species] === t && Object.defineProperty(t, Symbol.species, {
          value: null,
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), t.poolSize = 8192, t.from = function (e, t, n) {
          return l(e, t, n);
        }, Object.setPrototypeOf(t.prototype, Uint8Array.prototype), Object.setPrototypeOf(t, Uint8Array), t.alloc = function (e, t, n) {
          return function (e, t, n) {
            return u(e), e <= 0 ? s(e) : void 0 !== t ? "string" == typeof n ? s(e).fill(t, n) : s(e).fill(t) : s(e);
          }(e, t, n);
        }, t.allocUnsafe = function (e) {
          return c(e);
        }, t.allocUnsafeSlow = function (e) {
          return c(e);
        }, t.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== t.prototype;
        }, t.compare = function (e, n) {
          if (j(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)), j(n, Uint8Array) && (n = t.from(n, n.offset, n.byteLength)), !t.isBuffer(e) || !t.isBuffer(n)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (e === n) return 0;

          for (var r = e.length, i = n.length, o = 0, a = Math.min(r, i); o < a; ++o) {
            if (e[o] !== n[o]) {
              r = e[o], i = n[o];
              break;
            }
          }

          return r < i ? -1 : i < r ? 1 : 0;
        }, t.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;

            default:
              return !1;
          }
        }, t.concat = function (e, n) {
          if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return t.alloc(0);
          var r;
          if (void 0 === n) for (n = 0, r = 0; r < e.length; ++r) {
            n += e[r].length;
          }
          var i = t.allocUnsafe(n),
              o = 0;

          for (r = 0; r < e.length; ++r) {
            var a = e[r];
            if (j(a, Uint8Array) && (a = t.from(a)), !t.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
            a.copy(i, o), o += a.length;
          }

          return i;
        }, t.byteLength = d, t.prototype._isBuffer = !0, t.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

          for (var t = 0; t < e; t += 2) {
            m(this, t, t + 1);
          }

          return this;
        }, t.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

          for (var t = 0; t < e; t += 4) {
            m(this, t, t + 3), m(this, t + 1, t + 2);
          }

          return this;
        }, t.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

          for (var t = 0; t < e; t += 8) {
            m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
          }

          return this;
        }, t.prototype.toString = function () {
          var e = this.length;
          return 0 === e ? "" : 0 === arguments.length ? L(this, 0, e) : p.apply(this, arguments);
        }, t.prototype.toLocaleString = t.prototype.toString, t.prototype.equals = function (e) {
          if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === t.compare(this, e);
        }, t.prototype.inspect = function () {
          var e = "",
              t = n.INSPECT_MAX_BYTES;
          return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
        }, o && (t.prototype[o] = t.prototype.inspect), t.prototype.compare = function (e, n, r, i, o) {
          if (j(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)), !t.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(e));
          if (void 0 === n && (n = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), n < 0 || r > e.length || i < 0 || o > this.length) throw new RangeError("out of range index");
          if (i >= o && n >= r) return 0;
          if (i >= o) return -1;
          if (n >= r) return 1;
          if (this === e) return 0;

          for (var a = (o >>>= 0) - (i >>>= 0), s = (r >>>= 0) - (n >>>= 0), l = Math.min(a, s), u = this.slice(i, o), c = e.slice(n, r), h = 0; h < l; ++h) {
            if (u[h] !== c[h]) {
              a = u[h], s = c[h];
              break;
            }
          }

          return a < s ? -1 : s < a ? 1 : 0;
        }, t.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }, t.prototype.indexOf = function (e, t, n) {
          return g(this, e, t, n, !0);
        }, t.prototype.lastIndexOf = function (e, t, n) {
          return g(this, e, t, n, !1);
        }, t.prototype.write = function (e, t, n, r) {
          if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
          }
          var i = this.length - t;
          if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");

          for (var o = !1;;) {
            switch (r) {
              case "hex":
                return y(this, e, t, n);

              case "utf8":
              case "utf-8":
                return x(this, e, t, n);

              case "ascii":
                return b(this, e, t, n);

              case "latin1":
              case "binary":
                return w(this, e, t, n);

              case "base64":
                return k(this, e, t, n);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return C(this, e, t, n);

              default:
                if (o) throw new TypeError("Unknown encoding: " + r);
                r = ("" + r).toLowerCase(), o = !0;
            }
          }
        }, t.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        var T = 4096;

        function M(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);

          for (var i = t; i < n; ++i) {
            r += String.fromCharCode(127 & e[i]);
          }

          return r;
        }

        function A(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);

          for (var i = t; i < n; ++i) {
            r += String.fromCharCode(e[i]);
          }

          return r;
        }

        function E(e, t, n) {
          var r = e.length;
          (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);

          for (var i = "", o = t; o < n; ++o) {
            i += W[e[o]];
          }

          return i;
        }

        function N(e, t, n) {
          for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) {
            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          }

          return i;
        }

        function D(e, t, n) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
        }

        function F(e, n, r, i, o, a) {
          if (!t.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (n > o || n < a) throw new RangeError('"value" argument is out of bounds');
          if (r + i > e.length) throw new RangeError("Index out of range");
        }

        function O(e, t, n, r, i, o) {
          if (n + r > e.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }

        function I(e, t, n, r, o) {
          return t = +t, n >>>= 0, o || O(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
        }

        function B(e, t, n, r, o) {
          return t = +t, n >>>= 0, o || O(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
        }

        t.prototype.slice = function (e, n) {
          var r = this.length;
          (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < e && (n = e);
          var i = this.subarray(e, n);
          return Object.setPrototypeOf(i, t.prototype), i;
        }, t.prototype.readUIntLE = function (e, t, n) {
          e >>>= 0, t >>>= 0, n || D(e, t, this.length);

          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
            r += this[e + o] * i;
          }

          return r;
        }, t.prototype.readUIntBE = function (e, t, n) {
          e >>>= 0, t >>>= 0, n || D(e, t, this.length);

          for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) {
            r += this[e + --t] * i;
          }

          return r;
        }, t.prototype.readUInt8 = function (e, t) {
          return e >>>= 0, t || D(e, 1, this.length), this[e];
        }, t.prototype.readUInt16LE = function (e, t) {
          return e >>>= 0, t || D(e, 2, this.length), this[e] | this[e + 1] << 8;
        }, t.prototype.readUInt16BE = function (e, t) {
          return e >>>= 0, t || D(e, 2, this.length), this[e] << 8 | this[e + 1];
        }, t.prototype.readUInt32LE = function (e, t) {
          return e >>>= 0, t || D(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
        }, t.prototype.readUInt32BE = function (e, t) {
          return e >>>= 0, t || D(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
        }, t.prototype.readIntLE = function (e, t, n) {
          e >>>= 0, t >>>= 0, n || D(e, t, this.length);

          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
            r += this[e + o] * i;
          }

          return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }, t.prototype.readIntBE = function (e, t, n) {
          e >>>= 0, t >>>= 0, n || D(e, t, this.length);

          for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) {
            o += this[e + --r] * i;
          }

          return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }, t.prototype.readInt8 = function (e, t) {
          return e >>>= 0, t || D(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
        }, t.prototype.readInt16LE = function (e, t) {
          e >>>= 0, t || D(e, 2, this.length);
          var n = this[e] | this[e + 1] << 8;
          return 32768 & n ? 4294901760 | n : n;
        }, t.prototype.readInt16BE = function (e, t) {
          e >>>= 0, t || D(e, 2, this.length);
          var n = this[e + 1] | this[e] << 8;
          return 32768 & n ? 4294901760 | n : n;
        }, t.prototype.readInt32LE = function (e, t) {
          return e >>>= 0, t || D(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
        }, t.prototype.readInt32BE = function (e, t) {
          return e >>>= 0, t || D(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
        }, t.prototype.readFloatLE = function (e, t) {
          return e >>>= 0, t || D(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }, t.prototype.readFloatBE = function (e, t) {
          return e >>>= 0, t || D(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }, t.prototype.readDoubleLE = function (e, t) {
          return e >>>= 0, t || D(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }, t.prototype.readDoubleBE = function (e, t) {
          return e >>>= 0, t || D(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }, t.prototype.writeUIntLE = function (e, t, n, r) {
          (e = +e, t >>>= 0, n >>>= 0, r) || F(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = 1,
              o = 0;

          for (this[t] = 255 & e; ++o < n && (i *= 256);) {
            this[t + o] = e / i & 255;
          }

          return t + n;
        }, t.prototype.writeUIntBE = function (e, t, n, r) {
          (e = +e, t >>>= 0, n >>>= 0, r) || F(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = n - 1,
              o = 1;

          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) {
            this[t + i] = e / o & 255;
          }

          return t + n;
        }, t.prototype.writeUInt8 = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
        }, t.prototype.writeUInt16LE = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
        }, t.prototype.writeUInt16BE = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
        }, t.prototype.writeUInt32LE = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
        }, t.prototype.writeUInt32BE = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
        }, t.prototype.writeIntLE = function (e, t, n, r) {
          if (e = +e, t >>>= 0, !r) {
            var i = Math.pow(2, 8 * n - 1);
            F(this, e, t, n, i - 1, -i);
          }

          var o = 0,
              a = 1,
              s = 0;

          for (this[t] = 255 & e; ++o < n && (a *= 256);) {
            e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
          }

          return t + n;
        }, t.prototype.writeIntBE = function (e, t, n, r) {
          if (e = +e, t >>>= 0, !r) {
            var i = Math.pow(2, 8 * n - 1);
            F(this, e, t, n, i - 1, -i);
          }

          var o = n - 1,
              a = 1,
              s = 0;

          for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
            e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
          }

          return t + n;
        }, t.prototype.writeInt8 = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
        }, t.prototype.writeInt16LE = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
        }, t.prototype.writeInt16BE = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
        }, t.prototype.writeInt32LE = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
        }, t.prototype.writeInt32BE = function (e, t, n) {
          return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
        }, t.prototype.writeFloatLE = function (e, t, n) {
          return I(this, e, t, !0, n);
        }, t.prototype.writeFloatBE = function (e, t, n) {
          return I(this, e, t, !1, n);
        }, t.prototype.writeDoubleLE = function (e, t, n) {
          return B(this, e, t, !0, n);
        }, t.prototype.writeDoubleBE = function (e, t, n) {
          return B(this, e, t, !1, n);
        }, t.prototype.copy = function (e, n, r, i) {
          if (!t.isBuffer(e)) throw new TypeError("argument should be a Buffer");
          if (r || (r = 0), i || 0 === i || (i = this.length), n >= e.length && (n = e.length), n || (n = 0), i > 0 && i < r && (i = r), i === r) return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (n < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
          if (i < 0) throw new RangeError("sourceEnd out of bounds");
          i > this.length && (i = this.length), e.length - n < i - r && (i = e.length - n + r);
          var o = i - r;
          if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(n, r, i);else if (this === e && r < n && n < i) for (var a = o - 1; a >= 0; --a) {
            e[a + n] = this[a + r];
          } else Uint8Array.prototype.set.call(e, this.subarray(r, i), n);
          return o;
        }, t.prototype.fill = function (e, n, r, i) {
          if ("string" == typeof e) {
            if ("string" == typeof n ? (i = n, n = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !t.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);

            if (1 === e.length) {
              var o = e.charCodeAt(0);
              ("utf8" === i && o < 128 || "latin1" === i) && (e = o);
            }
          } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));

          if (n < 0 || this.length < n || this.length < r) throw new RangeError("Out of range index");
          if (r <= n) return this;
          var a;
          if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (a = n; a < r; ++a) {
            this[a] = e;
          } else {
            var s = t.isBuffer(e) ? e : t.from(e, i),
                l = s.length;
            if (0 === l) throw new TypeError('The value "' + e + '" is invalid for argument "value"');

            for (a = 0; a < r - n; ++a) {
              this[a + n] = s[a % l];
            }
          }
          return this;
        };
        var R = /[^+/0-9A-Za-z-_]/g;

        function z(e, t) {
          var n;
          t = t || 1 / 0;

          for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
            if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }

                if (a + 1 === r) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }

                i = n;
                continue;
              }

              if (n < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                continue;
              }

              n = 65536 + (i - 55296 << 10 | n - 56320);
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);

            if (i = null, n < 128) {
              if ((t -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              o.push(n >> 6 | 192, 63 & n | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
            }
          }

          return o;
        }

        function P(e) {
          return r.toByteArray(function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(R, "")).length < 2) return "";

            for (; e.length % 4 != 0;) {
              e += "=";
            }

            return e;
          }(e));
        }

        function H(e, t, n, r) {
          for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) {
            t[i + n] = e[i];
          }

          return i;
        }

        function j(e, t) {
          return _instanceof(e, t) || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
        }

        function _(e) {
          return e != e;
        }

        var W = function () {
          for (var e = new Array(256), t = 0; t < 16; ++t) {
            for (var n = 16 * t, r = 0; r < 16; ++r) {
              e[n + r] = "0123456789abcdef"[t] + "0123456789abcdef"[r];
            }
          }

          return e;
        }();
      }).call(this, e("buffer").Buffer);
    }, {
      "base64-js": 1,
      buffer: 3,
      ieee754: 16
    }],
    4: [function (e, t, n) {
      "use strict";

      var r = e("typo-js");

      function i(e) {
        "function" == typeof (e = e || {}).codeMirrorInstance && "function" == typeof e.codeMirrorInstance.defineMode ? (String.prototype.includes || (String.prototype.includes = function () {
          return -1 !== String.prototype.indexOf.apply(this, arguments);
        }), e.codeMirrorInstance.defineMode("spell-checker", function (t) {
          if (!i.aff_loading) {
            i.aff_loading = !0;
            var n = new XMLHttpRequest();
            n.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff", !0), n.onload = function () {
              4 === n.readyState && 200 === n.status && (i.aff_data = n.responseText, i.num_loaded++, 2 == i.num_loaded && (i.typo = new r("en_US", i.aff_data, i.dic_data, {
                platform: "any"
              })));
            }, n.send(null);
          }

          if (!i.dic_loading) {
            i.dic_loading = !0;
            var o = new XMLHttpRequest();
            o.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic", !0), o.onload = function () {
              4 === o.readyState && 200 === o.status && (i.dic_data = o.responseText, i.num_loaded++, 2 == i.num_loaded && (i.typo = new r("en_US", i.aff_data, i.dic_data, {
                platform: "any"
              })));
            }, o.send(null);
          }

          var a = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
              s = {
            token: function token(e) {
              var t = e.peek(),
                  n = "";
              if (a.includes(t)) return e.next(), null;

              for (; null != (t = e.peek()) && !a.includes(t);) {
                n += t, e.next();
              }

              return i.typo && !i.typo.check(n) ? "spell-error" : null;
            }
          },
              l = e.codeMirrorInstance.getMode(t, t.backdrop || "text/plain");
          return e.codeMirrorInstance.overlayMode(l, s, !0);
        })) : console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`");
      }

      i.num_loaded = 0, i.aff_loading = !1, i.dic_loading = !1, i.aff_data = "", i.dic_data = "", i.typo, t.exports = i;
    }, {
      "typo-js": 27
    }],
    5: [function (e, t, n) {
      (function (e) {
        "use strict";

        e.defineOption("fullScreen", !1, function (t, n, r) {
          r == e.Init && (r = !1), !r != !n && (n ? function (e) {
            var t = e.getWrapperElement();
            e.state.fullScreenRestore = {
              scrollTop: window.pageYOffset,
              scrollLeft: window.pageXOffset,
              width: t.style.width,
              height: t.style.height
            }, t.style.width = "", t.style.height = "auto", t.className += " CodeMirror-fullscreen", document.documentElement.style.overflow = "hidden", e.refresh();
          }(t) : function (e) {
            var t = e.getWrapperElement();
            t.className = t.className.replace(/\s*CodeMirror-fullscreen\b/, ""), document.documentElement.style.overflow = "";
            var n = e.state.fullScreenRestore;
            t.style.width = n.width, t.style.height = n.height, window.scrollTo(n.scrollLeft, n.scrollTop), e.refresh();
          }(t));
        });
      })("object" == _typeof(n) && "object" == _typeof(t) ? e("../../lib/codemirror") : CodeMirror);
    }, {
      "../../lib/codemirror": 11
    }],
    6: [function (e, t, n) {
      (function (e) {
        function t(e) {
          e.state.placeholder && (e.state.placeholder.parentNode.removeChild(e.state.placeholder), e.state.placeholder = null);
        }

        function n(e) {
          t(e);
          var n = e.state.placeholder = document.createElement("pre");
          n.style.cssText = "height: 0; overflow: visible", n.style.direction = e.getOption("direction"), n.className = "CodeMirror-placeholder CodeMirror-line-like";
          var r = e.getOption("placeholder");
          "string" == typeof r && (r = document.createTextNode(r)), n.appendChild(r), e.display.lineSpace.insertBefore(n, e.display.lineSpace.firstChild);
        }

        function r(e) {
          o(e) && n(e);
        }

        function i(e) {
          var r = e.getWrapperElement(),
              i = o(e);
          r.className = r.className.replace(" CodeMirror-empty", "") + (i ? " CodeMirror-empty" : ""), i ? n(e) : t(e);
        }

        function o(e) {
          return 1 === e.lineCount() && "" === e.getLine(0);
        }

        e.defineOption("placeholder", "", function (n, o, a) {
          var s = a && a != e.Init;
          if (o && !s) n.on("blur", r), n.on("change", i), n.on("swapDoc", i), i(n);else if (!o && s) {
            n.off("blur", r), n.off("change", i), n.off("swapDoc", i), t(n);
            var l = n.getWrapperElement();
            l.className = l.className.replace(" CodeMirror-empty", "");
          }
          o && !n.hasFocus() && r(n);
        });
      })("object" == _typeof(n) && "object" == _typeof(t) ? e("../../lib/codemirror") : CodeMirror);
    }, {
      "../../lib/codemirror": 11
    }],
    7: [function (e, t, n) {
      (function (e) {
        "use strict";

        var t = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
            n = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
            r = /[*+-]\s/;

        function i(e, n) {
          var r = n.line,
              i = 0,
              o = 0,
              a = t.exec(e.getLine(r)),
              s = a[1];

          do {
            var l = r + (i += 1),
                u = e.getLine(l),
                c = t.exec(u);

            if (c) {
              var h = c[1],
                  f = parseInt(a[3], 10) + i - o,
                  d = parseInt(c[3], 10),
                  p = d;

              if (s !== h || isNaN(d)) {
                if (s.length > h.length) return;
                if (s.length < h.length && 1 === i) return;
                o += 1;
              } else f === d && (p = d + 1), f > d && (p = f + 1), e.replaceRange(u.replace(t, h + p + c[4] + c[5]), {
                line: l,
                ch: 0
              }, {
                line: l,
                ch: u.length
              });
            }
          } while (c);
        }

        e.commands.newlineAndIndentContinueMarkdownList = function (o) {
          if (o.getOption("disableInput")) return e.Pass;

          for (var a = o.listSelections(), s = [], l = 0; l < a.length; l++) {
            var u = a[l].head,
                c = o.getStateAfter(u.line),
                h = e.innerMode(o.getMode(), c);
            if ("markdown" !== h.mode.name) return void o.execCommand("newlineAndIndent");
            var f = !1 !== (c = h.state).list,
                d = 0 !== c.quote,
                p = o.getLine(u.line),
                m = t.exec(p),
                g = /^\s*$/.test(p.slice(0, u.ch));
            if (!a[l].empty() || !f && !d || !m || g) return void o.execCommand("newlineAndIndent");
            if (n.test(p)) />\s*$/.test(p) || o.replaceRange("", {
              line: u.line,
              ch: 0
            }, {
              line: u.line,
              ch: u.ch + 1
            }), s[l] = "\n";else {
              var v = m[1],
                  y = m[5],
                  x = !(r.test(m[2]) || m[2].indexOf(">") >= 0),
                  b = x ? parseInt(m[3], 10) + 1 + m[4] : m[2].replace("x", " ");
              s[l] = "\n" + v + b + y, x && i(o, u);
            }
          }

          o.replaceSelections(s);
        };
      })("object" == _typeof(n) && "object" == _typeof(t) ? e("../../lib/codemirror") : CodeMirror);
    }, {
      "../../lib/codemirror": 11
    }],
    8: [function (e, t, n) {
      (function (e) {
        "use strict";

        e.overlayMode = function (t, n, r) {
          return {
            startState: function startState() {
              return {
                base: e.startState(t),
                overlay: e.startState(n),
                basePos: 0,
                baseCur: null,
                overlayPos: 0,
                overlayCur: null,
                streamSeen: null
              };
            },
            copyState: function copyState(r) {
              return {
                base: e.copyState(t, r.base),
                overlay: e.copyState(n, r.overlay),
                basePos: r.basePos,
                baseCur: null,
                overlayPos: r.overlayPos,
                overlayCur: null
              };
            },
            token: function token(e, i) {
              return (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) && (i.streamSeen = e, i.basePos = i.overlayPos = e.start), e.start == i.basePos && (i.baseCur = t.token(e, i.base), i.basePos = e.pos), e.start == i.overlayPos && (e.pos = e.start, i.overlayCur = n.token(e, i.overlay), i.overlayPos = e.pos), e.pos = Math.min(i.basePos, i.overlayPos), null == i.overlayCur ? i.baseCur : null != i.baseCur && i.overlay.combineTokens || r && null == i.overlay.combineTokens ? i.baseCur + " " + i.overlayCur : i.overlayCur;
            },
            indent: t.indent && function (e, n, r) {
              return t.indent(e.base, n, r);
            },
            electricChars: t.electricChars,
            innerMode: function innerMode(e) {
              return {
                state: e.base,
                mode: t
              };
            },
            blankLine: function blankLine(e) {
              var i, o;
              return t.blankLine && (i = t.blankLine(e.base)), n.blankLine && (o = n.blankLine(e.overlay)), null == o ? i : r && null != i ? i + " " + o : o;
            }
          };
        };
      })("object" == _typeof(n) && "object" == _typeof(t) ? e("../../lib/codemirror") : CodeMirror);
    }, {
      "../../lib/codemirror": 11
    }],
    9: [function (e, t, n) {
      (function (e) {
        "use strict";

        var t,
            n,
            r = e.Pos;

        function i(e, t) {
          for (var n = function (e) {
            var t = e.flags;
            return null != t ? t : (e.ignoreCase ? "i" : "") + (e.global ? "g" : "") + (e.multiline ? "m" : "");
          }(e), r = n, i = 0; i < t.length; i++) {
            -1 == r.indexOf(t.charAt(i)) && (r += t.charAt(i));
          }

          return n == r ? e : new RegExp(e.source, r);
        }

        function o(e) {
          return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source);
        }

        function a(e, t, n) {
          t = i(t, "g");

          for (var o = n.line, a = n.ch, s = e.lastLine(); o <= s; o++, a = 0) {
            t.lastIndex = a;
            var l = e.getLine(o),
                u = t.exec(l);
            if (u) return {
              from: r(o, u.index),
              to: r(o, u.index + u[0].length),
              match: u
            };
          }
        }

        function s(e, t, n) {
          if (!o(t)) return a(e, t, n);
          t = i(t, "gm");

          for (var s, l = 1, u = n.line, c = e.lastLine(); u <= c;) {
            for (var h = 0; h < l && !(u > c); h++) {
              var f = e.getLine(u++);
              s = null == s ? f : s + "\n" + f;
            }

            l *= 2, t.lastIndex = n.ch;
            var d = t.exec(s);

            if (d) {
              var p = s.slice(0, d.index).split("\n"),
                  m = d[0].split("\n"),
                  g = n.line + p.length - 1,
                  v = p[p.length - 1].length;
              return {
                from: r(g, v),
                to: r(g + m.length - 1, 1 == m.length ? v + m[0].length : m[m.length - 1].length),
                match: d
              };
            }
          }
        }

        function l(e, t, n) {
          for (var r, i = 0; i <= e.length;) {
            t.lastIndex = i;
            var o = t.exec(e);
            if (!o) break;
            var a = o.index + o[0].length;
            if (a > e.length - n) break;
            (!r || a > r.index + r[0].length) && (r = o), i = o.index + 1;
          }

          return r;
        }

        function u(e, t, n) {
          t = i(t, "g");

          for (var o = n.line, a = n.ch, s = e.firstLine(); o >= s; o--, a = -1) {
            var u = e.getLine(o),
                c = l(u, t, a < 0 ? 0 : u.length - a);
            if (c) return {
              from: r(o, c.index),
              to: r(o, c.index + c[0].length),
              match: c
            };
          }
        }

        function c(e, t, n) {
          if (!o(t)) return u(e, t, n);
          t = i(t, "gm");

          for (var a, s = 1, c = e.getLine(n.line).length - n.ch, h = n.line, f = e.firstLine(); h >= f;) {
            for (var d = 0; d < s && h >= f; d++) {
              var p = e.getLine(h--);
              a = null == a ? p : p + "\n" + a;
            }

            s *= 2;
            var m = l(a, t, c);

            if (m) {
              var g = a.slice(0, m.index).split("\n"),
                  v = m[0].split("\n"),
                  y = h + g.length,
                  x = g[g.length - 1].length;
              return {
                from: r(y, x),
                to: r(y + v.length - 1, 1 == v.length ? x + v[0].length : v[v.length - 1].length),
                match: m
              };
            }
          }
        }

        function h(e, t, n, r) {
          if (e.length == t.length) return n;

          for (var i = 0, o = n + Math.max(0, e.length - t.length);;) {
            if (i == o) return i;
            var a = i + o >> 1,
                s = r(e.slice(0, a)).length;
            if (s == n) return a;
            s > n ? o = a : i = a + 1;
          }
        }

        function f(e, i, o, a) {
          if (!i.length) return null;
          var s = a ? t : n,
              l = s(i).split(/\r|\n\r?/);

          e: for (var u = o.line, c = o.ch, f = e.lastLine() + 1 - l.length; u <= f; u++, c = 0) {
            var d = e.getLine(u).slice(c),
                p = s(d);

            if (1 == l.length) {
              var m = p.indexOf(l[0]);
              if (-1 == m) continue e;
              return o = h(d, p, m, s) + c, {
                from: r(u, h(d, p, m, s) + c),
                to: r(u, h(d, p, m + l[0].length, s) + c)
              };
            }

            var g = p.length - l[0].length;

            if (p.slice(g) == l[0]) {
              for (var v = 1; v < l.length - 1; v++) {
                if (s(e.getLine(u + v)) != l[v]) continue e;
              }

              var y = e.getLine(u + l.length - 1),
                  x = s(y),
                  b = l[l.length - 1];
              if (x.slice(0, b.length) == b) return {
                from: r(u, h(d, p, g, s) + c),
                to: r(u + l.length - 1, h(y, x, b.length, s))
              };
            }
          }
        }

        function d(e, i, o, a) {
          if (!i.length) return null;
          var s = a ? t : n,
              l = s(i).split(/\r|\n\r?/);

          e: for (var u = o.line, c = o.ch, f = e.firstLine() - 1 + l.length; u >= f; u--, c = -1) {
            var d = e.getLine(u);
            c > -1 && (d = d.slice(0, c));
            var p = s(d);

            if (1 == l.length) {
              var m = p.lastIndexOf(l[0]);
              if (-1 == m) continue e;
              return {
                from: r(u, h(d, p, m, s)),
                to: r(u, h(d, p, m + l[0].length, s))
              };
            }

            var g = l[l.length - 1];

            if (p.slice(0, g.length) == g) {
              var v = 1;

              for (o = u - l.length + 1; v < l.length - 1; v++) {
                if (s(e.getLine(o + v)) != l[v]) continue e;
              }

              var y = e.getLine(u + 1 - l.length),
                  x = s(y);
              if (x.slice(x.length - l[0].length) == l[0]) return {
                from: r(u + 1 - l.length, h(y, x, y.length - l[0].length, s)),
                to: r(u, h(d, p, g.length, s))
              };
            }
          }
        }

        function p(e, t, n, o) {
          var l;
          this.atOccurrence = !1, this.doc = e, n = n ? e.clipPos(n) : r(0, 0), this.pos = {
            from: n,
            to: n
          }, "object" == _typeof(o) ? l = o.caseFold : (l = o, o = null), "string" == typeof t ? (null == l && (l = !1), this.matches = function (n, r) {
            return (n ? d : f)(e, t, r, l);
          }) : (t = i(t, "gm"), o && !1 === o.multiline ? this.matches = function (n, r) {
            return (n ? u : a)(e, t, r);
          } : this.matches = function (n, r) {
            return (n ? c : s)(e, t, r);
          });
        }

        String.prototype.normalize ? (t = function t(e) {
          return e.normalize("NFD").toLowerCase();
        }, n = function n(e) {
          return e.normalize("NFD");
        }) : (t = function t(e) {
          return e.toLowerCase();
        }, n = function n(e) {
          return e;
        }), p.prototype = {
          findNext: function findNext() {
            return this.find(!1);
          },
          findPrevious: function findPrevious() {
            return this.find(!0);
          },
          find: function find(t) {
            for (var n = this.matches(t, this.doc.clipPos(t ? this.pos.from : this.pos.to)); n && 0 == e.cmpPos(n.from, n.to);) {
              t ? n.from.ch ? n.from = r(n.from.line, n.from.ch - 1) : n = n.from.line == this.doc.firstLine() ? null : this.matches(t, this.doc.clipPos(r(n.from.line - 1))) : n.to.ch < this.doc.getLine(n.to.line).length ? n.to = r(n.to.line, n.to.ch + 1) : n = n.to.line == this.doc.lastLine() ? null : this.matches(t, r(n.to.line + 1, 0));
            }

            if (n) return this.pos = n, this.atOccurrence = !0, this.pos.match || !0;
            var i = r(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
            return this.pos = {
              from: i,
              to: i
            }, this.atOccurrence = !1;
          },
          from: function from() {
            if (this.atOccurrence) return this.pos.from;
          },
          to: function to() {
            if (this.atOccurrence) return this.pos.to;
          },
          replace: function replace(t, n) {
            if (this.atOccurrence) {
              var i = e.splitLines(t);
              this.doc.replaceRange(i, this.pos.from, this.pos.to, n), this.pos.to = r(this.pos.from.line + i.length - 1, i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0));
            }
          }
        }, e.defineExtension("getSearchCursor", function (e, t, n) {
          return new p(this.doc, e, t, n);
        }), e.defineDocExtension("getSearchCursor", function (e, t, n) {
          return new p(this, e, t, n);
        }), e.defineExtension("selectMatches", function (t, n) {
          for (var r = [], i = this.getSearchCursor(t, this.getCursor("from"), n); i.findNext() && !(e.cmpPos(i.to(), this.getCursor("to")) > 0);) {
            r.push({
              anchor: i.from(),
              head: i.to()
            });
          }

          r.length && this.setSelections(r, 0);
        });
      })("object" == _typeof(n) && "object" == _typeof(t) ? e("../../lib/codemirror") : CodeMirror);
    }, {
      "../../lib/codemirror": 11
    }],
    10: [function (e, t, n) {
      (function (e) {
        "use strict";

        function t(e) {
          e.state.markedSelection && e.operation(function () {
            !function (e) {
              if (!e.somethingSelected()) return s(e);
              if (e.listSelections().length > 1) return l(e);
              var t = e.getCursor("start"),
                  n = e.getCursor("end"),
                  i = e.state.markedSelection;
              if (!i.length) return a(e, t, n);
              var u = i[0].find(),
                  c = i[i.length - 1].find();
              if (!u || !c || n.line - t.line <= r || o(t, c.to) >= 0 || o(n, u.from) <= 0) return l(e);

              for (; o(t, u.from) > 0;) {
                i.shift().clear(), u = i[0].find();
              }

              for (o(t, u.from) < 0 && (u.to.line - t.line < r ? (i.shift().clear(), a(e, t, u.to, 0)) : a(e, t, u.from, 0)); o(n, c.to) < 0;) {
                i.pop().clear(), c = i[i.length - 1].find();
              }

              o(n, c.to) > 0 && (n.line - c.from.line < r ? (i.pop().clear(), a(e, c.from, n)) : a(e, c.to, n));
            }(e);
          });
        }

        function n(e) {
          e.state.markedSelection && e.state.markedSelection.length && e.operation(function () {
            s(e);
          });
        }

        e.defineOption("styleSelectedText", !1, function (r, i, o) {
          var a = o && o != e.Init;
          i && !a ? (r.state.markedSelection = [], r.state.markedSelectionStyle = "string" == typeof i ? i : "CodeMirror-selectedtext", l(r), r.on("cursorActivity", t), r.on("change", n)) : !i && a && (r.off("cursorActivity", t), r.off("change", n), s(r), r.state.markedSelection = r.state.markedSelectionStyle = null);
        });
        var r = 8,
            i = e.Pos,
            o = e.cmpPos;

        function a(e, t, n, a) {
          if (0 != o(t, n)) for (var s = e.state.markedSelection, l = e.state.markedSelectionStyle, u = t.line;;) {
            var c = u == t.line ? t : i(u, 0),
                h = u + r,
                f = h >= n.line,
                d = f ? n : i(h, 0),
                p = e.markText(c, d, {
              className: l
            });
            if (null == a ? s.push(p) : s.splice(a++, 0, p), f) break;
            u = h;
          }
        }

        function s(e) {
          for (var t = e.state.markedSelection, n = 0; n < t.length; ++n) {
            t[n].clear();
          }

          t.length = 0;
        }

        function l(e) {
          s(e);

          for (var t = e.listSelections(), n = 0; n < t.length; n++) {
            a(e, t[n].from(), t[n].to());
          }
        }
      })("object" == _typeof(n) && "object" == _typeof(t) ? e("../../lib/codemirror") : CodeMirror);
    }, {
      "../../lib/codemirror": 11
    }],
    11: [function (e, t, n) {
      !function (e, r) {
        "object" == _typeof(n) && void 0 !== t ? t.exports = r() : (e = e || self).CodeMirror = r();
      }(this, function () {
        "use strict";

        var e = navigator.userAgent,
            t = navigator.platform,
            n = /gecko\/\d/i.test(e),
            r = /MSIE \d/.test(e),
            i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
            o = /Edge\/(\d+)/.exec(e),
            a = r || i || o,
            s = a && (r ? document.documentMode || 6 : +(o || i)[1]),
            l = !o && /WebKit\//.test(e),
            u = l && /Qt\/\d+\.\d+/.test(e),
            c = !o && /Chrome\//.test(e),
            h = /Opera\//.test(e),
            f = /Apple Computer/.test(navigator.vendor),
            d = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
            p = /PhantomJS/.test(e),
            m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
            g = /Android/.test(e),
            v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
            y = m || /Mac/.test(t),
            x = /\bCrOS\b/.test(e),
            b = /win/i.test(t),
            w = h && e.match(/Version\/(\d*\.\d*)/);
        w && (w = Number(w[1])), w && w >= 15 && (h = !1, l = !0);
        var k = y && (u || h && (null == w || w < 12.11)),
            C = n || a && s >= 9;

        function S(e) {
          return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
        }

        var L,
            T = function T(e, t) {
          var n = e.className,
              r = S(t).exec(n);

          if (r) {
            var i = n.slice(r.index + r[0].length);
            e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
          }
        };

        function M(e) {
          for (var t = e.childNodes.length; t > 0; --t) {
            e.removeChild(e.firstChild);
          }

          return e;
        }

        function A(e, t) {
          return M(e).appendChild(t);
        }

        function E(e, t, n, r) {
          var i = document.createElement(e);
          if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t));else if (t) for (var o = 0; o < t.length; ++o) {
            i.appendChild(t[o]);
          }
          return i;
        }

        function N(e, t, n, r) {
          var i = E(e, t, n, r);
          return i.setAttribute("role", "presentation"), i;
        }

        function D(e, t) {
          if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);

          do {
            if (11 == t.nodeType && (t = t.host), t == e) return !0;
          } while (t = t.parentNode);
        }

        function F() {
          var e;

          try {
            e = document.activeElement;
          } catch (t) {
            e = document.body || null;
          }

          for (; e && e.shadowRoot && e.shadowRoot.activeElement;) {
            e = e.shadowRoot.activeElement;
          }

          return e;
        }

        function O(e, t) {
          var n = e.className;
          S(t).test(n) || (e.className += (n ? " " : "") + t);
        }

        function I(e, t) {
          for (var n = e.split(" "), r = 0; r < n.length; r++) {
            n[r] && !S(n[r]).test(t) && (t += " " + n[r]);
          }

          return t;
        }

        L = document.createRange ? function (e, t, n, r) {
          var i = document.createRange();
          return i.setEnd(r || e, n), i.setStart(e, t), i;
        } : function (e, t, n) {
          var r = document.body.createTextRange();

          try {
            r.moveToElementText(e.parentNode);
          } catch (e) {
            return r;
          }

          return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
        };

        var B = function B(e) {
          e.select();
        };

        function R(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function () {
            return e.apply(null, t);
          };
        }

        function z(e, t, n) {
          for (var r in t || (t = {}), e) {
            !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
          }

          return t;
        }

        function P(e, t, n, r, i) {
          null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);

          for (var o = r || 0, a = i || 0;;) {
            var s = e.indexOf("\t", o);
            if (s < 0 || s >= t) return a + (t - o);
            a += s - o, a += n - a % n, o = s + 1;
          }
        }

        m ? B = function B(e) {
          e.selectionStart = 0, e.selectionEnd = e.value.length;
        } : a && (B = function B(e) {
          try {
            e.select();
          } catch (e) {}
        });

        var H = function H() {
          this.id = null, this.f = null, this.time = 0, this.handler = R(this.onTimeout, this);
        };

        function j(e, t) {
          for (var n = 0; n < e.length; ++n) {
            if (e[n] == t) return n;
          }

          return -1;
        }

        H.prototype.onTimeout = function (e) {
          e.id = 0, e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
        }, H.prototype.set = function (e, t) {
          this.f = t;
          var n = +new Date() + e;
          (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = n);
        };
        var _ = 30,
            W = {
          toString: function toString() {
            return "CodeMirror.Pass";
          }
        },
            U = {
          scroll: !1
        },
            q = {
          origin: "*mouse"
        },
            $ = {
          origin: "+move"
        };

        function G(e, t, n) {
          for (var r = 0, i = 0;;) {
            var o = e.indexOf("\t", r);
            -1 == o && (o = e.length);
            var a = o - r;
            if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
            if (i += o - r, r = o + 1, (i += n - i % n) >= t) return r;
          }
        }

        var V = [""];

        function X(e) {
          for (; V.length <= e;) {
            V.push(K(V) + " ");
          }

          return V[e];
        }

        function K(e) {
          return e[e.length - 1];
        }

        function Y(e, t) {
          for (var n = [], r = 0; r < e.length; r++) {
            n[r] = t(e[r], r);
          }

          return n;
        }

        function Z() {}

        function J(e, t) {
          var n;
          return Object.create ? n = Object.create(e) : (Z.prototype = e, n = new Z()), t && z(t, n), n;
        }

        var Q = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

        function ee(e) {
          return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Q.test(e));
        }

        function te(e, t) {
          return t ? !!(t.source.indexOf("\\w") > -1 && ee(e)) || t.test(e) : ee(e);
        }

        function ne(e) {
          for (var t in e) {
            if (e.hasOwnProperty(t) && e[t]) return !1;
          }

          return !0;
        }

        var re = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

        function ie(e) {
          return e.charCodeAt(0) >= 768 && re.test(e);
        }

        function oe(e, t, n) {
          for (; (n < 0 ? t > 0 : t < e.length) && ie(e.charAt(t));) {
            t += n;
          }

          return t;
        }

        function ae(e, t, n) {
          for (var r = t > n ? -1 : 1;;) {
            if (t == n) return t;
            var i = (t + n) / 2,
                o = r < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : n;
            e(o) ? n = o : t = o + r;
          }
        }

        var se = null;

        function le(e, t, n) {
          var r;
          se = null;

          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && "before" == n ? r = i : se = i), o.from == t && (o.from != o.to && "before" != n ? r = i : se = i);
          }

          return null != r ? r : se;
        }

        var ue = function () {
          var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
              t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
          var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
              r = /[stwN]/,
              i = /[LRr]/,
              o = /[Lb1n]/,
              a = /[1n]/;

          function s(e, t, n) {
            this.level = e, this.from = t, this.to = n;
          }

          return function (l, u) {
            var c = "ltr" == u ? "L" : "R";
            if (0 == l.length || "ltr" == u && !n.test(l)) return !1;

            for (var h, f = l.length, d = [], p = 0; p < f; ++p) {
              d.push((h = l.charCodeAt(p)) <= 247 ? e.charAt(h) : 1424 <= h && h <= 1524 ? "R" : 1536 <= h && h <= 1785 ? t.charAt(h - 1536) : 1774 <= h && h <= 2220 ? "r" : 8192 <= h && h <= 8203 ? "w" : 8204 == h ? "b" : "L");
            }

            for (var m = 0, g = c; m < f; ++m) {
              var v = d[m];
              "m" == v ? d[m] = g : g = v;
            }

            for (var y = 0, x = c; y < f; ++y) {
              var b = d[y];
              "1" == b && "r" == x ? d[y] = "n" : i.test(b) && (x = b, "r" == b && (d[y] = "R"));
            }

            for (var w = 1, k = d[0]; w < f - 1; ++w) {
              var C = d[w];
              "+" == C && "1" == k && "1" == d[w + 1] ? d[w] = "1" : "," != C || k != d[w + 1] || "1" != k && "n" != k || (d[w] = k), k = C;
            }

            for (var S = 0; S < f; ++S) {
              var L = d[S];
              if ("," == L) d[S] = "N";else if ("%" == L) {
                var T = void 0;

                for (T = S + 1; T < f && "%" == d[T]; ++T) {
                  ;
                }

                for (var M = S && "!" == d[S - 1] || T < f && "1" == d[T] ? "1" : "N", A = S; A < T; ++A) {
                  d[A] = M;
                }

                S = T - 1;
              }
            }

            for (var E = 0, N = c; E < f; ++E) {
              var D = d[E];
              "L" == N && "1" == D ? d[E] = "L" : i.test(D) && (N = D);
            }

            for (var F = 0; F < f; ++F) {
              if (r.test(d[F])) {
                var O = void 0;

                for (O = F + 1; O < f && r.test(d[O]); ++O) {
                  ;
                }

                for (var I = "L" == (F ? d[F - 1] : c), B = I == ("L" == (O < f ? d[O] : c)) ? I ? "L" : "R" : c, R = F; R < O; ++R) {
                  d[R] = B;
                }

                F = O - 1;
              }
            }

            for (var z, P = [], H = 0; H < f;) {
              if (o.test(d[H])) {
                var j = H;

                for (++H; H < f && o.test(d[H]); ++H) {
                  ;
                }

                P.push(new s(0, j, H));
              } else {
                var _ = H,
                    W = P.length;

                for (++H; H < f && "L" != d[H]; ++H) {
                  ;
                }

                for (var U = _; U < H;) {
                  if (a.test(d[U])) {
                    _ < U && P.splice(W, 0, new s(1, _, U));
                    var q = U;

                    for (++U; U < H && a.test(d[U]); ++U) {
                      ;
                    }

                    P.splice(W, 0, new s(2, q, U)), _ = U;
                  } else ++U;
                }

                _ < H && P.splice(W, 0, new s(1, _, H));
              }
            }

            return "ltr" == u && (1 == P[0].level && (z = l.match(/^\s+/)) && (P[0].from = z[0].length, P.unshift(new s(0, 0, z[0].length))), 1 == K(P).level && (z = l.match(/\s+$/)) && (K(P).to -= z[0].length, P.push(new s(0, f - z[0].length, f)))), "rtl" == u ? P.reverse() : P;
          };
        }();

        function ce(e, t) {
          var n = e.order;
          return null == n && (n = e.order = ue(e.text, t)), n;
        }

        var he = [],
            fe = function fe(e, t, n) {
          if (e.addEventListener) e.addEventListener(t, n, !1);else if (e.attachEvent) e.attachEvent("on" + t, n);else {
            var r = e._handlers || (e._handlers = {});
            r[t] = (r[t] || he).concat(n);
          }
        };

        function de(e, t) {
          return e._handlers && e._handlers[t] || he;
        }

        function pe(e, t, n) {
          if (e.removeEventListener) e.removeEventListener(t, n, !1);else if (e.detachEvent) e.detachEvent("on" + t, n);else {
            var r = e._handlers,
                i = r && r[t];

            if (i) {
              var o = j(i, n);
              o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
          }
        }

        function me(e, t) {
          var n = de(e, t);
          if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) {
            n[i].apply(null, r);
          }
        }

        function ge(e, t, n) {
          return "string" == typeof t && (t = {
            type: t,
            preventDefault: function preventDefault() {
              this.defaultPrevented = !0;
            }
          }), me(e, n || t.type, e, t), ke(t) || t.codemirrorIgnore;
        }

        function ve(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) {
            -1 == j(n, t[r]) && n.push(t[r]);
          }
        }

        function ye(e, t) {
          return de(e, t).length > 0;
        }

        function xe(e) {
          e.prototype.on = function (e, t) {
            fe(this, e, t);
          }, e.prototype.off = function (e, t) {
            pe(this, e, t);
          };
        }

        function be(e) {
          e.preventDefault ? e.preventDefault() : e.returnValue = !1;
        }

        function we(e) {
          e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
        }

        function ke(e) {
          return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
        }

        function Ce(e) {
          be(e), we(e);
        }

        function Se(e) {
          return e.target || e.srcElement;
        }

        function Le(e) {
          var t = e.which;
          return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t;
        }

        var Te,
            Me,
            Ae = function () {
          if (a && s < 9) return !1;
          var e = E("div");
          return "draggable" in e || "dragDrop" in e;
        }();

        function Ee(e) {
          if (null == Te) {
            var t = E("span", "​");
            A(e, E("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Te = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && s < 8));
          }

          var n = Te ? E("span", "​") : E("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
          return n.setAttribute("cm-text", ""), n;
        }

        function Ne(e) {
          if (null != Me) return Me;
          var t = A(e, document.createTextNode("AخA")),
              n = L(t, 0, 1).getBoundingClientRect(),
              r = L(t, 1, 2).getBoundingClientRect();
          return M(e), !(!n || n.left == n.right) && (Me = r.right - n.right < 3);
        }

        var De,
            Fe = 3 != "\n\nb".split(/\n/).length ? function (e) {
          for (var t = 0, n = [], r = e.length; t <= r;) {
            var i = e.indexOf("\n", t);
            -1 == i && (i = e.length);
            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                a = o.indexOf("\r");
            -1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1);
          }

          return n;
        } : function (e) {
          return e.split(/\r\n?|\n/);
        },
            Oe = window.getSelection ? function (e) {
          try {
            return e.selectionStart != e.selectionEnd;
          } catch (e) {
            return !1;
          }
        } : function (e) {
          var t;

          try {
            t = e.ownerDocument.selection.createRange();
          } catch (e) {}

          return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
        },
            Ie = "oncopy" in (De = E("div")) || (De.setAttribute("oncopy", "return;"), "function" == typeof De.oncopy),
            Be = null;
        var Re = {},
            ze = {};

        function Pe(e, t) {
          arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Re[e] = t;
        }

        function He(e) {
          if ("string" == typeof e && ze.hasOwnProperty(e)) e = ze[e];else if (e && "string" == typeof e.name && ze.hasOwnProperty(e.name)) {
            var t = ze[e.name];
            "string" == typeof t && (t = {
              name: t
            }), (e = J(t, e)).name = t.name;
          } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return He("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return He("application/json");
          }
          return "string" == typeof e ? {
            name: e
          } : e || {
            name: "null"
          };
        }

        function je(e, t) {
          t = He(t);
          var n = Re[t.name];
          if (!n) return je(e, "text/plain");
          var r = n(e, t);

          if (_e.hasOwnProperty(t.name)) {
            var i = _e[t.name];

            for (var o in i) {
              i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o]);
            }
          }

          if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) {
            r[a] = t.modeProps[a];
          }
          return r;
        }

        var _e = {};

        function We(e, t) {
          z(t, _e.hasOwnProperty(e) ? _e[e] : _e[e] = {});
        }

        function Ue(e, t) {
          if (!0 === t) return t;
          if (e.copyState) return e.copyState(t);
          var n = {};

          for (var r in t) {
            var i = t[r];
            _instanceof(i, Array) && (i = i.concat([])), n[r] = i;
          }

          return n;
        }

        function qe(e, t) {
          for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) {
            t = n.state, e = n.mode;
          }

          return n || {
            mode: e,
            state: t
          };
        }

        function $e(e, t, n) {
          return !e.startState || e.startState(t, n);
        }

        var Ge = function Ge(e, t, n) {
          this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n;
        };

        function Ve(e, t) {
          if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");

          for (var n = e; !n.lines;) {
            for (var r = 0;; ++r) {
              var i = n.children[r],
                  o = i.chunkSize();

              if (t < o) {
                n = i;
                break;
              }

              t -= o;
            }
          }

          return n.lines[t];
        }

        function Xe(e, t, n) {
          var r = [],
              i = t.line;
          return e.iter(t.line, n.line + 1, function (e) {
            var o = e.text;
            i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
          }), r;
        }

        function Ke(e, t, n) {
          var r = [];
          return e.iter(t, n, function (e) {
            r.push(e.text);
          }), r;
        }

        function Ye(e, t) {
          var n = t - e.height;
          if (n) for (var r = e; r; r = r.parent) {
            r.height += n;
          }
        }

        function Ze(e) {
          if (null == e.parent) return null;

          for (var t = e.parent, n = j(t.lines, e), r = t.parent; r; t = r, r = r.parent) {
            for (var i = 0; r.children[i] != t; ++i) {
              n += r.children[i].chunkSize();
            }
          }

          return n + t.first;
        }

        function Je(e, t) {
          var n = e.first;

          e: do {
            for (var r = 0; r < e.children.length; ++r) {
              var i = e.children[r],
                  o = i.height;

              if (t < o) {
                e = i;
                continue e;
              }

              t -= o, n += i.chunkSize();
            }

            return n;
          } while (!e.lines);

          for (var a = 0; a < e.lines.length; ++a) {
            var s = e.lines[a].height;
            if (t < s) break;
            t -= s;
          }

          return n + a;
        }

        function Qe(e, t) {
          return t >= e.first && t < e.first + e.size;
        }

        function et(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }

        function tt(e, t, n) {
          if (void 0 === n && (n = null), !_instanceof(this, tt)) return new tt(e, t, n);
          this.line = e, this.ch = t, this.sticky = n;
        }

        function nt(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }

        function rt(e, t) {
          return e.sticky == t.sticky && 0 == nt(e, t);
        }

        function it(e) {
          return tt(e.line, e.ch);
        }

        function ot(e, t) {
          return nt(e, t) < 0 ? t : e;
        }

        function at(e, t) {
          return nt(e, t) < 0 ? e : t;
        }

        function st(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }

        function lt(e, t) {
          if (t.line < e.first) return tt(e.first, 0);
          var n = e.first + e.size - 1;
          return t.line > n ? tt(n, Ve(e, n).text.length) : function (e, t) {
            var n = e.ch;
            return null == n || n > t ? tt(e.line, t) : n < 0 ? tt(e.line, 0) : e;
          }(t, Ve(e, t.line).text.length);
        }

        function ut(e, t) {
          for (var n = [], r = 0; r < t.length; r++) {
            n[r] = lt(e, t[r]);
          }

          return n;
        }

        Ge.prototype.eol = function () {
          return this.pos >= this.string.length;
        }, Ge.prototype.sol = function () {
          return this.pos == this.lineStart;
        }, Ge.prototype.peek = function () {
          return this.string.charAt(this.pos) || void 0;
        }, Ge.prototype.next = function () {
          if (this.pos < this.string.length) return this.string.charAt(this.pos++);
        }, Ge.prototype.eat = function (e) {
          var t = this.string.charAt(this.pos);
          if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
        }, Ge.prototype.eatWhile = function (e) {
          for (var t = this.pos; this.eat(e);) {
            ;
          }

          return this.pos > t;
        }, Ge.prototype.eatSpace = function () {
          for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) {
            ++this.pos;
          }

          return this.pos > e;
        }, Ge.prototype.skipToEnd = function () {
          this.pos = this.string.length;
        }, Ge.prototype.skipTo = function (e) {
          var t = this.string.indexOf(e, this.pos);
          if (t > -1) return this.pos = t, !0;
        }, Ge.prototype.backUp = function (e) {
          this.pos -= e;
        }, Ge.prototype.column = function () {
          return this.lastColumnPos < this.start && (this.lastColumnValue = P(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? P(this.string, this.lineStart, this.tabSize) : 0);
        }, Ge.prototype.indentation = function () {
          return P(this.string, null, this.tabSize) - (this.lineStart ? P(this.string, this.lineStart, this.tabSize) : 0);
        }, Ge.prototype.match = function (e, t, n) {
          if ("string" != typeof e) {
            var r = this.string.slice(this.pos).match(e);
            return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
          }

          var i = function i(e) {
            return n ? e.toLowerCase() : e;
          };

          if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
        }, Ge.prototype.current = function () {
          return this.string.slice(this.start, this.pos);
        }, Ge.prototype.hideFirstChars = function (e, t) {
          this.lineStart += e;

          try {
            return t();
          } finally {
            this.lineStart -= e;
          }
        }, Ge.prototype.lookAhead = function (e) {
          var t = this.lineOracle;
          return t && t.lookAhead(e);
        }, Ge.prototype.baseToken = function () {
          var e = this.lineOracle;
          return e && e.baseToken(this.pos);
        };

        var ct = function ct(e, t) {
          this.state = e, this.lookAhead = t;
        },
            ht = function ht(e, t, n, r) {
          this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
        };

        function ft(e, t, n, r) {
          var i = [e.state.modeGen],
              o = {};
          wt(e, t.text, e.doc.mode, n, function (e, t) {
            return i.push(e, t);
          }, o, r);

          for (var a = n.state, s = function s(r) {
            n.baseTokens = i;
            var s = e.state.overlays[r],
                l = 1,
                u = 0;
            n.state = !0, wt(e, t.text, s.mode, n, function (e, t) {
              for (var n = l; u < e;) {
                var r = i[l];
                r > e && i.splice(l, 1, e, i[l + 1], r), l += 2, u = Math.min(e, r);
              }

              if (t) if (s.opaque) i.splice(n, l - n, e, "overlay " + t), l = n + 2;else for (; n < l; n += 2) {
                var o = i[n + 1];
                i[n + 1] = (o ? o + " " : "") + "overlay " + t;
              }
            }, o), n.state = a, n.baseTokens = null, n.baseTokenPos = 1;
          }, l = 0; l < e.state.overlays.length; ++l) {
            s(l);
          }

          return {
            styles: i,
            classes: o.bgClass || o.textClass ? o : null
          };
        }

        function dt(e, t, n) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var r = pt(e, Ze(t)),
                i = t.text.length > e.options.maxHighlightLength && Ue(e.doc.mode, r.state),
                o = ft(e, t, r);
            i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
          }

          return t.styles;
        }

        function pt(e, t, n) {
          var r = e.doc,
              i = e.display;
          if (!r.mode.startState) return new ht(r, !0, t);

          var o = function (e, t, n) {
            for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
              if (s <= o.first) return o.first;
              var l = Ve(o, s - 1),
                  u = l.stateAfter;
              if (u && (!n || s + (_instanceof(u, ct) ? u.lookAhead : 0) <= o.modeFrontier)) return s;
              var c = P(l.text, null, e.options.tabSize);
              (null == i || r > c) && (i = s - 1, r = c);
            }

            return i;
          }(e, t, n),
              a = o > r.first && Ve(r, o - 1).stateAfter,
              s = a ? ht.fromSaved(r, a, o) : new ht(r, $e(r.mode), o);

          return r.iter(o, t, function (n) {
            mt(e, n.text, s);
            var r = s.line;
            n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? s.save() : null, s.nextLine();
          }), n && (r.modeFrontier = s.line), s;
        }

        function mt(e, t, n, r) {
          var i = e.doc.mode,
              o = new Ge(t, e.options.tabSize, n);

          for (o.start = o.pos = r || 0, "" == t && gt(i, n.state); !o.eol();) {
            vt(i, o, n.state), o.start = o.pos;
          }
        }

        function gt(e, t) {
          if (e.blankLine) return e.blankLine(t);

          if (e.innerMode) {
            var n = qe(e, t);
            return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
          }
        }

        function vt(e, t, n, r) {
          for (var i = 0; i < 10; i++) {
            r && (r[0] = qe(e, n).mode);
            var o = e.token(t, n);
            if (t.pos > t.start) return o;
          }

          throw new Error("Mode " + e.name + " failed to advance stream.");
        }

        ht.prototype.lookAhead = function (e) {
          var t = this.doc.getLine(this.line + e);
          return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
        }, ht.prototype.baseToken = function (e) {
          if (!this.baseTokens) return null;

          for (; this.baseTokens[this.baseTokenPos] <= e;) {
            this.baseTokenPos += 2;
          }

          var t = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: t && t.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - e
          };
        }, ht.prototype.nextLine = function () {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }, ht.fromSaved = function (e, t, n) {
          return _instanceof(t, ct) ? new ht(e, Ue(e.mode, t.state), n, t.lookAhead) : new ht(e, Ue(e.mode, t), n);
        }, ht.prototype.save = function (e) {
          var t = !1 !== e ? Ue(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new ct(t, this.maxLookAhead) : t;
        };

        var yt = function yt(e, t, n) {
          this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n;
        };

        function xt(e, t, n, r) {
          var i,
              o,
              a = e.doc,
              s = a.mode,
              l = Ve(a, (t = lt(a, t)).line),
              u = pt(e, t.line, n),
              c = new Ge(l.text, e.options.tabSize, u);

          for (r && (o = []); (r || c.pos < t.ch) && !c.eol();) {
            c.start = c.pos, i = vt(s, c, u.state), r && o.push(new yt(c, i, Ue(a.mode, u.state)));
          }

          return r ? o : new yt(c, i, u.state);
        }

        function bt(e, t) {
          if (e) for (;;) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n) break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? "bgClass" : "textClass";
            null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2]);
          }
          return e;
        }

        function wt(e, t, n, r, i, o, a) {
          var s = n.flattenSpans;
          null == s && (s = e.options.flattenSpans);
          var l,
              u = 0,
              c = null,
              h = new Ge(t, e.options.tabSize, r),
              f = e.options.addModeClass && [null];

          for ("" == t && bt(gt(n, r.state), o); !h.eol();) {
            if (h.pos > e.options.maxHighlightLength ? (s = !1, a && mt(e, t, r, h.pos), h.pos = t.length, l = null) : l = bt(vt(n, h, r.state, f), o), f) {
              var d = f[0].name;
              d && (l = "m-" + (l ? d + " " + l : d));
            }

            if (!s || c != l) {
              for (; u < h.start;) {
                i(u = Math.min(h.start, u + 5e3), c);
              }

              c = l;
            }

            h.start = h.pos;
          }

          for (; u < h.pos;) {
            var p = Math.min(h.pos, u + 5e3);
            i(p, c), u = p;
          }
        }

        var kt = !1,
            Ct = !1;

        function St(e, t, n) {
          this.marker = e, this.from = t, this.to = n;
        }

        function Lt(e, t) {
          if (e) for (var n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r.marker == t) return r;
          }
        }

        function Tt(e, t) {
          for (var n, r = 0; r < e.length; ++r) {
            e[r] != t && (n || (n = [])).push(e[r]);
          }

          return n;
        }

        function Mt(e, t) {
          if (t.full) return null;
          var n = Qe(e, t.from.line) && Ve(e, t.from.line).markedSpans,
              r = Qe(e, t.to.line) && Ve(e, t.to.line).markedSpans;
          if (!n && !r) return null;

          var i = t.from.ch,
              o = t.to.ch,
              a = 0 == nt(t.from, t.to),
              s = function (e, t, n) {
            var r;
            if (e) for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                  a = o.marker;

              if (null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
                var s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                (r || (r = [])).push(new St(a, o.from, s ? null : o.to));
              }
            }
            return r;
          }(n, i, a),
              l = function (e, t, n) {
            var r;
            if (e) for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                  a = o.marker;

              if (null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
                var s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                (r || (r = [])).push(new St(a, s ? null : o.from - t, null == o.to ? null : o.to - t));
              }
            }
            return r;
          }(r, o, a),
              u = 1 == t.text.length,
              c = K(t.text).length + (u ? i : 0);

          if (s) for (var h = 0; h < s.length; ++h) {
            var f = s[h];

            if (null == f.to) {
              var d = Lt(l, f.marker);
              d ? u && (f.to = null == d.to ? null : d.to + c) : f.to = i;
            }
          }
          if (l) for (var p = 0; p < l.length; ++p) {
            var m = l[p];
            if (null != m.to && (m.to += c), null == m.from) Lt(s, m.marker) || (m.from = c, u && (s || (s = [])).push(m));else m.from += c, u && (s || (s = [])).push(m);
          }
          s && (s = At(s)), l && l != s && (l = At(l));
          var g = [s];

          if (!u) {
            var v,
                y = t.text.length - 2;
            if (y > 0 && s) for (var x = 0; x < s.length; ++x) {
              null == s[x].to && (v || (v = [])).push(new St(s[x].marker, null, null));
            }

            for (var b = 0; b < y; ++b) {
              g.push(v);
            }

            g.push(l);
          }

          return g;
        }

        function At(e) {
          for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
          }

          return e.length ? e : null;
        }

        function Et(e) {
          var t = e.markedSpans;

          if (t) {
            for (var n = 0; n < t.length; ++n) {
              t[n].marker.detachLine(e);
            }

            e.markedSpans = null;
          }
        }

        function Nt(e, t) {
          if (t) {
            for (var n = 0; n < t.length; ++n) {
              t[n].marker.attachLine(e);
            }

            e.markedSpans = t;
          }
        }

        function Dt(e) {
          return e.inclusiveLeft ? -1 : 0;
        }

        function Ft(e) {
          return e.inclusiveRight ? 1 : 0;
        }

        function Ot(e, t) {
          var n = e.lines.length - t.lines.length;
          if (0 != n) return n;
          var r = e.find(),
              i = t.find(),
              o = nt(r.from, i.from) || Dt(e) - Dt(t);
          if (o) return -o;
          var a = nt(r.to, i.to) || Ft(e) - Ft(t);
          return a || t.id - e.id;
        }

        function It(e, t) {
          var n,
              r = Ct && e.markedSpans;
          if (r) for (var i = void 0, o = 0; o < r.length; ++o) {
            (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Ot(n, i.marker) < 0) && (n = i.marker);
          }
          return n;
        }

        function Bt(e) {
          return It(e, !0);
        }

        function Rt(e) {
          return It(e, !1);
        }

        function zt(e, t) {
          var n,
              r = Ct && e.markedSpans;
          if (r) for (var i = 0; i < r.length; ++i) {
            var o = r[i];
            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || Ot(n, o.marker) < 0) && (n = o.marker);
          }
          return n;
        }

        function Pt(e, t, n, r, i) {
          var o = Ve(e, t),
              a = Ct && o.markedSpans;
          if (a) for (var s = 0; s < a.length; ++s) {
            var l = a[s];

            if (l.marker.collapsed) {
              var u = l.marker.find(0),
                  c = nt(u.from, n) || Dt(l.marker) - Dt(i),
                  h = nt(u.to, r) || Ft(l.marker) - Ft(i);
              if (!(c >= 0 && h <= 0 || c <= 0 && h >= 0) && (c <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? nt(u.to, n) >= 0 : nt(u.to, n) > 0) || c >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? nt(u.from, r) <= 0 : nt(u.from, r) < 0))) return !0;
            }
          }
        }

        function Ht(e) {
          for (var t; t = Bt(e);) {
            e = t.find(-1, !0).line;
          }

          return e;
        }

        function jt(e, t) {
          var n = Ve(e, t),
              r = Ht(n);
          return n == r ? t : Ze(r);
        }

        function _t(e, t) {
          if (t > e.lastLine()) return t;
          var n,
              r = Ve(e, t);
          if (!Wt(e, r)) return t;

          for (; n = Rt(r);) {
            r = n.find(1, !0).line;
          }

          return Ze(r) + 1;
        }

        function Wt(e, t) {
          var n = Ct && t.markedSpans;
          if (n) for (var r = void 0, i = 0; i < n.length; ++i) {
            if ((r = n[i]).marker.collapsed) {
              if (null == r.from) return !0;
              if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Ut(e, t, r)) return !0;
            }
          }
        }

        function Ut(e, t, n) {
          if (null == n.to) {
            var r = n.marker.find(1, !0);
            return Ut(e, r.line, Lt(r.line.markedSpans, n.marker));
          }

          if (n.marker.inclusiveRight && n.to == t.text.length) return !0;

          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) {
            if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Ut(e, t, i)) return !0;
          }
        }

        function qt(e) {
          for (var t = 0, n = (e = Ht(e)).parent, r = 0; r < n.lines.length; ++r) {
            var i = n.lines[r];
            if (i == e) break;
            t += i.height;
          }

          for (var o = n.parent; o; o = (n = o).parent) {
            for (var a = 0; a < o.children.length; ++a) {
              var s = o.children[a];
              if (s == n) break;
              t += s.height;
            }
          }

          return t;
        }

        function $t(e) {
          if (0 == e.height) return 0;

          for (var t, n = e.text.length, r = e; t = Bt(r);) {
            var i = t.find(0, !0);
            r = i.from.line, n += i.from.ch - i.to.ch;
          }

          for (r = e; t = Rt(r);) {
            var o = t.find(0, !0);
            n -= r.text.length - o.from.ch, n += (r = o.to.line).text.length - o.to.ch;
          }

          return n;
        }

        function Gt(e) {
          var t = e.display,
              n = e.doc;
          t.maxLine = Ve(n, n.first), t.maxLineLength = $t(t.maxLine), t.maxLineChanged = !0, n.iter(function (e) {
            var n = $t(e);
            n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e);
          });
        }

        var Vt = function Vt(e, t, n) {
          this.text = e, Nt(this, t), this.height = n ? n(this) : 1;
        };

        function Xt(e) {
          e.parent = null, Et(e);
        }

        Vt.prototype.lineNo = function () {
          return Ze(this);
        }, xe(Vt);
        var Kt = {},
            Yt = {};

        function Zt(e, t) {
          if (!e || /^\s*$/.test(e)) return null;
          var n = t.addModeClass ? Yt : Kt;
          return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
        }

        function Jt(e, t) {
          var n = N("span", null, null, l ? "padding-right: .1px" : null),
              r = {
            pre: N("pre", [n], "CodeMirror-line"),
            content: n,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: e.getOption("lineWrapping")
          };
          t.measure = {};

          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
                a = void 0;
            r.pos = 0, r.addToken = en, Ne(e.display.measure) && (a = ce(o, e.doc.direction)) && (r.addToken = tn(r.addToken, a)), r.map = [], rn(o, r, dt(e, o, t != e.display.externalMeasured && Ze(o))), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = I(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = I(o.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Ee(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
          }

          if (l) {
            var s = r.content.lastChild;
            (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
          }

          return me(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = I(r.pre.className, r.textClass || "")), r;
        }

        function Qt(e) {
          var t = E("span", "•", "cm-invalidchar");
          return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
        }

        function en(e, t, n, r, i, o, l) {
          if (t) {
            var u,
                c = e.splitSpaces ? function (e, t) {
              if (e.length > 1 && !/  /.test(e)) return e;

              for (var n = t, r = "", i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o;
              }

              return r;
            }(t, e.trailingSpace) : t,
                h = e.cm.state.specialChars,
                f = !1;

            if (h.test(t)) {
              u = document.createDocumentFragment();

              for (var d = 0;;) {
                h.lastIndex = d;
                var p = h.exec(t),
                    m = p ? p.index - d : t.length - d;

                if (m) {
                  var g = document.createTextNode(c.slice(d, d + m));
                  a && s < 9 ? u.appendChild(E("span", [g])) : u.appendChild(g), e.map.push(e.pos, e.pos + m, g), e.col += m, e.pos += m;
                }

                if (!p) break;
                d += m + 1;
                var v = void 0;

                if ("\t" == p[0]) {
                  var y = e.cm.options.tabSize,
                      x = y - e.col % y;
                  (v = u.appendChild(E("span", X(x), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += x;
                } else "\r" == p[0] || "\n" == p[0] ? ((v = u.appendChild(E("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", p[0]), e.col += 1) : ((v = e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text", p[0]), a && s < 9 ? u.appendChild(E("span", [v])) : u.appendChild(v), e.col += 1);

                e.map.push(e.pos, e.pos + 1, v), e.pos++;
              }
            } else e.col += t.length, u = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, u), a && s < 9 && (f = !0), e.pos += t.length;

            if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), n || r || i || f || o) {
              var b = n || "";
              r && (b += r), i && (b += i);
              var w = E("span", [u], b, o);
              if (l) for (var k in l) {
                l.hasOwnProperty(k) && "style" != k && "class" != k && w.setAttribute(k, l[k]);
              }
              return e.content.appendChild(w);
            }

            e.content.appendChild(u);
          }
        }

        function tn(e, t) {
          return function (n, r, i, o, a, s, l) {
            i = i ? i + " cm-force-border" : "cm-force-border";

            for (var u = n.pos, c = u + r.length;;) {
              for (var h = void 0, f = 0; f < t.length && !((h = t[f]).to > u && h.from <= u); f++) {
                ;
              }

              if (h.to >= c) return e(n, r, i, o, a, s, l);
              e(n, r.slice(0, h.to - u), i, o, null, s, l), o = null, r = r.slice(h.to - u), u = h.to;
            }
          };
        }

        function nn(e, t, n, r) {
          var i = !r && n.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1;
        }

        function rn(e, t, n) {
          var r = e.markedSpans,
              i = e.text,
              o = 0;
          if (r) for (var a, s, l, u, c, h, f, d = i.length, p = 0, m = 1, g = "", v = 0;;) {
            if (v == p) {
              l = u = c = s = "", f = null, h = null, v = 1 / 0;

              for (var y = [], x = void 0, b = 0; b < r.length; ++b) {
                var w = r[b],
                    k = w.marker;
                if ("bookmark" == k.type && w.from == p && k.widgetNode) y.push(k);else if (w.from <= p && (null == w.to || w.to > p || k.collapsed && w.to == p && w.from == p)) {
                  if (null != w.to && w.to != p && v > w.to && (v = w.to, u = ""), k.className && (l += " " + k.className), k.css && (s = (s ? s + ";" : "") + k.css), k.startStyle && w.from == p && (c += " " + k.startStyle), k.endStyle && w.to == v && (x || (x = [])).push(k.endStyle, w.to), k.title && ((f || (f = {})).title = k.title), k.attributes) for (var C in k.attributes) {
                    (f || (f = {}))[C] = k.attributes[C];
                  }
                  k.collapsed && (!h || Ot(h.marker, k) < 0) && (h = w);
                } else w.from > p && v > w.from && (v = w.from);
              }

              if (x) for (var S = 0; S < x.length; S += 2) {
                x[S + 1] == v && (u += " " + x[S]);
              }
              if (!h || h.from == p) for (var L = 0; L < y.length; ++L) {
                nn(t, 0, y[L]);
              }

              if (h && (h.from || 0) == p) {
                if (nn(t, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from), null == h.to) return;
                h.to == p && (h = !1);
              }
            }

            if (p >= d) break;

            for (var T = Math.min(d, v);;) {
              if (g) {
                var M = p + g.length;

                if (!h) {
                  var A = M > T ? g.slice(0, T - p) : g;
                  t.addToken(t, A, a ? a + l : l, c, p + A.length == v ? u : "", s, f);
                }

                if (M >= T) {
                  g = g.slice(T - p), p = T;
                  break;
                }

                p = M, c = "";
              }

              g = i.slice(o, o = n[m++]), a = Zt(n[m++], t.cm.options);
            }
          } else for (var E = 1; E < n.length; E += 2) {
            t.addToken(t, i.slice(o, o = n[E]), Zt(n[E + 1], t.cm.options));
          }
        }

        function on(e, t, n) {
          this.line = t, this.rest = function (e) {
            for (var t, n; t = Rt(e);) {
              e = t.find(1, !0).line, (n || (n = [])).push(e);
            }

            return n;
          }(t), this.size = this.rest ? Ze(K(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = Wt(e, t);
        }

        function an(e, t, n) {
          for (var r, i = [], o = t; o < n; o = r) {
            var a = new on(e.doc, Ve(e.doc, o), o);
            r = o + a.size, i.push(a);
          }

          return i;
        }

        var sn = null;
        var ln = null;

        function un(e, t) {
          var n = de(e, t);

          if (n.length) {
            var r,
                i = Array.prototype.slice.call(arguments, 2);
            sn ? r = sn.delayedCallbacks : ln ? r = ln : (r = ln = [], setTimeout(cn, 0));

            for (var o = function o(e) {
              r.push(function () {
                return n[e].apply(null, i);
              });
            }, a = 0; a < n.length; ++a) {
              o(a);
            }
          }
        }

        function cn() {
          var e = ln;
          ln = null;

          for (var t = 0; t < e.length; ++t) {
            e[t]();
          }
        }

        function hn(e, t, n, r) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o ? pn(e, t) : "gutter" == o ? gn(e, t, n, r) : "class" == o ? mn(e, t) : "widget" == o && vn(e, t, r);
          }

          t.changes = null;
        }

        function fn(e) {
          return e.node == e.text && (e.node = E("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), a && s < 8 && (e.node.style.zIndex = 2)), e.node;
        }

        function dn(e, t) {
          var n = e.display.externalMeasured;
          return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : Jt(e, t);
        }

        function pn(e, t) {
          var n = t.text.className,
              r = dn(e, t);
          t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, mn(e, t)) : n && (t.text.className = n);
        }

        function mn(e, t) {
          !function (e, t) {
            var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
            if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);else if (n) {
              var r = fn(t);
              t.background = r.insertBefore(E("div", null, n), r.firstChild), e.display.input.setUneditable(t.background);
            }
          }(e, t), t.line.wrapClass ? fn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
          var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
          t.text.className = n || "";
        }

        function gn(e, t, n, r) {
          if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
            var i = fn(t);
            t.gutterBackground = E("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text);
          }

          var o = t.line.gutterMarkers;

          if (e.options.lineNumbers || o) {
            var a = fn(t),
                s = t.gutter = E("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
            if (e.display.input.setUneditable(s), a.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(E("div", et(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o) for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
              var u = e.display.gutterSpecs[l].className,
                  c = o.hasOwnProperty(u) && o[u];
              c && s.appendChild(E("div", [c], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[u] + "px; width: " + r.gutterWidth[u] + "px"));
            }
          }
        }

        function vn(e, t, n) {
          t.alignable && (t.alignable = null);

          for (var r = S("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o) {
            o = i.nextSibling, r.test(i.className) && t.node.removeChild(i);
          }

          xn(e, t, n);
        }

        function yn(e, t, n, r) {
          var i = dn(e, t);
          return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), mn(e, t), gn(e, t, n, r), xn(e, t, r), t.node;
        }

        function xn(e, t, n) {
          if (bn(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) {
            bn(e, t.rest[r], t, n, !1);
          }
        }

        function bn(e, t, n, r, i) {
          if (t.widgets) for (var o = fn(n), a = 0, s = t.widgets; a < s.length; ++a) {
            var l = s[a],
                u = E("div", [l.node], "CodeMirror-linewidget" + (l.className ? " " + l.className : ""));
            l.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), wn(l, u, n, r), e.display.input.setUneditable(u), i && l.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u), un(l, "redraw");
          }
        }

        function wn(e, t, n, r) {
          if (e.noHScroll) {
            (n.alignable || (n.alignable = [])).push(t);
            var i = r.wrapperWidth;
            t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px";
          }

          e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
        }

        function kn(e) {
          if (null != e.height) return e.height;
          var t = e.doc.cm;
          if (!t) return 0;

          if (!D(document.body, e.node)) {
            var n = "position: relative;";
            e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), A(t.display.measure, E("div", [e.node], null, n));
          }

          return e.height = e.node.parentNode.offsetHeight;
        }

        function Cn(e, t) {
          for (var n = Se(t); n != e.wrapper; n = n.parentNode) {
            if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0;
          }
        }

        function Sn(e) {
          return e.lineSpace.offsetTop;
        }

        function Ln(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }

        function Tn(e) {
          if (e.cachedPaddingH) return e.cachedPaddingH;
          var t = A(e.measure, E("pre", "x", "CodeMirror-line-like")),
              n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
              r = {
            left: parseInt(n.paddingLeft),
            right: parseInt(n.paddingRight)
          };
          return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
        }

        function Mn(e) {
          return _ - e.display.nativeBarWidth;
        }

        function An(e) {
          return e.display.scroller.clientWidth - Mn(e) - e.display.barWidth;
        }

        function En(e) {
          return e.display.scroller.clientHeight - Mn(e) - e.display.barHeight;
        }

        function Nn(e, t, n) {
          if (e.line == t) return {
            map: e.measure.map,
            cache: e.measure.cache
          };

          for (var r = 0; r < e.rest.length; r++) {
            if (e.rest[r] == t) return {
              map: e.measure.maps[r],
              cache: e.measure.caches[r]
            };
          }

          for (var i = 0; i < e.rest.length; i++) {
            if (Ze(e.rest[i]) > n) return {
              map: e.measure.maps[i],
              cache: e.measure.caches[i],
              before: !0
            };
          }
        }

        function Dn(e, t, n, r) {
          return In(e, On(e, t), n, r);
        }

        function Fn(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[hr(e, t)];
          var n = e.display.externalMeasured;
          return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
        }

        function On(e, t) {
          var n = Ze(t),
              r = Fn(e, n);
          r && !r.text ? r = null : r && r.changes && (hn(e, r, n, ar(e)), e.curOp.forceUpdate = !0), r || (r = function (e, t) {
            var n = Ze(t = Ht(t)),
                r = e.display.externalMeasured = new on(e.doc, t, n);
            r.lineN = n;
            var i = r.built = Jt(e, r);
            return r.text = i.pre, A(e.display.lineMeasure, i.pre), r;
          }(e, t));
          var i = Nn(r, t, n);
          return {
            line: t,
            view: r,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1
          };
        }

        function In(e, t, n, r, i) {
          t.before && (n = -1);
          var o,
              l = n + (r || "");
          return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (!function (e, t, n) {
            var r = e.options.lineWrapping,
                i = r && An(e);

            if (!t.measure.heights || r && t.measure.width != i) {
              var o = t.measure.heights = [];

              if (r) {
                t.measure.width = i;

                for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                  var l = a[s],
                      u = a[s + 1];
                  Math.abs(l.bottom - u.bottom) > 2 && o.push((l.bottom + u.top) / 2 - n.top);
                }
              }

              o.push(n.bottom - n.top);
            }
          }(e, t.view, t.rect), t.hasHeights = !0), (o = function (e, t, n, r) {
            var i,
                o = zn(t.map, n, r),
                l = o.node,
                u = o.start,
                c = o.end,
                h = o.collapse;

            if (3 == l.nodeType) {
              for (var f = 0; f < 4; f++) {
                for (; u && ie(t.line.text.charAt(o.coverStart + u));) {
                  --u;
                }

                for (; o.coverStart + c < o.coverEnd && ie(t.line.text.charAt(o.coverStart + c));) {
                  ++c;
                }

                if ((i = a && s < 9 && 0 == u && c == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : Pn(L(l, u, c).getClientRects(), r)).left || i.right || 0 == u) break;
                c = u, u -= 1, h = "right";
              }

              a && s < 11 && (i = function (e, t) {
                if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
                  if (null != Be) return Be;
                  var t = A(e, E("span", "x")),
                      n = t.getBoundingClientRect(),
                      r = L(t, 0, 1).getBoundingClientRect();
                  return Be = Math.abs(n.left - r.left) > 1;
                }(e)) return t;
                var n = screen.logicalXDPI / screen.deviceXDPI,
                    r = screen.logicalYDPI / screen.deviceYDPI;
                return {
                  left: t.left * n,
                  right: t.right * n,
                  top: t.top * r,
                  bottom: t.bottom * r
                };
              }(e.display.measure, i));
            } else {
              var d;
              u > 0 && (h = r = "right"), i = e.options.lineWrapping && (d = l.getClientRects()).length > 1 ? d["right" == r ? d.length - 1 : 0] : l.getBoundingClientRect();
            }

            if (a && s < 9 && !u && (!i || !i.left && !i.right)) {
              var p = l.parentNode.getClientRects()[0];
              i = p ? {
                left: p.left,
                right: p.left + or(e.display),
                top: p.top,
                bottom: p.bottom
              } : Rn;
            }

            for (var m = i.top - t.rect.top, g = i.bottom - t.rect.top, v = (m + g) / 2, y = t.view.measure.heights, x = 0; x < y.length - 1 && !(v < y[x]); x++) {
              ;
            }

            var b = x ? y[x - 1] : 0,
                w = y[x],
                k = {
              left: ("right" == h ? i.right : i.left) - t.rect.left,
              right: ("left" == h ? i.left : i.right) - t.rect.left,
              top: b,
              bottom: w
            };
            i.left || i.right || (k.bogus = !0);
            e.options.singleCursorHeightPerLine || (k.rtop = m, k.rbottom = g);
            return k;
          }(e, t, n, r)).bogus || (t.cache[l] = o)), {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom
          };
        }

        var Bn,
            Rn = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        };

        function zn(e, t, n) {
          for (var r, i, o, a, s, l, u = 0; u < e.length; u += 3) {
            if (s = e[u], l = e[u + 1], t < s ? (i = 0, o = 1, a = "left") : t < l ? o = (i = t - s) + 1 : (u == e.length - 3 || t == l && e[u + 3] > t) && (i = (o = l - s) - 1, t >= l && (a = "right")), null != i) {
              if (r = e[u + 2], s == l && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) {
                r = e[2 + (u -= 3)], a = "left";
              }
              if ("right" == n && i == l - s) for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) {
                r = e[(u += 3) + 2], a = "right";
              }
              break;
            }
          }

          return {
            node: r,
            start: i,
            end: o,
            collapse: a,
            coverStart: s,
            coverEnd: l
          };
        }

        function Pn(e, t) {
          var n = Rn;
          if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++) {
            ;
          } else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--) {
            ;
          }
          return n;
        }

        function Hn(e) {
          if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) {
            e.measure.caches[t] = {};
          }
        }

        function jn(e) {
          e.display.externalMeasure = null, M(e.display.lineMeasure);

          for (var t = 0; t < e.display.view.length; t++) {
            Hn(e.display.view[t]);
          }
        }

        function _n(e) {
          jn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
        }

        function Wn() {
          return c && g ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
        }

        function Un() {
          return c && g ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop;
        }

        function qn(e) {
          var t = 0;
          if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) {
            e.widgets[n].above && (t += kn(e.widgets[n]));
          }
          return t;
        }

        function $n(e, t, n, r, i) {
          if (!i) {
            var o = qn(t);
            n.top += o, n.bottom += o;
          }

          if ("line" == r) return n;
          r || (r = "local");
          var a = qt(t);

          if ("local" == r ? a += Sn(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
            var s = e.display.lineSpace.getBoundingClientRect();
            a += s.top + ("window" == r ? 0 : Un());
            var l = s.left + ("window" == r ? 0 : Wn());
            n.left += l, n.right += l;
          }

          return n.top += a, n.bottom += a, n;
        }

        function Gn(e, t, n) {
          if ("div" == n) return t;
          var r = t.left,
              i = t.top;
          if ("page" == n) r -= Wn(), i -= Un();else if ("local" == n || !n) {
            var o = e.display.sizer.getBoundingClientRect();
            r += o.left, i += o.top;
          }
          var a = e.display.lineSpace.getBoundingClientRect();
          return {
            left: r - a.left,
            top: i - a.top
          };
        }

        function Vn(e, t, n, r, i) {
          return r || (r = Ve(e.doc, t.line)), $n(e, r, Dn(e, r, t.ch, i), n);
        }

        function Xn(e, t, n, r, i, o) {
          function a(t, a) {
            var s = In(e, i, t, a ? "right" : "left", o);
            return a ? s.left = s.right : s.right = s.left, $n(e, r, s, n);
          }

          r = r || Ve(e.doc, t.line), i || (i = On(e, r));
          var s = ce(r, e.doc.direction),
              l = t.ch,
              u = t.sticky;
          if (l >= r.text.length ? (l = r.text.length, u = "before") : l <= 0 && (l = 0, u = "after"), !s) return a("before" == u ? l - 1 : l, "before" == u);

          function c(e, t, n) {
            return a(n ? e - 1 : e, 1 == s[t].level != n);
          }

          var h = le(s, l, u),
              f = se,
              d = c(l, h, "before" == u);
          return null != f && (d.other = c(l, f, "before" != u)), d;
        }

        function Kn(e, t) {
          var n = 0;
          t = lt(e.doc, t), e.options.lineWrapping || (n = or(e.display) * t.ch);
          var r = Ve(e.doc, t.line),
              i = qt(r) + Sn(e.display);
          return {
            left: n,
            right: n,
            top: i,
            bottom: i + r.height
          };
        }

        function Yn(e, t, n, r, i) {
          var o = tt(e, t, n);
          return o.xRel = i, r && (o.outside = r), o;
        }

        function Zn(e, t, n) {
          var r = e.doc;
          if ((n += e.display.viewOffset) < 0) return Yn(r.first, 0, null, -1, -1);
          var i = Je(r, n),
              o = r.first + r.size - 1;
          if (i > o) return Yn(r.first + r.size - 1, Ve(r, o).text.length, null, 1, 1);
          t < 0 && (t = 0);

          for (var a = Ve(r, i);;) {
            var s = tr(e, a, i, t, n),
                l = zt(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
            if (!l) return s;
            var u = l.find(1);
            if (u.line == i) return u;
            a = Ve(r, i = u.line);
          }
        }

        function Jn(e, t, n, r) {
          r -= qn(t);
          var i = t.text.length,
              o = ae(function (t) {
            return In(e, n, t - 1).bottom <= r;
          }, i, 0);
          return {
            begin: o,
            end: i = ae(function (t) {
              return In(e, n, t).top > r;
            }, o, i)
          };
        }

        function Qn(e, t, n, r) {
          return n || (n = On(e, t)), Jn(e, t, n, $n(e, t, In(e, n, r), "line").top);
        }

        function er(e, t, n, r) {
          return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
        }

        function tr(e, t, n, r, i) {
          i -= qt(t);
          var o = On(e, t),
              a = qn(t),
              s = 0,
              l = t.text.length,
              u = !0,
              c = ce(t, e.doc.direction);

          if (c) {
            var h = (e.options.lineWrapping ? rr : nr)(e, t, n, o, c, r, i);
            s = (u = 1 != h.level) ? h.from : h.to - 1, l = u ? h.to : h.from - 1;
          }

          var f,
              d,
              p = null,
              m = null,
              g = ae(function (t) {
            var n = In(e, o, t);
            return n.top += a, n.bottom += a, !!er(n, r, i, !1) && (n.top <= i && n.left <= r && (p = t, m = n), !0);
          }, s, l),
              v = !1;

          if (m) {
            var y = r - m.left < m.right - r,
                x = y == u;
            g = p + (x ? 0 : 1), d = x ? "after" : "before", f = y ? m.left : m.right;
          } else {
            u || g != l && g != s || g++, d = 0 == g ? "after" : g == t.text.length ? "before" : In(e, o, g - (u ? 1 : 0)).bottom + a <= i == u ? "after" : "before";
            var b = Xn(e, tt(n, g, d), "line", t, o);
            f = b.left, v = i < b.top ? -1 : i >= b.bottom ? 1 : 0;
          }

          return Yn(n, g = oe(t.text, g, 1), d, v, r - f);
        }

        function nr(e, t, n, r, i, o, a) {
          var s = ae(function (s) {
            var l = i[s],
                u = 1 != l.level;
            return er(Xn(e, tt(n, u ? l.to : l.from, u ? "before" : "after"), "line", t, r), o, a, !0);
          }, 0, i.length - 1),
              l = i[s];

          if (s > 0) {
            var u = 1 != l.level,
                c = Xn(e, tt(n, u ? l.from : l.to, u ? "after" : "before"), "line", t, r);
            er(c, o, a, !0) && c.top > a && (l = i[s - 1]);
          }

          return l;
        }

        function rr(e, t, n, r, i, o, a) {
          var s = Jn(e, t, r, a),
              l = s.begin,
              u = s.end;
          /\s/.test(t.text.charAt(u - 1)) && u--;

          for (var c = null, h = null, f = 0; f < i.length; f++) {
            var d = i[f];

            if (!(d.from >= u || d.to <= l)) {
              var p = In(e, r, 1 != d.level ? Math.min(u, d.to) - 1 : Math.max(l, d.from)).right,
                  m = p < o ? o - p + 1e9 : p - o;
              (!c || h > m) && (c = d, h = m);
            }
          }

          return c || (c = i[i.length - 1]), c.from < l && (c = {
            from: l,
            to: c.to,
            level: c.level
          }), c.to > u && (c = {
            from: c.from,
            to: u,
            level: c.level
          }), c;
        }

        function ir(e) {
          if (null != e.cachedTextHeight) return e.cachedTextHeight;

          if (null == Bn) {
            Bn = E("pre", null, "CodeMirror-line-like");

            for (var t = 0; t < 49; ++t) {
              Bn.appendChild(document.createTextNode("x")), Bn.appendChild(E("br"));
            }

            Bn.appendChild(document.createTextNode("x"));
          }

          A(e.measure, Bn);
          var n = Bn.offsetHeight / 50;
          return n > 3 && (e.cachedTextHeight = n), M(e.measure), n || 1;
        }

        function or(e) {
          if (null != e.cachedCharWidth) return e.cachedCharWidth;
          var t = E("span", "xxxxxxxxxx"),
              n = E("pre", [t], "CodeMirror-line-like");
          A(e.measure, n);
          var r = t.getBoundingClientRect(),
              i = (r.right - r.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10;
        }

        function ar(e) {
          for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
            var s = e.display.gutterSpecs[a].className;
            n[s] = o.offsetLeft + o.clientLeft + i, r[s] = o.clientWidth;
          }

          return {
            fixedPos: sr(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth
          };
        }

        function sr(e) {
          return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
        }

        function lr(e) {
          var t = ir(e.display),
              n = e.options.lineWrapping,
              r = n && Math.max(5, e.display.scroller.clientWidth / or(e.display) - 3);
          return function (i) {
            if (Wt(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets) for (var a = 0; a < i.widgets.length; a++) {
              i.widgets[a].height && (o += i.widgets[a].height);
            }
            return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
          };
        }

        function ur(e) {
          var t = e.doc,
              n = lr(e);
          t.iter(function (e) {
            var t = n(e);
            t != e.height && Ye(e, t);
          });
        }

        function cr(e, t, n, r) {
          var i = e.display;
          if (!n && "true" == Se(t).getAttribute("cm-not-content")) return null;
          var o,
              a,
              s = i.lineSpace.getBoundingClientRect();

          try {
            o = t.clientX - s.left, a = t.clientY - s.top;
          } catch (t) {
            return null;
          }

          var l,
              u = Zn(e, o, a);

          if (r && u.xRel > 0 && (l = Ve(e.doc, u.line).text).length == u.ch) {
            var c = P(l, l.length, e.options.tabSize) - l.length;
            u = tt(u.line, Math.max(0, Math.round((o - Tn(e.display).left) / or(e.display)) - c));
          }

          return u;
        }

        function hr(e, t) {
          if (t >= e.display.viewTo) return null;
          if ((t -= e.display.viewFrom) < 0) return null;

          for (var n = e.display.view, r = 0; r < n.length; r++) {
            if ((t -= n[r].size) < 0) return r;
          }
        }

        function fr(e, t, n, r) {
          null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
          var i = e.display;
          if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Ct && jt(e.doc, t) < i.viewTo && pr(e);else if (n <= i.viewFrom) Ct && _t(e.doc, n + r) > i.viewFrom ? pr(e) : (i.viewFrom += r, i.viewTo += r);else if (t <= i.viewFrom && n >= i.viewTo) pr(e);else if (t <= i.viewFrom) {
            var o = mr(e, n, n + r, 1);
            o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : pr(e);
          } else if (n >= i.viewTo) {
            var a = mr(e, t, t, -1);
            a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : pr(e);
          } else {
            var s = mr(e, t, t, -1),
                l = mr(e, n, n + r, 1);
            s && l ? (i.view = i.view.slice(0, s.index).concat(an(e, s.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += r) : pr(e);
          }
          var u = i.externalMeasured;
          u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null));
        }

        function dr(e, t, n) {
          e.curOp.viewChanged = !0;
          var r = e.display,
              i = e.display.externalMeasured;

          if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
            var o = r.view[hr(e, t)];

            if (null != o.node) {
              var a = o.changes || (o.changes = []);
              -1 == j(a, n) && a.push(n);
            }
          }
        }

        function pr(e) {
          e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
        }

        function mr(e, t, n, r) {
          var i,
              o = hr(e, t),
              a = e.display.view;
          if (!Ct || n == e.doc.first + e.doc.size) return {
            index: o,
            lineN: n
          };

          for (var s = e.display.viewFrom, l = 0; l < o; l++) {
            s += a[l].size;
          }

          if (s != t) {
            if (r > 0) {
              if (o == a.length - 1) return null;
              i = s + a[o].size - t, o++;
            } else i = s - t;

            t += i, n += i;
          }

          for (; jt(e.doc, n) != n;) {
            if (o == (r < 0 ? 0 : a.length - 1)) return null;
            n += r * a[o - (r < 0 ? 1 : 0)].size, o += r;
          }

          return {
            index: o,
            lineN: n
          };
        }

        function gr(e) {
          for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
            var i = t[r];
            i.hidden || i.node && !i.changes || ++n;
          }

          return n;
        }

        function vr(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }

        function yr(e, t) {
          void 0 === t && (t = !0);

          for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) {
            if (t || a != n.sel.primIndex) {
              var s = n.sel.ranges[a];

              if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                var l = s.empty();
                (l || e.options.showCursorWhenSelecting) && xr(e, s.head, i), l || wr(e, s, o);
              }
            }
          }

          return r;
        }

        function xr(e, t, n) {
          var r = Xn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
              i = n.appendChild(E("div", " ", "CodeMirror-cursor"));

          if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
            var o = n.appendChild(E("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = .85 * (r.other.bottom - r.other.top) + "px";
          }
        }

        function br(e, t) {
          return e.top - t.top || e.left - t.left;
        }

        function wr(e, t, n) {
          var r = e.display,
              i = e.doc,
              o = document.createDocumentFragment(),
              a = Tn(e.display),
              s = a.left,
              l = Math.max(r.sizerWidth, An(e) - r.sizer.offsetLeft) - a.right,
              u = "ltr" == i.direction;

          function c(e, t, n, r) {
            t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), o.appendChild(E("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? l - e : n) + "px;\n                             height: " + (r - t) + "px"));
          }

          function h(t, n, r) {
            var o,
                a,
                h = Ve(i, t),
                f = h.text.length;

            function d(n, r) {
              return Vn(e, tt(t, n), "div", h, r);
            }

            function p(t, n, r) {
              var i = Qn(e, h, null, t),
                  o = "ltr" == n == ("after" == r) ? "left" : "right";
              return d("after" == r ? i.begin : i.end - (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1), o)[o];
            }

            var m = ce(h, i.direction);
            return function (e, t, n, r) {
              if (!e) return r(t, n, "ltr", 0);

              for (var i = !1, o = 0; o < e.length; ++o) {
                var a = e[o];
                (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o), i = !0);
              }

              i || r(t, n, "ltr");
            }(m, n || 0, null == r ? f : r, function (e, t, i, h) {
              var g = "ltr" == i,
                  v = d(e, g ? "left" : "right"),
                  y = d(t - 1, g ? "right" : "left"),
                  x = null == n && 0 == e,
                  b = null == r && t == f,
                  w = 0 == h,
                  k = !m || h == m.length - 1;

              if (y.top - v.top <= 3) {
                var C = (u ? b : x) && k,
                    S = (u ? x : b) && w ? s : (g ? v : y).left,
                    L = C ? l : (g ? y : v).right;
                c(S, v.top, L - S, v.bottom);
              } else {
                var T, M, A, E;
                g ? (T = u && x && w ? s : v.left, M = u ? l : p(e, i, "before"), A = u ? s : p(t, i, "after"), E = u && b && k ? l : y.right) : (T = u ? p(e, i, "before") : s, M = !u && x && w ? l : v.right, A = !u && b && k ? s : y.left, E = u ? p(t, i, "after") : l), c(T, v.top, M - T, v.bottom), v.bottom < y.top && c(s, v.bottom, null, y.top), c(A, y.top, E - A, y.bottom);
              }

              (!o || br(v, o) < 0) && (o = v), br(y, o) < 0 && (o = y), (!a || br(v, a) < 0) && (a = v), br(y, a) < 0 && (a = y);
            }), {
              start: o,
              end: a
            };
          }

          var f = t.from(),
              d = t.to();
          if (f.line == d.line) h(f.line, f.ch, d.ch);else {
            var p = Ve(i, f.line),
                m = Ve(i, d.line),
                g = Ht(p) == Ht(m),
                v = h(f.line, f.ch, g ? p.text.length + 1 : null).end,
                y = h(d.line, g ? 0 : null, d.ch).start;
            g && (v.top < y.top - 2 ? (c(v.right, v.top, null, v.bottom), c(s, y.top, y.left, y.bottom)) : c(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && c(s, v.bottom, null, y.top);
          }
          n.appendChild(o);
        }

        function kr(e) {
          if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var n = !0;
            t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
              return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
            }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
          }
        }

        function Cr(e) {
          e.state.focused || (e.display.input.focus(), Lr(e));
        }

        function Sr(e) {
          e.state.delayingBlurEvent = !0, setTimeout(function () {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, Tr(e));
          }, 100);
        }

        function Lr(e, t) {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (me(e, "focus", e, t), e.state.focused = !0, O(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), l && setTimeout(function () {
            return e.display.input.reset(!0);
          }, 20)), e.display.input.receivedFocus()), kr(e));
        }

        function Tr(e, t) {
          e.state.delayingBlurEvent || (e.state.focused && (me(e, "blur", e, t), e.state.focused = !1, T(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
            e.state.focused || (e.display.shift = !1);
          }, 150));
        }

        function Mr(e) {
          for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
            var i = t.view[r],
                o = e.options.lineWrapping,
                l = void 0,
                u = 0;

            if (!i.hidden) {
              if (a && s < 8) {
                var c = i.node.offsetTop + i.node.offsetHeight;
                l = c - n, n = c;
              } else {
                var h = i.node.getBoundingClientRect();
                l = h.bottom - h.top, !o && i.text.firstChild && (u = i.text.firstChild.getBoundingClientRect().right - h.left - 1);
              }

              var f = i.line.height - l;
              if ((f > .005 || f < -.005) && (Ye(i.line, l), Ar(i.line), i.rest)) for (var d = 0; d < i.rest.length; d++) {
                Ar(i.rest[d]);
              }

              if (u > e.display.sizerWidth) {
                var p = Math.ceil(u / or(e.display));
                p > e.display.maxLineLength && (e.display.maxLineLength = p, e.display.maxLine = i.line, e.display.maxLineChanged = !0);
              }
            }
          }
        }

        function Ar(e) {
          if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
            var n = e.widgets[t],
                r = n.node.parentNode;
            r && (n.height = r.offsetHeight);
          }
        }

        function Er(e, t, n) {
          var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
          r = Math.floor(r - Sn(e));
          var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
              o = Je(t, r),
              a = Je(t, i);

          if (n && n.ensure) {
            var s = n.ensure.from.line,
                l = n.ensure.to.line;
            s < o ? (o = s, a = Je(t, qt(Ve(t, s)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= a && (o = Je(t, qt(Ve(t, l)) - e.wrapper.clientHeight), a = l);
          }

          return {
            from: o,
            to: Math.max(a, o + 1)
          };
        }

        function Nr(e, t) {
          var n = e.display,
              r = ir(e.display);
          t.top < 0 && (t.top = 0);
          var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
              o = En(e),
              a = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var s = e.doc.height + Ln(n),
              l = t.top < r,
              u = t.bottom > s - r;
          if (t.top < i) a.scrollTop = l ? 0 : t.top;else if (t.bottom > i + o) {
            var c = Math.min(t.top, (u ? s : t.bottom) - o);
            c != i && (a.scrollTop = c);
          }
          var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
              f = An(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
              d = t.right - t.left > f;
          return d && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < h ? a.scrollLeft = Math.max(0, t.left - (d ? 0 : 10)) : t.right > f + h - 3 && (a.scrollLeft = t.right + (d ? 0 : 10) - f), a;
        }

        function Dr(e, t) {
          null != t && (Ir(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t);
        }

        function Fr(e) {
          Ir(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin
          };
        }

        function Or(e, t, n) {
          null == t && null == n || Ir(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n);
        }

        function Ir(e) {
          var t = e.curOp.scrollToPos;
          t && (e.curOp.scrollToPos = null, Br(e, Kn(e, t.from), Kn(e, t.to), t.margin));
        }

        function Br(e, t, n, r) {
          var i = Nr(e, {
            left: Math.min(t.left, n.left),
            top: Math.min(t.top, n.top) - r,
            right: Math.max(t.right, n.right),
            bottom: Math.max(t.bottom, n.bottom) + r
          });
          Or(e, i.scrollLeft, i.scrollTop);
        }

        function Rr(e, t) {
          Math.abs(e.doc.scrollTop - t) < 2 || (n || li(e, {
            top: t
          }), zr(e, t, !0), n && li(e), ri(e, 100));
        }

        function zr(e, t, n) {
          t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
        }

        function Pr(e, t, n, r) {
          t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, hi(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
        }

        function Hr(e) {
          var t = e.display,
              n = t.gutters.offsetWidth,
              r = Math.round(e.doc.height + Ln(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? n : 0,
            docHeight: r,
            scrollHeight: r + Mn(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: n
          };
        }

        var jr = function jr(e, t, n) {
          this.cm = n;
          var r = this.vert = E("div", [E("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
              i = this.horiz = E("div", [E("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
          r.tabIndex = i.tabIndex = -1, e(r), e(i), fe(r, "scroll", function () {
            r.clientHeight && t(r.scrollTop, "vertical");
          }), fe(i, "scroll", function () {
            i.clientWidth && t(i.scrollLeft, "horizontal");
          }), this.checkedZeroWidth = !1, a && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
        };

        jr.prototype.update = function (e) {
          var t = e.scrollWidth > e.clientWidth + 1,
              n = e.scrollHeight > e.clientHeight + 1,
              r = e.nativeBarWidth;

          if (n) {
            this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
            var i = e.viewHeight - (t ? r : 0);
            this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
          } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";

          if (t) {
            this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
            var o = e.viewWidth - e.barLeft - (n ? r : 0);
            this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
          } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";

          return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
            right: n ? r : 0,
            bottom: t ? r : 0
          };
        }, jr.prototype.setScrollLeft = function (e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
        }, jr.prototype.setScrollTop = function (e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
        }, jr.prototype.zeroWidthHack = function () {
          var e = y && !d ? "12px" : "18px";
          this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new H(), this.disableVert = new H();
        }, jr.prototype.enableZeroWidthBar = function (e, t, n) {
          e.style.pointerEvents = "auto", t.set(1e3, function r() {
            var i = e.getBoundingClientRect();
            ("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, r);
          });
        }, jr.prototype.clear = function () {
          var e = this.horiz.parentNode;
          e.removeChild(this.horiz), e.removeChild(this.vert);
        };

        var _r = function _r() {};

        function Wr(e, t) {
          t || (t = Hr(e));
          var n = e.display.barWidth,
              r = e.display.barHeight;
          Ur(e, t);

          for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) {
            n != e.display.barWidth && e.options.lineWrapping && Mr(e), Ur(e, Hr(e)), n = e.display.barWidth, r = e.display.barHeight;
          }
        }

        function Ur(e, t) {
          var n = e.display,
              r = n.scrollbars.update(t);
          n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "";
        }

        _r.prototype.update = function () {
          return {
            bottom: 0,
            right: 0
          };
        }, _r.prototype.setScrollLeft = function () {}, _r.prototype.setScrollTop = function () {}, _r.prototype.clear = function () {};
        var qr = {
          native: jr,
          null: _r
        };

        function $r(e) {
          e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && T(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new qr[e.options.scrollbarStyle](function (t) {
            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), fe(t, "mousedown", function () {
              e.state.focused && setTimeout(function () {
                return e.display.input.focus();
              }, 0);
            }), t.setAttribute("cm-not-content", "true");
          }, function (t, n) {
            "horizontal" == n ? Pr(e, t) : Rr(e, t);
          }, e), e.display.scrollbars.addClass && O(e.display.wrapper, e.display.scrollbars.addClass);
        }

        var Gr = 0;

        function Vr(e) {
          var t;
          e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Gr
          }, t = e.curOp, sn ? sn.ops.push(t) : t.ownsGroup = sn = {
            ops: [t],
            delayedCallbacks: []
          };
        }

        function Xr(e) {
          var t = e.curOp;
          t && function (e, t) {
            var n = e.ownsGroup;
            if (n) try {
              !function (e) {
                var t = e.delayedCallbacks,
                    n = 0;

                do {
                  for (; n < t.length; n++) {
                    t[n].call(null);
                  }

                  for (var r = 0; r < e.ops.length; r++) {
                    var i = e.ops[r];
                    if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) {
                      i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                    }
                  }
                } while (n < t.length);
              }(n);
            } finally {
              sn = null, t(n);
            }
          }(t, function (e) {
            for (var t = 0; t < e.ops.length; t++) {
              e.ops[t].cm.curOp = null;
            }

            !function (e) {
              for (var t = e.ops, n = 0; n < t.length; n++) {
                Kr(t[n]);
              }

              for (var r = 0; r < t.length; r++) {
                (i = t[r]).updatedDisplay = i.mustUpdate && ai(i.cm, i.update);
              }

              var i;

              for (var o = 0; o < t.length; o++) {
                Yr(t[o]);
              }

              for (var a = 0; a < t.length; a++) {
                Zr(t[a]);
              }

              for (var s = 0; s < t.length; s++) {
                Jr(t[s]);
              }
            }(e);
          });
        }

        function Kr(e) {
          var t = e.cm,
              n = t.display;
          !function (e) {
            var t = e.display;
            !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Mn(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Mn(e) + "px", t.scrollbarsClipped = !0);
          }(t), e.updateMaxLine && Gt(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new oi(t, e.mustUpdate && {
            top: e.scrollTop,
            ensure: e.scrollToPos
          }, e.forceUpdate);
        }

        function Yr(e) {
          var t = e.cm,
              n = t.display;
          e.updatedDisplay && Mr(t), e.barMeasure = Hr(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Dn(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Mn(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - An(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
        }

        function Zr(e) {
          var t = e.cm;
          null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Pr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
          var n = e.focus && e.focus == F();
          e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Wr(t, e.barMeasure), e.updatedDisplay && ci(t, e.barMeasure), e.selectionChanged && kr(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && Cr(e.cm);
        }

        function Jr(e) {
          var t = e.cm,
              n = t.display,
              r = t.doc;
          (e.updatedDisplay && si(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && zr(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Pr(t, e.scrollLeft, !0, !0), e.scrollToPos) && function (e, t) {
            if (!ge(e, "scrollCursorIntoView")) {
              var n = e.display,
                  r = n.sizer.getBoundingClientRect(),
                  i = null;

              if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p) {
                var o = E("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Sn(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Mn(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
              }
            }
          }(t, function (e, t, n, r) {
            var i;
            null == r && (r = 0), e.options.lineWrapping || t != n || (n = "before" == (t = t.ch ? tt(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? tt(t.line, t.ch + 1, "before") : t);

            for (var o = 0; o < 5; o++) {
              var a = !1,
                  s = Xn(e, t),
                  l = n && n != t ? Xn(e, n) : s,
                  u = Nr(e, i = {
                left: Math.min(s.left, l.left),
                top: Math.min(s.top, l.top) - r,
                right: Math.max(s.left, l.left),
                bottom: Math.max(s.bottom, l.bottom) + r
              }),
                  c = e.doc.scrollTop,
                  h = e.doc.scrollLeft;
              if (null != u.scrollTop && (Rr(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)), null != u.scrollLeft && (Pr(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - h) > 1 && (a = !0)), !a) break;
            }

            return i;
          }(t, lt(r, e.scrollToPos.from), lt(r, e.scrollToPos.to), e.scrollToPos.margin));
          var i = e.maybeHiddenMarkers,
              o = e.maybeUnhiddenMarkers;
          if (i) for (var a = 0; a < i.length; ++a) {
            i[a].lines.length || me(i[a], "hide");
          }
          if (o) for (var s = 0; s < o.length; ++s) {
            o[s].lines.length && me(o[s], "unhide");
          }
          n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && me(t, "changes", t, e.changeObjs), e.update && e.update.finish();
        }

        function Qr(e, t) {
          if (e.curOp) return t();
          Vr(e);

          try {
            return t();
          } finally {
            Xr(e);
          }
        }

        function ei(e, t) {
          return function () {
            if (e.curOp) return t.apply(e, arguments);
            Vr(e);

            try {
              return t.apply(e, arguments);
            } finally {
              Xr(e);
            }
          };
        }

        function ti(e) {
          return function () {
            if (this.curOp) return e.apply(this, arguments);
            Vr(this);

            try {
              return e.apply(this, arguments);
            } finally {
              Xr(this);
            }
          };
        }

        function ni(e) {
          return function () {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            Vr(t);

            try {
              return e.apply(this, arguments);
            } finally {
              Xr(t);
            }
          };
        }

        function ri(e, t) {
          e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, R(ii, e));
        }

        function ii(e) {
          var t = e.doc;

          if (!(t.highlightFrontier >= e.display.viewTo)) {
            var n = +new Date() + e.options.workTime,
                r = pt(e, t.highlightFrontier),
                i = [];
            t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
              if (r.line >= e.display.viewFrom) {
                var a = o.styles,
                    s = o.text.length > e.options.maxHighlightLength ? Ue(t.mode, r.state) : null,
                    l = ft(e, o, r, !0);
                s && (r.state = s), o.styles = l.styles;
                var u = o.styleClasses,
                    c = l.classes;
                c ? o.styleClasses = c : u && (o.styleClasses = null);

                for (var h = !a || a.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), f = 0; !h && f < a.length; ++f) {
                  h = a[f] != o.styles[f];
                }

                h && i.push(r.line), o.stateAfter = r.save(), r.nextLine();
              } else o.text.length <= e.options.maxHighlightLength && mt(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();

              if (+new Date() > n) return ri(e, e.options.workDelay), !0;
            }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && Qr(e, function () {
              for (var t = 0; t < i.length; t++) {
                dr(e, i[t], "text");
              }
            });
          }
        }

        var oi = function oi(e, t, n) {
          var r = e.display;
          this.viewport = t, this.visible = Er(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = An(e), this.force = n, this.dims = ar(e), this.events = [];
        };

        function ai(e, t) {
          var n = e.display,
              r = e.doc;
          if (t.editorIsHidden) return pr(e), !1;
          if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == gr(e)) return !1;
          fi(e) && (pr(e), t.dims = ar(e));
          var i = r.first + r.size,
              o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
              a = Math.min(i, t.visible.to + e.options.viewportMargin);
          n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)), Ct && (o = jt(e.doc, o), a = _t(e.doc, a));
          var s = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
          !function (e, t, n) {
            var r = e.display;
            0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = an(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = an(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(hr(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(an(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, hr(e, n)))), r.viewTo = n;
          }(e, o, a), n.viewOffset = qt(Ve(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
          var u = gr(e);
          if (!s && 0 == u && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;

          var c = function (e) {
            if (e.hasFocus()) return null;
            var t = F();
            if (!t || !D(e.display.lineDiv, t)) return null;
            var n = {
              activeElt: t
            };

            if (window.getSelection) {
              var r = window.getSelection();
              r.anchorNode && r.extend && D(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset);
            }

            return n;
          }(e);

          return u > 4 && (n.lineDiv.style.display = "none"), function (e, t, n) {
            var r = e.display,
                i = e.options.lineNumbers,
                o = r.lineDiv,
                a = o.firstChild;

            function s(t) {
              var n = t.nextSibling;
              return l && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n;
            }

            for (var u = r.view, c = r.viewFrom, h = 0; h < u.length; h++) {
              var f = u[h];
              if (f.hidden) ;else if (f.node && f.node.parentNode == o) {
                for (; a != f.node;) {
                  a = s(a);
                }

                var d = i && null != t && t <= c && f.lineNumber;
                f.changes && (j(f.changes, "gutter") > -1 && (d = !1), hn(e, f, c, n)), d && (M(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(et(e.options, c)))), a = f.node.nextSibling;
              } else {
                var p = yn(e, f, c, n);
                o.insertBefore(p, a);
              }
              c += f.size;
            }

            for (; a;) {
              a = s(a);
            }
          }(e, n.updateLineNumbers, t.dims), u > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, function (e) {
            if (e && e.activeElt && e.activeElt != F() && (e.activeElt.focus(), e.anchorNode && D(document.body, e.anchorNode) && D(document.body, e.focusNode))) {
              var t = window.getSelection(),
                  n = document.createRange();
              n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset);
            }
          }(c), M(n.cursorDiv), M(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, s && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, ri(e, 400)), n.updateLineNumbers = null, !0;
        }

        function si(e, t) {
          for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != An(e) || (n && null != n.top && (n = {
            top: Math.min(e.doc.height + Ln(e.display) - En(e), n.top)
          }), t.visible = Er(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && ai(e, t); r = !1) {
            Mr(e);
            var i = Hr(e);
            vr(e), Wr(e, i), ci(e, i), t.force = !1;
          }

          t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
        }

        function li(e, t) {
          var n = new oi(e, t);

          if (ai(e, n)) {
            Mr(e), si(e, n);
            var r = Hr(e);
            vr(e), Wr(e, r), ci(e, r), n.finish();
          }
        }

        function ui(e) {
          var t = e.gutters.offsetWidth;
          e.sizer.style.marginLeft = t + "px";
        }

        function ci(e, t) {
          e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Mn(e) + "px";
        }

        function hi(e) {
          var t = e.display,
              n = t.view;

          if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
            for (var r = sr(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++) {
              if (!n[a].hidden) {
                e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                var s = n[a].alignable;
                if (s) for (var l = 0; l < s.length; l++) {
                  s[l].style.left = o;
                }
              }
            }

            e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
          }
        }

        function fi(e) {
          if (!e.options.lineNumbers) return !1;
          var t = e.doc,
              n = et(e.options, t.first + t.size - 1),
              r = e.display;

          if (n.length != r.lineNumChars) {
            var i = r.measure.appendChild(E("div", [E("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                o = i.firstChild.offsetWidth,
                a = i.offsetWidth - o;
            return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1, r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", ui(e.display), !0;
          }

          return !1;
        }

        function di(e, t) {
          for (var n = [], r = !1, i = 0; i < e.length; i++) {
            var o = e[i],
                a = null;

            if ("string" != typeof o && (a = o.style, o = o.className), "CodeMirror-linenumbers" == o) {
              if (!t) continue;
              r = !0;
            }

            n.push({
              className: o,
              style: a
            });
          }

          return t && !r && n.push({
            className: "CodeMirror-linenumbers",
            style: null
          }), n;
        }

        function pi(e) {
          var t = e.gutters,
              n = e.gutterSpecs;
          M(t), e.lineGutter = null;

          for (var r = 0; r < n.length; ++r) {
            var i = n[r],
                o = i.className,
                a = i.style,
                s = t.appendChild(E("div", null, "CodeMirror-gutter " + o));
            a && (s.style.cssText = a), "CodeMirror-linenumbers" == o && (e.lineGutter = s, s.style.width = (e.lineNumWidth || 1) + "px");
          }

          t.style.display = n.length ? "" : "none", ui(e);
        }

        function mi(e) {
          pi(e.display), fr(e), hi(e);
        }

        function gi(e, t, r, i) {
          var o = this;
          this.input = r, o.scrollbarFiller = E("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = E("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = N("div", null, "CodeMirror-code"), o.selectionDiv = E("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = E("div", null, "CodeMirror-cursors"), o.measure = E("div", null, "CodeMirror-measure"), o.lineMeasure = E("div", null, "CodeMirror-measure"), o.lineSpace = N("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
          var u = N("div", [o.lineSpace], "CodeMirror-lines");
          o.mover = E("div", [u], null, "position: relative"), o.sizer = E("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = E("div", null, null, "position: absolute; height: " + _ + "px; width: 1px;"), o.gutters = E("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = E("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = E("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), a && s < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), l || n && v || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = di(i.gutters, i.lineNumbers), pi(o), r.init(o);
        }

        oi.prototype.signal = function (e, t) {
          ye(e, t) && this.events.push(arguments);
        }, oi.prototype.finish = function () {
          for (var e = 0; e < this.events.length; e++) {
            me.apply(null, this.events[e]);
          }
        };
        var vi = 0,
            yi = null;

        function xi(e) {
          var t = e.wheelDeltaX,
              n = e.wheelDeltaY;
          return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
            x: t,
            y: n
          };
        }

        function bi(e) {
          var t = xi(e);
          return t.x *= yi, t.y *= yi, t;
        }

        function wi(e, t) {
          var r = xi(t),
              i = r.x,
              o = r.y,
              a = e.display,
              s = a.scroller,
              u = s.scrollWidth > s.clientWidth,
              c = s.scrollHeight > s.clientHeight;

          if (i && u || o && c) {
            if (o && y && l) e: for (var f = t.target, d = a.view; f != s; f = f.parentNode) {
              for (var p = 0; p < d.length; p++) {
                if (d[p].node == f) {
                  e.display.currentWheelTarget = f;
                  break e;
                }
              }
            }
            if (i && !n && !h && null != yi) return o && c && Rr(e, Math.max(0, s.scrollTop + o * yi)), Pr(e, Math.max(0, s.scrollLeft + i * yi)), (!o || o && c) && be(t), void (a.wheelStartX = null);

            if (o && null != yi) {
              var m = o * yi,
                  g = e.doc.scrollTop,
                  v = g + a.wrapper.clientHeight;
              m < 0 ? g = Math.max(0, g + m - 50) : v = Math.min(e.doc.height, v + m + 50), li(e, {
                top: g,
                bottom: v
              });
            }

            vi < 20 && (null == a.wheelStartX ? (a.wheelStartX = s.scrollLeft, a.wheelStartY = s.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout(function () {
              if (null != a.wheelStartX) {
                var e = s.scrollLeft - a.wheelStartX,
                    t = s.scrollTop - a.wheelStartY,
                    n = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
                a.wheelStartX = a.wheelStartY = null, n && (yi = (yi * vi + n) / (vi + 1), ++vi);
              }
            }, 200)) : (a.wheelDX += i, a.wheelDY += o));
          }
        }

        a ? yi = -.53 : n ? yi = 15 : c ? yi = -.7 : f && (yi = -1 / 3);

        var ki = function ki(e, t) {
          this.ranges = e, this.primIndex = t;
        };

        ki.prototype.primary = function () {
          return this.ranges[this.primIndex];
        }, ki.prototype.equals = function (e) {
          if (e == this) return !0;
          if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;

          for (var t = 0; t < this.ranges.length; t++) {
            var n = this.ranges[t],
                r = e.ranges[t];
            if (!rt(n.anchor, r.anchor) || !rt(n.head, r.head)) return !1;
          }

          return !0;
        }, ki.prototype.deepCopy = function () {
          for (var e = [], t = 0; t < this.ranges.length; t++) {
            e[t] = new Ci(it(this.ranges[t].anchor), it(this.ranges[t].head));
          }

          return new ki(e, this.primIndex);
        }, ki.prototype.somethingSelected = function () {
          for (var e = 0; e < this.ranges.length; e++) {
            if (!this.ranges[e].empty()) return !0;
          }

          return !1;
        }, ki.prototype.contains = function (e, t) {
          t || (t = e);

          for (var n = 0; n < this.ranges.length; n++) {
            var r = this.ranges[n];
            if (nt(t, r.from()) >= 0 && nt(e, r.to()) <= 0) return n;
          }

          return -1;
        };

        var Ci = function Ci(e, t) {
          this.anchor = e, this.head = t;
        };

        function Si(e, t, n) {
          var r = e && e.options.selectionsMayTouch,
              i = t[n];
          t.sort(function (e, t) {
            return nt(e.from(), t.from());
          }), n = j(t, i);

          for (var o = 1; o < t.length; o++) {
            var a = t[o],
                s = t[o - 1],
                l = nt(s.to(), a.from());

            if (r && !a.empty() ? l > 0 : l >= 0) {
              var u = at(s.from(), a.from()),
                  c = ot(s.to(), a.to()),
                  h = s.empty() ? a.from() == a.head : s.from() == s.head;
              o <= n && --n, t.splice(--o, 2, new Ci(h ? c : u, h ? u : c));
            }
          }

          return new ki(t, n);
        }

        function Li(e, t) {
          return new ki([new Ci(e, t || e)], 0);
        }

        function Ti(e) {
          return e.text ? tt(e.from.line + e.text.length - 1, K(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
        }

        function Mi(e, t) {
          if (nt(e, t.from) < 0) return e;
          if (nt(e, t.to) <= 0) return Ti(t);
          var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
              r = e.ch;
          return e.line == t.to.line && (r += Ti(t).ch - t.to.ch), tt(n, r);
        }

        function Ai(e, t) {
          for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new Ci(Mi(i.anchor, t), Mi(i.head, t)));
          }

          return Si(e.cm, n, e.sel.primIndex);
        }

        function Ei(e, t, n) {
          return e.line == t.line ? tt(n.line, e.ch - t.ch + n.ch) : tt(n.line + (e.line - t.line), e.ch);
        }

        function Ni(e) {
          e.doc.mode = je(e.options, e.doc.modeOption), Di(e);
        }

        function Di(e) {
          e.doc.iter(function (e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
          }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, ri(e, 100), e.state.modeGen++, e.curOp && fr(e);
        }

        function Fi(e, t) {
          return 0 == t.from.ch && 0 == t.to.ch && "" == K(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
        }

        function Oi(e, t, n, r) {
          function i(e) {
            return n ? n[e] : null;
          }

          function o(e, n, i) {
            !function (e, t, n, r) {
              e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Et(e), Nt(e, n);
              var i = r ? r(e) : 1;
              i != e.height && Ye(e, i);
            }(e, n, i, r), un(e, "change", e, t);
          }

          function a(e, t) {
            for (var n = [], o = e; o < t; ++o) {
              n.push(new Vt(u[o], i(o), r));
            }

            return n;
          }

          var s = t.from,
              l = t.to,
              u = t.text,
              c = Ve(e, s.line),
              h = Ve(e, l.line),
              f = K(u),
              d = i(u.length - 1),
              p = l.line - s.line;
          if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);else if (Fi(e, t)) {
            var m = a(0, u.length - 1);
            o(h, h.text, d), p && e.remove(s.line, p), m.length && e.insert(s.line, m);
          } else if (c == h) {
            if (1 == u.length) o(c, c.text.slice(0, s.ch) + f + c.text.slice(l.ch), d);else {
              var g = a(1, u.length - 1);
              g.push(new Vt(f + c.text.slice(l.ch), d, r)), o(c, c.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, g);
            }
          } else if (1 == u.length) o(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(l.ch), i(0)), e.remove(s.line + 1, p);else {
            o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(h, f + h.text.slice(l.ch), d);
            var v = a(1, u.length - 1);
            p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, v);
          }
          un(e, "change", e, t);
        }

        function Ii(e, t, n) {
          !function e(r, i, o) {
            if (r.linked) for (var a = 0; a < r.linked.length; ++a) {
              var s = r.linked[a];

              if (s.doc != i) {
                var l = o && s.sharedHist;
                n && !l || (t(s.doc, l), e(s.doc, r, l));
              }
            }
          }(e, null, !0);
        }

        function Bi(e, t) {
          if (t.cm) throw new Error("This document is already in use.");
          e.doc = t, t.cm = e, ur(e), Ni(e), Ri(e), e.options.lineWrapping || Gt(e), e.options.mode = t.modeOption, fr(e);
        }

        function Ri(e) {
          ("rtl" == e.doc.direction ? O : T)(e.display.lineDiv, "CodeMirror-rtl");
        }

        function zi(e) {
          this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1;
        }

        function Pi(e, t) {
          var n = {
            from: it(t.from),
            to: Ti(t),
            text: Xe(e, t.from, t.to)
          };
          return Ui(e, n, t.from.line, t.to.line + 1), Ii(e, function (e) {
            return Ui(e, n, t.from.line, t.to.line + 1);
          }, !0), n;
        }

        function Hi(e) {
          for (; e.length;) {
            if (!K(e).ranges) break;
            e.pop();
          }
        }

        function ji(e, t, n, r) {
          var i = e.history;
          i.undone.length = 0;
          var o,
              a,
              s = +new Date();
          if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = function (e, t) {
            return t ? (Hi(e.done), K(e.done)) : e.done.length && !K(e.done).ranges ? K(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), K(e.done)) : void 0;
          }(i, i.lastOp == r))) a = K(o.changes), 0 == nt(t.from, t.to) && 0 == nt(t.from, a.to) ? a.to = Ti(t) : o.changes.push(Pi(e, t));else {
            var l = K(i.done);

            for (l && l.ranges || Wi(e.sel, i.done), o = {
              changes: [Pi(e, t)],
              generation: i.generation
            }, i.done.push(o); i.done.length > i.undoDepth;) {
              i.done.shift(), i.done[0].ranges || i.done.shift();
            }
          }
          i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || me(e, "historyAdded");
        }

        function _i(e, t, n, r) {
          var i = e.history,
              o = r && r.origin;
          n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function (e, t, n, r) {
            var i = t.charAt(0);
            return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
          }(e, o, K(i.done), t)) ? i.done[i.done.length - 1] = t : Wi(t, i.done), i.lastSelTime = +new Date(), i.lastSelOrigin = o, i.lastSelOp = n, r && !1 !== r.clearRedo && Hi(i.undone);
        }

        function Wi(e, t) {
          var n = K(t);
          n && n.ranges && n.equals(e) || t.push(e);
        }

        function Ui(e, t, n, r) {
          var i = t["spans_" + e.id],
              o = 0;
          e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
            n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o;
          });
        }

        function qi(e) {
          if (!e) return null;

          for (var t, n = 0; n < e.length; ++n) {
            e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
          }

          return t ? t.length ? t : null : e;
        }

        function $i(e, t) {
          var n = function (e, t) {
            var n = t["spans_" + e.id];
            if (!n) return null;

            for (var r = [], i = 0; i < t.text.length; ++i) {
              r.push(qi(n[i]));
            }

            return r;
          }(e, t),
              r = Mt(e, t);

          if (!n) return r;
          if (!r) return n;

          for (var i = 0; i < n.length; ++i) {
            var o = n[i],
                a = r[i];
            if (o && a) e: for (var s = 0; s < a.length; ++s) {
              for (var l = a[s], u = 0; u < o.length; ++u) {
                if (o[u].marker == l.marker) continue e;
              }

              o.push(l);
            } else a && (n[i] = a);
          }

          return n;
        }

        function Gi(e, t, n) {
          for (var r = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) r.push(n ? ki.prototype.deepCopy.call(o) : o);else {
              var a = o.changes,
                  s = [];
              r.push({
                changes: s
              });

              for (var l = 0; l < a.length; ++l) {
                var u = a[l],
                    c = void 0;
                if (s.push({
                  from: u.from,
                  to: u.to,
                  text: u.text
                }), t) for (var h in u) {
                  (c = h.match(/^spans_(\d+)$/)) && j(t, Number(c[1])) > -1 && (K(s)[h] = u[h], delete u[h]);
                }
              }
            }
          }

          return r;
        }

        function Vi(e, t, n, r) {
          if (r) {
            var i = e.anchor;

            if (n) {
              var o = nt(t, i) < 0;
              o != nt(n, i) < 0 ? (i = t, t = n) : o != nt(t, n) < 0 && (t = n);
            }

            return new Ci(i, t);
          }

          return new Ci(n || t, t);
        }

        function Xi(e, t, n, r, i) {
          null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Qi(e, new ki([Vi(e.sel.primary(), t, n, i)], 0), r);
        }

        function Ki(e, t, n) {
          for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) {
            r[o] = Vi(e.sel.ranges[o], t[o], null, i);
          }

          Qi(e, Si(e.cm, r, e.sel.primIndex), n);
        }

        function Yi(e, t, n, r) {
          var i = e.sel.ranges.slice(0);
          i[t] = n, Qi(e, Si(e.cm, i, e.sel.primIndex), r);
        }

        function Zi(e, t, n, r) {
          Qi(e, Li(t, n), r);
        }

        function Ji(e, t, n) {
          var r = e.history.done,
              i = K(r);
          i && i.ranges ? (r[r.length - 1] = t, eo(e, t, n)) : Qi(e, t, n);
        }

        function Qi(e, t, n) {
          eo(e, t, n), _i(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
        }

        function eo(e, t, n) {
          (ye(e, "beforeSelectionChange") || e.cm && ye(e.cm, "beforeSelectionChange")) && (t = function (e, t, n) {
            var r = {
              ranges: t.ranges,
              update: function update(t) {
                this.ranges = [];

                for (var n = 0; n < t.length; n++) {
                  this.ranges[n] = new Ci(lt(e, t[n].anchor), lt(e, t[n].head));
                }
              },
              origin: n && n.origin
            };
            return me(e, "beforeSelectionChange", e, r), e.cm && me(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? Si(e.cm, r.ranges, r.ranges.length - 1) : t;
          }(e, t, n));
          var r = n && n.bias || (nt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          to(e, ro(e, t, r, !0)), n && !1 === n.scroll || !e.cm || Fr(e.cm);
        }

        function to(e, t) {
          t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, ve(e.cm)), un(e, "cursorActivity", e));
        }

        function no(e) {
          to(e, ro(e, e.sel, null, !1));
        }

        function ro(e, t, n, r) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var a = t.ranges[o],
                s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                l = oo(e, a.anchor, s && s.anchor, n, r),
                u = oo(e, a.head, s && s.head, n, r);
            (i || l != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new Ci(l, u));
          }

          return i ? Si(e.cm, i, t.primIndex) : t;
        }

        function io(e, t, n, r, i) {
          var o = Ve(e, t.line);
          if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
            var s = o.markedSpans[a],
                l = s.marker,
                u = "selectLeft" in l ? !l.selectLeft : l.inclusiveLeft,
                c = "selectRight" in l ? !l.selectRight : l.inclusiveRight;

            if ((null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))) {
              if (i && (me(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                if (o.markedSpans) {
                  --a;
                  continue;
                }

                break;
              }

              if (!l.atomic) continue;

              if (n) {
                var h = l.find(r < 0 ? 1 : -1),
                    f = void 0;
                if ((r < 0 ? c : u) && (h = ao(e, h, -r, h && h.line == t.line ? o : null)), h && h.line == t.line && (f = nt(h, n)) && (r < 0 ? f < 0 : f > 0)) return io(e, h, t, r, i);
              }

              var d = l.find(r < 0 ? -1 : 1);
              return (r < 0 ? u : c) && (d = ao(e, d, r, d.line == t.line ? o : null)), d ? io(e, d, t, r, i) : null;
            }
          }
          return t;
        }

        function oo(e, t, n, r, i) {
          var o = r || 1,
              a = io(e, t, n, o, i) || !i && io(e, t, n, o, !0) || io(e, t, n, -o, i) || !i && io(e, t, n, -o, !0);
          return a || (e.cantEdit = !0, tt(e.first, 0));
        }

        function ao(e, t, n, r) {
          return n < 0 && 0 == t.ch ? t.line > e.first ? lt(e, tt(t.line - 1)) : null : n > 0 && t.ch == (r || Ve(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? tt(t.line + 1, 0) : null : new tt(t.line, t.ch + n);
        }

        function so(e) {
          e.setSelection(tt(e.firstLine(), 0), tt(e.lastLine()), U);
        }

        function lo(e, t, n) {
          var r = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function cancel() {
              return r.canceled = !0;
            }
          };
          return n && (r.update = function (t, n, i, o) {
            t && (r.from = lt(e, t)), n && (r.to = lt(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o);
          }), me(e, "beforeChange", e, r), e.cm && me(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
            from: r.from,
            to: r.to,
            text: r.text,
            origin: r.origin
          };
        }

        function uo(e, t, n) {
          if (e.cm) {
            if (!e.cm.curOp) return ei(e.cm, uo)(e, t, n);
            if (e.cm.state.suppressEdits) return;
          }

          if (!(ye(e, "beforeChange") || e.cm && ye(e.cm, "beforeChange")) || (t = lo(e, t, !0))) {
            var r = kt && !n && function (e, t, n) {
              var r = null;
              if (e.iter(t.line, n.line + 1, function (e) {
                if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                  var n = e.markedSpans[t].marker;
                  !n.readOnly || r && -1 != j(r, n) || (r || (r = [])).push(n);
                }
              }), !r) return null;

              for (var i = [{
                from: t,
                to: n
              }], o = 0; o < r.length; ++o) {
                for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
                  var u = i[l];

                  if (!(nt(u.to, s.from) < 0 || nt(u.from, s.to) > 0)) {
                    var c = [l, 1],
                        h = nt(u.from, s.from),
                        f = nt(u.to, s.to);
                    (h < 0 || !a.inclusiveLeft && !h) && c.push({
                      from: u.from,
                      to: s.from
                    }), (f > 0 || !a.inclusiveRight && !f) && c.push({
                      from: s.to,
                      to: u.to
                    }), i.splice.apply(i, c), l += c.length - 3;
                  }
                }
              }

              return i;
            }(e, t.from, t.to);

            if (r) for (var i = r.length - 1; i >= 0; --i) {
              co(e, {
                from: r[i].from,
                to: r[i].to,
                text: i ? [""] : t.text,
                origin: t.origin
              });
            } else co(e, t);
          }
        }

        function co(e, t) {
          if (1 != t.text.length || "" != t.text[0] || 0 != nt(t.from, t.to)) {
            var n = Ai(e, t);
            ji(e, t, n, e.cm ? e.cm.curOp.id : NaN), po(e, t, n, Mt(e, t));
            var r = [];
            Ii(e, function (e, n) {
              n || -1 != j(r, e.history) || (yo(e.history, t), r.push(e.history)), po(e, t, null, Mt(e, t));
            });
          }
        }

        function ho(e, t, n) {
          var r = e.cm && e.cm.state.suppressEdits;

          if (!r || n) {
            for (var i, o = e.history, a = e.sel, s = "undo" == t ? o.done : o.undone, l = "undo" == t ? o.undone : o.done, u = 0; u < s.length && (i = s[u], n ? !i.ranges || i.equals(e.sel) : i.ranges); u++) {
              ;
            }

            if (u != s.length) {
              for (o.lastOrigin = o.lastSelOrigin = null;;) {
                if (!(i = s.pop()).ranges) {
                  if (r) return void s.push(i);
                  break;
                }

                if (Wi(i, l), n && !i.equals(e.sel)) return void Qi(e, i, {
                  clearRedo: !1
                });
                a = i;
              }

              var c = [];
              Wi(a, l), l.push({
                changes: c,
                generation: o.generation
              }), o.generation = i.generation || ++o.maxGeneration;

              for (var h = ye(e, "beforeChange") || e.cm && ye(e.cm, "beforeChange"), f = function f(n) {
                var r = i.changes[n];
                if (r.origin = t, h && !lo(e, r, !1)) return s.length = 0, {};
                c.push(Pi(e, r));
                var o = n ? Ai(e, r) : K(s);
                po(e, r, o, $i(e, r)), !n && e.cm && e.cm.scrollIntoView({
                  from: r.from,
                  to: Ti(r)
                });
                var a = [];
                Ii(e, function (e, t) {
                  t || -1 != j(a, e.history) || (yo(e.history, r), a.push(e.history)), po(e, r, null, $i(e, r));
                });
              }, d = i.changes.length - 1; d >= 0; --d) {
                var p = f(d);
                if (p) return p.v;
              }
            }
          }
        }

        function fo(e, t) {
          if (0 != t && (e.first += t, e.sel = new ki(Y(e.sel.ranges, function (e) {
            return new Ci(tt(e.anchor.line + t, e.anchor.ch), tt(e.head.line + t, e.head.ch));
          }), e.sel.primIndex), e.cm)) {
            fr(e.cm, e.first, e.first - t, t);

            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) {
              dr(e.cm, r, "gutter");
            }
          }
        }

        function po(e, t, n, r) {
          if (e.cm && !e.cm.curOp) return ei(e.cm, po)(e, t, n, r);
          if (t.to.line < e.first) fo(e, t.text.length - 1 - (t.to.line - t.from.line));else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
              var i = t.text.length - 1 - (e.first - t.from.line);
              fo(e, i), t = {
                from: tt(e.first, 0),
                to: tt(t.to.line + i, t.to.ch),
                text: [K(t.text)],
                origin: t.origin
              };
            }

            var o = e.lastLine();
            t.to.line > o && (t = {
              from: t.from,
              to: tt(o, Ve(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin
            }), t.removed = Xe(e, t.from, t.to), n || (n = Ai(e, t)), e.cm ? function (e, t, n) {
              var r = e.doc,
                  i = e.display,
                  o = t.from,
                  a = t.to,
                  s = !1,
                  l = o.line;
              e.options.lineWrapping || (l = Ze(Ht(Ve(r, o.line))), r.iter(l, a.line + 1, function (e) {
                if (e == i.maxLine) return s = !0, !0;
              }));
              r.sel.contains(t.from, t.to) > -1 && ve(e);
              Oi(r, t, n, lr(e)), e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function (e) {
                var t = $t(e);
                t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1);
              }), s && (e.curOp.updateMaxLine = !0));
              (function (e, t) {
                if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                  for (var n = e.first, r = t - 1; r > n; r--) {
                    var i = Ve(e, r).stateAfter;

                    if (i && (!_instanceof(i, ct) || r + i.lookAhead < t)) {
                      n = r + 1;
                      break;
                    }
                  }

                  e.highlightFrontier = Math.min(e.highlightFrontier, n);
                }
              })(r, o.line), ri(e, 400);
              var u = t.text.length - (a.line - o.line) - 1;
              t.full ? fr(e) : o.line != a.line || 1 != t.text.length || Fi(e.doc, t) ? fr(e, o.line, a.line + 1, u) : dr(e, o.line, "text");
              var c = ye(e, "changes"),
                  h = ye(e, "change");

              if (h || c) {
                var f = {
                  from: o,
                  to: a,
                  text: t.text,
                  removed: t.removed,
                  origin: t.origin
                };
                h && un(e, "change", e, f), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f);
              }

              e.display.selForContextMenu = null;
            }(e.cm, t, r) : Oi(e, t, r), eo(e, n, U), e.cantEdit && oo(e, tt(e.firstLine(), 0)) && (e.cantEdit = !1);
          }
        }

        function mo(e, t, n, r, i) {
          var o;
          r || (r = n), nt(r, n) < 0 && (n = (o = [r, n])[0], r = o[1]), "string" == typeof t && (t = e.splitLines(t)), uo(e, {
            from: n,
            to: r,
            text: t,
            origin: i
          });
        }

        function go(e, t, n, r) {
          n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
        }

        function vo(e, t, n, r) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
                a = !0;

            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);

              for (var s = 0; s < o.ranges.length; s++) {
                go(o.ranges[s].anchor, t, n, r), go(o.ranges[s].head, t, n, r);
              }
            } else {
              for (var l = 0; l < o.changes.length; ++l) {
                var u = o.changes[l];
                if (n < u.from.line) u.from = tt(u.from.line + r, u.from.ch), u.to = tt(u.to.line + r, u.to.ch);else if (t <= u.to.line) {
                  a = !1;
                  break;
                }
              }

              a || (e.splice(0, i + 1), i = 0);
            }
          }
        }

        function yo(e, t) {
          var n = t.from.line,
              r = t.to.line,
              i = t.text.length - (r - n) - 1;
          vo(e.done, n, r, i), vo(e.undone, n, r, i);
        }

        function xo(e, t, n, r) {
          var i = t,
              o = t;
          return "number" == typeof t ? o = Ve(e, st(e, t)) : i = Ze(t), null == i ? null : (r(o, i) && e.cm && dr(e.cm, i, n), o);
        }

        function bo(e) {
          this.lines = e, this.parent = null;

          for (var t = 0, n = 0; n < e.length; ++n) {
            e[n].parent = this, t += e[n].height;
          }

          this.height = t;
        }

        function wo(e) {
          this.children = e;

          for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
            var i = e[r];
            t += i.chunkSize(), n += i.height, i.parent = this;
          }

          this.size = t, this.height = n, this.parent = null;
        }

        Ci.prototype.from = function () {
          return at(this.anchor, this.head);
        }, Ci.prototype.to = function () {
          return ot(this.anchor, this.head);
        }, Ci.prototype.empty = function () {
          return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
        }, bo.prototype = {
          chunkSize: function chunkSize() {
            return this.lines.length;
          },
          removeInner: function removeInner(e, t) {
            for (var n = e, r = e + t; n < r; ++n) {
              var i = this.lines[n];
              this.height -= i.height, Xt(i), un(i, "delete");
            }

            this.lines.splice(e, t);
          },
          collapse: function collapse(e) {
            e.push.apply(e, this.lines);
          },
          insertInner: function insertInner(e, t, n) {
            this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));

            for (var r = 0; r < t.length; ++r) {
              t[r].parent = this;
            }
          },
          iterN: function iterN(e, t, n) {
            for (var r = e + t; e < r; ++e) {
              if (n(this.lines[e])) return !0;
            }
          }
        }, wo.prototype = {
          chunkSize: function chunkSize() {
            return this.size;
          },
          removeInner: function removeInner(e, t) {
            this.size -= t;

            for (var n = 0; n < this.children.length; ++n) {
              var r = this.children[n],
                  i = r.chunkSize();

              if (e < i) {
                var o = Math.min(t, i - e),
                    a = r.height;
                if (r.removeInner(e, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o)) break;
                e = 0;
              } else e -= i;
            }

            if (this.size - t < 25 && (this.children.length > 1 || !_instanceof(this.children[0], bo))) {
              var s = [];
              this.collapse(s), this.children = [new bo(s)], this.children[0].parent = this;
            }
          },
          collapse: function collapse(e) {
            for (var t = 0; t < this.children.length; ++t) {
              this.children[t].collapse(e);
            }
          },
          insertInner: function insertInner(e, t, n) {
            this.size += t.length, this.height += n;

            for (var r = 0; r < this.children.length; ++r) {
              var i = this.children[r],
                  o = i.chunkSize();

              if (e <= o) {
                if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                  for (var a = i.lines.length % 25 + 25, s = a; s < i.lines.length;) {
                    var l = new bo(i.lines.slice(s, s += 25));
                    i.height -= l.height, this.children.splice(++r, 0, l), l.parent = this;
                  }

                  i.lines = i.lines.slice(0, a), this.maybeSpill();
                }

                break;
              }

              e -= o;
            }
          },
          maybeSpill: function maybeSpill() {
            if (!(this.children.length <= 10)) {
              var e = this;

              do {
                var t = new wo(e.children.splice(e.children.length - 5, 5));

                if (e.parent) {
                  e.size -= t.size, e.height -= t.height;
                  var n = j(e.parent.children, e);
                  e.parent.children.splice(n + 1, 0, t);
                } else {
                  var r = new wo(e.children);
                  r.parent = e, e.children = [r, t], e = r;
                }

                t.parent = e.parent;
              } while (e.children.length > 10);

              e.parent.maybeSpill();
            }
          },
          iterN: function iterN(e, t, n) {
            for (var r = 0; r < this.children.length; ++r) {
              var i = this.children[r],
                  o = i.chunkSize();

              if (e < o) {
                var a = Math.min(t, o - e);
                if (i.iterN(e, a, n)) return !0;
                if (0 == (t -= a)) break;
                e = 0;
              } else e -= o;
            }
          }
        };

        var ko = function ko(e, t, n) {
          if (n) for (var r in n) {
            n.hasOwnProperty(r) && (this[r] = n[r]);
          }
          this.doc = e, this.node = t;
        };

        function Co(e, t, n) {
          qt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Dr(e, n);
        }

        ko.prototype.clear = function () {
          var e = this.doc.cm,
              t = this.line.widgets,
              n = this.line,
              r = Ze(n);

          if (null != r && t) {
            for (var i = 0; i < t.length; ++i) {
              t[i] == this && t.splice(i--, 1);
            }

            t.length || (n.widgets = null);
            var o = kn(this);
            Ye(n, Math.max(0, n.height - o)), e && (Qr(e, function () {
              Co(e, n, -o), dr(e, r, "widget");
            }), un(e, "lineWidgetCleared", e, this, r));
          }
        }, ko.prototype.changed = function () {
          var e = this,
              t = this.height,
              n = this.doc.cm,
              r = this.line;
          this.height = null;
          var i = kn(this) - t;
          i && (Wt(this.doc, r) || Ye(r, r.height + i), n && Qr(n, function () {
            n.curOp.forceUpdate = !0, Co(n, r, i), un(n, "lineWidgetChanged", n, e, Ze(r));
          }));
        }, xe(ko);

        var So = 0,
            Lo = function Lo(e, t) {
          this.lines = [], this.type = t, this.doc = e, this.id = ++So;
        };

        function To(e, t, n, r, i) {
          if (r && r.shared) return function (e, t, n, r, i) {
            (r = z(r)).shared = !1;
            var o = [To(e, t, n, r, i)],
                a = o[0],
                s = r.widgetNode;
            return Ii(e, function (e) {
              s && (r.widgetNode = s.cloneNode(!0)), o.push(To(e, lt(e, t), lt(e, n), r, i));

              for (var l = 0; l < e.linked.length; ++l) {
                if (e.linked[l].isParent) return;
              }

              a = K(o);
            }), new Mo(o, a);
          }(e, t, n, r, i);
          if (e.cm && !e.cm.curOp) return ei(e.cm, To)(e, t, n, r, i);
          var o = new Lo(e, i),
              a = nt(t, n);
          if (r && z(r, o, !1), a > 0 || 0 == a && !1 !== o.clearWhenEmpty) return o;

          if (o.replacedWith && (o.collapsed = !0, o.widgetNode = N("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
            if (Pt(e, t.line, t, n, o) || t.line != n.line && Pt(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
            Ct = !0;
          }

          o.addToHistory && ji(e, {
            from: t,
            to: n,
            origin: "markText"
          }, e.sel, NaN);
          var s,
              l = t.line,
              u = e.cm;

          if (e.iter(l, n.line + 1, function (e) {
            u && o.collapsed && !u.options.lineWrapping && Ht(e) == u.display.maxLine && (s = !0), o.collapsed && l != t.line && Ye(e, 0), function (e, t) {
              e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e);
            }(e, new St(o, l == t.line ? t.ch : null, l == n.line ? n.ch : null)), ++l;
          }), o.collapsed && e.iter(t.line, n.line + 1, function (t) {
            Wt(e, t) && Ye(t, 0);
          }), o.clearOnEnter && fe(o, "beforeCursorEnter", function () {
            return o.clear();
          }), o.readOnly && (kt = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++So, o.atomic = !0), u) {
            if (s && (u.curOp.updateMaxLine = !0), o.collapsed) fr(u, t.line, n.line + 1);else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var c = t.line; c <= n.line; c++) {
              dr(u, c, "text");
            }
            o.atomic && no(u.doc), un(u, "markerAdded", u, o);
          }

          return o;
        }

        Lo.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm,
                t = e && !e.curOp;

            if (t && Vr(e), ye(this, "clear")) {
              var n = this.find();
              n && un(this, "clear", n.from, n.to);
            }

            for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
              var a = this.lines[o],
                  s = Lt(a.markedSpans, this);
              e && !this.collapsed ? dr(e, Ze(a), "text") : e && (null != s.to && (i = Ze(a)), null != s.from && (r = Ze(a))), a.markedSpans = Tt(a.markedSpans, s), null == s.from && this.collapsed && !Wt(this.doc, a) && e && Ye(a, ir(e.display));
            }

            if (e && this.collapsed && !e.options.lineWrapping) for (var l = 0; l < this.lines.length; ++l) {
              var u = Ht(this.lines[l]),
                  c = $t(u);
              c > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = c, e.display.maxLineChanged = !0);
            }
            null != r && e && this.collapsed && fr(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && no(e.doc)), e && un(e, "markerCleared", e, this, r, i), t && Xr(e), this.parent && this.parent.clear();
          }
        }, Lo.prototype.find = function (e, t) {
          var n, r;
          null == e && "bookmark" == this.type && (e = 1);

          for (var i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i],
                a = Lt(o.markedSpans, this);
            if (null != a.from && (n = tt(t ? o : Ze(o), a.from), -1 == e)) return n;
            if (null != a.to && (r = tt(t ? o : Ze(o), a.to), 1 == e)) return r;
          }

          return n && {
            from: n,
            to: r
          };
        }, Lo.prototype.changed = function () {
          var e = this,
              t = this.find(-1, !0),
              n = this,
              r = this.doc.cm;
          t && r && Qr(r, function () {
            var i = t.line,
                o = Ze(t.line),
                a = Fn(r, o);

            if (a && (Hn(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !Wt(n.doc, i) && null != n.height) {
              var s = n.height;
              n.height = null;
              var l = kn(n) - s;
              l && Ye(i, i.height + l);
            }

            un(r, "markerChanged", r, e);
          });
        }, Lo.prototype.attachLine = function (e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            t.maybeHiddenMarkers && -1 != j(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
          }

          this.lines.push(e);
        }, Lo.prototype.detachLine = function (e) {
          if (this.lines.splice(j(this.lines, e), 1), !this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
          }
        }, xe(Lo);

        var Mo = function Mo(e, t) {
          this.markers = e, this.primary = t;

          for (var n = 0; n < e.length; ++n) {
            e[n].parent = this;
          }
        };

        function Ao(e) {
          return e.findMarks(tt(e.first, 0), e.clipPos(tt(e.lastLine())), function (e) {
            return e.parent;
          });
        }

        function Eo(e) {
          for (var t = function t(_t2) {
            var n = e[_t2],
                r = [n.primary.doc];
            Ii(n.primary.doc, function (e) {
              return r.push(e);
            });

            for (var i = 0; i < n.markers.length; i++) {
              var o = n.markers[i];
              -1 == j(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1));
            }
          }, n = 0; n < e.length; n++) {
            t(n);
          }
        }

        Mo.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;

            for (var e = 0; e < this.markers.length; ++e) {
              this.markers[e].clear();
            }

            un(this, "clear");
          }
        }, Mo.prototype.find = function (e, t) {
          return this.primary.find(e, t);
        }, xe(Mo);

        var No = 0,
            Do = function Do(e, t, n, r, i) {
          if (!_instanceof(this, Do)) return new Do(e, t, n, r, i);
          null == n && (n = 0), wo.call(this, [new bo([new Vt("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
          var o = tt(n, 0);
          this.sel = Li(o), this.history = new zi(null), this.id = ++No, this.modeOption = t, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Oi(this, {
            from: o,
            to: o,
            text: e
          }), Qi(this, Li(o), U);
        };

        Do.prototype = J(wo.prototype, {
          constructor: Do,
          iter: function iter(e, t, n) {
            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
          },
          insert: function insert(e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) {
              n += t[r].height;
            }

            this.insertInner(e - this.first, t, n);
          },
          remove: function remove(e, t) {
            this.removeInner(e - this.first, t);
          },
          getValue: function getValue(e) {
            var t = Ke(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          setValue: ni(function (e) {
            var t = tt(this.first, 0),
                n = this.first + this.size - 1;
            uo(this, {
              from: t,
              to: tt(n, Ve(this, n).text.length),
              text: this.splitLines(e),
              origin: "setValue",
              full: !0
            }, !0), this.cm && Or(this.cm, 0, 0), Qi(this, Li(t), U);
          }),
          replaceRange: function replaceRange(e, t, n, r) {
            mo(this, e, t = lt(this, t), n = n ? lt(this, n) : t, r);
          },
          getRange: function getRange(e, t, n) {
            var r = Xe(this, lt(this, e), lt(this, t));
            return !1 === n ? r : r.join(n || this.lineSeparator());
          },
          getLine: function getLine(e) {
            var t = this.getLineHandle(e);
            return t && t.text;
          },
          getLineHandle: function getLineHandle(e) {
            if (Qe(this, e)) return Ve(this, e);
          },
          getLineNumber: function getLineNumber(e) {
            return Ze(e);
          },
          getLineHandleVisualStart: function getLineHandleVisualStart(e) {
            return "number" == typeof e && (e = Ve(this, e)), Ht(e);
          },
          lineCount: function lineCount() {
            return this.size;
          },
          firstLine: function firstLine() {
            return this.first;
          },
          lastLine: function lastLine() {
            return this.first + this.size - 1;
          },
          clipPos: function clipPos(e) {
            return lt(this, e);
          },
          getCursor: function getCursor(e) {
            var t = this.sel.primary();
            return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from();
          },
          listSelections: function listSelections() {
            return this.sel.ranges;
          },
          somethingSelected: function somethingSelected() {
            return this.sel.somethingSelected();
          },
          setCursor: ni(function (e, t, n) {
            Zi(this, lt(this, "number" == typeof e ? tt(e, t || 0) : e), null, n);
          }),
          setSelection: ni(function (e, t, n) {
            Zi(this, lt(this, e), lt(this, t || e), n);
          }),
          extendSelection: ni(function (e, t, n) {
            Xi(this, lt(this, e), t && lt(this, t), n);
          }),
          extendSelections: ni(function (e, t) {
            Ki(this, ut(this, e), t);
          }),
          extendSelectionsBy: ni(function (e, t) {
            Ki(this, ut(this, Y(this.sel.ranges, e)), t);
          }),
          setSelections: ni(function (e, t, n) {
            if (e.length) {
              for (var r = [], i = 0; i < e.length; i++) {
                r[i] = new Ci(lt(this, e[i].anchor), lt(this, e[i].head));
              }

              null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Qi(this, Si(this.cm, r, t), n);
            }
          }),
          addSelection: ni(function (e, t, n) {
            var r = this.sel.ranges.slice(0);
            r.push(new Ci(lt(this, e), lt(this, t || e))), Qi(this, Si(this.cm, r, r.length - 1), n);
          }),
          getSelection: function getSelection(e) {
            for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = Xe(this, n[r].from(), n[r].to());
              t = t ? t.concat(i) : i;
            }

            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          getSelections: function getSelections(e) {
            for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = Xe(this, n[r].from(), n[r].to());
              !1 !== e && (i = i.join(e || this.lineSeparator())), t[r] = i;
            }

            return t;
          },
          replaceSelection: function replaceSelection(e, t, n) {
            for (var r = [], i = 0; i < this.sel.ranges.length; i++) {
              r[i] = e;
            }

            this.replaceSelections(r, t, n || "+input");
          },
          replaceSelections: ni(function (e, t, n) {
            for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var a = i.ranges[o];
              r[o] = {
                from: a.from(),
                to: a.to(),
                text: this.splitLines(e[o]),
                origin: n
              };
            }

            for (var s = t && "end" != t && function (e, t, n) {
              for (var r = [], i = tt(e.first, 0), o = i, a = 0; a < t.length; a++) {
                var s = t[a],
                    l = Ei(s.from, i, o),
                    u = Ei(Ti(s), i, o);

                if (i = s.to, o = u, "around" == n) {
                  var c = e.sel.ranges[a],
                      h = nt(c.head, c.anchor) < 0;
                  r[a] = new Ci(h ? u : l, h ? l : u);
                } else r[a] = new Ci(l, l);
              }

              return new ki(r, e.sel.primIndex);
            }(this, r, t), l = r.length - 1; l >= 0; l--) {
              uo(this, r[l]);
            }

            s ? Ji(this, s) : this.cm && Fr(this.cm);
          }),
          undo: ni(function () {
            ho(this, "undo");
          }),
          redo: ni(function () {
            ho(this, "redo");
          }),
          undoSelection: ni(function () {
            ho(this, "undo", !0);
          }),
          redoSelection: ni(function () {
            ho(this, "redo", !0);
          }),
          setExtending: function setExtending(e) {
            this.extend = e;
          },
          getExtending: function getExtending() {
            return this.extend;
          },
          historySize: function historySize() {
            for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) {
              e.done[r].ranges || ++t;
            }

            for (var i = 0; i < e.undone.length; i++) {
              e.undone[i].ranges || ++n;
            }

            return {
              undo: t,
              redo: n
            };
          },
          clearHistory: function clearHistory() {
            this.history = new zi(this.history.maxGeneration);
          },
          markClean: function markClean() {
            this.cleanGeneration = this.changeGeneration(!0);
          },
          changeGeneration: function changeGeneration(e) {
            return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
          },
          isClean: function isClean(e) {
            return this.history.generation == (e || this.cleanGeneration);
          },
          getHistory: function getHistory() {
            return {
              done: Gi(this.history.done),
              undone: Gi(this.history.undone)
            };
          },
          setHistory: function setHistory(e) {
            var t = this.history = new zi(this.history.maxGeneration);
            t.done = Gi(e.done.slice(0), null, !0), t.undone = Gi(e.undone.slice(0), null, !0);
          },
          setGutterMarker: ni(function (e, t, n) {
            return xo(this, e, "gutter", function (e) {
              var r = e.gutterMarkers || (e.gutterMarkers = {});
              return r[t] = n, !n && ne(r) && (e.gutterMarkers = null), !0;
            });
          }),
          clearGutter: ni(function (e) {
            var t = this;
            this.iter(function (n) {
              n.gutterMarkers && n.gutterMarkers[e] && xo(t, n, "gutter", function () {
                return n.gutterMarkers[e] = null, ne(n.gutterMarkers) && (n.gutterMarkers = null), !0;
              });
            });
          }),
          lineInfo: function lineInfo(e) {
            var t;

            if ("number" == typeof e) {
              if (!Qe(this, e)) return null;
              if (t = e, !(e = Ve(this, e))) return null;
            } else if (null == (t = Ze(e))) return null;

            return {
              line: t,
              handle: e,
              text: e.text,
              gutterMarkers: e.gutterMarkers,
              textClass: e.textClass,
              bgClass: e.bgClass,
              wrapClass: e.wrapClass,
              widgets: e.widgets
            };
          },
          addLineClass: ni(function (e, t, n) {
            return xo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
              var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";

              if (e[r]) {
                if (S(n).test(e[r])) return !1;
                e[r] += " " + n;
              } else e[r] = n;

              return !0;
            });
          }),
          removeLineClass: ni(function (e, t, n) {
            return xo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
              var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                  i = e[r];
              if (!i) return !1;
              if (null == n) e[r] = null;else {
                var o = i.match(S(n));
                if (!o) return !1;
                var a = o.index + o[0].length;
                e[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null;
              }
              return !0;
            });
          }),
          addLineWidget: ni(function (e, t, n) {
            return function (e, t, n, r) {
              var i = new ko(e, n, r),
                  o = e.cm;
              return o && i.noHScroll && (o.display.alignWidgets = !0), xo(e, t, "widget", function (t) {
                var n = t.widgets || (t.widgets = []);

                if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !Wt(e, t)) {
                  var r = qt(t) < e.scrollTop;
                  Ye(t, t.height + kn(i)), r && Dr(o, i.height), o.curOp.forceUpdate = !0;
                }

                return !0;
              }), o && un(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : Ze(t)), i;
            }(this, e, t, n);
          }),
          removeLineWidget: function removeLineWidget(e) {
            e.clear();
          },
          markText: function markText(e, t, n) {
            return To(this, lt(this, e), lt(this, t), n, n && n.type || "range");
          },
          setBookmark: function setBookmark(e, t) {
            var n = {
              replacedWith: t && (null == t.nodeType ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: !1,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents
            };
            return To(this, e = lt(this, e), e, n, "bookmark");
          },
          findMarksAt: function findMarksAt(e) {
            var t = [],
                n = Ve(this, (e = lt(this, e)).line).markedSpans;
            if (n) for (var r = 0; r < n.length; ++r) {
              var i = n[r];
              (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
            }
            return t;
          },
          findMarks: function findMarks(e, t, n) {
            e = lt(this, e), t = lt(this, t);
            var r = [],
                i = e.line;
            return this.iter(e.line, t.line + 1, function (o) {
              var a = o.markedSpans;
              if (a) for (var s = 0; s < a.length; s++) {
                var l = a[s];
                null != l.to && i == e.line && e.ch >= l.to || null == l.from && i != e.line || null != l.from && i == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker);
              }
              ++i;
            }), r;
          },
          getAllMarks: function getAllMarks() {
            var e = [];
            return this.iter(function (t) {
              var n = t.markedSpans;
              if (n) for (var r = 0; r < n.length; ++r) {
                null != n[r].from && e.push(n[r].marker);
              }
            }), e;
          },
          posFromIndex: function posFromIndex(e) {
            var t,
                n = this.first,
                r = this.lineSeparator().length;
            return this.iter(function (i) {
              var o = i.text.length + r;
              if (o > e) return t = e, !0;
              e -= o, ++n;
            }), lt(this, tt(n, t));
          },
          indexFromPos: function indexFromPos(e) {
            var t = (e = lt(this, e)).ch;
            if (e.line < this.first || e.ch < 0) return 0;
            var n = this.lineSeparator().length;
            return this.iter(this.first, e.line, function (e) {
              t += e.text.length + n;
            }), t;
          },
          copy: function copy(e) {
            var t = new Do(Ke(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
            return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
          },
          linkedDoc: function linkedDoc(e) {
            e || (e = {});
            var t = this.first,
                n = this.first + this.size;
            null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
            var r = new Do(Ke(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
            return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
              doc: r,
              sharedHist: e.sharedHist
            }), r.linked = [{
              doc: this,
              isParent: !0,
              sharedHist: e.sharedHist
            }], function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = r.find(),
                    o = e.clipPos(i.from),
                    a = e.clipPos(i.to);

                if (nt(o, a)) {
                  var s = To(e, o, a, r.primary, r.primary.type);
                  r.markers.push(s), s.parent = r;
                }
              }
            }(r, Ao(this)), r;
          },
          unlinkDoc: function unlinkDoc(e) {
            if (_instanceof(e, Ma) && (e = e.doc), this.linked) for (var t = 0; t < this.linked.length; ++t) {
              if (this.linked[t].doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), Eo(Ao(this));
                break;
              }
            }

            if (e.history == this.history) {
              var n = [e.id];
              Ii(e, function (e) {
                return n.push(e.id);
              }, !0), e.history = new zi(null), e.history.done = Gi(this.history.done, n), e.history.undone = Gi(this.history.undone, n);
            }
          },
          iterLinkedDocs: function iterLinkedDocs(e) {
            Ii(this, e);
          },
          getMode: function getMode() {
            return this.mode;
          },
          getEditor: function getEditor() {
            return this.cm;
          },
          splitLines: function splitLines(e) {
            return this.lineSep ? e.split(this.lineSep) : Fe(e);
          },
          lineSeparator: function lineSeparator() {
            return this.lineSep || "\n";
          },
          setDirection: ni(function (e) {
            var t;
            ("rtl" != e && (e = "ltr"), e != this.direction) && (this.direction = e, this.iter(function (e) {
              return e.order = null;
            }), this.cm && Qr(t = this.cm, function () {
              Ri(t), fr(t);
            }));
          })
        }), Do.prototype.eachLine = Do.prototype.iter;
        var Fo = 0;

        function Oo(e) {
          var t = this;

          if (Io(t), !ge(t, e) && !Cn(t.display, e)) {
            be(e), a && (Fo = +new Date());
            var n = cr(t, e, !0),
                r = e.dataTransfer.files;
            if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length, o = Array(i), s = 0, l = function l(e, r) {
              if (!t.options.allowDropFileTypes || -1 != j(t.options.allowDropFileTypes, e.type)) {
                var a = new FileReader();
                a.onload = ei(t, function () {
                  var e = a.result;

                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++s == i) {
                    var l = {
                      from: n = lt(t.doc, n),
                      to: n,
                      text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                      origin: "paste"
                    };
                    uo(t.doc, l), Ji(t.doc, Li(n, Ti(l)));
                  }
                }), a.readAsText(e);
              }
            }, u = 0; u < i; ++u) {
              l(r[u], u);
            } else {
              if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function () {
                return t.display.input.focus();
              }, 20);

              try {
                var c = e.dataTransfer.getData("Text");

                if (c) {
                  var h;
                  if (t.state.draggingText && !t.state.draggingText.copy && (h = t.listSelections()), eo(t.doc, Li(n, n)), h) for (var f = 0; f < h.length; ++f) {
                    mo(t.doc, "", h[f].anchor, h[f].head, "drag");
                  }
                  t.replaceSelection(c, "around", "paste"), t.display.input.focus();
                }
              } catch (e) {}
            }
          }
        }

        function Io(e) {
          e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
        }

        function Bo(e) {
          if (document.getElementsByClassName) {
            for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
              var i = t[r].CodeMirror;
              i && n.push(i);
            }

            n.length && n[0].operation(function () {
              for (var t = 0; t < n.length; t++) {
                e(n[t]);
              }
            });
          }
        }

        var Ro = !1;

        function zo() {
          var e;
          Ro || (fe(window, "resize", function () {
            null == e && (e = setTimeout(function () {
              e = null, Bo(Po);
            }, 100));
          }), fe(window, "blur", function () {
            return Bo(Tr);
          }), Ro = !0);
        }

        function Po(e) {
          var t = e.display;
          t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize();
        }

        for (var Ho = {
          3: "Pause",
          8: "Backspace",
          9: "Tab",
          13: "Enter",
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "PrintScrn",
          45: "Insert",
          46: "Delete",
          59: ";",
          61: "=",
          91: "Mod",
          92: "Mod",
          93: "Mod",
          106: "*",
          107: "=",
          109: "-",
          110: ".",
          111: "/",
          145: "ScrollLock",
          173: "-",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          63232: "Up",
          63233: "Down",
          63234: "Left",
          63235: "Right",
          63272: "Delete",
          63273: "Home",
          63275: "End",
          63276: "PageUp",
          63277: "PageDown",
          63302: "Insert"
        }, jo = 0; jo < 10; jo++) {
          Ho[jo + 48] = Ho[jo + 96] = String(jo);
        }

        for (var _o = 65; _o <= 90; _o++) {
          Ho[_o] = String.fromCharCode(_o);
        }

        for (var Wo = 1; Wo <= 12; Wo++) {
          Ho[Wo + 111] = Ho[Wo + 63235] = "F" + Wo;
        }

        var Uo = {};

        function qo(e) {
          var t,
              n,
              r,
              i,
              o = e.split(/-(?!$)/);
          e = o[o.length - 1];

          for (var a = 0; a < o.length - 1; a++) {
            var s = o[a];
            if (/^(cmd|meta|m)$/i.test(s)) i = !0;else if (/^a(lt)?$/i.test(s)) t = !0;else if (/^(c|ctrl|control)$/i.test(s)) n = !0;else {
              if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
              r = !0;
            }
          }

          return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e;
        }

        function $o(e) {
          var t = {};

          for (var n in e) {
            if (e.hasOwnProperty(n)) {
              var r = e[n];
              if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;

              if ("..." == r) {
                delete e[n];
                continue;
              }

              for (var i = Y(n.split(" "), qo), o = 0; o < i.length; o++) {
                var a = void 0,
                    s = void 0;
                o == i.length - 1 ? (s = i.join(" "), a = r) : (s = i.slice(0, o + 1).join(" "), a = "...");
                var l = t[s];

                if (l) {
                  if (l != a) throw new Error("Inconsistent bindings for " + s);
                } else t[s] = a;
              }

              delete e[n];
            }
          }

          for (var u in t) {
            e[u] = t[u];
          }

          return e;
        }

        function Go(e, t, n, r) {
          var i = (t = Yo(t)).call ? t.call(e, r) : t[e];
          if (!1 === i) return "nothing";
          if ("..." === i) return "multi";
          if (null != i && n(i)) return "handled";

          if (t.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Go(e, t.fallthrough, n, r);

            for (var o = 0; o < t.fallthrough.length; o++) {
              var a = Go(e, t.fallthrough[o], n, r);
              if (a) return a;
            }
          }
        }

        function Vo(e) {
          var t = "string" == typeof e ? e : Ho[e.keyCode];
          return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
        }

        function Xo(e, t, n) {
          var r = e;
          return t.altKey && "Alt" != r && (e = "Alt-" + e), (k ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (k ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e;
        }

        function Ko(e, t) {
          if (h && 34 == e.keyCode && e.char) return !1;
          var n = Ho[e.keyCode];
          return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), Xo(n, e, t));
        }

        function Yo(e) {
          return "string" == typeof e ? Uo[e] : e;
        }

        function Zo(e, t) {
          for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
            for (var o = t(n[i]); r.length && nt(o.from, K(r).to) <= 0;) {
              var a = r.pop();

              if (nt(a.from, o.from) < 0) {
                o.from = a.from;
                break;
              }
            }

            r.push(o);
          }

          Qr(e, function () {
            for (var t = r.length - 1; t >= 0; t--) {
              mo(e.doc, "", r[t].from, r[t].to, "+delete");
            }

            Fr(e);
          });
        }

        function Jo(e, t, n) {
          var r = oe(e.text, t + n, n);
          return r < 0 || r > e.text.length ? null : r;
        }

        function Qo(e, t, n) {
          var r = Jo(e, t.ch, n);
          return null == r ? null : new tt(t.line, r, n < 0 ? "after" : "before");
        }

        function ea(e, t, n, r, i) {
          if (e) {
            var o = ce(n, t.doc.direction);

            if (o) {
              var a,
                  s = i < 0 ? K(o) : o[0],
                  l = i < 0 == (1 == s.level) ? "after" : "before";

              if (s.level > 0 || "rtl" == t.doc.direction) {
                var u = On(t, n);
                a = i < 0 ? n.text.length - 1 : 0;
                var c = In(t, u, a).top;
                a = ae(function (e) {
                  return In(t, u, e).top == c;
                }, i < 0 == (1 == s.level) ? s.from : s.to - 1, a), "before" == l && (a = Jo(n, a, 1));
              } else a = i < 0 ? s.to : s.from;

              return new tt(r, a, l);
            }
          }

          return new tt(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
        }

        Uo.basic = {
          Left: "goCharLeft",
          Right: "goCharRight",
          Up: "goLineUp",
          Down: "goLineDown",
          End: "goLineEnd",
          Home: "goLineStartSmart",
          PageUp: "goPageUp",
          PageDown: "goPageDown",
          Delete: "delCharAfter",
          Backspace: "delCharBefore",
          "Shift-Backspace": "delCharBefore",
          Tab: "defaultTab",
          "Shift-Tab": "indentAuto",
          Enter: "newlineAndIndent",
          Insert: "toggleOverwrite",
          Esc: "singleSelection"
        }, Uo.pcDefault = {
          "Ctrl-A": "selectAll",
          "Ctrl-D": "deleteLine",
          "Ctrl-Z": "undo",
          "Shift-Ctrl-Z": "redo",
          "Ctrl-Y": "redo",
          "Ctrl-Home": "goDocStart",
          "Ctrl-End": "goDocEnd",
          "Ctrl-Up": "goLineUp",
          "Ctrl-Down": "goLineDown",
          "Ctrl-Left": "goGroupLeft",
          "Ctrl-Right": "goGroupRight",
          "Alt-Left": "goLineStart",
          "Alt-Right": "goLineEnd",
          "Ctrl-Backspace": "delGroupBefore",
          "Ctrl-Delete": "delGroupAfter",
          "Ctrl-S": "save",
          "Ctrl-F": "find",
          "Ctrl-G": "findNext",
          "Shift-Ctrl-G": "findPrev",
          "Shift-Ctrl-F": "replace",
          "Shift-Ctrl-R": "replaceAll",
          "Ctrl-[": "indentLess",
          "Ctrl-]": "indentMore",
          "Ctrl-U": "undoSelection",
          "Shift-Ctrl-U": "redoSelection",
          "Alt-U": "redoSelection",
          fallthrough: "basic"
        }, Uo.emacsy = {
          "Ctrl-F": "goCharRight",
          "Ctrl-B": "goCharLeft",
          "Ctrl-P": "goLineUp",
          "Ctrl-N": "goLineDown",
          "Alt-F": "goWordRight",
          "Alt-B": "goWordLeft",
          "Ctrl-A": "goLineStart",
          "Ctrl-E": "goLineEnd",
          "Ctrl-V": "goPageDown",
          "Shift-Ctrl-V": "goPageUp",
          "Ctrl-D": "delCharAfter",
          "Ctrl-H": "delCharBefore",
          "Alt-D": "delWordAfter",
          "Alt-Backspace": "delWordBefore",
          "Ctrl-K": "killLine",
          "Ctrl-T": "transposeChars",
          "Ctrl-O": "openLine"
        }, Uo.macDefault = {
          "Cmd-A": "selectAll",
          "Cmd-D": "deleteLine",
          "Cmd-Z": "undo",
          "Shift-Cmd-Z": "redo",
          "Cmd-Y": "redo",
          "Cmd-Home": "goDocStart",
          "Cmd-Up": "goDocStart",
          "Cmd-End": "goDocEnd",
          "Cmd-Down": "goDocEnd",
          "Alt-Left": "goGroupLeft",
          "Alt-Right": "goGroupRight",
          "Cmd-Left": "goLineLeft",
          "Cmd-Right": "goLineRight",
          "Alt-Backspace": "delGroupBefore",
          "Ctrl-Alt-Backspace": "delGroupAfter",
          "Alt-Delete": "delGroupAfter",
          "Cmd-S": "save",
          "Cmd-F": "find",
          "Cmd-G": "findNext",
          "Shift-Cmd-G": "findPrev",
          "Cmd-Alt-F": "replace",
          "Shift-Cmd-Alt-F": "replaceAll",
          "Cmd-[": "indentLess",
          "Cmd-]": "indentMore",
          "Cmd-Backspace": "delWrappedLineLeft",
          "Cmd-Delete": "delWrappedLineRight",
          "Cmd-U": "undoSelection",
          "Shift-Cmd-U": "redoSelection",
          "Ctrl-Up": "goDocStart",
          "Ctrl-Down": "goDocEnd",
          fallthrough: ["basic", "emacsy"]
        }, Uo.default = y ? Uo.macDefault : Uo.pcDefault;
        var ta = {
          selectAll: so,
          singleSelection: function singleSelection(e) {
            return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), U);
          },
          killLine: function killLine(e) {
            return Zo(e, function (t) {
              if (t.empty()) {
                var n = Ve(e.doc, t.head.line).text.length;
                return t.head.ch == n && t.head.line < e.lastLine() ? {
                  from: t.head,
                  to: tt(t.head.line + 1, 0)
                } : {
                  from: t.head,
                  to: tt(t.head.line, n)
                };
              }

              return {
                from: t.from(),
                to: t.to()
              };
            });
          },
          deleteLine: function deleteLine(e) {
            return Zo(e, function (t) {
              return {
                from: tt(t.from().line, 0),
                to: lt(e.doc, tt(t.to().line + 1, 0))
              };
            });
          },
          delLineLeft: function delLineLeft(e) {
            return Zo(e, function (e) {
              return {
                from: tt(e.from().line, 0),
                to: e.from()
              };
            });
          },
          delWrappedLineLeft: function delWrappedLineLeft(e) {
            return Zo(e, function (t) {
              var n = e.charCoords(t.head, "div").top + 5;
              return {
                from: e.coordsChar({
                  left: 0,
                  top: n
                }, "div"),
                to: t.from()
              };
            });
          },
          delWrappedLineRight: function delWrappedLineRight(e) {
            return Zo(e, function (t) {
              var n = e.charCoords(t.head, "div").top + 5,
                  r = e.coordsChar({
                left: e.display.lineDiv.offsetWidth + 100,
                top: n
              }, "div");
              return {
                from: t.from(),
                to: r
              };
            });
          },
          undo: function undo(e) {
            return e.undo();
          },
          redo: function redo(e) {
            return e.redo();
          },
          undoSelection: function undoSelection(e) {
            return e.undoSelection();
          },
          redoSelection: function redoSelection(e) {
            return e.redoSelection();
          },
          goDocStart: function goDocStart(e) {
            return e.extendSelection(tt(e.firstLine(), 0));
          },
          goDocEnd: function goDocEnd(e) {
            return e.extendSelection(tt(e.lastLine()));
          },
          goLineStart: function goLineStart(e) {
            return e.extendSelectionsBy(function (t) {
              return na(e, t.head.line);
            }, {
              origin: "+move",
              bias: 1
            });
          },
          goLineStartSmart: function goLineStartSmart(e) {
            return e.extendSelectionsBy(function (t) {
              return ra(e, t.head);
            }, {
              origin: "+move",
              bias: 1
            });
          },
          goLineEnd: function goLineEnd(e) {
            return e.extendSelectionsBy(function (t) {
              return function (e, t) {
                var n = Ve(e.doc, t),
                    r = function (e) {
                  for (var t; t = Rt(e);) {
                    e = t.find(1, !0).line;
                  }

                  return e;
                }(n);

                r != n && (t = Ze(r));
                return ea(!0, e, n, t, -1);
              }(e, t.head.line);
            }, {
              origin: "+move",
              bias: -1
            });
          },
          goLineRight: function goLineRight(e) {
            return e.extendSelectionsBy(function (t) {
              var n = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({
                left: e.display.lineDiv.offsetWidth + 100,
                top: n
              }, "div");
            }, $);
          },
          goLineLeft: function goLineLeft(e) {
            return e.extendSelectionsBy(function (t) {
              var n = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({
                left: 0,
                top: n
              }, "div");
            }, $);
          },
          goLineLeftSmart: function goLineLeftSmart(e) {
            return e.extendSelectionsBy(function (t) {
              var n = e.cursorCoords(t.head, "div").top + 5,
                  r = e.coordsChar({
                left: 0,
                top: n
              }, "div");
              return r.ch < e.getLine(r.line).search(/\S/) ? ra(e, t.head) : r;
            }, $);
          },
          goLineUp: function goLineUp(e) {
            return e.moveV(-1, "line");
          },
          goLineDown: function goLineDown(e) {
            return e.moveV(1, "line");
          },
          goPageUp: function goPageUp(e) {
            return e.moveV(-1, "page");
          },
          goPageDown: function goPageDown(e) {
            return e.moveV(1, "page");
          },
          goCharLeft: function goCharLeft(e) {
            return e.moveH(-1, "char");
          },
          goCharRight: function goCharRight(e) {
            return e.moveH(1, "char");
          },
          goColumnLeft: function goColumnLeft(e) {
            return e.moveH(-1, "column");
          },
          goColumnRight: function goColumnRight(e) {
            return e.moveH(1, "column");
          },
          goWordLeft: function goWordLeft(e) {
            return e.moveH(-1, "word");
          },
          goGroupRight: function goGroupRight(e) {
            return e.moveH(1, "group");
          },
          goGroupLeft: function goGroupLeft(e) {
            return e.moveH(-1, "group");
          },
          goWordRight: function goWordRight(e) {
            return e.moveH(1, "word");
          },
          delCharBefore: function delCharBefore(e) {
            return e.deleteH(-1, "char");
          },
          delCharAfter: function delCharAfter(e) {
            return e.deleteH(1, "char");
          },
          delWordBefore: function delWordBefore(e) {
            return e.deleteH(-1, "word");
          },
          delWordAfter: function delWordAfter(e) {
            return e.deleteH(1, "word");
          },
          delGroupBefore: function delGroupBefore(e) {
            return e.deleteH(-1, "group");
          },
          delGroupAfter: function delGroupAfter(e) {
            return e.deleteH(1, "group");
          },
          indentAuto: function indentAuto(e) {
            return e.indentSelection("smart");
          },
          indentMore: function indentMore(e) {
            return e.indentSelection("add");
          },
          indentLess: function indentLess(e) {
            return e.indentSelection("subtract");
          },
          insertTab: function insertTab(e) {
            return e.replaceSelection("\t");
          },
          insertSoftTab: function insertSoftTab(e) {
            for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
              var o = n[i].from(),
                  a = P(e.getLine(o.line), o.ch, r);
              t.push(X(r - a % r));
            }

            e.replaceSelections(t);
          },
          defaultTab: function defaultTab(e) {
            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
          },
          transposeChars: function transposeChars(e) {
            return Qr(e, function () {
              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
                if (t[r].empty()) {
                  var i = t[r].head,
                      o = Ve(e.doc, i.line).text;
                  if (o) if (i.ch == o.length && (i = new tt(i.line, i.ch - 1)), i.ch > 0) i = new tt(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), tt(i.line, i.ch - 2), i, "+transpose");else if (i.line > e.doc.first) {
                    var a = Ve(e.doc, i.line - 1).text;
                    a && (i = new tt(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), tt(i.line - 1, a.length - 1), i, "+transpose"));
                  }
                  n.push(new Ci(i, i));
                }
              }

              e.setSelections(n);
            });
          },
          newlineAndIndent: function newlineAndIndent(e) {
            return Qr(e, function () {
              for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) {
                e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
              }

              t = e.listSelections();

              for (var r = 0; r < t.length; r++) {
                e.indentLine(t[r].from().line, null, !0);
              }

              Fr(e);
            });
          },
          openLine: function openLine(e) {
            return e.replaceSelection("\n", "start");
          },
          toggleOverwrite: function toggleOverwrite(e) {
            return e.toggleOverwrite();
          }
        };

        function na(e, t) {
          var n = Ve(e.doc, t),
              r = Ht(n);
          return r != n && (t = Ze(r)), ea(!0, e, r, t, 1);
        }

        function ra(e, t) {
          var n = na(e, t.line),
              r = Ve(e.doc, n.line),
              i = ce(r, e.doc.direction);

          if (!i || 0 == i[0].level) {
            var o = Math.max(0, r.text.search(/\S/)),
                a = t.line == n.line && t.ch <= o && t.ch;
            return tt(n.line, a ? 0 : o, n.sticky);
          }

          return n;
        }

        function ia(e, t, n) {
          if ("string" == typeof t && !(t = ta[t])) return !1;
          e.display.input.ensurePolled();
          var r = e.display.shift,
              i = !1;

          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != W;
          } finally {
            e.display.shift = r, e.state.suppressEdits = !1;
          }

          return i;
        }

        var oa = new H();

        function aa(e, t, n, r) {
          var i = e.state.keySeq;

          if (i) {
            if (Vo(t)) return "handled";
            if (/\'$/.test(t) ? e.state.keySeq = null : oa.set(50, function () {
              e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
            }), sa(e, i + " " + t, n, r)) return !0;
          }

          return sa(e, t, n, r);
        }

        function sa(e, t, n, r) {
          var i = function (e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
              var i = Go(t, e.state.keyMaps[r], n, e);
              if (i) return i;
            }

            return e.options.extraKeys && Go(t, e.options.extraKeys, n, e) || Go(t, e.options.keyMap, n, e);
          }(e, t, r);

          return "multi" == i && (e.state.keySeq = t), "handled" == i && un(e, "keyHandled", e, t, n), "handled" != i && "multi" != i || (be(n), kr(e)), !!i;
        }

        function la(e, t) {
          var n = Ko(t, !0);
          return !!n && (t.shiftKey && !e.state.keySeq ? aa(e, "Shift-" + n, t, function (t) {
            return ia(e, t, !0);
          }) || aa(e, n, t, function (t) {
            if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ia(e, t);
          }) : aa(e, n, t, function (t) {
            return ia(e, t);
          }));
        }

        var ua = null;

        function ca(e) {
          var t = this;

          if (t.curOp.focus = F(), !ge(t, e)) {
            a && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var r = e.keyCode;
            t.display.shift = 16 == r || e.shiftKey;
            var i = la(t, e);
            h && (ua = i ? r : null, !i && 88 == r && !Ie && (y ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), n && !y && !i && 46 == r && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function (e) {
              var t = e.display.lineDiv;

              function n(e) {
                18 != e.keyCode && e.altKey || (T(t, "CodeMirror-crosshair"), pe(document, "keyup", n), pe(document, "mouseover", n));
              }

              O(t, "CodeMirror-crosshair"), fe(document, "keyup", n), fe(document, "mouseover", n);
            }(t);
          }
        }

        function ha(e) {
          16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e);
        }

        function fa(e) {
          var t = this;

          if (!(Cn(t.display, e) || ge(t, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) {
            var n = e.keyCode,
                r = e.charCode;
            if (h && n == ua) return ua = null, void be(e);

            if (!h || e.which && !(e.which < 10) || !la(t, e)) {
              var i = String.fromCharCode(null == r ? n : r);
              "\b" != i && (function (e, t, n) {
                return aa(e, "'" + n + "'", t, function (t) {
                  return ia(e, t, !0);
                });
              }(t, e, i) || t.display.input.onKeyPress(e));
            }
          }
        }

        var da,
            pa,
            ma = function ma(e, t, n) {
          this.time = e, this.pos = t, this.button = n;
        };

        function ga(e) {
          var t = this,
              n = t.display;
          if (!(ge(t, e) || n.activeTouch && n.input.supportsTouch())) if (n.input.ensurePolled(), n.shift = e.shiftKey, Cn(n, e)) l || (n.scroller.draggable = !1, setTimeout(function () {
            return n.scroller.draggable = !0;
          }, 100));else if (!xa(t, e)) {
            var r = cr(t, e),
                i = Le(e),
                o = r ? function (e, t) {
              var n = +new Date();
              return pa && pa.compare(n, e, t) ? (da = pa = null, "triple") : da && da.compare(n, e, t) ? (pa = new ma(n, e, t), da = null, "double") : (da = new ma(n, e, t), pa = null, "single");
            }(r, i) : "single";
            window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), r && function (e, t, n, r, i) {
              var o = "Click";
              "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o);
              return aa(e, Xo(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, i), i, function (t) {
                if ("string" == typeof t && (t = ta[t]), !t) return !1;
                var r = !1;

                try {
                  e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != W;
                } finally {
                  e.state.suppressEdits = !1;
                }

                return r;
              });
            }(t, i, r, o, e) || (1 == i ? r ? function (e, t, n, r) {
              a ? setTimeout(R(Cr, e), 0) : e.curOp.focus = F();

              var i,
                  o = function (e, t, n) {
                var r = e.getOption("configureMouse"),
                    i = r ? r(e, t, n) : {};

                if (null == i.unit) {
                  var o = x ? n.shiftKey && n.metaKey : n.altKey;
                  i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line";
                }

                (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey);
                null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey);
                null == i.moveOnDrag && (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey));
                return i;
              }(e, n, r),
                  u = e.doc.sel;

              e.options.dragDrop && Ae && !e.isReadOnly() && "single" == n && (i = u.contains(t)) > -1 && (nt((i = u.ranges[i]).from(), t) < 0 || t.xRel > 0) && (nt(i.to(), t) > 0 || t.xRel < 0) ? function (e, t, n, r) {
                var i = e.display,
                    o = !1,
                    u = ei(e, function (t) {
                  l && (i.scroller.draggable = !1), e.state.draggingText = !1, pe(i.wrapper.ownerDocument, "mouseup", u), pe(i.wrapper.ownerDocument, "mousemove", c), pe(i.scroller, "dragstart", h), pe(i.scroller, "drop", u), o || (be(t), r.addNew || Xi(e.doc, n, null, null, r.extend), l || a && 9 == s ? setTimeout(function () {
                    i.wrapper.ownerDocument.body.focus(), i.input.focus();
                  }, 20) : i.input.focus());
                }),
                    c = function c(e) {
                  o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
                },
                    h = function h() {
                  return o = !0;
                };

                l && (i.scroller.draggable = !0);
                e.state.draggingText = u, u.copy = !r.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop();
                fe(i.wrapper.ownerDocument, "mouseup", u), fe(i.wrapper.ownerDocument, "mousemove", c), fe(i.scroller, "dragstart", h), fe(i.scroller, "drop", u), Sr(e), setTimeout(function () {
                  return i.input.focus();
                }, 20);
              }(e, r, t, o) : function (e, t, n, r) {
                var i = e.display,
                    o = e.doc;
                be(t);
                var a,
                    s,
                    l = o.sel,
                    u = l.ranges;
                r.addNew && !r.extend ? (s = o.sel.contains(n), a = s > -1 ? u[s] : new Ci(n, n)) : (a = o.sel.primary(), s = o.sel.primIndex);
                if ("rectangle" == r.unit) r.addNew || (a = new Ci(n, n)), n = cr(e, t, !0, !0), s = -1;else {
                  var c = va(e, n, r.unit);
                  a = r.extend ? Vi(a, c.anchor, c.head, r.extend) : c;
                }
                r.addNew ? -1 == s ? (s = u.length, Qi(o, Si(e, u.concat([a]), s), {
                  scroll: !1,
                  origin: "*mouse"
                })) : u.length > 1 && u[s].empty() && "char" == r.unit && !r.extend ? (Qi(o, Si(e, u.slice(0, s).concat(u.slice(s + 1)), 0), {
                  scroll: !1,
                  origin: "*mouse"
                }), l = o.sel) : Yi(o, s, a, q) : (s = 0, Qi(o, new ki([a], 0), q), l = o.sel);
                var h = n;

                function f(t) {
                  if (0 != nt(h, t)) if (h = t, "rectangle" == r.unit) {
                    for (var i = [], u = e.options.tabSize, c = P(Ve(o, n.line).text, n.ch, u), f = P(Ve(o, t.line).text, t.ch, u), d = Math.min(c, f), p = Math.max(c, f), m = Math.min(n.line, t.line), g = Math.min(e.lastLine(), Math.max(n.line, t.line)); m <= g; m++) {
                      var v = Ve(o, m).text,
                          y = G(v, d, u);
                      d == p ? i.push(new Ci(tt(m, y), tt(m, y))) : v.length > y && i.push(new Ci(tt(m, y), tt(m, G(v, p, u))));
                    }

                    i.length || i.push(new Ci(n, n)), Qi(o, Si(e, l.ranges.slice(0, s).concat(i), s), {
                      origin: "*mouse",
                      scroll: !1
                    }), e.scrollIntoView(t);
                  } else {
                    var x,
                        b = a,
                        w = va(e, t, r.unit),
                        k = b.anchor;
                    nt(w.anchor, k) > 0 ? (x = w.head, k = at(b.from(), w.anchor)) : (x = w.anchor, k = ot(b.to(), w.head));
                    var C = l.ranges.slice(0);
                    C[s] = function (e, t) {
                      var n = t.anchor,
                          r = t.head,
                          i = Ve(e.doc, n.line);
                      if (0 == nt(n, r) && n.sticky == r.sticky) return t;
                      var o = ce(i);
                      if (!o) return t;
                      var a = le(o, n.ch, n.sticky),
                          s = o[a];
                      if (s.from != n.ch && s.to != n.ch) return t;
                      var l,
                          u = a + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                      if (0 == u || u == o.length) return t;
                      if (r.line != n.line) l = (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;else {
                        var c = le(o, r.ch, r.sticky),
                            h = c - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                        l = c == u - 1 || c == u ? h < 0 : h > 0;
                      }
                      var f = o[u + (l ? -1 : 0)],
                          d = l == (1 == f.level),
                          p = d ? f.from : f.to,
                          m = d ? "after" : "before";
                      return n.ch == p && n.sticky == m ? t : new Ci(new tt(n.line, p, m), r);
                    }(e, new Ci(lt(o, k), x)), Qi(o, Si(e, C, s), q);
                  }
                }

                var d = i.wrapper.getBoundingClientRect(),
                    p = 0;

                function m(t) {
                  e.state.selectingText = !1, p = 1 / 0, t && (be(t), i.input.focus()), pe(i.wrapper.ownerDocument, "mousemove", g), pe(i.wrapper.ownerDocument, "mouseup", v), o.history.lastSelOrigin = null;
                }

                var g = ei(e, function (t) {
                  0 !== t.buttons && Le(t) ? function t(n) {
                    var a = ++p,
                        s = cr(e, n, !0, "rectangle" == r.unit);
                    if (s) if (0 != nt(s, h)) {
                      e.curOp.focus = F(), f(s);
                      var l = Er(i, o);
                      (s.line >= l.to || s.line < l.from) && setTimeout(ei(e, function () {
                        p == a && t(n);
                      }), 150);
                    } else {
                      var u = n.clientY < d.top ? -20 : n.clientY > d.bottom ? 20 : 0;
                      u && setTimeout(ei(e, function () {
                        p == a && (i.scroller.scrollTop += u, t(n));
                      }), 50);
                    }
                  }(t) : m(t);
                }),
                    v = ei(e, m);
                e.state.selectingText = v, fe(i.wrapper.ownerDocument, "mousemove", g), fe(i.wrapper.ownerDocument, "mouseup", v);
              }(e, r, t, o);
            }(t, r, o, e) : Se(e) == n.scroller && be(e) : 2 == i ? (r && Xi(t.doc, r), setTimeout(function () {
              return n.input.focus();
            }, 20)) : 3 == i && (C ? t.display.input.onContextMenu(e) : Sr(t)));
          }
        }

        function va(e, t, n) {
          if ("char" == n) return new Ci(t, t);
          if ("word" == n) return e.findWordAt(t);
          if ("line" == n) return new Ci(tt(t.line, 0), lt(e.doc, tt(t.line + 1, 0)));
          var r = n(e, t);
          return new Ci(r.from, r.to);
        }

        function ya(e, t, n, r) {
          var i, o;
          if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY;else try {
            i = t.clientX, o = t.clientY;
          } catch (t) {
            return !1;
          }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
          r && be(t);
          var a = e.display,
              s = a.lineDiv.getBoundingClientRect();
          if (o > s.bottom || !ye(e, n)) return ke(t);
          o -= s.top - a.viewOffset;

          for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
            var u = a.gutters.childNodes[l];
            if (u && u.getBoundingClientRect().right >= i) return me(e, n, e, Je(e.doc, o), e.display.gutterSpecs[l].className, t), ke(t);
          }
        }

        function xa(e, t) {
          return ya(e, t, "gutterClick", !0);
        }

        function ba(e, t) {
          Cn(e.display, t) || function (e, t) {
            if (!ye(e, "gutterContextMenu")) return !1;
            return ya(e, t, "gutterContextMenu", !1);
          }(e, t) || ge(e, t, "contextmenu") || C || e.display.input.onContextMenu(t);
        }

        function wa(e) {
          e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), _n(e);
        }

        ma.prototype.compare = function (e, t, n) {
          return this.time + 400 > e && 0 == nt(t, this.pos) && n == this.button;
        };

        var ka = {
          toString: function toString() {
            return "CodeMirror.Init";
          }
        },
            Ca = {},
            Sa = {};

        function La(e, t, n) {
          if (!t != !(n && n != ka)) {
            var r = e.display.dragFunctions,
                i = t ? fe : pe;
            i(e.display.scroller, "dragstart", r.start), i(e.display.scroller, "dragenter", r.enter), i(e.display.scroller, "dragover", r.over), i(e.display.scroller, "dragleave", r.leave), i(e.display.scroller, "drop", r.drop);
          }
        }

        function Ta(e) {
          e.options.lineWrapping ? (O(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (T(e.display.wrapper, "CodeMirror-wrap"), Gt(e)), ur(e), fr(e), _n(e), setTimeout(function () {
            return Wr(e);
          }, 100);
        }

        function Ma(e, t) {
          var n = this;
          if (!_instanceof(this, Ma)) return new Ma(e, t);
          this.options = t = t ? z(t) : {}, z(Ca, t, !1);
          var r = t.value;
          "string" == typeof r ? r = new Do(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
          var i = new Ma.inputStyles[t.inputStyle](this),
              o = this.display = new gi(e, r, i, t);

          for (var u in o.wrapper.CodeMirror = this, wa(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), $r(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new H(),
            keySeq: null,
            specialChars: null
          }, t.autofocus && !v && o.input.focus(), a && s < 11 && setTimeout(function () {
            return n.display.input.reset(!0);
          }, 20), function (e) {
            var t = e.display;
            fe(t.scroller, "mousedown", ei(e, ga)), fe(t.scroller, "dblclick", a && s < 11 ? ei(e, function (t) {
              if (!ge(e, t)) {
                var n = cr(e, t);

                if (n && !xa(e, t) && !Cn(e.display, t)) {
                  be(t);
                  var r = e.findWordAt(n);
                  Xi(e.doc, r.anchor, r.head);
                }
              }
            }) : function (t) {
              return ge(e, t) || be(t);
            });
            fe(t.scroller, "contextmenu", function (t) {
              return ba(e, t);
            });
            var n,
                r = {
              end: 0
            };

            function i() {
              t.activeTouch && (n = setTimeout(function () {
                return t.activeTouch = null;
              }, 1e3), (r = t.activeTouch).end = +new Date());
            }

            function o(e, t) {
              if (null == t.left) return !0;
              var n = t.left - e.left,
                  r = t.top - e.top;
              return n * n + r * r > 400;
            }

            fe(t.scroller, "touchstart", function (i) {
              if (!ge(e, i) && !function (e) {
                if (1 != e.touches.length) return !1;
                var t = e.touches[0];
                return t.radiusX <= 1 && t.radiusY <= 1;
              }(i) && !xa(e, i)) {
                t.input.ensurePolled(), clearTimeout(n);
                var o = +new Date();
                t.activeTouch = {
                  start: o,
                  moved: !1,
                  prev: o - r.end <= 300 ? r : null
                }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY);
              }
            }), fe(t.scroller, "touchmove", function () {
              t.activeTouch && (t.activeTouch.moved = !0);
            }), fe(t.scroller, "touchend", function (n) {
              var r = t.activeTouch;

              if (r && !Cn(t, n) && null != r.left && !r.moved && new Date() - r.start < 300) {
                var a,
                    s = e.coordsChar(t.activeTouch, "page");
                a = !r.prev || o(r, r.prev) ? new Ci(s, s) : !r.prev.prev || o(r, r.prev.prev) ? e.findWordAt(s) : new Ci(tt(s.line, 0), lt(e.doc, tt(s.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), be(n);
              }

              i();
            }), fe(t.scroller, "touchcancel", i), fe(t.scroller, "scroll", function () {
              t.scroller.clientHeight && (Rr(e, t.scroller.scrollTop), Pr(e, t.scroller.scrollLeft, !0), me(e, "scroll", e));
            }), fe(t.scroller, "mousewheel", function (t) {
              return wi(e, t);
            }), fe(t.scroller, "DOMMouseScroll", function (t) {
              return wi(e, t);
            }), fe(t.wrapper, "scroll", function () {
              return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0;
            }), t.dragFunctions = {
              enter: function enter(t) {
                ge(e, t) || Ce(t);
              },
              over: function over(t) {
                ge(e, t) || (!function (e, t) {
                  var n = cr(e, t);

                  if (n) {
                    var r = document.createDocumentFragment();
                    xr(e, n, r), e.display.dragCursor || (e.display.dragCursor = E("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), A(e.display.dragCursor, r);
                  }
                }(e, t), Ce(t));
              },
              start: function start(t) {
                return function (e, t) {
                  if (a && (!e.state.draggingText || +new Date() - Fo < 100)) Ce(t);else if (!ge(e, t) && !Cn(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !f)) {
                    var n = E("img", null, null, "position: fixed; left: 0; top: 0;");
                    n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", h && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), h && n.parentNode.removeChild(n);
                  }
                }(e, t);
              },
              drop: ei(e, Oo),
              leave: function leave(t) {
                ge(e, t) || Io(e);
              }
            };
            var l = t.input.getField();
            fe(l, "keyup", function (t) {
              return ha.call(e, t);
            }), fe(l, "keydown", ei(e, ca)), fe(l, "keypress", ei(e, fa)), fe(l, "focus", function (t) {
              return Lr(e, t);
            }), fe(l, "blur", function (t) {
              return Tr(e, t);
            });
          }(this), zo(), Vr(this), this.curOp.forceUpdate = !0, Bi(this, r), t.autofocus && !v || this.hasFocus() ? setTimeout(R(Lr, this), 20) : Tr(this), Sa) {
            Sa.hasOwnProperty(u) && Sa[u](this, t[u], ka);
          }

          fi(this), t.finishInit && t.finishInit(this);

          for (var c = 0; c < Aa.length; ++c) {
            Aa[c](this);
          }

          Xr(this), l && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto");
        }

        Ma.defaults = Ca, Ma.optionHandlers = Sa;
        var Aa = [];

        function Ea(e, t, n, r) {
          var i,
              o = e.doc;
          null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = pt(e, t).state : n = "prev");
          var a = e.options.tabSize,
              s = Ve(o, t),
              l = P(s.text, null, a);
          s.stateAfter && (s.stateAfter = null);
          var u,
              c = s.text.match(/^\s*/)[0];

          if (r || /\S/.test(s.text)) {
            if ("smart" == n && ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == W || u > 150)) {
              if (!r) return;
              n = "prev";
            }
          } else u = 0, n = "not";

          "prev" == n ? u = t > o.first ? P(Ve(o, t - 1).text, null, a) : 0 : "add" == n ? u = l + e.options.indentUnit : "subtract" == n ? u = l - e.options.indentUnit : "number" == typeof n && (u = l + n), u = Math.max(0, u);
          var h = "",
              f = 0;
          if (e.options.indentWithTabs) for (var d = Math.floor(u / a); d; --d) {
            f += a, h += "\t";
          }
          if (f < u && (h += X(u - f)), h != c) return mo(o, h, tt(t, 0), tt(t, c.length), "+input"), s.stateAfter = null, !0;

          for (var p = 0; p < o.sel.ranges.length; p++) {
            var m = o.sel.ranges[p];

            if (m.head.line == t && m.head.ch < c.length) {
              var g = tt(t, c.length);
              Yi(o, p, new Ci(g, g));
              break;
            }
          }
        }

        Ma.defineInitHook = function (e) {
          return Aa.push(e);
        };

        var Na = null;

        function Da(e) {
          Na = e;
        }

        function Fa(e, t, n, r, i) {
          var o = e.doc;
          e.display.shift = !1, r || (r = o.sel);
          var a = +new Date() - 200,
              s = "paste" == i || e.state.pasteIncoming > a,
              l = Fe(t),
              u = null;
          if (s && r.ranges.length > 1) if (Na && Na.text.join("\n") == t) {
            if (r.ranges.length % Na.text.length == 0) {
              u = [];

              for (var c = 0; c < Na.text.length; c++) {
                u.push(o.splitLines(Na.text[c]));
              }
            }
          } else l.length == r.ranges.length && e.options.pasteLinesPerSelection && (u = Y(l, function (e) {
            return [e];
          }));

          for (var h = e.curOp.updateInput, f = r.ranges.length - 1; f >= 0; f--) {
            var d = r.ranges[f],
                p = d.from(),
                m = d.to();
            d.empty() && (n && n > 0 ? p = tt(p.line, p.ch - n) : e.state.overwrite && !s ? m = tt(m.line, Math.min(Ve(o, m.line).text.length, m.ch + K(l).length)) : s && Na && Na.lineWise && Na.text.join("\n") == t && (p = m = tt(p.line, 0)));
            var g = {
              from: p,
              to: m,
              text: u ? u[f % u.length] : l,
              origin: i || (s ? "paste" : e.state.cutIncoming > a ? "cut" : "+input")
            };
            uo(e.doc, g), un(e, "inputRead", e, g);
          }

          t && !s && Ia(e, t), Fr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = h), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
        }

        function Oa(e, t) {
          var n = e.clipboardData && e.clipboardData.getData("Text");
          if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Qr(t, function () {
            return Fa(t, n, 0, null, "paste");
          }), !0;
        }

        function Ia(e, t) {
          if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var i = n.ranges[r];

            if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
              var o = e.getModeAt(i.head),
                  a = !1;

              if (o.electricChars) {
                for (var s = 0; s < o.electricChars.length; s++) {
                  if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                    a = Ea(e, i.head.line, "smart");
                    break;
                  }
                }
              } else o.electricInput && o.electricInput.test(Ve(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Ea(e, i.head.line, "smart"));

              a && un(e, "electricInput", e, i.head.line);
            }
          }
        }

        function Ba(e) {
          for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
            var i = e.doc.sel.ranges[r].head.line,
                o = {
              anchor: tt(i, 0),
              head: tt(i + 1, 0)
            };
            n.push(o), t.push(e.getRange(o.anchor, o.head));
          }

          return {
            text: t,
            ranges: n
          };
        }

        function Ra(e, t, n, r) {
          e.setAttribute("autocorrect", n ? "" : "off"), e.setAttribute("autocapitalize", r ? "" : "off"), e.setAttribute("spellcheck", !!t);
        }

        function za() {
          var e = E("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
              t = E("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
          return l ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), m && (e.style.border = "1px solid black"), Ra(e), t;
        }

        function Pa(e, t, n, r, i) {
          var o = t,
              a = n,
              s = Ve(e, t.line);

          function l(r) {
            var o, a;

            if (null == (o = i ? function (e, t, n, r) {
              var i = ce(t, e.doc.direction);
              if (!i) return Qo(t, n, r);
              n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
              var o = le(i, n.ch, n.sticky),
                  a = i[o];
              if ("ltr" == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) return Qo(t, n, r);

              var s,
                  l = function l(e, n) {
                return Jo(t, _instanceof(e, tt) ? e.ch : e, n);
              },
                  u = function u(n) {
                return e.options.lineWrapping ? (s = s || On(e, t), Qn(e, t, s, n)) : {
                  begin: 0,
                  end: t.text.length
                };
              },
                  c = u("before" == n.sticky ? l(n, -1) : n.ch);

              if ("rtl" == e.doc.direction || 1 == a.level) {
                var h = 1 == a.level == r < 0,
                    f = l(n, h ? 1 : -1);

                if (null != f && (h ? f <= a.to && f <= c.end : f >= a.from && f >= c.begin)) {
                  var d = h ? "before" : "after";
                  return new tt(n.line, f, d);
                }
              }

              var p = function p(e, t, r) {
                for (var o = function o(e, t) {
                  return t ? new tt(n.line, l(e, 1), "before") : new tt(n.line, e, "after");
                }; e >= 0 && e < i.length; e += t) {
                  var a = i[e],
                      s = t > 0 == (1 != a.level),
                      u = s ? r.begin : l(r.end, -1);
                  if (a.from <= u && u < a.to) return o(u, s);
                  if (u = s ? a.from : l(a.to, -1), r.begin <= u && u < r.end) return o(u, s);
                }
              },
                  m = p(o + r, r, c);

              if (m) return m;
              var g = r > 0 ? c.end : l(c.begin, -1);
              return null == g || r > 0 && g == t.text.length || !(m = p(r > 0 ? 0 : i.length - 1, r, u(g))) ? null : m;
            }(e.cm, s, t, n) : Qo(s, t, n))) {
              if (r || (a = t.line + n) < e.first || a >= e.first + e.size || (t = new tt(a, t.ch, t.sticky), !(s = Ve(e, a)))) return !1;
              t = ea(i, e.cm, s, t.line, n);
            } else t = o;

            return !0;
          }

          if ("char" == r) l();else if ("column" == r) l(!0);else if ("word" == r || "group" == r) for (var u = null, c = "group" == r, h = e.cm && e.cm.getHelper(t, "wordChars"), f = !0; !(n < 0) || l(!f); f = !1) {
            var d = s.text.charAt(t.ch) || "\n",
                p = te(d, h) ? "w" : c && "\n" == d ? "n" : !c || /\s/.test(d) ? null : "p";

            if (!c || f || p || (p = "s"), u && u != p) {
              n < 0 && (n = 1, l(), t.sticky = "after");
              break;
            }

            if (p && (u = p), n > 0 && !l(!f)) break;
          }
          var m = oo(e, t, o, a, !0);
          return rt(o, m) && (m.hitSide = !0), m;
        }

        function Ha(e, t, n, r) {
          var i,
              o,
              a = e.doc,
              s = t.left;

          if ("page" == r) {
            var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                u = Math.max(l - .5 * ir(e.display), 3);
            i = (n > 0 ? t.bottom : t.top) + n * u;
          } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);

          for (; (o = Zn(e, s, i)).outside;) {
            if (n < 0 ? i <= 0 : i >= a.height) {
              o.hitSide = !0;
              break;
            }

            i += 5 * n;
          }

          return o;
        }

        var ja = function ja(e) {
          this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new H(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
        };

        function _a(e, t) {
          var n = Fn(e, t.line);
          if (!n || n.hidden) return null;
          var r = Ve(e.doc, t.line),
              i = Nn(n, r, t.line),
              o = ce(r, e.doc.direction),
              a = "left";
          o && (a = le(o, t.ch) % 2 ? "right" : "left");
          var s = zn(i.map, t.ch, a);
          return s.offset = "right" == s.collapse ? s.end : s.start, s;
        }

        function Wa(e, t) {
          return t && (e.bad = !0), e;
        }

        function Ua(e, t, n) {
          var r;

          if (t == e.display.lineDiv) {
            if (!(r = e.display.lineDiv.childNodes[n])) return Wa(e.clipPos(tt(e.display.viewTo - 1)), !0);
            t = null, n = 0;
          } else for (r = t;; r = r.parentNode) {
            if (!r || r == e.display.lineDiv) return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv) break;
          }

          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == r) return qa(o, t, n);
          }
        }

        function qa(e, t, n) {
          var r = e.text.firstChild,
              i = !1;
          if (!t || !D(r, t)) return Wa(tt(Ze(e.line), 0), !0);

          if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
            var o = e.rest ? K(e.rest) : e.line;
            return Wa(tt(Ze(o), o.text.length), i);
          }

          var a = 3 == t.nodeType ? t : null,
              s = t;

          for (a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild, n && (n = a.nodeValue.length)); s.parentNode != r;) {
            s = s.parentNode;
          }

          var l = e.measure,
              u = l.maps;

          function c(t, n, r) {
            for (var i = -1; i < (u ? u.length : 0); i++) {
              for (var o = i < 0 ? l.map : u[i], a = 0; a < o.length; a += 3) {
                var s = o[a + 2];

                if (s == t || s == n) {
                  var c = Ze(i < 0 ? e.line : e.rest[i]),
                      h = o[a] + r;
                  return (r < 0 || s != t) && (h = o[a + (r ? 1 : 0)]), tt(c, h);
                }
              }
            }
          }

          var h = c(a, s, n);
          if (h) return Wa(h, i);

          for (var f = s.nextSibling, d = a ? a.nodeValue.length - n : 0; f; f = f.nextSibling) {
            if (h = c(f, f.firstChild, 0)) return Wa(tt(h.line, h.ch - d), i);
            d += f.textContent.length;
          }

          for (var p = s.previousSibling, m = n; p; p = p.previousSibling) {
            if (h = c(p, p.firstChild, -1)) return Wa(tt(h.line, h.ch + m), i);
            m += p.textContent.length;
          }
        }

        ja.prototype.init = function (e) {
          var t = this,
              n = this,
              r = n.cm,
              i = n.div = e.lineDiv;

          function o(e) {
            if (!ge(r, e)) {
              if (r.somethingSelected()) Da({
                lineWise: !1,
                text: r.getSelections()
              }), "cut" == e.type && r.replaceSelection("", null, "cut");else {
                if (!r.options.lineWiseCopyCut) return;
                var t = Ba(r);
                Da({
                  lineWise: !0,
                  text: t.text
                }), "cut" == e.type && r.operation(function () {
                  r.setSelections(t.ranges, 0, U), r.replaceSelection("", null, "cut");
                });
              }

              if (e.clipboardData) {
                e.clipboardData.clearData();
                var o = Na.text.join("\n");
                if (e.clipboardData.setData("Text", o), e.clipboardData.getData("Text") == o) return void e.preventDefault();
              }

              var a = za(),
                  s = a.firstChild;
              r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), s.value = Na.text.join("\n");
              var l = document.activeElement;
              B(s), setTimeout(function () {
                r.display.lineSpace.removeChild(a), l.focus(), l == i && n.showPrimarySelection();
              }, 50);
            }
          }

          Ra(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize), fe(i, "paste", function (e) {
            ge(r, e) || Oa(e, r) || s <= 11 && setTimeout(ei(r, function () {
              return t.updateFromDOM();
            }), 20);
          }), fe(i, "compositionstart", function (e) {
            t.composing = {
              data: e.data,
              done: !1
            };
          }), fe(i, "compositionupdate", function (e) {
            t.composing || (t.composing = {
              data: e.data,
              done: !1
            });
          }), fe(i, "compositionend", function (e) {
            t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0);
          }), fe(i, "touchstart", function () {
            return n.forceCompositionEnd();
          }), fe(i, "input", function () {
            t.composing || t.readFromDOMSoon();
          }), fe(i, "copy", o), fe(i, "cut", o);
        }, ja.prototype.prepareSelection = function () {
          var e = yr(this.cm, !1);
          return e.focus = this.cm.state.focused, e;
        }, ja.prototype.showSelection = function (e, t) {
          e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
        }, ja.prototype.getSelection = function () {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        }, ja.prototype.showPrimarySelection = function () {
          var e = this.getSelection(),
              t = this.cm,
              r = t.doc.sel.primary(),
              i = r.from(),
              o = r.to();
          if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();else {
            var a = Ua(t, e.anchorNode, e.anchorOffset),
                s = Ua(t, e.focusNode, e.focusOffset);

            if (!a || a.bad || !s || s.bad || 0 != nt(at(a, s), i) || 0 != nt(ot(a, s), o)) {
              var l = t.display.view,
                  u = i.line >= t.display.viewFrom && _a(t, i) || {
                node: l[0].measure.map[2],
                offset: 0
              },
                  c = o.line < t.display.viewTo && _a(t, o);

              if (!c) {
                var h = l[l.length - 1].measure,
                    f = h.maps ? h.maps[h.maps.length - 1] : h.map;
                c = {
                  node: f[f.length - 1],
                  offset: f[f.length - 2] - f[f.length - 3]
                };
              }

              if (u && c) {
                var d,
                    p = e.rangeCount && e.getRangeAt(0);

                try {
                  d = L(u.node, u.offset, c.offset, c.node);
                } catch (e) {}

                d && (!n && t.state.focused ? (e.collapse(u.node, u.offset), d.collapsed || (e.removeAllRanges(), e.addRange(d))) : (e.removeAllRanges(), e.addRange(d)), p && null == e.anchorNode ? e.addRange(p) : n && this.startGracePeriod()), this.rememberSelection();
              } else e.removeAllRanges();
            }
          }
        }, ja.prototype.startGracePeriod = function () {
          var e = this;
          clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
            e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
              return e.cm.curOp.selectionChanged = !0;
            });
          }, 20);
        }, ja.prototype.showMultipleSelections = function (e) {
          A(this.cm.display.cursorDiv, e.cursors), A(this.cm.display.selectionDiv, e.selection);
        }, ja.prototype.rememberSelection = function () {
          var e = this.getSelection();
          this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
        }, ja.prototype.selectionInEditor = function () {
          var e = this.getSelection();
          if (!e.rangeCount) return !1;
          var t = e.getRangeAt(0).commonAncestorContainer;
          return D(this.div, t);
        }, ja.prototype.focus = function () {
          "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus());
        }, ja.prototype.blur = function () {
          this.div.blur();
        }, ja.prototype.getField = function () {
          return this.div;
        }, ja.prototype.supportsTouch = function () {
          return !0;
        }, ja.prototype.receivedFocus = function () {
          var e = this;
          this.selectionInEditor() ? this.pollSelection() : Qr(this.cm, function () {
            return e.cm.curOp.selectionChanged = !0;
          }), this.polling.set(this.cm.options.pollInterval, function t() {
            e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
          });
        }, ja.prototype.selectionChanged = function () {
          var e = this.getSelection();
          return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
        }, ja.prototype.pollSelection = function () {
          if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
            var e = this.getSelection(),
                t = this.cm;
            if (g && c && this.cm.display.gutterSpecs.length && function (e) {
              for (var t = e; t; t = t.parentNode) {
                if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
              }

              return !1;
            }(e.anchorNode)) return this.cm.triggerOnKeyDown({
              type: "keydown",
              keyCode: 8,
              preventDefault: Math.abs
            }), this.blur(), void this.focus();

            if (!this.composing) {
              this.rememberSelection();
              var n = Ua(t, e.anchorNode, e.anchorOffset),
                  r = Ua(t, e.focusNode, e.focusOffset);
              n && r && Qr(t, function () {
                Qi(t.doc, Li(n, r), U), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
              });
            }
          }
        }, ja.prototype.pollContent = function () {
          null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
          var e,
              t,
              n,
              r = this.cm,
              i = r.display,
              o = r.doc.sel.primary(),
              a = o.from(),
              s = o.to();
          if (0 == a.ch && a.line > r.firstLine() && (a = tt(a.line - 1, Ve(r.doc, a.line - 1).length)), s.ch == Ve(r.doc, s.line).text.length && s.line < r.lastLine() && (s = tt(s.line + 1, 0)), a.line < i.viewFrom || s.line > i.viewTo - 1) return !1;
          a.line == i.viewFrom || 0 == (e = hr(r, a.line)) ? (t = Ze(i.view[0].line), n = i.view[0].node) : (t = Ze(i.view[e].line), n = i.view[e - 1].node.nextSibling);
          var l,
              u,
              c = hr(r, s.line);
          if (c == i.view.length - 1 ? (l = i.viewTo - 1, u = i.lineDiv.lastChild) : (l = Ze(i.view[c + 1].line) - 1, u = i.view[c + 1].node.previousSibling), !n) return !1;

          for (var h = r.doc.splitLines(function (e, t, n, r, i) {
            var o = "",
                a = !1,
                s = e.doc.lineSeparator(),
                l = !1;

            function u() {
              a && (o += s, l && (o += s), a = l = !1);
            }

            function c(e) {
              e && (u(), o += e);
            }

            function h(t) {
              if (1 == t.nodeType) {
                var n = t.getAttribute("cm-text");
                if (n) return void c(n);
                var o,
                    f = t.getAttribute("cm-marker");

                if (f) {
                  var d = e.findMarks(tt(r, 0), tt(i + 1, 0), (g = +f, function (e) {
                    return e.id == g;
                  }));
                  return void (d.length && (o = d[0].find(0)) && c(Xe(e.doc, o.from, o.to).join(s)));
                }

                if ("false" == t.getAttribute("contenteditable")) return;
                var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                p && u();

                for (var m = 0; m < t.childNodes.length; m++) {
                  h(t.childNodes[m]);
                }

                /^(pre|p)$/i.test(t.nodeName) && (l = !0), p && (a = !0);
              } else 3 == t.nodeType && c(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));

              var g;
            }

            for (; h(t), t != n;) {
              t = t.nextSibling, l = !1;
            }

            return o;
          }(r, n, u, t, l)), f = Xe(r.doc, tt(t, 0), tt(l, Ve(r.doc, l).text.length)); h.length > 1 && f.length > 1;) {
            if (K(h) == K(f)) h.pop(), f.pop(), l--;else {
              if (h[0] != f[0]) break;
              h.shift(), f.shift(), t++;
            }
          }

          for (var d = 0, p = 0, m = h[0], g = f[0], v = Math.min(m.length, g.length); d < v && m.charCodeAt(d) == g.charCodeAt(d);) {
            ++d;
          }

          for (var y = K(h), x = K(f), b = Math.min(y.length - (1 == h.length ? d : 0), x.length - (1 == f.length ? d : 0)); p < b && y.charCodeAt(y.length - p - 1) == x.charCodeAt(x.length - p - 1);) {
            ++p;
          }

          if (1 == h.length && 1 == f.length && t == a.line) for (; d && d > a.ch && y.charCodeAt(y.length - p - 1) == x.charCodeAt(x.length - p - 1);) {
            d--, p++;
          }
          h[h.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), h[0] = h[0].slice(d).replace(/\u200b+$/, "");
          var w = tt(t, d),
              k = tt(l, f.length ? K(f).length - p : 0);
          return h.length > 1 || h[0] || nt(w, k) ? (mo(r.doc, h, w, k, "+input"), !0) : void 0;
        }, ja.prototype.ensurePolled = function () {
          this.forceCompositionEnd();
        }, ja.prototype.reset = function () {
          this.forceCompositionEnd();
        }, ja.prototype.forceCompositionEnd = function () {
          this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
        }, ja.prototype.readFromDOMSoon = function () {
          var e = this;
          null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
            if (e.readDOMTimeout = null, e.composing) {
              if (!e.composing.done) return;
              e.composing = null;
            }

            e.updateFromDOM();
          }, 80));
        }, ja.prototype.updateFromDOM = function () {
          var e = this;
          !this.cm.isReadOnly() && this.pollContent() || Qr(this.cm, function () {
            return fr(e.cm);
          });
        }, ja.prototype.setUneditable = function (e) {
          e.contentEditable = "false";
        }, ja.prototype.onKeyPress = function (e) {
          0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || ei(this.cm, Fa)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
        }, ja.prototype.readOnlyChanged = function (e) {
          this.div.contentEditable = String("nocursor" != e);
        }, ja.prototype.onContextMenu = function () {}, ja.prototype.resetPosition = function () {}, ja.prototype.needsContentAttribute = !0;

        var $a = function $a(e) {
          this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new H(), this.hasSelection = !1, this.composing = null;
        };

        $a.prototype.init = function (e) {
          var t = this,
              n = this,
              r = this.cm;
          this.createField(e);
          var i = this.textarea;

          function o(e) {
            if (!ge(r, e)) {
              if (r.somethingSelected()) Da({
                lineWise: !1,
                text: r.getSelections()
              });else {
                if (!r.options.lineWiseCopyCut) return;
                var t = Ba(r);
                Da({
                  lineWise: !0,
                  text: t.text
                }), "cut" == e.type ? r.setSelections(t.ranges, null, U) : (n.prevInput = "", i.value = t.text.join("\n"), B(i));
              }
              "cut" == e.type && (r.state.cutIncoming = +new Date());
            }
          }

          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), m && (i.style.width = "0px"), fe(i, "input", function () {
            a && s >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
          }), fe(i, "paste", function (e) {
            ge(r, e) || Oa(e, r) || (r.state.pasteIncoming = +new Date(), n.fastPoll());
          }), fe(i, "cut", o), fe(i, "copy", o), fe(e.scroller, "paste", function (t) {
            if (!Cn(e, t) && !ge(r, t)) {
              if (!i.dispatchEvent) return r.state.pasteIncoming = +new Date(), void n.focus();
              var o = new Event("paste");
              o.clipboardData = t.clipboardData, i.dispatchEvent(o);
            }
          }), fe(e.lineSpace, "selectstart", function (t) {
            Cn(e, t) || be(t);
          }), fe(i, "compositionstart", function () {
            var e = r.getCursor("from");
            n.composing && n.composing.range.clear(), n.composing = {
              start: e,
              range: r.markText(e, r.getCursor("to"), {
                className: "CodeMirror-composing"
              })
            };
          }), fe(i, "compositionend", function () {
            n.composing && (n.poll(), n.composing.range.clear(), n.composing = null);
          });
        }, $a.prototype.createField = function (e) {
          this.wrapper = za(), this.textarea = this.wrapper.firstChild;
        }, $a.prototype.prepareSelection = function () {
          var e = this.cm,
              t = e.display,
              n = e.doc,
              r = yr(e);

          if (e.options.moveInputWithCursor) {
            var i = Xn(e, n.sel.primary().head, "div"),
                o = t.wrapper.getBoundingClientRect(),
                a = t.lineDiv.getBoundingClientRect();
            r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left));
          }

          return r;
        }, $a.prototype.showSelection = function (e) {
          var t = this.cm.display;
          A(t.cursorDiv, e.cursors), A(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
        }, $a.prototype.reset = function (e) {
          if (!this.contextMenuPending && !this.composing) {
            var t = this.cm;

            if (t.somethingSelected()) {
              this.prevInput = "";
              var n = t.getSelection();
              this.textarea.value = n, t.state.focused && B(this.textarea), a && s >= 9 && (this.hasSelection = n);
            } else e || (this.prevInput = this.textarea.value = "", a && s >= 9 && (this.hasSelection = null));
          }
        }, $a.prototype.getField = function () {
          return this.textarea;
        }, $a.prototype.supportsTouch = function () {
          return !1;
        }, $a.prototype.focus = function () {
          if ("nocursor" != this.cm.options.readOnly && (!v || F() != this.textarea)) try {
            this.textarea.focus();
          } catch (e) {}
        }, $a.prototype.blur = function () {
          this.textarea.blur();
        }, $a.prototype.resetPosition = function () {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }, $a.prototype.receivedFocus = function () {
          this.slowPoll();
        }, $a.prototype.slowPoll = function () {
          var e = this;
          this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
            e.poll(), e.cm.state.focused && e.slowPoll();
          });
        }, $a.prototype.fastPoll = function () {
          var e = !1,
              t = this;
          t.pollingFast = !0, t.polling.set(20, function n() {
            t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, n));
          });
        }, $a.prototype.poll = function () {
          var e = this,
              t = this.cm,
              n = this.textarea,
              r = this.prevInput;
          if (this.contextMenuPending || !t.state.focused || Oe(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
          var i = n.value;
          if (i == r && !t.somethingSelected()) return !1;
          if (a && s >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;

          if (t.doc.sel == t.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo");
          }

          for (var l = 0, u = Math.min(r.length, i.length); l < u && r.charCodeAt(l) == i.charCodeAt(l);) {
            ++l;
          }

          return Qr(t, function () {
            Fa(t, i.slice(l), r.length - l, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
              className: "CodeMirror-composing"
            }));
          }), !0;
        }, $a.prototype.ensurePolled = function () {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }, $a.prototype.onKeyPress = function () {
          a && s >= 9 && (this.hasSelection = null), this.fastPoll();
        }, $a.prototype.onContextMenu = function (e) {
          var t = this,
              n = t.cm,
              r = n.display,
              i = t.textarea;
          t.contextMenuPending && t.contextMenuPending();
          var o = cr(n, e),
              u = r.scroller.scrollTop;

          if (o && !h) {
            n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && ei(n, Qi)(n.doc, Li(o), U);
            var c,
                f = i.style.cssText,
                d = t.wrapper.style.cssText,
                p = t.wrapper.offsetParent.getBoundingClientRect();

            if (t.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - p.top - 5) + "px; left: " + (e.clientX - p.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", l && (c = window.scrollY), r.input.focus(), l && window.scrollTo(null, c), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = v, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll), a && s >= 9 && g(), C) {
              Ce(e);

              var m = function m() {
                pe(window, "mouseup", m), setTimeout(v, 20);
              };

              fe(window, "mouseup", m);
            } else setTimeout(v, 50);
          }

          function g() {
            if (null != i.selectionStart) {
              var e = n.somethingSelected(),
                  o = "​" + (e ? i.value : "");
              i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, r.selForContextMenu = n.doc.sel;
            }
          }

          function v() {
            if (t.contextMenuPending == v && (t.contextMenuPending = !1, t.wrapper.style.cssText = d, i.style.cssText = f, a && s < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = u), null != i.selectionStart)) {
              (!a || a && s < 9) && g();

              var e = 0,
                  o = function o() {
                r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? ei(n, so)(n) : e++ < 10 ? r.detectingSelectAll = setTimeout(o, 500) : (r.selForContextMenu = null, r.input.reset());
              };

              r.detectingSelectAll = setTimeout(o, 200);
            }
          }
        }, $a.prototype.readOnlyChanged = function (e) {
          e || this.reset(), this.textarea.disabled = "nocursor" == e;
        }, $a.prototype.setUneditable = function () {}, $a.prototype.needsContentAttribute = !1, function (e) {
          var t = e.optionHandlers;

          function n(n, r, i, o) {
            e.defaults[n] = r, i && (t[n] = o ? function (e, t, n) {
              n != ka && i(e, t, n);
            } : i);
          }

          e.defineOption = n, e.Init = ka, n("value", "", function (e, t) {
            return e.setValue(t);
          }, !0), n("mode", null, function (e, t) {
            e.doc.modeOption = t, Ni(e);
          }, !0), n("indentUnit", 2, Ni, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function (e) {
            Di(e), _n(e), fr(e);
          }, !0), n("lineSeparator", null, function (e, t) {
            if (e.doc.lineSep = t, t) {
              var n = [],
                  r = e.doc.first;
              e.doc.iter(function (e) {
                for (var i = 0;;) {
                  var o = e.text.indexOf(t, i);
                  if (-1 == o) break;
                  i = o + t.length, n.push(tt(r, o));
                }

                r++;
              });

              for (var i = n.length - 1; i >= 0; i--) {
                mo(e.doc, t, n[i], tt(n[i].line, n[i].ch + t.length));
              }
            }
          }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (e, t, n) {
            e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != ka && e.refresh();
          }), n("specialCharPlaceholder", Qt, function (e) {
            return e.refresh();
          }, !0), n("electricChars", !0), n("inputStyle", v ? "contenteditable" : "textarea", function () {
            throw new Error("inputStyle can not (yet) be changed in a running editor");
          }, !0), n("spellcheck", !1, function (e, t) {
            return e.getInputField().spellcheck = t;
          }, !0), n("autocorrect", !1, function (e, t) {
            return e.getInputField().autocorrect = t;
          }, !0), n("autocapitalize", !1, function (e, t) {
            return e.getInputField().autocapitalize = t;
          }, !0), n("rtlMoveVisually", !b), n("wholeLineUpdateBefore", !0), n("theme", "default", function (e) {
            wa(e), mi(e);
          }, !0), n("keyMap", "default", function (e, t, n) {
            var r = Yo(t),
                i = n != ka && Yo(n);
            i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
          }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, Ta, !0), n("gutters", [], function (e, t) {
            e.display.gutterSpecs = di(t, e.options.lineNumbers), mi(e);
          }, !0), n("fixedGutter", !0, function (e, t) {
            e.display.gutters.style.left = t ? sr(e.display) + "px" : "0", e.refresh();
          }, !0), n("coverGutterNextToScrollbar", !1, function (e) {
            return Wr(e);
          }, !0), n("scrollbarStyle", "native", function (e) {
            $r(e), Wr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
          }, !0), n("lineNumbers", !1, function (e, t) {
            e.display.gutterSpecs = di(e.options.gutters, t), mi(e);
          }, !0), n("firstLineNumber", 1, mi, !0), n("lineNumberFormatter", function (e) {
            return e;
          }, mi, !0), n("showCursorWhenSelecting", !1, vr, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, function (e, t) {
            "nocursor" == t && (Tr(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
          }), n("disableInput", !1, function (e, t) {
            t || e.display.input.reset();
          }, !0), n("dragDrop", !0, La), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, vr, !0), n("singleCursorHeightPerLine", !0, vr, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, Di, !0), n("addModeClass", !1, Di, !0), n("pollInterval", 100), n("undoDepth", 200, function (e, t) {
            return e.doc.history.undoDepth = t;
          }), n("historyEventDelay", 1250), n("viewportMargin", 10, function (e) {
            return e.refresh();
          }, !0), n("maxHighlightLength", 1e4, Di, !0), n("moveInputWithCursor", !0, function (e, t) {
            t || e.display.input.resetPosition();
          }), n("tabindex", null, function (e, t) {
            return e.display.input.getField().tabIndex = t || "";
          }), n("autofocus", null), n("direction", "ltr", function (e, t) {
            return e.doc.setDirection(t);
          }, !0), n("phrases", null);
        }(Ma), function (e) {
          var t = e.optionHandlers,
              n = e.helpers = {};
          e.prototype = {
            constructor: e,
            focus: function focus() {
              window.focus(), this.display.input.focus();
            },
            setOption: function setOption(e, n) {
              var r = this.options,
                  i = r[e];
              r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && ei(this, t[e])(this, n, i), me(this, "optionChange", this, e));
            },
            getOption: function getOption(e) {
              return this.options[e];
            },
            getDoc: function getDoc() {
              return this.doc;
            },
            addKeyMap: function addKeyMap(e, t) {
              this.state.keyMaps[t ? "push" : "unshift"](Yo(e));
            },
            removeKeyMap: function removeKeyMap(e) {
              for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) {
                if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
              }
            },
            addOverlay: ti(function (t, n) {
              var r = t.token ? t : e.getMode(this.options, t);
              if (r.startState) throw new Error("Overlays may not be stateful.");
              !function (e, t, n) {
                for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) {
                  r++;
                }

                e.splice(r, 0, t);
              }(this.state.overlays, {
                mode: r,
                modeSpec: t,
                opaque: n && n.opaque,
                priority: n && n.priority || 0
              }, function (e) {
                return e.priority;
              }), this.state.modeGen++, fr(this);
            }),
            removeOverlay: ti(function (e) {
              for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                var r = t[n].modeSpec;
                if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void fr(this);
              }
            }),
            indentLine: ti(function (e, t, n) {
              "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), Qe(this.doc, e) && Ea(this, e, t, n);
            }),
            indentSelection: ti(function (e) {
              for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                var i = t[r];
                if (i.empty()) i.head.line > n && (Ea(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && Fr(this));else {
                  var o = i.from(),
                      a = i.to(),
                      s = Math.max(n, o.line);
                  n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;

                  for (var l = s; l < n; ++l) {
                    Ea(this, l, e);
                  }

                  var u = this.doc.sel.ranges;
                  0 == o.ch && t.length == u.length && u[r].from().ch > 0 && Yi(this.doc, r, new Ci(o, u[r].to()), U);
                }
              }
            }),
            getTokenAt: function getTokenAt(e, t) {
              return xt(this, e, t);
            },
            getLineTokens: function getLineTokens(e, t) {
              return xt(this, tt(e), t, !0);
            },
            getTokenTypeAt: function getTokenTypeAt(e) {
              e = lt(this.doc, e);
              var t,
                  n = dt(this, Ve(this.doc, e.line)),
                  r = 0,
                  i = (n.length - 1) / 2,
                  o = e.ch;
              if (0 == o) t = n[2];else for (;;) {
                var a = r + i >> 1;
                if ((a ? n[2 * a - 1] : 0) >= o) i = a;else {
                  if (!(n[2 * a + 1] < o)) {
                    t = n[2 * a + 2];
                    break;
                  }

                  r = a + 1;
                }
              }
              var s = t ? t.indexOf("overlay ") : -1;
              return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1);
            },
            getModeAt: function getModeAt(t) {
              var n = this.doc.mode;
              return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
            },
            getHelper: function getHelper(e, t) {
              return this.getHelpers(e, t)[0];
            },
            getHelpers: function getHelpers(e, t) {
              var r = [];
              if (!n.hasOwnProperty(t)) return r;
              var i = n[t],
                  o = this.getModeAt(e);
              if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);else if (o[t]) for (var a = 0; a < o[t].length; a++) {
                var s = i[o[t][a]];
                s && r.push(s);
              } else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);

              for (var l = 0; l < i._global.length; l++) {
                var u = i._global[l];
                u.pred(o, this) && -1 == j(r, u.val) && r.push(u.val);
              }

              return r;
            },
            getStateAfter: function getStateAfter(e, t) {
              var n = this.doc;
              return pt(this, (e = st(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state;
            },
            cursorCoords: function cursorCoords(e, t) {
              var n = this.doc.sel.primary();
              return Xn(this, null == e ? n.head : "object" == _typeof(e) ? lt(this.doc, e) : e ? n.from() : n.to(), t || "page");
            },
            charCoords: function charCoords(e, t) {
              return Vn(this, lt(this.doc, e), t || "page");
            },
            coordsChar: function coordsChar(e, t) {
              return Zn(this, (e = Gn(this, e, t || "page")).left, e.top);
            },
            lineAtHeight: function lineAtHeight(e, t) {
              return e = Gn(this, {
                top: e,
                left: 0
              }, t || "page").top, Je(this.doc, e + this.display.viewOffset);
            },
            heightAtLine: function heightAtLine(e, t, n) {
              var r,
                  i = !1;

              if ("number" == typeof e) {
                var o = this.doc.first + this.doc.size - 1;
                e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), r = Ve(this.doc, e);
              } else r = e;

              return $n(this, r, {
                top: 0,
                left: 0
              }, t || "page", n || i).top + (i ? this.doc.height - qt(r) : 0);
            },
            defaultTextHeight: function defaultTextHeight() {
              return ir(this.display);
            },
            defaultCharWidth: function defaultCharWidth() {
              return or(this.display);
            },
            getViewport: function getViewport() {
              return {
                from: this.display.viewFrom,
                to: this.display.viewTo
              };
            },
            addWidget: function addWidget(e, t, n, r, i) {
              var o,
                  a,
                  s,
                  l = this.display,
                  u = (e = Xn(this, lt(this.doc, e))).bottom,
                  c = e.left;
              if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), l.sizer.appendChild(t), "over" == r) u = e.top;else if ("above" == r || "near" == r) {
                var h = Math.max(l.wrapper.clientHeight, this.doc.height),
                    f = Math.max(l.sizer.clientWidth, l.lineSpace.clientWidth);
                ("above" == r || e.bottom + t.offsetHeight > h) && e.top > t.offsetHeight ? u = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= h && (u = e.bottom), c + t.offsetWidth > f && (c = f - t.offsetWidth);
              }
              t.style.top = u + "px", t.style.left = t.style.right = "", "right" == i ? (c = l.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? c = 0 : "middle" == i && (c = (l.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = c + "px"), n && (o = this, a = {
                left: c,
                top: u,
                right: c + t.offsetWidth,
                bottom: u + t.offsetHeight
              }, null != (s = Nr(o, a)).scrollTop && Rr(o, s.scrollTop), null != s.scrollLeft && Pr(o, s.scrollLeft));
            },
            triggerOnKeyDown: ti(ca),
            triggerOnKeyPress: ti(fa),
            triggerOnKeyUp: ha,
            triggerOnMouseDown: ti(ga),
            execCommand: function execCommand(e) {
              if (ta.hasOwnProperty(e)) return ta[e].call(null, this);
            },
            triggerElectric: ti(function (e) {
              Ia(this, e);
            }),
            findPosH: function findPosH(e, t, n, r) {
              var i = 1;
              t < 0 && (i = -1, t = -t);

              for (var o = lt(this.doc, e), a = 0; a < t && !(o = Pa(this.doc, o, i, n, r)).hitSide; ++a) {
                ;
              }

              return o;
            },
            moveH: ti(function (e, t) {
              var n = this;
              this.extendSelectionsBy(function (r) {
                return n.display.shift || n.doc.extend || r.empty() ? Pa(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to();
              }, $);
            }),
            deleteH: ti(function (e, t) {
              var n = this.doc.sel,
                  r = this.doc;
              n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Zo(this, function (n) {
                var i = Pa(r, n.head, e, t, !1);
                return e < 0 ? {
                  from: i,
                  to: n.head
                } : {
                  from: n.head,
                  to: i
                };
              });
            }),
            findPosV: function findPosV(e, t, n, r) {
              var i = 1,
                  o = r;
              t < 0 && (i = -1, t = -t);

              for (var a = lt(this.doc, e), s = 0; s < t; ++s) {
                var l = Xn(this, a, "div");
                if (null == o ? o = l.left : l.left = o, (a = Ha(this, l, i, n)).hitSide) break;
              }

              return a;
            },
            moveV: ti(function (e, t) {
              var n = this,
                  r = this.doc,
                  i = [],
                  o = !this.display.shift && !r.extend && r.sel.somethingSelected();
              if (r.extendSelectionsBy(function (a) {
                if (o) return e < 0 ? a.from() : a.to();
                var s = Xn(n, a.head, "div");
                null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left);
                var l = Ha(n, s, e, t);
                return "page" == t && a == r.sel.primary() && Dr(n, Vn(n, l, "div").top - s.top), l;
              }, $), i.length) for (var a = 0; a < r.sel.ranges.length; a++) {
                r.sel.ranges[a].goalColumn = i[a];
              }
            }),
            findWordAt: function findWordAt(e) {
              var t = Ve(this.doc, e.line).text,
                  n = e.ch,
                  r = e.ch;

              if (t) {
                var i = this.getHelper(e, "wordChars");
                "before" != e.sticky && r != t.length || !n ? ++r : --n;

                for (var o = t.charAt(n), a = te(o, i) ? function (e) {
                  return te(e, i);
                } : /\s/.test(o) ? function (e) {
                  return /\s/.test(e);
                } : function (e) {
                  return !/\s/.test(e) && !te(e);
                }; n > 0 && a(t.charAt(n - 1));) {
                  --n;
                }

                for (; r < t.length && a(t.charAt(r));) {
                  ++r;
                }
              }

              return new Ci(tt(e.line, n), tt(e.line, r));
            },
            toggleOverwrite: function toggleOverwrite(e) {
              null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? O(this.display.cursorDiv, "CodeMirror-overwrite") : T(this.display.cursorDiv, "CodeMirror-overwrite"), me(this, "overwriteToggle", this, this.state.overwrite));
            },
            hasFocus: function hasFocus() {
              return this.display.input.getField() == F();
            },
            isReadOnly: function isReadOnly() {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: ti(function (e, t) {
              Or(this, e, t);
            }),
            getScrollInfo: function getScrollInfo() {
              var e = this.display.scroller;
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - Mn(this) - this.display.barHeight,
                width: e.scrollWidth - Mn(this) - this.display.barWidth,
                clientHeight: En(this),
                clientWidth: An(this)
              };
            },
            scrollIntoView: ti(function (e, t) {
              null == e ? (e = {
                from: this.doc.sel.primary().head,
                to: null
              }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                from: tt(e, 0),
                to: null
              } : null == e.from && (e = {
                from: e,
                to: null
              }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? function (e, t) {
                Ir(e), e.curOp.scrollToPos = t;
              }(this, e) : Br(this, e.from, e.to, e.margin);
            }),
            setSize: ti(function (e, t) {
              var n = this,
                  r = function r(e) {
                return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
              };

              null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && jn(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function (e) {
                if (e.widgets) for (var t = 0; t < e.widgets.length; t++) {
                  if (e.widgets[t].noHScroll) {
                    dr(n, i, "widget");
                    break;
                  }
                }
                ++i;
              }), this.curOp.forceUpdate = !0, me(this, "refresh", this);
            }),
            operation: function operation(e) {
              return Qr(this, e);
            },
            startOperation: function startOperation() {
              return Vr(this);
            },
            endOperation: function endOperation() {
              return Xr(this);
            },
            refresh: ti(function () {
              var e = this.display.cachedTextHeight;
              fr(this), this.curOp.forceUpdate = !0, _n(this), Or(this, this.doc.scrollLeft, this.doc.scrollTop), ui(this.display), (null == e || Math.abs(e - ir(this.display)) > .5) && ur(this), me(this, "refresh", this);
            }),
            swapDoc: ti(function (e) {
              var t = this.doc;
              return t.cm = null, this.state.selectingText && this.state.selectingText(), Bi(this, e), _n(this), this.display.input.reset(), Or(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, un(this, "swapDoc", this, t), t;
            }),
            phrase: function phrase(e) {
              var t = this.options.phrases;
              return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
            },
            getInputField: function getInputField() {
              return this.display.input.getField();
            },
            getWrapperElement: function getWrapperElement() {
              return this.display.wrapper;
            },
            getScrollerElement: function getScrollerElement() {
              return this.display.scroller;
            },
            getGutterElement: function getGutterElement() {
              return this.display.gutters;
            }
          }, xe(e), e.registerHelper = function (t, r, i) {
            n.hasOwnProperty(t) || (n[t] = e[t] = {
              _global: []
            }), n[t][r] = i;
          }, e.registerGlobalHelper = function (t, r, i, o) {
            e.registerHelper(t, r, o), n[t]._global.push({
              pred: i,
              val: o
            });
          };
        }(Ma);
        var Ga = "iter insert remove copy getEditor constructor".split(" ");

        for (var Va in Do.prototype) {
          Do.prototype.hasOwnProperty(Va) && j(Ga, Va) < 0 && (Ma.prototype[Va] = function (e) {
            return function () {
              return e.apply(this.doc, arguments);
            };
          }(Do.prototype[Va]));
        }

        return xe(Do), Ma.inputStyles = {
          textarea: $a,
          contenteditable: ja
        }, Ma.defineMode = function (e) {
          Ma.defaults.mode || "null" == e || (Ma.defaults.mode = e), Pe.apply(this, arguments);
        }, Ma.defineMIME = function (e, t) {
          ze[e] = t;
        }, Ma.defineMode("null", function () {
          return {
            token: function token(e) {
              return e.skipToEnd();
            }
          };
        }), Ma.defineMIME("text/plain", "null"), Ma.defineExtension = function (e, t) {
          Ma.prototype[e] = t;
        }, Ma.defineDocExtension = function (e, t) {
          Do.prototype[e] = t;
        }, Ma.fromTextArea = function (e, t) {
          if ((t = t ? z(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
            var n = F();
            t.autofocus = n == e || null != e.getAttribute("autofocus") && n == document.body;
          }

          function r() {
            e.value = s.getValue();
          }

          var i;

          if (e.form && (fe(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
            var o = e.form;
            i = o.submit;

            try {
              var a = o.submit = function () {
                r(), o.submit = i, o.submit(), o.submit = a;
              };
            } catch (e) {}
          }

          t.finishInit = function (n) {
            n.save = r, n.getTextArea = function () {
              return e;
            }, n.toTextArea = function () {
              n.toTextArea = isNaN, r(), e.parentNode.removeChild(n.getWrapperElement()), e.style.display = "", e.form && (pe(e.form, "submit", r), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = i));
            };
          }, e.style.display = "none";
          var s = Ma(function (t) {
            return e.parentNode.insertBefore(t, e.nextSibling);
          }, t);
          return s;
        }, function (e) {
          e.off = pe, e.on = fe, e.wheelEventPixels = bi, e.Doc = Do, e.splitLines = Fe, e.countColumn = P, e.findColumn = G, e.isWordChar = ee, e.Pass = W, e.signal = me, e.Line = Vt, e.changeEnd = Ti, e.scrollbarModel = qr, e.Pos = tt, e.cmpPos = nt, e.modes = Re, e.mimeModes = ze, e.resolveMode = He, e.getMode = je, e.modeExtensions = _e, e.extendMode = We, e.copyState = Ue, e.startState = $e, e.innerMode = qe, e.commands = ta, e.keyMap = Uo, e.keyName = Ko, e.isModifierKey = Vo, e.lookupKey = Go, e.normalizeKeyMap = $o, e.StringStream = Ge, e.SharedTextMarker = Mo, e.TextMarker = Lo, e.LineWidget = ko, e.e_preventDefault = be, e.e_stopPropagation = we, e.e_stop = Ce, e.addClass = O, e.contains = D, e.rmClass = T, e.keyNames = Ho;
        }(Ma), Ma.version = "5.50.2", Ma;
      });
    }, {}],
    12: [function (e, t, n) {
      var r;
      r = function r(e) {
        "use strict";

        var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
        e.defineMode("gfm", function (n, r) {
          var i = 0,
              o = {
            startState: function startState() {
              return {
                code: !1,
                codeBlock: !1,
                ateSpace: !1
              };
            },
            copyState: function copyState(e) {
              return {
                code: e.code,
                codeBlock: e.codeBlock,
                ateSpace: e.ateSpace
              };
            },
            token: function token(e, n) {
              if (n.combineTokens = null, n.codeBlock) return e.match(/^```+/) ? (n.codeBlock = !1, null) : (e.skipToEnd(), null);
              if (e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)) return e.skipToEnd(), n.codeBlock = !0, null;

              if ("`" === e.peek()) {
                e.next();
                var o = e.pos;
                e.eatWhile("`");
                var a = 1 + e.pos - o;
                return n.code ? a === i && (n.code = !1) : (i = a, n.code = !0), null;
              }

              if (n.code) return e.next(), null;
              if (e.eatSpace()) return n.ateSpace = !0, null;

              if ((e.sol() || n.ateSpace) && (n.ateSpace = !1, !1 !== r.gitHubSpice)) {
                if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/)) return n.combineTokens = !0, "link";
                if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) return n.combineTokens = !0, "link";
              }

              return e.match(t) && "](" != e.string.slice(e.start - 2, e.start) && (0 == e.start || /\W/.test(e.string.charAt(e.start - 1))) ? (n.combineTokens = !0, "link") : (e.next(), null);
            },
            blankLine: function blankLine(e) {
              return e.code = !1, null;
            }
          },
              a = {
            taskLists: !0,
            strikethrough: !0,
            emoji: !0
          };

          for (var s in r) {
            a[s] = r[s];
          }

          return a.name = "markdown", e.overlayMode(e.getMode(n, a), o);
        }, "markdown"), e.defineMIME("text/x-gfm", "gfm");
      }, "object" == _typeof(n) && "object" == _typeof(t) ? r(e("../../lib/codemirror"), e("../markdown/markdown"), e("../../addon/mode/overlay")) : r(CodeMirror);
    }, {
      "../../addon/mode/overlay": 8,
      "../../lib/codemirror": 11,
      "../markdown/markdown": 13
    }],
    13: [function (e, t, n) {
      var r;
      r = function r(e) {
        "use strict";

        e.defineMode("markdown", function (t, n) {
          var r = e.getMode(t, "text/html"),
              i = "null" == r.name;
          void 0 === n.highlightFormatting && (n.highlightFormatting = !1), void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0), void 0 === n.taskLists && (n.taskLists = !1), void 0 === n.strikethrough && (n.strikethrough = !1), void 0 === n.emoji && (n.emoji = !1), void 0 === n.fencedCodeBlockHighlighting && (n.fencedCodeBlockHighlighting = !0), void 0 === n.xml && (n.xml = !0), void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {});
          var o = {
            header: "header",
            code: "comment",
            quote: "quote",
            list1: "variable-2",
            list2: "variable-3",
            list3: "keyword",
            hr: "hr",
            image: "image",
            imageAltText: "image-alt-text",
            imageMarker: "image-marker",
            formatting: "formatting",
            linkInline: "link",
            linkEmail: "link",
            linkText: "link",
            linkHref: "string",
            em: "em",
            strong: "strong",
            strikethrough: "strikethrough",
            emoji: "builtin"
          };

          for (var a in o) {
            o.hasOwnProperty(a) && n.tokenTypeOverrides[a] && (o[a] = n.tokenTypeOverrides[a]);
          }

          var s = /^([*\-_])(?:\s*\1){2,}\s*$/,
              l = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
              u = /^\[(x| )\](?=\s)/i,
              c = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
              h = /^ *(?:\={1,}|-{1,})\s*$/,
              f = /^[^#!\[\]*_\\<>` "'(~:]+/,
              d = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/,
              p = /^\s*\[[^\]]+?\]:.*$/,
              m = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/;

          function g(e, t, n) {
            return t.f = t.inline = n, n(e, t);
          }

          function v(e, t, n) {
            return t.f = t.block = n, n(e, t);
          }

          function y(t) {
            if (t.linkTitle = !1, t.linkHref = !1, t.linkText = !1, t.em = !1, t.strong = !1, t.strikethrough = !1, t.quote = 0, t.indentedCode = !1, t.f == b) {
              var n = i;

              if (!n) {
                var o = e.innerMode(r, t.htmlState);
                n = "xml" == o.mode.name && null === o.state.tagStart && !o.state.context && o.state.tokenize.isInText;
              }

              n && (t.f = S, t.block = x, t.htmlState = null);
            }

            return t.trailingSpace = 0, t.trailingSpaceNewLine = !1, t.prevLine = t.thisLine, t.thisLine = {
              stream: null
            }, null;
          }

          function x(r, i) {
            var a,
                f = r.column() === i.indentation,
                m = !(a = i.prevLine.stream) || !/\S/.test(a.string),
                v = i.indentedCode,
                y = i.prevLine.hr,
                x = !1 !== i.list,
                b = (i.listStack[i.listStack.length - 1] || 0) + 3;
            i.indentedCode = !1;
            var C = i.indentation;

            if (null === i.indentationDiff && (i.indentationDiff = i.indentation, x)) {
              for (i.list = null; C < i.listStack[i.listStack.length - 1];) {
                i.listStack.pop(), i.listStack.length ? i.indentation = i.listStack[i.listStack.length - 1] : i.list = !1;
              }

              !1 !== i.list && (i.indentationDiff = C - i.listStack[i.listStack.length - 1]);
            }

            var S = !(m || y || i.prevLine.header || x && v || i.prevLine.fencedCodeEnd),
                L = (!1 === i.list || y || m) && i.indentation <= b && r.match(s),
                T = null;
            if (i.indentationDiff >= 4 && (v || i.prevLine.fencedCodeEnd || i.prevLine.header || m)) return r.skipToEnd(), i.indentedCode = !0, o.code;
            if (r.eatSpace()) return null;
            if (f && i.indentation <= b && (T = r.match(c)) && T[1].length <= 6) return i.quote = 0, i.header = T[1].length, i.thisLine.header = !0, n.highlightFormatting && (i.formatting = "header"), i.f = i.inline, k(i);
            if (i.indentation <= b && r.eat(">")) return i.quote = f ? 1 : i.quote + 1, n.highlightFormatting && (i.formatting = "quote"), r.eatSpace(), k(i);

            if (!L && !i.setext && f && i.indentation <= b && (T = r.match(l))) {
              var M = T[1] ? "ol" : "ul";
              return i.indentation = C + r.current().length, i.list = !0, i.quote = 0, i.listStack.push(i.indentation), i.em = !1, i.strong = !1, i.code = !1, i.strikethrough = !1, n.taskLists && r.match(u, !1) && (i.taskList = !0), i.f = i.inline, n.highlightFormatting && (i.formatting = ["list", "list-" + M]), k(i);
            }

            return f && i.indentation <= b && (T = r.match(d, !0)) ? (i.quote = 0, i.fencedEndRE = new RegExp(T[1] + "+ *$"), i.localMode = n.fencedCodeBlockHighlighting && function (n) {
              if (e.findModeByName) {
                var r = e.findModeByName(n);
                r && (n = r.mime || r.mimes[0]);
              }

              var i = e.getMode(t, n);
              return "null" == i.name ? null : i;
            }(T[2]), i.localMode && (i.localState = e.startState(i.localMode)), i.f = i.block = w, n.highlightFormatting && (i.formatting = "code-block"), i.code = -1, k(i)) : i.setext || !(S && x || i.quote || !1 !== i.list || i.code || L || p.test(r.string)) && (T = r.lookAhead(1)) && (T = T.match(h)) ? (i.setext ? (i.header = i.setext, i.setext = 0, r.skipToEnd(), n.highlightFormatting && (i.formatting = "header")) : (i.header = "=" == T[0].charAt(0) ? 1 : 2, i.setext = i.header), i.thisLine.header = !0, i.f = i.inline, k(i)) : L ? (r.skipToEnd(), i.hr = !0, i.thisLine.hr = !0, o.hr) : "[" === r.peek() ? g(r, i, A) : g(r, i, i.inline);
          }

          function b(t, n) {
            var o = r.token(t, n.htmlState);

            if (!i) {
              var a = e.innerMode(r, n.htmlState);
              ("xml" == a.mode.name && null === a.state.tagStart && !a.state.context && a.state.tokenize.isInText || n.md_inside && t.current().indexOf(">") > -1) && (n.f = S, n.block = x, n.htmlState = null);
            }

            return o;
          }

          function w(e, t) {
            var r,
                i = t.listStack[t.listStack.length - 1] || 0,
                a = t.indentation < i,
                s = i + 3;
            return t.fencedEndRE && t.indentation <= s && (a || e.match(t.fencedEndRE)) ? (n.highlightFormatting && (t.formatting = "code-block"), a || (r = k(t)), t.localMode = t.localState = null, t.block = x, t.f = S, t.fencedEndRE = null, t.code = 0, t.thisLine.fencedCodeEnd = !0, a ? v(e, t, t.block) : r) : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), o.code);
          }

          function k(e) {
            var t = [];

            if (e.formatting) {
              t.push(o.formatting), "string" == typeof e.formatting && (e.formatting = [e.formatting]);

              for (var r = 0; r < e.formatting.length; r++) {
                t.push(o.formatting + "-" + e.formatting[r]), "header" === e.formatting[r] && t.push(o.formatting + "-" + e.formatting[r] + "-" + e.header), "quote" === e.formatting[r] && (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(o.formatting + "-" + e.formatting[r] + "-" + e.quote) : t.push("error"));
              }
            }

            if (e.taskOpen) return t.push("meta"), t.length ? t.join(" ") : null;
            if (e.taskClosed) return t.push("property"), t.length ? t.join(" ") : null;

            if (e.linkHref ? t.push(o.linkHref, "url") : (e.strong && t.push(o.strong), e.em && t.push(o.em), e.strikethrough && t.push(o.strikethrough), e.emoji && t.push(o.emoji), e.linkText && t.push(o.linkText), e.code && t.push(o.code), e.image && t.push(o.image), e.imageAltText && t.push(o.imageAltText, "link"), e.imageMarker && t.push(o.imageMarker)), e.header && t.push(o.header, o.header + "-" + e.header), e.quote && (t.push(o.quote), !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(o.quote + "-" + e.quote) : t.push(o.quote + "-" + n.maxBlockquoteDepth)), !1 !== e.list) {
              var i = (e.listStack.length - 1) % 3;
              i ? 1 === i ? t.push(o.list2) : t.push(o.list3) : t.push(o.list1);
            }

            return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")), t.length ? t.join(" ") : null;
          }

          function C(e, t) {
            if (e.match(f, !0)) return k(t);
          }

          function S(t, i) {
            var a = i.text(t, i);
            if (void 0 !== a) return a;
            if (i.list) return i.list = null, k(i);
            if (i.taskList) return " " === t.match(u, !0)[1] ? i.taskOpen = !0 : i.taskClosed = !0, n.highlightFormatting && (i.formatting = "task"), i.taskList = !1, k(i);
            if (i.taskOpen = !1, i.taskClosed = !1, i.header && t.match(/^#+$/, !0)) return n.highlightFormatting && (i.formatting = "header"), k(i);
            var s = t.next();

            if (i.linkTitle) {
              i.linkTitle = !1;
              var l = s;
              "(" === s && (l = ")");
              var c = "^\\s*(?:[^" + (l = (l + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1")) + "\\\\]+|\\\\\\\\|\\\\.)" + l;
              if (t.match(new RegExp(c), !0)) return o.linkHref;
            }

            if ("`" === s) {
              var h = i.formatting;
              n.highlightFormatting && (i.formatting = "code"), t.eatWhile("`");
              var f = t.current().length;

              if (0 != i.code || i.quote && 1 != f) {
                if (f == i.code) {
                  var d = k(i);
                  return i.code = 0, d;
                }

                return i.formatting = h, k(i);
              }

              return i.code = f, k(i);
            }

            if (i.code) return k(i);

            if ("\\" === s && (t.next(), n.highlightFormatting)) {
              var p = k(i),
                  g = o.formatting + "-escape";
              return p ? p + " " + g : g;
            }

            if ("!" === s && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return i.imageMarker = !0, i.image = !0, n.highlightFormatting && (i.formatting = "image"), k(i);
            if ("[" === s && i.imageMarker && t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)) return i.imageMarker = !1, i.imageAltText = !0, n.highlightFormatting && (i.formatting = "image"), k(i);

            if ("]" === s && i.imageAltText) {
              n.highlightFormatting && (i.formatting = "image");
              var p = k(i);
              return i.imageAltText = !1, i.image = !1, i.inline = i.f = T, p;
            }

            if ("[" === s && !i.image) return i.linkText && t.match(/^.*?\]/) ? k(i) : (i.linkText = !0, n.highlightFormatting && (i.formatting = "link"), k(i));

            if ("]" === s && i.linkText) {
              n.highlightFormatting && (i.formatting = "link");
              var p = k(i);
              return i.linkText = !1, i.inline = i.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? T : S, p;
            }

            if ("<" === s && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) return i.f = i.inline = L, n.highlightFormatting && (i.formatting = "link"), (p = k(i)) ? p += " " : p = "", p + o.linkInline;
            if ("<" === s && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) return i.f = i.inline = L, n.highlightFormatting && (i.formatting = "link"), (p = k(i)) ? p += " " : p = "", p + o.linkEmail;

            if (n.xml && "<" === s && t.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i, !1)) {
              var y = t.string.indexOf(">", t.pos);

              if (-1 != y) {
                var x = t.string.substring(t.start, y);
                /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(x) && (i.md_inside = !0);
              }

              return t.backUp(1), i.htmlState = e.startState(r), v(t, i, b);
            }

            if (n.xml && "<" === s && t.match(/^\/\w*?>/)) return i.md_inside = !1, "tag";

            if ("*" === s || "_" === s) {
              for (var w = 1, C = 1 == t.pos ? " " : t.string.charAt(t.pos - 2); w < 3 && t.eat(s);) {
                w++;
              }

              var M = t.peek() || " ",
                  A = !/\s/.test(M) && (!m.test(M) || /\s/.test(C) || m.test(C)),
                  E = !/\s/.test(C) && (!m.test(C) || /\s/.test(M) || m.test(M)),
                  N = null,
                  D = null;
              if (w % 2 && (i.em || !A || "*" !== s && E && !m.test(C) ? i.em != s || !E || "*" !== s && A && !m.test(M) || (N = !1) : N = !0), w > 1 && (i.strong || !A || "*" !== s && E && !m.test(C) ? i.strong != s || !E || "*" !== s && A && !m.test(M) || (D = !1) : D = !0), null != D || null != N) return n.highlightFormatting && (i.formatting = null == N ? "strong" : null == D ? "em" : "strong em"), !0 === N && (i.em = s), !0 === D && (i.strong = s), d = k(i), !1 === N && (i.em = !1), !1 === D && (i.strong = !1), d;
            } else if (" " === s && (t.eat("*") || t.eat("_"))) {
              if (" " === t.peek()) return k(i);
              t.backUp(1);
            }

            if (n.strikethrough) if ("~" === s && t.eatWhile(s)) {
              if (i.strikethrough) return n.highlightFormatting && (i.formatting = "strikethrough"), d = k(i), i.strikethrough = !1, d;
              if (t.match(/^[^\s]/, !1)) return i.strikethrough = !0, n.highlightFormatting && (i.formatting = "strikethrough"), k(i);
            } else if (" " === s && t.match(/^~~/, !0)) {
              if (" " === t.peek()) return k(i);
              t.backUp(2);
            }

            if (n.emoji && ":" === s && t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
              i.emoji = !0, n.highlightFormatting && (i.formatting = "emoji");
              var F = k(i);
              return i.emoji = !1, F;
            }

            return " " === s && (t.match(/^ +$/, !1) ? i.trailingSpace++ : i.trailingSpace && (i.trailingSpaceNewLine = !0)), k(i);
          }

          function L(e, t) {
            if (">" === e.next()) {
              t.f = t.inline = S, n.highlightFormatting && (t.formatting = "link");
              var r = k(t);
              return r ? r += " " : r = "", r + o.linkInline;
            }

            return e.match(/^[^>]+/, !0), o.linkInline;
          }

          function T(e, t) {
            if (e.eatSpace()) return null;
            var r,
                i = e.next();
            return "(" === i || "[" === i ? (t.f = t.inline = (r = "(" === i ? ")" : "]", function (e, t) {
              if (e.next() === r) {
                t.f = t.inline = S, n.highlightFormatting && (t.formatting = "link-string");
                var i = k(t);
                return t.linkHref = !1, i;
              }

              return e.match(M[r]), t.linkHref = !0, k(t);
            }), n.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, k(t)) : "error";
          }

          var M = {
            ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
            "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
          };

          function A(e, t) {
            return e.match(/^([^\]\\]|\\.)*\]:/, !1) ? (t.f = E, e.next(), n.highlightFormatting && (t.formatting = "link"), t.linkText = !0, k(t)) : g(e, t, S);
          }

          function E(e, t) {
            if (e.match(/^\]:/, !0)) {
              t.f = t.inline = N, n.highlightFormatting && (t.formatting = "link");
              var r = k(t);
              return t.linkText = !1, r;
            }

            return e.match(/^([^\]\\]|\\.)+/, !0), o.linkText;
          }

          function N(e, t) {
            return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = S, o.linkHref + " url");
          }

          var D = {
            startState: function startState() {
              return {
                f: x,
                prevLine: {
                  stream: null
                },
                thisLine: {
                  stream: null
                },
                block: x,
                htmlState: null,
                indentation: 0,
                inline: S,
                text: C,
                formatting: !1,
                linkText: !1,
                linkHref: !1,
                linkTitle: !1,
                code: 0,
                em: !1,
                strong: !1,
                header: 0,
                setext: 0,
                hr: !1,
                taskList: !1,
                list: !1,
                listStack: [],
                quote: 0,
                trailingSpace: 0,
                trailingSpaceNewLine: !1,
                strikethrough: !1,
                emoji: !1,
                fencedEndRE: null
              };
            },
            copyState: function copyState(t) {
              return {
                f: t.f,
                prevLine: t.prevLine,
                thisLine: t.thisLine,
                block: t.block,
                htmlState: t.htmlState && e.copyState(r, t.htmlState),
                indentation: t.indentation,
                localMode: t.localMode,
                localState: t.localMode ? e.copyState(t.localMode, t.localState) : null,
                inline: t.inline,
                text: t.text,
                formatting: !1,
                linkText: t.linkText,
                linkTitle: t.linkTitle,
                linkHref: t.linkHref,
                code: t.code,
                em: t.em,
                strong: t.strong,
                strikethrough: t.strikethrough,
                emoji: t.emoji,
                header: t.header,
                setext: t.setext,
                hr: t.hr,
                taskList: t.taskList,
                list: t.list,
                listStack: t.listStack.slice(0),
                quote: t.quote,
                indentedCode: t.indentedCode,
                trailingSpace: t.trailingSpace,
                trailingSpaceNewLine: t.trailingSpaceNewLine,
                md_inside: t.md_inside,
                fencedEndRE: t.fencedEndRE
              };
            },
            token: function token(e, t) {
              if (t.formatting = !1, e != t.thisLine.stream) {
                if (t.header = 0, t.hr = !1, e.match(/^\s*$/, !0)) return y(t), null;

                if (t.prevLine = t.thisLine, t.thisLine = {
                  stream: e
                }, t.taskList = !1, t.trailingSpace = 0, t.trailingSpaceNewLine = !1, !t.localState && (t.f = t.block, t.f != b)) {
                  var n = e.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length;
                  if (t.indentation = n, t.indentationDiff = null, n > 0) return null;
                }
              }

              return t.f(e, t);
            },
            innerMode: function innerMode(e) {
              return e.block == b ? {
                state: e.htmlState,
                mode: r
              } : e.localState ? {
                state: e.localState,
                mode: e.localMode
              } : {
                state: e,
                mode: D
              };
            },
            indent: function indent(t, n, i) {
              return t.block == b && r.indent ? r.indent(t.htmlState, n, i) : t.localState && t.localMode.indent ? t.localMode.indent(t.localState, n, i) : e.Pass;
            },
            blankLine: y,
            getType: k,
            blockCommentStart: "\x3c!--",
            blockCommentEnd: "--\x3e",
            closeBrackets: "()[]{}''\"\"``",
            fold: "markdown"
          };
          return D;
        }, "xml"), e.defineMIME("text/markdown", "markdown"), e.defineMIME("text/x-markdown", "markdown");
      }, "object" == _typeof(n) && "object" == _typeof(t) ? r(e("../../lib/codemirror"), e("../xml/xml"), e("../meta")) : r(CodeMirror);
    }, {
      "../../lib/codemirror": 11,
      "../meta": 14,
      "../xml/xml": 15
    }],
    14: [function (e, t, n) {
      (function (e) {
        "use strict";

        e.modeInfo = [{
          name: "APL",
          mime: "text/apl",
          mode: "apl",
          ext: ["dyalog", "apl"]
        }, {
          name: "PGP",
          mimes: ["application/pgp", "application/pgp-encrypted", "application/pgp-keys", "application/pgp-signature"],
          mode: "asciiarmor",
          ext: ["asc", "pgp", "sig"]
        }, {
          name: "ASN.1",
          mime: "text/x-ttcn-asn",
          mode: "asn.1",
          ext: ["asn", "asn1"]
        }, {
          name: "Asterisk",
          mime: "text/x-asterisk",
          mode: "asterisk",
          file: /^extensions\.conf$/i
        }, {
          name: "Brainfuck",
          mime: "text/x-brainfuck",
          mode: "brainfuck",
          ext: ["b", "bf"]
        }, {
          name: "C",
          mime: "text/x-csrc",
          mode: "clike",
          ext: ["c", "h", "ino"]
        }, {
          name: "C++",
          mime: "text/x-c++src",
          mode: "clike",
          ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
          alias: ["cpp"]
        }, {
          name: "Cobol",
          mime: "text/x-cobol",
          mode: "cobol",
          ext: ["cob", "cpy"]
        }, {
          name: "C#",
          mime: "text/x-csharp",
          mode: "clike",
          ext: ["cs"],
          alias: ["csharp", "cs"]
        }, {
          name: "Clojure",
          mime: "text/x-clojure",
          mode: "clojure",
          ext: ["clj", "cljc", "cljx"]
        }, {
          name: "ClojureScript",
          mime: "text/x-clojurescript",
          mode: "clojure",
          ext: ["cljs"]
        }, {
          name: "Closure Stylesheets (GSS)",
          mime: "text/x-gss",
          mode: "css",
          ext: ["gss"]
        }, {
          name: "CMake",
          mime: "text/x-cmake",
          mode: "cmake",
          ext: ["cmake", "cmake.in"],
          file: /^CMakeLists.txt$/
        }, {
          name: "CoffeeScript",
          mimes: ["application/vnd.coffeescript", "text/coffeescript", "text/x-coffeescript"],
          mode: "coffeescript",
          ext: ["coffee"],
          alias: ["coffee", "coffee-script"]
        }, {
          name: "Common Lisp",
          mime: "text/x-common-lisp",
          mode: "commonlisp",
          ext: ["cl", "lisp", "el"],
          alias: ["lisp"]
        }, {
          name: "Cypher",
          mime: "application/x-cypher-query",
          mode: "cypher",
          ext: ["cyp", "cypher"]
        }, {
          name: "Cython",
          mime: "text/x-cython",
          mode: "python",
          ext: ["pyx", "pxd", "pxi"]
        }, {
          name: "Crystal",
          mime: "text/x-crystal",
          mode: "crystal",
          ext: ["cr"]
        }, {
          name: "CSS",
          mime: "text/css",
          mode: "css",
          ext: ["css"]
        }, {
          name: "CQL",
          mime: "text/x-cassandra",
          mode: "sql",
          ext: ["cql"]
        }, {
          name: "D",
          mime: "text/x-d",
          mode: "d",
          ext: ["d"]
        }, {
          name: "Dart",
          mimes: ["application/dart", "text/x-dart"],
          mode: "dart",
          ext: ["dart"]
        }, {
          name: "diff",
          mime: "text/x-diff",
          mode: "diff",
          ext: ["diff", "patch"]
        }, {
          name: "Django",
          mime: "text/x-django",
          mode: "django"
        }, {
          name: "Dockerfile",
          mime: "text/x-dockerfile",
          mode: "dockerfile",
          file: /^Dockerfile$/
        }, {
          name: "DTD",
          mime: "application/xml-dtd",
          mode: "dtd",
          ext: ["dtd"]
        }, {
          name: "Dylan",
          mime: "text/x-dylan",
          mode: "dylan",
          ext: ["dylan", "dyl", "intr"]
        }, {
          name: "EBNF",
          mime: "text/x-ebnf",
          mode: "ebnf"
        }, {
          name: "ECL",
          mime: "text/x-ecl",
          mode: "ecl",
          ext: ["ecl"]
        }, {
          name: "edn",
          mime: "application/edn",
          mode: "clojure",
          ext: ["edn"]
        }, {
          name: "Eiffel",
          mime: "text/x-eiffel",
          mode: "eiffel",
          ext: ["e"]
        }, {
          name: "Elm",
          mime: "text/x-elm",
          mode: "elm",
          ext: ["elm"]
        }, {
          name: "Embedded Javascript",
          mime: "application/x-ejs",
          mode: "htmlembedded",
          ext: ["ejs"]
        }, {
          name: "Embedded Ruby",
          mime: "application/x-erb",
          mode: "htmlembedded",
          ext: ["erb"]
        }, {
          name: "Erlang",
          mime: "text/x-erlang",
          mode: "erlang",
          ext: ["erl"]
        }, {
          name: "Esper",
          mime: "text/x-esper",
          mode: "sql"
        }, {
          name: "Factor",
          mime: "text/x-factor",
          mode: "factor",
          ext: ["factor"]
        }, {
          name: "FCL",
          mime: "text/x-fcl",
          mode: "fcl"
        }, {
          name: "Forth",
          mime: "text/x-forth",
          mode: "forth",
          ext: ["forth", "fth", "4th"]
        }, {
          name: "Fortran",
          mime: "text/x-fortran",
          mode: "fortran",
          ext: ["f", "for", "f77", "f90", "f95"]
        }, {
          name: "F#",
          mime: "text/x-fsharp",
          mode: "mllike",
          ext: ["fs"],
          alias: ["fsharp"]
        }, {
          name: "Gas",
          mime: "text/x-gas",
          mode: "gas",
          ext: ["s"]
        }, {
          name: "Gherkin",
          mime: "text/x-feature",
          mode: "gherkin",
          ext: ["feature"]
        }, {
          name: "GitHub Flavored Markdown",
          mime: "text/x-gfm",
          mode: "gfm",
          file: /^(readme|contributing|history).md$/i
        }, {
          name: "Go",
          mime: "text/x-go",
          mode: "go",
          ext: ["go"]
        }, {
          name: "Groovy",
          mime: "text/x-groovy",
          mode: "groovy",
          ext: ["groovy", "gradle"],
          file: /^Jenkinsfile$/
        }, {
          name: "HAML",
          mime: "text/x-haml",
          mode: "haml",
          ext: ["haml"]
        }, {
          name: "Haskell",
          mime: "text/x-haskell",
          mode: "haskell",
          ext: ["hs"]
        }, {
          name: "Haskell (Literate)",
          mime: "text/x-literate-haskell",
          mode: "haskell-literate",
          ext: ["lhs"]
        }, {
          name: "Haxe",
          mime: "text/x-haxe",
          mode: "haxe",
          ext: ["hx"]
        }, {
          name: "HXML",
          mime: "text/x-hxml",
          mode: "haxe",
          ext: ["hxml"]
        }, {
          name: "ASP.NET",
          mime: "application/x-aspx",
          mode: "htmlembedded",
          ext: ["aspx"],
          alias: ["asp", "aspx"]
        }, {
          name: "HTML",
          mime: "text/html",
          mode: "htmlmixed",
          ext: ["html", "htm", "handlebars", "hbs"],
          alias: ["xhtml"]
        }, {
          name: "HTTP",
          mime: "message/http",
          mode: "http"
        }, {
          name: "IDL",
          mime: "text/x-idl",
          mode: "idl",
          ext: ["pro"]
        }, {
          name: "Pug",
          mime: "text/x-pug",
          mode: "pug",
          ext: ["jade", "pug"],
          alias: ["jade"]
        }, {
          name: "Java",
          mime: "text/x-java",
          mode: "clike",
          ext: ["java"]
        }, {
          name: "Java Server Pages",
          mime: "application/x-jsp",
          mode: "htmlembedded",
          ext: ["jsp"],
          alias: ["jsp"]
        }, {
          name: "JavaScript",
          mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
          mode: "javascript",
          ext: ["js"],
          alias: ["ecmascript", "js", "node"]
        }, {
          name: "JSON",
          mimes: ["application/json", "application/x-json"],
          mode: "javascript",
          ext: ["json", "map"],
          alias: ["json5"]
        }, {
          name: "JSON-LD",
          mime: "application/ld+json",
          mode: "javascript",
          ext: ["jsonld"],
          alias: ["jsonld"]
        }, {
          name: "JSX",
          mime: "text/jsx",
          mode: "jsx",
          ext: ["jsx"]
        }, {
          name: "Jinja2",
          mime: "text/jinja2",
          mode: "jinja2",
          ext: ["j2", "jinja", "jinja2"]
        }, {
          name: "Julia",
          mime: "text/x-julia",
          mode: "julia",
          ext: ["jl"]
        }, {
          name: "Kotlin",
          mime: "text/x-kotlin",
          mode: "clike",
          ext: ["kt"]
        }, {
          name: "LESS",
          mime: "text/x-less",
          mode: "css",
          ext: ["less"]
        }, {
          name: "LiveScript",
          mime: "text/x-livescript",
          mode: "livescript",
          ext: ["ls"],
          alias: ["ls"]
        }, {
          name: "Lua",
          mime: "text/x-lua",
          mode: "lua",
          ext: ["lua"]
        }, {
          name: "Markdown",
          mime: "text/x-markdown",
          mode: "markdown",
          ext: ["markdown", "md", "mkd"]
        }, {
          name: "mIRC",
          mime: "text/mirc",
          mode: "mirc"
        }, {
          name: "MariaDB SQL",
          mime: "text/x-mariadb",
          mode: "sql"
        }, {
          name: "Mathematica",
          mime: "text/x-mathematica",
          mode: "mathematica",
          ext: ["m", "nb", "wl", "wls"]
        }, {
          name: "Modelica",
          mime: "text/x-modelica",
          mode: "modelica",
          ext: ["mo"]
        }, {
          name: "MUMPS",
          mime: "text/x-mumps",
          mode: "mumps",
          ext: ["mps"]
        }, {
          name: "MS SQL",
          mime: "text/x-mssql",
          mode: "sql"
        }, {
          name: "mbox",
          mime: "application/mbox",
          mode: "mbox",
          ext: ["mbox"]
        }, {
          name: "MySQL",
          mime: "text/x-mysql",
          mode: "sql"
        }, {
          name: "Nginx",
          mime: "text/x-nginx-conf",
          mode: "nginx",
          file: /nginx.*\.conf$/i
        }, {
          name: "NSIS",
          mime: "text/x-nsis",
          mode: "nsis",
          ext: ["nsh", "nsi"]
        }, {
          name: "NTriples",
          mimes: ["application/n-triples", "application/n-quads", "text/n-triples"],
          mode: "ntriples",
          ext: ["nt", "nq"]
        }, {
          name: "Objective-C",
          mime: "text/x-objectivec",
          mode: "clike",
          ext: ["m"],
          alias: ["objective-c", "objc"]
        }, {
          name: "Objective-C++",
          mime: "text/x-objectivec++",
          mode: "clike",
          ext: ["mm"],
          alias: ["objective-c++", "objc++"]
        }, {
          name: "OCaml",
          mime: "text/x-ocaml",
          mode: "mllike",
          ext: ["ml", "mli", "mll", "mly"]
        }, {
          name: "Octave",
          mime: "text/x-octave",
          mode: "octave",
          ext: ["m"]
        }, {
          name: "Oz",
          mime: "text/x-oz",
          mode: "oz",
          ext: ["oz"]
        }, {
          name: "Pascal",
          mime: "text/x-pascal",
          mode: "pascal",
          ext: ["p", "pas"]
        }, {
          name: "PEG.js",
          mime: "null",
          mode: "pegjs",
          ext: ["jsonld"]
        }, {
          name: "Perl",
          mime: "text/x-perl",
          mode: "perl",
          ext: ["pl", "pm"]
        }, {
          name: "PHP",
          mimes: ["text/x-php", "application/x-httpd-php", "application/x-httpd-php-open"],
          mode: "php",
          ext: ["php", "php3", "php4", "php5", "php7", "phtml"]
        }, {
          name: "Pig",
          mime: "text/x-pig",
          mode: "pig",
          ext: ["pig"]
        }, {
          name: "Plain Text",
          mime: "text/plain",
          mode: "null",
          ext: ["txt", "text", "conf", "def", "list", "log"]
        }, {
          name: "PLSQL",
          mime: "text/x-plsql",
          mode: "sql",
          ext: ["pls"]
        }, {
          name: "PostgreSQL",
          mime: "text/x-pgsql",
          mode: "sql"
        }, {
          name: "PowerShell",
          mime: "application/x-powershell",
          mode: "powershell",
          ext: ["ps1", "psd1", "psm1"]
        }, {
          name: "Properties files",
          mime: "text/x-properties",
          mode: "properties",
          ext: ["properties", "ini", "in"],
          alias: ["ini", "properties"]
        }, {
          name: "ProtoBuf",
          mime: "text/x-protobuf",
          mode: "protobuf",
          ext: ["proto"]
        }, {
          name: "Python",
          mime: "text/x-python",
          mode: "python",
          ext: ["BUILD", "bzl", "py", "pyw"],
          file: /^(BUCK|BUILD)$/
        }, {
          name: "Puppet",
          mime: "text/x-puppet",
          mode: "puppet",
          ext: ["pp"]
        }, {
          name: "Q",
          mime: "text/x-q",
          mode: "q",
          ext: ["q"]
        }, {
          name: "R",
          mime: "text/x-rsrc",
          mode: "r",
          ext: ["r", "R"],
          alias: ["rscript"]
        }, {
          name: "reStructuredText",
          mime: "text/x-rst",
          mode: "rst",
          ext: ["rst"],
          alias: ["rst"]
        }, {
          name: "RPM Changes",
          mime: "text/x-rpm-changes",
          mode: "rpm"
        }, {
          name: "RPM Spec",
          mime: "text/x-rpm-spec",
          mode: "rpm",
          ext: ["spec"]
        }, {
          name: "Ruby",
          mime: "text/x-ruby",
          mode: "ruby",
          ext: ["rb"],
          alias: ["jruby", "macruby", "rake", "rb", "rbx"]
        }, {
          name: "Rust",
          mime: "text/x-rustsrc",
          mode: "rust",
          ext: ["rs"]
        }, {
          name: "SAS",
          mime: "text/x-sas",
          mode: "sas",
          ext: ["sas"]
        }, {
          name: "Sass",
          mime: "text/x-sass",
          mode: "sass",
          ext: ["sass"]
        }, {
          name: "Scala",
          mime: "text/x-scala",
          mode: "clike",
          ext: ["scala"]
        }, {
          name: "Scheme",
          mime: "text/x-scheme",
          mode: "scheme",
          ext: ["scm", "ss"]
        }, {
          name: "SCSS",
          mime: "text/x-scss",
          mode: "css",
          ext: ["scss"]
        }, {
          name: "Shell",
          mimes: ["text/x-sh", "application/x-sh"],
          mode: "shell",
          ext: ["sh", "ksh", "bash"],
          alias: ["bash", "sh", "zsh"],
          file: /^PKGBUILD$/
        }, {
          name: "Sieve",
          mime: "application/sieve",
          mode: "sieve",
          ext: ["siv", "sieve"]
        }, {
          name: "Slim",
          mimes: ["text/x-slim", "application/x-slim"],
          mode: "slim",
          ext: ["slim"]
        }, {
          name: "Smalltalk",
          mime: "text/x-stsrc",
          mode: "smalltalk",
          ext: ["st"]
        }, {
          name: "Smarty",
          mime: "text/x-smarty",
          mode: "smarty",
          ext: ["tpl"]
        }, {
          name: "Solr",
          mime: "text/x-solr",
          mode: "solr"
        }, {
          name: "SML",
          mime: "text/x-sml",
          mode: "mllike",
          ext: ["sml", "sig", "fun", "smackspec"]
        }, {
          name: "Soy",
          mime: "text/x-soy",
          mode: "soy",
          ext: ["soy"],
          alias: ["closure template"]
        }, {
          name: "SPARQL",
          mime: "application/sparql-query",
          mode: "sparql",
          ext: ["rq", "sparql"],
          alias: ["sparul"]
        }, {
          name: "Spreadsheet",
          mime: "text/x-spreadsheet",
          mode: "spreadsheet",
          alias: ["excel", "formula"]
        }, {
          name: "SQL",
          mime: "text/x-sql",
          mode: "sql",
          ext: ["sql"]
        }, {
          name: "SQLite",
          mime: "text/x-sqlite",
          mode: "sql"
        }, {
          name: "Squirrel",
          mime: "text/x-squirrel",
          mode: "clike",
          ext: ["nut"]
        }, {
          name: "Stylus",
          mime: "text/x-styl",
          mode: "stylus",
          ext: ["styl"]
        }, {
          name: "Swift",
          mime: "text/x-swift",
          mode: "swift",
          ext: ["swift"]
        }, {
          name: "sTeX",
          mime: "text/x-stex",
          mode: "stex"
        }, {
          name: "LaTeX",
          mime: "text/x-latex",
          mode: "stex",
          ext: ["text", "ltx", "tex"],
          alias: ["tex"]
        }, {
          name: "SystemVerilog",
          mime: "text/x-systemverilog",
          mode: "verilog",
          ext: ["v", "sv", "svh"]
        }, {
          name: "Tcl",
          mime: "text/x-tcl",
          mode: "tcl",
          ext: ["tcl"]
        }, {
          name: "Textile",
          mime: "text/x-textile",
          mode: "textile",
          ext: ["textile"]
        }, {
          name: "TiddlyWiki ",
          mime: "text/x-tiddlywiki",
          mode: "tiddlywiki"
        }, {
          name: "Tiki wiki",
          mime: "text/tiki",
          mode: "tiki"
        }, {
          name: "TOML",
          mime: "text/x-toml",
          mode: "toml",
          ext: ["toml"]
        }, {
          name: "Tornado",
          mime: "text/x-tornado",
          mode: "tornado"
        }, {
          name: "troff",
          mime: "text/troff",
          mode: "troff",
          ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        }, {
          name: "TTCN",
          mime: "text/x-ttcn",
          mode: "ttcn",
          ext: ["ttcn", "ttcn3", "ttcnpp"]
        }, {
          name: "TTCN_CFG",
          mime: "text/x-ttcn-cfg",
          mode: "ttcn-cfg",
          ext: ["cfg"]
        }, {
          name: "Turtle",
          mime: "text/turtle",
          mode: "turtle",
          ext: ["ttl"]
        }, {
          name: "TypeScript",
          mime: "application/typescript",
          mode: "javascript",
          ext: ["ts"],
          alias: ["ts"]
        }, {
          name: "TypeScript-JSX",
          mime: "text/typescript-jsx",
          mode: "jsx",
          ext: ["tsx"],
          alias: ["tsx"]
        }, {
          name: "Twig",
          mime: "text/x-twig",
          mode: "twig"
        }, {
          name: "Web IDL",
          mime: "text/x-webidl",
          mode: "webidl",
          ext: ["webidl"]
        }, {
          name: "VB.NET",
          mime: "text/x-vb",
          mode: "vb",
          ext: ["vb"]
        }, {
          name: "VBScript",
          mime: "text/vbscript",
          mode: "vbscript",
          ext: ["vbs"]
        }, {
          name: "Velocity",
          mime: "text/velocity",
          mode: "velocity",
          ext: ["vtl"]
        }, {
          name: "Verilog",
          mime: "text/x-verilog",
          mode: "verilog",
          ext: ["v"]
        }, {
          name: "VHDL",
          mime: "text/x-vhdl",
          mode: "vhdl",
          ext: ["vhd", "vhdl"]
        }, {
          name: "Vue.js Component",
          mimes: ["script/x-vue", "text/x-vue"],
          mode: "vue",
          ext: ["vue"]
        }, {
          name: "XML",
          mimes: ["application/xml", "text/xml"],
          mode: "xml",
          ext: ["xml", "xsl", "xsd", "svg"],
          alias: ["rss", "wsdl", "xsd"]
        }, {
          name: "XQuery",
          mime: "application/xquery",
          mode: "xquery",
          ext: ["xy", "xquery"]
        }, {
          name: "Yacas",
          mime: "text/x-yacas",
          mode: "yacas",
          ext: ["ys"]
        }, {
          name: "YAML",
          mimes: ["text/x-yaml", "text/yaml"],
          mode: "yaml",
          ext: ["yaml", "yml"],
          alias: ["yml"]
        }, {
          name: "Z80",
          mime: "text/x-z80",
          mode: "z80",
          ext: ["z80"]
        }, {
          name: "mscgen",
          mime: "text/x-mscgen",
          mode: "mscgen",
          ext: ["mscgen", "mscin", "msc"]
        }, {
          name: "xu",
          mime: "text/x-xu",
          mode: "mscgen",
          ext: ["xu"]
        }, {
          name: "msgenny",
          mime: "text/x-msgenny",
          mode: "mscgen",
          ext: ["msgenny"]
        }];

        for (var t = 0; t < e.modeInfo.length; t++) {
          var n = e.modeInfo[t];
          n.mimes && (n.mime = n.mimes[0]);
        }

        e.findModeByMIME = function (t) {
          t = t.toLowerCase();

          for (var n = 0; n < e.modeInfo.length; n++) {
            var r = e.modeInfo[n];
            if (r.mime == t) return r;
            if (r.mimes) for (var i = 0; i < r.mimes.length; i++) {
              if (r.mimes[i] == t) return r;
            }
          }

          return /\+xml$/.test(t) ? e.findModeByMIME("application/xml") : /\+json$/.test(t) ? e.findModeByMIME("application/json") : void 0;
        }, e.findModeByExtension = function (t) {
          t = t.toLowerCase();

          for (var n = 0; n < e.modeInfo.length; n++) {
            var r = e.modeInfo[n];
            if (r.ext) for (var i = 0; i < r.ext.length; i++) {
              if (r.ext[i] == t) return r;
            }
          }
        }, e.findModeByFileName = function (t) {
          for (var n = 0; n < e.modeInfo.length; n++) {
            var r = e.modeInfo[n];
            if (r.file && r.file.test(t)) return r;
          }

          var i = t.lastIndexOf("."),
              o = i > -1 && t.substring(i + 1, t.length);
          if (o) return e.findModeByExtension(o);
        }, e.findModeByName = function (t) {
          t = t.toLowerCase();

          for (var n = 0; n < e.modeInfo.length; n++) {
            var r = e.modeInfo[n];
            if (r.name.toLowerCase() == t) return r;
            if (r.alias) for (var i = 0; i < r.alias.length; i++) {
              if (r.alias[i].toLowerCase() == t) return r;
            }
          }
        };
      })("object" == _typeof(n) && "object" == _typeof(t) ? e("../lib/codemirror") : CodeMirror);
    }, {
      "../lib/codemirror": 11
    }],
    15: [function (e, t, n) {
      (function (e) {
        "use strict";

        var t = {
          autoSelfClosers: {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            frame: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
            menuitem: !0
          },
          implicitlyClosed: {
            dd: !0,
            li: !0,
            optgroup: !0,
            option: !0,
            p: !0,
            rp: !0,
            rt: !0,
            tbody: !0,
            td: !0,
            tfoot: !0,
            th: !0,
            tr: !0
          },
          contextGrabbers: {
            dd: {
              dd: !0,
              dt: !0
            },
            dt: {
              dd: !0,
              dt: !0
            },
            li: {
              li: !0
            },
            option: {
              option: !0,
              optgroup: !0
            },
            optgroup: {
              optgroup: !0
            },
            p: {
              address: !0,
              article: !0,
              aside: !0,
              blockquote: !0,
              dir: !0,
              div: !0,
              dl: !0,
              fieldset: !0,
              footer: !0,
              form: !0,
              h1: !0,
              h2: !0,
              h3: !0,
              h4: !0,
              h5: !0,
              h6: !0,
              header: !0,
              hgroup: !0,
              hr: !0,
              menu: !0,
              nav: !0,
              ol: !0,
              p: !0,
              pre: !0,
              section: !0,
              table: !0,
              ul: !0
            },
            rp: {
              rp: !0,
              rt: !0
            },
            rt: {
              rp: !0,
              rt: !0
            },
            tbody: {
              tbody: !0,
              tfoot: !0
            },
            td: {
              td: !0,
              th: !0
            },
            tfoot: {
              tbody: !0
            },
            th: {
              td: !0,
              th: !0
            },
            thead: {
              tbody: !0,
              tfoot: !0
            },
            tr: {
              tr: !0
            }
          },
          doNotIndent: {
            pre: !0
          },
          allowUnquoted: !0,
          allowMissing: !0,
          caseFold: !0
        },
            n = {
          autoSelfClosers: {},
          implicitlyClosed: {},
          contextGrabbers: {},
          doNotIndent: {},
          allowUnquoted: !1,
          allowMissing: !1,
          allowMissingTagName: !1,
          caseFold: !1
        };
        e.defineMode("xml", function (r, i) {
          var o,
              a,
              s = r.indentUnit,
              l = {},
              u = i.htmlMode ? t : n;

          for (var c in u) {
            l[c] = u[c];
          }

          for (var c in i) {
            l[c] = i[c];
          }

          function h(e, t) {
            function n(n) {
              return t.tokenize = n, n(e, t);
            }

            var r = e.next();
            return "<" == r ? e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(d("atom", "]]>")) : null : e.match("--") ? n(d("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(function e(t) {
              return function (n, r) {
                for (var i; null != (i = n.next());) {
                  if ("<" == i) return r.tokenize = e(t + 1), r.tokenize(n, r);

                  if (">" == i) {
                    if (1 == t) {
                      r.tokenize = h;
                      break;
                    }

                    return r.tokenize = e(t - 1), r.tokenize(n, r);
                  }
                }

                return "meta";
              };
            }(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = d("meta", "?>"), "meta") : (o = e.eat("/") ? "closeTag" : "openTag", t.tokenize = f, "tag bracket") : "&" == r ? (e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error" : (e.eatWhile(/[^&<]/), null);
          }

          function f(e, t) {
            var n,
                r,
                i = e.next();
            if (">" == i || "/" == i && e.eat(">")) return t.tokenize = h, o = ">" == i ? "endTag" : "selfcloseTag", "tag bracket";
            if ("=" == i) return o = "equals", null;

            if ("<" == i) {
              t.tokenize = h, t.state = v, t.tagName = t.tagStart = null;
              var a = t.tokenize(e, t);
              return a ? a + " tag error" : "tag error";
            }

            return /[\'\"]/.test(i) ? (t.tokenize = (n = i, (r = function r(e, t) {
              for (; !e.eol();) {
                if (e.next() == n) {
                  t.tokenize = f;
                  break;
                }
              }

              return "string";
            }).isInAttribute = !0, r), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
          }

          function d(e, t) {
            return function (n, r) {
              for (; !n.eol();) {
                if (n.match(t)) {
                  r.tokenize = h;
                  break;
                }

                n.next();
              }

              return e;
            };
          }

          function p(e, t, n) {
            this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (l.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0);
          }

          function m(e) {
            e.context && (e.context = e.context.prev);
          }

          function g(e, t) {
            for (var n;;) {
              if (!e.context) return;
              if (n = e.context.tagName, !l.contextGrabbers.hasOwnProperty(n) || !l.contextGrabbers[n].hasOwnProperty(t)) return;
              m(e);
            }
          }

          function v(e, t, n) {
            return "openTag" == e ? (n.tagStart = t.column(), y) : "closeTag" == e ? x : v;
          }

          function y(e, t, n) {
            return "word" == e ? (n.tagName = t.current(), a = "tag", k) : l.allowMissingTagName && "endTag" == e ? (a = "tag bracket", k(e, 0, n)) : (a = "error", y);
          }

          function x(e, t, n) {
            if ("word" == e) {
              var r = t.current();
              return n.context && n.context.tagName != r && l.implicitlyClosed.hasOwnProperty(n.context.tagName) && m(n), n.context && n.context.tagName == r || !1 === l.matchClosing ? (a = "tag", b) : (a = "tag error", w);
            }

            return l.allowMissingTagName && "endTag" == e ? (a = "tag bracket", b(e, 0, n)) : (a = "error", w);
          }

          function b(e, t, n) {
            return "endTag" != e ? (a = "error", b) : (m(n), v);
          }

          function w(e, t, n) {
            return a = "error", b(e, 0, n);
          }

          function k(e, t, n) {
            if ("word" == e) return a = "attribute", C;

            if ("endTag" == e || "selfcloseTag" == e) {
              var r = n.tagName,
                  i = n.tagStart;
              return n.tagName = n.tagStart = null, "selfcloseTag" == e || l.autoSelfClosers.hasOwnProperty(r) ? g(n, r) : (g(n, r), n.context = new p(n, r, i == n.indented)), v;
            }

            return a = "error", k;
          }

          function C(e, t, n) {
            return "equals" == e ? S : (l.allowMissing || (a = "error"), k(e, 0, n));
          }

          function S(e, t, n) {
            return "string" == e ? L : "word" == e && l.allowUnquoted ? (a = "string", k) : (a = "error", k(e, 0, n));
          }

          function L(e, t, n) {
            return "string" == e ? L : k(e, 0, n);
          }

          return h.isInText = !0, {
            startState: function startState(e) {
              var t = {
                tokenize: h,
                state: v,
                indented: e || 0,
                tagName: null,
                tagStart: null,
                context: null
              };
              return null != e && (t.baseIndent = e), t;
            },
            token: function token(e, t) {
              if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
              o = null;
              var n = t.tokenize(e, t);
              return (n || o) && "comment" != n && (a = null, t.state = t.state(o || n, e, t), a && (n = "error" == a ? n + " error" : a)), n;
            },
            indent: function indent(t, n, r) {
              var i = t.context;
              if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + s;
              if (i && i.noIndent) return e.Pass;
              if (t.tokenize != f && t.tokenize != h) return r ? r.match(/^(\s*)/)[0].length : 0;
              if (t.tagName) return !1 !== l.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + s * (l.multilineTagIndentFactor || 1);
              if (l.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
              var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
              if (o && o[1]) for (; i;) {
                if (i.tagName == o[2]) {
                  i = i.prev;
                  break;
                }

                if (!l.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                i = i.prev;
              } else if (o) for (; i;) {
                var a = l.contextGrabbers[i.tagName];
                if (!a || !a.hasOwnProperty(o[2])) break;
                i = i.prev;
              }

              for (; i && i.prev && !i.startOfLine;) {
                i = i.prev;
              }

              return i ? i.indent + s : t.baseIndent || 0;
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: "\x3c!--",
            blockCommentEnd: "--\x3e",
            configuration: l.htmlMode ? "html" : "xml",
            helperType: l.htmlMode ? "html" : "xml",
            skipAttribute: function skipAttribute(e) {
              e.state == S && (e.state = k);
            },
            xmlCurrentTag: function xmlCurrentTag(e) {
              return e.tagName ? {
                name: e.tagName,
                close: "closeTag" == e.type
              } : null;
            },
            xmlCurrentContext: function xmlCurrentContext(e) {
              for (var t = [], n = e.context; n; n = n.prev) {
                n.tagName && t.push(n.tagName);
              }

              return t.reverse();
            }
          };
        }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
          name: "xml",
          htmlMode: !0
        });
      })("object" == _typeof(n) && "object" == _typeof(t) ? e("../../lib/codemirror") : CodeMirror);
    }, {
      "../../lib/codemirror": 11
    }],
    16: [function (e, t, n) {
      n.read = function (e, t, n, r, i) {
        var o,
            a,
            s = 8 * i - r - 1,
            l = (1 << s) - 1,
            u = l >> 1,
            c = -7,
            h = n ? i - 1 : 0,
            f = n ? -1 : 1,
            d = e[t + h];

        for (h += f, o = d & (1 << -c) - 1, d >>= -c, c += s; c > 0; o = 256 * o + e[t + h], h += f, c -= 8) {
          ;
        }

        for (a = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; a = 256 * a + e[t + h], h += f, c -= 8) {
          ;
        }

        if (0 === o) o = 1 - u;else {
          if (o === l) return a ? NaN : 1 / 0 * (d ? -1 : 1);
          a += Math.pow(2, r), o -= u;
        }
        return (d ? -1 : 1) * a * Math.pow(2, o - r);
      }, n.write = function (e, t, n, r, i, o) {
        var a,
            s,
            l,
            u = 8 * o - i - 1,
            c = (1 << u) - 1,
            h = c >> 1,
            f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : o - 1,
            p = r ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + h >= 1 ? f / l : f * Math.pow(2, 1 - h)) * l >= 2 && (a++, l /= 2), a + h >= c ? (s = 0, a = c) : a + h >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + d] = 255 & s, d += p, s /= 256, i -= 8) {
          ;
        }

        for (a = a << i | s, u += i; u > 0; e[n + d] = 255 & a, d += p, a /= 256, u -= 8) {
          ;
        }

        e[n + d - p] |= 128 * m;
      };
    }, {}],
    17: [function (e, t, n) {
      var r = e("./Renderer.js"),
          _e2 = e("./defaults.js"),
          i = _e2.defaults,
          _e3 = e("./rules.js"),
          o = _e3.inline,
          _e4 = e("./helpers.js"),
          a = _e4.findClosingBracket,
          s = _e4.escape;

      t.exports = /*#__PURE__*/function () {
        function e(_e5, t) {
          _classCallCheck(this, e);

          if (this.options = t || i, this.links = _e5, this.rules = o.normal, this.options.renderer = this.options.renderer || new r(), this.renderer = this.options.renderer, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
          this.options.pedantic ? this.rules = o.pedantic : this.options.gfm && (this.options.breaks ? this.rules = o.breaks : this.rules = o.gfm);
        }

        _createClass(e, [{
          key: "output",
          value: function output(t) {
            var n,
                r,
                i,
                o,
                l,
                u,
                c = "";

            for (; t;) {
              if (l = this.rules.escape.exec(t)) t = t.substring(l[0].length), c += s(l[1]);else if (l = this.rules.tag.exec(t)) !this.inLink && /^<a /i.test(l[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(l[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(l[0]) ? this.inRawBlock = !0 : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(l[0]) && (this.inRawBlock = !1), t = t.substring(l[0].length), c += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(l[0]) : s(l[0]) : l[0];else if (l = this.rules.link.exec(t)) {
                var _r2 = a(l[2], "()");

                if (_r2 > -1) {
                  var _e6 = (0 === l[0].indexOf("!") ? 5 : 4) + l[1].length + _r2;

                  l[2] = l[2].substring(0, _r2), l[0] = l[0].substring(0, _e6).trim(), l[3] = "";
                }

                t = t.substring(l[0].length), this.inLink = !0, i = l[2], this.options.pedantic ? (n = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i)) ? (i = n[1], o = n[3]) : o = "" : o = l[3] ? l[3].slice(1, -1) : "", i = i.trim().replace(/^<([\s\S]*)>$/, "$1"), c += this.outputLink(l, {
                  href: e.escapes(i),
                  title: e.escapes(o)
                }), this.inLink = !1;
              } else if ((l = this.rules.reflink.exec(t)) || (l = this.rules.nolink.exec(t))) {
                if (t = t.substring(l[0].length), n = (l[2] || l[1]).replace(/\s+/g, " "), !(n = this.links[n.toLowerCase()]) || !n.href) {
                  c += l[0].charAt(0), t = l[0].substring(1) + t;
                  continue;
                }

                this.inLink = !0, c += this.outputLink(l, n), this.inLink = !1;
              } else if (l = this.rules.strong.exec(t)) t = t.substring(l[0].length), c += this.renderer.strong(this.output(l[4] || l[3] || l[2] || l[1]));else if (l = this.rules.em.exec(t)) t = t.substring(l[0].length), c += this.renderer.em(this.output(l[6] || l[5] || l[4] || l[3] || l[2] || l[1]));else if (l = this.rules.code.exec(t)) t = t.substring(l[0].length), c += this.renderer.codespan(s(l[2].trim(), !0));else if (l = this.rules.br.exec(t)) t = t.substring(l[0].length), c += this.renderer.br();else if (l = this.rules.del.exec(t)) t = t.substring(l[0].length), c += this.renderer.del(this.output(l[1]));else if (l = this.rules.autolink.exec(t)) t = t.substring(l[0].length), i = "@" === l[2] ? "mailto:" + (r = s(this.mangle(l[1]))) : r = s(l[1]), c += this.renderer.link(i, null, r);else if (this.inLink || !(l = this.rules.url.exec(t))) {
                if (l = this.rules.text.exec(t)) t = t.substring(l[0].length), this.inRawBlock ? c += this.renderer.text(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(l[0]) : s(l[0]) : l[0]) : c += this.renderer.text(s(this.smartypants(l[0])));else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0));
              } else {
                if ("@" === l[2]) i = "mailto:" + (r = s(l[0]));else {
                  do {
                    u = l[0], l[0] = this.rules._backpedal.exec(l[0])[0];
                  } while (u !== l[0]);

                  r = s(l[0]), i = "www." === l[1] ? "http://" + r : r;
                }
                t = t.substring(l[0].length), c += this.renderer.link(i, null, r);
              }
            }

            return c;
          }
        }, {
          key: "outputLink",
          value: function outputLink(e, t) {
            var n = t.href,
                r = t.title ? s(t.title) : null;
            return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, s(e[1]));
          }
        }, {
          key: "smartypants",
          value: function smartypants(e) {
            return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e;
          }
        }, {
          key: "mangle",
          value: function mangle(e) {
            if (!this.options.mangle) return e;
            var t = e.length;
            var n,
                r = "",
                i = 0;

            for (; i < t; i++) {
              n = e.charCodeAt(i), Math.random() > .5 && (n = "x" + n.toString(16)), r += "&#" + n + ";";
            }

            return r;
          }
        }], [{
          key: "output",
          value: function output(t, n, r) {
            return new e(n, r).output(t);
          }
        }, {
          key: "escapes",
          value: function escapes(t) {
            return t ? t.replace(e.rules._escapes, "$1") : t;
          }
        }, {
          key: "rules",
          get: function get() {
            return o;
          }
        }]);

        return e;
      }();
    }, {
      "./Renderer.js": 20,
      "./defaults.js": 23,
      "./helpers.js": 24,
      "./rules.js": 26
    }],
    18: [function (e, t, n) {
      var _e7 = e("./defaults.js"),
          r = _e7.defaults,
          _e8 = e("./rules.js"),
          i = _e8.block,
          _e9 = e("./helpers.js"),
          o = _e9.rtrim,
          a = _e9.splitCells,
          s = _e9.escape;

      t.exports = /*#__PURE__*/function () {
        function e(_e10) {
          _classCallCheck(this, e);

          this.tokens = [], this.tokens.links = Object.create(null), this.options = _e10 || r, this.rules = i.normal, this.options.pedantic ? this.rules = i.pedantic : this.options.gfm && (this.rules = i.gfm);
        }

        _createClass(e, [{
          key: "lex",
          value: function lex(e) {
            return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.token(e, !0);
          }
        }, {
          key: "token",
          value: function token(e, t) {
            var n, r, l, u, c, h, f, d, p, m, g, v, y, x, b, w;

            for (e = e.replace(/^ +$/gm, ""); e;) {
              if ((l = this.rules.newline.exec(e)) && (e = e.substring(l[0].length), l[0].length > 1 && this.tokens.push({
                type: "space"
              })), l = this.rules.code.exec(e)) {
                var _t3 = this.tokens[this.tokens.length - 1];
                e = e.substring(l[0].length), _t3 && "paragraph" === _t3.type ? _t3.text += "\n" + l[0].trimRight() : (l = l[0].replace(/^ {4}/gm, ""), this.tokens.push({
                  type: "code",
                  codeBlockStyle: "indented",
                  text: this.options.pedantic ? l : o(l, "\n")
                }));
              } else if (l = this.rules.fences.exec(e)) e = e.substring(l[0].length), this.tokens.push({
                type: "code",
                lang: l[2] ? l[2].trim() : l[2],
                text: l[3] || ""
              });else if (l = this.rules.heading.exec(e)) e = e.substring(l[0].length), this.tokens.push({
                type: "heading",
                depth: l[1].length,
                text: l[2]
              });else if ((l = this.rules.nptable.exec(e)) && (h = {
                type: "table",
                header: a(l[1].replace(/^ *| *\| *$/g, "")),
                align: l[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: l[3] ? l[3].replace(/\n$/, "").split("\n") : []
              }).header.length === h.align.length) {
                for (e = e.substring(l[0].length), g = 0; g < h.align.length; g++) {
                  /^ *-+: *$/.test(h.align[g]) ? h.align[g] = "right" : /^ *:-+: *$/.test(h.align[g]) ? h.align[g] = "center" : /^ *:-+ *$/.test(h.align[g]) ? h.align[g] = "left" : h.align[g] = null;
                }

                for (g = 0; g < h.cells.length; g++) {
                  h.cells[g] = a(h.cells[g], h.header.length);
                }

                this.tokens.push(h);
              } else if (l = this.rules.hr.exec(e)) e = e.substring(l[0].length), this.tokens.push({
                type: "hr"
              });else if (l = this.rules.blockquote.exec(e)) e = e.substring(l[0].length), this.tokens.push({
                type: "blockquote_start"
              }), l = l[0].replace(/^ *> ?/gm, ""), this.token(l, t), this.tokens.push({
                type: "blockquote_end"
              });else if (l = this.rules.list.exec(e)) {
                for (e = e.substring(l[0].length), f = {
                  type: "list_start",
                  ordered: x = (u = l[2]).length > 1,
                  start: x ? +u : "",
                  loose: !1
                }, this.tokens.push(f), d = [], n = !1, y = (l = l[0].match(this.rules.item)).length, g = 0; g < y; g++) {
                  m = (h = l[g]).length, ~(h = h.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") && (m -= h.length, h = this.options.pedantic ? h.replace(/^ {1,4}/gm, "") : h.replace(new RegExp("^ {1," + m + "}", "gm"), "")), g !== y - 1 && (c = i.bullet.exec(l[g + 1])[0], (u.length > 1 ? 1 === c.length : c.length > 1 || this.options.smartLists && c !== u) && (e = l.slice(g + 1).join("\n") + e, g = y - 1)), r = n || /\n\n(?!\s*$)/.test(h), g !== y - 1 && (n = "\n" === h.charAt(h.length - 1), r || (r = n)), r && (f.loose = !0), w = void 0, (b = /^\[[ xX]\] /.test(h)) && (w = " " !== h[1], h = h.replace(/^\[[ xX]\] +/, "")), p = {
                    type: "list_item_start",
                    task: b,
                    checked: w,
                    loose: r
                  }, d.push(p), this.tokens.push(p), this.token(h, !1), this.tokens.push({
                    type: "list_item_end"
                  });
                }

                if (f.loose) for (y = d.length, g = 0; g < y; g++) {
                  d[g].loose = !0;
                }
                this.tokens.push({
                  type: "list_end"
                });
              } else if (l = this.rules.html.exec(e)) e = e.substring(l[0].length), this.tokens.push({
                type: this.options.sanitize ? "paragraph" : "html",
                pre: !this.options.sanitizer && ("pre" === l[1] || "script" === l[1] || "style" === l[1]),
                text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(l[0]) : s(l[0]) : l[0]
              });else if (t && (l = this.rules.def.exec(e))) e = e.substring(l[0].length), l[3] && (l[3] = l[3].substring(1, l[3].length - 1)), v = l[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[v] || (this.tokens.links[v] = {
                href: l[2],
                title: l[3]
              });else if ((l = this.rules.table.exec(e)) && (h = {
                type: "table",
                header: a(l[1].replace(/^ *| *\| *$/g, "")),
                align: l[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: l[3] ? l[3].replace(/\n$/, "").split("\n") : []
              }).header.length === h.align.length) {
                for (e = e.substring(l[0].length), g = 0; g < h.align.length; g++) {
                  /^ *-+: *$/.test(h.align[g]) ? h.align[g] = "right" : /^ *:-+: *$/.test(h.align[g]) ? h.align[g] = "center" : /^ *:-+ *$/.test(h.align[g]) ? h.align[g] = "left" : h.align[g] = null;
                }

                for (g = 0; g < h.cells.length; g++) {
                  h.cells[g] = a(h.cells[g].replace(/^ *\| *| *\| *$/g, ""), h.header.length);
                }

                this.tokens.push(h);
              } else if (l = this.rules.lheading.exec(e)) e = e.substring(l[0].length), this.tokens.push({
                type: "heading",
                depth: "=" === l[2].charAt(0) ? 1 : 2,
                text: l[1]
              });else if (t && (l = this.rules.paragraph.exec(e))) e = e.substring(l[0].length), this.tokens.push({
                type: "paragraph",
                text: "\n" === l[1].charAt(l[1].length - 1) ? l[1].slice(0, -1) : l[1]
              });else if (l = this.rules.text.exec(e)) e = e.substring(l[0].length), this.tokens.push({
                type: "text",
                text: l[0]
              });else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
            }

            return this.tokens;
          }
        }], [{
          key: "lex",
          value: function lex(t, n) {
            return new e(n).lex(t);
          }
        }, {
          key: "rules",
          get: function get() {
            return i;
          }
        }]);

        return e;
      }();
    }, {
      "./defaults.js": 23,
      "./helpers.js": 24,
      "./rules.js": 26
    }],
    19: [function (e, t, n) {
      var r = e("./Renderer.js"),
          i = e("./Slugger.js"),
          o = e("./InlineLexer.js"),
          a = e("./TextRenderer.js"),
          _e11 = e("./defaults.js"),
          s = _e11.defaults,
          _e12 = e("./helpers.js"),
          l = _e12.merge,
          u = _e12.unescape;

      t.exports = /*#__PURE__*/function () {
        function e(_e13) {
          _classCallCheck(this, e);

          this.tokens = [], this.token = null, this.options = _e13 || s, this.options.renderer = this.options.renderer || new r(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.slugger = new i();
        }

        _createClass(e, [{
          key: "parse",
          value: function parse(e) {
            this.inline = new o(e.links, this.options), this.inlineText = new o(e.links, l({}, this.options, {
              renderer: new a()
            })), this.tokens = e.reverse();
            var t = "";

            for (; this.next();) {
              t += this.tok();
            }

            return t;
          }
        }, {
          key: "next",
          value: function next() {
            return this.token = this.tokens.pop(), this.token;
          }
        }, {
          key: "peek",
          value: function peek() {
            return this.tokens[this.tokens.length - 1] || 0;
          }
        }, {
          key: "parseText",
          value: function parseText() {
            var e = this.token.text;

            for (; "text" === this.peek().type;) {
              e += "\n" + this.next().text;
            }

            return this.inline.output(e);
          }
        }, {
          key: "tok",
          value: function tok() {
            var e = "";

            switch (this.token.type) {
              case "space":
                return "";

              case "hr":
                return this.renderer.hr();

              case "heading":
                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, u(this.inlineText.output(this.token.text)), this.slugger);

              case "code":
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);

              case "table":
                {
                  var _t4,
                      _n2,
                      _r3,
                      _i2,
                      _o2 = "";

                  for (_r3 = "", _t4 = 0; _t4 < this.token.header.length; _t4++) {
                    _r3 += this.renderer.tablecell(this.inline.output(this.token.header[_t4]), {
                      header: !0,
                      align: this.token.align[_t4]
                    });
                  }

                  for (_o2 += this.renderer.tablerow(_r3), _t4 = 0; _t4 < this.token.cells.length; _t4++) {
                    for (_n2 = this.token.cells[_t4], _r3 = "", _i2 = 0; _i2 < _n2.length; _i2++) {
                      _r3 += this.renderer.tablecell(this.inline.output(_n2[_i2]), {
                        header: !1,
                        align: this.token.align[_i2]
                      });
                    }

                    e += this.renderer.tablerow(_r3);
                  }

                  return this.renderer.table(_o2, e);
                }

              case "blockquote_start":
                for (e = ""; "blockquote_end" !== this.next().type;) {
                  e += this.tok();
                }

                return this.renderer.blockquote(e);

              case "list_start":
                {
                  e = "";
                  var _t5 = this.token.ordered,
                      _n3 = this.token.start;

                  for (; "list_end" !== this.next().type;) {
                    e += this.tok();
                  }

                  return this.renderer.list(e, _t5, _n3);
                }

              case "list_item_start":
                {
                  e = "";
                  var _t6 = this.token.loose,
                      _n4 = this.token.checked,
                      _r4 = this.token.task;
                  if (this.token.task) if (_t6) {
                    if ("text" === this.peek().type) {
                      var _e14 = this.peek();

                      _e14.text = this.renderer.checkbox(_n4) + " " + _e14.text;
                    } else this.tokens.push({
                      type: "text",
                      text: this.renderer.checkbox(_n4)
                    });
                  } else e += this.renderer.checkbox(_n4);

                  for (; "list_item_end" !== this.next().type;) {
                    e += _t6 || "text" !== this.token.type ? this.tok() : this.parseText();
                  }

                  return this.renderer.listitem(e, _r4, _n4);
                }

              case "html":
                return this.renderer.html(this.token.text);

              case "paragraph":
                return this.renderer.paragraph(this.inline.output(this.token.text));

              case "text":
                return this.renderer.paragraph(this.parseText());

              default:
                {
                  var _e15 = 'Token with "' + this.token.type + '" type was not found.';

                  if (!this.options.silent) throw new Error(_e15);
                  console.log(_e15);
                }
            }
          }
        }], [{
          key: "parse",
          value: function parse(t, n) {
            return new e(n).parse(t);
          }
        }]);

        return e;
      }();
    }, {
      "./InlineLexer.js": 17,
      "./Renderer.js": 20,
      "./Slugger.js": 21,
      "./TextRenderer.js": 22,
      "./defaults.js": 23,
      "./helpers.js": 24
    }],
    20: [function (e, t, n) {
      var _e16 = e("./defaults.js"),
          r = _e16.defaults,
          _e17 = e("./helpers.js"),
          i = _e17.cleanUrl,
          o = _e17.escape;

      t.exports = /*#__PURE__*/function () {
        function _class(e) {
          _classCallCheck(this, _class);

          this.options = e || r;
        }

        _createClass(_class, [{
          key: "code",
          value: function code(e, t, n) {
            var r = (t || "").match(/\S*/)[0];

            if (this.options.highlight) {
              var _t7 = this.options.highlight(e, r);

              null != _t7 && _t7 !== e && (n = !0, e = _t7);
            }

            return r ? '<pre><code class="' + this.options.langPrefix + o(r, !0) + '">' + (n ? e : o(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : o(e, !0)) + "</code></pre>";
          }
        }, {
          key: "blockquote",
          value: function blockquote(e) {
            return "<blockquote>\n" + e + "</blockquote>\n";
          }
        }, {
          key: "html",
          value: function html(e) {
            return e;
          }
        }, {
          key: "heading",
          value: function heading(e, t, n, r) {
            return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n";
          }
        }, {
          key: "hr",
          value: function hr() {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
          }
        }, {
          key: "list",
          value: function list(e, t, n) {
            var r = t ? "ol" : "ul";
            return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n";
          }
        }, {
          key: "listitem",
          value: function listitem(e) {
            return "<li>" + e + "</li>\n";
          }
        }, {
          key: "checkbox",
          value: function checkbox(e) {
            return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
          }
        }, {
          key: "paragraph",
          value: function paragraph(e) {
            return "<p>" + e + "</p>\n";
          }
        }, {
          key: "table",
          value: function table(e, t) {
            return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n";
          }
        }, {
          key: "tablerow",
          value: function tablerow(e) {
            return "<tr>\n" + e + "</tr>\n";
          }
        }, {
          key: "tablecell",
          value: function tablecell(e, t) {
            var n = t.header ? "th" : "td";
            return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n";
          }
        }, {
          key: "strong",
          value: function strong(e) {
            return "<strong>" + e + "</strong>";
          }
        }, {
          key: "em",
          value: function em(e) {
            return "<em>" + e + "</em>";
          }
        }, {
          key: "codespan",
          value: function codespan(e) {
            return "<code>" + e + "</code>";
          }
        }, {
          key: "br",
          value: function br() {
            return this.options.xhtml ? "<br/>" : "<br>";
          }
        }, {
          key: "del",
          value: function del(e) {
            return "<del>" + e + "</del>";
          }
        }, {
          key: "link",
          value: function link(e, t, n) {
            if (null === (e = i(this.options.sanitize, this.options.baseUrl, e))) return n;
            var r = '<a href="' + o(e) + '"';
            return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>";
          }
        }, {
          key: "image",
          value: function image(e, t, n) {
            if (null === (e = i(this.options.sanitize, this.options.baseUrl, e))) return n;
            var r = '<img src="' + e + '" alt="' + n + '"';
            return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">";
          }
        }, {
          key: "text",
          value: function text(e) {
            return e;
          }
        }]);

        return _class;
      }();
    }, {
      "./defaults.js": 23,
      "./helpers.js": 24
    }],
    21: [function (e, t, n) {
      t.exports = /*#__PURE__*/function () {
        function _class2() {
          _classCallCheck(this, _class2);

          this.seen = {};
        }

        _createClass(_class2, [{
          key: "slug",
          value: function slug(e) {
            var t = e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");

            if (this.seen.hasOwnProperty(t)) {
              var _e18 = t;

              do {
                this.seen[_e18]++, t = _e18 + "-" + this.seen[_e18];
              } while (this.seen.hasOwnProperty(t));
            }

            return this.seen[t] = 0, t;
          }
        }]);

        return _class2;
      }();
    }, {}],
    22: [function (e, t, n) {
      t.exports = /*#__PURE__*/function () {
        function _class3() {
          _classCallCheck(this, _class3);
        }

        _createClass(_class3, [{
          key: "strong",
          value: function strong(e) {
            return e;
          }
        }, {
          key: "em",
          value: function em(e) {
            return e;
          }
        }, {
          key: "codespan",
          value: function codespan(e) {
            return e;
          }
        }, {
          key: "del",
          value: function del(e) {
            return e;
          }
        }, {
          key: "text",
          value: function text(e) {
            return e;
          }
        }, {
          key: "link",
          value: function link(e, t, n) {
            return "" + n;
          }
        }, {
          key: "image",
          value: function image(e, t, n) {
            return "" + n;
          }
        }, {
          key: "br",
          value: function br() {
            return "";
          }
        }]);

        return _class3;
      }();
    }, {}],
    23: [function (e, t, n) {
      function r() {
        return {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          xhtml: !1
        };
      }

      t.exports = {
        defaults: {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          xhtml: !1
        },
        getDefaults: r,
        changeDefaults: function changeDefaults(e) {
          t.exports.defaults = e;
        }
      };
    }, {}],
    24: [function (e, t, n) {
      var r = /[&<>"']/,
          i = /[&<>"']/g,
          o = /[<>"']|&(?!#?\w+;)/,
          a = /[<>"']|&(?!#?\w+;)/g,
          s = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      },
          l = function l(e) {
        return s[e];
      };

      var u = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

      function c(e) {
        return e.replace(u, function (e, t) {
          return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
        });
      }

      var h = /(^|[^\[])\^/g;
      var f = /[^\w:]/g,
          d = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
      var p = {},
          m = /^[^:]+:\/*[^/]*$/,
          g = /^([^:]+:)[\s\S]*$/,
          v = /^([^:]+:\/*[^/]*)[\s\S]*$/;

      function y(e, t) {
        p[" " + e] || (m.test(e) ? p[" " + e] = e + "/" : p[" " + e] = x(e, "/", !0));
        var n = -1 === (e = p[" " + e]).indexOf(":");
        return "//" === t.substring(0, 2) ? n ? t : e.replace(g, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(v, "$1") + t : e + t;
      }

      function x(e, t, n) {
        var r = e.length;
        if (0 === r) return "";
        var i = 0;

        for (; i < r;) {
          var _o3 = e.charAt(r - i - 1);

          if (_o3 !== t || n) {
            if (_o3 === t || !n) break;
            i++;
          } else i++;
        }

        return e.substr(0, r - i);
      }

      t.exports = {
        escape: function escape(e, t) {
          if (t) {
            if (r.test(e)) return e.replace(i, l);
          } else if (o.test(e)) return e.replace(a, l);

          return e;
        },
        unescape: c,
        edit: function edit(e, t) {
          e = e.source || e, t = t || "";
          var n = {
            replace: function replace(t, r) {
              return r = (r = r.source || r).replace(h, "$1"), e = e.replace(t, r), n;
            },
            getRegex: function getRegex() {
              return new RegExp(e, t);
            }
          };
          return n;
        },
        cleanUrl: function cleanUrl(e, t, n) {
          if (e) {
            var _e19;

            try {
              _e19 = decodeURIComponent(c(n)).replace(f, "").toLowerCase();
            } catch (e) {
              return null;
            }

            if (0 === _e19.indexOf("javascript:") || 0 === _e19.indexOf("vbscript:") || 0 === _e19.indexOf("data:")) return null;
          }

          t && !d.test(n) && (n = y(t, n));

          try {
            n = encodeURI(n).replace(/%25/g, "%");
          } catch (e) {
            return null;
          }

          return n;
        },
        resolveUrl: y,
        noopTest: {
          exec: function exec() {}
        },
        merge: function merge(e) {
          var t,
              n,
              r = 1;

          for (; r < arguments.length; r++) {
            for (n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }

          return e;
        },
        splitCells: function splitCells(e, t) {
          var n = e.replace(/\|/g, function (e, t, n) {
            var r = !1,
                i = t;

            for (; --i >= 0 && "\\" === n[i];) {
              r = !r;
            }

            return r ? "|" : " |";
          }).split(/ \|/);
          var r = 0;
          if (n.length > t) n.splice(t);else for (; n.length < t;) {
            n.push("");
          }

          for (; r < n.length; r++) {
            n[r] = n[r].trim().replace(/\\\|/g, "|");
          }

          return n;
        },
        rtrim: x,
        findClosingBracket: function findClosingBracket(e, t) {
          if (-1 === e.indexOf(t[1])) return -1;
          var n = e.length;
          var r = 0,
              i = 0;

          for (; i < n; i++) {
            if ("\\" === e[i]) i++;else if (e[i] === t[0]) r++;else if (e[i] === t[1] && --r < 0) return i;
          }

          return -1;
        },
        checkSanitizeDeprecation: function checkSanitizeDeprecation(e) {
          e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
        }
      };
    }, {}],
    25: [function (e, t, n) {
      var r = e("./Lexer.js"),
          i = e("./Parser.js"),
          o = e("./Renderer.js"),
          a = e("./TextRenderer.js"),
          s = e("./InlineLexer.js"),
          l = e("./Slugger.js"),
          _e20 = e("./helpers.js"),
          u = _e20.merge,
          c = _e20.checkSanitizeDeprecation,
          h = _e20.escape,
          _e21 = e("./defaults.js"),
          f = _e21.getDefaults,
          d = _e21.changeDefaults,
          p = _e21.defaults;

      function m(e, t, n) {
        if (null == e) throw new Error("marked(): input parameter is undefined or null");
        if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");

        if (n || "function" == typeof t) {
          var _ret = function () {
            n || (n = t, t = null), t = u({}, m.defaults, t || {}), c(t);
            var o = t.highlight;
            var a,
                s,
                l = 0;

            try {
              a = r.lex(e, t);
            } catch (e) {
              return {
                v: n(e)
              };
            }

            s = a.length;

            var h = function h(e) {
              if (e) return t.highlight = o, n(e);
              var r;

              try {
                r = i.parse(a, t);
              } catch (t) {
                e = t;
              }

              return t.highlight = o, e ? n(e) : n(null, r);
            };

            if (!o || o.length < 3) return {
              v: h()
            };
            if (delete t.highlight, !s) return {
              v: h()
            };

            for (; l < a.length; l++) {
              !function (e) {
                "code" !== e.type ? --s || h() : o(e.text, e.lang, function (t, n) {
                  return t ? h(t) : null == n || n === e.text ? --s || h() : (e.text = n, e.escaped = !0, void (--s || h()));
                });
              }(a[l]);
            }
          }();

          if (_typeof(_ret) === "object") return _ret.v;
        } else try {
          return t = u({}, m.defaults, t || {}), c(t), i.parse(r.lex(e, t), t);
        } catch (e) {
          if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || m.defaults).silent) return "<p>An error occurred:</p><pre>" + h(e.message + "", !0) + "</pre>";
          throw e;
        }
      }

      m.options = m.setOptions = function (e) {
        return u(m.defaults, e), d(m.defaults), m;
      }, m.getDefaults = f, m.defaults = p, m.Parser = i, m.parser = i.parse, m.Renderer = o, m.TextRenderer = a, m.Lexer = r, m.lexer = r.lex, m.InlineLexer = s, m.inlineLexer = s.output, m.Slugger = l, m.parse = m, t.exports = m;
    }, {
      "./InlineLexer.js": 17,
      "./Lexer.js": 18,
      "./Parser.js": 19,
      "./Renderer.js": 20,
      "./Slugger.js": 21,
      "./TextRenderer.js": 22,
      "./defaults.js": 23,
      "./helpers.js": 24
    }],
    26: [function (e, t, n) {
      var _e22 = e("./helpers.js"),
          r = _e22.noopTest,
          i = _e22.edit,
          o = _e22.merge,
          a = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        nptable: r,
        table: r,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
        text: /^[^\n]+/,
        _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
      };

      a.def = i(a.def).replace("label", a._label).replace("title", a._title).getRegex(), a.bullet = /(?:[*+-]|\d{1,9}\.)/, a.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/, a.item = i(a.item, "gm").replace(/bull/g, a.bullet).getRegex(), a.list = i(a.list).replace(/bull/g, a.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + a.def.source + ")").getRegex(), a._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", a._comment = /<!--(?!-?>)[\s\S]*?-->/, a.html = i(a.html, "i").replace("comment", a._comment).replace("tag", a._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), a.paragraph = i(a._paragraph).replace("hr", a.hr).replace("heading", " {0,3}#{1,6} +").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", a._tag).getRegex(), a.blockquote = i(a.blockquote).replace("paragraph", a.paragraph).getRegex(), a.normal = o({}, a), a.gfm = o({}, a.normal, {
        nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
        table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
      }), a.pedantic = o({}, a.normal, {
        html: i("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", a._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
        fences: r,
        paragraph: i(a.normal._paragraph).replace("hr", a.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", a.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
      });
      var s = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: r,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
        em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: r,
        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
        _punctuation: "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"
      };
      s.em = i(s.em).replace(/punctuation/g, s._punctuation).getRegex(), s._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, s._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, s._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, s.autolink = i(s.autolink).replace("scheme", s._scheme).replace("email", s._email).getRegex(), s._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, s.tag = i(s.tag).replace("comment", a._comment).replace("attribute", s._attribute).getRegex(), s._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, s._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/, s._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, s.link = i(s.link).replace("label", s._label).replace("href", s._href).replace("title", s._title).getRegex(), s.reflink = i(s.reflink).replace("label", s._label).getRegex(), s.normal = o({}, s), s.pedantic = o({}, s.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
        link: i(/^!?\[(label)\]\((.*?)\)/).replace("label", s._label).getRegex(),
        reflink: i(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", s._label).getRegex()
      }), s.gfm = o({}, s.normal, {
        escape: i(s.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^~+(?=\S)([\s\S]*?\S)~+/,
        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
      }), s.gfm.url = i(s.gfm.url, "i").replace("email", s.gfm._extended_email).getRegex(), s.breaks = o({}, s.gfm, {
        br: i(s.br).replace("{2,}", "*").getRegex(),
        text: i(s.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
      }), t.exports = {
        block: a,
        inline: s
      };
    }, {
      "./helpers.js": 24
    }],
    27: [function (e, t, n) {
      (function (n, r) {
        var i;
        !function () {
          "use strict";

          (i = function i(e, t, n, _i3) {
            _i3 = _i3 || {}, this.dictionary = null, this.rules = {}, this.dictionaryTable = {}, this.compoundRules = [], this.compoundRuleCodes = {}, this.replacementTable = [], this.flags = _i3.flags || {}, this.memoized = {}, this.loaded = !1;
            var o,
                a,
                s,
                l,
                u,
                c = this;

            function h(e, t) {
              var n = c._readFile(e, null, _i3.asyncLoad);

              _i3.asyncLoad ? n.then(function (e) {
                t(e);
              }) : t(n);
            }

            function f(e) {
              t = e, n && p();
            }

            function d(e) {
              n = e, t && p();
            }

            function p() {
              for (c.rules = c._parseAFF(t), c.compoundRuleCodes = {}, a = 0, l = c.compoundRules.length; a < l; a++) {
                var e = c.compoundRules[a];

                for (s = 0, u = e.length; s < u; s++) {
                  c.compoundRuleCodes[e[s]] = [];
                }
              }

              for (a in "ONLYINCOMPOUND" in c.flags && (c.compoundRuleCodes[c.flags.ONLYINCOMPOUND] = []), c.dictionaryTable = c._parseDIC(n), c.compoundRuleCodes) {
                0 === c.compoundRuleCodes[a].length && delete c.compoundRuleCodes[a];
              }

              for (a = 0, l = c.compoundRules.length; a < l; a++) {
                var r = c.compoundRules[a],
                    o = "";

                for (s = 0, u = r.length; s < u; s++) {
                  var h = r[s];
                  h in c.compoundRuleCodes ? o += "(" + c.compoundRuleCodes[h].join("|") + ")" : o += h;
                }

                c.compoundRules[a] = new RegExp(o, "i");
              }

              c.loaded = !0, _i3.asyncLoad && _i3.loadedCallback && _i3.loadedCallback(c);
            }

            return e && (c.dictionary = e, t && n ? p() : "undefined" != typeof window && "chrome" in window && "extension" in window.chrome && "getURL" in window.chrome.extension ? (o = _i3.dictionaryPath ? _i3.dictionaryPath : "typo/dictionaries", t || h(chrome.extension.getURL(o + "/" + e + "/" + e + ".aff"), f), n || h(chrome.extension.getURL(o + "/" + e + "/" + e + ".dic"), d)) : (o = _i3.dictionaryPath ? _i3.dictionaryPath : void 0 !== r ? r + "/dictionaries" : "./dictionaries", t || h(o + "/" + e + "/" + e + ".aff", f), n || h(o + "/" + e + "/" + e + ".dic", d))), this;
          }).prototype = {
            load: function load(e) {
              for (var t in e) {
                e.hasOwnProperty(t) && (this[t] = e[t]);
              }

              return this;
            },
            _readFile: function _readFile(t, r, i) {
              if (r = r || "utf8", "undefined" != typeof XMLHttpRequest) {
                var o,
                    a = new XMLHttpRequest();
                return a.open("GET", t, i), i && (o = new Promise(function (e, t) {
                  a.onload = function () {
                    200 === a.status ? e(a.responseText) : t(a.statusText);
                  }, a.onerror = function () {
                    t(a.statusText);
                  };
                })), a.overrideMimeType && a.overrideMimeType("text/plain; charset=" + r), a.send(null), i ? o : a.responseText;
              }

              if (void 0 !== e) {
                var s = e("fs");

                try {
                  if (s.existsSync(t)) {
                    var l = s.statSync(t),
                        u = s.openSync(t, "r"),
                        c = new n(l.size);
                    return s.readSync(u, c, 0, c.length, null), c.toString(r, 0, c.length);
                  }

                  console.log("Path " + t + " does not exist.");
                } catch (e) {
                  return console.log(e), "";
                }
              }
            },
            _parseAFF: function _parseAFF(e) {
              var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  l = {},
                  u = (e = this._removeAffixComments(e)).split("\n");

              for (i = 0, a = u.length; i < a; i++) {
                var c = (t = u[i]).split(/\s+/),
                    h = c[0];

                if ("PFX" == h || "SFX" == h) {
                  var f = c[1],
                      d = c[2],
                      p = [];

                  for (o = i + 1, s = i + 1 + (n = parseInt(c[3], 10)); o < s; o++) {
                    var m = (r = u[o].split(/\s+/))[2],
                        g = r[3].split("/"),
                        v = g[0];
                    "0" === v && (v = "");
                    var y = this.parseRuleCodes(g[1]),
                        x = r[4],
                        b = {};
                    b.add = v, y.length > 0 && (b.continuationClasses = y), "." !== x && (b.match = "SFX" === h ? new RegExp(x + "$") : new RegExp("^" + x)), "0" != m && (b.remove = "SFX" === h ? new RegExp(m + "$") : m), p.push(b);
                  }

                  l[f] = {
                    type: h,
                    combineable: "Y" == d,
                    entries: p
                  }, i += n;
                } else if ("COMPOUNDRULE" === h) {
                  for (o = i + 1, s = i + 1 + (n = parseInt(c[1], 10)); o < s; o++) {
                    r = (t = u[o]).split(/\s+/), this.compoundRules.push(r[1]);
                  }

                  i += n;
                } else "REP" === h ? 3 === (r = t.split(/\s+/)).length && this.replacementTable.push([r[1], r[2]]) : this.flags[h] = c[1];
              }

              return l;
            },
            _removeAffixComments: function _removeAffixComments(e) {
              return e = (e = (e = (e = e.replace(/^\s*#.*$/gm, "")).replace(/^\s\s*/m, "").replace(/\s\s*$/m, "")).replace(/\n{2,}/g, "\n")).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            },
            _parseDIC: function _parseDIC(e) {
              var t = (e = this._removeDicComments(e)).split("\n"),
                  n = {};

              function r(e, t) {
                n.hasOwnProperty(e) || (n[e] = null), t.length > 0 && (null === n[e] && (n[e] = []), n[e].push(t));
              }

              for (var i = 1, o = t.length; i < o; i++) {
                var a = t[i].split("/", 2),
                    s = a[0];

                if (a.length > 1) {
                  var l = this.parseRuleCodes(a[1]);
                  "NEEDAFFIX" in this.flags && -1 != l.indexOf(this.flags.NEEDAFFIX) || r(s, l);

                  for (var u = 0, c = l.length; u < c; u++) {
                    var h = l[u],
                        f = this.rules[h];
                    if (f) for (var d = this._applyRule(s, f), p = 0, m = d.length; p < m; p++) {
                      var g = d[p];
                      if (r(g, []), f.combineable) for (var v = u + 1; v < c; v++) {
                        var y = l[v],
                            x = this.rules[y];
                        if (x && x.combineable && f.type != x.type) for (var b = this._applyRule(g, x), w = 0, k = b.length; w < k; w++) {
                          r(b[w], []);
                        }
                      }
                    }
                    h in this.compoundRuleCodes && this.compoundRuleCodes[h].push(s);
                  }
                } else r(s.trim(), []);
              }

              return n;
            },
            _removeDicComments: function _removeDicComments(e) {
              return e = e.replace(/^\t.*$/gm, "");
            },
            parseRuleCodes: function parseRuleCodes(e) {
              if (!e) return [];
              if (!("FLAG" in this.flags)) return e.split("");

              if ("long" === this.flags.FLAG) {
                for (var t = [], n = 0, r = e.length; n < r; n += 2) {
                  t.push(e.substr(n, 2));
                }

                return t;
              }

              return "num" === this.flags.FLAG ? e.split(",") : void 0;
            },
            _applyRule: function _applyRule(e, t) {
              for (var n = t.entries, r = [], i = 0, o = n.length; i < o; i++) {
                var a = n[i];

                if (!a.match || e.match(a.match)) {
                  var s = e;
                  if (a.remove && (s = s.replace(a.remove, "")), "SFX" === t.type ? s += a.add : s = a.add + s, r.push(s), "continuationClasses" in a) for (var l = 0, u = a.continuationClasses.length; l < u; l++) {
                    var c = this.rules[a.continuationClasses[l]];
                    c && (r = r.concat(this._applyRule(s, c)));
                  }
                }
              }

              return r;
            },
            check: function check(e) {
              if (!this.loaded) throw "Dictionary not loaded.";
              var t = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
              if (this.checkExact(t)) return !0;

              if (t.toUpperCase() === t) {
                var n = t[0] + t.substring(1).toLowerCase();
                if (this.hasFlag(n, "KEEPCASE")) return !1;
                if (this.checkExact(n)) return !0;
              }

              var r = t.toLowerCase();

              if (r !== t) {
                if (this.hasFlag(r, "KEEPCASE")) return !1;
                if (this.checkExact(r)) return !0;
              }

              return !1;
            },
            checkExact: function checkExact(e) {
              if (!this.loaded) throw "Dictionary not loaded.";
              var t,
                  n,
                  r = this.dictionaryTable[e];

              if (void 0 === r) {
                if ("COMPOUNDMIN" in this.flags && e.length >= this.flags.COMPOUNDMIN) for (t = 0, n = this.compoundRules.length; t < n; t++) {
                  if (e.match(this.compoundRules[t])) return !0;
                }
              } else {
                if (null === r) return !0;
                if ("object" == _typeof(r)) for (t = 0, n = r.length; t < n; t++) {
                  if (!this.hasFlag(e, "ONLYINCOMPOUND", r[t])) return !0;
                }
              }

              return !1;
            },
            hasFlag: function hasFlag(e, t, n) {
              if (!this.loaded) throw "Dictionary not loaded.";
              return !!(t in this.flags && (void 0 === n && (n = Array.prototype.concat.apply([], this.dictionaryTable[e])), n && -1 !== n.indexOf(this.flags[t])));
            },
            alphabet: "",
            suggest: function suggest(e, t) {
              if (!this.loaded) throw "Dictionary not loaded.";

              if (t = t || 5, this.memoized.hasOwnProperty(e)) {
                var n = this.memoized[e].limit;
                if (t <= n || this.memoized[e].suggestions.length < n) return this.memoized[e].suggestions.slice(0, t);
              }

              if (this.check(e)) return [];

              for (var r = 0, i = this.replacementTable.length; r < i; r++) {
                var o = this.replacementTable[r];

                if (-1 !== e.indexOf(o[0])) {
                  var a = e.replace(o[0], o[1]);
                  if (this.check(a)) return [a];
                }
              }

              var s = this;

              function l(e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    l = [];

                for (t = 0, i = e.length; t < i; t++) {
                  var u = e[t];

                  for (n = 0, o = u.length + 1; n < o; n++) {
                    var c = [u.substring(0, n), u.substring(n)];
                    if (c[1] && l.push(c[0] + c[1].substring(1)), c[1].length > 1 && c[1][1] !== c[1][0] && l.push(c[0] + c[1][1] + c[1][0] + c[1].substring(2)), c[1]) for (r = 0, a = s.alphabet.length; r < a; r++) {
                      s.alphabet[r] != c[1].substring(0, 1) && l.push(c[0] + s.alphabet[r] + c[1].substring(1));
                    }
                    if (c[1]) for (r = 0, a = s.alphabet.length; r < a; r++) {
                      l.push(c[0] + s.alphabet[r] + c[1]);
                    }
                  }
                }

                return l;
              }

              return s.alphabet = "abcdefghijklmnopqrstuvwxyz", this.memoized[e] = {
                suggestions: function (e) {
                  var n,
                      r,
                      i = l([e]),
                      o = l(i),
                      a = function (e) {
                    for (var t = [], n = 0, r = e.length; n < r; n++) {
                      s.check(e[n]) && t.push(e[n]);
                    }

                    return t;
                  }(i.concat(o)),
                      u = {};

                  for (n = 0, r = a.length; n < r; n++) {
                    a[n] in u ? u[a[n]] += 1 : u[a[n]] = 1;
                  }

                  var c = [];

                  for (n in u) {
                    u.hasOwnProperty(n) && c.push([n, u[n]]);
                  }

                  c.sort(function (e, t) {
                    return e[1] < t[1] ? -1 : 1;
                  }).reverse();
                  var h = [],
                      f = "lowercase";

                  for (e.toUpperCase() === e ? f = "uppercase" : e.substr(0, 1).toUpperCase() + e.substr(1).toLowerCase() === e && (f = "capitalized"), n = 0, r = Math.min(t, c.length); n < r; n++) {
                    "uppercase" === f ? c[n][0] = c[n][0].toUpperCase() : "capitalized" === f && (c[n][0] = c[n][0].substr(0, 1).toUpperCase() + c[n][0].substr(1)), s.hasFlag(c[n][0], "NOSUGGEST") || h.push(c[n][0]);
                  }

                  return h;
                }(e),
                limit: t
              }, this.memoized[e].suggestions;
            }
          };
        }(), void 0 !== t && (t.exports = i);
      }).call(this, e("buffer").Buffer, "/node_modules/typo-js");
    }, {
      buffer: 3,
      fs: 2
    }],
    28: [function (e, t, n) {
      var r = e("codemirror");
      r.commands.tabAndIndentMarkdownList = function (e) {
        var t = e.listSelections()[0].head;
        if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentMore");else if (e.options.indentWithTabs) e.execCommand("insertTab");else {
          var n = Array(e.options.tabSize + 1).join(" ");
          e.replaceSelection(n);
        }
      }, r.commands.shiftTabAndUnindentMarkdownList = function (e) {
        var t = e.listSelections()[0].head;
        if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentLess");else if (e.options.indentWithTabs) e.execCommand("insertTab");else {
          var n = Array(e.options.tabSize + 1).join(" ");
          e.replaceSelection(n);
        }
      };
    }, {
      codemirror: 11
    }],
    29: [function (e, t, n) {
      "use strict";

      var r = e("codemirror");
      e("codemirror/addon/edit/continuelist.js"), e("./codemirror/tablist"), e("codemirror/addon/display/fullscreen.js"), e("codemirror/mode/markdown/markdown.js"), e("codemirror/addon/mode/overlay.js"), e("codemirror/addon/display/placeholder.js"), e("codemirror/addon/selection/mark-selection.js"), e("codemirror/addon/search/searchcursor.js"), e("codemirror/mode/gfm/gfm.js"), e("codemirror/mode/xml/xml.js");

      var i = e("codemirror-spell-checker"),
          o = e("marked"),
          a = /Mac/.test(navigator.platform),
          s = new RegExp(/(<a.*?https?:\/\/.*?[^a]>)+?/g),
          l = {
        toggleBold: y,
        toggleItalic: x,
        drawLink: D,
        toggleHeadingSmaller: C,
        toggleHeadingBigger: S,
        drawImage: F,
        toggleBlockquote: k,
        toggleOrderedList: E,
        toggleUnorderedList: A,
        toggleCodeBlock: w,
        togglePreview: H,
        toggleStrikethrough: b,
        toggleHeading1: L,
        toggleHeading2: T,
        toggleHeading3: M,
        cleanBlock: N,
        drawTable: I,
        drawHorizontalRule: B,
        undo: R,
        redo: z,
        toggleSideBySide: P,
        toggleFullScreen: v
      },
          u = {
        toggleBold: "Cmd-B",
        toggleItalic: "Cmd-I",
        drawLink: "Cmd-K",
        toggleHeadingSmaller: "Cmd-H",
        toggleHeadingBigger: "Shift-Cmd-H",
        cleanBlock: "Cmd-E",
        drawImage: "Cmd-Alt-I",
        toggleBlockquote: "Cmd-'",
        toggleOrderedList: "Cmd-Alt-L",
        toggleUnorderedList: "Cmd-L",
        toggleCodeBlock: "Cmd-Alt-C",
        togglePreview: "Cmd-P",
        toggleSideBySide: "F9",
        toggleFullScreen: "F11"
      },
          c = function c(e) {
        for (var t in l) {
          if (l[t] === e) return t;
        }

        return null;
      },
          h = function h() {
        var e,
            t = !1;
        return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0, 4))) && (t = !0), t;
      };

      function f(e) {
        return e = a ? e.replace("Ctrl", "Cmd") : e.replace("Cmd", "Ctrl");
      }

      function d(e, t, n) {
        e = e || {};
        var r = document.createElement("button");
        r.className = e.name, r.setAttribute("type", "button"), t = null == t || t, e.name && e.name in n && (l[e.name] = e.action), e.title && t && (r.title = function (e, t, n) {
          var r,
              i = e;
          t && (r = c(t), n[r] && (i += " (" + f(n[r]) + ")"));
          return i;
        }(e.title, e.action, n), a && (r.title = r.title.replace("Ctrl", "⌘"), r.title = r.title.replace("Alt", "⌥"))), e.noDisable && r.classList.add("no-disable"), e.noMobile && r.classList.add("no-mobile");

        for (var i = e.className.split(" "), o = [], s = 0; s < i.length; s++) {
          var u = i[s];
          u.match(/^fa([srlb]|(-[\w-]*)|$)/) ? o.push(u) : r.classList.add(u);
        }

        r.tabIndex = -1;

        for (var h = document.createElement("i"), d = 0; d < o.length; d++) {
          var p = o[d];
          h.classList.add(p);
        }

        return r.appendChild(h), r;
      }

      function p() {
        var e = document.createElement("i");
        return e.className = "separator", e.innerHTML = "|", e;
      }

      function m(e, t) {
        t = t || e.getCursor("start");
        var n = e.getTokenAt(t);
        if (!n.type) return {};

        for (var r, i, o = n.type.split(" "), a = {}, s = 0; s < o.length; s++) {
          "strong" === (r = o[s]) ? a.bold = !0 : "variable-2" === r ? (i = e.getLine(t.line), /^\s*\d+\.\s/.test(i) ? a["ordered-list"] = !0 : a["unordered-list"] = !0) : "atom" === r ? a.quote = !0 : "em" === r ? a.italic = !0 : "quote" === r ? a.quote = !0 : "strikethrough" === r ? a.strikethrough = !0 : "comment" === r ? a.code = !0 : "link" === r ? a.link = !0 : "tag" === r ? a.image = !0 : r.match(/^header(-[1-6])?$/) && (a[r.replace("header", "heading")] = !0);
        }

        return a;
      }

      var g = "";

      function v(e) {
        var t = e.codemirror;
        t.setOption("fullScreen", !t.getOption("fullScreen")), t.getOption("fullScreen") ? (g = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = g;
        var n = t.getWrapperElement();

        if (/fullscreen/.test(n.previousSibling.className) ? n.previousSibling.className = n.previousSibling.className.replace(/\s*fullscreen\b/, "") : n.previousSibling.className += " fullscreen", e.toolbarElements && e.toolbarElements.fullscreen) {
          var r = e.toolbarElements.fullscreen;
          /active/.test(r.className) ? r.className = r.className.replace(/\s*active\s*/g, "") : r.className += " active";
        }

        var i = t.getWrapperElement().nextSibling;
        /editor-preview-active-side/.test(i.className) && P(e), e.options.onToggleFullScreen && e.options.onToggleFullScreen(t.getOption("fullScreen") || !1);
      }

      function y(e) {
        U(e, "bold", e.options.blockStyles.bold);
      }

      function x(e) {
        U(e, "italic", e.options.blockStyles.italic);
      }

      function b(e) {
        U(e, "strikethrough", "~~");
      }

      function w(e) {
        var t = e.options.blockStyles.code;

        function n(e) {
          if ("object" != _typeof(e)) throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " + _typeof(e) + ": " + e;
          return e.styles && e.styles[2] && -1 !== e.styles[2].indexOf("formatting-code-block");
        }

        function r(e) {
          return e.state.base.base || e.state.base;
        }

        function i(e, t, i, o, a) {
          i = i || e.getLineHandle(t), o = o || e.getTokenAt({
            line: t,
            ch: 1
          }), a = a || !!i.text && e.getTokenAt({
            line: t,
            ch: i.text.length - 1
          });
          var s = o.type ? o.type.split(" ") : [];
          return a && r(a).indentedCode ? "indented" : -1 !== s.indexOf("comment") && (r(o).fencedChars || r(a).fencedChars || n(i) ? "fenced" : "single");
        }

        var o,
            a,
            s,
            l = e.codemirror,
            u = l.getCursor("start"),
            c = l.getCursor("end"),
            h = l.getTokenAt({
          line: u.line,
          ch: u.ch || 1
        }),
            f = l.getLineHandle(u.line),
            d = i(l, u.line, f, h);

        if ("single" === d) {
          var p = f.text.slice(0, u.ch).replace("`", ""),
              m = f.text.slice(u.ch).replace("`", "");
          l.replaceRange(p + m, {
            line: u.line,
            ch: 0
          }, {
            line: u.line,
            ch: 99999999999999
          }), u.ch--, u !== c && c.ch--, l.setSelection(u, c), l.focus();
        } else if ("fenced" === d) {
          if (u.line !== c.line || u.ch !== c.ch) {
            for (o = u.line; o >= 0 && !n(f = l.getLineHandle(o)); o--) {
              ;
            }

            var g,
                v,
                y,
                x,
                b = r(l.getTokenAt({
              line: o,
              ch: 1
            })).fencedChars;
            n(l.getLineHandle(u.line)) ? (g = "", v = u.line) : n(l.getLineHandle(u.line - 1)) ? (g = "", v = u.line - 1) : (g = b + "\n", v = u.line), n(l.getLineHandle(c.line)) ? (y = "", x = c.line, 0 === c.ch && (x += 1)) : 0 !== c.ch && n(l.getLineHandle(c.line + 1)) ? (y = "", x = c.line + 1) : (y = b + "\n", x = c.line + 1), 0 === c.ch && (x -= 1), l.operation(function () {
              l.replaceRange(y, {
                line: x,
                ch: 0
              }, {
                line: x + (y ? 0 : 1),
                ch: 0
              }), l.replaceRange(g, {
                line: v,
                ch: 0
              }, {
                line: v + (g ? 0 : 1),
                ch: 0
              });
            }), l.setSelection({
              line: v + (g ? 1 : 0),
              ch: 0
            }, {
              line: x + (g ? 1 : -1),
              ch: 0
            }), l.focus();
          } else {
            var w = u.line;
            if (n(l.getLineHandle(u.line)) && ("fenced" === i(l, u.line + 1) ? (o = u.line, w = u.line + 1) : (a = u.line, w = u.line - 1)), void 0 === o) for (o = w; o >= 0 && !n(f = l.getLineHandle(o)); o--) {
              ;
            }
            if (void 0 === a) for (s = l.lineCount(), a = w; a < s && !n(f = l.getLineHandle(a)); a++) {
              ;
            }
            l.operation(function () {
              l.replaceRange("", {
                line: o,
                ch: 0
              }, {
                line: o + 1,
                ch: 0
              }), l.replaceRange("", {
                line: a - 1,
                ch: 0
              }, {
                line: a,
                ch: 0
              });
            }), l.focus();
          }
        } else if ("indented" === d) {
          if (u.line !== c.line || u.ch !== c.ch) o = u.line, a = c.line, 0 === c.ch && a--;else {
            for (o = u.line; o >= 0; o--) {
              if (!(f = l.getLineHandle(o)).text.match(/^\s*$/) && "indented" !== i(l, o, f)) {
                o += 1;
                break;
              }
            }

            for (s = l.lineCount(), a = u.line; a < s; a++) {
              if (!(f = l.getLineHandle(a)).text.match(/^\s*$/) && "indented" !== i(l, a, f)) {
                a -= 1;
                break;
              }
            }
          }
          var k = l.getLineHandle(a + 1),
              C = k && l.getTokenAt({
            line: a + 1,
            ch: k.text.length - 1
          });
          C && r(C).indentedCode && l.replaceRange("\n", {
            line: a + 1,
            ch: 0
          });

          for (var S = o; S <= a; S++) {
            l.indentLine(S, "subtract");
          }

          l.focus();
        } else {
          var L = u.line === c.line && u.ch === c.ch && 0 === u.ch,
              T = u.line !== c.line;
          L || T ? function (e, t, n, r) {
            var i = t.line + 1,
                o = n.line + 1,
                a = t.line !== n.line,
                s = r + "\n",
                l = "\n" + r;
            a && o++, a && 0 === n.ch && (l = r + "\n", o--), j(e, !1, [s, l]), e.setSelection({
              line: i,
              ch: 0
            }, {
              line: o,
              ch: 0
            });
          }(l, u, c, t) : j(l, !1, ["`", "`"]);
        }
      }

      function k(e) {
        W(e.codemirror, "quote");
      }

      function C(e) {
        _(e.codemirror, "smaller");
      }

      function S(e) {
        _(e.codemirror, "bigger");
      }

      function L(e) {
        _(e.codemirror, void 0, 1);
      }

      function T(e) {
        _(e.codemirror, void 0, 2);
      }

      function M(e) {
        _(e.codemirror, void 0, 3);
      }

      function A(e) {
        W(e.codemirror, "unordered-list");
      }

      function E(e) {
        W(e.codemirror, "ordered-list");
      }

      function N(e) {
        !function (e) {
          if (/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) return;

          for (var t, n = e.getCursor("start"), r = e.getCursor("end"), i = n.line; i <= r.line; i++) {
            t = (t = e.getLine(i)).replace(/^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/, ""), e.replaceRange(t, {
              line: i,
              ch: 0
            }, {
              line: i,
              ch: 99999999999999
            });
          }
        }(e.codemirror);
      }

      function D(e) {
        var t = e.codemirror,
            n = m(t),
            r = e.options,
            i = "https://";
        if (r.promptURLs && !(i = prompt(r.promptTexts.link, "https://"))) return !1;
        j(t, n.link, r.insertTexts.link, i);
      }

      function F(e) {
        var t = e.codemirror,
            n = m(t),
            r = e.options,
            i = "https://";
        if (r.promptURLs && !(i = prompt(r.promptTexts.image, "https://"))) return !1;
        j(t, n.image, r.insertTexts.image, i);
      }

      function O(e, t) {
        var n = e.codemirror,
            r = m(n),
            i = e.options,
            o = t.substr(t.lastIndexOf("/") + 1);
        j(n, r.image, i.insertTexts.uploadedImage, t), e.updateStatusBar("upload-image", e.options.imageTexts.sbOnUploaded.replace("#image_name#", o)), setTimeout(function () {
          e.updateStatusBar("upload-image", e.options.imageTexts.sbInit);
        }, 1e3);
      }

      function I(e) {
        var t = e.codemirror,
            n = m(t),
            r = e.options;
        j(t, n.table, r.insertTexts.table);
      }

      function B(e) {
        var t = e.codemirror,
            n = m(t),
            r = e.options;
        j(t, n.image, r.insertTexts.horizontalRule);
      }

      function R(e) {
        var t = e.codemirror;
        t.undo(), t.focus();
      }

      function z(e) {
        var t = e.codemirror;
        t.redo(), t.focus();
      }

      function P(e) {
        var t = e.codemirror,
            n = t.getWrapperElement(),
            r = n.nextSibling,
            i = e.toolbarElements && e.toolbarElements["side-by-side"],
            o = !1;
        /editor-preview-active-side/.test(r.className) ? (r.className = r.className.replace(/\s*editor-preview-active-side\s*/g, ""), i && (i.className = i.className.replace(/\s*active\s*/g, "")), n.className = n.className.replace(/\s*CodeMirror-sided\s*/g, " ")) : (setTimeout(function () {
          t.getOption("fullScreen") || v(e), r.className += " editor-preview-active-side";
        }, 1), i && (i.className += " active"), n.className += " CodeMirror-sided", o = !0);
        var a = n.lastChild;

        if (/editor-preview-active/.test(a.className)) {
          a.className = a.className.replace(/\s*editor-preview-active\s*/g, "");
          var s = e.toolbarElements.preview,
              l = n.previousSibling;
          s.className = s.className.replace(/\s*active\s*/g, ""), l.className = l.className.replace(/\s*disabled-for-preview*/g, "");
        }

        if (t.sideBySideRenderingFunction || (t.sideBySideRenderingFunction = function () {
          var t = e.options.previewRender(e.value(), r);
          null != t && (r.innerHTML = t);
        }), o) {
          var u = e.options.previewRender(e.value(), r);
          null != u && (r.innerHTML = u), t.on("update", t.sideBySideRenderingFunction);
        } else t.off("update", t.sideBySideRenderingFunction);

        t.refresh();
      }

      function H(e) {
        var t = e.codemirror,
            n = t.getWrapperElement(),
            r = n.previousSibling,
            i = !!e.options.toolbar && e.toolbarElements.preview,
            o = n.lastChild;

        if (!o || !/editor-preview-full/.test(o.className)) {
          if ((o = document.createElement("div")).className = "editor-preview-full", e.options.previewClass) if (Array.isArray(e.options.previewClass)) for (var a = 0; a < e.options.previewClass.length; a++) {
            o.className += " " + e.options.previewClass[a];
          } else "string" == typeof e.options.previewClass && (o.className += " " + e.options.previewClass);
          n.appendChild(o);
        }

        /editor-preview-active/.test(o.className) ? (o.className = o.className.replace(/\s*editor-preview-active\s*/g, ""), i && (i.className = i.className.replace(/\s*active\s*/g, ""), r.className = r.className.replace(/\s*disabled-for-preview*/g, ""))) : (setTimeout(function () {
          o.className += " editor-preview-active";
        }, 1), i && (i.className += " active", r.className += " disabled-for-preview")), o.innerHTML = e.options.previewRender(e.value(), o);
        var s = t.getWrapperElement().nextSibling;
        /editor-preview-active-side/.test(s.className) && P(e);
      }

      function j(e, t, n, r) {
        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
          var i,
              o = n[0],
              a = n[1],
              s = {},
              l = {};
          Object.assign(s, e.getCursor("start")), Object.assign(l, e.getCursor("end")), r && (o = o.replace("#url#", r), a = a.replace("#url#", r)), t ? (o = (i = e.getLine(s.line)).slice(0, s.ch), a = i.slice(s.ch), e.replaceRange(o + a, {
            line: s.line,
            ch: 0
          })) : (i = e.getSelection(), e.replaceSelection(o + i + a), s.ch += o.length, s !== l && (l.ch += o.length)), e.setSelection(s, l), e.focus();
        }
      }

      function _(e, t, n) {
        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
          for (var r = e.getCursor("start"), i = e.getCursor("end"), o = r.line; o <= i.line; o++) {
            !function (r) {
              var i = e.getLine(r),
                  o = i.search(/[^#]/);
              i = void 0 !== t ? o <= 0 ? "bigger" == t ? "###### " + i : "# " + i : 6 == o && "smaller" == t ? i.substr(7) : 1 == o && "bigger" == t ? i.substr(2) : "bigger" == t ? i.substr(1) : "#" + i : 1 == n ? o <= 0 ? "# " + i : o == n ? i.substr(o + 1) : "# " + i.substr(o + 1) : 2 == n ? o <= 0 ? "## " + i : o == n ? i.substr(o + 1) : "## " + i.substr(o + 1) : o <= 0 ? "### " + i : o == n ? i.substr(o + 1) : "### " + i.substr(o + 1), e.replaceRange(i, {
                line: r,
                ch: 0
              }, {
                line: r,
                ch: 99999999999999
              });
            }(o);
          }

          e.focus();
        }
      }

      function W(e, t) {
        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
          for (var n = /^(\s*)(\*|-|\+|\d*\.)(\s+)/, r = /^\s*/, i = m(e), o = e.getCursor("start"), a = e.getCursor("end"), s = {
            quote: /^(\s*)>\s+/,
            "unordered-list": n,
            "ordered-list": n
          }, l = function l(e, t, i) {
            var o = n.exec(t),
                a = function (e, t) {
              return {
                quote: ">",
                "unordered-list": "*",
                "ordered-list": "%%i."
              }[e].replace("%%i", t);
            }(e, u);

            return null !== o ? (function (e, t) {
              var n = new RegExp({
                quote: ">",
                "unordered-list": "*",
                "ordered-list": "\\d+."
              }[e]);
              return t && n.test(t);
            }(e, o[2]) && (a = ""), t = o[1] + a + o[3] + t.replace(r, "").replace(s[e], "$1")) : 0 == i && (t = a + " " + t), t;
          }, u = 1, c = o.line; c <= a.line; c++) {
            !function (n) {
              var r = e.getLine(n);
              i[t] ? r = r.replace(s[t], "$1") : ("unordered-list" == t && (r = l("ordered-list", r, !0)), r = l(t, r, !1), u += 1), e.replaceRange(r, {
                line: n,
                ch: 0
              }, {
                line: n,
                ch: 99999999999999
              });
            }(c);
          }

          e.focus();
        }
      }

      function U(e, t, n, r) {
        if (!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)) {
          r = void 0 === r ? n : r;
          var i,
              o = e.codemirror,
              a = m(o),
              s = n,
              l = r,
              u = o.getCursor("start"),
              c = o.getCursor("end");
          a[t] ? (s = (i = o.getLine(u.line)).slice(0, u.ch), l = i.slice(u.ch), "bold" == t ? (s = s.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), l = l.replace(/(\*\*|__)/, "")) : "italic" == t ? (s = s.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), l = l.replace(/(\*|_)/, "")) : "strikethrough" == t && (s = s.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), l = l.replace(/(\*\*|~~)/, "")), o.replaceRange(s + l, {
            line: u.line,
            ch: 0
          }, {
            line: u.line,
            ch: 99999999999999
          }), "bold" == t || "strikethrough" == t ? (u.ch -= 2, u !== c && (c.ch -= 2)) : "italic" == t && (u.ch -= 1, u !== c && (c.ch -= 1))) : (i = o.getSelection(), "bold" == t ? i = (i = i.split("**").join("")).split("__").join("") : "italic" == t ? i = (i = i.split("*").join("")).split("_").join("") : "strikethrough" == t && (i = i.split("~~").join("")), o.replaceSelection(s + i + l), u.ch += n.length, c.ch = u.ch + i.length), o.setSelection(u, c), o.focus();
        }
      }

      function q(e, t) {
        if (Math.abs(e) < 1024) return "" + e + t[0];
        var n = 0;

        do {
          e /= 1024, ++n;
        } while (Math.abs(e) >= 1024 && n < t.length);

        return "" + e.toFixed(1) + t[n];
      }

      function $(e, t) {
        for (var n in t) {
          Object.prototype.hasOwnProperty.call(t, n) && (_instanceof(t[n], Array) ? e[n] = t[n].concat(_instanceof(e[n], Array) ? e[n] : []) : null !== t[n] && "object" == _typeof(t[n]) && t[n].constructor === Object ? e[n] = $(e[n] || {}, t[n]) : e[n] = t[n]);
        }

        return e;
      }

      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          e = $(e, arguments[t]);
        }

        return e;
      }

      function V(e) {
        var t = e.match(/[a-zA-Z0-9_\u00A0-\u02AF\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g),
            n = 0;
        if (null === t) return n;

        for (var r = 0; r < t.length; r++) {
          t[r].charCodeAt(0) >= 19968 ? n += t[r].length : n += 1;
        }

        return n;
      }

      var X = {
        bold: {
          name: "bold",
          action: y,
          className: "fa fa-bold",
          title: "Bold",
          default: !0
        },
        italic: {
          name: "italic",
          action: x,
          className: "fa fa-italic",
          title: "Italic",
          default: !0
        },
        strikethrough: {
          name: "strikethrough",
          action: b,
          className: "fa fa-strikethrough",
          title: "Strikethrough"
        },
        heading: {
          name: "heading",
          action: C,
          className: "fa fa-header fa-heading",
          title: "Heading",
          default: !0
        },
        "heading-smaller": {
          name: "heading-smaller",
          action: C,
          className: "fa fa-header fa-heading header-smaller",
          title: "Smaller Heading"
        },
        "heading-bigger": {
          name: "heading-bigger",
          action: S,
          className: "fa fa-header fa-heading header-bigger",
          title: "Bigger Heading"
        },
        "heading-1": {
          name: "heading-1",
          action: L,
          className: "fa fa-header fa-heading header-1",
          title: "Big Heading"
        },
        "heading-2": {
          name: "heading-2",
          action: T,
          className: "fa fa-header fa-heading header-2",
          title: "Medium Heading"
        },
        "heading-3": {
          name: "heading-3",
          action: M,
          className: "fa fa-header fa-heading header-3",
          title: "Small Heading"
        },
        "separator-1": {
          name: "separator-1"
        },
        code: {
          name: "code",
          action: w,
          className: "fa fa-code",
          title: "Code"
        },
        quote: {
          name: "quote",
          action: k,
          className: "fa fa-quote-left",
          title: "Quote",
          default: !0
        },
        "unordered-list": {
          name: "unordered-list",
          action: A,
          className: "fa fa-list-ul",
          title: "Generic List",
          default: !0
        },
        "ordered-list": {
          name: "ordered-list",
          action: E,
          className: "fa fa-list-ol",
          title: "Numbered List",
          default: !0
        },
        "clean-block": {
          name: "clean-block",
          action: N,
          className: "fa fa-eraser",
          title: "Clean block"
        },
        "separator-2": {
          name: "separator-2"
        },
        link: {
          name: "link",
          action: D,
          className: "fa fa-link",
          title: "Create Link",
          default: !0
        },
        image: {
          name: "image",
          action: F,
          className: "fa fa-image",
          title: "Insert Image",
          default: !0
        },
        "upload-image": {
          name: "upload-image",
          action: function action(e) {
            e.openBrowseFileWindow();
          },
          className: "fa fa-image",
          title: "Import an image"
        },
        table: {
          name: "table",
          action: I,
          className: "fa fa-table",
          title: "Insert Table"
        },
        "horizontal-rule": {
          name: "horizontal-rule",
          action: B,
          className: "fa fa-minus",
          title: "Insert Horizontal Line"
        },
        "separator-3": {
          name: "separator-3"
        },
        preview: {
          name: "preview",
          action: H,
          className: "fa fa-eye",
          noDisable: !0,
          title: "Toggle Preview",
          default: !0
        },
        "side-by-side": {
          name: "side-by-side",
          action: P,
          className: "fa fa-columns",
          noDisable: !0,
          noMobile: !0,
          title: "Toggle Side by Side",
          default: !0
        },
        fullscreen: {
          name: "fullscreen",
          action: v,
          className: "fa fa-arrows-alt",
          noDisable: !0,
          noMobile: !0,
          title: "Toggle Fullscreen",
          default: !0
        },
        "separator-4": {
          name: "separator-4"
        },
        guide: {
          name: "guide",
          action: "https://www.markdownguide.org/basic-syntax/",
          className: "fa fa-question-circle",
          noDisable: !0,
          title: "Markdown Guide",
          default: !0
        },
        "separator-5": {
          name: "separator-5"
        },
        undo: {
          name: "undo",
          action: R,
          className: "fa fa-undo",
          noDisable: !0,
          title: "Undo"
        },
        redo: {
          name: "redo",
          action: z,
          className: "fa fa-repeat fa-redo",
          noDisable: !0,
          title: "Redo"
        }
      },
          K = {
        link: ["[", "](#url#)"],
        image: ["![](", "#url#)"],
        uploadedImage: ["![](#url#)", ""],
        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"],
        horizontalRule: ["", "\n\n-----\n\n"]
      },
          Y = {
        link: "URL for the link:",
        image: "URL of the image:"
      },
          Z = {
        bold: "**",
        code: "```",
        italic: "*"
      },
          J = {
        sbInit: "Attach files by drag and dropping or pasting from clipboard.",
        sbOnDragEnter: "Drop image to upload it.",
        sbOnDrop: "Uploading image #images_names#...",
        sbProgress: "Uploading #file_name#: #progress#%",
        sbOnUploaded: "Uploaded #image_name#",
        sizeUnits: "b,Kb,Mb"
      },
          Q = {
        noFileGiven: "You must select a file.",
        typeNotAllowed: "This image type is not allowed.",
        fileTooLarge: "Image #image_name# is too big (#image_size#).\nMaximum file size is #image_max_size#.",
        importError: "Something went wrong when uploading the image #image_name#."
      };

      function ee(e) {
        (e = e || {}).parent = this;
        var t = !0;
        if (!1 === e.autoDownloadFontAwesome && (t = !1), !0 !== e.autoDownloadFontAwesome) for (var n = document.styleSheets, r = 0; r < n.length; r++) {
          n[r].href && n[r].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") > -1 && (t = !1);
        }

        if (t) {
          var i = document.createElement("link");
          i.rel = "stylesheet", i.href = "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css", document.getElementsByTagName("head")[0].appendChild(i);
        }

        if (e.element) this.element = e.element;else if (null === e.element) return void console.log("EasyMDE: Error. No element was found.");
        if (void 0 === e.toolbar) for (var o in e.toolbar = [], X) {
          Object.prototype.hasOwnProperty.call(X, o) && (-1 != o.indexOf("separator-") && e.toolbar.push("|"), (!0 === X[o].default || e.showIcons && e.showIcons.constructor === Array && -1 != e.showIcons.indexOf(o)) && e.toolbar.push(o));
        }

        if (Object.prototype.hasOwnProperty.call(e, "previewClass") || (e.previewClass = "editor-preview"), Object.prototype.hasOwnProperty.call(e, "status") || (e.status = ["autosave", "lines", "words", "cursor"], e.uploadImage && e.status.unshift("upload-image")), e.previewRender || (e.previewRender = function (e) {
          return this.parent.markdown(e);
        }), e.parsingConfig = G({
          highlightFormatting: !0
        }, e.parsingConfig || {}), e.insertTexts = G({}, K, e.insertTexts || {}), e.promptTexts = G({}, Y, e.promptTexts || {}), e.blockStyles = G({}, Z, e.blockStyles || {}), e.shortcuts = G({}, u, e.shortcuts || {}), e.minHeight = e.minHeight || "300px", e.errorCallback = e.errorCallback || function (e) {
          alert(e);
        }, e.uploadImage = e.uploadImage || !1, e.imageMaxSize = e.imageMaxSize || 2097152, e.imageAccept = e.imageAccept || "image/png, image/jpeg", e.imageTexts = G({}, J, e.imageTexts || {}), e.errorMessages = G({}, Q, e.errorMessages || {}), null != e.autosave && null != e.autosave.unique_id && "" != e.autosave.unique_id && (e.autosave.uniqueId = e.autosave.unique_id), this.options = e, this.render(), !e.initialValue || this.options.autosave && !0 === this.options.autosave.foundSavedValue || this.value(e.initialValue), e.uploadImage) {
          var a = this;
          this.codemirror.on("dragenter", function (e, t) {
            a.updateStatusBar("upload-image", a.options.imageTexts.sbOnDragEnter), t.stopPropagation(), t.preventDefault();
          }), this.codemirror.on("dragend", function (e, t) {
            a.updateStatusBar("upload-image", a.options.imageTexts.sbInit), t.stopPropagation(), t.preventDefault();
          }), this.codemirror.on("dragleave", function (e, t) {
            a.updateStatusBar("upload-image", a.options.imageTexts.sbInit), t.stopPropagation(), t.preventDefault();
          }), this.codemirror.on("dragover", function (e, t) {
            a.updateStatusBar("upload-image", a.options.imageTexts.sbOnDragEnter), t.stopPropagation(), t.preventDefault();
          }), this.codemirror.on("drop", function (t, n) {
            n.stopPropagation(), n.preventDefault(), e.imageUploadFunction ? a.uploadImagesUsingCustomFunction(e.imageUploadFunction, n.dataTransfer.files) : a.uploadImages(n.dataTransfer.files);
          }), this.codemirror.on("paste", function (t, n) {
            e.imageUploadFunction ? a.uploadImagesUsingCustomFunction(e.imageUploadFunction, n.clipboardData.files) : a.uploadImages(n.clipboardData.files);
          });
        }
      }

      function te() {
        if ("object" != (typeof localStorage === "undefined" ? "undefined" : _typeof(localStorage))) return !1;

        try {
          localStorage.setItem("smde_localStorage", 1), localStorage.removeItem("smde_localStorage");
        } catch (e) {
          return !1;
        }

        return !0;
      }

      ee.prototype.uploadImages = function (e, t, n) {
        if (0 !== e.length) {
          for (var r = [], i = 0; i < e.length; i++) {
            r.push(e[i].name), this.uploadImage(e[i], t, n);
          }

          this.updateStatusBar("upload-image", this.options.imageTexts.sbOnDrop.replace("#images_names#", r.join(", ")));
        }
      }, ee.prototype.uploadImagesUsingCustomFunction = function (e, t) {
        if (0 !== t.length) {
          for (var n = [], r = 0; r < t.length; r++) {
            n.push(t[r].name), this.uploadImageUsingCustomFunction(e, t[r]);
          }

          this.updateStatusBar("upload-image", this.options.imageTexts.sbOnDrop.replace("#images_names#", n.join(", ")));
        }
      }, ee.prototype.updateStatusBar = function (e, t) {
        var n = this.gui.statusbar.getElementsByClassName(e);
        1 === n.length ? this.gui.statusbar.getElementsByClassName(e)[0].textContent = t : 0 === n.length ? console.log("EasyMDE: status bar item " + e + " was not found.") : console.log("EasyMDE: Several status bar items named " + e + " was found.");
      }, ee.prototype.markdown = function (e) {
        if (o) {
          var t;

          if (t = this.options && this.options.renderingConfig && this.options.renderingConfig.markedOptions ? this.options.renderingConfig.markedOptions : {}, this.options && this.options.renderingConfig && !1 === this.options.renderingConfig.singleLineBreaks ? t.breaks = !1 : t.breaks = !0, this.options && this.options.renderingConfig && !0 === this.options.renderingConfig.codeSyntaxHighlighting) {
            var n = this.options.renderingConfig.hljs || window.hljs;
            n && (t.highlight = function (e) {
              return n.highlightAuto(e).value;
            });
          }

          o.setOptions(t);
          var r = o(e);
          return r = function (e) {
            for (var t; null !== (t = s.exec(e));) {
              var n = t[0];

              if (-1 === n.indexOf("target=")) {
                var r = n.replace(/>$/, ' target="_blank">');
                e = e.replace(n, r);
              }
            }

            return e;
          }(r);
        }
      }, ee.prototype.render = function (e) {
        if (e || (e = this.element || document.getElementsByTagName("textarea")[0]), !this._rendered || this._rendered !== e) {
          this.element = e;
          var t,
              n,
              o = this.options,
              a = this,
              s = {};

          for (var u in o.shortcuts) {
            null !== o.shortcuts[u] && null !== l[u] && function (e) {
              s[f(o.shortcuts[e])] = function () {
                var t = l[e];
                "function" == typeof t ? t(a) : "string" == typeof t && window.open(t, "_blank");
              };
            }(u);
          }

          if (s.Enter = "newlineAndIndentContinueMarkdownList", s.Tab = "tabAndIndentMarkdownList", s["Shift-Tab"] = "shiftTabAndUnindentMarkdownList", s.Esc = function (e) {
            e.getOption("fullScreen") && v(a);
          }, document.addEventListener("keydown", function (e) {
            27 == (e = e || window.event).keyCode && a.codemirror.getOption("fullScreen") && v(a);
          }, !1), !1 !== o.spellChecker ? (t = "spell-checker", (n = o.parsingConfig).name = "gfm", n.gitHubSpice = !1, i({
            codeMirrorInstance: r
          })) : ((t = o.parsingConfig).name = "gfm", t.gitHubSpice = !1), this.codemirror = r.fromTextArea(e, {
            mode: t,
            backdrop: n,
            theme: null != o.theme ? o.theme : "easymde",
            tabSize: null != o.tabSize ? o.tabSize : 2,
            indentUnit: null != o.tabSize ? o.tabSize : 2,
            indentWithTabs: !1 !== o.indentWithTabs,
            lineNumbers: !1,
            autofocus: !0 === o.autofocus,
            extraKeys: s,
            lineWrapping: !1 !== o.lineWrapping,
            allowDropFileTypes: ["text/plain"],
            placeholder: o.placeholder || e.getAttribute("placeholder") || "",
            styleSelectedText: null != o.styleSelectedText ? o.styleSelectedText : !h(),
            configureMouse: function configureMouse(e, t, n) {
              return {
                addNew: !1
              };
            }
          }), this.codemirror.getScrollerElement().style.minHeight = o.minHeight, !0 === o.forceSync) {
            var c = this.codemirror;
            c.on("change", function () {
              c.save();
            });
          }

          this.gui = {}, !1 !== o.toolbar && (this.gui.toolbar = this.createToolbar()), !1 !== o.status && (this.gui.statusbar = this.createStatusbar()), null != o.autosave && !0 === o.autosave.enabled && this.autosave(), this.gui.sideBySide = this.createSideBySide(), this._rendered = this.element;
          var d = this.codemirror;
          setTimeout(function () {
            d.refresh();
          }.bind(d), 0);
        }
      }, ee.prototype.autosave = function () {
        if (te()) {
          var e = this;
          if (null == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("EasyMDE: You must set a uniqueId to use the autosave feature");
          !0 !== this.options.autosave.binded && (null != e.element.form && null != e.element.form && e.element.form.addEventListener("submit", function () {
            clearTimeout(e.autosaveTimeoutId), e.autosaveTimeoutId = void 0, localStorage.removeItem("smde_" + e.options.autosave.uniqueId), setTimeout(function () {
              e.autosave();
            }, e.options.autosave.delay || 1e4);
          }), this.options.autosave.binded = !0), !0 !== this.options.autosave.loaded && ("string" == typeof localStorage.getItem("smde_" + this.options.autosave.uniqueId) && "" != localStorage.getItem("smde_" + this.options.autosave.uniqueId) && (this.codemirror.setValue(localStorage.getItem("smde_" + this.options.autosave.uniqueId)), this.options.autosave.foundSavedValue = !0), this.options.autosave.loaded = !0);
          var t = e.value();
          "" !== t ? localStorage.setItem("smde_" + this.options.autosave.uniqueId, t) : localStorage.removeItem("smde_" + this.options.autosave.uniqueId);
          var n = document.getElementById("autosaved");

          if (null != n && null != n && "" != n) {
            var r = new Date(),
                i = r.getHours(),
                o = r.getMinutes(),
                a = "am",
                s = i;
            s >= 12 && (s = i - 12, a = "pm"), 0 == s && (s = 12), o = o < 10 ? "0" + o : o, n.innerHTML = "Autosaved: " + s + ":" + o + " " + a;
          }

          this.autosaveTimeoutId = setTimeout(function () {
            e.autosave();
          }, this.options.autosave.delay || 1e4);
        } else console.log("EasyMDE: localStorage not available, cannot autosave");
      }, ee.prototype.clearAutosavedValue = function () {
        if (te()) {
          if (null == this.options.autosave || null == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("EasyMDE: You must set a uniqueId to clear the autosave value");
          localStorage.removeItem("smde_" + this.options.autosave.uniqueId);
        } else console.log("EasyMDE: localStorage not available, cannot autosave");
      }, ee.prototype.openBrowseFileWindow = function (e, t) {
        var n = this,
            r = this.gui.toolbar.getElementsByClassName("imageInput")[0];
        r.click(), r.addEventListener("change", function i(o) {
          n.options.imageUploadFunction ? n.uploadImagesUsingCustomFunction(n.options.imageUploadFunction, o.target.files) : n.uploadImages(o.target.files, e, t), r.removeEventListener("change", i);
        });
      }, ee.prototype.uploadImage = function (e, t, n) {
        var r = this;

        function i(e) {
          r.updateStatusBar("upload-image", e), setTimeout(function () {
            r.updateStatusBar("upload-image", r.options.imageTexts.sbInit);
          }, 1e4), n && "function" == typeof n && n(e), r.options.errorCallback(e);
        }

        function o(t) {
          var n = r.options.imageTexts.sizeUnits.split(",");
          return t.replace("#image_name#", e.name).replace("#image_size#", q(e.size, n)).replace("#image_max_size#", q(r.options.imageMaxSize, n));
        }

        if (t = t || function (e) {
          O(r, e);
        }, e.size > this.options.imageMaxSize) i(o(this.options.errorMessages.fileTooLarge));else {
          var a = new FormData();
          a.append("image", e), r.options.imageCSRFToken && a.append("csrfmiddlewaretoken", r.options.imageCSRFToken);
          var s = new XMLHttpRequest();
          s.upload.onprogress = function (t) {
            if (t.lengthComputable) {
              var n = "" + Math.round(100 * t.loaded / t.total);
              r.updateStatusBar("upload-image", r.options.imageTexts.sbProgress.replace("#file_name#", e.name).replace("#progress#", n));
            }
          }, s.open("POST", this.options.imageUploadEndpoint), s.onload = function () {
            try {
              var e = JSON.parse(this.responseText);
            } catch (e) {
              return console.error("EasyMDE: The server did not return a valid json."), void i(o(r.options.errorMessages.importError));
            }

            200 === this.status && e && !e.error && e.data && e.data.filePath ? t(window.location.origin + "/" + e.data.filePath) : e.error && e.error in r.options.errorMessages ? i(o(r.options.errorMessages[e.error])) : e.error ? i(o(e.error)) : (console.error("EasyMDE: Received an unexpected response after uploading the image." + this.status + " (" + this.statusText + ")"), i(o(r.options.errorMessages.importError)));
          }, s.onerror = function (e) {
            console.error("EasyMDE: An unexpected error occurred when trying to upload the image." + e.target.status + " (" + e.target.statusText + ")"), i(r.options.errorMessages.importError);
          }, s.send(a);
        }
      }, ee.prototype.uploadImageUsingCustomFunction = function (e, t) {
        var n = this;
        e(t, function (e) {
          O(n, e);
        }, function (e) {
          var r = function (e) {
            var r = n.options.imageTexts.sizeUnits.split(",");
            return e.replace("#image_name#", t.name).replace("#image_size#", q(t.size, r)).replace("#image_max_size#", q(n.options.imageMaxSize, r));
          }(e);

          n.updateStatusBar("upload-image", r), setTimeout(function () {
            n.updateStatusBar("upload-image", n.options.imageTexts.sbInit);
          }, 1e4), n.options.errorCallback(r);
        });
      }, ee.prototype.createSideBySide = function () {
        var e = this.codemirror,
            t = e.getWrapperElement(),
            n = t.nextSibling;

        if (!n || !/editor-preview-side/.test(n.className)) {
          if ((n = document.createElement("div")).className = "editor-preview-side", this.options.previewClass) if (Array.isArray(this.options.previewClass)) for (var r = 0; r < this.options.previewClass.length; r++) {
            n.className += " " + this.options.previewClass[r];
          } else "string" == typeof this.options.previewClass && (n.className += " " + this.options.previewClass);
          t.parentNode.insertBefore(n, t.nextSibling);
        }

        if (!1 === this.options.syncSideBySidePreviewScroll) return n;
        var i = !1,
            o = !1;
        return e.on("scroll", function (e) {
          if (i) i = !1;else {
            o = !0;
            var t = e.getScrollInfo().height - e.getScrollInfo().clientHeight,
                r = parseFloat(e.getScrollInfo().top) / t,
                a = (n.scrollHeight - n.clientHeight) * r;
            n.scrollTop = a;
          }
        }), n.onscroll = function () {
          if (o) o = !1;else {
            i = !0;
            var t = n.scrollHeight - n.clientHeight,
                r = parseFloat(n.scrollTop) / t,
                a = (e.getScrollInfo().height - e.getScrollInfo().clientHeight) * r;
            e.scrollTo(0, a);
          }
        }, n;
      }, ee.prototype.createToolbar = function (e) {
        if ((e = e || this.options.toolbar) && 0 !== e.length) {
          var t;

          for (t = 0; t < e.length; t++) {
            null != X[e[t]] && (e[t] = X[e[t]]);
          }

          var n = document.createElement("div");
          n.className = "editor-toolbar";
          var r = this,
              i = {};

          for (r.toolbar = e, t = 0; t < e.length; t++) {
            if (("guide" != e[t].name || !1 !== r.options.toolbarGuideIcon) && !(r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[t].name) || ("fullscreen" == e[t].name || "side-by-side" == e[t].name) && h())) {
              if ("|" === e[t]) {
                for (var o = !1, a = t + 1; a < e.length; a++) {
                  "|" === e[a] || r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[a].name) || (o = !0);
                }

                if (!o) continue;
              }

              !function (e) {
                var t;

                if (t = "|" === e ? p() : d(e, r.options.toolbarTips, r.options.shortcuts), e.action && ("function" == typeof e.action ? t.onclick = function (t) {
                  t.preventDefault(), e.action(r);
                } : "string" == typeof e.action && (t.onclick = function (t) {
                  t.preventDefault(), window.open(e.action, "_blank");
                })), i[e.name || e] = t, n.appendChild(t), "upload-image" === e.name) {
                  var o = document.createElement("input");
                  o.className = "imageInput", o.type = "file", o.multiple = !0, o.name = "image", o.accept = r.options.imageAccept, o.style.display = "none", o.style.opacity = 0, n.appendChild(o);
                }
              }(e[t]);
            }
          }

          r.toolbarElements = i;
          var s = this.codemirror;
          s.on("cursorActivity", function () {
            var e = m(s);

            for (var t in i) {
              !function (t) {
                var n = i[t];
                e[t] ? n.className += " active" : "fullscreen" != t && "side-by-side" != t && (n.className = n.className.replace(/\s*active\s*/g, ""));
              }(t);
            }
          });
          var l = s.getWrapperElement();
          return l.parentNode.insertBefore(n, l), n;
        }
      }, ee.prototype.createStatusbar = function (e) {
        e = e || this.options.status;
        var t = this.options,
            n = this.codemirror;

        if (e && 0 !== e.length) {
          var r,
              i,
              o,
              a = [];

          for (r = 0; r < e.length; r++) {
            if (i = void 0, o = void 0, "object" == _typeof(e[r])) a.push({
              className: e[r].className,
              defaultValue: e[r].defaultValue,
              onUpdate: e[r].onUpdate
            });else {
              var s = e[r];
              "words" === s ? (o = function o(e) {
                e.innerHTML = V(n.getValue());
              }, i = function i(e) {
                e.innerHTML = V(n.getValue());
              }) : "lines" === s ? (o = function o(e) {
                e.innerHTML = n.lineCount();
              }, i = function i(e) {
                e.innerHTML = n.lineCount();
              }) : "cursor" === s ? (o = function o(e) {
                e.innerHTML = "0:0";
              }, i = function i(e) {
                var t = n.getCursor();
                e.innerHTML = t.line + ":" + t.ch;
              }) : "autosave" === s ? o = function o(e) {
                null != t.autosave && !0 === t.autosave.enabled && e.setAttribute("id", "autosaved");
              } : "upload-image" === s && (o = function o(e) {
                e.innerHTML = t.imageTexts.sbInit;
              }), a.push({
                className: s,
                defaultValue: o,
                onUpdate: i
              });
            }
          }

          var l = document.createElement("div");

          for (l.className = "editor-statusbar", r = 0; r < a.length; r++) {
            var u = a[r],
                c = document.createElement("span");
            c.className = u.className, "function" == typeof u.defaultValue && u.defaultValue(c), "function" == typeof u.onUpdate && this.codemirror.on("update", function (e, t) {
              return function () {
                t.onUpdate(e);
              };
            }(c, u)), l.appendChild(c);
          }

          var h = this.codemirror.getWrapperElement();
          return h.parentNode.insertBefore(l, h.nextSibling), l;
        }
      }, ee.prototype.value = function (e) {
        var t = this.codemirror;
        if (void 0 === e) return t.getValue();

        if (t.getDoc().setValue(e), this.isPreviewActive()) {
          var n = t.getWrapperElement().lastChild;
          n.innerHTML = this.options.previewRender(e, n);
        }

        return this;
      }, ee.toggleBold = y, ee.toggleItalic = x, ee.toggleStrikethrough = b, ee.toggleBlockquote = k, ee.toggleHeadingSmaller = C, ee.toggleHeadingBigger = S, ee.toggleHeading1 = L, ee.toggleHeading2 = T, ee.toggleHeading3 = M, ee.toggleCodeBlock = w, ee.toggleUnorderedList = A, ee.toggleOrderedList = E, ee.cleanBlock = N, ee.drawLink = D, ee.drawImage = F, ee.drawTable = I, ee.drawHorizontalRule = B, ee.undo = R, ee.redo = z, ee.togglePreview = H, ee.toggleSideBySide = P, ee.toggleFullScreen = v, ee.prototype.toggleBold = function () {
        y(this);
      }, ee.prototype.toggleItalic = function () {
        x(this);
      }, ee.prototype.toggleStrikethrough = function () {
        b(this);
      }, ee.prototype.toggleBlockquote = function () {
        k(this);
      }, ee.prototype.toggleHeadingSmaller = function () {
        C(this);
      }, ee.prototype.toggleHeadingBigger = function () {
        S(this);
      }, ee.prototype.toggleHeading1 = function () {
        L(this);
      }, ee.prototype.toggleHeading2 = function () {
        T(this);
      }, ee.prototype.toggleHeading3 = function () {
        M(this);
      }, ee.prototype.toggleCodeBlock = function () {
        w(this);
      }, ee.prototype.toggleUnorderedList = function () {
        A(this);
      }, ee.prototype.toggleOrderedList = function () {
        E(this);
      }, ee.prototype.cleanBlock = function () {
        N(this);
      }, ee.prototype.drawLink = function () {
        D(this);
      }, ee.prototype.drawImage = function () {
        F(this);
      }, ee.prototype.drawTable = function () {
        I(this);
      }, ee.prototype.drawHorizontalRule = function () {
        B(this);
      }, ee.prototype.undo = function () {
        R(this);
      }, ee.prototype.redo = function () {
        z(this);
      }, ee.prototype.togglePreview = function () {
        H(this);
      }, ee.prototype.toggleSideBySide = function () {
        P(this);
      }, ee.prototype.toggleFullScreen = function () {
        v(this);
      }, ee.prototype.isPreviewActive = function () {
        var e = this.codemirror.getWrapperElement().lastChild;
        return /editor-preview-active/.test(e.className);
      }, ee.prototype.isSideBySideActive = function () {
        var e = this.codemirror.getWrapperElement().nextSibling;
        return /editor-preview-active-side/.test(e.className);
      }, ee.prototype.isFullscreenActive = function () {
        return this.codemirror.getOption("fullScreen");
      }, ee.prototype.getState = function () {
        return m(this.codemirror);
      }, ee.prototype.toTextArea = function () {
        var e = this.codemirror,
            t = e.getWrapperElement();
        t.parentNode && (this.gui.toolbar && t.parentNode.removeChild(this.gui.toolbar), this.gui.statusbar && t.parentNode.removeChild(this.gui.statusbar), this.gui.sideBySide && t.parentNode.removeChild(this.gui.sideBySide)), e.toTextArea(), this.autosaveTimeoutId && (clearTimeout(this.autosaveTimeoutId), this.autosaveTimeoutId = void 0, this.clearAutosavedValue());
      }, t.exports = ee;
    }, {
      "./codemirror/tablist": 28,
      codemirror: 11,
      "codemirror-spell-checker": 4,
      "codemirror/addon/display/fullscreen.js": 5,
      "codemirror/addon/display/placeholder.js": 6,
      "codemirror/addon/edit/continuelist.js": 7,
      "codemirror/addon/mode/overlay.js": 8,
      "codemirror/addon/search/searchcursor.js": 9,
      "codemirror/addon/selection/mark-selection.js": 10,
      "codemirror/mode/gfm/gfm.js": 12,
      "codemirror/mode/markdown/markdown.js": 13,
      "codemirror/mode/xml/xml.js": 15,
      marked: 25
    }]
  }, {}, [29])(29);
});