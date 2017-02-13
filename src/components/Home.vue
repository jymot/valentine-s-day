<template>
    <div style="height: 100%">
      <div class="section section1">
        <div class="section overlay">
          <img class="hvd" src="../assets/hvd.svg" width="85%" alt="" id="hvd"/>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .section {
    background-color: rgba(196,1,9,1);
    height: 100%;
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
    background-image: -webkit-radial-gradient(center ellipse, rgba(196,1,9,0) 0%, rgba(118,0,0,1) 100%);
    background-image: radial-gradient(ellipse at center, rgba(196,1,9,0) 0%, rgba(118,0,0,1) 100%);
 }
 .section1 {
    background-image: url(../assets/bg.jpg);
    background-position: center;
    background-size: cover;
 }
 .overlay {
    background-color: transparent;
    width: 100%;/*background-image: linear-gradient(rgba(0,0,0,0), rgba(118,0,0,1));
    background-image: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(118,0,0,1) 100%);*/
 }
 body,
 div {
    box-sizing: border-box;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; /*纵向*/
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
            flex-shrink: 0;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start;
    border: 0 solid black;
    margin: 0;
    padding: 0;
 }
</style>
<script>
    export default{
        data(){
            return{

            }
        },

        components:{
        }
    }
</script>
