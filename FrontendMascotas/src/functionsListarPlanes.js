// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    /*const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                RegistrarPlan()
                event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })*/
    ListarPlan()
})()

//------------------------ LISTAR PLANES --------------
function ListarPlan() {
    /*let nombre = document.querySelector("#txtNombre").value;
    let descripcion = document.querySelector("#txtDescripcion").value;
    let precio = document.querySelector("#txtPrecio").value;*/

    let url = 'http://localhost:3000/plans';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            //'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)',
            'Authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjM2ZWEwY2YxY2U4N2E1N2MwMWRjOGFiIiwiY29ycmVvIjoiZGVsbWFyb3NvcmlvQGdtYWlsLmNvbSIsIm5vbWJyZSI6IlN1cGVyIiwicm9sIjoiYWRtaW4ifSwiaWF0IjoxNjY4MTk2NDI0fQ.FKehppvc_4tCHPQTsIl3BaN1991etfuUun0ULkJPWa8'
        }
    }).then(res => res.json())
        .then(respuesta => {
            //console.log(respuesta);
            let listadoBody = document.querySelector("#listado_Body")
            let btnEditar = document.createElement('button');
            let btnEliminar = document.createElement('button');
            btnEditar.innerHTML = "Editar"
            btnEliminar.innerHTML = "Eliminar"
            respuesta.forEach(plan => {
                var fila = document.createElement('tr');     // create row node
                var col1 = document.createElement('td');    // create column node
                var col2 = document.createElement('td');    // create second column node
                var col3 = document.createElement('td');    // create second column node
                var col4 = document.createElement('td');
                var col5 = document.createElement('td');

                fila.appendChild(col1);
                fila.appendChild(col2);
                fila.appendChild(col3);
                fila.appendChild(col4);
                fila.appendChild(col5);
                
                col1.innerHTML = plan.nombre;                         // put data in first column
                col2.innerHTML = plan.descripcion;                        // put data in first column
                col3.innerHTML = plan.precio;                         // put data in first column
                col4.innerHTML = btnEditar.outerHTML;
                col5.innerHTML = btnEliminar.outerHTML;

                listadoBody.appendChild(fila); // append row to table

                console.log(fila.outerHTML)
            });
        })
}