<template>
  <div id="test">
    <div class="container">
      <form class="card">
        <div class="card-content">
          <div class="row">
            <div class="col 13 s6">
              <Tester/>
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
      <table>
      <thead>
        <tr>
          <th>Contacts</th>
          <th>Comments</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="guide in guider" :key="guide.id">
          <td>{{guide.contactid}}</td>
          <td>{{guide.notes}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import db from "../firebasejs/firebaseinit";
import Tester from "@/components/Tester";
import { Promise } from 'q';

//import moment from "moment";
export default {
  name: "test",
  components: {
    Tester
  },
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
      team: [],
      userTeam: "",
      userManager: "",
      test: [],
      guider: []
    };
  },
  methods: {
    add(e) {
      const lead = this.teamLead;
      console.log(lead);
      db.collection("testcollection")
        .doc(this.teamLead)
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
            .doc(this.teamLead)
            .set({
              lead: lead
            })
            .then(() => {
            })
            .catch(error => {
              console.log(error.message);
            });
          
        })
        .catch(err => {
          error_message = err.message;
        });

      (this.contactid = ""), (this.notes = "");
      e.preventDefault();
    }
    // leadFunction(e){
    //   console.log(this.Email)
    //   e.preventDefault();
    // },

    // callBack(){
    //   console.log("some")
      
    // }
  },
  created() {
    let self = this  
        db.collection("users").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
            if (doc.exists) {
              self.teamLead = doc.data().teamLead
              console.log(self.teamLead)

        db.collection("testcollection").doc(self.teamLead).collection(self.date).onSnapshot(res=>{
      res.docChanges().forEach(change => {
        let changes = change.doc;
          self.guider.push({
                ...change.doc.data(),
                id: change.doc.id,
                type: change.type
              });

});
});
             
            }        
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

    self.date = formatDate(new Date());
  }
};
</script>