/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
!(function(e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function(e, t) {
  var n = [],
    r = e.document,
    i = n.slice,
    o = n.concat,
    a = n.push,
    s = n.indexOf,
    l = {},
    u = l.toString,
    c = l.hasOwnProperty,
    f = {},
    d = "1.12.4",
    p = function(e, t) {
      return new p.fn.init(e, t);
    },
    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    g = /^-ms-/,
    m = /-([\da-z])/gi,
    v = function(e, t) {
      return t.toUpperCase();
    };
  function y(e) {
    var t = !!e && "length" in e && e.length,
      n = p.type(e);
    return (
      "function" !== n &&
      !p.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (p.fn = p.prototype = {
    jquery: d,
    constructor: p,
    selector: "",
    length: 0,
    toArray: function() {
      return i.call(this);
    },
    get: function(e) {
      return null != e
        ? e < 0 ? this[e + this.length] : this[e]
        : i.call(this);
    },
    pushStack: function(e) {
      var t = p.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function(e) {
      return p.each(this, e);
    },
    map: function(e) {
      return this.pushStack(
        p.map(this, function(t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function() {
      return this.pushStack(i.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }), (p.extend = p.fn.extend = function() {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      l = arguments.length,
      u = !1;
    for (
      "boolean" == typeof a &&
        ((u = a), (a = arguments[s] || {}), s++), "object" == typeof a ||
        p.isFunction(a) ||
        (a = {}), s === l && ((a = this), s--);
      s < l;
      s++
    )
      if (null != (i = arguments[s]))
        for (r in i)
          (e = a[r]), a !== (n = i[r]) &&
            (u && n && (p.isPlainObject(n) || (t = p.isArray(n)))
              ? (
                  t
                    ? ((t = !1), (o = e && p.isArray(e) ? e : []))
                    : (o = e && p.isPlainObject(e) ? e : {}),
                  (a[r] = p.extend(u, o, n))
                )
              : void 0 !== n && (a[r] = n));
    return a;
  }), p.extend({
    expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e);
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === p.type(e);
    },
    isArray:
      Array.isArray ||
      function(e) {
        return "array" === p.type(e);
      },
    isWindow: function(e) {
      return null != e && e == e.window;
    },
    isNumeric: function(e) {
      var t = e && e.toString();
      return !p.isArray(e) && t - parseFloat(t) + 1 >= 0;
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    isPlainObject: function(e) {
      var t;
      if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e))
        return !1;
      try {
        if (
          e.constructor &&
          !c.call(e, "constructor") &&
          !c.call(e.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (e) {
        return !1;
      }
      if (!f.ownFirst) for (t in e) return c.call(e, t);
      for (t in e);
      return void 0 === t || c.call(e, t);
    },
    type: function(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
          ? l[u.call(e)] || "object"
          : typeof e;
    },
    globalEval: function(t) {
      t &&
        p.trim(t) &&
        (e.execScript ||
          function(t) {
            e.eval.call(e, t);
          })(t);
    },
    camelCase: function(e) {
      return e.replace(g, "ms-").replace(m, v);
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function(e, t) {
      var n,
        r = 0;
      if (y(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
      else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(h, "");
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e &&
        (y(Object(e))
          ? p.merge(n, "string" == typeof e ? [e] : e)
          : a.call(n, e)), n;
    },
    inArray: function(e, t, n) {
      var r;
      if (t) {
        if (s) return s.call(t, e, n);
        for (
          r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0;
          n < r;
          n++
        )
          if (n in t && t[n] === e) return n;
      }
      return -1;
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++];
      if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
      return (e.length = i), e;
    },
    grep: function(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
        !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function(e, t, n) {
      var r,
        i,
        a = 0,
        s = [];
      if (y(e))
        for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
      else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
      return o.apply([], s);
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, o;
      if (
        (
          "string" == typeof t && ((o = e[t]), (t = e), (e = o)),
          p.isFunction(e)
        )
      )
        return (n = i.call(arguments, 2)), ((r = function() {
          return e.apply(t || this, n.concat(i.call(arguments)));
        }).guid = e.guid = e.guid || p.guid++), r;
    },
    now: function() {
      return +new Date();
    },
    support: f
  }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = n[Symbol.iterator]), p.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
      " "
    ),
    function(e, t) {
      l["[object " + t + "]"] = t.toLowerCase();
    }
  );
  var x = (function(e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      l,
      u,
      c,
      f,
      d,
      p,
      h,
      g,
      m,
      v,
      y,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = oe(),
      N = oe(),
      k = oe(),
      S = function(e, t) {
        return e === t && (f = !0), 0;
      },
      A = 1 << 31,
      D = {}.hasOwnProperty,
      j = [],
      L = j.pop,
      H = j.push,
      q = j.push,
      _ = j.slice,
      F = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      M =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      O = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      P =
        "\\[" +
        O +
        "*(" +
        R +
        ")(?:" +
        O +
        "*([*^$|!~]?=)" +
        O +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        O +
        "*\\]",
      B =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        P +
        ")*)|.*)\\)|)",
      W = new RegExp(O + "+", "g"),
      I = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
      $ = new RegExp("^" + O + "*," + O + "*"),
      z = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
      X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
      U = new RegExp(B),
      V = new RegExp("^" + R + "$"),
      Y = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + P),
        PSEUDO: new RegExp("^" + B),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            O +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            O +
            "*(?:([+-]|)" +
            O +
            "*(\\d+)|))" +
            O +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + M + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            O +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            O +
            "*((?:-\\d)?\\d*)" +
            O +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      J = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Z = /[+~]/,
      ee = /'|\\/g,
      te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
      ne = function(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      re = function() {
        d();
      };
    try {
      q.apply((j = _.call(w.childNodes)), w.childNodes), j[w.childNodes.length]
        .nodeType;
    } catch (e) {
      q = {
        apply: j.length
          ? function(e, t) {
              H.apply(e, _.call(t));
            }
          : function(e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            }
      };
    }
    function ie(e, t, r, i) {
      var o,
        s,
        u,
        c,
        f,
        h,
        v,
        y,
        T = t && t.ownerDocument,
        C = t ? t.nodeType : 9;
      if (
        (
          (r = r || []),
          "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C)
        )
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== p && d(t), (t = t || p), g)
      ) {
        if (11 !== C && (h = K.exec(e)))
          if ((o = h[1])) {
            if (9 === C) {
              if (!(u = t.getElementById(o))) return r;
              if (u.id === o) return r.push(u), r;
            } else if (T && (u = T.getElementById(o)) && x(t, u) && u.id === o)
              return r.push(u), r;
          } else {
            if (h[2]) return q.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = h[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return q.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !k[e + " "] && (!m || !m.test(e))) {
          if (1 !== C) (T = t), (y = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (c = t.getAttribute("id"))
                ? (c = c.replace(ee, "\\$&"))
                : t.setAttribute("id", (c = b)), s = (v = a(e))
                .length, f = V.test(c) ? "#" + c : "[id='" + c + "']";
              s--;

            )
              v[s] = f + " " + ge(v[s]);
            (y = v.join(",")), (T = (Z.test(e) && pe(t.parentNode)) || t);
          }
          if (y)
            try {
              return q.apply(r, T.querySelectorAll(y)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return l(e.replace(I, "$1"), t, r, i);
    }
    function oe() {
      var e = [];
      return function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[
          n + " "
        ] = i);
      };
    }
    function ae(e) {
      return (e[b] = !0), e;
    }
    function se(e) {
      var t = p.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
    }
    function ue(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || A) - (~e.sourceIndex || A);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function ce(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function fe(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return ae(function(t) {
        return (t = +t), ae(function(n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--; )
            n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    function pe(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    (n = ie.support = {}), (o = ie.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }), (d = ie.setDocument = function(e) {
      var t,
        i,
        a = e ? e.ownerDocument || e : w;
      return a !== p && 9 === a.nodeType && a.documentElement
        ? (
            (h = (p = a).documentElement),
            (g = !o(p)),
            (i = p.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener("unload", re, !1)
                : i.attachEvent && i.attachEvent("onunload", re)),
            (n.attributes = se(function(e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = se(function(e) {
              return e.appendChild(
                p.createComment("")
              ), !e.getElementsByTagName("*").length;
            })),
            (n.getElementsByClassName = Q.test(p.getElementsByClassName)),
            (n.getById = se(function(e) {
              return (h.appendChild(
                e
              ).id = b), !p.getElementsByName || !p.getElementsByName(b).length;
            })),
            n.getById
              ? (
                  (r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }),
                  (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                      return e.getAttribute("id") === t;
                    };
                  })
                )
              : (
                  delete r.find.ID,
                  (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })
                ),
            (r.find.TAG = n.getElementsByTagName
              ? function(e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa ? t.querySelectorAll(e) : void 0;
                }
              : function(e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (m = []),
            (n.qsa = Q.test(p.querySelectorAll)) &&
              (
                se(function(e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    b +
                    "'></a><select id='" +
                    b +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"), e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
                }),
                se(function(e) {
                  var t = p.createElement("input");
                  t.setAttribute(
                    "type",
                    "hidden"
                  ), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
                })
              ),
            (n.matchesSelector = Q.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              se(function(e) {
                (n.disconnectedMatch = y.call(
                  e,
                  "div"
                )), y.call(e, "[s!='']:x"), v.push("!=", B);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (t = Q.test(h.compareDocumentPosition)),
            (x =
              t || Q.test(h.contains)
                ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function(e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (S = t
              ? function(e, t) {
                  if (e === t) return (f = !0), 0;
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e === p || (e.ownerDocument === w && x(w, e))
                        ? -1
                        : t === p || (t.ownerDocument === w && x(w, t))
                          ? 1
                          : c ? F(c, e) - F(c, t) : 0
                      : 4 & r ? -1 : 1)
                  );
                }
              : function(e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === p
                      ? -1
                      : t === p
                        ? 1
                        : i ? -1 : o ? 1 : c ? F(c, e) - F(c, t) : 0;
                  if (i === o) return ue(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? ue(a[r], s[r])
                    : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                }),
            p
          )
        : p;
    }), (ie.matches = function(e, t) {
      return ie(e, null, null, t);
    }), (ie.matchesSelector = function(e, t) {
      if (
        (
          (e.ownerDocument || e) !== p && d(e),
          (t = t.replace(X, "='$1']")),
          n.matchesSelector &&
            g &&
            !k[t + " "] &&
            (!v || !v.test(t)) &&
            (!m || !m.test(t))
        )
      )
        try {
          var r = y.call(e, t);
          if (
            r ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {}
      return ie(t, p, null, [e]).length > 0;
    }), (ie.contains = function(e, t) {
      return (e.ownerDocument || e) !== p && d(e), x(e, t);
    }), (ie.attr = function(e, t) {
      (e.ownerDocument || e) !== p && d(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }), (ie.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }), (ie.uniqueSort = function(e) {
      var t,
        r = [],
        i = 0,
        o = 0;
      if (
        (
          (f = !n.detectDuplicates),
          (c = !n.sortStable && e.slice(0)),
          e.sort(S),
          f
        )
      ) {
        for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
        for (; i--; ) e.splice(r[i], 1);
      }
      return (c = null), e;
    }), (i = ie.getText = function(e) {
      var t,
        n = "",
        r = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; (t = e[r++]); ) n += i(t);
      return n;
    }), ((r = ie.selectors = {
      cacheLength: 50,
      createPseudo: ae,
      match: Y,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" }
      },
      preFilter: {
        ATTR: function(e) {
          return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] ||
            e[4] ||
            e[5] ||
            "")
            .replace(te, ne)), "~=" === e[2] &&
            (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function(e) {
          return (e[1] = e[1].toLowerCase()), "nth" === e[1].slice(0, 3)
            ? (
                e[3] || ie.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3]))
              )
            : e[3] && ie.error(e[0]), e;
        },
        PSEUDO: function(e) {
          var t,
            n = !e[6] && e[2];
          return Y.CHILD.test(e[0])
            ? null
            : (
                e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    U.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3)
              );
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e
            ? function() {
                return !0;
              }
            : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function(e) {
          var t = E[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) &&
              E(e, function(e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function(e, t, n) {
          return function(r) {
            var i = ie.attr(r, e);
            return null == i
              ? "!=" === t
              : !t ||
                (
                  (i += ""),
                  "=" === t
                    ? i === n
                    : "!=" === t
                      ? i !== n
                      : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                          ? n && i.indexOf(n) > -1
                          : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                              ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-")
                );
          };
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === r && 0 === i
            ? function(e) {
                return !!e.parentNode;
              }
            : function(t, n, l) {
                var u,
                  c,
                  f,
                  d,
                  p,
                  h,
                  g = o !== a ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = s && t.nodeName.toLowerCase(),
                  y = !l && !s,
                  x = !1;
                if (m) {
                  if (o) {
                    for (; g; ) {
                      for (d = t; (d = d[g]); )
                        if (
                          s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType
                        )
                          return !1;
                      h = g = "only" === e && !h && "nextSibling";
                    }
                    return !0;
                  }
                  if (((h = [a ? m.firstChild : m.lastChild]), a && y)) {
                    for (
                      x =
                        (p =
                          (u =
                            (c =
                              (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                          u[1]) && u[2], d = p && m.childNodes[p];
                      (d = (++p && d && d[g]) || (x = p = 0) || h.pop());

                    )
                      if (1 === d.nodeType && ++x && d === t) {
                        c[e] = [T, p, x];
                        break;
                      }
                  } else if (
                    (
                      y &&
                        (x = p =
                          (u =
                            (c =
                              (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === T && u[1]),
                      !1 === x
                    )
                  )
                    for (
                      ;
                      (d = (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
                      ((s
                        ? d.nodeName.toLowerCase() !== v
                        : 1 !== d.nodeType) ||
                        !++x ||
                        (
                          y &&
                            ((c =
                              (f = d[b] || (d[b] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] = [T, x]),
                          d !== t
                        ));

                    );
                  return (x -= i) === r || (x % r == 0 && x / r >= 0);
                }
              };
        },
        PSEUDO: function(e, t) {
          var n,
            i =
              r.pseudos[e] ||
              r.setFilters[e.toLowerCase()] ||
              ie.error("unsupported pseudo: " + e);
          return i[b]
            ? i(t)
            : i.length > 1
              ? (
                  (n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ae(function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; )
                          e[(r = F(e, o[a]))] = !(n[r] = o[a]);
                      })
                    : function(e) {
                        return i(e, 0, n);
                      }
                )
              : i;
        }
      },
      pseudos: {
        not: ae(function(e) {
          var t = [],
            n = [],
            r = s(e.replace(I, "$1"));
          return r[b]
            ? ae(function(e, t, n, i) {
                for (var o, a = r(e, null, i, []), s = e.length; s--; )
                  (o = a[s]) && (e[s] = !(t[s] = o));
              })
            : function(e, i, o) {
                return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
              };
        }),
        has: ae(function(e) {
          return function(t) {
            return ie(e, t).length > 0;
          };
        }),
        contains: ae(function(e) {
          return (e = e.replace(te, ne)), function(t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: ae(function(e) {
          return V.test(e || "") ||
            ie.error(
              "unsupported lang: " + e
            ), (e = e.replace(te, ne).toLowerCase()), function(t) {
            var n;
            do {
              if (
                (n = g
                  ? t.lang
                  : t.getAttribute("xml:lang") || t.getAttribute("lang"))
              )
                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function(e) {
          return e === h;
        },
        focus: function(e) {
          return (
            e === p.activeElement &&
            (!p.hasFocus || p.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: function(e) {
          return !1 === e.disabled;
        },
        disabled: function(e) {
          return !0 === e.disabled;
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function(e) {
          return !r.pseudos.empty(e);
        },
        header: function(e) {
          return G.test(e.nodeName);
        },
        input: function(e) {
          return J.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function(e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: de(function() {
          return [0];
        }),
        last: de(function(e, t) {
          return [t - 1];
        }),
        eq: de(function(e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: de(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: de(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: de(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
          return e;
        }),
        gt: de(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e;
        })
      }
    }).pseudos.nth =
      r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = ce(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = fe(t);
    function he() {}
    function ge(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = C++;
      return t.first
        ? function(t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function(t, n, a) {
            var s,
              l,
              u,
              c = [T, o];
            if (a) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    (s = (l =
                      (u = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (u[t.uniqueID] = {}))[r]) &&
                    s[0] === T &&
                    s[1] === o
                  )
                    return (c[2] = s[2]);
                  if (((l[r] = c), (c[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function ve(e) {
      return e.length > 1
        ? function(t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function ye(e, t, n, r, i) {
      for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
      return a;
    }
    function xe(e, t, n, r, i, o) {
      return r && !r[b] && (r = xe(r)), i &&
        !i[b] &&
        (i = xe(i, o)), ae(function(o, a, s, l) {
        var u,
          c,
          f,
          d = [],
          p = [],
          h = a.length,
          g =
            o ||
            (function(e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) ie(e, t[r], n);
              return n;
            })(t || "*", s.nodeType ? [s] : s, []),
          m = !e || (!o && t) ? g : ye(g, d, e, s, l),
          v = n ? (i || (o ? e : h || r) ? [] : a) : m;
        if ((n && n(m, v, s, l), r))
          for (u = ye(v, p), r(u, [], s, l), c = u.length; c--; )
            (f = u[c]) && (v[p[c]] = !(m[p[c]] = f));
        if (o) {
          if (i || e) {
            if (i) {
              for (u = [], c = v.length; c--; )
                (f = v[c]) && u.push((m[c] = f));
              i(null, (v = []), u, l);
            }
            for (c = v.length; c--; )
              (f = v[c]) &&
                (u = i ? F(o, f) : d[c]) > -1 &&
                (o[u] = !(a[u] = f));
          }
        } else (v = ye(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, l) : q.apply(a, v);
      });
    }
    function be(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          l = a ? 1 : 0,
          c = me(
            function(e) {
              return e === t;
            },
            s,
            !0
          ),
          f = me(
            function(e) {
              return F(t, e) > -1;
            },
            s,
            !0
          ),
          d = [
            function(e, n, r) {
              var i =
                (!a && (r || n !== u)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            }
          ];
        l < o;
        l++
      )
        if ((n = r.relative[e[l].type])) d = [me(ve(d), n)];
        else {
          if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (i = ++l; i < o && !r.relative[e[i].type]; i++);
            return xe(
              l > 1 && ve(d),
              l > 1 &&
                ge(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(I, "$1"),
              n,
              l < i && be(e.slice(l, i)),
              i < o && be((e = e.slice(i))),
              i < o && ge(e)
            );
          }
          d.push(n);
        }
      return ve(d);
    }
    return (he.prototype = r.filters =
      r.pseudos), (r.setFilters = new he()), (a = ie.tokenize = function(e, t) {
      var n,
        i,
        o,
        a,
        s,
        l,
        u,
        c = N[e + " "];
      if (c) return t ? 0 : c.slice(0);
      for (s = e, l = [], u = r.preFilter; s; ) {
        (n && !(i = $.exec(s))) ||
          (
            i && (s = s.slice(i[0].length) || s),
            l.push((o = []))
          ), (n = !1), (i = z.exec(s)) &&
          (
            (n = i.shift()),
            o.push({ value: n, type: i[0].replace(I, " ") }),
            (s = s.slice(n.length))
          );
        for (a in r.filter)
          !(i = Y[a].exec(s)) ||
            (u[a] && !(i = u[a](i))) ||
            (
              (n = i.shift()),
              o.push({ value: n, type: a, matches: i }),
              (s = s.slice(n.length))
            );
        if (!n) break;
      }
      return t ? s.length : s ? ie.error(e) : N(e, l).slice(0);
    }), (s = ie.compile = function(e, t) {
      var n,
        i,
        o,
        s,
        l,
        c,
        f = [],
        h = [],
        m = k[e + " "];
      if (!m) {
        for (t || (t = a(e)), n = t.length; n--; )
          (m = be(t[n]))[b] ? f.push(m) : h.push(m);
        (m = k(
          e,
          (
            (i = h),
            (s = (o = f).length > 0),
            (l = i.length > 0),
            (c = function(e, t, n, a, c) {
              var f,
                h,
                m,
                v = 0,
                y = "0",
                x = e && [],
                b = [],
                w = u,
                C = e || (l && r.find.TAG("*", c)),
                E = (T += null == w ? 1 : Math.random() || 0.1),
                N = C.length;
              for (
                c && (u = t === p || t || c);
                y !== N && null != (f = C[y]);
                y++
              ) {
                if (l && f) {
                  for (
                    h = 0, t || f.ownerDocument === p || (d(f), (n = !g));
                    (m = i[h++]);

                  )
                    if (m(f, t || p, n)) {
                      a.push(f);
                      break;
                    }
                  c && (T = E);
                }
                s && ((f = !m && f) && v--, e && x.push(f));
              }
              if (((v += y), s && y !== v)) {
                for (h = 0; (m = o[h++]); ) m(x, b, t, n);
                if (e) {
                  if (v > 0) for (; y--; ) x[y] || b[y] || (b[y] = L.call(a));
                  b = ye(b);
                }
                q.apply(a, b), c &&
                  !e &&
                  b.length > 0 &&
                  v + o.length > 1 &&
                  ie.uniqueSort(a);
              }
              return c && ((T = E), (u = w)), x;
            }),
            s ? ae(c) : c
          )
        )).selector = e;
      }
      return m;
    }), (l = ie.select = function(e, t, i, o) {
      var l,
        u,
        c,
        f,
        d,
        p = "function" == typeof e && e,
        h = !o && a((e = p.selector || e));
      if (((i = i || []), 1 === h.length)) {
        if (
          (u = h[0] = h[0].slice(0)).length > 2 &&
          "ID" === (c = u[0]).type &&
          n.getById &&
          9 === t.nodeType &&
          g &&
          r.relative[u[1].type]
        ) {
          if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
            return i;
          p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
        }
        for (
          l = Y.needsContext.test(e) ? 0 : u.length;
          l-- && ((c = u[l]), !r.relative[(f = c.type)]);

        )
          if (
            (d = r.find[f]) &&
            (o = d(
              c.matches[0].replace(te, ne),
              (Z.test(u[0].type) && pe(t.parentNode)) || t
            ))
          ) {
            if ((u.splice(l, 1), !(e = o.length && ge(u))))
              return q.apply(i, o), i;
            break;
          }
      }
      return (p || s(e, h))(
        o,
        t,
        !g,
        i,
        !t || (Z.test(e) && pe(t.parentNode)) || t
      ), i;
    }), (n.sortStable =
      b.split("").sort(S).join("") ===
      b), (n.detectDuplicates = !!f), d(), (n.sortDetached = se(function(e) {
      return 1 & e.compareDocumentPosition(p.createElement("div"));
    })), se(function(e) {
      return (e.innerHTML =
        "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
    }) ||
      le("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), (n.attributes &&
      se(function(e) {
        return (e.innerHTML =
          "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      })) ||
      le("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), se(function(e) {
      return null == e.getAttribute("disabled");
    }) ||
      le(M, function(e, t, n) {
        var r;
        if (!n)
          return !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), ie;
  })(e);
  (p.find = x), (p.expr = x.selectors), (p.expr[":"] = p.expr.pseudos), (p.uniqueSort = p.unique = x.uniqueSort), (p.text = x.getText), (p.isXMLDoc = x.isXML), (p.contains = x.contains);
  var b = function(e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && p(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    w = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    T = p.expr.match.needsContext,
    C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    E = /^.[^:#\[\.,]*$/;
  function N(e, t, n) {
    if (p.isFunction(t))
      return p.grep(e, function(e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return p.grep(e, function(e) {
        return e === t !== n;
      });
    if ("string" == typeof t) {
      if (E.test(t)) return p.filter(t, e, n);
      t = p.filter(t, e);
    }
    return p.grep(e, function(e) {
      return p.inArray(e, t) > -1 !== n;
    });
  }
  (p.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType
      ? p.find.matchesSelector(r, e) ? [r] : []
      : p.find.matches(
          e,
          p.grep(t, function(e) {
            return 1 === e.nodeType;
          })
        );
  }), p.fn.extend({
    find: function(e) {
      var t,
        n = [],
        r = this,
        i = r.length;
      if ("string" != typeof e)
        return this.pushStack(
          p(e).filter(function() {
            for (t = 0; t < i; t++) if (p.contains(r[t], this)) return !0;
          })
        );
      for (t = 0; t < i; t++) p.find(e, r[t], n);
      return ((n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this
        .selector
        ? this.selector + " " + e
        : e), n;
    },
    filter: function(e) {
      return this.pushStack(N(this, e || [], !1));
    },
    not: function(e) {
      return this.pushStack(N(this, e || [], !0));
    },
    is: function(e) {
      return !!N(this, "string" == typeof e && T.test(e) ? p(e) : e || [], !1)
        .length;
    }
  });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((p.fn.init = function(e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(i =
          "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3
            ? [null, e, null]
            : S.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          (
            (t = t instanceof p ? t[0] : t),
            p.merge(
              this,
              p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
            ),
            C.test(i[1]) && p.isPlainObject(t)
          )
        )
          for (i in t)
            p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      if ((o = r.getElementById(i[2])) && o.parentNode) {
        if (o.id !== i[2]) return k.find(e);
        (this.length = 1), (this[0] = o);
      }
      return (this.context = r), (this.selector = e), this;
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : p.isFunction(e)
        ? void 0 !== n.ready ? n.ready(e) : e(p)
        : (
            void 0 !== e.selector &&
              ((this.selector = e.selector), (this.context = e.context)),
            p.makeArray(e, this)
          );
  }).prototype =
    p.fn), (k = p(r));
  var A = /^(?:parents|prev(?:Until|All))/,
    D = { children: !0, contents: !0, next: !0, prev: !0 };
  function j(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  p.fn.extend({
    has: function(e) {
      var t,
        n = p(e, this),
        r = n.length;
      return this.filter(function() {
        for (t = 0; t < r; t++) if (p.contains(this, n[t])) return !0;
      });
    },
    closest: function(e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = T.test(e) || "string" != typeof e ? p(e, t || this.context) : 0;
        r < i;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (a
              ? a.index(n) > -1
              : 1 === n.nodeType && p.find.matchesSelector(n, e))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? p.uniqueSort(o) : o);
    },
    index: function(e) {
      return e
        ? "string" == typeof e
          ? p.inArray(this[0], p(e))
          : p.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function(e, t) {
      return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), p.each(
    {
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function(e) {
        return b(e, "parentNode");
      },
      parentsUntil: function(e, t, n) {
        return b(e, "parentNode", n);
      },
      next: function(e) {
        return j(e, "nextSibling");
      },
      prev: function(e) {
        return j(e, "previousSibling");
      },
      nextAll: function(e) {
        return b(e, "nextSibling");
      },
      prevAll: function(e) {
        return b(e, "previousSibling");
      },
      nextUntil: function(e, t, n) {
        return b(e, "nextSibling", n);
      },
      prevUntil: function(e, t, n) {
        return b(e, "previousSibling", n);
      },
      siblings: function(e) {
        return w((e.parentNode || {}).firstChild, e);
      },
      children: function(e) {
        return w(e.firstChild);
      },
      contents: function(e) {
        return p.nodeName(e, "iframe")
          ? e.contentDocument || e.contentWindow.document
          : p.merge([], e.childNodes);
      }
    },
    function(e, t) {
      p.fn[e] = function(n, r) {
        var i = p.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r &&
          "string" == typeof r &&
          (i = p.filter(r, i)), this.length > 1 &&
          (
            D[e] || (i = p.uniqueSort(i)),
            A.test(e) && (i = i.reverse())
          ), this.pushStack(i);
      };
    }
  );
  var L,
    H,
    q = /\S+/g;
  function _() {
    r.addEventListener
      ? (
          r.removeEventListener("DOMContentLoaded", F),
          e.removeEventListener("load", F)
        )
      : (r.detachEvent("onreadystatechange", F), e.detachEvent("onload", F));
  }
  function F() {
    (r.addEventListener ||
      "load" === e.event.type ||
      "complete" === r.readyState) &&
      (_(), p.ready());
  }
  (p.Callbacks = function(e) {
    var t, n;
    e =
      "string" == typeof e
        ? (
            (t = e),
            (n = {}),
            p.each(t.match(q) || [], function(e, t) {
              n[t] = !0;
            }),
            n
          )
        : p.extend({}, e);
    var r,
      i,
      o,
      a,
      s = [],
      l = [],
      u = -1,
      c = function() {
        for (a = e.once, o = r = !0; l.length; u = -1)
          for (i = l.shift(); ++u < s.length; )
            !1 === s[u].apply(i[0], i[1]) &&
              e.stopOnFalse &&
              ((u = s.length), (i = !1));
        e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
      },
      f = {
        add: function() {
          return s &&
            (
              i && !r && ((u = s.length - 1), l.push(i)),
              (function t(n) {
                p.each(n, function(n, r) {
                  p.isFunction(r)
                    ? (e.unique && f.has(r)) || s.push(r)
                    : r && r.length && "string" !== p.type(r) && t(r);
                });
              })(arguments),
              i && !r && c()
            ), this;
        },
        remove: function() {
          return p.each(arguments, function(e, t) {
            for (var n; (n = p.inArray(t, s, n)) > -1; )
              s.splice(n, 1), n <= u && u--;
          }), this;
        },
        has: function(e) {
          return e ? p.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function() {
          return s && (s = []), this;
        },
        disable: function() {
          return (a = l = []), (s = i = ""), this;
        },
        disabled: function() {
          return !s;
        },
        lock: function() {
          return (a = !0), i || f.disable(), this;
        },
        locked: function() {
          return !!a;
        },
        fireWith: function(e, t) {
          return a ||
            (
              (t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              r || c()
            ), this;
        },
        fire: function() {
          return f.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!o;
        }
      };
    return f;
  }), p.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", p.Callbacks("once memory"), "resolved"],
          ["reject", "fail", p.Callbacks("once memory"), "rejected"],
          ["notify", "progress", p.Callbacks("memory")]
        ],
        n = "pending",
        r = {
          state: function() {
            return n;
          },
          always: function() {
            return i.done(arguments).fail(arguments), this;
          },
          then: function() {
            var e = arguments;
            return p
              .Deferred(function(n) {
                p.each(t, function(t, o) {
                  var a = p.isFunction(e[t]) && e[t];
                  i[o[1]](function() {
                    var e = a && a.apply(this, arguments);
                    e && p.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(n.notify)
                          .done(n.resolve)
                          .fail(n.reject)
                      : n[o[0] + "With"](
                          this === r ? n.promise() : this,
                          a ? [e] : arguments
                        );
                  });
                }), (e = null);
              })
              .promise();
          },
          promise: function(e) {
            return null != e ? p.extend(e, r) : r;
          }
        },
        i = {};
      return (r.pipe = r.then), p.each(t, function(e, o) {
        var a = o[2],
          s = o[3];
        (r[o[1]] = a.add), s &&
          a.add(
            function() {
              n = s;
            },
            t[1 ^ e][2].disable,
            t[2][2].lock
          ), (i[o[0]] = function() {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }), (i[o[0] + "With"] = a.fireWith);
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function(e) {
      var t,
        n,
        r,
        o = 0,
        a = i.call(arguments),
        s = a.length,
        l = 1 !== s || (e && p.isFunction(e.promise)) ? s : 0,
        u = 1 === l ? e : p.Deferred(),
        c = function(e, n, r) {
          return function(o) {
            (n[e] = this), (r[e] =
              arguments.length > 1 ? i.call(arguments) : o), r === t
              ? u.notifyWith(n, r)
              : --l || u.resolveWith(n, r);
          };
        };
      if (s > 1)
        for (t = new Array(s), n = new Array(s), r = new Array(s); o < s; o++)
          a[o] && p.isFunction(a[o].promise)
            ? a[o]
                .promise()
                .progress(c(o, n, t))
                .done(c(o, r, a))
                .fail(u.reject)
            : --l;
      return l || u.resolveWith(r, a), u.promise();
    }
  }), (p.fn.ready = function(e) {
    return p.ready.promise().done(e), this;
  }), p.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? p.readyWait++ : p.ready(!0);
    },
    ready: function(e) {
      (!0 === e ? --p.readyWait : p.isReady) ||
        (
          (p.isReady = !0),
          (!0 !== e && --p.readyWait > 0) ||
            (
              L.resolveWith(r, [p]),
              p.fn.triggerHandler &&
                (p(r).triggerHandler("ready"), p(r).off("ready"))
            )
        );
    }
  }), (p.ready.promise = function(t) {
    if (!L)
      if (
        (
          (L = p.Deferred()),
          "complete" === r.readyState ||
            ("loading" !== r.readyState && !r.documentElement.doScroll)
        )
      )
        e.setTimeout(p.ready);
      else if (r.addEventListener)
        r.addEventListener("DOMContentLoaded", F), e.addEventListener(
          "load",
          F
        );
      else {
        r.attachEvent("onreadystatechange", F), e.attachEvent("onload", F);
        var n = !1;
        try {
          n = null == e.frameElement && r.documentElement;
        } catch (e) {}
        n &&
          n.doScroll &&
          (function t() {
            if (!p.isReady) {
              try {
                n.doScroll("left");
              } catch (n) {
                return e.setTimeout(t, 50);
              }
              _(), p.ready();
            }
          })();
      }
    return L.promise(t);
  }), p.ready.promise();
  for (H in p(f)) break;
  (f.ownFirst = "0" === H), (f.inlineBlockNeedsLayout = !1), p(function() {
    var e, t, n, i;
    (n = r.getElementsByTagName("body")[0]) &&
      n.style &&
      (
        (t = r.createElement("div")),
        ((i = r.createElement("div")).style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(i).appendChild(t),
        void 0 !== t.style.zoom &&
          (
            (t.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (f.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
            e && (n.style.zoom = 1)
          ),
        n.removeChild(i)
      );
  }), (function() {
    var e = r.createElement("div");
    f.deleteExpando = !0;
    try {
      delete e.test;
    } catch (e) {
      f.deleteExpando = !1;
    }
    e = null;
  })();
  var M,
    O = function(e) {
      var t = p.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!t || (!0 !== t && e.getAttribute("classid") === t))
      );
    },
    R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    P = /([A-Z])/g;
  function B(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = "data-" + t.replace(P, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(r))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n ? +n : R.test(n) ? p.parseJSON(n) : n));
        } catch (e) {}
        p.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  function W(e) {
    var t;
    for (t in e)
      if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function I(e, t, r, i) {
    if (O(e)) {
      var o,
        a,
        s = p.expando,
        l = e.nodeType,
        u = l ? p.cache : e,
        c = l ? e[s] : e[s] && s;
      if (
        (c && u[c] && (i || u[c].data)) ||
        void 0 !== r ||
        "string" != typeof t
      )
        return c || (c = l ? (e[s] = n.pop() || p.guid++) : s), u[c] ||
          (u[c] = l ? {} : { toJSON: p.noop }), ("object" != typeof t &&
          "function" != typeof t) ||
          (i
            ? (u[c] = p.extend(u[c], t))
            : (u[c].data = p.extend(u[c].data, t))), (a = u[c]), i ||
          (a.data || (a.data = {}), (a = a.data)), void 0 !== r &&
          (a[p.camelCase(t)] = r), "string" == typeof t
          ? null == (o = a[t]) && (o = a[p.camelCase(t)])
          : (o = a), o;
    }
  }
  function $(e, t, n) {
    if (O(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? p.cache : e,
        s = o ? e[p.expando] : p.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          i = (t = p.isArray(t)
            ? t.concat(p.map(t, p.camelCase))
            : t in r ? [t] : (t = p.camelCase(t)) in r ? [t] : t.split(" "))
            .length;
          for (; i--; ) delete r[t[i]];
          if (n ? !W(r) : !p.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, W(a[s]))) &&
          (o
            ? p.cleanData([e], !0)
            : f.deleteExpando || a != a.window ? delete a[s] : (a[s] = void 0));
      }
    }
  }
  p.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !W(e);
    },
    data: function(e, t, n) {
      return I(e, t, n);
    },
    removeData: function(e, t) {
      return $(e, t);
    },
    _data: function(e, t, n) {
      return I(e, t, n, !0);
    },
    _removeData: function(e, t) {
      return $(e, t, !0);
    }
  }), p.fn.extend({
    data: function(e, t) {
      var n,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === e) {
        if (
          this.length &&
          ((i = p.data(o)), 1 === o.nodeType && !p._data(o, "parsedAttrs"))
        ) {
          for (n = a.length; n--; )
            a[n] &&
              0 === (r = a[n].name).indexOf("data-") &&
              B(o, (r = p.camelCase(r.slice(5))), i[r]);
          p._data(o, "parsedAttrs", !0);
        }
        return i;
      }
      return "object" == typeof e
        ? this.each(function() {
            p.data(this, e);
          })
        : arguments.length > 1
          ? this.each(function() {
              p.data(this, e, t);
            })
          : o ? B(o, e, p.data(o, e)) : void 0;
    },
    removeData: function(e) {
      return this.each(function() {
        p.removeData(this, e);
      });
    }
  }), p.extend({
    queue: function(e, t, n) {
      var r;
      if (e)
        return (t = (t || "fx") + "queue"), (r = p._data(e, t)), n &&
          (!r || p.isArray(n)
            ? (r = p._data(e, t, p.makeArray(n)))
            : r.push(n)), r || [];
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = p.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = p._queueHooks(e, t);
      "inprogress" === i && ((i = n.shift()), r--), i &&
        (
          "fx" === t && n.unshift("inprogress"),
          delete o.stop,
          i.call(
            e,
            function() {
              p.dequeue(e, t);
            },
            o
          )
        ), !r && o && o.empty.fire();
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return (
        p._data(e, n) ||
        p._data(e, n, {
          empty: p.Callbacks("once memory").add(function() {
            p._removeData(e, t + "queue"), p._removeData(e, n);
          })
        })
      );
    }
  }), p.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e &&
        ((t = e), (e = "fx"), n--), arguments.length < n
        ? p.queue(this[0], e)
        : void 0 === t
          ? this
          : this.each(function() {
              var n = p.queue(this, e, t);
              p._queueHooks(
                this,
                e
              ), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e);
            });
    },
    dequeue: function(e) {
      return this.each(function() {
        p.dequeue(this, e);
      });
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", []);
    },
    promise: function(e, t) {
      var n,
        r = 1,
        i = p.Deferred(),
        o = this,
        a = this.length,
        s = function() {
          --r || i.resolveWith(o, [o]);
        };
      for (
        "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
        a--;

      )
        (n = p._data(o[a], e + "queueHooks")) &&
          n.empty &&
          (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  }), (f.shrinkWrapBlocks = function() {
    return null != M
      ? M
      : (
          (M = !1),
          (t = r.getElementsByTagName("body")[0]) && t.style
            ? (
                (e = r.createElement("div")),
                ((n = r.createElement("div")).style.cssText =
                  "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                t.appendChild(n).appendChild(e),
                void 0 !== e.style.zoom &&
                  (
                    (e.style.cssText =
                      "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                    (e.appendChild(r.createElement("div")).style.width = "5px"),
                    (M = 3 !== e.offsetWidth)
                  ),
                t.removeChild(n),
                M
              )
            : void 0
        );
    var e, t, n;
  });
  var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    X = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function(e, t) {
      return (e = t || e), "none" === p.css(e, "display") ||
        !p.contains(e.ownerDocument, e);
    };
  function Y(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function() {
            return r.cur();
          }
        : function() {
            return p.css(e, t, "");
          },
      l = s(),
      u = (n && n[3]) || (p.cssNumber[t] ? "" : "px"),
      c = (p.cssNumber[t] || ("px" !== u && +l)) && X.exec(p.css(e, t));
    if (c && c[3] !== u) {
      (u = u || c[3]), (n = n || []), (c = +l || 1);
      do {
        (c /= o = o || ".5"), p.style(e, t, c + u);
      } while (o !== (o = s() / l) && 1 !== o && --a);
    }
    return n &&
      (
        (c = +c || +l || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = u), (r.start = c), (r.end = i))
      ), i;
  }
  var J,
    G,
    Q,
    K = function(e, t, n, r, i, o, a) {
      var s = 0,
        l = e.length,
        u = null == n;
      if ("object" === p.type(n)) {
        i = !0;
        for (s in n) K(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        (
          (i = !0),
          p.isFunction(r) || (a = !0),
          u &&
            (a
              ? (t.call(e, r), (t = null))
              : (
                  (u = t),
                  (t = function(e, t, n) {
                    return u.call(p(e), n);
                  })
                )),
          t
        )
      )
        for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
    Z = /^(?:checkbox|radio)$/i,
    ee = /<([\w:-]+)/,
    te = /^$|\/(?:java|ecma)script/i,
    ne = /^\s+/,
    re =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ie(e) {
    var t = re.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  (J = r.createElement(
    "div"
  )), (G = r.createDocumentFragment()), (Q = r.createElement("input")), (J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"), (f.leadingWhitespace = 3 === J.firstChild.nodeType), (f.tbody = !J.getElementsByTagName("tbody").length), (f.htmlSerialize = !!J.getElementsByTagName("link").length), (f.html5Clone = "<:nav></:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML), (Q.type = "checkbox"), (Q.checked = !0), G.appendChild(Q), (f.appendChecked = Q.checked), (J.innerHTML = "<textarea>x</textarea>"), (f.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue), G.appendChild(J), (Q = r.createElement("input")).setAttribute("type", "radio"), Q.setAttribute("checked", "checked"), Q.setAttribute("name", "t"), J.appendChild(Q), (f.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked), (f.noCloneEvent = !!J.addEventListener), (J[p.expando] = 1), (f.attributes = !J.getAttribute(p.expando));
  var oe = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: f.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  function ae(e, t) {
    var n,
      r,
      i = 0,
      o =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
        !t || p.nodeName(r, t) ? o.push(r) : p.merge(o, ae(r, t));
    return void 0 === t || (t && p.nodeName(e, t)) ? p.merge([e], o) : o;
  }
  function se(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      p._data(n, "globalEval", !t || p._data(t[r], "globalEval"));
  }
  (oe.optgroup =
    oe.option), (oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead), (oe.th = oe.td);
  var le = /<|&#?\w+;/,
    ue = /<tbody/i;
  function ce(e) {
    Z.test(e.type) && (e.defaultChecked = e.checked);
  }
  function fe(e, t, n, r, i) {
    for (
      var o, a, s, l, u, c, d, h = e.length, g = ie(t), m = [], v = 0;
      v < h;
      v++
    )
      if ((a = e[v]) || 0 === a)
        if ("object" === p.type(a)) p.merge(m, a.nodeType ? [a] : a);
        else if (le.test(a)) {
          for (
            l = l || g.appendChild(t.createElement("div")), u = (ee.exec(a) || [
              "",
              ""
            ])[1]
              .toLowerCase(), d = oe[u] || oe._default, l.innerHTML =
              d[1] + p.htmlPrefilter(a) + d[2], o = d[0];
            o--;

          )
            l = l.lastChild;
          if (
            (
              !f.leadingWhitespace &&
                ne.test(a) &&
                m.push(t.createTextNode(ne.exec(a)[0])),
              !f.tbody
            )
          )
            for (
              o =
                (a =
                  "table" !== u || ue.test(a)
                    ? "<table>" !== d[1] || ue.test(a) ? 0 : l
                    : l.firstChild) && a.childNodes.length;
              o--;

            )
              p.nodeName((c = a.childNodes[o]), "tbody") &&
                !c.childNodes.length &&
                a.removeChild(c);
          for (p.merge(m, l.childNodes), l.textContent = ""; l.firstChild; )
            l.removeChild(l.firstChild);
          l = g.lastChild;
        } else m.push(t.createTextNode(a));
    for (
      l && g.removeChild(l), f.appendChecked ||
        p.grep(ae(m, "input"), ce), v = 0;
      (a = m[v++]);

    )
      if (r && p.inArray(a, r) > -1) i && i.push(a);
      else if (
        (
          (s = p.contains(a.ownerDocument, a)),
          (l = ae(g.appendChild(a), "script")),
          s && se(l),
          n
        )
      )
        for (o = 0; (a = l[o++]); ) te.test(a.type || "") && n.push(a);
    return (l = null), g;
  }
  !(function() {
    var t,
      n,
      i = r.createElement("div");
    for (t in { submit: !0, change: !0, focusin: !0 })
      (n = "on" + t), (f[t] = n in e) ||
        (i.setAttribute(n, "t"), (f[t] = !1 === i.attributes[n].expando));
    i = null;
  })();
  var de = /^(?:input|select|textarea)$/i,
    pe = /^key/,
    he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ge = /^(?:focusinfocus|focusoutblur)$/,
    me = /^([^.]*)(?:\.(.+)|)/;
  function ve() {
    return !0;
  }
  function ye() {
    return !1;
  }
  function xe() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function be(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) be(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (
        null == r && null == i
          ? ((i = n), (r = n = void 0))
          : null == i &&
            ("string" == typeof n
              ? ((i = r), (r = void 0))
              : ((i = r), (r = n), (n = void 0))),
        !1 === i
      )
    )
      i = ye;
    else if (!i) return e;
    return 1 === o &&
      (
        (a = i),
        ((i = function(e) {
          return p().off(e), a.apply(this, arguments);
        }).guid =
          a.guid || (a.guid = p.guid++))
      ), e.each(function() {
      p.event.add(this, t, i, r, n);
    });
  }
  (p.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        g,
        m,
        v = p._data(e);
      if (v) {
        for (
          n.handler && ((n = (l = n).handler), (i = l.selector)), n.guid ||
            (n.guid = p.guid++), (a = v.events) || (a = v.events = {}), (c =
            v.handle) ||
            ((c = v.handle = function(e) {
              return void 0 === p || (e && p.event.triggered === e.type)
                ? void 0
                : p.event.dispatch.apply(c.elem, arguments);
            }).elem = e), s = (t = (t || "").match(q) || [""]).length;
          s--;

        )
          (h = m = (o = me.exec(t[s]) || [])[1]), (g = (o[2] || "")
            .split(".")
            .sort()), h &&
            (
              (u = p.event.special[h] || {}),
              (h = (i ? u.delegateType : u.bindType) || h),
              (u = p.event.special[h] || {}),
              (f = p.extend(
                {
                  type: h,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && p.expr.match.needsContext.test(i),
                  namespace: g.join(".")
                },
                l
              )),
              (d = a[h]) ||
                (
                  ((d = a[h] = []).delegateCount = 0),
                  (u.setup && !1 !== u.setup.call(e, r, g, c)) ||
                    (e.addEventListener
                      ? e.addEventListener(h, c, !1)
                      : e.attachEvent && e.attachEvent("on" + h, c))
                ),
              u.add &&
                (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, f) : d.push(f),
              (p.event.global[h] = !0)
            );
        e = null;
      }
    },
    remove: function(e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        g,
        m,
        v = p.hasData(e) && p._data(e);
      if (v && (c = v.events)) {
        for (u = (t = (t || "").match(q) || [""]).length; u--; )
          if (
            (
              (h = m = (s = me.exec(t[u]) || [])[1]),
              (g = (s[2] || "").split(".").sort()),
              h
            )
          ) {
            for (
              f = p.event.special[h] || {}, d =
                c[(h = (r ? f.delegateType : f.bindType) || h)] || [], s =
                s[2] &&
                new RegExp(
                  "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                ), l = o = d.length;
              o--;

            )
              (a = d[o]), (!i && m !== a.origType) ||
                (n && n.guid !== a.guid) ||
                (s && !s.test(a.namespace)) ||
                (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                (
                  d.splice(o, 1),
                  a.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, a)
                );
            l &&
              !d.length &&
              (
                (f.teardown && !1 !== f.teardown.call(e, g, v.handle)) ||
                  p.removeEvent(e, h, v.handle),
                delete c[h]
              );
          } else for (h in c) p.event.remove(e, h + t[u], n, r, !0);
        p.isEmptyObject(c) && (delete v.handle, p._removeData(e, "events"));
      }
    },
    trigger: function(t, n, i, o) {
      var a,
        s,
        l,
        u,
        f,
        d,
        h,
        g = [i || r],
        m = c.call(t, "type") ? t.type : t,
        v = c.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        (
          (l = d = i = i || r),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !ge.test(m + p.event.triggered) &&
            (
              m.indexOf(".") > -1 &&
                ((m = (v = m.split(".")).shift()), v.sort()),
              (s = m.indexOf(":") < 0 && "on" + m),
              ((t = t[p.expando]
                ? t
                : new p.Event(m, "object" == typeof t && t)).isTrigger = o
                ? 2
                : 3),
              (t.namespace = v.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = i),
              (n = null == n ? [t] : p.makeArray(n, [t])),
              (f = p.event.special[m] || {}),
              o || !f.trigger || !1 !== f.trigger.apply(i, n)
            )
        )
      ) {
        if (!o && !f.noBubble && !p.isWindow(i)) {
          for (
            u = f.delegateType || m, ge.test(u + m) || (l = l.parentNode);
            l;
            l = l.parentNode
          )
            g.push(l), (d = l);
          d === (i.ownerDocument || r) &&
            g.push(d.defaultView || d.parentWindow || e);
        }
        for (h = 0; (l = g[h++]) && !t.isPropagationStopped(); )
          (t.type = h > 1 ? u : f.bindType || m), (a =
            (p._data(l, "events") || {})[t.type] && p._data(l, "handle")) &&
            a.apply(l, n), (a = s && l[s]) &&
            a.apply &&
            O(l) &&
            ((t.result = a.apply(l, n)), !1 === t.result && t.preventDefault());
        if (
          (
            (t.type = m),
            !o &&
              !t.isDefaultPrevented() &&
              (!f._default || !1 === f._default.apply(g.pop(), n)) &&
              O(i) &&
              s &&
              i[m] &&
              !p.isWindow(i)
          )
        ) {
          (d = i[s]) && (i[s] = null), (p.event.triggered = m);
          try {
            i[m]();
          } catch (e) {}
          (p.event.triggered = void 0), d && (i[s] = d);
        }
        return t.result;
      }
    },
    dispatch: function(e) {
      e = p.event.fix(e);
      var t,
        n,
        r,
        o,
        a,
        s,
        l = i.call(arguments),
        u = (p._data(this, "events") || {})[e.type] || [],
        c = p.event.special[e.type] || {};
      if (
        (
          (l[0] = e),
          (e.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, e)
        )
      ) {
        for (
          s = p.event.handlers.call(this, e, u), t = 0;
          (o = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, n = 0;
            (a = o.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(a.namespace)) ||
              (
                (e.handleObj = a),
                (e.data = a.data),
                void 0 !==
                  (r = ((p.event.special[a.origType] || {}).handle || a.handler)
                    .apply(o.elem, l)) &&
                  !1 === (e.result = r) &&
                  (e.preventDefault(), e.stopPropagation())
              );
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function(e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        l = e.target;
      if (
        s &&
        l.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (r = [], n = 0; n < s; n++)
              void 0 === r[(i = (o = t[n]).selector + " ")] &&
                (r[i] = o.needsContext
                  ? p(i, this).index(l) > -1
                  : p.find(i, this, null, [l]).length), r[i] && r.push(o);
            r.length && a.push({ elem: l, handlers: r });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    fix: function(e) {
      if (e[p.expando]) return e;
      var t,
        n,
        i,
        o = e.type,
        a = e,
        s = this.fixHooks[o];
      for (
        s ||
          (this.fixHooks[o] = s = he.test(o)
            ? this.mouseHooks
            : pe.test(o) ? this.keyHooks : {}), i = s.props
          ? this.props.concat(s.props)
          : this.props, e = new p.Event(a), t = i.length;
        t--;

      )
        e[(n = i[t])] = a[n];
      return e.target || (e.target = a.srcElement || r), 3 ===
        e.target.nodeType &&
        (e.target = e.target.parentNode), (e.metaKey = !!e.metaKey), s.filter
        ? s.filter(e, a)
        : e;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which &&
          (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function(e, t) {
        var n,
          i,
          o,
          a = t.button,
          s = t.fromElement;
        return null == e.pageX &&
          null != t.clientX &&
          (
            (o = (i = e.target.ownerDocument || r).documentElement),
            (n = i.body),
            (e.pageX =
              t.clientX +
              ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
              ((o && o.clientTop) || (n && n.clientTop) || 0))
          ), !e.relatedTarget &&
          s &&
          (e.relatedTarget = s === e.target ? t.toElement : s), e.which ||
          void 0 === a ||
          (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== xe() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === xe() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (
            p.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
          )
            return this.click(), !1;
        },
        _default: function(e) {
          return p.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function(e, t, n) {
      var r = p.extend(new p.Event(), n, { type: e, isSimulated: !0 });
      p.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault();
    }
  }), (p.removeEvent = r.removeEventListener
    ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent &&
          (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n));
      }), (p.Event = function(e, t) {
    if (!(this instanceof p.Event)) return new p.Event(e, t);
    e && e.type
      ? (
          (this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ve
              : ye)
        )
      : (this.type = e), t && p.extend(this, t), (this.timeStamp =
      (e && e.timeStamp) || p.now()), (this[p.expando] = !0);
  }), (p.Event.prototype = {
    constructor: p.Event,
    isDefaultPrevented: ye,
    isPropagationStopped: ye,
    isImmediatePropagationStopped: ye,
    preventDefault: function() {
      var e = this.originalEvent;
      (this.isDefaultPrevented = ve), e &&
        (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      (this.isPropagationStopped = ve), e &&
        !this.isSimulated &&
        (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      (this.isImmediatePropagationStopped = ve), e &&
        e.stopImmediatePropagation &&
        e.stopImmediatePropagation(), this.stopPropagation();
    }
  }), p.each(
    {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    },
    function(e, t) {
      p.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n,
            r = e.relatedTarget,
            i = e.handleObj;
          return (r && (r === this || p.contains(this, r))) ||
            (
              (e.type = i.origType),
              (n = i.handler.apply(this, arguments)),
              (e.type = t)
            ), n;
        }
      };
    }
  ), f.submit ||
    (p.event.special.submit = {
      setup: function() {
        if (p.nodeName(this, "form")) return !1;
        p.event.add(this, "click._submit keypress._submit", function(e) {
          var t = e.target,
            n =
              p.nodeName(t, "input") || p.nodeName(t, "button")
                ? p.prop(t, "form")
                : void 0;
          n &&
            !p._data(n, "submit") &&
            (
              p.event.add(n, "submit._submit", function(e) {
                e._submitBubble = !0;
              }),
              p._data(n, "submit", !0)
            );
        });
      },
      postDispatch: function(e) {
        e._submitBubble &&
          (
            delete e._submitBubble,
            this.parentNode &&
              !e.isTrigger &&
              p.event.simulate("submit", this.parentNode, e)
          );
      },
      teardown: function() {
        if (p.nodeName(this, "form")) return !1;
        p.event.remove(this, "._submit");
      }
    }), f.change ||
    (p.event.special.change = {
      setup: function() {
        if (de.test(this.nodeName))
          return ("checkbox" !== this.type && "radio" !== this.type) ||
            (
              p.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName &&
                  (this._justChanged = !0);
              }),
              p.event.add(this, "click._change", function(e) {
                this._justChanged &&
                  !e.isTrigger &&
                  (this._justChanged = !1), p.event.simulate("change", this, e);
              })
            ), !1;
        p.event.add(this, "beforeactivate._change", function(e) {
          var t = e.target;
          de.test(t.nodeName) &&
            !p._data(t, "change") &&
            (
              p.event.add(t, "change._change", function(e) {
                !this.parentNode ||
                  e.isSimulated ||
                  e.isTrigger ||
                  p.event.simulate("change", this.parentNode, e);
              }),
              p._data(t, "change", !0)
            );
        });
      },
      handle: function(e) {
        var t = e.target;
        if (
          this !== t ||
          e.isSimulated ||
          e.isTrigger ||
          ("radio" !== t.type && "checkbox" !== t.type)
        )
          return e.handleObj.handler.apply(this, arguments);
      },
      teardown: function() {
        return p.event.remove(this, "._change"), !de.test(this.nodeName);
      }
    }), f.focusin ||
    p.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
      var n = function(e) {
        p.event.simulate(t, e.target, p.event.fix(e));
      };
      p.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this,
            i = p._data(r, t);
          i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1);
        },
        teardown: function() {
          var r = this.ownerDocument || this,
            i = p._data(r, t) - 1;
          i
            ? p._data(r, t, i)
            : (r.removeEventListener(e, n, !0), p._removeData(r, t));
        }
      };
    }), p.fn.extend({
    on: function(e, t, n, r) {
      return be(this, e, t, n, r);
    },
    one: function(e, t, n, r) {
      return be(this, e, t, n, r, 1);
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj)
        return (r = e.handleObj), p(e.delegateTarget).off(
          r.namespace ? r.origType + "." + r.namespace : r.origType,
          r.selector,
          r.handler
        ), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return (!1 !== t && "function" != typeof t) ||
        ((n = t), (t = void 0)), !1 === n && (n = ye), this.each(function() {
        p.event.remove(this, e, n, t);
      });
    },
    trigger: function(e, t) {
      return this.each(function() {
        p.event.trigger(e, t, this);
      });
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return p.event.trigger(e, t, n, !0);
    }
  });
  var we = / jQuery\d+="(?:null|\d+)"/g,
    Te = new RegExp("<(?:" + re + ")[\\s/>]", "i"),
    Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Ee = /<script|<style|<link/i,
    Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ke = /^true\/(.*)/,
    Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ae = ie(r).appendChild(r.createElement("div"));
  function De(e, t) {
    return p.nodeName(e, "table") &&
    p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
        e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function je(e) {
    return (e.type = (null !== p.find.attr(e, "type")) + "/" + e.type), e;
  }
  function Le(e) {
    var t = ke.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function He(e, t) {
    if (1 === t.nodeType && p.hasData(e)) {
      var n,
        r,
        i,
        o = p._data(e),
        a = p._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, (a.events = {});
        for (n in s)
          for (r = 0, i = s[n].length; r < i; r++) p.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = p.extend({}, a.data));
    }
  }
  function qe(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !f.noCloneEvent && t[p.expando])) {
        i = p._data(t);
        for (r in i.events) p.removeEvent(t, r, i.handle);
        t.removeAttribute(p.expando);
      }
      "script" === n && t.text !== e.text
        ? ((je(t).text = e.text), Le(t))
        : "object" === n
          ? (
              t.parentNode && (t.outerHTML = e.outerHTML),
              f.html5Clone &&
                e.innerHTML &&
                !p.trim(t.innerHTML) &&
                (t.innerHTML = e.innerHTML)
            )
          : "input" === n && Z.test(e.type)
            ? (
                (t.defaultChecked = t.checked = e.checked),
                t.value !== e.value && (t.value = e.value)
              )
            : "option" === n
              ? (t.defaultSelected = t.selected = e.defaultSelected)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
    }
  }
  function _e(e, t, n, r) {
    t = o.apply([], t);
    var i,
      a,
      s,
      l,
      u,
      c,
      d = 0,
      h = e.length,
      g = h - 1,
      m = t[0],
      v = p.isFunction(m);
    if (v || (h > 1 && "string" == typeof m && !f.checkClone && Ne.test(m)))
      return e.each(function(i) {
        var o = e.eq(i);
        v && (t[0] = m.call(this, i, o.html())), _e(o, t, n, r);
      });
    if (
      h &&
      (
        (i = (c = fe(t, e[0].ownerDocument, !1, e, r)).firstChild),
        1 === c.childNodes.length && (c = i),
        i || r
      )
    ) {
      for (s = (l = p.map(ae(c, "script"), je)).length; d < h; d++)
        (a = c), d !== g &&
          ((a = p.clone(a, !0, !0)), s && p.merge(l, ae(a, "script"))), n.call(
          e[d],
          a,
          d
        );
      if (s)
        for (u = l[l.length - 1].ownerDocument, p.map(l, Le), d = 0; d < s; d++)
          (a = l[d]), te.test(a.type || "") &&
            !p._data(a, "globalEval") &&
            p.contains(u, a) &&
            (a.src
              ? p._evalUrl && p._evalUrl(a.src)
              : p.globalEval(
                  (a.text || a.textContent || a.innerHTML || "").replace(Se, "")
                ));
      c = i = null;
    }
    return e;
  }
  function Fe(e, t, n) {
    for (var r, i = t ? p.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || p.cleanData(ae(r)), r.parentNode &&
        (
          n && p.contains(r.ownerDocument, r) && se(ae(r, "script")),
          r.parentNode.removeChild(r)
        );
    return e;
  }
  p.extend({
    htmlPrefilter: function(e) {
      return e.replace(Ce, "<$1></$2>");
    },
    clone: function(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        l = p.contains(e.ownerDocument, e);
      if (
        (
          f.html5Clone || p.isXMLDoc(e) || !Te.test("<" + e.nodeName + ">")
            ? (o = e.cloneNode(!0))
            : (
                (Ae.innerHTML = e.outerHTML),
                Ae.removeChild((o = Ae.firstChild))
              ),
          !(
            (f.noCloneEvent && f.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            p.isXMLDoc(e)
          )
        )
      )
        for (r = ae(o), s = ae(e), a = 0; null != (i = s[a]); ++a)
          r[a] && qe(i, r[a]);
      if (t)
        if (n)
          for (s = s || ae(e), r = r || ae(o), a = 0; null != (i = s[a]); a++)
            He(i, r[a]);
        else He(e, o);
      return (r = ae(o, "script")).length > 0 &&
        se(r, !l && ae(e, "script")), (r = s = i = null), o;
    },
    cleanData: function(e, t) {
      for (
        var r,
          i,
          o,
          a,
          s = 0,
          l = p.expando,
          u = p.cache,
          c = f.attributes,
          d = p.event.special;
        null != (r = e[s]);
        s++
      )
        if ((t || O(r)) && (a = (o = r[l]) && u[o])) {
          if (a.events)
            for (i in a.events)
              d[i] ? p.event.remove(r, i) : p.removeEvent(r, i, a.handle);
          u[o] &&
            (
              delete u[o],
              c || void 0 === r.removeAttribute
                ? (r[l] = void 0)
                : r.removeAttribute(l),
              n.push(o)
            );
        }
    }
  }), p.fn.extend({
    domManip: _e,
    detach: function(e) {
      return Fe(this, e, !0);
    },
    remove: function(e) {
      return Fe(this, e);
    },
    text: function(e) {
      return K(
        this,
        function(e) {
          return void 0 === e
            ? p.text(this)
            : this.empty().append(
                ((this[0] && this[0].ownerDocument) || r).createTextNode(e)
              );
        },
        null,
        e,
        arguments.length
      );
    },
    append: function() {
      return _e(this, arguments, function(e) {
        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
          De(this, e).appendChild(e);
      });
    },
    prepend: function() {
      return _e(this, arguments, function(e) {
        if (
          1 === this.nodeType ||
          11 === this.nodeType ||
          9 === this.nodeType
        ) {
          var t = De(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function() {
      return _e(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function() {
      return _e(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && p.cleanData(ae(e, !1)); e.firstChild; )
          e.removeChild(e.firstChild);
        e.options && p.nodeName(e, "select") && (e.options.length = 0);
      }
      return this;
    },
    clone: function(e, t) {
      return (e = null != e && e), (t =
        null == t ? e : t), this.map(function() {
        return p.clone(this, e, t);
      });
    },
    html: function(e) {
      return K(
        this,
        function(e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === e)
            return 1 === t.nodeType ? t.innerHTML.replace(we, "") : void 0;
          if (
            "string" == typeof e &&
            !Ee.test(e) &&
            (f.htmlSerialize || !Te.test(e)) &&
            (f.leadingWhitespace || !ne.test(e)) &&
            !oe[(ee.exec(e) || ["", ""])[1].toLowerCase()]
          ) {
            e = p.htmlPrefilter(e);
            try {
              for (; n < r; n++)
                1 === (t = this[n] || {}).nodeType &&
                  (p.cleanData(ae(t, !1)), (t.innerHTML = e));
              t = 0;
            } catch (e) {}
          }
          t && this.empty().append(e);
        },
        null,
        e,
        arguments.length
      );
    },
    replaceWith: function() {
      var e = [];
      return _e(
        this,
        arguments,
        function(t) {
          var n = this.parentNode;
          p.inArray(this, e) < 0 &&
            (p.cleanData(ae(this)), n && n.replaceChild(t, this));
        },
        e
      );
    }
  }), p.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    },
    function(e, t) {
      p.fn[e] = function(e) {
        for (var n, r = 0, i = [], o = p(e), s = o.length - 1; r <= s; r++)
          (n = r === s ? this : this.clone(!0)), p(o[r])[t](n), a.apply(
            i,
            n.get()
          );
        return this.pushStack(i);
      };
    }
  );
  var Me,
    Oe = { HTML: "block", BODY: "block" };
  function Re(e, t) {
    var n = p(t.createElement(e)).appendTo(t.body),
      r = p.css(n[0], "display");
    return n.detach(), r;
  }
  function Pe(e) {
    var t = r,
      n = Oe[e];
    return n ||
      (
        ("none" !== (n = Re(e, t)) && n) ||
          (
            (t = ((Me = (Me ||
              p("<iframe frameborder='0' width='0' height='0'/>"))
              .appendTo(t.documentElement))[0].contentWindow ||
              Me[0].contentDocument).document).write(),
            t.close(),
            (n = Re(e, t)),
            Me.detach()
          ),
        (Oe[e] = n)
      ), n;
  }
  var Be = /^margin/,
    We = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
    Ie = function(e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    },
    $e = r.documentElement;
  !(function() {
    var t,
      n,
      i,
      o,
      a,
      s,
      l = r.createElement("div"),
      u = r.createElement("div");
    function c() {
      var c,
        f,
        d = r.documentElement;
      d.appendChild(
        l
      ), (u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (t = i = s = !1), (n = a = !0), e.getComputedStyle && ((f = e.getComputedStyle(u)), (t = "1%" !== (f || {}).top), (s = "2px" === (f || {}).marginLeft), (i = "4px" === (f || { width: "4px" }).width), (u.style.marginRight = "50%"), (n = "4px" === (f || { marginRight: "4px" }).marginRight), ((c = u.appendChild(r.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"), (c.style.marginRight = c.style.width = "0"), (u.style.width = "1px"), (a = !parseFloat((e.getComputedStyle(c) || {}).marginRight)), u.removeChild(c)), (u.style.display = "none"), (o = 0 === u.getClientRects().length) && ((u.style.display = ""), (u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"), (u.childNodes[0].style.borderCollapse = "separate"), ((c = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none"), (o = 0 === c[0].offsetHeight) && ((c[0].style.display = ""), (c[1].style.display = "none"), (o = 0 === c[0].offsetHeight))), d.removeChild(l);
    }
    u.style &&
      (
        (u.style.cssText = "float:left;opacity:.5"),
        (f.opacity = "0.5" === u.style.opacity),
        (f.cssFloat = !!u.style.cssFloat),
        (u.style.backgroundClip = "content-box"),
        (u.cloneNode(!0).style.backgroundClip = ""),
        (f.clearCloneStyle = "content-box" === u.style.backgroundClip),
        ((l = r.createElement("div")).style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (u.innerHTML = ""),
        l.appendChild(u),
        (f.boxSizing =
          "" === u.style.boxSizing ||
          "" === u.style.MozBoxSizing ||
          "" === u.style.WebkitBoxSizing),
        p.extend(f, {
          reliableHiddenOffsets: function() {
            return null == t && c(), o;
          },
          boxSizingReliable: function() {
            return null == t && c(), i;
          },
          pixelMarginRight: function() {
            return null == t && c(), n;
          },
          pixelPosition: function() {
            return null == t && c(), t;
          },
          reliableMarginRight: function() {
            return null == t && c(), a;
          },
          reliableMarginLeft: function() {
            return null == t && c(), s;
          }
        })
      );
  })();
  var ze,
    Xe,
    Ue = /^(top|right|bottom|left)$/;
  function Ve(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  e.getComputedStyle
    ? (
        (ze = function(t) {
          var n = t.ownerDocument.defaultView;
          return (n && n.opener) || (n = e), n.getComputedStyle(t);
        }),
        (Xe = function(e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.style;
          return ("" !==
            (a = (n = n || ze(e)) ? n.getPropertyValue(t) || n[t] : void 0) &&
            void 0 !== a) ||
            p.contains(e.ownerDocument, e) ||
            (a = p.style(e, t)), n &&
            !f.pixelMarginRight() &&
            We.test(a) &&
            Be.test(t) &&
            (
              (r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o)
            ), void 0 === a ? a : a + "";
        })
      )
    : $e.currentStyle &&
      (
        (ze = function(e) {
          return e.currentStyle;
        }),
        (Xe = function(e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.style;
          return null == (a = (n = n || ze(e)) ? n[t] : void 0) &&
            s &&
            s[t] &&
            (a = s[t]), We.test(a) &&
            !Ue.test(t) &&
            (
              (r = s.left),
              (o = (i = e.runtimeStyle) && i.left) &&
                (i.left = e.currentStyle.left),
              (s.left = "fontSize" === t ? "1em" : a),
              (a = s.pixelLeft + "px"),
              (s.left = r),
              o && (i.left = o)
            ), void 0 === a ? a : a + "" || "auto";
        })
      );
  var Ye = /alpha\([^)]*\)/i,
    Je = /opacity\s*=\s*([^)]*)/i,
    Ge = /^(none|table(?!-c[ea]).+)/,
    Qe = new RegExp("^(" + z + ")(.*)$", "i"),
    Ke = { position: "absolute", visibility: "hidden", display: "block" },
    Ze = { letterSpacing: "0", fontWeight: "400" },
    et = ["Webkit", "O", "Moz", "ms"],
    tt = r.createElement("div").style;
  function nt(e) {
    if (e in tt) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = et.length; n--; )
      if ((e = et[n] + t) in tt) return e;
  }
  function rt(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
      (r = e[a]).style &&
        (
          (o[a] = p._data(r, "olddisplay")),
          (n = r.style.display),
          t
            ? (
                o[a] || "none" !== n || (r.style.display = ""),
                "" === r.style.display &&
                  V(r) &&
                  (o[a] = p._data(r, "olddisplay", Pe(r.nodeName)))
              )
            : (
                (i = V(r)),
                ((n && "none" !== n) || !i) &&
                  p._data(r, "olddisplay", i ? n : p.css(r, "display"))
              )
        );
    for (a = 0; a < s; a++)
      (r = e[a]).style &&
        ((t && "none" !== r.style.display && "" !== r.style.display) ||
          (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function it(e, t, n) {
    var r = Qe.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function ot(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += p.css(e, n + U[o], !0, i)), r
        ? (
            "content" === n && (a -= p.css(e, "padding" + U[o], !0, i)),
            "margin" !== n && (a -= p.css(e, "border" + U[o] + "Width", !0, i))
          )
        : (
            (a += p.css(e, "padding" + U[o], !0, i)),
            "padding" !== n && (a += p.css(e, "border" + U[o] + "Width", !0, i))
          );
    return a;
  }
  function at(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = ze(e),
      a = f.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (
        (((i = Xe(e, t, o)) < 0 || null == i) && (i = e.style[t]), We.test(i))
      )
        return i;
      (r = a && (f.boxSizingReliable() || i === e.style[t])), (i =
        parseFloat(i) || 0);
    }
    return i + ot(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function st(e, t, n, r, i) {
    return new st.prototype.init(e, t, n, r, i);
  }
  p.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Xe(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: f.cssFloat ? "cssFloat" : "styleFloat" },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = p.camelCase(t),
          l = e.style;
        if (
          (
            (t = p.cssProps[s] || (p.cssProps[s] = nt(s) || s)),
            (a = p.cssHooks[t] || p.cssHooks[s]),
            void 0 === n
          )
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        if (
          (
            "string" === (o = typeof n) &&
              (i = X.exec(n)) &&
              i[1] &&
              ((n = Y(e, t, i)), (o = "number")),
            null != n &&
              n == n &&
              (
                "number" === o &&
                  (n += (i && i[3]) || (p.cssNumber[s] ? "" : "px")),
                f.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                !(a && "set" in a && void 0 === (n = a.set(e, n, r)))
              )
          )
        )
          try {
            l[t] = n;
          } catch (e) {}
      }
    },
    css: function(e, t, n, r) {
      var i,
        o,
        a,
        s = p.camelCase(t);
      return (t = p.cssProps[s] || (p.cssProps[s] = nt(s) || s)), (a =
        p.cssHooks[t] || p.cssHooks[s]) &&
        "get" in a &&
        (o = a.get(e, !0, n)), void 0 === o && (o = Xe(e, t, r)), "normal" ===
        o &&
        t in Ze &&
        (o = Ze[t]), "" === n || n
        ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
        : o;
    }
  }), p.each(["height", "width"], function(e, t) {
    p.cssHooks[t] = {
      get: function(e, n, r) {
        if (n)
          return Ge.test(p.css(e, "display")) && 0 === e.offsetWidth
            ? Ie(e, Ke, function() {
                return at(e, t, r);
              })
            : at(e, t, r);
      },
      set: function(e, n, r) {
        var i = r && ze(e);
        return it(
          0,
          n,
          r
            ? ot(
                e,
                t,
                r,
                f.boxSizing && "border-box" === p.css(e, "boxSizing", !1, i),
                i
              )
            : 0
        );
      }
    };
  }), f.opacity ||
    (p.cssHooks.opacity = {
      get: function(e, t) {
        return Je.test(
          (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
        )
          ? 0.01 * parseFloat(RegExp.$1) + ""
          : t ? "1" : "";
      },
      set: function(e, t) {
        var n = e.style,
          r = e.currentStyle,
          i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = (r && r.filter) || n.filter || "";
        (n.zoom = 1), ((t >= 1 || "" === t) &&
          "" === p.trim(o.replace(Ye, "")) &&
          n.removeAttribute &&
          (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
          (n.filter = Ye.test(o) ? o.replace(Ye, i) : o + " " + i);
      }
    }), (p.cssHooks.marginRight = Ve(f.reliableMarginRight, function(e, t) {
    if (t) return Ie(e, { display: "inline-block" }, Xe, [e, "marginRight"]);
  })), (p.cssHooks.marginLeft = Ve(f.reliableMarginLeft, function(e, t) {
    if (t)
      return (
        (parseFloat(Xe(e, "marginLeft")) ||
          (p.contains(e.ownerDocument, e)
            ? e.getBoundingClientRect().left -
              Ie(e, { marginLeft: 0 }, function() {
                return e.getBoundingClientRect().left;
              })
            : 0)) + "px"
      );
  })), p.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
    (p.cssHooks[e + t] = {
      expand: function(n) {
        for (
          var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
          r < 4;
          r++
        )
          i[e + U[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }), Be.test(e) || (p.cssHooks[e + t].set = it);
  }), p.fn.extend({
    css: function(e, t) {
      return K(
        this,
        function(e, t, n) {
          var r,
            i,
            o = {},
            a = 0;
          if (p.isArray(t)) {
            for (r = ze(e), i = t.length; a < i; a++)
              o[t[a]] = p.css(e, t[a], !1, r);
            return o;
          }
          return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
        },
        e,
        t,
        arguments.length > 1
      );
    },
    show: function() {
      return rt(this, !0);
    },
    hide: function() {
      return rt(this);
    },
    toggle: function(e) {
      return "boolean" == typeof e
        ? e ? this.show() : this.hide()
        : this.each(function() {
            V(this) ? p(this).show() : p(this).hide();
          });
    }
  }), (p.Tween = st), (st.prototype = {
    constructor: st,
    init: function(e, t, n, r, i, o) {
      (this.elem = e), (this.prop = n), (this.easing =
        i ||
        p.easing
          ._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit =
        o || (p.cssNumber[n] ? "" : "px"));
    },
    cur: function() {
      var e = st.propHooks[this.prop];
      return e && e.get ? e.get(this) : st.propHooks._default.get(this);
    },
    run: function(e) {
      var t,
        n = st.propHooks[this.prop];
      return this.options.duration
        ? (this.pos = t = p.easing[this.easing](
            e,
            this.options.duration * e,
            0,
            1,
            this.options.duration
          ))
        : (this.pos = t = e), (this.now =
        (this.end - this.start) * t + this.start), this.options.step &&
        this.options.step.call(this.elem, this.now, this), n && n.set
        ? n.set(this)
        : st.propHooks._default.set(this), this;
    }
  }), (st.prototype.init.prototype = st.prototype), (st.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType ||
        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
          ? e.elem[e.prop]
          : (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function(e) {
        p.fx.step[e.prop]
          ? p.fx.step[e.prop](e)
          : 1 !== e.elem.nodeType ||
            (null == e.elem.style[p.cssProps[e.prop]] && !p.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : p.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }), (st.propHooks.scrollTop = st.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }), (p.easing = {
    linear: function(e) {
      return e;
    },
    swing: function(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }), (p.fx = st.prototype.init), (p.fx.step = {});
  var lt,
    ut,
    ct,
    ft,
    dt,
    pt,
    ht,
    gt = /^(?:toggle|show|hide)$/,
    mt = /queueHooks$/;
  function vt() {
    return e.setTimeout(function() {
      lt = void 0;
    }), (lt = p.now());
  }
  function yt(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = U[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function xt(e, t, n) {
    for (
      var r,
        i = (bt.tweeners[t] || []).concat(bt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function bt(e, t, n) {
    var r,
      i,
      o = 0,
      a = bt.prefilters.length,
      s = p.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (i) return !1;
        for (
          var t = lt || vt(),
            n = Math.max(0, u.startTime + u.duration - t),
            r = 1 - (n / u.duration || 0),
            o = 0,
            a = u.tweens.length;
          o < a;
          o++
        )
          u.tweens[o].run(r);
        return s.notifyWith(e, [u, r, n]), r < 1 && a
          ? n
          : (s.resolveWith(e, [u]), !1);
      },
      u = s.promise({
        elem: e,
        props: p.extend({}, t),
        opts: p.extend(!0, { specialEasing: {}, easing: p.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: lt || vt(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = p.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(r), r;
        },
        stop: function(t) {
          var n = 0,
            r = t ? u.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) u.tweens[n].run(1);
          return t
            ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
            : s.rejectWith(e, [u, t]), this;
        }
      }),
      c = u.props;
    for (
      !(function(e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            (
              (i = t[(r = p.camelCase(n))]),
              (o = e[n]),
              p.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
              n !== r && ((e[r] = o), delete e[n]),
              (a = p.cssHooks[r]) && ("expand" in a)
            )
          ) {
            (o = a.expand(o)), delete e[r];
            for (n in o) (n in e) || ((e[n] = o[n]), (t[n] = i));
          } else t[r] = i;
      })(c, u.opts.specialEasing);
      o < a;
      o++
    )
      if ((r = bt.prefilters[o].call(u, e, c, u.opts)))
        return p.isFunction(r.stop) &&
          (p._queueHooks(u.elem, u.opts.queue).stop = p.proxy(r.stop, r)), r;
    return p.map(
      c,
      xt,
      u
    ), p.isFunction(u.opts.start) && u.opts.start.call(e, u), p.fx.timer(p.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }
  (p.Animation = p.extend(bt, {
    tweeners: {
      "*": [
        function(e, t) {
          var n = this.createTween(e, t);
          return Y(n.elem, e, X.exec(t), n), n;
        }
      ]
    },
    tweener: function(e, t) {
      p.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]), (bt.tweeners[n] = bt.tweeners[n] || []), bt.tweeners[
          n
        ].unshift(t);
    },
    prefilters: [
      function(e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c = this,
          d = {},
          h = e.style,
          g = e.nodeType && V(e),
          m = p._data(e, "fxshow");
        n.queue ||
          (
            null == (s = p._queueHooks(e, "fx")).unqueued &&
              (
                (s.unqueued = 0),
                (l = s.empty.fire),
                (s.empty.fire = function() {
                  s.unqueued || l();
                })
              ),
            s.unqueued++,
            c.always(function() {
              c.always(function() {
                s.unqueued--, p.queue(e, "fx").length || s.empty.fire();
              });
            })
          ), 1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          (
            (n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            "inline" ===
              ("none" === (u = p.css(e, "display"))
                ? p._data(e, "olddisplay") || Pe(e.nodeName)
                : u) &&
              "none" === p.css(e, "float") &&
              (f.inlineBlockNeedsLayout && "inline" !== Pe(e.nodeName)
                ? (h.zoom = 1)
                : (h.display = "inline-block"))
          ), n.overflow &&
          (
            (h.overflow = "hidden"),
            f.shrinkWrapBlocks() ||
              c.always(function() {
                (h.overflow =
                  n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
              })
          );
        for (r in t)
          if (((i = t[r]), gt.exec(i))) {
            if (
              (
                delete t[r],
                (o = o || "toggle" === i),
                i === (g ? "hide" : "show")
              )
            ) {
              if ("show" !== i || !m || void 0 === m[r]) continue;
              g = !0;
            }
            d[r] = (m && m[r]) || p.style(e, r);
          } else u = void 0;
        if (p.isEmptyObject(d))
          "inline" === ("none" === u ? Pe(e.nodeName) : u) && (h.display = u);
        else {
          m
            ? "hidden" in m && (g = m.hidden)
            : (m = p._data(e, "fxshow", {})), o && (m.hidden = !g), g
            ? p(e).show()
            : c.done(function() {
                p(e).hide();
              }), c.done(function() {
            var t;
            p._removeData(e, "fxshow");
            for (t in d) p.style(e, t, d[t]);
          });
          for (r in d)
            (a = xt(g ? m[r] : 0, r, c)), r in m ||
              (
                (m[r] = a.start),
                g &&
                  (
                    (a.end = a.start),
                    (a.start = "width" === r || "height" === r ? 1 : 0)
                  )
              );
        }
      }
    ],
    prefilter: function(e, t) {
      t ? bt.prefilters.unshift(e) : bt.prefilters.push(e);
    }
  })), (p.speed = function(e, t, n) {
    var r =
      e && "object" == typeof e
        ? p.extend({}, e)
        : {
            complete: n || (!n && t) || (p.isFunction(e) && e),
            duration: e,
            easing: (n && t) || (t && !p.isFunction(t) && t)
          };
    return (r.duration = p.fx.off
      ? 0
      : "number" == typeof r.duration
        ? r.duration
        : r.duration in p.fx.speeds
          ? p.fx.speeds[r.duration]
          : p.fx.speeds._default), (null != r.queue && !0 !== r.queue) ||
      (r.queue = "fx"), (r.old = r.complete), (r.complete = function() {
      p.isFunction(r.old) && r.old.call(this), r.queue &&
        p.dequeue(this, r.queue);
    }), r;
  }), p.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(V)
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: t }, e, n, r);
    },
    animate: function(e, t, n, r) {
      var i = p.isEmptyObject(e),
        o = p.speed(t, n, r),
        a = function() {
          var t = bt(this, p.extend({}, e), o);
          (i || p._data(this, "finish")) && t.stop(!0);
        };
      return (a.finish = a), i || !1 === o.queue
        ? this.each(a)
        : this.queue(o.queue, a);
    },
    stop: function(e, t, n) {
      var r = function(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };
      return "string" != typeof e && ((n = t), (t = e), (e = void 0)), t &&
        !1 !== e &&
        this.queue(e || "fx", []), this.each(function() {
        var t = !0,
          i = null != e && e + "queueHooks",
          o = p.timers,
          a = p._data(this);
        if (i) a[i] && a[i].stop && r(a[i]);
        else for (i in a) a[i] && a[i].stop && mt.test(i) && r(a[i]);
        for (i = o.length; i--; )
          o[i].elem !== this ||
            (null != e && o[i].queue !== e) ||
            (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
        (!t && n) || p.dequeue(this, e);
      });
    },
    finish: function(e) {
      return !1 !== e && (e = e || "fx"), this.each(function() {
        var t,
          n = p._data(this),
          r = n[e + "queue"],
          i = n[e + "queueHooks"],
          o = p.timers,
          a = r ? r.length : 0;
        for (
          n.finish = !0, p.queue(this, e, []), i &&
            i.stop &&
            i.stop.call(this, !0), t = o.length;
          t--;

        )
          o[t].elem === this &&
            o[t].queue === e &&
            (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  }), p.each(["toggle", "show", "hide"], function(e, t) {
    var n = p.fn[t];
    p.fn[t] = function(e, r, i) {
      return null == e || "boolean" == typeof e
        ? n.apply(this, arguments)
        : this.animate(yt(t, !0), e, r, i);
    };
  }), p.each(
    {
      slideDown: yt("show"),
      slideUp: yt("hide"),
      slideToggle: yt("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    },
    function(e, t) {
      p.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r);
      };
    }
  ), (p.timers = []), (p.fx.tick = function() {
    var e,
      t = p.timers,
      n = 0;
    for (lt = p.now(); n < t.length; n++)
      (e = t[n])() || t[n] !== e || t.splice(n--, 1);
    t.length || p.fx.stop(), (lt = void 0);
  }), (p.fx.timer = function(e) {
    p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
  }), (p.fx.interval = 13), (p.fx.start = function() {
    ut || (ut = e.setInterval(p.fx.tick, p.fx.interval));
  }), (p.fx.stop = function() {
    e.clearInterval(ut), (ut = null);
  }), (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }), (p.fn.delay = function(
    t,
    n
  ) {
    return (t = (p.fx && p.fx.speeds[t]) || t), (n =
      n || "fx"), this.queue(n, function(n, r) {
      var i = e.setTimeout(n, t);
      r.stop = function() {
        e.clearTimeout(i);
      };
    });
  }), (ft = r.createElement(
    "input"
  )), (dt = r.createElement("div")), (pt = r.createElement("select")), (ht = pt.appendChild(r.createElement("option"))), (dt = r.createElement("div")).setAttribute("className", "t"), (dt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"), (ct = dt.getElementsByTagName("a")[0]), ft.setAttribute("type", "checkbox"), dt.appendChild(ft), ((ct = dt.getElementsByTagName("a")[0]).style.cssText = "top:1px"), (f.getSetAttribute = "t" !== dt.className), (f.style = /top/.test(ct.getAttribute("style"))), (f.hrefNormalized = "/a" === ct.getAttribute("href")), (f.checkOn = !!ft.value), (f.optSelected = ht.selected), (f.enctype = !!r.createElement("form").enctype), (pt.disabled = !0), (f.optDisabled = !ht.disabled), (ft = r.createElement("input")).setAttribute("value", ""), (f.input = "" === ft.getAttribute("value")), (ft.value = "t"), ft.setAttribute("type", "radio"), (f.radioValue = "t" === ft.value);
  var wt = /\r/g,
    Tt = /[\x20\t\r\n\f]+/g;
  p.fn.extend({
    val: function(e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? (
            (r = p.isFunction(e)),
            this.each(function(n) {
              var i;
              1 === this.nodeType &&
                (
                  null == (i = r ? e.call(this, n, p(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                      ? (i += "")
                      : p.isArray(i) &&
                        (i = p.map(i, function(e) {
                          return null == e ? "" : e + "";
                        })),
                  ((t =
                    p.valHooks[this.type] ||
                    p.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i)
                );
            })
          )
        : i
          ? (t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
              ? n.replace(wt, "")
              : null == n ? "" : n
          : void 0;
    }
  }), p.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = p.find.attr(e, "value");
          return null != t ? t : p.trim(p.text(e)).replace(Tt, " ");
        }
      },
      select: {
        get: function(e) {
          for (
            var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type || i < 0,
              a = o ? null : [],
              s = o ? i + 1 : r.length,
              l = i < 0 ? s : o ? i : 0;
            l < s;
            l++
          )
            if (
              ((n = r[l]).selected || l === i) &&
              (f.optDisabled
                ? !n.disabled
                : null === n.getAttribute("disabled")) &&
              (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))
            ) {
              if (((t = p(n).val()), o)) return t;
              a.push(t);
            }
          return a;
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = p.makeArray(t), a = i.length; a--; )
            if (((r = i[a]), p.inArray(p.valHooks.option.get(r), o) > -1))
              try {
                r.selected = n = !0;
              } catch (e) {
                r.scrollHeight;
              }
            else r.selected = !1;
          return n || (e.selectedIndex = -1), i;
        }
      }
    }
  }), p.each(["radio", "checkbox"], function() {
    (p.valHooks[this] = {
      set: function(e, t) {
        if (p.isArray(t)) return (e.checked = p.inArray(p(e).val(), t) > -1);
      }
    }), f.checkOn ||
      (p.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
  });
  var Ct,
    Et,
    Nt = p.expr.attrHandle,
    kt = /^(?:checked|selected)$/i,
    St = f.getSetAttribute,
    At = f.input;
  p.fn.extend({
    attr: function(e, t) {
      return K(this, p.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        p.removeAttr(this, e);
      });
    }
  }), p.extend({
    attr: function(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return void 0 === e.getAttribute
          ? p.prop(e, t, n)
          : (
              (1 === o && p.isXMLDoc(e)) ||
                (
                  (t = t.toLowerCase()),
                  (i = p.attrHooks[t] || (p.expr.match.bool.test(t) ? Et : Ct))
                ),
              void 0 !== n
                ? null === n
                  ? void p.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = p.find.attr(e, t)) ? void 0 : r
            );
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!f.radioValue && "radio" === t && p.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n,
        r,
        i = 0,
        o = t && t.match(q);
      if (o && 1 === e.nodeType)
        for (; (n = o[i++]); )
          (r = p.propFix[n] || n), p.expr.match.bool.test(n)
            ? (At && St) || !kt.test(n)
              ? (e[r] = !1)
              : (e[p.camelCase("default-" + n)] = e[r] = !1)
            : p.attr(e, n, ""), e.removeAttribute(St ? n : r);
    }
  }), (Et = {
    set: function(e, t, n) {
      return !1 === t
        ? p.removeAttr(e, n)
        : (At && St) || !kt.test(n)
          ? e.setAttribute((!St && p.propFix[n]) || n, n)
          : (e[p.camelCase("default-" + n)] = e[n] = !0), n;
    }
  }), p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = Nt[t] || p.find.attr;
    (At && St) || !kt.test(t)
      ? (Nt[t] = function(e, t, r) {
          var i, o;
          return r ||
            (
              (o = Nt[t]),
              (Nt[t] = i),
              (i = null != n(e, t, r) ? t.toLowerCase() : null),
              (Nt[t] = o)
            ), i;
        })
      : (Nt[t] = function(e, t, n) {
          if (!n)
            return e[p.camelCase("default-" + t)] ? t.toLowerCase() : null;
        });
  }), (At && St) ||
    (p.attrHooks.value = {
      set: function(e, t, n) {
        if (!p.nodeName(e, "input")) return Ct && Ct.set(e, t, n);
        e.defaultValue = t;
      }
    }), St ||
    (
      (Ct = {
        set: function(e, t, n) {
          var r = e.getAttributeNode(n);
          if (
            (
              r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
              (r.value = t += ""),
              "value" === n || t === e.getAttribute(n)
            )
          )
            return t;
        }
      }),
      (Nt.id = Nt.name = Nt.coords = function(e, t, n) {
        var r;
        if (!n)
          return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null;
      }),
      (p.valHooks.button = {
        get: function(e, t) {
          var n = e.getAttributeNode(t);
          if (n && n.specified) return n.value;
        },
        set: Ct.set
      }),
      (p.attrHooks.contenteditable = {
        set: function(e, t, n) {
          Ct.set(e, "" !== t && t, n);
        }
      }),
      p.each(["width", "height"], function(e, t) {
        p.attrHooks[t] = {
          set: function(e, n) {
            if ("" === n) return e.setAttribute(t, "auto"), n;
          }
        };
      })
    ), f.style ||
    (p.attrHooks.style = {
      get: function(e) {
        return e.style.cssText || void 0;
      },
      set: function(e, t) {
        return (e.style.cssText = t + "");
      }
    });
  var Dt = /^(?:input|select|textarea|button|object)$/i,
    jt = /^(?:a|area)$/i;
  p.fn.extend({
    prop: function(e, t) {
      return K(this, p.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return (e = p.propFix[e] || e), this.each(function() {
        try {
          (this[e] = void 0), delete this[e];
        } catch (e) {}
      });
    }
  }), p.extend({
    prop: function(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return (1 === o && p.isXMLDoc(e)) ||
          ((t = p.propFix[t] || t), (i = p.propHooks[t])), void 0 !== n
          ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)
          : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = p.find.attr(e, "tabindex");
          return t
            ? parseInt(t, 10)
            : Dt.test(e.nodeName) || (jt.test(e.nodeName) && e.href) ? 0 : -1;
        }
      }
    },
    propFix: { for: "htmlFor", class: "className" }
  }), f.hrefNormalized ||
    p.each(["href", "src"], function(e, t) {
      p.propHooks[t] = {
        get: function(e) {
          return e.getAttribute(t, 4);
        }
      };
    }), f.optSelected ||
    (p.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t &&
          (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), p.each(
    [
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ],
    function() {
      p.propFix[this.toLowerCase()] = this;
    }
  ), f.enctype || (p.propFix.enctype = "encoding");
  var Lt = /[\t\r\n\f]/g;
  function Ht(e) {
    return p.attr(e, "class") || "";
  }
  p.fn.extend({
    addClass: function(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        l = 0;
      if (p.isFunction(e))
        return this.each(function(t) {
          p(this).addClass(e.call(this, t, Ht(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(q) || []; (n = this[l++]); )
          if (
            (
              (i = Ht(n)),
              (r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " "))
            )
          ) {
            for (a = 0; (o = t[a++]); )
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = p.trim(r)) && p.attr(n, "class", s);
          }
      return this;
    },
    removeClass: function(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        l = 0;
      if (p.isFunction(e))
        return this.each(function(t) {
          p(this).removeClass(e.call(this, t, Ht(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(q) || []; (n = this[l++]); )
          if (
            (
              (i = Ht(n)),
              (r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " "))
            )
          ) {
            for (a = 0; (o = t[a++]); )
              for (; r.indexOf(" " + o + " ") > -1; )
                r = r.replace(" " + o + " ", " ");
            i !== (s = p.trim(r)) && p.attr(n, "class", s);
          }
      return this;
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t ? this.addClass(e) : this.removeClass(e)
        : p.isFunction(e)
          ? this.each(function(n) {
              p(this).toggleClass(e.call(this, n, Ht(this), t), t);
            })
          : this.each(function() {
              var t, r, i, o;
              if ("string" === n)
                for (r = 0, i = p(this), o = e.match(q) || []; (t = o[r++]); )
                  i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  (
                    (t = Ht(this)) && p._data(this, "__className__", t),
                    p.attr(
                      this,
                      "class",
                      t || !1 === e ? "" : p._data(this, "__className__") || ""
                    )
                  );
            });
    },
    hasClass: function(e) {
      var t,
        n,
        r = 0;
      for (t = " " + e + " "; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          (" " + Ht(n) + " ").replace(Lt, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    }
  }), p.each(
    "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
      " "
    ),
    function(e, t) {
      p.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }
  ), p.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  });
  var qt = e.location,
    _t = p.now(),
    Ft = /\?/,
    Mt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (p.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n,
      r = null,
      i = p.trim(t + "");
    return i &&
    !p.trim(
      i.replace(Mt, function(e, t, i, o) {
        return n &&
          t &&
          (r = 0), 0 === r ? e : ((n = i || t), (r += !o - !i), "");
      })
    )
      ? Function("return " + i)()
      : p.error("Invalid JSON: " + t);
  }), (p.parseXML = function(t) {
    var n, r;
    if (!t || "string" != typeof t) return null;
    try {
      e.DOMParser
        ? ((r = new e.DOMParser()), (n = r.parseFromString(t, "text/xml")))
        : (
            ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            n.loadXML(t)
          );
    } catch (e) {
      n = void 0;
    }
    return (n &&
      n.documentElement &&
      !n.getElementsByTagName("parsererror").length) ||
      p.error("Invalid XML: " + t), n;
  });
  var Ot = /#.*$/,
    Rt = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Bt = /^(?:GET|HEAD)$/,
    Wt = /^\/\//,
    It = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    $t = {},
    zt = {},
    Xt = "*/".concat("*"),
    Ut = qt.href,
    Vt = It.exec(Ut.toLowerCase()) || [];
  function Yt(e) {
    return function(t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(q) || [];
      if (p.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r.charAt(0)
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function Jt(e, t, n, r) {
    var i = {},
      o = e === zt;
    function a(s) {
      var l;
      return (i[s] = !0), p.each(e[s] || [], function(e, s) {
        var u = s(t, n, r);
        return "string" != typeof u || o || i[u]
          ? o ? !(l = u) : void 0
          : (t.dataTypes.unshift(u), a(u), !1);
      }), l;
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = p.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && p.extend(!0, e, n), e;
  }
  p.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ut,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
        Vt[1]
      ),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Xt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": p.parseJSON,
        "text xml": p.parseXML
      },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function(e, t) {
      return t ? Gt(Gt(e, p.ajaxSettings), t) : Gt(p.ajaxSettings, e);
    },
    ajaxPrefilter: Yt($t),
    ajaxTransport: Yt(zt),
    ajax: function(t, n) {
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        f = p.ajaxSetup({}, n),
        d = f.context || f,
        h = f.context && (d.nodeType || d.jquery) ? p(d) : p.event,
        g = p.Deferred(),
        m = p.Callbacks("once memory"),
        v = f.statusCode || {},
        y = {},
        x = {},
        b = 0,
        w = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === b) {
              if (!c)
                for (c = {}; (t = Pt.exec(a)); ) c[t[1].toLowerCase()] = t[2];
              t = c[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function() {
            return 2 === b ? a : null;
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || ((e = x[n] = x[n] || e), (y[e] = t)), this;
          },
          overrideMimeType: function(e) {
            return b || (f.mimeType = e), this;
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (b < 2) for (t in e) v[t] = [v[t], e[t]];
              else T.always(e[T.status]);
            return this;
          },
          abort: function(e) {
            var t = e || w;
            return u && u.abort(t), C(0, t), this;
          }
        };
      if (
        (
          (g.promise(T).complete = m.add),
          (T.success = T.done),
          (T.error = T.fail),
          (f.url = ((t || f.url || Ut) + "")
            .replace(Ot, "")
            .replace(Wt, Vt[1] + "//")),
          (f.type = n.method || n.type || f.method || f.type),
          (f.dataTypes = p.trim(f.dataType || "*").toLowerCase().match(q) || [
            ""
          ]),
          null == f.crossDomain &&
            (
              (r = It.exec(f.url.toLowerCase())),
              (f.crossDomain = !(
                !r ||
                (r[1] === Vt[1] &&
                  r[2] === Vt[2] &&
                  (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                    (Vt[3] || ("http:" === Vt[1] ? "80" : "443")))
              ))
            ),
          f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = p.param(f.data, f.traditional)),
          Jt($t, f, n, T),
          2 === b
        )
      )
        return T;
      (l = p.event && f.global) &&
        0 == p.active++ &&
        p.event.trigger(
          "ajaxStart"
        ), (f.type = f.type.toUpperCase()), (f.hasContent = !Bt.test(
        f.type
      )), (o = f.url), f.hasContent ||
        (
          f.data &&
            ((o = f.url += (Ft.test(o) ? "&" : "?") + f.data), delete f.data),
          !1 === f.cache &&
            (f.url = Rt.test(o)
              ? o.replace(Rt, "$1_=" + _t++)
              : o + (Ft.test(o) ? "&" : "?") + "_=" + _t++)
        ), f.ifModified &&
        (
          p.lastModified[o] &&
            T.setRequestHeader("If-Modified-Since", p.lastModified[o]),
          p.etag[o] && T.setRequestHeader("If-None-Match", p.etag[o])
        ), ((f.data && f.hasContent && !1 !== f.contentType) ||
        n.contentType) &&
        T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader(
        "Accept",
        f.dataTypes[0] && f.accepts[f.dataTypes[0]]
          ? f.accepts[f.dataTypes[0]] +
            ("*" !== f.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
          : f.accepts["*"]
      );
      for (i in f.headers) T.setRequestHeader(i, f.headers[i]);
      if (f.beforeSend && (!1 === f.beforeSend.call(d, T, f) || 2 === b))
        return T.abort();
      w = "abort";
      for (i in { success: 1, error: 1, complete: 1 }) T[i](f[i]);
      if ((u = Jt(zt, f, n, T))) {
        if (((T.readyState = 1), l && h.trigger("ajaxSend", [T, f]), 2 === b))
          return T;
        f.async &&
          f.timeout > 0 &&
          (s = e.setTimeout(function() {
            T.abort("timeout");
          }, f.timeout));
        try {
          (b = 1), u.send(y, C);
        } catch (e) {
          if (!(b < 2)) throw e;
          C(-1, e);
        }
      } else C(-1, "No Transport");
      function C(t, n, r, i) {
        var c,
          y,
          x,
          w,
          C,
          E = n;
        2 !== b &&
          (
            (b = 2),
            s && e.clearTimeout(s),
            (u = void 0),
            (a = i || ""),
            (T.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && t < 300) || 304 === t),
            r &&
              (w = (function(e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(), void 0 === i &&
                    (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (a in s)
                    if (s[a] && s[a].test(i)) {
                      l.unshift(a);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                      o = a;
                      break;
                    }
                    r || (r = a);
                  }
                  o = o || r;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(f, T, r)),
            (w = (function(e, t, n, r) {
              var i,
                o,
                a,
                s,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (
                    e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !l &&
                      r &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (l = o),
                    (o = c.shift())
                  )
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(a = u[l + " " + o] || u["* " + o]))
                      for (i in u)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = u[l + " " + s[0]] || u["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = u[i])
                            : !0 !== u[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + l + " to " + o
                          };
                        }
                  }
              return { state: "success", data: t };
            })(f, w, T, c)),
            c
              ? (
                  f.ifModified &&
                    (
                      (C = T.getResponseHeader("Last-Modified")) &&
                        (p.lastModified[o] = C),
                      (C = T.getResponseHeader("etag")) && (p.etag[o] = C)
                    ),
                  204 === t || "HEAD" === f.type
                    ? (E = "nocontent")
                    : 304 === t
                      ? (E = "notmodified")
                      : ((E = w.state), (y = w.data), (c = !(x = w.error)))
                )
              : ((x = E), (!t && E) || ((E = "error"), t < 0 && (t = 0))),
            (T.status = t),
            (T.statusText = (n || E) + ""),
            c ? g.resolveWith(d, [y, E, T]) : g.rejectWith(d, [T, E, x]),
            T.statusCode(v),
            (v = void 0),
            l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? y : x]),
            m.fireWith(d, [T, E]),
            l &&
              (
                h.trigger("ajaxComplete", [T, f]),
                --p.active || p.event.trigger("ajaxStop")
              )
          );
      }
      return T;
    },
    getJSON: function(e, t, n) {
      return p.get(e, t, n, "json");
    },
    getScript: function(e, t) {
      return p.get(e, void 0, t, "script");
    }
  }), p.each(["get", "post"], function(e, t) {
    p[t] = function(e, n, r, i) {
      return p.isFunction(n) && ((i = i || r), (r = n), (n = void 0)), p.ajax(
        p.extend(
          { url: e, type: t, dataType: i, data: n, success: r },
          p.isPlainObject(e) && e
        )
      );
    };
  }), (p._evalUrl = function(e) {
    return p.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    });
  }), p.fn.extend({
    wrapAll: function(e) {
      if (p.isFunction(e))
        return this.each(function(t) {
          p(this).wrapAll(e.call(this, t));
        });
      if (this[0]) {
        var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t
          .map(function() {
            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
              e = e.firstChild;
            return e;
          })
          .append(this);
      }
      return this;
    },
    wrapInner: function(e) {
      return p.isFunction(e)
        ? this.each(function(t) {
            p(this).wrapInner(e.call(this, t));
          })
        : this.each(function() {
            var t = p(this),
              n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
    },
    wrap: function(e) {
      var t = p.isFunction(e);
      return this.each(function(n) {
        p(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function() {
      return this.parent()
        .each(function() {
          p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
        })
        .end();
    }
  }), (p.expr.filters.hidden = function(e) {
    return f.reliableHiddenOffsets()
      ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length
      : (function(e) {
          if (!p.contains(e.ownerDocument || r, e)) return !0;
          for (; e && 1 === e.nodeType; ) {
            if (
              "none" ===
                (((t = e).style && t.style.display) || p.css(t, "display")) ||
              "hidden" === e.type
            )
              return !0;
            e = e.parentNode;
          }
          var t;
          return !1;
        })(e);
  }), (p.expr.filters.visible = function(e) {
    return !p.expr.filters.hidden(e);
  });
  var Qt = /%20/g,
    Kt = /\[\]$/,
    Zt = /\r?\n/g,
    en = /^(?:submit|button|image|reset|file)$/i,
    tn = /^(?:input|select|textarea|keygen)/i;
  function nn(e, t, n, r) {
    var i;
    if (p.isArray(t))
      p.each(t, function(t, i) {
        n || Kt.test(e)
          ? r(e, i)
          : nn(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== p.type(t)) r(e, t);
    else for (i in t) nn(e + "[" + i + "]", t[i], n, r);
  }
  (p.param = function(e, t) {
    var n,
      r = [],
      i = function(e, t) {
        (t = p.isFunction(t) ? t() : null == t ? "" : t), (r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (
        void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional),
        p.isArray(e) || (e.jquery && !p.isPlainObject(e))
      )
    )
      p.each(e, function() {
        i(this.name, this.value);
      });
    else for (n in e) nn(n, e[n], t, i);
    return r.join("&").replace(Qt, "+");
  }), p.fn.extend({
    serialize: function() {
      return p.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var e = p.prop(this, "elements");
        return e ? p.makeArray(e) : this;
      })
        .filter(function() {
          var e = this.type;
          return (
            this.name &&
            !p(this).is(":disabled") &&
            tn.test(this.nodeName) &&
            !en.test(e) &&
            (this.checked || !Z.test(e))
          );
        })
        .map(function(e, t) {
          var n = p(this).val();
          return null == n
            ? null
            : p.isArray(n)
              ? p.map(n, function(e) {
                  return { name: t.name, value: e.replace(Zt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Zt, "\r\n") };
        })
        .get();
    }
  }), (p.ajaxSettings.xhr =
    void 0 !== e.ActiveXObject
      ? function() {
          return this.isLocal
            ? ln()
            : r.documentMode > 8
              ? sn()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  sn()) ||
                ln();
        }
      : sn);
  var rn = 0,
    on = {},
    an = p.ajaxSettings.xhr();
  function sn() {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }
  function ln() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  e.attachEvent &&
    e.attachEvent("onunload", function() {
      for (var e in on) on[e](void 0, !0);
    }), (f.cors = !!an && "withCredentials" in an), (an = f.ajax = !!an) &&
    p.ajaxTransport(function(t) {
      var n;
      if (!t.crossDomain || f.cors)
        return {
          send: function(r, i) {
            var o,
              a = t.xhr(),
              s = ++rn;
            if (
              (
                a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields
              )
            )
              for (o in t.xhrFields) a[o] = t.xhrFields[o];
            t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType), t.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest");
            for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
            a.send((t.hasContent && t.data) || null), (n = function(e, r) {
              var o, l, u;
              if (n && (r || 4 === a.readyState))
                if (
                  (
                    delete on[s],
                    (n = void 0),
                    (a.onreadystatechange = p.noop),
                    r
                  )
                )
                  4 !== a.readyState && a.abort();
                else {
                  (u = {}), (o = a.status), "string" == typeof a.responseText &&
                    (u.text = a.responseText);
                  try {
                    l = a.statusText;
                  } catch (e) {
                    l = "";
                  }
                  o || !t.isLocal || t.crossDomain
                    ? 1223 === o && (o = 204)
                    : (o = u.text ? 200 : 404);
                }
              u && i(o, l, u, a.getAllResponseHeaders());
            }), t.async
              ? 4 === a.readyState
                ? e.setTimeout(n)
                : (a.onreadystatechange = on[s] = n)
              : n();
          },
          abort: function() {
            n && n(void 0, !0);
          }
        };
    }), p.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      "text script": function(e) {
        return p.globalEval(e), e;
      }
    }
  }), p.ajaxPrefilter("script", function(e) {
    void 0 === e.cache &&
      (e.cache = !1), e.crossDomain && ((e.type = "GET"), (e.global = !1));
  }), p.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t,
        n = r.head || p("head")[0] || r.documentElement;
      return {
        send: function(i, o) {
          ((t = r.createElement("script")).async = !0), e.scriptCharset &&
            (t.charset = e.scriptCharset), (t.src =
            e.url), (t.onload = t.onreadystatechange = function(e, n) {
            (n || !t.readyState || /loaded|complete/.test(t.readyState)) &&
              (
                (t.onload = t.onreadystatechange = null),
                t.parentNode && t.parentNode.removeChild(t),
                (t = null),
                n || o(200, "success")
              );
          }), n.insertBefore(t, n.firstChild);
        },
        abort: function() {
          t && t.onload(void 0, !0);
        }
      };
    }
  });
  var un = [],
    cn = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = un.pop() || p.expando + "_" + _t++;
      return (this[e] = !0), e;
    }
  }), p.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i,
      o,
      a,
      s =
        !1 !== t.jsonp &&
        (cn.test(t.url)
          ? "url"
          : "string" == typeof t.data &&
            0 ===
              (t.contentType || "")
                .indexOf("application/x-www-form-urlencoded") &&
            cn.test(t.data) &&
            "data");
    if (s || "jsonp" === t.dataTypes[0])
      return (i = t.jsonpCallback = p.isFunction(t.jsonpCallback)
        ? t.jsonpCallback()
        : t.jsonpCallback), s
        ? (t[s] = t[s].replace(cn, "$1" + i))
        : !1 !== t.jsonp &&
          (t.url +=
            (Ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), (t.converters[
        "script json"
      ] = function() {
        return a || p.error(i + " was not called"), a[0];
      }), (t.dataTypes[0] = "json"), (o = e[i]), (e[i] = function() {
        a = arguments;
      }), r.always(function() {
        void 0 === o
          ? p(e).removeProp(i)
          : (e[
              i
            ] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), un.push(i)), a && p.isFunction(o) && o(a[0]), (a = o = void 0);
      }), "script";
  }), (p.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && ((n = t), (t = !1)), (t = t || r);
    var i = C.exec(e),
      o = !n && [];
    return i
      ? [t.createElement(i[1])]
      : (
          (i = fe([e], t, o)),
          o && o.length && p(o).remove(),
          p.merge([], i.childNodes)
        );
  });
  var fn = p.fn.load;
  function dn(e) {
    return p.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  (p.fn.load = function(e, t, n) {
    if ("string" != typeof e && fn) return fn.apply(this, arguments);
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return s > -1 &&
      ((r = p.trim(e.slice(s, e.length))), (e = e.slice(0, s))), p.isFunction(t)
      ? ((n = t), (t = void 0))
      : t && "object" == typeof t && (i = "POST"), a.length > 0 &&
      p
        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
        .done(function(e) {
          (o = arguments), a.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e);
        })
        .always(
          n &&
            function(e, t) {
              a.each(function() {
                n.apply(this, o || [e.responseText, t, e]);
              });
            }
        ), this;
  }), p.each(
    [
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ],
    function(e, t) {
      p.fn[t] = function(e) {
        return this.on(t, e);
      };
    }
  ), (p.expr.filters.animated = function(e) {
    return p.grep(p.timers, function(t) {
      return e === t.elem;
    }).length;
  }), (p.offset = {
    setOffset: function(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        l,
        u = p.css(e, "position"),
        c = p(e),
        f = {};
      "static" === u &&
        (e.style.position = "relative"), (s = c.offset()), (o = p.css(
        e,
        "top"
      )), (l = p.css(e, "left")), ("absolute" === u || "fixed" === u) &&
      p.inArray("auto", [o, l]) > -1
        ? ((a = (r = c.position()).top), (i = r.left))
        : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)), p.isFunction(
        t
      ) && (t = t.call(e, n, p.extend({}, s))), null != t.top &&
        (f.top = t.top - s.top + a), null != t.left &&
        (f.left = t.left - s.left + i), "using" in t
        ? t.using.call(e, f)
        : c.css(f);
    }
  }), p.fn.extend({
    offset: function(e) {
      if (arguments.length)
        return void 0 === e
          ? this
          : this.each(function(t) {
              p.offset.setOffset(this, e, t);
            });
      var t,
        n,
        r = { top: 0, left: 0 },
        i = this[0],
        o = i && i.ownerDocument;
      return o
        ? (
            (t = o.documentElement),
            p.contains(t, i)
              ? (
                  void 0 !== i.getBoundingClientRect &&
                    (r = i.getBoundingClientRect()),
                  (n = dn(o)),
                  {
                    top:
                      r.top +
                      (n.pageYOffset || t.scrollTop) -
                      (t.clientTop || 0),
                    left:
                      r.left +
                      (n.pageXOffset || t.scrollLeft) -
                      (t.clientLeft || 0)
                  }
                )
              : r
          )
        : void 0;
    },
    position: function() {
      if (this[0]) {
        var e,
          t,
          n = { top: 0, left: 0 },
          r = this[0];
        return "fixed" === p.css(r, "position")
          ? (t = r.getBoundingClientRect())
          : (
              (e = this.offsetParent()),
              (t = this.offset()),
              p.nodeName(e[0], "html") || (n = e.offset()),
              (n.top += p.css(e[0], "borderTopWidth", !0)),
              (n.left += p.css(e[0], "borderLeftWidth", !0))
            ), {
          top: t.top - n.top - p.css(r, "marginTop", !0),
          left: t.left - n.left - p.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (
          var e = this.offsetParent;
          e && !p.nodeName(e, "html") && "static" === p.css(e, "position");

        )
          e = e.offsetParent;
        return e || $e;
      });
    }
  }), p.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
    e,
    t
  ) {
    var n = /Y/.test(t);
    p.fn[e] = function(r) {
      return K(
        this,
        function(e, r, i) {
          var o = dn(e);
          if (void 0 === i)
            return o ? (t in o ? o[t] : o.document.documentElement[r]) : e[r];
          o
            ? o.scrollTo(n ? p(o).scrollLeft() : i, n ? i : p(o).scrollTop())
            : (e[r] = i);
        },
        e,
        r,
        arguments.length,
        null
      );
    };
  }), p.each(["top", "left"], function(e, t) {
    p.cssHooks[t] = Ve(f.pixelPosition, function(e, n) {
      if (n) return (n = Xe(e, t)), We.test(n) ? p(e).position()[t] + "px" : n;
    });
  }), p.each({ Height: "height", Width: "width" }, function(e, t) {
    p.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(
      n,
      r
    ) {
      p.fn[r] = function(r, i) {
        var o = arguments.length && (n || "boolean" != typeof r),
          a = n || (!0 === r || !0 === i ? "margin" : "border");
        return K(
          this,
          function(t, n, r) {
            var i;
            return p.isWindow(t)
              ? t.document.documentElement["client" + e]
              : 9 === t.nodeType
                ? (
                    (i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    )
                  )
                : void 0 === r ? p.css(t, n, a) : p.style(t, n, r, a);
          },
          t,
          o ? r : void 0,
          o,
          null
        );
      };
    });
  }), p.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function(e, t) {
      return this.off(e, null, t);
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length
        ? this.off(e, "**")
        : this.off(t, e || "**", n);
    }
  }), (p.fn.size = function() {
    return this.length;
  }), (p.fn.andSelf = p.fn.addBack), "function" == typeof define &&
    define.amd &&
    define("jquery", [], function() {
      return p;
    });
  var pn = e.jQuery,
    hn = e.$;
  return (p.noConflict = function(t) {
    return e.$ === p && (e.$ = hn), t && e.jQuery === p && (e.jQuery = pn), p;
  }), t || (e.jQuery = e.$ = p), p;
});
/*! jQuery UI - v1.11.4 - 2015-12-06 | http://jqueryui.com | Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, progressbar.js, selectmenu.js, slider.js, spinner.js, tabs.js, tooltip.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js | Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function(e) {
  function t(t, s) {
    var n,
      a,
      o,
      r = t.nodeName.toLowerCase();
    return "area" === r
      ? (
          (n = t.parentNode),
          (a = n.name),
          t.href && a && "map" === n.nodeName.toLowerCase()
            ? ((o = e("img[usemap='#" + a + "']")[0]), !!o && i(o))
            : !1
        )
      : (/^(input|select|textarea|button|object)$/.test(r)
          ? !t.disabled
          : "a" === r ? t.href || s : s) && i(t);
  }
  function i(t) {
    return (
      e.expr.filters.visible(t) &&
      !e(t).parents().addBack().filter(function() {
        return "hidden" === e.css(this, "visibility");
      }).length
    );
  }
  function s(e) {
    for (var t, i; e.length && e[0] !== document; ) {
      if (
        (
          (t = e.css("position")),
          ("absolute" === t || "relative" === t || "fixed" === t) &&
            ((i = parseInt(e.css("zIndex"), 10)), !isNaN(i) && 0 !== i)
        )
      )
        return i;
      e = e.parent();
    }
    return 0;
  }
  function n() {
    (this._curInst = null), (this._keyEvent = !1), (this._disabledInputs = []), (this._datepickerShowing = !1), (this._inDialog = !1), (this._mainDivId = "ui-datepicker-div"), (this._inlineClass = "ui-datepicker-inline"), (this._appendClass = "ui-datepicker-append"), (this._triggerClass = "ui-datepicker-trigger"), (this._dialogClass = "ui-datepicker-dialog"), (this._disableClass = "ui-datepicker-disabled"), (this._unselectableClass = "ui-datepicker-unselectable"), (this._currentClass = "ui-datepicker-current-day"), (this._dayOverClass = "ui-datepicker-days-cell-over"), (this.regional = []), (this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }), (this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }), e.extend(this._defaults, this.regional[""]), (this.regional.en = e.extend(!0, {}, this.regional[""])), (this.regional["en-US"] = e.extend(!0, {}, this.regional.en)), (this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")));
  }
  function a(t) {
    var i =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t
      .delegate(i, "mouseout", function() {
        e(this).removeClass(
          "ui-state-hover"
        ), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover");
      })
      .delegate(i, "mouseover", o);
  }
  function o() {
    e.datepicker._isDisabledDatepicker(
      v.inline ? v.dpDiv.parent()[0] : v.input[0]
    ) ||
      (
        e(this)
          .parents(".ui-datepicker-calendar")
          .find("a")
          .removeClass("ui-state-hover"),
        e(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") &&
          e(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") &&
          e(this).addClass("ui-datepicker-next-hover")
      );
  }
  function r(t, i) {
    e.extend(t, i);
    for (var s in i) null == i[s] && (t[s] = i[s]);
    return t;
  }
  function h(e) {
    return function() {
      var t = this.element.val();
      e.apply(
        this,
        arguments
      ), this._refresh(), t !== this.element.val() && this._trigger("change");
    };
  }
  (e.ui =
    e.ui ||
    {}), e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend(
    {
      scrollParent: function(t) {
        var i = this.css("position"),
          s = "absolute" === i,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents()
            .filter(function() {
              var t = e(this);
              return s && "static" === t.css("position")
                ? !1
                : n.test(
                    t.css("overflow") +
                      t.css("overflow-y") +
                      t.css("overflow-x")
                  );
            })
            .eq(0);
        return "fixed" !== i && a.length
          ? a
          : e(this[0].ownerDocument || document);
      },
      uniqueId: (function() {
        var e = 0;
        return function() {
          return this.each(function() {
            this.id || (this.id = "ui-id-" + ++e);
          });
        };
      })(),
      removeUniqueId: function() {
        return this.each(function() {
          /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
        });
      }
    }
  ), e.extend(e.expr[":"], {
    data: e.expr.createPseudo
      ? e.expr.createPseudo(function(t) {
          return function(i) {
            return !!e.data(i, t);
          };
        })
      : function(t, i, s) {
          return !!e.data(t, s[3]);
        },
    focusable: function(i) {
      return t(i, !isNaN(e.attr(i, "tabindex")));
    },
    tabbable: function(i) {
      var s = e.attr(i, "tabindex"),
        n = isNaN(s);
      return (n || s >= 0) && t(i, !n);
    }
  }), e("<a>").outerWidth(1).jquery ||
    e.each(["Width", "Height"], function(t, i) {
      function s(t, i, s, a) {
        return e.each(n, function() {
          (i -=
            parseFloat(e.css(t, "padding" + this)) ||
            0), s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
        }), i;
      }
      var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        a = i.toLowerCase(),
        o = {
          innerWidth: e.fn.innerWidth,
          innerHeight: e.fn.innerHeight,
          outerWidth: e.fn.outerWidth,
          outerHeight: e.fn.outerHeight
        };
      (e.fn["inner" + i] = function(t) {
        return void 0 === t
          ? o["inner" + i].call(this)
          : this.each(function() {
              e(this).css(a, s(this, t) + "px");
            });
      }), (e.fn["outer" + i] = function(t, n) {
        return "number" != typeof t
          ? o["outer" + i].call(this, t)
          : this.each(function() {
              e(this).css(a, s(this, t, !0, n) + "px");
            });
      });
    }), e.fn.addBack ||
    (e.fn.addBack = function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
    (e.fn.removeData = (function(t) {
      return function(i) {
        return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
      };
    })(
      e.fn.removeData
    )), (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())), e.fn.extend(
    {
      focus: (function(t) {
        return function(i, s) {
          return "number" == typeof i
            ? this.each(function() {
                var t = this;
                setTimeout(function() {
                  e(t).focus(), s && s.call(t);
                }, i);
              })
            : t.apply(this, arguments);
        };
      })(e.fn.focus),
      disableSelection: (function() {
        var e =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown";
        return function() {
          return this.bind(e + ".ui-disableSelection", function(e) {
            e.preventDefault();
          });
        };
      })(),
      enableSelection: function() {
        return this.unbind(".ui-disableSelection");
      },
      zIndex: function(t) {
        if (void 0 !== t) return this.css("zIndex", t);
        if (this.length)
          for (var i, s, n = e(this[0]); n.length && n[0] !== document; ) {
            if (
              (
                (i = n.css("position")),
                ("absolute" === i || "relative" === i || "fixed" === i) &&
                  ((s = parseInt(n.css("zIndex"), 10)), !isNaN(s) && 0 !== s)
              )
            )
              return s;
            n = n.parent();
          }
        return 0;
      }
    }
  ), (e.ui.plugin = {
    add: function(t, i, s) {
      var n,
        a = e.ui[t].prototype;
      for (n in s)
        (a.plugins[n] = a.plugins[n] || []), a.plugins[n].push([i, s[n]]);
    },
    call: function(e, t, i, s) {
      var n,
        a = e.plugins[t];
      if (
        a &&
        (s ||
          (e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
      )
        for (n = 0; a.length > n; n++)
          e.options[a[n][0]] && a[n][1].apply(e.element, i);
    }
  });
  var l = 0,
    u = Array.prototype.slice;
  (e.cleanData = (function(t) {
    return function(i) {
      var s, n, a;
      for (a = 0; null != (n = i[a]); a++)
        try {
          (s = e._data(n, "events")), s &&
            s.remove &&
            e(n).triggerHandler("remove");
        } catch (o) {}
      t(i);
    };
  })(e.cleanData)), (e.widget = function(t, i, s) {
    var n,
      a,
      o,
      r,
      h = {},
      l = t.split(".")[0];
    return (t = t.split(".")[1]), (n = l + "-" + t), s ||
      ((s = i), (i = e.Widget)), (e.expr[":"][n.toLowerCase()] = function(t) {
      return !!e.data(t, n);
    }), (e[l] = e[l] || {}), (a = e[l][t]), (o = e[l][t] = function(e, t) {
      return this._createWidget
        ? (arguments.length && this._createWidget(e, t), void 0)
        : new o(e, t);
    }), e.extend(o, a, {
      version: s.version,
      _proto: e.extend({}, s),
      _childConstructors: []
    }), (r = new i()), (r.options = e.widget.extend(
      {},
      r.options
    )), e.each(s, function(t, s) {
      return e.isFunction(s)
        ? (
            (h[t] = (function() {
              var e = function() {
                  return i.prototype[t].apply(this, arguments);
                },
                n = function(e) {
                  return i.prototype[t].apply(this, e);
                };
              return function() {
                var t,
                  i = this._super,
                  a = this._superApply;
                return (this._super = e), (this._superApply = n), (t = s.apply(
                  this,
                  arguments
                )), (this._super = i), (this._superApply = a), t;
              };
            })()),
            void 0
          )
        : ((h[t] = s), void 0);
    }), (o.prototype = e.widget.extend(
      r,
      { widgetEventPrefix: a ? r.widgetEventPrefix || t : t },
      h,
      { constructor: o, namespace: l, widgetName: t, widgetFullName: n }
    )), a
      ? (
          e.each(a._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto);
          }),
          delete a._childConstructors
        )
      : i._childConstructors.push(o), e.widget.bridge(t, o), o;
  }), (e.widget.extend = function(t) {
    for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++)
      for (i in n[a])
        (s = n[a][i]), n[a].hasOwnProperty(i) &&
          void 0 !== s &&
          (t[i] = e.isPlainObject(s)
            ? e.isPlainObject(t[i])
              ? e.widget.extend({}, t[i], s)
              : e.widget.extend({}, s)
            : s);
    return t;
  }), (e.widget.bridge = function(t, i) {
    var s = i.prototype.widgetFullName || t;
    e.fn[t] = function(n) {
      var a = "string" == typeof n,
        o = u.call(arguments, 1),
        r = this;
      return a
        ? this.each(function() {
            var i,
              a = e.data(this, s);
            return "instance" === n
              ? ((r = a), !1)
              : a
                ? e.isFunction(a[n]) && "_" !== n.charAt(0)
                  ? (
                      (i = a[n].apply(a, o)),
                      i !== a && void 0 !== i
                        ? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1)
                        : void 0
                    )
                  : e.error(
                      "no such method '" + n + "' for " + t + " widget instance"
                    )
                : e.error(
                    "cannot call methods on " +
                      t +
                      " prior to initialization; " +
                      "attempted to call method '" +
                      n +
                      "'"
                  );
          })
        : (
            o.length && (n = e.widget.extend.apply(null, [n].concat(o))),
            this.each(function() {
              var t = e.data(this, s);
              t
                ? (t.option(n || {}), t._init && t._init())
                : e.data(this, s, new i(n, this));
            })
          ), r;
    };
  }), (e.Widget = function() {}), (e.Widget._childConstructors = []), (e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: { disabled: !1, create: null },
    _createWidget: function(t, i) {
      (i = e(i || this.defaultElement || this)[0]), (this.element = e(
        i
      )), (this.uuid = l++), (this.eventNamespace =
        "." +
        this.widgetName +
        this
          .uuid), (this.bindings = e()), (this.hoverable = e()), (this.focusable = e()), i !==
        this &&
        (
          e.data(i, this.widgetFullName, this),
          this._on(!0, this.element, {
            remove: function(e) {
              e.target === i && this.destroy();
            }
          }),
          (this.document = e(i.style ? i.ownerDocument : i.document || i)),
          (this.window = e(
            this.document[0].defaultView || this.document[0].parentWindow
          ))
        ), (this.options = e.widget.extend(
        {},
        this.options,
        this._getCreateOptions(),
        t
      )), this._create(), this._trigger(
        "create",
        null,
        this._getCreateEventData()
      ), this._init();
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function() {
      this._destroy(), this.element
        .unbind(this.eventNamespace)
        .removeData(this.widgetFullName)
        .removeData(e.camelCase(this.widgetFullName)), this.widget()
        .unbind(this.eventNamespace)
        .removeAttr("aria-disabled")
        .removeClass(
          this.widgetFullName + "-disabled " + "ui-state-disabled"
        ), this.bindings.unbind(
        this.eventNamespace
      ), this.hoverable.removeClass(
        "ui-state-hover"
      ), this.focusable.removeClass("ui-state-focus");
    },
    _destroy: e.noop,
    widget: function() {
      return this.element;
    },
    option: function(t, i) {
      var s,
        n,
        a,
        o = t;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof t)
        if (((o = {}), (s = t.split(".")), (t = s.shift()), s.length)) {
          for (
            n = o[t] = e.widget.extend({}, this.options[t]), a = 0;
            s.length - 1 > a;
            a++
          )
            (n[s[a]] = n[s[a]] || {}), (n = n[s[a]]);
          if (((t = s.pop()), 1 === arguments.length))
            return void 0 === n[t] ? null : n[t];
          n[t] = i;
        } else {
          if (1 === arguments.length)
            return void 0 === this.options[t] ? null : this.options[t];
          o[t] = i;
        }
      return this._setOptions(o), this;
    },
    _setOptions: function(e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this;
    },
    _setOption: function(e, t) {
      return (this.options[e] = t), "disabled" === e &&
        (
          this.widget().toggleClass(this.widgetFullName + "-disabled", !!t),
          t &&
            (
              this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus")
            )
        ), this;
    },
    enable: function() {
      return this._setOptions({ disabled: !1 });
    },
    disable: function() {
      return this._setOptions({ disabled: !0 });
    },
    _on: function(t, i, s) {
      var n,
        a = this;
      "boolean" != typeof t && ((s = i), (i = t), (t = !1)), s
        ? ((i = n = e(i)), (this.bindings = this.bindings.add(i)))
        : (
            (s = i),
            (i = this.element),
            (n = this.widget())
          ), e.each(s, function(s, o) {
        function r() {
          return t ||
          (a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled"))
            ? ("string" == typeof o ? a[o] : o).apply(a, arguments)
            : void 0;
        }
        "string" != typeof o &&
          (r.guid = o.guid = o.guid || r.guid || e.guid++);
        var h = s.match(/^([\w:-]*)\s*(.*)$/),
          l = h[1] + a.eventNamespace,
          u = h[2];
        u ? n.delegate(u, l, r) : i.bind(l, r);
      });
    },
    _off: function(t, i) {
      (i =
        (i || "").split(" ").join(this.eventNamespace + " ") +
        this.eventNamespace), t.unbind(i).undelegate(i), (this.bindings = e(
        this.bindings.not(t).get()
      )), (this.focusable = e(
        this.focusable.not(t).get()
      )), (this.hoverable = e(this.hoverable.not(t).get()));
    },
    _delay: function(e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments);
      }
      var s = this;
      return setTimeout(i, t || 0);
    },
    _hoverable: function(t) {
      (this.hoverable = this.hoverable.add(t)), this._on(t, {
        mouseenter: function(t) {
          e(t.currentTarget).addClass("ui-state-hover");
        },
        mouseleave: function(t) {
          e(t.currentTarget).removeClass("ui-state-hover");
        }
      });
    },
    _focusable: function(t) {
      (this.focusable = this.focusable.add(t)), this._on(t, {
        focusin: function(t) {
          e(t.currentTarget).addClass("ui-state-focus");
        },
        focusout: function(t) {
          e(t.currentTarget).removeClass("ui-state-focus");
        }
      });
    },
    _trigger: function(t, i, s) {
      var n,
        a,
        o = this.options[t];
      if (
        (
          (s = s || {}),
          (i = e.Event(i)),
          (i.type = (t === this.widgetEventPrefix
            ? t
            : this.widgetEventPrefix + t).toLowerCase()),
          (i.target = this.element[0]),
          (a = i.originalEvent)
        )
      )
        for (n in a) n in i || (i[n] = a[n]);
      return this.element.trigger(i, s), !(
        (e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1) ||
        i.isDefaultPrevented()
      );
    }
  }), e.each({ show: "fadeIn", hide: "fadeOut" }, function(t, i) {
    e.Widget.prototype["_" + t] = function(s, n, a) {
      "string" == typeof n && (n = { effect: n });
      var o,
        r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : t;
      (n = n || {}), "number" == typeof n &&
        (n = { duration: n }), (o = !e.isEmptyObject(
        n
      )), (n.complete = a), n.delay && s.delay(n.delay), o &&
      e.effects &&
      e.effects.effect[r]
        ? s[t](n)
        : r !== t && s[r]
          ? s[r](n.duration, n.easing, a)
          : s.queue(function(i) {
              e(this)[t](), a && a.call(s[0]), i();
            });
    };
  }), e.widget;
  var d = !1;
  e(document).mouseup(function() {
    d = !1;
  }), e.widget("ui.mouse", {
    version: "1.11.4",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var t = this;
      this.element
        .bind("mousedown." + this.widgetName, function(e) {
          return t._mouseDown(e);
        })
        .bind("click." + this.widgetName, function(i) {
          return !0 === e.data(i.target, t.widgetName + ".preventClickEvent")
            ? (
                e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1
              )
            : void 0;
        }), (this.started = !1);
    },
    _mouseDestroy: function() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate &&
        this.document
          .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
          .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function(t) {
      if (!d) {
        (this._mouseMoved = !1), this._mouseStarted &&
          this._mouseUp(t), (this._mouseDownEvent = t);
        var i = this,
          s = 1 === t.which,
          n =
            "string" == typeof this.options.cancel && t.target.nodeName
              ? e(t.target).closest(this.options.cancel).length
              : !1;
        return s && !n && this._mouseCapture(t)
          ? (
              (this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function() {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              (
                (this._mouseStarted = this._mouseStart(t) !== !1),
                !this._mouseStarted
              )
                ? (t.preventDefault(), !0)
                : (
                    !0 ===
                      e.data(
                        t.target,
                        this.widgetName + ".preventClickEvent"
                      ) &&
                      e.removeData(
                        t.target,
                        this.widgetName + ".preventClickEvent"
                      ),
                    (this._mouseMoveDelegate = function(e) {
                      return i._mouseMove(e);
                    }),
                    (this._mouseUpDelegate = function(e) {
                      return i._mouseUp(e);
                    }),
                    this.document
                      .bind(
                        "mousemove." + this.widgetName,
                        this._mouseMoveDelegate
                      )
                      .bind(
                        "mouseup." + this.widgetName,
                        this._mouseUpDelegate
                      ),
                    t.preventDefault(),
                    (d = !0),
                    !0
                  )
            )
          : !0;
      }
    },
    _mouseMove: function(t) {
      if (this._mouseMoved) {
        if (
          e.ui.ie &&
          (!document.documentMode || 9 > document.documentMode) &&
          !t.button
        )
          return this._mouseUp(t);
        if (!t.which) return this._mouseUp(t);
      }
      return (t.which || t.button) && (this._mouseMoved = !0), this
        ._mouseStarted
        ? (this._mouseDrag(t), t.preventDefault())
        : (
            this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              (
                (this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, t) !== !1),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)
              ),
            !this._mouseStarted
          );
    },
    _mouseUp: function(t) {
      return this.document
        .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
        .unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this
        ._mouseStarted &&
        (
          (this._mouseStarted = !1),
          t.target === this._mouseDownEvent.target &&
            e.data(t.target, this.widgetName + ".preventClickEvent", !0),
          this._mouseStop(t)
        ), (d = !1), !1;
    },
    _mouseDistanceMet: function(e) {
      return (
        Math.max(
          Math.abs(this._mouseDownEvent.pageX - e.pageX),
          Math.abs(this._mouseDownEvent.pageY - e.pageY)
        ) >= this.options.distance
      );
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet;
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0;
    }
  }), (function() {
    function t(e, t, i) {
      return [
        parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1),
        parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)
      ];
    }
    function i(t, i) {
      return parseInt(e.css(t, i), 10) || 0;
    }
    function s(t) {
      var i = t[0];
      return 9 === i.nodeType
        ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } }
        : e.isWindow(i)
          ? {
              width: t.width(),
              height: t.height(),
              offset: { top: t.scrollTop(), left: t.scrollLeft() }
            }
          : i.preventDefault
            ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
            : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
              };
    }
    e.ui = e.ui || {};
    var n,
      a,
      o = Math.max,
      r = Math.abs,
      h = Math.round,
      l = /left|center|right/,
      u = /top|center|bottom/,
      d = /[\+\-]\d+(\.[\d]+)?%?/,
      c = /^\w+/,
      p = /%$/,
      f = e.fn.position;
    (e.position = {
      scrollbarWidth: function() {
        if (void 0 !== n) return n;
        var t,
          i,
          s = e(
            "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
          ),
          a = s.children()[0];
        return e("body").append(s), (t = a.offsetWidth), s.css(
          "overflow",
          "scroll"
        ), (i = a.offsetWidth), t === i &&
          (i = s[0].clientWidth), s.remove(), (n = t - i);
      },
      getScrollInfo: function(t) {
        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          n =
            "scroll" === i ||
            ("auto" === i && t.width < t.element[0].scrollWidth),
          a =
            "scroll" === s ||
            ("auto" === s && t.height < t.element[0].scrollHeight);
        return {
          width: a ? e.position.scrollbarWidth() : 0,
          height: n ? e.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function(t) {
        var i = e(t || window),
          s = e.isWindow(i[0]),
          n = !!i[0] && 9 === i[0].nodeType;
        return {
          element: i,
          isWindow: s,
          isDocument: n,
          offset: i.offset() || { left: 0, top: 0 },
          scrollLeft: i.scrollLeft(),
          scrollTop: i.scrollTop(),
          width: s || n ? i.width() : i.outerWidth(),
          height: s || n ? i.height() : i.outerHeight()
        };
      }
    }), (e.fn.position = function(n) {
      if (!n || !n.of) return f.apply(this, arguments);
      n = e.extend({}, n);
      var p,
        m,
        g,
        v,
        y,
        b,
        _ = e(n.of),
        x = e.position.getWithinInfo(n.within),
        k = e.position.getScrollInfo(x),
        w = (n.collision || "flip").split(" "),
        T = {};
      return (b = s(_)), _[0].preventDefault && (n.at = "left top"), (m =
        b.width), (g = b.height), (v = b.offset), (y = e.extend(
        {},
        v
      )), e.each(["my", "at"], function() {
        var e,
          t,
          i = (n[this] || "").split(" ");
        1 === i.length &&
          (i = l.test(i[0])
            ? i.concat(["center"])
            : u.test(i[0])
              ? ["center"].concat(i)
              : [
                  "center",
                  "center"
                ]), (i[0] = l.test(i[0]) ? i[0] : "center"), (i[1] = u.test(i[1]) ? i[1] : "center"), (e = d.exec(i[0])), (t = d.exec(i[1])), (T[this] = [e ? e[0] : 0, t ? t[0] : 0]), (n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]);
      }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0]
        ? (y.left += m)
        : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1]
        ? (y.top += g)
        : "center" === n.at[1] && (y.top += g / 2), (p = t(
        T.at,
        m,
        g
      )), (y.left += p[0]), (y.top += p[1]), this.each(function() {
        var s,
          l,
          u = e(this),
          d = u.outerWidth(),
          c = u.outerHeight(),
          f = i(this, "marginLeft"),
          b = i(this, "marginTop"),
          D = d + f + i(this, "marginRight") + k.width,
          S = c + b + i(this, "marginBottom") + k.height,
          M = e.extend({}, y),
          N = t(T.my, u.outerWidth(), u.outerHeight());
        "right" === n.my[0]
          ? (M.left -= d)
          : "center" === n.my[0] &&
            (M.left -=
              d /
              2), "bottom" === n.my[1] ? (M.top -= c) : "center" === n.my[1] && (M.top -= c / 2), (M.left += N[0]), (M.top += N[1]), a || ((M.left = h(M.left)), (M.top = h(M.top))), (s = { marginLeft: f, marginTop: b }), e.each(
          ["left", "top"],
          function(t, i) {
            e.ui.position[w[t]] &&
              e.ui.position[w[t]][i](M, {
                targetWidth: m,
                targetHeight: g,
                elemWidth: d,
                elemHeight: c,
                collisionPosition: s,
                collisionWidth: D,
                collisionHeight: S,
                offset: [p[0] + N[0], p[1] + N[1]],
                my: n.my,
                at: n.at,
                within: x,
                elem: u
              });
          }
        ), n.using &&
          (l = function(e) {
            var t = v.left - M.left,
              i = t + m - d,
              s = v.top - M.top,
              a = s + g - c,
              h = {
                target: {
                  element: _,
                  left: v.left,
                  top: v.top,
                  width: m,
                  height: g
                },
                element: {
                  element: u,
                  left: M.left,
                  top: M.top,
                  width: d,
                  height: c
                },
                horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
              };
            d > m && m > r(t + i) && (h.horizontal = "center"), c > g &&
              g > r(s + a) &&
              (h.vertical = "middle"), (h.important =
              o(r(t), r(i)) > o(r(s), r(a))
                ? "horizontal"
                : "vertical"), n.using.call(this, e, h);
          }), u.offset(e.extend(M, { using: l }));
      });
    }), (e.ui.position = {
      fit: {
        left: function(e, t) {
          var i,
            s = t.within,
            n = s.isWindow ? s.scrollLeft : s.offset.left,
            a = s.width,
            r = e.left - t.collisionPosition.marginLeft,
            h = n - r,
            l = r + t.collisionWidth - a - n;
          t.collisionWidth > a
            ? h > 0 && 0 >= l
              ? ((i = e.left + h + t.collisionWidth - a - n), (e.left += h - i))
              : (e.left =
                  l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n)
            : h > 0
              ? (e.left += h)
              : l > 0 ? (e.left -= l) : (e.left = o(e.left - r, e.left));
        },
        top: function(e, t) {
          var i,
            s = t.within,
            n = s.isWindow ? s.scrollTop : s.offset.top,
            a = t.within.height,
            r = e.top - t.collisionPosition.marginTop,
            h = n - r,
            l = r + t.collisionHeight - a - n;
          t.collisionHeight > a
            ? h > 0 && 0 >= l
              ? ((i = e.top + h + t.collisionHeight - a - n), (e.top += h - i))
              : (e.top =
                  l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n)
            : h > 0
              ? (e.top += h)
              : l > 0 ? (e.top -= l) : (e.top = o(e.top - r, e.top));
        }
      },
      flip: {
        left: function(e, t) {
          var i,
            s,
            n = t.within,
            a = n.offset.left + n.scrollLeft,
            o = n.width,
            h = n.isWindow ? n.scrollLeft : n.offset.left,
            l = e.left - t.collisionPosition.marginLeft,
            u = l - h,
            d = l + t.collisionWidth - o - h,
            c =
              "left" === t.my[0]
                ? -t.elemWidth
                : "right" === t.my[0] ? t.elemWidth : 0,
            p =
              "left" === t.at[0]
                ? t.targetWidth
                : "right" === t.at[0] ? -t.targetWidth : 0,
            f = -2 * t.offset[0];
          0 > u
            ? (
                (i = e.left + c + p + f + t.collisionWidth - o - a),
                (0 > i || r(u) > i) && (e.left += c + p + f)
              )
            : d > 0 &&
              (
                (s = e.left - t.collisionPosition.marginLeft + c + p + f - h),
                (s > 0 || d > r(s)) && (e.left += c + p + f)
              );
        },
        top: function(e, t) {
          var i,
            s,
            n = t.within,
            a = n.offset.top + n.scrollTop,
            o = n.height,
            h = n.isWindow ? n.scrollTop : n.offset.top,
            l = e.top - t.collisionPosition.marginTop,
            u = l - h,
            d = l + t.collisionHeight - o - h,
            c = "top" === t.my[1],
            p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
            f =
              "top" === t.at[1]
                ? t.targetHeight
                : "bottom" === t.at[1] ? -t.targetHeight : 0,
            m = -2 * t.offset[1];
          0 > u
            ? (
                (s = e.top + p + f + m + t.collisionHeight - o - a),
                (0 > s || r(u) > s) && (e.top += p + f + m)
              )
            : d > 0 &&
              (
                (i = e.top - t.collisionPosition.marginTop + p + f + m - h),
                (i > 0 || d > r(i)) && (e.top += p + f + m)
              );
        }
      },
      flipfit: {
        left: function() {
          e.ui.position.flip.left.apply(
            this,
            arguments
          ), e.ui.position.fit.left.apply(this, arguments);
        },
        top: function() {
          e.ui.position.flip.top.apply(
            this,
            arguments
          ), e.ui.position.fit.top.apply(this, arguments);
        }
      }
    }), (function() {
      var t,
        i,
        s,
        n,
        o,
        r = document.getElementsByTagName("body")[0],
        h = document.createElement("div");
      (t = document.createElement(
        r ? "div" : "body"
      )), (s = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }), r && e.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" });
      for (o in s) t.style[o] = s[o];
      t.appendChild(
        h
      ), (i = r || document.documentElement), i.insertBefore(t, i.firstChild), (h.style.cssText = "position: absolute; left: 10.7432222px;"), (n = e(h).offset().left), (a = n > 10 && 11 > n), (t.innerHTML = ""), i.removeChild(t);
    })();
  })(), e.ui.position, e.widget("ui.draggable", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function() {
      "original" === this.options.helper && this._setPositionRelative(), this
        .options.addClasses && this.element.addClass("ui-draggable"), this
        .options.disabled &&
        this.element.addClass(
          "ui-draggable-disabled"
        ), this._setHandleClassName(), this._mouseInit();
    },
    _setOption: function(e, t) {
      this._super(e, t), "handle" === e &&
        (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function() {
      return (this.helper || this.element).is(".ui-draggable-dragging")
        ? ((this.destroyOnClear = !0), void 0)
        : (
            this.element.removeClass(
              "ui-draggable ui-draggable-dragging ui-draggable-disabled"
            ),
            this._removeHandleClassName(),
            this._mouseDestroy(),
            void 0
          );
    },
    _mouseCapture: function(t) {
      var i = this.options;
      return this._blurActiveElement(t), this.helper ||
      i.disabled ||
      e(t.target).closest(".ui-resizable-handle").length > 0
        ? !1
        : (
            (this.handle = this._getHandle(t)),
            this.handle
              ? (
                  this._blockFrames(
                    i.iframeFix === !0 ? "iframe" : i.iframeFix
                  ),
                  !0
                )
              : !1
          );
    },
    _blockFrames: function(t) {
      this.iframeBlocks = this.document.find(t).map(function() {
        var t = e(this);
        return e("<div>")
          .css("position", "absolute")
          .appendTo(t.parent())
          .outerWidth(t.outerWidth())
          .outerHeight(t.outerHeight())
          .offset(t.offset())[0];
      });
    },
    _unblockFrames: function() {
      this.iframeBlocks &&
        (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function(t) {
      var i = this.document[0];
      if (this.handleElement.is(t.target))
        try {
          i.activeElement &&
            "body" !== i.activeElement.nodeName.toLowerCase() &&
            e(i.activeElement).blur();
        } catch (s) {}
    },
    _mouseStart: function(t) {
      var i = this.options;
      return (this.helper = this._createHelper(t)), this.helper.addClass(
        "ui-draggable-dragging"
      ), this._cacheHelperProportions(), e.ui.ddmanager &&
        (e.ui.ddmanager.current = this), this._cacheMargins(), (this.cssPosition = this.helper.css(
        "position"
      )), (this.scrollParent = this.helper.scrollParent(
        !0
      )), (this.offsetParent = this.helper.offsetParent()), (this.hasFixedAncestor =
        this.helper.parents().filter(function() {
          return "fixed" === e(this).css("position");
        }).length >
        0), (this.positionAbs = this.element.offset()), this._refreshOffsets(
        t
      ), (this.originalPosition = this.position = this._generatePosition(
        t,
        !1
      )), (this.originalPageX = t.pageX), (this.originalPageY =
        t.pageY), i.cursorAt &&
        this._adjustOffsetFromHelper(
          i.cursorAt
        ), this._setContainment(), this._trigger("start", t) === !1
        ? (this._clear(), !1)
        : (
            this._cacheHelperProportions(),
            e.ui.ddmanager &&
              !i.dropBehaviour &&
              e.ui.ddmanager.prepareOffsets(this, t),
            this._normalizeRightBottom(),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0
          );
    },
    _refreshOffsets: function(e) {
      (this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), (this.offset.click = {
        left: e.pageX - this.offset.left,
        top: e.pageY - this.offset.top
      });
    },
    _mouseDrag: function(t, i) {
      if (
        (
          this.hasFixedAncestor &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(t, !0)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !i
        )
      ) {
        var s = this._uiHash();
        if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
        this.position = s.position;
      }
      return (this.helper[0].style.left =
        this.position.left + "px"), (this.helper[0].style.top =
        this.position.top + "px"), e.ui.ddmanager &&
        e.ui.ddmanager.drag(this, t), !1;
    },
    _mouseStop: function(t) {
      var i = this,
        s = !1;
      return e.ui.ddmanager &&
        !this.options.dropBehaviour &&
        (s = e.ui.ddmanager.drop(this, t)), this.dropped &&
        ((s = this.dropped), (this.dropped = !1)), ("invalid" ===
        this.options.revert &&
        !s) ||
      ("valid" === this.options.revert && s) ||
      this.options.revert === !0 ||
      (e.isFunction(this.options.revert) &&
        this.options.revert.call(this.element, s))
        ? e(this.helper).animate(
            this.originalPosition,
            parseInt(this.options.revertDuration, 10),
            function() {
              i._trigger("stop", t) !== !1 && i._clear();
            }
          )
        : this._trigger("stop", t) !== !1 && this._clear(), !1;
    },
    _mouseUp: function(t) {
      return this._unblockFrames(), e.ui.ddmanager &&
        e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) &&
        this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t);
    },
    cancel: function() {
      return this.helper.is(".ui-draggable-dragging")
        ? this._mouseUp({})
        : this._clear(), this;
    },
    _getHandle: function(t) {
      return this.options.handle
        ? !!e(t.target).closest(this.element.find(this.options.handle)).length
        : !0;
    },
    _setHandleClassName: function() {
      (this.handleElement = this.options.handle
        ? this.element.find(this.options.handle)
        : this.element), this.handleElement.addClass("ui-draggable-handle");
    },
    _removeHandleClassName: function() {
      this.handleElement.removeClass("ui-draggable-handle");
    },
    _createHelper: function(t) {
      var i = this.options,
        s = e.isFunction(i.helper),
        n = s
          ? e(i.helper.apply(this.element[0], [t]))
          : "clone" === i.helper
            ? this.element.clone().removeAttr("id")
            : this.element;
      return n.parents("body").length ||
        n.appendTo(
          "parent" === i.appendTo ? this.element[0].parentNode : i.appendTo
        ), s &&
        n[0] === this.element[0] &&
        this._setPositionRelative(), n[0] === this.element[0] ||
        /(fixed|absolute)/.test(n.css("position")) ||
        n.css("position", "absolute"), n;
    },
    _setPositionRelative: function() {
      /^(?:r|a|f)/.test(this.element.css("position")) ||
        (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) &&
        (t = { left: +t[0], top: +t[1] || 0 }), "left" in t &&
        (this.offset.click.left = t.left + this.margins.left), "right" in t &&
        (this.offset.click.left =
          this.helperProportions.width - t.right + this.margins.left), "top" in
        t && (this.offset.click.top = t.top + this.margins.top), "bottom" in
        t &&
        (this.offset.click.top =
          this.helperProportions.height - t.bottom + this.margins.top);
    },
    _isRootNode: function(e) {
      return /(html|body)/i.test(e.tagName) || e === this.document[0];
    },
    _getParentOffset: function() {
      var t = this.offsetParent.offset(),
        i = this.document[0];
      return "absolute" === this.cssPosition &&
        this.scrollParent[0] !== i &&
        e.contains(this.scrollParent[0], this.offsetParent[0]) &&
        (
          (t.left += this.scrollParent.scrollLeft()),
          (t.top += this.scrollParent.scrollTop())
        ), this._isRootNode(this.offsetParent[0]) &&
        (t = { top: 0, left: 0 }), {
        top:
          t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:
          t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function() {
      if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
      var e = this.element.position(),
        t = this._isRootNode(this.scrollParent[0]);
      return {
        top:
          e.top -
          (parseInt(this.helper.css("top"), 10) || 0) +
          (t ? 0 : this.scrollParent.scrollTop()),
        left:
          e.left -
          (parseInt(this.helper.css("left"), 10) || 0) +
          (t ? 0 : this.scrollParent.scrollLeft())
      };
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function() {
      var t,
        i,
        s,
        n = this.options,
        a = this.document[0];
      return (this.relativeContainer = null), n.containment
        ? "window" === n.containment
          ? (
              (this.containment = [
                e(window).scrollLeft() -
                  this.offset.relative.left -
                  this.offset.parent.left,
                e(window).scrollTop() -
                  this.offset.relative.top -
                  this.offset.parent.top,
                e(window).scrollLeft() +
                  e(window).width() -
                  this.helperProportions.width -
                  this.margins.left,
                e(window).scrollTop() +
                  (e(window).height() || a.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top
              ]),
              void 0
            )
          : "document" === n.containment
            ? (
                (this.containment = [
                  0,
                  0,
                  e(a).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  (e(a).height() || a.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top
                ]),
                void 0
              )
            : n.containment.constructor === Array
              ? ((this.containment = n.containment), void 0)
              : (
                  "parent" === n.containment &&
                    (n.containment = this.helper[0].parentNode),
                  (i = e(n.containment)),
                  (s = i[0]),
                  s &&
                    (
                      (t = /(scroll|auto)/.test(i.css("overflow"))),
                      (this.containment = [
                        (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                          (parseInt(i.css("paddingLeft"), 10) || 0),
                        (parseInt(i.css("borderTopWidth"), 10) || 0) +
                          (parseInt(i.css("paddingTop"), 10) || 0),
                        (t
                          ? Math.max(s.scrollWidth, s.offsetWidth)
                          : s.offsetWidth) -
                          (parseInt(i.css("borderRightWidth"), 10) || 0) -
                          (parseInt(i.css("paddingRight"), 10) || 0) -
                          this.helperProportions.width -
                          this.margins.left -
                          this.margins.right,
                        (t
                          ? Math.max(s.scrollHeight, s.offsetHeight)
                          : s.offsetHeight) -
                          (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                          (parseInt(i.css("paddingBottom"), 10) || 0) -
                          this.helperProportions.height -
                          this.margins.top -
                          this.margins.bottom
                      ]),
                      (this.relativeContainer = i)
                    ),
                  void 0
                )
        : ((this.containment = null), void 0);
    },
    _convertPositionTo: function(e, t) {
      t || (t = this.position);
      var i = "absolute" === e ? 1 : -1,
        s = this._isRootNode(this.scrollParent[0]);
      return {
        top:
          t.top +
          this.offset.relative.top * i +
          this.offset.parent.top * i -
          ("fixed" === this.cssPosition
            ? -this.offset.scroll.top
            : s ? 0 : this.offset.scroll.top) *
            i,
        left:
          t.left +
          this.offset.relative.left * i +
          this.offset.parent.left * i -
          ("fixed" === this.cssPosition
            ? -this.offset.scroll.left
            : s ? 0 : this.offset.scroll.left) *
            i
      };
    },
    _generatePosition: function(e, t) {
      var i,
        s,
        n,
        a,
        o = this.options,
        r = this._isRootNode(this.scrollParent[0]),
        h = e.pageX,
        l = e.pageY;
      return (r && this.offset.scroll) ||
        (this.offset.scroll = {
          top: this.scrollParent.scrollTop(),
          left: this.scrollParent.scrollLeft()
        }), t &&
        (
          this.containment &&
            (
              this.relativeContainer
                ? (
                    (s = this.relativeContainer.offset()),
                    (i = [
                      this.containment[0] + s.left,
                      this.containment[1] + s.top,
                      this.containment[2] + s.left,
                      this.containment[3] + s.top
                    ])
                  )
                : (i = this.containment),
              e.pageX - this.offset.click.left < i[0] &&
                (h = i[0] + this.offset.click.left),
              e.pageY - this.offset.click.top < i[1] &&
                (l = i[1] + this.offset.click.top),
              e.pageX - this.offset.click.left > i[2] &&
                (h = i[2] + this.offset.click.left),
              e.pageY - this.offset.click.top > i[3] &&
                (l = i[3] + this.offset.click.top)
            ),
          o.grid &&
            (
              (n = o.grid[1]
                ? this.originalPageY +
                  Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1]
                : this.originalPageY),
              (l = i
                ? n - this.offset.click.top >= i[1] ||
                  n - this.offset.click.top > i[3]
                  ? n
                  : n - this.offset.click.top >= i[1]
                    ? n - o.grid[1]
                    : n + o.grid[1]
                : n),
              (a = o.grid[0]
                ? this.originalPageX +
                  Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0]
                : this.originalPageX),
              (h = i
                ? a - this.offset.click.left >= i[0] ||
                  a - this.offset.click.left > i[2]
                  ? a
                  : a - this.offset.click.left >= i[0]
                    ? a - o.grid[0]
                    : a + o.grid[0]
                : a)
            ),
          "y" === o.axis && (h = this.originalPageX),
          "x" === o.axis && (l = this.originalPageY)
        ), {
        top:
          l -
          this.offset.click.top -
          this.offset.relative.top -
          this.offset.parent.top +
          ("fixed" === this.cssPosition
            ? -this.offset.scroll.top
            : r ? 0 : this.offset.scroll.top),
        left:
          h -
          this.offset.click.left -
          this.offset.relative.left -
          this.offset.parent.left +
          ("fixed" === this.cssPosition
            ? -this.offset.scroll.left
            : r ? 0 : this.offset.scroll.left)
      };
    },
    _clear: function() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] ===
        this.element[0] ||
        this.cancelHelperRemoval ||
        this.helper.remove(), (this.helper = null), (this.cancelHelperRemoval = !1), this
        .destroyOnClear && this.destroy();
    },
    _normalizeRightBottom: function() {
      "y" !== this.options.axis &&
        "auto" !== this.helper.css("right") &&
        (
          this.helper.width(this.helper.width()),
          this.helper.css("right", "auto")
        ), "x" !== this.options.axis &&
        "auto" !== this.helper.css("bottom") &&
        (
          this.helper.height(this.helper.height()),
          this.helper.css("bottom", "auto")
        );
    },
    _trigger: function(t, i, s) {
      return (s = s || this._uiHash()), e.ui.plugin.call(
        this,
        t,
        [i, s, this],
        !0
      ), /^(drag|start|stop)/.test(t) &&
        (
          (this.positionAbs = this._convertPositionTo("absolute")),
          (s.offset = this.positionAbs)
        ), e.Widget.prototype._trigger.call(this, t, i, s);
    },
    plugins: {},
    _uiHash: function() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), e.ui.plugin.add("draggable", "connectToSortable", {
    start: function(t, i, s) {
      var n = e.extend({}, i, { item: s.element });
      (s.sortables = []), e(s.options.connectToSortable).each(function() {
        var i = e(this).sortable("instance");
        i &&
          !i.options.disabled &&
          (
            s.sortables.push(i),
            i.refreshPositions(),
            i._trigger("activate", t, n)
          );
      });
    },
    stop: function(t, i, s) {
      var n = e.extend({}, i, { item: s.element });
      (s.cancelHelperRemoval = !1), e.each(s.sortables, function() {
        var e = this;
        e.isOver
          ? (
              (e.isOver = 0),
              (s.cancelHelperRemoval = !0),
              (e.cancelHelperRemoval = !1),
              (e._storedCSS = {
                position: e.placeholder.css("position"),
                top: e.placeholder.css("top"),
                left: e.placeholder.css("left")
              }),
              e._mouseStop(t),
              (e.options.helper = e.options._helper)
            )
          : ((e.cancelHelperRemoval = !0), e._trigger("deactivate", t, n));
      });
    },
    drag: function(t, i, s) {
      e.each(s.sortables, function() {
        var n = !1,
          a = this;
        (a.positionAbs =
          s.positionAbs), (a.helperProportions = s.helperProportions), (a.offset.click = s.offset.click), a._intersectsWith(
          a.containerCache
        ) &&
          (
            (n = !0),
            e.each(s.sortables, function() {
              return (this.positionAbs =
                s.positionAbs), (this.helperProportions = s.helperProportions), (this.offset.click = s.offset.click), this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n;
            })
          ), n
          ? (
              a.isOver ||
                (
                  (a.isOver = 1),
                  (s._parent = i.helper.parent()),
                  (a.currentItem = i.helper
                    .appendTo(a.element)
                    .data("ui-sortable-item", !0)),
                  (a.options._helper = a.options.helper),
                  (a.options.helper = function() {
                    return i.helper[0];
                  }),
                  (t.target = a.currentItem[0]),
                  a._mouseCapture(t, !0),
                  a._mouseStart(t, !0, !0),
                  (a.offset.click.top = s.offset.click.top),
                  (a.offset.click.left = s.offset.click.left),
                  (a.offset.parent.left -=
                    s.offset.parent.left - a.offset.parent.left),
                  (a.offset.parent.top -=
                    s.offset.parent.top - a.offset.parent.top),
                  s._trigger("toSortable", t),
                  (s.dropped = a.element),
                  e.each(s.sortables, function() {
                    this.refreshPositions();
                  }),
                  (s.currentItem = s.element),
                  (a.fromOutside = s)
                ),
              a.currentItem && (a._mouseDrag(t), (i.position = a.position))
            )
          : a.isOver &&
            (
              (a.isOver = 0),
              (a.cancelHelperRemoval = !0),
              (a.options._revert = a.options.revert),
              (a.options.revert = !1),
              a._trigger("out", t, a._uiHash(a)),
              a._mouseStop(t, !0),
              (a.options.revert = a.options._revert),
              (a.options.helper = a.options._helper),
              a.placeholder && a.placeholder.remove(),
              i.helper.appendTo(s._parent),
              s._refreshOffsets(t),
              (i.position = s._generatePosition(t, !0)),
              s._trigger("fromSortable", t),
              (s.dropped = !1),
              e.each(s.sortables, function() {
                this.refreshPositions();
              })
            );
      });
    }
  }), e.ui.plugin.add("draggable", "cursor", {
    start: function(t, i, s) {
      var n = e("body"),
        a = s.options;
      n.css("cursor") && (a._cursor = n.css("cursor")), n.css(
        "cursor",
        a.cursor
      );
    },
    stop: function(t, i, s) {
      var n = s.options;
      n._cursor && e("body").css("cursor", n._cursor);
    }
  }), e.ui.plugin.add("draggable", "opacity", {
    start: function(t, i, s) {
      var n = e(i.helper),
        a = s.options;
      n.css("opacity") && (a._opacity = n.css("opacity")), n.css(
        "opacity",
        a.opacity
      );
    },
    stop: function(t, i, s) {
      var n = s.options;
      n._opacity && e(i.helper).css("opacity", n._opacity);
    }
  }), e.ui.plugin.add("draggable", "scroll", {
    start: function(e, t, i) {
      i.scrollParentNotHidden ||
        (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i
        .scrollParentNotHidden[0] !== i.document[0] &&
        "HTML" !== i.scrollParentNotHidden[0].tagName &&
        (i.overflowOffset = i.scrollParentNotHidden.offset());
    },
    drag: function(t, i, s) {
      var n = s.options,
        a = !1,
        o = s.scrollParentNotHidden[0],
        r = s.document[0];
      o !== r && "HTML" !== o.tagName
        ? (
            (n.axis && "x" === n.axis) ||
              (s.overflowOffset.top + o.offsetHeight - t.pageY <
              n.scrollSensitivity
                ? (o.scrollTop = a = o.scrollTop + n.scrollSpeed)
                : t.pageY - s.overflowOffset.top < n.scrollSensitivity &&
                  (o.scrollTop = a = o.scrollTop - n.scrollSpeed)),
            (n.axis && "y" === n.axis) ||
              (s.overflowOffset.left + o.offsetWidth - t.pageX <
              n.scrollSensitivity
                ? (o.scrollLeft = a = o.scrollLeft + n.scrollSpeed)
                : t.pageX - s.overflowOffset.left < n.scrollSensitivity &&
                  (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))
          )
        : (
            (n.axis && "x" === n.axis) ||
              (t.pageY - e(r).scrollTop() < n.scrollSensitivity
                ? (a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed))
                : e(window).height() - (t.pageY - e(r).scrollTop()) <
                    n.scrollSensitivity &&
                  (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))),
            (n.axis && "y" === n.axis) ||
              (t.pageX - e(r).scrollLeft() < n.scrollSensitivity
                ? (a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed))
                : e(window).width() - (t.pageX - e(r).scrollLeft()) <
                    n.scrollSensitivity &&
                  (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))
          ), a !== !1 &&
        e.ui.ddmanager &&
        !n.dropBehaviour &&
        e.ui.ddmanager.prepareOffsets(s, t);
    }
  }), e.ui.plugin.add("draggable", "snap", {
    start: function(t, i, s) {
      var n = s.options;
      (s.snapElements = []), e(
        n.snap.constructor !== String
          ? n.snap.items || ":data(ui-draggable)"
          : n.snap
      ).each(function() {
        var t = e(this),
          i = t.offset();
        this !== s.element[0] &&
          s.snapElements.push({
            item: this,
            width: t.outerWidth(),
            height: t.outerHeight(),
            top: i.top,
            left: i.left
          });
      });
    },
    drag: function(t, i, s) {
      var n,
        a,
        o,
        r,
        h,
        l,
        u,
        d,
        c,
        p,
        f = s.options,
        m = f.snapTolerance,
        g = i.offset.left,
        v = g + s.helperProportions.width,
        y = i.offset.top,
        b = y + s.helperProportions.height;
      for (c = s.snapElements.length - 1; c >= 0; c--)
        (h = s.snapElements[c].left - s.margins.left), (l =
          h + s.snapElements[c].width), (u =
          s.snapElements[c].top - s.margins.top), (d =
          u + s.snapElements[c].height), h - m > v ||
        g > l + m ||
        u - m > b ||
        y > d + m ||
        !e.contains(
          s.snapElements[c].item.ownerDocument,
          s.snapElements[c].item
        )
          ? (
              s.snapElements[c].snapping &&
                s.options.snap.release &&
                s.options.snap.release.call(
                  s.element,
                  t,
                  e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })
                ),
              (s.snapElements[c].snapping = !1)
            )
          : (
              "inner" !== f.snapMode &&
                (
                  (n = m >= Math.abs(u - b)),
                  (a = m >= Math.abs(d - y)),
                  (o = m >= Math.abs(h - v)),
                  (r = m >= Math.abs(l - g)),
                  n &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: u - s.helperProportions.height,
                      left: 0
                    }).top),
                  a &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: d,
                      left: 0
                    }).top),
                  o &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: h - s.helperProportions.width
                    }).left),
                  r &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: l
                    }).left)
                ),
              (p = n || a || o || r),
              "outer" !== f.snapMode &&
                (
                  (n = m >= Math.abs(u - y)),
                  (a = m >= Math.abs(d - b)),
                  (o = m >= Math.abs(h - g)),
                  (r = m >= Math.abs(l - v)),
                  n &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: u,
                      left: 0
                    }).top),
                  a &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: d - s.helperProportions.height,
                      left: 0
                    }).top),
                  o &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: h
                    }).left),
                  r &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: l - s.helperProportions.width
                    }).left)
                ),
              !s.snapElements[c].snapping &&
                (n || a || o || r || p) &&
                s.options.snap.snap &&
                s.options.snap.snap.call(
                  s.element,
                  t,
                  e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })
                ),
              (s.snapElements[c].snapping = n || a || o || r || p)
            );
    }
  }), e.ui.plugin.add("draggable", "stack", {
    start: function(t, i, s) {
      var n,
        a = s.options,
        o = e.makeArray(e(a.stack)).sort(function(t, i) {
          return (
            (parseInt(e(t).css("zIndex"), 10) || 0) -
            (parseInt(e(i).css("zIndex"), 10) || 0)
          );
        });
      o.length &&
        (
          (n = parseInt(e(o[0]).css("zIndex"), 10) || 0),
          e(o).each(function(t) {
            e(this).css("zIndex", n + t);
          }),
          this.css("zIndex", n + o.length)
        );
    }
  }), e.ui.plugin.add("draggable", "zIndex", {
    start: function(t, i, s) {
      var n = e(i.helper),
        a = s.options;
      n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css(
        "zIndex",
        a.zIndex
      );
    },
    stop: function(t, i, s) {
      var n = s.options;
      n._zIndex && e(i.helper).css("zIndex", n._zIndex);
    }
  }), e.ui.draggable, e.widget("ui.droppable", {
    version: "1.11.4",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function() {
      var t,
        i = this.options,
        s = i.accept;
      (this.isover = !1), (this.isout = !0), (this.accept = e.isFunction(s)
        ? s
        : function(e) {
            return e.is(s);
          }), (this.proportions = function() {
        return arguments.length
          ? ((t = arguments[0]), void 0)
          : t
            ? t
            : (t = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
              });
      }), this._addToManager(i.scope), i.addClasses &&
        this.element.addClass("ui-droppable");
    },
    _addToManager: function(t) {
      (e.ui.ddmanager.droppables[t] =
        e.ui.ddmanager.droppables[t] || []), e.ui.ddmanager.droppables[t].push(
        this
      );
    },
    _splice: function(e) {
      for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1);
    },
    _destroy: function() {
      var t = e.ui.ddmanager.droppables[this.options.scope];
      this._splice(t), this.element.removeClass(
        "ui-droppable ui-droppable-disabled"
      );
    },
    _setOption: function(t, i) {
      if ("accept" === t)
        this.accept = e.isFunction(i)
          ? i
          : function(e) {
              return e.is(i);
            };
      else if ("scope" === t) {
        var s = e.ui.ddmanager.droppables[this.options.scope];
        this._splice(s), this._addToManager(i);
      }
      this._super(t, i);
    },
    _activate: function(t) {
      var i = e.ui.ddmanager.current;
      this.options.activeClass &&
        this.element.addClass(this.options.activeClass), i &&
        this._trigger("activate", t, this.ui(i));
    },
    _deactivate: function(t) {
      var i = e.ui.ddmanager.current;
      this.options.activeClass &&
        this.element.removeClass(this.options.activeClass), i &&
        this._trigger("deactivate", t, this.ui(i));
    },
    _over: function(t) {
      var i = e.ui.ddmanager.current;
      i &&
        (i.currentItem || i.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], i.currentItem || i.element) &&
        (
          this.options.hoverClass &&
            this.element.addClass(this.options.hoverClass),
          this._trigger("over", t, this.ui(i))
        );
    },
    _out: function(t) {
      var i = e.ui.ddmanager.current;
      i &&
        (i.currentItem || i.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], i.currentItem || i.element) &&
        (
          this.options.hoverClass &&
            this.element.removeClass(this.options.hoverClass),
          this._trigger("out", t, this.ui(i))
        );
    },
    _drop: function(t, i) {
      var s = i || e.ui.ddmanager.current,
        n = !1;
      return s && (s.currentItem || s.element)[0] !== this.element[0]
        ? (
            this.element
              .find(":data(ui-droppable)")
              .not(".ui-draggable-dragging")
              .each(function() {
                var i = e(this).droppable("instance");
                return i.options.greedy &&
                !i.options.disabled &&
                i.options.scope === s.options.scope &&
                i.accept.call(i.element[0], s.currentItem || s.element) &&
                e.ui.intersect(
                  s,
                  e.extend(i, { offset: i.element.offset() }),
                  i.options.tolerance,
                  t
                )
                  ? ((n = !0), !1)
                  : void 0;
              }),
            n
              ? !1
              : this.accept.call(this.element[0], s.currentItem || s.element)
                ? (
                    this.options.activeClass &&
                      this.element.removeClass(this.options.activeClass),
                    this.options.hoverClass &&
                      this.element.removeClass(this.options.hoverClass),
                    this._trigger("drop", t, this.ui(s)),
                    this.element
                  )
                : !1
          )
        : !1;
    },
    ui: function(e) {
      return {
        draggable: e.currentItem || e.element,
        helper: e.helper,
        position: e.position,
        offset: e.positionAbs
      };
    }
  }), (e.ui.intersect = (function() {
    function e(e, t, i) {
      return e >= t && t + i > e;
    }
    return function(t, i, s, n) {
      if (!i.offset) return !1;
      var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
        o = (t.positionAbs || t.position.absolute).top + t.margins.top,
        r = a + t.helperProportions.width,
        h = o + t.helperProportions.height,
        l = i.offset.left,
        u = i.offset.top,
        d = l + i.proportions().width,
        c = u + i.proportions().height;
      switch (s) {
        case "fit":
          return a >= l && d >= r && o >= u && c >= h;
        case "intersect":
          return (
            a + t.helperProportions.width / 2 > l &&
            d > r - t.helperProportions.width / 2 &&
            o + t.helperProportions.height / 2 > u &&
            c > h - t.helperProportions.height / 2
          );
        case "pointer":
          return (
            e(n.pageY, u, i.proportions().height) &&
            e(n.pageX, l, i.proportions().width)
          );
        case "touch":
          return (
            ((o >= u && c >= o) || (h >= u && c >= h) || (u > o && h > c)) &&
            ((a >= l && d >= a) || (r >= l && d >= r) || (l > a && r > d))
          );
        default:
          return !1;
      }
    };
  })()), (e.ui.ddmanager = {
    current: null,
    droppables: { default: [] },
    prepareOffsets: function(t, i) {
      var s,
        n,
        a = e.ui.ddmanager.droppables[t.options.scope] || [],
        o = i ? i.type : null,
        r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
      e: for (s = 0; a.length > s; s++)
        if (
          !(
            a[s].options.disabled ||
            (t &&
              !a[s].accept.call(a[s].element[0], t.currentItem || t.element))
          )
        ) {
          for (n = 0; r.length > n; n++)
            if (r[n] === a[s].element[0]) {
              a[s].proportions().height = 0;
              continue e;
            }
          (a[s].visible = "none" !== a[s].element.css("display")), a[s]
            .visible &&
            (
              "mousedown" === o && a[s]._activate.call(a[s], i),
              (a[s].offset = a[s].element.offset()),
              a[s].proportions({
                width: a[s].element[0].offsetWidth,
                height: a[s].element[0].offsetHeight
              })
            );
        }
    },
    drop: function(t, i) {
      var s = !1;
      return e.each(
        (e.ui.ddmanager.droppables[t.options.scope] || []).slice(),
        function() {
          this.options &&
            (
              !this.options.disabled &&
                this.visible &&
                e.ui.intersect(t, this, this.options.tolerance, i) &&
                (s = this._drop.call(this, i) || s),
              !this.options.disabled &&
                this.visible &&
                this.accept.call(this.element[0], t.currentItem || t.element) &&
                (
                  (this.isout = !0),
                  (this.isover = !1),
                  this._deactivate.call(this, i)
                )
            );
        }
      ), s;
    },
    dragStart: function(t, i) {
      t.element.parentsUntil("body").bind("scroll.droppable", function() {
        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i);
      });
    },
    drag: function(t, i) {
      t.options.refreshPositions &&
        e.ui.ddmanager.prepareOffsets(t, i), e.each(
        e.ui.ddmanager.droppables[t.options.scope] || [],
        function() {
          if (!this.options.disabled && !this.greedyChild && this.visible) {
            var s,
              n,
              a,
              o = e.ui.intersect(t, this, this.options.tolerance, i),
              r =
                !o && this.isover
                  ? "isout"
                  : o && !this.isover ? "isover" : null;
            r &&
              (
                this.options.greedy &&
                  (
                    (n = this.options.scope),
                    (a = this.element
                      .parents(":data(ui-droppable)")
                      .filter(function() {
                        return (
                          e(this).droppable("instance").options.scope === n
                        );
                      })),
                    a.length &&
                      (
                        (s = e(a[0]).droppable("instance")),
                        (s.greedyChild = "isover" === r)
                      )
                  ),
                s &&
                  "isover" === r &&
                  ((s.isover = !1), (s.isout = !0), s._out.call(s, i)),
                (this[r] = !0),
                (this["isout" === r ? "isover" : "isout"] = !1),
                this["isover" === r ? "_over" : "_out"].call(this, i),
                s &&
                  "isout" === r &&
                  ((s.isout = !1), (s.isover = !0), s._over.call(s, i))
              );
          }
        }
      );
    },
    dragStop: function(t, i) {
      t.element.parentsUntil("body").unbind("scroll.droppable"), t.options
        .refreshPositions || e.ui.ddmanager.prepareOffsets(t, i);
    }
  }), e.ui.droppable, e.widget("ui.resizable", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function(e) {
      return parseInt(e, 10) || 0;
    },
    _isNumber: function(e) {
      return !isNaN(parseInt(e, 10));
    },
    _hasScroll: function(t, i) {
      if ("hidden" === e(t).css("overflow")) return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop",
        n = !1;
      return t[s] > 0 ? !0 : ((t[s] = 1), (n = t[s] > 0), (t[s] = 0), n);
    },
    _create: function() {
      var t,
        i,
        s,
        n,
        a,
        o = this,
        r = this.options;
      if (
        (
          this.element.addClass("ui-resizable"),
          e.extend(this, {
            _aspectRatio: !!r.aspectRatio,
            aspectRatio: r.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              r.helper || r.ghost || r.animate
                ? r.helper || "ui-resizable-helper"
                : null
          }),
          this.element[0].nodeName.match(
            /^(canvas|textarea|input|select|button|img)$/i
          ) &&
            (
              this.element.wrap(
                e(
                  "<div class='ui-wrapper' style='overflow: hidden;'></div>"
                ).css({
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left")
                })
              ),
              (this.element = this.element
                .parent()
                .data("ui-resizable", this.element.resizable("instance"))),
              (this.elementIsWrapper = !0),
              this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
              }),
              this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
              }),
              (this.originalResizeStyle = this.originalElement.css("resize")),
              this.originalElement.css("resize", "none"),
              this._proportionallyResizeElements.push(
                this.originalElement.css({
                  position: "static",
                  zoom: 1,
                  display: "block"
                })
              ),
              this.originalElement.css({
                margin: this.originalElement.css("margin")
              }),
              this._proportionallyResize()
            ),
          (this.handles =
            r.handles ||
            (e(".ui-resizable-handle", this.element).length
              ? {
                  n: ".ui-resizable-n",
                  e: ".ui-resizable-e",
                  s: ".ui-resizable-s",
                  w: ".ui-resizable-w",
                  se: ".ui-resizable-se",
                  sw: ".ui-resizable-sw",
                  ne: ".ui-resizable-ne",
                  nw: ".ui-resizable-nw"
                }
              : "e,s,se")),
          (this._handles = e()),
          this.handles.constructor === String
        )
      )
        for (
          "all" === this.handles &&
            (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(
            ","
          ), this.handles = {}, i = 0;
          t.length > i;
          i++
        )
          (s = e.trim(t[i])), (a = "ui-resizable-" + s), (n = e(
            "<div class='ui-resizable-handle " + a + "'></div>"
          )), n.css({ zIndex: r.zIndex }), "se" === s &&
            n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), (this.handles[
            s
          ] =
            ".ui-resizable-" + s), this.element.append(n);
      (this._renderAxis = function(t) {
        var i, s, n, a;
        t = t || this.element;
        for (i in this.handles)
          this.handles[i].constructor === String
            ? (this.handles[i] = this.element
                .children(this.handles[i])
                .first()
                .show())
            : (this.handles[i].jquery || this.handles[i].nodeType) &&
              (
                (this.handles[i] = e(this.handles[i])),
                this._on(this.handles[i], { mousedown: o._mouseDown })
              ), this.elementIsWrapper &&
            this.originalElement[0].nodeName.match(
              /^(textarea|input|select|button)$/i
            ) &&
            (
              (s = e(this.handles[i], this.element)),
              (a = /sw|ne|nw|se|n|s/.test(i)
                ? s.outerHeight()
                : s.outerWidth()),
              (n = [
                "padding",
                /ne|nw|n/.test(i)
                  ? "Top"
                  : /se|sw|s/.test(i)
                    ? "Bottom"
                    : /^e$/.test(i) ? "Right" : "Left"
              ].join("")),
              t.css(n, a),
              this._proportionallyResize()
            ), (this._handles = this._handles.add(this.handles[i]));
      }), this._renderAxis(this.element), (this._handles = this._handles.add(
        this.element.find(".ui-resizable-handle")
      )), this._handles.disableSelection(), this._handles.mouseover(function() {
        o.resizing ||
          (
            this.className &&
              (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
            (o.axis = n && n[1] ? n[1] : "se")
          );
      }), r.autoHide &&
        (
          this._handles.hide(),
          e(this.element)
            .addClass("ui-resizable-autohide")
            .mouseenter(function() {
              r.disabled ||
                (
                  e(this).removeClass("ui-resizable-autohide"),
                  o._handles.show()
                );
            })
            .mouseleave(function() {
              r.disabled ||
                o.resizing ||
                (e(this).addClass("ui-resizable-autohide"), o._handles.hide());
            })
        ), this._mouseInit();
    },
    _destroy: function() {
      this._mouseDestroy();
      var t,
        i = function(t) {
          e(t)
            .removeClass(
              "ui-resizable ui-resizable-disabled ui-resizable-resizing"
            )
            .removeData("resizable")
            .removeData("ui-resizable")
            .unbind(".resizable")
            .find(".ui-resizable-handle")
            .remove();
        };
      return this.elementIsWrapper &&
        (
          i(this.element),
          (t = this.element),
          this.originalElement
            .css({
              position: t.css("position"),
              width: t.outerWidth(),
              height: t.outerHeight(),
              top: t.css("top"),
              left: t.css("left")
            })
            .insertAfter(t),
          t.remove()
        ), this.originalElement.css("resize", this.originalResizeStyle), i(
        this.originalElement
      ), this;
    },
    _mouseCapture: function(t) {
      var i,
        s,
        n = !1;
      for (i in this.handles)
        (s = e(this.handles[i])[0]), (s === t.target ||
          e.contains(s, t.target)) &&
          (n = !0);
      return !this.options.disabled && n;
    },
    _mouseStart: function(t) {
      var i,
        s,
        n,
        a = this.options,
        o = this.element;
      return (this.resizing = !0), this._renderProxy(), (i = this._num(
        this.helper.css("left")
      )), (s = this._num(this.helper.css("top"))), a.containment &&
        (
          (i += e(a.containment).scrollLeft() || 0),
          (s += e(a.containment).scrollTop() || 0)
        ), (this.offset = this.helper.offset()), (this.position = {
        left: i,
        top: s
      }), (this.size = this._helper
        ? { width: this.helper.width(), height: this.helper.height() }
        : { width: o.width(), height: o.height() }), (this.originalSize = this
        ._helper
        ? { width: o.outerWidth(), height: o.outerHeight() }
        : { width: o.width(), height: o.height() }), (this.sizeDiff = {
        width: o.outerWidth() - o.width(),
        height: o.outerHeight() - o.height()
      }), (this.originalPosition = {
        left: i,
        top: s
      }), (this.originalMousePosition = {
        left: t.pageX,
        top: t.pageY
      }), (this.aspectRatio =
        "number" == typeof a.aspectRatio
          ? a.aspectRatio
          : this.originalSize.width / this.originalSize.height || 1), (n = e(
        ".ui-resizable-" + this.axis
      ).css("cursor")), e("body").css(
        "cursor",
        "auto" === n ? this.axis + "-resize" : n
      ), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0;
    },
    _mouseDrag: function(t) {
      var i,
        s,
        n = this.originalMousePosition,
        a = this.axis,
        o = t.pageX - n.left || 0,
        r = t.pageY - n.top || 0,
        h = this._change[a];
      return this._updatePrevProperties(), h
        ? (
            (i = h.apply(this, [t, o, r])),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)),
            (i = this._respectSize(i, t)),
            this._updateCache(i),
            this._propagate("resize", t),
            (s = this._applyChanges()),
            !this._helper &&
              this._proportionallyResizeElements.length &&
              this._proportionallyResize(),
            e.isEmptyObject(s) ||
              (
                this._updatePrevProperties(),
                this._trigger("resize", t, this.ui()),
                this._applyChanges()
              ),
            !1
          )
        : !1;
    },
    _mouseStop: function(t) {
      this.resizing = !1;
      var i,
        s,
        n,
        a,
        o,
        r,
        h,
        l = this.options,
        u = this;
      return this._helper &&
        (
          (i = this._proportionallyResizeElements),
          (s = i.length && /textarea/i.test(i[0].nodeName)),
          (n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height),
          (a = s ? 0 : u.sizeDiff.width),
          (o = { width: u.helper.width() - a, height: u.helper.height() - n }),
          (r =
            parseInt(u.element.css("left"), 10) +
              (u.position.left - u.originalPosition.left) || null),
          (h =
            parseInt(u.element.css("top"), 10) +
              (u.position.top - u.originalPosition.top) || null),
          l.animate || this.element.css(e.extend(o, { top: h, left: r })),
          u.helper.height(u.size.height),
          u.helper.width(u.size.width),
          this._helper && !l.animate && this._proportionallyResize()
        ), e("body").css("cursor", "auto"), this.element.removeClass(
        "ui-resizable-resizing"
      ), this._propagate("stop", t), this._helper && this.helper.remove(), !1;
    },
    _updatePrevProperties: function() {
      (this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }), (this.prevSize = {
        width: this.size.width,
        height: this.size.height
      });
    },
    _applyChanges: function() {
      var e = {};
      return this.position.top !== this.prevPosition.top &&
        (e.top = this.position.top + "px"), this.position.left !==
        this.prevPosition.left && (e.left = this.position.left + "px"), this
        .size.width !== this.prevSize.width &&
        (e.width = this.size.width + "px"), this.size.height !==
        this.prevSize.height &&
        (e.height = this.size.height + "px"), this.helper.css(e), e;
    },
    _updateVirtualBoundaries: function(e) {
      var t,
        i,
        s,
        n,
        a,
        o = this.options;
      (a = {
        minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
        maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
        minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
        maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
      }), (this._aspectRatio || e) &&
        (
          (t = a.minHeight * this.aspectRatio),
          (s = a.minWidth / this.aspectRatio),
          (i = a.maxHeight * this.aspectRatio),
          (n = a.maxWidth / this.aspectRatio),
          t > a.minWidth && (a.minWidth = t),
          s > a.minHeight && (a.minHeight = s),
          a.maxWidth > i && (a.maxWidth = i),
          a.maxHeight > n && (a.maxHeight = n)
        ), (this._vBoundaries = a);
    },
    _updateCache: function(e) {
      (this.offset = this.helper.offset()), this._isNumber(e.left) &&
        (this.position.left = e.left), this._isNumber(e.top) &&
        (this.position.top = e.top), this._isNumber(e.height) &&
        (this.size.height = e.height), this._isNumber(e.width) &&
        (this.size.width = e.width);
    },
    _updateRatio: function(e) {
      var t = this.position,
        i = this.size,
        s = this.axis;
      return this._isNumber(e.height)
        ? (e.width = e.height * this.aspectRatio)
        : this._isNumber(e.width) &&
          (e.height = e.width / this.aspectRatio), "sw" === s &&
        ((e.left = t.left + (i.width - e.width)), (e.top = null)), "nw" === s &&
        (
          (e.top = t.top + (i.height - e.height)),
          (e.left = t.left + (i.width - e.width))
        ), e;
    },
    _respectSize: function(e) {
      var t = this._vBoundaries,
        i = this.axis,
        s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
        n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
        a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
        o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
        r = this.originalPosition.left + this.originalSize.width,
        h = this.position.top + this.size.height,
        l = /sw|nw|w/.test(i),
        u = /nw|ne|n/.test(i);
      return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s &&
        (e.width = t.maxWidth), n && (e.height = t.maxHeight), a &&
        l &&
        (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o &&
        u &&
        (e.top = h - t.minHeight), n &&
        u &&
        (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top
        ? e.width || e.height || e.top || !e.left || (e.left = null)
        : (e.top = null), e;
    },
    _getPaddingPlusBorderDimensions: function(e) {
      for (
        var t = 0,
          i = [],
          s = [
            e.css("borderTopWidth"),
            e.css("borderRightWidth"),
            e.css("borderBottomWidth"),
            e.css("borderLeftWidth")
          ],
          n = [
            e.css("paddingTop"),
            e.css("paddingRight"),
            e.css("paddingBottom"),
            e.css("paddingLeft")
          ];
        4 > t;
        t++
      )
        (i[t] = parseInt(s[t], 10) || 0), (i[t] += parseInt(n[t], 10) || 0);
      return { height: i[0] + i[2], width: i[1] + i[3] };
    },
    _proportionallyResize: function() {
      if (this._proportionallyResizeElements.length)
        for (
          var e, t = 0, i = this.helper || this.element;
          this._proportionallyResizeElements.length > t;
          t++
        )
          (e = this._proportionallyResizeElements[t]), this.outerDimensions ||
            (this.outerDimensions = this._getPaddingPlusBorderDimensions(
              e
            )), e.css({
            height: i.height() - this.outerDimensions.height || 0,
            width: i.width() - this.outerDimensions.width || 0
          });
    },
    _renderProxy: function() {
      var t = this.element,
        i = this.options;
      (this.elementOffset = t.offset()), this._helper
        ? (
            (this.helper =
              this.helper || e("<div style='overflow:hidden;'></div>")),
            this.helper
              .addClass(this._helper)
              .css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
              }),
            this.helper.appendTo("body").disableSelection()
          )
        : (this.helper = this.element);
    },
    _change: {
      e: function(e, t) {
        return { width: this.originalSize.width + t };
      },
      w: function(e, t) {
        var i = this.originalSize,
          s = this.originalPosition;
        return { left: s.left + t, width: i.width - t };
      },
      n: function(e, t, i) {
        var s = this.originalSize,
          n = this.originalPosition;
        return { top: n.top + i, height: s.height - i };
      },
      s: function(e, t, i) {
        return { height: this.originalSize.height + i };
      },
      se: function(t, i, s) {
        return e.extend(
          this._change.s.apply(this, arguments),
          this._change.e.apply(this, [t, i, s])
        );
      },
      sw: function(t, i, s) {
        return e.extend(
          this._change.s.apply(this, arguments),
          this._change.w.apply(this, [t, i, s])
        );
      },
      ne: function(t, i, s) {
        return e.extend(
          this._change.n.apply(this, arguments),
          this._change.e.apply(this, [t, i, s])
        );
      },
      nw: function(t, i, s) {
        return e.extend(
          this._change.n.apply(this, arguments),
          this._change.w.apply(this, [t, i, s])
        );
      }
    },
    _propagate: function(t, i) {
      e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t &&
        this._trigger(t, i, this.ui());
    },
    plugins: {},
    ui: function() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  }), e.ui.plugin.add("resizable", "animate", {
    stop: function(t) {
      var i = e(this).resizable("instance"),
        s = i.options,
        n = i._proportionallyResizeElements,
        a = n.length && /textarea/i.test(n[0].nodeName),
        o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
        r = a ? 0 : i.sizeDiff.width,
        h = { width: i.size.width - r, height: i.size.height - o },
        l =
          parseInt(i.element.css("left"), 10) +
            (i.position.left - i.originalPosition.left) || null,
        u =
          parseInt(i.element.css("top"), 10) +
            (i.position.top - i.originalPosition.top) || null;
      i.element.animate(e.extend(h, u && l ? { top: u, left: l } : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function() {
          var s = {
            width: parseInt(i.element.css("width"), 10),
            height: parseInt(i.element.css("height"), 10),
            top: parseInt(i.element.css("top"), 10),
            left: parseInt(i.element.css("left"), 10)
          };
          n &&
            n.length &&
            e(n[0]).css({ width: s.width, height: s.height }), i._updateCache(
            s
          ), i._propagate("resize", t);
        }
      });
    }
  }), e.ui.plugin.add("resizable", "containment", {
    start: function() {
      var t,
        i,
        s,
        n,
        a,
        o,
        r,
        h = e(this).resizable("instance"),
        l = h.options,
        u = h.element,
        d = l.containment,
        c =
          d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
      c &&
        (
          (h.containerElement = e(c)),
          /document/.test(d) || d === document
            ? (
                (h.containerOffset = { left: 0, top: 0 }),
                (h.containerPosition = { left: 0, top: 0 }),
                (h.parentData = {
                  element: e(document),
                  left: 0,
                  top: 0,
                  width: e(document).width(),
                  height:
                    e(document).height() ||
                    document.body.parentNode.scrollHeight
                })
              )
            : (
                (t = e(c)),
                (i = []),
                e(["Top", "Right", "Left", "Bottom"]).each(function(e, s) {
                  i[e] = h._num(t.css("padding" + s));
                }),
                (h.containerOffset = t.offset()),
                (h.containerPosition = t.position()),
                (h.containerSize = {
                  height: t.innerHeight() - i[3],
                  width: t.innerWidth() - i[1]
                }),
                (s = h.containerOffset),
                (n = h.containerSize.height),
                (a = h.containerSize.width),
                (o = h._hasScroll(c, "left") ? c.scrollWidth : a),
                (r = h._hasScroll(c) ? c.scrollHeight : n),
                (h.parentData = {
                  element: c,
                  left: s.left,
                  top: s.top,
                  width: o,
                  height: r
                })
              )
        );
    },
    resize: function(t) {
      var i,
        s,
        n,
        a,
        o = e(this).resizable("instance"),
        r = o.options,
        h = o.containerOffset,
        l = o.position,
        u = o._aspectRatio || t.shiftKey,
        d = { top: 0, left: 0 },
        c = o.containerElement,
        p = !0;
      c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left <
        (o._helper ? h.left : 0) &&
        (
          (o.size.width =
            o.size.width +
            (o._helper ? o.position.left - h.left : o.position.left - d.left)),
          u && ((o.size.height = o.size.width / o.aspectRatio), (p = !1)),
          (o.position.left = r.helper ? h.left : 0)
        ), l.top < (o._helper ? h.top : 0) &&
        (
          (o.size.height =
            o.size.height +
            (o._helper ? o.position.top - h.top : o.position.top)),
          u && ((o.size.width = o.size.height * o.aspectRatio), (p = !1)),
          (o.position.top = o._helper ? h.top : 0)
        ), (n =
        o.containerElement.get(0) ===
        o.element.parent().get(0)), (a = /relative|absolute/.test(
        o.containerElement.css("position")
      )), n && a
        ? (
            (o.offset.left = o.parentData.left + o.position.left),
            (o.offset.top = o.parentData.top + o.position.top)
          )
        : (
            (o.offset.left = o.element.offset().left),
            (o.offset.top = o.element.offset().top)
          ), (i = Math.abs(
        o.sizeDiff.width +
          (o._helper ? o.offset.left - d.left : o.offset.left - h.left)
      )), (s = Math.abs(
        o.sizeDiff.height +
          (o._helper ? o.offset.top - d.top : o.offset.top - h.top)
      )), i + o.size.width >= o.parentData.width &&
        (
          (o.size.width = o.parentData.width - i),
          u && ((o.size.height = o.size.width / o.aspectRatio), (p = !1))
        ), s + o.size.height >= o.parentData.height &&
        (
          (o.size.height = o.parentData.height - s),
          u && ((o.size.width = o.size.height * o.aspectRatio), (p = !1))
        ), p ||
        (
          (o.position.left = o.prevPosition.left),
          (o.position.top = o.prevPosition.top),
          (o.size.width = o.prevSize.width),
          (o.size.height = o.prevSize.height)
        );
    },
    stop: function() {
      var t = e(this).resizable("instance"),
        i = t.options,
        s = t.containerOffset,
        n = t.containerPosition,
        a = t.containerElement,
        o = e(t.helper),
        r = o.offset(),
        h = o.outerWidth() - t.sizeDiff.width,
        l = o.outerHeight() - t.sizeDiff.height;
      t._helper &&
        !i.animate &&
        /relative/.test(a.css("position")) &&
        e(this).css({
          left: r.left - n.left - s.left,
          width: h,
          height: l
        }), t._helper &&
        !i.animate &&
        /static/.test(a.css("position")) &&
        e(this).css({ left: r.left - n.left - s.left, width: h, height: l });
    }
  }), e.ui.plugin.add("resizable", "alsoResize", {
    start: function() {
      var t = e(this).resizable("instance"),
        i = t.options;
      e(i.alsoResize).each(function() {
        var t = e(this);
        t.data("ui-resizable-alsoresize", {
          width: parseInt(t.width(), 10),
          height: parseInt(t.height(), 10),
          left: parseInt(t.css("left"), 10),
          top: parseInt(t.css("top"), 10)
        });
      });
    },
    resize: function(t, i) {
      var s = e(this).resizable("instance"),
        n = s.options,
        a = s.originalSize,
        o = s.originalPosition,
        r = {
          height: s.size.height - a.height || 0,
          width: s.size.width - a.width || 0,
          top: s.position.top - o.top || 0,
          left: s.position.left - o.left || 0
        };
      e(n.alsoResize).each(function() {
        var t = e(this),
          s = e(this).data("ui-resizable-alsoresize"),
          n = {},
          a = t.parents(i.originalElement[0]).length
            ? ["width", "height"]
            : ["width", "height", "top", "left"];
        e.each(a, function(e, t) {
          var i = (s[t] || 0) + (r[t] || 0);
          i && i >= 0 && (n[t] = i || null);
        }), t.css(n);
      });
    },
    stop: function() {
      e(this).removeData("resizable-alsoresize");
    }
  }), e.ui.plugin.add("resizable", "ghost", {
    start: function() {
      var t = e(this).resizable("instance"),
        i = t.options,
        s = t.size;
      (t.ghost = t.originalElement.clone()), t.ghost
        .css({
          opacity: 0.25,
          display: "block",
          position: "relative",
          height: s.height,
          width: s.width,
          margin: 0,
          left: 0,
          top: 0
        })
        .addClass("ui-resizable-ghost")
        .addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(
        t.helper
      );
    },
    resize: function() {
      var t = e(this).resizable("instance");
      t.ghost &&
        t.ghost.css({
          position: "relative",
          height: t.size.height,
          width: t.size.width
        });
    },
    stop: function() {
      var t = e(this).resizable("instance");
      t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
    }
  }), e.ui.plugin.add("resizable", "grid", {
    resize: function() {
      var t,
        i = e(this).resizable("instance"),
        s = i.options,
        n = i.size,
        a = i.originalSize,
        o = i.originalPosition,
        r = i.axis,
        h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
        l = h[0] || 1,
        u = h[1] || 1,
        d = Math.round((n.width - a.width) / l) * l,
        c = Math.round((n.height - a.height) / u) * u,
        p = a.width + d,
        f = a.height + c,
        m = s.maxWidth && p > s.maxWidth,
        g = s.maxHeight && f > s.maxHeight,
        v = s.minWidth && s.minWidth > p,
        y = s.minHeight && s.minHeight > f;
      (s.grid = h), v && (p += l), y && (f += u), m && (p -= l), g &&
        (f -= u), /^(se|s|e)$/.test(r)
        ? ((i.size.width = p), (i.size.height = f))
        : /^(ne)$/.test(r)
          ? (
              (i.size.width = p),
              (i.size.height = f),
              (i.position.top = o.top - c)
            )
          : /^(sw)$/.test(r)
            ? (
                (i.size.width = p),
                (i.size.height = f),
                (i.position.left = o.left - d)
              )
            : (
                (0 >= f - u || 0 >= p - l) &&
                  (t = i._getPaddingPlusBorderDimensions(this)),
                f - u > 0
                  ? ((i.size.height = f), (i.position.top = o.top - c))
                  : (
                      (f = u - t.height),
                      (i.size.height = f),
                      (i.position.top = o.top + a.height - f)
                    ),
                p - l > 0
                  ? ((i.size.width = p), (i.position.left = o.left - d))
                  : (
                      (p = l - t.width),
                      (i.size.width = p),
                      (i.position.left = o.left + a.width - p)
                    )
              );
    }
  }), e.ui.resizable, e.widget("ui.selectable", e.ui.mouse, {
    version: "1.11.4",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function() {
      var t,
        i = this;
      this.element.addClass(
        "ui-selectable"
      ), (this.dragged = !1), (this.refresh = function() {
        (t = e(i.options.filter, i.element[0])), t.addClass(
          "ui-selectee"
        ), t.each(function() {
          var t = e(this),
            i = t.offset();
          e.data(this, "selectable-item", {
            element: this,
            $element: t,
            left: i.left,
            top: i.top,
            right: i.left + t.outerWidth(),
            bottom: i.top + t.outerHeight(),
            startselected: !1,
            selected: t.hasClass("ui-selected"),
            selecting: t.hasClass("ui-selecting"),
            unselecting: t.hasClass("ui-unselecting")
          });
        });
      }), this.refresh(), (this.selectees = t.addClass(
        "ui-selectee"
      )), this._mouseInit(), (this.helper = e(
        "<div class='ui-selectable-helper'></div>"
      ));
    },
    _destroy: function() {
      this.selectees
        .removeClass("ui-selectee")
        .removeData("selectable-item"), this.element.removeClass(
        "ui-selectable ui-selectable-disabled"
      ), this._mouseDestroy();
    },
    _mouseStart: function(t) {
      var i = this,
        s = this.options;
      (this.opos = [t.pageX, t.pageY]), this.options.disabled ||
        (
          (this.selectees = e(s.filter, this.element[0])),
          this._trigger("start", t),
          e(s.appendTo).append(this.helper),
          this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }),
          s.autoRefresh && this.refresh(),
          this.selectees.filter(".ui-selected").each(function() {
            var s = e.data(this, "selectable-item");
            (s.startselected = !0), t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), (s.selected = !1), s.$element.addClass("ui-unselecting"), (s.unselecting = !0), i._trigger("unselecting", t, { unselecting: s.element }));
          }),
          e(t.target).parents().addBack().each(function() {
            var s,
              n = e.data(this, "selectable-item");
            return n
              ? (
                  (s =
                    (!t.metaKey && !t.ctrlKey) ||
                    !n.$element.hasClass("ui-selected")),
                  n.$element
                    .removeClass(s ? "ui-unselecting" : "ui-selected")
                    .addClass(s ? "ui-selecting" : "ui-unselecting"),
                  (n.unselecting = !s),
                  (n.selecting = s),
                  (n.selected = s),
                  s
                    ? i._trigger("selecting", t, { selecting: n.element })
                    : i._trigger("unselecting", t, { unselecting: n.element }),
                  !1
                )
              : void 0;
          })
        );
    },
    _mouseDrag: function(t) {
      if (((this.dragged = !0), !this.options.disabled)) {
        var i,
          s = this,
          n = this.options,
          a = this.opos[0],
          o = this.opos[1],
          r = t.pageX,
          h = t.pageY;
        return a > r && ((i = r), (r = a), (a = i)), o > h &&
          ((i = h), (h = o), (o = i)), this.helper.css({
          left: a,
          top: o,
          width: r - a,
          height: h - o
        }), this.selectees.each(function() {
          var i = e.data(this, "selectable-item"),
            l = !1;
          i &&
            i.element !== s.element[0] &&
            (
              "touch" === n.tolerance
                ? (l = !(
                    i.left > r ||
                    a > i.right ||
                    i.top > h ||
                    o > i.bottom
                  ))
                : "fit" === n.tolerance &&
                  (l = i.left > a && r > i.right && i.top > o && h > i.bottom),
              l
                ? (
                    i.selected &&
                      (
                        i.$element.removeClass("ui-selected"),
                        (i.selected = !1)
                      ),
                    i.unselecting &&
                      (
                        i.$element.removeClass("ui-unselecting"),
                        (i.unselecting = !1)
                      ),
                    i.selecting ||
                      (
                        i.$element.addClass("ui-selecting"),
                        (i.selecting = !0),
                        s._trigger("selecting", t, { selecting: i.element })
                      )
                  )
                : (
                    i.selecting &&
                      ((t.metaKey || t.ctrlKey) && i.startselected
                        ? (
                            i.$element.removeClass("ui-selecting"),
                            (i.selecting = !1),
                            i.$element.addClass("ui-selected"),
                            (i.selected = !0)
                          )
                        : (
                            i.$element.removeClass("ui-selecting"),
                            (i.selecting = !1),
                            i.startselected &&
                              (
                                i.$element.addClass("ui-unselecting"),
                                (i.unselecting = !0)
                              ),
                            s._trigger("unselecting", t, {
                              unselecting: i.element
                            })
                          )),
                    i.selected &&
                      (t.metaKey ||
                        t.ctrlKey ||
                        i.startselected ||
                        (
                          i.$element.removeClass("ui-selected"),
                          (i.selected = !1),
                          i.$element.addClass("ui-unselecting"),
                          (i.unselecting = !0),
                          s._trigger("unselecting", t, {
                            unselecting: i.element
                          })
                        ))
                  )
            );
        }), !1;
      }
    },
    _mouseStop: function(t) {
      var i = this;
      return (this.dragged = !1), e(
        ".ui-unselecting",
        this.element[0]
      ).each(function() {
        var s = e.data(this, "selectable-item");
        s.$element.removeClass(
          "ui-unselecting"
        ), (s.unselecting = !1), (s.startselected = !1), i._trigger("unselected", t, { unselected: s.element });
      }), e(".ui-selecting", this.element[0]).each(function() {
        var s = e.data(this, "selectable-item");
        s.$element
          .removeClass("ui-selecting")
          .addClass(
            "ui-selected"
          ), (s.selecting = !1), (s.selected = !0), (s.startselected = !0), i._trigger("selected", t, { selected: s.element });
      }), this._trigger("stop", t), this.helper.remove(), !1;
    }
  }), e.widget("ui.sortable", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function(e, t, i) {
      return e >= t && t + i > e;
    },
    _isFloating: function(e) {
      return (
        /left|right/.test(e.css("float")) ||
        /inline|table-cell/.test(e.css("display"))
      );
    },
    _create: function() {
      (this.containerCache = {}), this.element.addClass(
        "ui-sortable"
      ), this.refresh(), (this.offset = this.element.offset()), this._mouseInit(), this._setHandleClassName(), (this.ready = !0);
    },
    _setOption: function(e, t) {
      this._super(e, t), "handle" === e && this._setHandleClassName();
    },
    _setHandleClassName: function() {
      this.element
        .find(".ui-sortable-handle")
        .removeClass("ui-sortable-handle"), e.each(this.items, function() {
        (this.instance.options.handle
          ? this.item.find(this.instance.options.handle)
          : this.item).addClass("ui-sortable-handle");
      });
    },
    _destroy: function() {
      this.element
        .removeClass("ui-sortable ui-sortable-disabled")
        .find(".ui-sortable-handle")
        .removeClass("ui-sortable-handle"), this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--)
        this.items[e].item.removeData(this.widgetName + "-item");
      return this;
    },
    _mouseCapture: function(t, i) {
      var s = null,
        n = !1,
        a = this;
      return this.reverting
        ? !1
        : this.options.disabled || "static" === this.options.type
          ? !1
          : (
              this._refreshItems(t),
              e(t.target).parents().each(function() {
                return e.data(this, a.widgetName + "-item") === a
                  ? ((s = e(this)), !1)
                  : void 0;
              }),
              e.data(t.target, a.widgetName + "-item") === a &&
                (s = e(t.target)),
              s
                ? !this.options.handle ||
                  i ||
                  (
                    e(this.options.handle, s)
                      .find("*")
                      .addBack()
                      .each(function() {
                        this === t.target && (n = !0);
                      }),
                    n
                  )
                  ? (
                      (this.currentItem = s),
                      this._removeCurrentsFromItems(),
                      !0
                    )
                  : !1
                : !1
            );
    },
    _mouseStart: function(t, i, s) {
      var n,
        a,
        o = this.options;
      if (
        (
          (this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left
          }),
          e.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
          }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          (this.originalPosition = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0]
          }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          o.containment && this._setContainment(),
          o.cursor &&
            "auto" !== o.cursor &&
            (
              (a = this.document.find("body")),
              (this.storedCursor = a.css("cursor")),
              a.css("cursor", o.cursor),
              (this.storedStylesheet = e(
                "<style>*{ cursor: " + o.cursor + " !important; }</style>"
              ).appendTo(a))
            ),
          o.opacity &&
            (
              this.helper.css("opacity") &&
                (this._storedOpacity = this.helper.css("opacity")),
              this.helper.css("opacity", o.opacity)
            ),
          o.zIndex &&
            (
              this.helper.css("zIndex") &&
                (this._storedZIndex = this.helper.css("zIndex")),
              this.helper.css("zIndex", o.zIndex)
            ),
          this.scrollParent[0] !== this.document[0] &&
            "HTML" !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", t, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !s
        )
      )
        for (n = this.containers.length - 1; n >= 0; n--)
          this.containers[n]._trigger("activate", t, this._uiHash(this));
      return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui
        .ddmanager &&
        !o.dropBehaviour &&
        e.ui.ddmanager.prepareOffsets(
          this,
          t
        ), (this.dragging = !0), this.helper.addClass(
        "ui-sortable-helper"
      ), this._mouseDrag(t), !0;
    },
    _mouseDrag: function(t) {
      var i,
        s,
        n,
        a,
        o = this.options,
        r = !1;
      for (
        this.position = this._generatePosition(
          t
        ), this.positionAbs = this._convertPositionTo("absolute"), this
          .lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this
          .options.scroll &&
          (
            this.scrollParent[0] !== this.document[0] &&
            "HTML" !== this.scrollParent[0].tagName
              ? (
                  this.overflowOffset.top +
                    this.scrollParent[0].offsetHeight -
                    t.pageY <
                  o.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = r =
                        this.scrollParent[0].scrollTop + o.scrollSpeed)
                    : t.pageY - this.overflowOffset.top < o.scrollSensitivity &&
                      (this.scrollParent[0].scrollTop = r =
                        this.scrollParent[0].scrollTop - o.scrollSpeed),
                  this.overflowOffset.left +
                    this.scrollParent[0].offsetWidth -
                    t.pageX <
                  o.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = r =
                        this.scrollParent[0].scrollLeft + o.scrollSpeed)
                    : t.pageX - this.overflowOffset.left <
                        o.scrollSensitivity &&
                      (this.scrollParent[0].scrollLeft = r =
                        this.scrollParent[0].scrollLeft - o.scrollSpeed)
                )
              : (
                  t.pageY - this.document.scrollTop() < o.scrollSensitivity
                    ? (r = this.document.scrollTop(
                        this.document.scrollTop() - o.scrollSpeed
                      ))
                    : this.window.height() -
                        (t.pageY - this.document.scrollTop()) <
                        o.scrollSensitivity &&
                      (r = this.document.scrollTop(
                        this.document.scrollTop() + o.scrollSpeed
                      )),
                  t.pageX - this.document.scrollLeft() < o.scrollSensitivity
                    ? (r = this.document.scrollLeft(
                        this.document.scrollLeft() - o.scrollSpeed
                      ))
                    : this.window.width() -
                        (t.pageX - this.document.scrollLeft()) <
                        o.scrollSensitivity &&
                      (r = this.document.scrollLeft(
                        this.document.scrollLeft() + o.scrollSpeed
                      ))
                ),
            r !== !1 &&
              e.ui.ddmanager &&
              !o.dropBehaviour &&
              e.ui.ddmanager.prepareOffsets(this, t)
          ), this.positionAbs = this._convertPositionTo("absolute"), (this
          .options.axis &&
          "y" === this.options.axis) ||
          (this.helper[0].style.left = this.position.left + "px"), (this.options
          .axis &&
          "x" === this.options.axis) ||
          (this.helper[0].style.top = this.position.top + "px"), i =
          this.items.length - 1;
        i >= 0;
        i--
      )
        if (
          (
            (s = this.items[i]),
            (n = s.item[0]),
            (a = this._intersectsWithPointer(s)),
            a &&
              s.instance === this.currentContainer &&
              n !== this.currentItem[0] &&
              this.placeholder[1 === a ? "next" : "prev"]()[0] !== n &&
              !e.contains(this.placeholder[0], n) &&
              ("semi-dynamic" === this.options.type
                ? !e.contains(this.element[0], n)
                : !0)
          )
        ) {
          if (
            (
              (this.direction = 1 === a ? "down" : "up"),
              "pointer" !== this.options.tolerance &&
                !this._intersectsWithSides(s)
            )
          )
            break;
          this._rearrange(t, s), this._trigger("change", t, this._uiHash());
          break;
        }
      return this._contactContainers(t), e.ui.ddmanager &&
        e.ui.ddmanager.drag(this, t), this._trigger(
        "sort",
        t,
        this._uiHash()
      ), (this.lastPositionAbs = this.positionAbs), !1;
    },
    _mouseStop: function(t, i) {
      if (t) {
        if (
          (
            e.ui.ddmanager &&
              !this.options.dropBehaviour &&
              e.ui.ddmanager.drop(this, t),
            this.options.revert
          )
        ) {
          var s = this,
            n = this.placeholder.offset(),
            a = this.options.axis,
            o = {};
          (a && "x" !== a) ||
            (o.left =
              n.left -
              this.offset.parent.left -
              this.margins.left +
              (this.offsetParent[0] === this.document[0].body
                ? 0
                : this.offsetParent[0].scrollLeft)), (a && "y" !== a) ||
            (o.top =
              n.top -
              this.offset.parent.top -
              this.margins.top +
              (this.offsetParent[0] === this.document[0].body
                ? 0
                : this.offsetParent[0].scrollTop)), (this.reverting = !0), e(
            this.helper
          ).animate(o, parseInt(this.options.revert, 10) || 500, function() {
            s._clear(t);
          });
        } else this._clear(t, i);
        return !1;
      }
    },
    cancel: function() {
      if (this.dragging) {
        this._mouseUp({ target: null }), "original" === this.options.helper
          ? this.currentItem
              .css(this._storedCSS)
              .removeClass("ui-sortable-helper")
          : this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--)
          this.containers[t]._trigger(
            "deactivate",
            null,
            this._uiHash(this)
          ), this.containers[t].containerCache.over &&
            (
              this.containers[t]._trigger("out", null, this._uiHash(this)),
              (this.containers[t].containerCache.over = 0)
            );
      }
      return this.placeholder &&
        (
          this.placeholder[0].parentNode &&
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          "original" !== this.options.helper &&
            this.helper &&
            this.helper[0].parentNode &&
            this.helper.remove(),
          e.extend(this, {
            helper: null,
            dragging: !1,
            reverting: !1,
            _noFinalSort: null
          }),
          this.domPosition.prev
            ? e(this.domPosition.prev).after(this.currentItem)
            : e(this.domPosition.parent).prepend(this.currentItem)
        ), this;
    },
    serialize: function(t) {
      var i = this._getItemsAsjQuery(t && t.connected),
        s = [];
      return (t = t || {}), e(i).each(function() {
        var i = (e(t.item || this).attr(t.attribute || "id") || "")
          .match(t.expression || /(.+)[\-=_](.+)/);
        i &&
          s.push(
            (t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2])
          );
      }), !s.length && t.key && s.push(t.key + "="), s.join("&");
    },
    toArray: function(t) {
      var i = this._getItemsAsjQuery(t && t.connected),
        s = [];
      return (t = t || {}), i.each(function() {
        s.push(e(t.item || this).attr(t.attribute || "id") || "");
      }), s;
    },
    _intersectsWith: function(e) {
      var t = this.positionAbs.left,
        i = t + this.helperProportions.width,
        s = this.positionAbs.top,
        n = s + this.helperProportions.height,
        a = e.left,
        o = a + e.width,
        r = e.top,
        h = r + e.height,
        l = this.offset.click.top,
        u = this.offset.click.left,
        d = "x" === this.options.axis || (s + l > r && h > s + l),
        c = "y" === this.options.axis || (t + u > a && o > t + u),
        p = d && c;
      return "pointer" === this.options.tolerance ||
      this.options.forcePointerForContainers ||
      ("pointer" !== this.options.tolerance &&
        this.helperProportions[this.floating ? "width" : "height"] >
          e[this.floating ? "width" : "height"])
        ? p
        : t + this.helperProportions.width / 2 > a &&
          o > i - this.helperProportions.width / 2 &&
          s + this.helperProportions.height / 2 > r &&
          h > n - this.helperProportions.height / 2;
    },
    _intersectsWithPointer: function(e) {
      var t =
          "x" === this.options.axis ||
          this._isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            e.top,
            e.height
          ),
        i =
          "y" === this.options.axis ||
          this._isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            e.left,
            e.width
          ),
        s = t && i,
        n = this._getDragVerticalDirection(),
        a = this._getDragHorizontalDirection();
      return s
        ? this.floating
          ? (a && "right" === a) || "down" === n ? 2 : 1
          : n && ("down" === n ? 2 : 1)
        : !1;
    },
    _intersectsWithSides: function(e) {
      var t = this._isOverAxis(
          this.positionAbs.top + this.offset.click.top,
          e.top + e.height / 2,
          e.height
        ),
        i = this._isOverAxis(
          this.positionAbs.left + this.offset.click.left,
          e.left + e.width / 2,
          e.width
        ),
        s = this._getDragVerticalDirection(),
        n = this._getDragHorizontalDirection();
      return this.floating && n
        ? ("right" === n && i) || ("left" === n && !i)
        : s && (("down" === s && t) || ("up" === s && !t));
    },
    _getDragVerticalDirection: function() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== e && (e > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== e && (e > 0 ? "right" : "left");
    },
    refresh: function(e) {
      return this._refreshItems(
        e
      ), this._setHandleClassName(), this.refreshPositions(), this;
    },
    _connectWith: function() {
      var e = this.options;
      return e.connectWith.constructor === String
        ? [e.connectWith]
        : e.connectWith;
    },
    _getItemsAsjQuery: function(t) {
      function i() {
        r.push(this);
      }
      var s,
        n,
        a,
        o,
        r = [],
        h = [],
        l = this._connectWith();
      if (l && t)
        for (s = l.length - 1; s >= 0; s--)
          for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--)
            (o = e.data(a[n], this.widgetFullName)), o &&
              o !== this &&
              !o.options.disabled &&
              h.push([
                e.isFunction(o.options.items)
                  ? o.options.items.call(o.element)
                  : e(o.options.items, o.element)
                      .not(".ui-sortable-helper")
                      .not(".ui-sortable-placeholder"),
                o
              ]);
      for (
        h.push([
          e.isFunction(this.options.items)
            ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
              })
            : e(this.options.items, this.element)
                .not(".ui-sortable-helper")
                .not(".ui-sortable-placeholder"),
          this
        ]), s = h.length - 1;
        s >= 0;
        s--
      )
        h[s][0].each(i);
      return e(r);
    },
    _removeCurrentsFromItems: function() {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = e.grep(this.items, function(e) {
        for (var i = 0; t.length > i; i++) if (t[i] === e.item[0]) return !1;
        return !0;
      });
    },
    _refreshItems: function(t) {
      (this.items = []), (this.containers = [this]);
      var i,
        s,
        n,
        a,
        o,
        r,
        h,
        l,
        u = this.items,
        d = [
          [
            e.isFunction(this.options.items)
              ? this.options.items.call(this.element[0], t, {
                  item: this.currentItem
                })
              : e(this.options.items, this.element),
            this
          ]
        ],
        c = this._connectWith();
      if (c && this.ready)
        for (i = c.length - 1; i >= 0; i--)
          for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--)
            (a = e.data(n[s], this.widgetFullName)), a &&
              a !== this &&
              !a.options.disabled &&
              (
                d.push([
                  e.isFunction(a.options.items)
                    ? a.options.items.call(a.element[0], t, {
                        item: this.currentItem
                      })
                    : e(a.options.items, a.element),
                  a
                ]),
                this.containers.push(a)
              );
      for (i = d.length - 1; i >= 0; i--)
        for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++)
          (h = e(r[s])), h.data(this.widgetName + "-item", o), u.push({
            item: h,
            instance: o,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
    },
    refreshPositions: function(t) {
      (this.floating = this.items.length
        ? "x" === this.options.axis || this._isFloating(this.items[0].item)
        : !1), this.offsetParent &&
        this.helper &&
        (this.offset.parent = this._getParentOffset());
      var i, s, n, a;
      for (i = this.items.length - 1; i >= 0; i--)
        (s = this.items[i]), (s.instance !== this.currentContainer &&
          this.currentContainer &&
          s.item[0] !== this.currentItem[0]) ||
          (
            (n = this.options.toleranceElement
              ? e(this.options.toleranceElement, s.item)
              : s.item),
            t || ((s.width = n.outerWidth()), (s.height = n.outerHeight())),
            (a = n.offset()),
            (s.left = a.left),
            (s.top = a.top)
          );
      if (this.options.custom && this.options.custom.refreshContainers)
        this.options.custom.refreshContainers.call(this);
      else
        for (i = this.containers.length - 1; i >= 0; i--)
          (a = this.containers[i].element.offset()), (this.containers[
            i
          ].containerCache.left =
            a.left), (this.containers[i].containerCache.top =
            a.top), (this.containers[i].containerCache.width = this.containers[
            i
          ].element.outerWidth()), (this.containers[
            i
          ].containerCache.height = this.containers[i].element.outerHeight());
      return this;
    },
    _createPlaceholder: function(t) {
      t = t || this;
      var i,
        s = t.options;
      (s.placeholder && s.placeholder.constructor !== String) ||
        (
          (i = s.placeholder),
          (s.placeholder = {
            element: function() {
              var s = t.currentItem[0].nodeName.toLowerCase(),
                n = e("<" + s + ">", t.document[0])
                  .addClass(
                    i || t.currentItem[0].className + " ui-sortable-placeholder"
                  )
                  .removeClass("ui-sortable-helper");
              return "tbody" === s
                ? t._createTrPlaceholder(
                    t.currentItem.find("tr").eq(0),
                    e("<tr>", t.document[0]).appendTo(n)
                  )
                : "tr" === s
                  ? t._createTrPlaceholder(t.currentItem, n)
                  : "img" === s &&
                    n.attr("src", t.currentItem.attr("src")), i ||
                n.css("visibility", "hidden"), n;
            },
            update: function(e, n) {
              (!i || s.forcePlaceholderSize) &&
                (
                  n.height() ||
                    n.height(
                      t.currentItem.innerHeight() -
                        parseInt(t.currentItem.css("paddingTop") || 0, 10) -
                        parseInt(t.currentItem.css("paddingBottom") || 0, 10)
                    ),
                  n.width() ||
                    n.width(
                      t.currentItem.innerWidth() -
                        parseInt(t.currentItem.css("paddingLeft") || 0, 10) -
                        parseInt(t.currentItem.css("paddingRight") || 0, 10)
                    )
                );
            }
          })
        ), (t.placeholder = e(
        s.placeholder.element.call(t.element, t.currentItem)
      )), t.currentItem.after(t.placeholder), s.placeholder.update(
        t,
        t.placeholder
      );
    },
    _createTrPlaceholder: function(t, i) {
      var s = this;
      t.children().each(function() {
        e("<td>&#160;</td>", s.document[0])
          .attr("colspan", e(this).attr("colspan") || 1)
          .appendTo(i);
      });
    },
    _contactContainers: function(t) {
      var i,
        s,
        n,
        a,
        o,
        r,
        h,
        l,
        u,
        d,
        c = null,
        p = null;
      for (i = this.containers.length - 1; i >= 0; i--)
        if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
          if (this._intersectsWith(this.containers[i].containerCache)) {
            if (c && e.contains(this.containers[i].element[0], c.element[0]))
              continue;
            (c = this.containers[i]), (p = i);
          } else
            this.containers[i].containerCache.over &&
              (
                this.containers[i]._trigger("out", t, this._uiHash(this)),
                (this.containers[i].containerCache.over = 0)
              );
      if (c)
        if (1 === this.containers.length)
          this.containers[p].containerCache.over ||
            (
              this.containers[p]._trigger("over", t, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1)
            );
        else {
          for (
            n = 1e4, a = null, u =
              c.floating || this._isFloating(this.currentItem), o = u
              ? "left"
              : "top", r = u ? "width" : "height", d = u
              ? "clientX"
              : "clientY", s = this.items.length - 1;
            s >= 0;
            s--
          )
            e.contains(this.containers[p].element[0], this.items[s].item[0]) &&
              this.items[s].item[0] !== this.currentItem[0] &&
              (
                (h = this.items[s].item.offset()[o]),
                (l = !1),
                t[d] - h > this.items[s][r] / 2 && (l = !0),
                n > Math.abs(t[d] - h) &&
                  (
                    (n = Math.abs(t[d] - h)),
                    (a = this.items[s]),
                    (this.direction = l ? "up" : "down")
                  )
              );
          if (!a && !this.options.dropOnEmpty) return;
          if (this.currentContainer === this.containers[p])
            return this.currentContainer.containerCache.over ||
              (
                this.containers[p]._trigger("over", t, this._uiHash()),
                (this.currentContainer.containerCache.over = 1)
              ), void 0;
          a
            ? this._rearrange(t, a, null, !0)
            : this._rearrange(
                t,
                null,
                this.containers[p].element,
                !0
              ), this._trigger("change", t, this._uiHash()), this.containers[
            p
          ]._trigger(
            "change",
            t,
            this._uiHash(this)
          ), (this.currentContainer = this.containers[
            p
          ]), this.options.placeholder.update(
            this.currentContainer,
            this.placeholder
          ), this.containers[p]._trigger(
            "over",
            t,
            this._uiHash(this)
          ), (this.containers[p].containerCache.over = 1);
        }
    },
    _createHelper: function(t) {
      var i = this.options,
        s = e.isFunction(i.helper)
          ? e(i.helper.apply(this.element[0], [t, this.currentItem]))
          : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents("body").length ||
        e(
          "parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode
        )[0].appendChild(s[0]), s[0] === this.currentItem[0] &&
        (this._storedCSS = {
          width: this.currentItem[0].style.width,
          height: this.currentItem[0].style.height,
          position: this.currentItem.css("position"),
          top: this.currentItem.css("top"),
          left: this.currentItem.css("left")
        }), (!s[0].style.width || i.forceHelperSize) &&
        s.width(this.currentItem.width()), (!s[0].style.height ||
        i.forceHelperSize) &&
        s.height(this.currentItem.height()), s;
    },
    _adjustOffsetFromHelper: function(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) &&
        (t = { left: +t[0], top: +t[1] || 0 }), "left" in t &&
        (this.offset.click.left = t.left + this.margins.left), "right" in t &&
        (this.offset.click.left =
          this.helperProportions.width - t.right + this.margins.left), "top" in
        t && (this.offset.click.top = t.top + this.margins.top), "bottom" in
        t &&
        (this.offset.click.top =
          this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return "absolute" === this.cssPosition &&
        this.scrollParent[0] !== this.document[0] &&
        e.contains(this.scrollParent[0], this.offsetParent[0]) &&
        (
          (t.left += this.scrollParent.scrollLeft()),
          (t.top += this.scrollParent.scrollTop())
        ), (this.offsetParent[0] === this.document[0].body ||
        (this.offsetParent[0].tagName &&
          "html" === this.offsetParent[0].tagName.toLowerCase() &&
          e.ui.ie)) &&
        (t = { top: 0, left: 0 }), {
        top:
          t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:
          t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function() {
      if ("relative" === this.cssPosition) {
        var e = this.currentItem.position();
        return {
          top:
            e.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            e.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft()
        };
      }
      return { top: 0, left: 0 };
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function() {
      var t,
        i,
        s,
        n = this.options;
      "parent" === n.containment &&
        (n.containment = this.helper[0].parentNode), ("document" ===
        n.containment ||
        "window" === n.containment) &&
        (this.containment = [
          0 - this.offset.relative.left - this.offset.parent.left,
          0 - this.offset.relative.top - this.offset.parent.top,
          "document" === n.containment
            ? this.document.width()
            : this.window.width() -
              this.helperProportions.width -
              this.margins.left,
          ("document" === n.containment
            ? this.document.width()
            : this.window.height() ||
              this.document[0].body.parentNode.scrollHeight) -
            this.helperProportions.height -
            this.margins.top
        ]), /^(document|window|parent)$/.test(n.containment) ||
        (
          (t = e(n.containment)[0]),
          (i = e(n.containment).offset()),
          (s = "hidden" !== e(t).css("overflow")),
          (this.containment = [
            i.left +
              (parseInt(e(t).css("borderLeftWidth"), 10) || 0) +
              (parseInt(e(t).css("paddingLeft"), 10) || 0) -
              this.margins.left,
            i.top +
              (parseInt(e(t).css("borderTopWidth"), 10) || 0) +
              (parseInt(e(t).css("paddingTop"), 10) || 0) -
              this.margins.top,
            i.left +
              (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
              (parseInt(e(t).css("borderLeftWidth"), 10) || 0) -
              (parseInt(e(t).css("paddingRight"), 10) || 0) -
              this.helperProportions.width -
              this.margins.left,
            i.top +
              (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) -
              (parseInt(e(t).css("borderTopWidth"), 10) || 0) -
              (parseInt(e(t).css("paddingBottom"), 10) || 0) -
              this.helperProportions.height -
              this.margins.top
          ])
        );
    },
    _convertPositionTo: function(t, i) {
      i || (i = this.position);
      var s = "absolute" === t ? 1 : -1,
        n =
          "absolute" !== this.cssPosition ||
          (this.scrollParent[0] !== this.document[0] &&
            e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        a = /(html|body)/i.test(n[0].tagName);
      return {
        top:
          i.top +
          this.offset.relative.top * s +
          this.offset.parent.top * s -
          ("fixed" === this.cssPosition
            ? -this.scrollParent.scrollTop()
            : a ? 0 : n.scrollTop()) *
            s,
        left:
          i.left +
          this.offset.relative.left * s +
          this.offset.parent.left * s -
          ("fixed" === this.cssPosition
            ? -this.scrollParent.scrollLeft()
            : a ? 0 : n.scrollLeft()) *
            s
      };
    },
    _generatePosition: function(t) {
      var i,
        s,
        n = this.options,
        a = t.pageX,
        o = t.pageY,
        r =
          "absolute" !== this.cssPosition ||
          (this.scrollParent[0] !== this.document[0] &&
            e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        h = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition ||
        (this.scrollParent[0] !== this.document[0] &&
          this.scrollParent[0] !== this.offsetParent[0]) ||
        (this.offset.relative = this._getRelativeOffset()), this
        .originalPosition &&
        (
          this.containment &&
            (
              t.pageX - this.offset.click.left < this.containment[0] &&
                (a = this.containment[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < this.containment[1] &&
                (o = this.containment[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > this.containment[2] &&
                (a = this.containment[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > this.containment[3] &&
                (o = this.containment[3] + this.offset.click.top)
            ),
          n.grid &&
            (
              (i =
                this.originalPageY +
                Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1]),
              (o = this.containment
                ? i - this.offset.click.top >= this.containment[1] &&
                  i - this.offset.click.top <= this.containment[3]
                  ? i
                  : i - this.offset.click.top >= this.containment[1]
                    ? i - n.grid[1]
                    : i + n.grid[1]
                : i),
              (s =
                this.originalPageX +
                Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0]),
              (a = this.containment
                ? s - this.offset.click.left >= this.containment[0] &&
                  s - this.offset.click.left <= this.containment[2]
                  ? s
                  : s - this.offset.click.left >= this.containment[0]
                    ? s - n.grid[0]
                    : s + n.grid[0]
                : s)
            )
        ), {
        top:
          o -
          this.offset.click.top -
          this.offset.relative.top -
          this.offset.parent.top +
          ("fixed" === this.cssPosition
            ? -this.scrollParent.scrollTop()
            : h ? 0 : r.scrollTop()),
        left:
          a -
          this.offset.click.left -
          this.offset.relative.left -
          this.offset.parent.left +
          ("fixed" === this.cssPosition
            ? -this.scrollParent.scrollLeft()
            : h ? 0 : r.scrollLeft())
      };
    },
    _rearrange: function(e, t, i, s) {
      i
        ? i[0].appendChild(this.placeholder[0])
        : t.item[0].parentNode.insertBefore(
            this.placeholder[0],
            "down" === this.direction ? t.item[0] : t.item[0].nextSibling
          ), (this.counter = this.counter ? ++this.counter : 1);
      var n = this.counter;
      this._delay(function() {
        n === this.counter && this.refreshPositions(!s);
      });
    },
    _clear: function(e, t) {
      function i(e, t, i) {
        return function(s) {
          i._trigger(e, s, t._uiHash(t));
        };
      }
      this.reverting = !1;
      var s,
        n = [];
      if (
        (
          !this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0]
        )
      ) {
        for (s in this._storedCSS)
          ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) &&
            (this._storedCSS[s] = "");
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();
      for (
        this.fromOutside &&
          !t &&
          n.push(function(e) {
            this._trigger("receive", e, this._uiHash(this.fromOutside));
          }), (!this.fromOutside &&
          this.domPosition.prev ===
            this.currentItem.prev().not(".ui-sortable-helper")[0] &&
          this.domPosition.parent === this.currentItem.parent()[0]) ||
          t ||
          n.push(function(e) {
            this._trigger("update", e, this._uiHash());
          }), this !== this.currentContainer &&
          (t ||
            (
              n.push(function(e) {
                this._trigger("remove", e, this._uiHash());
              }),
              n.push(
                function(e) {
                  return function(t) {
                    e._trigger("receive", t, this._uiHash(this));
                  };
                }.call(this, this.currentContainer)
              ),
              n.push(
                function(e) {
                  return function(t) {
                    e._trigger("update", t, this._uiHash(this));
                  };
                }.call(this, this.currentContainer)
              )
            )), s = this.containers.length - 1;
        s >= 0;
        s--
      )
        t || n.push(i("deactivate", this, this.containers[s])), this.containers[
          s
        ].containerCache.over &&
          (
            n.push(i("out", this, this.containers[s])),
            (this.containers[s].containerCache.over = 0)
          );
      if (
        (
          this.storedCursor &&
            (
              this.document.find("body").css("cursor", this.storedCursor),
              this.storedStylesheet.remove()
            ),
          this._storedOpacity &&
            this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              "zIndex",
              "auto" === this._storedZIndex ? "" : this._storedZIndex
            ),
          (this.dragging = !1),
          t || this._trigger("beforeStop", e, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.cancelHelperRemoval ||
            (
              this.helper[0] !== this.currentItem[0] && this.helper.remove(),
              (this.helper = null)
            ),
          !t
        )
      ) {
        for (s = 0; n.length > s; s++) n[s].call(this, e);
        this._trigger("stop", e, this._uiHash());
      }
      return (this.fromOutside = !1), !this.cancelHelperRemoval;
    },
    _trigger: function() {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 &&
        this.cancel();
    },
    _uiHash: function(t) {
      var i = t || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || e([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: t ? t.element : null
      };
    }
  }), e.widget("ui.accordion", {
    version: "1.11.4",
    options: {
      active: 0,
      animate: {},
      collapsible: !1,
      event: "click",
      header: "> li > :first-child,> :not(li):even",
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
    },
    showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
    },
    _create: function() {
      var t = this.options;
      (this.prevShow = this.prevHide = e()), this.element
        .addClass("ui-accordion ui-widget ui-helper-reset")
        .attr("role", "tablist"), t.collapsible ||
        (t.active !== !1 && null != t.active) ||
        (t.active = 0), this._processPanels(), 0 > t.active &&
        (t.active += this.headers.length), this._refresh();
    },
    _getCreateEventData: function() {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : e()
      };
    },
    _createIcons: function() {
      var t = this.options.icons;
      t &&
        (
          e("<span>")
            .addClass("ui-accordion-header-icon ui-icon " + t.header)
            .prependTo(this.headers),
          this.active
            .children(".ui-accordion-header-icon")
            .removeClass(t.header)
            .addClass(t.activeHeader),
          this.headers.addClass("ui-accordion-icons")
        );
    },
    _destroyIcons: function() {
      this.headers
        .removeClass("ui-accordion-icons")
        .children(".ui-accordion-header-icon")
        .remove();
    },
    _destroy: function() {
      var e;
      this.element
        .removeClass("ui-accordion ui-widget ui-helper-reset")
        .removeAttr("role"), this.headers
        .removeClass(
          "ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top"
        )
        .removeAttr("role")
        .removeAttr("aria-expanded")
        .removeAttr("aria-selected")
        .removeAttr("aria-controls")
        .removeAttr("tabIndex")
        .removeUniqueId(), this._destroyIcons(), (e = this.headers
        .next()
        .removeClass(
          "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled"
        )
        .css("display", "")
        .removeAttr("role")
        .removeAttr("aria-hidden")
        .removeAttr("aria-labelledby")
        .removeUniqueId()), "content" !== this.options.heightStyle &&
        e.css("height", "");
    },
    _setOption: function(e, t) {
      return "active" === e
        ? (this._activate(t), void 0)
        : (
            "event" === e &&
              (
                this.options.event &&
                  this._off(this.headers, this.options.event),
                this._setupEvents(t)
              ),
            this._super(e, t),
            "collapsible" !== e ||
              t ||
              this.options.active !== !1 ||
              this._activate(0),
            "icons" === e && (this._destroyIcons(), t && this._createIcons()),
            "disabled" === e &&
              (
                this.element
                  .toggleClass("ui-state-disabled", !!t)
                  .attr("aria-disabled", t),
                this.headers
                  .add(this.headers.next())
                  .toggleClass("ui-state-disabled", !!t)
              ),
            void 0
          );
    },
    _keydown: function(t) {
      if (!t.altKey && !t.ctrlKey) {
        var i = e.ui.keyCode,
          s = this.headers.length,
          n = this.headers.index(t.target),
          a = !1;
        switch (t.keyCode) {
          case i.RIGHT:
          case i.DOWN:
            a = this.headers[(n + 1) % s];
            break;
          case i.LEFT:
          case i.UP:
            a = this.headers[(n - 1 + s) % s];
            break;
          case i.SPACE:
          case i.ENTER:
            this._eventHandler(t);
            break;
          case i.HOME:
            a = this.headers[0];
            break;
          case i.END:
            a = this.headers[s - 1];
        }
        a &&
          (
            e(t.target).attr("tabIndex", -1),
            e(a).attr("tabIndex", 0),
            a.focus(),
            t.preventDefault()
          );
      }
    },
    _panelKeyDown: function(t) {
      t.keyCode === e.ui.keyCode.UP &&
        t.ctrlKey &&
        e(t.currentTarget).prev().focus();
    },
    refresh: function() {
      var t = this.options;
      this._processPanels(), (t.active === !1 && t.collapsible === !0) ||
      !this.headers.length
        ? ((t.active = !1), (this.active = e()))
        : t.active === !1
          ? this._activate(0)
          : this.active.length && !e.contains(this.element[0], this.active[0])
            ? this.headers.length ===
              this.headers.find(".ui-state-disabled").length
              ? ((t.active = !1), (this.active = e()))
              : this._activate(Math.max(0, t.active - 1))
            : (t.active = this.headers.index(
                this.active
              )), this._destroyIcons(), this._refresh();
    },
    _processPanels: function() {
      var e = this.headers,
        t = this.panels;
      (this.headers = this.element
        .find(this.options.header)
        .addClass(
          "ui-accordion-header ui-state-default ui-corner-all"
        )), (this.panels = this.headers
        .next()
        .addClass(
          "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
        )
        .filter(":not(.ui-accordion-content-active)")
        .hide()), t &&
        (this._off(e.not(this.headers)), this._off(t.not(this.panels)));
    },
    _refresh: function() {
      var t,
        i = this.options,
        s = i.heightStyle,
        n = this.element.parent();
      (this.active = this._findActive(i.active)
        .addClass("ui-accordion-header-active ui-state-active ui-corner-top")
        .removeClass("ui-corner-all")), this.active
        .next()
        .addClass("ui-accordion-content-active")
        .show(), this.headers
        .attr("role", "tab")
        .each(function() {
          var t = e(this),
            i = t.uniqueId().attr("id"),
            s = t.next(),
            n = s.uniqueId().attr("id");
          t.attr("aria-controls", n), s.attr("aria-labelledby", i);
        })
        .next()
        .attr("role", "tabpanel"), this.headers
        .not(this.active)
        .attr({
          "aria-selected": "false",
          "aria-expanded": "false",
          tabIndex: -1
        })
        .next()
        .attr({ "aria-hidden": "true" })
        .hide(), this.active.length
        ? this.active
            .attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0
            })
            .next()
            .attr({ "aria-hidden": "false" })
        : this.headers
            .eq(0)
            .attr("tabIndex", 0), this._createIcons(), this._setupEvents(
        i.event
      ), "fill" === s
        ? (
            (t = n.height()),
            this.element.siblings(":visible").each(function() {
              var i = e(this),
                s = i.css("position");
              "absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0));
            }),
            this.headers.each(function() {
              t -= e(this).outerHeight(!0);
            }),
            this.headers
              .next()
              .each(function() {
                e(this).height(
                  Math.max(0, t - e(this).innerHeight() + e(this).height())
                );
              })
              .css("overflow", "auto")
          )
        : "auto" === s &&
          (
            (t = 0),
            this.headers
              .next()
              .each(function() {
                t = Math.max(t, e(this).css("height", "").height());
              })
              .height(t)
          );
    },
    _activate: function(t) {
      var i = this._findActive(t)[0];
      i !== this.active[0] &&
        (
          (i = i || this.active[0]),
          this._eventHandler({
            target: i,
            currentTarget: i,
            preventDefault: e.noop
          })
        );
    },
    _findActive: function(t) {
      return "number" == typeof t ? this.headers.eq(t) : e();
    },
    _setupEvents: function(t) {
      var i = { keydown: "_keydown" };
      t &&
        e.each(t.split(" "), function(e, t) {
          i[t] = "_eventHandler";
        }), this._off(this.headers.add(this.headers.next())), this._on(
        this.headers,
        i
      ), this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers);
    },
    _eventHandler: function(t) {
      var i = this.options,
        s = this.active,
        n = e(t.currentTarget),
        a = n[0] === s[0],
        o = a && i.collapsible,
        r = o ? e() : n.next(),
        h = s.next(),
        l = { oldHeader: s, oldPanel: h, newHeader: o ? e() : n, newPanel: r };
      t.preventDefault(), (a && !i.collapsible) ||
        this._trigger("beforeActivate", t, l) === !1 ||
        (
          (i.active = o ? !1 : this.headers.index(n)),
          (this.active = a ? e() : n),
          this._toggle(l),
          s.removeClass("ui-accordion-header-active ui-state-active"),
          i.icons &&
            s
              .children(".ui-accordion-header-icon")
              .removeClass(i.icons.activeHeader)
              .addClass(i.icons.header),
          a ||
            (
              n
                .removeClass("ui-corner-all")
                .addClass(
                  "ui-accordion-header-active ui-state-active ui-corner-top"
                ),
              i.icons &&
                n
                  .children(".ui-accordion-header-icon")
                  .removeClass(i.icons.header)
                  .addClass(i.icons.activeHeader),
              n.next().addClass("ui-accordion-content-active")
            )
        );
    },
    _toggle: function(t) {
      var i = t.newPanel,
        s = this.prevShow.length ? this.prevShow : t.oldPanel;
      this.prevShow
        .add(this.prevHide)
        .stop(!0, !0), (this.prevShow = i), (this.prevHide = s), this.options
        .animate
        ? this._animate(i, s, t)
        : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({
        "aria-hidden": "true"
      }), s
        .prev()
        .attr({
          "aria-selected": "false",
          "aria-expanded": "false"
        }), i.length && s.length
        ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
        : i.length &&
          this.headers
            .filter(function() {
              return 0 === parseInt(e(this).attr("tabIndex"), 10);
            })
            .attr("tabIndex", -1), i
        .attr("aria-hidden", "false")
        .prev()
        .attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
        });
    },
    _animate: function(e, t, i) {
      var s,
        n,
        a,
        o = this,
        r = 0,
        h = e.css("box-sizing"),
        l = e.length && (!t.length || e.index() < t.index()),
        u = this.options.animate || {},
        d = (l && u.down) || u,
        c = function() {
          o._toggleComplete(i);
        };
      return "number" == typeof d && (a = d), "string" == typeof d &&
        (n = d), (n = n || d.easing || u.easing), (a =
        a || d.duration || u.duration), t.length
        ? e.length
          ? (
              (s = e.show().outerHeight()),
              t.animate(this.hideProps, {
                duration: a,
                easing: n,
                step: function(e, t) {
                  t.now = Math.round(e);
                }
              }),
              e.hide().animate(this.showProps, {
                duration: a,
                easing: n,
                complete: c,
                step: function(e, i) {
                  (i.now = Math.round(e)), "height" !== i.prop
                    ? "content-box" === h && (r += i.now)
                    : "content" !== o.options.heightStyle &&
                      ((i.now = Math.round(s - t.outerHeight() - r)), (r = 0));
                }
              }),
              void 0
            )
          : t.animate(this.hideProps, a, n, c)
        : e.animate(this.showProps, a, n, c);
    },
    _toggleComplete: function(e) {
      var t = e.oldPanel;
      t
        .removeClass("ui-accordion-content-active")
        .prev()
        .removeClass("ui-corner-top")
        .addClass("ui-corner-all"), t.length &&
        (t.parent()[0].className = t.parent()[0].className), this._trigger(
        "activate",
        null,
        e
      );
    }
  }), e.widget("ui.menu", {
    version: "1.11.4",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: { submenu: "ui-icon-carat-1-e" },
      items: "> *",
      menus: "ul",
      position: { my: "left-1 top", at: "right top" },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function() {
      (this.activeMenu = this.element), (this.mouseHandled = !1), this.element
        .uniqueId()
        .addClass("ui-menu ui-widget ui-widget-content")
        .toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length)
        .attr({ role: this.options.role, tabIndex: 0 }), this.options
        .disabled &&
        this.element
          .addClass("ui-state-disabled")
          .attr("aria-disabled", "true"), this._on({
        "mousedown .ui-menu-item": function(e) {
          e.preventDefault();
        },
        "click .ui-menu-item": function(t) {
          var i = e(t.target);
          !this.mouseHandled &&
            i.not(".ui-state-disabled").length &&
            (
              this.select(t),
              t.isPropagationStopped() || (this.mouseHandled = !0),
              i.has(".ui-menu").length
                ? this.expand(t)
                : !this.element.is(":focus") &&
                  e(this.document[0].activeElement).closest(".ui-menu")
                    .length &&
                  (
                    this.element.trigger("focus", [!0]),
                    this.active &&
                      1 === this.active.parents(".ui-menu").length &&
                      clearTimeout(this.timer)
                  )
            );
        },
        "mouseenter .ui-menu-item": function(t) {
          if (!this.previousFilter) {
            var i = e(t.currentTarget);
            i
              .siblings(".ui-state-active")
              .removeClass("ui-state-active"), this.focus(t, i);
          }
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function(e, t) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          t || this.focus(e, i);
        },
        blur: function(t) {
          this._delay(function() {
            e.contains(this.element[0], this.document[0].activeElement) ||
              this.collapseAll(t);
          });
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function(e) {
          this._closeOnDocumentClick(e) &&
            this.collapseAll(e), (this.mouseHandled = !1);
        }
      });
    },
    _destroy: function() {
      this.element
        .removeAttr("aria-activedescendant")
        .find(".ui-menu")
        .addBack()
        .removeClass(
          "ui-menu ui-widget ui-widget-content ui-menu-icons ui-front"
        )
        .removeAttr("role")
        .removeAttr("tabIndex")
        .removeAttr("aria-labelledby")
        .removeAttr("aria-expanded")
        .removeAttr("aria-hidden")
        .removeAttr("aria-disabled")
        .removeUniqueId()
        .show(), this.element
        .find(".ui-menu-item")
        .removeClass("ui-menu-item")
        .removeAttr("role")
        .removeAttr("aria-disabled")
        .removeUniqueId()
        .removeClass("ui-state-hover")
        .removeAttr("tabIndex")
        .removeAttr("role")
        .removeAttr("aria-haspopup")
        .children()
        .each(function() {
          var t = e(this);
          t.data("ui-menu-submenu-carat") && t.remove();
        }), this.element
        .find(".ui-menu-divider")
        .removeClass("ui-menu-divider ui-widget-content");
    },
    _keydown: function(t) {
      var i,
        s,
        n,
        a,
        o = !0;
      switch (t.keyCode) {
        case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);
          break;
        case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);
          break;
        case e.ui.keyCode.HOME:
          this._move("first", "first", t);
          break;
        case e.ui.keyCode.END:
          this._move("last", "last", t);
          break;
        case e.ui.keyCode.UP:
          this.previous(t);
          break;
        case e.ui.keyCode.DOWN:
          this.next(t);
          break;
        case e.ui.keyCode.LEFT:
          this.collapse(t);
          break;
        case e.ui.keyCode.RIGHT:
          this.active &&
            !this.active.is(".ui-state-disabled") &&
            this.expand(t);
          break;
        case e.ui.keyCode.ENTER:
        case e.ui.keyCode.SPACE:
          this._activate(t);
          break;
        case e.ui.keyCode.ESCAPE:
          this.collapse(t);
          break;
        default:
          (o = !1), (s = this.previousFilter || ""), (n = String.fromCharCode(
            t.keyCode
          )), (a = !1), clearTimeout(this.filterTimer), n === s
            ? (a = !0)
            : (n = s + n), (i = this._filterMenuItems(n)), (i =
            a && -1 !== i.index(this.active.next())
              ? this.active.nextAll(".ui-menu-item")
              : i), i.length ||
            (
              (n = String.fromCharCode(t.keyCode)),
              (i = this._filterMenuItems(n))
            ), i.length
            ? (
                this.focus(t, i),
                (this.previousFilter = n),
                (this.filterTimer = this._delay(function() {
                  delete this.previousFilter;
                }, 1e3))
              )
            : delete this.previousFilter;
      }
      o && t.preventDefault();
    },
    _activate: function(e) {
      this.active.is(".ui-state-disabled") ||
        (this.active.is("[aria-haspopup='true']")
          ? this.expand(e)
          : this.select(e));
    },
    refresh: function() {
      var t,
        i,
        s = this,
        n = this.options.icons.submenu,
        a = this.element.find(this.options.menus);
      this.element.toggleClass(
        "ui-menu-icons",
        !!this.element.find(".ui-icon").length
      ), a
        .filter(":not(.ui-menu)")
        .addClass("ui-menu ui-widget ui-widget-content ui-front")
        .hide()
        .attr({
          role: this.options.role,
          "aria-hidden": "true",
          "aria-expanded": "false"
        })
        .each(function() {
          var t = e(this),
            i = t.parent(),
            s = e("<span>")
              .addClass("ui-menu-icon ui-icon " + n)
              .data("ui-menu-submenu-carat", !0);
          i
            .attr("aria-haspopup", "true")
            .prepend(s), t.attr("aria-labelledby", i.attr("id"));
        }), (t = a.add(this.element)), (i = t.find(this.options.items)), i
        .not(".ui-menu-item")
        .each(function() {
          var t = e(this);
          s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider");
        }), i
        .not(".ui-menu-item, .ui-menu-divider")
        .addClass("ui-menu-item")
        .uniqueId()
        .attr({ tabIndex: -1, role: this._itemRole() }), i
        .filter(".ui-state-disabled")
        .attr("aria-disabled", "true"), this.active &&
        !e.contains(this.element[0], this.active[0]) &&
        this.blur();
    },
    _itemRole: function() {
      return { menu: "menuitem", listbox: "option" }[this.options.role];
    },
    _setOption: function(e, t) {
      "icons" === e &&
        this.element
          .find(".ui-menu-icon")
          .removeClass(this.options.icons.submenu)
          .addClass(t.submenu), "disabled" === e &&
        this.element
          .toggleClass("ui-state-disabled", !!t)
          .attr("aria-disabled", t), this._super(e, t);
    },
    focus: function(e, t) {
      var i, s;
      this.blur(e, e && "focus" === e.type), this._scrollIntoView(
        t
      ), (this.active = t.first()), (s = this.active
        .addClass("ui-state-focus")
        .removeClass("ui-state-active")), this.options.role &&
        this.element.attr(
          "aria-activedescendant",
          s.attr("id")
        ), this.active
        .parent()
        .closest(".ui-menu-item")
        .addClass("ui-state-active"), e && "keydown" === e.type
        ? this._close()
        : (this.timer = this._delay(function() {
            this._close();
          }, this.delay)), (i = t.children(".ui-menu")), i.length &&
        e &&
        /^mouse/.test(e.type) &&
        this._startOpening(
          i
        ), (this.activeMenu = t.parent()), this._trigger("focus", e, {
        item: t
      });
    },
    _scrollIntoView: function(t) {
      var i, s, n, a, o, r;
      this._hasScroll() &&
        (
          (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0),
          (n = t.offset().top - this.activeMenu.offset().top - i - s),
          (a = this.activeMenu.scrollTop()),
          (o = this.activeMenu.height()),
          (r = t.outerHeight()),
          0 > n
            ? this.activeMenu.scrollTop(a + n)
            : n + r > o && this.activeMenu.scrollTop(a + n - o + r)
        );
    },
    blur: function(e, t) {
      t || clearTimeout(this.timer), this.active &&
        (
          this.active.removeClass("ui-state-focus"),
          (this.active = null),
          this._trigger("blur", e, { item: this.active })
        );
    },
    _startOpening: function(e) {
      clearTimeout(this.timer), "true" === e.attr("aria-hidden") &&
        (this.timer = this._delay(function() {
          this._close(), this._open(e);
        }, this.delay));
    },
    _open: function(t) {
      var i = e.extend({ of: this.active }, this.options.position);
      clearTimeout(this.timer), this.element
        .find(".ui-menu")
        .not(t.parents(".ui-menu"))
        .hide()
        .attr("aria-hidden", "true"), t
        .show()
        .removeAttr("aria-hidden")
        .attr("aria-expanded", "true")
        .position(i);
    },
    collapseAll: function(t, i) {
      clearTimeout(this.timer), (this.timer = this._delay(function() {
        var s = i
          ? this.element
          : e(t && t.target).closest(this.element.find(".ui-menu"));
        s.length ||
          (s = this
            .element), this._close(s), this.blur(t), (this.activeMenu = s);
      }, this.delay));
    },
    _close: function(e) {
      e || (e = this.active ? this.active.parent() : this.element), e
        .find(".ui-menu")
        .hide()
        .attr("aria-hidden", "true")
        .attr("aria-expanded", "false")
        .end()
        .find(".ui-state-active")
        .not(".ui-state-focus")
        .removeClass("ui-state-active");
    },
    _closeOnDocumentClick: function(t) {
      return !e(t.target).closest(".ui-menu").length;
    },
    _isDivider: function(e) {
      return !/[^\-\u2014\u2013\s]/.test(e.text());
    },
    collapse: function(e) {
      var t =
        this.active &&
        this.active.parent().closest(".ui-menu-item", this.element);
      t && t.length && (this._close(), this.focus(e, t));
    },
    expand: function(e) {
      var t =
        this.active &&
        this.active.children(".ui-menu ").find(this.options.items).first();
      t &&
        t.length &&
        (
          this._open(t.parent()),
          this._delay(function() {
            this.focus(e, t);
          })
        );
    },
    next: function(e) {
      this._move("next", "first", e);
    },
    previous: function(e) {
      this._move("prev", "last", e);
    },
    isFirstItem: function() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function(e, t, i) {
      var s;
      this.active &&
        (s =
          "first" === e || "last" === e
            ? this.active
                ["first" === e ? "prevAll" : "nextAll"](".ui-menu-item")
                .eq(-1)
            : this.active[e + "All"](".ui-menu-item").eq(0)), (s &&
        s.length &&
        this.active) ||
        (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s);
    },
    nextPage: function(t) {
      var i, s, n;
      return this.active
        ? (
            this.isLastItem() ||
              (this._hasScroll()
                ? (
                    (s = this.active.offset().top),
                    (n = this.element.height()),
                    this.active.nextAll(".ui-menu-item").each(function() {
                      return (i = e(this)), 0 > i.offset().top - s - n;
                    }),
                    this.focus(t, i)
                  )
                : this.focus(
                    t,
                    this.activeMenu
                      .find(this.options.items)
                      [this.active ? "last" : "first"]()
                  )),
            void 0
          )
        : (this.next(t), void 0);
    },
    previousPage: function(t) {
      var i, s, n;
      return this.active
        ? (
            this.isFirstItem() ||
              (this._hasScroll()
                ? (
                    (s = this.active.offset().top),
                    (n = this.element.height()),
                    this.active.prevAll(".ui-menu-item").each(function() {
                      return (i = e(this)), i.offset().top - s + n > 0;
                    }),
                    this.focus(t, i)
                  )
                : this.focus(
                    t,
                    this.activeMenu.find(this.options.items).first()
                  )),
            void 0
          )
        : (this.next(t), void 0);
    },
    _hasScroll: function() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function(t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");
      var i = { item: this.active };
      this.active.has(".ui-menu").length ||
        this.collapseAll(t, !0), this._trigger("select", t, i);
    },
    _filterMenuItems: function(t) {
      var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
        s = RegExp("^" + i, "i");
      return this.activeMenu
        .find(this.options.items)
        .filter(".ui-menu-item")
        .filter(function() {
          return s.test(e.trim(e(this).text()));
        });
    }
  }), e.widget("ui.autocomplete", {
    version: "1.11.4",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: { my: "left top", at: "left bottom", collision: "none" },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function() {
      var t,
        i,
        s,
        n = this.element[0].nodeName.toLowerCase(),
        a = "textarea" === n,
        o = "input" === n;
      (this.isMultiLine = a
        ? !0
        : o
          ? !1
          : this.element.prop(
              "isContentEditable"
            )), (this.valueMethod = this.element[
        a || o ? "val" : "text"
      ]), (this.isNewMenu = !0), this.element
        .addClass("ui-autocomplete-input")
        .attr("autocomplete", "off"), this._on(this.element, {
        keydown: function(n) {
          if (this.element.prop("readOnly"))
            return (t = !0), (s = !0), (i = !0), void 0;
          (t = !1), (s = !1), (i = !1);
          var a = e.ui.keyCode;
          switch (n.keyCode) {
            case a.PAGE_UP:
              (t = !0), this._move("previousPage", n);
              break;
            case a.PAGE_DOWN:
              (t = !0), this._move("nextPage", n);
              break;
            case a.UP:
              (t = !0), this._keyEvent("previous", n);
              break;
            case a.DOWN:
              (t = !0), this._keyEvent("next", n);
              break;
            case a.ENTER:
              this.menu.active &&
                ((t = !0), n.preventDefault(), this.menu.select(n));
              break;
            case a.TAB:
              this.menu.active && this.menu.select(n);
              break;
            case a.ESCAPE:
              this.menu.element.is(":visible") &&
                (
                  this.isMultiLine || this._value(this.term),
                  this.close(n),
                  n.preventDefault()
                );
              break;
            default:
              (i = !0), this._searchTimeout(n);
          }
        },
        keypress: function(s) {
          if (t)
            return (t = !1), (!this.isMultiLine ||
              this.menu.element.is(":visible")) &&
              s.preventDefault(), void 0;
          if (!i) {
            var n = e.ui.keyCode;
            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move("previousPage", s);
                break;
              case n.PAGE_DOWN:
                this._move("nextPage", s);
                break;
              case n.UP:
                this._keyEvent("previous", s);
                break;
              case n.DOWN:
                this._keyEvent("next", s);
            }
          }
        },
        input: function(e) {
          return s
            ? ((s = !1), e.preventDefault(), void 0)
            : (this._searchTimeout(e), void 0);
        },
        focus: function() {
          (this.selectedItem = null), (this.previous = this._value());
        },
        blur: function(e) {
          return this.cancelBlur
            ? (delete this.cancelBlur, void 0)
            : (
                clearTimeout(this.searching),
                this.close(e),
                this._change(e),
                void 0
              );
        }
      }), this._initSource(), (this.menu = e("<ul>")
        .addClass("ui-autocomplete ui-front")
        .appendTo(this._appendTo())
        .menu({ role: null })
        .hide()
        .menu("instance")), this._on(this.menu.element, {
        mousedown: function(t) {
          t.preventDefault(), (this.cancelBlur = !0), this._delay(function() {
            delete this.cancelBlur;
          });
          var i = this.menu.element[0];
          e(t.target).closest(".ui-menu-item").length ||
            this._delay(function() {
              var t = this;
              this.document.one("mousedown", function(s) {
                s.target === t.element[0] ||
                  s.target === i ||
                  e.contains(i, s.target) ||
                  t.close();
              });
            });
        },
        menufocus: function(t, i) {
          var s, n;
          return this.isNewMenu &&
          (
            (this.isNewMenu = !1),
            t.originalEvent && /^mouse/.test(t.originalEvent.type)
          )
            ? (
                this.menu.blur(),
                this.document.one("mousemove", function() {
                  e(t.target).trigger(t.originalEvent);
                }),
                void 0
              )
            : (
                (n = i.item.data("ui-autocomplete-item")),
                !1 !== this._trigger("focus", t, { item: n }) &&
                  t.originalEvent &&
                  /^key/.test(t.originalEvent.type) &&
                  this._value(n.value),
                (s = i.item.attr("aria-label") || n.value),
                s &&
                  e.trim(s).length &&
                  (
                    this.liveRegion.children().hide(),
                    e("<div>").text(s).appendTo(this.liveRegion)
                  ),
                void 0
              );
        },
        menuselect: function(e, t) {
          var i = t.item.data("ui-autocomplete-item"),
            s = this.previous;
          this.element[0] !== this.document[0].activeElement &&
            (
              this.element.focus(),
              (this.previous = s),
              this._delay(function() {
                (this.previous = s), (this.selectedItem = i);
              })
            ), !1 !== this._trigger("select", e, { item: i }) &&
            this._value(i.value), (this.term = this._value()), this.close(
            e
          ), (this.selectedItem = i);
        }
      }), (this.liveRegion = e("<span>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      })
        .addClass("ui-helper-hidden-accessible")
        .appendTo(this.document[0].body)), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function() {
      clearTimeout(this.searching), this.element
        .removeClass("ui-autocomplete-input")
        .removeAttr(
          "autocomplete"
        ), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function(e, t) {
      this._super(e, t), "source" === e && this._initSource(), "appendTo" ===
        e && this.menu.element.appendTo(this._appendTo()), "disabled" === e &&
        t &&
        this.xhr &&
        this.xhr.abort();
    },
    _appendTo: function() {
      var t = this.options.appendTo;
      return t &&
        (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), (t &&
        t[0]) ||
        (t = this.element.closest(".ui-front")), t.length ||
        (t = this.document[0].body), t;
    },
    _initSource: function() {
      var t,
        i,
        s = this;
      e.isArray(this.options.source)
        ? (
            (t = this.options.source),
            (this.source = function(i, s) {
              s(e.ui.autocomplete.filter(t, i.term));
            })
          )
        : "string" == typeof this.options.source
          ? (
              (i = this.options.source),
              (this.source = function(t, n) {
                s.xhr && s.xhr.abort(), (s.xhr = e.ajax({
                  url: i,
                  data: t,
                  dataType: "json",
                  success: function(e) {
                    n(e);
                  },
                  error: function() {
                    n([]);
                  }
                }));
              })
            )
          : (this.source = this.options.source);
    },
    _searchTimeout: function(e) {
      clearTimeout(this.searching), (this.searching = this._delay(function() {
        var t = this.term === this._value(),
          i = this.menu.element.is(":visible"),
          s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
        (!t || (t && !i && !s)) &&
          ((this.selectedItem = null), this.search(null, e));
      }, this.options.delay));
    },
    search: function(e, t) {
      return (e =
        null != e ? e : this._value()), (this.term = this._value()), e.length <
      this.options.minLength
        ? this.close(t)
        : this._trigger("search", t) !== !1 ? this._search(e) : void 0;
    },
    _search: function(e) {
      this.pending++, this.element.addClass(
        "ui-autocomplete-loading"
      ), (this.cancelSearch = !1), this.source({ term: e }, this._response());
    },
    _response: function() {
      var t = ++this.requestIndex;
      return e.proxy(function(e) {
        t === this.requestIndex &&
          this.__response(
            e
          ), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
      }, this);
    },
    __response: function(e) {
      e && (e = this._normalize(e)), this._trigger("response", null, {
        content: e
      }), !this.options.disabled && e && e.length && !this.cancelSearch
        ? (this._suggest(e), this._trigger("open"))
        : this._close();
    },
    close: function(e) {
      (this.cancelSearch = !0), this._close(e);
    },
    _close: function(e) {
      this.menu.element.is(":visible") &&
        (
          this.menu.element.hide(),
          this.menu.blur(),
          (this.isNewMenu = !0),
          this._trigger("close", e)
        );
    },
    _change: function(e) {
      this.previous !== this._value() &&
        this._trigger("change", e, { item: this.selectedItem });
    },
    _normalize: function(t) {
      return t.length && t[0].label && t[0].value
        ? t
        : e.map(t, function(t) {
            return "string" == typeof t
              ? { label: t, value: t }
              : e.extend({}, t, {
                  label: t.label || t.value,
                  value: t.value || t.label
                });
          });
    },
    _suggest: function(t) {
      var i = this.menu.element.empty();
      this._renderMenu(
        i,
        t
      ), (this.isNewMenu = !0), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(
        e.extend({ of: this.element }, this.options.position)
      ), this.options.autoFocus && this.menu.next();
    },
    _resizeMenu: function() {
      var e = this.menu.element;
      e.outerWidth(
        Math.max(e.width("").outerWidth() + 1, this.element.outerWidth())
      );
    },
    _renderMenu: function(t, i) {
      var s = this;
      e.each(i, function(e, i) {
        s._renderItemData(t, i);
      });
    },
    _renderItemData: function(e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t);
    },
    _renderItem: function(t, i) {
      return e("<li>").text(i.label).appendTo(t);
    },
    _move: function(e, t) {
      return this.menu.element.is(":visible")
        ? (this.menu.isFirstItem() && /^previous/.test(e)) ||
          (this.menu.isLastItem() && /^next/.test(e))
          ? (
              this.isMultiLine || this._value(this.term),
              this.menu.blur(),
              void 0
            )
          : (this.menu[e](t), void 0)
        : (this.search(null, t), void 0);
    },
    widget: function() {
      return this.menu.element;
    },
    _value: function() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function(e, t) {
      (!this.isMultiLine || this.menu.element.is(":visible")) &&
        (this._move(e, t), t.preventDefault());
    }
  }), e.extend(e.ui.autocomplete, {
    escapeRegex: function(e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function(t, i) {
      var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
      return e.grep(t, function(e) {
        return s.test(e.label || e.value || e);
      });
    }
  }), e.widget("ui.autocomplete", e.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function(e) {
          return (
            e +
            (e > 1 ? " results are" : " result is") +
            " available, use up and down arrow keys to navigate."
          );
        }
      }
    },
    __response: function(t) {
      var i;
      this._superApply(arguments), this.options.disabled ||
        this.cancelSearch ||
        (
          (i =
            t && t.length
              ? this.options.messages.results(t.length)
              : this.options.messages.noResults),
          this.liveRegion.children().hide(),
          e("<div>").text(i).appendTo(this.liveRegion)
        );
    }
  }), e.ui.autocomplete;
  var c,
    p = "ui-button ui-widget ui-state-default ui-corner-all",
    f =
      "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    m = function() {
      var t = e(this);
      setTimeout(function() {
        t.find(":ui-button").button("refresh");
      }, 1);
    },
    g = function(t) {
      var i = t.name,
        s = t.form,
        n = e([]);
      return i &&
        (
          (i = i.replace(/'/g, "\\'")),
          (n = s
            ? e(s).find("[name='" + i + "'][type=radio]")
            : e(
                "[name='" + i + "'][type=radio]",
                t.ownerDocument
              ).filter(function() {
                return !this.form;
              }))
        ), n;
    };
  e.widget("ui.button", {
    version: "1.11.4",
    defaultElement: "<button>",
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: { primary: null, secondary: null }
    },
    _create: function() {
      this.element
        .closest("form")
        .unbind("reset" + this.eventNamespace)
        .bind("reset" + this.eventNamespace, m), "boolean" !=
      typeof this.options.disabled
        ? (this.options.disabled = !!this.element.prop("disabled"))
        : this.element.prop(
            "disabled",
            this.options.disabled
          ), this._determineButtonType(), (this.hasTitle = !!this.buttonElement.attr(
        "title"
      ));
      var t = this,
        i = this.options,
        s = "checkbox" === this.type || "radio" === this.type,
        n = s ? "" : "ui-state-active";
      null === i.label &&
        (i.label =
          "input" === this.type
            ? this.buttonElement.val()
            : this.buttonElement.html()), this._hoverable(
        this.buttonElement
      ), this.buttonElement
        .addClass(p)
        .attr("role", "button")
        .bind("mouseenter" + this.eventNamespace, function() {
          i.disabled || (this === c && e(this).addClass("ui-state-active"));
        })
        .bind("mouseleave" + this.eventNamespace, function() {
          i.disabled || e(this).removeClass(n);
        })
        .bind("click" + this.eventNamespace, function(e) {
          i.disabled && (e.preventDefault(), e.stopImmediatePropagation());
        }), this._on({
        focus: function() {
          this.buttonElement.addClass("ui-state-focus");
        },
        blur: function() {
          this.buttonElement.removeClass("ui-state-focus");
        }
      }), s &&
        this.element.bind("change" + this.eventNamespace, function() {
          t.refresh();
        }), "checkbox" === this.type
        ? this.buttonElement.bind("click" + this.eventNamespace, function() {
            return i.disabled ? !1 : void 0;
          })
        : "radio" === this.type
          ? this.buttonElement.bind("click" + this.eventNamespace, function() {
              if (i.disabled) return !1;
              e(this).addClass(
                "ui-state-active"
              ), t.buttonElement.attr("aria-pressed", "true");
              var s = t.element[0];
              g(s)
                .not(s)
                .map(function() {
                  return e(this).button("widget")[0];
                })
                .removeClass("ui-state-active")
                .attr("aria-pressed", "false");
            })
          : (
              this.buttonElement
                .bind("mousedown" + this.eventNamespace, function() {
                  return i.disabled
                    ? !1
                    : (
                        e(this).addClass("ui-state-active"),
                        (c = this),
                        t.document.one("mouseup", function() {
                          c = null;
                        }),
                        void 0
                      );
                })
                .bind("mouseup" + this.eventNamespace, function() {
                  return i.disabled
                    ? !1
                    : (e(this).removeClass("ui-state-active"), void 0);
                })
                .bind("keydown" + this.eventNamespace, function(t) {
                  return i.disabled
                    ? !1
                    : (
                        (t.keyCode === e.ui.keyCode.SPACE ||
                          t.keyCode === e.ui.keyCode.ENTER) &&
                          e(this).addClass("ui-state-active"),
                        void 0
                      );
                })
                .bind(
                  "keyup" + this.eventNamespace + " blur" + this.eventNamespace,
                  function() {
                    e(this).removeClass("ui-state-active");
                  }
                ),
              this.buttonElement.is("a") &&
                this.buttonElement.keyup(function(t) {
                  t.keyCode === e.ui.keyCode.SPACE && e(this).click();
                })
            ), this._setOption("disabled", i.disabled), this._resetButton();
    },
    _determineButtonType: function() {
      var e, t, i;
      (this.type = this.element.is("[type=checkbox]")
        ? "checkbox"
        : this.element.is("[type=radio]")
          ? "radio"
          : this.element.is("input") ? "input" : "button"), "checkbox" ===
        this.type || "radio" === this.type
        ? (
            (e = this.element.parents().last()),
            (t = "label[for='" + this.element.attr("id") + "']"),
            (this.buttonElement = e.find(t)),
            this.buttonElement.length ||
              (
                (e = e.length ? e.siblings() : this.element.siblings()),
                (this.buttonElement = e.filter(t)),
                this.buttonElement.length || (this.buttonElement = e.find(t))
              ),
            this.element.addClass("ui-helper-hidden-accessible"),
            (i = this.element.is(":checked")),
            i && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.prop("aria-pressed", i)
          )
        : (this.buttonElement = this.element);
    },
    widget: function() {
      return this.buttonElement;
    },
    _destroy: function() {
      this.element.removeClass(
        "ui-helper-hidden-accessible"
      ), this.buttonElement
        .removeClass(p + " ui-state-active " + f)
        .removeAttr("role")
        .removeAttr("aria-pressed")
        .html(this.buttonElement.find(".ui-button-text").html()), this
        .hasTitle || this.buttonElement.removeAttr("title");
    },
    _setOption: function(e, t) {
      return this._super(e, t), "disabled" === e
        ? (
            this.widget().toggleClass("ui-state-disabled", !!t),
            this.element.prop("disabled", !!t),
            t &&
              ("checkbox" === this.type || "radio" === this.type
                ? this.buttonElement.removeClass("ui-state-focus")
                : this.buttonElement.removeClass(
                    "ui-state-focus ui-state-active"
                  )),
            void 0
          )
        : (this._resetButton(), void 0);
    },
    refresh: function() {
      var t = this.element.is("input, button")
        ? this.element.is(":disabled")
        : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOption("disabled", t), "radio" ===
      this.type
        ? g(this.element[0]).each(function() {
            e(this).is(":checked")
              ? e(this)
                  .button("widget")
                  .addClass("ui-state-active")
                  .attr("aria-pressed", "true")
              : e(this)
                  .button("widget")
                  .removeClass("ui-state-active")
                  .attr("aria-pressed", "false");
          })
        : "checkbox" === this.type &&
          (this.element.is(":checked")
            ? this.buttonElement
                .addClass("ui-state-active")
                .attr("aria-pressed", "true")
            : this.buttonElement
                .removeClass("ui-state-active")
                .attr("aria-pressed", "false"));
    },
    _resetButton: function() {
      if ("input" === this.type)
        return this.options.label &&
          this.element.val(this.options.label), void 0;
      var t = this.buttonElement.removeClass(f),
        i = e("<span></span>", this.document[0])
          .addClass("ui-button-text")
          .html(this.options.label)
          .appendTo(t.empty())
          .text(),
        s = this.options.icons,
        n = s.primary && s.secondary,
        a = [];
      s.primary || s.secondary
        ? (
            this.options.text &&
              a.push(
                "ui-button-text-icon" +
                  (n ? "s" : s.primary ? "-primary" : "-secondary")
              ),
            s.primary &&
              t.prepend(
                "<span class='ui-button-icon-primary ui-icon " +
                  s.primary +
                  "'></span>"
              ),
            s.secondary &&
              t.append(
                "<span class='ui-button-icon-secondary ui-icon " +
                  s.secondary +
                  "'></span>"
              ),
            this.options.text ||
              (
                a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"),
                this.hasTitle || t.attr("title", e.trim(i))
              )
          )
        : a.push("ui-button-text-only"), t.addClass(a.join(" "));
    }
  }), e.widget("ui.buttonset", {
    version: "1.11.4",
    options: {
      items:
        "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
    },
    _create: function() {
      this.element.addClass("ui-buttonset");
    },
    _init: function() {
      this.refresh();
    },
    _setOption: function(e, t) {
      "disabled" === e && this.buttons.button("option", e, t), this._super(
        e,
        t
      );
    },
    refresh: function() {
      var t = "rtl" === this.element.css("direction"),
        i = this.element.find(this.options.items),
        s = i.filter(":ui-button");
      i.not(":ui-button").button(), s.button("refresh"), (this.buttons = i
        .map(function() {
          return e(this).button("widget")[0];
        })
        .removeClass("ui-corner-all ui-corner-left ui-corner-right")
        .filter(":first")
        .addClass(t ? "ui-corner-right" : "ui-corner-left")
        .end()
        .filter(":last")
        .addClass(t ? "ui-corner-left" : "ui-corner-right")
        .end()
        .end());
    },
    _destroy: function() {
      this.element.removeClass("ui-buttonset"), this.buttons
        .map(function() {
          return e(this).button("widget")[0];
        })
        .removeClass("ui-corner-left ui-corner-right")
        .end()
        .button("destroy");
    }
  }), e.ui.button, e.extend(e.ui, { datepicker: { version: "1.11.4" } });
  var v;
  e.extend(n.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv;
    },
    setDefaults: function(e) {
      return r(this._defaults, e || {}), this;
    },
    _attachDatepicker: function(t, i) {
      var s, n, a;
      (s = t.nodeName.toLowerCase()), (n = "div" === s || "span" === s), t.id ||
        ((this.uuid += 1), (t.id = "dp" + this.uuid)), (a = this._newInst(
        e(t),
        n
      )), (a.settings = e.extend({}, i || {})), "input" === s
        ? this._connectDatepicker(t, a)
        : n && this._inlineDatepicker(t, a);
    },
    _newInst: function(t, i) {
      var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: s,
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i
          ? a(
              e(
                "<div class='" +
                  this._inlineClass +
                  " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
              )
            )
          : this.dpDiv
      };
    },
    _connectDatepicker: function(t, i) {
      var s = e(t);
      (i.append = e([])), (i.trigger = e([])), s.hasClass(
        this.markerClassName
      ) ||
        (
          this._attachments(s, i),
          s
            .addClass(this.markerClassName)
            .keydown(this._doKeyDown)
            .keypress(this._doKeyPress)
            .keyup(this._doKeyUp),
          this._autoSize(i),
          e.data(t, "datepicker", i),
          i.settings.disabled && this._disableDatepicker(t)
        );
    },
    _attachments: function(t, i) {
      var s,
        n,
        a,
        o = this._get(i, "appendText"),
        r = this._get(i, "isRTL");
      i.append && i.append.remove(), o &&
        (
          (i.append = e(
            "<span class='" + this._appendClass + "'>" + o + "</span>"
          )),
          t[r ? "before" : "after"](i.append)
        ), t.unbind("focus", this._showDatepicker), i.trigger &&
        i.trigger.remove(), (s = this._get(i, "showOn")), ("focus" === s ||
        "both" === s) &&
        t.focus(this._showDatepicker), ("button" === s || "both" === s) &&
        (
          (n = this._get(i, "buttonText")),
          (a = this._get(i, "buttonImage")),
          (i.trigger = e(
            this._get(i, "buttonImageOnly")
              ? e("<img/>")
                  .addClass(this._triggerClass)
                  .attr({ src: a, alt: n, title: n })
              : e("<button type='button'></button>")
                  .addClass(this._triggerClass)
                  .html(a ? e("<img/>").attr({ src: a, alt: n, title: n }) : n)
          )),
          t[r ? "before" : "after"](i.trigger),
          i.trigger.click(function() {
            return e.datepicker._datepickerShowing &&
            e.datepicker._lastInput === t[0]
              ? e.datepicker._hideDatepicker()
              : e.datepicker._datepickerShowing &&
                e.datepicker._lastInput !== t[0]
                ? (
                    e.datepicker._hideDatepicker(),
                    e.datepicker._showDatepicker(t[0])
                  )
                : e.datepicker._showDatepicker(t[0]), !1;
          })
        );
    },
    _autoSize: function(e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t,
          i,
          s,
          n,
          a = new Date(2009, 11, 20),
          o = this._get(e, "dateFormat");
        o.match(/[DM]/) &&
          (
            (t = function(e) {
              for (i = 0, s = 0, n = 0; e.length > n; n++)
                e[n].length > i && ((i = e[n].length), (s = n));
              return s;
            }),
            a.setMonth(
              t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
            a.setDate(
              t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                20 -
                a.getDay()
            )
          ), e.input.attr("size", this._formatDate(e, a).length);
      }
    },
    _inlineDatepicker: function(t, i) {
      var s = e(t);
      s.hasClass(this.markerClassName) ||
        (
          s.addClass(this.markerClassName).append(i.dpDiv),
          e.data(t, "datepicker", i),
          this._setDate(i, this._getDefaultDate(i), !0),
          this._updateDatepicker(i),
          this._updateAlternate(i),
          i.settings.disabled && this._disableDatepicker(t),
          i.dpDiv.css("display", "block")
        );
    },
    _dialogDatepicker: function(t, i, s, n, a) {
      var o,
        h,
        l,
        u,
        d,
        c = this._dialogInst;
      return c ||
        (
          (this.uuid += 1),
          (o = "dp" + this.uuid),
          (this._dialogInput = e(
            "<input type='text' id='" +
              o +
              "' style='position: absolute; top: -100px; width: 0px;'/>"
          )),
          this._dialogInput.keydown(this._doKeyDown),
          e("body").append(this._dialogInput),
          (c = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (c.settings = {}),
          e.data(this._dialogInput[0], "datepicker", c)
        ), r(c.settings, n || {}), (i =
        i && i.constructor === Date
          ? this._formatDate(c, i)
          : i), this._dialogInput.val(i), (this._pos = a
        ? a.length ? a : [a.pageX, a.pageY]
        : null), this._pos ||
        (
          (h = document.documentElement.clientWidth),
          (l = document.documentElement.clientHeight),
          (u = document.documentElement.scrollLeft || document.body.scrollLeft),
          (d = document.documentElement.scrollTop || document.body.scrollTop),
          (this._pos = [h / 2 - 100 + u, l / 2 - 150 + d])
        ), this._dialogInput
        .css("left", this._pos[0] + 20 + "px")
        .css(
          "top",
          this._pos[1] + "px"
        ), (c.settings.onSelect = s), (this._inDialog = !0), this.dpDiv.addClass(
        this._dialogClass
      ), this._showDatepicker(this._dialogInput[0]), e.blockUI &&
        e.blockUI(this.dpDiv), e.data(
        this._dialogInput[0],
        "datepicker",
        c
      ), this;
    },
    _destroyDatepicker: function(t) {
      var i,
        s = e(t),
        n = e.data(t, "datepicker");
      s.hasClass(this.markerClassName) &&
        (
          (i = t.nodeName.toLowerCase()),
          e.removeData(t, "datepicker"),
          "input" === i
            ? (
                n.append.remove(),
                n.trigger.remove(),
                s
                  .removeClass(this.markerClassName)
                  .unbind("focus", this._showDatepicker)
                  .unbind("keydown", this._doKeyDown)
                  .unbind("keypress", this._doKeyPress)
                  .unbind("keyup", this._doKeyUp)
              )
            : ("div" === i || "span" === i) &&
              s.removeClass(this.markerClassName).empty(),
          v === n && (v = null)
        );
    },
    _enableDatepicker: function(t) {
      var i,
        s,
        n = e(t),
        a = e.data(t, "datepicker");
      n.hasClass(this.markerClassName) &&
        (
          (i = t.nodeName.toLowerCase()),
          "input" === i
            ? (
                (t.disabled = !1),
                a.trigger
                  .filter("button")
                  .each(function() {
                    this.disabled = !1;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "1.0", cursor: "" })
              )
            : ("div" === i || "span" === i) &&
              (
                (s = n.children("." + this._inlineClass)),
                s.children().removeClass("ui-state-disabled"),
                s
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !1)
              ),
          (this._disabledInputs = e.map(this._disabledInputs, function(e) {
            return e === t ? null : e;
          }))
        );
    },
    _disableDatepicker: function(t) {
      var i,
        s,
        n = e(t),
        a = e.data(t, "datepicker");
      n.hasClass(this.markerClassName) &&
        (
          (i = t.nodeName.toLowerCase()),
          "input" === i
            ? (
                (t.disabled = !0),
                a.trigger
                  .filter("button")
                  .each(function() {
                    this.disabled = !0;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "0.5", cursor: "default" })
              )
            : ("div" === i || "span" === i) &&
              (
                (s = n.children("." + this._inlineClass)),
                s.children().addClass("ui-state-disabled"),
                s
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !0)
              ),
          (this._disabledInputs = e.map(this._disabledInputs, function(e) {
            return e === t ? null : e;
          })),
          (this._disabledInputs[this._disabledInputs.length] = t)
        );
    },
    _isDisabledDatepicker: function(e) {
      if (!e) return !1;
      for (var t = 0; this._disabledInputs.length > t; t++)
        if (this._disabledInputs[t] === e) return !0;
      return !1;
    },
    _getInst: function(t) {
      try {
        return e.data(t, "datepicker");
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function(t, i, s) {
      var n,
        a,
        o,
        h,
        l = this._getInst(t);
      return 2 === arguments.length && "string" == typeof i
        ? "defaults" === i
          ? e.extend({}, e.datepicker._defaults)
          : l
            ? "all" === i ? e.extend({}, l.settings) : this._get(l, i)
            : null
        : (
            (n = i || {}),
            "string" == typeof i && ((n = {}), (n[i] = s)),
            l &&
              (
                this._curInst === l && this._hideDatepicker(),
                (a = this._getDateDatepicker(t, !0)),
                (o = this._getMinMaxDate(l, "min")),
                (h = this._getMinMaxDate(l, "max")),
                r(l.settings, n),
                null !== o &&
                  void 0 !== n.dateFormat &&
                  void 0 === n.minDate &&
                  (l.settings.minDate = this._formatDate(l, o)),
                null !== h &&
                  void 0 !== n.dateFormat &&
                  void 0 === n.maxDate &&
                  (l.settings.maxDate = this._formatDate(l, h)),
                "disabled" in n &&
                  (n.disabled
                    ? this._disableDatepicker(t)
                    : this._enableDatepicker(t)),
                this._attachments(e(t), l),
                this._autoSize(l),
                this._setDate(l, a),
                this._updateAlternate(l),
                this._updateDatepicker(l)
              ),
            void 0
          );
    },
    _changeDatepicker: function(e, t, i) {
      this._optionDatepicker(e, t, i);
    },
    _refreshDatepicker: function(e) {
      var t = this._getInst(e);
      t && this._updateDatepicker(t);
    },
    _setDateDatepicker: function(e, t) {
      var i = this._getInst(e);
      i &&
        (
          this._setDate(i, t),
          this._updateDatepicker(i),
          this._updateAlternate(i)
        );
    },
    _getDateDatepicker: function(e, t) {
      var i = this._getInst(e);
      return i && !i.inline && this._setDateFromField(i, t), i
        ? this._getDate(i)
        : null;
    },
    _doKeyDown: function(t) {
      var i,
        s,
        n,
        a = e.datepicker._getInst(t.target),
        o = !0,
        r = a.dpDiv.is(".ui-datepicker-rtl");
      if (((a._keyEvent = !0), e.datepicker._datepickerShowing))
        switch (t.keyCode) {
          case 9:
            e.datepicker._hideDatepicker(), (o = !1);
            break;
          case 13:
            return (n = e(
              "td." +
                e.datepicker._dayOverClass +
                ":not(." +
                e.datepicker._currentClass +
                ")",
              a.dpDiv
            )), n[0] &&
              e.datepicker._selectDay(
                t.target,
                a.selectedMonth,
                a.selectedYear,
                n[0]
              ), (i = e.datepicker._get(a, "onSelect")), i
              ? (
                  (s = e.datepicker._formatDate(a)),
                  i.apply(a.input ? a.input[0] : null, [s, a])
                )
              : e.datepicker._hideDatepicker(), !1;
          case 27:
            e.datepicker._hideDatepicker();
            break;
          case 33:
            e.datepicker._adjustDate(
              t.target,
              t.ctrlKey
                ? -e.datepicker._get(a, "stepBigMonths")
                : -e.datepicker._get(a, "stepMonths"),
              "M"
            );
            break;
          case 34:
            e.datepicker._adjustDate(
              t.target,
              t.ctrlKey
                ? +e.datepicker._get(a, "stepBigMonths")
                : +e.datepicker._get(a, "stepMonths"),
              "M"
            );
            break;
          case 35:
            (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), (o =
              t.ctrlKey || t.metaKey);
            break;
          case 36:
            (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), (o =
              t.ctrlKey || t.metaKey);
            break;
          case 37:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), (o =
              t.ctrlKey || t.metaKey), t.originalEvent.altKey &&
              e.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? -e.datepicker._get(a, "stepBigMonths")
                  : -e.datepicker._get(a, "stepMonths"),
                "M"
              );
            break;
          case 38:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, -7, "D"), (o =
              t.ctrlKey || t.metaKey);
            break;
          case 39:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), (o =
              t.ctrlKey || t.metaKey), t.originalEvent.altKey &&
              e.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? +e.datepicker._get(a, "stepBigMonths")
                  : +e.datepicker._get(a, "stepMonths"),
                "M"
              );
            break;
          case 40:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, 7, "D"), (o =
              t.ctrlKey || t.metaKey);
            break;
          default:
            o = !1;
        }
      else
        36 === t.keyCode && t.ctrlKey
          ? e.datepicker._showDatepicker(this)
          : (o = !1);
      o && (t.preventDefault(), t.stopPropagation());
    },
    _doKeyPress: function(t) {
      var i,
        s,
        n = e.datepicker._getInst(t.target);
      return e.datepicker._get(n, "constrainInput")
        ? (
            (i = e.datepicker._possibleChars(
              e.datepicker._get(n, "dateFormat")
            )),
            (s = String.fromCharCode(
              null == t.charCode ? t.keyCode : t.charCode
            )),
            t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1
          )
        : void 0;
    },
    _doKeyUp: function(t) {
      var i,
        s = e.datepicker._getInst(t.target);
      if (s.input.val() !== s.lastVal)
        try {
          (i = e.datepicker.parseDate(
            e.datepicker._get(s, "dateFormat"),
            s.input ? s.input.val() : null,
            e.datepicker._getFormatConfig(s)
          )), i &&
            (
              e.datepicker._setDateFromField(s),
              e.datepicker._updateAlternate(s),
              e.datepicker._updateDatepicker(s)
            );
        } catch (n) {}
      return !0;
    },
    _showDatepicker: function(t) {
      if (
        (
          (t = t.target || t),
          "input" !== t.nodeName.toLowerCase() &&
            (t = e("input", t.parentNode)[0]),
          !e.datepicker._isDisabledDatepicker(t) &&
            e.datepicker._lastInput !== t
        )
      ) {
        var i, n, a, o, h, l, u;
        (i = e.datepicker._getInst(t)), e.datepicker._curInst &&
          e.datepicker._curInst !== i &&
          (
            e.datepicker._curInst.dpDiv.stop(!0, !0),
            i &&
              e.datepicker._datepickerShowing &&
              e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])
          ), (n = e.datepicker._get(i, "beforeShow")), (a = n
          ? n.apply(t, [t, i])
          : {}), a !== !1 &&
          (
            r(i.settings, a),
            (i.lastVal = null),
            (e.datepicker._lastInput = t),
            e.datepicker._setDateFromField(i),
            e.datepicker._inDialog && (t.value = ""),
            e.datepicker._pos ||
              (
                (e.datepicker._pos = e.datepicker._findPos(t)),
                (e.datepicker._pos[1] += t.offsetHeight)
              ),
            (o = !1),
            e(t).parents().each(function() {
              return (o |= "fixed" === e(this).css("position")), !o;
            }),
            (h = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }),
            (e.datepicker._pos = null),
            i.dpDiv.empty(),
            i.dpDiv.css({
              position: "absolute",
              display: "block",
              top: "-1000px"
            }),
            e.datepicker._updateDatepicker(i),
            (h = e.datepicker._checkOffset(i, h, o)),
            i.dpDiv.css({
              position:
                e.datepicker._inDialog && e.blockUI
                  ? "static"
                  : o ? "fixed" : "absolute",
              display: "none",
              left: h.left + "px",
              top: h.top + "px"
            }),
            i.inline ||
              (
                (l = e.datepicker._get(i, "showAnim")),
                (u = e.datepicker._get(i, "duration")),
                i.dpDiv.css("z-index", s(e(t)) + 1),
                (e.datepicker._datepickerShowing = !0),
                e.effects && e.effects.effect[l]
                  ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u)
                  : i.dpDiv[l || "show"](l ? u : null),
                e.datepicker._shouldFocusInput(i) && i.input.focus(),
                (e.datepicker._curInst = i)
              )
          );
      }
    },
    _updateDatepicker: function(t) {
      (this.maxRows = 4), (v = t), t.dpDiv
        .empty()
        .append(this._generateHTML(t)), this._attachHandlers(t);
      var i,
        s = this._getNumberOfMonths(t),
        n = s[1],
        a = 17,
        r = t.dpDiv.find("." + this._dayOverClass + " a");
      r.length > 0 && o.apply(r.get(0)), t.dpDiv
        .removeClass(
          "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
        )
        .width(""), n > 1 &&
        t.dpDiv
          .addClass("ui-datepicker-multi-" + n)
          .css("width", a * n + "em"), t.dpDiv[
        (1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"
      ]("ui-datepicker-multi"), t.dpDiv[
        (this._get(t, "isRTL") ? "add" : "remove") + "Class"
      ]("ui-datepicker-rtl"), t === e.datepicker._curInst &&
        e.datepicker._datepickerShowing &&
        e.datepicker._shouldFocusInput(t) &&
        t.input.focus(), t.yearshtml &&
        (
          (i = t.yearshtml),
          setTimeout(function() {
            i === t.yearshtml &&
              t.yearshtml &&
              t.dpDiv
                .find("select.ui-datepicker-year:first")
                .replaceWith(t.yearshtml), (i = t.yearshtml = null);
          }, 0)
        );
    },
    _shouldFocusInput: function(e) {
      return (
        e.input &&
        e.input.is(":visible") &&
        !e.input.is(":disabled") &&
        !e.input.is(":focus")
      );
    },
    _checkOffset: function(t, i, s) {
      var n = t.dpDiv.outerWidth(),
        a = t.dpDiv.outerHeight(),
        o = t.input ? t.input.outerWidth() : 0,
        r = t.input ? t.input.outerHeight() : 0,
        h =
          document.documentElement.clientWidth +
          (s ? 0 : e(document).scrollLeft()),
        l =
          document.documentElement.clientHeight +
          (s ? 0 : e(document).scrollTop());
      return (i.left -= this._get(t, "isRTL") ? n - o : 0), (i.left -=
        s && i.left === t.input.offset().left
          ? e(document).scrollLeft()
          : 0), (i.top -=
        s && i.top === t.input.offset().top + r
          ? e(document).scrollTop()
          : 0), (i.left -= Math.min(
        i.left,
        i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0
      )), (i.top -= Math.min(
        i.top,
        i.top + a > l && l > a ? Math.abs(a + r) : 0
      )), i;
    },
    _findPos: function(t) {
      for (
        var i, s = this._getInst(t), n = this._get(s, "isRTL");
        t &&
        ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));

      )
        t = t[n ? "previousSibling" : "nextSibling"];
      return (i = e(t).offset()), [i.left, i.top];
    },
    _hideDatepicker: function(t) {
      var i,
        s,
        n,
        a,
        o = this._curInst;
      !o ||
        (t && o !== e.data(t, "datepicker")) ||
        (this._datepickerShowing &&
          (
            (i = this._get(o, "showAnim")),
            (s = this._get(o, "duration")),
            (n = function() {
              e.datepicker._tidyDialog(o);
            }),
            e.effects && (e.effects.effect[i] || e.effects[i])
              ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n)
              : o.dpDiv[
                  "slideDown" === i
                    ? "slideUp"
                    : "fadeIn" === i ? "fadeOut" : "hide"
                ](i ? s : null, n),
            i || n(),
            (this._datepickerShowing = !1),
            (a = this._get(o, "onClose")),
            a &&
              a.apply(o.input ? o.input[0] : null, [
                o.input ? o.input.val() : "",
                o
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (
                this._dialogInput.css({
                  position: "absolute",
                  left: "0",
                  top: "-100px"
                }),
                e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))
              ),
            (this._inDialog = !1)
          ));
    },
    _tidyDialog: function(e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    },
    _checkExternalClick: function(t) {
      if (e.datepicker._curInst) {
        var i = e(t.target),
          s = e.datepicker._getInst(i[0]);
        ((i[0].id !== e.datepicker._mainDivId &&
          0 === i.parents("#" + e.datepicker._mainDivId).length &&
          !i.hasClass(e.datepicker.markerClassName) &&
          !i.closest("." + e.datepicker._triggerClass).length &&
          e.datepicker._datepickerShowing &&
          (!e.datepicker._inDialog || !e.blockUI)) ||
          (i.hasClass(e.datepicker.markerClassName) &&
            e.datepicker._curInst !== s)) &&
          e.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function(t, i, s) {
      var n = e(t),
        a = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) ||
        (
          this._adjustInstDate(
            a,
            i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0),
            s
          ),
          this._updateDatepicker(a)
        );
    },
    _gotoToday: function(t) {
      var i,
        s = e(t),
        n = this._getInst(s[0]);
      this._get(n, "gotoCurrent") && n.currentDay
        ? (
            (n.selectedDay = n.currentDay),
            (n.drawMonth = n.selectedMonth = n.currentMonth),
            (n.drawYear = n.selectedYear = n.currentYear)
          )
        : (
            (i = new Date()),
            (n.selectedDay = i.getDate()),
            (n.drawMonth = n.selectedMonth = i.getMonth()),
            (n.drawYear = n.selectedYear = i.getFullYear())
          ), this._notifyChange(n), this._adjustDate(s);
    },
    _selectMonthYear: function(t, i, s) {
      var n = e(t),
        a = this._getInst(n[0]);
      (a["selected" + ("M" === s ? "Month" : "Year")] = a[
        "draw" + ("M" === s ? "Month" : "Year")
      ] = parseInt(i.options[i.selectedIndex].value, 10)), this._notifyChange(
        a
      ), this._adjustDate(n);
    },
    _selectDay: function(t, i, s, n) {
      var a,
        o = e(t);
      e(n).hasClass(this._unselectableClass) ||
        this._isDisabledDatepicker(o[0]) ||
        (
          (a = this._getInst(o[0])),
          (a.selectedDay = a.currentDay = e("a", n).html()),
          (a.selectedMonth = a.currentMonth = i),
          (a.selectedYear = a.currentYear = s),
          this._selectDate(
            t,
            this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)
          )
        );
    },
    _clearDate: function(t) {
      var i = e(t);
      this._selectDate(i, "");
    },
    _selectDate: function(t, i) {
      var s,
        n = e(t),
        a = this._getInst(n[0]);
      (i = null != i ? i : this._formatDate(a)), a.input &&
        a.input.val(i), this._updateAlternate(a), (s = this._get(
        a,
        "onSelect"
      )), s
        ? s.apply(a.input ? a.input[0] : null, [i, a])
        : a.input && a.input.trigger("change"), a.inline
        ? this._updateDatepicker(a)
        : (
            this._hideDatepicker(),
            (this._lastInput = a.input[0]),
            "object" != typeof a.input[0] && a.input.focus(),
            (this._lastInput = null)
          );
    },
    _updateAlternate: function(t) {
      var i,
        s,
        n,
        a = this._get(t, "altField");
      a &&
        (
          (i = this._get(t, "altFormat") || this._get(t, "dateFormat")),
          (s = this._getDate(t)),
          (n = this.formatDate(i, s, this._getFormatConfig(t))),
          e(a).each(function() {
            e(this).val(n);
          })
        );
    },
    noWeekends: function(e) {
      var t = e.getDay();
      return [t > 0 && 6 > t, ""];
    },
    iso8601Week: function(e) {
      var t,
        i = new Date(e.getTime());
      return i.setDate(
        i.getDate() + 4 - (i.getDay() || 7)
      ), (t = i.getTime()), i.setMonth(0), i.setDate(1), Math.floor(
        Math.round((t - i) / 864e5) / 7
      ) + 1;
    },
    parseDate: function(t, i, s) {
      if (null == t || null == i) throw "Invalid arguments";
      if (((i = "object" == typeof i ? "" + i : i + ""), "" === i)) return null;
      var n,
        a,
        o,
        r,
        h = 0,
        l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        u =
          "string" != typeof l
            ? l
            : new Date().getFullYear() % 100 + parseInt(l, 10),
        d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
        c = (s ? s.dayNames : null) || this._defaults.dayNames,
        p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
        f = (s ? s.monthNames : null) || this._defaults.monthNames,
        m = -1,
        g = -1,
        v = -1,
        y = -1,
        b = !1,
        _ = function(e) {
          var i = t.length > n + 1 && t.charAt(n + 1) === e;
          return i && n++, i;
        },
        x = function(e) {
          var t = _(e),
            s =
              "@" === e
                ? 14
                : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
            n = "y" === e ? s : 1,
            a = RegExp("^\\d{" + n + "," + s + "}"),
            o = i.substring(h).match(a);
          if (!o) throw "Missing number at position " + h;
          return (h += o[0].length), parseInt(o[0], 10);
        },
        k = function(t, s, n) {
          var a = -1,
            o = e
              .map(_(t) ? n : s, function(e, t) {
                return [[t, e]];
              })
              .sort(function(e, t) {
                return -(e[1].length - t[1].length);
              });
          if (
            (
              e.each(o, function(e, t) {
                var s = t[1];
                return i.substr(h, s.length).toLowerCase() === s.toLowerCase()
                  ? ((a = t[0]), (h += s.length), !1)
                  : void 0;
              }),
              -1 !== a
            )
          )
            return a + 1;
          throw "Unknown name at position " + h;
        },
        w = function() {
          if (i.charAt(h) !== t.charAt(n))
            throw "Unexpected literal at position " + h;
          h++;
        };
      for (n = 0; t.length > n; n++)
        if (b) "'" !== t.charAt(n) || _("'") ? w() : (b = !1);
        else
          switch (t.charAt(n)) {
            case "d":
              v = x("d");
              break;
            case "D":
              k("D", d, c);
              break;
            case "o":
              y = x("o");
              break;
            case "m":
              g = x("m");
              break;
            case "M":
              g = k("M", p, f);
              break;
            case "y":
              m = x("y");
              break;
            case "@":
              (r = new Date(x("@"))), (m = r.getFullYear()), (g =
                r.getMonth() + 1), (v = r.getDate());
              break;
            case "!":
              (r = new Date(
                (x("!") - this._ticksTo1970) / 1e4
              )), (m = r.getFullYear()), (g =
                r.getMonth() + 1), (v = r.getDate());
              break;
            case "'":
              _("'") ? w() : (b = !0);
              break;
            default:
              w();
          }
      if (i.length > h && ((o = i.substr(h)), !/^\s+/.test(o)))
        throw "Extra/unparsed characters found in date: " + o;
      if (
        (
          -1 === m
            ? (m = new Date().getFullYear())
            : 100 > m &&
              (m +=
                new Date().getFullYear() -
                new Date().getFullYear() % 100 +
                (u >= m ? 0 : -100)),
          y > -1
        )
      )
        for (g = 1, v = y; ; ) {
          if (((a = this._getDaysInMonth(m, g - 1)), a >= v)) break;
          g++, (v -= a);
        }
      if (
        (
          (r = this._daylightSavingAdjust(new Date(m, g - 1, v))),
          r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v
        )
      )
        throw "Invalid date";
      return r;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970:
      1e7 *
      60 *
      60 *
      24 *
      (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function(e, t, i) {
      if (!t) return "";
      var s,
        n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        a = (i ? i.dayNames : null) || this._defaults.dayNames,
        o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        r = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function(t) {
          var i = e.length > s + 1 && e.charAt(s + 1) === t;
          return i && s++, i;
        },
        l = function(e, t, i) {
          var s = "" + t;
          if (h(e)) for (; i > s.length; ) s = "0" + s;
          return s;
        },
        u = function(e, t, i, s) {
          return h(e) ? s[t] : i[t];
        },
        d = "",
        c = !1;
      if (t)
        for (s = 0; e.length > s; s++)
          if (c) "'" !== e.charAt(s) || h("'") ? (d += e.charAt(s)) : (c = !1);
          else
            switch (e.charAt(s)) {
              case "d":
                d += l("d", t.getDate(), 2);
                break;
              case "D":
                d += u("D", t.getDay(), n, a);
                break;
              case "o":
                d += l(
                  "o",
                  Math.round(
                    (new Date(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ).getTime() -
                      new Date(t.getFullYear(), 0, 0).getTime()) /
                      864e5
                  ),
                  3
                );
                break;
              case "m":
                d += l("m", t.getMonth() + 1, 2);
                break;
              case "M":
                d += u("M", t.getMonth(), o, r);
                break;
              case "y":
                d += h("y")
                  ? t.getFullYear()
                  : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                break;
              case "@":
                d += t.getTime();
                break;
              case "!":
                d += 1e4 * t.getTime() + this._ticksTo1970;
                break;
              case "'":
                h("'") ? (d += "'") : (c = !0);
                break;
              default:
                d += e.charAt(s);
            }
      return d;
    },
    _possibleChars: function(e) {
      var t,
        i = "",
        s = !1,
        n = function(i) {
          var s = e.length > t + 1 && e.charAt(t + 1) === i;
          return s && t++, s;
        };
      for (t = 0; e.length > t; t++)
        if (s) "'" !== e.charAt(t) || n("'") ? (i += e.charAt(t)) : (s = !1);
        else
          switch (e.charAt(t)) {
            case "d":
            case "m":
            case "y":
            case "@":
              i += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              n("'") ? (i += "'") : (s = !0);
              break;
            default:
              i += e.charAt(t);
          }
      return i;
    },
    _get: function(e, t) {
      return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t];
    },
    _setDateFromField: function(e, t) {
      if (e.input.val() !== e.lastVal) {
        var i = this._get(e, "dateFormat"),
          s = (e.lastVal = e.input ? e.input.val() : null),
          n = this._getDefaultDate(e),
          a = n,
          o = this._getFormatConfig(e);
        try {
          a = this.parseDate(i, s, o) || n;
        } catch (r) {
          s = t ? "" : s;
        }
        (e.selectedDay = a.getDate()), (e.drawMonth = e.selectedMonth = a.getMonth()), (e.drawYear = e.selectedYear = a.getFullYear()), (e.currentDay = s
          ? a.getDate()
          : 0), (e.currentMonth = s ? a.getMonth() : 0), (e.currentYear = s
          ? a.getFullYear()
          : 0), this._adjustInstDate(e);
      }
    },
    _getDefaultDate: function(e) {
      return this._restrictMinMax(
        e,
        this._determineDate(e, this._get(e, "defaultDate"), new Date())
      );
    },
    _determineDate: function(t, i, s) {
      var n = function(e) {
          var t = new Date();
          return t.setDate(t.getDate() + e), t;
        },
        a = function(i) {
          try {
            return e.datepicker.parseDate(
              e.datepicker._get(t, "dateFormat"),
              i,
              e.datepicker._getFormatConfig(t)
            );
          } catch (s) {}
          for (
            var n =
                (i.toLowerCase().match(/^c/)
                  ? e.datepicker._getDate(t)
                  : null) || new Date(),
              a = n.getFullYear(),
              o = n.getMonth(),
              r = n.getDate(),
              h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
              l = h.exec(i);
            l;

          ) {
            switch (l[2] || "d") {
              case "d":
              case "D":
                r += parseInt(l[1], 10);
                break;
              case "w":
              case "W":
                r += 7 * parseInt(l[1], 10);
                break;
              case "m":
              case "M":
                (o += parseInt(l[1], 10)), (r = Math.min(
                  r,
                  e.datepicker._getDaysInMonth(a, o)
                ));
                break;
              case "y":
              case "Y":
                (a += parseInt(l[1], 10)), (r = Math.min(
                  r,
                  e.datepicker._getDaysInMonth(a, o)
                ));
            }
            l = h.exec(i);
          }
          return new Date(a, o, r);
        },
        o =
          null == i || "" === i
            ? s
            : "string" == typeof i
              ? a(i)
              : "number" == typeof i
                ? isNaN(i) ? s : n(i)
                : new Date(i.getTime());
      return (o = o && "Invalid Date" == "" + o ? s : o), o &&
        (
          o.setHours(0),
          o.setMinutes(0),
          o.setSeconds(0),
          o.setMilliseconds(0)
        ), this._daylightSavingAdjust(o);
    },
    _daylightSavingAdjust: function(e) {
      return e
        ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)
        : null;
    },
    _setDate: function(e, t, i) {
      var s = !t,
        n = e.selectedMonth,
        a = e.selectedYear,
        o = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
      (e.selectedDay = e.currentDay = o.getDate()), (e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth()), (e.drawYear = e.selectedYear = e.currentYear = o.getFullYear()), (n ===
        e.selectedMonth &&
        a === e.selectedYear) ||
        i ||
        this._notifyChange(e), this._adjustInstDate(e), e.input &&
        e.input.val(s ? "" : this._formatDate(e));
    },
    _getDate: function(e) {
      var t =
        !e.currentYear || (e.input && "" === e.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
      return t;
    },
    _attachHandlers: function(t) {
      var i = this._get(t, "stepMonths"),
        s = "#" + t.id.replace(/\\\\/g, "\\");
      t.dpDiv.find("[data-handler]").map(function() {
        var t = {
          prev: function() {
            e.datepicker._adjustDate(s, -i, "M");
          },
          next: function() {
            e.datepicker._adjustDate(s, +i, "M");
          },
          hide: function() {
            e.datepicker._hideDatepicker();
          },
          today: function() {
            e.datepicker._gotoToday(s);
          },
          selectDay: function() {
            return e.datepicker._selectDay(
              s,
              +this.getAttribute("data-month"),
              +this.getAttribute("data-year"),
              this
            ), !1;
          },
          selectMonth: function() {
            return e.datepicker._selectMonthYear(s, this, "M"), !1;
          },
          selectYear: function() {
            return e.datepicker._selectMonthYear(s, this, "Y"), !1;
          }
        };
        e(this).bind(
          this.getAttribute("data-event"),
          t[this.getAttribute("data-handler")]
        );
      });
    },
    _generateHTML: function(e) {
      var t,
        i,
        s,
        n,
        a,
        o,
        r,
        h,
        l,
        u,
        d,
        c,
        p,
        f,
        m,
        g,
        v,
        y,
        b,
        _,
        x,
        k,
        w,
        T,
        D,
        S,
        M,
        N,
        C,
        A,
        P,
        I,
        H,
        z,
        F,
        j,
        E,
        O,
        W,
        L = new Date(),
        R = this._daylightSavingAdjust(
          new Date(L.getFullYear(), L.getMonth(), L.getDate())
        ),
        Y = this._get(e, "isRTL"),
        J = this._get(e, "showButtonPanel"),
        B = this._get(e, "hideIfNoPrevNext"),
        Q = this._get(e, "navigationAsDateFormat"),
        K = this._getNumberOfMonths(e),
        V = this._get(e, "showCurrentAtPos"),
        q = this._get(e, "stepMonths"),
        U = 1 !== K[0] || 1 !== K[1],
        G = this._daylightSavingAdjust(
          e.currentDay
            ? new Date(e.currentYear, e.currentMonth, e.currentDay)
            : new Date(9999, 9, 9)
        ),
        X = this._getMinMaxDate(e, "min"),
        $ = this._getMinMaxDate(e, "max"),
        Z = e.drawMonth - V,
        et = e.drawYear;
      if ((0 > Z && ((Z += 12), et--), $))
        for (
          t = this._daylightSavingAdjust(
            new Date(
              $.getFullYear(),
              $.getMonth() - K[0] * K[1] + 1,
              $.getDate()
            )
          ), t = X && X > t ? X : t;
          this._daylightSavingAdjust(new Date(et, Z, 1)) > t;

        )
          Z--, 0 > Z && ((Z = 11), et--);
      for (
        e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = Q
          ? this.formatDate(
              i,
              this._daylightSavingAdjust(new Date(et, Z - q, 1)),
              this._getFormatConfig(e)
            )
          : i, s = this._canAdjustMonth(e, -1, et, Z)
          ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
            i +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (Y ? "e" : "w") +
            "'>" +
            i +
            "</span></a>"
          : B
            ? ""
            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? "e" : "w") +
              "'>" +
              i +
              "</span></a>", n = this._get(e, "nextText"), n = Q
          ? this.formatDate(
              n,
              this._daylightSavingAdjust(new Date(et, Z + q, 1)),
              this._getFormatConfig(e)
            )
          : n, a = this._canAdjustMonth(e, 1, et, Z)
          ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
            n +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (Y ? "w" : "e") +
            "'>" +
            n +
            "</span></a>"
          : B
            ? ""
            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? "w" : "e") +
              "'>" +
              n +
              "</span></a>", o = this._get(e, "currentText"), r =
          this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = Q
          ? this.formatDate(o, r, this._getFormatConfig(e))
          : o, h = e.inline
          ? ""
          : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
            this._get(e, "closeText") +
            "</button>", l = J
          ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
            (Y ? h : "") +
            (this._isInRange(e, r)
              ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                o +
                "</button>"
              : "") +
            (Y ? "" : h) +
            "</div>"
          : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u)
          ? 0
          : u, d = this._get(e, "showWeek"), c = this._get(
          e,
          "dayNames"
        ), p = this._get(e, "dayNamesMin"), f = this._get(
          e,
          "monthNames"
        ), m = this._get(e, "monthNamesShort"), g = this._get(
          e,
          "beforeShowDay"
        ), v = this._get(e, "showOtherMonths"), y = this._get(
          e,
          "selectOtherMonths"
        ), b = this._getDefaultDate(e), _ = "", k = 0;
        K[0] > k;
        k++
      ) {
        for (w = "", this.maxRows = 4, T = 0; K[1] > T; T++) {
          if (
            (
              (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay))),
              (S = " ui-corner-all"),
              (M = ""),
              U
            )
          ) {
            if (((M += "<div class='ui-datepicker-group"), K[1] > 1))
              switch (T) {
                case 0:
                  (M += " ui-datepicker-group-first"), (S =
                    " ui-corner-" + (Y ? "right" : "left"));
                  break;
                case K[1] - 1:
                  (M += " ui-datepicker-group-last"), (S =
                    " ui-corner-" + (Y ? "left" : "right"));
                  break;
                default:
                  (M += " ui-datepicker-group-middle"), (S = "");
              }
            M += "'>";
          }
          for (
            M +=
              "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
              S +
              "'>" +
              (/all|left/.test(S) && 0 === k ? (Y ? a : s) : "") +
              (/all|right/.test(S) && 0 === k ? (Y ? s : a) : "") +
              this._generateMonthYearHeader(
                e,
                Z,
                et,
                X,
                $,
                k > 0 || T > 0,
                f,
                m
              ) +
              "</div><table class='ui-datepicker-calendar'><thead>" +
              "<tr>", N = d
              ? "<th class='ui-datepicker-week-col'>" +
                this._get(e, "weekHeader") +
                "</th>"
              : "", x = 0;
            7 > x;
            x++
          )
            (C = (x + u) % 7), (N +=
              "<th scope='col'" +
              ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") +
              ">" +
              "<span title='" +
              c[C] +
              "'>" +
              p[C] +
              "</span></th>");
          for (
            M += N + "</tr></thead><tbody>", A = this._getDaysInMonth(
              et,
              Z
            ), et === e.selectedYear &&
              Z === e.selectedMonth &&
              (e.selectedDay = Math.min(e.selectedDay, A)), P =
              (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil(
              (P + A) / 7
            ), H = U
              ? this.maxRows > I ? this.maxRows : I
              : I, this.maxRows = H, z = this._daylightSavingAdjust(
              new Date(et, Z, 1 - P)
            ), F = 0;
            H > F;
            F++
          ) {
            for (
              M += "<tr>", j = d
                ? "<td class='ui-datepicker-week-col'>" +
                  this._get(e, "calculateWeek")(z) +
                  "</td>"
                : "", x = 0;
              7 > x;
              x++
            )
              (E = g
                ? g.apply(e.input ? e.input[0] : null, [z])
                : [!0, ""]), (O = z.getMonth() !== Z), (W =
                (O && !y) || !E[0] || (X && X > z) || ($ && z > $)), (j +=
                "<td class='" +
                ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                (O ? " ui-datepicker-other-month" : "") +
                ((z.getTime() === D.getTime() &&
                  Z === e.selectedMonth &&
                  e._keyEvent) ||
                (b.getTime() === z.getTime() && b.getTime() === D.getTime())
                  ? " " + this._dayOverClass
                  : "") +
                (W
                  ? " " + this._unselectableClass + " ui-state-disabled"
                  : "") +
                (O && !v
                  ? ""
                  : " " +
                    E[1] +
                    (z.getTime() === G.getTime()
                      ? " " + this._currentClass
                      : "") +
                    (z.getTime() === R.getTime()
                      ? " ui-datepicker-today"
                      : "")) +
                "'" +
                ((O && !v) || !E[2]
                  ? ""
                  : " title='" + E[2].replace(/'/g, "&#39;") + "'") +
                (W
                  ? ""
                  : " data-handler='selectDay' data-event='click' data-month='" +
                    z.getMonth() +
                    "' data-year='" +
                    z.getFullYear() +
                    "'") +
                ">" +
                (O && !v
                  ? "&#xa0;"
                  : W
                    ? "<span class='ui-state-default'>" +
                      z.getDate() +
                      "</span>"
                    : "<a class='ui-state-default" +
                      (z.getTime() === R.getTime()
                        ? " ui-state-highlight"
                        : "") +
                      (z.getTime() === G.getTime() ? " ui-state-active" : "") +
                      (O ? " ui-priority-secondary" : "") +
                      "' href='#'>" +
                      z.getDate() +
                      "</a>") +
                "</td>"), z.setDate(
                z.getDate() + 1
              ), (z = this._daylightSavingAdjust(z));
            M += j + "</tr>";
          }
          Z++, Z > 11 && ((Z = 0), et++), (M +=
            "</tbody></table>" +
            (U
              ? "</div>" +
                (K[0] > 0 && T === K[1] - 1
                  ? "<div class='ui-datepicker-row-break'></div>"
                  : "")
              : "")), (w += M);
        }
        _ += w;
      }
      return (_ += l), (e._keyEvent = !1), _;
    },
    _generateMonthYearHeader: function(e, t, i, s, n, a, o, r) {
      var h,
        l,
        u,
        d,
        c,
        p,
        f,
        m,
        g = this._get(e, "changeMonth"),
        v = this._get(e, "changeYear"),
        y = this._get(e, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        _ = "";
      if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
      else {
        for (
          h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ +=
            "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0;
          12 > u;
          u++
        )
          (!h || u >= s.getMonth()) &&
            (!l || n.getMonth() >= u) &&
            (_ +=
              "<option value='" +
              u +
              "'" +
              (u === t ? " selected='selected'" : "") +
              ">" +
              r[u] +
              "</option>");
        _ += "</select>";
      }
      if ((y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml))
        if (((e.yearshtml = ""), a || !v))
          b += "<span class='ui-datepicker-year'>" + i + "</span>";
        else {
          for (
            d = this._get(e, "yearRange").split(
              ":"
            ), c = new Date().getFullYear(), p = function(e) {
              var t = e.match(/c[+\-].*/)
                ? i + parseInt(e.substring(1), 10)
                : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
              return isNaN(t) ? c : t;
            }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s
              ? Math.max(f, s.getFullYear())
              : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml +=
              "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
            m >= f;
            f++
          )
            e.yearshtml +=
              "<option value='" +
              f +
              "'" +
              (f === i ? " selected='selected'" : "") +
              ">" +
              f +
              "</option>";
          (e.yearshtml += "</select>"), (b +=
            e.yearshtml), (e.yearshtml = null);
        }
      return (b += this._get(e, "yearSuffix")), y &&
        (b += (!a && g && v ? "" : "&#xa0;") + _), (b += "</div>");
    },
    _adjustInstDate: function(e, t, i) {
      var s = e.drawYear + ("Y" === i ? t : 0),
        n = e.drawMonth + ("M" === i ? t : 0),
        a =
          Math.min(e.selectedDay, this._getDaysInMonth(s, n)) +
          ("D" === i ? t : 0),
        o = this._restrictMinMax(
          e,
          this._daylightSavingAdjust(new Date(s, n, a))
        );
      (e.selectedDay = o.getDate()), (e.drawMonth = e.selectedMonth = o.getMonth()), (e.drawYear = e.selectedYear = o.getFullYear()), ("M" ===
        i ||
        "Y" === i) &&
        this._notifyChange(e);
    },
    _restrictMinMax: function(e, t) {
      var i = this._getMinMaxDate(e, "min"),
        s = this._getMinMaxDate(e, "max"),
        n = i && i > t ? i : t;
      return s && n > s ? s : n;
    },
    _notifyChange: function(e) {
      var t = this._get(e, "onChangeMonthYear");
      t &&
        t.apply(e.input ? e.input[0] : null, [
          e.selectedYear,
          e.selectedMonth + 1,
          e
        ]);
    },
    _getNumberOfMonths: function(e) {
      var t = this._get(e, "numberOfMonths");
      return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
    },
    _getMinMaxDate: function(e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null);
    },
    _getDaysInMonth: function(e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
    },
    _getFirstDayOfMonth: function(e, t) {
      return new Date(e, t, 1).getDay();
    },
    _canAdjustMonth: function(e, t, i, s) {
      var n = this._getNumberOfMonths(e),
        a = this._daylightSavingAdjust(
          new Date(i, s + (0 > t ? t : n[0] * n[1]), 1)
        );
      return 0 > t &&
        a.setDate(
          this._getDaysInMonth(a.getFullYear(), a.getMonth())
        ), this._isInRange(e, a);
    },
    _isInRange: function(e, t) {
      var i,
        s,
        n = this._getMinMaxDate(e, "min"),
        a = this._getMinMaxDate(e, "max"),
        o = null,
        r = null,
        h = this._get(e, "yearRange");
      return h &&
        (
          (i = h.split(":")),
          (s = new Date().getFullYear()),
          (o = parseInt(i[0], 10)),
          (r = parseInt(i[1], 10)),
          i[0].match(/[+\-].*/) && (o += s),
          i[1].match(/[+\-].*/) && (r += s)
        ), (!n || t.getTime() >= n.getTime()) &&
        (!a || t.getTime() <= a.getTime()) &&
        (!o || t.getFullYear() >= o) &&
        (!r || r >= t.getFullYear());
    },
    _getFormatConfig: function(e) {
      var t = this._get(e, "shortYearCutoff");
      return (t =
        "string" != typeof t
          ? t
          : new Date().getFullYear() % 100 + parseInt(t, 10)), {
        shortYearCutoff: t,
        dayNamesShort: this._get(e, "dayNamesShort"),
        dayNames: this._get(e, "dayNames"),
        monthNamesShort: this._get(e, "monthNamesShort"),
        monthNames: this._get(e, "monthNames")
      };
    },
    _formatDate: function(e, t, i, s) {
      t ||
        (
          (e.currentDay = e.selectedDay),
          (e.currentMonth = e.selectedMonth),
          (e.currentYear = e.selectedYear)
        );
      var n = t
        ? "object" == typeof t
          ? t
          : this._daylightSavingAdjust(new Date(s, i, t))
        : this._daylightSavingAdjust(
            new Date(e.currentYear, e.currentMonth, e.currentDay)
          );
      return this.formatDate(
        this._get(e, "dateFormat"),
        n,
        this._getFormatConfig(e)
      );
    }
  }), (e.fn.datepicker = function(t) {
    if (!this.length) return this;
    e.datepicker.initialized ||
      (
        e(document).mousedown(e.datepicker._checkExternalClick),
        (e.datepicker.initialized = !0)
      ), 0 === e("#" + e.datepicker._mainDivId).length &&
      e("body").append(e.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof t ||
    ("isDisabled" !== t && "getDate" !== t && "widget" !== t)
      ? "option" === t &&
        2 === arguments.length &&
        "string" == typeof arguments[1]
        ? e.datepicker["_" + t + "Datepicker"].apply(
            e.datepicker,
            [this[0]].concat(i)
          )
        : this.each(function() {
            "string" == typeof t
              ? e.datepicker["_" + t + "Datepicker"].apply(
                  e.datepicker,
                  [this].concat(i)
                )
              : e.datepicker._attachDatepicker(this, t);
          })
      : e.datepicker["_" + t + "Datepicker"].apply(
          e.datepicker,
          [this[0]].concat(i)
        );
  }), (e.datepicker = new n()), (e.datepicker.initialized = !1), (e.datepicker.uuid = new Date().getTime()), (e.datepicker.version = "1.11.4"), e.datepicker, e.widget(
    "ui.dialog",
    {
      version: "1.11.4",
      options: {
        appendTo: "body",
        autoOpen: !0,
        buttons: [],
        closeOnEscape: !0,
        closeText: "Close",
        dialogClass: "",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          of: window,
          collision: "fit",
          using: function(t) {
            var i = e(this).css(t).offset().top;
            0 > i && e(this).css("top", t.top - i);
          }
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null
      },
      sizeRelatedOptions: {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
      },
      resizableRelatedOptions: {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
      },
      _create: function() {
        (this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height
        }), (this.originalPosition = {
          parent: this.element.parent(),
          index: this.element.parent().children().index(this.element)
        }), (this.originalTitle = this.element.attr(
          "title"
        )), (this.options.title =
          this.options.title ||
          this
            .originalTitle), this._createWrapper(), this.element
          .show()
          .removeAttr("title")
          .addClass("ui-dialog-content ui-widget-content")
          .appendTo(
            this.uiDialog
          ), this._createTitlebar(), this._createButtonPane(), this.options
          .draggable &&
          e.fn.draggable &&
          this._makeDraggable(), this.options.resizable &&
          e.fn.resizable &&
          this._makeResizable(), (this._isOpen = !1), this._trackFocus();
      },
      _init: function() {
        this.options.autoOpen && this.open();
      },
      _appendTo: function() {
        var t = this.options.appendTo;
        return t && (t.jquery || t.nodeType)
          ? e(t)
          : this.document.find(t || "body").eq(0);
      },
      _destroy: function() {
        var e,
          t = this.originalPosition;
        this._untrackInstance(), this._destroyOverlay(), this.element
          .removeUniqueId()
          .removeClass("ui-dialog-content ui-widget-content")
          .css(this.originalCss)
          .detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle &&
          this.element.attr(
            "title",
            this.originalTitle
          ), (e = t.parent.children().eq(t.index)), e.length &&
        e[0] !== this.element[0]
          ? e.before(this.element)
          : t.parent.append(this.element);
      },
      widget: function() {
        return this.uiDialog;
      },
      disable: e.noop,
      enable: e.noop,
      close: function(t) {
        var i,
          s = this;
        if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
          if (
            (
              (this._isOpen = !1),
              (this._focusedElement = null),
              this._destroyOverlay(),
              this._untrackInstance(),
              !this.opener.filter(":focusable").focus().length
            )
          )
            try {
              (i = this.document[0].activeElement), i &&
                "body" !== i.nodeName.toLowerCase() &&
                e(i).blur();
            } catch (n) {}
          this._hide(this.uiDialog, this.options.hide, function() {
            s._trigger("close", t);
          });
        }
      },
      isOpen: function() {
        return this._isOpen;
      },
      moveToTop: function() {
        this._moveToTop();
      },
      _moveToTop: function(t, i) {
        var s = !1,
          n = this.uiDialog
            .siblings(".ui-front:visible")
            .map(function() {
              return +e(this).css("z-index");
            })
            .get(),
          a = Math.max.apply(null, n);
        return a >= +this.uiDialog.css("z-index") &&
          (this.uiDialog.css("z-index", a + 1), (s = !0)), s &&
          !i &&
          this._trigger("focus", t), s;
      },
      open: function() {
        var t = this;
        return this._isOpen
          ? (this._moveToTop() && this._focusTabbable(), void 0)
          : (
              (this._isOpen = !0),
              (this.opener = e(this.document[0].activeElement)),
              this._size(),
              this._position(),
              this._createOverlay(),
              this._moveToTop(null, !0),
              this.overlay &&
                this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
              this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus");
              }),
              this._makeFocusTarget(),
              this._trigger("open"),
              void 0
            );
      },
      _focusTabbable: function() {
        var e = this._focusedElement;
        e || (e = this.element.find("[autofocus]")), e.length ||
          (e = this.element.find(":tabbable")), e.length ||
          (e = this.uiDialogButtonPane.find(":tabbable")), e.length ||
          (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length ||
          (e = this.uiDialog), e.eq(0).focus();
      },
      _keepFocus: function(t) {
        function i() {
          var t = this.document[0].activeElement,
            i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
          i || this._focusTabbable();
        }
        t.preventDefault(), i.call(this), this._delay(i);
      },
      _createWrapper: function() {
        (this.uiDialog = e("<div>")
          .addClass(
            "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
              this.options.dialogClass
          )
          .hide()
          .attr({ tabIndex: -1, role: "dialog" })
          .appendTo(this._appendTo())), this._on(this.uiDialog, {
          keydown: function(t) {
            if (
              this.options.closeOnEscape &&
              !t.isDefaultPrevented() &&
              t.keyCode &&
              t.keyCode === e.ui.keyCode.ESCAPE
            )
              return t.preventDefault(), this.close(t), void 0;
            if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
              var i = this.uiDialog.find(":tabbable"),
                s = i.filter(":first"),
                n = i.filter(":last");
              (t.target !== n[0] && t.target !== this.uiDialog[0]) || t.shiftKey
                ? (t.target !== s[0] && t.target !== this.uiDialog[0]) ||
                  !t.shiftKey ||
                  (
                    this._delay(function() {
                      n.focus();
                    }),
                    t.preventDefault()
                  )
                : (
                    this._delay(function() {
                      s.focus();
                    }),
                    t.preventDefault()
                  );
            }
          },
          mousedown: function(e) {
            this._moveToTop(e) && this._focusTabbable();
          }
        }), this.element.find("[aria-describedby]").length ||
          this.uiDialog.attr({
            "aria-describedby": this.element.uniqueId().attr("id")
          });
      },
      _createTitlebar: function() {
        var t;
        (this.uiDialogTitlebar = e("<div>")
          .addClass(
            "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
          )
          .prependTo(this.uiDialog)), this._on(this.uiDialogTitlebar, {
          mousedown: function(t) {
            e(t.target).closest(".ui-dialog-titlebar-close") ||
              this.uiDialog.focus();
          }
        }), (this.uiDialogTitlebarClose = e("<button type='button'></button>")
          .button({
            label: this.options.closeText,
            icons: { primary: "ui-icon-closethick" },
            text: !1
          })
          .addClass("ui-dialog-titlebar-close")
          .appendTo(this.uiDialogTitlebar)), this._on(
          this.uiDialogTitlebarClose,
          {
            click: function(e) {
              e.preventDefault(), this.close(e);
            }
          }
        ), (t = e("<span>")
          .uniqueId()
          .addClass("ui-dialog-title")
          .prependTo(this.uiDialogTitlebar)), this._title(
          t
        ), this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
      },
      _title: function(e) {
        this.options.title || e.html("&#160;"), e.text(this.options.title);
      },
      _createButtonPane: function() {
        (this.uiDialogButtonPane = e("<div>").addClass(
          "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
        )), (this.uiButtonSet = e("<div>")
          .addClass("ui-dialog-buttonset")
          .appendTo(this.uiDialogButtonPane)), this._createButtons();
      },
      _createButtons: function() {
        var t = this,
          i = this.options.buttons;
        return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(
          i
        ) ||
        (e.isArray(i) && !i.length)
          ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0)
          : (
              e.each(i, function(i, s) {
                var n, a;
                (s = e.isFunction(s)
                  ? { click: s, text: i }
                  : s), (s = e.extend({ type: "button" }, s)), (n = s.click), (s.click = function() {
                  n.apply(t.element[0], arguments);
                }), (a = { icons: s.icons, text: s.showText }), delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet);
              }),
              this.uiDialog.addClass("ui-dialog-buttons"),
              this.uiDialogButtonPane.appendTo(this.uiDialog),
              void 0
            );
      },
      _makeDraggable: function() {
        function t(e) {
          return { position: e.position, offset: e.offset };
        }
        var i = this,
          s = this.options;
        this.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function(s, n) {
            e(this).addClass(
              "ui-dialog-dragging"
            ), i._blockFrames(), i._trigger("dragStart", s, t(n));
          },
          drag: function(e, s) {
            i._trigger("drag", e, t(s));
          },
          stop: function(n, a) {
            var o = a.offset.left - i.document.scrollLeft(),
              r = a.offset.top - i.document.scrollTop();
            (s.position = {
              my: "left top",
              at:
                "left" +
                (o >= 0 ? "+" : "") +
                o +
                " " +
                "top" +
                (r >= 0 ? "+" : "") +
                r,
              of: i.window
            }), e(this).removeClass(
              "ui-dialog-dragging"
            ), i._unblockFrames(), i._trigger("dragStop", n, t(a));
          }
        });
      },
      _makeResizable: function() {
        function t(e) {
          return {
            originalPosition: e.originalPosition,
            originalSize: e.originalSize,
            position: e.position,
            size: e.size
          };
        }
        var i = this,
          s = this.options,
          n = s.resizable,
          a = this.uiDialog.css("position"),
          o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
        this.uiDialog
          .resizable({
            cancel: ".ui-dialog-content",
            containment: "document",
            alsoResize: this.element,
            maxWidth: s.maxWidth,
            maxHeight: s.maxHeight,
            minWidth: s.minWidth,
            minHeight: this._minHeight(),
            handles: o,
            start: function(s, n) {
              e(this).addClass(
                "ui-dialog-resizing"
              ), i._blockFrames(), i._trigger("resizeStart", s, t(n));
            },
            resize: function(e, s) {
              i._trigger("resize", e, t(s));
            },
            stop: function(n, a) {
              var o = i.uiDialog.offset(),
                r = o.left - i.document.scrollLeft(),
                h = o.top - i.document.scrollTop();
              (s.height = i.uiDialog.height()), (s.width = i.uiDialog.width()), (s.position = {
                my: "left top",
                at:
                  "left" +
                  (r >= 0 ? "+" : "") +
                  r +
                  " " +
                  "top" +
                  (h >= 0 ? "+" : "") +
                  h,
                of: i.window
              }), e(this).removeClass(
                "ui-dialog-resizing"
              ), i._unblockFrames(), i._trigger("resizeStop", n, t(a));
            }
          })
          .css("position", a);
      },
      _trackFocus: function() {
        this._on(this.widget(), {
          focusin: function(t) {
            this._makeFocusTarget(), (this._focusedElement = e(t.target));
          }
        });
      },
      _makeFocusTarget: function() {
        this._untrackInstance(), this._trackingInstances().unshift(this);
      },
      _untrackInstance: function() {
        var t = this._trackingInstances(),
          i = e.inArray(this, t);
        -1 !== i && t.splice(i, 1);
      },
      _trackingInstances: function() {
        var e = this.document.data("ui-dialog-instances");
        return e || ((e = []), this.document.data("ui-dialog-instances", e)), e;
      },
      _minHeight: function() {
        var e = this.options;
        return "auto" === e.height
          ? e.minHeight
          : Math.min(e.minHeight, e.height);
      },
      _position: function() {
        var e = this.uiDialog.is(":visible");
        e || this.uiDialog.show(), this.uiDialog.position(
          this.options.position
        ), e || this.uiDialog.hide();
      },
      _setOptions: function(t) {
        var i = this,
          s = !1,
          n = {};
        e.each(t, function(e, t) {
          i._setOption(
            e,
            t
          ), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t);
        }), s && (this._size(), this._position()), this.uiDialog.is(
          ":data(ui-resizable)"
        ) && this.uiDialog.resizable("option", n);
      },
      _setOption: function(e, t) {
        var i,
          s,
          n = this.uiDialog;
        "dialogClass" === e &&
          n.removeClass(this.options.dialogClass).addClass(t), "disabled" !==
          e &&
          (
            this._super(e, t),
            "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === e && this._createButtons(),
            "closeText" === e &&
              this.uiDialogTitlebarClose.button({ label: "" + t }),
            "draggable" === e &&
              (
                (i = n.is(":data(ui-draggable)")),
                i && !t && n.draggable("destroy"),
                !i && t && this._makeDraggable()
              ),
            "position" === e && this._position(),
            "resizable" === e &&
              (
                (s = n.is(":data(ui-resizable)")),
                s && !t && n.resizable("destroy"),
                s &&
                  "string" == typeof t &&
                  n.resizable("option", "handles", t),
                s || t === !1 || this._makeResizable()
              ),
            "title" === e &&
              this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
          );
      },
      _size: function() {
        var e,
          t,
          i,
          s = this.options;
        this.element
          .show()
          .css({
            width: "auto",
            minHeight: 0,
            maxHeight: "none",
            height: 0
          }), s.minWidth > s.width &&
          (s.width = s.minWidth), (e = this.uiDialog
          .css({ height: "auto", width: s.width })
          .outerHeight()), (t = Math.max(0, s.minHeight - e)), (i =
          "number" == typeof s.maxHeight
            ? Math.max(0, s.maxHeight - e)
            : "none"), "auto" === s.height
          ? this.element.css({ minHeight: t, maxHeight: i, height: "auto" })
          : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(
          ":data(ui-resizable)"
        ) && this.uiDialog.resizable("option", "minHeight", this._minHeight());
      },
      _blockFrames: function() {
        this.iframeBlocks = this.document.find("iframe").map(function() {
          var t = e(this);
          return e("<div>")
            .css({
              position: "absolute",
              width: t.outerWidth(),
              height: t.outerHeight()
            })
            .appendTo(t.parent())
            .offset(t.offset())[0];
        });
      },
      _unblockFrames: function() {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _allowInteraction: function(t) {
        return e(t.target).closest(".ui-dialog").length
          ? !0
          : !!e(t.target).closest(".ui-datepicker").length;
      },
      _createOverlay: function() {
        if (this.options.modal) {
          var t = !0;
          this._delay(function() {
            t = !1;
          }), this.document.data("ui-dialog-overlays") ||
            this._on(this.document, {
              focusin: function(e) {
                t ||
                  this._allowInteraction(e) ||
                  (
                    e.preventDefault(),
                    this._trackingInstances()[0]._focusTabbable()
                  );
              }
            }), (this.overlay = e("<div>")
            .addClass("ui-widget-overlay ui-front")
            .appendTo(this._appendTo())), this._on(this.overlay, {
            mousedown: "_keepFocus"
          }), this.document.data(
            "ui-dialog-overlays",
            (this.document.data("ui-dialog-overlays") || 0) + 1
          );
        }
      },
      _destroyOverlay: function() {
        if (this.options.modal && this.overlay) {
          var e = this.document.data("ui-dialog-overlays") - 1;
          e
            ? this.document.data("ui-dialog-overlays", e)
            : this.document
                .unbind("focusin")
                .removeData(
                  "ui-dialog-overlays"
                ), this.overlay.remove(), (this.overlay = null);
        }
      }
    }
  ), e.widget("ui.progressbar", {
    version: "1.11.4",
    options: { max: 100, value: 0, change: null, complete: null },
    min: 0,
    _create: function() {
      (this.oldValue = this.options.value = this._constrainedValue()), this.element
        .addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
        .attr({
          role: "progressbar",
          "aria-valuemin": this.min
        }), (this.valueDiv = e(
        "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
      ).appendTo(this.element)), this._refreshValue();
    },
    _destroy: function() {
      this.element
        .removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
        .removeAttr("role")
        .removeAttr("aria-valuemin")
        .removeAttr("aria-valuemax")
        .removeAttr("aria-valuenow"), this.valueDiv.remove();
    },
    value: function(e) {
      return void 0 === e
        ? this.options.value
        : (
            (this.options.value = this._constrainedValue(e)),
            this._refreshValue(),
            void 0
          );
    },
    _constrainedValue: function(e) {
      return void 0 === e && (e = this.options.value), (this.indeterminate =
        e === !1), "number" != typeof e && (e = 0), this.indeterminate
        ? !1
        : Math.min(this.options.max, Math.max(this.min, e));
    },
    _setOptions: function(e) {
      var t = e.value;
      delete e.value, this._super(
        e
      ), (this.options.value = this._constrainedValue(t)), this._refreshValue();
    },
    _setOption: function(e, t) {
      "max" === e && (t = Math.max(this.min, t)), "disabled" === e &&
        this.element
          .toggleClass("ui-state-disabled", !!t)
          .attr("aria-disabled", t), this._super(e, t);
    },
    _percentage: function() {
      return this.indeterminate
        ? 100
        : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    },
    _refreshValue: function() {
      var t = this.options.value,
        i = this._percentage();
      this.valueDiv
        .toggle(this.indeterminate || t > this.min)
        .toggleClass("ui-corner-right", t === this.options.max)
        .width(i.toFixed(0) + "%"), this.element.toggleClass(
        "ui-progressbar-indeterminate",
        this.indeterminate
      ), this.indeterminate
        ? (
            this.element.removeAttr("aria-valuenow"),
            this.overlayDiv ||
              (this.overlayDiv = e(
                "<div class='ui-progressbar-overlay'></div>"
              ).appendTo(this.valueDiv))
          )
        : (
            this.element.attr({
              "aria-valuemax": this.options.max,
              "aria-valuenow": t
            }),
            this.overlayDiv &&
              (this.overlayDiv.remove(), (this.overlayDiv = null))
          ), this.oldValue !== t &&
        ((this.oldValue = t), this._trigger("change")), t ===
        this.options.max && this._trigger("complete");
    }
  }), e.widget("ui.selectmenu", {
    version: "1.11.4",
    defaultElement: "<select>",
    options: {
      appendTo: null,
      disabled: null,
      icons: { button: "ui-icon-triangle-1-s" },
      position: { my: "left top", at: "left bottom", collision: "none" },
      width: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      select: null
    },
    _create: function() {
      var e = this.element.uniqueId().attr("id");
      (this.ids = {
        element: e,
        button: e + "-button",
        menu: e + "-menu"
      }), this._drawButton(), this._drawMenu(), this.options.disabled &&
        this.disable();
    },
    _drawButton: function() {
      var t = this;
      (this.label = e("label[for='" + this.ids.element + "']").attr(
        "for",
        this.ids.button
      )), this._on(this.label, {
        click: function(e) {
          this.button.focus(), e.preventDefault();
        }
      }), this.element.hide(), (this.button = e("<span>", {
        class: "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
        tabindex: this.options.disabled ? -1 : 0,
        id: this.ids.button,
        role: "combobox",
        "aria-expanded": "false",
        "aria-autocomplete": "list",
        "aria-owns": this.ids.menu,
        "aria-haspopup": "true"
      }).insertAfter(this.element)), e("<span>", {
        class: "ui-icon " + this.options.icons.button
      }).prependTo(this.button), (this.buttonText = e("<span>", {
        class: "ui-selectmenu-text"
      }).appendTo(this.button)), this._setText(
        this.buttonText,
        this.element.find("option:selected").text()
      ), this._resizeButton(), this._on(
        this.button,
        this._buttonEvents
      ), this.button.one("focusin", function() {
        t.menuItems || t._refreshMenu();
      }), this._hoverable(this.button), this._focusable(this.button);
    },
    _drawMenu: function() {
      var t = this;
      (this.menu = e("<ul>", {
        "aria-hidden": "true",
        "aria-labelledby": this.ids.button,
        id: this.ids.menu
      })), (this.menuWrap = e("<div>", { class: "ui-selectmenu-menu ui-front" })
        .append(this.menu)
        .appendTo(this._appendTo())), (this.menuInstance = this.menu
        .menu({
          role: "listbox",
          select: function(e, i) {
            e.preventDefault(), t._setSelection(), t._select(
              i.item.data("ui-selectmenu-item"),
              e
            );
          },
          focus: function(e, i) {
            var s = i.item.data("ui-selectmenu-item");
            null != t.focusIndex &&
              s.index !== t.focusIndex &&
              (
                t._trigger("focus", e, { item: s }),
                t.isOpen || t._select(s, e)
              ), (t.focusIndex = s.index), t.button.attr(
              "aria-activedescendant",
              t.menuItems.eq(s.index).attr("id")
            );
          }
        })
        .menu("instance")), this.menu
        .addClass("ui-corner-bottom")
        .removeClass("ui-corner-all"), this.menuInstance._off(
        this.menu,
        "mouseleave"
      ), (this.menuInstance._closeOnDocumentClick = function() {
        return !1;
      }), (this.menuInstance._isDivider = function() {
        return !1;
      });
    },
    refresh: function() {
      this._refreshMenu(), this._setText(
        this.buttonText,
        this._getSelectedItem().text()
      ), this.options.width || this._resizeButton();
    },
    _refreshMenu: function() {
      this.menu.empty();
      var e,
        t = this.element.find("option");
      t.length &&
        (
          this._parseOptions(t),
          this._renderMenu(this.menu, this.items),
          this.menuInstance.refresh(),
          (this.menuItems = this.menu
            .find("li")
            .not(".ui-selectmenu-optgroup")),
          (e = this._getSelectedItem()),
          this.menuInstance.focus(null, e),
          this._setAria(e.data("ui-selectmenu-item")),
          this._setOption("disabled", this.element.prop("disabled"))
        );
    },
    open: function(e) {
      this.options.disabled ||
        (
          this.menuItems
            ? (
                this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),
                this.menuInstance.focus(null, this._getSelectedItem())
              )
            : this._refreshMenu(),
          (this.isOpen = !0),
          this._toggleAttr(),
          this._resizeMenu(),
          this._position(),
          this._on(this.document, this._documentClick),
          this._trigger("open", e)
        );
    },
    _position: function() {
      this.menuWrap.position(
        e.extend({ of: this.button }, this.options.position)
      );
    },
    close: function(e) {
      this.isOpen &&
        (
          (this.isOpen = !1),
          this._toggleAttr(),
          (this.range = null),
          this._off(this.document),
          this._trigger("close", e)
        );
    },
    widget: function() {
      return this.button;
    },
    menuWidget: function() {
      return this.menu;
    },
    _renderMenu: function(t, i) {
      var s = this,
        n = "";
      e.each(i, function(i, a) {
        a.optgroup !== n &&
          (
            e("<li>", {
              class:
                "ui-selectmenu-optgroup ui-menu-divider" +
                (a.element.parent("optgroup").prop("disabled")
                  ? " ui-state-disabled"
                  : ""),
              text: a.optgroup
            }).appendTo(t),
            (n = a.optgroup)
          ), s._renderItemData(t, a);
      });
    },
    _renderItemData: function(e, t) {
      return this._renderItem(e, t).data("ui-selectmenu-item", t);
    },
    _renderItem: function(t, i) {
      var s = e("<li>");
      return i.disabled && s.addClass("ui-state-disabled"), this._setText(
        s,
        i.label
      ), s.appendTo(t);
    },
    _setText: function(e, t) {
      t ? e.text(t) : e.html("&#160;");
    },
    _move: function(e, t) {
      var i,
        s,
        n = ".ui-menu-item";
      this.isOpen
        ? (i = this.menuItems.eq(this.focusIndex))
        : (
            (i = this.menuItems.eq(this.element[0].selectedIndex)),
            (n += ":not(.ui-state-disabled)")
          ), (s =
        "first" === e || "last" === e
          ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1)
          : i[e + "All"](n).eq(0)), s.length && this.menuInstance.focus(t, s);
    },
    _getSelectedItem: function() {
      return this.menuItems.eq(this.element[0].selectedIndex);
    },
    _toggle: function(e) {
      this[this.isOpen ? "close" : "open"](e);
    },
    _setSelection: function() {
      var e;
      this.range &&
        (
          window.getSelection
            ? (
                (e = window.getSelection()),
                e.removeAllRanges(),
                e.addRange(this.range)
              )
            : this.range.select(),
          this.button.focus()
        );
    },
    _documentClick: {
      mousedown: function(t) {
        this.isOpen &&
          (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button)
            .length ||
            this.close(t));
      }
    },
    _buttonEvents: {
      mousedown: function() {
        var e;
        window.getSelection
          ? (
              (e = window.getSelection()),
              e.rangeCount && (this.range = e.getRangeAt(0))
            )
          : (this.range = document.selection.createRange());
      },
      click: function(e) {
        this._setSelection(), this._toggle(e);
      },
      keydown: function(t) {
        var i = !0;
        switch (t.keyCode) {
          case e.ui.keyCode.TAB:
          case e.ui.keyCode.ESCAPE:
            this.close(t), (i = !1);
            break;
          case e.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(t);
            break;
          case e.ui.keyCode.UP:
            t.altKey ? this._toggle(t) : this._move("prev", t);
            break;
          case e.ui.keyCode.DOWN:
            t.altKey ? this._toggle(t) : this._move("next", t);
            break;
          case e.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
            break;
          case e.ui.keyCode.LEFT:
            this._move("prev", t);
            break;
          case e.ui.keyCode.RIGHT:
            this._move("next", t);
            break;
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.PAGE_UP:
            this._move("first", t);
            break;
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_DOWN:
            this._move("last", t);
            break;
          default:
            this.menu.trigger(t), (i = !1);
        }
        i && t.preventDefault();
      }
    },
    _selectFocusedItem: function(e) {
      var t = this.menuItems.eq(this.focusIndex);
      t.hasClass("ui-state-disabled") ||
        this._select(t.data("ui-selectmenu-item"), e);
    },
    _select: function(e, t) {
      var i = this.element[0].selectedIndex;
      (this.element[0].selectedIndex = e.index), this._setText(
        this.buttonText,
        e.label
      ), this._setAria(e), this._trigger("select", t, { item: e }), e.index !==
        i && this._trigger("change", t, { item: e }), this.close(t);
    },
    _setAria: function(e) {
      var t = this.menuItems.eq(e.index).attr("id");
      this.button.attr({
        "aria-labelledby": t,
        "aria-activedescendant": t
      }), this.menu.attr("aria-activedescendant", t);
    },
    _setOption: function(e, t) {
      "icons" === e &&
        this.button
          .find("span.ui-icon")
          .removeClass(this.options.icons.button)
          .addClass(t.button), this._super(e, t), "appendTo" === e &&
        this.menuWrap.appendTo(this._appendTo()), "disabled" === e &&
        (
          this.menuInstance.option("disabled", t),
          this.button
            .toggleClass("ui-state-disabled", t)
            .attr("aria-disabled", t),
          this.element.prop("disabled", t),
          t
            ? (this.button.attr("tabindex", -1), this.close())
            : this.button.attr("tabindex", 0)
        ), "width" === e && this._resizeButton();
    },
    _appendTo: function() {
      var t = this.options.appendTo;
      return t &&
        (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), (t &&
        t[0]) ||
        (t = this.element.closest(".ui-front")), t.length ||
        (t = this.document[0].body), t;
    },
    _toggleAttr: function() {
      this.button
        .toggleClass("ui-corner-top", this.isOpen)
        .toggleClass("ui-corner-all", !this.isOpen)
        .attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass(
        "ui-selectmenu-open",
        this.isOpen
      ), this.menu.attr("aria-hidden", !this.isOpen);
    },
    _resizeButton: function() {
      var e = this.options.width;
      e ||
        (
          (e = this.element.show().outerWidth()),
          this.element.hide()
        ), this.button.outerWidth(e);
    },
    _resizeMenu: function() {
      this.menu.outerWidth(
        Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)
      );
    },
    _getCreateOptions: function() {
      return { disabled: this.element.prop("disabled") };
    },
    _parseOptions: function(t) {
      var i = [];
      t.each(function(t, s) {
        var n = e(s),
          a = n.parent("optgroup");
        i.push({
          element: n,
          index: t,
          value: n.val(),
          label: n.text(),
          optgroup: a.attr("label") || "",
          disabled: a.prop("disabled") || n.prop("disabled")
        });
      }), (this.items = i);
    },
    _destroy: function() {
      this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr(
        "for",
        this.ids.element
      );
    }
  }), e.widget("ui.slider", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function() {
      (this._keySliding = !1), (this._mouseSliding = !1), (this._animateOff = !0), (this._handleIndex = null), this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass(
        "ui-slider ui-slider-" +
          this.orientation +
          " ui-widget" +
          " ui-widget-content" +
          " ui-corner-all"
      ), this._refresh(), this._setOption(
        "disabled",
        this.options.disabled
      ), (this._animateOff = !1);
    },
    _refresh: function() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function() {
      var t,
        i,
        s = this.options,
        n = this.element
          .find(".ui-slider-handle")
          .addClass("ui-state-default ui-corner-all"),
        a =
          "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
        o = [];
      for (
        i = (s.values && s.values.length) || 1, n.length > i &&
          (n.slice(i).remove(), (n = n.slice(0, i))), t = n.length;
        i > t;
        t++
      )
        o.push(a);
      (this.handles = n.add(
        e(o.join("")).appendTo(this.element)
      )), (this.handle = this.handles.eq(0)), this.handles.each(function(t) {
        e(this).data("ui-slider-handle-index", t);
      });
    },
    _createRange: function() {
      var t = this.options,
        i = "";
      t.range
        ? (
            t.range === !0 &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : e.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass("ui-slider-range-min ui-slider-range-max")
                  .css({ left: "", bottom: "" })
              : (
                  (this.range = e("<div></div>").appendTo(this.element)),
                  (i = "ui-slider-range ui-widget-header ui-corner-all")
                ),
            this.range.addClass(
              i +
                ("min" === t.range || "max" === t.range
                  ? " ui-slider-range-" + t.range
                  : "")
            )
          )
        : (this.range && this.range.remove(), (this.range = null));
    },
    _setupEvents: function() {
      this._off(this.handles), this._on(
        this.handles,
        this._handleEvents
      ), this._hoverable(this.handles), this._focusable(this.handles);
    },
    _destroy: function() {
      this.handles.remove(), this.range &&
        this.range.remove(), this.element.removeClass(
        "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
      ), this._mouseDestroy();
    },
    _mouseCapture: function(t) {
      var i,
        s,
        n,
        a,
        o,
        r,
        h,
        l,
        u = this,
        d = this.options;
      return d.disabled
        ? !1
        : (
            (this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight()
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: t.pageX, y: t.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function(t) {
              var i = Math.abs(s - u.values(t));
              (n > i ||
                (n === i &&
                  (t === u._lastChangedValue || u.values(t) === d.min))) &&
                ((n = i), (a = e(this)), (o = t));
            }),
            (r = this._start(t, o)),
            r === !1
              ? !1
              : (
                  (this._mouseSliding = !0),
                  (this._handleIndex = o),
                  a.addClass("ui-state-active").focus(),
                  (h = a.offset()),
                  (l = !e(t.target)
                    .parents()
                    .addBack()
                    .is(".ui-slider-handle")),
                  (this._clickOffset = l
                    ? { left: 0, top: 0 }
                    : {
                        left: t.pageX - h.left - a.width() / 2,
                        top:
                          t.pageY -
                          h.top -
                          a.height() / 2 -
                          (parseInt(a.css("borderTopWidth"), 10) || 0) -
                          (parseInt(a.css("borderBottomWidth"), 10) || 0) +
                          (parseInt(a.css("marginTop"), 10) || 0)
                      }),
                  this.handles.hasClass("ui-state-hover") ||
                    this._slide(t, o, s),
                  (this._animateOff = !0),
                  !0
                )
          );
    },
    _mouseStart: function() {
      return !0;
    },
    _mouseDrag: function(e) {
      var t = { x: e.pageX, y: e.pageY },
        i = this._normValueFromMouse(t);
      return this._slide(e, this._handleIndex, i), !1;
    },
    _mouseStop: function(e) {
      return this.handles.removeClass(
        "ui-state-active"
      ), (this._mouseSliding = !1), this._stop(
        e,
        this._handleIndex
      ), this._change(
        e,
        this._handleIndex
      ), (this._handleIndex = null), (this._clickOffset = null), (this._animateOff = !1), !1;
    },
    _detectOrientation: function() {
      this.orientation =
        "vertical" === this.options.orientation ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function(e) {
      var t, i, s, n, a;
      return "horizontal" === this.orientation
        ? (
            (t = this.elementSize.width),
            (i =
              e.x -
              this.elementOffset.left -
              (this._clickOffset ? this._clickOffset.left : 0))
          )
        : (
            (t = this.elementSize.height),
            (i =
              e.y -
              this.elementOffset.top -
              (this._clickOffset ? this._clickOffset.top : 0))
          ), (s = i / t), s > 1 && (s = 1), 0 > s && (s = 0), "vertical" ===
        this.orientation && (s = 1 - s), (n =
        this._valueMax() - this._valueMin()), (a =
        this._valueMin() + s * n), this._trimAlignValue(a);
    },
    _start: function(e, t) {
      var i = { handle: this.handles[t], value: this.value() };
      return this.options.values &&
        this.options.values.length &&
        ((i.value = this.values(t)), (i.values = this.values())), this._trigger(
        "start",
        e,
        i
      );
    },
    _slide: function(e, t, i) {
      var s, n, a;
      this.options.values && this.options.values.length
        ? (
            (s = this.values(t ? 0 : 1)),
            2 === this.options.values.length &&
              this.options.range === !0 &&
              ((0 === t && i > s) || (1 === t && s > i)) &&
              (i = s),
            i !== this.values(t) &&
              (
                (n = this.values()),
                (n[t] = i),
                (a = this._trigger("slide", e, {
                  handle: this.handles[t],
                  value: i,
                  values: n
                })),
                (s = this.values(t ? 0 : 1)),
                a !== !1 && this.values(t, i)
              )
          )
        : i !== this.value() &&
          (
            (a = this._trigger("slide", e, {
              handle: this.handles[t],
              value: i
            })),
            a !== !1 && this.value(i)
          );
    },
    _stop: function(e, t) {
      var i = { handle: this.handles[t], value: this.value() };
      this.options.values &&
        this.options.values.length &&
        ((i.value = this.values(t)), (i.values = this.values())), this._trigger(
        "stop",
        e,
        i
      );
    },
    _change: function(e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var i = { handle: this.handles[t], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          (
            (i.value = this.values(t)),
            (i.values = this.values())
          ), (this._lastChangedValue = t), this._trigger("change", e, i);
      }
    },
    value: function(e) {
      return arguments.length
        ? (
            (this.options.value = this._trimAlignValue(e)),
            this._refreshValue(),
            this._change(null, 0),
            void 0
          )
        : this._value();
    },
    values: function(t, i) {
      var s, n, a;
      if (arguments.length > 1)
        return (this.options.values[t] = this._trimAlignValue(
          i
        )), this._refreshValue(), this._change(null, t), void 0;
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0]))
        return this.options.values && this.options.values.length
          ? this._values(t)
          : this.value();
      for (
        s = this.options.values, n = arguments[0], a = 0;
        s.length > a;
        a += 1
      )
        (s[a] = this._trimAlignValue(n[a])), this._change(null, a);
      this._refreshValue();
    },
    _setOption: function(t, i) {
      var s,
        n = 0;
      switch ((
        "range" === t &&
          this.options.range === !0 &&
          ("min" === i
            ? (
                (this.options.value = this._values(0)),
                (this.options.values = null)
              )
            : "max" === i &&
              (
                (this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null)
              )),
        e.isArray(this.options.values) && (n = this.options.values.length),
        "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i),
        this._super(t, i),
        t
      )) {
        case "orientation":
          this._detectOrientation(), this.element
            .removeClass("ui-slider-horizontal ui-slider-vertical")
            .addClass(
              "ui-slider-" + this.orientation
            ), this._refreshValue(), this.handles.css(
            "horizontal" === i ? "bottom" : "left",
            ""
          );
          break;
        case "value":
          (this._animateOff = !0), this._refreshValue(), this._change(
            null,
            0
          ), (this._animateOff = !1);
          break;
        case "values":
          for (
            this._animateOff = !0, this._refreshValue(), s = 0;
            n > s;
            s += 1
          )
            this._change(null, s);
          this._animateOff = !1;
          break;
        case "step":
        case "min":
        case "max":
          (this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
          break;
        case "range":
          (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
      }
    },
    _value: function() {
      var e = this.options.value;
      return (e = this._trimAlignValue(e));
    },
    _values: function(e) {
      var t, i, s;
      if (arguments.length)
        return (t = this.options.values[e]), (t = this._trimAlignValue(t));
      if (this.options.values && this.options.values.length) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
          i[s] = this._trimAlignValue(i[s]);
        return i;
      }
      return [];
    },
    _trimAlignValue: function(e) {
      if (this._valueMin() >= e) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
        i = (e - this._valueMin()) % t,
        s = e - i;
      return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(
        s.toFixed(5)
      );
    },
    _calculateNewMax: function() {
      var e = this.options.max,
        t = this._valueMin(),
        i = this.options.step,
        s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
      (e = s + t), (this.max = parseFloat(e.toFixed(this._precision())));
    },
    _precision: function() {
      var e = this._precisionOf(this.options.step);
      return null !== this.options.min &&
        (e = Math.max(e, this._precisionOf(this.options.min))), e;
    },
    _precisionOf: function(e) {
      var t = "" + e,
        i = t.indexOf(".");
      return -1 === i ? 0 : t.length - i - 1;
    },
    _valueMin: function() {
      return this.options.min;
    },
    _valueMax: function() {
      return this.max;
    },
    _refreshValue: function() {
      var t,
        i,
        s,
        n,
        a,
        o = this.options.range,
        r = this.options,
        h = this,
        l = this._animateOff ? !1 : r.animate,
        u = {};
      this.options.values && this.options.values.length
        ? this.handles.each(function(s) {
            (i =
              100 *
              ((h.values(s) - h._valueMin()) /
                (h._valueMax() -
                  h._valueMin()))), (u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%"), e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))), (t = i);
          })
        : (
            (s = this.value()),
            (n = this._valueMin()),
            (a = this._valueMax()),
            (i = a !== n ? 100 * ((s - n) / (a - n)) : 0),
            (u["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate),
            "min" === o &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ width: i + "%" }, r.animate),
            "max" === o &&
              "horizontal" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { width: 100 - i + "%" },
                { queue: !1, duration: r.animate }
              ),
            "min" === o &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ height: i + "%" }, r.animate),
            "max" === o &&
              "vertical" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { height: 100 - i + "%" },
                { queue: !1, duration: r.animate }
              )
          );
    },
    _handleEvents: {
      keydown: function(t) {
        var i,
          s,
          n,
          a,
          o = e(t.target).data("ui-slider-handle-index");
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (
              (
                t.preventDefault(),
                !this._keySliding &&
                  (
                    (this._keySliding = !0),
                    e(t.target).addClass("ui-state-active"),
                    (i = this._start(t, o)),
                    i === !1
                  )
              )
            )
              return;
        }
        switch ((
          (a = this.options.step),
          (s = n =
            this.options.values && this.options.values.length
              ? this.values(o)
              : this.value()),
          t.keyCode
        )) {
          case e.ui.keyCode.HOME:
            n = this._valueMin();
            break;
          case e.ui.keyCode.END:
            n = this._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(
              s + (this._valueMax() - this._valueMin()) / this.numPages
            );
            break;
          case e.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(
              s - (this._valueMax() - this._valueMin()) / this.numPages
            );
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + a);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - a);
        }
        this._slide(t, o, n);
      },
      keyup: function(t) {
        var i = e(t.target).data("ui-slider-handle-index");
        this._keySliding &&
          (
            (this._keySliding = !1),
            this._stop(t, i),
            this._change(t, i),
            e(t.target).removeClass("ui-state-active")
          );
      }
    }
  }), e.widget("ui.spinner", {
    version: "1.11.4",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      culture: null,
      icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function() {
      this._setOption("max", this.options.max), this._setOption(
        "min",
        this.options.min
      ), this._setOption("step", this.options.step), "" !== this.value() &&
        this._value(this.element.val(), !0), this._draw(), this._on(
        this._events
      ), this._refresh(), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _getCreateOptions: function() {
      var t = {},
        i = this.element;
      return e.each(["min", "max", "step"], function(e, s) {
        var n = i.attr(s);
        void 0 !== n && n.length && (t[s] = n);
      }), t;
    },
    _events: {
      keydown: function(e) {
        this._start(e) && this._keydown(e) && e.preventDefault();
      },
      keyup: "_stop",
      focus: function() {
        this.previous = this.element.val();
      },
      blur: function(e) {
        return this.cancelBlur
          ? (delete this.cancelBlur, void 0)
          : (
              this._stop(),
              this._refresh(),
              this.previous !== this.element.val() &&
                this._trigger("change", e),
              void 0
            );
      },
      mousewheel: function(e, t) {
        if (t) {
          if (!this.spinning && !this._start(e)) return !1;
          this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(
            this.mousewheelTimer
          ), (this.mousewheelTimer = this._delay(function() {
            this.spinning && this._stop(e);
          }, 100)), e.preventDefault();
        }
      },
      "mousedown .ui-spinner-button": function(t) {
        function i() {
          var e = this.element[0] === this.document[0].activeElement;
          e ||
            (
              this.element.focus(),
              (this.previous = s),
              this._delay(function() {
                this.previous = s;
              })
            );
        }
        var s;
        (s =
          this.element[0] === this.document[0].activeElement
            ? this.previous
            : this.element.val()), t.preventDefault(), i.call(
          this
        ), (this.cancelBlur = !0), this._delay(function() {
          delete this.cancelBlur, i.call(this);
        }), this._start(t) !== !1 &&
          this._repeat(
            null,
            e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
            t
          );
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function(t) {
        return e(t.currentTarget).hasClass("ui-state-active")
          ? this._start(t) === !1
            ? !1
            : (
                this._repeat(
                  null,
                  e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                  t
                ),
                void 0
              )
          : void 0;
      },
      "mouseleave .ui-spinner-button": "_stop"
    },
    _draw: function() {
      var e = (this.uiSpinner = this.element
        .addClass("ui-spinner-input")
        .attr("autocomplete", "off")
        .wrap(this._uiSpinnerHtml())
        .parent()
        .append(this._buttonHtml()));
      this.element.attr("role", "spinbutton"), (this.buttons = e
        .find(".ui-spinner-button")
        .attr("tabIndex", -1)
        .button()
        .removeClass("ui-corner-all")), this.buttons.height() >
        Math.ceil(0.5 * e.height()) &&
        e.height() > 0 &&
        e.height(e.height()), this.options.disabled && this.disable();
    },
    _keydown: function(t) {
      var i = this.options,
        s = e.ui.keyCode;
      switch (t.keyCode) {
        case s.UP:
          return this._repeat(null, 1, t), !0;
        case s.DOWN:
          return this._repeat(null, -1, t), !0;
        case s.PAGE_UP:
          return this._repeat(null, i.page, t), !0;
        case s.PAGE_DOWN:
          return this._repeat(null, -i.page, t), !0;
      }
      return !1;
    },
    _uiSpinnerHtml: function() {
      return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
    },
    _buttonHtml: function() {
      return (
        "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
        this.options.icons.up +
        "'>&#9650;</span>" +
        "</a>" +
        "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
        "<span class='ui-icon " +
        this.options.icons.down +
        "'>&#9660;</span>" +
        "</a>"
      );
    },
    _start: function(e) {
      return this.spinning || this._trigger("start", e) !== !1
        ? (this.counter || (this.counter = 1), (this.spinning = !0), !0)
        : !1;
    },
    _repeat: function(e, t, i) {
      (e = e || 500), clearTimeout(
        this.timer
      ), (this.timer = this._delay(function() {
        this._repeat(40, t, i);
      }, e)), this._spin(t * this.options.step, i);
    },
    _spin: function(e, t) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), (i = this._adjustValue(
        i + e * this._increment(this.counter)
      )), (this.spinning && this._trigger("spin", t, { value: i }) === !1) ||
        (this._value(i), this.counter++);
    },
    _increment: function(t) {
      var i = this.options.incremental;
      return i
        ? e.isFunction(i)
          ? i(t)
          : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1)
        : 1;
    },
    _precision: function() {
      var e = this._precisionOf(this.options.step);
      return null !== this.options.min &&
        (e = Math.max(e, this._precisionOf(this.options.min))), e;
    },
    _precisionOf: function(e) {
      var t = "" + e,
        i = t.indexOf(".");
      return -1 === i ? 0 : t.length - i - 1;
    },
    _adjustValue: function(e) {
      var t,
        i,
        s = this.options;
      return (t = null !== s.min ? s.min : 0), (i = e - t), (i =
        Math.round(i / s.step) * s.step), (e = t + i), (e = parseFloat(
        e.toFixed(this._precision())
      )), null !== s.max && e > s.max
        ? s.max
        : null !== s.min && s.min > e ? s.min : e;
    },
    _stop: function(e) {
      this.spinning &&
        (
          clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger("stop", e)
        );
    },
    _setOption: function(e, t) {
      if ("culture" === e || "numberFormat" === e) {
        var i = this._parse(this.element.val());
        return (this.options[e] = t), this.element.val(this._format(i)), void 0;
      }
      ("max" === e || "min" === e || "step" === e) &&
        "string" == typeof t &&
        (t = this._parse(t)), "icons" === e &&
        (
          this.buttons
            .first()
            .find(".ui-icon")
            .removeClass(this.options.icons.up)
            .addClass(t.up),
          this.buttons
            .last()
            .find(".ui-icon")
            .removeClass(this.options.icons.down)
            .addClass(t.down)
        ), this._super(e, t), "disabled" === e &&
        (
          this.widget().toggleClass("ui-state-disabled", !!t),
          this.element.prop("disabled", !!t),
          this.buttons.button(t ? "disable" : "enable")
        );
    },
    _setOptions: h(function(e) {
      this._super(e);
    }),
    _parse: function(e) {
      return "string" == typeof e &&
        "" !== e &&
        (e =
          window.Globalize && this.options.numberFormat
            ? Globalize.parseFloat(e, 10, this.options.culture)
            : +e), "" === e || isNaN(e) ? null : e;
    },
    _format: function(e) {
      return "" === e
        ? ""
        : window.Globalize && this.options.numberFormat
          ? Globalize.format(e, this.options.numberFormat, this.options.culture)
          : e;
    },
    _refresh: function() {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val())
      });
    },
    isValid: function() {
      var e = this.value();
      return null === e ? !1 : e === this._adjustValue(e);
    },
    _value: function(e, t) {
      var i;
      "" !== e &&
        (
          (i = this._parse(e)),
          null !== i && (t || (i = this._adjustValue(i)), (e = this._format(i)))
        ), this.element.val(e), this._refresh();
    },
    _destroy: function() {
      this.element
        .removeClass("ui-spinner-input")
        .prop("disabled", !1)
        .removeAttr("autocomplete")
        .removeAttr("role")
        .removeAttr("aria-valuemin")
        .removeAttr("aria-valuemax")
        .removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    },
    stepUp: h(function(e) {
      this._stepUp(e);
    }),
    _stepUp: function(e) {
      this._start() && (this._spin((e || 1) * this.options.step), this._stop());
    },
    stepDown: h(function(e) {
      this._stepDown(e);
    }),
    _stepDown: function(e) {
      this._start() &&
        (this._spin((e || 1) * -this.options.step), this._stop());
    },
    pageUp: h(function(e) {
      this._stepUp((e || 1) * this.options.page);
    }),
    pageDown: h(function(e) {
      this._stepDown((e || 1) * this.options.page);
    }),
    value: function(e) {
      return arguments.length
        ? (h(this._value).call(this, e), void 0)
        : this._parse(this.element.val());
    },
    widget: function() {
      return this.uiSpinner;
    }
  }), e.widget("ui.tabs", {
    version: "1.11.4",
    delay: 300,
    options: {
      active: null,
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: (function() {
      var e = /#.*$/;
      return function(t) {
        var i, s;
        (t = t.cloneNode(!1)), (i = t.href.replace(
          e,
          ""
        )), (s = location.href.replace(e, ""));
        try {
          i = decodeURIComponent(i);
        } catch (n) {}
        try {
          s = decodeURIComponent(s);
        } catch (n) {}
        return t.hash.length > 1 && i === s;
      };
    })(),
    _create: function() {
      var t = this,
        i = this.options;
      (this.running = !1), this.element
        .addClass("ui-tabs ui-widget ui-widget-content ui-corner-all")
        .toggleClass(
          "ui-tabs-collapsible",
          i.collapsible
        ), this._processTabs(), (i.active = this._initialActive()), e.isArray(
        i.disabled
      ) &&
        (i.disabled = e
          .unique(
            i.disabled.concat(
              e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                return t.tabs.index(e);
              })
            )
          )
          .sort()), (this.active =
        this.options.active !== !1 && this.anchors.length
          ? this._findActive(i.active)
          : e()), this._refresh(), this.active.length && this.load(i.active);
    },
    _initialActive: function() {
      var t = this.options.active,
        i = this.options.collapsible,
        s = location.hash.substring(1);
      return null === t &&
        (
          s &&
            this.tabs.each(function(i, n) {
              return e(n).attr("aria-controls") === s ? ((t = i), !1) : void 0;
            }),
          null === t &&
            (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
          (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)
        ), t !== !1 &&
        (
          (t = this.tabs.index(this.tabs.eq(t))),
          -1 === t && (t = i ? !1 : 0)
        ), !i && t === !1 && this.anchors.length && (t = 0), t;
    },
    _getCreateEventData: function() {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : e()
      };
    },
    _tabKeydown: function(t) {
      var i = e(this.document[0].activeElement).closest("li"),
        s = this.tabs.index(i),
        n = !0;
      if (!this._handlePageNav(t)) {
        switch (t.keyCode) {
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
            s++;
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.LEFT:
            (n = !1), s--;
            break;
          case e.ui.keyCode.END:
            s = this.anchors.length - 1;
            break;
          case e.ui.keyCode.HOME:
            s = 0;
            break;
          case e.ui.keyCode.SPACE:
            return t.preventDefault(), clearTimeout(
              this.activating
            ), this._activate(s), void 0;
          case e.ui.keyCode.ENTER:
            return t.preventDefault(), clearTimeout(
              this.activating
            ), this._activate(s === this.options.active ? !1 : s), void 0;
          default:
            return;
        }
        t.preventDefault(), clearTimeout(
          this.activating
        ), (s = this._focusNextTab(s, n)), t.ctrlKey ||
          t.metaKey ||
          (
            i.attr("aria-selected", "false"),
            this.tabs.eq(s).attr("aria-selected", "true"),
            (this.activating = this._delay(function() {
              this.option("active", s);
            }, this.delay))
          );
      }
    },
    _panelKeydown: function(t) {
      this._handlePageNav(t) ||
        (t.ctrlKey &&
          t.keyCode === e.ui.keyCode.UP &&
          (t.preventDefault(), this.active.focus()));
    },
    _handlePageNav: function(t) {
      return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP
        ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
        : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN
          ? (
              this._activate(this._focusNextTab(this.options.active + 1, !0)),
              !0
            )
          : void 0;
    },
    _findNextTab: function(t, i) {
      function s() {
        return t > n && (t = 0), 0 > t && (t = n), t;
      }
      for (
        var n = this.tabs.length - 1;
        -1 !== e.inArray(s(), this.options.disabled);

      )
        t = i ? t + 1 : t - 1;
      return t;
    },
    _focusNextTab: function(e, t) {
      return (e = this._findNextTab(e, t)), this.tabs.eq(e).focus(), e;
    },
    _setOption: function(e, t) {
      return "active" === e
        ? (this._activate(t), void 0)
        : "disabled" === e
          ? (this._setupDisabled(t), void 0)
          : (
              this._super(e, t),
              "collapsible" === e &&
                (
                  this.element.toggleClass("ui-tabs-collapsible", t),
                  t || this.options.active !== !1 || this._activate(0)
                ),
              "event" === e && this._setupEvents(t),
              "heightStyle" === e && this._setupHeightStyle(t),
              void 0
            );
    },
    _sanitizeSelector: function(e) {
      return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function() {
      var t = this.options,
        i = this.tablist.children(":has(a[href])");
      (t.disabled = e.map(i.filter(".ui-state-disabled"), function(e) {
        return i.index(e);
      })), this._processTabs(), t.active !== !1 && this.anchors.length
        ? this.active.length && !e.contains(this.tablist[0], this.active[0])
          ? this.tabs.length === t.disabled.length
            ? ((t.active = !1), (this.active = e()))
            : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))
          : (t.active = this.tabs.index(this.active))
        : ((t.active = !1), (this.active = e())), this._refresh();
    },
    _refresh: function() {
      this._setupDisabled(this.options.disabled), this._setupEvents(
        this.options.event
      ), this._setupHeightStyle(this.options.heightStyle), this.tabs
        .not(this.active)
        .attr({
          "aria-selected": "false",
          "aria-expanded": "false",
          tabIndex: -1
        }), this.panels
        .not(this._getPanelForTab(this.active))
        .hide()
        .attr({ "aria-hidden": "true" }), this.active.length
        ? (
            this.active
              .addClass("ui-tabs-active ui-state-active")
              .attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
              }),
            this._getPanelForTab(this.active)
              .show()
              .attr({ "aria-hidden": "false" })
          )
        : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function() {
      var t = this,
        i = this.tabs,
        s = this.anchors,
        n = this.panels;
      (this.tablist = this._getList()
        .addClass(
          "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
        )
        .attr("role", "tablist")
        .delegate("> li", "mousedown" + this.eventNamespace, function(t) {
          e(this).is(".ui-state-disabled") && t.preventDefault();
        })
        .delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
          e(this).closest("li").is(".ui-state-disabled") && this.blur();
        })), (this.tabs = this.tablist
        .find("> li:has(a[href])")
        .addClass("ui-state-default ui-corner-top")
        .attr({ role: "tab", tabIndex: -1 })), (this.anchors = this.tabs
        .map(function() {
          return e("a", this)[0];
        })
        .addClass("ui-tabs-anchor")
        .attr({
          role: "presentation",
          tabIndex: -1
        })), (this.panels = e()), this.anchors.each(function(i, s) {
        var n,
          a,
          o,
          r = e(s).uniqueId().attr("id"),
          h = e(s).closest("li"),
          l = h.attr("aria-controls");
        t._isLocal(s)
          ? (
              (n = s.hash),
              (o = n.substring(1)),
              (a = t.element.find(t._sanitizeSelector(n)))
            )
          : (
              (o = h.attr("aria-controls") || e({}).uniqueId()[0].id),
              (n = "#" + o),
              (a = t.element.find(n)),
              a.length ||
                (
                  (a = t._createPanel(o)),
                  a.insertAfter(t.panels[i - 1] || t.tablist)
                ),
              a.attr("aria-live", "polite")
            ), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": o, "aria-labelledby": r }), a.attr("aria-labelledby", r);
      }), this.panels
        .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
        .attr("role", "tabpanel"), i &&
        (
          this._off(i.not(this.tabs)),
          this._off(s.not(this.anchors)),
          this._off(n.not(this.panels))
        );
    },
    _getList: function() {
      return this.tablist || this.element.find("ol,ul").eq(0);
    },
    _createPanel: function(t) {
      return e("<div>")
        .attr("id", t)
        .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
        .data("ui-tabs-destroy", !0);
    },
    _setupDisabled: function(t) {
      e.isArray(t) &&
        (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1));
      for (var i, s = 0; (i = this.tabs[s]); s++)
        t === !0 || -1 !== e.inArray(s, t)
          ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true")
          : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
      this.options.disabled = t;
    },
    _setupEvents: function(t) {
      var i = {};
      t &&
        e.each(t.split(" "), function(e, t) {
          i[t] = "_eventHandler";
        }), this._off(
        this.anchors.add(this.tabs).add(this.panels)
      ), this._on(!0, this.anchors, {
        click: function(e) {
          e.preventDefault();
        }
      }), this._on(this.anchors, i), this._on(this.tabs, {
        keydown: "_tabKeydown"
      }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(
        this.tabs
      ), this._hoverable(this.tabs);
    },
    _setupHeightStyle: function(t) {
      var i,
        s = this.element.parent();
      "fill" === t
        ? (
            (i = s.height()),
            (i -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(":visible").each(function() {
              var t = e(this),
                s = t.css("position");
              "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0));
            }),
            this.element.children().not(this.panels).each(function() {
              i -= e(this).outerHeight(!0);
            }),
            this.panels
              .each(function() {
                e(this).height(
                  Math.max(0, i - e(this).innerHeight() + e(this).height())
                );
              })
              .css("overflow", "auto")
          )
        : "auto" === t &&
          (
            (i = 0),
            this.panels
              .each(function() {
                i = Math.max(i, e(this).height("").height());
              })
              .height(i)
          );
    },
    _eventHandler: function(t) {
      var i = this.options,
        s = this.active,
        n = e(t.currentTarget),
        a = n.closest("li"),
        o = a[0] === s[0],
        r = o && i.collapsible,
        h = r ? e() : this._getPanelForTab(a),
        l = s.length ? this._getPanelForTab(s) : e(),
        u = { oldTab: s, oldPanel: l, newTab: r ? e() : a, newPanel: h };
      t.preventDefault(), a.hasClass("ui-state-disabled") ||
        a.hasClass("ui-tabs-loading") ||
        this.running ||
        (o && !i.collapsible) ||
        this._trigger("beforeActivate", t, u) === !1 ||
        (
          (i.active = r ? !1 : this.tabs.index(a)),
          (this.active = o ? e() : a),
          this.xhr && this.xhr.abort(),
          l.length ||
            h.length ||
            e.error("jQuery UI Tabs: Mismatching fragment identifier."),
          h.length && this.load(this.tabs.index(a), t),
          this._toggle(t, u)
        );
    },
    _toggle: function(t, i) {
      function s() {
        (a.running = !1), a._trigger("activate", t, i);
      }
      function n() {
        i.newTab
          .closest("li")
          .addClass("ui-tabs-active ui-state-active"), o.length &&
        a.options.show
          ? a._show(o, a.options.show, s)
          : (o.show(), s());
      }
      var a = this,
        o = i.newPanel,
        r = i.oldPanel;
      (this.running = !0), r.length && this.options.hide
        ? this._hide(r, this.options.hide, function() {
            i.oldTab
              .closest("li")
              .removeClass("ui-tabs-active ui-state-active"), n();
          })
        : (
            i.oldTab
              .closest("li")
              .removeClass("ui-tabs-active ui-state-active"),
            r.hide(),
            n()
          ), r.attr("aria-hidden", "true"), i.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), o.length && r.length
        ? i.oldTab.attr("tabIndex", -1)
        : o.length &&
          this.tabs
            .filter(function() {
              return 0 === e(this).attr("tabIndex");
            })
            .attr("tabIndex", -1), o.attr(
        "aria-hidden",
        "false"
      ), i.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _activate: function(t) {
      var i,
        s = this._findActive(t);
      s[0] !== this.active[0] &&
        (
          s.length || (s = this.active),
          (i = s.find(".ui-tabs-anchor")[0]),
          this._eventHandler({
            target: i,
            currentTarget: i,
            preventDefault: e.noop
          })
        );
    },
    _findActive: function(t) {
      return t === !1 ? e() : this.tabs.eq(t);
    },
    _getIndex: function(e) {
      return "string" == typeof e &&
        (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e;
    },
    _destroy: function() {
      this.xhr && this.xhr.abort(), this.element.removeClass(
        "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
      ), this.tablist
        .removeClass(
          "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
        )
        .removeAttr("role"), this.anchors
        .removeClass("ui-tabs-anchor")
        .removeAttr("role")
        .removeAttr("tabIndex")
        .removeUniqueId(), this.tablist.unbind(
        this.eventNamespace
      ), this.tabs.add(this.panels).each(function() {
        e.data(this, "ui-tabs-destroy")
          ? e(this).remove()
          : e(this)
              .removeClass(
                "ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel"
              )
              .removeAttr("tabIndex")
              .removeAttr("aria-live")
              .removeAttr("aria-busy")
              .removeAttr("aria-selected")
              .removeAttr("aria-labelledby")
              .removeAttr("aria-hidden")
              .removeAttr("aria-expanded")
              .removeAttr("role");
      }), this.tabs.each(function() {
        var t = e(this),
          i = t.data("ui-tabs-aria-controls");
        i
          ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
          : t.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle &&
        this.panels.css("height", "");
    },
    enable: function(t) {
      var i = this.options.disabled;
      i !== !1 &&
        (
          void 0 === t
            ? (i = !1)
            : (
                (t = this._getIndex(t)),
                (i = e.isArray(i)
                  ? e.map(i, function(e) {
                      return e !== t ? e : null;
                    })
                  : e.map(this.tabs, function(e, i) {
                      return i !== t ? i : null;
                    }))
              ),
          this._setupDisabled(i)
        );
    },
    disable: function(t) {
      var i = this.options.disabled;
      if (i !== !0) {
        if (void 0 === t) i = !0;
        else {
          if (((t = this._getIndex(t)), -1 !== e.inArray(t, i))) return;
          i = e.isArray(i) ? e.merge([t], i).sort() : [t];
        }
        this._setupDisabled(i);
      }
    },
    load: function(t, i) {
      t = this._getIndex(t);
      var s = this,
        n = this.tabs.eq(t),
        a = n.find(".ui-tabs-anchor"),
        o = this._getPanelForTab(n),
        r = { tab: n, panel: o },
        h = function(e, t) {
          "abort" === t && s.panels.stop(!1, !0), n.removeClass(
            "ui-tabs-loading"
          ), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr;
        };
      this._isLocal(a[0]) ||
        (
          (this.xhr = e.ajax(this._ajaxSettings(a, i, r))),
          this.xhr &&
            "canceled" !== this.xhr.statusText &&
            (
              n.addClass("ui-tabs-loading"),
              o.attr("aria-busy", "true"),
              this.xhr
                .done(function(e, t, n) {
                  setTimeout(function() {
                    o.html(e), s._trigger("load", i, r), h(n, t);
                  }, 1);
                })
                .fail(function(e, t) {
                  setTimeout(function() {
                    h(e, t);
                  }, 1);
                })
            )
        );
    },
    _ajaxSettings: function(t, i, s) {
      var n = this;
      return {
        url: t.attr("href"),
        beforeSend: function(t, a) {
          return n._trigger(
            "beforeLoad",
            i,
            e.extend({ jqXHR: t, ajaxSettings: a }, s)
          );
        }
      };
    },
    _getPanelForTab: function(t) {
      var i = e(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + i));
    }
  }), e.widget("ui.tooltip", {
    version: "1.11.4",
    options: {
      content: function() {
        var t = e(this).attr("title") || "";
        return e("<a>").text(t).html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip"
      },
      show: !0,
      tooltipClass: null,
      track: !1,
      close: null,
      open: null
    },
    _addDescribedBy: function(t, i) {
      var s = (t.attr("aria-describedby") || "").split(/\s+/);
      s.push(i), t
        .data("ui-tooltip-id", i)
        .attr("aria-describedby", e.trim(s.join(" ")));
    },
    _removeDescribedBy: function(t) {
      var i = t.data("ui-tooltip-id"),
        s = (t.attr("aria-describedby") || "").split(/\s+/),
        n = e.inArray(i, s);
      -1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), (s = e.trim(
        s.join(" ")
      )), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby");
    },
    _create: function() {
      this._on({
        mouseover: "open",
        focusin: "open"
      }), (this.tooltips = {}), (this.parents = {}), this.options.disabled &&
        this._disable(), (this.liveRegion = e("<div>")
        .attr({
          role: "log",
          "aria-live": "assertive",
          "aria-relevant": "additions"
        })
        .addClass("ui-helper-hidden-accessible")
        .appendTo(this.document[0].body));
    },
    _setOption: function(t, i) {
      var s = this;
      return "disabled" === t
        ? (this[i ? "_disable" : "_enable"](), (this.options[t] = i), void 0)
        : (
            this._super(t, i),
            "content" === t &&
              e.each(this.tooltips, function(e, t) {
                s._updateContent(t.element);
              }),
            void 0
          );
    },
    _disable: function() {
      var t = this;
      e.each(this.tooltips, function(i, s) {
        var n = e.Event("blur");
        (n.target = n.currentTarget = s.element[0]), t.close(n, !0);
      }), this.element.find(this.options.items).addBack().each(function() {
        var t = e(this);
        t.is("[title]") &&
          t.data("ui-tooltip-title", t.attr("title")).removeAttr("title");
      });
    },
    _enable: function() {
      this.element.find(this.options.items).addBack().each(function() {
        var t = e(this);
        t.data("ui-tooltip-title") &&
          t.attr("title", t.data("ui-tooltip-title"));
      });
    },
    open: function(t) {
      var i = this,
        s = e(t ? t.target : this.element).closest(this.options.items);
      s.length &&
        !s.data("ui-tooltip-id") &&
        (
          s.attr("title") && s.data("ui-tooltip-title", s.attr("title")),
          s.data("ui-tooltip-open", !0),
          t &&
            "mouseover" === t.type &&
            s.parents().each(function() {
              var t,
                s = e(this);
              s.data("ui-tooltip-open") &&
                (
                  (t = e.Event("blur")),
                  (t.target = t.currentTarget = this),
                  i.close(t, !0)
                ), s.attr("title") && (s.uniqueId(), (i.parents[this.id] = { element: this, title: s.attr("title") }), s.attr("title", ""));
            }),
          this._registerCloseHandlers(t, s),
          this._updateContent(s, t)
        );
    },
    _updateContent: function(e, t) {
      var i,
        s = this.options.content,
        n = this,
        a = t ? t.type : null;
      return "string" == typeof s
        ? this._open(t, e, s)
        : (
            (i = s.call(e[0], function(i) {
              n._delay(function() {
                e.data("ui-tooltip-open") &&
                  (t && (t.type = a), this._open(t, e, i));
              });
            })),
            i && this._open(t, e, i),
            void 0
          );
    },
    _open: function(t, i, s) {
      function n(e) {
        (l.of = e), o.is(":hidden") || o.position(l);
      }
      var a,
        o,
        r,
        h,
        l = e.extend({}, this.options.position);
      if (s) {
        if ((a = this._find(i)))
          return a.tooltip.find(".ui-tooltip-content").html(s), void 0;
        i.is("[title]") &&
          (t && "mouseover" === t.type
            ? i.attr("title", "")
            : i.removeAttr("title")), (a = this._tooltip(i)), (o =
          a.tooltip), this._addDescribedBy(i, o.attr("id")), o
          .find(".ui-tooltip-content")
          .html(s), this.liveRegion.children().hide(), s.clone
          ? ((h = s.clone()), h.removeAttr("id").find("[id]").removeAttr("id"))
          : (h = s), e("<div>").html(h).appendTo(this.liveRegion), this.options
          .track &&
        t &&
        /^mouse/.test(t.type)
          ? (this._on(this.document, { mousemove: n }), n(t))
          : o.position(
              e.extend({ of: i }, this.options.position)
            ), o.hide(), this._show(o, this.options.show), this.options.show &&
          this.options.show.delay &&
          (r = this.delayedShow = setInterval(function() {
            o.is(":visible") && (n(l.of), clearInterval(r));
          }, e.fx.interval)), this._trigger("open", t, { tooltip: o });
      }
    },
    _registerCloseHandlers: function(t, i) {
      var s = {
        keyup: function(t) {
          if (t.keyCode === e.ui.keyCode.ESCAPE) {
            var s = e.Event(t);
            (s.currentTarget = i[0]), this.close(s, !0);
          }
        }
      };
      i[0] !== this.element[0] &&
        (s.remove = function() {
          this._removeTooltip(this._find(i).tooltip);
        }), (t && "mouseover" !== t.type) || (s.mouseleave = "close"), (t &&
        "focusin" !== t.type) ||
        (s.focusout = "close"), this._on(!0, i, s);
    },
    close: function(t) {
      var i,
        s = this,
        n = e(t ? t.currentTarget : this.element),
        a = this._find(n);
      return a
        ? (
            (i = a.tooltip),
            a.closing ||
              (
                clearInterval(this.delayedShow),
                n.data("ui-tooltip-title") &&
                  !n.attr("title") &&
                  n.attr("title", n.data("ui-tooltip-title")),
                this._removeDescribedBy(n),
                (a.hiding = !0),
                i.stop(!0),
                this._hide(i, this.options.hide, function() {
                  s._removeTooltip(e(this));
                }),
                n.removeData("ui-tooltip-open"),
                this._off(n, "mouseleave focusout keyup"),
                n[0] !== this.element[0] && this._off(n, "remove"),
                this._off(this.document, "mousemove"),
                t &&
                  "mouseleave" === t.type &&
                  e.each(this.parents, function(t, i) {
                    e(i.element).attr("title", i.title), delete s.parents[t];
                  }),
                (a.closing = !0),
                this._trigger("close", t, { tooltip: i }),
                a.hiding || (a.closing = !1)
              ),
            void 0
          )
        : (n.removeData("ui-tooltip-open"), void 0);
    },
    _tooltip: function(t) {
      var i = e("<div>")
          .attr("role", "tooltip")
          .addClass(
            "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
              (this.options.tooltipClass || "")
          ),
        s = i.uniqueId().attr("id");
      return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(
        this.document[0].body
      ), (this.tooltips[s] = { element: t, tooltip: i });
    },
    _find: function(e) {
      var t = e.data("ui-tooltip-id");
      return t ? this.tooltips[t] : null;
    },
    _removeTooltip: function(e) {
      e.remove(), delete this.tooltips[e.attr("id")];
    },
    _destroy: function() {
      var t = this;
      e.each(this.tooltips, function(i, s) {
        var n = e.Event("blur"),
          a = s.element;
        (n.target = n.currentTarget =
          a[0]), t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"));
      }), this.liveRegion.remove();
    }
  });
  var y = "ui-effects-",
    b = e;
  (e.effects = { effect: {} }), (function(e, t) {
    function i(e, t, i) {
      var s = d[t.type] || {};
      return null == e
        ? i || !t.def ? null : t.def
        : (
            (e = s.floor ? ~~e : parseFloat(e)),
            isNaN(e)
              ? t.def
              : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e
          );
    }
    function s(i) {
      var s = l(),
        n = (s._rgba = []);
      return (i = i.toLowerCase()), f(h, function(e, a) {
        var o,
          r = a.re.exec(i),
          h = r && a.parse(r),
          l = a.space || "rgba";
        return h
          ? (
              (o = s[l](h)),
              (s[u[l].cache] = o[u[l].cache]),
              (n = s._rgba = o._rgba),
              !1
            )
          : t;
      }), n.length
        ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s)
        : a[i];
    }
    function n(e, t, i) {
      return (i =
        (i + 1) %
        1), 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e;
    }
    var a,
      o =
        "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
      r = /^([\-+])=\s*(\d+\.?\d*)/,
      h = [
        {
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(e) {
            return [e[1], e[2], e[3], e[4]];
          }
        },
        {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(e) {
            return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]];
          }
        },
        {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function(e) {
            return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)];
          }
        },
        {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function(e) {
            return [
              parseInt(e[1] + e[1], 16),
              parseInt(e[2] + e[2], 16),
              parseInt(e[3] + e[3], 16)
            ];
          }
        },
        {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function(e) {
            return [e[1], e[2] / 100, e[3] / 100, e[4]];
          }
        }
      ],
      l = (e.Color = function(t, i, s, n) {
        return new e.Color.fn.parse(t, i, s, n);
      }),
      u = {
        rgba: {
          props: {
            red: { idx: 0, type: "byte" },
            green: { idx: 1, type: "byte" },
            blue: { idx: 2, type: "byte" }
          }
        },
        hsla: {
          props: {
            hue: { idx: 0, type: "degrees" },
            saturation: { idx: 1, type: "percent" },
            lightness: { idx: 2, type: "percent" }
          }
        }
      },
      d = {
        byte: { floor: !0, max: 255 },
        percent: { max: 1 },
        degrees: { mod: 360, floor: !0 }
      },
      c = (l.support = {}),
      p = e("<p>")[0],
      f = e.each;
    (p.style.cssText =
      "background-color:rgba(1,1,1,.5)"), (c.rgba = p.style.backgroundColor.indexOf("rgba") > -1), f(u, function(e, t) {
      (t.cache =
        "_" + e), (t.props.alpha = { idx: 3, type: "percent", def: 1 });
    }), (l.fn = e.extend(l.prototype, {
      parse: function(n, o, r, h) {
        if (n === t) return (this._rgba = [null, null, null, null]), this;
        (n.jquery || n.nodeType) && ((n = e(n).css(o)), (o = t));
        var d = this,
          c = e.type(n),
          p = (this._rgba = []);
        return o !== t && ((n = [n, o, r, h]), (c = "array")), "string" === c
          ? this.parse(s(n) || a._default)
          : "array" === c
            ? (
                f(u.rgba.props, function(e, t) {
                  p[t.idx] = i(n[t.idx], t);
                }),
                this
              )
            : "object" === c
              ? (
                  n instanceof l
                    ? f(u, function(e, t) {
                        n[t.cache] && (d[t.cache] = n[t.cache].slice());
                      })
                    : f(u, function(t, s) {
                        var a = s.cache;
                        f(s.props, function(e, t) {
                          if (!d[a] && s.to) {
                            if ("alpha" === e || null == n[e]) return;
                            d[a] = s.to(d._rgba);
                          }
                          d[a][t.idx] = i(n[e], t, !0);
                        }), d[a] &&
                          0 > e.inArray(null, d[a].slice(0, 3)) &&
                          ((d[a][3] = 1), s.from && (d._rgba = s.from(d[a])));
                      }),
                  this
                )
              : t;
      },
      is: function(e) {
        var i = l(e),
          s = !0,
          n = this;
        return f(u, function(e, a) {
          var o,
            r = i[a.cache];
          return r &&
            (
              (o = n[a.cache] || (a.to && a.to(n._rgba)) || []),
              f(a.props, function(e, i) {
                return null != r[i.idx] ? (s = r[i.idx] === o[i.idx]) : t;
              })
            ), s;
        }), s;
      },
      _space: function() {
        var e = [],
          t = this;
        return f(u, function(i, s) {
          t[s.cache] && e.push(i);
        }), e.pop();
      },
      transition: function(e, t) {
        var s = l(e),
          n = s._space(),
          a = u[n],
          o = 0 === this.alpha() ? l("transparent") : this,
          r = o[a.cache] || a.to(o._rgba),
          h = r.slice();
        return (s = s[a.cache]), f(a.props, function(e, n) {
          var a = n.idx,
            o = r[a],
            l = s[a],
            u = d[n.type] || {};
          null !== l &&
            (null === o
              ? (h[a] = l)
              : (
                  u.mod &&
                    (l - o > u.mod / 2
                      ? (o += u.mod)
                      : o - l > u.mod / 2 && (o -= u.mod)),
                  (h[a] = i((l - o) * t + o, n))
                ));
        }), this[n](h);
      },
      blend: function(t) {
        if (1 === this._rgba[3]) return this;
        var i = this._rgba.slice(),
          s = i.pop(),
          n = l(t)._rgba;
        return l(
          e.map(i, function(e, t) {
            return (1 - s) * n[t] + s * e;
          })
        );
      },
      toRgbaString: function() {
        var t = "rgba(",
          i = e.map(this._rgba, function(e, t) {
            return null == e ? (t > 2 ? 1 : 0) : e;
          });
        return 1 === i[3] && (i.pop(), (t = "rgb(")), t + i.join() + ")";
      },
      toHslaString: function() {
        var t = "hsla(",
          i = e.map(this.hsla(), function(e, t) {
            return null == e &&
              (e =
                t > 2
                  ? 1
                  : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e;
          });
        return 1 === i[3] && (i.pop(), (t = "hsl(")), t + i.join() + ")";
      },
      toHexString: function(t) {
        var i = this._rgba.slice(),
          s = i.pop();
        return t && i.push(~~(255 * s)), "#" +
          e
            .map(i, function(e) {
              return (e = (e || 0).toString(16)), 1 === e.length ? "0" + e : e;
            })
            .join("");
      },
      toString: function() {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      }
    })), (l.fn.parse.prototype = l.fn), (u.hsla.to = function(e) {
      if (null == e[0] || null == e[1] || null == e[2])
        return [null, null, null, e[3]];
      var t,
        i,
        s = e[0] / 255,
        n = e[1] / 255,
        a = e[2] / 255,
        o = e[3],
        r = Math.max(s, n, a),
        h = Math.min(s, n, a),
        l = r - h,
        u = r + h,
        d = 0.5 * u;
      return (t =
        h === r
          ? 0
          : s === r
            ? 60 * (n - a) / l + 360
            : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240), (i =
        0 === l ? 0 : 0.5 >= d ? l / u : l / (2 - u)), [
        Math.round(t) % 360,
        i,
        d,
        null == o ? 1 : o
      ];
    }), (u.hsla.from = function(e) {
      if (null == e[0] || null == e[1] || null == e[2])
        return [null, null, null, e[3]];
      var t = e[0] / 360,
        i = e[1],
        s = e[2],
        a = e[3],
        o = 0.5 >= s ? s * (1 + i) : s + i - s * i,
        r = 2 * s - o;
      return [
        Math.round(255 * n(r, o, t + 1 / 3)),
        Math.round(255 * n(r, o, t)),
        Math.round(255 * n(r, o, t - 1 / 3)),
        a
      ];
    }), f(u, function(s, n) {
      var a = n.props,
        o = n.cache,
        h = n.to,
        u = n.from;
      (l.fn[s] = function(s) {
        if ((h && !this[o] && (this[o] = h(this._rgba)), s === t))
          return this[o].slice();
        var n,
          r = e.type(s),
          d = "array" === r || "object" === r ? s : arguments,
          c = this[o].slice();
        return f(a, function(e, t) {
          var s = d["object" === r ? e : t.idx];
          null == s && (s = c[t.idx]), (c[t.idx] = i(s, t));
        }), u ? ((n = l(u(c))), (n[o] = c), n) : l(c);
      }), f(a, function(t, i) {
        l.fn[t] ||
          (l.fn[t] = function(n) {
            var a,
              o = e.type(n),
              h = "alpha" === t ? (this._hsla ? "hsla" : "rgba") : s,
              l = this[h](),
              u = l[i.idx];
            return "undefined" === o
              ? u
              : (
                  "function" === o && ((n = n.call(this, u)), (o = e.type(n))),
                  null == n && i.empty
                    ? this
                    : (
                        "string" === o &&
                          (
                            (a = r.exec(n)),
                            a &&
                              (n =
                                u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))
                          ),
                        (l[i.idx] = n),
                        this[h](l)
                      )
                );
          });
      });
    }), (l.hook = function(t) {
      var i = t.split(" ");
      f(i, function(t, i) {
        (e.cssHooks[i] = {
          set: function(t, n) {
            var a,
              o,
              r = "";
            if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
              if (((n = l(a || n)), !c.rgba && 1 !== n._rgba[3])) {
                for (
                  o = "backgroundColor" === i ? t.parentNode : t;
                  ("" === r || "transparent" === r) && o && o.style;

                )
                  try {
                    (r = e.css(o, "backgroundColor")), (o = o.parentNode);
                  } catch (h) {}
                n = n.blend(r && "transparent" !== r ? r : "_default");
              }
              n = n.toRgbaString();
            }
            try {
              t.style[i] = n;
            } catch (h) {}
          }
        }), (e.fx.step[i] = function(t) {
          t.colorInit ||
            (
              (t.start = l(t.elem, i)),
              (t.end = l(t.end)),
              (t.colorInit = !0)
            ), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos));
        });
      });
    }), l.hook(o), (e.cssHooks.borderColor = {
      expand: function(e) {
        var t = {};
        return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
          t["border" + s + "Color"] = e;
        }), t;
      }
    }), (a = e.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff"
    });
  })(b), (function() {
    function t(t) {
      var i,
        s,
        n = t.ownerDocument.defaultView
          ? t.ownerDocument.defaultView.getComputedStyle(t, null)
          : t.currentStyle,
        a = {};
      if (n && n.length && n[0] && n[n[0]])
        for (s = n.length; s--; )
          (i = n[s]), "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
      else for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
      return a;
    }
    function i(t, i) {
      var s,
        a,
        o = {};
      for (s in i)
        (a = i[s]), t[s] !== a &&
          (n[s] || ((e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a)));
      return o;
    }
    var s = ["add", "remove", "toggle"],
      n = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
      };
    e.each(
      [
        "borderLeftStyle",
        "borderRightStyle",
        "borderBottomStyle",
        "borderTopStyle"
      ],
      function(t, i) {
        e.fx.step[i] = function(e) {
          (("none" !== e.end && !e.setAttr) || (1 === e.pos && !e.setAttr)) &&
            (b.style(e.elem, i, e.end), (e.setAttr = !0));
        };
      }
    ), e.fn.addBack ||
      (e.fn.addBack = function(e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      }), (e.effects.animateClass = function(n, a, o, r) {
      var h = e.speed(a, o, r);
      return this.queue(function() {
        var a,
          o = e(this),
          r = o.attr("class") || "",
          l = h.children ? o.find("*").addBack() : o;
        (l = l.map(function() {
          var i = e(this);
          return { el: i, start: t(this) };
        })), (a = function() {
          e.each(s, function(e, t) {
            n[t] && o[t + "Class"](n[t]);
          });
        }), a(), (l = l.map(function() {
          return (this.end = t(
            this.el[0]
          )), (this.diff = i(this.start, this.end)), this;
        })), o.attr("class", r), (l = l.map(function() {
          var t = this,
            i = e.Deferred(),
            s = e.extend({}, h, {
              queue: !1,
              complete: function() {
                i.resolve(t);
              }
            });
          return this.el.animate(this.diff, s), i.promise();
        })), e.when.apply(e, l.get()).done(function() {
          a(), e.each(arguments, function() {
            var t = this.el;
            e.each(this.diff, function(e) {
              t.css(e, "");
            });
          }), h.complete.call(o[0]);
        });
      });
    }), e.fn.extend({
      addClass: (function(t) {
        return function(i, s, n, a) {
          return s
            ? e.effects.animateClass.call(this, { add: i }, s, n, a)
            : t.apply(this, arguments);
        };
      })(e.fn.addClass),
      removeClass: (function(t) {
        return function(i, s, n, a) {
          return arguments.length > 1
            ? e.effects.animateClass.call(this, { remove: i }, s, n, a)
            : t.apply(this, arguments);
        };
      })(e.fn.removeClass),
      toggleClass: (function(t) {
        return function(i, s, n, a, o) {
          return "boolean" == typeof s || void 0 === s
            ? n
              ? e.effects.animateClass.call(
                  this,
                  s ? { add: i } : { remove: i },
                  n,
                  a,
                  o
                )
              : t.apply(this, arguments)
            : e.effects.animateClass.call(this, { toggle: i }, s, n, a);
        };
      })(e.fn.toggleClass),
      switchClass: function(t, i, s, n, a) {
        return e.effects.animateClass.call(
          this,
          { add: i, remove: t },
          s,
          n,
          a
        );
      }
    });
  })(), (function() {
    function t(t, i, s, n) {
      return e.isPlainObject(t) &&
        (
          (i = t),
          (t = t.effect)
        ), (t = { effect: t }), null == i && (i = {}), e.isFunction(i) && ((n = i), (s = null), (i = {})), ("number" == typeof i || e.fx.speeds[i]) && ((n = s), (s = i), (i = {})), e.isFunction(s) && ((n = s), (s = null)), i && e.extend(t, i), (s = s || i.duration), (t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default), (t.complete = n || i.complete), t;
    }
    function i(t) {
      return !t || "number" == typeof t || e.fx.speeds[t]
        ? !0
        : "string" != typeof t || e.effects.effect[t]
          ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0
          : !0;
    }
    e.extend(e.effects, {
      version: "1.11.4",
      save: function(e, t) {
        for (var i = 0; t.length > i; i++)
          null !== t[i] && e.data(y + t[i], e[0].style[t[i]]);
      },
      restore: function(e, t) {
        var i, s;
        for (s = 0; t.length > s; s++)
          null !== t[s] &&
            ((i = e.data(y + t[s])), void 0 === i && (i = ""), e.css(t[s], i));
      },
      setMode: function(e, t) {
        return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t;
      },
      getBaseline: function(e, t) {
        var i, s;
        switch (e[0]) {
          case "top":
            i = 0;
            break;
          case "middle":
            i = 0.5;
            break;
          case "bottom":
            i = 1;
            break;
          default:
            i = e[0] / t.height;
        }
        switch (e[1]) {
          case "left":
            s = 0;
            break;
          case "center":
            s = 0.5;
            break;
          case "right":
            s = 1;
            break;
          default:
            s = e[1] / t.width;
        }
        return { x: s, y: i };
      },
      createWrapper: function(t) {
        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
        var i = {
            width: t.outerWidth(!0),
            height: t.outerHeight(!0),
            float: t.css("float")
          },
          s = e("<div></div>")
            .addClass("ui-effects-wrapper")
            .css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0
            }),
          n = { width: t.width(), height: t.height() },
          a = document.activeElement;
        try {
          a.id;
        } catch (o) {
          a = document.body;
        }
        return t.wrap(s), (t[0] === a || e.contains(t[0], a)) &&
          e(a).focus(), (s = t.parent()), "static" === t.css("position")
          ? (s.css({ position: "relative" }), t.css({ position: "relative" }))
          : (
              e.extend(i, {
                position: t.css("position"),
                zIndex: t.css("z-index")
              }),
              e.each(["top", "left", "bottom", "right"], function(e, s) {
                (i[s] = t.css(s)), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
              }),
              t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
              })
            ), t.css(n), s.css(i).show();
      },
      removeWrapper: function(t) {
        var i = document.activeElement;
        return t.parent().is(".ui-effects-wrapper") &&
          (
            t.parent().replaceWith(t),
            (t[0] === i || e.contains(t[0], i)) && e(i).focus()
          ), t;
      },
      setTransition: function(t, i, s, n) {
        return (n = n || {}), e.each(i, function(e, i) {
          var a = t.cssUnit(i);
          a[0] > 0 && (n[i] = a[0] * s + a[1]);
        }), n;
      }
    }), e.fn.extend({
      effect: function() {
        function i(t) {
          function i() {
            e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t();
          }
          var n = e(this),
            a = s.complete,
            r = s.mode;
          (n.is(":hidden") ? "hide" === r : "show" === r)
            ? (n[r](), i())
            : o.call(n[0], s, i);
        }
        var s = t.apply(this, arguments),
          n = s.mode,
          a = s.queue,
          o = e.effects.effect[s.effect];
        return e.fx.off || !o
          ? n
            ? this[n](s.duration, s.complete)
            : this.each(function() {
                s.complete && s.complete.call(this);
              })
          : a === !1 ? this.each(i) : this.queue(a || "fx", i);
      },
      show: (function(e) {
        return function(s) {
          if (i(s)) return e.apply(this, arguments);
          var n = t.apply(this, arguments);
          return (n.mode = "show"), this.effect.call(this, n);
        };
      })(e.fn.show),
      hide: (function(e) {
        return function(s) {
          if (i(s)) return e.apply(this, arguments);
          var n = t.apply(this, arguments);
          return (n.mode = "hide"), this.effect.call(this, n);
        };
      })(e.fn.hide),
      toggle: (function(e) {
        return function(s) {
          if (i(s) || "boolean" == typeof s) return e.apply(this, arguments);
          var n = t.apply(this, arguments);
          return (n.mode = "toggle"), this.effect.call(this, n);
        };
      })(e.fn.toggle),
      cssUnit: function(t) {
        var i = this.css(t),
          s = [];
        return e.each(["em", "px", "%", "pt"], function(e, t) {
          i.indexOf(t) > 0 && (s = [parseFloat(i), t]);
        }), s;
      }
    });
  })(), (function() {
    var t = {};
    e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
      t[i] = function(t) {
        return Math.pow(t, e + 2);
      };
    }), e.extend(t, {
      Sine: function(e) {
        return 1 - Math.cos(e * Math.PI / 2);
      },
      Circ: function(e) {
        return 1 - Math.sqrt(1 - e * e);
      },
      Elastic: function(e) {
        return 0 === e || 1 === e
          ? e
          : -Math.pow(2, 8 * (e - 1)) *
            Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15);
      },
      Back: function(e) {
        return e * e * (3 * e - 2);
      },
      Bounce: function(e) {
        for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e; );
        return (
          1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
        );
      }
    }), e.each(t, function(t, i) {
      (e.easing["easeIn" + t] = i), (e.easing["easeOut" + t] = function(e) {
        return 1 - i(1 - e);
      }), (e.easing["easeInOut" + t] = function(e) {
        return 0.5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2;
      });
    });
  })(), e.effects, (e.effects.effect.blind = function(t, i) {
    var s,
      n,
      a,
      o = e(this),
      r = /up|down|vertical/,
      h = /up|left|vertical|horizontal/,
      l = ["position", "top", "bottom", "left", "right", "height", "width"],
      u = e.effects.setMode(o, t.mode || "hide"),
      d = t.direction || "up",
      c = r.test(d),
      p = c ? "height" : "width",
      f = c ? "top" : "left",
      m = h.test(d),
      g = {},
      v = "show" === u;
    o.parent().is(".ui-effects-wrapper")
      ? e.effects.save(o.parent(), l)
      : e.effects.save(o, l), o.show(), (s = e.effects
      .createWrapper(o)
      .css({ overflow: "hidden" })), (n = s[p]()), (a =
      parseFloat(s.css(f)) || 0), (g[p] = v ? n : 0), m ||
      (
        o
          .css(c ? "bottom" : "right", 0)
          .css(c ? "top" : "left", "auto")
          .css({ position: "absolute" }),
        (g[f] = v ? a : n + a)
      ), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, {
      duration: t.duration,
      easing: t.easing,
      queue: !1,
      complete: function() {
        "hide" === u && o.hide(), e.effects.restore(
          o,
          l
        ), e.effects.removeWrapper(o), i();
      }
    });
  }), (e.effects.effect.bounce = function(t, i) {
    var s,
      n,
      a,
      o = e(this),
      r = ["position", "top", "bottom", "left", "right", "height", "width"],
      h = e.effects.setMode(o, t.mode || "effect"),
      l = "hide" === h,
      u = "show" === h,
      d = t.direction || "up",
      c = t.distance,
      p = t.times || 5,
      f = 2 * p + (u || l ? 1 : 0),
      m = t.duration / f,
      g = t.easing,
      v = "up" === d || "down" === d ? "top" : "left",
      y = "up" === d || "left" === d,
      b = o.queue(),
      _ = b.length;
    for (
      (u || l) && r.push("opacity"), e.effects.save(
        o,
        r
      ), o.show(), e.effects.createWrapper(o), c ||
        (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u &&
        (
          (a = { opacity: 1 }),
          (a[v] = 0),
          o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)
        ), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0;
      p > s;
      s++
    )
      (n = {}), (n[v] = (y ? "-=" : "+=") + c), o
        .animate(n, m, g)
        .animate(a, m, g), (c = l ? 2 * c : c / 2);
    l &&
      (
        (n = { opacity: 0 }),
        (n[v] = (y ? "-=" : "+=") + c),
        o.animate(n, m, g)
      ), o.queue(function() {
      l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i();
    }), _ > 1 &&
      b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue();
  }), (e.effects.effect.clip = function(t, i) {
    var s,
      n,
      a,
      o = e(this),
      r = ["position", "top", "bottom", "left", "right", "height", "width"],
      h = e.effects.setMode(o, t.mode || "hide"),
      l = "show" === h,
      u = t.direction || "vertical",
      d = "vertical" === u,
      c = d ? "height" : "width",
      p = d ? "top" : "left",
      f = {};
    e.effects.save(o, r), o.show(), (s = e.effects
      .createWrapper(o)
      .css({ overflow: "hidden" })), (n =
      "IMG" === o[0].tagName ? s : o), (a = n[c]()), l &&
      (n.css(c, 0), n.css(p, a / 2)), (f[c] = l ? a : 0), (f[p] = l
      ? 0
      : a / 2), n.animate(f, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: function() {
        l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i();
      }
    });
  }), (e.effects.effect.drop = function(t, i) {
    var s,
      n = e(this),
      a = [
        "position",
        "top",
        "bottom",
        "left",
        "right",
        "opacity",
        "height",
        "width"
      ],
      o = e.effects.setMode(n, t.mode || "hide"),
      r = "show" === o,
      h = t.direction || "left",
      l = "up" === h || "down" === h ? "top" : "left",
      u = "up" === h || "left" === h ? "pos" : "neg",
      d = { opacity: r ? 1 : 0 };
    e.effects.save(n, a), n.show(), e.effects.createWrapper(n), (s =
      t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2), r &&
      n.css("opacity", 0).css(l, "pos" === u ? -s : s), (d[l] =
      (r ? ("pos" === u ? "+=" : "-=") : "pos" === u ? "-=" : "+=") +
      s), n.animate(d, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: function() {
        "hide" === o && n.hide(), e.effects.restore(
          n,
          a
        ), e.effects.removeWrapper(n), i();
      }
    });
  }), (e.effects.effect.explode = function(t, i) {
    function s() {
      b.push(this), b.length === d * c && n();
    }
    function n() {
      p.css({ visibility: "visible" }), e(b).remove(), m || p.hide(), i();
    }
    var a,
      o,
      r,
      h,
      l,
      u,
      d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
      c = d,
      p = e(this),
      f = e.effects.setMode(p, t.mode || "hide"),
      m = "show" === f,
      g = p.show().css("visibility", "hidden").offset(),
      v = Math.ceil(p.outerWidth() / c),
      y = Math.ceil(p.outerHeight() / d),
      b = [];
    for (a = 0; d > a; a++)
      for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++)
        (r = g.left + o * v), (l = o - (c - 1) / 2), p
          .clone()
          .appendTo("body")
          .wrap("<div></div>")
          .css({
            position: "absolute",
            visibility: "visible",
            left: -o * v,
            top: -a * y
          })
          .parent()
          .addClass("ui-effects-explode")
          .css({
            position: "absolute",
            overflow: "hidden",
            width: v,
            height: y,
            left: r + (m ? l * v : 0),
            top: h + (m ? u * y : 0),
            opacity: m ? 0 : 1
          })
          .animate(
            {
              left: r + (m ? 0 : l * v),
              top: h + (m ? 0 : u * y),
              opacity: m ? 1 : 0
            },
            t.duration || 500,
            t.easing,
            s
          );
  }), (e.effects.effect.fade = function(t, i) {
    var s = e(this),
      n = e.effects.setMode(s, t.mode || "toggle");
    s.animate(
      { opacity: n },
      { queue: !1, duration: t.duration, easing: t.easing, complete: i }
    );
  }), (e.effects.effect.fold = function(t, i) {
    var s,
      n,
      a = e(this),
      o = ["position", "top", "bottom", "left", "right", "height", "width"],
      r = e.effects.setMode(a, t.mode || "hide"),
      h = "show" === r,
      l = "hide" === r,
      u = t.size || 15,
      d = /([0-9]+)%/.exec(u),
      c = !!t.horizFirst,
      p = h !== c,
      f = p ? ["width", "height"] : ["height", "width"],
      m = t.duration / 2,
      g = {},
      v = {};
    e.effects.save(a, o), a.show(), (s = e.effects
      .createWrapper(a)
      .css({ overflow: "hidden" })), (n = p
      ? [s.width(), s.height()]
      : [s.height(), s.width()]), d &&
      (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h &&
      s.css(c ? { height: 0, width: u } : { height: u, width: 0 }), (g[f[0]] = h
      ? n[0]
      : u), (v[f[1]] = h ? n[1] : 0), s
      .animate(g, m, t.easing)
      .animate(v, m, t.easing, function() {
        l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i();
      });
  }), (e.effects.effect.highlight = function(t, i) {
    var s = e(this),
      n = ["backgroundImage", "backgroundColor", "opacity"],
      a = e.effects.setMode(s, t.mode || "show"),
      o = { backgroundColor: s.css("backgroundColor") };
    "hide" === a && (o.opacity = 0), e.effects.save(s, n), s
      .show()
      .css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" })
      .animate(o, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function() {
          "hide" === a && s.hide(), e.effects.restore(s, n), i();
        }
      });
  }), (e.effects.effect.size = function(t, i) {
    var s,
      n,
      a,
      o = e(this),
      r = [
        "position",
        "top",
        "bottom",
        "left",
        "right",
        "width",
        "height",
        "overflow",
        "opacity"
      ],
      h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
      l = ["width", "height", "overflow"],
      u = ["fontSize"],
      d = [
        "borderTopWidth",
        "borderBottomWidth",
        "paddingTop",
        "paddingBottom"
      ],
      c = [
        "borderLeftWidth",
        "borderRightWidth",
        "paddingLeft",
        "paddingRight"
      ],
      p = e.effects.setMode(o, t.mode || "effect"),
      f = t.restore || "effect" !== p,
      m = t.scale || "both",
      g = t.origin || ["middle", "center"],
      v = o.css("position"),
      y = f ? r : h,
      b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
    "show" === p && o.show(), (s = {
      height: o.height(),
      width: o.width(),
      outerHeight: o.outerHeight(),
      outerWidth: o.outerWidth()
    }), "toggle" === t.mode && "show" === p
      ? ((o.from = t.to || b), (o.to = t.from || s))
      : (
          (o.from = t.from || ("show" === p ? b : s)),
          (o.to = t.to || ("hide" === p ? b : s))
        ), (a = {
      from: { y: o.from.height / s.height, x: o.from.width / s.width },
      to: { y: o.to.height / s.height, x: o.to.width / s.width }
    }), ("box" === m || "both" === m) &&
      (
        a.from.y !== a.to.y &&
          (
            (y = y.concat(d)),
            (o.from = e.effects.setTransition(o, d, a.from.y, o.from)),
            (o.to = e.effects.setTransition(o, d, a.to.y, o.to))
          ),
        a.from.x !== a.to.x &&
          (
            (y = y.concat(c)),
            (o.from = e.effects.setTransition(o, c, a.from.x, o.from)),
            (o.to = e.effects.setTransition(o, c, a.to.x, o.to))
          )
      ), ("content" === m || "both" === m) &&
      a.from.y !== a.to.y &&
      (
        (y = y.concat(u).concat(l)),
        (o.from = e.effects.setTransition(o, u, a.from.y, o.from)),
        (o.to = e.effects.setTransition(o, u, a.to.y, o.to))
      ), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o
      .css("overflow", "hidden")
      .css(o.from), g &&
      (
        (n = e.effects.getBaseline(g, s)),
        (o.from.top = (s.outerHeight - o.outerHeight()) * n.y),
        (o.from.left = (s.outerWidth - o.outerWidth()) * n.x),
        (o.to.top = (s.outerHeight - o.to.outerHeight) * n.y),
        (o.to.left = (s.outerWidth - o.to.outerWidth) * n.x)
      ), o.css(o.from), ("content" === m || "both" === m) &&
      (
        (d = d.concat(["marginTop", "marginBottom"]).concat(u)),
        (c = c.concat(["marginLeft", "marginRight"])),
        (l = r.concat(d).concat(c)),
        o.find("*[width]").each(function() {
          var i = e(this),
            s = {
              height: i.height(),
              width: i.width(),
              outerHeight: i.outerHeight(),
              outerWidth: i.outerWidth()
            };
          f &&
            e.effects.save(
              i,
              l
            ), (i.from = { height: s.height * a.from.y, width: s.width * a.from.x, outerHeight: s.outerHeight * a.from.y, outerWidth: s.outerWidth * a.from.x }), (i.to = { height: s.height * a.to.y, width: s.width * a.to.x, outerHeight: s.height * a.to.y, outerWidth: s.width * a.to.x }), a.from.y !== a.to.y && ((i.from = e.effects.setTransition(i, d, a.from.y, i.from)), (i.to = e.effects.setTransition(i, d, a.to.y, i.to))), a.from.x !== a.to.x && ((i.from = e.effects.setTransition(i, c, a.from.x, i.from)), (i.to = e.effects.setTransition(i, c, a.to.x, i.to))), i.css(i.from), i.animate(
            i.to,
            t.duration,
            t.easing,
            function() {
              f && e.effects.restore(i, l);
            }
          );
        })
      ), o.animate(o.to, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: function() {
        0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p &&
          o.hide(), e.effects.restore(o, y), f ||
          ("static" === v
            ? o.css({ position: "relative", top: o.to.top, left: o.to.left })
            : e.each(["top", "left"], function(e, t) {
                o.css(t, function(t, i) {
                  var s = parseInt(i, 10),
                    n = e ? o.to.left : o.to.top;
                  return "auto" === i ? n + "px" : s + n + "px";
                });
              })), e.effects.removeWrapper(o), i();
      }
    });
  }), (e.effects.effect.scale = function(t, i) {
    var s = e(this),
      n = e.extend(!0, {}, t),
      a = e.effects.setMode(s, t.mode || "effect"),
      o =
        parseInt(t.percent, 10) ||
        (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100),
      r = t.direction || "both",
      h = t.origin,
      l = {
        height: s.height(),
        width: s.width(),
        outerHeight: s.outerHeight(),
        outerWidth: s.outerWidth()
      },
      u = {
        y: "horizontal" !== r ? o / 100 : 1,
        x: "vertical" !== r ? o / 100 : 1
      };
    (n.effect = "size"), (n.queue = !1), (n.complete = i), "effect" !== a &&
      ((n.origin = h || ["middle", "center"]), (n.restore = !0)), (n.from =
      t.from ||
      ("show" === a
        ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
        : l)), (n.to = {
      height: l.height * u.y,
      width: l.width * u.x,
      outerHeight: l.outerHeight * u.y,
      outerWidth: l.outerWidth * u.x
    }), n.fade &&
      (
        "show" === a && ((n.from.opacity = 0), (n.to.opacity = 1)),
        "hide" === a && ((n.from.opacity = 1), (n.to.opacity = 0))
      ), s.effect(n);
  }), (e.effects.effect.puff = function(t, i) {
    var s = e(this),
      n = e.effects.setMode(s, t.mode || "hide"),
      a = "hide" === n,
      o = parseInt(t.percent, 10) || 150,
      r = o / 100,
      h = {
        height: s.height(),
        width: s.width(),
        outerHeight: s.outerHeight(),
        outerWidth: s.outerWidth()
      };
    e.extend(t, {
      effect: "scale",
      queue: !1,
      fade: !0,
      mode: n,
      complete: i,
      percent: a ? o : 100,
      from: a
        ? h
        : {
            height: h.height * r,
            width: h.width * r,
            outerHeight: h.outerHeight * r,
            outerWidth: h.outerWidth * r
          }
    }), s.effect(t);
  }), (e.effects.effect.pulsate = function(t, i) {
    var s,
      n = e(this),
      a = e.effects.setMode(n, t.mode || "show"),
      o = "show" === a,
      r = "hide" === a,
      h = o || "hide" === a,
      l = 2 * (t.times || 5) + (h ? 1 : 0),
      u = t.duration / l,
      d = 0,
      c = n.queue(),
      p = c.length;
    for (
      (o || !n.is(":visible")) && (n.css("opacity", 0).show(), (d = 1)), s = 1;
      l > s;
      s++
    )
      n.animate({ opacity: d }, u, t.easing), (d = 1 - d);
    n.animate({ opacity: d }, u, t.easing), n.queue(function() {
      r && n.hide(), i();
    }), p > 1 &&
      c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue();
  }), (e.effects.effect.shake = function(t, i) {
    var s,
      n = e(this),
      a = ["position", "top", "bottom", "left", "right", "height", "width"],
      o = e.effects.setMode(n, t.mode || "effect"),
      r = t.direction || "left",
      h = t.distance || 20,
      l = t.times || 3,
      u = 2 * l + 1,
      d = Math.round(t.duration / u),
      c = "up" === r || "down" === r ? "top" : "left",
      p = "up" === r || "left" === r,
      f = {},
      m = {},
      g = {},
      v = n.queue(),
      y = v.length;
    for (
      e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] =
        (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] =
        (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1;
      l > s;
      s++
    )
      n.animate(m, d, t.easing).animate(g, d, t.easing);
    n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function() {
      "hide" === o &&
        n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i();
    }), y > 1 &&
      v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue();
  }), (e.effects.effect.slide = function(t, i) {
    var s,
      n = e(this),
      a = ["position", "top", "bottom", "left", "right", "width", "height"],
      o = e.effects.setMode(n, t.mode || "show"),
      r = "show" === o,
      h = t.direction || "left",
      l = "up" === h || "down" === h ? "top" : "left",
      u = "up" === h || "left" === h,
      d = {};
    e.effects.save(n, a), n.show(), (s =
      t.distance ||
      n["top" === l ? "outerHeight" : "outerWidth"](
        !0
      )), e.effects.createWrapper(n).css({ overflow: "hidden" }), r &&
      n.css(l, u ? (isNaN(s) ? "-" + s : -s) : s), (d[l] =
      (r ? (u ? "+=" : "-=") : u ? "-=" : "+=") + s), n.animate(d, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: function() {
        "hide" === o && n.hide(), e.effects.restore(
          n,
          a
        ), e.effects.removeWrapper(n), i();
      }
    });
  }), (e.effects.effect.transfer = function(t, i) {
    var s = e(this),
      n = e(t.to),
      a = "fixed" === n.css("position"),
      o = e("body"),
      r = a ? o.scrollTop() : 0,
      h = a ? o.scrollLeft() : 0,
      l = n.offset(),
      u = {
        top: l.top - r,
        left: l.left - h,
        height: n.innerHeight(),
        width: n.innerWidth()
      },
      d = s.offset(),
      c = e("<div class='ui-effects-transfer'></div>")
        .appendTo(document.body)
        .addClass(t.className)
        .css({
          top: d.top - r,
          left: d.left - h,
          height: s.innerHeight(),
          width: s.innerWidth(),
          position: a ? "fixed" : "absolute"
        })
        .animate(u, t.duration, t.easing, function() {
          c.remove(), i();
        });
  });
});
$(document).ready(function() {
  $("#pre").on("click", function() {
    $("#preloader").removeClass("preloader");
  });
});
