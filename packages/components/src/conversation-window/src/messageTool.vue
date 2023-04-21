<template>
    <div class="message-tools">
        <div class="message-tools-item">表情</div>
        <div class="message-tools-item">图片</div>
        <div class="message-tools-item">视频</div>
        <div class="message-tools-item">文件</div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.message-tools {
  display: flex;
  align-items: center;
}
.message-tools-item {
  font-size: 13px;
  cursor: pointer;
  margin-right: 10px;
}
</style>
