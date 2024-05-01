<template>
  <div class="home">
    <upper-banner />
    <the-features />
    <top-offers />
    <products-component
      :products="flashDeals"
      title="Flash Deals"
      titleColor="red"
    />
    <top-categories />
    <new-products :products="newProducts" />
    <quality-features />
    <products-component
      :products="mobilePhones"
      title="Top Mobile Phones"
      titleColor="red"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img
            src="@/assets/images/band-left-cover.webp"
            class="w-100 pr-5"
            alt=""
          />
        </v-col>
        <v-col cols="6">
          <img
            src="@/assets/images/band-right-cover.webp"
            class="w-100 pl-5"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
    <products-component
      :products="fragrances"
      title="Top Fragrances"
      titleColor="red"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <img src="@/assets/images/tv-banner.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
    <products-component
      :products="skincare"
      title="Top groceries"
      titleColor="red"
    />
    <why-shop />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import ProductsComponent from "@/components/home_page/ProductsSwiper.vue";
import TopCategories from "@/components/home_page/TopCategories.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import WhyShop from "@/components/home_page/WhyShop.vue";

import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShop,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "mobilePhones",
      "fragrances",
      "skincare",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
