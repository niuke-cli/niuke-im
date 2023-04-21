<script lang="ts" setup>
import Carousel from "./components/carousel.vue";
import Login from "./components/login.vue";
</script>

<template>
  <div class="flex h-screen">
    <div class="hidden h-full w-96 md:block">
      <Carousel />
    </div>
    <div class="flex items-center justify-center flex-1">
      <Login />
    </div>
  </div>
</template>



<style scoped lang="scss"></style>
