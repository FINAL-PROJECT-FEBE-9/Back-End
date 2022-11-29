const mongoose = require('mongoose')
const db_url = `mongodb+srv://hafizh13:123@cluster0.t8joywr.mongodb.net/?retryWrites=true&w=majority}`
const db = mongoose.connect(db_url)

module.exports = db