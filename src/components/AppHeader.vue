/* eslint-disable */
<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">ProductHouse</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-open-close"
        aria-controls="nav-open-close"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container">
        <div class="collapse navbar-collapse" id="nav-open-close">
          <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link active">Home</router-link>
            <a class="nav-link" aria-current="page" href="#">Product</a>
            <!-- <router-link to="/product" class="nav-item nav-link">Product</router-link> -->

            <div>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ cartItemCount }} Cart
                </button>
                <!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
                <div @click="$event.stopPropagation()">
                  <mini-cart></mini-cart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MiniCart from './MiniCart.vue';

export default {
  name: 'AppHeader',
  components: {
    MiniCart,
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>

<style>
</style>
