<template>
  <div class="my-soccer">
    <navbar></navbar>
    <div class="container">
      <el-tabs class="tabs-box" v-model="activeName" @tab-click="handleClick">
        <el-tabs class="tabs-box-sub" v-model="activeName" @tab-click="handleClickSub">
          <el-tab-pane label="积分" name="jifen">
            <div class="score-box">
              <!-- 父子传值 / 父组件调用子组件事件 -->
              <score-box :seasonId="seasonId" ref="mychild1"></score-box>
            </div>
          </el-tab-pane>
          <el-tab-pane label="射手榜" name="sheshou">
            <selected-box :seasonId2="seasonId2" ref="mychild2"></selected-box>
          </el-tab-pane>
          <el-tab-pane label="助攻榜" name="zhugong">
            <assistsBox :seasonId3="seasonId3" ref="mychild3"></assistsBox>
          </el-tab-pane>
          <el-tab-pane label="赛程" name="saicheng">
            <scheduleBox :seasonId4="seasonId4" :roundId="roundId" ref="mychild4"></scheduleBox>
          </el-tab-pane>
        </el-tabs>
         
        <el-tab-pane :label="item.label" :name="item.name" v-for="(item, index0) in soccerInfo" :key="index0">
          <div class="league-title" slot="label">
            <img class="league-icon" :src="item.leagueIcon">
            <span class="league-label" v-text="item.label"></span>
          </div>
          <!-- 欧洲五大联赛 -->
          <div class="europe-area" v-if="europeArea">
            <el-table
              v-loading="loading"
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
          <span class="flag">欧冠区</span>
        </div>
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
        <div class="rule">
          <span class="rule-txt" @click="lookRule">积分规则</span>
        </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 规则弹窗 -->
    <el-dialog
      class="rule-box"
      title="积分规则"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <div v-html="ruleTxt"></div>
    </el-dialog>
  </div>
</template>

<script>
import navbar from '@/views/index/navbar'
import scoreBox from './scoreBox' // 积分榜
import selectedBox from './selectedBox' // 射手榜
import assistsBox from './assistsBox' // 助攻榜
import scheduleBox from './scheduleBox' // 赛程
import axios from 'axios'

export default {
  name: 'my-news',
  components: {
    navbar,
    scoreBox,
    selectedBox,
    assistsBox,
    scheduleBox
  },
  filters: {

  },
  data () {
    return {
      activeName: 'zhongchao',
      activeNameSub: 'jifen',
      seasonId: 17758,
      seasonId2: 17758,
      seasonId3: 17758,
      seasonId4: 17758,
      roundId: 92894,
      dialogVisible: false, // 积分规则弹窗
      chinaArea: true, // 中国区
      europeArea: false, // 欧洲区
      loading: true, // 足球数据加载loading
      soccerData: [], // 比赛信息
      soccerDataZh1: [], // 大连赛区
      // soccerDataZh2: [], // 苏州赛区
      ruleTxt: '', // 积分规则
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
    this.getSoccerData(17758)
  },
  methods: {
    handleClick(tab) {
      // 英超：17139
      // 中超: 17758
      // 西甲: 17133
      // 意甲: 17179
      // 德甲: 17051
      // 法甲: 16786
      // 中甲: 15749
      this.soccerData = []
      this.soccerDataZh1 = []
      this.soccerDataZh2 = []
      let seasonId = 17758
      let roundId = 92894
      if (tab.name === 'zhongchao') {
        seasonId = 17758
        roundId = 92894
        this.chinaArea = true // 中国区
        this.europeArea = false // 欧洲区
      }
      if (tab.name === 'yinchao') {
        seasonId = 17139
        roundId = 73539
        this.chinaArea = false // 中国区
        this.europeArea = true // 欧洲区
      }
      if (tab.name === 'xijia') {
        seasonId = 17133
        roundId = 73733
        this.chinaArea = false // 中国区
        this.europeArea = true // 欧洲区
      }
      if (tab.name === 'yijia') {
        seasonId = 17179
        roundId = 73750
        this.chinaArea = false // 中国区
        this.europeArea = true // 欧洲区
      }
      if (tab.name === 'dejia') {
        seasonId = 17051
        roundId = 72936
        this.chinaArea = false // 中国区
        this.europeArea = true // 欧洲区
      }
      if (tab.name === 'fajia') {
        seasonId = 16786
        roundId = 72720
        this.chinaArea = false // 中国区
        this.europeArea = true // 欧洲区
      }
      if (tab.name === 'zhongjia') {
        seasonId = 15749
        roundId = ''
        this.chinaArea = false // 中国区
        this.europeArea = true // 欧洲区
      }
      this.seasonId = seasonId
      this.seasonId2 = seasonId
      this.seasonId3 = seasonId
      this.seasonId4 = seasonId
      this.roundId = roundId
      this.getSoccerData(seasonId)
    },
    handleClickSub (tab) {
      if (tab.name === 'jifen') {
        this.$refs.mychild1.getSoccerData()
      }
      if (tab.name === 'sheshou') {
        this.$refs.mychild2.getSelectedData()
      }
      if (tab.name === 'zhugong') {
        this.$refs.mychild3.getAssistsData()
      }
      if (tab.name === 'saicheng') {
        this.$refs.mychild4.getSelectedData()
      }
    },
    getSoccerData (seasonId) {
      let params = {
        season_id: seasonId,
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
          if (seasonId === 17758) {
            this.soccerDataZh1 = data.content.rounds[0].content.data
            // this.soccerDataZh1 = data.content.rounds[0].content.data[0].data
            // this.soccerDataZh2 = data.content.rounds[0].content.data[1].data
          }
          this.ruleTxt = data.content.description.replace(/\n|\r\n/g,"<br/>") || '暂无'
        }
      })
    },
    // 查看规则
    lookRule () {
      this.dialogVisible = true
    },
    // 关闭弹窗回调
    handleClose () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
.my-soccer {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  &::-webkit-scrollbar{
		width: 6px;
		background-color: #f5f5f5;
	}
	/*定义滚动条轨道 内阴影+圆角*/
	&::-webkit-scrollbar-track{
		border-radius: 10px;
		background-color: #f5f5f5;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
	}
	/*定义滑块 内阴影+圆角*/
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: rgba(0, 0, .0, .1);
	}
  .container {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    .china-area,.europe-area {
      height: 660px;
      overflow-y: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 0px;
        background-color: #f5f5f5;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f5f5f5;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      }
      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, .0, .1);
      }
    }
    .china-area {
      &::-webkit-scrollbar {
        width: 6px;
        background-color: #f5f5f5;
      }
    }
    .score-box {
      &::-webkit-scrollbar {
        width: 6px;
        background-color: #f5f5f5;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f5f5f5;
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
    .el-tabs {
      .el-tabs__item {
        border:1px solid red;
      }
    }
    .rule {
      position: absolute;
      top: 46px;
      right: 10px;
      z-index: 9;
      font-size: 15px;
      writing-mode: lr-tb;
      cursor: pointer;
      .rule-txt {
        color: #333;
        font-weight: bold;
      }
    }
  }
}
</style>

<style lang="less">
.my-soccer {
  .container {
    .el-tabs {
      .el-tabs__nav-wrap::after {
        background-color: transparent;
      }
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
    .tabs-box {
      .el-tabs__active-bar {
        background-color: #17b23c;
      }
      .el-tabs__item:hover {
        color: #17b23c;
      }
      .el-tabs__item.is-active {
        color: #17b23c;
      }
    }
    .tabs-box-sub {
      .el-tabs__active-bar {
        height: 5px;
        background-color: #17b23c;
      }
      .el-tabs__item {
        width: 100px;
      }
      .el-tabs__nav-scroll {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .europe-area {
      position: relative;
      .el-table {
        .el-table__body {
          width: 1192px !important;
        }
      }
      .flag {
        position: absolute;
        top: 48px;
        right: 8px;
        display: inline-block;
        width: 60px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        background-color: #0d8432;
      }
      .el-table--enable-row-hover .el-table__body tr:nth-child(-n + 4)>td {
        color: #fff;
        background-color: #17b23c;
      }
    }
    .china-area {
      .el-table--enable-row-hover .el-table__body tr:nth-child(-n + 4)>td {
        color: #fff;
        background-color: #17b23c;
      }
    }
  }
  .el-table {
    .el-table__body-wrapper {
      &::-webkit-scrollbar {
        width: 6px;
        background-color: #f5f5f5;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f5f5f5;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      }
      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, .0, .1);
      }
    }
  }
  .rule-box {
    .el-dialog__body {
      text-align: justify;
    }
  }
}
</style>