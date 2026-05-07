export const sourceMarkdown = `
- Mindmap PPT
  会讲故事的思维导图
  @image overview.svg
    - 如何使用
      准备内容即可开始
      @image flow.svg
        - 写 Markdown
          用无序列表组织层级
            - 两行标题
              第一行副标题第二行主标题
            - 配图标记
              用 @image 绑定节点插图
        - 放入 project
          内容素材集中在项目目录
            - source.js
              存放整份思维导图
            - illustrations
              存放本地 PNG JPG SVG
        - 启动预览
          npm run dev 打开页面
            - 操作方式
              键盘按钮滑条都能切换
            - 缩放视角
              用相机滑块调整整体大小
    - 软件特色
      像 PPT 一样播放思维导图
      @image layout.svg
        - 逐步展开
          按前序路径推进内容
            - 保留上下文
              已访问分支仍能看见
            - 隐藏未读
              观众只关注当前重点
        - 智能视角
          当前节点保持在中间区域
            - 点击漫游
              查看节点但不改变播放进度
            - 稳定字号
              纵向或宽屏都不压缩文字
        - 插图节点
          重点信息可以配一张图
            - 选中放大
              当前节点图片展开展示
            - 失焦缩略
              非当前图片变小不挡图
    - Agent 协作
      文稿自动生成演示内容
      @image animation.svg
        - Skill 约定
          先 clone 仓库再生成内容
            - 写入范围
              只改 project 内容和素材
        - 图片生成
          重点信息节点自动配图
        - 适用场景
          报告文章课程都能改成导图
`;
