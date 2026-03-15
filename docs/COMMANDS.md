# 历史战役百科 - 常用命令

## 项目概述

**历史战役百科**是一个历史战役科普展示网站，采用 Vite + Vue 3 实现，支持多主题切换。

- **技术栈**: Vite 5、Vue 3.4、Vue Router 4、TypeScript、Marked.js
- **特点**: 组件化架构、热模块替换、支持三种主题风格
- **部署**: 构建后生成静态文件，可部署到任何静态托管服务

---

## 开发命令

```txt
有5-15张图片,描述战役的时间,地点,起因,发展,高潮,结局
```

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后访问: http://localhost:5173

**Vite 开发服务器特性**：

- ⚡ 极速的热模块替换 (HMR)
- 📦 开箱即用的 TypeScript 支持
- 🔧 优化的构建配置

### 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

在本地预览生产构建的结果。

### 停止开发服务器

```bash
# 查找占用端口的进程
lsof -i :5173

# 停止进程（替换 <PID>）
kill <PID>

# 或者使用 pkill
pkill -f "vite"
```

---

## 主题系统

### 可用主题

| 主题 ID     | 名称       | 配色               |
| ----------- | ---------- | ------------------ |
| `classical` | 古典博物馆 | 古铜金/深红/羊皮纸 |
| `modern`    | 现代极简   | 纯白/深灰/电光蓝   |
| `dark`      | 暗黑史诗   | 深黑/生铁/火焰红   |

### 切换主题

1. 点击导航栏右侧的 **"主题"** 按钮
2. 在弹出的面板中选择主题
3. 主题会立即应用并自动保存到 localStorage

### 开发新主题

编辑 `src/assets/styles/themes.css`，添加新的 `[data-theme="theme-id"]` 选择器：

```css
[data-theme="your-theme"] {
    --bg-primary: #颜色;
    --bg-secondary: #颜色;
    --text-primary: #颜色;
    /* ... 更多变量 */
}
```

然后在 `src/composables/useTheme.ts` 的 `themes` 数组中添加主题配置：

```typescript
{
    id: 'your-theme',
    name: '主题名称',
    description: '简短描述',
    icon: '🎨'
}
```

---

## 添加新战役

### 步骤

1. **创建战役目录**

    ```bash
    mkdir -p public/content/battles/<battle-id>/images
    ```

2. **创建 Markdown 文件**

    ```bash
    # public/content/battles/<battle-id>/index.md
    ```

3. **添加战役元数据**

    编辑 `src/data/battles.ts`，添加新的战役对象：

    ```typescript
    {
        id: 'battle-id',
        name: '战役名称',
        year: '年份',
        location: '地点',
        description: '简短描述',
        cover: '/content/images/battle-cover.jpg',
        content: '/content/battles/battle-id/index.md',
        images: [
            {
                src: '/content/battles/battle-id/images/01.jpg',
                caption: '图片说明'
            }
        ]
    }
    ```

### Markdown 内容格式

```markdown
# 战役名称 (年份)

## 背景

介绍历史背景和起因...

## 双方对比

| 方面 | 甲方 | 乙方 |
| ---- | ---- | ---- |
| 统领 | 姓名 | 姓名 |
| 兵力 | 数量 | 数量 |

## 战斗过程

描述战斗过程...

## 结果与意义

战役结果和历史影响...
```

---

## 路由结构

```
/                   → 首页（战役列表）
/battle/:id         → 战役详情页
```

使用 Vue Router 进行客户端路由，支持浏览器前进/后退。

---

## 常见问题

### Q: 如何修改默认主题？

A: 编辑 `src/composables/useTheme.ts` 中的 `currentTheme` 初始值，或修改 `initTheme()` 函数。

### Q: 主题切换没有效果？

A: 确保 `src/assets/styles/themes.css` 正确引入，且 `body` 标签有 `data-theme` 属性。

### Q: 如何修改颜色方案？

A: 编辑 `src/assets/styles/themes.css` 中对应主题的 CSS 变量。

### Q: 热更新不工作？

A: 尝试重启开发服务器 `npm run dev`。

### Q: 构建后图片路径错误？

A: 确保图片路径以 `/` 开头（绝对路径），如 `/content/images/xxx.jpg`。

---

## 部署

### 构建生产版本

```bash
npm run build
```

构建产物在 `dist/` 目录，可直接部署。

### 静态托管服务

- **Vercel**: `vercel deploy` 或连接 Git 仓库自动部署
- **Netlify**: 拖放 `dist/` 文件夹到 Netlify
- **GitHub Pages**: 推送到 `gh-pages` 分支
- **阿里云 OSS**: 上传 `dist/` 目录到 OSS 并开启静态网站托管

### 部署前检查清单

- [ ] 运行 `npm run build` 确保构建成功
- [ ] 测试所有主题切换
- [ ] 检查所有战役内容是否正确加载
- [ ] 确认图片资源路径正确
- [ ] 移动端和桌面端测试
- [ ] 预览模式测试 `npm run preview`

---

## 技术支持

如有问题，请检查：

1. 浏览器控制台是否有错误
2. 所有组件是否正确导入
3. 战役 Markdown 文件路径是否正确
4. Vite 开发服务器是否正常运行

---

## 许可证

MIT License
