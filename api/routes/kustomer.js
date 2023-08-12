const router = require("express").Router();
const Kustomer = require("../models/Kustomer");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/create", async (req, res) => {
  const newKustomer = new Kustomer(req.body);

  try {
    const savedKustomer = await newKustomer.save();
    res.status(201).json(savedKustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedKustomer = await Kustomer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedKustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id/deletekustomer", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Kustomer.findByIdAndDelete(req.params.id);

    res.status(200).json("kustomer has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const kustomer = await Kustomer.findById(req.params.id);

    res.status(200).json(kustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    const kustomer = query
      ? await Kustomer.find().sort({ _id: -1 }).limit(2)
      : await Kustomer.find();

    res.status(200).json(kustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
