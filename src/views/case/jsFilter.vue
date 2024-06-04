<template>
	<div class="case-box js-filter">
    <h1>js 全局过滤器</h1>
<pre>
<span style="color:#990030; font-weight:bold;">filter.js</span>
// 金额保留2位小数
let formatMoney = function(value) {
  return "￥" + value.toFixed(2)
}

// 千分位分割
let thousands = function(value) {
  if (typeof(value) === 'number') {
    return value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  }
}

// 状态
let status = function(value) {
switch (value)
  {
    case 0: return "成功"
    case 1: return "失败"
    default: return "未知"
  }
}

// 银行卡4位分隔符
let bankFormat = function (value) {
  value += ''
  value = value.replace(/(\s)/g,'').replace(/(\d{4})/g,'$1 ').replace(/\s*$/,'')
  return value
}

export { formatMoney, thousands, status, bankFormat }

<span style="color:#990030; font-weight:bold;">main.js</span>
import * as filters from './filters'

// 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

<span style="color:#990030; font-weight:bold;">home.vue</span>
&lt;div&gt; type | status &lt;/div&gt; // 应用 status 全局过滤器
</pre>
	</div>
</template>

<script>
export default {
	name: 'js-filter',
	data() {
			return {

			}
	},
	methods: {

	}
};
</script>
<style lang="less" scoped>
.js-filter {}
</style>
