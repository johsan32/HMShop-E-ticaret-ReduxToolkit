import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductDetail, getCategoryProducts} from "./actions/productAction";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  productDetail: [],
  isDetailLoading: true,
  isDetailError: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(getProducts.rejected, (state) => {
      state.isError = true;
    })
    .addCase(getProductDetail.pending, (state) => {
      state.isDetailLoading= true;
    })
    .addCase(getProductDetail.fulfilled, (state, action) => {
      state.isDetailLoading = false;
      state.productDetail = action.payload;
    })
    .addCase(getProductDetail.rejected, (state) => {
      state.isDetailError = true;
    })
    .addCase(getCategoryProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(getCategoryProducts.rejected, (state) => {
      state.isError = true;
    })
  },
});

export default productSlice.reducer;
