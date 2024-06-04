<template>
  <div class="my-website">
    <div class="introduce">
      <p class="introduce-item introduce-item1">我是王新焱</p>
      <p class="introduce-item introduce-item2">前端爱好者</p>
      <p class="introduce-item introduce-item3">爱好音乐、足球、编程</p>
    </div>
    <!-- 提示 -->
    <div class="icon-box" v-if="!isShow">
      <i class="icon-gesture"></i>
    </div>
    <div class="enter" @click="enterIndex">入口</div>
  </div>
</template>

<script>
import local from '@/utils/local'
// import session from '@/utils/session'

export default {
  name: 'my-website',
  components: {},
  // 局部过滤器
  filters: {
    formatMoney (value) {
      return '￥' + value.toFixed(2)
    }
  },
  data () {
    return {
      isShow: local.seek('isGesture')
    }
  },
  mounted () {
    
  },
  methods: {
    // 进入主页
    enterIndex () {
      this.$router.push('/home')
      local.set('isGesture', true)
    }
  }
}
</script>

<style lang="less" scoped>
.my-website {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color:#e6e1e6;
  background: url('../../assets/common/img/website-bg.png') no-repeat center;
  background-size: 100% 100%;
  -webkit-user-select:none;
  user-select:none;
  .container {
    margin-top: 100px;
      span {
        margin-right: 20px;
        cursor: pointer;
      }
      .link {
      margin-left: 10px;
      color: red;
    }
  }
  .introduce {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    line-height: 1.5;
    color: #363636;
    font-size: 88px;
    text-align: center;
    font-family: "STXingkai", "Source Han Serif", serif;
    .introduce-item {
      position: relative;
      margin: 0 auto;
      text-decoration: none;
      font-size: 88px;
      color: #363636;
    }
    .introduce-item:before{
      content: "";
      position: absolute;
      left: 50%;
      bottom: 15px;
      width: 0;
      height: 4px;
      background: rgba(0, 0, 0, .6);
      transition: all 1s;
    }
    .introduce-item:hover:before{
      width: 100%;
      left: 0;
      right: 0;
    }
    .introduce-item1 {
      width: 442px;
      -webkit-animation: downTxt 1s .6s ease-in-out both;
      animation: downTxt 1s .6s ease-in-out both;
    }
    .introduce-item2 {
      width: 442px;
      -webkit-animation: downTxt2 1s 1.2s ease-in-out both;
      animation: downTxt2 1s 1.2s ease-in-out both;
    }
    .introduce-item3 {
      width: 882px;
      -webkit-animation: downTxt3 1s 1.8s ease-in-out both;
      animation: downTxt3 1s 1.8s ease-in-out both;
    }
  }
  .icon-box {
    position: fixed;
    left: 150px;
    bottom: 82px;
    z-index: 9;
    -webkit-animation: gesture 1s;
    animation: gesture 1s both;
    animation-iteration-count: infinite; // 定义动画播放次数，infinite指定播放无限次数
    .icon-gesture {
      display: inline-block;
      width: 70px;
      height: 53px;
      background: url('../../assets/common/img/go-home.png') no-repeat;
      background-size: 100% 100%;
      transform: rotate(-30deg);
    }
  }
  .enter {
    position: fixed;
    left: 50px;
    bottom: 50px;
    z-index: 9;
    width: 76px;
    height: 76px;
    cursor: pointer;
    color: transparent;
    background: url('../../assets/common/img/enter.png') no-repeat;
  }
  
}
// 自定义动画
@keyframes downTxt {
  0%{
    opacity:0;
    -webkit-transform:translate3d(0, -10px, 0);
    transform:translate3d(0, -10px, 0);
  }100%{
    opacity:1;
    -webkit-transform:translate3d(0, 0, 0);
    transform:translate3d(0, 0, 0);
  }
}

@keyframes downTxt2 {
  0%{
    opacity:0;
    -webkit-transform:translate3d(0, -10px, 0);
    transform:translate3d(0, -10px, 0);
  }100%{
    opacity:1;
    -webkit-transform:translate3d(0, 0, 0);
    transform:translate3d(0, 0, 0);
  }
}
@keyframes downTxt3 {
  0%{
    opacity:0;
    -webkit-transform:translate3d(0, -10px, 0);
    transform:translate3d(0, -10px, 0);
  }100%{
    opacity:1;
    -webkit-transform:translate3d(0, 0, 0);
    transform:translate3d(0, 0, 0);
  }
}

@keyframes gesture {
  0% {
    position: fixed;
    left: 150px;
    bottom: 82px;
  }
  50% {
    position: fixed;
    left: 130px;
    bottom: 72px;
  }
  100% {
    position: fixed;
    left: 150px;
    bottom: 82px;
  }
}
</style>
