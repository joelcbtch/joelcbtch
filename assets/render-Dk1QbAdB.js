import { Y as c, aq as a } from './index-CfCsWGu_.js';
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
function s(n, r) {
  return n !== void 0 ? r.concat(n()) : r;
}
function d(n, r, i, o, t, u) {
  r.key = o + t;
  const e = c(n, r, i);
  return t === !0 ? a(e, u()) : e;
}
export { h as a, d as b, s as c, v as h };
