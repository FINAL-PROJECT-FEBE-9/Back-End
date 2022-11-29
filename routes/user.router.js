const express = require("express");
const router = express.Router();


const {
    Register,
    Getalluser,
    Getuserbyid,
    Updateuser,
    Deleteuser
} = require("../controller/user.controller");
const { authentication, authorizationForAdmin } = require('../middlewares/auth')


router.post("/create", Register);
router.get("/", authentication, authorizationForAdmin, Getalluser);
router.get("/:id", authentication, Getuserbyid);
router.put("/:id",authentication, Updateuser);
router.delete("/:id",authentication, authorizationForAdmin,  Deleteuser)




module.exports = router;