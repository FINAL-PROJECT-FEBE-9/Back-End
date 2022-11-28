const express = require("express");
const router = express.Router();
const { authentication, authorizationForAdmin, authorizationForUser } = require('../middlewares/auth')

const {
  getAllbantuan,
  getbantuanByID,
  addbantuan,
  deletebantuanByID,
  updatebantuanByID,
} = require("../controller/bantuan.controller");



router.get("/", getAllbantuan);
router.get("/:id", getbantuanByID);
router.post("/",authentication, authorizationForAdmin, addbantuan);
router.delete("/:id",authentication,authorizationForAdmin, deletebantuanByID);
router.put("/:id",authentication,authorizationForAdmin, updatebantuanByID);


module.exports = router;