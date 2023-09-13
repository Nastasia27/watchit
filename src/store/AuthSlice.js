import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    fullName: "",
    email: "",
    token: "",
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserData: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, setLoading, setUserData } = AuthSlice.actions;

export default AuthSlice.reducer;