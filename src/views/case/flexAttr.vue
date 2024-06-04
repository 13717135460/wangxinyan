<template>
	<div class="case-box flex-attr">
    <h1>flex 属性讲解</h1>
		<div class="scene">头条导航布局：</div>
		<div class="mt10 box">
			<span>推荐</span>
			<span>热榜</span>
			<span>深圳</span>
			<span>体育</span>
			<span>科技</span>
			<span>读书</span>
			<span>健康</span>
			<span>军事</span>
			<span>育儿</span>
			<span>旅游</span>
		</div>
		<div class="mt20 scene">代码如下</div>
<pre>
&lt;div class="box"&gt;
  &lt;span&gt;推荐&lt;/span&gt;
  &lt;span&gt;热榜&lt;/span&gt;
  &lt;span&gt;深圳&lt;/span&gt;
  &lt;span&gt;体育&lt;/span&gt;
  &lt;span&gt;科技&lt;/span&gt;
  &lt;span&gt;读书&lt;/span&gt;
  &lt;span&gt;健康&lt;/span&gt;
  &lt;span&gt;军事&lt;/span&gt;
  &lt;span&gt;育儿&lt;/span&gt;
  &lt;span&gt;旅游&lt;/span&gt;
&lt;/div&gt;

.box {
  width:300px;
  display: flex;
  overflow-x: auto;
}
.box span {
  flex-basis: 50px; // 每个菜单50px
  flex-shrink: 0;
}
</pre>
		<div class="scene">更多案例参考个人新浪博客：</div>
		<div class="tips">
			<a href="http://blog.sina.com.cn/s/blog_603fcfae0102yetp.html" target="_blank">http://blog.sina.com.cn/wangxinyandc</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'flex-attr',
	data() {
		return {

		}
	},
	methods: {

	}
};
</script>
<style lang="less" scoped>
.flex-attr {
	.box {
		width:300px;
		display: flex;
		overflow-x: auto;
	}
	.box span {
		flex-basis: 50px;
		flex-shrink: 0;
	}
	.scene {
		color: #990030;
	}
	.tips {
		a {
			color: #303133;
		}
	}
}
</style>
