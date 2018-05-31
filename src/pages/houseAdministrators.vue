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
          prop="housekeepername"
          label="房管员姓名">
        </el-table-column>
        <el-table-column
          prop="pic"
          label="房管员头像">
        </el-table-column>
        <el-table-column
          prop="contact"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="manage"
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
            <span>{{addForm.telLebal}}</span><el-input v-model="addForm.contact" class="tel-model"></el-input>
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
  import axios from 'axios';
  export default {
    name: 'house-administrators',
    data () {
      return {
        tableData: [],
        addForm: {
          housekeepername: '',
          contactway: '手机',
          telLebal: '手机',
          contact: ''
        },
        inputValue: '',
        dialogVisible: false,
        addOrEdit: '',
        manageId: ''
      }
    },
    mounted () {
      let self = this;
      let datas = [];
      self.$nextTick(function () {
        axios.get(wy_host + 'supply/all_housekeepers')
          .then(function (res) {
            if(res.status == 200) {
              datas = res.data;
              self.tableData = self.handleData(datas);
            }
            console.log(res)
          })
          .catch(function (err) {
            console.log(err)
          })
      })
    },
    methods: {
      addAdmin () {
        this.dialogVisible = true;
        this.addOrEdit = 'add';
      },
      handleEditClick (row) {
        this.dialogVisible = true;
        this.addForm.housekeepername = row.housekeepername;
        this.addForm.contact = row.contact;
        this.addForm.contactway = row.contactway;
        this.manageId = row.id;
        this.addOrEdit = 'edit';
        console.log(row)
      },
      handleDelClick (index, rows) {
        let self = this;
        let datas = {
          "id": rows[index].id,
          "name": rows[index].housekeepername
        }
        self.$confirm('确定是否删除该房管员吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.post(wy_host + 'supply/remove_housekeeper', datas)
            .then(function (res) {
              if(res.status == 200) {
                self.tableData = self.handleData(res.data);
              }
            })
            .catch(function (err) {
              console.log(err)
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      onSubmit () {
        let self = this;
        let url = '';
        let _tableData = [];
        let items = {
          housekeepername: self.addForm.housekeepername,
          contactway: self.addForm.contactway,
          contact: self.addForm.contact
        };
        if(self.addOrEdit == 'add') {
          url = wy_host + 'supply/add_housekeeper/'
        }
        if(self.addOrEdit == 'edit') {
          items.id = self.manageId;
          url = wy_host + 'supply/edit_housekeeper/'
        }
        axios.post(url, items)
          .then(function (res) {
            if(res.status == 200) {
              items.manage = '0';
              items.pic = '预留';
              if(self.addOrEdit == 'add') {
                items.id = res.data.housekeeper.id;
                items.supplierId = res.data.housekeeper.supplierId;
                self.tableData.unshift(items)
              }
              if(self.addOrEdit == 'edit') {
                _tableData = self.tableData;
                for(var i=0;i<_tableData.length;i++) {
                  if(_tableData[i].id == res.data.id) {
                    _tableData[i].id = res.data.id;
                    _tableData[i].supplierId = res.data.supplierId;
                    _tableData[i].housekeepername = res.data.housekeepername;
                    _tableData[i].contactway = res.data.contactway;
                    _tableData[i].contact = res.data.contact;
                    _tableData[i].contact = res.data.contact;
                  }
                }
                // items.id = res.data.id;
                // items.supplierId = res.data.supplierId;
                self.tableData = _tableData;
              }
              self.$store.rowData = self.addForm;
              self.dialogVisible = false;
              for (var item in self.addForm) {
                self.addForm[item] = ''
              }
            }
          })
          .catch(function (err) {
            console.log(err);
          })
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
      },
      handleData (datas) {
        let datasArray = [];
        let item = {};
        for(var i=0;i<datas.length;i++){
          item = {
            housekeepername: datas[i].keeper.housekeepername,
            contact: datas[i].keeper.contact,
            contactway: datas[i].keeper.contactway,
            manage: datas[i].manage,
            pic: datas[i].keeper.contactway,
            id:  datas[i].keeper.id,
            supplierId:  datas[i].keeper.supplierId
          }
          datasArray.push(item)
        }
        return datasArray;
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
