<template>
  <div class="quick-view mt-10">
    <v-dialog v-model="dialog" max-width="900" max-height="500">
      <v-icon
        style="
          position: absolute;
          right: -20px;
          top: -20px;
          background-color: #333;
          color: #ccc;
          cursor: pointer;
          font-size: 18px;
          padding: 13px;
          z-index: 10;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content_card">
        <v-container fluid style="background-color: #fff" class="pt-10 px-10">
          <v-row>
            <v-col cols="12" md="7">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100"
                alt=""
                height="350"
                v-if="!loading"
              />
              <v-skelton-loader
                v-if="loading"
                type="image,image,image"
              ></v-skelton-loader>
              <v-tabs center-active height="180" v-model="tab" class="mt-10">
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-10"
                  :value="img"
                >
                  <img :src="img" alt="" width="100" height="100" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" md="5" class="pt-0 pl-6 mt-8 mt-md-0">
              <v-skelton-loader
                v-if="loading"
                type="article,article,article"
              ></v-skelton-loader>

              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 20px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                >
                  ({{ product.title }}) Sample - {{ product.category }} For Sale
                </v-card-title>
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments="true"
                    readonly="true"
                    color="#FFC50F"
                    size="small"
                    density="compact"
                  ></v-rating>
                  <span class="mt-1">Stock : {{ product.stock }}</span>
                </div>
                <v-card-text class="px-0">
                  {{ product.description }}
                </v-card-text>
                <v-card-text class="px-0 pt-0">
                  Brand : {{ product.brand }}
                </v-card-text>
                <v-card-text class="px-0 pt-0">
                  Availability :
                  {{ product.stock > 0 ? "In Stock" : "Out of Stock" }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <span
                    style="color: #e10600; font-weight: 900; font-size: 16px"
                    >${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  Quantity
                  <div
                    class="counter px-1 mt-3"
                    style="
                      border-radius: 30px;
                      width: fit-content;
                      border: 1px solid #333;
                    "
                  >
                    <v-icon @click="quantity > 1 ? quantity-- : false" size="22"
                      >mdi-minus</v-icon
                    >
                    <input
                      type="number"
                      class="py-2 text-center"
                      style="
                        border: none;
                        outline: none;
                        width: 80px;
                        font-size: 14px;
                      "
                      v-model="quantity"
                      min="1"
                    />
                    <v-icon @click="quantity++" size="22">mdi-plus</v-icon>
                  </div>
                  <v-card-text class="pl-0">
                    Subtotal: ${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      ) * quantity
                    }}
                  </v-card-text>
                  <v-card-actions class="mt-2 w-100 px-0">
                    <v-btn
                      variant="outlined"
                      style="
                        text-transform: none;
                        border-radius: 30px;
                        background-color: #333;
                        color: #fff;
                      "
                      class="w-75"
                      density="compact"
                      height="50"
                      @click="addToCart(product)"
                      :loading="btnLoading"
                      >Add to Cart</v-btn
                    >
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  inject: ["Emitter"],
  data() {
    return {
      dialog: false,
      loading: false,
      quantity: 1,
      tab: "",
      product: "",
      btnLoading: false,
      components: { VSkeletonLoader },
    };
  },
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
  },
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>

<style lang="scss">
.content_card {
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
</style>
