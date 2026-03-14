# 历史战役百科 - 常用命令

## 项目概述

**历史战役百科**是一个历史战役科普展示网站，采用 Vue.js 3 CDN + Marked.js 实现，支持多主题切换。

- **技术栈**: Vue.js 3 CDN、Marked.js、纯 CSS
- **特点**: 零构建配置、开箱即用、支持三种主题风格
- **部署**: 静态文件，可部署到任何静态托管服务

---

## 开发命令

### 启动开发服务器

```bash
# 使用 Python 3 (推荐)
python3 -m http.server 5173

# 使用 Python 2
python -m SimpleHTTPServer 5173

# 使用 Node.js (需要安装 serve)
npx serve . -p 5173

# 使用 PHP
php -S localhost:5173
```

启动后访问: http://localhost:5173

### 停止开发服务器

```bash
# 查找占用端口的进程
lsof -i :5173

# 停止进程（替换 <PID>）
kill <PID>

# 或者使用 pkill
pkill -f "http.server"
```

---

## Git 常用命令

### 基本操作

```bash
# 查看当前分支
git branch --show-current

# 查看状态
git status

# 查看提交历史
git log --oneline

# 查看最近 5 条提交
git log --oneline -5
```

### 提交代码

```bash
# 查看改动
git status
git diff

# 添加文件到暂存区
git add <file>
git add .

# 提交
git commit -m "描述信息"

# 提交并附带详细说明
git commit -m "标题

- 详细说明1
- 详细说明2"
```

### 分支管理

```bash
# 创建新分支
git branch <branch-name>

# 切换分支
git checkout <branch-name>

# 创建并切换到新分支
git checkout -b <branch-name>

# 删除分支
git branch -d <branch-name>
```

### 推送远程

```bash
# 推送到远程仓库
git push

# 推送新分支到远程
git push -u origin <branch-name>
```

---

## 文件结构

```
3d-war/
├── index.html              # 主入口（Vue CDN）
├── css/
│   ├── style.css          # 主样式表
│   └── themes.css         # 主题样式文件
├── js/
│   ├── app.js             # Vue 应用逻辑
│   └── data.js            # 战役数据
├── content/
│   ├── battles/           # 战役内容
│   │   ├── thermopylae/   # 温泉关战役
│   │   ├── marathon/      # 马拉松战役
│   │   ├── cannae/        # 坎尼战役
│   │   └── red-cliffs/    # 赤壁之战
│   └── images/           # 共享图片
└── docs/                  # 项目文档
    └── COMMANDS.md        # 本文件
```

---

## 主题系统

### 可用主题

| 主题 ID | 名称 | 配色 |
|---------|------|------|
| `classical` | 古典博物馆 | 古铜金/深红/羊皮纸 |
| `modern` | 现代极简 | 纯白/深灰/电光蓝 |
| `dark` | 暗黑史诗 | 深黑/生铁/火焰红 |

### 切换主题

1. 点击导航栏右侧的 **"主题"** 按钮
2. 在弹出的面板中选择主题
3. 主题会立即应用并自动保存

### 开发新主题

编辑 `css/themes.css`，添加新的 `[data-theme="theme-id"]` 选择器：

```css
[data-theme="your-theme"] {
    --bg-primary: #颜色;
    --bg-secondary: #颜色;
    --text-primary: #颜色;
    /* ... 更多变量 */
}
```

---

## 添加新战役

### 步骤

1. **创建战役目录**
   ```bash
   mkdir -p content/battles/<battle-id>/images
   ```

2. **创建 Markdown 文件**
   ```bash
   # content/battles/<battle-id>/index.md
   ```

3. **添加战役元数据**

   编辑 `js/data.js`，添加新的战役对象：

   ```javascript
   {
       id: 'battle-id',
       name: '战役名称',
       year: '年份',
       location: '地点',
       description: '简短描述',
       cover: 'content/images/battle-cover.jpg',
       content: 'content/battles/battle-id/index.md',
       images: [
           {
               src: 'content/battles/battle-id/images/01.jpg',
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
|------|------|------|
| 统领 | 姓名 | 姓名 |
| 兵力 | 数量 | 数量 |

## 战斗过程
描述战斗过程...

## 结果与意义
战役结果和历史影响...
```

---

## 常见问题

### Q: 为什么有些图片显示不正常？
A: 当前使用的是占位图片（SVG 格式但后缀是 .jpg）。你需要替换为真实的图片文件。

### Q: 如何修改默认主题？
A: 编辑 `js/app.js` 中的 `currentTheme: 'classical'`，改为你想要的主题 ID。

### Q: 主题切换没有效果？
A: 确保 `index.html` 中正确引入了 `css/themes.css`，且 `body` 标签有 `:data-theme="currentTheme"` 属性。

### Q: 如何修改颜色方案？
A: 编辑 `css/themes.css` 中对应主题的 CSS 变量。

---

## 部署

### 静态托管服务

项目是纯静态文件，可部署到任何静态托管服务：

- **Vercel**: `vercel deploy`
- **Netlify**: 拖放文件夹到 Netlify
- **GitHub Pages**: 推送到 `gh-pages` 分支
- **阿里云 OSS**: 上传到 OSS 并开启静态网站托管

### 部署前检查清单

- [ ] 测试所有主题切换
- [ ] 检查所有战役内容是否正确加载
- [ ] 确认图片资源路径正确
- [ ] 移动端和桌面端测试
- [ ] 清理不必要的文件（如 `.vite/` 目录）

---

## 技术支持

如有问题，请检查：
1. 浏览器控制台是否有错误
2. 所有 CSS 和 JS 文件是否正确引入
3. 战役 Markdown 文件路径是否正确

---

## 许可证

MIT License
