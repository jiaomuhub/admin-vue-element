<template>
  <div>
    <div class="page-header">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/home'}">管理控制</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/proManger'}">产品管理</el-breadcrumb-item>
        <el-breadcrumb-item>查看详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2 style="font-weight: 100;font-size: 22px;text-align: center;">查看详细</h2>
    <div class="detail-box">
      <div>
        <el-row>
          <el-col :span="24"><div class="grid-content">产品编号：123123123123</div></el-col>
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
              <p class="money-p">￥2000/月 &emsp; &emsp;&emsp;&emsp; 审核中</p>
              <p><i class="el-icon-location-outline"></i>渝北</p>
              <p class="feater-p"><span>首次出租</span><span>独立卫生间</span><span>带阳台</span></p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-button class="dedit" @click="editRoomInfo">修改</el-button>
              <el-button  @click="delRoomInfo">删除</el-button>
              <el-button type="primary" @click="comfirmRoomInfo">确定</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row>
          <el-col :span="24"><div class="grid-content">发布时间：2018-04-08 11:20</div></el-col>
        </el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="基础信息">
            产品基础信息
            <div class="base-detail">
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">出租方式</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">整租</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">小区名称</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">紫荆商业广场</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">房屋地址</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">1 &emsp;栋&emsp;&emsp;  21&emsp;层&emsp;&emsp;  5&emsp;门牌号</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">所在区域</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">重庆市&emsp;&emsp;江北区&emsp;&emsp;小苑</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">所属商圈</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">江北区</div></el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="介绍信息">
            产品介绍信息
            <div class="base-detail">
              <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">基本介绍</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">房屋户型</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">1 &emsp;室&emsp;&emsp;  2&emsp;厅&emsp;&emsp;  1&emsp;卫</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">总面积</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">41 &emsp;m </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">楼层</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">第&emsp;1 &emsp;层 &emsp;&emsp; 共&emsp; 21 &emsp;层</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">朝向</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">西北</div></el-col>
              </el-row>
            </div>
            <div class="base-detail">
              <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">图片信息</div></el-col>
              </el-row>
              <el-tabs type="border-card">
                <el-tab-pane label="卧室">
                  <img src="../assets/logo.png" alt="頭像">
                  <img src="../assets/logo.png" alt="頭像">
                </el-tab-pane>
                <el-tab-pane label="客厅"><img src="../assets/logo.png" alt="頭像"></el-tab-pane>
                <el-tab-pane label="卫生间"><img src="../assets/logo.png" alt="頭像"></el-tab-pane>
                <el-tab-pane label="厨房"><img src="../assets/logo.png" alt="頭像"></el-tab-pane>
                <el-tab-pane label="餐厅"><img src="../assets/logo.png" alt="頭像"></el-tab-pane>
                <el-tab-pane label="户型图"><img src="../assets/logo.png" alt="頭像"></el-tab-pane>
                <el-tab-pane label="房本"><img src="../assets/logo.png" alt="頭像"></el-tab-pane>
              </el-tabs>
            </div>
            <div class="base-detail">
              <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">特色及设施</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">产品特色</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light feater-p"><span>首次出租</span><span>首次出租</span></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">服务设施</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light feater-p"><span>WIFI</span><span>WIFI</span><span>WIFI</span><span>WIFI</span></div></el-col>
              </el-row>
            </div>
            <div class="base-detail">
              <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">位置及小区信息</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple"><i class="el-icon-location-outline"></i>渝北</div></el-col>
              </el-row>
              <div class="mapBox"></div>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">小区信息</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">小区性质：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">普通住宅</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">建筑类型：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">塔楼</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">建筑年代：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">2014</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">物业费</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">23</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">绿化率：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">2014</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">容积率</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">23</div></el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="出租信息">
            出租信息
            <div class="base-detail">>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">租金：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">3000 &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">36000 &emsp;￥</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">付款方式：</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple-light">月付 &emsp; 季度付&emsp; 半年付&emsp; 年付 </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="3"><div class="grid-content bg-purple">月付租金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">3000 &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">月付押金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">3000 &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">36000 &emsp;￥</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="3"><div class="grid-content bg-purple">季度付租金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">3000 &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">季度付押金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">3000 &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">36000 &emsp;￥</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="3"><div class="grid-content bg-purple">半年付租金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">3000 &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">半年付押金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">3000 &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">36000 &emsp;￥</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="3"><div class="grid-content bg-purple">年付租金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">3000 &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">年付押金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">3000 &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">36000 &emsp;￥</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">入住时间</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple-light">2018-10-05</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="3" :offset="1"><div class="grid-content bg-purple">是否支持安优客平台预租劵</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple-light">是</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">房源房管员</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple-light">张三</div></el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product-detail',
    data () {
      return {
        paramID: ''
      }
    },
    created () {
      var param = this.$route.params.Id
      this.paramID = param
      console.log(param)
    },
    methods: {
      editRoomInfo () {
        this.$confirm('修改房源信息会重新审核，确定是否修改该房源信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({name: 'home',params: {Id: '111111'}})
          // this.$message({
          //   type: 'success',
          //   message: '修改成功!'
          // })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      delRoomInfo () {
        this.$confirm('修改房源信息会重新审核，确定是否修改该房源信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      comfirmRoomInfo () {
        this.$confirm('修改房源信息会重新审核，确定是否修改该房源信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      }
    }
  }
</script>

<style scoped>
  .detail-box {
    margin: 20px;
    background-color: #fff;
    padding: 20px;
  }
  .grid-content {
    color: #333;
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
  .el-tabs--border-card>.el-tabs__header {
    background-color: #ECF0F5;
  }
  .base-detail {
    margin-top: 20px;
    border-top: 1px solid #ccc;
  }
  .base-detail .el-row{
    height: 40px;
    line-height: 40px;
  }
</style>
