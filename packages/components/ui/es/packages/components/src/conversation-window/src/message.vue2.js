import { defineComponent as d, openBlock as e, createElementBlock as s, Fragment as m, renderList as _, createElementVNode as t, createCommentVNode as i, pushScopeId as l, popScopeId as r } from "vue";
const c = (o) => (l("data-v-37e38f2a"), o = o(), r(), o), g = { class: "message" }, h = {
  key: 0,
  class: "message-time"
}, p = {
  key: 1,
  class: "message-left"
}, v = /* @__PURE__ */ c(() => /* @__PURE__ */ t("img", {
  src: "https://web.sdk.qcloud.com/im/demo/TUIkit/web/img/constomer.svg",
  class: "conversation-avatar",
  alt: ""
}, null, -1)), u = /* @__PURE__ */ c(() => /* @__PURE__ */ t("div", { class: "message-text message-text-left" }, "房间看施劳德拉夫", -1)), k = [
  v,
  u
], f = {
  key: 2,
  class: "message-right"
}, x = /* @__PURE__ */ c(() => /* @__PURE__ */ t("div", { class: "message-text message-text-right" }, "房间看施劳德拉夫", -1)), w = /* @__PURE__ */ c(() => /* @__PURE__ */ t("img", {
  src: "https://web.sdk.qcloud.com/im/demo/TUIkit/web/img/constomer.svg",
  class: "conversation-avatar",
  alt: ""
}, null, -1)), I = [
  x,
  w
], q = /* @__PURE__ */ d({
  __name: "message",
  setup(o) {
    return console.log(1), (b, y) => (e(), s("div", g, [
      (e(), s(m, null, _(100, (a, n) => t("div", {
        class: "message-item",
        key: n
      }, [
        a % 3 === 1 ? (e(), s("div", h, " 刚刚 ")) : i("", !0),
        a > 3 ? (e(), s("div", p, k)) : a < 3 ? (e(), s("div", f, I)) : i("", !0)
      ])), 64))
    ]));
  }
});
export {
  q as default
};
