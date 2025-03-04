import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = 'http://localhost:3333';
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch(`${BASE_URL}/products/all`);
    if (!response.ok) {
      throw new Error('Failed to fetch!' + response.statusText);
    }
    let data = await response.json();
    return data;
  }
);

export const fetchCategories = createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await fetch(`${BASE_URL}/categories/all`);
    if (!response.ok) {
      throw new Error('Failed to fetch!' + response.statusText);
    }
    let data = await response.json();
    return data;
  }
);

export const fetchProductsByCategoryId = createAsyncThunk(
  'product/fetchProductsByCategoryId',
  async (categoryId) => {
    const response = await fetch(`${BASE_URL}/categories/${categoryId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch!' + response.statusText);
    }

    let data = await response.json();
    console.log(data);
    return data;
  }
);
