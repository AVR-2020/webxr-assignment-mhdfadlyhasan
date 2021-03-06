const { router } = require('./index')
const { Op } = require('sequelize')
const Conversation = require('../database/dbconversation')

router.get('/all_conversation', function (req, res) {
  console.log(req.session.user.id)
  Conversation.findAll({
    where: {
      [Op.or]: [
        { user_1: req.session.user.id },
        { user_2: req.session.user.id }
      ]
    }
  }).then(function (object) {
    if (object.length > 0) res.send(object)
    else res.send('Conversation is empty!')
  }).catch(function (error) {
    res.send(error)
  })
})

router.post('/detail_conversation', function (req, res) {
  Conversation.findAll({
    where: {
      id: req.body.conversation
    }
  }).then(result => {
    console.log(result)
    res.send(result)
  }).catch(function (error) {
    res.send(error)
  })
})

router.post('/conversation', function (req, res) {
  Conversation.findOrCreate({
    where: {
      [Op.or]: [
        {
          [Op.and]: [
            { user_1: req.body.user_1 },
            { user_2: req.body.user_2 }
          ]
        },
        {
          [Op.and]: [
            { user_2: req.body.user_1 },
            { user_1: req.body.user_2 }
          ]
        }
      ]
    },
    defaults: {
      user_1: req.body.user_1,
      user_2: req.body.user_2
    }
  }).then(result => {
    res.send(result)
  }).catch(function (error) {
    res.send(error)
  })
})

router.delete('/conversation', function (req, res) {
  Conversation.destroy({
    where: {
      id: req.body.conversation_id
    }
  }).then(result => {
    res.send('succesfully Delete')
  }).catch(function (error) {
    res.send(error)
  })
})
module.exports = router
