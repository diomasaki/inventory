const mongoose = require("mongoose");

const ProdukMasuk = mongoose.Schema(
  {
    img: { type: String },
    produk: { type: String, required: true, unique: true },
    reseller: { type: String, required: true },
    qty: { type: Number, default: 1 },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("produkmasuk", ProdukMasuk);
