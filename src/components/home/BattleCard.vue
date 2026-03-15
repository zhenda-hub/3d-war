<template>
  <article class="battle-card" @click="handleClick">
    <div class="card-image">
      <div class="card-frame"></div>
      <img :src="battle.cover" :alt="battle.name" loading="lazy">
      <div class="card-overlay">
        <span class="read-more">探索战役 →</span>
      </div>
    </div>
    <div class="card-content">
      <div class="card-era">{{ battle.year }}</div>
      <h3>{{ battle.name }}</h3>
      <p class="location">{{ battle.location }}</p>
      <p class="description">{{ battle.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Battle } from '@/data/battles'

interface Props {
  battle: Battle
}

const props = defineProps<Props>()

const emit = defineEmits<{
  click: [battle: Battle]
}>()

const handleClick = () => {
  emit('click', props.battle)
}
</script>
