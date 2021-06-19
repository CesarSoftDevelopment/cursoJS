/**
 * Arrow Functions, é forma simplificada de escrever funções
 * Arrow =>
 */

// Forma 1

/*
function somar(num1, num2) {
    return num1 + num2;
    
}

console.log(somar(10, 10))
*/




// Forma 2

/*
let somar =  function(num1, num2) {
    return num1 + num2;
    
}

console.log(somar(10, 10));
*/




// Forma 3

//função de exemplo

// function somar1(n1, n2) {
//     return n1 + n2; 
// }

// let somar = somar1;

// console.log(somar(4, 6));

// Arrow Function

// let somar_numeros = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(somar_numeros(1, 32))

// let imprimir_nomes = (nome1, nome2) => {
//     return `${nome1} - ${nome2}`;
// }

// console.log(imprimir_nomes('Cesar', 'Developer'));



/*
Atenção:
Caso sua função tenha apenas um parâmetro de entrada e executa apenas uma linha, vc pode simplificar
ainda mais usando os arrows functions   
*/

// let dobrar = valor => valor * 2;

// function mensagem1() {
//     console.log('Evolua seu lado de programador');
// }

// mensagem1()

// const msg = () => console.log('Evolua seu lado de programador');

// msg();

//arrow function
/*
let somar = numero => numero * 3;

console.log(somar(2));
*/

// function diminuir(num1, num2){
//     return num1 - num2;
// }
// console.log(diminuir(2, 2));

// let diminuir2 = function(num1, num2){
//     return num1 - num2;
// }
// console.log(diminuir2(3, 3));

// Arrow Function
let somar4 = (num1, num2) => {
    return num1 + num2;
}

let dobrar = valor => valor * 2;