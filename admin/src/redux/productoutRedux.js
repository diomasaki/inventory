import { createSlice } from "@reduxjs/toolkit";

export const produkoutSlice = createSlice({
  name: "produkout",
  initialState: {
    produkouts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    dapatProdukOutStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    dapatProdukOutSukses: (state, action) => {
      state.produkouts = action.payload;
      state.error = false;
    },
    dapatProdukOutGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    hapusProdukOutMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    hapusProdukOutSukses: (state, action) => {
      state.isFetching = false;
      state.produkouts.splice(
        state.produkouts.findIndex((produkout) => produkout._id === action.payload)
      );
    },
    hapusProdukOutGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateProductOutStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    updateProductOutSuccess: (state, action) => {
      const prdOutIndex = state.produkout.findIndex(
        (produkouts) => produkouts._id === action.payload.id
      );
      state.produkouts[prdOutIndex].img = action.payload.img;
      state.produkouts[prdOutIndex].produk = action.payload.produk;
      state.produkouts[prdOutIndex].kustomer = action.payload.kustomer;
      state.produkouts[prdOutIndex].qty = action.payload.qty;
      state.produkouts[prdOutIndex].date = action.payload.date;
    },

    updateProductOutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    buatProdukOutMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    buatProdukOutSukses: (state, action) => {
      state.isFetching = false;
      state.produkouts.push(action.payload);
    },
    buatProdukOutGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  dapatProdukOutStart,
  dapatProdukOutSukses,
  dapatProdukOutGagal,
  hapusProdukOutMulai,
  hapusProdukOutSukses,
  hapusProdukOutGagal,
  updateProductOutStart,
  updateProductOutSuccess,
  updateProductOutFailure,
  buatProdukOutMulai,
  buatProdukOutSukses,
  buatProdukOutGagal
} = produkoutSlice.actions;

export default produkoutSlice.reducer;
