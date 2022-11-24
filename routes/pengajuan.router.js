const express = require("express");
const router = express.Router();

const {
  getAllPengajuan,
  getPengajuanByID,
  addPengajuan,
  updatePengajuan,
  updateStatusPengajuan,
  deletePengajuan
} = require("../controller/pengajuan.controller");

router.get("/", getAllPengajuan);
router.get("/:id", getPengajuanByID);
router.post("/", addPengajuan)
router.put("/:id", updatePengajuan)
router.put("/admin/:id", updateStatusPengajuan)
router.delete("/:id", deletePengajuan)


module.exports = router;