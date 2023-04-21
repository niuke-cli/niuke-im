<template>
    <div class="flex h-screen">
        <div class="hidden h-full w-96 md:block overflow-y-auto border-r border-gray-200">
            <NKConversationList />
        </div>
        <div class="flex items-center justify-center flex-1">
            <NKConversationWindow />
        </div>
    </div>

</template>

<script lang="ts" setup>
import { NKConversationList, NKConversationWindow } from 'niuke-im/index.js'
</script>

<style scoped lang="scss"></style>
