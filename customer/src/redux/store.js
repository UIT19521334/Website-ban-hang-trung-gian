import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import orderSlice from "../slices/orderSlice";
import productSlice from "../slices/productSlice";
import saleSlice from "../slices/saleSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    order: orderSlice,
    sale: saleSlice,
  },
});
export default store;
