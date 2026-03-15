# 历史战役百科 (Historical Battle Encyclopedia)

交互式历史战役科普展示，以图文并茂的方式介绍改变世界的关键战役。

> **项目定位**：面向历史爱好者的轻量级科普内容展示，使用Markdown格式配合AI生成图片。

## 项目特点

- 📚 **内容丰富** - 详细介绍战役背景、双方对比、战斗过程、历史意义
- 🖼️ **AI生成配图** - 使用AI工具生成高质量历史场景插图
- 🎨 **三主题系统** - 古典博物馆、现代极简、暗黑史诗三种风格
- 📱 **响应式设计** - 完美适配桌面和移动设备
- ⚡ **快速加载** - Vite构建，秒开体验
- 🔄 **易于扩展** - 添加新战役只需添加Markdown文件

## 技术栈

- **Vite 5** - 快速构建工具
- **Vue 3** - 渐进式JavaScript框架
- **Vue Router 4** - 官方路由管理
- **TypeScript** - 类型安全
- **Marked.js** - Markdown解析器

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

## 已收录战役

| 战役 | 年份 | 地点 | 特点 |
|------|------|------|------|
| 温泉关战役 | 公元前480年 | 希腊·温泉关 | 300斯巴达勇士阻击波斯 |
| 马拉松战役 | 公元前490年 | 希腊·马拉松平原 | 方阵战术击败波斯 |
| 坎尼战役 | 公元前216年 | 意大利·坎尼 | 汉尼拔经典包围战 |
| 克雷西战役 | 公元1346年 | 法国·克雷西 | 长弓终结重骑士时代 |
| 赤壁之战 | 公元208年 | 中国·长江赤壁 | 火攻大破曹操大军 |

## 添加新战役

1. 创建战役目录和Markdown文件
   ```bash
   mkdir -p public/content/battles/<battle-id>/images
   ```

2. 编写Markdown内容
   ```bash
   # public/content/battles/<battle-id>/index.md
   ```

3. 添加战役元数据到 `src/data/battles.ts`
   ```typescript
   {
     id: 'battle-id',
     name: '战役名称',
     year: '年份',
     location: '地点',
     description: '简短描述',
     cover: '/content/images/battle-cover.jpg',
     content: '/content/battles/battle-id/index.md',
     images: []
   }
   ```

4. 运行 `npm run dev` 预览

## 内容规范

Markdown文件应包含以下部分：

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

## 项目结构

```
3d-war/
├── public/
│   └── content/              # 静态内容
│       ├── battles/          # 战役Markdown内容
│       │   ├── thermopylae/
│       │   ├── marathon/
│       │   ├── cannae/
│       │   ├── cressy/
│       │   └── red-cliffs/
│       └── images/           # 战役封面图片
├── src/
│   ├── assets/styles/        # 样式文件
│   │   ├── main.css
│   │   └── themes.css        # 三主题系统
│   ├── components/           # Vue组件
│   │   ├── layout/          # 布局组件
│   │   ├── home/            # 首页组件
│   │   └── battle/          # 详情页组件
│   ├── composables/         # 组合式函数
│   ├── data/                # 数据文件
│   │   └── battles.ts       # 战役元数据
│   ├── router/              # 路由配置
│   ├── views/               # 页面视图
│   ├── App.vue              # 根组件
│   └── main.ts              # 应用入口
├── docs/                    # 项目文档
│   ├── COMMANDS.md          # 常用命令
│   └── THEME-TROUBLESHOOTING.md
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## 开发指南

### 图片生成

战役图片建议使用AI工具生成：
- **Midjourney** - 高质量历史场景（推荐）
- **DALL-E 3** - 准确的历史细节
- **Stable Diffusion** - 免费替代方案

提示词模板：
```
Historical illustration of [战役场景],
[风格要求: educational/museum quality],
[细节要求: historically accurate],
--ar 16:9
```

### 主题系统

项目支持三种主题风格：
- **古典博物馆** - 古铜金/深红/羊皮纸，衬线字体
- **现代极简** - 纯白/深灰/电光蓝，无衬线字体
- **暗黑史诗** - 深黑/生铁/火焰红，战争氛围

主题切换会自动保存到 localStorage。

## 贡献

欢迎提交战役内容建议和改进意见！

### 贡献方式

1. Fork 本项目
2. 创建分支 (`git checkout -b feature/your-feature`)
3. 提交改动 (`git commit -m 'Add some battle'`)
4. 推送分支 (`git push origin feature/your-feature`)
5. 创建 Pull Request

## 许可证

MIT

---

**Made with ❤️ for history enthusiasts**
