<template>
    <div>
      <transition :name="animationDirection">
        <div v-if="show" class="grid-content">

          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/logo.png" class="image">
          </el-card>

        </div>
      </transition>
    </div>
</template>
<script>
    export default{
        data(){
          return{
              show: false
          }
        },

        computed: {
          imageSrc(){
            return "../assets/logo.png"
          },
          animationDirection(){
            let anim = this.animation || 'right'
            if(anim == 'rotate'){
               return 'rotate-fade'
            }
            return 'slide-fade-' + anim
          }
        },

        mounted(){
          this.show = true
        },

        props: [
          "animation",
          "image"
        ]
    }
</script>
<style scoped>
  .grid-content {
    min-height: 36px;
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

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .rotate-fade-enter-active,
  .slide-fade-left-enter-active,
  .slide-fade-right-enter-active,
  .slide-fade-top-enter-active,
  .slide-fade-bottom-enter-active {
    transition: all .8s ease;
  }
  .rotate-fade-leave-active,
  .slide-fade-left-leave-active,
  .slide-fade-right-leave-active,
  .slide-fade-top-leave-active,
  .slide-fade-bottom-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-left-enter,
  .slide-fade-left-leave-active {
    transform: translateX(-20px);
    opacity: 0;
  }
  .slide-fade-right-enter,
  .slide-fade-right-leave-active {
    transform: translateX(20px);
    opacity: 0;
  }
  .slide-fade-top-enter,
  .slide-fade-top-leave-active {
    transform: translateY(-20px);
    opacity: 0;
  }
  .slide-fade-bottom-enter,
  .slide-fade-bottom-leave-active {
    transform: translateY(20px);
    opacity: 0;
  }

  .rotate-fade-enter,
  .rotate-fade-leave-active {
    transform: rotate(100deg);
    opacity: 0;
  }

</style>
