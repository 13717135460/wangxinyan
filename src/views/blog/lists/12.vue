<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>codePen前端编码神器</h1>
      <p>codePen (代码笔) 一款前端所见即所得的工具，特别是制作DEMO时，能够带给前端非常棒的体验！它收集了全世界前端达人经典项目进行展示，从中获取到很多的创作灵感，让我们一起来了解下codePen的魅力吧！</p>
      <p>
        CodePen 是一个完全免费的前端代码托管服务，主要功能有：<br>
        1. 即时预览。你甚至可以本地修改并即时预览别人的作品。支持多种主流预处理器<br>
        2. 快速添加外部资源文件。只需在输入框里输入库名， CodePen 就会从 cdnjs 上寻找匹配的 css 或 js 库。<br>
        3. 免费创建模板。支持创建三个模板，不是每个作品都需要从白板开始。<br>
        4. 优秀的外嵌体验。在 WordPress 或 Reddit 等支持 oEmbed 的平台上，只要简单地把链接贴入编辑框，发布后会自动转为嵌入作品。
      </p>
      <p>
        下面是codePen界面展示<br>
        <span class="red">1. 点击“Create”->"NEW Pen" 新建一个代码界面。</span><br>
        <img src="../img/12/1.png" alt="截图" width="90%"><br>
        <span class="red">2. 新建界面后会有“HTML”、CSS、JS、Content等区域。</span><br>
        <img src="../img/12/2.png" alt="截图" width="90%"><br>
        <span class="red">3.页面编辑完成后点击“保存”浏览器地址栏会生成页面对应的Url 地址。（可全网访问）</span><br>
        <img src="../img/12/3.png" alt="截图" width="90%"><br>
        <span class="red">4. 点击“Settings”可以设置要引入的css、js 库文件。</span><br>
        <img src="../img/12/4.gif" alt="截图" width="90%"><br>
      </p>
      <p>
        * 下面是codePen官网的一些经典案例展示：<br>
        <span class="d-flex" style="width:810px;margin-bottom: 10px;">
          <img class="flex1" src="../img/12/5.gif" alt="截图"><br>
          <img class="flex1" src="../img/12/6.gif" alt="截图"><br>
        </span>
        <img src="../img/12/7.gif" alt="截图" width="90%"><br>
        <img src="../img/12/8.gif" alt="截图" width="90%"><br>
      </p>
      <p>
        https://codepen.io/ge1doot/pen/LkdOwj    （codePen 酷炫作品） <br>
        类似功能网站： https://runjs.cn/code         http://jsbin.com/?html,output <br>
        常用优站： https://tool.lu/ 在线小工具（非常全）   <br>
      </p>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/index/navbar'

export default {
  name: 'my-blogs',
  components: {
    navbar
  },
  filters: {

  },
  data () {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.my-blogs {
  .container {

  }
}
</style>