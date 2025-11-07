<script setup>
import { onMounted } from 'vue';
import {  RouterView } from 'vue-router'
import { useUserCartStore } from '@/stores/user/cart';

import { useEventStore } from '@/stores/event'
const eventStore = useEventStore()

import Toast from '@/components/Toast.vue'
const cartStore = useUserCartStore();

onMounted(() => {
   cartStore.loadCart();
});
</script>

<template>
  <div>
  <Toast
      v-if="eventStore.alert"
      :status="eventStore.data.status"
      :message="eventStore.data.message"
    >
    </Toast>
    <RouterView/>
    </div>
</template>

