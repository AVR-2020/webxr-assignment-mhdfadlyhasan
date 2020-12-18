
module.exports = function (io) {
  io.on('connection', (socket) => {
    console.log('user Connected')
    socket.emit('chat message', 'You\'re Connected')
  })

  io.on('disconnect', (socket) => {
    console.log('user disconnect')
  })
}
