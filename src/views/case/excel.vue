<template>
	<div class="case-box excel">
    <h1>Excel下载</h1>
		<p class="mt50 mb10">一、下载选中数据</p>
		<el-table
			id="tableData"
			ref="multipleTable"
			:data="users"
			highlight-current-row
			@selection-change="handleSelectionChange"
			:header-cell-style="{background:'#f5f7fa',borderTop: '1px solid #ebeef5'}"
		>
			<el-table-column type="selection" align="center" />
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="age" label="年龄"></el-table-column>
			<el-table-column prop="birthday" label="出生日期"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
			<el-table-column prop="job" label="工作"></el-table-column>
		</el-table>

		<!--下载案例-->
		<table id="selectTableData"  v-show="false">
			<tr>
				<th v-for="(item, index) in egTitle" :key="index" v-text="item"></th>
			</tr>
			<tr v-for="(item, indexs) in egValue" :key="indexs">
				<td v-text="item.name"></td>
				<td v-text="item.age"></td>
				<td v-text="item.birthday"></td>
				<td v-text="item.address"></td>
				<td v-text="item.job"></td>
			</tr>
		</table>
	  <div class="download-btn mt30">
		  <el-button type="primary" size="mini" :disabled="isDisabled" @click="selectDownload">下载选中数据</el-button>
		</div>
		<p class="mt50 mb10">二、显示指定列</p>
		<!-- 添加指定列 -->
		<div class="filter-container mb10">
      <el-checkbox-group v-model="checkboxVal">
        <el-checkbox label="age">age</el-checkbox>
        <el-checkbox label="birthday">birthday</el-checkbox>
        <el-checkbox label="address">address</el-checkbox>
        <el-checkbox label="job">job</el-checkbox>
      </el-checkbox-group>
    </div>
    <el-table :key="key" :data="users" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column v-for="item in formThead" :key="item" :label="item">
        <template slot-scope="scope">
          {{ scope.row[item] }}
        </template>
      </el-table-column>
    </el-table>
	</div>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

const defaultFormThead = ['age', 'birthday', 'address', 'job']

export default {
    name: 'excel',
    data() {
			return {
				users: [
					{
						name: '张三',
						age: 20,
						birthday: '1988-10-8',
						address: '深圳市南山区',
						job: '软件工程师'
					},
					{
						name: '李四',
						age: 26,
						birthday: '1989-1-6',
						address: '武汉市武昌区',
						job: 'HRBP'
					},
					{
						name: '王五',
						age: 23,
						birthday: '1998-3-8',
						address: '上海市崇明区',
						job: '足球运动员'
					},
					{
						name: '赵柳',
						age: 28,
						birthday: '1996-11-18',
						address: '广州市天河区',
						job: '前台'
					},
					{
						name: '天琪',
						age: 30,
						birthday: '1990-12-30',
						address: '北京市朝阳区',
						job: '总裁'
					}
				],
				egTitle: ['姓名','年龄','出生日期','地址','工作'],
				egValue: [],
				isDisabled: true,
				key: 1, // table key
				formTheadOptions: ['age', 'birthday', 'address', 'job'],
				checkboxVal: defaultFormThead, // checkboxVal
				formThead: defaultFormThead // 默认表头 Default header
			}
		},
		watch: {
			checkboxVal(valArr) {
				this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
				this.key = this.key + 1 // 为了保证table 每次都会重新渲染
			}
		},
    methods: {
			// 选中表格下载
			selectDownload () {
				var xlsxParam = { raw: true }; // 转换成excel时，使用原始的格式
				var wb = XLSX.utils.table_to_book(document.querySelector("#selectTableData"), xlsxParam) // tableData为列表id
				var wbout = XLSX.write(wb, {
					bookType: "xlsx",
					bookSST: true,
					type: "array"
				});
				try {
					FileSaver.saveAs(
						new Blob([wbout], { type: "application/octet-stream;charset=utf-8" }),
						"指定数据.xlsx"
					)
				} catch (e) {
					if (typeof console !== "undefined") console.log(e, wbout)
				}
				return wbout
			},
			handleSelectionChange(val) {
				this.egValue = val
				val.length > 0 ? this.isDisabled = false : this.isDisabled = true
			}
    }
};
</script>
<style lang="less" scoped>
.excel {

}
</style>
