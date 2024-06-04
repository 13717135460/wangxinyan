<template>
  <div class="my-website">
    <navbar></navbar>
    <div class="container">
      <div class="tips">
        <span title="以史为镜">今天是<span class="time" v-text="date"></span>历史上的今天发生了哪些重大事件 『以史为镜』</span>
        <span class="feeling" @click="feelingBtn">建站感悟</span>
      </div>
      <el-collapse class="history-list" v-model="activeName" @change="handleChange" accordion>
        <el-collapse-item v-for="(item, index) in historyList" :key="index" :name="item.e_id">
          <template slot="title">
            <span v-text="`${item.date}   ${item.title}`"></span>
            <span class="detail-btn">详情</span>
          </template>
          <div class="detail-txt" v-text="itemDetail"></div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- 建站感悟 -->
    <el-dialog
      title="建站感悟"
      :visible.sync="dialogVisible"
      width="36%"
      center>
      <div class="context">
        <p class="txt">自从进入程序开发这个行业，就想着有一天能够有一个自己的个人网站，工作的前几年，由于开发经验不足，没办法凭一己之力完成全站的搭建及开发(包括UI设计,网站排版,站点内容板块)等综合性的工作，时至今日，工作已有5年之久，工作经验也有了一定的积累，是时候启动这个计划了 今日终于成行</p>
        <p class="txt">个人喜欢古典中国风的元素，它有着中华文化底蕴的，那种意境在喧嚣的闹市带来了一丝宁静。网站的主页就选择了颇具古典气息的背景封面，包括站点导航的古典字体衬托出了站点的特性，把这些元素融合进来，这一切源自个人的中国风的偏好吧！</p>
        <p class="txt">2019年底在万网购买了wxyweb.com域名和阿里云的ECS服务器，工信部域名认证的过程崎岖坎坷，先后提交3~4次资料才认证通过，过程繁琐差点放弃了，还好坚持下来了，随后开始了前后端框架的搭建，页面的主风格花了一个多星期的构思，终于设计出了自己满意的风格和色调。页面主要分为首页、博客、新闻、足球、案例等5个模块,把个人的新浪博客、前端常用的案例工具、海内外各领域的新闻资讯和个人的喜好(足球)等元素融合进来，极大的丰富了网站内容和自己既定设想。网站首页放置了历史上今天板块，主要是个人对历史的喜爱，突出"以史为镜"的主题。也让大家浏览站点时了解古往今来发生的今日历史事件。</p>
        <p class="txt">2016年年中入职乐信，从那时开始就开始持续更新我的新浪博客：<a class="blog-link" href="http://blog.sina.com.cn/wangxinyandc" target="_blank">http://blog.sina.com.cn/wangxinyandc</a> 给自己定下目标一月2篇原创博客，最多的一次月更7篇，截止到现在博客已经更新了120篇，每一篇博客看似简单，实则不然，首先要想写什么，然后要准备素材，背景介绍，举例说明，案例演示，个人实战，总结等一系列下来差不多要花3-7天(工作之余)时间，这期间不知道经历了多少个晚上公司加班和周末在家写博的经历，回想起来最大的感触就是做好一件事贵在坚持，坚持能够锻炼一个人的品质，坚持也是暗暗和自己较劲，自己也很感激着一路走来的坚持，把坚持养成一种习惯，无论是写新浪博客还是搭建自己个人网站，初心还是希望能够在自己从事的行业里留下自己的足迹，如果自己写的东西能够给同行们带来帮助那是最好不过了~</p>
        <p class="txt">最后，职业生涯中的最重要的2位leader 雄哥(彩讯)和华哥(乐信)，给了很多职场宝贵的意见和方法论，在此表示感谢！</p>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">关 闭</el-button>
      </span> -->
    </el-dialog>
    <!-- 引入load组件 -->
    <!-- <load></load> -->
    <!-- 引入copyright -->
    <!-- <footers></footers> -->
    <div class="back" @click="backIndex">返回</div>
  </div>
</template>

<script>
import navbar from '@/views/index/navbar'
// import footers from '@/components/footers'
// import load from '@/components/loading'
// import footers from '@/views/index/footers'

import axios from 'axios'

export default {
  name: 'my-website',
  props: {
    msg: String
  },
  components: {
   navbar,
   // load, // 引入load组件
   // footers, // 引入底部copyright
  },
  data () {
    return {
      date: '',
      activeName: '1',
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      historyList: [],
      itemDetail: '', // 事件详情
      dialogVisible: false, // 建站感悟弹窗
    }
  },
  mounted () {
    this.date = `${this.year}年${this.month}月${this.day}日`
    this.getHistoryDaysData()
  },
  methods: {
    backIndex () {
      this.$router.push('/index')
    },
    // 折叠面板事件
    handleChange (id) {
      this.getDayDetail(id)
    },
    getHistoryDaysData () {
      let month = new Date().getMonth() + 1
      let day = new Date().getDate()
      let params = {
        date : `${month}/${day}`,
        key: "d3da5d7cc71de0d565b38b6f51ae36d4",
      }
      this.$api.getHistoryDaysData(params).then(res => {
        let { result, error_code } = res.data
        if (error_code === 0) {
          this.historyList = result
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取历史详情
    getDayDetail (id) {
      let params = {
        e_id: id,
        key: "d3da5d7cc71de0d565b38b6f51ae36d4",
      }
      this.$api.getHistoryDaysDetail(params).then(res => {
        let { result, error_code } = res.data
        if (error_code === 0 && result) {
          this.itemDetail = result[0].content
        }
      })
    },
    // 建站感悟
    feelingBtn () {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.my-website {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color:#e6e1e6;
  background-size: 100% 100%;
  &::-webkit-scrollbar {
    width:10px;
    height:10px;
  }
  &::-webkit-scrollbar-button    {
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-track     {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb{
    background: #c1c1c1;
    border-radius:4px;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    .tips {
      position: fixed;
      top: 110px;
      z-index: 9;
      left: -100px;
      right: 0;
      width: 888px;
      height: 66px;
      line-height: 66px;
      background-color: #e6e1e6;
      .feeling {
        position: absolute;
        top: 0;
        right: -20px;
        z-index: 9;
        color: #990030;
        background: #e6e1e6;
        cursor: pointer;
      }
    }
    .history-list {
      border: none;
      .el-collapse-item {
        position: relative;
        .detail-btn {
          position: absolute;
          top: 0;
          right: 26px;
          z-index: 3;
          font-size: 12px;
        }
      }
      .detail-txt {
        word-break: break-all;
        border: 1px dashed #999;
        padding: 10px;
        border-radius: 3px;
        word-break: break-all;
      }
    }
    .time {
      margin: 0 3px;
      color: #fa2f2f;
    }
  }
  .context {
    color: #666;
    .txt {
      margin-bottom: 16px;
      letter-spacing: 1px;
      text-align: justify;
    }
    .blog-link {
      color: #990030;
    }
  }
  .back {
    position: fixed;
    left: 50px;
    bottom: 50px;
    width: 76px;
    height: 76px;
    cursor: pointer;
    color: transparent;
    background: url('../../assets/common/img/back.png') no-repeat;
  }
}
</style>
<style lang="less">
.my-website {
  .container {
    width: 860px;
    height: 100%;
    .tips {
      width: 860px;
      margin: 0 auto;
    }
    .history-list {
      width: 860px;
      margin: 0 auto;
      padding-top: 60px;
      text-align: justify;
      color: #15557b;
      .el-collapse-item__header {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid transparent;
        background-color: transparent;
      }
      .el-collapse-item__wrap {
        border-bottom: 1px solid transparent;
        background-color: transparent;
      }
    }
  }
}
</style>
