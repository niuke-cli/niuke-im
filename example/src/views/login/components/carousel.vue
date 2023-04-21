<template>
  <div style="background: linear-gradient(163.85deg,#1d2129 0%,#00308f 100%);" class="h-full">
    <n-carousel>
      <div v-for="(item, index) in tipsList" :key="index" class="flex flex-col justify-center items-center h-full">
        <div class="text-white text-ls font-bold">{{item.title}}</div>
        <div class="text-white text-sm">{{item.subtitle}}</div>
          <img class="w-2/3 mt-5" src="http://vue-pro.arco.design/assets/login-banner.426fb77f.png" alt="">
      </div>
    </n-carousel>
  </div>
</template>

<script lang="ts" setup>
const tipsList = [
    {
        title: '开箱即用的高质量模板',
        subtitle: '丰富的的页面模板，覆盖大多数典型业务场景',
    },
    {
        title: '内置了常见问题的解决方案',
        subtitle: '国际化，路由配置，状态管理应有尽有',
    }
]
</script>
