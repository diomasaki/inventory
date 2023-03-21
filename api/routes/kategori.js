const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Produk = require("../models/Produk");
const Kategori = require("../models/Kategori");

//CREATE
router.post("/create", verifyTokenAndAdmin, async (req, res) => {
  const newKategori = new Kategori(req.body);

  try {
    const savedKategori = await newKategori.save();
    res.status(201).json(savedKategori);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedKategori = await Kategori.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedKategori);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id/deletekategori", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Kategori.findByIdAndDelete(req.params.id);

    res.status(200).json("kategori has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const kategori = await Kategori.findById(req.params.id);

    res.status(200).json(kategori);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    const kategori = query
      ? await Kategori.find().sort({ _id: -1 }).limit(2)
      : await Kategori.find();

    res.status(200).json(kategori);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
