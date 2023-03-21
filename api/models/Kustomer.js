const mongoose = require("mongoose");

const Kustomer = mongoose.Schema(
  {
    img: { type: String  },
    username: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("kustomer", Kustomer);
