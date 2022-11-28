const express = require("express");
const router = express.Router();
const { authentication, authorizationForAdmin, authorizationForUser } = require('../middlewares/auth')
const {info} = require ('../controller/auth.controller')

const {
  getAllPengajuan,
  getPengajuanByUserID,
  getPengajuanByID,
  addPengajuan,
  updatePengajuan,
  updateStatusPengajuan,
  deletePengajuan
} = require("../controller/pengajuan.controller");

router.get("/",authentication, authorizationForAdmin, getAllPengajuan); 
router.get("/:user_id",authentication, getPengajuanByUserID)  
router.get("/:id",authentication,authorizationForAdmin, getPengajuanByID); 
router.post("/", authentication,addPengajuan)
router.put("/:id",authentication, authorizationForUser ,updatePengajuan)  
router.put("/admin/:id",authentication,authorizationForAdmin, updateStatusPengajuan) 
router.delete("/:id", authentication,deletePengajuan)


module.exports = router;

