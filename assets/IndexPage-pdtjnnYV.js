import {
  c as f,
  g as y,
  f as o,
  a as u,
  h as v,
  e as p,
  j as C,
  D as x,
  I as c,
  T as d,
  K as l,
  S as s,
  Q as i,
  U as b,
  J as $,
  L as Q,
  N as _,
} from './index-DH-D3uAp.js';
import { h as B } from './render-DAqPa2vd.js';
const F = f({
    name: 'QPage',
    props: { padding: Boolean, styleFn: Function },
    setup(a, { slots: e }) {
      const {
          proxy: { $q: n },
        } = y(),
        t = p(C, o);
      if (t === o) return console.error('QPage needs to be a deep child of QLayout'), o;
      if (p(x, o) === o) return console.error('QPage needs to be child of QPageContainer'), o;
      const h = u(() => {
          const r =
            (t.header.space === !0 ? t.header.size : 0) +
            (t.footer.space === !0 ? t.footer.size : 0);
          if (typeof a.styleFn == 'function') {
            const g = t.isContainer.value === !0 ? t.containerHeight.value : n.screen.height;
            return a.styleFn(r, g);
          }
          return {
            minHeight:
              t.isContainer.value === !0
                ? t.containerHeight.value - r + 'px'
                : n.screen.height === 0
                  ? r !== 0
                    ? `calc(100vh - ${r}px)`
                    : '100vh'
                  : n.screen.height - r + 'px',
          };
        }),
        m = u(() => `q-page${a.padding === !0 ? ' q-layout-padding' : ''}`);
      return () => v('main', { class: m.value, style: h.value }, B(e.default));
    },
  }),
  P = { class: 'example-wrapper' },
  k = { class: 'title-text' },
  H = { class: 'sub-title-text' },
  j = { class: 'tutorial' },
  q = { class: 'testing' },
  w = { class: 'str' },
  I = c({
    __name: 'ExampleComponent',
    props: { title: {}, subtitle: {}, tutorial: {}, str: {} },
    setup(a) {
      return (e, n) => (
        l(),
        d(
          b,
          null,
          [
            s('div', P, [
              s('p', k, i(e.title), 1),
              s('p', H, i(e.subtitle), 1),
              s('p', j, i(e.tutorial), 1),
            ]),
            s('div', q, [s('p', w, i(e.str), 1)]),
          ],
          64,
        )
      );
    },
  }),
  K = { class: 'example-button' },
  N = { class: 'button-primary' },
  S = c({
    __name: 'ButtonComponent',
    props: { buttontext: {} },
    setup(a) {
      return (e, n) => (l(), d('div', K, [s('button', N, i(e.buttontext), 1)]));
    },
  }),
  L = c({
    __name: 'IndexPage',
    setup(a) {
      return (e, n) => (
        l(),
        $(
          F,
          { class: 'row items-center justify-evenly' },
          {
            default: Q(() => [
              _(I, {
                title: 'Hello World',
                subtitle: 'Cavatech Tutorial',
                tutorial: 'tutorial',
                str: 'söp',
                active: '',
              }),
              _(S, { buttontext: 'Click here' }),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { L as default };
