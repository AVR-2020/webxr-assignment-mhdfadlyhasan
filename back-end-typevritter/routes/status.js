var {router} = require('./index')
router.get('/status', function (req, res) {
  res.send('Get Status')
})
module.exports = router