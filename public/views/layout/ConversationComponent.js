
// conversation
AFRAME.registerComponent('search-user-button', {
  init: function () {
    this.el.addEventListener('click',function(e) {
      const name = document.getElementById('conversation-searchuser').components.textarea.textarea.value
      axios.post('/user', {
        name: name
      }).then(result => {
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
      if(document.getElementById(id_conversation+'-chatpage')) {
        console.log("exist")
      }
      else spawnChat(id_conversation)
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
