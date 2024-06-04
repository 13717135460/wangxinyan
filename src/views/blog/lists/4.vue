<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>substring、slice、splice、split、match方法总结</h1>
      <p>js 常用的一些操作字符串和数组的方法经常容易混淆，忙里偷闲整理了一下，请看</p>
      <p>
        <span class="red">1. substring() 方法</span><br>
        用法：substring() 方法用于提取字符串中介于两个指定下标之间的字符。<br>
        语法：<span class="red">string.substring(start,stop) </span><br>
      </p>
      <p>参数图片：<br>
        <img src="../img/4/1.png" alt="截图"><br>
      </p>
      <p>
        示例：<br>
        let str = "0123456789"<br>
        str.substring(3)   // 3456789  从第三位开始截取，如果第二个参数忽略则截取到字符串末尾<br>
        str.substring(3,7)   // 3456  前包括后不包括<br>
        提示：substring 不支持负数，如果是负数会输出原字符串<br>
      </p>
      <p>
        <span class="red">2. substr() 方法</span><br>
        用法： substr() 方法可在字符串中抽取从 开始 下标开始的指定数目的字符。<br>
        提示： substr() 的参数指定的是子串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用<br>
        注意： ECMAscript 没有对该方法进行标准化，因此反对使用它<br>
        语法：string.substr(start, length)<br>
      </p>
      <p>参数图片：<br>
        <img src="../img/4/2.png" alt="截图"><br>
        示例：<br>
        let str = "0123456789"
        str.substr(0)   // 0   输入0会原字符串输出<br>
        str.substr(3))   // 3456789<br>
        str.substr(-3)   // 789<br>
        str.substr(3,5)  // 34567  <br>
        str.substr(3,6)  // 345678 从第三位截取，截取6位字符  （第二位参数不支持负数）<br>
      </p>
      <p>
        <span class="red">3. slice() 方法</span><br>
        用法：slice() 方法可从已有的数组中返回选定的元素。<br>
              slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。<br>
        语法：array.slice(start,end)<br>

        参数图片：<br>
        <img src="../img/4/3.png" alt="截图"><br>
        示例：<br>
        let arr = ["one", "two", "three","four", "five"]<br>
        arr.slice(1,3)  // ["two","three"]<br>
        let str = "0123456789"<br>
        str.slice(0)   // 原字符串输出<br>
        str.slice(3)   // 345678<br>
        str.slice(3,6)   // 345<br>
        str.slice(-3)   // 789<br>
        str.slice(0,-3)   // 0123456   ( 截取后三位 )<br>
        提示：数组和字符串处理结果一致
      </p>
      <p>
        <span class="red">4. splice() 方法</span><br>
        用法：splice() 方法用于添加或删除数组中的元素。<br>
        注意：这种方法会改变原始数组。<br>
        语法：array.splice(index,howmany,item1,...itemX)<br>
        参数图片：<br>
        <img src="../img/4/4.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">5. split() 方法</span><br>
        用法：split() 方法用于把一个字符串分割成字符串数组。<br>
        语法：string.split(separator,limit)<br>
        参数图片：<br>
        <img src="../img/4/5.png" alt="截图"><br>
        示例：<br>
        let str = "hello"<br>
        str.split("")  // ["h", "e", "l", "l", "o"]<br>
        str.split(" ") // ["hello"]<br>
        let str = "wang xin yan"<br>
        str.split(" ")  // ["wang", "xin", "yan"]<br>
        let str = "ni hao wagn xin yan"<br>
        str.split("", 3) // ["ni", "hao", "wang"]<br>
        使用一个字符作为分隔符:<br>
        let str = "how are you doing today"<br>
        str.split("o") // ["h","w are y","u d","ing t","day"]<br>
      </p>
      <p>
        <span class="red">6. join() 方法</span><br>
        用法：join() 方法用于把数组中的所有元素转换一个字符串。元素是通过指定的分隔符进行分隔的<br>
        语法：array.join()<br>
        参数图片<br>
        <img src="../img/4/6.png" alt="截图"><br>
        示例：<br>
        let arr = ["one","two","three"]<br>
        arr.join("")  // onetwothree<br>
        arr.join("-")  // one-two-three<br>
      </p>
      <p>
        <span class="red">7. match() 方法</span><br>
        用法：match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。<br>
        语法：string.match(regexp)<br>
        参数图片<br>
        <img src="../img/4/7.png" alt="截图"><br>
        示例：<br>
        let str = "the rain is mainly in the plain"<br>
        str.match(/ain/g)  // ["ain","ain","ain"]<br>
        str.match(/ain/g).length  // 3   有3处匹配字符串<br>
      </p>
      <p>
        <span class="red">8. replace() 方法</span><br>
        用法：replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。<br>
        语法：string.replace(searchvalue,newvalue)<br>
        参数图片<br>
        <img src="../img/4/8.png" alt="截图"><br>
        示例：<br>
        let str = "nihao wangxy"<br>
        str.replace(/nihao/gi,"hello")  // hello wangxy<br>
        提示：g 全局匹配  i是否忽略大小写<br>
        slice(),substr(),substring()基于子字符串创建新字符串的方法  |  slice()和splice()操作数组<br>
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