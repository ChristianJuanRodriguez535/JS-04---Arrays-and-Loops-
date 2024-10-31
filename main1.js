//^^ Deliverable: A link to a Github repo where the exercises are solved with JavaScript

//&  Problema 1.  Sum of Resistors in Series

//* Calculate the sum of all resistors connected in series.


/*Examples:

- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.

*/

//*Solución

function sumaResistencia(resistores) {

    //& resistores: Nombre del arreglo que contiene resistencia

    let sum = 0; //? para acumular la suma desde cero

    resistores.forEach(resistencia => {
        
        sum = sum + Math.abs(resistencia);
        
        //& resistencia es el nombre de cada elemento del arreglo

    });

    return sum + " ohms"; //? devuelve el resultado de la función
}

console.log(sumaResistencia([-1,5,6,3]));
console.log(sumaResistencia([14, 3.5, 6]));
console.log(sumaResistencia([8,15,100]));

//& Problema 2. Number divided into halves

//* Givn a number, return the number divided into its halves in an array

/*
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

*/

//*Solución

function numDiv (numero) {

    const mitad = numero * 0.5;
    return [mitad, mitad];

}

console.log(numDiv(45));
console.log(numDiv(4));
console.log(numDiv(10));

//& Problema 3. Secret society

//* Find the name of a secret society based on the first letter of each member's name.

function secretSociety (nombres) {

    const iniciales = [] //^ Arreglo vacio para almacenar las iniciales

    for (let i = 0; i < nombres.length; i++){

       iniciales.push(nombres [i][0]);

       //^ Obtiene la primera letra de esa cadena en el indice 0
    }

    iniciales.sort(); //? Ordena los elementos de un arreglo en orden alfabetico

    return iniciales.join(""); // ~concatena los elementos del arreglo las "" son para que no haya expacios entre los caracteres
}

console.log(secretSociety(["Esperanza", "Franco", "Nia"]));
console.log(secretSociety(["Phoe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]));
console.log(secretSociety(["Harry", "Ron", "Hermione"]));


//& Problema 4. Online Status 

//* Display onlie status for a list of users


function onlineStatus(usuarios){
    
    const usuariosOnline = []; //? arreglo vacio para almacenar los usuarios en línea

    for (let i2 = 0; i2 < usuarios.length; i2++){

        if (usuarios[i2].includes("online"))
    
            
            {

            usuariosOnline.push(usuarios[i2]);
        }
    }

    if (usuariosOnline.length === 0){

        return `Nadie esta en linea`;
    
    } else if (usuariosOnline.length === 1) {
    
        return `${usuariosOnline[0]} esta en linea`;
    
    } else if (usuariosOnline === 2) {
        
        return `${usuariosOnline[0]}  y  ${usuariosOnline[1]} estan en linea`;
    
    } else {
        return `${usuariosOnline[0]}, ${usuariosOnline[1]} y ${usuariosOnline.length - 2} estan en linea`; //? Aquí estamos restando 2 del total de usuarios en línea para calcular cuántos usuarios adicionales hay después de los dos primeros.
    }
    
}

const usuarios = [ "mockIng99 online",
    "J0eyPunch onine",
    "glassedFer online"]

const usuarios2 = ["Alice online", "Bob  online", "Charlie online", "David online", "Eve online"]

console.log(onlineStatus(usuarios));
console.log(onlineStatus(usuarios2));

//& Problema 5 Array of Multiples

//* Create a fuction that takes two parameters (number, length) and returns an array of lentgh containing multiples of the number

function multiplosNumeros (numb, leng){

    const multiplos = [];
    for (let i3 = 1; i3 <= leng; i3++){

        //? empezamos el ciclo en 1 para que numb no se multiplique por 0

        multiplos.push(numb * i3);
    }

    return multiplos;
    
}

console.log(multiplosNumeros(2,10));
console.log(multiplosNumeros(17,6));

//& Problema 6: Positive dominance in Array 

//* Write a function to determine if an array is positively dominant. An array is positively dominant when the majority of elemets are positive. 

const esPositDom = (arreglo) => {

let posPositiva = [];
let posNegativa = [];

for (let i4 = 0; i4 < arreglo.length; i4++) {

    if (arreglo[i4] > 0 && !posPositiva.includes(arreglo[i4])) 
        {
            //^ Usamos !posPositiva para que los valores positivos del arreglo se guarden en posPositiva

        posPositiva.push(arreglo[i4]);

  
    } else if (arreglo[i4] < 0 && !posNegativa.includes(arreglo[i4])){

        posNegativa.push(arreglo[i4]);
    }
} 

const arregloPositivo = posPositiva.length;

const arregNegativo = posNegativa.length;

if (arregloPositivo === 0 && arregNegativo === 0){

    return `[${arreglo}] No es ni positivamente dominante, ni negativamente dominante `
  
    
}

if (arregloPositivo > arregNegativo ) {//^ Compara la cantidad de valores que son positivos y negativos 

return `[${arreglo}] Es positivamente dominante `

}else {

    return `[${arreglo}] No es positivamente dominante `

   
}

};

console.log(esPositDom([1,2,3]));
console.log(esPositDom([-1,-3,-5, 4, 6767]));

//& Problema 7 Antidopal Average 

//* Given an array, retun a shorter array followinnng these steps:                                    1)Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays. 2)Sum each number of the first part with the inverse numbers of the second part. 3) Divide each number of the resulting array by 2.
                   
function antidopalAverage (arreglo2) {

    if (arreglo2.length % 2 !== 0) {

        arreglo2.splice(Math.floor(arreglo2.length/2),1);
        
        //todo) Math.floor redondea hacia abajo el resultado de la división, para tener un indice valido.

        //& .splice (indice, cantidad) Modifica el arreglo original. El indice donde comenzara a eliminar elementos y cantidad a eliminar 
    }
  
    const indiceMitad = arreglo2.length/2;
    const primeraMitad = arreglo2.slice(0,indiceMitad)

    const segundaMitad = arreglo2.slice(indiceMitad).reverse();

    //* con slice(indiceMitad) esta extrayendo todos los elementos desde la mitad del arreglo hasta el final y con reverse se invierte el orden de los elementos.

    const sumaArreglo2 = primeraMitad.map((num1, index1) => num1 + segundaMitad[index1] ) ;

    //^ .map crea un nuevo arreglo con los resultados de aplicar una funcion al arreglo original

    //todo) (num1, index1) => num1 + segundaMitad[index1] ) suma el elemento actual del arreglo primeraMitad con el elemento correspondiente segundaMitad

    const arregloFinal = sumaArreglo2.map(num1 => num1/2);

    return arregloFinal;
}

console.log(antidopalAverage([1,2,3,5,22,6]));















