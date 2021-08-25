// console.dir(document)

let reserva1 = document.getElementById('reserva1');

// let listaReserva = document.getElementById('listaReserva');

let dom = document.getElementById('dom');

console.dir(reserva1);

// console.dir(listaReserva);

// console.dir(dom)

console.dir(reserva1.innerHTML);

// console.dir(listaReserva.innerHTML);

// console.dir(dom.innerHTML)

let reservasTotales = document.getElementsByClassName('reservasTotales');

for (reserva of reservasTotales) {
    console.log(reserva.innerHTML);
}

let itemsDeLista = document.getElementsByTagName('li')

for (i = 0; i < itemsDeLista.length; i++) {
    console.log(itemsDeLista[i].innerText);
}

//Buscando hoteles de la pagina
let hoteles = document.getElementById('hoteles');

//agregando un hotel mas a la pagina
let nuevoHotel = document.createElement('li');
nuevoHotel.innerText = 'Iberostar';

hoteles.appendChild(nuevoHotel);

// preguntando por prompt el hotel y visualizando el resultado en html
// let nuevoHotel2 = document.createElement('li')
// nuevoHotel2.innerText = `${prompt('elegir un hotel')} ${prompt('que servicio?')}`;

// hoteles.appendChild(nuevoHotel2);



let reservasCliente = document.getElementById('reservasCliente')
let reservaCliente = document.createElement('div')

reservaCliente.innerHTML = `<h3> Hotel: Jorge</h3>
<p> Servicio: all inclusive</p>
<b> Total: $50000 <b>
`

reservasCliente.appendChild(reservaCliente);

let divNuevo = document.createElement('div')
divNuevo.innerHTML = `<h4>Probando directo en el body</h4>`

document.body.appendChild(divNuevo)