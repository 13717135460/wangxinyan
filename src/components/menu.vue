<template>
	<div class="my-menu">
		<el-menu
		class="el-menu-vertical-demo"
		:default-active="$route.path"
		@open="handleOpen"
		@close="handleClose">
		<el-menu-item
			v-for="(item, index) in menus.toolsMenu"
			:key="index"
      :index="item.router"
			@click="toPages(item)"
			>
			<span slot="title" v-text="item.title"></span>
		</el-menu-item>
	</el-menu>
	</div>
</template>

<script>
import { menus } from './menuConfig/menu'
export default {
	name: 'my-menu',
	data() {
		return {
			menus: menus,
			tabPosition: 'left'
		}
	},
	methods: {
		toPages (item) {
			this.$router.push(item.router)
		},
		handleOpen () {
			// console.log(key, keyPath);
			console.log('100');
		},
		handleClose () {
			// console.log(key, keyPath);
			console.log('200');
		}
	}
};
</script>
<style lang="less" scoped>
.my-menu {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9;
	width: 180px;
	height: 87vh;
	overflow-y: auto;
	overflow-x: hidden;
	text-align: left;
	-webkit-user-select: none; // 禁止选中
	.el-menu-item {
		&:hover {
			color: red;
			background-color: transparent;
		}
		&.is-active {
			color: red;
			background-color: transparent;
		}
	}
	&::-webkit-scrollbar
	{
		width: 6px;
		background-color: #F5F5F5;
	}
	/*定义滚动条轨道 内阴影+圆角*/
	&::-webkit-scrollbar-track
	{
		border-radius: 10px;
		background-color: #F5F5F5;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
	}
	/*定义滑块 内阴影+圆角*/
	&::-webkit-scrollbar-thumb
	{
		border-radius: 10px;
		background-color: rgba(0, 0, .0, .1);
	}
	.el-menu {
		border-right: none;
		background-color: transparent;
	}
	.el-scrollbar {
		height: 100%;
		overflow-x: hidden;
	}
}
</style>
<style>
.el-scrollbar__wrap {
	height: 100%;
	overflow-x: hidden;
}
</style>
