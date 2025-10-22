import {
  $ as u,
  g as x,
  h as i,
  O as v,
  s as b,
  M as y,
  t as p,
  m as r,
  k as c,
  K as _,
  A as d,
  w as h,
  _ as s,
  Z as l,
  x as C,
  I as P,
  J as $,
} from './index-CfCsWGu_.js';
import { h as F } from './render-DAqPa2vd-D0yqDhMx.js';
const H = b({
    name: 'QPage',
    props: { padding: Boolean, styleFn: Function },
    setup(a, { slots: t }) {
      const {
          proxy: { $q: n },
        } = y(),
        e = p(P, r);
      if (e === r) return console.error('QPage needs to be a deep child of QLayout'), r;
      if (p($, r) === r) return console.error('QPage needs to be child of QPageContainer'), r;
      const g = c(() => {
          const o =
            (e.header.space === !0 ? e.header.size : 0) +
            (e.footer.space === !0 ? e.footer.size : 0);
          if (typeof a.styleFn == 'function') {
            const f = e.isContainer.value === !0 ? e.containerHeight.value : n.screen.height;
            return a.styleFn(o, f);
          }
          return {
            minHeight:
              e.isContainer.value === !0
                ? e.containerHeight.value - o + 'px'
                : n.screen.height === 0
                  ? o !== 0
                    ? `calc(100vh - ${o}px)`
                    : '100vh'
                  : n.screen.height - o + 'px',
          };
        }),
        m = c(() => `q-page${a.padding === !0 ? ' q-layout-padding' : ''}`);
      return () => _('main', { class: m.value, style: g.value }, F(t.default));
    },
  }),
  Q = { class: 'example-wrapper' },
  k = { class: 'title-text' },
  q = { class: 'sub-title-text' },
  w = { class: 'tutorial' },
  K = { class: 'testing' },
  I = { class: 'str' },
  j = u({
    __name: 'ExampleComponent',
    props: { title: {}, subtitle: {}, tutorial: {}, str: {} },
    setup(a) {
      return (t, n) => (
        i(),
        h(
          C,
          null,
          [
            s('div', Q, [
              s('p', k, l(t.title), 1),
              s('p', q, l(t.subtitle), 1),
              s('p', w, l(t.tutorial), 1),
            ]),
            s('div', K, [s('p', I, l(t.str), 1)]),
          ],
          64,
        )
      );
    },
  }),
  z = { class: 'example-button' },
  A = { class: 'button-primary' },
  B = u({
    __name: 'ButtonComponent',
    props: { buttontext: {} },
    setup(a) {
      return (t, n) => (i(), h('div', z, [s('button', A, l(t.buttontext), 1)]));
    },
  }),
  O = u({
    __name: 'IndexPage',
    setup(a) {
      return (t, n) => (
        i(),
        x(
          H,
          { class: 'row items-center justify-evenly' },
          {
            default: v(() => [
              d(j, {
                title: 'Hello World',
                subtitle: 'Cavatech Tutorial',
                tutorial: 'tutorial',
                str: 'söp',
                active: '',
              }),
              d(B, { buttontext: 'Click here' }),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { O as default };
