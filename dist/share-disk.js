import * as i from "react";
import G1, { forwardRef as Oe, createElement as u1, useState as Y, useMemo as K1, useCallback as Ie, useEffect as Ae } from "react";
import { Group as V, TextInput as Fe, ActionIcon as d1, Table as M, Checkbox as z1, Box as p1, Text as X1, Anchor as h1, Breadcrumbs as Ze, Menu as X, Button as W1, Modal as De } from "@mantine/core";
import Be from "axios";
var Q = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $1;
function ze() {
  if ($1) return $;
  $1 = 1;
  var r = G1, f = Symbol.for("react.element"), y = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(E, m, l) {
    var g, b = {}, S = null, L = null;
    l !== void 0 && (S = "" + l), m.key !== void 0 && (S = "" + m.key), m.ref !== void 0 && (L = m.ref);
    for (g in m) p.call(m, g) && !C.hasOwnProperty(g) && (b[g] = m[g]);
    if (E && E.defaultProps) for (g in m = E.defaultProps, m) b[g] === void 0 && (b[g] = m[g]);
    return { $$typeof: f, type: E, key: S, ref: L, props: b, _owner: c.current };
  }
  return $.Fragment = y, $.jsx = v, $.jsxs = v, $;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N1;
function We() {
  return N1 || (N1 = 1, process.env.NODE_ENV !== "production" && function() {
    var r = G1, f = Symbol.for("react.element"), y = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), E = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), A = Symbol.iterator, j = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = A && e[A] || e[j];
      return typeof t == "function" ? t : null;
    }
    var P = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        e1("error", e, n);
      }
    }
    function e1(e, t, n) {
      {
        var o = P.ReactDebugCurrentFrame, d = o.getStackAddendum();
        d !== "" && (t += "%s", n = n.concat([d]));
        var h = n.map(function(u) {
          return String(u);
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var te = !1, re = !1, ne = !1, ie = !1, ae = !1, g1;
    g1 = Symbol.for("react.module.reference");
    function oe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === C || ae || e === c || e === l || e === g || ie || e === L || te || re || ne || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === b || e.$$typeof === v || e.$$typeof === E || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === g1 || e.getModuleId !== void 0));
    }
    function le(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var d = t.displayName || t.name || "";
      return d !== "" ? n + "(" + d + ")" : n;
    }
    function y1(e) {
      return e.displayName || "Context";
    }
    function H(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case y:
          return "Portal";
        case C:
          return "Profiler";
        case c:
          return "StrictMode";
        case l:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var t = e;
            return y1(t) + ".Consumer";
          case v:
            var n = e;
            return y1(n._context) + ".Provider";
          case m:
            return le(e, e.render, "ForwardRef");
          case b:
            var o = e.displayName || null;
            return o !== null ? o : H(e.type) || "Memo";
          case S: {
            var d = e, h = d._payload, u = d._init;
            try {
              return H(u(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, B = 0, w1, x1, T1, E1, b1, R1, _1;
    function j1() {
    }
    j1.__reactDisabledLog = !0;
    function se() {
      {
        if (B === 0) {
          w1 = console.log, x1 = console.info, T1 = console.warn, E1 = console.error, b1 = console.group, R1 = console.groupCollapsed, _1 = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: j1,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        B++;
      }
    }
    function ce() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: w1
            }),
            info: O({}, e, {
              value: x1
            }),
            warn: O({}, e, {
              value: T1
            }),
            error: O({}, e, {
              value: E1
            }),
            group: O({}, e, {
              value: b1
            }),
            groupCollapsed: O({}, e, {
              value: R1
            }),
            groupEnd: O({}, e, {
              value: _1
            })
          });
        }
        B < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var t1 = P.ReactCurrentDispatcher, r1;
    function q(e, t, n) {
      {
        if (r1 === void 0)
          try {
            throw Error();
          } catch (d) {
            var o = d.stack.trim().match(/\n( *(at )?)/);
            r1 = o && o[1] || "";
          }
        return `
` + r1 + e;
      }
    }
    var n1 = !1, J;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ue();
    }
    function L1(e, t) {
      if (!e || n1)
        return "";
      {
        var n = J.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      n1 = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = t1.current, t1.current = null, se();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (_) {
              o = _;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (_) {
              o = _;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            o = _;
          }
          e();
        }
      } catch (_) {
        if (_ && o && typeof _.stack == "string") {
          for (var s = _.stack.split(`
`), R = o.stack.split(`
`), w = s.length - 1, x = R.length - 1; w >= 1 && x >= 0 && s[w] !== R[x]; )
            x--;
          for (; w >= 1 && x >= 0; w--, x--)
            if (s[w] !== R[x]) {
              if (w !== 1 || x !== 1)
                do
                  if (w--, x--, x < 0 || s[w] !== R[x]) {
                    var k = `
` + s[w].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, k), k;
                  }
                while (w >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        n1 = !1, t1.current = h, ce(), Error.prepareStackTrace = d;
      }
      var D = e ? e.displayName || e.name : "", I = D ? q(D) : "";
      return typeof e == "function" && J.set(e, I), I;
    }
    function fe(e, t, n) {
      return L1(e, !1);
    }
    function de(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function G(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return L1(e, de(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case l:
          return q("Suspense");
        case g:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return fe(e.render);
          case b:
            return G(e.type, t, n);
          case S: {
            var o = e, d = o._payload, h = o._init;
            try {
              return G(h(d), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, k1 = {}, M1 = P.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var t = e._owner, n = G(e.type, e._source, t ? t.type : null);
        M1.setExtraStackFrame(n);
      } else
        M1.setExtraStackFrame(null);
    }
    function pe(e, t, n, o, d) {
      {
        var h = Function.call.bind(z);
        for (var u in e)
          if (h(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var R = Error((o || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              s = e[u](t, u, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              s = w;
            }
            s && !(s instanceof Error) && (K(d), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, u, typeof s), K(null)), s instanceof Error && !(s.message in k1) && (k1[s.message] = !0, K(d), T("Failed %s type: %s", n, s.message), K(null));
          }
      }
    }
    var he = Array.isArray;
    function i1(e) {
      return he(e);
    }
    function Ce(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function me(e) {
      try {
        return S1(e), !1;
      } catch {
        return !0;
      }
    }
    function S1(e) {
      return "" + e;
    }
    function H1(e) {
      if (me(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ce(e)), S1(e);
    }
    var W = P.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, V1, P1, a1;
    a1 = {};
    function ge(e) {
      if (z.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ye(e) {
      if (z.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function we(e, t) {
      if (typeof e.ref == "string" && W.current && t && W.current.stateNode !== t) {
        var n = H(W.current.type);
        a1[n] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(W.current.type), e.ref), a1[n] = !0);
      }
    }
    function xe(e, t) {
      {
        var n = function() {
          V1 || (V1 = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function Te(e, t) {
      {
        var n = function() {
          P1 || (P1 = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var Ee = function(e, t, n, o, d, h, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: u,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function be(e, t, n, o, d) {
      {
        var h, u = {}, s = null, R = null;
        n !== void 0 && (H1(n), s = "" + n), ye(t) && (H1(t.key), s = "" + t.key), ge(t) && (R = t.ref, we(t, d));
        for (h in t)
          z.call(t, h) && !ve.hasOwnProperty(h) && (u[h] = t[h]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (h in w)
            u[h] === void 0 && (u[h] = w[h]);
        }
        if (s || R) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && xe(u, x), R && Te(u, x);
        }
        return Ee(e, s, R, d, o, W.current, u);
      }
    }
    var o1 = P.ReactCurrentOwner, O1 = P.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var t = e._owner, n = G(e.type, e._source, t ? t.type : null);
        O1.setExtraStackFrame(n);
      } else
        O1.setExtraStackFrame(null);
    }
    var l1;
    l1 = !1;
    function s1(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function I1() {
      {
        if (o1.current) {
          var e = H(o1.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Re(e) {
      return "";
    }
    var A1 = {};
    function _e(e) {
      {
        var t = I1();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function F1(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = _e(t);
        if (A1[n])
          return;
        A1[n] = !0;
        var o = "";
        e && e._owner && e._owner !== o1.current && (o = " It was passed a child from " + H(e._owner.type) + "."), Z(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), Z(null);
      }
    }
    function Z1(e, t) {
      {
        if (typeof e != "object")
          return;
        if (i1(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            s1(o) && F1(o, t);
          }
        else if (s1(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = F(e);
          if (typeof d == "function" && d !== e.entries)
            for (var h = d.call(e), u; !(u = h.next()).done; )
              s1(u.value) && F1(u.value, t);
        }
      }
    }
    function je(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === b))
          n = t.propTypes;
        else
          return;
        if (n) {
          var o = H(t);
          pe(n, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !l1) {
          l1 = !0;
          var d = H(t);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Le(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var o = t[n];
          if (o !== "children" && o !== "key") {
            Z(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    var D1 = {};
    function B1(e, t, n, o, d, h) {
      {
        var u = oe(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = Re();
          R ? s += R : s += I1();
          var w;
          e === null ? w = "null" : i1(e) ? w = "array" : e !== void 0 && e.$$typeof === f ? (w = "<" + (H(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, s);
        }
        var x = be(e, t, n, d, h);
        if (x == null)
          return x;
        if (u) {
          var k = t.children;
          if (k !== void 0)
            if (o)
              if (i1(k)) {
                for (var D = 0; D < k.length; D++)
                  Z1(k[D], e);
                Object.freeze && Object.freeze(k);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Z1(k, e);
        }
        if (z.call(t, "key")) {
          var I = H(e), _ = Object.keys(t).filter(function(Pe) {
            return Pe !== "key";
          }), c1 = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!D1[I + c1]) {
            var Ve = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, c1, I, Ve, I), D1[I + c1] = !0;
          }
        }
        return e === p ? Le(x) : je(x), x;
      }
    }
    function ke(e, t, n) {
      return B1(e, t, n, !0);
    }
    function Me(e, t, n) {
      return B1(e, t, n, !1);
    }
    var Se = Me, He = ke;
    N.Fragment = p, N.jsx = Se, N.jsxs = He;
  }()), N;
}
var Y1;
function $e() {
  return Y1 || (Y1 = 1, process.env.NODE_ENV === "production" ? Q.exports = ze() : Q.exports = We()), Q.exports;
}
var a = $e();
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ne = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = (r, f, y, p) => {
  const c = Oe(
    ({ color: C = "currentColor", size: v = 24, stroke: E = 2, title: m, className: l, children: g, ...b }, S) => u1(
      "svg",
      {
        ref: S,
        ...Ne[r],
        width: v,
        height: v,
        className: ["tabler-icon", `tabler-icon-${f}`, l].join(" "),
        strokeWidth: E,
        stroke: C,
        ...b
      },
      [
        m && u1("title", { key: "svg-title" }, m),
        ...p.map(([L, A]) => u1(L, A)),
        ...Array.isArray(g) ? g : [g]
      ]
    )
  );
  return c.displayName = `${y}`, c;
};
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ye = U("outline", "chevron-right", "IconChevronRight", [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ue = U("outline", "folder", "IconFolder", [["path", { d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qe = U("outline", "info-circle", "IconInfoCircle", [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 9h.01", key: "svg-1" }], ["path", { d: "M11 12h1v4h1", key: "svg-2" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Je = U("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var C1 = U("outline", "x", "IconX", [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]]);
const Ge = (r) => /* @__PURE__ */ i.createElement("svg", { width: 110, height: 32, viewBox: "0 0 110 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("g", { clipPath: "url(#clip0_939_11669)" }, /* @__PURE__ */ i.createElement("path", { d: "M23.6591 16.0001C23.6591 20.0461 20.3792 23.326 16.3333 23.326C12.2873 23.326 9.00745 20.0461 9.00745 16.0001C9.00745 11.9542 12.2873 8.67432 16.3333 8.67432C20.3792 8.67432 23.6591 11.9542 23.6591 16.0001ZM11.2466 16.0001C11.2466 18.8094 13.524 21.0868 16.3333 21.0868C19.1426 21.0868 21.42 18.8094 21.42 16.0001C21.42 13.1908 19.1426 10.9134 16.3333 10.9134C13.524 10.9134 11.2466 13.1908 11.2466 16.0001Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M31.9767 12.6405C32.5896 15.4944 32.4101 18.4615 31.4577 21.2207C30.5053 23.9799 28.8162 26.4259 26.5734 28.294L20.3777 20.8556C21.2635 20.1178 21.9306 19.1517 22.3068 18.0619C22.683 16.9722 22.7539 15.8003 22.5118 14.6732L31.9767 12.6405Z", fill: "#DA77F2" }), /* @__PURE__ */ i.createElement("path", { d: "M27.6471 4.68629C29.8712 6.91035 31.3904 9.74059 32.0149 12.8233L22.5269 14.7453C22.2802 13.5278 21.6802 12.41 20.8018 11.5316L27.6471 4.68629Z", fill: "#FFA94D" }), /* @__PURE__ */ i.createElement("path", { d: "M16.0443 0.00261191C18.2906 -0.0379809 20.5202 0.394937 22.5881 1.27318C24.6559 2.15143 26.5157 3.45532 28.0462 5.09996L20.9594 11.695C20.3549 11.0454 19.6204 10.5305 18.8037 10.1836C17.987 9.83672 17.1064 9.66573 16.2192 9.68177L16.0443 0.00261191Z", fill: "#FCC419" }), /* @__PURE__ */ i.createElement("path", { d: "M25.8681 3.1513C26.8511 3.88076 27.7472 4.72063 28.5387 5.65441L21.1539 11.914C20.8413 11.5452 20.4874 11.2135 20.0992 10.9254L25.8681 3.1513Z", fill: "#3BC9DB" }), /* @__PURE__ */ i.createElement("path", { d: "M11.5115 31.2561C8.77789 30.3921 6.32664 28.8095 4.41409 26.6738C2.50155 24.5381 1.19797 21.9278 0.639682 19.1158L10.1351 17.2306C10.3556 18.3412 10.8704 19.3722 11.6258 20.2157C12.3812 21.0592 13.3493 21.6842 14.429 22.0255L11.5115 31.2561Z", fill: "#51CF66" }), /* @__PURE__ */ i.createElement("path", { d: "M2.42209 8.09582C3.81747 5.63996 5.83811 3.59727 8.27867 2.17532C10.7192 0.753373 13.4927 0.00284454 16.3173 8.06746e-06L16.327 9.68074C15.2115 9.68186 14.1161 9.97828 13.1521 10.5399C12.1882 11.1015 11.3902 11.9083 10.8391 12.8782L2.42209 8.09582Z", fill: "#FFD43B" }), /* @__PURE__ */ i.createElement("path", { d: "M27.6471 27.3137C26.1614 28.7994 24.3975 29.978 22.4563 30.7821C20.5151 31.5861 18.4345 32 16.3334 32L16.3334 22.3193C17.1632 22.3193 17.985 22.1558 18.7517 21.8382C19.5184 21.5207 20.215 21.0552 20.8018 20.4684L27.6471 27.3137Z", fill: "#339AF0" }), /* @__PURE__ */ i.createElement("path", { d: "M29.8511 24.5599C29.1648 25.6437 28.3506 26.6411 27.426 27.5305L20.7145 20.554C21.0796 20.2028 21.4012 19.8088 21.6723 19.3808L29.8511 24.5599Z", fill: "#BE4BDB" }), /* @__PURE__ */ i.createElement("path", { d: "M0.875906 20.1312C0.271357 17.8692 0.170632 15.502 0.580841 13.1968C0.991051 10.8916 1.9022 8.70457 3.24997 6.78997L11.166 12.3625C10.6337 13.1186 10.2739 13.9824 10.1119 14.8929C9.94984 15.8033 9.98962 16.7382 10.2284 17.6316L0.875906 20.1312Z", fill: "#FF922B" }), /* @__PURE__ */ i.createElement("path", { d: "M0.878561 11.8589C1.56739 9.28815 2.88661 6.92984 4.71676 4.99754L11.7454 11.6545C11.0225 12.4177 10.5015 13.3491 10.2294 14.3645L0.878561 11.8589Z", fill: "#FFA94D" }), /* @__PURE__ */ i.createElement("path", { d: "M16.3334 32C14.3354 32 12.3551 31.6258 10.4949 30.8967L14.0274 21.8835C14.7621 22.1715 15.5443 22.3193 16.3334 22.3193L16.3334 32Z", fill: "#22B8CF" }), /* @__PURE__ */ i.createElement("path", { d: "M51.1469 21.9415L55.1469 12.1282C55.1877 12.0875 55.1469 12.0128 55.0722 12.0128H51.5001C51.4729 12.0128 51.448 11.9992 51.4254 11.9721L50.1962 9.99582C50.1554 9.95507 50.1962 9.88037 50.2709 9.88037H57.5714C57.6121 9.88037 57.6461 9.92112 57.6461 9.96186V11.5035L53.5714 22.0637C53.5714 22.1045 53.5306 22.1045 53.4967 22.1045H51.2692C51.1537 22.0637 51.113 22.023 51.1537 21.9483L51.1469 21.9415Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M56.9734 17.9075L57.6321 16.0332C57.6321 15.9924 57.6661 15.9924 57.7 15.9924H60.9598C60.9937 15.9924 61.0277 16.0332 61.0277 16.0739V17.9483C61.0277 17.989 60.9937 18.0298 60.9598 18.0298H57.0005C56.9666 17.989 56.9326 17.9483 56.9666 17.9075H56.9734Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M50.1687 13.6358C50.1687 14.9397 49.7544 15.9313 48.8784 16.6443C48.0023 17.3167 46.7935 17.6698 45.2111 17.6698H44.0431V22.0976H41.3334V9.87354H45.4149C46.9565 9.87354 48.1246 10.1927 48.9531 10.8243C49.7476 11.4559 50.1619 12.4066 50.1619 13.6358H50.1687ZM44.0498 15.5713H44.9259C45.7612 15.5713 46.386 15.4151 46.8003 15.0959C47.2145 14.7768 47.4251 14.3421 47.4251 13.7513C47.4251 13.1605 47.2553 12.7258 46.9225 12.4066C46.5897 12.1282 46.0465 11.972 45.2994 11.972H44.0498V15.5713Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M72.2269 9.87329V19.9378H73.8568V24.2977H71.3576V22.0906H63.6972V24.2977H61.198V19.9378H62.142C62.4612 19.2994 62.7668 18.6339 63.0588 17.9208C63.3576 17.2145 63.6292 16.4539 63.8873 15.639C64.1454 14.8241 64.3763 13.9412 64.58 12.9904C64.7837 12.0397 64.9603 11.0006 65.0961 9.87329H72.2201H72.2269ZM69.6462 12.0329H67.1607C67.0792 12.6237 66.9637 13.2553 66.8211 13.9208C66.6785 14.5932 66.5019 15.2723 66.305 15.965C66.108 16.6577 65.8839 17.3436 65.6462 18.0159C65.4017 18.6882 65.1437 19.3334 64.872 19.9378H69.6462V12.0261V12.0329Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M75.4119 9.87329H77.7413V15.7748C77.7413 16.0668 77.7413 16.386 77.7277 16.7392C77.7209 17.0923 77.7074 17.4319 77.6938 17.7714C77.6802 18.111 77.6666 18.403 77.653 18.6543C77.6394 18.9055 77.6327 19.0753 77.6191 19.1568H77.6666L83.3101 9.87329H86.4136V22.0974H84.1046V16.2298C84.1046 15.9174 84.1046 15.5779 84.125 15.2112C84.1454 14.8444 84.1522 14.4845 84.1726 14.1381C84.1929 13.7918 84.2065 13.493 84.2269 13.2417C84.2405 12.9904 84.2541 12.8207 84.2608 12.7324H84.1929L78.5223 22.0974H75.4052V9.87329H75.4119Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M94.2031 11.8564C93.7074 11.8564 93.266 11.9515 92.8857 12.1416C92.5053 12.3318 92.1862 12.6102 91.9213 12.977C91.6565 13.3437 91.4663 13.7783 91.3305 14.2877C91.1947 14.8038 91.1335 15.3742 91.1335 16.0194C91.1335 16.8819 91.2422 17.6221 91.4527 18.2333C91.67 18.8445 92.0028 19.3063 92.451 19.6323C92.8992 19.9515 93.4833 20.1145 94.1964 20.1145C94.6921 20.1145 95.1879 20.0602 95.6904 19.9447C96.1862 19.836 96.7295 19.6731 97.3135 19.4693V21.6425C96.7702 21.8666 96.2405 22.0228 95.7176 22.1247C95.1947 22.2197 94.6038 22.2673 93.9519 22.2673C92.6887 22.2673 91.6564 22.0092 90.8483 21.4863C90.0401 20.9634 89.4357 20.2367 89.0486 19.2927C88.6548 18.3556 88.4646 17.2554 88.4646 16.0058C88.4646 15.0822 88.5868 14.2333 88.8381 13.4659C89.0894 12.6985 89.4561 12.033 89.9383 11.4693C90.4205 10.9056 91.0249 10.471 91.7379 10.1654C92.451 9.85981 93.2728 9.70361 94.1964 9.70361C94.8008 9.70361 95.412 9.77832 96.0232 9.93451C96.6344 10.0907 97.2184 10.3012 97.7753 10.5661L96.94 12.6714C96.485 12.454 96.0232 12.2639 95.5614 12.1009C95.0996 11.9379 94.6446 11.8564 94.1964 11.8564H94.2031Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M109.429 22.0974H106.488L102.06 15.9039V22.0974H99.4662V9.87329H102.06V15.7952L106.441 9.87329H109.198L104.743 15.7409L109.436 22.0974H109.429Z", fill: "#333333" })), /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "clip0_939_11669" }, /* @__PURE__ */ i.createElement("rect", { width: 109.436, height: 32, fill: "white" }))));
function Ke({ onSearch: r, onClose: f }) {
  const [y, p] = Y("");
  return /* @__PURE__ */ a.jsxs(V, { gap: 10, h: 64, px: "lg", styles: { root: { flexShrink: 0 } }, children: [
    /* @__PURE__ */ a.jsx(V, { w: 128, children: /* @__PURE__ */ a.jsx(Ge, {}) }),
    /* @__PURE__ */ a.jsx(
      Fe,
      {
        variant: "filled",
        size: "md",
        w: 480,
        placeholder: "Поиск",
        value: y,
        leftSection: /* @__PURE__ */ a.jsx(Je, { stroke: 1.2 }),
        rightSection: !!y && /* @__PURE__ */ a.jsx(
          d1,
          {
            variant: "transparent",
            color: "gray",
            onClick: () => {
              p(""), r("");
            },
            children: /* @__PURE__ */ a.jsx(C1, { stroke: 1.2 })
          }
        ),
        onChange: (c) => p(c.currentTarget.value),
        onKeyDown: (c) => c.key === "Enter" && r(y.trim())
      }
    ),
    /* @__PURE__ */ a.jsx(
      d1,
      {
        variant: "subtle",
        color: "gray",
        ml: "auto",
        size: "lg",
        onClick: f,
        children: /* @__PURE__ */ a.jsx(C1, { size: 25, stroke: 1.2 })
      }
    )
  ] });
}
const Xe = (r, f = 2) => {
  if (!+r) return "0 Б";
  const y = 1024, p = f < 0 ? 0 : f, c = ["Б", "КБ", "МБ", "ГБ", "ТБ", "ПБ", "ЭБ", "ЗБ", "ЙБ"], C = Math.floor(Math.log(r) / Math.log(y));
  return `${parseFloat((r / Math.pow(y, C)).toFixed(p))} ${c[C]}`;
}, Qe = {
  pdf: {
    fileType: "pdf",
    documentType: "word",
    mimeType: "application/pdf",
    iconType: "pdf"
  },
  word: {
    fileType: "docx",
    documentType: "word",
    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    iconType: "doc"
  },
  word_old: {
    fileType: "doc",
    documentType: "word",
    mimeType: "application/msword",
    iconType: "doc"
  },
  rtf: {
    fileType: "rtf",
    documentType: "word",
    mimeType: "application/rtf",
    iconType: "doc"
  },
  odt: {
    fileType: "odt",
    documentType: "word",
    mimeType: "application/vnd.oasis.opendocument.text",
    iconType: "doc"
  },
  excel: {
    fileType: "xlsx",
    documentType: "cell",
    mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    iconType: "excel"
  },
  ods: {
    fileType: "ods",
    documentType: "cell",
    mimeType: "application/vnd.oasis.opendocument.spreadsheet",
    iconType: "excel"
  },
  excel_old: {
    fileType: "xls",
    documentType: "cell",
    mimeType: "application/vnd.ms-excel",
    iconType: "excel"
  },
  csv: {
    fileType: "csv",
    documentType: "cell",
    mimeType: "text/csv",
    iconType: "excel"
  },
  powerPoint: {
    fileType: "pptx",
    documentType: "slide",
    mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    iconType: "ppt"
  },
  powerPoint_old: {
    fileType: "ppt",
    documentType: "slide",
    mimeType: "application/vnd.ms-powerpoint",
    iconType: "ppt"
  },
  odp: {
    fileType: "odp",
    documentType: "slide",
    mimeType: "application/vnd.oasis.opendocument.presentation",
    iconType: "ppt"
  },
  draw: {
    fileType: "draw",
    mimeType: "application/x-draw",
    iconType: "draw"
  },
  text: {
    fileType: "txt",
    documentType: "text",
    mimeType: "text/plain",
    iconType: "doc"
  },
  imgGif: {
    mimeType: "image/gif",
    fileType: "png",
    iconType: "image"
  },
  imgPng: {
    mimeType: "image/png",
    fileType: "png",
    iconType: "image"
  },
  imgJpeg: {
    mimeType: "image/jpeg",
    fileType: "jpeg",
    iconType: "image"
  },
  imgJpg: {
    mimeType: "image/jpg",
    fileType: "jpg",
    iconType: "image"
  },
  imgSvg: {
    mimeType: "image/svg",
    iconType: "image"
  },
  imgSvg2: {
    mimeType: "image/svg+xml",
    iconType: "image"
  },
  webp: {
    mimeType: "image/webp",
    iconType: "image"
  },
  gif: {
    mimeType: "image/gif",
    iconType: "image"
  },
  videoMp4: {
    mimeType: "video/mp4",
    fileType: "mp4",
    iconType: "video"
  },
  webm: {
    mimeType: "video/webm",
    fileType: "webm",
    iconType: "video"
  },
  audio: {
    mimeType: "audio/mpeg",
    fileType: "audio",
    iconType: "audio"
  },
  zip: {
    mimeType: "application/zip",
    iconType: "zip"
  },
  archiveZip: {
    mimeType: "application/x-zip-compressed",
    iconType: "zip"
  },
  archiveRar: {
    mimeType: "application/x-rar-compressed",
    iconType: "zip"
  },
  archive7z: {
    mimeType: "application/x-compressed",
    iconType: "zip"
  }
}, e2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F03E3E" }), /* @__PURE__ */ i.createElement("path", { d: "M7.40272 9.3772C8.0638 9.3772 8.54619 9.51969 8.84987 9.80468C9.15354 10.0873 9.30538 10.4774 9.30538 10.975C9.30538 11.1993 9.27151 11.4142 9.20377 11.6197C9.13602 11.823 9.02506 12.004 8.87089 12.1629C8.71905 12.3217 8.51582 12.4479 8.2612 12.5413C8.00657 12.6324 7.69238 12.678 7.31862 12.678H6.85259V14.5H5.76636V9.3772H7.40272ZM7.34666 10.2672H6.85259V11.7879H7.21C7.41323 11.7879 7.5896 11.7611 7.7391 11.7073C7.88861 11.6536 8.00424 11.5695 8.086 11.4551C8.16776 11.3406 8.20864 11.1934 8.20864 11.0136C8.20864 10.7613 8.13856 10.5744 7.9984 10.4529C7.85824 10.3291 7.64099 10.2672 7.34666 10.2672Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M14.5228 11.8896C14.5228 12.4665 14.4119 12.9489 14.1899 13.3367C13.9704 13.7221 13.6515 14.013 13.2334 14.2092C12.8152 14.4031 12.3118 14.5 11.7231 14.5H10.2725V9.3772H11.8808C12.4181 9.3772 12.8841 9.47297 13.2789 9.66452C13.6737 9.85374 13.9797 10.1352 14.1969 10.509C14.4142 10.8804 14.5228 11.3406 14.5228 11.8896ZM13.3945 11.9176C13.3945 11.5392 13.3385 11.2285 13.2263 10.9855C13.1166 10.7402 12.953 10.5592 12.7358 10.4424C12.5209 10.3256 12.2546 10.2672 11.9369 10.2672H11.3587V13.603H11.8247C12.355 13.603 12.7486 13.4617 13.0056 13.179C13.2649 12.8964 13.3945 12.4759 13.3945 11.9176Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M16.6532 14.5H15.5845V9.3772H18.5209V10.2672H16.6532V11.5882H18.3912V12.4747H16.6532V14.5Z", fill: "white" })), t2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#228BE6" }), /* @__PURE__ */ i.createElement("path", { d: "M6 7.9999C6 7.66853 6.26863 7.3999 6.6 7.3999H17.4C17.7314 7.3999 18 7.66853 18 7.9999C18 8.33127 17.7314 8.5999 17.4 8.5999H6.6C6.26863 8.5999 6 8.33127 6 7.9999Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M6 11.9999C6 11.6685 6.26863 11.3999 6.6 11.3999H17.4C17.7314 11.3999 18 11.6685 18 11.9999C18 12.3313 17.7314 12.5999 17.4 12.5999H6.6C6.26863 12.5999 6 12.3313 6 11.9999Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M6.6 15.3999C6.26863 15.3999 6 15.6685 6 15.9999C6 16.3313 6.26863 16.5999 6.6 16.5999H14.4C14.7314 16.5999 15 16.3313 15 15.9999C15 15.6685 14.7314 15.3999 14.4 15.3999H6.6Z", fill: "white" })), r2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#37B24D" }), /* @__PURE__ */ i.createElement("path", { d: "M4 8.6C4 8.26863 4.26863 8 4.6 8H19.4C19.7314 8 20 8.26863 20 8.6C20 8.93137 19.7314 9.2 19.4 9.2H4.6C4.26863 9.2 4 8.93137 4 8.6Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M8.6 20C8.26863 20 8 19.7314 8 19.4L8 4.6C8 4.26863 8.26863 4 8.6 4C8.93137 4 9.2 4.26863 9.2 4.6L9.2 19.4C9.2 19.7314 8.93137 20 8.6 20Z", fill: "white" })), n2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F76707" }), /* @__PURE__ */ i.createElement("path", { d: "M19 12C19 10.8953 18.7386 9.80634 18.237 8.82207C17.7355 7.8378 17.0082 6.98619 16.1145 6.33688L12 12H19Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 17.8C15.2033 17.8 17.8 15.2033 17.8 12C17.8 8.79675 15.2033 6.2 12 6.2C8.79675 6.2 6.2 8.79675 6.2 12C6.2 15.2033 8.79675 17.8 12 17.8ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z", fill: "white" })), i2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#E64980" }), /* @__PURE__ */ i.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.79932 9.37741V5.83398H18.1565V14.1911H14.6127C14.6127 16.8496 12.4576 19.0048 9.79904 19.0048C7.14051 19.0048 4.98535 16.8496 4.98535 14.1911C4.98535 11.5326 7.14079 9.37741 9.79932 9.37741C9.79941 9.37741 9.79922 9.37741 9.79932 9.37741ZM10.9993 7.03398H16.9565V12.9911H14.462C14.0272 11.2969 12.6935 9.96308 10.9993 9.52826V7.03398ZM13.4127 14.1911C13.4127 16.1869 11.7948 17.8048 9.79904 17.8048C7.80325 17.8048 6.18535 16.1869 6.18535 14.1911C6.18535 12.1953 7.80325 10.5774 9.79904 10.5774C9.79913 10.5774 9.79894 10.5774 9.79904 10.5774L9.79932 14.1911H13.4127ZM13.2087 12.9911H10.9993V10.7815C12.0297 11.1442 12.8461 11.9607 13.2087 12.9911Z", fill: "white" })), a2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#4DABF7" }), /* @__PURE__ */ i.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.6215 10.4561C14.9164 10.1761 15.3807 10.1821 15.6683 10.4697L19.6683 14.4697C19.9612 14.7626 19.9612 15.2374 19.6683 15.5303C19.3754 15.8232 18.9005 15.8232 18.6076 15.5303L15.1244 12.0471L11.4422 15.5439C11.152 15.8194 10.6967 15.8186 10.4075 15.5421L9.00646 14.2027L5.6785 17.5304C5.38559 17.8232 4.91072 17.8232 4.61784 17.5303C4.32496 17.2374 4.32498 16.7625 4.61789 16.4696L8.46439 12.6235C8.75265 12.3353 9.21834 12.33 9.51298 12.6117L10.9275 13.9641L14.6215 10.4561Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M10.0001 8.5C10.0001 9.32843 9.32853 10 8.50011 10C7.67168 10 7.00011 9.32843 7.00011 8.5C7.00011 7.67157 7.67168 7 8.50011 7C9.32853 7 10.0001 7.67157 10.0001 8.5Z", fill: "white" })), o2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F59F00" }), /* @__PURE__ */ i.createElement("path", { d: "M8.7627 7.75794V16.2419C8.76267 16.3363 8.78782 16.4289 8.83554 16.5103C8.88327 16.5917 8.95184 16.6588 9.0342 16.7049C9.11655 16.7509 9.20969 16.7742 9.30402 16.7722C9.39834 16.7702 9.49044 16.7431 9.57079 16.6937L16.464 12.4517C16.5412 12.4043 16.605 12.3378 16.6492 12.2587C16.6934 12.1796 16.7167 12.0905 16.7167 11.9999C16.7167 11.9093 16.6934 11.8202 16.6492 11.7411C16.605 11.662 16.5412 11.5956 16.464 11.5482L9.57079 7.30617C9.49044 7.25673 9.39834 7.22963 9.30402 7.22765C9.20969 7.22568 9.11655 7.24892 9.0342 7.29496C8.95184 7.341 8.88327 7.40817 8.83554 7.48956C8.78782 7.57094 8.76267 7.66359 8.7627 7.75794Z", fill: "white" })), l2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#CC5DE8" }), /* @__PURE__ */ i.createElement("path", { d: "M15.0909 9V13.566C14.8235 13.4066 14.513 13.3153 14.1818 13.3153C13.1777 13.3153 12.3636 14.1543 12.3636 15.1892C12.3636 16.2241 13.1777 17.0631 14.1818 17.0631C15.186 17.0631 16 16.2241 16 15.1892V6.75018C16 6.23185 15.5018 5.86997 15.0281 6.0443L9.20994 8.18588C8.92049 8.29242 8.72727 8.57499 8.72727 8.89176V14.5029C8.45984 14.3435 8.14935 14.2522 7.81818 14.2522C6.81403 14.2522 6 15.0912 6 16.1261C6 17.161 6.81403 18 7.81818 18C8.82234 18 9.63636 17.161 9.63636 16.1261V11.0077L15.0909 9Z", fill: "white" })), s2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("path", { d: "M11.997 15.2043L5.45974 2.12734L18.5342 2.12734L11.997 15.2043Z", fill: "#FF6B6B" }), /* @__PURE__ */ i.createElement("path", { d: "M5 1C3.34315 1 2 2.34315 2 4V19.9973C2 21.6542 3.34315 22.9973 5 22.9973H19C20.6569 22.9973 22 21.6542 22 19.9973V4C22 2.34315 20.6569 1 19 1H16.5C16.5 1 12.8297 3.94874 12.4264 11.0247C12.1447 11.3173 11.8849 11.3025 11.5755 11.0247C11.0046 3.91723 7 1 7 1H5Z", fill: "#81A3C5" }), /* @__PURE__ */ i.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.1903 1L5.84118 1.34685C5.60611 1.58041 5.60487 1.9603 5.83842 2.19538C6.07197 2.43045 6.45187 2.43169 6.68694 2.19814L7.3283 1.56095C7.51223 1.7618 7.69814 1.97398 7.88384 2.19734L7.16905 2.74102C6.90531 2.94163 6.85413 3.31807 7.05474 3.58181C7.25535 3.84556 7.63178 3.89674 7.89553 3.69613L8.61805 3.14657C8.78504 3.37931 8.94941 3.62133 9.10947 3.8725L8.33964 4.29024C8.04839 4.44828 7.9404 4.81251 8.09845 5.10376C8.25649 5.39502 8.62072 5.503 8.91197 5.34496L9.71417 4.90965C9.83152 5.131 9.94463 5.35817 10.0526 5.59107L9.23216 5.91252C8.92362 6.03341 8.7715 6.38152 8.89239 6.69005C9.01327 6.99859 9.36138 7.15071 9.66992 7.02983L10.5093 6.70096C10.5966 6.94319 10.6778 7.19071 10.7521 7.44345L9.8859 7.65785C9.56423 7.73746 9.36801 8.06277 9.44763 8.38443C9.52725 8.70609 9.85255 8.90231 10.1742 8.8227L11.0363 8.60933C11.0575 8.71888 11.0774 8.82929 11.0959 8.94055C11.0327 9.0717 10.9973 9.21877 10.9973 9.3741V9.52462H10.2969C9.96553 9.52462 9.6969 9.79325 9.6969 10.1246C9.6969 10.456 9.96553 10.7246 10.2969 10.7246H10.9973V11.3318C9.83214 11.7436 8.99733 12.8549 8.99733 14.1611V17.1611C8.99733 17.7134 9.44505 18.1611 9.99733 18.1611H13.9973C14.5496 18.1611 14.9973 17.7134 14.9973 17.1611V14.1611C14.9973 12.8549 14.1625 11.7436 12.9973 11.3318V9.69337H13.6975C14.0288 9.69337 14.2975 9.42474 14.2975 9.09337C14.2975 8.762 14.0288 8.49337 13.6975 8.49337H12.9605C13.0027 8.23162 13.0531 7.97476 13.111 7.72285L13.9806 7.95352C14.3009 8.03847 14.6294 7.84769 14.7144 7.52739C14.7993 7.2071 14.6086 6.87858 14.2883 6.79362L13.4373 6.56791C13.5347 6.27813 13.6415 5.99597 13.7561 5.72156L14.5555 6.09989C14.855 6.24165 15.2127 6.11375 15.3545 5.81423C15.4962 5.51471 15.3683 5.15698 15.0688 5.01523L14.2684 4.63644C14.4131 4.36228 14.5647 4.09742 14.7213 3.84201L15.4632 4.33575C15.7391 4.51934 16.1115 4.44454 16.2951 4.16868C16.4787 3.89282 16.4039 3.52035 16.128 3.33676L15.3892 2.84503C15.5695 2.59738 15.7528 2.36102 15.9366 2.13615L16.6091 2.73915C16.8558 2.96036 17.2352 2.93969 17.4564 2.69297C17.6776 2.44625 17.6569 2.06691 17.4102 1.8457L16.7288 1.23476C16.8046 1.15443 16.8799 1.07617 16.9545 1H15.8574C15.8262 1.03476 15.7949 1.06984 15.7635 1.10526C14.9004 2.08038 13.9989 3.31537 13.2957 4.79138C13.2886 4.80402 13.2819 4.81701 13.2756 4.83035C13.2691 4.84389 13.2633 4.85756 13.258 4.87132C12.7642 5.92477 12.3724 7.0994 12.1671 8.38846C12.1119 8.37902 12.0552 8.3741 11.9973 8.3741C11.9329 8.3741 11.8699 8.3802 11.8088 8.39184C11.1802 5.23533 9.50654 2.77154 7.97906 1.08733C7.95245 1.058 7.92588 1.02889 7.89935 1H6.1903ZM11.9973 13.1955C11.5923 13.1955 11.2434 12.9546 11.0863 12.6083C10.5543 12.9211 10.1973 13.4994 10.1973 14.1611V16.9611H13.7973V14.1611C13.7973 13.4994 13.4403 12.9211 12.9084 12.6083C12.7512 12.9546 12.4024 13.1955 11.9973 13.1955Z", fill: "white" })), c2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("path", { d: "M2 4C2 2.34315 3.34315 1 5 1H14.7574C15.553 1 16.3161 1.31607 16.8787 1.87868L19 4L21.1213 6.12132C21.6839 6.68393 22 7.44699 22 8.24264V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4Z", fill: "#BACCDF" }), /* @__PURE__ */ i.createElement("path", { d: "M14.8999 1.00342V6.50003C14.8999 7.38368 15.6162 8.10003 16.4999 8.10003L21.9965 8.10003C21.9765 7.67959 21.8684 7.27119 21.6827 6.90003L16.4999 6.90003C16.279 6.90003 16.0999 6.72094 16.0999 6.50003L16.0999 1.31724C15.7287 1.1315 15.3203 1.02342 14.8999 1.00342Z", fill: "white" })), u2 = (r) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ i.createElement("path", { d: "M9 3C9.2198 2.99998 9.43348 3.07238 9.608 3.206L9.708 3.293L12.414 6H19C19.7652 5.99996 20.5015 6.29233 21.0583 6.81728C21.615 7.34224 21.9501 8.06011 21.995 8.824L22 9V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V6C1.99996 5.23479 2.29233 4.49849 2.81728 3.94174C3.34224 3.38499 4.06011 3.04989 4.824 3.005L5 3H9Z", fill: "#6C8196" })), f2 = {
  pdf: e2,
  doc: t2,
  excel: r2,
  ppt: n2,
  draw: i2,
  image: a2,
  video: o2,
  audio: l2,
  zip: s2
}, d2 = ({ mimeType: r }) => {
  var p;
  const f = ((p = Object.values(Qe).find((c) => c.mimeType === r)) == null ? void 0 : p.iconType) ?? "";
  if (!r) return /* @__PURE__ */ a.jsx(u2, { width: 20 });
  const y = f2[f];
  return y ? /* @__PURE__ */ a.jsx(y, { width: 20 }) : /* @__PURE__ */ a.jsx(c2, { width: 20 });
}, p2 = "_row_1xr8m_1", h2 = "_highlight_1xr8m_15", C2 = "_rowCheckbox_1xr8m_23", m2 = "_rowCheckboxVisible_1xr8m_31", f1 = {
  row: p2,
  highlight: h2,
  rowCheckbox: C2,
  rowCheckboxVisible: m2
};
function v2({
  rows: r,
  selectedRowIds: f,
  onOpenDir: y,
  onSelect: p
}) {
  const c = r.length === f.length, C = !c && !!f.length, v = (l) => f.includes(l), E = () => p(f.length ? [] : r.map((l) => l.Id)), m = (l) => p(
    f.includes(l) ? f.filter((g) => g !== l) : f.concat(l)
  );
  return /* @__PURE__ */ a.jsx(M.ScrollContainer, { minWidth: 760, h: "100%", children: /* @__PURE__ */ a.jsxs(M, { stickyHeader: !0, verticalSpacing: "xs", horizontalSpacing: "lg", children: [
    /* @__PURE__ */ a.jsx(M.Thead, { children: /* @__PURE__ */ a.jsxs(M.Tr, { children: [
      /* @__PURE__ */ a.jsx(M.Th, { c: "gray.6", fw: 500, fz: "xs", tt: "uppercase", children: /* @__PURE__ */ a.jsxs(V, { gap: "xs", children: [
        /* @__PURE__ */ a.jsx(
          z1,
          {
            size: "xs",
            checked: c,
            indeterminate: C,
            onChange: () => E()
          }
        ),
        " ",
        "Название"
      ] }) }),
      /* @__PURE__ */ a.jsx(M.Th, { c: "gray.6", fw: 500, fz: "xs", tt: "uppercase", children: "Изменен" }),
      /* @__PURE__ */ a.jsx(M.Th, { c: "gray.6", fw: 500, fz: "xs", tt: "uppercase", children: "Размер" })
    ] }) }),
    /* @__PURE__ */ a.jsx(M.Tbody, { children: r.map((l) => /* @__PURE__ */ a.jsxs(
      M.Tr,
      {
        className: f1.row + (v(l.Id) ? ` ${f1.highlight}` : ""),
        onMouseDown: "MimeType" in l ? () => m(l.Id) : void 0,
        children: [
          /* @__PURE__ */ a.jsx(M.Td, { fz: "sm", children: /* @__PURE__ */ a.jsxs(V, { gap: "xs", children: [
            /* @__PURE__ */ a.jsx(p1, { h: 16, w: 16, children: "MimeType" in l && /* @__PURE__ */ a.jsx(
              z1,
              {
                readOnly: !0,
                size: "xs",
                checked: v(l.Id),
                className: f1.rowCheckbox
              }
            ) }),
            /* @__PURE__ */ a.jsxs(V, { gap: 10, children: [
              /* @__PURE__ */ a.jsx(
                d2,
                {
                  mimeType: "MimeType" in l ? l.MimeType : ""
                }
              ),
              "MimeType" in l ? /* @__PURE__ */ a.jsx(X1, { truncate: !0, c: "gray.8", title: l.Name, maw: 340, children: l.Name }) : /* @__PURE__ */ a.jsx(
                h1,
                {
                  truncate: !0,
                  c: "gray.8",
                  title: l.Name,
                  fw: 500,
                  maw: 340,
                  onMouseDown: (g) => g.stopPropagation(),
                  onClick: () => y(l.Id),
                  children: l.Name
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ a.jsx(M.Td, { fz: "sm", c: "dimmed", children: /* @__PURE__ */ a.jsx("span", { title: new Date(l.Timestamp).toLocaleString("ru-Ru"), children: new Date(l.Timestamp).toLocaleString("ru-Ru") }) }),
          /* @__PURE__ */ a.jsx(M.Td, { fz: "sm", c: "dimmed", children: "Size" in l ? isNaN(+l.Size) ? null : Xe(+l.Size) : "-" })
        ]
      },
      l.Id
    )) })
  ] }) });
}
const U1 = 3;
function g2({
  directory: r,
  isSearch: f,
  onItemClick: y
}) {
  const p = K1(() => {
    if (f)
      return [
        {
          id: 0,
          title: "Результаты поиска"
        }
      ];
    if (!r) return [];
    let c = r.Parent;
    const C = [
      {
        title: r.Name,
        id: r.Id
      }
    ];
    for (; c; )
      C.unshift({
        title: c.Name,
        id: c.Id
      }), c = c.Parent;
    if (C.length > U1) {
      const v = C.splice(1, C.length - U1);
      C.splice(1, 0, { id: 0, title: "...", children: v });
    }
    return C;
  }, [r, f]);
  return /* @__PURE__ */ a.jsx(V, { h: 48, py: 8, px: "lg", styles: { root: { flexShrink: 0 } }, children: /* @__PURE__ */ a.jsx(
    Ze,
    {
      separatorMargin: 6,
      separator: /* @__PURE__ */ a.jsx(Ye, { stroke: 1.2, size: 17 }),
      children: p.map(
        (c, C) => c.children ? /* @__PURE__ */ a.jsxs(X, { children: [
          /* @__PURE__ */ a.jsx(X.Target, { children: /* @__PURE__ */ a.jsx(h1, { c: "dimmed", children: "..." }) }),
          /* @__PURE__ */ a.jsx(X.Dropdown, { children: c.children.map((v) => /* @__PURE__ */ a.jsx(
            X.Item,
            {
              c: "dark",
              fz: "sm",
              leftSection: /* @__PURE__ */ a.jsx(Ue, { stroke: 1.2, size: 18 }),
              children: v.title
            },
            v.id
          )) })
        ] }, C) : /* @__PURE__ */ a.jsx(
          h1,
          {
            truncate: !0,
            underline: c.id !== 0 ? "hover" : "never",
            c: C === p.length - 1 ? "dark" : "dimmed",
            fw: C === p.length - 1 ? 500 : 400,
            maw: 200,
            onClick: c.id === 0 ? void 0 : () => y(c.id),
            children: c.title
          },
          C
        )
      )
    }
  ) });
}
var Q1 = /* @__PURE__ */ ((r) => (r[r.Docs = 16] = "Docs", r))(Q1 || {}), m1 = /* @__PURE__ */ ((r) => (r[r.Id = 0] = "Id", r[r.Name = 1] = "Name", r[r.Type = 2] = "Type", r[r.Size = 3] = "Size", r[r.Author = 4] = "Author", r[r.Date = 5] = "Date", r[r.UpdateDate = 6] = "UpdateDate", r))(m1 || {}), v1 = /* @__PURE__ */ ((r) => (r[r.Asc = 0] = "Asc", r[r.Desc = 1] = "Desc", r))(v1 || {});
const ee = Be.create({
  baseURL: "https://drive-app.r7-office.ru/api"
}), q1 = (r) => ee.get("v1/DocumentDirectory/Get", { params: r }), y2 = (r) => ee.get("v1/DocumentDirectory/Search", {
  params: { ...r, field: "All" }
});
function w2({
  count: r,
  onClose: f,
  onAttachFiles: y,
  onCreateLink: p
}) {
  return /* @__PURE__ */ a.jsxs(
    V,
    {
      bg: "blue",
      c: "#fff",
      pos: "absolute",
      left: 0,
      bottom: 0,
      px: "md",
      h: 64,
      w: "100%",
      children: [
        /* @__PURE__ */ a.jsx(d1, { onClick: f, children: /* @__PURE__ */ a.jsx(C1, {}) }),
        /* @__PURE__ */ a.jsxs(X1, { children: [
          "Выбрано: ",
          r
        ] }),
        /* @__PURE__ */ a.jsxs(V, { gap: "xs", ml: "auto", children: [
          /* @__PURE__ */ a.jsx(W1, { variant: "outline", color: "#fff", onClick: () => y(), children: "Прикрепить файл" }),
          /* @__PURE__ */ a.jsx(W1, { variant: "default", onClick: () => p(), children: "Добавить ссылку" })
        ] }),
        /* @__PURE__ */ a.jsx(qe, {})
      ]
    }
  );
}
const J1 = {
  id: "",
  sortField: m1.Id,
  sortOrder: v1.Desc
};
function b2({
  opened: r,
  onClose: f,
  onAttachFiles: y,
  onCreateLink: p
}) {
  const [c, C] = Y(J1), [v, E] = Y(null), [m, l] = Y(null), [g, b] = Y([]), S = K1(() => m ? [...m.Directory.Items, ...m.Document.Items] : [...(v == null ? void 0 : v.Children) ?? [], ...(v == null ? void 0 : v.Documents) ?? []], [v, m]), L = Ie(
    async (j) => {
      const { data: F } = await q1(j);
      E(F[0]), l(null);
    },
    []
  ), A = async (j) => {
    if (!j)
      L(c);
    else {
      const { data: F } = await y2({ text: j });
      l(F), E(null);
    }
  };
  return Ae(() => {
    if (r)
      return (async () => {
        const T = {
          id: (await q1()).data.find(
            (e1) => e1.Type === Q1.Docs
          ).Id,
          sortField: m1.Id,
          sortOrder: v1.Desc
        };
        C(T), L(T);
      })(), () => {
        C(J1), E(null), l(null), b([]);
      };
  }, [r, L]), /* @__PURE__ */ a.jsx(
    De,
    {
      centered: !0,
      withCloseButton: !1,
      opened: r,
      size: 760,
      radius: "lg",
      padding: 0,
      onClose: () => {
      },
      children: /* @__PURE__ */ a.jsxs(p1, { h: 500, pos: "relative", children: [
        /* @__PURE__ */ a.jsx(Ke, { onSearch: A, onClose: f }),
        /* @__PURE__ */ a.jsx(
          g2,
          {
            directory: v,
            isSearch: !!m,
            onItemClick: (j) => L({ ...c, id: j })
          }
        ),
        /* @__PURE__ */ a.jsx(p1, { h: "calc(100% - 64px - 48px)", children: /* @__PURE__ */ a.jsx(
          v2,
          {
            rows: S,
            selectedRowIds: g,
            onOpenDir: (j) => L({ ...c, id: j }),
            onSelect: (j) => b(j)
          }
        ) }),
        !!g.length && /* @__PURE__ */ a.jsx(
          w2,
          {
            count: g.length,
            onClose: () => b([]),
            onAttachFiles: () => {
              y(), f();
            },
            onCreateLink: () => {
              p(), f();
            }
          }
        )
      ] })
    }
  );
}
export {
  b2 as ShareDisk
};
