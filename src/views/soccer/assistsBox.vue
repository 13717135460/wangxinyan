<template>
  <div class="assists-box">
    <div class="container">
      <el-table
        class="europe-area"
        v-loading="loading"
        :data="assistsData"
        height="730"
        element-loading-text="数据加载中..."
      >
        <el-table-column label="排名">
          <template slot-scope="scope">
            <span>{{scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column label="球员">
          <template slot-scope="scope">
            <div class="team">
              <img class="team-logo" :src="scope.row.person_logo">
              <span class="team-name" v-text="scope.row.person_name"></span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="球队">
          <template slot-scope="scope">
            <div class="team">
              <img class="team-logo" :src="scope.row.team_logo">
              <span class="team-name" v-text="scope.row.team_name"></span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="count" label="助攻"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'assists-box',
  props: ['seasonId3'],
  data () {
    return {
      loading: true, // 足球数据加载loading
      assistsData: [], // 射手榜
      ruleTxt: ''
    }
  },
  mounted () {
    this.getAssistsData()
  },
  methods: {
    getAssistsData () {
      let params = {
        season_id: this.seasonId3,
        app: 'dqd',
        version: 0,
        platform: 'web',
        type: 'assists' // 助攻
      }
      this.loading = true
      this.assistsData = []
      this.$api.getGoalsData(params).then(res => {
        let { data, status } = res
        if (status === 200) {
          this.loading = false
          this.assistsData = data.content.data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.assists-box {
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
    .china-area {
      height: 660px;
      overflow-y: auto;
      overflow-x: hidden;
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
.assists-box {
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
    th.is-leaf:nth-child(1) {
      text-align: center;
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
