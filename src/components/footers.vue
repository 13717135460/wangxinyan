<template>
  <div class="my-footer">
    <!-- 备案信息 -->
    <div class="copyright">
      <span class="author">王新焱个人空间&nbsp;&nbsp;&nbsp;版权归属个人所有</span>
      <a href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener">粤ICP备 20006226号-1 Copyright © 2020 wangxinyan All Rights Reserved</a>
    </div>
  </div>
</template>

<script>
// import navtab from '@/views/navbar'

export default {
  name: 'my-footer',
  props: {
    msg: String
  },
  components: {
    // navtab
  },
  filters: {

  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.my-footer {
  width: 100%;
  height: 80px;
  box-shadow: 0 0px 10px 0 rgba(0,0,0,.1);
  .copyright {
    display: block;
    height: inherit;
    padding-top: 20px;
    font-size: 13px;
    background: rgba(0,0,0,.6);
    .author {
      display: block;
      margin-bottom: 8px;
    }
    a, span{
      color: #999;
      font-size: 13px;
      &:hover {
        color: #fff
      }
    }
  }
}
</style>
