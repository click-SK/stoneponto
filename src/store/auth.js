import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const { data } = await fetch("http://91.206.30.132:4444/register-user");
    return data;
  }
);

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async ({ name, password }) => {
    const response = await fetch("http://91.206.30.132:4444/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    const data = await response.json();
    return data || null;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const response = await fetch("http://91.206.30.132:4444/get-me", {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  // if(!data.loggedIn) {
  //     window.localStorage.removeItem("token");
  // }
  return data;
});

export const fetchIsAdmin = createAsyncThunk("auth/fetchIsAdmin", async () => {
  const { data } = await fetch("http://91.206.30.132:4444/get-me");
  return data.isadmin;
});

const initialState = {
  data: {},
  user: {},
  users: null,
  isAdmin: false,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchRegister.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuthMe.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchIsAdmin.pending]: (state) => {
      state.status = "loading";
      state.isAdmin = false;
    },
    [fetchIsAdmin.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.isAdmin = action.payload;
    },
    [fetchIsAdmin.rejected]: (state) => {
      state.status = "error";
      state.isAdmin = false;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const currentUser = (state) => state.auth.data;

export const allUsers = (state) => state.auth.users;

export const selectIsAdmin = (state) => state.auth.isAdmin;

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
