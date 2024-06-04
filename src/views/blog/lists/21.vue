<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>css3 实现半像素边框</h1>
      <p>
        众所周知，普通1像素的边框实现如下<br>border:1px solid #000;
      </p>
      <p>半像素边框当然不是简单地把1px改为0.5px,浏览器中最小的像素单位为1像素，是不能识别0.5个像素，所以我们只能变换一下思路（伪元素+缩放）实现0.5像素边框效果。</p>
      <p>
        <span class="red">1.设置目标元素作为定位参照</span><br>
        box { position:relative }
      </p>
      <p>
        <span class="red">2.给目标元素添加一个伪元素before或者after，并设置绝对定位</span><br>
        .box:before { content:""; position:absolute; }
      </p>
      <p>
        <span class="red">3.给伪元素添加1px边框</span><br>
        border:1px solid #000;
      </p>
      <p>
        <span class="red">4.设置伪元素的宽高为目标元素的2倍</span><br>
        width:200%; height:200%;
      </p>
      <p>
        <span class="red">5.缩小0.5倍（缩放到原来大小）</span><br>
        transform-origin: 0 0;
        transform:scale(0.5,0.5);
      </p>
      <p>
        <span class="red">6.把border 边框在线框内绘制</span><br>
        box-sizing:border-box;<br>
        示例<br>
        <img src="../img/21/1.png" alt="截图"><br>
        注意：上边框用 ：before   下边框用  ：after<br>
        源码如下：<br>
      </p>
      <p>
        <pre>
<span class="red">方法一:上边框缩放</span><br>
0.5像素上边框 （适合顶部边框或底部边框）
---------------------------------------------
.line-top {
  position: relative;
}
.line-top:before {
  position: absolute;
  content: '';
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  top: 0;    （top:0  上边框    bottom:0 下边框）
  left: 0;
  width: 100%;
  border-top: 1px solid green;  （border-top 和 top 要对应）
  z-index: 10;
}
        </pre>
      </p>
      <p>
        <pre>
<span class="red">方法二:上下边框缩放</span><br>
0.5像素上边框 （适合四周全边框）
-----------------------------------
.line-top {
  position: relative;
}
.line-top:before {
  content: '';
  position: absolute;
  top:0;    
  left:0;
  width: 200%;
  height: 200%;
  border-top: 1px solid green;
  border-bottom: 1px solid green;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scale(0.5, 0.5);
  transform: scale(0.5, 0.5);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
        </pre>
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