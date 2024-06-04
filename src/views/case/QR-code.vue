<template>
	<div class="case-box qr-code">
		<h1>二维码生成</h1>
		<div id="qrcode"></div>
		<div class="mt30 mb10 red">示例：</div>
		<div class="case-box-cont">
			<el-form :inline="true">
				<el-form-item>
					<el-input class="ipt" v-model="rqContent" placeholder="请输入要生成二维码内容" clearable></el-input>
				</el-form-item>
				<el-form-item>
			  	<el-button type="primary" @click="rqCode">生成二维码</el-button>
				</el-form-item>
			</el-form>
			<p class="mb10 red">二维码容错率说明</p>
			<p>容错率，L/M/H 二维码容错率用字母表示，容错能力等级分为：L、M、Q、H四级：L7%、M15%、Q25%、H30%，<br><br>容错率越高，越容易被快速扫描，需要在二维码中间加logo则需要选择H级容错率的二维码，否则无法识别</p>
		</div>
	</div>
</template>

<script>
import QRCode  from "qrcodejs2"

export default {
	name: 'qr-code',
	components: {
		QRCode
	},
	data() {
		return {
			rqContent: 'http://blog.sina.com.cn/wangxinyandc',
		}
	},
	mounted () {
		this.qrcode()
	},
	methods: {
		// 生成二维码
    qrcode () {
			// let that = this;
			let qrcode = new QRCode('qrcode', {
				width: 126,
				height: 126,        // 高度
				text:  this.rqContent,   // 二维码内容
				// colorDark: 'red', // 二维码颜色
				// colorLight: 'green' //  二维码背景色
				// correctLevel: QRCode.CorrectLevel.H // 容错率，L/M/H 二维码容错率用字母表示，容错能力等级分为：L、M、Q、H四级：L7%、M15%、Q25%、H30%，容错率越高，越容易被快速扫描，需要在二维码中间加logo则需要选择H级容错率的二维码
				// render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
			})
		},
		rqCode () {
			if (this.rqContent === '') {
				this.$message.warning('内容不能为空')
				return
			}
			this.qrcode()
		}
 }
}
</script>
<style lang="less" scoped>
	.case-box {
		.case-box-cont {
			.ipt {
				width: 360px;
			}
		}
	}
</style>

<style lang="less">
	.case-box {
		#qrcode {
			img {
				display: none !important;
			}
			img:last-child {
				display: inline !important;
				margin: 0 10px 10px 0;
			}
		}
		.red {
			color: #990030;
		}
	}
</style>