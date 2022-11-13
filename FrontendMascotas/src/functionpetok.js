// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    leerMascota()

    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                actualizarMascota()
                //event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


function leerMascota() {
    let url = 'http://localhost:3000/mascotas/636ff128d87cba2270be4d35'
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authenticate': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjM2OTE3M2U4ODlkNmMyYzg4MDdkNmJlIiwiY29ycmVvIjoiZG1vc29yaW80MUBob3RtYWlsLmNvbSIsIm5vbWJyZSI6Ik1hcmNlbG8iLCJyb2wiOiJhZG1pbiJ9LCJpYXQiOjE2NjgyMzU5MTR9.807rHnsexRD4dRiCnuD-VFu_kxFp5Fh_NjydH_gks6w'

        }
    }).then(resp => resp.json())
        .then(respuesta => {
            console.log(respuesta);
            let nombre = respuesta.nombre;
            let foto = respuesta.foto;
            let estado = respuesta.estado;
            let especie = respuesta.especie;
            document.querySelector("#txtNombre").value = respuesta.nombre;
            document.querySelector("#txtFotoUrl").value = respuesta.foto;
            document.querySelector("#fotoMascota").src = respuesta.foto;
            document.querySelector("#txtEspecie").value = respuesta.especie;
            document.querySelector("#txtEstado").value = respuesta.estado;
            try {
                if (respuesta.comentario == "undefined") {
                } else {
                    document.querySelector("#txtComentario").value = respuesta.comentario;
                }

            } catch (error) {
                console.log("No existe un comentario");
            }
            //alert("Entra a la función"+respuesta.nombre);

        });
}

function actualizarMascota() {
    //alert("Entra al actualizar")
    // let nombre = document.querySelector("#txtNombre").value;
    // let fotoUrl = document.querySelector("#txtFotoUrl").value;
    // let especie = document.querySelector("#txtEspecie").value;
    let estado = document.querySelector("#txtEstado").value;
    let comentario = document.querySelector("#txtComentario").value;

    let url = 'http://localhost:3000/mascotas/636ff128d87cba2270be4d35';
    let datos = {
        // nombre: nombre,
        // foto: fotoUrl,
        // especie: especie,
        estado: estado,
        comentario: comentario

    };
    //alert("Datos: "+JSON.stringify(datos));
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            'Authenticate': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjM2OTE3M2U4ODlkNmMyYzg4MDdkNmJlIiwiY29ycmVvIjoiZG1vc29yaW80MUBob3RtYWlsLmNvbSIsIm5vbWJyZSI6Ik1hcmNlbG8iLCJyb2wiOiJhZG1pbiJ9LCJpYXQiOjE2NjgyMzU5MTR9.807rHnsexRD4dRiCnuD-VFu_kxFp5Fh_NjydH_gks6w'
        }
    }).then(res => res.json())
        .then(mensaje => {
            console.log(mensaje);
            alert("Se ha actualizado el estado de la mascota.");
        })
}