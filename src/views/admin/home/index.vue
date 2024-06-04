<template>
  <div class="my-website">
    <div class="container">
      <h1>后台管理系统</h1>
      <div class="login-box">
        <el-form :model="ruleForm" status-icon ref="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="userName">
            <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import footers from '@/views/index/footers'
// import blog from '@/views/blog'

export default {
  name: 'my-website',
  props: {
    msg: String
  },
  components: {
    // footers
    // blog
  },
  filters: {

  },
  data () {
    return {
      ruleForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.userName === 'admin' && this.ruleForm.password === 'a12345') {
            this.$message.success('登录成功')
            this.$router.push('/admin/container')
          } else {
            this.$message.error('用户名密码错误')
          }
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.my-website {
  .container {
    h1 {
      font-size: 36px;
      font-weight: bold;
    }
    margin-top: 100px;
    span {
      margin-right: 20px;
      cursor: pointer;
    }
    .login-box {
      width: 500px;
      margin: 100px auto 0;
    }
    .link {
    margin-left: 10px;
    color: red;
  }
  }
}
</style>
