const Mitra = require('../models/mitra')

module.exports= {
    getAllMitra: async (req, res) => {
        try{
            const mitra = await Mitra.find()

            res.status(200).json({
                status:200,
                message: "berhasil mengambil data mitra",
                data: mitra
            })
        }catch(err){

            res.status(404).json({
                status: 404,
                message: "not found"
            })
        }
    },

    getMitraByID: async (req, res) => {
        try{
            const { id } = req.params
            const mitra = await Mitra.findById(id)

            res.status(200).json({
                status:200,
                message: `berhasil mendapatkan data mitra dengan id ${id}`,
                data: mitra
            })
        }catch(err){
            res.status(404).json({
                status:404,
                message: "not found",
            })
        }
    },
    addMitra: async (req, res) => {
        try{
            const {nama_mitra, image_mitra} = req.body

            const isMitraExist = await Mitra.findOne( {nama_mitra} )

            if(isMitraExist){
                return res.status(409).json({
                    message: "Mitra Already Exist!"
                })
            }

            const mitra = await Mitra.create({
                nama_mitra,
                image_mitra
            })

            res.status(201).json({
                status:201,
                message: "berhasil menambahkan mitra",
                data: mitra
            })
        }catch(err){
            res.status(401).json({
                status: 401,
                message: "failed create data"
            })
        }
    },

    updateMitra: async (req, res) => {
        try{
            const { id } = req.params

            const result = await Pengajuan.findByIdAndUpdate(id, 
                {nama_mitra: req.body.nama_mitra},
                {image_mitra: req.body.image_mitra})

            res.status(201).json({
                status: 201,
                message: `mitra berhasil diupdate dengan id ${id}`,
                data: result
            })
        }catch(err){
            res.status(404).json({
                status:404,
                message: "not found",
            })
        }
    },
    deleteMitra: async (req, res) => {
        try{
            const { id } = req.params
            
            const mitra = await Mitra.findByIdAndDelete(id)

            res.status(200).json({
                status: 200,
                message: `pengajuan dengan id ${id} berhasil dihapus`,
                data: mitra
            })
        }catch(err){
            res.status(404).json({
                status:404,
                message: "not found",
            })
        }
    }
}