<template>
	<div class="case-box html2-canvas">
		<h1>html2Canvas 截屏</h1>
		<div class="scene">应用场景：</div>
		<ul>
			<li>1.用户浏览器端直接对整个或部分页面进行截屏</li>
			<li>2.动态截图分享</li>
		</ul>
		<p class="mt20 mb20">html2canvas 能够实现在用户浏览器端直接对整个或部分页面进行截屏。这个html2canvas脚本将当页面渲染成一个Canvas图片,不需要来自服务器任何渲染，整张图片都是在客户端浏览器创建</p>
		<div id="sharePic" class="share-box">
			<img :src="img3" width="100%">
			<p class="txt" v-text="textValue"></p>
			<p class="txt1">恭喜中奖了</p>
		</div>
		<div class="share-btn">
			<el-input v-model="textValue" size="mini" placeholder="请输入姓名" maxlength="6" clearable></el-input>
			<el-button type="primary" size="mini" @click="downloadPic">下载图片</el-button>
		</div>
		<p class="mt80">代码如下：</p>
		<div class="eg-box">
<pre>
getSharePic () {
	let _this = this
	// 要绘制图片的DIV
	let shareBox = document.getElementById('sharePic')
	let width = shareBox.offsetWidth
	let height = shareBox.offsetHeight
	// let offsetTop = 0
	let offsetTop = shareBox.offsetTop
	let canvas = document.createElement("canvas")
	let context = canvas.getContext("2d")
	let scaleBy = Math.ceil(window.devicePixelRatio)
	canvas.width = width * scaleBy
	canvas.height = (height + offsetTop) * scaleBy

	let opts = {
		useCORS: true, //允许加载跨域的图片
		tainttest: true, // 检测每张图片都已经加载完成
		scale: scaleBy, // 添加的scale 参数
		canvas: canvas, // 自定义 canvas
		logging: false, // 日志开关，发布的时候记得改成false
		width: width, // DOM 原始宽度
		height: height // DOM 原始高度
	}
	// 渲染DOM生成图片
	html2canvas(shareBox, opts).then(function(canvas) {
		let fileName = "中奖啦" + ".jpg"
		let picUrl = canvas.toDataURL("image/jpeg",2)
		// 下载方法
		_this.fileDown(picUrl, fileName)
	})
},
fileDown (url, name) {
	let fileName = name
	axios({
		method: "post",
		url: url,
		responseType: "blob",
	}).then(data => {
		let blob = new Blob([data.data], { type: "application/json" })
		if (window.navigator.msSaveOrOpenBlob) {
			// msSaveOrOpenBlob方法返回bool值
			navigator.msSaveBlob(blob); //本地保存
		} else {
			let link = document.createElement("a") // a标签下载
			link.href = window.URL.createObjectURL(blob)
			link.download = fileName
			link.click()
			window.URL.revokeObjectURL(link.href)
		}
	})
}
</pre>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import html2canvas from 'html2canvas'

export default {
	name: 'html2-canvas',
	data() {
		return {
			textValue: '',
			shareImg: '',
			img3: require('@/assets/common/img/soccer/3.jpg'),
		}
	},
	methods: {
		downloadPic () {
			if (this.textValue !== '') {
				this.getSharePic()
			} else {
				this.$message.warning('请输入姓名再下载')
			}
		},
		getSharePic () {
      let _this = this
      // 要绘制图片的DIV
      let shareBox = document.getElementById('sharePic')
			let width = shareBox.offsetWidth
			// let height = shareBox.offsetHeight
      let height = 190 * 2
      let offsetTop = shareBox.offsetTop
      let canvas = document.createElement("canvas")
      let context = canvas.getContext("2d")
      let scaleBy = Math.ceil(window.devicePixelRatio)
      canvas.width = width * scaleBy
      // canvas.height = (height + offsetTop) * scaleBy
      canvas.height = 190 * 2

      let opts = {
        useCORS: true, //允许加载跨域的图片
        tainttest: true, // 检测每张图片都已经加载完成
        scale: scaleBy, // 添加的scale 参数
        canvas: canvas, // 自定义 canvas
        logging: false, // 日志开关，发布的时候记得改成false
        width: width, // DOM 原始宽度
        height: height // DOM 原始高度
      }
      // 渲染DOM生成图片
      html2canvas(shareBox, opts).then(function(canvas) {
				let fileName = "中奖啦" + ".jpg"
				let picUrl = canvas.toDataURL("image/jpeg",2)
				// 下载方法
				_this.fileDown(picUrl, fileName);
      })
    },
		fileDown (url, name) {
			let fileName = name
			axios({
				method: "post",
				url: url,
				responseType: "blob",
			}).then(data => {
				let blob = new Blob([data.data], { type: "application/json" });
				if (window.navigator.msSaveOrOpenBlob) {
					// msSaveOrOpenBlob方法返回bool值
					navigator.msSaveBlob(blob); //本地保存
				} else {
					let link = document.createElement("a"); //a标签下载
					link.href = window.URL.createObjectURL(blob)
					link.download = fileName;
					link.click();
					window.URL.revokeObjectURL(link.href)
				}
			})
		}
	}
};
</script>
<style lang="less" scoped>
.html2-canvas {
	.share-box {
		position: relative;
		width: 260px;
		margin-bottom: 10px;
		text-align: center;
		img {
			border-radius: 20px;
			overflow: hidden;
		}
		.txt {
			position: absolute;
			bottom: 110px;
			left: 0;
			right: 0;
			z-index: 9;
			font-size: 22px;
      color: #fff;
      font-weight: bold;
		}
		.txt1 {
			position: absolute;
			bottom: 60px;
			left: 0;
			right: 0;
			z-index: 9;
			font-size: 18px;
      color: #fff;
      font-weight: bold;
		}
	}
	.share-btn {
		.el-input {
			width: 200px;
			margin-right: 20px;
		}
	}
}
</style>
