<template>
  <div class="w-80">
    <div class="text-2xl font-bold text-black">登录NIUKE-IM</div>
    <div class="text-gray-500 text-ls">登录NIUKE-IM</div>
    <n-form ref="formRef" :model="model" class="mt-5" label-placement="left">
      <n-form-item path="age">
        <n-input v-model:value="model.age" placeholder="用户名" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password">
        <n-input
          v-model:value="model.password"
          placeholder="密码"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item>
        <div class="flex items-center justify-between w-full">
          <n-checkbox v-model:checked="model.remember"> 记住密码</n-checkbox>
            <div class="cursor-pointer" >
                忘记密码
            </div>
        </div>
      </n-form-item>
      <n-form-item>
          <n-button @click="imLogin" class="w-full" type="primary">
              登录
          </n-button>
      </n-form-item>
      <n-form-item >
          <div class="cursor-pointer my-0 mx-auto">
              注册账户
          </div>
      </n-form-item>

    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { useImUserStore } from 'niuke-im/index.js'
import {useRouter} from "vue-router";
const model = ref({
  age: '',
  password: '',
  remember: true
})

const router = useRouter()
const imLogin = async () => {
    const { code } = await useImUserStore().login('272923', "eJwtzMsOgjAQheF36dqQ6WhLS*ICNkKiuPCycEdsMaMRKhLwEt9dlC7Pd5L-zbbLTdDZhkUMA2CT-yZjq5ZKGjlEjVP-3M2lcI4Mi-gMgHOFCONjH44aO7gQAgG8tnT9mVRca5AofIVOQ7jPZU2iWthU7TPVxLnanW-8uDZFl7jnq*wPWVIDD1NczdnnC8QHMGk_")
    console.log(code);
    if (code == 0) {
        router.push('/')
    }
    console.log('用户登录', );
}
</script>

<style lang="scss" scoped></style>
