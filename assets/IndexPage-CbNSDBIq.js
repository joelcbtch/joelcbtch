import {
  U as f,
  a3 as y,
  a9 as o,
  V as u,
  Y as v,
  a8 as p,
  ab as x,
  as as C,
  aw as c,
  aG as d,
  ay as l,
  aF as a,
  aD as i,
  aH as b,
  ax as $,
  az as B,
  aB as _,
} from './index-CfCsWGu_.js';
import { h as F } from './render-Dk1QbAdB.js';
const P = f({
    name: 'QPage',
    props: { padding: Boolean, styleFn: Function },
    setup(s, { slots: e }) {
      const {
          proxy: { $q: n },
        } = y(),
        t = p(x, o);
      if (t === o) return console.error('QPage needs to be a deep child of QLayout'), o;
      if (p(C, o) === o) return console.error('QPage needs to be child of QPageContainer'), o;
      const h = u(() => {
          const r =
            (t.header.space === !0 ? t.header.size : 0) +
            (t.footer.space === !0 ? t.footer.size : 0);
          if (typeof s.styleFn == 'function') {
            const g = t.isContainer.value === !0 ? t.containerHeight.value : n.screen.height;
            return s.styleFn(r, g);
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
        m = u(() => `q-page${s.padding === !0 ? ' q-layout-padding' : ''}`);
      return () => v('main', { class: m.value, style: h.value }, F(e.default));
    },
  }),
  Q = { class: 'example-wrapper' },
  H = { class: 'title-text' },
  k = { class: 'sub-title-text' },
  w = { class: 'tutorial' },
  q = { class: 'testing' },
  z = { class: 'str' },
  V = c({
    __name: 'ExampleComponent',
    props: { title: {}, subtitle: {}, tutorial: {}, str: {} },
    setup(s) {
      return (e, n) => (
        l(),
        d(
          b,
          null,
          [
            a('div', Q, [
              a('p', H, i(e.title), 1),
              a('p', k, i(e.subtitle), 1),
              a('p', w, i(e.tutorial), 1),
            ]),
            a('div', q, [a('p', z, i(e.str), 1)]),
          ],
          64,
        )
      );
    },
  }),
  j = { class: 'example-button' },
  D = { class: 'button-primary' },
  E = c({
    __name: 'ButtonComponent',
    props: { buttontext: {} },
    setup(s) {
      return (e, n) => (l(), d('div', j, [a('button', D, i(e.buttontext), 1)]));
    },
  }),
  S = c({
    __name: 'IndexPage',
    setup(s) {
      return (e, n) => (
        l(),
        $(
          P,
          { class: 'row items-center justify-evenly' },
          {
            default: B(() => [
              _(V, {
                title: 'Hello World',
                subtitle: 'Cavatech Tutorial',
                tutorial: 'tutorial',
                str: 'söp',
                active: '',
              }),
              _(E, { buttontext: 'Click here' }),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { S as default };
