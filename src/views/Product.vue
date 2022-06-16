<template>
    <div class="row mt-5 justify-content-center" v-if="product">
        <div class="col-3">
            <img :src="product.thumbnailUrl" class="w-100" alt="Image here"/>
        </div>
        <div class="col-8 text-left my-auto">
            <h1>{{ cardTitle }}</h1>
            <h4>${{ product.price }}</h4>
            <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
            <input type="text" value="1" class="text-center col-1 mr-2 p-1" />
            Quantity
            <br />
            <button class="btn btn-primary mt-2" @click="addToCart()">Add to cart</button>
            <h3 class="mt-4 heading">Description</h3>
            <p>
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
  methods: {
    addToCart() {
      this.$store.dispatch('allToCart', {
        product: this.product,
        quantity: 1,
      });
    },
  },
};

</script>

<style>
</style>
