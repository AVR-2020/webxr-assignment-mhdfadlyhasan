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
      const self = this
      const pi = Math.PI
      clearInterval(setint)
      const player = document.getElementById('camera')
      const object = e.target.getAttribute('position')
      const positon = player.getAttribute('position')
      const x = positon.x - object.x
      const z = positon.z - object.z
      e.target.removeAttribute('dynamic-body')
      setint = setInterval(function () {
        const player = document.getElementById('camera')
        var radians = pi * (180-player.getAttribute('rotation').y)/180
        const positon = player.getAttribute('position')
        const xPos = x * Math.cos(radians) - z * Math.sin(radians)
        const zPos = x * Math.sin(radians) + z * Math.cos(radians)
        e.target.setAttribute('rotation', `0 ${player.getAttribute('rotation').y} 0`)
        $('#' + self.id).attr('position', ` ${xPos+positon.x} 1.5 ${zPos+positon.z}`)
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
