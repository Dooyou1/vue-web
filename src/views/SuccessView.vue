<script setup>
import { ref, onMounted } from 'vue';
import UserLayout from '@/layouts/UserLayout.vue';
import { useUserCartStore } from '@/stores/user/cart';

const CartStore = useUserCartStore();
const orderData = ref({})

onMounted(() => {
  CartStore.loadCheckout()
  if (CartStore.checkout.orderNumber) {
    orderData.value = CartStore.checkout
  }
})

</script>

<template>
  <UserLayout>
    <div class="max-w-2x1 mx-auto border border-base-200 shadow-xl p-8">
      <div>
        <div class="text-2xl fon-bold">Your order is successful!</div>
        <div>Hi {{ orderData.name }}</div>
        <div>เตรียมรอรับสินค้า</div>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-4 gap-2">
        <div>
          <div class="font-bold">Order data</div>
          <div>{{ orderData.createdDate }}</div>
        </div>
        <div>
          <div class="font-bold">Order number</div>
          <div>{{ orderData.orderNumber }}</div>
        </div>
        <div>
          <div class="font-bold">Payment method</div>
          <div>{{ orderData.paymentMethod }}</div>
        </div>
        <div>
          <div class="font-bold">Address</div>
          <div>{{ orderData.address }}</div>
        </div>
      </div>

      <div class="divider"></div>
      <div v-for="products in orderData.products" class="grid grid-cols-4 gap-2 mb-4">
        <div>
          <div>
            <img :src="products.imageUrl" class="w-30 h-30 object-covr"/>
          </div>
        </div>
        <div>
          <div>
            {{ products.name }}
          </div>
        </div>
        <div>
          <div>
            จำนวน: {{ products.quantity }}
          </div>
        </div>
        <div>
          <div>
            ราคารวม : {{ products.price * products.quantity }} บาท
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="divider"></div>
      <div class="divider"></div>
      <div>ขอบคุณที่มาซื้อ</div>
    </div>
  </UserLayout>
</template>