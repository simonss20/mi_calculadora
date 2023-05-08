var pantalla = document.querySelector(".pantalla");
var primerValor = 0;
var segundoValor = 0;
var aux = 0;
var operacion = "";

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
    primerValor = 0;
    segundoValor = 0;
    aux = 0;
    operacion = "";
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
        
        switch (operador) {
            case "+":
                operacion = "+";
                primerValor = pantalla.value;
                break;
            case "-":
                operacion = "-";
                primerValor = pantalla.value;
                break;
            case "/":
                operacion = "÷";
                primerValor = pantalla.value;
                break;
            case "x":
                operacion = "x";
                primerValor = pantalla.value;
                break;
            case "%":
                operacion = "%";
                primerValor = pantalla.value;
                break;
        }

        primerValor = parseFloat(primerValor);
    } else {

        primerValor = parseFloat(primerValor);

        switch (operador) {
            case "+":
                operacion = "+";
                primerValor += parseFloat(pantalla.value);
                break;
            case "-":
                operacion = "-";
                primerValor -= parseFloat(pantalla.value);
                break;
            case "/":
                operacion = "÷";
                primerValor /= parseFloat(pantalla.value);
                break;
            case "x":
                operacion = "x";
                primerValor *= parseFloat(pantalla.value);
                break;
            default:
                break;
        } 
    }
    

    pantalla.value = "";
}

function calcular() {

    segundoValor = pantalla.value;
    primerValor = parseFloat(primerValor);
    segundoValor = parseFloat(segundoValor);
    
    if (aux == 0) {
        
        aux = pantalla.value;
        aux = parseFloat(aux);
        switch (operacion) {
            case "+":
                pantalla.value = primerValor + segundoValor;
                break;
            case "-":
                pantalla.value = primerValor - segundoValor;
                break;  
            case "÷":
                pantalla.value = primerValor / segundoValor;
                break;
            case "x":
                pantalla.value = primerValor * segundoValor;
                break;
            case "%":
                pantalla.value = (primerValor * segundoValor) / 100;
                break;
        }
                            
    } else {
        switch (operacion) {
            case "+":
                pantalla.value = primerValor + aux;
                break;
            case "-":
                pantalla.value = primerValor - aux;
                break;
            case "÷":
                pantalla.value = primerValor / aux;
                break;
            case "x":
                pantalla.value = primerValor * aux;
                break;
            case "%":
                pantalla.value = (primerValor * segundoValor) / 100;
                break;
        }
    }
    primerValor = pantalla.value;
}
                        