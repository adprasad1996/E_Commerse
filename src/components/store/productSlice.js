import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    allProducts: [],      // All products from API
    filteredProducts: [], // Products to show based on category
    category: 'all',      // Selected category
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.category = category;

      if (category === 'all') {
        state.filteredProducts = state.allProducts;
      } else {
        state.filteredProducts = state.allProducts.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
      }
    },
  },
});

export const { setProducts, filterByCategory } = productSlice.actions;
export default productSlice.reducer;
