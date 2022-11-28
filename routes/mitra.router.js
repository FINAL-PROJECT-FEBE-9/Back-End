const express = require("express");
const router = express.Router();

const {
  getAllMitra,
  getMitraByID,
  addMitra,
  updateMitra,
  deleteMitra
} = require("../controller/mitra.controller");

router.get("/", getAllMitra);
router.get("/:id", getMitraByID);
router.post("/", addMitra)
router.put("/:id", updateMitra)
router.delete("/:id", deleteMitra)


module.exports = router;