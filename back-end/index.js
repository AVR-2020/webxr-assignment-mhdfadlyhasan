// node server
const Status = require('./routes/status')
const User = require('./routes/user')
const Follow = require('./routes/follow')
const Chat = require('./routes/chat')
const Conversation = require('./routes/home')
const Home = require('./routes/home')
var express = require('express')
var app = express()
const port = 3000

var routes=[
    ['/', Home],
    ['/chat', Chat],
    ['/conversation', Conversation],
    ['/follow', Follow],
    ['/user', User],
    ['/status', Status],

]
routes.forEach(function(routes) {
    //basicly read left and right array, not the best implementation but good enuff
    app.use(routes[0],routes[1]);
  });

/* Listen */
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  })