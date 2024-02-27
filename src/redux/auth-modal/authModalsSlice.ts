import { createSlice } from "@reduxjs/toolkit";

export interface AuthModals {
  signup: boolean;
  signin: boolean;
}

const initialState: AuthModals = {
  signup: false,
  signin: false,
};

const authModalsSlice = createSlice({
  name: "authModals",
  initialState,
  reducers: {
    showSignup: (state) => {
      state.signup = true;
    },
    hideSignup: (state) => {
      state.signup = false;
    },
    showSignin: (state) => {
      state.signin = true;
    },
    hideSingin: (state) => {
      state.signin = false;
    },
  },
});

export const { showSignup, hideSignup, showSignin, hideSingin } =
  authModalsSlice.actions;
export default authModalsSlice.reducer;
