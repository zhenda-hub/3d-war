# 历史战役科普图册 (Historical Battle Encyclopedia)

交互式历史战役科普展示，以图文并茂的方式介绍世界著名战役。

> **项目定位**：面向历史爱好者的轻量级科普内容展示，使用Markdown格式配合AI生成图片。

## 项目特点

- 📚 **内容丰富** - 详细介绍战役背景、双方对比、战斗过程、历史意义
- 🖼️ **AI生成配图** - 使用AI工具生成高质量历史场景插图
- 📱 **响应式设计** - 完美适配桌面和移动设备
- ⚡ **快速加载** - 静态Markdown渲染，秒开体验
- 🔄 **易于扩展** - 添加新战役只需添加Markdown文件

## 技术栈

- **Vite** - 快速构建工具
- **React** - UI框架
- **TypeScript** - 类型安全
- **react-markdown** - Markdown渲染
- **remark-gfm** - GitHub风格Markdown支持
- **Swiper** - 图片轮播（可选）

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

访问 http://localhost:5173 查看效果

## 项目结构

```
3d-war/
├── src/
│   ├── components/         # React组件
│   │   ├── BattleArticle.tsx    # 战役文章渲染器
│   │   └── ImageGallery.tsx     # 图片画廊
│   ├── data/               # 战役数据
│   │   └── battles.ts            # 战役列表
│   ├── styles/             # 样式文件
│   │   └── markdown.css          # Markdown样式
│   ├── App.tsx             # 主应用组件
│   └── main.tsx            # 应用入口
├── public/
│   ├── battles/            # Markdown战役内容
│   │   ├── thermopylae.md        # 温泉关战役
│   │   ├── marathon.md           # 马拉松战役
│   │   └── cannae.md             # 坎尼战役
│   └── images/             # 战役图片
│       └── thermopylae/
│           ├── 01-map.jpg
│           ├── 02-xerxes.jpg
│           └── ...
└── todos/                  # 战役规划文档
    ├── todo.md
    └── todo2.md
```

## 添加新战役

1. 在 `public/battles/` 创建新的Markdown文件
2. 在 `src/data/battles.ts` 添加战役信息
3. 将相关图片放入 `public/images/[战役名]/`
4. 运行 `npm run dev` 预览

## 内容规范

Markdown文件应包含以下部分：

```markdown
# 战役名称

## 背景
介绍历史背景和起因

## 双方对比
| 方面 | 甲方 | 乙方 |
|------|------|------|
| 统领 | 姓名 | 姓名 |
| 兵力 | 数量 | 数量 |

## 战斗过程
按时间顺序描述战斗

## 历史意义
总结战役的影响和意义
```

## 开发指南

### Markdown渲染

使用 `react-markdown` 渲染Markdown内容：

```tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

<ReactMarkdown remarkPlugins={[remarkGfm]}>
  {markdownContent}
</ReactMarkdown>
```

### 图片处理

战役图片建议使用AI工具生成：
- **Midjourney** - 高质量历史场景
- **DALL-E 3** - 准确的历史细节
- **Stable Diffusion** - 免费替代方案

## 未来计划

- [ ] 添加战役地图可视化
- [ ] 添加战役时间轴
- [ ] 添加双方兵力对比图表
- [ ] 支持多语言
- [ ] 添加战役搜索功能

## 贡献

欢迎提交战役内容建议和改进意见！

## 许可证

MIT
