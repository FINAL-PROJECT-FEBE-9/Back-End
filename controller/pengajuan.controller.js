const Pengajuan = require('../models/pengajuan')
const User = require('../models/user')

module.exports = {
    getAllPengajuan: async (req, res, next) => {
        try{
            const pengajuan = await Pengajuan.find()
            const user = await User.find({}).populate({path:"role",match:{name:"User"}}).exec();
            let data_user = []

            user.forEach(item => {
                if(item.role !== null){
                    data_user.push({username: item.username, id: item.id_bantuan} )
                }
            });
            

            res.status(200).json({
                status:200,
                message: "berhasil mendapatkan data pengajuan",
                data : pengajuan,
                user : data_user, 
            })

        }catch(err){
            res.status(404).json({
                status: 404,
                message: "not found"
            })
        }
        
    },

    getPengajuanByUserID: async (req, res) => {
        try{
            const { user_id } = req.params
            const pengajuan = await Pengajuan.find({id_user : user_id})

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

            const dokumenExist = await Pengajuan.findOne( {id_bantuan} )

            if(dokumenExist){
                return res.status(400).json({
                    "message": "Anda telah melakukan pengajuan ke bantuan ini"
                })
            }else{
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
            }
            
        }catch(err){
            res.status(401).json({
                status: 400,
                message: "failed create data"
            })
        }
        
    },

    updatePengajuan: async (req, res) => {
        try{
            const { id } = req.params
            
            await Pengajuan.findByIdAndUpdate(id, 
                {dokumen : req.body.dokumen})

            const updatedDokumen = await Pengajuan.findById(id)

            res.status(202).json({
                status: 202,
                message: "berhasil update pengajuan",
                data: updatedDokumen
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

            await Pengajuan.findByIdAndUpdate(id, 
                {status: req.body.status})

            const updatedStatus = await Pengajuan.findById(id)
            res.status(201).json({
                status: 201,
                message: "status has been updated",
                data: updatedStatus
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
