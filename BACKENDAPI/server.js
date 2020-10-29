require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connection succesfull'))

app.use(express.json())

const routerLog = require('./routes/login')
const routerReg = require('./routes/register')
app.use('/login', routerLog)
app.use('/register', routerReg)

app.listen(3000, () => console.log('Server started'))
