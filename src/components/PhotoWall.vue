<template>
    <div class="photo-wall">

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
              lastY: -1,
              direction: 'none',
              lockScroll: true
            }
        },

        created(){

        },

        mounted(){
          this.screenHeight = window.innerHeight
          this.doAnim('up')
        },

        methods: {
          doAnim(direction){
            let tempHeight = this.screenHeight;
            let rect, top;
            for(let el in this.$refs){
              rect = this.$refs[el].$el.getBoundingClientRect()
              top = rect.top

              if (this.direction == 'down'){
                if (top > 0 - rect.height / 2 && top < tempHeight - rect.height / 2){
                  this.$refs[el].showAnim()
                } else if (top > (tempHeight - rect.height / 2)) {
                  this.$refs[el].hideAnim()
                }
              } else if (this.direction == "up"){
                if (top < tempHeight - rect.height / 2 && top > rect.height / 2){
                  this.$refs[el].showAnim()
                } else if (top < rect.height / 2){
                  this.$refs[el].hideAnim()
                }
              } else {
                if (top < tempHeight - rect.height && top > 0){
                  this.$refs[el].showAnim()
                } else if (top > (tempHeight - rect.height) || top <= 0) {
                  this.$refs[el].hideAnim()
                }
              }

            }
             //this.$refs.test.showAnim()
             //console.log(this.$refs.photo.$el.getBoundingClientRect())
             //console.log(this.$refs.heihei)

          },
          startDrag(event){
            this.lockScroll = true
            this.lastY = event.changedTouches[0].clientY
          },

          onDrag(event, rect){
            if(rect.top == 0){
              return
            }
            let currentY = event.changedTouches[0].clientY
            this.direction = (currentY - this.lastY) > 0 ? "down" : "up"
            this.lastY = currentY
            this.doAnim(this.direction)
            //console.log('onDrag', event)
          },

          endDrag(event, rect){
            this.lockScroll = false
            if(rect.top == 0){
              return
            }
            this.doAnim(this.direction)
            //console.log('endDrag', event)
            //console.log(this.$refs.photo5.$el.getBoundingClientRect().top)
          },

          onScroll(rect){
            if(this.lockScroll){
              return
            }
            this.doAnim(this.direction)
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
    margin-bottom: 100px;
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

