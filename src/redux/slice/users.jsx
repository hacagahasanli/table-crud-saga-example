import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersDetails: [],
};

const usersReducer = createSlice({
  initialState,
  name: "usersReducer",
  reducers: {
    getUsers: (state, action) => {
      const data = action.payload;
      state.usersDetails = data;
    },
    addUser: (state, action) => {
      state.usersDetails.push(action.payload);
    },
    editUser: (state, action) => {
      const editedUser = action.payload;
      state.usersDetails = state.usersDetails.map((user) =>
        user.id === editedUser.id ? editedUser : user
      );
      console.log(state.usersDetails, "STATE USER DETAILS");
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.usersDetails = state.usersDetails.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, getUsers, editUser, deleteUser } = usersReducer.actions;
export const users = usersReducer.reducer;
