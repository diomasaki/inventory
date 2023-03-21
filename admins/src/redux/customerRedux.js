import { createSlice } from "@reduxjs/toolkit";

export const customersSlice = createSlice({
  name: "customer",
  initialState: {
    customers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    dapatKustomerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    dapatKustomerSukses: (state, action) => {
      state.customers = action.payload;
      state.error = false;
    },
    dapatKustomerGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    hapusKustomerMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    hapusKustomerSukses: (state, action) => {
      state.isFetching = false;
      state.customers.splice(
        state.customers.findIndex((customer) => customer._id === action.payload)
      );
    },
    hapusKustomerGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    perbaruKustomerMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    perbaruKustomerSukses: (state, action) => {
      const kustomerIndex = state.customer.findIndex(
        (customers) => customers._id === action.payload.id
      );
      state.customers[kustomerIndex].img = action.payload.img;
      state.customers[kustomerIndex].username = action.payload.username;
      state.customers[kustomerIndex].address = action.payload.address;
      state.customers[kustomerIndex].email = action.payload.email;
      state.customers[kustomerIndex].phone = action.payload.phone;
    },
    perbaruKustomerGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    buatKustomerMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    buatKustomerSukses: (state, action) => {
      state.isFetching = false;
      state.customers.push(action.payload);
    },
    buatKustomerGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  dapatKustomerStart,
  dapatKustomerSukses,
  dapatKustomerGagal,
  hapusKustomerMulai,
  hapusKustomerSukses,
  hapusKustomerGagal,
  perbaruKustomerMulai,
  perbaruKustomerSukses,
  perbaruKustomerGagal,
  buatKustomerMulai,
  buatKustomerSukses,
  buatKustomerGagal
} = customersSlice.actions;

export default customersSlice.reducer;
