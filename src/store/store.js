import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import filtersReducer from "./slices/filtersSlice";
export default configureStore({
  reducer: { products: productReducer, filters: filtersReducer }
});
