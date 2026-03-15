<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-logo" @click="handleLogoClick">
        <span class="logo-icon">⚔</span>
        <span class="logo-text">历史战役百科</span>
      </router-link>

      <div style="display: flex; align-items: center; gap: var(--spacing-sm);">
        <ThemeSwitcher />

        <button
          @click="toggleNavMenu"
          class="nav-toggle"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul :class="['nav-menu', { 'nav-menu-open': navMenuOpen }]">
        <li v-for="battle in battles" :key="battle.id">
          <router-link
            :to="`/battle/${battle.id}`"
            :class="{ 'active': isActive(battle.id) }"
            @click="closeNavMenu"
          >
            {{ battle.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { battles } from '@/data/battles'
import ThemeSwitcher from './ThemeSwitcher.vue'

const route = useRoute()
const navMenuOpen = ref(false)

const isActive = (battleId: string) => {
  return route.name === 'battle' && route.params.id === battleId
}

const toggleNavMenu = () => {
  navMenuOpen.value = !navMenuOpen.value
}

const closeNavMenu = () => {
  navMenuOpen.value = false
}

const handleLogoClick = () => {
  closeNavMenu()
}
</script>
