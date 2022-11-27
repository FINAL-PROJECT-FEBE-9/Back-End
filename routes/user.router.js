const express = require("express");
const router = express.Router();

console.log("Sudah masuk user routes")
const {
    Register,
    Getalluser,
    Getuserbyid,
    Updateuser,
    Deleteuser
} = require("../controller/user.controller");


router.post("/create", Register);
router.get("/", Getalluser);
router.get("/:id", Getuserbyid);
router.put("/:id", Updateuser);
router.delete("/:id", Deleteuser)




module.exports = router;