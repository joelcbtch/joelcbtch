import {
  A as Pe,
  J as kt,
  t as _t,
  I as Lt,
  n as Ct,
  e as $t,
  z as Tt,
  V as Et,
} from './QBtn-DYb13IGb-DVwM0Orh-B0Tu2nkY.js';
import {
  X as ot,
  p as L,
  h as St,
  Z as Ce,
  Q as ne,
  a as z,
  M as O,
  b as A,
  N as lt,
  g as f,
  c as te,
  d as at,
  w as x,
  L as zt,
  n as k,
  e as F,
  G as ze,
  O as U,
  A as D,
  v as Y,
  f as Be,
  z as W,
  F as Bt,
  U as be,
  i as H,
  H as we,
  B as oe,
  j as $e,
  u as Re,
  D as ye,
  I as Vt,
  R as Ot,
  q as Ht,
  k as Ve,
  l as E,
  t as Ft,
  m as ie,
  o as Te,
  r as At,
  s as Mt,
  T as Wt,
  J as Qt,
  x as Pt,
  y as Ne,
  C as Rt,
  E as Nt,
  $ as Dt,
  V as ue,
  W as It,
} from './index-ExIJm5nn.js';
import { l as Xt, a as I, d as rt, v as De } from './render-DAqPa2vd-D0yqDhMx-4SFXGzvt.js';
const jt = O({
    name: 'QToolbarTitle',
    props: { shrink: Boolean },
    setup(e, { slots: o }) {
      const l = f(() => 'q-toolbar__title ellipsis' + (e.shrink === !0 ? ' col-shrink' : ''));
      return () => k('div', { class: l.value }, I(o.default));
    },
  }),
  Ut = O({
    name: 'QToolbar',
    props: { inset: Boolean },
    setup(e, { slots: o }) {
      const l = f(
        () => 'q-toolbar row no-wrap items-center' + (e.inset === !0 ? ' q-toolbar--inset' : ''),
      );
      return () => k('div', { class: l.value, role: 'toolbar' }, I(o.default));
    },
  });
function Yt() {
  const e = L(!lt.value);
  return (
    e.value === !1 &&
      U(() => {
        e.value = !0;
      }),
    { isHydrated: e }
  );
}
const nt = typeof ResizeObserver < 'u',
  Ie =
    nt === !0
      ? {}
      : {
          style:
            'display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;',
          url: 'about:blank',
        },
  Ee = O({
    name: 'QResizeObserver',
    props: { debounce: { type: [String, Number], default: 100 } },
    emits: ['resize'],
    setup(e, { emit: o }) {
      let l = null,
        r,
        t = { width: -1, height: -1 };
      function a(c) {
        c === !0 || e.debounce === 0 || e.debounce === '0'
          ? u()
          : l === null && (l = setTimeout(u, e.debounce));
      }
      function u() {
        if ((l !== null && (clearTimeout(l), (l = null)), r)) {
          const { offsetWidth: c, offsetHeight: d } = r;
          (c !== t.width || d !== t.height) && ((t = { width: c, height: d }), o('resize', t));
        }
      }
      const { proxy: v } = A();
      if (((v.trigger = a), nt === !0)) {
        let c;
        const d = (i) => {
          (r = v.$el.parentNode),
            r
              ? ((c = new ResizeObserver(a)), c.observe(r), u())
              : i !== !0 &&
                Y(() => {
                  d(!0);
                });
        };
        return (
          U(() => {
            d();
          }),
          D(() => {
            l !== null && clearTimeout(l),
              c !== void 0 && (c.disconnect !== void 0 ? c.disconnect() : r && c.unobserve(r));
          }),
          ze
        );
      } else {
        let c = function () {
            l !== null && (clearTimeout(l), (l = null)),
              b !== void 0 &&
                (b.removeEventListener !== void 0 && b.removeEventListener('resize', a, F.passive),
                (b = void 0));
          },
          d = function () {
            c(),
              r?.contentDocument &&
                ((b = r.contentDocument.defaultView),
                b.addEventListener('resize', a, F.passive),
                u());
          };
        const { isHydrated: i } = Yt();
        let b;
        return (
          U(() => {
            Y(() => {
              (r = v.$el), r && d();
            });
          }),
          D(c),
          () => {
            if (i.value === !0)
              return k('object', {
                class: 'q--avoid-card-border',
                style: Ie.style,
                tabindex: -1,
                type: 'text/html',
                data: Ie.url,
                'aria-hidden': 'true',
                onLoad: d,
              });
          }
        );
      }
    },
  }),
  Kt = O({
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
    setup(e, { slots: o, emit: l }) {
      const {
          proxy: { $q: r },
        } = A(),
        t = Be(ue, W);
      if (t === W) return console.error('QHeader needs to be child of QLayout'), W;
      const a = L(parseInt(e.heightHint, 10)),
        u = L(!0),
        v = f(
          () =>
            e.reveal === !0 ||
            t.view.value.indexOf('H') !== -1 ||
            (r.platform.is.ios && t.isContainer.value === !0),
        ),
        c = f(() => {
          if (e.modelValue !== !0) return 0;
          if (v.value === !0) return u.value === !0 ? a.value : 0;
          const s = a.value - t.scroll.value.position;
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
              (h[r.lang.rtl === !0 ? 'right' : 'left'] = `${t.left.size}px`),
            s[2] === 'r' &&
              t.right.space === !0 &&
              (h[r.lang.rtl === !0 ? 'left' : 'right'] = `${t.right.size}px`),
            h
          );
        });
      function p(s, h) {
        t.update('header', s, h);
      }
      function m(s, h) {
        s.value !== h && (s.value = h);
      }
      function C({ height: s }) {
        m(a, s), p('size', s);
      }
      function _(s) {
        i.value === !0 && m(u, !0), l('focusin', s);
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
          t.animate(), l('reveal', s);
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
        e.modelValue === !0 && p('size', a.value),
        p('space', e.modelValue),
        p('offset', c.value),
        D(() => {
          t.instances.header === w &&
            ((t.instances.header = void 0), p('size', 0), p('offset', 0), p('space', !1));
        }),
        () => {
          const s = rt(o.default, []);
          return (
            e.elevated === !0 &&
              s.push(
                k('div', {
                  class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events',
                }),
              ),
            s.push(k(Ee, { debounce: 0, onResize: C })),
            k('header', { class: b.value, style: q.value, onFocusin: _ }, s)
          );
        }
      );
    },
  }),
  Se = O({
    name: 'QItemLabel',
    props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] },
    setup(e, { slots: o }) {
      const l = f(() => parseInt(e.lines, 10)),
        r = f(
          () =>
            'q-item__label' +
            (e.overline === !0 ? ' q-item__label--overline text-overline' : '') +
            (e.caption === !0 ? ' q-item__label--caption text-caption' : '') +
            (e.header === !0 ? ' q-item__label--header' : '') +
            (l.value === 1 ? ' ellipsis' : ''),
        ),
        t = f(() =>
          e.lines !== void 0 && l.value > 1
            ? {
                overflow: 'hidden',
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': l.value,
              }
            : null,
        );
      return () => k('div', { style: t.value, class: r.value }, I(o.default));
    },
  }),
  Oe = { dark: { type: Boolean, default: null } };
function He(e, o) {
  return f(() => (e.dark === null ? o.dark.isActive : e.dark));
}
const Gt = ['ul', 'ol'],
  Jt = O({
    name: 'QList',
    props: {
      ...Oe,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
      tag: { type: String, default: 'div' },
    },
    setup(e, { slots: o }) {
      const l = A(),
        r = He(e, l.proxy.$q),
        t = f(() => (Gt.includes(e.tag) ? null : 'list')),
        a = f(
          () =>
            'q-list' +
            (e.bordered === !0 ? ' q-list--bordered' : '') +
            (e.dense === !0 ? ' q-list--dense' : '') +
            (e.separator === !0 ? ' q-list--separator' : '') +
            (r.value === !0 ? ' q-list--dark' : '') +
            (e.padding === !0 ? ' q-list--padding' : ''),
        );
      return () => k(e.tag, { class: a.value, role: t.value }, I(o.default));
    },
  });
function Zt(e, o, l) {
  let r;
  function t() {
    r !== void 0 && (Ne.remove(r), (r = void 0));
  }
  return (
    D(() => {
      e.value === !0 && t();
    }),
    {
      removeFromHistory: t,
      addToHistory() {
        (r = { condition: () => l.value === !0, handler: o }), Ne.add(r);
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
  hideOnRouteChange: l,
  handleShow: r,
  handleHide: t,
  processOnMount: a,
}) {
  const u = A(),
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
      Y(() => {
        i === s && (i = void 0);
      })),
      (v.modelValue === null || h === !1) && p(s);
  }
  function p(s) {
    e.value !== !0 && ((e.value = !0), c('beforeShow', s), r !== void 0 ? r(s) : c('show', s));
  }
  function m(s) {
    if (v.disable === !0) return;
    const h = v['onUpdate:modelValue'] !== void 0;
    h === !0 &&
      (c('update:modelValue', !1),
      (i = s),
      Y(() => {
        i === s && (i = void 0);
      })),
      (v.modelValue === null || h === !1) && C(s);
  }
  function C(s) {
    e.value !== !1 && ((e.value = !1), c('beforeHide', s), t !== void 0 ? t(s) : c('hide', s));
  }
  function _(s) {
    v.disable === !0 && s === !0
      ? v['onUpdate:modelValue'] !== void 0 && c('update:modelValue', !1)
      : (s === !0) !== e.value && (s === !0 ? p : C)(i);
  }
  x(() => v.modelValue, _),
    l !== void 0 &&
      Tt(u) === !0 &&
      x(
        () => d.$route.fullPath,
        () => {
          l.value === !0 && e.value === !0 && m();
        },
      ),
    a === !0 &&
      U(() => {
        _(v.modelValue);
      });
  const w = { show: q, hide: m, toggle: b };
  return Object.assign(d, w), w;
}
const lo = [Element, String],
  ao = [null, document, document.body, document.scrollingElement, document.documentElement];
function ro(e, o) {
  let l = kt(o);
  if (l === void 0) {
    if (e == null) return window;
    l = e.closest('.scroll,.scroll-y,.overflow-auto');
  }
  return ao.includes(l) ? window : l;
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
let le;
function ge() {
  if (le !== void 0) return le;
  const e = document.createElement('p'),
    o = document.createElement('div');
  Pe(e, { width: '100%', height: '200px' }),
    Pe(o, {
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
  const l = e.offsetWidth;
  o.style.overflow = 'scroll';
  let r = e.offsetWidth;
  return l === r && (r = o.clientWidth), o.remove(), (le = l - r), le;
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
let J = 0,
  qe,
  xe,
  Z,
  ke = !1,
  Xe,
  je,
  Ue,
  N = null;
function io(e) {
  uo(e) && Ve(e);
}
function uo(e) {
  if (e.target === document.body || e.target.classList.contains('q-layout__backdrop')) return !0;
  const o = Dt(e),
    l = e.shiftKey && !e.deltaX,
    r = !l && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    t = l || r ? e.deltaY : e.deltaX;
  for (let a = 0; a < o.length; a++) {
    const u = o[a];
    if (no(u, r))
      return r
        ? t < 0 && u.scrollTop === 0
          ? !0
          : t > 0 && u.scrollTop + u.clientHeight === u.scrollHeight
        : t < 0 && u.scrollLeft === 0
          ? !0
          : t > 0 && u.scrollLeft + u.clientWidth === u.scrollWidth;
  }
  return !0;
}
function Ye(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function ae(e) {
  ke !== !0 &&
    ((ke = !0),
    requestAnimationFrame(() => {
      ke = !1;
      const { height: o } = e.target,
        { clientHeight: l, scrollTop: r } = document.scrollingElement;
      (Z === void 0 || o !== window.innerHeight) &&
        ((Z = l - o), (document.scrollingElement.scrollTop = r)),
        r > Z && (document.scrollingElement.scrollTop -= Math.ceil((r - Z) / 8));
    }));
}
function Ke(e) {
  const o = document.body,
    l = window.visualViewport !== void 0;
  if (e === 'add') {
    const { overflowY: r, overflowX: t } = window.getComputedStyle(o);
    (qe = ut(window)),
      (xe = it(window)),
      (Xe = o.style.left),
      (je = o.style.top),
      (Ue = window.location.href),
      (o.style.left = `-${qe}px`),
      (o.style.top = `-${xe}px`),
      t !== 'hidden' &&
        (t === 'scroll' || o.scrollWidth > window.innerWidth) &&
        o.classList.add('q-body--force-scrollbar-x'),
      r !== 'hidden' &&
        (r === 'scroll' || o.scrollHeight > window.innerHeight) &&
        o.classList.add('q-body--force-scrollbar-y'),
      o.classList.add('q-body--prevent-scroll'),
      (document.qScrollPrevented = !0),
      H.is.ios === !0 &&
        (l === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener('resize', ae, F.passiveCapture),
            window.visualViewport.addEventListener('scroll', ae, F.passiveCapture),
            window.scrollTo(0, 0))
          : window.addEventListener('scroll', Ye, F.passiveCapture));
  }
  H.is.desktop === !0 && H.is.mac === !0 && window[`${e}EventListener`]('wheel', io, F.notPassive),
    e === 'remove' &&
      (H.is.ios === !0 &&
        (l === !0
          ? (window.visualViewport.removeEventListener('resize', ae, F.passiveCapture),
            window.visualViewport.removeEventListener('scroll', ae, F.passiveCapture))
          : window.removeEventListener('scroll', Ye, F.passiveCapture)),
      o.classList.remove('q-body--prevent-scroll'),
      o.classList.remove('q-body--force-scrollbar-x'),
      o.classList.remove('q-body--force-scrollbar-y'),
      (document.qScrollPrevented = !1),
      (o.style.left = Xe),
      (o.style.top = je),
      window.location.href === Ue && window.scrollTo(qe, xe),
      (Z = void 0));
}
function so(e) {
  let o = 'add';
  if (e === !0) {
    if ((J++, N !== null)) {
      clearTimeout(N), (N = null);
      return;
    }
    if (J > 1) return;
  } else {
    if (J === 0 || (J--, J > 0)) return;
    if (((o = 'remove'), H.is.ios === !0 && H.is.nativeMobile === !0)) {
      N !== null && clearTimeout(N),
        (N = setTimeout(() => {
          Ke(o), (N = null);
        }, 100));
      return;
    }
  }
  Ke(o);
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
  const o = A();
  function l() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Pt(l),
    D(l),
    {
      removeTimeout: l,
      registerTimeout(r, t) {
        l(),
          $t(o) === !1 &&
            (e = setTimeout(() => {
              (e = null), r();
            }, t));
      },
    }
  );
}
const Fe = { left: !0, right: !0, up: !0, down: !0, horizontal: !0, vertical: !0 },
  fo = Object.keys(Fe);
Fe.all = !0;
function Ge(e) {
  const o = {};
  for (const l of fo) e[l] === !0 && (o[l] = !0);
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
function Je(e, o) {
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
function _e(e, o, l) {
  const r = $e(e);
  let t,
    a = r.left - o.event.x,
    u = r.top - o.event.y,
    v = Math.abs(a),
    c = Math.abs(u);
  const d = o.direction;
  d.horizontal === !0 && d.vertical !== !0
    ? (t = a < 0 ? 'left' : 'right')
    : d.horizontal !== !0 && d.vertical === !0
      ? (t = u < 0 ? 'up' : 'down')
      : d.up === !0 && u < 0
        ? ((t = 'up'),
          v > c &&
            (d.left === !0 && a < 0 ? (t = 'left') : d.right === !0 && a > 0 && (t = 'right')))
        : d.down === !0 && u > 0
          ? ((t = 'down'),
            v > c &&
              (d.left === !0 && a < 0 ? (t = 'left') : d.right === !0 && a > 0 && (t = 'right')))
          : d.left === !0 && a < 0
            ? ((t = 'left'),
              v < c && (d.up === !0 && u < 0 ? (t = 'up') : d.down === !0 && u > 0 && (t = 'down')))
            : d.right === !0 &&
              a > 0 &&
              ((t = 'right'),
              v < c &&
                (d.up === !0 && u < 0 ? (t = 'up') : d.down === !0 && u > 0 && (t = 'down')));
  let i = !1;
  if (t === void 0 && l === !1) {
    if (o.event.isFirst === !0 || o.event.lastDir === void 0) return {};
    (t = o.event.lastDir),
      (i = !0),
      t === 'left' || t === 'right'
        ? ((r.left -= a), (v = 0), (a = 0))
        : ((r.top -= u), (c = 0), (u = 0));
  }
  return {
    synthetic: i,
    payload: {
      evt: e,
      touch: o.event.mouse !== !0,
      mouse: o.event.mouse === !0,
      position: r,
      direction: t,
      isFirst: o.event.isFirst,
      isFinal: l === !0,
      duration: Date.now() - o.event.time,
      distance: { x: v, y: c },
      offset: { x: a, y: u },
      delta: { x: r.left - o.event.lastX, y: r.top - o.event.lastY },
    },
  };
}
let ho = 0;
const Le = Bt({
  name: 'touch-pan',
  beforeMount(e, { value: o, modifiers: l }) {
    if (l.mouse !== !0 && H.has.touch !== !0) return;
    function r(a, u) {
      l.mouse === !0 && u === !0 ? Ve(a) : (l.stop === !0 && ye(a), l.prevent === !0 && Re(a));
    }
    const t = {
      uid: 'qvtp_' + ho++,
      handler: o,
      modifiers: l,
      direction: Ge(l),
      noop: ze,
      mouseStart(a) {
        Je(a, t) &&
          Vt(a) &&
          (oe(t, 'temp', [
            [document, 'mousemove', 'move', 'notPassiveCapture'],
            [document, 'mouseup', 'end', 'passiveCapture'],
          ]),
          t.start(a, !0));
      },
      touchStart(a) {
        if (Je(a, t)) {
          const u = a.target;
          oe(t, 'temp', [
            [u, 'touchmove', 'move', 'notPassiveCapture'],
            [u, 'touchcancel', 'end', 'passiveCapture'],
            [u, 'touchend', 'end', 'passiveCapture'],
          ]),
            t.start(a);
        }
      },
      start(a, u) {
        if ((H.is.firefox === !0 && we(e, !0), (t.lastEvt = a), u === !0 || l.stop === !0)) {
          if (
            t.direction.all !== !0 &&
            (u !== !0 || (t.modifiers.mouseAllDir !== !0 && t.modifiers.mousealldir !== !0))
          ) {
            const d =
              a.type.indexOf('mouse') !== -1
                ? new MouseEvent(a.type, a)
                : new TouchEvent(a.type, a);
            a.defaultPrevented === !0 && Re(d),
              a.cancelBubble === !0 && ye(d),
              Object.assign(d, {
                qKeyEvent: a.qKeyEvent,
                qClickOutside: a.qClickOutside,
                qAnchorHandled: a.qAnchorHandled,
                qClonedBy: a.qClonedBy === void 0 ? [t.uid] : a.qClonedBy.concat(t.uid),
              }),
              (t.initialEvent = { target: a.target, event: d });
          }
          ye(a);
        }
        const { left: v, top: c } = $e(a);
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
      move(a) {
        if (t.event === void 0) return;
        const u = $e(a),
          v = u.left - t.event.x,
          c = u.top - t.event.y;
        if (v === 0 && c === 0) return;
        t.lastEvt = a;
        const d = t.event.mouse === !0,
          i = () => {
            r(a, d);
            let p;
            l.preserveCursor !== !0 &&
              l.preservecursor !== !0 &&
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
                  const C = () => {
                    document.body.classList.remove('no-pointer-events--children');
                  };
                  m !== void 0
                    ? setTimeout(() => {
                        C(), m();
                      }, 50)
                    : C();
                } else m !== void 0 && m();
              });
          };
        if (t.event.detected === !0) {
          t.event.isFirst !== !0 && r(a, t.event.mouse);
          const { payload: p, synthetic: m } = _e(a, t, !1);
          p !== void 0 &&
            (t.handler(p) === !1
              ? t.end(a)
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
          i(), (t.event.detected = !0), t.move(a);
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
            ? ((t.event.detected = !0), t.move(a))
            : t.end(a, !0));
      },
      end(a, u) {
        if (t.event !== void 0) {
          if ((be(t, 'temp'), H.is.firefox === !0 && we(e, !1), u === !0))
            t.styleCleanup?.(),
              t.event.detected !== !0 &&
                t.initialEvent !== void 0 &&
                t.initialEvent.target.dispatchEvent(t.initialEvent.event);
          else if (t.event.detected === !0) {
            t.event.isFirst === !0 && t.handler(_e(a === void 0 ? t.lastEvt : a, t).payload);
            const { payload: v } = _e(a === void 0 ? t.lastEvt : a, t, !0),
              c = () => {
                t.handler(v);
              };
            t.styleCleanup !== void 0 ? t.styleCleanup(c) : c();
          }
          (t.event = void 0), (t.initialEvent = void 0), (t.lastEvt = void 0);
        }
      },
    };
    if (((e.__qtouchpan = t), l.mouse === !0)) {
      const a = l.mouseCapture === !0 || l.mousecapture === !0 ? 'Capture' : '';
      oe(t, 'main', [[e, 'mousedown', 'mouseStart', `passive${a}`]]);
    }
    H.has.touch === !0 &&
      oe(t, 'main', [
        [e, 'touchstart', 'touchStart', `passive${l.capture === !0 ? 'Capture' : ''}`],
        [e, 'touchmove', 'noop', 'notPassiveCapture'],
      ]);
  },
  updated(e, o) {
    const l = e.__qtouchpan;
    l !== void 0 &&
      (o.oldValue !== o.value && (typeof value != 'function' && l.end(), (l.handler = o.value)),
      (l.direction = Ge(o.modifiers)));
  },
  beforeUnmount(e) {
    const o = e.__qtouchpan;
    o !== void 0 &&
      (o.event !== void 0 && o.end(),
      be(o, 'main'),
      be(o, 'temp'),
      H.is.firefox === !0 && we(e, !1),
      o.styleCleanup?.(),
      delete e.__qtouchpan);
  },
});
function re(e, o, l) {
  return l <= o ? o : Math.min(l, Math.max(o, e));
}
const Ze = 150,
  bo = O({
    name: 'QDrawer',
    inheritAttrs: !1,
    props: {
      ...eo,
      ...Oe,
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
    setup(e, { slots: o, emit: l, attrs: r }) {
      const t = A(),
        {
          proxy: { $q: a },
        } = t,
        u = He(e, a),
        { preventBodyScroll: v } = co(),
        { registerTimeout: c, removeTimeout: d } = vo(),
        i = Be(ue, W);
      if (i === W) return console.error('QDrawer needs to be child of QLayout'), W;
      let b,
        q = null,
        p;
      const m = L(
          e.behavior === 'mobile' ||
            (e.behavior !== 'desktop' && i.totalWidth.value <= e.breakpoint),
        ),
        C = f(() => e.mini === !0 && m.value !== !0),
        _ = f(() => (C.value === !0 ? e.miniWidth : e.width)),
        w = L(e.showIfAbove === !0 && m.value === !1 ? !0 : e.modelValue === !0),
        s = f(() => e.persistent !== !0 && (m.value === !0 || st.value === !0));
      function h(n, y) {
        if ((B(), n !== !1 && i.animate(), V(0), m.value === !0)) {
          const S = i.instances[ee.value];
          S?.belowBreakpoint === !0 && S.hide(!1), Q(1), i.isContainer.value !== !0 && v(!0);
        } else Q(0), n !== !1 && fe(!1);
        c(() => {
          n !== !1 && fe(!0), y !== !0 && l('show', n);
        }, Ze);
      }
      function g(n, y) {
        K(),
          n !== !1 && i.animate(),
          Q(0),
          V(X.value * _.value),
          pe(),
          y !== !0
            ? c(() => {
                l('hide', n);
              }, Ze)
            : d();
      }
      const { show: $, hide: T } = oo({
          showing: w,
          hideOnRouteChange: s,
          handleShow: h,
          handleHide: g,
        }),
        { addToHistory: B, removeFromHistory: K } = Zt(w, T, s),
        R = { belowBreakpoint: m, hide: T },
        M = f(() => e.side === 'right'),
        X = f(() => (a.lang.rtl === !0 ? -1 : 1) * (M.value === !0 ? 1 : -1)),
        Ae = L(0),
        j = L(!1),
        se = L(!1),
        Me = L(_.value * X.value),
        ee = f(() => (M.value === !0 ? 'left' : 'right')),
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
            i.view.value.indexOf(M.value ? 'R' : 'L') !== -1 ||
            (a.platform.is.ios === !0 && i.isContainer.value === !0),
        ),
        G = f(() => e.overlay === !1 && w.value === !0 && m.value === !1),
        st = f(() => e.overlay === !0 && w.value === !0 && m.value === !1),
        dt = f(
          () =>
            'fullscreen q-drawer__backdrop' + (w.value === !1 && j.value === !1 ? ' hidden' : ''),
        ),
        ct = f(() => ({ backgroundColor: `rgba(0,0,0,${Ae.value * 0.4})` })),
        We = f(() => (M.value === !0 ? i.rows.value.top[2] === 'r' : i.rows.value.top[0] === 'l')),
        vt = f(() =>
          M.value === !0 ? i.rows.value.bottom[2] === 'r' : i.rows.value.bottom[0] === 'l',
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
          const n = { width: `${_.value}px`, transform: `translateX(${Me.value}px)` };
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
            (j.value === !0 ? ' no-transition' : w.value === !0 ? '' : ' q-layout--prevent-focus') +
            (m.value === !0
              ? ' fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding'
              : ` q-drawer--${C.value === !0 ? 'mini' : 'standard'}` +
                (ce.value === !0 || G.value !== !0 ? ' fixed' : '') +
                (e.overlay === !0 || e.miniToOverlay === !0 ? ' q-drawer--on-top' : '') +
                (We.value === !0 ? ' q-drawer--top-padding' : '')),
        ),
        bt = f(() => {
          const n = a.lang.rtl === !0 ? e.side : ee.value;
          return [[Le, qt, void 0, { [n]: !0, mouse: !0 }]];
        }),
        wt = f(() => {
          const n = a.lang.rtl === !0 ? ee.value : e.side;
          return [[Le, Qe, void 0, { [n]: !0, mouse: !0 }]];
        }),
        yt = f(() => {
          const n = a.lang.rtl === !0 ? ee.value : e.side;
          return [[Le, Qe, void 0, { [n]: !0, mouse: !0, mouseAllDir: !0 }]];
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
            (w.value === !0 ? (V(0), Q(0), pe()) : $(!1));
      }),
        x(
          () => e.side,
          (n, y) => {
            i.instances[y] === R &&
              ((i.instances[y] = void 0), (i[y].space = !1), (i[y].offset = 0)),
              (i.instances[n] = R),
              (i[n].size = _.value),
              (i[n].space = G.value),
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
          V(w.value === !0 ? 0 : void 0);
        }),
        x(de, (n) => {
          P('offset', n);
        }),
        x(G, (n) => {
          l('onLayout', n), P('space', n);
        }),
        x(M, () => {
          V();
        }),
        x(_, (n) => {
          V(), me(e.miniToOverlay, n);
        }),
        x(
          () => e.miniToOverlay,
          (n) => {
            me(n, _.value);
          },
        ),
        x(
          () => a.lang.rtl,
          () => {
            V();
          },
        ),
        x(
          () => e.mini,
          () => {
            e.noMiniAnimation || (e.modelValue === !0 && (gt(), i.animate()));
          },
        ),
        x(C, (n) => {
          l('miniState', n);
        });
      function V(n) {
        n === void 0
          ? Y(() => {
              (n = w.value === !0 ? 0 : _.value), V(X.value * n);
            })
          : (i.isContainer.value === !0 &&
              M.value === !0 &&
              (m.value === !0 || Math.abs(n) === _.value) &&
              (n += X.value * i.scrollbarWidth.value),
            (Me.value = n));
      }
      function Q(n) {
        Ae.value = n;
      }
      function fe(n) {
        const y = n === !0 ? 'remove' : i.isContainer.value !== !0 ? 'add' : '';
        y !== '' && document.body.classList[y]('q-body--drawer-toggle');
      }
      function gt() {
        q !== null && clearTimeout(q),
          t.proxy && t.proxy.$el && t.proxy.$el.classList.add('q-drawer--mini-animate'),
          (se.value = !0),
          (q = setTimeout(() => {
            (q = null), (se.value = !1), t?.proxy?.$el?.classList.remove('q-drawer--mini-animate');
          }, 150));
      }
      function qt(n) {
        if (w.value !== !1) return;
        const y = _.value,
          S = re(n.distance.x, 0, y);
        if (n.isFinal === !0) {
          S >= Math.min(75, y) ? $() : (i.animate(), Q(0), V(X.value * y)), (j.value = !1);
          return;
        }
        V((a.lang.rtl === !0 ? M.value !== !0 : M.value) ? Math.max(y - S, 0) : Math.min(0, S - y)),
          Q(re(S / y, 0, 1)),
          n.isFirst === !0 && (j.value = !0);
      }
      function Qe(n) {
        if (w.value !== !0) return;
        const y = _.value,
          S = n.direction === e.side,
          he = (a.lang.rtl === !0 ? S !== !0 : S) ? re(n.distance.x, 0, y) : 0;
        if (n.isFinal === !0) {
          Math.abs(he) < Math.min(75, y) ? (i.animate(), Q(1), V(0)) : T(), (j.value = !1);
          return;
        }
        V(X.value * he), Q(re(1 - he / y, 0, 1)), n.isFirst === !0 && (j.value = !0);
      }
      function pe() {
        v(!1), fe(!0);
      }
      function P(n, y) {
        i.update(e.side, n, y);
      }
      function xt(n, y) {
        n.value !== y && (n.value = y);
      }
      function me(n, y) {
        P('size', n === !0 ? e.miniWidth : y);
      }
      return (
        (i.instances[e.side] = R),
        me(e.miniToOverlay, _.value),
        P('space', G.value),
        P('offset', de.value),
        e.showIfAbove === !0 &&
          e.modelValue !== !0 &&
          w.value === !0 &&
          e['onUpdate:modelValue'] !== void 0 &&
          l('update:modelValue', !0),
        U(() => {
          l('onLayout', G.value), l('miniState', C.value), (b = e.showIfAbove === !0);
          const n = () => {
            (w.value === !0 ? h : g)(!1, !0);
          };
          if (i.totalWidth.value !== 0) {
            Y(n);
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
              ((i.instances[e.side] = void 0), P('size', 0), P('offset', 0), P('space', !1));
        }),
        () => {
          const n = [];
          m.value === !0 &&
            (e.noSwipeOpen === !1 &&
              n.push(
                Ot(
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
                () => yt.value,
              ),
            ));
          const y = C.value === !0 && o.mini !== void 0,
            S = [
              k(
                'div',
                { ...r, key: '' + y, class: [mt.value, r.class] },
                y === !0 ? o.mini() : I(o.default),
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
  wo = O({
    name: 'QPageContainer',
    setup(e, { slots: o }) {
      const {
          proxy: { $q: l },
        } = A(),
        r = Be(ue, W);
      if (r === W) return console.error('QPageContainer needs to be child of QLayout'), W;
      at(It, !0);
      const t = f(() => {
        const a = {};
        return (
          r.header.space === !0 && (a.paddingTop = `${r.header.size}px`),
          r.right.space === !0 &&
            (a[`padding${l.lang.rtl === !0 ? 'Left' : 'Right'}`] = `${r.right.size}px`),
          r.footer.space === !0 && (a.paddingBottom = `${r.footer.size}px`),
          r.left.space === !0 &&
            (a[`padding${l.lang.rtl === !0 ? 'Right' : 'Left'}`] = `${r.left.size}px`),
          a
        );
      });
      return () => k('div', { class: 'q-page-container', style: t.value }, I(o.default));
    },
  }),
  { passive: et } = F,
  yo = ['both', 'horizontal', 'vertical'],
  go = O({
    name: 'QScrollObserver',
    props: {
      axis: { type: String, validator: (e) => yo.includes(e), default: 'vertical' },
      debounce: [String, Number],
      scrollTarget: lo,
    },
    emits: ['scroll'],
    setup(e, { emit: o }) {
      const l = {
        position: { top: 0, left: 0 },
        direction: 'down',
        directionChanged: !1,
        delta: { top: 0, left: 0 },
        inflectionPoint: { top: 0, left: 0 },
      };
      let r = null,
        t,
        a;
      x(
        () => e.scrollTarget,
        () => {
          c(), v();
        },
      );
      function u() {
        r?.();
        const b = Math.max(0, it(t)),
          q = ut(t),
          p = { top: b - l.position.top, left: q - l.position.left };
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
        (l.position = { top: b, left: q }),
          (l.directionChanged = l.direction !== m),
          (l.delta = p),
          l.directionChanged === !0 && ((l.direction = m), (l.inflectionPoint = l.position)),
          o('scroll', { ...l });
      }
      function v() {
        (t = ro(a, e.scrollTarget)), t.addEventListener('scroll', d, et), d(!0);
      }
      function c() {
        t !== void 0 && (t.removeEventListener('scroll', d, et), (t = void 0));
      }
      function d(b) {
        if (b === !0 || e.debounce === 0 || e.debounce === '0') u();
        else if (r === null) {
          const [q, p] = e.debounce
            ? [setTimeout(u, e.debounce), clearTimeout]
            : [requestAnimationFrame(u), cancelAnimationFrame];
          r = () => {
            p(q), (r = null);
          };
        }
      }
      const { proxy: i } = A();
      return (
        x(() => i.$q.lang.rtl, u),
        U(() => {
          (a = i.$el.parentNode), v();
        }),
        D(() => {
          r?.(), c();
        }),
        Object.assign(i, { trigger: d, getPosition: () => l }),
        ze
      );
    },
  }),
  qo = O({
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
    setup(e, { slots: o, emit: l }) {
      const {
          proxy: { $q: r },
        } = A(),
        t = L(null),
        a = L(r.screen.height),
        u = L(e.container === !0 ? 0 : r.screen.width),
        v = L({ position: 0, direction: 'down', inflectionPoint: 0 }),
        c = L(0),
        d = L(lt.value === !0 ? 0 : ge()),
        i = f(() => 'q-layout q-layout--' + (e.container === !0 ? 'containerized' : 'standard')),
        b = f(() => (e.container === !1 ? { minHeight: r.screen.height + 'px' } : null)),
        q = f(() =>
          d.value !== 0 ? { [r.lang.rtl === !0 ? 'left' : 'right']: `${d.value}px` } : null,
        ),
        p = f(() =>
          d.value !== 0
            ? {
                [r.lang.rtl === !0 ? 'right' : 'left']: 0,
                [r.lang.rtl === !0 ? 'left' : 'right']: `-${d.value}px`,
                width: `calc(100% + ${d.value}px)`,
              }
            : null,
        );
      function m(g) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const $ = {
            position: g.position.top,
            direction: g.direction,
            directionChanged: g.directionChanged,
            inflectionPoint: g.inflectionPoint.top,
            delta: g.delta.top,
          };
          (v.value = $), e.onScroll !== void 0 && l('scroll', $);
        }
      }
      function C(g) {
        const { height: $, width: T } = g;
        let B = !1;
        a.value !== $ &&
          ((B = !0), (a.value = $), e.onScrollHeight !== void 0 && l('scrollHeight', $), w()),
          u.value !== T && ((B = !0), (u.value = T)),
          B === !0 && e.onResize !== void 0 && l('resize', g);
      }
      function _({ height: g }) {
        c.value !== g && ((c.value = g), w());
      }
      function w() {
        if (e.container === !0) {
          const g = a.value > c.value ? ge() : 0;
          d.value !== g && (d.value = g);
        }
      }
      let s = null;
      const h = {
        instances: {},
        view: f(() => e.view),
        isContainer: f(() => e.container),
        rootRef: t,
        height: a,
        containerHeight: c,
        scrollbarWidth: d,
        totalWidth: f(() => u.value + d.value),
        rows: f(() => {
          const g = e.view.toLowerCase().split(' ');
          return { top: g[0].split(''), middle: g[1].split(''), bottom: g[2].split('') };
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
        update(g, $, T) {
          h[g][$] = T;
        },
      };
      if ((at(ue, h), ge() > 0)) {
        let g = function () {
            (B = null), K.classList.remove('hide-scrollbar');
          },
          $ = function () {
            if (B === null) {
              if (K.scrollHeight > r.screen.height) return;
              K.classList.add('hide-scrollbar');
            } else clearTimeout(B);
            B = setTimeout(g, 300);
          },
          T = function (R) {
            B !== null && R === 'remove' && (clearTimeout(B), g()),
              window[`${R}EventListener`]('resize', $);
          },
          B = null;
        const K = document.body;
        x(() => (e.container !== !0 ? 'add' : 'remove'), T),
          e.container !== !0 && T('add'),
          zt(() => {
            T('remove');
          });
      }
      return () => {
        const g = Xt(o.default, [k(go, { onScroll: m }), k(Ee, { onResize: C })]),
          $ = k(
            'div',
            { class: i.value, style: b.value, ref: e.container === !0 ? void 0 : t, tabindex: -1 },
            g,
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
  tt = O({
    name: 'QItemSection',
    props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean },
    setup(e, { slots: o }) {
      const l = f(
        () =>
          `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? 'side' : 'main'}` +
          (e.top === !0 ? ' q-item__section--top justify-start' : ' justify-center') +
          (e.avatar === !0 ? ' q-item__section--avatar' : '') +
          (e.thumbnail === !0 ? ' q-item__section--thumbnail' : '') +
          (e.noWrap === !0 ? ' q-item__section--nowrap' : ''),
      );
      return () => k('div', { class: l.value }, I(o.default));
    },
  }),
  xo = O({
    name: 'QItem',
    props: {
      ...Oe,
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
    setup(e, { slots: o, emit: l }) {
      const {
          proxy: { $q: r },
        } = A(),
        t = He(e, r),
        { hasLink: a, linkAttrs: u, linkClass: v, linkTag: c, navigateOnClick: d } = Lt(),
        i = L(null),
        b = L(null),
        q = f(() => e.clickable === !0 || a.value === !0 || e.tag === 'label'),
        p = f(() => e.disable !== !0 && q.value === !0),
        m = f(
          () =>
            'q-item q-item-type row no-wrap' +
            (e.dense === !0 ? ' q-item--dense' : '') +
            (t.value === !0 ? ' q-item--dark' : '') +
            (a.value === !0 && e.active === null
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
        C = f(() =>
          e.insetLevel === void 0
            ? null
            : {
                ['padding' + (r.lang.rtl === !0 ? 'Right' : 'Left')]: 16 + e.insetLevel * 56 + 'px',
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
        if (p.value === !0 && Ht(h, [13, 32]) === !0) {
          Ve(h), (h.qKeyEvent = !0);
          const g = new MouseEvent('click', h);
          (g.qKeyEvent = !0), i.value.dispatchEvent(g);
        }
        l('keyup', h);
      }
      function s() {
        const h = rt(o.default, []);
        return (
          p.value === !0 && h.unshift(k('div', { class: 'q-focus-helper', tabindex: -1, ref: b })),
          h
        );
      }
      return () => {
        const h = {
          ref: i,
          class: m.value,
          style: C.value,
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
      return (o, l) => (
        ne(),
        Ce(
          xo,
          { clickable: '', tag: 'a', target: '_blank', href: o.link },
          {
            default: z(() => [
              o.icon
                ? (ne(),
                  Ce(
                    tt,
                    { key: 0, avatar: '' },
                    { default: z(() => [E(Et, { name: o.icon }, null, 8, ['name'])]), _: 1 },
                  ))
                : Rt('', !0),
              E(tt, null, {
                default: z(() => [
                  E(Se, null, { default: z(() => [ie(Te(o.title), 1)]), _: 1 }),
                  E(Se, { caption: '' }, { default: z(() => [ie(Te(o.caption), 1)]), _: 1 }),
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
        l = L(!1);
      function r() {
        l.value = !l.value;
      }
      return (t, a) => {
        const u = St('router-view');
        return (
          ne(),
          Ce(
            qo,
            { view: 'lHh Lpr lFf' },
            {
              default: z(() => [
                E(
                  Kt,
                  { elevated: '' },
                  {
                    default: z(() => [
                      E(Ut, null, {
                        default: z(() => [
                          E(Ct, {
                            flat: '',
                            dense: '',
                            round: '',
                            icon: 'menu',
                            'aria-label': 'Menu',
                            onClick: r,
                          }),
                          E(jt, null, {
                            default: z(() => a[1] || (a[1] = [ie(' Cavatech ')])),
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
                    modelValue: l.value,
                    'onUpdate:modelValue': a[0] || (a[0] = (v) => (l.value = v)),
                    'show-if-above': '',
                    bordered: '',
                  },
                  {
                    default: z(() => [
                      E(Jt, null, {
                        default: z(() => [
                          E(
                            Se,
                            { header: '' },
                            { default: z(() => a[2] || (a[2] = [ie(' Essential Links ')])), _: 1 },
                          ),
                          (ne(),
                          At(
                            Mt,
                            null,
                            Wt(o, (v) => E(ko, Qt({ key: v.title, ref_for: !0 }, v), null, 16)),
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
                E(wo, null, { default: z(() => [E(u)]), _: 1 }),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { $o as default };
