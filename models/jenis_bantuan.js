const mongoose = require('mongoose')

const { Schema } = mongoose

const jenisBantuanSchema = new Schema({
    nama_jenis : {
        type: String,
        required: true
    }
}) 

const Jenis_Bantuan = mongoose.model('Jenis_Bantuan', jenisBantuanSchema)

module.exports = Jenis_Bantuan