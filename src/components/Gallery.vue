<script setup>
import ImageCard from './ImageCard.vue';
import { ref } from 'vue';

const addToCart = (imageSrc) => {
  console.log('Added to cart:', imageSrc);
};
</script>

<template>
    <div>
      <h2>Gallery</h2>
      <ImageCard v-for="(image, index) in images" :key="index" :imageSrc="image" @add-to-cart="addToCart" />
    </div>
</template>
