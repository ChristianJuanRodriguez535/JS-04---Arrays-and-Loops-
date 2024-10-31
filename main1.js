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

