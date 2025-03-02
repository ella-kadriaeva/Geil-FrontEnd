import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: ""
  },

  reducers: {
    startProductRequest: (state) => {
      state.loading = true;
      state.error = "";
    },
    finishProductRequest: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    errorProductRequest: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const {
  startProductRequest,
  finishProductRequest,
  errorProductRequest
} = productSlice.actions;
export default productSlice.reducer;
