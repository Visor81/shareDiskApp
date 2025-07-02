import * as r from "react";
import ce, { forwardRef as ze, createElement as k1, useState as N, useMemo as m1, useCallback as Ae, useEffect as $e } from "react";
import { Group as B, TextInput as Ne, ActionIcon as v1, Button as F1, Table as Z, Checkbox as te, Box as H1, Text as V1, Anchor as Z1, Breadcrumbs as We, Menu as p1, Flex as Ue, MantineProvider as Ye, Modal as Ge, LoadingOverlay as Je } from "@mantine/core";
import qe, { isAxiosError as Ke } from "axios";
import { useMediaQuery as g1 } from "@mantine/hooks";
var h1 = { exports: {} }, a1 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re;
function Xe() {
  if (re) return a1;
  re = 1;
  var t = ce, c = Symbol.for("react.element"), m = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, w = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(s, f, R) {
    var l, T = {}, S = null, O = null;
    R !== void 0 && (S = "" + R), f.key !== void 0 && (S = "" + f.key), f.ref !== void 0 && (O = f.ref);
    for (l in f) d.call(f, l) && !x.hasOwnProperty(l) && (T[l] = f[l]);
    if (s && s.defaultProps) for (l in f = s.defaultProps, f) T[l] === void 0 && (T[l] = f[l]);
    return { $$typeof: c, type: s, key: S, ref: O, props: T, _owner: w.current };
  }
  return a1.Fragment = m, a1.jsx = p, a1.jsxs = p, a1;
}
var i1 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function Qe() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ce, c = Symbol.for("react.element"), m = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), G = Symbol.iterator, o1 = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = G && e[G] || e[o1];
      return typeof n == "function" ? n : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
          a[o - 1] = arguments[o];
        J("error", e, a);
      }
    }
    function J(e, n, a) {
      {
        var o = P.ReactDebugCurrentFrame, v = o.getStackAddendum();
        v !== "" && (n += "%s", a = a.concat([v]));
        var g = a.map(function(C) {
          return String(C);
        });
        g.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var x1 = !1, I = !1, y1 = !1, D = !1, W = !1, e1;
    e1 = Symbol.for("react.module.reference");
    function s1(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === x || W || e === w || e === R || e === l || D || e === O || x1 || I || y1 || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === T || e.$$typeof === p || e.$$typeof === s || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === e1 || e.getModuleId !== void 0));
    }
    function $(e, n, a) {
      var o = e.displayName;
      if (o)
        return o;
      var v = n.displayName || n.name || "";
      return v !== "" ? a + "(" + v + ")" : a;
    }
    function c1(e) {
      return e.displayName || "Context";
    }
    function H(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case m:
          return "Portal";
        case x:
          return "Profiler";
        case w:
          return "StrictMode";
        case R:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var n = e;
            return c1(n) + ".Consumer";
          case p:
            var a = e;
            return c1(a._context) + ".Provider";
          case f:
            return $(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : H(e.type) || "Memo";
          case S: {
            var v = e, g = v._payload, C = v._init;
            try {
              return H(C(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, h = 0, M, j, y, q, U, t1, D1;
    function B1() {
    }
    B1.__reactDisabledLog = !0;
    function pe() {
      {
        if (h === 0) {
          M = console.log, j = console.info, y = console.warn, q = console.error, U = console.group, t1 = console.groupCollapsed, D1 = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: B1,
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
        h++;
      }
    }
    function he() {
      {
        if (h--, h === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: M
            }),
            info: z({}, e, {
              value: j
            }),
            warn: z({}, e, {
              value: y
            }),
            error: z({}, e, {
              value: q
            }),
            group: z({}, e, {
              value: U
            }),
            groupCollapsed: z({}, e, {
              value: t1
            }),
            groupEnd: z({}, e, {
              value: D1
            })
          });
        }
        h < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var E1 = P.ReactCurrentDispatcher, b1;
    function d1(e, n, a) {
      {
        if (b1 === void 0)
          try {
            throw Error();
          } catch (v) {
            var o = v.stack.trim().match(/\n( *(at )?)/);
            b1 = o && o[1] || "";
          }
        return `
` + b1 + e;
      }
    }
    var M1 = !1, u1;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      u1 = new me();
    }
    function z1(e, n) {
      if (!e || M1)
        return "";
      {
        var a = u1.get(e);
        if (a !== void 0)
          return a;
      }
      var o;
      M1 = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = E1.current, E1.current = null, pe();
      try {
        if (n) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (k) {
              o = k;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (k) {
              o = k;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            o = k;
          }
          e();
        }
      } catch (k) {
        if (k && o && typeof k.stack == "string") {
          for (var u = k.stack.split(`
`), _ = o.stack.split(`
`), E = u.length - 1, L = _.length - 1; E >= 1 && L >= 0 && u[E] !== _[L]; )
            L--;
          for (; E >= 1 && L >= 0; E--, L--)
            if (u[E] !== _[L]) {
              if (E !== 1 || L !== 1)
                do
                  if (E--, L--, L < 0 || u[E] !== _[L]) {
                    var V = `
` + u[E].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && u1.set(e, V), V;
                  }
                while (E >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        M1 = !1, E1.current = g, he(), Error.prepareStackTrace = v;
      }
      var X = e ? e.displayName || e.name : "", Y = X ? d1(X) : "";
      return typeof e == "function" && u1.set(e, Y), Y;
    }
    function ve(e, n, a) {
      return z1(e, !1);
    }
    function ge(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function f1(e, n, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return z1(e, ge(e));
      if (typeof e == "string")
        return d1(e);
      switch (e) {
        case R:
          return d1("Suspense");
        case l:
          return d1("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return ve(e.render);
          case T:
            return f1(e.type, n, a);
          case S: {
            var o = e, v = o._payload, g = o._init;
            try {
              return f1(g(v), n, a);
            } catch {
            }
          }
        }
      return "";
    }
    var r1 = Object.prototype.hasOwnProperty, A1 = {}, $1 = P.ReactDebugCurrentFrame;
    function C1(e) {
      if (e) {
        var n = e._owner, a = f1(e.type, e._source, n ? n.type : null);
        $1.setExtraStackFrame(a);
      } else
        $1.setExtraStackFrame(null);
    }
    function we(e, n, a, o, v) {
      {
        var g = Function.call.bind(r1);
        for (var C in e)
          if (g(e, C)) {
            var u = void 0;
            try {
              if (typeof e[C] != "function") {
                var _ = Error((o || "React class") + ": " + a + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              u = e[C](n, C, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              u = E;
            }
            u && !(u instanceof Error) && (C1(v), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, C, typeof u), C1(null)), u instanceof Error && !(u.message in A1) && (A1[u.message] = !0, C1(v), b("Failed %s type: %s", a, u.message), C1(null));
          }
      }
    }
    var xe = Array.isArray;
    function L1(e) {
      return xe(e);
    }
    function ye(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, a = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Ee(e) {
      try {
        return N1(e), !1;
      } catch {
        return !0;
      }
    }
    function N1(e) {
      return "" + e;
    }
    function W1(e) {
      if (Ee(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(e)), N1(e);
    }
    var n1 = P.ReactCurrentOwner, be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, U1, Y1, T1;
    T1 = {};
    function Me(e) {
      if (r1.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Le(e) {
      if (r1.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Te(e, n) {
      if (typeof e.ref == "string" && n1.current && n && n1.current.stateNode !== n) {
        var a = H(n1.current.type);
        T1[a] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(n1.current.type), e.ref), T1[a] = !0);
      }
    }
    function Re(e, n) {
      {
        var a = function() {
          U1 || (U1 = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function je(e, n) {
      {
        var a = function() {
          Y1 || (Y1 = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var _e = function(e, n, a, o, v, g, C) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: a,
        props: C,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function Se(e, n, a, o, v) {
      {
        var g, C = {}, u = null, _ = null;
        a !== void 0 && (W1(a), u = "" + a), Le(n) && (W1(n.key), u = "" + n.key), Me(n) && (_ = n.ref, Te(n, v));
        for (g in n)
          r1.call(n, g) && !be.hasOwnProperty(g) && (C[g] = n[g]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (g in E)
            C[g] === void 0 && (C[g] = E[g]);
        }
        if (u || _) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && Re(C, L), _ && je(C, L);
        }
        return _e(e, u, _, v, o, n1.current, C);
      }
    }
    var R1 = P.ReactCurrentOwner, G1 = P.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var n = e._owner, a = f1(e.type, e._source, n ? n.type : null);
        G1.setExtraStackFrame(a);
      } else
        G1.setExtraStackFrame(null);
    }
    var j1;
    j1 = !1;
    function _1(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function J1() {
      {
        if (R1.current) {
          var e = H(R1.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ke(e) {
      return "";
    }
    var q1 = {};
    function Fe(e) {
      {
        var n = J1();
        if (!n) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (n = `

Check the top-level render call using <` + a + ">.");
        }
        return n;
      }
    }
    function K1(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Fe(n);
        if (q1[a])
          return;
        q1[a] = !0;
        var o = "";
        e && e._owner && e._owner !== R1.current && (o = " It was passed a child from " + H(e._owner.type) + "."), K(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), K(null);
      }
    }
    function X1(e, n) {
      {
        if (typeof e != "object")
          return;
        if (L1(e))
          for (var a = 0; a < e.length; a++) {
            var o = e[a];
            _1(o) && K1(o, n);
          }
        else if (_1(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = A(e);
          if (typeof v == "function" && v !== e.entries)
            for (var g = v.call(e), C; !(C = g.next()).done; )
              _1(C.value) && K1(C.value, n);
        }
      }
    }
    function He(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var a;
        if (typeof n == "function")
          a = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === T))
          a = n.propTypes;
        else
          return;
        if (a) {
          var o = H(n);
          we(a, e.props, "prop", o, e);
        } else if (n.PropTypes !== void 0 && !j1) {
          j1 = !0;
          var v = H(n);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ve(e) {
      {
        for (var n = Object.keys(e.props), a = 0; a < n.length; a++) {
          var o = n[a];
          if (o !== "children" && o !== "key") {
            K(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), K(null);
            break;
          }
        }
        e.ref !== null && (K(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), K(null));
      }
    }
    var Q1 = {};
    function ee(e, n, a, o, v, g) {
      {
        var C = s1(e);
        if (!C) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ke();
          _ ? u += _ : u += J1();
          var E;
          e === null ? E = "null" : L1(e) ? E = "array" : e !== void 0 && e.$$typeof === c ? (E = "<" + (H(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, u);
        }
        var L = Se(e, n, a, v, g);
        if (L == null)
          return L;
        if (C) {
          var V = n.children;
          if (V !== void 0)
            if (o)
              if (L1(V)) {
                for (var X = 0; X < V.length; X++)
                  X1(V[X], e);
                Object.freeze && Object.freeze(V);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              X1(V, e);
        }
        if (r1.call(n, "key")) {
          var Y = H(e), k = Object.keys(n).filter(function(Be) {
            return Be !== "key";
          }), S1 = k.length > 0 ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Q1[Y + S1]) {
            var De = k.length > 0 ? "{" + k.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, S1, Y, De, Y), Q1[Y + S1] = !0;
          }
        }
        return e === d ? Ve(L) : He(L), L;
      }
    }
    function Ze(e, n, a) {
      return ee(e, n, a, !0);
    }
    function Pe(e, n, a) {
      return ee(e, n, a, !1);
    }
    var Oe = Pe, Ie = Ze;
    i1.Fragment = d, i1.jsx = Oe, i1.jsxs = Ie;
  }()), i1;
}
var ae;
function e2() {
  return ae || (ae = 1, process.env.NODE_ENV === "production" ? h1.exports = Xe() : h1.exports = Qe()), h1.exports;
}
var i = e2();
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var t2 = {
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
const l1 = (t, c, m, d) => {
  const w = ze(
    ({ color: x = "currentColor", size: p = 24, stroke: s = 2, title: f, className: R, children: l, ...T }, S) => k1(
      "svg",
      {
        ref: S,
        ...t2[t],
        width: p,
        height: p,
        className: ["tabler-icon", `tabler-icon-${c}`, R].join(" "),
        strokeWidth: s,
        stroke: x,
        ...T
      },
      [
        f && k1("title", { key: "svg-title" }, f),
        ...d.map(([O, G]) => k1(O, G)),
        ...Array.isArray(l) ? l : [l]
      ]
    )
  );
  return w.displayName = `${m}`, w;
};
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var r2 = l1("outline", "arrow-up", "IconArrowUp", [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M18 11l-6 -6", key: "svg-1" }], ["path", { d: "M6 11l6 -6", key: "svg-2" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var n2 = l1("outline", "chevron-right", "IconChevronRight", [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var a2 = l1("outline", "folder", "IconFolder", [["path", { d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var i2 = l1("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var P1 = l1("outline", "x", "IconX", [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]]);
const l2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("path", { d: "M23.3257 16.0001C23.3257 20.0461 20.0458 23.326 15.9999 23.326C11.954 23.326 8.67407 20.0461 8.67407 16.0001C8.67407 11.9542 11.954 8.67432 15.9999 8.67432C20.0458 8.67432 23.3257 11.9542 23.3257 16.0001ZM10.9132 16.0001C10.9132 18.8094 13.1906 21.0868 15.9999 21.0868C18.8092 21.0868 21.0866 18.8094 21.0866 16.0001C21.0866 13.1908 18.8092 10.9134 15.9999 10.9134C13.1906 10.9134 10.9132 13.1908 10.9132 16.0001Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { d: "M31.6433 12.6405C32.2562 15.4944 32.0767 18.4615 31.1243 21.2207C30.1719 23.9799 28.4828 26.4259 26.24 28.294L20.0443 20.8556C20.9301 20.1178 21.5972 19.1517 21.9734 18.0619C22.3496 16.9722 22.4205 15.8003 22.1784 14.6732L31.6433 12.6405Z", fill: "#DA77F2" }), /* @__PURE__ */ r.createElement("path", { d: "M27.3137 4.68629C29.5378 6.91035 31.057 9.74059 31.6815 12.8233L22.1935 14.7453C21.9468 13.5278 21.3468 12.41 20.4684 11.5316L27.3137 4.68629Z", fill: "#FFA94D" }), /* @__PURE__ */ r.createElement("path", { d: "M15.7109 0.00261191C17.9572 -0.0379809 20.1868 0.394937 22.2547 1.27318C24.3225 2.15143 26.1823 3.45532 27.7128 5.09996L20.626 11.695C20.0215 11.0454 19.287 10.5305 18.4703 10.1836C17.6536 9.83672 16.773 9.66573 15.8858 9.68177L15.7109 0.00261191Z", fill: "#FCC419" }), /* @__PURE__ */ r.createElement("path", { d: "M25.5347 3.1513C26.5177 3.88076 27.4138 4.72063 28.2053 5.65441L20.8205 11.914C20.5079 11.5452 20.154 11.2135 19.7658 10.9254L25.5347 3.1513Z", fill: "#3BC9DB" }), /* @__PURE__ */ r.createElement("path", { d: "M11.1781 31.2561C8.44451 30.3921 5.99326 28.8095 4.08072 26.6738C2.16817 24.5381 0.864593 21.9278 0.306308 19.1158L9.80171 17.2306C10.0222 18.3412 10.5371 19.3722 11.2924 20.2157C12.0478 21.0592 13.0159 21.6842 14.0956 22.0255L11.1781 31.2561Z", fill: "#51CF66" }), /* @__PURE__ */ r.createElement("path", { d: "M2.08871 8.09582C3.48409 5.63996 5.50473 3.59727 7.94529 2.17532C10.3859 0.753373 13.1593 0.00284454 15.9839 8.06746e-06L15.9937 9.68074C14.8781 9.68186 13.7827 9.97828 12.8188 10.5399C11.8548 11.1015 11.0568 11.9083 10.5057 12.8782L2.08871 8.09582Z", fill: "#FFD43B" }), /* @__PURE__ */ r.createElement("path", { d: "M27.3137 27.3137C25.828 28.7994 24.0641 29.978 22.1229 30.7821C20.1817 31.5861 18.1011 32 16 32L16 22.3193C16.8299 22.3193 17.6516 22.1558 18.4183 21.8382C19.185 21.5207 19.8816 21.0552 20.4684 20.4684L27.3137 27.3137Z", fill: "#339AF0" }), /* @__PURE__ */ r.createElement("path", { d: "M29.5177 24.5599C28.8314 25.6437 28.0172 26.6411 27.0926 27.5305L20.3811 20.554C20.7462 20.2028 21.0678 19.8088 21.3389 19.3808L29.5177 24.5599Z", fill: "#BE4BDB" }), /* @__PURE__ */ r.createElement("path", { d: "M0.542532 20.1312C-0.0620174 17.8692 -0.162742 15.502 0.247467 13.1968C0.657676 10.8916 1.56882 8.70457 2.9166 6.78997L10.8327 12.3625C10.3003 13.1186 9.94049 13.9824 9.77847 14.8929C9.61646 15.8033 9.65624 16.7382 9.89501 17.6316L0.542532 20.1312Z", fill: "#FF922B" }), /* @__PURE__ */ r.createElement("path", { d: "M0.545187 11.8589C1.23402 9.28815 2.55324 6.92984 4.38338 4.99754L11.412 11.6545C10.6891 12.4177 10.1681 13.3491 9.89606 14.3645L0.545187 11.8589Z", fill: "#FFA94D" }), /* @__PURE__ */ r.createElement("path", { d: "M16 32C14.002 32 12.0217 31.6258 10.1615 30.8967L13.6941 21.8835C14.4288 22.1715 15.2109 22.3193 16 22.3193L16 32Z", fill: "#22B8CF" })), o2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 102, height: 32, viewBox: "0 0 102 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("path", { d: "M52.3132 21.9581L56.3132 12.1449C56.3539 12.1041 56.3132 12.0294 56.2385 12.0294H52.6663C52.6392 12.0294 52.6143 12.0158 52.5916 11.9887L51.3624 10.0124C51.3217 9.97167 51.3624 9.89697 51.4371 9.89697H58.7376C58.7784 9.89697 58.8123 9.93772 58.8123 9.97847V11.5201L54.7376 22.0803C54.7376 22.1211 54.6969 22.1211 54.6629 22.1211H52.4354C52.32 22.0803 52.2792 22.0396 52.32 21.9649L52.3132 21.9581Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M58.1399 17.924L58.7986 16.0497C58.7986 16.0089 58.8326 16.0089 58.8665 16.0089H62.1263C62.1602 16.0089 62.1942 16.0497 62.1942 16.0904V17.9648C62.1942 18.0055 62.1602 18.0463 62.1263 18.0463H58.167C58.1331 18.0055 58.0991 17.9648 58.1331 17.924H58.1399Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M45.7629 9.90073C46.8712 9.90073 47.7847 10.0344 48.5031 10.3017C49.2272 10.5691 49.7647 10.9729 50.1156 11.5131C50.4665 12.0534 50.6419 12.7357 50.6419 13.56C50.6419 14.117 50.5361 14.6043 50.3244 15.022C50.1128 15.4398 49.8343 15.7934 49.489 16.0831C49.1437 16.3727 48.7705 16.6094 48.3695 16.7932L51.9619 22.115H49.088L46.1722 17.4281H44.7938V22.115H42.2039V9.90073H45.7629ZM45.5791 12.0228H44.7938V15.3228H45.6292C46.4869 15.3228 47.0996 15.1808 47.4672 14.8967C47.8404 14.6071 48.0269 14.1838 48.0269 13.6268C48.0269 13.0476 47.8264 12.6354 47.4254 12.3904C47.03 12.1453 46.4145 12.0228 45.5791 12.0228Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M73.938 15.8909C73.938 17.2666 73.6734 18.4167 73.1443 19.3413C72.6207 20.2603 71.8605 20.9537 70.8635 21.4216C69.8665 21.8839 68.6663 22.115 67.2627 22.115H63.804V9.90073H67.6387C68.9197 9.90073 70.0308 10.1291 70.9721 10.5858C71.9134 11.0369 72.643 11.7081 73.161 12.5992C73.679 13.4848 73.938 14.582 73.938 15.8909ZM71.2478 15.9577C71.2478 15.0554 71.1141 14.3147 70.8468 13.7354C70.585 13.1506 70.1951 12.719 69.6772 12.4405C69.1648 12.162 68.5298 12.0228 67.7723 12.0228H66.3938V19.9762H67.505C68.7693 19.9762 69.7078 19.6393 70.3205 18.9653C70.9387 18.2914 71.2478 17.2889 71.2478 15.9577Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M76.1272 22.115V9.90073H78.7171V22.115H76.1272Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M88.6592 18.7231C88.6592 19.4471 88.4838 20.0765 88.1329 20.6112C87.782 21.1459 87.2696 21.558 86.5957 21.8476C85.9273 22.1373 85.1141 22.2821 84.1562 22.2821C83.7329 22.2821 83.3179 22.2542 82.9113 22.1985C82.5103 22.1428 82.1232 22.0621 81.7501 21.9563C81.3825 21.8449 81.0316 21.7084 80.6974 21.5469V19.1408C81.2767 19.397 81.8782 19.6281 82.502 19.8342C83.1258 20.0403 83.744 20.1433 84.3567 20.1433C84.78 20.1433 85.1197 20.0876 85.3759 19.9762C85.6377 19.8649 85.8271 19.7117 85.944 19.5167C86.061 19.3218 86.1195 19.099 86.1195 18.8484C86.1195 18.5421 86.0164 18.2803 85.8104 18.0631C85.6043 17.8458 85.3202 17.6426 84.9582 17.4532C84.6017 17.2638 84.1979 17.0605 83.7468 16.8433C83.4627 16.7096 83.1536 16.5481 82.8194 16.3587C82.4853 16.1638 82.1678 15.9271 81.867 15.6486C81.5663 15.3701 81.3184 15.0332 81.1235 14.6377C80.9341 14.2367 80.8394 13.7577 80.8394 13.2007C80.8394 12.4711 81.0065 11.8473 81.3407 11.3293C81.6749 10.8114 82.1511 10.4159 82.7693 10.143C83.3931 9.86452 84.1283 9.72528 84.9749 9.72528C85.6098 9.72528 86.2142 9.80047 86.7878 9.95085C87.3671 10.0957 87.9714 10.3073 88.6008 10.5858L87.7653 12.5992C87.2028 12.3709 86.6987 12.1954 86.2531 12.0729C85.8076 11.9448 85.3536 11.8807 84.8914 11.8807C84.5683 11.8807 84.2926 11.9337 84.0643 12.0395C83.8359 12.1397 83.6633 12.2845 83.5463 12.4739C83.4293 12.6577 83.3708 12.8721 83.3708 13.1172C83.3708 13.4068 83.4544 13.6519 83.6215 13.8524C83.7941 14.0473 84.0503 14.2367 84.3901 14.4205C84.7354 14.6043 85.1643 14.8187 85.6767 15.0638C86.3005 15.359 86.8324 15.6681 87.2724 15.9911C87.718 16.3086 88.0605 16.6846 88.3 17.119C88.5395 17.5479 88.6592 18.0826 88.6592 18.7231Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M100.356 22.115H97.4151L94.2153 16.9686L93.1209 17.7539V22.115H90.531V9.90073H93.1209V15.4899C93.2935 15.2504 93.4634 15.0109 93.6305 14.7714C93.7976 14.5319 93.9675 14.2924 94.1401 14.0529L97.4485 9.90073H100.322L96.0617 15.3061L100.356 22.115Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M24.3257 16.0001C24.3257 20.046 21.0458 23.3259 16.9999 23.3259C12.954 23.3259 9.67407 20.046 9.67407 16.0001C9.67407 11.9542 12.954 8.67427 16.9999 8.67427C21.0458 8.67427 24.3257 11.9542 24.3257 16.0001ZM11.9132 16.0001C11.9132 18.8094 14.1906 21.0868 16.9999 21.0868C19.8092 21.0868 22.0866 18.8094 22.0866 16.0001C22.0866 13.1908 19.8092 10.9134 16.9999 10.9134C14.1906 10.9134 11.9132 13.1908 11.9132 16.0001Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { d: "M32.6434 12.6405C33.2562 15.4944 33.0767 18.4615 32.1243 21.2207C31.1719 23.9799 29.4828 26.4259 27.24 28.294L21.0443 20.8556C21.9302 20.1178 22.5973 19.1517 22.9734 18.0619C23.3496 16.9722 23.4205 15.8003 23.1784 14.6732L32.6434 12.6405Z", fill: "#DA77F2" }), /* @__PURE__ */ r.createElement("path", { d: "M28.3137 4.68629C30.5378 6.91035 32.057 9.74059 32.6815 12.8233L23.1935 14.7453C22.9468 13.5278 22.3468 12.41 21.4684 11.5316L28.3137 4.68629Z", fill: "#FFA94D" }), /* @__PURE__ */ r.createElement("path", { d: "M16.7109 0.00261191C18.9572 -0.0379809 21.1868 0.394937 23.2547 1.27318C25.3225 2.15143 27.1823 3.45532 28.7128 5.09996L21.626 11.695C21.0215 11.0454 20.287 10.5305 19.4703 10.1836C18.6536 9.83672 17.773 9.66573 16.8858 9.68177L16.7109 0.00261191Z", fill: "#FCC419" }), /* @__PURE__ */ r.createElement("path", { d: "M26.5347 3.1513C27.5177 3.88076 28.4138 4.72063 29.2053 5.65441L21.8205 11.914C21.5079 11.5452 21.154 11.2135 20.7658 10.9254L26.5347 3.1513Z", fill: "#3BC9DB" }), /* @__PURE__ */ r.createElement("path", { d: "M12.1781 31.2561C9.44452 30.3921 6.99327 28.8095 5.08072 26.6738C3.16817 24.5381 1.86459 21.9278 1.30631 19.1158L10.8017 17.2306C11.0222 18.3412 11.5371 19.3722 12.2924 20.2157C13.0478 21.0592 14.0159 21.6842 15.0956 22.0255L12.1781 31.2561Z", fill: "#51CF66" }), /* @__PURE__ */ r.createElement("path", { d: "M3.08872 8.09582C4.48409 5.63997 6.50473 3.59727 8.9453 2.17532C11.3859 0.753373 14.1594 0.00284454 16.9839 8.06746e-06L16.9937 9.68074C15.8781 9.68186 14.7827 9.97828 13.8188 10.5399C12.8549 11.1015 12.0568 11.9083 11.5057 12.8782L3.08872 8.09582Z", fill: "#FFD43B" }), /* @__PURE__ */ r.createElement("path", { d: "M28.3137 27.3137C26.828 28.7994 25.0642 29.978 23.123 30.7821C21.1817 31.5861 19.1012 32 17 32V22.3193C17.8299 22.3193 18.6516 22.1558 19.4183 21.8382C20.185 21.5207 20.8816 21.0552 21.4684 20.4684L28.3137 27.3137Z", fill: "#339AF0" }), /* @__PURE__ */ r.createElement("path", { d: "M30.5177 24.5599C29.8314 25.6437 29.0172 26.6411 28.0927 27.5305L21.3811 20.554C21.7462 20.2028 22.0678 19.8088 22.3389 19.3808L30.5177 24.5599Z", fill: "#BE4BDB" }), /* @__PURE__ */ r.createElement("path", { d: "M1.54253 20.1312C0.937983 17.8692 0.837258 15.502 1.24747 13.1968C1.65768 10.8916 2.56882 8.70457 3.9166 6.78997L11.8327 12.3625C11.3004 13.1186 10.9405 13.9824 10.7785 14.8929C10.6165 15.8033 10.6562 16.7382 10.895 17.6316L1.54253 20.1312Z", fill: "#FF922B" }), /* @__PURE__ */ r.createElement("path", { d: "M1.54519 11.8589C2.23402 9.28815 3.55324 6.92984 5.38338 4.99754L12.412 11.6545C11.6892 12.4177 11.1681 13.3491 10.8961 14.3645L1.54519 11.8589Z", fill: "#FFA94D" }), /* @__PURE__ */ r.createElement("path", { d: "M17 32C15.002 32 13.0217 31.6258 11.1615 30.8967L14.6941 21.8835C15.4288 22.1715 16.2109 22.3193 17 22.3193V32Z", fill: "#22B8CF" })), s2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 110, height: 32, viewBox: "0 0 110 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("g", { clipPath: "url(#clip0_939_11669)" }, /* @__PURE__ */ r.createElement("path", { d: "M23.6591 16.0001C23.6591 20.0461 20.3792 23.326 16.3333 23.326C12.2873 23.326 9.00745 20.0461 9.00745 16.0001C9.00745 11.9542 12.2873 8.67432 16.3333 8.67432C20.3792 8.67432 23.6591 11.9542 23.6591 16.0001ZM11.2466 16.0001C11.2466 18.8094 13.524 21.0868 16.3333 21.0868C19.1426 21.0868 21.42 18.8094 21.42 16.0001C21.42 13.1908 19.1426 10.9134 16.3333 10.9134C13.524 10.9134 11.2466 13.1908 11.2466 16.0001Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { d: "M31.9767 12.6405C32.5896 15.4944 32.4101 18.4615 31.4577 21.2207C30.5053 23.9799 28.8162 26.4259 26.5734 28.294L20.3777 20.8556C21.2635 20.1178 21.9306 19.1517 22.3068 18.0619C22.683 16.9722 22.7539 15.8003 22.5118 14.6732L31.9767 12.6405Z", fill: "#DA77F2" }), /* @__PURE__ */ r.createElement("path", { d: "M27.6471 4.68629C29.8712 6.91035 31.3904 9.74059 32.0149 12.8233L22.5269 14.7453C22.2802 13.5278 21.6802 12.41 20.8018 11.5316L27.6471 4.68629Z", fill: "#FFA94D" }), /* @__PURE__ */ r.createElement("path", { d: "M16.0443 0.00261191C18.2906 -0.0379809 20.5202 0.394937 22.5881 1.27318C24.6559 2.15143 26.5157 3.45532 28.0462 5.09996L20.9594 11.695C20.3549 11.0454 19.6204 10.5305 18.8037 10.1836C17.987 9.83672 17.1064 9.66573 16.2192 9.68177L16.0443 0.00261191Z", fill: "#FCC419" }), /* @__PURE__ */ r.createElement("path", { d: "M25.8681 3.1513C26.8511 3.88076 27.7472 4.72063 28.5387 5.65441L21.1539 11.914C20.8413 11.5452 20.4874 11.2135 20.0992 10.9254L25.8681 3.1513Z", fill: "#3BC9DB" }), /* @__PURE__ */ r.createElement("path", { d: "M11.5115 31.2561C8.77789 30.3921 6.32664 28.8095 4.41409 26.6738C2.50155 24.5381 1.19797 21.9278 0.639682 19.1158L10.1351 17.2306C10.3556 18.3412 10.8704 19.3722 11.6258 20.2157C12.3812 21.0592 13.3493 21.6842 14.429 22.0255L11.5115 31.2561Z", fill: "#51CF66" }), /* @__PURE__ */ r.createElement("path", { d: "M2.42209 8.09582C3.81747 5.63996 5.83811 3.59727 8.27867 2.17532C10.7192 0.753373 13.4927 0.00284454 16.3173 8.06746e-06L16.327 9.68074C15.2115 9.68186 14.1161 9.97828 13.1521 10.5399C12.1882 11.1015 11.3902 11.9083 10.8391 12.8782L2.42209 8.09582Z", fill: "#FFD43B" }), /* @__PURE__ */ r.createElement("path", { d: "M27.6471 27.3137C26.1614 28.7994 24.3975 29.978 22.4563 30.7821C20.5151 31.5861 18.4345 32 16.3334 32L16.3334 22.3193C17.1632 22.3193 17.985 22.1558 18.7517 21.8382C19.5184 21.5207 20.215 21.0552 20.8018 20.4684L27.6471 27.3137Z", fill: "#339AF0" }), /* @__PURE__ */ r.createElement("path", { d: "M29.8511 24.5599C29.1648 25.6437 28.3506 26.6411 27.426 27.5305L20.7145 20.554C21.0796 20.2028 21.4012 19.8088 21.6723 19.3808L29.8511 24.5599Z", fill: "#BE4BDB" }), /* @__PURE__ */ r.createElement("path", { d: "M0.875906 20.1312C0.271357 17.8692 0.170632 15.502 0.580841 13.1968C0.991051 10.8916 1.9022 8.70457 3.24997 6.78997L11.166 12.3625C10.6337 13.1186 10.2739 13.9824 10.1119 14.8929C9.94984 15.8033 9.98962 16.7382 10.2284 17.6316L0.875906 20.1312Z", fill: "#FF922B" }), /* @__PURE__ */ r.createElement("path", { d: "M0.878561 11.8589C1.56739 9.28815 2.88661 6.92984 4.71676 4.99754L11.7454 11.6545C11.0225 12.4177 10.5015 13.3491 10.2294 14.3645L0.878561 11.8589Z", fill: "#FFA94D" }), /* @__PURE__ */ r.createElement("path", { d: "M16.3334 32C14.3354 32 12.3551 31.6258 10.4949 30.8967L14.0274 21.8835C14.7621 22.1715 15.5443 22.3193 16.3334 22.3193L16.3334 32Z", fill: "#22B8CF" }), /* @__PURE__ */ r.createElement("path", { d: "M51.1469 21.9415L55.1469 12.1282C55.1877 12.0875 55.1469 12.0128 55.0722 12.0128H51.5001C51.4729 12.0128 51.448 11.9992 51.4254 11.9721L50.1962 9.99582C50.1554 9.95507 50.1962 9.88037 50.2709 9.88037H57.5714C57.6121 9.88037 57.6461 9.92112 57.6461 9.96186V11.5035L53.5714 22.0637C53.5714 22.1045 53.5306 22.1045 53.4967 22.1045H51.2692C51.1537 22.0637 51.113 22.023 51.1537 21.9483L51.1469 21.9415Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M56.9734 17.9075L57.6321 16.0332C57.6321 15.9924 57.6661 15.9924 57.7 15.9924H60.9598C60.9937 15.9924 61.0277 16.0332 61.0277 16.0739V17.9483C61.0277 17.989 60.9937 18.0298 60.9598 18.0298H57.0005C56.9666 17.989 56.9326 17.9483 56.9666 17.9075H56.9734Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M50.1687 13.6358C50.1687 14.9397 49.7544 15.9313 48.8784 16.6443C48.0023 17.3167 46.7935 17.6698 45.2111 17.6698H44.0431V22.0976H41.3334V9.87354H45.4149C46.9565 9.87354 48.1246 10.1927 48.9531 10.8243C49.7476 11.4559 50.1619 12.4066 50.1619 13.6358H50.1687ZM44.0498 15.5713H44.9259C45.7612 15.5713 46.386 15.4151 46.8003 15.0959C47.2145 14.7768 47.4251 14.3421 47.4251 13.7513C47.4251 13.1605 47.2553 12.7258 46.9225 12.4066C46.5897 12.1282 46.0465 11.972 45.2994 11.972H44.0498V15.5713Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M72.2269 9.87329V19.9378H73.8568V24.2977H71.3576V22.0906H63.6972V24.2977H61.198V19.9378H62.142C62.4612 19.2994 62.7668 18.6339 63.0588 17.9208C63.3576 17.2145 63.6292 16.4539 63.8873 15.639C64.1454 14.8241 64.3763 13.9412 64.58 12.9904C64.7837 12.0397 64.9603 11.0006 65.0961 9.87329H72.2201H72.2269ZM69.6462 12.0329H67.1607C67.0792 12.6237 66.9637 13.2553 66.8211 13.9208C66.6785 14.5932 66.5019 15.2723 66.305 15.965C66.108 16.6577 65.8839 17.3436 65.6462 18.0159C65.4017 18.6882 65.1437 19.3334 64.872 19.9378H69.6462V12.0261V12.0329Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M75.4119 9.87329H77.7413V15.7748C77.7413 16.0668 77.7413 16.386 77.7277 16.7392C77.7209 17.0923 77.7074 17.4319 77.6938 17.7714C77.6802 18.111 77.6666 18.403 77.653 18.6543C77.6394 18.9055 77.6327 19.0753 77.6191 19.1568H77.6666L83.3101 9.87329H86.4136V22.0974H84.1046V16.2298C84.1046 15.9174 84.1046 15.5779 84.125 15.2112C84.1454 14.8444 84.1522 14.4845 84.1726 14.1381C84.1929 13.7918 84.2065 13.493 84.2269 13.2417C84.2405 12.9904 84.2541 12.8207 84.2608 12.7324H84.1929L78.5223 22.0974H75.4052V9.87329H75.4119Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M94.2031 11.8564C93.7074 11.8564 93.266 11.9515 92.8857 12.1416C92.5053 12.3318 92.1862 12.6102 91.9213 12.977C91.6565 13.3437 91.4663 13.7783 91.3305 14.2877C91.1947 14.8038 91.1335 15.3742 91.1335 16.0194C91.1335 16.8819 91.2422 17.6221 91.4527 18.2333C91.67 18.8445 92.0028 19.3063 92.451 19.6323C92.8992 19.9515 93.4833 20.1145 94.1964 20.1145C94.6921 20.1145 95.1879 20.0602 95.6904 19.9447C96.1862 19.836 96.7295 19.6731 97.3135 19.4693V21.6425C96.7702 21.8666 96.2405 22.0228 95.7176 22.1247C95.1947 22.2197 94.6038 22.2673 93.9519 22.2673C92.6887 22.2673 91.6564 22.0092 90.8483 21.4863C90.0401 20.9634 89.4357 20.2367 89.0486 19.2927C88.6548 18.3556 88.4646 17.2554 88.4646 16.0058C88.4646 15.0822 88.5868 14.2333 88.8381 13.4659C89.0894 12.6985 89.4561 12.033 89.9383 11.4693C90.4205 10.9056 91.0249 10.471 91.7379 10.1654C92.451 9.85981 93.2728 9.70361 94.1964 9.70361C94.8008 9.70361 95.412 9.77832 96.0232 9.93451C96.6344 10.0907 97.2184 10.3012 97.7753 10.5661L96.94 12.6714C96.485 12.454 96.0232 12.2639 95.5614 12.1009C95.0996 11.9379 94.6446 11.8564 94.1964 11.8564H94.2031Z", fill: "#333333" }), /* @__PURE__ */ r.createElement("path", { d: "M109.429 22.0974H106.488L102.06 15.9039V22.0974H99.4662V9.87329H102.06V15.7952L106.441 9.87329H109.198L104.743 15.7409L109.436 22.0974H109.429Z", fill: "#333333" })), /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("clipPath", { id: "clip0_939_11669" }, /* @__PURE__ */ r.createElement("rect", { width: 109.436, height: 32, fill: "white" })))), ie = {
  en: {
    MyDocuments: "My documents",
    Search: "Search",
    Find: "Find",
    SearchResults: "Search results",
    ColumnName: "Name",
    ColumnChanged: "Changed",
    ColumnSize: "Size",
    MaxSizeLimitPartOne: "Total size of files sent exceeds the current limit (25 MB).",
    MaxSizeLimitPartTwo: "Files can be sent as links to R7-Disk.",
    FilesSelected: "Selected files",
    AttachFile: "Attach file",
    AttachFiles: "Attach files",
    AddLink: "Add link",
    AddLinks: "Add links"
  },
  ru: {
    MyDocuments: "Мои документы",
    Search: "Поиск",
    Find: "Найти",
    SearchResults: "Результаты поиска",
    ColumnName: "Название",
    ColumnChanged: "Изменен",
    ColumnSize: "Размер",
    MaxSizeLimitPartOne: "Общий объем отправляемых файлов превышает действующее ограничение (25 МБ).",
    MaxSizeLimitPartTwo: "Файлы можно отправить в виде ссылок на Р7-Диск.",
    FilesSelected: "Выбрано файлов",
    AttachFile: "Прикрепить файл",
    AttachFiles: "Прикрепить файлы",
    AddLink: "Добавить ссылку",
    AddLinks: "Добавить ссылки"
  }
}, F = (t, c) => {
  if (!t)
    return ie.ru[c] || "";
  const m = ie[`${t}`] || "";
  if (!m || typeof m != "object" || Array.isArray(m))
    return "";
  const d = m[c];
  return typeof d != "string" ? "" : d;
};
function c2({ onSearch: t, onClose: c, locale: m }) {
  const [d, w] = N(""), x = g1("(max-width: 640px)");
  return /* @__PURE__ */ i.jsxs(
    B,
    {
      gap: 10,
      h: x ? 48 : 64,
      pt: x ? "xs" : "",
      px: "lg",
      styles: { root: { flexShrink: 0 } },
      children: [
        /* @__PURE__ */ i.jsx(B, { mr: "xs", children: x ? /* @__PURE__ */ i.jsx(l2, {}) : m === "ru" ? /* @__PURE__ */ i.jsx(s2, {}) : /* @__PURE__ */ i.jsx(o2, {}) }),
        /* @__PURE__ */ i.jsx(
          Ne,
          {
            variant: "filled",
            size: "md",
            fz: 16,
            maw: 480,
            styles: { root: { flexGrow: 1 } },
            placeholder: `${F(m, "Search")}`,
            value: d,
            leftSection: /* @__PURE__ */ i.jsx(i2, { stroke: 1.2 }),
            rightSectionProps: { style: { width: 110 } },
            rightSection: !!d && /* @__PURE__ */ i.jsxs(B, { gap: "xs", children: [
              /* @__PURE__ */ i.jsx(
                v1,
                {
                  variant: "transparent",
                  color: "gray",
                  onClick: () => {
                    w(""), t("");
                  },
                  children: /* @__PURE__ */ i.jsx(P1, { stroke: 1.2, size: 22 })
                }
              ),
              /* @__PURE__ */ i.jsx(
                F1,
                {
                  variant: "default",
                  size: "xs",
                  bd: "none",
                  fz: 12,
                  onClick: () => t(d.trim()),
                  children: `${F(m, "Find")}`
                }
              )
            ] }),
            onChange: (p) => w(p.currentTarget.value),
            onKeyDown: (p) => p.key === "Enter" && t(d.trim())
          }
        ),
        /* @__PURE__ */ i.jsx(
          v1,
          {
            variant: "subtle",
            color: "gray",
            ml: "auto",
            size: "lg",
            onClick: c,
            children: /* @__PURE__ */ i.jsx(P1, { size: 25, stroke: 1.2 })
          }
        )
      ]
    }
  );
}
const de = (t, c = 2, m) => {
  if (!+t) return m === "en" ? "0 B" : "0 Б";
  const d = 1024, w = c < 0 ? 0 : c, x = ["Б", "КБ", "МБ", "ГБ", "ТБ", "ПБ", "ЭБ", "ЗБ", "ЙБ"], p = ["B", "KB", "MB", "GB", "TB", "PB", "AB", "ZB"], s = Math.floor(Math.log(t) / Math.log(d));
  return `${parseFloat((t / Math.pow(d, s)).toFixed(w))} ${m === "en" ? p[s] : x[s]}`;
}, d2 = {
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
}, u2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F03E3E" }), /* @__PURE__ */ r.createElement("path", { d: "M7.40272 9.3772C8.0638 9.3772 8.54619 9.51969 8.84987 9.80468C9.15354 10.0873 9.30538 10.4774 9.30538 10.975C9.30538 11.1993 9.27151 11.4142 9.20377 11.6197C9.13602 11.823 9.02506 12.004 8.87089 12.1629C8.71905 12.3217 8.51582 12.4479 8.2612 12.5413C8.00657 12.6324 7.69238 12.678 7.31862 12.678H6.85259V14.5H5.76636V9.3772H7.40272ZM7.34666 10.2672H6.85259V11.7879H7.21C7.41323 11.7879 7.5896 11.7611 7.7391 11.7073C7.88861 11.6536 8.00424 11.5695 8.086 11.4551C8.16776 11.3406 8.20864 11.1934 8.20864 11.0136C8.20864 10.7613 8.13856 10.5744 7.9984 10.4529C7.85824 10.3291 7.64099 10.2672 7.34666 10.2672Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { d: "M14.5228 11.8896C14.5228 12.4665 14.4119 12.9489 14.1899 13.3367C13.9704 13.7221 13.6515 14.013 13.2334 14.2092C12.8152 14.4031 12.3118 14.5 11.7231 14.5H10.2725V9.3772H11.8808C12.4181 9.3772 12.8841 9.47297 13.2789 9.66452C13.6737 9.85374 13.9797 10.1352 14.1969 10.509C14.4142 10.8804 14.5228 11.3406 14.5228 11.8896ZM13.3945 11.9176C13.3945 11.5392 13.3385 11.2285 13.2263 10.9855C13.1166 10.7402 12.953 10.5592 12.7358 10.4424C12.5209 10.3256 12.2546 10.2672 11.9369 10.2672H11.3587V13.603H11.8247C12.355 13.603 12.7486 13.4617 13.0056 13.179C13.2649 12.8964 13.3945 12.4759 13.3945 11.9176Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { d: "M16.6532 14.5H15.5845V9.3772H18.5209V10.2672H16.6532V11.5882H18.3912V12.4747H16.6532V14.5Z", fill: "white" })), f2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#228BE6" }), /* @__PURE__ */ r.createElement("path", { d: "M6 7.9999C6 7.66853 6.26863 7.3999 6.6 7.3999H17.4C17.7314 7.3999 18 7.66853 18 7.9999C18 8.33127 17.7314 8.5999 17.4 8.5999H6.6C6.26863 8.5999 6 8.33127 6 7.9999Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { d: "M6 11.9999C6 11.6685 6.26863 11.3999 6.6 11.3999H17.4C17.7314 11.3999 18 11.6685 18 11.9999C18 12.3313 17.7314 12.5999 17.4 12.5999H6.6C6.26863 12.5999 6 12.3313 6 11.9999Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { d: "M6.6 15.3999C6.26863 15.3999 6 15.6685 6 15.9999C6 16.3313 6.26863 16.5999 6.6 16.5999H14.4C14.7314 16.5999 15 16.3313 15 15.9999C15 15.6685 14.7314 15.3999 14.4 15.3999H6.6Z", fill: "white" })), C2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#37B24D" }), /* @__PURE__ */ r.createElement("path", { d: "M4 8.6C4 8.26863 4.26863 8 4.6 8H19.4C19.7314 8 20 8.26863 20 8.6C20 8.93137 19.7314 9.2 19.4 9.2H4.6C4.26863 9.2 4 8.93137 4 8.6Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { d: "M8.6 20C8.26863 20 8 19.7314 8 19.4L8 4.6C8 4.26863 8.26863 4 8.6 4C8.93137 4 9.2 4.26863 9.2 4.6L9.2 19.4C9.2 19.7314 8.93137 20 8.6 20Z", fill: "white" })), p2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F76707" }), /* @__PURE__ */ r.createElement("path", { d: "M19 12C19 10.8953 18.7386 9.80634 18.237 8.82207C17.7355 7.8378 17.0082 6.98619 16.1145 6.33688L12 12H19Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 17.8C15.2033 17.8 17.8 15.2033 17.8 12C17.8 8.79675 15.2033 6.2 12 6.2C8.79675 6.2 6.2 8.79675 6.2 12C6.2 15.2033 8.79675 17.8 12 17.8ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z", fill: "white" })), h2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#E64980" }), /* @__PURE__ */ r.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.79932 9.37741V5.83398H18.1565V14.1911H14.6127C14.6127 16.8496 12.4576 19.0048 9.79904 19.0048C7.14051 19.0048 4.98535 16.8496 4.98535 14.1911C4.98535 11.5326 7.14079 9.37741 9.79932 9.37741C9.79941 9.37741 9.79922 9.37741 9.79932 9.37741ZM10.9993 7.03398H16.9565V12.9911H14.462C14.0272 11.2969 12.6935 9.96308 10.9993 9.52826V7.03398ZM13.4127 14.1911C13.4127 16.1869 11.7948 17.8048 9.79904 17.8048C7.80325 17.8048 6.18535 16.1869 6.18535 14.1911C6.18535 12.1953 7.80325 10.5774 9.79904 10.5774C9.79913 10.5774 9.79894 10.5774 9.79904 10.5774L9.79932 14.1911H13.4127ZM13.2087 12.9911H10.9993V10.7815C12.0297 11.1442 12.8461 11.9607 13.2087 12.9911Z", fill: "white" })), m2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#4DABF7" }), /* @__PURE__ */ r.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.6215 10.4561C14.9164 10.1761 15.3807 10.1821 15.6683 10.4697L19.6683 14.4697C19.9612 14.7626 19.9612 15.2374 19.6683 15.5303C19.3754 15.8232 18.9005 15.8232 18.6076 15.5303L15.1244 12.0471L11.4422 15.5439C11.152 15.8194 10.6967 15.8186 10.4075 15.5421L9.00646 14.2027L5.6785 17.5304C5.38559 17.8232 4.91072 17.8232 4.61784 17.5303C4.32496 17.2374 4.32498 16.7625 4.61789 16.4696L8.46439 12.6235C8.75265 12.3353 9.21834 12.33 9.51298 12.6117L10.9275 13.9641L14.6215 10.4561Z", fill: "white" }), /* @__PURE__ */ r.createElement("path", { d: "M10.0001 8.5C10.0001 9.32843 9.32853 10 8.50011 10C7.67168 10 7.00011 9.32843 7.00011 8.5C7.00011 7.67157 7.67168 7 8.50011 7C9.32853 7 10.0001 7.67157 10.0001 8.5Z", fill: "white" })), v2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F59F00" }), /* @__PURE__ */ r.createElement("path", { d: "M8.7627 7.75794V16.2419C8.76267 16.3363 8.78782 16.4289 8.83554 16.5103C8.88327 16.5917 8.95184 16.6588 9.0342 16.7049C9.11655 16.7509 9.20969 16.7742 9.30402 16.7722C9.39834 16.7702 9.49044 16.7431 9.57079 16.6937L16.464 12.4517C16.5412 12.4043 16.605 12.3378 16.6492 12.2587C16.6934 12.1796 16.7167 12.0905 16.7167 11.9999C16.7167 11.9093 16.6934 11.8202 16.6492 11.7411C16.605 11.662 16.5412 11.5956 16.464 11.5482L9.57079 7.30617C9.49044 7.25673 9.39834 7.22963 9.30402 7.22765C9.20969 7.22568 9.11655 7.24892 9.0342 7.29496C8.95184 7.341 8.88327 7.40817 8.83554 7.48956C8.78782 7.57094 8.76267 7.66359 8.7627 7.75794Z", fill: "white" })), g2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#CC5DE8" }), /* @__PURE__ */ r.createElement("path", { d: "M15.0909 9V13.566C14.8235 13.4066 14.513 13.3153 14.1818 13.3153C13.1777 13.3153 12.3636 14.1543 12.3636 15.1892C12.3636 16.2241 13.1777 17.0631 14.1818 17.0631C15.186 17.0631 16 16.2241 16 15.1892V6.75018C16 6.23185 15.5018 5.86997 15.0281 6.0443L9.20994 8.18588C8.92049 8.29242 8.72727 8.57499 8.72727 8.89176V14.5029C8.45984 14.3435 8.14935 14.2522 7.81818 14.2522C6.81403 14.2522 6 15.0912 6 16.1261C6 17.161 6.81403 18 7.81818 18C8.82234 18 9.63636 17.161 9.63636 16.1261V11.0077L15.0909 9Z", fill: "white" })), w2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("path", { d: "M11.997 15.2043L5.45974 2.12734L18.5342 2.12734L11.997 15.2043Z", fill: "#FF6B6B" }), /* @__PURE__ */ r.createElement("path", { d: "M5 1C3.34315 1 2 2.34315 2 4V19.9973C2 21.6542 3.34315 22.9973 5 22.9973H19C20.6569 22.9973 22 21.6542 22 19.9973V4C22 2.34315 20.6569 1 19 1H16.5C16.5 1 12.8297 3.94874 12.4264 11.0247C12.1447 11.3173 11.8849 11.3025 11.5755 11.0247C11.0046 3.91723 7 1 7 1H5Z", fill: "#81A3C5" }), /* @__PURE__ */ r.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.1903 1L5.84118 1.34685C5.60611 1.58041 5.60487 1.9603 5.83842 2.19538C6.07197 2.43045 6.45187 2.43169 6.68694 2.19814L7.3283 1.56095C7.51223 1.7618 7.69814 1.97398 7.88384 2.19734L7.16905 2.74102C6.90531 2.94163 6.85413 3.31807 7.05474 3.58181C7.25535 3.84556 7.63178 3.89674 7.89553 3.69613L8.61805 3.14657C8.78504 3.37931 8.94941 3.62133 9.10947 3.8725L8.33964 4.29024C8.04839 4.44828 7.9404 4.81251 8.09845 5.10376C8.25649 5.39502 8.62072 5.503 8.91197 5.34496L9.71417 4.90965C9.83152 5.131 9.94463 5.35817 10.0526 5.59107L9.23216 5.91252C8.92362 6.03341 8.7715 6.38152 8.89239 6.69005C9.01327 6.99859 9.36138 7.15071 9.66992 7.02983L10.5093 6.70096C10.5966 6.94319 10.6778 7.19071 10.7521 7.44345L9.8859 7.65785C9.56423 7.73746 9.36801 8.06277 9.44763 8.38443C9.52725 8.70609 9.85255 8.90231 10.1742 8.8227L11.0363 8.60933C11.0575 8.71888 11.0774 8.82929 11.0959 8.94055C11.0327 9.0717 10.9973 9.21877 10.9973 9.3741V9.52462H10.2969C9.96553 9.52462 9.6969 9.79325 9.6969 10.1246C9.6969 10.456 9.96553 10.7246 10.2969 10.7246H10.9973V11.3318C9.83214 11.7436 8.99733 12.8549 8.99733 14.1611V17.1611C8.99733 17.7134 9.44505 18.1611 9.99733 18.1611H13.9973C14.5496 18.1611 14.9973 17.7134 14.9973 17.1611V14.1611C14.9973 12.8549 14.1625 11.7436 12.9973 11.3318V9.69337H13.6975C14.0288 9.69337 14.2975 9.42474 14.2975 9.09337C14.2975 8.762 14.0288 8.49337 13.6975 8.49337H12.9605C13.0027 8.23162 13.0531 7.97476 13.111 7.72285L13.9806 7.95352C14.3009 8.03847 14.6294 7.84769 14.7144 7.52739C14.7993 7.2071 14.6086 6.87858 14.2883 6.79362L13.4373 6.56791C13.5347 6.27813 13.6415 5.99597 13.7561 5.72156L14.5555 6.09989C14.855 6.24165 15.2127 6.11375 15.3545 5.81423C15.4962 5.51471 15.3683 5.15698 15.0688 5.01523L14.2684 4.63644C14.4131 4.36228 14.5647 4.09742 14.7213 3.84201L15.4632 4.33575C15.7391 4.51934 16.1115 4.44454 16.2951 4.16868C16.4787 3.89282 16.4039 3.52035 16.128 3.33676L15.3892 2.84503C15.5695 2.59738 15.7528 2.36102 15.9366 2.13615L16.6091 2.73915C16.8558 2.96036 17.2352 2.93969 17.4564 2.69297C17.6776 2.44625 17.6569 2.06691 17.4102 1.8457L16.7288 1.23476C16.8046 1.15443 16.8799 1.07617 16.9545 1H15.8574C15.8262 1.03476 15.7949 1.06984 15.7635 1.10526C14.9004 2.08038 13.9989 3.31537 13.2957 4.79138C13.2886 4.80402 13.2819 4.81701 13.2756 4.83035C13.2691 4.84389 13.2633 4.85756 13.258 4.87132C12.7642 5.92477 12.3724 7.0994 12.1671 8.38846C12.1119 8.37902 12.0552 8.3741 11.9973 8.3741C11.9329 8.3741 11.8699 8.3802 11.8088 8.39184C11.1802 5.23533 9.50654 2.77154 7.97906 1.08733C7.95245 1.058 7.92588 1.02889 7.89935 1H6.1903ZM11.9973 13.1955C11.5923 13.1955 11.2434 12.9546 11.0863 12.6083C10.5543 12.9211 10.1973 13.4994 10.1973 14.1611V16.9611H13.7973V14.1611C13.7973 13.4994 13.4403 12.9211 12.9084 12.6083C12.7512 12.9546 12.4024 13.1955 11.9973 13.1955Z", fill: "white" })), x2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("path", { d: "M2 4C2 2.34315 3.34315 1 5 1H14.7574C15.553 1 16.3161 1.31607 16.8787 1.87868L19 4L21.1213 6.12132C21.6839 6.68393 22 7.44699 22 8.24264V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4Z", fill: "#BACCDF" }), /* @__PURE__ */ r.createElement("path", { d: "M14.8999 1.00342V6.50003C14.8999 7.38368 15.6162 8.10003 16.4999 8.10003L21.9965 8.10003C21.9765 7.67959 21.8684 7.27119 21.6827 6.90003L16.4999 6.90003C16.279 6.90003 16.0999 6.72094 16.0999 6.50003L16.0999 1.31724C15.7287 1.1315 15.3203 1.02342 14.8999 1.00342Z", fill: "white" })), y2 = (t) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ r.createElement("path", { d: "M9 3C9.2198 2.99998 9.43348 3.07238 9.608 3.206L9.708 3.293L12.414 6H19C19.7652 5.99996 20.5015 6.29233 21.0583 6.81728C21.615 7.34224 21.9501 8.06011 21.995 8.824L22 9V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V6C1.99996 5.23479 2.29233 4.49849 2.81728 3.94174C3.34224 3.38499 4.06011 3.04989 4.824 3.005L5 3H9Z", fill: "#6C8196" })), E2 = {
  pdf: u2,
  doc: f2,
  excel: C2,
  ppt: p2,
  draw: h2,
  image: m2,
  video: v2,
  audio: g2,
  zip: w2
}, b2 = ({ mimeType: t }) => {
  var d;
  const c = ((d = Object.values(d2).find((w) => w.mimeType === t)) == null ? void 0 : d.iconType) ?? "";
  if (!t) return /* @__PURE__ */ i.jsx(y2, { width: 20 });
  const m = E2[c];
  return m ? /* @__PURE__ */ i.jsx(m, { width: 20 }) : /* @__PURE__ */ i.jsx(x2, { width: 20 });
}, M2 = "_row_ddbp6_1", L2 = "_highlight_ddbp6_15", T2 = "_rowCheckbox_ddbp6_23", R2 = "_rowCheckboxVisible_ddbp6_31", j2 = "_rowName_ddbp6_49", _2 = "_table_ddbp6_59", Q = {
  row: M2,
  highlight: L2,
  rowCheckbox: T2,
  rowCheckboxVisible: R2,
  rowName: j2,
  table: _2
};
function S2({
  rows: t,
  selectedRowIds: c,
  onOpenDir: m,
  onSelect: d,
  locale: w
}) {
  const x = !!t.length && t.length === c.length, p = !x && !!c.length, s = (l) => c.includes(l), f = () => d(c.length ? [] : t.map((l) => l.Id)), R = (l) => d(
    c.includes(l) ? c.filter((T) => T !== l) : c.concat(l)
  );
  return /* @__PURE__ */ i.jsx(Z.ScrollContainer, { minWidth: 0, h: "100%", children: /* @__PURE__ */ i.jsxs(
    Z,
    {
      stickyHeader: !0,
      verticalSpacing: "xs",
      horizontalSpacing: "lg",
      styles: { tr: { height: 40 } },
      className: Q.table,
      children: [
        /* @__PURE__ */ i.jsx(Z.Thead, { children: /* @__PURE__ */ i.jsxs(Z.Tr, { children: [
          /* @__PURE__ */ i.jsx(Z.Th, { c: "gray.6", fw: 500, fz: 10, tt: "uppercase", children: /* @__PURE__ */ i.jsxs(B, { gap: "xs", children: [
            /* @__PURE__ */ i.jsx(
              te,
              {
                size: "xs",
                checked: x,
                indeterminate: p,
                onChange: () => f()
              }
            ),
            " ",
            `${F(w, "ColumnName")}`
          ] }) }),
          /* @__PURE__ */ i.jsx(Z.Th, { c: "gray.6", fw: 500, fz: 10, tt: "uppercase", children: `${F(w, "ColumnChanged")}` }),
          /* @__PURE__ */ i.jsx(Z.Th, { c: "gray.6", fw: 500, fz: 10, tt: "uppercase", children: `${F(w, "ColumnSize")}` })
        ] }) }),
        /* @__PURE__ */ i.jsx(Z.Tbody, { children: t.map((l) => /* @__PURE__ */ i.jsxs(
          Z.Tr,
          {
            className: Q.row + (s(l.Id) ? ` ${Q.highlight}` : ""),
            onMouseDown: "MimeType" in l ? () => R(l.Id) : void 0,
            children: [
              /* @__PURE__ */ i.jsx(Z.Td, { fz: 13, children: /* @__PURE__ */ i.jsxs(B, { gap: "xs", styles: { root: { flexFlow: "noWrap" } }, children: [
                /* @__PURE__ */ i.jsx(H1, { h: 16, w: 16, children: "MimeType" in l && /* @__PURE__ */ i.jsx(
                  te,
                  {
                    readOnly: !0,
                    size: "xs",
                    checked: s(l.Id),
                    className: Q.rowCheckbox
                  }
                ) }),
                /* @__PURE__ */ i.jsxs(B, { gap: 10, styles: { root: { flexGrow: 1, flexWrap: "nowrap" } }, children: [
                  /* @__PURE__ */ i.jsx(
                    b2,
                    {
                      mimeType: "MimeType" in l ? l.MimeType : ""
                    }
                  ),
                  "MimeType" in l ? /* @__PURE__ */ i.jsx(
                    V1,
                    {
                      fz: 13,
                      truncate: !0,
                      c: "gray.8",
                      title: l.Name,
                      className: Q.rowName,
                      children: l.Name
                    }
                  ) : /* @__PURE__ */ i.jsx(
                    Z1,
                    {
                      truncate: !0,
                      c: "gray.8",
                      title: l.Name,
                      fz: 13,
                      fw: 500,
                      className: Q.rowName,
                      onMouseDown: (T) => T.stopPropagation(),
                      onClick: () => m(l.Id),
                      children: l.Name
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ i.jsx(Z.Td, { fz: 12, c: "dimmed", children: /* @__PURE__ */ i.jsx("span", { title: new Date(l.Timestamp).toLocaleString("ru-Ru"), children: new Date(l.Timestamp).toLocaleString("ru-Ru") }) }),
              /* @__PURE__ */ i.jsx(Z.Td, { fz: 12, c: "dimmed", children: "Size" in l ? isNaN(+l.Size) ? null : de(+l.Size, 2, w || "ru") : "-" })
            ]
          },
          l.Id
        )) })
      ]
    }
  ) });
}
const le = 3;
function k2({
  directory: t,
  isSearch: c,
  onBack: m,
  onItemClick: d,
  locale: w
}) {
  const x = m1(() => {
    if (c)
      return [
        {
          id: 0,
          title: `${F(w, "SearchResults")}`
        }
      ];
    if (!t) return [];
    let p = t.Parent;
    const s = [
      {
        title: t.Name,
        id: t.Id
      }
    ];
    for (; p; )
      s.unshift({
        title: p.Name,
        id: p.Id
      }), p = p.Parent;
    if (s.length > le) {
      const f = s.splice(1, s.length - le);
      s.splice(1, 0, { id: 0, title: "...", children: f });
    }
    return s;
  }, [t, c]);
  return /* @__PURE__ */ i.jsxs(B, { h: 48, py: 8, px: "lg", styles: { root: { flexShrink: 0 } }, children: [
    x.length > 1 && /* @__PURE__ */ i.jsx(
      v1,
      {
        variant: "subtle",
        color: "dimmed",
        size: "sm",
        ml: -2,
        onClick: m,
        children: /* @__PURE__ */ i.jsx(r2, { stroke: 1.2, size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      We,
      {
        separatorMargin: 6,
        separator: /* @__PURE__ */ i.jsx(n2, { stroke: 1.2, size: 17 }),
        children: x.map(
          (p, s) => p.children ? /* @__PURE__ */ i.jsxs(p1, { children: [
            /* @__PURE__ */ i.jsx(p1.Target, { children: /* @__PURE__ */ i.jsx(Z1, { c: "dimmed", fz: 14, children: "..." }) }),
            /* @__PURE__ */ i.jsx(p1.Dropdown, { children: p.children.map((f) => /* @__PURE__ */ i.jsx(
              p1.Item,
              {
                c: "dark",
                fz: 14,
                leftSection: /* @__PURE__ */ i.jsx(a2, { stroke: 1.2, size: 18 }),
                children: f.title
              },
              f.id
            )) })
          ] }, s) : /* @__PURE__ */ i.jsx(
            Z1,
            {
              truncate: !0,
              underline: p.id !== 0 ? "hover" : "never",
              c: s === x.length - 1 ? "dark" : "dimmed",
              fz: 14,
              fw: s === x.length - 1 ? 500 : 400,
              maw: 200,
              onClick: p.id === 0 ? void 0 : () => d(p.id),
              children: p.title
            },
            s
          )
        )
      }
    )
  ] });
}
var ue = /* @__PURE__ */ ((t) => (t[t.Docs = 16] = "Docs", t))(ue || {}), O1 = /* @__PURE__ */ ((t) => (t[t.Id = 0] = "Id", t[t.Name = 1] = "Name", t[t.Type = 2] = "Type", t[t.Size = 3] = "Size", t[t.Author = 4] = "Author", t[t.Date = 5] = "Date", t[t.UpdateDate = 6] = "UpdateDate", t))(O1 || {}), I1 = /* @__PURE__ */ ((t) => (t[t.Asc = 0] = "Asc", t[t.Desc = 1] = "Desc", t))(I1 || {});
const w1 = qe.create({
  baseURL: "/api"
}), oe = (t) => w1.get("v1/DocumentDirectory/Get", { params: t }), F2 = (t) => w1.get("v1/DocumentDirectory/Search", {
  params: { ...t, field: "All" }
});
function H2({
  enabledLinks: t,
  count: c,
  size: m,
  isLimitExceeded: d,
  onClose: w,
  onAttachFiles: x,
  onCreateLink: p,
  locale: s
}) {
  const f = g1("(max-width: 768px)"), R = g1("(max-width: 640px)");
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    d && /* @__PURE__ */ i.jsx(B, { h: 61, bg: "yellow.4", px: "md", children: /* @__PURE__ */ i.jsx(V1, { fz: 13, c: "dark.7", lh: 1.4, children: `${F(s, "MaxSizeLimitPartOne")} ${t ? F(s, "MaxSizeLimitPartOne") : ""}` }) }),
    /* @__PURE__ */ i.jsxs(
      Ue,
      {
        direction: R ? "column" : "row",
        align: "center",
        justify: R ? "center" : "space-between",
        gap: 6,
        bg: "blue",
        c: "#fff",
        px: "md",
        h: 76,
        w: "100%",
        children: [
          /* @__PURE__ */ i.jsxs(B, { gap: "xs", children: [
            /* @__PURE__ */ i.jsx(v1, { onClick: w, children: /* @__PURE__ */ i.jsx(P1, { size: 21, color: "#fff" }) }),
            /* @__PURE__ */ i.jsx(V1, { fz: f ? 13 : 15, children: `${F(s, "FilesSelected")}: ${c} (${m})` })
          ] }),
          /* @__PURE__ */ i.jsxs(B, { gap: "xs", children: [
            /* @__PURE__ */ i.jsx(
              F1,
              {
                size: f ? "xs" : "",
                disabled: d,
                variant: "outline",
                color: "#fff",
                onClick: x,
                styles: d ? {
                  root: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #fff",
                    opacity: 0.4
                  }
                } : {},
                children: c === 1 ? F(s, "AttachFile") : F(s, "AttachFiles")
              }
            ),
            t && /* @__PURE__ */ i.jsx(
              F1,
              {
                size: f ? "xs" : "",
                variant: "default",
                onClick: p,
                children: c === 1 ? F(s, "AddLink") : F(s, "AddLinks")
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const V2 = 26214400, Z2 = (t) => {
  const c = Object.fromEntries(
    Object.entries({
      ...t,
      expirationDate: t.expirationDate ? t.expirationDate.toJSON() : void 0
    }).filter((m) => m[1] !== void 0)
  );
  return w1.get("v1/Link/Generate", { params: c });
};
var fe = /* @__PURE__ */ ((t) => (t[t.LockCopy = -16384] = "LockCopy", t[t.LockPrint = -8192] = "LockPrint", t[t.Deny = -4096] = "Deny", t[t.OnlyUpload = -1024] = "OnlyUpload", t[t.FreeBusy = -64] = "FreeBusy", t[t.Read = 0] = "Read", t[t.Comment = 1] = "Comment", t[t.Review = 2] = "Review", t[t.Write = 4] = "Write", t[t.Delete = 8] = "Delete", t[t.FullInternal = 256] = "FullInternal", t[t.Full = 512] = "Full", t[t.Lock = 4096] = "Lock", t))(fe || {}), Ce = /* @__PURE__ */ ((t) => (t[t.SingleCall = 0] = "SingleCall", t[t.FiveMinutes = 1] = "FiveMinutes", t[t.OneHour = 2] = "OneHour", t[t.Day = 3] = "Day", t[t.Week = 4] = "Week", t[t.Month = 5] = "Month", t[t.Year = 6] = "Year", t[t.Unlimited = 10] = "Unlimited", t[t.Internal = 11] = "Internal", t))(Ce || {});
const se = {
  id: "",
  sortField: O1.Id,
  sortOrder: I1.Desc
};
function B2({
  opened: t,
  enabledLinks: c = !1,
  maxSizeAttachments: m = V2,
  onClose: d,
  onAttachFiles: w,
  offsetSize: x = 0,
  onCreateLink: p,
  locale: s = "en"
}) {
  const [f, R] = N(se), [l, T] = N(null), [S, O] = N(null), [G, o1] = N(!1), [A, P] = N([]), [b, J] = N([]), [x1, I] = N(!1), y1 = g1("(max-width: 640px)"), D = m1(() => S ? [...S.Directory.Items, ...S.Document.Items] : [...(l == null ? void 0 : l.Children) ?? [], ...(l == null ? void 0 : l.Documents) ?? []], [l, S]), W = m1(
    () => {
      let h = D.filter((y) => A.includes(y.Id));
      const M = h.map((y) => y.Id), j = b.filter((y) => !M.includes(y.Id));
      return j.length && (h = [...j, ...h]), h;
    },
    [D, A, b]
  ), e1 = m1(
    () => W.reduce((h, M) => h + M.Size, 0),
    [W]
  ), s1 = x + e1 > m, $ = Ae(
    async (h) => {
      I(!0);
      try {
        const { data: M } = await oe(h);
        T(M[0]), O(null);
      } finally {
        I(!1);
      }
    },
    []
  ), c1 = async (h) => {
    if (!h)
      await $(f), o1(!1);
    else {
      o1(!0), I(!0);
      try {
        const { data: M } = await F2({ text: h });
        O(M), T(null);
      } finally {
        I(!1);
      }
    }
  }, H = async () => {
    var M, j;
    I(!0);
    const h = W;
    try {
      const q = (await Promise.all(
        h.map(
          (U) => w1.get(`/v1/Documents/Download?id=${U.Id}&download=false`, {
            responseType: "blob"
          })
        )
      )).map(
        (U, t1) => new File([U.data], h[t1].Name, {
          type: U.headers["content-type"] ?? h[t1].MimeType
        })
      );
      P([]), J([]), w(q), d();
    } catch (y) {
      Ke(y) && console.error(
        ((j = (M = y.response) == null ? void 0 : M.data) == null ? void 0 : j.ErrorMessage) ?? "Неизвестная ошибка"
      );
    } finally {
      I(!1);
    }
  }, z = async () => {
    I(!0);
    try {
      const h = await Promise.all(
        W.map(
          (M) => Z2({
            id: M.Id,
            accessType: fe.Read,
            lifeTime: Ce.Unlimited,
            type: "Document"
          })
        )
      );
      p(
        h.map((M, j) => ({
          link: M.data,
          item: W[j]
        }))
      ), d();
    } finally {
      I(!1);
    }
  };
  return $e(() => {
    if (t)
      return (async () => {
        const y = {
          id: (await oe()).data.find(
            (q) => q.Type === ue.Docs
          ).Id,
          sortField: O1.Id,
          sortOrder: I1.Desc
        };
        R(y), $(y);
      })(), () => {
        R(se), T(null), O(null), P([]), J([]);
      };
  }, [t, $]), /* @__PURE__ */ i.jsx(Ye, { theme: { fontFamily: "Roboto, sans-serif" }, children: /* @__PURE__ */ i.jsx(
    Ge,
    {
      centered: !0,
      withCloseButton: !1,
      closeOnEscape: !1,
      opened: t,
      size: 950,
      radius: "lg",
      padding: 0,
      onClose: d,
      children: /* @__PURE__ */ i.jsxs(H1, { h: 590, pos: "relative", children: [
        /* @__PURE__ */ i.jsx(Je, { visible: x1 }),
        /* @__PURE__ */ i.jsx(c2, { onSearch: c1, onClose: d, locale: s }),
        /* @__PURE__ */ i.jsx(
          k2,
          {
            directory: l,
            isSearch: G,
            onBack: () => $({
              ...f,
              id: l.ParentId
            }),
            onItemClick: (h) => $({ ...f, id: h }),
            locale: s
          }
        ),
        /* @__PURE__ */ i.jsx(
          H1,
          {
            style: {
              height: `calc(100% - 48px - 64px - ${A.length ? 76 : 0}px  + ${y1 ? 16 : 0}px - ${s1 ? 61 : 0}px)`
            },
            children: /* @__PURE__ */ i.jsx(
              S2,
              {
                rows: D,
                selectedRowIds: A,
                onOpenDir: (h) => $({ ...f, id: h }),
                onSelect: (h) => {
                  P(h);
                  const M = D == null ? void 0 : D.map((y) => y.Id), j = b.filter((y) => !M.includes(y.Id));
                  J(j != null && j.length ? [...j, ...D.filter((y) => h.includes(y.Id))] : D.filter((y) => h.includes(y.Id)));
                },
                locale: s
              }
            )
          }
        ),
        !!A.length && /* @__PURE__ */ i.jsx(
          H2,
          {
            enabledLinks: c,
            count: A.length,
            size: de(e1, 2, s),
            isLimitExceeded: s1,
            onClose: () => {
              P([]), J([]);
            },
            onAttachFiles: H,
            onCreateLink: z,
            locale: s
          }
        )
      ] })
    }
  ) });
}
export {
  B2 as ShareDisk
};
