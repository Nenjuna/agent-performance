<template>
  <div id="nav">
    <nav>
      <div class="nav-wrapper">
        <strong>
          <i class="material-icons left">group</i>
          <router-link to="/">
            <span class="grey-text text-lighten-5">PERFORMANCE PORTAL</span>
          </router-link>
        </strong>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li v-if="isLoggedIn">
            <span class="email black-text">{{userda}}</span>
          </li>
          <li v-if="isLoggedIn">
            <span class="email black-text">{{userid}}</span>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/add">Add Data</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/signup">Register</router-link>
          </li>
          <li v-if="isLoggedIn">
            <button v-on:click="logout" class="btn black">Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      userda: "",

      userid: ""
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.userda = firebase.auth().currentUser.email;
      this.userid = firebase.auth().currentUser.uid;
    }
  },

  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style>
.nav-wrapper {
  padding-left: 20px;
  padding-right: 20px;
  background: #0964aa;
}
span {
  color: red;
}
</style>
