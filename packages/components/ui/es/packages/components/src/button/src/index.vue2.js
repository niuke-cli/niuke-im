import { defineComponent as t, computed as r, openBlock as u, createElementBlock as a, normalizeClass as l, unref as p, renderSlot as c } from "vue";
const d = t({
  name: "NKButton"
}), _ = /* @__PURE__ */ t({
  ...d,
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const o = e, n = r(() => `button-${o.type}`);
    return (s, f) => (u(), a("button", {
      class: l(["button", p(n)])
    }, [
      c(s.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
export {
  _ as default
};
