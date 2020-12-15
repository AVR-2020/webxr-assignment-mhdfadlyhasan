
module.exports = function (io) {
  io.on('connection', (socket) => {
    socket.emit('chat message', 'You\'re Connected')
  })
}
