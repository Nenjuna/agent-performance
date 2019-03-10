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
    <div class="chips">
      <div class="chip">
        <img src="../assets/image.jpg" alt="Contact Person">
        {{username}}
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import db from "@/firebasejs/firebaseinit";
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      userda: "",
      username: "",
      userid: "",
      teamLead: ""
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.userda = firebase.auth().currentUser.email;
      this.userid = firebase.auth().currentUser.uid;
      db.collection("users").onSnapshot(result => {
        result.docChanges().forEach(user => {
          let users = user.doc;
          if (user.doc.id == this.userid) {
            // console.log(users.data().firstName);
            this.username = users.data().firstName;
            this.teamLead = users.data().teamLead;
          }
        });
      });
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
  background: #00b0ff;
}
span {
  color: red;
}
</style>
