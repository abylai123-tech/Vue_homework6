<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
* {
  margin: 0; padding: 0;
  box-sizing: border-box;
}
</style>
