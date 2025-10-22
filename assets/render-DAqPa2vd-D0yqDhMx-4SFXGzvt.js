import { n as e, R as f } from './index-ExIJm5nn.js';
function s(n, r) {
  return (n !== void 0 && n()) || r;
}
function a(n, r) {
  if (n !== void 0) {
    const o = n();
    if (o != null) return o.slice();
  }
  return r;
}
function d(n, r) {
  return n !== void 0 ? r.concat(n()) : r;
}
function v(n, r, o, i, t, c) {
  r.key = i + t;
  const u = e(n, r, o);
  return t === !0 ? f(u, c()) : u;
}
export { s as a, a as d, d as l, v };
