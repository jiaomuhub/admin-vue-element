<template>
  <div v-if="stepone == 'one'">
    <h2 style="font-weight: 100;font-size: 22px;">第一步：选择产品基础信息</h2>
    <el-form ref="form" :rules="rules" :model="form" class="form-box-1" label-width="120px">
      <el-form-item label="出租方式" prop="rent">
        <el-select v-model="form.rent" placeholder="请选择出租方式" @change="changeselectType">
          <el-option label="整租" value="整租"></el-option>
          <el-option label="合租" value="合租"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="小区名称" class="eareBox" prop="areaname">
        <el-input class="eare-name" v-model="form.areaname" placeholder="直接填写小区名字，例融景城" v-on:input="searchVillage"></el-input>
        <div  class="searchoptionBox" v-show="showVillage">
          <div v-for="item in eareOptions">
            <div @click="searchVillageItem(item.value)" data-xq="item.value">{{ item.content }}</div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="房屋地址" prop="building" style="display: inline-block">
        <el-input class="input_address" v-model="form.building"placeholder=""></el-input><span class="address-label">栋</span>
      </el-form-item>
      <el-form-item label="" prop="layer" style="display: inline-block" label-width="0">
        <el-input class="input_address" v-model="form.layer" placeholder=""></el-input><span class="address-label">层</span>
      </el-form-item>
      <el-form-item label="" prop="doornum" style="display: inline-block"  label-width="0">
        <el-input class="input_address" v-model="form.doornum" placeholder=""></el-input><span class="address-label">门牌号</span>
      </el-form-item> <br/>
      <el-form-item label="室" v-if="selectType" style="display: inline-block" prop="rooms">
        <el-input class="input_address" v-model="form.rooms" placeholder=""></el-input><span class="address-label">共几室</span>
      </el-form-item>
      <el-form-item label="" v-if="selectType" style="display: inline-block" label-width="0" prop="room">
        <el-input class="input_address" v-model="form.room" placeholder=""></el-input><span class="address-label">所在室</span>
      </el-form-item>
      <el-form-item label="所在区域" prop="selectedOptions">
        <div class="block">
          <el-cascader
            :options="options"
            v-model="form.selectedOptions"
            @change="handleChange"  placeholder="省(直辖市/自治区)">
          </el-cascader>
        </div>
      </el-form-item>
      <el-form-item label="所属商圈" prop="business">
        <el-select v-model="form.business" placeholder="请选择所属商圈">
          <el-option v-for="item in businessCircle" :label="item.value" :value="item.value" :key="item.value"></el-option>
          <!--<el-option label="解放碑" value="add"></el-option>-->
        </el-select>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button class="submitRoomBtn" size="medium" type="primary" @click="onSubmit('form')">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/javascript">
import eareData from '../villageData'
import regionData from '../regionData'
import business_circle from '../businessCircle'
import axios from 'axios';
export default {
  name: 'productOne',
  data () {
    var validateArea = (rule, value, callback) => {//自定义区域校验
      if (value == '') {
        return callback(new Error('请选择所属区域'));
      } else {
        callback();
      }
    };
    var validateRoom = (rule, value, callback) => {//自定义室校验
      if (this.form.stype == '合租' && value == '') {
        return callback(new Error('卧室不能为空'));
      } else {
        callback()
      }
    };
    return {
      form: {
        housingid: '',
        rent: '',
        building: '',
        layer: '',
        doornum: '',
        rooms: '',
        room: '',
        areaname: '',
        business: '',
        selectedOptions: []
      },
      options: [
        regionData
      ],
      businessCircle: business_circle,
      selectType: false,
      eareOptions: [],
      showVillage: false,
      rules: {
        rent: [
          { required: true, message: '请选择出租方式', trigger: 'change' }
        ],
        areaname: [
          { required: true, message: '请输入小区名称', trigger: 'blur' }
        ],
        building:[
          { required: true, message: '请输入房屋所属栋数', trigger: 'blur' }
        ],
        layer:[
          { required: true, message: '请输入房屋所在层数', trigger: 'blur' }
        ],
        doornum:[
          { required: true, message: '请输入房屋所在门牌号数', trigger: 'blur' }
        ],
        rooms: [
          { validator: validateRoom, trigger: 'blur' }
        ],
        room: [
          { validator: validateRoom, trigger: 'blur' }
        ],
        selectedOptions: [
          { validator: validateArea, trigger: 'blur' }
        ],
        business:[
          { required: true, message: '请输入房屋所在门牌号数', trigger: 'blur' }
        ]
      }
    }
  },
  props: ['stepone'],
  created () {
    var param = this.$route.params.Id;
    var _oneData = this.$store.state.oneData;
    if(param == undefined || param == null || param  == '') {
      this.form.housingid = ''
    }else{
      this.form.housingid = param
      let _loc = _oneData.location.split('-');
      let _geo = _oneData.geoAddr.split('-');
      this.form = {
        housingid: this.form.housingid,
        rent: _oneData.rent,
        building: _loc[0],
        layer: _loc[1],
        doornum: _loc[2],
        rooms: '',
        room: '',
        areaname: _oneData.areaname,
        business: _oneData.business,
        selectedOptions: _geo.slice(0, 2)
      }
    }
  },
  methods: {
    onSubmit (form) {
      let self = this
      var datas = self.form
      var area = self.form.selectedOptions.slice(0, 3)
      datas.province = '重庆'
      datas.city = area[0]
      datas.area = area[1]
      self.$refs[form].validate((valid) => {
        if (valid) {
          // console.log(datas)
          axios.post(wy_host+ 'supply/firstsave/', datas)
            .then(function (res) {
              if(res.status == 200) {
                console.log(res.data)
                self.$store.step = 'two'
                self.$store.state.oneData = datas;
                if(datas.housingid == '') {
                  self.$store.state.oneData = datas;
                  self.$store.state.oneData.housingid = res.data.housingid;
                }else{
                  self.$store.state.oneData = datas;
                }
                self.$store.state.oneAllData = res.data
                self.$emit('listindatasone', self.$store.step)
              }else{
                return self.$message.error(res.msg)
              }
            })
            .catch(function (err) {
              return self.$message.error(err)
            })
        } else {
          console.log('检验不通过');
          return false;
        }
      });
    },
    handleChange (value) {
      this.selectedOptions = value
    },
    changeselectType () {
      var stype = this.form.rent
      if (stype === '整租') {
        this.selectType = false
      } else {
        this.selectType = true
      }
    },
    searchVillage () {
      let val = this.form.areaname, a = [], reg = new RegExp('^(\s|[\\u4E00-\\u9FFF])+$'), data = eareData;
      let _school = val, self = this
      if (val && val.length > 1 && val.length <= 50) {
        self.selectEare(data, function (i, item) {
          var f = true, w = reg.test(val) ? val.split('') : [val];
          self.selectEare(w, function () {
            if (item.indexOf(this) < 0) {
              f = false;
              return false
            }
          });
          f && a.push({ id: i, value: item, content: item });
          if (a.length >= 30) {
            return false
          }
        });
      }
      if (a.length > 0) {
        a = a.sort(function (a, b) {
          return a.content.length - b.content.length
        })
      }
      val.length > 1 && a.unshift({ id: 'custom', value: val, content: val + '(如果没有检索到该小区,点击输入成功)' });
      if (_school !== val && _school !== null) {
        _school = null
        return
      }
      this.eareOptions = a
      this.showVillage = true
    },
    selectEare (data, fn) {
      if (typeof data !== 'object') { return }
      let _keys = Object.keys(data), _f = true
      for (let i in data) {
        let x = fn.bind(data[i])(i, data[i], _keys.indexOf(i))
        if (x === true) {
          continue;
        } else if (x === false) {
          _f = false
          break;
        }
      }
      return _f
    },
    searchVillageItem (data) {
      this.form.areaname = data
      this.showVillage = false
    },
    // handleValied (_datas) {
    //   console.log(_datas)
    //   if (_datas.stype === '') {
    //     return this.$message.error('请选择出租方式')
    //   }
    //   if (_datas.name === '') {
    //     return this.$message.error('请输入小区名称')
    //   }
    //   if (_datas.address.address1 === '' || _datas.address.address2 === '' || _datas.address.address3 === '') {
    //     return this.$message.error('房屋地址不能为空')
    //   }
    //   if (isNaN(_datas.address.address1) || isNaN(_datas.address.address2) || isNaN(_datas.address.address3)) {
    //     return this.$message.error('房屋地址只能是数字类型')
    //   }
    //   if (_datas.stype === 'add' && _datas.house.allBedroom ==='' || _datas.stype === 'add' && _datas.house.bedroom ==='') {
    //     return this.$message.error('卧室不能为空')
    //   }
    //   if (this.selectedOptions.length < 2) {
    //     return this.$message.error('请选择所属区域')
    //   }
    //   if (_datas.quan === '') {
    //     return this.$message.error('请选择所属商圈')
    //   }
    // }
  }
}
</script>
<style type="text/css">
  .test{
    height: 40px;
    background: #ccc;
    margin-bottom: 15px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #12AFE3;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 50px;
    line-height: 50px;
  }
  .body .page-header {
    background: #fff;
    padding: 15px;
  }
  .form-box-1 {
    padding: 50px 100px;
    background-color: #fff;
    margin: 20px;
    border-radius: 4px;
    text-align: left;
  }
  .el-select {
    float: left;
  }
  .eare-name {
    width: 730px;
  }
  .input_address {
    width: 218px;
  }
  .address-label {
    margin: 0 30px 0 10px;
  }
  .el-form-item__content {
    text-align: left;
  }
  .submitRoomBtn {
    width: 200px;
    margin-left: -68px;
  }
  .eareBox {
    position: relative;
  }
  .searchoptionBox {
    position: absolute;
    top: 46px;
    z-index: 999;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 730px;
    height: 300px;
    overflow-y: auto;
    padding: 0 15px;
  }
</style>
