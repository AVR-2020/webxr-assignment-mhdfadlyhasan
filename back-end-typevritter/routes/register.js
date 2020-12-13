var {router} = require('./index')
const User = require('../database/dbuser')
router.post('/register', function (req, res) {
    console.log(req.body.name)
    try {
        const user_baru = User.create({name:req.body.name,password:req.body.password})
        res.send('success')
    } catch (error) {
        res.send('error')    
    }
})
module.exports = router