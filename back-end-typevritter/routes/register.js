const { router } = require('./index')
const User = require('../database/dbuser')
router.post('/register', function (req, res) {
  try {
    User.create({ name: req.body.name, password: req.body.password })
    res.send('success')
  } catch (error) {
    res.send('error')
  }
})
module.exports = router
