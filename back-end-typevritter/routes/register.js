const { router } = require('./index')
const User = require('../database/dbuser')

router.get('/register', function (req, res) {
  res.render('pages/register')
})
router.post('/register', function (req, res) {
  User.findOrCreate({
    where: {
      name: req.body.name
    },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).then(result => {
    // result[1] is false if entry is exist
    if (result[1]) res.send('succesfully creating')
    else res.send('This User already Exist!')
  }).catch(function (error) {
    res.send(error)
  })
})

module.exports = router
