import { createSlice } from '@reduxjs/toolkit';

const getTotalCartCount = (cart) => {
  return cart.reduce((total, item) => total + (item.cartCount || 0), 0);
};
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
    increaseQuantity: (state, action) => {
      state.cartData = state.cartData.map((product) =>
        product.id === action.payload
          ? { ...product, count: (product.count || 0) + 1 }
          : product
      );
      localStorage.setItem('cart', JSON.stringify(state.cartData));
    },

    decreaseQuantity: (state, action) => {
      console.log('decr action payload', action.payload);
      state.cartData = state.cartData
        .map((product) => {
          if (product.id === action.payload) {
            const newQuantity = (product.count || 0) - 1;

            return newQuantity > 0
              ? { ...item, count: newQuantity }
              : { ...item, count: 0 };
          }

          return item;
        })
        .filter((item) => item.cartCount || 0 > 0);
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

    removeItemFromCart: (state, action) => {
      console.log(action.payload.id);
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem('cart', JSON.stringify(state.cartData));
    },

    increaseCountInCartItem: (state, action) => {
      let currData = state.cartData.map(item => ({...item}))
      let tempItem = state.cartData.find(item => item.id === +action.payload);
      state.cartData.forEach(item => console.log(item.count))
      tempItem = {...tempItem, count: tempItem.count + 1};
      state.cartData = currData.map(item => item.id === +action.payload ? tempItem : item)

      localStorage.setItem('cart', JSON.stringify(state.cartData));
    },

    decreaseCountInCartItem: (state, action) => {
      let currData = state.cartData.map(item => ({...item}))
      let tempItem = state.cartData.find(item => item.id === +action.payload);
      state.cartData.forEach(item => console.log(item.count))
      tempItem = {...tempItem, count: tempItem.count - 1};
      state.cartData = currData.map(item => item.id === +action.payload ? tempItem : item)

      localStorage.setItem('cart', JSON.stringify(state.cartData));
    },
  },
});

export const {
  addToCart,
  initDataFromLocalStorage,
  removeAllProductbyIdFromCart,
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
  increaseCountInCartItem,
  decreaseCountInCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
