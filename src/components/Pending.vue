<template>
  <div id="pending">
    <table>
      <thead>
        <tr>
          <th>Contacts</th>
          <th>Comments</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(guide, index) in guider" :key="index">
          <td>{{guide.contactid}}</td>
          <td>{{guide.notes}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import firebase from "firebase";
import db from "@/firebasejs/firebaseinit";
export default {
  name: "pending",
  data() {
    return {
      guider: []
    };
  },

  created() {
    //console.log(this.guider);
    db.collection("contacts")
      .get()
      .then(snapshot => {
        contacts(snapshot.docs);
      });
    const contacts = data => {
      for (let i = 0; i < data.length; i++) {
        const indi = data[i].data();
        //console.log(data[i].type);

        this.guider.push(indi);
      }
      db.collection("contacts").onSnapshot(result => {
        result.docChanges().forEach(change => {
          const docu = { ...change.doc.data(), id: change.doc.id };
          console.log(docu);
        });
        console.log(result.docChanges());
      });
      //   data.forEach(doc => {
      //     var docdata = null;
      //     docdata = doc.data();
      //     docdata.push(doc.data());
      //     console.log(docdata);

      //(doc.data());
      // const guide = doc.data();

      //this.guider = { ...doc.data() };
      //});
      //console.log(this.guider.contactid);
      //console.log(this.guider);
    };
  }
};
</script>

