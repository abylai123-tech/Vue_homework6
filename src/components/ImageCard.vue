<template>
    <div class="image-card">
      <img :src="imageSrc" alt="Image">
      <button @click="addToCart">Buy</button>
    </div>
  </template>
  
<script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    imageSrc: String
  });
  
  const emits = defineEmits(['add-to-cart']);
  
  const addToCart = () => {
    emits('add-to-cart', imageSrc);
  };
  </script>
  