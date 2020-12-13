// node server
const Status = require('./routes/status')
const User = require('./routes/user')
const Follow = require('./routes/follow')
const Chat = require('./routes/chat')
const Conversation = require('./routes/conversation')
const Home = require('./routes/home')
const Register = require('./routes/register')
const express = require('express')
const app = express()
const port = 3000

const routes = [
  ['/', Home],
  ['/chat', Chat],
  ['/conversation', Conversation],
  ['/follow', Follow],
  ['/user', User],
  ['/status', Status],
  ['/register', Register] // not the best implementation, first entry is not used
]
routes.forEach(function (routes) {
// basicly read left and right array, not the best implementation but good enuff
  app.use(routes[0], routes[1])
})

/* Listen */
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
