<template>
	<div class="case-box interceptor">
    <h1>vue拦截器</h1>
<pre>
<span style="color:#990030; font-weight:bold;">// 请求拦截器</span>
http.interceptors.request.use(
  config => {
    let token = session.get('token')
    if (token) {
      config.headers.Authorization = token  // 将token设置成请求头
    }
    if (config.responseType === 'blob') {
      config.headers.responseType = 'blob' // 设置请求头类型
    }
    if (config.responseType === 'application/x-www-form-urlencoded') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

<span style="color:#990030; font-weight:bold;">// 响应拦截器</span>
http.interceptors.response.use(
  res => {
    // 错误码统一拦截
    let { status, msg } = res.data || res
    if (status !== 0) {
      Message.error(msg) // 需要引入ElementUI message组件
    }
    return res
  },
  error => {
    if (error && error.response) {
      let { status } = error.response.data
      if (status === 400) { // 错误码拦截
        Message.error('服务异常')
      }
      if (status === 404) {
        Message.error('页面请求地址错误')
      }
      if (status === 500) {
        Message.error('服务异常')
      }
      if (status === 'canceled') {
        Message.error('服务异常')
      }
    }
  
    // 对响应错误做点什么
    if(error.message.includes('timeout')){ // 判断请求异常信息中是否含有超时timeout字符串
      Message.error('请求超时')
    }
    return Promise.reject(error)
  }
)
</pre>
	</div>
</template>

<script>
export default {
	name: 'interceptor',
	data() {
		return {

		}
	},
	methods: {

	}
};
</script>
<style lang="less" scoped>
.interceptor {}
</style>
