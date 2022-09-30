import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/store"
import BootstrapVue from "bootstrap-vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faLanguage,
  faClapperboard,
  faStarHalfStroke,
  faNetworkWired,
  faFilter,
} from "@fortawesome/free-solid-svg-icons"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/css/bootstrap.css"

library.add(
  faLanguage,
  faClapperboard,
  faStarHalfStroke,
  faNetworkWired,
  faFilter
)
Vue.use(BootstrapVue)
Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
