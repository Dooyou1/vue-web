<script setup>
import { onMounted } from 'vue';
import {  RouterView } from 'vue-router'
import { useUserCartStore } from '@/stores/user/cart';

const cartStore = useUserCartStore();

onMounted(() => {
   cartStore.loadCart();
});
</script>

<template>
  <RouterView/>
</template>

