<template>
  <div id="add">
    <div class="container section">
      <div class="row">
        <div class="col s6">
          <form class="card">
            <div class="card-content hoverable">
              <span class="card-title">Add Data</span>
              <div class="input-field">
                <input type="text" id="name">
                <label for="name">Agent Name</label>
              </div>
              <div class="input-field">
                <input type="text" id="cph">
                <label for="cph">Agent CPH</label>
              </div>
              <div class="input-field">
                <input type="text" id="prr">
                <label for="prr">Agent PRR</label>
              </div>

              <div class="input-field center">
                <button v-on:click="add" class="waves-effect waves-light btn-large pink white-text">
                  Add Data
                  <i class="material-icons right">send</i>
                </button>
              </div>
              <div class="input-field center">
                <p class="red-text" id="error"></p>
              </div>
            </div>
          </form>
        </div>
        <div class="col s6 card hoverable">
          <table class="card-content highlight">
            <thead>
              <tr>
                <th>Agent Name</th>
                <th>CPH</th>
                <th>PRR</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(dart, index) in darts" :key="index">
                <td>{{dart.name}}</td>
                <td>{{dart.cph}}</td>
                <td>{{dart.prr}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Add",
  data() {
    return {
      darts: [
        { name: "Aswath", cph: 4.5, prr: 70 },
        { name: "Nirmal", cph: 9.9, prr: 200 },
        { name: "Nowshath", cph: 1.1, prr: 20 }
      ]
    };
  },
  methods: {
    add(e) {
      e.preventDefault();
    }
  }
};
</script>
<style>
</style>