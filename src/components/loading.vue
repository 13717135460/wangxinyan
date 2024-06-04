<template>
  <!-- 加载弹窗 -->
	<div class="load-box" v-if="loadBox">
		<div class="mask"></div>
		<div class="load-cont">
		<div class="load-chase">
			<div class="load-dot"></div>
			<div class="load-dot"></div>
			<div class="load-dot"></div>
			<div class="load-dot"></div>
			<div class="load-dot"></div>
			<div class="load-dot"></div>
		</div>
		<div class="text" v-text="loadingTxt"></div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
			loadBox: true,
			loadingTxt: '加载中' // 加载文案
		}
	}
}
</script>

<style lang="less" scoped>
.load-box {
    position: relative;
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .load-cont {
      position: fixed;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;
      text-align: center;
      border-radius: 6px;
      background-color: rgba(0,0,0,.6);
      .text {
        position: absolute;
        bottom: 30px;
        font-size: 13px;
        color: #fff;
      }
    }
    .load-chase {
      width: 30px;
      height: 30px;
      position: relative;
      top: -20px;
      animation: loadChase 2.5s infinite linear both;
      .load-dot {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        animation: loadDot 2.0s infinite ease-in-out both
      }
      .load-dot:before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: #fff;
        border-radius: 100%;
        animation: skChaseDotBefore 2.0s infinite ease-in-out both
      }
      .load-dot:nth-child(1) {
        animation-delay: -1.1s
      }
      .load-dot:nth-child(2) {
        animation-delay: -1.0s
      }
      .load-dot:nth-child(3) {
        animation-delay: -0.9s
      }
      .load-dot:nth-child(4) {
        animation-delay: -0.8s
      }
      .load-dot:nth-child(5) {
        animation-delay: -0.7s
      }
      .load-dot:nth-child(6) {
        animation-delay: -0.6s
      }
      .load-dot:nth-child(1):before {
        animation-delay: -1.1s
      }
      .load-dot:nth-child(2):before {
        animation-delay: -1.0s
      }
      .load-dot:nth-child(3):before {
        animation-delay: -0.9s
      }
      .load-dot:nth-child(4):before {
        animation-delay: -0.8s
      }
      .load-dot:nth-child(5):before {
        animation-delay: -0.7s
      }
      .load-dot:nth-child(6):before {
        animation-delay: -0.6s
      }
      .load-txt {
        position: absolute;
        bottom: 30px;
        font-size: 13px;
        color: #fff;
      }
    }
  }
  @keyframes loadChase {
    100% {
      transform: rotate(360deg)
    }
  }

  @keyframes loadDot {
    80%, 100% {
      transform: rotate(360deg)
    }
  }
  @keyframes skChaseDotBefore {
    50% {
      transform: scale(0.4)
    }
    100%, 0% {
      transform: scale(1)
    }
  }
</style>