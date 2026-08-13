//ejercicio 1

let numero = 20

let parrafo1 = document.querySelector("#parrafo1")

let boton1 = document.querySelector("#boton1")

boton1.onclick = function(){
    if (numero <18){

        parrafo1.textContent = "sos mayor"
    }else{
        parrafo1.textContent = "sos menor"
    }
}