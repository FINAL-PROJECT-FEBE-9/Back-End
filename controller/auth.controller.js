const jwt = require("jsonwebtoken");

const { CustomError } = require("../errors/customError");
const { register, getUserByUsername, getUserById, updateRole } = require("./auth.repository");
const { getRoleByName } = require('./role.repository')
require('dotenv').config()

require('dotenv').config()

module.exports = {
  info: async function (req,res) {
    const token = req.headers.authorization;
    const decode = jwt.decode(token);

    const user = await getUserById(decode.user_id);
    res.json({
      data: user,
      token: token
    })
  },
  info2 : async function (req,res) {
    const token = req.headers.authorization;
    const decode = jwt.decode(token);
    console.log("")
    res.status(200).json({
      message: "sudah masuk"
    })
  },
 
  register: async function (req, res) {
    if (req.body.role !== null && req.body.role !== '') {
      req.body.role = (await getRoleByName(req.body.role))._id
    } else {
      req.body.role = (await getRoleByName('User'))._id
    }
    await register(req.body.username, req.body.password, req.body.role);
  
    res.json({
      status: 'registered!'
    });
  },

  changeRole: async function (req, res) {
    if (req.body.role !== null && req.body.role !== '') {
      req.body.role = (await getRoleByName(req.body.role))._id
    } else {
      req.body.role = (await getRoleByName('User'))._id
    }

    await updateRole(req.params.id, req.body.role)
    res.json({
      status: 'role changed!'
    });
  },

  login: async function (req, res) {
    const user = await getUserByUsername(req.body.username);
  
    const passwordFromClient = req.body.password;
    const passwordFromDb = user.password;
  
    if (passwordFromClient !== passwordFromDb) {
      throw new CustomError('wrong auth', 'AUTH_FAILED', 403);
    }
  
    const token = jwt.sign({
      user_id: user.id
    }, process.env.JWT_SECRET);
  
    res.json({
      data: user,
      token: token
    })
  }
};
