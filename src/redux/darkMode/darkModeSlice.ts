import { createSlice } from "@reduxjs/toolkit";

export interface DarkModeState {
  value: boolean;
}

const initialState: DarkModeState = {
  value: false, // Default state
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
