import { defineComponent as c, openBlock as i, createElementBlock as d, createElementVNode as e, createVNode as s, pushScopeId as r, popScopeId as a } from "vue";
import _ from "./messageTool.vue.js";
import m from "./message.vue.js";
import { useImUserStore as p } from "../../stores/user.js";
const t = (o) => (r("data-v-468e0bb1"), o = o(), a(), o), l = { class: "conversation-window" }, v = /* @__PURE__ */ t(() => /* @__PURE__ */ e("div", { class: "conversation-window-name" }, "示例好友", -1)), w = { class: "conversation-window-content" }, f = { class: "conversation-window-message" }, h = /* @__PURE__ */ t(() => /* @__PURE__ */ e("div", { class: "send-message-btn" }, "发送", -1)), k = /* @__PURE__ */ c({
  __name: "index",
  setup(o) {
    const n = p();
    return console.log(n.userInfo), (u, g) => (i(), d("div", l, [
      v,
      e("div", w, [
        s(m)
      ]),
      e("div", f, [
        e("div", null, [
          s(_)
        ]),
        h
      ])
    ]));
  }
});
export {
  k as default
};
