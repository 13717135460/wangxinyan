<template>
	<div class="case-box tinymce">
    <h1>tinymce 富文本</h1>
    <div class="tinymce">
			<!-- 富文本 -->
			<editor
        id="myTinymce"
        v-model="tinyMceCont"
        v-loading="loading"
        element-loading-text="编辑器加载中"
        :init="initEdit"></editor>
			<!-- /富文本 -->
		</div>
    <div class="mt15 mb15">本地化：https://www.jianshu.com/p/ce7783c8187d</div>
    <div class="mt15 mb15">异步加载 CDN 的引入方式 https://panjiachen.github.io/vue-element-admin-site/zh/feature/component/rich-editor.html#%E5%B8%B8%E8%A7%81%E5%AF%8C%E6%96%87%E6%9C%AC</div>
    <footer class="foot-btn">
      <el-button type="primary" size="mini" @click="getContent">获取内容</el-button>
      <el-button type="primary" size="mini" @click="setContent">设置内容</el-button>
      <el-button type="primary" size="mini" @click="getWords">字数统计</el-button>
    </footer>
	</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue' // 引入组件

export default {
	name: 'tinymce',
	data() {
		return {
      loading: true,
			tinyMceCont: '', // 富文本内容
			initEdit: {
        selector: '#myTinymce',
        menubar: false, // 是否展示菜单栏

        // 本地环境文件路径
        // language_url : '../../assets/common/static/tinymce/langs/zh_CN.js', // 语言包的路径
        // skin_url: '../../assets/common/static/tinymce/skins/ui/oxide', // skin路径
        // language:'zh_CN', // 注意大小写
        // content_css: '../../assets/common/static/tinymce/skins/content/default/content.css', // 加载默认css

        // 测试环境和线上环境路径
        // language_url : '/public/store/static/tinymce/langs/zh_CN.js', // 语言包的路径
        // skin_url: `/public/store/static/tinymce/skins/ui/oxide`, // skin路径
        // language:'zh_CN', // 注意大小写
        // content_css: '/public/store/static/tinymce/skins/content/default/content.css', // 加载默认css

        plugins: 'lists table wordcount image insertdatetime fullscreen imageuploadtoqiniu', // 添加相应配置项-才能在toolbar中配置对应功能
        toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright | forecolor backcolor | table | removeformat | wordcount | code image preview fullscreen',
        height: '700', // 设置编辑器高度
        image_description: false, // 对话框中图片描述字段隐藏
        image_title: true, // 对话框中显示图片名称字段
        automatic_uploads: false,
        file_picker_types: 'image',
        onpageload: () => {
          this.$message({
            type: 'warning',
            message: '编辑器加载中',
            duration: 1200
          })
        },
        init_instance_callback: () => {
          this.$message({
            type: 'success',
            message: '加载完成',
            duration: 1200
          })
          this.loading = false
        },
        file_picker_callback: (cb, value, meta) => {
          var input = document.createElement('input')
          input.setAttribute('type', 'file')
          input.setAttribute('accept', 'image/*')

          input.onchange = function () {
            var file = this.files[0]
            var reader = new FileReader()

            // 图片最大不能超过3MB
            if (file.size > 1024 * 1024 * 3) {
              Toast({
                message: '上传的图片最大不超过3MB',
                duration: 2000
              })
              return false
            }
            reader.onload = function () {
              // 创建formDate对象
              let data = new FormData()
              data.append("files", file)
              data.append("token", sessionStorage.getItem("qiniuToken"))
              data.append("use", 10)
              axios({
                method: "POST",
                url: "/Common/Upload", // 上传地址
                url: "https://upload.qiniup.com/", // 上传地址
                headers: { "Content-Type": "multipart/form-data" },
                data: data,
                timeout: 30000
              }).then(res => {
                var id = 'blobid' + (new Date()).getTime();
                var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                cb(res.data.data.url)
              })
            }
            reader.readAsDataURL(file)
          }
          input.click()
        }
      }
		}
  },
  components: {
    Editor
  },
	methods: {
    // 获取内容
    getContent () {
      console.log(tinyMCE.activeEditor.getContent())
    },
    // 设置内容
    setContent () {
      this.tinyMceCont = tinymce.activeEditor.setContent('这是设置的内容...')
    },
    // 字数统计
    getWords () {
      console.log(activeEditor.selection.getContent())
    }
	}
}
</script>
<style lang="less" scoped>
.tinymce {
  .foot-btn {
    margin-top: 30px;
  }
}
</style>
<style lang="less">
.tox-notifications-container {
  display: none;
}
</style>
