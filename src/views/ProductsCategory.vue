<template>
  <div class="products-category pt-4">
    <h1 class="text-center">{{ $route.query.title }}</h1>
    <v-container>
      <v-card elevation="0" class="pt-5">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader type="image,article,button"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
            class="px-10 px-sm-5 mt-8 mt-lg-0"
          >
            <v-lazy>
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
                  ({{ item.title }})
                  {{
                    item.description + " " + item.title.split(" ").length <= 5
                      ? item.description
                      : item.description
                          .split(" ")
                          .slice(0, 5 - item.title.split(" ").length)
                          .join(" ") + " ..."
                  }}
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
                <v-btn-toggle v-model="showenItem[item.title]"
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
                    width="180"
                    height="40"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                    @click="
                      $router.push({
                        name: 'product_details',
                        query: { productId: item.id },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  inject: ["Emitter"],
  data() {
    return {
      showenItem: {},
      loading: false,
    };
  },
  components: [VSkeletonLoader],
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      if (this.$route.name == "products_category") {
        document.documentElement.scrollTo(0, 0);
        this.loading = true;
        await this.getProductsByCategory(this.$route.query.category);
        this.loading = false;
      }
    },
  },
  async mounted() {
    if (!this.$route.query.category) {
      return this.$router.go(-1);
    }
    this.loading = true;
    await this.getProductsByCategory(this.$route.query.category);
    this.loading = false;
  },
};
</script>

<style>
.img-parent:hover .quick-view-btn {
  opacity: 1 !important;
}
</style>
