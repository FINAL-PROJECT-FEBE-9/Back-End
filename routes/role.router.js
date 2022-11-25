const express = require("express");
const router = express.Router();
const { authentication, authorizationForAdmin, authorizationForUser } = require('../middlewares/auth')

const {
  create,
  list,
  detail,
  update,
  deleteData
} = require("../controller/role.controller");

router.get("/", list)
router.get("/:id", detail)
router.post("/", authentication, authorizationForAdmin, create);
router.put("/:id", authentication, authorizationForAdmin, update);
router.delete("/:id", authentication, authorizationForAdmin, deleteData);

module.exports = router;