import Vue from 'vue';
import vmA from './vmA';

import './index.scss';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component('my-component', vmA);

const routes = [
  {path: '/test', component: vmA}
];

const router = new VueRouter({
  routes
});


Vue.component('vmMain', {
  created () {
    console.log('test')
  }
})
var res = Vue.compile(`
  <div class="menu">
  your menu
  </div>
  <div class="router">
    <router-view></router-view>
  </div>
`)
export default new Vue({
  el: '#app',
  router,
  render: res.render,
  template: '<app/>',
  components: {vmMain}
});
