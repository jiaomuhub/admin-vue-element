<template>
  <div>
    <div class="page-header">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/home'}">管理控制</el-breadcrumb-item>
        <el-breadcrumb-item>看房管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="house-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="120px">
        <el-form-item label="状态">
          <el-input v-model="formInline.status" placeholder="全部"></el-input>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="formInline.number" placeholder="产品编号搜索"></el-input>
        </el-form-item>
        <el-form-item label="看房人联系方式">
          <el-input v-model="formInline.number" placeholder="看房人联系方式搜索"></el-input>
        </el-form-item>
        <el-form-item label="看房日期" class="date-box">
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
          <el-input v-model="formInline.name" placeholder="搜索小区或者区域"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="house-box">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="index"
          label="产品编号">
        </el-table-column>
        <el-table-column
          prop="user"
          label="看房用户">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="看房用户手机号">
        </el-table-column>
        <el-table-column
          prop="date"
          label="看房时间">
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
    name: 'house-manage',
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
          user: '张三',
          tel: '11111111111',
          date: '2016-05-02',
          status: '2016-05-02',
          stype: '2016-05-02',
          name: '王小虎',
          money: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄',
          handle: '查看详情'
        }, {
          index: 1,
          user: '张三',
          tel: '11111111111',
          date: '2016-05-02',
          status: '2016-05-02',
          stype: '2016-05-02',
          name: '王小虎',
          money: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄',
          handle: '查看详情'
        }]
      }
    },
    methods: {
      onSubmit () {
        console.log(this.formInline)
      },
      handleClick (row) {
        this.$router.push({path: '/houseDetail'})
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

<style scoped>
  .page-header{
    background: #fff;
    padding: 15px;
  }
  .house-box {
    margin: 20px;
    padding: 20px 20px 0;
    background-color: #fff;
  }
  .house-box .el-form-item {
    width: 30%;
  }
  .house-box .el-form-item__content {
    width: 74%;
  }
</style>
