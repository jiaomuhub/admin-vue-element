<template>
 <div>
   <div class="page-header">
     <el-breadcrumb>
       <el-breadcrumb-item :to="{path: '/home'}">管理控制</el-breadcrumb-item>
       <el-breadcrumb-item>免租券管理</el-breadcrumb-item>
     </el-breadcrumb>
   </div>
   <div class="card-box">
     <el-button type="primary" @click="addCard">免租券使用录入</el-button>
   </div>
   <div class="card-box">
     <el-table
       :data="tableData"
       style="width: 100%">
       <el-table-column
         prop="num"
         label="免租劵序号">
       </el-table-column>
       <el-table-column
         prop="date"
         label="使用时间">
       </el-table-column>
       <el-table-column
         prop="address"
         label="使用产品">
       </el-table-column>
       <el-table-column
         prop="name"
         label="使用人">
       </el-table-column>
       <el-table-column
         prop="tel"
         label="联系方式">
       </el-table-column>
       <el-table-column
         prop="money"
         label="折扣金额">
       </el-table-column>
       <el-table-column
         label="操作"
         width="100">
         <template slot-scope="scope">
           <el-button @click="handleDetailClick()" type="text" size="small">查看详情</el-button>
         </template>
       </el-table-column>
     </el-table>
   </div>
   <add-card :isShowCard="showCard" v-on:listinAddCard="addCardChange"></add-card>
 </div>
</template>

<script>
  import addCard from '@/components/addCard'
  export default {
    name: 'card-manage',
    components: {
      addCard
    },
    data () {
      return {
        tableData: [{
          num: '11111111',
          date: '2016-05-02',
          address: '黄泥磅-紫荆商业广场 2-21-5',
          name: 'sdfsdf',
          tel: '11111111111',
          money: '3600',
          handle: '查看详情'
        }, {
          num: '11111111',
          date: '2016-05-02',
          address: '黄泥磅-紫荆商业广场 2-21-5',
          name: 'sdfsdf',
          tel: '11111111111',
          money: '3600',
          handle: '查看详情'
        }],
        showCard: false
      }
    },
    methods: {
      addCard () {
        this.showCard = true
      },
      handleDetailClick () {
        this.$router.push({path: '/cardDetail'})
      },
      addCardChange () {
        this.showCard = this.$store.showCard
      }
    }
  }
</script>

<style scoped>
.card-box {
  margin: 20px;
  padding: 20px;
  background-color: #fff;
}
</style>
