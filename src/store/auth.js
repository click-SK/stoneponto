import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../http/BaseUrl";
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    try {
      const { data } = await fetch(`${BASE_URL}/register-user`);
      return data;
    } catch(error) {
      console.log('error',error);
    }
  }
);

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async ({ name, password }) => {
    try {
      const response = await fetch(`${BASE_URL}/login-user`, {
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
    } catch(error) {
      console.log('error',error);
    }
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  try {
    const response = await fetch(`${BASE_URL}/get-me`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    // if(!data.loggedIn) {
    //     window.localStorage.removeItem("token");
    // }
    return data;
  } catch(error) {
    console.log('error',error);
  }
});

export const fetchIsAdmin = createAsyncThunk("auth/fetchIsAdmin", async () => {
  try {
    const { data } = await fetch(`${BASE_URL}/get-me`);
    return data.isadmin;
  } catch(error) {
    console.log('error',error);
  }
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
