<template>
    <div class="photo-wall"
         @touchstart="startDrag"
         @mousemove="onDrag"
         @touchmove="onDrag"
         @touchend="endDrag">

      <el-row :gutter="20" type="flex" justify="start">
        <el-col :xs="{span:8, offset:4}" :sm="{span:4, offset:8}">
          <photo image="../assets/logo.png" animation="top" ref="photo"/>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="{span:8, offset:8}" :sm="{span:4, offset:8}">
          <photo image="../assets/logo.png" animation="right" ref="photo1"/>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" justify="start">
        <el-col :xs="{span:8, offset:3}" :sm="{span:4, offset:7}">
          <photo image="../assets/logo.png" animation="left" ref="photo2"/>
        </el-col>
        <el-col :xs="{span:8, offset:4}" :sm="{span:4, offset:4}">
          <photo image="../assets/logo.png" animation="bottom" ref="photo3"/>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="{span:8, offset:1}" :sm="{span:4, offset:2}">
          <photo image="../assets/logo.png" animation="rotate" ref="photo4"/>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" justify="start">
        <el-col :xs="{span:8, offset:1}" :sm="{span:4, offset:6}">
          <photo image="../assets/logo.png" animation="left" ref="photo5"/>
        </el-col>
      </el-row>

    </div>
</template>
<script>
    import Photo from './Photo'

    export default{
        data(){
            return{
              startY: -1
            }
        },

        created(){

        },

        mounted(){
          this.screenHeight = window.innerHeight
          this.doAnim()
        },

        methods: {
          doAnim(){
            let tempHeight = this.screenHeight;
            let rect;
            for(let el in this.$refs){
              rect = this.$refs[el].$el.getBoundingClientRect()

              if (rect.top < (tempHeight - rect.height) && rect.top > 0){
                this.$refs[el].showAnim()
              } else {
                this.$refs[el].hideAnim()
              }
            }
             //this.$refs.test.showAnim()
             //console.log(this.$refs.photo.$el.getBoundingClientRect())
             //console.log(this.$refs.heihei)

          },
          startDrag(event){

          },

          onDrag(event){
            this.doAnim()
            //console.log('onDrag', event)
          },

          endDrag(event){
            //console.log('endDrag', event)
          }
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
    margin-bottom: 150px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media(min-width: 768px) {
   .el-row {
    margin-bottom: 200px;
   }
  }

  .el-col {
    border-radius: 4px;
  }

</style>

