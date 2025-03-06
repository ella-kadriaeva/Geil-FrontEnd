import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import filtersReducer from './slices/filtersSlice';
import categoriesReducer from './slices/categoriesSlice';
import detailsReducer from './slices/detailsSlice';

export default configureStore({
  reducer: {
    products: productReducer,
    filters: filtersReducer,
    categories: categoriesReducer,
    details: detailsReducer,
  },
});
