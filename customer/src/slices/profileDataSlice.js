import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/api";

const initState = {
  isLoading: false,
  order: [],
  sale: [],
  following: [],
};
export const fetchOrder = createAsyncThunk(
  "profile/order",
  async (id, thunkAPI) => {
    try {
      const url = `${apiUrl}/user/order/${id}`;
      const url1 = `${apiUrl}/user/sale/${id}`;
      const url2 = `${apiUrl}/user/follow/${id}`;
      const response = await axios.get(url);
      const response1 = await axios.get(url1);
      const response2 = await axios.get(url2);
      if (response.data && response1) {
        return {
          order: response.data,
          sale: response1.data,
          follow: response2.data,
        };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const profileDataSlice = createSlice({
  name: "profileData",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload.order;
        state.sale = action.payload.sale;
        state.following = action.payload.follow;
      });
  },
});
export default profileDataSlice.reducer;
