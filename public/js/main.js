// Exo1 
function addition(a, b) {
    console.log(a + b);
}

//Exo2
function soustraction(a, b) {
    console.log(a - b);
}

//Exo3
function multiplication(a, b) {
    console.log(a * b);
}

//Exo4
function division(a, b) {
    console.log(a / b);
}

//Exo5
function modulo(a, b) {
    console.log(a % b);
}

//Exo6
function racineCarre(a) {
    console.log(Math.sqrt(a));
}

//Exo7
function exposant(a, b) {
    console.log(Math.pow(a, b));
}

//Exo8
function capitalize(str) {
    console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
}

//Exo9
function calcul(nbr1, operator, nbr2) {
    switch (operator) {
        case "+":
            console.log(nbr1 + nbr2);
            break;
        case "-":
            console.log(nbr1 - nbr2);
            break;
        case "*":
            console.log(nbr1 * nbr2);
            break;
        case "/":
            console.log(nbr1 / nbr2);
            break;
    }
}