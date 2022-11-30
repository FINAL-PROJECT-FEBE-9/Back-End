const  jwt = require("jsonwebtoken");
const { getUserById } = require("../controller/auth.repository");
require('dotenv').config()

const authentication = async function(req, res, next) {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    res.status(403).json({
      status: 403,
      message: "Anda belum Login / Tidak memiliki Akses",
    });
  }
};

const authorizationForAdmin = async function(req, res, next) {
  try{
    const token = req.headers.authorization;
  const decode = jwt.decode(token);
  const user = await getUserById(decode.user_id);

  
  if (user.role.name !== 'Admin') {
    res.status(401).json({
      status: 401,
      message: "ANDA BUKAN ADMIN",
    });
  }
  else {
    next();
  }
  }catch(err){
    res.status(400).json({
      status:400,
      message :"Anda bukan User ataupun Admin",
      Keterangan : err
    })
  }
  
};

const authorizationForUser = async function(req, res, next) {

  try{
    const token = req.headers.authorization;
    const decode = jwt.decode(token);
    const user = await getUserById(decode.user_id);

  
    if (user.role.name !== 'User') {
      res.status(401).json({
        status: 401,
        message: "ANDA BUKAN USER",
      });
    }
    else {
      next();
    }
    }catch(err){
      res.status(401).json({
        status:400,
        message :"Anda bukan User ataupun Admin",
        Keterangan : err
      })
    }
};

module.exports = {
  authentication,
  authorizationForAdmin,
  authorizationForUser
};