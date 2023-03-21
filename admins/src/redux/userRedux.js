import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentUser: null,
    isFetching: false,
    success: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.success = false;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.success = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error2 = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    dapatUserMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    dapatUserSukses: (state, action) => {
      state.users = action.payload;
      state.error = false;
    },
    dapatUserGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    hapusUserMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    hapusUserSukses: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((user) => user._id === action.payload)
      );
    },
    hapusUserGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    perbaruUserMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    perbaruUserSukses: (state, action) => {
      const userIndex = state.user.findIndex(
        (users) => users._id === action.payload.id
      );
      state.users[userIndex].username = action.payload.username;
      state.users[userIndex].password = action.payload.password;
      state.users[userIndex].email = action.payload.email;
    },
    perbaruUserGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  dapatUserMulai,
  dapatUserSukses,
  dapatUserGagal,
  hapusUserMulai,
  hapusUserSukses,
  hapusUserGagal,
  perbaruUserMulai,
  perbaruUserSukses,
  perbaruUserGagal,
} = userSlice.actions;
export default userSlice.reducer;
