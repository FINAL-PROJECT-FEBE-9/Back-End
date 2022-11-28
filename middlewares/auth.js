const  jwt = require("jsonwebtoken");
const { getUserById } = require("../controller/auth.repository");


const authentication = async function(req, res, next) {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    
    next();
  } catch (error) {
    res.status(403).json({
      status: 403,
      message: "Anda belum Login",
    });
  };
};
const authorizationForAdmin = async function(req, res, next) {
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
    console.log("INI ADMIN");
    next();
  }
};

const authorizationForUser = async function(req, res, next) {
  const token = req.headers.authorization;
  const decode = jwt.decode(token);
  const user = await getUserById(decode.user_id);

  if (user.role.name !== 'User') {
    throw new Error()
  }
};

module.exports = {
  authentication,
  authorizationForAdmin,
  authorizationForUser
};
