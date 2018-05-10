<template>
    <div v-if="stepone == 'three'">
      <h2 style="font-weight: 100;font-size: 22px;">第二步：填写产品介绍信息</h2>
      <el-form ref="form" :model="form" class="form-box-1" label-width="68px">
        <el-form-item label="付款方式">
          <el-radio-group v-model="form.paytype">
            <el-radio label="月付"></el-radio>
            <el-radio label="季度付"></el-radio>
            <el-radio label="半年付"></el-radio>
            <el-radio label="年付"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="租金">
          <span class="address-label">月付租金</span><el-input class="input_address" v-model="form.monthPay" placeholder=""></el-input><span class="address-label">￥/月</span>
          <span class="address-label">月付押金</span><el-input class="input_address" v-model="form.monthPay1" placeholder=""></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item>
          <span class="address-label">季度付租金</span><el-input class="input_address" v-model="form.quarterPay" placeholder=""></el-input><span class="address-label">￥/月</span>
          <span class="address-label">季度付押金</span><el-input class="input_address" v-model="form.quarterPay1" placeholder=""></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item>
          <span class="address-label">半年付租金</span><el-input class="input_address" v-model="form.halfYear" placeholder=""></el-input><span class="address-label">￥/月</span>
          <span class="address-label">半年付押金</span><el-input class="input_address" v-model="form.halfYear1" placeholder=""></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item>
          <span class="address-label">年付租金</span><el-input class="input_address" v-model="form.yearPay" placeholder=""></el-input><span class="address-label">￥/月</span>
          <span class="address-label">年付押金</span><el-input class="input_address" v-model="form.yearPay1" placeholder=""></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item label="入住时间">
          <div class="block">
            <el-date-picker
              v-model="form.enterTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="是否支持安优客平台预租劵" label-width="180px">
          <el-radio-group v-model="form.ticket">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="tips-feature"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>同意平台预租劵房源代表房源会享受平台预租劵规则</span></div>
        <el-form-item label="房屋管理员" label-width="82px">
          <el-radio-group v-model="form.roomManage">
            <el-radio label="张三"></el-radio>
            <el-radio label="李四"></el-radio>
            <el-radio label="王五"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item >
          <el-button size="medium" class="submitRoomBtn" type="primary" @click="goBackStep">上一步</el-button>
          <el-button class="submitRoomBtn" size="medium" type="primary" @click="onSubmit" style="margin-left: 20px">提交房源</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: 'three-product',
    props: ['stepone'],
    data () {
      return {
        form: {
          stype: '',
          paytype: '',
          monthPay: '',
          monthPay1: '',
          quarterPay: '',
          quarterPay1: '',
          halfYear: '',
          halfYear1: '',
          yearPay: '',
          yearPay1: '',
          enterTime: '',
          ticket: '',
          roomManage: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log(this.form)
      },
      goBackStep () {
        this.$store.step = 'two'
        this.$emit('listindatasthree', this.$store.step)
      }
    }
  }
</script>

<style scoped>
  .tips-feature {
    height: 40px;
  }
  .tips-feature span {
    background-color: #ddd;
    max-width: 540px;
    float: left;
  }
  .submitRoomBtn {
    width: 200px;
    margin-left: -68px;
  }
</style>
