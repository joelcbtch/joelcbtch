import {
  s as H,
  M as W,
  T as X,
  k as i,
  p as A,
  H as de,
  n as D,
  e as ve,
  i as re,
  a as pe,
  K as p,
  X as fe,
  N as me,
  r as be,
  Q as ge,
  d as he,
  u as ye,
  o as ke,
} from './index-CfCsWGu_.js';
import { d as z, h as qe } from './render-DAqPa2vd-D0yqDhMx.js';
const Q = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  ae = { size: String };
function le(e, t = Q) {
  return i(() =>
    e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null,
  );
}
const U = '0 0 24 24',
  F = (e) => e,
  I = (e) => `ionicons ${e}`,
  ue = {
    'mdi-': (e) => `mdi ${e}`,
    'icon-': F,
    'bt-': (e) => `bt ${e}`,
    'eva-': (e) => `eva ${e}`,
    'ion-md': I,
    'ion-ios': I,
    'ion-logo': I,
    'iconfont ': F,
    'ti-': (e) => `themify-icon ${e}`,
    'bi-': (e) => `bootstrap-icons ${e}`,
    'i-': F,
  },
  se = { o_: '-outlined', r_: '-round', s_: '-sharp' },
  oe = { sym_o_: '-outlined', sym_r_: '-rounded', sym_s_: '-sharp' },
  xe = new RegExp('^(' + Object.keys(ue).join('|') + ')'),
  $e = new RegExp('^(' + Object.keys(se).join('|') + ')'),
  Z = new RegExp('^(' + Object.keys(oe).join('|') + ')'),
  we = /^[Mm]\s?[-+]?\.?\d/,
  _e = /^img:/,
  Le = /^svguse:/,
  Ce = /^ion-/,
  Be = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,
  V = H({
    name: 'QIcon',
    props: {
      ...ae,
      tag: { type: String, default: 'i' },
      name: String,
      color: String,
      left: Boolean,
      right: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: r },
        } = W(),
        n = le(e),
        s = i(
          () =>
            'q-icon' +
            (e.left === !0 ? ' on-left' : '') +
            (e.right === !0 ? ' on-right' : '') +
            (e.color !== void 0 ? ` text-${e.color}` : ''),
        ),
        v = i(() => {
          let c,
            l = e.name;
          if (l === 'none' || !l) return { none: !0 };
          if (r.iconMapFn !== null) {
            const o = r.iconMapFn(l);
            if (o !== void 0)
              if (o.icon !== void 0) {
                if (((l = o.icon), l === 'none' || !l)) return { none: !0 };
              } else return { cls: o.cls, content: o.content !== void 0 ? o.content : ' ' };
          }
          if (we.test(l) === !0) {
            const [o, h = U] = l.split('|');
            return {
              svg: !0,
              viewBox: h,
              nodes: o.split('&&').map((u) => {
                const [y, b, k] = u.split('@@');
                return p('path', { style: b, d: y, transform: k });
              }),
            };
          }
          if (_e.test(l) === !0) return { img: !0, src: l.substring(4) };
          if (Le.test(l) === !0) {
            const [o, h = U] = l.split('|');
            return { svguse: !0, src: o.substring(7), viewBox: h };
          }
          let x = ' ';
          const g = l.match(xe);
          if (g !== null) c = ue[g[1]](l);
          else if (Be.test(l) === !0) c = l;
          else if (Ce.test(l) === !0)
            c = `ionicons ion-${r.platform.is.ios === !0 ? 'ios' : 'md'}${l.substring(3)}`;
          else if (Z.test(l) === !0) {
            c = 'notranslate material-symbols';
            const o = l.match(Z);
            o !== null && ((l = l.substring(6)), (c += oe[o[1]])), (x = l);
          } else {
            c = 'notranslate material-icons';
            const o = l.match($e);
            o !== null && ((l = l.substring(2)), (c += se[o[1]])), (x = l);
          }
          return { cls: c, content: x };
        });
      return () => {
        const c = { class: s.value, style: n.value, 'aria-hidden': 'true' };
        return v.value.none === !0
          ? p(e.tag, c, qe(t.default))
          : v.value.img === !0
            ? p(e.tag, c, z(t.default, [p('img', { src: v.value.src })]))
            : v.value.svg === !0
              ? p(
                  e.tag,
                  c,
                  z(t.default, [
                    p('svg', { viewBox: v.value.viewBox || '0 0 24 24' }, v.value.nodes),
                  ]),
                )
              : v.value.svguse === !0
                ? p(
                    e.tag,
                    c,
                    z(t.default, [
                      p('svg', { viewBox: v.value.viewBox }, [
                        p('use', { 'xlink:href': v.value.src }),
                      ]),
                    ]),
                  )
                : (v.value.cls !== void 0 && (c.class += ' ' + v.value.cls),
                  p(e.tag, c, z(t.default, [v.value.content])));
      };
    },
  }),
  Ee = { size: { type: [String, Number], default: '1em' }, color: String };
function Se(e) {
  return {
    cSize: i(() => (e.size in Q ? `${Q[e.size]}px` : e.size)),
    classes: i(() => 'q-spinner' + (e.color ? ` text-${e.color}` : '')),
  };
}
const Oe = H({
  name: 'QSpinner',
  props: { ...Ee, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: t, classes: r } = Se(e);
    return () =>
      p(
        'svg',
        {
          class: r.value + ' q-spinner-mat',
          width: t.value,
          height: t.value,
          viewBox: '25 25 50 50',
        },
        [
          p('circle', {
            class: 'path',
            cx: '50',
            cy: '50',
            r: '20',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': e.thickness,
            'stroke-miterlimit': '10',
          }),
        ],
      );
  },
});
function Ae(e, t) {
  const r = e.style;
  for (const n in t) r[n] = t[n];
}
function Je(e) {
  if (e == null) return;
  if (typeof e == 'string')
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = ge(e);
  if (t) return t.$el || t;
}
function Te(e, t = 250) {
  let r = !1,
    n;
  return function () {
    return (
      r === !1 &&
        ((r = !0),
        setTimeout(() => {
          r = !1;
        }, t),
        (n = e.apply(this, arguments))),
      n
    );
  };
}
function Y(e, t, r, n) {
  r.modifiers.stop === !0 && re(e);
  const s = r.modifiers.color;
  let v = r.modifiers.center;
  v = v === !0 || n === !0;
  const c = document.createElement('span'),
    l = document.createElement('span'),
    x = ke(e),
    { left: g, top: o, width: h, height: u } = t.getBoundingClientRect(),
    y = Math.sqrt(h * h + u * u),
    b = y / 2,
    k = `${(h - y) / 2}px`,
    d = v ? k : `${x.left - g - b}px`,
    q = `${(u - y) / 2}px`,
    O = v ? q : `${x.top - o - b}px`;
  (l.className = 'q-ripple__inner'),
    Ae(l, {
      height: `${y}px`,
      width: `${y}px`,
      transform: `translate3d(${d},${O},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (c.className = `q-ripple${s ? ' text-' + s : ''}`),
    c.setAttribute('dir', 'ltr'),
    c.appendChild(l),
    t.appendChild(c);
  const E = () => {
    c.remove(), clearTimeout(S);
  };
  r.abort.push(E);
  let S = setTimeout(() => {
    l.classList.add('q-ripple__inner--enter'),
      (l.style.transform = `translate3d(${k},${q},0) scale3d(1,1,1)`),
      (l.style.opacity = 0.2),
      (S = setTimeout(() => {
        l.classList.remove('q-ripple__inner--enter'),
          l.classList.add('q-ripple__inner--leave'),
          (l.style.opacity = 0),
          (S = setTimeout(() => {
            c.remove(), r.abort.splice(r.abort.indexOf(E), 1);
          }, 275));
      }, 250));
  }, 50);
}
function G(e, { modifiers: t, value: r, arg: n }) {
  const s = Object.assign({}, e.cfg.ripple, t, r);
  e.modifiers = {
    early: s.early === !0,
    stop: s.stop === !0,
    center: s.center === !0,
    color: s.color || n,
    keyCodes: [].concat(s.keyCodes || 13),
  };
}
const je = be({
    name: 'ripple',
    beforeMount(e, t) {
      const r = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (r.ripple === !1) return;
      const n = {
        cfg: r,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(s) {
          n.enabled === !0 &&
            s.qSkipRipple !== !0 &&
            s.type === (n.modifiers.early === !0 ? 'pointerdown' : 'click') &&
            Y(s, e, n, s.qKeyEvent === !0);
        },
        keystart: Te((s) => {
          n.enabled === !0 &&
            s.qSkipRipple !== !0 &&
            D(s, n.modifiers.keyCodes) === !0 &&
            s.type === `key${n.modifiers.early === !0 ? 'down' : 'up'}` &&
            Y(s, e, n, !0);
        }, 300),
      };
      G(n, t),
        (e.__qripple = n),
        ye(n, 'main', [
          [e, 'pointerdown', 'start', 'passive'],
          [e, 'click', 'start', 'passive'],
          [e, 'keydown', 'keystart', 'passive'],
          [e, 'keyup', 'keystart', 'passive'],
        ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const r = e.__qripple;
        r !== void 0 &&
          ((r.enabled = t.value !== !1),
          r.enabled === !0 && Object(t.value) === t.value && G(r, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 &&
        (t.abort.forEach((r) => {
          r();
        }),
        he(t, 'main'),
        delete e._qripple);
    },
  }),
  ie = {
    left: 'start',
    center: 'center',
    right: 'end',
    between: 'between',
    around: 'around',
    evenly: 'evenly',
    stretch: 'stretch',
  },
  Re = Object.keys(ie),
  Me = { align: { type: String, validator: (e) => Re.includes(e) } };
function Pe(e) {
  return i(() => {
    const t = e.align === void 0 ? (e.vertical === !0 ? 'stretch' : 'left') : e.align;
    return `${e.vertical === !0 ? 'items' : 'justify'}-${ie[t]}`;
  });
}
function ze(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function et(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function J(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
function ee(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ke(e, t) {
  for (const r in t) {
    const n = t[r],
      s = e[r];
    if (typeof n == 'string') {
      if (n !== s) return !1;
    } else if (Array.isArray(s) === !1 || s.length !== n.length || n.some((v, c) => v !== s[c]))
      return !1;
  }
  return !0;
}
function te(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((r, n) => r === t[n])
    : e.length === 1 && e[0] === t;
}
function Ne(e, t) {
  return Array.isArray(e) === !0 ? te(e, t) : Array.isArray(t) === !0 ? te(t, e) : e === t;
}
function Fe(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (Ne(e[r], t[r]) === !1) return !1;
  return !0;
}
const ce = {
    to: [String, Object],
    replace: Boolean,
    href: String,
    target: String,
    disable: Boolean,
  },
  tt = {
    ...ce,
    exact: Boolean,
    activeClass: { type: String, default: 'q-router-link--active' },
    exactActiveClass: { type: String, default: 'q-router-link--exact-active' },
  };
function Ie({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const r = W(),
    { props: n, proxy: s, emit: v } = r,
    c = ze(r),
    l = i(() => n.disable !== !0 && n.href !== void 0),
    x =
      t === !0
        ? i(
            () =>
              c === !0 &&
              n.disable !== !0 &&
              l.value !== !0 &&
              n.to !== void 0 &&
              n.to !== null &&
              n.to !== '',
          )
        : i(() => c === !0 && l.value !== !0 && n.to !== void 0 && n.to !== null && n.to !== ''),
    g = i(() => (x.value === !0 ? O(n.to) : null)),
    o = i(() => g.value !== null),
    h = i(() => l.value === !0 || o.value === !0),
    u = i(() => (n.type === 'a' || h.value === !0 ? 'a' : n.tag || e || 'div')),
    y = i(() =>
      l.value === !0
        ? { href: n.href, target: n.target }
        : o.value === !0
          ? { href: g.value.href, target: n.target }
          : {},
    ),
    b = i(() => {
      if (o.value === !1) return -1;
      const { matched: f } = g.value,
        { length: w } = f,
        _ = f[w - 1];
      if (_ === void 0) return -1;
      const C = s.$route.matched;
      if (C.length === 0) return -1;
      const B = C.findIndex(ee.bind(null, _));
      if (B !== -1) return B;
      const K = J(f[w - 2]);
      return w > 1 && J(_) === K && C[C.length - 1].path !== K
        ? C.findIndex(ee.bind(null, f[w - 2]))
        : B;
    }),
    k = i(() => o.value === !0 && b.value !== -1 && Ke(s.$route.params, g.value.params)),
    d = i(
      () =>
        k.value === !0 &&
        b.value === s.$route.matched.length - 1 &&
        Fe(s.$route.params, g.value.params),
    ),
    q = i(() =>
      o.value === !0
        ? d.value === !0
          ? ` ${n.exactActiveClass} ${n.activeClass}`
          : n.exact === !0
            ? ''
            : k.value === !0
              ? ` ${n.activeClass}`
              : ''
        : '',
    );
  function O(f) {
    try {
      return s.$router.resolve(f);
    } catch {}
    return null;
  }
  function E(f, { returnRouterError: w, to: _ = n.to, replace: C = n.replace } = {}) {
    if (n.disable === !0) return f.preventDefault(), Promise.resolve(!1);
    if (
      f.metaKey ||
      f.altKey ||
      f.ctrlKey ||
      f.shiftKey ||
      (f.button !== void 0 && f.button !== 0) ||
      n.target === '_blank'
    )
      return Promise.resolve(!1);
    f.preventDefault();
    const B = s.$router[C === !0 ? 'replace' : 'push'](_);
    return w === !0 ? B : B.then(() => {}).catch(() => {});
  }
  function S(f) {
    if (o.value === !0) {
      const w = (_) => E(f, _);
      v('click', f, w), f.defaultPrevented !== !0 && w();
    } else v('click', f);
  }
  return {
    hasRouterLink: o,
    hasHrefLink: l,
    hasLink: h,
    linkTag: u,
    resolvedLink: g,
    linkIsActive: k,
    linkIsExactActive: d,
    linkClass: q,
    linkAttrs: y,
    getLink: O,
    navigateToRouterLink: E,
    navigateOnClick: S,
  };
}
const ne = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  De = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  Qe = ['button', 'submit', 'reset'],
  He = /[^\s]\/[^\s]/,
  We = ['flat', 'outline', 'push', 'unelevated'];
function Xe(e, t) {
  return e.flat === !0
    ? 'flat'
    : e.outline === !0
      ? 'outline'
      : e.push === !0
        ? 'push'
        : e.unelevated === !0
          ? 'unelevated'
          : t;
}
const Ue = {
    ...ae,
    ...ce,
    type: { type: String, default: 'button' },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...We.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: { ...Me.align, default: 'center' },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  },
  Ze = { ...Ue, round: Boolean };
function Ve(e) {
  const t = le(e, De),
    r = Pe(e),
    {
      hasRouterLink: n,
      hasLink: s,
      linkTag: v,
      linkAttrs: c,
      navigateOnClick: l,
    } = Ie({ fallbackTag: 'button' }),
    x = i(() => {
      const d = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, d, {
            padding: e.padding
              .split(/\s+/)
              .map((q) => (q in ne ? ne[q] + 'px' : q))
              .join(' '),
            minWidth: '0',
            minHeight: '0',
          })
        : d;
    }),
    g = i(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    o = i(() => e.disable !== !0 && e.loading !== !0),
    h = i(() => (o.value === !0 ? e.tabindex || 0 : -1)),
    u = i(() => Xe(e, 'standard')),
    y = i(() => {
      const d = { tabindex: h.value };
      return (
        s.value === !0
          ? Object.assign(d, c.value)
          : Qe.includes(e.type) === !0 && (d.type = e.type),
        v.value === 'a'
          ? (e.disable === !0
              ? (d['aria-disabled'] = 'true')
              : d.href === void 0 && (d.role = 'button'),
            n.value !== !0 && He.test(e.type) === !0 && (d.type = e.type))
          : e.disable === !0 && ((d.disabled = ''), (d['aria-disabled'] = 'true')),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(d, {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': e.percentage,
          }),
        d
      );
    }),
    b = i(() => {
      let d;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (d = `text-${e.textColor || e.color}`)
          : (d = `bg-${e.color} text-${e.textColor || 'white'}`)
        : e.textColor && (d = `text-${e.textColor}`);
      const q =
        e.round === !0
          ? 'round'
          : `rectangle${g.value === !0 ? ' q-btn--rounded' : e.square === !0 ? ' q-btn--square' : ''}`;
      return (
        `q-btn--${u.value} q-btn--${q}` +
        (d !== void 0 ? ' ' + d : '') +
        (o.value === !0
          ? ' q-btn--actionable q-focusable q-hoverable'
          : e.disable === !0
            ? ' disabled'
            : '') +
        (e.fab === !0 ? ' q-btn--fab' : e.fabMini === !0 ? ' q-btn--fab-mini' : '') +
        (e.noCaps === !0 ? ' q-btn--no-uppercase' : '') +
        (e.dense === !0 ? ' q-btn--dense' : '') +
        (e.stretch === !0 ? ' no-border-radius self-stretch' : '') +
        (e.glossy === !0 ? ' glossy' : '') +
        (e.square ? ' q-btn--square' : '')
      );
    }),
    k = i(
      () =>
        r.value +
        (e.stack === !0 ? ' column' : ' row') +
        (e.noWrap === !0 ? ' no-wrap text-no-wrap' : '') +
        (e.loading === !0 ? ' q-btn__content--hidden' : ''),
    );
  return {
    classes: b,
    style: x,
    innerClasses: k,
    attributes: y,
    hasLink: s,
    linkTag: v,
    navigateOnClick: l,
    isActionable: o,
  };
}
const { passiveCapture: $ } = de;
let T = null,
  j = null,
  R = null;
const nt = H({
  name: 'QBtn',
  props: { ...Ze, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] },
  emits: ['click', 'keydown', 'mousedown', 'keyup'],
  setup(e, { slots: t, emit: r }) {
    const { proxy: n } = W(),
      {
        classes: s,
        style: v,
        innerClasses: c,
        attributes: l,
        hasLink: x,
        linkTag: g,
        navigateOnClick: o,
        isActionable: h,
      } = Ve(e),
      u = X(null),
      y = X(null);
    let b = null,
      k,
      d = null;
    const q = i(() => e.label !== void 0 && e.label !== null && e.label !== ''),
      O = i(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : { keyCodes: x.value === !0 ? [13, 32] : [13], ...(e.ripple === !0 ? {} : e.ripple) },
      ),
      E = i(() => ({ center: e.round })),
      S = i(() => {
        const a = Math.max(0, Math.min(100, e.percentage));
        return a > 0 ? { transition: 'transform 0.6s', transform: `translateX(${a - 100}%)` } : {};
      }),
      f = i(() => {
        if (e.loading === !0)
          return { onMousedown: P, onTouchstart: P, onClick: P, onKeydown: P, onKeyup: P };
        if (h.value === !0) {
          const a = { onClick: _, onKeydown: C, onMousedown: K };
          if (n.$q.platform.has.touch === !0) {
            const m = e.onTouchstart !== void 0 ? '' : 'Passive';
            a[`onTouchstart${m}`] = B;
          }
          return a;
        }
        return { onClick: A };
      }),
      w = i(() => ({
        ref: u,
        class: 'q-btn q-btn-item non-selectable no-outline ' + s.value,
        style: v.value,
        ...l.value,
        ...f.value,
      }));
    function _(a) {
      if (u.value !== null) {
        if (a !== void 0) {
          if (a.defaultPrevented === !0) return;
          const m = document.activeElement;
          if (
            e.type === 'submit' &&
            m !== document.body &&
            u.value.contains(m) === !1 &&
            m.contains(u.value) === !1
          ) {
            a.qAvoidFocus !== !0 && u.value.focus();
            const N = () => {
              document.removeEventListener('keydown', A, !0),
                document.removeEventListener('keyup', N, $),
                u.value?.removeEventListener('blur', N, $);
            };
            document.addEventListener('keydown', A, !0),
              document.addEventListener('keyup', N, $),
              u.value.addEventListener('blur', N, $);
          }
        }
        o(a);
      }
    }
    function C(a) {
      u.value !== null &&
        (r('keydown', a),
        D(a, [13, 32]) === !0 &&
          j !== u.value &&
          (j !== null && M(),
          a.defaultPrevented !== !0 &&
            (a.qAvoidFocus !== !0 && u.value.focus(),
            (j = u.value),
            u.value.classList.add('q-btn--active'),
            document.addEventListener('keyup', L, !0),
            u.value.addEventListener('blur', L, $)),
          A(a)));
    }
    function B(a) {
      u.value !== null &&
        (r('touchstart', a),
        a.defaultPrevented !== !0 &&
          (T !== u.value &&
            (T !== null && M(),
            (T = u.value),
            (b = a.target),
            b.addEventListener('touchcancel', L, $),
            b.addEventListener('touchend', L, $)),
          (k = !0),
          d !== null && clearTimeout(d),
          (d = setTimeout(() => {
            (d = null), (k = !1);
          }, 200))));
    }
    function K(a) {
      u.value !== null &&
        ((a.qSkipRipple = k === !0),
        r('mousedown', a),
        a.defaultPrevented !== !0 &&
          R !== u.value &&
          (R !== null && M(),
          (R = u.value),
          u.value.classList.add('q-btn--active'),
          document.addEventListener('mouseup', L, $)));
    }
    function L(a) {
      if (u.value !== null && !(a?.type === 'blur' && document.activeElement === u.value)) {
        if (a?.type === 'keyup') {
          if (j === u.value && D(a, [13, 32]) === !0) {
            const m = new MouseEvent('click', a);
            (m.qKeyEvent = !0),
              a.defaultPrevented === !0 && ve(m),
              a.cancelBubble === !0 && re(m),
              u.value.dispatchEvent(m),
              A(a),
              (a.qKeyEvent = !0);
          }
          r('keyup', a);
        }
        M();
      }
    }
    function M(a) {
      const m = y.value;
      a !== !0 &&
        (T === u.value || R === u.value) &&
        m !== null &&
        m !== document.activeElement &&
        (m.setAttribute('tabindex', -1), m.focus()),
        T === u.value &&
          (b !== null &&
            (b.removeEventListener('touchcancel', L, $), b.removeEventListener('touchend', L, $)),
          (T = b = null)),
        R === u.value && (document.removeEventListener('mouseup', L, $), (R = null)),
        j === u.value &&
          (document.removeEventListener('keyup', L, !0),
          u.value?.removeEventListener('blur', L, $),
          (j = null)),
        u.value?.classList.remove('q-btn--active');
    }
    function P(a) {
      A(a), (a.qSkipRipple = !0);
    }
    return (
      pe(() => {
        M(!0);
      }),
      Object.assign(n, {
        click: (a) => {
          h.value === !0 && _(a);
        },
      }),
      () => {
        let a = [];
        e.icon !== void 0 &&
          a.push(p(V, { name: e.icon, left: e.stack !== !0 && q.value === !0, role: 'img' })),
          q.value === !0 && a.push(p('span', { class: 'block' }, [e.label])),
          (a = z(t.default, a)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            a.push(
              p(V, { name: e.iconRight, right: e.stack !== !0 && q.value === !0, role: 'img' }),
            );
        const m = [p('span', { class: 'q-focus-helper', ref: y })];
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            m.push(
              p(
                'span',
                {
                  class:
                    'q-btn__progress absolute-full overflow-hidden' +
                    (e.darkPercentage === !0 ? ' q-btn__progress--dark' : ''),
                },
                [p('span', { class: 'q-btn__progress-indicator fit block', style: S.value })],
              ),
            ),
          m.push(
            p(
              'span',
              { class: 'q-btn__content text-center col items-center q-anchor--skip ' + c.value },
              a,
            ),
          ),
          e.loading !== null &&
            m.push(
              p(me, { name: 'q-transition--fade' }, () =>
                e.loading === !0
                  ? [
                      p(
                        'span',
                        { key: 'loading', class: 'absolute-full flex flex-center' },
                        t.loading !== void 0 ? t.loading() : [p(Oe)],
                      ),
                    ]
                  : null,
              ),
            ),
          fe(p(g.value, w.value, m), [[je, O.value, void 0, E.value]])
        );
      }
    );
  },
});
export { Ie as N, Ae as P, V as Y, Je as Z, et as e, nt as n, tt as t, ze as z };
