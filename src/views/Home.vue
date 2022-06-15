<template>
  <h2>Home</h2>
  <product-list />
</template>

<script>
import ProductList from '../components/ProductList.vue';

export default {
  /* eslint-disable vue/multi-word-component-names */
  name: 'Home-View',
  components: {
    ProductList,
  },
};
</script>

<style>

</style>
