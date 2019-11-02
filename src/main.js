// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';

import "./assets/font_1488600_5iun71lr4ae/iconfont.css";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  ActionSheet
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(ActionSheet);

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
