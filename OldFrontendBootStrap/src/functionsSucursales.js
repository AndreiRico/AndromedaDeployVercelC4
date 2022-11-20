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
                registrarSucursal()
                event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

//------------------------ REGISTRAR SUCURSAL --------------

function registrarSucursal(params) {
        //alert("Entra al resgistro")
    let departamento = document.querySelector("#txtDepartamento").value;
    let ciudad = document.querySelector("#txtCiudad").value;
    let direccion = document.querySelector("#txtDireccion").value;
    let telefono = document.querySelector("#txtTelefono").value;

    let url = 'http://localhost:3000/sucursals';
    let datos = {
            departamento: departamento,
            ciudad: ciudad,
            direccion: direccion,
            telefono: telefono
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            //'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)',
            'Authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjM2ZWEwY2YxY2U4N2E1N2MwMWRjOGFiIiwiY29ycmVvIjoiZGVsbWFyb3NvcmlvQGdtYWlsLmNvbSIsIm5vbWJyZSI6IlN1cGVyIiwicm9sIjoiYWRtaW4ifSwiaWF0IjoxNjY4MTk2NDI0fQ.FKehppvc_4tCHPQTsIl3BaN1991etfuUun0ULkJPWa8'
        }
    }).then(res => res.json())
        .then(mensaje => {
            console.log(mensaje);
            //alert("Sucursal registrrada con éxito.");
                
            //document.querySelector("#registrosucursal").reset();  //para limpiar el formulario hago un reset para dejarlo nuevamente en blanco
        })
}