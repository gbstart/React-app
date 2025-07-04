import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  const res = await axios.get(
    "https://restcountries.com/v2/all?fields=name,region,flag"
  );
  console.log(res, "response");
  return res.data;
});

const countriesSlice = createSlice({
  name: "countries",
  initialState: { data: [], visible: 6 },
  reducers: {
    loadMore: (state) => {
      state.visible += 6;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch countries";
      });
  },
});

export const { loadMore } = countriesSlice.actions;
export default countriesSlice.reducer;
