// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }else{
                registrarUsuario();
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function registrarUsuario(params) {
    alert("Entra al resgistro")
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let correo = document.querySelector("#txtCorreo").value;
    let cedula = document.querySelector("#txtCedula").value;
    let telefono = document.querySelector("#txtTelefono").value;

    let url = 'http://localhost:3000/usuarios';
    let datos = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        cedula: cedula,
        telefono: telefono,
        rol: 'client'
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)'
        }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })
}