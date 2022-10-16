import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Service from './plugins/service';
import Toast from './plugins/toast';

import './css/index.css';

Vue.config.productionTip = false;

Vue.use(Service);
Vue.use(Toast);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
