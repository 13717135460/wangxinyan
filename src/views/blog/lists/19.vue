<template>
  <div class="my-blogs">
    <navbar></navbar>
    <div class="container">
      <h1>SourceTree使用方法和git命令</h1>
      <p>SourceTree 是一个Git代码管理的图形化工具。因为Git 默认只能使用命令行模式进行一系列的操作，这个工具，整个使用了图形化界面操作，容易上手。</p>
      <p>同时也是Mercurial和Subversion版本控制系统工具。支持创建、提交、clone、push、pull 和merge等操作。<br>SourceTree 操作界面如下：</p>
      <p>
        <span class="red">1.主界面</span><br>
        <img src="../img/19/1.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">2.clone git 工程 到本地环境</span><br>
        <img src="../img/19/2.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">3.创建或删除 git 分支</span><br>
        <img src="../img/19/3.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">4. 合并分支</span><br>
        <img src="../img/19/4.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">5.检出远程分支到本地</span><br>
        <img src="../img/19/5.png" alt="截图"><br>
      </p>
      <p>
        <span class="red">6.解决分支冲突</span><br>
        <img src="../img/19/6.png" alt="截图"><br>
      </p>
      <p>
        项目中长存2个分支： 主分支（master） 和开发分支（develp）<br>
        项目存在三种短期分支 ：<br>
        功能分支（feature branch）<br> 补丁分支（hotfix branch）<br> 预发分支（release branch）<br>
        一旦完成开发，它们就会被合并进develop或master，然后被删除。
      </p>
      <p>
        <span class="red">git 常用命令如下</span><br>
        remote 远程分支名   origin branch本地分支名 develop <br>

        $ git pull [remote] [branch]    // 拉取远程仓库的变化，并与本地分支合并 <br>

        $ git push [remote] [branch]    // 上传本地指定分支到远程仓库 <br>

        $ git push [remote]--force    // 强行推送当前分支到远程仓库，即使有冲突 <br>

        $ git add abc.txt global.js ......   //添加制定的文件到暂存区 <br>

        $ git add .   // 添加当前目录的所有文件到暂存区 <br>

        $ git rm [file1][file2] ..    // 删除工作区文件，并且将这次删除放入暂存区 <br>

        $ git commit -mxxx    // 提交暂存区到仓库区 xxx 为提交的备注信息 <br>

        $ git status   // 查看当前状态<br>

        $ git log   // 查看提交记录<br>

        $ git branch   // 列出所有分支 <br>

        $ git branch -r   // 列出所有远程分支 <br>

        $ git branch xxx   // 创建一个分支 <br>

        $ git branch -d xxx    // 删除一个分支 (正在运行的分支不能删除)
      </p>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/index/navbar'

export default {
  name: 'my-blogs',
  components: {
    navbar
  },
  filters: {

  },
  data () {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.my-blogs {
  .container {
    p {
      img {
        max-width: 750px;
      }
    }
  }
}
</style>