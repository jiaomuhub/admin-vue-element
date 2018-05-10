<template>
  <div>
    <div class="page-header">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/home'}">管理控制</el-breadcrumb-item>
        <el-breadcrumb-item>产品管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="pmanage-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="68px">
        <el-form-item label="状态">
          <el-input v-model="formInline.status" placeholder="全部"></el-input>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="formInline.number" placeholder="产品编号搜索"></el-input>
        </el-form-item>
        <el-form-item label="出租方式">
          <el-select v-model="formInline.stype" placeholder="请选择出租方式">
            <el-option label="整租" value="shanghai"></el-option>
            <el-option label="合租" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间" class="date-box">
          <div class="block">
            <el-date-picker
              v-model="formInline.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="产品名称">
          <el-input v-model="formInline.name" placeholder="产品名称搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="pmanage-box">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="index"
          label="产品编号">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="stype"
          label="出租方式">
        </el-table-column>
        <el-table-column
          prop="name"
          label="产品名称">
        </el-table-column>
        <el-table-column
          prop="money"
          label="产品租金">
        </el-table-column>
        <el-table-column
          prop="address"
          label="产品位置">
        </el-table-column>
        <el-table-column
          prop="quan"
          label="是否使用预租劵">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          status: '',
          number: '',
          date: '',
          name: '',
          stype: ''
        },
        tableData: [{
          index: 0,
          date: '2016-05-02',
          status: '2016-05-02',
          stype: '2016-05-02',
          name: '王小虎',
          money: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄',
          quan: '是',
          handle: '查看详情'
        }, {
          index: 1,
          date: '2016-05-02',
          status: '2016-05-02',
          stype: '2016-05-02',
          name: '王小虎',
          money: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄',
          quan: '是',
          handle: '查看详情'
        }]
      }
    },
    methods: {
      onSubmit () {
        console.log(this.formInline)
      },
      handleClick (row) {
        this.$router.push({path: '/productDetail'})
        console.log(row)
      },
      formatter (row, column) {
        return row.address
      },
      filterTag (value, row) {
        return row.tag === value
      },
      filterHandler (value, row, column) {
        const property = column['property']
        return row[property] === value
      }
    }
  }
</script>
<style>
  .page-header{
    background: #fff;
    padding: 15px;
  }
  .pmanage-box {
    margin: 20px;
    padding: 20px 20px 0;
    background-color: #fff;
  }
  .pmanage-box .el-form-item {
    width: 30%;
  }
  .date-box .el-form-item__content{
    width: 74%;
  }
</style>
