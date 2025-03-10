import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import filtersReducer from './slices/filtersSlice';
import categoriesReducer from './slices/categoriesSlice';
import detailsReducer from './slices/detailsSlice';
import cartReducer from './slices/cartSlice';
import counterSlice from './slices/counterSlice';

export default configureStore({
  reducer: {
    products: productReducer,
    filters: filtersReducer,
    categories: categoriesReducer,
    details: detailsReducer,
    cart: cartReducer,
    counter: counterSlice,
  },
});
