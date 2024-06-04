<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>ES7、新特性初体验</h1>
      <p>ES7、ES8 新特性的发布不由得感叹前端飞速的发展，不管怎样我们还是紧跟时代步伐，所谓活到老学到老~</p>
      <p>
        <span class="red">1.Array.prototype.includes()</span> <br>
        作用：includes()是查找一个值在不在数组里,若是存在则返回true,不存在返回false<br>
        基本用法 <br>
        ['a', 'b', 'c'].includes('a')     // true<br>
        ['a', 'b', 'c'].includes('A')    // false<br>
        ['a', 'b', 'c'].includes('d')    // false<br>
      </p>
      <p>
        要搜索的值和搜索的开始索引(接收2个参数)<br>
        ['a', 'b', 'c', 'd'].includes('b')        //  true<br>
        ['a', 'b', 'c', 'd'].includes('b', 1)     // true<br>
        ['a', 'b', 'c', 'd'].includes('b', 2)     // false<br>
      </p>
      <p>
        includes与ES6中的indexOf()比较<br>
        ['a','b','c'].indexOf('a')  //  0        ['a','b','c'].indexOf('b')  //  1<br>
        ['a','b','c'].indexOf('c')  //  2        ['a','b','c'].indexOf('d') //  -1<br>
      </p>
      <p>
        includes只能判断简单类型的数据，对于复杂类型的数据，比如对象类型的数组，二维数组，是无法判断的<br>
        var arr = [1, [2, 3], 4]<br>
        arr.includes([2, 3])   //  false<br>
        arr.indexOf([2, 3])   //  -1<br>
      </p>
      <p>
        includes()返回是布尔值，能直接判断数组中存不存在这个值，而indexOf()返回的是索引，这点前者更加方便。<br>
        let demo = [1, NaN, 2, 3]<br>
        demo.indexOf(NaN)    //  -1<br>
        demo.includes(NaN)   //  true<br>
        由于它对NaN的处理方式与indexOf不同，假如你只想知道某个值是否在数组中而并不关心它的索引位置，建议使用includes()。如果你想获取一个值在数组中的位置，那么你只能使用indexOf方法。
      </p>
      <p>
        <span class="red">2.Object.entries()</span> <br>
        作用：将一个对象中可枚举属性的键名和键值按照二维数组的方式返回。若对象是数组，则会将数组的下标作为键值返回。 <br>
        Object.entries({ one: 1, two: 2 })   //   [['one', 1], ['two', 2]] <br>
        Object.entries([1, 2])                 //  [['0', 1], ['1', 2]] <br>
        entries()返回的数组顺序和for循环一样，即如果对象的key值是数字，则返回值会对key值进行排序，返回的是排序后的结果<br>
        利用Object.entries()创建一个真正的Map <br>
        var obj = { foo: 'bar', baz: 42 }; <br>
        var map1 = new Map([['foo', 'bar'], ['baz', 42]]);    // 原本的创建方式<br>
        var map2 = new Map(Object.entries(obj));         // 等同于map1<br>
        console.log(map1);   //   Map { foo: "bar", baz: 42 }<br>
        console.log(map2);   //   Map { foo: "bar", baz: 42 }<br>
        Object.entries的原理其实就是将对象中的键名和值分别取出来然后推进同一个数组中<br>
      </p>
      <p>
        <span class="red">3.Object.values()</span> <br>
        作用：只返回自己的键值对中属性的值。它返回的数组顺序，也跟Object.entries()保持一致<br>
        var obj = { foo: 'bar', baz: 42 };<br>
        console.log(Object.keys(obj))     //  ["foo", "baz"] 返回key<br>
        console.log(Object.values(obj))   //  ["bar", 42] 返回value<br>
        console.log(Object.entries(obj))   //  [["foo", "bar"], ["baz", 42]]<br>
      </p>
      <p>
        <span class="red">4.padStart()和padEnd() (字符串填充)</span> <br>
        作用：填充函数只有在字符长度小于目标长度时才有效,而且目标长度如果小于字符串本身长度时，字符串也不会做截断处理，只会原样输出 <br>
        'Vue'.padStart(10)             //'      Vue'   —— vue前面7个空格 <br>
        'Vue'.padStart(5, '*')          // '**Vue' <br>
        'React'.padStart(10)          //'    React' <br>
        '    //'JavaScript' <br>

        'Vue'.padEnd(10, '_*')       // 'Vue_*_*_*_' <br>
        'Vue'.padEnd(5,'*')         //  'Vue**' <br>

        'React'.padEnd(10, 'Hello')     // 'ReactHello' <br>
        '    // 'JavaScript' <br>
        '    //  'JavaScript' <br>
      </p>
      <p>
        <span class="red">5.Object.getOwnPropertyDescriptors()</span> <br>
        <pre> 
作用：该方法返回目标对象中所有属性的属性描述符,该属性必须是对象自己定义的,不能是从原型链继承来的。
var obj = {
id:  1,
name: '王新焱',
get gender() {
console.log('gender')
},
set grad(d) {
console.log(d)
}
}
console.log(Object.getOwnPropertyDescriptors(obj))
//  输出结果如下
{
  gender: {
    configurable: true,
    enumerable: true,
    get: f gender(),
    set: undefined
  },
  grade: {
    configurable: true,
    enumerable: true,
    get: undefined,
    set: f grade(g)
  },
  id: {
    configurable: true,
    enumerable: true,
    value: 1,
    writable: true
  },
  name: {
    configurable: true,
    enumerable: true,
    value: '王新焱',
    writable: true
  }
}
        </pre>
        * 只有id和name的情况<br>
        <img src="../img/10/1.png" alt="截图"><br>
        Object.getOwnPropertyDescriptors()的提出目的，主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题。
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