<template>
  <div class="theme-switcher">
    <button
      @click="toggleThemePanel"
      class="theme-toggle-btn"
      :title="currentThemeName"
    >
      <span class="theme-icon">{{ currentThemeIcon }}</span>
      <span class="theme-label">主题</span>
    </button>
  </div>

  <div
    :class="['theme-panel-backdrop', { 'active': themePanelOpen }]"
    @click="closeThemePanel"
  ></div>

  <div :class="['theme-panel', { 'active': themePanelOpen }]">
    <div class="theme-panel-header">
      <h3 class="theme-panel-title">选择主题风格</h3>
      <button @click="closeThemePanel" class="theme-panel-close">✕</button>
    </div>
    <div class="theme-grid">
      <div
        v-for="theme in themes"
        :key="theme.id"
        :class="['theme-preview-card', theme.id, { 'active': currentTheme === theme.id }]"
        @click="setTheme(theme.id)"
      >
        <div :class="['theme-preview-icon', theme.id]">{{ theme.icon }}</div>
        <div class="theme-preview-info">
          <div class="theme-preview-name">{{ theme.name }}</div>
          <div class="theme-preview-desc">{{ theme.description }}</div>
        </div>
        <div class="theme-check">✓</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const {
  currentTheme,
  themePanelOpen,
  themes,
  currentThemeName,
  currentThemeIcon,
  setTheme,
  toggleThemePanel,
  closeThemePanel
} = useTheme()
</script>
