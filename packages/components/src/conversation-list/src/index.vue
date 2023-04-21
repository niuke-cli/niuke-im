<template>
  <div class="conversation-list">
    <div class="conversation-item" v-for="(item, index) in messageStore.conversationList" :key="index">
      <img
        src="https://web.sdk.qcloud.com/im/demo/TUIkit/web/img/constomer.svg"
        class="conversation-avatar"
        alt=""
      />
      <div class="conversation-info">
        <div class="conversation-name">{{ item.lastMessage.fromAccount }}</div>
        <div class="conversation-message">{{ item.lastMessage.messageForShow }}</div>
      </div>
      <div class="conversation-time">{{ item.lastMessage.lastTime }}</div>
    </div>
  </div>
</template>

<script lang="ts" name="NKConversationList" setup>
import { useMessageStore} from "../../stores/message";
const messageStore = useMessageStore()
</script>

<style scoped lang="scss">
.conversation-item {
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.conversation-item:hover {
  background: rgba(0, 110, 255, 0.1);
}
.conversation-avatar {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 5px;
}
.conversation-info {
  flex: 1;
  .conversation-name {
    font-weight: bold;
  }
  .conversation-message {
    font-size: 12px;
    color: #bdbdbd;
  }
}
.conversation-time {
  font-size: 12px;
  color: #d5d5d5;
}
</style>
