<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>开发者工具面板功能介绍（chrome）</h1>
      <p>chrome 浏览器作为程序员的标配，在页面加载性能和调试方便有着优秀的表现，下面讲讲chrome开发者工具面板功能的详细介绍。</p>
      <p>操作：点击键盘“F12”即可调取开发者工具面板 包含：Elements面板、Console面板、Sources面板、Network 面板、Performance面板 、Memory面板Application面板、Security面板、Audits面板等。</p>
      <p>
        <span class="red">1. Elements 面板</span><br>
        可以查找网页源代码 html 中的节点，可以实时编辑标签属性，鼠标选中的DOM会在页面中显示标签名和margin、padding、width、height等属性。 也可以修改页面中的样式属性，且能在浏览器里面实时得到反馈，调试前端代码非常方便。<br>
        <img src="../img/17/1.png" alt="截图"><br>
        如果页面中有动画，还会显示动画执行进度。
      </p>
      <p>
        <span class="red">2. Console 面板</span><br>
        可以记录开发过程中的日志信息，也可以作为与JS进行交互的命令行Shell（执行js代码）也可以进行数学运算。<br>
        <img src="../img/17/2.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">3. Sources面板</span><br>
        可以设置断点调试，如果当前代码经过压缩，可以点击下方的花括号{}来增强可读性。<br>
        <img src="../img/17/3.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">4. Network 面板</span><br>
        可以看到页面向服务器请求了哪些资源、资源的大小以及加载资源花费的时间，哪些资源加载失败。此外，还可以查看HTTP的请求头，返回内容等。（请求、响应、入参、出参）<br>
        <img src="../img/17/4.png" alt="截图"><br>
        Network 模拟网络延迟 <br>
        <img src="../img/17/5.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">5. Performance 面板（原名：Timeline）</span><br>
        它的作用就是记录与分析应用程序运行过程中所产生的活动，更多的是用在性能优化方面<br>
        <img src="../img/17/6.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">6. Memory 面板</span><br>
        堆栈快照、JavaScript函数内存分配、隔离内存泄漏<br>
        <img src="../img/17/7.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">7. Application 面板</span><br>
        记录网站加载的所有资源信息，包括存储数据（Local Storage、Session Storage、IndexedDB、Web SQL、Cookies）、缓存数据、字体、图片、脚本、样式表等。 <br>
        <img src="../img/17/8.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">8. Security 面板</span><br>
        可以去调试网页安全和认证等问题，确保你的网站上实现HTTPS（判断网页安全性）<br>
        <img src="../img/17/9.png" alt="截图"><br>
        点击View certificate 可以查看证书信息（颁发给、颁发者、证书有效期）<br>
        HTTPS和HTTP的区别主要为以下四点：<br>
        ① https协议需要到CA申请证书，一般免费证书很少，需要交费。<br>
        ② http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。<br>
        ③ http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。<br>
        ④ http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
      </p>
      <p>
        <span class="red">9.  Audits 面板</span><br>
        对当前网页进行网络利用情况、网页性能方面的诊断，并给出一些优化建议。比如列出所有没有用到的CSS文件等。<br>
        <img src="../img/17/10.png" alt="截图"><br>
        选中Network Utilization、Web Page Performance，点击Run按钮，将会对当前页面进行网络利用率和页面的性能优化作出诊断，并给出相应的优化建议。
      </p>
      <p></p>
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
    p {
      img {
        max-width: 740px;
      }
    }
  }
}
</style>