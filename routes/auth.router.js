const express = require("express");
const router = express.Router();
const { authentication, authorizationForAdmin, authorizationForUser } = require('../middlewares/auth')

const {
  info,
  register,
  login
} = require("../controller/auth.controller");

router.get("/info", authentication, info)
router.post("/register", register);
router.post("/login", login);

module.exports = router;