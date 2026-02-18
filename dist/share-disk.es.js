import * as n from "react";
import H1, { forwardRef as _1, createElement as c1, useState as Z, useMemo as e1, useCallback as S1, useEffect as Z1 } from "react";
import { Group as H, TextInput as F1, ActionIcon as t1, Button as d1, Table as L, Checkbox as g1, Box as C1, Text as p1, Anchor as m1, Breadcrumbs as V1, Menu as Q, Flex as A1, MantineProvider as B1, Modal as z1, LoadingOverlay as I1 } from "@mantine/core";
import P1, { isAxiosError as N1 } from "axios";
import { useMediaQuery as n1 } from "@mantine/hooks";
var K = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x1;
function O1() {
  if (x1) return Y;
  x1 = 1;
  var e = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function C(c, d, p) {
    var o = null;
    if (p !== void 0 && (o = "" + p), d.key !== void 0 && (o = "" + d.key), "key" in d) {
      p = {};
      for (var a in d)
        a !== "key" && (p[a] = d[a]);
    } else p = d;
    return d = p.ref, {
      $$typeof: e,
      type: c,
      key: o,
      ref: d !== void 0 ? d : null,
      props: p
    };
  }
  return Y.Fragment = s, Y.jsx = C, Y.jsxs = C, Y;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w1;
function D1() {
  return w1 || (w1 = 1, process.env.NODE_ENV !== "production" && function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === S ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case j:
          return "Fragment";
        case D:
          return "Profiler";
        case B:
          return "StrictMode";
        case a1:
          return "Suspense";
        case R:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case G:
            return "Portal";
          case r1:
            return t.displayName || "Context";
          case z:
            return (t._context.displayName || "Context") + ".Consumer";
          case k:
            var i = t.render;
            return t = t.displayName, t || (t = i.displayName || i.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case F:
            return i = t.displayName || null, i !== null ? i : e(t.type) || "Memo";
          case I:
            i = t._payload, t = t._init;
            try {
              return e(t(i));
            } catch {
            }
        }
      return null;
    }
    function s(t) {
      return "" + t;
    }
    function C(t) {
      try {
        s(t);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var f = i.error, w = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), s(t);
      }
    }
    function c(t) {
      if (t === j) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === I)
        return "<...>";
      try {
        var i = e(t);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var t = $.A;
      return t === null ? null : t.getOwner();
    }
    function p() {
      return Error("react-stack-top-frame");
    }
    function o(t) {
      if (q.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function a(t, i) {
      function f() {
        x || (x = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: f,
        configurable: !0
      });
    }
    function u() {
      var t = e(this.type);
      return E[t] || (E[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function g(t, i, f, w, X, o1) {
      var v = f.ref;
      return t = {
        $$typeof: A,
        type: t,
        key: i,
        props: f,
        _owner: w
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: o1
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function r(t, i, f, w, X, o1) {
      var v = i.children;
      if (v !== void 0)
        if (w)
          if (i1(v)) {
            for (w = 0; w < v.length; w++)
              y(v[w]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(v);
      if (q.call(i, "key")) {
        v = e(t);
        var N = Object.keys(i).filter(function(R1) {
          return R1 !== "key";
        });
        w = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", V[v + w] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          v,
          N,
          v
        ), V[v + w] = !0);
      }
      if (v = null, f !== void 0 && (C(f), v = "" + f), o(i) && (C(i.key), v = "" + i.key), "key" in i) {
        f = {};
        for (var s1 in i)
          s1 !== "key" && (f[s1] = i[s1]);
      } else f = i;
      return v && a(
        f,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), g(
        t,
        v,
        f,
        d(),
        X,
        o1
      );
    }
    function y(t) {
      _(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === I && (t._payload.status === "fulfilled" ? _(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function _(t) {
      return typeof t == "object" && t !== null && t.$$typeof === A;
    }
    var b = H1, A = Symbol.for("react.transitional.element"), G = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), r1 = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), a1 = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), S = Symbol.for("react.client.reference"), $ = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, i1 = Array.isArray, m = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var x, E = {}, h = b.react_stack_bottom_frame.bind(
      b,
      p
    )(), P = m(c(p)), V = {};
    U.Fragment = j, U.jsx = function(t, i, f) {
      var w = 1e4 > $.recentlyCreatedOwnerStacks++;
      return r(
        t,
        i,
        f,
        !1,
        w ? Error("react-stack-top-frame") : h,
        w ? m(c(t)) : P
      );
    }, U.jsxs = function(t, i, f) {
      var w = 1e4 > $.recentlyCreatedOwnerStacks++;
      return r(
        t,
        i,
        f,
        !0,
        w ? Error("react-stack-top-frame") : h,
        w ? m(c(t)) : P
      );
    };
  }()), U;
}
var v1;
function $1() {
  return v1 || (v1 = 1, process.env.NODE_ENV === "production" ? K.exports = O1() : K.exports = D1()), K.exports;
}
var l = $1();
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Y1 = {
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
const W = (e, s, C, c) => {
  const d = _1(
    ({ color: p = "currentColor", size: o = 24, stroke: a = 2, title: u, className: g, children: r, ...y }, _) => c1(
      "svg",
      {
        ref: _,
        ...Y1[e],
        width: o,
        height: o,
        className: ["tabler-icon", `tabler-icon-${s}`, g].join(" "),
        strokeWidth: a,
        stroke: p,
        ...y
      },
      [
        u && c1("title", { key: "svg-title" }, u),
        ...c.map(([b, A]) => c1(b, A)),
        ...Array.isArray(r) ? r : [r]
      ]
    )
  );
  return d.displayName = `${C}`, d;
};
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var U1 = W("outline", "arrow-up", "IconArrowUp", [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M18 11l-6 -6", key: "svg-1" }], ["path", { d: "M6 11l6 -6", key: "svg-2" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var W1 = W("outline", "chevron-right", "IconChevronRight", [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var G1 = W("outline", "folder", "IconFolder", [["path", { d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var J1 = W("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var h1 = W("outline", "x", "IconX", [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]]);
const q1 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("path", { d: "M23.3257 16.0001C23.3257 20.0461 20.0458 23.326 15.9999 23.326C11.954 23.326 8.67407 20.0461 8.67407 16.0001C8.67407 11.9542 11.954 8.67432 15.9999 8.67432C20.0458 8.67432 23.3257 11.9542 23.3257 16.0001ZM10.9132 16.0001C10.9132 18.8094 13.1906 21.0868 15.9999 21.0868C18.8092 21.0868 21.0866 18.8094 21.0866 16.0001C21.0866 13.1908 18.8092 10.9134 15.9999 10.9134C13.1906 10.9134 10.9132 13.1908 10.9132 16.0001Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { d: "M31.6433 12.6405C32.2562 15.4944 32.0767 18.4615 31.1243 21.2207C30.1719 23.9799 28.4828 26.4259 26.24 28.294L20.0443 20.8556C20.9301 20.1178 21.5972 19.1517 21.9734 18.0619C22.3496 16.9722 22.4205 15.8003 22.1784 14.6732L31.6433 12.6405Z", fill: "#DA77F2" }), /* @__PURE__ */ n.createElement("path", { d: "M27.3137 4.68629C29.5378 6.91035 31.057 9.74059 31.6815 12.8233L22.1935 14.7453C21.9468 13.5278 21.3468 12.41 20.4684 11.5316L27.3137 4.68629Z", fill: "#FFA94D" }), /* @__PURE__ */ n.createElement("path", { d: "M15.7109 0.00261191C17.9572 -0.0379809 20.1868 0.394937 22.2547 1.27318C24.3225 2.15143 26.1823 3.45532 27.7128 5.09996L20.626 11.695C20.0215 11.0454 19.287 10.5305 18.4703 10.1836C17.6536 9.83672 16.773 9.66573 15.8858 9.68177L15.7109 0.00261191Z", fill: "#FCC419" }), /* @__PURE__ */ n.createElement("path", { d: "M25.5347 3.1513C26.5177 3.88076 27.4138 4.72063 28.2053 5.65441L20.8205 11.914C20.5079 11.5452 20.154 11.2135 19.7658 10.9254L25.5347 3.1513Z", fill: "#3BC9DB" }), /* @__PURE__ */ n.createElement("path", { d: "M11.1781 31.2561C8.44451 30.3921 5.99326 28.8095 4.08072 26.6738C2.16817 24.5381 0.864593 21.9278 0.306308 19.1158L9.80171 17.2306C10.0222 18.3412 10.5371 19.3722 11.2924 20.2157C12.0478 21.0592 13.0159 21.6842 14.0956 22.0255L11.1781 31.2561Z", fill: "#51CF66" }), /* @__PURE__ */ n.createElement("path", { d: "M2.08871 8.09582C3.48409 5.63996 5.50473 3.59727 7.94529 2.17532C10.3859 0.753373 13.1593 0.00284454 15.9839 8.06746e-06L15.9937 9.68074C14.8781 9.68186 13.7827 9.97828 12.8188 10.5399C11.8548 11.1015 11.0568 11.9083 10.5057 12.8782L2.08871 8.09582Z", fill: "#FFD43B" }), /* @__PURE__ */ n.createElement("path", { d: "M27.3137 27.3137C25.828 28.7994 24.0641 29.978 22.1229 30.7821C20.1817 31.5861 18.1011 32 16 32L16 22.3193C16.8299 22.3193 17.6516 22.1558 18.4183 21.8382C19.185 21.5207 19.8816 21.0552 20.4684 20.4684L27.3137 27.3137Z", fill: "#339AF0" }), /* @__PURE__ */ n.createElement("path", { d: "M29.5177 24.5599C28.8314 25.6437 28.0172 26.6411 27.0926 27.5305L20.3811 20.554C20.7462 20.2028 21.0678 19.8088 21.3389 19.3808L29.5177 24.5599Z", fill: "#BE4BDB" }), /* @__PURE__ */ n.createElement("path", { d: "M0.542532 20.1312C-0.0620174 17.8692 -0.162742 15.502 0.247467 13.1968C0.657676 10.8916 1.56882 8.70457 2.9166 6.78997L10.8327 12.3625C10.3003 13.1186 9.94049 13.9824 9.77847 14.8929C9.61646 15.8033 9.65624 16.7382 9.89501 17.6316L0.542532 20.1312Z", fill: "#FF922B" }), /* @__PURE__ */ n.createElement("path", { d: "M0.545187 11.8589C1.23402 9.28815 2.55324 6.92984 4.38338 4.99754L11.412 11.6545C10.6891 12.4177 10.1681 13.3491 9.89606 14.3645L0.545187 11.8589Z", fill: "#FFA94D" }), /* @__PURE__ */ n.createElement("path", { d: "M16 32C14.002 32 12.0217 31.6258 10.1615 30.8967L13.6941 21.8835C14.4288 22.1715 15.2109 22.3193 16 22.3193L16 32Z", fill: "#22B8CF" })), X1 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 102, height: 32, viewBox: "0 0 102 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("path", { d: "M52.3132 21.9581L56.3132 12.1449C56.3539 12.1041 56.3132 12.0294 56.2385 12.0294H52.6663C52.6392 12.0294 52.6143 12.0158 52.5916 11.9887L51.3624 10.0124C51.3217 9.97167 51.3624 9.89697 51.4371 9.89697H58.7376C58.7784 9.89697 58.8123 9.93772 58.8123 9.97847V11.5201L54.7376 22.0803C54.7376 22.1211 54.6969 22.1211 54.6629 22.1211H52.4354C52.32 22.0803 52.2792 22.0396 52.32 21.9649L52.3132 21.9581Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M58.1399 17.924L58.7986 16.0497C58.7986 16.0089 58.8326 16.0089 58.8665 16.0089H62.1263C62.1602 16.0089 62.1942 16.0497 62.1942 16.0904V17.9648C62.1942 18.0055 62.1602 18.0463 62.1263 18.0463H58.167C58.1331 18.0055 58.0991 17.9648 58.1331 17.924H58.1399Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M45.7629 9.90073C46.8712 9.90073 47.7847 10.0344 48.5031 10.3017C49.2272 10.5691 49.7647 10.9729 50.1156 11.5131C50.4665 12.0534 50.6419 12.7357 50.6419 13.56C50.6419 14.117 50.5361 14.6043 50.3244 15.022C50.1128 15.4398 49.8343 15.7934 49.489 16.0831C49.1437 16.3727 48.7705 16.6094 48.3695 16.7932L51.9619 22.115H49.088L46.1722 17.4281H44.7938V22.115H42.2039V9.90073H45.7629ZM45.5791 12.0228H44.7938V15.3228H45.6292C46.4869 15.3228 47.0996 15.1808 47.4672 14.8967C47.8404 14.6071 48.0269 14.1838 48.0269 13.6268C48.0269 13.0476 47.8264 12.6354 47.4254 12.3904C47.03 12.1453 46.4145 12.0228 45.5791 12.0228Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M73.938 15.8909C73.938 17.2666 73.6734 18.4167 73.1443 19.3413C72.6207 20.2603 71.8605 20.9537 70.8635 21.4216C69.8665 21.8839 68.6663 22.115 67.2627 22.115H63.804V9.90073H67.6387C68.9197 9.90073 70.0308 10.1291 70.9721 10.5858C71.9134 11.0369 72.643 11.7081 73.161 12.5992C73.679 13.4848 73.938 14.582 73.938 15.8909ZM71.2478 15.9577C71.2478 15.0554 71.1141 14.3147 70.8468 13.7354C70.585 13.1506 70.1951 12.719 69.6772 12.4405C69.1648 12.162 68.5298 12.0228 67.7723 12.0228H66.3938V19.9762H67.505C68.7693 19.9762 69.7078 19.6393 70.3205 18.9653C70.9387 18.2914 71.2478 17.2889 71.2478 15.9577Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M76.1272 22.115V9.90073H78.7171V22.115H76.1272Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M88.6592 18.7231C88.6592 19.4471 88.4838 20.0765 88.1329 20.6112C87.782 21.1459 87.2696 21.558 86.5957 21.8476C85.9273 22.1373 85.1141 22.2821 84.1562 22.2821C83.7329 22.2821 83.3179 22.2542 82.9113 22.1985C82.5103 22.1428 82.1232 22.0621 81.7501 21.9563C81.3825 21.8449 81.0316 21.7084 80.6974 21.5469V19.1408C81.2767 19.397 81.8782 19.6281 82.502 19.8342C83.1258 20.0403 83.744 20.1433 84.3567 20.1433C84.78 20.1433 85.1197 20.0876 85.3759 19.9762C85.6377 19.8649 85.8271 19.7117 85.944 19.5167C86.061 19.3218 86.1195 19.099 86.1195 18.8484C86.1195 18.5421 86.0164 18.2803 85.8104 18.0631C85.6043 17.8458 85.3202 17.6426 84.9582 17.4532C84.6017 17.2638 84.1979 17.0605 83.7468 16.8433C83.4627 16.7096 83.1536 16.5481 82.8194 16.3587C82.4853 16.1638 82.1678 15.9271 81.867 15.6486C81.5663 15.3701 81.3184 15.0332 81.1235 14.6377C80.9341 14.2367 80.8394 13.7577 80.8394 13.2007C80.8394 12.4711 81.0065 11.8473 81.3407 11.3293C81.6749 10.8114 82.1511 10.4159 82.7693 10.143C83.3931 9.86452 84.1283 9.72528 84.9749 9.72528C85.6098 9.72528 86.2142 9.80047 86.7878 9.95085C87.3671 10.0957 87.9714 10.3073 88.6008 10.5858L87.7653 12.5992C87.2028 12.3709 86.6987 12.1954 86.2531 12.0729C85.8076 11.9448 85.3536 11.8807 84.8914 11.8807C84.5683 11.8807 84.2926 11.9337 84.0643 12.0395C83.8359 12.1397 83.6633 12.2845 83.5463 12.4739C83.4293 12.6577 83.3708 12.8721 83.3708 13.1172C83.3708 13.4068 83.4544 13.6519 83.6215 13.8524C83.7941 14.0473 84.0503 14.2367 84.3901 14.4205C84.7354 14.6043 85.1643 14.8187 85.6767 15.0638C86.3005 15.359 86.8324 15.6681 87.2724 15.9911C87.718 16.3086 88.0605 16.6846 88.3 17.119C88.5395 17.5479 88.6592 18.0826 88.6592 18.7231Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M100.356 22.115H97.4151L94.2153 16.9686L93.1209 17.7539V22.115H90.531V9.90073H93.1209V15.4899C93.2935 15.2504 93.4634 15.0109 93.6305 14.7714C93.7976 14.5319 93.9675 14.2924 94.1401 14.0529L97.4485 9.90073H100.322L96.0617 15.3061L100.356 22.115Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M24.3257 16.0001C24.3257 20.046 21.0458 23.3259 16.9999 23.3259C12.954 23.3259 9.67407 20.046 9.67407 16.0001C9.67407 11.9542 12.954 8.67427 16.9999 8.67427C21.0458 8.67427 24.3257 11.9542 24.3257 16.0001ZM11.9132 16.0001C11.9132 18.8094 14.1906 21.0868 16.9999 21.0868C19.8092 21.0868 22.0866 18.8094 22.0866 16.0001C22.0866 13.1908 19.8092 10.9134 16.9999 10.9134C14.1906 10.9134 11.9132 13.1908 11.9132 16.0001Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { d: "M32.6434 12.6405C33.2562 15.4944 33.0767 18.4615 32.1243 21.2207C31.1719 23.9799 29.4828 26.4259 27.24 28.294L21.0443 20.8556C21.9302 20.1178 22.5973 19.1517 22.9734 18.0619C23.3496 16.9722 23.4205 15.8003 23.1784 14.6732L32.6434 12.6405Z", fill: "#DA77F2" }), /* @__PURE__ */ n.createElement("path", { d: "M28.3137 4.68629C30.5378 6.91035 32.057 9.74059 32.6815 12.8233L23.1935 14.7453C22.9468 13.5278 22.3468 12.41 21.4684 11.5316L28.3137 4.68629Z", fill: "#FFA94D" }), /* @__PURE__ */ n.createElement("path", { d: "M16.7109 0.00261191C18.9572 -0.0379809 21.1868 0.394937 23.2547 1.27318C25.3225 2.15143 27.1823 3.45532 28.7128 5.09996L21.626 11.695C21.0215 11.0454 20.287 10.5305 19.4703 10.1836C18.6536 9.83672 17.773 9.66573 16.8858 9.68177L16.7109 0.00261191Z", fill: "#FCC419" }), /* @__PURE__ */ n.createElement("path", { d: "M26.5347 3.1513C27.5177 3.88076 28.4138 4.72063 29.2053 5.65441L21.8205 11.914C21.5079 11.5452 21.154 11.2135 20.7658 10.9254L26.5347 3.1513Z", fill: "#3BC9DB" }), /* @__PURE__ */ n.createElement("path", { d: "M12.1781 31.2561C9.44452 30.3921 6.99327 28.8095 5.08072 26.6738C3.16817 24.5381 1.86459 21.9278 1.30631 19.1158L10.8017 17.2306C11.0222 18.3412 11.5371 19.3722 12.2924 20.2157C13.0478 21.0592 14.0159 21.6842 15.0956 22.0255L12.1781 31.2561Z", fill: "#51CF66" }), /* @__PURE__ */ n.createElement("path", { d: "M3.08872 8.09582C4.48409 5.63997 6.50473 3.59727 8.9453 2.17532C11.3859 0.753373 14.1594 0.00284454 16.9839 8.06746e-06L16.9937 9.68074C15.8781 9.68186 14.7827 9.97828 13.8188 10.5399C12.8549 11.1015 12.0568 11.9083 11.5057 12.8782L3.08872 8.09582Z", fill: "#FFD43B" }), /* @__PURE__ */ n.createElement("path", { d: "M28.3137 27.3137C26.828 28.7994 25.0642 29.978 23.123 30.7821C21.1817 31.5861 19.1012 32 17 32V22.3193C17.8299 22.3193 18.6516 22.1558 19.4183 21.8382C20.185 21.5207 20.8816 21.0552 21.4684 20.4684L28.3137 27.3137Z", fill: "#339AF0" }), /* @__PURE__ */ n.createElement("path", { d: "M30.5177 24.5599C29.8314 25.6437 29.0172 26.6411 28.0927 27.5305L21.3811 20.554C21.7462 20.2028 22.0678 19.8088 22.3389 19.3808L30.5177 24.5599Z", fill: "#BE4BDB" }), /* @__PURE__ */ n.createElement("path", { d: "M1.54253 20.1312C0.937983 17.8692 0.837258 15.502 1.24747 13.1968C1.65768 10.8916 2.56882 8.70457 3.9166 6.78997L11.8327 12.3625C11.3004 13.1186 10.9405 13.9824 10.7785 14.8929C10.6165 15.8033 10.6562 16.7382 10.895 17.6316L1.54253 20.1312Z", fill: "#FF922B" }), /* @__PURE__ */ n.createElement("path", { d: "M1.54519 11.8589C2.23402 9.28815 3.55324 6.92984 5.38338 4.99754L12.412 11.6545C11.6892 12.4177 11.1681 13.3491 10.8961 14.3645L1.54519 11.8589Z", fill: "#FFA94D" }), /* @__PURE__ */ n.createElement("path", { d: "M17 32C15.002 32 13.0217 31.6258 11.1615 30.8967L14.6941 21.8835C15.4288 22.1715 16.2109 22.3193 17 22.3193V32Z", fill: "#22B8CF" })), Q1 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 110, height: 32, viewBox: "0 0 110 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("g", { clipPath: "url(#clip0_939_11669)" }, /* @__PURE__ */ n.createElement("path", { d: "M23.6591 16.0001C23.6591 20.0461 20.3792 23.326 16.3333 23.326C12.2873 23.326 9.00745 20.0461 9.00745 16.0001C9.00745 11.9542 12.2873 8.67432 16.3333 8.67432C20.3792 8.67432 23.6591 11.9542 23.6591 16.0001ZM11.2466 16.0001C11.2466 18.8094 13.524 21.0868 16.3333 21.0868C19.1426 21.0868 21.42 18.8094 21.42 16.0001C21.42 13.1908 19.1426 10.9134 16.3333 10.9134C13.524 10.9134 11.2466 13.1908 11.2466 16.0001Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { d: "M31.9767 12.6405C32.5896 15.4944 32.4101 18.4615 31.4577 21.2207C30.5053 23.9799 28.8162 26.4259 26.5734 28.294L20.3777 20.8556C21.2635 20.1178 21.9306 19.1517 22.3068 18.0619C22.683 16.9722 22.7539 15.8003 22.5118 14.6732L31.9767 12.6405Z", fill: "#DA77F2" }), /* @__PURE__ */ n.createElement("path", { d: "M27.6471 4.68629C29.8712 6.91035 31.3904 9.74059 32.0149 12.8233L22.5269 14.7453C22.2802 13.5278 21.6802 12.41 20.8018 11.5316L27.6471 4.68629Z", fill: "#FFA94D" }), /* @__PURE__ */ n.createElement("path", { d: "M16.0443 0.00261191C18.2906 -0.0379809 20.5202 0.394937 22.5881 1.27318C24.6559 2.15143 26.5157 3.45532 28.0462 5.09996L20.9594 11.695C20.3549 11.0454 19.6204 10.5305 18.8037 10.1836C17.987 9.83672 17.1064 9.66573 16.2192 9.68177L16.0443 0.00261191Z", fill: "#FCC419" }), /* @__PURE__ */ n.createElement("path", { d: "M25.8681 3.1513C26.8511 3.88076 27.7472 4.72063 28.5387 5.65441L21.1539 11.914C20.8413 11.5452 20.4874 11.2135 20.0992 10.9254L25.8681 3.1513Z", fill: "#3BC9DB" }), /* @__PURE__ */ n.createElement("path", { d: "M11.5115 31.2561C8.77789 30.3921 6.32664 28.8095 4.41409 26.6738C2.50155 24.5381 1.19797 21.9278 0.639682 19.1158L10.1351 17.2306C10.3556 18.3412 10.8704 19.3722 11.6258 20.2157C12.3812 21.0592 13.3493 21.6842 14.429 22.0255L11.5115 31.2561Z", fill: "#51CF66" }), /* @__PURE__ */ n.createElement("path", { d: "M2.42209 8.09582C3.81747 5.63996 5.83811 3.59727 8.27867 2.17532C10.7192 0.753373 13.4927 0.00284454 16.3173 8.06746e-06L16.327 9.68074C15.2115 9.68186 14.1161 9.97828 13.1521 10.5399C12.1882 11.1015 11.3902 11.9083 10.8391 12.8782L2.42209 8.09582Z", fill: "#FFD43B" }), /* @__PURE__ */ n.createElement("path", { d: "M27.6471 27.3137C26.1614 28.7994 24.3975 29.978 22.4563 30.7821C20.5151 31.5861 18.4345 32 16.3334 32L16.3334 22.3193C17.1632 22.3193 17.985 22.1558 18.7517 21.8382C19.5184 21.5207 20.215 21.0552 20.8018 20.4684L27.6471 27.3137Z", fill: "#339AF0" }), /* @__PURE__ */ n.createElement("path", { d: "M29.8511 24.5599C29.1648 25.6437 28.3506 26.6411 27.426 27.5305L20.7145 20.554C21.0796 20.2028 21.4012 19.8088 21.6723 19.3808L29.8511 24.5599Z", fill: "#BE4BDB" }), /* @__PURE__ */ n.createElement("path", { d: "M0.875906 20.1312C0.271357 17.8692 0.170632 15.502 0.580841 13.1968C0.991051 10.8916 1.9022 8.70457 3.24997 6.78997L11.166 12.3625C10.6337 13.1186 10.2739 13.9824 10.1119 14.8929C9.94984 15.8033 9.98962 16.7382 10.2284 17.6316L0.875906 20.1312Z", fill: "#FF922B" }), /* @__PURE__ */ n.createElement("path", { d: "M0.878561 11.8589C1.56739 9.28815 2.88661 6.92984 4.71676 4.99754L11.7454 11.6545C11.0225 12.4177 10.5015 13.3491 10.2294 14.3645L0.878561 11.8589Z", fill: "#FFA94D" }), /* @__PURE__ */ n.createElement("path", { d: "M16.3334 32C14.3354 32 12.3551 31.6258 10.4949 30.8967L14.0274 21.8835C14.7621 22.1715 15.5443 22.3193 16.3334 22.3193L16.3334 32Z", fill: "#22B8CF" }), /* @__PURE__ */ n.createElement("path", { d: "M51.1469 21.9415L55.1469 12.1282C55.1877 12.0875 55.1469 12.0128 55.0722 12.0128H51.5001C51.4729 12.0128 51.448 11.9992 51.4254 11.9721L50.1962 9.99582C50.1554 9.95507 50.1962 9.88037 50.2709 9.88037H57.5714C57.6121 9.88037 57.6461 9.92112 57.6461 9.96186V11.5035L53.5714 22.0637C53.5714 22.1045 53.5306 22.1045 53.4967 22.1045H51.2692C51.1537 22.0637 51.113 22.023 51.1537 21.9483L51.1469 21.9415Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M56.9734 17.9075L57.6321 16.0332C57.6321 15.9924 57.6661 15.9924 57.7 15.9924H60.9598C60.9937 15.9924 61.0277 16.0332 61.0277 16.0739V17.9483C61.0277 17.989 60.9937 18.0298 60.9598 18.0298H57.0005C56.9666 17.989 56.9326 17.9483 56.9666 17.9075H56.9734Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M50.1687 13.6358C50.1687 14.9397 49.7544 15.9313 48.8784 16.6443C48.0023 17.3167 46.7935 17.6698 45.2111 17.6698H44.0431V22.0976H41.3334V9.87354H45.4149C46.9565 9.87354 48.1246 10.1927 48.9531 10.8243C49.7476 11.4559 50.1619 12.4066 50.1619 13.6358H50.1687ZM44.0498 15.5713H44.9259C45.7612 15.5713 46.386 15.4151 46.8003 15.0959C47.2145 14.7768 47.4251 14.3421 47.4251 13.7513C47.4251 13.1605 47.2553 12.7258 46.9225 12.4066C46.5897 12.1282 46.0465 11.972 45.2994 11.972H44.0498V15.5713Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M72.2269 9.87329V19.9378H73.8568V24.2977H71.3576V22.0906H63.6972V24.2977H61.198V19.9378H62.142C62.4612 19.2994 62.7668 18.6339 63.0588 17.9208C63.3576 17.2145 63.6292 16.4539 63.8873 15.639C64.1454 14.8241 64.3763 13.9412 64.58 12.9904C64.7837 12.0397 64.9603 11.0006 65.0961 9.87329H72.2201H72.2269ZM69.6462 12.0329H67.1607C67.0792 12.6237 66.9637 13.2553 66.8211 13.9208C66.6785 14.5932 66.5019 15.2723 66.305 15.965C66.108 16.6577 65.8839 17.3436 65.6462 18.0159C65.4017 18.6882 65.1437 19.3334 64.872 19.9378H69.6462V12.0261V12.0329Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M75.4119 9.87329H77.7413V15.7748C77.7413 16.0668 77.7413 16.386 77.7277 16.7392C77.7209 17.0923 77.7074 17.4319 77.6938 17.7714C77.6802 18.111 77.6666 18.403 77.653 18.6543C77.6394 18.9055 77.6327 19.0753 77.6191 19.1568H77.6666L83.3101 9.87329H86.4136V22.0974H84.1046V16.2298C84.1046 15.9174 84.1046 15.5779 84.125 15.2112C84.1454 14.8444 84.1522 14.4845 84.1726 14.1381C84.1929 13.7918 84.2065 13.493 84.2269 13.2417C84.2405 12.9904 84.2541 12.8207 84.2608 12.7324H84.1929L78.5223 22.0974H75.4052V9.87329H75.4119Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M94.2031 11.8564C93.7074 11.8564 93.266 11.9515 92.8857 12.1416C92.5053 12.3318 92.1862 12.6102 91.9213 12.977C91.6565 13.3437 91.4663 13.7783 91.3305 14.2877C91.1947 14.8038 91.1335 15.3742 91.1335 16.0194C91.1335 16.8819 91.2422 17.6221 91.4527 18.2333C91.67 18.8445 92.0028 19.3063 92.451 19.6323C92.8992 19.9515 93.4833 20.1145 94.1964 20.1145C94.6921 20.1145 95.1879 20.0602 95.6904 19.9447C96.1862 19.836 96.7295 19.6731 97.3135 19.4693V21.6425C96.7702 21.8666 96.2405 22.0228 95.7176 22.1247C95.1947 22.2197 94.6038 22.2673 93.9519 22.2673C92.6887 22.2673 91.6564 22.0092 90.8483 21.4863C90.0401 20.9634 89.4357 20.2367 89.0486 19.2927C88.6548 18.3556 88.4646 17.2554 88.4646 16.0058C88.4646 15.0822 88.5868 14.2333 88.8381 13.4659C89.0894 12.6985 89.4561 12.033 89.9383 11.4693C90.4205 10.9056 91.0249 10.471 91.7379 10.1654C92.451 9.85981 93.2728 9.70361 94.1964 9.70361C94.8008 9.70361 95.412 9.77832 96.0232 9.93451C96.6344 10.0907 97.2184 10.3012 97.7753 10.5661L96.94 12.6714C96.485 12.454 96.0232 12.2639 95.5614 12.1009C95.0996 11.9379 94.6446 11.8564 94.1964 11.8564H94.2031Z", fill: "#333333" }), /* @__PURE__ */ n.createElement("path", { d: "M109.429 22.0974H106.488L102.06 15.9039V22.0974H99.4662V9.87329H102.06V15.7952L106.441 9.87329H109.198L104.743 15.7409L109.436 22.0974H109.429Z", fill: "#333333" })), /* @__PURE__ */ n.createElement("defs", null, /* @__PURE__ */ n.createElement("clipPath", { id: "clip0_939_11669" }, /* @__PURE__ */ n.createElement("rect", { width: 109.436, height: 32, fill: "white" })))), y1 = {
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
    AddLinks: "Add links",
    docs: "My documents",
    sharedToMe: "Shared to me",
    sharedAccess: "Shared access",
    favorites: "Favorites",
    common: "Common",
    recycleBin: "Recycle bin",
    globalRecycleBin: "Global recycle bin",
    recent: "Recent",
    link: "Link",
    fileDepot: "File depot",
    rooms: "Rooms",
    room: "Room"
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
    AddLinks: "Добавить ссылки",
    docs: "Мои документы",
    sharedToMe: "Доступно для меня",
    sharedAccess: "Общий доступ",
    favorites: "Избранное",
    common: "Общее",
    recycleBin: "Корзина",
    globalRecycleBin: "Глобальная корзина",
    recent: "НЕдавнее",
    link: "Ссылка",
    fileDepot: "Хранилище файлов",
    rooms: "Комнаты",
    room: "Комната"
  }
}, M = (e, s) => {
  if (!e)
    return y1.ru[s] || "";
  const C = y1[`${e}`] || "";
  if (!C || typeof C != "object" || Array.isArray(C))
    return "";
  const c = C[s];
  return typeof c != "string" ? "" : c;
};
function K1({ onSearch: e, onClose: s, locale: C }) {
  const [c, d] = Z(""), p = n1("(max-width: 640px)");
  return /* @__PURE__ */ l.jsxs(
    H,
    {
      gap: 10,
      h: p ? 48 : 64,
      pt: p ? "xs" : "",
      px: "lg",
      styles: { root: { flexShrink: 0 } },
      children: [
        /* @__PURE__ */ l.jsx(H, { mr: "xs", children: p ? /* @__PURE__ */ l.jsx(q1, {}) : C === "ru" ? /* @__PURE__ */ l.jsx(Q1, {}) : /* @__PURE__ */ l.jsx(X1, {}) }),
        /* @__PURE__ */ l.jsx(
          F1,
          {
            variant: "filled",
            size: "md",
            fz: 16,
            maw: 480,
            styles: { root: { flexGrow: 1 } },
            placeholder: `${M(C, "Search")}`,
            value: c,
            leftSection: /* @__PURE__ */ l.jsx(J1, { stroke: 1.2 }),
            rightSectionProps: { style: { width: 110 } },
            rightSection: !!c && /* @__PURE__ */ l.jsxs(H, { gap: "xs", children: [
              /* @__PURE__ */ l.jsx(
                t1,
                {
                  variant: "transparent",
                  color: "gray",
                  onClick: () => {
                    d(""), e("");
                  },
                  children: /* @__PURE__ */ l.jsx(h1, { stroke: 1.2, size: 22 })
                }
              ),
              /* @__PURE__ */ l.jsx(
                d1,
                {
                  variant: "default",
                  size: "xs",
                  bd: "none",
                  fz: 12,
                  onClick: () => e(c.trim()),
                  children: `${M(C, "Find")}`
                }
              )
            ] }),
            onChange: (o) => d(o.currentTarget.value),
            onKeyDown: (o) => o.key === "Enter" && e(c.trim())
          }
        ),
        /* @__PURE__ */ l.jsx(
          t1,
          {
            variant: "subtle",
            color: "gray",
            ml: "auto",
            size: "lg",
            onClick: s,
            children: /* @__PURE__ */ l.jsx(h1, { size: 25, stroke: 1.2 })
          }
        )
      ]
    }
  );
}
const T1 = (e, s = 2, C) => {
  if (!+e) return C === "en" ? "0 B" : "0 Б";
  const c = 1024, d = s < 0 ? 0 : s, p = ["Б", "КБ", "МБ", "ГБ", "ТБ", "ПБ", "ЭБ", "ЗБ", "ЙБ"], o = ["B", "KB", "MB", "GB", "TB", "PB", "AB", "ZB"], a = Math.floor(Math.log(e) / Math.log(c));
  return `${parseFloat((e / Math.pow(c, a)).toFixed(d))} ${C === "en" ? o[a] : p[a]}`;
}, e2 = {
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
}, t2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F03E3E" }), /* @__PURE__ */ n.createElement("path", { d: "M7.40272 9.3772C8.0638 9.3772 8.54619 9.51969 8.84987 9.80468C9.15354 10.0873 9.30538 10.4774 9.30538 10.975C9.30538 11.1993 9.27151 11.4142 9.20377 11.6197C9.13602 11.823 9.02506 12.004 8.87089 12.1629C8.71905 12.3217 8.51582 12.4479 8.2612 12.5413C8.00657 12.6324 7.69238 12.678 7.31862 12.678H6.85259V14.5H5.76636V9.3772H7.40272ZM7.34666 10.2672H6.85259V11.7879H7.21C7.41323 11.7879 7.5896 11.7611 7.7391 11.7073C7.88861 11.6536 8.00424 11.5695 8.086 11.4551C8.16776 11.3406 8.20864 11.1934 8.20864 11.0136C8.20864 10.7613 8.13856 10.5744 7.9984 10.4529C7.85824 10.3291 7.64099 10.2672 7.34666 10.2672Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { d: "M14.5228 11.8896C14.5228 12.4665 14.4119 12.9489 14.1899 13.3367C13.9704 13.7221 13.6515 14.013 13.2334 14.2092C12.8152 14.4031 12.3118 14.5 11.7231 14.5H10.2725V9.3772H11.8808C12.4181 9.3772 12.8841 9.47297 13.2789 9.66452C13.6737 9.85374 13.9797 10.1352 14.1969 10.509C14.4142 10.8804 14.5228 11.3406 14.5228 11.8896ZM13.3945 11.9176C13.3945 11.5392 13.3385 11.2285 13.2263 10.9855C13.1166 10.7402 12.953 10.5592 12.7358 10.4424C12.5209 10.3256 12.2546 10.2672 11.9369 10.2672H11.3587V13.603H11.8247C12.355 13.603 12.7486 13.4617 13.0056 13.179C13.2649 12.8964 13.3945 12.4759 13.3945 11.9176Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { d: "M16.6532 14.5H15.5845V9.3772H18.5209V10.2672H16.6532V11.5882H18.3912V12.4747H16.6532V14.5Z", fill: "white" })), n2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#228BE6" }), /* @__PURE__ */ n.createElement("path", { d: "M6 7.9999C6 7.66853 6.26863 7.3999 6.6 7.3999H17.4C17.7314 7.3999 18 7.66853 18 7.9999C18 8.33127 17.7314 8.5999 17.4 8.5999H6.6C6.26863 8.5999 6 8.33127 6 7.9999Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { d: "M6 11.9999C6 11.6685 6.26863 11.3999 6.6 11.3999H17.4C17.7314 11.3999 18 11.6685 18 11.9999C18 12.3313 17.7314 12.5999 17.4 12.5999H6.6C6.26863 12.5999 6 12.3313 6 11.9999Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { d: "M6.6 15.3999C6.26863 15.3999 6 15.6685 6 15.9999C6 16.3313 6.26863 16.5999 6.6 16.5999H14.4C14.7314 16.5999 15 16.3313 15 15.9999C15 15.6685 14.7314 15.3999 14.4 15.3999H6.6Z", fill: "white" })), l2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#37B24D" }), /* @__PURE__ */ n.createElement("path", { d: "M4 8.6C4 8.26863 4.26863 8 4.6 8H19.4C19.7314 8 20 8.26863 20 8.6C20 8.93137 19.7314 9.2 19.4 9.2H4.6C4.26863 9.2 4 8.93137 4 8.6Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { d: "M8.6 20C8.26863 20 8 19.7314 8 19.4L8 4.6C8 4.26863 8.26863 4 8.6 4C8.93137 4 9.2 4.26863 9.2 4.6L9.2 19.4C9.2 19.7314 8.93137 20 8.6 20Z", fill: "white" })), r2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F76707" }), /* @__PURE__ */ n.createElement("path", { d: "M19 12C19 10.8953 18.7386 9.80634 18.237 8.82207C17.7355 7.8378 17.0082 6.98619 16.1145 6.33688L12 12H19Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 17.8C15.2033 17.8 17.8 15.2033 17.8 12C17.8 8.79675 15.2033 6.2 12 6.2C8.79675 6.2 6.2 8.79675 6.2 12C6.2 15.2033 8.79675 17.8 12 17.8ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z", fill: "white" })), a2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#E64980" }), /* @__PURE__ */ n.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.79932 9.37741V5.83398H18.1565V14.1911H14.6127C14.6127 16.8496 12.4576 19.0048 9.79904 19.0048C7.14051 19.0048 4.98535 16.8496 4.98535 14.1911C4.98535 11.5326 7.14079 9.37741 9.79932 9.37741C9.79941 9.37741 9.79922 9.37741 9.79932 9.37741ZM10.9993 7.03398H16.9565V12.9911H14.462C14.0272 11.2969 12.6935 9.96308 10.9993 9.52826V7.03398ZM13.4127 14.1911C13.4127 16.1869 11.7948 17.8048 9.79904 17.8048C7.80325 17.8048 6.18535 16.1869 6.18535 14.1911C6.18535 12.1953 7.80325 10.5774 9.79904 10.5774C9.79913 10.5774 9.79894 10.5774 9.79904 10.5774L9.79932 14.1911H13.4127ZM13.2087 12.9911H10.9993V10.7815C12.0297 11.1442 12.8461 11.9607 13.2087 12.9911Z", fill: "white" })), i2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#4DABF7" }), /* @__PURE__ */ n.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.6215 10.4561C14.9164 10.1761 15.3807 10.1821 15.6683 10.4697L19.6683 14.4697C19.9612 14.7626 19.9612 15.2374 19.6683 15.5303C19.3754 15.8232 18.9005 15.8232 18.6076 15.5303L15.1244 12.0471L11.4422 15.5439C11.152 15.8194 10.6967 15.8186 10.4075 15.5421L9.00646 14.2027L5.6785 17.5304C5.38559 17.8232 4.91072 17.8232 4.61784 17.5303C4.32496 17.2374 4.32498 16.7625 4.61789 16.4696L8.46439 12.6235C8.75265 12.3353 9.21834 12.33 9.51298 12.6117L10.9275 13.9641L14.6215 10.4561Z", fill: "white" }), /* @__PURE__ */ n.createElement("path", { d: "M10.0001 8.5C10.0001 9.32843 9.32853 10 8.50011 10C7.67168 10 7.00011 9.32843 7.00011 8.5C7.00011 7.67157 7.67168 7 8.50011 7C9.32853 7 10.0001 7.67157 10.0001 8.5Z", fill: "white" })), o2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#F59F00" }), /* @__PURE__ */ n.createElement("path", { d: "M8.7627 7.75794V16.2419C8.76267 16.3363 8.78782 16.4289 8.83554 16.5103C8.88327 16.5917 8.95184 16.6588 9.0342 16.7049C9.11655 16.7509 9.20969 16.7742 9.30402 16.7722C9.39834 16.7702 9.49044 16.7431 9.57079 16.6937L16.464 12.4517C16.5412 12.4043 16.605 12.3378 16.6492 12.2587C16.6934 12.1796 16.7167 12.0905 16.7167 11.9999C16.7167 11.9093 16.6934 11.8202 16.6492 11.7411C16.605 11.662 16.5412 11.5956 16.464 11.5482L9.57079 7.30617C9.49044 7.25673 9.39834 7.22963 9.30402 7.22765C9.20969 7.22568 9.11655 7.24892 9.0342 7.29496C8.95184 7.341 8.88327 7.40817 8.83554 7.48956C8.78782 7.57094 8.76267 7.66359 8.7627 7.75794Z", fill: "white" })), s2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("rect", { x: 2, y: 1, width: 20, height: 22, rx: 3, fill: "#CC5DE8" }), /* @__PURE__ */ n.createElement("path", { d: "M15.0909 9V13.566C14.8235 13.4066 14.513 13.3153 14.1818 13.3153C13.1777 13.3153 12.3636 14.1543 12.3636 15.1892C12.3636 16.2241 13.1777 17.0631 14.1818 17.0631C15.186 17.0631 16 16.2241 16 15.1892V6.75018C16 6.23185 15.5018 5.86997 15.0281 6.0443L9.20994 8.18588C8.92049 8.29242 8.72727 8.57499 8.72727 8.89176V14.5029C8.45984 14.3435 8.14935 14.2522 7.81818 14.2522C6.81403 14.2522 6 15.0912 6 16.1261C6 17.161 6.81403 18 7.81818 18C8.82234 18 9.63636 17.161 9.63636 16.1261V11.0077L15.0909 9Z", fill: "white" })), c2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("path", { d: "M11.997 15.2043L5.45974 2.12734L18.5342 2.12734L11.997 15.2043Z", fill: "#FF6B6B" }), /* @__PURE__ */ n.createElement("path", { d: "M5 1C3.34315 1 2 2.34315 2 4V19.9973C2 21.6542 3.34315 22.9973 5 22.9973H19C20.6569 22.9973 22 21.6542 22 19.9973V4C22 2.34315 20.6569 1 19 1H16.5C16.5 1 12.8297 3.94874 12.4264 11.0247C12.1447 11.3173 11.8849 11.3025 11.5755 11.0247C11.0046 3.91723 7 1 7 1H5Z", fill: "#81A3C5" }), /* @__PURE__ */ n.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.1903 1L5.84118 1.34685C5.60611 1.58041 5.60487 1.9603 5.83842 2.19538C6.07197 2.43045 6.45187 2.43169 6.68694 2.19814L7.3283 1.56095C7.51223 1.7618 7.69814 1.97398 7.88384 2.19734L7.16905 2.74102C6.90531 2.94163 6.85413 3.31807 7.05474 3.58181C7.25535 3.84556 7.63178 3.89674 7.89553 3.69613L8.61805 3.14657C8.78504 3.37931 8.94941 3.62133 9.10947 3.8725L8.33964 4.29024C8.04839 4.44828 7.9404 4.81251 8.09845 5.10376C8.25649 5.39502 8.62072 5.503 8.91197 5.34496L9.71417 4.90965C9.83152 5.131 9.94463 5.35817 10.0526 5.59107L9.23216 5.91252C8.92362 6.03341 8.7715 6.38152 8.89239 6.69005C9.01327 6.99859 9.36138 7.15071 9.66992 7.02983L10.5093 6.70096C10.5966 6.94319 10.6778 7.19071 10.7521 7.44345L9.8859 7.65785C9.56423 7.73746 9.36801 8.06277 9.44763 8.38443C9.52725 8.70609 9.85255 8.90231 10.1742 8.8227L11.0363 8.60933C11.0575 8.71888 11.0774 8.82929 11.0959 8.94055C11.0327 9.0717 10.9973 9.21877 10.9973 9.3741V9.52462H10.2969C9.96553 9.52462 9.6969 9.79325 9.6969 10.1246C9.6969 10.456 9.96553 10.7246 10.2969 10.7246H10.9973V11.3318C9.83214 11.7436 8.99733 12.8549 8.99733 14.1611V17.1611C8.99733 17.7134 9.44505 18.1611 9.99733 18.1611H13.9973C14.5496 18.1611 14.9973 17.7134 14.9973 17.1611V14.1611C14.9973 12.8549 14.1625 11.7436 12.9973 11.3318V9.69337H13.6975C14.0288 9.69337 14.2975 9.42474 14.2975 9.09337C14.2975 8.762 14.0288 8.49337 13.6975 8.49337H12.9605C13.0027 8.23162 13.0531 7.97476 13.111 7.72285L13.9806 7.95352C14.3009 8.03847 14.6294 7.84769 14.7144 7.52739C14.7993 7.2071 14.6086 6.87858 14.2883 6.79362L13.4373 6.56791C13.5347 6.27813 13.6415 5.99597 13.7561 5.72156L14.5555 6.09989C14.855 6.24165 15.2127 6.11375 15.3545 5.81423C15.4962 5.51471 15.3683 5.15698 15.0688 5.01523L14.2684 4.63644C14.4131 4.36228 14.5647 4.09742 14.7213 3.84201L15.4632 4.33575C15.7391 4.51934 16.1115 4.44454 16.2951 4.16868C16.4787 3.89282 16.4039 3.52035 16.128 3.33676L15.3892 2.84503C15.5695 2.59738 15.7528 2.36102 15.9366 2.13615L16.6091 2.73915C16.8558 2.96036 17.2352 2.93969 17.4564 2.69297C17.6776 2.44625 17.6569 2.06691 17.4102 1.8457L16.7288 1.23476C16.8046 1.15443 16.8799 1.07617 16.9545 1H15.8574C15.8262 1.03476 15.7949 1.06984 15.7635 1.10526C14.9004 2.08038 13.9989 3.31537 13.2957 4.79138C13.2886 4.80402 13.2819 4.81701 13.2756 4.83035C13.2691 4.84389 13.2633 4.85756 13.258 4.87132C12.7642 5.92477 12.3724 7.0994 12.1671 8.38846C12.1119 8.37902 12.0552 8.3741 11.9973 8.3741C11.9329 8.3741 11.8699 8.3802 11.8088 8.39184C11.1802 5.23533 9.50654 2.77154 7.97906 1.08733C7.95245 1.058 7.92588 1.02889 7.89935 1H6.1903ZM11.9973 13.1955C11.5923 13.1955 11.2434 12.9546 11.0863 12.6083C10.5543 12.9211 10.1973 13.4994 10.1973 14.1611V16.9611H13.7973V14.1611C13.7973 13.4994 13.4403 12.9211 12.9084 12.6083C12.7512 12.9546 12.4024 13.1955 11.9973 13.1955Z", fill: "white" })), d2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("path", { d: "M2 4C2 2.34315 3.34315 1 5 1H14.7574C15.553 1 16.3161 1.31607 16.8787 1.87868L19 4L21.1213 6.12132C21.6839 6.68393 22 7.44699 22 8.24264V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4Z", fill: "#BACCDF" }), /* @__PURE__ */ n.createElement("path", { d: "M14.8999 1.00342V6.50003C14.8999 7.38368 15.6162 8.10003 16.4999 8.10003L21.9965 8.10003C21.9765 7.67959 21.8684 7.27119 21.6827 6.90003L16.4999 6.90003C16.279 6.90003 16.0999 6.72094 16.0999 6.50003L16.0999 1.31724C15.7287 1.1315 15.3203 1.02342 14.8999 1.00342Z", fill: "white" })), C2 = (e) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ n.createElement("path", { d: "M9 3C9.2198 2.99998 9.43348 3.07238 9.608 3.206L9.708 3.293L12.414 6H19C19.7652 5.99996 20.5015 6.29233 21.0583 6.81728C21.615 7.34224 21.9501 8.06011 21.995 8.824L22 9V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V6C1.99996 5.23479 2.29233 4.49849 2.81728 3.94174C3.34224 3.38499 4.06011 3.04989 4.824 3.005L5 3H9Z", fill: "#6C8196" })), p2 = {
  pdf: t2,
  doc: n2,
  excel: l2,
  ppt: r2,
  draw: a2,
  image: i2,
  video: o2,
  audio: s2,
  zip: c2
}, m2 = ({ mimeType: e }) => {
  var c;
  const s = ((c = Object.values(e2).find((d) => d.mimeType === e)) == null ? void 0 : c.iconType) ?? "";
  if (!e) return /* @__PURE__ */ l.jsx(C2, { width: 20 });
  const C = p2[s];
  return C ? /* @__PURE__ */ l.jsx(C, { width: 20 }) : /* @__PURE__ */ l.jsx(d2, { width: 20 });
}, h2 = "_row_ddbp6_1", f2 = "_highlight_ddbp6_15", u2 = "_rowCheckbox_ddbp6_23", g2 = "_rowCheckboxVisible_ddbp6_31", x2 = "_rowName_ddbp6_49", w2 = "_table_ddbp6_59", O = {
  row: h2,
  highlight: f2,
  rowCheckbox: u2,
  rowCheckboxVisible: g2,
  rowName: x2,
  table: w2
};
function v2({
  rows: e,
  selectedRowIds: s,
  onOpenDir: C,
  onSelect: c,
  locale: d
}) {
  const p = !!e.length && e.length === s.length, o = !p && !!s.length, a = (r) => s.includes(r), u = () => c(s.length ? [] : e.map((r) => r.Id)), g = (r) => c(
    s.includes(r) ? s.filter((y) => y !== r) : s.concat(r)
  );
  return /* @__PURE__ */ l.jsx(L.ScrollContainer, { minWidth: 0, h: "100%", children: /* @__PURE__ */ l.jsxs(
    L,
    {
      stickyHeader: !0,
      verticalSpacing: "xs",
      horizontalSpacing: "lg",
      styles: { tr: { height: 40 } },
      className: O.table,
      children: [
        /* @__PURE__ */ l.jsx(L.Thead, { children: /* @__PURE__ */ l.jsxs(L.Tr, { children: [
          /* @__PURE__ */ l.jsx(L.Th, { c: "gray.6", fw: 500, fz: 10, tt: "uppercase", children: /* @__PURE__ */ l.jsxs(H, { gap: "xs", children: [
            /* @__PURE__ */ l.jsx(
              g1,
              {
                size: "xs",
                checked: p,
                indeterminate: o,
                onChange: () => u()
              }
            ),
            " ",
            `${M(d, "ColumnName")}`
          ] }) }),
          /* @__PURE__ */ l.jsx(L.Th, { c: "gray.6", fw: 500, fz: 10, tt: "uppercase", children: `${M(d, "ColumnChanged")}` }),
          /* @__PURE__ */ l.jsx(L.Th, { c: "gray.6", fw: 500, fz: 10, tt: "uppercase", children: `${M(d, "ColumnSize")}` })
        ] }) }),
        /* @__PURE__ */ l.jsx(L.Tbody, { children: e.map((r) => /* @__PURE__ */ l.jsxs(
          L.Tr,
          {
            className: O.row + (a(r.Id) ? ` ${O.highlight}` : ""),
            onMouseDown: "MimeType" in r ? () => g(r.Id) : void 0,
            children: [
              /* @__PURE__ */ l.jsx(L.Td, { fz: 13, children: /* @__PURE__ */ l.jsxs(H, { gap: "xs", styles: { root: { flexFlow: "noWrap" } }, children: [
                /* @__PURE__ */ l.jsx(C1, { h: 16, w: 16, children: "MimeType" in r && /* @__PURE__ */ l.jsx(
                  g1,
                  {
                    readOnly: !0,
                    size: "xs",
                    checked: a(r.Id),
                    className: O.rowCheckbox
                  }
                ) }),
                /* @__PURE__ */ l.jsxs(H, { gap: 10, styles: { root: { flexGrow: 1, flexWrap: "nowrap" } }, children: [
                  /* @__PURE__ */ l.jsx(
                    m2,
                    {
                      mimeType: "MimeType" in r ? r.MimeType : ""
                    }
                  ),
                  "MimeType" in r ? /* @__PURE__ */ l.jsx(
                    p1,
                    {
                      fz: 13,
                      truncate: !0,
                      c: "gray.8",
                      title: r.Name,
                      className: O.rowName,
                      children: r.Name
                    }
                  ) : /* @__PURE__ */ l.jsx(
                    m1,
                    {
                      truncate: !0,
                      c: "gray.8",
                      title: r.Name,
                      fz: 13,
                      fw: 500,
                      className: O.rowName,
                      onMouseDown: (y) => y.stopPropagation(),
                      onClick: () => C(r.Id),
                      children: r.Name
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ l.jsx(L.Td, { fz: 12, c: "dimmed", children: /* @__PURE__ */ l.jsx("span", { title: new Date(r.Timestamp).toLocaleString("ru-Ru"), children: new Date(r.Timestamp).toLocaleString("ru-Ru") }) }),
              /* @__PURE__ */ l.jsx(L.Td, { fz: 12, c: "dimmed", children: "Size" in r ? isNaN(+r.Size) ? null : T1(+r.Size, 2, d || "ru") : "-" })
            ]
          },
          r.Id
        )) })
      ]
    }
  ) });
}
const E1 = 3, T = [
  {
    name: "docs",
    type: 16
  },
  {
    name: "sharedToMe",
    type: 256
  },
  {
    name: "sharedAccess",
    type: 8
  },
  {
    name: "favorites",
    type: 512
  },
  {
    name: "common",
    type: 4
  },
  {
    name: "recycleBin",
    type: 134217728
  },
  {
    name: "globalRecycleBin",
    type: 369098752
  },
  {
    name: "recent",
    type: 2048
  },
  {
    name: "link",
    type: -1
  },
  {
    name: "fileDepot",
    type: 8192
  },
  {
    name: "rooms",
    type: 4096
  },
  {
    name: "room"
  }
];
function y2({
  directory: e,
  isSearch: s,
  onBack: C,
  onItemClick: c,
  locale: d
}) {
  const p = e1(() => {
    if (s)
      return [
        {
          id: 0,
          title: `${M(d, "SearchResults")}`,
          type: 0
        }
      ];
    if (!e) return [];
    let o = e.Parent;
    const a = [
      {
        title: e.Name,
        id: e.Id,
        type: e.Type
      }
    ];
    for (; o; )
      a.unshift({
        title: o.Name,
        id: o.Id,
        type: o.Type || 0
      }), o = o.Parent;
    if (a.length > E1) {
      const u = a.splice(1, a.length - E1);
      a.splice(1, 0, { id: 0, title: "...", type: 0, children: u });
    }
    return a;
  }, [e, s]);
  return /* @__PURE__ */ l.jsxs(H, { h: 48, py: 8, px: "lg", styles: { root: { flexShrink: 0 } }, children: [
    p.length > 1 && /* @__PURE__ */ l.jsx(
      t1,
      {
        variant: "subtle",
        color: "dimmed",
        size: "sm",
        ml: -2,
        onClick: C,
        children: /* @__PURE__ */ l.jsx(U1, { stroke: 1.2, size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      V1,
      {
        separatorMargin: 6,
        separator: /* @__PURE__ */ l.jsx(W1, { stroke: 1.2, size: 17 }),
        children: p.map(
          (o, a) => {
            var u;
            return o.children ? /* @__PURE__ */ l.jsxs(Q, { children: [
              /* @__PURE__ */ l.jsx(Q.Target, { children: /* @__PURE__ */ l.jsx(m1, { c: "dimmed", fz: 14, children: "..." }) }),
              /* @__PURE__ */ l.jsx(Q.Dropdown, { children: o.children.map((g) => {
                var r;
                return /* @__PURE__ */ l.jsx(
                  Q.Item,
                  {
                    c: "dark",
                    fz: 14,
                    leftSection: /* @__PURE__ */ l.jsx(G1, { stroke: 1.2, size: 18 }),
                    children: T != null && T.some((y) => y.type === g.type) ? M(d, ((r = T == null ? void 0 : T.find((y) => y.type === g.type)) == null ? void 0 : r.name) || "") : g.title
                  },
                  g.id
                );
              }) })
            ] }, a) : /* @__PURE__ */ l.jsx(
              m1,
              {
                truncate: !0,
                underline: o.id !== 0 ? "hover" : "never",
                c: a === p.length - 1 ? "dark" : "dimmed",
                fz: 14,
                fw: a === p.length - 1 ? 500 : 400,
                maw: 200,
                onClick: o.id === 0 ? void 0 : () => c(o.id),
                children: T != null && T.some((g) => g.type === o.type) ? M(d, ((u = T == null ? void 0 : T.find((g) => g.type === o.type)) == null ? void 0 : u.name) || "") : o.title
              },
              a
            );
          }
        )
      }
    )
  ] });
}
var b1 = /* @__PURE__ */ ((e) => (e[e.Docs = 16] = "Docs", e))(b1 || {}), f1 = /* @__PURE__ */ ((e) => (e[e.Id = 0] = "Id", e[e.Name = 1] = "Name", e[e.Type = 2] = "Type", e[e.Size = 3] = "Size", e[e.Author = 4] = "Author", e[e.Date = 5] = "Date", e[e.UpdateDate = 6] = "UpdateDate", e))(f1 || {}), u1 = /* @__PURE__ */ ((e) => (e[e.Asc = 0] = "Asc", e[e.Desc = 1] = "Desc", e))(u1 || {});
const l1 = P1.create({
  baseURL: "/api"
}), M1 = (e) => l1.get("v1/DocumentDirectory/Get", { params: e }), E2 = (e) => l1.get("v1/DocumentDirectory/Search", {
  params: { ...e, field: "All" }
});
function M2({
  enabledLinks: e,
  count: s,
  size: C,
  isLimitExceeded: c,
  onClose: d,
  onAttachFiles: p,
  onCreateLink: o,
  locale: a
}) {
  const u = n1("(max-width: 768px)"), g = n1("(max-width: 640px)");
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    c && /* @__PURE__ */ l.jsx(H, { h: 61, bg: "yellow.4", px: "md", children: /* @__PURE__ */ l.jsx(p1, { fz: 13, c: "dark.7", lh: 1.4, children: `${M(a, "MaxSizeLimitPartOne")} ${e ? M(a, "MaxSizeLimitPartTwo") : ""}` }) }),
    /* @__PURE__ */ l.jsxs(
      A1,
      {
        direction: g ? "column" : "row",
        align: "center",
        justify: g ? "center" : "space-between",
        gap: 6,
        bg: "blue",
        c: "#fff",
        px: "md",
        h: 76,
        w: "100%",
        children: [
          /* @__PURE__ */ l.jsxs(H, { gap: "xs", children: [
            /* @__PURE__ */ l.jsx(t1, { onClick: d, children: /* @__PURE__ */ l.jsx(h1, { size: 21, color: "#fff" }) }),
            /* @__PURE__ */ l.jsx(p1, { fz: u ? 13 : 15, children: `${M(a, "FilesSelected")}: ${s} (${C})` })
          ] }),
          /* @__PURE__ */ l.jsxs(H, { gap: "xs", children: [
            /* @__PURE__ */ l.jsx(
              d1,
              {
                size: u ? "xs" : "",
                disabled: c,
                variant: "outline",
                color: "#fff",
                onClick: p,
                styles: c ? {
                  root: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #fff",
                    opacity: 0.4
                  }
                } : {},
                children: s === 1 ? M(a, "AttachFile") : M(a, "AttachFiles")
              }
            ),
            e && /* @__PURE__ */ l.jsx(
              d1,
              {
                size: u ? "xs" : "",
                variant: "default",
                onClick: o,
                children: s === 1 ? M(a, "AddLink") : M(a, "AddLinks")
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const L2 = 26214400, T2 = (e) => {
  const s = Object.fromEntries(
    Object.entries({
      ...e,
      expirationDate: e.expirationDate ? e.expirationDate.toJSON() : void 0
    }).filter((C) => C[1] !== void 0)
  );
  return l1.get("v1/Link/Generate", { params: s });
};
var j1 = /* @__PURE__ */ ((e) => (e[e.LockCopy = -16384] = "LockCopy", e[e.LockPrint = -8192] = "LockPrint", e[e.Deny = -4096] = "Deny", e[e.OnlyUpload = -1024] = "OnlyUpload", e[e.FreeBusy = -64] = "FreeBusy", e[e.Read = 0] = "Read", e[e.Comment = 1] = "Comment", e[e.Review = 2] = "Review", e[e.Write = 4] = "Write", e[e.Delete = 8] = "Delete", e[e.FullInternal = 256] = "FullInternal", e[e.Full = 512] = "Full", e[e.Lock = 4096] = "Lock", e))(j1 || {}), k1 = /* @__PURE__ */ ((e) => (e[e.SingleCall = 0] = "SingleCall", e[e.FiveMinutes = 1] = "FiveMinutes", e[e.OneHour = 2] = "OneHour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month", e[e.Year = 6] = "Year", e[e.Unlimited = 10] = "Unlimited", e[e.Internal = 11] = "Internal", e))(k1 || {});
const L1 = {
  id: "",
  sortField: f1.Id,
  sortOrder: u1.Desc
};
function H2({
  opened: e,
  enabledLinks: s = !1,
  maxSizeAttachments: C = L2,
  onClose: c,
  onAttachFiles: d,
  offsetSize: p = 0,
  onCreateLink: o,
  locale: a = "en"
}) {
  const [u, g] = Z(L1), [r, y] = Z(null), [_, b] = Z(null), [A, G] = Z(!1), [j, B] = Z([]), [D, z] = Z([]), [r1, k] = Z(!1), a1 = n1("(max-width: 640px)"), R = e1(() => _ ? [..._.Directory.Items, ..._.Document.Items] : [...(r == null ? void 0 : r.Children) ?? [], ...(r == null ? void 0 : r.Documents) ?? []], [r, _]), F = e1(
    () => {
      let m = R.filter((h) => j.includes(h.Id));
      const x = m.map((h) => h.Id), E = D.filter((h) => !x.includes(h.Id));
      return E.length && (m = [...E, ...m]), m;
    },
    [R, j, D]
  ), I = e1(
    () => F.reduce((m, x) => m + x.Size, 0),
    [F]
  ), J = p + I > C, S = S1(
    async (m) => {
      k(!0);
      try {
        const { data: x } = await M1(m);
        y(x[0]), b(null);
      } finally {
        k(!1);
      }
    },
    []
  ), $ = async (m) => {
    if (!m)
      await S(u), G(!1);
    else {
      G(!0), k(!0);
      try {
        const { data: x } = await E2({ text: m });
        b(x), y(null);
      } finally {
        k(!1);
      }
    }
  }, q = async () => {
    var x, E;
    k(!0);
    const m = F;
    try {
      const P = (await Promise.all(
        m.map(
          (V) => l1.get(`/v1/Documents/Download?id=${V.Id}&download=false`, {
            responseType: "blob"
          })
        )
      )).map(
        (V, t) => new File([V.data], m[t].Name, {
          type: V.headers["content-type"] ?? m[t].MimeType
        })
      );
      B([]), z([]), d(P), c();
    } catch (h) {
      N1(h) && console.error(
        ((E = (x = h.response) == null ? void 0 : x.data) == null ? void 0 : E.ErrorMessage) ?? "Неизвестная ошибка"
      );
    } finally {
      k(!1);
    }
  }, i1 = async () => {
    k(!0);
    try {
      const m = await Promise.all(
        F.map(
          (x) => T2({
            id: x.Id,
            accessType: j1.Read,
            lifeTime: k1.Unlimited,
            type: "Document"
          })
        )
      );
      o(
        m.map((x, E) => ({
          link: x.data,
          item: F[E]
        }))
      ), c();
    } finally {
      k(!1);
    }
  };
  return Z1(() => {
    if (e)
      return (async () => {
        const h = {
          id: (await M1()).data.find(
            (P) => P.Type === b1.Docs
          ).Id,
          sortField: f1.Id,
          sortOrder: u1.Desc
        };
        g(h), S(h);
      })(), () => {
        g(L1), y(null), b(null), B([]), z([]);
      };
  }, [e, S]), /* @__PURE__ */ l.jsx(B1, { theme: { fontFamily: "Roboto, sans-serif" }, children: /* @__PURE__ */ l.jsx(
    z1,
    {
      centered: !0,
      withCloseButton: !1,
      closeOnEscape: !1,
      opened: e,
      size: 950,
      radius: "lg",
      padding: 0,
      onClose: c,
      children: /* @__PURE__ */ l.jsxs(C1, { h: 590, pos: "relative", children: [
        /* @__PURE__ */ l.jsx(I1, { visible: r1 }),
        /* @__PURE__ */ l.jsx(K1, { onSearch: $, onClose: c, locale: a }),
        /* @__PURE__ */ l.jsx(
          y2,
          {
            directory: r,
            isSearch: A,
            onBack: () => S({
              ...u,
              id: r.ParentId
            }),
            onItemClick: (m) => S({ ...u, id: m }),
            locale: a
          }
        ),
        /* @__PURE__ */ l.jsx(
          C1,
          {
            style: {
              height: `calc(100% - 48px - 64px - ${j.length ? 76 : 0}px  + ${a1 ? 16 : 0}px - ${J ? 61 : 0}px)`
            },
            children: /* @__PURE__ */ l.jsx(
              v2,
              {
                rows: R,
                selectedRowIds: j,
                onOpenDir: (m) => S({ ...u, id: m }),
                onSelect: (m) => {
                  B(m);
                  const x = R == null ? void 0 : R.map((h) => h.Id), E = D.filter((h) => !x.includes(h.Id));
                  z(E != null && E.length ? [...E, ...R.filter((h) => m.includes(h.Id))] : R.filter((h) => m.includes(h.Id)));
                },
                locale: a
              }
            )
          }
        ),
        !!j.length && /* @__PURE__ */ l.jsx(
          M2,
          {
            enabledLinks: s,
            count: j.length,
            size: T1(I, 2, a),
            isLimitExceeded: J,
            onClose: () => {
              B([]), z([]);
            },
            onAttachFiles: q,
            onCreateLink: i1,
            locale: a
          }
        )
      ] })
    }
  ) });
}
export {
  H2 as ShareDisk
};
