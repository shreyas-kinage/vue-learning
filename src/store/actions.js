import axios from 'axios';
/* eslint-disable import/prefer-default-export */
export const getAllProducts = ({ commit }) => {
  axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      let sliced = response.data;
      sliced = sliced.slice(0, 10);
      commit('GetAllProducts', sliced);
    });
};

export const getProductById = ({ commit }, productId) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/photos/${productId}`)
    .then((response) => {
      console.log(response.data);
      commit('GetProductById', response.data);
    });
};
