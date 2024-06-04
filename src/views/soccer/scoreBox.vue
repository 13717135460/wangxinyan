<template>
  <div class="score-box">
    <div class="container">
      <!-- 欧洲五大联赛 -->
      <el-table
        class="europe-area"
        v-loading="loading"
        v-if="europeArea"
        :data="soccerData"
        height="730"
        element-loading-text="数据加载中..."
      >
      <el-table-column label="排名">
        <template slot-scope="scope">
          <span>{{scope.$index + 1}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="team_name" label="球队" width="200">
        <template slot-scope="scope">
          <div class="team">
            <img class="team-logo" :src="scope.row.team_logo">
            <span class="team-name" v-text="scope.row.team_name"></span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="matches_total" label="场次"></el-table-column>
      <el-table-column prop="matches_won" label="胜"></el-table-column>
      <el-table-column prop="matches_draw" label="平"></el-table-column>
      <el-table-column prop="matches_lost" label="负"></el-table-column>
      <el-table-column prop="goals_pro" label="进球"></el-table-column>
      <el-table-column prop="goals_against" label="失球"></el-table-column>
      <el-table-column prop="goals_against" label="净胜球"></el-table-column>
      <el-table-column prop="points" label="积分"></el-table-column>
    </el-table>
    <!-- 中超 -->
    <div class="china-area" v-if="chinaArea">
      <el-table
        :data="soccerDataZh1"
        height="630"
        v-loading="loading"
        element-loading-text="数据加载中..."
      >
        <el-table-column label="大连赛区">
          <template slot-scope="scope">
            <span>{{scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="team_name" label="球队" width="200">
          <template slot-scope="scope">
            <div class="team">
              <img class="team-logo" :src="scope.row.team_logo">
              <span class="team-name" v-text="scope.row.team_name"></span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="matches_total" label="场次"></el-table-column>
        <el-table-column prop="matches_won" label="胜"></el-table-column>
        <el-table-column prop="matches_draw" label="平"></el-table-column>
        <el-table-column prop="matches_lost" label="负"></el-table-column>
        <el-table-column prop="goals_pro" label="进球"></el-table-column>
        <el-table-column prop="goals_against" label="失球"></el-table-column>
        <el-table-column prop="goals_against" label="净胜球"></el-table-column>
        <el-table-column prop="points" label="积分"></el-table-column>
      </el-table>
      <!-- <el-table
        :data="soccerDataZh2"
        height="550"
        v-loading="loading"
        element-loading-text="数据加载中..."
      >
        <el-table-column label="苏州赛区">
          <template slot-scope="scope">
            <span>{{scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="team_name" label="球队" width="200">
          <template slot-scope="scope">
            <div class="team">
              <img class="team-logo" :src="scope.row.team_logo">
              <span class="team-name" v-text="scope.row.team_name"></span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="matches_total" label="场次"></el-table-column>
        <el-table-column prop="matches_won" label="胜"></el-table-column>
        <el-table-column prop="matches_draw" label="平"></el-table-column>
        <el-table-column prop="matches_lost" label="负"></el-table-column>
        <el-table-column prop="goals_pro" label="进球"></el-table-column>
        <el-table-column prop="goals_against" label="失球"></el-table-column>
        <el-table-column prop="goals_against" label="净胜球"></el-table-column>
        <el-table-column prop="points" label="积分"></el-table-column>
      </el-table> -->
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'my-news',
  components: {
    // navbar
  },
  filters: {

  },
  props: ['seasonId'],
  data () {
    return {
      chinaArea: true, // 中国区
      europeArea: false, // 欧洲区
      loading: true, // 足球数据加载loading
      soccerData: [], // 比赛信息
      soccerDataZh1: [], // 大连赛区
      // soccerDataZh2: [], // 苏州赛区
      ruleTxt: '',
      soccerInfo: [
        {
          label: '中超',
          name: 'zhongchao',
          leagueIcon: require('../../assets/common/img/soccer/zc.png')
        },
        {
          label: '英超',
          name: 'yinchao',
          leagueIcon: require('../../assets/common/img/soccer/yc.png')
        },
        {
          label: '西甲',
          name: 'xijia',
          leagueIcon: require('../../assets/common/img/soccer/xj.png')
        },
        {
          label: '意甲',
          name: 'yijia',
          leagueIcon: require('../../assets/common/img/soccer/yj.png')
        },
        {
          label: '德甲',
          name: 'dejia',
          leagueIcon: require('../../assets/common/img/soccer/dj.png')
        },
        {
          label: '法甲',
          name: 'fajia',
          leagueIcon: require('../../assets/common/img/soccer/fj.png')
        },
        {
          label: '中甲',
          name: 'zhongjia',
          leagueIcon: require('../../assets/common/img/soccer/zj.png')
        }
      ]
    }
  },
  mounted () {
    this.getSoccerData()
  },
  methods: {
    getSoccerData () {
      if (this.seasonId === 17758) {
        this.chinaArea = true // 中国区
        this.europeArea = false // 欧洲区
      } else {
        this.chinaArea = false // 中国区
        this.europeArea = true // 欧洲区
      }
      let params = {
        season_id: this.seasonId,
        app: 'dqd',
        version: 0,
        platform: 'web'
      }
      this.loading = true
      this.soccerData = []
      this.soccerDataZh1 = [] // 大连赛区
      // this.soccerDataZh2 = [] // 苏州赛区
      this.$api.getScoreData(params).then(res => {
        let { data, status } = res
        if (status === 200) {
          this.loading = false
          // 欧洲联赛
          this.soccerData = data.content.rounds[0].content.data
          // 中超联赛赛会制
          if (this.seasonId === 17758) {
            this.soccerDataZh1 = data.content.rounds[0].content.data
            // this.soccerDataZh1 = data.content.rounds[0].content.data[0].data
            // this.soccerDataZh2 = data.content.rounds[0].content.data[1].data
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.score-box {
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
.score-box {
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
