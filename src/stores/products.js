import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    mobilePhones: [],
    fragrances: [],
    skincare: [],
    categoryProducts: [],
    singleProduct: "",
    categories: [
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Sunglasses",
        route: "sunglasses",
      },
      {
        title: "Mens-Watches",
        route: "mens-watches",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.skincare = res.data.products.filter(
            (el) => el.category === "skincare"
          );
          this.flashDeals = res.data.products.slice(0, 8);
          this.mobilePhones = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => (this.singleProduct = res.data));
    },
  },
});
