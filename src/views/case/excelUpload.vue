<template>
	<div class="case-box excel-upload">
    <h1>excel-上传</h1>
		<upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
	</div>
</template>

<script>
import UploadExcelComponent from './uploadExcel.vue'

export default {
	name: 'excel-upload',
	data() {
		return {
			tableData: [],
      tableHeader: []
		}
	},
	components: {
		UploadExcelComponent
	},
	methods: {
		beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    }
	}
};
</script>
<style lang="less" scoped>
.excel-upload {

}
</style>
