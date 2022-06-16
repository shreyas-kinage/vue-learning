/* eslint-disable import/prefer-default-export */
export const cartItemCount = (state) => state.cart.length;

export const cartTotalPrice = (state) => {
  let total = 0;
  state.cart.forEach((item) => {
    total += item.product.price * item.quantity;
  });

  return total;
};
