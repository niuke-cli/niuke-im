import t from "../../../../node_modules/.pnpm/tim-js-sdk@2.27.0/node_modules/tim-js-sdk/tim-js.js";
import { useMessageStore as c } from "../stores/message.js";
let l = {
  SDKAppID: 1400118220
  // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
}, e = t.create(l);
const i = sessionStorage.getItem("userID") || "", d = sessionStorage.getItem("userSig") || "";
i && d && e.login({
  userID: i,
  userSig: d
});
window.$tim = e;
e.setLogLevel(1);
let r = async function(o) {
  let n = e.createTextMessage({
    to: "user1",
    conversationType: "C2C",
    payload: { text: "Hello world!" }
  });
  e.sendMessage(n), c().getConversationList();
};
e.on(t.EVENT.SDK_READY, r);
let D = function(o) {
};
e.on(t.EVENT.SDK_NOT_READY, D);
let u = function(o) {
};
e.on(t.EVENT.MESSAGE_RECEIVED, u);
let I = function(o) {
};
e.on(t.EVENT.MESSAGE_MODIFIED, I);
let g = function(o) {
};
e.on(t.EVENT.MESSAGE_REVOKED, g);
let p = function(o) {
};
e.on(t.EVENT.MESSAGE_READ_BY_PEER, p);
let _ = function(o) {
  o.data.forEach((a) => {
    const { groupID: E, messageID: T, readCount: G, unreadCount: y } = a, s = e.findMessage(T);
    s && s.readReceiptInfo.unreadCount;
  });
};
e.on(t.EVENT.MESSAGE_READ_RECEIPT_RECEIVED, _);
let S = function(o) {
  console.log("Conversation", o.data);
};
e.on(t.EVENT.CONVERSATION_LIST_UPDATED, S);
let N = function(o) {
  console.log(o.data);
};
e.on(t.EVENT.GROUP_LIST_UPDATED, N);
let f = function(o) {
  o.data.groupID, o.data.groupAttributes, console.log(o.data);
};
e.on(t.EVENT.GROUP_ATTRIBUTES_UPDATED, f);
let A = function(o) {
  o.data.groupID, o.data.topicID, console.log(o.data);
};
e.on(t.EVENT.TOPIC_CREATED, A);
let R = function(o) {
  o.data.groupID, o.data.topicIDList, console.log(o.data);
};
e.on(t.EVENT.TOPIC_DELETED, R);
let P = function(o) {
  o.data.groupID, o.data.topic, console.log(o.data);
};
e.on(t.EVENT.TOPIC_UPDATED, P);
let C = function(o) {
  console.log(o.data);
};
e.on(t.EVENT.PROFILE_UPDATED, C);
let L = function(o) {
  console.log(o.data);
};
e.on(t.EVENT.BLACKLIST_UPDATED, L);
let V = function(o) {
  console.log(o.data);
};
e.on(t.EVENT.FRIEND_LIST_UPDATED, V);
let U = function(o) {
  console.log(o.data);
};
e.on(t.EVENT.FRIEND_GROUP_LIST_UPDATED, U);
let M = function(o) {
  const { friendApplicationList: n, unreadCount: a } = o.data;
  n.filter(
    (E) => E.type === t.TYPES.SNS_APPLICATION_SENT_TO_ME
  ), n.filter(
    (E) => E.type === t.TYPES.SNS_APPLICATION_SENT_BY_ME
  );
};
e.on(
  t.EVENT.FRIEND_APPLICATION_LIST_UPDATED,
  M
);
let O = function(o) {
  console.log(o.data.type);
};
e.on(t.EVENT.KICKED_OUT, O);
let m = function(o) {
};
e.on(t.EVENT.NET_STATE_CHANGE, m);
