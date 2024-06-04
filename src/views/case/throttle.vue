<template>
	<div class="case-box throttle">
		<p>函数节流(throttle)：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。</p>
		<div class="scene">应用场景：</div>
		<ul>
			<li>1.防止接口重复请求</li>
			<li>2.秒杀活动重复点击</li>
			<li>3.监听滚动事件</li>
			<li>4.搜索框联想查询</li>
		</ul>
		<div class="solve">解决痛点：</div>
		<ul>
			<li>1.防止接口重复请求, 用户点击请求的时候利用防抖函数设置一个合适时间间隔再调用，有效减轻服务端压力。</li>
			<li class="mt20">函数节流（throttle）与 函数防抖（debounce）都是为了限制函数的执行频次，以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象。</li>
		</ul>
		<div class="eg-box">
			<el-button type="primary" @click="noThrottleFn">无函数节流</el-button>
			<el-button type="primary" class="ml30" @click="throttleFn('wxy')">函数节流</el-button>
		</div>
	</div>
</template>

<script>
import { Throttle } from '@/utils/index' // 引入工具函数

export default {
	name: 'throttle',
	data() {
		return {

		}
	},
	methods: {
		// 函数节流
		throttleFn: Throttle (function(val) {
			this.$message.success('欢迎访问我的网站')
		}, 1200),
		// 无函数节流
		noThrottleFn () {
			this.$message.success('欢迎访问我的网站')
		}
	}
}
</script>
<style lang="less" scoped>

</style>
