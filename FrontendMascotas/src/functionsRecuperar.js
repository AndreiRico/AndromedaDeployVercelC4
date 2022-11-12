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
                RecuperarClave()
                event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

//---------------------- RECUPERAR CONTRASEÑA --------------

function RecuperarClave(params) {

    let correo = document.querySelector("#txtCorreo").value;

    let url = 'http://localhost:3000/recuperarClave';
    let datos = {
            
            correo: correo
           
    };
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
            alert("Se ha enviado la nueva contraseña. Revisa tu correo electrónico");
                
            //document.querySelector("#registroRecuperar").reset();  //para limpiar el formulario hago un reset para dejarlo nuevamente en blanco
        })
}