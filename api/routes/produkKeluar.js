const router = require("express").Router();
const ProdukKeluar = require("../models/ProdukKeluar");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/create", verifyTokenAndAdmin, async (req, res) => {
  const newProductKeluar = new ProdukKeluar(req.body);

  try {
    const savedProduct = await newProductKeluar.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedProdukKeluar = await ProdukKeluar.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProdukKeluar);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id/deleteproductkeluar", verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProdukKeluar.findByIdAndDelete(req.params.id);

    res.status(200).json("productkeluar has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const produkKeluar = await ProdukKeluar.findById(req.params.id);

    res.status(200).json(produkKeluar);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  const query = req.query.new;

  try {
    const produkKeluar = query
      ? await ProdukKeluar.find().sort({ _id: -1 }).limit(2)
      : await ProdukKeluar.find();

    res.status(200).json(produkKeluar);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
