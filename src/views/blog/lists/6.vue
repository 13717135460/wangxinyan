<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>tinyMCE富文本编辑器初体验</h1>
      <p>
        <span class="red">TinyMCE是什么？</span><br>
        TinyMCE是一款易用、且功能强大的所见即所得的富文本编辑器。同类程序有：UEditor、Kindeditor、Simditor、CKEditor、wangEditor等等。
      </p>
      <p>最近工作中需要使用富文本编辑器创建文本模板的业务需求，个人尝试了下TinyMCE的“打开方式”,顺便记录总结一下。</p>
      <p>
        <span class="red">一、安装方式如下</span>
        <pre>
1.CDN引入插件
2.script标签引入tinyMce src='https://cloud.tinymce.com/5/tinymce.min.js'
3. npm安装tinymce-vue
npm install @tinymce/tinymce-vue -S
        </pre>
      </p>
      <p>
        <span class="red">安装完成后会展示一个富文本编辑器界面，如下图：(富文本编辑器分为菜单栏和编辑区，可设置菜单栏是否显示和编辑区宽高)</span><br>
        <img src="../img/6/1.png" alt="截图">
      </p>
      <p>
        <span class="red">页面引入富文本组件</span><br>
        <img src="../img/6/2.png" alt="截图">
      </p>
      <p>
        <span class="red">编辑器配置：(可配置语言、宽高、插件功能、回调函数...) toolbar选项可配置指定插件</span><br>
        <img src="../img/6/3.png" alt="截图">
      </p>
      <p>
        <span class="red">引入自定义插件(部分功能插件需要引入，否则无法显示) </span><br>
        <img src="../img/6/4.png" alt="截图">
      </p>
      <p>
        <span class="red">富文本字数统计</span><br>
        <img src="../img/6/5.png" alt="截图"><br>
        注意：富文本编辑器中的样式都是内联形式存在的，插入标签的时候样式直接写在标签的style属性中。
      </p>
      <p>
        tinyMCE 官网：http://tinymce.ax-z.cn/ <br>
        https://www.tiny.cloud/docs/demo/file-picker/#
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