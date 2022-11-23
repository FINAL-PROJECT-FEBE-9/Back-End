const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({

    username : {
        type: String,
        required: [true, 'Nama belum dimasukkan']
    },
    email : {
        type: String,
        required: [true, 'Email belum dimasukkan']
    },
    password : {
        type: String,
        required: [true, 'Password belum dimasukkan']
    },
    image: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Admin', 'User']
    },
    token: {
        type: String,
        required: [true, 'Token belum ada']
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User