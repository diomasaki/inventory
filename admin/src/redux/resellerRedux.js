import { createSlice } from "@reduxjs/toolkit";

export const resellersSlice = createSlice({
  name: "reseller",
  initialState: {
    resellers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    dapatResellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    dapatResellerSukses: (state, action) => {
      state.resellers = action.payload;
      state.error = false;
    },
    dapatResellerGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    hapusResellerMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    hapusResellerSukses: (state, action) => {
      state.isFetching = false;
      state.resellers.splice(
        state.resellers.findIndex((reseller) => reseller._id === action.payload)
      );
    },
    hapusResellerGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    perbaruResellerMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    perbaruResellerSukses: (state, action) => {
      const resellerIndex = state.reseller.findIndex(
        (resellers) => resellers._id === action.payload.id
      );
      state.resellers[resellerIndex].img = action.payload.img;
      state.resellers[resellerIndex].username = action.payload.username;
      state.resellers[resellerIndex].address = action.payload.address;
      state.resellers[resellerIndex].email = action.payload.email;
      state.resellers[resellerIndex].phone = action.payload.phone;
    },
    perbaruResellerGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    buatResellerMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    buatResellerSukses: (state, action) => {
      state.isFetching = false;
      state.resellers.push(action.payload);
    },
    buatResellerGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  dapatResellerStart,
  dapatResellerSukses,
  dapatResellerGagal,
  hapusResellerMulai,
  hapusResellerSukses,
  hapusResellerGagal,
  perbaruResellerMulai,
  perbaruResellerSukses,
  perbaruResellerGagal,
  buatResellerMulai,
  buatResellerSukses,
  buatResellerGagal
} = resellersSlice.actions;

export default resellersSlice.reducer;
