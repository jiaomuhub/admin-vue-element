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
          <span class="address-label">月付租金</span><el-input class="input_address" v-model="form.monthPay[0].pay" placeholder="" v-bind:disabled="ypay"></el-input><span class="address-label">￥/月</span>
          <span class="address-label">月付押金</span><el-input class="input_address" v-model="form.monthPay[1].pay1" placeholder="" v-bind:disabled="ypay"></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item>
          <span class="address-label">季度付租金</span><el-input class="input_address" v-model="form.quarterPay[0].pay" placeholder="" v-bind:disabled="jdpay"></el-input><span class="address-label">￥/月</span>
          <span class="address-label">季度付押金</span><el-input class="input_address" v-model="form.quarterPay[1].pay1" placeholder="" v-bind:disabled="jdpay"></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item>
          <span class="address-label">半年付租金</span><el-input class="input_address" v-model="form.halfYear[0].pay" placeholder="" v-bind:disabled="bnpay"></el-input><span class="address-label">￥/月</span>
          <span class="address-label">半年付押金</span><el-input class="input_address" v-model="form.halfYear[1].pay1" placeholder="" v-bind:disabled="bnpay"></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item>
          <span class="address-label">年付租金</span><el-input class="input_address" v-model="form.yearPay[0].pay" placeholder="" v-bind:disabled="npay"></el-input><span class="address-label">￥/月</span>
          <span class="address-label">年付押金</span><el-input class="input_address" v-model="form.yearPay[1].pay1" placeholder="" v-bind:disabled="npay"></el-input><span class="address-label">￥/月</span><span class="address-label">一年收入：36000￥</span>
        </el-form-item>
        <el-form-item label="入住时间">
          <div class="block">
            <el-date-picker
              v-model="form.time"
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
          <el-radio-group v-model="form.housekeeper">
            <el-radio v-for="item in housePeopleArrey" :key="item.id" :label="item.housekeepername">{{item.housekeepername}}</el-radio>
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
        <span class="successModel">产品名称：{{submitData.addr}}   &emsp; &emsp;&emsp;&emsp;    租金：{{submitData.money}}/月  <span class="pay-stype">{{submitData.stype}}</span></span><br />
        <span class="successModel">产品编号：{{submitData.id}}</span><br />
        <span class="successModel"><i class="el-icon-circle-check-outline" style="margin-right: 10px"></i>已发布成功，等待后台审核，审核成功后房源会自动上架</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="lookHouse">查看房源</el-button>
          <el-button type="primary" @click="goRelease">继续发布</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'three-product',
    props: ['stepone'],
    data () {
      return {
        form: {
          housingId: '',
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
          time: '',
          isvoucher: '',
          housekeeper: ''
        },
        housePeopleArrey: [],
        submitData: {
          addr: '',
          money: '',
          stype: '',
          id: ''
        },
        centerDialogVisible: false,
        ypay: true,
        jdpay: true,
        bnpay: true,
        npay: true
      }
    },
    methods: {
      readerThreePage (datas) {
        this.$nextTick(function () {
          this.centerDialogVisible = false;
          let _payment = datas.payment;
          let _payArrey = [];
          if(_payment) {
            this.form.time = datas.expectedtime;
            this.form.housekeeper = datas.selected;
            if(datas.isvoucher == 1) {
              this.form.isvoucher = '是';
            }else{
              this.form.isvoucher = '否';
            }
            if(_payment.monthlyPayment == 1) {
              _payArrey.push('月付');
              this.ypay = false;
              this.form.monthPay = [
                {pay: _payment.monthlyMoney.toString()},
                {pay1:  _payment.monthlyPledge.toString()}
              ]
            }
            if(_payment.quarterlyPayment == 1) {
              _payArrey.push('季度付');
              this.jdpay = false;
              this.form.quarterPay = [
                {pay: _payment.quarterlyMoney.toString()},
                {pay1:  _payment.quarterlyPledge.toString()}
              ]
            }
            if(_payment.halfYearPayment == 1) {
              _payArrey.push('半年付');
              this.bnpay = false;
              this.form.halfYear = [
                {pay: _payment.halfYearMoney.toString()},
                {pay1:  _payment.halfYearPledge.toString()}
              ]
            }
            if(_payment.annualPayment == 1) {
              _payArrey.push('年付');
              this.npay = false;
              this.form.yearPay = [
                {pay: _payment.annualMoney.toString()},
                {pay1:  _payment.annualPledge.toString()}
              ]
            }
            this.form.paytype = _payArrey
          }
          this.housePeopleArrey = datas.housekeepers;
        })
      },
      onSubmit () {
        let self = this;
        if (self.handleValiedThree(self.form)) {
          return false
        } else {
          var datas = self.dataHandle(self.form)
          console.log(datas)
          axios.post(wy_host+ 'supply/publish/', datas)
            .then(function (res) {
              let datas = res.data.housing;
              let address = res.data.area.name + datas.houseType + datas.location
              let payf = JSON.parse(datas.paymentType);
              self.submitData = {
                addr: address,
                money: datas.money,
                stype: payf[0],
                id: datas.id
              }
              console.log(res)
              self.centerDialogVisible = true;
            })
            .catch(function (err) {
              console.log(err)
            })
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
        if (this.form.time === '') {
          return this.$message.error('请选择入住时间')
        }
        if (this.form.isvoucher === '') {
          return this.$message.error('请选择是否支持免租券')
        }
        if (this.form.housekeeper === '') {
          return this.$message.error('请选择房屋管理员')
        }
      },
      dataHandle (data) {
        var _datas = {}
        if(this.ypay === false) {
          _datas.monthPay = data.monthPay
        }
        if(this.jdpay === false) {
          _datas.quarterPay = data.quarterPay
        }
        if(this.bnpay === false) {
          _datas.halfYear = data.halfYear
        }
        if(this.npay === false) {
          _datas.yearPay = data.yearPay
        }
        var d = new Date(data.time);
        var month
        if(d.getMonth() + 1 < 10){
          month = '0'+ (d.getMonth() + 1)
        }else{
          month = d.getMonth() + 1
        }
        var datetime=d.getFullYear() + '-' + month + '-' + d.getDate()
        _datas.time = datetime
        if(data.isvoucher === '是') {
          _datas.isvoucher = 'yes'
        }else{
          _datas.isvoucher = 'no'
        }
        _datas.housekeeper = data.housekeeper
        _datas.housingId = this.$store.state.oneData.housingid
        return _datas
      },
      paycChangeHandler () {
        var type = this.form.paytype;
        var allType = ['月付','季度付','半年付','年付']
        this.ypay = false
        this.jdpay = false
        this.bnpay = false
        this.npay = false
        for ( var i=0;i<allType.length;i++ ) {
          if(type.indexOf(allType[i]) < 0) {
            console.log(allType[i])
            if(allType[i] === '月付') {
              this.ypay = true
              this.monthPay = [
                {pay: ''},
                {pay1: ''}
              ]
            }
            if(allType[i] === '季度付') {
              this.jdpay = true
              this.quarterPay = [
                {pay: ''},
                {pay1: ''}
              ]
            }
            if(allType[i] === '半年付') {
              this.bnpay = true
              this.halfYear = [
                {pay: ''},
                {pay1: ''}
              ]
            }
            if(allType[i] === '年付') {
              this.npay = true
              this.yearPay = [
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
        window.location.reload();
      }
    },
    watch: {
      stepone () {
        var twoData = this.$store.state.twoAllData
        if (this.stepone === 'three') {
          this.$nextTick(function () {
            this.readerThreePage(twoData)
          })
        }
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
  .pay-stype {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 4px 4px;
    font-size: 12px;
    color: #aaa;
    margin-left: 6px;
  }
</style>
