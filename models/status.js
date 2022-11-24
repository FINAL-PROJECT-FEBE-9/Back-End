const mongoose = require('mongoose')

const { Schema } = mongoose

const statusSchema = new Schema({
    nama_status: {
        type: String,
        required: true,
        enum: ['Sudah terkirim', 'pengecekan', 'diterima','ditolak']
    }
})

const Status = mongoose.model('Status', statusSchema)

module.exports = Status