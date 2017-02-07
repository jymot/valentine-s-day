<template>
    <div class="photo-wall">

      <el-row :gutter="20">
        <el-col :span="6">
          <photo image="../assets/logo.png" />
        </el-col>
        <el-col :span="6" :offset="6">
          <transition name="slide-fade-right">
            <div v-if="show" class="grid-content">

              <el-card :body-style="{ padding: '0px' }">
                <img src="../assets/logo.png" class="image">
              </el-card>

            </div>
          </transition>
        </el-col>
      </el-row>

      <el-row :gutter="20" >
        <el-col :span="6" :offset="6">
          <div class="grid-content">

            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/logo.png" class="image">
            </el-card>

          </div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="grid-content">

            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/logo.png" class="image">
            </el-card>

          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" justify="center" align="middle">
        <el-col :xs="{span:6, offset:12}" :sm="{span:6, offset:6}">
          <div class="grid-content">

            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/logo.png" class="image">
            </el-card>

          </div>
        </el-col>
      </el-row>

    </div>
</template>
<script>
    import Photo from './Photo'

    export default{
        data(){
            return{
              show: false
            }
        },

        created(){

        },

        mounted(){
          this.show = true
        },

        components: {
          Photo
        }
    }
</script>
<style scoped>
  .photo-wall {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media(min-width: 768px){
    .photo-wall {
      margin-left: 100px;
      margin-right: 100px;
    }
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }


  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

</style>

