import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
  state: () => ({
    conversationList: [
      {
        lastMessage: {
          fromAccount: "",
          messageForShow: "",
          lastTime: "",
        },
      },
    ],
  }),
  actions: {
    async getConversationList() {
      // 获取全量的会话列表
      // @ts-ignore
      let { data } = await window.$tim.getConversationList();
      this.conversationList = data.conversationList;
      console.log("conversationList", this.conversationList);
    },
  },
});
