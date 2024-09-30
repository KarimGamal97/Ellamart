<template>
  <div class="product-details">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="w-100"
            alt=""
            height="500"
            v-if="!loading"
          />
          <v-skelton-loader
            v-if="loading"
            type="image,image,image"
          ></v-skelton-loader>
          <v-tabs center-active height="180" v-model="tab" class="mt-10">
            <v-tab
              v-for="(img, i) in singleProduct.images"
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
              style="font-size: 20px; font-weight: bold"
            >
              ({{ singleProduct.title }}) Sample -
              {{ singleProduct.category }} For Sale
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increments="true"
                readonly="true"
                color="#FFC50F"
                size="small"
                density="compact"
              ></v-rating>
              <span class="mt-1">Stock : {{ singleProduct.stock }}</span>
            </div>
            <v-card-text class="px-0">
              {{ singleProduct.description }}
            </v-card-text>
            <v-card-text class="px-0 pt-0">
              Brand : {{ singleProduct.brand }}
            </v-card-text>
            <v-card-text class="px-0 pt-0">
              Availability :
              {{ singleProduct.stock > 0 ? "In Stock" : "Out of Stock" }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <del>${{ singleProduct.price }}</del> From
              <span style="color: #e10600; font-weight: 900; font-size: 16px"
                >${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
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
                    SingleProduct.price -
                      SingleProduct.price *
                        (SingleProduct.discountPercentage / 100)
                  ) * quantity
                }}
              </v-card-text>
              <v-card-actions class="mt-7 w-100 px-0">
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
                  @click="addToCart(singleProduct)"
                  :loading="btnLoading"
                  >Add to Cart</v-btn
                >
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { cartStore } from "@/stores/cart";
export default {
  inject: ["Emitter"],
  data() {
    return {
      loading: false,
      quantity: 1,
      tab: "",
      product: {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        ],
      },
      btnLoading: false,
      components: { VSkeletonLoader },
    };
  },
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
      }, 1000);
    },
  },
  async beforeMount() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.loading = false;
  },
};
</script>

<style></style>
