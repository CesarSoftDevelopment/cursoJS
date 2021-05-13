/**
 *==========================================Português======================================
 * Mesmo que não passamos nada em uma função, por padrão, o javascritp cria um array chamado 
 arguments, argumentos da função.
 * Cada valor que for passado para função, estes valores serão passados dentro do array.
 *
 */


//exemplo sem parametro de entrada

/*
function sum(){
    let = sum_number = 0;
    for(let i = 0; i < arguments.length; i++ ){
        sum_number += arguments[i];
    }

    return sum_number;
}

console.log(sum()); //0
console.log(sum(2)); //2
console.log(sum(2, 5));// ?
console.log(sum(5, 3, 9));//?
console.log(sum(2, 4, 6, 8, 12));//?
*/

//pra cada indice do meu array de argumentos faça isso!

/*
function print_values(num1, num2) {
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

print_values();

print_values(4, 6);

print_values(4, 6, 8);

print_values(3, 6, 8, 12, 44, 56);
*/

//Gambiarra 1

/*
function sum(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;
    
    return num1 + num2 + num3;
}

console.log(sum(4, 5, 6));// 15
console.log(sum()); // 6
console.log(sum(2)); // 7
console.log(sum(2, 2)); // 7
console.log(sum(2, 2, 2)); // 6
console.log(sum(2, 2, 2, 2)); // 6
*/

//console.log(sum(0, 0, 0))

//Gambiarra 2

//operador ternario
function sum(num1, num2, num3) {
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num1) ? 1 : num2;
    num3 = isNaN(num1) ? 1 : num3;

    return num1 + num2 + num3;
}

// console.log(sum(4, 5, 6));// 15
// console.log(sum()); // 6
// console.log(sum(2)); // 7
// console.log(sum(2, 2)); // 7
// console.log(sum(2, 2, 2)); // 6
// console.log(sum(2, 2, 2, 2)); // 6

// console.log(sum(0, 0, 0))

// Forma atual de colocar um valor padrão - recomendada

function other_sum(num1 = 1, num2 = 2, num3 = 3, num4 = 4){
    return num1 + num2 + num3;

}

// console.log(other_sum(4, 5, 6));// 15
// console.log(other_sum()); // 6
// console.log(other_sum(2)); // 7
// console.log(other_sum(2, 2)); // 7
// console.log(other_sum(2, 2, 2)); // 6
// console.log(other_sum(2, 2, 2, 2)); // 6
// console.log(other_sum(0, 0, 0))

// console.log(other_sum('a', 'b', 'c'));//?
// console.log(other_sum(true, false, 'c'));//?
// console.log(other_sum(2, true, false));//?


/*
Em javascript, 1 é considerado true e 0 é considerado false
*/

function sum5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else {
        return 'Não foi possível efetuar a soma.';
    }
}

console.log(sum5(4, 5, 6));// 15
console.log(sum5()); // 6
console.log(sum5(2)); // 7
console.log(sum5(2, 2)); // 7
console.log(sum5(2, 2, 2)); // 6
console.log(sum5(2, 2, 2, 2)); // 6
console.log(sum5(0, 0, 0))

console.log(sum5('a', 'b', 'c'));//?
console.log(sum5(true, false, 'c'));//?
console.log(sum5(2, true, false));//?


