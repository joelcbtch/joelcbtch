import { ab as c, as as f } from './index-ExIJm5nn.js';
function a(n, t) {
  return (n !== void 0 && n()) || t;
}
function d(n, t) {
  if (n !== void 0) {
    const o = n();
    if (o != null) return o.slice();
  }
  return t;
}
function l(n, t) {
  return n !== void 0 ? t.concat(n()) : t;
}
function v(n, t, o, u, i, e) {
  t.key = u + i;
  const r = c(n, t, o);
  return i === !0 ? f(r, e()) : r;
}
export { v as d, d as h, l as s, a as v };
