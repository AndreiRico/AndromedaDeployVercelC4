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
                registrarMascota()
                //event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

//------------------------REGISTRAR Mascota--------------

function registrarMascota(params) {
    //alert("Entra al resgistro")
    let nombre = document.querySelector("#txtNombre").value;
    let fotoUrl = document.querySelector("#txtFotoUrl").value;
    let especie = document.querySelector("#txtEspecie").value;

    let url = 'http://localhost:3000/mascotas';
    let datos = {
        nombre: nombre,
        foto: fotoUrl,
        especie: especie,
        estado: 'Pendiente'
        
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)',
            'Authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjM2OTE3M2U4ODlkNmMyYzg4MDdkNmJlIiwiY29ycmVvIjoiZG1vc29yaW80MUBob3RtYWlsLmNvbSIsIm5vbWJyZSI6Ik1hcmNlbG8iLCJyb2wiOiJhZG1pbiJ9LCJpYXQiOjE2NjgyMzU5MTR9.807rHnsexRD4dRiCnuD-VFu_kxFp5Fh_NjydH_gks6w'
        }
    }).then(res => res.json())
        .then(mensaje => {
            console.log(mensaje);
            alert("Se ha registrado la mascota.");
        })
}