const mongoose = require("mongoose");

const Kategori = mongoose.Schema(
  {
    img: { type: String },
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("kategori", Kategori);
