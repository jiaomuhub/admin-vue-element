<template>
  <div>
    <div class="page-header">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/companyInfo'}">系统设置</el-breadcrumb-item>
        <el-breadcrumb-item>联系安优房</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contact-us-box">
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"><span>客服电话：400-6161-878</span></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"><span>邮件联系：Service@anyoufang.com</span></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"><span>在线联系：工作时间：8:30-18:00</span></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"><span>QQ：495818445</span>&emsp;&emsp;&emsp;<span>微信：ch1231232</span></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact-us'
  }
</script>

<style scoped>
  .contact-us-box {
    margin: 20px;
    padding: 20px 100px;
    background-color: #fff;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
