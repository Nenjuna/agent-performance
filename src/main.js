import Vue from "vue";
import firebase from "firebase";
//import firestore from 'firebase/firestore'
import "./firebasejs/firebaseinit";
import App from "./App.vue";
import router from "./router";
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;

let app

firebase.auth().onAuthStateChanged(user =>
{
  if (!app)
  {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");

  }
}
)




