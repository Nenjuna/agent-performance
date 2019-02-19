<template>
  <div id="login">
    <div class="container center">
      <div class="row">
        <div class="col s6 center">
          <form class="card center">
            <div class="card-content hoverable center">
              <strong>
                <span class="card-title">Login</span>
              </strong>
              <div class="input-field">
                <input type="text" id="email" v-model="email">
                <label for="email">User Email</label>
              </div>
              <div class="input-field">
                <input type="password" id="password" v-model="password">
                <label for="password">Password</label>
              </div>
              <div class="input-field center">
                <button
                  v-on:click="login"
                  class="waves-effect waves-light btn-large light-blue lighten-2 white-text"
                >Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import firebaseApp from "@/firebasejs/firebaseinit";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert(`You have been succesfully logged in with ${user.user.email}`);
          this.$router.push("/");
        })
        .catch(err => {
          alert(err.message);
        });

      e.preventDefault();
    }
  }
};
</script>

<style>
</style>

