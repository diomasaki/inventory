const router = require("express").Router();
const ProdukMasuk = require("../models/ProdukMasuk");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/create", verifyTokenAndAdmin, async (req, res) => {
  const newProductMasuk = new ProdukMasuk(req.body);

  try {
    const savedProdukMasuk = await newProductMasuk.save();
    res.status(201).json(savedProdukMasuk);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedProdukMasuk = await ProdukMasuk.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProdukMasuk);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id/deleteproductmasuk", verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProdukMasuk.findByIdAndDelete(req.params.id);

    res.status(200).json("productmasuk has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const produkMasuk = await ProdukMasuk.findById(req.params.id);

    res.status(200).json(produkMasuk);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    const produkMasuk = query
      ? await ProdukMasuk.find().sort({ _id: -1 }).limit(2)
      : await ProdukMasuk.find();

    res.status(200).json(produkMasuk);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
