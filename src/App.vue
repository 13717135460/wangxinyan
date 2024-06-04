<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <!-- 导航 -->
      <!-- <navbar></navbar> -->
      <!-- <router-view v-if="isRouterAlive" /> -->
      <router-view v-if="isRouterAlive"></router-view>
    </transition>
  </div>
</template>

<script>
// import index from '@/views/index'
// import navbar from '@/views/index/navbar'
import '@/assets/common/css/global.css'
import './api/index.js' // 导入api

export default {
  name: 'app',
  components: {
    // index
    // navbar,
    // footers
  },
  // 注入
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    // 重新载入
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color:#e6e1e6;
  background-size: 100% 100%;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.case-box h1 {
  margin-bottom: 30px;
}
.case-box ul li {
  margin-top: 10px;
}
.case-box .red {
  color: #fa2f2f;
}
.case-box .eg-box {
  margin-top: 30px;
}
.case-box .eg-box pre {
  font-family: inherit;
}
.case-box .scene {
  margin: 30px 0 5px;
  color: #409eff;
}
.case-box .solve {
  margin: 30px 0 5px;
  color: #17b23c;
}
</style>
