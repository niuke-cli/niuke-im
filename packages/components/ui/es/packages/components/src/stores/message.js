import { defineStore as s } from "../../../../node_modules/.pnpm/pinia@2.0.35_hmuptsblhheur2tugfgucj7gc4/node_modules/pinia/dist/pinia.js";
const e = s("message", {
  state: () => ({
    conversationList: [
      {
        lastMessage: {
          fromAccount: "",
          messageForShow: "",
          lastTime: ""
        }
      }
    ]
  }),
  actions: {
    async getConversationList() {
      let { data: t } = await window.$tim.getConversationList();
      this.conversationList = t.conversationList, console.log("conversationList", this.conversationList);
    }
  }
});
export {
  e as useMessageStore
};
