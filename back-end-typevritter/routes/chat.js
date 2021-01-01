const { router } = require('./index')
const Chat = require('../database/dbchat')
const User = require('../database/dbuser')
router.get('/chat', function (req, res) {
  res.render('pages/chat', {
    user_id: req.session.user.id, name: req.session.user.name
  })
})

router.post('/get_chat', function (req, res) {
  Chat.findAll({
    where: {
      conversation: req.body.conversation
    },
    include: [
      {
        model: User
      }
    ]
  })
    .then(result => {
      res.send(result)
    }).catch(error => {
      console.log('Error')
      res.send(error)
      console.log(error)
    })
})

router.post('/chat', function (req, res) {
  Chat.create({
    conversation: req.body.conversation,
    content: req.body.content,
    user_sender: req.session.user.id
  }).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
module.exports = router
