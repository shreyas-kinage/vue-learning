<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('getAllProducts');
  },
};
</script>

<style>
</style>
