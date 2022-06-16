<template>
  <div class="col-3 my-3" style="min-width: 230px">
    <div class="card h-100 text-justify">
      <img
        :src="product.thumbnailUrl"
        class="card-img-top w-100"
        alt="Image here"
      />
      <div class="card-body pb-0">
        <h5 class="card-title">
          <router-link :to="{
              name: 'Product-View',
              params: {id: product.id, cardTitle: cardTitle}
            }">
            {{ cardTitle }}
          </router-link>
        </h5>
        <strong>${{ product.price }}</strong>
        <p class="card-text pb-3">{{ product.title }}</p>
      </div>
      <div class="d-flex justify-content-center align-items-center mb-2">
        <button class="btn btn-secondary" @click="addToCart()">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data() {
    return {
      cardTitle: '',
    };
  },
  mounted() {
    /* eslint-disable prefer-destructuring */
    this.cardTitle = this.product.title.split(' ', 1)[0];
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
