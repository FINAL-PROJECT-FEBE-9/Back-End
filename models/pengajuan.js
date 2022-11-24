const mongoose = require('mongoose')

const { Schema } = mongoose

const pengajuanSchema = new Schema({

    dokumen: {
        type: String,
        required: [true, 'Dokumen belum dimasukkan']
    },
    id_user: {
        type: mongoose.ObjectId, 
        ref: "User"
    },
    id_bantuan: {
        type: mongoose.ObjectId,
        ref: "Bantuan"
    },
    status: {
        type: String,
        enum: ['Menunggu diseleksi', 'Ditolak', 'Diseleksi', 'Dikirim']
    }
})

const Pengajuan= mongoose.model('Pengajuan', pengajuanSchema)

module.exports = Pengajuan