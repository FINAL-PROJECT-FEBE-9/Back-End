const express = require('express');
const router = express.Router()

const bantuanRouter = require('./bantuan.router');
const dummyrouter = require('./dummy.router');
const pengajuanRouter = require('./pengajuan.router')
const mitraRouter = require('./mitra.router')

router.use("/bantuan" ,bantuanRouter)
router.use("/dummy" ,dummyrouter)
router.use("/pengajuan", pengajuanRouter)
router.use("/mitra", mitraRouter)

module.exports = router
