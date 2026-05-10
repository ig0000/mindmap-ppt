# Mindmap PPT

把文稿讲成可播放导图的静态演示项目。你只需要维护一份无序列表 Markdown，页面会把它渲染成 PPT 式逐步展开的思维导图：当前路径横向推进，已讲过的分支保留在画面中，重点节点可以展开插图。

在线演示：[https://agegr.github.io/mindmap-ppt/](https://agegr.github.io/mindmap-ppt/)

## 适合场景

- 演讲汇报：把论点、证据和结论串成可讲述路径。
- 课程笔记：把知识点按层级和先后顺序展开。
- 产品说明：用导图组织功能、卖点、流程和交付物。
- 长文提炼：把文章、报告或会议材料整理成演示大纲。

## 核心特性

- PPT 式播放：按树的 preorder 顺序逐个进入节点。
- 自动视角：选中节点或点击节点时，画布只移动到必要位置。
- 图文节点：节点可通过 `@image` 附带本地 PNG、JPG 或 SVG 插图。
- 多种导航：支持方向键、Page Up / Page Down、滚轮、按钮和进度滑条。
- 无构建依赖：纯 HTML/CSS/JS，`npm run dev` 只是本地静态预览服务器。

## 快速开始

```bash
npm run dev
```

打开本地地址：

```text
http://127.0.0.1:5173/
```


项目没有运行时依赖，也不需要构建。部署时直接托管仓库静态文件即可，例如 GitHub Pages、Netlify、Vercel Static、Nginx、对象存储或任意 CDN。

## 修改内容

主要内容在 [project/source.js](project/source.js)：

```js
export const sourceMarkdown = `
- Mindmap PPT
  把文稿讲成可播放导图
  @image generated/product-overview.png
    - 它能帮你什么
      让复杂内容顺着讲
`;
```

写作规则：

- 每个节点是一条无序列表项，缩进表示父子关系。
- 两行标签会渲染成“副标题 + 主标题”：第一行是小号副标题，第二行是主标题。
- 单行标签会渲染成普通标题。
- `@image` 是节点图片元数据，不会显示成文字。
- 图片路径默认相对 `project/`，例如 `@image demo.png` 会读取 `project/demo.png`。

## 让 Agent 生成导图

仓库内置了中文 Codex skill：`mindmap-ppt-builder`。安装后，可以把文章、报告、演讲稿或笔记交给 Agent，让它生成 `project/source.js` 并为重点节点整理插图。

安装到当前环境：

```bash
npx skills add agegr/mindmap-ppt --skill mindmap-ppt-builder
```

安装到 Codex 全局 skill：

```bash
npx skills add agegr/mindmap-ppt --skill mindmap-ppt-builder --agent codex --global
```

最简单的工作流：

1. 安装一次 `mindmap-ppt-builder`。
2. 把文稿、目标受众和演示风格交给 Agent，让它生成导图内容和插图。
3. 让 Agent 启动本地预览并检查效果，不满意就继续让它调整。

Agent 通常会处理 `project/source.js`、图片素材、`@image` 引用、基础检查和本地预览。你只需要确认最终演示效果；除非要调整交互、布局或动画，不必修改 `src/` 与 `index.html`。

## 项目结构

```text
.
├── index.html              # 页面结构和控制区
├── src/
│   ├── main.js             # Markdown 解析、布局、导航和渲染逻辑
│   └── styles.css          # 视觉样式、节点动画和响应式布局
├── project/
│   ├── source.js           # 当前导图数据
│   └── generated/          # 示例插图素材
├── scripts/dev-server.js   # 本地静态文件服务器
└── skills/mindmap-ppt-builder/
    └── SKILL.md            # Agent 生成导图的工作流说明
```

## 演示操作

- 上一个 / 下一个节点：`↑`、`↓`、Page Up、Page Down 或滚轮。
- 直接跳转：拖动节点进度滑条。
- 调整画布大小：拖动 Zoom 滑条。
- 临时查看节点：点击可见节点会移动视角，但不会改变当前选中进度。

## 开发说明

- 内容树按 preorder 展开，因此父节点会先于所有子节点出现。
- 节点由 HTML 渲染，连线由 SVG 渲染，节点大小会跟随文字和图片自然变化。
- 未访问节点不会参与布局；已访问但不在当前路径上的分支会显示在父节点上方。
- 如浏览器看起来仍是旧版本，可对页面执行硬刷新。
