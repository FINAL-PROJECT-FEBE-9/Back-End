const express = require('express')
const app = express()

const allRoutes = require('./routes')

app.use(allRoutes)

const db = require('./config/db')
app.use(express.json())

db.then(() => {
    console.log('success connect to db');
}).catch((err) => {
    console.log(err);
})

const PORT = 3000

app.listen(PORT, () => 
    console.log(`Server is doing well on port ${PORT}!`
))
