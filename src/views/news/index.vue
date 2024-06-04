<template>
  <div class="my-news">
    <navbar></navbar>
    <div class="container">
      <el-tabs class="new-tabs" v-model="activeType" :tab-position="tabPosition" @tab-click="handleClick">
        <el-tab-pane :label="item.label" :name="item.name" v-for="(item, index) in tabsTitle" :key="index">
          <ul>
            <li v-for="(items, index) in newsInfo">
              <div class="news-pic">
                <img :src="items.thumbnail_pic_s" alt="图片">
              </div>
              <div class="news-info">
                <h3 class="news-info-title">
                  <a :href="items.url" target="_blank" v-text="items.title"></a>
                </h3>
                <div class="news-info-foot">
                  <time class="time" v-text="items.date"></time>
                  <span class="source">来源：{{items.author_name}}</span>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/index/navbar'
import axios from 'axios'

export default {
  name: 'my-news',
  components: {
    navbar
  },
  mounted () {
    this.handleClick('top')
  },
  data () {
    return {
      activeType: 'top',
      tabPosition: 'left',
      newsInfo: [],
      tabsTitle: [
        {
          label: '头条',
          name: 'top'
        },
        {
          label: '社会',
          name: 'shehui'
        },
        {
          label: '国内',
          name: 'guonei'
        },
        {
          label: '国际',
          name: 'guoji'
        },
        {
          label: '娱乐',
          name: 'yule'
        },
        {
          label: '体育',
          name: 'tiyu'
        },
        {
          label: '军事',
          name: 'junshi'
        },
        {
          label: '科技',
          name: 'keji'
        },
        {
          label: '财经',
          name: 'caijing'
        },
        {
          label: '时尚',
          name: 'shishang'
        }
      ]
    }
  },
  methods: {
    handleClick (tab) {
      this.getNewsData(tab.name)
    },
    getNewsData (name) {
      let params = {
        type: name,
        key: 'cbf8309120cf2b9db13bdde28f063cc6'
      }
      this.$api.getNewsData(params).then(res => {
        let { result, error_code } = res.data
        if (error_code === 0) {
          this.newsInfo = result.data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.my-news {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
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
    .title {
      text-align: left;
    }
  }
}
</style>
<style lang="less">
.my-news {
  .new-tabs {
    ul {
      margin-left: 10px;
      li {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid rgba(153, 153, 153, .3);
        &:nth-child(1) {
          padding-top: 0;
        }
        .news-pic {
          width: 160px;
          height: 90px;
          overflow: hidden;
          img {
            display: inline-block;
            width: 100%;
            transition: all 500ms ease-out;
            &:hover {
              transform: scale(1.08);
            }
          }
        }
        .news-info {
          flex: 1;
          padding-left: 15px;
          .news-info-title {
            a {
              color: #333;
              &:hover {
                color: #406599;
              }
            }
          }
          .news-info-foot {
            display: flex;
            margin-top: 42px;
            .time {
              flex: 1;
            }
            .source {
              margin-right: 15px;
            }
          }
        }
      }
    }
    .el-tabs__active-bar {
      background-color: #2c3e50;
    }
    .el-tabs__item {
      width: 110px;
      height: 50px;
      line-height: 50px;
      padding: 0;
      font-weight: bold;
      text-align: center;
      transition: all .6s;
      &:hover {
        color: #fa2f2f;
        transition: all .6s;
        background-color: transparent;
      }
      &.is-active {
        color: #fa2f2f;
        background-color: transparent;
      }
    }
  }
}
</style>
