const express = require("express");
const router = express.Router();

const {
  info,
  register,
  login
} = require("../controller/auth.controller");

router.get("/info", info)
router.post("/register", register);
router.post("/login", login);

module.exports = router;