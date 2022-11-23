const express = require('express');
const router = express.Router()

const bantuanRouter = require('./bantuan.router');


router.use("/bantuan" ,bantuanRouter)


module.exports = router
