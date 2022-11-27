const express = require('express');
const router = express.Router()

const bantuanRouter = require('./bantuan.router');
const dummyrouter = require('./dummy.router');
const pengajuanRouter = require('./pengajuan.router')
const mitraRouter = require('./mitra.router')
const userRouter = require('./user.router');
const authRouter = require('./auth.router')
const roleRouter = require('./role.router')

router.use("/pengajuan", pengajuanRouter)
router.use("/mitra", mitraRouter)
router.use('/auth', authRouter)
router.use('/roles', roleRouter)
router.use("/bantuan" ,bantuanRouter)
router.use("/dummy" ,dummyrouter)
router.use("/user", userRouter)





module.exports = router
