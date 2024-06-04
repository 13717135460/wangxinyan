<template>
  <div class="my-navbar">
    <!-- 导航区域 -->
    <nav class="menu">
      <ul>
        <li class="title" v-for="(item, index) in navList" :key="index">
          <span class="txt" :class="{'active': $route.path === item.router}" @click="toggleClick(item.event)" v-text="item.text"></span>
        </li>
      </ul>
      <!-- 路由嵌套 页面内部跳转-->
      <!-- <router-view /> -->
    </nav>
    <!-- 底部区域 -->
    <!-- <footers></footers> -->
  </div>
</template>

<script>
// import footers from '@/views/index/footers'

export default {
  name: 'my-navbar',
  props: {
    msg: String
  },
  components: {
    // footers
  },
  filters: {

  },
  data () {
    return {
      navList: [{
        router: '/home',
        event: 'home',
        text: '首页'
      },{
        router: '/blog',
        event: 'blog',
        text: '博客'
      },{
        router: '/news',
        event: 'news',
        text: '新闻'
      },{
        router: '/soccer',
        event: 'soccer',
        text: '足球'
      },{
        router: '/case',
        event: 'case',
        text: '案例'
      }]
    }
  },
  methods: {
    toggleClick (router) {
      this.$router.push(`/${router}`)
    }
  }
}
</script>

<style lang="less" scoped>
.my-navbar {
  position: sticky;
  top: 0;
  z-index: 9;
  width: 1200px;
  height: 118px;
  line-height: 118px;
  margin: 0 auto;
  background-color: #e6e1e6;
  -webkit-user-select: none; // 禁止选中
  .menu {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    font-weight: bold;
    .title {
      display: inline-block;
      width: 200px;
      cursor: pointer;
      transition: all .6s;
      font-size: 26px;
      font-family: "NokiaGuYin", "Source Han Serif", serif;
      &:hover {
        color: #fa2f2f;
        transition: all .6s;
      }
      .txt {
        display: block;
      }
    }
    .active {
      color: #fa2f2f;
      transition: all .6s;
    }
    .title:last-child{
      margin-right: 0;
    }
  }
  .icp-txt {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    height: 60px;
    line-height: 60px;
    box-shadow: 0 0px 10px 0 rgba(0,0,0,.1);
  }
}
</style>
