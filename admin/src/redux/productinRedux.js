import { createSlice } from "@reduxjs/toolkit";

export const produkinSlice = createSlice({
  name: "produkin",
  initialState: {
    produkins: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    dapatProdukInStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    dapatProdukInSukses: (state, action) => {
      state.produkins = action.payload;
      state.error = false;
    },
    dapatProdukInGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    hapusProdukInMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    hapusProdukInSukses: (state, action) => {
      state.isFetching = false;
      state.produkins.splice(
        state.produkins.findIndex((produkin) => produkin._id === action.payload)
      );
    },
    hapusProdukInGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateProductInStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    updateProductInSuccess: (state, action) => {
      const prdInIndex = state.produkin.findIndex(
        (produkins) => produkins._id === action.payload.id
      );
      state.produkins[prdInIndex].img = action.payload.img;
      state.produkins[prdInIndex].produk = action.payload.produk;
      state.produkins[prdInIndex].reseller = action.payload.reseller;
      state.produkins[prdInIndex].qty = action.payload.qty;
      state.produkins[prdInIndex].date = action.payload.date;
    },

    updateProductInFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    buatProdukInMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    buatProdukInSukses: (state, action) => {
      state.isFetching = false;
      state.produkins.push(action.payload);
    },
    buatProdukInGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  dapatProdukInStart,
  dapatProdukInSukses,
  dapatProdukInGagal,
  hapusProdukInMulai,
  hapusProdukInSukses,
  hapusProdukInGagal,
  updateProductInStart,
  updateProductInSuccess,
  updateProductInFailure,
  buatProdukInMulai,
  buatProdukInSukses,
  buatProdukInGagal
} = produkinSlice.actions;

export default produkinSlice.reducer;
