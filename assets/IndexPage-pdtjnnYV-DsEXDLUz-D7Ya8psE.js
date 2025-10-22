import {
  X as i,
  Z as v,
  Q as u,
  a as x,
  M as b,
  b as y,
  f as p,
  z as r,
  g as c,
  n as Q,
  l as d,
  r as g,
  t as s,
  o as l,
  s as C,
  V as _,
  W as z,
} from './index-ExIJm5nn.js';
import { a as H } from './render-DAqPa2vd-D0yqDhMx-4SFXGzvt.js';
const P = b({
    name: 'QPage',
    props: { padding: Boolean, styleFn: Function },
    setup(a, { slots: t }) {
      const {
          proxy: { $q: n },
        } = y(),
        e = p(_, r);
      if (e === r) return console.error('QPage needs to be a deep child of QLayout'), r;
      if (p(z, r) === r) return console.error('QPage needs to be child of QPageContainer'), r;
      const f = c(() => {
          const o =
            (e.header.space === !0 ? e.header.size : 0) +
            (e.footer.space === !0 ? e.footer.size : 0);
          if (typeof a.styleFn == 'function') {
            const m = e.isContainer.value === !0 ? e.containerHeight.value : n.screen.height;
            return a.styleFn(o, m);
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
        h = c(() => `q-page${a.padding === !0 ? ' q-layout-padding' : ''}`);
      return () => Q('main', { class: h.value, style: f.value }, H(t.default));
    },
  }),
  q = { class: 'example-wrapper' },
  w = { class: 'title-text' },
  F = { class: 'sub-title-text' },
  k = { class: 'tutorial' },
  B = { class: 'testing' },
  W = { class: 'str' },
  X = i({
    __name: 'ExampleComponent',
    props: { title: {}, subtitle: {}, tutorial: {}, str: {} },
    setup(a) {
      return (t, n) => (
        u(),
        g(
          C,
          null,
          [
            s('div', q, [
              s('p', w, l(t.title), 1),
              s('p', F, l(t.subtitle), 1),
              s('p', k, l(t.tutorial), 1),
            ]),
            s('div', B, [s('p', W, l(t.str), 1)]),
          ],
          64,
        )
      );
    },
  }),
  Z = { class: 'example-button' },
  j = { class: 'button-primary' },
  I = i({
    __name: 'ButtonComponent',
    props: { buttontext: {} },
    setup(a) {
      return (t, n) => (u(), g('div', Z, [s('button', j, l(t.buttontext), 1)]));
    },
  }),
  V = i({
    __name: 'IndexPage',
    setup(a) {
      return (t, n) => (
        u(),
        v(
          P,
          { class: 'row items-center justify-evenly' },
          {
            default: x(() => [
              d(X, {
                title: 'Hello World',
                subtitle: 'Cavatech Tutorial',
                tutorial: 'tutorial',
                str: 'söp',
                active: '',
              }),
              d(I, { buttontext: 'Click here' }),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { V as default };
