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



