import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/api";

const initState = {
  isLoading: false,
  isErr: false,
  order: [],
  productOrder: [],
};
export const fetchOrder = createAsyncThunk("order/fetch", async (thunkAPI) => {
  try {
    const url = `${apiUrl}/order/fetAll`;
    const response = await axios.get(url);
    if (response.data) {
      return response.data;
    } else {
      return response.response.data || "";
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const fetchOrderByProduct = createAsyncThunk(
  "order/fetchByProduct",
  async (id, thunkAPI) => {
    try {
      const url = `${apiUrl}/order/${id}`;
      const response = await axios.get(url);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createOrder = createAsyncThunk(
  "order/createbid",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const url = `${apiUrl}/order/create`;
      const response = await axios.post(url, data);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const orderSlice = createSlice({
  name: "order",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(fetchOrderByProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrderByProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productOrder = action.payload.orders;
      })
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});
export default orderSlice.reducer;
