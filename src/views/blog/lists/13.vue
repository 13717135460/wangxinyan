<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>什么是跨域，怎么解决跨域？</h1>
      <p>
        <span class="red">1.什么是跨域</span><br>
        跨域是指浏览器不能执行其他网站的脚本。它是浏览器同源策略造成的，是浏览器对JS实施的安全限制。
      </p>
      <p>
        <span class="red">2.常见的跨域场景</span><br>
        <img src="../img/13/1.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">3.什么是同源策略？ （所谓同源是指：“域名”、“协议”“端口”均为相同）</span><br>
        同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。<br>
        同源策略限制以下行为 <br>
        1. Cookie、LocalStorage 和 IndexDB 无法读取<br>
        2. DOM 和 Js对象无法获得<br>
        3. AJAX 请求不能发送<br>
        注意：跨域限制是浏览器的机制，如果直接在服务端请求，是不会触发跨域限制的。<br>
      </p>
      <p>
        <span class="red">4.跨域的解决办法？</span><br>
        jsonp跨域<br>
        jsonp跨域其实也是JavaScript设计模式中的一种代理模式。在html页面中通过相应的标签从不同域名下加载静态资源文件是被浏览器允许的，
        所以我们可以通过这个“犯罪漏洞”来进行跨域。一般，我们可以动态的创建script标签，再去请求一个带参网址来实现跨域通信<br>
      </p>
      <p>
        // 原生的实现方式 <br>
        let script = document_createElement_x_x_x_x_x('script'); <br>
        script.src = 'http://www.nealyang.cn/login?username=Nealyang&callback=callback'; <br>
        document.body.a(script); <br>
        function callback(res) { <br>
        &nbsp;&nbsp;&nbsp;console.log(res); <br>
        }
      </p>
      <p>
        <span class="red">5.跨域解决方案：</span><br>
        1、通过jsonp跨域<br>
        2、document.domain + iframe跨域<br>
        3、location.hash + iframe<br>
        4、window.name + iframe跨域<br>
        5、postMessage跨域<br>
        6、跨域资源共享（CORS）<br>
        7、nginx代理跨域<br>
        8、nodejs中间件代理跨域<br>
        9、WebSocket协议跨域<br>
      </p>
      <p>
        <span class="red">6.什么是JSONP？</span><br>
        JSONP（JSON with Padding）是资料格式 JSON 的一种“使用模式”，可以让网页从别的网域要资料。由于同源策略，一般来说位于 server1.example.com 的网页无法与不是 server1.example.com 的服务器沟通，
        而 HTML 的 script 元素是一个例外。利用 script 元素的这个开放策略，网页可以得到从其他来源动态产生的 JSON 资料，而这种使用模式就是所谓的 JSONP。
      </p>
      <p>
        <span class="red">7.什么是JSON？</span><br>
        JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。 易于人阅读和编写。同时也易于机器解析和生成。<br>
        JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。 这些特性使JSON成为理想的数据交换语言
      </p>
      <p>
        <span class="red">8. JSON的优点：</span><br>
        1.基于纯文本，跨平台传递极其简单；<br>
        2.Javascript原生支持，后台语言几乎全部支持；<br>
        3.轻量级数据格式，占用字符数量极少，特别适合互联网传递；<br>
        4.可读性较强，虽然比不上XML那么一目了然，但在合理的依次缩进之后还是很容易识别的；<br>
        5.容易编写和解析；
      </p>
      <p>
        <span class="red">9.json 和 jsonp 的区别？</span><br>
        JSON是一种数据交换格式（采用键值对的方式，无序组合，数组是有序组合），而JSONP是一种非官方跨域数据交互协议
      </p>
      <p>
        <span class="red">10. 跨域资源共享（CORS）</span><br>
        CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
        它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
        普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。
        目前，所有浏览器都支持该功能，CORS也已经成为主流的跨域解决方案。
      </p>
      <p>
        <span class="red">11. JSONP 和 CORS 比较</span><br>
        JSONP 只能实现 GET 请求，而 CORS 支持所有类型的 HTTP 请求。使用 CORS ，开发者可以是使用普通的 XMLHttpRequest 发起请求和获取数据，比起 JSONP 有更好的错误处理。虽然绝大多数现代的浏览器都已经支持 CORS，但是 CORS 的兼容性比不上 JSONP，一些比较老的浏览器只支持 JSONP
      </p>
      <p>参考：https://www.imooc.com/article/21976       https://www.jianshu.com/p/f880878c1398</p>
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