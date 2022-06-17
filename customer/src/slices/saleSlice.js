import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/api";

const initState = {
  isLoading: false,
  sale: [],
  productSale: [],
};
export const fetchSaleByProduct = createAsyncThunk(
  "sale/fetchByProduct",
  async (id, thunkAPI) => {
    try {
      const url = `${apiUrl}/sale/${id}`;
      const response = await axios.get(url);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const saleSlice = createSlice({
  name: "sale",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSaleByProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSaleByProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productSale = action.payload;
      });
  },
});

export default saleSlice.reducer;
