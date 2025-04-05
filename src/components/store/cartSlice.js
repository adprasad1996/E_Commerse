import { createSlice } from '@reduxjs/toolkit';

// Load cart data from localStorage
const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

// Save cart data to localStorage
const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromStorage(), // Load items from localStorage
  },
  reducers: {
    // Add new item or increase quantity if it exists
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToStorage(state.items);
    },

    // Remove item by id
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },

    // Clear all cart items
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },

    // Increase quantity of an item by id
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        saveCartToStorage(state.items);
      }
    },

    // Decrease quantity or remove item if quantity reaches 0
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
        saveCartToStorage(state.items);
      }
    },

    // Set a specific quantity (optional)
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        saveCartToStorage(state.items);
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
