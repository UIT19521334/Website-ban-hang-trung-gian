import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/api";

const initState = {
  isLoading: false,
  isErr: false,
  product: [],
  follow: false,
};
export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (thunkAPI) => {
    try {
      const url = `${apiUrl}/product/getallbase`;
      const response = await axios.get(url);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkFollow = createAsyncThunk(
  "product/check",
  async (data, thunkAPI) => {
    try {
      const url = `${apiUrl}/follow/check`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addFollow = createAsyncThunk(
  "product/add",
  async (data, thunkAPI) => {
    try {
      const url = `${apiUrl}/follow/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.isErr = false;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isErr = false;
        const product = [];
        action.payload.forEach((item) => {
          const fixItem = {
            id: item._id,
            name: item.name,
            img: item.img_path,
            category: item.brand,
            describe: item.description,
            price: item.retail_price,
            sold: Math.floor(Math.random() * 10),
          };
          product.push(fixItem);
        });
        const extraProduct = [];
        for (let index in [2, 3]) {
          for (let i of product) {
            extraProduct.push(i);
          }
        }
        state.product = extraProduct;
      })
      .addCase(checkFollow.fulfilled, (state, action) => {
        state.follow = action.payload;
      })
      .addCase(addFollow.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
