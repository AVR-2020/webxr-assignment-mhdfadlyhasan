const { router } = require('./index')
router.get('/', function (req, res) {
  res.send('Home')
})

router.get('/about', function (req, res) {
  res.send('about')
})
module.exports = router
