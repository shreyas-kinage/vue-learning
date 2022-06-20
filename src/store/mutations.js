/* eslint-disable import/prefer-default-export */
export const GetAllProducts = (state, products) => {
  state.products = products;
};

/* eslint-disable import/prefer-default-export */
export const GetProductById = (state, product) => {
  state.product = product;
};

export const AddToCart = (state, { product, quantity }) => {
  const productInCart = state.cart.find((item) => item.product.id === product.id);

  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }

  state.cart.push({ product, quantity });
};

export const RemoveFromProduct = (state, product) => {
  state.cart = state.cart.filter((item) => item.product.id !== product.id);
};

export const ClearCart = (state) => {
  state.cart = [];
};
