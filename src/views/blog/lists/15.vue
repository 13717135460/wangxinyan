<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>webpack打包原理及webpack4新特性介绍</h1>
      <p>webpack是一个JS应用打包器, 它将应用中的各个模块打成一个或者多个bundle文件。借助loaders和plugins，它可以改变、压缩和优化各种各样的文件。输入不同资源，比如：html、css、js、img、font文件等，然后将它们输出浏览器可以正常解析的文件。</p>
      <p>
        <span class="red">打包工具要解决的问题：</span><br>
        1.文件依赖管理 梳理文件之间的依赖关系<br>
        2.资源加载管理 处理文件的加载顺序（先后时机）和文件的加载数量（合并、嵌入、拆分）<br>
        3.效率与优化管理 提高开发效率，完成页面优化<br>
      </p>
      <p>
        <span class="red">webpack的工作步骤如下：</span><br>
        1.从入口文件开始递归地建立一个依赖关系图。<br>
        2.把所有文件都转化成模块函数。<br>
        3.根据依赖关系，按照配置文件把模块函数分组打包成若干个bundle。<br>
        4.通过script标签把打包的bundle注入到html中，通过manifest文件来管理bundle文件的运行和加载。<br>
      </p>
      <p>
        <span class="red">打包的规则为：</span><br>
        一个入口文件对应一个bundle。该bundle包括入口文件模块和其依赖的模块。按需加载的模块或需单独加载的模块则分开打包成其他的bundle。除了这些bundle外，还有一个特别重要的bundle，就是manifest.bundle.js文件，即webpackBootstrap。这个manifest文件是最先加载的，负责解析webpack打包的其他bundle文件，使其按要求进行加载和执行。
      </p>
      <p>
        <span class="red">webpack manifest文件作用：</span><br>
        用来引导所有模块的交互。manifest文件包含了加载和处理模块的逻辑。当webpack编译器处理和映射应用代码时，它把模块的详细的信息都记录到了manifest文件中。当模块被打包并运输到浏览器上时，runtime就会根据manifest文件来处理和加载模块。利用manifest就知道从哪里去获取模块代码。
      </p>
      <p>
        <span class="red">.map 文件是什么：</span><br>
        Webpack打包生成的.map后缀文件，使得我们的开发调试更加方便，它能帮助我们链接到断点对应的源代码的位置进行调试。
      </p>
      <p>
        <span class="red">.map文件的作用：</span><br>
        项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错（方便调试）  
      </p>
      <p>从下图可以看出，webpack可以处理不同类型的模块。除js外，还能处理less，css，jade，coffeeScript等。原理是通过Loader来适配各种非js资源，将它们（除图片资源外）全都转换成js模块。</p>
      <p>
        <img src="../img/15/1.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">webpack4 介绍</span><br>
        webpack 于2018年2月25日正式发布v4.0.0版本代号legato。本次大版本更新带来了很多新特性更新和改善，这将会让webpack的配置更加简单。<br>
        环境支持在发布日志里的 Big changes 板块，官方宣布不在支持Node 4, Node 6 使用的是v8 5.0版本，支持93%的ES6语法。不难看出，这个决定是为了更好的利用ES6语法的优势，来编写出更加整洁和健壮的代码。<br>
        mode 属性<br>
        另一个大的改变是webpack需要设置mode属性，可以是 development 或 production。通过mode, 你可以轻松设置打包环境。如果你将 mode 设置成 development，你将获得最好的开发阶段体验。这得益于webpack针对开发模式提供的特性：<br>
        <span class="red">浏览器调试工具</span><br>
        注释、开发阶段的详细错误日志和提示<br>
        快速和优化的增量构建机制<br>
        如果你将mode设置成了 production, webpack将会专注项目的部署，包括以下特性：<br>
        <span class="red">开启所有的优化代码</span><br>
        更小的bundle大小<br>
        去除掉只在开发阶段运行的代码<br>
        Scope hoisting和Tree-shaking <br>
        <span class="red">插件和优化 </span><br>
        webpack4删除了CommonsChunkPlugin插件，它使用内置API optimization.splitChunks 和 optimization.runtimeChunk ，这意味着webpack会默认为你生成共享的代码块。
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