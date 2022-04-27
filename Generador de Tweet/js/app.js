

// inicial nombre
const input = document.getElementById('inputLetter');
const divParraf = document.getElementById('Parraf');

// EVENTO DE 'keydown || keypress || keyup ||' = 'ENTER'

//imprimir mensaje de texto
const textarea = document.getElementById('idTextarea');
const parraftPrint = document.getElementById('Parrafin');
const buttonOk = document.getElementById('btn');

//contador
const counter = document.getElementById('counter');


//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//evento de click
buttonOk.addEventListener('click', captureEventPrint);
//funcion de click
function captureEventPrint(eventPrint) {
    if (eventPrint.type == "click") {
        parraftPrint.textContent = textarea.value;
        divParraf.textContent = input.value.charAt(0).toUpperCase();
    }
}

//evento contador

//CONTADOR
function contador() {
    let cantidad_caja = 200;
    let cantidad_escrita = textarea.value.length;
    let contador=(cantidad_caja - cantidad_escrita);
    document.getElementById('counter').textContent = `cantidad de caracteres actuales: ${contador}`;
    if(contador <= 49){
        counter.style.color= "red";
    }
    if(contador>=50){
        counter.style.color= "white";
    }
}


