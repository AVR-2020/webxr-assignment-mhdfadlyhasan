// node server
const Status = require('./database/dbstatus')
const User = require('./database/dbuser')
const Follow = require('./database/dbfollow')
const Chat = require('./database/dbchat')
const Conversation = require('./database/dbconversation')

const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})