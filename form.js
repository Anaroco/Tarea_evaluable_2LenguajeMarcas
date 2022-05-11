

// Obtener referencias 
let $formulario = document.querySelector("#formulario"),
    $nombre = document.querySelector("#nombre"),
    $correo = document.querySelector("#correo");

$formulario.onsubmit = evento => {
    evento.preventDefault();
    let nombre = $nombre.value,
        correo = $correo.value;

    // Validamos los campos con algunas condiciones para ver si se cumplen

    if (nombre.endsWith("apellido")) {
        alert("No se necesitan apellidos");
        return;
    }

    if (correo.endsWith(".org")) {
        alert("Lo sentimos. No se aceptan correos de organizaciones");
        return;
    }

    // si todo es correcto manda la solicitud para que sea procesado por el back 
    $formulario.submit();
};
