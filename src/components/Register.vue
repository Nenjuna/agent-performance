<template>
  <div id="register">
    <div class="container">
      <div class="row center">
        <form class="card center col s6 hoverable center">
          <div class="card-content center">
            <strong>
              <span class="card-title">Register</span>
            </strong>
            <div class="input-field">
              <input type="text" id="email" v-model="email">
              <label for="email">Agent Email:</label>
            </div>
            <div class="input-field">
              <input type="password" id="password" v-model="password">
              <label for="password">Password:</label>
            </div>
            <div class="input-field">
              <input type="text" id="firstname" v-model="firstName">
              <label for="firstname">First Name:</label>
            </div>
            <div class="input-field">
              <input type="text" id="lastname" v-model="lastName">
              <label for="lastname">Last Name:</label>
            </div>
            <div class="input-field">
              <select class="browser-default" v-model="selectTeam">
                <option value disabled selected>Choose your Team</option>
                <option value="Vinothini">Vinothini</option>
                <option value="Azhar">Azhar</option>
              </select>
            </div>
            <div class="input-field">
              <select class="browser-default" v-model="selectManager">
                <option value disabled selected>Choose your Manager</option>
                <option value="Madhu">Madhu Priya</option>
                <option value="Cliff">Cliff</option>
              </select>
            </div>
            <div class="input-field center">
              <button
                v-on:click="register"
                class="waves-effect waves-light btn-large light-blue lighten-2 white-text"
              >Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import firebaseApp from "@/firebasejs/firebaseinit";
import db from "@/firebasejs/firebaseinit";

//import db from "firebase/firestore";
export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      selectTeam: "",
      selectManager: ""
    };
  },
  methods: {
    register(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(resp => {
          console.log("created");
          return db
            .collection("users")
            .doc(resp.user.uid)
            .set({
              firstName: this.firstName,
              lastName: this.lastName,
              teamLead: this.selectTeam,
              teamManager: this.selectManager
            });
        })
        .catch(err => {
          console.log(err.message);
        });

      e.preventDefault();
      this.$router.push("/");
    }
  }
};
</script>
<style>
</style>
