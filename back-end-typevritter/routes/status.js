const { router } = require('./index')
const Status = require('../database/dbstatus')
router.get('/status', function (req, res) {
  const statusBaru = async function (req, res) {
    try {
      const result = await Status.findAll()
      res.send(result)
    } catch (error) {
      res.send(error)
    }
  }
  statusBaru(req, res)
})

router.post('/status', function (req, res) {
  try {
    Status.create({ status_sender: req.body.id_sender, content: req.body.content })
    res.send('success')
  } catch (error) {
    res.send('error')
  }
})
module.exports = router
