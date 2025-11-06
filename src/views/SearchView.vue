<script setup>
import { ref, onMounted, computed, watch} from 'vue';
import { useRoute, useRouter } from 'vue-router';
  
import UserLayout from '@/layouts/UserLayout.vue';
import Product from '@/components/Product.vue';

import { useProductStore } from '@/stores/user/product'
import { useUserCartStore } from '@/stores/user/cart'; 
 
const productStore = useProductStore()
const cartStore = useUserCartStore()

const route = useRoute();
const router = useRouter();
const searchText = ref('')

onMounted(() => {
  if (route.query.q) {
    searchText.value = route.query.q 
  }
});

watch (() => route.query.q, (newSearchText) => {
  searchText.value = newSearchText 
}, { immediate: true })
 
const filterProducts = computed(() => {
  return productStore.filterProducts(searchText.value)
})

const addToCart = (product) => {
  cartStore.addToCart(product)
  router.push({ name: 'cart' })
} 

</script>

<template>
  <UserLayout>
    <div class="3xl">Search: <b> {{ searchText }} </b> </div>
    <Product
      :products="filterProducts"
      :addToCart="addToCart"
    ></Product>
  </UserLayout>
 </template>