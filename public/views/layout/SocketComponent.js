// registerAframeClickDragComponent(window.AFRAME);
const socket = io.connect('localhost:3000')
socket.on('connect', function () {
  console.log('Connected')
  $('#page').show()
})
// socket.on('chat message', function (data) {
//   console.log(data + 'in footer')
// })
socket.on('disconnect', function () {
  console.log('dc')
  $('#page').hide()
})