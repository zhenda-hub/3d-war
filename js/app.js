/**
 * 历史战役百科 - Vue 应用
 */

const { createApp } = Vue;

createApp({
    data() {
        return {
            currentView: 'home',     // 'home' | 'detail'
            currentBattle: null,
            battles: battles,
            renderedContent: '',
            loading: false,
            error: null,
            navMenuOpen: false       // 移动端导航菜单状态
        };
    },

    methods: {
        /**
         * 选择战役，加载详情内容
         */
        async selectBattle(battle) {
            this.currentBattle = battle;
            this.loading = true;
            this.error = null;
            this.renderedContent = '';

            try {
                // 滚动到顶部
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // 加载 Markdown 内容
                const response = await fetch(battle.content);

                if (!response.ok) {
                    throw new Error(`加载失败: ${response.status}`);
                }

                const markdown = await response.text();

                // 使用 marked.js 解析 Markdown
                if (typeof marked !== 'undefined') {
                    this.renderedContent = marked.parse(markdown);
                } else {
                    // 如果 marked 未加载，显示纯文本（保留换行）
                    this.renderedContent = `<pre>${markdown}</pre>`;
                }

                // 切换到详情视图
                this.currentView = 'detail';
                this.navMenuOpen = false;

            } catch (err) {
                console.error('加载战役内容失败:', err);
                this.error = err.message;
                this.renderedContent = `
                    <div class="error-message">
                        <h2>加载失败</h2>
                        <p>无法加载战役内容。请稍后再试。</p>
                        <p class="error-detail">${err.message}</p>
                    </div>
                `;
                this.currentView = 'detail';
            } finally {
                this.loading = false;
            }
        },

        /**
         * 返回首页
         */
        goHome() {
            this.currentView = 'home';
            this.currentBattle = null;
            this.renderedContent = '';
            this.error = null;
            this.navMenuOpen = false;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        /**
         * 切换移动端导航菜单
         */
        toggleNavMenu() {
            this.navMenuOpen = !this.navMenuOpen;
        }
    },

    mounted() {
        // 应用挂载后的初始化
        console.log('历史战役百科已加载');
        console.log(`共有 ${this.battles.length} 个战役`);
    }
}).mount('#app');
