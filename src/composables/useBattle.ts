import { ref } from 'vue'
import { marked } from 'marked'
import type { Battle } from '@/data/battles'

export function useBattle() {
  const renderedContent = ref<string>('')
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const loadBattle = async (battle: Battle) => {
    loading.value = true
    error.value = null
    renderedContent.value = ''

    try {
      window.scrollTo({ top: 0, behavior: 'smooth' })

      const response = await fetch(battle.content)

      if (!response.ok) {
        throw new Error(`加载失败: ${response.status}`)
      }

      const markdown = await response.text()
      renderedContent.value = marked.parse(markdown)

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '未知错误'
      console.error('加载战役内容失败:', err)
      error.value = errorMessage
      renderedContent.value = `
        <div class="error-message">
          <h2>加载失败</h2>
          <p>无法加载战役内容。请稍后再试。</p>
          <p class="error-detail">${errorMessage}</p>
        </div>
      `
    } finally {
      loading.value = false
    }
  }

  const clearBattle = () => {
    renderedContent.value = ''
    error.value = null
    loading.value = false
  }

  return {
    renderedContent,
    loading,
    error,
    loadBattle,
    clearBattle
  }
}
