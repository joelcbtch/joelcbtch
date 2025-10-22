import { d as o } from './QBtn-Cy2OY3F3.js';
import { aw as s, aG as a, aF as t, aB as l, ay as r } from './index-CfCsWGu_.js';
import './render-Dk1QbAdB.js';
const n = { class: 'fullscreen bg-blue text-white text-center q-pa-md flex flex-center' },
  u = s({
    __name: 'ErrorNotFound',
    setup(i) {
      return (c, e) => (
        r(),
        a('div', n, [
          t('div', null, [
            e[0] || (e[0] = t('div', { style: { 'font-size': '30vh' } }, ' 404 ', -1)),
            e[1] ||
              (e[1] = t(
                'div',
                { class: 'text-h2', style: { opacity: '.4' } },
                ' Oops. Nothing here... ',
                -1,
              )),
            l(o, {
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
export { u as default };
