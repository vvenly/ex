// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

// import echarts from 'echarts'    
// Vue.prototype.$echarts = echarts
// 需要注意下使用的时候要放在mounted中，如果报错  Error in mounted hook: "TypeError: Cannot read property 'getAttribute' of undefined" 
// 加在 this.$nextTick 即可

import { mavonEditor } from "mavon-editor"
import "mavon-editor/dist/css/index.css"

import '../src/assets/css/main.css';
import '../src/assets/css/font-awesome.css';

Vue.prototype.axios = axios;

Vue.config.productionTip = false
Vue.component("mavon-editor", mavonEditor);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  mavonEditor,
  router,
  components: { App },
  template: '<App/>',
})