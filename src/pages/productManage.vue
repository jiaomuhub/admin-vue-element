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
          <el-select v-model="formInline.status" placeholder="全部" class="input-width">
            <el-option label="全部" value=""></el-option>
            <el-option label="审核中" value="1"></el-option>
            <el-option label="已上架" value="2"></el-option>
            <el-option label="已下架" value="3"></el-option>
            <el-option label="已出租" value="4"></el-option>
            <!--<el-option label="已删除" value="5"></el-option>-->
          </el-select>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="formInline.housingId" placeholder="产品编号搜索" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="出租方式">
          <el-select v-model="formInline.rent" placeholder="请选择出租方式" class="input-width">
            <el-option label="全部" value=""></el-option>
            <el-option label="整租" value="整租"></el-option>
            <el-option label="合租" value="合租"></el-option>
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
          <el-input v-model="formInline.name" placeholder="产品名称搜索" class="input-width"></el-input>
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
          prop="housing.id"
          label="产品编号"
          :width="280">
        </el-table-column>
        <el-table-column
          prop="housing.created"
          label="发布时间">
        </el-table-column>
        <el-table-column
          prop="housing.status"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="housing.rent"
          label="出租方式">
        </el-table-column>
        <el-table-column
          prop="goodsName"
          label="产品名称"
          :width="280">
        </el-table-column>
        <el-table-column
          prop="housing.money"
          label="产品租金">
        </el-table-column>
        <el-table-column
          prop="geo"
          label="产品位置"
          :width="180">
        </el-table-column>
        <el-table-column
          prop="housing.voucher"
          label="是否使用预租劵">
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
    <div class="page-block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-size="pagesize"
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
    data () {
      return {
        formInline: {
          status: '',
          housingId: '',
          date: '',
          name: '',
          rent: ''
        },
        tableData: [],
        pagesize: 10,  // 每页条数
        pageNum: 1,   //当前页
        pageTotal: 0   // 总共条数
      }
    },
    created () {
      var delId = this.$route.params.delId
      console.log(delId)
      // rows.splice(index, 1)
    },
    mounted () {
      let self = this;
      self.$nextTick(function () {
        let data = {
          status: '',
          housingId: '',
          start: '',
          end: '',
          name: '',
          rent: '',
          pageNum: 1,
          pageSize: 10
        }
        axios.post(wy_host+ 'supply/conbine_contion',data)
          .then(function (res) {
            if(res.status == 200) {
              self.pageTotal = res.data.size;
              self.tableData = self.handlepData(res.data.data);
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
        let data = self.formInline;
        let datas = {};
        if(!data.date) {
          datas.start = '';
          datas.end = '';
        }else{
          let y = data.date[0];
          let m = data.date[1];
          datas.start = self.handleTime (y);
          datas.end = self.handleTime (m);
        }
        datas.housingId = data.housingId;
        datas.name = data.name;
        datas.rent = data.rent;
        datas.status = data.status;
        datas.pageNum = 1;
        datas.pageSize = 10;
        console.log(data)
        axios.post(wy_host+ 'supply/conbine_contion',datas)
          .then(function (res) {
            if(res.status == 200) {
              self.pageTotal = res.data.size;
              self.pageNum = 1;
              self.tableData = self.handlepData(res.data.data);
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      handleTime (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
      },
      handleDetailClick (row) {
        let self = this;
        axios.get(wy_host+ 'supply/detail/'+row.housing.id)
          .then(function (res) {
            if(res.status == 200) {
              self.$store.state.houseDetailData = res.data;
              self.$router.push({name: 'productDetail',params:{ Id: row.housing.id, status: row.housing.status }});
              console.log(res)
            }
          })
      },
      formatter (row, column) {
        return row.address
      },
      filterTag (value, row) {
        return row.tag === value
      },
      filterHandler (value, row, column) {
        const property = column['property'];
        return row[property] === value
      },
      handlepData (datas) {
        let _datas = datas
        for(var i=0;i<_datas.length;i++) {
          if(_datas[i].housing.status == 1) {
            _datas[i].housing.status = '审核中'
          }else if(_datas[i].housing.status == 2) {
            _datas[i].housing.status = '已上架'
          }else if(_datas[i].housing.status == 3) {
            _datas[i].housing.status = '已下架'
          }else if(_datas[i].housing.status == 4) {
            _datas[i].housing.status = '已出租'
          }else if(_datas[i].housing.status == 5) {
            _datas[i].housing.status = '已删除'
          }
        }
        return _datas
      },
      handleCurrentChange (val) {
        let self = this;
        let data = self.formInline;
        let datas = {};
        if(!data.date) {
          datas.start = '';
          datas.end = '';
        }else{
          let y = data.date[0];
          let m = data.date[1];
          datas.start = self.handleTime (y);
          datas.end = self.handleTime (m);
        }
        datas.housingId = data.housingId;
        datas.name = data.name;
        datas.rent = data.rent;
        datas.status = data.status;
        datas.pageNum = val;
        datas.pageSize = 10;
        console.log(datas);
        axios.post(wy_host+ 'supply/conbine_contion',datas)
          .then(function (res) {
            if(res.status == 200) {
              self.pageTotal = res.data.size;
              self.tableData = self.handlepData(res.data.data);
            }
          })
          .catch(function (err) {
            console.log(err)
          })
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
  .input-width {
    width: 350px;
  }
  .page-block {
    text-align: center;
    margin: 30px;
  }
</style>
