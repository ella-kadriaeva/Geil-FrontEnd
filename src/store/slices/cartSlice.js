import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartData: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initDataFromLocalStorage: (state) => {
      const cart = localStorage.getItem('cart');
      if (cart) {
        state.cartData = JSON.parse(cart);
      }
    },

    addToCart: (state, action) => {
      let foundProduct = state.cartData.find(
        (product) => product.id === action.payload.id
      );

      if (foundProduct) {
        state.cartData = state.cartData.map((product) =>
          product.id === action.payload.id
            ? { ...product, count: product.count + 1 }
            : product
        );
      } else {
        state.cartData.push({ ...action.payload, count: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(state.cartData));
    },

    removeAllProductbyIdFromCart: (state, action) => {
      let foundProduct = state.cartData.find(
        (product) => product.id === action.payload
      );

      if (foundProduct) {
        state.cartData = state.cartData
          .map((product) => {
            if (product.id === action.payload) {
              product.count = 0;

              if (product.count === 0) {
                return null;
              }
            }
            return product;
          })
          .filter((product) => product);
      }

      localStorage.setItem('cart', JSON.stringify(state.cartData));
    },
  },
});

export const {
  addToCart,
  initDataFromLocalStorage,
  removeAllProductbyIdFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
