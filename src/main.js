// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(ElementUI)

// const Foo = {
//   template: '<div>foo</div>',
//   mounted () {
//     console.log(this.$route)
//   }
// }
//
// const routes = [
//   {
//     path: "/foo/:id", component: Foo
//   }
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   routes
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
