// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    AprobarSolicitudes()
})()

//------------------------ APROBAR O RECHARZAR SOLICITUDES DE AFILICIÓN --------------
function AprobarSolicitudes() {
    /*let nombre = document.querySelector("#txtNombre").value;
    let descripcion = document.querySelector("#txtDescripcion").value;
    let precio = document.querySelector("#txtPrecio").value;*/

    let url = 'http://localhost:3000/mascotas/63703efdbf7a5723d81fb44e';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            //'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)',
            //'Authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjM2ZWEwY2YxY2U4N2E1N2MwMWRjOGFiIiwiY29ycmVvIjoiZGVsbWFyb3NvcmlvQGdtYWlsLmNvbSIsIm5vbWJyZSI6IlN1cGVyIiwicm9sIjoiYWRtaW4ifSwiaWF0IjoxNjY4MTk2NDI0fQ.FKehppvc_4tCHPQTsIl3BaN1991etfuUun0ULkJPWa8'
        }
    }).then(res => res.json())
        .then(respuesta => {
            console.log(respuesta);
            let listadoBody = document.querySelector("#listado_Body")

           // respuesta.forEach(m => {
                var fila = document.createElement('tr');        // create row node
                var col1 = document.createElement('td');        // create column node
                var col2 = document.createElement('td');        // create second column node

                fila.appendChild(col1);
                fila.appendChild(col2);
                
                col1.innerHTML = respuesta.nombre;                         // put data in first column
                col2.innerHTML = respuesta.especie;                        // put data in first column

                listadoBody.appendChild(fila);                      // append row to table

                console.log(fila.outerHTML)
           // });
        })
}