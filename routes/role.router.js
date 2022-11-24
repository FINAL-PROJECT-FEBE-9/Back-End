const express = require("express");
const router = express.Router();

const {
  create,
  list,
  detail,
  update,
  deleteData
} = require("../controller/role.controller");

router.get("/", list)
router.get("/:id", detail)
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteData);

module.exports = router;