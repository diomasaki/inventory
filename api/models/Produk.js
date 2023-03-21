const mongoose = require("mongoose");

const Produk = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: String, default: 1 },
    qty: { type: Number, default: 1 },
    img: { type: String },
    category: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("produk", Produk);
