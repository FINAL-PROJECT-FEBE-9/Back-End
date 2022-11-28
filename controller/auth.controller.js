const jwt = require("jsonwebtoken");

const { CustomError } = require("../errors/customError");
const {
  register,
  getUserByUsername,
  getUserById,
  updateRole,
} = require("./auth.repository");
const { getRoleByName } = require("./role.repository");
require("dotenv").config();

require("dotenv").config();

module.exports = {
  info: async function (req, res) {
    const token = req.headers.authorization;
    const decode = jwt.decode(token);

    const user = await getUserById(decode.user_id);
    res.json({
      data: user,
      token: token,
    });
  },
  info2: async function (req, res) {
    const token = req.headers.authorization;
    const decode = jwt.decode(token);
    console.log("");
    res.status(200).json({
      message: "sudah masuk",
    });
  },

  register: async function (req, res) {
    try {
      if (req.body.role !== null && req.body.role !== "") {
        req.body.role = (await getRoleByName(req.body.role))._id;
      } 
      else {
        req.body.role = (await getRoleByName("User"))._id;
      }
      await register(req.body.username, req.body.password, req.body.role);

        res.status(201).json({
          status: 201,
          Message: "Anda berhasil terdaftar!",
        });


    } catch (error) {
      res.status(400).json({
        status: 400,
        Message: "Gagal Melakukan registrasi",
        keterangan: error
      });
    }
  },

  changeRole: async function (req, res) {
    if (req.body.role !== null && req.body.role !== "") {
      req.body.role = (await getRoleByName(req.body.role))._id;
    } else {
      req.body.role = (await getRoleByName("User"))._id;
    }

    await updateRole(req.params.id, req.body.role);
    res.json({
      status: "role changed!",
    });
  },

  login: async function (req, res) {
    try{
      const user = await getUserByUsername(req.body.username);
      if(user==null) {
        res.status(404).json({
          status: 404,
          Message: "Pengguna tidak ditemukan!"
        });
      }
      else {
        const passwordFromClient = req.body.password;
        const passwordFromDb = user.password;
    
        if (passwordFromClient !== passwordFromDb) {
          throw new CustomError("wrong auth", "AUTH_FAILED", 403);
        }
    
        const token = jwt.sign(
          {
            user_id: user.id,
          },
          process.env.JWT_SECRET
        );
    
        res.status(200).json({
          status:200,
          message:"Berhasil Login!",
          data: user,
          token: token,
        });
      }
    }catch(error){
      res.status(400).json({
        status: 400,
        Message: "Gagal Melakukan login",
        tambahan: error
      });
    }

  },
};
