import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    category: "",
    priceFrom: null,
    priceTo: null,
    name: ""
  },

  reducers: {
    applyFilters: (state, action) => {
      state = action.payload;
    }
  }
});
export const { applyFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
