const express = require('express');
const router = express.Router()

const bantuanRouter = require('./bantuan.router');
const dummyrouter = require('./dummy.router');
const userRouter = require('./user.router');


const authRouter = require('./auth.router')
const roleRouter = require('./role.router')

router.use('/auth', authRouter)
router.use('/roles', roleRouter)

console.log("masuk ke index routes");
router.use("/bantuan" ,bantuanRouter)
router.use("/dummy" ,dummyrouter)
router.use("/user", userRouter)

module.exports = router
