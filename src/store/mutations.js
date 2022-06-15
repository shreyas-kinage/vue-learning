/* eslint-disable import/prefer-default-export */
export const GetAllProducts = (state, products) => {
  state.products = products;
};

/* eslint-disable import/prefer-default-export */
export const GetProductById = (state, product) => {
  state.product = product;
};
