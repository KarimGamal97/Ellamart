<template>
  <div class="drawer">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="370"
      class="pr-1 cart-drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="pl-0 pr-2 d-flex justify-space-between align-center w-100"
          style="font-size: 16px; font-weight: bold"
        >
          Shopping Cart <v-icon @click="drawer = false">mdi-close</v-icon>
        </v-card-title>
        <v-card-text class="px-0 py-0" style="color: #6f6f6f"
          >{{ cartItems.length }} Items</v-card-text
        >
        <v-card-text
          class="px-0"
          style="color: #6f6f6f"
          v-if="!cartItems.length"
          >Free Shipping for All Orders over $10000,00</v-card-text
        >
        <v-card-text
          class="px-0 text-center"
          style="color: #6f6f6f"
          v-if="!cartItems.length"
          >Your Cart is Empty</v-card-text
        >
        <div
          class="bar-parent mt-3 position-relative mr-2"
          v-if="cartItems.length"
        >
          <svg
            class="icon-shipping-truck"
            viewBox="0 0 40.55 24"
            width="30"
            :fill="
              parseInt((calcTotalPrice / 10000) * 100) < 50
                ? '#F44336'
                : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                  parseInt((calcTotalPrice / 10000) * 100) < 100
                ? '#ff9800'
                : '#4CAF50'
            "
            :style="`position: absolute;
              bottom: 100%;
              z-index: 1;
              left: calc(${
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              transition: all 0.3s ease-in-out;`"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="truck-body"
                  d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                ></path>
                <path
                  class="truck-body"
                  d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                ></path>
                <path
                  class="wheel"
                  fill="#FFF"
                  d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                ></path>
                <path
                  class="wheel"
                  fill="#FFF"
                  d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                ></path>
              </g>
            </g>
          </svg>
          <v-progress-linear
            :color="
              parseInt((calcTotalPrice / 10000) * 100) < 50
                ? '#F44336'
                : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                  parseInt((calcTotalPrice / 10000) * 100) < 100
                ? '#ff9800'
                : '#4CAF50'
            "
            height="10"
            :model-value="
              parseInt((calcTotalPrice / 10000) * 100) <= 100
                ? parseInt((calcTotalPrice / 10000) * 100)
                : 100
            "
            striped="true"
          ></v-progress-linear>
          <v-card-text
            class="px-0 pt-2"
            style="color: #6f6f6f"
            v-if="cartItems.length && 10000 - calcTotalPrice <= 0"
            >Your order now with
            <span style="color: red">Free Shipping</span></v-card-text
          >
          <v-card-text
            class="px-0 pt-2"
            style="color: #6f6f6f"
            v-if="cartItems.length && 10000 - calcTotalPrice > 0"
            >Only ${{ 10000 - calcTotalPrice }} away from Free
            Shipping</v-card-text
          >
        </div>
        <v-card-actions v-if="!cartItems.length">
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border: 1px solid #333;
            "
            class="w-100"
            variant="outlined"
            density="compact"
            height="45"
            @click="drawer = false"
            >Continue Shopping</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        class="p-0 mt-5 items-card"
        elevation="0"
        v-if="cartItems.length"
        max-height="320"
        style="overflow-y: auto"
      >
        <v-container class="px-1">
          <v-row
            v-for="item in cartItems"
            :key="item.id"
            class="align-center mb-1"
          >
            <v-col cols="12" sm="5">
              <img :src="item.thumbnail" class="w-100" alt="" />
            </v-col>
            <v-col cols="12" sm="7">
              <v-card-title
                class="px-0"
                style="white-space: pre-wrap; font-size: 14px; line-height: 1.2"
              >
                {{ item.title }} Sample - {{ item.category }}
              </v-card-title>
              <v-card-text class="px-0 pb-0" style="color: #6f6f6f">
                Category: {{ item.category }}
              </v-card-text>
              <v-card-text class="px-0 pt-2 font-weight-bold">
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quantity
                }}
              </v-card-text>
              <div
                class="item-footer d-flex justify-space-between align-center"
              >
                <div
                  class="counter px-1 mt-3"
                  style="
                    border-radius: 30px;
                    width: fit-content;
                    border: 1px solid #333;
                  "
                >
                  <v-icon
                    @click="item.quantity > 1 ? item.quantity-- : false"
                    size="18"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    class="py-2 text-center"
                    style="
                      border: none;
                      outline: none;
                      width: 30px;
                      font-size: 12px;
                    "
                    v-model="item.quantity"
                    min="1"
                  />
                  <v-icon @click="item.quantity++" size="18">mdi-plus</v-icon>
                </div>
                <v-icon size="22" @click="deleteItem(item.id)"
                  >mdi-close</v-icon
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="p-0 mt-5" elevation="0" v-if="cartItems.length">
        <v-card-actions
          class="flex-column justify-center align-center"
          style="gap: 15px"
        >
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: #eee;
            "
            variant="elevated"
            density="compact"
            height="40"
            elevation="0"
            class="w-100"
            color="blue"
            @click="toCheckout"
            >Check Out</v-btn
          >
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: #eee;
            "
            variant="outlined"
            density="compact"
            height="40"
            class="w-100 mx-0"
            @click="$router.push({ name: 'cart_page' })"
            >View Cart</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";
export default {
  inject: ["Emitter"],
  props: {
    windowWidth: {
      type: Number,
    },
  },
  data() {
    return {
      drawer: true,
    };
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    calcTotalPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartItems",
      "deleteItem",
      "setToLocalStorage",
    ]),
    toCheckout() {
      this.setToLocalStorage();
      this.$router.push({ name: "check_out" });
    },
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
    this.getCartItems();
  },
};
</script>

<style lang="scss">
.items-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #6d6b6b;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: #eee;
  }
}

@media (max-width: 580px) {
  .drawer {
    .v-card-text {
      font-size: 12px;
    }
    button {
      height: 25px !important;
      font-size: 11px;
    }
  }
}
</style>
