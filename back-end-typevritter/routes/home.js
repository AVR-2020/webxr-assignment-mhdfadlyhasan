const { router } = require('./index')

router.get('/', function (req, res) {
  res.render('pages/index')
  // res.sendFile(path.join(__dirname, '/index.html'))

  // try pug https://codeforgeek.com/render-html-file-expressjs/
})

router.get('/about', function (req, res) {
  res.send('about')
})
module.exports = router
