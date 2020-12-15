const { router } = require('./index')
const Follow = require('../database/dbfollow')
router.post('/follow', function (req, res) {
  Follow.findOrCreate({
    where: {
      following_user: req.body.following_user,
      to_follow_user: req.body.to_follow_user
    },
    defaults: {
      following_user: req.body.following_user,
      to_follow_user: req.body.to_follow_user
    }
  }).then(result => {
    // result[1] is false if entry is exist
    if (result[1]) res.send('succesfully following')
    else res.send('Already following')
  })
})
router.post('/unfollow', function (req, res) {
  Follow.destroy({
    where: {
      following_user: req.body.following_user,
      to_follow_user: req.body.to_follow_user
    }
  }).then(result => {
    if (!result) res.send('Failed to Unfollow!')
    else res.send('Success')
  }).catch(error => {
    res.send(error)
  })
})
module.exports = router
