# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Historical Battle Encyclopedia** - 交互式历史战役科普图册

这是一个面向历史爱好者的轻量级科普项目，使用Markdown格式展示历史战役内容，配合AI生成的图片提供沉浸式阅读体验。

**重要**：这不是一个3D游戏项目，而是一个内容展示项目。

## Tech Stack

- **Vite 5** - Fast build tool and dev server
- **Vue 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue 3
- **TypeScript** - Type safety
- **Marked.js** - Markdown parser

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

- **BattleArticle.vue** - 战役文章渲染器，使用 marked.js 渲染Markdown内容
- **ImageGallery.vue** - 图片画廊组件
- **Navbar.vue** - 导航栏组件
- **ThemeSwitcher.vue** - 主题切换组件

### 内容管理

战役内容以Markdown格式存储在 `public/content/battles/` 目录：

- `thermopylae/index.md` - 温泉关战役
- `marathon/index.md` - 马拉松战役
- `cannae/index.md` - 坎尼战役
- `cressy/index.md` - 克雷西战役
- `red-cliffs/index.md` - 赤壁之战

战役元数据（标题、年份、位置等）存储在 `src/data/battles.ts`

### 图片资源

战役图片存储在 `public/content/battles/[战役名]/images/` 目录，命名规范：

- `01-map.jpg` - 战役地图
- `02-commander.jpg` - 统领画像
- `03-battle.jpg` - 战斗场景
- ...

## Key Patterns

### Markdown渲染

使用 `marked.js` 渲染Markdown内容：

```ts
import { marked } from "marked";

const renderedContent = marked.parse(markdown);
```

### 动态加载Markdown

使用 `fetch` 动态加载Markdown文件：

```ts
const response = await fetch(battle.content);
const markdown = await response.text();
```

### 样式系统

- `src/assets/styles/main.css` - 主样式表
- `src/assets/styles/themes.css` - 三主题系统（古典/现代/暗黑）
- 使用CSS变量进行主题定制

## Content Creation Guidelines

### ⚠️ 战役内容必须包含的6个核心部分（REQUIRED）

每个战役 Markdown 文件**必须**包含以下结构：

```markdown
# 战役名称 (年份)

## 时间

- 发生时间：具体日期或时期
- 持续时间：战役延续的时间长度

## 地点

- 地理位置：战场所在位置
- 地形特征：平原、山地、河流、城市等
- 战场环境：天气、季节等环境因素

## 起因

- 战争背景：为什么发生这场战役
- 冲突根源：双方的根本矛盾
- 导火索：直接引发战役的事件

## 发展

- 战役筹备：双方准备工作
- 初期交锋：战斗开始的阶段
- 战术演变：双方战术调整和变化
- 局势转换：战场形势的转折点

## 高潮

- 决定性时刻：战役的最关键阶段
- 战术亮点：精彩或决定性的战术动作
- 惊心动魄：最激烈的战斗场面

## 结局

- 战役结果：胜负结果和伤亡情况
- 后续影响：对历史进程的影响
- 历史意义：这场战役在历史上的地位
```

**验证检查清单**：

- [ ] 包含"时间"部分
- [ ] 包含"地点"部分
- [ ] 包含"起因"部分
- [ ] 包含"发展"部分
- [ ] 包含"高潮"部分
- [ ] 包含"结局"部分

### 推荐补充内容

除了6个必须部分外，建议添加：

```markdown
## 双方对比

| 方面 | 甲方     | 乙方     |
| ---- | -------- | -------- |
| 统领 | 姓名     | 姓名     |
| 兵力 | 数量     | 数量     |
| 装备 | 武器装备 | 武器装备 |
```

### 图片穿插要求

- 至少5-15张图片
- 图片要穿插在对应文字段落中
- 图片要有说明文字（caption）
- 图片路径使用 `/content/battles/{battle-id}/images/XX.jpg` 格式

## Development Notes

- 项目使用Vue 3 Composition API
- TypeScript仅用于类型检查
- 响应式设计，支持移动设备
- 图片懒加载优化性能
- Markdown文件支持热更新
- 三主题系统（古典博物馆/现代极简/暗黑史诗）

## Adding New Battles

1. 创建Markdown文件：`public/content/battles/new-battle/index.md`
2. 添加战役元数据到 `src/data/battles.ts`
3. 生成/准备图片放入 `public/content/battles/new-battle/images/`
4. 运行 `npm run dev` 预览
5. **验证6个核心部分是否完整**

## File Conventions

- Markdown文件：`index.md` 固定命名
- 图片文件：数字前缀命名（如 `01-map.jpg`）
- 组件文件：PascalCase命名（如 `BattleArticle.vue`）
- 样式文件：kebab-case命名（如 `main.css`）

## Project-Specific Rules

### 战役内容6部分结构（CRITICAL）

**所有战役内容必须包含以下6个核心部分**：

1. **时间** - 发生时间、持续时间
2. **地点** - 地理位置、地形特征、战场环境
3. **起因** - 战争背景、冲突根源、导火索
4. **发展** - 战役筹备、初期交锋、战术演变、局势转换
5. **高潮** - 决定性时刻、战术亮点、惊心动魄的场面
6. **结局** - 战役结果、伤亡情况、后续影响、历史意义

**违反此规则的提交将被拒绝。**

### 图文穿插原则

- 图片必须穿插在相关文字段落之后
- 禁止将所有图片堆叠在文章最后
- 每张图片必须有对应的说明文字

## Future Enhancements

计划中的功能扩展：

- 战役地图可视化（Leaflet/Mapbox）
- 时间轴组件
- 兵力对比图表
- 搜索功能
- 多语言支持
