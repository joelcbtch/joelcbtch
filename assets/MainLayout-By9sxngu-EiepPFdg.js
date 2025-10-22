import {
  P as Qe,
  Z as kt,
  t as _t,
  N as Ct,
  n as Lt,
  e as $t,
  z as Tt,
  Y as Et,
} from './QBtn-DYb13IGb-DVwM0Orh.js';
import {
  $ as ot,
  T as C,
  q as St,
  g as Le,
  h as ne,
  O as B,
  s as H,
  M,
  S as rt,
  k as f,
  j as te,
  v as lt,
  y as x,
  z as Bt,
  K as k,
  H as F,
  c as Be,
  W as I,
  a as D,
  L as U,
  t as ze,
  m as W,
  r as zt,
  d as be,
  b as V,
  f as we,
  u as oe,
  o as $e,
  e as Re,
  i as ge,
  l as Ot,
  X as Ht,
  n as Vt,
  p as Oe,
  A as E,
  _ as Ft,
  R as ie,
  Z as Te,
  w as Mt,
  x as At,
  B as Wt,
  P as Pt,
  F as Qt,
  C as Ne,
  D as Rt,
  E as Nt,
  G as Dt,
  I as ue,
  J as jt,
} from './index-CfCsWGu_.js';
import { d as Xt, h as j, a as at, s as De } from './render-DAqPa2vd-D0yqDhMx.js';
const Kt = H({
    name: 'QToolbarTitle',
    props: { shrink: Boolean },
    setup(e, { slots: o }) {
      const r = f(() => 'q-toolbar__title ellipsis' + (e.shrink === !0 ? ' col-shrink' : ''));
      return () => k('div', { class: r.value }, j(o.default));
    },
  }),
  It = H({
    name: 'QToolbar',
    props: { inset: Boolean },
    setup(e, { slots: o }) {
      const r = f(
        () => 'q-toolbar row no-wrap items-center' + (e.inset === !0 ? ' q-toolbar--inset' : ''),
      );
      return () => k('div', { class: r.value, role: 'toolbar' }, j(o.default));
    },
  });
function Ut() {
  const e = C(!rt.value);
  return (
    e.value === !1 &&
      I(() => {
        e.value = !0;
      }),
    { isHydrated: e }
  );
}
const nt = typeof ResizeObserver < 'u',
  je =
    nt === !0
      ? {}
      : {
          style:
            'display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;',
          url: 'about:blank',
        },
  Ee = H({
    name: 'QResizeObserver',
    props: { debounce: { type: [String, Number], default: 100 } },
    emits: ['resize'],
    setup(e, { emit: o }) {
      let r = null,
        a,
        t = { width: -1, height: -1 };
      function l(c) {
        c === !0 || e.debounce === 0 || e.debounce === '0'
          ? u()
          : r === null && (r = setTimeout(u, e.debounce));
      }
      function u() {
        if ((r !== null && (clearTimeout(r), (r = null)), a)) {
          const { offsetWidth: c, offsetHeight: d } = a;
          (c !== t.width || d !== t.height) && ((t = { width: c, height: d }), o('resize', t));
        }
      }
      const { proxy: v } = M();
      if (((v.trigger = l), nt === !0)) {
        let c;
        const d = (i) => {
          (a = v.$el.parentNode),
            a
              ? ((c = new ResizeObserver(l)), c.observe(a), u())
              : i !== !0 &&
                U(() => {
                  d(!0);
                });
        };
        return (
          I(() => {
            d();
          }),
          D(() => {
            r !== null && clearTimeout(r),
              c !== void 0 && (c.disconnect !== void 0 ? c.disconnect() : a && c.unobserve(a));
          }),
          Be
        );
      } else {
        let c = function () {
            r !== null && (clearTimeout(r), (r = null)),
              b !== void 0 &&
                (b.removeEventListener !== void 0 && b.removeEventListener('resize', l, F.passive),
                (b = void 0));
          },
          d = function () {
            c(),
              a?.contentDocument &&
                ((b = a.contentDocument.defaultView),
                b.addEventListener('resize', l, F.passive),
                u());
          };
        const { isHydrated: i } = Ut();
        let b;
        return (
          I(() => {
            U(() => {
              (a = v.$el), a && d();
            });
          }),
          D(c),
          () => {
            if (i.value === !0)
              return k('object', {
                class: 'q--avoid-card-border',
                style: je.style,
                tabindex: -1,
                type: 'text/html',
                data: je.url,
                'aria-hidden': 'true',
                onLoad: d,
              });
          }
        );
      }
    },
  }),
  Yt = H({
    name: 'QHeader',
    props: {
      modelValue: { type: Boolean, default: !0 },
      reveal: Boolean,
      revealOffset: { type: Number, default: 250 },
      bordered: Boolean,
      elevated: Boolean,
      heightHint: { type: [String, Number], default: 50 },
    },
    emits: ['reveal', 'focusin'],
    setup(e, { slots: o, emit: r }) {
      const {
          proxy: { $q: a },
        } = M(),
        t = ze(ue, W);
      if (t === W) return console.error('QHeader needs to be child of QLayout'), W;
      const l = C(parseInt(e.heightHint, 10)),
        u = C(!0),
        v = f(
          () =>
            e.reveal === !0 ||
            t.view.value.indexOf('H') !== -1 ||
            (a.platform.is.ios && t.isContainer.value === !0),
        ),
        c = f(() => {
          if (e.modelValue !== !0) return 0;
          if (v.value === !0) return u.value === !0 ? l.value : 0;
          const s = l.value - t.scroll.value.position;
          return s > 0 ? s : 0;
        }),
        d = f(() => e.modelValue !== !0 || (v.value === !0 && u.value !== !0)),
        i = f(() => e.modelValue === !0 && d.value === !0 && e.reveal === !0),
        b = f(
          () =>
            'q-header q-layout__section--marginal ' +
            (v.value === !0 ? 'fixed' : 'absolute') +
            '-top' +
            (e.bordered === !0 ? ' q-header--bordered' : '') +
            (d.value === !0 ? ' q-header--hidden' : '') +
            (e.modelValue !== !0 ? ' q-layout--prevent-focus' : ''),
        ),
        q = f(() => {
          const s = t.rows.value.top,
            h = {};
          return (
            s[0] === 'l' &&
              t.left.space === !0 &&
              (h[a.lang.rtl === !0 ? 'right' : 'left'] = `${t.left.size}px`),
            s[2] === 'r' &&
              t.right.space === !0 &&
              (h[a.lang.rtl === !0 ? 'left' : 'right'] = `${t.right.size}px`),
            h
          );
        });
      function p(s, h) {
        t.update('header', s, h);
      }
      function m(s, h) {
        s.value !== h && (s.value = h);
      }
      function L({ height: s }) {
        m(l, s), p('size', s);
      }
      function _(s) {
        i.value === !0 && m(u, !0), r('focusin', s);
      }
      x(
        () => e.modelValue,
        (s) => {
          p('space', s), m(u, !0), t.animate();
        },
      ),
        x(c, (s) => {
          p('offset', s);
        }),
        x(
          () => e.reveal,
          (s) => {
            s === !1 && m(u, e.modelValue);
          },
        ),
        x(u, (s) => {
          t.animate(), r('reveal', s);
        }),
        x(t.scroll, (s) => {
          e.reveal === !0 &&
            m(
              u,
              s.direction === 'up' ||
                s.position <= e.revealOffset ||
                s.position - s.inflectionPoint < 100,
            );
        });
      const w = {};
      return (
        (t.instances.header = w),
        e.modelValue === !0 && p('size', l.value),
        p('space', e.modelValue),
        p('offset', c.value),
        D(() => {
          t.instances.header === w &&
            ((t.instances.header = void 0), p('size', 0), p('offset', 0), p('space', !1));
        }),
        () => {
          const s = at(o.default, []);
          return (
            e.elevated === !0 &&
              s.push(
                k('div', {
                  class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events',
                }),
              ),
            s.push(k(Ee, { debounce: 0, onResize: L })),
            k('header', { class: b.value, style: q.value, onFocusin: _ }, s)
          );
        }
      );
    },
  }),
  Se = H({
    name: 'QItemLabel',
    props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] },
    setup(e, { slots: o }) {
      const r = f(() => parseInt(e.lines, 10)),
        a = f(
          () =>
            'q-item__label' +
            (e.overline === !0 ? ' q-item__label--overline text-overline' : '') +
            (e.caption === !0 ? ' q-item__label--caption text-caption' : '') +
            (e.header === !0 ? ' q-item__label--header' : '') +
            (r.value === 1 ? ' ellipsis' : ''),
        ),
        t = f(() =>
          e.lines !== void 0 && r.value > 1
            ? {
                overflow: 'hidden',
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': r.value,
              }
            : null,
        );
      return () => k('div', { style: t.value, class: a.value }, j(o.default));
    },
  }),
  He = { dark: { type: Boolean, default: null } };
function Ve(e, o) {
  return f(() => (e.dark === null ? o.dark.isActive : e.dark));
}
const Zt = ['ul', 'ol'],
  Gt = H({
    name: 'QList',
    props: {
      ...He,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
      tag: { type: String, default: 'div' },
    },
    setup(e, { slots: o }) {
      const r = M(),
        a = Ve(e, r.proxy.$q),
        t = f(() => (Zt.includes(e.tag) ? null : 'list')),
        l = f(
          () =>
            'q-list' +
            (e.bordered === !0 ? ' q-list--bordered' : '') +
            (e.dense === !0 ? ' q-list--dense' : '') +
            (e.separator === !0 ? ' q-list--separator' : '') +
            (a.value === !0 ? ' q-list--dark' : '') +
            (e.padding === !0 ? ' q-list--padding' : ''),
        );
      return () => k(e.tag, { class: l.value, role: t.value }, j(o.default));
    },
  });
function Jt(e, o, r) {
  let a;
  function t() {
    a !== void 0 && (Ne.remove(a), (a = void 0));
  }
  return (
    D(() => {
      e.value === !0 && t();
    }),
    {
      removeFromHistory: t,
      addToHistory() {
        (a = { condition: () => r.value === !0, handler: o }), Ne.add(a);
      },
    }
  );
}
const eo = {
    modelValue: { type: Boolean, default: null },
    'onUpdate:modelValue': [Function, Array],
  },
  to = ['beforeShow', 'show', 'beforeHide', 'hide'];
function oo({
  showing: e,
  canShow: o,
  hideOnRouteChange: r,
  handleShow: a,
  handleHide: t,
  processOnMount: l,
}) {
  const u = M(),
    { props: v, emit: c, proxy: d } = u;
  let i;
  function b(s) {
    e.value === !0 ? m(s) : q(s);
  }
  function q(s) {
    if (v.disable === !0 || s?.qAnchorHandled === !0 || (o !== void 0 && o(s) !== !0)) return;
    const h = v['onUpdate:modelValue'] !== void 0;
    h === !0 &&
      (c('update:modelValue', !0),
      (i = s),
      U(() => {
        i === s && (i = void 0);
      })),
      (v.modelValue === null || h === !1) && p(s);
  }
  function p(s) {
    e.value !== !0 && ((e.value = !0), c('beforeShow', s), a !== void 0 ? a(s) : c('show', s));
  }
  function m(s) {
    if (v.disable === !0) return;
    const h = v['onUpdate:modelValue'] !== void 0;
    h === !0 &&
      (c('update:modelValue', !1),
      (i = s),
      U(() => {
        i === s && (i = void 0);
      })),
      (v.modelValue === null || h === !1) && L(s);
  }
  function L(s) {
    e.value !== !1 && ((e.value = !1), c('beforeHide', s), t !== void 0 ? t(s) : c('hide', s));
  }
  function _(s) {
    v.disable === !0 && s === !0
      ? v['onUpdate:modelValue'] !== void 0 && c('update:modelValue', !1)
      : (s === !0) !== e.value && (s === !0 ? p : L)(i);
  }
  x(() => v.modelValue, _),
    r !== void 0 &&
      Tt(u) === !0 &&
      x(
        () => d.$route.fullPath,
        () => {
          r.value === !0 && e.value === !0 && m();
        },
      ),
    l === !0 &&
      I(() => {
        _(v.modelValue);
      });
  const w = { show: q, hide: m, toggle: b };
  return Object.assign(d, w), w;
}
const ro = [Element, String],
  lo = [null, document, document.body, document.scrollingElement, document.documentElement];
function ao(e, o) {
  let r = kt(o);
  if (r === void 0) {
    if (e == null) return window;
    r = e.closest('.scroll,.scroll-y,.overflow-auto');
  }
  return lo.includes(r) ? window : r;
}
function it(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function ut(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
let re;
function ye() {
  if (re !== void 0) return re;
  const e = document.createElement('p'),
    o = document.createElement('div');
  Qe(e, { width: '100%', height: '200px' }),
    Qe(o, {
      position: 'absolute',
      top: '0px',
      left: '0px',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden',
    }),
    o.appendChild(e),
    document.body.appendChild(o);
  const r = e.offsetWidth;
  o.style.overflow = 'scroll';
  let a = e.offsetWidth;
  return r === a && (a = o.clientWidth), o.remove(), (re = r - a), re;
}
function no(e, o = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE
    ? !1
    : o
      ? e.scrollHeight > e.clientHeight &&
        (e.classList.contains('scroll') ||
          e.classList.contains('overflow-auto') ||
          ['auto', 'scroll'].includes(window.getComputedStyle(e)['overflow-y']))
      : e.scrollWidth > e.clientWidth &&
        (e.classList.contains('scroll') ||
          e.classList.contains('overflow-auto') ||
          ['auto', 'scroll'].includes(window.getComputedStyle(e)['overflow-x']));
}
let G = 0,
  qe,
  xe,
  J,
  ke = !1,
  Xe,
  Ke,
  Ie,
  N = null;
function io(e) {
  uo(e) && Oe(e);
}
function uo(e) {
  if (e.target === document.body || e.target.classList.contains('q-layout__backdrop')) return !0;
  const o = Dt(e),
    r = e.shiftKey && !e.deltaX,
    a = !r && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    t = r || a ? e.deltaY : e.deltaX;
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    if (no(u, a))
      return a
        ? t < 0 && u.scrollTop === 0
          ? !0
          : t > 0 && u.scrollTop + u.clientHeight === u.scrollHeight
        : t < 0 && u.scrollLeft === 0
          ? !0
          : t > 0 && u.scrollLeft + u.clientWidth === u.scrollWidth;
  }
  return !0;
}
function Ue(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function le(e) {
  ke !== !0 &&
    ((ke = !0),
    requestAnimationFrame(() => {
      ke = !1;
      const { height: o } = e.target,
        { clientHeight: r, scrollTop: a } = document.scrollingElement;
      (J === void 0 || o !== window.innerHeight) &&
        ((J = r - o), (document.scrollingElement.scrollTop = a)),
        a > J && (document.scrollingElement.scrollTop -= Math.ceil((a - J) / 8));
    }));
}
function Ye(e) {
  const o = document.body,
    r = window.visualViewport !== void 0;
  if (e === 'add') {
    const { overflowY: a, overflowX: t } = window.getComputedStyle(o);
    (qe = ut(window)),
      (xe = it(window)),
      (Xe = o.style.left),
      (Ke = o.style.top),
      (Ie = window.location.href),
      (o.style.left = `-${qe}px`),
      (o.style.top = `-${xe}px`),
      t !== 'hidden' &&
        (t === 'scroll' || o.scrollWidth > window.innerWidth) &&
        o.classList.add('q-body--force-scrollbar-x'),
      a !== 'hidden' &&
        (a === 'scroll' || o.scrollHeight > window.innerHeight) &&
        o.classList.add('q-body--force-scrollbar-y'),
      o.classList.add('q-body--prevent-scroll'),
      (document.qScrollPrevented = !0),
      V.is.ios === !0 &&
        (r === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener('resize', le, F.passiveCapture),
            window.visualViewport.addEventListener('scroll', le, F.passiveCapture),
            window.scrollTo(0, 0))
          : window.addEventListener('scroll', Ue, F.passiveCapture));
  }
  V.is.desktop === !0 && V.is.mac === !0 && window[`${e}EventListener`]('wheel', io, F.notPassive),
    e === 'remove' &&
      (V.is.ios === !0 &&
        (r === !0
          ? (window.visualViewport.removeEventListener('resize', le, F.passiveCapture),
            window.visualViewport.removeEventListener('scroll', le, F.passiveCapture))
          : window.removeEventListener('scroll', Ue, F.passiveCapture)),
      o.classList.remove('q-body--prevent-scroll'),
      o.classList.remove('q-body--force-scrollbar-x'),
      o.classList.remove('q-body--force-scrollbar-y'),
      (document.qScrollPrevented = !1),
      (o.style.left = Xe),
      (o.style.top = Ke),
      window.location.href === Ie && window.scrollTo(qe, xe),
      (J = void 0));
}
function so(e) {
  let o = 'add';
  if (e === !0) {
    if ((G++, N !== null)) {
      clearTimeout(N), (N = null);
      return;
    }
    if (G > 1) return;
  } else {
    if (G === 0 || (G--, G > 0)) return;
    if (((o = 'remove'), V.is.ios === !0 && V.is.nativeMobile === !0)) {
      N !== null && clearTimeout(N),
        (N = setTimeout(() => {
          Ye(o), (N = null);
        }, 100));
      return;
    }
  }
  Ye(o);
}
function co() {
  let e;
  return {
    preventBodyScroll(o) {
      o !== e && (e !== void 0 || o === !0) && ((e = o), so(o));
    },
  };
}
function vo() {
  let e = null;
  const o = M();
  function r() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Qt(r),
    D(r),
    {
      removeTimeout: r,
      registerTimeout(a, t) {
        r(),
          $t(o) === !1 &&
            (e = setTimeout(() => {
              (e = null), a();
            }, t));
      },
    }
  );
}
const Fe = { left: !0, right: !0, up: !0, down: !0, horizontal: !0, vertical: !0 },
  fo = Object.keys(Fe);
Fe.all = !0;
function Ze(e) {
  const o = {};
  for (const r of fo) e[r] === !0 && (o[r] = !0);
  return Object.keys(o).length === 0
    ? Fe
    : (o.horizontal === !0
        ? (o.left = o.right = !0)
        : o.left === !0 && o.right === !0 && (o.horizontal = !0),
      o.vertical === !0 ? (o.up = o.down = !0) : o.up === !0 && o.down === !0 && (o.vertical = !0),
      o.horizontal === !0 && o.vertical === !0 && (o.all = !0),
      o);
}
const po = ['INPUT', 'TEXTAREA'];
function Ge(e, o) {
  return (
    o.event === void 0 &&
    e.target !== void 0 &&
    e.target.draggable !== !0 &&
    typeof o.handler == 'function' &&
    po.includes(e.target.nodeName.toUpperCase()) === !1 &&
    (e.qClonedBy === void 0 || e.qClonedBy.indexOf(o.uid) === -1)
  );
}
function mo() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0
      ? e.empty()
      : e.removeAllRanges !== void 0 &&
        (e.removeAllRanges(), Nt.is.mobile !== !0 && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
function _e(e, o, r) {
  const a = $e(e);
  let t,
    l = a.left - o.event.x,
    u = a.top - o.event.y,
    v = Math.abs(l),
    c = Math.abs(u);
  const d = o.direction;
  d.horizontal === !0 && d.vertical !== !0
    ? (t = l < 0 ? 'left' : 'right')
    : d.horizontal !== !0 && d.vertical === !0
      ? (t = u < 0 ? 'up' : 'down')
      : d.up === !0 && u < 0
        ? ((t = 'up'),
          v > c &&
            (d.left === !0 && l < 0 ? (t = 'left') : d.right === !0 && l > 0 && (t = 'right')))
        : d.down === !0 && u > 0
          ? ((t = 'down'),
            v > c &&
              (d.left === !0 && l < 0 ? (t = 'left') : d.right === !0 && l > 0 && (t = 'right')))
          : d.left === !0 && l < 0
            ? ((t = 'left'),
              v < c && (d.up === !0 && u < 0 ? (t = 'up') : d.down === !0 && u > 0 && (t = 'down')))
            : d.right === !0 &&
              l > 0 &&
              ((t = 'right'),
              v < c &&
                (d.up === !0 && u < 0 ? (t = 'up') : d.down === !0 && u > 0 && (t = 'down')));
  let i = !1;
  if (t === void 0 && r === !1) {
    if (o.event.isFirst === !0 || o.event.lastDir === void 0) return {};
    (t = o.event.lastDir),
      (i = !0),
      t === 'left' || t === 'right'
        ? ((a.left -= l), (v = 0), (l = 0))
        : ((a.top -= u), (c = 0), (u = 0));
  }
  return {
    synthetic: i,
    payload: {
      evt: e,
      touch: o.event.mouse !== !0,
      mouse: o.event.mouse === !0,
      position: a,
      direction: t,
      isFirst: o.event.isFirst,
      isFinal: r === !0,
      duration: Date.now() - o.event.time,
      distance: { x: v, y: c },
      offset: { x: l, y: u },
      delta: { x: a.left - o.event.lastX, y: a.top - o.event.lastY },
    },
  };
}
let ho = 0;
const Ce = zt({
  name: 'touch-pan',
  beforeMount(e, { value: o, modifiers: r }) {
    if (r.mouse !== !0 && V.has.touch !== !0) return;
    function a(l, u) {
      r.mouse === !0 && u === !0 ? Oe(l) : (r.stop === !0 && ge(l), r.prevent === !0 && Re(l));
    }
    const t = {
      uid: 'qvtp_' + ho++,
      handler: o,
      modifiers: r,
      direction: Ze(r),
      noop: Be,
      mouseStart(l) {
        Ge(l, t) &&
          Ot(l) &&
          (oe(t, 'temp', [
            [document, 'mousemove', 'move', 'notPassiveCapture'],
            [document, 'mouseup', 'end', 'passiveCapture'],
          ]),
          t.start(l, !0));
      },
      touchStart(l) {
        if (Ge(l, t)) {
          const u = l.target;
          oe(t, 'temp', [
            [u, 'touchmove', 'move', 'notPassiveCapture'],
            [u, 'touchcancel', 'end', 'passiveCapture'],
            [u, 'touchend', 'end', 'passiveCapture'],
          ]),
            t.start(l);
        }
      },
      start(l, u) {
        if ((V.is.firefox === !0 && we(e, !0), (t.lastEvt = l), u === !0 || r.stop === !0)) {
          if (
            t.direction.all !== !0 &&
            (u !== !0 || (t.modifiers.mouseAllDir !== !0 && t.modifiers.mousealldir !== !0))
          ) {
            const d =
              l.type.indexOf('mouse') !== -1
                ? new MouseEvent(l.type, l)
                : new TouchEvent(l.type, l);
            l.defaultPrevented === !0 && Re(d),
              l.cancelBubble === !0 && ge(d),
              Object.assign(d, {
                qKeyEvent: l.qKeyEvent,
                qClickOutside: l.qClickOutside,
                qAnchorHandled: l.qAnchorHandled,
                qClonedBy: l.qClonedBy === void 0 ? [t.uid] : l.qClonedBy.concat(t.uid),
              }),
              (t.initialEvent = { target: l.target, event: d });
          }
          ge(l);
        }
        const { left: v, top: c } = $e(l);
        t.event = {
          x: v,
          y: c,
          time: Date.now(),
          mouse: u === !0,
          detected: !1,
          isFirst: !0,
          isFinal: !1,
          lastX: v,
          lastY: c,
        };
      },
      move(l) {
        if (t.event === void 0) return;
        const u = $e(l),
          v = u.left - t.event.x,
          c = u.top - t.event.y;
        if (v === 0 && c === 0) return;
        t.lastEvt = l;
        const d = t.event.mouse === !0,
          i = () => {
            a(l, d);
            let p;
            r.preserveCursor !== !0 &&
              r.preservecursor !== !0 &&
              ((p = document.documentElement.style.cursor || ''),
              (document.documentElement.style.cursor = 'grabbing')),
              d === !0 && document.body.classList.add('no-pointer-events--children'),
              document.body.classList.add('non-selectable'),
              mo(),
              (t.styleCleanup = (m) => {
                if (
                  ((t.styleCleanup = void 0),
                  p !== void 0 && (document.documentElement.style.cursor = p),
                  document.body.classList.remove('non-selectable'),
                  d === !0)
                ) {
                  const L = () => {
                    document.body.classList.remove('no-pointer-events--children');
                  };
                  m !== void 0
                    ? setTimeout(() => {
                        L(), m();
                      }, 50)
                    : L();
                } else m !== void 0 && m();
              });
          };
        if (t.event.detected === !0) {
          t.event.isFirst !== !0 && a(l, t.event.mouse);
          const { payload: p, synthetic: m } = _e(l, t, !1);
          p !== void 0 &&
            (t.handler(p) === !1
              ? t.end(l)
              : (t.styleCleanup === void 0 && t.event.isFirst === !0 && i(),
                (t.event.lastX = p.position.left),
                (t.event.lastY = p.position.top),
                (t.event.lastDir = m === !0 ? void 0 : p.direction),
                (t.event.isFirst = !1)));
          return;
        }
        if (
          t.direction.all === !0 ||
          (d === !0 && (t.modifiers.mouseAllDir === !0 || t.modifiers.mousealldir === !0))
        ) {
          i(), (t.event.detected = !0), t.move(l);
          return;
        }
        const b = Math.abs(v),
          q = Math.abs(c);
        b !== q &&
          ((t.direction.horizontal === !0 && b > q) ||
          (t.direction.vertical === !0 && b < q) ||
          (t.direction.up === !0 && b < q && c < 0) ||
          (t.direction.down === !0 && b < q && c > 0) ||
          (t.direction.left === !0 && b > q && v < 0) ||
          (t.direction.right === !0 && b > q && v > 0)
            ? ((t.event.detected = !0), t.move(l))
            : t.end(l, !0));
      },
      end(l, u) {
        if (t.event !== void 0) {
          if ((be(t, 'temp'), V.is.firefox === !0 && we(e, !1), u === !0))
            t.styleCleanup?.(),
              t.event.detected !== !0 &&
                t.initialEvent !== void 0 &&
                t.initialEvent.target.dispatchEvent(t.initialEvent.event);
          else if (t.event.detected === !0) {
            t.event.isFirst === !0 && t.handler(_e(l === void 0 ? t.lastEvt : l, t).payload);
            const { payload: v } = _e(l === void 0 ? t.lastEvt : l, t, !0),
              c = () => {
                t.handler(v);
              };
            t.styleCleanup !== void 0 ? t.styleCleanup(c) : c();
          }
          (t.event = void 0), (t.initialEvent = void 0), (t.lastEvt = void 0);
        }
      },
    };
    if (((e.__qtouchpan = t), r.mouse === !0)) {
      const l = r.mouseCapture === !0 || r.mousecapture === !0 ? 'Capture' : '';
      oe(t, 'main', [[e, 'mousedown', 'mouseStart', `passive${l}`]]);
    }
    V.has.touch === !0 &&
      oe(t, 'main', [
        [e, 'touchstart', 'touchStart', `passive${r.capture === !0 ? 'Capture' : ''}`],
        [e, 'touchmove', 'noop', 'notPassiveCapture'],
      ]);
  },
  updated(e, o) {
    const r = e.__qtouchpan;
    r !== void 0 &&
      (o.oldValue !== o.value && (typeof value != 'function' && r.end(), (r.handler = o.value)),
      (r.direction = Ze(o.modifiers)));
  },
  beforeUnmount(e) {
    const o = e.__qtouchpan;
    o !== void 0 &&
      (o.event !== void 0 && o.end(),
      be(o, 'main'),
      be(o, 'temp'),
      V.is.firefox === !0 && we(e, !1),
      o.styleCleanup?.(),
      delete e.__qtouchpan);
  },
});
function ae(e, o, r) {
  return r <= o ? o : Math.min(r, Math.max(o, e));
}
const Je = 150,
  bo = H({
    name: 'QDrawer',
    inheritAttrs: !1,
    props: {
      ...eo,
      ...He,
      side: { type: String, default: 'left', validator: (e) => ['left', 'right'].includes(e) },
      width: { type: Number, default: 300 },
      mini: Boolean,
      miniToOverlay: Boolean,
      miniWidth: { type: Number, default: 57 },
      noMiniAnimation: Boolean,
      breakpoint: { type: Number, default: 1023 },
      showIfAbove: Boolean,
      behavior: {
        type: String,
        validator: (e) => ['default', 'desktop', 'mobile'].includes(e),
        default: 'default',
      },
      bordered: Boolean,
      elevated: Boolean,
      overlay: Boolean,
      persistent: Boolean,
      noSwipeOpen: Boolean,
      noSwipeClose: Boolean,
      noSwipeBackdrop: Boolean,
    },
    emits: [...to, 'onLayout', 'miniState'],
    setup(e, { slots: o, emit: r, attrs: a }) {
      const t = M(),
        {
          proxy: { $q: l },
        } = t,
        u = Ve(e, l),
        { preventBodyScroll: v } = co(),
        { registerTimeout: c, removeTimeout: d } = vo(),
        i = ze(ue, W);
      if (i === W) return console.error('QDrawer needs to be child of QLayout'), W;
      let b,
        q = null,
        p;
      const m = C(
          e.behavior === 'mobile' ||
            (e.behavior !== 'desktop' && i.totalWidth.value <= e.breakpoint),
        ),
        L = f(() => e.mini === !0 && m.value !== !0),
        _ = f(() => (L.value === !0 ? e.miniWidth : e.width)),
        w = C(e.showIfAbove === !0 && m.value === !1 ? !0 : e.modelValue === !0),
        s = f(() => e.persistent !== !0 && (m.value === !0 || st.value === !0));
      function h(n, g) {
        if ((z(), n !== !1 && i.animate(), O(0), m.value === !0)) {
          const S = i.instances[ee.value];
          S?.belowBreakpoint === !0 && S.hide(!1), P(1), i.isContainer.value !== !0 && v(!0);
        } else P(0), n !== !1 && fe(!1);
        c(() => {
          n !== !1 && fe(!0), g !== !0 && r('show', n);
        }, Je);
      }
      function y(n, g) {
        Y(),
          n !== !1 && i.animate(),
          P(0),
          O(X.value * _.value),
          pe(),
          g !== !0
            ? c(() => {
                r('hide', n);
              }, Je)
            : d();
      }
      const { show: $, hide: T } = oo({
          showing: w,
          hideOnRouteChange: s,
          handleShow: h,
          handleHide: y,
        }),
        { addToHistory: z, removeFromHistory: Y } = Jt(w, T, s),
        R = { belowBreakpoint: m, hide: T },
        A = f(() => e.side === 'right'),
        X = f(() => (l.lang.rtl === !0 ? -1 : 1) * (A.value === !0 ? 1 : -1)),
        Me = C(0),
        K = C(!1),
        se = C(!1),
        Ae = C(_.value * X.value),
        ee = f(() => (A.value === !0 ? 'left' : 'right')),
        de = f(() =>
          w.value === !0 && m.value === !1 && e.overlay === !1
            ? e.miniToOverlay === !0
              ? e.miniWidth
              : _.value
            : 0,
        ),
        ce = f(
          () =>
            e.overlay === !0 ||
            e.miniToOverlay === !0 ||
            i.view.value.indexOf(A.value ? 'R' : 'L') !== -1 ||
            (l.platform.is.ios === !0 && i.isContainer.value === !0),
        ),
        Z = f(() => e.overlay === !1 && w.value === !0 && m.value === !1),
        st = f(() => e.overlay === !0 && w.value === !0 && m.value === !1),
        dt = f(
          () =>
            'fullscreen q-drawer__backdrop' + (w.value === !1 && K.value === !1 ? ' hidden' : ''),
        ),
        ct = f(() => ({ backgroundColor: `rgba(0,0,0,${Me.value * 0.4})` })),
        We = f(() => (A.value === !0 ? i.rows.value.top[2] === 'r' : i.rows.value.top[0] === 'l')),
        vt = f(() =>
          A.value === !0 ? i.rows.value.bottom[2] === 'r' : i.rows.value.bottom[0] === 'l',
        ),
        ft = f(() => {
          const n = {};
          return (
            i.header.space === !0 &&
              We.value === !1 &&
              (ce.value === !0
                ? (n.top = `${i.header.offset}px`)
                : i.header.space === !0 && (n.top = `${i.header.size}px`)),
            i.footer.space === !0 &&
              vt.value === !1 &&
              (ce.value === !0
                ? (n.bottom = `${i.footer.offset}px`)
                : i.footer.space === !0 && (n.bottom = `${i.footer.size}px`)),
            n
          );
        }),
        pt = f(() => {
          const n = { width: `${_.value}px`, transform: `translateX(${Ae.value}px)` };
          return m.value === !0 ? n : Object.assign(n, ft.value);
        }),
        mt = f(
          () =>
            'q-drawer__content fit ' + (i.isContainer.value !== !0 ? 'scroll' : 'overflow-auto'),
        ),
        ht = f(
          () =>
            `q-drawer q-drawer--${e.side}` +
            (se.value === !0 ? ' q-drawer--mini-animate' : '') +
            (e.bordered === !0 ? ' q-drawer--bordered' : '') +
            (u.value === !0 ? ' q-drawer--dark q-dark' : '') +
            (K.value === !0 ? ' no-transition' : w.value === !0 ? '' : ' q-layout--prevent-focus') +
            (m.value === !0
              ? ' fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding'
              : ` q-drawer--${L.value === !0 ? 'mini' : 'standard'}` +
                (ce.value === !0 || Z.value !== !0 ? ' fixed' : '') +
                (e.overlay === !0 || e.miniToOverlay === !0 ? ' q-drawer--on-top' : '') +
                (We.value === !0 ? ' q-drawer--top-padding' : '')),
        ),
        bt = f(() => {
          const n = l.lang.rtl === !0 ? e.side : ee.value;
          return [[Ce, qt, void 0, { [n]: !0, mouse: !0 }]];
        }),
        wt = f(() => {
          const n = l.lang.rtl === !0 ? ee.value : e.side;
          return [[Ce, Pe, void 0, { [n]: !0, mouse: !0 }]];
        }),
        gt = f(() => {
          const n = l.lang.rtl === !0 ? ee.value : e.side;
          return [[Ce, Pe, void 0, { [n]: !0, mouse: !0, mouseAllDir: !0 }]];
        });
      function ve() {
        xt(
          m,
          e.behavior === 'mobile' ||
            (e.behavior !== 'desktop' && i.totalWidth.value <= e.breakpoint),
        );
      }
      x(m, (n) => {
        n === !0
          ? ((b = w.value), w.value === !0 && T(!1))
          : e.overlay === !1 &&
            e.behavior !== 'mobile' &&
            b !== !1 &&
            (w.value === !0 ? (O(0), P(0), pe()) : $(!1));
      }),
        x(
          () => e.side,
          (n, g) => {
            i.instances[g] === R &&
              ((i.instances[g] = void 0), (i[g].space = !1), (i[g].offset = 0)),
              (i.instances[n] = R),
              (i[n].size = _.value),
              (i[n].space = Z.value),
              (i[n].offset = de.value);
          },
        ),
        x(i.totalWidth, () => {
          (i.isContainer.value === !0 || document.qScrollPrevented !== !0) && ve();
        }),
        x(() => e.behavior + e.breakpoint, ve),
        x(i.isContainer, (n) => {
          w.value === !0 && v(n !== !0), n === !0 && ve();
        }),
        x(i.scrollbarWidth, () => {
          O(w.value === !0 ? 0 : void 0);
        }),
        x(de, (n) => {
          Q('offset', n);
        }),
        x(Z, (n) => {
          r('onLayout', n), Q('space', n);
        }),
        x(A, () => {
          O();
        }),
        x(_, (n) => {
          O(), me(e.miniToOverlay, n);
        }),
        x(
          () => e.miniToOverlay,
          (n) => {
            me(n, _.value);
          },
        ),
        x(
          () => l.lang.rtl,
          () => {
            O();
          },
        ),
        x(
          () => e.mini,
          () => {
            e.noMiniAnimation || (e.modelValue === !0 && (yt(), i.animate()));
          },
        ),
        x(L, (n) => {
          r('miniState', n);
        });
      function O(n) {
        n === void 0
          ? U(() => {
              (n = w.value === !0 ? 0 : _.value), O(X.value * n);
            })
          : (i.isContainer.value === !0 &&
              A.value === !0 &&
              (m.value === !0 || Math.abs(n) === _.value) &&
              (n += X.value * i.scrollbarWidth.value),
            (Ae.value = n));
      }
      function P(n) {
        Me.value = n;
      }
      function fe(n) {
        const g = n === !0 ? 'remove' : i.isContainer.value !== !0 ? 'add' : '';
        g !== '' && document.body.classList[g]('q-body--drawer-toggle');
      }
      function yt() {
        q !== null && clearTimeout(q),
          t.proxy && t.proxy.$el && t.proxy.$el.classList.add('q-drawer--mini-animate'),
          (se.value = !0),
          (q = setTimeout(() => {
            (q = null), (se.value = !1), t?.proxy?.$el?.classList.remove('q-drawer--mini-animate');
          }, 150));
      }
      function qt(n) {
        if (w.value !== !1) return;
        const g = _.value,
          S = ae(n.distance.x, 0, g);
        if (n.isFinal === !0) {
          S >= Math.min(75, g) ? $() : (i.animate(), P(0), O(X.value * g)), (K.value = !1);
          return;
        }
        O((l.lang.rtl === !0 ? A.value !== !0 : A.value) ? Math.max(g - S, 0) : Math.min(0, S - g)),
          P(ae(S / g, 0, 1)),
          n.isFirst === !0 && (K.value = !0);
      }
      function Pe(n) {
        if (w.value !== !0) return;
        const g = _.value,
          S = n.direction === e.side,
          he = (l.lang.rtl === !0 ? S !== !0 : S) ? ae(n.distance.x, 0, g) : 0;
        if (n.isFinal === !0) {
          Math.abs(he) < Math.min(75, g) ? (i.animate(), P(1), O(0)) : T(), (K.value = !1);
          return;
        }
        O(X.value * he), P(ae(1 - he / g, 0, 1)), n.isFirst === !0 && (K.value = !0);
      }
      function pe() {
        v(!1), fe(!0);
      }
      function Q(n, g) {
        i.update(e.side, n, g);
      }
      function xt(n, g) {
        n.value !== g && (n.value = g);
      }
      function me(n, g) {
        Q('size', n === !0 ? e.miniWidth : g);
      }
      return (
        (i.instances[e.side] = R),
        me(e.miniToOverlay, _.value),
        Q('space', Z.value),
        Q('offset', de.value),
        e.showIfAbove === !0 &&
          e.modelValue !== !0 &&
          w.value === !0 &&
          e['onUpdate:modelValue'] !== void 0 &&
          r('update:modelValue', !0),
        I(() => {
          r('onLayout', Z.value), r('miniState', L.value), (b = e.showIfAbove === !0);
          const n = () => {
            (w.value === !0 ? h : y)(!1, !0);
          };
          if (i.totalWidth.value !== 0) {
            U(n);
            return;
          }
          p = x(i.totalWidth, () => {
            p(),
              (p = void 0),
              w.value === !1 && e.showIfAbove === !0 && m.value === !1 ? $(!1) : n();
          });
        }),
        D(() => {
          p?.(),
            q !== null && (clearTimeout(q), (q = null)),
            w.value === !0 && pe(),
            i.instances[e.side] === R &&
              ((i.instances[e.side] = void 0), Q('size', 0), Q('offset', 0), Q('space', !1));
        }),
        () => {
          const n = [];
          m.value === !0 &&
            (e.noSwipeOpen === !1 &&
              n.push(
                Ht(
                  k('div', {
                    key: 'open',
                    class: `q-drawer__opener fixed-${e.side}`,
                    'aria-hidden': 'true',
                  }),
                  bt.value,
                ),
              ),
            n.push(
              De(
                'div',
                {
                  ref: 'backdrop',
                  class: dt.value,
                  style: ct.value,
                  'aria-hidden': 'true',
                  onClick: T,
                },
                void 0,
                'backdrop',
                e.noSwipeBackdrop !== !0 && w.value === !0,
                () => gt.value,
              ),
            ));
          const g = L.value === !0 && o.mini !== void 0,
            S = [
              k(
                'div',
                { ...a, key: '' + g, class: [mt.value, a.class] },
                g === !0 ? o.mini() : j(o.default),
              ),
            ];
          return (
            e.elevated === !0 &&
              w.value === !0 &&
              S.push(
                k('div', {
                  class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events',
                }),
              ),
            n.push(
              De(
                'aside',
                { ref: 'content', class: ht.value, style: pt.value },
                S,
                'contentclose',
                e.noSwipeClose !== !0 && m.value === !0,
                () => wt.value,
              ),
            ),
            k('div', { class: 'q-drawer-container' }, n)
          );
        }
      );
    },
  }),
  wo = H({
    name: 'QPageContainer',
    setup(e, { slots: o }) {
      const {
          proxy: { $q: r },
        } = M(),
        a = ze(ue, W);
      if (a === W) return console.error('QPageContainer needs to be child of QLayout'), W;
      lt(jt, !0);
      const t = f(() => {
        const l = {};
        return (
          a.header.space === !0 && (l.paddingTop = `${a.header.size}px`),
          a.right.space === !0 &&
            (l[`padding${r.lang.rtl === !0 ? 'Left' : 'Right'}`] = `${a.right.size}px`),
          a.footer.space === !0 && (l.paddingBottom = `${a.footer.size}px`),
          a.left.space === !0 &&
            (l[`padding${r.lang.rtl === !0 ? 'Right' : 'Left'}`] = `${a.left.size}px`),
          l
        );
      });
      return () => k('div', { class: 'q-page-container', style: t.value }, j(o.default));
    },
  }),
  { passive: et } = F,
  go = ['both', 'horizontal', 'vertical'],
  yo = H({
    name: 'QScrollObserver',
    props: {
      axis: { type: String, validator: (e) => go.includes(e), default: 'vertical' },
      debounce: [String, Number],
      scrollTarget: ro,
    },
    emits: ['scroll'],
    setup(e, { emit: o }) {
      const r = {
        position: { top: 0, left: 0 },
        direction: 'down',
        directionChanged: !1,
        delta: { top: 0, left: 0 },
        inflectionPoint: { top: 0, left: 0 },
      };
      let a = null,
        t,
        l;
      x(
        () => e.scrollTarget,
        () => {
          c(), v();
        },
      );
      function u() {
        a?.();
        const b = Math.max(0, it(t)),
          q = ut(t),
          p = { top: b - r.position.top, left: q - r.position.left };
        if ((e.axis === 'vertical' && p.top === 0) || (e.axis === 'horizontal' && p.left === 0))
          return;
        const m =
          Math.abs(p.top) >= Math.abs(p.left)
            ? p.top < 0
              ? 'up'
              : 'down'
            : p.left < 0
              ? 'left'
              : 'right';
        (r.position = { top: b, left: q }),
          (r.directionChanged = r.direction !== m),
          (r.delta = p),
          r.directionChanged === !0 && ((r.direction = m), (r.inflectionPoint = r.position)),
          o('scroll', { ...r });
      }
      function v() {
        (t = ao(l, e.scrollTarget)), t.addEventListener('scroll', d, et), d(!0);
      }
      function c() {
        t !== void 0 && (t.removeEventListener('scroll', d, et), (t = void 0));
      }
      function d(b) {
        if (b === !0 || e.debounce === 0 || e.debounce === '0') u();
        else if (a === null) {
          const [q, p] = e.debounce
            ? [setTimeout(u, e.debounce), clearTimeout]
            : [requestAnimationFrame(u), cancelAnimationFrame];
          a = () => {
            p(q), (a = null);
          };
        }
      }
      const { proxy: i } = M();
      return (
        x(() => i.$q.lang.rtl, u),
        I(() => {
          (l = i.$el.parentNode), v();
        }),
        D(() => {
          a?.(), c();
        }),
        Object.assign(i, { trigger: d, getPosition: () => r }),
        Be
      );
    },
  }),
  qo = H({
    name: 'QLayout',
    props: {
      container: Boolean,
      view: {
        type: String,
        default: 'hhh lpr fff',
        validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()),
      },
      onScroll: Function,
      onScrollHeight: Function,
      onResize: Function,
    },
    setup(e, { slots: o, emit: r }) {
      const {
          proxy: { $q: a },
        } = M(),
        t = C(null),
        l = C(a.screen.height),
        u = C(e.container === !0 ? 0 : a.screen.width),
        v = C({ position: 0, direction: 'down', inflectionPoint: 0 }),
        c = C(0),
        d = C(rt.value === !0 ? 0 : ye()),
        i = f(() => 'q-layout q-layout--' + (e.container === !0 ? 'containerized' : 'standard')),
        b = f(() => (e.container === !1 ? { minHeight: a.screen.height + 'px' } : null)),
        q = f(() =>
          d.value !== 0 ? { [a.lang.rtl === !0 ? 'left' : 'right']: `${d.value}px` } : null,
        ),
        p = f(() =>
          d.value !== 0
            ? {
                [a.lang.rtl === !0 ? 'right' : 'left']: 0,
                [a.lang.rtl === !0 ? 'left' : 'right']: `-${d.value}px`,
                width: `calc(100% + ${d.value}px)`,
              }
            : null,
        );
      function m(y) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const $ = {
            position: y.position.top,
            direction: y.direction,
            directionChanged: y.directionChanged,
            inflectionPoint: y.inflectionPoint.top,
            delta: y.delta.top,
          };
          (v.value = $), e.onScroll !== void 0 && r('scroll', $);
        }
      }
      function L(y) {
        const { height: $, width: T } = y;
        let z = !1;
        l.value !== $ &&
          ((z = !0), (l.value = $), e.onScrollHeight !== void 0 && r('scrollHeight', $), w()),
          u.value !== T && ((z = !0), (u.value = T)),
          z === !0 && e.onResize !== void 0 && r('resize', y);
      }
      function _({ height: y }) {
        c.value !== y && ((c.value = y), w());
      }
      function w() {
        if (e.container === !0) {
          const y = l.value > c.value ? ye() : 0;
          d.value !== y && (d.value = y);
        }
      }
      let s = null;
      const h = {
        instances: {},
        view: f(() => e.view),
        isContainer: f(() => e.container),
        rootRef: t,
        height: l,
        containerHeight: c,
        scrollbarWidth: d,
        totalWidth: f(() => u.value + d.value),
        rows: f(() => {
          const y = e.view.toLowerCase().split(' ');
          return { top: y[0].split(''), middle: y[1].split(''), bottom: y[2].split('') };
        }),
        header: te({ size: 0, offset: 0, space: !1 }),
        right: te({ size: 300, offset: 0, space: !1 }),
        footer: te({ size: 0, offset: 0, space: !1 }),
        left: te({ size: 300, offset: 0, space: !1 }),
        scroll: v,
        animate() {
          s !== null ? clearTimeout(s) : document.body.classList.add('q-body--layout-animate'),
            (s = setTimeout(() => {
              (s = null), document.body.classList.remove('q-body--layout-animate');
            }, 155));
        },
        update(y, $, T) {
          h[y][$] = T;
        },
      };
      if ((lt(ue, h), ye() > 0)) {
        let y = function () {
            (z = null), Y.classList.remove('hide-scrollbar');
          },
          $ = function () {
            if (z === null) {
              if (Y.scrollHeight > a.screen.height) return;
              Y.classList.add('hide-scrollbar');
            } else clearTimeout(z);
            z = setTimeout(y, 300);
          },
          T = function (R) {
            z !== null && R === 'remove' && (clearTimeout(z), y()),
              window[`${R}EventListener`]('resize', $);
          },
          z = null;
        const Y = document.body;
        x(() => (e.container !== !0 ? 'add' : 'remove'), T),
          e.container !== !0 && T('add'),
          Bt(() => {
            T('remove');
          });
      }
      return () => {
        const y = Xt(o.default, [k(yo, { onScroll: m }), k(Ee, { onResize: L })]),
          $ = k(
            'div',
            { class: i.value, style: b.value, ref: e.container === !0 ? void 0 : t, tabindex: -1 },
            y,
          );
        return e.container === !0
          ? k('div', { class: 'q-layout-container overflow-hidden', ref: t }, [
              k(Ee, { onResize: _ }),
              k('div', { class: 'absolute-full', style: q.value }, [
                k('div', { class: 'scroll', style: p.value }, [$]),
              ]),
            ])
          : $;
      };
    },
  }),
  tt = H({
    name: 'QItemSection',
    props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean },
    setup(e, { slots: o }) {
      const r = f(
        () =>
          `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? 'side' : 'main'}` +
          (e.top === !0 ? ' q-item__section--top justify-start' : ' justify-center') +
          (e.avatar === !0 ? ' q-item__section--avatar' : '') +
          (e.thumbnail === !0 ? ' q-item__section--thumbnail' : '') +
          (e.noWrap === !0 ? ' q-item__section--nowrap' : ''),
      );
      return () => k('div', { class: r.value }, j(o.default));
    },
  }),
  xo = H({
    name: 'QItem',
    props: {
      ...He,
      ..._t,
      tag: { type: String, default: 'div' },
      active: { type: Boolean, default: null },
      clickable: Boolean,
      dense: Boolean,
      insetLevel: Number,
      tabindex: [String, Number],
      focused: Boolean,
      manualFocus: Boolean,
    },
    emits: ['click', 'keyup'],
    setup(e, { slots: o, emit: r }) {
      const {
          proxy: { $q: a },
        } = M(),
        t = Ve(e, a),
        { hasLink: l, linkAttrs: u, linkClass: v, linkTag: c, navigateOnClick: d } = Ct(),
        i = C(null),
        b = C(null),
        q = f(() => e.clickable === !0 || l.value === !0 || e.tag === 'label'),
        p = f(() => e.disable !== !0 && q.value === !0),
        m = f(
          () =>
            'q-item q-item-type row no-wrap' +
            (e.dense === !0 ? ' q-item--dense' : '') +
            (t.value === !0 ? ' q-item--dark' : '') +
            (l.value === !0 && e.active === null
              ? v.value
              : e.active === !0
                ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ''}`
                : '') +
            (e.disable === !0 ? ' disabled' : '') +
            (p.value === !0
              ? ' q-item--clickable q-link cursor-pointer ' +
                (e.manualFocus === !0 ? 'q-manual-focusable' : 'q-focusable q-hoverable') +
                (e.focused === !0 ? ' q-manual-focusable--focused' : '')
              : ''),
        ),
        L = f(() =>
          e.insetLevel === void 0
            ? null
            : {
                ['padding' + (a.lang.rtl === !0 ? 'Right' : 'Left')]: 16 + e.insetLevel * 56 + 'px',
              },
        );
      function _(h) {
        p.value === !0 &&
          (b.value !== null &&
            h.qAvoidFocus !== !0 &&
            (h.qKeyEvent !== !0 && document.activeElement === i.value
              ? b.value.focus()
              : document.activeElement === b.value && i.value.focus()),
          d(h));
      }
      function w(h) {
        if (p.value === !0 && Vt(h, [13, 32]) === !0) {
          Oe(h), (h.qKeyEvent = !0);
          const y = new MouseEvent('click', h);
          (y.qKeyEvent = !0), i.value.dispatchEvent(y);
        }
        r('keyup', h);
      }
      function s() {
        const h = at(o.default, []);
        return (
          p.value === !0 && h.unshift(k('div', { class: 'q-focus-helper', tabindex: -1, ref: b })),
          h
        );
      }
      return () => {
        const h = {
          ref: i,
          class: m.value,
          style: L.value,
          role: 'listitem',
          onClick: _,
          onKeyup: w,
        };
        return (
          p.value === !0
            ? ((h.tabindex = e.tabindex || '0'), Object.assign(h, u.value))
            : q.value === !0 && (h['aria-disabled'] = 'true'),
          k(c.value, h, s())
        );
      };
    },
  }),
  ko = ot({
    __name: 'EssentialLink',
    props: { title: {}, caption: { default: '' }, link: { default: '#' }, icon: { default: '' } },
    setup(e) {
      return (o, r) => (
        ne(),
        Le(
          xo,
          { clickable: '', tag: 'a', target: '_blank', href: o.link },
          {
            default: B(() => [
              o.icon
                ? (ne(),
                  Le(
                    tt,
                    { key: 0, avatar: '' },
                    { default: B(() => [E(Et, { name: o.icon }, null, 8, ['name'])]), _: 1 },
                  ))
                : Rt('', !0),
              E(tt, null, {
                default: B(() => [
                  E(Se, null, { default: B(() => [ie(Te(o.title), 1)]), _: 1 }),
                  E(Se, { caption: '' }, { default: B(() => [ie(Te(o.caption), 1)]), _: 1 }),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          },
          8,
          ['href'],
        )
      );
    },
  }),
  $o = ot({
    __name: 'MainLayout',
    setup(e) {
      const o = [
          { title: 'Docs', caption: 'quasar.dev', icon: 'school', link: 'https://quasar.dev' },
          {
            title: 'Github',
            caption: 'github.com/quasarframework',
            icon: 'code',
            link: 'https://github.com/quasarframework',
          },
          {
            title: 'Discord Chat Channel',
            caption: 'chat.quasar.dev',
            icon: 'chat',
            link: 'https://chat.quasar.dev',
          },
          {
            title: 'Forum',
            caption: 'forum.quasar.dev',
            icon: 'record_voice_over',
            link: 'https://forum.quasar.dev',
          },
          {
            title: 'Twitter',
            caption: '@quasarframework',
            icon: 'rss_feed',
            link: 'https://twitter.quasar.dev',
          },
          {
            title: 'Facebook',
            caption: '@QuasarFramework',
            icon: 'public',
            link: 'https://facebook.quasar.dev',
          },
          {
            title: 'Quasar Awesome',
            caption: 'Community Quasar projects',
            icon: 'favorite',
            link: 'https://awesome.quasar.dev',
          },
        ],
        r = C(!1);
      function a() {
        r.value = !r.value;
      }
      return (t, l) => {
        const u = St('router-view');
        return (
          ne(),
          Le(
            qo,
            { view: 'lHh Lpr lFf' },
            {
              default: B(() => [
                E(
                  Yt,
                  { elevated: '' },
                  {
                    default: B(() => [
                      E(It, null, {
                        default: B(() => [
                          E(Lt, {
                            flat: '',
                            dense: '',
                            round: '',
                            icon: 'menu',
                            'aria-label': 'Menu',
                            onClick: a,
                          }),
                          E(Kt, null, {
                            default: B(() => l[1] || (l[1] = [ie(' Cavatech ')])),
                            _: 1,
                          }),
                          Ft('div', null, 'Quasar v' + Te(t.$q.version), 1),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                ),
                E(
                  bo,
                  {
                    modelValue: r.value,
                    'onUpdate:modelValue': l[0] || (l[0] = (v) => (r.value = v)),
                    'show-if-above': '',
                    bordered: '',
                  },
                  {
                    default: B(() => [
                      E(Gt, null, {
                        default: B(() => [
                          E(
                            Se,
                            { header: '' },
                            { default: B(() => l[2] || (l[2] = [ie(' Essential Links ')])), _: 1 },
                          ),
                          (ne(),
                          Mt(
                            At,
                            null,
                            Wt(o, (v) => E(ko, Pt({ key: v.title, ref_for: !0 }, v), null, 16)),
                            64,
                          )),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ['modelValue'],
                ),
                E(wo, null, { default: B(() => [E(u)]), _: 1 }),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { $o as default };
