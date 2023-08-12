import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categorys: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    dapatCategoryMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    dapatCategorySukses: (state, action) => {
      state.categorys = action.payload;
      state.error = false;
    },
    dapatCategoryGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    hapusCategoryMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    hapusCategorySukses: (state, action) => {
      state.categorys.splice(
        state.categorys.findIndex((category) => category._id === action.payload)
      );
    },
    hapusCategoryGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    perbaruCategoryMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    perbaruCategorySukses: (state, action) => {
      const catIndex = state.category.findIndex(
        (categorys) => categorys._id === action.payload.id
      );
      state.categorys[catIndex].img = action.payload.img;
      state.categorys[catIndex].name = action.payload.name;
    },
    perbaruCategoryGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    buatCategoryMulai: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    buatCategorySukses: (state, action) => {
      state.isFetching = false;
      state.categorys.push(action.payload);
    },
    buatCategoryGagal: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  dapatCategoryMulai,
  dapatCategorySukses,
  dapatCategoryGagal,
  hapusCategoryMulai,
  hapusCategorySukses,
  hapusCategoryGagal,
  perbaruCategoryMulai,
  perbaruCategorySukses,
  perbaruCategoryGagal,
  buatCategoryMulai,
  buatCategorySukses,
  buatCategoryGagal,
} = categorySlice.actions;

export default categorySlice.reducer;
