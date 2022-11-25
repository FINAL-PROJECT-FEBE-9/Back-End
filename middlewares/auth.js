const  jwt = require("jsonwebtoken");
const { getUserById } = require("../controller/auth.repository");
const { CustomError } = require("../errors/customError");

const authentication = async function(req, res, next) {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    throw new CustomError('the token is invalid', 'TOKEN_INVALID', 403);
  }
};

const authorizationForAdmin = async function(req, res, next) {
  const token = req.headers.authorization;
  const decode = jwt.decode(token);
  const user = await getUserById(decode.user_id);

  if (user.role.name !== 'Admin') {
    throw new Error()
  }
};

const authorizationForUser = async function(req, res, next) {
  const token = req.headers.authorization;
  const decode = jwt.decode(token);
  const user = await getUserById(decode.user_id);

  if (user.role.name !== 'Admin') {
    throw new Error()
  }
};

module.exports = {
  authentication,
  authorizationForAdmin,
  authorizationForUser
};
