<template>
 <div>
   <div class="page-header">
     <el-breadcrumb>
       <el-breadcrumb-item :to="{path: '/home'}">管理控制</el-breadcrumb-item>
       <el-breadcrumb-item>免租券管理</el-breadcrumb-item>
     </el-breadcrumb>
   </div>
   <div class="card-box">
     <el-button type="primary" @click="addCard">免租券使用录入</el-button>
   </div>
   <div class="card-box">
     <el-table
       :data="tableData"
       style="width: 100%">
       <el-table-column
         prop="num"
         label="免租劵序号">
       </el-table-column>
       <el-table-column
         prop="date"
         label="使用时间">
       </el-table-column>
       <el-table-column
         prop="address"
         label="使用产品">
       </el-table-column>
       <el-table-column
         prop="name"
         label="使用人">
       </el-table-column>
       <el-table-column
         prop="tel"
         label="联系方式">
       </el-table-column>
       <el-table-column
         prop="money"
         label="折扣金额">
       </el-table-column>
       <el-table-column
         label="操作"
         width="100">
         <template slot-scope="scope">
           <el-button @click="handleDetailClick(scope.row)" type="text" size="small">查看详情</el-button>
         </template>
       </el-table-column>
     </el-table>
   </div>
   <!--<add-card :isShowCard="showCard" v-on:listinAddCard="addCardChange"></add-card>-->
   <el-dialog
     title="预租劵使用录入"
     :visible.sync="dialogCardVisible"
     width="30%"
     center>
      <span class="successModel">
        <el-form ref="form" :model="addForm" label-width="100px" class="add-card-form">
        <el-form-item label="免租劵序号">
          <el-input v-model="addForm.num"></el-input>
        </el-form-item>
      </el-form>
      </span>
     <span slot="footer" class="dialog-footer">
          <el-button @click="cancelAdd">取消</el-button>
          <el-button type="primary" @click="onSubmit">确定录入</el-button>
        </span>
   </el-dialog>
 </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'card-manage',
    data () {
      return {
        tableData: [{
          num: '11111111',
          date: '2016-05-02',
          address: '黄泥磅-紫荆商业广场 2-21-5',
          name: 'sdfsdf',
          tel: '11111111111',
          money: '3600',
          handle: '查看详情'
        }, {
          num: '11111111',
          date: '2016-05-02',
          address: '黄泥磅-紫荆商业广场 2-21-5',
          name: 'sdfsdf',
          tel: '11111111111',
          money: '3600',
          handle: '查看详情'
        }],
        addForm: {
          num: ''
        },
        dialogCardVisible: false
      }
    },
    mounted () {
      let self = this;
      self.$nextTick(function () {
        axios.get(wy_host+ 'supply/voucher_list')
          .then(function (res) {
            console.log(res)
          })
          .catch(function (err) {
            console.log(err)
          })
      })
    },
    methods: {
      addCard () {
        this.dialogCardVisible = true
      },
      handleDetailClick (row) {
        console.log(row.num)
        this.$router.push({name: 'cardDetail',params:{ Id: row.num, status: 'detail' }})
      },
      onSubmit () {
        let self = this;
        var items = self.addForm;
        axios.get(wy_host +'supply/voucher_serialNum/'+ items.num)
          .then(function (res) {
            console.log(res);
            self.dialogCardVisible = false;
            self.$router.push({name: 'cardDetail',params:{ Id: items.num, status: 'add' }});
            self.addForm.num = ''
          })
          .catch(function (err) {
            console.log(err)
          });
      },
      cancelAdd () {
        var items = this.addForm
        this.dialogCardVisible = false
        for (var item in items) {
          items[item] = ''
        }
      }
    }
  }
</script>

<style scoped>
.card-box {
  margin: 20px;
  padding: 20px;
  background-color: #fff;
}
</style>
