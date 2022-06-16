/* eslint-disable no-param-reassign */
export const randomPriceGenerator = (min = 1, max = 150) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* eslint-disable no-param-reassign */
export const randomPriceArrayGenerator = (length = 10, max = 150) => {
  const randomPriceArray = [...new Array(length)].map(() => Math.round(Math.random() * max));
  return randomPriceArray;
};
