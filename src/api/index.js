import Vue from 'vue'
import axios from 'axios'

let http = axios.create({
  headers: {
    'Content-Type': "application/json;charset=utf-8",
    'Access-Control-Allow-Origin': "*"
  }
})

Vue.prototype.$api = {

  // 获取历史上的今天v2
  getHistoryDaysData: params => { return http.get(`https://v.juhe.cn/todayOnhistory/queryEvent.php`, { params: params }) },
  
  // 获取历史详情v2
  getHistoryDaysDetail: params => { return http.get(`https://v.juhe.cn/todayOnhistory/queryDetail.php`, { params: params }) },

  // 获取新闻数据
  getNewsData: params => { return http.get(`https://v.juhe.cn/toutiao/index`, { params: params }) },

  // 获取足球积分榜
  getScoreData: params => { return http.get(`https://www.dongqiudi.com/sport-data/soccer/biz/data/standing`, { params: params }) },

  // 获取足球射手榜 / 助攻榜
  getGoalsData: params => { return http.get(`https://www.dongqiudi.com/sport-data/soccer/biz/data/person_ranking`, { params: params }) },

  // 获取赛程
  getScheduleData: params => { return http.get('https://www.dongqiudi.com/sport-data/soccer/biz/data/schedule', { params: params }) }

}