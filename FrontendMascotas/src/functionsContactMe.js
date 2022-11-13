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
                registrarProspecto()
                event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

//------------------------REGISTRAR PROSPECTO--------------

function registrarProspecto(params) {

    let nombre = document.querySelector("#txtNombres").value;
    let apellido = document.querySelector("#txtApellidos").value;
    let correo = document.querySelector("#txtCorreo").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let comentario = document.querySelector('#txtComentario').value;

    let url = 'http://localhost:3000/prospectos';
    let datos = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        celular: telefono,
        comentario: comentario
    };
    alert(JSON.stringify(datos));

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)'
        }
    }).then(res => res.json())
        .then(mensaje => {
            console.log(mensaje);
            //alert("Te has registrado correctamente. Revisa tu correo electrónico");
                
            //document.querySelector("#registrousuario").reset();  //para limpiar el formulario hago un reset para dejarlo nuevamente en blanco
        })
}