var {router} = require('./index')
var Status = require('../database/dbstatus')
router.get('/status', function (req, res) {
  // console.log(req.body.name)
    const status_baru = async function (req, res){
      try {
        var result = await Status.findAll()
        res.send(result)
      } catch (error) {
        res.send(error)
      }
    }
    status_baru(req, res);
})

router.post('/status', function (req, res) {
    try {
        const status_baru = Status.create({status_sender:req.body.id_sender,content:req.body.content})
        res.send('success')
    } catch (error) {
        res.send('error')    
    }
})
module.exports = router