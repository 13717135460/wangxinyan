<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>js判断设备及环境</h1>
      <p>获取用户设备信息是前端常见的场景，本人搜集并亲测通过，现在分享一下~~~</p>
      <p>let u = navigator.userAgent &nbsp;&nbsp;&nbsp;// 获取用户设备信息</p>
      <p>
        <span class="red">// 是否IE内核</span><br>
        let trident = u.indexOf('Trident') > -1
      </p>
      <p>
        <span class="red">// 是否苹果，谷歌内核</span><br>
        let webkit = u.indexOf('AppleWebKit') > -1
      </p>
      <p>
        <span class="red">// 是否火狐内核</span><br>
        let gecko = u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1 
      </p>
      <p>
        <span class="red">// 是否安卓系统</span><br>
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
      </p>
      <p>
        <span class="red">// 是否ios系统-终端-包括ipad, Mac</span><br>
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) 
      </p>
      <p>
        <span class="red">// 是否移动设备</span><br>
        let mobile = !!u.match(/AppleWebKit.*Mobile.*/) 
      </p>
      <p>
        <span class="red">// 是否web应用程序</span><br>
        let webApp = u.indexOf('Safari') > -1
      </p>
      <p>
        <span class="red">// 是否iphone</span><br>
        let iphone = u.indexOf('iPhone') > -1
      </p>
      <p>
        <span class="red">// 是否ipad</span><br>
        let ipad = u.indexOf('iPad') > -1
      </p>
      <p>
        <span class="red">// 是否QQ浏览器</span><br>
        let qqbrw = u.indexOf('MQQBrowser') > -1
      </p>
      <p>
        <span class="red">// 是否微信环境</span><br>
        let isWX = u.toLowerCase().indexOf('micromessenger') !== -1
      </p>
      <p>非常实用的feature ！！！</p>
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