import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProductsByCategoryId,
  fetchProducts,
} from '../../utils/fetchClient';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    selectedCategoryId: '',
    category: {},
    data: [],
    loading: false,
    error: '',
    type: 'all',
  },
  reducers: {
    setSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.selectedCategoryId = '';
        state.loading = false;
        state.data = action.payload;
        if (action.payload.type === 'sale') {
          state.data = action.payload.map((item) => ({
            ...item,
            discontPrice: parseFloat(
              (item.price - item.price * (item.discont_price / 100)).toFixed(2)
            ),
          }));
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
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
        state.error = action.error.message;
      });
  },
});
export const { setSelectedCategoryId } = productSlice.actions;
export default productSlice.reducer;
