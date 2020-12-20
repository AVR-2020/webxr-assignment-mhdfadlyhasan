
module.exports = function (io) {
  io.on('connection', (socket) => {
    socket.emit('chat message', 'You\'re Connected')
    socket.emit('direct chat', '3:halo fad')
    console.log('user Connected')
  })

  io.on('disconnect', (socket) => {
    console.log('user disconnect')
  })
}
