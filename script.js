let egale= document.querySelector(".egale");
let reset = document.querySelector(".reset");
let boutonReset = document.getElementById('reset');
let x = document.getElementById("nb1") ;
let y = document.getElementById("nb2") ;
let operation = document.querySelectorAll(".grid-nombre button.operation");
let affichageOperation = document.getElementById('operation');

let saisieDeuxiemeNombre = false;
operation.forEach ((button) => {
    button.addEventListener ("click", (event) => {
        affichageOperation.innerHTML =  event.target.innerHTML;
        saisieDeuxiemeNombre = true ;
    })
});
let nombre = document.querySelectorAll(".grid-nombre button.chiffre");
nombre.forEach((button) => {
    button.addEventListener("click",(event)=> {
        if (!saisieDeuxiemeNombre) {
           x.innerHTML = event.target.innerHTML
        }
        else {
            y.innerHTML = event.target.innerHTML
        }
    })
});


