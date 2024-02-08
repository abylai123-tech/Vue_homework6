import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Gallery from '../components/Gallery.vue';
import Cart from '../components/Cart.vue';
import Contacts from '../components/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: Gallery },
  { path: '/cart', component: Cart },
  { path: '/contacts', component: Contacts }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
