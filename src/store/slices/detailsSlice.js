import { createSlice } from '@reduxjs/toolkit';
import { fetchProductById } from '../../utils/fetchClient';

export const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    details: {},
    loading: false,
    error: '',
  },
  reducers: {
    increment: (state) => {
      state.details[0].value += 1;
    },
    decrement: (state) => {
      if (state.details[0].value > 0) {
        state.details[0].value -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.details = action.payload;
        state.details[0].value = 0; // Reset the counter to 0 upon loading a new product
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { increment, decrement } = detailsSlice.actions;
export default detailsSlice.reducer;
