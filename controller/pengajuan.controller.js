const Pengajuan = require('../models/pengajuan')
const User = require('../models/user')

module.exports = {
    getAllPengajuan: async (req, res) => {
        try{
            const pengajuan = await Pengajuan.find()
            const user_data = await User.find()

            res.status(200).json({
                status:200,
                message: "berhasil mendapatkan data pengajuan",
                data : pengajuan, user_data
            })
        }catch(err){
            res.status(404).json({
                status: 404,
                message: "not found"
            })
        }
        
    },

    getPengajuanByID: async (req, res) => {
        try{
            const { id } = req.params
            const pengajuan = await Pengajuan.findById(id)

            res.status(200).json({
                status:200,
                message: "berhasil mendapatkan pengajuan",
                data: pengajuan
            })
        }catch(err){
            res.status(404).json({
                status:404,
                message: "not found",
            })
        }
       
    }, 

    addPengajuan: async (req, res) => {
        try{
            const {dokumen, id_user, id_bantuan, status} = req.body

            const pengajuan = await Pengajuan.create({
                dokumen,
                id_user,
                id_bantuan,
                status
            })
            
            res.status(201).json({
                status: 201,
                message: "pengajuan has been created",
                data: pengajuan
            })
        }catch(err){
            res.status(401).json({
                status: 401,
                message: "failed create data"
            })
        }
        
    },

    updatePengajuan: async (req, res) => {
        try{
            const { id } = req.params
            const result = await Pengajuan.findByIdAndUpdate(id, 
                {dokumen : req.body.dokumen})

            res.status(202).json({
                status: 202,
                message: "berhasil update pengajuan",
                data: result
            })

        }catch(err){
            res.status(404).json({
                status:404,
                message: "not found",
            })
        }   
    },

    updateStatusPengajuan: async (req, res) => {
        try{
            const { id } = req.params

            const result = await Pengajuan.findByIdAndUpdate(id, 
                {status: req.body.status})

            res.status(201).json({
                status: 201,
                message: "status has been updated",
                data: result
            })
        }catch(err){
            res.status(404).json({
                status:404,
                message: "not found",
            })
        }  
    },

    deletePengajuan: async (req, res) => {
        try{
            const { id } = req.params
            
            const pengajuan = await Pengajuan.findByIdAndDelete(id)

            res.status(200).json({
                status: 200,
                message: "pengajuan berhasil dihapus",
                data: pengajuan
            })
        }catch(err){
            res.status(404).json({
                status:404,
                message: "not found",
            })
        }
        
    }
}
