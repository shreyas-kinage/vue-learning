<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; left:auto; right: 0px;"
    aria-labelledby="dropdownMenuButton"
  >
    <div v-if="cart.length > 0" class="p-2">
      <div v-for="item in cart" :key="item.id">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column">
            <strong>{{ item.product.title.split(' ', 1)[0] }}</strong>
            {{ item.quantity }} x ${{ item.product.price }}
          </div>
          <div class="d-flex align-items-center">
            <a href="#" class="badge badge-secondary">remove</a>
          </div>
        </div>
      <hr class="my-3" />
      </div>
    </div>
    <div v-else class="text-center d-flex align-items-center justify-content-center p-2">
      <p class="text-muted m-0">Nothing in cart</p>
    </div>
    <div class="d-flex justify-content-between px-2">
        <span>Total: ${{ cartTotalPrice }}</span>
        <a href="#">Clear Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniCart',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
};
</script>

<style>
</style>
