"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("./src/index.js"),u=require("./src/button/index.js"),n=require("./src/conversation-list/index.js"),o=require("./src/conversation-window/index.js"),s=require("./src/stores/user.js"),i={install:e=>r.default.forEach(t=>e.use(t))};exports.NKButton=u.default;exports.NKConversationList=n.default;exports.NKConversationWindow=o.default;exports.useImUserStore=s.useImUserStore;exports.default=i;
