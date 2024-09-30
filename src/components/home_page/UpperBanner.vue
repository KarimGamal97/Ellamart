<template>
  <div class="banner">
    <div class="parent">
      <img src="../../assets/images/banner-bg.jpg" alt="" />
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.banner .parent {
  height: 400px;
  position: relative;
}
.banner .parent img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner .parent .content {
  color: #fff;
  padding: 0 0 0 40px;
  position: absolute;
  left: 40px;
  top: 40px;
  width: 55%;
}
.banner .parent .content h3 {
  font-size: 46px;
  font-weight: 900;
}
@media (max-width: 990px) {
  .banner .parent .content {
    width: 50%;
    left: 0;
  }
}
@media (max-width: 990px) {
  .banner .parent .content h3 {
    font-size: 36px;
  }
}

@media (max-width: 767px) {
  .banner .parent {
    height: 320px;
  }
}
@media (max-width: 767px) {
  .banner .parent .content {
    width: 50%;
    left: 0;
    padding-left: 20px;
  }
}
@media (max-width: 767px) {
  .banner .parent .content h3 {
    font-size: 30px;
  }
}
@media (max-width: 767px) {
  .banner .parent .content .hint {
    font-size: 14px;
  }
}
/* .. */

@media (max-width: 580px) {
  .banner .parent {
    height: 250px;
  }
}
@media (max-width: 767px) {
  .banner .parent .content {
    padding-left: 20px;
    padding-top: 20px;
    left: 0;
    width: 80%;
  }
}
@media (max-width: 767px) {
  .banner .parent .content h3 {
    font-size: 24px;
  }
}
@media (max-width: 767px) {
  .banner .parent .content .hint {
    font-size: 12px;
  }
}
@media (max-width: 767px) {
  .banner .parent .content .shop-btn {
    font-size: 11px !important;
    height: 30px !important;
    width: 130px !important;
  }
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
