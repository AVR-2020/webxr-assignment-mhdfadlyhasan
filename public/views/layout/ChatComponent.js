
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
        const chatText = document.getElementById(id_conversation+'-chattext')
        $(`#${id_conversation}-chattext`).attr('value', $(`#${id_conversation}-chattext`).attr('value') + name + ': ' + pesan + '\n')
        document.getElementById(`${id_conversation}-input`).components.textarea.textarea.value = ''
      })
    })
  }
})

AFRAME.registerComponent('chat-drag', {
  init: function () {
    console.log("panggil init")
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

socket.on('get message', function (data) {
  var pesan = `${data.name}: ${data.msg}`
  const receiver_id = data.receiver_id
  if (receiver_id == user_id) {
    const conversation_id = data.conversation_id
    if (document.getElementById(conversation_id+'-chatpage')) {
      //exist
      const chatText = document.getElementById(conversation_id +'-chattext')
      $(`#${conversation_id}-chattext`).attr('value', $(`#${conversation_id}-chattext`).attr('value') + pesan + '\n' )
    }
    else {
      spawnChat(conversation_id)
    }
  }
})

function spawnChat(conversation_id) {
  //get penerima disini
  console.log(conversation_id)
  axios.post('/detail_conversation', {
    conversation: conversation_id
  }).then(conversation => {
    var conversation = conversation.data[0]
    var conversation_id = conversation.id
    var id_penerima = conversation.user_1 == user_id ? conversation.user_2 : conversation.user_1
    var camera = document.querySelector('#camera').getAttribute('position')
    const shape =
    `<a-entity id='${conversation_id}-chatpage' look-at="#camera" geometry="primitive: plane"  material="color: #7BC8A4" position="${camera.x} ${camera.y} ${camera.z-1}"> ` + 
      `<a-plane id="${conversation_id}-chatbox" class="clickable"` + 
      `width="2" height="1" color="#7BC8A4" chat-drag></a-plane>` +
      `<a-entity id="${conversation_id}-input" textarea="backgroundColor: blue; color: white; cols: 20; rows: 4;" class="clickable" geometry="primitive:plane;height:0.3; width:0.9" material="color: blue" position="0 -1 0" rotation="-30 0 0"  undrag-chat></a-entity>` +
      `<a-entity id="${conversation_id}-submit"conversation_id='${conversation_id}' user_penerima='${id_penerima}' class="clickable" geometry="primitive:plane;height:0.3; width:0.9" material="color: green" submit-chat position="1.2 -1 0" rotation="-30 0 0"></a-entity>` +
      `</a-entity>`
    $('#pages').append(shape)
    axios.post('/get_chat', {
      conversation: conversation_id
    }).then(result => {
      var pesan = ''
      result.data.forEach(element => {
        pesan += `${element.user.name}: ${element.content}\n`
      })
      const chatText =
      `<a-text id='${conversation_id}-chattext' value ='${pesan}' align="center" position ='0 0 0.25' color="white" > </a-text> `
      $(`#${conversation_id}-chatpage`).append(chatText)
    }).catch(error => {
      console.log(error)
    })
  })
}
