var {router} = require('./index')
router.get('/user', function (req, res) {
  res.send('user')
})
module.exports = router