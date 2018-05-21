<template>
    <div v-if="stepone == 'three'">
      <h2 style="font-weight: 100;font-size: 22px;">第三步：填写出租信息</h2>
      <el-form ref="form" :model="form" class="form-box-1" label-width="68px">
        <el-form-item label="付款方式">
          <el-checkbox-group v-model="form.paytype" @change="paycChangeHandler">
            <el-checkbox label="月付">月付</el-checkbox>
            <el-checkbox label="季度付">季度付</el-checkbox>
            <el-checkbox label="半年付">半年付</el-checkbox>
            <el-checkbox label="年付">年付</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="租金">
          <span class="address-label">月付租金</span><el-input class="input_address" v-model="form.monthPay[0].pay" placeholder="" v-bind:disabled="form.ypay"></el-input><span class="address-label">￥/月</span>
          <span class="address-label">月付押金</span><el-input class="input_address" v-model="form.monthPay[1].pay1" placeholder="" v-bind:disabled="form.ypay"></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item>
          <span class="address-label">季度付租金</span><el-input class="input_address" v-model="form.quarterPay[0].pay" placeholder="" v-bind:disabled="form.jdpay"></el-input><span class="address-label">￥/月</span>
          <span class="address-label">季度付押金</span><el-input class="input_address" v-model="form.quarterPay[1].pay1" placeholder="" v-bind:disabled="form.jdpay"></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item>
          <span class="address-label">半年付租金</span><el-input class="input_address" v-model="form.halfYear[0].pay" placeholder="" v-bind:disabled="form.bnpay"></el-input><span class="address-label">￥/月</span>
          <span class="address-label">半年付押金</span><el-input class="input_address" v-model="form.halfYear[1].pay1" placeholder="" v-bind:disabled="form.bnpay"></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item>
          <span class="address-label">年付租金</span><el-input class="input_address" v-model="form.yearPay[0].pay" placeholder="" v-bind:disabled="form.npay"></el-input><span class="address-label">￥/月</span>
          <span class="address-label">年付押金</span><el-input class="input_address" v-model="form.yearPay[1].pay1" placeholder="" v-bind:disabled="form.npay"></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
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
          <el-radio-group v-model="form.isvoucher">
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
      <el-dialog
        title="房源发布成功"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span class="successModel">产品名称：紫荆商业广场1室1厅 2-21-5   &emsp; &emsp;&emsp;&emsp;    租金：3000/月</span><br />
        <span class="successModel">产品编号：1231231231231</span><br />
        <span class="successModel"><i class="el-icon-circle-check-outline" style="margin-right: 10px"></i>已发布成功，等待后台审核，审核成功后房源会自动上架</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="lookHouse">查看房源</el-button>
          <el-button type="primary" @click="goRelease">继续发布</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
  export default {
    name: 'three-product',
    props: ['stepone'],
    data () {
      return {
        form: {
          paytype: [],
          monthPay: [
            {pay: ''},
            {pay1: ''}
          ],
          quarterPay: [
            {pay: ''},
            {pay1: ''}
          ],
          halfYear: [
            {pay: ''},
            {pay1: ''}
          ],
          yearPay: [
            {pay: ''},
            {pay1: ''}
          ],
          enterTime: '',
          isvoucher: '',
          roomManage: '',
          ypay: true,
          jdpay: true,
          bnpay: true,
          npay: true
        },
        centerDialogVisible: false
      }
    },
    methods: {
      onSubmit () {
        if (this.handleValiedThree(this.form)) {
          return false
        } else {
          console.log(this.dataHandle(this.form))
          this.centerDialogVisible = true;
        }
      },
      goBackStep () {
        this.$store.step = 'two'
        this.$emit('listindatasthree', this.$store.step)
      },
      handleValiedThree (data) {
        if (this.form.paytype.length === 0) {
          return this.$message.error('请选择付款方式')
        }
        if (data.ypay === false) {
          if(data.monthPay[0].pay === '') {
            return this.$message.error('月付租金不能为空')
          }
          if(data.monthPay[1].pay1 === '') {
            return this.$message.error('月付押金不能为空')
          }
        }
        if (data.jdpay === false) {
          if(data.quarterPay[0].pay === '') {
            return this.$message.error('季度付租金不能为空')
          }
          if(data.quarterPay[1].pay1 === '') {
            return this.$message.error('季度付押金不能为空')
          }
        }
        if (data.bnpay === false) {
          if(data.halfYear[0].pay === '') {
            return this.$message.error('半年付租金不能为空')
          }
          if(data.halfYear[1].pay1 === '') {
            return this.$message.error('半年付押金不能为空')
          }
        }
        if (data.npay === false) {
          if(data.yearPay[0].pay === '') {
            return this.$message.error('年付租金不能为空')
          }
          if(data.yearPay[1].pay1 === '') {
            return this.$message.error('年付押金不能为空')
          }
        }
        if (this.form.enterTime === '') {
          return this.$message.error('请选择入住时间')
        }
        if (this.form.isvoucher === '') {
          return this.$message.error('请选择是否支持免租券')
        }
        if (this.form.roomManage === '') {
          return this.$message.error('请选择房屋管理员')
        }
      },
      dataHandle (data) {
        var _datas = {}
        if(data.ypay === false) {
          _datas.monthPay = data.monthPay
        }
        if(data.jdpay === false) {
          _datas.quarterPay = data.quarterPay
        }
        if(data.bnpay === false) {
          _datas.halfYear = data.halfYear
        }
        if(data.npay === false) {
          _datas.yearPay = data.yearPay
        }
        _datas.enterTime = data.enterTime
        if(data.isvoucher === '是') {
          _datas.isvoucher = 'yes'
        }else{
          _datas.isvoucher = 'no'
        }
        _datas.roomManage = data.roomManage
        return _datas
      },
      paycChangeHandler () {
        var type = this.form.paytype;
        var allType = ['月付','季度付','半年付','年付']
        this.form.ypay = false
        this.form.jdpay = false
        this.form.bnpay = false
        this.form.npay = false
        for ( var i=0;i<allType.length;i++ ) {
          if(type.indexOf(allType[i]) < 0) {
            console.log(allType[i])
            if(allType[i] === '月付') {
              this.form.ypay = true
              this.form.monthPay = [
                {pay: ''},
                {pay1: ''}
              ]
            }
            if(allType[i] === '季度付') {
              this.form.jdpay = true
              this.form.quarterPay = [
                {pay: ''},
                {pay1: ''}
              ]
            }
            if(allType[i] === '半年付') {
              this.form.bnpay = true
              this.form.halfYear = [
                {pay: ''},
                {pay1: ''}
              ]
            }
            if(allType[i] === '年付') {
              this.form.npay = true
              this.form.yearPay = [
                {pay: ''},
                {pay1: ''}
              ]
            }
          }
        }
      },
      lookHouse () {
        this.$router.push('/proManger')
      },
      goRelease () {
        this.$store.step = 'one'
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
  .successModel {
    line-height: 40px;
    padding-left: 30px;
  }
</style>
