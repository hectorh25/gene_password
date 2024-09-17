let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena")

const cadenacaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

function generar(){

    let numerodigitado = parseInt (cantidad.value);
    console.log(numerodigitado);

if(numerodigitado < 8) {
    alert("La cantidad de caracteres debe ser mayor o igual a 8 cifras")
}

let password = '';

for(let i = 0; i < numerodigitado; i++){

    let caracteraleatorio = cadenacaracteres[Math.floor(Math.random() * cadenacaracteres.length)];
    console.log(caracteraleatorio);

    password+=caracteraleatorio;

}

console.log("password generada;" + password)

contrasena.value = password;

}








