<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>正则表达式总结</h1>
      <p>正则表达式，又称规则表达式，是一种文本模式，通常用来检索、替换和控制文本。主要包括a 到 z 的字母以及一些特殊的元字符。</p>
      <p>正则表达式的应用范围非常之广泛，最初是由Unix普及开来的，后来在广泛运用于Scala 、PHP、C# 、Java、C 、Objective-c、Perl 、Swift、VBScript 、Javascript、Ruby 以及Python等等。</p>
      <p><span class="red">1. 什么是正则表达式</span><br>正则表达式是一种特殊的字符串模式，用于匹配一组字符串，就好比用模具做产品，而正则就是这个模具，定义一种规则去匹配符合规则的字符。</p>
      <p><span class="red">2. 为什么要用正则表达式？</span><br>常用的搜索、替换、匹配、过滤、文本和数据验证的操作是正则表达式最常见的应用场景,在各行各业中有着广泛的应用。</p>
      <p><span class="red">3. 常用的正则在线匹配工具：</span> https://rubular.com/</p>
      <p><span class="red">4. 正则表达式语法</span><br>
        "^" ：^会匹配行或者字符串的起始位置，有时还会匹配整个文档的起始位置。 <br>
        "$" ：$会匹配行或字符串的结尾<br>
        例子：   表达式：^[0-9] abc$ <br>
        ^ 匹配输入字符串的开始位置。<br>
        [0-9] 匹配多个数字， [0-9] 匹配单个数字， 匹配一个或者多个。<br>
        abc$ 匹配字母 abc 并以 abc 结尾，$ 为匹配输入字符串的结束位置<br>
        <span class="red">注意：表达式的结尾处的g (代表全局匹配标记)、 i (代表不区分大小写标记)</span>
      </p>
      <p>图例如下：<br>
        <img src="../img/3/1.jpg" alt="截图">
      </p>
      <p>正则表达式具体的规则如下：<br>
        <img src="../img/3/2.png" alt="截图" width="94%"><br>
        <img src="../img/3/3.png" alt="截图" width="94%"><br>
        <img src="../img/3/4.png" alt="截图"><br>
        <img src="../img/3/5.png" alt="截图"><br>
      </p>
      <p>
        原子是正则表达式中最基本的组成单位，每个正则表达式中至少包含一个原子。<br>
        常见的原子类型有：<br>
        普通字符作为原子 如：a b c 字母<br>
        非打印字符作为原子 如：\n \t<br>
        通用字符作为原子 如：\d \D \w \W \s \S<br>
        原子表 如：多个原子拼接在一起<br>
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