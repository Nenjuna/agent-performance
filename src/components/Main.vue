<template>
  <div id="main">
    <div class="chips">
      <div class="chip">
        <img src="../assets/image.jpg" alt="Contact Person">
        Jane Doe
      </div>
    </div>

    <div class="col 12">
      <h2>Dashboard</h2>
    </div>

    <div class="container">
      <form class="card">
        <div class="card-content">
          <div class="col s6">
            <div class="input-field inline">
              <input type="text" id="contactid" v-model="contactid">
              <label for="contactid">Contact ID</label>
            </div>
            <div class="input-field inline">
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
            <AgentChart/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebasejs/firebaseinit";
import AgentChart from "@/components/AgentChart";
export default {
  name: "Main",
  components: {
    AgentChart
  },
  data() {
    return {
      contactid: ""
    };
  },
  methods: {
    adding(e) {
      db.collection("contacts")
        .add({
          contactid: this.contactid
        })
        .then(() => {
          console.log("Document Written");
        })
        .catch(err => {
          console.log(err.message);
        });
      this.contactid = "";

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
