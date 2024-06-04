<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>ES6新特性</h1>
      <p>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的新标准，历时6年，在 2015 年 6 月正式发布了。它的目标是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</p>
      <p>
        <span class="red">为什么用 ES6 ？</span><br>
        1. 新一代 javascript 标准，提供了很多新的API，解决了es5的很多痛点。<br>
        2. 前端开发新趋势
      </p>
      <p>
        <span class="red">① let 和 const</span><br>
        ES6 新增了let命令，它的用法类似于var用来声明变量。<br>
        1. let 命令所在的代码块内有效 <br>
        2. let 在同一代码块内不允许重复声明 <br>
        3. const 声明一个只读的常量，一旦声明，值不能改变 <br>
        <img src="../img/16/1.png" alt="截图"><br>
        相同点 <br>
        1. 只在声明所在的块级作用域内有效 <br>
        2. 只能在声明的位置后面使用<br>
        3. 不可重复声明<br><br>

        不同点<br>
        1. let声明变量的值和类型都可以改变；<br>
        2. const声明的常量不可以改变，一旦声明，就必须立即初始化，不能以后再赋值
      </p>
      <p>
        <span class="red">② 模板字符串</span><br>
        什么是模板字符串：es6新语法，使用``(反引号) 进行代码换行，拼接，插值等操作。<br>
        传统字符串拼接痛点：<br>
        1. 不能正常换行<br>
        2. 不能插入变量<br>
        3. 不能友好处理单双引号和标签嵌套<br><br>
        模板字符串两大特点<br>
        1. 支持变量注入 <br>2. 支持换行，嵌套<br>
        <pre>
// 模板字符串
let name = "lexin"
let age = 5
let address = "shenzhen"
var info = `我是${name}，我今年${age}岁了,我在${address}`
console.log(info)
        </pre>
      </p>
      <p>
        <span class="red">③ 箭头函数</span><br>
        ES6箭头函数三个特点<br>
        1. 不需要function关键字创建函数，代码精简<br>
        2. 省略return 关键字<br>
        3. 改变this指向，永远指向全局作用域<br>
        <pre>
// es6 this指向全局作用域
var name = "张三"
    var obj = {
      name: "李四",
      foo:()=> {
        alert(this.name)
      }
    }
obj.foo()
        </pre>
        <span class="red">promise 异步编程的解决方案</span><br>
        Promise是一个构造函数，将异步操作以同步操作的流程表达出来，避免层次嵌套的回调函数。<br>
        Promise有三种状态： pending 等待状态   resolved 成功状态   rejected  失败状态 <br>
        <img src="../img/16/4.png" alt="截图"><br>
        promise意义在于then链式调用，避免了函数层层嵌套，将“嵌套关系”转变为“链式步骤关系”
      </p>
      <p>
        <span class="red">④ 表达式解构</span><br>
        解构是ES6新特性，按照一定模式，从数组和对象中提取数据，对变量进行赋值的过程。<br>
        作用：可以快速取得数组或对象当中的元素或属性，而无需使用 arr[x] 或 obj[key] 等传统方式进行赋值。 <br>
        <pre>
// 嵌套对象解构
var obj = {
  name: "张三",
  sex: "男",
  age: 26,
  son: {
    sonname: "张小三",
    sonsex: "男",
    sonage: 1
  }
}

// es6解构
var {name, sex, age, son:{sonname, sonsex, sonage}} = obj
console.log(`${name}的儿子是${sonname},今年${sonage}岁啦~`)
        </pre>
      </p>
      <p>
        <span class="red">⑤ fetch</span><br>
        Fetch 是浏览器提供的原生 AJAX 接口。与XMLHttpRequest类似，都是用来发送网络请求。区别在于Fetch API使用Promise 结构，比XMLHttpRequest更加简单易用。<br>
        <img src="../img/16/6.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">fetch、ajax、axios 对比</span><br>
        <img src="../img/16/7.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">⑥ es7  async/await</span><br>
        promise和async/await都是异步解决方案，promise是es6的新语法，而async/await是es7新出的特性。<br>
        <pre>
// async 异步调用
async function getData() {
  return "这个是异步方法"
}

getData().then(data => {
  console.log(data)
})
console.log("虽然在后面，但是我先执行")
        </pre>
        <pre>
// 添加async 关键字
let sleep = function (time) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolved()
    }, time)
  })
}

let sleeps = async function() {
  console.log("start")
  await sleep(2000)
  console.log("end")
}
sleeps()
// async / await 使异步代码看起来像同步直观
        </pre>
      </p>
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

  }
}
</style>