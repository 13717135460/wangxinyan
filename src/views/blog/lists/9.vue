<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>OCR使用总结</h1>
      <p>OCR技术全称是光学字符识别(Optical Character Recognition),通过扫描等光学输入方式将各种票据、报刊、书籍、文稿及其它印刷品的文字转化为图像信息，再利用文字识别技术将图像信息转化为计算机输入技术。</p>
      <p><span class="red">主要作用</span>：用于银行票据，大量文字资料，文案录入和处理等领域，通过OCR识别技术，将图片信息处理为文字信息的过程。解放了人力的输入。</p>
      <p>目前市场上已有很多家公司提供OCR识别的技术了，例如：腾讯云OCR、阿里云OCR、旷视OCR等，主要提供一些通用印刷体、身份证、车牌号、营业执照、银行卡、手写体、增值税发票等识别，避免人为输入的错误。</p>
      <p>
        下面以腾讯云为例：<br>
        使用OCR需要通过签名才能使用服务，主要是为了身份识别和计费 <br>
        <img src="../img/9/1.png" alt="截图"><br>
        拿到签名信息后才能使用腾讯云OCR服务<br>
        <img src="../img/9/2.png" alt="截图"><br>
        请求接口：https://recognition.image.myqcloud.com/ocr/bankcard <br>
      </p>
      <p>
        需要注意的是<br>
        1.post 请求需要添加一个headers请求头，签名信息需要放在headers中<br>
        2.需要识别的图片必须转换成base64格式作为入参传递<br>
        OCR作为腾讯对外输出一项开放能力，自然不可能免费使用的，不同的场景收费不同，顺便附上收费图<br>
        <img src="../img/9/3.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">以下是个人银行卡OCR的实践</span><br>
        <img src="../img/9/4.gif" alt="截图"><br>
        手机APP中经常需要我们输入身份证和绑定银行卡，OCR是一项非常不错的技术，给了用户一个非常好的体验。
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