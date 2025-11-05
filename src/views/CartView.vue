<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import Close from '@/components/icon/Close.vue';

</script>


<template>
  <UserLayout>
    <h1 class="text-xl font-bold m-4">Shopping Cart </h1>

    <div class="flex">
      <div class="flex-auto w-64 bg-base-200 p-4">
        <div class="flex" v-for="item in [1,2,3,4,5]">
          <div class="flex-1">
            <img src="https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg" class="w-full p-5" />
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div class="relative grid grid-cols-2">
                <div>
                  <div><b>Product Name</b></div>
                  <div>GGGG</div>
                  <div>$999</div>
                </div>
                <div>
                  <select class="select w-1/2 p-1">
                    <option v-for="quantity in [1,2,3,4,5]">
                      {{ quantity }}
                    </option>
                  </select>
                </div>
                <div class="w-5 absolute top-0 right-0 cursor-pointer">
                  <Close></Close>
                </div>
              </div>
              <div><b>In stock</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-32 bg-base-200 p-4">
        <b> Summary </b>
      </div>
    </div>

  </UserLayout>
</template>