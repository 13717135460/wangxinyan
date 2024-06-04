<template>
	<div class="case-box count-shade">
    <h1>数字渐变</h1>
		<p class="mt30">安装 npm install gsap</p>
		<p class="mt10">GSAP是一个“轻量级”、“高效率”、强大的2D动画引擎</p>
		<div class="scene">	GSAP优点：</div>
		<ul>
			<li>1、速度快。GSAP专门优化了动画性能，使之实现和css一样的高性能动画效果。</li>
			<li>2、轻量与模块化。模块化与插件式的结构保持了核心引擎的轻量，TweenLite包非常小。GSAP提供了TweenLite, TimelineLite, TimelineMax 和 TweenMax不同功能的动画模块，你可以按需使用。</li>
			<li>3、没有依赖，灵活控制。不用受限于线性序列，可以重叠动画序列，你可以通过精确时间控制，灵活地使用最少的代码实现动画。</li>
		</ul>
		<div class="solve">示例如下：</div>
		<div class="number mb30">{{changeNumber}}</div>
		<el-button type="primary" @click="DigitalLoad(3567)" v-text="text"></el-button>

		<div id="demo">
			<div class="box green" id="box1"></div>
		</div>
		<el-button size="mini" :underline="false" @click="handle(0)">play() 播放</el-button>
		<el-button size="mini" :underline="false" value="pause()" @click="handle(1)">pause() 暂停</el-button>
		<el-button type="primary" size="mini" :underline="false" @click="handle(2)">resume() 继续</el-button>
		<el-button type="primary" size="mini" value="reverseBtn()" :underline="false" @click="handle(3)">reverse() 返回</el-button>
		<el-button plain size="mini" :underline="false" @click="timeScale(0.5)">timeScale(0.5) 减速</el-button>
		<el-button type="primary" size="mini" :underline="false" @click="timeScale(1)">timeScale(1) 原速</el-button>
		<el-button type="primary" size="mini" :underline="false" @click="timeScale(2)">timeScale(2) 加速</el-button>
		<el-button type="primary" size="mini" :underline="false" @click="restart">restart 重新播放</el-button>
	</div>
</template>

<script>
import { TweenMax,TimelineMax, Power2, TimelineLite } from "gsap"

export default {
	name: 'count-shade',
	computed: {
    changeNumber() {
      return this.tweenedNumber.toFixed(0);
    }
  },
	data() {
		return {
			text: '1->100 渐变',
			time: 0.5, // 动画时间
			tweenedNumber: 0, // 初始化数字，使数字归0
      NumberValue: 3567, // 需要变化的数字
      NumberShow: false // 数字是否显示
		}
	},
	methods: {
		// 数字加载方法
    DigitalLoad(value) {
			// 实例化
			let TweenLite = new TimelineLite()
			this.NumberShow = !this.NumberShow

      if (this.NumberShow) {
				this.text = '100->1 渐变'
        TweenLite.to(this.$data, this.time, { tweenedNumber: value })
      } else {
				this.text = '1->100 渐变'
        TweenLite.to(this.$data, this.time, { tweenedNumber: 0 })
      }
		},
		// 动画操作
		handle (status) {
			// 实例化
			let tm = new TimelineLite()
			// let tm = new TimelineMax()
			// tm.to('#box1', 6, {x: 632})
      if (status === 0) {
				tm.play()
			}
			if (status === 1) {
				// tween.pause()
				// let tm = new TimelineMax();
        // tm.to('#box1', 6, {x: 500});

				// alert(1)
				tm.pause()
			}
			if (status === 2) {
				tm.resume()
				return
			}
			if (status === 3) {
				// tween.reverse()
				// reverseBtn.onclick = function() {
				// 		tween.reverse();
				// }
			}
		},
		// 时间设置
		timeScale (time) {
			// 实例化
			let TweenLite = new TimelineLite()
			let tween = TweenLite.to(box1, 6, {left:"632px"})
			if (time === 0.5) {
 				tween.timeScale(0.5)
			}
			if (time === 1) {
 				tween.timeScale(1)
			}
			if (time === 2) {
 				tween.timeScale(2)
			}
		},
		// 重新播放
		restart () {
			// 实例化
			let TweenLite = new TimelineLite()
			let tween = TweenLite.to(box1, 6, {left:"632px"})
			tween.restart()
		}
	}
}
</script>

<style lang="less" scoped>
.count-shade {
	.number {
		color: #e6a23c;
		font-size: 60px;
		font-family: fantasy;
	}
	#demo {
		width: 692px;
		height: 60px;
		background-color: #333;
		padding: 8px;
		margin-bottom: 10px;
	}
	.box {
		width: 50px;
		height: 50px;
		border-radius: 6px;
		margin-top: 4px;
		display: inline-block;
		position: absolute;
	}
	.green {
		background-color: #6fb936;
	}
}
</style>
