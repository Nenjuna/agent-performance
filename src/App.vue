<template>
  <div id="app">
    <Navbar :key="$route.fullPath"/>
    <router-view/>
    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
<style>
</style>
