<template>
  <div id="pagenotfound">
    No Page found
    <label>Browser Select</label>
    <select class="browser-default">
      <option value disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <select class="icons">
      <option value disabled selected>Choose your option</option>
      <option value data-icon="images/sample-1.jpg" class="left">example 1</option>
      <option value data-icon="images/office.jpg" class="left">example 2</option>
      <option value data-icon="images/yuna.jpg" class="left">example 3</option>
    </select>
    <label>Images in select</label>
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
  data() {
    return {};
  }
};
</script>

