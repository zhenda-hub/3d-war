<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from '@/components/layout/Navbar.vue'
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
  console.log('历史战役百科已加载 (Vite + Vue 3)')
})
</script>

<style>
/* 全局样式通过 CSS 导入 */
</style>
