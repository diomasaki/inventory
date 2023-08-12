const mongoose = require("mongoose");

const ProdukKeluar = mongoose.Schema(
  {
    img: { type: String },
    produk: { type: String, required: true, unique: true },
    kustomer: { type: String, required: true },
    qty: { type: Number, default: 1 },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("produkkeluar", ProdukKeluar);
