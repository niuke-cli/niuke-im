<template>
  <div class="conversation-window">
    <div class="conversation-window-name">示例好友</div>
    <div class="conversation-window-content">
        <Message />
    </div>
    <div class="conversation-window-message">
      <div><MessageTool /></div>
<!--      <input class="send-message-input" autofocus />-->
      <div class="send-message-btn">发送</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MessageTool from "./messageTool.vue";
import Message from "./message.vue";
import { useImUserStore } from '../../stores/user'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const imUser = useImUserStore()
console.log(imUser.userInfo);
</script>

<style scoped lang="scss">
.conversation-window {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
.conversation-window-name {
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid rgb(229 231 235);
}
.conversation-window-content {
  flex: 1;
  overflow-y: auto;
}
.conversation-window-message {
  position: relative;
  width: 100%;
  height: 200px;
  border-top: 1px solid rgb(229 231 235);
  padding: 10px;
}

@media (max-width: 400px){
  .conversation-window-message {
    height: 80px;
  }
}

.send-message-input {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  margin-top: 5px;
}

.send-message-btn {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 8px 20px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  font-weight: 400;
  background: #006eff;
  color: #fff;
  letter-spacing: 0;
  cursor: pointer;
}
</style>
