import { defineComponent as c, openBlock as t, createElementBlock as n, Fragment as d, renderList as l, unref as _, createElementVNode as s, toDisplayString as a, pushScopeId as m, popScopeId as v } from "vue";
import { useMessageStore as p } from "../../stores/message.js";
const u = (e) => (m("data-v-2da61dd0"), e = e(), v(), e), g = { class: "conversation-list" }, h = /* @__PURE__ */ u(() => /* @__PURE__ */ s("img", {
  src: "https://web.sdk.qcloud.com/im/demo/TUIkit/web/img/constomer.svg",
  class: "conversation-avatar",
  alt: ""
}, null, -1)), f = { class: "conversation-info" }, S = { class: "conversation-name" }, k = { class: "conversation-message" }, w = { class: "conversation-time" }, I = c({
  name: "NKConversationList"
}), y = /* @__PURE__ */ c({
  ...I,
  setup(e) {
    const i = p();
    return (M, L) => (t(), n("div", g, [
      (t(!0), n(d, null, l(_(i).conversationList, (o, r) => (t(), n("div", {
        class: "conversation-item",
        key: r
      }, [
        h,
        s("div", f, [
          s("div", S, a(o.lastMessage.fromAccount), 1),
          s("div", k, a(o.lastMessage.messageForShow), 1)
        ]),
        s("div", w, a(o.lastMessage.lastTime), 1)
      ]))), 128))
    ]));
  }
});
export {
  y as default
};
