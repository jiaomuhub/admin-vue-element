<template>
  <div>
    <div class="page-header">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/home'}">管理控制</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/houseManage'}">看房管理</el-breadcrumb-item>
        <el-breadcrumb-item>看房详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2 style="font-weight: 100;font-size: 22px;text-align: center;">看房详细</h2>
    <div class="house-detail-box">
      <div>
        <el-row>
          <el-col :span="24"><div class="grid-content">想看房源</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img :src="detailData.picUrl" :style="{'width':'236px','height': '236px'}" alt="頭像">
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple room-detail">
              <p>{{detailData.title}}</p>
              <p>{{detailData.info}}m</p>
              <p class="money-p">￥{{detailData.price}}/月 &emsp; &emsp;&emsp;&emsp; {{detailData.status}}</p>
              <p><i class="el-icon-location-outline"></i>{{detailData.location}}</p>
              <p class="feater-p"><span v-for="item in detailData.special" :key="item.code">{{item.name}}</span></p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="house-detail-box">
      <el-row>
        <el-col :span="24"><div class="grid-content">看房信息</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="grid-content bg-purple room-detail">
            <p>姓名：{{detailData.name}}</p>
            <p>称呼：{{detailData.sex}}</p>
            <p>手机号：{{detailData.phone}}</p>
            <p>期望看房时间：{{detailData.viewingTime}}</p>
            <p>看房留言：{{detailData.basicInfo}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="btn-box">
      <el-button>取消</el-button><el-button type="primary">已看房</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'house-detail',
    data () {
      return {
        detailData: {}
      }
    },
    mounted () {
      let self = this;
      let datas = self.$store.state.houseDetailData;
      self.$nextTick(function () {
        if(datas.status == '1') {
          datas.status = '已看房'
        }
        if(datas.status == '2') {
          datas.status = '待看房'
        }
        datas.special = JSON.parse(datas.special);
        if(datas.sex == '1') {
          datas.sex = '先生'
        }else{
          datas.sex = '女士'
        }
        self.detailData = datas;
        console.log(datas)
      })
    }
  }
</script>

<style scoped>
  .house-detail-box {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
  }
  .room-detail p{
    line-height: 34px;
  }
  .money-p {
    color: #0aadf7;
  }
  .feater-p span {
    padding: 6px 10px;
    border: 1px solid #ccc;
    margin-right: 10px;
    border-radius: 6px;
  }
  .btn-box {
    text-align: center;
    margin-bottom: 30px;
  }
</style>
