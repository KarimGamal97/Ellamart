<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="content">
              <h3><span>Huge Savings</span> on UHD Televisions</h3>
              <p class="hint">Sale up 70% off on selected items *</p>
              <v-btn
                density="compact"
                height="45"
                width="170"
                variant="outlined"
                class="shop-btn"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.banner .parent {
  height: 400px;
  background-image: url(../../assets/images/banner-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
}
.banner .parent .content {
  color: #fff;
  padding: 75px 0 0 100px;
}
.banner .parent .content h3 {
  font-size: 46px;
  font-weight: 900;
}
.banner .parent .content h3 span {
  color: #10ffda;
}
.banner .parent .content .hint {
  margin: 20px 0 40px;
}

.banner .parent .content .shop-btn {
  border-radius: 30px;
  text-transform: none;
}
</style>
