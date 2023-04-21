<template>
    <div class="message">
        <div class="message-item" v-for="(item, index) in 100" :key="index">
            <div class="message-time" v-if="item % 3 === 1">
                刚刚
            </div>
            <div class="message-left" v-if="item > 3">
                <img
                    src="https://web.sdk.qcloud.com/im/demo/TUIkit/web/img/constomer.svg"
                    class="conversation-avatar"
                    alt=""
                />
                <div class="message-text message-text-left">房间看施劳德拉夫</div>
            </div>
            <div class="message-right"  v-else-if="item < 3">
                <div class="message-text message-text-right">房间看施劳德拉夫</div>
                <img
                    src="https://web.sdk.qcloud.com/im/demo/TUIkit/web/img/constomer.svg"
                    class="conversation-avatar"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
console.log(1);
</script>

<style scoped lang="scss">
.message {
}
.message-item {
    margin: 15px;
}

.message-time {
    text-align: center;
    font-size: 13px;
    color: #C0C0C0F4;
    margin-bottom: 10px;
}

.message-left {
    display: flex;
    align-items: start;
}
.message-right {
    display: flex;
    align-items: start;
    justify-content: flex-end;
}
.conversation-avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    margin: 0 5px;
}

.message-text {
    background: #dceafd;
    color: black;
    padding: 8px;
    &-left {
        border-radius:0 10px 10px 10px;
    }
    &-right {
        border-radius: 10px 0 10px 10px;
    }
}
</style>
