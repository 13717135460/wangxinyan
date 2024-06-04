<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>WebSocket初体验</h1>
      <p>Websocket之前获取后端数据需要前端主动发起请求，后端相应后获取最新数据，如果需要实时获取前端需要轮询（即浏览器通过js启动一个定时器，每隔一段时间发送一次请求）来获取服务器最新信息，轮询效率非常低，需要保持长连接，实时性不够，频繁操作带来的服务器压力，websocket是解决这个通讯痛点而生。</p>
      <p>webSocket 是HTML5新增的一种网络通信协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道(全双工通讯)，在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送，服务器可以在任意时刻发送消息给浏览器。</p>
      <p>
        <img src="../img/5/1.png" alt="截图"><br>
        最大特点：服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。
      </p>
      <p>
        <span class="red">websocket 特点：</span><br>
        （1）建立在 TCP 协议之上，服务器端的实现比较容易。<br>
        （2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。<br>
        （3）数据格式比较轻量，性能开销小，通信高效。<br>
        （4）可以发送文本，也可以发送二进制数据。<br>
        （5）没有同源限制，客户端可以与任意服务器通信。<br>
        （6）协议标识符ws  如果加密 wss，服务器网址即是URL地址<br>
      </p>
      <p>
        <span class="red">websocket 语法</span><br>
        let ws = new WebSocket(url, [protocol]);<br>
        第一个参数url，指定连接URL必传， 第二个参数可选，指定可接受的子协议<br>
      </p>
      <p>
        <span class="red">websocket 事件和方法</span><br>
        <img src="../img/5/2.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">1.新建websocket构造函数</span><br>
        let ws = new WebSocket('ws://localhost:8080');<br>
        创建后客户端就会和服务器进行连接<br>
        <span class="red">2.websocket 4种状态</span><br>
        （1） connecting(连接)  值为0   表示正在连接<br>
        （2） open    值为1    表示连接成功，可以正常通讯了<br>
        （3） closing   值为2    表示连接正在关闭<br>
        （4） closed   值为3   表示连接已经关闭，或者打开连接失败<br>
        （DEMO图）如下：<br>
         <img src="../img/5/3.png" alt="截图"><br>
         <pre>
webSocket.bufferedAmount
实例对象的bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去,用来判断发送是否结束。
let  data = new ArrayBuffer(10000000);
socket.send(data);

if (socket.bufferedAmount === 0) {
    // 发送完毕
} else {
    // 发送还没结束
}
webSocket.onerror 实例对象的onerror属性，用于指定报错时的回调函数。
socket.onerror = function(event) {
    // handle error event
};
socket.addEventListener("error", function(event) {
    // handle error event
});
         </pre>
      </p>
      <p>WebSocket 协议本质上是一个基于 TCP 的协议。为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。</p>
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