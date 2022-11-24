const express = require('express');
const router = express.Router()

// const bantuanRouter = require('./bantuan.router');
const pengajuanRouter = require('./pengajuan.router')

// router.use("/bantuan" ,bantuanRouter)
router.use("/pengajuan", pengajuanRouter)

module.exports = router
