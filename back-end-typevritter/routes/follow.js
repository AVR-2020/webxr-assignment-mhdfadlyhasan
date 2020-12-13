var {router} = require('./index')
router.get('/follow', function (req, res) {
  res.send('follow')
})
module.exports = router