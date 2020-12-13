const { router } = require('./index')
router.get('/chat', function (req, res) {
  res.send('chat')
})
module.exports = router
