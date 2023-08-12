import { createSlice } from "@reduxjs/toolkit";

export const produkSlice = createSlice({
  name: "prodak",
  initialState: {
    produk: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    dapatProdukStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    dapatProdukSukses: (state, action) => {
      state.produk = action.payload;
      state.error = false;
    },
    dapatProdukGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    hapusProdukMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    hapusProdukSukses: (state, action) => {
      state.isFetching = false;
      state.produk.splice(
        state.produk.findIndex((prodak) => prodak._id === action.payload)
      );
    },
    hapusProdukGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    updateProductSuccess8: (state, action) => {
      state.isFetching = false;
      state.produk.splice(
        state.produk.findIndex((prodak) => prodak._id === action.payload),
        1
      );
    },

    updateProductSuccess: (state, action) => {
      const prdIndex = state.prodak.findIndex(
        (produk) => produk._id === action.payload.id
      );
      state.produk[prdIndex].name = action.payload.name;
      state.produk[prdIndex].price = action.payload.price;
      state.produk[prdIndex].qty = action.payload.qty;
      state.produk[prdIndex].category = action.payload.category;
    },

    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    buatProdukMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    buatProdukSukses: (state, action) => {
      state.isFetching = false;
      state.produk.push(action.payload);
    },
    buatProdukGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  dapatProdukStart,
  dapatProdukSukses,
  dapatProdukGagal,
  hapusProdukMulai,
  hapusProdukSukses,
  hapusProdukGagal,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  buatProdukMulai,
  buatProdukSukses,
  buatProdukGagal
} = produkSlice.actions;

export default produkSlice.reducer;
