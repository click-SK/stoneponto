import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrency = createAsyncThunk(
  'data/fetchCurrency',
  async () => {
    const response = await fetch('http://91.206.30.132:4444/get-currency');
    const data = await response.json();
    return data[0] || null;
  }
);

const initialState = {
  currency: null,
  status: 'idle',
};

const currencySlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.currency = action.payload;
      })
      .addCase(fetchCurrency.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const currentCurrency = (state) => state.currency;

export const currencyReducer = currencySlice.reducer;