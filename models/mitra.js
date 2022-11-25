const mongoose = require('mongoose')

const { Schema } = mongoose

const mitraSchema = new Schema({
    nama_mitra : {
        type: String,
        required: true
    },
    image_mitra: {
        type: String,
        required: true
    }
})

const Mitra = mongoose.model('Mitra', mitraSchema)

module.exports = Mitra