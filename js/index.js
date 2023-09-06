let dolarPrice = 400;

function buy(numero){
    const result = dolarPrice * numero;
    return result;
}

let userNumber = parseInt(prompt("El precio del Dolar hoy es " + dolarPrice + ". Por favor, ingrese la cantidad de Dolares que desea comprar:"));

const result = buy(userNumber);

if(userNumber <= 200){
    alert ("La cantidad de Dolares a comprar es " + userNumber + ". Usted no paga impuestos y deberá pagar: $" + result);
}else{
    alert ("La cantidad de Dolares a comprar es " + userNumber + ". Está exedido del límite de sin impuestos, deberá abonar $" + result * 1.65)
}


//alert ("La cantidad de Dolares a comprar es " + result);


