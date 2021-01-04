AFRAME.registerComponent('login-button', {
  init: function () {
    this.el.addEventListener('click',function(e) {
      const name = document.getElementById('name-textarea').components.textarea.textarea.value
      const password = document.getElementById('password-textarea').components.textarea.textarea.value
      axios.post('/login', {
        name: name,
        password: password
      }).then(result => {
        console.log(result.data)
        if(result.data == 'success')
          location.reload();
        else 
          document.getElementById('login-title').setAttribute('text-geometry',`value: ${result.data}`)
      })
    })
  }
})
AFRAME.registerComponent('register-button', {
  init: function () {
    this.el.addEventListener('click',function(e) {
      const name = document.getElementById('name-textarearegister').components.textarea.textarea.value
      const password = document.getElementById('password-textarearegister').components.textarea.textarea.value
      axios.post('/register', {
        name: name,
        password: password
      }).then(result => {
        document.getElementById('register-title').setAttribute('text-geometry',`value: ${result.data}`)
      })
    })
  }
})