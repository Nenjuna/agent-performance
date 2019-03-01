<template>
  <div id="test">
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
                  <select class="browser-default" v-model="selected">
                    <option value disabled selected>Choose your option</option>
                    <option value="resolved">Resolved</option>
                    <option value="followup">Follow up</option>
                  </select>
                </div>
                <div class="input-field inline">
                  <button
                    v-on:click="add"
                    class="waves-effect waves-light btn-large light-blue lighten-2 white-text"
                  >Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import db from "../firebasejs/firebaseinit";
//import moment from "moment";
export default {
  name: "test",
  data() {
    return {
      date: null,
      contactid: "",
      selected: "",
      notes: "",
      userid: "",
      error_message: "",
      uid: firebase.auth().currentUser.uid,
      userEmail: "",
      userTeam: "",
      userManager: ""
    };
  },
  methods: {
    add(e) {
      const lead = this.userEmail;
      console.log(lead);
      db.collection("testcollection")
        .doc(this.userEmail)
        .collection(this.date)
        .add({
          contactid: this.contactid,
          notes: this.notes,
          userid: firebase.auth().currentUser.uid,
          resolved: this.selected
        })
        .then(() => {
          console.log("Document Written");
          db.collection("testcollection")
            .doc(this.userEmail)
            .set({
              lead: lead,
              notes: this.notes,
              date: this.date
            })
            .then(() => {
              console.log(this.notes);
              console.log("Duplication preventer");
            })
            .catch(error => {
              console.log(error.message);
            });
          // console.log(firebase.auth().currentUser.uid);
        })
        .catch(err => {
          error_message = err.message;
        });

      (this.contactid = ""), (this.notes = "");
      e.preventDefault();
    }
  },
  created() {
    db.collection("users").onSnapshot(users => {
      users.docChanges().forEach(user => {
        // console.log(user.doc.id);
        if (this.uid == user.doc.id) {
          this.userEmail = user.doc.data().Team_Lead;
          // console.log(this.userEmail);
        }
      });
    });

    db.collection("testcollection")
      .doc("${userEmail}")
      .collection("27-Feb-2019")
      .onSnapshot(result => {
        result.docChanges().forEach(responses => {
          console.log(responses.doc.data().contactid);
        });
      });

    function formatDate(date) {
      var monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + "-" + monthNames[monthIndex] + "-" + year;
    }

    this.date = formatDate(new Date());
  }
};
</script>