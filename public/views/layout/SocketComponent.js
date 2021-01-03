// registerAframeClickDragComponent(window.AFRAME);
const socket = io.connect('protected-refuge-41458.herokuapp.com')
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