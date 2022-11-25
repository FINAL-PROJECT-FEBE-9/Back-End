const user = require("../models/user")

console.log("Sudah masuk user controller")
module.exports = {
    Register: async (req, res) => {
        try{
            const userdata = req.body
            const buatUser = await user(userdata)
            buatUser.save()

            res.json({
                message : "Berhasil melakukan Registrasi",
                status  : 201
            })
        
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

            res.json({
                status : 200,
                message : "Berhasil ambil list pengguna",
                data: User
            })
        } catch(err) {
            res.json({
                status : 404,
                message : "Gagal ambil list pengguna",
            })
        }
    },

    Getuserbyid: async (req, res) => {
        try{
            const userid = req.params.id
            const datauser = await user.findById(userid)

            res.json({
                status : 200, 
                message : "Berhasil ambil data pengguna",
                data : datauser
            })
        } catch(err) {
            res.json({
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
            res.json({
                status : 200,
                message : "Berhasil update data pengguna",
                data : cekupdate
            })
        } catch(err) {
            res.json({
                status : 404,
                message : "Gagal merubah data pengguna"
            })
        }
    },

    Deleteuser: async(req, res) => {
        try{
            const userid = req.params.id
            const hapususer = await user.findById(userid)
            hapususer.remove()

            res.json({
                status : 200,
                message : "Berhasil hapus data pengguna"
            })
        } catch(err) {
            res.json({
                status : 404,
                message : "Gagal hapus data pengguna"
            })
        }
    }
}