const express = require('express')
const routerLog = express.Router()
const user = require('../models/user')

async function getUser (req, res, next) {
  let userSearch
  try {
    userSearch = await user.findById(req.params.email + req.params.passwd)
    if (userSearch == null) {
      return res.status(404).json({ found: 'false' })
    } else {
      return res.status(404).json({ found: 'true' })
    }
  } catch (err) {
    return res.status(500).json({ message: 'Server error' })
  }
}
// get all
routerLog.get('/', (req, res) => {
  res.send('Invalid request, must include email and password')
})

// get one
routerLog.get('/:email/:passwd', getUser, (req, res) => {
  res.send(res.user.userData)
})

module.exports = routerLog
