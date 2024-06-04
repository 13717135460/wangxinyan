<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>TeamViewer远程连接使用方法</h1>
      <p>TeamViewer 是一个非常简单、好用的远程工具。是一个用于远程控制，桌面共享和文件传输的简单快速的解决方案。可以实现局域网，城域网，广域网，内网与外网之间的远程控制，完全实现跨网段的远程，有效规避telnet的局域网限制！</p>
      <p>
        <span class="red">① TeamViewer官网下载地址： https://www.teamviewer.com/zhCN/  （个人版免费）比较人性化</span><br>
        <img src="../img/18/1.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">② 安装后的界面，默认会提供 "您的ID" 和 "密码"  （远程连接时需要填写）</span><br>
        <img src="../img/18/2.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">③ 输入 "伙伴ID" 点击链接，提示输入密码，点击"登录"即可远程伙伴的电脑</span><br>
        <img src="../img/18/3.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">④ 此外，TeamViewer 还可以远程 "会议演示"、"视频通话"、"远程电话"等便捷功能</span><br>
        <img src="../img/18/4.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">注意事项：</span><br>
        1、确保设置了无人值守密码，并都处于开机状态 <br>
        2、确保两台计算机安装同版本TeamViewer
      </p>
      <p>
        <span class="red">TeamViewer 工作原理：</span><br>
        A B两个站点要远程，B要登录到A，那么首先在A上的TeamViewer软件要先运行，根据自身主机情况生成一个唯一ID，然后向官方网站登录。官网根据这个ID记录A站点的信息，然后站点B上的TeamViewer软件运行，输入A站点的ID号，然后也向官网登录，官网根据这个ID与A站点匹配，于是就建立起一个B到A的直连（接）通道。这样，A站点对于B站点来说就是可见的了,实现了远程访问的目的。
      </p>
      <p></p>
      <p></p>
      <p></p>
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
    p {
      img {
        max-width: 665px;
      }
    }
  }
}
</style>