
//Pedir 2 datos por pantalla y almacenarlo en dos variables 
//diferentes:
//Variable 1(num1)  Variable 2 (num2)
//Realizar todas las Operacion arigameticas vistas en la clase
//Mostra en la consola todos los posibles resultados
//Extra: Por medio de una venta emergente(alert) Dar la maxima
//informacion del desarrallodar del aplicativo en cuestion

let N1 = prompt `Ingresar numero 1:`;
let N2 = prompt `Ingresar numero 2:`;

alert('Para ver los resultados de las operaciones aritmeticas por favor presiones F12');

 console.log(`Numero 1 ingresado :`+N1);
 console.log(`Numero 2 ingresado :`+N2);

// pre-Incremento
++N1;
//Pos-Incremento
N1++;
console.log(`Pos Incremento`,N1);
++N2;
N2++;
console.log(`Pre Incremento`,N2);

//Decremento
--N1;
N1--;
console.log(`Decremento`,N1);
//Incremento
--N2;
N2--;
console.log(`Incremento`,N2);

//Division
let Division = N1 / N2;
console.log(`División`,Division);

//Resto
let resto = N2 % N2;
console.log(`Resto`,resto);

//Exponenciación
let exp = N1 ** N2;
console.log (`Exponenciación`,exp);

//Multiplicacion
let multiplicacion = N1 * N2;
console.log(`Multiplicación`,multiplicacion);

//Suma
let suma = parseInt(N1) + parseInt(N2);
console.log(`Suma`, suma);

//Resta
let resta = parseInt(N1) - parseInt(N2);
console.log(`Resta`, resta);

//Unario negativo
console.log(`Unitario Negativo`, -N1);
console.log(`Unitario Negativo`, -N2);
//Unario positivo
console.log(`Unitario Positivo`, +N1);
console.log(`Unitario Positivo`, +N2);


//CLASE

// Pre-Incremento
// 2+numero1;
// console.log(numero2);
// 2+numero2;
// console.log(numero2);


// Pos-Incremento
// let inc = 5;
// console.log(num);
// num += inc;
// console.log(num);
// num += inc;
// console.log(num);
// num += inc;
// console.log(num);
// num += inc;
// console.log(num);

// let num;
// () Parentesis = Presidente, 0
// % Modulo = 1
// * Multiplocacion = 2
// / Division = 3
// - Resta = 4
// + Suma = 5
// let num = 5;

// // Pre-Incremento
// 2+num;
// console.log(num);

// Pos-Incremento
// let inc = 5;
// console.log(num);
// num += inc;
// console.log(num);
// num += inc;
// console.log(num);
// num += inc;
// console.log(num);
// num += inc;
// console.log(num);


// console.log(num++);
// console.log(num++);

// num++;
// num++;
// num++;
// num++;
// num++;