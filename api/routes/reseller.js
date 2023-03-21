const router = require("express").Router();
const ProdukMasuk = require("../models/ProdukMasuk");
const Reseller = require("../models/Reseller");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/create", async (req, res) => {
  const newReseller = new Reseller(req.body);

  try {
    const savedReseller = await newReseller.save();
    res.status(201).json(savedReseller);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedReseller = await Reseller.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedReseller);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id/deletereseller", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Reseller.findByIdAndDelete(req.params.id);

    res.status(200).json("reseller has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const reseller = await Reseller.findById(req.params.id);

    res.status(200).json(reseller);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    const reseller = query
      ? await Reseller.find().sort({ _id: -1 }).limit(5)
      : await Reseller.find();

    res.status(200).json(reseller);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
