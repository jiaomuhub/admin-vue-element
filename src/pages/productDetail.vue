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
          <el-col :span="24"><div class="grid-content">产品编号：{{houseDatas.houseinfo.id}}</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img src="../assets/logo.png" alt="頭像">
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple room-detail">
              <p>{{houseDatas.name}} {{houseDatas.houseinfo.location}}</p>
              <p>{{houseDatas.houseinfo.houseType}} {{houseDatas.houseinfo.acreage}}m</p>
              <p class="money-p">￥{{houseDatas.houseinfo.money}}/月 &emsp; &emsp;&emsp;&emsp; {{hstatus}}</p>
              <p><i class="el-icon-location-outline"></i>{{houseDatas.areaInfo.bisAddr}}</p>
              <p class="feater-p"><span v-for="item in houseDatas.special" :key="item.code"> {{item.name}}</span></p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple control-box">
              <div v-if="handleStatus == 0">
                <el-button class="dedit" @click="editRoomInfo">修改</el-button>
                <el-button  @click="delRoomInfo">删除</el-button>
                <el-button type="primary" @click="comfirmRoomInfo">确定</el-button>
              </div>
              <div v-if="handleStatus == 1">
                <el-button class="dedit" @click="editRoomInfo">修改</el-button>
                <el-button @click="downRoomInfo">下架</el-button>
                <el-button  @click="delRoomInfo">删除</el-button>
                <el-button type="primary" @click="comfirmRoomInfo">确定</el-button>
                <el-button type="primary" @click="comfirmRoomInfo">已出租</el-button>
              </div>
              <div v-if="handleStatus == 2">
                <el-button class="dedit" @click="editRoomInfo">修改</el-button>
                <el-button  @click="delRoomInfo">删除</el-button>
                <el-button @click="upRoomInfo">上架</el-button>
                <el-button type="primary" @click="comfirmRoomInfo">确定</el-button>
              </div>
              <div v-if="handleStatus == 3">
                <el-button type="primary" @click="comfirmRoomInfo">确定</el-button>
              </div>
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
                <el-col :span="20"><div class="grid-content bg-purple-light">{{houseDatas.houseinfo.rent}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">小区名称</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">{{houseDatas.areaInfo.name}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">房屋地址</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">{{houseDatas.dong}} &emsp;栋&emsp;&emsp;  {{houseDatas.ceng}}&emsp;层&emsp;&emsp;  {{houseDatas.hao}}&emsp;门牌号</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">所在区域</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">{{houseDatas.pro}}&emsp;&emsp;{{houseDatas.city}}&emsp;&emsp;{{houseDatas.cicle}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">所属商圈</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">{{houseDatas.areaInfo.bisAddr}}</div></el-col>
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
                <el-col :span="20"><div class="grid-content bg-purple-light">{{houseDatas.houseinfo.houseType}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">总面积</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">{{houseDatas.houseinfo.acreage}} &emsp;m </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">楼层</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">第&emsp;{{houseDatas.suoceng}} &emsp;层 &emsp;&emsp; 共&emsp; {{houseDatas.allceng}} &emsp;层</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">朝向</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light">{{houseDatas.houseinfo.orientations}}</div></el-col>
              </el-row>
            </div>
            <div class="base-detail">
              <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">图片信息</div></el-col>
              </el-row>
              <el-tabs type="border-card">
                <el-tab-pane label="卧室">
                  <img :style="{'width': '200px', 'height': '200px', 'margin': '10px'}" v-if="bedroomList.length>0" v-for="item in bedroomList" :key="item.name" v-bind:src="item.url" alt="頭像">
                </el-tab-pane>
                <el-tab-pane label="客厅">
                  <img :style="{'width': '200px', 'height': '200px', 'margin': '10px'}" v-if="livingroomList.length>0" v-for="item in livingroomList" :key="item.name" v-bind::src="item.url" alt="頭像">
                </el-tab-pane>
                <el-tab-pane label="卫生间">
                  <img :style="{'width': '200px', 'height': '200px', 'margin': '10px'}" v-if="bathroomList.length>0" v-for="item in bathroomList" :key="item.name" v-bind::src="item.url" alt="頭像">
                </el-tab-pane>
                <el-tab-pane label="厨房">
                  <img :style="{'width': '200px', 'height': '200px', 'margin': '10px'}" v-if="KitchenList.length>0" v-for="item in KitchenList" :key="item.name" v-bind::src="item.url" alt="頭像">
                </el-tab-pane>
                <el-tab-pane label="餐厅">
                  <img :style="{'width': '200px', 'height': '200px', 'margin': '10px'}" v-if="restaurantList.length>0" v-for="item in restaurantList" :key="item.name" v-bind::src="item.url" alt="頭像">
                </el-tab-pane>
                <el-tab-pane label="户型图">
                  <img :style="{'width': '200px', 'height': '200px', 'margin': '10px'}" v-if="houseTypeList.length>0" v-for="item in houseTypeList" :key="item.name" v-bind::src="item.url" alt="頭像">
                </el-tab-pane>
                <el-tab-pane label="房本">
                  <img :style="{'width': '200px', 'height': '200px', 'margin': '10px'}" v-if="propertyList.length>0" v-for="item in propertyList" :key="item.name" v-bind::src="item.url" alt="頭像">
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="base-detail">
              <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">特色及设施</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">产品特色</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light feater-p"><span v-for="item in houseDatas.special" :key="item.code">{{item.name}}</span></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">服务设施</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple-light feater-p"><span v-for="item in houseDatas.facility" :key="item.code">{{item.name}}</span></div></el-col>
              </el-row>
            </div>
            <div class="base-detail">
              <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">位置及小区信息</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple"><i class="el-icon-location-outline"></i>{{houseDatas.areaInfo.geoAddr}}</div></el-col>
              </el-row>
              <div class="mapBox"></div>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">小区名称： {{houseDatas.areaInfo.name}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">小区性质：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">暂无数据</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">建筑类型：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">暂无数据</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">建筑年代：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">暂无数据</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">物业费</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">暂无数据</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">绿化率：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">暂无数据</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">容积率</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">暂无数据</div></el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="出租信息">
            出租信息
            <div class="base-detail">
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">租金：</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{houseDatas.houseinfo.money}} &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{houseDatas.yearMoney}} &emsp;￥</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">付款方式：</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple-light"><span v-for="item in houseDatas.payStype" :key="item">{{item}}</span></div></el-col>
              </el-row>
              <el-row v-if="ypay">
                <el-col :span="2" :offset="3"><div class="grid-content bg-purple">月付租金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{monthPay.pay}} &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">月付押金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{monthPay.pay1}} &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{monthPay.pay2}} &emsp;￥</div></el-col>
              </el-row>
              <el-row  v-if="jdpay">
                <el-col :span="2" :offset="3"><div class="grid-content bg-purple">季度付租金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{quarterPay.pay}} &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">季度付押金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{quarterPay.pay1}} &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{quarterPay.pay2}} &emsp;￥</div></el-col>
              </el-row>
              <el-row  v-if="bnpay">
                <el-col :span="2" :offset="3"><div class="grid-content bg-purple">半年付租金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{halfyearPay.pay}} &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">半年付押金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{halfyearPay.pay1}} &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{halfyearPay.pay2}} &emsp;￥</div></el-col>
              </el-row>
              <el-row  v-if="npay">
                <el-col :span="2" :offset="3"><div class="grid-content bg-purple">年付租金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{yearPay.pay}} &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">年付押金</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{yearPay.pay1}} &emsp;￥/月</div></el-col>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">一年收入</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{yearPay.pay2}} &emsp;￥</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">入住时间</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple-light">{{houseDatas.houseinfo.created}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="3" :offset="1"><div class="grid-content bg-purple">是否支持安优客平台预租劵</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple-light">{{code}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="2" :offset="1"><div class="grid-content bg-purple">房源房管员</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple-light">{{houseDatas.housekeepername}}</div></el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'product-detail',
    data () {
      return {
        paramID: '',
        handleStatus: 0,
        houseDatas: {},
        hstatus: '',
        monthPay: {
          pay: '',
          pay1: '',
          pay2:''
        },
        quarterPay: {
          pay: '',
          pay1: '',
          pay2:''
        },
        halfyearPay: {
          pay: '',
          pay1: '',
          pay2:''
        },
        yearPay: {
          pay: '',
          pay1: '',
          pay2:''
        },
        bedroomList: [],
        livingroomList: [],
        bathroomList: [],
        KitchenList: [],
        restaurantList: [],
        houseTypeList: [],
        propertyList: [],
        code: '',
        ypay: false,
        jdpay: false,
        bnpay: false,
        npay: false
      }
    },
    mounted () {
      var param = this.$route.params.Id;
      var status = this.$route.params.status;
      this.hstatus = status;
      this.paramID = param;
      if(status === '审核中') {
        this.handleStatus = 0
      }else if(status === '已上架') {
        this.handleStatus = 1
      }else if(status === '已下架') {
        this.handleStatus = 2
      }else{
        this.handleStatus = 3
      }
      var _datas = this.$store.state.houseDetailData;
      var name = _datas.areaInfo.name + _datas.houseinfo.houseType;
      var _loc = _datas.houseinfo.location;
      var _locArr = _loc.split('-');
      var _stor = _datas.houseinfo.storey;
      var _storArr = _stor.split('-');
      var _add = _datas.areaInfo.geoAddr;
      var _addArr = _add.split('-');
      var _special = _datas.houseinfo.special;
      _datas.special = JSON.parse(_special)
      var _facility = _datas.houseinfo.facility;
      _datas.facility = JSON.parse(_facility);
      var _miney = _datas.houseinfo.money;
      var _payment = _datas.paymentinfo;
      var _payStype = [];
      _datas.name = name;
      _datas.dong = _locArr[0];
      _datas.ceng = _locArr[1];
      _datas.hao = _locArr[2];
      _datas.pro = _addArr[0];
      _datas.city = _addArr[1];
      _datas.cicle = _addArr[2];
      _datas.suoceng = _storArr[0];
      _datas.allceng = _storArr[1];
      _datas.yearMoney = parseInt(_miney)*12;
      //图片处理
      let pics = _datas.pics;
      let items = [];
      let item = {};
      let pic = '';
      let pic1 = '';
      if(pics) {
        for(var i=0;i<pics.length;i++) {
          if(pics[i].url1) {
            pic = pics[i].url1
            item={
              flag: 'main',
              name: pics[i].name,
              url: 'http://'+pic
            }
            items.unshift(item)
          }else{
            pic1 = pics[i].url2
            item={
              flag: 'sub',
              name: pics[i].name,
              url: 'http://'+pic1
            }
            items.push(item)
          }
        }
      }
      const reg1 = RegExp(/bedroom/);
      this.$nextTick(function () {
        this.bedroomList = this.handleImgType(reg1, items);
      })
      const reg2 = RegExp(/livingroom/);
      this.livingroomList = this.handleImgType(reg2, items);
      const reg3 = RegExp(/bathroom/);
      this.bathroomList = this.handleImgType(reg3, items);
      const reg4 = RegExp(/Kitchen/);
      this.KitchenList = this.handleImgType(reg4, items);
      const reg5 = RegExp(/restaurant/);
      this.restaurantList = this.handleImgType(reg5, items);
      const reg6 = RegExp(/houseType/);
      this.houseTypeList = this.handleImgType(reg6, items);
      const reg7 = RegExp(/property/);
      this.propertyList = this.handleImgType(reg7, items);
      //处理付款方式
      if(_payment) {
        if(_payment.monthlyPayment == 1) {
          _payStype.push('月付');
          this.ypay = true;
          this.monthPay = {
            pay: _payment.monthlyMoney,
            pay1: _payment.monthlyPledge,
            pay2: parseInt(_payment.monthlyMoney)*12
          }
        }
        if(_payment.quarterlyPayment == 1) {
          _payStype.push('季度付')
          this.jdpay = true;
          this.quarterPay = {
            pay: _payment.quarterlyMoney,
            pay1: _payment.quarterlyPledge,
            pay2: parseInt(_payment.quarterlyMoney)*12
          }
        }
        if(_payment.halfYearPayment == 1) {
          _payStype.push('半年付')
          this.bnpay = true;
          this.halfyearPay = {
            pay: _payment.halfYearMoney,
            pay1: _payment.halfYearPledge,
            pay2: parseInt(_payment.halfYearMoney)*12
          }
        }
        if(_payment.annualPayment == 1) {
          _payStype.push('年付')
          this.npay = true;
          this.yearPay = {
            pay: _payment.annualMoney,
            pay1: _payment.annualPledge,
            pay2: parseInt(_payment.annualMoney)*12
          }
        }
        if(_datas.houseinfo.voucher == 0) {
          this.code = '否'
        }else{
          this.code = '是'
        }
        _datas.payStype = _payStype;
      }
       this.houseDatas = _datas;
      console.log(this.houseDatas)
    },
    methods: {
      editRoomInfo () {
        let self = this;
        let paramID = self.paramID;
        self.$confirm('修改房源信息会重新审核，确定是否修改该房源信息?', '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          axios.get(wy_host+ 'supply/modify/'+paramID)
            .then(function (res) {
              if(res.status == 200) {
                self.$store.state.oneData = res.data
                self.$router.push({name: 'home',params: {Id: paramID}})
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
      delRoomInfo () {
        let self = this;
        let paramID = self.paramID;
        let datas = {
          "id":paramID,
          "status":"删除"
        }
        self.$confirm('确定是否删除该房源?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.post(wy_host+ '/supply/edit',datas)
            .then(function (res) {
              if(res.status == 200) {
                self.$router.push({path: '/proManger'})
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
      upRoomInfo () {
        let self = this;
        let paramID = self.paramID;
        let datas = {
          "id":paramID,
          "status":"上架"
        }
        this.$confirm('确定该房源信息，上架后会给用户进行显示', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          self.commonApi (datas)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      downRoomInfo () {
        let self = this;
        let paramID = self.paramID;
        let datas = {
          "id":paramID,
          "status":"下架"
        }
        this.$confirm('确定是否下架该房源，下架后不会给用户进行显示', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          self.commonApi (datas)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      comfirmRoomInfo () {
        this.$router.push({path: '/proManger'});
      },
      handleImgType (reg, fileList) {
        let bedroomArr = []
        if(fileList) {
          for(var i=0;i<fileList.length;i++) {
            if(reg.test(fileList[i].name)) {
              bedroomArr.push(fileList[i])
            }
          }
        }
        return bedroomArr
      },
      commonApi (datas) {
        let self = this;
        axios.post(wy_host+ '/supply/edit',datas)
          .then(function (res) {
            if(res.status == 200) {
              self.$router.push({path: '/proManger'})
            }else{
              return self.$message.error(res.msg)
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
  .control-box button {
    margin:0 10px 10px 0;
    width: 100px;
  }
  .img-size {
    width: 200px;
    height: 200px;
  }
</style>
