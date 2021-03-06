const { router } = require('./index')
const User = require('../database/dbuser')

router.get('/login', function (req, res) {
  res.render('pages/login')
})

router.post('/login', function (req, res) {
  User.findOne({ where: { name: req.body.name, password: req.body.password } }).then(function (object) {
    if (object) {
      console.log(object)
      req.session.user = object
      res.send('success')
    } else res.send('wrong login!')
  }).catch(function (error) {
    console.log(error)
    res.send(error)
  })
})

router.post('/test', function (req, res) {
  console.log(req.session.User)
  res.send('ok')
})

module.exports = router
