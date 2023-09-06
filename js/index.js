let dolarPrice = 450;

function buy(number){
    const result = dolarPrice * number;
    return result;
}

let userNumber = parseInt(prompt("El precio del Dolar hoy es " + dolarPrice + ". Por favor, ingrese la cantidad de Dolares que desea comprar:"));

const result = buy(userNumber);

while(userNumber >= 1){

    if (userNumber <= 200) {
        alert("La cantidad de Dolares a comprar es " + userNumber + ". Usted no paga impuestos y deberá pagar: $" + result);
    } else if (userNumber <= 10000) {
        alert("La cantidad de Dolares a comprar es " + userNumber + ". Está excedido del límite de sin impuestos, deberá abonar $" + result * 1.65);
    } else {
        alert("La cantidad de Dolares a comprar es superior a la posibilidad de venta");
    }
    break;
}


