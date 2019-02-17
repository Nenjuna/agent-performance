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
          <div class="col s12">
            <div class="input-field inline">
              <input type="text" id="contactid" v-model="contactid">
              <label for="contactid">Contact ID</label>
              <button
                v-on:click="add"
                class="waves-effect waves-light btn-large light-blue lighten-2 white-text"
              >Add</button>
            </div>
          </div>

          <label>Select:</label>
          <select>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </select>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col 13 s4">
        <div class="card">
          <div class="card-content">
            <div class="card-metric">
              <div class="card-metrics card-metrics-static">
                <div class="card-metric-title">Overall Chart</div>
                <div class="card-metric-value">This is some data that is sourced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col 13 s4">
        <div class="card">
          <div class="card-content">
            <div class="card-metric">
              <div class="card-metrics card-metrics-static">
                <div class="card-metric-title">Overall Chart</div>
                <div class="card-metric-value">This is some data that is sourced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col 13 s4">
        <div class="card">
          <div class="card-content">
            <div class="card-metric">
              <div class="card-metrics card-metrics-static">
                <div class="card-metric-title">Overall Chart</div>
                <div class="card-metric-value">This is some data that is sourced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {
      contactid: ""
    };
  },
  methods: {
    add(e) {
      console.log("Button pressed");
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
