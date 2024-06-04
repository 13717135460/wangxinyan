<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>ES6操作对象和数组新方法</h1>
      <p>随着es6的发布，新版标准提供了很多新的api，给了开发人员提供了很大的帮助，操作简便，提升效率，现在主要讲下es6提供新的操作数组和对象的一些常用方法。</p>
      <p>
        <b>数组的操作</b> <br>
        <span class="red">Object.entries() </span><br>
        作用：将一个对象中可枚举属性的键名和键值按照二维数组的方式返回。若对象是数组，则会将数组的下标作为键值返回。<br>
      </p>
      <p>
        Object.entries({ one:1,two: 2}) // [['one', 1], ['two', 2]] <br>
        Object.entries([1, 2]) // [['0', 1],['1', 2]]<br>
        Object.keys() Object.values()<br>
        作用：只返回自己的键值对中属性的值。它返回的数组顺序，也跟Object.entries()保持一致<br>
        var obj = { foo:'bar',baz: 42};<br>
        console.log(Object.keys(obj)) // ["foo", "baz"] 返回key<br>
        console.log(Object.values(obj)) // ["bar", 42] 返回value<br>
        console.log(Object.entries(obj)) // [["foo","bar"],["baz",42]]<br>
      </p>
      <p>
        Array.prototype.includes() <br>
        作用：includes()是查找一个值在不在数组里,若是存在则返回true,不存在返回false ['a','b','c'].includes('a') // true<br>
        ['a','b','c'].includes('A') //false<br>
        ['a','b','c'].includes('d') //false<br>
      </p>
      <p>
        要搜索的值和搜索的开始索引(接收2个参数)<br>
        ['a','b','c','d'].includes('b') // true <br>
        ['a','b','c','d'].includes('b', 1) // true <br>
        ['a','b','c','d'].includes('b', 2) // false<br>
      </p>
      <p>
        includes与ES6中的indexOf() 比较 <br>
        ['a','b','c'].indexOf('a') // 0<br>
        ['a','b','c'].indexOf('b') //1<br>
        ['a','b','c'].indexOf('c') // 2 <br>
        ['a','b','c'].indexOf('d') //-1<br>
        includes()返回是布尔值,能直接判断数组中存不存在这个值，而indexOf()返回的是索引，这点前者更加方便。 ES6为Array增加了find()，findIndex() 函数。<br>
      </p>
      <p>
        findIndex((value,index,arr) 三个参数：<br>
        value：每一次迭代查找的数组元素。<br>
        index：每一次迭代查找的数组元素索引。<br>
        arr：被查找的数组。<br>
        find() 函数用来查找目标元素，找到就返回该元素，找不到返回undefined。 <br>
        findIndex() 函数也是查找目标元素，找到就返回元素的位置，找不到就返回-1。 <br>
      </p>
      <p>
        flat()将嵌套数组转换为一维数组 数组的成员有时还是数组<br>
        Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组（默认拉平一层） <br>
        [1,2,3,4,5,[6,7],[8,9]].flat(1) // [1,2,3,4,5,6,7,8,9] <br>
        [1,2,3,4,[5,6,[7,8]]].flat(1) // [1, 2, 3, 4, 5, 6, Array(2)] <br>
        [1, 2,[3,4,[5,6,[7,8]]]].flat(3) // [1,2,3,4,5,6,7,8]  将多维数组拉平成一维数组<br>
      </p>
      <p>
        <b>对象的操作</b><br>
        Object.is() // 对象比较 Object.assign() // 合并对象<br>
        var obj1 ={name:"wang"};<br>
        var obj2 = {name:"wang"};<br>
        console.log(obj1.name=== obj2.name) // es5 console.log(Object.is(obj1.name,obj2.name)) // es6<br>
        var a ={a:'left'} <br>
        var b ={b:'right'} <br>
        var c = Object.assign(a,b) console.log(c) // {a:"left", b: "right"} <br>
        <span class="red">Object.fromEntries() </span>方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。 Object.fromEntries([['foo', 'bar'],['baz', 42]]) // { foo:"bar",baz: 42 }
      </p>
      <p>
        es6 对象遍历 for in ,Object.keys() <br>
        var obj = { foo:'bar',baz: 42} <br>
        console.log(Object.keys(obj))  // ["foo", "baz"] 返回key <br>
        console.log(Object.values(obj)) // ["bar",42] 返回 value <br>
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