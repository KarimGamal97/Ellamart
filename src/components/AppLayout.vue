<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <v-main style="padding-top: 155px">
        <slot></slot>
      </v-main>
      <AppNav />
      <Fixed-nav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppFooter from "./global/AppFooter.vue";
import FixedNav from "./global/FixedNav.vue";
import AppNav from "./global/AppNav.vue";
import CartDrawer from "./global/CartDrawer.vue";
export default {
  components: { AppFooter, FixedNav, AppNav, CartDrawer },
};
</script>

<style></style>
