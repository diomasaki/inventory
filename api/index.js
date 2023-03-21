const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const produkRoute = require("./routes/produk");
const kustomerRoute = require("./routes/kustomer");
const resellerRoute = require("./routes/reseller");
const kategoriRoute = require("./routes/kategori");
const produkMasukRoute = require("./routes/produkMasuk");
const produkKeluarRoute = require("./routes/produkKeluar");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Backend Server Is Running!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/kategori", kategoriRoute);
app.use("/api/produk", produkRoute);
app.use("/api/kustomer", kustomerRoute);
app.use("/api/reseller", resellerRoute);
app.use("/api/produkmasuk", produkMasukRoute);
app.use("/api/produkkeluar", produkKeluarRoute);

app.listen(process.env.PORT || 8800, () => {
  console.log("Database Is Connected!");
});
