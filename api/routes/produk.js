const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Produk = require("../models/Produk");

//CREATE
router.post("/create", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Produk(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Produk.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id/deleteproduct", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Produk.findByIdAndDelete(req.params.id);

    res.status(200).json("product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const produk = await Produk.findById(req.params.id);

    res.status(200).json(produk);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  const query = req.query.new;

  try {
    const produk = query
      ? await Produk.find().sort({ _id: -1 }).limit(2)
      : await Produk.find();

    res.status(200).json(produk);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
