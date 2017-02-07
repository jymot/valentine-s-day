<template>
  <div id="app"
       @touchstart="startDrag"
       @mousemove="onDrag"
       @touchmove="onDrag">

    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <photo-wall/>

  </div>
</template>

<script>

import PhotoWall from './components/PhotoWall'

export default {
  name: 'app',
  data () {
    return {
      show: true
    };
  },
  created () {
    this.show = true
  },
  mounted () {

  },
  methods: {
    startDrag(){
    },

    onDrag(){
    }
  },
  components: {
    'photo-wall': PhotoWall
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0px;
  padding: 0px;
  background: url('./assets/bg.png');
  background-repeat: repeat-y;
  background-position: top;
  background-size: 100% auto;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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

</style>
