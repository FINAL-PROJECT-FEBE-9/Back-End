const express = require('express');
const router = express.Router()

const bantuanRouter = require('./bantuan.router');
const dummyrouter = require('./dummy.router');

console.log("masuk ke index routes");
router.use("/bantuan" ,bantuanRouter)
router.use("/dummy" ,dummyrouter)

module.exports = router
