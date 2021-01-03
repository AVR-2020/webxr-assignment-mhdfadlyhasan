// node server
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
const http = require('http')
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

// const  httpsServer = https.createServer(credentials, app)

// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public/views'))
const routes = [// not the best implementation, first entry is not used
  Home,
  Chat,
  Conversation,
  Follow,
  User,
  Status,
  Register,
  Login
]
app.use(routes)

const HttpServer = http.createServer(app)
const io = require('./utils/socket')(HttpServer)

// import aframe from 'aframe';
// import registerClickDrag from 'aframe-click-drag-component';
// console.log(io)
// socketio.on('connection', (socket) => {
//   socket.emit('chat message', 'You\'re Connected')
// })

/* Listen */
HttpServer.listen(process.env.PORT || 3000)
// httpsServer.listen(port, () => {
//   console.log(`listening at http://localhost:${port}`)
// })
