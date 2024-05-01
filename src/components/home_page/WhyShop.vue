<template>
  <div class="shop-withus py-14">
    <div class="title text-center mb-5">
      <h2><span>Why Shop</span> With Us ?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/free-shipping.png" alt="" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              First order ships for free
            </v-card-title>
            <v-card-text class="pb-1" style="font-size: 15px">
              Lorem ipsum dolor sit amet
            </v-card-text>
            <a href="#" class="text-white">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Weekly Flash Sales
            </v-card-title>
            <v-card-text class="pb-1" style="font-size: 15px">
              Lorem ipsum dolor sit amet
            </v-card-text>
            <a href="#" class="text-white">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/discount.png" alt="" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Annual Payment Discount
            </v-card-title>
            <v-card-text class="pb-1" style="font-size: 15px">
              Lorem ipsum dolor sit amet
            </v-card-text>
            <a href="#" class="text-white">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/cash-back.png" alt="" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Cashback Reward Program
            </v-card-title>
            <v-card-text class="pb-1" style="font-size: 15px">
              Lorem ipsum dolor sit amet
            </v-card-text>
            <a href="#" class="text-white">Learn More</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.shop-withus {
  background-image: url(@/assets/images/why-shop-with-us-banner.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  h2 {
    color: #fff;
    font-size: 38px;
    font-weight: 800;
    span {
      color: #10ffda;
    }
  }
}
</style>
