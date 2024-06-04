<template>
  <div class="err-page">
    <div class="container">
      <h1>你访问的页面地球不存在哦！</h1>
      <div class="btn">
        <span @click="refresh">刷新试试</span>
        <span @click="goHome">返回主页</span>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'err-page',
  data () {
    return {

    }
  },
  methods: {
    refresh () {
      window.location.reload()
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
  .err-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    color: #fff;
    background: url('../../assets/common/img/404.png') no-repeat center;
    .container {
      position: absolute;
      left: 10%;
      bottom: 33%;
      h1 {
        font-size: 30px;
        font-weight: bold;
      }
      .btn {
        margin-top: 30px;
        span {
          display: inline-block;
          width: 130px;
          height: 36px;
          line-height: 36px;
          color: #293e73;
          font-weight: bold;
          background-color: #fff;
          border: 1px solid #fff;
          border-radius: 30px;
          margin-right: 30px;
          cursor: pointer;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>

