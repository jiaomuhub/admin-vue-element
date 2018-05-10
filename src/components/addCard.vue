<template>
  <div class="position-box">
    <div v-if="isShowCard" class="card-model">
      <div class="card-title">
        预租劵使用录入
      </div>
      <el-form ref="form" :model="addForm" label-width="100px" class="add-card-form">
        <el-form-item label="免租劵序号">
          <el-input v-model="addForm.num"></el-input>
        </el-form-item>
        <el-form-item class="handle-btn">
          <el-button @click="cancelAdd">取消</el-button>
          <el-button type="primary" @click="onSubmit">确定录入</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'show-card',
    props: ['isShowCard'],
    data () {
      return {
        addForm: {
          num: ''
        }
      }
    },
    methods: {
      cancelAdd () {
        var items = this.addForm
        this.$store.showCard = false
        this.$emit('listinAddCard', this.$store.showCard)
        for (var item in items) {
          items[item] = ''
        }
      },
      onSubmit () {
        console.log(this.addForm)
        var items = this.addForm
        this.$store.showCard = false
        // this.$store.rowData = this.addForm
        this.$emit('listinAddCard', this.$store)
        for (var item in items) {
          items[item] = ''
        }
      }
    }
  }
</script>

<style scoped>
  .card-model {
    width: 500px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    position: fixed;
    top: 25%;
    left: 40%;
    z-index: 99999;
    overflow: hidden;
  }
  .add-card-form {
    padding: 20px;
  }
  .card-title {
    height: 40px;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    color: #333;
    font-weight: 600;
    background-color: #ddd;
  }
  .handle-btn {
    margin-left: 48px;
  }
</style>
