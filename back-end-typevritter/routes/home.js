const { router } = require('./index')
const path = require('path')
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
  // try pug https://codeforgeek.com/render-html-file-expressjs/
})

router.get('/about', function (req, res) {
  res.send('about')
})
module.exports = router
