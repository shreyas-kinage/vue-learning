<template>
    <div class="row mt-5" v-if="product">
        <div class="col-4">
            <img :src="product.thumbnailUrl" class="w-100" alt="Image here"/>
        </div>
        <div class="col-8">
            <h1>{{ cardTitle }}</h1>
            <h4>${{ product.id * 23 / 20 }}</h4>
            <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
            <input type="text" class="text-center col-1 mr-2 p-1" />
            <button class="btn btn-primary">Add to cart</button>

            <p class="mt-4">
                {{ product.title }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Product-View',
  props: ['id', 'cardTitle'],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch('getProductById', this.id);
  },
};

</script>

<style>
</style>
