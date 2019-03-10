<template>
  <div id="main">
    <div class="col 12">
      <h2>Dashboard</h2>
    </div>

    <div class="container">
      <form class="card">
        <div class="card-content">
          <div class="row">
            <div class="col 13 s6">
              <p>
                <span>{{error_message}}</span>
              </p>
              <div class="input-field inline">
                <input type="text" id="contactid" v-model="contactid">
                <label for="contactid">Contact ID</label>
              </div>
              <div class="input-field inline">
                <input type="text" id="notes" v-model="notes">
                <label for="notes">Notes</label>
              </div>
              <div class="col 13 s6">
                <div class="input-field">
                  <select class="browser-default">
                    <option value disabled selected>Choose your option</option>
                    <option value="resolved">Resolved</option>
                    <option value="followup">Follow up</option>
                  </select>
                </div>
                <div class="input-field inline">
                  <button
                    v-on:click="adding"
                    class="waves-effect waves-light btn-large light-blue lighten-2 white-text"
                  >Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-content">
          <Pending/>
        </div>
      </div>
    </div>
    <AgentChart/>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../firebasejs/firebaseinit";

import AgentChart from "@/components/AgentChart";
import Pending from "@/components/Pending";
export default {
  name: "Main",
  components: {
    AgentChart,
    Pending
  },
  data() {
    return {
      contactid: "",
      notes: "",
      userid: "",
      error_message: ""
    };
  },
  methods: {
    adding(e) {
      db.collection("contacts")
        .add({
          contactid: this.contactid,
          notes: this.notes,
          userid: firebase.auth().currentUser.uid
        })
        .then(() => {
          console.log("Document Written");
          console.log(firebase.auth().currentUser.uid);
        })
        .catch(err => {
          error_message = err.message;
        });
      (this.contactid = ""), (this.notes = " ");

      e.preventDefault();
    }
  }
};
</script>
<style>
.card-metric-value {
  font-size: 24px;
}
.chips {
  padding-left: 20px;
  padding-top: 20px;
  border: none;
}
h2 {
  margin-left: 20px;
}
</style>
