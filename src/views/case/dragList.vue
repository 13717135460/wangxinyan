<template>
	<div class="case-box drag-list">
		<h1>列表拖拽</h1>
		<p class="mt10">http://www.sortablejs.com/options.html 配置表</p>
		<p class="mt10">本案例采用Sortable.js 实现，还可用vue-draggable插件实现</p>
		<p class="mt10">http://www.itxst.com/vue-draggable/tutorial.html</p>
		<!-- 上下拖拽 -->
		<div class="scene">上下拖拽</div>
		<ul class="list-box list-box1" id="list1">
			<li class="item" v-for="(item, index) in list" :key="index">
				<span v-text="`${index+1}. `"></span>
				<span v-text="item.text"></span>
			</li>
		</ul>
		<p class="mt10">
			<span class="title">old:</span>
			<span v-text="oldList"></span>
		</p>
		<p class="mt10">
			<span class="title">new:</span>
			<span v-text="newList"></span>
		</p>

		<!-- 左右拖拽 -->
		<div class="scene">左右拖拽</div>
		<div class="lisg-group">
			<ul class="list-box list-box2" id="list2">
				<li class="item" v-for="(item, index) in list2" :key="index">
					<span v-text="`${item.id}. `"></span>
					<span v-text="item.text"></span>
				</li>
			</ul>
			<ul class="list-box list-box3" id="list3">
				<li class="item" v-for="(item, index) in list3" :key="index">
					<span v-text="`${item.id}. `"></span>
					<span v-text="item.text"></span>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
import Sortable from 'sortablejs'


// Vue.use(Sortable)

export default {
	name: 'drag-list',
	data() {
		return {
			list: [
				{
					id: 1,
					text: '无边落木萧萧下，不尽长江滚滚来'
				},
				{
					id: 2,
					text: '此情可待成追忆，只是当时已惘然'
				},
				{
					id: 3,
					text: '红军不怕远征难，万水千山只等闲'
				},
				{
					id: 4,
					text: '相见时难别亦难，东风无力百花残'
				},
				{
					id: 5,
					text: '出师一表真名世，千载谁堪伯仲间'
				},
				{
					id: 6,
					text: '秦时明月汉时关，万里长征人未还'
				}
			],
			list2: [
				{
					id: 1,
					text: '昔人已乘黄鹤去，此地空余黄鹤楼'
				},
				{
					id: 2,
					text: '此情可待成追忆，只是当时已惘然'
				},
				{
					id: 3,
					text: '无边落木萧萧下，不尽长江滚滚来'
				},
				{
					id: 4,
					text: '沧海月明珠有泪，蓝田日暖玉生烟'
				},
				{
					id: 5,
					text: '此情可待成追忆，只是当时已惘然'
				},
				{
					id: 6,
					text: '秦时明月汉时关，万里长征人未还'
				}
			],
			list3: [
				{
					id: 7,
					text: '山重水复疑无路，柳暗花明又一村'
				},
				{
					id: 8,
					text: '长风破浪会有时，直挂云帆济沧海'
				},
				{
					id: 9,
					text: '三山半落青天外，一水中分白鹭洲'
				},
				{
					id: 10,
					text: '人生得意须尽欢，莫使金樽空对月'
				},
				{
					id: 11,
					text: '莫愁前路无知己，天下谁人不识君'
				},
				{
					id: 12,
					text: '羌笛何须怨杨柳，春风不度玉门关'
				}
			],
			oldList: [],
			newList: [],
			newListLeft: [],
			newListRight: [],
		}
	},
	mounted () {
		this.getList()
	},
	methods: {
		getList () {
			this.oldList = this.list.map(v => v.id)
			this.newList = this.oldList.slice()
			
			this.oldList = this.list2.map(v => v.id)
			this.newListLeft = this.oldList.slice()
			
			this.$nextTick(() => {
        this.setSort()
      })
		},
		setSort () {
			let node1 = document.getElementById('list1')
			let node2 = document.getElementById('list2')
			let node3 = document.getElementById('list3')
			let sortable = new Sortable(node1, {
				animation: 150,
				ghostClass: 'sortable-current', // 
				draggable: ".item",  // 允许拖拽的项目类名
				dragClass: "sortable-drag",  // 正在被拖拽中的css类名
				chosenClass: "sortable-chosen",  // 被选中项的css 类名
				direction: 'horizontal', // 拖拽方向 (默认情况下会自动判断方向)
				forceFallback: false,  // 忽略 HTML5拖拽行为，强制回调进行
				/** 回调函数 **/
				// 开始拖拽的时候
				onStart: function (evt) {
					console.log('start');
					console.log(evt);
				},
				// 结束拖拽
				onEnd: evt => {
					const targetRow = this.list.splice(evt.oldIndex, 1)[0]
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.list.splice(evt.newIndex, 0, targetRow)
          this.newList.splice(evt.newIndex, 0, tempIndex)
				},
			})

			let sortable2 = new Sortable(node2, {
				group: 'shared',
				animation: 150,
				ghostClass: 'sortable-current', // 
				draggable: ".item",  // 允许拖拽的项目类名
				dragClass: "sortable-drag",  // 正在被拖拽中的css类名
				chosenClass: "sortable-chosen",  // 被选中项的css 类名
				direction: 'horizontal', // 拖拽方向 (默认情况下会自动判断方向)
				forceFallback: false,  // 忽略 HTML5拖拽行为，强制回调进行
				/** 回调函数 **/
				// 开始拖拽的时候
				onStart: function (evt) {
					console.log('start');
					console.log(evt);
				},
				// 结束拖拽
				// onEnd: evt => {
				// 	console.log('2222222');
				// 	console.log(evt.to);
				// 	console.log(evt.from);
				// 	console.log(evt.newIndex);
				// 	const targetRow2 = this.list2.splice(evt.oldIndex, 1)[0]
				// 	const tempIndex2 = this.newListLeft.splice(evt.oldIndex, 1)[0]
				// 	console.log('222');
				// 	console.log(tempIndex2);
        //   this.list2.splice(evt.newIndex, 0, targetRow2)
        //   this.newListLeft.splice(evt.newIndex, 0, tempIndex2)
				// },
				onChange: evt => {
					console.log('onChange');
					console.log(evt.to);
						// evt.newIndex

				  const targetRow2 = this.list2.splice(evt.oldIndex, 1)[0]
					const tempIndex2 = this.newListLeft.splice(evt.oldIndex, 1)[0]
          this.list2.splice(evt.newIndex, 0, targetRow2)
          this.newListLeft.splice(evt.newIndex, 0, tempIndex2)
				}
			})

			let sortable3 = new Sortable(node3, {
				group: 'shared',
				animation: 150,
				ghostClass: 'sortable-current', // 
				draggable: ".item",  // 允许拖拽的项目类名
				dragClass: "sortable-drag",  // 正在被拖拽中的css类名
				chosenClass: "sortable-chosen",  // 被选中项的css 类名
				direction: 'horizontal', // 拖拽方向 (默认情况下会自动判断方向)
				forceFallback: false,  // 忽略 HTML5拖拽行为，强制回调进行
				/** 回调函数 **/
				// 开始拖拽的时候
				// onStart: function (evt) {
				// 	console.log('start');
				// 	console.log(evt);
				// },
				// 结束拖拽
				// onEnd: evt => {
				// 	// const targetRow = this.list.splice(evt.oldIndex, 1)[0]
        //   // const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
        //   // this.list.splice(evt.newIndex, 0, targetRow)
        //   // this.newList.splice(evt.newIndex, 0, tempIndex)
				// },
			})

		}
	}
};
</script>
<style lang="less" scoped>
.drag-list {
	.title {
		display: inline-block;
		width: 50px;
		margin-right: 10px;
		text-align: right;
	}
	ul {
		li {
			height: 36px;	
			line-height: 36px;
			margin: 0;
			padding: 0 20px;
			border: 1px solid #999;
			border-bottom: none;
			cursor: pointer;
			&:last-child {
				border-bottom: 1px solid #999;
			}
			&.sortable-current, &.sortable-chosen {
				background-color: #fff6b2;
			}
		}
	}
	.lisg-group {
		display: flex;
		.list-box2, .list-box3 {
			flex: 1;
		}
		.list-box3 {
			margin-left: 100px;
		}
	}
}
</style>
