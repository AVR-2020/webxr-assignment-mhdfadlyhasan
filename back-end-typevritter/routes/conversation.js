const { router } = require('./index')
const { Op } = require('sequelize')
const Conversation = require('../database/dbconversation')
router.get('/conversation', function (req, res) {
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

// router.post('/conversation', function (req, res) {
//   Conversation.findOrCreate({
//     where: {
//       [Op.or]: [
//         { user_1: req.body.user_1 },
//         { user_2: req.body.user_2 }
//       ]
//     },
//     defaults: {
//       user_1: req.body.user_1,
//       user_2: req.body.user_2
//     }
//   }).then(result => {
//     // result[1] is false if entry is exist
//     if (result[1]) res.send('succesfully creating')
//     else res.send('Already have new conversation')
//   }).catch(function (error) {
//     res.send(error)
//   })
// })

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
