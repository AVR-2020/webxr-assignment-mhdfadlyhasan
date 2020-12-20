
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

// insert into conversations (user_1,user_2) values (2,8);

// select * from conversations;

// select * from users;
