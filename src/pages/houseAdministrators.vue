<template>
  <div>
    <div class="page-header">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/home'}">管理控制</el-breadcrumb-item>
        <el-breadcrumb-item>房管员管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="admin-box">
      <el-button type="primary" @click="addAdmin">添加管理员</el-button>
    </div>
    <div class="admin-box">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="房管员姓名">
        </el-table-column>
        <el-table-column
          prop="pic"
          label="房管员头像">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="number"
          label="管理房源数">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleEditClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDelClick(scope.$index, tableData)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <add-adminer :isShowModel="isShow" :isEdit="dataEdit" v-on:listinAddAdmin="addAdminer"></add-adminer>
  </div>
</template>

<script>
  import addAdminer from '@/components/addAdminer'
  export default {
    name: 'house-administrators',
    components: {
      addAdminer
    },
    data () {
      return {
        tableData: [{
          name: '张三',
          pic: '张三',
          tel: '11111111111',
          number: '2016-05-02',
          handle: '查看详情'
        }, {
          name: '张三',
          pic: '张三',
          tel: '11111111111',
          number: '2016-05-02',
          handle: '查看详情'
        }],
        inputValue: '',
        isShow: false,
        dataEdit: ''
      }
    },
    methods: {
      addAdmin () {
        this.isShow = true
        this.addOrEdit = 'add'
      },
      addAdminer () {
        this.isShow = this.$store.isShow
        console.log(this.$store.rowData)
      },
      handleEditClick (row) {
        this.isShow = true
        this.dataEdit = row
        console.log(this)
      },
      handleDelClick (index, rows) {
        // 接口
        rows.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
  .admin-box {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
  }
</style>
