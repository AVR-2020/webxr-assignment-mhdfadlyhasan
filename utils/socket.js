module.exports = function get (http) {
  const io = require('socket.io')(http, {
    cors: {
      origin: 'https://protected-refuge-41458.herokuapp.com/'
    }
  })
  io.on('connection', (socket) => {
    socket.emit('chat message', 'You\'re Connected')
    socket.on('chat message', (data) => {
      io.emit('get message', {
        msg: data.msg,
        sender_id: data.id,
        receiver_id: data.receiver_id,
        conversation_id: data.conversation_id,
        name: data.name
      })
    })
    socket.on('disconnect', (socket) => {
      console.log('user disconnect')
    })
  })
  return io
}
