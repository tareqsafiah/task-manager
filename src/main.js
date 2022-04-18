import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import '@morioh/v-quill-editor/dist/editor.css';
import Editor from '@morioh/v-quill-editor'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import Vue from 'vue'
import { BootstrapVue} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// global register
Vue.use(Editor);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
/* add icons to the library */
library.add(faUserSecret)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
