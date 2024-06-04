<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>html字体小于12px解决方案</h1>
      <p><span class="red">移动端页面显示12px 以下显示效果！！！ （见下图）</span></p>
      <p>
        <img src="../img/20/1.png" alt="截图"><br>
        8px 大小完美呈现出来了~~~
      </p>
      <p>
        图2 <br>
        <img src="../img/20/2.png" alt="截图"><br>
      </p>
      <p>
        从上面的图2可以很明显看出谷歌下 css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px;浏览器为了页面显示效果，不支持12px以下字体的（文字太小影响页面布局及美观），但可以另辟蹊径例如（css3用缩放属性scale()）
      </p>
      <p>
        <span class="red">transform: scale(0.8);    12px*0.8 = 9.6px;</span><br>
        <span class="red">display:inline-block;  / / 内联元素需要设置此属性</span>
      </p>
      <p>
        利用css3的缩放，其最终大小就是：12px * 0.8（缩放比例） = 9.6px; <br>
        <span class="red">*</span> 如果是行内元素需要给元素定义display:block;属性
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