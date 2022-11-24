const Pengajuan = require('../models/pengajuan')
const Bantuan = require('../models/Bantuan')
const User = require('../models/User')
const Status = require('../models/status')

module.exports = {
    getAllPengajuan: async (req, res) => {
        const pengajuan = await Todo.find().populate("user", "name")

        res.json({
            message: "berhasil mendapatkan pengajuan",
            data : pengajuan
        })
    },
    addBantuan: async (req, res) => {
        const { nama_bantuan,description,image_bantuan,id_mitra,id_jb } = req.body 
       
        const bantuan = await Bantuan.create({
           nama_bantuan,
           description,
           image_bantuan,
           id_mitra,
           id_jb
        })

        res.status(201).json({
            data: bantuan,
            message: "bantuan has been created"
        })
    },
    addPengajuan: async (req, res) => {
        const {dokumen, id_user, id_bantuan, status} = req.body

        const pengajuan = await Pengajuan.create({
            dokumen,
            id_user,
            id_bantuan,
            status
        })
        
        res.status(201).json({
            data: pengajuan,
            message: "pengjuan has been created"
        })
    },

    addStatus: async (req, res) =>{
        
        const { nama_status } = req.body
       
        const status = await Status.create({
             nama_status
        })

        
        res.status(201).json({
            data: status,
            message: "status has been created"
        })
    },
    addUser: async (req, res) => {
        console.log("ini dari add user")
        const {username, email, password, image, role} = req.body

        const user = await User.create(
            {
                username,
                email,
                password,
                image,
                role
            }
        )

        
        res.status(201).json({
            data: user,
            message: "user has been created"
        })
    }
}
