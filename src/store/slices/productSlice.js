import {  createSlice } from '@reduxjs/toolkit';
import { fetchProductsByCategoryId, fetchProducts } from './api/categories';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    selectedCategoryId: '',
    category: {},
    data: [],
    loading: false,
    error: '',
  },
  reducers: {
    setSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
         .addCase(fetchProducts .pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProducts .fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchProducts .rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchProductsByCategoryId.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProductsByCategoryId.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload.category;
        state.data = action.payload.data;
      })
      .addCase(fetchProductsByCategoryId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});
export const { setSelectedCategoryId } = productSlice.actions;
export default productSlice.reducer;
