const express = require('express')
const routerReg = express.Router()
const User = require('../models/user')

routerReg.post('/', async (req, res) => {
  const UserN = new User({

    _id: req.body.email + req.body.passwd,
    email: req.body.email,
    passwd: req.body.passwd,
    userType: req.body.userType
  })

  
  try {
    const NewUser = await UserN.save()
    res.status(201).json(NewUser)
  } catch (err) {
    res.status(400).json({ message: "User already exists" })
  }
})

module.exports = routerReg
