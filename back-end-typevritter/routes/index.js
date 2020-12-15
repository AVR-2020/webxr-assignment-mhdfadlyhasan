const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))

// uncommment this is you start working the front-end, or if you figure out how to session in postman
// not the best implementation, but it works!
// router.use(function loggedIn (req, res, next) {
//   if (req.originalUrl === '/login') next()
//   else if (req.session.user == null) res.redirect('/login')
//   else next()
// })

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
exports.router = router
