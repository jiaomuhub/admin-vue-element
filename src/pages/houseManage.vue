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
          <el-select v-model="formInline.status" placeholder="全部" class="input-width">
            <el-option label="全部" value=""></el-option>
            <el-option label="已看房" value="1"></el-option>
            <el-option label="待看房" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="formInline.productNum" placeholder="产品编号搜索" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="看房人联系方式">
          <el-input v-model="formInline.phone" placeholder="看房人联系方式搜索" class="input-width"></el-input>
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
          <el-input v-model="formInline.productName" placeholder="搜索小区或者区域" class="input-width"></el-input>
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
          prop="productNum"
          label="产品编号">
        </el-table-column>
        <el-table-column
          prop="user"
          label="看房用户">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="看房用户手机号">
        </el-table-column>
        <el-table-column
          prop="viewingTime"
          label="看房时间">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="superior"
          label="出租方式">
        </el-table-column>
        <el-table-column
          prop="productName"
          label="产品名称">
        </el-table-column>
        <el-table-column
          prop="price"
          label="产品租金">
        </el-table-column>
        <el-table-column
          prop="location"
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
    <div class="page-block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-size="10"
        layout="prev, pager, next"
        :total="pageTotal"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'house-manage',
    data () {
      return {
        formInline: {
          status: '',
          productNum: '',
          date: '',
          productName: '',
          phone: '',
          supplier: '',
          user: ''
        },
        tableData: [],
        pagesize: '10',  // 每页条数
        pageNum: 1,   //当前页
        pageTotal: ''   // 总共条数
      }
    },
    mounted () {
      let self = this;
      self.$nextTick(function () {
        axios.get(wy_host + 'supply/roomList/')
          .then(function (res) {
            if(res.status == 200) {
              self.pageTotal = res.data.size;
              self.tableData = self.handleTableData(res.data.data);
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      })

    },
    methods: {
      onSubmit () {
        let self = this;
        let datas = self.formInline;
        if(!datas.date) {
          datas.viewingBegin = '';
          datas.viewingEnd = '';
        }else{
          datas.viewingBegin = self.handleTime(datas.date[0]);
          datas.viewingEnd = self.handleTime(datas.date[1]);
        }
        let param = new URLSearchParams();
        param.append('jsonParam', JSON.stringify(datas));
        param.append('pageNum', '1');
        param.append('pageSize', '10');
        axios.post(wy_host + 'supply/searchRoomList/', param)
          .then(function (res) {
            if(res.status == 200) {
              self.tableData = self.handleTableData(res.data.data);
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      handleClick (row) {
        let self = this;
        axios.get(wy_host + 'supply/roomDetail?besid='+row.besId)
          .then(function (res) {
            if(res.status == 200) {
              self.$store.state.houseDetailData = res.data
              self.$router.push({path: '/houseDetail'})
            }
          })
          .catch(function (err) {
            console.log(err)
          })
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
      },
      handleTableData (datas) {
        let _datas = datas
        for (var i=0;i<_datas.length;i++) {
          if(_datas[i].status == '1') {
            _datas[i].status = '已看房'
          }
          if(_datas[i].status == '2') {
            _datas[i].status = '待看房'
          }
          if(_datas[i].superior == '1') {
            _datas[i].superior = '整租'
          }
          if(_datas[i].superior == '2') {
            _datas[i].superior = '合租'
          }
        }
        return _datas;
      },
      handleTime (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
      },
      handleCurrentChange (val) {
        alert(val)
        let self = this;
        axios.get(wy_host + 'supply/roomList/?pageSize=10&pageNum='+val)
          .then(function (res) {
            if(res.status == 200) {
              self.pageTotal = res.data.size;
              self.pageNum = val,
              self.tableData = self.handleTableData(res.data.data);
            }
          })
          .catch(function (err) {
            console.log(err)
          })
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
  .input-width {
    width: 350px;
  }
  .page-block {
    text-align: center;
    margin: 30px;
  }
</style>
