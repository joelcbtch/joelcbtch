import { n as o } from './QBtn-Cy2OY3F3-BCpda_Hn.js';
import { S as a, az as s, a1 as l, aw as e, av as r } from './index-ExIJm5nn.js';
import './render-Dk1QbAdB-Duum6jXv.js';
const n = { class: 'fullscreen bg-blue text-white text-center q-pa-md flex flex-center' },
  p = a({
    __name: 'ErrorNotFound',
    setup(i) {
      return (c, t) => (
        l(),
        s('div', n, [
          e('div', null, [
            t[0] || (t[0] = e('div', { style: { 'font-size': '30vh' } }, ' 404 ', -1)),
            t[1] ||
              (t[1] = e(
                'div',
                { class: 'text-h2', style: { opacity: '.4' } },
                ' Oops. Nothing here... ',
                -1,
              )),
            r(o, {
              class: 'q-mt-xl',
              color: 'white',
              'text-color': 'blue',
              unelevated: '',
              to: '/',
              label: 'Go Home',
              'no-caps': '',
            }),
          ]),
        ])
      );
    },
  });
export { p as default };
