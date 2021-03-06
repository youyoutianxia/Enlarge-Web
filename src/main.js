// import '../theme/index.css'

import Vue from 'vue'
import App from './App.vue'
import { Button, Tree, Table, TableColumn, Dialog, Input, Loading, Upload } from 'element-ui';

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Tree);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Loading);
Vue.use(Upload);

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'images/png.png',
    loading:'images/png.png'
})

import {config} from "./config";
Vue.prototype.custom_config = config;

new Vue({
  render: h => h(App)
}).$mount('#app')
