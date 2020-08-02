const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const findUser = require('../../findUser')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const userInfo = req.body
  const result = findUser(userInfo)
  console.log(result)
  if (result) {
    res.render('welecome', { result })
  }
  else {
    res.render('index')
  }
})
module.exports = router