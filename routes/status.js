const { router } = require('./index')
const Status = require('../database/dbstatus')
const User = require('../database/dbuser')
router.get('/get_status', function (req, res) {
  Status.findAll({
    include: [
      {
        model: User
      }
    ]
  })
    .then(result => {
      res.send(result)
    }).catch(error => {
      res.send(error)
    })
})
router.get('/status', function (req, res) {
  Status.findAll({
    include: [
      {
        model: User
      }
    ]
  })
    .then(result => {
      res.render('pages/status', { statuses: result, user_id: req.session.user.id })
    }).catch(error => {
      res.send(error)
    })
})
router.post('/status', function (req, res) {
  try {
    Status.create({ status_sender: req.session.user.id, content: req.body.content })
    res.send('success')
  } catch (error) {
    res.send('error')
  }
})

router.post('/del_status', function (req, res) {
  try {
    Status.destroy({
      where: {
        id: req.body.id_status
      }
    })
    res.send('success')
  } catch (error) {
    res.send('error')
  }
})
module.exports = router
