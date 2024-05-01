import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsCategory from "../views/ProductsCategory.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/:category/:title",
    name: "products_category",
    component: ProductsCategory,
  },
  {
    path: "/products/product-details/:productId",
    name: "product_details",
    component: ProductDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
