const express = require("express");
const router = express.Router();

console.log("Sudah masuk dummy routes")
const {
  adduser,
  getalldata,
  addjenis,
  addmitra,
  addbantuan,
  addpengajuan
} = require("../controller/dummy.controller");


router.post("/adduser", adduser);
router.get("/", getalldata)
router.post("/addjenis", addjenis);
router.post("/addmitra", addmitra);
router.post("/addbantuan", addbantuan);
router.post("/addpengajuan", addpengajuan);



module.exports = router;