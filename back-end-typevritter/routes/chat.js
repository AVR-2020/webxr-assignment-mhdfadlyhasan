const { router } = require('./index')
const Chat = require('../database/dbchat')

router.get('/chat', function (req, res) {
  Chat.findAll({
    where: {
      conversation: req.body.conversation
    }
  })
    .then(result => {
      if (result.length > 0) res.send(result)
      else res.send('Chat Empty!')
    }).catch(error => {
      res.send(error)
    })
})

router.post('/chat', function (req, res) {
  console.log(req.body.content)
  Chat.create({
    conversation: req.body.conversation,
    content: req.body.content,
    user_sender: req.body.user_sender
  }).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})

module.exports = router
