<template>
  <div v-if="isShowModel" class="add-model">
    <div class="model-title">
      添加房管员
    </div>
    <el-form ref="form" :model="addForm" label-width="100px" class="add-model-form">
      <el-form-item label="房管员姓名">
        <el-input v-model="addForm.name"></el-input>
      </el-form-item>
      <el-form-item label="使用联系方式">
        <el-radio-group v-model="addForm.resource">
          <el-radio label="座机"></el-radio>
          <el-radio label="手机"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="房管员联系">
        <span>手机</span><el-input v-model="addForm.tel" class="tel-model"></el-input>
        <span>座机</span><el-input v-model="addForm.phone" class="tel-model"></el-input>
      </el-form-item>
      <el-form-item class="handle-btn">
        <el-button @click="cancelAdd">取消</el-button>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'show-model',
    props: ['isShowModel', 'isEdit'],
    data () {
      return {
        addForm: {
          name: '',
          resource: '',
          phone: '',
          tel: ''
        }
      }
    },
    watch: {
      isEdit: function (val, oldVal) {
        setTimeout(() => {
          this.addForm = {
            name: this.isEdit.name,
            resource: '手机',
            phone: '',
            tel: this.isEdit.tel
          }
        }, 100)
      }
    },
    methods: {
      onSubmit () {
        // console.log(this.addForm)
        var items = this.addForm
        this.$store.isShow = false
        this.$store.rowData = this.addForm
        this.$emit('listinAddAdmin', this.$store)
        for (var item in items) {
          items[item] = ''
        }
      },
      cancelAdd () {
        var items = this.addForm
        this.$store.isShow = false
        this.$emit('listinAddAdmin', this.$store.isShow)
        for (var item in items) {
          items[item] = ''
        }
      }
    }
  }
</script>

<style scoped>

  .add-model {
    width: 500px;
    height: 380px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    position: fixed;
    top: 25%;
    left: 40%;
    z-index: 99999;
    overflow: hidden;
  }
  .add-model-form {
    padding: 20px;
  }
  .model-title {
    height: 40px;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    color: #333;
    font-weight: 600;
    background-color: #ddd;
  }
  .tel-model {
    width: 300px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .handle-btn {
    margin-left: 48px;
  }
</style>

