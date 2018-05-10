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
              <img src="../assets/logo.png" alt="頭像">
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple room-detail">
              <p>紫荆商业广场1室1厅 2-21-5</p>
              <p>1室1厅 100m</p>
              <p class="money-p">￥2000/月 &emsp; &emsp;&emsp;&emsp; 待看房</p>
              <p><i class="el-icon-location-outline"></i>渝北</p>
              <p class="feater-p"><span>首次出租</span><span>独立卫生间</span><span>带阳台</span></p>
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
            <p>姓名：刘沛鑫</p>
            <p>称呼：先生</p>
            <p>手机号：13752899357</p>
            <p>期望看房时间：2017-08-20 早上</p>
            <p>看房留言：希望房东尽快接待，另外提供停车位</p>
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
    name: 'house-detail'
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
