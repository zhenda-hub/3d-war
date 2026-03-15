<template>
  <article class="battle-article">
    <header class="article-header">
      <div class="article-decoration"></div>
      <h1>{{ battle.name }}</h1>
      <p class="article-meta">
        <span class="year">{{ battle.year }}</span>
        <span class="location">{{ battle.location }}</span>
      </p>
    </header>

    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>加载中...</p>
    </div>

    <div v-else class="article-content" v-html="renderedContent"></div>
  </article>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import type { Battle } from '@/data/battles'
import { useBattle } from '@/composables/useBattle'

interface Props {
  battle: Battle
}

const props = defineProps<Props>()

const { renderedContent, loading, loadBattle } = useBattle()

onMounted(() => {
  loadBattle(props.battle)
})
</script>
