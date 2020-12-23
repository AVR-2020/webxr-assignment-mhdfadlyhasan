// node server
const port = 3000
const Status = require('./routes/status')
const User = require('./routes/user')
const Follow = require('./routes/follow')
const Chat = require('./routes/chat')
const Conversation = require('./routes/conversation')
const Home = require('./routes/home')
const Register = require('./routes/register')
const Login = require('./routes/login')
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')

// const fs =require('fs')
// const dirCerfiticate = 'sslcert/'
// const privateKey = fs.readFileSync(dirCerfiticate + '/server.key', 'utf8')
// const certificate = fs.readFileSync(dirCerfiticate + '/server.crt', 'utf8')
// const credentials = { key: privateKey, cert: certificate }

app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(session({
  secret: 'session key di proyek biar lucu',
  resave: true,
  saveUninitialized: true
}))
const http = require('http').createServer(app)
// const  httpsServer = https.createServer(credentials, app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
})
const socketio = require('./socket')(io)

// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public/views'))
const routes = [// not the best implementation, first entry is not used
  ['/', Home],
  ['/chat', Chat],
  ['/conversation', Conversation],
  ['/follow', Follow],
  ['/user', User],
  ['/status', Status],
  ['/register', Register],
  ['/login', Login]
]
routes.forEach(function (routes) {
// basicly read left and right array, not the best implementation but good enuff
  app.use(routes[0], routes[1])
})

// socketio.on('connection', (socket) => {
//   socket.emit('chat message', 'You\'re Connected')
// })

/* Listen */
http.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

// httpsServer.listen(port, () => {
//   console.log(`listening at http://localhost:${port}`)
// })
