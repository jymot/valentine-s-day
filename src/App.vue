<template>
  <div id="app"
       @touchstart="startDrag"
       @mouseup="endDrag"
       @mousemove="onDrag"
       @touchmove="onDrag"
       @touchend="endDrag">

    <!--<audio src="http://zw.wangchao.im/static/bgmusic.mp3" autoplay="true" loop="true"></audio>-->

    <!--<el-carousel indicator-position="outside" class="my-carousel">-->
      <!--<el-carousel-item v-for="item in 6">-->
        <!--<img src="./assets/logo.png">-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->

    <!--<photo-wall ref="photowall"/>-->
    <!--<router-view></router-view>-->

    <div class="section1">
      <div class="section overlay">
        <img src="./assets/hvd.svg" width="85%" alt="" class="svg"/>
      </div>
    </div>

    <love />
  </div>
</template>

<script>

//import PhotoWall from './components/PhotoWall'
import Love from './components/Love'

export default {
  name: 'app',
  data () {
    return {
    };
  },
  created () {

  },
  mounted () {
    //window.onscroll = this.onScroll
  },
  methods: {
      startDrag(event){
        //this.$refs.photowall.startDrag(event, this.$el.getBoundingClientRect())
      },

      onDrag(event){
        //this.$refs.photowall.onDrag(event, this.$el.getBoundingClientRect())
      },

      endDrag(event){
        //this.$refs.photowall.endDrag(event, this.$el.getBoundingClientRect())
      },

      onScroll(){
        //this.$refs.photowall.onScroll(this.$el.getBoundingClientRect())
      }

  },
  components: {
    //'photo-wall': PhotoWall
    Love
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0px !important;
  padding: 0px;
  background-color: rgba(196,1,9,1);
  background-image: -webkit-radial-gradient(center ellipse, rgba(196,1,9,0) 0%, rgba(118,0,0,1) 100%);
  background-image: radial-gradient(ellipse at center, rgba(196,1,9,0) 0%, rgba(118,0,0,1) 100%);
  background-attachment: fixed;
  background-repeat: repeat-y;
  background-position: top;
  background-size: 100% auto;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.section {
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
}

.section1 {
  height: 100%;
  background-image: url(./assets/bg.jpg);
  background-position: center;
  background-size: cover;
}
.overlay {
  background-color: transparent;
  width: 100%;/*background-image: linear-gradient(rgba(0,0,0,0), rgba(118,0,0,1));
  background-image: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(118,0,0,1) 100%);*/
}

.svg {
  animation-name: container;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: running;
  /* Firefox: */
  -moz-animation-name: container;
  -moz-animation-duration: 5s;
  -moz-animation-timing-function: linear;
  -moz-animation-iteration-count: infinite;
  -moz-animation-direction: alternate;
  -moz-animation-play-state: running;
  /* Safari 和 Chrome: */
  -webkit-animation-name: container;
  -webkit-animation-duration: 5s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  -webkit-animation-play-state: running;
  /* Opera: */
  -o-animation-name: container;
  -o-animation-duration: 5s;
  -o-animation-timing-function: linear;
  -o-animation-iteration-count: infinite;
  -o-animation-direction: alternate;
  -o-animation-play-state: running;
}

@-moz-keyframes container{
  0%,
  100%,
  20%,
  50%,
  80% {
  transition-timing-function: cubic-bezier(0.215,.61,.355,1);
  transform: translate3d(0,0,0);
  }
  40%,
  43%{
  transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
  transform: translate3d(0,-30px,0);
  }
  70%{
  transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
  transform: translate3d(0,-15px,0);
  }
  90%{
  transform: translate3d(0,-4px,0);
  }
}
@-webkit-keyframes container{
  0%,
  100%,
  20%,
  50%,
  80% {
  transition-timing-function: cubic-bezier(0.215,.61,.355,1);
  transform: translate3d(0,0,0);
  }
  40%,
  43%{
  transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
  transform: translate3d(0,-30px,0);
  }
  70%{
  transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
  transform: translate3d(0,-15px,0);
  }
  90%{
  transform: translate3d(0,-4px,0);
  }
}
@-o-keyframes container{
  0%,
  100%,
  20%,
  50%,
  80% {
  transition-timing-function: cubic-bezier(0.215,.61,.355,1);
  transform: translate3d(0,0,0);
  }
  40%,
  43%{
  transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
  transform: translate3d(0,-30px,0);
  }
  70%{
  transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
  transform: translate3d(0,-15px,0);
  }
  90%{
  transform: translate3d(0,-4px,0);
  }
}
@keyframes container{
  0%,
  100%,
  20%,
  50%,
  80% {
  transition-timing-function: cubic-bezier(0.215,.61,.355,1);
  transform: translate3d(0,0,0);
  }
  40%,
  43%{
  transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
  transform: translate3d(0,-30px,0);
  }
  70%{
  transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
  transform: translate3d(0,-15px,0);
  }
  90%{
  transform: translate3d(0,-4px,0);
  }
}

.my-carousel {
  margin-top: 10px;
  margin-bottom:20px;
}

@media(min-width: 768px){
  .my-carousel {
    margin-left:150px;
    margin-right:150px;
    margin-bottom:50px;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-carousel__item--card.is-active {
  -moz-box-shadow: 0px 3px 5px#999;
  -webkit-box-shadow: 0px 3px 5px#999;
  box-shadow: 0px 3px 5px #999;
}

</style>
