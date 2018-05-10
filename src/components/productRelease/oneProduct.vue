<template>
  <div v-if="stepone == 'one'">
    <h2 style="font-weight: 100;font-size: 22px;">第一步：选择产品基础信息</h2>
    <el-form ref="form" :model="form" class="form-box-1" label-width="120px">
      <el-form-item label="出租方式">
        <el-select v-model="form.stype" placeholder="请选择出租方式">
          <el-option label="整租" value="all"></el-option>
          <el-option label="合租" value="add"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="小区名称">
        <el-input class="eare-name" v-model="form.name" placeholder="直接填写小区名字，例融景城"></el-input>
      </el-form-item>
      <el-form-item label="房屋地址">
        <el-input class="input_address" v-model="form.address1" placeholder="审批人"></el-input><span class="address-label">栋</span>
        <el-input class="input_address" v-model="form.address2" placeholder="审批人"></el-input><span class="address-label">层</span>
        <el-input class="input_address" v-model="form.address3" placeholder="审批人"></el-input><span class="address-label">门牌号</span>
      </el-form-item>
      <el-form-item label="所在区域">
        <div class="block">
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"  placeholder="省(直辖市/自治区)">
          </el-cascader>
        </div>
      </el-form-item>
      <el-form-item label="所属商圈">
        <el-select v-model="form.stype" placeholder="请选择所属商圈">
          <el-option label="观音桥" value="all"></el-option>
          <el-option label="解放碑" value="add"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button class="submitRoomBtn" size="medium" type="primary" @click="onSubmit">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'productOne',
  data () {
    return {
      form: {
        stype: '',
        address1: '',
        address2: '',
        address3: '',
        name: ''
      },
      options: [
        {
          value: 'sichuan',
          label: '四川',
          children: [
            {
              value: 'chengdu',
              label: '成都',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }
              ]
            }, {
              value: 'mianyang',
              label: '绵阳',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }
              ]
            }
          ]
        }, {
          value: 'chongqing',
          label: '重庆',
          children: [
            {
              value: 'yubei',
              label: '渝北',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }
              ]
            }, {
              value: 'yuzhong',
              label: '雨中',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }
              ]
            }
          ]
        }
      ],
      selectedOptions: []
    }
  },
  props: ['stepone'],
  methods: {
    onSubmit () {
      var datas = this.form
      datas.eare = this.selectedOptions.slice(0, 3)
      this.$store.step = 'two'
      this.$emit('listindatasone', this.$store.step)
      console.log(datas)
      // axios.post('', datas)
      //   .then(function (res) {
      //     console.log(res)
      //   })
      //   .catch(function (err) {
      //     console.log(err)
      //   })
    },
    handleChange (value) {
      this.selectedOptions = value
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
</style>
