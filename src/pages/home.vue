<template>
<div class="body">
  <center>
    <div class="page-header">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/home'}">管理控制</el-breadcrumb-item>
        <el-breadcrumb-item>产品发布</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <product-one :stepone="step" v-on:listindatasone="showStepone" ref="refStepone"></product-one>
    <product-two :stepone="step" v-on:listindatastwo="showSteptwo"></product-two>
    <product-three :stepone="step" v-on:listindatasthree="showStepthree"></product-three>
  </center>

</div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import vuex from 'vuex'
import productOne from '@/components/productRelease/oneProduct'
import productTwo from '@/components/productRelease/twoProduct'
import productThree from '@/components/productRelease/threeProduct'
Vue.use(vuex)
export default {
  name: 'home',
  data () {
    return {
      step: 'one'
    }
  },
  components: {
    productOne,
    productTwo,
    productThree
  },
  mounted () {
    console.log('asdws');
    console.log(this);
  },
  methods: {
    showStepone () {
      this.step = this.$store.step;
    },
    showSteptwo () {
      this.step = this.$store.step
    },
    showStepthree () {
      this.step = this.$store.step
    },
    goFirstStep () {
      this.step = 'one'
    },
    fetchDate () {
      alert('geibian')
    }
  }
}
</script>

