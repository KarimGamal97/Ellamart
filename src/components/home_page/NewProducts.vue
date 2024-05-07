<template>
  <div class="new-products pt-12">
    <div class="title px-5 d-flex align-center justify-space-between">
      <h2
        style="
          font-weight: bold;
          color: #333;
          font-size: 30px;
          letter-spacing: -0.02em;
        "
      >
        New Products
      </h2>
      <router-link
        class="text-black"
        style="font-size: 14px"
        :to="{
          name: 'products_category',
          query: {
            title: categories[index].title,
            category: categories[index].route,
          },
        }"
        >Shop All</router-link
      >
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="7" v-if="!products.length" class="pt-15">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image,article,button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7" class="pt-15">
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-9 px-5"
            :autoplay="{ delay: 3000 }"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent position-relative"
                    style="height: 180px; overflow: hidden"
                  >
                    <img
                      :src="
                        showenItem[item.title]
                          ? showenItem[item.title]
                          : item.thumbnail
                      "
                      class="w-100"
                      :style="`height: 100%; transition: 0.5s all ease-in-out; scale:${
                        isHovering ? 1.05 : 1
                      }; cursor: pointer;`"
                      alt=""
                      v-bind="props"
                    />
                    <v-btn
                      density="compact"
                      width="90"
                      height="30"
                      variant="outlined"
                      class="quick-view-btn"
                      style="
                        background-color: #fff;
                        text-transform: none;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 30px;
                        font-size: 12px;
                        transition: all 0.2s ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(item)"
                    >
                      Quick View
                    </v-btn>
                  </div>
                </v-hover>
                <v-card-text class="pl-0 pb-1">
                  <v-card-text class="pl-0 pb-1">
                    ({{ item.title }})
                    {{
                      `(${item.title}) ${item.description}`.length <= 20
                        ? `(${item.title}) ${item.description}`
                        : `(${item.title}) ${item.description}`.substring(
                            0,
                            20
                          ) + " ..."
                    }}
                  </v-card-text>
                </v-card-text>
                <v-rating
                  v-model="item.rating"
                  half-increments="true"
                  readonly="true"
                  color="#FFC50F"
                  size="small"
                  density="compact"
                ></v-rating>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ item.price }}</del> From
                  <span
                    style="color: #e10600; font-weight: 900; font-size: 16px"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <v-btn-toggle v-model="showenItem[item.title]" mandatory
                  ><v-btn
                    v-for="(pic, i) in item.images"
                    :value="pic"
                    :key="i"
                    size="x-small"
                    rounded="xl"
                    :ripple="false"
                    ><img
                      :src="pic"
                      alt=""
                      width="30px"
                      height="30px"
                      style="
                        border-radius: 50%;
                        border: 1px solid #6e6e6e;
                      " /></v-btn
                ></v-btn-toggle>
                <div class="mt-5">
                  <v-btn
                    density="compact"
                    class="py-2 px-12"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                    @click="
                      $router.push({
                        name: 'product_details',
                        params: { productId: item.id },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </swiper-slide>
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="5">
          <img src="@/assets/images/vr-banner.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  inject: ["Emitter"],
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  props: {
    products: {
      type: Array,
    },
    routeCategory: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: { Swiper, SwiperSlide, VSkeletonLoader },
  data() {
    return {
      showenItem: {},
    };
  },
};
</script>

<style>
.img-parent:hover .quick-view-btn {
  opacity: 1 !important;
}
</style>
