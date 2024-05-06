<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card class="text-center py-5">
        <div class="text-center">
          <v-icon
            size="75"
            color="green"
            style="
              background-color: #fff;
              color: green;
              width: 90px;
              height: 90px;
              border-radius: 50%;
              font-size: 70px;
              border: 1px solid green;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title style="font-size: 26px; font-weight: bold"
          >Order Placed Successfully</v-card-title
        >
        <v-card-text style="color: #8b8b8b">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit
          quaerat dolor voluptate! Vitae autem nulla in, fuga iste quibusdam
          ullam, est mollitia voluptatum ducimus aperiam amet, aliquid
          praesentium consectetur?
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn variant="elevated" color="blue" @click="resetData"
            >Got It</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    popup: {
      type: Boolean,
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetItems"]),
    resetData() {
      this.resetItems();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("close_popup");
        }, 200);
      }
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>

<style></style>
