<template>
  <div>
    <div class="page-header">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/companyInfo'}">系统设置</el-breadcrumb-item>
        <el-breadcrumb-item>企业信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2 style="font-weight: 100;font-size: 22px;text-align: center;">企业资料</h2>
    <div class="company-info-box">
      <div>
        <p class="com-detail"><span>（品牌）名称</span> 万科泊寓</p>
        <p class="com-logo"><span>（品牌）LOGO</span> <img src="../assets/logo.png" alt=""></p>
        <p class="com-detail"><span>负责人</span> 万科泊寓</p>
        <p class="com-detail"><span>负责人联系方式</span> 14312231223</p>
        <p class="com-detail"><span>保证金金额</span> ￥5000</p>
        <div class="tips-feature"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>以上信息为供应商签约到安优房平台录入，若有变动请联系我们进行修改</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'company-info'
  }
</script>

<style scoped>
  .company-info-box {
    margin: 20px;
    padding: 20px 100px;
    background-color: #fff;
  }
  .com-detail span {
    display: inline-block;
    width: 120px;
    height: 50px;
    line-height: 50px;
  }
  .tips-feature {
    height: 40px;
  }
  .tips-feature span {
    background-color: #ddd;
    max-width: 540px;
    float: left;
  }
  .com-logo span {
    vertical-align: top;
    line-height: 50px;
    display: inline-block;
    width: 130px;
  }
</style>
