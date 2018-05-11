<template>
    <div v-if="stepone == 'two'">
      <h2 style="font-weight: 100;font-size: 22px;">第二步：填写产品介绍信息</h2>
      <el-form label-width="68px" ref="form" :model="form">
        <div class="two-title">
          基本介绍
        </div>
        <div class="form-box-2">
          <el-form-item label="房屋户型">
            <el-input class="input_address" v-model="form.num1.house_type1" placeholder=""></el-input><span class="address-label">室</span>
            <el-input class="input_address" v-model="form.num1.house_type2" placeholder=""></el-input><span class="address-label">厅</span>
            <el-input class="input_address" v-model="form.num1.house_type3" placeholder=""></el-input><span class="address-label">卫</span>
          </el-form-item>
          <el-form-item label="总面积">
            <el-input class="input_address" v-model="form.num1.space" placeholder=""></el-input><span class="address-label">m</span>
          </el-form-item>
          <el-form-item label="楼层">
            <el-input class="input_address" v-model="form.num1.floor" placeholder=""></el-input><span class="address-label">所在楼层</span>
            <el-input class="input_address" v-model="form.num1.all_floor" placeholder=""></el-input><span class="address-label">总共楼层</span>
          </el-form-item>
          <el-form-item label="朝向">
            <el-input v-model="form.num1.direction" class="input_address"></el-input>
          </el-form-item>
        </div>

        <div class="two-title">
          图片信息
        </div>
        <div ref="form" :model="form" label-width="120px" class="form-box-3">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">卧室</el-menu-item>
            <el-menu-item index="2">客厅</el-menu-item>
            <el-menu-item index="3">卫生间</el-menu-item>
            <el-menu-item index="4">厨房</el-menu-item>
            <el-menu-item index="5">餐厅</el-menu-item>
            <el-menu-item index="6">户型图</el-menu-item>
            <el-menu-item index="7">房本</el-menu-item>
          </el-menu>
          <div class="line">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div><div class="tips-feature"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>若房源没有相应空间图片，不用上传。文件大小在10M内</span></div>
          <div class="tips-feature"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>房本信息不会展示给租客，但作为保证房源真实性，必须上传，否则可能无法通过审核</span></div>
        </div>

        <div class="two-title">
          特色及设施
        </div>
        <div class="form-box-3">
          <el-form-item label="产品特色">
            <el-checkbox v-model="form.num3.f_chk1" label="首次出租" border></el-checkbox>
            <el-checkbox v-model="form.num3.f_chk2" label="电梯房" border></el-checkbox>
            <el-checkbox v-model="form.num3.f_chk3" label="新小区" border></el-checkbox>
            <el-checkbox v-model="form.num3.f_chk4" label="大社区" border></el-checkbox>
            <el-checkbox v-model="form.num3.f_chk5" label="可带宠物入住" border></el-checkbox>
          </el-form-item>
          <div class="tips-feature"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>我们建议按照房源的特色进行选择最有特色的项，如果没有可以不选择，最多选择4项</span></div>
          <el-form-item label="服务设施">
            <div class="server-box">
              <el-checkbox v-model="form.num3.s_chk1" label="WIFI" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk2" label="暖气" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk3" label="燃气" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk4" label="空调" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk5" label="洗衣机" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk6" label="厨房" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk7" label="阳台" border class="server-item"></el-checkbox><br />
              <el-checkbox v-model="form.num3.s_chk8" label="书桌" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk9" label="冰箱" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk10" label="电脑" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk11" label="地暖" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk12" label="沐浴" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk13" label="电子锁" border class="server-item"></el-checkbox>
              <el-checkbox v-model="form.num3.s_chk14" label="电梯" border class="server-item"></el-checkbox>
            </div>
          </el-form-item>
        </div>
        <div class="two-title">
          位置及小区信息
        </div>
        <div class="gis-box">
          <div class="gis-item"><i class="el-icon-location-outline"></i>{{ form.num4.address }}</div>
          <div id="map_container" tabindex="0"></div>
          <div class ='panel'>
            <div id = 'map-message'></div>
          </div>
          <div class="clear-box"></div>
          <div class="gis-item">小区信息</div>
          <div class="gis-item">小区性质： <span>{{ form.num4.properties }}</span> &emsp;&emsp;&emsp;建筑类型： <span>{{ form.num4.type }}</span></div>
          <div class="gis-item">建筑年代： <span>{{ form.num4.date }}</span> &emsp;&emsp;&emsp;物业费： <span>{{ form.num4.Property }}</span></div>
          <div class="gis-item">绿化率： <span>{{ form.num4.green }}</span> &emsp;&emsp;&emsp;容积率： <span>{{ form.num4.volume }}</span></div>
          <div class="tips-feature gis-item"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i>若小区信息有误，可以尝试上报给我们小区信息有误</span></div>
        </div>
        <el-form-item style="text-align: center">
          <el-button size="medium" class="submitRoomBtn" type="primary" @click="goBackStep"  style="margin-left: 52px">上一步</el-button>
          <el-button size="medium" class="submitRoomBtn" type="primary" @click="onSubmit" style="margin-left: 20px">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import AMap from 'AMap'
  export default {
    name: 'two-product',
    props: ['stepone'],
    data () {
      return {
        form: {
          num1: {
            house_type1: '',
            house_type2: '',
            house_type3: '',
            space: '',
            floor: '',
            all_floor: '',
            direction: ''
          },
          num2: {
          },
          num3: {
            f_chk1: '',
            f_chk2: '',
            f_chk3: '',
            f_chk4: '',
            f_chk5: '',
            s_chk1: '',
            s_chk2: '',
            s_chk3: '',
            s_chk4: '',
            s_chk5: '',
            s_chk6: '',
            s_chk7: '',
            s_chk8: '',
            s_chk9: '',
            s_chk10: '',
            s_chk11: '',
            s_chk12: '',
            s_chk13: '',
            s_chk14: ''
          },
          num4: {
            address: '',
            properties: '',
            type: '',
            date: '',
            Property: '',
            green: '',
            volume: '',
            newInfo: ''
          }
        },
        activeIndex: '1',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      }
    },
    methods: {
      onSubmit () {
        var datas = this.form
        this.$store.step = 'three'
        this.$emit('listindatastwo', this.$store.step)
        console.log(datas)
      },
      goBackStep () {
        this.$store.step = 'one'
        this.$emit('listindatastwo', this.$store.step)
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      handleExceed (files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove (file, fileList) {
        // return this.$confirm(`确定移除 ${ file.name }？`);
      },
      renderMap () {
        // var oneData = this.$store.oneData
        // var address = oneData.eare[0] + '省' + oneData.eare[1] + '市' + oneData.eare[2] + '区' + oneData.name
        var map = new AMap.Map('map_container', {
          resizeEnable: true,
          zoom: 13,
          center: [106.554865, 29.555792]
        })
        AMap.plugin('AMap.Geocoder', function () {
          var geocoder = new AMap.Geocoder({
            city: '023'
          })
          var marker = new AMap.Marker({
            map: map,
            bubble: true
          })
          // geocoder.getLocation(address, function (status, result) {
          //   console.log(status, result)
          //   if (status === 'complete' && result.info === 'OK') {
          //     this.form.num4 = {
          //
          //     }
          //   } else {
          //     console.log(result)
          //   }
          // })
          var message = document.getElementById('map-message')
          map.on('click', function (e) {
            marker.setPosition(e.lnglat)
            geocoder.getAddress(e.lnglat, function (status, result) {
              if (status === 'complete') {
                console.log(result)
                message.innerHTML = ''
              } else {
                message.innerHTML = '无法获取地址'
              }
            })
          })
        })
      }
    },
    watch: {
      stepone () {
        var oneData = this.$store.oneData
        if (this.stepone === 'two') {
          this.$nextTick(function () {
            this.renderMap()
          })
          console.log(this.$store.oneData)
        }
      }
    }
  }
</script>

<style scoped>
  .form-box-2 {
    padding: 50px 100px;
    background-color: #fff;
    margin: 0 20px 20px;
    border-radius: 4px;
  }
  .form-box-3 {
    padding: 20px 100px;
    background-color: #fff;
    margin: 0 20px 20px;
    border-radius: 4px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .two-title {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    margin: 0 20px;
    border-bottom: 2px solid #ddd;
    text-align: left;
    padding-left: 20px;
  }
  .tips-feature {
    height: 40px;
  }
  .tips-feature span {
    background-color: #ddd;
    max-width: 540px;
    float: left;
  }
  .server-item {
    margin-bottom: 10px;
  }
  .submitRoomBtn {
    width: 200px;
    margin-left: -48px;
  }
  .gis-box {
    margin: 20px;
    background-color: #fff;
    padding-bottom: 30px;
  }
  #map_container {
    height: 300px;
    width: 600px;
    text-align: left;
    padding: 20px 100px;
    float: left;
    margin-left: 100px;
  }
  .clear-box {
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
  }
  .panel {
    background-color: #ddf;
    color: #333;
    border: 1px solid silver;
    box-shadow: 3px 4px 3px 0px silver;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    overflow: hidden;
    line-height: 20px;
  }
  .gis-item {
    text-align: left;
    padding: 20px 100px;
  }
</style>
