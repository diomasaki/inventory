import {
  dapatUserGagal,
  dapatUserMulai,
  dapatUserSukses,
  hapusUserGagal,
  hapusUserMulai,
  hapusUserSukses,
  loginFailure,
  loginStart,
  loginSuccess,
  perbaruUserGagal,
  perbaruUserMulai,
  perbaruUserSukses,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  buatProdukGagal,
  buatProdukMulai,
  buatProdukSukses,
  dapatProdukGagal,
  dapatProdukStart,
  dapatProdukSukses,
  hapusProdukGagal,
  hapusProdukMulai,
  hapusProdukSukses,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";
import {
  buatKustomerGagal,
  buatKustomerMulai,
  buatKustomerSukses,
  dapatKustomerGagal,
  dapatKustomerStart,
  dapatKustomerSukses,
  hapusKustomerGagal,
  hapusKustomerMulai,
  hapusKustomerSukses,
  perbaruKustomerGagal,
  perbaruKustomerMulai,
  perbaruKustomerSukses,
} from "./customerRedux";
import {
  buatResellerGagal,
  buatResellerMulai,
  buatResellerSukses,
  dapatResellerGagal,
  dapatResellerStart,
  dapatResellerSukses,
  hapusResellerGagal,
  hapusResellerMulai,
  hapusResellerSukses,
  perbaruResellerGagal,
  perbaruResellerMulai,
  perbaruResellerSukses,
} from "./resellerRedux";
import {
  buatCategoryGagal,
  buatCategoryMulai,
  buatCategorySukses,
  dapatCategoryGagal,
  dapatCategoryMulai,
  dapatCategorySukses,
  hapusCategoryGagal,
  hapusCategoryMulai,
  hapusCategorySukses,
  perbaruCategoryGagal,
  perbaruCategoryMulai,
  perbaruCategorySukses,
} from "./categoryRedux";
import {
  buatProdukOutGagal,
  buatProdukOutMulai,
  buatProdukOutSukses,
  dapatProdukOutGagal,
  dapatProdukOutStart,
  dapatProdukOutSukses,
  hapusProdukOutGagal,
  hapusProdukOutMulai,
  hapusProdukOutSukses,
  updateProductOutFailure,
  updateProductOutStart,
  updateProductOutSuccess,
} from "./productoutRedux";
import {
  buatProdukInGagal,
  buatProdukInMulai,
  buatProdukInSukses,
  dapatProdukInGagal,
  dapatProdukInStart,
  dapatProdukInSukses,
  hapusProdukInGagal,
  hapusProdukInMulai,
  hapusProdukInSukses,
  updateProductInFailure,
  updateProductInStart,
  updateProductInSuccess,
} from "./productinRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const dapatProduk = async (dispatch) => {
  dispatch(dapatProdukStart());
  try {
    const res = await publicRequest.get("produk");
    dispatch(dapatProdukSukses(res.data));
  } catch (err) {
    dispatch(dapatProdukGagal());
  }
};

export const hapusProduk = async (id, dispatch) => {
  dispatch(hapusProdukMulai());
  try {
    const res = await userRequest.delete(`/produk/${id}/deleteproduct`);
    dispatch(hapusProdukSukses(res.data));
    window.location.reload(false);
  } catch (err) {
    dispatch(hapusProdukGagal());
  }
};

export const updatePrd = async (dispatch, id, name, price, qty, category) => {
  dispatch(updateProductStart());
  try {
    const res = await publicRequest.put(`/produk/${id}`, {
      id: id,
      name: name,
      price: price,
      qty: qty,
      category: category,
    });
    dispatch(
      updateProductSuccess({
        id,
        name,
        price,
        qty,
        category,
      })
    );
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const buatProduk = async (prodak, dispatch) => {
  dispatch(buatProdukMulai());
  try {
    const res = await userRequest.post(`/produk/create `, prodak);
    dispatch(buatProdukSukses(res.data));
  } catch (err) {
    dispatch(buatProdukGagal());
  }
};

export const dapatUser = async (dispatch) => {
  dispatch(dapatUserMulai());
  try {
    const res = await userRequest.get(`/user`);
    dispatch(dapatUserSukses(res.data));
  } catch (err) {
    dispatch(dapatUserGagal());
  }
};

export const hapusUser = async (id, dispatch) => {
  dispatch(hapusUserMulai());
  try {
    const res = await userRequest.delete(`/user/${id}/del`);
    dispatch(hapusUserSukses(res.data));
    window.location.reload(false);
  } catch (err) {
    dispatch(hapusUserGagal());
  }
};

export const perbaruUser = async (dispatch, id, username, password, email) => {
  dispatch(perbaruUserMulai());
  try {
    const res = await publicRequest.put(`/user/${id}`, {
      id: id,
      username: username,
      password: password,
      email: email,
    });
    dispatch(
      perbaruUserSukses({
        id,
        username,
        password,
        email,
      })
    );
  } catch (err) {
    dispatch(perbaruUserGagal());
  }
};

export const dapatKustomer = async (dispatch) => {
  dispatch(dapatKustomerStart());
  try {
    const res = await userRequest.get("kustomer");
    dispatch(dapatKustomerSukses(res.data));
  } catch (err) {
    dispatch(dapatKustomerGagal());
  }
};

export const hapusKustomer = async (id, dispatch) => {
  dispatch(hapusKustomerMulai());
  try {
    const res = await userRequest.delete(`/kustomer/${id}/deletekustomer`);
    dispatch(hapusKustomerSukses(res.data));
    window.location.reload(false);
  } catch (err) {
    dispatch(hapusKustomerGagal());
  }
};

export const perbaruKustomer = async (
  dispatch,
  id,
  username,
  address,
  email,
  phone
) => {
  dispatch(perbaruKustomerMulai());
  try {
    const res = await publicRequest.put(`/kustomer/${id}`, {
      id: id,
      username: username,
      address: address,
      email: email,
      phone: phone,
    });
    dispatch(
      perbaruKustomerSukses({
        id,
        username,
        address,
        email,
        phone,
      })
    );
  } catch (err) {
    dispatch(perbaruKustomerGagal());
  }
};

export const buatKustomer = async (customer, dispatch) => {
  dispatch(buatKustomerMulai());
  try {
    const res = await userRequest.post(`/kustomer/create `, customer);
    dispatch(buatKustomerSukses(res.data));
  } catch (err) {
    dispatch(buatKustomerGagal());
  }
};

export const dapatReseller = async (dispatch) => {
  dispatch(dapatResellerStart());
  try {
    const res = await userRequest.get("reseller");
    dispatch(dapatResellerSukses(res.data));
  } catch (err) {
    dispatch(dapatResellerGagal());
  }
};

export const hapusReseller = async (id, dispatch) => {
  dispatch(hapusResellerMulai());
  try {
    const res = await userRequest.delete(`/reseller/${id}/deletereseller`);
    dispatch(hapusResellerSukses(res.data));
    window.location.reload(false);
  } catch (err) {
    dispatch(hapusResellerGagal());
  }
};

export const perbaruReseller = async (
  dispatch,
  id,
  username,
  address,
  email,
  phone
) => {
  dispatch(perbaruResellerMulai());
  try {
    const res = await publicRequest.put(`/reseller/${id}`, {
      id: id,
      username: username,
      address: address,
      email: email,
      phone: phone,
    });
    dispatch(
      perbaruResellerSukses({
        id,
        username,
        address,
        email,
        phone,
      })
    );
  } catch (err) {
    dispatch(perbaruResellerGagal());
  }
};

export const buatReseller = async (reseller, dispatch) => {
  dispatch(buatResellerMulai());
  try {
    const res = await userRequest.post(`/reseller/create `, reseller);
    dispatch(buatResellerSukses(res.data));
  } catch (err) {
    dispatch(buatResellerGagal());
  }
};

export const dapatCategory = async (dispatch) => {
  dispatch(dapatCategoryMulai());
  try {
    const res = await userRequest.get("kategori");
    dispatch(dapatCategorySukses(res.data));
  } catch (err) {
    dispatch(dapatCategoryGagal());
  }
};

export const hapusCategory = async (id, dispatch) => {
  dispatch(hapusCategoryMulai());
  try {
    const res = await userRequest.delete(`/kategori/${id}/deletekategori`);
    dispatch(hapusCategorySukses(res.data));
    window.location.reload(false);
  } catch (err) {
    dispatch(hapusCategoryGagal());
  }
};

export const perbaruCategory = async (dispatch, id, name) => {
  dispatch(perbaruCategoryMulai());
  try {
    const res = await publicRequest.put(`/kategori/${id}`, {
      id: id,
      name: name,
    });
    dispatch(
      perbaruCategorySukses({
        id,
        name,
      })
    );
  } catch (err) {
    dispatch(perbaruCategoryGagal());
  }
};

export const buatCategory = async (category, dispatch) => {
  dispatch(buatCategoryMulai());
  try {
    const res = await userRequest.post(`/kategori/create `, category);
    dispatch(buatCategorySukses(res.data));
  } catch (err) {
    dispatch(buatCategoryGagal());
  }
};

export const dapatProdukOut = async (dispatch) => {
  dispatch(dapatProdukOutStart());
  try {
    const res = await publicRequest.get("produkkeluar");
    dispatch(dapatProdukOutSukses(res.data));
  } catch (err) {
    dispatch(dapatProdukOutGagal());
  }
};

export const hapusProdukOut = async (id, dispatch) => {
  dispatch(hapusProdukOutMulai());
  try {
    const res = await userRequest.delete(
      `/produkkeluar/${id}/deleteproductkeluar`
    );
    dispatch(hapusProdukOutSukses(res.data));
    window.location.reload(false);
  } catch (err) {
    dispatch(hapusProdukOutGagal());
  }
};

export const updatePrdOut = async (
  dispatch,
  id,
  produk,
  kustomer,
  qty,
  date
) => {
  dispatch(updateProductOutStart());
  try {
    const res = await publicRequest.put(`/produkkeluar/${id}`, {
      id: id,
      produk: produk,
      kustomer: kustomer,
      qty: qty,
      date: date,
    });
    dispatch(
      updateProductOutSuccess({
        id,
        produk,
        kustomer,
        qty,
        date,
      })
    );
  } catch (err) {
    dispatch(updateProductOutFailure());
  }
};

export const buatProdukOut = async (produkout, dispatch) => {
  dispatch(buatProdukOutMulai());
  try {
    const res = await userRequest.post(`/produkkeluar/create `, produkout);
    dispatch(buatProdukOutSukses(res.data));
  } catch (err) {
    dispatch(buatProdukOutGagal());
  }
};

export const dapatPrdIn = async (dispatch) => {
  dispatch(dapatProdukInStart());
  try {
    const res = await userRequest.get("produkmasuk");
    dispatch(dapatProdukInSukses(res.data));
  } catch (err) {
    dispatch(dapatProdukInGagal());
  }
};

export const hapusPrdIn = async (id, dispatch) => {
  dispatch(hapusProdukInMulai());
  try {
    const res = await userRequest.delete(
      `/produkmasuk/${id}/deleteproductmasuk`
    );
    dispatch(hapusProdukInSukses(res.data));
    window.location.reload(false);
  } catch (err) {
    dispatch(hapusProdukInGagal());
  }
};

export const perbaruPrdIn = async (
  dispatch,
  id,
  produk,
  reseller,
  qty,
  date
) => {
  dispatch(updateProductInStart());
  try {
    const res = await userRequest.put(`/produkmasuk/${id}`, {
      id: id,
      produk: produk,
      reseller: reseller,
      qty: qty,
      date: date,
    });
    dispatch(
      updateProductInSuccess({
        id,
        produk,
        reseller,
        qty,
        date,
      })
    );
  } catch (err) {
    dispatch(updateProductInFailure());
  }
};

export const buatPrdIn = async (produkin, dispatch) => {
  dispatch(buatProdukInMulai());
  try {
    const res = await userRequest.post(`/produkmasuk/create `, produkin);
    dispatch(buatProdukInSukses(res.data));
  } catch (err) {
    dispatch(buatProdukInGagal());
  }
};
