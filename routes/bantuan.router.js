const express = require("express");
const router = express.Router();

const {
  getAllbantuan,
  getbantuanByID,
  addbantuan,
  deletebantuanByID,
  updatebantuanByID,
  login,
} = require("../controller/bantuan.controller");

router.get("/", getAllbantuan);
router.get("/:id", getbantuanByID);
router.post("/", addbantuan);
router.delete("/:id", deletebantuanByID);
router.put("/:id", updatebantuanByID);


module.exports = router;