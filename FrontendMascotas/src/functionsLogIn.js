// Example starter JavaScript for disabling form submissions if there are invalid fields 
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        LoguearPersona()
        //registrarUsuario()
        event.preventDefault()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

//------------------------LOGIN USUARIO-------------------------

function LoguearPersona() {
  alert("Bienvenido")
  let usuario = document.querySelector("#txtUsuario").value;
  let contrasena = document.querySelector("#txtContrasena").value;


  let url = "http://localhost:3000/identificarUsuario";
  let datos = {
    usuario: usuario,
    contrasena: contrasena
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)'
    }
  }).then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)
      //document.querySelector("formLogIn").reset();
    })
}