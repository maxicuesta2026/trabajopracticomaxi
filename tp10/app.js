let nombres = '1','2','3'

let nombre = 'Marcos' + 'Facu'

//Agrega elementosal final

nombres.push(Galo)

//Agrega elementos al inicio

nombres.unshift('Barrozo')

//Para que sirve?

nombres.shift ()

nombres.pop()

h1.textcontent = nombres (8) + 'y' + nombres (1) + 'e'

boton.oncli


let nombres = ['Alvaro', 'Malena', 'Bruno', 'Galo']
let dni = ['52178087', '52060306', '51085883', '51316219']
let notasProg = [90, 75, 80, 100]
let notasEd = [100, 50, 100, 31]
/* Guardamos input, boton y parrafo en variables */
let inputDni = document.querySelector('#inputDNI')
let boton = document.querySelector('button')
let p = document.querySelector('p')

//Al hacer clic ejecutamos acciones
boton.onclick = function(){
    //Guardamos la posición del elemento a buscar 
    //Utilizando el dni ingresado en el input
    let pos = dni.indexOf(inputDni.value)
    //Mostramos los datos del estudiante a partir de la posicion guardada
    p.textContent = 'El estudiante es '+ nombres[pos] +' y tiene un ' + notasProg[pos] + ' en programacion y ' + notasEd[pos] + ' en tecnología'
}