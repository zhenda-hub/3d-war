# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Historical Battle Encyclopedia** - 交互式历史战役科普图册

这是一个面向历史爱好者的轻量级科普项目，使用Markdown格式展示历史战役内容，配合AI生成的图片提供沉浸式阅读体验。

**重要**：这不是一个3D游戏项目，而是一个内容展示项目。

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI framework with TypeScript
- **react-markdown** - Markdown内容渲染
- **remark-gfm** - GitHub风格Markdown支持（表格、删除线等）
- **Swiper** (可选) - 图片轮播组件

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Build
npm run build        # TypeScript check + production build
npm run preview      # Preview production build locally
```

## Architecture

### 核心组件

- **BattleArticle.tsx** - 战役文章渲染器，使用react-markdown渲染Markdown内容
- **ImageGallery.tsx** - 图片画廊组件（可选）
- **App.tsx** - 主应用组件，处理路由和布局

### 内容管理

战役内容以Markdown格式存储在 `public/battles/` 目录：
- `thermopylae.md` - 温泉关战役
- `marathon.md` - 马拉松战役
- `cannae.md` - 坎尼战役

战役元数据（标题、年份、位置等）存储在 `src/data/battles.ts`

### 图片资源

战役图片存储在 `public/images/[战役名]/` 目录，命名规范：
- `01-map.jpg` - 战役地图
- `02-commander.jpg` - 统领画像
- `03-battle.jpg` - 战斗场景
- ...

## Key Patterns

### Markdown渲染

使用 `react-markdown` 渲染Markdown内容：

```tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

<ReactMarkdown remarkPlugins={[remarkGfm]}>
  {markdownContent}
</ReactMarkdown>
```

### 动态加载Markdown

使用 `fetch` 动态加载Markdown文件：

```tsx
useEffect(() => {
  fetch(`/battles/${battleId}.md`)
    .then(res => res.text())
    .then(text => setMarkdown(text));
}, [battleId]);
```

### 样式系统

- `styles/markdown.css` - Markdown内容样式（基于GitHub风格）
- `index.css` - 全局样式
- 使用CSS变量进行主题定制

## Content Creation Guidelines

### Markdown文件结构

每个战役Markdown文件应包含：

```markdown
# 战役名称 (年份)

## 背景
介绍历史背景和起因（2-3段）

## 双方对比
| 方面 | 甲方 | 乙方 |
|------|------|------|
| 统领 | 姓名 | 姓名 |
| 兵力 | 数量 | 数量 |
| 装备 | 武器装备 | 武器装备 |

## 战斗过程
### 第一阶段
描述战斗第一阶段...

### 第二阶段
描述战斗第二阶段...

## 结果与意义
战役结果和历史影响...
```

### AI图片生成

使用AI工具生成战役插图：
- **Midjourney** - 推荐，质量最高
- **DALL-E 3** - 提示词理解好
- **Stable Diffusion** - 免费替代方案

提示词模板：
```
Historical illustration of [战役场景],
[风格要求: educational/museum quality],
[细节要求: historically accurate],
--ar 16:9
```

## Development Notes

- 项目使用React函数组件和Hooks
- TypeScript严格模式开启
- 响应式设计，支持移动设备
- 图片懒加载优化性能
- Markdown文件支持热更新

## Adding New Battles

1. 创建Markdown文件：`public/battles/new-battle.md`
2. 添加战役元数据到 `src/data/battles.ts`
3. 生成/准备图片放入 `public/images/new-battle/`
4. 更新导航组件（如果有）
5. 运行 `npm run dev` 预览

## File Conventions

- Markdown文件：小写连字符命名（如 `thermopylae.md`）
- 图片文件：数字前缀命名（如 `01-map.jpg`）
- 组件文件：PascalCase命名（如 `BattleArticle.tsx`）
- 样式文件：kebab-case命名（如 `markdown.css`）

## Future Enhancements

计划中的功能扩展：
- 战役地图可视化（Leaflet/Mapbox）
- 时间轴组件
- 兵力对比图表
- 搜索功能
- 多语言支持
- 深色模式
