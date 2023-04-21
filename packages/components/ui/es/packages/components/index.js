import e from "./src/index.js";
import { default as f } from "./src/button/index.js";
import { default as i } from "./src/conversation-list/index.js";
import { default as u } from "./src/conversation-window/index.js";
import { useImUserStore as l } from "./src/stores/user.js";
const s = {
  // @ts-ignore
  install: (o) => e.forEach((t) => o.use(t))
};
export {
  f as NKButton,
  i as NKConversationList,
  u as NKConversationWindow,
  s as default,
  l as useImUserStore
};
