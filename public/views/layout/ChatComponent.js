
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
        document.getElementById(`${id_conversation}-input`).components.textarea.textarea.value = ''
      })
    })
  }
})