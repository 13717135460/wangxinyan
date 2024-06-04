<template>
	<div class="case-box scroll-bar">
		<p>自定义滚动条优化浏览器自带滚动条不美观问题</p>
		<div class="scene">应用场景：</div>
		<ul>
			<li>1.对页面美观和整体协调有一定要求，</li>
			<li>2.h5个性化页面定制独特滚动条样式</li>
		</ul>
		<div class="solve">解决痛点：</div>
		<ul>
			<li>1.目前市场现在浏览器自带的原始滚动条很不美观，简直就是页面的一大败笔， 不同的浏览器有着不同的展现样式，五花八门。自定义滚动条主要解决页面整体一致性问题，优化视觉体验。</li>
		</ul>
		<p class="mt30">滚动条效果如下：</p>
		<div class="eg-box">
			<p>《沁园春·雪》 —— 毛泽东</p>
			<p class="mt20">北国风光，千里冰封，万里雪飘。</p>
			<p class="mt20">望长城内外，惟余莽莽；</p>
			<p class="mt20">大河上下，顿失滔滔。</p>
			<p class="mt20">山舞银蛇，原驰蜡象，欲与天公试比高。</p>
			<p class="mt20">须晴日，看红装素裹，分外妖娆。</p>
			<p class="mt20">江山如此多娇，引无数英雄竞折腰。</p>
			<p class="mt20">惜秦皇汉武，略输文采；</p>
			<p class="mt20">唐宗宋祖，稍逊风骚。</p>
			<p class="mt20">一代天骄，成吉思汗，只识弯弓射大雕。</p>
			<p class="mt20">俱往矣，数风流人物，还看今朝。</p>
		</div>
		<div>
			<p class="fz12 mt20 mb10">样式如下：</p>
			<pre>
.box {
  width: 500px;
  height: 300px;
  &::-webkit-scrollbar {
  width: 6px;
  background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
&::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #F5F5F5;
  box-shadow: inset 0 0 6px red;
}
/*定义滑块 内阴影+圆角*/
&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: green;
  }
}
			</pre>
		</div>
	</div>
</template>

<script>
export default {
	name: 'scroll-bar',
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>
<style lang="less" scoped>
.scroll-bar {
	.eg-box {
		width: 500px;
		height: 200px;
		word-break: break-all;
		padding: 10px;
		border-radius: 3px;
		word-break: break-all;
		overflow-y: auto;
		text-align: left;
		&::-webkit-scrollbar {
			width: 6px;
			background-color: #F5F5F5;
		}
		/*定义滚动条轨道 内阴影+圆角*/
		&::-webkit-scrollbar-track {
			border-radius: 10px;
			background-color: #F5F5F5;
			box-shadow: inset 0 0 6px red;
		}
		/*定义滑块 内阴影+圆角*/
		&::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: green;
		}
	}
}
</style>

