<template>
  <div class="battle-list">
    <HeroSection />

    <main class="cards">
      <BattleCard
        v-for="battle in battles"
        :key="battle.id"
        :battle="battle"
        @click="goToBattle"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { battles } from '@/data/battles'
import HeroSection from '@/components/home/HeroSection.vue'
import BattleCard from '@/components/home/BattleCard.vue'

const router = useRouter()

const goToBattle = (battle: typeof battles[0]) => {
  router.push(`/battle/${battle.id}`)
}
</script>
