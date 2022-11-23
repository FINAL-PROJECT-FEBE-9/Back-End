const mongoose = require('mongoose')

const { Schema } = mongoose

const statusSchema = new Schema({
    nama_status: {
        type: String,
        required: true,
    }
})

const Status = mongoose.model('Status', bantuanSchema)

module.exports = Status