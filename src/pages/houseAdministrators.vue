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
    <!--<add-adminer :isShowModel="isShow" :isEdit="dataEdit" v-on:listinAddAdmin="addAdminer"></add-adminer>-->
    <el-dialog
      title="添加管理员"
      :visible.sync="dialogVisible"
      width="30%"
      center>
      <span class="successModel">
        <el-form ref="form" :model="addForm" label-width="100px" class="add-model-form">
          <el-form-item label="房管员姓名">
            <el-input v-model="addForm.housekeepername"></el-input>
          </el-form-item>
          <el-form-item label="使用联系方式">
            <el-radio-group v-model="addForm.contactway" @change="changeTelOrPhone">
              <el-radio label="手机"></el-radio>
              <el-radio label="座机"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="房管员联系">
            <span>{{addForm.telLebal}}</span><el-input v-model="addForm.tel" class="tel-model"></el-input>
            <!--<span>座机</span><el-input v-model="addForm.phone" class="tel-model"></el-input>-->
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="cancelAdd">取消</el-button>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'house-administrators',
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
        addForm: {
          housekeepername: '',
          contactway: '手机',
          telLebal: '手机',
          tel: ''
        },
        inputValue: '',
        dialogVisible: false,
        addOrEdit: ''
      }
    },
    methods: {
      addAdmin () {
        this.dialogVisible = true
      },
      handleEditClick (row) {
        this.dialogVisible = true
        this.addForm.housekeepername = row.name
        this.addForm.contactway = row.tel
        this.dataEdit = row
        console.log(row)
      },
      handleDelClick (index, rows) {
        // 接口
        rows.splice(index, 1)
      },
      onSubmit () {
        console.log(this.addForm)
        var items = this.addForm
        this.$store.rowData = this.addForm
        this.dialogVisible = false
        for (var item in items) {
          items[item] = ''
        }
      },
      cancelAdd () {
        var items = this.addForm
        this.dialogVisible = false
        for (var item in items) {
          items[item] = ''
        }
      },
      changeTelOrPhone () {
        this.addForm.telLebal = this.addForm.contactway
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
