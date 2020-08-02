const mongoose = require('mongoose')
const { db } = require('../models/user')

mongoose.connect('mongodb://localhost/basic-account-login')

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db