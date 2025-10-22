import { aO as c, bd as a } from './index-ExIJm5nn.js';
function v(n, r) {
  return (n !== void 0 && n()) || r;
}
function h(n, r) {
  if (n !== void 0) {
    const i = n();
    if (i != null) return i.slice();
  }
  return r;
}
function d(n, r) {
  return n !== void 0 ? r.concat(n()) : r;
}
function s(n, r, i, o, t, u) {
  r.key = o + t;
  const e = c(n, r, i);
  return t === !0 ? a(e, u()) : e;
}
export { h as a, s as b, d as c, v as h };
