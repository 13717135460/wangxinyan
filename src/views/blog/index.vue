<template>
  <div class="my-blog">
    <navbar></navbar>
    <div class="container">
      <div class="blog-list">
        <ul>
          <li v-for="(item, index) in list" :key="index" @click="goDetail(index + 1)">
            <span class="title" v-text="item.name"></span>
            <span class="tips">发布时间：</span>
            <span class="time" v-text="item.createDate"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/index/navbar'
import title from './title.js'

export default {
  name: 'my-blog',
  components: {
    navbar
  },
  filters: {

  },
  data () {
    return {
      list: title // 遍历博客title
    }
  },
  mounted () {

  },
  methods: {
    goDetail (id) {
      this.$router.push(`/blog/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.my-blog {
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
    .blog-list {
      ul {
        padding-bottom: 50px;
        li {
          display: flex;
          height: 36px;
          line-height: 36px;
          font-size: 16px;
          text-align: left;
          cursor: pointer;
          color: #69606b;
          color: #333;
          border-bottom: 1px dashed #9b9b9b;
          font-family: plantc;
          .title {
            flex: 1;
            &:hover {
              color: #fa2f2f;
            }
            &::before {
              content: '•';
              margin-right: 6px;
            }
          }
          .tips {
            position: relative;
            top: 1px;
            color: #878787;
            font-size: 12px;
          }
          .time {
            color: #878787;
            font-size: 14px;
          }
        }
      }
    }
  }
  
}
</style>
