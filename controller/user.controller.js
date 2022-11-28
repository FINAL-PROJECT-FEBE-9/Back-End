const user = require("../models/user")
const jwt = require("jsonwebtoken");
require("dotenv").config();


console.log("Sudah masuk user controller")
module.exports = {
    Register: async (req, res) => {
        try{
            const userdata = { username, email, password, image  } = req.body
            const val1 = true
            if (!(username && 
               email &&
               password &&
               image)) {
                res.status(400).json({
                    message : "Semua data harus diisi",
                    status : 400
                });
               val1 = false
            } 
            const sudahada = await user.findOne({ email: userdata.email }) 
            const val2 = true
            if(sudahada){
                res.status(400).json({
                    message: "Email sudah terdaftar",
                    status : 400
                })
                val2 = false
            }

            if(val1 == true || val2 == true) { 
                const buatUser = await user(userdata)
                
                buatUser.save()
                res.json({
                message : "Berhasil melakukan Registrasi",
                status  : 201
                })
            }  
            
        } catch(err) {
            console.log(err)
            res.json({
                message : "Gagal melakukan Registrasi",
                status  : 400
            })
        }
        
    },

    Getalluser: async (req, res) => {

        try{
            const User = await user.find()

            res.status(200).json({
                status : 200,
                message : "Berhasil ambil list pengguna",
                data: User
            })
        } catch(err) {
            res.status(404).json({
                status : 404,
                message : "Gagal ambil list pengguna",
            })
        }
    },

    Getuserbyid: async (req, res) => {
        try{
            const userid = req.params.id
            const datauser = await user.findById(userid)
            const result = {
                username : datauser.username,
                email : datauser.email,
                image : datauser.image
            }
            res.status(200).json({
                status : 200, 
                message : "Berhasil ambil data pengguna",
                data : result
            })
        } catch(err) {
            res.status(404).json({
                status : 404,
                message : "Gagal ambil data pengguna"
            })
        }
    },

    Updateuser: async(req, res) => {
        try{
            const userid = req.params.id
            const datauser = req.body
            await user.findByIdAndUpdate(userid, datauser)
            
            const cekupdate = await user.findById(userid)
            const result = {
                username : cekupdate.username,
                email : cekupdate.email,
                image : cekupdate.image
            }
            res.status(200).json({
                status : 200,
                message : "Berhasil update data pengguna",
                data : result
            })
        } catch(err) {
            res.status(404).json({
                status : 404,
                message : "Gagal merubah data pengguna",
                keterangan : err
            })
        }
    },

    Deleteuser: async(req, res) => {
        try{
            const userid = req.params.id
            const hapususer = await user.findById(userid)
            hapususer.remove()

            res.status(200).json({
                status : 200,
                message : "Berhasil hapus data pengguna"
            })
        } catch(err) {
            res.status(404).json({
                status : 404,
                message : "Gagal hapus data pengguna"
            })
        }
    }
}