import { randomPriceArrayGenerator } from '@/utils';
import axios from 'axios';

// const randomPrice = randomPriceGenerator();
const randomPriceArray = randomPriceArrayGenerator();

/* eslint-disable import/prefer-default-export */
export const getAllProducts = ({ commit }) => {
  axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      let sliced = response.data;
      sliced = sliced.slice(0, 10);
      for (let i = 0; i < sliced.length; i += 1) {
        sliced[i] = { ...sliced[i], price: randomPriceArray[i] };
      }
      commit('GetAllProducts', sliced);
    });
};

export const getProductById = ({ commit }, productId) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/photos/${productId}`)
    .then((response) => {
      let newProduct = response.data;
      newProduct = { ...newProduct, price: randomPriceArray[productId - 1] };
      commit('GetProductById', newProduct);
    });
};

export const allToCart = ({ commit }, { product, quantity }) => {
  commit('AddToCart', { product, quantity });
};

export const removeProductFromCart = ({ commit }, product) => {
  commit('RemoveFromProduct', product);
};

export const clearCart = ({ commit }) => {
  commit('ClearCart');
};
