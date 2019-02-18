import Vue from "vue";
//import firebase from "firebase";
//import firestore from 'firebase/firestore'
import firebaseApp from "@/firebasejs/firebaseinit";
import App from "./App.vue";
import router from "./router";
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;

// const config = {
//   apiKey: "AIzaSyC5Y8574x6RRTCYFOYUAP4ihdNX6o51__8",
//   authDomain: "performance-2354e.firebaseapp.com",
//   databaseURL: "https://performance-2354e.firebaseio.com",
//   projectId: "performance-2354e",
//   storageBucket: "performance-2354e.appspot.com",
//   messagingSenderId: "1083542124112"
// };

// firebase.initializeApp(config);

// var db = firebase.firestore();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
