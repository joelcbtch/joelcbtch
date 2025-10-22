import {
  P as Pe,
  Z as kt,
  t as _t,
  N as Ct,
  n as Lt,
  e as Tt,
  z as $t,
  Y as Et,
} from './QBtn-Cy2OY3F3-BCpda_Hn.js';
import {
  S as ot,
  Y as C,
  _ as Bt,
  a0 as Le,
  a1 as ne,
  a2 as S,
  a3 as H,
  a4 as M,
  a5 as at,
  a6 as f,
  a7 as te,
  a8 as rt,
  a9 as x,
  aa as St,
  ab as k,
  ac as F,
  ad as Se,
  ae as Y,
  af as D,
  ag as K,
  ah as ze,
  ai as W,
  aj as zt,
  ak as we,
  al as O,
  am as be,
  an as oe,
  ao as Te,
  ap as Re,
  aq as ge,
  ar as Vt,
  as as Ht,
  at as Ot,
  au as Ve,
  av as E,
  aw as Ft,
  ax as ie,
  ay as $e,
  az as Mt,
  aA as At,
  aB as Wt,
  aC as Qt,
  aD as Pt,
  aE as Ne,
  aF as Rt,
  aG as Nt,
  aH as Dt,
  aI as ue,
  aJ as jt,
} from './index-ExIJm5nn.js';
import { s as It, v as j, h as lt, d as De } from './render-Dk1QbAdB-Duum6jXv.js';
const Xt = H({
    name: 'QToolbarTitle',
    props: { shrink: Boolean },
    setup(e, { slots: o }) {
      const a = f(() => 'q-toolbar__title ellipsis' + (e.shrink === !0 ? ' col-shrink' : ''));
      return () => k('div', { class: a.value }, j(o.default));
    },
  }),
  Yt = H({
    name: 'QToolbar',
    props: { inset: Boolean },
    setup(e, { slots: o }) {
      const a = f(
        () => 'q-toolbar row no-wrap items-center' + (e.inset === !0 ? ' q-toolbar--inset' : ''),
      );
      return () => k('div', { class: a.value, role: 'toolbar' }, j(o.default));
    },
  });
function Kt() {
  const e = C(!at.value);
  return (
    e.value === !1 &&
      Y(() => {
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
      let a = null,
        l,
        t = { width: -1, height: -1 };
      function r(c) {
        c === !0 || e.debounce === 0 || e.debounce === '0'
          ? u()
          : a === null && (a = setTimeout(u, e.debounce));
      }
      function u() {
        if ((a !== null && (clearTimeout(a), (a = null)), l)) {
          const { offsetWidth: c, offsetHeight: d } = l;
          (c !== t.width || d !== t.height) && ((t = { width: c, height: d }), o('resize', t));
        }
      }
      const { proxy: v } = M();
      if (((v.trigger = r), nt === !0)) {
        let c;
        const d = (i) => {
          (l = v.$el.parentNode),
            l
              ? ((c = new ResizeObserver(r)), c.observe(l), u())
              : i !== !0 &&
                K(() => {
                  d(!0);
                });
        };
        return (
          Y(() => {
            d();
          }),
          D(() => {
            a !== null && clearTimeout(a),
              c !== void 0 && (c.disconnect !== void 0 ? c.disconnect() : l && c.unobserve(l));
          }),
          Se
        );
      } else {
        let c = function () {
            a !== null && (clearTimeout(a), (a = null)),
              w !== void 0 &&
                (w.removeEventListener !== void 0 && w.removeEventListener('resize', r, F.passive),
                (w = void 0));
          },
          d = function () {
            c(),
              l?.contentDocument &&
                ((w = l.contentDocument.defaultView),
                w.addEventListener('resize', r, F.passive),
                u());
          };
        const { isHydrated: i } = Kt();
        let w;
        return (
          Y(() => {
            K(() => {
              (l = v.$el), l && d();
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
  Ut = H({
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
    setup(e, { slots: o, emit: a }) {
      const {
          proxy: { $q: l },
        } = M(),
        t = ze(ue, W);
      if (t === W) return console.error('QHeader needs to be child of QLayout'), W;
      const r = C(parseInt(e.heightHint, 10)),
        u = C(!0),
        v = f(
          () =>
            e.reveal === !0 ||
            t.view.value.indexOf('H') !== -1 ||
            (l.platform.is.ios && t.isContainer.value === !0),
        ),
        c = f(() => {
          if (e.modelValue !== !0) return 0;
          if (v.value === !0) return u.value === !0 ? r.value : 0;
          const s = r.value - t.scroll.value.position;
          return s > 0 ? s : 0;
        }),
        d = f(() => e.modelValue !== !0 || (v.value === !0 && u.value !== !0)),
        i = f(() => e.modelValue === !0 && d.value === !0 && e.reveal === !0),
        w = f(
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
              (h[l.lang.rtl === !0 ? 'right' : 'left'] = `${t.left.size}px`),
            s[2] === 'r' &&
              t.right.space === !0 &&
              (h[l.lang.rtl === !0 ? 'left' : 'right'] = `${t.right.size}px`),
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
        m(r, s), p('size', s);
      }
      function _(s) {
        i.value === !0 && m(u, !0), a('focusin', s);
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
          t.animate(), a('reveal', s);
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
      const b = {};
      return (
        (t.instances.header = b),
        e.modelValue === !0 && p('size', r.value),
        p('space', e.modelValue),
        p('offset', c.value),
        D(() => {
          t.instances.header === b &&
            ((t.instances.header = void 0), p('size', 0), p('offset', 0), p('space', !1));
        }),
        () => {
          const s = lt(o.default, []);
          return (
            e.elevated === !0 &&
              s.push(
                k('div', {
                  class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events',
                }),
              ),
            s.push(k(Ee, { debounce: 0, onResize: L })),
            k('header', { class: w.value, style: q.value, onFocusin: _ }, s)
          );
        }
      );
    },
  }),
  Be = H({
    name: 'QItemLabel',
    props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] },
    setup(e, { slots: o }) {
      const a = f(() => parseInt(e.lines, 10)),
        l = f(
          () =>
            'q-item__label' +
            (e.overline === !0 ? ' q-item__label--overline text-overline' : '') +
            (e.caption === !0 ? ' q-item__label--caption text-caption' : '') +
            (e.header === !0 ? ' q-item__label--header' : '') +
            (a.value === 1 ? ' ellipsis' : ''),
        ),
        t = f(() =>
          e.lines !== void 0 && a.value > 1
            ? {
                overflow: 'hidden',
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': a.value,
              }
            : null,
        );
      return () => k('div', { style: t.value, class: l.value }, j(o.default));
    },
  }),
  He = { dark: { type: Boolean, default: null } };
function Oe(e, o) {
  return f(() => (e.dark === null ? o.dark.isActive : e.dark));
}
const Jt = ['ul', 'ol'],
  Zt = H({
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
      const a = M(),
        l = Oe(e, a.proxy.$q),
        t = f(() => (Jt.includes(e.tag) ? null : 'list')),
        r = f(
          () =>
            'q-list' +
            (e.bordered === !0 ? ' q-list--bordered' : '') +
            (e.dense === !0 ? ' q-list--dense' : '') +
            (e.separator === !0 ? ' q-list--separator' : '') +
            (l.value === !0 ? ' q-list--dark' : '') +
            (e.padding === !0 ? ' q-list--padding' : ''),
        );
      return () => k(e.tag, { class: r.value, role: t.value }, j(o.default));
    },
  });
function Gt(e, o, a) {
  let l;
  function t() {
    l !== void 0 && (Ne.remove(l), (l = void 0));
  }
  return (
    D(() => {
      e.value === !0 && t();
    }),
    {
      removeFromHistory: t,
      addToHistory() {
        (l = { condition: () => a.value === !0, handler: o }), Ne.add(l);
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
  hideOnRouteChange: a,
  handleShow: l,
  handleHide: t,
  processOnMount: r,
}) {
  const u = M(),
    { props: v, emit: c, proxy: d } = u;
  let i;
  function w(s) {
    e.value === !0 ? m(s) : q(s);
  }
  function q(s) {
    if (v.disable === !0 || s?.qAnchorHandled === !0 || (o !== void 0 && o(s) !== !0)) return;
    const h = v['onUpdate:modelValue'] !== void 0;
    h === !0 &&
      (c('update:modelValue', !0),
      (i = s),
      K(() => {
        i === s && (i = void 0);
      })),
      (v.modelValue === null || h === !1) && p(s);
  }
  function p(s) {
    e.value !== !0 && ((e.value = !0), c('beforeShow', s), l !== void 0 ? l(s) : c('show', s));
  }
  function m(s) {
    if (v.disable === !0) return;
    const h = v['onUpdate:modelValue'] !== void 0;
    h === !0 &&
      (c('update:modelValue', !1),
      (i = s),
      K(() => {
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
    a !== void 0 &&
      $t(u) === !0 &&
      x(
        () => d.$route.fullPath,
        () => {
          a.value === !0 && e.value === !0 && m();
        },
      ),
    r === !0 &&
      Y(() => {
        _(v.modelValue);
      });
  const b = { show: q, hide: m, toggle: w };
  return Object.assign(d, b), b;
}
const ao = [Element, String],
  ro = [null, document, document.body, document.scrollingElement, document.documentElement];
function lo(e, o) {
  let a = kt(o);
  if (a === void 0) {
    if (e == null) return window;
    a = e.closest('.scroll,.scroll-y,.overflow-auto');
  }
  return ro.includes(a) ? window : a;
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
let ae;
function ye() {
  if (ae !== void 0) return ae;
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
  const a = e.offsetWidth;
  o.style.overflow = 'scroll';
  let l = e.offsetWidth;
  return a === l && (l = o.clientWidth), o.remove(), (ae = a - l), ae;
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
let Z = 0,
  qe,
  xe,
  G,
  ke = !1,
  Ie,
  Xe,
  Ye,
  N = null;
function io(e) {
  uo(e) && Ve(e);
}
function uo(e) {
  if (e.target === document.body || e.target.classList.contains('q-layout__backdrop')) return !0;
  const o = Dt(e),
    a = e.shiftKey && !e.deltaX,
    l = !a && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    t = a || l ? e.deltaY : e.deltaX;
  for (let r = 0; r < o.length; r++) {
    const u = o[r];
    if (no(u, l))
      return l
        ? t < 0 && u.scrollTop === 0
          ? !0
          : t > 0 && u.scrollTop + u.clientHeight === u.scrollHeight
        : t < 0 && u.scrollLeft === 0
          ? !0
          : t > 0 && u.scrollLeft + u.clientWidth === u.scrollWidth;
  }
  return !0;
}
function Ke(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function re(e) {
  ke !== !0 &&
    ((ke = !0),
    requestAnimationFrame(() => {
      ke = !1;
      const { height: o } = e.target,
        { clientHeight: a, scrollTop: l } = document.scrollingElement;
      (G === void 0 || o !== window.innerHeight) &&
        ((G = a - o), (document.scrollingElement.scrollTop = l)),
        l > G && (document.scrollingElement.scrollTop -= Math.ceil((l - G) / 8));
    }));
}
function Ue(e) {
  const o = document.body,
    a = window.visualViewport !== void 0;
  if (e === 'add') {
    const { overflowY: l, overflowX: t } = window.getComputedStyle(o);
    (qe = ut(window)),
      (xe = it(window)),
      (Ie = o.style.left),
      (Xe = o.style.top),
      (Ye = window.location.href),
      (o.style.left = `-${qe}px`),
      (o.style.top = `-${xe}px`),
      t !== 'hidden' &&
        (t === 'scroll' || o.scrollWidth > window.innerWidth) &&
        o.classList.add('q-body--force-scrollbar-x'),
      l !== 'hidden' &&
        (l === 'scroll' || o.scrollHeight > window.innerHeight) &&
        o.classList.add('q-body--force-scrollbar-y'),
      o.classList.add('q-body--prevent-scroll'),
      (document.qScrollPrevented = !0),
      O.is.ios === !0 &&
        (a === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener('resize', re, F.passiveCapture),
            window.visualViewport.addEventListener('scroll', re, F.passiveCapture),
            window.scrollTo(0, 0))
          : window.addEventListener('scroll', Ke, F.passiveCapture));
  }
  O.is.desktop === !0 && O.is.mac === !0 && window[`${e}EventListener`]('wheel', io, F.notPassive),
    e === 'remove' &&
      (O.is.ios === !0 &&
        (a === !0
          ? (window.visualViewport.removeEventListener('resize', re, F.passiveCapture),
            window.visualViewport.removeEventListener('scroll', re, F.passiveCapture))
          : window.removeEventListener('scroll', Ke, F.passiveCapture)),
      o.classList.remove('q-body--prevent-scroll'),
      o.classList.remove('q-body--force-scrollbar-x'),
      o.classList.remove('q-body--force-scrollbar-y'),
      (document.qScrollPrevented = !1),
      (o.style.left = Ie),
      (o.style.top = Xe),
      window.location.href === Ye && window.scrollTo(qe, xe),
      (G = void 0));
}
function so(e) {
  let o = 'add';
  if (e === !0) {
    if ((Z++, N !== null)) {
      clearTimeout(N), (N = null);
      return;
    }
    if (Z > 1) return;
  } else {
    if (Z === 0 || (Z--, Z > 0)) return;
    if (((o = 'remove'), O.is.ios === !0 && O.is.nativeMobile === !0)) {
      N !== null && clearTimeout(N),
        (N = setTimeout(() => {
          Ue(o), (N = null);
        }, 100));
      return;
    }
  }
  Ue(o);
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
  function a() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Pt(a),
    D(a),
    {
      removeTimeout: a,
      registerTimeout(l, t) {
        a(),
          Tt(o) === !1 &&
            (e = setTimeout(() => {
              (e = null), l();
            }, t));
      },
    }
  );
}
const Fe = { left: !0, right: !0, up: !0, down: !0, horizontal: !0, vertical: !0 },
  fo = Object.keys(Fe);
Fe.all = !0;
function Je(e) {
  const o = {};
  for (const a of fo) e[a] === !0 && (o[a] = !0);
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
function Ze(e, o) {
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
function _e(e, o, a) {
  const l = Te(e);
  let t,
    r = l.left - o.event.x,
    u = l.top - o.event.y,
    v = Math.abs(r),
    c = Math.abs(u);
  const d = o.direction;
  d.horizontal === !0 && d.vertical !== !0
    ? (t = r < 0 ? 'left' : 'right')
    : d.horizontal !== !0 && d.vertical === !0
      ? (t = u < 0 ? 'up' : 'down')
      : d.up === !0 && u < 0
        ? ((t = 'up'),
          v > c &&
            (d.left === !0 && r < 0 ? (t = 'left') : d.right === !0 && r > 0 && (t = 'right')))
        : d.down === !0 && u > 0
          ? ((t = 'down'),
            v > c &&
              (d.left === !0 && r < 0 ? (t = 'left') : d.right === !0 && r > 0 && (t = 'right')))
          : d.left === !0 && r < 0
            ? ((t = 'left'),
              v < c && (d.up === !0 && u < 0 ? (t = 'up') : d.down === !0 && u > 0 && (t = 'down')))
            : d.right === !0 &&
              r > 0 &&
              ((t = 'right'),
              v < c &&
                (d.up === !0 && u < 0 ? (t = 'up') : d.down === !0 && u > 0 && (t = 'down')));
  let i = !1;
  if (t === void 0 && a === !1) {
    if (o.event.isFirst === !0 || o.event.lastDir === void 0) return {};
    (t = o.event.lastDir),
      (i = !0),
      t === 'left' || t === 'right'
        ? ((l.left -= r), (v = 0), (r = 0))
        : ((l.top -= u), (c = 0), (u = 0));
  }
  return {
    synthetic: i,
    payload: {
      evt: e,
      touch: o.event.mouse !== !0,
      mouse: o.event.mouse === !0,
      position: l,
      direction: t,
      isFirst: o.event.isFirst,
      isFinal: a === !0,
      duration: Date.now() - o.event.time,
      distance: { x: v, y: c },
      offset: { x: r, y: u },
      delta: { x: l.left - o.event.lastX, y: l.top - o.event.lastY },
    },
  };
}
let ho = 0;
const Ce = zt({
  name: 'touch-pan',
  beforeMount(e, { value: o, modifiers: a }) {
    if (a.mouse !== !0 && O.has.touch !== !0) return;
    function l(r, u) {
      a.mouse === !0 && u === !0 ? Ve(r) : (a.stop === !0 && ge(r), a.prevent === !0 && Re(r));
    }
    const t = {
      uid: 'qvtp_' + ho++,
      handler: o,
      modifiers: a,
      direction: Je(a),
      noop: Se,
      mouseStart(r) {
        Ze(r, t) &&
          Vt(r) &&
          (oe(t, 'temp', [
            [document, 'mousemove', 'move', 'notPassiveCapture'],
            [document, 'mouseup', 'end', 'passiveCapture'],
          ]),
          t.start(r, !0));
      },
      touchStart(r) {
        if (Ze(r, t)) {
          const u = r.target;
          oe(t, 'temp', [
            [u, 'touchmove', 'move', 'notPassiveCapture'],
            [u, 'touchcancel', 'end', 'passiveCapture'],
            [u, 'touchend', 'end', 'passiveCapture'],
          ]),
            t.start(r);
        }
      },
      start(r, u) {
        if ((O.is.firefox === !0 && be(e, !0), (t.lastEvt = r), u === !0 || a.stop === !0)) {
          if (
            t.direction.all !== !0 &&
            (u !== !0 || (t.modifiers.mouseAllDir !== !0 && t.modifiers.mousealldir !== !0))
          ) {
            const d =
              r.type.indexOf('mouse') !== -1
                ? new MouseEvent(r.type, r)
                : new TouchEvent(r.type, r);
            r.defaultPrevented === !0 && Re(d),
              r.cancelBubble === !0 && ge(d),
              Object.assign(d, {
                qKeyEvent: r.qKeyEvent,
                qClickOutside: r.qClickOutside,
                qAnchorHandled: r.qAnchorHandled,
                qClonedBy: r.qClonedBy === void 0 ? [t.uid] : r.qClonedBy.concat(t.uid),
              }),
              (t.initialEvent = { target: r.target, event: d });
          }
          ge(r);
        }
        const { left: v, top: c } = Te(r);
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
      move(r) {
        if (t.event === void 0) return;
        const u = Te(r),
          v = u.left - t.event.x,
          c = u.top - t.event.y;
        if (v === 0 && c === 0) return;
        t.lastEvt = r;
        const d = t.event.mouse === !0,
          i = () => {
            l(r, d);
            let p;
            a.preserveCursor !== !0 &&
              a.preservecursor !== !0 &&
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
          t.event.isFirst !== !0 && l(r, t.event.mouse);
          const { payload: p, synthetic: m } = _e(r, t, !1);
          p !== void 0 &&
            (t.handler(p) === !1
              ? t.end(r)
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
          i(), (t.event.detected = !0), t.move(r);
          return;
        }
        const w = Math.abs(v),
          q = Math.abs(c);
        w !== q &&
          ((t.direction.horizontal === !0 && w > q) ||
          (t.direction.vertical === !0 && w < q) ||
          (t.direction.up === !0 && w < q && c < 0) ||
          (t.direction.down === !0 && w < q && c > 0) ||
          (t.direction.left === !0 && w > q && v < 0) ||
          (t.direction.right === !0 && w > q && v > 0)
            ? ((t.event.detected = !0), t.move(r))
            : t.end(r, !0));
      },
      end(r, u) {
        if (t.event !== void 0) {
          if ((we(t, 'temp'), O.is.firefox === !0 && be(e, !1), u === !0))
            t.styleCleanup?.(),
              t.event.detected !== !0 &&
                t.initialEvent !== void 0 &&
                t.initialEvent.target.dispatchEvent(t.initialEvent.event);
          else if (t.event.detected === !0) {
            t.event.isFirst === !0 && t.handler(_e(r === void 0 ? t.lastEvt : r, t).payload);
            const { payload: v } = _e(r === void 0 ? t.lastEvt : r, t, !0),
              c = () => {
                t.handler(v);
              };
            t.styleCleanup !== void 0 ? t.styleCleanup(c) : c();
          }
          (t.event = void 0), (t.initialEvent = void 0), (t.lastEvt = void 0);
        }
      },
    };
    if (((e.__qtouchpan = t), a.mouse === !0)) {
      const r = a.mouseCapture === !0 || a.mousecapture === !0 ? 'Capture' : '';
      oe(t, 'main', [[e, 'mousedown', 'mouseStart', `passive${r}`]]);
    }
    O.has.touch === !0 &&
      oe(t, 'main', [
        [e, 'touchstart', 'touchStart', `passive${a.capture === !0 ? 'Capture' : ''}`],
        [e, 'touchmove', 'noop', 'notPassiveCapture'],
      ]);
  },
  updated(e, o) {
    const a = e.__qtouchpan;
    a !== void 0 &&
      (o.oldValue !== o.value && (typeof value != 'function' && a.end(), (a.handler = o.value)),
      (a.direction = Je(o.modifiers)));
  },
  beforeUnmount(e) {
    const o = e.__qtouchpan;
    o !== void 0 &&
      (o.event !== void 0 && o.end(),
      we(o, 'main'),
      we(o, 'temp'),
      O.is.firefox === !0 && be(e, !1),
      o.styleCleanup?.(),
      delete e.__qtouchpan);
  },
});
function le(e, o, a) {
  return a <= o ? o : Math.min(a, Math.max(o, e));
}
const Ge = 150,
  wo = H({
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
    setup(e, { slots: o, emit: a, attrs: l }) {
      const t = M(),
        {
          proxy: { $q: r },
        } = t,
        u = Oe(e, r),
        { preventBodyScroll: v } = co(),
        { registerTimeout: c, removeTimeout: d } = vo(),
        i = ze(ue, W);
      if (i === W) return console.error('QDrawer needs to be child of QLayout'), W;
      let w,
        q = null,
        p;
      const m = C(
          e.behavior === 'mobile' ||
            (e.behavior !== 'desktop' && i.totalWidth.value <= e.breakpoint),
        ),
        L = f(() => e.mini === !0 && m.value !== !0),
        _ = f(() => (L.value === !0 ? e.miniWidth : e.width)),
        b = C(e.showIfAbove === !0 && m.value === !1 ? !0 : e.modelValue === !0),
        s = f(() => e.persistent !== !0 && (m.value === !0 || st.value === !0));
      function h(n, g) {
        if ((z(), n !== !1 && i.animate(), V(0), m.value === !0)) {
          const B = i.instances[ee.value];
          B?.belowBreakpoint === !0 && B.hide(!1), Q(1), i.isContainer.value !== !0 && v(!0);
        } else Q(0), n !== !1 && fe(!1);
        c(() => {
          n !== !1 && fe(!0), g !== !0 && a('show', n);
        }, Ge);
      }
      function y(n, g) {
        U(),
          n !== !1 && i.animate(),
          Q(0),
          V(I.value * _.value),
          pe(),
          g !== !0
            ? c(() => {
                a('hide', n);
              }, Ge)
            : d();
      }
      const { show: T, hide: $ } = oo({
          showing: b,
          hideOnRouteChange: s,
          handleShow: h,
          handleHide: y,
        }),
        { addToHistory: z, removeFromHistory: U } = Gt(b, $, s),
        R = { belowBreakpoint: m, hide: $ },
        A = f(() => e.side === 'right'),
        I = f(() => (r.lang.rtl === !0 ? -1 : 1) * (A.value === !0 ? 1 : -1)),
        Me = C(0),
        X = C(!1),
        se = C(!1),
        Ae = C(_.value * I.value),
        ee = f(() => (A.value === !0 ? 'left' : 'right')),
        de = f(() =>
          b.value === !0 && m.value === !1 && e.overlay === !1
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
            (r.platform.is.ios === !0 && i.isContainer.value === !0),
        ),
        J = f(() => e.overlay === !1 && b.value === !0 && m.value === !1),
        st = f(() => e.overlay === !0 && b.value === !0 && m.value === !1),
        dt = f(
          () =>
            'fullscreen q-drawer__backdrop' + (b.value === !1 && X.value === !1 ? ' hidden' : ''),
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
            (X.value === !0 ? ' no-transition' : b.value === !0 ? '' : ' q-layout--prevent-focus') +
            (m.value === !0
              ? ' fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding'
              : ` q-drawer--${L.value === !0 ? 'mini' : 'standard'}` +
                (ce.value === !0 || J.value !== !0 ? ' fixed' : '') +
                (e.overlay === !0 || e.miniToOverlay === !0 ? ' q-drawer--on-top' : '') +
                (We.value === !0 ? ' q-drawer--top-padding' : '')),
        ),
        wt = f(() => {
          const n = r.lang.rtl === !0 ? e.side : ee.value;
          return [[Ce, qt, void 0, { [n]: !0, mouse: !0 }]];
        }),
        bt = f(() => {
          const n = r.lang.rtl === !0 ? ee.value : e.side;
          return [[Ce, Qe, void 0, { [n]: !0, mouse: !0 }]];
        }),
        gt = f(() => {
          const n = r.lang.rtl === !0 ? ee.value : e.side;
          return [[Ce, Qe, void 0, { [n]: !0, mouse: !0, mouseAllDir: !0 }]];
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
          ? ((w = b.value), b.value === !0 && $(!1))
          : e.overlay === !1 &&
            e.behavior !== 'mobile' &&
            w !== !1 &&
            (b.value === !0 ? (V(0), Q(0), pe()) : T(!1));
      }),
        x(
          () => e.side,
          (n, g) => {
            i.instances[g] === R &&
              ((i.instances[g] = void 0), (i[g].space = !1), (i[g].offset = 0)),
              (i.instances[n] = R),
              (i[n].size = _.value),
              (i[n].space = J.value),
              (i[n].offset = de.value);
          },
        ),
        x(i.totalWidth, () => {
          (i.isContainer.value === !0 || document.qScrollPrevented !== !0) && ve();
        }),
        x(() => e.behavior + e.breakpoint, ve),
        x(i.isContainer, (n) => {
          b.value === !0 && v(n !== !0), n === !0 && ve();
        }),
        x(i.scrollbarWidth, () => {
          V(b.value === !0 ? 0 : void 0);
        }),
        x(de, (n) => {
          P('offset', n);
        }),
        x(J, (n) => {
          a('onLayout', n), P('space', n);
        }),
        x(A, () => {
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
          () => r.lang.rtl,
          () => {
            V();
          },
        ),
        x(
          () => e.mini,
          () => {
            e.noMiniAnimation || (e.modelValue === !0 && (yt(), i.animate()));
          },
        ),
        x(L, (n) => {
          a('miniState', n);
        });
      function V(n) {
        n === void 0
          ? K(() => {
              (n = b.value === !0 ? 0 : _.value), V(I.value * n);
            })
          : (i.isContainer.value === !0 &&
              A.value === !0 &&
              (m.value === !0 || Math.abs(n) === _.value) &&
              (n += I.value * i.scrollbarWidth.value),
            (Ae.value = n));
      }
      function Q(n) {
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
        if (b.value !== !1) return;
        const g = _.value,
          B = le(n.distance.x, 0, g);
        if (n.isFinal === !0) {
          B >= Math.min(75, g) ? T() : (i.animate(), Q(0), V(I.value * g)), (X.value = !1);
          return;
        }
        V((r.lang.rtl === !0 ? A.value !== !0 : A.value) ? Math.max(g - B, 0) : Math.min(0, B - g)),
          Q(le(B / g, 0, 1)),
          n.isFirst === !0 && (X.value = !0);
      }
      function Qe(n) {
        if (b.value !== !0) return;
        const g = _.value,
          B = n.direction === e.side,
          he = (r.lang.rtl === !0 ? B !== !0 : B) ? le(n.distance.x, 0, g) : 0;
        if (n.isFinal === !0) {
          Math.abs(he) < Math.min(75, g) ? (i.animate(), Q(1), V(0)) : $(), (X.value = !1);
          return;
        }
        V(I.value * he), Q(le(1 - he / g, 0, 1)), n.isFirst === !0 && (X.value = !0);
      }
      function pe() {
        v(!1), fe(!0);
      }
      function P(n, g) {
        i.update(e.side, n, g);
      }
      function xt(n, g) {
        n.value !== g && (n.value = g);
      }
      function me(n, g) {
        P('size', n === !0 ? e.miniWidth : g);
      }
      return (
        (i.instances[e.side] = R),
        me(e.miniToOverlay, _.value),
        P('space', J.value),
        P('offset', de.value),
        e.showIfAbove === !0 &&
          e.modelValue !== !0 &&
          b.value === !0 &&
          e['onUpdate:modelValue'] !== void 0 &&
          a('update:modelValue', !0),
        Y(() => {
          a('onLayout', J.value), a('miniState', L.value), (w = e.showIfAbove === !0);
          const n = () => {
            (b.value === !0 ? h : y)(!1, !0);
          };
          if (i.totalWidth.value !== 0) {
            K(n);
            return;
          }
          p = x(i.totalWidth, () => {
            p(),
              (p = void 0),
              b.value === !1 && e.showIfAbove === !0 && m.value === !1 ? T(!1) : n();
          });
        }),
        D(() => {
          p?.(),
            q !== null && (clearTimeout(q), (q = null)),
            b.value === !0 && pe(),
            i.instances[e.side] === R &&
              ((i.instances[e.side] = void 0), P('size', 0), P('offset', 0), P('space', !1));
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
                  wt.value,
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
                  onClick: $,
                },
                void 0,
                'backdrop',
                e.noSwipeBackdrop !== !0 && b.value === !0,
                () => gt.value,
              ),
            ));
          const g = L.value === !0 && o.mini !== void 0,
            B = [
              k(
                'div',
                { ...l, key: '' + g, class: [mt.value, l.class] },
                g === !0 ? o.mini() : j(o.default),
              ),
            ];
          return (
            e.elevated === !0 &&
              b.value === !0 &&
              B.push(
                k('div', {
                  class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events',
                }),
              ),
            n.push(
              De(
                'aside',
                { ref: 'content', class: ht.value, style: pt.value },
                B,
                'contentclose',
                e.noSwipeClose !== !0 && m.value === !0,
                () => bt.value,
              ),
            ),
            k('div', { class: 'q-drawer-container' }, n)
          );
        }
      );
    },
  }),
  bo = H({
    name: 'QPageContainer',
    setup(e, { slots: o }) {
      const {
          proxy: { $q: a },
        } = M(),
        l = ze(ue, W);
      if (l === W) return console.error('QPageContainer needs to be child of QLayout'), W;
      rt(jt, !0);
      const t = f(() => {
        const r = {};
        return (
          l.header.space === !0 && (r.paddingTop = `${l.header.size}px`),
          l.right.space === !0 &&
            (r[`padding${a.lang.rtl === !0 ? 'Left' : 'Right'}`] = `${l.right.size}px`),
          l.footer.space === !0 && (r.paddingBottom = `${l.footer.size}px`),
          l.left.space === !0 &&
            (r[`padding${a.lang.rtl === !0 ? 'Right' : 'Left'}`] = `${l.left.size}px`),
          r
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
      scrollTarget: ao,
    },
    emits: ['scroll'],
    setup(e, { emit: o }) {
      const a = {
        position: { top: 0, left: 0 },
        direction: 'down',
        directionChanged: !1,
        delta: { top: 0, left: 0 },
        inflectionPoint: { top: 0, left: 0 },
      };
      let l = null,
        t,
        r;
      x(
        () => e.scrollTarget,
        () => {
          c(), v();
        },
      );
      function u() {
        l?.();
        const w = Math.max(0, it(t)),
          q = ut(t),
          p = { top: w - a.position.top, left: q - a.position.left };
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
        (a.position = { top: w, left: q }),
          (a.directionChanged = a.direction !== m),
          (a.delta = p),
          a.directionChanged === !0 && ((a.direction = m), (a.inflectionPoint = a.position)),
          o('scroll', { ...a });
      }
      function v() {
        (t = lo(r, e.scrollTarget)), t.addEventListener('scroll', d, et), d(!0);
      }
      function c() {
        t !== void 0 && (t.removeEventListener('scroll', d, et), (t = void 0));
      }
      function d(w) {
        if (w === !0 || e.debounce === 0 || e.debounce === '0') u();
        else if (l === null) {
          const [q, p] = e.debounce
            ? [setTimeout(u, e.debounce), clearTimeout]
            : [requestAnimationFrame(u), cancelAnimationFrame];
          l = () => {
            p(q), (l = null);
          };
        }
      }
      const { proxy: i } = M();
      return (
        x(() => i.$q.lang.rtl, u),
        Y(() => {
          (r = i.$el.parentNode), v();
        }),
        D(() => {
          l?.(), c();
        }),
        Object.assign(i, { trigger: d, getPosition: () => a }),
        Se
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
    setup(e, { slots: o, emit: a }) {
      const {
          proxy: { $q: l },
        } = M(),
        t = C(null),
        r = C(l.screen.height),
        u = C(e.container === !0 ? 0 : l.screen.width),
        v = C({ position: 0, direction: 'down', inflectionPoint: 0 }),
        c = C(0),
        d = C(at.value === !0 ? 0 : ye()),
        i = f(() => 'q-layout q-layout--' + (e.container === !0 ? 'containerized' : 'standard')),
        w = f(() => (e.container === !1 ? { minHeight: l.screen.height + 'px' } : null)),
        q = f(() =>
          d.value !== 0 ? { [l.lang.rtl === !0 ? 'left' : 'right']: `${d.value}px` } : null,
        ),
        p = f(() =>
          d.value !== 0
            ? {
                [l.lang.rtl === !0 ? 'right' : 'left']: 0,
                [l.lang.rtl === !0 ? 'left' : 'right']: `-${d.value}px`,
                width: `calc(100% + ${d.value}px)`,
              }
            : null,
        );
      function m(y) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const T = {
            position: y.position.top,
            direction: y.direction,
            directionChanged: y.directionChanged,
            inflectionPoint: y.inflectionPoint.top,
            delta: y.delta.top,
          };
          (v.value = T), e.onScroll !== void 0 && a('scroll', T);
        }
      }
      function L(y) {
        const { height: T, width: $ } = y;
        let z = !1;
        r.value !== T &&
          ((z = !0), (r.value = T), e.onScrollHeight !== void 0 && a('scrollHeight', T), b()),
          u.value !== $ && ((z = !0), (u.value = $)),
          z === !0 && e.onResize !== void 0 && a('resize', y);
      }
      function _({ height: y }) {
        c.value !== y && ((c.value = y), b());
      }
      function b() {
        if (e.container === !0) {
          const y = r.value > c.value ? ye() : 0;
          d.value !== y && (d.value = y);
        }
      }
      let s = null;
      const h = {
        instances: {},
        view: f(() => e.view),
        isContainer: f(() => e.container),
        rootRef: t,
        height: r,
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
        update(y, T, $) {
          h[y][T] = $;
        },
      };
      if ((rt(ue, h), ye() > 0)) {
        let y = function () {
            (z = null), U.classList.remove('hide-scrollbar');
          },
          T = function () {
            if (z === null) {
              if (U.scrollHeight > l.screen.height) return;
              U.classList.add('hide-scrollbar');
            } else clearTimeout(z);
            z = setTimeout(y, 300);
          },
          $ = function (R) {
            z !== null && R === 'remove' && (clearTimeout(z), y()),
              window[`${R}EventListener`]('resize', T);
          },
          z = null;
        const U = document.body;
        x(() => (e.container !== !0 ? 'add' : 'remove'), $),
          e.container !== !0 && $('add'),
          St(() => {
            $('remove');
          });
      }
      return () => {
        const y = It(o.default, [k(yo, { onScroll: m }), k(Ee, { onResize: L })]),
          T = k(
            'div',
            { class: i.value, style: w.value, ref: e.container === !0 ? void 0 : t, tabindex: -1 },
            y,
          );
        return e.container === !0
          ? k('div', { class: 'q-layout-container overflow-hidden', ref: t }, [
              k(Ee, { onResize: _ }),
              k('div', { class: 'absolute-full', style: q.value }, [
                k('div', { class: 'scroll', style: p.value }, [T]),
              ]),
            ])
          : T;
      };
    },
  }),
  tt = H({
    name: 'QItemSection',
    props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean },
    setup(e, { slots: o }) {
      const a = f(
        () =>
          `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? 'side' : 'main'}` +
          (e.top === !0 ? ' q-item__section--top justify-start' : ' justify-center') +
          (e.avatar === !0 ? ' q-item__section--avatar' : '') +
          (e.thumbnail === !0 ? ' q-item__section--thumbnail' : '') +
          (e.noWrap === !0 ? ' q-item__section--nowrap' : ''),
      );
      return () => k('div', { class: a.value }, j(o.default));
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
    setup(e, { slots: o, emit: a }) {
      const {
          proxy: { $q: l },
        } = M(),
        t = Oe(e, l),
        { hasLink: r, linkAttrs: u, linkClass: v, linkTag: c, navigateOnClick: d } = Ct(),
        i = C(null),
        w = C(null),
        q = f(() => e.clickable === !0 || r.value === !0 || e.tag === 'label'),
        p = f(() => e.disable !== !0 && q.value === !0),
        m = f(
          () =>
            'q-item q-item-type row no-wrap' +
            (e.dense === !0 ? ' q-item--dense' : '') +
            (t.value === !0 ? ' q-item--dark' : '') +
            (r.value === !0 && e.active === null
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
                ['padding' + (l.lang.rtl === !0 ? 'Right' : 'Left')]: 16 + e.insetLevel * 56 + 'px',
              },
        );
      function _(h) {
        p.value === !0 &&
          (w.value !== null &&
            h.qAvoidFocus !== !0 &&
            (h.qKeyEvent !== !0 && document.activeElement === i.value
              ? w.value.focus()
              : document.activeElement === w.value && i.value.focus()),
          d(h));
      }
      function b(h) {
        if (p.value === !0 && Ot(h, [13, 32]) === !0) {
          Ve(h), (h.qKeyEvent = !0);
          const y = new MouseEvent('click', h);
          (y.qKeyEvent = !0), i.value.dispatchEvent(y);
        }
        a('keyup', h);
      }
      function s() {
        const h = lt(o.default, []);
        return (
          p.value === !0 && h.unshift(k('div', { class: 'q-focus-helper', tabindex: -1, ref: w })),
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
          onKeyup: b,
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
      return (o, a) => (
        ne(),
        Le(
          xo,
          { clickable: '', tag: 'a', target: '_blank', href: o.link },
          {
            default: S(() => [
              o.icon
                ? (ne(),
                  Le(
                    tt,
                    { key: 0, avatar: '' },
                    { default: S(() => [E(Et, { name: o.icon }, null, 8, ['name'])]), _: 1 },
                  ))
                : Rt('', !0),
              E(tt, null, {
                default: S(() => [
                  E(Be, null, { default: S(() => [ie($e(o.title), 1)]), _: 1 }),
                  E(Be, { caption: '' }, { default: S(() => [ie($e(o.caption), 1)]), _: 1 }),
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
  To = ot({
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
        a = C(!1);
      function l() {
        a.value = !a.value;
      }
      return (t, r) => {
        const u = Bt('router-view');
        return (
          ne(),
          Le(
            qo,
            { view: 'lHh Lpr lFf' },
            {
              default: S(() => [
                E(
                  Ut,
                  { elevated: '' },
                  {
                    default: S(() => [
                      E(Yt, null, {
                        default: S(() => [
                          E(Lt, {
                            flat: '',
                            dense: '',
                            round: '',
                            icon: 'menu',
                            'aria-label': 'Menu',
                            onClick: l,
                          }),
                          E(Xt, null, {
                            default: S(() => r[1] || (r[1] = [ie(' Cavatech ')])),
                            _: 1,
                          }),
                          Ft('div', null, 'Quasar v' + $e(t.$q.version), 1),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                ),
                E(
                  wo,
                  {
                    modelValue: a.value,
                    'onUpdate:modelValue': r[0] || (r[0] = (v) => (a.value = v)),
                    'show-if-above': '',
                    bordered: '',
                  },
                  {
                    default: S(() => [
                      E(Zt, null, {
                        default: S(() => [
                          E(
                            Be,
                            { header: '' },
                            { default: S(() => r[2] || (r[2] = [ie(' Essential Links ')])), _: 1 },
                          ),
                          (ne(),
                          Mt(
                            At,
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
                E(bo, null, { default: S(() => [E(u)]), _: 1 }),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { To as default };
