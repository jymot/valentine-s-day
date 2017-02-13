<template>
    <div class="love-container">
      <div class="mask-container">
        <img src="../assets/head.png" width="50%"/>
      </div>
      <canvas style="background: rgba(255,255,155,0); "/>
    </div>
</template>
<style scoped>
.love-container{
  background-color: rgba(196, 1, 9, 1);
  background-image: -webkit-radial-gradient(center ellipse, rgba(196,1,9,0) 0%, rgba(118,0,0,1) 100%);
  background-image: radial-gradient(ellipse at center, rgba(196,1,9,0) 0%, rgba(118,0,0,1) 100%);
  height: 100%;
}
.mask-container{
  height: 100%;
  width:100%;
  position:absolute;
  display:flex;
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
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        mounted(){
          this.showLove()
        },
        methods: {
          showLove(){
            let x, y, H, S, B, f, u, q, D, E, G, T, N;
            let canvas = document.getElementsByTagName('canvas')[0];
            let ctx = canvas.getContext('2d');
            let e = [];
            let h = [];
            let O = canvas.width = window.innerWidth;
            let Q = canvas.height = window.innerHeight;
            let v = 32;
            let M = Math;
            let R = M.random;
            let C = M.cos;
            let Y = 6.3;
            for (let i = 0; i < Y; i += 0.2){
              h.push([O / 2 + 180 * M.pow(M.sin(i), 3), Q / 2 + 10 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);
            }
            for (let i = 0; i < v;) {
              x = R() * O;
              y = R() * Q;
              H = 80 * (i / v) + 280;
              S = 40 * R() + 60;
              B = 60 * R() + 20;
              f = [];
              for (let k = 0; k < v;)f[k++] = {
                x: x,
                y: y,
                X: 0,
                Y: 0,
                R: 1 - k / v + 1,
                S: R() + 1,
                q: ~~(R() * v),
                D: 2 * (i % 2) - 1,
                F: 0.2 * R() + 0.7,
                f: "hsla(" + ~~H + "," + ~~S + "%," + ~~B + "%,.1)"
              };
              e[i++] = f
            }
            function _(d) {
              ctx.fillStyle = d.f;
              ctx.beginPath();
              ctx.arc(d.x, d.y, d.R, 0, Y, 1);
              ctx.closePath();
              ctx.fill()
            }

            //setInterval
            setInterval(()=>{
              ctx.save()
              ctx.fillStyle = "rgba(118, 0, 0, 0.2)";
              ctx.fillRect(0, 0, O, Q);
              for (let i = v; i--;) {
                f = e[i];
                u = f[0];
                q = h[u.q];
                D = u.x - q[0];
                E = u.y - q[1];
                G = M.sqrt(D * D + E * E);
                10 > G && (0.95 < R() ? u.q = ~~(R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
                u.X += -D / G * u.S;
                u.Y += -E / G * u.S;
                u.x += u.X;
                u.y += u.Y;
                _(u);
                u.X *= u.F;
                u.Y *= u.F;
                for (let k = 0; k < v - 1;){
                  T = f[k], N = f[++k], N.x -= 0.7 * (N.x - T.x), N.y -= 0.7 * (N.y - T.y), _(N)
                }
              }
              ctx.restore()
            }, 25);
          }
        },
        components:{
        }
    }
</script>
