
// chat
AFRAME.registerComponent('submit-chat', {
  init: function () {
    this.el.addEventListener('click', function (e) {
      const id_conversation = e.target.getAttribute('conversation_id')
      const pesan = document.getElementById(`${id_conversation}-input`).components.textarea.textarea.value
      const id_penerima = e.target.getAttribute('user_penerima')
      axios.post('/chat', {
        conversation: id_conversation,
        content: pesan
      }).then(object => {
        socket.emit('chat message', {
          msg: pesan,
          sender_id: user_id,
          receiver_id: id_penerima,
          conversation_id: id_conversation,
          name: name
        })
        spawnChat(conversation_id)
        document.getElementById(`${id_conversation}-input`).components.textarea.textarea.value = ''
      })
    })
  }
})

AFRAME.registerComponent('chat-drag', {
  init: function () {
    console.log("panggil init")
    console.log(this.el.parentElement.id)
    this.el.addEventListener('mousedown', function (e) {
      console.log('clicke')
      const self = this
      const pi = Math.PI
      clearInterval(setint)
      const player = document.getElementById('camera')
      const object = e.target.parentElement.getAttribute('position')
      const positon = player.getAttribute('position')
      var radiansO = pi * (e.target.parentElement.getAttribute('rotation').y)/180
      const objectx = object.x * Math.cos(radiansO) - object.z * Math.sin(radiansO)
      const objectz = object.x * Math.sin(radiansO) + object.z * Math.cos(radiansO)

      var radians = pi * (player.getAttribute('rotation').y)/180
      const xPos = positon.x * Math.cos(radians) - positon.z * Math.sin(radians)
      const zPos = positon.x * Math.sin(radians) + positon.z * Math.cos(radians)

      const x = xPos - objectx
      const z = zPos - objectz
      // var input = 0
      // if() input = 180
      setint = setInterval(function () {
        const player = document.getElementById('camera')
        var radians = pi * (180-player.getAttribute('rotation').y)/180
        const positon = player.getAttribute('position')
        const xPos = x * Math.cos(radians) - z * Math.sin(radians)
        const zPos = x * Math.sin(radians) + z * Math.cos(radians)
        $('#' + self.parentElement.id).attr('position', ` ${xPos+positon.x} ${positon.y} ${zPos+positon.z}`)
      }, 50)
    })
    this.el.addEventListener('mouseup', function (e) {
      clearInterval(setint)
    })
  }
})
