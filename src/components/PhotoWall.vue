<template>
    <div class="photo-wall">

      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="{span:6}" :sm="{span:3}">
          <photo image="../assets/logo.png" animation="top"/>
        </el-col>
        <el-col :xs="{span:6, offset:8}" :sm="{span:3, offset:8}">
          <photo image="../assets/logo.png" animation="right"/>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" justify="start">
        <el-col :xs="{span:6, offset:5}" :sm="{span:3, offset:7}">
          <photo image="../assets/logo.png" animation="left"/>
        </el-col>
        <el-col :xs="{span:6, offset:3}" :sm="{span:3, offset:4}">
          <photo image="../assets/logo.png" animation="bottom"/>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="{span:6, offset:1}" :sm="{span:3, offset:2}">
          <photo image="../assets/logo.png" animation="rotate"/>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" justify="start">
        <el-col :xs="{span:6, offset:1}" :sm="{span:3, offset:6}">
          <photo image="../assets/logo.png" animation="left"/>
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

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

</style>

