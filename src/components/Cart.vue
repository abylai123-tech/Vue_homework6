<template>
    <div>
      <h2>Cart</h2>
      <p v-if="cartItems.length === 0">Cart is empty</p>
      <div v-else>
        <p>Items in your shopping cart:</p>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const cartItems = ref([]); 
  
 
  </script>
  