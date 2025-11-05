<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import Product from '@/components/Product.vue';

import { useProductStore } from '@/stores/user/product'
const productStore = useProductStore()
</script>

<template>
  <UserLayout>
    <div class="hero bg-base-200 h-90">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in
          </p>
        </div>
      </div>
    </div>

    <!--สินค้า-->
    <Product :products="productStore.list"></Product>
  
  </UserLayout>
</template>