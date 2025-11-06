<script setup>
import { RouterLink } from 'vue-router';
import UserLayout from '@/layouts/UserLayout.vue';
import Close from '@/components/icon/Close.vue';

import { useUserCartStore } from '@/stores/user/cart';

const cartStore = useUserCartStore();

const changeQuantity = (event, index) => {
  const newQuantity = parseInt(event.target.value);
  cartStore.updateQuantity(index, Quantity);
};

</script>


<template>
  <UserLayout>
    <h1 class="text-xl font-bold m-4">Shopping Cart </h1>
    <div class="flex">
      <div class="flex-auto w-64 bg-base-200 p-4">
        <div v-if="cartStore.items.length === 0">
          Cart is empty
        </div>
        <div v-else class="flex" v-for="(item, index) in cartStore.items">
          <div class="flex-1">
            <img :src="item.imageUrl" class="w-full p-5" />
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div class="relative grid grid-cols-2">
                <div>
                  <div><b>{{ item.name }}</b></div>
                  <div>{{ item.about }}</div>
                  <div>{{ item.price }}</div>
                </div>
                <div>
                  <select v-model="item.quantity" @change="changeQuantity($event,index )" class="select w-1/2 p-1">
                    <option v-for="quantity in [1, 2, 3, 4, 5]">
                      {{ quantity }}
                    </option>
                  </select>
                </div>
                <div @click="cartStore.removeItemInCart(index)" class="w-5 absolute top-0 right-0 cursor-pointer">
                  <Close></Close>
                </div>
              </div>
              <div><b>In stock</b></div>
            </div>
          </div>
        </div>
      </div>


      <div class="flex-auto w-32 bg-base-200 p-4">
        <div class="text-xl font-bold">
          Summary
        </div>
        <div class="mt-4 divide-y divide-amber-500">
          <div class="flex justify-between py-2">
            <div> ราคาสั่งซื้อ </div>
            <div> {{ cartStore.summaryPrice }} </div>
          </div>
          <div class="flex justify-between py-2">
            <div> ค่าส่ง </div>
            <div> 10 </div>
          </div>
          <div class="flex justify-between py-2">
            <div> รายการทั้งหมด </div>
            <div> {{ cartStore.summaryPrice }} </div>
          </div>
            <RouterLink :to="{ name: 'checkout'}" class="btn btn-primary w-full mt-4"> 
              ชำระเงิน
            </RouterLink>
        </div>
      </div>


    </div>



  </UserLayout>
</template>