import { createSlice } from "@reduxjs/toolkit";

export interface AuthModals {
  signup: boolean;
  signin: boolean;
  showModal: boolean;
}

const initialState: AuthModals = {
  signup: true,
  signin: false,
  showModal: true,
};

const authModalsSlice = createSlice({
  name: "authModals",
  initialState,
  reducers: {
    showSignup: (state) => {
      state.showModal = true;
      state.signin = false;
      state.signup = true;
    },
    hideSignup: (state) => {
      state.showModal = false;
      state.signup = false;
    },
    showSignin: (state) => {
      state.showModal = true;
      state.signup = false;
      state.signin = true;
    },
    hideSingin: (state) => {
      state.showModal = false;
      state.signin = false;
    },
  },
});

export const { showSignup, hideSignup, showSignin, hideSingin } =
  authModalsSlice.actions;
export default authModalsSlice.reducer;
