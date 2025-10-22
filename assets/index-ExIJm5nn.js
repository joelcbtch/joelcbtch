const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/MainLayout-By9sxngu-EiepPFdg-CuNJA3Zf.js',
      'assets/QBtn-DYb13IGb-DVwM0Orh-B0Tu2nkY.js',
      'assets/render-DAqPa2vd-D0yqDhMx-4SFXGzvt.js',
      'assets/IndexPage-pdtjnnYV-DsEXDLUz-D7Ya8psE.js',
      'assets/ErrorNotFound-DRUjJDV3-x8WKzFY2-C7vd6Al7.js',
      'assets/MainLayout-DunN4qTH-BGTMGCdJ.js',
      'assets/QBtn-Cy2OY3F3-BCpda_Hn.js',
      'assets/render-Dk1QbAdB-Duum6jXv.js',
      'assets/IndexPage-CbNSDBIq-B5sv6rQ1.js',
      'assets/ErrorNotFound-BgBGnwSB-CBGFNyMe.js',
      'assets/MainLayout-T1HJA7OM.js',
      'assets/QBtn-DAZ8B1vs.js',
      'assets/render-CZGCd43d.js',
      'assets/IndexPage-DTA1vBuP.js',
      'assets/IndexPage-CETv_MTa.css',
      'assets/ErrorNotFound-cEq88Hg6.js',
    ]),
) => i.map((i) => d[i]);
const Cy = (function () {
    const t = typeof document < 'u' && document.createElement('link').relList;
    return t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
  })(),
  ky = function (e) {
    return '/' + e;
  },
  rf = {},
  Dn = function (t, n, r) {
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
          if (((f = ky(f)), f in rf)) return;
          rf[f] = !0;
          const c = f.endsWith('.css'),
            u = c ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${f}"]${u}`)) return;
          const p = document.createElement('link');
          if (
            ((p.rel = c ? 'stylesheet' : Cy),
            c || (p.as = 'script'),
            (p.crossOrigin = ''),
            (p.href = f),
            l && p.setAttribute('nonce', l),
            document.head.appendChild(p),
            c)
          )
            return new Promise((m, x) => {
              p.addEventListener('load', m),
                p.addEventListener('error', () => x(new Error(`Unable to preload CSS for ${f}`)));
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
  Wr = (
    e,
    t = Wr,
    n = t.f ||
      (t.f = [
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
  ) => e.map((r) => n[r]),
  Py = (function () {
    const e = typeof document < 'u' && document.createElement('link').relList;
    return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
  })(),
  Ry = function (e) {
    return '/' + e;
  },
  sf = {},
  ps = function (e, t, n) {
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
          if (((l = Ry(l)), l in sf)) return;
          sf[l] = !0;
          const f = l.endsWith('.css'),
            c = f ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const u = document.createElement('link');
          if (
            ((u.rel = f ? 'stylesheet' : Py),
            f || (u.as = 'script'),
            (u.crossOrigin = ''),
            (u.href = l),
            a && u.setAttribute('nonce', a),
            document.head.appendChild(u),
            f)
          )
            return new Promise((p, m) => {
              u.addEventListener('load', p),
                u.addEventListener('error', () => m(new Error(`Unable to preload CSS for ${l}`)));
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
  wi = (
    e,
    t = wi,
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
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Yc(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const Pe = {},
  hs = [],
  hn = () => {},
  Oy = () => !1,
  sl = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Qc = (e) => e.startsWith('onUpdate:'),
  Ve = Object.assign,
  Xc = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ly = Object.prototype.hasOwnProperty,
  Se = (e, t) => Ly.call(e, t),
  re = Array.isArray,
  gs = (e) => ol(e) === '[object Map]',
  Rh = (e) => ol(e) === '[object Set]',
  ie = (e) => typeof e == 'function',
  De = (e) => typeof e == 'string',
  _r = (e) => typeof e == 'symbol',
  Te = (e) => e !== null && typeof e == 'object',
  Oh = (e) => (Te(e) || ie(e)) && ie(e.then) && ie(e.catch),
  Lh = Object.prototype.toString,
  ol = (e) => Lh.call(e),
  Ay = (e) => ol(e).slice(8, -1),
  Ah = (e) => ol(e) === '[object Object]',
  Zc = (e) => De(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  no = Yc(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  il = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  My = /-(\w)/g,
  Nt = il((e) => e.replace(My, (t, n) => (n ? n.toUpperCase() : ''))),
  Ty = /\B([A-Z])/g,
  ts = il((e) => e.replace(Ty, '-$1').toLowerCase()),
  ll = il((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Xl = il((e) => (e ? `on${ll(e)}` : '')),
  dr = (e, t) => !Object.is(e, t),
  Zl = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Mh = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n });
  },
  Fy = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  $y = (e) => {
    const t = De(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let of;
const al = () =>
  of ||
  (of =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function eu(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = De(r) ? Ny(r) : eu(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (De(e) || Te(e)) return e;
}
const jy = /;(?![^(]*\))/g,
  Iy = /:([^]+)/,
  Dy = /\/\*[^]*?\*\//g;
function Ny(e) {
  const t = {};
  return (
    e
      .replace(Dy, '')
      .split(jy)
      .forEach((n) => {
        if (n) {
          const r = n.split(Iy);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function tu(e) {
  let t = '';
  if (De(e)) t = e;
  else if (re(e))
    for (let n = 0; n < e.length; n++) {
      const r = tu(e[n]);
      r && (t += r + ' ');
    }
  else if (Te(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const By = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Uy = Yc(By);
function Th(e) {
  return !!e || e === '';
}
const Fh = (e) => !!(e && e.__v_isRef === !0),
  qy = (e) =>
    De(e)
      ? e
      : e == null
        ? ''
        : re(e) || (Te(e) && (e.toString === Lh || !ie(e.toString)))
          ? Fh(e)
            ? qy(e.value)
            : JSON.stringify(e, $h, 2)
          : String(e),
  $h = (e, t) =>
    Fh(t)
      ? $h(e, t.value)
      : gs(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], o) => ((n[ea(r, o) + ' =>'] = s), n),
              {},
            ),
          }
        : Rh(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ea(n)) }
          : _r(t)
            ? ea(t)
            : Te(t) && !re(t) && !Ah(t)
              ? String(t)
              : t,
  ea = (e, t = '') => {
    var n;
    return _r(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Et;
class Vy {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Et),
      !t && Et && (this.index = (Et.scopes || (Et.scopes = [])).push(this) - 1);
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
      const n = Et;
      try {
        return (Et = this), t();
      } finally {
        Et = n;
      }
    }
  }
  on() {
    Et = this;
  }
  off() {
    Et = this.parent;
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
function Hy() {
  return Et;
}
let Le;
const ta = new WeakSet();
class jh {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Et && Et.active && Et.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), ta.has(this) && (ta.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Dh(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), lf(this), Nh(this);
    const t = Le,
      n = zt;
    (Le = this), (zt = !0);
    try {
      return this.fn();
    } finally {
      Bh(this), (Le = t), (zt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) su(t);
      (this.deps = this.depsTail = void 0),
        lf(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64 ? ta.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Za(this) && this.run();
  }
  get dirty() {
    return Za(this);
  }
}
let Ih = 0,
  ro,
  so;
function Dh(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = so), (so = e);
    return;
  }
  (e.next = ro), (ro = e);
}
function nu() {
  Ih++;
}
function ru() {
  if (--Ih > 0) return;
  if (so) {
    let t = so;
    for (so = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; ro; ) {
    let t = ro;
    for (ro = void 0; t; ) {
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
function Nh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t);
}
function Bh(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), su(r), Wy(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function Za(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Uh(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Uh(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Po)) return;
  e.globalVersion = Po;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Za(e))) {
    e.flags &= -3;
    return;
  }
  const n = Le,
    r = zt;
  (Le = e), (zt = !0);
  try {
    Nh(e);
    const s = e.fn(e._value);
    (t.version === 0 || dr(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (Le = n), (zt = r), Bh(e), (e.flags &= -3);
  }
}
function su(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) su(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Wy(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0));
}
let zt = !0;
const qh = [];
function yr() {
  qh.push(zt), (zt = !1);
}
function br() {
  const e = qh.pop();
  zt = e === void 0 ? !0 : e;
}
function lf(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Le;
    Le = void 0;
    try {
      t();
    } finally {
      Le = n;
    }
  }
}
let Po = 0;
class zy {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
  }
}
class ou {
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
    if (!Le || !zt || Le === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Le)
      (n = this.activeLink = new zy(Le, this)),
        Le.deps
          ? ((n.prevDep = Le.depsTail), (Le.depsTail.nextDep = n), (Le.depsTail = n))
          : (Le.deps = Le.depsTail = n),
        Vh(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Le.depsTail),
        (n.nextDep = void 0),
        (Le.depsTail.nextDep = n),
        (Le.depsTail = n),
        Le.deps === n && (Le.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Po++, this.notify(t);
  }
  notify(t) {
    nu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      ru();
    }
  }
}
function Vh(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Vh(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const ec = new WeakMap(),
  zr = Symbol(''),
  tc = Symbol(''),
  Ro = Symbol('');
function Ze(e, t, n) {
  if (zt && Le) {
    let r = ec.get(e);
    r || ec.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new ou())), (s.map = r), (s.key = n)), s.track();
  }
}
function Mn(e, t, n, r, s, o) {
  const i = ec.get(e);
  if (!i) {
    Po++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((nu(), t === 'clear')) i.forEach(a);
  else {
    const l = re(e),
      f = l && Zc(n);
    if (l && n === 'length') {
      const c = Number(r);
      i.forEach((u, p) => {
        (p === 'length' || p === Ro || (!_r(p) && p >= c)) && a(u);
      });
    } else
      switch (((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Ro)), t)) {
        case 'add':
          l ? f && a(i.get('length')) : (a(i.get(zr)), gs(e) && a(i.get(tc)));
          break;
        case 'delete':
          l || (a(i.get(zr)), gs(e) && a(i.get(tc)));
          break;
        case 'set':
          gs(e) && a(i.get(zr));
          break;
      }
  }
  ru();
}
function ss(e) {
  const t = ge(e);
  return t === e ? t : (Ze(t, 'iterate', Ro), jt(e) ? t : t.map(et));
}
function cl(e) {
  return Ze((e = ge(e)), 'iterate', Ro), e;
}
const Ky = {
  __proto__: null,
  [Symbol.iterator]() {
    return na(this, Symbol.iterator, et);
  },
  concat(...e) {
    return ss(this).concat(...e.map((t) => (re(t) ? ss(t) : t)));
  },
  entries() {
    return na(this, 'entries', (e) => ((e[1] = et(e[1])), e));
  },
  every(e, t) {
    return bn(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return bn(this, 'filter', e, t, (n) => n.map(et), arguments);
  },
  find(e, t) {
    return bn(this, 'find', e, t, et, arguments);
  },
  findIndex(e, t) {
    return bn(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return bn(this, 'findLast', e, t, et, arguments);
  },
  findLastIndex(e, t) {
    return bn(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return bn(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return ra(this, 'includes', e);
  },
  indexOf(...e) {
    return ra(this, 'indexOf', e);
  },
  join(e) {
    return ss(this).join(e);
  },
  lastIndexOf(...e) {
    return ra(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return bn(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return Hs(this, 'pop');
  },
  push(...e) {
    return Hs(this, 'push', e);
  },
  reduce(e, ...t) {
    return af(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return af(this, 'reduceRight', e, t);
  },
  shift() {
    return Hs(this, 'shift');
  },
  some(e, t) {
    return bn(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return Hs(this, 'splice', e);
  },
  toReversed() {
    return ss(this).toReversed();
  },
  toSorted(e) {
    return ss(this).toSorted(e);
  },
  toSpliced(...e) {
    return ss(this).toSpliced(...e);
  },
  unshift(...e) {
    return Hs(this, 'unshift', e);
  },
  values() {
    return na(this, 'values', et);
  },
};
function na(e, t, n) {
  const r = cl(e),
    s = r[t]();
  return (
    r !== e &&
      !jt(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const Gy = Array.prototype;
function bn(e, t, n, r, s, o) {
  const i = cl(e),
    a = i !== e && !jt(e),
    l = i[t];
  if (l !== Gy[t]) {
    const u = l.apply(e, o);
    return a ? et(u) : u;
  }
  let f = n;
  i !== e &&
    (a
      ? (f = function (u, p) {
          return n.call(this, et(u), p, e);
        })
      : n.length > 2 &&
        (f = function (u, p) {
          return n.call(this, u, p, e);
        }));
  const c = l.call(i, f, r);
  return a && s ? s(c) : c;
}
function af(e, t, n, r) {
  const s = cl(e);
  let o = n;
  return (
    s !== e &&
      (jt(e)
        ? n.length > 3 &&
          (o = function (i, a, l) {
            return n.call(this, i, a, l, e);
          })
        : (o = function (i, a, l) {
            return n.call(this, i, et(a), l, e);
          })),
    s[t](o, ...r)
  );
}
function ra(e, t, n) {
  const r = ge(e);
  Ze(r, 'iterate', Ro);
  const s = r[t](...n);
  return (s === -1 || s === !1) && au(n[0]) ? ((n[0] = ge(n[0])), r[t](...n)) : s;
}
function Hs(e, t, n = []) {
  yr(), nu();
  const r = ge(e)[t].apply(e, n);
  return ru(), br(), r;
}
const Jy = Yc('__proto__,__v_isRef,__isVue'),
  Hh = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(_r),
  );
function Yy(e) {
  _r(e) || (e = String(e));
  const t = ge(this);
  return Ze(t, 'has', e), t.hasOwnProperty(e);
}
class Wh {
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
      return r === (s ? (o ? ib : Jh) : o ? Gh : Kh).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = re(t);
    if (!s) {
      let l;
      if (i && (l = Ky[n])) return l;
      if (n === 'hasOwnProperty') return Yy;
    }
    const a = Reflect.get(t, n, ot(t) ? t : r);
    return (_r(n) ? Hh.has(n) : Jy(n)) || (s || Ze(t, 'get', n), o)
      ? a
      : ot(a)
        ? i && Zc(n)
          ? a
          : a.value
        : Te(a)
          ? s
            ? Qh(a)
            : Us(a)
          : a;
  }
}
class zh extends Wh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Jr(o);
      if ((!jt(r) && !Jr(r) && ((o = ge(o)), (r = ge(r))), !re(t) && ot(o) && !ot(r)))
        return l ? !1 : ((o.value = r), !0);
    }
    const i = re(t) && Zc(n) ? Number(n) < t.length : Se(t, n),
      a = Reflect.set(t, n, r, ot(t) ? t : s);
    return t === ge(s) && (i ? dr(r, o) && Mn(t, 'set', n, r) : Mn(t, 'add', n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Se(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Mn(t, 'delete', n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!_r(n) || !Hh.has(n)) && Ze(t, 'has', n), r;
  }
  ownKeys(t) {
    return Ze(t, 'iterate', re(t) ? 'length' : zr), Reflect.ownKeys(t);
  }
}
class Qy extends Wh {
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
const Xy = new zh(),
  Zy = new Qy(),
  eb = new zh(!0),
  nc = (e) => e,
  ci = (e) => Reflect.getPrototypeOf(e);
function tb(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = ge(s),
      i = gs(o),
      a = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      f = s[e](...r),
      c = n ? nc : t ? rc : et;
    return (
      !t && Ze(o, 'iterate', l ? tc : zr),
      {
        next() {
          const { value: u, done: p } = f.next();
          return p ? { value: u, done: p } : { value: a ? [c(u[0]), c(u[1])] : c(u), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ui(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function nb(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw,
        o = ge(s),
        i = ge(r);
      e || (dr(r, i) && Ze(o, 'get', r), Ze(o, 'get', i));
      const { has: a } = ci(o),
        l = t ? nc : e ? rc : et;
      if (a.call(o, r)) return l(s.get(r));
      if (a.call(o, i)) return l(s.get(i));
      s !== o && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ze(ge(r), 'iterate', zr), Reflect.get(r, 'size', r);
    },
    has(r) {
      const s = this.__v_raw,
        o = ge(s),
        i = ge(r);
      return (
        e || (dr(r, i) && Ze(o, 'has', r), Ze(o, 'has', i)),
        r === i ? s.has(r) : s.has(r) || s.has(i)
      );
    },
    forEach(r, s) {
      const o = this,
        i = o.__v_raw,
        a = ge(i),
        l = t ? nc : e ? rc : et;
      return !e && Ze(a, 'iterate', zr), i.forEach((f, c) => r.call(s, l(f), l(c), o));
    },
  };
  return (
    Ve(
      n,
      e
        ? { add: ui('add'), set: ui('set'), delete: ui('delete'), clear: ui('clear') }
        : {
            add(r) {
              !t && !jt(r) && !Jr(r) && (r = ge(r));
              const s = ge(this);
              return ci(s).has.call(s, r) || (s.add(r), Mn(s, 'add', r, r)), this;
            },
            set(r, s) {
              !t && !jt(s) && !Jr(s) && (s = ge(s));
              const o = ge(this),
                { has: i, get: a } = ci(o);
              let l = i.call(o, r);
              l || ((r = ge(r)), (l = i.call(o, r)));
              const f = a.call(o, r);
              return o.set(r, s), l ? dr(s, f) && Mn(o, 'set', r, s) : Mn(o, 'add', r, s), this;
            },
            delete(r) {
              const s = ge(this),
                { has: o, get: i } = ci(s);
              let a = o.call(s, r);
              a || ((r = ge(r)), (a = o.call(s, r))), i && i.call(s, r);
              const l = s.delete(r);
              return a && Mn(s, 'delete', r, void 0), l;
            },
            clear() {
              const r = ge(this),
                s = r.size !== 0,
                o = r.clear();
              return s && Mn(r, 'clear', void 0, void 0), o;
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = tb(r, e, t);
    }),
    n
  );
}
function iu(e, t) {
  const n = nb(e, t);
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
          ? r
          : Reflect.get(Se(n, s) && s in r ? n : r, s, o);
}
const rb = { get: iu(!1, !1) },
  sb = { get: iu(!1, !0) },
  ob = { get: iu(!0, !1) },
  Kh = new WeakMap(),
  Gh = new WeakMap(),
  Jh = new WeakMap(),
  ib = new WeakMap();
function lb(e) {
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
function ab(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : lb(Ay(e));
}
function Us(e) {
  return Jr(e) ? e : lu(e, !1, Xy, rb, Kh);
}
function Yh(e) {
  return lu(e, !1, eb, sb, Gh);
}
function Qh(e) {
  return lu(e, !0, Zy, ob, Jh);
}
function lu(e, t, n, r, s) {
  if (!Te(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = ab(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function ms(e) {
  return Jr(e) ? ms(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Jr(e) {
  return !!(e && e.__v_isReadonly);
}
function jt(e) {
  return !!(e && e.__v_isShallow);
}
function au(e) {
  return e ? !!e.__v_raw : !1;
}
function ge(e) {
  const t = e && e.__v_raw;
  return t ? ge(t) : e;
}
function ul(e) {
  return !Se(e, '__v_skip') && Object.isExtensible(e) && Mh(e, '__v_skip', !0), e;
}
const et = (e) => (Te(e) ? Us(e) : e),
  rc = (e) => (Te(e) ? Qh(e) : e);
function ot(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Xh(e) {
  return Zh(e, !1);
}
function cb(e) {
  return Zh(e, !0);
}
function Zh(e, t) {
  return ot(e) ? e : new ub(e, t);
}
class ub {
  constructor(t, n) {
    (this.dep = new ou()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : ge(t)),
      (this._value = n ? t : et(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || jt(t) || Jr(t);
    (t = r ? t : ge(t)),
      dr(t, n) && ((this._rawValue = t), (this._value = r ? t : et(t)), this.dep.trigger());
  }
}
function vs(e) {
  return ot(e) ? e.value : e;
}
const fb = {
  get: (e, t, n) => (t === '__v_raw' ? e : vs(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return ot(s) && !ot(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function eg(e) {
  return ms(e) ? e : new Proxy(e, fb);
}
class db {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new ou(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Po - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Le !== this)) return Dh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Uh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function pb(e, t, n = !1) {
  let r, s;
  return ie(e) ? (r = e) : ((r = e.get), (s = e.set)), new db(r, s, n);
}
const fi = {},
  Fi = new WeakMap();
let Nr;
function hb(e, t = !1, n = Nr) {
  if (n) {
    let r = Fi.get(n);
    r || Fi.set(n, (r = [])), r.push(e);
  }
}
function gb(e, t, n = Pe) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n,
    f = (L) => (s ? L : jt(L) || s === !1 || s === 0 ? Tn(L, 1) : Tn(L));
  let c,
    u,
    p,
    m,
    x = !1,
    P = !1;
  if (
    (ot(e)
      ? ((u = () => e.value), (x = jt(e)))
      : ms(e)
        ? ((u = () => f(e)), (x = !0))
        : re(e)
          ? ((P = !0),
            (x = e.some((L) => ms(L) || jt(L))),
            (u = () =>
              e.map((L) => {
                if (ot(L)) return L.value;
                if (ms(L)) return f(L);
                if (ie(L)) return l ? l(L, 2) : L();
              })))
          : ie(e)
            ? t
              ? (u = l ? () => l(e, 2) : e)
              : (u = () => {
                  if (p) {
                    yr();
                    try {
                      p();
                    } finally {
                      br();
                    }
                  }
                  const L = Nr;
                  Nr = c;
                  try {
                    return l ? l(e, 3, [m]) : e(m);
                  } finally {
                    Nr = L;
                  }
                })
            : (u = hn),
    t && s)
  ) {
    const L = u,
      q = s === !0 ? 1 / 0 : s;
    u = () => Tn(L(), q);
  }
  const N = Hy(),
    I = () => {
      c.stop(), N && N.active && Xc(N.effects, c);
    };
  if (o && t) {
    const L = t;
    t = (...q) => {
      L(...q), I();
    };
  }
  let T = P ? new Array(e.length).fill(fi) : fi;
  const j = (L) => {
    if (!(!(c.flags & 1) || (!c.dirty && !L)))
      if (t) {
        const q = c.run();
        if (s || x || (P ? q.some((J, K) => dr(J, T[K])) : dr(q, T))) {
          p && p();
          const J = Nr;
          Nr = c;
          try {
            const K = [q, T === fi ? void 0 : P && T[0] === fi ? [] : T, m];
            l ? l(t, 3, K) : t(...K), (T = q);
          } finally {
            Nr = J;
          }
        }
      } else c.run();
  };
  return (
    a && a(j),
    (c = new jh(u)),
    (c.scheduler = i ? () => i(j, !1) : j),
    (m = (L) => hb(L, !1, c)),
    (p = c.onStop =
      () => {
        const L = Fi.get(c);
        if (L) {
          if (l) l(L, 4);
          else for (const q of L) q();
          Fi.delete(c);
        }
      }),
    t ? (r ? j(!0) : (T = c.run())) : i ? i(j.bind(null, !0), !0) : c.run(),
    (I.pause = c.pause.bind(c)),
    (I.resume = c.resume.bind(c)),
    (I.stop = I),
    I
  );
}
function Tn(e, t = 1 / 0, n) {
  if (t <= 0 || !Te(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, ot(e))) Tn(e.value, t, n);
  else if (re(e)) for (let r = 0; r < e.length; r++) Tn(e[r], t, n);
  else if (Rh(e) || gs(e))
    e.forEach((r) => {
      Tn(r, t, n);
    });
  else if (Ah(e)) {
    for (const r in e) Tn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Tn(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ri(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    fl(s, t, n);
  }
}
function Jt(e, t, n, r) {
  if (ie(e)) {
    const s = ri(e, t, n, r);
    return (
      s &&
        Oh(s) &&
        s.catch((o) => {
          fl(o, t, n);
        }),
      s
    );
  }
  if (re(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Jt(e[o], t, n, r));
    return s;
  }
}
function fl(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || Pe;
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
      yr(), ri(o, null, 10, [e, l, f]), br();
      return;
    }
  }
  mb(e, n, s, r, i);
}
function mb(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const ft = [];
let sn = -1;
const _s = [];
let Qn = null,
  ls = 0;
const tg = Promise.resolve();
let $i = null;
function ng(e) {
  const t = $i || tg;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vb(e) {
  let t = sn + 1,
    n = ft.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = ft[r],
      o = Oo(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function cu(e) {
  if (!(e.flags & 1)) {
    const t = Oo(e),
      n = ft[ft.length - 1];
    !n || (!(e.flags & 2) && t >= Oo(n)) ? ft.push(e) : ft.splice(vb(t), 0, e),
      (e.flags |= 1),
      rg();
  }
}
function rg() {
  $i || ($i = tg.then(og));
}
function _b(e) {
  re(e)
    ? _s.push(...e)
    : Qn && e.id === -1
      ? Qn.splice(ls + 1, 0, e)
      : e.flags & 1 || (_s.push(e), (e.flags |= 1)),
    rg();
}
function cf(e, t, n = sn + 1) {
  for (; n < ft.length; n++) {
    const r = ft[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      ft.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function sg(e) {
  if (_s.length) {
    const t = [...new Set(_s)].sort((n, r) => Oo(n) - Oo(r));
    if (((_s.length = 0), Qn)) {
      Qn.push(...t);
      return;
    }
    for (Qn = t, ls = 0; ls < Qn.length; ls++) {
      const n = Qn[ls];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (Qn = null), (ls = 0);
  }
}
const Oo = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function og(e) {
  try {
    for (sn = 0; sn < ft.length; sn++) {
      const t = ft[sn];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), ri(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; sn < ft.length; sn++) {
      const t = ft[sn];
      t && (t.flags &= -2);
    }
    (sn = -1), (ft.length = 0), sg(), ($i = null), (ft.length || _s.length) && og();
  }
}
let _t = null,
  ig = null;
function ji(e) {
  const t = _t;
  return (_t = e), (ig = (e && e.type.__scopeId) || null), t;
}
function yb(e, t = _t, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && bf(-1);
    const o = ji(t);
    let i;
    try {
      i = e(...s);
    } finally {
      ji(o), r._d && bf(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function sL(e, t) {
  if (_t === null) return e;
  const n = vl(_t),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = Pe] = t[s];
    o &&
      (ie(o) && (o = { mounted: o, updated: o }),
      o.deep && Tn(i),
      r.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function Pr(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (yr(), Jt(l, n, 8, [e.el, a, e, t]), br());
  }
}
const bb = Symbol('_vte'),
  lg = (e) => e.__isTeleport,
  Xn = Symbol('_leaveCb'),
  di = Symbol('_enterCb');
function wb() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    gg(() => {
      e.isMounted = !0;
    }),
    mg(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Tt = [Function, Array],
  ag = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Tt,
    onEnter: Tt,
    onAfterEnter: Tt,
    onEnterCancelled: Tt,
    onBeforeLeave: Tt,
    onLeave: Tt,
    onAfterLeave: Tt,
    onLeaveCancelled: Tt,
    onBeforeAppear: Tt,
    onAppear: Tt,
    onAfterAppear: Tt,
    onAppearCancelled: Tt,
  },
  cg = (e) => {
    const t = e.subTree;
    return t.component ? cg(t.component) : t;
  },
  xb = {
    name: 'BaseTransition',
    props: ag,
    setup(e, { slots: t }) {
      const n = b0(),
        r = wb();
      return () => {
        const s = t.default && dg(t.default(), !0);
        if (!s || !s.length) return;
        const o = ug(s),
          i = ge(e),
          { mode: a } = i;
        if (r.isLeaving) return sa(o);
        const l = uf(o);
        if (!l) return sa(o);
        let f = sc(l, i, r, n, (u) => (f = u));
        l.type !== gt && Lo(l, f);
        let c = n.subTree && uf(n.subTree);
        if (c && c.type !== gt && !qr(l, c) && cg(n).type !== gt) {
          let u = sc(c, i, r, n);
          if ((Lo(c, u), a === 'out-in' && l.type !== gt))
            return (
              (r.isLeaving = !0),
              (u.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete u.afterLeave,
                  (c = void 0);
              }),
              sa(o)
            );
          a === 'in-out' && l.type !== gt
            ? (u.delayLeave = (p, m, x) => {
                const P = fg(r, c);
                (P[String(c.key)] = c),
                  (p[Xn] = () => {
                    m(), (p[Xn] = void 0), delete f.delayedLeave, (c = void 0);
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
function ug(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== gt) {
        t = n;
        break;
      }
  }
  return t;
}
const Sb = xb;
function fg(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function sc(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: f,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: p,
      onLeave: m,
      onAfterLeave: x,
      onLeaveCancelled: P,
      onBeforeAppear: N,
      onAppear: I,
      onAfterAppear: T,
      onAppearCancelled: j,
    } = t,
    L = String(e.key),
    q = fg(n, e),
    J = (B, V) => {
      B && Jt(B, r, 9, V);
    },
    K = (B, V) => {
      const Y = V[1];
      J(B, V), re(B) ? B.every((A) => A.length <= 1) && Y() : B.length <= 1 && Y();
    },
    ne = {
      mode: i,
      persisted: a,
      beforeEnter(B) {
        let V = l;
        if (!n.isMounted)
          if (o) V = N || l;
          else return;
        B[Xn] && B[Xn](!0);
        const Y = q[L];
        Y && qr(e, Y) && Y.el[Xn] && Y.el[Xn](), J(V, [B]);
      },
      enter(B) {
        let V = f,
          Y = c,
          A = u;
        if (!n.isMounted)
          if (o) (V = I || f), (Y = T || c), (A = j || u);
          else return;
        let H = !1;
        const te = (B[di] = (X) => {
          H ||
            ((H = !0),
            X ? J(A, [B]) : J(Y, [B]),
            ne.delayedLeave && ne.delayedLeave(),
            (B[di] = void 0));
        });
        V ? K(V, [B, te]) : te();
      },
      leave(B, V) {
        const Y = String(e.key);
        if ((B[di] && B[di](!0), n.isUnmounting)) return V();
        J(p, [B]);
        let A = !1;
        const H = (B[Xn] = (te) => {
          A ||
            ((A = !0),
            V(),
            te ? J(P, [B]) : J(x, [B]),
            (B[Xn] = void 0),
            q[Y] === e && delete q[Y]);
        });
        (q[Y] = e), m ? K(m, [B, H]) : H();
      },
      clone(B) {
        const V = sc(B, t, n, r, s);
        return s && s(V), V;
      },
    };
  return ne;
}
function sa(e) {
  if (pl(e)) return (e = gr(e)), (e.children = null), e;
}
function uf(e) {
  if (!pl(e)) return lg(e.type) && e.children ? ug(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ie(n.default)) return n.default();
  }
}
function Lo(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Lo(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function dg(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === an
      ? (i.patchFlag & 128 && s++, (r = r.concat(dg(i.children, t, a))))
      : (t || i.type !== gt) && r.push(a != null ? gr(i, { key: a }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function dl(e, t) {
  return ie(e) ? Ve({ name: e.name }, t, { setup: e }) : e;
}
function pg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function Ii(e, t, n, r, s = !1) {
  if (re(e)) {
    e.forEach((x, P) => Ii(x, t && (re(t) ? t[P] : t), n, r, s));
    return;
  }
  if (oo(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      Ii(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? vl(r.component) : r.el,
    i = s ? null : o,
    { i: a, r: l } = e,
    f = t && t.r,
    c = a.refs === Pe ? (a.refs = {}) : a.refs,
    u = a.setupState,
    p = ge(u),
    m = u === Pe ? () => !1 : (x) => Se(p, x);
  if (
    (f != null &&
      f !== l &&
      (De(f) ? ((c[f] = null), m(f) && (u[f] = null)) : ot(f) && (f.value = null)),
    ie(l))
  )
    ri(l, a, 12, [i, c]);
  else {
    const x = De(l),
      P = ot(l);
    if (x || P) {
      const N = () => {
        if (e.f) {
          const I = x ? (m(l) ? u[l] : c[l]) : l.value;
          s
            ? re(I) && Xc(I, o)
            : re(I)
              ? I.includes(o) || I.push(o)
              : x
                ? ((c[l] = [o]), m(l) && (u[l] = c[l]))
                : ((l.value = [o]), e.k && (c[e.k] = l.value));
        } else x ? ((c[l] = i), m(l) && (u[l] = i)) : P && ((l.value = i), e.k && (c[e.k] = i));
      };
      i ? ((N.id = -1), wt(N, n)) : N();
    }
  }
}
al().requestIdleCallback;
al().cancelIdleCallback;
const oo = (e) => !!e.type.__asyncLoader,
  pl = (e) => e.type.__isKeepAlive;
function Eb(e, t) {
  hg(e, 'a', t);
}
function Cb(e, t) {
  hg(e, 'da', t);
}
function hg(e, t, n = ze) {
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
  if ((hl(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; ) pl(s.parent.vnode) && kb(r, t, n, s), (s = s.parent);
  }
}
function kb(e, t, n, r) {
  const s = hl(t, e, r, !0);
  vg(() => {
    Xc(r[t], s);
  }, n);
}
function hl(e, t, n = ze, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          yr();
          const a = si(n),
            l = Jt(t, n, e, i);
          return a(), br(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const qn =
    (e) =>
    (t, n = ze) => {
      (!Mo || e === 'sp') && hl(e, (...r) => t(...r), n);
    },
  Pb = qn('bm'),
  gg = qn('m'),
  Rb = qn('bu'),
  Ob = qn('u'),
  mg = qn('bum'),
  vg = qn('um'),
  Lb = qn('sp'),
  Ab = qn('rtg'),
  Mb = qn('rtc');
function Tb(e, t = ze) {
  hl('ec', e, t);
}
const Fb = 'components';
function $b(e, t) {
  return Ib(Fb, e, !0, t) || e;
}
const jb = Symbol.for('v-ndc');
function Ib(e, t, n = !0, r = !1) {
  const s = _t || ze;
  if (s) {
    const o = s.type;
    {
      const a = C0(o, !1);
      if (a && (a === t || a === Nt(t) || a === ll(Nt(t)))) return o;
    }
    const i = ff(s[e] || o[e], t) || ff(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function ff(e, t) {
  return e && (e[t] || e[Nt(t)] || e[ll(Nt(t))]);
}
function oL(e, t, n, r) {
  let s;
  const o = n,
    i = re(e);
  if (i || De(e)) {
    const a = i && ms(e);
    let l = !1;
    a && ((l = !jt(e)), (e = cl(e))), (s = new Array(e.length));
    for (let f = 0, c = e.length; f < c; f++) s[f] = t(l ? et(e[f]) : e[f], f, void 0, o);
  } else if (typeof e == 'number') {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o);
  } else if (Te(e))
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
const oc = (e) => (e ? (Ug(e) ? vl(e) : oc(e.parent)) : null),
  io = Ve(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => oc(e.parent),
    $root: (e) => oc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => yg(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        cu(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ng.bind(e.proxy)),
    $watch: (e) => s0.bind(e),
  }),
  oa = (e, t) => e !== Pe && !e.__isScriptSetup && Se(e, t),
  Db = {
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
        const m = i[t];
        if (m !== void 0)
          switch (m) {
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
          if (oa(r, t)) return (i[t] = 1), r[t];
          if (s !== Pe && Se(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && Se(f, t)) return (i[t] = 3), o[t];
          if (n !== Pe && Se(n, t)) return (i[t] = 4), n[t];
          ic && (i[t] = 0);
        }
      }
      const c = io[t];
      let u, p;
      if (c) return t === '$attrs' && Ze(e.attrs, 'get', ''), c(e);
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== Pe && Se(n, t)) return (i[t] = 4), n[t];
      if (((p = l.config.globalProperties), Se(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return oa(s, t)
        ? ((s[t] = n), !0)
        : r !== Pe && Se(r, t)
          ? ((r[t] = n), !0)
          : Se(e.props, t) || (t[0] === '$' && t.slice(1) in e)
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
        (e !== Pe && Se(e, i)) ||
        oa(t, i) ||
        ((a = o[0]) && Se(a, i)) ||
        Se(r, i) ||
        Se(io, i) ||
        Se(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Se(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function df(e) {
  return re(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ic = !0;
function Nb(e) {
  const t = yg(e),
    n = e.proxy,
    r = e.ctx;
  (ic = !1), t.beforeCreate && pf(t.beforeCreate, e, 'bc');
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    created: c,
    beforeMount: u,
    mounted: p,
    beforeUpdate: m,
    updated: x,
    activated: P,
    deactivated: N,
    beforeDestroy: I,
    beforeUnmount: T,
    destroyed: j,
    unmounted: L,
    render: q,
    renderTracked: J,
    renderTriggered: K,
    errorCaptured: ne,
    serverPrefetch: B,
    expose: V,
    inheritAttrs: Y,
    components: A,
    directives: H,
    filters: te,
  } = t;
  if ((f && Bb(f, r, null), i))
    for (const Q in i) {
      const W = i[Q];
      ie(W) && (r[Q] = W.bind(n));
    }
  if (s) {
    const Q = s.call(n, n);
    Te(Q) && (e.data = Us(Q));
  }
  if (((ic = !0), o))
    for (const Q in o) {
      const W = o[Q],
        Z = ie(W) ? W.bind(n, n) : ie(W.get) ? W.get.bind(n, n) : hn,
        Ie = !ie(W) && ie(W.set) ? W.set.bind(n) : hn,
        ke = Vt({ get: Z, set: Ie });
      Object.defineProperty(r, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (_e) => (ke.value = _e),
      });
    }
  if (a) for (const Q in a) _g(a[Q], r, n, Q);
  if (l) {
    const Q = ie(l) ? l.call(n) : l;
    Reflect.ownKeys(Q).forEach((W) => {
      xi(W, Q[W]);
    });
  }
  c && pf(c, e, 'c');
  function X(Q, W) {
    re(W) ? W.forEach((Z) => Q(Z.bind(n))) : W && Q(W.bind(n));
  }
  if (
    (X(Pb, u),
    X(gg, p),
    X(Rb, m),
    X(Ob, x),
    X(Eb, P),
    X(Cb, N),
    X(Tb, ne),
    X(Mb, J),
    X(Ab, K),
    X(mg, T),
    X(vg, L),
    X(Lb, B),
    re(V))
  )
    if (V.length) {
      const Q = e.exposed || (e.exposed = {});
      V.forEach((W) => {
        Object.defineProperty(Q, W, { get: () => n[W], set: (Z) => (n[W] = Z) });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === hn && (e.render = q),
    Y != null && (e.inheritAttrs = Y),
    A && (e.components = A),
    H && (e.directives = H),
    B && pg(e);
}
function Bb(e, t, n = hn) {
  re(e) && (e = lc(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Te(s)
      ? 'default' in s
        ? (o = Nn(s.from || r, s.default, !0))
        : (o = Nn(s.from || r))
      : (o = Nn(s)),
      ot(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function pf(e, t, n) {
  Jt(re(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function _g(e, t, n, r) {
  let s = r.includes('.') ? Tg(n, r) : () => n[r];
  if (De(e)) {
    const o = t[e];
    ie(o) && Si(s, o);
  } else if (ie(e)) Si(s, e.bind(n));
  else if (Te(e))
    if (re(e)) e.forEach((o) => _g(o, t, n, r));
    else {
      const o = ie(e.handler) ? e.handler.bind(n) : t[e.handler];
      ie(o) && Si(s, o, e);
    }
}
function yg(e) {
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
        : ((l = {}), s.length && s.forEach((f) => Di(l, f, i, !0)), Di(l, t, i)),
    Te(t) && o.set(t, l),
    l
  );
}
function Di(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Di(e, o, n, !0), s && s.forEach((i) => Di(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const a = Ub[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Ub = {
  data: hf,
  props: gf,
  emits: gf,
  methods: Zs,
  computed: Zs,
  beforeCreate: at,
  created: at,
  beforeMount: at,
  mounted: at,
  beforeUpdate: at,
  updated: at,
  beforeDestroy: at,
  beforeUnmount: at,
  destroyed: at,
  unmounted: at,
  activated: at,
  deactivated: at,
  errorCaptured: at,
  serverPrefetch: at,
  components: Zs,
  directives: Zs,
  watch: Vb,
  provide: hf,
  inject: qb,
};
function hf(e, t) {
  return t
    ? e
      ? function () {
          return Ve(ie(e) ? e.call(this, this) : e, ie(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function qb(e, t) {
  return Zs(lc(e), lc(t));
}
function lc(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function at(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Zs(e, t) {
  return e ? Ve(Object.create(null), e, t) : t;
}
function gf(e, t) {
  return e
    ? re(e) && re(t)
      ? [...new Set([...e, ...t])]
      : Ve(Object.create(null), df(e), df(t ?? {}))
    : t;
}
function Vb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ve(Object.create(null), e);
  for (const r in t) n[r] = at(e[r], t[r]);
  return n;
}
function bg() {
  return {
    app: null,
    config: {
      isNativeTag: Oy,
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
let Hb = 0;
function Wb(e, t) {
  return function (n, r = null) {
    ie(n) || (n = Ve({}, n)), r != null && !Te(r) && (r = null);
    const s = bg(),
      o = new WeakSet(),
      i = [];
    let a = !1;
    const l = (s.app = {
      _uid: Hb++,
      _component: n,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: P0,
      get config() {
        return s.config;
      },
      set config(f) {},
      use(f, ...c) {
        return (
          o.has(f) ||
            (f && ie(f.install) ? (o.add(f), f.install(l, ...c)) : ie(f) && (o.add(f), f(l, ...c))),
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
          const p = l._ceVNode || Rt(n, r);
          return (
            (p.appContext = s),
            u === !0 ? (u = 'svg') : u === !1 && (u = void 0),
            e(p, f, u),
            (a = !0),
            (l._container = f),
            (f.__vue_app__ = l),
            vl(p.component)
          );
        }
      },
      onUnmount(f) {
        i.push(f);
      },
      unmount() {
        a && (Jt(i, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
      },
      provide(f, c) {
        return (s.provides[f] = c), l;
      },
      runWithContext(f) {
        const c = ys;
        ys = l;
        try {
          return f();
        } finally {
          ys = c;
        }
      },
    });
    return l;
  };
}
let ys = null;
function xi(e, t) {
  if (ze) {
    let n = ze.provides;
    const r = ze.parent && ze.parent.provides;
    r === n && (n = ze.provides = Object.create(r)), (n[e] = t);
  }
}
function Nn(e, t, n = !1) {
  const r = ze || _t;
  if (r || ys) {
    const s = ys
      ? ys._context.provides
      : r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ie(t) ? t.call(r && r.proxy) : t;
  }
}
const wg = {},
  xg = () => Object.create(wg),
  Sg = (e) => Object.getPrototypeOf(e) === wg;
function zb(e, t, n, r = !1) {
  const s = {},
    o = xg();
  (e.propsDefaults = Object.create(null)), Eg(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : Yh(s)) : e.type.props ? (e.props = s) : (e.props = o), (e.attrs = o);
}
function Kb(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = ge(s),
    [l] = e.propsOptions;
  let f = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let p = c[u];
        if (gl(e.emitsOptions, p)) continue;
        const m = t[p];
        if (l)
          if (Se(o, p)) m !== o[p] && ((o[p] = m), (f = !0));
          else {
            const x = Nt(p);
            s[x] = ac(l, a, x, m, e, !1);
          }
        else m !== o[p] && ((o[p] = m), (f = !0));
      }
    }
  } else {
    Eg(e, t, s, o) && (f = !0);
    let c;
    for (const u in a)
      (!t || (!Se(t, u) && ((c = ts(u)) === u || !Se(t, c)))) &&
        (l
          ? n && (n[u] !== void 0 || n[c] !== void 0) && (s[u] = ac(l, a, u, void 0, e, !0))
          : delete s[u]);
    if (o !== a) for (const u in o) (!t || !Se(t, u)) && (delete o[u], (f = !0));
  }
  f && Mn(e.attrs, 'set', '');
}
function Eg(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (no(l)) continue;
      const f = t[l];
      let c;
      s && Se(s, (c = Nt(l)))
        ? !o || !o.includes(c)
          ? (n[c] = f)
          : ((a || (a = {}))[c] = f)
        : gl(e.emitsOptions, l) || ((!(l in r) || f !== r[l]) && ((r[l] = f), (i = !0)));
    }
  if (o) {
    const l = ge(n),
      f = a || Pe;
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      n[u] = ac(s, l, u, f[u], e, !Se(f, u));
    }
  }
  return i;
}
function ac(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = Se(i, 'default');
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ie(l)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const c = si(s);
          (r = f[n] = l.call(null, t)), c();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] && (o && !a ? (r = !1) : i[1] && (r === '' || r === ts(n)) && (r = !0));
  }
  return r;
}
const Gb = new WeakMap();
function Cg(e, t, n = !1) {
  const r = n ? Gb : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!ie(e)) {
    const c = (u) => {
      l = !0;
      const [p, m] = Cg(u, t, !0);
      Ve(i, p), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!o && !l) return Te(e) && r.set(e, hs), hs;
  if (re(o))
    for (let c = 0; c < o.length; c++) {
      const u = Nt(o[c]);
      mf(u) && (i[u] = Pe);
    }
  else if (o)
    for (const c in o) {
      const u = Nt(c);
      if (mf(u)) {
        const p = o[c],
          m = (i[u] = re(p) || ie(p) ? { type: p } : Ve({}, p)),
          x = m.type;
        let P = !1,
          N = !0;
        if (re(x))
          for (let I = 0; I < x.length; ++I) {
            const T = x[I],
              j = ie(T) && T.name;
            if (j === 'Boolean') {
              P = !0;
              break;
            } else j === 'String' && (N = !1);
          }
        else P = ie(x) && x.name === 'Boolean';
        (m[0] = P), (m[1] = N), (P || Se(m, 'default')) && a.push(u);
      }
    }
  const f = [i, a];
  return Te(e) && r.set(e, f), f;
}
function mf(e) {
  return e[0] !== '$' && !no(e);
}
const kg = (e) => e[0] === '_' || e === '$stable',
  uu = (e) => (re(e) ? e.map(cn) : [cn(e)]),
  Jb = (e, t, n) => {
    if (t._n) return t;
    const r = yb((...s) => uu(t(...s)), n);
    return (r._c = !1), r;
  },
  Pg = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (kg(s)) continue;
      const o = e[s];
      if (ie(o)) t[s] = Jb(s, o, r);
      else if (o != null) {
        const i = uu(o);
        t[s] = () => i;
      }
    }
  },
  Rg = (e, t) => {
    const n = uu(t);
    e.slots.default = () => n;
  },
  Og = (e, t, n) => {
    for (const r in t) (n || r !== '_') && (e[r] = t[r]);
  },
  Yb = (e, t, n) => {
    const r = (e.slots = xg());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Og(r, t, n), n && Mh(r, '_', s, !0)) : Pg(t, r);
    } else t && Rg(e, t);
  },
  Qb = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = Pe;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? (n && a === 1 ? (o = !1) : Og(s, t, n)) : ((o = !t.$stable), Pg(t, s)), (i = t);
    } else t && (Rg(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !kg(a) && i[a] == null && delete s[a];
  },
  wt = f0;
function Xb(e) {
  return Zb(e);
}
function Zb(e, t) {
  const n = al();
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
      nextSibling: p,
      setScopeId: m = hn,
      insertStaticContent: x,
    } = e,
    P = (g, d, h, v = null, _ = null, b = null, w = void 0, C = null, E = !!d.dynamicChildren) => {
      if (g === d) return;
      g && !qr(g, d) && ((v = y(g)), ue(g, _, b, !0), (g = null)),
        d.patchFlag === -2 && ((E = !1), (d.dynamicChildren = null));
      const { type: S, ref: R, shapeFlag: M } = d;
      switch (S) {
        case ml:
          N(g, d, h, v);
          break;
        case gt:
          I(g, d, h, v);
          break;
        case la:
          g == null && T(d, h, v, w);
          break;
        case an:
          A(g, d, h, v, _, b, w, C, E);
          break;
        default:
          M & 1
            ? q(g, d, h, v, _, b, w, C, E)
            : M & 6
              ? H(g, d, h, v, _, b, w, C, E)
              : (M & 64 || M & 128) && S.process(g, d, h, v, _, b, w, C, E, $);
      }
      R != null && _ && Ii(R, g && g.ref, b, d || g, !d);
    },
    N = (g, d, h, v) => {
      if (g == null) r((d.el = a(d.children)), h, v);
      else {
        const _ = (d.el = g.el);
        d.children !== g.children && f(_, d.children);
      }
    },
    I = (g, d, h, v) => {
      g == null ? r((d.el = l(d.children || '')), h, v) : (d.el = g.el);
    },
    T = (g, d, h, v) => {
      [g.el, g.anchor] = x(g.children, d, h, v, g.el, g.anchor);
    },
    j = ({ el: g, anchor: d }, h, v) => {
      let _;
      for (; g && g !== d; ) (_ = p(g)), r(g, h, v), (g = _);
      r(d, h, v);
    },
    L = ({ el: g, anchor: d }) => {
      let h;
      for (; g && g !== d; ) (h = p(g)), s(g), (g = h);
      s(d);
    },
    q = (g, d, h, v, _, b, w, C, E) => {
      d.type === 'svg' ? (w = 'svg') : d.type === 'math' && (w = 'mathml'),
        g == null ? J(d, h, v, _, b, w, C, E) : B(g, d, _, b, w, C, E);
    },
    J = (g, d, h, v, _, b, w, C) => {
      let E, S;
      const { props: R, shapeFlag: M, transition: F, dirs: D } = g;
      if (
        ((E = g.el = i(g.type, b, R && R.is, R)),
        M & 8 ? c(E, g.children) : M & 16 && ne(g.children, E, null, v, _, ia(g, b), w, C),
        D && Pr(g, null, v, 'created'),
        K(E, g, g.scopeId, w, v),
        R)
      ) {
        for (const G in R) G !== 'value' && !no(G) && o(E, G, null, R[G], b, v);
        'value' in R && o(E, 'value', null, R.value, b), (S = R.onVnodeBeforeMount) && tn(S, v, g);
      }
      D && Pr(g, null, v, 'beforeMount');
      const U = e0(_, F);
      U && F.beforeEnter(E),
        r(E, d, h),
        ((S = R && R.onVnodeMounted) || U || D) &&
          wt(() => {
            S && tn(S, v, g), U && F.enter(E), D && Pr(g, null, v, 'mounted');
          }, _);
    },
    K = (g, d, h, v, _) => {
      if ((h && m(g, h), v)) for (let b = 0; b < v.length; b++) m(g, v[b]);
      if (_) {
        let b = _.subTree;
        if (d === b || ($g(b.type) && (b.ssContent === d || b.ssFallback === d))) {
          const w = _.vnode;
          K(g, w, w.scopeId, w.slotScopeIds, _.parent);
        }
      }
    },
    ne = (g, d, h, v, _, b, w, C, E = 0) => {
      for (let S = E; S < g.length; S++) {
        const R = (g[S] = C ? Zn(g[S]) : cn(g[S]));
        P(null, R, d, h, v, _, b, w, C);
      }
    },
    B = (g, d, h, v, _, b, w) => {
      const C = (d.el = g.el);
      let { patchFlag: E, dynamicChildren: S, dirs: R } = d;
      E |= g.patchFlag & 16;
      const M = g.props || Pe,
        F = d.props || Pe;
      let D;
      if (
        (h && Rr(h, !1),
        (D = F.onVnodeBeforeUpdate) && tn(D, h, d, g),
        R && Pr(d, g, h, 'beforeUpdate'),
        h && Rr(h, !0),
        ((M.innerHTML && F.innerHTML == null) || (M.textContent && F.textContent == null)) &&
          c(C, ''),
        S
          ? V(g.dynamicChildren, S, C, h, v, ia(d, _), b)
          : w || Z(g, d, C, null, h, v, ia(d, _), b, !1),
        E > 0)
      ) {
        if (E & 16) Y(C, M, F, h, _);
        else if (
          (E & 2 && M.class !== F.class && o(C, 'class', null, F.class, _),
          E & 4 && o(C, 'style', M.style, F.style, _),
          E & 8)
        ) {
          const U = d.dynamicProps;
          for (let G = 0; G < U.length; G++) {
            const z = U[G],
              ee = M[z],
              ce = F[z];
            (ce !== ee || z === 'value') && o(C, z, ee, ce, _, h);
          }
        }
        E & 1 && g.children !== d.children && c(C, d.children);
      } else !w && S == null && Y(C, M, F, h, _);
      ((D = F.onVnodeUpdated) || R) &&
        wt(() => {
          D && tn(D, h, d, g), R && Pr(d, g, h, 'updated');
        }, v);
    },
    V = (g, d, h, v, _, b, w) => {
      for (let C = 0; C < d.length; C++) {
        const E = g[C],
          S = d[C],
          R = E.el && (E.type === an || !qr(E, S) || E.shapeFlag & 70) ? u(E.el) : h;
        P(E, S, R, null, v, _, b, w, !0);
      }
    },
    Y = (g, d, h, v, _) => {
      if (d !== h) {
        if (d !== Pe) for (const b in d) !no(b) && !(b in h) && o(g, b, d[b], null, _, v);
        for (const b in h) {
          if (no(b)) continue;
          const w = h[b],
            C = d[b];
          w !== C && b !== 'value' && o(g, b, C, w, _, v);
        }
        'value' in h && o(g, 'value', d.value, h.value, _);
      }
    },
    A = (g, d, h, v, _, b, w, C, E) => {
      const S = (d.el = g ? g.el : a('')),
        R = (d.anchor = g ? g.anchor : a(''));
      let { patchFlag: M, dynamicChildren: F, slotScopeIds: D } = d;
      D && (C = C ? C.concat(D) : D),
        g == null
          ? (r(S, h, v), r(R, h, v), ne(d.children || [], h, R, _, b, w, C, E))
          : M > 0 && M & 64 && F && g.dynamicChildren
            ? (V(g.dynamicChildren, F, h, _, b, w, C),
              (d.key != null || (_ && d === _.subTree)) && Lg(g, d, !0))
            : Z(g, d, h, R, _, b, w, C, E);
    },
    H = (g, d, h, v, _, b, w, C, E) => {
      (d.slotScopeIds = C),
        g == null
          ? d.shapeFlag & 512
            ? _.ctx.activate(d, h, v, w, E)
            : te(d, h, v, _, b, w, E)
          : X(g, d, E);
    },
    te = (g, d, h, v, _, b, w) => {
      const C = (g.component = y0(g, v, _));
      if ((pl(g) && (C.ctx.renderer = $), w0(C, !1, w), C.asyncDep)) {
        if ((_ && _.registerDep(C, Q, w), !g.el)) {
          const E = (C.subTree = Rt(gt));
          I(null, E, d, h);
        }
      } else Q(C, g, d, h, _, b, w);
    },
    X = (g, d, h) => {
      const v = (d.component = g.component);
      if (c0(g, d, h))
        if (v.asyncDep && !v.asyncResolved) {
          W(v, d, h);
          return;
        } else (v.next = d), v.update();
      else (d.el = g.el), (v.vnode = d);
    },
    Q = (g, d, h, v, _, b, w) => {
      const C = () => {
        if (g.isMounted) {
          let { next: M, bu: F, u: D, parent: U, vnode: G } = g;
          {
            const he = Ag(g);
            if (he) {
              M && ((M.el = G.el), W(g, M, w)),
                he.asyncDep.then(() => {
                  g.isUnmounted || C();
                });
              return;
            }
          }
          let z = M,
            ee;
          Rr(g, !1),
            M ? ((M.el = G.el), W(g, M, w)) : (M = G),
            F && Zl(F),
            (ee = M.props && M.props.onVnodeBeforeUpdate) && tn(ee, U, M, G),
            Rr(g, !0);
          const ce = _f(g),
            de = g.subTree;
          (g.subTree = ce),
            P(de, ce, u(de.el), y(de), g, _, b),
            (M.el = ce.el),
            z === null && u0(g, ce.el),
            D && wt(D, _),
            (ee = M.props && M.props.onVnodeUpdated) && wt(() => tn(ee, U, M, G), _);
        } else {
          let M;
          const { el: F, props: D } = d,
            { bm: U, m: G, parent: z, root: ee, type: ce } = g,
            de = oo(d);
          Rr(g, !1), U && Zl(U), !de && (M = D && D.onVnodeBeforeMount) && tn(M, z, d), Rr(g, !0);
          {
            ee.ce && ee.ce._injectChildStyle(ce);
            const he = (g.subTree = _f(g));
            P(null, he, h, v, g, _, b), (d.el = he.el);
          }
          if ((G && wt(G, _), !de && (M = D && D.onVnodeMounted))) {
            const he = d;
            wt(() => tn(M, z, he), _);
          }
          (d.shapeFlag & 256 || (z && oo(z.vnode) && z.vnode.shapeFlag & 256)) && g.a && wt(g.a, _),
            (g.isMounted = !0),
            (d = h = v = null);
        }
      };
      g.scope.on();
      const E = (g.effect = new jh(C));
      g.scope.off();
      const S = (g.update = E.run.bind(E)),
        R = (g.job = E.runIfDirty.bind(E));
      (R.i = g), (R.id = g.uid), (E.scheduler = () => cu(R)), Rr(g, !0), S();
    },
    W = (g, d, h) => {
      d.component = g;
      const v = g.vnode.props;
      (g.vnode = d), (g.next = null), Kb(g, d.props, v, h), Qb(g, d.children, h), yr(), cf(g), br();
    },
    Z = (g, d, h, v, _, b, w, C, E = !1) => {
      const S = g && g.children,
        R = g ? g.shapeFlag : 0,
        M = d.children,
        { patchFlag: F, shapeFlag: D } = d;
      if (F > 0) {
        if (F & 128) {
          ke(S, M, h, v, _, b, w, C, E);
          return;
        } else if (F & 256) {
          Ie(S, M, h, v, _, b, w, C, E);
          return;
        }
      }
      D & 8
        ? (R & 16 && fe(S, _, b), M !== S && c(h, M))
        : R & 16
          ? D & 16
            ? ke(S, M, h, v, _, b, w, C, E)
            : fe(S, _, b, !0)
          : (R & 8 && c(h, ''), D & 16 && ne(M, h, v, _, b, w, C, E));
    },
    Ie = (g, d, h, v, _, b, w, C, E) => {
      (g = g || hs), (d = d || hs);
      const S = g.length,
        R = d.length,
        M = Math.min(S, R);
      let F;
      for (F = 0; F < M; F++) {
        const D = (d[F] = E ? Zn(d[F]) : cn(d[F]));
        P(g[F], D, h, null, _, b, w, C, E);
      }
      S > R ? fe(g, _, b, !0, !1, M) : ne(d, h, v, _, b, w, C, E, M);
    },
    ke = (g, d, h, v, _, b, w, C, E) => {
      let S = 0;
      const R = d.length;
      let M = g.length - 1,
        F = R - 1;
      for (; S <= M && S <= F; ) {
        const D = g[S],
          U = (d[S] = E ? Zn(d[S]) : cn(d[S]));
        if (qr(D, U)) P(D, U, h, null, _, b, w, C, E);
        else break;
        S++;
      }
      for (; S <= M && S <= F; ) {
        const D = g[M],
          U = (d[F] = E ? Zn(d[F]) : cn(d[F]));
        if (qr(D, U)) P(D, U, h, null, _, b, w, C, E);
        else break;
        M--, F--;
      }
      if (S > M) {
        if (S <= F) {
          const D = F + 1,
            U = D < R ? d[D].el : v;
          for (; S <= F; ) P(null, (d[S] = E ? Zn(d[S]) : cn(d[S])), h, U, _, b, w, C, E), S++;
        }
      } else if (S > F) for (; S <= M; ) ue(g[S], _, b, !0), S++;
      else {
        const D = S,
          U = S,
          G = new Map();
        for (S = U; S <= F; S++) {
          const ye = (d[S] = E ? Zn(d[S]) : cn(d[S]));
          ye.key != null && G.set(ye.key, S);
        }
        let z,
          ee = 0;
        const ce = F - U + 1;
        let de = !1,
          he = 0;
        const je = new Array(ce);
        for (S = 0; S < ce; S++) je[S] = 0;
        for (S = D; S <= M; S++) {
          const ye = g[S];
          if (ee >= ce) {
            ue(ye, _, b, !0);
            continue;
          }
          let pe;
          if (ye.key != null) pe = G.get(ye.key);
          else
            for (z = U; z <= F; z++)
              if (je[z - U] === 0 && qr(ye, d[z])) {
                pe = z;
                break;
              }
          pe === void 0
            ? ue(ye, _, b, !0)
            : ((je[pe - U] = S + 1),
              pe >= he ? (he = pe) : (de = !0),
              P(ye, d[pe], h, null, _, b, w, C, E),
              ee++);
        }
        const qt = de ? t0(je) : hs;
        for (z = qt.length - 1, S = ce - 1; S >= 0; S--) {
          const ye = U + S,
            pe = d[ye],
            Je = ye + 1 < R ? d[ye + 1].el : v;
          je[S] === 0
            ? P(null, pe, h, Je, _, b, w, C, E)
            : de && (z < 0 || S !== qt[z] ? _e(pe, h, Je, 2) : z--);
        }
      }
    },
    _e = (g, d, h, v, _ = null) => {
      const { el: b, type: w, transition: C, children: E, shapeFlag: S } = g;
      if (S & 6) {
        _e(g.component.subTree, d, h, v);
        return;
      }
      if (S & 128) {
        g.suspense.move(d, h, v);
        return;
      }
      if (S & 64) {
        w.move(g, d, h, $);
        return;
      }
      if (w === an) {
        r(b, d, h);
        for (let R = 0; R < E.length; R++) _e(E[R], d, h, v);
        r(g.anchor, d, h);
        return;
      }
      if (w === la) {
        j(g, d, h);
        return;
      }
      if (v !== 2 && S & 1 && C)
        if (v === 0) C.beforeEnter(b), r(b, d, h), wt(() => C.enter(b), _);
        else {
          const { leave: R, delayLeave: M, afterLeave: F } = C,
            D = () => r(b, d, h),
            U = () => {
              R(b, () => {
                D(), F && F();
              });
            };
          M ? M(b, D, U) : U();
        }
      else r(b, d, h);
    },
    ue = (g, d, h, v = !1, _ = !1) => {
      const {
        type: b,
        props: w,
        ref: C,
        children: E,
        dynamicChildren: S,
        shapeFlag: R,
        patchFlag: M,
        dirs: F,
        cacheIndex: D,
      } = g;
      if (
        (M === -2 && (_ = !1),
        C != null && Ii(C, null, h, g, !0),
        D != null && (d.renderCache[D] = void 0),
        R & 256)
      ) {
        d.ctx.deactivate(g);
        return;
      }
      const U = R & 1 && F,
        G = !oo(g);
      let z;
      if ((G && (z = w && w.onVnodeBeforeUnmount) && tn(z, d, g), R & 6)) ht(g.component, h, v);
      else {
        if (R & 128) {
          g.suspense.unmount(h, v);
          return;
        }
        U && Pr(g, null, d, 'beforeUnmount'),
          R & 64
            ? g.type.remove(g, d, h, $, v)
            : S && !S.hasOnce && (b !== an || (M > 0 && M & 64))
              ? fe(S, d, h, !1, !0)
              : ((b === an && M & 384) || (!_ && R & 16)) && fe(E, d, h),
          v && Ue(g);
      }
      ((G && (z = w && w.onVnodeUnmounted)) || U) &&
        wt(() => {
          z && tn(z, d, g), U && Pr(g, null, d, 'unmounted');
        }, h);
    },
    Ue = (g) => {
      const { type: d, el: h, anchor: v, transition: _ } = g;
      if (d === an) {
        qe(h, v);
        return;
      }
      if (d === la) {
        L(g);
        return;
      }
      const b = () => {
        s(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (g.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: w, delayLeave: C } = _,
          E = () => w(h, b);
        C ? C(g.el, b, E) : E();
      } else b();
    },
    qe = (g, d) => {
      let h;
      for (; g !== d; ) (h = p(g)), s(g), (g = h);
      s(d);
    },
    ht = (g, d, h) => {
      const { bum: v, scope: _, job: b, subTree: w, um: C, m: E, a: S } = g;
      vf(E),
        vf(S),
        v && Zl(v),
        _.stop(),
        b && ((b.flags |= 8), ue(w, g, d, h)),
        C && wt(C, d),
        wt(() => {
          g.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          g.asyncDep &&
          !g.asyncResolved &&
          g.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    fe = (g, d, h, v = !1, _ = !1, b = 0) => {
      for (let w = b; w < g.length; w++) ue(g[w], d, h, v, _);
    },
    y = (g) => {
      if (g.shapeFlag & 6) return y(g.component.subTree);
      if (g.shapeFlag & 128) return g.suspense.next();
      const d = p(g.anchor || g.el),
        h = d && d[bb];
      return h ? p(h) : d;
    };
  let O = !1;
  const k = (g, d, h) => {
      g == null
        ? d._vnode && ue(d._vnode, null, null, !0)
        : P(d._vnode || null, g, d, null, null, null, h),
        (d._vnode = g),
        O || ((O = !0), cf(), sg(), (O = !1));
    },
    $ = { p: P, um: ue, m: _e, r: Ue, mt: te, mc: ne, pc: Z, pbc: V, n: y, o: e };
  return { render: k, hydrate: void 0, createApp: Wb(k) };
}
function ia({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n;
}
function Rr({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function e0(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Lg(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (re(r) && re(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = s[o] = Zn(s[o])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && Lg(i, a)),
        a.type === ml && (a.el = i.el);
    }
}
function t0(e) {
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
function Ag(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ag(t);
}
function vf(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const n0 = Symbol.for('v-scx'),
  r0 = () => Nn(n0);
function Si(e, t, n) {
  return Mg(e, t, n);
}
function Mg(e, t, n = Pe) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    a = Ve({}, n),
    l = (t && r) || (!t && o !== 'post');
  let f;
  if (Mo) {
    if (o === 'sync') {
      const m = r0();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {};
      return (m.stop = hn), (m.resume = hn), (m.pause = hn), m;
    }
  }
  const c = ze;
  a.call = (m, x, P) => Jt(m, c, x, P);
  let u = !1;
  o === 'post'
    ? (a.scheduler = (m) => {
        wt(m, c && c.suspense);
      })
    : o !== 'sync' &&
      ((u = !0),
      (a.scheduler = (m, x) => {
        x ? m() : cu(m);
      })),
    (a.augmentJob = (m) => {
      t && (m.flags |= 4), u && ((m.flags |= 2), c && ((m.id = c.uid), (m.i = c)));
    });
  const p = gb(e, t, a);
  return Mo && (f ? f.push(p) : l && p()), p;
}
function s0(e, t, n) {
  const r = this.proxy,
    s = De(e) ? (e.includes('.') ? Tg(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  ie(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = si(this),
    a = Mg(s, o.bind(r), n);
  return i(), a;
}
function Tg(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const o0 = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Nt(t)}Modifiers`] || e[`${ts(t)}Modifiers`];
function i0(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Pe;
  let s = n;
  const o = t.startsWith('update:'),
    i = o && o0(r, t.slice(7));
  i && (i.trim && (s = n.map((c) => (De(c) ? c.trim() : c))), i.number && (s = n.map(Fy)));
  let a,
    l = r[(a = Xl(t))] || r[(a = Xl(Nt(t)))];
  !l && o && (l = r[(a = Xl(ts(t)))]), l && Jt(l, e, 6, s);
  const f = r[a + 'Once'];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Jt(f, e, 6, s);
  }
}
function Fg(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!ie(e)) {
    const l = (f) => {
      const c = Fg(f, t, !0);
      c && ((a = !0), Ve(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? (Te(e) && r.set(e, null), null)
    : (re(o) ? o.forEach((l) => (i[l] = null)) : Ve(i, o), Te(e) && r.set(e, i), i);
}
function gl(e, t) {
  return !e || !sl(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, ts(t)) || Se(e, t));
}
function _f(e) {
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
      data: p,
      setupState: m,
      ctx: x,
      inheritAttrs: P,
    } = e,
    N = ji(e);
  let I, T;
  try {
    if (n.shapeFlag & 4) {
      const L = s || r,
        q = L;
      (I = cn(f.call(q, L, c, u, m, p, x))), (T = a);
    } else {
      const L = t;
      (I = cn(L.length > 1 ? L(u, { attrs: a, slots: i, emit: l }) : L(u, null))),
        (T = t.props ? a : l0(a));
    }
  } catch (L) {
    (lo.length = 0), fl(L, e, 1), (I = Rt(gt));
  }
  let j = I;
  if (T && P !== !1) {
    const L = Object.keys(T),
      { shapeFlag: q } = j;
    L.length && q & 7 && (o && L.some(Qc) && (T = a0(T, o)), (j = gr(j, T, !1, !0)));
  }
  return (
    n.dirs && ((j = gr(j, null, !1, !0)), (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Lo(j, n.transition),
    (I = j),
    ji(N),
    I
  );
}
const l0 = (e) => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || sl(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  a0 = (e, t) => {
    const n = {};
    for (const r in e) (!Qc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function c0(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: l } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? yf(r, i, f) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const p = c[u];
        if (i[p] !== r[p] && !gl(f, p)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? yf(r, i, f) : !0) : !!i;
  return !1;
}
function yf(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !gl(n, o)) return !0;
  }
  return !1;
}
function u0({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const $g = (e) => e.__isSuspense;
function f0(e, t) {
  t && t.pendingBranch ? (re(e) ? t.effects.push(...e) : t.effects.push(e)) : _b(e);
}
const an = Symbol.for('v-fgt'),
  ml = Symbol.for('v-txt'),
  gt = Symbol.for('v-cmt'),
  la = Symbol.for('v-stc'),
  lo = [];
let Pt = null;
function jg(e = !1) {
  lo.push((Pt = e ? null : []));
}
function d0() {
  lo.pop(), (Pt = lo[lo.length - 1] || null);
}
let Ao = 1;
function bf(e, t = !1) {
  (Ao += e), e < 0 && Pt && t && (Pt.hasOnce = !0);
}
function Ig(e) {
  return (e.dynamicChildren = Ao > 0 ? Pt || hs : null), d0(), Ao > 0 && Pt && Pt.push(e), e;
}
function iL(e, t, n, r, s, o) {
  return Ig(Bg(e, t, n, r, s, o, !0));
}
function Dg(e, t, n, r, s) {
  return Ig(Rt(e, t, n, r, s, !0));
}
function Ni(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ng = ({ key: e }) => e ?? null,
  Ei = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (De(e) || ot(e) || ie(e) ? { i: _t, r: e, k: t, f: !!n } : e) : null
  );
function Bg(e, t = null, n = null, r = 0, s = null, o = e === an ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ng(t),
    ref: t && Ei(t),
    scopeId: ig,
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
    ctx: _t,
  };
  return (
    a ? (fu(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= De(n) ? 8 : 16),
    Ao > 0 && !i && Pt && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Pt.push(l),
    l
  );
}
const Rt = p0;
function p0(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === jb) && (e = gt), Ni(e))) {
    const a = gr(e, t, !0);
    return (
      n && fu(a, n),
      Ao > 0 && !o && Pt && (a.shapeFlag & 6 ? (Pt[Pt.indexOf(e)] = a) : Pt.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((k0(e) && (e = e.__vccOpts), t)) {
    t = h0(t);
    let { class: a, style: l } = t;
    a && !De(a) && (t.class = tu(a)),
      Te(l) && (au(l) && !re(l) && (l = Ve({}, l)), (t.style = eu(l)));
  }
  const i = De(e) ? 1 : $g(e) ? 128 : lg(e) ? 64 : Te(e) ? 4 : ie(e) ? 2 : 0;
  return Bg(e, t, n, r, s, i, o, !0);
}
function h0(e) {
  return e ? (au(e) || Sg(e) ? Ve({}, e) : e) : null;
}
function gr(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e,
    f = t ? m0(s || {}, t) : s,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && Ng(f),
      ref: t && t.ref ? (n && o ? (re(o) ? o.concat(Ei(t)) : [o, Ei(t)]) : Ei(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== an ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && gr(e.ssContent),
      ssFallback: e.ssFallback && gr(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && Lo(c, l.clone(c)), c;
}
function g0(e = ' ', t = 0) {
  return Rt(ml, null, e, t);
}
function lL(e = '', t = !1) {
  return t ? (jg(), Dg(gt, null, e)) : Rt(gt, null, e);
}
function cn(e) {
  return e == null || typeof e == 'boolean'
    ? Rt(gt)
    : re(e)
      ? Rt(an, null, e.slice())
      : Ni(e)
        ? Zn(e)
        : Rt(ml, null, String(e));
}
function Zn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : gr(e);
}
function fu(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (re(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), fu(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Sg(t)
        ? (t._ctx = _t)
        : s === 3 && _t && (_t.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ie(t)
      ? ((t = { default: t, _ctx: _t }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [g0(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function m0(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === 'class') t.class !== r.class && (t.class = tu([t.class, r.class]));
      else if (s === 'style') t.style = eu([t.style, r.style]);
      else if (sl(s)) {
        const o = t[s],
          i = r[s];
        i && o !== i && !(re(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== '' && (t[s] = r[s]);
  }
  return t;
}
function tn(e, t, n, r = null) {
  Jt(e, t, 7, [n, r]);
}
const v0 = bg();
let _0 = 0;
function y0(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || v0,
    o = {
      uid: _0++,
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
      scope: new Vy(!0),
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
      propsOptions: Cg(r, s),
      emitsOptions: Fg(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Pe,
      inheritAttrs: r.inheritAttrs,
      ctx: Pe,
      data: Pe,
      props: Pe,
      attrs: Pe,
      slots: Pe,
      refs: Pe,
      setupState: Pe,
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
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = i0.bind(null, o)), e.ce && e.ce(o), o
  );
}
let ze = null;
const b0 = () => ze || _t;
let Bi, cc;
{
  const e = al(),
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
  (Bi = t('__VUE_INSTANCE_SETTERS__', (n) => (ze = n))),
    (cc = t('__VUE_SSR_SETTERS__', (n) => (Mo = n)));
}
const si = (e) => {
    const t = ze;
    return (
      Bi(e),
      e.scope.on(),
      () => {
        e.scope.off(), Bi(t);
      }
    );
  },
  wf = () => {
    ze && ze.scope.off(), Bi(null);
  };
function Ug(e) {
  return e.vnode.shapeFlag & 4;
}
let Mo = !1;
function w0(e, t = !1, n = !1) {
  t && cc(t);
  const { props: r, children: s } = e.vnode,
    o = Ug(e);
  zb(e, r, o, t), Yb(e, s, n);
  const i = o ? x0(e, t) : void 0;
  return t && cc(!1), i;
}
function x0(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Db));
  const { setup: r } = n;
  if (r) {
    yr();
    const s = (e.setupContext = r.length > 1 ? E0(e) : null),
      o = si(e),
      i = ri(r, e, 0, [e.props, s]),
      a = Oh(i);
    if ((br(), o(), (a || e.sp) && !oo(e) && pg(e), a)) {
      if ((i.then(wf, wf), t))
        return i
          .then((l) => {
            xf(e, l);
          })
          .catch((l) => {
            fl(l, e, 0);
          });
      e.asyncDep = i;
    } else xf(e, i);
  } else qg(e);
}
function xf(e, t, n) {
  ie(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Te(t) && (e.setupState = eg(t)),
    qg(e);
}
function qg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || hn);
  {
    const s = si(e);
    yr();
    try {
      Nb(e);
    } finally {
      br(), s();
    }
  }
}
const S0 = {
  get(e, t) {
    return Ze(e, 'get', ''), e[t];
  },
};
function E0(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, S0), slots: e.slots, emit: e.emit, expose: t };
}
function vl(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(eg(ul(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in io) return io[n](e);
          },
          has(t, n) {
            return n in t || n in io;
          },
        }))
    : e.proxy;
}
function C0(e, t = !0) {
  return ie(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function k0(e) {
  return ie(e) && '__vccOpts' in e;
}
const Vt = (e, t) => pb(e, t, Mo);
function du(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Te(t) && !re(t)
      ? Ni(t)
        ? Rt(e, null, [t])
        : Rt(e, t)
      : Rt(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Ni(n) && (n = [n]),
      Rt(e, t, n));
}
const P0 = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let uc;
const Sf = typeof window < 'u' && window.trustedTypes;
if (Sf)
  try {
    uc = Sf.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const Vg = uc ? (e) => uc.createHTML(e) : (e) => e,
  R0 = 'http://www.w3.org/2000/svg',
  O0 = 'http://www.w3.org/1998/Math/MathML',
  On = typeof document < 'u' ? document : null,
  Ef = On && On.createElement('template'),
  L0 = {
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
          ? On.createElementNS(R0, e)
          : t === 'mathml'
            ? On.createElementNS(O0, e)
            : n
              ? On.createElement(e, { is: n })
              : On.createElement(e);
      return e === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple), s;
    },
    createText: (e) => On.createTextNode(e),
    createComment: (e) => On.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => On.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); );
      else {
        Ef.innerHTML = Vg(
          r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e,
        );
        const a = Ef.content;
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
  Wn = 'transition',
  Ws = 'animation',
  To = Symbol('_vtc'),
  Hg = {
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
  A0 = Ve({}, ag, Hg),
  M0 = (e) => ((e.displayName = 'Transition'), (e.props = A0), e),
  aL = M0((e, { slots: t }) => du(Sb, T0(e), t)),
  Or = (e, t = []) => {
    re(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Cf = (e) => (e ? (re(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function T0(e) {
  const t = {};
  for (const A in e) A in Hg || (t[A] = e[A]);
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
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    x = F0(s),
    P = x && x[0],
    N = x && x[1],
    {
      onBeforeEnter: I,
      onEnter: T,
      onEnterCancelled: j,
      onLeave: L,
      onLeaveCancelled: q,
      onBeforeAppear: J = I,
      onAppear: K = T,
      onAppearCancelled: ne = j,
    } = t,
    B = (A, H, te, X) => {
      (A._enterCancelled = X), Lr(A, H ? c : a), Lr(A, H ? f : i), te && te();
    },
    V = (A, H) => {
      (A._isLeaving = !1), Lr(A, u), Lr(A, m), Lr(A, p), H && H();
    },
    Y = (A) => (H, te) => {
      const X = A ? K : T,
        Q = () => B(H, A, te);
      Or(X, [H, Q]),
        kf(() => {
          Lr(H, A ? l : o), wn(H, A ? c : a), Cf(X) || Pf(H, r, P, Q);
        });
    };
  return Ve(t, {
    onBeforeEnter(A) {
      Or(I, [A]), wn(A, o), wn(A, i);
    },
    onBeforeAppear(A) {
      Or(J, [A]), wn(A, l), wn(A, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(A, H) {
      A._isLeaving = !0;
      const te = () => V(A, H);
      wn(A, u),
        A._enterCancelled ? (wn(A, p), Lf()) : (Lf(), wn(A, p)),
        kf(() => {
          A._isLeaving && (Lr(A, u), wn(A, m), Cf(L) || Pf(A, r, N, te));
        }),
        Or(L, [A, te]);
    },
    onEnterCancelled(A) {
      B(A, !1, void 0, !0), Or(j, [A]);
    },
    onAppearCancelled(A) {
      B(A, !0, void 0, !0), Or(ne, [A]);
    },
    onLeaveCancelled(A) {
      V(A), Or(q, [A]);
    },
  });
}
function F0(e) {
  if (e == null) return null;
  if (Te(e)) return [aa(e.enter), aa(e.leave)];
  {
    const t = aa(e);
    return [t, t];
  }
}
function aa(e) {
  return $y(e);
}
function wn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[To] || (e[To] = new Set())).add(t);
}
function Lr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[To];
  n && (n.delete(t), n.size || (e[To] = void 0));
}
function kf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let $0 = 0;
function Pf(e, t, n, r) {
  const s = (e._endId = ++$0),
    o = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = j0(e, t);
  if (!i) return r();
  const f = i + 'end';
  let c = 0;
  const u = () => {
      e.removeEventListener(f, p), o();
    },
    p = (m) => {
      m.target === e && ++c >= l && u();
    };
  setTimeout(() => {
    c < l && u();
  }, a + 1),
    e.addEventListener(f, p);
}
function j0(e, t) {
  const n = window.getComputedStyle(e),
    r = (x) => (n[x] || '').split(', '),
    s = r(`${Wn}Delay`),
    o = r(`${Wn}Duration`),
    i = Rf(s, o),
    a = r(`${Ws}Delay`),
    l = r(`${Ws}Duration`),
    f = Rf(a, l);
  let c = null,
    u = 0,
    p = 0;
  t === Wn
    ? i > 0 && ((c = Wn), (u = i), (p = o.length))
    : t === Ws
      ? f > 0 && ((c = Ws), (u = f), (p = l.length))
      : ((u = Math.max(i, f)),
        (c = u > 0 ? (i > f ? Wn : Ws) : null),
        (p = c ? (c === Wn ? o.length : l.length) : 0));
  const m = c === Wn && /\b(transform|all)(,|$)/.test(r(`${Wn}Property`).toString());
  return { type: c, timeout: u, propCount: p, hasTransform: m };
}
function Rf(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Of(n) + Of(e[r])));
}
function Of(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Lf() {
  return document.body.offsetHeight;
}
function I0(e, t, n) {
  const r = e[To];
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
const Af = Symbol('_vod'),
  D0 = Symbol('_vsh'),
  N0 = Symbol(''),
  B0 = /(^|;)\s*display\s*:/;
function U0(e, t, n) {
  const r = e.style,
    s = De(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (De(t))
        for (const i of t.split(';')) {
          const a = i.slice(0, i.indexOf(':')).trim();
          n[a] == null && Ci(r, a, '');
        }
      else for (const i in t) n[i] == null && Ci(r, i, '');
    for (const i in n) i === 'display' && (o = !0), Ci(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[N0];
      i && (n += ';' + i), (r.cssText = n), (o = B0.test(n));
    }
  } else t && e.removeAttribute('style');
  Af in e && ((e[Af] = o ? r.display : ''), e[D0] && (r.display = 'none'));
}
const Mf = /\s*!important$/;
function Ci(e, t, n) {
  if (re(n)) n.forEach((r) => Ci(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = q0(e, t);
    Mf.test(n) ? e.setProperty(ts(r), n.replace(Mf, ''), 'important') : (e[r] = n);
  }
}
const Tf = ['Webkit', 'Moz', 'ms'],
  ca = {};
function q0(e, t) {
  const n = ca[t];
  if (n) return n;
  let r = Nt(t);
  if (r !== 'filter' && r in e) return (ca[t] = r);
  r = ll(r);
  for (let s = 0; s < Tf.length; s++) {
    const o = Tf[s] + r;
    if (o in e) return (ca[t] = o);
  }
  return t;
}
const Ff = 'http://www.w3.org/1999/xlink';
function $f(e, t, n, r, s, o = Uy(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Ff, t.slice(6, t.length))
      : e.setAttributeNS(Ff, t, n)
    : n == null || (o && !Th(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : _r(n) ? String(n) : n);
}
function jf(e, t, n, r, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Vg(n) : n);
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
      ? (n = Th(n))
      : n == null && a === 'string'
        ? ((n = ''), (i = !0))
        : a === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function V0(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function H0(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const If = Symbol('_vei');
function W0(e, t, n, r, s = null) {
  const o = e[If] || (e[If] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = z0(t);
    if (r) {
      const f = (o[t] = J0(r, s));
      V0(e, a, f, l);
    } else i && (H0(e, a, i, l), (o[t] = void 0));
  }
}
const Df = /(?:Once|Passive|Capture)$/;
function z0(e) {
  let t;
  if (Df.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(Df)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : ts(e.slice(2)), t];
}
let ua = 0;
const K0 = Promise.resolve(),
  G0 = () => ua || (K0.then(() => (ua = 0)), (ua = Date.now()));
function J0(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Jt(Y0(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = G0()), n;
}
function Y0(e, t) {
  if (re(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Nf = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Q0 = (e, t, n, r, s, o) => {
    const i = s === 'svg';
    t === 'class'
      ? I0(e, r, i)
      : t === 'style'
        ? U0(e, n, r)
        : sl(t)
          ? Qc(t) || W0(e, t, n, r, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : X0(e, t, r, i)
              )
            ? (jf(e, t, r),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                $f(e, t, r, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !De(r))
              ? jf(e, Nt(t), r, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = r)
                  : t === 'false-value' && (e._falseValue = r),
                $f(e, t, r, i));
  };
function X0(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Nf(t) && ie(n)));
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
  return Nf(t) && De(n) ? !1 : t in e;
}
const Z0 = Ve({ patchProp: Q0 }, L0);
let Bf;
function ew() {
  return Bf || (Bf = Xb(Z0));
}
const tw = (...e) => {
  const t = ew().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = rw(r);
      if (!s) return;
      const o = t._component;
      !ie(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = '');
      const i = n(s, !1, nw(s));
      return (
        s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), i
      );
    }),
    t
  );
};
function nw(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function rw(e) {
  return De(e) ? document.querySelector(e) : e;
}
function pu(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: !0 }), e;
}
const Yr = Xh(!1);
let fc;
function sw(e, t) {
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
function ow(e) {
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
const Wg = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0;
function iw(e) {
  const t = e.toLowerCase(),
    n = ow(t),
    r = sw(t, n),
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
      Yr.value === !0 && (fc = { is: { ...s } }),
      Wg === !0 &&
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
const Uf = navigator.userAgent || navigator.vendor || window.opera,
  lw = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  gn = {
    userAgent: Uf,
    is: iw(Uf),
    has: { touch: Wg },
    within: { iframe: window.self !== window.top },
  },
  dc = {
    install(e) {
      const { $q: t } = e;
      Yr.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, gn), (Yr.value = !1);
          }),
          (t.platform = Us(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  pu(gn.has, 'webStorage', () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Object.assign(dc, gn),
    Yr.value === !0 && (Object.assign(dc, fc, lw), (fc = null));
}
function cL(e) {
  return ul(dl(e));
}
function uL(e) {
  return ul(e);
}
const _l = (e, t) => {
    const n = Us(e);
    for (const r in e)
      pu(
        t,
        r,
        () => n[r],
        (s) => {
          n[r] = s;
        },
      );
    return t;
  },
  Ms = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign(Ms, {
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
function Fo() {}
function fL(e) {
  return e.button === 0;
}
function dL(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
        ? (e = e.changedTouches[0])
        : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function pL(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === 'HTML')) return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function hL(e) {
  e.stopPropagation();
}
function qf(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function gL(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function mL(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0), r.addEventListener('dragstart', qf, Ms.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented, r.removeEventListener('dragstart', qf, Ms.notPassiveCapture);
        };
  e.querySelectorAll('a, img').forEach(n);
}
function vL(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((s) => {
      s[0].addEventListener(s[1], e[s[2]], Ms[s[3]]);
    });
}
function _L(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], Ms[r[3]]);
    }),
    (e[n] = void 0));
}
function aw(e, t = 250, n) {
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
const fa = ['sm', 'md', 'lg', 'xl'],
  { passive: Vf } = Ms,
  cw = _l(
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
      setSizes: Fo,
      setDebounce: Fo,
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
            n === void 0 || gn.is.mobile === !0
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
          const [p, m] = o();
          if ((m !== this.height && (this.height = m), p !== this.width)) this.width = p;
          else if (u !== !0) return;
          let x = this.sizes;
          (this.gt.xs = p >= x.sm),
            (this.gt.sm = p >= x.md),
            (this.gt.md = p >= x.lg),
            (this.gt.lg = p >= x.xl),
            (this.lt.sm = p < x.sm),
            (this.lt.md = p < x.md),
            (this.lt.lg = p < x.lg),
            (this.lt.xl = p < x.xl),
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
          fa.forEach((p) => {
            u[p] !== void 0 && (l[p] = u[p]);
          });
        }),
          (this.setDebounce = (u) => {
            f = u;
          });
        const c = () => {
          const u = getComputedStyle(document.body);
          u.getPropertyValue('--q-size-sm') &&
            fa.forEach((p) => {
              this.sizes[p] = parseInt(u.getPropertyValue(`--q-size-${p}`), 10);
            }),
            (this.setSizes = (p) => {
              fa.forEach((m) => {
                p[m] && (this.sizes[m] = p[m]);
              }),
                this.__update(!0);
            }),
            (this.setDebounce = (p) => {
              a !== void 0 && r.removeEventListener('resize', a, Vf),
                (a = p > 0 ? aw(this.__update, p) : this.__update),
                r.addEventListener('resize', a, Vf);
            }),
            this.setDebounce(f),
            Object.keys(l).length !== 0 ? (this.setSizes(l), (l = void 0)) : this.__update(),
            i === !0 && this.name === 'xs' && document.body.classList.add('screen--xs');
        };
        Yr.value === !0 ? t.push(c) : c();
      },
    },
  ),
  Ye = _l(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (Ye.mode = e),
          e === 'auto'
            ? (Ye.__media === void 0 &&
                ((Ye.__media = window.matchMedia('(prefers-color-scheme: dark)')),
                (Ye.__updateMedia = () => {
                  Ye.set('auto');
                }),
                Ye.__media.addListener(Ye.__updateMedia)),
              (e = Ye.__media.matches))
            : Ye.__media !== void 0 &&
              (Ye.__media.removeListener(Ye.__updateMedia), (Ye.__media = void 0)),
          (Ye.isActive = e === !0),
          document.body.classList.remove(`body--${e === !0 ? 'light' : 'dark'}`),
          document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`);
      },
      toggle() {
        Ye.set(Ye.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const { dark: n } = e.config;
        (e.dark = this), this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
      },
    },
  );
function uw(e, t, n = document.body) {
  if (typeof e != 'string') throw new TypeError('Expected a string as propName');
  if (typeof t != 'string') throw new TypeError('Expected a string as value');
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element');
  n.style.setProperty(`--q-${e}`, t);
}
let zg = !1;
function fw(e) {
  zg = e.isComposing === !0;
}
function dw(e) {
  return zg === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function yL(e, t) {
  return dw(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Kg(e) {
  if (e.ios === !0) return 'ios';
  if (e.android === !0) return 'android';
}
function pw({ is: e, has: t, within: n }, r) {
  const s = [e.desktop === !0 ? 'desktop' : 'mobile', `${t.touch === !1 ? 'no-' : ''}touch`];
  if (e.mobile === !0) {
    const o = Kg(e);
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
function hw() {
  const { is: e } = gn,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, ' ').split(' '));
  if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete('mobile'), n.delete('platform-ios'), n.delete('platform-android'), n.add('desktop');
    else if (e.mobile === !0) {
      n.delete('desktop'), n.add('mobile'), n.delete('platform-ios'), n.delete('platform-android');
      const s = Kg(e);
      s !== void 0 && n.add(`platform-${s}`);
    }
  }
  gn.has.touch === !0 && (n.delete('no-touch'), n.add('touch')),
    gn.within.iframe === !0 && n.add('within-iframe');
  const r = Array.from(n).join(' ');
  t !== r && (document.body.className = r);
}
function gw(e) {
  for (const t in e) uw(t, e[t]);
}
const mw = {
    install(e) {
      if (this.__installed !== !0) {
        if (Yr.value === !0) hw();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && gw(t.config.brand);
          const n = pw(gn, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        gn.is.ios === !0 && document.body.addEventListener('touchstart', Fo),
          window.addEventListener('keydown', fw, !0);
      }
    },
  },
  Gg = () => !0;
function vw(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/';
}
function _w(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substring(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substring(0, e.length - 1)),
    '#' + e
  );
}
function yw(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === '*') return Gg;
  const t = ['#/'];
  return (
    Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(vw).map(_w)),
    () => t.includes(window.location.hash)
  );
}
const bw = {
    __history: [],
    add: Fo,
    remove: Fo,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = gn.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? 'cordova' : 'capacitor'];
      if (
        r?.backButton === !1 ||
        (n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (i) => {
        i.condition === void 0 && (i.condition = Gg), this.__history.push(i);
      }),
        (this.remove = (i) => {
          const a = this.__history.indexOf(i);
          a >= 0 && this.__history.splice(a, 1);
        });
      const s = yw(Object.assign({ backButtonExit: !0 }, r)),
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
  Hf = {
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
function Wf() {
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
const er = _l(
    { __qLang: {} },
    {
      getLocale: Wf,
      set(e = Hf, t) {
        const n = { ...e, rtl: e.rtl === !0, getLocale: Wf };
        {
          if (
            ((n.set = er.set), er.__langConfig === void 0 || er.__langConfig.noHtmlAttrs !== !0)
          ) {
            const r = document.documentElement;
            r.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'), r.setAttribute('lang', n.isoName);
          }
          Object.assign(er.__qLang, n);
        }
      },
      install({ $q: e, lang: t, ssrContext: n }) {
        (e.lang = er.__qLang),
          (er.__langConfig = e.config.lang),
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
              this.set(t || Hf));
      },
    },
  ),
  ww = {
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
  Ui = _l(
    { iconMapFn: null, __qIconSet: {} },
    {
      set(e, t) {
        const n = { ...e };
        (n.set = Ui.set), Object.assign(Ui.__qIconSet, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__qIconSet),
          pu(
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
              this.set(t || ww));
      },
    },
  ),
  xw = '_q_',
  bL = '_q_l_',
  wL = '_q_pc_';
function xL() {}
const zf = {};
let Jg = !1;
function Sw() {
  Jg = !0;
}
function Kf(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0;
}
const Gf = [dc, mw, Ye, cw, bw, er, Ui];
function Jf(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function Ew(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(xw, n.$q),
    Jf(n, Gf),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        Kf(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        Kf(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      Jf(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == 'function' && Gf.includes(r) === !1,
        ),
      ),
    Yr.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
const Cw = function (e, t = {}) {
    const n = { version: '2.18.1' };
    Jg === !1
      ? (t.config !== void 0 && Object.assign(zf, t.config), (n.config = { ...zf }), Sw())
      : (n.config = t.config || {}),
      Ew(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
  },
  kw = { name: 'Quasar', version: '2.18.1', install: Cw, lang: er, iconSet: Ui },
  Pw = dl({
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const r = $b('router-view');
        return jg(), Dg(r);
      };
    },
  }),
  Rw = (e) => e,
  Ow = Rw;
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const as = typeof document < 'u';
function Yg(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function Lw(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Yg(e.default));
}
const be = Object.assign;
function da(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Yt(s) ? s.map(e) : e(s);
  }
  return n;
}
const ao = () => {},
  Yt = Array.isArray,
  Qg = /#/g,
  Aw = /&/g,
  Mw = /\//g,
  Tw = /=/g,
  Fw = /\?/g,
  Xg = /\+/g,
  $w = /%5B/g,
  jw = /%5D/g,
  Zg = /%5E/g,
  Iw = /%60/g,
  em = /%7B/g,
  Dw = /%7C/g,
  tm = /%7D/g,
  Nw = /%20/g;
function hu(e) {
  return encodeURI('' + e)
    .replace(Dw, '|')
    .replace($w, '[')
    .replace(jw, ']');
}
function Bw(e) {
  return hu(e).replace(em, '{').replace(tm, '}').replace(Zg, '^');
}
function pc(e) {
  return hu(e)
    .replace(Xg, '%2B')
    .replace(Nw, '+')
    .replace(Qg, '%23')
    .replace(Aw, '%26')
    .replace(Iw, '`')
    .replace(em, '{')
    .replace(tm, '}')
    .replace(Zg, '^');
}
function Uw(e) {
  return pc(e).replace(Tw, '%3D');
}
function qw(e) {
  return hu(e).replace(Qg, '%23').replace(Fw, '%3F');
}
function Vw(e) {
  return e == null ? '' : qw(e).replace(Mw, '%2F');
}
function $o(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const Hw = /\/$/,
  Ww = (e) => e.replace(Hw, '');
function pa(e, t, n = '/') {
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
    (r = Jw(r ?? t, n)),
    { fullPath: r + (o && '?') + o + i, path: r, query: s, hash: $o(i) }
  );
}
function zw(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function Yf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function Kw(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Ts(t.matched[r], n.matched[s]) &&
    nm(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Ts(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function nm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Gw(e[n], t[n])) return !1;
  return !0;
}
function Gw(e, t) {
  return Yt(e) ? Qf(e, t) : Yt(t) ? Qf(t, e) : e === t;
}
function Qf(e, t) {
  return Yt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Jw(e, t) {
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
const zn = {
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
var jo;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(jo || (jo = {}));
var co;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(co || (co = {}));
function Yw(e) {
  if (!e)
    if (as) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Ww(e);
}
const Qw = /^[^#]+#/;
function Xw(e, t) {
  return e.replace(Qw, '#') + t;
}
function Zw(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const yl = () => ({ left: window.scrollX, top: window.scrollY });
function ex(e) {
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
    t = Zw(s, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function Xf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const hc = new Map();
function tx(e, t) {
  hc.set(e, t);
}
function nx(e) {
  const t = hc.get(e);
  return hc.delete(e), t;
}
let rx = () => location.protocol + '//' + location.host;
function rm(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#');
  if (o > -1) {
    let i = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      a = s.slice(i);
    return a[0] !== '/' && (a = '/' + a), Yf(a, '');
  }
  return Yf(n, e) + r + s;
}
function sx(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: p }) => {
    const m = rm(e, location),
      x = n.value,
      P = t.value;
    let N = 0;
    if (p) {
      if (((n.value = m), (t.value = p), i && i === x)) {
        i = null;
        return;
      }
      N = P ? p.position - P.position : 0;
    } else r(m);
    s.forEach((I) => {
      I(n.value, x, {
        delta: N,
        type: jo.pop,
        direction: N ? (N > 0 ? co.forward : co.back) : co.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(p) {
    s.push(p);
    const m = () => {
      const x = s.indexOf(p);
      x > -1 && s.splice(x, 1);
    };
    return o.push(m), m;
  }
  function c() {
    const { history: p } = window;
    p.state && p.replaceState(be({}, p.state, { scroll: yl() }), '');
  }
  function u() {
    for (const p of o) p();
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
function Zf(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? yl() : null,
  };
}
function ox(e) {
  const { history: t, location: n } = window,
    r = { value: rm(e, n) },
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
      p = u > -1 ? (n.host && document.querySelector('base') ? e : e.slice(u)) + l : rx() + e + l;
    try {
      t[c ? 'replaceState' : 'pushState'](f, '', p), (s.value = f);
    } catch (m) {
      console.error(m), n[c ? 'replace' : 'assign'](p);
    }
  }
  function i(l, f) {
    const c = be({}, t.state, Zf(s.value.back, l, s.value.forward, !0), f, {
      position: s.value.position,
    });
    o(l, c, !0), (r.value = l);
  }
  function a(l, f) {
    const c = be({}, s.value, t.state, { forward: l, scroll: yl() });
    o(c.current, c, !0);
    const u = be({}, Zf(r.value, l, null), { position: c.position + 1 }, f);
    o(l, u, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: i };
}
function ix(e) {
  e = Yw(e);
  const t = ox(e),
    n = sx(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = be({ location: '', base: e, go: r, createHref: Xw.bind(null, e) }, t, n);
  return (
    Object.defineProperty(s, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, 'state', { enumerable: !0, get: () => t.state.value }),
    s
  );
}
function lx(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    ix(e)
  );
}
function ax(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function sm(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const om = Symbol('');
var ed;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(ed || (ed = {}));
function Fs(e, t) {
  return be(new Error(), { type: e, [om]: !0 }, t);
}
function xn(e, t) {
  return e instanceof Error && om in e && (t == null || !!(e.type & t));
}
const td = '[^/]+?',
  cx = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ux = /[.+*?^${}()[\]/\\]/g;
function fx(e, t) {
  const n = be({}, cx, t),
    r = [];
  let s = n.start ? '^' : '';
  const o = [];
  for (const f of e) {
    const c = f.length ? [] : [90];
    n.strict && !f.length && (s += '/');
    for (let u = 0; u < f.length; u++) {
      const p = f[u];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0) u || (s += '/'), (s += p.value.replace(ux, '\\$&')), (m += 40);
      else if (p.type === 1) {
        const { value: x, repeatable: P, optional: N, regexp: I } = p;
        o.push({ name: x, repeatable: P, optional: N });
        const T = I || td;
        if (T !== td) {
          m += 10;
          try {
            new RegExp(`(${T})`);
          } catch (L) {
            throw new Error(`Invalid custom RegExp for param "${x}" (${T}): ` + L.message);
          }
        }
        let j = P ? `((?:${T})(?:/(?:${T}))*)` : `(${T})`;
        u || (j = N && f.length < 2 ? `(?:/${j})` : '/' + j),
          N && (j += '?'),
          (s += j),
          (m += 20),
          N && (m += -8),
          P && (m += -20),
          T === '.*' && (m += -50);
      }
      c.push(m);
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
    for (let p = 1; p < c.length; p++) {
      const m = c[p] || '',
        x = o[p - 1];
      u[x.name] = m && x.repeatable ? m.split('/') : m;
    }
    return u;
  }
  function l(f) {
    let c = '',
      u = !1;
    for (const p of e) {
      (!u || !c.endsWith('/')) && (c += '/'), (u = !1);
      for (const m of p)
        if (m.type === 0) c += m.value;
        else if (m.type === 1) {
          const { value: x, repeatable: P, optional: N } = m,
            I = x in f ? f[x] : '';
          if (Yt(I) && !P)
            throw new Error(
              `Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const T = Yt(I) ? I.join('/') : I;
          if (!T)
            if (N) p.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (u = !0));
            else throw new Error(`Missing required param "${x}"`);
          c += T;
        }
    }
    return c || '/';
  }
  return { re: i, score: r, keys: o, parse: a, stringify: l };
}
function dx(e, t) {
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
function im(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = dx(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (nd(r)) return 1;
    if (nd(s)) return -1;
  }
  return s.length - r.length;
}
function nd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const px = { type: 0, value: '' },
  hx = /[a-zA-Z0-9_]/;
function gx(e) {
  if (!e) return [[]];
  if (e === '/') return [[px]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${f}": ${m}`);
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
  function p() {
    f += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === '/' ? (f && u(), i()) : l === ':' ? (u(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = r);
        break;
      case 1:
        l === '('
          ? (n = 2)
          : hx.test(l)
            ? p()
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
function mx(e, t, n) {
  const r = fx(gx(e.path), n),
    s = be(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function vx(e, t) {
  const n = [],
    r = new Map();
  t = id({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(u) {
    return r.get(u);
  }
  function o(u, p, m) {
    const x = !m,
      P = sd(u);
    P.aliasOf = m && m.record;
    const N = id(t, u),
      I = [P];
    if ('alias' in u) {
      const L = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const q of L)
        I.push(
          sd(
            be({}, P, {
              components: m ? m.record.components : P.components,
              path: q,
              aliasOf: m ? m.record : P,
            }),
          ),
        );
    }
    let T, j;
    for (const L of I) {
      const { path: q } = L;
      if (p && q[0] !== '/') {
        const J = p.record.path,
          K = J[J.length - 1] === '/' ? '' : '/';
        L.path = p.record.path + (q && K + q);
      }
      if (
        ((T = mx(L, p, N)),
        m
          ? m.alias.push(T)
          : ((j = j || T), j !== T && j.alias.push(T), x && u.name && !od(T) && i(u.name)),
        lm(T) && l(T),
        P.children)
      ) {
        const J = P.children;
        for (let K = 0; K < J.length; K++) o(J[K], T, m && m.children[K]);
      }
      m = m || T;
    }
    return j
      ? () => {
          i(j);
        }
      : ao;
  }
  function i(u) {
    if (sm(u)) {
      const p = r.get(u);
      p && (r.delete(u), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i));
    } else {
      const p = n.indexOf(u);
      p > -1 &&
        (n.splice(p, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    const p = bx(u, n);
    n.splice(p, 0, u), u.record.name && !od(u) && r.set(u.record.name, u);
  }
  function f(u, p) {
    let m,
      x = {},
      P,
      N;
    if ('name' in u && u.name) {
      if (((m = r.get(u.name)), !m)) throw Fs(1, { location: u });
      (N = m.record.name),
        (x = be(
          rd(
            p.params,
            m.keys
              .filter((j) => !j.optional)
              .concat(m.parent ? m.parent.keys.filter((j) => j.optional) : [])
              .map((j) => j.name),
          ),
          u.params &&
            rd(
              u.params,
              m.keys.map((j) => j.name),
            ),
        )),
        (P = m.stringify(x));
    } else if (u.path != null)
      (P = u.path), (m = n.find((j) => j.re.test(P))), m && ((x = m.parse(P)), (N = m.record.name));
    else {
      if (((m = p.name ? r.get(p.name) : n.find((j) => j.re.test(p.path))), !m))
        throw Fs(1, { location: u, currentLocation: p });
      (N = m.record.name), (x = be({}, p.params, u.params)), (P = m.stringify(x));
    }
    const I = [];
    let T = m;
    for (; T; ) I.unshift(T.record), (T = T.parent);
    return { name: N, path: P, params: x, matched: I, meta: yx(I) };
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
function rd(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function sd(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: _x(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
  return Object.defineProperty(t, 'mods', { value: {} }), t;
}
function _x(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n;
  return t;
}
function od(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function yx(e) {
  return e.reduce((t, n) => be(t, n.meta), {});
}
function id(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function bx(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const o = (n + r) >> 1;
    im(e, t[o]) < 0 ? (r = o) : (n = o + 1);
  }
  const s = wx(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function wx(e) {
  let t = e;
  for (; (t = t.parent); ) if (lm(t) && im(e, t) === 0) return t;
}
function lm({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function xx(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const n = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(Xg, ' '),
      o = s.indexOf('='),
      i = $o(o < 0 ? s : s.slice(0, o)),
      a = o < 0 ? null : $o(s.slice(o + 1));
    if (i in t) {
      let l = t[i];
      Yt(l) || (l = t[i] = [l]), l.push(a);
    } else t[i] = a;
  }
  return t;
}
function ld(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = Uw(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (Yt(r) ? r.map((s) => s && pc(s)) : [r && pc(r)]).forEach((s) => {
      s !== void 0 && ((t += (t.length ? '&' : '') + n), s != null && (t += '=' + s));
    });
  }
  return t;
}
function Sx(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Yt(r) ? r.map((s) => (s == null ? null : '' + s)) : r == null ? r : '' + r);
  }
  return t;
}
const Ex = Symbol(''),
  ad = Symbol(''),
  gu = Symbol(''),
  am = Symbol(''),
  gc = Symbol('');
function zs() {
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
function tr(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const f = (p) => {
          p === !1
            ? l(Fs(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : ax(p)
                ? l(Fs(2, { from: t, to: p }))
                : (i && r.enterCallbacks[s] === i && typeof p == 'function' && i.push(p), a());
        },
        c = o(() => e.call(r && r.instances[s], t, n, f));
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(f)), u.catch((p) => l(p));
    });
}
function ha(e, t, n, r, s = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
        if (Yg(l)) {
          const f = (l.__vccOpts || l)[t];
          f && o.push(tr(f, n, r, i, a, s));
        } else {
          let f = l();
          o.push(() =>
            f.then((c) => {
              if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
              const u = Lw(c) ? c.default : c;
              (i.mods[a] = c), (i.components[a] = u);
              const p = (u.__vccOpts || u)[t];
              return p && tr(p, n, r, i, a, s)();
            }),
          );
        }
    }
  return o;
}
function cd(e) {
  const t = Nn(gu),
    n = Nn(am),
    r = Vt(() => {
      const l = vs(e.to);
      return t.resolve(l);
    }),
    s = Vt(() => {
      const { matched: l } = r.value,
        { length: f } = l,
        c = l[f - 1],
        u = n.matched;
      if (!c || !u.length) return -1;
      const p = u.findIndex(Ts.bind(null, c));
      if (p > -1) return p;
      const m = ud(l[f - 2]);
      return f > 1 && ud(c) === m && u[u.length - 1].path !== m
        ? u.findIndex(Ts.bind(null, l[f - 2]))
        : p;
    }),
    o = Vt(() => s.value > -1 && Ox(n.params, r.value.params)),
    i = Vt(() => s.value > -1 && s.value === n.matched.length - 1 && nm(n.params, r.value.params));
  function a(l = {}) {
    if (Rx(l)) {
      const f = t[vs(e.replace) ? 'replace' : 'push'](vs(e.to)).catch(ao);
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
  return { route: r, href: Vt(() => r.value.href), isActive: o, isExactActive: i, navigate: a };
}
function Cx(e) {
  return e.length === 1 ? e[0] : e;
}
const kx = dl({
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
    useLink: cd,
    setup(e, { slots: t }) {
      const n = Us(cd(e)),
        { options: r } = Nn(gu),
        s = Vt(() => ({
          [fd(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [fd(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }));
      return () => {
        const o = t.default && Cx(t.default(n));
        return e.custom
          ? o
          : du(
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
  Px = kx;
function Rx(e) {
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
function Ox(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == 'string') {
      if (r !== s) return !1;
    } else if (!Yt(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1;
  }
  return !0;
}
function ud(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const fd = (e, t, n) => e ?? t ?? n,
  Lx = dl({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Nn(gc),
        s = Vt(() => e.route || r.value),
        o = Nn(ad, 0),
        i = Vt(() => {
          let f = vs(o);
          const { matched: c } = s.value;
          let u;
          for (; (u = c[f]) && !u.components; ) f++;
          return f;
        }),
        a = Vt(() => s.value.matched[i.value]);
      xi(
        ad,
        Vt(() => i.value + 1),
      ),
        xi(Ex, a),
        xi(gc, s);
      const l = Xh();
      return (
        Si(
          () => [l.value, a.value, e.name],
          ([f, c, u], [p, m, x]) => {
            c &&
              ((c.instances[u] = f),
              m &&
                m !== c &&
                f &&
                f === p &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              f && c && (!m || !Ts(c, m) || !p) && (c.enterCallbacks[u] || []).forEach((P) => P(f));
          },
          { flush: 'post' },
        ),
        () => {
          const f = s.value,
            c = e.name,
            u = a.value,
            p = u && u.components[c];
          if (!p) return dd(n.default, { Component: p, route: f });
          const m = u.props[c],
            x = m ? (m === !0 ? f.params : typeof m == 'function' ? m(f) : m) : null,
            P = du(
              p,
              be({}, x, t, {
                onVnodeUnmounted: (N) => {
                  N.component.isUnmounted && (u.instances[c] = null);
                },
                ref: l,
              }),
            );
          return dd(n.default, { Component: P, route: f }) || P;
        }
      );
    },
  });
function dd(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Ax = Lx;
function Mx(e) {
  const t = vx(e.routes, e),
    n = e.parseQuery || xx,
    r = e.stringifyQuery || ld,
    s = e.history,
    o = zs(),
    i = zs(),
    a = zs(),
    l = cb(zn);
  let f = zn;
  as &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = da.bind(null, (y) => '' + y),
    u = da.bind(null, Vw),
    p = da.bind(null, $o);
  function m(y, O) {
    let k, $;
    return sm(y) ? ((k = t.getRecordMatcher(y)), ($ = O)) : ($ = y), t.addRoute($, k);
  }
  function x(y) {
    const O = t.getRecordMatcher(y);
    O && t.removeRoute(O);
  }
  function P() {
    return t.getRoutes().map((y) => y.record);
  }
  function N(y) {
    return !!t.getRecordMatcher(y);
  }
  function I(y, O) {
    if (((O = be({}, O || l.value)), typeof y == 'string')) {
      const v = pa(n, y, O.path),
        _ = t.resolve({ path: v.path }, O),
        b = s.createHref(v.fullPath);
      return be(v, _, { params: p(_.params), hash: $o(v.hash), redirectedFrom: void 0, href: b });
    }
    let k;
    if (y.path != null) k = be({}, y, { path: pa(n, y.path, O.path).path });
    else {
      const v = be({}, y.params);
      for (const _ in v) v[_] == null && delete v[_];
      (k = be({}, y, { params: u(v) })), (O.params = u(O.params));
    }
    const $ = t.resolve(k, O),
      g = y.hash || '';
    $.params = c(p($.params));
    const d = zw(r, be({}, y, { hash: Bw(g), path: $.path })),
      h = s.createHref(d);
    return be({ fullPath: d, hash: g, query: r === ld ? Sx(y.query) : y.query || {} }, $, {
      redirectedFrom: void 0,
      href: h,
    });
  }
  function T(y) {
    return typeof y == 'string' ? pa(n, y, l.value.path) : be({}, y);
  }
  function j(y, O) {
    if (f !== y) return Fs(8, { from: O, to: y });
  }
  function L(y) {
    return K(y);
  }
  function q(y) {
    return L(be(T(y), { replace: !0 }));
  }
  function J(y) {
    const O = y.matched[y.matched.length - 1];
    if (O && O.redirect) {
      const { redirect: k } = O;
      let $ = typeof k == 'function' ? k(y) : k;
      return (
        typeof $ == 'string' &&
          (($ = $.includes('?') || $.includes('#') ? ($ = T($)) : { path: $ }), ($.params = {})),
        be({ query: y.query, hash: y.hash, params: $.path != null ? {} : y.params }, $)
      );
    }
  }
  function K(y, O) {
    const k = (f = I(y)),
      $ = l.value,
      g = y.state,
      d = y.force,
      h = y.replace === !0,
      v = J(k);
    if (v)
      return K(
        be(T(v), { state: typeof v == 'object' ? be({}, g, v.state) : g, force: d, replace: h }),
        O || k,
      );
    const _ = k;
    _.redirectedFrom = O;
    let b;
    return (
      !d && Kw(r, $, k) && ((b = Fs(16, { to: _, from: $ })), _e($, $, !0, !1)),
      (b ? Promise.resolve(b) : V(_, $))
        .catch((w) => (xn(w) ? (xn(w, 2) ? w : ke(w)) : Z(w, _, $)))
        .then((w) => {
          if (w) {
            if (xn(w, 2))
              return K(
                be({ replace: h }, T(w.to), {
                  state: typeof w.to == 'object' ? be({}, g, w.to.state) : g,
                  force: d,
                }),
                O || _,
              );
          } else w = A(_, $, !0, h, g);
          return Y(_, $, w), w;
        })
    );
  }
  function ne(y, O) {
    const k = j(y, O);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function B(y) {
    const O = qe.values().next().value;
    return O && typeof O.runWithContext == 'function' ? O.runWithContext(y) : y();
  }
  function V(y, O) {
    let k;
    const [$, g, d] = Tx(y, O);
    k = ha($.reverse(), 'beforeRouteLeave', y, O);
    for (const v of $)
      v.leaveGuards.forEach((_) => {
        k.push(tr(_, y, O));
      });
    const h = ne.bind(null, y, O);
    return (
      k.push(h),
      fe(k)
        .then(() => {
          k = [];
          for (const v of o.list()) k.push(tr(v, y, O));
          return k.push(h), fe(k);
        })
        .then(() => {
          k = ha(g, 'beforeRouteUpdate', y, O);
          for (const v of g)
            v.updateGuards.forEach((_) => {
              k.push(tr(_, y, O));
            });
          return k.push(h), fe(k);
        })
        .then(() => {
          k = [];
          for (const v of d)
            if (v.beforeEnter)
              if (Yt(v.beforeEnter)) for (const _ of v.beforeEnter) k.push(tr(_, y, O));
              else k.push(tr(v.beforeEnter, y, O));
          return k.push(h), fe(k);
        })
        .then(
          () => (
            y.matched.forEach((v) => (v.enterCallbacks = {})),
            (k = ha(d, 'beforeRouteEnter', y, O, B)),
            k.push(h),
            fe(k)
          ),
        )
        .then(() => {
          k = [];
          for (const v of i.list()) k.push(tr(v, y, O));
          return k.push(h), fe(k);
        })
        .catch((v) => (xn(v, 8) ? v : Promise.reject(v)))
    );
  }
  function Y(y, O, k) {
    a.list().forEach(($) => B(() => $(y, O, k)));
  }
  function A(y, O, k, $, g) {
    const d = j(y, O);
    if (d) return d;
    const h = O === zn,
      v = as ? history.state : {};
    k &&
      ($ || h
        ? s.replace(y.fullPath, be({ scroll: h && v && v.scroll }, g))
        : s.push(y.fullPath, g)),
      (l.value = y),
      _e(y, O, k, h),
      ke();
  }
  let H;
  function te() {
    H ||
      (H = s.listen((y, O, k) => {
        if (!ht.listening) return;
        const $ = I(y),
          g = J($);
        if (g) {
          K(be(g, { replace: !0, force: !0 }), $).catch(ao);
          return;
        }
        f = $;
        const d = l.value;
        as && tx(Xf(d.fullPath, k.delta), yl()),
          V($, d)
            .catch((h) =>
              xn(h, 12)
                ? h
                : xn(h, 2)
                  ? (K(be(T(h.to), { force: !0 }), $)
                      .then((v) => {
                        xn(v, 20) && !k.delta && k.type === jo.pop && s.go(-1, !1);
                      })
                      .catch(ao),
                    Promise.reject())
                  : (k.delta && s.go(-k.delta, !1), Z(h, $, d)),
            )
            .then((h) => {
              (h = h || A($, d, !1)),
                h &&
                  (k.delta && !xn(h, 8)
                    ? s.go(-k.delta, !1)
                    : k.type === jo.pop && xn(h, 20) && s.go(-1, !1)),
                Y($, d, h);
            })
            .catch(ao);
      }));
  }
  let X = zs(),
    Q = zs(),
    W;
  function Z(y, O, k) {
    ke(y);
    const $ = Q.list();
    return $.length ? $.forEach((g) => g(y, O, k)) : console.error(y), Promise.reject(y);
  }
  function Ie() {
    return W && l.value !== zn
      ? Promise.resolve()
      : new Promise((y, O) => {
          X.add([y, O]);
        });
  }
  function ke(y) {
    return W || ((W = !y), te(), X.list().forEach(([O, k]) => (y ? k(y) : O())), X.reset()), y;
  }
  function _e(y, O, k, $) {
    const { scrollBehavior: g } = e;
    if (!as || !g) return Promise.resolve();
    const d =
      (!k && nx(Xf(y.fullPath, 0))) || (($ || !k) && history.state && history.state.scroll) || null;
    return ng()
      .then(() => g(y, O, d))
      .then((h) => h && ex(h))
      .catch((h) => Z(h, y, O));
  }
  const ue = (y) => s.go(y);
  let Ue;
  const qe = new Set(),
    ht = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: x,
      clearRoutes: t.clearRoutes,
      hasRoute: N,
      getRoutes: P,
      resolve: I,
      options: e,
      push: L,
      replace: q,
      go: ue,
      back: () => ue(-1),
      forward: () => ue(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: Q.add,
      isReady: Ie,
      install(y) {
        const O = this;
        y.component('RouterLink', Px),
          y.component('RouterView', Ax),
          (y.config.globalProperties.$router = O),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => vs(l),
          }),
          as && !Ue && l.value === zn && ((Ue = !0), L(s.location).catch((g) => {}));
        const k = {};
        for (const g in zn) Object.defineProperty(k, g, { get: () => l.value[g], enumerable: !0 });
        y.provide(gu, O), y.provide(am, Yh(k)), y.provide(gc, l);
        const $ = y.unmount;
        qe.add(y),
          (y.unmount = function () {
            qe.delete(y),
              qe.size < 1 && ((f = zn), H && H(), (H = null), (l.value = zn), (Ue = !1), (W = !1)),
              $();
          });
      },
    };
  function fe(y) {
    return y.reduce((O, k) => O.then(() => B(k)), Promise.resolve());
  }
  return ht;
}
function Tx(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => Ts(f, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((f) => Ts(f, l)) || s.push(l));
  }
  return [n, r, s];
}
const Fx = (function () {
    const e = typeof document < 'u' && document.createElement('link').relList;
    return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
  })(),
  $x = function (e) {
    return '/' + e;
  },
  pd = {},
  ga = function (e, t, n) {
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
          if (((l = $x(l)), l in pd)) return;
          pd[l] = !0;
          const f = l.endsWith('.css'),
            c = f ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const u = document.createElement('link');
          if (
            ((u.rel = f ? 'stylesheet' : Fx),
            f || (u.as = 'script'),
            (u.crossOrigin = ''),
            (u.href = l),
            a && u.setAttribute('nonce', a),
            document.head.appendChild(u),
            f)
          )
            return new Promise((p, m) => {
              u.addEventListener('load', p),
                u.addEventListener('error', () => m(new Error(`Unable to preload CSS for ${l}`)));
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
  jx = [
    {
      path: '/',
      component: () =>
        ga(
          () =>
            ps(
              () =>
                Dn(
                  () => import('./MainLayout-By9sxngu-EiepPFdg-CuNJA3Zf.js'),
                  __vite__mapDeps([0, 1, 2]),
                ),
              Wr([0, 1, 2]),
            ),
          wi([0, 1, 2]),
        ),
      children: [
        {
          path: '',
          component: () =>
            ga(
              () =>
                ps(
                  () =>
                    Dn(
                      () => import('./IndexPage-pdtjnnYV-DsEXDLUz-D7Ya8psE.js'),
                      __vite__mapDeps([3, 2]),
                    ),
                  Wr([3, 2]),
                ),
              wi([3, 2, 4]),
            ),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () =>
        ga(
          () =>
            ps(
              () =>
                Dn(
                  () => import('./ErrorNotFound-DRUjJDV3-x8WKzFY2-C7vd6Al7.js'),
                  __vite__mapDeps([4, 1, 2]),
                ),
              Wr([4, 1, 2]),
            ),
          wi([5, 1, 2]),
        ),
    },
  ],
  ma = Ow(function () {
    return Mx({ scrollBehavior: () => ({ left: 0, top: 0 }), routes: jx, history: lx('/') });
  });
async function Ix(e, t) {
  const n = e(Pw);
  n.use(kw, t);
  const r = ul(typeof ma == 'function' ? await ma({}) : ma);
  return { app: n, router: r };
}
const Dx = { config: {} };
async function Nx({ app: e, router: t }) {
  e.use(t), e.mount('#q-app');
}
Ix(tw, Dx).then(Nx);
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function mu(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const Re = {},
  bs = [],
  mn = () => {},
  Bx = () => !1,
  bl = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  vu = (e) => e.startsWith('onUpdate:'),
  He = Object.assign,
  _u = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ux = Object.prototype.hasOwnProperty,
  Ee = (e, t) => Ux.call(e, t),
  se = Array.isArray,
  ws = (e) => wl(e) === '[object Map]',
  cm = (e) => wl(e) === '[object Set]',
  le = (e) => typeof e == 'function',
  Ne = (e) => typeof e == 'string',
  wr = (e) => typeof e == 'symbol',
  Fe = (e) => e !== null && typeof e == 'object',
  um = (e) => (Fe(e) || le(e)) && le(e.then) && le(e.catch),
  fm = Object.prototype.toString,
  wl = (e) => fm.call(e),
  qx = (e) => wl(e).slice(8, -1),
  dm = (e) => wl(e) === '[object Object]',
  yu = (e) => Ne(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  uo = mu(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  xl = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Vx = /-(\w)/g,
  Bt = xl((e) => e.replace(Vx, (t, n) => (n ? n.toUpperCase() : ''))),
  Hx = /\B([A-Z])/g,
  ns = xl((e) => e.replace(Hx, '-$1').toLowerCase()),
  Sl = xl((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  va = xl((e) => (e ? `on${Sl(e)}` : '')),
  pr = (e, t) => !Object.is(e, t),
  _a = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  pm = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n });
  },
  Wx = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  zx = (e) => {
    const t = Ne(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let hd;
const El = () =>
  hd ||
  (hd =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function bu(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Ne(r) ? Yx(r) : bu(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (Ne(e) || Fe(e)) return e;
}
const Kx = /;(?![^(]*\))/g,
  Gx = /:([^]+)/,
  Jx = /\/\*[^]*?\*\//g;
function Yx(e) {
  const t = {};
  return (
    e
      .replace(Jx, '')
      .split(Kx)
      .forEach((n) => {
        if (n) {
          const r = n.split(Gx);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function wu(e) {
  let t = '';
  if (Ne(e)) t = e;
  else if (se(e))
    for (let n = 0; n < e.length; n++) {
      const r = wu(e[n]);
      r && (t += r + ' ');
    }
  else if (Fe(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const Qx = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Xx = mu(Qx);
function hm(e) {
  return !!e || e === '';
}
const gm = (e) => !!(e && e.__v_isRef === !0),
  Zx = (e) =>
    Ne(e)
      ? e
      : e == null
        ? ''
        : se(e) || (Fe(e) && (e.toString === fm || !le(e.toString)))
          ? gm(e)
            ? Zx(e.value)
            : JSON.stringify(e, mm, 2)
          : String(e),
  mm = (e, t) =>
    gm(t)
      ? mm(e, t.value)
      : ws(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], o) => ((n[ya(r, o) + ' =>'] = s), n),
              {},
            ),
          }
        : cm(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ya(n)) }
          : wr(t)
            ? ya(t)
            : Fe(t) && !se(t) && !dm(t)
              ? String(t)
              : t,
  ya = (e, t = '') => {
    var n;
    return wr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ct;
class eS {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ct),
      !t && Ct && (this.index = (Ct.scopes || (Ct.scopes = [])).push(this) - 1);
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
      const n = Ct;
      try {
        return (Ct = this), t();
      } finally {
        Ct = n;
      }
    }
  }
  on() {
    Ct = this;
  }
  off() {
    Ct = this.parent;
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
function tS() {
  return Ct;
}
let Ae;
const ba = new WeakSet();
class vm {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ct && Ct.active && Ct.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), ba.has(this) && (ba.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ym(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), gd(this), bm(this);
    const t = Ae,
      n = Kt;
    (Ae = this), (Kt = !0);
    try {
      return this.fn();
    } finally {
      wm(this), (Ae = t), (Kt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Eu(t);
      (this.deps = this.depsTail = void 0),
        gd(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64 ? ba.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    mc(this) && this.run();
  }
  get dirty() {
    return mc(this);
  }
}
let _m = 0,
  fo,
  po;
function ym(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = po), (po = e);
    return;
  }
  (e.next = fo), (fo = e);
}
function xu() {
  _m++;
}
function Su() {
  if (--_m > 0) return;
  if (po) {
    let t = po;
    for (po = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; fo; ) {
    let t = fo;
    for (fo = void 0; t; ) {
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
function bm(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t);
}
function wm(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Eu(r), nS(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function mc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (xm(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function xm(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Io)) return;
  e.globalVersion = Io;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !mc(e))) {
    e.flags &= -3;
    return;
  }
  const n = Ae,
    r = Kt;
  (Ae = e), (Kt = !0);
  try {
    bm(e);
    const s = e.fn(e._value);
    (t.version === 0 || pr(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (Ae = n), (Kt = r), wm(e), (e.flags &= -3);
  }
}
function Eu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Eu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function nS(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Kt = !0;
const Sm = [];
function xr() {
  Sm.push(Kt), (Kt = !1);
}
function Sr() {
  const e = Sm.pop();
  Kt = e === void 0 ? !0 : e;
}
function gd(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Ae;
    Ae = void 0;
    try {
      t();
    } finally {
      Ae = n;
    }
  }
}
let Io = 0;
class rS {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
  }
}
class Cu {
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
    if (!Ae || !Kt || Ae === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ae)
      (n = this.activeLink = new rS(Ae, this)),
        Ae.deps
          ? ((n.prevDep = Ae.depsTail), (Ae.depsTail.nextDep = n), (Ae.depsTail = n))
          : (Ae.deps = Ae.depsTail = n),
        Em(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Ae.depsTail),
        (n.nextDep = void 0),
        (Ae.depsTail.nextDep = n),
        (Ae.depsTail = n),
        Ae.deps === n && (Ae.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Io++, this.notify(t);
  }
  notify(t) {
    xu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Su();
    }
  }
}
function Em(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Em(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const vc = new WeakMap(),
  Kr = Symbol(''),
  _c = Symbol(''),
  Do = Symbol('');
function tt(e, t, n) {
  if (Kt && Ae) {
    let r = vc.get(e);
    r || vc.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new Cu())), (s.map = r), (s.key = n)), s.track();
  }
}
function Fn(e, t, n, r, s, o) {
  const i = vc.get(e);
  if (!i) {
    Io++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((xu(), t === 'clear')) i.forEach(a);
  else {
    const l = se(e),
      f = l && yu(n);
    if (l && n === 'length') {
      const c = Number(r);
      i.forEach((u, p) => {
        (p === 'length' || p === Do || (!wr(p) && p >= c)) && a(u);
      });
    } else
      switch (((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Do)), t)) {
        case 'add':
          l ? f && a(i.get('length')) : (a(i.get(Kr)), ws(e) && a(i.get(_c)));
          break;
        case 'delete':
          l || (a(i.get(Kr)), ws(e) && a(i.get(_c)));
          break;
        case 'set':
          ws(e) && a(i.get(Kr));
          break;
      }
  }
  Su();
}
function os(e) {
  const t = me(e);
  return t === e ? t : (tt(t, 'iterate', Do), It(e) ? t : t.map(nt));
}
function Cl(e) {
  return tt((e = me(e)), 'iterate', Do), e;
}
const sS = {
  __proto__: null,
  [Symbol.iterator]() {
    return wa(this, Symbol.iterator, nt);
  },
  concat(...e) {
    return os(this).concat(...e.map((t) => (se(t) ? os(t) : t)));
  },
  entries() {
    return wa(this, 'entries', (e) => ((e[1] = nt(e[1])), e));
  },
  every(e, t) {
    return Sn(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return Sn(this, 'filter', e, t, (n) => n.map(nt), arguments);
  },
  find(e, t) {
    return Sn(this, 'find', e, t, nt, arguments);
  },
  findIndex(e, t) {
    return Sn(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Sn(this, 'findLast', e, t, nt, arguments);
  },
  findLastIndex(e, t) {
    return Sn(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Sn(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return xa(this, 'includes', e);
  },
  indexOf(...e) {
    return xa(this, 'indexOf', e);
  },
  join(e) {
    return os(this).join(e);
  },
  lastIndexOf(...e) {
    return xa(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return Sn(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return Ks(this, 'pop');
  },
  push(...e) {
    return Ks(this, 'push', e);
  },
  reduce(e, ...t) {
    return md(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return md(this, 'reduceRight', e, t);
  },
  shift() {
    return Ks(this, 'shift');
  },
  some(e, t) {
    return Sn(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return Ks(this, 'splice', e);
  },
  toReversed() {
    return os(this).toReversed();
  },
  toSorted(e) {
    return os(this).toSorted(e);
  },
  toSpliced(...e) {
    return os(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ks(this, 'unshift', e);
  },
  values() {
    return wa(this, 'values', nt);
  },
};
function wa(e, t, n) {
  const r = Cl(e),
    s = r[t]();
  return (
    r !== e &&
      !It(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const oS = Array.prototype;
function Sn(e, t, n, r, s, o) {
  const i = Cl(e),
    a = i !== e && !It(e),
    l = i[t];
  if (l !== oS[t]) {
    const u = l.apply(e, o);
    return a ? nt(u) : u;
  }
  let f = n;
  i !== e &&
    (a
      ? (f = function (u, p) {
          return n.call(this, nt(u), p, e);
        })
      : n.length > 2 &&
        (f = function (u, p) {
          return n.call(this, u, p, e);
        }));
  const c = l.call(i, f, r);
  return a && s ? s(c) : c;
}
function md(e, t, n, r) {
  const s = Cl(e);
  let o = n;
  return (
    s !== e &&
      (It(e)
        ? n.length > 3 &&
          (o = function (i, a, l) {
            return n.call(this, i, a, l, e);
          })
        : (o = function (i, a, l) {
            return n.call(this, i, nt(a), l, e);
          })),
    s[t](o, ...r)
  );
}
function xa(e, t, n) {
  const r = me(e);
  tt(r, 'iterate', Do);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Ru(n[0]) ? ((n[0] = me(n[0])), r[t](...n)) : s;
}
function Ks(e, t, n = []) {
  xr(), xu();
  const r = me(e)[t].apply(e, n);
  return Su(), Sr(), r;
}
const iS = mu('__proto__,__v_isRef,__isVue'),
  Cm = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(wr),
  );
function lS(e) {
  wr(e) || (e = String(e));
  const t = me(this);
  return tt(t, 'has', e), t.hasOwnProperty(e);
}
class km {
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
      return r === (s ? (o ? vS : Lm) : o ? Om : Rm).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = se(t);
    if (!s) {
      let l;
      if (i && (l = sS[n])) return l;
      if (n === 'hasOwnProperty') return lS;
    }
    const a = Reflect.get(t, n, it(t) ? t : r);
    return (wr(n) ? Cm.has(n) : iS(n)) || (s || tt(t, 'get', n), o)
      ? a
      : it(a)
        ? i && yu(n)
          ? a
          : a.value
        : Fe(a)
          ? s
            ? Mm(a)
            : qs(a)
          : a;
  }
}
class Pm extends km {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Qr(o);
      if ((!It(r) && !Qr(r) && ((o = me(o)), (r = me(r))), !se(t) && it(o) && !it(r)))
        return l ? !1 : ((o.value = r), !0);
    }
    const i = se(t) && yu(n) ? Number(n) < t.length : Ee(t, n),
      a = Reflect.set(t, n, r, it(t) ? t : s);
    return t === me(s) && (i ? pr(r, o) && Fn(t, 'set', n, r) : Fn(t, 'add', n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Ee(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Fn(t, 'delete', n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!wr(n) || !Cm.has(n)) && tt(t, 'has', n), r;
  }
  ownKeys(t) {
    return tt(t, 'iterate', se(t) ? 'length' : Kr), Reflect.ownKeys(t);
  }
}
class aS extends km {
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
const cS = new Pm(),
  uS = new aS(),
  fS = new Pm(!0),
  yc = (e) => e,
  pi = (e) => Reflect.getPrototypeOf(e);
function dS(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = me(s),
      i = ws(o),
      a = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      f = s[e](...r),
      c = n ? yc : t ? bc : nt;
    return (
      !t && tt(o, 'iterate', l ? _c : Kr),
      {
        next() {
          const { value: u, done: p } = f.next();
          return p ? { value: u, done: p } : { value: a ? [c(u[0]), c(u[1])] : c(u), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function hi(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function pS(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw,
        o = me(s),
        i = me(r);
      e || (pr(r, i) && tt(o, 'get', r), tt(o, 'get', i));
      const { has: a } = pi(o),
        l = t ? yc : e ? bc : nt;
      if (a.call(o, r)) return l(s.get(r));
      if (a.call(o, i)) return l(s.get(i));
      s !== o && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && tt(me(r), 'iterate', Kr), Reflect.get(r, 'size', r);
    },
    has(r) {
      const s = this.__v_raw,
        o = me(s),
        i = me(r);
      return (
        e || (pr(r, i) && tt(o, 'has', r), tt(o, 'has', i)),
        r === i ? s.has(r) : s.has(r) || s.has(i)
      );
    },
    forEach(r, s) {
      const o = this,
        i = o.__v_raw,
        a = me(i),
        l = t ? yc : e ? bc : nt;
      return !e && tt(a, 'iterate', Kr), i.forEach((f, c) => r.call(s, l(f), l(c), o));
    },
  };
  return (
    He(
      n,
      e
        ? { add: hi('add'), set: hi('set'), delete: hi('delete'), clear: hi('clear') }
        : {
            add(r) {
              !t && !It(r) && !Qr(r) && (r = me(r));
              const s = me(this);
              return pi(s).has.call(s, r) || (s.add(r), Fn(s, 'add', r, r)), this;
            },
            set(r, s) {
              !t && !It(s) && !Qr(s) && (s = me(s));
              const o = me(this),
                { has: i, get: a } = pi(o);
              let l = i.call(o, r);
              l || ((r = me(r)), (l = i.call(o, r)));
              const f = a.call(o, r);
              return o.set(r, s), l ? pr(s, f) && Fn(o, 'set', r, s) : Fn(o, 'add', r, s), this;
            },
            delete(r) {
              const s = me(this),
                { has: o, get: i } = pi(s);
              let a = o.call(s, r);
              a || ((r = me(r)), (a = o.call(s, r))), i && i.call(s, r);
              const l = s.delete(r);
              return a && Fn(s, 'delete', r, void 0), l;
            },
            clear() {
              const r = me(this),
                s = r.size !== 0,
                o = r.clear();
              return s && Fn(r, 'clear', void 0, void 0), o;
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = dS(r, e, t);
    }),
    n
  );
}
function ku(e, t) {
  const n = pS(e, t);
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
          ? r
          : Reflect.get(Ee(n, s) && s in r ? n : r, s, o);
}
const hS = { get: ku(!1, !1) },
  gS = { get: ku(!1, !0) },
  mS = { get: ku(!0, !1) },
  Rm = new WeakMap(),
  Om = new WeakMap(),
  Lm = new WeakMap(),
  vS = new WeakMap();
function _S(e) {
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
function yS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _S(qx(e));
}
function qs(e) {
  return Qr(e) ? e : Pu(e, !1, cS, hS, Rm);
}
function Am(e) {
  return Pu(e, !1, fS, gS, Om);
}
function Mm(e) {
  return Pu(e, !0, uS, mS, Lm);
}
function Pu(e, t, n, r, s) {
  if (!Fe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = yS(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function xs(e) {
  return Qr(e) ? xs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Qr(e) {
  return !!(e && e.__v_isReadonly);
}
function It(e) {
  return !!(e && e.__v_isShallow);
}
function Ru(e) {
  return e ? !!e.__v_raw : !1;
}
function me(e) {
  const t = e && e.__v_raw;
  return t ? me(t) : e;
}
function kl(e) {
  return !Ee(e, '__v_skip') && Object.isExtensible(e) && pm(e, '__v_skip', !0), e;
}
const nt = (e) => (Fe(e) ? qs(e) : e),
  bc = (e) => (Fe(e) ? Mm(e) : e);
function it(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Tm(e) {
  return Fm(e, !1);
}
function bS(e) {
  return Fm(e, !0);
}
function Fm(e, t) {
  return it(e) ? e : new wS(e, t);
}
class wS {
  constructor(t, n) {
    (this.dep = new Cu()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : me(t)),
      (this._value = n ? t : nt(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || It(t) || Qr(t);
    (t = r ? t : me(t)),
      pr(t, n) && ((this._rawValue = t), (this._value = r ? t : nt(t)), this.dep.trigger());
  }
}
function Ss(e) {
  return it(e) ? e.value : e;
}
const xS = {
  get: (e, t, n) => (t === '__v_raw' ? e : Ss(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return it(s) && !it(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function $m(e) {
  return xs(e) ? e : new Proxy(e, xS);
}
class SS {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Cu(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Io - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ae !== this)) return ym(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return xm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ES(e, t, n = !1) {
  let r, s;
  return le(e) ? (r = e) : ((r = e.get), (s = e.set)), new SS(r, s, n);
}
const gi = {},
  qi = new WeakMap();
let Br;
function CS(e, t = !1, n = Br) {
  if (n) {
    let r = qi.get(n);
    r || qi.set(n, (r = [])), r.push(e);
  }
}
function kS(e, t, n = Re) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n,
    f = (L) => (s ? L : It(L) || s === !1 || s === 0 ? $n(L, 1) : $n(L));
  let c,
    u,
    p,
    m,
    x = !1,
    P = !1;
  if (
    (it(e)
      ? ((u = () => e.value), (x = It(e)))
      : xs(e)
        ? ((u = () => f(e)), (x = !0))
        : se(e)
          ? ((P = !0),
            (x = e.some((L) => xs(L) || It(L))),
            (u = () =>
              e.map((L) => {
                if (it(L)) return L.value;
                if (xs(L)) return f(L);
                if (le(L)) return l ? l(L, 2) : L();
              })))
          : le(e)
            ? t
              ? (u = l ? () => l(e, 2) : e)
              : (u = () => {
                  if (p) {
                    xr();
                    try {
                      p();
                    } finally {
                      Sr();
                    }
                  }
                  const L = Br;
                  Br = c;
                  try {
                    return l ? l(e, 3, [m]) : e(m);
                  } finally {
                    Br = L;
                  }
                })
            : (u = mn),
    t && s)
  ) {
    const L = u,
      q = s === !0 ? 1 / 0 : s;
    u = () => $n(L(), q);
  }
  const N = tS(),
    I = () => {
      c.stop(), N && N.active && _u(N.effects, c);
    };
  if (o && t) {
    const L = t;
    t = (...q) => {
      L(...q), I();
    };
  }
  let T = P ? new Array(e.length).fill(gi) : gi;
  const j = (L) => {
    if (!(!(c.flags & 1) || (!c.dirty && !L)))
      if (t) {
        const q = c.run();
        if (s || x || (P ? q.some((J, K) => pr(J, T[K])) : pr(q, T))) {
          p && p();
          const J = Br;
          Br = c;
          try {
            const K = [q, T === gi ? void 0 : P && T[0] === gi ? [] : T, m];
            l ? l(t, 3, K) : t(...K), (T = q);
          } finally {
            Br = J;
          }
        }
      } else c.run();
  };
  return (
    a && a(j),
    (c = new vm(u)),
    (c.scheduler = i ? () => i(j, !1) : j),
    (m = (L) => CS(L, !1, c)),
    (p = c.onStop =
      () => {
        const L = qi.get(c);
        if (L) {
          if (l) l(L, 4);
          else for (const q of L) q();
          qi.delete(c);
        }
      }),
    t ? (r ? j(!0) : (T = c.run())) : i ? i(j.bind(null, !0), !0) : c.run(),
    (I.pause = c.pause.bind(c)),
    (I.resume = c.resume.bind(c)),
    (I.stop = I),
    I
  );
}
function $n(e, t = 1 / 0, n) {
  if (t <= 0 || !Fe(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, it(e))) $n(e.value, t, n);
  else if (se(e)) for (let r = 0; r < e.length; r++) $n(e[r], t, n);
  else if (cm(e) || ws(e))
    e.forEach((r) => {
      $n(r, t, n);
    });
  else if (dm(e)) {
    for (const r in e) $n(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && $n(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function oi(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Pl(s, t, n);
  }
}
function Qt(e, t, n, r) {
  if (le(e)) {
    const s = oi(e, t, n, r);
    return (
      s &&
        um(s) &&
        s.catch((o) => {
          Pl(o, t, n);
        }),
      s
    );
  }
  if (se(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Qt(e[o], t, n, r));
    return s;
  }
}
function Pl(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || Re;
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
      xr(), oi(o, null, 10, [e, l, f]), Sr();
      return;
    }
  }
  PS(e, n, s, r, i);
}
function PS(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const dt = [];
let on = -1;
const Es = [];
let nr = null,
  cs = 0;
const jm = Promise.resolve();
let Vi = null;
function Im(e) {
  const t = Vi || jm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function RS(e) {
  let t = on + 1,
    n = dt.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = dt[r],
      o = No(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Ou(e) {
  if (!(e.flags & 1)) {
    const t = No(e),
      n = dt[dt.length - 1];
    !n || (!(e.flags & 2) && t >= No(n)) ? dt.push(e) : dt.splice(RS(t), 0, e),
      (e.flags |= 1),
      Dm();
  }
}
function Dm() {
  Vi || (Vi = jm.then(Bm));
}
function OS(e) {
  se(e)
    ? Es.push(...e)
    : nr && e.id === -1
      ? nr.splice(cs + 1, 0, e)
      : e.flags & 1 || (Es.push(e), (e.flags |= 1)),
    Dm();
}
function vd(e, t, n = on + 1) {
  for (; n < dt.length; n++) {
    const r = dt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      dt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Nm(e) {
  if (Es.length) {
    const t = [...new Set(Es)].sort((n, r) => No(n) - No(r));
    if (((Es.length = 0), nr)) {
      nr.push(...t);
      return;
    }
    for (nr = t, cs = 0; cs < nr.length; cs++) {
      const n = nr[cs];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (nr = null), (cs = 0);
  }
}
const No = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Bm(e) {
  try {
    for (on = 0; on < dt.length; on++) {
      const t = dt[on];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), oi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; on < dt.length; on++) {
      const t = dt[on];
      t && (t.flags &= -2);
    }
    (on = -1), (dt.length = 0), Nm(), (Vi = null), (dt.length || Es.length) && Bm();
  }
}
let yt = null,
  Um = null;
function Hi(e) {
  const t = yt;
  return (yt = e), (Um = (e && e.type.__scopeId) || null), t;
}
function LS(e, t = yt, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Rd(-1);
    const o = Hi(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Hi(o), r._d && Rd(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function SL(e, t) {
  if (yt === null) return e;
  const n = Tl(yt),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = Re] = t[s];
    o &&
      (le(o) && (o = { mounted: o, updated: o }),
      o.deep && $n(i),
      r.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function Ar(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (xr(), Qt(l, n, 8, [e.el, a, e, t]), Sr());
  }
}
const AS = Symbol('_vte'),
  qm = (e) => e.__isTeleport,
  rr = Symbol('_leaveCb'),
  mi = Symbol('_enterCb');
function MS() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    Ym(() => {
      e.isMounted = !0;
    }),
    Qm(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ft = [Function, Array],
  Vm = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ft,
    onEnter: Ft,
    onAfterEnter: Ft,
    onEnterCancelled: Ft,
    onBeforeLeave: Ft,
    onLeave: Ft,
    onAfterLeave: Ft,
    onLeaveCancelled: Ft,
    onBeforeAppear: Ft,
    onAppear: Ft,
    onAfterAppear: Ft,
    onAppearCancelled: Ft,
  },
  Hm = (e) => {
    const t = e.subTree;
    return t.component ? Hm(t.component) : t;
  },
  TS = {
    name: 'BaseTransition',
    props: Vm,
    setup(e, { slots: t }) {
      const n = A1(),
        r = MS();
      return () => {
        const s = t.default && Km(t.default(), !0);
        if (!s || !s.length) return;
        const o = Wm(s),
          i = me(e),
          { mode: a } = i;
        if (r.isLeaving) return Sa(o);
        const l = _d(o);
        if (!l) return Sa(o);
        let f = wc(l, i, r, n, (u) => (f = u));
        l.type !== mt && Bo(l, f);
        let c = n.subTree && _d(n.subTree);
        if (c && c.type !== mt && !Vr(l, c) && Hm(n).type !== mt) {
          let u = wc(c, i, r, n);
          if ((Bo(c, u), a === 'out-in' && l.type !== mt))
            return (
              (r.isLeaving = !0),
              (u.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete u.afterLeave,
                  (c = void 0);
              }),
              Sa(o)
            );
          a === 'in-out' && l.type !== mt
            ? (u.delayLeave = (p, m, x) => {
                const P = zm(r, c);
                (P[String(c.key)] = c),
                  (p[rr] = () => {
                    m(), (p[rr] = void 0), delete f.delayedLeave, (c = void 0);
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
function Wm(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== mt) {
        t = n;
        break;
      }
  }
  return t;
}
const FS = TS;
function zm(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function wc(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: f,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: p,
      onLeave: m,
      onAfterLeave: x,
      onLeaveCancelled: P,
      onBeforeAppear: N,
      onAppear: I,
      onAfterAppear: T,
      onAppearCancelled: j,
    } = t,
    L = String(e.key),
    q = zm(n, e),
    J = (B, V) => {
      B && Qt(B, r, 9, V);
    },
    K = (B, V) => {
      const Y = V[1];
      J(B, V), se(B) ? B.every((A) => A.length <= 1) && Y() : B.length <= 1 && Y();
    },
    ne = {
      mode: i,
      persisted: a,
      beforeEnter(B) {
        let V = l;
        if (!n.isMounted)
          if (o) V = N || l;
          else return;
        B[rr] && B[rr](!0);
        const Y = q[L];
        Y && Vr(e, Y) && Y.el[rr] && Y.el[rr](), J(V, [B]);
      },
      enter(B) {
        let V = f,
          Y = c,
          A = u;
        if (!n.isMounted)
          if (o) (V = I || f), (Y = T || c), (A = j || u);
          else return;
        let H = !1;
        const te = (B[mi] = (X) => {
          H ||
            ((H = !0),
            X ? J(A, [B]) : J(Y, [B]),
            ne.delayedLeave && ne.delayedLeave(),
            (B[mi] = void 0));
        });
        V ? K(V, [B, te]) : te();
      },
      leave(B, V) {
        const Y = String(e.key);
        if ((B[mi] && B[mi](!0), n.isUnmounting)) return V();
        J(p, [B]);
        let A = !1;
        const H = (B[rr] = (te) => {
          A ||
            ((A = !0),
            V(),
            te ? J(P, [B]) : J(x, [B]),
            (B[rr] = void 0),
            q[Y] === e && delete q[Y]);
        });
        (q[Y] = e), m ? K(m, [B, H]) : H();
      },
      clone(B) {
        const V = wc(B, t, n, r, s);
        return s && s(V), V;
      },
    };
  return ne;
}
function Sa(e) {
  if (Ol(e)) return (e = mr(e)), (e.children = null), e;
}
function _d(e) {
  if (!Ol(e)) return qm(e.type) && e.children ? Wm(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && le(n.default)) return n.default();
  }
}
function Bo(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Bo(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Km(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === un
      ? (i.patchFlag & 128 && s++, (r = r.concat(Km(i.children, t, a))))
      : (t || i.type !== mt) && r.push(a != null ? mr(i, { key: a }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function Rl(e, t) {
  return le(e) ? He({ name: e.name }, t, { setup: e }) : e;
}
function Gm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function Wi(e, t, n, r, s = !1) {
  if (se(e)) {
    e.forEach((x, P) => Wi(x, t && (se(t) ? t[P] : t), n, r, s));
    return;
  }
  if (ho(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      Wi(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Tl(r.component) : r.el,
    i = s ? null : o,
    { i: a, r: l } = e,
    f = t && t.r,
    c = a.refs === Re ? (a.refs = {}) : a.refs,
    u = a.setupState,
    p = me(u),
    m = u === Re ? () => !1 : (x) => Ee(p, x);
  if (
    (f != null &&
      f !== l &&
      (Ne(f) ? ((c[f] = null), m(f) && (u[f] = null)) : it(f) && (f.value = null)),
    le(l))
  )
    oi(l, a, 12, [i, c]);
  else {
    const x = Ne(l),
      P = it(l);
    if (x || P) {
      const N = () => {
        if (e.f) {
          const I = x ? (m(l) ? u[l] : c[l]) : l.value;
          s
            ? se(I) && _u(I, o)
            : se(I)
              ? I.includes(o) || I.push(o)
              : x
                ? ((c[l] = [o]), m(l) && (u[l] = c[l]))
                : ((l.value = [o]), e.k && (c[e.k] = l.value));
        } else x ? ((c[l] = i), m(l) && (u[l] = i)) : P && ((l.value = i), e.k && (c[e.k] = i));
      };
      i ? ((N.id = -1), xt(N, n)) : N();
    }
  }
}
El().requestIdleCallback;
El().cancelIdleCallback;
const ho = (e) => !!e.type.__asyncLoader,
  Ol = (e) => e.type.__isKeepAlive;
function $S(e, t) {
  Jm(e, 'a', t);
}
function jS(e, t) {
  Jm(e, 'da', t);
}
function Jm(e, t, n = Ke) {
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
  if ((Ll(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; ) Ol(s.parent.vnode) && IS(r, t, n, s), (s = s.parent);
  }
}
function IS(e, t, n, r) {
  const s = Ll(t, e, r, !0);
  Xm(() => {
    _u(r[t], s);
  }, n);
}
function Ll(e, t, n = Ke, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          xr();
          const a = ii(n),
            l = Qt(t, n, e, i);
          return a(), Sr(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Vn =
    (e) =>
    (t, n = Ke) => {
      (!qo || e === 'sp') && Ll(e, (...r) => t(...r), n);
    },
  DS = Vn('bm'),
  Ym = Vn('m'),
  NS = Vn('bu'),
  BS = Vn('u'),
  Qm = Vn('bum'),
  Xm = Vn('um'),
  US = Vn('sp'),
  qS = Vn('rtg'),
  VS = Vn('rtc');
function HS(e, t = Ke) {
  Ll('ec', e, t);
}
const WS = 'components';
function zS(e, t) {
  return GS(WS, e, !0, t) || e;
}
const KS = Symbol.for('v-ndc');
function GS(e, t, n = !0, r = !1) {
  const s = yt || Ke;
  if (s) {
    const o = s.type;
    {
      const a = j1(o, !1);
      if (a && (a === t || a === Bt(t) || a === Sl(Bt(t)))) return o;
    }
    const i = yd(s[e] || o[e], t) || yd(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function yd(e, t) {
  return e && (e[t] || e[Bt(t)] || e[Sl(Bt(t))]);
}
function EL(e, t, n, r) {
  let s;
  const o = n,
    i = se(e);
  if (i || Ne(e)) {
    const a = i && xs(e);
    let l = !1;
    a && ((l = !It(e)), (e = Cl(e))), (s = new Array(e.length));
    for (let f = 0, c = e.length; f < c; f++) s[f] = t(l ? nt(e[f]) : e[f], f, void 0, o);
  } else if (typeof e == 'number') {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o);
  } else if (Fe(e))
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
const xc = (e) => (e ? (xv(e) ? Tl(e) : xc(e.parent)) : null),
  go = He(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => xc(e.parent),
    $root: (e) => xc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ev(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Ou(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Im.bind(e.proxy)),
    $watch: (e) => g1.bind(e),
  }),
  Ea = (e, t) => e !== Re && !e.__isScriptSetup && Ee(e, t),
  JS = {
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
        const m = i[t];
        if (m !== void 0)
          switch (m) {
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
          if (Ea(r, t)) return (i[t] = 1), r[t];
          if (s !== Re && Ee(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && Ee(f, t)) return (i[t] = 3), o[t];
          if (n !== Re && Ee(n, t)) return (i[t] = 4), n[t];
          Sc && (i[t] = 0);
        }
      }
      const c = go[t];
      let u, p;
      if (c) return t === '$attrs' && tt(e.attrs, 'get', ''), c(e);
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== Re && Ee(n, t)) return (i[t] = 4), n[t];
      if (((p = l.config.globalProperties), Ee(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return Ea(s, t)
        ? ((s[t] = n), !0)
        : r !== Re && Ee(r, t)
          ? ((r[t] = n), !0)
          : Ee(e.props, t) || (t[0] === '$' && t.slice(1) in e)
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
        (e !== Re && Ee(e, i)) ||
        Ea(t, i) ||
        ((a = o[0]) && Ee(a, i)) ||
        Ee(r, i) ||
        Ee(go, i) ||
        Ee(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Ee(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function bd(e) {
  return se(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Sc = !0;
function YS(e) {
  const t = ev(e),
    n = e.proxy,
    r = e.ctx;
  (Sc = !1), t.beforeCreate && wd(t.beforeCreate, e, 'bc');
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    created: c,
    beforeMount: u,
    mounted: p,
    beforeUpdate: m,
    updated: x,
    activated: P,
    deactivated: N,
    beforeDestroy: I,
    beforeUnmount: T,
    destroyed: j,
    unmounted: L,
    render: q,
    renderTracked: J,
    renderTriggered: K,
    errorCaptured: ne,
    serverPrefetch: B,
    expose: V,
    inheritAttrs: Y,
    components: A,
    directives: H,
    filters: te,
  } = t;
  if ((f && QS(f, r, null), i))
    for (const Q in i) {
      const W = i[Q];
      le(W) && (r[Q] = W.bind(n));
    }
  if (s) {
    const Q = s.call(n, n);
    Fe(Q) && (e.data = qs(Q));
  }
  if (((Sc = !0), o))
    for (const Q in o) {
      const W = o[Q],
        Z = le(W) ? W.bind(n, n) : le(W.get) ? W.get.bind(n, n) : mn,
        Ie = !le(W) && le(W.set) ? W.set.bind(n) : mn,
        ke = Ht({ get: Z, set: Ie });
      Object.defineProperty(r, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (_e) => (ke.value = _e),
      });
    }
  if (a) for (const Q in a) Zm(a[Q], r, n, Q);
  if (l) {
    const Q = le(l) ? l.call(n) : l;
    Reflect.ownKeys(Q).forEach((W) => {
      ki(W, Q[W]);
    });
  }
  c && wd(c, e, 'c');
  function X(Q, W) {
    se(W) ? W.forEach((Z) => Q(Z.bind(n))) : W && Q(W.bind(n));
  }
  if (
    (X(DS, u),
    X(Ym, p),
    X(NS, m),
    X(BS, x),
    X($S, P),
    X(jS, N),
    X(HS, ne),
    X(VS, J),
    X(qS, K),
    X(Qm, T),
    X(Xm, L),
    X(US, B),
    se(V))
  )
    if (V.length) {
      const Q = e.exposed || (e.exposed = {});
      V.forEach((W) => {
        Object.defineProperty(Q, W, { get: () => n[W], set: (Z) => (n[W] = Z) });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === mn && (e.render = q),
    Y != null && (e.inheritAttrs = Y),
    A && (e.components = A),
    H && (e.directives = H),
    B && Gm(e);
}
function QS(e, t, n = mn) {
  se(e) && (e = Ec(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Fe(s)
      ? 'default' in s
        ? (o = Bn(s.from || r, s.default, !0))
        : (o = Bn(s.from || r))
      : (o = Bn(s)),
      it(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function wd(e, t, n) {
  Qt(se(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Zm(e, t, n, r) {
  let s = r.includes('.') ? hv(n, r) : () => n[r];
  if (Ne(e)) {
    const o = t[e];
    le(o) && Pi(s, o);
  } else if (le(e)) Pi(s, e.bind(n));
  else if (Fe(e))
    if (se(e)) e.forEach((o) => Zm(o, t, n, r));
    else {
      const o = le(e.handler) ? e.handler.bind(n) : t[e.handler];
      le(o) && Pi(s, o, e);
    }
}
function ev(e) {
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
        : ((l = {}), s.length && s.forEach((f) => zi(l, f, i, !0)), zi(l, t, i)),
    Fe(t) && o.set(t, l),
    l
  );
}
function zi(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && zi(e, o, n, !0), s && s.forEach((i) => zi(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const a = XS[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const XS = {
  data: xd,
  props: Sd,
  emits: Sd,
  methods: eo,
  computed: eo,
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  components: eo,
  directives: eo,
  watch: e1,
  provide: xd,
  inject: ZS,
};
function xd(e, t) {
  return t
    ? e
      ? function () {
          return He(le(e) ? e.call(this, this) : e, le(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function ZS(e, t) {
  return eo(Ec(e), Ec(t));
}
function Ec(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function eo(e, t) {
  return e ? He(Object.create(null), e, t) : t;
}
function Sd(e, t) {
  return e
    ? se(e) && se(t)
      ? [...new Set([...e, ...t])]
      : He(Object.create(null), bd(e), bd(t ?? {}))
    : t;
}
function e1(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = He(Object.create(null), e);
  for (const r in t) n[r] = ct(e[r], t[r]);
  return n;
}
function tv() {
  return {
    app: null,
    config: {
      isNativeTag: Bx,
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
let t1 = 0;
function n1(e, t) {
  return function (n, r = null) {
    le(n) || (n = He({}, n)), r != null && !Fe(r) && (r = null);
    const s = tv(),
      o = new WeakSet(),
      i = [];
    let a = !1;
    const l = (s.app = {
      _uid: t1++,
      _component: n,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: D1,
      get config() {
        return s.config;
      },
      set config(f) {},
      use(f, ...c) {
        return (
          o.has(f) ||
            (f && le(f.install) ? (o.add(f), f.install(l, ...c)) : le(f) && (o.add(f), f(l, ...c))),
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
          const p = l._ceVNode || Lt(n, r);
          return (
            (p.appContext = s),
            u === !0 ? (u = 'svg') : u === !1 && (u = void 0),
            e(p, f, u),
            (a = !0),
            (l._container = f),
            (f.__vue_app__ = l),
            Tl(p.component)
          );
        }
      },
      onUnmount(f) {
        i.push(f);
      },
      unmount() {
        a && (Qt(i, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
      },
      provide(f, c) {
        return (s.provides[f] = c), l;
      },
      runWithContext(f) {
        const c = Cs;
        Cs = l;
        try {
          return f();
        } finally {
          Cs = c;
        }
      },
    });
    return l;
  };
}
let Cs = null;
function ki(e, t) {
  if (Ke) {
    let n = Ke.provides;
    const r = Ke.parent && Ke.parent.provides;
    r === n && (n = Ke.provides = Object.create(r)), (n[e] = t);
  }
}
function Bn(e, t, n = !1) {
  const r = Ke || yt;
  if (r || Cs) {
    const s = Cs
      ? Cs._context.provides
      : r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && le(t) ? t.call(r && r.proxy) : t;
  }
}
const nv = {},
  rv = () => Object.create(nv),
  sv = (e) => Object.getPrototypeOf(e) === nv;
function r1(e, t, n, r = !1) {
  const s = {},
    o = rv();
  (e.propsDefaults = Object.create(null)), ov(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : Am(s)) : e.type.props ? (e.props = s) : (e.props = o), (e.attrs = o);
}
function s1(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = me(s),
    [l] = e.propsOptions;
  let f = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let p = c[u];
        if (Al(e.emitsOptions, p)) continue;
        const m = t[p];
        if (l)
          if (Ee(o, p)) m !== o[p] && ((o[p] = m), (f = !0));
          else {
            const x = Bt(p);
            s[x] = Cc(l, a, x, m, e, !1);
          }
        else m !== o[p] && ((o[p] = m), (f = !0));
      }
    }
  } else {
    ov(e, t, s, o) && (f = !0);
    let c;
    for (const u in a)
      (!t || (!Ee(t, u) && ((c = ns(u)) === u || !Ee(t, c)))) &&
        (l
          ? n && (n[u] !== void 0 || n[c] !== void 0) && (s[u] = Cc(l, a, u, void 0, e, !0))
          : delete s[u]);
    if (o !== a) for (const u in o) (!t || !Ee(t, u)) && (delete o[u], (f = !0));
  }
  f && Fn(e.attrs, 'set', '');
}
function ov(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (uo(l)) continue;
      const f = t[l];
      let c;
      s && Ee(s, (c = Bt(l)))
        ? !o || !o.includes(c)
          ? (n[c] = f)
          : ((a || (a = {}))[c] = f)
        : Al(e.emitsOptions, l) || ((!(l in r) || f !== r[l]) && ((r[l] = f), (i = !0)));
    }
  if (o) {
    const l = me(n),
      f = a || Re;
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      n[u] = Cc(s, l, u, f[u], e, !Ee(f, u));
    }
  }
  return i;
}
function Cc(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = Ee(i, 'default');
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && le(l)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const c = ii(s);
          (r = f[n] = l.call(null, t)), c();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] && (o && !a ? (r = !1) : i[1] && (r === '' || r === ns(n)) && (r = !0));
  }
  return r;
}
const o1 = new WeakMap();
function iv(e, t, n = !1) {
  const r = n ? o1 : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!le(e)) {
    const c = (u) => {
      l = !0;
      const [p, m] = iv(u, t, !0);
      He(i, p), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!o && !l) return Fe(e) && r.set(e, bs), bs;
  if (se(o))
    for (let c = 0; c < o.length; c++) {
      const u = Bt(o[c]);
      Ed(u) && (i[u] = Re);
    }
  else if (o)
    for (const c in o) {
      const u = Bt(c);
      if (Ed(u)) {
        const p = o[c],
          m = (i[u] = se(p) || le(p) ? { type: p } : He({}, p)),
          x = m.type;
        let P = !1,
          N = !0;
        if (se(x))
          for (let I = 0; I < x.length; ++I) {
            const T = x[I],
              j = le(T) && T.name;
            if (j === 'Boolean') {
              P = !0;
              break;
            } else j === 'String' && (N = !1);
          }
        else P = le(x) && x.name === 'Boolean';
        (m[0] = P), (m[1] = N), (P || Ee(m, 'default')) && a.push(u);
      }
    }
  const f = [i, a];
  return Fe(e) && r.set(e, f), f;
}
function Ed(e) {
  return e[0] !== '$' && !uo(e);
}
const lv = (e) => e[0] === '_' || e === '$stable',
  Lu = (e) => (se(e) ? e.map(fn) : [fn(e)]),
  i1 = (e, t, n) => {
    if (t._n) return t;
    const r = LS((...s) => Lu(t(...s)), n);
    return (r._c = !1), r;
  },
  av = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (lv(s)) continue;
      const o = e[s];
      if (le(o)) t[s] = i1(s, o, r);
      else if (o != null) {
        const i = Lu(o);
        t[s] = () => i;
      }
    }
  },
  cv = (e, t) => {
    const n = Lu(t);
    e.slots.default = () => n;
  },
  uv = (e, t, n) => {
    for (const r in t) (n || r !== '_') && (e[r] = t[r]);
  },
  l1 = (e, t, n) => {
    const r = (e.slots = rv());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (uv(r, t, n), n && pm(r, '_', s, !0)) : av(t, r);
    } else t && cv(e, t);
  },
  a1 = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = Re;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? (n && a === 1 ? (o = !1) : uv(s, t, n)) : ((o = !t.$stable), av(t, s)), (i = t);
    } else t && (cv(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !lv(a) && i[a] == null && delete s[a];
  },
  xt = x1;
function c1(e) {
  return u1(e);
}
function u1(e, t) {
  const n = El();
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
      nextSibling: p,
      setScopeId: m = mn,
      insertStaticContent: x,
    } = e,
    P = (g, d, h, v = null, _ = null, b = null, w = void 0, C = null, E = !!d.dynamicChildren) => {
      if (g === d) return;
      g && !Vr(g, d) && ((v = y(g)), ue(g, _, b, !0), (g = null)),
        d.patchFlag === -2 && ((E = !1), (d.dynamicChildren = null));
      const { type: S, ref: R, shapeFlag: M } = d;
      switch (S) {
        case Ml:
          N(g, d, h, v);
          break;
        case mt:
          I(g, d, h, v);
          break;
        case ka:
          g == null && T(d, h, v, w);
          break;
        case un:
          A(g, d, h, v, _, b, w, C, E);
          break;
        default:
          M & 1
            ? q(g, d, h, v, _, b, w, C, E)
            : M & 6
              ? H(g, d, h, v, _, b, w, C, E)
              : (M & 64 || M & 128) && S.process(g, d, h, v, _, b, w, C, E, $);
      }
      R != null && _ && Wi(R, g && g.ref, b, d || g, !d);
    },
    N = (g, d, h, v) => {
      if (g == null) r((d.el = a(d.children)), h, v);
      else {
        const _ = (d.el = g.el);
        d.children !== g.children && f(_, d.children);
      }
    },
    I = (g, d, h, v) => {
      g == null ? r((d.el = l(d.children || '')), h, v) : (d.el = g.el);
    },
    T = (g, d, h, v) => {
      [g.el, g.anchor] = x(g.children, d, h, v, g.el, g.anchor);
    },
    j = ({ el: g, anchor: d }, h, v) => {
      let _;
      for (; g && g !== d; ) (_ = p(g)), r(g, h, v), (g = _);
      r(d, h, v);
    },
    L = ({ el: g, anchor: d }) => {
      let h;
      for (; g && g !== d; ) (h = p(g)), s(g), (g = h);
      s(d);
    },
    q = (g, d, h, v, _, b, w, C, E) => {
      d.type === 'svg' ? (w = 'svg') : d.type === 'math' && (w = 'mathml'),
        g == null ? J(d, h, v, _, b, w, C, E) : B(g, d, _, b, w, C, E);
    },
    J = (g, d, h, v, _, b, w, C) => {
      let E, S;
      const { props: R, shapeFlag: M, transition: F, dirs: D } = g;
      if (
        ((E = g.el = i(g.type, b, R && R.is, R)),
        M & 8 ? c(E, g.children) : M & 16 && ne(g.children, E, null, v, _, Ca(g, b), w, C),
        D && Ar(g, null, v, 'created'),
        K(E, g, g.scopeId, w, v),
        R)
      ) {
        for (const G in R) G !== 'value' && !uo(G) && o(E, G, null, R[G], b, v);
        'value' in R && o(E, 'value', null, R.value, b), (S = R.onVnodeBeforeMount) && nn(S, v, g);
      }
      D && Ar(g, null, v, 'beforeMount');
      const U = f1(_, F);
      U && F.beforeEnter(E),
        r(E, d, h),
        ((S = R && R.onVnodeMounted) || U || D) &&
          xt(() => {
            S && nn(S, v, g), U && F.enter(E), D && Ar(g, null, v, 'mounted');
          }, _);
    },
    K = (g, d, h, v, _) => {
      if ((h && m(g, h), v)) for (let b = 0; b < v.length; b++) m(g, v[b]);
      if (_) {
        let b = _.subTree;
        if (d === b || (mv(b.type) && (b.ssContent === d || b.ssFallback === d))) {
          const w = _.vnode;
          K(g, w, w.scopeId, w.slotScopeIds, _.parent);
        }
      }
    },
    ne = (g, d, h, v, _, b, w, C, E = 0) => {
      for (let S = E; S < g.length; S++) {
        const R = (g[S] = C ? sr(g[S]) : fn(g[S]));
        P(null, R, d, h, v, _, b, w, C);
      }
    },
    B = (g, d, h, v, _, b, w) => {
      const C = (d.el = g.el);
      let { patchFlag: E, dynamicChildren: S, dirs: R } = d;
      E |= g.patchFlag & 16;
      const M = g.props || Re,
        F = d.props || Re;
      let D;
      if (
        (h && Mr(h, !1),
        (D = F.onVnodeBeforeUpdate) && nn(D, h, d, g),
        R && Ar(d, g, h, 'beforeUpdate'),
        h && Mr(h, !0),
        ((M.innerHTML && F.innerHTML == null) || (M.textContent && F.textContent == null)) &&
          c(C, ''),
        S
          ? V(g.dynamicChildren, S, C, h, v, Ca(d, _), b)
          : w || Z(g, d, C, null, h, v, Ca(d, _), b, !1),
        E > 0)
      ) {
        if (E & 16) Y(C, M, F, h, _);
        else if (
          (E & 2 && M.class !== F.class && o(C, 'class', null, F.class, _),
          E & 4 && o(C, 'style', M.style, F.style, _),
          E & 8)
        ) {
          const U = d.dynamicProps;
          for (let G = 0; G < U.length; G++) {
            const z = U[G],
              ee = M[z],
              ce = F[z];
            (ce !== ee || z === 'value') && o(C, z, ee, ce, _, h);
          }
        }
        E & 1 && g.children !== d.children && c(C, d.children);
      } else !w && S == null && Y(C, M, F, h, _);
      ((D = F.onVnodeUpdated) || R) &&
        xt(() => {
          D && nn(D, h, d, g), R && Ar(d, g, h, 'updated');
        }, v);
    },
    V = (g, d, h, v, _, b, w) => {
      for (let C = 0; C < d.length; C++) {
        const E = g[C],
          S = d[C],
          R = E.el && (E.type === un || !Vr(E, S) || E.shapeFlag & 70) ? u(E.el) : h;
        P(E, S, R, null, v, _, b, w, !0);
      }
    },
    Y = (g, d, h, v, _) => {
      if (d !== h) {
        if (d !== Re) for (const b in d) !uo(b) && !(b in h) && o(g, b, d[b], null, _, v);
        for (const b in h) {
          if (uo(b)) continue;
          const w = h[b],
            C = d[b];
          w !== C && b !== 'value' && o(g, b, C, w, _, v);
        }
        'value' in h && o(g, 'value', d.value, h.value, _);
      }
    },
    A = (g, d, h, v, _, b, w, C, E) => {
      const S = (d.el = g ? g.el : a('')),
        R = (d.anchor = g ? g.anchor : a(''));
      let { patchFlag: M, dynamicChildren: F, slotScopeIds: D } = d;
      D && (C = C ? C.concat(D) : D),
        g == null
          ? (r(S, h, v), r(R, h, v), ne(d.children || [], h, R, _, b, w, C, E))
          : M > 0 && M & 64 && F && g.dynamicChildren
            ? (V(g.dynamicChildren, F, h, _, b, w, C),
              (d.key != null || (_ && d === _.subTree)) && fv(g, d, !0))
            : Z(g, d, h, R, _, b, w, C, E);
    },
    H = (g, d, h, v, _, b, w, C, E) => {
      (d.slotScopeIds = C),
        g == null
          ? d.shapeFlag & 512
            ? _.ctx.activate(d, h, v, w, E)
            : te(d, h, v, _, b, w, E)
          : X(g, d, E);
    },
    te = (g, d, h, v, _, b, w) => {
      const C = (g.component = L1(g, v, _));
      if ((Ol(g) && (C.ctx.renderer = $), M1(C, !1, w), C.asyncDep)) {
        if ((_ && _.registerDep(C, Q, w), !g.el)) {
          const E = (C.subTree = Lt(mt));
          I(null, E, d, h);
        }
      } else Q(C, g, d, h, _, b, w);
    },
    X = (g, d, h) => {
      const v = (d.component = g.component);
      if (b1(g, d, h))
        if (v.asyncDep && !v.asyncResolved) {
          W(v, d, h);
          return;
        } else (v.next = d), v.update();
      else (d.el = g.el), (v.vnode = d);
    },
    Q = (g, d, h, v, _, b, w) => {
      const C = () => {
        if (g.isMounted) {
          let { next: M, bu: F, u: D, parent: U, vnode: G } = g;
          {
            const he = dv(g);
            if (he) {
              M && ((M.el = G.el), W(g, M, w)),
                he.asyncDep.then(() => {
                  g.isUnmounted || C();
                });
              return;
            }
          }
          let z = M,
            ee;
          Mr(g, !1),
            M ? ((M.el = G.el), W(g, M, w)) : (M = G),
            F && _a(F),
            (ee = M.props && M.props.onVnodeBeforeUpdate) && nn(ee, U, M, G),
            Mr(g, !0);
          const ce = kd(g),
            de = g.subTree;
          (g.subTree = ce),
            P(de, ce, u(de.el), y(de), g, _, b),
            (M.el = ce.el),
            z === null && w1(g, ce.el),
            D && xt(D, _),
            (ee = M.props && M.props.onVnodeUpdated) && xt(() => nn(ee, U, M, G), _);
        } else {
          let M;
          const { el: F, props: D } = d,
            { bm: U, m: G, parent: z, root: ee, type: ce } = g,
            de = ho(d);
          Mr(g, !1), U && _a(U), !de && (M = D && D.onVnodeBeforeMount) && nn(M, z, d), Mr(g, !0);
          {
            ee.ce && ee.ce._injectChildStyle(ce);
            const he = (g.subTree = kd(g));
            P(null, he, h, v, g, _, b), (d.el = he.el);
          }
          if ((G && xt(G, _), !de && (M = D && D.onVnodeMounted))) {
            const he = d;
            xt(() => nn(M, z, he), _);
          }
          (d.shapeFlag & 256 || (z && ho(z.vnode) && z.vnode.shapeFlag & 256)) && g.a && xt(g.a, _),
            (g.isMounted = !0),
            (d = h = v = null);
        }
      };
      g.scope.on();
      const E = (g.effect = new vm(C));
      g.scope.off();
      const S = (g.update = E.run.bind(E)),
        R = (g.job = E.runIfDirty.bind(E));
      (R.i = g), (R.id = g.uid), (E.scheduler = () => Ou(R)), Mr(g, !0), S();
    },
    W = (g, d, h) => {
      d.component = g;
      const v = g.vnode.props;
      (g.vnode = d), (g.next = null), s1(g, d.props, v, h), a1(g, d.children, h), xr(), vd(g), Sr();
    },
    Z = (g, d, h, v, _, b, w, C, E = !1) => {
      const S = g && g.children,
        R = g ? g.shapeFlag : 0,
        M = d.children,
        { patchFlag: F, shapeFlag: D } = d;
      if (F > 0) {
        if (F & 128) {
          ke(S, M, h, v, _, b, w, C, E);
          return;
        } else if (F & 256) {
          Ie(S, M, h, v, _, b, w, C, E);
          return;
        }
      }
      D & 8
        ? (R & 16 && fe(S, _, b), M !== S && c(h, M))
        : R & 16
          ? D & 16
            ? ke(S, M, h, v, _, b, w, C, E)
            : fe(S, _, b, !0)
          : (R & 8 && c(h, ''), D & 16 && ne(M, h, v, _, b, w, C, E));
    },
    Ie = (g, d, h, v, _, b, w, C, E) => {
      (g = g || bs), (d = d || bs);
      const S = g.length,
        R = d.length,
        M = Math.min(S, R);
      let F;
      for (F = 0; F < M; F++) {
        const D = (d[F] = E ? sr(d[F]) : fn(d[F]));
        P(g[F], D, h, null, _, b, w, C, E);
      }
      S > R ? fe(g, _, b, !0, !1, M) : ne(d, h, v, _, b, w, C, E, M);
    },
    ke = (g, d, h, v, _, b, w, C, E) => {
      let S = 0;
      const R = d.length;
      let M = g.length - 1,
        F = R - 1;
      for (; S <= M && S <= F; ) {
        const D = g[S],
          U = (d[S] = E ? sr(d[S]) : fn(d[S]));
        if (Vr(D, U)) P(D, U, h, null, _, b, w, C, E);
        else break;
        S++;
      }
      for (; S <= M && S <= F; ) {
        const D = g[M],
          U = (d[F] = E ? sr(d[F]) : fn(d[F]));
        if (Vr(D, U)) P(D, U, h, null, _, b, w, C, E);
        else break;
        M--, F--;
      }
      if (S > M) {
        if (S <= F) {
          const D = F + 1,
            U = D < R ? d[D].el : v;
          for (; S <= F; ) P(null, (d[S] = E ? sr(d[S]) : fn(d[S])), h, U, _, b, w, C, E), S++;
        }
      } else if (S > F) for (; S <= M; ) ue(g[S], _, b, !0), S++;
      else {
        const D = S,
          U = S,
          G = new Map();
        for (S = U; S <= F; S++) {
          const ye = (d[S] = E ? sr(d[S]) : fn(d[S]));
          ye.key != null && G.set(ye.key, S);
        }
        let z,
          ee = 0;
        const ce = F - U + 1;
        let de = !1,
          he = 0;
        const je = new Array(ce);
        for (S = 0; S < ce; S++) je[S] = 0;
        for (S = D; S <= M; S++) {
          const ye = g[S];
          if (ee >= ce) {
            ue(ye, _, b, !0);
            continue;
          }
          let pe;
          if (ye.key != null) pe = G.get(ye.key);
          else
            for (z = U; z <= F; z++)
              if (je[z - U] === 0 && Vr(ye, d[z])) {
                pe = z;
                break;
              }
          pe === void 0
            ? ue(ye, _, b, !0)
            : ((je[pe - U] = S + 1),
              pe >= he ? (he = pe) : (de = !0),
              P(ye, d[pe], h, null, _, b, w, C, E),
              ee++);
        }
        const qt = de ? d1(je) : bs;
        for (z = qt.length - 1, S = ce - 1; S >= 0; S--) {
          const ye = U + S,
            pe = d[ye],
            Je = ye + 1 < R ? d[ye + 1].el : v;
          je[S] === 0
            ? P(null, pe, h, Je, _, b, w, C, E)
            : de && (z < 0 || S !== qt[z] ? _e(pe, h, Je, 2) : z--);
        }
      }
    },
    _e = (g, d, h, v, _ = null) => {
      const { el: b, type: w, transition: C, children: E, shapeFlag: S } = g;
      if (S & 6) {
        _e(g.component.subTree, d, h, v);
        return;
      }
      if (S & 128) {
        g.suspense.move(d, h, v);
        return;
      }
      if (S & 64) {
        w.move(g, d, h, $);
        return;
      }
      if (w === un) {
        r(b, d, h);
        for (let R = 0; R < E.length; R++) _e(E[R], d, h, v);
        r(g.anchor, d, h);
        return;
      }
      if (w === ka) {
        j(g, d, h);
        return;
      }
      if (v !== 2 && S & 1 && C)
        if (v === 0) C.beforeEnter(b), r(b, d, h), xt(() => C.enter(b), _);
        else {
          const { leave: R, delayLeave: M, afterLeave: F } = C,
            D = () => r(b, d, h),
            U = () => {
              R(b, () => {
                D(), F && F();
              });
            };
          M ? M(b, D, U) : U();
        }
      else r(b, d, h);
    },
    ue = (g, d, h, v = !1, _ = !1) => {
      const {
        type: b,
        props: w,
        ref: C,
        children: E,
        dynamicChildren: S,
        shapeFlag: R,
        patchFlag: M,
        dirs: F,
        cacheIndex: D,
      } = g;
      if (
        (M === -2 && (_ = !1),
        C != null && Wi(C, null, h, g, !0),
        D != null && (d.renderCache[D] = void 0),
        R & 256)
      ) {
        d.ctx.deactivate(g);
        return;
      }
      const U = R & 1 && F,
        G = !ho(g);
      let z;
      if ((G && (z = w && w.onVnodeBeforeUnmount) && nn(z, d, g), R & 6)) ht(g.component, h, v);
      else {
        if (R & 128) {
          g.suspense.unmount(h, v);
          return;
        }
        U && Ar(g, null, d, 'beforeUnmount'),
          R & 64
            ? g.type.remove(g, d, h, $, v)
            : S && !S.hasOnce && (b !== un || (M > 0 && M & 64))
              ? fe(S, d, h, !1, !0)
              : ((b === un && M & 384) || (!_ && R & 16)) && fe(E, d, h),
          v && Ue(g);
      }
      ((G && (z = w && w.onVnodeUnmounted)) || U) &&
        xt(() => {
          z && nn(z, d, g), U && Ar(g, null, d, 'unmounted');
        }, h);
    },
    Ue = (g) => {
      const { type: d, el: h, anchor: v, transition: _ } = g;
      if (d === un) {
        qe(h, v);
        return;
      }
      if (d === ka) {
        L(g);
        return;
      }
      const b = () => {
        s(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (g.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: w, delayLeave: C } = _,
          E = () => w(h, b);
        C ? C(g.el, b, E) : E();
      } else b();
    },
    qe = (g, d) => {
      let h;
      for (; g !== d; ) (h = p(g)), s(g), (g = h);
      s(d);
    },
    ht = (g, d, h) => {
      const { bum: v, scope: _, job: b, subTree: w, um: C, m: E, a: S } = g;
      Cd(E),
        Cd(S),
        v && _a(v),
        _.stop(),
        b && ((b.flags |= 8), ue(w, g, d, h)),
        C && xt(C, d),
        xt(() => {
          g.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          g.asyncDep &&
          !g.asyncResolved &&
          g.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    fe = (g, d, h, v = !1, _ = !1, b = 0) => {
      for (let w = b; w < g.length; w++) ue(g[w], d, h, v, _);
    },
    y = (g) => {
      if (g.shapeFlag & 6) return y(g.component.subTree);
      if (g.shapeFlag & 128) return g.suspense.next();
      const d = p(g.anchor || g.el),
        h = d && d[AS];
      return h ? p(h) : d;
    };
  let O = !1;
  const k = (g, d, h) => {
      g == null
        ? d._vnode && ue(d._vnode, null, null, !0)
        : P(d._vnode || null, g, d, null, null, null, h),
        (d._vnode = g),
        O || ((O = !0), vd(), Nm(), (O = !1));
    },
    $ = { p: P, um: ue, m: _e, r: Ue, mt: te, mc: ne, pc: Z, pbc: V, n: y, o: e };
  return { render: k, hydrate: void 0, createApp: n1(k) };
}
function Ca({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n;
}
function Mr({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function f1(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function fv(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (se(r) && se(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = s[o] = sr(s[o])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && fv(i, a)),
        a.type === Ml && (a.el = i.el);
    }
}
function d1(e) {
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
function dv(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : dv(t);
}
function Cd(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const p1 = Symbol.for('v-scx'),
  h1 = () => Bn(p1);
function Pi(e, t, n) {
  return pv(e, t, n);
}
function pv(e, t, n = Re) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    a = He({}, n),
    l = (t && r) || (!t && o !== 'post');
  let f;
  if (qo) {
    if (o === 'sync') {
      const m = h1();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {};
      return (m.stop = mn), (m.resume = mn), (m.pause = mn), m;
    }
  }
  const c = Ke;
  a.call = (m, x, P) => Qt(m, c, x, P);
  let u = !1;
  o === 'post'
    ? (a.scheduler = (m) => {
        xt(m, c && c.suspense);
      })
    : o !== 'sync' &&
      ((u = !0),
      (a.scheduler = (m, x) => {
        x ? m() : Ou(m);
      })),
    (a.augmentJob = (m) => {
      t && (m.flags |= 4), u && ((m.flags |= 2), c && ((m.id = c.uid), (m.i = c)));
    });
  const p = kS(e, t, a);
  return qo && (f ? f.push(p) : l && p()), p;
}
function g1(e, t, n) {
  const r = this.proxy,
    s = Ne(e) ? (e.includes('.') ? hv(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  le(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = ii(this),
    a = pv(s, o.bind(r), n);
  return i(), a;
}
function hv(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const m1 = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Bt(t)}Modifiers`] || e[`${ns(t)}Modifiers`];
function v1(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Re;
  let s = n;
  const o = t.startsWith('update:'),
    i = o && m1(r, t.slice(7));
  i && (i.trim && (s = n.map((c) => (Ne(c) ? c.trim() : c))), i.number && (s = n.map(Wx)));
  let a,
    l = r[(a = va(t))] || r[(a = va(Bt(t)))];
  !l && o && (l = r[(a = va(ns(t)))]), l && Qt(l, e, 6, s);
  const f = r[a + 'Once'];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Qt(f, e, 6, s);
  }
}
function gv(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!le(e)) {
    const l = (f) => {
      const c = gv(f, t, !0);
      c && ((a = !0), He(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? (Fe(e) && r.set(e, null), null)
    : (se(o) ? o.forEach((l) => (i[l] = null)) : He(i, o), Fe(e) && r.set(e, i), i);
}
function Al(e, t) {
  return !e || !bl(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Ee(e, t[0].toLowerCase() + t.slice(1)) || Ee(e, ns(t)) || Ee(e, t));
}
function kd(e) {
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
      data: p,
      setupState: m,
      ctx: x,
      inheritAttrs: P,
    } = e,
    N = Hi(e);
  let I, T;
  try {
    if (n.shapeFlag & 4) {
      const L = s || r,
        q = L;
      (I = fn(f.call(q, L, c, u, m, p, x))), (T = a);
    } else {
      const L = t;
      (I = fn(L.length > 1 ? L(u, { attrs: a, slots: i, emit: l }) : L(u, null))),
        (T = t.props ? a : _1(a));
    }
  } catch (L) {
    (mo.length = 0), Pl(L, e, 1), (I = Lt(mt));
  }
  let j = I;
  if (T && P !== !1) {
    const L = Object.keys(T),
      { shapeFlag: q } = j;
    L.length && q & 7 && (o && L.some(vu) && (T = y1(T, o)), (j = mr(j, T, !1, !0)));
  }
  return (
    n.dirs && ((j = mr(j, null, !1, !0)), (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Bo(j, n.transition),
    (I = j),
    Hi(N),
    I
  );
}
const _1 = (e) => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || bl(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  y1 = (e, t) => {
    const n = {};
    for (const r in e) (!vu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function b1(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: l } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Pd(r, i, f) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const p = c[u];
        if (i[p] !== r[p] && !Al(f, p)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? Pd(r, i, f) : !0) : !!i;
  return !1;
}
function Pd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !Al(n, o)) return !0;
  }
  return !1;
}
function w1({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const mv = (e) => e.__isSuspense;
function x1(e, t) {
  t && t.pendingBranch ? (se(e) ? t.effects.push(...e) : t.effects.push(e)) : OS(e);
}
const un = Symbol.for('v-fgt'),
  Ml = Symbol.for('v-txt'),
  mt = Symbol.for('v-cmt'),
  ka = Symbol.for('v-stc'),
  mo = [];
let Ot = null;
function vv(e = !1) {
  mo.push((Ot = e ? null : []));
}
function S1() {
  mo.pop(), (Ot = mo[mo.length - 1] || null);
}
let Uo = 1;
function Rd(e, t = !1) {
  (Uo += e), e < 0 && Ot && t && (Ot.hasOnce = !0);
}
function _v(e) {
  return (e.dynamicChildren = Uo > 0 ? Ot || bs : null), S1(), Uo > 0 && Ot && Ot.push(e), e;
}
function CL(e, t, n, r, s, o) {
  return _v(wv(e, t, n, r, s, o, !0));
}
function yv(e, t, n, r, s) {
  return _v(Lt(e, t, n, r, s, !0));
}
function Ki(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bv = ({ key: e }) => e ?? null,
  Ri = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (Ne(e) || it(e) || le(e) ? { i: yt, r: e, k: t, f: !!n } : e) : null
  );
function wv(e, t = null, n = null, r = 0, s = null, o = e === un ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bv(t),
    ref: t && Ri(t),
    scopeId: Um,
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
    ctx: yt,
  };
  return (
    a ? (Au(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ne(n) ? 8 : 16),
    Uo > 0 && !i && Ot && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Ot.push(l),
    l
  );
}
const Lt = E1;
function E1(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === KS) && (e = mt), Ki(e))) {
    const a = mr(e, t, !0);
    return (
      n && Au(a, n),
      Uo > 0 && !o && Ot && (a.shapeFlag & 6 ? (Ot[Ot.indexOf(e)] = a) : Ot.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((I1(e) && (e = e.__vccOpts), t)) {
    t = C1(t);
    let { class: a, style: l } = t;
    a && !Ne(a) && (t.class = wu(a)),
      Fe(l) && (Ru(l) && !se(l) && (l = He({}, l)), (t.style = bu(l)));
  }
  const i = Ne(e) ? 1 : mv(e) ? 128 : qm(e) ? 64 : Fe(e) ? 4 : le(e) ? 2 : 0;
  return wv(e, t, n, r, s, i, o, !0);
}
function C1(e) {
  return e ? (Ru(e) || sv(e) ? He({}, e) : e) : null;
}
function mr(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e,
    f = t ? P1(s || {}, t) : s,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && bv(f),
      ref: t && t.ref ? (n && o ? (se(o) ? o.concat(Ri(t)) : [o, Ri(t)]) : Ri(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== un ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && mr(e.ssContent),
      ssFallback: e.ssFallback && mr(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && Bo(c, l.clone(c)), c;
}
function k1(e = ' ', t = 0) {
  return Lt(Ml, null, e, t);
}
function kL(e = '', t = !1) {
  return t ? (vv(), yv(mt, null, e)) : Lt(mt, null, e);
}
function fn(e) {
  return e == null || typeof e == 'boolean'
    ? Lt(mt)
    : se(e)
      ? Lt(un, null, e.slice())
      : Ki(e)
        ? sr(e)
        : Lt(Ml, null, String(e));
}
function sr(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : mr(e);
}
function Au(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (se(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Au(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !sv(t)
        ? (t._ctx = yt)
        : s === 3 && yt && (yt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    le(t)
      ? ((t = { default: t, _ctx: yt }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [k1(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function P1(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === 'class') t.class !== r.class && (t.class = wu([t.class, r.class]));
      else if (s === 'style') t.style = bu([t.style, r.style]);
      else if (bl(s)) {
        const o = t[s],
          i = r[s];
        i && o !== i && !(se(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== '' && (t[s] = r[s]);
  }
  return t;
}
function nn(e, t, n, r = null) {
  Qt(e, t, 7, [n, r]);
}
const R1 = tv();
let O1 = 0;
function L1(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || R1,
    o = {
      uid: O1++,
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
      scope: new eS(!0),
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
      propsOptions: iv(r, s),
      emitsOptions: gv(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Re,
      inheritAttrs: r.inheritAttrs,
      ctx: Re,
      data: Re,
      props: Re,
      attrs: Re,
      slots: Re,
      refs: Re,
      setupState: Re,
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
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = v1.bind(null, o)), e.ce && e.ce(o), o
  );
}
let Ke = null;
const A1 = () => Ke || yt;
let Gi, kc;
{
  const e = El(),
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
  (Gi = t('__VUE_INSTANCE_SETTERS__', (n) => (Ke = n))),
    (kc = t('__VUE_SSR_SETTERS__', (n) => (qo = n)));
}
const ii = (e) => {
    const t = Ke;
    return (
      Gi(e),
      e.scope.on(),
      () => {
        e.scope.off(), Gi(t);
      }
    );
  },
  Od = () => {
    Ke && Ke.scope.off(), Gi(null);
  };
function xv(e) {
  return e.vnode.shapeFlag & 4;
}
let qo = !1;
function M1(e, t = !1, n = !1) {
  t && kc(t);
  const { props: r, children: s } = e.vnode,
    o = xv(e);
  r1(e, r, o, t), l1(e, s, n);
  const i = o ? T1(e, t) : void 0;
  return t && kc(!1), i;
}
function T1(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, JS));
  const { setup: r } = n;
  if (r) {
    xr();
    const s = (e.setupContext = r.length > 1 ? $1(e) : null),
      o = ii(e),
      i = oi(r, e, 0, [e.props, s]),
      a = um(i);
    if ((Sr(), o(), (a || e.sp) && !ho(e) && Gm(e), a)) {
      if ((i.then(Od, Od), t))
        return i
          .then((l) => {
            Ld(e, l);
          })
          .catch((l) => {
            Pl(l, e, 0);
          });
      e.asyncDep = i;
    } else Ld(e, i);
  } else Sv(e);
}
function Ld(e, t, n) {
  le(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Fe(t) && (e.setupState = $m(t)),
    Sv(e);
}
function Sv(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || mn);
  {
    const s = ii(e);
    xr();
    try {
      YS(e);
    } finally {
      Sr(), s();
    }
  }
}
const F1 = {
  get(e, t) {
    return tt(e, 'get', ''), e[t];
  },
};
function $1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, F1), slots: e.slots, emit: e.emit, expose: t };
}
function Tl(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy($m(kl(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in go) return go[n](e);
          },
          has(t, n) {
            return n in t || n in go;
          },
        }))
    : e.proxy;
}
function j1(e, t = !0) {
  return le(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function I1(e) {
  return le(e) && '__vccOpts' in e;
}
const Ht = (e, t) => ES(e, t, qo);
function Mu(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Fe(t) && !se(t)
      ? Ki(t)
        ? Lt(e, null, [t])
        : Lt(e, t)
      : Lt(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Ki(n) && (n = [n]),
      Lt(e, t, n));
}
const D1 = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Pc;
const Ad = typeof window < 'u' && window.trustedTypes;
if (Ad)
  try {
    Pc = Ad.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const Ev = Pc ? (e) => Pc.createHTML(e) : (e) => e,
  N1 = 'http://www.w3.org/2000/svg',
  B1 = 'http://www.w3.org/1998/Math/MathML',
  Ln = typeof document < 'u' ? document : null,
  Md = Ln && Ln.createElement('template'),
  U1 = {
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
          ? Ln.createElementNS(N1, e)
          : t === 'mathml'
            ? Ln.createElementNS(B1, e)
            : n
              ? Ln.createElement(e, { is: n })
              : Ln.createElement(e);
      return e === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple), s;
    },
    createText: (e) => Ln.createTextNode(e),
    createComment: (e) => Ln.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ln.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); );
      else {
        Md.innerHTML = Ev(
          r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e,
        );
        const a = Md.content;
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
  Kn = 'transition',
  Gs = 'animation',
  Vo = Symbol('_vtc'),
  Cv = {
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
  q1 = He({}, Vm, Cv),
  V1 = (e) => ((e.displayName = 'Transition'), (e.props = q1), e),
  PL = V1((e, { slots: t }) => Mu(FS, H1(e), t)),
  Tr = (e, t = []) => {
    se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Td = (e) => (e ? (se(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function H1(e) {
  const t = {};
  for (const A in e) A in Cv || (t[A] = e[A]);
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
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    x = W1(s),
    P = x && x[0],
    N = x && x[1],
    {
      onBeforeEnter: I,
      onEnter: T,
      onEnterCancelled: j,
      onLeave: L,
      onLeaveCancelled: q,
      onBeforeAppear: J = I,
      onAppear: K = T,
      onAppearCancelled: ne = j,
    } = t,
    B = (A, H, te, X) => {
      (A._enterCancelled = X), Fr(A, H ? c : a), Fr(A, H ? f : i), te && te();
    },
    V = (A, H) => {
      (A._isLeaving = !1), Fr(A, u), Fr(A, m), Fr(A, p), H && H();
    },
    Y = (A) => (H, te) => {
      const X = A ? K : T,
        Q = () => B(H, A, te);
      Tr(X, [H, Q]),
        Fd(() => {
          Fr(H, A ? l : o), En(H, A ? c : a), Td(X) || $d(H, r, P, Q);
        });
    };
  return He(t, {
    onBeforeEnter(A) {
      Tr(I, [A]), En(A, o), En(A, i);
    },
    onBeforeAppear(A) {
      Tr(J, [A]), En(A, l), En(A, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(A, H) {
      A._isLeaving = !0;
      const te = () => V(A, H);
      En(A, u),
        A._enterCancelled ? (En(A, p), Dd()) : (Dd(), En(A, p)),
        Fd(() => {
          A._isLeaving && (Fr(A, u), En(A, m), Td(L) || $d(A, r, N, te));
        }),
        Tr(L, [A, te]);
    },
    onEnterCancelled(A) {
      B(A, !1, void 0, !0), Tr(j, [A]);
    },
    onAppearCancelled(A) {
      B(A, !0, void 0, !0), Tr(ne, [A]);
    },
    onLeaveCancelled(A) {
      V(A), Tr(q, [A]);
    },
  });
}
function W1(e) {
  if (e == null) return null;
  if (Fe(e)) return [Pa(e.enter), Pa(e.leave)];
  {
    const t = Pa(e);
    return [t, t];
  }
}
function Pa(e) {
  return zx(e);
}
function En(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Vo] || (e[Vo] = new Set())).add(t);
}
function Fr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Vo];
  n && (n.delete(t), n.size || (e[Vo] = void 0));
}
function Fd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let z1 = 0;
function $d(e, t, n, r) {
  const s = (e._endId = ++z1),
    o = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = K1(e, t);
  if (!i) return r();
  const f = i + 'end';
  let c = 0;
  const u = () => {
      e.removeEventListener(f, p), o();
    },
    p = (m) => {
      m.target === e && ++c >= l && u();
    };
  setTimeout(() => {
    c < l && u();
  }, a + 1),
    e.addEventListener(f, p);
}
function K1(e, t) {
  const n = window.getComputedStyle(e),
    r = (x) => (n[x] || '').split(', '),
    s = r(`${Kn}Delay`),
    o = r(`${Kn}Duration`),
    i = jd(s, o),
    a = r(`${Gs}Delay`),
    l = r(`${Gs}Duration`),
    f = jd(a, l);
  let c = null,
    u = 0,
    p = 0;
  t === Kn
    ? i > 0 && ((c = Kn), (u = i), (p = o.length))
    : t === Gs
      ? f > 0 && ((c = Gs), (u = f), (p = l.length))
      : ((u = Math.max(i, f)),
        (c = u > 0 ? (i > f ? Kn : Gs) : null),
        (p = c ? (c === Kn ? o.length : l.length) : 0));
  const m = c === Kn && /\b(transform|all)(,|$)/.test(r(`${Kn}Property`).toString());
  return { type: c, timeout: u, propCount: p, hasTransform: m };
}
function jd(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Id(n) + Id(e[r])));
}
function Id(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Dd() {
  return document.body.offsetHeight;
}
function G1(e, t, n) {
  const r = e[Vo];
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
const Nd = Symbol('_vod'),
  J1 = Symbol('_vsh'),
  Y1 = Symbol(''),
  Q1 = /(^|;)\s*display\s*:/;
function X1(e, t, n) {
  const r = e.style,
    s = Ne(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (Ne(t))
        for (const i of t.split(';')) {
          const a = i.slice(0, i.indexOf(':')).trim();
          n[a] == null && Oi(r, a, '');
        }
      else for (const i in t) n[i] == null && Oi(r, i, '');
    for (const i in n) i === 'display' && (o = !0), Oi(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[Y1];
      i && (n += ';' + i), (r.cssText = n), (o = Q1.test(n));
    }
  } else t && e.removeAttribute('style');
  Nd in e && ((e[Nd] = o ? r.display : ''), e[J1] && (r.display = 'none'));
}
const Bd = /\s*!important$/;
function Oi(e, t, n) {
  if (se(n)) n.forEach((r) => Oi(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = Z1(e, t);
    Bd.test(n) ? e.setProperty(ns(r), n.replace(Bd, ''), 'important') : (e[r] = n);
  }
}
const Ud = ['Webkit', 'Moz', 'ms'],
  Ra = {};
function Z1(e, t) {
  const n = Ra[t];
  if (n) return n;
  let r = Bt(t);
  if (r !== 'filter' && r in e) return (Ra[t] = r);
  r = Sl(r);
  for (let s = 0; s < Ud.length; s++) {
    const o = Ud[s] + r;
    if (o in e) return (Ra[t] = o);
  }
  return t;
}
const qd = 'http://www.w3.org/1999/xlink';
function Vd(e, t, n, r, s, o = Xx(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(qd, t.slice(6, t.length))
      : e.setAttributeNS(qd, t, n)
    : n == null || (o && !hm(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : wr(n) ? String(n) : n);
}
function Hd(e, t, n, r, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Ev(n) : n);
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
      ? (n = hm(n))
      : n == null && a === 'string'
        ? ((n = ''), (i = !0))
        : a === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function eE(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function tE(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Wd = Symbol('_vei');
function nE(e, t, n, r, s = null) {
  const o = e[Wd] || (e[Wd] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = rE(t);
    if (r) {
      const f = (o[t] = iE(r, s));
      eE(e, a, f, l);
    } else i && (tE(e, a, i, l), (o[t] = void 0));
  }
}
const zd = /(?:Once|Passive|Capture)$/;
function rE(e) {
  let t;
  if (zd.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(zd)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : ns(e.slice(2)), t];
}
let Oa = 0;
const sE = Promise.resolve(),
  oE = () => Oa || (sE.then(() => (Oa = 0)), (Oa = Date.now()));
function iE(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Qt(lE(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = oE()), n;
}
function lE(e, t) {
  if (se(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Kd = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  aE = (e, t, n, r, s, o) => {
    const i = s === 'svg';
    t === 'class'
      ? G1(e, r, i)
      : t === 'style'
        ? X1(e, n, r)
        : bl(t)
          ? vu(t) || nE(e, t, n, r, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : cE(e, t, r, i)
              )
            ? (Hd(e, t, r),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Vd(e, t, r, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !Ne(r))
              ? Hd(e, Bt(t), r, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = r)
                  : t === 'false-value' && (e._falseValue = r),
                Vd(e, t, r, i));
  };
function cE(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Kd(t) && le(n)));
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
  return Kd(t) && Ne(n) ? !1 : t in e;
}
const uE = He({ patchProp: aE }, U1);
let Gd;
function fE() {
  return Gd || (Gd = c1(uE));
}
const dE = (...e) => {
  const t = fE().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = hE(r);
      if (!s) return;
      const o = t._component;
      !le(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = '');
      const i = n(s, !1, pE(s));
      return (
        s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), i
      );
    }),
    t
  );
};
function pE(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function hE(e) {
  return Ne(e) ? document.querySelector(e) : e;
}
function Tu(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: !0 }), e;
}
const Xr = Tm(!1);
let Rc;
function gE(e, t) {
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
function mE(e) {
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
const kv = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0;
function vE(e) {
  const t = e.toLowerCase(),
    n = mE(t),
    r = gE(t, n),
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
      Xr.value === !0 && (Rc = { is: { ...s } }),
      kv === !0 &&
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
const Jd = navigator.userAgent || navigator.vendor || window.opera,
  _E = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  vn = {
    userAgent: Jd,
    is: vE(Jd),
    has: { touch: kv },
    within: { iframe: window.self !== window.top },
  },
  Oc = {
    install(e) {
      const { $q: t } = e;
      Xr.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, vn), (Xr.value = !1);
          }),
          (t.platform = qs(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  Tu(vn.has, 'webStorage', () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Object.assign(Oc, vn),
    Xr.value === !0 && (Object.assign(Oc, Rc, _E), (Rc = null));
}
function RL(e) {
  return kl(Rl(e));
}
function OL(e) {
  return kl(e);
}
const Fl = (e, t) => {
    const n = qs(e);
    for (const r in e)
      Tu(
        t,
        r,
        () => n[r],
        (s) => {
          n[r] = s;
        },
      );
    return t;
  },
  $s = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign($s, {
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
function Ho() {}
function LL(e) {
  return e.button === 0;
}
function AL(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
        ? (e = e.changedTouches[0])
        : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function ML(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === 'HTML')) return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function TL(e) {
  e.stopPropagation();
}
function Yd(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function FL(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function $L(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0), r.addEventListener('dragstart', Yd, $s.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented, r.removeEventListener('dragstart', Yd, $s.notPassiveCapture);
        };
  e.querySelectorAll('a, img').forEach(n);
}
function jL(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((s) => {
      s[0].addEventListener(s[1], e[s[2]], $s[s[3]]);
    });
}
function IL(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], $s[r[3]]);
    }),
    (e[n] = void 0));
}
function yE(e, t = 250, n) {
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
const La = ['sm', 'md', 'lg', 'xl'],
  { passive: Qd } = $s,
  bE = Fl(
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
      setSizes: Ho,
      setDebounce: Ho,
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
            n === void 0 || vn.is.mobile === !0
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
          const [p, m] = o();
          if ((m !== this.height && (this.height = m), p !== this.width)) this.width = p;
          else if (u !== !0) return;
          let x = this.sizes;
          (this.gt.xs = p >= x.sm),
            (this.gt.sm = p >= x.md),
            (this.gt.md = p >= x.lg),
            (this.gt.lg = p >= x.xl),
            (this.lt.sm = p < x.sm),
            (this.lt.md = p < x.md),
            (this.lt.lg = p < x.lg),
            (this.lt.xl = p < x.xl),
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
          La.forEach((p) => {
            u[p] !== void 0 && (l[p] = u[p]);
          });
        }),
          (this.setDebounce = (u) => {
            f = u;
          });
        const c = () => {
          const u = getComputedStyle(document.body);
          u.getPropertyValue('--q-size-sm') &&
            La.forEach((p) => {
              this.sizes[p] = parseInt(u.getPropertyValue(`--q-size-${p}`), 10);
            }),
            (this.setSizes = (p) => {
              La.forEach((m) => {
                p[m] && (this.sizes[m] = p[m]);
              }),
                this.__update(!0);
            }),
            (this.setDebounce = (p) => {
              a !== void 0 && r.removeEventListener('resize', a, Qd),
                (a = p > 0 ? yE(this.__update, p) : this.__update),
                r.addEventListener('resize', a, Qd);
            }),
            this.setDebounce(f),
            Object.keys(l).length !== 0 ? (this.setSizes(l), (l = void 0)) : this.__update(),
            i === !0 && this.name === 'xs' && document.body.classList.add('screen--xs');
        };
        Xr.value === !0 ? t.push(c) : c();
      },
    },
  ),
  Qe = Fl(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (Qe.mode = e),
          e === 'auto'
            ? (Qe.__media === void 0 &&
                ((Qe.__media = window.matchMedia('(prefers-color-scheme: dark)')),
                (Qe.__updateMedia = () => {
                  Qe.set('auto');
                }),
                Qe.__media.addListener(Qe.__updateMedia)),
              (e = Qe.__media.matches))
            : Qe.__media !== void 0 &&
              (Qe.__media.removeListener(Qe.__updateMedia), (Qe.__media = void 0)),
          (Qe.isActive = e === !0),
          document.body.classList.remove(`body--${e === !0 ? 'light' : 'dark'}`),
          document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`);
      },
      toggle() {
        Qe.set(Qe.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const { dark: n } = e.config;
        (e.dark = this), this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
      },
    },
  );
function wE(e, t, n = document.body) {
  if (typeof e != 'string') throw new TypeError('Expected a string as propName');
  if (typeof t != 'string') throw new TypeError('Expected a string as value');
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element');
  n.style.setProperty(`--q-${e}`, t);
}
let Pv = !1;
function xE(e) {
  Pv = e.isComposing === !0;
}
function SE(e) {
  return Pv === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function DL(e, t) {
  return SE(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Rv(e) {
  if (e.ios === !0) return 'ios';
  if (e.android === !0) return 'android';
}
function EE({ is: e, has: t, within: n }, r) {
  const s = [e.desktop === !0 ? 'desktop' : 'mobile', `${t.touch === !1 ? 'no-' : ''}touch`];
  if (e.mobile === !0) {
    const o = Rv(e);
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
function CE() {
  const { is: e } = vn,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, ' ').split(' '));
  if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete('mobile'), n.delete('platform-ios'), n.delete('platform-android'), n.add('desktop');
    else if (e.mobile === !0) {
      n.delete('desktop'), n.add('mobile'), n.delete('platform-ios'), n.delete('platform-android');
      const s = Rv(e);
      s !== void 0 && n.add(`platform-${s}`);
    }
  }
  vn.has.touch === !0 && (n.delete('no-touch'), n.add('touch')),
    vn.within.iframe === !0 && n.add('within-iframe');
  const r = Array.from(n).join(' ');
  t !== r && (document.body.className = r);
}
function kE(e) {
  for (const t in e) wE(t, e[t]);
}
const PE = {
    install(e) {
      if (this.__installed !== !0) {
        if (Xr.value === !0) CE();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && kE(t.config.brand);
          const n = EE(vn, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        vn.is.ios === !0 && document.body.addEventListener('touchstart', Ho),
          window.addEventListener('keydown', xE, !0);
      }
    },
  },
  Ov = () => !0;
function RE(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/';
}
function OE(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substring(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substring(0, e.length - 1)),
    '#' + e
  );
}
function LE(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === '*') return Ov;
  const t = ['#/'];
  return (
    Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(RE).map(OE)),
    () => t.includes(window.location.hash)
  );
}
const AE = {
    __history: [],
    add: Ho,
    remove: Ho,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = vn.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? 'cordova' : 'capacitor'];
      if (
        r?.backButton === !1 ||
        (n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (i) => {
        i.condition === void 0 && (i.condition = Ov), this.__history.push(i);
      }),
        (this.remove = (i) => {
          const a = this.__history.indexOf(i);
          a >= 0 && this.__history.splice(a, 1);
        });
      const s = LE(Object.assign({ backButtonExit: !0 }, r)),
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
  Xd = {
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
function Zd() {
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
const or = Fl(
    { __qLang: {} },
    {
      getLocale: Zd,
      set(e = Xd, t) {
        const n = { ...e, rtl: e.rtl === !0, getLocale: Zd };
        {
          if (
            ((n.set = or.set), or.__langConfig === void 0 || or.__langConfig.noHtmlAttrs !== !0)
          ) {
            const r = document.documentElement;
            r.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'), r.setAttribute('lang', n.isoName);
          }
          Object.assign(or.__qLang, n);
        }
      },
      install({ $q: e, lang: t, ssrContext: n }) {
        (e.lang = or.__qLang),
          (or.__langConfig = e.config.lang),
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
              this.set(t || Xd));
      },
    },
  ),
  ME = {
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
  Ji = Fl(
    { iconMapFn: null, __qIconSet: {} },
    {
      set(e, t) {
        const n = { ...e };
        (n.set = Ji.set), Object.assign(Ji.__qIconSet, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__qIconSet),
          Tu(
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
              this.set(t || ME));
      },
    },
  ),
  TE = '_q_',
  NL = '_q_l_',
  BL = '_q_pc_';
function UL() {}
const ep = {};
let Lv = !1;
function FE() {
  Lv = !0;
}
function tp(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0;
}
const np = [Oc, PE, Qe, bE, AE, or, Ji];
function rp(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function $E(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(TE, n.$q),
    rp(n, np),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        tp(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        tp(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      rp(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == 'function' && np.includes(r) === !1,
        ),
      ),
    Xr.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
const jE = function (e, t = {}) {
    const n = { version: '2.18.1' };
    Lv === !1
      ? (t.config !== void 0 && Object.assign(ep, t.config), (n.config = { ...ep }), FE())
      : (n.config = t.config || {}),
      $E(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
  },
  IE = { name: 'Quasar', version: '2.18.1', install: jE, lang: or, iconSet: Ji },
  DE = Rl({
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const r = zS('router-view');
        return vv(), yv(r);
      };
    },
  }),
  NE = (e) => e,
  BE = NE;
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const us = typeof document < 'u';
function Av(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function UE(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Av(e.default));
}
const we = Object.assign;
function Aa(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Xt(s) ? s.map(e) : e(s);
  }
  return n;
}
const vo = () => {},
  Xt = Array.isArray,
  Mv = /#/g,
  qE = /&/g,
  VE = /\//g,
  HE = /=/g,
  WE = /\?/g,
  Tv = /\+/g,
  zE = /%5B/g,
  KE = /%5D/g,
  Fv = /%5E/g,
  GE = /%60/g,
  $v = /%7B/g,
  JE = /%7C/g,
  jv = /%7D/g,
  YE = /%20/g;
function Fu(e) {
  return encodeURI('' + e)
    .replace(JE, '|')
    .replace(zE, '[')
    .replace(KE, ']');
}
function QE(e) {
  return Fu(e).replace($v, '{').replace(jv, '}').replace(Fv, '^');
}
function Lc(e) {
  return Fu(e)
    .replace(Tv, '%2B')
    .replace(YE, '+')
    .replace(Mv, '%23')
    .replace(qE, '%26')
    .replace(GE, '`')
    .replace($v, '{')
    .replace(jv, '}')
    .replace(Fv, '^');
}
function XE(e) {
  return Lc(e).replace(HE, '%3D');
}
function ZE(e) {
  return Fu(e).replace(Mv, '%23').replace(WE, '%3F');
}
function eC(e) {
  return e == null ? '' : ZE(e).replace(VE, '%2F');
}
function Wo(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const tC = /\/$/,
  nC = (e) => e.replace(tC, '');
function Ma(e, t, n = '/') {
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
    (r = iC(r ?? t, n)),
    { fullPath: r + (o && '?') + o + i, path: r, query: s, hash: Wo(i) }
  );
}
function rC(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function sp(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function sC(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    js(t.matched[r], n.matched[s]) &&
    Iv(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function js(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Iv(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!oC(e[n], t[n])) return !1;
  return !0;
}
function oC(e, t) {
  return Xt(e) ? op(e, t) : Xt(t) ? op(t, e) : e === t;
}
function op(e, t) {
  return Xt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function iC(e, t) {
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
const Gn = {
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
var zo;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(zo || (zo = {}));
var _o;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(_o || (_o = {}));
function lC(e) {
  if (!e)
    if (us) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), nC(e);
}
const aC = /^[^#]+#/;
function cC(e, t) {
  return e.replace(aC, '#') + t;
}
function uC(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const $l = () => ({ left: window.scrollX, top: window.scrollY });
function fC(e) {
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
    t = uC(s, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function ip(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ac = new Map();
function dC(e, t) {
  Ac.set(e, t);
}
function pC(e) {
  const t = Ac.get(e);
  return Ac.delete(e), t;
}
let hC = () => location.protocol + '//' + location.host;
function Dv(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#');
  if (o > -1) {
    let i = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      a = s.slice(i);
    return a[0] !== '/' && (a = '/' + a), sp(a, '');
  }
  return sp(n, e) + r + s;
}
function gC(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: p }) => {
    const m = Dv(e, location),
      x = n.value,
      P = t.value;
    let N = 0;
    if (p) {
      if (((n.value = m), (t.value = p), i && i === x)) {
        i = null;
        return;
      }
      N = P ? p.position - P.position : 0;
    } else r(m);
    s.forEach((I) => {
      I(n.value, x, {
        delta: N,
        type: zo.pop,
        direction: N ? (N > 0 ? _o.forward : _o.back) : _o.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(p) {
    s.push(p);
    const m = () => {
      const x = s.indexOf(p);
      x > -1 && s.splice(x, 1);
    };
    return o.push(m), m;
  }
  function c() {
    const { history: p } = window;
    p.state && p.replaceState(we({}, p.state, { scroll: $l() }), '');
  }
  function u() {
    for (const p of o) p();
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
function lp(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? $l() : null,
  };
}
function mC(e) {
  const { history: t, location: n } = window,
    r = { value: Dv(e, n) },
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
      p = u > -1 ? (n.host && document.querySelector('base') ? e : e.slice(u)) + l : hC() + e + l;
    try {
      t[c ? 'replaceState' : 'pushState'](f, '', p), (s.value = f);
    } catch (m) {
      console.error(m), n[c ? 'replace' : 'assign'](p);
    }
  }
  function i(l, f) {
    const c = we({}, t.state, lp(s.value.back, l, s.value.forward, !0), f, {
      position: s.value.position,
    });
    o(l, c, !0), (r.value = l);
  }
  function a(l, f) {
    const c = we({}, s.value, t.state, { forward: l, scroll: $l() });
    o(c.current, c, !0);
    const u = we({}, lp(r.value, l, null), { position: c.position + 1 }, f);
    o(l, u, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: i };
}
function vC(e) {
  e = lC(e);
  const t = mC(e),
    n = gC(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = we({ location: '', base: e, go: r, createHref: cC.bind(null, e) }, t, n);
  return (
    Object.defineProperty(s, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, 'state', { enumerable: !0, get: () => t.state.value }),
    s
  );
}
function _C(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    vC(e)
  );
}
function yC(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function Nv(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const Bv = Symbol('');
var ap;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(ap || (ap = {}));
function Is(e, t) {
  return we(new Error(), { type: e, [Bv]: !0 }, t);
}
function Cn(e, t) {
  return e instanceof Error && Bv in e && (t == null || !!(e.type & t));
}
const cp = '[^/]+?',
  bC = { sensitive: !1, strict: !1, start: !0, end: !0 },
  wC = /[.+*?^${}()[\]/\\]/g;
function xC(e, t) {
  const n = we({}, bC, t),
    r = [];
  let s = n.start ? '^' : '';
  const o = [];
  for (const f of e) {
    const c = f.length ? [] : [90];
    n.strict && !f.length && (s += '/');
    for (let u = 0; u < f.length; u++) {
      const p = f[u];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0) u || (s += '/'), (s += p.value.replace(wC, '\\$&')), (m += 40);
      else if (p.type === 1) {
        const { value: x, repeatable: P, optional: N, regexp: I } = p;
        o.push({ name: x, repeatable: P, optional: N });
        const T = I || cp;
        if (T !== cp) {
          m += 10;
          try {
            new RegExp(`(${T})`);
          } catch (L) {
            throw new Error(`Invalid custom RegExp for param "${x}" (${T}): ` + L.message);
          }
        }
        let j = P ? `((?:${T})(?:/(?:${T}))*)` : `(${T})`;
        u || (j = N && f.length < 2 ? `(?:/${j})` : '/' + j),
          N && (j += '?'),
          (s += j),
          (m += 20),
          N && (m += -8),
          P && (m += -20),
          T === '.*' && (m += -50);
      }
      c.push(m);
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
    for (let p = 1; p < c.length; p++) {
      const m = c[p] || '',
        x = o[p - 1];
      u[x.name] = m && x.repeatable ? m.split('/') : m;
    }
    return u;
  }
  function l(f) {
    let c = '',
      u = !1;
    for (const p of e) {
      (!u || !c.endsWith('/')) && (c += '/'), (u = !1);
      for (const m of p)
        if (m.type === 0) c += m.value;
        else if (m.type === 1) {
          const { value: x, repeatable: P, optional: N } = m,
            I = x in f ? f[x] : '';
          if (Xt(I) && !P)
            throw new Error(
              `Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const T = Xt(I) ? I.join('/') : I;
          if (!T)
            if (N) p.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (u = !0));
            else throw new Error(`Missing required param "${x}"`);
          c += T;
        }
    }
    return c || '/';
  }
  return { re: i, score: r, keys: o, parse: a, stringify: l };
}
function SC(e, t) {
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
function Uv(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = SC(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (up(r)) return 1;
    if (up(s)) return -1;
  }
  return s.length - r.length;
}
function up(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const EC = { type: 0, value: '' },
  CC = /[a-zA-Z0-9_]/;
function kC(e) {
  if (!e) return [[]];
  if (e === '/') return [[EC]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${f}": ${m}`);
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
  function p() {
    f += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === '/' ? (f && u(), i()) : l === ':' ? (u(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = r);
        break;
      case 1:
        l === '('
          ? (n = 2)
          : CC.test(l)
            ? p()
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
function PC(e, t, n) {
  const r = xC(kC(e.path), n),
    s = we(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function RC(e, t) {
  const n = [],
    r = new Map();
  t = hp({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(u) {
    return r.get(u);
  }
  function o(u, p, m) {
    const x = !m,
      P = dp(u);
    P.aliasOf = m && m.record;
    const N = hp(t, u),
      I = [P];
    if ('alias' in u) {
      const L = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const q of L)
        I.push(
          dp(
            we({}, P, {
              components: m ? m.record.components : P.components,
              path: q,
              aliasOf: m ? m.record : P,
            }),
          ),
        );
    }
    let T, j;
    for (const L of I) {
      const { path: q } = L;
      if (p && q[0] !== '/') {
        const J = p.record.path,
          K = J[J.length - 1] === '/' ? '' : '/';
        L.path = p.record.path + (q && K + q);
      }
      if (
        ((T = PC(L, p, N)),
        m
          ? m.alias.push(T)
          : ((j = j || T), j !== T && j.alias.push(T), x && u.name && !pp(T) && i(u.name)),
        qv(T) && l(T),
        P.children)
      ) {
        const J = P.children;
        for (let K = 0; K < J.length; K++) o(J[K], T, m && m.children[K]);
      }
      m = m || T;
    }
    return j
      ? () => {
          i(j);
        }
      : vo;
  }
  function i(u) {
    if (Nv(u)) {
      const p = r.get(u);
      p && (r.delete(u), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i));
    } else {
      const p = n.indexOf(u);
      p > -1 &&
        (n.splice(p, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    const p = AC(u, n);
    n.splice(p, 0, u), u.record.name && !pp(u) && r.set(u.record.name, u);
  }
  function f(u, p) {
    let m,
      x = {},
      P,
      N;
    if ('name' in u && u.name) {
      if (((m = r.get(u.name)), !m)) throw Is(1, { location: u });
      (N = m.record.name),
        (x = we(
          fp(
            p.params,
            m.keys
              .filter((j) => !j.optional)
              .concat(m.parent ? m.parent.keys.filter((j) => j.optional) : [])
              .map((j) => j.name),
          ),
          u.params &&
            fp(
              u.params,
              m.keys.map((j) => j.name),
            ),
        )),
        (P = m.stringify(x));
    } else if (u.path != null)
      (P = u.path), (m = n.find((j) => j.re.test(P))), m && ((x = m.parse(P)), (N = m.record.name));
    else {
      if (((m = p.name ? r.get(p.name) : n.find((j) => j.re.test(p.path))), !m))
        throw Is(1, { location: u, currentLocation: p });
      (N = m.record.name), (x = we({}, p.params, u.params)), (P = m.stringify(x));
    }
    const I = [];
    let T = m;
    for (; T; ) I.unshift(T.record), (T = T.parent);
    return { name: N, path: P, params: x, matched: I, meta: LC(I) };
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
function fp(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function dp(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: OC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
  return Object.defineProperty(t, 'mods', { value: {} }), t;
}
function OC(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n;
  return t;
}
function pp(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function LC(e) {
  return e.reduce((t, n) => we(t, n.meta), {});
}
function hp(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function AC(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const o = (n + r) >> 1;
    Uv(e, t[o]) < 0 ? (r = o) : (n = o + 1);
  }
  const s = MC(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function MC(e) {
  let t = e;
  for (; (t = t.parent); ) if (qv(t) && Uv(e, t) === 0) return t;
}
function qv({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function TC(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const n = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(Tv, ' '),
      o = s.indexOf('='),
      i = Wo(o < 0 ? s : s.slice(0, o)),
      a = o < 0 ? null : Wo(s.slice(o + 1));
    if (i in t) {
      let l = t[i];
      Xt(l) || (l = t[i] = [l]), l.push(a);
    } else t[i] = a;
  }
  return t;
}
function gp(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = XE(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (Xt(r) ? r.map((s) => s && Lc(s)) : [r && Lc(r)]).forEach((s) => {
      s !== void 0 && ((t += (t.length ? '&' : '') + n), s != null && (t += '=' + s));
    });
  }
  return t;
}
function FC(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Xt(r) ? r.map((s) => (s == null ? null : '' + s)) : r == null ? r : '' + r);
  }
  return t;
}
const $C = Symbol(''),
  mp = Symbol(''),
  $u = Symbol(''),
  Vv = Symbol(''),
  Mc = Symbol('');
function Js() {
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
function ir(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const f = (p) => {
          p === !1
            ? l(Is(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : yC(p)
                ? l(Is(2, { from: t, to: p }))
                : (i && r.enterCallbacks[s] === i && typeof p == 'function' && i.push(p), a());
        },
        c = o(() => e.call(r && r.instances[s], t, n, f));
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(f)), u.catch((p) => l(p));
    });
}
function Ta(e, t, n, r, s = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
        if (Av(l)) {
          const f = (l.__vccOpts || l)[t];
          f && o.push(ir(f, n, r, i, a, s));
        } else {
          let f = l();
          o.push(() =>
            f.then((c) => {
              if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
              const u = UE(c) ? c.default : c;
              (i.mods[a] = c), (i.components[a] = u);
              const p = (u.__vccOpts || u)[t];
              return p && ir(p, n, r, i, a, s)();
            }),
          );
        }
    }
  return o;
}
function vp(e) {
  const t = Bn($u),
    n = Bn(Vv),
    r = Ht(() => {
      const l = Ss(e.to);
      return t.resolve(l);
    }),
    s = Ht(() => {
      const { matched: l } = r.value,
        { length: f } = l,
        c = l[f - 1],
        u = n.matched;
      if (!c || !u.length) return -1;
      const p = u.findIndex(js.bind(null, c));
      if (p > -1) return p;
      const m = _p(l[f - 2]);
      return f > 1 && _p(c) === m && u[u.length - 1].path !== m
        ? u.findIndex(js.bind(null, l[f - 2]))
        : p;
    }),
    o = Ht(() => s.value > -1 && BC(n.params, r.value.params)),
    i = Ht(() => s.value > -1 && s.value === n.matched.length - 1 && Iv(n.params, r.value.params));
  function a(l = {}) {
    if (NC(l)) {
      const f = t[Ss(e.replace) ? 'replace' : 'push'](Ss(e.to)).catch(vo);
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
  return { route: r, href: Ht(() => r.value.href), isActive: o, isExactActive: i, navigate: a };
}
function jC(e) {
  return e.length === 1 ? e[0] : e;
}
const IC = Rl({
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
    useLink: vp,
    setup(e, { slots: t }) {
      const n = qs(vp(e)),
        { options: r } = Bn($u),
        s = Ht(() => ({
          [yp(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [yp(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }));
      return () => {
        const o = t.default && jC(t.default(n));
        return e.custom
          ? o
          : Mu(
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
  DC = IC;
function NC(e) {
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
function BC(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == 'string') {
      if (r !== s) return !1;
    } else if (!Xt(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1;
  }
  return !0;
}
function _p(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const yp = (e, t, n) => e ?? t ?? n,
  UC = Rl({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Bn(Mc),
        s = Ht(() => e.route || r.value),
        o = Bn(mp, 0),
        i = Ht(() => {
          let f = Ss(o);
          const { matched: c } = s.value;
          let u;
          for (; (u = c[f]) && !u.components; ) f++;
          return f;
        }),
        a = Ht(() => s.value.matched[i.value]);
      ki(
        mp,
        Ht(() => i.value + 1),
      ),
        ki($C, a),
        ki(Mc, s);
      const l = Tm();
      return (
        Pi(
          () => [l.value, a.value, e.name],
          ([f, c, u], [p, m, x]) => {
            c &&
              ((c.instances[u] = f),
              m &&
                m !== c &&
                f &&
                f === p &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              f && c && (!m || !js(c, m) || !p) && (c.enterCallbacks[u] || []).forEach((P) => P(f));
          },
          { flush: 'post' },
        ),
        () => {
          const f = s.value,
            c = e.name,
            u = a.value,
            p = u && u.components[c];
          if (!p) return bp(n.default, { Component: p, route: f });
          const m = u.props[c],
            x = m ? (m === !0 ? f.params : typeof m == 'function' ? m(f) : m) : null,
            P = Mu(
              p,
              we({}, x, t, {
                onVnodeUnmounted: (N) => {
                  N.component.isUnmounted && (u.instances[c] = null);
                },
                ref: l,
              }),
            );
          return bp(n.default, { Component: P, route: f }) || P;
        }
      );
    },
  });
function bp(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const qC = UC;
function VC(e) {
  const t = RC(e.routes, e),
    n = e.parseQuery || TC,
    r = e.stringifyQuery || gp,
    s = e.history,
    o = Js(),
    i = Js(),
    a = Js(),
    l = bS(Gn);
  let f = Gn;
  us &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = Aa.bind(null, (y) => '' + y),
    u = Aa.bind(null, eC),
    p = Aa.bind(null, Wo);
  function m(y, O) {
    let k, $;
    return Nv(y) ? ((k = t.getRecordMatcher(y)), ($ = O)) : ($ = y), t.addRoute($, k);
  }
  function x(y) {
    const O = t.getRecordMatcher(y);
    O && t.removeRoute(O);
  }
  function P() {
    return t.getRoutes().map((y) => y.record);
  }
  function N(y) {
    return !!t.getRecordMatcher(y);
  }
  function I(y, O) {
    if (((O = we({}, O || l.value)), typeof y == 'string')) {
      const v = Ma(n, y, O.path),
        _ = t.resolve({ path: v.path }, O),
        b = s.createHref(v.fullPath);
      return we(v, _, { params: p(_.params), hash: Wo(v.hash), redirectedFrom: void 0, href: b });
    }
    let k;
    if (y.path != null) k = we({}, y, { path: Ma(n, y.path, O.path).path });
    else {
      const v = we({}, y.params);
      for (const _ in v) v[_] == null && delete v[_];
      (k = we({}, y, { params: u(v) })), (O.params = u(O.params));
    }
    const $ = t.resolve(k, O),
      g = y.hash || '';
    $.params = c(p($.params));
    const d = rC(r, we({}, y, { hash: QE(g), path: $.path })),
      h = s.createHref(d);
    return we({ fullPath: d, hash: g, query: r === gp ? FC(y.query) : y.query || {} }, $, {
      redirectedFrom: void 0,
      href: h,
    });
  }
  function T(y) {
    return typeof y == 'string' ? Ma(n, y, l.value.path) : we({}, y);
  }
  function j(y, O) {
    if (f !== y) return Is(8, { from: O, to: y });
  }
  function L(y) {
    return K(y);
  }
  function q(y) {
    return L(we(T(y), { replace: !0 }));
  }
  function J(y) {
    const O = y.matched[y.matched.length - 1];
    if (O && O.redirect) {
      const { redirect: k } = O;
      let $ = typeof k == 'function' ? k(y) : k;
      return (
        typeof $ == 'string' &&
          (($ = $.includes('?') || $.includes('#') ? ($ = T($)) : { path: $ }), ($.params = {})),
        we({ query: y.query, hash: y.hash, params: $.path != null ? {} : y.params }, $)
      );
    }
  }
  function K(y, O) {
    const k = (f = I(y)),
      $ = l.value,
      g = y.state,
      d = y.force,
      h = y.replace === !0,
      v = J(k);
    if (v)
      return K(
        we(T(v), { state: typeof v == 'object' ? we({}, g, v.state) : g, force: d, replace: h }),
        O || k,
      );
    const _ = k;
    _.redirectedFrom = O;
    let b;
    return (
      !d && sC(r, $, k) && ((b = Is(16, { to: _, from: $ })), _e($, $, !0, !1)),
      (b ? Promise.resolve(b) : V(_, $))
        .catch((w) => (Cn(w) ? (Cn(w, 2) ? w : ke(w)) : Z(w, _, $)))
        .then((w) => {
          if (w) {
            if (Cn(w, 2))
              return K(
                we({ replace: h }, T(w.to), {
                  state: typeof w.to == 'object' ? we({}, g, w.to.state) : g,
                  force: d,
                }),
                O || _,
              );
          } else w = A(_, $, !0, h, g);
          return Y(_, $, w), w;
        })
    );
  }
  function ne(y, O) {
    const k = j(y, O);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function B(y) {
    const O = qe.values().next().value;
    return O && typeof O.runWithContext == 'function' ? O.runWithContext(y) : y();
  }
  function V(y, O) {
    let k;
    const [$, g, d] = HC(y, O);
    k = Ta($.reverse(), 'beforeRouteLeave', y, O);
    for (const v of $)
      v.leaveGuards.forEach((_) => {
        k.push(ir(_, y, O));
      });
    const h = ne.bind(null, y, O);
    return (
      k.push(h),
      fe(k)
        .then(() => {
          k = [];
          for (const v of o.list()) k.push(ir(v, y, O));
          return k.push(h), fe(k);
        })
        .then(() => {
          k = Ta(g, 'beforeRouteUpdate', y, O);
          for (const v of g)
            v.updateGuards.forEach((_) => {
              k.push(ir(_, y, O));
            });
          return k.push(h), fe(k);
        })
        .then(() => {
          k = [];
          for (const v of d)
            if (v.beforeEnter)
              if (Xt(v.beforeEnter)) for (const _ of v.beforeEnter) k.push(ir(_, y, O));
              else k.push(ir(v.beforeEnter, y, O));
          return k.push(h), fe(k);
        })
        .then(
          () => (
            y.matched.forEach((v) => (v.enterCallbacks = {})),
            (k = Ta(d, 'beforeRouteEnter', y, O, B)),
            k.push(h),
            fe(k)
          ),
        )
        .then(() => {
          k = [];
          for (const v of i.list()) k.push(ir(v, y, O));
          return k.push(h), fe(k);
        })
        .catch((v) => (Cn(v, 8) ? v : Promise.reject(v)))
    );
  }
  function Y(y, O, k) {
    a.list().forEach(($) => B(() => $(y, O, k)));
  }
  function A(y, O, k, $, g) {
    const d = j(y, O);
    if (d) return d;
    const h = O === Gn,
      v = us ? history.state : {};
    k &&
      ($ || h
        ? s.replace(y.fullPath, we({ scroll: h && v && v.scroll }, g))
        : s.push(y.fullPath, g)),
      (l.value = y),
      _e(y, O, k, h),
      ke();
  }
  let H;
  function te() {
    H ||
      (H = s.listen((y, O, k) => {
        if (!ht.listening) return;
        const $ = I(y),
          g = J($);
        if (g) {
          K(we(g, { replace: !0, force: !0 }), $).catch(vo);
          return;
        }
        f = $;
        const d = l.value;
        us && dC(ip(d.fullPath, k.delta), $l()),
          V($, d)
            .catch((h) =>
              Cn(h, 12)
                ? h
                : Cn(h, 2)
                  ? (K(we(T(h.to), { force: !0 }), $)
                      .then((v) => {
                        Cn(v, 20) && !k.delta && k.type === zo.pop && s.go(-1, !1);
                      })
                      .catch(vo),
                    Promise.reject())
                  : (k.delta && s.go(-k.delta, !1), Z(h, $, d)),
            )
            .then((h) => {
              (h = h || A($, d, !1)),
                h &&
                  (k.delta && !Cn(h, 8)
                    ? s.go(-k.delta, !1)
                    : k.type === zo.pop && Cn(h, 20) && s.go(-1, !1)),
                Y($, d, h);
            })
            .catch(vo);
      }));
  }
  let X = Js(),
    Q = Js(),
    W;
  function Z(y, O, k) {
    ke(y);
    const $ = Q.list();
    return $.length ? $.forEach((g) => g(y, O, k)) : console.error(y), Promise.reject(y);
  }
  function Ie() {
    return W && l.value !== Gn
      ? Promise.resolve()
      : new Promise((y, O) => {
          X.add([y, O]);
        });
  }
  function ke(y) {
    return W || ((W = !y), te(), X.list().forEach(([O, k]) => (y ? k(y) : O())), X.reset()), y;
  }
  function _e(y, O, k, $) {
    const { scrollBehavior: g } = e;
    if (!us || !g) return Promise.resolve();
    const d =
      (!k && pC(ip(y.fullPath, 0))) || (($ || !k) && history.state && history.state.scroll) || null;
    return Im()
      .then(() => g(y, O, d))
      .then((h) => h && fC(h))
      .catch((h) => Z(h, y, O));
  }
  const ue = (y) => s.go(y);
  let Ue;
  const qe = new Set(),
    ht = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: x,
      clearRoutes: t.clearRoutes,
      hasRoute: N,
      getRoutes: P,
      resolve: I,
      options: e,
      push: L,
      replace: q,
      go: ue,
      back: () => ue(-1),
      forward: () => ue(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: Q.add,
      isReady: Ie,
      install(y) {
        const O = this;
        y.component('RouterLink', DC),
          y.component('RouterView', qC),
          (y.config.globalProperties.$router = O),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Ss(l),
          }),
          us && !Ue && l.value === Gn && ((Ue = !0), L(s.location).catch((g) => {}));
        const k = {};
        for (const g in Gn) Object.defineProperty(k, g, { get: () => l.value[g], enumerable: !0 });
        y.provide($u, O), y.provide(Vv, Am(k)), y.provide(Mc, l);
        const $ = y.unmount;
        qe.add(y),
          (y.unmount = function () {
            qe.delete(y),
              qe.size < 1 && ((f = Gn), H && H(), (H = null), (l.value = Gn), (Ue = !1), (W = !1)),
              $();
          });
      },
    };
  function fe(y) {
    return y.reduce((O, k) => O.then(() => B(k)), Promise.resolve());
  }
  return ht;
}
function HC(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => js(f, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((f) => js(f, l)) || s.push(l));
  }
  return [n, r, s];
}
const WC = [
    {
      path: '/',
      component: () =>
        ps(
          () => Dn(() => import('./MainLayout-DunN4qTH-BGTMGCdJ.js'), __vite__mapDeps([5, 6, 7])),
          Wr([5, 6, 7]),
        ),
      children: [
        {
          path: '',
          component: () =>
            ps(
              () => Dn(() => import('./IndexPage-CbNSDBIq-B5sv6rQ1.js'), __vite__mapDeps([8, 7])),
              Wr([8, 7, 9]),
            ),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () =>
        ps(
          () =>
            Dn(() => import('./ErrorNotFound-BgBGnwSB-CBGFNyMe.js'), __vite__mapDeps([9, 6, 7])),
          Wr([10, 6, 7]),
        ),
    },
  ],
  Fa = BE(function () {
    return VC({ scrollBehavior: () => ({ left: 0, top: 0 }), routes: WC, history: _C('/') });
  });
async function zC(e, t) {
  const n = e(DE);
  n.use(IE, t);
  const r = kl(typeof Fa == 'function' ? await Fa({}) : Fa);
  return { app: n, router: r };
}
const KC = { config: {} };
async function GC({ app: e, router: t }) {
  e.use(t), e.mount('#q-app');
}
zC(dE, KC).then(GC);
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ju(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const Oe = {},
  ks = [],
  _n = () => {},
  JC = () => !1,
  jl = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Iu = (e) => e.startsWith('onUpdate:'),
  We = Object.assign,
  Du = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  YC = Object.prototype.hasOwnProperty,
  Ce = (e, t) => YC.call(e, t),
  oe = Array.isArray,
  Ps = (e) => Il(e) === '[object Map]',
  Hv = (e) => Il(e) === '[object Set]',
  ae = (e) => typeof e == 'function',
  Be = (e) => typeof e == 'string',
  Er = (e) => typeof e == 'symbol',
  $e = (e) => e !== null && typeof e == 'object',
  Wv = (e) => ($e(e) || ae(e)) && ae(e.then) && ae(e.catch),
  zv = Object.prototype.toString,
  Il = (e) => zv.call(e),
  QC = (e) => Il(e).slice(8, -1),
  Kv = (e) => Il(e) === '[object Object]',
  Nu = (e) => Be(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  yo = ju(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Dl = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  XC = /-(\w)/g,
  Ut = Dl((e) => e.replace(XC, (t, n) => (n ? n.toUpperCase() : ''))),
  ZC = /\B([A-Z])/g,
  rs = Dl((e) => e.replace(ZC, '-$1').toLowerCase()),
  Nl = Dl((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  $a = Dl((e) => (e ? `on${Nl(e)}` : '')),
  hr = (e, t) => !Object.is(e, t),
  ja = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Gv = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n });
  },
  ek = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  tk = (e) => {
    const t = Be(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let wp;
const Bl = () =>
  wp ||
  (wp =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function Bu(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Be(r) ? ok(r) : Bu(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (Be(e) || $e(e)) return e;
}
const nk = /;(?![^(]*\))/g,
  rk = /:([^]+)/,
  sk = /\/\*[^]*?\*\//g;
function ok(e) {
  const t = {};
  return (
    e
      .replace(sk, '')
      .split(nk)
      .forEach((n) => {
        if (n) {
          const r = n.split(rk);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Uu(e) {
  let t = '';
  if (Be(e)) t = e;
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const r = Uu(e[n]);
      r && (t += r + ' ');
    }
  else if ($e(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const ik = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  lk = ju(ik);
function Jv(e) {
  return !!e || e === '';
}
const Yv = (e) => !!(e && e.__v_isRef === !0),
  ak = (e) =>
    Be(e)
      ? e
      : e == null
        ? ''
        : oe(e) || ($e(e) && (e.toString === zv || !ae(e.toString)))
          ? Yv(e)
            ? ak(e.value)
            : JSON.stringify(e, Qv, 2)
          : String(e),
  Qv = (e, t) =>
    Yv(t)
      ? Qv(e, t.value)
      : Ps(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], o) => ((n[Ia(r, o) + ' =>'] = s), n),
              {},
            ),
          }
        : Hv(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ia(n)) }
          : Er(t)
            ? Ia(t)
            : $e(t) && !oe(t) && !Kv(t)
              ? String(t)
              : t,
  Ia = (e, t = '') => {
    var n;
    return Er(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let kt;
class ck {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = kt),
      !t && kt && (this.index = (kt.scopes || (kt.scopes = [])).push(this) - 1);
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
      const n = kt;
      try {
        return (kt = this), t();
      } finally {
        kt = n;
      }
    }
  }
  on() {
    kt = this;
  }
  off() {
    kt = this.parent;
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
function uk() {
  return kt;
}
let Me;
const Da = new WeakSet();
class Xv {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      kt && kt.active && kt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), Da.has(this) && (Da.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || e_(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), xp(this), t_(this);
    const t = Me,
      n = Gt;
    (Me = this), (Gt = !0);
    try {
      return this.fn();
    } finally {
      n_(this), (Me = t), (Gt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Hu(t);
      (this.deps = this.depsTail = void 0),
        xp(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64 ? Da.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Tc(this) && this.run();
  }
  get dirty() {
    return Tc(this);
  }
}
let Zv = 0,
  bo,
  wo;
function e_(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = wo), (wo = e);
    return;
  }
  (e.next = bo), (bo = e);
}
function qu() {
  Zv++;
}
function Vu() {
  if (--Zv > 0) return;
  if (wo) {
    let t = wo;
    for (wo = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; bo; ) {
    let t = bo;
    for (bo = void 0; t; ) {
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
function t_(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t);
}
function n_(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Hu(r), fk(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function Tc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (r_(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function r_(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Ko)) return;
  e.globalVersion = Ko;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Tc(e))) {
    e.flags &= -3;
    return;
  }
  const n = Me,
    r = Gt;
  (Me = e), (Gt = !0);
  try {
    t_(e);
    const s = e.fn(e._value);
    (t.version === 0 || hr(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (Me = n), (Gt = r), n_(e), (e.flags &= -3);
  }
}
function Hu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Hu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function fk(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Gt = !0;
const s_ = [];
function Cr() {
  s_.push(Gt), (Gt = !1);
}
function kr() {
  const e = s_.pop();
  Gt = e === void 0 ? !0 : e;
}
function xp(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Me;
    Me = void 0;
    try {
      t();
    } finally {
      Me = n;
    }
  }
}
let Ko = 0;
class dk {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
  }
}
class Wu {
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
    if (!Me || !Gt || Me === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Me)
      (n = this.activeLink = new dk(Me, this)),
        Me.deps
          ? ((n.prevDep = Me.depsTail), (Me.depsTail.nextDep = n), (Me.depsTail = n))
          : (Me.deps = Me.depsTail = n),
        o_(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Me.depsTail),
        (n.nextDep = void 0),
        (Me.depsTail.nextDep = n),
        (Me.depsTail = n),
        Me.deps === n && (Me.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ko++, this.notify(t);
  }
  notify(t) {
    qu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Vu();
    }
  }
}
function o_(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) o_(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Fc = new WeakMap(),
  Gr = Symbol(''),
  $c = Symbol(''),
  Go = Symbol('');
function rt(e, t, n) {
  if (Gt && Me) {
    let r = Fc.get(e);
    r || Fc.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new Wu())), (s.map = r), (s.key = n)), s.track();
  }
}
function jn(e, t, n, r, s, o) {
  const i = Fc.get(e);
  if (!i) {
    Ko++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((qu(), t === 'clear')) i.forEach(a);
  else {
    const l = oe(e),
      f = l && Nu(n);
    if (l && n === 'length') {
      const c = Number(r);
      i.forEach((u, p) => {
        (p === 'length' || p === Go || (!Er(p) && p >= c)) && a(u);
      });
    } else
      switch (((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Go)), t)) {
        case 'add':
          l ? f && a(i.get('length')) : (a(i.get(Gr)), Ps(e) && a(i.get($c)));
          break;
        case 'delete':
          l || (a(i.get(Gr)), Ps(e) && a(i.get($c)));
          break;
        case 'set':
          Ps(e) && a(i.get(Gr));
          break;
      }
  }
  Vu();
}
function is(e) {
  const t = ve(e);
  return t === e ? t : (rt(t, 'iterate', Go), Dt(e) ? t : t.map(st));
}
function Ul(e) {
  return rt((e = ve(e)), 'iterate', Go), e;
}
const pk = {
  __proto__: null,
  [Symbol.iterator]() {
    return Na(this, Symbol.iterator, st);
  },
  concat(...e) {
    return is(this).concat(...e.map((t) => (oe(t) ? is(t) : t)));
  },
  entries() {
    return Na(this, 'entries', (e) => ((e[1] = st(e[1])), e));
  },
  every(e, t) {
    return kn(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return kn(this, 'filter', e, t, (n) => n.map(st), arguments);
  },
  find(e, t) {
    return kn(this, 'find', e, t, st, arguments);
  },
  findIndex(e, t) {
    return kn(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return kn(this, 'findLast', e, t, st, arguments);
  },
  findLastIndex(e, t) {
    return kn(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return kn(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return Ba(this, 'includes', e);
  },
  indexOf(...e) {
    return Ba(this, 'indexOf', e);
  },
  join(e) {
    return is(this).join(e);
  },
  lastIndexOf(...e) {
    return Ba(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return kn(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return Ys(this, 'pop');
  },
  push(...e) {
    return Ys(this, 'push', e);
  },
  reduce(e, ...t) {
    return Sp(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return Sp(this, 'reduceRight', e, t);
  },
  shift() {
    return Ys(this, 'shift');
  },
  some(e, t) {
    return kn(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return Ys(this, 'splice', e);
  },
  toReversed() {
    return is(this).toReversed();
  },
  toSorted(e) {
    return is(this).toSorted(e);
  },
  toSpliced(...e) {
    return is(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ys(this, 'unshift', e);
  },
  values() {
    return Na(this, 'values', st);
  },
};
function Na(e, t, n) {
  const r = Ul(e),
    s = r[t]();
  return (
    r !== e &&
      !Dt(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const hk = Array.prototype;
function kn(e, t, n, r, s, o) {
  const i = Ul(e),
    a = i !== e && !Dt(e),
    l = i[t];
  if (l !== hk[t]) {
    const u = l.apply(e, o);
    return a ? st(u) : u;
  }
  let f = n;
  i !== e &&
    (a
      ? (f = function (u, p) {
          return n.call(this, st(u), p, e);
        })
      : n.length > 2 &&
        (f = function (u, p) {
          return n.call(this, u, p, e);
        }));
  const c = l.call(i, f, r);
  return a && s ? s(c) : c;
}
function Sp(e, t, n, r) {
  const s = Ul(e);
  let o = n;
  return (
    s !== e &&
      (Dt(e)
        ? n.length > 3 &&
          (o = function (i, a, l) {
            return n.call(this, i, a, l, e);
          })
        : (o = function (i, a, l) {
            return n.call(this, i, st(a), l, e);
          })),
    s[t](o, ...r)
  );
}
function Ba(e, t, n) {
  const r = ve(e);
  rt(r, 'iterate', Go);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Gu(n[0]) ? ((n[0] = ve(n[0])), r[t](...n)) : s;
}
function Ys(e, t, n = []) {
  Cr(), qu();
  const r = ve(e)[t].apply(e, n);
  return Vu(), kr(), r;
}
const gk = ju('__proto__,__v_isRef,__isVue'),
  i_ = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Er),
  );
function mk(e) {
  Er(e) || (e = String(e));
  const t = ve(this);
  return rt(t, 'has', e), t.hasOwnProperty(e);
}
class l_ {
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
      return r === (s ? (o ? kk : f_) : o ? u_ : c_).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = oe(t);
    if (!s) {
      let l;
      if (i && (l = pk[n])) return l;
      if (n === 'hasOwnProperty') return mk;
    }
    const a = Reflect.get(t, n, lt(t) ? t : r);
    return (Er(n) ? i_.has(n) : gk(n)) || (s || rt(t, 'get', n), o)
      ? a
      : lt(a)
        ? i && Nu(n)
          ? a
          : a.value
        : $e(a)
          ? s
            ? p_(a)
            : Vs(a)
          : a;
  }
}
class a_ extends l_ {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Zr(o);
      if ((!Dt(r) && !Zr(r) && ((o = ve(o)), (r = ve(r))), !oe(t) && lt(o) && !lt(r)))
        return l ? !1 : ((o.value = r), !0);
    }
    const i = oe(t) && Nu(n) ? Number(n) < t.length : Ce(t, n),
      a = Reflect.set(t, n, r, lt(t) ? t : s);
    return t === ve(s) && (i ? hr(r, o) && jn(t, 'set', n, r) : jn(t, 'add', n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Ce(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && jn(t, 'delete', n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Er(n) || !i_.has(n)) && rt(t, 'has', n), r;
  }
  ownKeys(t) {
    return rt(t, 'iterate', oe(t) ? 'length' : Gr), Reflect.ownKeys(t);
  }
}
class vk extends l_ {
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
const _k = new a_(),
  yk = new vk(),
  bk = new a_(!0);
const jc = (e) => e,
  vi = (e) => Reflect.getPrototypeOf(e);
function wk(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = ve(s),
      i = Ps(o),
      a = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      f = s[e](...r),
      c = n ? jc : t ? Ic : st;
    return (
      !t && rt(o, 'iterate', l ? $c : Gr),
      {
        next() {
          const { value: u, done: p } = f.next();
          return p ? { value: u, done: p } : { value: a ? [c(u[0]), c(u[1])] : c(u), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function _i(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function xk(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw,
        i = ve(o),
        a = ve(s);
      e || (hr(s, a) && rt(i, 'get', s), rt(i, 'get', a));
      const { has: l } = vi(i),
        f = t ? jc : e ? Ic : st;
      if (l.call(i, s)) return f(o.get(s));
      if (l.call(i, a)) return f(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && rt(ve(s), 'iterate', Gr), Reflect.get(s, 'size', s);
    },
    has(s) {
      const o = this.__v_raw,
        i = ve(o),
        a = ve(s);
      return (
        e || (hr(s, a) && rt(i, 'has', s), rt(i, 'has', a)),
        s === a ? o.has(s) : o.has(s) || o.has(a)
      );
    },
    forEach(s, o) {
      const i = this,
        a = i.__v_raw,
        l = ve(a),
        f = t ? jc : e ? Ic : st;
      return !e && rt(l, 'iterate', Gr), a.forEach((c, u) => s.call(o, f(c), f(u), i));
    },
  };
  return (
    We(
      n,
      e
        ? { add: _i('add'), set: _i('set'), delete: _i('delete'), clear: _i('clear') }
        : {
            add(s) {
              !t && !Dt(s) && !Zr(s) && (s = ve(s));
              const o = ve(this);
              return vi(o).has.call(o, s) || (o.add(s), jn(o, 'add', s, s)), this;
            },
            set(s, o) {
              !t && !Dt(o) && !Zr(o) && (o = ve(o));
              const i = ve(this),
                { has: a, get: l } = vi(i);
              let f = a.call(i, s);
              f || ((s = ve(s)), (f = a.call(i, s)));
              const c = l.call(i, s);
              return i.set(s, o), f ? hr(o, c) && jn(i, 'set', s, o) : jn(i, 'add', s, o), this;
            },
            delete(s) {
              const o = ve(this),
                { has: i, get: a } = vi(o);
              let l = i.call(o, s);
              l || ((s = ve(s)), (l = i.call(o, s))), a && a.call(o, s);
              const f = o.delete(s);
              return l && jn(o, 'delete', s, void 0), f;
            },
            clear() {
              const s = ve(this),
                o = s.size !== 0,
                i = s.clear();
              return o && jn(s, 'clear', void 0, void 0), i;
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((s) => {
      n[s] = wk(s, e, t);
    }),
    n
  );
}
function zu(e, t) {
  const n = xk(e, t);
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
          ? r
          : Reflect.get(Ce(n, s) && s in r ? n : r, s, o);
}
const Sk = { get: zu(!1, !1) },
  Ek = { get: zu(!1, !0) },
  Ck = { get: zu(!0, !1) };
const c_ = new WeakMap(),
  u_ = new WeakMap(),
  f_ = new WeakMap(),
  kk = new WeakMap();
function Pk(e) {
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
function Rk(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Pk(QC(e));
}
function Vs(e) {
  return Zr(e) ? e : Ku(e, !1, _k, Sk, c_);
}
function d_(e) {
  return Ku(e, !1, bk, Ek, u_);
}
function p_(e) {
  return Ku(e, !0, yk, Ck, f_);
}
function Ku(e, t, n, r, s) {
  if (!$e(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Rk(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function Rs(e) {
  return Zr(e) ? Rs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Zr(e) {
  return !!(e && e.__v_isReadonly);
}
function Dt(e) {
  return !!(e && e.__v_isShallow);
}
function Gu(e) {
  return e ? !!e.__v_raw : !1;
}
function ve(e) {
  const t = e && e.__v_raw;
  return t ? ve(t) : e;
}
function ql(e) {
  return !Ce(e, '__v_skip') && Object.isExtensible(e) && Gv(e, '__v_skip', !0), e;
}
const st = (e) => ($e(e) ? Vs(e) : e),
  Ic = (e) => ($e(e) ? p_(e) : e);
function lt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function h_(e) {
  return g_(e, !1);
}
function Ok(e) {
  return g_(e, !0);
}
function g_(e, t) {
  return lt(e) ? e : new Lk(e, t);
}
class Lk {
  constructor(t, n) {
    (this.dep = new Wu()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : ve(t)),
      (this._value = n ? t : st(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Dt(t) || Zr(t);
    (t = r ? t : ve(t)),
      hr(t, n) && ((this._rawValue = t), (this._value = r ? t : st(t)), this.dep.trigger());
  }
}
function Os(e) {
  return lt(e) ? e.value : e;
}
const Ak = {
  get: (e, t, n) => (t === '__v_raw' ? e : Os(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return lt(s) && !lt(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function m_(e) {
  return Rs(e) ? e : new Proxy(e, Ak);
}
class Mk {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Wu(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Ko - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Me !== this)) return e_(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return r_(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Tk(e, t, n = !1) {
  let r, s;
  return ae(e) ? (r = e) : ((r = e.get), (s = e.set)), new Mk(r, s, n);
}
const yi = {},
  Yi = new WeakMap();
let Ur;
function Fk(e, t = !1, n = Ur) {
  if (n) {
    let r = Yi.get(n);
    r || Yi.set(n, (r = [])), r.push(e);
  }
}
function $k(e, t, n = Oe) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n,
    f = (L) => (s ? L : Dt(L) || s === !1 || s === 0 ? In(L, 1) : In(L));
  let c,
    u,
    p,
    m,
    x = !1,
    P = !1;
  if (
    (lt(e)
      ? ((u = () => e.value), (x = Dt(e)))
      : Rs(e)
        ? ((u = () => f(e)), (x = !0))
        : oe(e)
          ? ((P = !0),
            (x = e.some((L) => Rs(L) || Dt(L))),
            (u = () =>
              e.map((L) => {
                if (lt(L)) return L.value;
                if (Rs(L)) return f(L);
                if (ae(L)) return l ? l(L, 2) : L();
              })))
          : ae(e)
            ? t
              ? (u = l ? () => l(e, 2) : e)
              : (u = () => {
                  if (p) {
                    Cr();
                    try {
                      p();
                    } finally {
                      kr();
                    }
                  }
                  const L = Ur;
                  Ur = c;
                  try {
                    return l ? l(e, 3, [m]) : e(m);
                  } finally {
                    Ur = L;
                  }
                })
            : (u = _n),
    t && s)
  ) {
    const L = u,
      q = s === !0 ? 1 / 0 : s;
    u = () => In(L(), q);
  }
  const N = uk(),
    I = () => {
      c.stop(), N && N.active && Du(N.effects, c);
    };
  if (o && t) {
    const L = t;
    t = (...q) => {
      L(...q), I();
    };
  }
  let T = P ? new Array(e.length).fill(yi) : yi;
  const j = (L) => {
    if (!(!(c.flags & 1) || (!c.dirty && !L)))
      if (t) {
        const q = c.run();
        if (s || x || (P ? q.some((J, K) => hr(J, T[K])) : hr(q, T))) {
          p && p();
          const J = Ur;
          Ur = c;
          try {
            const K = [q, T === yi ? void 0 : P && T[0] === yi ? [] : T, m];
            l ? l(t, 3, K) : t(...K), (T = q);
          } finally {
            Ur = J;
          }
        }
      } else c.run();
  };
  return (
    a && a(j),
    (c = new Xv(u)),
    (c.scheduler = i ? () => i(j, !1) : j),
    (m = (L) => Fk(L, !1, c)),
    (p = c.onStop =
      () => {
        const L = Yi.get(c);
        if (L) {
          if (l) l(L, 4);
          else for (const q of L) q();
          Yi.delete(c);
        }
      }),
    t ? (r ? j(!0) : (T = c.run())) : i ? i(j.bind(null, !0), !0) : c.run(),
    (I.pause = c.pause.bind(c)),
    (I.resume = c.resume.bind(c)),
    (I.stop = I),
    I
  );
}
function In(e, t = 1 / 0, n) {
  if (t <= 0 || !$e(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, lt(e))) In(e.value, t, n);
  else if (oe(e)) for (let r = 0; r < e.length; r++) In(e[r], t, n);
  else if (Hv(e) || Ps(e))
    e.forEach((r) => {
      In(r, t, n);
    });
  else if (Kv(e)) {
    for (const r in e) In(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && In(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function li(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Vl(s, t, n);
  }
}
function Zt(e, t, n, r) {
  if (ae(e)) {
    const s = li(e, t, n, r);
    return (
      s &&
        Wv(s) &&
        s.catch((o) => {
          Vl(o, t, n);
        }),
      s
    );
  }
  if (oe(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Zt(e[o], t, n, r));
    return s;
  }
}
function Vl(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || Oe;
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
      Cr(), li(o, null, 10, [e, l, f]), kr();
      return;
    }
  }
  jk(e, n, s, r, i);
}
function jk(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const pt = [];
let ln = -1;
const Ls = [];
let lr = null,
  fs = 0;
const v_ = Promise.resolve();
let Qi = null;
function __(e) {
  const t = Qi || v_;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ik(e) {
  let t = ln + 1,
    n = pt.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = pt[r],
      o = Jo(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Ju(e) {
  if (!(e.flags & 1)) {
    const t = Jo(e),
      n = pt[pt.length - 1];
    !n || (!(e.flags & 2) && t >= Jo(n)) ? pt.push(e) : pt.splice(Ik(t), 0, e),
      (e.flags |= 1),
      y_();
  }
}
function y_() {
  Qi || (Qi = v_.then(w_));
}
function Dk(e) {
  oe(e)
    ? Ls.push(...e)
    : lr && e.id === -1
      ? lr.splice(fs + 1, 0, e)
      : e.flags & 1 || (Ls.push(e), (e.flags |= 1)),
    y_();
}
function Ep(e, t, n = ln + 1) {
  for (; n < pt.length; n++) {
    const r = pt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      pt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function b_(e) {
  if (Ls.length) {
    const t = [...new Set(Ls)].sort((n, r) => Jo(n) - Jo(r));
    if (((Ls.length = 0), lr)) {
      lr.push(...t);
      return;
    }
    for (lr = t, fs = 0; fs < lr.length; fs++) {
      const n = lr[fs];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (lr = null), (fs = 0);
  }
}
const Jo = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function w_(e) {
  try {
    for (ln = 0; ln < pt.length; ln++) {
      const t = pt[ln];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), li(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ln < pt.length; ln++) {
      const t = pt[ln];
      t && (t.flags &= -2);
    }
    (ln = -1), (pt.length = 0), b_(), (Qi = null), (pt.length || Ls.length) && w_();
  }
}
let bt = null,
  x_ = null;
function Xi(e) {
  const t = bt;
  return (bt = e), (x_ = (e && e.type.__scopeId) || null), t;
}
function Nk(e, t = bt, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && $p(-1);
    const o = Xi(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Xi(o), r._d && $p(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function qL(e, t) {
  if (bt === null) return e;
  const n = Jl(bt),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = Oe] = t[s];
    o &&
      (ae(o) && (o = { mounted: o, updated: o }),
      o.deep && In(i),
      r.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function $r(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (Cr(), Zt(l, n, 8, [e.el, a, e, t]), kr());
  }
}
const Bk = Symbol('_vte'),
  S_ = (e) => e.__isTeleport,
  ar = Symbol('_leaveCb'),
  bi = Symbol('_enterCb');
function Uk() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    A_(() => {
      e.isMounted = !0;
    }),
    M_(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const $t = [Function, Array],
  E_ = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: $t,
    onEnter: $t,
    onAfterEnter: $t,
    onEnterCancelled: $t,
    onBeforeLeave: $t,
    onLeave: $t,
    onAfterLeave: $t,
    onLeaveCancelled: $t,
    onBeforeAppear: $t,
    onAppear: $t,
    onAfterAppear: $t,
    onAppearCancelled: $t,
  },
  C_ = (e) => {
    const t = e.subTree;
    return t.component ? C_(t.component) : t;
  },
  qk = {
    name: 'BaseTransition',
    props: E_,
    setup(e, { slots: t }) {
      const n = BP(),
        r = Uk();
      return () => {
        const s = t.default && R_(t.default(), !0);
        if (!s || !s.length) return;
        const o = k_(s),
          i = ve(e),
          { mode: a } = i;
        if (r.isLeaving) return Ua(o);
        const l = Cp(o);
        if (!l) return Ua(o);
        let f = Dc(l, i, r, n, (u) => (f = u));
        l.type !== vt && Yo(l, f);
        let c = n.subTree && Cp(n.subTree);
        if (c && c.type !== vt && !Hr(l, c) && C_(n).type !== vt) {
          let u = Dc(c, i, r, n);
          if ((Yo(c, u), a === 'out-in' && l.type !== vt))
            return (
              (r.isLeaving = !0),
              (u.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete u.afterLeave,
                  (c = void 0);
              }),
              Ua(o)
            );
          a === 'in-out' && l.type !== vt
            ? (u.delayLeave = (p, m, x) => {
                const P = P_(r, c);
                (P[String(c.key)] = c),
                  (p[ar] = () => {
                    m(), (p[ar] = void 0), delete f.delayedLeave, (c = void 0);
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
function k_(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== vt) {
        t = n;
        break;
      }
  }
  return t;
}
const Vk = qk;
function P_(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Dc(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: f,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: p,
      onLeave: m,
      onAfterLeave: x,
      onLeaveCancelled: P,
      onBeforeAppear: N,
      onAppear: I,
      onAfterAppear: T,
      onAppearCancelled: j,
    } = t,
    L = String(e.key),
    q = P_(n, e),
    J = (B, V) => {
      B && Zt(B, r, 9, V);
    },
    K = (B, V) => {
      const Y = V[1];
      J(B, V), oe(B) ? B.every((A) => A.length <= 1) && Y() : B.length <= 1 && Y();
    },
    ne = {
      mode: i,
      persisted: a,
      beforeEnter(B) {
        let V = l;
        if (!n.isMounted)
          if (o) V = N || l;
          else return;
        B[ar] && B[ar](!0);
        const Y = q[L];
        Y && Hr(e, Y) && Y.el[ar] && Y.el[ar](), J(V, [B]);
      },
      enter(B) {
        let V = f,
          Y = c,
          A = u;
        if (!n.isMounted)
          if (o) (V = I || f), (Y = T || c), (A = j || u);
          else return;
        let H = !1;
        const te = (B[bi] = (X) => {
          H ||
            ((H = !0),
            X ? J(A, [B]) : J(Y, [B]),
            ne.delayedLeave && ne.delayedLeave(),
            (B[bi] = void 0));
        });
        V ? K(V, [B, te]) : te();
      },
      leave(B, V) {
        const Y = String(e.key);
        if ((B[bi] && B[bi](!0), n.isUnmounting)) return V();
        J(p, [B]);
        let A = !1;
        const H = (B[ar] = (te) => {
          A ||
            ((A = !0),
            V(),
            te ? J(P, [B]) : J(x, [B]),
            (B[ar] = void 0),
            q[Y] === e && delete q[Y]);
        });
        (q[Y] = e), m ? K(m, [B, H]) : H();
      },
      clone(B) {
        const V = Dc(B, t, n, r, s);
        return s && s(V), V;
      },
    };
  return ne;
}
function Ua(e) {
  if (Wl(e)) return (e = vr(e)), (e.children = null), e;
}
function Cp(e) {
  if (!Wl(e)) return S_(e.type) && e.children ? k_(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ae(n.default)) return n.default();
  }
}
function Yo(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Yo(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function R_(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === dn
      ? (i.patchFlag & 128 && s++, (r = r.concat(R_(i.children, t, a))))
      : (t || i.type !== vt) && r.push(a != null ? vr(i, { key: a }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function Hl(e, t) {
  return ae(e) ? We({ name: e.name }, t, { setup: e }) : e;
}
function O_(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function Zi(e, t, n, r, s = !1) {
  if (oe(e)) {
    e.forEach((x, P) => Zi(x, t && (oe(t) ? t[P] : t), n, r, s));
    return;
  }
  if (xo(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      Zi(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Jl(r.component) : r.el,
    i = s ? null : o,
    { i: a, r: l } = e,
    f = t && t.r,
    c = a.refs === Oe ? (a.refs = {}) : a.refs,
    u = a.setupState,
    p = ve(u),
    m = u === Oe ? () => !1 : (x) => Ce(p, x);
  if (
    (f != null &&
      f !== l &&
      (Be(f) ? ((c[f] = null), m(f) && (u[f] = null)) : lt(f) && (f.value = null)),
    ae(l))
  )
    li(l, a, 12, [i, c]);
  else {
    const x = Be(l),
      P = lt(l);
    if (x || P) {
      const N = () => {
        if (e.f) {
          const I = x ? (m(l) ? u[l] : c[l]) : l.value;
          s
            ? oe(I) && Du(I, o)
            : oe(I)
              ? I.includes(o) || I.push(o)
              : x
                ? ((c[l] = [o]), m(l) && (u[l] = c[l]))
                : ((l.value = [o]), e.k && (c[e.k] = l.value));
        } else x ? ((c[l] = i), m(l) && (u[l] = i)) : P && ((l.value = i), e.k && (c[e.k] = i));
      };
      i ? ((N.id = -1), St(N, n)) : N();
    }
  }
}
Bl().requestIdleCallback;
Bl().cancelIdleCallback;
const xo = (e) => !!e.type.__asyncLoader,
  Wl = (e) => e.type.__isKeepAlive;
function Hk(e, t) {
  L_(e, 'a', t);
}
function Wk(e, t) {
  L_(e, 'da', t);
}
function L_(e, t, n = Ge) {
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
  if ((zl(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; ) Wl(s.parent.vnode) && zk(r, t, n, s), (s = s.parent);
  }
}
function zk(e, t, n, r) {
  const s = zl(t, e, r, !0);
  T_(() => {
    Du(r[t], s);
  }, n);
}
function zl(e, t, n = Ge, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          Cr();
          const a = ai(n),
            l = Zt(t, n, e, i);
          return a(), kr(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Hn =
    (e) =>
    (t, n = Ge) => {
      (!Xo || e === 'sp') && zl(e, (...r) => t(...r), n);
    },
  Kk = Hn('bm'),
  A_ = Hn('m'),
  Gk = Hn('bu'),
  Jk = Hn('u'),
  M_ = Hn('bum'),
  T_ = Hn('um'),
  Yk = Hn('sp'),
  Qk = Hn('rtg'),
  Xk = Hn('rtc');
function Zk(e, t = Ge) {
  zl('ec', e, t);
}
const eP = 'components';
function tP(e, t) {
  return rP(eP, e, !0, t) || e;
}
const nP = Symbol.for('v-ndc');
function rP(e, t, n = !0, r = !1) {
  const s = bt || Ge;
  if (s) {
    const o = s.type;
    {
      const a = WP(o, !1);
      if (a && (a === t || a === Ut(t) || a === Nl(Ut(t)))) return o;
    }
    const i = kp(s[e] || o[e], t) || kp(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function kp(e, t) {
  return e && (e[t] || e[Ut(t)] || e[Nl(Ut(t))]);
}
function VL(e, t, n, r) {
  let s;
  const o = n,
    i = oe(e);
  if (i || Be(e)) {
    const a = i && Rs(e);
    let l = !1;
    a && ((l = !Dt(e)), (e = Ul(e))), (s = new Array(e.length));
    for (let f = 0, c = e.length; f < c; f++) s[f] = t(l ? st(e[f]) : e[f], f, void 0, o);
  } else if (typeof e == 'number') {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o);
  } else if ($e(e))
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
const Nc = (e) => (e ? (ry(e) ? Jl(e) : Nc(e.parent)) : null),
  So = We(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Nc(e.parent),
    $root: (e) => Nc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $_(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Ju(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = __.bind(e.proxy)),
    $watch: (e) => EP.bind(e),
  }),
  qa = (e, t) => e !== Oe && !e.__isScriptSetup && Ce(e, t),
  sP = {
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
        const m = i[t];
        if (m !== void 0)
          switch (m) {
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
          if (qa(r, t)) return (i[t] = 1), r[t];
          if (s !== Oe && Ce(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && Ce(f, t)) return (i[t] = 3), o[t];
          if (n !== Oe && Ce(n, t)) return (i[t] = 4), n[t];
          Bc && (i[t] = 0);
        }
      }
      const c = So[t];
      let u, p;
      if (c) return t === '$attrs' && rt(e.attrs, 'get', ''), c(e);
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== Oe && Ce(n, t)) return (i[t] = 4), n[t];
      if (((p = l.config.globalProperties), Ce(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return qa(s, t)
        ? ((s[t] = n), !0)
        : r !== Oe && Ce(r, t)
          ? ((r[t] = n), !0)
          : Ce(e.props, t) || (t[0] === '$' && t.slice(1) in e)
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
        (e !== Oe && Ce(e, i)) ||
        qa(t, i) ||
        ((a = o[0]) && Ce(a, i)) ||
        Ce(r, i) ||
        Ce(So, i) ||
        Ce(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Ce(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Pp(e) {
  return oe(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Bc = !0;
function oP(e) {
  const t = $_(e),
    n = e.proxy,
    r = e.ctx;
  (Bc = !1), t.beforeCreate && Rp(t.beforeCreate, e, 'bc');
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    created: c,
    beforeMount: u,
    mounted: p,
    beforeUpdate: m,
    updated: x,
    activated: P,
    deactivated: N,
    beforeDestroy: I,
    beforeUnmount: T,
    destroyed: j,
    unmounted: L,
    render: q,
    renderTracked: J,
    renderTriggered: K,
    errorCaptured: ne,
    serverPrefetch: B,
    expose: V,
    inheritAttrs: Y,
    components: A,
    directives: H,
    filters: te,
  } = t;
  if ((f && iP(f, r, null), i))
    for (const W in i) {
      const Z = i[W];
      ae(Z) && (r[W] = Z.bind(n));
    }
  if (s) {
    const W = s.call(n, n);
    $e(W) && (e.data = Vs(W));
  }
  if (((Bc = !0), o))
    for (const W in o) {
      const Z = o[W],
        Ie = ae(Z) ? Z.bind(n, n) : ae(Z.get) ? Z.get.bind(n, n) : _n,
        ke = !ae(Z) && ae(Z.set) ? Z.set.bind(n) : _n,
        _e = Wt({ get: Ie, set: ke });
      Object.defineProperty(r, W, {
        enumerable: !0,
        configurable: !0,
        get: () => _e.value,
        set: (ue) => (_e.value = ue),
      });
    }
  if (a) for (const W in a) F_(a[W], r, n, W);
  if (l) {
    const W = ae(l) ? l.call(n) : l;
    Reflect.ownKeys(W).forEach((Z) => {
      Li(Z, W[Z]);
    });
  }
  c && Rp(c, e, 'c');
  function Q(W, Z) {
    oe(Z) ? Z.forEach((Ie) => W(Ie.bind(n))) : Z && W(Z.bind(n));
  }
  if (
    (Q(Kk, u),
    Q(A_, p),
    Q(Gk, m),
    Q(Jk, x),
    Q(Hk, P),
    Q(Wk, N),
    Q(Zk, ne),
    Q(Xk, J),
    Q(Qk, K),
    Q(M_, T),
    Q(T_, L),
    Q(Yk, B),
    oe(V))
  )
    if (V.length) {
      const W = e.exposed || (e.exposed = {});
      V.forEach((Z) => {
        Object.defineProperty(W, Z, { get: () => n[Z], set: (Ie) => (n[Z] = Ie) });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === _n && (e.render = q),
    Y != null && (e.inheritAttrs = Y),
    A && (e.components = A),
    H && (e.directives = H),
    B && O_(e);
}
function iP(e, t, n = _n) {
  oe(e) && (e = Uc(e));
  for (const r in e) {
    const s = e[r];
    let o;
    $e(s)
      ? 'default' in s
        ? (o = Un(s.from || r, s.default, !0))
        : (o = Un(s.from || r))
      : (o = Un(s)),
      lt(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function Rp(e, t, n) {
  Zt(oe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function F_(e, t, n, r) {
  let s = r.includes('.') ? J_(n, r) : () => n[r];
  if (Be(e)) {
    const o = t[e];
    ae(o) && Ai(s, o);
  } else if (ae(e)) Ai(s, e.bind(n));
  else if ($e(e))
    if (oe(e)) e.forEach((o) => F_(o, t, n, r));
    else {
      const o = ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      ae(o) && Ai(s, o, e);
    }
}
function $_(e) {
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
        : ((l = {}), s.length && s.forEach((f) => el(l, f, i, !0)), el(l, t, i)),
    $e(t) && o.set(t, l),
    l
  );
}
function el(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && el(e, o, n, !0), s && s.forEach((i) => el(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const a = lP[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const lP = {
  data: Op,
  props: Lp,
  emits: Lp,
  methods: to,
  computed: to,
  beforeCreate: ut,
  created: ut,
  beforeMount: ut,
  mounted: ut,
  beforeUpdate: ut,
  updated: ut,
  beforeDestroy: ut,
  beforeUnmount: ut,
  destroyed: ut,
  unmounted: ut,
  activated: ut,
  deactivated: ut,
  errorCaptured: ut,
  serverPrefetch: ut,
  components: to,
  directives: to,
  watch: cP,
  provide: Op,
  inject: aP,
};
function Op(e, t) {
  return t
    ? e
      ? function () {
          return We(ae(e) ? e.call(this, this) : e, ae(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function aP(e, t) {
  return to(Uc(e), Uc(t));
}
function Uc(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ut(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function to(e, t) {
  return e ? We(Object.create(null), e, t) : t;
}
function Lp(e, t) {
  return e
    ? oe(e) && oe(t)
      ? [...new Set([...e, ...t])]
      : We(Object.create(null), Pp(e), Pp(t ?? {}))
    : t;
}
function cP(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = We(Object.create(null), e);
  for (const r in t) n[r] = ut(e[r], t[r]);
  return n;
}
function j_() {
  return {
    app: null,
    config: {
      isNativeTag: JC,
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
let uP = 0;
function fP(e, t) {
  return function (r, s = null) {
    ae(r) || (r = We({}, r)), s != null && !$e(s) && (s = null);
    const o = j_(),
      i = new WeakSet(),
      a = [];
    let l = !1;
    const f = (o.app = {
      _uid: uP++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: KP,
      get config() {
        return o.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          i.has(c) ||
            (c && ae(c.install) ? (i.add(c), c.install(f, ...u)) : ae(c) && (i.add(c), c(f, ...u))),
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
      mount(c, u, p) {
        if (!l) {
          const m = f._ceVNode || Mt(r, s);
          return (
            (m.appContext = o),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            e(m, c, p),
            (l = !0),
            (f._container = c),
            (c.__vue_app__ = f),
            Jl(m.component)
          );
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (Zt(a, f._instance, 16), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(c, u) {
        return (o.provides[c] = u), f;
      },
      runWithContext(c) {
        const u = As;
        As = f;
        try {
          return c();
        } finally {
          As = u;
        }
      },
    });
    return f;
  };
}
let As = null;
function Li(e, t) {
  if (Ge) {
    let n = Ge.provides;
    const r = Ge.parent && Ge.parent.provides;
    r === n && (n = Ge.provides = Object.create(r)), (n[e] = t);
  }
}
function Un(e, t, n = !1) {
  const r = Ge || bt;
  if (r || As) {
    const s = As
      ? As._context.provides
      : r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ae(t) ? t.call(r && r.proxy) : t;
  }
}
const I_ = {},
  D_ = () => Object.create(I_),
  N_ = (e) => Object.getPrototypeOf(e) === I_;
function dP(e, t, n, r = !1) {
  const s = {},
    o = D_();
  (e.propsDefaults = Object.create(null)), B_(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : d_(s)) : e.type.props ? (e.props = s) : (e.props = o), (e.attrs = o);
}
function pP(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = ve(s),
    [l] = e.propsOptions;
  let f = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let p = c[u];
        if (Kl(e.emitsOptions, p)) continue;
        const m = t[p];
        if (l)
          if (Ce(o, p)) m !== o[p] && ((o[p] = m), (f = !0));
          else {
            const x = Ut(p);
            s[x] = qc(l, a, x, m, e, !1);
          }
        else m !== o[p] && ((o[p] = m), (f = !0));
      }
    }
  } else {
    B_(e, t, s, o) && (f = !0);
    let c;
    for (const u in a)
      (!t || (!Ce(t, u) && ((c = rs(u)) === u || !Ce(t, c)))) &&
        (l
          ? n && (n[u] !== void 0 || n[c] !== void 0) && (s[u] = qc(l, a, u, void 0, e, !0))
          : delete s[u]);
    if (o !== a) for (const u in o) (!t || !Ce(t, u)) && (delete o[u], (f = !0));
  }
  f && jn(e.attrs, 'set', '');
}
function B_(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (yo(l)) continue;
      const f = t[l];
      let c;
      s && Ce(s, (c = Ut(l)))
        ? !o || !o.includes(c)
          ? (n[c] = f)
          : ((a || (a = {}))[c] = f)
        : Kl(e.emitsOptions, l) || ((!(l in r) || f !== r[l]) && ((r[l] = f), (i = !0)));
    }
  if (o) {
    const l = ve(n),
      f = a || Oe;
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      n[u] = qc(s, l, u, f[u], e, !Ce(f, u));
    }
  }
  return i;
}
function qc(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = Ce(i, 'default');
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ae(l)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const c = ai(s);
          (r = f[n] = l.call(null, t)), c();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] && (o && !a ? (r = !1) : i[1] && (r === '' || r === rs(n)) && (r = !0));
  }
  return r;
}
const hP = new WeakMap();
function U_(e, t, n = !1) {
  const r = n ? hP : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!ae(e)) {
    const c = (u) => {
      l = !0;
      const [p, m] = U_(u, t, !0);
      We(i, p), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!o && !l) return $e(e) && r.set(e, ks), ks;
  if (oe(o))
    for (let c = 0; c < o.length; c++) {
      const u = Ut(o[c]);
      Ap(u) && (i[u] = Oe);
    }
  else if (o)
    for (const c in o) {
      const u = Ut(c);
      if (Ap(u)) {
        const p = o[c],
          m = (i[u] = oe(p) || ae(p) ? { type: p } : We({}, p)),
          x = m.type;
        let P = !1,
          N = !0;
        if (oe(x))
          for (let I = 0; I < x.length; ++I) {
            const T = x[I],
              j = ae(T) && T.name;
            if (j === 'Boolean') {
              P = !0;
              break;
            } else j === 'String' && (N = !1);
          }
        else P = ae(x) && x.name === 'Boolean';
        (m[0] = P), (m[1] = N), (P || Ce(m, 'default')) && a.push(u);
      }
    }
  const f = [i, a];
  return $e(e) && r.set(e, f), f;
}
function Ap(e) {
  return e[0] !== '$' && !yo(e);
}
const q_ = (e) => e[0] === '_' || e === '$stable',
  Yu = (e) => (oe(e) ? e.map(pn) : [pn(e)]),
  gP = (e, t, n) => {
    if (t._n) return t;
    const r = Nk((...s) => Yu(t(...s)), n);
    return (r._c = !1), r;
  },
  V_ = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (q_(s)) continue;
      const o = e[s];
      if (ae(o)) t[s] = gP(s, o, r);
      else if (o != null) {
        const i = Yu(o);
        t[s] = () => i;
      }
    }
  },
  H_ = (e, t) => {
    const n = Yu(t);
    e.slots.default = () => n;
  },
  W_ = (e, t, n) => {
    for (const r in t) (n || r !== '_') && (e[r] = t[r]);
  },
  mP = (e, t, n) => {
    const r = (e.slots = D_());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (W_(r, t, n), n && Gv(r, '_', s, !0)) : V_(t, r);
    } else t && H_(e, t);
  },
  vP = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = Oe;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? (n && a === 1 ? (o = !1) : W_(s, t, n)) : ((o = !t.$stable), V_(t, s)), (i = t);
    } else t && (H_(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !q_(a) && i[a] == null && delete s[a];
  },
  St = AP;
function _P(e) {
  return yP(e);
}
function yP(e, t) {
  const n = Bl();
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
      nextSibling: p,
      setScopeId: m = _n,
      insertStaticContent: x,
    } = e,
    P = (d, h, v, _ = null, b = null, w = null, C = void 0, E = null, S = !!h.dynamicChildren) => {
      if (d === h) return;
      d && !Hr(d, h) && ((_ = y(d)), ue(d, b, w, !0), (d = null)),
        h.patchFlag === -2 && ((S = !1), (h.dynamicChildren = null));
      const { type: R, ref: M, shapeFlag: F } = h;
      switch (R) {
        case Gl:
          N(d, h, v, _);
          break;
        case vt:
          I(d, h, v, _);
          break;
        case Ha:
          d == null && T(h, v, _, C);
          break;
        case dn:
          A(d, h, v, _, b, w, C, E, S);
          break;
        default:
          F & 1
            ? q(d, h, v, _, b, w, C, E, S)
            : F & 6
              ? H(d, h, v, _, b, w, C, E, S)
              : (F & 64 || F & 128) && R.process(d, h, v, _, b, w, C, E, S, $);
      }
      M != null && b && Zi(M, d && d.ref, w, h || d, !h);
    },
    N = (d, h, v, _) => {
      if (d == null) r((h.el = a(h.children)), v, _);
      else {
        const b = (h.el = d.el);
        h.children !== d.children && f(b, h.children);
      }
    },
    I = (d, h, v, _) => {
      d == null ? r((h.el = l(h.children || '')), v, _) : (h.el = d.el);
    },
    T = (d, h, v, _) => {
      [d.el, d.anchor] = x(d.children, h, v, _, d.el, d.anchor);
    },
    j = ({ el: d, anchor: h }, v, _) => {
      let b;
      for (; d && d !== h; ) (b = p(d)), r(d, v, _), (d = b);
      r(h, v, _);
    },
    L = ({ el: d, anchor: h }) => {
      let v;
      for (; d && d !== h; ) (v = p(d)), s(d), (d = v);
      s(h);
    },
    q = (d, h, v, _, b, w, C, E, S) => {
      h.type === 'svg' ? (C = 'svg') : h.type === 'math' && (C = 'mathml'),
        d == null ? J(h, v, _, b, w, C, E, S) : B(d, h, b, w, C, E, S);
    },
    J = (d, h, v, _, b, w, C, E) => {
      let S, R;
      const { props: M, shapeFlag: F, transition: D, dirs: U } = d;
      if (
        ((S = d.el = i(d.type, w, M && M.is, M)),
        F & 8 ? c(S, d.children) : F & 16 && ne(d.children, S, null, _, b, Va(d, w), C, E),
        U && $r(d, null, _, 'created'),
        K(S, d, d.scopeId, C, _),
        M)
      ) {
        for (const z in M) z !== 'value' && !yo(z) && o(S, z, null, M[z], w, _);
        'value' in M && o(S, 'value', null, M.value, w), (R = M.onVnodeBeforeMount) && rn(R, _, d);
      }
      U && $r(d, null, _, 'beforeMount');
      const G = bP(b, D);
      G && D.beforeEnter(S),
        r(S, h, v),
        ((R = M && M.onVnodeMounted) || G || U) &&
          St(() => {
            R && rn(R, _, d), G && D.enter(S), U && $r(d, null, _, 'mounted');
          }, b);
    },
    K = (d, h, v, _, b) => {
      if ((v && m(d, v), _)) for (let w = 0; w < _.length; w++) m(d, _[w]);
      if (b) {
        let w = b.subTree;
        if (h === w || (Q_(w.type) && (w.ssContent === h || w.ssFallback === h))) {
          const C = b.vnode;
          K(d, C, C.scopeId, C.slotScopeIds, b.parent);
        }
      }
    },
    ne = (d, h, v, _, b, w, C, E, S = 0) => {
      for (let R = S; R < d.length; R++) {
        const M = (d[R] = E ? cr(d[R]) : pn(d[R]));
        P(null, M, h, v, _, b, w, C, E);
      }
    },
    B = (d, h, v, _, b, w, C) => {
      const E = (h.el = d.el);
      let { patchFlag: S, dynamicChildren: R, dirs: M } = h;
      S |= d.patchFlag & 16;
      const F = d.props || Oe,
        D = h.props || Oe;
      let U;
      if (
        (v && jr(v, !1),
        (U = D.onVnodeBeforeUpdate) && rn(U, v, h, d),
        M && $r(h, d, v, 'beforeUpdate'),
        v && jr(v, !0),
        ((F.innerHTML && D.innerHTML == null) || (F.textContent && D.textContent == null)) &&
          c(E, ''),
        R
          ? V(d.dynamicChildren, R, E, v, _, Va(h, b), w)
          : C || Z(d, h, E, null, v, _, Va(h, b), w, !1),
        S > 0)
      ) {
        if (S & 16) Y(E, F, D, v, b);
        else if (
          (S & 2 && F.class !== D.class && o(E, 'class', null, D.class, b),
          S & 4 && o(E, 'style', F.style, D.style, b),
          S & 8)
        ) {
          const G = h.dynamicProps;
          for (let z = 0; z < G.length; z++) {
            const ee = G[z],
              ce = F[ee],
              de = D[ee];
            (de !== ce || ee === 'value') && o(E, ee, ce, de, b, v);
          }
        }
        S & 1 && d.children !== h.children && c(E, h.children);
      } else !C && R == null && Y(E, F, D, v, b);
      ((U = D.onVnodeUpdated) || M) &&
        St(() => {
          U && rn(U, v, h, d), M && $r(h, d, v, 'updated');
        }, _);
    },
    V = (d, h, v, _, b, w, C) => {
      for (let E = 0; E < h.length; E++) {
        const S = d[E],
          R = h[E],
          M = S.el && (S.type === dn || !Hr(S, R) || S.shapeFlag & 70) ? u(S.el) : v;
        P(S, R, M, null, _, b, w, C, !0);
      }
    },
    Y = (d, h, v, _, b) => {
      if (h !== v) {
        if (h !== Oe) for (const w in h) !yo(w) && !(w in v) && o(d, w, h[w], null, b, _);
        for (const w in v) {
          if (yo(w)) continue;
          const C = v[w],
            E = h[w];
          C !== E && w !== 'value' && o(d, w, E, C, b, _);
        }
        'value' in v && o(d, 'value', h.value, v.value, b);
      }
    },
    A = (d, h, v, _, b, w, C, E, S) => {
      const R = (h.el = d ? d.el : a('')),
        M = (h.anchor = d ? d.anchor : a(''));
      let { patchFlag: F, dynamicChildren: D, slotScopeIds: U } = h;
      U && (E = E ? E.concat(U) : U),
        d == null
          ? (r(R, v, _), r(M, v, _), ne(h.children || [], v, M, b, w, C, E, S))
          : F > 0 && F & 64 && D && d.dynamicChildren
            ? (V(d.dynamicChildren, D, v, b, w, C, E),
              (h.key != null || (b && h === b.subTree)) && z_(d, h, !0))
            : Z(d, h, v, M, b, w, C, E, S);
    },
    H = (d, h, v, _, b, w, C, E, S) => {
      (h.slotScopeIds = E),
        d == null
          ? h.shapeFlag & 512
            ? b.ctx.activate(h, v, _, C, S)
            : te(h, v, _, b, w, C, S)
          : X(d, h, S);
    },
    te = (d, h, v, _, b, w, C) => {
      const E = (d.component = NP(d, _, b));
      if ((Wl(d) && (E.ctx.renderer = $), UP(E, !1, C), E.asyncDep)) {
        if ((b && b.registerDep(E, Q, C), !d.el)) {
          const S = (E.subTree = Mt(vt));
          I(null, S, h, v);
        }
      } else Q(E, d, h, v, b, w, C);
    },
    X = (d, h, v) => {
      const _ = (h.component = d.component);
      if (OP(d, h, v))
        if (_.asyncDep && !_.asyncResolved) {
          W(_, h, v);
          return;
        } else (_.next = h), _.update();
      else (h.el = d.el), (_.vnode = h);
    },
    Q = (d, h, v, _, b, w, C) => {
      const E = () => {
        if (d.isMounted) {
          let { next: F, bu: D, u: U, parent: G, vnode: z } = d;
          {
            const je = K_(d);
            if (je) {
              F && ((F.el = z.el), W(d, F, C)),
                je.asyncDep.then(() => {
                  d.isUnmounted || E();
                });
              return;
            }
          }
          let ee = F,
            ce;
          jr(d, !1),
            F ? ((F.el = z.el), W(d, F, C)) : (F = z),
            D && ja(D),
            (ce = F.props && F.props.onVnodeBeforeUpdate) && rn(ce, G, F, z),
            jr(d, !0);
          const de = Tp(d),
            he = d.subTree;
          (d.subTree = de),
            P(he, de, u(he.el), y(he), d, b, w),
            (F.el = de.el),
            ee === null && LP(d, de.el),
            U && St(U, b),
            (ce = F.props && F.props.onVnodeUpdated) && St(() => rn(ce, G, F, z), b);
        } else {
          let F;
          const { el: D, props: U } = h,
            { bm: G, m: z, parent: ee, root: ce, type: de } = d,
            he = xo(h);
          jr(d, !1), G && ja(G), !he && (F = U && U.onVnodeBeforeMount) && rn(F, ee, h), jr(d, !0);
          {
            ce.ce && ce.ce._injectChildStyle(de);
            const je = (d.subTree = Tp(d));
            P(null, je, v, _, d, b, w), (h.el = je.el);
          }
          if ((z && St(z, b), !he && (F = U && U.onVnodeMounted))) {
            const je = h;
            St(() => rn(F, ee, je), b);
          }
          (h.shapeFlag & 256 || (ee && xo(ee.vnode) && ee.vnode.shapeFlag & 256)) &&
            d.a &&
            St(d.a, b),
            (d.isMounted = !0),
            (h = v = _ = null);
        }
      };
      d.scope.on();
      const S = (d.effect = new Xv(E));
      d.scope.off();
      const R = (d.update = S.run.bind(S)),
        M = (d.job = S.runIfDirty.bind(S));
      (M.i = d), (M.id = d.uid), (S.scheduler = () => Ju(M)), jr(d, !0), R();
    },
    W = (d, h, v) => {
      h.component = d;
      const _ = d.vnode.props;
      (d.vnode = h), (d.next = null), pP(d, h.props, _, v), vP(d, h.children, v), Cr(), Ep(d), kr();
    },
    Z = (d, h, v, _, b, w, C, E, S = !1) => {
      const R = d && d.children,
        M = d ? d.shapeFlag : 0,
        F = h.children,
        { patchFlag: D, shapeFlag: U } = h;
      if (D > 0) {
        if (D & 128) {
          ke(R, F, v, _, b, w, C, E, S);
          return;
        } else if (D & 256) {
          Ie(R, F, v, _, b, w, C, E, S);
          return;
        }
      }
      U & 8
        ? (M & 16 && fe(R, b, w), F !== R && c(v, F))
        : M & 16
          ? U & 16
            ? ke(R, F, v, _, b, w, C, E, S)
            : fe(R, b, w, !0)
          : (M & 8 && c(v, ''), U & 16 && ne(F, v, _, b, w, C, E, S));
    },
    Ie = (d, h, v, _, b, w, C, E, S) => {
      (d = d || ks), (h = h || ks);
      const R = d.length,
        M = h.length,
        F = Math.min(R, M);
      let D;
      for (D = 0; D < F; D++) {
        const U = (h[D] = S ? cr(h[D]) : pn(h[D]));
        P(d[D], U, v, null, b, w, C, E, S);
      }
      R > M ? fe(d, b, w, !0, !1, F) : ne(h, v, _, b, w, C, E, S, F);
    },
    ke = (d, h, v, _, b, w, C, E, S) => {
      let R = 0;
      const M = h.length;
      let F = d.length - 1,
        D = M - 1;
      for (; R <= F && R <= D; ) {
        const U = d[R],
          G = (h[R] = S ? cr(h[R]) : pn(h[R]));
        if (Hr(U, G)) P(U, G, v, null, b, w, C, E, S);
        else break;
        R++;
      }
      for (; R <= F && R <= D; ) {
        const U = d[F],
          G = (h[D] = S ? cr(h[D]) : pn(h[D]));
        if (Hr(U, G)) P(U, G, v, null, b, w, C, E, S);
        else break;
        F--, D--;
      }
      if (R > F) {
        if (R <= D) {
          const U = D + 1,
            G = U < M ? h[U].el : _;
          for (; R <= D; ) P(null, (h[R] = S ? cr(h[R]) : pn(h[R])), v, G, b, w, C, E, S), R++;
        }
      } else if (R > D) for (; R <= F; ) ue(d[R], b, w, !0), R++;
      else {
        const U = R,
          G = R,
          z = new Map();
        for (R = G; R <= D; R++) {
          const pe = (h[R] = S ? cr(h[R]) : pn(h[R]));
          pe.key != null && z.set(pe.key, R);
        }
        let ee,
          ce = 0;
        const de = D - G + 1;
        let he = !1,
          je = 0;
        const qt = new Array(de);
        for (R = 0; R < de; R++) qt[R] = 0;
        for (R = U; R <= F; R++) {
          const pe = d[R];
          if (ce >= de) {
            ue(pe, b, w, !0);
            continue;
          }
          let Je;
          if (pe.key != null) Je = z.get(pe.key);
          else
            for (ee = G; ee <= D; ee++)
              if (qt[ee - G] === 0 && Hr(pe, h[ee])) {
                Je = ee;
                break;
              }
          Je === void 0
            ? ue(pe, b, w, !0)
            : ((qt[Je - G] = R + 1),
              Je >= je ? (je = Je) : (he = !0),
              P(pe, h[Je], v, null, b, w, C, E, S),
              ce++);
        }
        const ye = he ? wP(qt) : ks;
        for (ee = ye.length - 1, R = de - 1; R >= 0; R--) {
          const pe = G + R,
            Je = h[pe],
            nf = pe + 1 < M ? h[pe + 1].el : _;
          qt[R] === 0
            ? P(null, Je, v, nf, b, w, C, E, S)
            : he && (ee < 0 || R !== ye[ee] ? _e(Je, v, nf, 2) : ee--);
        }
      }
    },
    _e = (d, h, v, _, b = null) => {
      const { el: w, type: C, transition: E, children: S, shapeFlag: R } = d;
      if (R & 6) {
        _e(d.component.subTree, h, v, _);
        return;
      }
      if (R & 128) {
        d.suspense.move(h, v, _);
        return;
      }
      if (R & 64) {
        C.move(d, h, v, $);
        return;
      }
      if (C === dn) {
        r(w, h, v);
        for (let F = 0; F < S.length; F++) _e(S[F], h, v, _);
        r(d.anchor, h, v);
        return;
      }
      if (C === Ha) {
        j(d, h, v);
        return;
      }
      if (_ !== 2 && R & 1 && E)
        if (_ === 0) E.beforeEnter(w), r(w, h, v), St(() => E.enter(w), b);
        else {
          const { leave: F, delayLeave: D, afterLeave: U } = E,
            G = () => r(w, h, v),
            z = () => {
              F(w, () => {
                G(), U && U();
              });
            };
          D ? D(w, G, z) : z();
        }
      else r(w, h, v);
    },
    ue = (d, h, v, _ = !1, b = !1) => {
      const {
        type: w,
        props: C,
        ref: E,
        children: S,
        dynamicChildren: R,
        shapeFlag: M,
        patchFlag: F,
        dirs: D,
        cacheIndex: U,
      } = d;
      if (
        (F === -2 && (b = !1),
        E != null && Zi(E, null, v, d, !0),
        U != null && (h.renderCache[U] = void 0),
        M & 256)
      ) {
        h.ctx.deactivate(d);
        return;
      }
      const G = M & 1 && D,
        z = !xo(d);
      let ee;
      if ((z && (ee = C && C.onVnodeBeforeUnmount) && rn(ee, h, d), M & 6)) ht(d.component, v, _);
      else {
        if (M & 128) {
          d.suspense.unmount(v, _);
          return;
        }
        G && $r(d, null, h, 'beforeUnmount'),
          M & 64
            ? d.type.remove(d, h, v, $, _)
            : R && !R.hasOnce && (w !== dn || (F > 0 && F & 64))
              ? fe(R, h, v, !1, !0)
              : ((w === dn && F & 384) || (!b && M & 16)) && fe(S, h, v),
          _ && Ue(d);
      }
      ((z && (ee = C && C.onVnodeUnmounted)) || G) &&
        St(() => {
          ee && rn(ee, h, d), G && $r(d, null, h, 'unmounted');
        }, v);
    },
    Ue = (d) => {
      const { type: h, el: v, anchor: _, transition: b } = d;
      if (h === dn) {
        qe(v, _);
        return;
      }
      if (h === Ha) {
        L(d);
        return;
      }
      const w = () => {
        s(v), b && !b.persisted && b.afterLeave && b.afterLeave();
      };
      if (d.shapeFlag & 1 && b && !b.persisted) {
        const { leave: C, delayLeave: E } = b,
          S = () => C(v, w);
        E ? E(d.el, w, S) : S();
      } else w();
    },
    qe = (d, h) => {
      let v;
      for (; d !== h; ) (v = p(d)), s(d), (d = v);
      s(h);
    },
    ht = (d, h, v) => {
      const { bum: _, scope: b, job: w, subTree: C, um: E, m: S, a: R } = d;
      Mp(S),
        Mp(R),
        _ && ja(_),
        b.stop(),
        w && ((w.flags |= 8), ue(C, d, h, v)),
        E && St(E, h),
        St(() => {
          d.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    fe = (d, h, v, _ = !1, b = !1, w = 0) => {
      for (let C = w; C < d.length; C++) ue(d[C], h, v, _, b);
    },
    y = (d) => {
      if (d.shapeFlag & 6) return y(d.component.subTree);
      if (d.shapeFlag & 128) return d.suspense.next();
      const h = p(d.anchor || d.el),
        v = h && h[Bk];
      return v ? p(v) : h;
    };
  let O = !1;
  const k = (d, h, v) => {
      d == null
        ? h._vnode && ue(h._vnode, null, null, !0)
        : P(h._vnode || null, d, h, null, null, null, v),
        (h._vnode = d),
        O || ((O = !0), Ep(), b_(), (O = !1));
    },
    $ = { p: P, um: ue, m: _e, r: Ue, mt: te, mc: ne, pc: Z, pbc: V, n: y, o: e };
  return { render: k, hydrate: void 0, createApp: fP(k) };
}
function Va({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n;
}
function jr({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function bP(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function z_(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (oe(r) && oe(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = s[o] = cr(s[o])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && z_(i, a)),
        a.type === Gl && (a.el = i.el);
    }
}
function wP(e) {
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
function K_(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : K_(t);
}
function Mp(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const xP = Symbol.for('v-scx'),
  SP = () => Un(xP);
function Ai(e, t, n) {
  return G_(e, t, n);
}
function G_(e, t, n = Oe) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    a = We({}, n),
    l = (t && r) || (!t && o !== 'post');
  let f;
  if (Xo) {
    if (o === 'sync') {
      const m = SP();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {};
      return (m.stop = _n), (m.resume = _n), (m.pause = _n), m;
    }
  }
  const c = Ge;
  a.call = (m, x, P) => Zt(m, c, x, P);
  let u = !1;
  o === 'post'
    ? (a.scheduler = (m) => {
        St(m, c && c.suspense);
      })
    : o !== 'sync' &&
      ((u = !0),
      (a.scheduler = (m, x) => {
        x ? m() : Ju(m);
      })),
    (a.augmentJob = (m) => {
      t && (m.flags |= 4), u && ((m.flags |= 2), c && ((m.id = c.uid), (m.i = c)));
    });
  const p = $k(e, t, a);
  return Xo && (f ? f.push(p) : l && p()), p;
}
function EP(e, t, n) {
  const r = this.proxy,
    s = Be(e) ? (e.includes('.') ? J_(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  ae(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = ai(this),
    a = G_(s, o.bind(r), n);
  return i(), a;
}
function J_(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const CP = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ut(t)}Modifiers`] || e[`${rs(t)}Modifiers`];
function kP(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Oe;
  let s = n;
  const o = t.startsWith('update:'),
    i = o && CP(r, t.slice(7));
  i && (i.trim && (s = n.map((c) => (Be(c) ? c.trim() : c))), i.number && (s = n.map(ek)));
  let a,
    l = r[(a = $a(t))] || r[(a = $a(Ut(t)))];
  !l && o && (l = r[(a = $a(rs(t)))]), l && Zt(l, e, 6, s);
  const f = r[a + 'Once'];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Zt(f, e, 6, s);
  }
}
function Y_(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!ae(e)) {
    const l = (f) => {
      const c = Y_(f, t, !0);
      c && ((a = !0), We(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? ($e(e) && r.set(e, null), null)
    : (oe(o) ? o.forEach((l) => (i[l] = null)) : We(i, o), $e(e) && r.set(e, i), i);
}
function Kl(e, t) {
  return !e || !jl(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Ce(e, t[0].toLowerCase() + t.slice(1)) || Ce(e, rs(t)) || Ce(e, t));
}
function Tp(e) {
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
      data: p,
      setupState: m,
      ctx: x,
      inheritAttrs: P,
    } = e,
    N = Xi(e);
  let I, T;
  try {
    if (n.shapeFlag & 4) {
      const L = s || r,
        q = L;
      (I = pn(f.call(q, L, c, u, m, p, x))), (T = a);
    } else {
      const L = t;
      (I = pn(L.length > 1 ? L(u, { attrs: a, slots: i, emit: l }) : L(u, null))),
        (T = t.props ? a : PP(a));
    }
  } catch (L) {
    (Eo.length = 0), Vl(L, e, 1), (I = Mt(vt));
  }
  let j = I;
  if (T && P !== !1) {
    const L = Object.keys(T),
      { shapeFlag: q } = j;
    L.length && q & 7 && (o && L.some(Iu) && (T = RP(T, o)), (j = vr(j, T, !1, !0)));
  }
  return (
    n.dirs && ((j = vr(j, null, !1, !0)), (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Yo(j, n.transition),
    (I = j),
    Xi(N),
    I
  );
}
const PP = (e) => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || jl(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  RP = (e, t) => {
    const n = {};
    for (const r in e) (!Iu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function OP(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: l } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Fp(r, i, f) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const p = c[u];
        if (i[p] !== r[p] && !Kl(f, p)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? Fp(r, i, f) : !0) : !!i;
  return !1;
}
function Fp(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !Kl(n, o)) return !0;
  }
  return !1;
}
function LP({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Q_ = (e) => e.__isSuspense;
function AP(e, t) {
  t && t.pendingBranch ? (oe(e) ? t.effects.push(...e) : t.effects.push(e)) : Dk(e);
}
const dn = Symbol.for('v-fgt'),
  Gl = Symbol.for('v-txt'),
  vt = Symbol.for('v-cmt'),
  Ha = Symbol.for('v-stc'),
  Eo = [];
let At = null;
function X_(e = !1) {
  Eo.push((At = e ? null : []));
}
function MP() {
  Eo.pop(), (At = Eo[Eo.length - 1] || null);
}
let Qo = 1;
function $p(e, t = !1) {
  (Qo += e), e < 0 && At && t && (At.hasOnce = !0);
}
function Z_(e) {
  return (e.dynamicChildren = Qo > 0 ? At || ks : null), MP(), Qo > 0 && At && At.push(e), e;
}
function HL(e, t, n, r, s, o) {
  return Z_(ny(e, t, n, r, s, o, !0));
}
function ey(e, t, n, r, s) {
  return Z_(Mt(e, t, n, r, s, !0));
}
function tl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Hr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ty = ({ key: e }) => e ?? null,
  Mi = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (Be(e) || lt(e) || ae(e) ? { i: bt, r: e, k: t, f: !!n } : e) : null
  );
function ny(e, t = null, n = null, r = 0, s = null, o = e === dn ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ty(t),
    ref: t && Mi(t),
    scopeId: x_,
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
    ctx: bt,
  };
  return (
    a ? (Qu(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Be(n) ? 8 : 16),
    Qo > 0 && !i && At && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && At.push(l),
    l
  );
}
const Mt = TP;
function TP(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === nP) && (e = vt), tl(e))) {
    const a = vr(e, t, !0);
    return (
      n && Qu(a, n),
      Qo > 0 && !o && At && (a.shapeFlag & 6 ? (At[At.indexOf(e)] = a) : At.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((zP(e) && (e = e.__vccOpts), t)) {
    t = FP(t);
    let { class: a, style: l } = t;
    a && !Be(a) && (t.class = Uu(a)),
      $e(l) && (Gu(l) && !oe(l) && (l = We({}, l)), (t.style = Bu(l)));
  }
  const i = Be(e) ? 1 : Q_(e) ? 128 : S_(e) ? 64 : $e(e) ? 4 : ae(e) ? 2 : 0;
  return ny(e, t, n, r, s, i, o, !0);
}
function FP(e) {
  return e ? (Gu(e) || N_(e) ? We({}, e) : e) : null;
}
function vr(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e,
    f = t ? jP(s || {}, t) : s,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && ty(f),
      ref: t && t.ref ? (n && o ? (oe(o) ? o.concat(Mi(t)) : [o, Mi(t)]) : Mi(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== dn ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && vr(e.ssContent),
      ssFallback: e.ssFallback && vr(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && Yo(c, l.clone(c)), c;
}
function $P(e = ' ', t = 0) {
  return Mt(Gl, null, e, t);
}
function WL(e = '', t = !1) {
  return t ? (X_(), ey(vt, null, e)) : Mt(vt, null, e);
}
function pn(e) {
  return e == null || typeof e == 'boolean'
    ? Mt(vt)
    : oe(e)
      ? Mt(dn, null, e.slice())
      : tl(e)
        ? cr(e)
        : Mt(Gl, null, String(e));
}
function cr(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : vr(e);
}
function Qu(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (oe(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Qu(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !N_(t)
        ? (t._ctx = bt)
        : s === 3 && bt && (bt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ae(t)
      ? ((t = { default: t, _ctx: bt }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [$P(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function jP(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === 'class') t.class !== r.class && (t.class = Uu([t.class, r.class]));
      else if (s === 'style') t.style = Bu([t.style, r.style]);
      else if (jl(s)) {
        const o = t[s],
          i = r[s];
        i && o !== i && !(oe(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== '' && (t[s] = r[s]);
  }
  return t;
}
function rn(e, t, n, r = null) {
  Zt(e, t, 7, [n, r]);
}
const IP = j_();
let DP = 0;
function NP(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || IP,
    o = {
      uid: DP++,
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
      scope: new ck(!0),
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
      propsOptions: U_(r, s),
      emitsOptions: Y_(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Oe,
      inheritAttrs: r.inheritAttrs,
      ctx: Oe,
      data: Oe,
      props: Oe,
      attrs: Oe,
      slots: Oe,
      refs: Oe,
      setupState: Oe,
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
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = kP.bind(null, o)), e.ce && e.ce(o), o
  );
}
let Ge = null;
const BP = () => Ge || bt;
let nl, Vc;
{
  const e = Bl(),
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
  (nl = t('__VUE_INSTANCE_SETTERS__', (n) => (Ge = n))),
    (Vc = t('__VUE_SSR_SETTERS__', (n) => (Xo = n)));
}
const ai = (e) => {
    const t = Ge;
    return (
      nl(e),
      e.scope.on(),
      () => {
        e.scope.off(), nl(t);
      }
    );
  },
  jp = () => {
    Ge && Ge.scope.off(), nl(null);
  };
function ry(e) {
  return e.vnode.shapeFlag & 4;
}
let Xo = !1;
function UP(e, t = !1, n = !1) {
  t && Vc(t);
  const { props: r, children: s } = e.vnode,
    o = ry(e);
  dP(e, r, o, t), mP(e, s, n);
  const i = o ? qP(e, t) : void 0;
  return t && Vc(!1), i;
}
function qP(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, sP));
  const { setup: r } = n;
  if (r) {
    Cr();
    const s = (e.setupContext = r.length > 1 ? HP(e) : null),
      o = ai(e),
      i = li(r, e, 0, [e.props, s]),
      a = Wv(i);
    if ((kr(), o(), (a || e.sp) && !xo(e) && O_(e), a)) {
      if ((i.then(jp, jp), t))
        return i
          .then((l) => {
            Ip(e, l);
          })
          .catch((l) => {
            Vl(l, e, 0);
          });
      e.asyncDep = i;
    } else Ip(e, i);
  } else sy(e);
}
function Ip(e, t, n) {
  ae(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : $e(t) && (e.setupState = m_(t)),
    sy(e);
}
function sy(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || _n);
  {
    const s = ai(e);
    Cr();
    try {
      oP(e);
    } finally {
      kr(), s();
    }
  }
}
const VP = {
  get(e, t) {
    return rt(e, 'get', ''), e[t];
  },
};
function HP(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, VP), slots: e.slots, emit: e.emit, expose: t };
}
function Jl(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(m_(ql(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in So) return So[n](e);
          },
          has(t, n) {
            return n in t || n in So;
          },
        }))
    : e.proxy;
}
function WP(e, t = !0) {
  return ae(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function zP(e) {
  return ae(e) && '__vccOpts' in e;
}
const Wt = (e, t) => Tk(e, t, Xo);
function Xu(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? $e(t) && !oe(t)
      ? tl(t)
        ? Mt(e, null, [t])
        : Mt(e, t)
      : Mt(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && tl(n) && (n = [n]),
      Mt(e, t, n));
}
const KP = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Hc;
const Dp = typeof window < 'u' && window.trustedTypes;
if (Dp)
  try {
    Hc = Dp.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const oy = Hc ? (e) => Hc.createHTML(e) : (e) => e,
  GP = 'http://www.w3.org/2000/svg',
  JP = 'http://www.w3.org/1998/Math/MathML',
  An = typeof document < 'u' ? document : null,
  Np = An && An.createElement('template'),
  YP = {
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
          ? An.createElementNS(GP, e)
          : t === 'mathml'
            ? An.createElementNS(JP, e)
            : n
              ? An.createElement(e, { is: n })
              : An.createElement(e);
      return e === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple), s;
    },
    createText: (e) => An.createTextNode(e),
    createComment: (e) => An.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => An.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); );
      else {
        Np.innerHTML = oy(
          r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e,
        );
        const a = Np.content;
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
  Jn = 'transition',
  Qs = 'animation',
  Zo = Symbol('_vtc'),
  iy = {
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
  QP = We({}, E_, iy),
  XP = (e) => ((e.displayName = 'Transition'), (e.props = QP), e),
  zL = XP((e, { slots: t }) => Xu(Vk, ZP(e), t)),
  Ir = (e, t = []) => {
    oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Bp = (e) => (e ? (oe(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ZP(e) {
  const t = {};
  for (const A in e) A in iy || (t[A] = e[A]);
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
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    x = eR(s),
    P = x && x[0],
    N = x && x[1],
    {
      onBeforeEnter: I,
      onEnter: T,
      onEnterCancelled: j,
      onLeave: L,
      onLeaveCancelled: q,
      onBeforeAppear: J = I,
      onAppear: K = T,
      onAppearCancelled: ne = j,
    } = t,
    B = (A, H, te, X) => {
      (A._enterCancelled = X), Dr(A, H ? c : a), Dr(A, H ? f : i), te && te();
    },
    V = (A, H) => {
      (A._isLeaving = !1), Dr(A, u), Dr(A, m), Dr(A, p), H && H();
    },
    Y = (A) => (H, te) => {
      const X = A ? K : T,
        Q = () => B(H, A, te);
      Ir(X, [H, Q]),
        Up(() => {
          Dr(H, A ? l : o), Pn(H, A ? c : a), Bp(X) || qp(H, r, P, Q);
        });
    };
  return We(t, {
    onBeforeEnter(A) {
      Ir(I, [A]), Pn(A, o), Pn(A, i);
    },
    onBeforeAppear(A) {
      Ir(J, [A]), Pn(A, l), Pn(A, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(A, H) {
      A._isLeaving = !0;
      const te = () => V(A, H);
      Pn(A, u),
        A._enterCancelled ? (Pn(A, p), Wp()) : (Wp(), Pn(A, p)),
        Up(() => {
          A._isLeaving && (Dr(A, u), Pn(A, m), Bp(L) || qp(A, r, N, te));
        }),
        Ir(L, [A, te]);
    },
    onEnterCancelled(A) {
      B(A, !1, void 0, !0), Ir(j, [A]);
    },
    onAppearCancelled(A) {
      B(A, !0, void 0, !0), Ir(ne, [A]);
    },
    onLeaveCancelled(A) {
      V(A), Ir(q, [A]);
    },
  });
}
function eR(e) {
  if (e == null) return null;
  if ($e(e)) return [Wa(e.enter), Wa(e.leave)];
  {
    const t = Wa(e);
    return [t, t];
  }
}
function Wa(e) {
  return tk(e);
}
function Pn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Zo] || (e[Zo] = new Set())).add(t);
}
function Dr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Zo];
  n && (n.delete(t), n.size || (e[Zo] = void 0));
}
function Up(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let tR = 0;
function qp(e, t, n, r) {
  const s = (e._endId = ++tR),
    o = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = nR(e, t);
  if (!i) return r();
  const f = i + 'end';
  let c = 0;
  const u = () => {
      e.removeEventListener(f, p), o();
    },
    p = (m) => {
      m.target === e && ++c >= l && u();
    };
  setTimeout(() => {
    c < l && u();
  }, a + 1),
    e.addEventListener(f, p);
}
function nR(e, t) {
  const n = window.getComputedStyle(e),
    r = (x) => (n[x] || '').split(', '),
    s = r(`${Jn}Delay`),
    o = r(`${Jn}Duration`),
    i = Vp(s, o),
    a = r(`${Qs}Delay`),
    l = r(`${Qs}Duration`),
    f = Vp(a, l);
  let c = null,
    u = 0,
    p = 0;
  t === Jn
    ? i > 0 && ((c = Jn), (u = i), (p = o.length))
    : t === Qs
      ? f > 0 && ((c = Qs), (u = f), (p = l.length))
      : ((u = Math.max(i, f)),
        (c = u > 0 ? (i > f ? Jn : Qs) : null),
        (p = c ? (c === Jn ? o.length : l.length) : 0));
  const m = c === Jn && /\b(transform|all)(,|$)/.test(r(`${Jn}Property`).toString());
  return { type: c, timeout: u, propCount: p, hasTransform: m };
}
function Vp(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Hp(n) + Hp(e[r])));
}
function Hp(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Wp() {
  return document.body.offsetHeight;
}
function rR(e, t, n) {
  const r = e[Zo];
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
const zp = Symbol('_vod'),
  sR = Symbol('_vsh'),
  oR = Symbol(''),
  iR = /(^|;)\s*display\s*:/;
function lR(e, t, n) {
  const r = e.style,
    s = Be(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (Be(t))
        for (const i of t.split(';')) {
          const a = i.slice(0, i.indexOf(':')).trim();
          n[a] == null && Ti(r, a, '');
        }
      else for (const i in t) n[i] == null && Ti(r, i, '');
    for (const i in n) i === 'display' && (o = !0), Ti(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[oR];
      i && (n += ';' + i), (r.cssText = n), (o = iR.test(n));
    }
  } else t && e.removeAttribute('style');
  zp in e && ((e[zp] = o ? r.display : ''), e[sR] && (r.display = 'none'));
}
const Kp = /\s*!important$/;
function Ti(e, t, n) {
  if (oe(n)) n.forEach((r) => Ti(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = aR(e, t);
    Kp.test(n) ? e.setProperty(rs(r), n.replace(Kp, ''), 'important') : (e[r] = n);
  }
}
const Gp = ['Webkit', 'Moz', 'ms'],
  za = {};
function aR(e, t) {
  const n = za[t];
  if (n) return n;
  let r = Ut(t);
  if (r !== 'filter' && r in e) return (za[t] = r);
  r = Nl(r);
  for (let s = 0; s < Gp.length; s++) {
    const o = Gp[s] + r;
    if (o in e) return (za[t] = o);
  }
  return t;
}
const Jp = 'http://www.w3.org/1999/xlink';
function Yp(e, t, n, r, s, o = lk(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Jp, t.slice(6, t.length))
      : e.setAttributeNS(Jp, t, n)
    : n == null || (o && !Jv(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : Er(n) ? String(n) : n);
}
function Qp(e, t, n, r, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? oy(n) : n);
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
      ? (n = Jv(n))
      : n == null && a === 'string'
        ? ((n = ''), (i = !0))
        : a === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function cR(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function uR(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Xp = Symbol('_vei');
function fR(e, t, n, r, s = null) {
  const o = e[Xp] || (e[Xp] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = dR(t);
    if (r) {
      const f = (o[t] = gR(r, s));
      cR(e, a, f, l);
    } else i && (uR(e, a, i, l), (o[t] = void 0));
  }
}
const Zp = /(?:Once|Passive|Capture)$/;
function dR(e) {
  let t;
  if (Zp.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Zp)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : rs(e.slice(2)), t];
}
let Ka = 0;
const pR = Promise.resolve(),
  hR = () => Ka || (pR.then(() => (Ka = 0)), (Ka = Date.now()));
function gR(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Zt(mR(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = hR()), n;
}
function mR(e, t) {
  if (oe(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const eh = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  vR = (e, t, n, r, s, o) => {
    const i = s === 'svg';
    t === 'class'
      ? rR(e, r, i)
      : t === 'style'
        ? lR(e, n, r)
        : jl(t)
          ? Iu(t) || fR(e, t, n, r, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : _R(e, t, r, i)
              )
            ? (Qp(e, t, r),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Yp(e, t, r, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !Be(r))
              ? Qp(e, Ut(t), r, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = r)
                  : t === 'false-value' && (e._falseValue = r),
                Yp(e, t, r, i));
  };
function _R(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && eh(t) && ae(n)));
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
  return eh(t) && Be(n) ? !1 : t in e;
}
const yR = We({ patchProp: vR }, YP);
let th;
function bR() {
  return th || (th = _P(yR));
}
const wR = (...e) => {
  const t = bR().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = SR(r);
      if (!s) return;
      const o = t._component;
      !ae(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = '');
      const i = n(s, !1, xR(s));
      return (
        s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), i
      );
    }),
    t
  );
};
function xR(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function SR(e) {
  return Be(e) ? document.querySelector(e) : e;
}
function Zu(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: !0 }), e;
}
const es = h_(!1);
let Wc;
function ER(e, t) {
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
function CR(e) {
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
const ly = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0;
function kR(e) {
  const t = e.toLowerCase(),
    n = CR(t),
    r = ER(t, n),
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
      es.value === !0 && (Wc = { is: { ...s } }),
      ly === !0 &&
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
const nh = navigator.userAgent || navigator.vendor || window.opera,
  PR = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  yn = {
    userAgent: nh,
    is: kR(nh),
    has: { touch: ly },
    within: { iframe: window.self !== window.top },
  },
  zc = {
    install(e) {
      const { $q: t } = e;
      es.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, yn), (es.value = !1);
          }),
          (t.platform = Vs(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  Zu(yn.has, 'webStorage', () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Object.assign(zc, yn),
    es.value === !0 && (Object.assign(zc, Wc, PR), (Wc = null));
}
function KL(e) {
  return ql(Hl(e));
}
function GL(e) {
  return ql(e);
}
const Yl = (e, t) => {
    const n = Vs(e);
    for (const r in e)
      Zu(
        t,
        r,
        () => n[r],
        (s) => {
          n[r] = s;
        },
      );
    return t;
  },
  Ds = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign(Ds, {
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
function ei() {}
function JL(e) {
  return e.button === 0;
}
function YL(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
        ? (e = e.changedTouches[0])
        : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function QL(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === 'HTML')) return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function XL(e) {
  e.stopPropagation();
}
function rh(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function ZL(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function eA(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0), r.addEventListener('dragstart', rh, Ds.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented, r.removeEventListener('dragstart', rh, Ds.notPassiveCapture);
        };
  e.querySelectorAll('a, img').forEach(n);
}
function tA(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((s) => {
      s[0].addEventListener(s[1], e[s[2]], Ds[s[3]]);
    });
}
function nA(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], Ds[r[3]]);
    }),
    (e[n] = void 0));
}
function RR(e, t = 250, n) {
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
const Ga = ['sm', 'md', 'lg', 'xl'],
  { passive: sh } = Ds,
  OR = Yl(
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
      setSizes: ei,
      setDebounce: ei,
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
            n === void 0 || yn.is.mobile === !0
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
          const [p, m] = o();
          if ((m !== this.height && (this.height = m), p !== this.width)) this.width = p;
          else if (u !== !0) return;
          let x = this.sizes;
          (this.gt.xs = p >= x.sm),
            (this.gt.sm = p >= x.md),
            (this.gt.md = p >= x.lg),
            (this.gt.lg = p >= x.xl),
            (this.lt.sm = p < x.sm),
            (this.lt.md = p < x.md),
            (this.lt.lg = p < x.lg),
            (this.lt.xl = p < x.xl),
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
          Ga.forEach((p) => {
            u[p] !== void 0 && (l[p] = u[p]);
          });
        }),
          (this.setDebounce = (u) => {
            f = u;
          });
        const c = () => {
          const u = getComputedStyle(document.body);
          u.getPropertyValue('--q-size-sm') &&
            Ga.forEach((p) => {
              this.sizes[p] = parseInt(u.getPropertyValue(`--q-size-${p}`), 10);
            }),
            (this.setSizes = (p) => {
              Ga.forEach((m) => {
                p[m] && (this.sizes[m] = p[m]);
              }),
                this.__update(!0);
            }),
            (this.setDebounce = (p) => {
              a !== void 0 && r.removeEventListener('resize', a, sh),
                (a = p > 0 ? RR(this.__update, p) : this.__update),
                r.addEventListener('resize', a, sh);
            }),
            this.setDebounce(f),
            Object.keys(l).length !== 0 ? (this.setSizes(l), (l = void 0)) : this.__update(),
            i === !0 && this.name === 'xs' && document.body.classList.add('screen--xs');
        };
        es.value === !0 ? t.push(c) : c();
      },
    },
  ),
  Xe = Yl(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (Xe.mode = e),
          e === 'auto'
            ? (Xe.__media === void 0 &&
                ((Xe.__media = window.matchMedia('(prefers-color-scheme: dark)')),
                (Xe.__updateMedia = () => {
                  Xe.set('auto');
                }),
                Xe.__media.addListener(Xe.__updateMedia)),
              (e = Xe.__media.matches))
            : Xe.__media !== void 0 &&
              (Xe.__media.removeListener(Xe.__updateMedia), (Xe.__media = void 0)),
          (Xe.isActive = e === !0),
          document.body.classList.remove(`body--${e === !0 ? 'light' : 'dark'}`),
          document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`);
      },
      toggle() {
        Xe.set(Xe.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const { dark: n } = e.config;
        (e.dark = this), this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
      },
    },
  );
function LR(e, t, n = document.body) {
  if (typeof e != 'string') throw new TypeError('Expected a string as propName');
  if (typeof t != 'string') throw new TypeError('Expected a string as value');
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element');
  n.style.setProperty(`--q-${e}`, t);
}
let ay = !1;
function AR(e) {
  ay = e.isComposing === !0;
}
function MR(e) {
  return ay === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function rA(e, t) {
  return MR(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function cy(e) {
  if (e.ios === !0) return 'ios';
  if (e.android === !0) return 'android';
}
function TR({ is: e, has: t, within: n }, r) {
  const s = [e.desktop === !0 ? 'desktop' : 'mobile', `${t.touch === !1 ? 'no-' : ''}touch`];
  if (e.mobile === !0) {
    const o = cy(e);
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
function FR() {
  const { is: e } = yn,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, ' ').split(' '));
  if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete('mobile'), n.delete('platform-ios'), n.delete('platform-android'), n.add('desktop');
    else if (e.mobile === !0) {
      n.delete('desktop'), n.add('mobile'), n.delete('platform-ios'), n.delete('platform-android');
      const s = cy(e);
      s !== void 0 && n.add(`platform-${s}`);
    }
  }
  yn.has.touch === !0 && (n.delete('no-touch'), n.add('touch')),
    yn.within.iframe === !0 && n.add('within-iframe');
  const r = Array.from(n).join(' ');
  t !== r && (document.body.className = r);
}
function $R(e) {
  for (const t in e) LR(t, e[t]);
}
const jR = {
    install(e) {
      if (this.__installed !== !0) {
        if (es.value === !0) FR();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && $R(t.config.brand);
          const n = TR(yn, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        yn.is.ios === !0 && document.body.addEventListener('touchstart', ei),
          window.addEventListener('keydown', AR, !0);
      }
    },
  },
  uy = () => !0;
function IR(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/';
}
function DR(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substring(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substring(0, e.length - 1)),
    '#' + e
  );
}
function NR(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === '*') return uy;
  const t = ['#/'];
  return (
    Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(IR).map(DR)),
    () => t.includes(window.location.hash)
  );
}
const BR = {
    __history: [],
    add: ei,
    remove: ei,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = yn.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? 'cordova' : 'capacitor'];
      if (
        r?.backButton === !1 ||
        (n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (i) => {
        i.condition === void 0 && (i.condition = uy), this.__history.push(i);
      }),
        (this.remove = (i) => {
          const a = this.__history.indexOf(i);
          a >= 0 && this.__history.splice(a, 1);
        });
      const s = NR(Object.assign({ backButtonExit: !0 }, r)),
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
  oh = {
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
function ih() {
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
const ur = Yl(
    { __qLang: {} },
    {
      getLocale: ih,
      set(e = oh, t) {
        const n = { ...e, rtl: e.rtl === !0, getLocale: ih };
        {
          if (
            ((n.set = ur.set), ur.__langConfig === void 0 || ur.__langConfig.noHtmlAttrs !== !0)
          ) {
            const r = document.documentElement;
            r.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'), r.setAttribute('lang', n.isoName);
          }
          Object.assign(ur.__qLang, n);
        }
      },
      install({ $q: e, lang: t, ssrContext: n }) {
        (e.lang = ur.__qLang),
          (ur.__langConfig = e.config.lang),
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
              this.set(t || oh));
      },
    },
  ),
  UR = {
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
  rl = Yl(
    { iconMapFn: null, __qIconSet: {} },
    {
      set(e, t) {
        const n = { ...e };
        (n.set = rl.set), Object.assign(rl.__qIconSet, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__qIconSet),
          Zu(
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
              this.set(t || UR));
      },
    },
  ),
  qR = '_q_',
  sA = '_q_l_',
  oA = '_q_pc_';
function iA() {}
const lh = {};
let fy = !1;
function VR() {
  fy = !0;
}
function ah(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0;
}
const ch = [zc, jR, Xe, OR, BR, ur, rl];
function uh(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function HR(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(qR, n.$q),
    uh(n, ch),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        ah(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        ah(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      uh(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == 'function' && ch.includes(r) === !1,
        ),
      ),
    es.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
const WR = function (e, t = {}) {
    const n = { version: '2.18.1' };
    fy === !1
      ? (t.config !== void 0 && Object.assign(lh, t.config), (n.config = { ...lh }), VR())
      : (n.config = t.config || {}),
      HR(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
  },
  zR = { name: 'Quasar', version: '2.18.1', install: WR, lang: ur, iconSet: rl },
  KR = Hl({
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const r = tP('router-view');
        return X_(), ey(r);
      };
    },
  }),
  GR = (e) => e,
  JR = GR;
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const ds = typeof document < 'u';
function dy(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function YR(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && dy(e.default));
}
const xe = Object.assign;
function Ja(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = en(s) ? s.map(e) : e(s);
  }
  return n;
}
const Co = () => {},
  en = Array.isArray,
  py = /#/g,
  QR = /&/g,
  XR = /\//g,
  ZR = /=/g,
  eO = /\?/g,
  hy = /\+/g,
  tO = /%5B/g,
  nO = /%5D/g,
  gy = /%5E/g,
  rO = /%60/g,
  my = /%7B/g,
  sO = /%7C/g,
  vy = /%7D/g,
  oO = /%20/g;
function ef(e) {
  return encodeURI('' + e)
    .replace(sO, '|')
    .replace(tO, '[')
    .replace(nO, ']');
}
function iO(e) {
  return ef(e).replace(my, '{').replace(vy, '}').replace(gy, '^');
}
function Kc(e) {
  return ef(e)
    .replace(hy, '%2B')
    .replace(oO, '+')
    .replace(py, '%23')
    .replace(QR, '%26')
    .replace(rO, '`')
    .replace(my, '{')
    .replace(vy, '}')
    .replace(gy, '^');
}
function lO(e) {
  return Kc(e).replace(ZR, '%3D');
}
function aO(e) {
  return ef(e).replace(py, '%23').replace(eO, '%3F');
}
function cO(e) {
  return e == null ? '' : aO(e).replace(XR, '%2F');
}
function ti(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const uO = /\/$/,
  fO = (e) => e.replace(uO, '');
function Ya(e, t, n = '/') {
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
    (r = gO(r ?? t, n)),
    { fullPath: r + (o && '?') + o + i, path: r, query: s, hash: ti(i) }
  );
}
function dO(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function fh(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function pO(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Ns(t.matched[r], n.matched[s]) &&
    _y(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Ns(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function _y(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!hO(e[n], t[n])) return !1;
  return !0;
}
function hO(e, t) {
  return en(e) ? dh(e, t) : en(t) ? dh(t, e) : e === t;
}
function dh(e, t) {
  return en(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function gO(e, t) {
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
const Yn = {
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
var ni;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(ni || (ni = {}));
var ko;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(ko || (ko = {}));
function mO(e) {
  if (!e)
    if (ds) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), fO(e);
}
const vO = /^[^#]+#/;
function _O(e, t) {
  return e.replace(vO, '#') + t;
}
function yO(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Ql = () => ({ left: window.scrollX, top: window.scrollY });
function bO(e) {
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
    t = yO(s, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function ph(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Gc = new Map();
function wO(e, t) {
  Gc.set(e, t);
}
function xO(e) {
  const t = Gc.get(e);
  return Gc.delete(e), t;
}
let SO = () => location.protocol + '//' + location.host;
function yy(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#');
  if (o > -1) {
    let a = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(a);
    return l[0] !== '/' && (l = '/' + l), fh(l, '');
  }
  return fh(n, e) + r + s;
}
function EO(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: p }) => {
    const m = yy(e, location),
      x = n.value,
      P = t.value;
    let N = 0;
    if (p) {
      if (((n.value = m), (t.value = p), i && i === x)) {
        i = null;
        return;
      }
      N = P ? p.position - P.position : 0;
    } else r(m);
    s.forEach((I) => {
      I(n.value, x, {
        delta: N,
        type: ni.pop,
        direction: N ? (N > 0 ? ko.forward : ko.back) : ko.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(p) {
    s.push(p);
    const m = () => {
      const x = s.indexOf(p);
      x > -1 && s.splice(x, 1);
    };
    return o.push(m), m;
  }
  function c() {
    const { history: p } = window;
    p.state && p.replaceState(xe({}, p.state, { scroll: Ql() }), '');
  }
  function u() {
    for (const p of o) p();
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
function hh(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Ql() : null,
  };
}
function CO(e) {
  const { history: t, location: n } = window,
    r = { value: yy(e, n) },
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
      p = u > -1 ? (n.host && document.querySelector('base') ? e : e.slice(u)) + l : SO() + e + l;
    try {
      t[c ? 'replaceState' : 'pushState'](f, '', p), (s.value = f);
    } catch (m) {
      console.error(m), n[c ? 'replace' : 'assign'](p);
    }
  }
  function i(l, f) {
    const c = xe({}, t.state, hh(s.value.back, l, s.value.forward, !0), f, {
      position: s.value.position,
    });
    o(l, c, !0), (r.value = l);
  }
  function a(l, f) {
    const c = xe({}, s.value, t.state, { forward: l, scroll: Ql() });
    o(c.current, c, !0);
    const u = xe({}, hh(r.value, l, null), { position: c.position + 1 }, f);
    o(l, u, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: i };
}
function kO(e) {
  e = mO(e);
  const t = CO(e),
    n = EO(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = xe({ location: '', base: e, go: r, createHref: _O.bind(null, e) }, t, n);
  return (
    Object.defineProperty(s, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, 'state', { enumerable: !0, get: () => t.state.value }),
    s
  );
}
function PO(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    kO(e)
  );
}
function RO(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function by(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const wy = Symbol('');
var gh;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(gh || (gh = {}));
function Bs(e, t) {
  return xe(new Error(), { type: e, [wy]: !0 }, t);
}
function Rn(e, t) {
  return e instanceof Error && wy in e && (t == null || !!(e.type & t));
}
const mh = '[^/]+?',
  OO = { sensitive: !1, strict: !1, start: !0, end: !0 },
  LO = /[.+*?^${}()[\]/\\]/g;
function AO(e, t) {
  const n = xe({}, OO, t),
    r = [];
  let s = n.start ? '^' : '';
  const o = [];
  for (const f of e) {
    const c = f.length ? [] : [90];
    n.strict && !f.length && (s += '/');
    for (let u = 0; u < f.length; u++) {
      const p = f[u];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0) u || (s += '/'), (s += p.value.replace(LO, '\\$&')), (m += 40);
      else if (p.type === 1) {
        const { value: x, repeatable: P, optional: N, regexp: I } = p;
        o.push({ name: x, repeatable: P, optional: N });
        const T = I || mh;
        if (T !== mh) {
          m += 10;
          try {
            new RegExp(`(${T})`);
          } catch (L) {
            throw new Error(`Invalid custom RegExp for param "${x}" (${T}): ` + L.message);
          }
        }
        let j = P ? `((?:${T})(?:/(?:${T}))*)` : `(${T})`;
        u || (j = N && f.length < 2 ? `(?:/${j})` : '/' + j),
          N && (j += '?'),
          (s += j),
          (m += 20),
          N && (m += -8),
          P && (m += -20),
          T === '.*' && (m += -50);
      }
      c.push(m);
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
    for (let p = 1; p < c.length; p++) {
      const m = c[p] || '',
        x = o[p - 1];
      u[x.name] = m && x.repeatable ? m.split('/') : m;
    }
    return u;
  }
  function l(f) {
    let c = '',
      u = !1;
    for (const p of e) {
      (!u || !c.endsWith('/')) && (c += '/'), (u = !1);
      for (const m of p)
        if (m.type === 0) c += m.value;
        else if (m.type === 1) {
          const { value: x, repeatable: P, optional: N } = m,
            I = x in f ? f[x] : '';
          if (en(I) && !P)
            throw new Error(
              `Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const T = en(I) ? I.join('/') : I;
          if (!T)
            if (N) p.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (u = !0));
            else throw new Error(`Missing required param "${x}"`);
          c += T;
        }
    }
    return c || '/';
  }
  return { re: i, score: r, keys: o, parse: a, stringify: l };
}
function MO(e, t) {
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
function xy(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = MO(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (vh(r)) return 1;
    if (vh(s)) return -1;
  }
  return s.length - r.length;
}
function vh(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const TO = { type: 0, value: '' },
  FO = /[a-zA-Z0-9_]/;
function $O(e) {
  if (!e) return [[]];
  if (e === '/') return [[TO]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${f}": ${m}`);
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
  function p() {
    f += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === '/' ? (f && u(), i()) : l === ':' ? (u(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = r);
        break;
      case 1:
        l === '('
          ? (n = 2)
          : FO.test(l)
            ? p()
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
function jO(e, t, n) {
  const r = AO($O(e.path), n),
    s = xe(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function IO(e, t) {
  const n = [],
    r = new Map();
  t = wh({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(u) {
    return r.get(u);
  }
  function o(u, p, m) {
    const x = !m,
      P = yh(u);
    P.aliasOf = m && m.record;
    const N = wh(t, u),
      I = [P];
    if ('alias' in u) {
      const L = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const q of L)
        I.push(
          yh(
            xe({}, P, {
              components: m ? m.record.components : P.components,
              path: q,
              aliasOf: m ? m.record : P,
            }),
          ),
        );
    }
    let T, j;
    for (const L of I) {
      const { path: q } = L;
      if (p && q[0] !== '/') {
        const J = p.record.path,
          K = J[J.length - 1] === '/' ? '' : '/';
        L.path = p.record.path + (q && K + q);
      }
      if (
        ((T = jO(L, p, N)),
        m
          ? m.alias.push(T)
          : ((j = j || T), j !== T && j.alias.push(T), x && u.name && !bh(T) && i(u.name)),
        Sy(T) && l(T),
        P.children)
      ) {
        const J = P.children;
        for (let K = 0; K < J.length; K++) o(J[K], T, m && m.children[K]);
      }
      m = m || T;
    }
    return j
      ? () => {
          i(j);
        }
      : Co;
  }
  function i(u) {
    if (by(u)) {
      const p = r.get(u);
      p && (r.delete(u), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i));
    } else {
      const p = n.indexOf(u);
      p > -1 &&
        (n.splice(p, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    const p = BO(u, n);
    n.splice(p, 0, u), u.record.name && !bh(u) && r.set(u.record.name, u);
  }
  function f(u, p) {
    let m,
      x = {},
      P,
      N;
    if ('name' in u && u.name) {
      if (((m = r.get(u.name)), !m)) throw Bs(1, { location: u });
      (N = m.record.name),
        (x = xe(
          _h(
            p.params,
            m.keys
              .filter((j) => !j.optional)
              .concat(m.parent ? m.parent.keys.filter((j) => j.optional) : [])
              .map((j) => j.name),
          ),
          u.params &&
            _h(
              u.params,
              m.keys.map((j) => j.name),
            ),
        )),
        (P = m.stringify(x));
    } else if (u.path != null)
      (P = u.path), (m = n.find((j) => j.re.test(P))), m && ((x = m.parse(P)), (N = m.record.name));
    else {
      if (((m = p.name ? r.get(p.name) : n.find((j) => j.re.test(p.path))), !m))
        throw Bs(1, { location: u, currentLocation: p });
      (N = m.record.name), (x = xe({}, p.params, u.params)), (P = m.stringify(x));
    }
    const I = [];
    let T = m;
    for (; T; ) I.unshift(T.record), (T = T.parent);
    return { name: N, path: P, params: x, matched: I, meta: NO(I) };
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
function _h(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function yh(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: DO(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
  return Object.defineProperty(t, 'mods', { value: {} }), t;
}
function DO(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n;
  return t;
}
function bh(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function NO(e) {
  return e.reduce((t, n) => xe(t, n.meta), {});
}
function wh(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function BO(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const o = (n + r) >> 1;
    xy(e, t[o]) < 0 ? (r = o) : (n = o + 1);
  }
  const s = UO(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function UO(e) {
  let t = e;
  for (; (t = t.parent); ) if (Sy(t) && xy(e, t) === 0) return t;
}
function Sy({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function qO(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const r = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(hy, ' '),
      i = o.indexOf('='),
      a = ti(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : ti(o.slice(i + 1));
    if (a in t) {
      let f = t[a];
      en(f) || (f = t[a] = [f]), f.push(l);
    } else t[a] = l;
  }
  return t;
}
function xh(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = lO(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (en(r) ? r.map((o) => o && Kc(o)) : [r && Kc(r)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o));
    });
  }
  return t;
}
function VO(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = en(r) ? r.map((s) => (s == null ? null : '' + s)) : r == null ? r : '' + r);
  }
  return t;
}
const HO = Symbol(''),
  Sh = Symbol(''),
  tf = Symbol(''),
  Ey = Symbol(''),
  Jc = Symbol('');
function Xs() {
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
function fr(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const f = (p) => {
          p === !1
            ? l(Bs(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : RO(p)
                ? l(Bs(2, { from: t, to: p }))
                : (i && r.enterCallbacks[s] === i && typeof p == 'function' && i.push(p), a());
        },
        c = o(() => e.call(r && r.instances[s], t, n, f));
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(f)), u.catch((p) => l(p));
    });
}
function Qa(e, t, n, r, s = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
        if (dy(l)) {
          const c = (l.__vccOpts || l)[t];
          c && o.push(fr(c, n, r, i, a, s));
        } else {
          let f = l();
          o.push(() =>
            f.then((c) => {
              if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
              const u = YR(c) ? c.default : c;
              (i.mods[a] = c), (i.components[a] = u);
              const m = (u.__vccOpts || u)[t];
              return m && fr(m, n, r, i, a, s)();
            }),
          );
        }
    }
  return o;
}
function Eh(e) {
  const t = Un(tf),
    n = Un(Ey),
    r = Wt(() => {
      const l = Os(e.to);
      return t.resolve(l);
    }),
    s = Wt(() => {
      const { matched: l } = r.value,
        { length: f } = l,
        c = l[f - 1],
        u = n.matched;
      if (!c || !u.length) return -1;
      const p = u.findIndex(Ns.bind(null, c));
      if (p > -1) return p;
      const m = Ch(l[f - 2]);
      return f > 1 && Ch(c) === m && u[u.length - 1].path !== m
        ? u.findIndex(Ns.bind(null, l[f - 2]))
        : p;
    }),
    o = Wt(() => s.value > -1 && JO(n.params, r.value.params)),
    i = Wt(() => s.value > -1 && s.value === n.matched.length - 1 && _y(n.params, r.value.params));
  function a(l = {}) {
    if (GO(l)) {
      const f = t[Os(e.replace) ? 'replace' : 'push'](Os(e.to)).catch(Co);
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
  return { route: r, href: Wt(() => r.value.href), isActive: o, isExactActive: i, navigate: a };
}
function WO(e) {
  return e.length === 1 ? e[0] : e;
}
const zO = Hl({
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
    useLink: Eh,
    setup(e, { slots: t }) {
      const n = Vs(Eh(e)),
        { options: r } = Un(tf),
        s = Wt(() => ({
          [kh(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [kh(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }));
      return () => {
        const o = t.default && WO(t.default(n));
        return e.custom
          ? o
          : Xu(
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
  KO = zO;
function GO(e) {
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
function JO(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == 'string') {
      if (r !== s) return !1;
    } else if (!en(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1;
  }
  return !0;
}
function Ch(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const kh = (e, t, n) => e ?? t ?? n,
  YO = Hl({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Un(Jc),
        s = Wt(() => e.route || r.value),
        o = Un(Sh, 0),
        i = Wt(() => {
          let f = Os(o);
          const { matched: c } = s.value;
          let u;
          for (; (u = c[f]) && !u.components; ) f++;
          return f;
        }),
        a = Wt(() => s.value.matched[i.value]);
      Li(
        Sh,
        Wt(() => i.value + 1),
      ),
        Li(HO, a),
        Li(Jc, s);
      const l = h_();
      return (
        Ai(
          () => [l.value, a.value, e.name],
          ([f, c, u], [p, m, x]) => {
            c &&
              ((c.instances[u] = f),
              m &&
                m !== c &&
                f &&
                f === p &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              f && c && (!m || !Ns(c, m) || !p) && (c.enterCallbacks[u] || []).forEach((P) => P(f));
          },
          { flush: 'post' },
        ),
        () => {
          const f = s.value,
            c = e.name,
            u = a.value,
            p = u && u.components[c];
          if (!p) return Ph(n.default, { Component: p, route: f });
          const m = u.props[c],
            x = m ? (m === !0 ? f.params : typeof m == 'function' ? m(f) : m) : null,
            N = Xu(
              p,
              xe({}, x, t, {
                onVnodeUnmounted: (I) => {
                  I.component.isUnmounted && (u.instances[c] = null);
                },
                ref: l,
              }),
            );
          return Ph(n.default, { Component: N, route: f }) || N;
        }
      );
    },
  });
function Ph(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const QO = YO;
function XO(e) {
  const t = IO(e.routes, e),
    n = e.parseQuery || qO,
    r = e.stringifyQuery || xh,
    s = e.history,
    o = Xs(),
    i = Xs(),
    a = Xs(),
    l = Ok(Yn);
  let f = Yn;
  ds &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = Ja.bind(null, (y) => '' + y),
    u = Ja.bind(null, cO),
    p = Ja.bind(null, ti);
  function m(y, O) {
    let k, $;
    return by(y) ? ((k = t.getRecordMatcher(y)), ($ = O)) : ($ = y), t.addRoute($, k);
  }
  function x(y) {
    const O = t.getRecordMatcher(y);
    O && t.removeRoute(O);
  }
  function P() {
    return t.getRoutes().map((y) => y.record);
  }
  function N(y) {
    return !!t.getRecordMatcher(y);
  }
  function I(y, O) {
    if (((O = xe({}, O || l.value)), typeof y == 'string')) {
      const v = Ya(n, y, O.path),
        _ = t.resolve({ path: v.path }, O),
        b = s.createHref(v.fullPath);
      return xe(v, _, { params: p(_.params), hash: ti(v.hash), redirectedFrom: void 0, href: b });
    }
    let k;
    if (y.path != null) k = xe({}, y, { path: Ya(n, y.path, O.path).path });
    else {
      const v = xe({}, y.params);
      for (const _ in v) v[_] == null && delete v[_];
      (k = xe({}, y, { params: u(v) })), (O.params = u(O.params));
    }
    const $ = t.resolve(k, O),
      g = y.hash || '';
    $.params = c(p($.params));
    const d = dO(r, xe({}, y, { hash: iO(g), path: $.path })),
      h = s.createHref(d);
    return xe({ fullPath: d, hash: g, query: r === xh ? VO(y.query) : y.query || {} }, $, {
      redirectedFrom: void 0,
      href: h,
    });
  }
  function T(y) {
    return typeof y == 'string' ? Ya(n, y, l.value.path) : xe({}, y);
  }
  function j(y, O) {
    if (f !== y) return Bs(8, { from: O, to: y });
  }
  function L(y) {
    return K(y);
  }
  function q(y) {
    return L(xe(T(y), { replace: !0 }));
  }
  function J(y) {
    const O = y.matched[y.matched.length - 1];
    if (O && O.redirect) {
      const { redirect: k } = O;
      let $ = typeof k == 'function' ? k(y) : k;
      return (
        typeof $ == 'string' &&
          (($ = $.includes('?') || $.includes('#') ? ($ = T($)) : { path: $ }), ($.params = {})),
        xe({ query: y.query, hash: y.hash, params: $.path != null ? {} : y.params }, $)
      );
    }
  }
  function K(y, O) {
    const k = (f = I(y)),
      $ = l.value,
      g = y.state,
      d = y.force,
      h = y.replace === !0,
      v = J(k);
    if (v)
      return K(
        xe(T(v), { state: typeof v == 'object' ? xe({}, g, v.state) : g, force: d, replace: h }),
        O || k,
      );
    const _ = k;
    _.redirectedFrom = O;
    let b;
    return (
      !d && pO(r, $, k) && ((b = Bs(16, { to: _, from: $ })), _e($, $, !0, !1)),
      (b ? Promise.resolve(b) : V(_, $))
        .catch((w) => (Rn(w) ? (Rn(w, 2) ? w : ke(w)) : Z(w, _, $)))
        .then((w) => {
          if (w) {
            if (Rn(w, 2))
              return K(
                xe({ replace: h }, T(w.to), {
                  state: typeof w.to == 'object' ? xe({}, g, w.to.state) : g,
                  force: d,
                }),
                O || _,
              );
          } else w = A(_, $, !0, h, g);
          return Y(_, $, w), w;
        })
    );
  }
  function ne(y, O) {
    const k = j(y, O);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function B(y) {
    const O = qe.values().next().value;
    return O && typeof O.runWithContext == 'function' ? O.runWithContext(y) : y();
  }
  function V(y, O) {
    let k;
    const [$, g, d] = ZO(y, O);
    k = Qa($.reverse(), 'beforeRouteLeave', y, O);
    for (const v of $)
      v.leaveGuards.forEach((_) => {
        k.push(fr(_, y, O));
      });
    const h = ne.bind(null, y, O);
    return (
      k.push(h),
      fe(k)
        .then(() => {
          k = [];
          for (const v of o.list()) k.push(fr(v, y, O));
          return k.push(h), fe(k);
        })
        .then(() => {
          k = Qa(g, 'beforeRouteUpdate', y, O);
          for (const v of g)
            v.updateGuards.forEach((_) => {
              k.push(fr(_, y, O));
            });
          return k.push(h), fe(k);
        })
        .then(() => {
          k = [];
          for (const v of d)
            if (v.beforeEnter)
              if (en(v.beforeEnter)) for (const _ of v.beforeEnter) k.push(fr(_, y, O));
              else k.push(fr(v.beforeEnter, y, O));
          return k.push(h), fe(k);
        })
        .then(
          () => (
            y.matched.forEach((v) => (v.enterCallbacks = {})),
            (k = Qa(d, 'beforeRouteEnter', y, O, B)),
            k.push(h),
            fe(k)
          ),
        )
        .then(() => {
          k = [];
          for (const v of i.list()) k.push(fr(v, y, O));
          return k.push(h), fe(k);
        })
        .catch((v) => (Rn(v, 8) ? v : Promise.reject(v)))
    );
  }
  function Y(y, O, k) {
    a.list().forEach(($) => B(() => $(y, O, k)));
  }
  function A(y, O, k, $, g) {
    const d = j(y, O);
    if (d) return d;
    const h = O === Yn,
      v = ds ? history.state : {};
    k &&
      ($ || h
        ? s.replace(y.fullPath, xe({ scroll: h && v && v.scroll }, g))
        : s.push(y.fullPath, g)),
      (l.value = y),
      _e(y, O, k, h),
      ke();
  }
  let H;
  function te() {
    H ||
      (H = s.listen((y, O, k) => {
        if (!ht.listening) return;
        const $ = I(y),
          g = J($);
        if (g) {
          K(xe(g, { replace: !0, force: !0 }), $).catch(Co);
          return;
        }
        f = $;
        const d = l.value;
        ds && wO(ph(d.fullPath, k.delta), Ql()),
          V($, d)
            .catch((h) =>
              Rn(h, 12)
                ? h
                : Rn(h, 2)
                  ? (K(xe(T(h.to), { force: !0 }), $)
                      .then((v) => {
                        Rn(v, 20) && !k.delta && k.type === ni.pop && s.go(-1, !1);
                      })
                      .catch(Co),
                    Promise.reject())
                  : (k.delta && s.go(-k.delta, !1), Z(h, $, d)),
            )
            .then((h) => {
              (h = h || A($, d, !1)),
                h &&
                  (k.delta && !Rn(h, 8)
                    ? s.go(-k.delta, !1)
                    : k.type === ni.pop && Rn(h, 20) && s.go(-1, !1)),
                Y($, d, h);
            })
            .catch(Co);
      }));
  }
  let X = Xs(),
    Q = Xs(),
    W;
  function Z(y, O, k) {
    ke(y);
    const $ = Q.list();
    return $.length ? $.forEach((g) => g(y, O, k)) : console.error(y), Promise.reject(y);
  }
  function Ie() {
    return W && l.value !== Yn
      ? Promise.resolve()
      : new Promise((y, O) => {
          X.add([y, O]);
        });
  }
  function ke(y) {
    return W || ((W = !y), te(), X.list().forEach(([O, k]) => (y ? k(y) : O())), X.reset()), y;
  }
  function _e(y, O, k, $) {
    const { scrollBehavior: g } = e;
    if (!ds || !g) return Promise.resolve();
    const d =
      (!k && xO(ph(y.fullPath, 0))) || (($ || !k) && history.state && history.state.scroll) || null;
    return __()
      .then(() => g(y, O, d))
      .then((h) => h && bO(h))
      .catch((h) => Z(h, y, O));
  }
  const ue = (y) => s.go(y);
  let Ue;
  const qe = new Set(),
    ht = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: x,
      clearRoutes: t.clearRoutes,
      hasRoute: N,
      getRoutes: P,
      resolve: I,
      options: e,
      push: L,
      replace: q,
      go: ue,
      back: () => ue(-1),
      forward: () => ue(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: Q.add,
      isReady: Ie,
      install(y) {
        const O = this;
        y.component('RouterLink', KO),
          y.component('RouterView', QO),
          (y.config.globalProperties.$router = O),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Os(l),
          }),
          ds && !Ue && l.value === Yn && ((Ue = !0), L(s.location).catch((g) => {}));
        const k = {};
        for (const g in Yn) Object.defineProperty(k, g, { get: () => l.value[g], enumerable: !0 });
        y.provide(tf, O), y.provide(Ey, d_(k)), y.provide(Jc, l);
        const $ = y.unmount;
        qe.add(y),
          (y.unmount = function () {
            qe.delete(y),
              qe.size < 1 && ((f = Yn), H && H(), (H = null), (l.value = Yn), (Ue = !1), (W = !1)),
              $();
          });
      },
    };
  function fe(y) {
    return y.reduce((O, k) => O.then(() => B(k)), Promise.resolve());
  }
  return ht;
}
function ZO(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => Ns(f, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((f) => Ns(f, l)) || s.push(l));
  }
  return [n, r, s];
}
const eL = [
    {
      path: '/',
      component: () => Dn(() => import('./MainLayout-T1HJA7OM.js'), __vite__mapDeps([10, 11, 12])),
      children: [
        {
          path: '',
          component: () =>
            Dn(() => import('./IndexPage-DTA1vBuP.js'), __vite__mapDeps([13, 12, 14])),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () =>
        Dn(() => import('./ErrorNotFound-cEq88Hg6.js'), __vite__mapDeps([15, 11, 12])),
    },
  ],
  Xa = JR(function () {
    return XO({ scrollBehavior: () => ({ left: 0, top: 0 }), routes: eL, history: PO('/') });
  });
async function tL(e, t) {
  const n = e(KR);
  n.use(zR, t);
  const r = ql(typeof Xa == 'function' ? await Xa({}) : Xa);
  return { app: n, router: r };
}
const nL = { config: {} };
async function rL({ app: e, router: t }) {
  e.use(t), e.mount('#q-app');
}
tL(wR, nL).then(rL);
export {
  pL as $,
  mg as A,
  vL as B,
  lL as C,
  hL as D,
  dc as E,
  uL as F,
  Fo as G,
  mL as H,
  fL as I,
  m0 as J,
  aL as K,
  vg as L,
  cL as M,
  Yr as N,
  gg as O,
  vs as P,
  jg as Q,
  sL as R,
  Rl as S,
  oL as T,
  _L as U,
  bL as V,
  wL as W,
  dl as X,
  Tm as Y,
  Dg as Z,
  zS as _,
  yb as a,
  BR as a$,
  yv as a0,
  vv as a1,
  LS as a2,
  RL as a3,
  A1 as a4,
  Xr as a5,
  Ht as a6,
  qs as a7,
  ki as a8,
  Pi as a9,
  un as aA,
  EL as aB,
  P1 as aC,
  jS as aD,
  AE as aE,
  kL as aF,
  Oc as aG,
  ML as aH,
  NL as aI,
  BL as aJ,
  PL as aK,
  Ss as aL,
  KL as aM,
  Wt as aN,
  Xu as aO,
  h_ as aP,
  es as aQ,
  A_ as aR,
  BP as aS,
  M_ as aT,
  ei as aU,
  __ as aV,
  Ds as aW,
  Un as aX,
  iA as aY,
  Ai as aZ,
  sA as a_,
  Xm as aa,
  Mu as ab,
  $s as ac,
  Ho as ad,
  Ym as ae,
  Qm as af,
  Im as ag,
  Bn as ah,
  UL as ai,
  OL as aj,
  IL as ak,
  vn as al,
  $L as am,
  jL as an,
  AL as ao,
  Yd as ap,
  TL as aq,
  LL as ar,
  SL as as,
  DL as at,
  FL as au,
  Lt as av,
  wv as aw,
  k1 as ax,
  Zx as ay,
  CL as az,
  b0 as b,
  yn as b0,
  ZL as b1,
  QL as b2,
  Wk as b3,
  zc as b4,
  GL as b5,
  nA as b6,
  eA as b7,
  tA as b8,
  YL as b9,
  rh as ba,
  XL as bb,
  JL as bc,
  qL as bd,
  Li as be,
  oA as bf,
  Vs as bg,
  T_ as bh,
  rA as bi,
  Hl as bj,
  ey as bk,
  X_ as bl,
  Nk as bm,
  WL as bn,
  Mt as bo,
  $P as bp,
  ak as bq,
  tP as br,
  ny as bs,
  HL as bt,
  dn as bu,
  VL as bv,
  jP as bw,
  Os as bx,
  zL as by,
  Us as c,
  xi as d,
  Ms as e,
  Nn as f,
  Vt as g,
  $b as h,
  gn as i,
  dL as j,
  gL as k,
  Rt as l,
  g0 as m,
  du as n,
  qy as o,
  Xh as p,
  yL as q,
  iL as r,
  an as s,
  Bg as t,
  qf as u,
  ng as v,
  Si as w,
  Cb as x,
  bw as y,
  xL as z,
};
