import { n as o } from './QBtn-DYb13IGb-DVwM0Orh-B0Tu2nkY.js';
import { X as s, r as l, Q as r, t as e, l as a } from './index-ExIJm5nn.js';
import './render-DAqPa2vd-D0yqDhMx-4SFXGzvt.js';
const n = { class: 'fullscreen bg-blue text-white text-center q-pa-md flex flex-center' },
  p = s({
    __name: 'ErrorNotFound',
    setup(i) {
      return (c, t) => (
        r(),
        l('div', n, [
          e('div', null, [
            t[0] || (t[0] = e('div', { style: { 'font-size': '30vh' } }, ' 404 ', -1)),
            t[1] ||
              (t[1] = e(
                'div',
                { class: 'text-h2', style: { opacity: '.4' } },
                ' Oops. Nothing here... ',
                -1,
              )),
            a(o, {
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
