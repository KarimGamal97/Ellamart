<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer :windowWidth="windowWidth" />
      <MenuDrawer :windowWidth="windowWidth" />
      <v-main
        :style="`padding-top:${
          $route.name == 'check_out'
            ? '0px'
            : windowWidth <= 990
            ? '60px'
            : '150px'
        }`"
      >
        <slot></slot>
      </v-main>
      <AppNav v-show="$route.name != 'check_out' && !showFixed" />
      <ResponsiveNav v-show="windowWidth > 990 && $route.name != 'check_out'" />
      <Fixed-nav
        v-show="$route.name != 'check_out' && !showFixed && windowWidth > 990"
      />
      <AppFooter v-show="$route.name != 'check_out'" />
    </v-layout>
  </div>
</template>

<script>
import AppFooter from "./global/AppFooter.vue";
import FixedNav from "./global/FixedNav.vue";
import AppNav from "./global/AppNav.vue";
import CartDrawer from "./global/CartDrawer.vue";
import ResponsiveNav from "./global/ResponsiveNav.vue";
import MenuDrawer from "./global/MenuDrawer.vue";
export default {
  data() {
    return {
      drawer: true,
      showFixed: false,
      windowWidth: 0,
    };
  },
  components: {
    AppFooter,
    FixedNav,
    AppNav,
    CartDrawer,
    ResponsiveNav,
    MenuDrawer,
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
    window.onscroll = () => {
      if (window.scrollY >= 200) {
        this.showFixed = true;
      } else {
        this.showFixed = false;
      }
    };
  },
};
</script>

<style></style>
