const pantalla = document.querySelector(".pantalla");
let primerValor = 0;
let segundoValor = 0;
let aux = 0;
let operacion = "";

function ingresarNumero(boton) {

    if (pantalla.value.length < 20) {

        pantalla.value += boton;
    }
    aux = 0;
    pantalla.value = parseFloat(pantalla.value);
}

function borrar() {
    
    pantalla.value = parseFloat(pantalla.value.substring(0, pantalla.value.length - 1));
    if (isNaN(pantalla.value)) {
        pantalla.value = "";
    }
}

function borrarTodo() {
    pantalla.value = "";
    primerValor = 0;
    segundoValor = 0;
    aux = 0;
    operacion = "";
}

function operar(operador) {

    if (primerValor == 0) {
        
       operacion = operador;
        primerValor = parseFloat(pantalla.value);

    } else {

        segundoValor = parseFloat(pantalla.value);

        switch (operacion) {
            case "+":
                operacion = "+";
                primerValor += segundoValor;
                break;
            case "-":
                operacion = "-";
                primerValor -= segundoValor;
                break;
            case "/":
                operacion = "÷";
                primerValor /= segundoValor;
                break;
            case "x":
                operacion = "x";
                primerValor *= segundoValor;
                break;
            default:
                break;
        } 
        operacion = operador;
        pantalla.value = primerValor;
    }
    
    pantalla.value = "";
}

function calcular() {

    segundoValor = pantalla.value;
    segundoValor = parseFloat(segundoValor);
    

    if (aux > 0) {
        switch (operacion) {
            case "+":
                primerValor = primerValor + aux;
                break;
            case "-":
                primerValor = primerValor - aux;
                break;  
            case "÷":
                primerValor = primerValor / aux;
                break;
            case "x":
                primerValor = primerValor * aux;
                break;
            case "%":
                primerValor = (primerValor * aux) / 100;
                break;
            default:
                primerValor = segundoValor;
                break;
        }
    } else {
        switch (operacion) {
            case "+":
                primerValor = primerValor + segundoValor;
                break;
            case "-":
                primerValor = primerValor - segundoValor;
                break;  
            case "÷":
                primerValor = primerValor / segundoValor;
                break;
            case "x":
                primerValor = primerValor * segundoValor;
                break;
            case "%":
                primerValor = (primerValor * segundoValor) / 100;
                break;
            default:
                primerValor = segundoValor;
                break;
        }
        aux = segundoValor;
    }

    pantalla.value = primerValor;
}
                        