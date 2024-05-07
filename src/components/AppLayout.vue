<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <v-main
        :style="`padding-top:${$route.name == 'check_out' ? '0px' : '150px'}`"
      >
        <slot></slot>
      </v-main>
      <AppNav v-show="$route.name != 'check_out'" />
      <Fixed-nav v-show="$route.name != 'check_out'" />
      <AppFooter v-show="$route.name != 'check_out'" />
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
