<template>
    <div v-if="stepone == 'two'">
      <h2 style="font-weight: 100;font-size: 22px;">第二步：填写产品介绍信息</h2>
      <el-form label-width="78px" ref="form" :rules="rulesTwo" :model="form">
        <div class="two-title">
          基本介绍
        </div>
        <div class="form-box-2">
          <el-form-item label="房屋户型" style="display: inline-block" prop="room">
            <el-input class="input_address" v-model="form.room" placeholder=""></el-input><span class="address-label">室</span>
          </el-form-item>
          <el-form-item label="" style="display: inline-block" label-width="0" prop="hall">
            <el-input class="input_address" v-model="form.hall" placeholder=""></el-input><span class="address-label">厅</span>
          </el-form-item>
          <el-form-item label="" style="display: inline-block" label-width="0" prop="washroom">
            <el-input class="input_address" v-model="form.washroom" placeholder=""></el-input><span class="address-label">卫</span>
          </el-form-item>

          <el-form-item label="总面积" prop="acreage">
            <el-input class="input_address" v-model="form.acreage" placeholder=""></el-input><span class="address-label">m</span>
          </el-form-item>
          <el-form-item label="楼层" style="display: inline-block" prop="storey">
            <el-input class="input_address" v-model="form.storey" placeholder=""></el-input><span class="address-label">所在楼层</span>
          </el-form-item>
          <el-form-item label="" style="display: inline-block" label-width="0" prop="total">
            <el-input class="input_address" v-model="form.total" placeholder=""></el-input><span class="address-label">总共楼层</span>
          </el-form-item>
          <el-form-item label="朝向" prop="orientation">
            <el-input v-model="form.orientation" class="input_address"></el-input>
          </el-form-item>
        </div>

        <div class="two-title">
          图片信息
        </div>
        <div ref="form" :model="form" label-width="120px" class="form-box-3">
          <el-tabs v-model="form.activeName" @tab-click="handleClick">
            <el-tab-pane label="卧室" name="bedroom">
              <div class="img-line">
                <el-upload
                  action="http://192.168.0.133:8080/pic/upload/"
                  list-type="picture-card"
                  :file-list="bedroomList"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
            </el-tab-pane>
            <el-tab-pane label="客厅" name="livingroom">
              <div class="img-line">
                <el-upload
                  action="http://192.168.0.133:8080/pic/upload/"
                  list-type="picture-card"
                  :file-list="livingroomList"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
            </el-tab-pane>
            <el-tab-pane label="卫生间" name="bathroom">
              <div class="img-line">
                <el-upload
                  action="http://192.168.0.133:8080/pic/upload/"
                  list-type="picture-card"
                  :file-list="livingroomList"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
            </el-tab-pane>
            <el-tab-pane label="厨房" name="Kitchen">
              <div class="img-line">
                <el-upload
                  action="http://192.168.0.133:8080/pic/upload/"
                  list-type="picture-card"
                  :file-list="KitchenList"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
            </el-tab-pane>
            <el-tab-pane label="餐厅" name="restaurant">
              <div class="img-line">
                <el-upload
                  action="http://192.168.0.133:8080/pic/upload/"
                  list-type="picture-card"
                  :file-list="restaurantList"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
            </el-tab-pane>
            <el-tab-pane label="户型图" name="houseType">
              <div class="img-line">
                <el-upload
                  action="http://192.168.0.133:8080/pic/upload/"
                  list-type="picture-card"
                  :file-list="houseTypeList"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
            </el-tab-pane>
            <el-tab-pane label="房本" name="property">
              <div class="img-line">
                <el-upload
                  action="http://192.168.0.133:8080/pic/upload/"
                  list-type="picture-card"
                  :file-list="propertyList"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="tips-feature"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>若房源没有相应空间图片，不用上传。文件大小在10M内</span></div>
          <div class="tips-feature"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>房本信息不会展示给租客，但作为保证房源真实性，必须上传，否则可能无法通过审核</span></div>

        </div>

        <div class="two-title">
          特色及设施
        </div>
        <div class="form-box-3">
          <el-form-item label="产品特色">
            <el-checkbox v-for="item in form.hspecial" :key="item.code" v-model="item.f_chk"  label="" border>{{item.name}}</el-checkbox>
          </el-form-item>
          <div class="tips-feature"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>我们建议按照房源的特色进行选择最有特色的项，如果没有可以不选择，最多选择3项</span></div>
          <el-form-item label="服务设施" class="server-label">
            <div class="server-box">
              <el-checkbox  v-for="item in form.hservice" :key="item.code"  v-model="item.s_chk" label="" border class="server-item">{{item.name}}</el-checkbox>
            </div>
          </el-form-item>
        </div>

        <div class="two-title">
          位置及小区信息
        </div>
        <div class="gis-box">
          <div class="gis-item"><i class="el-icon-location-outline"></i>{{ form.area.geoAddr }}</div>
          <div id="map_container" tabindex="0"></div>
          <div class ='panel'>
            <div id = 'map-message'></div>
          </div>
          <div class="clear-box"></div>
          <div class="gis-item">小区名称： <span>{{ form.area.areaname }}</span> </div>
          <div class="gis-item">小区性质： <span>{{ form.area.areaProperty }}</span> &emsp;&emsp;&emsp;小区户数： <span>{{ form.area.householdNum }}</span></div>
          <div class="gis-item">建筑年代： <span>{{ form.area.year }}</span> &emsp;&emsp;&emsp;物业费： <span>{{ form.area.propertyFee }}</span></div>
          <div class="gis-item">绿化率： <span>{{ form.area.greenRatio }}</span> &emsp;&emsp;&emsp;容积率： <span>{{ form.area.plotRatio }}</span></div>
          <div class="tips-feature gis-item"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>若小区信息有误，可以尝试上报给我们小区信息有误</span></div>
        </div>
        <el-form-item style="text-align: center">
          <el-button size="medium" class="submitRoomBtn" type="primary" @click="goBackStep"  style="margin-left: 52px">上一步</el-button>
          <el-button size="medium" class="submitRoomBtn" type="primary" @click="onSubmit('form')" style="margin-left: 20px">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import AMap from 'AMap'
  import axios from 'axios';
  export default {
    name: 'two-product',
    props: ['stepone'],
    data () {
      return {
        wy_host: wy_host,
        form: {
          housingid: '',
          room: '',
          hall: '',
          washroom: '',
          acreage: '',
          storey: '',
          total: '',
          orientation: '',
          activeName: 'bedroom',
          special: [], // 渲染特色项目
          hspecial: [], // 特色选中项
          facility: [],
          hservice: [],
          fileList: [],
          latitude: '',
          longitude: '',
          area: {
            geoAddr: '',
            areaname: '',
            areaProperty: '暂无数据',
            householdNum: '暂无数据',
            year: '暂无数据',
            propertyFee: '暂无数据',
            greenRatio: '暂无数据',
            plotRatio: '暂无数据',
          }
        },
        bedroomList: [],
        livingroomList: [],
        bathroomList: [],
        KitchenList: [],
        restaurantList: [],
        houseTypeList: [],
        propertyList: [],
        activeIndex: '1',
        lataddlng: [106.554865, 29.555792],
        dialogImageUrl: '',
        dialogVisible: false,
        rulesTwo: {
          room: [
            { required: true, message: '请输入房屋卧室数', trigger: 'blur' }
          ],
          hall: [
            { required: true, message: '请输入房屋客厅数', trigger: 'blur' }
          ],
          washroom: [
            { required: true, message: '请输入房屋卫生间数', trigger: 'blur' }
          ],
          acreage: [
            { required: true, message: '请输入房屋面积数', trigger: 'blur' }
          ],
          storey: [
            { required: true, message: '请输入所在楼层数', trigger: 'blur' }
          ],
          total: [
            { required: true, message: '请输入总共楼层数', trigger: 'blur' }
          ],
          orientation: [
            { required: true, message: '请输入房屋朝向', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      readerPage () {
        this.$nextTick(function () {
          let datas = this.$store.state.oneAllData;
          this.form.housingid = datas.housingid;
          if(datas) {
            //处理房屋信息
            let _housing = datas.housing;
            if(_housing) {
              let _houseType = _housing.houseType;
              let _storey = _housing.storey;
              let shi = _houseType.indexOf('室');
              let ting = _houseType.indexOf('厅');
              let wei = _houseType.indexOf('卫');
              let shi1 = _houseType.substring(0,shi);
              let ting1 = _houseType.substring(shi+1,ting);
              let wei1 = _houseType.substring(ting+1,wei);
              let _storeyarr = _storey.split('-');
              this.form.housingid = _housing.id;
              this.form.room = shi1;
              this.form.hall = ting1;
              this.form.washroom = wei1;
              this.form.acreage = _housing.acreage.toString();
              this.form.storey = _storeyarr[0].toString();
              this.form.total = _storeyarr[1].toString();
              this.form.orientation =_housing.orientations;
              this.form.latitude = _housing.latitude;
              this.form.longitude = _housing.longitude;
            }
            //处理及设施模块
            let _hspecial = datas.special;
            let _hservice = datas.facility;
            let _special = [];
            let _service = [];
            if(datas.hspecial) {
              _special = JSON.parse(datas.hspecial);
              for(var i=0;i<_special.length;i++) {
                for(var k=0;k<_hspecial.length;k++) {
                  if(_special[i].name === _hspecial[k].name ) {
                    _hspecial[k].f_chk = true
                  }
                }
              }
            }else{
              _special = [];
            }
            if(datas.hfacility) {
              _service = JSON.parse(datas.hfacility);
              for(var i=0;i<_service.length;i++) {
                for(var k=0;k<_hservice.length;k++) {
                  if(_service[i].name === _hservice[k].name ) {
                    _hservice[k].s_chk = true
                  }
                }
              }
            }else{
              _service = [];
            }
            this.form.activeName = 'bedroom';
            this.form.special = _special;
            this.form.hspecial = _hspecial;
            this.form.facility = _service;
            this.form.hservice = _hservice;
            //处理pic模块
            let pics = datas.pics;
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
            this.form.fileList = items;
            const reg1 = RegExp(/bedroom/);
            this.bedroomList = this.handleImgType(reg1);
            const reg2 = RegExp(/livingroom/);
            this.livingroomList = this.handleImgType(reg2);
            const reg3 = RegExp(/bathroom/);
            this.bathroomList = this.handleImgType(reg3);
            const reg4 = RegExp(/Kitchen/);
            this.KitchenList = this.handleImgType(reg4);
            const reg5 = RegExp(/restaurant/);
            this.restaurantList = this.handleImgType(reg5);
            const reg6 = RegExp(/houseType/);
            this.houseTypeList = this.handleImgType(reg6);
            const reg7 = RegExp(/property/);
            this.propertyList = this.handleImgType(reg7);
            //处理位置信息模块
            let area = datas.area;
            this.form.area = {
              geoAddr: area.geoAddr,
              areaname: area.name,
              areaProperty: '暂无数据',
              householdNum: '暂无数据',
              year: '暂无数据',
              propertyFee: '暂无数据',
              greenRatio: '暂无数据',
              plotRatio: '暂无数据'
            }
          }
          // this.fileList = datas.pics;
          console.log(datas)
        })
      },
      onSubmit (form) {
        let self = this
        var datas = self.form;
        self.$refs[form].validate((valid) => {
          if (valid) {
            if (self.handleValidTwo(datas)) {
              return false
            } else {
              // this.handleSubmitData(datas)
              axios.post(wy_host+ 'supply/secondsave/', self.handleSubmitData(datas))
                .then(function (res) {
                  if(res.status == 200) {
                    self.$store.state.twoAllData = res.data;
                    self.$store.state.housingid = self.form.housingid;
                    self.$store.step = 'three'
                    self.$emit('listindatastwo', self.$store.step)
                  }
                })
                .catch(function (err) {
                  console.log(err)
                })
              }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goBackStep () {
        this.$store.step = 'one'
        this.$emit('listindatastwo', this.$store.step)
      },
      handleRemove (file, fileList) {
        // console.log(file, fileList)
        let self = this;
        let list = self.form.fileList
        let datas = {
          url: file.response.data.url
        }
        axios.post(wy_host+ 'pic/del', datas)
          .then(function (res) {
            console.log(res)
            for(var i=0;i<list.length;i++) {
              if(list[i].url == datas.url) {
                self.form.fileList.splice(i, 1)
              }
            }
            console.log(self.form.fileList)
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      handleSuccess (response, file, fileList) {
        // console.log(response, file, fileList)
        let type = this.form.activeName
        let list = this.form.fileList
        let url = response.data.url
        var json = {}
        console.log(type)
        if(list.length == 0) {
          json = {flag: 'main', name: type, url: url}
        }else{
          json = {flag: 'sub', name: type, url: url}
        }
          this.form.fileList.push(json)
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      beforeRemove (file, fileList) {
        // return this.$confirm(`确定移除 ${ file.name }？`);
      },
      renderMap (oneData) {
        console.log(oneData)
        var location = oneData.city +'市'+ oneData.area +'区' + oneData.business +'商圈'
        var address = oneData.city +'市'+ oneData.area +'区' + oneData.areaname + oneData.building +'栋';
        var self = this
        var map = new AMap.Map('map_container', {
          resizeEnable: true,
          zoom: 13,
          center: self.lataddlng
        })
        AMap.plugin('AMap.Geocoder', function () {
          var geocoder = new AMap.Geocoder({
            city: '023'
          })
          var marker = new AMap.Marker({
            map: map,
            bubble: true
          })
          geocoder.getLocation(address, function (status, result) {
            console.log(status, result)
            if (status === 'complete' && result.info === 'OK') {
              self.lataddlng = [result.geocodes["0"].location.lng, result.geocodes["0"].location.lat]
              self.form.latitude = result.geocodes["0"].location.lat
              self.form.longitude = result.geocodes["0"].location.lng
              map.setZoomAndCenter(14, self.lataddlng);
              marker.setPosition(result.geocodes["0"].location)
              geocoder.getAddress(result.geocodes["0"].location, function (status, result) {
                if (status === 'complete') {
                  message.innerHTML = ''
                } else {
                  message.innerHTML = '无法获取地址'
                }
              })
              // self.form.area = {
              //   address: location,
              //   name: oneData.name,
              //   properties: '暂无数据',
              //   type: '暂无数据',
              //   date: '暂无数据',
              //   Property: '暂无数据',
              //   green: '暂无数据',
              //   volume: '暂无数据',
              //   newInfo: '暂无数据'
              // }
            } else {
              console.log(result)
            }
          })
          var message = document.getElementById('map-message')
          map.on('click', function (e) {
            marker.setPosition(e.lnglat)
            geocoder.getAddress(e.lnglat, function (status, result) {
              if (status === 'complete') {
                message.innerHTML = ''
                var _msg = result.regeocode.addressComponent.province + result.regeocode.addressComponent.district + result.regeocode.addressComponent.township + result.regeocode.addressComponent.street + result.regeocode.addressComponent.streetNumber
                var cc = result.regeocode.formattedAddress.split(_msg)
                self.form.latitude = e.lnglat.lat
                self.form.longitude = e.lnglat.lng
                // self.form.num4 = {
                //   address: result.regeocode.formattedAddress,
                //   name: cc[1],
                //   properties: '暂无数据',
                //   type: '暂无数据',
                //   date: '暂无数据',
                //   Property: '暂无数据',
                //   green: '暂无数据',
                //   volume: '暂无数据',
                //   newInfo: '暂无数据'
                // }
              } else {
                message.innerHTML = '无法获取地址'
              }
            })
          })
        })
      },
      handleValidTwo (_data) {
        var _datas = _data, fchk = [], schk = [], bedImg, wsNum
        // bedImg = this.bedroomList
        // wsNum = this.form.room
        // if(wsNum > bedImg.length) {
        //   return this.$message.error('卧室图片不能少于卧室数')
        // }
        // console.log(bedImg)
        // console.log(wsNum)
        for (var i=0;i<_datas.hspecial.length;i++) {
          if (_datas.hspecial[i].f_chk === true) {
            fchk.push((_datas.hspecial[i]).toString())
          }
        }
        if (fchk.length === 0) {
          return this.$message.error('请选择至少一项产品特色')
        }
        if (fchk.length > 3) {
          return this.$message.error('产品特色最多选择3项')
        }
        for (var k=0;k<_datas.hservice.length;k++) {
          if (_datas.hservice[k].s_chk === true) {
            schk.push((_datas.hservice[k]).toString())
          }
        }
        if (schk.length === 0) {
          return this.$message.error('请选择至少一项服务设施')
        }
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleImgType (reg) {
        let fileList = this.form.fileList;
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
      handleSubmitData(datas) {
        var _datas = datas,_f_chk = datas.hspecial,_s_chk = datas.hservice,_special=[],_service=[],_imgfile=datas.fileList
        for (var i=0;i<_f_chk.length;i++) {
          if(_f_chk[i].f_chk && _f_chk[i].f_chk === true) {
            _special.push(_f_chk[i])
          }
        }
        for (var k=0;k<_s_chk.length;k++) {
          if(_s_chk[k].s_chk && _s_chk[k].s_chk === true) {
            _service.push(_s_chk[k])
          }
        }
        for (var j=0;j<_imgfile.length;j++) {
          _imgfile[j].name = _imgfile[j].name + j
        }
        _datas.fileList = _imgfile
        _datas.special = JSON.stringify(_special);
        _datas.facility = JSON.stringify(_service);
        _datas.latitude = parseFloat(_datas.latitude);
        _datas.longitude = parseFloat(_datas.longitude);
        return _datas
      }
    },
    watch: {
      stepone () {
        var oneData = this.$store.state.oneData
        if (this.stepone === 'two') {
          this.$nextTick(function () {
            this.renderMap(this.$store.state.oneData)
            this.readerPage()
          })
        }
      }
    }
  }
</script>

<style scoped>
  .form-box-2 {
    padding: 50px 100px;
    background-color: #fff;
    margin: 0 20px 20px;
    border-radius: 4px;
    text-align: left;
  }
  .form-box-3 {
    padding: 20px 100px;
    background-color: #fff;
    margin: 0 20px 20px;
    border-radius: 4px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .two-title {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    margin: 0 20px;
    border-bottom: 2px solid #ddd;
    text-align: left;
    padding-left: 20px;
  }
  .tips-feature {
    height: 40px;
  }
  .tips-feature span {
    background-color: #ddd;
    max-width: 540px;
    float: left;
  }
  .server-item {
    margin-bottom: 10px;
    margin-left: 0 !important;
    margin-right: 10px;
  }
  .submitRoomBtn {
    width: 200px;
    margin-left: -48px;
  }
  .gis-box {
    margin: 20px;
    background-color: #fff;
    padding-bottom: 30px;
  }
  #map_container {
    height: 300px;
    width: 600px;
    text-align: left;
    padding: 20px 100px;
    float: left;
    margin-left: 100px;
  }
  .clear-box {
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
  }
  .panel {
    background-color: #ddf;
    color: #333;
    border: 1px solid silver;
    box-shadow: 3px 4px 3px 0px silver;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    overflow: hidden;
    line-height: 20px;
  }
  .gis-item {
    text-align: left;
    padding: 20px 100px;
  }
  .img-line {
    text-align: left;
  }
  .server-box {
    width: 700px;
  }
</style>
