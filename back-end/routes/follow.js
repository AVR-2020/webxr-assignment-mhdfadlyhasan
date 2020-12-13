var {router} = require('./index')
router.get('/', function (req, res) {
  res.send('Home')
})
module.exports = router