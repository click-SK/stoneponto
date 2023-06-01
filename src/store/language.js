import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLanguage = createAsyncThunk(
  'data/fetchLanguage',
  async () => {
    const lag = window.localStorage.getItem('language');
    let withoutQuotes = lag.slice(1, -1);
    return withoutQuotes;
  }
);

const initialState = {
  language: null,
  status: 'idle',
};

const languageSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLanguage.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.language = action.payload;
      })
      .addCase(fetchLanguage.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const currentLanguage = (state) => state.language;

export const languageReducer = languageSlice.reducer;