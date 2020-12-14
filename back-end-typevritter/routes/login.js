const { router } = require('./index')
const User = require('../database/dbuser')
router.post('/login', function (req, res) {
  User.findOne({ where: { name: req.body.name, password: req.body.password } }).then(function (object) {
    if (object) {
      req.session.user = object
      res.send(req.session)
    } else res.send('wrong login creditensials')
  }).catch(function (error) {
    res.send(error)
  })
})
module.exports = router
