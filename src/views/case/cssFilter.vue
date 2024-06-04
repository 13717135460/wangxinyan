<template>
	<div class="case-box css-filter">
    <h1>css 滤镜filter</h1>
		<div class="scene">应用场景：</div>
		<ul>
			<li>1.国家哀悼日</li>
			<li>2.重大灾难性事件或重要人物逝世时</li>
		</ul>
		<div class="solve">解决痛点：</div>
		<ul>
			<li>1.全站一键置灰,快速高效。</li>
		</ul>
		<p class="mt30">滤镜效果如下：</p>
		<div class="eg-box">
			<div class="pic" :class="{'filter': isFilter}">
				<p class="red">标题：深切哀悼逝世的同胞...</p>
				<img :src="img1" alt="图片1">
				<img :src="img2" alt="图片2">
			</div>
			<div class="btn">
				<el-button size="mini" @click="filterBtn(0)" type="primary">一键还原</el-button>
				<el-button size="mini" @click="filterBtn(1)" type="primary">一键置灰</el-button>
			</div>
						<p class="fz12 mt20 mb10">样式如下：</p>
			<pre>
.box {
  filter:grayscale(100%);  100为黑白 0为原色
}


其它滤镜
一、grayscale 灰度
   .box{-webkit-filter:grayscale(100%)}

二、sepia 褐色
   .box{-webkit-filter:sepia(100%)}

三、saturate 饱和度
   .box{-webkit-filter:saturate(100%)}

四、opacity 透明度
   .box{-webkit-filter:opacity(.5)}
    filter:alpha(opacity=50)       // ie 6 7 8 兼容

五、brightness 亮度
   .box{-webkit-filter:brightness(.5)}

六、drop-shadow 阴影
  .box{-webkit-filter:drop-shadow(5px 5px 5px #ccc)}

七、blur 模糊
  .box{-webkit-filter:blur(3px)}
			</pre>
		</div>
	</div>
</template>

<script>
export default {
	name: 'css-filter',
	data() {
		return {
			isFilter: false,
			img1: require('@/assets/common/img/soccer/1.jpg'),
			img2: require('@/assets/common/img/soccer/2.jpg'),
		}
	},
	methods: {
		filterBtn (status) {
			if (status === 0) {
				this.isFilter = false
			}
			if (status ===1) {
				this.isFilter = true
			}
		}
	}
};
</script>
<style lang="less" scoped>
.css-filter {
	.eg-box {
		.pic {
			img {
				height: 286px;
				margin-right: 20px;
			}
			&.filter {
				filter: grayscale(100%);
			}
		}
		.red {
			margin-bottom: 10px;
			color: red;
			font-weight: bold;
			font-size: 16px;
		}
		.btn {
			margin-top: 30px;
			.el-button {
				margin-right: 30px;
			}
		}
	}
}
</style>
