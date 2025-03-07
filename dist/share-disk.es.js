import * as i from "react";
import le, { forwardRef as De, createElement as E1, useState as $, useMemo as l1, useCallback as Ze, useEffect as ze } from "react";
import { Group as D, TextInput as Be, ActionIcon as o1, Button as T1, Table as O, Checkbox as Q1, Box as R1, Text as j1, Anchor as _1, Breadcrumbs as Ae, Menu as a1, MantineProvider as We, Modal as $e, LoadingOverlay as Ne } from "@mantine/core";
import Ue, { isAxiosError as Ye } from "axios";
var i1 = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function Je() {
  if (ee) return q;
  ee = 1;
  var t = le, u = Symbol.for("react.element"), p = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, m = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(g, y, o) {
    var w, S = {}, H = null, _ = null;
    o !== void 0 && (H = "" + o), y.key !== void 0 && (H = "" + y.key), y.ref !== void 0 && (_ = y.ref);
    for (w in y) C.call(y, w) && !f.hasOwnProperty(w) && (S[w] = y[w]);
    if (g && g.defaultProps) for (w in y = g.defaultProps, y) S[w] === void 0 && (S[w] = y[w]);
    return { $$typeof: u, type: g, key: H, ref: _, props: S, _owner: m.current };
  }
  return q.Fragment = p, q.jsx = h, q.jsxs = h, q;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var te;
function qe() {
  return te || (te = 1, process.env.NODE_ENV !== "production" && function() {
    var t = le, u = Symbol.for("react.element"), p = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), g = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), Z = Symbol.iterator, c1 = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[c1];
      return typeof r == "function" ? r : null;
    }
    var V = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          n[l - 1] = arguments[l];
        X("error", e, n);
      }
    }
    function X(e, r, n) {
      {
        var l = V.ReactDebugCurrentFrame, d = l.getStackAddendum();
        d !== "" && (r += "%s", n = n.concat([d]));
        var v = n.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Q = !1, z = !1, u1 = !1, f1 = !1, d1 = !1, x;
    x = Symbol.for("react.module.reference");
    function R(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === f || d1 || e === m || e === o || e === w || f1 || e === _ || Q || z || u1 || typeof e == "object" && e !== null && (e.$$typeof === H || e.$$typeof === S || e.$$typeof === h || e.$$typeof === g || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === x || e.getModuleId !== void 0));
    }
    function A(e, r, n) {
      var l = e.displayName;
      if (l)
        return l;
      var d = r.displayName || r.name || "";
      return d !== "" ? n + "(" + d + ")" : n;
    }
    function I(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case p:
          return "Portal";
        case f:
          return "Profiler";
        case m:
          return "StrictMode";
        case o:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return I(r) + ".Consumer";
          case h:
            var n = e;
            return I(n._context) + ".Provider";
          case y:
            return A(e, e.render, "ForwardRef");
          case S:
            var l = e.displayName || null;
            return l !== null ? l : M(e.type) || "Memo";
          case H: {
            var d = e, v = d._payload, c = d._init;
            try {
              return M(c(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, B = 0, H1, L1, P1, O1, V1, I1, F1;
    function D1() {
    }
    D1.__reactDisabledLog = !0;
    function fe() {
      {
        if (B === 0) {
          H1 = console.log, L1 = console.info, P1 = console.warn, O1 = console.error, V1 = console.group, I1 = console.groupCollapsed, F1 = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: D1,
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
    function de() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: H1
            }),
            info: L({}, e, {
              value: L1
            }),
            warn: L({}, e, {
              value: P1
            }),
            error: L({}, e, {
              value: O1
            }),
            group: L({}, e, {
              value: V1
            }),
            groupCollapsed: L({}, e, {
              value: I1
            }),
            groupEnd: L({}, e, {
              value: F1
            })
          });
        }
        B < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var p1 = V.ReactCurrentDispatcher, h1;
    function e1(e, r, n) {
      {
        if (h1 === void 0)
          try {
            throw Error();
          } catch (d) {
            var l = d.stack.trim().match(/\n( *(at )?)/);
            h1 = l && l[1] || "";
          }
        return `
` + h1 + e;
      }
    }
    var C1 = !1, t1;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      t1 = new pe();
    }
    function Z1(e, r) {
      if (!e || C1)
        return "";
      {
        var n = t1.get(e);
        if (n !== void 0)
          return n;
      }
      var l;
      C1 = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = p1.current, p1.current = null, fe();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (k) {
              l = k;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (k) {
              l = k;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            l = k;
          }
          e();
        }
      } catch (k) {
        if (k && l && typeof k.stack == "string") {
          for (var s = k.stack.split(`
`), j = l.stack.split(`
`), b = s.length - 1, T = j.length - 1; b >= 1 && T >= 0 && s[b] !== j[T]; )
            T--;
          for (; b >= 1 && T >= 0; b--, T--)
            if (s[b] !== j[T]) {
              if (b !== 1 || T !== 1)
                do
                  if (b--, T--, T < 0 || s[b] !== j[T]) {
                    var P = `
` + s[b].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && t1.set(e, P), P;
                  }
                while (b >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        C1 = !1, p1.current = v, de(), Error.prepareStackTrace = d;
      }
      var U = e ? e.displayName || e.name : "", W = U ? e1(U) : "";
      return typeof e == "function" && t1.set(e, W), W;
    }
    function he(e, r, n) {
      return Z1(e, !1);
    }
    function Ce(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function r1(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Z1(e, Ce(e));
      if (typeof e == "string")
        return e1(e);
      switch (e) {
        case o:
          return e1("Suspense");
        case w:
          return e1("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return he(e.render);
          case S:
            return r1(e.type, r, n);
          case H: {
            var l = e, d = l._payload, v = l._init;
            try {
              return r1(v(d), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, z1 = {}, B1 = V.ReactDebugCurrentFrame;
    function n1(e) {
      if (e) {
        var r = e._owner, n = r1(e.type, e._source, r ? r.type : null);
        B1.setExtraStackFrame(n);
      } else
        B1.setExtraStackFrame(null);
    }
    function me(e, r, n, l, d) {
      {
        var v = Function.call.bind(Y);
        for (var c in e)
          if (v(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var j = Error((l || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              s = e[c](r, c, l, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              s = b;
            }
            s && !(s instanceof Error) && (n1(d), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", n, c, typeof s), n1(null)), s instanceof Error && !(s.message in z1) && (z1[s.message] = !0, n1(d), E("Failed %s type: %s", n, s.message), n1(null));
          }
      }
    }
    var ve = Array.isArray;
    function m1(e) {
      return ve(e);
    }
    function ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function we(e) {
      try {
        return A1(e), !1;
      } catch {
        return !0;
      }
    }
    function A1(e) {
      return "" + e;
    }
    function W1(e) {
      if (we(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(e)), A1(e);
    }
    var J = V.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $1, N1, v1;
    v1 = {};
    function xe(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ee(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function be(e, r) {
      if (typeof e.ref == "string" && J.current && r && J.current.stateNode !== r) {
        var n = M(J.current.type);
        v1[n] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(J.current.type), e.ref), v1[n] = !0);
      }
    }
    function Te(e, r) {
      {
        var n = function() {
          $1 || ($1 = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function Re(e, r) {
      {
        var n = function() {
          N1 || (N1 = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var je = function(e, r, n, l, d, v, c) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: c,
        // Record the component responsible for creating this element.
        _owner: v
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
        value: l
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function _e(e, r, n, l, d) {
      {
        var v, c = {}, s = null, j = null;
        n !== void 0 && (W1(n), s = "" + n), Ee(r) && (W1(r.key), s = "" + r.key), xe(r) && (j = r.ref, be(r, d));
        for (v in r)
          Y.call(r, v) && !ye.hasOwnProperty(v) && (c[v] = r[v]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (v in b)
            c[v] === void 0 && (c[v] = b[v]);
        }
        if (s || j) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && Te(c, T), j && Re(c, T);
        }
        return je(e, s, j, d, l, J.current, c);
      }
    }
    var g1 = V.ReactCurrentOwner, U1 = V.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, n = r1(e.type, e._source, r ? r.type : null);
        U1.setExtraStackFrame(n);
      } else
        U1.setExtraStackFrame(null);
    }
    var w1;
    w1 = !1;
    function y1(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function Y1() {
      {
        if (g1.current) {
          var e = M(g1.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Me(e) {
      return "";
    }
    var J1 = {};
    function ke(e) {
      {
        var r = Y1();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function q1(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ke(r);
        if (J1[n])
          return;
        J1[n] = !0;
        var l = "";
        e && e._owner && e._owner !== g1.current && (l = " It was passed a child from " + M(e._owner.type) + "."), N(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, l), N(null);
      }
    }
    function G1(e, r) {
      {
        if (typeof e != "object")
          return;
        if (m1(e))
          for (var n = 0; n < e.length; n++) {
            var l = e[n];
            y1(l) && q1(l, r);
          }
        else if (y1(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = F(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), c; !(c = v.next()).done; )
              y1(c.value) && q1(c.value, r);
        }
      }
    }
    function Se(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === S))
          n = r.propTypes;
        else
          return;
        if (n) {
          var l = M(r);
          me(n, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !w1) {
          w1 = !0;
          var d = M(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function He(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var l = r[n];
          if (l !== "children" && l !== "key") {
            N(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var K1 = {};
    function X1(e, r, n, l, d, v) {
      {
        var c = R(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = Me();
          j ? s += j : s += Y1();
          var b;
          e === null ? b = "null" : m1(e) ? b = "array" : e !== void 0 && e.$$typeof === u ? (b = "<" + (M(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, s);
        }
        var T = _e(e, r, n, d, v);
        if (T == null)
          return T;
        if (c) {
          var P = r.children;
          if (P !== void 0)
            if (l)
              if (m1(P)) {
                for (var U = 0; U < P.length; U++)
                  G1(P[U], e);
                Object.freeze && Object.freeze(P);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              G1(P, e);
        }
        if (Y.call(r, "key")) {
          var W = M(e), k = Object.keys(r).filter(function(Fe) {
            return Fe !== "key";
          }), x1 = k.length > 0 ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!K1[W + x1]) {
            var Ie = k.length > 0 ? "{" + k.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, x1, W, Ie, W), K1[W + x1] = !0;
          }
        }
        return e === C ? He(T) : Se(T), T;
      }
    }
    function Le(e, r, n) {
      return X1(e, r, n, !0);
    }
    function Pe(e, r, n) {
      return X1(e, r, n, !1);
    }
    var Oe = Pe, Ve = Le;
    G.Fragment = C, G.jsx = Oe, G.jsxs = Ve;
  }()), G;
}
var re;
function Ge() {
  return re || (re = 1, process.env.NODE_ENV === "production" ? i1.exports = Je() : i1.exports = qe()), i1.exports;
}
var a = Ge();
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ke = {
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
const K = (t, u, p, C) => {
  const m = De(
    ({ color: f = "currentColor", size: h = 24, stroke: g = 2, title: y, className: o, children: w, ...S }, H) => E1(
      "svg",
      {
        ref: H,
        ...Ke[t],
        width: h,
        height: h,
        className: ["tabler-icon", `tabler-icon-${u}`, o].join(" "),
        strokeWidth: g,
        stroke: f,
        ...S
      },
      [
        y && E1("title", { key: "svg-title" }, y),
        ...C.map(([_, Z]) => E1(_, Z)),
        ...Array.isArray(w) ? w : [w]
      ]
    )
  );
  return m.displayName = `${p}`, m;
};
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Xe = K("outline", "arrow-up", "IconArrowUp", [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M18 11l-6 -6", key: "svg-1" }], ["path", { d: "M6 11l6 -6", key: "svg-2" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qe = K("outline", "chevron-right", "IconChevronRight", [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var et = K("outline", "folder", "IconFolder", [["path", { d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tt = K("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var M1 = K("outline", "x", "IconX", [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]]);
const rt = (t) => /* @__PURE__ */ i.createElement("svg", { width: 110, height: 32, viewBox: "0 0 110 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("g", { clipPath: "url(#clip0_939_11669)" }, /* @__PURE__ */ i.createElement("path", { d: "M23.6591 16.0001C23.6591 20.0461 20.3792 23.326 16.3333 23.326C12.2873 23.326 9.00745 20.0461 9.00745 16.0001C9.00745 11.9542 12.2873 8.67432 16.3333 8.67432C20.3792 8.67432 23.6591 11.9542 23.6591 16.0001ZM11.2466 16.0001C11.2466 18.8094 13.524 21.0868 16.3333 21.0868C19.1426 21.0868 21.42 18.8094 21.42 16.0001C21.42 13.1908 19.1426 10.9134 16.3333 10.9134C13.524 10.9134 11.2466 13.1908 11.2466 16.0001Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M31.9767 12.6405C32.5896 15.4944 32.4101 18.4615 31.4577 21.2207C30.5053 23.9799 28.8162 26.4259 26.5734 28.294L20.3777 20.8556C21.2635 20.1178 21.9306 19.1517 22.3068 18.0619C22.683 16.9722 22.7539 15.8003 22.5118 14.6732L31.9767 12.6405Z", fill: "#DA77F2" }), /* @__PURE__ */ i.createElement("path", { d: "M27.6471 4.68629C29.8712 6.91035 31.3904 9.74059 32.0149 12.8233L22.5269 14.7453C22.2802 13.5278 21.6802 12.41 20.8018 11.5316L27.6471 4.68629Z", fill: "#FFA94D" }), /* @__PURE__ */ i.createElement("path", { d: "M16.0443 0.00261191C18.2906 -0.0379809 20.5202 0.394937 22.5881 1.27318C24.6559 2.15143 26.5157 3.45532 28.0462 5.09996L20.9594 11.695C20.3549 11.0454 19.6204 10.5305 18.8037 10.1836C17.987 9.83672 17.1064 9.66573 16.2192 9.68177L16.0443 0.00261191Z", fill: "#FCC419" }), /* @__PURE__ */ i.createElement("path", { d: "M25.8681 3.1513C26.8511 3.88076 27.7472 4.72063 28.5387 5.65441L21.1539 11.914C20.8413 11.5452 20.4874 11.2135 20.0992 10.9254L25.8681 3.1513Z", fill: "#3BC9DB" }), /* @__PURE__ */ i.createElement("path", { d: "M11.5115 31.2561C8.77789 30.3921 6.32664 28.8095 4.41409 26.6738C2.50155 24.5381 1.19797 21.9278 0.639682 19.1158L10.1351 17.2306C10.3556 18.3412 10.8704 19.3722 11.6258 20.2157C12.3812 21.0592 13.3493 21.6842 14.429 22.0255L11.5115 31.2561Z", fill: "#51CF66" }), /* @__PURE__ */ i.createElement("path", { d: "M2.42209 8.09582C3.81747 5.63996 5.83811 3.59727 8.27867 2.17532C10.7192 0.753373 13.4927 0.00284454 16.3173 8.06746e-06L16.327 9.68074C15.2115 9.68186 14.1161 9.97828 13.1521 10.5399C12.1882 11.1015 11.3902 11.9083 10.8391 12.8782L2.42209 8.09582Z", fill: "#FFD43B" }), /* @__PURE__ */ i.createElement("path", { d: "M27.6471 27.3137C26.1614 28.7994 24.3975 29.978 22.4563 30.7821C20.5151 31.5861 18.4345 32 16.3334 32L16.3334 22.3193C17.1632 22.3193 17.985 22.1558 18.7517 21.8382C19.5184 21.5207 20.215 21.0552 20.8018 20.4684L27.6471 27.3137Z", fill: "#339AF0" }), /* @__PURE__ */ i.createElement("path", { d: "M29.8511 24.5599C29.1648 25.6437 28.3506 26.6411 27.426 27.5305L20.7145 20.554C21.0796 20.2028 21.4012 19.8088 21.6723 19.3808L29.8511 24.5599Z", fill: "#BE4BDB" }), /* @__PURE__ */ i.createElement("path", { d: "M0.875906 20.1312C0.271357 17.8692 0.170632 15.502 0.580841 13.1968C0.991051 10.8916 1.9022 8.70457 3.24997 6.78997L11.166 12.3625C10.6337 13.1186 10.2739 13.9824 10.1119 14.8929C9.94984 15.8033 9.98962 16.7382 10.2284 17.6316L0.875906 20.1312Z", fill: "#FF922B" }), /* @__PURE__ */ i.createElement("path", { d: "M0.878561 11.8589C1.56739 9.28815 2.88661 6.92984 4.71676 4.99754L11.7454 11.6545C11.0225 12.4177 10.5015 13.3491 10.2294 14.3645L0.878561 11.8589Z", fill: "#FFA94D" }), /* @__PURE__ */ i.createElement("path", { d: "M16.3334 32C14.3354 32 12.3551 31.6258 10.4949 30.8967L14.0274 21.8835C14.7621 22.1715 15.5443 22.3193 16.3334 22.3193L16.3334 32Z", fill: "#22B8CF" }), /* @__PURE__ */ i.createElement("path", { d: "M51.1469 21.9415L55.1469 12.1282C55.1877 12.0875 55.1469 12.0128 55.0722 12.0128H51.5001C51.4729 12.0128 51.448 11.9992 51.4254 11.9721L50.1962 9.99582C50.1554 9.95507 50.1962 9.88037 50.2709 9.88037H57.5714C57.6121 9.88037 57.6461 9.92112 57.6461 9.96186V11.5035L53.5714 22.0637C53.5714 22.1045 53.5306 22.1045 53.4967 22.1045H51.2692C51.1537 22.0637 51.113 22.023 51.1537 21.9483L51.1469 21.9415Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M56.9734 17.9075L57.6321 16.0332C57.6321 15.9924 57.6661 15.9924 57.7 15.9924H60.9598C60.9937 15.9924 61.0277 16.0332 61.0277 16.0739V17.9483C61.0277 17.989 60.9937 18.0298 60.9598 18.0298H57.0005C56.9666 17.989 56.9326 17.9483 56.9666 17.9075H56.9734Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M50.1687 13.6358C50.1687 14.9397 49.7544 15.9313 48.8784 16.6443C48.0023 17.3167 46.7935 17.6698 45.2111 17.6698H44.0431V22.0976H41.3334V9.87354H45.4149C46.9565 9.87354 48.1246 10.1927 48.9531 10.8243C49.7476 11.4559 50.1619 12.4066 50.1619 13.6358H50.1687ZM44.0498 15.5713H44.9259C45.7612 15.5713 46.386 15.4151 46.8003 15.0959C47.2145 14.7768 47.4251 14.3421 47.4251 13.7513C47.4251 13.1605 47.2553 12.7258 46.9225 12.4066C46.5897 12.1282 46.0465 11.972 45.2994 11.972H44.0498V15.5713Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M72.2269 9.87329V19.9378H73.8568V24.2977H71.3576V22.0906H63.6972V24.2977H61.198V19.9378H62.142C62.4612 19.2994 62.7668 18.6339 63.0588 17.9208C63.3576 17.2145 63.6292 16.4539 63.8873 15.639C64.1454 14.8241 64.3763 13.9412 64.58 12.9904C64.7837 12.0397 64.9603 11.0006 65.0961 9.87329H72.2201H72.2269ZM69.6462 12.0329H67.1607C67.0792 12.6237 66.9637 13.2553 66.8211 13.9208C66.6785 14.5932 66.5019 15.2723 66.305 15.965C66.108 16.6577 65.8839 17.3436 65.6462 18.0159C65.4017 18.6882 65.1437 19.3334 64.872 19.9378H69.6462V12.0261V12.0329Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M75.4119 9.87329H77.7413V15.7748C77.7413 16.0668 77.7413 16.386 77.7277 16.7392C77.7209 17.0923 77.7074 17.4319 77.6938 17.7714C77.6802 18.111 77.6666 18.403 77.653 18.6543C77.6394 18.9055 77.6327 19.0753 77.6191 19.1568H77.6666L83.3101 9.87329H86.4136V22.0974H84.1046V16.2298C84.1046 15.9174 84.1046 15.5779 84.125 15.2112C84.1454 14.8444 84.1522 14.4845 84.1726 14.1381C84.1929 13.7918 84.2065 13.493 84.2269 13.2417C84.2405 12.9904 84.2541 12.8207 84.2608 12.7324H84.1929L78.5223 22.0974H75.4052V9.87329H75.4119Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M94.2031 11.8564C93.7074 11.8564 93.266 11.9515 92.8857 12.1416C92.5053 12.3318 92.1862 12.6102 91.9213 12.977C91.6565 13.3437 91.4663 13.7783 91.3305 14.2877C91.1947 14.8038 91.1335 15.3742 91.1335 16.0194C91.1335 16.8819 91.2422 17.6221 91.4527 18.2333C91.67 18.8445 92.0028 19.3063 92.451 19.6323C92.8992 19.9515 93.4833 20.1145 94.1964 20.1145C94.6921 20.1145 95.1879 20.0602 95.6904 19.9447C96.1862 19.836 96.7295 19.6731 97.3135 19.4693V21.6425C96.7702 21.8666 96.2405 22.0228 95.7176 22.1247C95.1947 22.2197 94.6038 22.2673 93.9519 22.2673C92.6887 22.2673 91.6564 22.0092 90.8483 21.4863C90.0401 20.9634 89.4357 20.2367 89.0486 19.2927C88.6548 18.3556 88.4646 17.2554 88.4646 16.0058C88.4646 15.0822 88.5868 14.2333 88.8381 13.4659C89.0894 12.6985 89.4561 12.033 89.9383 11.4693C90.4205 10.9056 91.0249 10.471 91.7379 10.1654C92.451 9.85981 93.2728 9.70361 94.1964 9.70361C94.8008 9.70361 95.412 9.77832 96.0232 9.93451C96.6344 10.0907 97.2184 10.3012 97.7753 10.5661L96.94 12.6714C96.485 12.454 96.0232 12.2639 95.5614 12.1009C95.0996 11.9379 94.6446 11.8564 94.1964 11.8564H94.2031Z", fill: "#333333" }), /* @__PURE__ */ i.createElement("path", { d: "M109.429 22.0974H106.488L102.06 15.9039V22.0974H99.4662V9.87329H102.06V15.7952L106.441 9.87329H109.198L104.743 15.7409L109.436 22.0974H109.429Z", fill: "#333333" })), /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "clip0_939_11669" }, /* @__PURE__ */ i.createElement("rect", { width: 109.436, height: 32, fill: "white" }))));
function nt({ onSearch: t, onClose: u }) {
  const [p, C] = $("");
  return /* @__PURE__ */ a.jsxs(D, { gap: 10, h: 64, px: "lg", styles: { root: { flexShrink: 0 } }, children: [
    /* @__PURE__ */ a.jsx(D, { w: 128, children: /* @__PURE__ */ a.jsx(rt, {}) }),
    /* @__PURE__ */ a.jsx(
      Be,
      {
        variant: "filled",
        size: "md",
        fz: 16,
        w: 480,
        placeholder: "Поиск",
        value: p,
        leftSection: /* @__PURE__ */ a.jsx(tt, { stroke: 1.2 }),
        rightSectionProps: { style: { width: 110 } },
        rightSection: !!p && /* @__PURE__ */ a.jsxs(D, { gap: "xs", children: [
          /* @__PURE__ */ a.jsx(
            o1,
            {
              variant: "transparent",
              color: "gray",
              onClick: () => {
                C(""), t("");
              },
              children: /* @__PURE__ */ a.jsx(M1, { stroke: 1.2, size: 22 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            T1,
            {
              variant: "default",
              size: "xs",
              bd: "none",
              fz: 12,
              onClick: () => t(p.trim()),
              children: "Найти"
            }
          )
        ] }),
        onChange: (m) => C(m.currentTarget.value),
        onKeyDown: (m) => m.key === "Enter" && t(p.trim())
      }
    ),
    /* @__PURE__ */ a.jsx(
      o1,
      {
        variant: "subtle",
        color: "gray",
        ml: "auto",
        size: "lg",
        onClick: u,
        children: /* @__PURE__ */ a.jsx(M1, { size: 25, stroke: 1.2 })
      }
    )
  ] });
}
const oe = (t, u = 2) => {
  if (!+t) return "0 Б";
  const p = 1024, C = u < 0 ? 0 : u, m = ["Б", "КБ", "МБ", "ГБ", "ТБ", "ПБ", "ЭБ", "ЗБ", "ЙБ"], f = Math.floor(Math.log(t) / Math.log(p));
  return `${parseFloat((t / Math.pow(p, f)).toFixed(C))} ${m[f]}`;
}, at = {
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
}, it = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F03E3E" }), /* @__PURE__ */ i.createElement("path", { d: "M7.40272 9.3772C8.0638 9.3772 8.54619 9.51969 8.84987 9.80468C9.15354 10.0873 9.30538 10.4774 9.30538 10.975C9.30538 11.1993 9.27151 11.4142 9.20377 11.6197C9.13602 11.823 9.02506 12.004 8.87089 12.1629C8.71905 12.3217 8.51582 12.4479 8.2612 12.5413C8.00657 12.6324 7.69238 12.678 7.31862 12.678H6.85259V14.5H5.76636V9.3772H7.40272ZM7.34666 10.2672H6.85259V11.7879H7.21C7.41323 11.7879 7.5896 11.7611 7.7391 11.7073C7.88861 11.6536 8.00424 11.5695 8.086 11.4551C8.16776 11.3406 8.20864 11.1934 8.20864 11.0136C8.20864 10.7613 8.13856 10.5744 7.9984 10.4529C7.85824 10.3291 7.64099 10.2672 7.34666 10.2672Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M14.5228 11.8896C14.5228 12.4665 14.4119 12.9489 14.1899 13.3367C13.9704 13.7221 13.6515 14.013 13.2334 14.2092C12.8152 14.4031 12.3118 14.5 11.7231 14.5H10.2725V9.3772H11.8808C12.4181 9.3772 12.8841 9.47297 13.2789 9.66452C13.6737 9.85374 13.9797 10.1352 14.1969 10.509C14.4142 10.8804 14.5228 11.3406 14.5228 11.8896ZM13.3945 11.9176C13.3945 11.5392 13.3385 11.2285 13.2263 10.9855C13.1166 10.7402 12.953 10.5592 12.7358 10.4424C12.5209 10.3256 12.2546 10.2672 11.9369 10.2672H11.3587V13.603H11.8247C12.355 13.603 12.7486 13.4617 13.0056 13.179C13.2649 12.8964 13.3945 12.4759 13.3945 11.9176Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M16.6532 14.5H15.5845V9.3772H18.5209V10.2672H16.6532V11.5882H18.3912V12.4747H16.6532V14.5Z", fill: "white" })), lt = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#228BE6" }), /* @__PURE__ */ i.createElement("path", { d: "M6 7.9999C6 7.66853 6.26863 7.3999 6.6 7.3999H17.4C17.7314 7.3999 18 7.66853 18 7.9999C18 8.33127 17.7314 8.5999 17.4 8.5999H6.6C6.26863 8.5999 6 8.33127 6 7.9999Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M6 11.9999C6 11.6685 6.26863 11.3999 6.6 11.3999H17.4C17.7314 11.3999 18 11.6685 18 11.9999C18 12.3313 17.7314 12.5999 17.4 12.5999H6.6C6.26863 12.5999 6 12.3313 6 11.9999Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M6.6 15.3999C6.26863 15.3999 6 15.6685 6 15.9999C6 16.3313 6.26863 16.5999 6.6 16.5999H14.4C14.7314 16.5999 15 16.3313 15 15.9999C15 15.6685 14.7314 15.3999 14.4 15.3999H6.6Z", fill: "white" })), ot = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#37B24D" }), /* @__PURE__ */ i.createElement("path", { d: "M4 8.6C4 8.26863 4.26863 8 4.6 8H19.4C19.7314 8 20 8.26863 20 8.6C20 8.93137 19.7314 9.2 19.4 9.2H4.6C4.26863 9.2 4 8.93137 4 8.6Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M8.6 20C8.26863 20 8 19.7314 8 19.4L8 4.6C8 4.26863 8.26863 4 8.6 4C8.93137 4 9.2 4.26863 9.2 4.6L9.2 19.4C9.2 19.7314 8.93137 20 8.6 20Z", fill: "white" })), st = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F76707" }), /* @__PURE__ */ i.createElement("path", { d: "M19 12C19 10.8953 18.7386 9.80634 18.237 8.82207C17.7355 7.8378 17.0082 6.98619 16.1145 6.33688L12 12H19Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 17.8C15.2033 17.8 17.8 15.2033 17.8 12C17.8 8.79675 15.2033 6.2 12 6.2C8.79675 6.2 6.2 8.79675 6.2 12C6.2 15.2033 8.79675 17.8 12 17.8ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z", fill: "white" })), ct = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#E64980" }), /* @__PURE__ */ i.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.79932 9.37741V5.83398H18.1565V14.1911H14.6127C14.6127 16.8496 12.4576 19.0048 9.79904 19.0048C7.14051 19.0048 4.98535 16.8496 4.98535 14.1911C4.98535 11.5326 7.14079 9.37741 9.79932 9.37741C9.79941 9.37741 9.79922 9.37741 9.79932 9.37741ZM10.9993 7.03398H16.9565V12.9911H14.462C14.0272 11.2969 12.6935 9.96308 10.9993 9.52826V7.03398ZM13.4127 14.1911C13.4127 16.1869 11.7948 17.8048 9.79904 17.8048C7.80325 17.8048 6.18535 16.1869 6.18535 14.1911C6.18535 12.1953 7.80325 10.5774 9.79904 10.5774C9.79913 10.5774 9.79894 10.5774 9.79904 10.5774L9.79932 14.1911H13.4127ZM13.2087 12.9911H10.9993V10.7815C12.0297 11.1442 12.8461 11.9607 13.2087 12.9911Z", fill: "white" })), ut = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#4DABF7" }), /* @__PURE__ */ i.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.6215 10.4561C14.9164 10.1761 15.3807 10.1821 15.6683 10.4697L19.6683 14.4697C19.9612 14.7626 19.9612 15.2374 19.6683 15.5303C19.3754 15.8232 18.9005 15.8232 18.6076 15.5303L15.1244 12.0471L11.4422 15.5439C11.152 15.8194 10.6967 15.8186 10.4075 15.5421L9.00646 14.2027L5.6785 17.5304C5.38559 17.8232 4.91072 17.8232 4.61784 17.5303C4.32496 17.2374 4.32498 16.7625 4.61789 16.4696L8.46439 12.6235C8.75265 12.3353 9.21834 12.33 9.51298 12.6117L10.9275 13.9641L14.6215 10.4561Z", fill: "white" }), /* @__PURE__ */ i.createElement("path", { d: "M10.0001 8.5C10.0001 9.32843 9.32853 10 8.50011 10C7.67168 10 7.00011 9.32843 7.00011 8.5C7.00011 7.67157 7.67168 7 8.50011 7C9.32853 7 10.0001 7.67157 10.0001 8.5Z", fill: "white" })), ft = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F59F00" }), /* @__PURE__ */ i.createElement("path", { d: "M8.7627 7.75794V16.2419C8.76267 16.3363 8.78782 16.4289 8.83554 16.5103C8.88327 16.5917 8.95184 16.6588 9.0342 16.7049C9.11655 16.7509 9.20969 16.7742 9.30402 16.7722C9.39834 16.7702 9.49044 16.7431 9.57079 16.6937L16.464 12.4517C16.5412 12.4043 16.605 12.3378 16.6492 12.2587C16.6934 12.1796 16.7167 12.0905 16.7167 11.9999C16.7167 11.9093 16.6934 11.8202 16.6492 11.7411C16.605 11.662 16.5412 11.5956 16.464 11.5482L9.57079 7.30617C9.49044 7.25673 9.39834 7.22963 9.30402 7.22765C9.20969 7.22568 9.11655 7.24892 9.0342 7.29496C8.95184 7.341 8.88327 7.40817 8.83554 7.48956C8.78782 7.57094 8.76267 7.66359 8.7627 7.75794Z", fill: "white" })), dt = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#CC5DE8" }), /* @__PURE__ */ i.createElement("path", { d: "M15.0909 9V13.566C14.8235 13.4066 14.513 13.3153 14.1818 13.3153C13.1777 13.3153 12.3636 14.1543 12.3636 15.1892C12.3636 16.2241 13.1777 17.0631 14.1818 17.0631C15.186 17.0631 16 16.2241 16 15.1892V6.75018C16 6.23185 15.5018 5.86997 15.0281 6.0443L9.20994 8.18588C8.92049 8.29242 8.72727 8.57499 8.72727 8.89176V14.5029C8.45984 14.3435 8.14935 14.2522 7.81818 14.2522C6.81403 14.2522 6 15.0912 6 16.1261C6 17.161 6.81403 18 7.81818 18C8.82234 18 9.63636 17.161 9.63636 16.1261V11.0077L15.0909 9Z", fill: "white" })), pt = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("path", { d: "M11.997 15.2043L5.45974 2.12734L18.5342 2.12734L11.997 15.2043Z", fill: "#FF6B6B" }), /* @__PURE__ */ i.createElement("path", { d: "M5 1C3.34315 1 2 2.34315 2 4V19.9973C2 21.6542 3.34315 22.9973 5 22.9973H19C20.6569 22.9973 22 21.6542 22 19.9973V4C22 2.34315 20.6569 1 19 1H16.5C16.5 1 12.8297 3.94874 12.4264 11.0247C12.1447 11.3173 11.8849 11.3025 11.5755 11.0247C11.0046 3.91723 7 1 7 1H5Z", fill: "#81A3C5" }), /* @__PURE__ */ i.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.1903 1L5.84118 1.34685C5.60611 1.58041 5.60487 1.9603 5.83842 2.19538C6.07197 2.43045 6.45187 2.43169 6.68694 2.19814L7.3283 1.56095C7.51223 1.7618 7.69814 1.97398 7.88384 2.19734L7.16905 2.74102C6.90531 2.94163 6.85413 3.31807 7.05474 3.58181C7.25535 3.84556 7.63178 3.89674 7.89553 3.69613L8.61805 3.14657C8.78504 3.37931 8.94941 3.62133 9.10947 3.8725L8.33964 4.29024C8.04839 4.44828 7.9404 4.81251 8.09845 5.10376C8.25649 5.39502 8.62072 5.503 8.91197 5.34496L9.71417 4.90965C9.83152 5.131 9.94463 5.35817 10.0526 5.59107L9.23216 5.91252C8.92362 6.03341 8.7715 6.38152 8.89239 6.69005C9.01327 6.99859 9.36138 7.15071 9.66992 7.02983L10.5093 6.70096C10.5966 6.94319 10.6778 7.19071 10.7521 7.44345L9.8859 7.65785C9.56423 7.73746 9.36801 8.06277 9.44763 8.38443C9.52725 8.70609 9.85255 8.90231 10.1742 8.8227L11.0363 8.60933C11.0575 8.71888 11.0774 8.82929 11.0959 8.94055C11.0327 9.0717 10.9973 9.21877 10.9973 9.3741V9.52462H10.2969C9.96553 9.52462 9.6969 9.79325 9.6969 10.1246C9.6969 10.456 9.96553 10.7246 10.2969 10.7246H10.9973V11.3318C9.83214 11.7436 8.99733 12.8549 8.99733 14.1611V17.1611C8.99733 17.7134 9.44505 18.1611 9.99733 18.1611H13.9973C14.5496 18.1611 14.9973 17.7134 14.9973 17.1611V14.1611C14.9973 12.8549 14.1625 11.7436 12.9973 11.3318V9.69337H13.6975C14.0288 9.69337 14.2975 9.42474 14.2975 9.09337C14.2975 8.762 14.0288 8.49337 13.6975 8.49337H12.9605C13.0027 8.23162 13.0531 7.97476 13.111 7.72285L13.9806 7.95352C14.3009 8.03847 14.6294 7.84769 14.7144 7.52739C14.7993 7.2071 14.6086 6.87858 14.2883 6.79362L13.4373 6.56791C13.5347 6.27813 13.6415 5.99597 13.7561 5.72156L14.5555 6.09989C14.855 6.24165 15.2127 6.11375 15.3545 5.81423C15.4962 5.51471 15.3683 5.15698 15.0688 5.01523L14.2684 4.63644C14.4131 4.36228 14.5647 4.09742 14.7213 3.84201L15.4632 4.33575C15.7391 4.51934 16.1115 4.44454 16.2951 4.16868C16.4787 3.89282 16.4039 3.52035 16.128 3.33676L15.3892 2.84503C15.5695 2.59738 15.7528 2.36102 15.9366 2.13615L16.6091 2.73915C16.8558 2.96036 17.2352 2.93969 17.4564 2.69297C17.6776 2.44625 17.6569 2.06691 17.4102 1.8457L16.7288 1.23476C16.8046 1.15443 16.8799 1.07617 16.9545 1H15.8574C15.8262 1.03476 15.7949 1.06984 15.7635 1.10526C14.9004 2.08038 13.9989 3.31537 13.2957 4.79138C13.2886 4.80402 13.2819 4.81701 13.2756 4.83035C13.2691 4.84389 13.2633 4.85756 13.258 4.87132C12.7642 5.92477 12.3724 7.0994 12.1671 8.38846C12.1119 8.37902 12.0552 8.3741 11.9973 8.3741C11.9329 8.3741 11.8699 8.3802 11.8088 8.39184C11.1802 5.23533 9.50654 2.77154 7.97906 1.08733C7.95245 1.058 7.92588 1.02889 7.89935 1H6.1903ZM11.9973 13.1955C11.5923 13.1955 11.2434 12.9546 11.0863 12.6083C10.5543 12.9211 10.1973 13.4994 10.1973 14.1611V16.9611H13.7973V14.1611C13.7973 13.4994 13.4403 12.9211 12.9084 12.6083C12.7512 12.9546 12.4024 13.1955 11.9973 13.1955Z", fill: "white" })), ht = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("path", { d: "M2 4C2 2.34315 3.34315 1 5 1H14.7574C15.553 1 16.3161 1.31607 16.8787 1.87868L19 4L21.1213 6.12132C21.6839 6.68393 22 7.44699 22 8.24264V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4Z", fill: "#BACCDF" }), /* @__PURE__ */ i.createElement("path", { d: "M14.8999 1.00342V6.50003C14.8999 7.38368 15.6162 8.10003 16.4999 8.10003L21.9965 8.10003C21.9765 7.67959 21.8684 7.27119 21.6827 6.90003L16.4999 6.90003C16.279 6.90003 16.0999 6.72094 16.0999 6.50003L16.0999 1.31724C15.7287 1.1315 15.3203 1.02342 14.8999 1.00342Z", fill: "white" })), Ct = (t) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ i.createElement("path", { d: "M9 3C9.2198 2.99998 9.43348 3.07238 9.608 3.206L9.708 3.293L12.414 6H19C19.7652 5.99996 20.5015 6.29233 21.0583 6.81728C21.615 7.34224 21.9501 8.06011 21.995 8.824L22 9V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V6C1.99996 5.23479 2.29233 4.49849 2.81728 3.94174C3.34224 3.38499 4.06011 3.04989 4.824 3.005L5 3H9Z", fill: "#6C8196" })), mt = {
  pdf: it,
  doc: lt,
  excel: ot,
  ppt: st,
  draw: ct,
  image: ut,
  video: ft,
  audio: dt,
  zip: pt
}, vt = ({ mimeType: t }) => {
  var C;
  const u = ((C = Object.values(at).find((m) => m.mimeType === t)) == null ? void 0 : C.iconType) ?? "";
  if (!t) return /* @__PURE__ */ a.jsx(Ct, { width: 20 });
  const p = mt[u];
  return p ? /* @__PURE__ */ a.jsx(p, { width: 20 }) : /* @__PURE__ */ a.jsx(ht, { width: 20 });
}, gt = "_row_1xr8m_1", wt = "_highlight_1xr8m_15", yt = "_rowCheckbox_1xr8m_23", xt = "_rowCheckboxVisible_1xr8m_31", b1 = {
  row: gt,
  highlight: wt,
  rowCheckbox: yt,
  rowCheckboxVisible: xt
};
function Et({
  rows: t,
  selectedRowIds: u,
  onOpenDir: p,
  onSelect: C
}) {
  const m = !!t.length && t.length === u.length, f = !m && !!u.length, h = (o) => u.includes(o), g = () => C(u.length ? [] : t.map((o) => o.Id)), y = (o) => C(
    u.includes(o) ? u.filter((w) => w !== o) : u.concat(o)
  );
  return /* @__PURE__ */ a.jsx(O.ScrollContainer, { minWidth: 760, h: "100%", children: /* @__PURE__ */ a.jsxs(
    O,
    {
      stickyHeader: !0,
      verticalSpacing: "xs",
      horizontalSpacing: "lg",
      styles: { tr: { height: 40 } },
      children: [
        /* @__PURE__ */ a.jsx(O.Thead, { children: /* @__PURE__ */ a.jsxs(O.Tr, { children: [
          /* @__PURE__ */ a.jsx(O.Th, { c: "gray.6", fw: 500, fz: 10, tt: "uppercase", children: /* @__PURE__ */ a.jsxs(D, { gap: "xs", children: [
            /* @__PURE__ */ a.jsx(
              Q1,
              {
                size: "xs",
                checked: m,
                indeterminate: f,
                onChange: () => g()
              }
            ),
            " ",
            "Название"
          ] }) }),
          /* @__PURE__ */ a.jsx(O.Th, { c: "gray.6", fw: 500, fz: 10, tt: "uppercase", children: "Изменен" }),
          /* @__PURE__ */ a.jsx(O.Th, { c: "gray.6", fw: 500, fz: 10, tt: "uppercase", children: "Размер" })
        ] }) }),
        /* @__PURE__ */ a.jsx(O.Tbody, { children: t.map((o) => /* @__PURE__ */ a.jsxs(
          O.Tr,
          {
            className: b1.row + (h(o.Id) ? ` ${b1.highlight}` : ""),
            onMouseDown: "MimeType" in o ? () => y(o.Id) : void 0,
            children: [
              /* @__PURE__ */ a.jsx(O.Td, { fz: 13, children: /* @__PURE__ */ a.jsxs(D, { gap: "xs", children: [
                /* @__PURE__ */ a.jsx(R1, { h: 16, w: 16, children: "MimeType" in o && /* @__PURE__ */ a.jsx(
                  Q1,
                  {
                    readOnly: !0,
                    size: "xs",
                    checked: h(o.Id),
                    className: b1.rowCheckbox
                  }
                ) }),
                /* @__PURE__ */ a.jsxs(D, { gap: 10, children: [
                  /* @__PURE__ */ a.jsx(
                    vt,
                    {
                      mimeType: "MimeType" in o ? o.MimeType : ""
                    }
                  ),
                  "MimeType" in o ? /* @__PURE__ */ a.jsx(
                    j1,
                    {
                      fz: 13,
                      truncate: !0,
                      c: "gray.8",
                      title: o.Name,
                      maw: 340,
                      children: o.Name
                    }
                  ) : /* @__PURE__ */ a.jsx(
                    _1,
                    {
                      truncate: !0,
                      c: "gray.8",
                      title: o.Name,
                      fz: 13,
                      fw: 500,
                      maw: 340,
                      onMouseDown: (w) => w.stopPropagation(),
                      onClick: () => p(o.Id),
                      children: o.Name
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ a.jsx(O.Td, { fz: 12, c: "dimmed", children: /* @__PURE__ */ a.jsx("span", { title: new Date(o.Timestamp).toLocaleString("ru-Ru"), children: new Date(o.Timestamp).toLocaleString("ru-Ru") }) }),
              /* @__PURE__ */ a.jsx(O.Td, { fz: 12, c: "dimmed", children: "Size" in o ? isNaN(+o.Size) ? null : oe(+o.Size) : "-" })
            ]
          },
          o.Id
        )) })
      ]
    }
  ) });
}
const ne = 3;
function bt({
  directory: t,
  isSearch: u,
  onBack: p,
  onItemClick: C
}) {
  const m = l1(() => {
    if (u)
      return [
        {
          id: 0,
          title: "Результаты поиска"
        }
      ];
    if (!t) return [];
    let f = t.Parent;
    const h = [
      {
        title: t.Name,
        id: t.Id
      }
    ];
    for (; f; )
      h.unshift({
        title: f.Name,
        id: f.Id
      }), f = f.Parent;
    if (h.length > ne) {
      const g = h.splice(1, h.length - ne);
      h.splice(1, 0, { id: 0, title: "...", children: g });
    }
    return h;
  }, [t, u]);
  return /* @__PURE__ */ a.jsxs(D, { h: 48, py: 8, px: "lg", styles: { root: { flexShrink: 0 } }, children: [
    m.length > 1 && /* @__PURE__ */ a.jsx(
      o1,
      {
        variant: "subtle",
        color: "dimmed",
        size: "sm",
        ml: -2,
        onClick: p,
        children: /* @__PURE__ */ a.jsx(Xe, { stroke: 1.2, size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      Ae,
      {
        separatorMargin: 6,
        separator: /* @__PURE__ */ a.jsx(Qe, { stroke: 1.2, size: 17 }),
        children: m.map(
          (f, h) => f.children ? /* @__PURE__ */ a.jsxs(a1, { children: [
            /* @__PURE__ */ a.jsx(a1.Target, { children: /* @__PURE__ */ a.jsx(_1, { c: "dimmed", fz: 14, children: "..." }) }),
            /* @__PURE__ */ a.jsx(a1.Dropdown, { children: f.children.map((g) => /* @__PURE__ */ a.jsx(
              a1.Item,
              {
                c: "dark",
                fz: 14,
                leftSection: /* @__PURE__ */ a.jsx(et, { stroke: 1.2, size: 18 }),
                children: g.title
              },
              g.id
            )) })
          ] }, h) : /* @__PURE__ */ a.jsx(
            _1,
            {
              truncate: !0,
              underline: f.id !== 0 ? "hover" : "never",
              c: h === m.length - 1 ? "dark" : "dimmed",
              fz: 14,
              fw: h === m.length - 1 ? 500 : 400,
              maw: 200,
              onClick: f.id === 0 ? void 0 : () => C(f.id),
              children: f.title
            },
            h
          )
        )
      }
    )
  ] });
}
var se = /* @__PURE__ */ ((t) => (t[t.Docs = 16] = "Docs", t))(se || {}), k1 = /* @__PURE__ */ ((t) => (t[t.Id = 0] = "Id", t[t.Name = 1] = "Name", t[t.Type = 2] = "Type", t[t.Size = 3] = "Size", t[t.Author = 4] = "Author", t[t.Date = 5] = "Date", t[t.UpdateDate = 6] = "UpdateDate", t))(k1 || {}), S1 = /* @__PURE__ */ ((t) => (t[t.Asc = 0] = "Asc", t[t.Desc = 1] = "Desc", t))(S1 || {});
const s1 = Ue.create({
  baseURL: "/api"
}), ae = (t) => s1.get("v1/DocumentDirectory/Get", { params: t }), Tt = (t) => s1.get("v1/DocumentDirectory/Search", {
  params: { ...t, field: "All" }
});
function Rt({
  enabledLinks: t,
  count: u,
  size: p,
  isLimitExceeded: C,
  onClose: m,
  onAttachFiles: f,
  onCreateLink: h
}) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    C && /* @__PURE__ */ a.jsx(D, { h: 41, bg: "yellow.4", px: "md", children: /* @__PURE__ */ a.jsx(j1, { fz: 13, c: "dark.7", children: "Общий объем отправляемых файлов превышает действующее ограничение (25 МБ). Файлы можно отправить в виде ссылок на Р7-Диск." }) }),
    /* @__PURE__ */ a.jsxs(D, { gap: "xs", bg: "blue", c: "#fff", px: "md", h: 76, w: "100%", children: [
      /* @__PURE__ */ a.jsx(o1, { onClick: m, children: /* @__PURE__ */ a.jsx(M1, {}) }),
      /* @__PURE__ */ a.jsxs(j1, { fz: 15, children: [
        "Выбрано файлов: ",
        u,
        " (",
        p,
        ")"
      ] }),
      /* @__PURE__ */ a.jsxs(D, { gap: "xs", ml: "auto", children: [
        /* @__PURE__ */ a.jsx(
          T1,
          {
            disabled: C,
            variant: "outline",
            color: "#fff",
            onClick: f,
            styles: C ? {
              root: {
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                opacity: 0.4
              }
            } : {},
            children: "Прикрепить файл"
          }
        ),
        t && /* @__PURE__ */ a.jsx(T1, { variant: "default", onClick: h, children: "Добавить ссылки" })
      ] })
    ] })
  ] });
}
const jt = 26214400, _t = (t) => {
  const u = Object.fromEntries(
    Object.entries({
      ...t,
      expirationDate: t.expirationDate ? t.expirationDate.toJSON() : void 0
    }).filter((p) => p[1] !== void 0)
  );
  return s1.get("v1/Link/Generate", { params: u });
};
var ce = /* @__PURE__ */ ((t) => (t[t.LockCopy = -16384] = "LockCopy", t[t.LockPrint = -8192] = "LockPrint", t[t.Deny = -4096] = "Deny", t[t.OnlyUpload = -1024] = "OnlyUpload", t[t.FreeBusy = -64] = "FreeBusy", t[t.Read = 0] = "Read", t[t.Comment = 1] = "Comment", t[t.Review = 2] = "Review", t[t.Write = 4] = "Write", t[t.Delete = 8] = "Delete", t[t.FullInternal = 256] = "FullInternal", t[t.Full = 512] = "Full", t[t.Lock = 4096] = "Lock", t))(ce || {}), ue = /* @__PURE__ */ ((t) => (t[t.SingleCall = 0] = "SingleCall", t[t.FiveMinutes = 1] = "FiveMinutes", t[t.OneHour = 2] = "OneHour", t[t.Day = 3] = "Day", t[t.Week = 4] = "Week", t[t.Month = 5] = "Month", t[t.Year = 6] = "Year", t[t.Unlimited = 10] = "Unlimited", t[t.Internal = 11] = "Internal", t))(ue || {});
const ie = {
  id: "",
  sortField: k1.Id,
  sortOrder: S1.Desc
};
function Ht({
  opened: t,
  enabledLinks: u = !1,
  onClose: p,
  onAttachFiles: C,
  onCreateLink: m
}) {
  const [f, h] = $(ie), [g, y] = $(null), [o, w] = $(null), [S, H] = $(!1), [_, Z] = $([]), [c1, F] = $(!1), V = l1(() => o ? [...o.Directory.Items, ...o.Document.Items] : [...(g == null ? void 0 : g.Children) ?? [], ...(g == null ? void 0 : g.Documents) ?? []], [g, o]), E = l1(
    () => V.filter((x) => _.includes(x.Id)),
    [V, _]
  ), X = l1(
    () => E.reduce((x, R) => x + R.Size, 0),
    [E]
  ), Q = X > jt, z = Ze(
    async (x) => {
      F(!0);
      try {
        const { data: R } = await ae(x);
        y(R[0]), w(null);
      } finally {
        F(!1);
      }
    },
    []
  ), u1 = async (x) => {
    if (!x)
      await z(f), H(!1);
    else {
      H(!0), F(!0);
      try {
        const { data: R } = await Tt({ text: x });
        w(R), y(null);
      } finally {
        F(!1);
      }
    }
  }, f1 = async () => {
    var R, A;
    F(!0);
    const x = V.filter(
      (I) => _.includes(I.Id)
    );
    try {
      const M = (await Promise.all(
        x.map(
          (L) => s1.get(`/v1/Documents/Download?id=${L.Id}&download=false`)
        )
      )).map(
        (L, B) => new File([L.data], x[B].Name, {
          type: L.headers["content-type"] ?? x[B].MimeType
        })
      );
      Z([]), C(M), p();
    } catch (I) {
      Ye(I) && console.error(
        ((A = (R = I.response) == null ? void 0 : R.data) == null ? void 0 : A.ErrorMessage) ?? "Неизвестная ошибка"
      );
    } finally {
      F(!1);
    }
  }, d1 = async () => {
    F(!0);
    try {
      const x = await Promise.all(
        E.map(
          (R) => _t({
            id: R.Id,
            accessType: ce.Read,
            lifeTime: ue.Unlimited,
            type: "Document"
          })
        )
      );
      m(
        x.map((R, A) => ({
          link: R.data,
          item: E[A]
        }))
      ), p();
    } finally {
      F(!1);
    }
  };
  return ze(() => {
    if (t)
      return (async () => {
        const I = {
          id: (await ae()).data.find(
            (M) => M.Type === se.Docs
          ).Id,
          sortField: k1.Id,
          sortOrder: S1.Desc
        };
        h(I), z(I);
      })(), () => {
        h(ie), y(null), w(null), Z([]);
      };
  }, [t, z]), /* @__PURE__ */ a.jsx(We, { theme: { fontFamily: "Roboto, sans-serif" }, children: /* @__PURE__ */ a.jsx(
    $e,
    {
      centered: !0,
      withCloseButton: !1,
      opened: t,
      size: 950,
      radius: "lg",
      padding: 0,
      onClose: () => {
      },
      children: /* @__PURE__ */ a.jsxs(R1, { h: 590, pos: "relative", children: [
        /* @__PURE__ */ a.jsx(Ne, { visible: c1 }),
        /* @__PURE__ */ a.jsx(nt, { onSearch: u1, onClose: p }),
        /* @__PURE__ */ a.jsx(
          bt,
          {
            directory: g,
            isSearch: S,
            onBack: () => z({
              ...f,
              id: g.ParentId
            }),
            onItemClick: (x) => z({ ...f, id: x })
          }
        ),
        /* @__PURE__ */ a.jsx(
          R1,
          {
            style: {
              height: `calc(100% - 48px - 64px - ${_.length ? 76 : 0}px - ${Q ? 41 : 0}px)`
            },
            children: /* @__PURE__ */ a.jsx(
              Et,
              {
                rows: V,
                selectedRowIds: _,
                onOpenDir: (x) => z({ ...f, id: x }),
                onSelect: (x) => Z(x)
              }
            )
          }
        ),
        !!_.length && /* @__PURE__ */ a.jsx(
          Rt,
          {
            enabledLinks: u,
            count: _.length,
            size: oe(X),
            isLimitExceeded: Q,
            onClose: () => Z([]),
            onAttachFiles: f1,
            onCreateLink: d1
          }
        )
      ] })
    }
  ) });
}
export {
  Ht as ShareDisk
};
