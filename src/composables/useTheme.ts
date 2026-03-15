import { ref, computed } from 'vue'

export interface Theme {
  id: string
  name: string
  description: string
  icon: string
}

export const themes: Theme[] = [
  {
    id: 'classical',
    name: '古典博物馆',
    description: '古铜金 · 深红 · 羊皮纸',
    icon: '🏛'
  },
  {
    id: 'modern',
    name: '现代极简',
    description: '纯白 · 深灰 · 电光蓝',
    icon: '◐'
  },
  {
    id: 'dark',
    name: '暗黑史诗',
    description: '深黑 · 生铁 · 火焰红',
    icon: '◑'
  }
]

export function useTheme() {
  const currentTheme = ref<string>('classical')
  const themePanelOpen = ref<boolean>(false)

  const currentThemeName = computed(() => {
    const theme = themes.find(t => t.id === currentTheme.value)
    return theme ? theme.name : '切换主题'
  })

  const currentThemeIcon = computed(() => {
    const theme = themes.find(t => t.id === currentTheme.value)
    return theme ? theme.icon : '◐'
  })

  const initTheme = () => {
    const savedTheme = localStorage.getItem('battle-theme')
    if (savedTheme && themes.find(t => t.id === savedTheme)) {
      currentTheme.value = savedTheme
    }
    document.body.setAttribute('data-theme', currentTheme.value)
  }

  const setTheme = (themeId: string) => {
    currentTheme.value = themeId
    localStorage.setItem('battle-theme', themeId)
    document.body.setAttribute('data-theme', themeId)
    closeThemePanel()
    console.log(`主题已切换到: ${themeId}`)
  }

  const toggleThemePanel = () => {
    themePanelOpen.value = !themePanelOpen.value
  }

  const closeThemePanel = () => {
    themePanelOpen.value = false
  }

  return {
    currentTheme,
    themePanelOpen,
    themes,
    currentThemeName,
    currentThemeIcon,
    initTheme,
    setTheme,
    toggleThemePanel,
    closeThemePanel
  }
}
