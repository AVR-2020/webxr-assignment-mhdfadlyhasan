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
