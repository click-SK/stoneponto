// import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

// export const fetchCurrency = createAsyncThunk('data/fetchCurrency', async () => {
//     const currency  = await fetch('https://ponto-print.herokuapp.com/get-currency')
//     .then((res) => res.json())
//     .then((res) => res[0]?.currency)
//     return currency;
// });

// const initialState = {
//     currency: null,
//     status: 'idle',
// };

// const authSlice = createSlice({
//     name: 'data',
//     initialState,
//     reducers: {
//         logout: (state) => {
//             state.currency = null;
//         }
//     },
//     extraReducers: {
//         [fetchCurrency.pending]: (state) => {
//             state.status = 'loading';
//         },
//         [fetchCurrency.fulfilled]: (state, action) => {
//             state.status = 'loaded';
//             state.currency = action.payload;
//         },
//         [fetchCurrency.rejected]: (state) => {
//             state.status = 'error';
//         }
//     }
// });

// export const currentCurrency = createSelector(
//     (state) => state.currency,
//     (currency) => currency
// );

// export const authReducer = authSlice.reducer;

// export const { logout } = authSlice.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrency = createAsyncThunk(
  'data/fetchCurrency',
  async () => {
    const response = await fetch('https://ponto-print.herokuapp.com/get-currency');
    const data = await response.json();
    return data[0]?.currency || null;
  }
);

const initialState = {
  currency: null,
  status: 'idle',
};

const authSlice = createSlice({
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

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;