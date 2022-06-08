const Ho = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
};
Ho();
function ps(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Wo =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Vo = ps(Wo);
function Sr(e) {
  return !!e || e === "";
}
function gs(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ge(s) ? Jo(s) : gs(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else {
    if (ge(e)) return e;
    if (ue(e)) return e;
  }
}
const qo = /;(?![^(]*\))/g,
  zo = /:(.+)/;
function Jo(e) {
  const t = {};
  return (
    e.split(qo).forEach((n) => {
      if (n) {
        const s = n.split(zo);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }),
    t
  );
}
function De(e) {
  let t = "";
  if (ge(e)) t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = De(e[n]);
      s && (t += s + " ");
    }
  else if (ue(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Yo(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = Cn(e[s], t[s]);
  return n;
}
function Cn(e, t) {
  if (e === t) return !0;
  let n = Rs(e),
    s = Rs(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = Jt(e)), (s = Jt(t)), n || s)) return e === t;
  if (((n = B(e)), (s = B(t)), n || s)) return n && s ? Yo(e, t) : !1;
  if (((n = ue(e)), (s = ue(t)), n || s)) {
    if (!n || !s) return !1;
    const r = Object.keys(e).length,
      o = Object.keys(t).length;
    if (r !== o) return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        a = t.hasOwnProperty(i);
      if ((l && !a) || (!l && a) || !Cn(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function Ar(e, t) {
  return e.findIndex((n) => Cn(n, t));
}
const Z = (e) =>
    ge(e)
      ? e
      : e == null
      ? ""
      : B(e) || (ue(e) && (e.toString === $r || !U(e.toString)))
      ? JSON.stringify(e, Er, 2)
      : String(e),
  Er = (e, t) =>
    t && t.__v_isRef
      ? Er(e, t.value)
      : Mt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : An(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ue(t) && !B(t) && !Mr(t)
      ? String(t)
      : t,
  te = {},
  $t = [],
  Ie = () => {},
  Zo = () => !1,
  Xo = /^on[^a-z]/,
  Sn = (e) => Xo.test(e),
  _s = (e) => e.startsWith("onUpdate:"),
  pe = Object.assign,
  ms = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Qo = Object.prototype.hasOwnProperty,
  q = (e, t) => Qo.call(e, t),
  B = Array.isArray,
  Mt = (e) => rn(e) === "[object Map]",
  An = (e) => rn(e) === "[object Set]",
  Rs = (e) => rn(e) === "[object Date]",
  U = (e) => typeof e == "function",
  ge = (e) => typeof e == "string",
  Jt = (e) => typeof e == "symbol",
  ue = (e) => e !== null && typeof e == "object",
  Tr = (e) => ue(e) && U(e.then) && U(e.catch),
  $r = Object.prototype.toString,
  rn = (e) => $r.call(e),
  Go = (e) => rn(e).slice(8, -1),
  Mr = (e) => rn(e) === "[object Object]",
  bs = (e) =>
    ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  hn = ps(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  En = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ei = /-(\w)/g,
  He = En((e) => e.replace(ei, (t, n) => (n ? n.toUpperCase() : ""))),
  ti = /\B([A-Z])/g,
  jt = En((e) => e.replace(ti, "-$1").toLowerCase()),
  Tn = En((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Un = En((e) => (e ? `on${Tn(e)}` : "")),
  Yt = (e, t) => !Object.is(e, t),
  pn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  mn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  bn = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Ds;
const ni = () =>
  Ds ||
  (Ds =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let Ne;
class si {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Ne &&
        ((this.parent = Ne),
        (this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const n = Ne;
      try {
        return (Ne = this), t();
      } finally {
        Ne = n;
      }
    }
  }
  on() {
    Ne = this;
  }
  off() {
    Ne = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.active = !1;
    }
  }
}
function ri(e, t = Ne) {
  t && t.active && t.effects.push(e);
}
const vs = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Or = (e) => (e.w & at) > 0,
  Ir = (e) => (e.n & at) > 0,
  oi = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= at;
  },
  ii = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Or(r) && !Ir(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~at),
          (r.n &= ~at);
      }
      t.length = n;
    }
  },
  Zn = new WeakMap();
let Dt = 0,
  at = 1;
const Xn = 30;
let Me;
const vt = Symbol(""),
  Qn = Symbol("");
class ys {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      ri(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Me,
      n = it;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Me),
        (Me = this),
        (it = !0),
        (at = 1 << ++Dt),
        Dt <= Xn ? oi(this) : Ks(this),
        this.fn()
      );
    } finally {
      Dt <= Xn && ii(this),
        (at = 1 << --Dt),
        (Me = this.parent),
        (it = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Me === this
      ? (this.deferStop = !0)
      : this.active &&
        (Ks(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ks(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let it = !0;
const Pr = [];
function Lt() {
  Pr.push(it), (it = !1);
}
function Ft() {
  const e = Pr.pop();
  it = e === void 0 ? !0 : e;
}
function Ce(e, t, n) {
  if (it && Me) {
    let s = Zn.get(e);
    s || Zn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = vs())), jr(r);
  }
}
function jr(e, t) {
  let n = !1;
  Dt <= Xn ? Ir(e) || ((e.n |= at), (n = !Or(e))) : (n = !e.has(Me)),
    n && (e.add(Me), Me.deps.push(e));
}
function Xe(e, t, n, s, r, o) {
  const i = Zn.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && B(e))
    i.forEach((a, f) => {
      (f === "length" || f >= s) && l.push(a);
    });
  else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        B(e)
          ? bs(n) && l.push(i.get("length"))
          : (l.push(i.get(vt)), Mt(e) && l.push(i.get(Qn)));
        break;
      case "delete":
        B(e) || (l.push(i.get(vt)), Mt(e) && l.push(i.get(Qn)));
        break;
      case "set":
        Mt(e) && l.push(i.get(vt));
        break;
    }
  if (l.length === 1) l[0] && Gn(l[0]);
  else {
    const a = [];
    for (const f of l) f && a.push(...f);
    Gn(vs(a));
  }
}
function Gn(e, t) {
  const n = B(e) ? e : [...e];
  for (const s of n) s.computed && Us(s);
  for (const s of n) s.computed || Us(s);
}
function Us(e, t) {
  (e !== Me || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const li = ps("__proto__,__v_isRef,__isVue"),
  Lr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Jt)
  ),
  ai = ks(),
  ci = ks(!1, !0),
  ui = ks(!0),
  Hs = fi();
function fi() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = Y(this);
        for (let o = 0, i = this.length; o < i; o++) Ce(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(Y)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Lt();
        const s = Y(this)[t].apply(this, n);
        return Ft(), s;
      };
    }),
    e
  );
}
function ks(e = !1, t = !1) {
  return function (s, r, o) {
    if (r === "__v_isReactive") return !e;
    if (r === "__v_isReadonly") return e;
    if (r === "__v_isShallow") return t;
    if (r === "__v_raw" && o === (e ? (t ? Ei : Dr) : t ? Rr : Br).get(s))
      return s;
    const i = B(s);
    if (!e && i && q(Hs, r)) return Reflect.get(Hs, r, o);
    const l = Reflect.get(s, r, o);
    return (Jt(r) ? Lr.has(r) : li(r)) || (e || Ce(s, "get", r), t)
      ? l
      : ve(l)
      ? i && bs(r)
        ? l
        : l.value
      : ue(l)
      ? e
        ? Kr(l)
        : ut(l)
      : l;
  };
}
const di = Fr(),
  hi = Fr(!0);
function Fr(e = !1) {
  return function (n, s, r, o) {
    let i = n[s];
    if (Zt(i) && ve(i) && !ve(r)) return !1;
    if (
      !e &&
      !Zt(r) &&
      (es(r) || ((r = Y(r)), (i = Y(i))), !B(n) && ve(i) && !ve(r))
    )
      return (i.value = r), !0;
    const l = B(n) && bs(s) ? Number(s) < n.length : q(n, s),
      a = Reflect.set(n, s, r, o);
    return (
      n === Y(o) && (l ? Yt(r, i) && Xe(n, "set", s, r) : Xe(n, "add", s, r)), a
    );
  };
}
function pi(e, t) {
  const n = q(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Xe(e, "delete", t, void 0), s;
}
function gi(e, t) {
  const n = Reflect.has(e, t);
  return (!Jt(t) || !Lr.has(t)) && Ce(e, "has", t), n;
}
function _i(e) {
  return Ce(e, "iterate", B(e) ? "length" : vt), Reflect.ownKeys(e);
}
const Nr = { get: ai, set: di, deleteProperty: pi, has: gi, ownKeys: _i },
  mi = {
    get: ui,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  bi = pe({}, Nr, { get: ci, set: hi }),
  xs = (e) => e,
  $n = (e) => Reflect.getPrototypeOf(e);
function an(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = Y(e),
    o = Y(t);
  n || (t !== o && Ce(r, "get", t), Ce(r, "get", o));
  const { has: i } = $n(r),
    l = s ? xs : n ? Ss : Xt;
  if (i.call(r, t)) return l(e.get(t));
  if (i.call(r, o)) return l(e.get(o));
  e !== r && e.get(t);
}
function cn(e, t = !1) {
  const n = this.__v_raw,
    s = Y(n),
    r = Y(e);
  return (
    t || (e !== r && Ce(s, "has", e), Ce(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function un(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ce(Y(e), "iterate", vt), Reflect.get(e, "size", e)
  );
}
function Ws(e) {
  e = Y(e);
  const t = Y(this);
  return $n(t).has.call(t, e) || (t.add(e), Xe(t, "add", e, e)), this;
}
function Vs(e, t) {
  t = Y(t);
  const n = Y(this),
    { has: s, get: r } = $n(n);
  let o = s.call(n, e);
  o || ((e = Y(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? Yt(t, i) && Xe(n, "set", e, t) : Xe(n, "add", e, t), this
  );
}
function qs(e) {
  const t = Y(this),
    { has: n, get: s } = $n(t);
  let r = n.call(t, e);
  r || ((e = Y(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && Xe(t, "delete", e, void 0), o;
}
function zs() {
  const e = Y(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Xe(e, "clear", void 0, void 0), n;
}
function fn(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = Y(i),
      a = t ? xs : e ? Ss : Xt;
    return (
      !e && Ce(l, "iterate", vt), i.forEach((f, h) => s.call(r, a(f), a(h), o))
    );
  };
}
function dn(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = Y(r),
      i = Mt(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      a = e === "keys" && i,
      f = r[e](...s),
      h = n ? xs : t ? Ss : Xt;
    return (
      !t && Ce(o, "iterate", a ? Qn : vt),
      {
        next() {
          const { value: _, done: g } = f.next();
          return g
            ? { value: _, done: g }
            : { value: l ? [h(_[0]), h(_[1])] : h(_), done: g };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function tt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function vi() {
  const e = {
      get(o) {
        return an(this, o);
      },
      get size() {
        return un(this);
      },
      has: cn,
      add: Ws,
      set: Vs,
      delete: qs,
      clear: zs,
      forEach: fn(!1, !1),
    },
    t = {
      get(o) {
        return an(this, o, !1, !0);
      },
      get size() {
        return un(this);
      },
      has: cn,
      add: Ws,
      set: Vs,
      delete: qs,
      clear: zs,
      forEach: fn(!1, !0),
    },
    n = {
      get(o) {
        return an(this, o, !0);
      },
      get size() {
        return un(this, !0);
      },
      has(o) {
        return cn.call(this, o, !0);
      },
      add: tt("add"),
      set: tt("set"),
      delete: tt("delete"),
      clear: tt("clear"),
      forEach: fn(!0, !1),
    },
    s = {
      get(o) {
        return an(this, o, !0, !0);
      },
      get size() {
        return un(this, !0);
      },
      has(o) {
        return cn.call(this, o, !0);
      },
      add: tt("add"),
      set: tt("set"),
      delete: tt("delete"),
      clear: tt("clear"),
      forEach: fn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = dn(o, !1, !1)),
        (n[o] = dn(o, !0, !1)),
        (t[o] = dn(o, !1, !0)),
        (s[o] = dn(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [yi, ki, xi, wi] = vi();
function ws(e, t) {
  const n = t ? (e ? wi : xi) : e ? ki : yi;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(q(n, r) && r in s ? n : s, r, o);
}
const Ci = { get: ws(!1, !1) },
  Si = { get: ws(!1, !0) },
  Ai = { get: ws(!0, !1) },
  Br = new WeakMap(),
  Rr = new WeakMap(),
  Dr = new WeakMap(),
  Ei = new WeakMap();
function Ti(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function $i(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ti(Go(e));
}
function ut(e) {
  return Zt(e) ? e : Cs(e, !1, Nr, Ci, Br);
}
function Mi(e) {
  return Cs(e, !1, bi, Si, Rr);
}
function Kr(e) {
  return Cs(e, !0, mi, Ai, Dr);
}
function Cs(e, t, n, s, r) {
  if (!ue(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = $i(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function Ot(e) {
  return Zt(e) ? Ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Zt(e) {
  return !!(e && e.__v_isReadonly);
}
function es(e) {
  return !!(e && e.__v_isShallow);
}
function Ur(e) {
  return Ot(e) || Zt(e);
}
function Y(e) {
  const t = e && e.__v_raw;
  return t ? Y(t) : e;
}
function Hr(e) {
  return mn(e, "__v_skip", !0), e;
}
const Xt = (e) => (ue(e) ? ut(e) : e),
  Ss = (e) => (ue(e) ? Kr(e) : e);
function Wr(e) {
  it && Me && ((e = Y(e)), jr(e.dep || (e.dep = vs())));
}
function Vr(e, t) {
  (e = Y(e)), e.dep && Gn(e.dep);
}
function ve(e) {
  return !!(e && e.__v_isRef === !0);
}
function ts(e) {
  return Oi(e, !1);
}
function Oi(e, t) {
  return ve(e) ? e : new Ii(e, t);
}
class Ii {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Y(t)),
      (this._value = n ? t : Xt(t));
  }
  get value() {
    return Wr(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : Y(t)),
      Yt(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : Xt(t)),
        Vr(this));
  }
}
function p(e) {
  return ve(e) ? e.value : e;
}
const Pi = {
  get: (e, t, n) => p(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ve(r) && !ve(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function qr(e) {
  return Ot(e) ? e : new Proxy(e, Pi);
}
class ji {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new ys(t, () => {
        this._dirty || ((this._dirty = !0), Vr(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = Y(this);
    return (
      Wr(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function J(e, t, n = !1) {
  let s, r;
  const o = U(e);
  return (
    o ? ((s = e), (r = Ie)) : ((s = e.get), (r = e.set)),
    new ji(s, r, o || !r, n)
  );
}
function lt(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Mn(o, t, n);
  }
  return r;
}
function Te(e, t, n, s) {
  if (U(e)) {
    const o = lt(e, t, n, s);
    return (
      o &&
        Tr(o) &&
        o.catch((i) => {
          Mn(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(Te(e[o], t, n, s));
  return r;
}
function Mn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = n;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      lt(a, null, 10, [e, i, l]);
      return;
    }
  }
  Li(e, n, r, s);
}
function Li(e, t, n, s = !0) {
  console.error(e);
}
let vn = !1,
  ns = !1;
const we = [];
let Ye = 0;
const Ut = [];
let Kt = null,
  At = 0;
const Ht = [];
let st = null,
  Et = 0;
const zr = Promise.resolve();
let As = null,
  ss = null;
function Fi(e) {
  const t = As || zr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ni(e) {
  let t = Ye + 1,
    n = we.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    Qt(we[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function Jr(e) {
  (!we.length || !we.includes(e, vn && e.allowRecurse ? Ye + 1 : Ye)) &&
    e !== ss &&
    (e.id == null ? we.push(e) : we.splice(Ni(e.id), 0, e), Yr());
}
function Yr() {
  !vn && !ns && ((ns = !0), (As = zr.then(Qr)));
}
function Bi(e) {
  const t = we.indexOf(e);
  t > Ye && we.splice(t, 1);
}
function Zr(e, t, n, s) {
  B(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? s + 1 : s)) && n.push(e),
    Yr();
}
function Ri(e) {
  Zr(e, Kt, Ut, At);
}
function Di(e) {
  Zr(e, st, Ht, Et);
}
function On(e, t = null) {
  if (Ut.length) {
    for (
      ss = t, Kt = [...new Set(Ut)], Ut.length = 0, At = 0;
      At < Kt.length;
      At++
    )
      Kt[At]();
    (Kt = null), (At = 0), (ss = null), On(e, t);
  }
}
function Xr(e) {
  if ((On(), Ht.length)) {
    const t = [...new Set(Ht)];
    if (((Ht.length = 0), st)) {
      st.push(...t);
      return;
    }
    for (st = t, st.sort((n, s) => Qt(n) - Qt(s)), Et = 0; Et < st.length; Et++)
      st[Et]();
    (st = null), (Et = 0);
  }
}
const Qt = (e) => (e.id == null ? 1 / 0 : e.id);
function Qr(e) {
  (ns = !1), (vn = !0), On(e), we.sort((n, s) => Qt(n) - Qt(s));
  const t = Ie;
  try {
    for (Ye = 0; Ye < we.length; Ye++) {
      const n = we[Ye];
      n && n.active !== !1 && lt(n, null, 14);
    }
  } finally {
    (Ye = 0),
      (we.length = 0),
      Xr(),
      (vn = !1),
      (As = null),
      (we.length || Ut.length || Ht.length) && Qr(e);
  }
}
function Ki(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || te;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: _, trim: g } = s[h] || te;
    g && (r = n.map((v) => v.trim())), _ && (r = n.map(bn));
  }
  let l,
    a = s[(l = Un(t))] || s[(l = Un(He(t)))];
  !a && o && (a = s[(l = Un(jt(t)))]), a && Te(a, e, 6, r);
  const f = s[l + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Te(f, e, 6, r);
  }
}
function Gr(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!U(e)) {
    const a = (f) => {
      const h = Gr(f, t, !0);
      h && ((l = !0), pe(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !o && !l
    ? (s.set(e, null), null)
    : (B(o) ? o.forEach((a) => (i[a] = null)) : pe(i, o), s.set(e, i), i);
}
function In(e, t) {
  return !e || !Sn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      q(e, t[0].toLowerCase() + t.slice(1)) || q(e, jt(t)) || q(e, t));
}
let Ee = null,
  Pn = null;
function yn(e) {
  const t = Ee;
  return (Ee = e), (Pn = (e && e.type.__scopeId) || null), t;
}
function Ui(e) {
  Pn = e;
}
function Hi() {
  Pn = null;
}
function Ke(e, t = Ee, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && rr(-1);
    const o = yn(t),
      i = e(...r);
    return yn(o), s._d && rr(1), i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Hn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: a,
    emit: f,
    render: h,
    renderCache: _,
    data: g,
    setupState: v,
    ctx: T,
    inheritAttrs: I,
  } = e;
  let $, K;
  const H = yn(e);
  try {
    if (n.shapeFlag & 4) {
      const P = r || s;
      ($ = Re(h.call(P, P, _, o, v, g, T))), (K = a);
    } else {
      const P = t;
      ($ = Re(
        P.length > 1 ? P(o, { attrs: a, slots: l, emit: f }) : P(o, null)
      )),
        (K = t.props ? a : Wi(a));
    }
  } catch (P) {
    (qt.length = 0), Mn(P, e, 1), ($ = M(Pe));
  }
  let W = $;
  if (K && I !== !1) {
    const P = Object.keys(K),
      { shapeFlag: X } = W;
    P.length && X & 7 && (i && P.some(_s) && (K = Vi(K, i)), (W = ct(W, K)));
  }
  return (
    n.dirs && ((W = ct(W)), (W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (W.transition = n.transition),
    ($ = W),
    yn(H),
    $
  );
}
const Wi = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Sn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Vi = (e, t) => {
    const n = {};
    for (const s in e) (!_s(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function qi(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: a } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? Js(s, i, f) : !!i;
    if (a & 8) {
      const h = t.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        const g = h[_];
        if (i[g] !== s[g] && !In(f, g)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Js(s, i, f)
        : !0
      : !!i;
  return !1;
}
function Js(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !In(n, o)) return !0;
  }
  return !1;
}
function zi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ji = (e) => e.__isSuspense;
function Yi(e, t) {
  t && t.pendingBranch
    ? B(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Di(e);
}
function Zi(e, t) {
  if (he) {
    let n = he.provides;
    const s = he.parent && he.parent.provides;
    s === n && (n = he.provides = Object.create(s)), (n[e] = t);
  }
}
function Wn(e, t, n = !1) {
  const s = he || Ee;
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && U(t) ? t.call(s.proxy) : t;
  }
}
function Xi(e, t) {
  return Es(e, null, { flush: "post" });
}
const Ys = {};
function Wt(e, t, n) {
  return Es(e, t, n);
}
function Es(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = te
) {
  const l = he;
  let a,
    f = !1,
    h = !1;
  if (
    (ve(e)
      ? ((a = () => e.value), (f = es(e)))
      : Ot(e)
      ? ((a = () => e), (s = !0))
      : B(e)
      ? ((h = !0),
        (f = e.some((K) => Ot(K) || es(K))),
        (a = () =>
          e.map((K) => {
            if (ve(K)) return K.value;
            if (Ot(K)) return bt(K);
            if (U(K)) return lt(K, l, 2);
          })))
      : U(e)
      ? t
        ? (a = () => lt(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return _ && _(), Te(e, l, 3, [g]);
          })
      : (a = Ie),
    t && s)
  ) {
    const K = a;
    a = () => bt(K());
  }
  let _,
    g = (K) => {
      _ = $.onStop = () => {
        lt(K, l, 4);
      };
    };
  if (nn)
    return (g = Ie), t ? n && Te(t, l, 3, [a(), h ? [] : void 0, g]) : a(), Ie;
  let v = h ? [] : Ys;
  const T = () => {
    if (!!$.active)
      if (t) {
        const K = $.run();
        (s || f || (h ? K.some((H, W) => Yt(H, v[W])) : Yt(K, v))) &&
          (_ && _(), Te(t, l, 3, [K, v === Ys ? void 0 : v, g]), (v = K));
      } else $.run();
  };
  T.allowRecurse = !!t;
  let I;
  r === "sync"
    ? (I = T)
    : r === "post"
    ? (I = () => ke(T, l && l.suspense))
    : (I = () => Ri(T));
  const $ = new ys(a, I);
  return (
    t
      ? n
        ? T()
        : (v = $.run())
      : r === "post"
      ? ke($.run.bind($), l && l.suspense)
      : $.run(),
    () => {
      $.stop(), l && l.scope && ms(l.scope.effects, $);
    }
  );
}
function Qi(e, t, n) {
  const s = this.proxy,
    r = ge(e) ? (e.includes(".") ? eo(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  U(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = he;
  Pt(this);
  const l = Es(r, o.bind(s), n);
  return i ? Pt(i) : yt(), l;
}
function eo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function bt(e, t) {
  if (!ue(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), ve(e))) bt(e.value, t);
  else if (B(e)) for (let n = 0; n < e.length; n++) bt(e[n], t);
  else if (An(e) || Mt(e))
    e.forEach((n) => {
      bt(n, t);
    });
  else if (Mr(e)) for (const n in e) bt(e[n], t);
  return e;
}
function to() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    kt(() => {
      e.isMounted = !0;
    }),
    io(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ae = [Function, Array],
  Gi = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Ae,
      onEnter: Ae,
      onAfterEnter: Ae,
      onEnterCancelled: Ae,
      onBeforeLeave: Ae,
      onLeave: Ae,
      onAfterLeave: Ae,
      onLeaveCancelled: Ae,
      onBeforeAppear: Ae,
      onAppear: Ae,
      onAfterAppear: Ae,
      onAppearCancelled: Ae,
    },
    setup(e, { slots: t }) {
      const n = Is(),
        s = to();
      let r;
      return () => {
        const o = t.default && Ts(t.default(), !0);
        if (!o || !o.length) return;
        let i = o[0];
        if (o.length > 1) {
          for (const I of o)
            if (I.type !== Pe) {
              i = I;
              break;
            }
        }
        const l = Y(e),
          { mode: a } = l;
        if (s.isLeaving) return Vn(i);
        const f = Zs(i);
        if (!f) return Vn(i);
        const h = Gt(f, l, s, n);
        en(f, h);
        const _ = n.subTree,
          g = _ && Zs(_);
        let v = !1;
        const { getTransitionKey: T } = f.type;
        if (T) {
          const I = T();
          r === void 0 ? (r = I) : I !== r && ((r = I), (v = !0));
        }
        if (g && g.type !== Pe && (!gt(f, g) || v)) {
          const I = Gt(g, l, s, n);
          if ((en(g, I), a === "out-in"))
            return (
              (s.isLeaving = !0),
              (I.afterLeave = () => {
                (s.isLeaving = !1), n.update();
              }),
              Vn(i)
            );
          a === "in-out" &&
            f.type !== Pe &&
            (I.delayLeave = ($, K, H) => {
              const W = so(s, g);
              (W[String(g.key)] = g),
                ($._leaveCb = () => {
                  K(), ($._leaveCb = void 0), delete h.delayedLeave;
                }),
                (h.delayedLeave = H);
            });
        }
        return i;
      };
    },
  },
  no = Gi;
function so(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function Gt(e, t, n, s) {
  const {
      appear: r,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: f,
      onEnterCancelled: h,
      onBeforeLeave: _,
      onLeave: g,
      onAfterLeave: v,
      onLeaveCancelled: T,
      onBeforeAppear: I,
      onAppear: $,
      onAfterAppear: K,
      onAppearCancelled: H,
    } = t,
    W = String(e.key),
    P = so(n, e),
    X = (V, ne) => {
      V && Te(V, s, 9, ne);
    },
    de = (V, ne) => {
      const ie = ne[1];
      X(V, ne),
        B(V) ? V.every((_e) => _e.length <= 1) && ie() : V.length <= 1 && ie();
    },
    Ve = {
      mode: o,
      persisted: i,
      beforeEnter(V) {
        let ne = l;
        if (!n.isMounted)
          if (r) ne = I || l;
          else return;
        V._leaveCb && V._leaveCb(!0);
        const ie = P[W];
        ie && gt(e, ie) && ie.el._leaveCb && ie.el._leaveCb(), X(ne, [V]);
      },
      enter(V) {
        let ne = a,
          ie = f,
          _e = h;
        if (!n.isMounted)
          if (r) (ne = $ || a), (ie = K || f), (_e = H || h);
          else return;
        let j = !1;
        const le = (V._enterCb = (Se) => {
          j ||
            ((j = !0),
            Se ? X(_e, [V]) : X(ie, [V]),
            Ve.delayedLeave && Ve.delayedLeave(),
            (V._enterCb = void 0));
        });
        ne ? de(ne, [V, le]) : le();
      },
      leave(V, ne) {
        const ie = String(e.key);
        if ((V._enterCb && V._enterCb(!0), n.isUnmounting)) return ne();
        X(_, [V]);
        let _e = !1;
        const j = (V._leaveCb = (le) => {
          _e ||
            ((_e = !0),
            ne(),
            le ? X(T, [V]) : X(v, [V]),
            (V._leaveCb = void 0),
            P[ie] === e && delete P[ie]);
        });
        (P[ie] = e), g ? de(g, [V, j]) : j();
      },
      clone(V) {
        return Gt(V, t, n, s);
      },
    };
  return Ve;
}
function Vn(e) {
  if (jn(e)) return (e = ct(e)), (e.children = null), e;
}
function Zs(e) {
  return jn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function en(e, t) {
  e.shapeFlag & 6 && e.component
    ? en(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Ts(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be
      ? (i.patchFlag & 128 && r++, (s = s.concat(Ts(i.children, t, l))))
      : (t || i.type !== Pe) && s.push(l != null ? ct(i, { key: l }) : i);
  }
  if (r > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2;
  return s;
}
const gn = (e) => !!e.type.__asyncLoader,
  jn = (e) => e.type.__isKeepAlive;
function el(e, t) {
  ro(e, "a", t);
}
function tl(e, t) {
  ro(e, "da", t);
}
function ro(e, t, n = he) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Ln(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      jn(r.parent.vnode) && nl(s, t, n, r), (r = r.parent);
  }
}
function nl(e, t, n, s) {
  const r = Ln(t, e, s, !0);
  on(() => {
    ms(s[t], r);
  }, n);
}
function Ln(e, t, n = he, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Lt(), Pt(n);
          const l = Te(t, n, e, i);
          return yt(), Ft(), l;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Qe =
    (e) =>
    (t, n = he) =>
      (!nn || e === "sp") && Ln(e, t, n),
  sl = Qe("bm"),
  kt = Qe("m"),
  rl = Qe("bu"),
  oo = Qe("u"),
  io = Qe("bum"),
  on = Qe("um"),
  ol = Qe("sp"),
  il = Qe("rtg"),
  ll = Qe("rtc");
function al(e, t = he) {
  Ln("ec", e, t);
}
function Ze(e, t) {
  const n = Ee;
  if (n === null) return e;
  const s = Nn(n) || n.proxy,
    r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, a, f = te] = t[o];
    U(i) && (i = { mounted: i, updated: i }),
      i.deep && bt(l),
      r.push({
        dir: i,
        instance: s,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: f,
      });
  }
  return e;
}
function ft(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[s];
    a && (Lt(), Te(a, n, 8, [e.el, l, e, t]), Ft());
  }
}
const cl = "components",
  ul = "directives",
  fl = Symbol();
function lo(e) {
  return dl(ul, e);
}
function dl(e, t, n = !0, s = !1) {
  const r = Ee || he;
  if (r) {
    const o = r.type;
    if (e === cl) {
      const l = Ul(o);
      if (l && (l === t || l === He(t) || l === Tn(He(t)))) return o;
    }
    const i = Xs(r[e] || o[e], t) || Xs(r.appContext[e], t);
    return !i && s ? o : i;
  }
}
function Xs(e, t) {
  return e && (e[t] || e[He(t)] || e[Tn(He(t))]);
}
function ao(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (B(e) || ge(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (ue(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const f = i[l];
        r[l] = t(e[f], f, l, o && o[l]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const rs = (e) => (e ? (ko(e) ? Nn(e) || e.proxy : rs(e.parent)) : null),
  kn = pe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => rs(e.parent),
    $root: (e) => rs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => uo(e),
    $forceUpdate: (e) => e.f || (e.f = () => Jr(e.update)),
    $nextTick: (e) => e.n || (e.n = Fi.bind(e.proxy)),
    $watch: (e) => Qi.bind(e),
  }),
  hl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let f;
      if (t[0] !== "$") {
        const v = i[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (s !== te && q(s, t)) return (i[t] = 1), s[t];
          if (r !== te && q(r, t)) return (i[t] = 2), r[t];
          if ((f = e.propsOptions[0]) && q(f, t)) return (i[t] = 3), o[t];
          if (n !== te && q(n, t)) return (i[t] = 4), n[t];
          os && (i[t] = 0);
        }
      }
      const h = kn[t];
      let _, g;
      if (h) return t === "$attrs" && Ce(e, "get", t), h(e);
      if ((_ = l.__cssModules) && (_ = _[t])) return _;
      if (n !== te && q(n, t)) return (i[t] = 4), n[t];
      if (((g = a.config.globalProperties), q(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return r !== te && q(r, t)
        ? ((r[t] = n), !0)
        : s !== te && q(s, t)
        ? ((s[t] = n), !0)
        : q(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== te && q(e, i)) ||
        (t !== te && q(t, i)) ||
        ((l = o[0]) && q(l, i)) ||
        q(s, i) ||
        q(kn, i) ||
        q(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : q(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let os = !0;
function pl(e) {
  const t = uo(e),
    n = e.proxy,
    s = e.ctx;
  (os = !1), t.beforeCreate && Qs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: f,
    created: h,
    beforeMount: _,
    mounted: g,
    beforeUpdate: v,
    updated: T,
    activated: I,
    deactivated: $,
    beforeDestroy: K,
    beforeUnmount: H,
    destroyed: W,
    unmounted: P,
    render: X,
    renderTracked: de,
    renderTriggered: Ve,
    errorCaptured: V,
    serverPrefetch: ne,
    expose: ie,
    inheritAttrs: _e,
    components: j,
    directives: le,
    filters: Se,
  } = t;
  if ((f && gl(f, s, null, e.appContext.config.unwrapInjectedRef), i))
    for (const ce in i) {
      const se = i[ce];
      U(se) && (s[ce] = se.bind(n));
    }
  if (r) {
    const ce = r.call(n, n);
    ue(ce) && (e.data = ut(ce));
  }
  if (((os = !0), o))
    for (const ce in o) {
      const se = o[ce],
        qe = U(se) ? se.bind(n, n) : U(se.get) ? se.get.bind(n, n) : Ie,
        Rn = !U(se) && U(se.set) ? se.set.bind(n) : Ie,
        Nt = Q({ get: qe, set: Rn });
      Object.defineProperty(s, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (wt) => (Nt.value = wt),
      });
    }
  if (l) for (const ce in l) co(l[ce], s, n, ce);
  if (a) {
    const ce = U(a) ? a.call(n) : a;
    Reflect.ownKeys(ce).forEach((se) => {
      Zi(se, ce[se]);
    });
  }
  h && Qs(h, e, "c");
  function me(ce, se) {
    B(se) ? se.forEach((qe) => ce(qe.bind(n))) : se && ce(se.bind(n));
  }
  if (
    (me(sl, _),
    me(kt, g),
    me(rl, v),
    me(oo, T),
    me(el, I),
    me(tl, $),
    me(al, V),
    me(ll, de),
    me(il, Ve),
    me(io, H),
    me(on, P),
    me(ol, ne),
    B(ie))
  )
    if (ie.length) {
      const ce = e.exposed || (e.exposed = {});
      ie.forEach((se) => {
        Object.defineProperty(ce, se, {
          get: () => n[se],
          set: (qe) => (n[se] = qe),
        });
      });
    } else e.exposed || (e.exposed = {});
  X && e.render === Ie && (e.render = X),
    _e != null && (e.inheritAttrs = _e),
    j && (e.components = j),
    le && (e.directives = le);
}
function gl(e, t, n = Ie, s = !1) {
  B(e) && (e = is(e));
  for (const r in e) {
    const o = e[r];
    let i;
    ue(o)
      ? "default" in o
        ? (i = Wn(o.from || r, o.default, !0))
        : (i = Wn(o.from || r))
      : (i = Wn(o)),
      ve(i) && s
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[r] = i);
  }
}
function Qs(e, t, n) {
  Te(B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function co(e, t, n, s) {
  const r = s.includes(".") ? eo(n, s) : () => n[s];
  if (ge(e)) {
    const o = t[e];
    U(o) && Wt(r, o);
  } else if (U(e)) Wt(r, e.bind(n));
  else if (ue(e))
    if (B(e)) e.forEach((o) => co(o, t, n, s));
    else {
      const o = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(o) && Wt(r, o, e);
    }
}
function uo(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !r.length && !n && !s
      ? (a = t)
      : ((a = {}), r.length && r.forEach((f) => xn(a, f, i, !0)), xn(a, t, i)),
    o.set(t, a),
    a
  );
}
function xn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && xn(e, o, n, !0), r && r.forEach((i) => xn(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = _l[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const _l = {
  data: Gs,
  props: pt,
  emits: pt,
  methods: pt,
  computed: pt,
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  components: pt,
  directives: pt,
  watch: bl,
  provide: Gs,
  inject: ml,
};
function Gs(e, t) {
  return t
    ? e
      ? function () {
          return pe(
            U(e) ? e.call(this, this) : e,
            U(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function ml(e, t) {
  return pt(is(e), is(t));
}
function is(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pt(e, t) {
  return e ? pe(pe(Object.create(null), e), t) : t;
}
function bl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pe(Object.create(null), e);
  for (const s in t) n[s] = ye(e[s], t[s]);
  return n;
}
function vl(e, t, n, s = !1) {
  const r = {},
    o = {};
  mn(o, Fn, 1), (e.propsDefaults = Object.create(null)), fo(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : Mi(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function yl(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = Y(r),
    [a] = e.propsOptions;
  let f = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        let g = h[_];
        if (In(e.emitsOptions, g)) continue;
        const v = t[g];
        if (a)
          if (q(o, g)) v !== o[g] && ((o[g] = v), (f = !0));
          else {
            const T = He(g);
            r[T] = ls(a, l, T, v, e, !1);
          }
        else v !== o[g] && ((o[g] = v), (f = !0));
      }
    }
  } else {
    fo(e, t, r, o) && (f = !0);
    let h;
    for (const _ in l)
      (!t || (!q(t, _) && ((h = jt(_)) === _ || !q(t, h)))) &&
        (a
          ? n &&
            (n[_] !== void 0 || n[h] !== void 0) &&
            (r[_] = ls(a, l, _, void 0, e, !0))
          : delete r[_]);
    if (o !== l)
      for (const _ in o) (!t || (!q(t, _) && !0)) && (delete o[_], (f = !0));
  }
  f && Xe(e, "set", "$attrs");
}
function fo(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (hn(a)) continue;
      const f = t[a];
      let h;
      r && q(r, (h = He(a)))
        ? !o || !o.includes(h)
          ? (n[h] = f)
          : ((l || (l = {}))[h] = f)
        : In(e.emitsOptions, a) ||
          ((!(a in s) || f !== s[a]) && ((s[a] = f), (i = !0)));
    }
  if (o) {
    const a = Y(n),
      f = l || te;
    for (let h = 0; h < o.length; h++) {
      const _ = o[h];
      n[_] = ls(r, a, _, f[_], e, !q(f, _));
    }
  }
  return i;
}
function ls(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = q(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && U(a)) {
        const { propsDefaults: f } = r;
        n in f ? (s = f[n]) : (Pt(r), (s = f[n] = a.call(null, t)), yt());
      } else s = a;
    }
    i[0] &&
      (o && !l ? (s = !1) : i[1] && (s === "" || s === jt(n)) && (s = !0));
  }
  return s;
}
function ho(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!U(e)) {
    const h = (_) => {
      a = !0;
      const [g, v] = ho(_, t, !0);
      pe(i, g), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!o && !a) return s.set(e, $t), $t;
  if (B(o))
    for (let h = 0; h < o.length; h++) {
      const _ = He(o[h]);
      er(_) && (i[_] = te);
    }
  else if (o)
    for (const h in o) {
      const _ = He(h);
      if (er(_)) {
        const g = o[h],
          v = (i[_] = B(g) || U(g) ? { type: g } : g);
        if (v) {
          const T = sr(Boolean, v.type),
            I = sr(String, v.type);
          (v[0] = T > -1),
            (v[1] = I < 0 || T < I),
            (T > -1 || q(v, "default")) && l.push(_);
        }
      }
    }
  const f = [i, l];
  return s.set(e, f), f;
}
function er(e) {
  return e[0] !== "$";
}
function tr(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function nr(e, t) {
  return tr(e) === tr(t);
}
function sr(e, t) {
  return B(t) ? t.findIndex((n) => nr(n, e)) : U(t) && nr(t, e) ? 0 : -1;
}
const po = (e) => e[0] === "_" || e === "$stable",
  $s = (e) => (B(e) ? e.map(Re) : [Re(e)]),
  kl = (e, t, n) => {
    if (t._n) return t;
    const s = Ke((...r) => $s(t(...r)), n);
    return (s._c = !1), s;
  },
  go = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (po(r)) continue;
      const o = e[r];
      if (U(o)) t[r] = kl(r, o, s);
      else if (o != null) {
        const i = $s(o);
        t[r] = () => i;
      }
    }
  },
  _o = (e, t) => {
    const n = $s(t);
    e.slots.default = () => n;
  },
  xl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = Y(t)), mn(t, "_", n)) : go(t, (e.slots = {}));
    } else (e.slots = {}), t && _o(e, t);
    mn(e.slots, Fn, 1);
  },
  wl = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = te;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (pe(r, t), !n && l === 1 && delete r._)
        : ((o = !t.$stable), go(t, r)),
        (i = t);
    } else t && (_o(e, t), (i = { default: 1 }));
    if (o) for (const l in r) !po(l) && !(l in i) && delete r[l];
  };
function mo() {
  return {
    app: null,
    config: {
      isNativeTag: Zo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Cl = 0;
function Sl(e, t) {
  return function (s, r = null) {
    U(s) || (s = Object.assign({}, s)), r != null && !ue(r) && (r = null);
    const o = mo(),
      i = new Set();
    let l = !1;
    const a = (o.app = {
      _uid: Cl++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Vl,
      get config() {
        return o.config;
      },
      set config(f) {},
      use(f, ...h) {
        return (
          i.has(f) ||
            (f && U(f.install)
              ? (i.add(f), f.install(a, ...h))
              : U(f) && (i.add(f), f(a, ...h))),
          a
        );
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), a;
      },
      component(f, h) {
        return h ? ((o.components[f] = h), a) : o.components[f];
      },
      directive(f, h) {
        return h ? ((o.directives[f] = h), a) : o.directives[f];
      },
      mount(f, h, _) {
        if (!l) {
          const g = M(s, r);
          return (
            (g.appContext = o),
            h && t ? t(g, f) : e(g, f, _),
            (l = !0),
            (a._container = f),
            (f.__vue_app__ = a),
            Nn(g.component) || g.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(f, h) {
        return (o.provides[f] = h), a;
      },
    });
    return a;
  };
}
function as(e, t, n, s, r = !1) {
  if (B(e)) {
    e.forEach((g, v) => as(g, t && (B(t) ? t[v] : t), n, s, r));
    return;
  }
  if (gn(s) && !r) return;
  const o = s.shapeFlag & 4 ? Nn(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: l, r: a } = e,
    f = t && t.r,
    h = l.refs === te ? (l.refs = {}) : l.refs,
    _ = l.setupState;
  if (
    (f != null &&
      f !== a &&
      (ge(f)
        ? ((h[f] = null), q(_, f) && (_[f] = null))
        : ve(f) && (f.value = null)),
    U(a))
  )
    lt(a, l, 12, [i, h]);
  else {
    const g = ge(a),
      v = ve(a);
    if (g || v) {
      const T = () => {
        if (e.f) {
          const I = g ? h[a] : a.value;
          r
            ? B(I) && ms(I, o)
            : B(I)
            ? I.includes(o) || I.push(o)
            : g
            ? ((h[a] = [o]), q(_, a) && (_[a] = h[a]))
            : ((a.value = [o]), e.k && (h[e.k] = a.value));
        } else
          g
            ? ((h[a] = i), q(_, a) && (_[a] = i))
            : ve(a) && ((a.value = i), e.k && (h[e.k] = i));
      };
      i ? ((T.id = -1), ke(T, n)) : T();
    }
  }
}
const ke = Yi;
function Al(e) {
  return El(e);
}
function El(e, t) {
  const n = ni();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: a,
      setText: f,
      setElementText: h,
      parentNode: _,
      nextSibling: g,
      setScopeId: v = Ie,
      cloneNode: T,
      insertStaticContent: I,
    } = e,
    $ = (
      c,
      u,
      m,
      k = null,
      y = null,
      C = null,
      E = !1,
      w = null,
      S = !!u.dynamicChildren
    ) => {
      if (c === u) return;
      c && !gt(c, u) && ((k = ln(c)), et(c, y, C, !0), (c = null)),
        u.patchFlag === -2 && ((S = !1), (u.dynamicChildren = null));
      const { type: x, ref: L, shapeFlag: O } = u;
      switch (x) {
        case Ms:
          K(c, u, m, k);
          break;
        case Pe:
          H(c, u, m, k);
          break;
        case Vt:
          c == null && W(u, m, k, E);
          break;
        case be:
          le(c, u, m, k, y, C, E, w, S);
          break;
        default:
          O & 1
            ? de(c, u, m, k, y, C, E, w, S)
            : O & 6
            ? Se(c, u, m, k, y, C, E, w, S)
            : (O & 64 || O & 128) && x.process(c, u, m, k, y, C, E, w, S, Ct);
      }
      L != null && y && as(L, c && c.ref, C, u || c, !u);
    },
    K = (c, u, m, k) => {
      if (c == null) s((u.el = l(u.children)), m, k);
      else {
        const y = (u.el = c.el);
        u.children !== c.children && f(y, u.children);
      }
    },
    H = (c, u, m, k) => {
      c == null ? s((u.el = a(u.children || "")), m, k) : (u.el = c.el);
    },
    W = (c, u, m, k) => {
      [c.el, c.anchor] = I(c.children, u, m, k, c.el, c.anchor);
    },
    P = ({ el: c, anchor: u }, m, k) => {
      let y;
      for (; c && c !== u; ) (y = g(c)), s(c, m, k), (c = y);
      s(u, m, k);
    },
    X = ({ el: c, anchor: u }) => {
      let m;
      for (; c && c !== u; ) (m = g(c)), r(c), (c = m);
      r(u);
    },
    de = (c, u, m, k, y, C, E, w, S) => {
      (E = E || u.type === "svg"),
        c == null ? Ve(u, m, k, y, C, E, w, S) : ie(c, u, y, C, E, w, S);
    },
    Ve = (c, u, m, k, y, C, E, w) => {
      let S, x;
      const {
        type: L,
        props: O,
        shapeFlag: F,
        transition: R,
        patchFlag: z,
        dirs: G,
      } = c;
      if (c.el && T !== void 0 && z === -1) S = c.el = T(c.el);
      else {
        if (
          ((S = c.el = i(c.type, C, O && O.is, O)),
          F & 8
            ? h(S, c.children)
            : F & 16 &&
              ne(c.children, S, null, k, y, C && L !== "foreignObject", E, w),
          G && ft(c, null, k, "created"),
          O)
        ) {
          for (const re in O)
            re !== "value" &&
              !hn(re) &&
              o(S, re, null, O[re], C, c.children, k, y, ze);
          "value" in O && o(S, "value", null, O.value),
            (x = O.onVnodeBeforeMount) && Le(x, k, c);
        }
        V(S, c, c.scopeId, E, k);
      }
      G && ft(c, null, k, "beforeMount");
      const ee = (!y || (y && !y.pendingBranch)) && R && !R.persisted;
      ee && R.beforeEnter(S),
        s(S, u, m),
        ((x = O && O.onVnodeMounted) || ee || G) &&
          ke(() => {
            x && Le(x, k, c), ee && R.enter(S), G && ft(c, null, k, "mounted");
          }, y);
    },
    V = (c, u, m, k, y) => {
      if ((m && v(c, m), k)) for (let C = 0; C < k.length; C++) v(c, k[C]);
      if (y) {
        let C = y.subTree;
        if (u === C) {
          const E = y.vnode;
          V(c, E, E.scopeId, E.slotScopeIds, y.parent);
        }
      }
    },
    ne = (c, u, m, k, y, C, E, w, S = 0) => {
      for (let x = S; x < c.length; x++) {
        const L = (c[x] = w ? ot(c[x]) : Re(c[x]));
        $(null, L, u, m, k, y, C, E, w);
      }
    },
    ie = (c, u, m, k, y, C, E) => {
      const w = (u.el = c.el);
      let { patchFlag: S, dynamicChildren: x, dirs: L } = u;
      S |= c.patchFlag & 16;
      const O = c.props || te,
        F = u.props || te;
      let R;
      m && dt(m, !1),
        (R = F.onVnodeBeforeUpdate) && Le(R, m, u, c),
        L && ft(u, c, m, "beforeUpdate"),
        m && dt(m, !0);
      const z = y && u.type !== "foreignObject";
      if (
        (x
          ? _e(c.dynamicChildren, x, w, m, k, z, C)
          : E || qe(c, u, w, null, m, k, z, C, !1),
        S > 0)
      ) {
        if (S & 16) j(w, u, O, F, m, k, y);
        else if (
          (S & 2 && O.class !== F.class && o(w, "class", null, F.class, y),
          S & 4 && o(w, "style", O.style, F.style, y),
          S & 8)
        ) {
          const G = u.dynamicProps;
          for (let ee = 0; ee < G.length; ee++) {
            const re = G[ee],
              $e = O[re],
              St = F[re];
            (St !== $e || re === "value") &&
              o(w, re, $e, St, y, c.children, m, k, ze);
          }
        }
        S & 1 && c.children !== u.children && h(w, u.children);
      } else !E && x == null && j(w, u, O, F, m, k, y);
      ((R = F.onVnodeUpdated) || L) &&
        ke(() => {
          R && Le(R, m, u, c), L && ft(u, c, m, "updated");
        }, k);
    },
    _e = (c, u, m, k, y, C, E) => {
      for (let w = 0; w < u.length; w++) {
        const S = c[w],
          x = u[w],
          L =
            S.el && (S.type === be || !gt(S, x) || S.shapeFlag & 70)
              ? _(S.el)
              : m;
        $(S, x, L, null, k, y, C, E, !0);
      }
    },
    j = (c, u, m, k, y, C, E) => {
      if (m !== k) {
        for (const w in k) {
          if (hn(w)) continue;
          const S = k[w],
            x = m[w];
          S !== x && w !== "value" && o(c, w, x, S, E, u.children, y, C, ze);
        }
        if (m !== te)
          for (const w in m)
            !hn(w) && !(w in k) && o(c, w, m[w], null, E, u.children, y, C, ze);
        "value" in k && o(c, "value", m.value, k.value);
      }
    },
    le = (c, u, m, k, y, C, E, w, S) => {
      const x = (u.el = c ? c.el : l("")),
        L = (u.anchor = c ? c.anchor : l(""));
      let { patchFlag: O, dynamicChildren: F, slotScopeIds: R } = u;
      R && (w = w ? w.concat(R) : R),
        c == null
          ? (s(x, m, k), s(L, m, k), ne(u.children, m, L, y, C, E, w, S))
          : O > 0 && O & 64 && F && c.dynamicChildren
          ? (_e(c.dynamicChildren, F, m, y, C, E, w),
            (u.key != null || (y && u === y.subTree)) && bo(c, u, !0))
          : qe(c, u, m, L, y, C, E, w, S);
    },
    Se = (c, u, m, k, y, C, E, w, S) => {
      (u.slotScopeIds = w),
        c == null
          ? u.shapeFlag & 512
            ? y.ctx.activate(u, m, k, E, S)
            : xt(u, m, k, y, C, E, S)
          : me(c, u, S);
    },
    xt = (c, u, m, k, y, C, E) => {
      const w = (c.component = Nl(c, k, y));
      if ((jn(c) && (w.ctx.renderer = Ct), Bl(w), w.asyncDep)) {
        if ((y && y.registerDep(w, ce), !c.el)) {
          const S = (w.subTree = M(Pe));
          H(null, S, u, m);
        }
        return;
      }
      ce(w, c, u, m, y, C, E);
    },
    me = (c, u, m) => {
      const k = (u.component = c.component);
      if (qi(c, u, m))
        if (k.asyncDep && !k.asyncResolved) {
          se(k, u, m);
          return;
        } else (k.next = u), Bi(k.update), k.update();
      else (u.el = c.el), (k.vnode = u);
    },
    ce = (c, u, m, k, y, C, E) => {
      const w = () => {
          if (c.isMounted) {
            let { next: L, bu: O, u: F, parent: R, vnode: z } = c,
              G = L,
              ee;
            dt(c, !1),
              L ? ((L.el = z.el), se(c, L, E)) : (L = z),
              O && pn(O),
              (ee = L.props && L.props.onVnodeBeforeUpdate) && Le(ee, R, L, z),
              dt(c, !0);
            const re = Hn(c),
              $e = c.subTree;
            (c.subTree = re),
              $($e, re, _($e.el), ln($e), c, y, C),
              (L.el = re.el),
              G === null && zi(c, re.el),
              F && ke(F, y),
              (ee = L.props && L.props.onVnodeUpdated) &&
                ke(() => Le(ee, R, L, z), y);
          } else {
            let L;
            const { el: O, props: F } = u,
              { bm: R, m: z, parent: G } = c,
              ee = gn(u);
            if (
              (dt(c, !1),
              R && pn(R),
              !ee && (L = F && F.onVnodeBeforeMount) && Le(L, G, u),
              dt(c, !0),
              O && Kn)
            ) {
              const re = () => {
                (c.subTree = Hn(c)), Kn(O, c.subTree, c, y, null);
              };
              ee
                ? u.type.__asyncLoader().then(() => !c.isUnmounted && re())
                : re();
            } else {
              const re = (c.subTree = Hn(c));
              $(null, re, m, k, c, y, C), (u.el = re.el);
            }
            if ((z && ke(z, y), !ee && (L = F && F.onVnodeMounted))) {
              const re = u;
              ke(() => Le(L, G, re), y);
            }
            (u.shapeFlag & 256 ||
              (G && gn(G.vnode) && G.vnode.shapeFlag & 256)) &&
              c.a &&
              ke(c.a, y),
              (c.isMounted = !0),
              (u = m = k = null);
          }
        },
        S = (c.effect = new ys(w, () => Jr(x), c.scope)),
        x = (c.update = () => S.run());
      (x.id = c.uid), dt(c, !0), x();
    },
    se = (c, u, m) => {
      u.component = c;
      const k = c.vnode.props;
      (c.vnode = u),
        (c.next = null),
        yl(c, u.props, k, m),
        wl(c, u.children, m),
        Lt(),
        On(void 0, c.update),
        Ft();
    },
    qe = (c, u, m, k, y, C, E, w, S = !1) => {
      const x = c && c.children,
        L = c ? c.shapeFlag : 0,
        O = u.children,
        { patchFlag: F, shapeFlag: R } = u;
      if (F > 0) {
        if (F & 128) {
          Nt(x, O, m, k, y, C, E, w, S);
          return;
        } else if (F & 256) {
          Rn(x, O, m, k, y, C, E, w, S);
          return;
        }
      }
      R & 8
        ? (L & 16 && ze(x, y, C), O !== x && h(m, O))
        : L & 16
        ? R & 16
          ? Nt(x, O, m, k, y, C, E, w, S)
          : ze(x, y, C, !0)
        : (L & 8 && h(m, ""), R & 16 && ne(O, m, k, y, C, E, w, S));
    },
    Rn = (c, u, m, k, y, C, E, w, S) => {
      (c = c || $t), (u = u || $t);
      const x = c.length,
        L = u.length,
        O = Math.min(x, L);
      let F;
      for (F = 0; F < O; F++) {
        const R = (u[F] = S ? ot(u[F]) : Re(u[F]));
        $(c[F], R, m, null, y, C, E, w, S);
      }
      x > L ? ze(c, y, C, !0, !1, O) : ne(u, m, k, y, C, E, w, S, O);
    },
    Nt = (c, u, m, k, y, C, E, w, S) => {
      let x = 0;
      const L = u.length;
      let O = c.length - 1,
        F = L - 1;
      for (; x <= O && x <= F; ) {
        const R = c[x],
          z = (u[x] = S ? ot(u[x]) : Re(u[x]));
        if (gt(R, z)) $(R, z, m, null, y, C, E, w, S);
        else break;
        x++;
      }
      for (; x <= O && x <= F; ) {
        const R = c[O],
          z = (u[F] = S ? ot(u[F]) : Re(u[F]));
        if (gt(R, z)) $(R, z, m, null, y, C, E, w, S);
        else break;
        O--, F--;
      }
      if (x > O) {
        if (x <= F) {
          const R = F + 1,
            z = R < L ? u[R].el : k;
          for (; x <= F; )
            $(null, (u[x] = S ? ot(u[x]) : Re(u[x])), m, z, y, C, E, w, S), x++;
        }
      } else if (x > F) for (; x <= O; ) et(c[x], y, C, !0), x++;
      else {
        const R = x,
          z = x,
          G = new Map();
        for (x = z; x <= F; x++) {
          const xe = (u[x] = S ? ot(u[x]) : Re(u[x]));
          xe.key != null && G.set(xe.key, x);
        }
        let ee,
          re = 0;
        const $e = F - z + 1;
        let St = !1,
          Fs = 0;
        const Bt = new Array($e);
        for (x = 0; x < $e; x++) Bt[x] = 0;
        for (x = R; x <= O; x++) {
          const xe = c[x];
          if (re >= $e) {
            et(xe, y, C, !0);
            continue;
          }
          let je;
          if (xe.key != null) je = G.get(xe.key);
          else
            for (ee = z; ee <= F; ee++)
              if (Bt[ee - z] === 0 && gt(xe, u[ee])) {
                je = ee;
                break;
              }
          je === void 0
            ? et(xe, y, C, !0)
            : ((Bt[je - z] = x + 1),
              je >= Fs ? (Fs = je) : (St = !0),
              $(xe, u[je], m, null, y, C, E, w, S),
              re++);
        }
        const Ns = St ? Tl(Bt) : $t;
        for (ee = Ns.length - 1, x = $e - 1; x >= 0; x--) {
          const xe = z + x,
            je = u[xe],
            Bs = xe + 1 < L ? u[xe + 1].el : k;
          Bt[x] === 0
            ? $(null, je, m, Bs, y, C, E, w, S)
            : St && (ee < 0 || x !== Ns[ee] ? wt(je, m, Bs, 2) : ee--);
        }
      }
    },
    wt = (c, u, m, k, y = null) => {
      const { el: C, type: E, transition: w, children: S, shapeFlag: x } = c;
      if (x & 6) {
        wt(c.component.subTree, u, m, k);
        return;
      }
      if (x & 128) {
        c.suspense.move(u, m, k);
        return;
      }
      if (x & 64) {
        E.move(c, u, m, Ct);
        return;
      }
      if (E === be) {
        s(C, u, m);
        for (let O = 0; O < S.length; O++) wt(S[O], u, m, k);
        s(c.anchor, u, m);
        return;
      }
      if (E === Vt) {
        P(c, u, m);
        return;
      }
      if (k !== 2 && x & 1 && w)
        if (k === 0) w.beforeEnter(C), s(C, u, m), ke(() => w.enter(C), y);
        else {
          const { leave: O, delayLeave: F, afterLeave: R } = w,
            z = () => s(C, u, m),
            G = () => {
              O(C, () => {
                z(), R && R();
              });
            };
          F ? F(C, z, G) : G();
        }
      else s(C, u, m);
    },
    et = (c, u, m, k = !1, y = !1) => {
      const {
        type: C,
        props: E,
        ref: w,
        children: S,
        dynamicChildren: x,
        shapeFlag: L,
        patchFlag: O,
        dirs: F,
      } = c;
      if ((w != null && as(w, null, m, c, !0), L & 256)) {
        u.ctx.deactivate(c);
        return;
      }
      const R = L & 1 && F,
        z = !gn(c);
      let G;
      if ((z && (G = E && E.onVnodeBeforeUnmount) && Le(G, u, c), L & 6))
        Uo(c.component, m, k);
      else {
        if (L & 128) {
          c.suspense.unmount(m, k);
          return;
        }
        R && ft(c, null, u, "beforeUnmount"),
          L & 64
            ? c.type.remove(c, u, m, y, Ct, k)
            : x && (C !== be || (O > 0 && O & 64))
            ? ze(x, u, m, !1, !0)
            : ((C === be && O & 384) || (!y && L & 16)) && ze(S, u, m),
          k && js(c);
      }
      ((z && (G = E && E.onVnodeUnmounted)) || R) &&
        ke(() => {
          G && Le(G, u, c), R && ft(c, null, u, "unmounted");
        }, m);
    },
    js = (c) => {
      const { type: u, el: m, anchor: k, transition: y } = c;
      if (u === be) {
        Ko(m, k);
        return;
      }
      if (u === Vt) {
        X(c);
        return;
      }
      const C = () => {
        r(m), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (c.shapeFlag & 1 && y && !y.persisted) {
        const { leave: E, delayLeave: w } = y,
          S = () => E(m, C);
        w ? w(c.el, C, S) : S();
      } else C();
    },
    Ko = (c, u) => {
      let m;
      for (; c !== u; ) (m = g(c)), r(c), (c = m);
      r(u);
    },
    Uo = (c, u, m) => {
      const { bum: k, scope: y, update: C, subTree: E, um: w } = c;
      k && pn(k),
        y.stop(),
        C && ((C.active = !1), et(E, c, u, m)),
        w && ke(w, u),
        ke(() => {
          c.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    ze = (c, u, m, k = !1, y = !1, C = 0) => {
      for (let E = C; E < c.length; E++) et(c[E], u, m, k, y);
    },
    ln = (c) =>
      c.shapeFlag & 6
        ? ln(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : g(c.anchor || c.el),
    Ls = (c, u, m) => {
      c == null
        ? u._vnode && et(u._vnode, null, null, !0)
        : $(u._vnode || null, c, u, null, null, null, m),
        Xr(),
        (u._vnode = c);
    },
    Ct = {
      p: $,
      um: et,
      m: wt,
      r: js,
      mt: xt,
      mc: ne,
      pc: qe,
      pbc: _e,
      n: ln,
      o: e,
    };
  let Dn, Kn;
  return (
    t && ([Dn, Kn] = t(Ct)), { render: Ls, hydrate: Dn, createApp: Sl(Ls, Dn) }
  );
}
function dt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function bo(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (B(s) && B(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = ot(r[o])), (l.el = i.el)),
        n || bo(i, l));
    }
}
function Tl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const f = e[s];
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < f ? (o = l + 1) : (i = l);
      f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const $l = (e) => e.__isTeleport,
  be = Symbol(void 0),
  Ms = Symbol(void 0),
  Pe = Symbol(void 0),
  Vt = Symbol(void 0),
  qt = [];
let Oe = null;
function N(e = !1) {
  qt.push((Oe = e ? null : []));
}
function Ml() {
  qt.pop(), (Oe = qt[qt.length - 1] || null);
}
let tn = 1;
function rr(e) {
  tn += e;
}
function vo(e) {
  return (
    (e.dynamicChildren = tn > 0 ? Oe || $t : null),
    Ml(),
    tn > 0 && Oe && Oe.push(e),
    e
  );
}
function D(e, t, n, s, r, o) {
  return vo(b(e, t, n, s, r, o, !0));
}
function It(e, t, n, s, r) {
  return vo(M(e, t, n, s, r, !0));
}
function cs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fn = "__vInternal",
  yo = ({ key: e }) => e ?? null,
  _n = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ge(e) || ve(e) || U(e)
        ? { i: Ee, r: e, k: t, f: !!n }
        : e
      : null;
function b(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === be ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yo(t),
    ref: t && _n(t),
    scopeId: Pn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    l
      ? (Os(a, n), o & 128 && e.normalize(a))
      : n && (a.shapeFlag |= ge(n) ? 8 : 16),
    tn > 0 &&
      !i &&
      Oe &&
      (a.patchFlag > 0 || o & 6) &&
      a.patchFlag !== 32 &&
      Oe.push(a),
    a
  );
}
const M = Ol;
function Ol(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === fl) && (e = Pe), cs(e))) {
    const l = ct(e, t, !0);
    return (
      n && Os(l, n),
      tn > 0 &&
        !o &&
        Oe &&
        (l.shapeFlag & 6 ? (Oe[Oe.indexOf(e)] = l) : Oe.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Hl(e) && (e = e.__vccOpts), t)) {
    t = Il(t);
    let { class: l, style: a } = t;
    l && !ge(l) && (t.class = De(l)),
      ue(a) && (Ur(a) && !B(a) && (a = pe({}, a)), (t.style = gs(a)));
  }
  const i = ge(e) ? 1 : Ji(e) ? 128 : $l(e) ? 64 : ue(e) ? 4 : U(e) ? 2 : 0;
  return b(e, t, n, s, r, i, o, !0);
}
function Il(e) {
  return e ? (Ur(e) || Fn in e ? pe({}, e) : e) : null;
}
function ct(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    l = t ? jl(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && yo(l),
    ref:
      t && t.ref ? (n && r ? (B(r) ? r.concat(_n(t)) : [r, _n(t)]) : _n(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== be ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ct(e.ssContent),
    ssFallback: e.ssFallback && ct(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function zt(e = " ", t = 0) {
  return M(Ms, null, e, t);
}
function Pl(e, t) {
  const n = M(Vt, null, e);
  return (n.staticCount = t), n;
}
function oe(e = "", t = !1) {
  return t ? (N(), It(Pe, null, e)) : M(Pe, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean"
    ? M(Pe)
    : B(e)
    ? M(be, null, e.slice())
    : typeof e == "object"
    ? ot(e)
    : M(Ms, null, String(e));
}
function ot(e) {
  return e.el === null || e.memo ? e : ct(e);
}
function Os(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (B(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Os(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Fn in t)
        ? (t._ctx = Ee)
        : r === 3 &&
          Ee &&
          (Ee.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    U(t)
      ? ((t = { default: t, _ctx: Ee }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [zt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function jl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = De([t.class, s.class]));
      else if (r === "style") t.style = gs([t.style, s.style]);
      else if (Sn(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(B(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Le(e, t, n, s = null) {
  Te(e, t, 7, [n, s]);
}
const Ll = mo();
let Fl = 0;
function Nl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Ll,
    o = {
      uid: Fl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new si(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ho(s, r),
      emitsOptions: Gr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: te,
      inheritAttrs: s.inheritAttrs,
      ctx: te,
      data: te,
      props: te,
      attrs: te,
      slots: te,
      refs: te,
      setupState: te,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Ki.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let he = null;
const Is = () => he || Ee,
  Pt = (e) => {
    (he = e), e.scope.on();
  },
  yt = () => {
    he && he.scope.off(), (he = null);
  };
function ko(e) {
  return e.vnode.shapeFlag & 4;
}
let nn = !1;
function Bl(e, t = !1) {
  nn = t;
  const { props: n, children: s } = e.vnode,
    r = ko(e);
  vl(e, n, r, t), xl(e, s);
  const o = r ? Rl(e, t) : void 0;
  return (nn = !1), o;
}
function Rl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Hr(new Proxy(e.ctx, hl)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Kl(e) : null);
    Pt(e), Lt();
    const o = lt(s, e, 0, [e.props, r]);
    if ((Ft(), yt(), Tr(o))) {
      if ((o.then(yt, yt), t))
        return o
          .then((i) => {
            or(e, i, t);
          })
          .catch((i) => {
            Mn(i, e, 0);
          });
      e.asyncDep = o;
    } else or(e, o, t);
  } else xo(e, t);
}
function or(e, t, n) {
  U(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ue(t) && (e.setupState = qr(t)),
    xo(e, n);
}
let ir;
function xo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ir && !s.render) {
      const r = s.template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = s,
          f = pe(pe({ isCustomElement: o, delimiters: l }, i), a);
        s.render = ir(r, f);
      }
    }
    e.render = s.render || Ie;
  }
  Pt(e), Lt(), pl(e), Ft(), yt();
}
function Dl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ce(e, "get", "$attrs"), t[n];
    },
  });
}
function Kl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Dl(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Nn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(qr(Hr(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in kn) return kn[n](e);
        },
      }))
    );
}
function Ul(e) {
  return (U(e) && e.displayName) || e.name;
}
function Hl(e) {
  return U(e) && "__vccOpts" in e;
}
const Q = (e, t) => J(e, t, nn);
function Wl(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ue(t) && !B(t)
      ? cs(t)
        ? M(e, null, [t])
        : M(e, t)
      : M(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && cs(n) && (n = [n]),
      M(e, t, n));
}
const Vl = "3.2.36",
  ql = "http://www.w3.org/2000/svg",
  _t = typeof document < "u" ? document : null,
  lr = _t && _t.createElement("template"),
  zl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? _t.createElementNS(ql, e)
        : _t.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => _t.createTextNode(e),
    createComment: (e) => _t.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => _t.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return "_value" in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        lr.innerHTML = s ? `<svg>${e}</svg>` : e;
        const l = lr.content;
        if (s) {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Jl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Yl(e, t, n) {
  const s = e.style,
    r = ge(n);
  if (n && !r) {
    for (const o in n) us(s, o, n[o]);
    if (t && !ge(t)) for (const o in t) n[o] == null && us(s, o, "");
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = o);
  }
}
const ar = /\s*!important$/;
function us(e, t, n) {
  if (B(n)) n.forEach((s) => us(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Zl(e, t);
    ar.test(n)
      ? e.setProperty(jt(s), n.replace(ar, ""), "important")
      : (e[s] = n);
  }
}
const cr = ["Webkit", "Moz", "ms"],
  qn = {};
function Zl(e, t) {
  const n = qn[t];
  if (n) return n;
  let s = He(t);
  if (s !== "filter" && s in e) return (qn[t] = s);
  s = Tn(s);
  for (let r = 0; r < cr.length; r++) {
    const o = cr[r] + s;
    if (o in e) return (qn[t] = o);
  }
  return t;
}
const ur = "http://www.w3.org/1999/xlink";
function Xl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(ur, t.slice(6, t.length))
      : e.setAttributeNS(ur, t, n);
  else {
    const o = Vo(t);
    n == null || (o && !Sr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function Ql(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n ?? "";
    (e.value !== a || e.tagName === "OPTION") && (e.value = a),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Sr(n))
      : n == null && a === "string"
      ? ((n = ""), (l = !0))
      : a === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
const [wo, Gl] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp &&
      (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let fs = 0;
const ea = Promise.resolve(),
  ta = () => {
    fs = 0;
  },
  na = () => fs || (ea.then(ta), (fs = wo()));
function mt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function sa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function ra(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [l, a] = oa(t);
    if (s) {
      const f = (o[t] = ia(s, r));
      mt(e, l, f, a);
    } else i && (sa(e, l, i, a), (o[t] = void 0));
  }
}
const fr = /(?:Once|Passive|Capture)$/;
function oa(e) {
  let t;
  if (fr.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(fr)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [jt(e.slice(2)), t];
}
function ia(e, t) {
  const n = (s) => {
    const r = s.timeStamp || wo();
    (Gl || r >= n.attached - 1) && Te(la(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = na()), n;
}
function la(e, t) {
  if (B(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const dr = /^on[a-z]/,
  aa = (e, t, n, s, r = !1, o, i, l, a) => {
    t === "class"
      ? Jl(e, s, r)
      : t === "style"
      ? Yl(e, n, s)
      : Sn(t)
      ? _s(t) || ra(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : ca(e, t, s, r)
        )
      ? Ql(e, t, s, o, i, l, a)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Xl(e, t, s, r));
  };
function ca(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && dr.test(t) && U(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (dr.test(t) && ge(n))
    ? !1
    : t in e;
}
function Ge(e) {
  const t = Is();
  if (!t) return;
  const n = () => ds(t.subTree, e(t.proxy));
  Xi(n),
    kt(() => {
      const s = new MutationObserver(n);
      s.observe(t.subTree.el.parentNode, { childList: !0 }),
        on(() => s.disconnect());
    });
}
function ds(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          ds(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) hr(e.el, t);
  else if (e.type === be) e.children.forEach((n) => ds(n, t));
  else if (e.type === Vt) {
    let { el: n, anchor: s } = e;
    for (; n && (hr(n, t), n !== s); ) n = n.nextSibling;
  }
}
function hr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const s in t) n.setProperty(`--${s}`, t[s]);
  }
}
const nt = "transition",
  Rt = "animation",
  Ue = (e, { slots: t }) => Wl(no, So(e), t);
Ue.displayName = "Transition";
const Co = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  ua = (Ue.props = pe({}, no.props, Co)),
  ht = (e, t = []) => {
    B(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  pr = (e) => (e ? (B(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function So(e) {
  const t = {};
  for (const j in e) j in Co || (t[j] = e[j]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = o,
      appearActiveClass: f = i,
      appearToClass: h = l,
      leaveFromClass: _ = `${n}-leave-from`,
      leaveActiveClass: g = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    T = fa(r),
    I = T && T[0],
    $ = T && T[1],
    {
      onBeforeEnter: K,
      onEnter: H,
      onEnterCancelled: W,
      onLeave: P,
      onLeaveCancelled: X,
      onBeforeAppear: de = K,
      onAppear: Ve = H,
      onAppearCancelled: V = W,
    } = t,
    ne = (j, le, Se) => {
      rt(j, le ? h : l), rt(j, le ? f : i), Se && Se();
    },
    ie = (j, le) => {
      (j._isLeaving = !1), rt(j, _), rt(j, v), rt(j, g), le && le();
    },
    _e = (j) => (le, Se) => {
      const xt = j ? Ve : H,
        me = () => ne(le, j, Se);
      ht(xt, [le, me]),
        gr(() => {
          rt(le, j ? a : o), Je(le, j ? h : l), pr(xt) || _r(le, s, I, me);
        });
    };
  return pe(t, {
    onBeforeEnter(j) {
      ht(K, [j]), Je(j, o), Je(j, i);
    },
    onBeforeAppear(j) {
      ht(de, [j]), Je(j, a), Je(j, f);
    },
    onEnter: _e(!1),
    onAppear: _e(!0),
    onLeave(j, le) {
      j._isLeaving = !0;
      const Se = () => ie(j, le);
      Je(j, _),
        Eo(),
        Je(j, g),
        gr(() => {
          !j._isLeaving || (rt(j, _), Je(j, v), pr(P) || _r(j, s, $, Se));
        }),
        ht(P, [j, Se]);
    },
    onEnterCancelled(j) {
      ne(j, !1), ht(W, [j]);
    },
    onAppearCancelled(j) {
      ne(j, !0), ht(V, [j]);
    },
    onLeaveCancelled(j) {
      ie(j), ht(X, [j]);
    },
  });
}
function fa(e) {
  if (e == null) return null;
  if (ue(e)) return [zn(e.enter), zn(e.leave)];
  {
    const t = zn(e);
    return [t, t];
  }
}
function zn(e) {
  return bn(e);
}
function Je(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function rt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function gr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let da = 0;
function _r(e, t, n, s) {
  const r = (e._endId = ++da),
    o = () => {
      r === e._endId && s();
    };
  if (n) return setTimeout(o, n);
  const { type: i, timeout: l, propCount: a } = Ao(e, t);
  if (!i) return s();
  const f = i + "end";
  let h = 0;
  const _ = () => {
      e.removeEventListener(f, g), o();
    },
    g = (v) => {
      v.target === e && ++h >= a && _();
    };
  setTimeout(() => {
    h < a && _();
  }, l + 1),
    e.addEventListener(f, g);
}
function Ao(e, t) {
  const n = window.getComputedStyle(e),
    s = (T) => (n[T] || "").split(", "),
    r = s(nt + "Delay"),
    o = s(nt + "Duration"),
    i = mr(r, o),
    l = s(Rt + "Delay"),
    a = s(Rt + "Duration"),
    f = mr(l, a);
  let h = null,
    _ = 0,
    g = 0;
  t === nt
    ? i > 0 && ((h = nt), (_ = i), (g = o.length))
    : t === Rt
    ? f > 0 && ((h = Rt), (_ = f), (g = a.length))
    : ((_ = Math.max(i, f)),
      (h = _ > 0 ? (i > f ? nt : Rt) : null),
      (g = h ? (h === nt ? o.length : a.length) : 0));
  const v = h === nt && /\b(transform|all)(,|$)/.test(n[nt + "Property"]);
  return { type: h, timeout: _, propCount: g, hasTransform: v };
}
function mr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => br(n) + br(e[s])));
}
function br(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Eo() {
  return document.body.offsetHeight;
}
const To = new WeakMap(),
  $o = new WeakMap(),
  ha = {
    name: "TransitionGroup",
    props: pe({}, ua, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Is(),
        s = to();
      let r, o;
      return (
        oo(() => {
          if (!r.length) return;
          const i = e.moveClass || `${e.name || "v"}-move`;
          if (!ba(r[0].el, n.vnode.el, i)) return;
          r.forEach(ga), r.forEach(_a);
          const l = r.filter(ma);
          Eo(),
            l.forEach((a) => {
              const f = a.el,
                h = f.style;
              Je(f, i),
                (h.transform = h.webkitTransform = h.transitionDuration = "");
              const _ = (f._moveCb = (g) => {
                (g && g.target !== f) ||
                  ((!g || /transform$/.test(g.propertyName)) &&
                    (f.removeEventListener("transitionend", _),
                    (f._moveCb = null),
                    rt(f, i)));
              });
              f.addEventListener("transitionend", _);
            });
        }),
        () => {
          const i = Y(e),
            l = So(i);
          let a = i.tag || be;
          (r = o), (o = t.default ? Ts(t.default()) : []);
          for (let f = 0; f < o.length; f++) {
            const h = o[f];
            h.key != null && en(h, Gt(h, l, s, n));
          }
          if (r)
            for (let f = 0; f < r.length; f++) {
              const h = r[f];
              en(h, Gt(h, l, s, n)), To.set(h, h.el.getBoundingClientRect());
            }
          return M(a, null, o);
        }
      );
    },
  },
  pa = ha;
function ga(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function _a(e) {
  $o.set(e, e.el.getBoundingClientRect());
}
function ma(e) {
  const t = To.get(e),
    n = $o.get(e),
    s = t.left - n.left,
    r = t.top - n.top;
  if (s || r) {
    const o = e.el.style;
    return (
      (o.transform = o.webkitTransform = `translate(${s}px,${r}px)`),
      (o.transitionDuration = "0s"),
      e
    );
  }
}
function ba(e, t, n) {
  const s = e.cloneNode();
  e._vtc &&
    e._vtc.forEach((i) => {
      i.split(/\s+/).forEach((l) => l && s.classList.remove(l));
    }),
    n.split(/\s+/).forEach((i) => i && s.classList.add(i)),
    (s.style.display = "none");
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(s);
  const { hasTransform: o } = Ao(s);
  return r.removeChild(s), o;
}
const wn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => pn(t, n) : t;
};
function va(e) {
  e.target.composing = !0;
}
function vr(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Tt = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e._assign = wn(r);
      const o = s || (r.props && r.props.type === "number");
      mt(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), o && (l = bn(l)), e._assign(l);
      }),
        n &&
          mt(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (mt(e, "compositionstart", va),
          mt(e, "compositionend", vr),
          mt(e, "change", vr));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: r } },
      o
    ) {
      if (
        ((e._assign = wn(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (s && e.value.trim() === t) ||
              ((r || e.type === "number") && bn(e.value) === t))))
      )
        return;
      const i = t ?? "";
      e.value !== i && (e.value = i);
    },
  },
  ya = {
    deep: !0,
    created(e, t, n) {
      (e._assign = wn(n)),
        mt(e, "change", () => {
          const s = e._modelValue,
            r = ka(e),
            o = e.checked,
            i = e._assign;
          if (B(s)) {
            const l = Ar(s, r),
              a = l !== -1;
            if (o && !a) i(s.concat(r));
            else if (!o && a) {
              const f = [...s];
              f.splice(l, 1), i(f);
            }
          } else if (An(s)) {
            const l = new Set(s);
            o ? l.add(r) : l.delete(r), i(l);
          } else i(Mo(e, o));
        });
    },
    mounted: yr,
    beforeUpdate(e, t, n) {
      (e._assign = wn(n)), yr(e, t, n);
    },
  };
function yr(e, { value: t, oldValue: n }, s) {
  (e._modelValue = t),
    B(t)
      ? (e.checked = Ar(t, s.props.value) > -1)
      : An(t)
      ? (e.checked = t.has(s.props.value))
      : t !== n && (e.checked = Cn(t, Mo(e, !0)));
}
function ka(e) {
  return "_value" in e ? e._value : e.value;
}
function Mo(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const xa = ["ctrl", "shift", "alt", "meta"],
  wa = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => xa.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Ca =
    (e, t) =>
    (n, ...s) => {
      for (let r = 0; r < t.length; r++) {
        const o = wa[t[r]];
        if (o && o(n, t)) return;
      }
      return e(n, ...s);
    },
  Sa = pe({ patchProp: aa }, zl);
let kr;
function Aa() {
  return kr || (kr = Al(Sa));
}
const Ea = (...e) => {
  const t = Aa().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Ta(s);
      if (!r) return;
      const o = t._component;
      !U(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Ta(e) {
  return ge(e) ? document.querySelector(e) : e;
}
var Oo = "/keyboard-trainer/assets/altai-mountains.cd026817.jpg",
  Io = "/keyboard-trainer/assets/bird.55f20634.jpg",
  Po = "/keyboard-trainer/assets/bug.0f6e49fa.jpg",
  jo = "/keyboard-trainer/assets/dombay.c580089c.jpg",
  Lo = "/keyboard-trainer/assets/kamchatka.3281385e.jpg",
  Fo = "/keyboard-trainer/assets/krasnaya-polyana.9b719346.jpg",
  No = "/keyboard-trainer/assets/sea-lion.363ce760.jpg",
  Bo = "/keyboard-trainer/assets/winter-beach.5c0c11ff.jpg";
const Be = [
  {
    num: 1,
    name: "krasnaya-polyana",
    author: "\u0418\u043B\u044C\u044F \u0411\u0443\u043D\u0438\u043D",
    location:
      "\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u041F\u043E\u043B\u044F\u043D\u0430, \u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439",
    link: "https://www.pexels.com/photo/snow-wood-light-dawn-8915196/",
  },
  {
    num: 2,
    name: "kamchatka",
    author:
      "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041C\u0430\u043A\u0441\u0438\u043D",
    location:
      "\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439",
    link: "https://www.pexels.com/ru-ru/photo/9330671/",
  },
  {
    num: 3,
    name: "winter-beach",
    author:
      "\u042F\u0440\u043E\u0441\u043B\u0430\u0432 \u0428\u0443\u0440\u0430\u0435\u0432",
    location:
      "\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439",
    link: "https://www.pexels.com/ru-ru/photo/1553960/",
  },
  {
    num: 4,
    name: "altai-mountains",
    author:
      "\u0414\u0435\u043D\u0438\u0441 \u041B\u043E\u0431\u0430\u043D\u043E\u0432",
    location:
      "\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u043B\u0442\u0430\u0439",
    link: "https://www.pexels.com/photo/landscape-scenery-of-mountains-under-cloudy-sky-11075503/",
  },
  {
    num: 5,
    name: "dombay",
    author: "\u0418\u043B\u044C\u044F \u0411\u0443\u043D\u0438\u043D",
    location:
      "\u0413\u043E\u0440\u043D\u0430\u044F \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u0414\u043E\u043C\u0431\u0430\u0439, \u041A\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043E-\u0427\u0435\u0440\u043A\u0435\u0441\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430",
    link: "https://www.pexels.com/photo/dawn-landscape-sunset-field-9359758/",
  },
  {
    num: 6,
    name: "bug",
    author:
      "\u0415\u0433\u043E\u0440 \u041A\u0430\u043C\u0435\u043B\u0435\u0432",
    location: "",
    link: "https://www.pexels.com/ru-ru/photo/8181839/",
  },
  {
    num: 7,
    name: "bird",
    author: "\u0418\u043B\u044C\u044F \u0411\u0443\u043D\u0438\u043D",
    location: "",
    link: "https://www.pexels.com/photo/a-bird-in-a-branch-of-tree-9240174/",
  },
  {
    num: 8,
    name: "sea-lion",
    author:
      "\u0418\u0433\u043E\u0440\u044C \u0414\u0443\u0434\u043A\u043E\u0432\u0441\u043A\u0438\u0439",
    location:
      "\u0433. \u041D\u0435\u0432\u0435\u043B\u044C\u0441\u043A, \u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C",
    link: "https://www.pexels.com/ru-ru/photo/7729455/",
  },
];
function $a() {
  const e = navigator.userAgent;
  let t = (function () {
      if (e.search(/Edge/) > -1) return "edge";
      if (e.search(/MSIE/) > -1) return "ie";
      if (e.search(/Trident/) > -1) return "ie11";
      if (e.search(/Firefox/) > -1) return "firefox";
      if (e.search(/Opera/) > -1) return "opera";
      if (e.search(/OPR/) > -1) return "operaWebkit";
      if (e.search(/YaBrowser/) > -1) return "yabrowser";
      if (e.search(/Chrome/) > -1) return "chrome";
      if (e.search(/Safari/) > -1) return "safari";
    })(),
    n;
  switch (t) {
    case "edge":
      n = e.split("Edge")[1].split("/")[1];
      break;
    case "ie":
      n = e.split("MSIE ")[1].split(";")[0];
      break;
    case "ie11":
      (t = "ie"), (n = e.split("; rv:")[1].split(")")[0]);
      break;
    case "firefox":
      n = e.split("Firefox/")[1];
      break;
    case "opera":
      n = e.split("Version/")[1];
      break;
    case "operaWebkit":
      (t = "opera"), (n = e.split("OPR/")[1]);
      break;
    case "yabrowser":
      n = e.split("YaBrowser/")[1].split(" ")[0];
      break;
    case "chrome":
      n = e.split("Chrome/")[1].split(" ")[0];
      break;
    case "safari":
      n = e.split("Version/")[1].split(" ")[0];
      break;
  }
  let s = "desktop";
  /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
    navigator.userAgent.toLowerCase()
  ) && (s = "mobile");
  let r;
  try {
    r = {
      platform: s,
      browser: t,
      versionFull: n,
      versionShort: n.split(".")[0],
    };
  } catch {
    r = {
      platform: s,
      browser: "unknown",
      versionFull: "unknown",
      versionShort: "unknown",
    };
  }
  return r;
}
const xr = function (e) {
    let n = 15;
    const s = e.split(" "),
      r = [];
    let o = 0;
    for (let l = 0; l < s.length; l++) {
      const a = s[l],
        f = a.length;
      if (!(a === "" || a === " ")) {
        if (
          a ===
            `
` &&
          o === 0
        )
          continue;
        if (
          a ===
            `
` &&
          o > 0
        ) {
          for (let h = 0; h < 40 - o; h++) r.push("skip");
          o = 0;
        } else if (f + o < 40) {
          for (let h = 0; h < f; h++) r.push(a[h]);
          r.push(" "), (o = (o + f + 1) % 40);
        } else if (f <= n || o + f === 40) {
          for (let h = 0; h < 40 - o; h++) r.push("skip");
          for (let h = 0; h < f; h++) r.push(a[h]);
          r.push(" "), (o = (f + 1) % 40);
        } else {
          for (let h = 0; h < f; h++) r.push(a[h]);
          r.push(" "), (o = (o + f + 1) % 40);
        }
      }
    }
    r.pop(), r.push("end");
    const i = r.length % 200;
    if (i !== 0) for (let l = 0; l < 200 - i; l++) r.push(" ");
    return r;
  },
  Ma = (e) =>
    e
      .trim()
      .replace(
        /(\n)|(\r\n)/g,
        ` 
 `
      )
      .replace(/ +/g, " "),
  Oa = (e) =>
    e
      .trim()
      .replace(/(\n)|(\r\n)/g, " ")
      .replace(/ +/g, " "),
  sn = (e) => !/[0-9 А-ЯЁA-Z.,<>/\\'"\[\]{}|`~!@№#;$%:^?&*()\-_+=\n]/i.test(e);
function Ia(e, t) {
  return /[ЁА-Я№]/i.test(e)
    ? "russian"
    : /[A-Z`~@#$^&\[{\]}|'<>]/i.test(e)
    ? "english"
    : t;
}
const wr = (e) => e !== e.toLowerCase(),
  Pa = function (e) {
    return (
      e === "Tab" ||
      e === "CapsLock" ||
      e == "ShiftLeft" ||
      e == "ControlLeft" ||
      e == "MetaLeft" ||
      e == "AltLeft" ||
      e == "AltRight" ||
      e == "ContexMenu" ||
      e == "MetaRight" ||
      e === "ControlRight" ||
      e === "ShiftRight"
    );
  },
  Bn = function (e, t) {
    const n = new Audio();
    (n.src = e), (n.volume = t), n.play();
  },
  Jn = function (e, t = 0) {
    return Number(Math.round(Number(e + "e" + t)) + "e-" + t);
  },
  Ro = function (e, t) {
    const n = Math.floor(Math.random() * (t - e + 1));
    return e + n;
  };
function ja(e) {
  const t = Math.trunc(e / 10)
    .toString()
    .slice(-2)
    .padStart(2, "0");
  e /= 1e3;
  const n = Math.floor(e / 60)
      .toString()
      .padStart(2, "0"),
    s = Math.floor(e - n * 60)
      .toString()
      .padStart(2, "0");
  return `${n}:${s}.${t}`;
}
const La = function (e, t) {
  const n = e.length;
  if (t >= n) return e;
  let s = 0,
    r = n;
  function o(_, g) {
    let v = _[g],
      T = v === "." || v === "?" || v === "!" || v === "\u2026";
    for (; T; ) {
      if ((g++, g >= n - 1)) return n - 1;
      (v = _[g]), (T = v === "." || v === "?" || v === "!" || v === "\u2026");
    }
    return Math.max(
      _.lastIndexOf(".", g),
      _.lastIndexOf("?", g),
      _.lastIndexOf("!", g),
      _.lastIndexOf("\u2026", g),
      0
    );
  }
  function i(_, g) {
    let v = _[g],
      T = v === "." || v === "?" || v === "!" || v === "\u2026";
    for (; T; ) {
      if ((g++, g >= n - 1)) return n - 1;
      (v = _[g]), (T = v === "." || v === "?" || v === "!" || v === "\u2026");
    }
    let I = _.length - 1;
    if (_.indexOf(".", g) !== -1) {
      const $ = _.indexOf(".", g);
      $ < I && (I = $);
    }
    if (_.indexOf("?", g) !== -1) {
      const $ = _.indexOf("?", g);
      $ < I && (I = $);
    }
    if (_.indexOf("!", g) !== -1) {
      const $ = _.indexOf("!", g);
      $ < I && (I = $);
    }
    if (_.indexOf("\u2026", g) !== -1) {
      const $ = _.indexOf("\u2026", g);
      $ < I && (I = $);
    }
    return I;
  }
  let l = n - 1,
    a = e[l],
    f = a === "." || a === "?" || a === "!" || a === "\u2026" || sn(a);
  for (; f; )
    l--,
      (a = e[l]),
      (f = a === "." || a === "?" || a === "!" || a === "\u2026" || sn(a));
  let h = Ro(0, l - t);
  return (
    (s = o(e, h)),
    s !== 0 && (s = s + 2),
    (r = i(e, s + t) + 1),
    e.substring(s, r)
  );
};
var Ps = "/keyboard-trainer/assets/click-sound.48212b34.mp3";
const A = ut({
  currentStatistics: { colors: "hsla(144, 65%, 47%, 1)" },
  field: {
    background: "hsla(0, 0%, 60%, 1)",
    charBackground: "hsla(0, 0%, 0%, 0.65)",
    caretBackground: "hsla(280, 85%, 70%, 0.65)",
    charColor: "hsla(0, 0%, 67%, 1)",
    charCorrectColor: "hsla(144, 65%, 47%, 1)",
    charWrongColor: "hsla(0, 100%, 60%, 1)",
    charRevisedColor: "hsla(90, 65%, 50%, 1)",
    charSpecialColor: "hsl(180, 100%, 50%, 0.75)",
  },
  keyboard: {
    background: "hsla(0, 0%, 15%, 1)",
    keyBackground: "hsla(0, 0%, 0%, 1)",
    keyColor: "hsla(0, 0%, 70%, 1)",
    shift: "hsla(300, 80%, 40%, 1)",
    pinky: "hsla(300, 60%, 40%, 1)",
    ring: "hsla(60, 80%, 35%, 1)",
    middle: "hsla(120, 80%, 33%, 1)",
    lIndex: "hsla(180, 100%, 35%, 1)",
    thumbs: "hsla(0, 0%, 70%, 1)",
    rIndex: "hsla(0, 75%, 50%, 1)",
    underline: !0,
  },
  main: {
    background: 0,
    langOfSnippets: "russian",
    minSnippetLength: 160,
    letterCase: !0,
    speaker: !0,
    ring: !0,
    volume: 0.2,
  },
  overallStatistics: {
    title: "hsla(282, 100%, 25%, 1)",
    ms: "hsla(240, 60%, 40%, 1)",
    correct: "hsla(135, 100%, 27%, 1)",
    wrong: "hsla(0, 100%, 30%, 1)",
  },
  shadow: { charCorrect: !1, charWrong: !0, charRevised: !1, charSpecial: !0 },
  visibility: { currentStatistics: !0, keyboard: !0 },
});
const Fa = Pl(
    '<svg width="44" height="44"><path stroke-width="2" d="M 1 14 L 13 14 L 25 2 L 25 42 L 13 30 L 1 30 Z" fill="none"></path><path stroke-width="2" d="M 13 14 L 13 30"></path><circle r="23" cx="18" cy="22" stroke-width="2px" stroke-dasharray="36.1283 108.3849" stroke-dashoffset="307.5" fill="none"></circle><circle r="16" cx="18" cy="22" stroke-width="2px" stroke-dasharray="25.1327 75.3982" stroke-dashoffset="12.5" fill="none"></circle></svg>',
    1
  ),
  Na = [Fa],
  Ba = {
    name: "SpeakerSVG",
    setup(e) {
      Ge((s) => ({ "78edac40": p(t) }));
      const t = J(() => (A.main.speaker ? "green" : "black"));
      function n() {
        (A.main.speaker = !A.main.speaker),
          A.main.speaker && Bn(Ps, A.main.volume),
          (localStorage.main = JSON.stringify(A.main));
      }
      return (s, r) => (
        N(), D("div", { onClick: n, class: "speaker-container" }, Na)
      );
    },
  };
var Ra =
    "/keyboard-trainer/assets/around_the_world_in_eighty_days_1873.dfaf39e2.txt",
  Da = "/keyboard-trainer/assets/kazan_1913.fbfedc5b.txt",
  Ka = "/keyboard-trainer/assets/tarzan_of_the_apes_1912.39bc3570.txt",
  Ua =
    "/keyboard-trainer/assets/the_adventures_of_sherlock_holmes_1892.96602ec5.txt",
  Ha = "/keyboard-trainer/assets/the_great_gatsby_1925.7487eabb.txt",
  Wa = "/keyboard-trainer/assets/the_lost_world_1912.37b20c50.txt",
  Va = "/keyboard-trainer/assets/the_sea_wolf_1904.2e08d0df.txt",
  qa = "/keyboard-trainer/assets/the_war_of_the_worlds_1898.ca8546b4.txt",
  za =
    "/keyboard-trainer/assets/twenty_thousand_leagues_under_the_sea_1872.9862b0d3.txt",
  Ja = "/keyboard-trainer/assets/white_fang_1906.5a4f8f19.txt",
  Ya = "/keyboard-trainer/assets/aelita_1923.f1029230.txt",
  Za = "/keyboard-trainer/assets/annushka_1946.cb88f0a3.txt",
  Xa = "/keyboard-trainer/assets/a_meeting_over_tuscarora_1944.0635cd42.txt",
  Qa = "/keyboard-trainer/assets/captains_daughter_1836.e11f3199.txt",
  Ga = "/keyboard-trainer/assets/kashtanka_1887.7b11ed74.txt",
  ec = "/keyboard-trainer/assets/outside_the_earth_1920.743e9f81.txt",
  tc =
    "/keyboard-trainer/assets/the_fierce_and_beautiful_world_1941.664f0c38.txt",
  nc = "/keyboard-trainer/assets/the_scarlet_flower_1858.31cbe816.txt",
  sc = "/keyboard-trainer/assets/the_storeroom_of_the_sun_1945.7faac254.txt",
  rc = "/keyboard-trainer/assets/volokolamsk_highway_1944.f8214652.txt";
const oc = [
    {
      title: "\u0410\u044D\u043B\u0438\u0442\u0430",
      author:
        "\u0410\u043B\u0435\u043A\u0441\u0435\u044F \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0438\u0447\u0430 \u0422\u043E\u043B\u0441\u0442\u043E\u0433\u043E",
      name: "aelita_1923",
    },
    {
      title:
        "\u041A\u0430\u043F\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F \u0434\u043E\u0447\u043A\u0430",
      author:
        "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447\u0430 \u041F\u0443\u0448\u043A\u0438\u043D\u0430",
      name: "captains_daughter_1836",
    },
    {
      title:
        "\u0412 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u043C \u0438 \u044F\u0440\u043E\u0441\u0442\u043D\u043E\u043C \u043C\u0438\u0440\u0435",
      author:
        "\u0410\u043D\u0434\u0440\u0435\u044F \u041F\u043B\u0430\u0442\u043E\u043D\u043E\u0432\u0438\u0447\u0430 \u041F\u043B\u0430\u0442\u043E\u043D\u043E\u0432\u0430",
      name: "the_fierce_and_beautiful_world_1941",
    },
    {
      title: "\u041A\u0430\u0448\u0442\u0430\u043D\u043A\u0430",
      author:
        "\u0410\u043D\u0442\u043E\u043D\u0430 \u041F\u0430\u0432\u043B\u043E\u0432\u0438\u0447\u0430 \u0427\u0435\u0445\u043E\u0432\u0430",
      name: "kashtanka_1887",
    },
    {
      title:
        "\u0412\u0441\u0442\u0440\u0435\u0447\u0430 \u043D\u0430\u0434 \u0422\u0443\u0441\u043A\u0430\u0440\u043E\u0440\u043E\u0439",
      author:
        "\u0418\u0432\u0430\u043D\u0430 \u0410\u043D\u0442\u043E\u043D\u043E\u0432\u0438\u0447\u0430 \u0415\u0444\u0440\u0435\u043C\u043E\u0432\u0430",
      name: "a_meeting_over_tuscarora_1944",
    },
    {
      title: "\u0412\u043D\u0435 \u0437\u0435\u043C\u043B\u0438",
      author:
        "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u0430 \u042D\u0434\u0443\u0430\u0440\u0434\u043E\u0432\u0438\u0447\u0430 \u0426\u0438\u043E\u043B\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E",
      name: "outside_the_earth_1920",
    },
    {
      title:
        "\u0412\u043E\u043B\u043E\u043A\u043E\u043B\u0430\u043C\u0441\u043A\u043E\u0435 \u0448\u043E\u0441\u0441\u0435",
      author:
        "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0410\u043B\u044C\u0444\u0440\u0435\u0434\u043E\u0432\u0438\u0447\u0430 \u0411\u0435\u043A\u0430",
      name: "volokolamsk_highway_1944",
    },
    {
      title:
        "\u0410\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0446\u0432\u0435\u0442\u043E\u0447\u0435\u043A",
      author:
        "\u0421\u0435\u0440\u0433\u0435\u044F \u0422\u0438\u043C\u043E\u0444\u0435\u0435\u0432\u0438\u0447\u0430 \u0410\u043A\u0441\u0430\u043A\u043E\u0432\u0430",
      name: "the_scarlet_flower_1858",
    },
    {
      title: "\u0410\u043D\u043D\u0443\u0448\u043A\u0430",
      author:
        "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u0430 \u0413\u0435\u043E\u0440\u0433\u0438\u0435\u0432\u0438\u0447\u0430 \u041F\u0430\u0443\u0441\u0442\u043E\u0432\u0441\u043A\u043E\u0433\u043E",
      name: "annushka_1946",
    },
    {
      title:
        "\u041A\u043B\u0430\u0434\u043E\u0432\u0430\u044F \u0441\u043E\u043B\u043D\u0446\u0430",
      author:
        "\u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447\u0430 \u041F\u0440\u0438\u0448\u0432\u0438\u043D\u0430",
      name: "the_storeroom_of_the_sun_1945",
    },
  ],
  ic = [
    {
      title:
        "\u0412\u043E\u043A\u0440\u0443\u0433 \u0441\u0432\u0435\u0442\u0430 \u0437\u0430 \u0432\u043E\u0441\u0435\u043C\u044C\u0434\u0435\u0441\u044F\u0442 \u0434\u043D\u0435\u0439",
      author:
        "\u0416\u044E\u043B\u044F \u0413\u0430\u0431\u0440\u0438\u044D\u043B\u044F \u0412\u0435\u0440\u043D\u0430",
      name: "around_the_world_in_eighty_days_1873",
    },
    {
      title:
        "\u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0442\u044B\u0441\u044F\u0447 \u043B\u044C\u0435 \u043F\u043E\u0434 \u0432\u043E\u0434\u043E\u0439",
      author:
        "\u0416\u044E\u043B\u044F \u0413\u0430\u0431\u0440\u0438\u044D\u043B\u044F \u0412\u0435\u0440\u043D\u0430",
      name: "twenty_thousand_leagues_under_the_sea_1872",
    },
    {
      title:
        "\u041F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0428\u0435\u0440\u043B\u043E\u043A\u0430 \u0425\u043E\u043B\u043C\u0441\u0430",
      author:
        "\u0410\u0440\u0442\u0443\u0440\u0430 \u041A\u043E\u043D\u0430\u043D \u0414\u043E\u0439\u043B\u0430",
      name: "the_adventures_of_sherlock_holmes_1892",
    },
    {
      title:
        "\u0417\u0430\u0442\u0435\u0440\u044F\u043D\u043D\u044B\u0439 \u043C\u0438\u0440",
      author:
        "\u0410\u0440\u0442\u0443\u0440\u0430 \u041A\u043E\u043D\u0430\u043D \u0414\u043E\u0439\u043B\u0430",
      name: "the_lost_world_1912",
    },
    {
      title:
        "\u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u0413\u044D\u0442\u0441\u0431\u0438",
      author:
        "\u0424\u0440\u0435\u043D\u0441\u0438\u0441\u0430 \u0421\u043A\u043E\u0442\u0442\u0430 \u0424\u0438\u0446\u0434\u0436\u0435\u0440\u0430\u043B\u044C\u0434\u0430",
      name: "the_great_gatsby_1925",
    },
    {
      title: "\u0412\u043E\u0439\u043D\u0430 \u043C\u0438\u0440\u043E\u0432",
      author:
        "\u0413\u0435\u0440\u0431\u0435\u0440\u0442\u0430 \u0414\u0436\u043E\u0440\u0434\u0436\u0430 \u0423\u044D\u043B\u043B\u0441\u0430",
      name: "the_war_of_the_worlds_1898",
    },
    {
      title:
        "\u0422\u0430\u0440\u0437\u0430\u043D \u2014 \u043F\u0440\u0438\u0451\u043C\u044B\u0448 \u043E\u0431\u0435\u0437\u044C\u044F\u043D",
      author:
        "\u042D\u0434\u0433\u0430\u0440\u0430 \u0420\u0430\u0439\u0441\u0430 \u0411\u0435\u0440\u0440\u043E\u0443\u0437\u0430",
      name: "tarzan_of_the_apes_1912",
    },
    {
      title: "\u041A\u0430\u0437\u0430\u043D",
      author:
        "\u0414\u0436\u0435\u0439\u043C\u0441\u0430 \u041E\u043B\u0438\u0432\u0435\u0440\u0430 \u041A\u0435\u0440\u0432\u0443\u0434\u0430",
      name: "kazan_1913",
    },
    {
      title: "\u0411\u0435\u043B\u044B\u0439 \u043A\u043B\u044B\u043A",
      author:
        "\u0414\u0436\u0435\u043A\u0430 \u041B\u043E\u043D\u0434\u043E\u043D\u0430",
      name: "white_fang_1906",
    },
    {
      title:
        "\u041C\u043E\u0440\u0441\u043A\u043E\u0439 \u0432\u043E\u043B\u043A",
      author:
        "\u0414\u0436\u0435\u043A\u0430 \u041B\u043E\u043D\u0434\u043E\u043D\u0430",
      name: "the_sea_wolf_1904",
    },
  ];
var Cr = { arrOfRusBooks: oc, arrOfEngBooks: ic },
  lc = "/keyboard-trainer/assets/ring.6fd73880.mp3";
const fe = ut({ work: !1, settings: !1, bTimer: !1, overallStatistics: !1 }),
  d = ut({
    fragmentArr: Object,
    indexArr: Number,
    firstIndex: Number,
    statArr: Object,
    timerStart: Number,
    timerStop: Number,
    stopwatch: Object,
    elapsedTime: 0,
    elapsedTimeStr: "00:00.00",
    charPerMin: "000",
    numDialed: 0,
    numCorrect: 0,
    numErrors: 0,
    tempErrorFree: 0,
    ErrorFree: 0,
    remainingChars: 0,
    currentBook: 0,
    focusElement: String,
    keyboardLayout: "russian",
    backgroundPreview: 0,
  }),
  ac = function (e) {
    let t = e.key,
      n = d.fragmentArr[d.indexArr];
    A.main.letterCase || ((t = t.toLowerCase()), (n = n.toLowerCase())),
      !(e.code === "Backspace" && d.indexArr !== 0) &&
        (t === n
          ? (d.statArr[d.indexArr] === "0"
              ? ((d.statArr[d.indexArr] = "2"), d.numDialed++)
              : d.statArr[d.indexArr] === "4" && (d.statArr[d.indexArr] = "3"),
            d.numCorrect++,
            d.tempErrorFree++,
            d.ErrorFree < d.tempErrorFree && (d.ErrorFree = d.tempErrorFree))
          : t !== n &&
            (d.statArr[d.indexArr] === "0" && d.numDialed++,
            (d.statArr[d.indexArr] = "4"),
            d.ErrorFree < d.tempErrorFree && (d.ErrorFree = d.tempErrorFree),
            d.numErrors++,
            (d.tempErrorFree = 0)));
  },
  Do = function (e, t = 0) {
    t === 0
      ? (d.fragmentArr = xr(Ma(e)))
      : ((e = Oa(e)), (d.fragmentArr = xr(La(e, t))));
    let n = 0,
      s = 0;
    for (let r = 0; r < d.fragmentArr.length; r++) {
      n++;
      const o = d.fragmentArr[r];
      if (o === "end") break;
      (sn(o) || o === "skip") && s++;
    }
    (d.remainingChars = n - s - 1),
      (d.statArr = new Array(d.fragmentArr.length).fill("0")),
      (d.firstIndex = 0),
      (d.indexArr = -1),
      uc(),
      (fe.work = !0),
      hs();
  },
  cc = function () {
    d.firstIndex + 200 >= d.fragmentArr.length || (d.firstIndex += 200);
  },
  hs = function (e = "forward") {
    e === "forward" ? d.indexArr++ : e === "back" && d.indexArr--;
    let t = d.fragmentArr[d.indexArr];
    for (; sn(t) || t === "skip"; )
      d.fragmentArr[d.indexArr + 1] === " " &&
        d.fragmentArr[d.indexArr - 1] === " " &&
        (e === "forward" ? d.indexArr++ : e === "back" && d.indexArr--),
        e === "forward" ? d.indexArr++ : e === "back" && d.indexArr--,
        (t = d.fragmentArr[d.indexArr]);
    if (
      d.indexArr >= d.fragmentArr.length ||
      d.fragmentArr[d.indexArr] === "end"
    ) {
      A.main.speaker && A.main.ring && Bn(lc, A.main.volume),
        (d.timerStop = performance.now()),
        (fe.work = !1),
        (fe.overallStatistics = !0);
      return;
    } else d.indexArr >= 200 + d.firstIndex && cc();
    d.keyboardLayout = Ia(d.fragmentArr[d.indexArr], d.keyboardLayout);
  },
  uc = function () {
    (fe.bTimer = !1),
      clearInterval(d.stopwatch),
      (d.elapsedTime = 0),
      (d.elapsedTimeStr = "00:00.00"),
      (d.charPerMin = "000"),
      (d.numDialed = 0),
      (d.numCorrect = 0),
      (d.numErrors = 0),
      (d.tempErrorFree = 0),
      (d.ErrorFree = 0);
  },
  Yn = function (e, t) {
    d.focusElement = "#nav-snippet";
    let n = [];
    e === "russian"
      ? ((n = Cr.arrOfRusBooks), (A.main.langOfSnippets = "russian"))
      : ((n = Cr.arrOfEngBooks), (A.main.langOfSnippets = "english")),
      (localStorage.main = JSON.stringify(A.main));
    const s = n[Ro(0, n.length - 1)];
    d.currentBook = s;
    function r(l) {
      return new URL(
        {
          "/src/assets/books/english/around_the_world_in_eighty_days_1873.txt":
            Ra,
          "/src/assets/books/english/kazan_1913.txt": Da,
          "/src/assets/books/english/tarzan_of_the_apes_1912.txt": Ka,
          "/src/assets/books/english/the_adventures_of_sherlock_holmes_1892.txt":
            Ua,
          "/src/assets/books/english/the_great_gatsby_1925.txt": Ha,
          "/src/assets/books/english/the_lost_world_1912.txt": Wa,
          "/src/assets/books/english/the_sea_wolf_1904.txt": Va,
          "/src/assets/books/english/the_war_of_the_worlds_1898.txt": qa,
          "/src/assets/books/english/twenty_thousand_leagues_under_the_sea_1872.txt":
            za,
          "/src/assets/books/english/white_fang_1906.txt": Ja,
          "/src/assets/books/russian/aelita_1923.txt": Ya,
          "/src/assets/books/russian/annushka_1946.txt": Za,
          "/src/assets/books/russian/a_meeting_over_tuscarora_1944.txt": Xa,
          "/src/assets/books/russian/captains_daughter_1836.txt": Qa,
          "/src/assets/books/russian/kashtanka_1887.txt": Ga,
          "/src/assets/books/russian/outside_the_earth_1920.txt": ec,
          "/src/assets/books/russian/the_fierce_and_beautiful_world_1941.txt":
            tc,
          "/src/assets/books/russian/the_scarlet_flower_1858.txt": nc,
          "/src/assets/books/russian/the_storeroom_of_the_sun_1945.txt": sc,
          "/src/assets/books/russian/volokolamsk_highway_1944.txt": rc,
        }[`/src/assets/books/${e}/${l}.txt`],
        self.location
      ).href;
    }
    const o = r(s.name),
      i = new XMLHttpRequest();
    (i.onload = function () {
      Do(i.responseText, t);
    }),
      i.open("GET", o),
      i.send();
  };
const fc = { class: "nav" },
  dc = { class: "nav-children" },
  hc = b("a", { id: "nav-drop-down", href: "#!" }, "\u25BC", -1),
  pc = {
    name: "NavigationBar",
    setup(e) {
      async function t() {
        (d.focusElement = "#nav-buffer"), (d.currentBook = 0);
        const r = $a().browser;
        if (r === "yabrowser" || r === "chrome" || r === "opera") {
          let o = await navigator.clipboard.readText();
          if (
            o === " " ||
            o === "" ||
            o ===
              `\r
`
          )
            return;
          Do(o);
        }
      }
      const n = function () {
          (fe.settings = !fe.settings),
            fe.settings || (A.main.background = d.backgroundPreview);
        },
        s = J(() => Number(A.main.minSnippetLength));
      return (r, o) => (
        N(),
        D("div", null, [
          M(Ba, { class: "nav-speaker" }),
          b("ul", fc, [
            b("li", null, [
              b(
                "a",
                {
                  onClick:
                    o[0] ||
                    (o[0] = (i) => p(Yn)(p(A).main.langOfSnippets, p(s))),
                  id: "nav-snippet",
                  href: "#!",
                },
                " \u041E\u0442\u0440\u044B\u0432\u043E\u043A "
              ),
            ]),
            b("li", dc, [
              hc,
              b("ul", null, [
                b("li", null, [
                  b(
                    "a",
                    {
                      onClick: o[1] || (o[1] = (i) => p(Yn)("russian", p(s))),
                      class: De({
                        "nav-underscore-none":
                          p(A).main.langOfSnippets !== "russian",
                      }),
                      href: "#!",
                    },
                    " \u041D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 ",
                    2
                  ),
                ]),
                b("li", null, [
                  b(
                    "a",
                    {
                      onClick: o[2] || (o[2] = (i) => p(Yn)("english", p(s))),
                      class: De({
                        "nav-underscore-none":
                          p(A).main.langOfSnippets !== "english",
                      }),
                      href: "#!",
                    },
                    " \u041D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 ",
                    2
                  ),
                ]),
              ]),
            ]),
            b("li", null, [
              b(
                "a",
                { onClick: t, href: "#!", id: "nav-buffer" },
                " \u0411\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430 "
              ),
            ]),
            b("li", null, [
              b(
                "a",
                { onClick: n, id: "nav-settings", href: "#!" },
                "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
              ),
            ]),
          ]),
        ])
      );
    },
  };
var gc = "/keyboard-trainer/assets/altai-mountains.8e9b5e75.jpg",
  _c = "/keyboard-trainer/assets/bird.c0dc0f34.jpg",
  mc = "/keyboard-trainer/assets/bug.01483d9e.jpg",
  bc = "/keyboard-trainer/assets/dombay.a14828f2.jpg",
  vc = "/keyboard-trainer/assets/kamchatka.8a475819.jpg",
  yc = "/keyboard-trainer/assets/krasnaya-polyana.fad3b70b.jpg",
  kc = "/keyboard-trainer/assets/sea-lion.af405f39.jpg",
  xc = "/keyboard-trainer/assets/winter-beach.51379833.jpg";
var wc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t) n[s] = r;
  return n;
};
const We = (e) => (Ui("data-v-1fd8fd02"), (e = e()), Hi(), e),
  Cc = { class: "slider-container" },
  Sc = { class: "slider-title" },
  Ac = We(() => b("div", { class: "slider-sample" }, null, -1)),
  Ec = We(() => b("div", { class: "slider-line" }, null, -1)),
  Tc = { key: 0 },
  $c = We(() =>
    b("div", { class: "slider-description" }, "\u0442\u043E\u043D", -1)
  ),
  Mc = { class: "slider" },
  Oc = { class: "slider-input-container" },
  Ic = We(() => b("div", { class: "slider-chess-background" }, null, -1)),
  Pc = { class: "slider-label", for: "hue" },
  jc = We(() =>
    b(
      "div",
      { class: "slider-description" },
      "\u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
      -1
    )
  ),
  Lc = { class: "slider" },
  Fc = { class: "slider-input-container" },
  Nc = We(() => b("div", { class: "slider-chess-background" }, null, -1)),
  Bc = { class: "slider-label", for: "saturation" },
  Rc = We(() =>
    b(
      "div",
      { class: "slider-description" },
      "\u0441\u0432\u0435\u0442\u043B\u043E\u0442\u0430",
      -1
    )
  ),
  Dc = { class: "slider" },
  Kc = { class: "slider-input-container" },
  Uc = We(() => b("div", { class: "slider-chess-background" }, null, -1)),
  Hc = { class: "slider-label", for: "lightness" },
  Wc = We(() =>
    b(
      "div",
      { class: "slider-description" },
      "\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C",
      -1
    )
  ),
  Vc = { class: "slider" },
  qc = { class: "slider-input-container" },
  zc = We(() => b("div", { class: "slider-chess-background" }, null, -1)),
  Jc = { class: "slider-label", for: "alpha" },
  Yc = {
    name: "HslaSlider",
    props: { title: String, obj: String, prop: String },
    setup(e) {
      const t = e;
      Ge((v) => ({
        "707e270b": p(_),
        cf57b6b8: p(l),
        "9786330e": p(s),
        "05a8b12e": p(o),
        cf92b2c2: p(i),
        a55bb19e: p(r),
        "7c5bb0b6": p(a),
      }));
      const n = ut({
          hue: Number,
          saturation: Number,
          lightness: Number,
          alpha: Number,
          flag: !1,
        }),
        s = Q(() => n.hue),
        r = Q(() => `${n.saturation}%`),
        o = Q(() => `${n.lightness}%`),
        i = Q(() => n.alpha),
        l = Q(
          () => `hsla(${n.hue}, ${n.saturation}%, ${n.lightness}%, ${n.alpha})`
        ),
        a = Q(() => `hsl(${n.hue}, 100%, 50%)`);
      Wt(l, (v) => {
        A[t.obj][t.prop] = v;
      });
      const f = function (v) {
          return v.match(/[0-9.]+/g);
        },
        h = () => (n.flag = !n.flag),
        _ = Q(() =>
          n.flag ? "1px solid hsl(0, 0%, 78%)" : "1px solid transparent"
        ),
        g = function () {
          localStorage[t.obj] = JSON.stringify(A[t.obj]);
        };
      return (
        kt(() => {
          const v = f(A[t.obj][t.prop]);
          (n.hue = v[0]),
            (n.saturation = v[1]),
            (n.lightness = v[2]),
            (n.alpha = v[3]);
        }),
        (v, T) => {
          const I = lo("click-outside");
          return Ze(
            (N(),
            D("div", Cc, [
              b("div", { onClick: h, class: "slider-title-container" }, [
                b("div", Sc, Z(t.title), 1),
                Ac,
              ]),
              Ec,
              M(
                pa,
                { name: "hide-slider" },
                {
                  default: Ke(() => [
                    n.flag
                      ? (N(),
                        D("div", Tc, [
                          $c,
                          b("div", Mc, [
                            b("div", Oc, [
                              Ze(
                                b(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      T[0] || (T[0] = ($) => (n.hue = $)),
                                    type: "range",
                                    class: "slider-input",
                                    id: "hue",
                                    min: "0",
                                    max: "360",
                                    onMouseup: g,
                                  },
                                  null,
                                  544
                                ),
                                [[Tt, n.hue]]
                              ),
                              Ic,
                            ]),
                            b("label", Pc, Z(n.hue), 1),
                          ]),
                          jc,
                          b("div", Lc, [
                            b("div", Fc, [
                              Ze(
                                b(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      T[1] ||
                                      (T[1] = ($) => (n.saturation = $)),
                                    type: "range",
                                    class: "slider-input",
                                    id: "saturation",
                                    min: "0",
                                    max: "100",
                                    onMouseup: g,
                                  },
                                  null,
                                  544
                                ),
                                [[Tt, n.saturation]]
                              ),
                              Nc,
                            ]),
                            b("label", Bc, Z(n.saturation), 1),
                          ]),
                          Rc,
                          b("div", Dc, [
                            b("div", Kc, [
                              Ze(
                                b(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      T[2] || (T[2] = ($) => (n.lightness = $)),
                                    type: "range",
                                    class: "slider-input",
                                    id: "lightness",
                                    min: "0",
                                    max: "100",
                                    onMouseup: g,
                                  },
                                  null,
                                  544
                                ),
                                [[Tt, n.lightness]]
                              ),
                              Uc,
                            ]),
                            b("label", Hc, Z(n.lightness), 1),
                          ]),
                          Wc,
                          b("div", Vc, [
                            b("div", qc, [
                              Ze(
                                b(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      T[3] || (T[3] = ($) => (n.alpha = $)),
                                    type: "range",
                                    class: "slider-input",
                                    id: "alpha",
                                    min: "0",
                                    max: "1",
                                    step: "0.01",
                                    onMouseup: g,
                                  },
                                  null,
                                  544
                                ),
                                [[Tt, n.alpha]]
                              ),
                              zc,
                            ]),
                            b("label", Jc, Z(n.alpha), 1),
                          ]),
                        ]))
                      : oe("", !0),
                  ]),
                  _: 1,
                }
              ),
            ])),
            [[I, () => (n.flag = !1)]]
          );
        }
      );
    },
  };
var ae = wc(Yc, [["__scopeId", "data-v-1fd8fd02"]]);
const Zc = { class: "checkbox" },
  Xc = { class: "checkbox-title" },
  Qc = ["disabled"],
  Gc = b("span", { class: "check-mark" }, null, -1),
  Fe = {
    name: "Checkbox",
    props: { title: String, obj: String, prop: String, disabled: Boolean },
    setup(e) {
      const t = e;
      Ge((r) => ({ "67c3a84e": p(n), "41c1ceb3": p(s) })),
        Wt(A[t.obj], (r) => {
          localStorage[t.obj] = JSON.stringify(r);
        });
      const n = Q(() => (t.disabled ? 0.5 : 1)),
        s = Q(() => (t.disabled ? "not-allowed" : "pointer"));
      return (r, o) => (
        N(),
        D("label", Zc, [
          b("div", Xc, Z(t.title), 1),
          Ze(
            b(
              "input",
              {
                type: "checkbox",
                "onUpdate:modelValue":
                  o[0] || (o[0] = (i) => (p(A)[t.obj][t.prop] = i)),
                disabled: t.disabled,
              },
              null,
              8,
              Qc
            ),
            [[ya, p(A)[t.obj][t.prop]]]
          ),
          Gc,
        ])
      );
    },
  };
const eu = { class: "input-container" },
  tu = b(
    "div",
    { class: "input-description" },
    " \u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u043E\u0442\u0440\u044B\u0432\u043A\u0430: ",
    -1
  ),
  nu = {
    name: "Input",
    setup(e) {
      const t = ts(!1);
      function n(s) {
        if (!"0123456789".includes(s.key) && s.key !== "Backspace") {
          s.preventDefault();
          return;
        }
        input.selectionEnd - input.selectionStart ||
          (input.value.length >= 6 &&
            s.key !== "Backspace" &&
            t &&
            s.preventDefault());
      }
      return (s, r) => (
        N(),
        D("div", eu, [
          tu,
          Ze(
            b(
              "input",
              {
                type: "text",
                id: "input",
                onKeydown: n,
                "onUpdate:modelValue":
                  r[0] || (r[0] = (o) => (p(A).main.minSnippetLength = o)),
              },
              null,
              544
            ),
            [[Tt, p(A).main.minSnippetLength]]
          ),
        ])
      );
    },
  };
const su = { class: "slider-container" },
  ru = { class: "slider" },
  ou = ["max", "step", "disabled"],
  iu = { class: "slider-label" },
  lu = {
    name: "SingleSlider",
    props: {
      obj: String,
      prop: String,
      max: String,
      step: String,
      disabled: Boolean,
    },
    setup(e) {
      const t = e;
      Ge((o) => ({ "435ad9f9": p(n), "660f88b0": p(s) }));
      const n = J(() => (t.disabled ? 0.5 : 1)),
        s = J(() => (t.disabled ? "not-allowed" : "pointer"));
      function r() {
        A.main.speaker && Bn(Ps, A.main.volume);
      }
      return (o, i) => (
        N(),
        D("div", su, [
          b("div", ru, [
            Ze(
              b(
                "input",
                {
                  "onUpdate:modelValue":
                    i[0] || (i[0] = (l) => (p(A)[t.obj][t.prop] = l)),
                  onMouseup: r,
                  type: "range",
                  class: "slider-input",
                  min: "0",
                  max: t.max,
                  step: t.step,
                  disabled: t.disabled,
                },
                null,
                40,
                ou
              ),
              [[Tt, p(A)[t.obj][t.prop]]]
            ),
            b("label", iu, Z(p(A)[t.obj][t.prop]), 1),
          ]),
        ])
      );
    },
  };
const au = { class: "settings-container" },
  cu = { class: "settings-title-container" },
  uu = b("div", { class: "arrow arrow-left" }, null, -1),
  fu = [uu],
  du = { class: "settings-title" },
  hu = b("div", { class: "arrow arrow-right" }, null, -1),
  pu = [hu],
  gu = { key: 0, class: "settings-page-container" },
  _u = { class: "settings-image" },
  mu = ["src", "alt"],
  bu = { class: "settings-btn-preview-container" },
  vu = { key: 0, class: "settings-image-description" },
  yu = { class: "settings-image-link-description" },
  ku = zt(
    " \u0410\u0432\u0442\u043E\u0440 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438: "
  ),
  xu = ["href"],
  wu = { key: 0, class: "settings-page-container" },
  Cu = b(
    "div",
    { class: "settings-category-margin" },
    "\u0426\u0432\u0435\u0442:",
    -1
  ),
  Su = b(
    "div",
    { class: "settings-category-margin" },
    "\u0422\u0435\u043D\u044C:",
    -1
  ),
  Au = { class: "settings-shadow-checkbox" },
  Eu = { key: 0, class: "settings-page-container" },
  Tu = { key: 0, class: "settings-page-container" },
  $u = b(
    "div",
    { class: "settings-category-margin" },
    "\u0426\u0432\u0435\u0442\u0430 \u043E\u0431\u0449\u0435\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438:",
    -1
  ),
  Mu = b(
    "div",
    { class: "settings-category-margin" },
    "\u0417\u0432\u0443\u043A:",
    -1
  ),
  Ou = { class: "settings-shadow-checkbox" },
  Iu = {
    name: "SettingsMenu",
    setup(e) {
      const t = ts(0),
        n = ts("slide-next"),
        s = Q(() => {
          if (t.value === 0)
            return "\u041E\u0431\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438";
          if (t.value === 1)
            return "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E\u043B\u044F";
          if (t.value === 2)
            return "\u0426\u0432\u0435\u0442\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B";
          if (t.value === 3)
            return "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u0437\u0432\u0443\u043A";
        }),
        r = function (g) {
          if (g === "next") {
            if (((n.value = "slide-next"), t.value >= 3)) {
              t.value = 0;
              return;
            }
            t.value++;
          } else if (g === "prev") {
            if (((n.value = "slide-prev"), t.value <= 0)) {
              t.value = 3;
              return;
            }
            t.value--;
          }
        };
      function o(g) {
        return new URL(
          {
            "/src/assets/backgrounds/small/altai-mountains.jpg": gc,
            "/src/assets/backgrounds/small/bird.jpg": _c,
            "/src/assets/backgrounds/small/bug.jpg": mc,
            "/src/assets/backgrounds/small/dombay.jpg": bc,
            "/src/assets/backgrounds/small/kamchatka.jpg": vc,
            "/src/assets/backgrounds/small/krasnaya-polyana.jpg": yc,
            "/src/assets/backgrounds/small/sea-lion.jpg": kc,
            "/src/assets/backgrounds/small/winter-beach.jpg": xc,
          }[`/src/assets/backgrounds/small/${g}.jpg`],
          self.location
        ).href;
      }
      const i = Q(() => o(Be[d.backgroundPreview].name)),
        l = function (g) {
          const v = d.backgroundPreview;
          function T() {
            const I = { ...A.main };
            (I.background = d.backgroundPreview),
              (localStorage.main = JSON.stringify(I));
          }
          if (g === "next") {
            if (v >= Be.length - 1) {
              (d.backgroundPreview = 0), T();
              return;
            }
            d.backgroundPreview++;
          } else if (g === "prev") {
            if (v <= 0) {
              (d.backgroundPreview = Be.length - 1), T();
              return;
            }
            d.backgroundPreview--;
          }
          T();
        },
        a = function () {
          function g(T) {
            return new URL(
              {
                "/src/assets/backgrounds/normal/altai-mountains.jpg": Oo,
                "/src/assets/backgrounds/normal/bird.jpg": Io,
                "/src/assets/backgrounds/normal/bug.jpg": Po,
                "/src/assets/backgrounds/normal/dombay.jpg": jo,
                "/src/assets/backgrounds/normal/kamchatka.jpg": Lo,
                "/src/assets/backgrounds/normal/krasnaya-polyana.jpg": Fo,
                "/src/assets/backgrounds/normal/sea-lion.jpg": No,
                "/src/assets/backgrounds/normal/winter-beach.jpg": Bo,
              }[`/src/assets/backgrounds/normal/${T}.jpg`],
              self.location
            ).href;
          }
          const v = new Image();
          (v.src = g(Be[d.backgroundPreview].name)),
            (v.onload = () => {
              A.main.background = d.backgroundPreview;
              for (const T in A) localStorage[T] = JSON.stringify(A[T]);
            }),
            (fe.settings = !1);
        },
        f = {
          currentStatistics: { colors: "hsla(144, 65%, 47%, 1)" },
          field: {
            background: "hsla(0, 0%, 60%, 1)",
            charBackground: "hsla(0, 0%, 0%, 0.65)",
            caretBackground: "hsla(280, 85%, 70%, 0.65)",
            charColor: "hsla(0, 0%, 67%, 1)",
            charCorrectColor: "hsla(144, 65%, 47%, 1)",
            charWrongColor: "hsla(0, 100%, 60%, 1)",
            charRevisedColor: "hsla(90, 65%, 50%, 1)",
            charSpecialColor: "hsl(180, 100%, 50%, 0.75)",
          },
          keyboard: {
            background: "hsla(0, 0%, 15%, 1)",
            keyBackground: "hsla(0, 0%, 0%, 1)",
            keyColor: "hsla(0, 0%, 70%, 1)",
            shift: "hsla(300, 80%, 40%, 1)",
            pinky: "hsla(300, 60%, 40%, 1)",
            ring: "hsla(60, 80%, 35%, 1)",
            middle: "hsla(120, 80%, 33%, 1)",
            lIndex: "hsla(180, 100%, 35%, 1)",
            thumbs: "hsla(0, 0%, 70%, 1)",
            rIndex: "hsla(0, 75%, 50%, 1)",
            underline: !0,
          },
          main: {
            background: 0,
            langOfSnippets: "russian",
            minSnippetLength: 160,
            letterCase: !0,
            speaker: !0,
            ring: !0,
            volume: 0.2,
          },
          overallStatistics: {
            title: "hsla(282, 100%, 25%, 1)",
            ms: "hsla(240, 60%, 40%, 1)",
            correct: "hsla(135, 100%, 27%, 1)",
            wrong: "hsla(0, 100%, 30%, 1)",
          },
          shadow: {
            charCorrect: !1,
            charWrong: !0,
            charRevised: !1,
            charSpecial: !0,
          },
          visibility: { currentStatistics: !0, keyboard: !0 },
        };
      function h() {
        for (const g in f) A[g] = f[g];
        (d.backgroundPreview = 0), localStorage.clear(), (fe.settings = !1);
      }
      const _ = function (g) {
        const v = g.code;
        (v === "Enter" || v === "Escape") && a();
      };
      return (g, v) => {
        const T = lo("click-outside");
        return Ze(
          (N(),
          D("div", au, [
            b("div", cu, [
              b(
                "button",
                {
                  onClick: v[0] || (v[0] = (I) => r("prev")),
                  class: "settings-btn-page",
                },
                fu
              ),
              b("div", du, Z(p(s)), 1),
              b(
                "button",
                {
                  onClick: v[1] || (v[1] = (I) => r("next")),
                  class: "settings-btn-page",
                },
                pu
              ),
            ]),
            M(
              Ue,
              { name: n.value },
              {
                default: Ke(() => [
                  t.value === 0
                    ? (N(),
                      D("div", gu, [
                        b(
                          "button",
                          { onClick: h, class: "settings-btn-default" },
                          " \u0421\u0431\u0440\u043E\u0441 "
                        ),
                        M(Fe, {
                          title:
                            "\u0423\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u0431\u0443\u043A\u0432",
                          obj: "main",
                          prop: "letterCase",
                        }),
                        M(Fe, {
                          title:
                            "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",
                          obj: "visibility",
                          prop: "currentStatistics",
                        }),
                        M(Fe, {
                          title:
                            "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0443",
                          obj: "visibility",
                          prop: "keyboard",
                        }),
                        M(Fe, {
                          title:
                            "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0437\u0430\u0441\u0435\u0447\u043A\u0438",
                          obj: "keyboard",
                          prop: "underline",
                        }),
                        M(nu, { onKeydown: _ }),
                        b("div", _u, [
                          b(
                            "img",
                            {
                              id: "settings-preview",
                              src: p(i),
                              alt: p(Be)[p(d).backgroundPreview].location,
                            },
                            null,
                            8,
                            mu
                          ),
                          b("div", bu, [
                            b(
                              "button",
                              {
                                onClick: v[2] || (v[2] = (I) => l("prev")),
                                class: "settings-btn-preview",
                              },
                              " \u25C4 "
                            ),
                            b(
                              "button",
                              {
                                onClick: v[3] || (v[3] = (I) => l("next")),
                                class: "settings-btn-preview",
                              },
                              " \u25BA "
                            ),
                          ]),
                        ]),
                        b("div", null, [
                          p(Be)[p(d).backgroundPreview].location
                            ? (N(),
                              D(
                                "p",
                                vu,
                                " \u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435: " +
                                  Z(p(Be)[p(d).backgroundPreview].location),
                                1
                              ))
                            : oe("", !0),
                          b("p", yu, [
                            ku,
                            b(
                              "a",
                              {
                                class: "settings-image-link",
                                href: p(Be)[p(d).backgroundPreview].link,
                              },
                              Z(p(Be)[p(d).backgroundPreview].author),
                              9,
                              xu
                            ),
                          ]),
                        ]),
                      ]))
                    : oe("", !0),
                ]),
                _: 1,
              },
              8,
              ["name"]
            ),
            M(
              Ue,
              { name: n.value },
              {
                default: Ke(() => [
                  t.value === 1
                    ? (N(),
                      D("div", wu, [
                        Cu,
                        M(ae, {
                          title: "\u0444\u043E\u043D \u043F\u043E\u043B\u044F",
                          obj: "field",
                          prop: "background",
                        }),
                        M(ae, {
                          title:
                            "\u0444\u043E\u043D \u0441\u0438\u043C\u0432\u043E\u043B\u0430",
                          obj: "field",
                          prop: "charBackground",
                        }),
                        M(ae, {
                          title:
                            "\u0444\u043E\u043D \u043A\u0430\u0440\u0435\u0442\u043A\u0438",
                          obj: "field",
                          prop: "caretBackground",
                        }),
                        M(ae, {
                          title:
                            "\u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
                          obj: "field",
                          prop: "charColor",
                        }),
                        M(ae, {
                          title:
                            "\u0432\u0435\u0440\u043D\u043E \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
                          obj: "field",
                          prop: "charCorrectColor",
                        }),
                        M(ae, {
                          title:
                            "\u043D\u0435\u0432\u0435\u0440\u043D\u043E \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
                          obj: "field",
                          prop: "charWrongColor",
                        }),
                        M(ae, {
                          title:
                            "\u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
                          obj: "field",
                          prop: "charRevisedColor",
                        }),
                        M(ae, {
                          title:
                            "\u043D\u0435\u043D\u0430\u0431\u0438\u0440\u0430\u0435\u043C\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
                          obj: "field",
                          prop: "charSpecialColor",
                        }),
                        Su,
                        b("div", Au, [
                          M(Fe, {
                            title:
                              "\u0432\u0435\u0440\u043D\u043E \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
                            obj: "shadow",
                            prop: "charCorrect",
                          }),
                          M(Fe, {
                            title:
                              "\u043D\u0435\u0432\u0435\u0440\u043D\u043E \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
                            obj: "shadow",
                            prop: "charWrong",
                          }),
                          M(Fe, {
                            title:
                              "\u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
                            obj: "shadow",
                            prop: "charRevised",
                          }),
                          M(Fe, {
                            title:
                              "\u043D\u0435\u043D\u0430\u0431\u0438\u0440\u0430\u0435\u043C\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
                            obj: "shadow",
                            prop: "charSpecial",
                          }),
                        ]),
                      ]))
                    : oe("", !0),
                ]),
                _: 1,
              },
              8,
              ["name"]
            ),
            M(
              Ue,
              { name: n.value },
              {
                default: Ke(() => [
                  t.value === 2
                    ? (N(),
                      D("div", Eu, [
                        M(ae, {
                          title:
                            "\u0444\u043E\u043D \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B",
                          obj: "keyboard",
                          prop: "background",
                        }),
                        M(ae, {
                          title:
                            "\u0444\u043E\u043D \u043A\u043B\u0430\u0432\u0438\u0448",
                          obj: "keyboard",
                          prop: "keyBackground",
                        }),
                        M(ae, {
                          title:
                            "\u0442\u0435\u043A\u0441\u0442 \u043A\u043B\u0430\u0432\u0438\u0448",
                          obj: "keyboard",
                          prop: "keyColor",
                        }),
                        M(ae, {
                          title:
                            "\u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 (Shift)",
                          obj: "keyboard",
                          prop: "shift",
                        }),
                        M(ae, {
                          title: "\u043C\u0438\u0437\u0438\u043D\u0446\u044B",
                          obj: "keyboard",
                          prop: "pinky",
                        }),
                        M(ae, {
                          title:
                            "\u0431\u0435\u0437\u044B\u043C\u044F\u043D\u043D\u044B\u0435 \u043F\u0430\u043B\u044C\u0446\u044B",
                          obj: "keyboard",
                          prop: "ring",
                        }),
                        M(ae, {
                          title:
                            "\u0441\u0440\u0435\u0434\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u044B",
                          obj: "keyboard",
                          prop: "middle",
                        }),
                        M(ae, {
                          title:
                            "\u043B\u0435\u0432\u044B\u0439 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",
                          obj: "keyboard",
                          prop: "lIndex",
                        }),
                        M(ae, {
                          title:
                            "\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u044B",
                          obj: "keyboard",
                          prop: "thumbs",
                        }),
                        M(ae, {
                          title:
                            "\u043F\u0440\u0430\u0432\u044B\u0439 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",
                          obj: "keyboard",
                          prop: "rIndex",
                        }),
                      ]))
                    : oe("", !0),
                ]),
                _: 1,
              },
              8,
              ["name"]
            ),
            M(
              Ue,
              { name: n.value },
              {
                default: Ke(() => [
                  t.value === 3
                    ? (N(),
                      D("div", Tu, [
                        M(ae, {
                          title:
                            "\u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438",
                          obj: "currentStatistics",
                          prop: "colors",
                        }),
                        $u,
                        M(ae, {
                          title:
                            "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043D\u0438\u0433\u0438 \u0438 \u0430\u0432\u0442\u043E\u0440",
                          obj: "overallStatistics",
                          prop: "title",
                        }),
                        M(ae, {
                          title:
                            "\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B",
                          obj: "overallStatistics",
                          prop: "ms",
                        }),
                        M(ae, {
                          title:
                            "\u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
                          obj: "overallStatistics",
                          prop: "correct",
                        }),
                        M(ae, {
                          title:
                            "\u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0448\u0438\u0431\u043E\u0447\u043D\u044B\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
                          obj: "overallStatistics",
                          prop: "wrong",
                        }),
                        Mu,
                        b("div", Ou, [
                          M(Fe, {
                            title:
                              "\u041E\u0437\u0432\u0443\u0447\u0438\u0432\u0430\u0442\u044C \u043F\u0435\u0447\u0430\u0442\u044C",
                            obj: "main",
                            prop: "speaker",
                          }),
                          M(
                            Fe,
                            {
                              title:
                                "\u0421\u0438\u0433\u043D\u0430\u043B \u043F\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0438 \u043D\u0430\u0431\u043E\u0440\u0430",
                              obj: "main",
                              prop: "ring",
                              disabled: !p(A).main.speaker,
                            },
                            null,
                            8,
                            ["disabled"]
                          ),
                        ]),
                        M(
                          lu,
                          {
                            obj: "main",
                            prop: "volume",
                            max: "1",
                            step: "0.01",
                            disabled: !p(A).main.speaker,
                          },
                          null,
                          8,
                          ["disabled"]
                        ),
                      ]))
                    : oe("", !0),
                ]),
                _: 1,
              },
              8,
              ["name"]
            ),
          ])),
          [[T, a]]
        );
      };
    },
  };
const Pu = { class: "current-stat-container" },
  ju = { class: "without-mistake" },
  Lu = { key: 0, class: "current-stat-description" },
  Fu = { key: 0 },
  Nu = { key: 1 },
  Bu = { class: "remaining-chars" },
  Ru = { key: 0, class: "current-stat-description" },
  Du = { class: "char-per-minute" },
  Ku = { key: 0, class: "current-stat-description" },
  Uu = { class: "elapsed-time" },
  Hu = { key: 0, class: "current-stat-description" },
  Wu = {
    name: "CurrentStatistics",
    setup(e) {
      Ge((l) => ({ "4e572701": p(o), "07e87050": p(i) }));
      const t = J(() => d.tempErrorFree),
        n = J(() => d.ErrorFree),
        s = J(() => d.remainingChars),
        r = J(() => d.elapsedTime === 0),
        o = J(() => A.currentStatistics.colors),
        i = J(() => {
          const l = A.currentStatistics.colors.match(/[0-9.]+/g),
            a = l[0],
            f = l[1],
            h = l[2] - 30,
            _ = l[3];
          return `hsla(${a}, ${f}%, ${h}%, ${_})`;
        });
      return (l, a) => (
        N(),
        D("div", Pu, [
          b("div", ju, [
            M(
              Ue,
              { name: "hide" },
              {
                default: Ke(() => [
                  p(r)
                    ? (N(),
                      D(
                        "span",
                        Lu,
                        " \u0411\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A:\xA0 "
                      ))
                    : oe("", !0),
                ]),
                _: 1,
              }
            ),
            p(t) === p(n)
              ? (N(), D("span", Fu, Z(p(n)), 1))
              : (N(), D("span", Nu, Z(p(t)) + "/" + Z(p(n)), 1)),
          ]),
          b("div", Bu, [
            M(
              Ue,
              { name: "hide" },
              {
                default: Ke(() => [
                  p(r)
                    ? (N(),
                      D(
                        "span",
                        Ru,
                        " \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0437\u043D\u0430\u043A\u043E\u0432: "
                      ))
                    : oe("", !0),
                ]),
                _: 1,
              }
            ),
            zt(" " + Z(p(s)), 1),
          ]),
          b("div", Du, [
            M(
              Ue,
              { name: "hide" },
              {
                default: Ke(() => [
                  p(r)
                    ? (N(),
                      D(
                        "span",
                        Ku,
                        " \u0417\u043D\u0430\u043A\u043E\u0432 \u0432 \u043C\u0438\u043D\u0443\u0442\u0443: "
                      ))
                    : oe("", !0),
                ]),
                _: 1,
              }
            ),
            zt(" " + Z(p(d).charPerMin), 1),
          ]),
          b("div", Uu, [
            M(
              Ue,
              { name: "hide" },
              {
                default: Ke(() => [
                  p(r)
                    ? (N(), D("span", Hu, "\u0412\u0440\u0435\u043C\u044F:"))
                    : oe("", !0),
                ]),
                _: 1,
              }
            ),
            zt(" " + Z(p(d).elapsedTimeStr), 1),
          ]),
        ])
      );
    },
  };
const Vu = { class: "keyboard" },
  qu = ["id"],
  zu = {
    name: "Keyboard",
    props: { eventKeydown: {}, targetChar: String, lang: String },
    setup(e) {
      const t = e;
      Ge((H) => ({
        "5aa9fb34": p(i),
        f1dbc116: p(a),
        "2b3aa05c": p(l),
        "2341030e": p(K),
        "2dcea6f2": p(f),
        "938b4444": p($),
      }));
      const n = [
          {
            side: "left",
            chars: [
              "\u0451\u0439\u0444\u044F\u0446\u044B\u0447\u0443\u0432\u0441\u043A\u0430\u043C\u0435\u043F\u0438",
              "qazwsxedcrfvtgb",
            ],
            signs: ['!"\u2116;%:', "~!@#$%^"],
          },
          {
            side: "right",
            chars: [
              "\u043D\u0440\u0442\u0433\u043E\u044C\u0448\u043B\u0431\u0449\u0434\u044E\u0437\u0436\u0445\u044D\u044A",
              "yhnujmikolp",
            ],
            signs: ["?*()_+,/", '&*()_+{}|:"<>?'],
          },
          { code: "Backquote", value: ["\u0451", "~`"] },
          { code: "Digit1", value: ["!1", "!1"] },
          { code: "Digit2", value: ['"2', "@2"] },
          { code: "Digit3", value: ["\u21163", "#3"] },
          { code: "Digit4", value: [";4", "$4"] },
          { code: "Digit5", value: ["%5", "%5"] },
          { code: "Digit6", value: [":6", "^6"] },
          { code: "Digit7", value: ["?7", "&7"] },
          { code: "Digit8", value: ["*8", "*8"] },
          { code: "Digit9", value: ["(9", "(9"] },
          { code: "Digit", value: [")0", ")0"] },
          { code: "Minus", value: ["_-", "_-"] },
          { code: "Equal", value: ["+=", "+="] },
          { code: "Backspace", value: ["backspace", "backspace"] },
          { code: "Tab", value: ["tab", "tab"] },
          { code: "KeyQ", value: ["\u0439", "q"] },
          { code: "KeyW", value: ["\u0446", "w"] },
          { code: "KeyE", value: ["\u0443", "e"] },
          { code: "KeyR", value: ["\u043A", "r"] },
          { code: "KeyT", value: ["\u0435", "t"] },
          { code: "KeyY", value: ["\u043D", "y"] },
          { code: "KeyU", value: ["\u0433", "u"] },
          { code: "KeyI", value: ["\u0448", "i"] },
          { code: "KeyO", value: ["\u0449", "o"] },
          { code: "KeyP", value: ["\u0437", "p"] },
          { code: "BracketLeft", value: ["\u0445", "{["] },
          { code: "BracketRight", value: ["\u044A", "}]"] },
          { code: "Backslash", value: ["/\\", "|\\"] },
          { code: "CapsLock", value: ["caps", "caps"] },
          { code: "KeyA", value: ["\u0444", "a"] },
          { code: "KeyS", value: ["\u044B", "s"] },
          { code: "KeyD", value: ["\u0432", "d"] },
          { code: "KeyF", value: ["\u0430", "f"] },
          { code: "KeyG", value: ["\u043F", "g"] },
          { code: "KeyH", value: ["\u0440", "h"] },
          { code: "KeyJ", value: ["\u043E", "j"] },
          { code: "KeyK", value: ["\u043B", "k"] },
          { code: "KeyL", value: ["\u0434", "l"] },
          { code: "Semicolon", value: ["\u0436", ":;"] },
          { code: "Quote", value: ["\u044D", `"'`] },
          { code: "Enter", value: ["enter", "enter"] },
          { code: "ShiftLeft", value: ["shift", "shift"] },
          { code: "KeyZ", value: ["\u044F", "z"] },
          { code: "KeyX", value: ["\u0447", "x"] },
          { code: "KeyC", value: ["\u0441", "c"] },
          { code: "KeyV", value: ["\u043C", "v"] },
          { code: "KeyB", value: ["\u0438", "b"] },
          { code: "KeyN", value: ["\u0442", "n"] },
          { code: "KeyM", value: ["\u044C", "m"] },
          { code: "Comma", value: ["\u0431", "<,"] },
          { code: "Period", value: ["\u044E", ">."] },
          { code: "Slash", value: [",.", "?/"] },
          { code: "ShiftRight", value: ["shift", "shift"] },
          { code: "ControlLeft", value: ["ctrl", "ctrl"] },
          { code: "MetaLeft", value: ["win", "win"] },
          { code: "AltLeft", value: ["alt", "alt"] },
          { code: "Space", value: [" ", " "] },
          { code: "AltRight", value: ["alt", "alt"] },
          { code: "MetaRight", value: ["win", "win"] },
          { code: "ContextMenu", value: ["menu", "menu"] },
          { code: "ControlRight", value: ["ctrl", "ctrl"] },
        ],
        s = J(() => {
          if (t.lang === "russian") return 0;
          if (t.lang === "english") return 1;
        }),
        r = J(() => {
          const H = n[1].chars[s.value],
            W = n[1].signs[s.value];
          let P = d.fragmentArr[d.indexArr];
          return !!((H.includes(P.toLowerCase()) && wr(P)) || W.includes(P));
        }),
        o = J(() => {
          const H = n[0].chars[s.value],
            W = n[0].signs[s.value];
          let P = d.fragmentArr[d.indexArr];
          return !!((H.includes(P.toLowerCase()) && wr(P)) || W.includes(P));
        }),
        i = J(() => A.keyboard.background),
        l = J(() => A.keyboard.keyBackground),
        a = J(() => A.keyboard.keyColor),
        f = J(() => A.keyboard.shift),
        h = J(() => A.keyboard.pinky),
        _ = J(() => A.keyboard.ring),
        g = J(() => A.keyboard.middle),
        v = J(() => A.keyboard.lIndex),
        T = J(() => A.keyboard.thumbs),
        I = J(() => A.keyboard.rIndex),
        $ = J(() => (A.keyboard.underline ? "underline" : "none")),
        K = J(() => {
          let H = d.fragmentArr[d.indexArr];
          if (((H = H.toLowerCase()), t.lang === "russian")) {
            if (/[ё1!йфя0)зж.,\-_хэ=+ъ\\/]/.test(H)) return h.value;
            if (/[2"цыч9(щдю]/.test(H)) return _.value;
            if (/[3№увс8*шлб]/.test(H)) return g.value;
            if (/[4;кам5%епи6:]/.test(H)) return v.value;
            if (/[7?нртгоь]/.test(H)) return I.value;
          } else if (t.lang === "english") {
            if (/[`~1!qaz0)p;:/?\-_\[{'"=+\]}\\|]/.test(H)) return h.value;
            if (/[2@wsx9(ol.>]/.test(H)) return _.value;
            if (/[3#edc8*ik,<]/.test(H)) return g.value;
            if (/[4$rfv5%tgb6^]/.test(H)) return v.value;
            if (/[7&yhnujm]/.test(H)) return I.value;
          }
          if (/ /.test(H)) return T.value;
        });
      return (H, W) => (
        N(),
        D("div", Vu, [
          (N(!0),
          D(
            be,
            null,
            ao(
              n.slice(2),
              (P, X) => (
                N(),
                D(
                  "div",
                  {
                    key: X,
                    id: P.code.toLowerCase(),
                    class: De([
                      {
                        button:
                          P.value[p(s)].length === 1 ||
                          P.value[p(s)].length > 2,
                      },
                      {
                        "button-marked-shift":
                          (P.code === "ShiftLeft" && p(r)) ||
                          (P.code === "ShiftRight" && p(o)),
                      },
                      {
                        "button-marked-border":
                          P.value[p(s)] === e.targetChar.toLowerCase() ||
                          (P.value[p(s)].length === 2 &&
                            P.value[p(s)].includes(e.targetChar.toLowerCase())),
                      },
                      { "button-double": P.value[p(s)].length === 2 },
                    ]),
                  },
                  [
                    P.value[p(s)].length === 1 || P.value[p(s)].length > 2
                      ? (N(),
                        D(
                          "div",
                          {
                            key: 0,
                            class: De([
                              {
                                "button-marked-color":
                                  P.value[p(s)] === e.targetChar.toLowerCase(),
                              },
                            ]),
                          },
                          Z(P.value[p(s)]),
                          3
                        ))
                      : oe("", !0),
                    P.value[p(s)].length === 2
                      ? (N(),
                        D(
                          "div",
                          {
                            key: 1,
                            class: De([
                              {
                                "button-marked-color":
                                  P.value[p(s)][0] === e.targetChar,
                              },
                            ]),
                          },
                          Z(P.value[p(s)][0]),
                          3
                        ))
                      : oe("", !0),
                    P.value[p(s)].length === 2
                      ? (N(),
                        D(
                          "div",
                          {
                            key: 2,
                            class: De([
                              {
                                "button-marked-color":
                                  P.value[p(s)][1] === e.targetChar,
                              },
                            ]),
                          },
                          Z(P.value[p(s)][1]),
                          3
                        ))
                      : oe("", !0),
                  ],
                  10,
                  qu
                )
              )
            ),
            128
          )),
        ])
      );
    },
  };
const Ju = { class: "field" },
  Yu = { key: 0 },
  Zu = { key: 1 },
  Xu = { key: 2 },
  Qu = {
    name: "Field",
    setup(e) {
      Ge((W) => ({
        "68ef63b2": p(o),
        "60bc8b17": p(l),
        "76cc29fa": p(i),
        fcf45a0a: p(g),
        c95bca36: p(a),
        "2c520444": p(v),
        "57efaafc": p(f),
        "703a3c3e": p(T),
        "554de3ba": p(h),
        "1ea31b40": p(I),
        "88b54814": p(_),
        58284226: p($),
      }));
      const t = ut({
          keyDn: Object,
          keyUp: Object,
          keyValue: {},
          capsLock: !1,
        }),
        n = Q(() => d.statArr),
        s = Q(() => d.indexArr),
        r = Q(() => d.firstIndex),
        o = Q(() => A.field.background),
        i = Q(() => A.field.charBackground),
        l = Q(() => A.field.charColor),
        a = Q(() => A.field.charCorrectColor),
        f = Q(() => A.field.charWrongColor),
        h = Q(() => A.field.charRevisedColor),
        _ = Q(() => A.field.charSpecialColor),
        g = Q(() => A.field.caretBackground),
        v = Q(() =>
          A.shadow.charCorrect ? "drop-shadow(3px 2px 2px)" : "none"
        ),
        T = Q(() => (A.shadow.charWrong ? "drop-shadow(3px 2px 2px)" : "none")),
        I = Q(() =>
          A.shadow.charRevised ? "drop-shadow(3px 2px 2px)" : "none"
        ),
        $ = Q(() =>
          A.shadow.charSpecial ? "drop-shadow(3px 2px 2px)" : "none"
        ),
        K = Q(() => d.fragmentArr.slice(d.firstIndex, d.firstIndex + 200)),
        H = function (W) {
          if (fe.settings) return;
          (t.keyDn = W), (t.keyValue = W.key);
          const P = W.code;
          if (
            !(
              (d.indexArr === 0 && P === "Enter") ||
              (d.indexArr === 0 && P === "Backspace")
            )
          ) {
            if (d.indexArr !== 0 && P === "Enter") {
              (d.timerStop = performance.now()),
                (fe.work = !1),
                (fe.overallStatistics = !0);
              return;
            }
            if (Pa(P)) {
              W.preventDefault();
              return;
            }
            fe.bTimer ||
              ((fe.bTimer = !0),
              (d.timerStart = performance.now()),
              (d.stopwatch = setInterval(() => {
                (d.elapsedTime = performance.now() - d.timerStart),
                  (d.elapsedTimeStr = ja(d.elapsedTime));
                let X = Math.floor(
                  (d.numDialed * 60) / (Math.floor(d.elapsedTime) / 1e3)
                )
                  .toString()
                  .padStart(3, "0");
                X > 999 && (X = 999), (d.charPerMin = X);
              }, 10))),
              ac(W),
              P === "Backspace" && d.indexArr > 0
                ? (d.remainingChars++,
                  hs("back"),
                  "23".includes(d.statArr[d.indexArr]) &&
                    d.tempErrorFree > 0 &&
                    d.tempErrorFree--)
                : (A.main.speaker && Bn(Ps, A.main.volume),
                  d.remainingChars--,
                  hs());
          }
        };
      return (
        kt(() => {
          document.body.addEventListener("keydown", H);
        }),
        on(() => {
          document.body.removeEventListener("keydown", H),
            clearInterval(d.stopwatch),
            (d.charPerMin = 0);
        }),
        (W, P) => (
          N(),
          D(
            be,
            null,
            [
              p(A).visibility.currentStatistics
                ? (N(), It(Wu, { key: 0 }))
                : oe("", !0),
              b("div", Ju, [
                (N(!0),
                D(
                  be,
                  null,
                  ao(
                    p(K),
                    (X, de) => (
                      N(),
                      D(
                        "div",
                        {
                          key: de,
                          class: De([
                            "char",
                            [
                              { "char-caret": de === p(s) % 200 },
                              {
                                "char-correct":
                                  p(n)[de + p(r)] === "2" &&
                                  X !== " " &&
                                  de < p(s) % 200,
                              },
                              {
                                "char-revised":
                                  p(n)[de + p(r)] === "3" && de < p(s) % 200,
                              },
                              {
                                "char-wrong":
                                  p(n)[de + p(r)] === "4" && de < p(s) % 200,
                              },
                              {
                                "char-special-active":
                                  X !== "skip" &&
                                  p(n)[de + p(r)] === "1" &&
                                  de < p(s) % 200,
                              },
                              { "char-special-inactive": p(sn)(X) },
                            ],
                          ]),
                        },
                        [
                          X === "skip"
                            ? (N(), D("div", Yu, "\xA0"))
                            : X === "end"
                            ? (N(), D("div", Zu, "\xA0"))
                            : (N(), D("div", Xu, Z(X), 1)),
                        ],
                        2
                      )
                    )
                  ),
                  128
                )),
              ]),
              p(A).visibility.keyboard
                ? (N(),
                  It(
                    zu,
                    {
                      key: 1,
                      "event-keydown": t.keyDn,
                      "target-char": p(d).fragmentArr[p(d).indexArr],
                      lang: p(d).keyboardLayout,
                    },
                    null,
                    8,
                    ["event-keydown", "target-char", "lang"]
                  ))
                : oe("", !0),
            ],
            64
          )
        )
      );
    },
  };
const Gu = { key: 0 },
  ef = { key: 1 },
  tf = { key: 2, class: "stat-violet" },
  nf = { key: 3, class: "stat-violet" },
  sf = b("div", { class: "stat-line" }, null, -1),
  rf = b(
    "div",
    { class: "stat-first-column" },
    "\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0431\u043E\u0440\u0430:",
    -1
  ),
  of = { class: "stat-second-column" },
  lf = { class: "stat-ms" },
  af = b(
    "div",
    { class: "stat-first-column" },
    "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u043A\u043E\u0432 \u043E\u0442\u0440\u044B\u0432\u043A\u0430:",
    -1
  ),
  cf = { class: "stat-second-column" },
  uf = b(
    "div",
    { class: "stat-first-column" },
    "C\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043D\u0430\u0431\u043E\u0440\u0430, \u0437\u043D/\u043C\u0438\u043D:",
    -1
  ),
  ff = { class: "stat-second-column" },
  df = { key: 4, class: "stat-line" },
  hf = { key: 5 },
  pf = b(
    "div",
    { class: "stat-row-last" },
    [
      b(
        "div",
        { class: "stat-first-column" },
        "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:"
      ),
      b("div", { class: "stat-second-column" }),
    ],
    -1
  ),
  gf = { key: 0 },
  _f = b(
    "div",
    { class: "stat-first-column" },
    "- \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0445 \u0437\u043D\u0430\u043A\u043E\u0432:",
    -1
  ),
  mf = { class: "stat-second-column" },
  bf = { class: "stat-green" },
  vf = { key: 1 },
  yf = b(
    "div",
    { class: "stat-first-column" },
    "- \u043E\u0448\u0438\u0431\u043E\u043A:",
    -1
  ),
  kf = { class: "stat-second-column" },
  xf = { class: "stat-red" },
  wf = b("div", { class: "stat-line" }, null, -1),
  Cf = { class: "stat-row-last" },
  Sf = b(
    "div",
    { class: "stat-first-column" },
    " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u043A\u043E\u0432 \u043F\u043E\u0434\u0440\u044F\u0434 \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043A\u0438: ",
    -1
  ),
  Af = { class: "stat-second-column" },
  Ef = { key: 6 },
  Tf = b("div", { class: "stat-line" }, null, -1),
  $f = b(
    "div",
    { class: "stat-row-last" },
    "\u041E\u0442\u0440\u044B\u0432\u043E\u043A \u043D\u0430\u0431\u0440\u0430\u043D \u0431\u0435\u0437 \u0435\u0434\u0438\u043D\u043E\u0439 \u043E\u0448\u0438\u0431\u043A\u0438 \u{1F389}",
    -1
  ),
  Mf = [Tf, $f],
  Of = {
    name: "OverallStatistics",
    setup(e) {
      Ge((_) => ({
        "657fddd6": p(i),
        "33a58444": p(a),
        "42d740be": p(f),
        "288fff52": p(l),
      }));
      const t = J(
          () =>
            `(${Jn((d.numCorrect * 100) / (d.numCorrect + d.numErrors), 2)}%)`
        ),
        n = J(
          () =>
            `(${Jn((d.numErrors * 100) / (d.numCorrect + d.numErrors), 2)}%)`
        ),
        s = J(() => Jn((d.numDialed * 60) / (d.elapsedTime / 1e3))),
        r = typeof d.currentBook == "object",
        o = d.currentBook,
        i = J(() => A.overallStatistics.title),
        l = J(() => A.overallStatistics.ms),
        a = J(() => A.overallStatistics.correct),
        f = J(() => A.overallStatistics.wrong);
      function h(_) {
        _.key === "Tab"
          ? _.preventDefault()
          : _.key === "Enter" &&
            ((fe.overallStatistics = !1),
            document.body.querySelector(d.focusElement).focus());
      }
      return (
        kt(() => statistics.focus()),
        on(() => {
          (fe.bTimer = !1),
            (d.tempErrorFree = 0),
            (d.ErrorFree = 0),
            (d.elapsedTime = 0),
            (d.elapsedTimeStr = "00:00.00"),
            (d.numDialed = 0),
            (d.numCorrect = 0),
            (d.numErrors = 0),
            (d.currentBook = 0);
        }),
        (_, g) => (
          N(),
          D(
            be,
            null,
            [
              b(
                "div",
                {
                  class: "stat-container",
                  id: "statistics",
                  tabindex: "1",
                  onKeydown: h,
                },
                [
                  r
                    ? (N(),
                      D(
                        "h4",
                        Gu,
                        "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043D\u0430\u0431\u043E\u0440\u0430 \u043E\u0442\u0440\u044B\u0432\u043A\u0430 \u0438\u0437 \u043A\u043D\u0438\u0433\u0438:"
                      ))
                    : (N(),
                      D(
                        "h4",
                        ef,
                        "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043D\u0430\u0431\u043E\u0440\u0430 \u0442\u0435\u043A\u0441\u0442\u0430 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0435\u043D\u0430"
                      )),
                  r
                    ? (N(), D("h4", tf, "\xAB" + Z(p(o).title) + "\xBB", 1))
                    : oe("", !0),
                  r ? (N(), D("h4", nf, Z(p(o).author), 1)) : oe("", !0),
                  sf,
                  rf,
                  b("div", of, [
                    b("div", null, Z(p(d).elapsedTimeStr.split(".")[0]), 1),
                    b("div", lf, "." + Z(p(d).elapsedTimeStr.split(".")[1]), 1),
                  ]),
                  af,
                  b("div", cf, Z(p(d).numDialed), 1),
                  uf,
                  b("div", ff, Z(p(s)), 1),
                  p(d).numErrors !== 0 ? (N(), D("div", df)) : oe("", !0),
                  (p(d).numCorrect !== 0 &&
                    p(d).numCorrect !== p(d).numDialed) ||
                  p(d).numErrors !== 0
                    ? (N(),
                      D("div", hf, [
                        pf,
                        p(d).numCorrect !== 0
                          ? (N(),
                            D("div", gf, [
                              _f,
                              b("div", mf, [
                                b("div", null, Z(p(d).numCorrect), 1),
                                b("div", bf, Z(p(t)), 1),
                              ]),
                            ]))
                          : oe("", !0),
                        p(d).numErrors !== 0
                          ? (N(),
                            D("div", vf, [
                              yf,
                              b("div", kf, [
                                b("div", null, Z(p(d).numErrors), 1),
                                b("div", xf, Z(p(n)), 1),
                              ]),
                            ]))
                          : oe("", !0),
                        wf,
                        b("div", Cf, [Sf, b("div", Af, Z(p(d).ErrorFree), 1)]),
                      ]))
                    : (N(), D("div", Ef, Mf)),
                ],
                32
              ),
              p(fe).overallStatistics
                ? (N(),
                  D("div", {
                    key: 0,
                    onClick:
                      g[0] ||
                      (g[0] = Ca(
                        (v) => (p(fe).overallStatistics = !1),
                        ["left"]
                      )),
                    class: "stat-overlay",
                  }))
                : oe("", !0),
            ],
            64
          )
        )
      );
    },
  };
const If = b("div", { id: "background" }, null, -1),
  Pf = {
    name: "App",
    setup(e) {
      Ge((s) => ({ "66a9a210": p(n) }));
      function t(s) {
        return new URL(
          {
            "/src/assets/backgrounds/normal/altai-mountains.jpg": Oo,
            "/src/assets/backgrounds/normal/bird.jpg": Io,
            "/src/assets/backgrounds/normal/bug.jpg": Po,
            "/src/assets/backgrounds/normal/dombay.jpg": jo,
            "/src/assets/backgrounds/normal/kamchatka.jpg": Lo,
            "/src/assets/backgrounds/normal/krasnaya-polyana.jpg": Fo,
            "/src/assets/backgrounds/normal/sea-lion.jpg": No,
            "/src/assets/backgrounds/normal/winter-beach.jpg": Bo,
          }[`/src/assets/backgrounds/normal/${s}.jpg`],
          self.location
        ).href;
      }
      const n = Q(() => `url(${t(Be[A.main.background].name)})`);
      return (
        kt(() => {
          if (localStorage.main) {
            const s = JSON.parse(localStorage.main);
            d.backgroundPreview = s.background;
          }
          for (const s in A)
            if (localStorage[s]) {
              const r = JSON.parse(localStorage[s]);
              for (const o in r) A[s][o] = r[o];
            }
        }),
        (s, r) => (
          N(),
          D(
            be,
            null,
            [
              If,
              M(pc),
              p(fe).settings ? (N(), It(Iu, { key: 0 })) : oe("", !0),
              p(fe).work ? (N(), It(Qu, { key: 1 })) : oe("", !0),
              p(fe).overallStatistics ? (N(), It(Of, { key: 2 })) : oe("", !0),
            ],
            64
          )
        )
      );
    },
  };
function jf(e) {
  e.directive("click-outside", {
    beforeMount(t, n) {
      (t.clickOutsideEvent = (s) => {
        s.stopPropagation(),
          t === s.target || t.contains(s.target) || n.value(s, t);
      }),
        window.requestAnimationFrame(() => {
          document.addEventListener("click", t.clickOutsideEvent);
        });
    },
    unmounted(t) {
      document.removeEventListener("click", t.clickOutsideEvent);
    },
  });
}
Ea(Pf).use(jf).mount("#app");
//# sourceMappingURL=index.f0ca95c6.js.map
