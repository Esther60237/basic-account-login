const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})
router.post('/', (req, res) => {
  res.render('welecome')
})



module.exports = router