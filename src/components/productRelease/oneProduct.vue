<template>
  <div v-if="stepone == 'one'">
    <h2 style="font-weight: 100;font-size: 22px;">第一步：选择产品基础信息</h2>
    <el-form ref="form" :model="form" class="form-box-1" label-width="120px">
      <el-form-item label="出租方式">
        <el-select v-model="form.stype" placeholder="请选择出租方式" @change="changeselectType">
          <el-option label="整租" value="all"></el-option>
          <el-option label="合租" value="add"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="小区名称" class="eareBox">
        <el-input class="eare-name" v-model="form.name" placeholder="直接填写小区名字，例融景城" v-on:input="searchVillage"></el-input>
        <div  class="searchoptionBox" v-show="showVillage">
          <div v-for="item in eareOptions">
            <div @click="searchVillageItem(item.value)" data-xq="item.value">{{ item.content }}</div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="房屋地址">
        <el-input class="input_address" v-model="form.address.address1"placeholder="审批人"></el-input><span class="address-label">栋</span>
        <el-input class="input_address" v-model="form.address.address2" placeholder="审批人"></el-input><span class="address-label">层</span>
        <el-input class="input_address" v-model="form.address.address3" placeholder="审批人"></el-input><span class="address-label">门牌号</span>
      </el-form-item>
      <el-form-item label="室" v-if="selectType">
        <el-input class="input_address" v-model="form.house.allBedroom" placeholder="审批人"></el-input><span class="address-label">共几室</span>
        <el-input class="input_address" v-model="form.house.bedroom" placeholder="审批人"></el-input><span class="address-label">所在室</span>
      </el-form-item>
      <el-form-item label="所在区域" prop="selectedOptions">
        <div class="block">
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"  placeholder="省(直辖市/自治区)">
          </el-cascader>
        </div>
      </el-form-item>
      <el-form-item label="所属商圈">
        <el-select v-model="form.quan" placeholder="请选择所属商圈">
          <el-option v-for="item in businessCircle" :label="item.value" :value="item.value" :key="item.value"></el-option>
          <!--<el-option label="解放碑" value="add"></el-option>-->
        </el-select>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button class="submitRoomBtn" size="medium" type="primary" @click="onSubmit">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/javascript">
import eareData from '../villageData'
import regionData from '../regionData'
import business_circle from '../businessCircle'
export default {
  name: 'productOne',
  data () {
    return {
      form: {
        stype: '',
        address: {
          address1: '',
          address2: '',
          address3: ''
        },
        house: {
          allBedroom: '',
          bedroom: ''
        },
        name: '',
        quan: ''
      },
      options: [
        regionData
      ],
      businessCircle: business_circle,
      selectedOptions: [],
      selectType: false,
      eareOptions: [],
      showVillage: false,
      paramID: ''
    }
  },
  props: ['stepone'],
  created () {
    var param = this.$route.params.Id
    this.paramID = param
    if(this.paramID) {
      this.form = {
        stype: '整租',
        address: {
          address1: '12',
          address2: '1',
          address3: '1'
        },
        house: {
          allBedroom: '2',
          bedroom: '2'
        },
        name: '协信',
        quan: '观音桥'
      }
    }
    console.log(param)
  },
  methods: {
    onSubmit () {
      var datas = this.form
      datas.eare = this.selectedOptions.slice(0, 3)
      // if (this.handleValied(datas)) {
      //   return false
      // } else {
        this.$store.step = 'two'
        this.$store.oneData = datas
        this.$emit('listindatasone', this.$store.step)
        // axios.post('', datas)
        //   .then(function (res) {
        //     console.log(res)
        //   })
        //   .catch(function (err) {
        //     console.log(err)
        //   })
      // }
    },
    handleChange (value) {
      this.selectedOptions = value
    },
    changeselectType () {
      var stype = this.form.stype
      if (stype === 'all') {
        this.selectType = false
      } else {
        this.selectType = true
      }
    },
    handleValied (_datas) {
      console.log(_datas)
      if (_datas.stype === '') {
        return this.$message.error('请选择出租方式')
      }
      if (_datas.name === '') {
        return this.$message.error('请输入小区名称')
      }
      if (_datas.address.address1 === '' || _datas.address.address2 === '' || _datas.address.address3 === '') {
        return this.$message.error('房屋地址不能为空')
      }
      if (isNaN(_datas.address.address1) || isNaN(_datas.address.address2) || isNaN(_datas.address.address3)) {
        return this.$message.error('房屋地址只能是数字类型')
      }
      if (_datas.stype === 'add' && _datas.house.allBedroom ==='' || _datas.stype === 'add' && _datas.house.bedroom ==='') {
        return this.$message.error('卧室不能为空')
      }
      if (this.selectedOptions.length < 2) {
        return this.$message.error('请选择所属区域')
      }
      if (_datas.quan === '') {
        return this.$message.error('请选择所属商圈')
      }
    },
    searchVillage () {
      let val = this.form.name, a = [], reg = new RegExp('^(\s|[\\u4E00-\\u9FFF])+$'), data = eareData;
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
      this.form.name = data
      this.showVillage = false
    }
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
