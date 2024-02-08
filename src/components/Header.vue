<template>
    <header>
      <h1>Menu</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/contacts">Contacts</router-link>
    </header>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  