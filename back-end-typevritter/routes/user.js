// const ModelUser = require('../database/dbuser');
const { router } = require('./index')
const User = require('../database/dbuser')
const { Op } = require('sequelize')
router.post('/user', function (req, res) {
  User.findAll({
    where: {
      name: {
        [Op.like]: `${req.body.name}%`
      }
    }
  }).then(function (object) {
    if (object) {
      res.send(object)
    } else res.send('Noone has that name!')
  }).catch(function (error) {
    res.send(error)
  })
})
module.exports = router
