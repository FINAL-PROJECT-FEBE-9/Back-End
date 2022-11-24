const express = require("express");
const router = express.Router();

const {
  getAllPengajuan,
  addBantuan,
  addPengajuan,
  addStatus,
  addUser
} = require("../controller/pengajuan.controller");

router.get("/", getAllPengajuan);
router.post("/bantuan", addBantuan);
router.post("/pengajuan", addPengajuan)
router.post("/status", addStatus)
router.post("/user", addUser)


module.exports = router;