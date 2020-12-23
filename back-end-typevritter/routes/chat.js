const { router } = require('./index')
const Chat = require('../database/dbchat')
router.get('/chat', function (req, res) {
  res.render('pages/chat', { user_id: 3 })
})

router.post('/get_chat', function (req, res) {
  Chat.findAll({
    where: {
      conversation: req.body.conversation
    }
  })
    .then(result => {
      if (result.length > 0) res.send(result)
      else res.send('Chat Empty!')
      console.log('result')
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
