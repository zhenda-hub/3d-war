<template>
  <div class="battle-detail">
    <button @click="goBack" class="back-btn">
      <span class="icon">←</span> 返回列表
    </button>

    <BattleArticle v-if="battle" :battle="battle" />
    <ImageGallery v-if="battle" :images="battle.images" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getBattleById } from '@/data/battles'
import BattleArticle from '@/components/battle/BattleArticle.vue'
import ImageGallery from '@/components/battle/ImageGallery.vue'

const router = useRouter()
const route = useRoute()

const battle = computed(() => {
  const id = route.params.id as string
  return getBattleById(id)
})

const goBack = () => {
  router.push('/')
}
</script>
