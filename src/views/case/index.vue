<template>
  <div class="my-case">
    <navbar></navbar>
    <div class="container">
    <menu-tools></menu-tools>
    <!-- 让子路由页面在该页面内部展示 -->
    <router-view />
    </div>
  </div>
</template>

<script>
import navbar from '@/views/index/navbar'
import MenuTools from '@/components/menu'

export default {
  name: 'my-case',
  components: {
    navbar,
    MenuTools
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
.my-case {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  &::-webkit-scrollbar {
		width: 6px;
		background-color: #F5F5F5;
	}
	/*定义滚动条轨道 内阴影+圆角*/
	&::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: #F5F5F5;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
	}
	/*定义滑块 内阴影+圆角*/
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: rgba(0, 0, .0, .1);
	}
  .container {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    .title {
      text-align: left;
    }
  }
}
</style>
