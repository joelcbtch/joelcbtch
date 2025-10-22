import {
  aM as b,
  aS as f,
  aY as o,
  aN as u,
  aO as y,
  aX as p,
  a_ as v,
  bf as C,
  bj as c,
  bt as d,
  bl as l,
  bs as s,
  bq as i,
  bu as x,
  bk as $,
  bm as B,
  bo as _,
} from './index-ExIJm5nn.js';
import { h as F } from './render-CZGCd43d.js';
const P = b({
    name: 'QPage',
    props: { padding: Boolean, styleFn: Function },
    setup(a, { slots: e }) {
      const {
          proxy: { $q: n },
        } = f(),
        t = p(v, o);
      if (t === o) return console.error('QPage needs to be a deep child of QLayout'), o;
      if (p(C, o) === o) return console.error('QPage needs to be child of QPageContainer'), o;
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
      return () => y('main', { class: m.value, style: h.value }, F(e.default));
    },
  }),
  Q = { class: 'example-wrapper' },
  k = { class: 'title-text' },
  q = { class: 'sub-title-text' },
  H = { class: 'tutorial' },
  j = { class: 'testing' },
  w = { class: 'str' },
  N = c({
    __name: 'ExampleComponent',
    props: { title: {}, subtitle: {}, tutorial: {}, str: {} },
    setup(a) {
      return (e, n) => (
        l(),
        d(
          x,
          null,
          [
            s('div', Q, [
              s('p', k, i(e.title), 1),
              s('p', q, i(e.subtitle), 1),
              s('p', H, i(e.tutorial), 1),
            ]),
            s('div', j, [s('p', w, i(e.str), 1)]),
          ],
          64,
        )
      );
    },
  }),
  S = { class: 'example-button-class' },
  z = { class: 'button-primary' },
  E = c({
    __name: 'ButtonComponent',
    props: { buttontext: {} },
    setup(a) {
      return (e, n) => (l(), d('div', S, [s('button', z, i(e.buttontext), 1)]));
    },
  }),
  D = c({
    __name: 'IndexPage',
    setup(a) {
      return (e, n) => (
        l(),
        $(
          P,
          { class: 'row items-center justify-evenly' },
          {
            default: B(() => [
              _(N, {
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
export { D as default };
