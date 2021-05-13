
/**
 * what does that mean?
 * Coração da linguagem javascript, funções
 * primeiro lugar o que são funções(what are functions?)
 * function is the element of programming that does some action!
 * inside brankets i can or not put input arguments to function
 * open key and close key
 * inside the is what the function execute
 * Simple it's simple working with functions
 * when we said programming of computers, programming languagem have elements that compoe the language
 * some the elements possuem more importancia than other
 *  no caso do javascript the functions are called like elements of first class citizens
 * isso significa que podemos usar funções, como qualque outro tipo de dado...
 * the function works like any other type of data
 * podemos utilizar as funções como tipos de dados
 * using branket in a function is to execute
 * Feature(recurso);
 * Functions can or not has input parameter
 * Functions can or not return values
 * the easiest functions that does not return nothing
 * Função que não retorna nada ela, retorna undefined
 * Podemos usar funções em javascript com qualquer tipo de dado
 * 
 */

function sum(num1, num2){
    return num1 + num2;
}

// 1º execute
/*
let res = sum(4, 6);
console.log(res);
*/

//console.log(sum(10, 5));

//example 1

/*
const execute = sum;

console.log(execute(8, 7));
*/

//example 2


function subtrair(num1, num2){
    return num1 - num2;
}

/*

function do_something(num1, num2, our_function){//função executada aqui dentro!
    return our_function(num1, num2)
}

console.log(do_something(5, 5, sum));
console.log(do_something(8, 3, subtrair));
*/

//exemplo 3

function other(our_function){
    return our_function;
}

const ret = other(subtrair);
//console.log(ret(8, 2));

/* 

Cidadão de primeira classe
First-Class Citizens
Higher-Order Function

*/


// exemplo 4(the easiest function)

/*
function message(){
    console.log('Evolua seu lado de programador')
}

let retur = message()
console.log(retur);
*/

// exemplo 05(typeof) -> verifica o tipo de dado que está sendo passado pra ele

let valores = [1, 3.4, true, sum];

for(let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i]));
}








