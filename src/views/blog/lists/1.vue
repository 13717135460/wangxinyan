<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>html2canvas截图工具初体验</h1>
      <p class="section">html2canvas 能够实现在用户浏览器端直接对整个或部分页面进行截屏，html2canvas脚本将当页面渲染成一个Canvas图片它不需要来自服务器任何渲染，整张图片都是在客户端浏览器创建。</p>
      <p class="section"><span class="red">html2canvas 截图原理</span><br>它不做实际的屏幕截图，而是基于DOM节点的截图，根据获取DOM的样式表来渲染页面，部分css样式不起作用，对于生成的图片来说，不能100%准确</p>
      <pre style="color:#666;">
      <span class="red">// 要截图的DOM</span>
      &lt;div id="sharePic"&gt;
      &lt;img :src="xxx.png"/&gt;
      &lt;p >这是分享的内容&lt;/p&gt;
      &lt;/ div&gt;

      methods: {
        getSharePic () {
          let _this = this
          
          <span class="red">// 要绘制图片的DIV</span>
          let shareBox = document.getElementById('sharePic')
          
          <span class="red">// 返回元素的宽度（包括元素宽度、内边距和边框，不包括外边距）</span>
          let width = shareBox.offsetWidth
          
          <span class="red">// 返回元素的高度（包括元素高度、内边距和边框，不包括外边距）</span>
          let height = shareBox.offsetHeight
          
          <span class="red">// 返回元素的上外缘距离最近采用定位父元素内壁的距离</span>
          let offsetTop = shareBox.offsetTop
          
          <span class="red">// 创建canvas画布</span>
          let canvas = document.createElement_x_x_x_x_x_x_x_x('canvas')
          
          <span class="red">// 指定绘图类型为二维绘图，未来如果支持3D绘图，就可以传递3d参数</span>
          let context = canvas.getContext("2d")
          
          <span class="red">// 返回当前显示设备的物理像素分辨率与css像素分辨率的比率，可理解为像素大小比率</span>
          let scaleBy = Math.ceil(window.devicePixelRatio)
          
          <span class="red">// 定义画布的宽度</span>
          canvas.width = width * scaleBy
          
          <span class="red">// 定义画布的高度</span>
          canvas.height = (height + offsetTop) * scaleBy
          
          let params = {
          useCORS: true, // 允许加载跨域的图片
          tainttest: true, // 检测每张图片都已经加载完成
          scale: scaleBy, // 添加的scale 参数
          canvas: canvas, // 自定义 canvas
          logging: false, // 日志开关，发布的时候记得改成false
          width: width,  // DOM 原始宽度
          height: height // DOM 原始高度
          }

          html2canvas(shareBox, params).then(function(canvas) {
            // 获取到图片的url
          let url = canvas.toDataURL()
          })
        }
      }
      </pre>
      <p class="section">
        <span class="red">案例：</span><br>
        <span class="red">DOM 结构页面</span>
      </p>
      <p>
        <img src="../img/1/1.png" alt="截图">
      </p>
      <p class="section">html2canvas 生成图  （ 弹窗内 ） url 形式base64格式呈现</p>
      <p>
        <img src="../img/1/2.png" alt="截图">
      </p>
      <p>
        <span class="red">注意点：</span><br>
        1.不能渲染出动画的节点，否则生成的图片是破裂的<br>
        2.需要开启useCORS配置项，否则微信图片等外部图片会加载不出来<br>
        3.html2canvas 截图精度不高，部分css属性不起作用，不能完美呈现原画面样式
      </p>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/index/navbar'

export default {
  name: 'my-blogs',
  components: {
    navbar,
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