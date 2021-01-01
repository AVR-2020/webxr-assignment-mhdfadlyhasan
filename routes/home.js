const { router } = require('./index')
const Status = require('../database/dbstatus')
const Chat = require('../database/dbchat')
const User = require('../database/dbuser')
const { Op } = require('sequelize')
const Conversation = require('../database/dbconversation')

router.get('/home', async function (req, res) {
  const statuses = await Status.findAll({
    include: [
      {
        model: User
      }
    ]
  })
    .then(result => {
      return result
    }).catch(error => {
      res.send(error)
    })
  const object = await Conversation.findAll({
    include: [
      {
        model: User,
        as: 'user1'
      },
      {
        model: User,
        as: 'user2'
      }
    ],
    where: {
      [Op.or]: [
        { user_1: req.session.user.id },
        { user_2: req.session.user.id }
      ]
    }
  }).then(function (object) {
    return object
  })
  res.render('pages/index', {
    conversations: object,
    user_id: req.session.user.id,
    name: req.session.user.name,
    statuses: statuses
  })
})

router.get('/about', function (req, res) {
  res.send('about')
})
module.exports = router
