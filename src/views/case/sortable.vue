<template>
	<div class="case-box sortable">
		<h1>多选框拖拽排序</h1>
		<p class="mb10">
			<span class="mr30">vuedraggable组件实现<span class="red ml30">参考</span>：http://www.itxst.com/vue-draggable/tutorial.html</span>
			<el-button size="min" class="title" @click="setJY" v-if="disabled==false">禁用拖拽</el-button>
      <el-button size="min" class="title" @click="setQY" v-if="disabled==true">开启拖拽</el-button>
		</p>
		<!--使用draggable组件-->
		<div class="draggable-box">
			<div class="col">
				<div class="title">国内网站</div>
				<draggable v-model="arr1" :disabled="disabled" group="site" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
					<transition-group>
						<div class="item" v-for="item in arr1" :key="item.id" v-text="item.name"></div>
					</transition-group>
				</draggable>
			</div>
		
			<div class="col">
				<div class="title">你可以把左边的元素拖到右边</div>
				<draggable v-model="arr2" :disabled="disabled" group="site" animation="100" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
					<transition-group>
						<div class="item" v-for="item in arr2" :key="item.id" v-text="item.name"></div>
					</transition-group>
				</draggable>
			</div>
		</div>
		<div class="result-box">
			<ul>
				<li class="title">左边总条数</li>
				<li v-for="item in arr1" :key="item.id">
					<span v-text="item.name"></span>
				</li>
			</ul>
			<ul>
				<li class="title">右边总条数</li>
				<li v-for="item in arr2" :key="item.id">
					<span v-text="item.name"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import draggable from 'vuedraggable' // 导入draggable组件

export default {
	name: 'sortable',
	data() {
		return {
			disabled: false,
			drag: false,
			arr1: [
				{ id: 1, name: 'www.qq.com' },
				{ id: 2, name: 'www.jd.com' },
				{ id: 3, name: 'www.baidu.com' },
				{ id: 4, name: 'www.taobao.com' }
			],
			arr2: [
				{ id: 1, name: 'www.google.com' },
				{ id: 2, name: 'www.facebook.com' },
				{ id: 3, name: 'www.ebay.com' },
				{ id: 4, name: 'www.yahoo.com' }
			]
		}
	},
	components: {
		draggable,
	},
	methods: {
		onStart() {
			this.drag = true;
		},
		onEnd() {
			this.drag = false;
		},
		// 设置禁止拖拽
		setJY() {
				this.disabled = true;
		},
		//设置启用拖拽
		setQY() {
				this.disabled = false;
		},
	}
}
</script>
<style lang="less" scoped>
.sortable {
	.ghostClass{
		background-color:  blue ;
	}
	.chosenClass{
		background-color: red ;
		opacity: 1;
	}
	.dragClass{
		background-color: blueviolet ;
		opacity: 1 ;
		box-shadow:none ;
		outline:none ;
		background-image:none ;
	}
	.draggable-box{
		display: flex;
	}
	.title{
		padding: 6px 12px;
	}
	.col{
		flex: 1;
		padding: 10px;
		border: solid 1px #ccc;
		border-radius:5px ;
	}
	.col+.col{
		margin-left: 30px;
	}
	.item{
		height: 36px;
		line-height: 36px;
		padding: 0 10px;
		border:  solid 1px #eee;
		background-color: #f1f1f1;
		&.ghostClass, &.chosenClass {
			background-color: #fff6b2;
		}
	}
	.item:hover{
		background-color: #fff6b2;
		cursor: move;
	}
	.item +.item{
		border-top:none ;
		margin-top: 6px;
	}
	.result-box {
		display: flex;
		ul {
			flex: 1;
			li {
				padding-left: 25px;
			}
			.title {
				color: green;
			}
			&:last-child {
				margin-left: 50px;
			}
		}
	}
}
</style>


