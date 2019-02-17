<template>
  <div id="main">
    <div class="container">
      <div class="col 12">
        <h2>Dashboard</h2>
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
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {};
  }
};
</script>
<style>
.card-metric-value {
  font-size: 24px;
}
</style>
