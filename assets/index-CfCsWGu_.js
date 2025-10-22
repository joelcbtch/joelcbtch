const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/MainLayout-By9sxngu-EiepPFdg.js',
      'assets/QBtn-DYb13IGb-DVwM0Orh.js',
      'assets/render-DAqPa2vd-D0yqDhMx.js',
      'assets/IndexPage-pdtjnnYV-DsEXDLUz.js',
      'assets/ErrorNotFound-DRUjJDV3-x8WKzFY2.js',
      'assets/MainLayout-DunN4qTH.js',
      'assets/QBtn-Cy2OY3F3.js',
      'assets/render-Dk1QbAdB.js',
      'assets/IndexPage-CbNSDBIq.js',
      'assets/IndexPage-DTRAFKGh.css',
      'assets/ErrorNotFound-BgBGnwSB.js',
    ]),
) => i.map((i) => d[i]);
const ip = (function () {
    const t = typeof document < 'u' && document.createElement('link').relList;
    return t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
  })(),
  lp = function (e) {
    return '/' + e;
  },
  kl = {},
  Yn = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      let i = function (f) {
        return Promise.all(
          f.map((c) =>
            Promise.resolve(c).then(
              (u) => ({ status: 'fulfilled', value: u }),
              (u) => ({ status: 'rejected', reason: u }),
            ),
          ),
        );
      };
      document.getElementsByTagName('link');
      const a = document.querySelector('meta[property=csp-nonce]'),
        l = a?.nonce || a?.getAttribute('nonce');
      s = i(
        n.map((f) => {
          if (((f = lp(f)), f in kl)) return;
          kl[f] = !0;
          const c = f.endsWith('.css'),
            u = c ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${f}"]${u}`)) return;
          const h = document.createElement('link');
          if (
            ((h.rel = c ? 'stylesheet' : ip),
            c || (h.as = 'script'),
            (h.crossOrigin = ''),
            (h.href = f),
            l && h.setAttribute('nonce', l),
            document.head.appendChild(h),
            c)
          )
            return new Promise((g, x) => {
              h.addEventListener('load', g),
                h.addEventListener('error', () => x(new Error(`Unable to preload CSS for ${f}`)));
            });
        }),
      );
    }
    function o(i) {
      const a = new Event('vite:preloadError', { cancelable: !0 });
      if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented)) throw i;
    }
    return s.then((i) => {
      for (const a of i || []) a.status === 'rejected' && o(a.reason);
      return t().catch(o);
    });
  },
  ys = (
    e,
    t = ys,
    n = t.f ||
      (t.f = [
        'assets/MainLayout-By9sxngu.js',
        'assets/QBtn-DYb13IGb.js',
        'assets/render-DAqPa2vd.js',
        'assets/IndexPage-pdtjnnYV.js',
        'assets/IndexPage-DTRAFKGh.css',
        'assets/ErrorNotFound-DRUjJDV3.js',
      ]),
  ) => e.map((r) => n[r]);
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Hi(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const ge = {},
  Qn = [],
  At = () => {},
  ap = () => !1,
  Vs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Bi = (e) => e.startsWith('onUpdate:'),
  Te = Object.assign,
  Ui = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  cp = Object.prototype.hasOwnProperty,
  fe = (e, t) => cp.call(e, t),
  X = Array.isArray,
  Xn = (e) => Ws(e) === '[object Map]',
  qc = (e) => Ws(e) === '[object Set]',
  te = (e) => typeof e == 'function',
  Ce = (e) => typeof e == 'string',
  _n = (e) => typeof e == 'symbol',
  we = (e) => e !== null && typeof e == 'object',
  Vc = (e) => (we(e) || te(e)) && te(e.then) && te(e.catch),
  Wc = Object.prototype.toString,
  Ws = (e) => Wc.call(e),
  up = (e) => Ws(e).slice(8, -1),
  zc = (e) => Ws(e) === '[object Object]',
  qi = (e) => Ce(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Cr = Hi(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  zs = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  fp = /-(\w)/g,
  pt = zs((e) => e.replace(fp, (t, n) => (n ? n.toUpperCase() : ''))),
  dp = /\B([A-Z])/g,
  Un = zs((e) => e.replace(dp, '-$1').toLowerCase()),
  Ks = zs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  So = zs((e) => (e ? `on${Ks(e)}` : '')),
  hn = (e, t) => !Object.is(e, t),
  Eo = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Kc = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n });
  },
  pp = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  hp = (e) => {
    const t = Ce(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Rl;
const Gs = () =>
  Rl ||
  (Rl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function Vi(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Ce(r) ? _p(r) : Vi(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (Ce(e) || we(e)) return e;
}
const gp = /;(?![^(]*\))/g,
  mp = /:([^]+)/,
  vp = /\/\*[^]*?\*\//g;
function _p(e) {
  const t = {};
  return (
    e
      .replace(vp, '')
      .split(gp)
      .forEach((n) => {
        if (n) {
          const r = n.split(mp);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Wi(e) {
  let t = '';
  if (Ce(e)) t = e;
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const r = Wi(e[n]);
      r && (t += r + ' ');
    }
  else if (we(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const yp = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  bp = Hi(yp);
function Gc(e) {
  return !!e || e === '';
}
const Jc = (e) => !!(e && e.__v_isRef === !0),
  wp = (e) =>
    Ce(e)
      ? e
      : e == null
        ? ''
        : X(e) || (we(e) && (e.toString === Wc || !te(e.toString)))
          ? Jc(e)
            ? wp(e.value)
            : JSON.stringify(e, Yc, 2)
          : String(e),
  Yc = (e, t) =>
    Jc(t)
      ? Yc(e, t.value)
      : Xn(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], o) => ((n[Co(r, o) + ' =>'] = s), n),
              {},
            ),
          }
        : qc(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Co(n)) }
          : _n(t)
            ? Co(t)
            : we(t) && !X(t) && !zc(t)
              ? String(t)
              : t,
  Co = (e, t = '') => {
    var n;
    return _n(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let rt;
class xp {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = rt),
      !t && rt && (this.index = (rt.scopes || (rt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = rt;
      try {
        return (rt = this), t();
      } finally {
        rt = n;
      }
    }
  }
  on() {
    rt = this;
  }
  off() {
    rt = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Sp() {
  return rt;
}
let ve;
const Po = new WeakSet();
class Qc {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      rt && rt.active && rt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), Po.has(this) && (Po.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Zc(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Tl(this), eu(this);
    const t = ve,
      n = vt;
    (ve = this), (vt = !0);
    try {
      return this.fn();
    } finally {
      tu(this), (ve = t), (vt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Gi(t);
      (this.deps = this.depsTail = void 0),
        Tl(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64 ? Po.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    ii(this) && this.run();
  }
  get dirty() {
    return ii(this);
  }
}
let Xc = 0,
  Pr,
  kr;
function Zc(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = kr), (kr = e);
    return;
  }
  (e.next = Pr), (Pr = e);
}
function zi() {
  Xc++;
}
function Ki() {
  if (--Xc > 0) return;
  if (kr) {
    let t = kr;
    for (kr = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Pr; ) {
    let t = Pr;
    for (Pr = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function eu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t);
}
function tu(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Gi(r), Ep(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function ii(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (nu(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function nu(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Br)) return;
  e.globalVersion = Br;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !ii(e))) {
    e.flags &= -3;
    return;
  }
  const n = ve,
    r = vt;
  (ve = e), (vt = !0);
  try {
    eu(e);
    const s = e.fn(e._value);
    (t.version === 0 || hn(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (ve = n), (vt = r), tu(e), (e.flags &= -3);
  }
}
function Gi(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Gi(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ep(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0));
}
let vt = !0;
const ru = [];
function yn() {
  ru.push(vt), (vt = !1);
}
function bn() {
  const e = ru.pop();
  vt = e === void 0 ? !0 : e;
}
function Tl(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = ve;
    ve = void 0;
    try {
      t();
    } finally {
      ve = n;
    }
  }
}
let Br = 0;
class Cp {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
  }
}
class Ji {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!ve || !vt || ve === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ve)
      (n = this.activeLink = new Cp(ve, this)),
        ve.deps
          ? ((n.prevDep = ve.depsTail), (ve.depsTail.nextDep = n), (ve.depsTail = n))
          : (ve.deps = ve.depsTail = n),
        su(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = ve.depsTail),
        (n.nextDep = void 0),
        (ve.depsTail.nextDep = n),
        (ve.depsTail = n),
        ve.deps === n && (ve.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Br++, this.notify(t);
  }
  notify(t) {
    zi();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ki();
    }
  }
}
function su(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) su(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const li = new WeakMap(),
  jn = Symbol(''),
  ai = Symbol(''),
  Ur = Symbol('');
function $e(e, t, n) {
  if (vt && ve) {
    let r = li.get(e);
    r || li.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new Ji())), (s.map = r), (s.key = n)), s.track();
  }
}
function Vt(e, t, n, r, s, o) {
  const i = li.get(e);
  if (!i) {
    Br++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((zi(), t === 'clear')) i.forEach(a);
  else {
    const l = X(e),
      f = l && qi(n);
    if (l && n === 'length') {
      const c = Number(r);
      i.forEach((u, h) => {
        (h === 'length' || h === Ur || (!_n(h) && h >= c)) && a(u);
      });
    } else
      switch (((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Ur)), t)) {
        case 'add':
          l ? f && a(i.get('length')) : (a(i.get(jn)), Xn(e) && a(i.get(ai)));
          break;
        case 'delete':
          l || (a(i.get(jn)), Xn(e) && a(i.get(ai)));
          break;
        case 'set':
          Xn(e) && a(i.get(jn));
          break;
      }
  }
  Ki();
}
function Vn(e) {
  const t = le(e);
  return t === e ? t : ($e(t, 'iterate', Ur), ft(e) ? t : t.map(De));
}
function Js(e) {
  return $e((e = le(e)), 'iterate', Ur), e;
}
const Pp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ko(this, Symbol.iterator, De);
  },
  concat(...e) {
    return Vn(this).concat(...e.map((t) => (X(t) ? Vn(t) : t)));
  },
  entries() {
    return ko(this, 'entries', (e) => ((e[1] = De(e[1])), e));
  },
  every(e, t) {
    return jt(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return jt(this, 'filter', e, t, (n) => n.map(De), arguments);
  },
  find(e, t) {
    return jt(this, 'find', e, t, De, arguments);
  },
  findIndex(e, t) {
    return jt(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return jt(this, 'findLast', e, t, De, arguments);
  },
  findLastIndex(e, t) {
    return jt(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return jt(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return Ro(this, 'includes', e);
  },
  indexOf(...e) {
    return Ro(this, 'indexOf', e);
  },
  join(e) {
    return Vn(this).join(e);
  },
  lastIndexOf(...e) {
    return Ro(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return jt(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return vr(this, 'pop');
  },
  push(...e) {
    return vr(this, 'push', e);
  },
  reduce(e, ...t) {
    return Ol(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return Ol(this, 'reduceRight', e, t);
  },
  shift() {
    return vr(this, 'shift');
  },
  some(e, t) {
    return jt(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return vr(this, 'splice', e);
  },
  toReversed() {
    return Vn(this).toReversed();
  },
  toSorted(e) {
    return Vn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Vn(this).toSpliced(...e);
  },
  unshift(...e) {
    return vr(this, 'unshift', e);
  },
  values() {
    return ko(this, 'values', De);
  },
};
function ko(e, t, n) {
  const r = Js(e),
    s = r[t]();
  return (
    r !== e &&
      !ft(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const kp = Array.prototype;
function jt(e, t, n, r, s, o) {
  const i = Js(e),
    a = i !== e && !ft(e),
    l = i[t];
  if (l !== kp[t]) {
    const u = l.apply(e, o);
    return a ? De(u) : u;
  }
  let f = n;
  i !== e &&
    (a
      ? (f = function (u, h) {
          return n.call(this, De(u), h, e);
        })
      : n.length > 2 &&
        (f = function (u, h) {
          return n.call(this, u, h, e);
        }));
  const c = l.call(i, f, r);
  return a && s ? s(c) : c;
}
function Ol(e, t, n, r) {
  const s = Js(e);
  let o = n;
  return (
    s !== e &&
      (ft(e)
        ? n.length > 3 &&
          (o = function (i, a, l) {
            return n.call(this, i, a, l, e);
          })
        : (o = function (i, a, l) {
            return n.call(this, i, De(a), l, e);
          })),
    s[t](o, ...r)
  );
}
function Ro(e, t, n) {
  const r = le(e);
  $e(r, 'iterate', Ur);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Xi(n[0]) ? ((n[0] = le(n[0])), r[t](...n)) : s;
}
function vr(e, t, n = []) {
  yn(), zi();
  const r = le(e)[t].apply(e, n);
  return Ki(), bn(), r;
}
const Rp = Hi('__proto__,__v_isRef,__isVue'),
  ou = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(_n),
  );
function Tp(e) {
  _n(e) || (e = String(e));
  const t = le(this);
  return $e(t, 'has', e), t.hasOwnProperty(e);
}
class iu {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === '__v_skip') return t.__v_skip;
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === '__v_isReactive') return !s;
    if (n === '__v_isReadonly') return s;
    if (n === '__v_isShallow') return o;
    if (n === '__v_raw')
      return r === (s ? (o ? Np : uu) : o ? cu : au).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = X(t);
    if (!s) {
      let l;
      if (i && (l = Pp[n])) return l;
      if (n === 'hasOwnProperty') return Tp;
    }
    const a = Reflect.get(t, n, Be(t) ? t : r);
    return (_n(n) ? ou.has(n) : Rp(n)) || (s || $e(t, 'get', n), o)
      ? a
      : Be(a)
        ? i && qi(n)
          ? a
          : a.value
        : we(a)
          ? s
            ? du(a)
            : gr(a)
          : a;
  }
}
class lu extends iu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Dn(o);
      if ((!ft(r) && !Dn(r) && ((o = le(o)), (r = le(r))), !X(t) && Be(o) && !Be(r)))
        return l ? !1 : ((o.value = r), !0);
    }
    const i = X(t) && qi(n) ? Number(n) < t.length : fe(t, n),
      a = Reflect.set(t, n, r, Be(t) ? t : s);
    return t === le(s) && (i ? hn(r, o) && Vt(t, 'set', n, r) : Vt(t, 'add', n, r)), a;
  }
  deleteProperty(t, n) {
    const r = fe(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Vt(t, 'delete', n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!_n(n) || !ou.has(n)) && $e(t, 'has', n), r;
  }
  ownKeys(t) {
    return $e(t, 'iterate', X(t) ? 'length' : jn), Reflect.ownKeys(t);
  }
}
class Op extends iu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ap = new lu(),
  Lp = new Op(),
  Mp = new lu(!0),
  ci = (e) => e,
  fs = (e) => Reflect.getPrototypeOf(e);
function Fp(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = le(s),
      i = Xn(o),
      a = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      f = s[e](...r),
      c = n ? ci : t ? ui : De;
    return (
      !t && $e(o, 'iterate', l ? ai : jn),
      {
        next() {
          const { value: u, done: h } = f.next();
          return h ? { value: u, done: h } : { value: a ? [c(u[0]), c(u[1])] : c(u), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ds(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function Ip(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw,
        o = le(s),
        i = le(r);
      e || (hn(r, i) && $e(o, 'get', r), $e(o, 'get', i));
      const { has: a } = fs(o),
        l = t ? ci : e ? ui : De;
      if (a.call(o, r)) return l(s.get(r));
      if (a.call(o, i)) return l(s.get(i));
      s !== o && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && $e(le(r), 'iterate', jn), Reflect.get(r, 'size', r);
    },
    has(r) {
      const s = this.__v_raw,
        o = le(s),
        i = le(r);
      return (
        e || (hn(r, i) && $e(o, 'has', r), $e(o, 'has', i)),
        r === i ? s.has(r) : s.has(r) || s.has(i)
      );
    },
    forEach(r, s) {
      const o = this,
        i = o.__v_raw,
        a = le(i),
        l = t ? ci : e ? ui : De;
      return !e && $e(a, 'iterate', jn), i.forEach((f, c) => r.call(s, l(f), l(c), o));
    },
  };
  return (
    Te(
      n,
      e
        ? { add: ds('add'), set: ds('set'), delete: ds('delete'), clear: ds('clear') }
        : {
            add(r) {
              !t && !ft(r) && !Dn(r) && (r = le(r));
              const s = le(this);
              return fs(s).has.call(s, r) || (s.add(r), Vt(s, 'add', r, r)), this;
            },
            set(r, s) {
              !t && !ft(s) && !Dn(s) && (s = le(s));
              const o = le(this),
                { has: i, get: a } = fs(o);
              let l = i.call(o, r);
              l || ((r = le(r)), (l = i.call(o, r)));
              const f = a.call(o, r);
              return o.set(r, s), l ? hn(s, f) && Vt(o, 'set', r, s) : Vt(o, 'add', r, s), this;
            },
            delete(r) {
              const s = le(this),
                { has: o, get: i } = fs(s);
              let a = o.call(s, r);
              a || ((r = le(r)), (a = o.call(s, r))), i && i.call(s, r);
              const l = s.delete(r);
              return a && Vt(s, 'delete', r, void 0), l;
            },
            clear() {
              const r = le(this),
                s = r.size !== 0,
                o = r.clear();
              return s && Vt(r, 'clear', void 0, void 0), o;
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = Fp(r, e, t);
    }),
    n
  );
}
function Yi(e, t) {
  const n = Ip(e, t);
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
          ? r
          : Reflect.get(fe(n, s) && s in r ? n : r, s, o);
}
const jp = { get: Yi(!1, !1) },
  $p = { get: Yi(!1, !0) },
  Dp = { get: Yi(!0, !1) },
  au = new WeakMap(),
  cu = new WeakMap(),
  uu = new WeakMap(),
  Np = new WeakMap();
function Hp(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Bp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hp(up(e));
}
function gr(e) {
  return Dn(e) ? e : Qi(e, !1, Ap, jp, au);
}
function fu(e) {
  return Qi(e, !1, Mp, $p, cu);
}
function du(e) {
  return Qi(e, !0, Lp, Dp, uu);
}
function Qi(e, t, n, r, s) {
  if (!we(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Bp(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function Zn(e) {
  return Dn(e) ? Zn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Dn(e) {
  return !!(e && e.__v_isReadonly);
}
function ft(e) {
  return !!(e && e.__v_isShallow);
}
function Xi(e) {
  return e ? !!e.__v_raw : !1;
}
function le(e) {
  const t = e && e.__v_raw;
  return t ? le(t) : e;
}
function Ys(e) {
  return !fe(e, '__v_skip') && Object.isExtensible(e) && Kc(e, '__v_skip', !0), e;
}
const De = (e) => (we(e) ? gr(e) : e),
  ui = (e) => (we(e) ? du(e) : e);
function Be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function pu(e) {
  return hu(e, !1);
}
function Up(e) {
  return hu(e, !0);
}
function hu(e, t) {
  return Be(e) ? e : new qp(e, t);
}
class qp {
  constructor(t, n) {
    (this.dep = new Ji()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : le(t)),
      (this._value = n ? t : De(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || ft(t) || Dn(t);
    (t = r ? t : le(t)),
      hn(t, n) && ((this._rawValue = t), (this._value = r ? t : De(t)), this.dep.trigger());
  }
}
function er(e) {
  return Be(e) ? e.value : e;
}
const Vp = {
  get: (e, t, n) => (t === '__v_raw' ? e : er(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return Be(s) && !Be(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function gu(e) {
  return Zn(e) ? e : new Proxy(e, Vp);
}
class Wp {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Ji(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Br - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ve !== this)) return Zc(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return nu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function zp(e, t, n = !1) {
  let r, s;
  return te(e) ? (r = e) : ((r = e.get), (s = e.set)), new Wp(r, s, n);
}
const ps = {},
  Rs = new WeakMap();
let Ln;
function Kp(e, t = !1, n = Ln) {
  if (n) {
    let r = Rs.get(n);
    r || Rs.set(n, (r = [])), r.push(e);
  }
}
function Gp(e, t, n = ge) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n,
    f = (O) => (s ? O : ft(O) || s === !1 || s === 0 ? Wt(O, 1) : Wt(O));
  let c,
    u,
    h,
    g,
    x = !1,
    R = !1;
  if (
    (Be(e)
      ? ((u = () => e.value), (x = ft(e)))
      : Zn(e)
        ? ((u = () => f(e)), (x = !0))
        : X(e)
          ? ((R = !0),
            (x = e.some((O) => Zn(O) || ft(O))),
            (u = () =>
              e.map((O) => {
                if (Be(O)) return O.value;
                if (Zn(O)) return f(O);
                if (te(O)) return l ? l(O, 2) : O();
              })))
          : te(e)
            ? t
              ? (u = l ? () => l(e, 2) : e)
              : (u = () => {
                  if (h) {
                    yn();
                    try {
                      h();
                    } finally {
                      bn();
                    }
                  }
                  const O = Ln;
                  Ln = c;
                  try {
                    return l ? l(e, 3, [g]) : e(g);
                  } finally {
                    Ln = O;
                  }
                })
            : (u = At),
    t && s)
  ) {
    const O = u,
      U = s === !0 ? 1 / 0 : s;
    u = () => Wt(O(), U);
  }
  const N = Sp(),
    $ = () => {
      c.stop(), N && N.active && Ui(N.effects, c);
    };
  if (o && t) {
    const O = t;
    t = (...U) => {
      O(...U), $();
    };
  }
  let M = R ? new Array(e.length).fill(ps) : ps;
  const j = (O) => {
    if (!(!(c.flags & 1) || (!c.dirty && !O)))
      if (t) {
        const U = c.run();
        if (s || x || (R ? U.some((J, K) => hn(J, M[K])) : hn(U, M))) {
          h && h();
          const J = Ln;
          Ln = c;
          try {
            const K = [U, M === ps ? void 0 : R && M[0] === ps ? [] : M, g];
            l ? l(t, 3, K) : t(...K), (M = U);
          } finally {
            Ln = J;
          }
        }
      } else c.run();
  };
  return (
    a && a(j),
    (c = new Qc(u)),
    (c.scheduler = i ? () => i(j, !1) : j),
    (g = (O) => Kp(O, !1, c)),
    (h = c.onStop =
      () => {
        const O = Rs.get(c);
        if (O) {
          if (l) l(O, 4);
          else for (const U of O) U();
          Rs.delete(c);
        }
      }),
    t ? (r ? j(!0) : (M = c.run())) : i ? i(j.bind(null, !0), !0) : c.run(),
    ($.pause = c.pause.bind(c)),
    ($.resume = c.resume.bind(c)),
    ($.stop = $),
    $
  );
}
function Wt(e, t = 1 / 0, n) {
  if (t <= 0 || !we(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, Be(e))) Wt(e.value, t, n);
  else if (X(e)) for (let r = 0; r < e.length; r++) Wt(e[r], t, n);
  else if (qc(e) || Xn(e))
    e.forEach((r) => {
      Wt(r, t, n);
    });
  else if (zc(e)) {
    for (const r in e) Wt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Wt(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ls(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Qs(s, t, n);
  }
}
function yt(e, t, n, r) {
  if (te(e)) {
    const s = ls(e, t, n, r);
    return (
      s &&
        Vc(s) &&
        s.catch((o) => {
          Qs(o, t, n);
        }),
      s
    );
  }
  if (X(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(yt(e[o], t, n, r));
    return s;
  }
}
function Qs(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || ge;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, l, f) === !1) return;
      }
      a = a.parent;
    }
    if (o) {
      yn(), ls(o, null, 10, [e, l, f]), bn();
      return;
    }
  }
  Jp(e, n, s, r, i);
}
function Jp(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const ze = [];
let Ct = -1;
const tr = [];
let rn = null,
  zn = 0;
const mu = Promise.resolve();
let Ts = null;
function vu(e) {
  const t = Ts || mu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yp(e) {
  let t = Ct + 1,
    n = ze.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = ze[r],
      o = qr(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Zi(e) {
  if (!(e.flags & 1)) {
    const t = qr(e),
      n = ze[ze.length - 1];
    !n || (!(e.flags & 2) && t >= qr(n)) ? ze.push(e) : ze.splice(Yp(t), 0, e),
      (e.flags |= 1),
      _u();
  }
}
function _u() {
  Ts || (Ts = mu.then(bu));
}
function Qp(e) {
  X(e)
    ? tr.push(...e)
    : rn && e.id === -1
      ? rn.splice(zn + 1, 0, e)
      : e.flags & 1 || (tr.push(e), (e.flags |= 1)),
    _u();
}
function Al(e, t, n = Ct + 1) {
  for (; n < ze.length; n++) {
    const r = ze[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      ze.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function yu(e) {
  if (tr.length) {
    const t = [...new Set(tr)].sort((n, r) => qr(n) - qr(r));
    if (((tr.length = 0), rn)) {
      rn.push(...t);
      return;
    }
    for (rn = t, zn = 0; zn < rn.length; zn++) {
      const n = rn[zn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (rn = null), (zn = 0);
  }
}
const qr = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function bu(e) {
  try {
    for (Ct = 0; Ct < ze.length; Ct++) {
      const t = ze[Ct];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), ls(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ct < ze.length; Ct++) {
      const t = ze[Ct];
      t && (t.flags &= -2);
    }
    (Ct = -1), (ze.length = 0), yu(), (Ts = null), (ze.length || tr.length) && bu();
  }
}
let Ye = null,
  wu = null;
function Os(e) {
  const t = Ye;
  return (Ye = e), (wu = (e && e.type.__scopeId) || null), t;
}
function Xp(e, t = Ye, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Ul(-1);
    const o = Os(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Os(o), r._d && Ul(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function R0(e, t) {
  if (Ye === null) return e;
  const n = ro(Ye),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = ge] = t[s];
    o &&
      (te(o) && (o = { mounted: o, updated: o }),
      o.deep && Wt(i),
      r.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function En(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (yn(), yt(l, n, 8, [e.el, a, e, t]), bn());
  }
}
const Zp = Symbol('_vte'),
  xu = (e) => e.__isTeleport,
  sn = Symbol('_leaveCb'),
  hs = Symbol('_enterCb');
function eh() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    Ou(() => {
      e.isMounted = !0;
    }),
    Au(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const ct = [Function, Array],
  Su = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ct,
    onEnter: ct,
    onAfterEnter: ct,
    onEnterCancelled: ct,
    onBeforeLeave: ct,
    onLeave: ct,
    onAfterLeave: ct,
    onLeaveCancelled: ct,
    onBeforeAppear: ct,
    onAppear: ct,
    onAfterAppear: ct,
    onAppearCancelled: ct,
  },
  Eu = (e) => {
    const t = e.subTree;
    return t.component ? Eu(t.component) : t;
  },
  th = {
    name: 'BaseTransition',
    props: Su,
    setup(e, { slots: t }) {
      const n = Zh(),
        r = eh();
      return () => {
        const s = t.default && ku(t.default(), !0);
        if (!s || !s.length) return;
        const o = Cu(s),
          i = le(e),
          { mode: a } = i;
        if (r.isLeaving) return To(o);
        const l = Ll(o);
        if (!l) return To(o);
        let f = fi(l, i, r, n, (u) => (f = u));
        l.type !== Ge && Vr(l, f);
        let c = n.subTree && Ll(n.subTree);
        if (c && c.type !== Ge && !Fn(l, c) && Eu(n).type !== Ge) {
          let u = fi(c, i, r, n);
          if ((Vr(c, u), a === 'out-in' && l.type !== Ge))
            return (
              (r.isLeaving = !0),
              (u.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete u.afterLeave,
                  (c = void 0);
              }),
              To(o)
            );
          a === 'in-out' && l.type !== Ge
            ? (u.delayLeave = (h, g, x) => {
                const R = Pu(r, c);
                (R[String(c.key)] = c),
                  (h[sn] = () => {
                    g(), (h[sn] = void 0), delete f.delayedLeave, (c = void 0);
                  }),
                  (f.delayedLeave = () => {
                    x(), delete f.delayedLeave, (c = void 0);
                  });
              })
            : (c = void 0);
        } else c && (c = void 0);
        return o;
      };
    },
  };
function Cu(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ge) {
        t = n;
        break;
      }
  }
  return t;
}
const nh = th;
function Pu(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function fi(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: f,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: h,
      onLeave: g,
      onAfterLeave: x,
      onLeaveCancelled: R,
      onBeforeAppear: N,
      onAppear: $,
      onAfterAppear: M,
      onAppearCancelled: j,
    } = t,
    O = String(e.key),
    U = Pu(n, e),
    J = (H, q) => {
      H && yt(H, r, 9, q);
    },
    K = (H, q) => {
      const Y = q[1];
      J(H, q), X(H) ? H.every((A) => A.length <= 1) && Y() : H.length <= 1 && Y();
    },
    ie = {
      mode: i,
      persisted: a,
      beforeEnter(H) {
        let q = l;
        if (!n.isMounted)
          if (o) q = N || l;
          else return;
        H[sn] && H[sn](!0);
        const Y = U[O];
        Y && Fn(e, Y) && Y.el[sn] && Y.el[sn](), J(q, [H]);
      },
      enter(H) {
        let q = f,
          Y = c,
          A = u;
        if (!n.isMounted)
          if (o) (q = $ || f), (Y = M || c), (A = j || u);
          else return;
        let V = !1;
        const oe = (H[hs] = (se) => {
          V ||
            ((V = !0),
            se ? J(A, [H]) : J(Y, [H]),
            ie.delayedLeave && ie.delayedLeave(),
            (H[hs] = void 0));
        });
        q ? K(q, [H, oe]) : oe();
      },
      leave(H, q) {
        const Y = String(e.key);
        if ((H[hs] && H[hs](!0), n.isUnmounting)) return q();
        J(h, [H]);
        let A = !1;
        const V = (H[sn] = (oe) => {
          A ||
            ((A = !0),
            q(),
            oe ? J(R, [H]) : J(x, [H]),
            (H[sn] = void 0),
            U[Y] === e && delete U[Y]);
        });
        (U[Y] = e), g ? K(g, [H, V]) : V();
      },
      clone(H) {
        const q = fi(H, t, n, r, s);
        return s && s(q), q;
      },
    };
  return ie;
}
function To(e) {
  if (Zs(e)) return (e = mn(e)), (e.children = null), e;
}
function Ll(e) {
  if (!Zs(e)) return xu(e.type) && e.children ? Cu(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && te(n.default)) return n.default();
  }
}
function Vr(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Vr(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function ku(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === kt
      ? (i.patchFlag & 128 && s++, (r = r.concat(ku(i.children, t, a))))
      : (t || i.type !== Ge) && r.push(a != null ? mn(i, { key: a }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function Xs(e, t) {
  return te(e) ? Te({ name: e.name }, t, { setup: e }) : e;
}
function Ru(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function As(e, t, n, r, s = !1) {
  if (X(e)) {
    e.forEach((x, R) => As(x, t && (X(t) ? t[R] : t), n, r, s));
    return;
  }
  if (Rr(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      As(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? ro(r.component) : r.el,
    i = s ? null : o,
    { i: a, r: l } = e,
    f = t && t.r,
    c = a.refs === ge ? (a.refs = {}) : a.refs,
    u = a.setupState,
    h = le(u),
    g = u === ge ? () => !1 : (x) => fe(h, x);
  if (
    (f != null &&
      f !== l &&
      (Ce(f) ? ((c[f] = null), g(f) && (u[f] = null)) : Be(f) && (f.value = null)),
    te(l))
  )
    ls(l, a, 12, [i, c]);
  else {
    const x = Ce(l),
      R = Be(l);
    if (x || R) {
      const N = () => {
        if (e.f) {
          const $ = x ? (g(l) ? u[l] : c[l]) : l.value;
          s
            ? X($) && Ui($, o)
            : X($)
              ? $.includes(o) || $.push(o)
              : x
                ? ((c[l] = [o]), g(l) && (u[l] = c[l]))
                : ((l.value = [o]), e.k && (c[e.k] = l.value));
        } else x ? ((c[l] = i), g(l) && (u[l] = i)) : R && ((l.value = i), e.k && (c[e.k] = i));
      };
      i ? ((N.id = -1), tt(N, n)) : N();
    }
  }
}
Gs().requestIdleCallback;
Gs().cancelIdleCallback;
const Rr = (e) => !!e.type.__asyncLoader,
  Zs = (e) => e.type.__isKeepAlive;
function rh(e, t) {
  Tu(e, 'a', t);
}
function sh(e, t) {
  Tu(e, 'da', t);
}
function Tu(e, t, n = Ae) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((eo(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; ) Zs(s.parent.vnode) && oh(r, t, n, s), (s = s.parent);
  }
}
function oh(e, t, n, r) {
  const s = eo(t, e, r, !0);
  Lu(() => {
    Ui(r[t], s);
  }, n);
}
function eo(e, t, n = Ae, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          yn();
          const a = as(n),
            l = yt(t, n, e, i);
          return a(), bn(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Yt =
    (e) =>
    (t, n = Ae) => {
      (!zr || e === 'sp') && eo(e, (...r) => t(...r), n);
    },
  ih = Yt('bm'),
  Ou = Yt('m'),
  lh = Yt('bu'),
  ah = Yt('u'),
  Au = Yt('bum'),
  Lu = Yt('um'),
  ch = Yt('sp'),
  uh = Yt('rtg'),
  fh = Yt('rtc');
function dh(e, t = Ae) {
  eo('ec', e, t);
}
const ph = 'components';
function hh(e, t) {
  return mh(ph, e, !0, t) || e;
}
const gh = Symbol.for('v-ndc');
function mh(e, t, n = !0, r = !1) {
  const s = Ye || Ae;
  if (s) {
    const o = s.type;
    {
      const a = sg(o, !1);
      if (a && (a === t || a === pt(t) || a === Ks(pt(t)))) return o;
    }
    const i = Ml(s[e] || o[e], t) || Ml(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function Ml(e, t) {
  return e && (e[t] || e[pt(t)] || e[Ks(pt(t))]);
}
function T0(e, t, n, r) {
  let s;
  const o = n,
    i = X(e);
  if (i || Ce(e)) {
    const a = i && Zn(e);
    let l = !1;
    a && ((l = !ft(e)), (e = Js(e))), (s = new Array(e.length));
    for (let f = 0, c = e.length; f < c; f++) s[f] = t(l ? De(e[f]) : e[f], f, void 0, o);
  } else if (typeof e == 'number') {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o);
  } else if (we(e))
    if (e[Symbol.iterator]) s = Array.from(e, (a, l) => t(a, l, void 0, o));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, f = a.length; l < f; l++) {
        const c = a[l];
        s[l] = t(e[c], c, l, o);
      }
    }
  else s = [];
  return s;
}
const di = (e) => (e ? (nf(e) ? ro(e) : di(e.parent)) : null),
  Tr = Te(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => di(e.parent),
    $root: (e) => di(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fu(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Zi(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = vu.bind(e.proxy)),
    $watch: (e) => $h.bind(e),
  }),
  Oo = (e, t) => e !== ge && !e.__isScriptSetup && fe(e, t),
  vh = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: a,
        appContext: l,
      } = e;
      let f;
      if (t[0] !== '$') {
        const g = i[t];
        if (g !== void 0)
          switch (g) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Oo(r, t)) return (i[t] = 1), r[t];
          if (s !== ge && fe(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && fe(f, t)) return (i[t] = 3), o[t];
          if (n !== ge && fe(n, t)) return (i[t] = 4), n[t];
          pi && (i[t] = 0);
        }
      }
      const c = Tr[t];
      let u, h;
      if (c) return t === '$attrs' && $e(e.attrs, 'get', ''), c(e);
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== ge && fe(n, t)) return (i[t] = 4), n[t];
      if (((h = l.config.globalProperties), fe(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return Oo(s, t)
        ? ((s[t] = n), !0)
        : r !== ge && fe(r, t)
          ? ((r[t] = n), !0)
          : fe(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o } },
      i,
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== ge && fe(e, i)) ||
        Oo(t, i) ||
        ((a = o[0]) && fe(a, i)) ||
        fe(r, i) ||
        fe(Tr, i) ||
        fe(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : fe(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Fl(e) {
  return X(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let pi = !0;
function _h(e) {
  const t = Fu(e),
    n = e.proxy,
    r = e.ctx;
  (pi = !1), t.beforeCreate && Il(t.beforeCreate, e, 'bc');
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    created: c,
    beforeMount: u,
    mounted: h,
    beforeUpdate: g,
    updated: x,
    activated: R,
    deactivated: N,
    beforeDestroy: $,
    beforeUnmount: M,
    destroyed: j,
    unmounted: O,
    render: U,
    renderTracked: J,
    renderTriggered: K,
    errorCaptured: ie,
    serverPrefetch: H,
    expose: q,
    inheritAttrs: Y,
    components: A,
    directives: V,
    filters: oe,
  } = t;
  if ((f && yh(f, r, null), i))
    for (const Q in i) {
      const W = i[Q];
      te(W) && (r[Q] = W.bind(n));
    }
  if (s) {
    const Q = s.call(n, n);
    we(Q) && (e.data = gr(Q));
  }
  if (((pi = !0), o))
    for (const Q in o) {
      const W = o[Q],
        ee = te(W) ? W.bind(n, n) : te(W.get) ? W.get.bind(n, n) : At,
        qe = !te(W) && te(W.set) ? W.set.bind(n) : At,
        Re = gt({ get: ee, set: qe });
      Object.defineProperty(r, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (ke) => (Re.value = ke),
      });
    }
  if (a) for (const Q in a) Mu(a[Q], r, n, Q);
  if (l) {
    const Q = te(l) ? l.call(n) : l;
    Reflect.ownKeys(Q).forEach((W) => {
      bs(W, Q[W]);
    });
  }
  c && Il(c, e, 'c');
  function se(Q, W) {
    X(W) ? W.forEach((ee) => Q(ee.bind(n))) : W && Q(W.bind(n));
  }
  if (
    (se(ih, u),
    se(Ou, h),
    se(lh, g),
    se(ah, x),
    se(rh, R),
    se(sh, N),
    se(dh, ie),
    se(fh, J),
    se(uh, K),
    se(Au, M),
    se(Lu, O),
    se(ch, H),
    X(q))
  )
    if (q.length) {
      const Q = e.exposed || (e.exposed = {});
      q.forEach((W) => {
        Object.defineProperty(Q, W, { get: () => n[W], set: (ee) => (n[W] = ee) });
      });
    } else e.exposed || (e.exposed = {});
  U && e.render === At && (e.render = U),
    Y != null && (e.inheritAttrs = Y),
    A && (e.components = A),
    V && (e.directives = V),
    H && Ru(e);
}
function yh(e, t, n = At) {
  X(e) && (e = hi(e));
  for (const r in e) {
    const s = e[r];
    let o;
    we(s)
      ? 'default' in s
        ? (o = Gt(s.from || r, s.default, !0))
        : (o = Gt(s.from || r))
      : (o = Gt(s)),
      Be(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function Il(e, t, n) {
  yt(X(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Mu(e, t, n, r) {
  let s = r.includes('.') ? Gu(n, r) : () => n[r];
  if (Ce(e)) {
    const o = t[e];
    te(o) && ws(s, o);
  } else if (te(e)) ws(s, e.bind(n));
  else if (we(e))
    if (X(e)) e.forEach((o) => Mu(o, t, n, r));
    else {
      const o = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(o) && ws(s, o, e);
    }
}
function Fu(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = o.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !n && !r
        ? (l = t)
        : ((l = {}), s.length && s.forEach((f) => Ls(l, f, i, !0)), Ls(l, t, i)),
    we(t) && o.set(t, l),
    l
  );
}
function Ls(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Ls(e, o, n, !0), s && s.forEach((i) => Ls(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const a = bh[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const bh = {
  data: jl,
  props: $l,
  emits: $l,
  methods: Sr,
  computed: Sr,
  beforeCreate: Ve,
  created: Ve,
  beforeMount: Ve,
  mounted: Ve,
  beforeUpdate: Ve,
  updated: Ve,
  beforeDestroy: Ve,
  beforeUnmount: Ve,
  destroyed: Ve,
  unmounted: Ve,
  activated: Ve,
  deactivated: Ve,
  errorCaptured: Ve,
  serverPrefetch: Ve,
  components: Sr,
  directives: Sr,
  watch: xh,
  provide: jl,
  inject: wh,
};
function jl(e, t) {
  return t
    ? e
      ? function () {
          return Te(te(e) ? e.call(this, this) : e, te(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function wh(e, t) {
  return Sr(hi(e), hi(t));
}
function hi(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Sr(e, t) {
  return e ? Te(Object.create(null), e, t) : t;
}
function $l(e, t) {
  return e
    ? X(e) && X(t)
      ? [...new Set([...e, ...t])]
      : Te(Object.create(null), Fl(e), Fl(t ?? {}))
    : t;
}
function xh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Te(Object.create(null), e);
  for (const r in t) n[r] = Ve(e[r], t[r]);
  return n;
}
function Iu() {
  return {
    app: null,
    config: {
      isNativeTag: ap,
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
let Sh = 0;
function Eh(e, t) {
  return function (n, r = null) {
    te(n) || (n = Te({}, n)), r != null && !we(r) && (r = null);
    const s = Iu(),
      o = new WeakSet(),
      i = [];
    let a = !1;
    const l = (s.app = {
      _uid: Sh++,
      _component: n,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: ig,
      get config() {
        return s.config;
      },
      set config(f) {},
      use(f, ...c) {
        return (
          o.has(f) ||
            (f && te(f.install) ? (o.add(f), f.install(l, ...c)) : te(f) && (o.add(f), f(l, ...c))),
          l
        );
      },
      mixin(f) {
        return s.mixins.includes(f) || s.mixins.push(f), l;
      },
      component(f, c) {
        return c ? ((s.components[f] = c), l) : s.components[f];
      },
      directive(f, c) {
        return c ? ((s.directives[f] = c), l) : s.directives[f];
      },
      mount(f, c, u) {
        if (!a) {
          const h = l._ceVNode || it(n, r);
          return (
            (h.appContext = s),
            u === !0 ? (u = 'svg') : u === !1 && (u = void 0),
            e(h, f, u),
            (a = !0),
            (l._container = f),
            (f.__vue_app__ = l),
            ro(h.component)
          );
        }
      },
      onUnmount(f) {
        i.push(f);
      },
      unmount() {
        a && (yt(i, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
      },
      provide(f, c) {
        return (s.provides[f] = c), l;
      },
      runWithContext(f) {
        const c = nr;
        nr = l;
        try {
          return f();
        } finally {
          nr = c;
        }
      },
    });
    return l;
  };
}
let nr = null;
function bs(e, t) {
  if (Ae) {
    let n = Ae.provides;
    const r = Ae.parent && Ae.parent.provides;
    r === n && (n = Ae.provides = Object.create(r)), (n[e] = t);
  }
}
function Gt(e, t, n = !1) {
  const r = Ae || Ye;
  if (r || nr) {
    const s = nr
      ? nr._context.provides
      : r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && te(t) ? t.call(r && r.proxy) : t;
  }
}
const ju = {},
  $u = () => Object.create(ju),
  Du = (e) => Object.getPrototypeOf(e) === ju;
function Ch(e, t, n, r = !1) {
  const s = {},
    o = $u();
  (e.propsDefaults = Object.create(null)), Nu(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : fu(s)) : e.type.props ? (e.props = s) : (e.props = o), (e.attrs = o);
}
function Ph(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = le(s),
    [l] = e.propsOptions;
  let f = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let h = c[u];
        if (to(e.emitsOptions, h)) continue;
        const g = t[h];
        if (l)
          if (fe(o, h)) g !== o[h] && ((o[h] = g), (f = !0));
          else {
            const x = pt(h);
            s[x] = gi(l, a, x, g, e, !1);
          }
        else g !== o[h] && ((o[h] = g), (f = !0));
      }
    }
  } else {
    Nu(e, t, s, o) && (f = !0);
    let c;
    for (const u in a)
      (!t || (!fe(t, u) && ((c = Un(u)) === u || !fe(t, c)))) &&
        (l
          ? n && (n[u] !== void 0 || n[c] !== void 0) && (s[u] = gi(l, a, u, void 0, e, !0))
          : delete s[u]);
    if (o !== a) for (const u in o) (!t || !fe(t, u)) && (delete o[u], (f = !0));
  }
  f && Vt(e.attrs, 'set', '');
}
function Nu(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (Cr(l)) continue;
      const f = t[l];
      let c;
      s && fe(s, (c = pt(l)))
        ? !o || !o.includes(c)
          ? (n[c] = f)
          : ((a || (a = {}))[c] = f)
        : to(e.emitsOptions, l) || ((!(l in r) || f !== r[l]) && ((r[l] = f), (i = !0)));
    }
  if (o) {
    const l = le(n),
      f = a || ge;
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      n[u] = gi(s, l, u, f[u], e, !fe(f, u));
    }
  }
  return i;
}
function gi(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = fe(i, 'default');
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && te(l)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const c = as(s);
          (r = f[n] = l.call(null, t)), c();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] && (o && !a ? (r = !1) : i[1] && (r === '' || r === Un(n)) && (r = !0));
  }
  return r;
}
const kh = new WeakMap();
function Hu(e, t, n = !1) {
  const r = n ? kh : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!te(e)) {
    const c = (u) => {
      l = !0;
      const [h, g] = Hu(u, t, !0);
      Te(i, h), g && a.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!o && !l) return we(e) && r.set(e, Qn), Qn;
  if (X(o))
    for (let c = 0; c < o.length; c++) {
      const u = pt(o[c]);
      Dl(u) && (i[u] = ge);
    }
  else if (o)
    for (const c in o) {
      const u = pt(c);
      if (Dl(u)) {
        const h = o[c],
          g = (i[u] = X(h) || te(h) ? { type: h } : Te({}, h)),
          x = g.type;
        let R = !1,
          N = !0;
        if (X(x))
          for (let $ = 0; $ < x.length; ++$) {
            const M = x[$],
              j = te(M) && M.name;
            if (j === 'Boolean') {
              R = !0;
              break;
            } else j === 'String' && (N = !1);
          }
        else R = te(x) && x.name === 'Boolean';
        (g[0] = R), (g[1] = N), (R || fe(g, 'default')) && a.push(u);
      }
    }
  const f = [i, a];
  return we(e) && r.set(e, f), f;
}
function Dl(e) {
  return e[0] !== '$' && !Cr(e);
}
const Bu = (e) => e[0] === '_' || e === '$stable',
  el = (e) => (X(e) ? e.map(Rt) : [Rt(e)]),
  Rh = (e, t, n) => {
    if (t._n) return t;
    const r = Xp((...s) => el(t(...s)), n);
    return (r._c = !1), r;
  },
  Uu = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Bu(s)) continue;
      const o = e[s];
      if (te(o)) t[s] = Rh(s, o, r);
      else if (o != null) {
        const i = el(o);
        t[s] = () => i;
      }
    }
  },
  qu = (e, t) => {
    const n = el(t);
    e.slots.default = () => n;
  },
  Vu = (e, t, n) => {
    for (const r in t) (n || r !== '_') && (e[r] = t[r]);
  },
  Th = (e, t, n) => {
    const r = (e.slots = $u());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Vu(r, t, n), n && Kc(r, '_', s, !0)) : Uu(t, r);
    } else t && qu(e, t);
  },
  Oh = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = ge;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? (n && a === 1 ? (o = !1) : Vu(s, t, n)) : ((o = !t.$stable), Uu(t, s)), (i = t);
    } else t && (qu(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !Bu(a) && i[a] == null && delete s[a];
  },
  tt = Vh;
function Ah(e) {
  return Lh(e);
}
function Lh(e, t) {
  const n = Gs();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: a,
      createComment: l,
      setText: f,
      setElementText: c,
      parentNode: u,
      nextSibling: h,
      setScopeId: g = At,
      insertStaticContent: x,
    } = e,
    R = (v, d, p, m = null, _ = null, b = null, w = void 0, C = null, E = !!d.dynamicChildren) => {
      if (v === d) return;
      v && !Fn(v, d) && ((m = y(v)), he(v, _, b, !0), (v = null)),
        d.patchFlag === -2 && ((E = !1), (d.dynamicChildren = null));
      const { type: S, ref: P, shapeFlag: F } = d;
      switch (S) {
        case no:
          N(v, d, p, m);
          break;
        case Ge:
          $(v, d, p, m);
          break;
        case Lo:
          v == null && M(d, p, m, w);
          break;
        case kt:
          A(v, d, p, m, _, b, w, C, E);
          break;
        default:
          F & 1
            ? U(v, d, p, m, _, b, w, C, E)
            : F & 6
              ? V(v, d, p, m, _, b, w, C, E)
              : (F & 64 || F & 128) && S.process(v, d, p, m, _, b, w, C, E, I);
      }
      P != null && _ && As(P, v && v.ref, b, d || v, !d);
    },
    N = (v, d, p, m) => {
      if (v == null) r((d.el = a(d.children)), p, m);
      else {
        const _ = (d.el = v.el);
        d.children !== v.children && f(_, d.children);
      }
    },
    $ = (v, d, p, m) => {
      v == null ? r((d.el = l(d.children || '')), p, m) : (d.el = v.el);
    },
    M = (v, d, p, m) => {
      [v.el, v.anchor] = x(v.children, d, p, m, v.el, v.anchor);
    },
    j = ({ el: v, anchor: d }, p, m) => {
      let _;
      for (; v && v !== d; ) (_ = h(v)), r(v, p, m), (v = _);
      r(d, p, m);
    },
    O = ({ el: v, anchor: d }) => {
      let p;
      for (; v && v !== d; ) (p = h(v)), s(v), (v = p);
      s(d);
    },
    U = (v, d, p, m, _, b, w, C, E) => {
      d.type === 'svg' ? (w = 'svg') : d.type === 'math' && (w = 'mathml'),
        v == null ? J(d, p, m, _, b, w, C, E) : H(v, d, _, b, w, C, E);
    },
    J = (v, d, p, m, _, b, w, C) => {
      let E, S;
      const { props: P, shapeFlag: F, transition: L, dirs: D } = v;
      if (
        ((E = v.el = i(v.type, b, P && P.is, P)),
        F & 8 ? c(E, v.children) : F & 16 && ie(v.children, E, null, m, _, Ao(v, b), w, C),
        D && En(v, null, m, 'created'),
        K(E, v, v.scopeId, w, m),
        P)
      ) {
        for (const z in P) z !== 'value' && !Cr(z) && o(E, z, null, P[z], b, m);
        'value' in P && o(E, 'value', null, P.value, b), (S = P.onVnodeBeforeMount) && St(S, m, v);
      }
      D && En(v, null, m, 'beforeMount');
      const B = Mh(_, L);
      B && L.beforeEnter(E),
        r(E, d, p),
        ((S = P && P.onVnodeMounted) || B || D) &&
          tt(() => {
            S && St(S, m, v), B && L.enter(E), D && En(v, null, m, 'mounted');
          }, _);
    },
    K = (v, d, p, m, _) => {
      if ((p && g(v, p), m)) for (let b = 0; b < m.length; b++) g(v, m[b]);
      if (_) {
        let b = _.subTree;
        if (d === b || (Yu(b.type) && (b.ssContent === d || b.ssFallback === d))) {
          const w = _.vnode;
          K(v, w, w.scopeId, w.slotScopeIds, _.parent);
        }
      }
    },
    ie = (v, d, p, m, _, b, w, C, E = 0) => {
      for (let S = E; S < v.length; S++) {
        const P = (v[S] = C ? on(v[S]) : Rt(v[S]));
        R(null, P, d, p, m, _, b, w, C);
      }
    },
    H = (v, d, p, m, _, b, w) => {
      const C = (d.el = v.el);
      let { patchFlag: E, dynamicChildren: S, dirs: P } = d;
      E |= v.patchFlag & 16;
      const F = v.props || ge,
        L = d.props || ge;
      let D;
      if (
        (p && Cn(p, !1),
        (D = L.onVnodeBeforeUpdate) && St(D, p, d, v),
        P && En(d, v, p, 'beforeUpdate'),
        p && Cn(p, !0),
        ((F.innerHTML && L.innerHTML == null) || (F.textContent && L.textContent == null)) &&
          c(C, ''),
        S
          ? q(v.dynamicChildren, S, C, p, m, Ao(d, _), b)
          : w || ee(v, d, C, null, p, m, Ao(d, _), b, !1),
        E > 0)
      ) {
        if (E & 16) Y(C, F, L, p, _);
        else if (
          (E & 2 && F.class !== L.class && o(C, 'class', null, L.class, _),
          E & 4 && o(C, 'style', F.style, L.style, _),
          E & 8)
        ) {
          const B = d.dynamicProps;
          for (let z = 0; z < B.length; z++) {
            const G = B[z],
              re = F[G],
              pe = L[G];
            (pe !== re || G === 'value') && o(C, G, re, pe, _, p);
          }
        }
        E & 1 && v.children !== d.children && c(C, d.children);
      } else !w && S == null && Y(C, F, L, p, _);
      ((D = L.onVnodeUpdated) || P) &&
        tt(() => {
          D && St(D, p, d, v), P && En(d, v, p, 'updated');
        }, m);
    },
    q = (v, d, p, m, _, b, w) => {
      for (let C = 0; C < d.length; C++) {
        const E = v[C],
          S = d[C],
          P = E.el && (E.type === kt || !Fn(E, S) || E.shapeFlag & 70) ? u(E.el) : p;
        R(E, S, P, null, m, _, b, w, !0);
      }
    },
    Y = (v, d, p, m, _) => {
      if (d !== p) {
        if (d !== ge) for (const b in d) !Cr(b) && !(b in p) && o(v, b, d[b], null, _, m);
        for (const b in p) {
          if (Cr(b)) continue;
          const w = p[b],
            C = d[b];
          w !== C && b !== 'value' && o(v, b, C, w, _, m);
        }
        'value' in p && o(v, 'value', d.value, p.value, _);
      }
    },
    A = (v, d, p, m, _, b, w, C, E) => {
      const S = (d.el = v ? v.el : a('')),
        P = (d.anchor = v ? v.anchor : a(''));
      let { patchFlag: F, dynamicChildren: L, slotScopeIds: D } = d;
      D && (C = C ? C.concat(D) : D),
        v == null
          ? (r(S, p, m), r(P, p, m), ie(d.children || [], p, P, _, b, w, C, E))
          : F > 0 && F & 64 && L && v.dynamicChildren
            ? (q(v.dynamicChildren, L, p, _, b, w, C),
              (d.key != null || (_ && d === _.subTree)) && Wu(v, d, !0))
            : ee(v, d, p, P, _, b, w, C, E);
    },
    V = (v, d, p, m, _, b, w, C, E) => {
      (d.slotScopeIds = C),
        v == null
          ? d.shapeFlag & 512
            ? _.ctx.activate(d, p, m, w, E)
            : oe(d, p, m, _, b, w, E)
          : se(v, d, E);
    },
    oe = (v, d, p, m, _, b, w) => {
      const C = (v.component = Xh(v, m, _));
      if ((Zs(v) && (C.ctx.renderer = I), eg(C, !1, w), C.asyncDep)) {
        if ((_ && _.registerDep(C, Q, w), !v.el)) {
          const E = (C.subTree = it(Ge));
          $(null, E, d, p);
        }
      } else Q(C, v, d, p, _, b, w);
    },
    se = (v, d, p) => {
      const m = (d.component = v.component);
      if (Uh(v, d, p))
        if (m.asyncDep && !m.asyncResolved) {
          W(m, d, p);
          return;
        } else (m.next = d), m.update();
      else (d.el = v.el), (m.vnode = d);
    },
    Q = (v, d, p, m, _, b, w) => {
      const C = () => {
        if (v.isMounted) {
          let { next: F, bu: L, u: D, parent: B, vnode: z } = v;
          {
            const Ee = zu(v);
            if (Ee) {
              F && ((F.el = z.el), W(v, F, w)),
                Ee.asyncDep.then(() => {
                  v.isUnmounted || C();
                });
              return;
            }
          }
          let G = F,
            re;
          Cn(v, !1),
            F ? ((F.el = z.el), W(v, F, w)) : (F = z),
            L && Eo(L),
            (re = F.props && F.props.onVnodeBeforeUpdate) && St(re, B, F, z),
            Cn(v, !0);
          const pe = Hl(v),
            be = v.subTree;
          (v.subTree = pe),
            R(be, pe, u(be.el), y(be), v, _, b),
            (F.el = pe.el),
            G === null && qh(v, pe.el),
            D && tt(D, _),
            (re = F.props && F.props.onVnodeUpdated) && tt(() => St(re, B, F, z), _);
        } else {
          let F;
          const { el: L, props: D } = d,
            { bm: B, m: z, parent: G, root: re, type: pe } = v,
            be = Rr(d);
          Cn(v, !1), B && Eo(B), !be && (F = D && D.onVnodeBeforeMount) && St(F, G, d), Cn(v, !0);
          {
            re.ce && re.ce._injectChildStyle(pe);
            const Ee = (v.subTree = Hl(v));
            R(null, Ee, p, m, v, _, b), (d.el = Ee.el);
          }
          if ((z && tt(z, _), !be && (F = D && D.onVnodeMounted))) {
            const Ee = d;
            tt(() => St(F, G, Ee), _);
          }
          (d.shapeFlag & 256 || (G && Rr(G.vnode) && G.vnode.shapeFlag & 256)) && v.a && tt(v.a, _),
            (v.isMounted = !0),
            (d = p = m = null);
        }
      };
      v.scope.on();
      const E = (v.effect = new Qc(C));
      v.scope.off();
      const S = (v.update = E.run.bind(E)),
        P = (v.job = E.runIfDirty.bind(E));
      (P.i = v), (P.id = v.uid), (E.scheduler = () => Zi(P)), Cn(v, !0), S();
    },
    W = (v, d, p) => {
      d.component = v;
      const m = v.vnode.props;
      (v.vnode = d), (v.next = null), Ph(v, d.props, m, p), Oh(v, d.children, p), yn(), Al(v), bn();
    },
    ee = (v, d, p, m, _, b, w, C, E = !1) => {
      const S = v && v.children,
        P = v ? v.shapeFlag : 0,
        F = d.children,
        { patchFlag: L, shapeFlag: D } = d;
      if (L > 0) {
        if (L & 128) {
          Re(S, F, p, m, _, b, w, C, E);
          return;
        } else if (L & 256) {
          qe(S, F, p, m, _, b, w, C, E);
          return;
        }
      }
      D & 8
        ? (P & 16 && ye(S, _, b), F !== S && c(p, F))
        : P & 16
          ? D & 16
            ? Re(S, F, p, m, _, b, w, C, E)
            : ye(S, _, b, !0)
          : (P & 8 && c(p, ''), D & 16 && ie(F, p, m, _, b, w, C, E));
    },
    qe = (v, d, p, m, _, b, w, C, E) => {
      (v = v || Qn), (d = d || Qn);
      const S = v.length,
        P = d.length,
        F = Math.min(S, P);
      let L;
      for (L = 0; L < F; L++) {
        const D = (d[L] = E ? on(d[L]) : Rt(d[L]));
        R(v[L], D, p, null, _, b, w, C, E);
      }
      S > P ? ye(v, _, b, !0, !1, F) : ie(d, p, m, _, b, w, C, E, F);
    },
    Re = (v, d, p, m, _, b, w, C, E) => {
      let S = 0;
      const P = d.length;
      let F = v.length - 1,
        L = P - 1;
      for (; S <= F && S <= L; ) {
        const D = v[S],
          B = (d[S] = E ? on(d[S]) : Rt(d[S]));
        if (Fn(D, B)) R(D, B, p, null, _, b, w, C, E);
        else break;
        S++;
      }
      for (; S <= F && S <= L; ) {
        const D = v[F],
          B = (d[L] = E ? on(d[L]) : Rt(d[L]));
        if (Fn(D, B)) R(D, B, p, null, _, b, w, C, E);
        else break;
        F--, L--;
      }
      if (S > F) {
        if (S <= L) {
          const D = L + 1,
            B = D < P ? d[D].el : m;
          for (; S <= L; ) R(null, (d[S] = E ? on(d[S]) : Rt(d[S])), p, B, _, b, w, C, E), S++;
        }
      } else if (S > L) for (; S <= F; ) he(v[S], _, b, !0), S++;
      else {
        const D = S,
          B = S,
          z = new Map();
        for (S = B; S <= L; S++) {
          const Fe = (d[S] = E ? on(d[S]) : Rt(d[S]));
          Fe.key != null && z.set(Fe.key, S);
        }
        let G,
          re = 0;
        const pe = L - B + 1;
        let be = !1,
          Ee = 0;
        const Me = new Array(pe);
        for (S = 0; S < pe; S++) Me[S] = 0;
        for (S = D; S <= F; S++) {
          const Fe = v[S];
          if (re >= pe) {
            he(Fe, _, b, !0);
            continue;
          }
          let Se;
          if (Fe.key != null) Se = z.get(Fe.key);
          else
            for (G = B; G <= L; G++)
              if (Me[G - B] === 0 && Fn(Fe, d[G])) {
                Se = G;
                break;
              }
          Se === void 0
            ? he(Fe, _, b, !0)
            : ((Me[Se - B] = S + 1),
              Se >= Ee ? (Ee = Se) : (be = !0),
              R(Fe, d[Se], p, null, _, b, w, C, E),
              re++);
        }
        const Xt = be ? Fh(Me) : Qn;
        for (G = Xt.length - 1, S = pe - 1; S >= 0; S--) {
          const Fe = B + S,
            Se = d[Fe],
            et = Fe + 1 < P ? d[Fe + 1].el : m;
          Me[S] === 0
            ? R(null, Se, p, et, _, b, w, C, E)
            : be && (G < 0 || S !== Xt[G] ? ke(Se, p, et, 2) : G--);
        }
      }
    },
    ke = (v, d, p, m, _ = null) => {
      const { el: b, type: w, transition: C, children: E, shapeFlag: S } = v;
      if (S & 6) {
        ke(v.component.subTree, d, p, m);
        return;
      }
      if (S & 128) {
        v.suspense.move(d, p, m);
        return;
      }
      if (S & 64) {
        w.move(v, d, p, I);
        return;
      }
      if (w === kt) {
        r(b, d, p);
        for (let P = 0; P < E.length; P++) ke(E[P], d, p, m);
        r(v.anchor, d, p);
        return;
      }
      if (w === Lo) {
        j(v, d, p);
        return;
      }
      if (m !== 2 && S & 1 && C)
        if (m === 0) C.beforeEnter(b), r(b, d, p), tt(() => C.enter(b), _);
        else {
          const { leave: P, delayLeave: F, afterLeave: L } = C,
            D = () => r(b, d, p),
            B = () => {
              P(b, () => {
                D(), L && L();
              });
            };
          F ? F(b, D, B) : B();
        }
      else r(b, d, p);
    },
    he = (v, d, p, m = !1, _ = !1) => {
      const {
        type: b,
        props: w,
        ref: C,
        children: E,
        dynamicChildren: S,
        shapeFlag: P,
        patchFlag: F,
        dirs: L,
        cacheIndex: D,
      } = v;
      if (
        (F === -2 && (_ = !1),
        C != null && As(C, null, p, v, !0),
        D != null && (d.renderCache[D] = void 0),
        P & 256)
      ) {
        d.ctx.deactivate(v);
        return;
      }
      const B = P & 1 && L,
        z = !Rr(v);
      let G;
      if ((z && (G = w && w.onVnodeBeforeUnmount) && St(G, d, v), P & 6)) It(v.component, p, m);
      else {
        if (P & 128) {
          v.suspense.unmount(p, m);
          return;
        }
        B && En(v, null, d, 'beforeUnmount'),
          P & 64
            ? v.type.remove(v, d, p, I, m)
            : S && !S.hasOnce && (b !== kt || (F > 0 && F & 64))
              ? ye(S, d, p, !1, !0)
              : ((b === kt && F & 384) || (!_ && P & 16)) && ye(E, d, p),
          m && Xe(v);
      }
      ((z && (G = w && w.onVnodeUnmounted)) || B) &&
        tt(() => {
          G && St(G, d, v), B && En(v, null, d, 'unmounted');
        }, p);
    },
    Xe = (v) => {
      const { type: d, el: p, anchor: m, transition: _ } = v;
      if (d === kt) {
        Ze(p, m);
        return;
      }
      if (d === Lo) {
        O(v);
        return;
      }
      const b = () => {
        s(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (v.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: w, delayLeave: C } = _,
          E = () => w(p, b);
        C ? C(v.el, b, E) : E();
      } else b();
    },
    Ze = (v, d) => {
      let p;
      for (; v !== d; ) (p = h(v)), s(v), (v = p);
      s(d);
    },
    It = (v, d, p) => {
      const { bum: m, scope: _, job: b, subTree: w, um: C, m: E, a: S } = v;
      Nl(E),
        Nl(S),
        m && Eo(m),
        _.stop(),
        b && ((b.flags |= 8), he(w, v, d, p)),
        C && tt(C, d),
        tt(() => {
          v.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          v.asyncDep &&
          !v.asyncResolved &&
          v.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    ye = (v, d, p, m = !1, _ = !1, b = 0) => {
      for (let w = b; w < v.length; w++) he(v[w], d, p, m, _);
    },
    y = (v) => {
      if (v.shapeFlag & 6) return y(v.component.subTree);
      if (v.shapeFlag & 128) return v.suspense.next();
      const d = h(v.anchor || v.el),
        p = d && d[Zp];
      return p ? h(p) : d;
    };
  let T = !1;
  const k = (v, d, p) => {
      v == null
        ? d._vnode && he(d._vnode, null, null, !0)
        : R(d._vnode || null, v, d, null, null, null, p),
        (d._vnode = v),
        T || ((T = !0), Al(), yu(), (T = !1));
    },
    I = { p: R, um: he, m: ke, r: Xe, mt: oe, mc: ie, pc: ee, pbc: q, n: y, o: e };
  return { render: k, hydrate: void 0, createApp: Eh(k) };
}
function Ao({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n;
}
function Cn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Mh(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Wu(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (X(r) && X(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = s[o] = on(s[o])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && Wu(i, a)),
        a.type === no && (a.el = i.el);
    }
}
function Fh(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const f = e[r];
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (a = (o + i) >> 1), e[n[a]] < f ? (o = a + 1) : (i = a);
      f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function zu(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : zu(t);
}
function Nl(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Ih = Symbol.for('v-scx'),
  jh = () => Gt(Ih);
function ws(e, t, n) {
  return Ku(e, t, n);
}
function Ku(e, t, n = ge) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    a = Te({}, n),
    l = (t && r) || (!t && o !== 'post');
  let f;
  if (zr) {
    if (o === 'sync') {
      const g = jh();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {};
      return (g.stop = At), (g.resume = At), (g.pause = At), g;
    }
  }
  const c = Ae;
  a.call = (g, x, R) => yt(g, c, x, R);
  let u = !1;
  o === 'post'
    ? (a.scheduler = (g) => {
        tt(g, c && c.suspense);
      })
    : o !== 'sync' &&
      ((u = !0),
      (a.scheduler = (g, x) => {
        x ? g() : Zi(g);
      })),
    (a.augmentJob = (g) => {
      t && (g.flags |= 4), u && ((g.flags |= 2), c && ((g.id = c.uid), (g.i = c)));
    });
  const h = Gp(e, t, a);
  return zr && (f ? f.push(h) : l && h()), h;
}
function $h(e, t, n) {
  const r = this.proxy,
    s = Ce(e) ? (e.includes('.') ? Gu(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  te(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = as(this),
    a = Ku(s, o.bind(r), n);
  return i(), a;
}
function Gu(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const Dh = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${pt(t)}Modifiers`] || e[`${Un(t)}Modifiers`];
function Nh(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ge;
  let s = n;
  const o = t.startsWith('update:'),
    i = o && Dh(r, t.slice(7));
  i && (i.trim && (s = n.map((c) => (Ce(c) ? c.trim() : c))), i.number && (s = n.map(pp)));
  let a,
    l = r[(a = So(t))] || r[(a = So(pt(t)))];
  !l && o && (l = r[(a = So(Un(t)))]), l && yt(l, e, 6, s);
  const f = r[a + 'Once'];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), yt(f, e, 6, s);
  }
}
function Ju(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!te(e)) {
    const l = (f) => {
      const c = Ju(f, t, !0);
      c && ((a = !0), Te(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? (we(e) && r.set(e, null), null)
    : (X(o) ? o.forEach((l) => (i[l] = null)) : Te(i, o), we(e) && r.set(e, i), i);
}
function to(e, t) {
  return !e || !Vs(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      fe(e, t[0].toLowerCase() + t.slice(1)) || fe(e, Un(t)) || fe(e, t));
}
function Hl(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: a,
      emit: l,
      render: f,
      renderCache: c,
      props: u,
      data: h,
      setupState: g,
      ctx: x,
      inheritAttrs: R,
    } = e,
    N = Os(e);
  let $, M;
  try {
    if (n.shapeFlag & 4) {
      const O = s || r,
        U = O;
      ($ = Rt(f.call(U, O, c, u, g, h, x))), (M = a);
    } else {
      const O = t;
      ($ = Rt(O.length > 1 ? O(u, { attrs: a, slots: i, emit: l }) : O(u, null))),
        (M = t.props ? a : Hh(a));
    }
  } catch (O) {
    (Or.length = 0), Qs(O, e, 1), ($ = it(Ge));
  }
  let j = $;
  if (M && R !== !1) {
    const O = Object.keys(M),
      { shapeFlag: U } = j;
    O.length && U & 7 && (o && O.some(Bi) && (M = Bh(M, o)), (j = mn(j, M, !1, !0)));
  }
  return (
    n.dirs && ((j = mn(j, null, !1, !0)), (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Vr(j, n.transition),
    ($ = j),
    Os(N),
    $
  );
}
const Hh = (e) => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || Vs(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Bh = (e, t) => {
    const n = {};
    for (const r in e) (!Bi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Uh(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: l } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Bl(r, i, f) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const h = c[u];
        if (i[h] !== r[h] && !to(f, h)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? Bl(r, i, f) : !0) : !!i;
  return !1;
}
function Bl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !to(n, o)) return !0;
  }
  return !1;
}
function qh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Yu = (e) => e.__isSuspense;
function Vh(e, t) {
  t && t.pendingBranch ? (X(e) ? t.effects.push(...e) : t.effects.push(e)) : Qp(e);
}
const kt = Symbol.for('v-fgt'),
  no = Symbol.for('v-txt'),
  Ge = Symbol.for('v-cmt'),
  Lo = Symbol.for('v-stc'),
  Or = [];
let ot = null;
function Qu(e = !1) {
  Or.push((ot = e ? null : []));
}
function Wh() {
  Or.pop(), (ot = Or[Or.length - 1] || null);
}
let Wr = 1;
function Ul(e, t = !1) {
  (Wr += e), e < 0 && ot && t && (ot.hasOnce = !0);
}
function Xu(e) {
  return (e.dynamicChildren = Wr > 0 ? ot || Qn : null), Wh(), Wr > 0 && ot && ot.push(e), e;
}
function O0(e, t, n, r, s, o) {
  return Xu(tf(e, t, n, r, s, o, !0));
}
function Zu(e, t, n, r, s) {
  return Xu(it(e, t, n, r, s, !0));
}
function Ms(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Fn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ef = ({ key: e }) => e ?? null,
  xs = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (Ce(e) || Be(e) || te(e) ? { i: Ye, r: e, k: t, f: !!n } : e) : null
  );
function tf(e, t = null, n = null, r = 0, s = null, o = e === kt ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ef(t),
    ref: t && xs(t),
    scopeId: wu,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ye,
  };
  return (
    a ? (tl(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ce(n) ? 8 : 16),
    Wr > 0 && !i && ot && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && ot.push(l),
    l
  );
}
const it = zh;
function zh(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === gh) && (e = Ge), Ms(e))) {
    const a = mn(e, t, !0);
    return (
      n && tl(a, n),
      Wr > 0 && !o && ot && (a.shapeFlag & 6 ? (ot[ot.indexOf(e)] = a) : ot.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((og(e) && (e = e.__vccOpts), t)) {
    t = Kh(t);
    let { class: a, style: l } = t;
    a && !Ce(a) && (t.class = Wi(a)),
      we(l) && (Xi(l) && !X(l) && (l = Te({}, l)), (t.style = Vi(l)));
  }
  const i = Ce(e) ? 1 : Yu(e) ? 128 : xu(e) ? 64 : we(e) ? 4 : te(e) ? 2 : 0;
  return tf(e, t, n, r, s, i, o, !0);
}
function Kh(e) {
  return e ? (Xi(e) || Du(e) ? Te({}, e) : e) : null;
}
function mn(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e,
    f = t ? Jh(s || {}, t) : s,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && ef(f),
      ref: t && t.ref ? (n && o ? (X(o) ? o.concat(xs(t)) : [o, xs(t)]) : xs(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== kt ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && mn(e.ssContent),
      ssFallback: e.ssFallback && mn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && Vr(c, l.clone(c)), c;
}
function Gh(e = ' ', t = 0) {
  return it(no, null, e, t);
}
function A0(e = '', t = !1) {
  return t ? (Qu(), Zu(Ge, null, e)) : it(Ge, null, e);
}
function Rt(e) {
  return e == null || typeof e == 'boolean'
    ? it(Ge)
    : X(e)
      ? it(kt, null, e.slice())
      : Ms(e)
        ? on(e)
        : it(no, null, String(e));
}
function on(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : mn(e);
}
function tl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (X(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), tl(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Du(t)
        ? (t._ctx = Ye)
        : s === 3 && Ye && (Ye.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    te(t)
      ? ((t = { default: t, _ctx: Ye }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Gh(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Jh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === 'class') t.class !== r.class && (t.class = Wi([t.class, r.class]));
      else if (s === 'style') t.style = Vi([t.style, r.style]);
      else if (Vs(s)) {
        const o = t[s],
          i = r[s];
        i && o !== i && !(X(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== '' && (t[s] = r[s]);
  }
  return t;
}
function St(e, t, n, r = null) {
  yt(e, t, 7, [n, r]);
}
const Yh = Iu();
let Qh = 0;
function Xh(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Yh,
    o = {
      uid: Qh++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new xp(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Hu(r, s),
      emitsOptions: Ju(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ge,
      inheritAttrs: r.inheritAttrs,
      ctx: ge,
      data: ge,
      props: ge,
      attrs: ge,
      slots: ge,
      refs: ge,
      setupState: ge,
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
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = Nh.bind(null, o)), e.ce && e.ce(o), o
  );
}
let Ae = null;
const Zh = () => Ae || Ye;
let Fs, mi;
{
  const e = Gs(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (Fs = t('__VUE_INSTANCE_SETTERS__', (n) => (Ae = n))),
    (mi = t('__VUE_SSR_SETTERS__', (n) => (zr = n)));
}
const as = (e) => {
    const t = Ae;
    return (
      Fs(e),
      e.scope.on(),
      () => {
        e.scope.off(), Fs(t);
      }
    );
  },
  ql = () => {
    Ae && Ae.scope.off(), Fs(null);
  };
function nf(e) {
  return e.vnode.shapeFlag & 4;
}
let zr = !1;
function eg(e, t = !1, n = !1) {
  t && mi(t);
  const { props: r, children: s } = e.vnode,
    o = nf(e);
  Ch(e, r, o, t), Th(e, s, n);
  const i = o ? tg(e, t) : void 0;
  return t && mi(!1), i;
}
function tg(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, vh));
  const { setup: r } = n;
  if (r) {
    yn();
    const s = (e.setupContext = r.length > 1 ? rg(e) : null),
      o = as(e),
      i = ls(r, e, 0, [e.props, s]),
      a = Vc(i);
    if ((bn(), o(), (a || e.sp) && !Rr(e) && Ru(e), a)) {
      if ((i.then(ql, ql), t))
        return i
          .then((l) => {
            Vl(e, l);
          })
          .catch((l) => {
            Qs(l, e, 0);
          });
      e.asyncDep = i;
    } else Vl(e, i);
  } else rf(e);
}
function Vl(e, t, n) {
  te(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : we(t) && (e.setupState = gu(t)),
    rf(e);
}
function rf(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || At);
  {
    const s = as(e);
    yn();
    try {
      _h(e);
    } finally {
      bn(), s();
    }
  }
}
const ng = {
  get(e, t) {
    return $e(e, 'get', ''), e[t];
  },
};
function rg(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, ng), slots: e.slots, emit: e.emit, expose: t };
}
function ro(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(gu(Ys(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Tr) return Tr[n](e);
          },
          has(t, n) {
            return n in t || n in Tr;
          },
        }))
    : e.proxy;
}
function sg(e, t = !0) {
  return te(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function og(e) {
  return te(e) && '__vccOpts' in e;
}
const gt = (e, t) => zp(e, t, zr);
function nl(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? we(t) && !X(t)
      ? Ms(t)
        ? it(e, null, [t])
        : it(e, t)
      : it(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Ms(n) && (n = [n]),
      it(e, t, n));
}
const ig = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let vi;
const Wl = typeof window < 'u' && window.trustedTypes;
if (Wl)
  try {
    vi = Wl.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const sf = vi ? (e) => vi.createHTML(e) : (e) => e,
  lg = 'http://www.w3.org/2000/svg',
  ag = 'http://www.w3.org/1998/Math/MathML',
  Ut = typeof document < 'u' ? document : null,
  zl = Ut && Ut.createElement('template'),
  cg = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === 'svg'
          ? Ut.createElementNS(lg, e)
          : t === 'mathml'
            ? Ut.createElementNS(ag, e)
            : n
              ? Ut.createElement(e, { is: n })
              : Ut.createElement(e);
      return e === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple), s;
    },
    createText: (e) => Ut.createTextNode(e),
    createComment: (e) => Ut.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ut.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); );
      else {
        zl.innerHTML = sf(
          r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e,
        );
        const a = zl.content;
        if (r === 'svg' || r === 'mathml') {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    },
  },
  Zt = 'transition',
  _r = 'animation',
  Kr = Symbol('_vtc'),
  of = {
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
  ug = Te({}, Su, of),
  fg = (e) => ((e.displayName = 'Transition'), (e.props = ug), e),
  L0 = fg((e, { slots: t }) => nl(nh, dg(e), t)),
  Pn = (e, t = []) => {
    X(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Kl = (e) => (e ? (X(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function dg(e) {
  const t = {};
  for (const A in e) A in of || (t[A] = e[A]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: f = i,
      appearToClass: c = a,
      leaveFromClass: u = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = e,
    x = pg(s),
    R = x && x[0],
    N = x && x[1],
    {
      onBeforeEnter: $,
      onEnter: M,
      onEnterCancelled: j,
      onLeave: O,
      onLeaveCancelled: U,
      onBeforeAppear: J = $,
      onAppear: K = M,
      onAppearCancelled: ie = j,
    } = t,
    H = (A, V, oe, se) => {
      (A._enterCancelled = se), kn(A, V ? c : a), kn(A, V ? f : i), oe && oe();
    },
    q = (A, V) => {
      (A._isLeaving = !1), kn(A, u), kn(A, g), kn(A, h), V && V();
    },
    Y = (A) => (V, oe) => {
      const se = A ? K : M,
        Q = () => H(V, A, oe);
      Pn(se, [V, Q]),
        Gl(() => {
          kn(V, A ? l : o), $t(V, A ? c : a), Kl(se) || Jl(V, r, R, Q);
        });
    };
  return Te(t, {
    onBeforeEnter(A) {
      Pn($, [A]), $t(A, o), $t(A, i);
    },
    onBeforeAppear(A) {
      Pn(J, [A]), $t(A, l), $t(A, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(A, V) {
      A._isLeaving = !0;
      const oe = () => q(A, V);
      $t(A, u),
        A._enterCancelled ? ($t(A, h), Xl()) : (Xl(), $t(A, h)),
        Gl(() => {
          A._isLeaving && (kn(A, u), $t(A, g), Kl(O) || Jl(A, r, N, oe));
        }),
        Pn(O, [A, oe]);
    },
    onEnterCancelled(A) {
      H(A, !1, void 0, !0), Pn(j, [A]);
    },
    onAppearCancelled(A) {
      H(A, !0, void 0, !0), Pn(ie, [A]);
    },
    onLeaveCancelled(A) {
      q(A), Pn(U, [A]);
    },
  });
}
function pg(e) {
  if (e == null) return null;
  if (we(e)) return [Mo(e.enter), Mo(e.leave)];
  {
    const t = Mo(e);
    return [t, t];
  }
}
function Mo(e) {
  return hp(e);
}
function $t(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Kr] || (e[Kr] = new Set())).add(t);
}
function kn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Kr];
  n && (n.delete(t), n.size || (e[Kr] = void 0));
}
function Gl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hg = 0;
function Jl(e, t, n, r) {
  const s = (e._endId = ++hg),
    o = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = gg(e, t);
  if (!i) return r();
  const f = i + 'end';
  let c = 0;
  const u = () => {
      e.removeEventListener(f, h), o();
    },
    h = (g) => {
      g.target === e && ++c >= l && u();
    };
  setTimeout(() => {
    c < l && u();
  }, a + 1),
    e.addEventListener(f, h);
}
function gg(e, t) {
  const n = window.getComputedStyle(e),
    r = (x) => (n[x] || '').split(', '),
    s = r(`${Zt}Delay`),
    o = r(`${Zt}Duration`),
    i = Yl(s, o),
    a = r(`${_r}Delay`),
    l = r(`${_r}Duration`),
    f = Yl(a, l);
  let c = null,
    u = 0,
    h = 0;
  t === Zt
    ? i > 0 && ((c = Zt), (u = i), (h = o.length))
    : t === _r
      ? f > 0 && ((c = _r), (u = f), (h = l.length))
      : ((u = Math.max(i, f)),
        (c = u > 0 ? (i > f ? Zt : _r) : null),
        (h = c ? (c === Zt ? o.length : l.length) : 0));
  const g = c === Zt && /\b(transform|all)(,|$)/.test(r(`${Zt}Property`).toString());
  return { type: c, timeout: u, propCount: h, hasTransform: g };
}
function Yl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Ql(n) + Ql(e[r])));
}
function Ql(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Xl() {
  return document.body.offsetHeight;
}
function mg(e, t, n) {
  const r = e[Kr];
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
const Zl = Symbol('_vod'),
  vg = Symbol('_vsh'),
  _g = Symbol(''),
  yg = /(^|;)\s*display\s*:/;
function bg(e, t, n) {
  const r = e.style,
    s = Ce(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (Ce(t))
        for (const i of t.split(';')) {
          const a = i.slice(0, i.indexOf(':')).trim();
          n[a] == null && Ss(r, a, '');
        }
      else for (const i in t) n[i] == null && Ss(r, i, '');
    for (const i in n) i === 'display' && (o = !0), Ss(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[_g];
      i && (n += ';' + i), (r.cssText = n), (o = yg.test(n));
    }
  } else t && e.removeAttribute('style');
  Zl in e && ((e[Zl] = o ? r.display : ''), e[vg] && (r.display = 'none'));
}
const ea = /\s*!important$/;
function Ss(e, t, n) {
  if (X(n)) n.forEach((r) => Ss(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = wg(e, t);
    ea.test(n) ? e.setProperty(Un(r), n.replace(ea, ''), 'important') : (e[r] = n);
  }
}
const ta = ['Webkit', 'Moz', 'ms'],
  Fo = {};
function wg(e, t) {
  const n = Fo[t];
  if (n) return n;
  let r = pt(t);
  if (r !== 'filter' && r in e) return (Fo[t] = r);
  r = Ks(r);
  for (let s = 0; s < ta.length; s++) {
    const o = ta[s] + r;
    if (o in e) return (Fo[t] = o);
  }
  return t;
}
const na = 'http://www.w3.org/1999/xlink';
function ra(e, t, n, r, s, o = bp(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(na, t.slice(6, t.length))
      : e.setAttributeNS(na, t, n)
    : n == null || (o && !Gc(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : _n(n) ? String(n) : n);
}
function sa(e, t, n, r, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? sf(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const a = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n);
    (a !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === '' || n == null) {
    const a = typeof e[t];
    a === 'boolean'
      ? (n = Gc(n))
      : n == null && a === 'string'
        ? ((n = ''), (i = !0))
        : a === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function xg(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Sg(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const oa = Symbol('_vei');
function Eg(e, t, n, r, s = null) {
  const o = e[oa] || (e[oa] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = Cg(t);
    if (r) {
      const f = (o[t] = Rg(r, s));
      xg(e, a, f, l);
    } else i && (Sg(e, a, i, l), (o[t] = void 0));
  }
}
const ia = /(?:Once|Passive|Capture)$/;
function Cg(e) {
  let t;
  if (ia.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(ia)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : Un(e.slice(2)), t];
}
let Io = 0;
const Pg = Promise.resolve(),
  kg = () => Io || (Pg.then(() => (Io = 0)), (Io = Date.now()));
function Rg(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    yt(Tg(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = kg()), n;
}
function Tg(e, t) {
  if (X(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const la = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Og = (e, t, n, r, s, o) => {
    const i = s === 'svg';
    t === 'class'
      ? mg(e, r, i)
      : t === 'style'
        ? bg(e, n, r)
        : Vs(t)
          ? Bi(t) || Eg(e, t, n, r, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Ag(e, t, r, i)
              )
            ? (sa(e, t, r),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                ra(e, t, r, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !Ce(r))
              ? sa(e, pt(t), r, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = r)
                  : t === 'false-value' && (e._falseValue = r),
                ra(e, t, r, i));
  };
function Ag(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && la(t) && te(n)));
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const s = e.tagName;
    if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE') return !1;
  }
  return la(t) && Ce(n) ? !1 : t in e;
}
const Lg = Te({ patchProp: Og }, cg);
let aa;
function Mg() {
  return aa || (aa = Ah(Lg));
}
const Fg = (...e) => {
  const t = Mg().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = jg(r);
      if (!s) return;
      const o = t._component;
      !te(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = '');
      const i = n(s, !1, Ig(s));
      return (
        s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), i
      );
    }),
    t
  );
};
function Ig(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function jg(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
function rl(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: !0 }), e;
}
const Nn = pu(!1);
let _i;
function $g(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    [];
  return {
    browser: n[5] || n[3] || n[1] || '',
    version: n[4] || n[2] || '0',
    platform: t[0] || '',
  };
}
function Dg(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  );
}
const lf = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0;
function Ng(e) {
  const t = e.toLowerCase(),
    n = Dg(t),
    r = $g(t, n),
    s = {
      mobile: !1,
      desktop: !1,
      cordova: !1,
      capacitor: !1,
      nativeMobile: !1,
      electron: !1,
      bex: !1,
      linux: !1,
      mac: !1,
      win: !1,
      cros: !1,
      chrome: !1,
      firefox: !1,
      opera: !1,
      safari: !1,
      vivaldi: !1,
      edge: !1,
      edgeChromium: !1,
      ie: !1,
      webkit: !1,
      android: !1,
      ios: !1,
      ipad: !1,
      iphone: !1,
      ipod: !1,
      kindle: !1,
      winphone: !1,
      blackberry: !1,
      playbook: !1,
      silk: !1,
    };
  r.browser &&
    ((s[r.browser] = !0), (s.version = r.version), (s.versionNumber = parseInt(r.version, 10))),
    r.platform && (s[r.platform] = !0);
  const o =
    s.android ||
    s.ios ||
    s.bb ||
    s.blackberry ||
    s.ipad ||
    s.iphone ||
    s.ipod ||
    s.kindle ||
    s.playbook ||
    s.silk ||
    s['windows phone'];
  if (
    (o === !0 || t.indexOf('mobile') !== -1 ? (s.mobile = !0) : (s.desktop = !0),
    s['windows phone'] && ((s.winphone = !0), delete s['windows phone']),
    s.edga || s.edgios || s.edg
      ? ((s.edge = !0), (r.browser = 'edge'))
      : s.crios
        ? ((s.chrome = !0), (r.browser = 'chrome'))
        : s.fxios && ((s.firefox = !0), (r.browser = 'firefox')),
    (s.ipod || s.ipad || s.iphone) && (s.ios = !0),
    s.vivaldi && ((r.browser = 'vivaldi'), (s.vivaldi = !0)),
    (s.chrome || s.opr || s.safari || s.vivaldi || (s.mobile === !0 && s.ios !== !0 && o !== !0)) &&
      (s.webkit = !0),
    s.opr && ((r.browser = 'opera'), (s.opera = !0)),
    s.safari &&
      (s.blackberry || s.bb
        ? ((r.browser = 'blackberry'), (s.blackberry = !0))
        : s.playbook
          ? ((r.browser = 'playbook'), (s.playbook = !0))
          : s.android
            ? ((r.browser = 'android'), (s.android = !0))
            : s.kindle
              ? ((r.browser = 'kindle'), (s.kindle = !0))
              : s.silk && ((r.browser = 'silk'), (s.silk = !0))),
    (s.name = r.browser),
    (s.platform = r.platform),
    t.indexOf('electron') !== -1)
  )
    s.electron = !0;
  else if (document.location.href.indexOf('-extension://') !== -1) s.bex = !0;
  else {
    if (
      (window.Capacitor !== void 0
        ? ((s.capacitor = !0), (s.nativeMobile = !0), (s.nativeMobileWrapper = 'capacitor'))
        : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
          ((s.cordova = !0), (s.nativeMobile = !0), (s.nativeMobileWrapper = 'cordova')),
      Nn.value === !0 && (_i = { is: { ...s } }),
      lf === !0 &&
        s.mac === !0 &&
        ((s.desktop === !0 && s.safari === !0) ||
          (s.nativeMobile === !0 && s.android !== !0 && s.ios !== !0 && s.ipad !== !0)))
    ) {
      delete s.mac, delete s.desktop;
      const i = Math.min(window.innerHeight, window.innerWidth) > 414 ? 'ipad' : 'iphone';
      Object.assign(s, { mobile: !0, ios: !0, platform: i, [i]: !0 });
    }
    s.mobile !== !0 &&
      window.navigator.userAgentData &&
      window.navigator.userAgentData.mobile &&
      (delete s.desktop, (s.mobile = !0));
  }
  return s;
}
const ca = navigator.userAgent || navigator.vendor || window.opera,
  Hg = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  Lt = {
    userAgent: ca,
    is: Ng(ca),
    has: { touch: lf },
    within: { iframe: window.self !== window.top },
  },
  yi = {
    install(e) {
      const { $q: t } = e;
      Nn.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, Lt), (Nn.value = !1);
          }),
          (t.platform = gr(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  rl(Lt.has, 'webStorage', () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Object.assign(yi, Lt),
    Nn.value === !0 && (Object.assign(yi, _i, Hg), (_i = null));
}
function M0(e) {
  return Ys(Xs(e));
}
function F0(e) {
  return Ys(e);
}
const so = (e, t) => {
    const n = gr(e);
    for (const r in e)
      rl(
        t,
        r,
        () => n[r],
        (s) => {
          n[r] = s;
        },
      );
    return t;
  },
  cr = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign(cr, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 },
      });
    },
  });
  window.addEventListener('qtest', null, e), window.removeEventListener('qtest', null, e);
} catch {}
function Gr() {}
function I0(e) {
  return e.button === 0;
}
function j0(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
        ? (e = e.changedTouches[0])
        : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function $0(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === 'HTML')) return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function D0(e) {
  e.stopPropagation();
}
function ua(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function N0(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function H0(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0), r.addEventListener('dragstart', ua, cr.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented, r.removeEventListener('dragstart', ua, cr.notPassiveCapture);
        };
  e.querySelectorAll('a, img').forEach(n);
}
function B0(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((s) => {
      s[0].addEventListener(s[1], e[s[2]], cr[s[3]]);
    });
}
function U0(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], cr[r[3]]);
    }),
    (e[n] = void 0));
}
function Bg(e, t = 250, n) {
  let r = null;
  function s() {
    const o = arguments,
      i = () => {
        (r = null), e.apply(this, o);
      };
    r !== null && clearTimeout(r), (r = setTimeout(i, t));
  }
  return (
    (s.cancel = () => {
      r !== null && clearTimeout(r);
    }),
    s
  );
}
const jo = ['sm', 'md', 'lg', 'xl'],
  { passive: fa } = cr,
  Ug = so(
    {
      width: 0,
      height: 0,
      name: 'xs',
      sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 },
      lt: { sm: !0, md: !0, lg: !0, xl: !0 },
      gt: { xs: !1, sm: !1, md: !1, lg: !1 },
      xs: !0,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
    },
    {
      setSizes: Gr,
      setDebounce: Gr,
      install({ $q: e, onSSRHydrated: t }) {
        if (((e.screen = this), this.__installed === !0)) {
          e.config.screen !== void 0 &&
            (e.config.screen.bodyClasses === !1
              ? document.body.classList.remove(`screen--${this.name}`)
              : this.__update(!0));
          return;
        }
        const { visualViewport: n } = window,
          r = n || window,
          s = document.scrollingElement || document.documentElement,
          o =
            n === void 0 || Lt.is.mobile === !0
              ? () => [
                  Math.max(window.innerWidth, s.clientWidth),
                  Math.max(window.innerHeight, s.clientHeight),
                ]
              : () => [
                  n.width * n.scale + window.innerWidth - s.clientWidth,
                  n.height * n.scale + window.innerHeight - s.clientHeight,
                ],
          i = e.config.screen?.bodyClasses === !0;
        this.__update = (u) => {
          const [h, g] = o();
          if ((g !== this.height && (this.height = g), h !== this.width)) this.width = h;
          else if (u !== !0) return;
          let x = this.sizes;
          (this.gt.xs = h >= x.sm),
            (this.gt.sm = h >= x.md),
            (this.gt.md = h >= x.lg),
            (this.gt.lg = h >= x.xl),
            (this.lt.sm = h < x.sm),
            (this.lt.md = h < x.md),
            (this.lt.lg = h < x.lg),
            (this.lt.xl = h < x.xl),
            (this.xs = this.lt.sm),
            (this.sm = this.gt.xs === !0 && this.lt.md === !0),
            (this.md = this.gt.sm === !0 && this.lt.lg === !0),
            (this.lg = this.gt.md === !0 && this.lt.xl === !0),
            (this.xl = this.gt.lg),
            (x =
              (this.xs === !0 && 'xs') ||
              (this.sm === !0 && 'sm') ||
              (this.md === !0 && 'md') ||
              (this.lg === !0 && 'lg') ||
              'xl'),
            x !== this.name &&
              (i === !0 &&
                (document.body.classList.remove(`screen--${this.name}`),
                document.body.classList.add(`screen--${x}`)),
              (this.name = x));
        };
        let a,
          l = {},
          f = 16;
        (this.setSizes = (u) => {
          jo.forEach((h) => {
            u[h] !== void 0 && (l[h] = u[h]);
          });
        }),
          (this.setDebounce = (u) => {
            f = u;
          });
        const c = () => {
          const u = getComputedStyle(document.body);
          u.getPropertyValue('--q-size-sm') &&
            jo.forEach((h) => {
              this.sizes[h] = parseInt(u.getPropertyValue(`--q-size-${h}`), 10);
            }),
            (this.setSizes = (h) => {
              jo.forEach((g) => {
                h[g] && (this.sizes[g] = h[g]);
              }),
                this.__update(!0);
            }),
            (this.setDebounce = (h) => {
              a !== void 0 && r.removeEventListener('resize', a, fa),
                (a = h > 0 ? Bg(this.__update, h) : this.__update),
                r.addEventListener('resize', a, fa);
            }),
            this.setDebounce(f),
            Object.keys(l).length !== 0 ? (this.setSizes(l), (l = void 0)) : this.__update(),
            i === !0 && this.name === 'xs' && document.body.classList.add('screen--xs');
        };
        Nn.value === !0 ? t.push(c) : c();
      },
    },
  ),
  Ie = so(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (Ie.mode = e),
          e === 'auto'
            ? (Ie.__media === void 0 &&
                ((Ie.__media = window.matchMedia('(prefers-color-scheme: dark)')),
                (Ie.__updateMedia = () => {
                  Ie.set('auto');
                }),
                Ie.__media.addListener(Ie.__updateMedia)),
              (e = Ie.__media.matches))
            : Ie.__media !== void 0 &&
              (Ie.__media.removeListener(Ie.__updateMedia), (Ie.__media = void 0)),
          (Ie.isActive = e === !0),
          document.body.classList.remove(`body--${e === !0 ? 'light' : 'dark'}`),
          document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`);
      },
      toggle() {
        Ie.set(Ie.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const { dark: n } = e.config;
        (e.dark = this), this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
      },
    },
  );
function qg(e, t, n = document.body) {
  if (typeof e != 'string') throw new TypeError('Expected a string as propName');
  if (typeof t != 'string') throw new TypeError('Expected a string as value');
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element');
  n.style.setProperty(`--q-${e}`, t);
}
let af = !1;
function Vg(e) {
  af = e.isComposing === !0;
}
function Wg(e) {
  return af === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function q0(e, t) {
  return Wg(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function cf(e) {
  if (e.ios === !0) return 'ios';
  if (e.android === !0) return 'android';
}
function zg({ is: e, has: t, within: n }, r) {
  const s = [e.desktop === !0 ? 'desktop' : 'mobile', `${t.touch === !1 ? 'no-' : ''}touch`];
  if (e.mobile === !0) {
    const o = cf(e);
    o !== void 0 && s.push('platform-' + o);
  }
  if (e.nativeMobile === !0) {
    const o = e.nativeMobileWrapper;
    s.push(o),
      s.push('native-mobile'),
      e.ios === !0 &&
        (r[o] === void 0 || r[o].iosStatusBarPadding !== !1) &&
        s.push('q-ios-padding');
  } else e.electron === !0 ? s.push('electron') : e.bex === !0 && s.push('bex');
  return n.iframe === !0 && s.push('within-iframe'), s;
}
function Kg() {
  const { is: e } = Lt,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, ' ').split(' '));
  if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete('mobile'), n.delete('platform-ios'), n.delete('platform-android'), n.add('desktop');
    else if (e.mobile === !0) {
      n.delete('desktop'), n.add('mobile'), n.delete('platform-ios'), n.delete('platform-android');
      const s = cf(e);
      s !== void 0 && n.add(`platform-${s}`);
    }
  }
  Lt.has.touch === !0 && (n.delete('no-touch'), n.add('touch')),
    Lt.within.iframe === !0 && n.add('within-iframe');
  const r = Array.from(n).join(' ');
  t !== r && (document.body.className = r);
}
function Gg(e) {
  for (const t in e) qg(t, e[t]);
}
const Jg = {
    install(e) {
      if (this.__installed !== !0) {
        if (Nn.value === !0) Kg();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && Gg(t.config.brand);
          const n = zg(Lt, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        Lt.is.ios === !0 && document.body.addEventListener('touchstart', Gr),
          window.addEventListener('keydown', Vg, !0);
      }
    },
  },
  uf = () => !0;
function Yg(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/';
}
function Qg(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substring(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substring(0, e.length - 1)),
    '#' + e
  );
}
function Xg(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === '*') return uf;
  const t = ['#/'];
  return (
    Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(Yg).map(Qg)),
    () => t.includes(window.location.hash)
  );
}
const Zg = {
    __history: [],
    add: Gr,
    remove: Gr,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = Lt.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? 'cordova' : 'capacitor'];
      if (
        r?.backButton === !1 ||
        (n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (i) => {
        i.condition === void 0 && (i.condition = uf), this.__history.push(i);
      }),
        (this.remove = (i) => {
          const a = this.__history.indexOf(i);
          a >= 0 && this.__history.splice(a, 1);
        });
      const s = Xg(Object.assign({ backButtonExit: !0 }, r)),
        o = () => {
          if (this.__history.length) {
            const i = this.__history[this.__history.length - 1];
            i.condition() === !0 && (this.__history.pop(), i.handler());
          } else s() === !0 ? navigator.app.exitApp() : window.history.back();
        };
      t === !0
        ? document.addEventListener('deviceready', () => {
            document.addEventListener('backbutton', o, !1);
          })
        : window.Capacitor.Plugins.App.addListener('backButton', o);
    },
  },
  da = {
    isoName: 'en-US',
    nativeName: 'English (US)',
    label: {
      clear: 'Clear',
      ok: 'OK',
      cancel: 'Cancel',
      close: 'Close',
      set: 'Set',
      select: 'Select',
      reset: 'Reset',
      remove: 'Remove',
      update: 'Update',
      create: 'Create',
      search: 'Search',
      filter: 'Filter',
      refresh: 'Refresh',
      expand: (e) => (e ? `Expand "${e}"` : 'Expand'),
      collapse: (e) => (e ? `Collapse "${e}"` : 'Collapse'),
    },
    date: {
      days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      months:
        'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_',
        ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      firstDayOfWeek: 0,
      format24h: !1,
      pluralDay: 'days',
      prevMonth: 'Previous month',
      nextMonth: 'Next month',
      prevYear: 'Previous year',
      nextYear: 'Next year',
      today: 'Today',
      prevRangeYears: (e) => `Previous ${e} years`,
      nextRangeYears: (e) => `Next ${e} years`,
    },
    table: {
      noData: 'No data available',
      noResults: 'No matching records found',
      loading: 'Loading...',
      selectedRecords: (e) =>
        e === 1 ? '1 record selected.' : (e === 0 ? 'No' : e) + ' records selected.',
      recordsPerPage: 'Records per page:',
      allRows: 'All',
      pagination: (e, t, n) => e + '-' + t + ' of ' + n,
      columns: 'Columns',
    },
    pagination: {
      first: 'First page',
      prev: 'Previous page',
      next: 'Next page',
      last: 'Last page',
    },
    editor: {
      url: 'URL',
      bold: 'Bold',
      italic: 'Italic',
      strikethrough: 'Strikethrough',
      underline: 'Underline',
      unorderedList: 'Unordered List',
      orderedList: 'Ordered List',
      subscript: 'Subscript',
      superscript: 'Superscript',
      hyperlink: 'Hyperlink',
      toggleFullscreen: 'Toggle Fullscreen',
      quote: 'Quote',
      left: 'Left align',
      center: 'Center align',
      right: 'Right align',
      justify: 'Justify align',
      print: 'Print',
      outdent: 'Decrease indentation',
      indent: 'Increase indentation',
      removeFormat: 'Remove formatting',
      formatting: 'Formatting',
      fontSize: 'Font Size',
      align: 'Align',
      hr: 'Insert Horizontal Rule',
      undo: 'Undo',
      redo: 'Redo',
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      heading3: 'Heading 3',
      heading4: 'Heading 4',
      heading5: 'Heading 5',
      heading6: 'Heading 6',
      paragraph: 'Paragraph',
      code: 'Code',
      size1: 'Very small',
      size2: 'A bit small',
      size3: 'Normal',
      size4: 'Medium-large',
      size5: 'Big',
      size6: 'Very big',
      size7: 'Maximum',
      defaultFont: 'Default Font',
      viewSource: 'View Source',
    },
    tree: { noNodes: 'No nodes available', noResults: 'No matching nodes found' },
  };
function pa() {
  const e =
    Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0
      ? navigator.languages[0]
      : navigator.language;
  if (typeof e == 'string')
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
            ? t.toUpperCase()
            : t[0].toUpperCase() + t.slice(1).toLowerCase(),
      )
      .join('-');
}
const ln = so(
    { __qLang: {} },
    {
      getLocale: pa,
      set(e = da, t) {
        const n = { ...e, rtl: e.rtl === !0, getLocale: pa };
        {
          if (
            ((n.set = ln.set), ln.__langConfig === void 0 || ln.__langConfig.noHtmlAttrs !== !0)
          ) {
            const r = document.documentElement;
            r.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'), r.setAttribute('lang', n.isoName);
          }
          Object.assign(ln.__qLang, n);
        }
      },
      install({ $q: e, lang: t, ssrContext: n }) {
        (e.lang = ln.__qLang),
          (ln.__langConfig = e.config.lang),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : ((this.props = new Proxy(this.__qLang, {
                get() {
                  return Reflect.get(...arguments);
                },
                ownKeys(r) {
                  return Reflect.ownKeys(r).filter((s) => s !== 'set' && s !== 'getLocale');
                },
              })),
              this.set(t || da));
      },
    },
  ),
  em = {
    name: 'material-icons',
    type: { positive: 'check_circle', negative: 'warning', info: 'info', warning: 'priority_high' },
    arrow: {
      up: 'arrow_upward',
      right: 'arrow_forward',
      down: 'arrow_downward',
      left: 'arrow_back',
      dropdown: 'arrow_drop_down',
    },
    chevron: { left: 'chevron_left', right: 'chevron_right' },
    colorPicker: { spectrum: 'gradient', tune: 'tune', palette: 'style' },
    pullToRefresh: { icon: 'refresh' },
    carousel: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
      navigationIcon: 'lens',
    },
    chip: { remove: 'cancel', selected: 'check' },
    datetime: {
      arrowLeft: 'chevron_left',
      arrowRight: 'chevron_right',
      now: 'access_time',
      today: 'today',
    },
    editor: {
      bold: 'format_bold',
      italic: 'format_italic',
      strikethrough: 'strikethrough_s',
      underline: 'format_underlined',
      unorderedList: 'format_list_bulleted',
      orderedList: 'format_list_numbered',
      subscript: 'vertical_align_bottom',
      superscript: 'vertical_align_top',
      hyperlink: 'link',
      toggleFullscreen: 'fullscreen',
      quote: 'format_quote',
      left: 'format_align_left',
      center: 'format_align_center',
      right: 'format_align_right',
      justify: 'format_align_justify',
      print: 'print',
      outdent: 'format_indent_decrease',
      indent: 'format_indent_increase',
      removeFormat: 'format_clear',
      formatting: 'text_format',
      fontSize: 'format_size',
      align: 'format_align_left',
      hr: 'remove',
      undo: 'undo',
      redo: 'redo',
      heading: 'format_size',
      code: 'code',
      size: 'format_size',
      font: 'font_download',
      viewSource: 'code',
    },
    expansionItem: { icon: 'keyboard_arrow_down', denseIcon: 'arrow_drop_down' },
    fab: { icon: 'add', activeIcon: 'close' },
    field: { clear: 'cancel', error: 'error' },
    pagination: {
      first: 'first_page',
      prev: 'keyboard_arrow_left',
      next: 'keyboard_arrow_right',
      last: 'last_page',
    },
    rating: { icon: 'grade' },
    stepper: { done: 'check', active: 'edit', error: 'warning' },
    tabs: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
    },
    table: {
      arrowUp: 'arrow_upward',
      warning: 'warning',
      firstPage: 'first_page',
      prevPage: 'chevron_left',
      nextPage: 'chevron_right',
      lastPage: 'last_page',
    },
    tree: { icon: 'play_arrow' },
    uploader: {
      done: 'done',
      clear: 'clear',
      add: 'add_box',
      upload: 'cloud_upload',
      removeQueue: 'clear_all',
      removeUploaded: 'done_all',
    },
  },
  Is = so(
    { iconMapFn: null, __qIconSet: {} },
    {
      set(e, t) {
        const n = { ...e };
        (n.set = Is.set), Object.assign(Is.__qIconSet, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__qIconSet),
          rl(
            e,
            'iconMapFn',
            () => this.iconMapFn,
            (r) => {
              this.iconMapFn = r;
            },
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : ((this.props = new Proxy(this.__qIconSet, {
                get() {
                  return Reflect.get(...arguments);
                },
                ownKeys(r) {
                  return Reflect.ownKeys(r).filter((s) => s !== 'set');
                },
              })),
              this.set(t || em));
      },
    },
  ),
  tm = '_q_',
  V0 = '_q_l_',
  W0 = '_q_pc_';
function z0() {}
const ha = {};
let ff = !1;
function nm() {
  ff = !0;
}
function ga(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0;
}
const ma = [yi, Jg, Ie, Ug, Zg, ln, Is];
function va(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function rm(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(tm, n.$q),
    va(n, ma),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        ga(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        ga(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      va(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == 'function' && ma.includes(r) === !1,
        ),
      ),
    Nn.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
const sm = function (e, t = {}) {
    const n = { version: '2.18.1' };
    ff === !1
      ? (t.config !== void 0 && Object.assign(ha, t.config), (n.config = { ...ha }), nm())
      : (n.config = t.config || {}),
      rm(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
  },
  om = { name: 'Quasar', version: '2.18.1', install: sm, lang: ln, iconSet: Is },
  im = Xs({
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const r = hh('router-view');
        return Qu(), Zu(r);
      };
    },
  }),
  lm = (e) => e,
  am = lm;
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const Kn = typeof document < 'u';
function df(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function cm(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && df(e.default));
}
const ce = Object.assign;
function $o(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = bt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ar = () => {},
  bt = Array.isArray,
  pf = /#/g,
  um = /&/g,
  fm = /\//g,
  dm = /=/g,
  pm = /\?/g,
  hf = /\+/g,
  hm = /%5B/g,
  gm = /%5D/g,
  gf = /%5E/g,
  mm = /%60/g,
  mf = /%7B/g,
  vm = /%7C/g,
  vf = /%7D/g,
  _m = /%20/g;
function sl(e) {
  return encodeURI('' + e)
    .replace(vm, '|')
    .replace(hm, '[')
    .replace(gm, ']');
}
function ym(e) {
  return sl(e).replace(mf, '{').replace(vf, '}').replace(gf, '^');
}
function bi(e) {
  return sl(e)
    .replace(hf, '%2B')
    .replace(_m, '+')
    .replace(pf, '%23')
    .replace(um, '%26')
    .replace(mm, '`')
    .replace(mf, '{')
    .replace(vf, '}')
    .replace(gf, '^');
}
function bm(e) {
  return bi(e).replace(dm, '%3D');
}
function wm(e) {
  return sl(e).replace(pf, '%23').replace(pm, '%3F');
}
function xm(e) {
  return e == null ? '' : wm(e).replace(fm, '%2F');
}
function Jr(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const Sm = /\/$/,
  Em = (e) => e.replace(Sm, '');
function Do(e, t, n = '/') {
  let r,
    s = {},
    o = '',
    i = '';
  const a = t.indexOf('#');
  let l = t.indexOf('?');
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 && ((r = t.slice(0, l)), (o = t.slice(l + 1, a > -1 ? a : t.length)), (s = e(o))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = Rm(r ?? t, n)),
    { fullPath: r + (o && '?') + o + i, path: r, query: s, hash: Jr(i) }
  );
}
function Cm(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function _a(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function Pm(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    ur(t.matched[r], n.matched[s]) &&
    _f(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function ur(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function _f(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!km(e[n], t[n])) return !1;
  return !0;
}
function km(e, t) {
  return bt(e) ? ya(e, t) : bt(t) ? ya(t, e) : e === t;
}
function ya(e, t) {
  return bt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Rm(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    r = e.split('/'),
    s = r[r.length - 1];
  (s === '..' || s === '.') && r.push('');
  let o = n.length - 1,
    i,
    a;
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== '.'))
      if (a === '..') o > 1 && o--;
      else break;
  return n.slice(0, o).join('/') + '/' + r.slice(i).join('/');
}
const en = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Yr;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(Yr || (Yr = {}));
var Lr;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(Lr || (Lr = {}));
function Tm(e) {
  if (!e)
    if (Kn) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Em(e);
}
const Om = /^[^#]+#/;
function Am(e, t) {
  return e.replace(Om, '#') + t;
}
function Lm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const oo = () => ({ left: window.scrollX, top: window.scrollY });
function Mm(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = Lm(s, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function ba(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const wi = new Map();
function Fm(e, t) {
  wi.set(e, t);
}
function Im(e) {
  const t = wi.get(e);
  return wi.delete(e), t;
}
let jm = () => location.protocol + '//' + location.host;
function yf(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#');
  if (o > -1) {
    let i = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      a = s.slice(i);
    return a[0] !== '/' && (a = '/' + a), _a(a, '');
  }
  return _a(n, e) + r + s;
}
function $m(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: h }) => {
    const g = yf(e, location),
      x = n.value,
      R = t.value;
    let N = 0;
    if (h) {
      if (((n.value = g), (t.value = h), i && i === x)) {
        i = null;
        return;
      }
      N = R ? h.position - R.position : 0;
    } else r(g);
    s.forEach(($) => {
      $(n.value, x, {
        delta: N,
        type: Yr.pop,
        direction: N ? (N > 0 ? Lr.forward : Lr.back) : Lr.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(h) {
    s.push(h);
    const g = () => {
      const x = s.indexOf(h);
      x > -1 && s.splice(x, 1);
    };
    return o.push(g), g;
  }
  function c() {
    const { history: h } = window;
    h.state && h.replaceState(ce({}, h.state, { scroll: oo() }), '');
  }
  function u() {
    for (const h of o) h();
    (o = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', c);
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', c, { passive: !0 }),
    { pauseListeners: l, listen: f, destroy: u }
  );
}
function wa(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? oo() : null,
  };
}
function Dm(e) {
  const { history: t, location: n } = window,
    r = { value: yf(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function o(l, f, c) {
    const u = e.indexOf('#'),
      h = u > -1 ? (n.host && document.querySelector('base') ? e : e.slice(u)) + l : jm() + e + l;
    try {
      t[c ? 'replaceState' : 'pushState'](f, '', h), (s.value = f);
    } catch (g) {
      console.error(g), n[c ? 'replace' : 'assign'](h);
    }
  }
  function i(l, f) {
    const c = ce({}, t.state, wa(s.value.back, l, s.value.forward, !0), f, {
      position: s.value.position,
    });
    o(l, c, !0), (r.value = l);
  }
  function a(l, f) {
    const c = ce({}, s.value, t.state, { forward: l, scroll: oo() });
    o(c.current, c, !0);
    const u = ce({}, wa(r.value, l, null), { position: c.position + 1 }, f);
    o(l, u, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: i };
}
function Nm(e) {
  e = Tm(e);
  const t = Dm(e),
    n = $m(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = ce({ location: '', base: e, go: r, createHref: Am.bind(null, e) }, t, n);
  return (
    Object.defineProperty(s, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, 'state', { enumerable: !0, get: () => t.state.value }),
    s
  );
}
function Hm(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    Nm(e)
  );
}
function Bm(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function bf(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const wf = Symbol('');
var xa;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(xa || (xa = {}));
function fr(e, t) {
  return ce(new Error(), { type: e, [wf]: !0 }, t);
}
function Dt(e, t) {
  return e instanceof Error && wf in e && (t == null || !!(e.type & t));
}
const Sa = '[^/]+?',
  Um = { sensitive: !1, strict: !1, start: !0, end: !0 },
  qm = /[.+*?^${}()[\]/\\]/g;
function Vm(e, t) {
  const n = ce({}, Um, t),
    r = [];
  let s = n.start ? '^' : '';
  const o = [];
  for (const f of e) {
    const c = f.length ? [] : [90];
    n.strict && !f.length && (s += '/');
    for (let u = 0; u < f.length; u++) {
      const h = f[u];
      let g = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) u || (s += '/'), (s += h.value.replace(qm, '\\$&')), (g += 40);
      else if (h.type === 1) {
        const { value: x, repeatable: R, optional: N, regexp: $ } = h;
        o.push({ name: x, repeatable: R, optional: N });
        const M = $ || Sa;
        if (M !== Sa) {
          g += 10;
          try {
            new RegExp(`(${M})`);
          } catch (O) {
            throw new Error(`Invalid custom RegExp for param "${x}" (${M}): ` + O.message);
          }
        }
        let j = R ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`;
        u || (j = N && f.length < 2 ? `(?:/${j})` : '/' + j),
          N && (j += '?'),
          (s += j),
          (g += 20),
          N && (g += -8),
          R && (g += -20),
          M === '.*' && (g += -50);
      }
      c.push(g);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const f = r.length - 1;
    r[f][r[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && !s.endsWith('/') && (s += '(?:/|$)');
  const i = new RegExp(s, n.sensitive ? '' : 'i');
  function a(f) {
    const c = f.match(i),
      u = {};
    if (!c) return null;
    for (let h = 1; h < c.length; h++) {
      const g = c[h] || '',
        x = o[h - 1];
      u[x.name] = g && x.repeatable ? g.split('/') : g;
    }
    return u;
  }
  function l(f) {
    let c = '',
      u = !1;
    for (const h of e) {
      (!u || !c.endsWith('/')) && (c += '/'), (u = !1);
      for (const g of h)
        if (g.type === 0) c += g.value;
        else if (g.type === 1) {
          const { value: x, repeatable: R, optional: N } = g,
            $ = x in f ? f[x] : '';
          if (bt($) && !R)
            throw new Error(
              `Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const M = bt($) ? $.join('/') : $;
          if (!M)
            if (N) h.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (u = !0));
            else throw new Error(`Missing required param "${x}"`);
          c += M;
        }
    }
    return c || '/';
  }
  return { re: i, score: r, keys: o, parse: a, stringify: l };
}
function Wm(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function xf(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = Wm(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Ea(r)) return 1;
    if (Ea(s)) return -1;
  }
  return s.length - r.length;
}
function Ea(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const zm = { type: 0, value: '' },
  Km = /[a-zA-Z0-9_]/;
function Gm(e) {
  if (!e) return [[]];
  if (e === '/') return [[zm]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(g) {
    throw new Error(`ERR (${n})/"${f}": ${g}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let a = 0,
    l,
    f = '',
    c = '';
  function u() {
    f &&
      (n === 0
        ? o.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: f,
              regexp: c,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?',
            }))
          : t('Invalid state to consume buffer'),
      (f = ''));
  }
  function h() {
    f += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === '/' ? (f && u(), i()) : l === ':' ? (u(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        l === '('
          ? (n = 2)
          : Km.test(l)
            ? h()
            : (u(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--);
        break;
      case 2:
        l === ')' ? (c[c.length - 1] == '\\' ? (c = c.slice(0, -1) + l) : (n = 3)) : (c += l);
        break;
      case 3:
        u(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (c = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), u(), i(), s;
}
function Jm(e, t, n) {
  const r = Vm(Gm(e.path), n),
    s = ce(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Ym(e, t) {
  const n = [],
    r = new Map();
  t = Ra({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(u) {
    return r.get(u);
  }
  function o(u, h, g) {
    const x = !g,
      R = Pa(u);
    R.aliasOf = g && g.record;
    const N = Ra(t, u),
      $ = [R];
    if ('alias' in u) {
      const O = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const U of O)
        $.push(
          Pa(
            ce({}, R, {
              components: g ? g.record.components : R.components,
              path: U,
              aliasOf: g ? g.record : R,
            }),
          ),
        );
    }
    let M, j;
    for (const O of $) {
      const { path: U } = O;
      if (h && U[0] !== '/') {
        const J = h.record.path,
          K = J[J.length - 1] === '/' ? '' : '/';
        O.path = h.record.path + (U && K + U);
      }
      if (
        ((M = Jm(O, h, N)),
        g
          ? g.alias.push(M)
          : ((j = j || M), j !== M && j.alias.push(M), x && u.name && !ka(M) && i(u.name)),
        Sf(M) && l(M),
        R.children)
      ) {
        const J = R.children;
        for (let K = 0; K < J.length; K++) o(J[K], M, g && g.children[K]);
      }
      g = g || M;
    }
    return j
      ? () => {
          i(j);
        }
      : Ar;
  }
  function i(u) {
    if (bf(u)) {
      const h = r.get(u);
      h && (r.delete(u), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
    } else {
      const h = n.indexOf(u);
      h > -1 &&
        (n.splice(h, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    const h = Zm(u, n);
    n.splice(h, 0, u), u.record.name && !ka(u) && r.set(u.record.name, u);
  }
  function f(u, h) {
    let g,
      x = {},
      R,
      N;
    if ('name' in u && u.name) {
      if (((g = r.get(u.name)), !g)) throw fr(1, { location: u });
      (N = g.record.name),
        (x = ce(
          Ca(
            h.params,
            g.keys
              .filter((j) => !j.optional)
              .concat(g.parent ? g.parent.keys.filter((j) => j.optional) : [])
              .map((j) => j.name),
          ),
          u.params &&
            Ca(
              u.params,
              g.keys.map((j) => j.name),
            ),
        )),
        (R = g.stringify(x));
    } else if (u.path != null)
      (R = u.path), (g = n.find((j) => j.re.test(R))), g && ((x = g.parse(R)), (N = g.record.name));
    else {
      if (((g = h.name ? r.get(h.name) : n.find((j) => j.re.test(h.path))), !g))
        throw fr(1, { location: u, currentLocation: h });
      (N = g.record.name), (x = ce({}, h.params, u.params)), (R = g.stringify(x));
    }
    const $ = [];
    let M = g;
    for (; M; ) $.unshift(M.record), (M = M.parent);
    return { name: N, path: R, params: x, matched: $, meta: Xm($) };
  }
  e.forEach((u) => o(u));
  function c() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: o,
    resolve: f,
    removeRoute: i,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: s,
  };
}
function Ca(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Pa(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Qm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
  return Object.defineProperty(t, 'mods', { value: {} }), t;
}
function Qm(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n;
  return t;
}
function ka(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Xm(e) {
  return e.reduce((t, n) => ce(t, n.meta), {});
}
function Ra(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Zm(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const o = (n + r) >> 1;
    xf(e, t[o]) < 0 ? (r = o) : (n = o + 1);
  }
  const s = ev(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function ev(e) {
  let t = e;
  for (; (t = t.parent); ) if (Sf(t) && xf(e, t) === 0) return t;
}
function Sf({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function tv(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const n = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(hf, ' '),
      o = s.indexOf('='),
      i = Jr(o < 0 ? s : s.slice(0, o)),
      a = o < 0 ? null : Jr(s.slice(o + 1));
    if (i in t) {
      let l = t[i];
      bt(l) || (l = t[i] = [l]), l.push(a);
    } else t[i] = a;
  }
  return t;
}
function Ta(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = bm(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (bt(r) ? r.map((s) => s && bi(s)) : [r && bi(r)]).forEach((s) => {
      s !== void 0 && ((t += (t.length ? '&' : '') + n), s != null && (t += '=' + s));
    });
  }
  return t;
}
function nv(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = bt(r) ? r.map((s) => (s == null ? null : '' + s)) : r == null ? r : '' + r);
  }
  return t;
}
const rv = Symbol(''),
  Oa = Symbol(''),
  ol = Symbol(''),
  Ef = Symbol(''),
  xi = Symbol('');
function yr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function an(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const f = (h) => {
          h === !1
            ? l(fr(4, { from: n, to: t }))
            : h instanceof Error
              ? l(h)
              : Bm(h)
                ? l(fr(2, { from: t, to: h }))
                : (i && r.enterCallbacks[s] === i && typeof h == 'function' && i.push(h), a());
        },
        c = o(() => e.call(r && r.instances[s], t, n, f));
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(f)), u.catch((h) => l(h));
    });
}
function No(e, t, n, r, s = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
        if (df(l)) {
          const f = (l.__vccOpts || l)[t];
          f && o.push(an(f, n, r, i, a, s));
        } else {
          let f = l();
          o.push(() =>
            f.then((c) => {
              if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
              const u = cm(c) ? c.default : c;
              (i.mods[a] = c), (i.components[a] = u);
              const h = (u.__vccOpts || u)[t];
              return h && an(h, n, r, i, a, s)();
            }),
          );
        }
    }
  return o;
}
function Aa(e) {
  const t = Gt(ol),
    n = Gt(Ef),
    r = gt(() => {
      const l = er(e.to);
      return t.resolve(l);
    }),
    s = gt(() => {
      const { matched: l } = r.value,
        { length: f } = l,
        c = l[f - 1],
        u = n.matched;
      if (!c || !u.length) return -1;
      const h = u.findIndex(ur.bind(null, c));
      if (h > -1) return h;
      const g = La(l[f - 2]);
      return f > 1 && La(c) === g && u[u.length - 1].path !== g
        ? u.findIndex(ur.bind(null, l[f - 2]))
        : h;
    }),
    o = gt(() => s.value > -1 && av(n.params, r.value.params)),
    i = gt(() => s.value > -1 && s.value === n.matched.length - 1 && _f(n.params, r.value.params));
  function a(l = {}) {
    if (lv(l)) {
      const f = t[er(e.replace) ? 'replace' : 'push'](er(e.to)).catch(Ar);
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => f),
        f
      );
    }
    return Promise.resolve();
  }
  return { route: r, href: gt(() => r.value.href), isActive: o, isExactActive: i, navigate: a };
}
function sv(e) {
  return e.length === 1 ? e[0] : e;
}
const ov = Xs({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: Aa,
    setup(e, { slots: t }) {
      const n = gr(Aa(e)),
        { options: r } = Gt(ol),
        s = gt(() => ({
          [Ma(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [Ma(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }));
      return () => {
        const o = t.default && sv(t.default(n));
        return e.custom
          ? o
          : nl(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o,
            );
      };
    },
  }),
  iv = ov;
function lv(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function av(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == 'string') {
      if (r !== s) return !1;
    } else if (!bt(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1;
  }
  return !0;
}
function La(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Ma = (e, t, n) => e ?? t ?? n,
  cv = Xs({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Gt(xi),
        s = gt(() => e.route || r.value),
        o = Gt(Oa, 0),
        i = gt(() => {
          let f = er(o);
          const { matched: c } = s.value;
          let u;
          for (; (u = c[f]) && !u.components; ) f++;
          return f;
        }),
        a = gt(() => s.value.matched[i.value]);
      bs(
        Oa,
        gt(() => i.value + 1),
      ),
        bs(rv, a),
        bs(xi, s);
      const l = pu();
      return (
        ws(
          () => [l.value, a.value, e.name],
          ([f, c, u], [h, g, x]) => {
            c &&
              ((c.instances[u] = f),
              g &&
                g !== c &&
                f &&
                f === h &&
                (c.leaveGuards.size || (c.leaveGuards = g.leaveGuards),
                c.updateGuards.size || (c.updateGuards = g.updateGuards))),
              f && c && (!g || !ur(c, g) || !h) && (c.enterCallbacks[u] || []).forEach((R) => R(f));
          },
          { flush: 'post' },
        ),
        () => {
          const f = s.value,
            c = e.name,
            u = a.value,
            h = u && u.components[c];
          if (!h) return Fa(n.default, { Component: h, route: f });
          const g = u.props[c],
            x = g ? (g === !0 ? f.params : typeof g == 'function' ? g(f) : g) : null,
            R = nl(
              h,
              ce({}, x, t, {
                onVnodeUnmounted: (N) => {
                  N.component.isUnmounted && (u.instances[c] = null);
                },
                ref: l,
              }),
            );
          return Fa(n.default, { Component: R, route: f }) || R;
        }
      );
    },
  });
function Fa(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const uv = cv;
function fv(e) {
  const t = Ym(e.routes, e),
    n = e.parseQuery || tv,
    r = e.stringifyQuery || Ta,
    s = e.history,
    o = yr(),
    i = yr(),
    a = yr(),
    l = Up(en);
  let f = en;
  Kn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = $o.bind(null, (y) => '' + y),
    u = $o.bind(null, xm),
    h = $o.bind(null, Jr);
  function g(y, T) {
    let k, I;
    return bf(y) ? ((k = t.getRecordMatcher(y)), (I = T)) : (I = y), t.addRoute(I, k);
  }
  function x(y) {
    const T = t.getRecordMatcher(y);
    T && t.removeRoute(T);
  }
  function R() {
    return t.getRoutes().map((y) => y.record);
  }
  function N(y) {
    return !!t.getRecordMatcher(y);
  }
  function $(y, T) {
    if (((T = ce({}, T || l.value)), typeof y == 'string')) {
      const m = Do(n, y, T.path),
        _ = t.resolve({ path: m.path }, T),
        b = s.createHref(m.fullPath);
      return ce(m, _, { params: h(_.params), hash: Jr(m.hash), redirectedFrom: void 0, href: b });
    }
    let k;
    if (y.path != null) k = ce({}, y, { path: Do(n, y.path, T.path).path });
    else {
      const m = ce({}, y.params);
      for (const _ in m) m[_] == null && delete m[_];
      (k = ce({}, y, { params: u(m) })), (T.params = u(T.params));
    }
    const I = t.resolve(k, T),
      v = y.hash || '';
    I.params = c(h(I.params));
    const d = Cm(r, ce({}, y, { hash: ym(v), path: I.path })),
      p = s.createHref(d);
    return ce({ fullPath: d, hash: v, query: r === Ta ? nv(y.query) : y.query || {} }, I, {
      redirectedFrom: void 0,
      href: p,
    });
  }
  function M(y) {
    return typeof y == 'string' ? Do(n, y, l.value.path) : ce({}, y);
  }
  function j(y, T) {
    if (f !== y) return fr(8, { from: T, to: y });
  }
  function O(y) {
    return K(y);
  }
  function U(y) {
    return O(ce(M(y), { replace: !0 }));
  }
  function J(y) {
    const T = y.matched[y.matched.length - 1];
    if (T && T.redirect) {
      const { redirect: k } = T;
      let I = typeof k == 'function' ? k(y) : k;
      return (
        typeof I == 'string' &&
          ((I = I.includes('?') || I.includes('#') ? (I = M(I)) : { path: I }), (I.params = {})),
        ce({ query: y.query, hash: y.hash, params: I.path != null ? {} : y.params }, I)
      );
    }
  }
  function K(y, T) {
    const k = (f = $(y)),
      I = l.value,
      v = y.state,
      d = y.force,
      p = y.replace === !0,
      m = J(k);
    if (m)
      return K(
        ce(M(m), { state: typeof m == 'object' ? ce({}, v, m.state) : v, force: d, replace: p }),
        T || k,
      );
    const _ = k;
    _.redirectedFrom = T;
    let b;
    return (
      !d && Pm(r, I, k) && ((b = fr(16, { to: _, from: I })), ke(I, I, !0, !1)),
      (b ? Promise.resolve(b) : q(_, I))
        .catch((w) => (Dt(w) ? (Dt(w, 2) ? w : Re(w)) : ee(w, _, I)))
        .then((w) => {
          if (w) {
            if (Dt(w, 2))
              return K(
                ce({ replace: p }, M(w.to), {
                  state: typeof w.to == 'object' ? ce({}, v, w.to.state) : v,
                  force: d,
                }),
                T || _,
              );
          } else w = A(_, I, !0, p, v);
          return Y(_, I, w), w;
        })
    );
  }
  function ie(y, T) {
    const k = j(y, T);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function H(y) {
    const T = Ze.values().next().value;
    return T && typeof T.runWithContext == 'function' ? T.runWithContext(y) : y();
  }
  function q(y, T) {
    let k;
    const [I, v, d] = dv(y, T);
    k = No(I.reverse(), 'beforeRouteLeave', y, T);
    for (const m of I)
      m.leaveGuards.forEach((_) => {
        k.push(an(_, y, T));
      });
    const p = ie.bind(null, y, T);
    return (
      k.push(p),
      ye(k)
        .then(() => {
          k = [];
          for (const m of o.list()) k.push(an(m, y, T));
          return k.push(p), ye(k);
        })
        .then(() => {
          k = No(v, 'beforeRouteUpdate', y, T);
          for (const m of v)
            m.updateGuards.forEach((_) => {
              k.push(an(_, y, T));
            });
          return k.push(p), ye(k);
        })
        .then(() => {
          k = [];
          for (const m of d)
            if (m.beforeEnter)
              if (bt(m.beforeEnter)) for (const _ of m.beforeEnter) k.push(an(_, y, T));
              else k.push(an(m.beforeEnter, y, T));
          return k.push(p), ye(k);
        })
        .then(
          () => (
            y.matched.forEach((m) => (m.enterCallbacks = {})),
            (k = No(d, 'beforeRouteEnter', y, T, H)),
            k.push(p),
            ye(k)
          ),
        )
        .then(() => {
          k = [];
          for (const m of i.list()) k.push(an(m, y, T));
          return k.push(p), ye(k);
        })
        .catch((m) => (Dt(m, 8) ? m : Promise.reject(m)))
    );
  }
  function Y(y, T, k) {
    a.list().forEach((I) => H(() => I(y, T, k)));
  }
  function A(y, T, k, I, v) {
    const d = j(y, T);
    if (d) return d;
    const p = T === en,
      m = Kn ? history.state : {};
    k &&
      (I || p
        ? s.replace(y.fullPath, ce({ scroll: p && m && m.scroll }, v))
        : s.push(y.fullPath, v)),
      (l.value = y),
      ke(y, T, k, p),
      Re();
  }
  let V;
  function oe() {
    V ||
      (V = s.listen((y, T, k) => {
        if (!It.listening) return;
        const I = $(y),
          v = J(I);
        if (v) {
          K(ce(v, { replace: !0, force: !0 }), I).catch(Ar);
          return;
        }
        f = I;
        const d = l.value;
        Kn && Fm(ba(d.fullPath, k.delta), oo()),
          q(I, d)
            .catch((p) =>
              Dt(p, 12)
                ? p
                : Dt(p, 2)
                  ? (K(ce(M(p.to), { force: !0 }), I)
                      .then((m) => {
                        Dt(m, 20) && !k.delta && k.type === Yr.pop && s.go(-1, !1);
                      })
                      .catch(Ar),
                    Promise.reject())
                  : (k.delta && s.go(-k.delta, !1), ee(p, I, d)),
            )
            .then((p) => {
              (p = p || A(I, d, !1)),
                p &&
                  (k.delta && !Dt(p, 8)
                    ? s.go(-k.delta, !1)
                    : k.type === Yr.pop && Dt(p, 20) && s.go(-1, !1)),
                Y(I, d, p);
            })
            .catch(Ar);
      }));
  }
  let se = yr(),
    Q = yr(),
    W;
  function ee(y, T, k) {
    Re(y);
    const I = Q.list();
    return I.length ? I.forEach((v) => v(y, T, k)) : console.error(y), Promise.reject(y);
  }
  function qe() {
    return W && l.value !== en
      ? Promise.resolve()
      : new Promise((y, T) => {
          se.add([y, T]);
        });
  }
  function Re(y) {
    return W || ((W = !y), oe(), se.list().forEach(([T, k]) => (y ? k(y) : T())), se.reset()), y;
  }
  function ke(y, T, k, I) {
    const { scrollBehavior: v } = e;
    if (!Kn || !v) return Promise.resolve();
    const d =
      (!k && Im(ba(y.fullPath, 0))) || ((I || !k) && history.state && history.state.scroll) || null;
    return vu()
      .then(() => v(y, T, d))
      .then((p) => p && Mm(p))
      .catch((p) => ee(p, y, T));
  }
  const he = (y) => s.go(y);
  let Xe;
  const Ze = new Set(),
    It = {
      currentRoute: l,
      listening: !0,
      addRoute: g,
      removeRoute: x,
      clearRoutes: t.clearRoutes,
      hasRoute: N,
      getRoutes: R,
      resolve: $,
      options: e,
      push: O,
      replace: U,
      go: he,
      back: () => he(-1),
      forward: () => he(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: Q.add,
      isReady: qe,
      install(y) {
        const T = this;
        y.component('RouterLink', iv),
          y.component('RouterView', uv),
          (y.config.globalProperties.$router = T),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => er(l),
          }),
          Kn && !Xe && l.value === en && ((Xe = !0), O(s.location).catch((v) => {}));
        const k = {};
        for (const v in en) Object.defineProperty(k, v, { get: () => l.value[v], enumerable: !0 });
        y.provide(ol, T), y.provide(Ef, fu(k)), y.provide(xi, l);
        const I = y.unmount;
        Ze.add(y),
          (y.unmount = function () {
            Ze.delete(y),
              Ze.size < 1 && ((f = en), V && V(), (V = null), (l.value = en), (Xe = !1), (W = !1)),
              I();
          });
      },
    };
  function ye(y) {
    return y.reduce((T, k) => T.then(() => H(k)), Promise.resolve());
  }
  return It;
}
function dv(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => ur(f, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((f) => ur(f, l)) || s.push(l));
  }
  return [n, r, s];
}
const pv = (function () {
    const e = typeof document < 'u' && document.createElement('link').relList;
    return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
  })(),
  hv = function (e) {
    return '/' + e;
  },
  Ia = {},
  Ho = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let o = function (l) {
        return Promise.all(
          l.map((f) =>
            Promise.resolve(f).then(
              (c) => ({ status: 'fulfilled', value: c }),
              (c) => ({ status: 'rejected', reason: c }),
            ),
          ),
        );
      };
      document.getElementsByTagName('link');
      const i = document.querySelector('meta[property=csp-nonce]'),
        a = i?.nonce || i?.getAttribute('nonce');
      r = o(
        t.map((l) => {
          if (((l = hv(l)), l in Ia)) return;
          Ia[l] = !0;
          const f = l.endsWith('.css'),
            c = f ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const u = document.createElement('link');
          if (
            ((u.rel = f ? 'stylesheet' : pv),
            f || (u.as = 'script'),
            (u.crossOrigin = ''),
            (u.href = l),
            a && u.setAttribute('nonce', a),
            document.head.appendChild(u),
            f)
          )
            return new Promise((h, g) => {
              u.addEventListener('load', h),
                u.addEventListener('error', () => g(new Error(`Unable to preload CSS for ${l}`)));
            });
        }),
      );
    }
    function s(o) {
      const i = new Event('vite:preloadError', { cancelable: !0 });
      if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented)) throw o;
    }
    return r.then((o) => {
      for (const i of o || []) i.status === 'rejected' && s(i.reason);
      return e().catch(s);
    });
  },
  gv = [
    {
      path: '/',
      component: () =>
        Ho(
          () => Yn(() => import('./MainLayout-By9sxngu-EiepPFdg.js'), __vite__mapDeps([0, 1, 2])),
          ys([0, 1, 2]),
        ),
      children: [
        {
          path: '',
          component: () =>
            Ho(
              () => Yn(() => import('./IndexPage-pdtjnnYV-DsEXDLUz.js'), __vite__mapDeps([3, 2])),
              ys([3, 2, 4]),
            ),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () =>
        Ho(
          () =>
            Yn(() => import('./ErrorNotFound-DRUjJDV3-x8WKzFY2.js'), __vite__mapDeps([4, 1, 2])),
          ys([5, 1, 2]),
        ),
    },
  ],
  Bo = am(function () {
    return fv({ scrollBehavior: () => ({ left: 0, top: 0 }), routes: gv, history: Hm('/') });
  });
async function mv(e, t) {
  const n = e(im);
  n.use(om, t);
  const r = Ys(typeof Bo == 'function' ? await Bo({}) : Bo);
  return { app: n, router: r };
}
const vv = { config: {} };
async function _v({ app: e, router: t }) {
  e.use(t), e.mount('#q-app');
}
mv(Fg, vv).then(_v);
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function il(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const me = {},
  rr = [],
  Mt = () => {},
  yv = () => !1,
  io = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ll = (e) => e.startsWith('onUpdate:'),
  Oe = Object.assign,
  al = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  bv = Object.prototype.hasOwnProperty,
  de = (e, t) => bv.call(e, t),
  Z = Array.isArray,
  sr = (e) => lo(e) === '[object Map]',
  Cf = (e) => lo(e) === '[object Set]',
  ne = (e) => typeof e == 'function',
  Pe = (e) => typeof e == 'string',
  wn = (e) => typeof e == 'symbol',
  xe = (e) => e !== null && typeof e == 'object',
  Pf = (e) => (xe(e) || ne(e)) && ne(e.then) && ne(e.catch),
  kf = Object.prototype.toString,
  lo = (e) => kf.call(e),
  wv = (e) => lo(e).slice(8, -1),
  Rf = (e) => lo(e) === '[object Object]',
  cl = (e) => Pe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Mr = il(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  ao = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  xv = /-(\w)/g,
  ht = ao((e) => e.replace(xv, (t, n) => (n ? n.toUpperCase() : ''))),
  Sv = /\B([A-Z])/g,
  qn = ao((e) => e.replace(Sv, '-$1').toLowerCase()),
  co = ao((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Uo = ao((e) => (e ? `on${co(e)}` : '')),
  gn = (e, t) => !Object.is(e, t),
  qo = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Tf = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n });
  },
  Ev = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Cv = (e) => {
    const t = Pe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ja;
const uo = () =>
  ja ||
  (ja =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function ul(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Pe(r) ? Tv(r) : ul(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (Pe(e) || xe(e)) return e;
}
const Pv = /;(?![^(]*\))/g,
  kv = /:([^]+)/,
  Rv = /\/\*[^]*?\*\//g;
function Tv(e) {
  const t = {};
  return (
    e
      .replace(Rv, '')
      .split(Pv)
      .forEach((n) => {
        if (n) {
          const r = n.split(kv);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function fl(e) {
  let t = '';
  if (Pe(e)) t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const r = fl(e[n]);
      r && (t += r + ' ');
    }
  else if (xe(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const Ov = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Av = il(Ov);
function Of(e) {
  return !!e || e === '';
}
const Af = (e) => !!(e && e.__v_isRef === !0),
  Lv = (e) =>
    Pe(e)
      ? e
      : e == null
        ? ''
        : Z(e) || (xe(e) && (e.toString === kf || !ne(e.toString)))
          ? Af(e)
            ? Lv(e.value)
            : JSON.stringify(e, Lf, 2)
          : String(e),
  Lf = (e, t) =>
    Af(t)
      ? Lf(e, t.value)
      : sr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], o) => ((n[Vo(r, o) + ' =>'] = s), n),
              {},
            ),
          }
        : Cf(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Vo(n)) }
          : wn(t)
            ? Vo(t)
            : xe(t) && !Z(t) && !Rf(t)
              ? String(t)
              : t,
  Vo = (e, t = '') => {
    var n;
    return wn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let st;
class Mv {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = st),
      !t && st && (this.index = (st.scopes || (st.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = st;
      try {
        return (st = this), t();
      } finally {
        st = n;
      }
    }
  }
  on() {
    st = this;
  }
  off() {
    st = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Fv() {
  return st;
}
let _e;
const Wo = new WeakSet();
class Mf {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      st && st.active && st.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), Wo.has(this) && (Wo.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || If(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), $a(this), jf(this);
    const t = _e,
      n = _t;
    (_e = this), (_t = !0);
    try {
      return this.fn();
    } finally {
      $f(this), (_e = t), (_t = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) hl(t);
      (this.deps = this.depsTail = void 0),
        $a(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64 ? Wo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Si(this) && this.run();
  }
  get dirty() {
    return Si(this);
  }
}
let Ff = 0,
  Fr,
  Ir;
function If(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Ir), (Ir = e);
    return;
  }
  (e.next = Fr), (Fr = e);
}
function dl() {
  Ff++;
}
function pl() {
  if (--Ff > 0) return;
  if (Ir) {
    let t = Ir;
    for (Ir = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Fr; ) {
    let t = Fr;
    for (Fr = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function jf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t);
}
function $f(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), hl(r), Iv(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function Si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Df(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Df(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Qr)) return;
  e.globalVersion = Qr;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Si(e))) {
    e.flags &= -3;
    return;
  }
  const n = _e,
    r = _t;
  (_e = e), (_t = !0);
  try {
    jf(e);
    const s = e.fn(e._value);
    (t.version === 0 || gn(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (_e = n), (_t = r), $f(e), (e.flags &= -3);
  }
}
function hl(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) hl(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Iv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0));
}
let _t = !0;
const Nf = [];
function xn() {
  Nf.push(_t), (_t = !1);
}
function Sn() {
  const e = Nf.pop();
  _t = e === void 0 ? !0 : e;
}
function $a(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = _e;
    _e = void 0;
    try {
      t();
    } finally {
      _e = n;
    }
  }
}
let Qr = 0;
class jv {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
  }
}
class gl {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!_e || !_t || _e === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e)
      (n = this.activeLink = new jv(_e, this)),
        _e.deps
          ? ((n.prevDep = _e.depsTail), (_e.depsTail.nextDep = n), (_e.depsTail = n))
          : (_e.deps = _e.depsTail = n),
        Hf(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = _e.depsTail),
        (n.nextDep = void 0),
        (_e.depsTail.nextDep = n),
        (_e.depsTail = n),
        _e.deps === n && (_e.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Qr++, this.notify(t);
  }
  notify(t) {
    dl();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      pl();
    }
  }
}
function Hf(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Hf(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Ei = new WeakMap(),
  $n = Symbol(''),
  Ci = Symbol(''),
  Xr = Symbol('');
function Ne(e, t, n) {
  if (_t && _e) {
    let r = Ei.get(e);
    r || Ei.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new gl())), (s.map = r), (s.key = n)), s.track();
  }
}
function zt(e, t, n, r, s, o) {
  const i = Ei.get(e);
  if (!i) {
    Qr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((dl(), t === 'clear')) i.forEach(a);
  else {
    const l = Z(e),
      f = l && cl(n);
    if (l && n === 'length') {
      const c = Number(r);
      i.forEach((u, h) => {
        (h === 'length' || h === Xr || (!wn(h) && h >= c)) && a(u);
      });
    } else
      switch (((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Xr)), t)) {
        case 'add':
          l ? f && a(i.get('length')) : (a(i.get($n)), sr(e) && a(i.get(Ci)));
          break;
        case 'delete':
          l || (a(i.get($n)), sr(e) && a(i.get(Ci)));
          break;
        case 'set':
          sr(e) && a(i.get($n));
          break;
      }
  }
  pl();
}
function Wn(e) {
  const t = ae(e);
  return t === e ? t : (Ne(t, 'iterate', Xr), dt(e) ? t : t.map(He));
}
function fo(e) {
  return Ne((e = ae(e)), 'iterate', Xr), e;
}
const $v = {
  __proto__: null,
  [Symbol.iterator]() {
    return zo(this, Symbol.iterator, He);
  },
  concat(...e) {
    return Wn(this).concat(...e.map((t) => (Z(t) ? Wn(t) : t)));
  },
  entries() {
    return zo(this, 'entries', (e) => ((e[1] = He(e[1])), e));
  },
  every(e, t) {
    return Nt(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return Nt(this, 'filter', e, t, (n) => n.map(He), arguments);
  },
  find(e, t) {
    return Nt(this, 'find', e, t, He, arguments);
  },
  findIndex(e, t) {
    return Nt(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Nt(this, 'findLast', e, t, He, arguments);
  },
  findLastIndex(e, t) {
    return Nt(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Nt(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return Ko(this, 'includes', e);
  },
  indexOf(...e) {
    return Ko(this, 'indexOf', e);
  },
  join(e) {
    return Wn(this).join(e);
  },
  lastIndexOf(...e) {
    return Ko(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return Nt(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return br(this, 'pop');
  },
  push(...e) {
    return br(this, 'push', e);
  },
  reduce(e, ...t) {
    return Da(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return Da(this, 'reduceRight', e, t);
  },
  shift() {
    return br(this, 'shift');
  },
  some(e, t) {
    return Nt(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return br(this, 'splice', e);
  },
  toReversed() {
    return Wn(this).toReversed();
  },
  toSorted(e) {
    return Wn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Wn(this).toSpliced(...e);
  },
  unshift(...e) {
    return br(this, 'unshift', e);
  },
  values() {
    return zo(this, 'values', He);
  },
};
function zo(e, t, n) {
  const r = fo(e),
    s = r[t]();
  return (
    r !== e &&
      !dt(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const Dv = Array.prototype;
function Nt(e, t, n, r, s, o) {
  const i = fo(e),
    a = i !== e && !dt(e),
    l = i[t];
  if (l !== Dv[t]) {
    const u = l.apply(e, o);
    return a ? He(u) : u;
  }
  let f = n;
  i !== e &&
    (a
      ? (f = function (u, h) {
          return n.call(this, He(u), h, e);
        })
      : n.length > 2 &&
        (f = function (u, h) {
          return n.call(this, u, h, e);
        }));
  const c = l.call(i, f, r);
  return a && s ? s(c) : c;
}
function Da(e, t, n, r) {
  const s = fo(e);
  let o = n;
  return (
    s !== e &&
      (dt(e)
        ? n.length > 3 &&
          (o = function (i, a, l) {
            return n.call(this, i, a, l, e);
          })
        : (o = function (i, a, l) {
            return n.call(this, i, He(a), l, e);
          })),
    s[t](o, ...r)
  );
}
function Ko(e, t, n) {
  const r = ae(e);
  Ne(r, 'iterate', Xr);
  const s = r[t](...n);
  return (s === -1 || s === !1) && _l(n[0]) ? ((n[0] = ae(n[0])), r[t](...n)) : s;
}
function br(e, t, n = []) {
  xn(), dl();
  const r = ae(e)[t].apply(e, n);
  return pl(), Sn(), r;
}
const Nv = il('__proto__,__v_isRef,__isVue'),
  Bf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(wn),
  );
function Hv(e) {
  wn(e) || (e = String(e));
  const t = ae(this);
  return Ne(t, 'has', e), t.hasOwnProperty(e);
}
class Uf {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === '__v_skip') return t.__v_skip;
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === '__v_isReactive') return !s;
    if (n === '__v_isReadonly') return s;
    if (n === '__v_isShallow') return o;
    if (n === '__v_raw')
      return r === (s ? (o ? Yv : zf) : o ? Wf : Vf).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = Z(t);
    if (!s) {
      let l;
      if (i && (l = $v[n])) return l;
      if (n === 'hasOwnProperty') return Hv;
    }
    const a = Reflect.get(t, n, Ue(t) ? t : r);
    return (wn(n) ? Bf.has(n) : Nv(n)) || (s || Ne(t, 'get', n), o)
      ? a
      : Ue(a)
        ? i && cl(n)
          ? a
          : a.value
        : xe(a)
          ? s
            ? Gf(a)
            : mr(a)
          : a;
  }
}
class qf extends Uf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Hn(o);
      if ((!dt(r) && !Hn(r) && ((o = ae(o)), (r = ae(r))), !Z(t) && Ue(o) && !Ue(r)))
        return l ? !1 : ((o.value = r), !0);
    }
    const i = Z(t) && cl(n) ? Number(n) < t.length : de(t, n),
      a = Reflect.set(t, n, r, Ue(t) ? t : s);
    return t === ae(s) && (i ? gn(r, o) && zt(t, 'set', n, r) : zt(t, 'add', n, r)), a;
  }
  deleteProperty(t, n) {
    const r = de(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && zt(t, 'delete', n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!wn(n) || !Bf.has(n)) && Ne(t, 'has', n), r;
  }
  ownKeys(t) {
    return Ne(t, 'iterate', Z(t) ? 'length' : $n), Reflect.ownKeys(t);
  }
}
class Bv extends Uf {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Uv = new qf(),
  qv = new Bv(),
  Vv = new qf(!0);
const Pi = (e) => e,
  gs = (e) => Reflect.getPrototypeOf(e);
function Wv(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = ae(s),
      i = sr(o),
      a = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      f = s[e](...r),
      c = n ? Pi : t ? ki : He;
    return (
      !t && Ne(o, 'iterate', l ? Ci : $n),
      {
        next() {
          const { value: u, done: h } = f.next();
          return h ? { value: u, done: h } : { value: a ? [c(u[0]), c(u[1])] : c(u), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ms(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function zv(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw,
        i = ae(o),
        a = ae(s);
      e || (gn(s, a) && Ne(i, 'get', s), Ne(i, 'get', a));
      const { has: l } = gs(i),
        f = t ? Pi : e ? ki : He;
      if (l.call(i, s)) return f(o.get(s));
      if (l.call(i, a)) return f(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ne(ae(s), 'iterate', $n), Reflect.get(s, 'size', s);
    },
    has(s) {
      const o = this.__v_raw,
        i = ae(o),
        a = ae(s);
      return (
        e || (gn(s, a) && Ne(i, 'has', s), Ne(i, 'has', a)),
        s === a ? o.has(s) : o.has(s) || o.has(a)
      );
    },
    forEach(s, o) {
      const i = this,
        a = i.__v_raw,
        l = ae(a),
        f = t ? Pi : e ? ki : He;
      return !e && Ne(l, 'iterate', $n), a.forEach((c, u) => s.call(o, f(c), f(u), i));
    },
  };
  return (
    Oe(
      n,
      e
        ? { add: ms('add'), set: ms('set'), delete: ms('delete'), clear: ms('clear') }
        : {
            add(s) {
              !t && !dt(s) && !Hn(s) && (s = ae(s));
              const o = ae(this);
              return gs(o).has.call(o, s) || (o.add(s), zt(o, 'add', s, s)), this;
            },
            set(s, o) {
              !t && !dt(o) && !Hn(o) && (o = ae(o));
              const i = ae(this),
                { has: a, get: l } = gs(i);
              let f = a.call(i, s);
              f || ((s = ae(s)), (f = a.call(i, s)));
              const c = l.call(i, s);
              return i.set(s, o), f ? gn(o, c) && zt(i, 'set', s, o) : zt(i, 'add', s, o), this;
            },
            delete(s) {
              const o = ae(this),
                { has: i, get: a } = gs(o);
              let l = i.call(o, s);
              l || ((s = ae(s)), (l = i.call(o, s))), a && a.call(o, s);
              const f = o.delete(s);
              return l && zt(o, 'delete', s, void 0), f;
            },
            clear() {
              const s = ae(this),
                o = s.size !== 0,
                i = s.clear();
              return o && zt(s, 'clear', void 0, void 0), i;
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((s) => {
      n[s] = Wv(s, e, t);
    }),
    n
  );
}
function ml(e, t) {
  const n = zv(e, t);
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
          ? r
          : Reflect.get(de(n, s) && s in r ? n : r, s, o);
}
const Kv = { get: ml(!1, !1) },
  Gv = { get: ml(!1, !0) },
  Jv = { get: ml(!0, !1) };
const Vf = new WeakMap(),
  Wf = new WeakMap(),
  zf = new WeakMap(),
  Yv = new WeakMap();
function Qv(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Xv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qv(wv(e));
}
function mr(e) {
  return Hn(e) ? e : vl(e, !1, Uv, Kv, Vf);
}
function Kf(e) {
  return vl(e, !1, Vv, Gv, Wf);
}
function Gf(e) {
  return vl(e, !0, qv, Jv, zf);
}
function vl(e, t, n, r, s) {
  if (!xe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Xv(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function or(e) {
  return Hn(e) ? or(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Hn(e) {
  return !!(e && e.__v_isReadonly);
}
function dt(e) {
  return !!(e && e.__v_isShallow);
}
function _l(e) {
  return e ? !!e.__v_raw : !1;
}
function ae(e) {
  const t = e && e.__v_raw;
  return t ? ae(t) : e;
}
function po(e) {
  return !de(e, '__v_skip') && Object.isExtensible(e) && Tf(e, '__v_skip', !0), e;
}
const He = (e) => (xe(e) ? mr(e) : e),
  ki = (e) => (xe(e) ? Gf(e) : e);
function Ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Jf(e) {
  return Yf(e, !1);
}
function Zv(e) {
  return Yf(e, !0);
}
function Yf(e, t) {
  return Ue(e) ? e : new e_(e, t);
}
class e_ {
  constructor(t, n) {
    (this.dep = new gl()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : ae(t)),
      (this._value = n ? t : He(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || dt(t) || Hn(t);
    (t = r ? t : ae(t)),
      gn(t, n) && ((this._rawValue = t), (this._value = r ? t : He(t)), this.dep.trigger());
  }
}
function ir(e) {
  return Ue(e) ? e.value : e;
}
const t_ = {
  get: (e, t, n) => (t === '__v_raw' ? e : ir(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return Ue(s) && !Ue(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Qf(e) {
  return or(e) ? e : new Proxy(e, t_);
}
class n_ {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new gl(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Qr - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && _e !== this)) return If(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Df(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function r_(e, t, n = !1) {
  let r, s;
  return ne(e) ? (r = e) : ((r = e.get), (s = e.set)), new n_(r, s, n);
}
const vs = {},
  js = new WeakMap();
let Mn;
function s_(e, t = !1, n = Mn) {
  if (n) {
    let r = js.get(n);
    r || js.set(n, (r = [])), r.push(e);
  }
}
function o_(e, t, n = me) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n,
    f = (O) => (s ? O : dt(O) || s === !1 || s === 0 ? Kt(O, 1) : Kt(O));
  let c,
    u,
    h,
    g,
    x = !1,
    R = !1;
  if (
    (Ue(e)
      ? ((u = () => e.value), (x = dt(e)))
      : or(e)
        ? ((u = () => f(e)), (x = !0))
        : Z(e)
          ? ((R = !0),
            (x = e.some((O) => or(O) || dt(O))),
            (u = () =>
              e.map((O) => {
                if (Ue(O)) return O.value;
                if (or(O)) return f(O);
                if (ne(O)) return l ? l(O, 2) : O();
              })))
          : ne(e)
            ? t
              ? (u = l ? () => l(e, 2) : e)
              : (u = () => {
                  if (h) {
                    xn();
                    try {
                      h();
                    } finally {
                      Sn();
                    }
                  }
                  const O = Mn;
                  Mn = c;
                  try {
                    return l ? l(e, 3, [g]) : e(g);
                  } finally {
                    Mn = O;
                  }
                })
            : (u = Mt),
    t && s)
  ) {
    const O = u,
      U = s === !0 ? 1 / 0 : s;
    u = () => Kt(O(), U);
  }
  const N = Fv(),
    $ = () => {
      c.stop(), N && N.active && al(N.effects, c);
    };
  if (o && t) {
    const O = t;
    t = (...U) => {
      O(...U), $();
    };
  }
  let M = R ? new Array(e.length).fill(vs) : vs;
  const j = (O) => {
    if (!(!(c.flags & 1) || (!c.dirty && !O)))
      if (t) {
        const U = c.run();
        if (s || x || (R ? U.some((J, K) => gn(J, M[K])) : gn(U, M))) {
          h && h();
          const J = Mn;
          Mn = c;
          try {
            const K = [U, M === vs ? void 0 : R && M[0] === vs ? [] : M, g];
            l ? l(t, 3, K) : t(...K), (M = U);
          } finally {
            Mn = J;
          }
        }
      } else c.run();
  };
  return (
    a && a(j),
    (c = new Mf(u)),
    (c.scheduler = i ? () => i(j, !1) : j),
    (g = (O) => s_(O, !1, c)),
    (h = c.onStop =
      () => {
        const O = js.get(c);
        if (O) {
          if (l) l(O, 4);
          else for (const U of O) U();
          js.delete(c);
        }
      }),
    t ? (r ? j(!0) : (M = c.run())) : i ? i(j.bind(null, !0), !0) : c.run(),
    ($.pause = c.pause.bind(c)),
    ($.resume = c.resume.bind(c)),
    ($.stop = $),
    $
  );
}
function Kt(e, t = 1 / 0, n) {
  if (t <= 0 || !xe(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, Ue(e))) Kt(e.value, t, n);
  else if (Z(e)) for (let r = 0; r < e.length; r++) Kt(e[r], t, n);
  else if (Cf(e) || sr(e))
    e.forEach((r) => {
      Kt(r, t, n);
    });
  else if (Rf(e)) {
    for (const r in e) Kt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Kt(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function cs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ho(s, t, n);
  }
}
function wt(e, t, n, r) {
  if (ne(e)) {
    const s = cs(e, t, n, r);
    return (
      s &&
        Pf(s) &&
        s.catch((o) => {
          ho(o, t, n);
        }),
      s
    );
  }
  if (Z(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(wt(e[o], t, n, r));
    return s;
  }
}
function ho(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || me;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, l, f) === !1) return;
      }
      a = a.parent;
    }
    if (o) {
      xn(), cs(o, null, 10, [e, l, f]), Sn();
      return;
    }
  }
  i_(e, n, s, r, i);
}
function i_(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const Ke = [];
let Pt = -1;
const lr = [];
let cn = null,
  Gn = 0;
const Xf = Promise.resolve();
let $s = null;
function Zf(e) {
  const t = $s || Xf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function l_(e) {
  let t = Pt + 1,
    n = Ke.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = Ke[r],
      o = Zr(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function yl(e) {
  if (!(e.flags & 1)) {
    const t = Zr(e),
      n = Ke[Ke.length - 1];
    !n || (!(e.flags & 2) && t >= Zr(n)) ? Ke.push(e) : Ke.splice(l_(t), 0, e),
      (e.flags |= 1),
      ed();
  }
}
function ed() {
  $s || ($s = Xf.then(nd));
}
function a_(e) {
  Z(e)
    ? lr.push(...e)
    : cn && e.id === -1
      ? cn.splice(Gn + 1, 0, e)
      : e.flags & 1 || (lr.push(e), (e.flags |= 1)),
    ed();
}
function Na(e, t, n = Pt + 1) {
  for (; n < Ke.length; n++) {
    const r = Ke[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      Ke.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function td(e) {
  if (lr.length) {
    const t = [...new Set(lr)].sort((n, r) => Zr(n) - Zr(r));
    if (((lr.length = 0), cn)) {
      cn.push(...t);
      return;
    }
    for (cn = t, Gn = 0; Gn < cn.length; Gn++) {
      const n = cn[Gn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (cn = null), (Gn = 0);
  }
}
const Zr = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function nd(e) {
  try {
    for (Pt = 0; Pt < Ke.length; Pt++) {
      const t = Ke[Pt];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), cs(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Pt < Ke.length; Pt++) {
      const t = Ke[Pt];
      t && (t.flags &= -2);
    }
    (Pt = -1), (Ke.length = 0), td(), ($s = null), (Ke.length || lr.length) && nd();
  }
}
let Qe = null,
  rd = null;
function Ds(e) {
  const t = Qe;
  return (Qe = e), (rd = (e && e.type.__scopeId) || null), t;
}
function c_(e, t = Qe, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Ya(-1);
    const o = Ds(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Ds(o), r._d && Ya(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function K0(e, t) {
  if (Qe === null) return e;
  const n = bo(Qe),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = me] = t[s];
    o &&
      (ne(o) && (o = { mounted: o, updated: o }),
      o.deep && Kt(i),
      r.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function Rn(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (xn(), wt(l, n, 8, [e.el, a, e, t]), Sn());
  }
}
const u_ = Symbol('_vte'),
  sd = (e) => e.__isTeleport,
  un = Symbol('_leaveCb'),
  _s = Symbol('_enterCb');
function f_() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    dd(() => {
      e.isMounted = !0;
    }),
    pd(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const ut = [Function, Array],
  od = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ut,
    onEnter: ut,
    onAfterEnter: ut,
    onEnterCancelled: ut,
    onBeforeLeave: ut,
    onLeave: ut,
    onAfterLeave: ut,
    onLeaveCancelled: ut,
    onBeforeAppear: ut,
    onAppear: ut,
    onAfterAppear: ut,
    onAppearCancelled: ut,
  },
  id = (e) => {
    const t = e.subTree;
    return t.component ? id(t.component) : t;
  },
  d_ = {
    name: 'BaseTransition',
    props: od,
    setup(e, { slots: t }) {
      const n = uy(),
        r = f_();
      return () => {
        const s = t.default && cd(t.default(), !0);
        if (!s || !s.length) return;
        const o = ld(s),
          i = ae(e),
          { mode: a } = i;
        if (r.isLeaving) return Go(o);
        const l = Ha(o);
        if (!l) return Go(o);
        let f = Ri(l, i, r, n, (u) => (f = u));
        l.type !== Je && es(l, f);
        let c = n.subTree && Ha(n.subTree);
        if (c && c.type !== Je && !In(l, c) && id(n).type !== Je) {
          let u = Ri(c, i, r, n);
          if ((es(c, u), a === 'out-in' && l.type !== Je))
            return (
              (r.isLeaving = !0),
              (u.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete u.afterLeave,
                  (c = void 0);
              }),
              Go(o)
            );
          a === 'in-out' && l.type !== Je
            ? (u.delayLeave = (h, g, x) => {
                const R = ad(r, c);
                (R[String(c.key)] = c),
                  (h[un] = () => {
                    g(), (h[un] = void 0), delete f.delayedLeave, (c = void 0);
                  }),
                  (f.delayedLeave = () => {
                    x(), delete f.delayedLeave, (c = void 0);
                  });
              })
            : (c = void 0);
        } else c && (c = void 0);
        return o;
      };
    },
  };
function ld(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Je) {
        t = n;
        break;
      }
  }
  return t;
}
const p_ = d_;
function ad(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Ri(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: f,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: h,
      onLeave: g,
      onAfterLeave: x,
      onLeaveCancelled: R,
      onBeforeAppear: N,
      onAppear: $,
      onAfterAppear: M,
      onAppearCancelled: j,
    } = t,
    O = String(e.key),
    U = ad(n, e),
    J = (H, q) => {
      H && wt(H, r, 9, q);
    },
    K = (H, q) => {
      const Y = q[1];
      J(H, q), Z(H) ? H.every((A) => A.length <= 1) && Y() : H.length <= 1 && Y();
    },
    ie = {
      mode: i,
      persisted: a,
      beforeEnter(H) {
        let q = l;
        if (!n.isMounted)
          if (o) q = N || l;
          else return;
        H[un] && H[un](!0);
        const Y = U[O];
        Y && In(e, Y) && Y.el[un] && Y.el[un](), J(q, [H]);
      },
      enter(H) {
        let q = f,
          Y = c,
          A = u;
        if (!n.isMounted)
          if (o) (q = $ || f), (Y = M || c), (A = j || u);
          else return;
        let V = !1;
        const oe = (H[_s] = (se) => {
          V ||
            ((V = !0),
            se ? J(A, [H]) : J(Y, [H]),
            ie.delayedLeave && ie.delayedLeave(),
            (H[_s] = void 0));
        });
        q ? K(q, [H, oe]) : oe();
      },
      leave(H, q) {
        const Y = String(e.key);
        if ((H[_s] && H[_s](!0), n.isUnmounting)) return q();
        J(h, [H]);
        let A = !1;
        const V = (H[un] = (oe) => {
          A ||
            ((A = !0),
            q(),
            oe ? J(R, [H]) : J(x, [H]),
            (H[un] = void 0),
            U[Y] === e && delete U[Y]);
        });
        (U[Y] = e), g ? K(g, [H, V]) : V();
      },
      clone(H) {
        const q = Ri(H, t, n, r, s);
        return s && s(q), q;
      },
    };
  return ie;
}
function Go(e) {
  if (mo(e)) return (e = vn(e)), (e.children = null), e;
}
function Ha(e) {
  if (!mo(e)) return sd(e.type) && e.children ? ld(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ne(n.default)) return n.default();
  }
}
function es(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), es(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function cd(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Tt
      ? (i.patchFlag & 128 && s++, (r = r.concat(cd(i.children, t, a))))
      : (t || i.type !== Je) && r.push(a != null ? vn(i, { key: a }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function go(e, t) {
  return ne(e) ? Oe({ name: e.name }, t, { setup: e }) : e;
}
function ud(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function Ns(e, t, n, r, s = !1) {
  if (Z(e)) {
    e.forEach((x, R) => Ns(x, t && (Z(t) ? t[R] : t), n, r, s));
    return;
  }
  if (jr(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      Ns(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? bo(r.component) : r.el,
    i = s ? null : o,
    { i: a, r: l } = e,
    f = t && t.r,
    c = a.refs === me ? (a.refs = {}) : a.refs,
    u = a.setupState,
    h = ae(u),
    g = u === me ? () => !1 : (x) => de(h, x);
  if (
    (f != null &&
      f !== l &&
      (Pe(f) ? ((c[f] = null), g(f) && (u[f] = null)) : Ue(f) && (f.value = null)),
    ne(l))
  )
    cs(l, a, 12, [i, c]);
  else {
    const x = Pe(l),
      R = Ue(l);
    if (x || R) {
      const N = () => {
        if (e.f) {
          const $ = x ? (g(l) ? u[l] : c[l]) : l.value;
          s
            ? Z($) && al($, o)
            : Z($)
              ? $.includes(o) || $.push(o)
              : x
                ? ((c[l] = [o]), g(l) && (u[l] = c[l]))
                : ((l.value = [o]), e.k && (c[e.k] = l.value));
        } else x ? ((c[l] = i), g(l) && (u[l] = i)) : R && ((l.value = i), e.k && (c[e.k] = i));
      };
      i ? ((N.id = -1), nt(N, n)) : N();
    }
  }
}
uo().requestIdleCallback;
uo().cancelIdleCallback;
const jr = (e) => !!e.type.__asyncLoader,
  mo = (e) => e.type.__isKeepAlive;
function h_(e, t) {
  fd(e, 'a', t);
}
function g_(e, t) {
  fd(e, 'da', t);
}
function fd(e, t, n = Le) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((vo(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; ) mo(s.parent.vnode) && m_(r, t, n, s), (s = s.parent);
  }
}
function m_(e, t, n, r) {
  const s = vo(t, e, r, !0);
  hd(() => {
    al(r[t], s);
  }, n);
}
function vo(e, t, n = Le, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          xn();
          const a = us(n),
            l = wt(t, n, e, i);
          return a(), Sn(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Qt =
    (e) =>
    (t, n = Le) => {
      (!ns || e === 'sp') && vo(e, (...r) => t(...r), n);
    },
  v_ = Qt('bm'),
  dd = Qt('m'),
  __ = Qt('bu'),
  y_ = Qt('u'),
  pd = Qt('bum'),
  hd = Qt('um'),
  b_ = Qt('sp'),
  w_ = Qt('rtg'),
  x_ = Qt('rtc');
function S_(e, t = Le) {
  vo('ec', e, t);
}
const E_ = 'components';
function C_(e, t) {
  return k_(E_, e, !0, t) || e;
}
const P_ = Symbol.for('v-ndc');
function k_(e, t, n = !0, r = !1) {
  const s = Qe || Le;
  if (s) {
    const o = s.type;
    {
      const a = gy(o, !1);
      if (a && (a === t || a === ht(t) || a === co(ht(t)))) return o;
    }
    const i = Ba(s[e] || o[e], t) || Ba(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function Ba(e, t) {
  return e && (e[t] || e[ht(t)] || e[co(ht(t))]);
}
function G0(e, t, n, r) {
  let s;
  const o = n,
    i = Z(e);
  if (i || Pe(e)) {
    const a = i && or(e);
    let l = !1;
    a && ((l = !dt(e)), (e = fo(e))), (s = new Array(e.length));
    for (let f = 0, c = e.length; f < c; f++) s[f] = t(l ? He(e[f]) : e[f], f, void 0, o);
  } else if (typeof e == 'number') {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o);
  } else if (xe(e))
    if (e[Symbol.iterator]) s = Array.from(e, (a, l) => t(a, l, void 0, o));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, f = a.length; l < f; l++) {
        const c = a[l];
        s[l] = t(e[c], c, l, o);
      }
    }
  else s = [];
  return s;
}
const Ti = (e) => (e ? (Dd(e) ? bo(e) : Ti(e.parent)) : null),
  $r = Oe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ti(e.parent),
    $root: (e) => Ti(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => md(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        yl(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Zf.bind(e.proxy)),
    $watch: (e) => G_.bind(e),
  }),
  Jo = (e, t) => e !== me && !e.__isScriptSetup && de(e, t),
  R_ = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: a,
        appContext: l,
      } = e;
      let f;
      if (t[0] !== '$') {
        const g = i[t];
        if (g !== void 0)
          switch (g) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Jo(r, t)) return (i[t] = 1), r[t];
          if (s !== me && de(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && de(f, t)) return (i[t] = 3), o[t];
          if (n !== me && de(n, t)) return (i[t] = 4), n[t];
          Oi && (i[t] = 0);
        }
      }
      const c = $r[t];
      let u, h;
      if (c) return t === '$attrs' && Ne(e.attrs, 'get', ''), c(e);
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== me && de(n, t)) return (i[t] = 4), n[t];
      if (((h = l.config.globalProperties), de(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return Jo(s, t)
        ? ((s[t] = n), !0)
        : r !== me && de(r, t)
          ? ((r[t] = n), !0)
          : de(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o } },
      i,
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== me && de(e, i)) ||
        Jo(t, i) ||
        ((a = o[0]) && de(a, i)) ||
        de(r, i) ||
        de($r, i) ||
        de(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : de(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Ua(e) {
  return Z(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Oi = !0;
function T_(e) {
  const t = md(e),
    n = e.proxy,
    r = e.ctx;
  (Oi = !1), t.beforeCreate && qa(t.beforeCreate, e, 'bc');
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    created: c,
    beforeMount: u,
    mounted: h,
    beforeUpdate: g,
    updated: x,
    activated: R,
    deactivated: N,
    beforeDestroy: $,
    beforeUnmount: M,
    destroyed: j,
    unmounted: O,
    render: U,
    renderTracked: J,
    renderTriggered: K,
    errorCaptured: ie,
    serverPrefetch: H,
    expose: q,
    inheritAttrs: Y,
    components: A,
    directives: V,
    filters: oe,
  } = t;
  if ((f && O_(f, r, null), i))
    for (const W in i) {
      const ee = i[W];
      ne(ee) && (r[W] = ee.bind(n));
    }
  if (s) {
    const W = s.call(n, n);
    xe(W) && (e.data = mr(W));
  }
  if (((Oi = !0), o))
    for (const W in o) {
      const ee = o[W],
        qe = ne(ee) ? ee.bind(n, n) : ne(ee.get) ? ee.get.bind(n, n) : Mt,
        Re = !ne(ee) && ne(ee.set) ? ee.set.bind(n) : Mt,
        ke = mt({ get: qe, set: Re });
      Object.defineProperty(r, W, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (he) => (ke.value = he),
      });
    }
  if (a) for (const W in a) gd(a[W], r, n, W);
  if (l) {
    const W = ne(l) ? l.call(n) : l;
    Reflect.ownKeys(W).forEach((ee) => {
      Es(ee, W[ee]);
    });
  }
  c && qa(c, e, 'c');
  function Q(W, ee) {
    Z(ee) ? ee.forEach((qe) => W(qe.bind(n))) : ee && W(ee.bind(n));
  }
  if (
    (Q(v_, u),
    Q(dd, h),
    Q(__, g),
    Q(y_, x),
    Q(h_, R),
    Q(g_, N),
    Q(S_, ie),
    Q(x_, J),
    Q(w_, K),
    Q(pd, M),
    Q(hd, O),
    Q(b_, H),
    Z(q))
  )
    if (q.length) {
      const W = e.exposed || (e.exposed = {});
      q.forEach((ee) => {
        Object.defineProperty(W, ee, { get: () => n[ee], set: (qe) => (n[ee] = qe) });
      });
    } else e.exposed || (e.exposed = {});
  U && e.render === Mt && (e.render = U),
    Y != null && (e.inheritAttrs = Y),
    A && (e.components = A),
    V && (e.directives = V),
    H && ud(e);
}
function O_(e, t, n = Mt) {
  Z(e) && (e = Ai(e));
  for (const r in e) {
    const s = e[r];
    let o;
    xe(s)
      ? 'default' in s
        ? (o = Jt(s.from || r, s.default, !0))
        : (o = Jt(s.from || r))
      : (o = Jt(s)),
      Ue(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function qa(e, t, n) {
  wt(Z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function gd(e, t, n, r) {
  let s = r.includes('.') ? Od(n, r) : () => n[r];
  if (Pe(e)) {
    const o = t[e];
    ne(o) && Cs(s, o);
  } else if (ne(e)) Cs(s, e.bind(n));
  else if (xe(e))
    if (Z(e)) e.forEach((o) => gd(o, t, n, r));
    else {
      const o = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(o) && Cs(s, o, e);
    }
}
function md(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = o.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !n && !r
        ? (l = t)
        : ((l = {}), s.length && s.forEach((f) => Hs(l, f, i, !0)), Hs(l, t, i)),
    xe(t) && o.set(t, l),
    l
  );
}
function Hs(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Hs(e, o, n, !0), s && s.forEach((i) => Hs(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const a = A_[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const A_ = {
  data: Va,
  props: Wa,
  emits: Wa,
  methods: Er,
  computed: Er,
  beforeCreate: We,
  created: We,
  beforeMount: We,
  mounted: We,
  beforeUpdate: We,
  updated: We,
  beforeDestroy: We,
  beforeUnmount: We,
  destroyed: We,
  unmounted: We,
  activated: We,
  deactivated: We,
  errorCaptured: We,
  serverPrefetch: We,
  components: Er,
  directives: Er,
  watch: M_,
  provide: Va,
  inject: L_,
};
function Va(e, t) {
  return t
    ? e
      ? function () {
          return Oe(ne(e) ? e.call(this, this) : e, ne(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function L_(e, t) {
  return Er(Ai(e), Ai(t));
}
function Ai(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function We(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Er(e, t) {
  return e ? Oe(Object.create(null), e, t) : t;
}
function Wa(e, t) {
  return e
    ? Z(e) && Z(t)
      ? [...new Set([...e, ...t])]
      : Oe(Object.create(null), Ua(e), Ua(t ?? {}))
    : t;
}
function M_(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Oe(Object.create(null), e);
  for (const r in t) n[r] = We(e[r], t[r]);
  return n;
}
function vd() {
  return {
    app: null,
    config: {
      isNativeTag: yv,
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
let F_ = 0;
function I_(e, t) {
  return function (r, s = null) {
    ne(r) || (r = Oe({}, r)), s != null && !xe(s) && (s = null);
    const o = vd(),
      i = new WeakSet(),
      a = [];
    let l = !1;
    const f = (o.app = {
      _uid: F_++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: vy,
      get config() {
        return o.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          i.has(c) ||
            (c && ne(c.install) ? (i.add(c), c.install(f, ...u)) : ne(c) && (i.add(c), c(f, ...u))),
          f
        );
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), f;
      },
      component(c, u) {
        return u ? ((o.components[c] = u), f) : o.components[c];
      },
      directive(c, u) {
        return u ? ((o.directives[c] = u), f) : o.directives[c];
      },
      mount(c, u, h) {
        if (!l) {
          const g = f._ceVNode || at(r, s);
          return (
            (g.appContext = o),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            e(g, c, h),
            (l = !0),
            (f._container = c),
            (c.__vue_app__ = f),
            bo(g.component)
          );
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (wt(a, f._instance, 16), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(c, u) {
        return (o.provides[c] = u), f;
      },
      runWithContext(c) {
        const u = ar;
        ar = f;
        try {
          return c();
        } finally {
          ar = u;
        }
      },
    });
    return f;
  };
}
let ar = null;
function Es(e, t) {
  if (Le) {
    let n = Le.provides;
    const r = Le.parent && Le.parent.provides;
    r === n && (n = Le.provides = Object.create(r)), (n[e] = t);
  }
}
function Jt(e, t, n = !1) {
  const r = Le || Qe;
  if (r || ar) {
    const s = ar
      ? ar._context.provides
      : r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ne(t) ? t.call(r && r.proxy) : t;
  }
}
const _d = {},
  yd = () => Object.create(_d),
  bd = (e) => Object.getPrototypeOf(e) === _d;
function j_(e, t, n, r = !1) {
  const s = {},
    o = yd();
  (e.propsDefaults = Object.create(null)), wd(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : Kf(s)) : e.type.props ? (e.props = s) : (e.props = o), (e.attrs = o);
}
function $_(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = ae(s),
    [l] = e.propsOptions;
  let f = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let h = c[u];
        if (_o(e.emitsOptions, h)) continue;
        const g = t[h];
        if (l)
          if (de(o, h)) g !== o[h] && ((o[h] = g), (f = !0));
          else {
            const x = ht(h);
            s[x] = Li(l, a, x, g, e, !1);
          }
        else g !== o[h] && ((o[h] = g), (f = !0));
      }
    }
  } else {
    wd(e, t, s, o) && (f = !0);
    let c;
    for (const u in a)
      (!t || (!de(t, u) && ((c = qn(u)) === u || !de(t, c)))) &&
        (l
          ? n && (n[u] !== void 0 || n[c] !== void 0) && (s[u] = Li(l, a, u, void 0, e, !0))
          : delete s[u]);
    if (o !== a) for (const u in o) (!t || !de(t, u)) && (delete o[u], (f = !0));
  }
  f && zt(e.attrs, 'set', '');
}
function wd(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (Mr(l)) continue;
      const f = t[l];
      let c;
      s && de(s, (c = ht(l)))
        ? !o || !o.includes(c)
          ? (n[c] = f)
          : ((a || (a = {}))[c] = f)
        : _o(e.emitsOptions, l) || ((!(l in r) || f !== r[l]) && ((r[l] = f), (i = !0)));
    }
  if (o) {
    const l = ae(n),
      f = a || me;
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      n[u] = Li(s, l, u, f[u], e, !de(f, u));
    }
  }
  return i;
}
function Li(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = de(i, 'default');
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ne(l)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const c = us(s);
          (r = f[n] = l.call(null, t)), c();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] && (o && !a ? (r = !1) : i[1] && (r === '' || r === qn(n)) && (r = !0));
  }
  return r;
}
const D_ = new WeakMap();
function xd(e, t, n = !1) {
  const r = n ? D_ : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!ne(e)) {
    const c = (u) => {
      l = !0;
      const [h, g] = xd(u, t, !0);
      Oe(i, h), g && a.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!o && !l) return xe(e) && r.set(e, rr), rr;
  if (Z(o))
    for (let c = 0; c < o.length; c++) {
      const u = ht(o[c]);
      za(u) && (i[u] = me);
    }
  else if (o)
    for (const c in o) {
      const u = ht(c);
      if (za(u)) {
        const h = o[c],
          g = (i[u] = Z(h) || ne(h) ? { type: h } : Oe({}, h)),
          x = g.type;
        let R = !1,
          N = !0;
        if (Z(x))
          for (let $ = 0; $ < x.length; ++$) {
            const M = x[$],
              j = ne(M) && M.name;
            if (j === 'Boolean') {
              R = !0;
              break;
            } else j === 'String' && (N = !1);
          }
        else R = ne(x) && x.name === 'Boolean';
        (g[0] = R), (g[1] = N), (R || de(g, 'default')) && a.push(u);
      }
    }
  const f = [i, a];
  return xe(e) && r.set(e, f), f;
}
function za(e) {
  return e[0] !== '$' && !Mr(e);
}
const Sd = (e) => e[0] === '_' || e === '$stable',
  bl = (e) => (Z(e) ? e.map(Ot) : [Ot(e)]),
  N_ = (e, t, n) => {
    if (t._n) return t;
    const r = c_((...s) => bl(t(...s)), n);
    return (r._c = !1), r;
  },
  Ed = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Sd(s)) continue;
      const o = e[s];
      if (ne(o)) t[s] = N_(s, o, r);
      else if (o != null) {
        const i = bl(o);
        t[s] = () => i;
      }
    }
  },
  Cd = (e, t) => {
    const n = bl(t);
    e.slots.default = () => n;
  },
  Pd = (e, t, n) => {
    for (const r in t) (n || r !== '_') && (e[r] = t[r]);
  },
  H_ = (e, t, n) => {
    const r = (e.slots = yd());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Pd(r, t, n), n && Tf(r, '_', s, !0)) : Ed(t, r);
    } else t && Cd(e, t);
  },
  B_ = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = me;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? (n && a === 1 ? (o = !1) : Pd(s, t, n)) : ((o = !t.$stable), Ed(t, s)), (i = t);
    } else t && (Cd(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !Sd(a) && i[a] == null && delete s[a];
  },
  nt = ty;
function U_(e) {
  return q_(e);
}
function q_(e, t) {
  const n = uo();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: a,
      createComment: l,
      setText: f,
      setElementText: c,
      parentNode: u,
      nextSibling: h,
      setScopeId: g = Mt,
      insertStaticContent: x,
    } = e,
    R = (d, p, m, _ = null, b = null, w = null, C = void 0, E = null, S = !!p.dynamicChildren) => {
      if (d === p) return;
      d && !In(d, p) && ((_ = y(d)), he(d, b, w, !0), (d = null)),
        p.patchFlag === -2 && ((S = !1), (p.dynamicChildren = null));
      const { type: P, ref: F, shapeFlag: L } = p;
      switch (P) {
        case yo:
          N(d, p, m, _);
          break;
        case Je:
          $(d, p, m, _);
          break;
        case Qo:
          d == null && M(p, m, _, C);
          break;
        case Tt:
          A(d, p, m, _, b, w, C, E, S);
          break;
        default:
          L & 1
            ? U(d, p, m, _, b, w, C, E, S)
            : L & 6
              ? V(d, p, m, _, b, w, C, E, S)
              : (L & 64 || L & 128) && P.process(d, p, m, _, b, w, C, E, S, I);
      }
      F != null && b && Ns(F, d && d.ref, w, p || d, !p);
    },
    N = (d, p, m, _) => {
      if (d == null) r((p.el = a(p.children)), m, _);
      else {
        const b = (p.el = d.el);
        p.children !== d.children && f(b, p.children);
      }
    },
    $ = (d, p, m, _) => {
      d == null ? r((p.el = l(p.children || '')), m, _) : (p.el = d.el);
    },
    M = (d, p, m, _) => {
      [d.el, d.anchor] = x(d.children, p, m, _, d.el, d.anchor);
    },
    j = ({ el: d, anchor: p }, m, _) => {
      let b;
      for (; d && d !== p; ) (b = h(d)), r(d, m, _), (d = b);
      r(p, m, _);
    },
    O = ({ el: d, anchor: p }) => {
      let m;
      for (; d && d !== p; ) (m = h(d)), s(d), (d = m);
      s(p);
    },
    U = (d, p, m, _, b, w, C, E, S) => {
      p.type === 'svg' ? (C = 'svg') : p.type === 'math' && (C = 'mathml'),
        d == null ? J(p, m, _, b, w, C, E, S) : H(d, p, b, w, C, E, S);
    },
    J = (d, p, m, _, b, w, C, E) => {
      let S, P;
      const { props: F, shapeFlag: L, transition: D, dirs: B } = d;
      if (
        ((S = d.el = i(d.type, w, F && F.is, F)),
        L & 8 ? c(S, d.children) : L & 16 && ie(d.children, S, null, _, b, Yo(d, w), C, E),
        B && Rn(d, null, _, 'created'),
        K(S, d, d.scopeId, C, _),
        F)
      ) {
        for (const G in F) G !== 'value' && !Mr(G) && o(S, G, null, F[G], w, _);
        'value' in F && o(S, 'value', null, F.value, w), (P = F.onVnodeBeforeMount) && Et(P, _, d);
      }
      B && Rn(d, null, _, 'beforeMount');
      const z = V_(b, D);
      z && D.beforeEnter(S),
        r(S, p, m),
        ((P = F && F.onVnodeMounted) || z || B) &&
          nt(() => {
            P && Et(P, _, d), z && D.enter(S), B && Rn(d, null, _, 'mounted');
          }, b);
    },
    K = (d, p, m, _, b) => {
      if ((m && g(d, m), _)) for (let w = 0; w < _.length; w++) g(d, _[w]);
      if (b) {
        let w = b.subTree;
        if (p === w || (Ld(w.type) && (w.ssContent === p || w.ssFallback === p))) {
          const C = b.vnode;
          K(d, C, C.scopeId, C.slotScopeIds, b.parent);
        }
      }
    },
    ie = (d, p, m, _, b, w, C, E, S = 0) => {
      for (let P = S; P < d.length; P++) {
        const F = (d[P] = E ? fn(d[P]) : Ot(d[P]));
        R(null, F, p, m, _, b, w, C, E);
      }
    },
    H = (d, p, m, _, b, w, C) => {
      const E = (p.el = d.el);
      let { patchFlag: S, dynamicChildren: P, dirs: F } = p;
      S |= d.patchFlag & 16;
      const L = d.props || me,
        D = p.props || me;
      let B;
      if (
        (m && Tn(m, !1),
        (B = D.onVnodeBeforeUpdate) && Et(B, m, p, d),
        F && Rn(p, d, m, 'beforeUpdate'),
        m && Tn(m, !0),
        ((L.innerHTML && D.innerHTML == null) || (L.textContent && D.textContent == null)) &&
          c(E, ''),
        P
          ? q(d.dynamicChildren, P, E, m, _, Yo(p, b), w)
          : C || ee(d, p, E, null, m, _, Yo(p, b), w, !1),
        S > 0)
      ) {
        if (S & 16) Y(E, L, D, m, b);
        else if (
          (S & 2 && L.class !== D.class && o(E, 'class', null, D.class, b),
          S & 4 && o(E, 'style', L.style, D.style, b),
          S & 8)
        ) {
          const z = p.dynamicProps;
          for (let G = 0; G < z.length; G++) {
            const re = z[G],
              pe = L[re],
              be = D[re];
            (be !== pe || re === 'value') && o(E, re, pe, be, b, m);
          }
        }
        S & 1 && d.children !== p.children && c(E, p.children);
      } else !C && P == null && Y(E, L, D, m, b);
      ((B = D.onVnodeUpdated) || F) &&
        nt(() => {
          B && Et(B, m, p, d), F && Rn(p, d, m, 'updated');
        }, _);
    },
    q = (d, p, m, _, b, w, C) => {
      for (let E = 0; E < p.length; E++) {
        const S = d[E],
          P = p[E],
          F = S.el && (S.type === Tt || !In(S, P) || S.shapeFlag & 70) ? u(S.el) : m;
        R(S, P, F, null, _, b, w, C, !0);
      }
    },
    Y = (d, p, m, _, b) => {
      if (p !== m) {
        if (p !== me) for (const w in p) !Mr(w) && !(w in m) && o(d, w, p[w], null, b, _);
        for (const w in m) {
          if (Mr(w)) continue;
          const C = m[w],
            E = p[w];
          C !== E && w !== 'value' && o(d, w, E, C, b, _);
        }
        'value' in m && o(d, 'value', p.value, m.value, b);
      }
    },
    A = (d, p, m, _, b, w, C, E, S) => {
      const P = (p.el = d ? d.el : a('')),
        F = (p.anchor = d ? d.anchor : a(''));
      let { patchFlag: L, dynamicChildren: D, slotScopeIds: B } = p;
      B && (E = E ? E.concat(B) : B),
        d == null
          ? (r(P, m, _), r(F, m, _), ie(p.children || [], m, F, b, w, C, E, S))
          : L > 0 && L & 64 && D && d.dynamicChildren
            ? (q(d.dynamicChildren, D, m, b, w, C, E),
              (p.key != null || (b && p === b.subTree)) && kd(d, p, !0))
            : ee(d, p, m, F, b, w, C, E, S);
    },
    V = (d, p, m, _, b, w, C, E, S) => {
      (p.slotScopeIds = E),
        d == null
          ? p.shapeFlag & 512
            ? b.ctx.activate(p, m, _, C, S)
            : oe(p, m, _, b, w, C, S)
          : se(d, p, S);
    },
    oe = (d, p, m, _, b, w, C) => {
      const E = (d.component = cy(d, _, b));
      if ((mo(d) && (E.ctx.renderer = I), fy(E, !1, C), E.asyncDep)) {
        if ((b && b.registerDep(E, Q, C), !d.el)) {
          const S = (E.subTree = at(Je));
          $(null, S, p, m);
        }
      } else Q(E, d, p, m, b, w, C);
    },
    se = (d, p, m) => {
      const _ = (p.component = d.component);
      if (Z_(d, p, m))
        if (_.asyncDep && !_.asyncResolved) {
          W(_, p, m);
          return;
        } else (_.next = p), _.update();
      else (p.el = d.el), (_.vnode = p);
    },
    Q = (d, p, m, _, b, w, C) => {
      const E = () => {
        if (d.isMounted) {
          let { next: L, bu: D, u: B, parent: z, vnode: G } = d;
          {
            const Me = Rd(d);
            if (Me) {
              L && ((L.el = G.el), W(d, L, C)),
                Me.asyncDep.then(() => {
                  d.isUnmounted || E();
                });
              return;
            }
          }
          let re = L,
            pe;
          Tn(d, !1),
            L ? ((L.el = G.el), W(d, L, C)) : (L = G),
            D && qo(D),
            (pe = L.props && L.props.onVnodeBeforeUpdate) && Et(pe, z, L, G),
            Tn(d, !0);
          const be = Ga(d),
            Ee = d.subTree;
          (d.subTree = be),
            R(Ee, be, u(Ee.el), y(Ee), d, b, w),
            (L.el = be.el),
            re === null && ey(d, be.el),
            B && nt(B, b),
            (pe = L.props && L.props.onVnodeUpdated) && nt(() => Et(pe, z, L, G), b);
        } else {
          let L;
          const { el: D, props: B } = p,
            { bm: z, m: G, parent: re, root: pe, type: be } = d,
            Ee = jr(p);
          Tn(d, !1), z && qo(z), !Ee && (L = B && B.onVnodeBeforeMount) && Et(L, re, p), Tn(d, !0);
          {
            pe.ce && pe.ce._injectChildStyle(be);
            const Me = (d.subTree = Ga(d));
            R(null, Me, m, _, d, b, w), (p.el = Me.el);
          }
          if ((G && nt(G, b), !Ee && (L = B && B.onVnodeMounted))) {
            const Me = p;
            nt(() => Et(L, re, Me), b);
          }
          (p.shapeFlag & 256 || (re && jr(re.vnode) && re.vnode.shapeFlag & 256)) &&
            d.a &&
            nt(d.a, b),
            (d.isMounted = !0),
            (p = m = _ = null);
        }
      };
      d.scope.on();
      const S = (d.effect = new Mf(E));
      d.scope.off();
      const P = (d.update = S.run.bind(S)),
        F = (d.job = S.runIfDirty.bind(S));
      (F.i = d), (F.id = d.uid), (S.scheduler = () => yl(F)), Tn(d, !0), P();
    },
    W = (d, p, m) => {
      p.component = d;
      const _ = d.vnode.props;
      (d.vnode = p), (d.next = null), $_(d, p.props, _, m), B_(d, p.children, m), xn(), Na(d), Sn();
    },
    ee = (d, p, m, _, b, w, C, E, S = !1) => {
      const P = d && d.children,
        F = d ? d.shapeFlag : 0,
        L = p.children,
        { patchFlag: D, shapeFlag: B } = p;
      if (D > 0) {
        if (D & 128) {
          Re(P, L, m, _, b, w, C, E, S);
          return;
        } else if (D & 256) {
          qe(P, L, m, _, b, w, C, E, S);
          return;
        }
      }
      B & 8
        ? (F & 16 && ye(P, b, w), L !== P && c(m, L))
        : F & 16
          ? B & 16
            ? Re(P, L, m, _, b, w, C, E, S)
            : ye(P, b, w, !0)
          : (F & 8 && c(m, ''), B & 16 && ie(L, m, _, b, w, C, E, S));
    },
    qe = (d, p, m, _, b, w, C, E, S) => {
      (d = d || rr), (p = p || rr);
      const P = d.length,
        F = p.length,
        L = Math.min(P, F);
      let D;
      for (D = 0; D < L; D++) {
        const B = (p[D] = S ? fn(p[D]) : Ot(p[D]));
        R(d[D], B, m, null, b, w, C, E, S);
      }
      P > F ? ye(d, b, w, !0, !1, L) : ie(p, m, _, b, w, C, E, S, L);
    },
    Re = (d, p, m, _, b, w, C, E, S) => {
      let P = 0;
      const F = p.length;
      let L = d.length - 1,
        D = F - 1;
      for (; P <= L && P <= D; ) {
        const B = d[P],
          z = (p[P] = S ? fn(p[P]) : Ot(p[P]));
        if (In(B, z)) R(B, z, m, null, b, w, C, E, S);
        else break;
        P++;
      }
      for (; P <= L && P <= D; ) {
        const B = d[L],
          z = (p[D] = S ? fn(p[D]) : Ot(p[D]));
        if (In(B, z)) R(B, z, m, null, b, w, C, E, S);
        else break;
        L--, D--;
      }
      if (P > L) {
        if (P <= D) {
          const B = D + 1,
            z = B < F ? p[B].el : _;
          for (; P <= D; ) R(null, (p[P] = S ? fn(p[P]) : Ot(p[P])), m, z, b, w, C, E, S), P++;
        }
      } else if (P > D) for (; P <= L; ) he(d[P], b, w, !0), P++;
      else {
        const B = P,
          z = P,
          G = new Map();
        for (P = z; P <= D; P++) {
          const Se = (p[P] = S ? fn(p[P]) : Ot(p[P]));
          Se.key != null && G.set(Se.key, P);
        }
        let re,
          pe = 0;
        const be = D - z + 1;
        let Ee = !1,
          Me = 0;
        const Xt = new Array(be);
        for (P = 0; P < be; P++) Xt[P] = 0;
        for (P = B; P <= L; P++) {
          const Se = d[P];
          if (pe >= be) {
            he(Se, b, w, !0);
            continue;
          }
          let et;
          if (Se.key != null) et = G.get(Se.key);
          else
            for (re = z; re <= D; re++)
              if (Xt[re - z] === 0 && In(Se, p[re])) {
                et = re;
                break;
              }
          et === void 0
            ? he(Se, b, w, !0)
            : ((Xt[et - z] = P + 1),
              et >= Me ? (Me = et) : (Ee = !0),
              R(Se, p[et], m, null, b, w, C, E, S),
              pe++);
        }
        const Fe = Ee ? W_(Xt) : rr;
        for (re = Fe.length - 1, P = be - 1; P >= 0; P--) {
          const Se = z + P,
            et = p[Se],
            Pl = Se + 1 < F ? p[Se + 1].el : _;
          Xt[P] === 0
            ? R(null, et, m, Pl, b, w, C, E, S)
            : Ee && (re < 0 || P !== Fe[re] ? ke(et, m, Pl, 2) : re--);
        }
      }
    },
    ke = (d, p, m, _, b = null) => {
      const { el: w, type: C, transition: E, children: S, shapeFlag: P } = d;
      if (P & 6) {
        ke(d.component.subTree, p, m, _);
        return;
      }
      if (P & 128) {
        d.suspense.move(p, m, _);
        return;
      }
      if (P & 64) {
        C.move(d, p, m, I);
        return;
      }
      if (C === Tt) {
        r(w, p, m);
        for (let L = 0; L < S.length; L++) ke(S[L], p, m, _);
        r(d.anchor, p, m);
        return;
      }
      if (C === Qo) {
        j(d, p, m);
        return;
      }
      if (_ !== 2 && P & 1 && E)
        if (_ === 0) E.beforeEnter(w), r(w, p, m), nt(() => E.enter(w), b);
        else {
          const { leave: L, delayLeave: D, afterLeave: B } = E,
            z = () => r(w, p, m),
            G = () => {
              L(w, () => {
                z(), B && B();
              });
            };
          D ? D(w, z, G) : G();
        }
      else r(w, p, m);
    },
    he = (d, p, m, _ = !1, b = !1) => {
      const {
        type: w,
        props: C,
        ref: E,
        children: S,
        dynamicChildren: P,
        shapeFlag: F,
        patchFlag: L,
        dirs: D,
        cacheIndex: B,
      } = d;
      if (
        (L === -2 && (b = !1),
        E != null && Ns(E, null, m, d, !0),
        B != null && (p.renderCache[B] = void 0),
        F & 256)
      ) {
        p.ctx.deactivate(d);
        return;
      }
      const z = F & 1 && D,
        G = !jr(d);
      let re;
      if ((G && (re = C && C.onVnodeBeforeUnmount) && Et(re, p, d), F & 6)) It(d.component, m, _);
      else {
        if (F & 128) {
          d.suspense.unmount(m, _);
          return;
        }
        z && Rn(d, null, p, 'beforeUnmount'),
          F & 64
            ? d.type.remove(d, p, m, I, _)
            : P && !P.hasOnce && (w !== Tt || (L > 0 && L & 64))
              ? ye(P, p, m, !1, !0)
              : ((w === Tt && L & 384) || (!b && F & 16)) && ye(S, p, m),
          _ && Xe(d);
      }
      ((G && (re = C && C.onVnodeUnmounted)) || z) &&
        nt(() => {
          re && Et(re, p, d), z && Rn(d, null, p, 'unmounted');
        }, m);
    },
    Xe = (d) => {
      const { type: p, el: m, anchor: _, transition: b } = d;
      if (p === Tt) {
        Ze(m, _);
        return;
      }
      if (p === Qo) {
        O(d);
        return;
      }
      const w = () => {
        s(m), b && !b.persisted && b.afterLeave && b.afterLeave();
      };
      if (d.shapeFlag & 1 && b && !b.persisted) {
        const { leave: C, delayLeave: E } = b,
          S = () => C(m, w);
        E ? E(d.el, w, S) : S();
      } else w();
    },
    Ze = (d, p) => {
      let m;
      for (; d !== p; ) (m = h(d)), s(d), (d = m);
      s(p);
    },
    It = (d, p, m) => {
      const { bum: _, scope: b, job: w, subTree: C, um: E, m: S, a: P } = d;
      Ka(S),
        Ka(P),
        _ && qo(_),
        b.stop(),
        w && ((w.flags |= 8), he(C, d, p, m)),
        E && nt(E, p),
        nt(() => {
          d.isUnmounted = !0;
        }, p),
        p &&
          p.pendingBranch &&
          !p.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === p.pendingId &&
          (p.deps--, p.deps === 0 && p.resolve());
    },
    ye = (d, p, m, _ = !1, b = !1, w = 0) => {
      for (let C = w; C < d.length; C++) he(d[C], p, m, _, b);
    },
    y = (d) => {
      if (d.shapeFlag & 6) return y(d.component.subTree);
      if (d.shapeFlag & 128) return d.suspense.next();
      const p = h(d.anchor || d.el),
        m = p && p[u_];
      return m ? h(m) : p;
    };
  let T = !1;
  const k = (d, p, m) => {
      d == null
        ? p._vnode && he(p._vnode, null, null, !0)
        : R(p._vnode || null, d, p, null, null, null, m),
        (p._vnode = d),
        T || ((T = !0), Na(), td(), (T = !1));
    },
    I = { p: R, um: he, m: ke, r: Xe, mt: oe, mc: ie, pc: ee, pbc: q, n: y, o: e };
  return { render: k, hydrate: void 0, createApp: I_(k) };
}
function Yo({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n;
}
function Tn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function V_(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function kd(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (Z(r) && Z(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = s[o] = fn(s[o])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && kd(i, a)),
        a.type === yo && (a.el = i.el);
    }
}
function W_(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const f = e[r];
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (a = (o + i) >> 1), e[n[a]] < f ? (o = a + 1) : (i = a);
      f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function Rd(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Rd(t);
}
function Ka(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const z_ = Symbol.for('v-scx'),
  K_ = () => Jt(z_);
function Cs(e, t, n) {
  return Td(e, t, n);
}
function Td(e, t, n = me) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    a = Oe({}, n),
    l = (t && r) || (!t && o !== 'post');
  let f;
  if (ns) {
    if (o === 'sync') {
      const g = K_();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {};
      return (g.stop = Mt), (g.resume = Mt), (g.pause = Mt), g;
    }
  }
  const c = Le;
  a.call = (g, x, R) => wt(g, c, x, R);
  let u = !1;
  o === 'post'
    ? (a.scheduler = (g) => {
        nt(g, c && c.suspense);
      })
    : o !== 'sync' &&
      ((u = !0),
      (a.scheduler = (g, x) => {
        x ? g() : yl(g);
      })),
    (a.augmentJob = (g) => {
      t && (g.flags |= 4), u && ((g.flags |= 2), c && ((g.id = c.uid), (g.i = c)));
    });
  const h = o_(e, t, a);
  return ns && (f ? f.push(h) : l && h()), h;
}
function G_(e, t, n) {
  const r = this.proxy,
    s = Pe(e) ? (e.includes('.') ? Od(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  ne(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = us(this),
    a = Td(s, o.bind(r), n);
  return i(), a;
}
function Od(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const J_ = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ht(t)}Modifiers`] || e[`${qn(t)}Modifiers`];
function Y_(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || me;
  let s = n;
  const o = t.startsWith('update:'),
    i = o && J_(r, t.slice(7));
  i && (i.trim && (s = n.map((c) => (Pe(c) ? c.trim() : c))), i.number && (s = n.map(Ev)));
  let a,
    l = r[(a = Uo(t))] || r[(a = Uo(ht(t)))];
  !l && o && (l = r[(a = Uo(qn(t)))]), l && wt(l, e, 6, s);
  const f = r[a + 'Once'];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), wt(f, e, 6, s);
  }
}
function Ad(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!ne(e)) {
    const l = (f) => {
      const c = Ad(f, t, !0);
      c && ((a = !0), Oe(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? (xe(e) && r.set(e, null), null)
    : (Z(o) ? o.forEach((l) => (i[l] = null)) : Oe(i, o), xe(e) && r.set(e, i), i);
}
function _o(e, t) {
  return !e || !io(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      de(e, t[0].toLowerCase() + t.slice(1)) || de(e, qn(t)) || de(e, t));
}
function Ga(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: a,
      emit: l,
      render: f,
      renderCache: c,
      props: u,
      data: h,
      setupState: g,
      ctx: x,
      inheritAttrs: R,
    } = e,
    N = Ds(e);
  let $, M;
  try {
    if (n.shapeFlag & 4) {
      const O = s || r,
        U = O;
      ($ = Ot(f.call(U, O, c, u, g, h, x))), (M = a);
    } else {
      const O = t;
      ($ = Ot(O.length > 1 ? O(u, { attrs: a, slots: i, emit: l }) : O(u, null))),
        (M = t.props ? a : Q_(a));
    }
  } catch (O) {
    (Dr.length = 0), ho(O, e, 1), ($ = at(Je));
  }
  let j = $;
  if (M && R !== !1) {
    const O = Object.keys(M),
      { shapeFlag: U } = j;
    O.length && U & 7 && (o && O.some(ll) && (M = X_(M, o)), (j = vn(j, M, !1, !0)));
  }
  return (
    n.dirs && ((j = vn(j, null, !1, !0)), (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && es(j, n.transition),
    ($ = j),
    Ds(N),
    $
  );
}
const Q_ = (e) => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || io(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  X_ = (e, t) => {
    const n = {};
    for (const r in e) (!ll(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Z_(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: l } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Ja(r, i, f) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const h = c[u];
        if (i[h] !== r[h] && !_o(f, h)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? Ja(r, i, f) : !0) : !!i;
  return !1;
}
function Ja(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !_o(n, o)) return !0;
  }
  return !1;
}
function ey({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Ld = (e) => e.__isSuspense;
function ty(e, t) {
  t && t.pendingBranch ? (Z(e) ? t.effects.push(...e) : t.effects.push(e)) : a_(e);
}
const Tt = Symbol.for('v-fgt'),
  yo = Symbol.for('v-txt'),
  Je = Symbol.for('v-cmt'),
  Qo = Symbol.for('v-stc'),
  Dr = [];
let lt = null;
function Md(e = !1) {
  Dr.push((lt = e ? null : []));
}
function ny() {
  Dr.pop(), (lt = Dr[Dr.length - 1] || null);
}
let ts = 1;
function Ya(e, t = !1) {
  (ts += e), e < 0 && lt && t && (lt.hasOnce = !0);
}
function Fd(e) {
  return (e.dynamicChildren = ts > 0 ? lt || rr : null), ny(), ts > 0 && lt && lt.push(e), e;
}
function J0(e, t, n, r, s, o) {
  return Fd($d(e, t, n, r, s, o, !0));
}
function Id(e, t, n, r, s) {
  return Fd(at(e, t, n, r, s, !0));
}
function Bs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function In(e, t) {
  return e.type === t.type && e.key === t.key;
}
const jd = ({ key: e }) => e ?? null,
  Ps = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (Pe(e) || Ue(e) || ne(e) ? { i: Qe, r: e, k: t, f: !!n } : e) : null
  );
function $d(e, t = null, n = null, r = 0, s = null, o = e === Tt ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && jd(t),
    ref: t && Ps(t),
    scopeId: rd,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Qe,
  };
  return (
    a ? (wl(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Pe(n) ? 8 : 16),
    ts > 0 && !i && lt && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && lt.push(l),
    l
  );
}
const at = ry;
function ry(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === P_) && (e = Je), Bs(e))) {
    const a = vn(e, t, !0);
    return (
      n && wl(a, n),
      ts > 0 && !o && lt && (a.shapeFlag & 6 ? (lt[lt.indexOf(e)] = a) : lt.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((my(e) && (e = e.__vccOpts), t)) {
    t = sy(t);
    let { class: a, style: l } = t;
    a && !Pe(a) && (t.class = fl(a)),
      xe(l) && (_l(l) && !Z(l) && (l = Oe({}, l)), (t.style = ul(l)));
  }
  const i = Pe(e) ? 1 : Ld(e) ? 128 : sd(e) ? 64 : xe(e) ? 4 : ne(e) ? 2 : 0;
  return $d(e, t, n, r, s, i, o, !0);
}
function sy(e) {
  return e ? (_l(e) || bd(e) ? Oe({}, e) : e) : null;
}
function vn(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e,
    f = t ? iy(s || {}, t) : s,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && jd(f),
      ref: t && t.ref ? (n && o ? (Z(o) ? o.concat(Ps(t)) : [o, Ps(t)]) : Ps(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Tt ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && vn(e.ssContent),
      ssFallback: e.ssFallback && vn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && es(c, l.clone(c)), c;
}
function oy(e = ' ', t = 0) {
  return at(yo, null, e, t);
}
function Y0(e = '', t = !1) {
  return t ? (Md(), Id(Je, null, e)) : at(Je, null, e);
}
function Ot(e) {
  return e == null || typeof e == 'boolean'
    ? at(Je)
    : Z(e)
      ? at(Tt, null, e.slice())
      : Bs(e)
        ? fn(e)
        : at(yo, null, String(e));
}
function fn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : vn(e);
}
function wl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (Z(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), wl(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !bd(t)
        ? (t._ctx = Qe)
        : s === 3 && Qe && (Qe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ne(t)
      ? ((t = { default: t, _ctx: Qe }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [oy(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function iy(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === 'class') t.class !== r.class && (t.class = fl([t.class, r.class]));
      else if (s === 'style') t.style = ul([t.style, r.style]);
      else if (io(s)) {
        const o = t[s],
          i = r[s];
        i && o !== i && !(Z(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== '' && (t[s] = r[s]);
  }
  return t;
}
function Et(e, t, n, r = null) {
  wt(e, t, 7, [n, r]);
}
const ly = vd();
let ay = 0;
function cy(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || ly,
    o = {
      uid: ay++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Mv(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: xd(r, s),
      emitsOptions: Ad(r, s),
      emit: null,
      emitted: null,
      propsDefaults: me,
      inheritAttrs: r.inheritAttrs,
      ctx: me,
      data: me,
      props: me,
      attrs: me,
      slots: me,
      refs: me,
      setupState: me,
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
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = Y_.bind(null, o)), e.ce && e.ce(o), o
  );
}
let Le = null;
const uy = () => Le || Qe;
let Us, Mi;
{
  const e = uo(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (Us = t('__VUE_INSTANCE_SETTERS__', (n) => (Le = n))),
    (Mi = t('__VUE_SSR_SETTERS__', (n) => (ns = n)));
}
const us = (e) => {
    const t = Le;
    return (
      Us(e),
      e.scope.on(),
      () => {
        e.scope.off(), Us(t);
      }
    );
  },
  Qa = () => {
    Le && Le.scope.off(), Us(null);
  };
function Dd(e) {
  return e.vnode.shapeFlag & 4;
}
let ns = !1;
function fy(e, t = !1, n = !1) {
  t && Mi(t);
  const { props: r, children: s } = e.vnode,
    o = Dd(e);
  j_(e, r, o, t), H_(e, s, n);
  const i = o ? dy(e, t) : void 0;
  return t && Mi(!1), i;
}
function dy(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, R_));
  const { setup: r } = n;
  if (r) {
    xn();
    const s = (e.setupContext = r.length > 1 ? hy(e) : null),
      o = us(e),
      i = cs(r, e, 0, [e.props, s]),
      a = Pf(i);
    if ((Sn(), o(), (a || e.sp) && !jr(e) && ud(e), a)) {
      if ((i.then(Qa, Qa), t))
        return i
          .then((l) => {
            Xa(e, l);
          })
          .catch((l) => {
            ho(l, e, 0);
          });
      e.asyncDep = i;
    } else Xa(e, i);
  } else Nd(e);
}
function Xa(e, t, n) {
  ne(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : xe(t) && (e.setupState = Qf(t)),
    Nd(e);
}
function Nd(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Mt);
  {
    const s = us(e);
    xn();
    try {
      T_(e);
    } finally {
      Sn(), s();
    }
  }
}
const py = {
  get(e, t) {
    return Ne(e, 'get', ''), e[t];
  },
};
function hy(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, py), slots: e.slots, emit: e.emit, expose: t };
}
function bo(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Qf(po(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in $r) return $r[n](e);
          },
          has(t, n) {
            return n in t || n in $r;
          },
        }))
    : e.proxy;
}
function gy(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function my(e) {
  return ne(e) && '__vccOpts' in e;
}
const mt = (e, t) => r_(e, t, ns);
function xl(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? xe(t) && !Z(t)
      ? Bs(t)
        ? at(e, null, [t])
        : at(e, t)
      : at(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Bs(n) && (n = [n]),
      at(e, t, n));
}
const vy = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Fi;
const Za = typeof window < 'u' && window.trustedTypes;
if (Za)
  try {
    Fi = Za.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const Hd = Fi ? (e) => Fi.createHTML(e) : (e) => e,
  _y = 'http://www.w3.org/2000/svg',
  yy = 'http://www.w3.org/1998/Math/MathML',
  qt = typeof document < 'u' ? document : null,
  ec = qt && qt.createElement('template'),
  by = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === 'svg'
          ? qt.createElementNS(_y, e)
          : t === 'mathml'
            ? qt.createElementNS(yy, e)
            : n
              ? qt.createElement(e, { is: n })
              : qt.createElement(e);
      return e === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple), s;
    },
    createText: (e) => qt.createTextNode(e),
    createComment: (e) => qt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => qt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); );
      else {
        ec.innerHTML = Hd(
          r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e,
        );
        const a = ec.content;
        if (r === 'svg' || r === 'mathml') {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    },
  },
  tn = 'transition',
  wr = 'animation',
  rs = Symbol('_vtc'),
  Bd = {
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
  wy = Oe({}, od, Bd),
  xy = (e) => ((e.displayName = 'Transition'), (e.props = wy), e),
  Q0 = xy((e, { slots: t }) => xl(p_, Sy(e), t)),
  On = (e, t = []) => {
    Z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  tc = (e) => (e ? (Z(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Sy(e) {
  const t = {};
  for (const A in e) A in Bd || (t[A] = e[A]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: f = i,
      appearToClass: c = a,
      leaveFromClass: u = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = e,
    x = Ey(s),
    R = x && x[0],
    N = x && x[1],
    {
      onBeforeEnter: $,
      onEnter: M,
      onEnterCancelled: j,
      onLeave: O,
      onLeaveCancelled: U,
      onBeforeAppear: J = $,
      onAppear: K = M,
      onAppearCancelled: ie = j,
    } = t,
    H = (A, V, oe, se) => {
      (A._enterCancelled = se), An(A, V ? c : a), An(A, V ? f : i), oe && oe();
    },
    q = (A, V) => {
      (A._isLeaving = !1), An(A, u), An(A, g), An(A, h), V && V();
    },
    Y = (A) => (V, oe) => {
      const se = A ? K : M,
        Q = () => H(V, A, oe);
      On(se, [V, Q]),
        nc(() => {
          An(V, A ? l : o), Ht(V, A ? c : a), tc(se) || rc(V, r, R, Q);
        });
    };
  return Oe(t, {
    onBeforeEnter(A) {
      On($, [A]), Ht(A, o), Ht(A, i);
    },
    onBeforeAppear(A) {
      On(J, [A]), Ht(A, l), Ht(A, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(A, V) {
      A._isLeaving = !0;
      const oe = () => q(A, V);
      Ht(A, u),
        A._enterCancelled ? (Ht(A, h), ic()) : (ic(), Ht(A, h)),
        nc(() => {
          A._isLeaving && (An(A, u), Ht(A, g), tc(O) || rc(A, r, N, oe));
        }),
        On(O, [A, oe]);
    },
    onEnterCancelled(A) {
      H(A, !1, void 0, !0), On(j, [A]);
    },
    onAppearCancelled(A) {
      H(A, !0, void 0, !0), On(ie, [A]);
    },
    onLeaveCancelled(A) {
      q(A), On(U, [A]);
    },
  });
}
function Ey(e) {
  if (e == null) return null;
  if (xe(e)) return [Xo(e.enter), Xo(e.leave)];
  {
    const t = Xo(e);
    return [t, t];
  }
}
function Xo(e) {
  return Cv(e);
}
function Ht(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[rs] || (e[rs] = new Set())).add(t);
}
function An(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[rs];
  n && (n.delete(t), n.size || (e[rs] = void 0));
}
function nc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Cy = 0;
function rc(e, t, n, r) {
  const s = (e._endId = ++Cy),
    o = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = Py(e, t);
  if (!i) return r();
  const f = i + 'end';
  let c = 0;
  const u = () => {
      e.removeEventListener(f, h), o();
    },
    h = (g) => {
      g.target === e && ++c >= l && u();
    };
  setTimeout(() => {
    c < l && u();
  }, a + 1),
    e.addEventListener(f, h);
}
function Py(e, t) {
  const n = window.getComputedStyle(e),
    r = (x) => (n[x] || '').split(', '),
    s = r(`${tn}Delay`),
    o = r(`${tn}Duration`),
    i = sc(s, o),
    a = r(`${wr}Delay`),
    l = r(`${wr}Duration`),
    f = sc(a, l);
  let c = null,
    u = 0,
    h = 0;
  t === tn
    ? i > 0 && ((c = tn), (u = i), (h = o.length))
    : t === wr
      ? f > 0 && ((c = wr), (u = f), (h = l.length))
      : ((u = Math.max(i, f)),
        (c = u > 0 ? (i > f ? tn : wr) : null),
        (h = c ? (c === tn ? o.length : l.length) : 0));
  const g = c === tn && /\b(transform|all)(,|$)/.test(r(`${tn}Property`).toString());
  return { type: c, timeout: u, propCount: h, hasTransform: g };
}
function sc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => oc(n) + oc(e[r])));
}
function oc(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function ic() {
  return document.body.offsetHeight;
}
function ky(e, t, n) {
  const r = e[rs];
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
const lc = Symbol('_vod'),
  Ry = Symbol('_vsh'),
  Ty = Symbol(''),
  Oy = /(^|;)\s*display\s*:/;
function Ay(e, t, n) {
  const r = e.style,
    s = Pe(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (Pe(t))
        for (const i of t.split(';')) {
          const a = i.slice(0, i.indexOf(':')).trim();
          n[a] == null && ks(r, a, '');
        }
      else for (const i in t) n[i] == null && ks(r, i, '');
    for (const i in n) i === 'display' && (o = !0), ks(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[Ty];
      i && (n += ';' + i), (r.cssText = n), (o = Oy.test(n));
    }
  } else t && e.removeAttribute('style');
  lc in e && ((e[lc] = o ? r.display : ''), e[Ry] && (r.display = 'none'));
}
const ac = /\s*!important$/;
function ks(e, t, n) {
  if (Z(n)) n.forEach((r) => ks(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = Ly(e, t);
    ac.test(n) ? e.setProperty(qn(r), n.replace(ac, ''), 'important') : (e[r] = n);
  }
}
const cc = ['Webkit', 'Moz', 'ms'],
  Zo = {};
function Ly(e, t) {
  const n = Zo[t];
  if (n) return n;
  let r = ht(t);
  if (r !== 'filter' && r in e) return (Zo[t] = r);
  r = co(r);
  for (let s = 0; s < cc.length; s++) {
    const o = cc[s] + r;
    if (o in e) return (Zo[t] = o);
  }
  return t;
}
const uc = 'http://www.w3.org/1999/xlink';
function fc(e, t, n, r, s, o = Av(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(uc, t.slice(6, t.length))
      : e.setAttributeNS(uc, t, n)
    : n == null || (o && !Of(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : wn(n) ? String(n) : n);
}
function dc(e, t, n, r, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Hd(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const a = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n);
    (a !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === '' || n == null) {
    const a = typeof e[t];
    a === 'boolean'
      ? (n = Of(n))
      : n == null && a === 'string'
        ? ((n = ''), (i = !0))
        : a === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function My(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Fy(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const pc = Symbol('_vei');
function Iy(e, t, n, r, s = null) {
  const o = e[pc] || (e[pc] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = jy(t);
    if (r) {
      const f = (o[t] = Ny(r, s));
      My(e, a, f, l);
    } else i && (Fy(e, a, i, l), (o[t] = void 0));
  }
}
const hc = /(?:Once|Passive|Capture)$/;
function jy(e) {
  let t;
  if (hc.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(hc)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : qn(e.slice(2)), t];
}
let ei = 0;
const $y = Promise.resolve(),
  Dy = () => ei || ($y.then(() => (ei = 0)), (ei = Date.now()));
function Ny(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    wt(Hy(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = Dy()), n;
}
function Hy(e, t) {
  if (Z(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const gc = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  By = (e, t, n, r, s, o) => {
    const i = s === 'svg';
    t === 'class'
      ? ky(e, r, i)
      : t === 'style'
        ? Ay(e, n, r)
        : io(t)
          ? ll(t) || Iy(e, t, n, r, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Uy(e, t, r, i)
              )
            ? (dc(e, t, r),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                fc(e, t, r, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !Pe(r))
              ? dc(e, ht(t), r, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = r)
                  : t === 'false-value' && (e._falseValue = r),
                fc(e, t, r, i));
  };
function Uy(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && gc(t) && ne(n)));
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const s = e.tagName;
    if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE') return !1;
  }
  return gc(t) && Pe(n) ? !1 : t in e;
}
const qy = Oe({ patchProp: By }, by);
let mc;
function Vy() {
  return mc || (mc = U_(qy));
}
const Wy = (...e) => {
  const t = Vy().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = Ky(r);
      if (!s) return;
      const o = t._component;
      !ne(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = '');
      const i = n(s, !1, zy(s));
      return (
        s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), i
      );
    }),
    t
  );
};
function zy(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function Ky(e) {
  return Pe(e) ? document.querySelector(e) : e;
}
function Sl(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: !0 }), e;
}
const Bn = Jf(!1);
let Ii;
function Gy(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    [];
  return {
    browser: n[5] || n[3] || n[1] || '',
    version: n[4] || n[2] || '0',
    platform: t[0] || '',
  };
}
function Jy(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  );
}
const Ud = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0;
function Yy(e) {
  const t = e.toLowerCase(),
    n = Jy(t),
    r = Gy(t, n),
    s = {
      mobile: !1,
      desktop: !1,
      cordova: !1,
      capacitor: !1,
      nativeMobile: !1,
      electron: !1,
      bex: !1,
      linux: !1,
      mac: !1,
      win: !1,
      cros: !1,
      chrome: !1,
      firefox: !1,
      opera: !1,
      safari: !1,
      vivaldi: !1,
      edge: !1,
      edgeChromium: !1,
      ie: !1,
      webkit: !1,
      android: !1,
      ios: !1,
      ipad: !1,
      iphone: !1,
      ipod: !1,
      kindle: !1,
      winphone: !1,
      blackberry: !1,
      playbook: !1,
      silk: !1,
    };
  r.browser &&
    ((s[r.browser] = !0), (s.version = r.version), (s.versionNumber = parseInt(r.version, 10))),
    r.platform && (s[r.platform] = !0);
  const o =
    s.android ||
    s.ios ||
    s.bb ||
    s.blackberry ||
    s.ipad ||
    s.iphone ||
    s.ipod ||
    s.kindle ||
    s.playbook ||
    s.silk ||
    s['windows phone'];
  if (
    (o === !0 || t.indexOf('mobile') !== -1 ? (s.mobile = !0) : (s.desktop = !0),
    s['windows phone'] && ((s.winphone = !0), delete s['windows phone']),
    s.edga || s.edgios || s.edg
      ? ((s.edge = !0), (r.browser = 'edge'))
      : s.crios
        ? ((s.chrome = !0), (r.browser = 'chrome'))
        : s.fxios && ((s.firefox = !0), (r.browser = 'firefox')),
    (s.ipod || s.ipad || s.iphone) && (s.ios = !0),
    s.vivaldi && ((r.browser = 'vivaldi'), (s.vivaldi = !0)),
    (s.chrome || s.opr || s.safari || s.vivaldi || (s.mobile === !0 && s.ios !== !0 && o !== !0)) &&
      (s.webkit = !0),
    s.opr && ((r.browser = 'opera'), (s.opera = !0)),
    s.safari &&
      (s.blackberry || s.bb
        ? ((r.browser = 'blackberry'), (s.blackberry = !0))
        : s.playbook
          ? ((r.browser = 'playbook'), (s.playbook = !0))
          : s.android
            ? ((r.browser = 'android'), (s.android = !0))
            : s.kindle
              ? ((r.browser = 'kindle'), (s.kindle = !0))
              : s.silk && ((r.browser = 'silk'), (s.silk = !0))),
    (s.name = r.browser),
    (s.platform = r.platform),
    t.indexOf('electron') !== -1)
  )
    s.electron = !0;
  else if (document.location.href.indexOf('-extension://') !== -1) s.bex = !0;
  else {
    if (
      (window.Capacitor !== void 0
        ? ((s.capacitor = !0), (s.nativeMobile = !0), (s.nativeMobileWrapper = 'capacitor'))
        : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
          ((s.cordova = !0), (s.nativeMobile = !0), (s.nativeMobileWrapper = 'cordova')),
      Bn.value === !0 && (Ii = { is: { ...s } }),
      Ud === !0 &&
        s.mac === !0 &&
        ((s.desktop === !0 && s.safari === !0) ||
          (s.nativeMobile === !0 && s.android !== !0 && s.ios !== !0 && s.ipad !== !0)))
    ) {
      delete s.mac, delete s.desktop;
      const i = Math.min(window.innerHeight, window.innerWidth) > 414 ? 'ipad' : 'iphone';
      Object.assign(s, { mobile: !0, ios: !0, platform: i, [i]: !0 });
    }
    s.mobile !== !0 &&
      window.navigator.userAgentData &&
      window.navigator.userAgentData.mobile &&
      (delete s.desktop, (s.mobile = !0));
  }
  return s;
}
const vc = navigator.userAgent || navigator.vendor || window.opera,
  Qy = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  Ft = {
    userAgent: vc,
    is: Yy(vc),
    has: { touch: Ud },
    within: { iframe: window.self !== window.top },
  },
  ji = {
    install(e) {
      const { $q: t } = e;
      Bn.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, Ft), (Bn.value = !1);
          }),
          (t.platform = mr(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  Sl(Ft.has, 'webStorage', () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Object.assign(ji, Ft),
    Bn.value === !0 && (Object.assign(ji, Ii, Qy), (Ii = null));
}
function X0(e) {
  return po(go(e));
}
function Z0(e) {
  return po(e);
}
const wo = (e, t) => {
    const n = mr(e);
    for (const r in e)
      Sl(
        t,
        r,
        () => n[r],
        (s) => {
          n[r] = s;
        },
      );
    return t;
  },
  dr = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign(dr, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 },
      });
    },
  });
  window.addEventListener('qtest', null, e), window.removeEventListener('qtest', null, e);
} catch {}
function ss() {}
function ew(e) {
  return e.button === 0;
}
function tw(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
        ? (e = e.changedTouches[0])
        : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function nw(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === 'HTML')) return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function rw(e) {
  e.stopPropagation();
}
function _c(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function sw(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function ow(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0), r.addEventListener('dragstart', _c, dr.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented, r.removeEventListener('dragstart', _c, dr.notPassiveCapture);
        };
  e.querySelectorAll('a, img').forEach(n);
}
function iw(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((s) => {
      s[0].addEventListener(s[1], e[s[2]], dr[s[3]]);
    });
}
function lw(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], dr[r[3]]);
    }),
    (e[n] = void 0));
}
function Xy(e, t = 250, n) {
  let r = null;
  function s() {
    const o = arguments,
      i = () => {
        (r = null), e.apply(this, o);
      };
    r !== null && clearTimeout(r), (r = setTimeout(i, t));
  }
  return (
    (s.cancel = () => {
      r !== null && clearTimeout(r);
    }),
    s
  );
}
const ti = ['sm', 'md', 'lg', 'xl'],
  { passive: yc } = dr,
  Zy = wo(
    {
      width: 0,
      height: 0,
      name: 'xs',
      sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 },
      lt: { sm: !0, md: !0, lg: !0, xl: !0 },
      gt: { xs: !1, sm: !1, md: !1, lg: !1 },
      xs: !0,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
    },
    {
      setSizes: ss,
      setDebounce: ss,
      install({ $q: e, onSSRHydrated: t }) {
        if (((e.screen = this), this.__installed === !0)) {
          e.config.screen !== void 0 &&
            (e.config.screen.bodyClasses === !1
              ? document.body.classList.remove(`screen--${this.name}`)
              : this.__update(!0));
          return;
        }
        const { visualViewport: n } = window,
          r = n || window,
          s = document.scrollingElement || document.documentElement,
          o =
            n === void 0 || Ft.is.mobile === !0
              ? () => [
                  Math.max(window.innerWidth, s.clientWidth),
                  Math.max(window.innerHeight, s.clientHeight),
                ]
              : () => [
                  n.width * n.scale + window.innerWidth - s.clientWidth,
                  n.height * n.scale + window.innerHeight - s.clientHeight,
                ],
          i = e.config.screen?.bodyClasses === !0;
        this.__update = (u) => {
          const [h, g] = o();
          if ((g !== this.height && (this.height = g), h !== this.width)) this.width = h;
          else if (u !== !0) return;
          let x = this.sizes;
          (this.gt.xs = h >= x.sm),
            (this.gt.sm = h >= x.md),
            (this.gt.md = h >= x.lg),
            (this.gt.lg = h >= x.xl),
            (this.lt.sm = h < x.sm),
            (this.lt.md = h < x.md),
            (this.lt.lg = h < x.lg),
            (this.lt.xl = h < x.xl),
            (this.xs = this.lt.sm),
            (this.sm = this.gt.xs === !0 && this.lt.md === !0),
            (this.md = this.gt.sm === !0 && this.lt.lg === !0),
            (this.lg = this.gt.md === !0 && this.lt.xl === !0),
            (this.xl = this.gt.lg),
            (x =
              (this.xs === !0 && 'xs') ||
              (this.sm === !0 && 'sm') ||
              (this.md === !0 && 'md') ||
              (this.lg === !0 && 'lg') ||
              'xl'),
            x !== this.name &&
              (i === !0 &&
                (document.body.classList.remove(`screen--${this.name}`),
                document.body.classList.add(`screen--${x}`)),
              (this.name = x));
        };
        let a,
          l = {},
          f = 16;
        (this.setSizes = (u) => {
          ti.forEach((h) => {
            u[h] !== void 0 && (l[h] = u[h]);
          });
        }),
          (this.setDebounce = (u) => {
            f = u;
          });
        const c = () => {
          const u = getComputedStyle(document.body);
          u.getPropertyValue('--q-size-sm') &&
            ti.forEach((h) => {
              this.sizes[h] = parseInt(u.getPropertyValue(`--q-size-${h}`), 10);
            }),
            (this.setSizes = (h) => {
              ti.forEach((g) => {
                h[g] && (this.sizes[g] = h[g]);
              }),
                this.__update(!0);
            }),
            (this.setDebounce = (h) => {
              a !== void 0 && r.removeEventListener('resize', a, yc),
                (a = h > 0 ? Xy(this.__update, h) : this.__update),
                r.addEventListener('resize', a, yc);
            }),
            this.setDebounce(f),
            Object.keys(l).length !== 0 ? (this.setSizes(l), (l = void 0)) : this.__update(),
            i === !0 && this.name === 'xs' && document.body.classList.add('screen--xs');
        };
        Bn.value === !0 ? t.push(c) : c();
      },
    },
  ),
  je = wo(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (je.mode = e),
          e === 'auto'
            ? (je.__media === void 0 &&
                ((je.__media = window.matchMedia('(prefers-color-scheme: dark)')),
                (je.__updateMedia = () => {
                  je.set('auto');
                }),
                je.__media.addListener(je.__updateMedia)),
              (e = je.__media.matches))
            : je.__media !== void 0 &&
              (je.__media.removeListener(je.__updateMedia), (je.__media = void 0)),
          (je.isActive = e === !0),
          document.body.classList.remove(`body--${e === !0 ? 'light' : 'dark'}`),
          document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`);
      },
      toggle() {
        je.set(je.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const { dark: n } = e.config;
        (e.dark = this), this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
      },
    },
  );
function eb(e, t, n = document.body) {
  if (typeof e != 'string') throw new TypeError('Expected a string as propName');
  if (typeof t != 'string') throw new TypeError('Expected a string as value');
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element');
  n.style.setProperty(`--q-${e}`, t);
}
let qd = !1;
function tb(e) {
  qd = e.isComposing === !0;
}
function nb(e) {
  return qd === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function aw(e, t) {
  return nb(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Vd(e) {
  if (e.ios === !0) return 'ios';
  if (e.android === !0) return 'android';
}
function rb({ is: e, has: t, within: n }, r) {
  const s = [e.desktop === !0 ? 'desktop' : 'mobile', `${t.touch === !1 ? 'no-' : ''}touch`];
  if (e.mobile === !0) {
    const o = Vd(e);
    o !== void 0 && s.push('platform-' + o);
  }
  if (e.nativeMobile === !0) {
    const o = e.nativeMobileWrapper;
    s.push(o),
      s.push('native-mobile'),
      e.ios === !0 &&
        (r[o] === void 0 || r[o].iosStatusBarPadding !== !1) &&
        s.push('q-ios-padding');
  } else e.electron === !0 ? s.push('electron') : e.bex === !0 && s.push('bex');
  return n.iframe === !0 && s.push('within-iframe'), s;
}
function sb() {
  const { is: e } = Ft,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, ' ').split(' '));
  if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete('mobile'), n.delete('platform-ios'), n.delete('platform-android'), n.add('desktop');
    else if (e.mobile === !0) {
      n.delete('desktop'), n.add('mobile'), n.delete('platform-ios'), n.delete('platform-android');
      const s = Vd(e);
      s !== void 0 && n.add(`platform-${s}`);
    }
  }
  Ft.has.touch === !0 && (n.delete('no-touch'), n.add('touch')),
    Ft.within.iframe === !0 && n.add('within-iframe');
  const r = Array.from(n).join(' ');
  t !== r && (document.body.className = r);
}
function ob(e) {
  for (const t in e) eb(t, e[t]);
}
const ib = {
    install(e) {
      if (this.__installed !== !0) {
        if (Bn.value === !0) sb();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && ob(t.config.brand);
          const n = rb(Ft, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        Ft.is.ios === !0 && document.body.addEventListener('touchstart', ss),
          window.addEventListener('keydown', tb, !0);
      }
    },
  },
  Wd = () => !0;
function lb(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/';
}
function ab(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substring(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substring(0, e.length - 1)),
    '#' + e
  );
}
function cb(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === '*') return Wd;
  const t = ['#/'];
  return (
    Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(lb).map(ab)),
    () => t.includes(window.location.hash)
  );
}
const ub = {
    __history: [],
    add: ss,
    remove: ss,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = Ft.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? 'cordova' : 'capacitor'];
      if (
        r?.backButton === !1 ||
        (n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (i) => {
        i.condition === void 0 && (i.condition = Wd), this.__history.push(i);
      }),
        (this.remove = (i) => {
          const a = this.__history.indexOf(i);
          a >= 0 && this.__history.splice(a, 1);
        });
      const s = cb(Object.assign({ backButtonExit: !0 }, r)),
        o = () => {
          if (this.__history.length) {
            const i = this.__history[this.__history.length - 1];
            i.condition() === !0 && (this.__history.pop(), i.handler());
          } else s() === !0 ? navigator.app.exitApp() : window.history.back();
        };
      t === !0
        ? document.addEventListener('deviceready', () => {
            document.addEventListener('backbutton', o, !1);
          })
        : window.Capacitor.Plugins.App.addListener('backButton', o);
    },
  },
  bc = {
    isoName: 'en-US',
    nativeName: 'English (US)',
    label: {
      clear: 'Clear',
      ok: 'OK',
      cancel: 'Cancel',
      close: 'Close',
      set: 'Set',
      select: 'Select',
      reset: 'Reset',
      remove: 'Remove',
      update: 'Update',
      create: 'Create',
      search: 'Search',
      filter: 'Filter',
      refresh: 'Refresh',
      expand: (e) => (e ? `Expand "${e}"` : 'Expand'),
      collapse: (e) => (e ? `Collapse "${e}"` : 'Collapse'),
    },
    date: {
      days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      months:
        'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_',
        ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      firstDayOfWeek: 0,
      format24h: !1,
      pluralDay: 'days',
      prevMonth: 'Previous month',
      nextMonth: 'Next month',
      prevYear: 'Previous year',
      nextYear: 'Next year',
      today: 'Today',
      prevRangeYears: (e) => `Previous ${e} years`,
      nextRangeYears: (e) => `Next ${e} years`,
    },
    table: {
      noData: 'No data available',
      noResults: 'No matching records found',
      loading: 'Loading...',
      selectedRecords: (e) =>
        e === 1 ? '1 record selected.' : (e === 0 ? 'No' : e) + ' records selected.',
      recordsPerPage: 'Records per page:',
      allRows: 'All',
      pagination: (e, t, n) => e + '-' + t + ' of ' + n,
      columns: 'Columns',
    },
    pagination: {
      first: 'First page',
      prev: 'Previous page',
      next: 'Next page',
      last: 'Last page',
    },
    editor: {
      url: 'URL',
      bold: 'Bold',
      italic: 'Italic',
      strikethrough: 'Strikethrough',
      underline: 'Underline',
      unorderedList: 'Unordered List',
      orderedList: 'Ordered List',
      subscript: 'Subscript',
      superscript: 'Superscript',
      hyperlink: 'Hyperlink',
      toggleFullscreen: 'Toggle Fullscreen',
      quote: 'Quote',
      left: 'Left align',
      center: 'Center align',
      right: 'Right align',
      justify: 'Justify align',
      print: 'Print',
      outdent: 'Decrease indentation',
      indent: 'Increase indentation',
      removeFormat: 'Remove formatting',
      formatting: 'Formatting',
      fontSize: 'Font Size',
      align: 'Align',
      hr: 'Insert Horizontal Rule',
      undo: 'Undo',
      redo: 'Redo',
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      heading3: 'Heading 3',
      heading4: 'Heading 4',
      heading5: 'Heading 5',
      heading6: 'Heading 6',
      paragraph: 'Paragraph',
      code: 'Code',
      size1: 'Very small',
      size2: 'A bit small',
      size3: 'Normal',
      size4: 'Medium-large',
      size5: 'Big',
      size6: 'Very big',
      size7: 'Maximum',
      defaultFont: 'Default Font',
      viewSource: 'View Source',
    },
    tree: { noNodes: 'No nodes available', noResults: 'No matching nodes found' },
  };
function wc() {
  const e =
    Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0
      ? navigator.languages[0]
      : navigator.language;
  if (typeof e == 'string')
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
            ? t.toUpperCase()
            : t[0].toUpperCase() + t.slice(1).toLowerCase(),
      )
      .join('-');
}
const dn = wo(
    { __qLang: {} },
    {
      getLocale: wc,
      set(e = bc, t) {
        const n = { ...e, rtl: e.rtl === !0, getLocale: wc };
        {
          if (
            ((n.set = dn.set), dn.__langConfig === void 0 || dn.__langConfig.noHtmlAttrs !== !0)
          ) {
            const r = document.documentElement;
            r.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'), r.setAttribute('lang', n.isoName);
          }
          Object.assign(dn.__qLang, n);
        }
      },
      install({ $q: e, lang: t, ssrContext: n }) {
        (e.lang = dn.__qLang),
          (dn.__langConfig = e.config.lang),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : ((this.props = new Proxy(this.__qLang, {
                get() {
                  return Reflect.get(...arguments);
                },
                ownKeys(r) {
                  return Reflect.ownKeys(r).filter((s) => s !== 'set' && s !== 'getLocale');
                },
              })),
              this.set(t || bc));
      },
    },
  ),
  fb = {
    name: 'material-icons',
    type: { positive: 'check_circle', negative: 'warning', info: 'info', warning: 'priority_high' },
    arrow: {
      up: 'arrow_upward',
      right: 'arrow_forward',
      down: 'arrow_downward',
      left: 'arrow_back',
      dropdown: 'arrow_drop_down',
    },
    chevron: { left: 'chevron_left', right: 'chevron_right' },
    colorPicker: { spectrum: 'gradient', tune: 'tune', palette: 'style' },
    pullToRefresh: { icon: 'refresh' },
    carousel: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
      navigationIcon: 'lens',
    },
    chip: { remove: 'cancel', selected: 'check' },
    datetime: {
      arrowLeft: 'chevron_left',
      arrowRight: 'chevron_right',
      now: 'access_time',
      today: 'today',
    },
    editor: {
      bold: 'format_bold',
      italic: 'format_italic',
      strikethrough: 'strikethrough_s',
      underline: 'format_underlined',
      unorderedList: 'format_list_bulleted',
      orderedList: 'format_list_numbered',
      subscript: 'vertical_align_bottom',
      superscript: 'vertical_align_top',
      hyperlink: 'link',
      toggleFullscreen: 'fullscreen',
      quote: 'format_quote',
      left: 'format_align_left',
      center: 'format_align_center',
      right: 'format_align_right',
      justify: 'format_align_justify',
      print: 'print',
      outdent: 'format_indent_decrease',
      indent: 'format_indent_increase',
      removeFormat: 'format_clear',
      formatting: 'text_format',
      fontSize: 'format_size',
      align: 'format_align_left',
      hr: 'remove',
      undo: 'undo',
      redo: 'redo',
      heading: 'format_size',
      code: 'code',
      size: 'format_size',
      font: 'font_download',
      viewSource: 'code',
    },
    expansionItem: { icon: 'keyboard_arrow_down', denseIcon: 'arrow_drop_down' },
    fab: { icon: 'add', activeIcon: 'close' },
    field: { clear: 'cancel', error: 'error' },
    pagination: {
      first: 'first_page',
      prev: 'keyboard_arrow_left',
      next: 'keyboard_arrow_right',
      last: 'last_page',
    },
    rating: { icon: 'grade' },
    stepper: { done: 'check', active: 'edit', error: 'warning' },
    tabs: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
    },
    table: {
      arrowUp: 'arrow_upward',
      warning: 'warning',
      firstPage: 'first_page',
      prevPage: 'chevron_left',
      nextPage: 'chevron_right',
      lastPage: 'last_page',
    },
    tree: { icon: 'play_arrow' },
    uploader: {
      done: 'done',
      clear: 'clear',
      add: 'add_box',
      upload: 'cloud_upload',
      removeQueue: 'clear_all',
      removeUploaded: 'done_all',
    },
  },
  qs = wo(
    { iconMapFn: null, __qIconSet: {} },
    {
      set(e, t) {
        const n = { ...e };
        (n.set = qs.set), Object.assign(qs.__qIconSet, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__qIconSet),
          Sl(
            e,
            'iconMapFn',
            () => this.iconMapFn,
            (r) => {
              this.iconMapFn = r;
            },
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : ((this.props = new Proxy(this.__qIconSet, {
                get() {
                  return Reflect.get(...arguments);
                },
                ownKeys(r) {
                  return Reflect.ownKeys(r).filter((s) => s !== 'set');
                },
              })),
              this.set(t || fb));
      },
    },
  ),
  db = '_q_',
  cw = '_q_l_',
  uw = '_q_pc_';
function fw() {}
const xc = {};
let zd = !1;
function pb() {
  zd = !0;
}
function Sc(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0;
}
const Ec = [ji, ib, je, Zy, ub, dn, qs];
function Cc(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function hb(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(db, n.$q),
    Cc(n, Ec),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        Sc(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        Sc(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      Cc(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == 'function' && Ec.includes(r) === !1,
        ),
      ),
    Bn.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
const gb = function (e, t = {}) {
    const n = { version: '2.18.1' };
    zd === !1
      ? (t.config !== void 0 && Object.assign(xc, t.config), (n.config = { ...xc }), pb())
      : (n.config = t.config || {}),
      hb(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
  },
  mb = { name: 'Quasar', version: '2.18.1', install: gb, lang: dn, iconSet: qs },
  vb = go({
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const r = C_('router-view');
        return Md(), Id(r);
      };
    },
  }),
  _b = (e) => e,
  yb = _b;
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const Jn = typeof document < 'u';
function Kd(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function bb(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Kd(e.default));
}
const ue = Object.assign;
function ni(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = xt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Nr = () => {},
  xt = Array.isArray,
  Gd = /#/g,
  wb = /&/g,
  xb = /\//g,
  Sb = /=/g,
  Eb = /\?/g,
  Jd = /\+/g,
  Cb = /%5B/g,
  Pb = /%5D/g,
  Yd = /%5E/g,
  kb = /%60/g,
  Qd = /%7B/g,
  Rb = /%7C/g,
  Xd = /%7D/g,
  Tb = /%20/g;
function El(e) {
  return encodeURI('' + e)
    .replace(Rb, '|')
    .replace(Cb, '[')
    .replace(Pb, ']');
}
function Ob(e) {
  return El(e).replace(Qd, '{').replace(Xd, '}').replace(Yd, '^');
}
function $i(e) {
  return El(e)
    .replace(Jd, '%2B')
    .replace(Tb, '+')
    .replace(Gd, '%23')
    .replace(wb, '%26')
    .replace(kb, '`')
    .replace(Qd, '{')
    .replace(Xd, '}')
    .replace(Yd, '^');
}
function Ab(e) {
  return $i(e).replace(Sb, '%3D');
}
function Lb(e) {
  return El(e).replace(Gd, '%23').replace(Eb, '%3F');
}
function Mb(e) {
  return e == null ? '' : Lb(e).replace(xb, '%2F');
}
function os(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const Fb = /\/$/,
  Ib = (e) => e.replace(Fb, '');
function ri(e, t, n = '/') {
  let r,
    s = {},
    o = '',
    i = '';
  const a = t.indexOf('#');
  let l = t.indexOf('?');
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 && ((r = t.slice(0, l)), (o = t.slice(l + 1, a > -1 ? a : t.length)), (s = e(o))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = Nb(r ?? t, n)),
    { fullPath: r + (o && '?') + o + i, path: r, query: s, hash: os(i) }
  );
}
function jb(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function Pc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function $b(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    pr(t.matched[r], n.matched[s]) &&
    Zd(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function pr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Zd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Db(e[n], t[n])) return !1;
  return !0;
}
function Db(e, t) {
  return xt(e) ? kc(e, t) : xt(t) ? kc(t, e) : e === t;
}
function kc(e, t) {
  return xt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Nb(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    r = e.split('/'),
    s = r[r.length - 1];
  (s === '..' || s === '.') && r.push('');
  let o = n.length - 1,
    i,
    a;
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== '.'))
      if (a === '..') o > 1 && o--;
      else break;
  return n.slice(0, o).join('/') + '/' + r.slice(i).join('/');
}
const nn = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var is;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(is || (is = {}));
var Hr;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(Hr || (Hr = {}));
function Hb(e) {
  if (!e)
    if (Jn) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Ib(e);
}
const Bb = /^[^#]+#/;
function Ub(e, t) {
  return e.replace(Bb, '#') + t;
}
function qb(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const xo = () => ({ left: window.scrollX, top: window.scrollY });
function Vb(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = qb(s, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function Rc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Di = new Map();
function Wb(e, t) {
  Di.set(e, t);
}
function zb(e) {
  const t = Di.get(e);
  return Di.delete(e), t;
}
let Kb = () => location.protocol + '//' + location.host;
function ep(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#');
  if (o > -1) {
    let a = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(a);
    return l[0] !== '/' && (l = '/' + l), Pc(l, '');
  }
  return Pc(n, e) + r + s;
}
function Gb(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: h }) => {
    const g = ep(e, location),
      x = n.value,
      R = t.value;
    let N = 0;
    if (h) {
      if (((n.value = g), (t.value = h), i && i === x)) {
        i = null;
        return;
      }
      N = R ? h.position - R.position : 0;
    } else r(g);
    s.forEach(($) => {
      $(n.value, x, {
        delta: N,
        type: is.pop,
        direction: N ? (N > 0 ? Hr.forward : Hr.back) : Hr.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(h) {
    s.push(h);
    const g = () => {
      const x = s.indexOf(h);
      x > -1 && s.splice(x, 1);
    };
    return o.push(g), g;
  }
  function c() {
    const { history: h } = window;
    h.state && h.replaceState(ue({}, h.state, { scroll: xo() }), '');
  }
  function u() {
    for (const h of o) h();
    (o = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', c);
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', c, { passive: !0 }),
    { pauseListeners: l, listen: f, destroy: u }
  );
}
function Tc(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? xo() : null,
  };
}
function Jb(e) {
  const { history: t, location: n } = window,
    r = { value: ep(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function o(l, f, c) {
    const u = e.indexOf('#'),
      h = u > -1 ? (n.host && document.querySelector('base') ? e : e.slice(u)) + l : Kb() + e + l;
    try {
      t[c ? 'replaceState' : 'pushState'](f, '', h), (s.value = f);
    } catch (g) {
      console.error(g), n[c ? 'replace' : 'assign'](h);
    }
  }
  function i(l, f) {
    const c = ue({}, t.state, Tc(s.value.back, l, s.value.forward, !0), f, {
      position: s.value.position,
    });
    o(l, c, !0), (r.value = l);
  }
  function a(l, f) {
    const c = ue({}, s.value, t.state, { forward: l, scroll: xo() });
    o(c.current, c, !0);
    const u = ue({}, Tc(r.value, l, null), { position: c.position + 1 }, f);
    o(l, u, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: i };
}
function Yb(e) {
  e = Hb(e);
  const t = Jb(e),
    n = Gb(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = ue({ location: '', base: e, go: r, createHref: Ub.bind(null, e) }, t, n);
  return (
    Object.defineProperty(s, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, 'state', { enumerable: !0, get: () => t.state.value }),
    s
  );
}
function Qb(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    Yb(e)
  );
}
function Xb(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function tp(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const np = Symbol('');
var Oc;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(Oc || (Oc = {}));
function hr(e, t) {
  return ue(new Error(), { type: e, [np]: !0 }, t);
}
function Bt(e, t) {
  return e instanceof Error && np in e && (t == null || !!(e.type & t));
}
const Ac = '[^/]+?',
  Zb = { sensitive: !1, strict: !1, start: !0, end: !0 },
  e0 = /[.+*?^${}()[\]/\\]/g;
function t0(e, t) {
  const n = ue({}, Zb, t),
    r = [];
  let s = n.start ? '^' : '';
  const o = [];
  for (const f of e) {
    const c = f.length ? [] : [90];
    n.strict && !f.length && (s += '/');
    for (let u = 0; u < f.length; u++) {
      const h = f[u];
      let g = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) u || (s += '/'), (s += h.value.replace(e0, '\\$&')), (g += 40);
      else if (h.type === 1) {
        const { value: x, repeatable: R, optional: N, regexp: $ } = h;
        o.push({ name: x, repeatable: R, optional: N });
        const M = $ || Ac;
        if (M !== Ac) {
          g += 10;
          try {
            new RegExp(`(${M})`);
          } catch (O) {
            throw new Error(`Invalid custom RegExp for param "${x}" (${M}): ` + O.message);
          }
        }
        let j = R ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`;
        u || (j = N && f.length < 2 ? `(?:/${j})` : '/' + j),
          N && (j += '?'),
          (s += j),
          (g += 20),
          N && (g += -8),
          R && (g += -20),
          M === '.*' && (g += -50);
      }
      c.push(g);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const f = r.length - 1;
    r[f][r[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && !s.endsWith('/') && (s += '(?:/|$)');
  const i = new RegExp(s, n.sensitive ? '' : 'i');
  function a(f) {
    const c = f.match(i),
      u = {};
    if (!c) return null;
    for (let h = 1; h < c.length; h++) {
      const g = c[h] || '',
        x = o[h - 1];
      u[x.name] = g && x.repeatable ? g.split('/') : g;
    }
    return u;
  }
  function l(f) {
    let c = '',
      u = !1;
    for (const h of e) {
      (!u || !c.endsWith('/')) && (c += '/'), (u = !1);
      for (const g of h)
        if (g.type === 0) c += g.value;
        else if (g.type === 1) {
          const { value: x, repeatable: R, optional: N } = g,
            $ = x in f ? f[x] : '';
          if (xt($) && !R)
            throw new Error(
              `Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const M = xt($) ? $.join('/') : $;
          if (!M)
            if (N) h.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (u = !0));
            else throw new Error(`Missing required param "${x}"`);
          c += M;
        }
    }
    return c || '/';
  }
  return { re: i, score: r, keys: o, parse: a, stringify: l };
}
function n0(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function rp(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = n0(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Lc(r)) return 1;
    if (Lc(s)) return -1;
  }
  return s.length - r.length;
}
function Lc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const r0 = { type: 0, value: '' },
  s0 = /[a-zA-Z0-9_]/;
function o0(e) {
  if (!e) return [[]];
  if (e === '/') return [[r0]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(g) {
    throw new Error(`ERR (${n})/"${f}": ${g}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let a = 0,
    l,
    f = '',
    c = '';
  function u() {
    f &&
      (n === 0
        ? o.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: f,
              regexp: c,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?',
            }))
          : t('Invalid state to consume buffer'),
      (f = ''));
  }
  function h() {
    f += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === '/' ? (f && u(), i()) : l === ':' ? (u(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        l === '('
          ? (n = 2)
          : s0.test(l)
            ? h()
            : (u(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--);
        break;
      case 2:
        l === ')' ? (c[c.length - 1] == '\\' ? (c = c.slice(0, -1) + l) : (n = 3)) : (c += l);
        break;
      case 3:
        u(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (c = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), u(), i(), s;
}
function i0(e, t, n) {
  const r = t0(o0(e.path), n),
    s = ue(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function l0(e, t) {
  const n = [],
    r = new Map();
  t = jc({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(u) {
    return r.get(u);
  }
  function o(u, h, g) {
    const x = !g,
      R = Fc(u);
    R.aliasOf = g && g.record;
    const N = jc(t, u),
      $ = [R];
    if ('alias' in u) {
      const O = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const U of O)
        $.push(
          Fc(
            ue({}, R, {
              components: g ? g.record.components : R.components,
              path: U,
              aliasOf: g ? g.record : R,
            }),
          ),
        );
    }
    let M, j;
    for (const O of $) {
      const { path: U } = O;
      if (h && U[0] !== '/') {
        const J = h.record.path,
          K = J[J.length - 1] === '/' ? '' : '/';
        O.path = h.record.path + (U && K + U);
      }
      if (
        ((M = i0(O, h, N)),
        g
          ? g.alias.push(M)
          : ((j = j || M), j !== M && j.alias.push(M), x && u.name && !Ic(M) && i(u.name)),
        sp(M) && l(M),
        R.children)
      ) {
        const J = R.children;
        for (let K = 0; K < J.length; K++) o(J[K], M, g && g.children[K]);
      }
      g = g || M;
    }
    return j
      ? () => {
          i(j);
        }
      : Nr;
  }
  function i(u) {
    if (tp(u)) {
      const h = r.get(u);
      h && (r.delete(u), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
    } else {
      const h = n.indexOf(u);
      h > -1 &&
        (n.splice(h, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    const h = u0(u, n);
    n.splice(h, 0, u), u.record.name && !Ic(u) && r.set(u.record.name, u);
  }
  function f(u, h) {
    let g,
      x = {},
      R,
      N;
    if ('name' in u && u.name) {
      if (((g = r.get(u.name)), !g)) throw hr(1, { location: u });
      (N = g.record.name),
        (x = ue(
          Mc(
            h.params,
            g.keys
              .filter((j) => !j.optional)
              .concat(g.parent ? g.parent.keys.filter((j) => j.optional) : [])
              .map((j) => j.name),
          ),
          u.params &&
            Mc(
              u.params,
              g.keys.map((j) => j.name),
            ),
        )),
        (R = g.stringify(x));
    } else if (u.path != null)
      (R = u.path), (g = n.find((j) => j.re.test(R))), g && ((x = g.parse(R)), (N = g.record.name));
    else {
      if (((g = h.name ? r.get(h.name) : n.find((j) => j.re.test(h.path))), !g))
        throw hr(1, { location: u, currentLocation: h });
      (N = g.record.name), (x = ue({}, h.params, u.params)), (R = g.stringify(x));
    }
    const $ = [];
    let M = g;
    for (; M; ) $.unshift(M.record), (M = M.parent);
    return { name: N, path: R, params: x, matched: $, meta: c0($) };
  }
  e.forEach((u) => o(u));
  function c() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: o,
    resolve: f,
    removeRoute: i,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: s,
  };
}
function Mc(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Fc(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: a0(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
  return Object.defineProperty(t, 'mods', { value: {} }), t;
}
function a0(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n;
  return t;
}
function Ic(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function c0(e) {
  return e.reduce((t, n) => ue(t, n.meta), {});
}
function jc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function u0(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const o = (n + r) >> 1;
    rp(e, t[o]) < 0 ? (r = o) : (n = o + 1);
  }
  const s = f0(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function f0(e) {
  let t = e;
  for (; (t = t.parent); ) if (sp(t) && rp(e, t) === 0) return t;
}
function sp({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function d0(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const r = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(Jd, ' '),
      i = o.indexOf('='),
      a = os(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : os(o.slice(i + 1));
    if (a in t) {
      let f = t[a];
      xt(f) || (f = t[a] = [f]), f.push(l);
    } else t[a] = l;
  }
  return t;
}
function $c(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = Ab(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (xt(r) ? r.map((o) => o && $i(o)) : [r && $i(r)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o));
    });
  }
  return t;
}
function p0(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = xt(r) ? r.map((s) => (s == null ? null : '' + s)) : r == null ? r : '' + r);
  }
  return t;
}
const h0 = Symbol(''),
  Dc = Symbol(''),
  Cl = Symbol(''),
  op = Symbol(''),
  Ni = Symbol('');
function xr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function pn(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const f = (h) => {
          h === !1
            ? l(hr(4, { from: n, to: t }))
            : h instanceof Error
              ? l(h)
              : Xb(h)
                ? l(hr(2, { from: t, to: h }))
                : (i && r.enterCallbacks[s] === i && typeof h == 'function' && i.push(h), a());
        },
        c = o(() => e.call(r && r.instances[s], t, n, f));
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(f)), u.catch((h) => l(h));
    });
}
function si(e, t, n, r, s = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
        if (Kd(l)) {
          const c = (l.__vccOpts || l)[t];
          c && o.push(pn(c, n, r, i, a, s));
        } else {
          let f = l();
          o.push(() =>
            f.then((c) => {
              if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
              const u = bb(c) ? c.default : c;
              (i.mods[a] = c), (i.components[a] = u);
              const g = (u.__vccOpts || u)[t];
              return g && pn(g, n, r, i, a, s)();
            }),
          );
        }
    }
  return o;
}
function Nc(e) {
  const t = Jt(Cl),
    n = Jt(op),
    r = mt(() => {
      const l = ir(e.to);
      return t.resolve(l);
    }),
    s = mt(() => {
      const { matched: l } = r.value,
        { length: f } = l,
        c = l[f - 1],
        u = n.matched;
      if (!c || !u.length) return -1;
      const h = u.findIndex(pr.bind(null, c));
      if (h > -1) return h;
      const g = Hc(l[f - 2]);
      return f > 1 && Hc(c) === g && u[u.length - 1].path !== g
        ? u.findIndex(pr.bind(null, l[f - 2]))
        : h;
    }),
    o = mt(() => s.value > -1 && y0(n.params, r.value.params)),
    i = mt(() => s.value > -1 && s.value === n.matched.length - 1 && Zd(n.params, r.value.params));
  function a(l = {}) {
    if (_0(l)) {
      const f = t[ir(e.replace) ? 'replace' : 'push'](ir(e.to)).catch(Nr);
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => f),
        f
      );
    }
    return Promise.resolve();
  }
  return { route: r, href: mt(() => r.value.href), isActive: o, isExactActive: i, navigate: a };
}
function g0(e) {
  return e.length === 1 ? e[0] : e;
}
const m0 = go({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: Nc,
    setup(e, { slots: t }) {
      const n = mr(Nc(e)),
        { options: r } = Jt(Cl),
        s = mt(() => ({
          [Bc(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [Bc(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }));
      return () => {
        const o = t.default && g0(t.default(n));
        return e.custom
          ? o
          : xl(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o,
            );
      };
    },
  }),
  v0 = m0;
function _0(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function y0(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == 'string') {
      if (r !== s) return !1;
    } else if (!xt(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1;
  }
  return !0;
}
function Hc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Bc = (e, t, n) => e ?? t ?? n,
  b0 = go({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Jt(Ni),
        s = mt(() => e.route || r.value),
        o = Jt(Dc, 0),
        i = mt(() => {
          let f = ir(o);
          const { matched: c } = s.value;
          let u;
          for (; (u = c[f]) && !u.components; ) f++;
          return f;
        }),
        a = mt(() => s.value.matched[i.value]);
      Es(
        Dc,
        mt(() => i.value + 1),
      ),
        Es(h0, a),
        Es(Ni, s);
      const l = Jf();
      return (
        Cs(
          () => [l.value, a.value, e.name],
          ([f, c, u], [h, g, x]) => {
            c &&
              ((c.instances[u] = f),
              g &&
                g !== c &&
                f &&
                f === h &&
                (c.leaveGuards.size || (c.leaveGuards = g.leaveGuards),
                c.updateGuards.size || (c.updateGuards = g.updateGuards))),
              f && c && (!g || !pr(c, g) || !h) && (c.enterCallbacks[u] || []).forEach((R) => R(f));
          },
          { flush: 'post' },
        ),
        () => {
          const f = s.value,
            c = e.name,
            u = a.value,
            h = u && u.components[c];
          if (!h) return Uc(n.default, { Component: h, route: f });
          const g = u.props[c],
            x = g ? (g === !0 ? f.params : typeof g == 'function' ? g(f) : g) : null,
            N = xl(
              h,
              ue({}, x, t, {
                onVnodeUnmounted: ($) => {
                  $.component.isUnmounted && (u.instances[c] = null);
                },
                ref: l,
              }),
            );
          return Uc(n.default, { Component: N, route: f }) || N;
        }
      );
    },
  });
function Uc(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const w0 = b0;
function x0(e) {
  const t = l0(e.routes, e),
    n = e.parseQuery || d0,
    r = e.stringifyQuery || $c,
    s = e.history,
    o = xr(),
    i = xr(),
    a = xr(),
    l = Zv(nn);
  let f = nn;
  Jn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = ni.bind(null, (y) => '' + y),
    u = ni.bind(null, Mb),
    h = ni.bind(null, os);
  function g(y, T) {
    let k, I;
    return tp(y) ? ((k = t.getRecordMatcher(y)), (I = T)) : (I = y), t.addRoute(I, k);
  }
  function x(y) {
    const T = t.getRecordMatcher(y);
    T && t.removeRoute(T);
  }
  function R() {
    return t.getRoutes().map((y) => y.record);
  }
  function N(y) {
    return !!t.getRecordMatcher(y);
  }
  function $(y, T) {
    if (((T = ue({}, T || l.value)), typeof y == 'string')) {
      const m = ri(n, y, T.path),
        _ = t.resolve({ path: m.path }, T),
        b = s.createHref(m.fullPath);
      return ue(m, _, { params: h(_.params), hash: os(m.hash), redirectedFrom: void 0, href: b });
    }
    let k;
    if (y.path != null) k = ue({}, y, { path: ri(n, y.path, T.path).path });
    else {
      const m = ue({}, y.params);
      for (const _ in m) m[_] == null && delete m[_];
      (k = ue({}, y, { params: u(m) })), (T.params = u(T.params));
    }
    const I = t.resolve(k, T),
      v = y.hash || '';
    I.params = c(h(I.params));
    const d = jb(r, ue({}, y, { hash: Ob(v), path: I.path })),
      p = s.createHref(d);
    return ue({ fullPath: d, hash: v, query: r === $c ? p0(y.query) : y.query || {} }, I, {
      redirectedFrom: void 0,
      href: p,
    });
  }
  function M(y) {
    return typeof y == 'string' ? ri(n, y, l.value.path) : ue({}, y);
  }
  function j(y, T) {
    if (f !== y) return hr(8, { from: T, to: y });
  }
  function O(y) {
    return K(y);
  }
  function U(y) {
    return O(ue(M(y), { replace: !0 }));
  }
  function J(y) {
    const T = y.matched[y.matched.length - 1];
    if (T && T.redirect) {
      const { redirect: k } = T;
      let I = typeof k == 'function' ? k(y) : k;
      return (
        typeof I == 'string' &&
          ((I = I.includes('?') || I.includes('#') ? (I = M(I)) : { path: I }), (I.params = {})),
        ue({ query: y.query, hash: y.hash, params: I.path != null ? {} : y.params }, I)
      );
    }
  }
  function K(y, T) {
    const k = (f = $(y)),
      I = l.value,
      v = y.state,
      d = y.force,
      p = y.replace === !0,
      m = J(k);
    if (m)
      return K(
        ue(M(m), { state: typeof m == 'object' ? ue({}, v, m.state) : v, force: d, replace: p }),
        T || k,
      );
    const _ = k;
    _.redirectedFrom = T;
    let b;
    return (
      !d && $b(r, I, k) && ((b = hr(16, { to: _, from: I })), ke(I, I, !0, !1)),
      (b ? Promise.resolve(b) : q(_, I))
        .catch((w) => (Bt(w) ? (Bt(w, 2) ? w : Re(w)) : ee(w, _, I)))
        .then((w) => {
          if (w) {
            if (Bt(w, 2))
              return K(
                ue({ replace: p }, M(w.to), {
                  state: typeof w.to == 'object' ? ue({}, v, w.to.state) : v,
                  force: d,
                }),
                T || _,
              );
          } else w = A(_, I, !0, p, v);
          return Y(_, I, w), w;
        })
    );
  }
  function ie(y, T) {
    const k = j(y, T);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function H(y) {
    const T = Ze.values().next().value;
    return T && typeof T.runWithContext == 'function' ? T.runWithContext(y) : y();
  }
  function q(y, T) {
    let k;
    const [I, v, d] = S0(y, T);
    k = si(I.reverse(), 'beforeRouteLeave', y, T);
    for (const m of I)
      m.leaveGuards.forEach((_) => {
        k.push(pn(_, y, T));
      });
    const p = ie.bind(null, y, T);
    return (
      k.push(p),
      ye(k)
        .then(() => {
          k = [];
          for (const m of o.list()) k.push(pn(m, y, T));
          return k.push(p), ye(k);
        })
        .then(() => {
          k = si(v, 'beforeRouteUpdate', y, T);
          for (const m of v)
            m.updateGuards.forEach((_) => {
              k.push(pn(_, y, T));
            });
          return k.push(p), ye(k);
        })
        .then(() => {
          k = [];
          for (const m of d)
            if (m.beforeEnter)
              if (xt(m.beforeEnter)) for (const _ of m.beforeEnter) k.push(pn(_, y, T));
              else k.push(pn(m.beforeEnter, y, T));
          return k.push(p), ye(k);
        })
        .then(
          () => (
            y.matched.forEach((m) => (m.enterCallbacks = {})),
            (k = si(d, 'beforeRouteEnter', y, T, H)),
            k.push(p),
            ye(k)
          ),
        )
        .then(() => {
          k = [];
          for (const m of i.list()) k.push(pn(m, y, T));
          return k.push(p), ye(k);
        })
        .catch((m) => (Bt(m, 8) ? m : Promise.reject(m)))
    );
  }
  function Y(y, T, k) {
    a.list().forEach((I) => H(() => I(y, T, k)));
  }
  function A(y, T, k, I, v) {
    const d = j(y, T);
    if (d) return d;
    const p = T === nn,
      m = Jn ? history.state : {};
    k &&
      (I || p
        ? s.replace(y.fullPath, ue({ scroll: p && m && m.scroll }, v))
        : s.push(y.fullPath, v)),
      (l.value = y),
      ke(y, T, k, p),
      Re();
  }
  let V;
  function oe() {
    V ||
      (V = s.listen((y, T, k) => {
        if (!It.listening) return;
        const I = $(y),
          v = J(I);
        if (v) {
          K(ue(v, { replace: !0, force: !0 }), I).catch(Nr);
          return;
        }
        f = I;
        const d = l.value;
        Jn && Wb(Rc(d.fullPath, k.delta), xo()),
          q(I, d)
            .catch((p) =>
              Bt(p, 12)
                ? p
                : Bt(p, 2)
                  ? (K(ue(M(p.to), { force: !0 }), I)
                      .then((m) => {
                        Bt(m, 20) && !k.delta && k.type === is.pop && s.go(-1, !1);
                      })
                      .catch(Nr),
                    Promise.reject())
                  : (k.delta && s.go(-k.delta, !1), ee(p, I, d)),
            )
            .then((p) => {
              (p = p || A(I, d, !1)),
                p &&
                  (k.delta && !Bt(p, 8)
                    ? s.go(-k.delta, !1)
                    : k.type === is.pop && Bt(p, 20) && s.go(-1, !1)),
                Y(I, d, p);
            })
            .catch(Nr);
      }));
  }
  let se = xr(),
    Q = xr(),
    W;
  function ee(y, T, k) {
    Re(y);
    const I = Q.list();
    return I.length ? I.forEach((v) => v(y, T, k)) : console.error(y), Promise.reject(y);
  }
  function qe() {
    return W && l.value !== nn
      ? Promise.resolve()
      : new Promise((y, T) => {
          se.add([y, T]);
        });
  }
  function Re(y) {
    return W || ((W = !y), oe(), se.list().forEach(([T, k]) => (y ? k(y) : T())), se.reset()), y;
  }
  function ke(y, T, k, I) {
    const { scrollBehavior: v } = e;
    if (!Jn || !v) return Promise.resolve();
    const d =
      (!k && zb(Rc(y.fullPath, 0))) || ((I || !k) && history.state && history.state.scroll) || null;
    return Zf()
      .then(() => v(y, T, d))
      .then((p) => p && Vb(p))
      .catch((p) => ee(p, y, T));
  }
  const he = (y) => s.go(y);
  let Xe;
  const Ze = new Set(),
    It = {
      currentRoute: l,
      listening: !0,
      addRoute: g,
      removeRoute: x,
      clearRoutes: t.clearRoutes,
      hasRoute: N,
      getRoutes: R,
      resolve: $,
      options: e,
      push: O,
      replace: U,
      go: he,
      back: () => he(-1),
      forward: () => he(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: Q.add,
      isReady: qe,
      install(y) {
        const T = this;
        y.component('RouterLink', v0),
          y.component('RouterView', w0),
          (y.config.globalProperties.$router = T),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => ir(l),
          }),
          Jn && !Xe && l.value === nn && ((Xe = !0), O(s.location).catch((v) => {}));
        const k = {};
        for (const v in nn) Object.defineProperty(k, v, { get: () => l.value[v], enumerable: !0 });
        y.provide(Cl, T), y.provide(op, Kf(k)), y.provide(Ni, l);
        const I = y.unmount;
        Ze.add(y),
          (y.unmount = function () {
            Ze.delete(y),
              Ze.size < 1 && ((f = nn), V && V(), (V = null), (l.value = nn), (Xe = !1), (W = !1)),
              I();
          });
      },
    };
  function ye(y) {
    return y.reduce((T, k) => T.then(() => H(k)), Promise.resolve());
  }
  return It;
}
function S0(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => pr(f, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((f) => pr(f, l)) || s.push(l));
  }
  return [n, r, s];
}
const E0 = [
    {
      path: '/',
      component: () => Yn(() => import('./MainLayout-DunN4qTH.js'), __vite__mapDeps([5, 6, 7])),
      children: [
        {
          path: '',
          component: () => Yn(() => import('./IndexPage-CbNSDBIq.js'), __vite__mapDeps([8, 7, 9])),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () => Yn(() => import('./ErrorNotFound-BgBGnwSB.js'), __vite__mapDeps([10, 6, 7])),
    },
  ],
  oi = yb(function () {
    return x0({ scrollBehavior: () => ({ left: 0, top: 0 }), routes: E0, history: Qb('/') });
  });
async function C0(e, t) {
  const n = e(vb);
  n.use(mb, t);
  const r = po(typeof oi == 'function' ? await oi({}) : oi);
  return { app: n, router: r };
}
const P0 = { config: {} };
async function k0({ app: e, router: t }) {
  e.use(t), e.mount('#q-app');
}
C0(Wy, P0).then(k0);
export {
  Xs as $,
  it as A,
  T0 as B,
  Zg as C,
  A0 as D,
  yi as E,
  sh as F,
  $0 as G,
  cr as H,
  V0 as I,
  W0 as J,
  nl as K,
  vu as L,
  Zh as M,
  L0 as N,
  Xp as O,
  Jh as P,
  er as Q,
  Gh as R,
  Nn as S,
  pu as T,
  X0 as U,
  mt as V,
  Ou as W,
  R0 as X,
  xl as Y,
  wp as Z,
  tf as _,
  Au as a,
  Jf as a0,
  Bn as a1,
  dd as a2,
  uy as a3,
  pd as a4,
  ss as a5,
  Zf as a6,
  dr as a7,
  Jt as a8,
  fw as a9,
  Y0 as aA,
  at as aB,
  oy as aC,
  Lv as aD,
  C_ as aE,
  $d as aF,
  J0 as aG,
  Tt as aH,
  G0 as aI,
  iy as aJ,
  ir as aK,
  Q0 as aL,
  Cs as aa,
  cw as ab,
  ub as ac,
  Ft as ad,
  sw as ae,
  nw as af,
  g_ as ag,
  ji as ah,
  Z0 as ai,
  lw as aj,
  ow as ak,
  iw as al,
  tw as am,
  _c as an,
  rw as ao,
  ew as ap,
  K0 as aq,
  Es as ar,
  uw as as,
  mr as at,
  hd as au,
  aw as av,
  go as aw,
  Id as ax,
  Md as ay,
  c_ as az,
  Lt as b,
  Gr as c,
  U0 as d,
  ua as e,
  H0 as f,
  Zu as g,
  Qu as h,
  D0 as i,
  gr as j,
  gt as k,
  I0 as l,
  z0 as m,
  q0 as n,
  j0 as o,
  N0 as p,
  hh as q,
  F0 as r,
  M0 as s,
  Gt as t,
  B0 as u,
  bs as v,
  O0 as w,
  kt as x,
  ws as y,
  Lu as z,
};
