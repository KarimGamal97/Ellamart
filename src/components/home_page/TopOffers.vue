<template>
  <div class="top-offers py-9" style="background-color: #f5f5f5">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          class="py-0 px-3 pr-lg-6 mb-5 mb-sm-0"
          style="height: 260px"
        >
          <div class="parent">
            <img
              src="@/assets/images/playstations.webp"
              style="width: 100%; height: 100%"
              alt=""
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          class="py-0 px-3 pr-lg-6 mb-5 mb-sm-0"
          style="height: 260px"
        >
          <div class="parent">
            <img
              src="@/assets/images/headset.webp"
              style="width: 100%; height: 100%"
              alt=""
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          class="py-0 px-3 pr-lg-6 mb-5 mb-sm-0 mt-5 mt-lg-0"
          style="height: 260px"
        >
          <div class="parent">
            <img
              src="@/assets/images/chairs.webp"
              style="width: 100%; height: 100%"
              alt=""
            />
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-9">
        <v-col cols="12" sm="6" class="mt-5 px-3 pr-sm-5 py-0">
          <div class="parent">
            <img
              src="@/assets/images/iphones.webp"
              style="width: 100%; height: 100%"
              alt=""
            />
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="mt-5 pl-3 pl-sm-5 py-0">
          <div class="parent">
            <img
              src="@/assets/images/laptops.webp"
              style="width: 100%; height: 100%"
              alt=""
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.parent {
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  border-radius: 6px;
  transition: all 1s ease-in-out;
}
.parent img {
  transition: all 0.5s ease-in-out;
  height: 100%;
}
.parent img:hover {
  transform: scale(1.05);
}
</style>
