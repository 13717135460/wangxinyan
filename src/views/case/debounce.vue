<template>
	<div class="case-box debounce">
		<p>函数防抖(debounce)：触发高频事件后n秒内函数只执行最后一次，n秒内高频事件再次被触发，则重新计算时间。</p>
		<div class="scene">应用场景：</div>
		<ul>
			<li>1.防止接口重复请求</li>
			<li>2.防止表单重复提交</li>
			<li>3.搜索框联想查询</li>
			<li>4.文章点赞功能</li>
		</ul>
		<div class="solve">解决痛点：</div>
		<ul>
			<li>1.防止接口重复请求, 用户点击请求的时候利用防抖函数设置一个合适时间间隔再调用，有效减轻服务端压力。</li>
			<li class="mt20">函数节流（throttle）与 函数防抖（debounce）都是为了限制函数的执行频次，以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象。</li>
		</ul>
		<div class="eg-box">
			<el-button type="primary" @click="noDebounceFn">无函数防抖</el-button>
			<el-button type="primary" class="ml30" @click="debounceFn('wxy')">函数防抖</el-button>
			<el-button type="primary" class="ml30" @click="reset">重新载入</el-button>
			<el-button type="primary" class="ml30" @click="Download">文件下载</el-button>
		</div>
	</div>
</template>

<script>
import { Debounce, fileDownload } from '@/utils/index' // 引入工具函数

export default {
	name: 'debounce',
	inject: ['reload'],
	data() {
		return {

		}
	},
	methods: {
		// 函数防抖
		debounceFn: Debounce (function(val) {
			this.$message.success('欢迎访问我的网站')
			console.log(val)
		}, 1000),
		// 无函数防抖
		noDebounceFn () {
			this.$message.success('欢迎访问我的网站')
		},
		reset () {
			this.reload()
		},
		// 文件下载
		Download () {
			fileDownload('https://static.zookingsoft.com/shiquaner/pc/test/cm.jpg', '草莓')
		}
	}
};
</script>
<style lang="less" scoped>

</style>
