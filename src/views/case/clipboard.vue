<!-- 复制粘贴 -->
<template>
	<div class="case-box clipboard">
		复制 / 粘贴
		<div class="eg-box">
			<ul>
				<li>
					<span class="mt20" id="text1">千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪</span>
					<el-button class="ml30 copy-link" data-clipboard-target="#text1" size="mini" type="primary" @click="copy">复制</el-button>
				</li>
				<li>
					<span class="mt20" id="text2">红酥手黄藤酒，满城春色宫墙柳</span>
					<el-button class="ml30 copy-link" data-clipboard-target="#text2" size="mini" type="primary" @click="copy">复制</el-button>
				</li>
				<li>
					<span class="mt20" id="text3">秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。</span>
					<el-button class="ml30 copy-link" data-clipboard-target="#text3" size="mini" type="primary" @click="copy">复制</el-button>
				</li>
			</ul>
			<p class="eg-box-area" contenteditable="true" v-text="text"></p>
			<div>
				<el-button size="mini" type="primary" @click="paste">粘贴</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import Clipboard from 'clipboard'

export default {
	components: {},
	data() {
		return {
			text: '',
			defaultTxt: ''
		}
	},
	methods: {
		// 复制
		copy () {
			let _this = this
			const clipboard = new Clipboard(".copy-link");
			clipboard.on("success", function(e) {
				_this.$message.success('复制成功')
				_this.defaultTxt = e.text
				// 释放内存
				clipboard.destroy()
			});
			clipboard.on("error", function(e) {
				_this.$message.error('复制失败')
			})
		},
		// 粘贴
		paste () {
			this.text = this.defaultTxt
		}
	}
}
</script>
<style lang='less' scoped>
.clipboard {
	.eg-box {
		.eg-box-area {
			width: 520px;
			height: 100px;
			margin: 30px 0 10px;
			word-break: break-all;
			border: 1px dashed #999;
			padding: 10px;
			border-radius: 3px;
			word-break: break-all;
	  }
	}
}
</style>