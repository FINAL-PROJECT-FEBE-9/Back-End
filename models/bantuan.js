const mongoose = require('mongoose')

const { Schema } = mongoose

const bantuanSchema = new Schema({
    nama_bantuan: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_bantuan: {
        type: String,
        required: true
    },
    id_mitra: {
        type: mongoose.ObjectId,
        ref:"Mitra"
    },
    id_jb: {
        type: mongoose.ObjectId,
        ref:"Jenis_Bantuan"
    }
})

const Bantuan = mongoose.model('Bantuan', bantuanSchema)

module.exports = Bantuan