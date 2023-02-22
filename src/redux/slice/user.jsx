import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {
    name: "",
    email: "",
    password: "",
  },
};

const userReducer = createSlice({
  initialState,
  name: "userReducer",
  reducers: {
    setUser: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUser } = userReducer.actions;
export const user = userReducer.reducer;
