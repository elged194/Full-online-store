import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCart: [],
  allProducts: [],
  filteredProducts: [],
  searchTerm: "",
};

export const counterSlice = createSlice({
  name: "UserStor",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const productQuantity = { ...action.payload, quantity: 1 };
      const existingItem = state.myCart.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.myCart.push(productQuantity);
      }
    },
    increment: (state, action) => {
      const productItem = state.myCart.find(
        (item) => item.id === action.payload.id
      );
      productItem.quantity += 1;
    },
    decrement: (state, action) => {
      const productItem = state.myCart.find(
        (item) => item.id === action.payload.id
      );
      productItem.quantity -= 1;
      if (productItem.quantity === 0) {
        state.myCart = state.myCart.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    deledeItem: (state, action) => {
      state.myCart = state.myCart.filter(
        (item) => item.id !== action.payload.id
      );
    },
    searchProduct: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchTerm = searchTerm;
      state.filteredProducts = state.allProducts.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
    },
    searchProductCart: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchTerm = searchTerm;
      state.filteredProducts = state.myCart.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
    },
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByPrice: (state, action) => {
      const { min, max } = action.payload;
      state.filteredProducts = state.allProducts.filter(
        (item) => item.price >= min && item.price <= max
      );
    },

  },
});

export const {
  addCart,
  increment,
  decrement,
  deledeItem,
  searchProduct,
  searchProductCart,
  setProducts,
  filterByPrice,
} = counterSlice.actions;

export default counterSlice.reducer;
