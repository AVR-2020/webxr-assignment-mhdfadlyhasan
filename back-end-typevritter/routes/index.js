const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
exports.router = router
