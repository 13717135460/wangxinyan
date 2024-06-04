<template>
  <div class="schedule-box">
    <div class="container">
      <div class="schedule-title">
        <span class="prev" @click="prevBtn">&lt;上一轮</span>
        <span class="num" v-text="rounds && rounds[0].name"></span>
        <span class="next" @click="nextBtn">下一轮&gt;</span>
      </div>
      <el-table
        class="china-area"
        v-loading="loading"
        :data="scheduleData"
        stripe
        height="620"
        element-loading-text="数据加载中..."
      >
        <el-table-column>
          <template slot-scope="scope">
            <div class="matches-info">
              <div class="time">
                <span v-text="scope.row.start_play"></span>
              </div>
              <div class="team-box">
                <span class="team-name team-a-name">
                  <span class="name-a" v-text="scope.row.team_A_name"></span>
                  <img :src="scope.row.team_A_logo" alt="球队logo">
                </span>
                <!-- status: "Played" 已结束 Fixture 未开始 Uncertain 不确定 -->
                <span class="vs" v-if="scope.row.status === 'Fixture' || scope.row.status === 'Uncertain'">VS</span>
                <span class="vs" v-if="scope.row.status === 'Postponed'">推迟</span>
                <span class="score" v-if="scope.row.status === 'Played'">
                  <em v-text="scope.row.score_A"></em>&nbsp;-&nbsp;<em v-text="scope.row.score_B"></em>
                </span>
                <span class="team-name team-b-name">
                  <img :src="scope.row.team_B_logo" alt="球队logo">
                  <span class="name-b" v-text="scope.row.team_B_name"></span>
                </span>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'schedule-box',
  props: ['seasonId4', 'roundId'],
  data () {
    return {
      loading: true, // 足球数据加载loading
      scheduleData: [], // 射手榜
      rounds: null,
      currentWeek: 1 // 当前是第几轮
    }
  },
  mounted () {
    this.getSelectedData()
  },
  methods: {
    getSelectedData (num) {
      let params = {
        season_id: this.seasonId4,
        round_id: this.roundId, // 中超:72903 英超:70296 西甲:70356 意甲:70648 德甲:72936 法甲:72720 中甲: 暂无
        gameweek: this.currentWeek, // 第几轮
        app: 'dqd',
        platform: 'web',
        version: 0
      }
      this.loading = true
      this.scheduleData = []
      this.$api.getScheduleData(params).then(res => {
        let { data, status } = res
        if (status === 200) {
          this.loading = false
          this.scheduleData = data.content.matches
          this.rounds = data.content.rounds.filter(item => {
            if (item.current) return item
          })
        }
      })
    },
    prevBtn () {
      this.currentWeek --
      this.getSelectedData()
      
    },
    nextBtn () {
      this.currentWeek ++
      this.getSelectedData()
    }
  }
}
</script>

<style lang="less" scoped>
.schedule-box {
  overflow-x: hidden;
  &::-webkit-scrollbar{
		width: 6px;
		background-color: #F5F5F5;
	}
	/*定义滚动条轨道 内阴影+圆角*/
	&::-webkit-scrollbar-track{
		border-radius: 10px;
		background-color: #F5F5F5;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
	}
	/*定义滑块 内阴影+圆角*/
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: rgba(0, 0, .0, .1);
	}
  .container {
    width: auto;
    .schedule-title {
      position: absolute;
      top: 0;
      z-index: 9;
      left: 0;
      right: 0;
      display: flex;
      text-align: center;
      height: 60px;
      line-height: 60px;
      padding: 0 30px;
      .num {
        flex: 1;
      }
      .prev, .next {
        cursor: pointer;
      }
    }
    .china-area {
      height: 660px;
      overflow-y: auto;
      overflow-x: hidden;
      .matches-info {
        display: flex;
        align-items: center;
        padding: 0 30px;
        .time {
          position: absolute;
        }
        .team-box {
          flex: 1;
          height: 50px;
          line-height: 50px;
          .team-name {
            display: inline-block;
            width: 150px;
          }
          .team-a-name {
            text-align: right;
            .name-a {
              margin-right: 10px;
            }
          }
          .team-b-name {
            text-align: left;
            .name-b {
              margin-left: 10px;
            }
          }
          .vs, .score {
            margin: 0 30px;
          }
        }
        img {
          width: 26px;
          height: 26px;
          vertical-align: middle;
        }
      }
      &::-webkit-scrollbar {
        width: 6px;
        background-color: #F5F5F5;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #F5F5F5;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      }
      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, .0, .1);
      }
    }
    .league-title {
      display: flex;
      align-items: center;
      justify-content: center;
      .league-label {
        margin-left: 5px;
      }
      .league-icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid rgba(0, 0, .0, .1);
      }
    }
    .title {
      text-align: left;
    }
    .team {
      display: flex;
      align-items: center;
      .team-logo {
        width: 30px;
        height: 30px;
        overflow: hidden;
      }
      .team-name {
        margin-left: 5px;
      }
    }
    .rule-box {
      margin-top: 20px;
    }
    .el-tabs {
      .el-tabs__item {
        border:3px solid orange;
      }
    }
  }
}
</style>

<style lang="less">
.schedule-box {
  .container {
    .el-tabs {
      .el-tabs__item {
        width: 171px;
        height: 60px;
        line-height: 60px;
        padding: 0;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  .el-table {
    .el-table__header {
      .has-gutter {
        tr {
          height: 60px;
        }
      }
    }
    th.is-leaf:nth-child(1) {
      text-align: center;
    }
    tr td {
      height: 50px;
      line-height: 50px;
      padding: 0;
    }
    tr td:nth-child(1) {
      text-align: center;
    }
    .el-table__body-wrapper {
      &::-webkit-scrollbar {
        width: 6px;
        background-color: #F5F5F5;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #F5F5F5;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      }
      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, .0, .1);
      }
    }
  }
}
</style>
