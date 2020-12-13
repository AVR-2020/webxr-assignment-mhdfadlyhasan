// const ModelUser = require('../database/dbuser');
const { router } = require('./index')
router.get('/user', function (req, res) {
  res.send('user')
})
module.exports = router
