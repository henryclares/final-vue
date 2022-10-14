import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { VAppBar, VIcon, VDataTable } from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VAppBar,
    VIcon,
    VDataTable,
  },
});
// module.exports = {
//   head: [
//     ['link', {
//       rel: 'stylesheet',
//       href: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css`
//     }],
//     ['script', { src: `https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js` }],
//     ['script', { src: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js` }],
//   ]
// }
export default new Vuetify({});
