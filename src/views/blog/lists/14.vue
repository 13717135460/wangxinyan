<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>https建立连接过程</h1>
      <p>
        超文本传输安全协议（英语：Hypertext Transfer Protocol Secure，缩写：HTTPS，常称为HTTP over TLS，HTTP over SSL或HTTP Secure）是一种透过计算机网络进行安全通信的传输协议。https由http进行通信，用SSL/TLS来加密数据包。主要提供对网站服务器身份认证，保护数据的隐私与完整性。<br>
        <img src="../img/14/1.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">https解决的问题</span><br>
        1. https很好的解决了http的三个缺点（被监听、被篡改、被伪装），它不是一种新的协议，它是http+SSL的 <br>
          结合体，SSL是一种独立协议，所以其它协议比如smtp等也可以跟ssl结合。<br>
        2. https改变了通信方式，它由以前的http—–>tcp，改为http——>SSL—–>tcp；<br>
        3. https采用了共享密钥加密+公开密钥加密的方式<br>
      </p>
      <p>
        <span class="red">https的优点：</span><br>
        1. 防监听  数据是加密的，所以监听得到的数据是密文，hacker看不懂。<br>
        2. 防伪装  伪装分为客户端伪装和服务器伪装，通信双方携带证书由第三方颁布，很难伪造<br>
        3. 防篡改  https对数据做了摘要，篡改数据会被感知到。hacker即使从中改了数据也白搭。<br>
        https的缺点：https保证了通信的安全，但带来了加密解密消耗计算机cpu资源的问题 <br>
        <img src="../img/14/2.png" alt="截图"><br>
      </p>
      <p>对称加密和非对称加密</p>
      <p>
        <span class="red">对称加密（Symmetric Cryptography），又称私钥加密</span><br>
        对称加密是最快速最简单的一种加密方式，加密与解密用同样的密钥,这种方法在密码学中叫做对称加密算法。<br>
      </p>
      <p>
        <span class="red">非对称加密（Asymmetric Cryptography），又称公钥加密</span><br>
        加密和解密用不同的密钥，分为公钥和私钥，如果用公钥加密就用私钥解密；如果用私钥加密，则用公钥解密。
      </p>
      <p>
        <span class="red">加密特点：</span><br>
        1. 对称加密加密与解密使用的是同样的密钥，所以速度快，但由于需要将密钥在网络传输，所以安全性不高。<br>
        2. 非对称加密使用了一对密钥，公钥与私钥，所以安全性高，但加密与解密速度慢。<br>
      </p>
      <p>
        <span class="red">常用办法：</span><br>
        将对称加密的密钥使用非对称加密的公钥进行加密，然后发送出去，接收方使用私钥进行解密得到对称加密的密钥，然后双方可以使用对称加密来进行沟通。
      </p>
      <p>http与https的异同</p>
      <p>
        1. http与https都是出于第7层（应用层）协议 <br>
        2. HTTP+加密+认证+完整性保护=HTTPS <br>
        3. http默认端口为80，https默认端口为443<br>
        4. http连接是无状态的（不安全）https由ssl+http协议构建的可进行加密传输、身份认证的网络协议（安全）<br>
        <img src="../img/14/3.png" alt="截图"><br>
      </p>
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