const { router } = require('./index')
const Status = require('../database/dbstatus')

router.get('/home', async function (req, res) {
  console.log(req.session.user)
  const result = await Status.findAll()
  res.render('pages/index', { status: result })
})

router.get('/about', function (req, res) {
  res.send('about')
})
module.exports = router
