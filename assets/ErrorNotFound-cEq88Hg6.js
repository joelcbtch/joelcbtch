import { d as o } from './QBtn-DAZ8B1vs.js';
import { bj as s, bt as l, bs as t, bo as r, bl as n } from './index-ExIJm5nn.js';
import './render-CZGCd43d.js';
const a = { class: 'fullscreen bg-blue text-white text-center q-pa-md flex flex-center' },
  u = s({
    __name: 'ErrorNotFound',
    setup(i) {
      return (c, e) => (
        n(),
        l('div', a, [
          t('div', null, [
            e[0] || (e[0] = t('div', { style: { 'font-size': '30vh' } }, ' 404 ', -1)),
            e[1] ||
              (e[1] = t(
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
export { u as default };
