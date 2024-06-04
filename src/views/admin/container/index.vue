<template>
  <div class="container">
    <h1>这是后台系统页面</h1>
    <div class="login-box">
      table
    </div>
  </div>    
</template>

<script>
// import footers from '@/views/index/footers'
// import blog from '@/views/blog'

export default {
  name: 'container',
  components: {
    // footers
    // blog
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container {
  h1 {
    font-size: 36px;
    font-weight: bold;
  }
  margin-top: 100px;
  span {
    margin-right: 20px;
    cursor: pointer;
  }
  .login-box {
    width: 500px;
    margin: 100px auto 0;
  }
}
</style>
