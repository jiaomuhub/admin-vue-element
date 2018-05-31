<template>
  <div>
    <div class="page-header">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/home'}">管理控制</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/cardManage'}">免租券管理</el-breadcrumb-item>
        <el-breadcrumb-item>免租券详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2 style="font-weight: 100;font-size: 22px;text-align: center;">预租劵使用信息详细</h2>
    <div class="card-detail">
      <el-form ref="form" :model="formData" label-width="100px">
        <el-form-item label="免租劵序号">
          <span>ABCD12346EDS</span>
          <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
        </el-form-item>
        <el-form-item label="使用时间">
          <span>2018-05-20 10:00</span>
          <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
        </el-form-item>
        <el-form-item label="使用产品">
          <span>黄泥磅-紫荆商业广场 2-21-5</span>
          <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
        </el-form-item>
        <el-form-item label="使用人">
          <span>sfdds</span>
          <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
        </el-form-item>
        <el-form-item label="联系方式">
          <span>124121212313</span>
          <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
        </el-form-item>
        <el-form-item label="月租金">
          <span  v-show="!hideMoney">￥1500</span>
          <el-input v-show="hideMoney" v-model="formData.num" placeholder="3000" class="resust-input"></el-input>
        </el-form-item>
        <el-form-item label="免租劵折扣信息">
          <div class="detail-info">
            <el-form-item label="免租劵折扣金额" label-width="140px">
              <span>￥1500</span>
              <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
            </el-form-item>
            <el-form-item label="免租劵折扣天数" label-width="140px">
              <span>￥1500</span>
              <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
            </el-form-item>
            <el-form-item label="折算折扣金额" label-width="140px">
              <span>￥1500</span>
              <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
            </el-form-item>
            <el-form-item label="免租劵折扣总金额" label-width="140px">
              <span>￥1500</span>
              <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
            </el-form-item>
          </div>
          <!--<el-input v-model="formData.num" class="resust-input"></el-input>-->
        </el-form-item>
        <el-form-item class="btn-control">
          <el-button @click="onHandleCancel">{{ hideMoney ? '取消': '返回' }}</el-button>
          <el-button v-show="hideMoney" type="primary" @click="onHandleSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card-detail',
    data () {
      return {
        formData: {
          num: ''
        },
        hideMoney: false
      }
    },
    mounted () {
      var delId = this.$route.params.Id;
      var status = this.$route.params.status;
      console.log(delId,status)
      if(status === 'add') {
        this.hideMoney = true
      }
      if(status === 'detail') {
        this.hideMoney = false
      }
    },
    methods: {
      onHandleCancel () {
        this.$router.push({path: '/cardManage'})
      },
      onHandleSubmit () {
        let data = this.formData.num
        alert(data)
        this.$router.push({path: '/cardManage'})
      }
    }
  }
</script>

<style scoped>
  .card-detail {
    margin: 20px;
    padding: 20px 100px;
    background-color: #fff;
  }
  .card-detail span{
    margin-left: 20px !important;
  }
  .detail-info {
    border: 1px solid #ccc;
    margin-left: 24px;
    width: 50%;
  }
  .btn-control {
    text-align: center;
  }
  .btn-control button {
    width: 100px;
  }
  .resust-input {
    width: 200px;
    margin-left: 22px;
  }
</style>
