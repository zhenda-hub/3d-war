<template>
  <div v-if="images && images.length > 0" class="image-gallery">
    <h2>战役图集</h2>
    <div class="gallery-grid">
      <figure v-for="(img, index) in images" :key="index" class="gallery-item">
        <div class="gallery-frame"></div>
        <img :src="img.src" :alt="img.caption" loading="lazy">
        <figcaption>{{ img.caption }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BattleImage } from '@/data/battles'

interface Props {
  images: BattleImage[]
}

defineProps<Props>()
</script>
