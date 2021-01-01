var setint  = ''
AFRAME.registerComponent('tong-sampah', {
  init: function () {
    this.el.addEventListener('collide', function (evt) {
      var id_status = evt.detail.body.el.getAttribute('id_status')
      $('#' + evt.detail.body.el.getAttribute('id_status')+'-statuscontent').remove()
      axios.post('/del_status', {
        id_status: id_status
      }).then(object => {
        if (object.data == 'success') {
          console.log('Deleted')
        }
      })
    })
  }
})
AFRAME.registerComponent('kotak-status', {
  init: function () {
    console.log('init status box')
    this.el.addEventListener('mousedown',function(e) {
      const player = document.getElementById("camera")
      const self = this
      clearInterval(setint)
      e.target.removeAttribute('dynamic-body')
      setint = setInterval(function () {
        const positon = player.getAttribute('position')
        $('#' + self.id).attr('position', `${positon.x} ${positon.y} ${positon.z-0.2}`)
      }, 50)
    })
    this.el.addEventListener('mouseup',function(e) {
      clearInterval(setint)
      var atribute = document.createAttribute("dynamic-body")
      e.target.setAttributeNode(atribute)
    })
  }
})
AFRAME.registerComponent('send-status-button', {
  init: function () {
    this.el.addEventListener('click',function(e) {
      const content = document.getElementById('status-textarea').components.textarea.textarea.value
      axios.post('status', {
        content: content
      })
      document.getElementById('status-textarea').components.textarea.textarea.value = ''
      refreshStatus()
    })
  }
})
// chat
AFRAME.registerComponent('submit-chat', {
  init: function () {
    this.el.addEventListener('click', function (e) {
      const id_conversation = e.target.getAttribute('conversation_id')
      const pesan = document.getElementById(`${id_conversation}-input`).components.textarea.textarea.value
      const id_penerima = e.target.getAttribute('user_penerima')
      axios.post('/chat', {
        conversation: id_conversation,
        content: pesan,
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

// conversation
AFRAME.registerComponent('search-user-button', {
  init: function () {
    this.el.addEventListener('click',function(e) {
      const name = document.getElementById('conversation-searchuser').components.textarea.textarea.value
      axios.post('/user', {
        name: name
      }).then(result => {
        console.table(result.data)
        refreshSearch(result.data)
      })
    })
  }
})
AFRAME.registerComponent('add-user-button', {
  init: function () {
    this.el.addEventListener('click',function (e) {
      const id_penerima = e.target.getAttribute('user_id')
      axios.post('/conversation', {
        user_1: user_id,
        user_2: id_penerima
      }).then(result=> {
        spawnChat(result.data[0].id)
      })
    })
  }
})

AFRAME.registerComponent('spawn-chat-button', {
  init: function () {
    this.el.addEventListener('click', function (e) {
      const id_conversation = e.target.getAttribute('conversation_id')
      spawnChat(id_conversation)
    })
  }
})

AFRAME.registerComponent('kotak-chat', {
  init: function () {
    this.el.addEventListener('mousedown', function (e) {
      const self = this
      const player = document.getElementById('camera')
      clearInterval(setint)
      setint = setInterval(function () {
        console.log(self.id)
        const positon = player.getAttribute('position')
        $('#' + self.id).attr('position', `${positon.x} ${positon.y} ${positon.z-2}`)
      }, 50)
    })
    this.el.addEventListener('mouseup',function(e) {
      clearInterval(setint)
    })
  }
})
