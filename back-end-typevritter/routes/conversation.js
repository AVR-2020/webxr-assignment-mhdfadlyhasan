const { router } = require('./index')
router.get('/conversation', function (req, res) {
  res.send('conversation')
})
module.exports = router
