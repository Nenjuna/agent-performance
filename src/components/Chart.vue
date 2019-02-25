<template>
  <div class="container">
    <h5>This is some data</h5>
    <div class="row">
      <div class="col s4">
        <div class="card">
          <div class="card-cotent">
            <canvas id="planet-chart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";
import planetChartData from "../charts/chart-data.js";

//import Bar from "../charts/testchart.js";
export default {
  name: "chart",

  data() {
    return {
      planetChartData: planetChartData

      //ctx: document.getElementById(myChart)
    };
  },
  mounted() {
    this.renderCharts("planet-chart", this.planetChartData);
  },

  methods: {
    renderCharts(chartId, chartData) {
      console.log(chartId);
      console.log(chartData.type);
      console.log(chartData.options);
      console.log(chartData.data);

      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  }
};
</script>
<style>
.card-content {
  padding: 0;
  display: block;
  margin: 0;
}
</style>
