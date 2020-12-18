const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))

// uncommment this is you start working the front-end, or if you figure out how to session in postman
// not the best implementation, but it works!
router.use(function loggedIn (req, res, next) {
  console.log(req.originalUrl)
  console.log(req.session.user)
  // monstrosity lol
  if (req.session.user == null && req.originalUrl === '/register') next()
  else if (req.session.user == null && req.originalUrl !== '/login') res.redirect('/login')
  else if (req.session.user && (req.originalUrl === '/login' || req.originalUrl === '/register')) res.redirect('/home')
  else next()
})

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
exports.router = router
