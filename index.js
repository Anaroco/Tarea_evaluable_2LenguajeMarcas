let years = ["2022", "2023", "2024", "2025", "Diciembre", "Junio", "el proximo año"];
let facts = ["engordar", "viajar", "trabajar", "adelgazar", "ganar", "perder", "regalar"];
let adverbs = ["mucho", "poco", "demasiado", "felizmente", "a montones", "de vez en cuando", "con un poco de voluntad"];


let nombre = prompt("Para jugar Dime tu nombre");

function play() {

    // cogemos un indice aleatorio de cada array con Math.random y para convertirlo en numero entero usamos Math.floor
    let randomYear = years[Math.floor(Math.random() * 7)];
    let randomFact = facts[Math.floor(Math.random() * 7)];
    let randomAdj = adverbs[Math.floor(Math.random() * 7)];

    //template string

    let randomFuture = `${nombre} en ${randomYear} vas a ${randomFact} ${randomAdj}!!!`;

    //querySelector

    document.querySelector("#result").innerHTML = randomFuture;;


}

//llamamos a los alerts cargados desde la libreria sweetAlert

function mostrar() {

    swal('Ana Robles');

}
function instrucciones() {

    swal('Pulsa una imagen para jugar');

}
const $formulario = document.querySelector("#formulario"),
            $nombre = document.querySelector("#nombre"),
            $correo = document.querySelector("#correo");
        $formulario.onsubmit = evento => {
            evento.preventDefault();
            const nombre = $nombre.value,
                correo = $correo.value;
            // Validar
            if (nombre === "Luis" || nombre === "José") {
                alert("No pueden ser esos nombres");
                return;
            }
            if (correo.endsWith("@hotmail.com")) {
                alert("No puede ser de hotmail");
                return;
            }
            $formulario.submit();
        };


