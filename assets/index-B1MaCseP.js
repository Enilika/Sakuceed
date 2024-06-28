var oc = Object.defineProperty;
var ic = (e, n, t) => (n in e ? oc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[n] = t));
var K = (e, n, t) => ic(e, typeof n != "symbol" ? n + "" : n, t);
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const u of l)
      if (u.type === "childList")
        for (const o of u.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = t(l);
    fetch(l.href, u);
  }
})();
function Ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yi = { exports: {} },
  tl = {},
  Xi = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zt = Symbol.for("react.element"),
  sc = Symbol.for("react.portal"),
  ac = Symbol.for("react.fragment"),
  cc = Symbol.for("react.strict_mode"),
  fc = Symbol.for("react.profiler"),
  dc = Symbol.for("react.provider"),
  pc = Symbol.for("react.context"),
  hc = Symbol.for("react.forward_ref"),
  mc = Symbol.for("react.suspense"),
  vc = Symbol.for("react.memo"),
  yc = Symbol.for("react.lazy"),
  Fo = Symbol.iterator;
function gc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fo && e[Fo]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Gi = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zi = Object.assign,
  Ji = {};
function it(e, n, t) {
  (this.props = e), (this.context = n), (this.refs = Ji), (this.updater = t || Gi);
}
it.prototype.isReactComponent = {};
it.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
it.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qi() {}
qi.prototype = it.prototype;
function Hu(e, n, t) {
  (this.props = e), (this.context = n), (this.refs = Ji), (this.updater = t || Gi);
}
var Vu = (Hu.prototype = new qi());
Vu.constructor = Hu;
Zi(Vu, it.prototype);
Vu.isPureReactComponent = !0;
var Uo = Array.isArray,
  bi = Object.prototype.hasOwnProperty,
  Bu = { current: null },
  es = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, n, t) {
  var r,
    l = {},
    u = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref), n.key !== void 0 && (u = "" + n.key), n))
      bi.call(n, r) && !es.hasOwnProperty(r) && (l[r] = n[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = t;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in ((i = e.defaultProps), i)) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Zt, type: e, key: u, ref: o, props: l, _owner: Bu.current };
}
function wc(e, n) {
  return { $$typeof: Zt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Wu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zt;
}
function kc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Ao = /\/+/g;
function Sl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? kc("" + e.key) : n.toString(36);
}
function kr(e, n, t, r, l) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (u) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zt:
          case sc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Sl(o, 0) : r),
      Uo(l)
        ? ((t = ""),
          e != null && (t = e.replace(Ao, "$&/") + "/"),
          kr(l, n, t, "", function (c) {
            return c;
          }))
        : l != null &&
          (Wu(l) &&
            (l = wc(l, t + (!l.key || (o && o.key === l.key) ? "" : ("" + l.key).replace(Ao, "$&/") + "/") + e)),
          n.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Uo(e)))
    for (var i = 0; i < e.length; i++) {
      u = e[i];
      var s = r + Sl(u, i);
      o += kr(u, n, t, s, l);
    }
  else if (((s = gc(e)), typeof s == "function"))
    for (e = s.call(e), i = 0; !(u = e.next()).done; ) (u = u.value), (s = r + Sl(u, i++)), (o += kr(u, n, t, s, l));
  else if (u === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function rr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, "", "", function (u) {
      return n.call(t, u, l++);
    }),
    r
  );
}
function Sc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Sr = { transition: null },
  Ec = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: Sr, ReactCurrentOwner: Bu };
function ts() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: rr,
  forEach: function (e, n, t) {
    rr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      rr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Wu(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
L.Component = it;
L.Fragment = ac;
L.Profiler = fc;
L.PureComponent = Hu;
L.StrictMode = cc;
L.Suspense = mc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ec;
L.act = ts;
L.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zi({}, e.props),
    l = e.key,
    u = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((u = n.ref), (o = Bu.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (s in n) bi.call(n, s) && !es.hasOwnProperty(s) && (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: Zt, type: e.type, key: l, ref: u, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: pc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = ns;
L.createFactory = function (e) {
  var n = ns.bind(null, e);
  return (n.type = e), n;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: hc, render: e };
};
L.isValidElement = Wu;
L.lazy = function (e) {
  return { $$typeof: yc, _payload: { _status: -1, _result: e }, _init: Sc };
};
L.memo = function (e, n) {
  return { $$typeof: vc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
  var n = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = n;
  }
};
L.unstable_act = ts;
L.useCallback = function (e, n) {
  return ae.current.useCallback(e, n);
};
L.useContext = function (e) {
  return ae.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
  return ae.current.useEffect(e, n);
};
L.useId = function () {
  return ae.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
  return ae.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
  return ae.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
  return ae.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
  return ae.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
  return ae.current.useReducer(e, n, t);
};
L.useRef = function (e) {
  return ae.current.useRef(e);
};
L.useState = function (e) {
  return ae.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
  return ae.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
  return ae.current.useTransition();
};
L.version = "18.3.1";
Xi.exports = L;
var Re = Xi.exports;
const Cc = Ki(Re);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xc = Re,
  _c = Symbol.for("react.element"),
  Nc = Symbol.for("react.fragment"),
  Pc = Object.prototype.hasOwnProperty,
  zc = xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function rs(e, n, t) {
  var r,
    l = {},
    u = null,
    o = null;
  t !== void 0 && (u = "" + t), n.key !== void 0 && (u = "" + n.key), n.ref !== void 0 && (o = n.ref);
  for (r in n) Pc.call(n, r) && !Lc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: _c, type: e, key: u, ref: o, props: l, _owner: zc.current };
}
tl.Fragment = Nc;
tl.jsx = rs;
tl.jsxs = rs;
Yi.exports = tl;
var U = Yi.exports,
  Xl = {},
  ls = { exports: {} },
  ke = {},
  us = { exports: {} },
  os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(C, P) {
    var z = C.length;
    C.push(P);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        J = C[Q];
      if (0 < l(J, P)) (C[Q] = P), (C[z] = J), (z = Q);
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0],
      z = C.pop();
    if (z !== P) {
      C[0] = z;
      e: for (var Q = 0, J = C.length, nr = J >>> 1; Q < nr; ) {
        var wn = 2 * (Q + 1) - 1,
          kl = C[wn],
          kn = wn + 1,
          tr = C[kn];
        if (0 > l(kl, z))
          kn < J && 0 > l(tr, kl) ? ((C[Q] = tr), (C[kn] = z), (Q = kn)) : ((C[Q] = kl), (C[wn] = z), (Q = wn));
        else if (kn < J && 0 > l(tr, z)) (C[Q] = tr), (C[kn] = z), (Q = kn);
        else break e;
      }
    }
    return P;
  }
  function l(C, P) {
    var z = C.sortIndex - P.sortIndex;
    return z !== 0 ? z : C.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    e.unstable_now = function () {
      return u.now();
    };
  } else {
    var o = Date,
      i = o.now();
    e.unstable_now = function () {
      return o.now() - i;
    };
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    k = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var P = t(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= C) r(c), (P.sortIndex = P.expirationTime), n(s, P);
      else break;
      P = t(c);
    }
  }
  function v(C) {
    if (((k = !1), d(C), !w))
      if (t(s) !== null) (w = !0), gl(E);
      else {
        var P = t(c);
        P !== null && wl(v, P.startTime - C);
      }
  }
  function E(C, P) {
    (w = !1), k && ((k = !1), f(N), (N = -1)), (g = !0);
    var z = p;
    try {
      for (d(P), h = t(s); h !== null && (!(h.expirationTime > P) || (C && !ze())); ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var J = Q(h.expirationTime <= P);
          (P = e.unstable_now()), typeof J == "function" ? (h.callback = J) : h === t(s) && r(s), d(P);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var nr = !0;
      else {
        var wn = t(c);
        wn !== null && wl(v, wn.startTime - P), (nr = !1);
      }
      return nr;
    } finally {
      (h = null), (p = z), (g = !1);
    }
  }
  var x = !1,
    _ = null,
    N = -1,
    W = 5,
    R = -1;
  function ze() {
    return !(e.unstable_now() - R < W);
  }
  function ct() {
    if (_ !== null) {
      var C = e.unstable_now();
      R = C;
      var P = !0;
      try {
        P = _(!0, C);
      } finally {
        P ? ft() : ((x = !1), (_ = null));
      }
    } else x = !1;
  }
  var ft;
  if (typeof a == "function")
    ft = function () {
      a(ct);
    };
  else if (typeof MessageChannel < "u") {
    var Do = new MessageChannel(),
      uc = Do.port2;
    (Do.port1.onmessage = ct),
      (ft = function () {
        uc.postMessage(null);
      });
  } else
    ft = function () {
      F(ct, 0);
    };
  function gl(C) {
    (_ = C), x || ((x = !0), ft());
  }
  function wl(C, P) {
    N = F(function () {
      C(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), gl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var z = p;
      p = P;
      try {
        return C();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, P) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var z = p;
      p = C;
      try {
        return P();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (C, P, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        C)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = z + J),
        (C = { id: m++, callback: P, priorityLevel: C, startTime: z, expirationTime: J, sortIndex: -1 }),
        z > Q
          ? ((C.sortIndex = z), n(c, C), t(s) === null && C === t(c) && (k ? (f(N), (N = -1)) : (k = !0), wl(v, z - Q)))
          : ((C.sortIndex = J), n(s, C), w || g || ((w = !0), gl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = ze),
    (e.unstable_wrapCallback = function (C) {
      var P = p;
      return function () {
        var z = p;
        p = P;
        try {
          return C.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(os);
us.exports = os;
var Rc = us.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc = Re,
  we = Rc;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var is = new Set(),
  Mt = {};
function Mn(e, n) {
  et(e, n), et(e + "Capture", n);
}
function et(e, n) {
  for (Mt[e] = n, e = 0; e < n.length; e++) is.add(n[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Gl = Object.prototype.hasOwnProperty,
  Oc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $o = {},
  Ho = {};
function Mc(e) {
  return Gl.call(Ho, e) ? !0 : Gl.call($o, e) ? !1 : Oc.test(e) ? (Ho[e] = !0) : (($o[e] = !0), !1);
}
function Ic(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jc(e, n, t, r) {
  if (n === null || typeof n > "u" || Ic(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ce(e, n, t, r, l, u, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = u),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  te[n] = new ce(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  te[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qu = /[\-:]([a-z])/g;
function Ku(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Qu, Ku);
    te[n] = new ce(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var n = e.replace(Qu, Ku);
  te[n] = new ce(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Qu, Ku);
  te[n] = new ce(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yu(e, n, t, r) {
  var l = te.hasOwnProperty(n) ? te[n] : null;
  (l !== null
    ? l.type !== 0
    : r || !(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N")) &&
    (jc(n, t, l, r) && (t = null),
    r || l === null
      ? Mc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Je = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  Xu = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  ss = Symbol.for("react.provider"),
  as = Symbol.for("react.context"),
  Gu = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Zu = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  cs = Symbol.for("react.offscreen"),
  Vo = Symbol.iterator;
function dt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vo && e[Vo]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var V = Object.assign,
  El;
function kt(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      El = (n && n[1]) || "";
    }
  return (
    `
` +
    El +
    e
  );
}
var Cl = !1;
function xl(e, n) {
  if (!e || Cl) return "";
  Cl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          u = r.stack.split(`
`),
          o = l.length - 1,
          i = u.length - 1;
        1 <= o && 0 <= i && l[o] !== u[i];

      )
        i--;
      for (; 1 <= o && 0 <= i; o--, i--)
        if (l[o] !== u[i]) {
          if (o !== 1 || i !== 1)
            do
              if ((o--, i--, 0 > i || l[o] !== u[i])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= i);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? kt(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return kt(e.type);
    case 16:
      return kt("Lazy");
    case 13:
      return kt("Suspense");
    case 19:
      return kt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xl(e.type, !1)), e;
    case 11:
      return (e = xl(e.type.render, !1)), e;
    case 1:
      return (e = xl(e.type, !0)), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case Dn:
      return "Portal";
    case Zl:
      return "Profiler";
    case Xu:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case as:
        return (e.displayName || "Context") + ".Consumer";
      case ss:
        return (e._context.displayName || "Context") + ".Provider";
      case Gu:
        var n = e.render;
        return (
          (e = e.displayName),
          e || ((e = n.displayName || n.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zu:
        return (n = e.displayName || null), n !== null ? n : bl(e.type) || "Memo";
      case be:
        (n = e._payload), (e = e._init);
        try {
          return bl(e(n));
        } catch {}
    }
  return null;
}
function Fc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(n);
    case 8:
      return n === Xu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fs(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Uc(e) {
  var n = fs(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get,
      u = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), u.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = Uc(e));
}
function ds(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return e && (r = fs(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== t ? (n.setValue(e), !0) : !1;
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eu(e, n) {
  var t = n.checked;
  return V({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Bo(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = hn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null,
    });
}
function ps(e, n) {
  (n = n.checked), n != null && Yu(e, "checked", n, !1);
}
function nu(e, n) {
  ps(e, n);
  var t = hn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? tu(e, n.type, t) : n.hasOwnProperty("defaultValue") && tu(e, n.type, hn(n.defaultValue)),
    n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Wo(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!((r !== "submit" && r !== "reset") || (n.value !== void 0 && n.value !== null))) return;
    (n = "" + e._wrapperState.initialValue), t || n === e.value || (e.value = n), (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function tu(e, n, t) {
  (n !== "number" || Or(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Xn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + hn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ru(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Qo(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (St(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: hn(t) };
}
function hs(e, n) {
  var t = hn(n.value),
    r = hn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Ko(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ms(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lu(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ms(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var or,
  vs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (
        or = or || document.createElement("div"),
          or.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function It(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var xt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ac = ["Webkit", "ms", "Moz", "O"];
Object.keys(xt).forEach(function (e) {
  Ac.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (xt[n] = xt[e]);
  });
});
function ys(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (xt.hasOwnProperty(e) && xt[e])
    ? ("" + n).trim()
    : n + "px";
}
function gs(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = ys(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var $c = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
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
  }
);
function uu(e, n) {
  if (n) {
    if ($c[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function ou(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var iu = null;
function Ju(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var su = null,
  Gn = null,
  Zn = null;
function Yo(e) {
  if ((e = bt(e))) {
    if (typeof su != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = il(n)), su(e.stateNode, e.type, n));
  }
}
function ws(e) {
  Gn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Gn = e);
}
function ks() {
  if (Gn) {
    var e = Gn,
      n = Zn;
    if (((Zn = Gn = null), Yo(e), n)) for (e = 0; e < n.length; e++) Yo(n[e]);
  }
}
function Ss(e, n) {
  return e(n);
}
function Es() {}
var _l = !1;
function Cs(e, n, t) {
  if (_l) return e(n, t);
  _l = !0;
  try {
    return Ss(e, n, t);
  } finally {
    (_l = !1), (Gn !== null || Zn !== null) && (Es(), ks());
  }
}
function jt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = il(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var au = !1;
if (Ye)
  try {
    var pt = {};
    Object.defineProperty(pt, "passive", {
      get: function () {
        au = !0;
      },
    }),
      window.addEventListener("test", pt, pt),
      window.removeEventListener("test", pt, pt);
  } catch {
    au = !1;
  }
function Hc(e, n, t, r, l, u, o, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (m) {
    this.onError(m);
  }
}
var _t = !1,
  Mr = null,
  Ir = !1,
  cu = null,
  Vc = {
    onError: function (e) {
      (_t = !0), (Mr = e);
    },
  };
function Bc(e, n, t, r, l, u, o, i, s) {
  (_t = !1), (Mr = null), Hc.apply(Vc, arguments);
}
function Wc(e, n, t, r, l, u, o, i, s) {
  if ((Bc.apply(this, arguments), _t)) {
    if (_t) {
      var c = Mr;
      (_t = !1), (Mr = null);
    } else throw Error(y(198));
    Ir || ((Ir = !0), (cu = c));
  }
}
function In(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function xs(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null)) return n.dehydrated;
  }
  return null;
}
function Xo(e) {
  if (In(e) !== e) throw Error(y(188));
}
function Qc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = In(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var u = l.alternate;
    if (u === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === u.child) {
      for (u = l.child; u; ) {
        if (u === t) return Xo(l), e;
        if (u === r) return Xo(l), n;
        u = u.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = u);
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === t) {
          (o = !0), (t = l), (r = u);
          break;
        }
        if (i === r) {
          (o = !0), (r = l), (t = u);
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = u.child; i; ) {
          if (i === t) {
            (o = !0), (t = u), (r = l);
            break;
          }
          if (i === r) {
            (o = !0), (r = u), (t = l);
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function _s(e) {
  return (e = Qc(e)), e !== null ? Ns(e) : null;
}
function Ns(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ns(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ps = we.unstable_scheduleCallback,
  Go = we.unstable_cancelCallback,
  Kc = we.unstable_shouldYield,
  Yc = we.unstable_requestPaint,
  Y = we.unstable_now,
  Xc = we.unstable_getCurrentPriorityLevel,
  qu = we.unstable_ImmediatePriority,
  zs = we.unstable_UserBlockingPriority,
  jr = we.unstable_NormalPriority,
  Gc = we.unstable_LowPriority,
  Ls = we.unstable_IdlePriority,
  rl = null,
  $e = null;
function Zc(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : bc,
  Jc = Math.log,
  qc = Math.LN2;
function bc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Jc(e) / qc) | 0)) | 0;
}
var ir = 64,
  sr = 4194304;
function Et(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    u = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? (r = Et(i)) : ((u &= o), u !== 0 && (r = Et(u)));
  } else (o = t & ~l), o !== 0 ? (r = Et(o)) : u !== 0 && (r = Et(u));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0)))
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; ) (t = 31 - Ie(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function ef(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function nf(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
    var o = 31 - Ie(u),
      i = 1 << o,
      s = l[o];
    s === -1 ? (!(i & t) || i & r) && (l[o] = ef(i, n)) : s <= n && (e.expiredLanes |= i), (u &= ~i);
  }
}
function fu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Rs() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Nl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Jt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Ie(n)),
    (e[n] = t);
}
function tf(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Ie(t),
      u = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u);
  }
}
function bu(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Ie(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var M = 0;
function Ts(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Os,
  eo,
  Ms,
  Is,
  js,
  du = !1,
  ar = [],
  un = null,
  on = null,
  sn = null,
  Dt = new Map(),
  Ft = new Map(),
  nn = [],
  rf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zo(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      un = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      Dt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ft.delete(n.pointerId);
  }
}
function ht(e, n, t, r, l, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }),
      n !== null && ((n = bt(n)), n !== null && eo(n)),
      e)
    : ((e.eventSystemFlags |= r), (n = e.targetContainers), l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function lf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (un = ht(un, e, n, t, r, l)), !0;
    case "dragenter":
      return (on = ht(on, e, n, t, r, l)), !0;
    case "mouseover":
      return (sn = ht(sn, e, n, t, r, l)), !0;
    case "pointerover":
      var u = l.pointerId;
      return Dt.set(u, ht(Dt.get(u) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (u = l.pointerId), Ft.set(u, ht(Ft.get(u) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Ds(e) {
  var n = Cn(e.target);
  if (n !== null) {
    var t = In(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = xs(t)), n !== null)) {
          (e.blockedOn = n),
            js(e.priority, function () {
              Ms(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = pu(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (iu = r), t.target.dispatchEvent(r), (iu = null);
    } else return (n = bt(t)), n !== null && eo(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Jo(e, n, t) {
  Er(e) && t.delete(n);
}
function uf() {
  (du = !1),
    un !== null && Er(un) && (un = null),
    on !== null && Er(on) && (on = null),
    sn !== null && Er(sn) && (sn = null),
    Dt.forEach(Jo),
    Ft.forEach(Jo);
}
function mt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null), du || ((du = !0), we.unstable_scheduleCallback(we.unstable_NormalPriority, uf)));
}
function Ut(e) {
  function n(l) {
    return mt(l, e);
  }
  if (0 < ar.length) {
    mt(ar[0], e);
    for (var t = 1; t < ar.length; t++) {
      var r = ar[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    un !== null && mt(un, e), on !== null && mt(on, e), sn !== null && mt(sn, e), Dt.forEach(n), Ft.forEach(n), t = 0;
    t < nn.length;
    t++
  )
    (r = nn[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nn.length && ((t = nn[0]), t.blockedOn === null); ) Ds(t), t.blockedOn === null && nn.shift();
}
var Jn = Je.ReactCurrentBatchConfig,
  Fr = !0;
function of(e, n, t, r) {
  var l = M,
    u = Jn.transition;
  Jn.transition = null;
  try {
    (M = 1), no(e, n, t, r);
  } finally {
    (M = l), (Jn.transition = u);
  }
}
function sf(e, n, t, r) {
  var l = M,
    u = Jn.transition;
  Jn.transition = null;
  try {
    (M = 4), no(e, n, t, r);
  } finally {
    (M = l), (Jn.transition = u);
  }
}
function no(e, n, t, r) {
  if (Fr) {
    var l = pu(e, n, t, r);
    if (l === null) Dl(e, n, r, Ur, t), Zo(e, r);
    else if (lf(l, e, n, t, r)) r.stopPropagation();
    else if ((Zo(e, r), n & 4 && -1 < rf.indexOf(e))) {
      for (; l !== null; ) {
        var u = bt(l);
        if ((u !== null && Os(u), (u = pu(e, n, t, r)), u === null && Dl(e, n, r, Ur, t), u === l)) break;
        l = u;
      }
      l !== null && r.stopPropagation();
    } else Dl(e, n, r, null, t);
  }
}
var Ur = null;
function pu(e, n, t, r) {
  if (((Ur = null), (e = Ju(r)), (e = Cn(e)), e !== null))
    if (((n = In(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = xs(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Ur = e), null;
}
function Fs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Xc()) {
        case qu:
          return 1;
        case zs:
          return 4;
        case jr:
        case Gc:
          return 16;
        case Ls:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rn = null,
  to = null,
  Cr = null;
function Us() {
  if (Cr) return Cr;
  var e,
    n = to,
    t = n.length,
    r,
    l = "value" in rn ? rn.value : rn.textContent,
    u = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[u - r]; r++);
  return (Cr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function xr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && n === 13 && (e = 13)) : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function qo() {
  return !1;
}
function Se(e) {
  function n(t, r, l, u, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = u),
      (this.target = o),
      (this.currentTarget = null);
    for (var i in e) e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(u) : u[i]));
    return (
      (this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? cr : qo),
      (this.isPropagationStopped = qo),
      this
    );
  }
  return (
    V(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    n
  );
}
var st = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ro = Se(st),
  qt = V({}, st, { view: 0, detail: 0 }),
  af = Se(qt),
  Pl,
  zl,
  vt,
  ll = V({}, qt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vt &&
            (vt && e.type === "mousemove"
              ? ((Pl = e.screenX - vt.screenX), (zl = e.screenY - vt.screenY))
              : (zl = Pl = 0),
            (vt = e)),
          Pl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  bo = Se(ll),
  cf = V({}, ll, { dataTransfer: 0 }),
  ff = Se(cf),
  df = V({}, qt, { relatedTarget: 0 }),
  Ll = Se(df),
  pf = V({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hf = Se(pf),
  mf = V({}, st, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vf = Se(mf),
  yf = V({}, st, { data: 0 }),
  ei = Se(yf),
  gf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  wf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  kf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = kf[e]) ? !!n[e] : !1;
}
function lo() {
  return Sf;
}
var Ef = V({}, qt, {
    key: function (e) {
      if (e.key) {
        var n = gf[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = xr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? wf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lo,
    charCode: function (e) {
      return e.type === "keypress" ? xr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? xr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  Cf = Se(Ef),
  xf = V({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ni = Se(xf),
  _f = V({}, qt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lo,
  }),
  Nf = Se(_f),
  Pf = V({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zf = Se(Pf),
  Lf = V({}, ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Rf = Se(Lf),
  Tf = [9, 13, 27, 32],
  uo = Ye && "CompositionEvent" in window,
  Nt = null;
Ye && "documentMode" in document && (Nt = document.documentMode);
var Of = Ye && "TextEvent" in window && !Nt,
  As = Ye && (!uo || (Nt && 8 < Nt && 11 >= Nt)),
  ti = " ",
  ri = !1;
function $s(e, n) {
  switch (e) {
    case "keyup":
      return Tf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Hs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Mf(e, n) {
  switch (e) {
    case "compositionend":
      return Hs(n);
    case "keypress":
      return n.which !== 32 ? null : ((ri = !0), ti);
    case "textInput":
      return (e = n.data), e === ti && ri ? null : e;
    default:
      return null;
  }
}
function If(e, n) {
  if (Un) return e === "compositionend" || (!uo && $s(e, n)) ? ((e = Us()), (Cr = to = rn = null), (Un = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return As && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var jf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function li(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!jf[e.type] : n === "textarea";
}
function Vs(e, n, t, r) {
  ws(r),
    (n = Ar(n, "onChange")),
    0 < n.length && ((t = new ro("onChange", "change", null, t, r)), e.push({ event: t, listeners: n }));
}
var Pt = null,
  At = null;
function Df(e) {
  bs(e, 0);
}
function ul(e) {
  var n = Hn(e);
  if (ds(n)) return e;
}
function Ff(e, n) {
  if (e === "change") return n;
}
var Bs = !1;
if (Ye) {
  var Rl;
  if (Ye) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var ui = document.createElement("div");
      ui.setAttribute("oninput", "return;"), (Tl = typeof ui.oninput == "function");
    }
    Rl = Tl;
  } else Rl = !1;
  Bs = Rl && (!document.documentMode || 9 < document.documentMode);
}
function oi() {
  Pt && (Pt.detachEvent("onpropertychange", Ws), (At = Pt = null));
}
function Ws(e) {
  if (e.propertyName === "value" && ul(At)) {
    var n = [];
    Vs(n, At, e, Ju(e)), Cs(Df, n);
  }
}
function Uf(e, n, t) {
  e === "focusin" ? (oi(), (Pt = n), (At = t), Pt.attachEvent("onpropertychange", Ws)) : e === "focusout" && oi();
}
function Af(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ul(At);
}
function $f(e, n) {
  if (e === "click") return ul(n);
}
function Hf(e, n) {
  if (e === "input" || e === "change") return ul(n);
}
function Vf(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var De = typeof Object.is == "function" ? Object.is : Vf;
function $t(e, n) {
  if (De(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Gl.call(n, l) || !De(e[l], n[l])) return !1;
  }
  return !0;
}
function ii(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function si(e, n) {
  var t = ii(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n)) return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ii(t);
  }
}
function Qs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Qs(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Ks() {
  for (var e = window, n = Or(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Or(e.document);
  }
  return n;
}
function oo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Bf(e) {
  var n = Ks(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Qs(t.ownerDocument.documentElement, t)) {
    if (r !== null && oo(t)) {
      if (((n = r.start), (e = r.end), e === void 0 && (e = n), "selectionStart" in t))
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (((e = ((n = t.ownerDocument || document) && n.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var l = t.textContent.length,
          u = Math.min(r.start, l);
        (r = r.end === void 0 ? u : Math.min(r.end, l)),
          !e.extend && u > r && ((l = r), (r = u), (u = l)),
          (l = si(t, u));
        var o = si(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          u > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Wf = Ye && "documentMode" in document && 11 >= document.documentMode,
  An = null,
  hu = null,
  zt = null,
  mu = !1;
function ai(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  mu ||
    An == null ||
    An !== Or(r) ||
    ((r = An),
    "selectionStart" in r && oo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zt && $t(zt, r)) ||
      ((zt = r),
      (r = Ar(hu, "onSelect")),
      0 < r.length &&
        ((n = new ro("onSelect", "select", null, n, t)), e.push({ event: n, listeners: r }), (n.target = An))));
}
function fr(e, n) {
  var t = {};
  return (t[e.toLowerCase()] = n.toLowerCase()), (t["Webkit" + e] = "webkit" + n), (t["Moz" + e] = "moz" + n), t;
}
var $n = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd"),
  },
  Ol = {},
  Ys = {};
Ye &&
  ((Ys = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation),
  "TransitionEvent" in window || delete $n.transitionend.transition);
function ol(e) {
  if (Ol[e]) return Ol[e];
  if (!$n[e]) return e;
  var n = $n[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Ys) return (Ol[e] = n[t]);
  return e;
}
var Xs = ol("animationend"),
  Gs = ol("animationiteration"),
  Zs = ol("animationstart"),
  Js = ol("transitionend"),
  qs = new Map(),
  ci =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vn(e, n) {
  qs.set(e, n), Mn(n, [e]);
}
for (var Ml = 0; Ml < ci.length; Ml++) {
  var Il = ci[Ml],
    Qf = Il.toLowerCase(),
    Kf = Il[0].toUpperCase() + Il.slice(1);
  vn(Qf, "on" + Kf);
}
vn(Xs, "onAnimationEnd");
vn(Gs, "onAnimationIteration");
vn(Zs, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(Js, "onTransitionEnd");
et("onMouseEnter", ["mouseout", "mouseover"]);
et("onMouseLeave", ["mouseout", "mouseover"]);
et("onPointerEnter", ["pointerout", "pointerover"]);
et("onPointerLeave", ["pointerout", "pointerover"]);
Mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ct =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ct));
function fi(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Wc(r, n, void 0, e), (e.currentTarget = null);
}
function bs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o],
            s = i.instance,
            c = i.currentTarget;
          if (((i = i.listener), s !== u && l.isPropagationStopped())) break e;
          fi(l, i, c), (u = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((i = r[o]), (s = i.instance), (c = i.currentTarget), (i = i.listener), s !== u && l.isPropagationStopped())
          )
            break e;
          fi(l, i, c), (u = s);
        }
    }
  }
  if (Ir) throw ((e = cu), (Ir = !1), (cu = null), e);
}
function j(e, n) {
  var t = n[ku];
  t === void 0 && (t = n[ku] = new Set());
  var r = e + "__bubble";
  t.has(r) || (ea(n, e, 2, !1), t.add(r));
}
function jl(e, n, t) {
  var r = 0;
  n && (r |= 4), ea(t, e, r, n);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Ht(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      is.forEach(function (t) {
        t !== "selectionchange" && (Yf.has(t) || jl(t, !1, e), jl(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[dr] || ((n[dr] = !0), jl("selectionchange", !1, n));
  }
}
function ea(e, n, t, r) {
  switch (Fs(n)) {
    case 1:
      var l = of;
      break;
    case 4:
      l = sf;
      break;
    default:
      l = no;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !au || (n !== "touchstart" && n !== "touchmove" && n !== "wheel") || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Dl(e, n, t, r, l) {
  var u = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo), s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; i !== null; ) {
          if (((o = Cn(i)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = u = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  Cs(function () {
    var c = u,
      m = Ju(t),
      h = [];
    e: {
      var p = qs.get(e);
      if (p !== void 0) {
        var g = ro,
          w = e;
        switch (e) {
          case "keypress":
            if (xr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = Cf;
            break;
          case "focusin":
            (w = "focus"), (g = Ll);
            break;
          case "focusout":
            (w = "blur"), (g = Ll);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ll;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = bo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = ff;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Nf;
            break;
          case Xs:
          case Gs:
          case Zs:
            g = hf;
            break;
          case Js:
            g = zf;
            break;
          case "scroll":
            g = af;
            break;
          case "wheel":
            g = Rf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ni;
        }
        var k = (n & 4) !== 0,
          F = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 && v !== null && ((d = v), f !== null && ((v = jt(a, f)), v != null && k.push(Vt(a, v, d)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < k.length && ((p = new g(p, w, null, t, m)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p && t !== iu && (w = t.relatedTarget || t.fromElement) && (Cn(w) || w[Xe]))
        )
          break e;
        if (
          (g || p) &&
          ((p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window),
          g
            ? ((w = t.relatedTarget || t.toElement),
              (g = c),
              (w = w ? Cn(w) : null),
              w !== null && ((F = In(w)), w !== F || (w.tag !== 5 && w.tag !== 6)) && (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((k = bo),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = ni), (v = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
            (F = g == null ? p : Hn(g)),
            (d = w == null ? p : Hn(w)),
            (p = new k(v, a + "leave", g, t, m)),
            (p.target = F),
            (p.relatedTarget = d),
            (v = null),
            Cn(m) === c && ((k = new k(f, a + "enter", w, t, m)), (k.target = d), (k.relatedTarget = F), (v = k)),
            (F = v),
            g && w)
          )
            n: {
              for (k = g, f = w, a = 0, d = k; d; d = jn(d)) a++;
              for (d = 0, v = f; v; v = jn(v)) d++;
              for (; 0 < a - d; ) (k = jn(k)), a--;
              for (; 0 < d - a; ) (f = jn(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break n;
                (k = jn(k)), (f = jn(f));
              }
              k = null;
            }
          else k = null;
          g !== null && di(h, p, g, k, !1), w !== null && F !== null && di(h, F, w, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? Hn(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var E = Ff;
        else if (li(p))
          if (Bs) E = Hf;
          else {
            E = Af;
            var x = Uf;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = $f);
        if (E && (E = E(e, c))) {
          Vs(h, E, t, m);
          break e;
        }
        x && x(e, p, c),
          e === "focusout" && (x = p._wrapperState) && x.controlled && p.type === "number" && tu(p, "number", p.value);
      }
      switch (((x = c ? Hn(c) : window), e)) {
        case "focusin":
          (li(x) || x.contentEditable === "true") && ((An = x), (hu = c), (zt = null));
          break;
        case "focusout":
          zt = hu = An = null;
          break;
        case "mousedown":
          mu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mu = !1), ai(h, t, m);
          break;
        case "selectionchange":
          if (Wf) break;
        case "keydown":
        case "keyup":
          ai(h, t, m);
      }
      var _;
      if (uo)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Un ? $s(e, t) && (N = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (As &&
          t.locale !== "ko" &&
          (Un || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Un && (_ = Us())
            : ((rn = m), (to = "value" in rn ? rn.value : rn.textContent), (Un = !0))),
        (x = Ar(c, N)),
        0 < x.length &&
          ((N = new ei(N, e, null, t, m)),
          h.push({ event: N, listeners: x }),
          _ ? (N.data = _) : ((_ = Hs(t)), _ !== null && (N.data = _)))),
        (_ = Of ? Mf(e, t) : If(e, t)) &&
          ((c = Ar(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new ei("onBeforeInput", "beforeinput", null, t, m)),
            h.push({ event: m, listeners: c }),
            (m.data = _)));
    }
    bs(h, n);
  });
}
function Vt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ar(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      u = l.stateNode;
    l.tag === 5 &&
      u !== null &&
      ((l = u), (u = jt(e, t)), u != null && r.unshift(Vt(e, u, l)), (u = jt(e, n)), u != null && r.push(Vt(e, u, l))),
      (e = e.return);
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function di(e, n, t, r, l) {
  for (var u = n._reactName, o = []; t !== null && t !== r; ) {
    var i = t,
      s = i.alternate,
      c = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 &&
      c !== null &&
      ((i = c),
      l
        ? ((s = jt(t, u)), s != null && o.unshift(Vt(t, s, i)))
        : l || ((s = jt(t, u)), s != null && o.push(Vt(t, s, i)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Xf = /\r\n?/g,
  Gf = /\u0000|\uFFFD/g;
function pi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Xf,
      `
`
    )
    .replace(Gf, "");
}
function pr(e, n, t) {
  if (((n = pi(n)), pi(e) !== n && t)) throw Error(y(425));
}
function $r() {}
var vu = null,
  yu = null;
function gu(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var wu = typeof setTimeout == "function" ? setTimeout : void 0,
  Zf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hi = typeof Promise == "function" ? Promise : void 0,
  Jf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hi < "u"
      ? function (e) {
          return hi.resolve(null).then(e).catch(qf);
        }
      : wu;
function qf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Ut(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Ut(n);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function mi(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var at = Math.random().toString(36).slice(2),
  Ae = "__reactFiber$" + at,
  Bt = "__reactProps$" + at,
  Xe = "__reactContainer$" + at,
  ku = "__reactEvents$" + at,
  bf = "__reactListeners$" + at,
  ed = "__reactHandles$" + at;
function Cn(e) {
  var n = e[Ae];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Xe] || t[Ae])) {
      if (((t = n.alternate), n.child !== null || (t !== null && t.child !== null)))
        for (e = mi(e); e !== null; ) {
          if ((t = e[Ae])) return t;
          e = mi(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function bt(e) {
  return (e = e[Ae] || e[Xe]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Bt] || null;
}
var Su = [],
  Vn = -1;
function yn(e) {
  return { current: e };
}
function D(e) {
  0 > Vn || ((e.current = Su[Vn]), (Su[Vn] = null), Vn--);
}
function I(e, n) {
  Vn++, (Su[Vn] = e.current), (e.current = n);
}
var mn = {},
  oe = yn(mn),
  pe = yn(!1),
  zn = mn;
function nt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    u;
  for (u in t) l[u] = n[u];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Hr() {
  D(pe), D(oe);
}
function vi(e, n, t) {
  if (oe.current !== mn) throw Error(y(168));
  I(oe, n), I(pe, t);
}
function na(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function")) return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Fc(e) || "Unknown", l));
  return V({}, t, r);
}
function Vr(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (zn = oe.current),
    I(oe, e),
    I(pe, pe.current),
    !0
  );
}
function yi(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t ? ((e = na(e, n, zn)), (r.__reactInternalMemoizedMergedChildContext = e), D(pe), D(oe), I(oe, e)) : D(pe), I(pe, t);
}
var Be = null,
  sl = !1,
  Ul = !1;
function ta(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function nd(e) {
  (sl = !0), ta(e);
}
function gn() {
  if (!Ul && Be !== null) {
    Ul = !0;
    var e = 0,
      n = M;
    try {
      var t = Be;
      for (M = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (sl = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), Ps(qu, gn), l);
    } finally {
      (M = n), (Ul = !1);
    }
  }
  return null;
}
var Bn = [],
  Wn = 0,
  Br = null,
  Wr = 0,
  Ee = [],
  Ce = 0,
  Ln = null,
  We = 1,
  Qe = "";
function Sn(e, n) {
  (Bn[Wn++] = Wr), (Bn[Wn++] = Br), (Br = e), (Wr = n);
}
function ra(e, n, t) {
  (Ee[Ce++] = We), (Ee[Ce++] = Qe), (Ee[Ce++] = Ln), (Ln = e);
  var r = We;
  e = Qe;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var u = 32 - Ie(n) + l;
  if (30 < u) {
    var o = l - (l % 5);
    (u = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Ie(n) + l)) | (t << l) | r),
      (Qe = u + e);
  } else (We = (1 << u) | (t << l) | r), (Qe = e);
}
function io(e) {
  e.return !== null && (Sn(e, 1), ra(e, 1, 0));
}
function so(e) {
  for (; e === Br; ) (Br = Bn[--Wn]), (Bn[Wn] = null), (Wr = Bn[--Wn]), (Bn[Wn] = null);
  for (; e === Ln; )
    (Ln = Ee[--Ce]), (Ee[Ce] = null), (Qe = Ee[--Ce]), (Ee[Ce] = null), (We = Ee[--Ce]), (Ee[Ce] = null);
}
var ge = null,
  ye = null,
  A = !1,
  Me = null;
function la(e, n) {
  var t = xe(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function gi(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n),
        n !== null ? ((e.stateNode = n), (ge = e), (ye = an(n.firstChild)), !0) : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ge = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Ln !== null ? { id: We, overflow: Qe } : null),
            (e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }),
            (t = xe(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ge = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Eu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cu(e) {
  if (A) {
    var n = ye;
    if (n) {
      var t = n;
      if (!gi(e, n)) {
        if (Eu(e)) throw Error(y(418));
        n = an(t.nextSibling);
        var r = ge;
        n && gi(e, n) ? la(r, t) : ((e.flags = (e.flags & -4097) | 2), (A = !1), (ge = e));
      }
    } else {
      if (Eu(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (ge = e);
    }
  }
}
function wi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ge = e;
}
function hr(e) {
  if (e !== ge) return !1;
  if (!A) return wi(e), (A = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type), (n = n !== "head" && n !== "body" && !gu(e.type, e.memoizedProps))),
    n && (n = ye))
  ) {
    if (Eu(e)) throw (ua(), Error(y(418)));
    for (; n; ) la(e, n), (n = an(n.nextSibling));
  }
  if ((wi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ye = an(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function ua() {
  for (var e = ye; e; ) e = an(e.nextSibling);
}
function tt() {
  (ye = ge = null), (A = !1);
}
function ao(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var td = Je.ReactCurrentBatchConfig;
function yt(e, n, t) {
  if (((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        u = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u
        ? n.ref
        : ((n = function (o) {
            var i = l.refs;
            o === null ? delete i[u] : (i[u] = o);
          }),
          (n._stringRef = u),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)))
  );
}
function ki(e) {
  var n = e._init;
  return n(e._payload);
}
function oa(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = pn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function u(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate), d !== null ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d) : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, v) {
    return a === null || a.tag !== 6 ? ((a = Ql(d, f.mode, v)), (a.return = f), a) : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Fn
      ? m(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === E || (typeof E == "object" && E !== null && E.$$typeof === be && ki(E) === a.type))
      ? ((v = l(a, d.props)), (v.ref = yt(f, a, d)), (v.return = f), v)
      : ((v = Tr(d.type, d.key, d.props, null, f.mode, v)), (v.ref = yt(f, a, d)), (v.return = f), v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Kl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function m(f, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Pn(d, f.mode, v, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Ql("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return (d = Tr(a.type, a.key, a.props, null, f.mode, d)), (d.ref = yt(f, null, a)), (d.return = f), d;
        case Dn:
          return (a = Kl(a, f.mode, d)), (a.return = f), a;
        case be:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (St(a) || dt(a)) return (a = Pn(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number") return E !== null ? null : i(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === E ? s(f, a, d, v) : null;
        case Dn:
          return d.key === E ? c(f, a, d, v) : null;
        case be:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (St(d) || dt(d)) return E !== null ? null : m(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number") return (f = f.get(d) || null), i(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case lr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case Dn:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case be:
          var x = v._init;
          return g(f, a, d, x(v._payload), E);
      }
      if (St(v) || dt(v)) return (f = f.get(d) || null), m(a, f, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, x = null, _ = a, N = (a = 0), W = null; _ !== null && N < d.length; N++) {
      _.index > N ? ((W = _), (_ = null)) : (W = _.sibling);
      var R = p(f, _, d[N], v);
      if (R === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && R.alternate === null && n(f, _),
        (a = u(R, a, N)),
        x === null ? (E = R) : (x.sibling = R),
        (x = R),
        (_ = W);
    }
    if (N === d.length) return t(f, _), A && Sn(f, N), E;
    if (_ === null) {
      for (; N < d.length; N++)
        (_ = h(f, d[N], v)), _ !== null && ((a = u(_, a, N)), x === null ? (E = _) : (x.sibling = _), (x = _));
      return A && Sn(f, N), E;
    }
    for (_ = r(f, _); N < d.length; N++)
      (W = g(_, f, N, d[N], v)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? N : W.key),
          (a = u(W, a, N)),
          x === null ? (E = W) : (x.sibling = W),
          (x = W));
    return (
      e &&
        _.forEach(function (ze) {
          return n(f, ze);
        }),
      A && Sn(f, N),
      E
    );
  }
  function k(f, a, d, v) {
    var E = dt(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (var x = (E = null), _ = a, N = (a = 0), W = null, R = d.next(); _ !== null && !R.done; N++, R = d.next()) {
      _.index > N ? ((W = _), (_ = null)) : (W = _.sibling);
      var ze = p(f, _, R.value, v);
      if (ze === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && ze.alternate === null && n(f, _),
        (a = u(ze, a, N)),
        x === null ? (E = ze) : (x.sibling = ze),
        (x = ze),
        (_ = W);
    }
    if (R.done) return t(f, _), A && Sn(f, N), E;
    if (_ === null) {
      for (; !R.done; N++, R = d.next())
        (R = h(f, R.value, v)), R !== null && ((a = u(R, a, N)), x === null ? (E = R) : (x.sibling = R), (x = R));
      return A && Sn(f, N), E;
    }
    for (_ = r(f, _); !R.done; N++, R = d.next())
      (R = g(_, f, N, R.value, v)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? N : R.key),
          (a = u(R, a, N)),
          x === null ? (E = R) : (x.sibling = R),
          (x = R));
    return (
      e &&
        _.forEach(function (ct) {
          return n(f, ct);
        }),
      A && Sn(f, N),
      E
    );
  }
  function F(f, a, d, v) {
    if (
      (typeof d == "object" && d !== null && d.type === Fn && d.key === null && (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var E = d.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (((E = d.type), E === Fn)) {
                  if (x.tag === 7) {
                    t(f, x.sibling), (a = l(x, d.props.children)), (a.return = f), (f = a);
                    break e;
                  }
                } else if (
                  x.elementType === E ||
                  (typeof E == "object" && E !== null && E.$$typeof === be && ki(E) === x.type)
                ) {
                  t(f, x.sibling), (a = l(x, d.props)), (a.ref = yt(f, x, d)), (a.return = f), (f = a);
                  break e;
                }
                t(f, x);
                break;
              } else n(f, x);
              x = x.sibling;
            }
            d.type === Fn
              ? ((a = Pn(d.props.children, f.mode, v, d.key)), (a.return = f), (f = a))
              : ((v = Tr(d.type, d.key, d.props, null, f.mode, v)), (v.ref = yt(f, a, d)), (v.return = f), (f = v));
          }
          return o(f);
        case Dn:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling), (a = l(a, d.children || [])), (a.return = f), (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = Kl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return o(f);
        case be:
          return (x = d._init), F(f, a, x(d._payload), v);
      }
      if (St(d)) return w(f, a, d, v);
      if (dt(d)) return k(f, a, d, v);
      mr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Ql(d, f.mode, v)), (a.return = f), (f = a)),
        o(f))
      : t(f, a);
  }
  return F;
}
var rt = oa(!0),
  ia = oa(!1),
  Qr = yn(null),
  Kr = null,
  Qn = null,
  co = null;
function fo() {
  co = Qn = Kr = null;
}
function po(e) {
  var n = Qr.current;
  D(Qr), (e._currentValue = n);
}
function xu(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function qn(e, n) {
  (Kr = e),
    (co = Qn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & n && (de = !0), (e.firstContext = null));
}
function Ne(e) {
  var n = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Qn === null)) {
      if (Kr === null) throw Error(y(308));
      (Qn = e), (Kr.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return n;
}
var xn = null;
function ho(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function sa(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? ((t.next = t), ho(n)) : ((t.next = l.next), (l.next = t)), (n.interleaved = t), Ge(e, r);
}
function Ge(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n), (t = e.alternate), t !== null && (t.childLanes |= n), (t = e), (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var en = !1;
function mo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function aa(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function cn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), T & 2)) {
    var l = r.pending;
    return l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)), (r.pending = n), Ge(e, t);
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), ho(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ge(e, t)
  );
}
function _r(e, n, t) {
  if (((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bu(e, t);
  }
}
function Si(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      u = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        u === null ? (l = u = o) : (u = u.next = o), (t = t.next);
      } while (t !== null);
      u === null ? (l = u = n) : (u = u.next = n);
    } else l = u = n;
    (t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate), e === null ? (t.firstBaseUpdate = n) : (e.next = n), (t.lastBaseUpdate = n);
}
function Yr(e, n, t, r) {
  var l = e.updateQueue;
  en = !1;
  var u = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i,
      c = s.next;
    (s.next = null), o === null ? (u = c) : (o.next = c), (o = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (i = m.lastBaseUpdate),
      i !== o && (i === null ? (m.firstBaseUpdate = c) : (i.next = c), (m.lastBaseUpdate = s)));
  }
  if (u !== null) {
    var h = l.baseState;
    (o = 0), (m = c = s = null), (i = u);
    do {
      var p = i.lane,
        g = i.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next = { eventTime: g, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
        e: {
          var w = e,
            k = i;
          switch (((p = n), (g = t), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (((w = k.payload), (p = typeof w == "function" ? w.call(g, h, p) : w), p == null)) break e;
              h = V({}, h, p);
              break e;
            case 2:
              en = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64), (p = l.effects), p === null ? (l.effects = [i]) : p.push(i));
      } else
        (g = { eventTime: g, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }),
          m === null ? ((c = m = g), (s = h)) : (m = m.next = g),
          (o |= p);
      if (((i = i.next), i === null)) {
        if (((i = l.shared.pending), i === null)) break;
        (p = i), (i = p.next), (p.next = null), (l.lastBaseUpdate = p), (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (o |= l.lane), (l = l.next);
      while (l !== n);
    } else u === null && (l.shared.lanes = 0);
    (Tn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Ei(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function")) throw Error(y(191, l));
        l.call(r);
      }
    }
}
var er = {},
  He = yn(er),
  Wt = yn(er),
  Qt = yn(er);
function _n(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function vo(e, n) {
  switch ((I(Qt, n), I(Wt, e), I(He, er), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : lu(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n), (n = e.namespaceURI || null), (e = e.tagName), (n = lu(n, e));
  }
  D(He), I(He, n);
}
function lt() {
  D(He), D(Wt), D(Qt);
}
function ca(e) {
  _n(Qt.current);
  var n = _n(He.current),
    t = lu(n, e.type);
  n !== t && (I(Wt, e), I(He, t));
}
function yo(e) {
  Wt.current === e && (D(He), D(Wt));
}
var $ = yn(0);
function Xr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Al = [];
function go() {
  for (var e = 0; e < Al.length; e++) Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Nr = Je.ReactCurrentDispatcher,
  $l = Je.ReactCurrentBatchConfig,
  Rn = 0,
  H = null,
  G = null,
  q = null,
  Gr = !1,
  Lt = !1,
  Kt = 0,
  rd = 0;
function re() {
  throw Error(y(321));
}
function wo(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!De(e[t], n[t])) return !1;
  return !0;
}
function ko(e, n, t, r, l, u) {
  if (
    ((Rn = u),
    (H = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? id : sd),
    (e = t(r, l)),
    Lt)
  ) {
    u = 0;
    do {
      if (((Lt = !1), (Kt = 0), 25 <= u)) throw Error(y(301));
      (u += 1), (q = G = null), (n.updateQueue = null), (Nr.current = ad), (e = t(r, l));
    } while (Lt);
  }
  if (((Nr.current = Zr), (n = G !== null && G.next !== null), (Rn = 0), (q = G = H = null), (Gr = !1), n))
    throw Error(y(300));
  return e;
}
function So() {
  var e = Kt !== 0;
  return (Kt = 0), e;
}
function Ue() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? (H.memoizedState = q = e) : (q = q.next = e), q;
}
function Pe() {
  if (G === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var n = q === null ? H.memoizedState : q.next;
  if (n !== null) (q = n), (G = e);
  else {
    if (e === null) throw Error(y(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (H.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function Yt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Hl(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    u = t.pending;
  if (u !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = u.next), (u.next = o);
    }
    (r.baseQueue = l = u), (t.pending = null);
  }
  if (l !== null) {
    (u = l.next), (r = r.baseState);
    var i = (o = null),
      s = null,
      c = u;
    do {
      var m = c.lane;
      if ((Rn & m) === m)
        s !== null &&
          (s = s.next =
            { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = { lane: m, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
        s === null ? ((i = s = h), (o = r)) : (s = s.next = h), (H.lanes |= m), (Tn |= m);
      }
      c = c.next;
    } while (c !== null && c !== u);
    s === null ? (o = r) : (s.next = i),
      De(r, n.memoizedState) || (de = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (u = l.lane), (H.lanes |= u), (Tn |= u), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Vl(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    u = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (u = e(u, o.action)), (o = o.next);
    while (o !== l);
    De(u, n.memoizedState) || (de = !0),
      (n.memoizedState = u),
      n.baseQueue === null && (n.baseState = u),
      (t.lastRenderedState = u);
  }
  return [u, r];
}
function fa() {}
function da(e, n) {
  var t = H,
    r = Pe(),
    l = n(),
    u = !De(r.memoizedState, l);
  if (
    (u && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Eo(ma.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || u || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (((t.flags |= 2048), Xt(9, ha.bind(null, t, r, l, n), void 0, null), b === null)) throw Error(y(349));
    Rn & 30 || pa(t, n, l);
  }
  return l;
}
function pa(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = H.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }), (H.updateQueue = n), (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ha(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), va(n) && ya(e);
}
function ma(e, n, t) {
  return t(function () {
    va(n) && ya(e);
  });
}
function va(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !De(e, t);
  } catch {
    return !0;
  }
}
function ya(e) {
  var n = Ge(e, 1);
  n !== null && je(n, e, 1, -1);
}
function Ci(e) {
  var n = Ue();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: e }),
    (n.queue = e),
    (e = e.dispatch = od.bind(null, H, e)),
    [n.memoizedState, e]
  );
}
function Xt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = H.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }), (H.updateQueue = n), (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null ? (n.lastEffect = e.next = e) : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function ga() {
  return Pe().memoizedState;
}
function Pr(e, n, t, r) {
  var l = Ue();
  (H.flags |= e), (l.memoizedState = Xt(1 | n, t, void 0, r === void 0 ? null : r));
}
function al(e, n, t, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((u = o.destroy), r !== null && wo(r, o.deps))) {
      l.memoizedState = Xt(n, t, u, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = Xt(1 | n, t, u, r));
}
function xi(e, n) {
  return Pr(8390656, 8, e, n);
}
function Eo(e, n) {
  return al(2048, 8, e, n);
}
function wa(e, n) {
  return al(4, 2, e, n);
}
function ka(e, n) {
  return al(4, 4, e, n);
}
function Sa(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Ea(e, n, t) {
  return (t = t != null ? t.concat([e]) : null), al(4, 4, Sa.bind(null, n, e), t);
}
function Co() {}
function Ca(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wo(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
}
function xa(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wo(n, r[1]) ? r[0] : ((e = e()), (t.memoizedState = [e, n]), e);
}
function _a(e, n, t) {
  return Rn & 21
    ? (De(t, n) || ((t = Rs()), (H.lanes |= t), (Tn |= t), (e.baseState = !0)), n)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = t));
}
function ld(e, n) {
  var t = M;
  (M = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), n();
  } finally {
    (M = t), ($l.transition = r);
  }
}
function Na() {
  return Pe().memoizedState;
}
function ud(e, n, t) {
  var r = dn(e);
  if (((t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }), Pa(e))) za(n, t);
  else if (((t = sa(e, n, t, r)), t !== null)) {
    var l = se();
    je(t, e, r, l), La(t, n, r);
  }
}
function od(e, n, t) {
  var r = dn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Pa(e)) za(n, l);
  else {
    var u = e.alternate;
    if (e.lanes === 0 && (u === null || u.lanes === 0) && ((u = n.lastRenderedReducer), u !== null))
      try {
        var o = n.lastRenderedState,
          i = u(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = i), De(i, o))) {
          var s = n.interleaved;
          s === null ? ((l.next = l), ho(n)) : ((l.next = s.next), (s.next = l)), (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = sa(e, n, l, r)), t !== null && ((l = se()), je(t, e, r, l), La(t, n, r));
  }
}
function Pa(e) {
  var n = e.alternate;
  return e === H || (n !== null && n === H);
}
function za(e, n) {
  Lt = Gr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)), (e.pending = n);
}
function La(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bu(e, t);
  }
}
var Zr = {
    readContext: Ne,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: Ne,
    useCallback: function (e, n) {
      return (Ue().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ne,
    useEffect: xi,
    useImperativeHandle: function (e, n, t) {
      return (t = t != null ? t.concat([e]) : null), Pr(4194308, 4, Sa.bind(null, n, e), t);
    },
    useLayoutEffect: function (e, n) {
      return Pr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Pr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Ue();
      return (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e;
    },
    useReducer: function (e, n, t) {
      var r = Ue();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = ud.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Ue();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Ci,
    useDebugValue: Co,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Ci(!1),
        n = e[0];
      return (e = ld.bind(null, e[1])), (Ue().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = H,
        l = Ue();
      if (A) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), b === null)) throw Error(y(349));
        Rn & 30 || pa(r, n, t);
      }
      l.memoizedState = t;
      var u = { value: t, getSnapshot: n };
      return (
        (l.queue = u),
        xi(ma.bind(null, r, u, e), [e]),
        (r.flags |= 2048),
        Xt(9, ha.bind(null, r, u, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Ue(),
        n = b.identifierPrefix;
      if (A) {
        var t = Qe,
          r = We;
        (t = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Kt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = rd++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  sd = {
    readContext: Ne,
    useCallback: Ca,
    useContext: Ne,
    useEffect: Eo,
    useImperativeHandle: Ea,
    useInsertionEffect: wa,
    useLayoutEffect: ka,
    useMemo: xa,
    useReducer: Hl,
    useRef: ga,
    useState: function () {
      return Hl(Yt);
    },
    useDebugValue: Co,
    useDeferredValue: function (e) {
      var n = Pe();
      return _a(n, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Yt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Na,
    unstable_isNewReconciler: !1,
  },
  ad = {
    readContext: Ne,
    useCallback: Ca,
    useContext: Ne,
    useEffect: Eo,
    useImperativeHandle: Ea,
    useInsertionEffect: wa,
    useLayoutEffect: ka,
    useMemo: xa,
    useReducer: Vl,
    useRef: ga,
    useState: function () {
      return Vl(Yt);
    },
    useDebugValue: Co,
    useDeferredValue: function (e) {
      var n = Pe();
      return G === null ? (n.memoizedState = e) : _a(n, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Yt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Na,
    unstable_isNewReconciler: !1,
  };
function Te(e, n) {
  if (e && e.defaultProps) {
    (n = V({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function _u(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : V({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = se(),
      l = dn(e),
      u = Ke(r, l);
    (u.payload = n), t != null && (u.callback = t), (n = cn(e, u, l)), n !== null && (je(n, e, l, r), _r(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = se(),
      l = dn(e),
      u = Ke(r, l);
    (u.tag = 1),
      (u.payload = n),
      t != null && (u.callback = t),
      (n = cn(e, u, l)),
      n !== null && (je(n, e, l, r), _r(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = se(),
      r = dn(e),
      l = Ke(t, r);
    (l.tag = 2), n != null && (l.callback = n), (n = cn(e, l, r)), n !== null && (je(n, e, r, t), _r(n, e, r));
  },
};
function _i(e, n, t, r, l, u, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, u, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !$t(t, r) || !$t(l, u)
      : !0
  );
}
function Ra(e, n, t) {
  var r = !1,
    l = mn,
    u = n.contextType;
  return (
    typeof u == "object" && u !== null
      ? (u = Ne(u))
      : ((l = he(n) ? zn : oe.current), (r = n.contextTypes), (u = (r = r != null) ? nt(e, l) : mn)),
    (n = new n(t, u)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = cl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    n
  );
}
function Ni(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && cl.enqueueReplaceState(n, n.state, null);
}
function Nu(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = {}), mo(e);
  var u = n.contextType;
  typeof u == "object" && u !== null ? (l.context = Ne(u)) : ((u = he(n) ? zn : oe.current), (l.context = nt(e, u))),
    (l.state = e.memoizedState),
    (u = n.getDerivedStateFromProps),
    typeof u == "function" && (_u(e, n, u, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
      n !== l.state && cl.enqueueReplaceState(l, l.state, null),
      Yr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ut(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Dc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (u) {
    l =
      `
Error generating stack: ` +
      u.message +
      `
` +
      u.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Bl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Pu(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var cd = typeof WeakMap == "function" ? WeakMap : Map;
function Ta(e, n, t) {
  (t = Ke(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      qr || ((qr = !0), (Fu = r)), Pu(e, n);
    }),
    t
  );
}
function Oa(e, n, t) {
  (t = Ke(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Pu(e, n);
      });
  }
  var u = e.stateNode;
  return (
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (t.callback = function () {
        Pu(e, n), typeof r != "function" && (fn === null ? (fn = new Set([this])) : fn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
      }),
    t
  );
}
function Pi(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = xd.bind(null, e, n, t)), n.then(e, e));
}
function zi(e) {
  do {
    var n;
    if (((n = e.tag === 13) && ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)), n)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Li(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 && (t.alternate === null ? (t.tag = 17) : ((n = Ke(-1, 1)), (n.tag = 2), cn(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var fd = Je.ReactCurrentOwner,
  de = !1;
function ie(e, n, t, r) {
  n.child = e === null ? ia(n, null, t, r) : rt(n, e.child, t, r);
}
function Ri(e, n, t, r, l) {
  t = t.render;
  var u = n.ref;
  return (
    qn(n, l),
    (r = ko(e, n, t, r, u, l)),
    (t = So()),
    e !== null && !de
      ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~l), Ze(e, n, l))
      : (A && t && io(n), (n.flags |= 1), ie(e, n, r, l), n.child)
  );
}
function Ti(e, n, t, r, l) {
  if (e === null) {
    var u = t.type;
    return typeof u == "function" &&
      !To(u) &&
      u.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = u), Ma(e, n, u, r, l))
      : ((e = Tr(t.type, null, r, n, n.mode, l)), (e.ref = n.ref), (e.return = n), (n.child = e));
  }
  if (((u = e.child), !(e.lanes & l))) {
    var o = u.memoizedProps;
    if (((t = t.compare), (t = t !== null ? t : $t), t(o, r) && e.ref === n.ref)) return Ze(e, n, l);
  }
  return (n.flags |= 1), (e = pn(u, r)), (e.ref = n.ref), (e.return = n), (n.child = e);
}
function Ma(e, n, t, r, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if ($t(u, r) && e.ref === n.ref)
      if (((de = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0)) e.flags & 131072 && (de = !0);
      else return (n.lanes = e.lanes), Ze(e, n, l);
  }
  return zu(e, n, t, r, l);
}
function Ia(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1)) (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), I(Yn, ve), (ve |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = u !== null ? u.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (n.updateQueue = null),
          I(Yn, ve),
          (ve |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = u !== null ? u.baseLanes : t),
        I(Yn, ve),
        (ve |= r);
    }
  else u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t), I(Yn, ve), (ve |= r);
  return ie(e, n, l, t), n.child;
}
function ja(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) && ((n.flags |= 512), (n.flags |= 2097152));
}
function zu(e, n, t, r, l) {
  var u = he(t) ? zn : oe.current;
  return (
    (u = nt(n, u)),
    qn(n, l),
    (t = ko(e, n, t, r, u, l)),
    (r = So()),
    e !== null && !de
      ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~l), Ze(e, n, l))
      : (A && r && io(n), (n.flags |= 1), ie(e, n, t, l), n.child)
  );
}
function Oi(e, n, t, r, l) {
  if (he(t)) {
    var u = !0;
    Vr(n);
  } else u = !1;
  if ((qn(n, l), n.stateNode === null)) zr(e, n), Ra(n, t, r), Nu(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      i = n.memoizedProps;
    o.props = i;
    var s = o.context,
      c = t.contextType;
    typeof c == "object" && c !== null ? (c = Ne(c)) : ((c = he(t) ? zn : oe.current), (c = nt(n, c)));
    var m = t.getDerivedStateFromProps,
      h = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((i !== r || s !== c) && Ni(n, o, r, c)),
      (en = !1);
    var p = n.memoizedState;
    (o.state = p),
      Yr(n, r, o, l),
      (s = n.memoizedState),
      i !== r || p !== s || pe.current || en
        ? (typeof m == "function" && (_u(n, t, m, r), (s = n.memoizedState)),
          (i = en || _i(n, t, i, r, p, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = i))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), (r = !1));
  } else {
    (o = n.stateNode),
      aa(e, n),
      (i = n.memoizedProps),
      (c = n.type === n.elementType ? i : Te(n.type, i)),
      (o.props = c),
      (h = n.pendingProps),
      (p = o.context),
      (s = t.contextType),
      typeof s == "object" && s !== null ? (s = Ne(s)) : ((s = he(t) ? zn : oe.current), (s = nt(n, s)));
    var g = t.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((i !== h || p !== s) && Ni(n, o, r, s)),
      (en = !1),
      (p = n.memoizedState),
      (o.state = p),
      Yr(n, r, o, l);
    var w = n.memoizedState;
    i !== h || p !== w || pe.current || en
      ? (typeof g == "function" && (_u(n, t, g, r), (w = n.memoizedState)),
        (c = en || _i(n, t, c, r, p, w, s) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Lu(e, n, t, r, u, l);
}
function Lu(e, n, t, r, l, u) {
  ja(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && yi(n, t, !1), Ze(e, n, u);
  (r = n.stateNode), (fd.current = n);
  var i = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o ? ((n.child = rt(n, e.child, null, u)), (n.child = rt(n, null, i, u))) : ie(e, n, i, u),
    (n.memoizedState = r.state),
    l && yi(n, t, !0),
    n.child
  );
}
function Da(e) {
  var n = e.stateNode;
  n.pendingContext ? vi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && vi(e, n.context, !1),
    vo(e, n.containerInfo);
}
function Mi(e, n, t, r, l) {
  return tt(), ao(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var Ru = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fa(e, n, t) {
  var r = n.pendingProps,
    l = $.current,
    u = !1,
    o = (n.flags & 128) !== 0,
    i;
  if (
    ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    i ? ((u = !0), (n.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
    I($, l & 1),
    e === null)
  )
    return (
      Cu(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1 ? (e.data === "$!" ? (n.lanes = 8) : (n.lanes = 1073741824)) : (n.lanes = 1), null)
        : ((o = r.children),
          (e = r.fallback),
          u
            ? ((r = n.mode),
              (u = n.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && u !== null ? ((u.childLanes = 0), (u.pendingProps = o)) : (u = pl(o, r, 0, null)),
              (e = Pn(e, r, t, null)),
              (u.return = n),
              (e.return = n),
              (u.sibling = e),
              (n.child = u),
              (n.child.memoizedState = Tu(t)),
              (n.memoizedState = Ru),
              e)
            : xo(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null))) return dd(e, n, o, r, i, l, t);
  if (u) {
    (u = r.fallback), (o = n.mode), (l = e.child), (i = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && n.child !== l
        ? ((r = n.child), (r.childLanes = 0), (r.pendingProps = s), (n.deletions = null))
        : ((r = pn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      i !== null ? (u = pn(i, u)) : ((u = Pn(u, o, t, null)), (u.flags |= 2)),
      (u.return = n),
      (r.return = n),
      (r.sibling = u),
      (n.child = r),
      (r = u),
      (u = n.child),
      (o = e.child.memoizedState),
      (o = o === null ? Tu(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }),
      (u.memoizedState = o),
      (u.childLanes = e.childLanes & ~t),
      (n.memoizedState = Ru),
      r
    );
  }
  return (
    (u = e.child),
    (e = u.sibling),
    (r = pn(u, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null && ((t = n.deletions), t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function xo(e, n) {
  return (n = pl({ mode: "visible", children: n }, e.mode, 0, null)), (n.return = e), (e.child = n);
}
function vr(e, n, t, r) {
  return (
    r !== null && ao(r),
    rt(n, e.child, null, t),
    (e = xo(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function dd(e, n, t, r, l, u, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Bl(Error(y(422)))), vr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((u = r.fallback),
        (l = n.mode),
        (r = pl({ mode: "visible", children: r.children }, l, 0, null)),
        (u = Pn(u, l, o, null)),
        (u.flags |= 2),
        (r.return = n),
        (u.return = n),
        (r.sibling = u),
        (n.child = r),
        n.mode & 1 && rt(n, e.child, null, o),
        (n.child.memoizedState = Tu(o)),
        (n.memoizedState = Ru),
        u);
  if (!(n.mode & 1)) return vr(e, n, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
    return (r = i), (u = Error(y(419))), (r = Bl(u, r, void 0)), vr(e, n, o, r);
  }
  if (((i = (o & e.childLanes) !== 0), de || i)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 && l !== u.retryLane && ((u.retryLane = l), Ge(e, l), je(r, e, l, -1));
    }
    return Ro(), (r = Bl(Error(y(421)))), vr(e, n, o, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128), (n.child = e.child), (n = _d.bind(null, e)), (l._reactRetry = n), null)
    : ((e = u.treeContext),
      (ye = an(l.nextSibling)),
      (ge = n),
      (A = !0),
      (Me = null),
      e !== null && ((Ee[Ce++] = We), (Ee[Ce++] = Qe), (Ee[Ce++] = Ln), (We = e.id), (Qe = e.overflow), (Ln = n)),
      (n = xo(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Ii(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), xu(e.return, n, t);
}
function Wl(e, n, t, r, l) {
  var u = e.memoizedState;
  u === null
    ? (e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l })
    : ((u.isBackwards = n),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = r),
      (u.tail = t),
      (u.tailMode = l));
}
function Ua(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    u = r.tail;
  if ((ie(e, n, r.children, t), (r = $.current), r & 2)) (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ii(e, t, n);
        else if (e.tag === 19) Ii(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I($, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate), e !== null && Xr(e) === null && (l = t), (t = t.sibling);
        (t = l),
          t === null ? ((l = n.child), (n.child = null)) : ((l = t.sibling), (t.sibling = null)),
          Wl(n, !1, l, t, u);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Wl(n, !0, t, null, u);
        break;
      case "together":
        Wl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function zr(e, n) {
  !(n.mode & 1) && e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ze(e, n, t) {
  if ((e !== null && (n.dependencies = e.dependencies), (Tn |= n.lanes), !(t & n.childLanes))) return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = pn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
      (e = e.sibling), (t = t.sibling = pn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function pd(e, n, t) {
  switch (n.tag) {
    case 3:
      Da(n), tt();
      break;
    case 5:
      ca(n);
      break;
    case 1:
      he(n.type) && Vr(n);
      break;
    case 4:
      vo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      I(Qr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I($, $.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Fa(e, n, t)
          : (I($, $.current & 1), (e = Ze(e, n, t)), e !== null ? e.sibling : null);
      I($, $.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ua(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Ia(e, n, t);
  }
  return Ze(e, n, t);
}
var Aa, Ou, $a, Ha;
Aa = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Ou = function () {};
$a = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), _n(He.current);
    var u = null;
    switch (t) {
      case "input":
        (l = eu(e, l)), (r = eu(e, r)), (u = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })), (r = V({}, r, { value: void 0 })), (u = []);
        break;
      case "textarea":
        (l = ru(e, l)), (r = ru(e, r)), (u = []);
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
    }
    uu(t, r);
    var o;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var i = l[c];
          for (o in i) i.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Mt.hasOwnProperty(c) ? u || (u = []) : (u = u || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (((i = l != null ? l[c] : void 0), r.hasOwnProperty(c) && s !== i && (s != null || i != null)))
        if (c === "style")
          if (i) {
            for (o in i) !i.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (t || (t = {}), (t[o] = ""));
            for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (t || (t = {}), (t[o] = s[o]));
          } else t || (u || (u = []), u.push(c, t)), (t = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (i = i ? i.__html : void 0),
              s != null && i !== s && (u = u || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") || (u = u || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Mt.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && j("scroll", e), u || i === s || (u = []))
                : (u = u || []).push(c, s));
    }
    t && (u = u || []).push("style", t);
    var c = u;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ha = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function gt(e, n) {
  if (!A)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (n || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function le(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function hd(e, n, t) {
  var r = n.pendingProps;
  switch ((so(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(n), null;
    case 1:
      return he(n.type) && Hr(), le(n), null;
    case 3:
      return (
        (r = n.stateNode),
        lt(),
        D(pe),
        D(oe),
        go(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Me !== null && ($u(Me), (Me = null)))),
        Ou(e, n),
        le(n),
        null
      );
    case 5:
      yo(n);
      var l = _n(Qt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        $a(e, n, t, r, l), e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return le(n), null;
        }
        if (((e = _n(He.current)), hr(n))) {
          (r = n.stateNode), (t = n.type);
          var u = n.memoizedProps;
          switch (((r[Ae] = n), (r[Bt] = u), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              j("cancel", r), j("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              j("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ct.length; l++) j(Ct[l], r);
              break;
            case "source":
              j("error", r);
              break;
            case "img":
            case "image":
            case "link":
              j("error", r), j("load", r);
              break;
            case "details":
              j("toggle", r);
              break;
            case "input":
              Bo(r, u), j("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!u.multiple }), j("invalid", r);
              break;
            case "textarea":
              Qo(r, u), j("invalid", r);
          }
          uu(t, u), (l = null);
          for (var o in u)
            if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (u.suppressHydrationWarning !== !0 && pr(r.textContent, i, e), (l = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (u.suppressHydrationWarning !== !0 && pr(r.textContent, i, e), (l = ["children", "" + i]))
                : Mt.hasOwnProperty(o) && i != null && o === "onScroll" && j("scroll", r);
            }
          switch (t) {
            case "input":
              ur(r), Wo(r, u, !0);
              break;
            case "textarea":
              ur(r), Ko(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = $r);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ms(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === "select" && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Ae] = n),
            (e[Bt] = r),
            Aa(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = ou(t, r)), t)) {
              case "dialog":
                j("cancel", e), j("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                j("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ct.length; l++) j(Ct[l], e);
                l = r;
                break;
              case "source":
                j("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                j("error", e), j("load", e), (l = r);
                break;
              case "details":
                j("toggle", e), (l = r);
                break;
              case "input":
                Bo(e, r), (l = eu(e, r)), j("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (l = V({}, r, { value: void 0 })), j("invalid", e);
                break;
              case "textarea":
                Qo(e, r), (l = ru(e, r)), j("invalid", e);
                break;
              default:
                l = r;
            }
            uu(t, l), (i = l);
            for (u in i)
              if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style"
                  ? gs(e, s)
                  : u === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && vs(e, s))
                  : u === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && It(e, s)
                    : typeof s == "number" && It(e, "" + s)
                  : u !== "suppressContentEditableWarning" &&
                    u !== "suppressHydrationWarning" &&
                    u !== "autoFocus" &&
                    (Mt.hasOwnProperty(u)
                      ? s != null && u === "onScroll" && j("scroll", e)
                      : s != null && Yu(e, u, s, o));
              }
            switch (t) {
              case "input":
                ur(e), Wo(e, r, !1);
                break;
              case "textarea":
                ur(e), Ko(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (u = r.value),
                  u != null
                    ? Xn(e, !!r.multiple, u, !1)
                    : r.defaultValue != null && Xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return le(n), null;
    case 6:
      if (e && n.stateNode != null) Ha(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = _n(Qt.current)), _n(He.current), hr(n))) {
          if (
            ((r = n.stateNode), (t = n.memoizedProps), (r[Ae] = n), (u = r.nodeValue !== t) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && pr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          u && (n.flags |= 4);
        } else (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)), (r[Ae] = n), (n.stateNode = r);
      }
      return le(n), null;
    case 13:
      if (
        (D($), (r = n.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && ye !== null && n.mode & 1 && !(n.flags & 128)) ua(), tt(), (n.flags |= 98560), (u = !1);
        else if (((u = hr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!u) throw Error(y(318));
            if (((u = n.memoizedState), (u = u !== null ? u.dehydrated : null), !u)) throw Error(y(317));
            u[Ae] = n;
          } else tt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          le(n), (u = !1);
        } else Me !== null && ($u(Me), (Me = null)), (u = !0);
        if (!u) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192), n.mode & 1 && (e === null || $.current & 1 ? Z === 0 && (Z = 3) : Ro())),
          n.updateQueue !== null && (n.flags |= 4),
          le(n),
          null);
    case 4:
      return lt(), Ou(e, n), e === null && Ht(n.stateNode.containerInfo), le(n), null;
    case 10:
      return po(n.type._context), le(n), null;
    case 17:
      return he(n.type) && Hr(), le(n), null;
    case 19:
      if ((D($), (u = n.memoizedState), u === null)) return le(n), null;
      if (((r = (n.flags & 128) !== 0), (o = u.rendering), o === null))
        if (r) gt(u, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = Xr(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    gt(u, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (u = t),
                    (e = r),
                    (u.flags &= 14680066),
                    (o = u.alternate),
                    o === null
                      ? ((u.childLanes = 0),
                        (u.lanes = e),
                        (u.child = null),
                        (u.subtreeFlags = 0),
                        (u.memoizedProps = null),
                        (u.memoizedState = null),
                        (u.updateQueue = null),
                        (u.dependencies = null),
                        (u.stateNode = null))
                      : ((u.childLanes = o.childLanes),
                        (u.lanes = o.lanes),
                        (u.child = o.child),
                        (u.subtreeFlags = 0),
                        (u.deletions = null),
                        (u.memoizedProps = o.memoizedProps),
                        (u.memoizedState = o.memoizedState),
                        (u.updateQueue = o.updateQueue),
                        (u.type = o.type),
                        (e = o.dependencies),
                        (u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (t = t.sibling);
                return I($, ($.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          u.tail !== null && Y() > ot && ((n.flags |= 128), (r = !0), gt(u, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xr(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              gt(u, !0),
              u.tail === null && u.tailMode === "hidden" && !o.alternate && !A)
            )
              return le(n), null;
          } else
            2 * Y() - u.renderingStartTime > ot &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), gt(u, !1), (n.lanes = 4194304));
        u.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = u.last), t !== null ? (t.sibling = o) : (n.child = o), (u.last = o));
      }
      return u.tail !== null
        ? ((n = u.tail),
          (u.rendering = n),
          (u.tail = n.sibling),
          (u.renderingStartTime = Y()),
          (n.sibling = null),
          (t = $.current),
          I($, r ? (t & 1) | 2 : t & 1),
          n)
        : (le(n), null);
    case 22:
    case 23:
      return (
        Lo(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1 ? ve & 1073741824 && (le(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : le(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function md(e, n) {
  switch ((so(n), n.tag)) {
    case 1:
      return he(n.type) && Hr(), (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null;
    case 3:
      return (
        lt(), D(pe), D(oe), go(), (e = n.flags), e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return yo(n), null;
    case 13:
      if ((D($), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        tt();
      }
      return (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null;
    case 19:
      return D($), null;
    case 4:
      return lt(), null;
    case 10:
      return po(n.type._context), null;
    case 22:
    case 23:
      return Lo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1,
  ue = !1,
  vd = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Kn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        B(e, n, r);
      }
    else t.current = null;
}
function Mu(e, n, t) {
  try {
    t();
  } catch (r) {
    B(e, n, r);
  }
}
var ji = !1;
function yd(e, n) {
  if (((vu = Fr), (e = Ks()), oo(e))) {
    if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            u = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, u.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            i = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          n: for (;;) {
            for (
              var g;
              h !== t || (l !== 0 && h.nodeType !== 3) || (i = o + l),
                h !== u || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (p = h), (h = g);
            for (;;) {
              if (h === e) break n;
              if ((p === t && ++c === l && (i = o), p === u && ++m === r && (s = o), (g = h.nextSibling) !== null))
                break;
              (h = p), (p = h.parentNode);
            }
            h = g;
          }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (yu = { focusedElem: e, selectionRange: t }, Fr = !1, S = n; S !== null; )
    if (((n = S), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = n), (S = e);
    else
      for (; S !== null; ) {
        n = S;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    F = w.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Te(n.type, k), F);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          B(n, n.return, v);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (S = e);
          break;
        }
        S = n.return;
      }
  return (w = ji), (ji = !1), w;
}
function Rt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        (l.destroy = void 0), u !== void 0 && Mu(n, t, u);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, n) {
  if (((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Iu(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Va(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Va(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode), n !== null && (delete n[Ae], delete n[Bt], delete n[ku], delete n[bf], delete n[ed])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ba(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Di(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ba(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ju(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8 ? ((n = t.parentNode), n.insertBefore(e, t)) : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ju(e, n, t), e = e.sibling; e !== null; ) ju(e, n, t), (e = e.sibling);
}
function Du(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Du(e, n, t), e = e.sibling; e !== null; ) Du(e, n, t), (e = e.sibling);
}
var ee = null,
  Oe = !1;
function qe(e, n, t) {
  for (t = t.child; t !== null; ) Wa(e, n, t), (t = t.sibling);
}
function Wa(e, n, t) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(rl, t);
    } catch {}
  switch (t.tag) {
    case 5:
      ue || Kn(t, n);
    case 6:
      var r = ee,
        l = Oe;
      (ee = null),
        qe(e, n, t),
        (ee = r),
        (Oe = l),
        ee !== null &&
          (Oe
            ? ((e = ee), (t = t.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : ee.removeChild(t.stateNode));
      break;
    case 18:
      ee !== null &&
        (Oe
          ? ((e = ee), (t = t.stateNode), e.nodeType === 8 ? Fl(e.parentNode, t) : e.nodeType === 1 && Fl(e, t), Ut(e))
          : Fl(ee, t.stateNode));
      break;
    case 4:
      (r = ee), (l = Oe), (ee = t.stateNode.containerInfo), (Oe = !0), qe(e, n, t), (ee = r), (Oe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var u = l,
            o = u.destroy;
          (u = u.tag), o !== void 0 && (u & 2 || u & 4) && Mu(t, n, o), (l = l.next);
        } while (l !== r);
      }
      qe(e, n, t);
      break;
    case 1:
      if (!ue && (Kn(t, n), (r = t.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = t.memoizedProps), (r.state = t.memoizedState), r.componentWillUnmount();
        } catch (i) {
          B(t, n, i);
        }
      qe(e, n, t);
      break;
    case 21:
      qe(e, n, t);
      break;
    case 22:
      t.mode & 1 ? ((ue = (r = ue) || t.memoizedState !== null), qe(e, n, t), (ue = r)) : qe(e, n, t);
      break;
    default:
      qe(e, n, t);
  }
}
function Fi(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new vd()),
      n.forEach(function (r) {
        var l = Nd.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function Le(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var u = e,
          o = n,
          i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (ee = i.stateNode), (Oe = !1);
              break e;
            case 3:
              (ee = i.stateNode.containerInfo), (Oe = !0);
              break e;
            case 4:
              (ee = i.stateNode.containerInfo), (Oe = !0);
              break e;
          }
          i = i.return;
        }
        if (ee === null) throw Error(y(160));
        Wa(u, o, l), (ee = null), (Oe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Qa(n, e), (n = n.sibling);
}
function Qa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(n, e), Fe(e), r & 4)) {
        try {
          Rt(3, e, e.return), fl(3, e);
        } catch (k) {
          B(e, e.return, k);
        }
        try {
          Rt(5, e, e.return);
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 1:
      Le(n, e), Fe(e), r & 512 && t !== null && Kn(t, t.return);
      break;
    case 5:
      if ((Le(n, e), Fe(e), r & 512 && t !== null && Kn(t, t.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          It(l, "");
        } catch (k) {
          B(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var u = e.memoizedProps,
          o = t !== null ? t.memoizedProps : u,
          i = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            i === "input" && u.type === "radio" && u.name != null && ps(l, u), ou(i, o);
            var c = ou(i, u);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                h = s[o + 1];
              m === "style"
                ? gs(l, h)
                : m === "dangerouslySetInnerHTML"
                ? vs(l, h)
                : m === "children"
                ? It(l, h)
                : Yu(l, m, h, c);
            }
            switch (i) {
              case "input":
                nu(l, u);
                break;
              case "textarea":
                hs(l, u);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var g = u.value;
                g != null
                  ? Xn(l, !!u.multiple, g, !1)
                  : p !== !!u.multiple &&
                    (u.defaultValue != null
                      ? Xn(l, !!u.multiple, u.defaultValue, !0)
                      : Xn(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Bt] = u;
          } catch (k) {
            B(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Le(n, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (u = e.memoizedProps);
        try {
          l.nodeValue = u;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 3:
      if ((Le(n, e), Fe(e), r & 4 && t !== null && t.memoizedState.isDehydrated))
        try {
          Ut(n.containerInfo);
        } catch (k) {
          B(e, e.return, k);
        }
      break;
    case 4:
      Le(n, e), Fe(e);
      break;
    case 13:
      Le(n, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((u = l.memoizedState !== null),
          (l.stateNode.isHidden = u),
          !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (Po = Y())),
        r & 4 && Fi(e);
      break;
    case 22:
      if (
        ((m = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((ue = (c = ue) || m), Le(n, e), (ue = c)) : Le(n, e),
        Fe(e),
        r & 8192)
      ) {
        if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !m && e.mode & 1))
          for (S = e, m = e.child; m !== null; ) {
            for (h = S = m; S !== null; ) {
              switch (((p = S), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rt(4, p, p.return);
                  break;
                case 1:
                  Kn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r), (w.props = n.memoizedProps), (w.state = n.memoizedState), w.componentWillUnmount();
                    } catch (k) {
                      B(r, t, k);
                    }
                  }
                  break;
                case 5:
                  Kn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ai(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (S = g)) : Ai(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((u = l.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none"))
                    : ((i = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o = s != null && s.hasOwnProperty("display") ? s.display : null),
                      (i.style.display = ys("display", o)));
              } catch (k) {
                B(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (k) {
                B(e, e.return, k);
              }
          } else if (((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === e) && h.child !== null) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Le(n, e), Fe(e), r & 4 && Fi(e);
      break;
    case 21:
      break;
    default:
      Le(n, e), Fe(e);
  }
}
function Fe(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ba(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (It(l, ""), (r.flags &= -33));
          var u = Di(e);
          Du(e, u, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            i = Di(e);
          ju(e, i, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function gd(e, n, t) {
  (S = e), Ka(e);
}
function Ka(e, n, t) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      u = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || yr;
      if (!o) {
        var i = l.alternate,
          s = (i !== null && i.memoizedState !== null) || ue;
        i = yr;
        var c = ue;
        if (((yr = o), (ue = s) && !c))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null ? $i(l) : s !== null ? ((s.return = o), (S = s)) : $i(l);
        for (; u !== null; ) (S = u), Ka(u), (u = u.sibling);
        (S = l), (yr = i), (ue = c);
      }
      Ui(e);
    } else l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (S = u)) : Ui(e);
  }
}
function Ui(e) {
  for (; S !== null; ) {
    var n = S;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ue || fl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !ue)
                if (t === null) r.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : Te(n.type, t.memoizedProps);
                  r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var u = n.updateQueue;
              u !== null && Ei(n, u, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Ei(n, o, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Ut(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        ue || (n.flags & 512 && Iu(n));
      } catch (p) {
        B(n, n.return, p);
      }
    }
    if (n === e) {
      S = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (S = t);
      break;
    }
    S = n.return;
  }
}
function Ai(e) {
  for (; S !== null; ) {
    var n = S;
    if (n === e) {
      S = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (S = t);
      break;
    }
    S = n.return;
  }
}
function $i(e) {
  for (; S !== null; ) {
    var n = S;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            fl(4, n);
          } catch (s) {
            B(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(n, l, s);
            }
          }
          var u = n.return;
          try {
            Iu(n);
          } catch (s) {
            B(n, u, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Iu(n);
          } catch (s) {
            B(n, o, s);
          }
      }
    } catch (s) {
      B(n, n.return, s);
    }
    if (n === e) {
      S = null;
      break;
    }
    var i = n.sibling;
    if (i !== null) {
      (i.return = n.return), (S = i);
      break;
    }
    S = n.return;
  }
}
var wd = Math.ceil,
  Jr = Je.ReactCurrentDispatcher,
  _o = Je.ReactCurrentOwner,
  _e = Je.ReactCurrentBatchConfig,
  T = 0,
  b = null,
  X = null,
  ne = 0,
  ve = 0,
  Yn = yn(0),
  Z = 0,
  Gt = null,
  Tn = 0,
  dl = 0,
  No = 0,
  Tt = null,
  fe = null,
  Po = 0,
  ot = 1 / 0,
  Ve = null,
  qr = !1,
  Fu = null,
  fn = null,
  gr = !1,
  ln = null,
  br = 0,
  Ot = 0,
  Uu = null,
  Lr = -1,
  Rr = 0;
function se() {
  return T & 6 ? Y() : Lr !== -1 ? Lr : (Lr = Y());
}
function dn(e) {
  return e.mode & 1
    ? T & 2 && ne !== 0
      ? ne & -ne
      : td.transition !== null
      ? (Rr === 0 && (Rr = Rs()), Rr)
      : ((e = M), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fs(e.type))), e)
    : 1;
}
function je(e, n, t, r) {
  if (50 < Ot) throw ((Ot = 0), (Uu = null), Error(y(185)));
  Jt(e, t, r),
    (!(T & 2) || e !== b) &&
      (e === b && (!(T & 2) && (dl |= t), Z === 4 && tn(e, ne)),
      me(e, r),
      t === 1 && T === 0 && !(n.mode & 1) && ((ot = Y() + 500), sl && gn()));
}
function me(e, n) {
  var t = e.callbackNode;
  nf(e, n);
  var r = Dr(e, e === b ? ne : 0);
  if (r === 0) t !== null && Go(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Go(t), n === 1))
      e.tag === 0 ? nd(Hi.bind(null, e)) : ta(Hi.bind(null, e)),
        Jf(function () {
          !(T & 6) && gn();
        }),
        (t = null);
    else {
      switch (Ts(r)) {
        case 1:
          t = qu;
          break;
        case 4:
          t = zs;
          break;
        case 16:
          t = jr;
          break;
        case 536870912:
          t = Ls;
          break;
        default:
          t = jr;
      }
      t = ec(t, Ya.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Ya(e, n) {
  if (((Lr = -1), (Rr = 0), T & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (bn() && e.callbackNode !== t) return null;
  var r = Dr(e, e === b ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = el(e, r);
  else {
    n = r;
    var l = T;
    T |= 2;
    var u = Ga();
    (b !== e || ne !== n) && ((Ve = null), (ot = Y() + 500), Nn(e, n));
    do
      try {
        Ed();
        break;
      } catch (i) {
        Xa(e, i);
      }
    while (!0);
    fo(), (Jr.current = u), (T = l), X !== null ? (n = 0) : ((b = null), (ne = 0), (n = Z));
  }
  if (n !== 0) {
    if ((n === 2 && ((l = fu(e)), l !== 0 && ((r = l), (n = Au(e, l)))), n === 1))
      throw ((t = Gt), Nn(e, 0), tn(e, r), me(e, Y()), t);
    if (n === 6) tn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !kd(l) &&
          ((n = el(e, r)), n === 2 && ((u = fu(e)), u !== 0 && ((r = u), (n = Au(e, u)))), n === 1))
      )
        throw ((t = Gt), Nn(e, 0), tn(e, r), me(e, Y()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          En(e, fe, Ve);
          break;
        case 3:
          if ((tn(e, r), (r & 130023424) === r && ((n = Po + 500 - Y()), 10 < n))) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wu(En.bind(null, e, fe, Ve), n);
            break;
          }
          En(e, fe, Ve);
          break;
        case 4:
          if ((tn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ie(r);
            (u = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~u);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * wd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wu(En.bind(null, e, fe, Ve), r);
            break;
          }
          En(e, fe, Ve);
          break;
        case 5:
          En(e, fe, Ve);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, Y()), e.callbackNode === t ? Ya.bind(null, e) : null;
}
function Au(e, n) {
  var t = Tt;
  return (
    e.current.memoizedState.isDehydrated && (Nn(e, n).flags |= 256),
    (e = el(e, n)),
    e !== 2 && ((n = fe), (fe = t), n !== null && $u(n)),
    e
  );
}
function $u(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function kd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            u = l.getSnapshot;
          l = l.value;
          try {
            if (!De(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null)) (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function tn(e, n) {
  for (n &= ~No, n &= ~dl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Ie(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Hi(e) {
  if (T & 6) throw Error(y(327));
  bn();
  var n = Dr(e, 0);
  if (!(n & 1)) return me(e, Y()), null;
  var t = el(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = fu(e);
    r !== 0 && ((n = r), (t = Au(e, r)));
  }
  if (t === 1) throw ((t = Gt), Nn(e, 0), tn(e, n), me(e, Y()), t);
  if (t === 6) throw Error(y(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), En(e, fe, Ve), me(e, Y()), null;
}
function zo(e, n) {
  var t = T;
  T |= 1;
  try {
    return e(n);
  } finally {
    (T = t), T === 0 && ((ot = Y() + 500), sl && gn());
  }
}
function On(e) {
  ln !== null && ln.tag === 0 && !(T & 6) && bn();
  var n = T;
  T |= 1;
  var t = _e.transition,
    r = M;
  try {
    if (((_e.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (_e.transition = t), (T = n), !(T & 6) && gn();
  }
}
function Lo() {
  (ve = Yn.current), D(Yn);
}
function Nn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Zf(t)), X !== null))
    for (t = X.return; t !== null; ) {
      var r = t;
      switch ((so(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hr();
          break;
        case 3:
          lt(), D(pe), D(oe), go();
          break;
        case 5:
          yo(r);
          break;
        case 4:
          lt();
          break;
        case 13:
          D($);
          break;
        case 19:
          D($);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          Lo();
      }
      t = t.return;
    }
  if (
    ((b = e),
    (X = e = pn(e.current, null)),
    (ne = ve = n),
    (Z = 0),
    (Gt = null),
    (No = dl = Tn = 0),
    (fe = Tt = null),
    xn !== null)
  ) {
    for (n = 0; n < xn.length; n++)
      if (((t = xn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          u = t.pending;
        if (u !== null) {
          var o = u.next;
          (u.next = l), (r.next = o);
        }
        t.pending = r;
      }
    xn = null;
  }
  return e;
}
function Xa(e, n) {
  do {
    var t = X;
    try {
      if ((fo(), (Nr.current = Zr), Gr)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (((Rn = 0), (q = G = H = null), (Lt = !1), (Kt = 0), (_o.current = null), t === null || t.return === null)) {
        (Z = 1), (Gt = n), (X = null);
        break;
      }
      e: {
        var u = e,
          o = t.return,
          i = t,
          s = n;
        if (((n = ne), (i.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
          var c = s,
            m = i,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue), (m.memoizedState = p.memoizedState), (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = zi(o);
          if (g !== null) {
            (g.flags &= -257), Li(g, o, i, u, n), g.mode & 1 && Pi(u, c, n), (n = g), (s = c);
            var w = n.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (n.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Pi(u, c, n), Ro();
              break e;
            }
            s = Error(y(426));
          }
        } else if (A && i.mode & 1) {
          var F = zi(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Li(F, o, i, u, n), ao(ut(s, i));
            break e;
          }
        }
        (u = s = ut(s, i)), Z !== 4 && (Z = 2), Tt === null ? (Tt = [u]) : Tt.push(u), (u = o);
        do {
          switch (u.tag) {
            case 3:
              (u.flags |= 65536), (n &= -n), (u.lanes |= n);
              var f = Ta(u, s, n);
              Si(u, f);
              break e;
            case 1:
              i = s;
              var a = u.type,
                d = u.stateNode;
              if (
                !(u.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null && typeof d.componentDidCatch == "function" && (fn === null || !fn.has(d))))
              ) {
                (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                var v = Oa(u, i, n);
                Si(u, v);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      Ja(t);
    } catch (E) {
      (n = E), X === t && t !== null && (X = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Ga() {
  var e = Jr.current;
  return (Jr.current = Zr), e === null ? Zr : e;
}
function Ro() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), b === null || (!(Tn & 268435455) && !(dl & 268435455)) || tn(b, ne);
}
function el(e, n) {
  var t = T;
  T |= 2;
  var r = Ga();
  (b !== e || ne !== n) && ((Ve = null), Nn(e, n));
  do
    try {
      Sd();
      break;
    } catch (l) {
      Xa(e, l);
    }
  while (!0);
  if ((fo(), (T = t), (Jr.current = r), X !== null)) throw Error(y(261));
  return (b = null), (ne = 0), Z;
}
function Sd() {
  for (; X !== null; ) Za(X);
}
function Ed() {
  for (; X !== null && !Kc(); ) Za(X);
}
function Za(e) {
  var n = ba(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps), n === null ? Ja(e) : (X = n), (_o.current = null);
}
function Ja(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = md(t, n)), t !== null)) {
        (t.flags &= 32767), (X = t);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (X = null);
        return;
      }
    } else if (((t = hd(t, n, ve)), t !== null)) {
      X = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      X = n;
      return;
    }
    X = n = e;
  } while (n !== null);
  Z === 0 && (Z = 5);
}
function En(e, n, t) {
  var r = M,
    l = _e.transition;
  try {
    (_e.transition = null), (M = 1), Cd(e, n, t, r);
  } finally {
    (_e.transition = l), (M = r);
  }
  return null;
}
function Cd(e, n, t, r) {
  do bn();
  while (ln !== null);
  if (T & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var u = t.lanes | t.childLanes;
  if (
    (tf(e, u),
    e === b && ((X = b = null), (ne = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      gr ||
      ((gr = !0),
      ec(jr, function () {
        return bn(), null;
      })),
    (u = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || u)
  ) {
    (u = _e.transition), (_e.transition = null);
    var o = M;
    M = 1;
    var i = T;
    (T |= 4),
      (_o.current = null),
      yd(e, t),
      Qa(t, e),
      Bf(yu),
      (Fr = !!vu),
      (yu = vu = null),
      (e.current = t),
      gd(t),
      Yc(),
      (T = i),
      (M = o),
      (_e.transition = u);
  } else e.current = t;
  if (
    (gr && ((gr = !1), (ln = e), (br = l)),
    (u = e.pendingLanes),
    u === 0 && (fn = null),
    Zc(t.stateNode),
    me(e, Y()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr) throw ((qr = !1), (e = Fu), (Fu = null), e);
  return (
    br & 1 && e.tag !== 0 && bn(),
    (u = e.pendingLanes),
    u & 1 ? (e === Uu ? Ot++ : ((Ot = 0), (Uu = e))) : (Ot = 0),
    gn(),
    null
  );
}
function bn() {
  if (ln !== null) {
    var e = Ts(br),
      n = _e.transition,
      t = M;
    try {
      if (((_e.transition = null), (M = 16 > e ? 16 : e), ln === null)) var r = !1;
      else {
        if (((e = ln), (ln = null), (br = 0), T & 6)) throw Error(y(331));
        var l = T;
        for (T |= 4, S = e.current; S !== null; ) {
          var u = S,
            o = u.child;
          if (S.flags & 16) {
            var i = u.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (S = c; S !== null; ) {
                  var m = S;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rt(8, m, u);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (S = h);
                  else
                    for (; S !== null; ) {
                      m = S;
                      var p = m.sibling,
                        g = m.return;
                      if ((Va(m), m === c)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (S = p);
                        break;
                      }
                      S = g;
                    }
                }
              }
              var w = u.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    (k.sibling = null), (k = F);
                  } while (k !== null);
                }
              }
              S = u;
            }
          }
          if (u.subtreeFlags & 2064 && o !== null) (o.return = u), (S = o);
          else
            e: for (; S !== null; ) {
              if (((u = S), u.flags & 2048))
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rt(9, u, u.return);
                }
              var f = u.sibling;
              if (f !== null) {
                (f.return = u.return), (S = f);
                break e;
              }
              S = u.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (S = d);
          else
            e: for (o = a; S !== null; ) {
              if (((i = S), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, i);
                  }
                } catch (E) {
                  B(i, i.return, E);
                }
              if (i === o) {
                S = null;
                break e;
              }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (S = v);
                break e;
              }
              S = i.return;
            }
        }
        if (((T = l), gn(), $e && typeof $e.onPostCommitFiberRoot == "function"))
          try {
            $e.onPostCommitFiberRoot(rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = t), (_e.transition = n);
    }
  }
  return !1;
}
function Vi(e, n, t) {
  (n = ut(t, n)), (n = Ta(e, n, 1)), (e = cn(e, n, 1)), (n = se()), e !== null && (Jt(e, 1, n), me(e, n));
}
function B(e, n, t) {
  if (e.tag === 3) Vi(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Vi(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r)))
        ) {
          (e = ut(t, e)), (e = Oa(n, e, 1)), (n = cn(n, e, 1)), (e = se()), n !== null && (Jt(n, 1, e), me(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function xd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = se()),
    (e.pingedLanes |= e.suspendedLanes & t),
    b === e &&
      (ne & t) === t &&
      (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > Y() - Po) ? Nn(e, 0) : (No |= t)),
    me(e, n);
}
function qa(e, n) {
  n === 0 && (e.mode & 1 ? ((n = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304)) : (n = 1));
  var t = se();
  (e = Ge(e, n)), e !== null && (Jt(e, n, t), me(e, t));
}
function _d(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), qa(e, t);
}
function Nd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), qa(e, t);
}
var ba;
ba = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (de = !1), pd(e, n, t);
      de = !!(e.flags & 131072);
    }
  else (de = !1), A && n.flags & 1048576 && ra(n, Wr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      zr(e, n), (e = n.pendingProps);
      var l = nt(n, oe.current);
      qn(n, t), (l = ko(null, n, r, e, l, t));
      var u = So();
      return (
        (n.flags |= 1),
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            he(r) ? ((u = !0), Vr(n)) : (u = !1),
            (n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            mo(n),
            (l.updater = cl),
            (n.stateNode = l),
            (l._reactInternals = n),
            Nu(n, r, e, t),
            (n = Lu(null, n, r, !0, u, t)))
          : ((n.tag = 0), A && u && io(n), ie(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (zr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = zd(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            n = zu(null, n, r, e, t);
            break e;
          case 1:
            n = Oi(null, n, r, e, t);
            break e;
          case 11:
            n = Ri(null, n, r, e, t);
            break e;
          case 14:
            n = Ti(null, n, r, Te(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : Te(r, l)), zu(e, n, r, l, t);
    case 1:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : Te(r, l)), Oi(e, n, r, l, t);
    case 3:
      e: {
        if ((Da(n), e === null)) throw Error(y(387));
        (r = n.pendingProps), (u = n.memoizedState), (l = u.element), aa(e, n), Yr(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), u.isDehydrated))
          if (
            ((u = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = u),
            (n.memoizedState = u),
            n.flags & 256)
          ) {
            (l = ut(Error(y(423)), n)), (n = Mi(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = ut(Error(y(424)), n)), (n = Mi(e, n, r, t, l));
            break e;
          } else
            for (
              ye = an(n.stateNode.containerInfo.firstChild),
                ge = n,
                A = !0,
                Me = null,
                t = ia(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((tt(), r === l)) {
            n = Ze(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ca(n),
        e === null && Cu(n),
        (r = n.type),
        (l = n.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (o = l.children),
        gu(r, l) ? (o = null) : u !== null && gu(r, u) && (n.flags |= 32),
        ja(e, n),
        ie(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && Cu(n), null;
    case 13:
      return Fa(e, n, t);
    case 4:
      return (
        vo(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = rt(n, null, r, t)) : ie(e, n, r, t),
        n.child
      );
    case 11:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : Te(r, l)), Ri(e, n, r, l, t);
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (u = n.memoizedProps),
          (o = l.value),
          I(Qr, r._currentValue),
          (r._currentValue = o),
          u !== null)
        )
          if (De(u.value, o)) {
            if (u.children === l.children && !pe.current) {
              n = Ze(e, n, t);
              break e;
            }
          } else
            for (u = n.child, u !== null && (u.return = n); u !== null; ) {
              var i = u.dependencies;
              if (i !== null) {
                o = u.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (u.tag === 1) {
                      (s = Ke(-1, t & -t)), (s.tag = 2);
                      var c = u.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)), (c.pending = s);
                      }
                    }
                    (u.lanes |= t), (s = u.alternate), s !== null && (s.lanes |= t), xu(u.return, t, n), (i.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (u.tag === 10) o = u.type === n.type ? null : u.child;
              else if (u.tag === 18) {
                if (((o = u.return), o === null)) throw Error(y(341));
                (o.lanes |= t), (i = o.alternate), i !== null && (i.lanes |= t), xu(o, t, n), (o = u.sibling);
              } else o = u.child;
              if (o !== null) o.return = u;
              else
                for (o = u; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((u = o.sibling), u !== null)) {
                    (u.return = o.return), (o = u);
                    break;
                  }
                  o = o.return;
                }
              u = o;
            }
        ie(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        qn(n, t),
        (l = Ne(l)),
        (r = r(l)),
        (n.flags |= 1),
        ie(e, n, r, t),
        n.child
      );
    case 14:
      return (r = n.type), (l = Te(r, n.pendingProps)), (l = Te(r.type, l)), Ti(e, n, r, l, t);
    case 15:
      return Ma(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        zr(e, n),
        (n.tag = 1),
        he(r) ? ((e = !0), Vr(n)) : (e = !1),
        qn(n, t),
        Ra(n, r, l),
        Nu(n, r, l, t),
        Lu(null, n, r, !0, e, t)
      );
    case 19:
      return Ua(e, n, t);
    case 22:
      return Ia(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function ec(e, n) {
  return Ps(e, n);
}
function Pd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function xe(e, n, t, r) {
  return new Pd(e, n, t, r);
}
function To(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zd(e) {
  if (typeof e == "function") return To(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gu)) return 11;
    if (e === Zu) return 14;
  }
  return 2;
}
function pn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = xe(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n), (t.type = e.type), (t.flags = 0), (t.subtreeFlags = 0), (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Tr(e, n, t, r, l, u) {
  var o = 2;
  if (((r = e), typeof e == "function")) To(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Fn:
        return Pn(t.children, l, u, n);
      case Xu:
        (o = 8), (l |= 8);
        break;
      case Zl:
        return (e = xe(12, t, n, l | 2)), (e.elementType = Zl), (e.lanes = u), e;
      case Jl:
        return (e = xe(13, t, n, l)), (e.elementType = Jl), (e.lanes = u), e;
      case ql:
        return (e = xe(19, t, n, l)), (e.elementType = ql), (e.lanes = u), e;
      case cs:
        return pl(t, l, u, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ss:
              o = 10;
              break e;
            case as:
              o = 9;
              break e;
            case Gu:
              o = 11;
              break e;
            case Zu:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (n = xe(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = u), n;
}
function Pn(e, n, t, r) {
  return (e = xe(7, e, r, n)), (e.lanes = t), e;
}
function pl(e, n, t, r) {
  return (e = xe(22, e, r, n)), (e.elementType = cs), (e.lanes = t), (e.stateNode = { isHidden: !1 }), e;
}
function Ql(e, n, t) {
  return (e = xe(6, e, null, n)), (e.lanes = t), e;
}
function Kl(e, n, t) {
  return (
    (n = xe(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    n
  );
}
function Ld(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Oo(e, n, t, r, l, u, o, i, s) {
  return (
    (e = new Ld(e, n, t, i, s)),
    n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
    (u = xe(3, null, null, n)),
    (e.current = u),
    (u.stateNode = e),
    (u.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    mo(u),
    e
  );
}
function Rd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function nc(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (he(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (he(t)) return na(e, t, n);
  }
  return n;
}
function tc(e, n, t, r, l, u, o, i, s) {
  return (
    (e = Oo(t, r, !0, e, l, u, o, i, s)),
    (e.context = nc(null)),
    (t = e.current),
    (r = se()),
    (l = dn(t)),
    (u = Ke(r, l)),
    (u.callback = n ?? null),
    cn(t, u, l),
    (e.current.lanes = l),
    Jt(e, l, r),
    me(e, r),
    e
  );
}
function hl(e, n, t, r) {
  var l = n.current,
    u = se(),
    o = dn(l);
  return (
    (t = nc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Ke(u, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = cn(l, n, o)),
    e !== null && (je(e, l, o, u), _r(e, l, o)),
    o
  );
}
function nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bi(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Mo(e, n) {
  Bi(e, n), (e = e.alternate) && Bi(e, n);
}
function Td() {
  return null;
}
var rc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Io(e) {
  this._internalRoot = e;
}
ml.prototype.render = Io.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  hl(e, n, null, null);
};
ml.prototype.unmount = Io.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    On(function () {
      hl(null, e, null, null);
    }),
      (n[Xe] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Is();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < nn.length && n !== 0 && n < nn[t].priority; t++);
    nn.splice(t, 0, e), t === 0 && Ds(e);
  }
};
function jo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wi() {}
function Od(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var c = nl(o);
        u.call(c);
      };
    }
    var o = tc(n, r, e, 0, null, !1, !1, "", Wi);
    return (e._reactRootContainer = o), (e[Xe] = o.current), Ht(e.nodeType === 8 ? e.parentNode : e), On(), o;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var c = nl(s);
      i.call(c);
    };
  }
  var s = Oo(e, 0, !1, null, null, !1, !1, "", Wi);
  return (
    (e._reactRootContainer = s),
    (e[Xe] = s.current),
    Ht(e.nodeType === 8 ? e.parentNode : e),
    On(function () {
      hl(n, s, t, r);
    }),
    s
  );
}
function yl(e, n, t, r, l) {
  var u = t._reactRootContainer;
  if (u) {
    var o = u;
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var s = nl(o);
        i.call(s);
      };
    }
    hl(n, o, e, l);
  } else o = Od(t, n, e, l, r);
  return nl(o);
}
Os = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Et(n.pendingLanes);
        t !== 0 && (bu(n, t | 1), me(n, Y()), !(T & 6) && ((ot = Y() + 500), gn()));
      }
      break;
    case 13:
      On(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = se();
          je(r, e, 1, l);
        }
      }),
        Mo(e, 1);
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var n = Ge(e, 134217728);
    if (n !== null) {
      var t = se();
      je(n, e, 134217728, t);
    }
    Mo(e, 134217728);
  }
};
Ms = function (e) {
  if (e.tag === 13) {
    var n = dn(e),
      t = Ge(e, n);
    if (t !== null) {
      var r = se();
      je(t, e, n, r);
    }
    Mo(e, n);
  }
};
Is = function () {
  return M;
};
js = function (e, n) {
  var t = M;
  try {
    return (M = e), n();
  } finally {
    M = t;
  }
};
su = function (e, n, t) {
  switch (n) {
    case "input":
      if ((nu(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(y(90));
            ds(r), nu(r, l);
          }
        }
      }
      break;
    case "textarea":
      hs(e, t);
      break;
    case "select":
      (n = t.value), n != null && Xn(e, !!t.multiple, n, !1);
  }
};
Ss = zo;
Es = On;
var Md = { usingClientEntryPoint: !1, Events: [bt, Hn, il, ws, ks, zo] },
  wt = { findFiberByHostInstance: Cn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  Id = {
    bundleType: wt.bundleType,
    version: wt.version,
    rendererPackageName: wt.rendererPackageName,
    rendererConfig: wt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _s(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wt.findFiberByHostInstance || Td,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (rl = wr.inject(Id)), ($e = wr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
ke.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jo(n)) throw Error(y(200));
  return Rd(e, n, null, t);
};
ke.createRoot = function (e, n) {
  if (!jo(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = rc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Oo(e, 1, !1, null, null, t, !1, r, l)),
    (e[Xe] = n.current),
    Ht(e.nodeType === 8 ? e.parentNode : e),
    new Io(n)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = _s(n)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return On(e);
};
ke.hydrate = function (e, n, t) {
  if (!vl(n)) throw Error(y(200));
  return yl(null, e, n, !0, t);
};
ke.hydrateRoot = function (e, n, t) {
  if (!jo(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    u = "",
    o = rc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = tc(n, null, e, 1, t ?? null, l, !1, u, o)),
    (e[Xe] = n.current),
    Ht(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new ml(n);
};
ke.render = function (e, n, t) {
  if (!vl(n)) throw Error(y(200));
  return yl(null, e, n, !1, t);
};
ke.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (On(function () {
        yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xe] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = zo;
ke.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!vl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return yl(e, n, t, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function lc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
    } catch (e) {
      console.error(e);
    }
}
lc(), (ls.exports = ke);
var jd = ls.exports,
  Qi = jd;
(Xl.createRoot = Qi.createRoot), (Xl.hydrateRoot = Qi.hydrateRoot);
var O,
  Dd =
    ((O = class {
      constructor(n) {
        K(this, "romanMap", {
          あ: "a",
          い: "i",
          う: "u",
          え: "e",
          お: "o",
          か: "ka",
          き: "ki",
          く: "ku",
          け: "ke",
          こ: "ko",
          さ: "sa",
          し: { hepburn: "shi", kunrei: "si" },
          す: "su",
          せ: "se",
          そ: "so",
          た: "ta",
          ち: { hepburn: "chi", kunrei: "ti" },
          つ: { hepburn: "tsu", kunrei: "tu" },
          て: "te",
          と: "to",
          な: "na",
          に: "ni",
          ぬ: "nu",
          ね: "ne",
          の: "no",
          は: "ha",
          ひ: "hi",
          ふ: { hepburn: "fu", kunrei: "hu" },
          へ: "he",
          ほ: "ho",
          ま: "ma",
          み: "mi",
          む: "mu",
          め: "me",
          も: "mo",
          や: "ya",
          ゆ: "yu",
          よ: "yo",
          ら: "ra",
          り: "ri",
          る: "ru",
          れ: "re",
          ろ: "ro",
          わ: "wa",
          ゐ: "wi",
          ゑ: "we",
          を: { hepburn: "o", kunrei: "wo" },
          ん: "n",
          が: "ga",
          ぎ: "gi",
          ぐ: "gu",
          げ: "ge",
          ご: "go",
          ざ: "za",
          じ: { hepburn: "ji", kunrei: "zi" },
          ず: "zu",
          ぜ: "ze",
          ぞ: "zo",
          だ: "da",
          ぢ: { hepburn: "ji", kunrei: "di" },
          づ: { hepburn: "zu", kunrei: "du" },
          で: "de",
          ど: "do",
          ば: "ba",
          び: "bi",
          ぶ: "bu",
          べ: "be",
          ぼ: "bo",
          ぱ: "pa",
          ぴ: "pi",
          ぷ: "pu",
          ぺ: "pe",
          ぽ: "po",
          きゃ: "kya",
          きぃ: "kyi",
          きゅ: "kyu",
          きぇ: "kye",
          きょ: "kyo",
          くぁ: "qa",
          くぃ: "qi",
          くぇ: "qe",
          くぉ: "qo",
          くゃ: "qya",
          くゅ: "qyu",
          くょ: "qyo",
          しゃ: { hepburn: "sha", kunrei: "sya" },
          しぃ: "syi",
          しゅ: { hepburn: "shu", kunrei: "syu" },
          しぇ: "sye",
          しょ: { hepburn: "sho", kunrei: "syo" },
          ちゃ: { hepburn: "cha", kunrei: "tya" },
          ちぃ: { hepburn: "chi", kunrei: "tyi" },
          ちゅ: { hepburn: "chu", kunrei: "tyu" },
          ちぇ: { hepburn: "che", kunrei: "tye" },
          ちょ: { hepburn: "cho", kunrei: "tyo" },
          てゃ: "tha",
          てぃ: "thi",
          てゅ: "thu",
          てぇ: "the",
          てょ: "tho",
          ひゃ: "hya",
          ひゅ: "hyu",
          ひぇ: "hye",
          ひょ: "hyo",
          ふぁ: "fa",
          ふぃ: "fi",
          ふぇ: "fe",
          ふぉ: "fo",
          みゃ: "mya",
          みゅ: "myu",
          みぇ: "mye",
          みょ: "myo",
          ヴぁ: "va",
          ヴぃ: "vi",
          ヴぇ: "ve",
          ヴぉ: "vo",
          ぎゃ: "gya",
          ぎゅ: "gyu",
          ぎぇ: "gye",
          ぎょ: "gyo",
          じゃ: { hepburn: "ja", kunrei: "zya" },
          じゅ: { hepburn: "ju", kunrei: "zyu" },
          じぇ: "zye",
          じょ: { hepburn: "jo", kunrei: "zyo" },
          ぢゃ: { hepburn: "dya", kunrei: "zya" },
          ぢゅ: { hepburn: "dyu", kunrei: "zya" },
          ぢぇ: "dye",
          ぢょ: { hepburn: "dyo", kunrei: "zya" },
          びゃ: "bya",
          びゅ: "byu",
          びぇ: "bye",
          びょ: "byo",
          ぴゃ: "pya",
          ぴゅ: "pyu",
          ぴぇ: "pye",
          ぴょ: "pyo",
          りゃ: "rya",
          りゅ: "ryu",
          りぇ: "rye",
          りょ: "ryo",
          にゃ: "nya",
          にゅ: "nyu",
          にぇ: "nye",
          にょ: "nyo",
          ゔ: "bu",
          "、": ", ",
          "，": ", ",
          "。": ". ",
          ぁ: "a",
          ぃ: "i",
          ぅ: "u",
          ぇ: "e",
          ぉ: "o",
        });
        K(this, "sutegana", ["ぁ", "ぃ", "ぅ", "ぇ", "ぉ", "ゃ", "ゅ", "ょ"]);
        K(this, "sokuon", "っ");
        K(this, "chouonMap", {
          a: { aa: { macron: "ā", circumflex: "â" } },
          i: { ii: { macron: "ī", circumflex: "î" } },
          u: { uu: { macron: "ū", circumflex: "û" }, ou: { macron: "ō", circumflex: "ô" } },
          e: { ee: { macron: "ē", circumflex: "ê" } },
          o: { oo: { macron: "ō", circumflex: "ô" } },
        });
        K(this, "mappingMode", O.MAPPING_HEPBURN);
        K(this, "chouonMode", O.CHOUON_MACRON);
        K(this, "upperMode", O.UPPER_WORD_INITIAL);
        n && "mapping" in n && (this.mappingMode = n.mapping),
          n && "chouon" in n && (this.chouonMode = n.chouon),
          n && "upper" in n && (this.upperMode = n.upper);
      }
      romanize(n) {
        const t = this.kanaToHira(n);
        let r = "";
        for (let l = 0; l < t.length; ) {
          const u = this.getChar(t, l),
            o = this.getRomanChar(t, l, u, r);
          (r += o + (this.isNeedApostrophe(t, l) ? "'" : "")), (l += u.length);
        }
        return this.upper(this.convertChouon(r));
      }
      getChar(n, t) {
        if (this.isWithSutegana(n, t)) {
          const r = n.substr(t, 2);
          return r in this.romanMap ? r : n[t];
        } else return n[t];
      }
      getRomanChar(n, t, r, l) {
        let u = r;
        if (r === "ー") u = l[l.length - 1];
        else {
          if (r === "っ") return "";
          r in this.romanMap &&
            (typeof this.romanMap[r] == "object" ? (u = this.romanMap[r][this.mappingMode]) : (u = this.romanMap[r]));
        }
        return n[t - 1] === this.sokuon && (u = u[0] + u), u;
      }
      isWithSutegana(n, t) {
        const r = t + 1;
        if (r >= n.length) return !1;
        const l = n[r];
        return this.sutegana.includes(l);
      }
      convertChouon(n) {
        if (this.chouonMode === "alphabet") return n;
        let t = n[0],
          r = !1;
        for (let l = 1; l < n.length; l++) {
          const u = n[l],
            o = n.substr(l - 1, 2);
          if (!r && u in this.chouonMap && o in this.chouonMap[u]) {
            if (((r = !0), this.chouonMode === "skip")) continue;
            this.chouonMode === "hyphen"
              ? (t += "-")
              : (t = t.substr(0, t.length - 1) + this.chouonMap[u][o][this.chouonMode]);
          } else (t += u), (r = !1);
        }
        return t;
      }
      upper(n) {
        switch (this.upperMode) {
          case O.UPPER_WORD_INITIAL:
            return this.upperWordInitial(n);
          case O.UPPER_SENTENCE_INITIAL:
            return this.upperSentenceInitial(n);
          case O.UPPER_ALL:
            return this.upperAll(n);
          case O.UPPER_NONE:
            return n;
          default:
            throw new Error("upperに不正な値が指定されています");
        }
      }
      upperWordInitial(n) {
        let t = n[0].toUpperCase();
        for (let r = 1; r < n.length; r++) {
          const l = n[r];
          n.substr(r - 1, 1).match(/\s/) ? (t += l.toUpperCase()) : (t += l);
        }
        return t;
      }
      upperSentenceInitial(n) {
        let t = "",
          r = !1;
        for (let l = 0; l < n.length; l++) {
          const u = n[l];
          u.match(/[a-zA-Zāâīîūûēêōô]/) && r === !1
            ? ((t += u.toUpperCase()), (r = !0))
            : (u === "." && (r = !1), (t += u));
        }
        return t;
      }
      upperAll(n) {
        let t = "";
        for (let r = 0; r < n.length; r++) {
          const l = n[r];
          t += l.toUpperCase();
        }
        return t;
      }
      isNeedApostrophe(n, t) {
        return !!(
          (n[t] === "ん" && ["あ", "い", "う", "え", "お", "や", "ゆ", "よ"].includes(n[t + 1])) ||
          (n[t] === this.sokuon && t + 1 >= n.length)
        );
      }
      kanaToHira(n) {
        return n.replace(/[\u30a1-\u30f6]/g, function (t) {
          const r = t.charCodeAt(0) - 96;
          return String.fromCharCode(r);
        });
      }
    }),
    K(O, "MAPPING_HEPBURN", "hepburn"),
    K(O, "MAPPING_KUNREI", "kunrei"),
    K(O, "CHOUON_MACRON", "macron"),
    K(O, "CHOUON_CIRCUMFLEX", "circumflex"),
    K(O, "CHOUON_ALPHABET", "alphabet"),
    K(O, "CHOUON_SKIP", "skip"),
    K(O, "CHOUON_HYPHEN", "hyphen"),
    K(O, "UPPER_WORD_INITIAL", "word_initial"),
    K(O, "UPPER_SENTENCE_INITIAL", "sentence_initial"),
    K(O, "UPPER_ALL", "all"),
    K(O, "UPPER_NONE", "none"),
    K(O, "OPTION_SET_HEPBURN", { mapping: O.MAPPING_HEPBURN, chouon: O.CHOUON_MACRON }),
    K(O, "OPTION_SET_KUNREI", { mapping: O.MAPPING_KUNREI, chouon: O.CHOUON_CIRCUMFLEX }),
    O);
const Yl = Ki(Dd),
  Fd = (e, n) => e.romanize(n),
  Ud = (e) => {
    const n = /[ぁぃぅぇぉゃゅょゎ、。！？「」『』（）［］【】・…　 ]/g;
    return e.replace(n, "").length;
  },
  Ad = () => {
    const [e, n] = Re.useState(""),
      [t, r] = Re.useState(""),
      [l, u] = Re.useState([]),
      [o, i] = Re.useState("auto"),
      s = Re.useRef(null),
      c = Re.useRef(null),
      m = new Yl({ chouon: Yl.CHOUON_ALPHABET, upper: Yl.UPPER_NONE });
    Re.useEffect(() => {
      r(Fd(m, e)),
        u(
          e
            .split(
              `
`
            )
            .map((p) => Ud(p))
        );
    }, [e]),
      Re.useEffect(() => {
        const p = () => {
          if (s.current) {
            const g = `${s.current.scrollHeight}px`;
            i(g), c.current && (c.current.style.height = g);
          }
        };
        return p(), window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
      }, [e]);
    const h = (p) => {
      n(p.target.value);
    };
    return U.jsxs("div", {
      className: "p-4 max-w-3xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
      children: [
        U.jsxs("div", {
          className: "mb-4 flex",
          children: [
            U.jsxs("div", {
              className: "flex-grow mr-4",
              children: [
                U.jsx("label", { className: "block text-sm font-medium mb-2", children: "ひらがなを入力" }),
                U.jsx("textarea", {
                  ref: s,
                  value: e,
                  onChange: h,
                  className:
                    "w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                  style: { height: o, minHeight: "100px", resize: "vertical" },
                }),
              ],
            }),
            U.jsxs("div", {
              className: "w-24 flex flex-col",
              children: [
                U.jsx("label", { className: "block text-sm font-medium mb-2", children: "文字数" }),
                U.jsx("div", {
                  ref: c,
                  className:
                    "flex-grow border border-gray-300 dark:border-gray-600 rounded-md p-2 overflow-auto bg-white dark:bg-gray-700",
                  style: { minHeight: "100px" },
                  children: l.map((p, g) =>
                    U.jsx(
                      "div",
                      {
                        className: "mb-1 text-sm",
                        children:
                          p > 0
                            ? `行 ${g + 1}: ${p}`
                            : U.jsx("span", { className: "text-gray-400 dark:text-gray-500", children: "（空行）" }),
                      },
                      g
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        U.jsxs("div", {
          children: [
            U.jsx("label", { className: "block text-sm font-medium mb-2", children: "ローマ字" }),
            U.jsx("textarea", {
              value: t,
              readOnly: !0,
              className:
                "w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100",
              style: { height: o, minHeight: "100px", resize: "none" },
            }),
          ],
        }),
      ],
    });
  };
function $d() {
  return U.jsxs(U.Fragment, {
    children: [
      U.jsxs("div", {
        className: "flex justify-center items-center gap-1",
        children: [
          U.jsx("h1", {
            className: "mb-8 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white",
            id: "title",
            children: "Sakuceed",
          }),
          U.jsx("img", { src: "./sakuceed.png", alt: "titleIcon", className: "h-24 w-11" }),
        ],
      }),
      U.jsx(Ad, {}),
      U.jsxs("footer", {
        className: "bg-white rounded-lg shadow dark:bg-gray-800 m-4",
        children: [
          U.jsx("hr", { className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" }),
          U.jsxs("span", {
            className: "block text-sm text-gray-500 sm:text-center dark:text-gray-400",
            children: ["© 2024", " ", "Enilika"],
          }),
        ],
      }),
    ],
  });
}
Xl.createRoot(document.getElementById("root")).render(U.jsx(Cc.StrictMode, { children: U.jsx($d, {}) }));
