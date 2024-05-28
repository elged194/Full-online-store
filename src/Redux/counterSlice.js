import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCart: [],
  allProducts: [],

  filteredProducts: [],
  searchTerm: "",

  salesTax: 50,
  Discount: 0,
  totale: 0,
  totalePayment: 0,
  additionalFee: 10 ,
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

    calculateTotals: (state, action) => {
      state.totale = state.salesTax + action.payload;
      state.Discount = state.totale * (10 / 100);
      state.totalePayment = state.totale - state.Discount 
      state.totalePayment += state.additionalFee
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
  calculateTotals,
} = counterSlice.actions;

export default counterSlice.reducer;
